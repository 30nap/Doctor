import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ImageAsset } from "@/data/types";
import { cn } from "@/lib/utils";

type ImageFrameProps = {
  image: ImageAsset;
  /** Text shown inside the placeholder while `image.src` is null. */
  placeholderLabel: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

/**
 * Renders an optimized image, or a clearly labelled placeholder when no
 * image has been provided yet. The parent controls size/aspect ratio.
 */
export function ImageFrame({ image, placeholderLabel, className, sizes, priority, children }: ImageFrameProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${placeholderLabel} — ${image.alt}`}
          className="placeholder-hatch absolute inset-0 grid place-items-center"
        >
          <span className="flex flex-col items-center gap-2 px-4 text-center text-sm text-muted">
            <ImageIcon className="size-6 opacity-60" aria-hidden />
            {placeholderLabel}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
