// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Measures the composer input width and the rendered single-line text width via
// ResizeObserver-backed ref callbacks, so `useComposerLayoutMode` can decide
// whether the prompt fits on one line. Returns the two ref setters and widths.
import { useState } from "react";

import { useResizeObserverRef } from "../boundaries/onboarding-commons-externals.facade";

export interface SingleLineComposerMeasure {
  setSingleLineInputMeasureRef: (element: Element | null) => void;
  setSingleLineTextMeasureRef: (element: Element | null) => void;
  singleLineInputWidth: number | null;
  singleLineTextWidth: number;
}

export function useSingleLineComposerMeasure(): SingleLineComposerMeasure {
  const [singleLineInputWidth, setSingleLineInputWidth] = useState<
    number | null
  >(null);
  const [singleLineTextWidth, setSingleLineTextWidth] = useState(0);

  const setSingleLineInputMeasureRef = useResizeObserverRef(
    (entry: ResizeObserverEntry) => {
      setSingleLineInputWidth(Math.floor(entry.contentRect.width));
    },
  );
  const setSingleLineTextMeasureRef = useResizeObserverRef(
    (entry: ResizeObserverEntry) => {
      setSingleLineTextWidth(Math.ceil(entry.contentRect.width));
    },
  );

  return {
    setSingleLineInputMeasureRef,
    setSingleLineTextMeasureRef,
    singleLineInputWidth,
    singleLineTextWidth,
  };
}
