import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";

  return (
    <Reveal className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display mt-3 text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink/70">{description}</p>
      ) : null}
      {isCenter ? (
        <div className="divider-ornament mt-6">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        </div>
      ) : null}
    </Reveal>
  );
}
