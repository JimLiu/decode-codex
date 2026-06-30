// Restored from ref/webview/assets/auto-track-B-5mUyDz.js
// Segment auto-track link and form helpers used by the bundled analytics runtime.
import { withTimeout } from "../utils/callback";

type SegmentTrackProperties = Record<string, unknown> | undefined;
type SegmentTrackOptions = Record<string, unknown>;

type SegmentAutoTrackAnalytics = {
  settings: {
    timeout?: number;
  };
  track(
    eventName: string,
    properties: SegmentTrackProperties,
    options: SegmentTrackOptions,
  ): Promise<unknown>;
};

type ResolvableTrackValue<TElement extends Element, TValue> =
  | TValue
  | ((element: TElement) => TValue);

type ArrayLikeElements<TElement extends Element> =
  | TElement[]
  | NodeListOf<TElement>
  | {
      forEach(callback: (element: TElement) => void): void;
    }
  | {
      toArray(): TElement[];
    };

type AutoTrackTargets<TElement extends Element> =
  | TElement
  | ArrayLikeElements<TElement>;

type JQuerySubmitBinder = {
  submit(handler: (event: Event) => void): unknown;
};

type JQueryLike = (element: Element) => JQuerySubmitBinder;

type AutoTrackWindow = Window & {
  jQuery?: JQueryLike;
  Zepto?: JQueryLike;
};

function isModifiedClick(event: MouseEvent): boolean {
  return event.ctrlKey || event.shiftKey || event.metaKey || event.button === 1;
}

function opensInNewWindow(element: Element, href: string | null): boolean {
  return (element as HTMLAnchorElement).target === "_blank" && Boolean(href);
}

function preventDefaultNavigation(event: Event): void {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    (event as Event & { returnValue: boolean }).returnValue = false;
  }
}

function resolveTrackValue<TElement extends Element, TValue>(
  value: ResolvableTrackValue<TElement, TValue>,
  element: TElement,
): TValue {
  return typeof value === "function"
    ? (value as (element: TElement) => TValue)(element)
    : value;
}

function getElementTargets<TElement extends Element>(
  targets: AutoTrackTargets<TElement>,
): TElement[] {
  if (targets instanceof Element) return [targets as TElement];
  if ("toArray" in targets) return targets.toArray();
  if (Array.isArray(targets)) return targets;

  const collectedTargets: TElement[] = [];
  targets.forEach((element) => {
    collectedTargets.push(element);
  });
  return collectedTargets;
}

function getLinkHref(element: Element): string | null {
  return (
    element.getAttribute("href") ||
    element.getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
    element.getAttribute("xlink:href") ||
    element.getElementsByTagName("a")[0]?.getAttribute("href") ||
    null
  );
}

function getTrackingTimeout(analytics: SegmentAutoTrackAnalytics): number {
  return analytics.settings.timeout ?? 500;
}

export function autoTrackLink(
  this: SegmentAutoTrackAnalytics,
  targets: AutoTrackTargets<Element> | undefined,
  eventName: ResolvableTrackValue<Element, string>,
  properties: ResolvableTrackValue<Element, SegmentTrackProperties>,
  options?: SegmentTrackOptions,
): SegmentAutoTrackAnalytics {
  if (!targets) return this;

  for (const linkElement of getElementTargets(targets)) {
    linkElement.addEventListener(
      "click",
      (clickEvent: Event) => {
        const resolvedEventName = resolveTrackValue(eventName, linkElement);
        const resolvedProperties = resolveTrackValue(properties, linkElement);
        const href = getLinkHref(linkElement);
        const trackingCall = withTimeout(
          this.track(resolvedEventName, resolvedProperties, options ?? {}),
          getTrackingTimeout(this),
        );

        if (
          opensInNewWindow(linkElement, href) ||
          isModifiedClick(clickEvent as MouseEvent) ||
          !href
        ) {
          return;
        }

        preventDefaultNavigation(clickEvent);
        trackingCall
          .catch(console.error)
          .then(() => {
            window.location.href = href;
          })
          .catch(console.error);
      },
      false,
    );
  }

  return this;
}

export function autoTrackForm(
  this: SegmentAutoTrackAnalytics,
  targets: AutoTrackTargets<Element> | undefined,
  eventName: ResolvableTrackValue<Element, string>,
  properties: ResolvableTrackValue<Element, SegmentTrackProperties>,
  options?: SegmentTrackOptions,
): SegmentAutoTrackAnalytics {
  if (!targets) return this;

  for (const formElement of getElementTargets(targets)) {
    if (!(formElement instanceof Element)) {
      throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
    }

    const submitHandler = (submitEvent: Event) => {
      preventDefaultNavigation(submitEvent);

      const resolvedEventName = resolveTrackValue(eventName, formElement);
      const resolvedProperties = resolveTrackValue(properties, formElement);
      withTimeout(
        this.track(resolvedEventName, resolvedProperties, options ?? {}),
        getTrackingTimeout(this),
      )
        .catch(console.error)
        .then(() => {
          (formElement as HTMLFormElement).submit();
        })
        .catch(console.error);
    };
    const jqueryLike =
      (window as AutoTrackWindow).jQuery ?? (window as AutoTrackWindow).Zepto;

    if (jqueryLike) {
      jqueryLike(formElement).submit(submitHandler);
    } else {
      formElement.addEventListener("submit", submitHandler, false);
    }
  }

  return this;
}
