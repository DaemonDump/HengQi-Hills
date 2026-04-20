import { cn } from "@/lib/utils";

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center"
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base font-normal leading-relaxed text-text-secondary md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
