"use client";

type Props = {
  name: string;
  typeValue?: string;
};

export default function ServiceLink({ name, typeValue }: Props) {
  return (
    <a
      href="#kontakt"
      className="svc-link"
      aria-label={`Objednat se na ${name}`}
      onClick={(e) => {
        e.preventDefault();

        const topic = document.getElementById("topic") as HTMLTextAreaElement | null;
        if (topic) {
          const prefix = `Mám zájem o: ${name}.`;
          if (!topic.value.trim()) {
            topic.value = `${prefix}\n\n`;
          } else if (!topic.value.startsWith("Mám zájem o:")) {
            topic.value = `${prefix}\n\n${topic.value}`;
          }
        }

        if (typeValue) {
          const select = document.getElementById("type") as HTMLSelectElement | null;
          if (select) select.value = typeValue;
        }

        const target = document.getElementById("kontakt");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            topic?.focus();
            topic?.setSelectionRange(topic.value.length, topic.value.length);
          }, 600);
        }
      }}
    />
  );
}
