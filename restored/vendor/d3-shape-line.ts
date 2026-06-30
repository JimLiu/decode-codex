// Restored from ref/webview/assets/line-DIsP-Yv_.js
// D3 line generator restored from the Codex webview bundle.
import { pathN, pathT } from "./d3-path";
import { array } from "../utils/array";
import { monotoneR } from "./d3-curve-monotone";

type LineDatum = any;
type LineData = LineDatum[];
type LineAccessor = (datum: LineDatum, index: number, data: LineData) => any;
type LineDefinedAccessor = (
  datum: LineDatum,
  index: number,
  data: LineData,
) => boolean;
type LineContext = {
  lineStart(): void;
  lineEnd(): void;
  point(x: number, y: number): void;
};
type LineCurveFactory = (context: any) => LineContext;
type LineGenerator = {
  (data: Iterable<LineDatum> | ArrayLike<LineDatum>): string | null | undefined;
  x(): LineAccessor;
  x(accessor: LineAccessor | number): LineGenerator;
  y(): LineAccessor;
  y(accessor: LineAccessor | number): LineGenerator;
  defined(): LineDefinedAccessor;
  defined(defined: LineDefinedAccessor | boolean): LineGenerator;
  curve(): LineCurveFactory;
  curve(curveFactory: LineCurveFactory): LineGenerator;
  context(): any;
  context(context: any): LineGenerator;
};

function defaultXAccessor(point: unknown[]) {
  return point[0];
}
function defaultYAccessor(point: unknown[]) {
  return point[1];
}
export function line(
  xAccessorInput?: LineAccessor | number,
  yAccessorInput?: LineAccessor | number,
): LineGenerator {
  var definedAccessor = pathN(true),
    outputContext = null,
    curveFactory: LineCurveFactory = monotoneR,
    lineOutput: LineContext | null = null;
  var lineGenerator = createLinePath as LineGenerator,
    pathFactory = pathT(lineGenerator);
  var xAccessor =
    typeof xAccessorInput == "function"
      ? xAccessorInput
      : xAccessorInput === undefined
        ? defaultXAccessor
        : pathN(xAccessorInput);
  var yAccessor =
    typeof yAccessorInput == "function"
      ? yAccessorInput
      : yAccessorInput === undefined
        ? defaultYAccessor
        : pathN(yAccessorInput);
  function createLinePath(
    data: Iterable<LineDatum> | ArrayLike<LineDatum>,
  ): string | null | undefined {
    var index,
      points = array(data),
      pointCount = points.length,
      datum,
      isDefinedSegment = false,
      pathBuffer;
    for (
      outputContext ??
        (lineOutput = curveFactory((pathBuffer = pathFactory()))),
        index = 0;
      index <= pointCount;
      ++index
    ) {
      !(
        index < pointCount &&
        definedAccessor((datum = points[index]), index, points)
      ) === isDefinedSegment &&
        ((isDefinedSegment = !isDefinedSegment)
          ? lineOutput!.lineStart()
          : lineOutput!.lineEnd());
      isDefinedSegment &&
        lineOutput!.point(
          +xAccessor(datum, index, points),
          +yAccessor(datum, index, points),
        );
    }
    if (pathBuffer) return ((lineOutput = null), pathBuffer + "" || null);
  }
  return (
    (lineGenerator.x = function (accessor) {
      return arguments.length
        ? ((xAccessor =
            typeof accessor == "function" ? accessor : pathN(+accessor)),
          lineGenerator)
        : xAccessor;
    }),
    (lineGenerator.y = function (accessor) {
      return arguments.length
        ? ((yAccessor =
            typeof accessor == "function" ? accessor : pathN(+accessor)),
          lineGenerator)
        : yAccessor;
    }),
    (lineGenerator.defined = function (defined) {
      return arguments.length
        ? ((definedAccessor =
            typeof defined == "function" ? defined : pathN(!!defined)),
          lineGenerator)
        : definedAccessor;
    }),
    (lineGenerator.curve = function (nextCurveFactory) {
      return arguments.length
        ? ((curveFactory = nextCurveFactory),
          outputContext != null && (lineOutput = curveFactory(outputContext)),
          lineGenerator)
        : curveFactory;
    }),
    (lineGenerator.context = function (nextContext) {
      return arguments.length
        ? (nextContext == null
            ? (outputContext = lineOutput = null)
            : (lineOutput = curveFactory((outputContext = nextContext))),
          lineGenerator)
        : outputContext;
    }),
    lineGenerator
  );
}
