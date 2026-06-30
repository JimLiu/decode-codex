// Restored from ref/webview/assets/band-DVYrpIoC.js
// d3-scale band and point scales restored from the Codex webview bundle.
import { Ordinal } from "../utils/ordinal";
import { init } from "../utils/init";

type BandScale = {
  (value: unknown): number | undefined;
  domain(): unknown[];
  domain(values: Iterable<unknown>): BandScale;
  range(): [number, number];
  range(values: Iterable<number>): BandScale;
  rangeRound(values: Iterable<number>): BandScale;
  bandwidth(): number;
  step(): number;
  round(): boolean;
  round(value: boolean): BandScale;
  padding(): number;
  padding(value: number): BandScale;
  paddingInner(): number;
  paddingInner(value: number): BandScale;
  paddingOuter(): number;
  paddingOuter(value: number): BandScale;
  align(): number;
  align(value: number): BandScale;
  copy(): BandScale;
};

type OrdinalBackedBandScale = BandScale & {
  unknown?: unknown;
};

type InitReceiver = {
  range(value?: unknown): {
    domain(value: unknown): unknown;
  };
};

export function range(start: number, stop?: number, step?: number): number[] {
  start = +start;
  if (arguments.length < 2) {
    stop = start;
    start = 0;
  } else {
    stop = +(stop as number);
  }
  step = arguments.length < 3 ? 1 : +(step as number);

  const length = Math.max(0, Math.ceil(((stop as number) - start) / step)) | 0;
  const values = new Array<number>(length);
  for (let index = 0; index < length; index += 1) {
    values[index] = start + index * step;
  }
  return values;
}

export function scaleBand(): BandScale;
export function scaleBand(outputRange: Iterable<number>): BandScale;
export function scaleBand(
  domainValues: Iterable<unknown>,
  outputRange: Iterable<number>,
): BandScale;
export function scaleBand(
  ...args: [] | [Iterable<number>] | [Iterable<unknown>, Iterable<number>]
): BandScale {
  const scale = Ordinal().unknown(undefined) as OrdinalBackedBandScale;
  const getDomain = scale.domain;
  const setOrdinalRange = scale.range;
  let rangeStart = 0;
  let rangeStop = 1;
  let stepValue = 0;
  let bandwidthValue = 0;
  let roundRange = false;
  let innerPadding = 0;
  let outerPadding = 0;
  let alignment = 0.5;

  delete scale.unknown;

  function rescale(): BandScale {
    const domainLength = getDomain().length;
    const reverse = rangeStop < rangeStart;
    let start = reverse ? rangeStop : rangeStart;
    const stop = reverse ? rangeStart : rangeStop;

    stepValue =
      (stop - start) /
      Math.max(1, domainLength - innerPadding + outerPadding * 2);
    if (roundRange) stepValue = Math.floor(stepValue);

    start +=
      (stop - start - stepValue * (domainLength - innerPadding)) * alignment;
    bandwidthValue = stepValue * (1 - innerPadding);

    if (roundRange) {
      start = Math.round(start);
      bandwidthValue = Math.round(bandwidthValue);
    }

    const positions = range(domainLength).map(
      (index) => start + stepValue * index,
    );
    return setOrdinalRange(
      reverse ? positions.reverse() : positions,
    ) as BandScale;
  }

  scale.domain = function (values?: Iterable<unknown>): unknown[] | BandScale {
    return arguments.length
      ? (getDomain(values ?? []), rescale())
      : getDomain();
  } as BandScale["domain"];

  scale.range = function (
    values?: Iterable<number>,
  ): [number, number] | BandScale {
    if (!arguments.length) return [rangeStart, rangeStop];
    const [nextStart, nextStop] = Array.from(values ?? []);
    rangeStart = +nextStart;
    rangeStop = +nextStop;
    return rescale();
  } as BandScale["range"];

  scale.rangeRound = function (values: Iterable<number>): BandScale {
    const [nextStart, nextStop] = Array.from(values);
    rangeStart = +nextStart;
    rangeStop = +nextStop;
    roundRange = true;
    return rescale();
  };

  scale.bandwidth = function (): number {
    return bandwidthValue;
  };

  scale.step = function (): number {
    return stepValue;
  };

  scale.round = function (value?: boolean): boolean | BandScale {
    return arguments.length ? ((roundRange = !!value), rescale()) : roundRange;
  } as BandScale["round"];

  scale.padding = function (value?: number): number | BandScale {
    return arguments.length
      ? ((innerPadding = Math.min(1, (outerPadding = +value!))), rescale())
      : innerPadding;
  } as BandScale["padding"];

  scale.paddingInner = function (value?: number): number | BandScale {
    return arguments.length
      ? ((innerPadding = Math.min(1, +value!)), rescale())
      : innerPadding;
  } as BandScale["paddingInner"];

  scale.paddingOuter = function (value?: number): number | BandScale {
    return arguments.length
      ? ((outerPadding = +value!), rescale())
      : outerPadding;
  } as BandScale["paddingOuter"];

  scale.align = function (value?: number): number | BandScale {
    return arguments.length
      ? ((alignment = Math.max(0, Math.min(1, +value!))), rescale())
      : alignment;
  } as BandScale["align"];

  scale.copy = function (): BandScale {
    return scaleBand(getDomain(), [rangeStart, rangeStop])
      .round(roundRange)
      .paddingInner(innerPadding)
      .paddingOuter(outerPadding)
      .align(alignment);
  };

  return init.apply(
    rescale() as unknown as InitReceiver,
    args as unknown as [unknown?, unknown?],
  ) as unknown as BandScale;
}

export function scalePoint(): BandScale;
export function scalePoint(outputRange: Iterable<number>): BandScale;
export function scalePoint(
  domainValues: Iterable<unknown>,
  outputRange: Iterable<number>,
): BandScale;
export function scalePoint(
  ...args: [] | [Iterable<number>] | [Iterable<unknown>, Iterable<number>]
): BandScale {
  const scale = scaleBand
    .apply(
      null,
      args as [Iterable<number>?] | [Iterable<unknown>, Iterable<number>],
    )
    .paddingInner(1);
  const copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete (scale as Partial<BandScale>).paddingInner;
  delete (scale as Partial<BandScale>).paddingOuter;
  scale.copy = function (): BandScale {
    return scalePointFromBand(copy());
  };

  return scale;
}

function scalePointFromBand(scale: BandScale): BandScale {
  const copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete (scale as Partial<BandScale>).paddingInner;
  delete (scale as Partial<BandScale>).paddingOuter;
  scale.copy = function (): BandScale {
    return scalePointFromBand(copy());
  };

  return scale;
}

export const bandR = range;
export const bandT = scaleBand;
export const bandN = scalePoint;
