// Restored from ref/webview/assets/Tableau10-BYZHCNVA.js
// Tableau10 chunk restored from the Codex webview bundle.
function decodeHexPalette(encodedPalette: string): string[] {
  const colorCount = (encodedPalette.length / 6) | 0;
  const colors = Array<string>(colorCount);

  for (let colorIndex = 0; colorIndex < colorCount; ) {
    colors[colorIndex] =
      "#" + encodedPalette.slice(colorIndex * 6, ++colorIndex * 6);
  }

  return colors;
}

const schemeTableau10 = decodeHexPalette(
  "4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab",
);

export {
  decodeHexPalette,
  decodeHexPalette as tableau10N,
  schemeTableau10,
  schemeTableau10 as tableau10T,
};
