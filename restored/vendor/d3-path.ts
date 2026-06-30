// Restored from ref/webview/assets/path-DSoH76MG.js
// Typed D3 path builder helpers restored from the Codex webview bundle.

const PI = Math.PI;
const TAU = 2 * PI;
const EPSILON = 1e-6;
const TAU_EPSILON = TAU - EPSILON;

type AppendCommand = (
  this: SvgPathBuilder,
  strings: TemplateStringsArray,
  ...values: Array<number | string>
) => void;

type DigitConfigurable<TShape extends object> = TShape & {
  digits: {
    (): number | null;
    (digits: number | null): TShape;
  };
};

export function constantAccessor<Value>(value: Value): () => Value {
  return function constantValue() {
    return value;
  };
}

function appendRawPath(
  this: SvgPathBuilder,
  strings: TemplateStringsArray,
  ...values: Array<number | string>
): void {
  this._ += strings[0];
  for (let index = 1; index < strings.length; ++index) {
    this._ += values[index - 1] + strings[index];
  }
}

function createRoundedAppender(digits: number): AppendCommand {
  const roundedDigits = Math.floor(digits);
  if (!(roundedDigits >= 0)) throw Error(`invalid digits: ${digits}`);
  if (roundedDigits > 15) return appendRawPath;

  const scale = 10 ** roundedDigits;
  return function appendRoundedPath(
    this: SvgPathBuilder,
    strings: TemplateStringsArray,
    ...values: Array<number | string>
  ): void {
    this._ += strings[0];
    for (let index = 1; index < strings.length; ++index) {
      this._ += Math.round(Number(values[index - 1]) * scale) / scale;
      this._ += strings[index];
    }
  };
}

class SvgPathBuilder {
  _x0: number | null = null;
  _y0: number | null = null;
  _x1: number | null = null;
  _y1: number | null = null;
  _: string = "";
  private _append: AppendCommand;

  constructor(digits?: number | null) {
    this._append =
      digits == null ? appendRawPath : createRoundedAppender(digits);
  }

  moveTo(x: number, y: number): void {
    this._append`M${(this._x0 = this._x1 = +x)},${(this._y0 = this._y1 = +y)}`;
  }

  closePath(): void {
    if (this._x1 !== null) {
      this._x1 = this._x0;
      this._y1 = this._y0;
      this._append`Z`;
    }
  }

  lineTo(x: number, y: number): void {
    this._append`L${(this._x1 = +x)},${(this._y1 = +y)}`;
  }

  quadraticCurveTo(
    controlX: number,
    controlY: number,
    x: number,
    y: number,
  ): void {
    this
      ._append`Q${+controlX},${+controlY},${(this._x1 = +x)},${(this._y1 = +y)}`;
  }

  bezierCurveTo(
    controlX1: number,
    controlY1: number,
    controlX2: number,
    controlY2: number,
    x: number,
    y: number,
  ): void {
    this
      ._append`C${+controlX1},${+controlY1},${+controlX2},${+controlY2},${(this._x1 = +x)},${(this._y1 = +y)}`;
  }

  arcTo(
    tangentX1: number,
    tangentY1: number,
    tangentX2: number,
    tangentY2: number,
    radius: number,
  ): void {
    tangentX1 = +tangentX1;
    tangentY1 = +tangentY1;
    tangentX2 = +tangentX2;
    tangentY2 = +tangentY2;
    radius = +radius;
    if (radius < 0) throw Error(`negative radius: ${radius}`);

    if (this._x1 === null || this._y1 === null) {
      this._append`M${(this._x1 = tangentX1)},${(this._y1 = tangentY1)}`;
      return;
    }

    const currentX = this._x1;
    const currentY = this._y1;
    const x21 = tangentX2 - tangentX1;
    const y21 = tangentY2 - tangentY1;
    const x01 = currentX - tangentX1;
    const y01 = currentY - tangentY1;
    const l01Squared = x01 * x01 + y01 * y01;

    if (l01Squared <= EPSILON) return;
    if (!(Math.abs(y01 * x21 - y21 * x01) > EPSILON) || !radius) {
      this._append`L${(this._x1 = tangentX1)},${(this._y1 = tangentY1)}`;
      return;
    }

    const x20 = tangentX2 - currentX;
    const y20 = tangentY2 - currentY;
    const l21Squared = x21 * x21 + y21 * y21;
    const l20Squared = x20 * x20 + y20 * y20;
    const l21 = Math.sqrt(l21Squared);
    const l01 = Math.sqrt(l01Squared);
    const tangentLength =
      radius *
      Math.tan(
        (PI -
          Math.acos((l21Squared + l01Squared - l20Squared) / (2 * l21 * l01))) /
          2,
      );
    const t01 = tangentLength / l01;
    const t21 = tangentLength / l21;

    if (Math.abs(t01 - 1) > EPSILON) {
      this._append`L${tangentX1 + t01 * x01},${tangentY1 + t01 * y01}`;
    }
    this
      ._append`A${radius},${radius},0,0,${+(y01 * x20 > x01 * y20)},${(this._x1 = tangentX1 + t21 * x21)},${(this._y1 = tangentY1 + t21 * y21)}`;
  }

  arc(
    centerX: number,
    centerY: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void {
    centerX = +centerX;
    centerY = +centerY;
    radius = +radius;
    counterclockwise = !!counterclockwise;
    if (radius < 0) throw Error(`negative radius: ${radius}`);

    const startOffsetX = radius * Math.cos(startAngle);
    const startOffsetY = radius * Math.sin(startAngle);
    const startX = centerX + startOffsetX;
    const startY = centerY + startOffsetY;
    const sweepFlag = counterclockwise ? 0 : 1;
    let deltaAngle = counterclockwise
      ? startAngle - endAngle
      : endAngle - startAngle;

    if (this._x1 === null) {
      this._append`M${startX},${startY}`;
    } else if (
      Math.abs(this._x1 - startX) > EPSILON ||
      Math.abs(this._y1! - startY) > EPSILON
    ) {
      this._append`L${startX},${startY}`;
    }

    if (!radius) return;
    if (deltaAngle < 0) deltaAngle = (deltaAngle % TAU) + TAU;
    if (deltaAngle > TAU_EPSILON) {
      this
        ._append`A${radius},${radius},0,1,${sweepFlag},${centerX - startOffsetX},${centerY - startOffsetY}A${radius},${radius},0,1,${sweepFlag},${(this._x1 = startX)},${(this._y1 = startY)}`;
    } else if (deltaAngle > EPSILON) {
      this
        ._append`A${radius},${radius},0,${+(deltaAngle >= PI)},${sweepFlag},${(this._x1 = centerX + radius * Math.cos(endAngle))},${(this._y1 = centerY + radius * Math.sin(endAngle))}`;
    }
  }

  rect(x: number, y: number, width: number, height: number): void {
    this
      ._append`M${(this._x0 = this._x1 = +x)},${(this._y0 = this._y1 = +y)}h${(width = +width)}v${+height}h${-width}Z`;
  }

  toString(): string {
    return this._;
  }
}

export function withPathDigits<TShape extends object>(
  shape: TShape,
): () => SvgPathBuilder {
  let digits: number | null = 3;
  const configurableShape = shape as DigitConfigurable<TShape>;
  configurableShape.digits = function pathDigits(nextDigits?: number | null) {
    if (!arguments.length) return digits;
    if (nextDigits == null) {
      digits = null;
    } else {
      const roundedDigits = Math.floor(nextDigits);
      if (!(roundedDigits >= 0)) {
        throw RangeError(`invalid digits: ${nextDigits}`);
      }
      digits = roundedDigits;
    }
    return shape;
  } as DigitConfigurable<TShape>["digits"];
  return () => new SvgPathBuilder(digits);
}

export const pathN = constantAccessor;
export const pathT = withPathDigits;
