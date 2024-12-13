import { RefObject } from "react";

export function scrollCards(
  container: RefObject<HTMLElement>,
  distance: number,
  behavior: ScrollBehavior = "smooth"
  // direction: "next" | "prev" = "next"
): void {
  if (container.current) {
    container.current.scrollBy({
      left: distance,
      behavior,
    });
  }
}
