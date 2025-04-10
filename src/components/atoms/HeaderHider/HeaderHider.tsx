"use client";

import { type PropsWithChildren, type ComponentProps, useEffect, useId } from "react";

export type HeaderHiderProps = ComponentProps<'div'> & PropsWithChildren;

export const HeaderHider = (props: HeaderHiderProps) => {
  const { children, ...otherProps } = props;
  const headerId = useId();

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const $header = document.getElementById(headerId);

      if( !$header) return;

      if( previousScrollPosition > currentScrollPosition ){
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
    <div id={headerId} {...otherProps}>
      { children }
    </div>
  );
}

export default HeaderHider;