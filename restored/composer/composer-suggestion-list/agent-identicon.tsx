// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import type { SVGProps } from "react";
import clsx from "clsx";
const SCAN_ANIMATION_DELAY_MS = 200;
const GRID_SIZE = 5;
const MIRRORED_COLUMNS = 3;
const HASH_MODULUS = 4_294_967_296;
const HASH_SEED = 2_166_136_261;
const HASH_MULTIPLIER = 131;
const CELL_SIZE = 4;
const IDENTICON_COLORS = [
  "var(--color-token-charts-yellow)",
  "var(--color-token-charts-orange)",
  "var(--color-token-charts-red)",
  "var(--color-token-charts-purple)",
  "var(--color-token-charts-blue)",
] as const;
const identiconStyles = {
  emptyScanCell: "_emptyScanCell_1qzyf_1",
  agentIdenticonEmptyScan: "_agentIdenticonEmptyScan_1qzyf_1",
  filledScanCell: "_filledScanCell_1qzyf_6",
  agentIdenticonFilledScan: "_agentIdenticonFilledScan_1qzyf_1",
} as const;
type IdenticonCell = {
  animationDelayMs: number;
  column: number;
  row: number;
};
type ScanCell = IdenticonCell & {
  filled: boolean;
};
type AgentIdenticonProps = SVGProps<SVGSVGElement> & {
  active?: boolean;
  seed: string;
};
export function AgentIdenticon({
  active = false,
  className,
  seed,
  ...svgProps
}: AgentIdenticonProps) {
  const identicon = buildIdenticon(seed);
  return (
    <svg
      {...svgProps}
      className={clsx("shrink-0", className)}
      viewBox="-2 -1 24 24"
      fill="none"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
    >
      {identicon.cells.map((cell) => (
        <rect
          key={`${cell.row}:${cell.column}`}
          className={active ? identiconStyles.filledScanCell : undefined}
          x={cell.column * CELL_SIZE}
          y={cell.row * CELL_SIZE}
          width={CELL_SIZE}
          height={CELL_SIZE}
          fill={identicon.color}
          style={
            active
              ? {
                  animationDelay: `${cell.animationDelayMs}ms`,
                }
              : undefined
          }
        />
      ))}
      {active
        ? identicon.scanCells.map((cell) =>
            cell.filled ? null : (
              <rect
                key={`scan:${cell.row}:${cell.column}`}
                className={identiconStyles.emptyScanCell}
                x={cell.column * CELL_SIZE}
                y={cell.row * CELL_SIZE}
                width={CELL_SIZE}
                height={CELL_SIZE}
                fill={identicon.color}
                style={{
                  animationDelay: `${cell.animationDelayMs}ms`,
                }}
              />
            ),
          )
        : null}
    </svg>
  );
}
function buildIdenticon(seed: string): {
  cells: IdenticonCell[];
  color: string;
  scanCells: ScanCell[];
} {
  const shapeHash = hashSeed(`${seed}:shape`);
  const colorHash = hashSeed(`${seed}:color`);
  const cells: IdenticonCell[] = [];
  const filledCellKeys = new Set<string>();
  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let column = 0; column < MIRRORED_COLUMNS; column += 1) {
      if (!hasHashBit(shapeHash, row * MIRRORED_COLUMNS + column)) continue;
      cells.push({
        animationDelayMs: getScanAnimationDelay(row),
        column,
        row,
      });
      filledCellKeys.add(getCellKey(column, row));
      const mirroredColumn = GRID_SIZE - 1 - column;
      if (mirroredColumn !== column) {
        cells.push({
          animationDelayMs: getScanAnimationDelay(row),
          column: mirroredColumn,
          row,
        });
        filledCellKeys.add(getCellKey(mirroredColumn, row));
      }
    }
  }
  if (cells.length === 0) {
    const center = Math.floor(GRID_SIZE / 2);
    cells.push({
      animationDelayMs: getScanAnimationDelay(center),
      column: center,
      row: center,
    });
    filledCellKeys.add(getCellKey(center, center));
  }
  return {
    cells,
    color: getIdenticonColor(colorHash),
    scanCells: buildScanCells(filledCellKeys),
  };
}
function hashSeed(value: string): number {
  let hash = HASH_SEED;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * HASH_MULTIPLIER + value.charCodeAt(index)) % HASH_MODULUS;
  }
  return hash;
}
function hasHashBit(hash: number, bitIndex: number): boolean {
  return Math.floor(hash / 2 ** bitIndex) % 2 === 1;
}
function getCellKey(column: number, row: number): string {
  return `${row}:${column}`;
}
function buildScanCells(filledCellKeys: Set<string>): ScanCell[] {
  const scanCells: ScanCell[] = [];
  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let column = 0; column < GRID_SIZE; column += 1) {
      scanCells.push({
        animationDelayMs: getScanAnimationDelay(row),
        column,
        filled: filledCellKeys.has(getCellKey(column, row)),
        row,
      });
    }
  }
  return scanCells;
}
function getScanAnimationDelay(row: number): number {
  return row * SCAN_ANIMATION_DELAY_MS;
}
function getIdenticonColor(hash: number): string {
  return getIdenticonColorByIndex(
    Math.floor((hash / HASH_MODULUS) * IDENTICON_COLORS.length),
  );
}
function getIdenticonColorByIndex(index: number): string {
  return (
    IDENTICON_COLORS[index % IDENTICON_COLORS.length] ??
    "var(--color-token-charts-yellow)"
  );
}
