"use server";

import { Resend } from "resend";

const TO_EMAIL = "vladimira@vnbiorezonance.cz";
const FROM_EMAIL = "formular@vnbiorezonance.cz";

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Odeslání se nepodařilo - chybí konfigurace e-mailu. Napište mi prosím přímo na vladimira@vnbiorezonance.cz nebo WhatsApp +420 777 874 067.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const dob = String(formData.get("dob") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const type = String(formData.get("type") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const ks = formData.get("ks") === "on";
  const te = formData.get("te") === "on";

  if (!name || !email || !phone || !topic) {
    return {
      status: "error",
      message: "Vyplňte prosím všechna povinná pole.",
    };
  }

  const flags: string[] = [];
  if (ks) flags.push("⚠️ Kardiostimulátor / defibrilátor");
  if (te) flags.push("⚠️ První trimestr těhotenství");

  const rows = [
    ["Jméno", name],
    ["Datum narození", dob || "—"],
    ["E-mail", email],
    ["Telefon", phone],
    ["Stav", type || "—"],
  ];

  const html = `
<!doctype html>
<html lang="cs"><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#f5f0e7; padding:24px; color:#16140f; margin:0;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;box-shadow:0 8px 24px rgba(0,0,0,.06);">
    <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#a14f42;font-weight:700;margin:0 0 8px;">Nová poptávka z webu</p>
    <h1 style="font-family:Georgia,serif;font-weight:500;font-size:24px;line-height:1.25;margin:0 0 24px;color:#16140f;">${escape(name)}</h1>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #eee;color:#5e574e;font-size:13px;width:140px;">${escape(label)}</td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;font-size:14px;font-weight:500;">${escape(value)}</td>
        </tr>`,
        )
        .join("")}
    </table>
    ${
      flags.length
        ? `<div style="background:#fff3e0;border:1px solid #e8a87a;border-radius:10px;padding:14px 16px;margin-bottom:20px;color:#7a3f0f;font-size:13.5px;font-weight:500;">${flags.join("<br>")}</div>`
        : ""
    }
    <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#5e574e;font-weight:700;margin:0 0 8px;">Co řeší</p>
    <div style="background:#f5f0e7;border-radius:10px;padding:16px 18px;font-size:14px;line-height:1.6;white-space:pre-wrap;color:#16140f;">${escape(topic)}</div>
    <p style="margin-top:28px;font-size:12px;color:#5e574e;">Odpovědět můžete přímo na tento e-mail - půjde návštěvníkovi na ${escape(email)}.</p>
  </div>
</body></html>`.trim();

  const text = [
    `Nová poptávka z webu`,
    ``,
    `Jméno: ${name}`,
    `Datum narození: ${dob || "—"}`,
    `E-mail: ${email}`,
    `Telefon: ${phone}`,
    `Stav: ${type || "—"}`,
    ``,
    ...(flags.length ? [`KONTRAINDIKACE: ${flags.join(" / ")}`, ``] : []),
    `Co řeší:`,
    topic,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Biorezonance formulář <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nová poptávka: ${name}${flags.length ? " ⚠️" : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message:
          "Odeslání se nepodařilo. Zkuste to prosím znovu, nebo napište přímo na vladimira@vnbiorezonance.cz.",
      };
    }

    return { status: "ok" };
  } catch (err) {
    console.error("Contact form exception:", err);
    return {
      status: "error",
      message:
        "Nastala chyba spojení. Napište mi prosím přímo na vladimira@vnbiorezonance.cz nebo na WhatsApp.",
    };
  }
}
