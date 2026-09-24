"use client";

import { useEffect } from "react";
import { withBasePath } from "@/lib/utils";

/** Sends visitors of unknown URLs (e.g. mistyped or mangled links) to the home page. */
export function RedirectHome() {
  useEffect(() => {
    window.location.replace(withBasePath("/"));
  }, []);
  return null;
}
