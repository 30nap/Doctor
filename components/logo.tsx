import { doctor } from "@/data/doctor";
import { ToothIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";

export function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <a
      href="#home"
      className={cn("group inline-flex items-center gap-3 rounded-full", className)}
      aria-label={`${doctor.name} — صفحه اصلی`}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-full transition-colors",
          inverse ? "bg-canvas/10 text-canvas" : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white",
        )}
      >
        <ToothIcon size={20} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={cn("text-[0.95rem] font-bold", inverse ? "text-canvas" : "text-ink")}>{doctor.name}</span>
        <span className={cn("text-xs", inverse ? "text-canvas/60" : "text-muted")}>{doctor.title}</span>
      </span>
    </a>
  );
}
