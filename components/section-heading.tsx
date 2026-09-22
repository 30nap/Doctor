import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, lead, align = "start", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <span aria-hidden className="h-px w-6 bg-primary/50" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-[1.75rem] font-bold text-ink md:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-ink-soft">{lead}</p>}
    </div>
  );
}
