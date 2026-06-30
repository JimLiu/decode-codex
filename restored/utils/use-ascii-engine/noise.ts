// Restored from ref/webview/assets/use-ascii-engine-BJ-AIEdX.js
// use-ascii-engine-BJ-AIEdX chunk restored from the Codex webview bundle.
export function makeNoise3D(seed: number) {
  return (columnIndex: number, rowIndex: number, time: number) => {
    const raw =
      Math.sin(
        columnIndex * 12.9898 + rowIndex * 78.233 + time * 37.719 + seed,
      ) * 43758.5453;
    const fractional = raw - Math.floor(raw);
    return fractional * 2 - 1;
  };
}
export function createNoiseFrame({
  columns,
  noise3d,
  rows,
  time,
}: {
  columns: number;
  noise3d: (columnIndex: number, rowIndex: number, time: number) => number;
  rows: number;
  time: number;
}) {
  const sampleScale = 0.15;
  const frame: number[][] = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    const row: number[] = [];
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const value =
        ((noise3d(columnIndex * sampleScale, rowIndex * sampleScale, time) +
          1) /
          2) *
        255;
      row.push(Math.round(value));
    }
    frame.push(row);
  }
  return frame;
}
export function ditherFrame(frame: number[][], paletteSize: number) {
  const rows = frame.length;
  const columns = rows > 0 ? (frame[0]?.length ?? 0) : 0;
  const dithered = frame.map((row) => row.slice());
  const levels = Math.max(2, paletteSize);
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const oldValue = dithered[rowIndex][columnIndex] ?? 0;
      const newValue =
        Math.round((oldValue / 255) * (levels - 1)) * (255 / (levels - 1));
      dithered[rowIndex][columnIndex] = newValue;
      const error = oldValue - newValue;
      if (columnIndex + 1 < columns)
        dithered[rowIndex][columnIndex + 1] += (error * 7) / 16;
      if (rowIndex + 1 < rows && columnIndex > 0)
        dithered[rowIndex + 1][columnIndex - 1] += (error * 3) / 16;
      if (rowIndex + 1 < rows)
        dithered[rowIndex + 1][columnIndex] += (error * 5) / 16;
      if (rowIndex + 1 < rows && columnIndex + 1 < columns)
        dithered[rowIndex + 1][columnIndex + 1] += error / 16;
    }
  }
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      dithered[rowIndex][columnIndex] = Math.max(
        0,
        Math.min(255, dithered[rowIndex][columnIndex] ?? 0),
      );
    }
  }
  return dithered;
}
export function luminanceToAscii(
  frame: number[][],
  asciiChars: string,
  invert: boolean,
) {
  return frame.map((row) =>
    row
      .map((value) => {
        const normalized = invert ? 1 - value / 255 : value / 255;
        const index = Math.max(
          0,
          Math.min(
            asciiChars.length - 1,
            Math.round(normalized * (asciiChars.length - 1)),
          ),
        );
        return asciiChars[index] ?? " ";
      })
      .join(""),
  );
}
