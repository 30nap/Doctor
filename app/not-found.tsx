import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { RedirectHome } from "@/components/redirect-home";
import { withBasePath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <RedirectHome />
      <div>
        <p className="text-5xl font-extrabold text-primary">۴۰۴</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">این صفحه پیدا نشد</h1>
        <p className="mt-2 text-ink-soft">در حال انتقال به صفحه اصلی…</p>
        <Button asChild size="lg" className="mt-8">
          <a href={withBasePath("/")}>بازگشت به صفحه اصلی</a>
        </Button>
      </div>
    </main>
  );
}
