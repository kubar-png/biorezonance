"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8"
    >
      <Field label="First name *" name="firstName" />
      <Field label="Last name *" name="lastName" />
      <Field label="Email *" name="email" type="email" />
      <PhoneField label="Phone" />

      <div className="sm:col-span-2">
        <Field label="Company / Organization" name="company" />
      </div>

      <div className="sm:col-span-2">
        <label className="field-label">How can we help?</label>
        <textarea
          rows={5}
          className="field-line resize-none"
          name="message"
        />
      </div>

      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full btn-pill py-5 text-[16px]"
        >
          Get a quote
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input type={type} name={name} className="field-line" />
    </label>
  );
}

function PhoneField({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <div className="flex items-center gap-3 border-b border-[#b9b5b0] pt-3 pb-2">
        <span className="inline-flex items-center gap-1 text-[var(--muted)]">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
          </svg>
          <svg viewBox="0 0 12 12" width="10" height="10" fill="currentColor">
            <path d="M2 4l4 4 4-4" />
          </svg>
        </span>
        <input
          type="tel"
          className="flex-1 bg-transparent outline-none py-1 text-[15px]"
        />
      </div>
    </label>
  );
}
