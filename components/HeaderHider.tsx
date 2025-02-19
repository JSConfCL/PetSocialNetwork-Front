"use client";

import { PropsWithChildren, useEffect, useId } from "react";

export function HeaderHider({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const headerId = useId();

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    function handleScroll() {
      const currentScrollPosition = window.scrollY;

      const $header = document.getElementById(headerId);

      if ($header === null) return;

      if (previousScrollPosition > currentScrollPosition) {
        $header.style.top = "0px";
      } else {
        $header.style.top = `-${$header.offsetHeight}px`;
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerId]);

  return (
    <header id={headerId} className={className}>
      {children}
    </header>
  );
}
