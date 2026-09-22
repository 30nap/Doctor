import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

/** Minimal line icons in the Lucide style for glyphs Lucide doesn't ship. */
function base({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function ToothIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7.5 3.5c-2.4 0-4 1.9-4 4.6 0 2 .8 3.3 1.4 4.6.6 1.4.8 3 1.1 5 .3 2.1 1 3.3 2 3.3 1.3 0 1.6-1.8 2-3.7.3-1.4.8-2.5 2-2.5s1.7 1.1 2 2.5c.4 1.9.7 3.7 2 3.7 1 0 1.7-1.2 2-3.3.3-2 .5-3.6 1.1-5 .6-1.3 1.4-2.6 1.4-4.6 0-2.7-1.6-4.6-4-4.6-1.8 0-2.6 1-4.5 1s-2.7-1-4.5-1Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.2Z" />
      <path d="M9 8.6c0-.4.3-.8.7-.8h.6c.3 0 .5.2.6.4l.6 1.5c.1.3 0 .6-.2.8l-.5.5a5.5 5.5 0 0 0 2.4 2.4l.5-.5c.2-.2.5-.3.8-.2l1.5.6c.2.1.4.3.4.6v.6c0 .4-.4.7-.8.7A6.2 6.2 0 0 1 9 8.6Z" />
    </svg>
  );
}
