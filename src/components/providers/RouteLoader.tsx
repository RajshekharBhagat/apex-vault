"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const url = new URL(anchor.href, window.location.href);
      const sameUrl =
        url.pathname === window.location.pathname &&
        url.search === window.location.search;

      if (url.origin !== window.location.origin || sameUrl) return;

      setIsLoading(true);
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  useEffect(() => {
    // Route transition finished.
    setIsLoading(false);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-100 h-0.5 bg-blue-500/20">
      <div className="h-full w-1/3 bg-blue-500 route-loader-bar" />
    </div>
  );
}
