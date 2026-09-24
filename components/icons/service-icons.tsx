import {
  Baby,
  BrushCleaning,
  Crown,
  MessageCircleHeart,
  ScanSearch,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { ToothIcon } from "./brand-icons";

/** Icon names available to data/services.ts. Add new ones here. */
export const serviceIcons = {
  consultation: Stethoscope,
  restoration: ToothIcon,
  cleaning: BrushCleaning,
  rootCanal: ScanSearch,
  smile: Smile,
  whitening: Sparkles,
  crown: Crown,
  prevention: ShieldCheck,
  care: MessageCircleHeart,
  surgery: Syringe,
  pediatric: Baby,
} satisfies Record<string, LucideIcon | typeof ToothIcon>;

export type ServiceIconName = keyof typeof serviceIcons;
