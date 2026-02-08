"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CopyCodeWrapperProps {
  html: string;
  className?: string;
}

export function CopyCodeWrapper({ html, className }: CopyCodeWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const figures = container.querySelectorAll("[data-rehype-pretty-code-figure]");

    figures.forEach((figure) => {
      // Skip if button already added
      if (figure.querySelector("[data-copy-btn]")) return;

      const pre = figure.querySelector("pre");
      if (!pre) return;

      // Make figure relative for button positioning
      (figure as HTMLElement).style.position = "relative";

      const btn = document.createElement("button");
      btn.setAttribute("data-copy-btn", "");
      btn.className =
        "absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-400 opacity-0 transition-all hover:bg-zinc-700 hover:text-zinc-200 group-hover:opacity-100";
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      btn.title = "Copy code";

      // Show on figure hover
      figure.addEventListener("mouseenter", () => {
        btn.style.opacity = "1";
      });
      figure.addEventListener("mouseleave", () => {
        if (!btn.getAttribute("data-copied")) {
          btn.style.opacity = "0";
        }
      });

      btn.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        const text = code?.textContent ?? pre.textContent ?? "";

        try {
          await navigator.clipboard.writeText(text);
          btn.setAttribute("data-copied", "true");
          btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
          btn.classList.remove("text-zinc-400");
          btn.classList.add("text-green-400", "border-green-500/50");
          btn.style.opacity = "1";

          setTimeout(() => {
            btn.removeAttribute("data-copied");
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
            btn.classList.remove("text-green-400", "border-green-500/50");
            btn.classList.add("text-zinc-400");
            btn.style.opacity = "0";
          }, 2000);
        } catch {
          // Fallback for older browsers
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
      });

      figure.appendChild(btn);
    });
  }, [html]);

  return (
    <article
      ref={ref}
      className={cn("prose prose-invert max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
