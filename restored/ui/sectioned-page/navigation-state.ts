// Restored from ref/webview/assets/sectioned-page-BgyNiIIs.js
// Scroll tracking state for the sectioned page navigation.
import React from "react";
import type { SectionRegistry } from "./types";

const ACTIVE_SECTION_OFFSET_PX = 96;

export function useSectionedPageNavigationState({
  container,
  sectionIds,
}: {
  container: HTMLElement | null;
  sectionIds: string[];
}) {
  const sectionElementsRef = React.useRef<SectionRegistry>({});
  const activeSectionId = useActiveSectionId({
    container,
    sectionElementsRef,
    sectionIds,
  });
  const setSectionElement = React.useCallback(
    (sectionId: string, element: HTMLElement | null) => {
      if (element == null) {
        delete sectionElementsRef.current[sectionId];
        return;
      }
      sectionElementsRef.current[sectionId] = element;
    },
    [],
  );
  const scrollToSection = React.useCallback((sectionId: string) => {
    sectionElementsRef.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
  return {
    activeSectionId,
    scrollToSection,
    setSectionElement,
  };
}

function useActiveSectionId({
  container,
  sectionElementsRef,
  sectionIds,
}: {
  container: HTMLElement | null;
  sectionElementsRef: React.RefObject<SectionRegistry>;
  sectionIds: string[];
}) {
  const subscribe = React.useCallback(
    (notify: () => void) => {
      if (container == null) return noop;
      const handleChange = () => {
        notify();
      };
      container.addEventListener("scroll", handleChange, {
        passive: true,
      });
      const resizeObserver =
        typeof ResizeObserver === "undefined"
          ? null
          : new ResizeObserver(handleChange);
      if (resizeObserver != null) {
        resizeObserver.observe(container);
        for (const sectionId of sectionIds) {
          const element = sectionElementsRef.current[sectionId];
          if (element != null) resizeObserver.observe(element);
        }
      }
      return () => {
        container.removeEventListener("scroll", handleChange);
        resizeObserver?.disconnect();
      };
    },
    [container, sectionElementsRef, sectionIds],
  );
  const getSnapshot = React.useCallback(() => {
    if (sectionIds.length === 0) return null;
    if (container == null) return sectionIds[0];
    const activeTop =
      container.getBoundingClientRect().top + ACTIVE_SECTION_OFFSET_PX;
    let activeSectionId = sectionIds[0];
    for (const sectionId of sectionIds) {
      const element = sectionElementsRef.current[sectionId];
      if (element == null) continue;
      if (element.getBoundingClientRect().top <= activeTop) {
        activeSectionId = sectionId;
      } else {
        break;
      }
    }
    return activeSectionId;
  }, [container, sectionElementsRef, sectionIds]);
  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

function noop() {}
