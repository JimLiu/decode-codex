// Restored from ref/webview/assets/PopcornElectronPresentationPanel-DyLT7PAB.js
// Also matches current ref/webview/assets/PopcornElectronPresentationPanel-B56eXPt5.js.
// PopcornElectronPresentationPanel chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { i as popcornElectronPresentationPanelImport4 } from "../boundaries/workbook-runtime";
import { _remoteTextEditSessionA, _remoteTextEditSessionB, _remoteTextEditSessionC, _remoteTextEditSessionD, remoteTextEditSessionE, _remoteTextEditSessionF, remoteTextEditSessionG, remoteTextEditSessionH, _remoteTextEditSessionI, remoteTextEditSessionJ, remoteTextEditSessionK, remoteTextEditSessionL, _remoteTextEditSessionM, _remoteTextEditSessionN, _remoteTextEditSessionP, _remoteTextEditSessionS, _remoteTextEditSessionT, remoteTextEditSessionUnderscore } from "./remote-text-edit-session";
import { PopcornPageNumberNavigation } from "../features/popcorn-page-number-navigation";
import { p as popcornElectronPresentationPanelImport10, t as popcornElectronPresentationPanelImport11, a as popcornElectronPresentationPanelImport5, d as popcornElectronPresentationPanelImport6, f as popcornElectronPresentationPanelImport7, i as popcornElectronPresentationPanelImport8, n as popcornElectronPresentationPanelImport9 } from "@dnd-kit/core";
import { restrictToFirstScrollableAncestor } from "../utils/drag-modifiers";
import { popcornElectronSurfaceStyleA, popcornElectronSurfaceStyleB, popcornElectronSurfaceStyleC, popcornElectronSurfaceStyleD, popcornElectronSurfaceStyleDollar, popcornElectronSurfaceStyleE, popcornElectronSurfaceStyleF, popcornElectronSurfaceStyleG, popcornElectronSurfaceStyleH, popcornElectronSurfaceStyleI, _popcornElectronSurfaceStyleJ, _popcornElectronSurfaceStyleK, popcornElectronSurfaceStyleL, popcornElectronSurfaceStyleM, popcornElectronSurfaceStyleN, popcornElectronSurfaceStyleNt, popcornElectronSurfaceStyleO, popcornElectronSurfaceStyleP, popcornElectronSurfaceStyleQ, popcornElectronSurfaceStyleR, popcornElectronSurfaceStyleS, popcornElectronSurfaceStyleT, popcornElectronSurfaceStyleTt, popcornElectronSurfaceStyleU, popcornElectronSurfaceStyleV, popcornElectronSurfaceStyleW, _popcornElectronSurfaceStyleX, _popcornElectronSurfaceStyleY, _popcornElectronSurfaceStyleZ } from "./popcorn-electron-surface-style";
const _remoteTextEditSessionL = remoteTextEditSessionL,
  _popcornElectronSurfaceStyleA = popcornElectronSurfaceStyleA,
  _popcornElectronSurfaceStyleB = popcornElectronSurfaceStyleB,
  _popcornElectronSurfaceStyleC = popcornElectronSurfaceStyleC,
  _popcornElectronSurfaceStyleD = popcornElectronSurfaceStyleD,
  _popcornElectronSurfaceStyleF = popcornElectronSurfaceStyleF,
  _popcornElectronSurfaceStyleH = popcornElectronSurfaceStyleH,
  _popcornElectronSurfaceStyleI = popcornElectronSurfaceStyleI,
  _popcornElectronSurfaceStyleL = popcornElectronSurfaceStyleL,
  _popcornElectronSurfaceStyleM = popcornElectronSurfaceStyleM,
  _popcornElectronSurfaceStyleN = popcornElectronSurfaceStyleN,
  _popcornElectronSurfaceStyleO = popcornElectronSurfaceStyleO,
  _popcornElectronSurfaceStyleP = popcornElectronSurfaceStyleP,
  _popcornElectronSurfaceStyleR = popcornElectronSurfaceStyleR,
  _popcornElectronSurfaceStyleT = popcornElectronSurfaceStyleT,
  _popcornElectronSurfaceStyleU = popcornElectronSurfaceStyleU,
  _popcornElectronSurfaceStyleV = popcornElectronSurfaceStyleV,
  _popcornElectronSurfaceStyleW = popcornElectronSurfaceStyleW;
var popcornElectronPresentationPanelValue2 = null;
function popcornElectronPresentationPanelHelper1() {
  return popcornElectronPresentationPanelValue2 ??= Promise.all([_remoteTextEditSessionS(), Promise.resolve().then(() => {
    _remoteTextEditSessionC();
  })]).then(() => {}), popcornElectronPresentationPanelValue2;
}
function popcornElectronPresentationPanelHelper2(popcornElectronPresentationPanelParam111, popcornElectronPresentationPanelParam112) {
  if (popcornElectronPresentationPanelParam112 && popcornElectronPresentationPanelParam112.width > 0 && popcornElectronPresentationPanelParam112.height > 0) return {
    width: popcornElectronPresentationPanelParam112.width,
    height: popcornElectronPresentationPanelParam112.height
  };
  let popcornElectronPresentationPanelValue536 = popcornElectronPresentationPanelParam111.getBoundingClientRect();
  return {
    width: popcornElectronPresentationPanelValue536.width > 0 ? popcornElectronPresentationPanelValue536.width : popcornElectronPresentationPanelParam111.clientWidth,
    height: popcornElectronPresentationPanelValue536.height > 0 ? popcornElectronPresentationPanelValue536.height : popcornElectronPresentationPanelParam111.clientHeight
  };
}
function popcornElectronPresentationPanelHelper3(popcornElectronPresentationPanelParam234, popcornElectronPresentationPanelParam235) {
  return popcornElectronPresentationPanelHelper2(popcornElectronPresentationPanelParam234, {
    width: popcornElectronPresentationPanelParam235.contentRect.width,
    height: popcornElectronPresentationPanelParam235.contentRect.height
  });
}
var popcornElectronPresentationPanelValue6 = {
    ink: "#0F172A",
    muted: "#475569",
    border: "#CBD5E1",
    panel: "#FFFFFF",
    canvas: "#F8FAFC",
    blue: "#2563EB",
    indigo: "#4F46E5",
    violet: "#7C3AED",
    mint: "#0F766E",
    cyan: "#0891B2",
    amber: "#D97706",
    rose: "#E11D48",
    cloud: "#EFF6FF",
    lavender: "#F5F3FF",
    mintTint: "#ECFDF5",
    amberTint: "#FFFBEB"
  },
  popcornElectronPresentationPanelValue7 = [{
    type: "lightGrid",
    color: popcornElectronPresentationPanelValue6.indigo
  }, {
    type: "smallGrid",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "largeGrid",
    color: popcornElectronPresentationPanelValue6.cyan
  }, {
    type: "darkGrid",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "dotGrid",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "cross",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "diagonalCross",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "horizontal",
    color: popcornElectronPresentationPanelValue6.mint
  }, {
    type: "vertical",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "lightHorizontal",
    color: popcornElectronPresentationPanelValue6.cyan
  }, {
    type: "lightVertical",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "narrowHorizontal",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "narrowVertical",
    color: popcornElectronPresentationPanelValue6.muted
  }, {
    type: "dashedHorizontal",
    color: popcornElectronPresentationPanelValue6.indigo
  }, {
    type: "dashedVertical",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "upwardDiagonal",
    color: popcornElectronPresentationPanelValue6.mint
  }, {
    type: "downwardDiagonal",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "wideUpwardDiagonal",
    color: popcornElectronPresentationPanelValue6.cyan
  }, {
    type: "wideDownwardDiagonal",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "dashedUpwardDiagonal",
    color: popcornElectronPresentationPanelValue6.amber
  }, {
    type: "dashedDownwardDiagonal",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "smallCheck",
    color: popcornElectronPresentationPanelValue6.indigo
  }, {
    type: "largeCheck",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "openDiamond",
    color: popcornElectronPresentationPanelValue6.cyan
  }, {
    type: "solidDiamond",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "dottedDiamond",
    color: popcornElectronPresentationPanelValue6.amber
  }, {
    type: "plaid",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "weave",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "wave",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "zigZag",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "horizontalBrick",
    color: popcornElectronPresentationPanelValue6.amber
  }, {
    type: "diagonalBrick",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "sphere",
    color: popcornElectronPresentationPanelValue6.mint
  }, {
    type: "divot",
    color: popcornElectronPresentationPanelValue6.indigo
  }, {
    type: "shingle",
    color: popcornElectronPresentationPanelValue6.cyan
  }, {
    type: "trellis",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "lightTrellis",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "darkTrellis",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "smallConfetti",
    color: popcornElectronPresentationPanelValue6.amber
  }, {
    type: "largeConfetti",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "gray125",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "gray0625",
    color: popcornElectronPresentationPanelValue6.muted
  }, {
    type: "percent10",
    color: popcornElectronPresentationPanelValue6.indigo
  }, {
    type: "percent20",
    color: popcornElectronPresentationPanelValue6.blue
  }, {
    type: "percent30",
    color: popcornElectronPresentationPanelValue6.cyan
  }, {
    type: "percent40",
    color: popcornElectronPresentationPanelValue6.violet
  }, {
    type: "percent50",
    color: popcornElectronPresentationPanelValue6.amber
  }, {
    type: "percent60",
    color: popcornElectronPresentationPanelValue6.rose
  }, {
    type: "percent70",
    color: popcornElectronPresentationPanelValue6.mint
  }, {
    type: "percent80",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "percent90",
    color: popcornElectronPresentationPanelValue6.muted
  }, {
    type: "lightGray",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "mediumGray",
    color: popcornElectronPresentationPanelValue6.ink
  }, {
    type: "darkGray",
    color: popcornElectronPresentationPanelValue6.ink
  }];
function popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam197, popcornElectronPresentationPanelParam198 = popcornElectronPresentationPanelValue6.canvas) {
  let popcornElectronPresentationPanelValue588 = popcornElectronPresentationPanelParam197.slides.add();
  return popcornElectronPresentationPanelValue588.setViewportSize(1280, 720), popcornElectronPresentationPanelValue588.background.fill = popcornElectronPresentationPanelParam198, popcornElectronPresentationPanelHelper5(popcornElectronPresentationPanelValue588), popcornElectronPresentationPanelValue588;
}
function popcornElectronPresentationPanelHelper5(popcornElectronPresentationPanelParam251) {
  for (let popcornElectronPresentationPanelValue612 of [...popcornElectronPresentationPanelParam251.shapes.items]) popcornElectronPresentationPanelValue612.placeholderType && popcornElectronPresentationPanelValue612.delete();
}
function popcornElectronPresentationPanelHelper6(popcornElectronPresentationPanelParam51) {
  let popcornElectronPresentationPanelValue459 = popcornElectronPresentationPanelParam51.slide.shapes.add({
    geometry: popcornElectronPresentationPanelParam51.geometry ?? "rect",
    position: {
      left: popcornElectronPresentationPanelParam51.left,
      top: popcornElectronPresentationPanelParam51.top,
      width: popcornElectronPresentationPanelParam51.width,
      height: popcornElectronPresentationPanelParam51.height
    },
    fill: popcornElectronPresentationPanelParam51.fill,
    line: popcornElectronPresentationPanelParam51.radiusLine ? {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.border,
      width: 1
    } : undefined
  });
  return popcornElectronPresentationPanelValue459.text = popcornElectronPresentationPanelParam51.text, popcornElectronPresentationPanelValue459.text.fontSize = popcornElectronPresentationPanelParam51.fontSize ?? 16, popcornElectronPresentationPanelValue459.text.color = popcornElectronPresentationPanelParam51.color ?? popcornElectronPresentationPanelValue6.ink, popcornElectronPresentationPanelValue459.text.bold = !!popcornElectronPresentationPanelParam51.bold, popcornElectronPresentationPanelValue459.text.verticalAlignment = "middle", popcornElectronPresentationPanelValue459;
}
function popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelParam85, popcornElectronPresentationPanelParam86, popcornElectronPresentationPanelParam87) {
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelParam85,
    left: 72,
    top: 48,
    width: 620,
    height: 50,
    text: popcornElectronPresentationPanelParam86,
    fontSize: 30,
    bold: true
  });
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelParam85,
    left: 72,
    top: 100,
    width: 760,
    height: 32,
    text: popcornElectronPresentationPanelParam87,
    fontSize: 14,
    color: popcornElectronPresentationPanelValue6.muted
  });
}
function popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelParam76, popcornElectronPresentationPanelParam77, popcornElectronPresentationPanelParam78, popcornElectronPresentationPanelParam79, popcornElectronPresentationPanelParam80, popcornElectronPresentationPanelParam81) {
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelParam76,
    left: popcornElectronPresentationPanelParam77,
    top: popcornElectronPresentationPanelParam78,
    width: popcornElectronPresentationPanelParam79,
    height: 24,
    text: popcornElectronPresentationPanelParam80,
    fontSize: 14,
    bold: true
  });
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelParam76,
    left: popcornElectronPresentationPanelParam77,
    top: popcornElectronPresentationPanelParam78 + 22,
    width: popcornElectronPresentationPanelParam79,
    height: 40,
    text: popcornElectronPresentationPanelParam81,
    fontSize: 12,
    color: popcornElectronPresentationPanelValue6.muted
  });
}
function popcornElectronPresentationPanelHelper9(popcornElectronPresentationPanelParam121) {
  return popcornElectronPresentationPanelParam121.slide.shapes.add({
    geometry: "roundRect",
    position: {
      left: popcornElectronPresentationPanelParam121.left,
      top: popcornElectronPresentationPanelParam121.top,
      width: popcornElectronPresentationPanelParam121.width,
      height: popcornElectronPresentationPanelParam121.height
    },
    fill: popcornElectronPresentationPanelParam121.fill ?? popcornElectronPresentationPanelValue6.panel,
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.border,
      width: 1
    }
  });
}
function popcornElectronPresentationPanelHelper10(popcornElectronPresentationPanelParam16, popcornElectronPresentationPanelParam17) {
  let popcornElectronPresentationPanelValue302 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam16, "#F7FAFF"),
    popcornElectronPresentationPanelValue303 = popcornElectronPresentationPanelHelper6({
      slide: popcornElectronPresentationPanelValue302,
      left: 72,
      top: 74,
      width: 520,
      height: 68,
      text: "Slides Feature Catalog",
      fontSize: 36,
      bold: true
    });
  popcornElectronPresentationPanelValue303.text.get("Slides Feature Catalog").style = "title";
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelValue302,
    left: 72,
    top: 150,
    width: 510,
    height: 72,
    text: "A presentation design-system deck built from the current Granola slide APIs: borders, fills, shapes, connectors, typography, tables, charts, and image treatments.",
    fontSize: 16,
    color: popcornElectronPresentationPanelValue6.muted
  });
  let popcornElectronPresentationPanelValue304 = popcornElectronPresentationPanelValue302.images.add({
    dataUrl: popcornElectronPresentationPanelParam17,
    alt: "Popcorn slides catalog poster"
  });
  popcornElectronPresentationPanelValue304.position = {
    left: 706,
    top: 88,
    width: 500,
    height: 300
  };
  popcornElectronPresentationPanelValue304.fit = "cover";
  let popcornElectronPresentationPanelValue305 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue302,
    left: 72,
    top: 300,
    width: 346,
    height: 208,
    fill: popcornElectronPresentationPanelValue6.cloud
  });
  popcornElectronPresentationPanelValue305.line.fill = popcornElectronPresentationPanelValue6.blue;
  popcornElectronPresentationPanelValue305.line.width = 1;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue302, 98, 328, 280, "Canvas-native editing", "The cover title is the first editable text box, so browser receipts can mutate and undo it without changing deck structure.");
  let popcornElectronPresentationPanelValue306 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue302,
    left: 444,
    top: 300,
    width: 346,
    height: 208,
    fill: popcornElectronPresentationPanelValue6.lavender
  });
  popcornElectronPresentationPanelValue306.line.fill = popcornElectronPresentationPanelValue6.violet;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue302, 470, 328, 290, "Worker-first stage", "The stage renders as a centered world-view inside a full-viewport canvas, matching the workbook camera architecture.");
  let popcornElectronPresentationPanelValue307 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue302,
    left: 816,
    top: 300,
    width: 390,
    height: 208,
    fill: popcornElectronPresentationPanelValue6.mintTint
  });
  popcornElectronPresentationPanelValue307.line.fill = popcornElectronPresentationPanelValue6.mint;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue302, 842, 328, 324, "Catalog fixture", "Every slide is a visual specimen that doubles as a deterministic editing corpus for tests, traces, and future agent workflows.");
  popcornElectronPresentationPanelValue302.speakerNotes.text = "Cover slide: the presentation smoke edits this first title shape and watches the selected-slide label update.";
}
function popcornElectronPresentationPanelHelper11(popcornElectronPresentationPanelParam12) {
  let popcornElectronPresentationPanelValue282 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam12);
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue282, "Border styles", "Line styles and weights from the Granola shape API, arranged as a compact visual gallery.");
  [{
    label: "Solid 1px",
    style: "solid",
    color: popcornElectronPresentationPanelValue6.blue,
    width: 1
  }, {
    label: "Dashed 2px",
    style: "dashed",
    color: popcornElectronPresentationPanelValue6.indigo,
    width: 2
  }, {
    label: "Dotted 2px",
    style: "dotted",
    color: popcornElectronPresentationPanelValue6.cyan,
    width: 2
  }, {
    label: "Dash-dot 3px",
    style: "dash-dot",
    color: popcornElectronPresentationPanelValue6.violet,
    width: 3
  }, {
    label: "Dash-dot-dot 3px",
    style: "dash-dot-dot",
    color: popcornElectronPresentationPanelValue6.rose,
    width: 3
  }].forEach((item, index) => {
    let popcornElectronPresentationPanelValue461 = 84 + index * 228,
      popcornElectronPresentationPanelValue462 = popcornElectronPresentationPanelValue282.shapes.add({
        geometry: index % 2 == 0 ? "roundRect" : "rect",
        position: {
          left: popcornElectronPresentationPanelValue461,
          top: 188,
          width: 170,
          height: 118
        },
        fill: popcornElectronPresentationPanelValue6.panel,
        line: {
          style: item.style,
          fill: item.color,
          width: item.width
        }
      });
    popcornElectronPresentationPanelValue462.text = item.label;
    popcornElectronPresentationPanelValue462.text.alignment = "center";
    popcornElectronPresentationPanelValue462.text.verticalAlignment = "middle";
    popcornElectronPresentationPanelValue462.text.fontSize = 16;
  });
  let popcornElectronPresentationPanelValue283 = popcornElectronPresentationPanelValue282.shapes.add({
    geometry: "roundRect",
    position: {
      left: 130,
      top: 392,
      width: 1020,
      height: 190
    },
    fill: "#F8FBFF",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.border,
      width: 1
    }
  });
  popcornElectronPresentationPanelValue283.line.width = 1;
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelValue282,
    left: 164,
    top: 426,
    width: 340,
    height: 44,
    text: "Mixed borders in one composition",
    fontSize: 20,
    bold: true
  });
  popcornElectronPresentationPanelHelper6({
    slide: popcornElectronPresentationPanelValue282,
    left: 164,
    top: 474,
    width: 410,
    height: 66,
    text: "A larger composition helps validate stroke scaling, handle placement, and thumbnail rendering.",
    fontSize: 13,
    color: popcornElectronPresentationPanelValue6.muted
  });
  let popcornElectronPresentationPanelValue284 = popcornElectronPresentationPanelValue282.shapes.add({
    geometry: "roundRect",
    position: {
      left: 700,
      top: 434,
      width: 170,
      height: 70
    },
    fill: "#ffffff",
    line: {
      style: "dash-dot",
      fill: popcornElectronPresentationPanelValue6.violet,
      width: 2
    }
  });
  popcornElectronPresentationPanelValue284.text = "Dash-dot";
  popcornElectronPresentationPanelValue284.text.alignment = "center";
  popcornElectronPresentationPanelValue284.text.verticalAlignment = "middle";
  popcornElectronPresentationPanelValue284.text.bold = true;
  let popcornElectronPresentationPanelValue285 = popcornElectronPresentationPanelValue282.shapes.add({
    geometry: "diamond",
    position: {
      left: 916,
      top: 418,
      width: 126,
      height: 102
    },
    fill: "#ffffff",
    line: {
      style: "dotted",
      fill: popcornElectronPresentationPanelValue6.cyan,
      width: 2
    }
  });
  popcornElectronPresentationPanelValue285.text = "Dotted";
  popcornElectronPresentationPanelValue285.text.alignment = "center";
  popcornElectronPresentationPanelValue285.text.verticalAlignment = "middle";
}
function popcornElectronPresentationPanelHelper12(popcornElectronPresentationPanelParam18) {
  let popcornElectronPresentationPanelValue313 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam18, "#FBFBFE");
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue313, "Fill styles", "Solid, linear gradient, path gradient, and pattern fills taken directly from the Granola fill configuration surface.");
  let popcornElectronPresentationPanelValue314 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue313,
    left: 86,
    top: 188,
    width: 240,
    height: 220
  });
  popcornElectronPresentationPanelValue314.fill = popcornElectronPresentationPanelValue6.blue;
  popcornElectronPresentationPanelValue314.line.fill = popcornElectronPresentationPanelValue6.blue;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue313, 104, 422, 206, "Solid fill", "Theme/RGB-backed surface");
  let popcornElectronPresentationPanelValue315 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue313,
    left: 368,
    top: 188,
    width: 240,
    height: 220
  });
  popcornElectronPresentationPanelValue315.fill = {
    type: "gradient",
    gradientKind: "linear",
    angleDeg: 30,
    stops: [{
      offset: 0,
      color: "#DBEAFE"
    }, {
      offset: 1,
      color: "#2563EB"
    }]
  };
  popcornElectronPresentationPanelValue315.line.fill = popcornElectronPresentationPanelValue6.blue;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue313, 386, 422, 206, "Linear gradient", "Two-stop diagonal blend");
  let popcornElectronPresentationPanelValue316 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue313,
    left: 650,
    top: 188,
    width: 240,
    height: 220
  });
  popcornElectronPresentationPanelValue316.fill = {
    type: "gradient",
    gradientKind: "path",
    angleDeg: 135,
    stops: [{
      offset: 0,
      color: "#DDD6FE"
    }, {
      offset: 1,
      color: "#7C3AED"
    }]
  };
  popcornElectronPresentationPanelValue316.line.fill = popcornElectronPresentationPanelValue6.violet;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue313, 668, 422, 206, "Path gradient", "Centered radial emphasis");
  let popcornElectronPresentationPanelValue317 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue313,
    left: 932,
    top: 188,
    width: 240,
    height: 220
  });
  popcornElectronPresentationPanelValue317.fill = {
    type: "solid",
    color: "#F8FAFC",
    pattern: {
      type: "lightGrid",
      color: popcornElectronPresentationPanelValue6.indigo
    }
  };
  popcornElectronPresentationPanelValue317.line.fill = popcornElectronPresentationPanelValue6.indigo;
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue313, 950, 422, 206, "Pattern fill", "Light grid overlay");
  let popcornElectronPresentationPanelValue318 = popcornElectronPresentationPanelValue313.shapes.add({
    geometry: "roundRect",
    position: {
      left: 126,
      top: 510,
      width: 1020,
      height: 120
    },
    fill: "#FFFFFF",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.border,
      width: 1
    }
  });
  popcornElectronPresentationPanelValue318.text = "Fill configs stay model-backed, which means the same gradient and pattern semantics show up consistently in thumbnails, worker rendering, exports, and future document/shared-object lanes.";
  popcornElectronPresentationPanelValue318.text.fontSize = 20;
  popcornElectronPresentationPanelValue318.text.color = popcornElectronPresentationPanelValue6.ink;
}
function popcornElectronPresentationPanelHelper13(popcornElectronPresentationPanelParam144) {
  return popcornElectronPresentationPanelParam144.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^gray(\d+)/i, "Gray $1").replace(/^percent(\d+)/i, "$1%").replace(/\b\w/g, popcornElectronPresentationPanelParam347 => popcornElectronPresentationPanelParam347.toUpperCase());
}
function popcornElectronPresentationPanelHelper14(popcornElectronPresentationPanelParam31) {
  let popcornElectronPresentationPanelValue360 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam31, "#FBFBFE");
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue360, "Pattern gallery", "A dense catalog of pattern fills so rendering, centering, and zoom behavior can be inspected directly in one place.");
  popcornElectronPresentationPanelValue7.forEach((item, index) => {
    let popcornElectronPresentationPanelValue401 = index % 8,
      popcornElectronPresentationPanelValue402 = Math.floor(index / 8),
      popcornElectronPresentationPanelValue403 = 72 + popcornElectronPresentationPanelValue401 * 132,
      popcornElectronPresentationPanelValue404 = 164 + popcornElectronPresentationPanelValue402 * 74,
      popcornElectronPresentationPanelValue405 = popcornElectronPresentationPanelHelper6({
        slide: popcornElectronPresentationPanelValue360,
        left: popcornElectronPresentationPanelValue403,
        top: popcornElectronPresentationPanelValue404,
        width: 112,
        height: 16,
        text: popcornElectronPresentationPanelHelper13(item.type),
        fontSize: 9,
        color: popcornElectronPresentationPanelValue6.muted
      });
    popcornElectronPresentationPanelValue405.text.alignment = "center";
    popcornElectronPresentationPanelValue360.shapes.add({
      geometry: "roundRect",
      position: {
        left: popcornElectronPresentationPanelValue403,
        top: popcornElectronPresentationPanelValue404 + 20,
        width: 112,
        height: 44
      },
      fill: {
        type: "solid",
        color: "#F8FAFC",
        pattern: {
          type: item.type,
          color: item.color
        }
      },
      line: {
        style: "solid",
        fill: popcornElectronPresentationPanelValue6.border,
        width: 1
      }
    });
  });
}
function popcornElectronPresentationPanelHelper15(popcornElectronPresentationPanelParam8) {
  let popcornElectronPresentationPanelValue248 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam8);
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue248, "Shapes and connectors", "Preset geometries, arrowheads, and routed connectors aligned with the current Granola presentation tests.");
  let popcornElectronPresentationPanelValue249 = popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "flowChartDecision",
    position: {
      left: 160,
      top: 220,
      width: 170,
      height: 110
    },
    fill: "#DBEAFE",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.blue,
      width: 2
    }
  });
  popcornElectronPresentationPanelValue249.text = "Decision";
  popcornElectronPresentationPanelValue249.text.alignment = "center";
  popcornElectronPresentationPanelValue249.text.verticalAlignment = "middle";
  let popcornElectronPresentationPanelValue250 = popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "rect",
    position: {
      left: 448,
      top: 220,
      width: 190,
      height: 110
    },
    fill: "#EDE9FE",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.violet,
      width: 2
    }
  });
  popcornElectronPresentationPanelValue250.text = "Process";
  popcornElectronPresentationPanelValue250.text.alignment = "center";
  popcornElectronPresentationPanelValue250.text.verticalAlignment = "middle";
  let popcornElectronPresentationPanelValue251 = popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "flowChartTerminator",
    position: {
      left: 764,
      top: 220,
      width: 212,
      height: 110
    },
    fill: "#ECFDF5",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.mint,
      width: 2
    }
  });
  popcornElectronPresentationPanelValue251.text = "Terminator";
  popcornElectronPresentationPanelValue251.text.alignment = "center";
  popcornElectronPresentationPanelValue251.text.verticalAlignment = "middle";
  let popcornElectronPresentationPanelValue252 = popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "chevron",
    position: {
      left: 1022,
      top: 214,
      width: 124,
      height: 120,
      rotation: 8
    },
    fill: {
      type: "gradient",
      gradientKind: "linear",
      angleDeg: 0,
      stops: [{
        offset: 0,
        color: "#FDE68A"
      }, {
        offset: 1,
        color: "#F59E0B"
      }]
    },
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.amber,
      width: 2
    }
  });
  popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "connector",
    kind: "straight",
    from: popcornElectronPresentationPanelValue249,
    fromIdx: 3,
    to: popcornElectronPresentationPanelValue250,
    toIdx: 1,
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.blue,
      width: 2
    },
    head: {
      type: "arrow",
      width: "med",
      length: "med"
    }
  });
  popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "connector",
    kind: "straight",
    from: popcornElectronPresentationPanelValue250,
    fromIdx: 3,
    to: popcornElectronPresentationPanelValue251,
    toIdx: 1,
    line: {
      style: "dashed",
      fill: popcornElectronPresentationPanelValue6.violet,
      width: 2
    },
    head: {
      type: "arrow",
      width: "sm",
      length: "sm"
    }
  });
  popcornElectronPresentationPanelValue248.shapes.add({
    geometry: "connector",
    kind: "straight",
    from: popcornElectronPresentationPanelValue251,
    fromIdx: 3,
    to: popcornElectronPresentationPanelValue252,
    toIdx: 1,
    line: {
      style: "dash-dot",
      fill: popcornElectronPresentationPanelValue6.amber,
      width: 2
    },
    head: {
      type: "triangle",
      width: "med",
      length: "med"
    }
  });
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue248, 154, 378, 270, "Process shapes", "Flowchart decision, rect, and terminator geometries.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue248, 510, 378, 262, "Connector routing", "Straight and elbow connectors with different arrowheads.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue248, 900, 378, 230, "Transforms", "Rotated and gradient-filled accent chevron.");
}
function $e(popcornElectronPresentationPanelParam13) {
  let popcornElectronPresentationPanelValue286 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam13, "#FAFBFF");
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue286, "Typography and text layout", "Title styles, lists, alignment, spacing, and insets all come from the same text engine the stage editor uses for canvas-native editing.");
  let popcornElectronPresentationPanelValue287 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue286,
    left: 82,
    top: 176,
    width: 360,
    height: 180
  });
  popcornElectronPresentationPanelValue287.text = ["Quarterly Design Review", "Shared text engine"];
  popcornElectronPresentationPanelValue287.text.fontSize = 20;
  popcornElectronPresentationPanelValue287.text.insets = {
    left: 18,
    right: 18,
    top: 18,
    bottom: 18
  };
  popcornElectronPresentationPanelValue287.text.get("Quarterly Design Review").style = "title";
  popcornElectronPresentationPanelValue287.text.get("Quarterly Design Review").color = popcornElectronPresentationPanelValue6.blue;
  popcornElectronPresentationPanelValue287.text.get("Shared text engine").fontSize = 16;
  popcornElectronPresentationPanelValue287.text.get("Shared text engine").color = popcornElectronPresentationPanelValue6.muted;
  let popcornElectronPresentationPanelValue288 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue286,
    left: 474,
    top: 176,
    width: 326,
    height: 240,
    fill: "#FFFFFF"
  });
  popcornElectronPresentationPanelValue288.text = [[{
    run: "Canvas-native edit sessions"
  }], [{
    run: "Word and paragraph selection"
  }], [{
    run: "Shared undo and caret movement"
  }]];
  popcornElectronPresentationPanelValue288.text.fontSize = 18;
  popcornElectronPresentationPanelValue288.text.get(["Canvas-native edit sessions", "Word and paragraph selection", "Shared undo and caret movement"].join("\n")).style = "list";
  popcornElectronPresentationPanelValue288.text.get("Canvas-native edit sessions").bold = true;
  popcornElectronPresentationPanelValue288.text.insets = {
    left: 24,
    right: 20,
    top: 18,
    bottom: 18
  };
  let popcornElectronPresentationPanelValue289 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue286,
    left: 840,
    top: 176,
    width: 354,
    height: 240,
    fill: "#F8FBFF"
  });
  popcornElectronPresentationPanelValue289.text = "“A canvas text engine is only viable if selection, caret placement, and rich text styling are first-class model concerns.”";
  popcornElectronPresentationPanelValue289.text.alignment = "center";
  popcornElectronPresentationPanelValue289.text.verticalAlignment = "middle";
  popcornElectronPresentationPanelValue289.text.fontSize = 24;
  popcornElectronPresentationPanelValue289.text.color = popcornElectronPresentationPanelValue6.ink;
  popcornElectronPresentationPanelValue289.text.insets = {
    left: 26,
    right: 26,
    top: 24,
    bottom: 24
  };
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue286, 84, 380, 340, "Styled title block", "Title preset, secondary body line, and content insets.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue286, 474, 440, 326, "List semantics", "List styling is range-driven, not hard-coded in the React layer.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue286, 840, 440, 354, "Centered quotation", "Alignment, insets, and large-type wrapping stress the text layout system.");
}
function popcornElectronPresentationPanelHelper16(popcornElectronPresentationPanelParam15) {
  let popcornElectronPresentationPanelValue298 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam15);
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue298, "Tables", "Tables showcase merge regions, style presets, borders, rich text values, and explicit column sizing.");
  let popcornElectronPresentationPanelValue299 = popcornElectronPresentationPanelValue298.tables.add({
    rows: 6,
    columns: 4,
    left: 82,
    top: 178,
    width: 656,
    height: 314,
    values: [["Performance scorecard", "", "", ""], ["Metric", "North", "EMEA", "APAC"], ["Bookings", 120, 94, 68], ["Pipeline", 210, 176, 140], ["Renewals", 96, 82, 65], ["Total", 426, 352, 273]]
  });
  popcornElectronPresentationPanelValue299.merge({
    startRow: 0,
    endRow: 0,
    startColumn: 0,
    endColumn: 3
  });
  popcornElectronPresentationPanelValue299.columns.get(0).width = 220;
  popcornElectronPresentationPanelValue299.columns.get(1).width = 140;
  popcornElectronPresentationPanelValue299.columns.get(2).width = 140;
  popcornElectronPresentationPanelValue299.columns.get(3).width = 140;
  popcornElectronPresentationPanelValue299.style = "TableStyleMedium2";
  popcornElectronPresentationPanelValue299.styleOptions = {
    headerRow: true,
    bandedRows: true,
    bandedColumns: false,
    firstColumn: false,
    lastColumn: false,
    totalRow: false
  };
  popcornElectronPresentationPanelValue299.borders = {
    outside: {
      width: 1.5,
      color: "111827"
    },
    inside: {
      width: 0.75,
      color: "D1D5DB"
    }
  };
  let popcornElectronPresentationPanelValue300 = popcornElectronPresentationPanelValue299.cells.block({
    row: 0,
    column: 0,
    rowCount: 1,
    columnCount: 4
  });
  popcornElectronPresentationPanelValue300.fill = "#0F172A";
  popcornElectronPresentationPanelValue300.textStyle.bold = true;
  popcornElectronPresentationPanelValue300.textStyle.color = "FFFFFF";
  popcornElectronPresentationPanelValue300.textStyle.fontSize = 18;
  let popcornElectronPresentationPanelValue301 = popcornElectronPresentationPanelValue298.tables.add({
    rows: 3,
    columns: 2,
    left: 804,
    top: 210,
    width: 390,
    height: 226,
    values: [["Pattern", "Example"], ["Rich text", [{
      run: "Inline ",
      textStyle: {
        bold: true
      }
    }, "formatting"]], ["Multi-line", [[{
      run: "Line 1",
      textStyle: {
        italic: true
      }
    }], [{
      run: "Line 2"
    }]]]]
  });
  popcornElectronPresentationPanelValue301.style = "TableStyleMedium9";
  popcornElectronPresentationPanelValue301.styleOptions = {
    headerRow: true,
    bandedRows: true,
    bandedColumns: false,
    firstColumn: false,
    lastColumn: false,
    totalRow: false
  };
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue298, 84, 520, 650, "Scorecard table", "Merged title row, preset style, custom borders, and explicit column widths.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue298, 804, 454, 384, "Cell content", "Rich text runs and multi-line cell values exercise table text layout.");
}
function popcornElectronPresentationPanelHelper17(popcornElectronPresentationPanelParam9) {
  let popcornElectronPresentationPanelValue253 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam9, "#FAFBFF");
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue253, "Charts", "Representative chart authoring from the Granola test suite: line, stacked column, and scatter.");
  let popcornElectronPresentationPanelValue254 = popcornElectronPresentationPanelValue253.charts.add("line");
  popcornElectronPresentationPanelValue254.position = {
    left: 72,
    top: 168,
    width: 362,
    height: 230
  };
  popcornElectronPresentationPanelValue254.title = "Line chart";
  popcornElectronPresentationPanelValue254.categories = ["2020", "2021", "2022", "2023"];
  let popcornElectronPresentationPanelValue255 = popcornElectronPresentationPanelValue254.series.add("North");
  popcornElectronPresentationPanelValue255.categories = popcornElectronPresentationPanelValue254.categories;
  popcornElectronPresentationPanelValue255.values = [2.1, 2.5, 2.8, 3.2];
  popcornElectronPresentationPanelValue255.stroke = {
    width: 2,
    style: "solid",
    fill: "accent1"
  };
  popcornElectronPresentationPanelValue255.marker.symbol = "circle";
  popcornElectronPresentationPanelValue255.marker.size = 6;
  let popcornElectronPresentationPanelValue256 = popcornElectronPresentationPanelValue254.series.add("EMEA");
  popcornElectronPresentationPanelValue256.categories = popcornElectronPresentationPanelValue254.categories;
  popcornElectronPresentationPanelValue256.values = [1.8, 2, 2.4, 2.7];
  popcornElectronPresentationPanelValue256.stroke = {
    width: 2,
    style: "solid",
    fill: "accent2"
  };
  popcornElectronPresentationPanelValue256.marker.symbol = "square";
  popcornElectronPresentationPanelValue256.marker.size = 6;
  popcornElectronPresentationPanelValue254.hasLegend = true;
  popcornElectronPresentationPanelValue254.legend.position = "top";
  let popcornElectronPresentationPanelValue257 = popcornElectronPresentationPanelValue253.charts.add("bar");
  popcornElectronPresentationPanelValue257.position = {
    left: 458,
    top: 168,
    width: 362,
    height: 230
  };
  popcornElectronPresentationPanelValue257.title = "Stacked column";
  popcornElectronPresentationPanelValue257.categories = ["North", "EMEA", "APAC"];
  let popcornElectronPresentationPanelValue258 = popcornElectronPresentationPanelValue257.series.add("Platform");
  popcornElectronPresentationPanelValue258.categories = popcornElectronPresentationPanelValue257.categories;
  popcornElectronPresentationPanelValue258.values = [60, 80, 25];
  popcornElectronPresentationPanelValue258.fill = "accent1";
  let popcornElectronPresentationPanelValue259 = popcornElectronPresentationPanelValue257.series.add("Services");
  popcornElectronPresentationPanelValue259.categories = popcornElectronPresentationPanelValue257.categories;
  popcornElectronPresentationPanelValue259.values = [30, 40, 10];
  popcornElectronPresentationPanelValue259.fill = "accent3";
  let popcornElectronPresentationPanelValue260 = popcornElectronPresentationPanelValue257.series.add("Support");
  popcornElectronPresentationPanelValue260.categories = popcornElectronPresentationPanelValue257.categories;
  popcornElectronPresentationPanelValue260.values = [10, 20, 5];
  popcornElectronPresentationPanelValue260.fill = "accent5";
  popcornElectronPresentationPanelValue257.barOptions.direction = "column";
  popcornElectronPresentationPanelValue257.barOptions.grouping = "stacked";
  popcornElectronPresentationPanelValue257.dataLabels.showValue = true;
  popcornElectronPresentationPanelValue257.dataLabels.position = "outEnd";
  let popcornElectronPresentationPanelValue261 = popcornElectronPresentationPanelValue253.charts.add("scatter");
  popcornElectronPresentationPanelValue261.position = {
    left: 844,
    top: 168,
    width: 362,
    height: 230
  };
  popcornElectronPresentationPanelValue261.title = "Scatter";
  let popcornElectronPresentationPanelValue262 = popcornElectronPresentationPanelValue261.series.add("Transit candidates");
  popcornElectronPresentationPanelValue262.xValues = [1.5, 3.2, 6.8, 12.4, 24.9];
  popcornElectronPresentationPanelValue262.values = [1.1, 1.4, 1.9, 2.5, 3.2];
  popcornElectronPresentationPanelValue262.marker.symbol = "circle";
  popcornElectronPresentationPanelValue262.marker.size = 7;
  popcornElectronPresentationPanelValue262.fill = "accent3";
  popcornElectronPresentationPanelValue262.stroke = {
    width: 2,
    style: "solid",
    fill: "accent3"
  };
  popcornElectronPresentationPanelValue261.scatterOptions.style = "lineWithMarkers";
  popcornElectronPresentationPanelValue261.xAxis.title.text = "Orbital period";
  popcornElectronPresentationPanelValue261.yAxis.title.text = "Radius";
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue253, 74, 418, 356, "Line chart", "Markers, legend placement, and a minimal multi-series comparison.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue253, 460, 418, 356, "Stacked column", "Data labels and grouped columns mirror the chart test coverage.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue253, 846, 418, 356, "Scatter", "XY data with connected markers and explicit axis titles.");
}
function popcornElectronPresentationPanelHelper18(popcornElectronPresentationPanelParam19, popcornElectronPresentationPanelParam20, popcornElectronPresentationPanelParam21) {
  let popcornElectronPresentationPanelValue319 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam19);
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue319, "Images and treatments", "Contain, cover, crop, and transform behaviors share the same geometry model as other slide elements.");
  let popcornElectronPresentationPanelValue320 = popcornElectronPresentationPanelValue319.images.add({
    dataUrl: popcornElectronPresentationPanelParam20,
    alt: "Aurora contain treatment"
  });
  popcornElectronPresentationPanelValue320.position = {
    left: 96,
    top: 188,
    width: 304,
    height: 208
  };
  popcornElectronPresentationPanelValue320.fit = "contain";
  let popcornElectronPresentationPanelValue321 = popcornElectronPresentationPanelValue319.images.add({
    dataUrl: popcornElectronPresentationPanelParam20,
    alt: "Aurora cover treatment"
  });
  popcornElectronPresentationPanelValue321.position = {
    left: 486,
    top: 188,
    width: 304,
    height: 208
  };
  popcornElectronPresentationPanelValue321.fit = "cover";
  let popcornElectronPresentationPanelValue322 = popcornElectronPresentationPanelValue319.images.add({
    dataUrl: popcornElectronPresentationPanelParam21,
    alt: "Poster cropped treatment"
  });
  popcornElectronPresentationPanelValue322.position = {
    left: 876,
    top: 188,
    width: 304,
    height: 208
  };
  popcornElectronPresentationPanelValue322.crop = {
    left: 0.08,
    top: 0.14,
    right: 0.08,
    bottom: 0.12
  };
  popcornElectronPresentationPanelValue322.rotation = -6;
  [{
    left: 84,
    label: "Contain"
  }, {
    left: 474,
    label: "Cover"
  }, {
    left: 864,
    label: "Crop + rotate"
  }].forEach(item => {
    popcornElectronPresentationPanelHelper9({
      slide: popcornElectronPresentationPanelValue319,
      left: item.left,
      top: 176,
      width: 328,
      height: 232,
      fill: "#FFFFFF"
    }).sendToBack();
    popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue319, item.left + 10, 422, 308, item.label, "Image positioning lives in the same frame geometry system as shapes and charts.");
  });
  let popcornElectronPresentationPanelValue323 = popcornElectronPresentationPanelValue319.shapes.add({
    geometry: "roundRect",
    position: {
      left: 160,
      top: 520,
      width: 960,
      height: 120
    },
    fill: "#F8FBFF",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.border,
      width: 1
    }
  });
  popcornElectronPresentationPanelValue323.text = "This slide keeps image workflows visible for future shared-object work: the same frame, transform, selection, and worker redraw mechanics should be reusable across slides, documents, and eventually spreadsheet floating objects.";
  popcornElectronPresentationPanelValue323.text.fontSize = 18;
  popcornElectronPresentationPanelValue323.text.color = popcornElectronPresentationPanelValue6.ink;
}
function popcornElectronPresentationPanelHelper19(popcornElectronPresentationPanelParam14) {
  let popcornElectronPresentationPanelValue290 = popcornElectronPresentationPanelHelper4(popcornElectronPresentationPanelParam14, "#F7FAFF");
  popcornElectronPresentationPanelHelper7(popcornElectronPresentationPanelValue290, "Image generation state", "Prompt-backed image frames stay visible in the deck so worker/runtime changes can be iterated against an active generating surface.");
  let popcornElectronPresentationPanelValue291 = popcornElectronPresentationPanelHelper9({
    slide: popcornElectronPresentationPanelValue290,
    left: 72,
    top: 154,
    width: 1136,
    height: 388,
    fill: "#FFFFFF"
  });
  popcornElectronPresentationPanelValue291.line.fill = "#BFDBFE";
  let popcornElectronPresentationPanelValue292 = popcornElectronPresentationPanelValue290.images.add({
    prompt: "Use case: photorealistic-natural\nAsset type: presentation panorama\nPrimary request: four different dogs standing together like a lineup, showing different sizes and personalities\nScene/backdrop: clean studio backdrop with soft shadows\nSubject: diverse dog lineup including a corgi, labrador, greyhound, and small terrier\nStyle/medium: polished editorial photography\nComposition/framing: wide panoramic crop, full bodies visible, balanced spacing\nLighting/mood: bright, welcoming, lightly playful\nColor palette: warm neutrals with natural fur colors\nConstraints: no text, no watermark\nAvoid: leashes, collars with readable tags, extra props",
    alt: "Diverse dog lineup"
  });
  popcornElectronPresentationPanelValue292.position = {
    left: 96,
    top: 190,
    width: 1088,
    height: 122
  };
  popcornElectronPresentationPanelValue292.fit = "cover";
  popcornElectronPresentationPanelValue292.geometry = "roundRect";
  popcornElectronPresentationPanelValue292.regenerate({
    kind: "content"
  });
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue290, 96, 334, 420, "Generating panorama", "This specimen intentionally starts from a prompt-only image so the presentation demo can exercise pending/generating image UI without importing a baked asset.");
  popcornElectronPresentationPanelHelper8(popcornElectronPresentationPanelValue290, 650, 334, 534, "Iteration target", "Use this slide to tune worker-published generation state, overlay treatments, and frame behavior while the asset is unresolved or being regenerated.");
  let popcornElectronPresentationPanelValue293 = popcornElectronPresentationPanelValue290.shapes.add({
    geometry: "roundRect",
    position: {
      left: 96,
      top: 572,
      width: 1088,
      height: 86
    },
    fill: "#EFF6FF",
    line: {
      style: "solid",
      fill: popcornElectronPresentationPanelValue6.border,
      width: 1
    }
  });
  popcornElectronPresentationPanelValue293.text = "The image frame mirrors the requested panorama geometry and explicitly calls regenerate({ kind: 'content' }) so local demo sessions land in a real generating state instead of a static placeholder.";
  popcornElectronPresentationPanelValue293.text.fontSize = 18;
  popcornElectronPresentationPanelValue293.text.color = popcornElectronPresentationPanelValue6.ink;
}
function popcornElectronPresentationPanelHelper20(popcornElectronPresentationPanelParam11) {
  popcornElectronPresentationPanelParam11.comments.setSelf({
    id: "popcorn-demo-editor",
    displayName: "Granola Editor",
    initials: "GE",
    email: "editor@example.com"
  });
  let popcornElectronPresentationPanelValue271 = popcornElectronPresentationPanelParam11.slides.items[0],
    popcornElectronPresentationPanelValue272 = popcornElectronPresentationPanelParam11.slides.items[4],
    popcornElectronPresentationPanelValue273 = popcornElectronPresentationPanelParam11.slides.items[6];
  if (!popcornElectronPresentationPanelValue271 || !popcornElectronPresentationPanelValue272 || !popcornElectronPresentationPanelValue273) return;
  let popcornElectronPresentationPanelValue274 = popcornElectronPresentationPanelValue271.shapes.items.find(item => item.text.toString().includes("Slides Feature Catalog")) ?? popcornElectronPresentationPanelValue271.shapes.items[0];
  popcornElectronPresentationPanelValue274 && popcornElectronPresentationPanelParam11.comments.addThread({
    element: popcornElectronPresentationPanelValue274
  }, "Title copy is approved. Keep this as the default playground marker for stored deck comments.", {
    position: {
      x: 112,
      y: 92
    },
    createdAt: "2026-04-18T08:30:00.000Z"
  }).addReply("Leaving it here so slide-level thread overlays are easy to verify in Popcorn.", {
    author: {
      id: "popcorn-demo-designer",
      displayName: "Ivy Designer",
      initials: "ID",
      email: "ivy@example.com"
    },
    createdAt: "2026-04-18T08:47:00.000Z"
  });
  let popcornElectronPresentationPanelValue275 = popcornElectronPresentationPanelValue272.shapes.items.find(item => item.text.toString().trim() === "Process") ?? popcornElectronPresentationPanelValue272.shapes.items.find(item => item.text.toString().trim().length > 0);
  if (popcornElectronPresentationPanelValue275) {
    let popcornElectronPresentationPanelValue411 = popcornElectronPresentationPanelValue275.text.toString().trim().split(/\s+/).find(item => item.length > 0) ?? "";
    popcornElectronPresentationPanelValue411 && popcornElectronPresentationPanelParam11.comments.addThread({
      textMatch: {
        element: popcornElectronPresentationPanelValue275,
        query: popcornElectronPresentationPanelValue411
      }
    }, "This callout label is useful for text-range comment placement checks.", {
      position: {
        x: 856,
        y: 196
      },
      author: {
        id: "popcorn-demo-reviewer",
        displayName: "Noah Reviewer",
        initials: "NR"
      },
      createdAt: "2026-04-17T15:12:00.000Z"
    }).resolve(undefined, "2026-04-17T16:00:00.000Z");
  }
  popcornElectronPresentationPanelParam11.comments.addThread({
    slide: popcornElectronPresentationPanelValue273
  }, "Slide-level thread anchored in open space so marker projection can be checked independently of element geometry.", {
    position: {
      x: 1110,
      y: 602
    },
    author: {
      id: "popcorn-demo-pm",
      displayName: "Mia PM",
      initials: "MP"
    },
    createdAt: "2026-04-16T12:25:00.000Z"
  }).addReply("Keeping this unresolved gives the deck both active and resolved thread specimens.", {
    createdAt: "2026-04-16T12:42:00.000Z"
  });
}
function popcornElectronPresentationPanelHelper21() {
  let popcornElectronPresentationPanelValue559 = popcornElectronPresentationPanelImport4.create(),
    popcornElectronPresentationPanelValue560 = _remoteTextEditSessionI(),
    popcornElectronPresentationPanelValue561 = _remoteTextEditSessionA();
  return popcornElectronPresentationPanelHelper10(popcornElectronPresentationPanelValue559, popcornElectronPresentationPanelValue561), popcornElectronPresentationPanelHelper11(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper12(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper14(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper15(popcornElectronPresentationPanelValue559), $e(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper16(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper17(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper18(popcornElectronPresentationPanelValue559, popcornElectronPresentationPanelValue560, popcornElectronPresentationPanelValue561), popcornElectronPresentationPanelHelper19(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelHelper20(popcornElectronPresentationPanelValue559), popcornElectronPresentationPanelValue559;
}
function at() {
  return new Worker(new URL("" + new URL("runtime.worker-DRnLhsBJ.js", import.meta.url).href, "" + import.meta.url), {
    type: "module",
    name: "popcorn-presentation-controller-worker"
  });
}
var popcornElectronPresentationPanelValue8 = {
  presentationVersion: 0,
  previewVersion: 0,
  selectedSlideIdx: 0,
  slideIds: [],
  slideLabels: [],
  slideCount: 0,
  zoom: 1,
  fitScale: null,
  selectedSlideFrame: null,
  selectedSlideElementTargets: [],
  hyperlinkTargets: [],
  previewFrames: [],
  selectedElementIds: [],
  primarySelectedElementId: null,
  hoveredElementId: null,
  activeInteractionKind: null,
  selectionMarqueeFrame: null,
  notesText: "",
  canUndo: false,
  canRedo: false,
  localAwarenessCursor: null,
  awarenessCursors: [],
  awarenessSelections: [],
  slideRect: null,
  textLayoutBlocks: [],
  textEditState: null,
  inspector: {
    slideElements: [],
    selectedElement: null
  },
  commentThreads: [],
  camera: null
};
function popcornElectronPresentationPanelHelper22(popcornElectronPresentationPanelParam322 = popcornElectronPresentationPanelValue8) {
  return new _remoteTextEditSessionN(popcornElectronPresentationPanelParam322);
}
var popcornElectronPresentationPanelValue9 = 1;
function popcornElectronPresentationPanelHelper23(popcornElectronPresentationPanelParam228, popcornElectronPresentationPanelParam229) {
  return popcornElectronPresentationPanelParam228?.width === popcornElectronPresentationPanelParam229?.width && popcornElectronPresentationPanelParam228?.height === popcornElectronPresentationPanelParam229?.height && popcornElectronPresentationPanelParam228?.dpr === popcornElectronPresentationPanelParam229?.dpr;
}
function popcornElectronPresentationPanelHelper24(popcornElectronPresentationPanelParam113, popcornElectronPresentationPanelParam114, popcornElectronPresentationPanelParam115) {
  (popcornElectronPresentationPanelParam115?.resizeIntrinsicBitmap ?? true) && (popcornElectronPresentationPanelParam113.width = Math.max(1, Math.round(popcornElectronPresentationPanelParam114.width * popcornElectronPresentationPanelParam114.dpr)), popcornElectronPresentationPanelParam113.height = Math.max(1, Math.round(popcornElectronPresentationPanelParam114.height * popcornElectronPresentationPanelParam114.dpr)));
  popcornElectronPresentationPanelParam113.style.width = `${popcornElectronPresentationPanelParam114.width}px`;
  popcornElectronPresentationPanelParam113.style.height = `${popcornElectronPresentationPanelParam114.height}px`;
}
function popcornElectronPresentationPanelHelper25(popcornElectronPresentationPanelParam56) {
  if (!(typeof window < "u" && typeof Worker < "u" && typeof HTMLCanvasElement < "u" && typeof OffscreenCanvas < "u" && (!popcornElectronPresentationPanelParam56?.requiresCanvasTransfer || "transferControlToOffscreen" in HTMLCanvasElement.prototype))) throw Error("Popcorn presentation viewport requires Worker and transferControlToOffscreen support.");
}
var popcornElectronPresentationPanelValue10 = class {
  id = popcornElectronPresentationPanelValue9++;
  #e = _remoteTextEditSessionL("presentation-main-controller");
  #t = popcornElectronPresentationPanelHelper22();
  #n = new Set();
  #r = new Set();
  #i = [];
  #a;
  #o = null;
  #s = null;
  #c = null;
  #l = null;
  #u = null;
  #d = null;
  #f = null;
  #p = 1;
  #m = null;
  #h = null;
  #g = null;
  #_;
  #v = false;
  constructor(popcornElectronPresentationPanelParam27 = {}) {
    let popcornElectronPresentationPanelValue340 = popcornElectronPresentationPanelParam27.presentationProto ?? popcornElectronPresentationPanelParam27.presentation?.toProto() ?? popcornElectronPresentationPanelHelper21().toProto();
    this.#a = new _remoteTextEditSessionD((popcornElectronPresentationPanelParam27.workerFactory ?? at)(), popcornElectronPresentationPanelParam351 => this.#C(popcornElectronPresentationPanelParam351), popcornElectronPresentationPanelParam328 => {
      throw Error(popcornElectronPresentationPanelParam328);
    });
    this.#e.debug("bootstrap", {
      controllerId: this.id,
      slideCount: popcornElectronPresentationPanelValue340.slides?.length ?? 0,
      initialSelectedSlideIdx: popcornElectronPresentationPanelParam27.initialSelectedSlideIdx,
      initialZoom: popcornElectronPresentationPanelParam27.initialZoom
    });
    this.#a.bootstrap({
      presentationProto: popcornElectronPresentationPanelValue340,
      initialCrdtState: popcornElectronPresentationPanelParam27.initialCrdtState,
      initialSelectedSlideIdx: popcornElectronPresentationPanelParam27.initialSelectedSlideIdx,
      initialZoom: popcornElectronPresentationPanelParam27.initialZoom
    });
    this.#_ = popcornElectronPresentationPanelHelper1().then(() => {
      let popcornElectronPresentationPanelValue430 = _remoteTextEditSessionF();
      this.#e.debug("font-render-deps-ready", {
        fontCount: popcornElectronPresentationPanelValue430.length,
        fonts: popcornElectronPresentationPanelValue430.map(item => ({
          family: item.family,
          style: item.style,
          weight: item.weight,
          format: item.format,
          src: item.src
        })),
        fontDebug: _remoteTextEditSessionP()
      });
      popcornElectronPresentationPanelValue430.length !== 0 && (this.#a.dispatch({
        kind: "install-font-faces",
        fonts: popcornElectronPresentationPanelValue430
      }), this.#e.debug("font-install-dispatched", {
        fontCount: popcornElectronPresentationPanelValue430.length
      }));
    }).catch(() => {});
  }
  subscribe(popcornElectronPresentationPanelParam315) {
    return this.#t.subscribe(popcornElectronPresentationPanelParam315);
  }
  getState() {
    return this.#t.getState();
  }
  getSnapshot() {
    return this.getState();
  }
  dispatch(popcornElectronPresentationPanelParam354) {}
  attachViewport(popcornElectronPresentationPanelParam10) {
    popcornElectronPresentationPanelHelper25({
      requiresCanvasTransfer: !!popcornElectronPresentationPanelParam10.overlayCanvas
    });
    let popcornElectronPresentationPanelValue263 = popcornElectronPresentationPanelParam143 => {
        let popcornElectronPresentationPanelValue568 = popcornElectronPresentationPanelHelper2(popcornElectronPresentationPanelParam10.host, popcornElectronPresentationPanelParam143);
        return {
          width: Math.max(1, popcornElectronPresentationPanelValue568.width),
          height: Math.max(1, popcornElectronPresentationPanelValue568.height),
          dpr: window.devicePixelRatio || 1
        };
      },
      popcornElectronPresentationPanelValue264 = () => {
        this.#m = null;
        this.#b();
      },
      popcornElectronPresentationPanelValue265 = popcornElectronPresentationPanelParam171 => {
        this.#d = popcornElectronPresentationPanelValue263(popcornElectronPresentationPanelParam171);
        this.#m != null && window.cancelAnimationFrame(this.#m);
        this.#m = window.requestAnimationFrame(popcornElectronPresentationPanelValue264);
      },
      popcornElectronPresentationPanelValue266 = this.#s !== popcornElectronPresentationPanelParam10.canvas;
    if (popcornElectronPresentationPanelValue266 && (this.#s = popcornElectronPresentationPanelParam10.canvas), this.#c = popcornElectronPresentationPanelParam10.canvas.getContext("2d"), !this.#c) throw Error("Presentation viewport canvas 2d context is unavailable.");
    let popcornElectronPresentationPanelValue267 = !!(popcornElectronPresentationPanelParam10.overlayCanvas && this.#l !== popcornElectronPresentationPanelParam10.overlayCanvas);
    popcornElectronPresentationPanelValue267 && popcornElectronPresentationPanelParam10.overlayCanvas && (this.#l = popcornElectronPresentationPanelParam10.overlayCanvas);
    let popcornElectronPresentationPanelValue268 = popcornElectronPresentationPanelValue263();
    this.#u ??= {
      ...popcornElectronPresentationPanelValue268
    };
    this.#d ??= {
      ...popcornElectronPresentationPanelValue268
    };
    popcornElectronPresentationPanelHelper24(popcornElectronPresentationPanelParam10.canvas, this.#u, {
      resizeIntrinsicBitmap: true
    });
    popcornElectronPresentationPanelParam10.overlayCanvas && popcornElectronPresentationPanelHelper24(popcornElectronPresentationPanelParam10.overlayCanvas, this.#u, {
      resizeIntrinsicBitmap: true
    });
    this.#_.then(() => {
      if (this.#v) return;
      let popcornElectronPresentationPanelValue385 = popcornElectronPresentationPanelValue263();
      if (this.#d = {
        ...popcornElectronPresentationPanelValue385
      }, this.#u ?? this.#y(popcornElectronPresentationPanelValue385), popcornElectronPresentationPanelValue266) {
        if (this.#s !== popcornElectronPresentationPanelParam10.canvas) return;
        this.#a.dispatch({
          kind: "attach-canvas",
          width: popcornElectronPresentationPanelValue385.width,
          height: popcornElectronPresentationPanelValue385.height,
          dpr: popcornElectronPresentationPanelValue385.dpr
        });
      } else this.#s === popcornElectronPresentationPanelParam10.canvas && popcornElectronPresentationPanelValue265();
      if (popcornElectronPresentationPanelParam10.overlayCanvas) if (popcornElectronPresentationPanelValue267) {
        if (this.#l !== popcornElectronPresentationPanelParam10.overlayCanvas) return;
        let popcornElectronPresentationPanelValue474 = popcornElectronPresentationPanelParam10.overlayCanvas.transferControlToOffscreen();
        this.#a.dispatch({
          kind: "attach-overlay-canvas",
          canvas: popcornElectronPresentationPanelValue474,
          width: popcornElectronPresentationPanelValue385.width,
          height: popcornElectronPresentationPanelValue385.height,
          dpr: popcornElectronPresentationPanelValue385.dpr
        }, [popcornElectronPresentationPanelValue474]);
      } else this.#l === popcornElectronPresentationPanelParam10.overlayCanvas && popcornElectronPresentationPanelValue265();
    });
    let popcornElectronPresentationPanelValue269 = typeof ResizeObserver < "u" ? new ResizeObserver(popcornElectronPresentationPanelParam252 => {
      let popcornElectronPresentationPanelValue608 = popcornElectronPresentationPanelParam252[0];
      popcornElectronPresentationPanelValue265(popcornElectronPresentationPanelValue608 ? popcornElectronPresentationPanelHelper3(popcornElectronPresentationPanelParam10.host, popcornElectronPresentationPanelValue608) : null);
    }) : null;
    popcornElectronPresentationPanelValue269?.observe(popcornElectronPresentationPanelParam10.host);
    let popcornElectronPresentationPanelValue270 = () => {
      popcornElectronPresentationPanelValue265();
    };
    return window.addEventListener("resize", popcornElectronPresentationPanelValue270), () => {
      this.#m != null && (window.cancelAnimationFrame(this.#m), this.#m = null);
      popcornElectronPresentationPanelValue269?.disconnect();
      window.removeEventListener("resize", popcornElectronPresentationPanelValue270);
    };
  }
  #y(popcornElectronPresentationPanelParam178) {
    this.#u = {
      ...popcornElectronPresentationPanelParam178
    };
    this.#s && (popcornElectronPresentationPanelHelper24(this.#s, popcornElectronPresentationPanelParam178), this.#x());
    this.#l && popcornElectronPresentationPanelHelper24(this.#l, popcornElectronPresentationPanelParam178, {
      resizeIntrinsicBitmap: false
    });
  }
  requestExport(popcornElectronPresentationPanelParam116) {
    return this.#a.request({
      kind: "export",
      format: popcornElectronPresentationPanelParam116?.format ?? "proto"
    }).then(value => {
      if (value.kind !== "export") throw Error(`Unexpected export response: ${value.kind}`);
      return value.result;
    });
  }
  requestCrdtSnapshot() {
    return this.#a.request({
      kind: "crdt-snapshot"
    }).then(value => {
      if (value.kind !== "crdt-snapshot") throw Error(`Unexpected CRDT snapshot response: ${value.kind}`);
      return new Uint8Array(value.result);
    });
  }
  loadInitialCrdtState(popcornElectronPresentationPanelParam107) {
    return this.#a.request({
      kind: "load-initial-crdt-state",
      update: popcornElectronPresentationPanelParam107
    }).then(value => {
      if (value.kind !== "load-initial-crdt-state") throw Error(`Unexpected initial CRDT load response: ${value.kind}`);
    });
  }
  applyCrdtUpdate(popcornElectronPresentationPanelParam122) {
    return this.#a.request({
      kind: "apply-crdt-update",
      update: popcornElectronPresentationPanelParam122
    }).then(value => {
      if (value.kind !== "apply-crdt-update") throw Error(`Unexpected CRDT apply response: ${value.kind}`);
    });
  }
  hydrateImageAssets(popcornElectronPresentationPanelParam117) {
    return this.#a.request({
      kind: "hydrate-image-assets",
      assets: popcornElectronPresentationPanelParam117
    }).then(value => {
      if (value.kind !== "hydrate-image-assets") throw Error(`Unexpected image hydration response: ${value.kind}`);
    });
  }
  subscribeCrdtUpdates(popcornElectronPresentationPanelParam210) {
    return this.#n.add(popcornElectronPresentationPanelParam210), () => {
      this.#n.delete(popcornElectronPresentationPanelParam210);
    };
  }
  subscribeImageHydrationRequests(popcornElectronPresentationPanelParam165) {
    return this.#r.add(popcornElectronPresentationPanelParam165), this.#i.length > 0 && popcornElectronPresentationPanelParam165(this.#i), () => {
      this.#r.delete(popcornElectronPresentationPanelParam165);
    };
  }
  replaceFromProto(popcornElectronPresentationPanelParam118) {
    return this.#a.request({
      kind: "replace-from-proto",
      presentationProto: popcornElectronPresentationPanelParam118
    }).then(value => {
      if (value.kind !== "replace-from-proto") throw Error(`Unexpected replace response: ${value.kind}`);
    });
  }
  dispose() {
    this.#v || (this.#v = true, this.#s = null, this.#c = null, this.#l = null, this.#h?.bitmap.close(), this.#h = null, this.#m != null && (window.cancelAnimationFrame(this.#m), this.#m = null), this.#n.clear(), this.#a.dispose());
  }
  #b() {
    let popcornElectronPresentationPanelValue464 = this.#d;
    if (!popcornElectronPresentationPanelValue464) return;
    if (popcornElectronPresentationPanelHelper23(this.#u, popcornElectronPresentationPanelValue464) && this.#f == null) {
      this.#y(popcornElectronPresentationPanelValue464);
      return;
    }
    if (this.#f != null) return;
    let popcornElectronPresentationPanelValue465 = this.#p++;
    this.#f = popcornElectronPresentationPanelValue465;
    this.#a.dispatch({
      kind: "resize-viewport",
      width: popcornElectronPresentationPanelValue464.width,
      height: popcornElectronPresentationPanelValue464.height,
      dpr: popcornElectronPresentationPanelValue464.dpr,
      resizeId: popcornElectronPresentationPanelValue465,
      ...(this.#o ? {
        camera: {
          ...this.#o
        }
      } : {})
    });
  }
  #x() {
    let popcornElectronPresentationPanelValue494 = this.#s,
      popcornElectronPresentationPanelValue495 = this.#c,
      popcornElectronPresentationPanelValue496 = this.#h,
      popcornElectronPresentationPanelValue497 = this.#u;
    !popcornElectronPresentationPanelValue494 || !popcornElectronPresentationPanelValue495 || !popcornElectronPresentationPanelValue496 || !popcornElectronPresentationPanelValue497 || (popcornElectronPresentationPanelValue495.setTransform(1, 0, 0, 1, 0, 0), popcornElectronPresentationPanelValue495.clearRect(0, 0, popcornElectronPresentationPanelValue494.width, popcornElectronPresentationPanelValue494.height), popcornElectronPresentationPanelValue495.setTransform(popcornElectronPresentationPanelValue497.dpr, 0, 0, popcornElectronPresentationPanelValue497.dpr, 0, 0), popcornElectronPresentationPanelValue495.drawImage(popcornElectronPresentationPanelValue496.bitmap, 0, 0, popcornElectronPresentationPanelValue496.metrics.width, popcornElectronPresentationPanelValue496.metrics.height));
  }
  #S(popcornElectronPresentationPanelParam44) {
    let popcornElectronPresentationPanelValue425 = {
        width: popcornElectronPresentationPanelParam44.width,
        height: popcornElectronPresentationPanelParam44.height,
        dpr: popcornElectronPresentationPanelParam44.dpr
      },
      popcornElectronPresentationPanelValue426 = popcornElectronPresentationPanelParam44.resizeId != null,
      popcornElectronPresentationPanelValue427 = popcornElectronPresentationPanelValue426 && this.#f === popcornElectronPresentationPanelParam44.resizeId,
      popcornElectronPresentationPanelValue428 = !popcornElectronPresentationPanelValue426 || popcornElectronPresentationPanelValue427,
      popcornElectronPresentationPanelValue429 = !this.#d || popcornElectronPresentationPanelHelper23(this.#d, popcornElectronPresentationPanelValue425);
    if (!popcornElectronPresentationPanelValue428 || !popcornElectronPresentationPanelValue429) {
      popcornElectronPresentationPanelParam44.bitmap.close();
      popcornElectronPresentationPanelValue427 && (this.#f = null, this.#b());
      return;
    }
    this.#h?.bitmap.close();
    this.#h = {
      bitmap: popcornElectronPresentationPanelParam44.bitmap,
      metrics: popcornElectronPresentationPanelValue425
    };
    popcornElectronPresentationPanelValue427 && (this.#f = null);
    this.#y(popcornElectronPresentationPanelValue425);
    popcornElectronPresentationPanelValue427 && popcornElectronPresentationPanelParam44.resizeId != null && (this.#a.dispatch({
      kind: "commit-viewport-resize",
      resizeId: popcornElectronPresentationPanelParam44.resizeId
    }), this.#b());
  }
  setSelectedSlideIdx(popcornElectronPresentationPanelParam237) {
    this.#a.dispatch({
      kind: "set-selected-slide-idx",
      index: popcornElectronPresentationPanelParam237
    });
  }
  setZoom(popcornElectronPresentationPanelParam280) {
    this.#a.dispatch({
      kind: "set-zoom",
      zoom: popcornElectronPresentationPanelParam280
    });
  }
  setEditingEnabled(popcornElectronPresentationPanelParam238) {
    this.#a.dispatch({
      kind: "set-editing-enabled",
      isEditing: popcornElectronPresentationPanelParam238
    });
  }
  setStageBackgroundColor(popcornElectronPresentationPanelParam127) {
    let popcornElectronPresentationPanelValue552 = popcornElectronPresentationPanelParam127.trim();
    popcornElectronPresentationPanelValue552.length === 0 || popcornElectronPresentationPanelValue552 === this.#g || (this.#g = popcornElectronPresentationPanelValue552, this.#a.dispatch({
      kind: "set-stage-background-color",
      backgroundColor: popcornElectronPresentationPanelValue552
    }));
  }
  setViewportInsets(popcornElectronPresentationPanelParam222) {
    this.#a.dispatch({
      kind: "set-viewport-insets",
      viewportInsets: {
        ...popcornElectronPresentationPanelParam222
      }
    });
  }
  setViewportCamera(popcornElectronPresentationPanelParam187) {
    this.#o = popcornElectronPresentationPanelParam187 ? {
      ...popcornElectronPresentationPanelParam187
    } : null;
    popcornElectronPresentationPanelParam187 && this.#a.dispatch({
      kind: "set-camera",
      camera: {
        ...popcornElectronPresentationPanelParam187
      }
    });
  }
  getViewportCamera() {
    return this.#o ? {
      ...this.#o
    } : null;
  }
  setSelectedElementId(popcornElectronPresentationPanelParam227) {
    this.#a.dispatch({
      kind: "set-selected-element-id",
      elementId: popcornElectronPresentationPanelParam227
    });
  }
  replyToCommentThread(popcornElectronPresentationPanelParam182, popcornElectronPresentationPanelParam183) {
    return this.#a.dispatch({
      kind: "reply-comment-thread",
      threadId: popcornElectronPresentationPanelParam182,
      body: popcornElectronPresentationPanelParam183
    }), true;
  }
  resolveCommentThread(popcornElectronPresentationPanelParam193) {
    return this.#a.dispatch({
      kind: "resolve-comment-thread",
      threadId: popcornElectronPresentationPanelParam193
    }), true;
  }
  reopenCommentThread(popcornElectronPresentationPanelParam199) {
    return this.#a.dispatch({
      kind: "reopen-comment-thread",
      threadId: popcornElectronPresentationPanelParam199
    }), true;
  }
  deleteCommentThread(popcornElectronPresentationPanelParam200) {
    return this.#a.dispatch({
      kind: "delete-comment-thread",
      threadId: popcornElectronPresentationPanelParam200
    }), true;
  }
  toggleCommentReaction(popcornElectronPresentationPanelParam139, popcornElectronPresentationPanelParam140, popcornElectronPresentationPanelParam141) {
    return this.#a.dispatch({
      kind: "toggle-comment-reaction",
      threadId: popcornElectronPresentationPanelParam139,
      commentId: popcornElectronPresentationPanelParam140,
      reactionType: popcornElectronPresentationPanelParam141
    }), true;
  }
  editThreadComment(popcornElectronPresentationPanelParam149, popcornElectronPresentationPanelParam150, popcornElectronPresentationPanelParam151) {
    return this.#a.dispatch({
      kind: "edit-thread-comment",
      threadId: popcornElectronPresentationPanelParam149,
      commentId: popcornElectronPresentationPanelParam150,
      body: popcornElectronPresentationPanelParam151
    }), true;
  }
  deleteThreadComment(popcornElectronPresentationPanelParam157, popcornElectronPresentationPanelParam158) {
    return this.#a.dispatch({
      kind: "delete-thread-comment",
      threadId: popcornElectronPresentationPanelParam157,
      commentId: popcornElectronPresentationPanelParam158
    }), true;
  }
  beginSelectionMarquee(popcornElectronPresentationPanelParam221) {
    return this.#a.dispatch({
      kind: "begin-selection-marquee",
      ...popcornElectronPresentationPanelParam221
    }), true;
  }
  updateSelectionMarquee(popcornElectronPresentationPanelParam219) {
    return this.#a.dispatch({
      kind: "update-selection-marquee",
      ...popcornElectronPresentationPanelParam219
    }), true;
  }
  endSelectionMarquee(popcornElectronPresentationPanelParam190) {
    return this.#a.dispatch({
      kind: "end-selection-marquee",
      commit: popcornElectronPresentationPanelParam190?.commit
    }), true;
  }
  textPointerDown(popcornElectronPresentationPanelParam160, popcornElectronPresentationPanelParam161) {
    return this.#a.dispatch({
      kind: "text-pointer-down",
      point: popcornElectronPresentationPanelParam160,
      shiftKey: popcornElectronPresentationPanelParam161?.shiftKey
    }), true;
  }
  textPointerMove(popcornElectronPresentationPanelParam230) {
    return this.#a.dispatch({
      kind: "text-pointer-move",
      point: popcornElectronPresentationPanelParam230
    }), true;
  }
  textPointerUp() {
    this.#a.dispatch({
      kind: "text-pointer-up"
    });
  }
  textSelectWordAtPoint(popcornElectronPresentationPanelParam192) {
    return this.#a.dispatch({
      kind: "text-select-word-at-point",
      point: popcornElectronPresentationPanelParam192
    }), true;
  }
  textSelectParagraphAtPoint(popcornElectronPresentationPanelParam181) {
    return this.#a.dispatch({
      kind: "text-select-paragraph-at-point",
      point: popcornElectronPresentationPanelParam181
    }), true;
  }
  textActivateBlockEnd(popcornElectronPresentationPanelParam194) {
    return this.#a.dispatch({
      kind: "text-activate-block-end",
      blockId: popcornElectronPresentationPanelParam194
    }), true;
  }
  textClear() {
    this.#a.dispatch({
      kind: "text-clear"
    });
  }
  textHandleKeyDown(popcornElectronPresentationPanelParam236) {
    return this.#a.dispatch({
      kind: "text-keydown",
      event: popcornElectronPresentationPanelParam236
    }), true;
  }
  textHandleBeforeInput(popcornElectronPresentationPanelParam223) {
    return this.#a.dispatch({
      kind: "text-before-input",
      event: popcornElectronPresentationPanelParam223
    }), true;
  }
  textHandleInput(popcornElectronPresentationPanelParam243) {
    return this.#a.dispatch({
      kind: "text-input",
      event: popcornElectronPresentationPanelParam243
    }), true;
  }
  textHandleCompositionEnd(popcornElectronPresentationPanelParam217) {
    return this.#a.dispatch({
      kind: "text-composition-end",
      event: popcornElectronPresentationPanelParam217
    }), true;
  }
  setHoveredElementId(popcornElectronPresentationPanelParam231) {
    this.#a.dispatch({
      kind: "set-hovered-element-id",
      elementId: popcornElectronPresentationPanelParam231
    });
  }
  setLocalAwarenessCursor(popcornElectronPresentationPanelParam225) {
    this.#a.dispatch({
      kind: "set-local-awareness-cursor",
      point: popcornElectronPresentationPanelParam225
    });
  }
  clearLocalAwarenessCursor() {
    this.#a.dispatch({
      kind: "clear-local-awareness-cursor"
    });
  }
  setPresenceCursor(popcornElectronPresentationPanelParam172, popcornElectronPresentationPanelParam173, popcornElectronPresentationPanelParam174) {
    this.#a.dispatch({
      kind: "set-presence-cursor",
      presenceId: popcornElectronPresentationPanelParam172,
      cursor: popcornElectronPresentationPanelParam173,
      presenceKind: popcornElectronPresentationPanelParam174?.kind
    });
  }
  setPresenceSelection(popcornElectronPresentationPanelParam162, popcornElectronPresentationPanelParam163, popcornElectronPresentationPanelParam164) {
    this.#a.dispatch({
      kind: "set-presence-selection",
      presenceId: popcornElectronPresentationPanelParam162,
      selection: popcornElectronPresentationPanelParam163,
      presenceKind: popcornElectronPresentationPanelParam164?.kind
    });
  }
  clearPresenceCursor(popcornElectronPresentationPanelParam179, popcornElectronPresentationPanelParam180) {
    this.#a.dispatch({
      kind: "clear-presence-cursor",
      presenceId: popcornElectronPresentationPanelParam179,
      slideId: popcornElectronPresentationPanelParam180?.slideId
    });
  }
  clearPresenceSelection(popcornElectronPresentationPanelParam176, popcornElectronPresentationPanelParam177) {
    this.#a.dispatch({
      kind: "clear-presence-selection",
      presenceId: popcornElectronPresentationPanelParam176,
      slideId: popcornElectronPresentationPanelParam177?.slideId
    });
  }
  beginElementInteraction(popcornElectronPresentationPanelParam218) {
    return this.#a.dispatch({
      kind: "begin-element-interaction",
      ...popcornElectronPresentationPanelParam218
    }), true;
  }
  updateElementInteraction(popcornElectronPresentationPanelParam213) {
    return this.#a.dispatch({
      kind: "update-element-interaction",
      ...popcornElectronPresentationPanelParam213
    }), true;
  }
  endElementInteraction(popcornElectronPresentationPanelParam185) {
    return this.#a.dispatch({
      kind: "end-element-interaction",
      commit: popcornElectronPresentationPanelParam185?.commit
    }), true;
  }
  nudgeSelectedElements(popcornElectronPresentationPanelParam184) {
    return this.#a.dispatch({
      kind: "nudge-selected-elements",
      dx: popcornElectronPresentationPanelParam184.dx,
      dy: popcornElectronPresentationPanelParam184.dy
    }), true;
  }
  clearElementSelection() {
    this.#a.dispatch({
      kind: "clear-element-selection"
    });
  }
  deleteSelectedElement() {
    return this.#a.dispatch({
      kind: "delete-selected-element"
    }), true;
  }
  addSlide() {
    this.#a.dispatch({
      kind: "add-slide"
    });
  }
  duplicateSelectedSlide() {
    this.#a.dispatch({
      kind: "duplicate-selected-slide"
    });
  }
  moveSlide(popcornElectronPresentationPanelParam203, popcornElectronPresentationPanelParam204) {
    return this.#a.dispatch({
      kind: "move-slide",
      fromIndex: popcornElectronPresentationPanelParam203,
      toIndex: popcornElectronPresentationPanelParam204
    }), true;
  }
  deleteSlide(popcornElectronPresentationPanelParam245) {
    return this.#a.dispatch({
      kind: "delete-slide",
      index: popcornElectronPresentationPanelParam245
    }), true;
  }
  updateSpeakerNotes(popcornElectronPresentationPanelParam244) {
    this.#a.dispatch({
      kind: "update-speaker-notes",
      value: popcornElectronPresentationPanelParam244
    });
  }
  updateSelectedElementFrame(popcornElectronPresentationPanelParam166) {
    return this.#a.dispatch({
      kind: "update-selected-element-frame",
      framePatch: popcornElectronPresentationPanelParam166
    }), true;
  }
  updateSelectedElementStyle(popcornElectronPresentationPanelParam167) {
    return this.#a.dispatch({
      kind: "update-selected-element-style",
      stylePatch: popcornElectronPresentationPanelParam167
    }), true;
  }
  reorderSelectedElement(popcornElectronPresentationPanelParam188) {
    return this.#a.dispatch({
      kind: "reorder-selected-element",
      direction: popcornElectronPresentationPanelParam188
    }), true;
  }
  undo() {
    this.#a.dispatch({
      kind: "undo"
    });
  }
  redo() {
    this.#a.dispatch({
      kind: "redo"
    });
  }
  exportPresentationProto() {
    return this.requestExport({
      format: "proto"
    }).then(value => value.presentationProto);
  }
  requestSlideThumbnail(popcornElectronPresentationPanelParam54, popcornElectronPresentationPanelParam55) {
    return this.#_.then(() => this.#a.request({
      kind: "slide-thumbnail",
      index: popcornElectronPresentationPanelParam54,
      cssMaxPx: popcornElectronPresentationPanelParam55?.cssMaxPx,
      pixelRatio: popcornElectronPresentationPanelParam55?.pixelRatio
    }).then(value => {
      if (value.kind !== "slide-thumbnail") throw Error(`Unexpected thumbnail response: ${value.kind}`);
      return value.result;
    }));
  }
  #C(popcornElectronPresentationPanelParam25) {
    switch (popcornElectronPresentationPanelParam25.kind) {
      case "crdt-update":
        {
          let popcornElectronPresentationPanelValue602 = new Uint8Array(popcornElectronPresentationPanelParam25.update);
          for (let popcornElectronPresentationPanelValue617 of this.#n) popcornElectronPresentationPanelValue617(popcornElectronPresentationPanelValue602);
          return;
        }
      case "image-hydration-requests":
        this.#i = popcornElectronPresentationPanelParam25.requests;
        for (let popcornElectronPresentationPanelValue616 of this.#r) popcornElectronPresentationPanelValue616(popcornElectronPresentationPanelParam25.requests);
        return;
      case "meta":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "navigation":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "selection":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "preview":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "viewport":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "viewport-resize-ready":
        if (this.#f !== popcornElectronPresentationPanelParam25.resizeId || this.#d == null) return;
        this.#y(this.#d);
        this.#a.dispatch({
          kind: "commit-viewport-resize",
          resizeId: popcornElectronPresentationPanelParam25.resizeId
        });
        return;
      case "viewport-frame":
        this.#S(popcornElectronPresentationPanelParam25);
        return;
      case "viewport-frame-presented":
        if (this.#f !== popcornElectronPresentationPanelParam25.resizeId) return;
        this.#f = null;
        this.#y({
          width: popcornElectronPresentationPanelParam25.width,
          height: popcornElectronPresentationPanelParam25.height,
          dpr: popcornElectronPresentationPanelParam25.dpr
        });
        return;
      case "editor":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "comments":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "awareness":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "inspector":
        this.#t.patch(popcornElectronPresentationPanelParam25.state);
        return;
      case "debug-log":
        _remoteTextEditSessionL(popcornElectronPresentationPanelParam25.namespace).debug(popcornElectronPresentationPanelParam25.message, popcornElectronPresentationPanelParam25.details);
        return;
      default:
        return popcornElectronPresentationPanelParam25;
    }
  }
};
function popcornElectronPresentationPanelHelper26(popcornElectronPresentationPanelParam323 = {}) {
  return new popcornElectronPresentationPanelValue10(popcornElectronPresentationPanelParam323);
}
function popcornElectronPresentationPanelHelper27(popcornElectronPresentationPanelParam159) {
  let popcornElectronPresentationPanelValue577 = [],
    popcornElectronPresentationPanelValue578 = [];
  for (let popcornElectronPresentationPanelValue609 of popcornElectronPresentationPanelParam159) {
    popcornElectronPresentationPanelValue577.push(...(popcornElectronPresentationPanelValue609.panels ?? []));
    popcornElectronPresentationPanelValue578.push(...(popcornElectronPresentationPanelValue609.stageOverlays ?? []));
  }
  return {
    panels: popcornElectronPresentationPanelValue577,
    stageOverlays: popcornElectronPresentationPanelValue578
  };
}
function popcornElectronPresentationPanelHelper28(popcornElectronPresentationPanelParam74, popcornElectronPresentationPanelParam75) {
  let popcornElectronPresentationPanelValue499 = Math.max(0, popcornElectronPresentationPanelParam75?.left ?? 0),
    popcornElectronPresentationPanelValue500 = Math.max(0, popcornElectronPresentationPanelParam75?.top ?? 0),
    popcornElectronPresentationPanelValue501 = Math.max(0, popcornElectronPresentationPanelParam75?.right ?? 0),
    popcornElectronPresentationPanelValue502 = Math.max(0, popcornElectronPresentationPanelParam75?.bottom ?? 0);
  return {
    left: popcornElectronPresentationPanelValue499,
    top: popcornElectronPresentationPanelValue500,
    right: popcornElectronPresentationPanelValue501,
    bottom: popcornElectronPresentationPanelValue502,
    width: Math.max(1, popcornElectronPresentationPanelParam74.width - popcornElectronPresentationPanelValue499 - popcornElectronPresentationPanelValue501),
    height: Math.max(1, popcornElectronPresentationPanelParam74.height - popcornElectronPresentationPanelValue500 - popcornElectronPresentationPanelValue502)
  };
}
function popcornElectronPresentationPanelHelper29(popcornElectronPresentationPanelParam253) {
  return {
    x: Math.max(240, popcornElectronPresentationPanelParam253.width),
    y: Math.max(180, popcornElectronPresentationPanelParam253.height)
  };
}
function popcornElectronPresentationPanelHelper30(popcornElectronPresentationPanelParam58, popcornElectronPresentationPanelParam59, popcornElectronPresentationPanelParam60, popcornElectronPresentationPanelParam61) {
  let popcornElectronPresentationPanelValue475 = popcornElectronPresentationPanelHelper28(popcornElectronPresentationPanelParam59, popcornElectronPresentationPanelParam61),
    popcornElectronPresentationPanelValue476 = _popcornElectronSurfaceStyleV({
      ...popcornElectronPresentationPanelParam58,
      x: popcornElectronPresentationPanelParam58.x - popcornElectronPresentationPanelValue475.left,
      y: popcornElectronPresentationPanelParam58.y - popcornElectronPresentationPanelValue475.top
    }, {
      width: popcornElectronPresentationPanelValue475.width,
      height: popcornElectronPresentationPanelValue475.height
    }, popcornElectronPresentationPanelParam60),
    popcornElectronPresentationPanelValue477 = Math.max(0, popcornElectronPresentationPanelParam60.width) * popcornElectronPresentationPanelValue476.k,
    popcornElectronPresentationPanelValue478 = Math.max(0, popcornElectronPresentationPanelParam60.height) * popcornElectronPresentationPanelValue476.k;
  return {
    ...popcornElectronPresentationPanelValue476,
    x: popcornElectronPresentationPanelValue477 <= popcornElectronPresentationPanelValue475.width ? popcornElectronPresentationPanelValue475.left + (popcornElectronPresentationPanelValue475.width - popcornElectronPresentationPanelValue477) / 2 : popcornElectronPresentationPanelValue475.left + popcornElectronPresentationPanelValue476.x,
    y: popcornElectronPresentationPanelValue478 <= popcornElectronPresentationPanelValue475.height ? popcornElectronPresentationPanelValue475.top + (popcornElectronPresentationPanelValue475.height - popcornElectronPresentationPanelValue478) / 2 : popcornElectronPresentationPanelValue475.top + popcornElectronPresentationPanelValue476.y
  };
}
function popcornElectronPresentationPanelHelper31(popcornElectronPresentationPanelParam232, popcornElectronPresentationPanelParam233 = 1) {
  let popcornElectronPresentationPanelValue605 = Math.max(popcornElectronPresentationPanelParam233, 0.05);
  return Math.min(4 / popcornElectronPresentationPanelValue605, Math.max(0.1 / popcornElectronPresentationPanelValue605, popcornElectronPresentationPanelParam232));
}
function popcornElectronPresentationPanelHelper32(popcornElectronPresentationPanelParam310) {
  return Math.min(4, Math.max(0.1, popcornElectronPresentationPanelParam310));
}
function popcornElectronPresentationPanelHelper33(popcornElectronPresentationPanelParam128, popcornElectronPresentationPanelParam129, popcornElectronPresentationPanelParam130) {
  let popcornElectronPresentationPanelValue554 = popcornElectronPresentationPanelHelper28(popcornElectronPresentationPanelParam128, popcornElectronPresentationPanelParam130),
    popcornElectronPresentationPanelValue555 = Math.max(1, popcornElectronPresentationPanelValue554.width - 96),
    popcornElectronPresentationPanelValue556 = Math.max(1, popcornElectronPresentationPanelValue554.height - 96);
  return Math.max(0.05, Math.min(popcornElectronPresentationPanelValue555 / Math.max(popcornElectronPresentationPanelParam129.width, 1), popcornElectronPresentationPanelValue556 / Math.max(popcornElectronPresentationPanelParam129.height, 1)));
}
function popcornElectronPresentationPanelHelper34(popcornElectronPresentationPanelParam46) {
  let popcornElectronPresentationPanelValue451 = popcornElectronPresentationPanelHelper29(popcornElectronPresentationPanelParam46.viewport),
    popcornElectronPresentationPanelValue452 = {
      x: popcornElectronPresentationPanelValue451.x,
      y: popcornElectronPresentationPanelValue451.y
    },
    popcornElectronPresentationPanelValue453 = {
      width: popcornElectronPresentationPanelParam46.frame.width + popcornElectronPresentationPanelValue451.x * 2,
      height: popcornElectronPresentationPanelParam46.frame.height + popcornElectronPresentationPanelValue451.y * 2
    },
    popcornElectronPresentationPanelValue454 = _popcornElectronSurfaceStyleX(popcornElectronPresentationPanelParam46.camera, popcornElectronPresentationPanelValue452.x, popcornElectronPresentationPanelValue452.y),
    popcornElectronPresentationPanelValue455 = popcornElectronPresentationPanelHelper33(popcornElectronPresentationPanelParam46.viewport, popcornElectronPresentationPanelParam46.frame, popcornElectronPresentationPanelParam46.viewportInsets);
  return {
    fitScale: popcornElectronPresentationPanelValue455,
    zoomFactor: popcornElectronPresentationPanelParam46.camera.k / Math.max(popcornElectronPresentationPanelValue455, 2.220446049250313e-16),
    worldSize: popcornElectronPresentationPanelValue453,
    slideOrigin: popcornElectronPresentationPanelValue452,
    slideRect: {
      left: popcornElectronPresentationPanelValue454.x,
      top: popcornElectronPresentationPanelValue454.y,
      width: popcornElectronPresentationPanelParam46.frame.width * popcornElectronPresentationPanelParam46.camera.k,
      height: popcornElectronPresentationPanelParam46.frame.height * popcornElectronPresentationPanelParam46.camera.k,
      scale: popcornElectronPresentationPanelParam46.camera.k
    }
  };
}
function $(popcornElectronPresentationPanelParam45) {
  let popcornElectronPresentationPanelValue434 = popcornElectronPresentationPanelHelper33(popcornElectronPresentationPanelParam45.viewport, popcornElectronPresentationPanelParam45.frame, popcornElectronPresentationPanelParam45.viewportInsets),
    popcornElectronPresentationPanelValue435 = popcornElectronPresentationPanelHelper31(popcornElectronPresentationPanelParam45.zoomFactor ?? 1, popcornElectronPresentationPanelValue434),
    popcornElectronPresentationPanelValue436 = popcornElectronPresentationPanelHelper34({
      viewport: popcornElectronPresentationPanelParam45.viewport,
      frame: popcornElectronPresentationPanelParam45.frame,
      camera: {
        x: 0,
        y: 0,
        k: popcornElectronPresentationPanelValue434 * popcornElectronPresentationPanelValue435
      },
      viewportInsets: popcornElectronPresentationPanelParam45.viewportInsets
    }),
    popcornElectronPresentationPanelValue437 = popcornElectronPresentationPanelHelper28(popcornElectronPresentationPanelParam45.viewport, popcornElectronPresentationPanelParam45.viewportInsets),
    popcornElectronPresentationPanelValue438 = popcornElectronPresentationPanelValue436.slideOrigin.x + popcornElectronPresentationPanelParam45.frame.width / 2,
    popcornElectronPresentationPanelValue439 = popcornElectronPresentationPanelValue436.slideOrigin.y + popcornElectronPresentationPanelParam45.frame.height / 2;
  return popcornElectronPresentationPanelHelper30({
    k: popcornElectronPresentationPanelValue434 * popcornElectronPresentationPanelValue435,
    x: popcornElectronPresentationPanelValue437.left + popcornElectronPresentationPanelValue437.width / 2 - popcornElectronPresentationPanelValue438 * popcornElectronPresentationPanelValue434 * popcornElectronPresentationPanelValue435,
    y: popcornElectronPresentationPanelValue437.top + popcornElectronPresentationPanelValue437.height / 2 - popcornElectronPresentationPanelValue439 * popcornElectronPresentationPanelValue434 * popcornElectronPresentationPanelValue435
  }, popcornElectronPresentationPanelParam45.viewport, popcornElectronPresentationPanelValue436.worldSize, popcornElectronPresentationPanelParam45.viewportInsets);
}
function popcornElectronPresentationPanelHelper35(popcornElectronPresentationPanelParam28) {
  if (popcornElectronPresentationPanelParam28.previousViewport.width <= 0 || popcornElectronPresentationPanelParam28.previousViewport.height <= 0 || popcornElectronPresentationPanelParam28.nextViewport.width <= 0 || popcornElectronPresentationPanelParam28.nextViewport.height <= 0 || popcornElectronPresentationPanelParam28.camera.k <= 0) return popcornElectronPresentationPanelHelper36({
    camera: popcornElectronPresentationPanelParam28.camera,
    viewport: popcornElectronPresentationPanelParam28.nextViewport,
    frame: popcornElectronPresentationPanelParam28.frame,
    viewportInsets: popcornElectronPresentationPanelParam28.viewportInsets
  });
  let popcornElectronPresentationPanelValue348 = popcornElectronPresentationPanelHelper28(popcornElectronPresentationPanelParam28.previousViewport, popcornElectronPresentationPanelParam28.viewportInsets),
    popcornElectronPresentationPanelValue349 = popcornElectronPresentationPanelHelper28(popcornElectronPresentationPanelParam28.nextViewport, popcornElectronPresentationPanelParam28.viewportInsets),
    popcornElectronPresentationPanelValue350 = popcornElectronPresentationPanelHelper34({
      viewport: popcornElectronPresentationPanelParam28.previousViewport,
      frame: popcornElectronPresentationPanelParam28.frame,
      camera: popcornElectronPresentationPanelParam28.camera,
      viewportInsets: popcornElectronPresentationPanelParam28.viewportInsets
    }),
    popcornElectronPresentationPanelValue351 = {
      x: popcornElectronPresentationPanelValue348.left + popcornElectronPresentationPanelValue348.width / 2,
      y: popcornElectronPresentationPanelValue348.top + popcornElectronPresentationPanelValue348.height / 2
    },
    popcornElectronPresentationPanelValue352 = {
      x: (popcornElectronPresentationPanelValue351.x - popcornElectronPresentationPanelValue350.slideRect.left) / Math.max(popcornElectronPresentationPanelParam28.camera.k, 2.220446049250313e-16),
      y: (popcornElectronPresentationPanelValue351.y - popcornElectronPresentationPanelValue350.slideRect.top) / Math.max(popcornElectronPresentationPanelParam28.camera.k, 2.220446049250313e-16)
    },
    popcornElectronPresentationPanelValue353 = popcornElectronPresentationPanelHelper34({
      viewport: popcornElectronPresentationPanelParam28.nextViewport,
      frame: popcornElectronPresentationPanelParam28.frame,
      camera: {
        x: 0,
        y: 0,
        k: popcornElectronPresentationPanelParam28.camera.k
      },
      viewportInsets: popcornElectronPresentationPanelParam28.viewportInsets
    }),
    popcornElectronPresentationPanelValue354 = {
      x: popcornElectronPresentationPanelValue349.left + popcornElectronPresentationPanelValue349.width / 2,
      y: popcornElectronPresentationPanelValue349.top + popcornElectronPresentationPanelValue349.height / 2
    };
  return popcornElectronPresentationPanelHelper36({
    camera: {
      k: popcornElectronPresentationPanelParam28.camera.k,
      x: popcornElectronPresentationPanelValue354.x - (popcornElectronPresentationPanelValue353.slideOrigin.x + popcornElectronPresentationPanelValue352.x) * popcornElectronPresentationPanelParam28.camera.k,
      y: popcornElectronPresentationPanelValue354.y - (popcornElectronPresentationPanelValue353.slideOrigin.y + popcornElectronPresentationPanelValue352.y) * popcornElectronPresentationPanelParam28.camera.k
    },
    viewport: popcornElectronPresentationPanelParam28.nextViewport,
    frame: popcornElectronPresentationPanelParam28.frame,
    viewportInsets: popcornElectronPresentationPanelParam28.viewportInsets
  });
}
function popcornElectronPresentationPanelHelper36(popcornElectronPresentationPanelParam133) {
  let popcornElectronPresentationPanelValue563 = popcornElectronPresentationPanelHelper34({
    viewport: popcornElectronPresentationPanelParam133.viewport,
    frame: popcornElectronPresentationPanelParam133.frame,
    camera: popcornElectronPresentationPanelParam133.camera,
    viewportInsets: popcornElectronPresentationPanelParam133.viewportInsets
  });
  return popcornElectronPresentationPanelHelper30(popcornElectronPresentationPanelParam133.camera, popcornElectronPresentationPanelParam133.viewport, popcornElectronPresentationPanelValue563.worldSize, popcornElectronPresentationPanelParam133.viewportInsets);
}
function popcornElectronPresentationPanelHelper37(popcornElectronPresentationPanelParam119) {
  let popcornElectronPresentationPanelValue541 = {
      ...popcornElectronPresentationPanelParam119.camera,
      k: popcornElectronPresentationPanelHelper32(popcornElectronPresentationPanelParam119.camera.k)
    },
    popcornElectronPresentationPanelValue542 = popcornElectronPresentationPanelHelper34({
      viewport: popcornElectronPresentationPanelParam119.viewport,
      frame: popcornElectronPresentationPanelParam119.frame,
      camera: popcornElectronPresentationPanelValue541,
      viewportInsets: popcornElectronPresentationPanelParam119.viewportInsets
    });
  return popcornElectronPresentationPanelHelper30(popcornElectronPresentationPanelValue541, popcornElectronPresentationPanelParam119.viewport, popcornElectronPresentationPanelValue542.worldSize, popcornElectronPresentationPanelParam119.viewportInsets);
}
function popcornElectronPresentationPanelHelper38(popcornElectronPresentationPanelParam205) {
  let popcornElectronPresentationPanelValue591 = popcornElectronPresentationPanelHelper33(popcornElectronPresentationPanelParam205.viewport, popcornElectronPresentationPanelParam205.frame, popcornElectronPresentationPanelParam205.viewportInsets);
  return popcornElectronPresentationPanelHelper31(popcornElectronPresentationPanelParam205.camera.k / Math.max(popcornElectronPresentationPanelValue591, 2.220446049250313e-16), popcornElectronPresentationPanelValue591);
}
function popcornElectronPresentationPanelHelper39(popcornElectronPresentationPanelParam108) {
  let popcornElectronPresentationPanelValue532 = popcornElectronPresentationPanelHelper34({
      viewport: popcornElectronPresentationPanelParam108.viewport,
      frame: popcornElectronPresentationPanelParam108.frame,
      camera: popcornElectronPresentationPanelParam108.camera,
      viewportInsets: popcornElectronPresentationPanelParam108.viewportInsets
    }),
    popcornElectronPresentationPanelValue533 = _popcornElectronSurfaceStyleB(popcornElectronPresentationPanelParam108.camera, popcornElectronPresentationPanelParam108.viewportX, popcornElectronPresentationPanelParam108.viewportY);
  return {
    x: popcornElectronPresentationPanelValue533.x - popcornElectronPresentationPanelValue532.slideOrigin.x,
    y: popcornElectronPresentationPanelValue533.y - popcornElectronPresentationPanelValue532.slideOrigin.y
  };
}
var popcornElectronPresentationPanelValue13 = React.createContext(null);
function popcornElectronPresentationPanelHelper40({
  controller,
  children
}) {
  return React.createElement(popcornElectronPresentationPanelValue13.Provider, {
    value: controller
  }, children);
}
function popcornElectronPresentationPanelHelper41(popcornElectronPresentationPanelParam29, popcornElectronPresentationPanelParam30) {
  return popcornElectronPresentationPanelParam29.presentationVersion === popcornElectronPresentationPanelParam30.presentationVersion && popcornElectronPresentationPanelParam29.selectedSlideIdx === popcornElectronPresentationPanelParam30.selectedSlideIdx && popcornElectronPresentationPanelParam29.slideIds === popcornElectronPresentationPanelParam30.slideIds && popcornElectronPresentationPanelParam29.slideLabels === popcornElectronPresentationPanelParam30.slideLabels && popcornElectronPresentationPanelParam29.slideCount === popcornElectronPresentationPanelParam30.slideCount && popcornElectronPresentationPanelParam29.zoom === popcornElectronPresentationPanelParam30.zoom && popcornElectronPresentationPanelParam29.fitScale === popcornElectronPresentationPanelParam30.fitScale && popcornElectronPresentationPanelParam29.selectedSlideFrame === popcornElectronPresentationPanelParam30.selectedSlideFrame && popcornElectronPresentationPanelParam29.selectedSlideElementTargets === popcornElectronPresentationPanelParam30.selectedSlideElementTargets && popcornElectronPresentationPanelParam29.hyperlinkTargets === popcornElectronPresentationPanelParam30.hyperlinkTargets && popcornElectronPresentationPanelParam29.selectedElementIds === popcornElectronPresentationPanelParam30.selectedElementIds && popcornElectronPresentationPanelParam29.primarySelectedElementId === popcornElectronPresentationPanelParam30.primarySelectedElementId && popcornElectronPresentationPanelParam29.activeInteractionKind === popcornElectronPresentationPanelParam30.activeInteractionKind && popcornElectronPresentationPanelParam29.notesText === popcornElectronPresentationPanelParam30.notesText && popcornElectronPresentationPanelParam29.canUndo === popcornElectronPresentationPanelParam30.canUndo && popcornElectronPresentationPanelParam29.canRedo === popcornElectronPresentationPanelParam30.canRedo && popcornElectronPresentationPanelParam29.slideRect === popcornElectronPresentationPanelParam30.slideRect && popcornElectronPresentationPanelParam29.textLayoutBlocks === popcornElectronPresentationPanelParam30.textLayoutBlocks && popcornElectronPresentationPanelParam29.textEditState === popcornElectronPresentationPanelParam30.textEditState && popcornElectronPresentationPanelParam29.inspector === popcornElectronPresentationPanelParam30.inspector && popcornElectronPresentationPanelParam29.commentThreads === popcornElectronPresentationPanelParam30.commentThreads && popcornElectronPresentationPanelParam29.camera === popcornElectronPresentationPanelParam30.camera;
}
function popcornElectronPresentationPanelHelper42(popcornElectronPresentationPanelParam67, popcornElectronPresentationPanelParam68) {
  return popcornElectronPresentationPanelParam67.presentationVersion === popcornElectronPresentationPanelParam68.presentationVersion && popcornElectronPresentationPanelParam67.selectedSlideIdx === popcornElectronPresentationPanelParam68.selectedSlideIdx && popcornElectronPresentationPanelParam67.slideIds === popcornElectronPresentationPanelParam68.slideIds && popcornElectronPresentationPanelParam67.slideLabels === popcornElectronPresentationPanelParam68.slideLabels && popcornElectronPresentationPanelParam67.slideCount === popcornElectronPresentationPanelParam68.slideCount && popcornElectronPresentationPanelParam67.zoom === popcornElectronPresentationPanelParam68.zoom && popcornElectronPresentationPanelParam67.fitScale === popcornElectronPresentationPanelParam68.fitScale && popcornElectronPresentationPanelParam67.slideRect?.scale === popcornElectronPresentationPanelParam68.slideRect?.scale;
}
function popcornElectronPresentationPanelHelper43(popcornElectronPresentationPanelParam38, popcornElectronPresentationPanelParam39) {
  return popcornElectronPresentationPanelParam38.presentationVersion === popcornElectronPresentationPanelParam39.presentationVersion && popcornElectronPresentationPanelParam38.selectedSlideIdx === popcornElectronPresentationPanelParam39.selectedSlideIdx && popcornElectronPresentationPanelParam38.zoom === popcornElectronPresentationPanelParam39.zoom && popcornElectronPresentationPanelParam38.fitScale === popcornElectronPresentationPanelParam39.fitScale && popcornElectronPresentationPanelParam38.selectedSlideFrame === popcornElectronPresentationPanelParam39.selectedSlideFrame && popcornElectronPresentationPanelParam38.selectedSlideElementTargets === popcornElectronPresentationPanelParam39.selectedSlideElementTargets && popcornElectronPresentationPanelParam38.hyperlinkTargets === popcornElectronPresentationPanelParam39.hyperlinkTargets && popcornElectronPresentationPanelParam38.selectedElementIds === popcornElectronPresentationPanelParam39.selectedElementIds && popcornElectronPresentationPanelParam38.primarySelectedElementId === popcornElectronPresentationPanelParam39.primarySelectedElementId && popcornElectronPresentationPanelParam38.activeInteractionKind === popcornElectronPresentationPanelParam39.activeInteractionKind && popcornElectronPresentationPanelParam38.slideRect === popcornElectronPresentationPanelParam39.slideRect && popcornElectronPresentationPanelParam38.textLayoutBlocks === popcornElectronPresentationPanelParam39.textLayoutBlocks && popcornElectronPresentationPanelParam38.textEditState === popcornElectronPresentationPanelParam39.textEditState && popcornElectronPresentationPanelParam38.inspector === popcornElectronPresentationPanelParam39.inspector && popcornElectronPresentationPanelParam38.commentThreads === popcornElectronPresentationPanelParam39.commentThreads && popcornElectronPresentationPanelParam38.camera === popcornElectronPresentationPanelParam39.camera;
}
function popcornElectronPresentationPanelHelper44(popcornElectronPresentationPanelParam303, popcornElectronPresentationPanelParam304) {
  return popcornElectronPresentationPanelParam303.notesText === popcornElectronPresentationPanelParam304.notesText;
}
function popcornElectronPresentationPanelHelper45(popcornElectronPresentationPanelParam153, popcornElectronPresentationPanelParam154) {
  return popcornElectronPresentationPanelParam153.selectedElementIds === popcornElectronPresentationPanelParam154.selectedElementIds && popcornElectronPresentationPanelParam153.primarySelectedElementId === popcornElectronPresentationPanelParam154.primarySelectedElementId && popcornElectronPresentationPanelParam153.inspector === popcornElectronPresentationPanelParam154.inspector;
}
function popcornElectronPresentationPanelHelper46(popcornElectronPresentationPanelParam101, popcornElectronPresentationPanelParam102) {
  let popcornElectronPresentationPanelValue522 = React.useRef(popcornElectronPresentationPanelParam101.getSnapshot()),
    popcornElectronPresentationPanelValue523 = React.useCallback(() => {
      let popcornElectronPresentationPanelValue594 = popcornElectronPresentationPanelParam101.getSnapshot(),
        popcornElectronPresentationPanelValue595 = popcornElectronPresentationPanelValue522.current;
      return popcornElectronPresentationPanelParam102(popcornElectronPresentationPanelValue595, popcornElectronPresentationPanelValue594) ? popcornElectronPresentationPanelValue595 : (popcornElectronPresentationPanelValue522.current = popcornElectronPresentationPanelValue594, popcornElectronPresentationPanelValue594);
    }, [popcornElectronPresentationPanelParam102, popcornElectronPresentationPanelParam101]);
  return React.useSyncExternalStore(popcornElectronPresentationPanelParam348 => popcornElectronPresentationPanelParam101.subscribe(popcornElectronPresentationPanelParam348), popcornElectronPresentationPanelValue523, popcornElectronPresentationPanelValue523);
}
function popcornElectronPresentationPanelHelper47(popcornElectronPresentationPanelParam324) {
  return popcornElectronPresentationPanelHelper50(popcornElectronPresentationPanelParam324, "shell");
}
function popcornElectronPresentationPanelHelper48(popcornElectronPresentationPanelParam325) {
  return popcornElectronPresentationPanelHelper50(popcornElectronPresentationPanelParam325, "stage");
}
function popcornElectronPresentationPanelHelper49(popcornElectronPresentationPanelParam326) {
  return popcornElectronPresentationPanelHelper50(popcornElectronPresentationPanelParam326, "notes");
}
function popcornElectronPresentationPanelHelper50(popcornElectronPresentationPanelParam320, popcornElectronPresentationPanelParam321) {
  return popcornElectronPresentationPanelHelper46(popcornElectronPresentationPanelParam320, popcornElectronPresentationPanelHelper51(popcornElectronPresentationPanelParam321));
}
function popcornElectronPresentationPanelHelper51(popcornElectronPresentationPanelParam131) {
  switch (popcornElectronPresentationPanelParam131) {
    case "shell":
      return popcornElectronPresentationPanelHelper42;
    case "stage":
      return popcornElectronPresentationPanelHelper43;
    case "notes":
      return popcornElectronPresentationPanelHelper44;
    case "inspector":
      return popcornElectronPresentationPanelHelper45;
    default:
      return popcornElectronPresentationPanelHelper41;
  }
}
function popcornElectronPresentationPanelHelper52({
  notesHeight,
  minHeight = 80,
  setNotesHeight
}) {
  let popcornElectronPresentationPanelValue342 = React.useRef(null),
    popcornElectronPresentationPanelValue343 = React.useRef(notesHeight),
    popcornElectronPresentationPanelValue344 = React.useRef(0),
    popcornElectronPresentationPanelValue345 = event => {
      popcornElectronPresentationPanelValue342.current = event.pointerId;
      popcornElectronPresentationPanelValue343.current = notesHeight;
      popcornElectronPresentationPanelValue344.current = event.clientY;
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {}
    },
    popcornElectronPresentationPanelValue346 = event => {
      if (popcornElectronPresentationPanelValue342.current !== event.pointerId) return;
      let popcornElectronPresentationPanelValue507 = event.clientY - popcornElectronPresentationPanelValue344.current;
      if (popcornElectronPresentationPanelValue343.current === 0) {
        -popcornElectronPresentationPanelValue507 >= 20 && setNotesHeight(Math.max(minHeight, 20));
        return;
      }
      let popcornElectronPresentationPanelValue508 = Math.max(0, popcornElectronPresentationPanelValue343.current - popcornElectronPresentationPanelValue507);
      if (popcornElectronPresentationPanelValue508 < 40) {
        setNotesHeight(0);
        return;
      }
      setNotesHeight(Math.max(minHeight, popcornElectronPresentationPanelValue508));
    },
    popcornElectronPresentationPanelValue347 = event => {
      if (popcornElectronPresentationPanelValue342.current === event.pointerId) {
        if (event.currentTarget.hasPointerCapture?.(event.pointerId)) try {
          event.currentTarget.releasePointerCapture(event.pointerId);
        } catch {}
        popcornElectronPresentationPanelValue342.current = null;
      }
    };
  return <div onPointerDown={popcornElectronPresentationPanelValue345} onPointerMove={popcornElectronPresentationPanelValue346} onPointerUp={popcornElectronPresentationPanelValue347} onPointerCancel={popcornElectronPresentationPanelValue347} className="mx-auto h-2 w-9 cursor-row-resize select-none" data-testid="popcorn-presentation-notes-resize">
      <div className="h-[3px] w-full rounded bg-gray-300" />
    </div>;
}
function popcornElectronPresentationPanelHelper53({
  threads,
  slideRect,
  isEditing,
  onReply,
  onResolve,
  onReopen,
  onDeleteThread,
  onToggleReaction,
  onEditComment,
  onDeleteComment
}) {
  let [popcornElectronPresentationPanelValue228, popcornElectronPresentationPanelValue229] = React.useState(null);
  return React.useEffect(() => {
    popcornElectronPresentationPanelValue228 && (threads.some(item => item.threadId === popcornElectronPresentationPanelValue228) || popcornElectronPresentationPanelValue229(null));
  }, [popcornElectronPresentationPanelValue228, threads]), <>
        {React.useMemo(() => slideRect ? threads.map(item => ({
      thread: item,
      left: slideRect.left + item.markerPoint.x * slideRect.scale,
      top: slideRect.top + item.markerPoint.y * slideRect.scale
    })) : [], [slideRect, threads]).map(({
      thread,
      left,
      top
    }) => {
      let popcornElectronPresentationPanelValue233 = popcornElectronPresentationPanelValue228 === thread.threadId,
        popcornElectronPresentationPanelValue234 = `Slide ${thread.slideIndex + 1}`,
        popcornElectronPresentationPanelValue235 = thread.target.kind === "slide" ? thread.slideLabel : thread.target.elementName ?? thread.slideLabel;
      return React.createElement(_popcornElectronSurfaceStyleH, {
        open: popcornElectronPresentationPanelValue233,
        onOpenChange: popcornElectronPresentationPanelParam296 => {
          popcornElectronPresentationPanelValue229(popcornElectronPresentationPanelParam296 ? thread.threadId : null);
        },
        trigger: <button type="button" data-testid={`popcorn-presentation-thread-trigger-${thread.threadId}`} aria-label={`Open comment thread for ${thread.label}`} className={clsx("pointer-events-auto absolute z-[24] flex h-8 w-8 items-center justify-center rounded-full border border-token-border-light bg-token-bg-primary text-token-text-primary shadow-sm transition-colors", popcornElectronPresentationPanelValue233 ? "border-[var(--color-token-text-link-foreground,#339cff)] text-token-text-link-foreground" : "hover:bg-token-bg-secondary")} style={{
          left,
          top,
          transform: "translate(-50%, -50%)"
        }} onMouseDown={event => {
          event.stopPropagation();
        }} onClick={event => {
          event.stopPropagation();
        }}>
                  {React.createElement(remoteTextEditSessionE, {
            className: "size-4"
          })}
                </button>,
        content: React.createElement(_popcornElectronSurfaceStyleM, {
          targetPrimaryLabel: popcornElectronPresentationPanelValue234,
          targetSecondaryLabel: popcornElectronPresentationPanelValue235,
          status: thread.status,
          resolvedByName: thread.resolvedBy?.displayName ?? null,
          resolvedAt: thread.resolvedAt,
          comments: thread.comments,
          isEditing,
          viewerAuthorId: thread.viewerAuthorId,
          onReply: onReply ? popcornElectronPresentationPanelParam285 => {
            onReply(thread.threadId, popcornElectronPresentationPanelParam285);
          } : undefined,
          onResolve: onResolve ? () => {
            onResolve(thread.threadId);
          } : undefined,
          onReopen: onReopen ? () => {
            onReopen(thread.threadId);
          } : undefined,
          onDeleteThread: onDeleteThread ? () => {
            onDeleteThread(thread.threadId);
          } : undefined,
          onToggleReaction: onToggleReaction ? (popcornElectronPresentationPanelParam274, popcornElectronPresentationPanelParam275) => {
            onToggleReaction(thread.threadId, popcornElectronPresentationPanelParam274, popcornElectronPresentationPanelParam275);
          } : undefined,
          onEditComment: onEditComment ? (popcornElectronPresentationPanelParam276, popcornElectronPresentationPanelParam277) => {
            onEditComment(thread.threadId, popcornElectronPresentationPanelParam276, popcornElectronPresentationPanelParam277);
          } : undefined,
          onDeleteComment: onDeleteComment ? popcornElectronPresentationPanelParam286 => {
            onDeleteComment(thread.threadId, popcornElectronPresentationPanelParam286);
          } : undefined
        })
      });
    })}
      </>;
}
function popcornElectronPresentationPanelHelper54(popcornElectronPresentationPanelParam189) {
  return {
    left: popcornElectronPresentationPanelParam189.left,
    top: popcornElectronPresentationPanelParam189.top,
    width: popcornElectronPresentationPanelParam189.width,
    height: popcornElectronPresentationPanelParam189.height,
    rotation: popcornElectronPresentationPanelParam189.rotation
  };
}
function popcornElectronPresentationPanelHelper55(popcornElectronPresentationPanelParam318) {
  return {
    x: popcornElectronPresentationPanelParam318.x,
    y: popcornElectronPresentationPanelParam318.y
  };
}
function popcornElectronPresentationPanelHelper56(popcornElectronPresentationPanelParam270) {
  return {
    elementId: popcornElectronPresentationPanelParam270.elementId,
    frame: popcornElectronPresentationPanelHelper54(popcornElectronPresentationPanelParam270.frame)
  };
}
function popcornElectronPresentationPanelHelper57(popcornElectronPresentationPanelParam43) {
  let popcornElectronPresentationPanelValue419 = popcornElectronPresentationPanelParam43.selectedElementIds.map(item => popcornElectronPresentationPanelParam43.selectedSlideElementTargets.find(_item => _item.id === item)).filter(item => item != null);
  if (popcornElectronPresentationPanelValue419.length === 0) return null;
  let popcornElectronPresentationPanelValue420 = popcornElectronPresentationPanelValue419[0];
  if (!popcornElectronPresentationPanelValue420) return null;
  let popcornElectronPresentationPanelValue421 = popcornElectronPresentationPanelValue420.frame.left,
    popcornElectronPresentationPanelValue422 = popcornElectronPresentationPanelValue420.frame.top,
    popcornElectronPresentationPanelValue423 = popcornElectronPresentationPanelValue420.frame.left + popcornElectronPresentationPanelValue420.frame.width,
    popcornElectronPresentationPanelValue424 = popcornElectronPresentationPanelValue420.frame.top + popcornElectronPresentationPanelValue420.frame.height;
  for (let popcornElectronPresentationPanelValue562 of popcornElectronPresentationPanelValue419.slice(1)) {
    popcornElectronPresentationPanelValue421 = Math.min(popcornElectronPresentationPanelValue421, popcornElectronPresentationPanelValue562.frame.left);
    popcornElectronPresentationPanelValue422 = Math.min(popcornElectronPresentationPanelValue422, popcornElectronPresentationPanelValue562.frame.top);
    popcornElectronPresentationPanelValue423 = Math.max(popcornElectronPresentationPanelValue423, popcornElectronPresentationPanelValue562.frame.left + popcornElectronPresentationPanelValue562.frame.width);
    popcornElectronPresentationPanelValue424 = Math.max(popcornElectronPresentationPanelValue424, popcornElectronPresentationPanelValue562.frame.top + popcornElectronPresentationPanelValue562.frame.height);
  }
  return {
    left: popcornElectronPresentationPanelValue421,
    top: popcornElectronPresentationPanelValue422,
    width: popcornElectronPresentationPanelValue423 - popcornElectronPresentationPanelValue421,
    height: popcornElectronPresentationPanelValue424 - popcornElectronPresentationPanelValue422
  };
}
function popcornElectronPresentationPanelHelper58(popcornElectronPresentationPanelParam26) {
  let popcornElectronPresentationPanelValue327 = popcornElectronPresentationPanelParam26.snapshot.slideIds[popcornElectronPresentationPanelParam26.snapshot.selectedSlideIdx];
  if (!popcornElectronPresentationPanelValue327) return null;
  let popcornElectronPresentationPanelValue328 = [...(popcornElectronPresentationPanelParam26.elementIds ?? popcornElectronPresentationPanelParam26.snapshot.selectedElementIds)],
    popcornElectronPresentationPanelValue329 = popcornElectronPresentationPanelParam26.primaryElementId ?? popcornElectronPresentationPanelParam26.snapshot.primarySelectedElementId ?? null,
    popcornElectronPresentationPanelValue330 = popcornElectronPresentationPanelParam26.frame ?? popcornElectronPresentationPanelHelper57({
      selectedElementIds: popcornElectronPresentationPanelValue328,
      selectedSlideElementTargets: popcornElectronPresentationPanelParam26.snapshot.selectedSlideElementTargets
    });
  if (!popcornElectronPresentationPanelValue330 || popcornElectronPresentationPanelValue328.length === 0) return null;
  let popcornElectronPresentationPanelValue331 = popcornElectronPresentationPanelValue329 == null ? null : popcornElectronPresentationPanelParam26.snapshot.inspector.slideElements.find(item => item.id === popcornElectronPresentationPanelValue329) ?? null,
    popcornElectronPresentationPanelValue332 = popcornElectronPresentationPanelValue331 == null ? null : popcornElectronPresentationPanelParam26.snapshot.inspector.slideElements.filter(item => item.kind === popcornElectronPresentationPanelValue331.kind).findIndex(item => item.id === popcornElectronPresentationPanelValue331.id) + 1;
  return {
    type: "presentation-element-selection",
    slideId: popcornElectronPresentationPanelValue327,
    slideIndex: popcornElectronPresentationPanelParam26.snapshot.selectedSlideIdx,
    slideLabel: popcornElectronPresentationPanelParam26.snapshot.slideLabels[popcornElectronPresentationPanelParam26.snapshot.selectedSlideIdx] ?? `Slide ${popcornElectronPresentationPanelParam26.snapshot.selectedSlideIdx + 1}`,
    elementIds: popcornElectronPresentationPanelValue328,
    primaryElementId: popcornElectronPresentationPanelValue329,
    primaryElementKind: popcornElectronPresentationPanelValue331?.kind ?? null,
    primaryElementName: popcornElectronPresentationPanelValue331?.name ?? null,
    primaryElementOrdinal: popcornElectronPresentationPanelValue332 != null && popcornElectronPresentationPanelValue332 > 0 ? popcornElectronPresentationPanelValue332 : null,
    frame: popcornElectronPresentationPanelHelper54(popcornElectronPresentationPanelValue330),
    ...(popcornElectronPresentationPanelParam26.anchorPoint == null ? {} : {
      anchorPoint: popcornElectronPresentationPanelHelper55(popcornElectronPresentationPanelParam26.anchorPoint),
      primaryElementOffset: popcornElectronPresentationPanelValue330 == null ? null : {
        x: popcornElectronPresentationPanelParam26.anchorPoint.x - popcornElectronPresentationPanelValue330.left,
        y: popcornElectronPresentationPanelParam26.anchorPoint.y - popcornElectronPresentationPanelValue330.top
      }
    })
  };
}
function popcornElectronPresentationPanelHelper59(popcornElectronPresentationPanelParam47) {
  let popcornElectronPresentationPanelValue456 = popcornElectronPresentationPanelParam47.snapshot.slideIds[popcornElectronPresentationPanelParam47.snapshot.selectedSlideIdx];
  return popcornElectronPresentationPanelValue456 ? {
    type: "presentation-region",
    slideId: popcornElectronPresentationPanelValue456,
    slideIndex: popcornElectronPresentationPanelParam47.snapshot.selectedSlideIdx,
    slideLabel: popcornElectronPresentationPanelParam47.snapshot.slideLabels[popcornElectronPresentationPanelParam47.snapshot.selectedSlideIdx] ?? `Slide ${popcornElectronPresentationPanelParam47.snapshot.selectedSlideIdx + 1}`,
    frame: popcornElectronPresentationPanelHelper54(popcornElectronPresentationPanelParam47.frame),
    anchorPoint: popcornElectronPresentationPanelHelper55(popcornElectronPresentationPanelParam47.anchorPoint),
    containedElements: (popcornElectronPresentationPanelParam47.containedElements ?? []).map(popcornElectronPresentationPanelHelper56)
  } : null;
}
function popcornElectronPresentationPanelHelper60(popcornElectronPresentationPanelParam41) {
  let popcornElectronPresentationPanelValue409 = popcornElectronPresentationPanelParam41.snapshot.slideIds[popcornElectronPresentationPanelParam41.snapshot.selectedSlideIdx];
  return popcornElectronPresentationPanelValue409 ? {
    type: "presentation-drawing-region",
    slideId: popcornElectronPresentationPanelValue409,
    slideIndex: popcornElectronPresentationPanelParam41.snapshot.selectedSlideIdx,
    slideLabel: popcornElectronPresentationPanelParam41.snapshot.slideLabels[popcornElectronPresentationPanelParam41.snapshot.selectedSlideIdx] ?? `Slide ${popcornElectronPresentationPanelParam41.snapshot.selectedSlideIdx + 1}`,
    frame: popcornElectronPresentationPanelHelper54(popcornElectronPresentationPanelParam41.frame),
    viewportBounds: {
      left: popcornElectronPresentationPanelParam41.viewportBounds.left,
      top: popcornElectronPresentationPanelParam41.viewportBounds.top,
      width: popcornElectronPresentationPanelParam41.viewportBounds.width,
      height: popcornElectronPresentationPanelParam41.viewportBounds.height
    },
    containedElements: (popcornElectronPresentationPanelParam41.containedElements ?? []).map(popcornElectronPresentationPanelHelper56)
  } : null;
}
function popcornElectronPresentationPanelHelper61(popcornElectronPresentationPanelParam70) {
  return popcornElectronPresentationPanelParam70.type === "presentation-region" ? popcornElectronPresentationPanelParam70.frame.width === 0 && popcornElectronPresentationPanelParam70.frame.height === 0 ? `${popcornElectronPresentationPanelParam70.slideLabel} · Point` : `${popcornElectronPresentationPanelParam70.slideLabel} · Region` : popcornElectronPresentationPanelParam70.elementIds.length === 1 ? `${popcornElectronPresentationPanelParam70.slideLabel} · ${popcornElectronPresentationPanelParam70.primaryElementId ?? popcornElectronPresentationPanelParam70.elementIds[0]}` : `${popcornElectronPresentationPanelParam70.slideLabel} · ${popcornElectronPresentationPanelParam70.elementIds.length} elements`;
}
function popcornElectronPresentationPanelHelper62(popcornElectronPresentationPanelParam311) {
  return `${popcornElectronPresentationPanelParam311.slideLabel} · Drawing`;
}
function popcornElectronPresentationPanelHelper63(popcornElectronPresentationPanelParam124, popcornElectronPresentationPanelParam125) {
  return popcornElectronPresentationPanelParam125 ? {
    left: popcornElectronPresentationPanelParam125.left + popcornElectronPresentationPanelParam124.frame.left * popcornElectronPresentationPanelParam125.scale,
    top: popcornElectronPresentationPanelParam125.top + popcornElectronPresentationPanelParam124.frame.top * popcornElectronPresentationPanelParam125.scale,
    width: popcornElectronPresentationPanelParam124.frame.width * popcornElectronPresentationPanelParam125.scale,
    height: popcornElectronPresentationPanelParam124.frame.height * popcornElectronPresentationPanelParam125.scale
  } : popcornElectronPresentationPanelHelper54(popcornElectronPresentationPanelParam124.frame);
}
function $t(popcornElectronPresentationPanelParam72, popcornElectronPresentationPanelParam73) {
  let popcornElectronPresentationPanelValue498 = popcornElectronPresentationPanelParam72.type === "presentation-region" ? popcornElectronPresentationPanelParam72.anchorPoint : popcornElectronPresentationPanelParam72.anchorPoint ?? null;
  return popcornElectronPresentationPanelValue498 ? popcornElectronPresentationPanelParam73 ? {
    left: popcornElectronPresentationPanelParam73.left + popcornElectronPresentationPanelValue498.x * popcornElectronPresentationPanelParam73.scale,
    top: popcornElectronPresentationPanelParam73.top + popcornElectronPresentationPanelValue498.y * popcornElectronPresentationPanelParam73.scale,
    width: 0,
    height: 0
  } : {
    left: popcornElectronPresentationPanelValue498.x,
    top: popcornElectronPresentationPanelValue498.y,
    width: 0,
    height: 0
  } : popcornElectronPresentationPanelHelper63(popcornElectronPresentationPanelParam72, popcornElectronPresentationPanelParam73);
}
function popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelParam62, popcornElectronPresentationPanelParam63, popcornElectronPresentationPanelParam64 = 1) {
  let popcornElectronPresentationPanelValue483 = null,
    {
      hitRadius
    } = _popcornElectronSurfaceStyleD(popcornElectronPresentationPanelParam64);
  for (let popcornElectronPresentationPanelValue531 = 0; popcornElectronPresentationPanelValue531 < popcornElectronPresentationPanelParam62.length; popcornElectronPresentationPanelValue531 += 1) {
    let popcornElectronPresentationPanelValue547 = popcornElectronPresentationPanelParam62[popcornElectronPresentationPanelValue531];
    if (!popcornElectronPresentationPanelValue547) continue;
    let popcornElectronPresentationPanelValue548 = popcornElectronPresentationPanelValue547.frame;
    if (!popcornElectronPresentationPanelValue548 || !popcornElectronPresentationPanelHelper70(popcornElectronPresentationPanelValue548, popcornElectronPresentationPanelParam63) && !popcornElectronPresentationPanelHelper72(popcornElectronPresentationPanelValue547, popcornElectronPresentationPanelParam63, hitRadius)) continue;
    let popcornElectronPresentationPanelValue549 = popcornElectronPresentationPanelValue547.zIndex;
    (!popcornElectronPresentationPanelValue483 || popcornElectronPresentationPanelValue549 > popcornElectronPresentationPanelValue483.z || popcornElectronPresentationPanelValue549 === popcornElectronPresentationPanelValue483.z && popcornElectronPresentationPanelValue531 > popcornElectronPresentationPanelValue483.order) && (popcornElectronPresentationPanelValue483 = {
      id: popcornElectronPresentationPanelValue547.id,
      z: popcornElectronPresentationPanelValue549,
      order: popcornElectronPresentationPanelValue531
    });
  }
  return popcornElectronPresentationPanelValue483?.id ?? null;
}
function popcornElectronPresentationPanelHelper65(popcornElectronPresentationPanelParam98, popcornElectronPresentationPanelParam99) {
  let popcornElectronPresentationPanelValue521 = null;
  for (let popcornElectronPresentationPanelValue557 = 0; popcornElectronPresentationPanelValue557 < popcornElectronPresentationPanelParam98.length; popcornElectronPresentationPanelValue557 += 1) {
    let popcornElectronPresentationPanelValue573 = popcornElectronPresentationPanelParam98[popcornElectronPresentationPanelValue557];
    if (!popcornElectronPresentationPanelValue573 || !popcornElectronPresentationPanelHelper70(popcornElectronPresentationPanelValue573.frame, popcornElectronPresentationPanelParam99)) continue;
    let popcornElectronPresentationPanelValue574 = popcornElectronPresentationPanelValue573.zIndex;
    (!popcornElectronPresentationPanelValue521 || popcornElectronPresentationPanelValue574 > popcornElectronPresentationPanelValue521.z || popcornElectronPresentationPanelValue574 === popcornElectronPresentationPanelValue521.z && popcornElectronPresentationPanelValue557 > popcornElectronPresentationPanelValue521.order) && (popcornElectronPresentationPanelValue521 = {
      target: popcornElectronPresentationPanelValue573,
      z: popcornElectronPresentationPanelValue574,
      order: popcornElectronPresentationPanelValue557
    });
  }
  return popcornElectronPresentationPanelValue521?.target ?? null;
}
function popcornElectronPresentationPanelHelper66(popcornElectronPresentationPanelParam48, popcornElectronPresentationPanelParam49, popcornElectronPresentationPanelParam50 = 1) {
  let popcornElectronPresentationPanelValue457 = null,
    {
      hitRadius
    } = _popcornElectronSurfaceStyleD(popcornElectronPresentationPanelParam50);
  for (let popcornElectronPresentationPanelValue479 = 0; popcornElectronPresentationPanelValue479 < popcornElectronPresentationPanelParam48.length; popcornElectronPresentationPanelValue479 += 1) {
    let popcornElectronPresentationPanelValue488 = popcornElectronPresentationPanelParam48[popcornElectronPresentationPanelValue479],
      popcornElectronPresentationPanelValue489 = popcornElectronPresentationPanelValue488?.connector;
    if (!(!popcornElectronPresentationPanelValue488 || !popcornElectronPresentationPanelValue489)) for (let popcornElectronPresentationPanelValue528 of ["from", "to"]) {
      let popcornElectronPresentationPanelValue543 = popcornElectronPresentationPanelValue489[popcornElectronPresentationPanelValue528];
      if (Math.hypot(popcornElectronPresentationPanelParam49.x - popcornElectronPresentationPanelValue543.x, popcornElectronPresentationPanelParam49.y - popcornElectronPresentationPanelValue543.y) > hitRadius) continue;
      let popcornElectronPresentationPanelValue544 = popcornElectronPresentationPanelValue488.zIndex;
      (!popcornElectronPresentationPanelValue457 || popcornElectronPresentationPanelValue544 > popcornElectronPresentationPanelValue457.z || popcornElectronPresentationPanelValue544 === popcornElectronPresentationPanelValue457.z && popcornElectronPresentationPanelValue479 > popcornElectronPresentationPanelValue457.order) && (popcornElectronPresentationPanelValue457 = {
        hit: {
          elementId: popcornElectronPresentationPanelValue488.id,
          endpoint: popcornElectronPresentationPanelValue528
        },
        z: popcornElectronPresentationPanelValue544,
        order: popcornElectronPresentationPanelValue479
      });
    }
  }
  return popcornElectronPresentationPanelValue457?.hit ?? null;
}
function popcornElectronPresentationPanelHelper67(popcornElectronPresentationPanelParam147, popcornElectronPresentationPanelParam148) {
  let popcornElectronPresentationPanelValue569 = Math.min(popcornElectronPresentationPanelParam147.x, popcornElectronPresentationPanelParam148.x),
    popcornElectronPresentationPanelValue570 = Math.min(popcornElectronPresentationPanelParam147.y, popcornElectronPresentationPanelParam148.y),
    popcornElectronPresentationPanelValue571 = Math.max(popcornElectronPresentationPanelParam147.x, popcornElectronPresentationPanelParam148.x),
    popcornElectronPresentationPanelValue572 = Math.max(popcornElectronPresentationPanelParam147.y, popcornElectronPresentationPanelParam148.y);
  return {
    left: popcornElectronPresentationPanelValue569,
    top: popcornElectronPresentationPanelValue570,
    width: popcornElectronPresentationPanelValue571 - popcornElectronPresentationPanelValue569,
    height: popcornElectronPresentationPanelValue572 - popcornElectronPresentationPanelValue570
  };
}
function popcornElectronPresentationPanelHelper68(popcornElectronPresentationPanelParam145, popcornElectronPresentationPanelParam146) {
  return popcornElectronPresentationPanelParam145.filter(item => popcornElectronPresentationPanelHelper71(popcornElectronPresentationPanelParam146, item.frame)).sort((popcornElectronPresentationPanelParam249, popcornElectronPresentationPanelParam250) => popcornElectronPresentationPanelParam249.zIndex === popcornElectronPresentationPanelParam250.zIndex ? popcornElectronPresentationPanelParam145.indexOf(popcornElectronPresentationPanelParam249) - popcornElectronPresentationPanelParam145.indexOf(popcornElectronPresentationPanelParam250) : popcornElectronPresentationPanelParam249.zIndex - popcornElectronPresentationPanelParam250.zIndex).map(item => item.id);
}
function on(popcornElectronPresentationPanelParam298, popcornElectronPresentationPanelParam299, popcornElectronPresentationPanelParam300 = 1) {
  return popcornElectronPresentationPanelParam298 ? _popcornElectronSurfaceStyleL(popcornElectronPresentationPanelParam298, popcornElectronPresentationPanelParam299, popcornElectronPresentationPanelParam300) : null;
}
function popcornElectronPresentationPanelHelper69(popcornElectronPresentationPanelParam305, popcornElectronPresentationPanelParam306, popcornElectronPresentationPanelParam307 = 1) {
  return popcornElectronPresentationPanelParam305 ? _popcornElectronSurfaceStyleU(popcornElectronPresentationPanelParam305, popcornElectronPresentationPanelParam306, popcornElectronPresentationPanelParam307) : false;
}
function popcornElectronPresentationPanelHelper70(popcornElectronPresentationPanelParam335, popcornElectronPresentationPanelParam336) {
  return _popcornElectronSurfaceStyleC(popcornElectronPresentationPanelParam335, popcornElectronPresentationPanelParam336);
}
function popcornElectronPresentationPanelHelper71(popcornElectronPresentationPanelParam329, popcornElectronPresentationPanelParam330) {
  return _popcornElectronSurfaceStyleO(popcornElectronPresentationPanelParam329, popcornElectronPresentationPanelParam330);
}
function popcornElectronPresentationPanelHelper72(popcornElectronPresentationPanelParam246, popcornElectronPresentationPanelParam247, popcornElectronPresentationPanelParam248) {
  let popcornElectronPresentationPanelValue607 = popcornElectronPresentationPanelParam246.connector;
  return popcornElectronPresentationPanelValue607 ? popcornElectronPresentationPanelHelper73(popcornElectronPresentationPanelParam247, popcornElectronPresentationPanelValue607.from, popcornElectronPresentationPanelValue607.to) <= popcornElectronPresentationPanelParam248 : false;
}
function popcornElectronPresentationPanelHelper73(popcornElectronPresentationPanelParam88, popcornElectronPresentationPanelParam89, popcornElectronPresentationPanelParam90) {
  let popcornElectronPresentationPanelValue510 = popcornElectronPresentationPanelParam90.x - popcornElectronPresentationPanelParam89.x,
    popcornElectronPresentationPanelValue511 = popcornElectronPresentationPanelParam90.y - popcornElectronPresentationPanelParam89.y,
    popcornElectronPresentationPanelValue512 = popcornElectronPresentationPanelParam88.x - popcornElectronPresentationPanelParam89.x,
    popcornElectronPresentationPanelValue513 = popcornElectronPresentationPanelParam88.y - popcornElectronPresentationPanelParam89.y,
    popcornElectronPresentationPanelValue514 = popcornElectronPresentationPanelValue510 * popcornElectronPresentationPanelValue510 + popcornElectronPresentationPanelValue511 * popcornElectronPresentationPanelValue511;
  if (popcornElectronPresentationPanelValue514 <= 0) return Math.hypot(popcornElectronPresentationPanelValue512, popcornElectronPresentationPanelValue513);
  let popcornElectronPresentationPanelValue515 = Math.max(0, Math.min(1, (popcornElectronPresentationPanelValue512 * popcornElectronPresentationPanelValue510 + popcornElectronPresentationPanelValue513 * popcornElectronPresentationPanelValue511) / popcornElectronPresentationPanelValue514)),
    popcornElectronPresentationPanelValue516 = popcornElectronPresentationPanelParam89.x + popcornElectronPresentationPanelValue515 * popcornElectronPresentationPanelValue510,
    popcornElectronPresentationPanelValue517 = popcornElectronPresentationPanelParam89.y + popcornElectronPresentationPanelValue515 * popcornElectronPresentationPanelValue511;
  return Math.hypot(popcornElectronPresentationPanelParam88.x - popcornElectronPresentationPanelValue516, popcornElectronPresentationPanelParam88.y - popcornElectronPresentationPanelValue517);
}
var popcornElectronPresentationPanelValue16 = {
    isPanelOpen: () => false,
    openPanel: () => {},
    closePanel: () => {},
    togglePanel: () => {}
  },
  popcornElectronPresentationPanelValue17 = 1,
  popcornElectronPresentationPanelValue20 = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
function _n({
  controller,
  runtime,
  snapshot,
  stageOverlays = [],
  panelControls = popcornElectronPresentationPanelValue16,
  isEditing = true,
  theme = "web",
  viewportInsets = popcornElectronPresentationPanelValue20,
  annotationMode = false,
  onAnnotationModeChange,
  drawingMode = false,
  onDrawingModeChange,
  drawingCommitToken = 0,
  reviewTools,
  onHyperlinkClick,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  commentThreadsEnabled = true,
  annotationPortalContainerElement = null
}) {
  let popcornElectronPresentationPanelValue42 = popcornElectronPresentationPanelHelper48(controller),
    popcornElectronPresentationPanelValue43 = snapshot ?? popcornElectronPresentationPanelValue42,
    popcornElectronPresentationPanelValue44 = React.useRef(null),
    popcornElectronPresentationPanelValue45 = React.useRef(null),
    popcornElectronPresentationPanelValue46 = React.useRef(null),
    popcornElectronPresentationPanelValue47 = React.useRef(null),
    popcornElectronPresentationPanelValue48 = React.useRef(null),
    popcornElectronPresentationPanelValue49 = React.useRef(null),
    popcornElectronPresentationPanelValue50 = React.useRef(null),
    popcornElectronPresentationPanelValue51 = React.useRef(null),
    popcornElectronPresentationPanelValue52 = React.useRef(null),
    popcornElectronPresentationPanelValue53 = React.useRef(null),
    popcornElectronPresentationPanelValue54 = React.useRef(false),
    popcornElectronPresentationPanelValue55 = React.useRef(null),
    _e = React.useRef(null),
    [popcornElectronPresentationPanelValue56, popcornElectronPresentationPanelValue57] = React.useState(0),
    [popcornElectronPresentationPanelValue58, popcornElectronPresentationPanelValue59] = React.useState(false),
    popcornElectronPresentationPanelValue60 = annotationsEnabled && reviewTools?.annotation != null && reviewTools.annotation.enabled !== false,
    popcornElectronPresentationPanelValue61 = drawingAnnotationsEnabled && reviewTools?.drawing != null && reviewTools.drawing.enabled !== false,
    [popcornElectronPresentationPanelValue62, popcornElectronPresentationPanelValue63] = React.useState(null),
    [popcornElectronPresentationPanelValue64, popcornElectronPresentationPanelValue65] = React.useState(null),
    popcornElectronPresentationPanelValue66 = React.useRef(popcornElectronPresentationPanelValue62);
  popcornElectronPresentationPanelValue66.current = popcornElectronPresentationPanelValue62;
  let popcornElectronPresentationPanelValue67 = React.useRef(null),
    popcornElectronPresentationPanelValue68 = React.useRef(false),
    [popcornElectronPresentationPanelValue69, popcornElectronPresentationPanelValue70] = React.useState(false),
    popcornElectronPresentationPanelValue71 = React.useRef(null),
    [popcornElectronPresentationPanelValue72, popcornElectronPresentationPanelValue73] = React.useState(null),
    [popcornElectronPresentationPanelValue74, popcornElectronPresentationPanelValue75] = React.useState(null),
    popcornElectronPresentationPanelValue76 = React.useRef(null);
  popcornElectronPresentationPanelValue76.current = popcornElectronPresentationPanelValue74;
  let [popcornElectronPresentationPanelValue77, popcornElectronPresentationPanelValue78] = React.useState([]),
    popcornElectronPresentationPanelValue79 = React.useRef([]);
  popcornElectronPresentationPanelValue79.current = popcornElectronPresentationPanelValue77;
  let popcornElectronPresentationPanelValue80 = React.useRef(null),
    popcornElectronPresentationPanelValue81 = React.useRef(null),
    popcornElectronPresentationPanelValue82 = React.useRef(drawingCommitToken),
    popcornElectronPresentationPanelValue83 = React.useCallback(popcornElectronPresentationPanelParam201 => {
      popcornElectronPresentationPanelValue65(popcornElectronPresentationPanelParam342 => popcornElectronPresentationPanelParam342 === popcornElectronPresentationPanelParam201 ? null : popcornElectronPresentationPanelParam342);
      popcornElectronPresentationPanelValue63(popcornElectronPresentationPanelParam297 => popcornElectronPresentationPanelParam297?.mode === "edit" && popcornElectronPresentationPanelParam297.annotationId === popcornElectronPresentationPanelParam201 ? null : popcornElectronPresentationPanelParam297);
    }, []),
    popcornElectronPresentationPanelValue84 = React.useCallback(() => {
      popcornElectronPresentationPanelValue65(null);
      popcornElectronPresentationPanelValue63(null);
    }, []),
    popcornElectronPresentationPanelValue85 = React.useCallback(popcornElectronPresentationPanelParam294 => {
      popcornElectronPresentationPanelValue83(popcornElectronPresentationPanelParam294);
      reviewTools?.annotation?.onDismiss?.(popcornElectronPresentationPanelParam294);
    }, [popcornElectronPresentationPanelValue83, reviewTools?.annotation]),
    popcornElectronPresentationPanelValue86 = React.useCallback(popcornElectronPresentationPanelParam195 => {
      popcornElectronPresentationPanelValue75(popcornElectronPresentationPanelParam224 => {
        let popcornElectronPresentationPanelValue601 = typeof popcornElectronPresentationPanelParam195 == "function" ? popcornElectronPresentationPanelParam195(popcornElectronPresentationPanelParam224) : popcornElectronPresentationPanelParam195;
        return popcornElectronPresentationPanelValue76.current = popcornElectronPresentationPanelValue601, popcornElectronPresentationPanelValue601;
      });
    }, []),
    popcornElectronPresentationPanelValue87 = React.useSyncExternalStore(popcornElectronPresentationPanelParam338 => runtime.subscribeToCameraChanges(popcornElectronPresentationPanelParam338), () => runtime.getCamera(), () => runtime.getCamera()),
    popcornElectronPresentationPanelValue88 = React.useSyncExternalStore(popcornElectronPresentationPanelParam339 => runtime.subscribeToLayoutChanges(popcornElectronPresentationPanelParam339), () => runtime.getLayoutSnapshot(), () => runtime.getLayoutSnapshot()),
    popcornElectronPresentationPanelValue89 = popcornElectronPresentationPanelValue88.viewportInsets,
    popcornElectronPresentationPanelValue90 = popcornElectronPresentationPanelHelper79(popcornElectronPresentationPanelValue88.width, popcornElectronPresentationPanelValue88.height, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43.selectedSlideFrame, popcornElectronPresentationPanelValue89) ?? popcornElectronPresentationPanelValue43.slideRect,
    popcornElectronPresentationPanelValue91 = popcornElectronPresentationPanelValue90 === popcornElectronPresentationPanelValue43.slideRect ? popcornElectronPresentationPanelValue43 : {
      ...popcornElectronPresentationPanelValue43,
      slideRect: popcornElectronPresentationPanelValue90
    },
    popcornElectronPresentationPanelValue92 = popcornElectronPresentationPanelValue43.slideIds[popcornElectronPresentationPanelValue43.selectedSlideIdx] ?? `slide-${popcornElectronPresentationPanelValue43.selectedSlideIdx}`,
    popcornElectronPresentationPanelValue93 = popcornElectronPresentationPanelValue43.slideLabels[popcornElectronPresentationPanelValue43.selectedSlideIdx] ?? `Slide ${popcornElectronPresentationPanelValue43.selectedSlideIdx + 1}`,
    popcornElectronPresentationPanelValue94 = React.useMemo(() => popcornElectronPresentationPanelHelper80(popcornElectronPresentationPanelValue91), [popcornElectronPresentationPanelValue91]),
    popcornElectronPresentationPanelValue95 = React.useMemo(() => popcornElectronPresentationPanelHelper58({
      snapshot: popcornElectronPresentationPanelValue43
    }), [popcornElectronPresentationPanelValue43]),
    popcornElectronPresentationPanelValue96 = React.useMemo(() => {
      let popcornElectronPresentationPanelValue583 = popcornElectronPresentationPanelValue91.slideRect;
      return popcornElectronPresentationPanelValue583 ? {
        left: popcornElectronPresentationPanelValue583.left,
        top: popcornElectronPresentationPanelValue583.top,
        width: popcornElectronPresentationPanelValue583.width,
        height: popcornElectronPresentationPanelValue583.height
      } : null;
    }, [popcornElectronPresentationPanelValue91.slideRect]),
    $e = React.useMemo(() => popcornElectronPresentationPanelValue62?.target ? popcornElectronPresentationPanelHelper63(popcornElectronPresentationPanelValue62.target, popcornElectronPresentationPanelValue91.slideRect) : null, [popcornElectronPresentationPanelValue62?.target, popcornElectronPresentationPanelValue91.slideRect]),
    popcornElectronPresentationPanelValue97 = React.useMemo(() => popcornElectronPresentationPanelValue62?.target ? $t(popcornElectronPresentationPanelValue62.target, popcornElectronPresentationPanelValue91.slideRect) : null, [popcornElectronPresentationPanelValue62?.target, popcornElectronPresentationPanelValue91.slideRect]),
    popcornElectronPresentationPanelValue98 = $e ?? popcornElectronPresentationPanelValue97,
    popcornElectronPresentationPanelValue99 = React.useMemo(() => !popcornElectronPresentationPanelValue60 || !popcornElectronPresentationPanelValue72 ? null : popcornElectronPresentationPanelHelper67(popcornElectronPresentationPanelValue72.start, popcornElectronPresentationPanelValue72.current), [popcornElectronPresentationPanelValue60, popcornElectronPresentationPanelValue72]),
    popcornElectronPresentationPanelValue100 = React.useMemo(() => {
      if (!popcornElectronPresentationPanelValue99 || !popcornElectronPresentationPanelValue72) return null;
      let popcornElectronPresentationPanelValue580 = popcornElectronPresentationPanelHelper59({
        snapshot: popcornElectronPresentationPanelValue43,
        frame: popcornElectronPresentationPanelValue99,
        anchorPoint: popcornElectronPresentationPanelValue72.current
      });
      return popcornElectronPresentationPanelValue580 ? popcornElectronPresentationPanelHelper63(popcornElectronPresentationPanelValue580, popcornElectronPresentationPanelValue91.slideRect) : null;
    }, [popcornElectronPresentationPanelValue72, popcornElectronPresentationPanelValue99, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue91.slideRect]),
    popcornElectronPresentationPanelValue101 = React.useMemo(() => popcornElectronPresentationPanelValue99 ? popcornElectronPresentationPanelHelper68(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue99).flatMap(item => {
      let popcornElectronPresentationPanelValue442 = popcornElectronPresentationPanelValue43.selectedSlideElementTargets.find(_item => _item.id === item);
      return popcornElectronPresentationPanelValue442 ? [{
        elementId: item,
        frame: {
          left: popcornElectronPresentationPanelValue442.frame.left,
          top: popcornElectronPresentationPanelValue442.frame.top,
          width: popcornElectronPresentationPanelValue442.frame.width,
          height: popcornElectronPresentationPanelValue442.frame.height,
          rotation: popcornElectronPresentationPanelValue442.frame.rotation
        }
      }] : [];
    }) : [], [popcornElectronPresentationPanelValue99, popcornElectronPresentationPanelValue43.selectedSlideElementTargets]),
    popcornElectronPresentationPanelValue102 = React.useMemo(() => popcornElectronPresentationPanelValue62?.target.type === "presentation-region" ? popcornElectronPresentationPanelValue62.target.containedElements : [], [popcornElectronPresentationPanelValue62]),
    at = React.useMemo(() => popcornElectronPresentationPanelValue69 && popcornElectronPresentationPanelValue43.hoveredElementId ? popcornElectronPresentationPanelValue43.selectedSlideElementTargets.find(item => item.id === popcornElectronPresentationPanelValue43.hoveredElementId) ?? null : null, [popcornElectronPresentationPanelValue69, popcornElectronPresentationPanelValue43.hoveredElementId, popcornElectronPresentationPanelValue43.selectedSlideElementTargets]),
    popcornElectronPresentationPanelValue103 = React.useMemo(() => popcornElectronPresentationPanelValue100 || $e || (!popcornElectronPresentationPanelValue60 || !annotationMode ? null : at ? popcornElectronPresentationPanelHelper63({
      type: "presentation-element-selection",
      slideId: popcornElectronPresentationPanelValue92,
      slideIndex: popcornElectronPresentationPanelValue43.selectedSlideIdx,
      slideLabel: popcornElectronPresentationPanelValue93,
      elementIds: [at.id],
      primaryElementId: at.id,
      frame: at.frame
    }, popcornElectronPresentationPanelValue91.slideRect) : null), [$e, popcornElectronPresentationPanelValue60, at, annotationMode, popcornElectronPresentationPanelValue100, popcornElectronPresentationPanelValue92, popcornElectronPresentationPanelValue93, popcornElectronPresentationPanelValue43.selectedSlideIdx, popcornElectronPresentationPanelValue91.slideRect]),
    {
      annotations,
      addPendingAnnotation,
      updatePendingAnnotation,
      dismissAnnotation
    } = popcornElectronSurfaceStyleD(reviewTools?.annotation?.handleRef, {
      onDismissAnnotation: popcornElectronPresentationPanelValue85,
      onDismissAllAnnotations: popcornElectronPresentationPanelValue84
    }),
    popcornElectronPresentationPanelValue104 = React.useMemo(() => annotations.filter(item => item.target.slideId === popcornElectronPresentationPanelValue92), [popcornElectronPresentationPanelValue92, annotations]),
    popcornElectronPresentationPanelValue105 = React.useMemo(() => popcornElectronPresentationPanelValue104.map(item => ({
      annotation: item,
      bounds: popcornElectronPresentationPanelHelper63(item.target, popcornElectronPresentationPanelValue91.slideRect)
    })), [popcornElectronPresentationPanelValue104, popcornElectronPresentationPanelValue91.slideRect]),
    popcornElectronPresentationPanelValue106 = React.useMemo(() => popcornElectronPresentationPanelValue64 == null || popcornElectronPresentationPanelValue62?.mode === "edit" ? null : popcornElectronPresentationPanelValue105.find(({
      annotation
    }) => annotation.annotationId === popcornElectronPresentationPanelValue64) ?? null, [popcornElectronPresentationPanelValue62?.mode, popcornElectronPresentationPanelValue64, popcornElectronPresentationPanelValue105]),
    popcornElectronPresentationPanelValue107 = React.useMemo(() => popcornElectronPresentationPanelValue100 ? popcornElectronPresentationPanelValue101 : popcornElectronPresentationPanelValue102, [popcornElectronPresentationPanelValue102, popcornElectronPresentationPanelValue101, popcornElectronPresentationPanelValue100]),
    {
      drawings,
      addPendingDrawing
    } = popcornElectronSurfaceStyleE(reviewTools?.drawing?.handleRef),
    _t = React.useMemo(() => drawings.filter(item => item.target.slideId === popcornElectronPresentationPanelValue92), [popcornElectronPresentationPanelValue92, drawings]),
    popcornElectronPresentationPanelValue108 = React.useMemo(() => new _remoteTextEditSessionT({
      onPointerDown: (popcornElectronPresentationPanelParam290, popcornElectronPresentationPanelParam291) => {
        controller.textPointerDown(popcornElectronPresentationPanelParam290, popcornElectronPresentationPanelParam291);
      },
      onPointerMove: popcornElectronPresentationPanelParam308 => {
        controller.textPointerMove(popcornElectronPresentationPanelParam308);
      },
      onPointerUp: () => {
        controller.textPointerUp();
      },
      onSelectWordAtPoint: popcornElectronPresentationPanelParam292 => {
        controller.textSelectWordAtPoint(popcornElectronPresentationPanelParam292);
      },
      onSelectParagraphAtPoint: popcornElectronPresentationPanelParam281 => {
        controller.textSelectParagraphAtPoint(popcornElectronPresentationPanelParam281);
      },
      onActivateBlockEnd: popcornElectronPresentationPanelParam295 => {
        controller.textActivateBlockEnd(popcornElectronPresentationPanelParam295);
      },
      onClear: () => {
        controller.textClear();
      },
      onKeyDown: popcornElectronPresentationPanelParam301 => {
        controller.textHandleKeyDown(popcornElectronPresentationPanelParam301);
      },
      onBeforeInput: popcornElectronPresentationPanelParam293 => {
        controller.textHandleBeforeInput(popcornElectronPresentationPanelParam293);
      },
      onInput: popcornElectronPresentationPanelParam309 => {
        controller.textHandleInput(popcornElectronPresentationPanelParam309);
      },
      onCompositionEnd: popcornElectronPresentationPanelParam282 => {
        controller.textHandleCompositionEnd(popcornElectronPresentationPanelParam282);
      }
    }, {
      onChange: () => {
        popcornElectronPresentationPanelValue57(popcornElectronPresentationPanelParam356 => popcornElectronPresentationPanelParam356 + 1);
      },
      onUnhandledKeyDown: event => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
          event.shiftKey ? controller.redo() : controller.undo();
          event.preventDefault();
          return;
        }
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y" && (controller.redo(), event.preventDefault());
      }
    }), [controller]);
  React.useEffect(() => (runtime.setOnCameraSettled(({
    zoom
  }) => {
    controller.setZoom(zoom);
  }), () => {
    runtime.setOnCameraSettled(null);
  }), [controller, runtime]);
  React.useEffect(() => {
    runtime.attachHost(popcornElectronPresentationPanelValue45.current);
    let popcornElectronPresentationPanelValue466 = popcornElectronPresentationPanelValue45.current && popcornElectronPresentationPanelValue46.current ? controller.attachViewport({
      host: popcornElectronPresentationPanelValue45.current,
      canvas: popcornElectronPresentationPanelValue46.current,
      overlayCanvas: popcornElectronPresentationPanelValue47.current
    }) : undefined;
    return popcornElectronPresentationPanelValue108?.attachContainer(popcornElectronPresentationPanelValue45.current), runtime.start(), () => {
      popcornElectronPresentationPanelValue466?.();
      runtime.dispose();
      popcornElectronPresentationPanelValue108?.dispose();
    };
  }, [controller, runtime, popcornElectronPresentationPanelValue108]);
  React.useEffect(() => () => {
    popcornElectronPresentationPanelValue55.current != null && window.cancelAnimationFrame(popcornElectronPresentationPanelValue55.current);
    controller.clearLocalAwarenessCursor();
  }, [controller]);
  React.useEffect(() => {
    runtime.setViewState({
      selectedSlideIdx: popcornElectronPresentationPanelValue43.selectedSlideIdx,
      selectedSlideFrame: popcornElectronPresentationPanelValue43.selectedSlideFrame,
      zoom: popcornElectronPresentationPanelValue43.zoom,
      camera: controller.getViewportCamera()
    });
  }, [controller, runtime, popcornElectronPresentationPanelValue43.selectedSlideIdx, popcornElectronPresentationPanelValue43.selectedSlideFrame, popcornElectronPresentationPanelValue43.zoom]);
  React.useEffect(() => {
    runtime.setViewportInsets(viewportInsets);
    typeof controller.setViewportInsets == "function" && controller.setViewportInsets(viewportInsets);
  }, [controller, runtime, viewportInsets]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue94 || popcornElectronPresentationPanelValue59(false);
  }, [popcornElectronPresentationPanelValue94]);
  React.useEffect(() => {
    if (popcornElectronPresentationPanelValue43.textEditState?.activeBlockId) {
      popcornElectronPresentationPanelValue51.current = null;
      return;
    }
    (popcornElectronPresentationPanelValue43.selectedElementIds.length !== 1 || !popcornElectronPresentationPanelValue43.primarySelectedElementId || !popcornElectronPresentationPanelValue43.textLayoutBlocks.some(item => item.id === popcornElectronPresentationPanelValue43.primarySelectedElementId)) && (popcornElectronPresentationPanelValue51.current = null);
  }, [popcornElectronPresentationPanelValue43.primarySelectedElementId, popcornElectronPresentationPanelValue43.selectedElementIds, popcornElectronPresentationPanelValue43.textEditState, popcornElectronPresentationPanelValue43.textLayoutBlocks]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue43.selectedSlideFrame && runtime.hasInitializedCamera() && controller.setViewportCamera(popcornElectronPresentationPanelValue87);
  }, [popcornElectronPresentationPanelValue87, controller, runtime, popcornElectronPresentationPanelValue43.selectedSlideFrame]);
  React.useEffect(() => {
    let popcornElectronPresentationPanelValue565 = popcornElectronPresentationPanelValue45.current;
    !popcornElectronPresentationPanelValue43.selectedSlideFrame || !popcornElectronPresentationPanelValue565 || popcornElectronPresentationPanelValue108.updateState({
      state: isEditing ? popcornElectronPresentationPanelValue43.textEditState : null,
      blocks: popcornElectronPresentationPanelValue43.textLayoutBlocks
    });
  }, [isEditing, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43.selectedSlideFrame, popcornElectronPresentationPanelValue43.textEditState, popcornElectronPresentationPanelValue43.textLayoutBlocks, popcornElectronPresentationPanelValue108]);
  React.useEffect(() => {
    typeof controller.setEditingEnabled == "function" && controller.setEditingEnabled(isEditing);
  }, [controller, isEditing]);
  React.useEffect(() => {
    let popcornElectronPresentationPanelValue366 = popcornElectronPresentationPanelValue44.current;
    if (!popcornElectronPresentationPanelValue366) return;
    let popcornElectronPresentationPanelValue367 = null,
      popcornElectronPresentationPanelValue368 = [],
      popcornElectronPresentationPanelValue369 = () => {
        popcornElectronPresentationPanelValue367 ??= window.requestAnimationFrame(() => {
          popcornElectronPresentationPanelValue367 = null;
          controller.setStageBackgroundColor(popcornElectronPresentationPanelHelper74(popcornElectronPresentationPanelValue366, theme));
        });
      };
    if (popcornElectronPresentationPanelValue369(), typeof MutationObserver < "u") {
      let popcornElectronPresentationPanelValue460 = popcornElectronPresentationPanelParam104 => {
        if (!popcornElectronPresentationPanelParam104) return;
        let popcornElectronPresentationPanelValue529 = new MutationObserver(() => {
          popcornElectronPresentationPanelValue369();
        });
        popcornElectronPresentationPanelValue529.observe(popcornElectronPresentationPanelParam104, {
          attributes: true,
          attributeFilter: ["class", "data-theme", "style"]
        });
        popcornElectronPresentationPanelValue368.push(popcornElectronPresentationPanelValue529);
      };
      popcornElectronPresentationPanelValue460(popcornElectronPresentationPanelValue366);
      popcornElectronPresentationPanelValue460(popcornElectronPresentationPanelValue366.closest("[data-codex-window-type='electron']"));
      popcornElectronPresentationPanelValue460(document.documentElement);
      popcornElectronPresentationPanelValue460(document.body);
    }
    return () => {
      popcornElectronPresentationPanelValue367 != null && window.cancelAnimationFrame(popcornElectronPresentationPanelValue367);
      popcornElectronPresentationPanelValue368.forEach(item => item.disconnect());
    };
  }, [controller, theme]);
  React.useEffect(() => {
    isEditing || (popcornElectronPresentationPanelValue108.clear(), popcornElectronPresentationPanelValue51.current = null, popcornElectronPresentationPanelValue50.current = null, popcornElectronPresentationPanelValue52.current = null, popcornElectronPresentationPanelValue53.current = null, popcornElectronPresentationPanelValue54.current = false);
  }, [isEditing, popcornElectronPresentationPanelValue108]);
  let popcornElectronPresentationPanelValue109 = React.useCallback(() => {
      try {
        popcornElectronPresentationPanelValue45.current?.focus({
          preventScroll: true
        });
      } catch {}
    }, []),
    popcornElectronPresentationPanelValue110 = React.useCallback(() => {
      popcornElectronPresentationPanelValue81.current?.();
      popcornElectronPresentationPanelValue81.current = null;
      popcornElectronPresentationPanelValue86(null);
    }, [popcornElectronPresentationPanelValue86]),
    popcornElectronPresentationPanelValue111 = React.useCallback(() => {
      popcornElectronPresentationPanelValue80.current = null;
      popcornElectronPresentationPanelValue79.current = [];
      popcornElectronPresentationPanelValue78([]);
    }, []),
    popcornElectronPresentationPanelValue112 = React.useCallback(() => {
      popcornElectronPresentationPanelValue68.current = false;
      popcornElectronPresentationPanelValue63(null);
      popcornElectronPresentationPanelValue73(null);
      popcornElectronPresentationPanelValue109();
    }, [popcornElectronPresentationPanelValue109]),
    popcornElectronPresentationPanelValue113 = React.useCallback(() => {
      let popcornElectronPresentationPanelValue558 = popcornElectronPresentationPanelValue66.current;
      return popcornElectronPresentationPanelValue558?.mode === "create" && popcornElectronPresentationPanelValue558.body.trim().length > 0 ? popcornElectronPresentationPanelValue68.current ? (popcornElectronPresentationPanelValue112(), true) : (popcornElectronPresentationPanelValue68.current = true, popcornElectronSurfaceStyleA(popcornElectronPresentationPanelValue67.current), false) : (popcornElectronPresentationPanelValue112(), true);
    }, [popcornElectronPresentationPanelValue112]),
    $ = React.useCallback(popcornElectronPresentationPanelParam175 => {
      let popcornElectronPresentationPanelValue581 = popcornElectronPresentationPanelValue91.slideRect;
      return popcornElectronPresentationPanelValue581 ? {
        x: popcornElectronPresentationPanelValue581.left + popcornElectronPresentationPanelParam175.x * popcornElectronPresentationPanelValue581.scale,
        y: popcornElectronPresentationPanelValue581.top + popcornElectronPresentationPanelParam175.y * popcornElectronPresentationPanelValue581.scale
      } : {
        x: popcornElectronPresentationPanelParam175.x,
        y: popcornElectronPresentationPanelParam175.y
      };
    }, [popcornElectronPresentationPanelValue91.slideRect]),
    popcornElectronPresentationPanelValue114 = React.useCallback(popcornElectronPresentationPanelParam155 => {
      popcornElectronPresentationPanelParam155 == null || popcornElectronPresentationPanelParam155.points.length === 0 || !popcornElectronPresentationPanelValue61 || !drawingMode || (popcornElectronPresentationPanelValue80.current = popcornElectronPresentationPanelValue92, popcornElectronPresentationPanelValue79.current = [...popcornElectronPresentationPanelValue79.current, popcornElectronPresentationPanelParam155], popcornElectronPresentationPanelValue78(popcornElectronPresentationPanelValue79.current));
    }, [popcornElectronPresentationPanelValue92, popcornElectronPresentationPanelValue61, drawingMode]),
    popcornElectronPresentationPanelValue115 = React.useCallback(popcornElectronPresentationPanelParam7 => {
      if (popcornElectronPresentationPanelParam7.length === 0) return;
      let popcornElectronPresentationPanelValue236 = _popcornElectronSurfaceStyleZ(popcornElectronPresentationPanelParam7),
        popcornElectronPresentationPanelValue237 = _popcornElectronSurfaceStyleZ(popcornElectronPresentationPanelParam7.map(item => ({
          ...item,
          points: item.points.map($)
        }))),
        popcornElectronPresentationPanelValue238 = popcornElectronPresentationPanelValue45.current,
        popcornElectronPresentationPanelValue239 = popcornElectronPresentationPanelValue46.current;
      if (!popcornElectronPresentationPanelValue236 || !popcornElectronPresentationPanelValue237 || !popcornElectronPresentationPanelValue238 || !popcornElectronPresentationPanelValue239 || !popcornElectronPresentationPanelValue91.slideRect) return;
      let popcornElectronPresentationPanelValue240 = {
          width: popcornElectronPresentationPanelValue238.clientWidth,
          height: popcornElectronPresentationPanelValue238.clientHeight
        },
        popcornElectronPresentationPanelValue241 = popcornElectronPresentationPanelParam7.reduce((accumulator, current) => Math.max(accumulator, current.strokeWidth), 0),
        popcornElectronPresentationPanelValue242 = popcornElectronSurfaceStyleL(popcornElectronSurfaceStyleB({
          left: popcornElectronPresentationPanelValue237.left - popcornElectronPresentationPanelValue241 / 2,
          top: popcornElectronPresentationPanelValue237.top - popcornElectronPresentationPanelValue241 / 2,
          width: popcornElectronPresentationPanelValue237.width + popcornElectronPresentationPanelValue241,
          height: popcornElectronPresentationPanelValue237.height + popcornElectronPresentationPanelValue241
        }), popcornElectronPresentationPanelValue240),
        popcornElectronPresentationPanelValue243 = {
          left: popcornElectronPresentationPanelValue236.left,
          top: popcornElectronPresentationPanelValue236.top,
          width: popcornElectronPresentationPanelValue236.width,
          height: popcornElectronPresentationPanelValue236.height
        },
        popcornElectronPresentationPanelValue244 = popcornElectronPresentationPanelHelper60({
          snapshot: popcornElectronPresentationPanelValue43,
          frame: popcornElectronPresentationPanelValue243,
          viewportBounds: popcornElectronPresentationPanelValue242,
          containedElements: popcornElectronPresentationPanelHelper68(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue243).flatMap(item => {
            let popcornElectronPresentationPanelValue433 = popcornElectronPresentationPanelValue43.selectedSlideElementTargets.find(_item => _item.id === item);
            return popcornElectronPresentationPanelValue433 ? [{
              elementId: item,
              frame: {
                left: popcornElectronPresentationPanelValue433.frame.left,
                top: popcornElectronPresentationPanelValue433.frame.top,
                width: popcornElectronPresentationPanelValue433.frame.width,
                height: popcornElectronPresentationPanelValue433.frame.height,
                rotation: popcornElectronPresentationPanelValue433.frame.rotation
              }
            }] : [];
          })
        });
      if (!popcornElectronPresentationPanelValue244) return;
      let popcornElectronPresentationPanelValue245 = popcornElectronSurfaceStyleN("drawing"),
        popcornElectronPresentationPanelValue246 = popcornElectronPresentationPanelHelper62(popcornElectronPresentationPanelValue244);
      addPendingDrawing({
        drawingId: popcornElectronPresentationPanelValue245,
        artifactKind: "presentation",
        label: popcornElectronPresentationPanelValue246,
        target: popcornElectronPresentationPanelValue244,
        strokes: popcornElectronPresentationPanelParam7
      });
      let popcornElectronPresentationPanelValue247 = {
        x: popcornElectronPresentationPanelValue242.left + popcornElectronPresentationPanelValue242.width / 2,
        y: popcornElectronPresentationPanelValue242.top + popcornElectronPresentationPanelValue242.height / 2
      };
      popcornElectronSurfaceStyleI({
        cropRect: popcornElectronPresentationPanelValue242,
        viewportSize: popcornElectronPresentationPanelValue240,
        baseCanvas: popcornElectronPresentationPanelValue239,
        overlayCanvases: [popcornElectronPresentationPanelValue47.current, popcornElectronPresentationPanelValue48.current],
        strokes: popcornElectronPresentationPanelParam7,
        projectPoint: $
      }).then(value => {
        let popcornElectronPresentationPanelValue448 = {
            ...value,
            commentId: popcornElectronPresentationPanelValue245
          },
          popcornElectronPresentationPanelValue449 = {
            drawingId: popcornElectronPresentationPanelValue245,
            artifactKind: "presentation",
            label: popcornElectronPresentationPanelValue246,
            target: popcornElectronPresentationPanelValue244,
            strokes: popcornElectronPresentationPanelParam7,
            screenshot: popcornElectronPresentationPanelValue448,
            browserCompatible: popcornElectronSurfaceStyleR({
              drawingId: popcornElectronPresentationPanelValue245,
              screenshot: popcornElectronPresentationPanelValue448,
              markerViewportPoint: popcornElectronPresentationPanelValue247,
              viewportSize: popcornElectronPresentationPanelValue240
            })
          };
        return reviewTools?.drawing?.onSubmit?.(popcornElectronPresentationPanelValue449);
      }).catch(error => {
        console.error("Failed to capture presentation drawing screenshot", error);
      });
    }, [addPendingDrawing, $, reviewTools?.drawing, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue91.slideRect]),
    popcornElectronPresentationPanelValue116 = event => {
      popcornElectronPresentationPanelValue68.current = false;
      popcornElectronPresentationPanelValue65(event.annotationId);
      popcornElectronPresentationPanelValue63({
        mode: "edit",
        annotationId: event.annotationId,
        target: event.target,
        body: event.body
      });
    },
    popcornElectronPresentationPanelValue117 = (popcornElectronPresentationPanelParam32 = "saved", popcornElectronPresentationPanelParam33 = "button") => {
      if (!popcornElectronPresentationPanelValue62?.target) return;
      let popcornElectronPresentationPanelValue370 = popcornElectronPresentationPanelValue62.body.trim();
      if (popcornElectronPresentationPanelValue370.length === 0) return;
      if (popcornElectronPresentationPanelValue62.mode === "edit") {
        updatePendingAnnotation(popcornElectronPresentationPanelValue62.annotationId, {
          body: popcornElectronPresentationPanelValue370
        });
        reviewTools?.annotation?.onUpdate?.({
          annotationId: popcornElectronPresentationPanelValue62.annotationId,
          artifactKind: "presentation",
          label: popcornElectronPresentationPanelHelper61(popcornElectronPresentationPanelValue62.target),
          body: popcornElectronPresentationPanelValue370,
          target: popcornElectronPresentationPanelValue62.target
        });
        popcornElectronPresentationPanelValue112();
        return;
      }
      let popcornElectronPresentationPanelValue371 = {
        annotationId: popcornElectronSurfaceStyleN("annotation"),
        artifactKind: "presentation",
        label: popcornElectronPresentationPanelHelper61(popcornElectronPresentationPanelValue62.target),
        body: popcornElectronPresentationPanelValue370,
        target: popcornElectronPresentationPanelValue62.target
      };
      addPendingAnnotation(popcornElectronPresentationPanelValue371);
      popcornElectronPresentationPanelParam32 === "direct" ? (reviewTools?.annotation?.onDirectSubmit ?? reviewTools?.annotation?.onSubmit)?.(popcornElectronPresentationPanelValue371) : reviewTools?.annotation?.onSubmit?.(popcornElectronPresentationPanelValue371);
      reviewTools?.annotation?.onSubmitted?.(popcornElectronPresentationPanelValue371, popcornElectronPresentationPanelParam32, popcornElectronPresentationPanelParam33, {
        annotationMode
      });
      popcornElectronPresentationPanelValue112();
    },
    popcornElectronPresentationPanelValue118 = () => {
      popcornElectronPresentationPanelValue62?.mode === "edit" && (dismissAnnotation(popcornElectronPresentationPanelValue62.annotationId), popcornElectronPresentationPanelValue65(popcornElectronPresentationPanelParam331 => popcornElectronPresentationPanelParam331 === popcornElectronPresentationPanelValue62.annotationId ? null : popcornElectronPresentationPanelParam331), popcornElectronPresentationPanelValue112());
    };
  React.useEffect(() => {
    popcornElectronPresentationPanelValue60 || popcornElectronPresentationPanelValue62?.mode !== "edit" && popcornElectronPresentationPanelValue63(null);
    (!popcornElectronPresentationPanelValue60 || !annotationMode) && (popcornElectronPresentationPanelValue73(null), popcornElectronPresentationPanelValue71.current = null);
  }, [popcornElectronPresentationPanelValue60, popcornElectronPresentationPanelValue62?.mode, annotationMode]);
  React.useEffect(() => {
    if (popcornElectronPresentationPanelValue61 && drawingMode) {
      popcornElectronPresentationPanelValue63(null);
      popcornElectronPresentationPanelValue73(null);
      popcornElectronPresentationPanelValue71.current = null;
      popcornElectronPresentationPanelValue70(false);
      controller.setHoveredElementId(null);
      return;
    }
    let popcornElectronPresentationPanelValue537 = drawingCommitToken !== popcornElectronPresentationPanelValue82.current;
    popcornElectronPresentationPanelValue110();
    popcornElectronPresentationPanelValue79.current.length > 0 && !popcornElectronPresentationPanelValue537 && popcornElectronPresentationPanelValue111();
  }, [popcornElectronPresentationPanelValue110, popcornElectronPresentationPanelValue111, controller, drawingCommitToken, popcornElectronPresentationPanelValue61, drawingMode]);
  React.useEffect(() => {
    if (drawingCommitToken === popcornElectronPresentationPanelValue82.current) return;
    popcornElectronPresentationPanelValue82.current = drawingCommitToken;
    let popcornElectronPresentationPanelValue575 = popcornElectronPresentationPanelValue79.current;
    if (popcornElectronPresentationPanelValue575.length === 0) {
      popcornElectronPresentationPanelValue111();
      return;
    }
    popcornElectronPresentationPanelValue115(popcornElectronPresentationPanelValue575);
    popcornElectronPresentationPanelValue111();
  }, [popcornElectronPresentationPanelValue111, drawingCommitToken, popcornElectronPresentationPanelValue115]);
  React.useEffect(() => {
    if (!popcornElectronPresentationPanelValue60 || !annotationMode) {
      popcornElectronPresentationPanelValue70(false);
      controller.setHoveredElementId(null);
      return;
    }
    popcornElectronPresentationPanelValue70(false);
    controller.setHoveredElementId(null);
  }, [popcornElectronPresentationPanelValue60, annotationMode, controller]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue62 && popcornElectronPresentationPanelValue62.target.slideId !== popcornElectronPresentationPanelValue92 && (popcornElectronPresentationPanelValue65(null), popcornElectronPresentationPanelValue73(null), popcornElectronPresentationPanelValue71.current = null, popcornElectronPresentationPanelValue63(null));
  }, [popcornElectronPresentationPanelValue62, popcornElectronPresentationPanelValue92]);
  React.useEffect(() => () => {
    popcornElectronPresentationPanelValue110();
  }, [popcornElectronPresentationPanelValue110]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue80.current == null || popcornElectronPresentationPanelValue80.current === popcornElectronPresentationPanelValue92 || popcornElectronPresentationPanelValue111();
  }, [popcornElectronPresentationPanelValue111, popcornElectronPresentationPanelValue92]);
  React.useEffect(() => {
    let popcornElectronPresentationPanelValue484 = popcornElectronPresentationPanelValue45.current,
      popcornElectronPresentationPanelValue485 = popcornElectronPresentationPanelValue48.current,
      popcornElectronPresentationPanelValue486 = popcornElectronPresentationPanelValue61 && drawingMode ? "crosshair" : popcornElectronPresentationPanelValue60 && annotationMode && !popcornElectronPresentationPanelValue62 ? popcornElectronSurfaceStyleV : "";
    return popcornElectronPresentationPanelValue484 && (popcornElectronPresentationPanelValue484.style.cursor = popcornElectronPresentationPanelValue486), popcornElectronPresentationPanelValue485 && (popcornElectronPresentationPanelValue485.style.cursor = popcornElectronPresentationPanelValue486), () => {
      popcornElectronPresentationPanelValue484 && popcornElectronPresentationPanelValue484.style.cursor === popcornElectronPresentationPanelValue486 && (popcornElectronPresentationPanelValue484.style.cursor = "");
      popcornElectronPresentationPanelValue485 && popcornElectronPresentationPanelValue485.style.cursor === popcornElectronPresentationPanelValue486 && (popcornElectronPresentationPanelValue485.style.cursor = "");
    };
  }, [popcornElectronPresentationPanelValue62, popcornElectronPresentationPanelValue60, annotationMode, popcornElectronPresentationPanelValue61, drawingMode]);
  React.useEffect(() => {
    if (!popcornElectronPresentationPanelValue62) return;
    let popcornElectronPresentationPanelValue458 = event => {
      let popcornElectronPresentationPanelValue530 = event.target;
      popcornElectronPresentationPanelValue530 instanceof Node && (popcornElectronPresentationPanelValue67.current?.contains(popcornElectronPresentationPanelValue530) || popcornElectronPresentationPanelValue530 instanceof HTMLElement && popcornElectronPresentationPanelValue530.closest("[data-popcorn-annotation-marker='true']") || popcornElectronPresentationPanelValue45.current?.contains(popcornElectronPresentationPanelValue530) || popcornElectronPresentationPanelValue113());
    };
    return document.addEventListener("mousedown", popcornElectronPresentationPanelValue458, true), () => {
      document.removeEventListener("mousedown", popcornElectronPresentationPanelValue458, true);
    };
  }, [popcornElectronPresentationPanelValue62, popcornElectronPresentationPanelValue113]);
  React.useEffect(() => {
    let popcornElectronPresentationPanelValue376 = popcornElectronPresentationPanelValue48.current;
    if (!popcornElectronPresentationPanelValue376) return;
    let popcornElectronPresentationPanelValue377 = popcornElectronPresentationPanelValue88.width,
      popcornElectronPresentationPanelValue378 = popcornElectronPresentationPanelValue88.height;
    if (popcornElectronPresentationPanelValue377 <= 0 || popcornElectronPresentationPanelValue378 <= 0) return;
    let popcornElectronPresentationPanelValue379 = window.devicePixelRatio || 1,
      popcornElectronPresentationPanelValue380 = Math.max(1, Math.round(popcornElectronPresentationPanelValue377 * popcornElectronPresentationPanelValue379)),
      popcornElectronPresentationPanelValue381 = Math.max(1, Math.round(popcornElectronPresentationPanelValue378 * popcornElectronPresentationPanelValue379));
    (popcornElectronPresentationPanelValue376.width !== popcornElectronPresentationPanelValue380 || popcornElectronPresentationPanelValue376.height !== popcornElectronPresentationPanelValue381) && (popcornElectronPresentationPanelValue376.width = popcornElectronPresentationPanelValue380, popcornElectronPresentationPanelValue376.height = popcornElectronPresentationPanelValue381);
    let popcornElectronPresentationPanelValue382 = `${popcornElectronPresentationPanelValue377}px`,
      popcornElectronPresentationPanelValue383 = `${popcornElectronPresentationPanelValue378}px`;
    popcornElectronPresentationPanelValue376.style.width !== popcornElectronPresentationPanelValue382 && (popcornElectronPresentationPanelValue376.style.width = popcornElectronPresentationPanelValue382);
    popcornElectronPresentationPanelValue376.style.height !== popcornElectronPresentationPanelValue383 && (popcornElectronPresentationPanelValue376.style.height = popcornElectronPresentationPanelValue383);
    let popcornElectronPresentationPanelValue384 = popcornElectronPresentationPanelValue376.getContext("2d");
    popcornElectronPresentationPanelValue384 && (popcornElectronPresentationPanelValue384.setTransform(popcornElectronPresentationPanelValue379, 0, 0, popcornElectronPresentationPanelValue379, 0, 0), popcornElectronPresentationPanelValue384.clearRect(0, 0, popcornElectronPresentationPanelValue377, popcornElectronPresentationPanelValue378), popcornElectronPresentationPanelValue91.slideRect && popcornElectronPresentationPanelValue43.selectedSlideFrame && (popcornElectronPresentationPanelValue384.save(), popcornElectronPresentationPanelValue384.translate(popcornElectronPresentationPanelValue91.slideRect.left, popcornElectronPresentationPanelValue91.slideRect.top), popcornElectronPresentationPanelValue384.scale(popcornElectronPresentationPanelValue91.slideRect.scale, popcornElectronPresentationPanelValue91.slideRect.scale), popcornElectronPresentationPanelValue108?.drawOverlay(popcornElectronPresentationPanelValue384), popcornElectronPresentationPanelValue384.restore()));
  }, [popcornElectronPresentationPanelValue88.height, popcornElectronPresentationPanelValue88.width, popcornElectronPresentationPanelValue56, popcornElectronPresentationPanelValue91.slideRect, popcornElectronPresentationPanelValue43.selectedSlideFrame, popcornElectronPresentationPanelValue43.textEditState, popcornElectronPresentationPanelValue43.textLayoutBlocks, popcornElectronPresentationPanelValue108]);
  let popcornElectronPresentationPanelValue119 = popcornElectronPresentationPanelParam66 => {
      _e.current = popcornElectronPresentationPanelParam66 ? {
        x: Math.round(popcornElectronPresentationPanelParam66.x),
        y: Math.round(popcornElectronPresentationPanelParam66.y)
      } : null;
      popcornElectronPresentationPanelValue55.current ??= window.requestAnimationFrame(() => {
        popcornElectronPresentationPanelValue55.current = null;
        let popcornElectronPresentationPanelValue564 = _e.current;
        if (popcornElectronPresentationPanelValue564) {
          controller.setLocalAwarenessCursor(popcornElectronPresentationPanelValue564);
          return;
        }
        controller.clearLocalAwarenessCursor();
      });
    },
    popcornElectronPresentationPanelValue120 = event => {
      popcornElectronPresentationPanelValue59(false);
      popcornElectronPresentationPanelValue45.current?.focus();
      let popcornElectronPresentationPanelValue203 = popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89);
      if (popcornElectronPresentationPanelValue119(popcornElectronPresentationPanelValue203), popcornElectronPresentationPanelValue61 && drawingMode) {
        if (!popcornElectronPresentationPanelValue203) return;
        popcornElectronPresentationPanelHelper81(event, popcornElectronPresentationPanelValue49);
        popcornElectronPresentationPanelValue81.current = () => {
          let popcornElectronPresentationPanelValue526 = popcornElectronPresentationPanelValue48.current,
            popcornElectronPresentationPanelValue527 = popcornElectronPresentationPanelValue49.current;
          if (popcornElectronPresentationPanelValue526 && popcornElectronPresentationPanelValue527 != null && popcornElectronPresentationPanelValue526.hasPointerCapture?.(popcornElectronPresentationPanelValue527)) try {
            popcornElectronPresentationPanelValue526.releasePointerCapture(popcornElectronPresentationPanelValue527);
          } catch {}
          popcornElectronPresentationPanelValue49.current === popcornElectronPresentationPanelValue527 && (popcornElectronPresentationPanelValue49.current = null);
        };
        popcornElectronPresentationPanelValue86({
          color: popcornElectronSurfaceStyleF,
          strokeWidth: 3,
          points: [popcornElectronPresentationPanelValue203]
        });
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (popcornElectronPresentationPanelValue60 && !annotationMode && popcornElectronPresentationPanelValue66.current && !popcornElectronPresentationPanelValue113()) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (popcornElectronPresentationPanelValue60 && annotationMode) {
        let popcornElectronPresentationPanelValue372 = popcornElectronPresentationPanelValue66.current,
          popcornElectronPresentationPanelValue373 = popcornElectronPresentationPanelValue372?.mode === "create" ? popcornElectronPresentationPanelValue372.body.trim().length === 0 ? "close" : "keep" : "replace";
        if (popcornElectronPresentationPanelValue372 != null && popcornElectronPresentationPanelValue373 === "replace" && popcornElectronPresentationPanelValue63(null), !popcornElectronPresentationPanelValue203) {
          popcornElectronPresentationPanelValue372 != null && popcornElectronPresentationPanelValue373 !== "replace" && popcornElectronPresentationPanelValue113();
          popcornElectronPresentationPanelValue71.current = null;
          popcornElectronPresentationPanelValue73(null);
          return;
        }
        let popcornElectronPresentationPanelValue374 = popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue203, popcornElectronPresentationPanelValue87.k);
        controller.setHoveredElementId(popcornElectronPresentationPanelValue374);
        let popcornElectronPresentationPanelValue375 = popcornElectronPresentationPanelValue374 == null ? null : popcornElectronPresentationPanelValue43.selectedSlideElementTargets.find(item => item.id === popcornElectronPresentationPanelValue374) ?? null;
        popcornElectronPresentationPanelValue71.current = {
          pointerId: event.pointerId,
          start: popcornElectronPresentationPanelValue203,
          draftClickAction: popcornElectronPresentationPanelValue373,
          clickedElementTarget: popcornElectronPresentationPanelValue375
        };
        popcornElectronPresentationPanelHelper81(event, popcornElectronPresentationPanelValue49);
        popcornElectronPresentationPanelValue73(null);
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (!popcornElectronPresentationPanelValue203) {
        if (popcornElectronPresentationPanelValue108?.isActive()) {
          popcornElectronPresentationPanelValue108.clear();
          popcornElectronPresentationPanelValue51.current = null;
          return;
        }
        controller.clearElementSelection();
        popcornElectronPresentationPanelValue51.current = null;
        return;
      }
      if (!isEditing) {
        let popcornElectronPresentationPanelValue440 = popcornElectronPresentationPanelHelper65(popcornElectronPresentationPanelValue43.hyperlinkTargets, popcornElectronPresentationPanelValue203);
        if (popcornElectronPresentationPanelValue440) {
          let popcornElectronPresentationPanelValue545 = {
            id: popcornElectronPresentationPanelValue440.id,
            url: popcornElectronPresentationPanelValue440.url,
            point: {
              x: popcornElectronPresentationPanelValue203.x,
              y: popcornElectronPresentationPanelValue203.y
            }
          };
          popcornElectronPresentationPanelValue440.action !== undefined && (popcornElectronPresentationPanelValue545.action = popcornElectronPresentationPanelValue440.action);
          onHyperlinkClick?.(popcornElectronPresentationPanelValue545);
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        let popcornElectronPresentationPanelValue441 = popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue203, popcornElectronPresentationPanelValue87.k);
        controller.setSelectedElementId(popcornElectronPresentationPanelValue441);
        popcornElectronPresentationPanelValue51.current = null;
        popcornElectronPresentationPanelValue50.current = null;
        popcornElectronPresentationPanelValue52.current = null;
        popcornElectronPresentationPanelValue53.current = null;
        popcornElectronPresentationPanelValue54.current = false;
        return;
      }
      let popcornElectronPresentationPanelValue204 = popcornElectronPresentationPanelValue108.isActive(),
        popcornElectronPresentationPanelValue205 = !popcornElectronPresentationPanelValue204 && popcornElectronPresentationPanelValue43.selectedElementIds.length === 1 && popcornElectronPresentationPanelValue43.primarySelectedElementId && popcornElectronPresentationPanelValue51.current === popcornElectronPresentationPanelValue43.primarySelectedElementId ? popcornElectronPresentationPanelValue43.primarySelectedElementId : undefined;
      if ((popcornElectronPresentationPanelValue204 || popcornElectronPresentationPanelValue205) && popcornElectronPresentationPanelValue108.tryPointerDown(popcornElectronPresentationPanelValue203, {
        shiftKey: event.shiftKey,
        restrictToBlockId: popcornElectronPresentationPanelValue205
      })) {
        event.preventDefault();
        popcornElectronPresentationPanelValue50.current = "text";
        popcornElectronPresentationPanelValue52.current = null;
        popcornElectronPresentationPanelValue53.current = null;
        popcornElectronPresentationPanelValue54.current = false;
        popcornElectronPresentationPanelValue51.current = null;
        popcornElectronPresentationPanelHelper81(event, popcornElectronPresentationPanelValue49);
        return;
      }
      popcornElectronPresentationPanelValue204 && (popcornElectronPresentationPanelValue108.clear(), popcornElectronPresentationPanelValue51.current = null);
      let popcornElectronPresentationPanelValue206 = popcornElectronPresentationPanelValue43.primarySelectedElementId ? popcornElectronPresentationPanelValue43.selectedSlideElementTargets.find(item => item.id === popcornElectronPresentationPanelValue43.primarySelectedElementId) : null,
        popcornElectronPresentationPanelValue207 = popcornElectronPresentationPanelValue43.selectedElementIds.length === 1 ? popcornElectronPresentationPanelValue206?.frame ?? null : null,
        popcornElectronPresentationPanelValue208 = popcornElectronPresentationPanelValue43.selectedElementIds.length === 1 && popcornElectronPresentationPanelValue206 ? popcornElectronPresentationPanelHelper66([popcornElectronPresentationPanelValue206], popcornElectronPresentationPanelValue203, popcornElectronPresentationPanelValue87.k) : null,
        popcornElectronPresentationPanelValue209 = popcornElectronPresentationPanelValue208 ? null : on(popcornElectronPresentationPanelValue207, popcornElectronPresentationPanelValue203, popcornElectronPresentationPanelValue87.k),
        popcornElectronPresentationPanelValue210 = !popcornElectronPresentationPanelValue208 && !popcornElectronPresentationPanelValue209 && !!popcornElectronPresentationPanelValue206?.canRotate && popcornElectronPresentationPanelHelper69(popcornElectronPresentationPanelValue207, popcornElectronPresentationPanelValue203, popcornElectronPresentationPanelValue87.k),
        popcornElectronPresentationPanelValue211 = popcornElectronPresentationPanelValue208 ? popcornElectronPresentationPanelValue208.endpoint === "from" ? "connector-from" : "connector-to" : popcornElectronPresentationPanelValue209 ? "resize" : popcornElectronPresentationPanelValue210 ? "rotate" : "move",
        popcornElectronPresentationPanelValue212 = popcornElectronPresentationPanelValue208?.elementId ?? (popcornElectronPresentationPanelValue211 === "move" ? popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue203, popcornElectronPresentationPanelValue87.k) : popcornElectronPresentationPanelValue43.primarySelectedElementId);
      if (!popcornElectronPresentationPanelValue212) {
        if (popcornElectronPresentationPanelValue52.current = null, popcornElectronPresentationPanelValue53.current = null, popcornElectronPresentationPanelValue54.current = false, popcornElectronPresentationPanelValue204) return;
        popcornElectronPresentationPanelHelper81(event, popcornElectronPresentationPanelValue49);
        popcornElectronPresentationPanelValue50.current = "marquee";
        popcornElectronPresentationPanelValue51.current = null;
        controller.beginSelectionMarquee({
          point: popcornElectronPresentationPanelValue203,
          additive: event.shiftKey
        });
        return;
      }
      controller.beginElementInteraction({
        elementId: popcornElectronPresentationPanelValue212,
        point: popcornElectronPresentationPanelValue203,
        mode: popcornElectronPresentationPanelValue211,
        corner: popcornElectronPresentationPanelValue209,
        preserveRatio: event.shiftKey,
        altKey: event.altKey,
        ctrlKey: event.ctrlKey
      });
      popcornElectronPresentationPanelHelper81(event, popcornElectronPresentationPanelValue49);
      popcornElectronPresentationPanelValue50.current = "element";
      popcornElectronPresentationPanelValue52.current = popcornElectronPresentationPanelValue212;
      popcornElectronPresentationPanelValue53.current = popcornElectronPresentationPanelValue203;
      popcornElectronPresentationPanelValue54.current = false;
      popcornElectronPresentationPanelValue51.current && popcornElectronPresentationPanelValue51.current !== popcornElectronPresentationPanelValue212 && (popcornElectronPresentationPanelValue51.current = null);
    },
    popcornElectronPresentationPanelValue121 = event => {
      let popcornElectronPresentationPanelValue222 = popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89);
      if (popcornElectronPresentationPanelValue119(popcornElectronPresentationPanelValue222), popcornElectronPresentationPanelValue61 && drawingMode) {
        if (popcornElectronPresentationPanelValue49.current != null && popcornElectronPresentationPanelValue49.current !== event.pointerId) return;
        popcornElectronPresentationPanelValue222 && popcornElectronPresentationPanelValue76.current && popcornElectronPresentationPanelValue86(popcornElectronPresentationPanelParam126 => {
          if (!popcornElectronPresentationPanelParam126) return popcornElectronPresentationPanelParam126;
          let popcornElectronPresentationPanelValue551 = popcornElectronPresentationPanelParam126.points[popcornElectronPresentationPanelParam126.points.length - 1];
          return popcornElectronPresentationPanelValue551 && Math.hypot(popcornElectronPresentationPanelValue222.x - popcornElectronPresentationPanelValue551.x, popcornElectronPresentationPanelValue222.y - popcornElectronPresentationPanelValue551.y) < 0.5 ? popcornElectronPresentationPanelParam126 : {
            ...popcornElectronPresentationPanelParam126,
            points: [...popcornElectronPresentationPanelParam126.points, popcornElectronPresentationPanelValue222]
          };
        });
        event.currentTarget.style.cursor = "crosshair";
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (popcornElectronPresentationPanelValue60 && annotationMode) {
        let popcornElectronPresentationPanelValue399 = popcornElectronPresentationPanelValue71.current;
        if (popcornElectronPresentationPanelValue399 != null && popcornElectronPresentationPanelValue49.current != null && popcornElectronPresentationPanelValue49.current !== event.pointerId) return;
        if (popcornElectronPresentationPanelValue399 != null && popcornElectronPresentationPanelValue222) {
          popcornElectronPresentationPanelValue70(true);
          let popcornElectronPresentationPanelValue525 = Math.hypot(popcornElectronPresentationPanelValue222.x - popcornElectronPresentationPanelValue399.start.x, popcornElectronPresentationPanelValue222.y - popcornElectronPresentationPanelValue399.start.y) >= 6;
          popcornElectronPresentationPanelValue525 && popcornElectronPresentationPanelValue66.current && (popcornElectronPresentationPanelValue68.current = false, popcornElectronPresentationPanelValue63(null));
          popcornElectronPresentationPanelValue73(popcornElectronPresentationPanelValue525 ? {
            start: popcornElectronPresentationPanelValue399.start,
            current: popcornElectronPresentationPanelValue222
          } : null);
          event.preventDefault();
          event.stopPropagation();
        }
        if (!popcornElectronPresentationPanelValue222) {
          controller.setHoveredElementId(null);
          event.currentTarget.style.cursor = "";
          return;
        }
        popcornElectronPresentationPanelValue70(true);
        let popcornElectronPresentationPanelValue400 = popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue222, popcornElectronPresentationPanelValue87.k);
        controller.setHoveredElementId(popcornElectronPresentationPanelValue400);
        event.currentTarget.style.cursor = popcornElectronPresentationPanelValue66.current ? "" : popcornElectronSurfaceStyleV;
        return;
      }
      if (popcornElectronPresentationPanelValue50.current === "text") {
        popcornElectronPresentationPanelValue222 && popcornElectronPresentationPanelValue108.pointerMove(popcornElectronPresentationPanelValue222);
        return;
      }
      if (popcornElectronPresentationPanelValue50.current === "marquee") {
        popcornElectronPresentationPanelValue222 && controller.updateSelectionMarquee({
          nextPoint: popcornElectronPresentationPanelValue222
        });
        return;
      }
      if (popcornElectronPresentationPanelValue50.current === "element" && popcornElectronPresentationPanelValue222) {
        popcornElectronPresentationPanelValue53.current && Math.hypot(popcornElectronPresentationPanelValue222.x - popcornElectronPresentationPanelValue53.current.x, popcornElectronPresentationPanelValue222.y - popcornElectronPresentationPanelValue53.current.y) > 3 && (popcornElectronPresentationPanelValue54.current = true);
        controller.updateElementInteraction({
          nextPoint: popcornElectronPresentationPanelValue222,
          shiftKey: event.shiftKey,
          altKey: event.altKey,
          ctrlKey: event.ctrlKey
        });
        return;
      }
      if (!isEditing) {
        if (popcornElectronPresentationPanelValue222 && popcornElectronPresentationPanelHelper65(popcornElectronPresentationPanelValue43.hyperlinkTargets, popcornElectronPresentationPanelValue222)) {
          controller.setHoveredElementId(null);
          event.currentTarget.style.cursor = "pointer";
          return;
        }
        let popcornElectronPresentationPanelValue493 = popcornElectronPresentationPanelValue222 ? popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue222, popcornElectronPresentationPanelValue87.k) : null;
        controller.setHoveredElementId(popcornElectronPresentationPanelValue493);
        event.currentTarget.style.cursor = "";
        return;
      }
      if (!popcornElectronPresentationPanelValue222) {
        controller.setHoveredElementId(null);
        event.currentTarget.style.cursor = "";
        return;
      }
      let popcornElectronPresentationPanelValue223 = popcornElectronPresentationPanelValue43.primarySelectedElementId ? popcornElectronPresentationPanelValue43.selectedSlideElementTargets.find(item => item.id === popcornElectronPresentationPanelValue43.primarySelectedElementId) : null,
        popcornElectronPresentationPanelValue224 = popcornElectronPresentationPanelValue43.selectedElementIds.length === 1 ? popcornElectronPresentationPanelValue223?.frame ?? null : null,
        popcornElectronPresentationPanelValue225 = popcornElectronPresentationPanelValue43.selectedElementIds.length === 1 && popcornElectronPresentationPanelValue223 ? popcornElectronPresentationPanelHelper66([popcornElectronPresentationPanelValue223], popcornElectronPresentationPanelValue222, popcornElectronPresentationPanelValue87.k) : null;
      if (popcornElectronPresentationPanelValue225) {
        controller.setHoveredElementId(popcornElectronPresentationPanelValue225.elementId);
        event.currentTarget.style.cursor = "crosshair";
        return;
      }
      let popcornElectronPresentationPanelValue226 = on(popcornElectronPresentationPanelValue224, popcornElectronPresentationPanelValue222, popcornElectronPresentationPanelValue87.k);
      if (popcornElectronPresentationPanelValue226) {
        controller.setHoveredElementId(popcornElectronPresentationPanelValue43.primarySelectedElementId);
        event.currentTarget.style.cursor = _popcornElectronSurfaceStyleF(popcornElectronPresentationPanelValue226) ?? "";
        return;
      }
      if (popcornElectronPresentationPanelValue224 && popcornElectronPresentationPanelValue223?.canRotate && popcornElectronPresentationPanelHelper69(popcornElectronPresentationPanelValue224, popcornElectronPresentationPanelValue222, popcornElectronPresentationPanelValue87.k)) {
        controller.setHoveredElementId(popcornElectronPresentationPanelValue43.primarySelectedElementId);
        event.currentTarget.style.cursor = _popcornElectronSurfaceStyleP();
        return;
      }
      if (popcornElectronPresentationPanelValue108.isActive() && popcornElectronPresentationPanelValue108.hasTextCursorAtPoint(popcornElectronPresentationPanelValue222)) {
        controller.setHoveredElementId(null);
        event.currentTarget.style.cursor = "text";
        return;
      }
      let popcornElectronPresentationPanelValue227 = popcornElectronPresentationPanelHelper64(popcornElectronPresentationPanelValue43.selectedSlideElementTargets, popcornElectronPresentationPanelValue222, popcornElectronPresentationPanelValue87.k);
      controller.setHoveredElementId(popcornElectronPresentationPanelValue227);
      event.currentTarget.style.cursor = popcornElectronPresentationPanelValue227 ? "move" : "";
    },
    popcornElectronPresentationPanelValue122 = (event, popcornElectronPresentationPanelParam6) => {
      if (popcornElectronPresentationPanelValue61 && drawingMode) {
        if (popcornElectronPresentationPanelValue49.current != null && popcornElectronPresentationPanelValue49.current !== event.pointerId) return;
        popcornElectronPresentationPanelValue119(popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89));
        let popcornElectronPresentationPanelValue553 = popcornElectronPresentationPanelValue76.current;
        popcornElectronPresentationPanelHelper82(event, popcornElectronPresentationPanelValue49);
        popcornElectronPresentationPanelValue81.current = null;
        popcornElectronPresentationPanelValue86(null);
        popcornElectronPresentationPanelParam6 && popcornElectronPresentationPanelValue114(popcornElectronPresentationPanelValue553);
        return;
      }
      if (popcornElectronPresentationPanelValue60 && annotationMode) {
        if (popcornElectronPresentationPanelValue49.current != null && popcornElectronPresentationPanelValue49.current !== event.pointerId) return;
        popcornElectronPresentationPanelValue119(popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89));
        popcornElectronPresentationPanelHelper82(event, popcornElectronPresentationPanelValue49);
        let popcornElectronPresentationPanelValue308 = popcornElectronPresentationPanelValue71.current;
        if (popcornElectronPresentationPanelValue71.current = null, popcornElectronPresentationPanelValue73(null), !popcornElectronPresentationPanelParam6 || !popcornElectronPresentationPanelValue308) return;
        let popcornElectronPresentationPanelValue309 = popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89);
        if (!popcornElectronPresentationPanelValue309) return;
        let popcornElectronPresentationPanelValue310 = popcornElectronPresentationPanelHelper67(popcornElectronPresentationPanelValue308.start, popcornElectronPresentationPanelValue309),
          popcornElectronPresentationPanelValue311 = Math.hypot(popcornElectronPresentationPanelValue309.x - popcornElectronPresentationPanelValue308.start.x, popcornElectronPresentationPanelValue309.y - popcornElectronPresentationPanelValue308.start.y) < 6;
        if (popcornElectronPresentationPanelValue311) {
          if (popcornElectronPresentationPanelValue308.clickedElementTarget) {
            switch (popcornElectronPresentationPanelValue308.draftClickAction) {
              case "keep":
              case "close":
                popcornElectronPresentationPanelValue113();
                return;
              case "replace":
                break;
            }
            let popcornElectronPresentationPanelValue390 = popcornElectronPresentationPanelValue308.clickedElementTarget,
              popcornElectronPresentationPanelValue391 = popcornElectronPresentationPanelHelper58({
                snapshot: popcornElectronPresentationPanelValue43,
                elementIds: [popcornElectronPresentationPanelValue390.id],
                primaryElementId: popcornElectronPresentationPanelValue390.id,
                frame: popcornElectronPresentationPanelValue390.frame,
                anchorPoint: popcornElectronPresentationPanelValue309
              });
            if (!popcornElectronPresentationPanelValue391) return;
            controller.setHoveredElementId(null);
            popcornElectronPresentationPanelValue70(false);
            reviewTools?.annotation?.onStart?.("annotation_mode_pointer", {
              annotationMode
            });
            popcornElectronPresentationPanelValue68.current = false;
            popcornElectronPresentationPanelValue63({
              mode: "create",
              target: popcornElectronPresentationPanelValue391,
              body: ""
            });
            return;
          }
          switch (popcornElectronPresentationPanelValue308.draftClickAction) {
            case "keep":
            case "close":
              popcornElectronPresentationPanelValue113();
              return;
            case "replace":
              break;
          }
        }
        let popcornElectronPresentationPanelValue312 = popcornElectronPresentationPanelHelper59({
          snapshot: popcornElectronPresentationPanelValue43,
          frame: popcornElectronPresentationPanelValue311 ? {
            left: popcornElectronPresentationPanelValue309.x,
            top: popcornElectronPresentationPanelValue309.y,
            width: 0,
            height: 0
          } : popcornElectronPresentationPanelValue310,
          anchorPoint: popcornElectronPresentationPanelValue309,
          containedElements: popcornElectronPresentationPanelValue311 ? [] : popcornElectronPresentationPanelValue101
        });
        if (!popcornElectronPresentationPanelValue312) return;
        reviewTools?.annotation?.onStart?.("annotation_mode_pointer", {
          annotationMode
        });
        popcornElectronPresentationPanelValue68.current = false;
        popcornElectronPresentationPanelValue63({
          mode: "create",
          target: popcornElectronPresentationPanelValue312,
          body: ""
        });
        return;
      }
      if (popcornElectronPresentationPanelValue49.current != null && popcornElectronPresentationPanelValue49.current !== event.pointerId) return;
      let popcornElectronPresentationPanelValue230 = popcornElectronPresentationPanelValue50.current;
      if (!popcornElectronPresentationPanelValue230) return;
      if (popcornElectronPresentationPanelValue119(popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89)), popcornElectronPresentationPanelHelper82(event, popcornElectronPresentationPanelValue49), popcornElectronPresentationPanelValue230 === "text") {
        popcornElectronPresentationPanelValue50.current = null;
        popcornElectronPresentationPanelValue108.pointerUp();
        return;
      }
      if (popcornElectronPresentationPanelValue230 === "marquee") {
        popcornElectronPresentationPanelValue50.current = null;
        popcornElectronPresentationPanelValue52.current = null;
        popcornElectronPresentationPanelValue53.current = null;
        popcornElectronPresentationPanelValue54.current = false;
        controller.endSelectionMarquee({
          commit: popcornElectronPresentationPanelParam6
        });
        return;
      }
      popcornElectronPresentationPanelValue50.current = null;
      let popcornElectronPresentationPanelValue231 = popcornElectronPresentationPanelValue52.current,
        popcornElectronPresentationPanelValue232 = !!popcornElectronPresentationPanelParam6 && !popcornElectronPresentationPanelValue54.current && !!popcornElectronPresentationPanelValue231 && popcornElectronPresentationPanelValue43.textLayoutBlocks.some(item => item.id === popcornElectronPresentationPanelValue231);
      popcornElectronPresentationPanelValue52.current = null;
      popcornElectronPresentationPanelValue53.current = null;
      popcornElectronPresentationPanelValue54.current = false;
      controller.endElementInteraction({
        commit: popcornElectronPresentationPanelParam6
      });
      popcornElectronPresentationPanelValue51.current = popcornElectronPresentationPanelValue232 ? popcornElectronPresentationPanelValue231 : null;
    },
    popcornElectronPresentationPanelValue123 = event => {
      if (popcornElectronPresentationPanelValue61 && drawingMode) {
        event.preventDefault();
        return;
      }
      if (popcornElectronPresentationPanelValue60 && annotationMode) {
        event.preventDefault();
        return;
      }
      if (!isEditing) return;
      let popcornElectronPresentationPanelValue467 = popcornElectronPresentationPanelHelper78(event.clientX, event.clientY, popcornElectronPresentationPanelValue45.current, popcornElectronPresentationPanelValue87, popcornElectronPresentationPanelValue43, popcornElectronPresentationPanelValue89);
      popcornElectronPresentationPanelValue467 && (controller.endSelectionMarquee({
        commit: false
      }), controller.endElementInteraction({
        commit: false
      }), popcornElectronPresentationPanelValue108.selectWordAtPoint(popcornElectronPresentationPanelValue467) && event.preventDefault());
    },
    popcornElectronPresentationPanelValue124 = event => !event.metaKey && !event.ctrlKey ? false : event.key === "0" ? (runtime.fitToViewport(1), event.preventDefault(), true) : event.key === "=" || event.key === "+" ? (runtime.zoomTo(popcornElectronPresentationPanelHelper31(popcornElectronPresentationPanelValue43.zoom + 0.1, popcornElectronPresentationPanelValue43.fitScale ?? 1), {
      settled: true
    }), event.preventDefault(), true) : event.key === "-" ? (runtime.zoomTo(popcornElectronPresentationPanelHelper31(popcornElectronPresentationPanelValue43.zoom - 0.1, popcornElectronPresentationPanelValue43.fitScale ?? 1), {
      settled: true
    }), event.preventDefault(), true) : false,
    popcornElectronPresentationPanelValue125 = event => {
      if (!(event.target instanceof HTMLElement && event.target.closest("[data-testid='popcorn-annotation-editor']"))) {
        if (popcornElectronPresentationPanelValue60 && reviewTools?.annotation?.onRequestLink && !popcornElectronPresentationPanelValue62 && !drawingMode && !popcornElectronPresentationPanelValue108.isActive() && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey && event.key.toLowerCase() === "l") {
          if (!popcornElectronPresentationPanelValue95) return;
          reviewTools.annotation.onRequestLink({
            requestId: popcornElectronSurfaceStyleN("selection-link"),
            artifactKind: "presentation",
            label: popcornElectronPresentationPanelHelper61(popcornElectronPresentationPanelValue95),
            target: popcornElectronPresentationPanelValue95
          });
          event.preventDefault();
          return;
        }
        if (event.key === "Escape" && popcornElectronPresentationPanelValue76.current) {
          popcornElectronPresentationPanelValue110();
          event.preventDefault();
          return;
        }
        if (event.key === "Escape" && drawingMode) {
          onDrawingModeChange?.(false);
          event.preventDefault();
          return;
        }
        if (!event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey && popcornElectronPresentationPanelValue43.selectedElementIds.length === 0 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
          let popcornElectronPresentationPanelValue539 = event.key === "ArrowLeft" ? -1 : 1,
            popcornElectronPresentationPanelValue540 = Math.max(0, Math.min(popcornElectronPresentationPanelValue43.slideCount - 1, popcornElectronPresentationPanelValue43.selectedSlideIdx + popcornElectronPresentationPanelValue539));
          popcornElectronPresentationPanelValue540 !== popcornElectronPresentationPanelValue43.selectedSlideIdx && (controller.setSelectedSlideIdx(popcornElectronPresentationPanelValue540), event.preventDefault());
          return;
        }
        if (!isEditing) {
          if (event.key === "Escape" && popcornElectronPresentationPanelValue62) {
            popcornElectronPresentationPanelValue112();
            event.preventDefault();
            return;
          }
          if (event.key === "Escape" && annotationMode) {
            onAnnotationModeChange?.(false);
            popcornElectronPresentationPanelValue73(null);
            event.preventDefault();
            return;
          }
          popcornElectronPresentationPanelValue124(event);
          return;
        }
        if (event.key === "Escape" && popcornElectronPresentationPanelValue62) {
          popcornElectronPresentationPanelValue112();
          event.preventDefault();
          return;
        }
        if (event.key === "Escape" && annotationMode) {
          onAnnotationModeChange?.(false);
          popcornElectronPresentationPanelValue73(null);
          event.preventDefault();
          return;
        }
        if (annotationMode) return popcornElectronPresentationPanelValue124(event), undefined;
        if (popcornElectronPresentationPanelValue108.isActive()) {
          event.key === "Escape" && (popcornElectronPresentationPanelValue108.clear(), event.preventDefault());
          return;
        }
        if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey) {
          let popcornElectronPresentationPanelValue606 = !!popcornElectronPresentationPanelValue94;
          popcornElectronPresentationPanelValue59(popcornElectronPresentationPanelValue606);
          popcornElectronPresentationPanelValue606 && event.preventDefault();
          return;
        }
        if (event.key === "Escape" && popcornElectronPresentationPanelValue58) {
          popcornElectronPresentationPanelValue59(false);
          event.preventDefault();
          return;
        }
        if (event.key === "Enter" && popcornElectronPresentationPanelValue43.selectedElementIds.length === 1 && popcornElectronPresentationPanelValue43.primarySelectedElementId) {
          popcornElectronPresentationPanelValue108.activateBlockEnd(popcornElectronPresentationPanelValue43.primarySelectedElementId) && event.preventDefault();
          return;
        }
        if (event.key === "Backspace" || event.key === "Delete") {
          controller.deleteSelectedElement() && event.preventDefault();
          return;
        }
        if (!event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey && popcornElectronPresentationPanelValue43.selectedElementIds.length > 0) {
          let popcornElectronPresentationPanelValue582 = popcornElectronPresentationPanelHelper76(event.key);
          if (popcornElectronPresentationPanelValue582 && controller.nudgeSelectedElements(popcornElectronPresentationPanelValue582)) {
            event.preventDefault();
            return;
          }
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
          event.shiftKey ? controller.redo() : controller.undo();
          event.preventDefault();
          return;
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y") {
          controller.redo();
          event.preventDefault();
          return;
        }
        popcornElectronPresentationPanelValue124(event);
      }
    },
    popcornElectronPresentationPanelValue126 = popcornElectronPresentationPanelValue60 && !annotationMode && !drawingMode && !popcornElectronPresentationPanelValue62 && !popcornElectronPresentationPanelValue43.textEditState?.activeBlockId;
  return <div ref={popcornElectronPresentationPanelValue44} className="relative flex h-full min-h-0 flex-col bg-token-bg-primary" style={theme === "codex" ? _popcornElectronSurfaceStyleW : undefined}>
      <div ref={popcornElectronPresentationPanelValue45} data-testid="popcorn-presentation-stage" tabIndex={0} onKeyDown={popcornElectronPresentationPanelValue125} className="relative min-h-0 flex-1 touch-none overflow-hidden outline-none">
        <canvas ref={popcornElectronPresentationPanelValue46} data-testid="popcorn-presentation-canvas" className={clsx("absolute inset-0 h-full w-full select-none")} />
        <canvas ref={popcornElectronPresentationPanelValue47} data-testid="popcorn-presentation-worker-overlay" className="pointer-events-none absolute inset-0 h-full w-full select-none" />
        <canvas ref={popcornElectronPresentationPanelValue48} data-testid="popcorn-presentation-overlay" onPointerDown={popcornElectronPresentationPanelValue120} onPointerMove={popcornElectronPresentationPanelValue121} onPointerLeave={event => {
        popcornElectronPresentationPanelValue49.current ?? (popcornElectronPresentationPanelValue119(null), controller.setHoveredElementId(null), event.currentTarget.style.cursor = popcornElectronPresentationPanelValue61 && drawingMode ? "crosshair" : "");
      }} onPointerUp={popcornElectronPresentationPanelParam352 => popcornElectronPresentationPanelValue122(popcornElectronPresentationPanelParam352, true)} onPointerCancel={popcornElectronPresentationPanelParam353 => popcornElectronPresentationPanelValue122(popcornElectronPresentationPanelParam353, false)} onDoubleClick={popcornElectronPresentationPanelValue123} className="absolute inset-0 h-full w-full touch-none" />
        {commentThreadsEnabled ? React.createElement(popcornElectronPresentationPanelHelper53, {
        threads: popcornElectronPresentationPanelValue43.commentThreads ?? [],
        slideRect: popcornElectronPresentationPanelValue91.slideRect,
        isEditing,
        onReply: (popcornElectronPresentationPanelParam271, popcornElectronPresentationPanelParam272) => {
          controller.replyToCommentThread(popcornElectronPresentationPanelParam271, popcornElectronPresentationPanelParam272);
        },
        onResolve: popcornElectronPresentationPanelParam283 => {
          controller.resolveCommentThread(popcornElectronPresentationPanelParam283);
        },
        onReopen: popcornElectronPresentationPanelParam287 => {
          controller.reopenCommentThread(popcornElectronPresentationPanelParam287);
        },
        onDeleteThread: popcornElectronPresentationPanelParam288 => {
          controller.deleteCommentThread(popcornElectronPresentationPanelParam288);
        },
        onToggleReaction: (popcornElectronPresentationPanelParam256, popcornElectronPresentationPanelParam257, popcornElectronPresentationPanelParam258) => {
          controller.toggleCommentReaction(popcornElectronPresentationPanelParam256, popcornElectronPresentationPanelParam257, popcornElectronPresentationPanelParam258);
        },
        onEditComment: (popcornElectronPresentationPanelParam265, popcornElectronPresentationPanelParam266, popcornElectronPresentationPanelParam267) => {
          controller.editThreadComment(popcornElectronPresentationPanelParam265, popcornElectronPresentationPanelParam266, popcornElectronPresentationPanelParam267);
        },
        onDeleteComment: (popcornElectronPresentationPanelParam278, popcornElectronPresentationPanelParam279) => {
          controller.deleteThreadComment(popcornElectronPresentationPanelParam278, popcornElectronPresentationPanelParam279);
        }
      }) : null}
        {_t.length > 0 ? React.createElement(popcornElectronSurfaceStyleP, {
        testId: "popcorn-presentation-drawing-overlay",
        strokes: _t.flatMap(item => item.strokes),
        projectPoint: $,
        clipBounds: popcornElectronPresentationPanelValue96
      }) : null}
        {popcornElectronPresentationPanelValue77.length > 0 ? React.createElement(popcornElectronSurfaceStyleP, {
        testId: "popcorn-presentation-drawing-draft-overlay",
        strokes: popcornElectronPresentationPanelValue77,
        projectPoint: $,
        clipBounds: popcornElectronPresentationPanelValue96
      }) : null}
        {popcornElectronPresentationPanelValue74 ? React.createElement(popcornElectronSurfaceStyleP, {
        testId: "popcorn-presentation-drawing-active-overlay",
        strokes: [popcornElectronPresentationPanelValue74],
        projectPoint: $,
        clipBounds: popcornElectronPresentationPanelValue96
      }) : null}
        {popcornElectronPresentationPanelValue105.map(({
        annotation,
        bounds
      }) => {
        let popcornElectronPresentationPanelValue341 = popcornElectronSurfaceStyleG(bounds);
        return <div key={annotation.annotationId}>
                {React.createElement(popcornElectronSurfaceStyleU, {
            bounds,
            testId: `popcorn-presentation-annotation-overlay-${annotation.annotationId}`
          })}
                {React.createElement(popcornElectronSurfaceStyleW, {
            testId: `popcorn-presentation-annotation-marker-${annotation.annotationId}`,
            markerNumber: annotation.annotationNumber,
            position: popcornElectronPresentationPanelValue341,
            selected: popcornElectronPresentationPanelValue62?.mode === "edit" && popcornElectronPresentationPanelValue62.annotationId === annotation.annotationId,
            title: annotation.label,
            onMouseEnter: () => {
              popcornElectronPresentationPanelValue65(annotation.annotationId);
            },
            onMouseLeave: () => {
              popcornElectronPresentationPanelValue65(popcornElectronPresentationPanelParam332 => popcornElectronPresentationPanelParam332 === annotation.annotationId ? null : popcornElectronPresentationPanelParam332);
            },
            onFocus: () => {
              popcornElectronPresentationPanelValue65(annotation.annotationId);
            },
            onBlur: () => {
              popcornElectronPresentationPanelValue65(popcornElectronPresentationPanelParam333 => popcornElectronPresentationPanelParam333 === annotation.annotationId ? null : popcornElectronPresentationPanelParam333);
            },
            onClick: () => {
              popcornElectronPresentationPanelValue116(annotation);
            }
          })}
              </div>;
      })}
        {popcornElectronPresentationPanelValue106 ? React.createElement(popcornElectronSurfaceStyleO, {
        body: popcornElectronPresentationPanelValue106.annotation.body,
        markerPosition: popcornElectronSurfaceStyleG(popcornElectronPresentationPanelValue106.bounds),
        containerElement: popcornElectronPresentationPanelValue45.current,
        testId: "popcorn-presentation-annotation-preview"
      }) : null}
        {popcornElectronPresentationPanelValue103 ? React.createElement(popcornElectronSurfaceStyleU, {
        bounds: popcornElectronPresentationPanelValue103,
        testId: popcornElectronPresentationPanelValue100 ? "popcorn-presentation-annotation-region-preview" : "popcorn-presentation-annotation-highlight",
        borderWidthPx: popcornElectronPresentationPanelValue100 ? 1 : 2
      }) : null}
        {popcornElectronPresentationPanelValue107.map(item => {
        let popcornElectronPresentationPanelValue394 = popcornElectronPresentationPanelHelper63({
          type: "presentation-element-selection",
          slideId: popcornElectronPresentationPanelValue92,
          slideIndex: popcornElectronPresentationPanelValue43.selectedSlideIdx,
          slideLabel: popcornElectronPresentationPanelValue93,
          elementIds: [item.elementId],
          primaryElementId: item.elementId,
          frame: item.frame
        }, popcornElectronPresentationPanelValue91.slideRect);
        return popcornElectronPresentationPanelValue394 ? React.createElement(popcornElectronSurfaceStyleU, {
          bounds: popcornElectronPresentationPanelValue394,
          borderWidthPx: 0.5,
          fillColor: "transparent",
          shadow: false,
          testId: `popcorn-presentation-annotation-region-contained-${item.elementId}`
        }) : null;
      })}
        {popcornElectronPresentationPanelValue60 && annotationMode && popcornElectronPresentationPanelValue62?.mode === "create" && popcornElectronPresentationPanelValue98 ? React.createElement(popcornElectronSurfaceStyleW, {
        testId: "popcorn-presentation-annotation-draft-marker",
        markerNumber: popcornElectronSurfaceStyleQ(annotations, popcornElectronPresentationPanelValue62.target),
        position: popcornElectronSurfaceStyleG(popcornElectronPresentationPanelValue98),
        draft: true
      }) : null}
        {popcornElectronPresentationPanelValue126 && popcornElectronPresentationPanelValue94 && popcornElectronPresentationPanelValue95 ? React.createElement(popcornElectronSurfaceStyleH, {
        bounds: popcornElectronPresentationPanelValue94,
        shortcutScopeElement: popcornElectronPresentationPanelValue45.current,
        testId: "popcorn-presentation-ask-for-edit-button",
        onClick: popcornElectronPresentationPanelParam152 => {
          reviewTools?.annotation?.onStart?.(popcornElectronPresentationPanelParam152, {
            annotationMode
          });
          popcornElectronPresentationPanelValue68.current = false;
          popcornElectronPresentationPanelValue63({
            mode: "create",
            target: popcornElectronPresentationPanelValue95,
            body: ""
          });
        }
      }) : null}
        {popcornElectronPresentationPanelValue97 ? React.createElement(_popcornElectronSurfaceStyleK, {
        ref: popcornElectronPresentationPanelValue67,
        anchorBounds: popcornElectronPresentationPanelValue97,
        containerElement: popcornElectronPresentationPanelValue45.current,
        portalContainerElement: annotationPortalContainerElement,
        mode: popcornElectronPresentationPanelValue62?.mode ?? "create",
        value: popcornElectronPresentationPanelValue62?.body ?? "",
        onChange: popcornElectronPresentationPanelParam239 => {
          popcornElectronPresentationPanelValue68.current = false;
          popcornElectronPresentationPanelValue63(popcornElectronPresentationPanelParam341 => popcornElectronPresentationPanelParam341 && {
            ...popcornElectronPresentationPanelParam341,
            body: popcornElectronPresentationPanelParam239
          });
        },
        onCancel: popcornElectronPresentationPanelValue112,
        onDelete: popcornElectronPresentationPanelValue118,
        onSubmit: popcornElectronPresentationPanelValue117
      }) : null}
        {stageOverlays.length > 0 ? <div className="pointer-events-none absolute inset-0 z-30">
            {stageOverlays.map(item => <div key={item.id} className="pointer-events-none absolute inset-0">
                {item.render({
            controller,
            snapshot: popcornElectronPresentationPanelValue91,
            selectionBounds: popcornElectronPresentationPanelValue94,
            panelControls,
            editToolbarRequested: popcornElectronPresentationPanelValue58,
            dismissEditToolbar: () => {
              popcornElectronPresentationPanelValue59(false);
            }
          })}
              </div>)}
          </div> : null}
      </div>
    </div>;
}
function popcornElectronPresentationPanelHelper74(popcornElectronPresentationPanelParam82, popcornElectronPresentationPanelParam83) {
  let popcornElectronPresentationPanelValue503 = window.getComputedStyle(popcornElectronPresentationPanelParam82),
    popcornElectronPresentationPanelValue504 = popcornElectronPresentationPanelParam83 === "codex" ? popcornElectronPresentationPanelHelper75(popcornElectronPresentationPanelValue503.getPropertyValue("--color-background-surface")) : null;
  if (popcornElectronPresentationPanelValue504) return popcornElectronPresentationPanelValue504;
  let popcornElectronPresentationPanelValue505 = popcornElectronPresentationPanelValue503.backgroundColor.trim();
  return popcornElectronPresentationPanelValue505.length > 0 && popcornElectronPresentationPanelValue505 !== "transparent" && popcornElectronPresentationPanelValue505 !== "rgba(0, 0, 0, 0)" ? popcornElectronPresentationPanelValue505 : popcornElectronSurfaceStyleT(popcornElectronPresentationPanelParam83);
}
function popcornElectronPresentationPanelHelper75(popcornElectronPresentationPanelParam168) {
  let popcornElectronPresentationPanelValue579 = popcornElectronPresentationPanelParam168.trim();
  return popcornElectronPresentationPanelValue579.length === 0 || popcornElectronPresentationPanelValue579 === "transparent" || popcornElectronPresentationPanelValue579 === "rgba(0, 0, 0, 0)" || popcornElectronPresentationPanelValue579.startsWith("var(") ? null : popcornElectronPresentationPanelValue579;
}
function popcornElectronPresentationPanelHelper76(popcornElectronPresentationPanelParam100) {
  switch (popcornElectronPresentationPanelParam100) {
    case "ArrowLeft":
      return {
        dx: -popcornElectronPresentationPanelValue17,
        dy: 0
      };
    case "ArrowRight":
      return {
        dx: 1,
        dy: 0
      };
    case "ArrowUp":
      return {
        dx: 0,
        dy: -popcornElectronPresentationPanelValue17
      };
    case "ArrowDown":
      return {
        dx: 0,
        dy: 1
      };
    default:
      return null;
  }
}
function popcornElectronPresentationPanelHelper77(event, popcornElectronPresentationPanelParam261, popcornElectronPresentationPanelParam262, popcornElectronPresentationPanelParam263, popcornElectronPresentationPanelParam264) {
  return popcornElectronPresentationPanelHelper78(event.clientX, event.clientY, popcornElectronPresentationPanelParam261, popcornElectronPresentationPanelParam262, popcornElectronPresentationPanelParam263, popcornElectronPresentationPanelParam264);
}
function popcornElectronPresentationPanelHelper78(popcornElectronPresentationPanelParam91, popcornElectronPresentationPanelParam92, popcornElectronPresentationPanelParam93, popcornElectronPresentationPanelParam94, popcornElectronPresentationPanelParam95, popcornElectronPresentationPanelParam96) {
  let popcornElectronPresentationPanelValue518 = popcornElectronPresentationPanelParam95.selectedSlideFrame;
  if (!popcornElectronPresentationPanelParam93 || !popcornElectronPresentationPanelValue518) return null;
  let popcornElectronPresentationPanelValue519 = _popcornElectronSurfaceStyleY(popcornElectronPresentationPanelParam93, popcornElectronPresentationPanelParam91, popcornElectronPresentationPanelParam92);
  return popcornElectronPresentationPanelHelper39({
    camera: popcornElectronPresentationPanelParam94,
    viewportX: popcornElectronPresentationPanelValue519.x,
    viewportY: popcornElectronPresentationPanelValue519.y,
    viewport: {
      width: popcornElectronPresentationPanelParam93.clientWidth,
      height: popcornElectronPresentationPanelParam93.clientHeight
    },
    frame: popcornElectronPresentationPanelValue518,
    viewportInsets: popcornElectronPresentationPanelParam96
  });
}
function popcornElectronPresentationPanelHelper79(popcornElectronPresentationPanelParam134, popcornElectronPresentationPanelParam135, popcornElectronPresentationPanelParam136, popcornElectronPresentationPanelParam137, popcornElectronPresentationPanelParam138) {
  return !popcornElectronPresentationPanelParam137 || popcornElectronPresentationPanelParam134 <= 0 || popcornElectronPresentationPanelParam135 <= 0 ? null : popcornElectronPresentationPanelHelper34({
    viewport: {
      width: popcornElectronPresentationPanelParam134,
      height: popcornElectronPresentationPanelParam135
    },
    frame: popcornElectronPresentationPanelParam137,
    camera: popcornElectronPresentationPanelParam136,
    viewportInsets: popcornElectronPresentationPanelParam138
  }).slideRect;
}
function popcornElectronPresentationPanelHelper80(popcornElectronPresentationPanelParam42) {
  if (popcornElectronPresentationPanelParam42.selectedElementIds.length !== 1 || !popcornElectronPresentationPanelParam42.primarySelectedElementId) return null;
  let popcornElectronPresentationPanelValue416 = popcornElectronPresentationPanelParam42.inspector.selectedElement,
    popcornElectronPresentationPanelValue417 = popcornElectronPresentationPanelValue416?.id === popcornElectronPresentationPanelParam42.primarySelectedElementId ? popcornElectronPresentationPanelValue416.frame : popcornElectronPresentationPanelParam42.selectedSlideElementTargets.find(item => item.id === popcornElectronPresentationPanelParam42.primarySelectedElementId)?.frame;
  if (!popcornElectronPresentationPanelValue417) return null;
  let popcornElectronPresentationPanelValue418 = popcornElectronPresentationPanelParam42.slideRect;
  return popcornElectronPresentationPanelValue418 ? {
    left: popcornElectronPresentationPanelValue418.left + popcornElectronPresentationPanelValue417.left * popcornElectronPresentationPanelValue418.scale,
    top: popcornElectronPresentationPanelValue418.top + popcornElectronPresentationPanelValue417.top * popcornElectronPresentationPanelValue418.scale,
    width: popcornElectronPresentationPanelValue417.width * popcornElectronPresentationPanelValue418.scale,
    height: popcornElectronPresentationPanelValue417.height * popcornElectronPresentationPanelValue418.scale
  } : {
    left: popcornElectronPresentationPanelValue417.left,
    top: popcornElectronPresentationPanelValue417.top,
    width: popcornElectronPresentationPanelValue417.width,
    height: popcornElectronPresentationPanelValue417.height
  };
}
function popcornElectronPresentationPanelHelper81(event, popcornElectronPresentationPanelParam209) {
  popcornElectronPresentationPanelParam209.current = event.pointerId;
  try {
    event.currentTarget.setPointerCapture(event.pointerId);
  } catch {}
}
function popcornElectronPresentationPanelHelper82(event, popcornElectronPresentationPanelParam132) {
  if (event.currentTarget.hasPointerCapture?.(event.pointerId)) try {
    event.currentTarget.releasePointerCapture(event.pointerId);
  } catch {}
  popcornElectronPresentationPanelParam132.current === event.pointerId && (popcornElectronPresentationPanelParam132.current = null);
}
var popcornElectronPresentationPanelValue22 = class {
    #e;
    #t = false;
    #n = null;
    #r = null;
    #i = null;
    #a = null;
    #o = false;
    #s = false;
    #c = {
      width: 0,
      height: 0
    };
    #l = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    #u = {
      selectedSlideIdx: 0,
      selectedSlideFrame: null,
      zoom: 1,
      camera: null
    };
    #d = null;
    #f = new Set();
    #p = {
      width: 0,
      height: 0,
      viewportInsets: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
    constructor() {
      this.#e = new _popcornElectronSurfaceStyleA({
        enabled: true,
        initialCamera: {
          x: 0,
          y: 0,
          k: 1
        },
        minZoom: 0.01,
        maxZoom: 64,
        getViewportSize: () => ({
          width: this.#c.width,
          height: this.#c.height
        }),
        getWorldSize: () => {
          let popcornElectronPresentationPanelValue487 = this.#v();
          return popcornElectronPresentationPanelValue487 ? popcornElectronPresentationPanelHelper34({
            viewport: {
              width: this.#c.width,
              height: this.#c.height
            },
            frame: popcornElectronPresentationPanelValue487,
            camera: this.#e.getCamera(),
            viewportInsets: this.#l
          }).worldSize : {
            width: this.#c.width,
            height: this.#c.height
          };
        },
        requestDraw: () => {},
        clampCamera: popcornElectronPresentationPanelParam97 => {
          let popcornElectronPresentationPanelValue520 = this.#v();
          return popcornElectronPresentationPanelValue520 ? popcornElectronPresentationPanelHelper37({
            camera: popcornElectronPresentationPanelParam97,
            viewport: {
              width: this.#c.width,
              height: this.#c.height
            },
            frame: popcornElectronPresentationPanelValue520,
            viewportInsets: this.#l
          }) : popcornElectronPresentationPanelParam97;
        },
        onCameraSettled: popcornElectronPresentationPanelParam71 => {
          let popcornElectronPresentationPanelValue492 = this.#v();
          popcornElectronPresentationPanelValue492 && this.#d?.({
            camera: popcornElectronPresentationPanelParam71,
            zoom: popcornElectronPresentationPanelHelper38({
              camera: popcornElectronPresentationPanelParam71,
              viewport: {
                width: this.#c.width,
                height: this.#c.height
              },
              frame: popcornElectronPresentationPanelValue492,
              viewportInsets: this.#l
            })
          });
        }
      });
    }
    start() {
      this.#t || (this.#t = true, popcornElectronPresentationPanelHelper1().then(() => {
        this.#t && (this.#o = true, this.scheduleLayoutSync());
      }));
    }
    attachHost(popcornElectronPresentationPanelParam52) {
      this.#n !== popcornElectronPresentationPanelParam52 && (this.#h(), this.#n = popcornElectronPresentationPanelParam52, this.#e.attach(popcornElectronPresentationPanelParam52), popcornElectronPresentationPanelParam52 && (typeof ResizeObserver < "u" && (this.#r = new ResizeObserver(popcornElectronPresentationPanelParam220 => {
        let popcornElectronPresentationPanelValue599 = popcornElectronPresentationPanelParam220[0];
        this.scheduleLayoutSync(popcornElectronPresentationPanelValue599 ? popcornElectronPresentationPanelHelper3(popcornElectronPresentationPanelParam52, popcornElectronPresentationPanelValue599) : null);
      }), this.#r.observe(popcornElectronPresentationPanelParam52)), window.addEventListener("resize", this.#m), this.scheduleLayoutSync()));
    }
    getCamera() {
      return this.#e.getCamera();
    }
    hasInitializedCamera() {
      return this.#s;
    }
    subscribeToCameraChanges(popcornElectronPresentationPanelParam254) {
      return this.#e.subscribeToCameraChanges(popcornElectronPresentationPanelParam254);
    }
    subscribeToLayoutChanges(popcornElectronPresentationPanelParam186) {
      return this.#f.add(popcornElectronPresentationPanelParam186), () => {
        this.#f.delete(popcornElectronPresentationPanelParam186);
      };
    }
    getLayoutSnapshot() {
      return this.#p;
    }
    zoomTo(popcornElectronPresentationPanelParam109, popcornElectronPresentationPanelParam110) {
      let popcornElectronPresentationPanelValue534 = this.#v();
      if (!popcornElectronPresentationPanelValue534) return;
      let popcornElectronPresentationPanelValue535 = $({
        viewport: {
          width: this.#c.width,
          height: this.#c.height
        },
        frame: popcornElectronPresentationPanelValue534,
        zoomFactor: popcornElectronPresentationPanelParam109,
        viewportInsets: this.#l
      });
      this.#e.zoomTo(popcornElectronPresentationPanelValue535.k, popcornElectronPresentationPanelParam110);
    }
    fitToViewport(popcornElectronPresentationPanelParam84 = 1) {
      let popcornElectronPresentationPanelValue506 = this.#v();
      popcornElectronPresentationPanelValue506 && this.#e.setCamera($({
        viewport: {
          width: this.#c.width,
          height: this.#c.height
        },
        frame: popcornElectronPresentationPanelValue506,
        zoomFactor: popcornElectronPresentationPanelParam84,
        viewportInsets: this.#l
      }), {
        settled: true
      });
    }
    setOnCameraSettled(popcornElectronPresentationPanelParam316) {
      this.#d = popcornElectronPresentationPanelParam316;
    }
    setViewportInsets(popcornElectronPresentationPanelParam123) {
      let popcornElectronPresentationPanelValue546 = this.#l;
      popcornElectronPresentationPanelValue546.left === popcornElectronPresentationPanelParam123.left && popcornElectronPresentationPanelValue546.top === popcornElectronPresentationPanelParam123.top && popcornElectronPresentationPanelValue546.right === popcornElectronPresentationPanelParam123.right && popcornElectronPresentationPanelValue546.bottom === popcornElectronPresentationPanelParam123.bottom || (this.#l = {
        ...popcornElectronPresentationPanelParam123
      }, this.#_(), this.scheduleLayoutSync());
    }
    setViewState(popcornElectronPresentationPanelParam255) {
      let popcornElectronPresentationPanelValue610 = this.#u;
      this.#u = popcornElectronPresentationPanelParam255;
      this.#y(popcornElectronPresentationPanelValue610, popcornElectronPresentationPanelParam255);
    }
    dispose() {
      this.#t = false;
      this.#i != null && (cancelAnimationFrame(this.#i), this.#i = null);
      this.#h();
      this.#e.destroy();
    }
    scheduleLayoutSync(popcornElectronPresentationPanelParam120) {
      popcornElectronPresentationPanelParam120 && (this.#a = popcornElectronPresentationPanelParam120);
      this.#o && (this.#i != null && cancelAnimationFrame(this.#i), this.#i = requestAnimationFrame(() => {
        this.#i = null;
        this.#g();
      }));
    }
    #m = () => {
      this.scheduleLayoutSync();
    };
    #h() {
      this.#r &&= (this.#r.disconnect(), null);
      this.#n && window.removeEventListener("resize", this.#m);
      this.#n = null;
      this.#e.attach(null);
    }
    #g() {
      let popcornElectronPresentationPanelValue480 = this.#n;
      if (!popcornElectronPresentationPanelValue480) return;
      let popcornElectronPresentationPanelValue481 = this.#c,
        popcornElectronPresentationPanelValue482 = this.#a;
      this.#a = null;
      this.#c = popcornElectronPresentationPanelHelper2(popcornElectronPresentationPanelValue480, popcornElectronPresentationPanelValue482);
      this.#_();
      this.#y(this.#u, this.#u, {
        viewportChanged: popcornElectronPresentationPanelValue481.width !== this.#c.width || popcornElectronPresentationPanelValue481.height !== this.#c.height,
        previousViewport: {
          width: popcornElectronPresentationPanelValue481.width,
          height: popcornElectronPresentationPanelValue481.height
        }
      });
    }
    #_() {
      let popcornElectronPresentationPanelValue431 = this.#p,
        popcornElectronPresentationPanelValue432 = {
          width: this.#c.width,
          height: this.#c.height,
          viewportInsets: {
            ...this.#l
          }
        };
      if (!(popcornElectronPresentationPanelValue431.width === popcornElectronPresentationPanelValue432.width && popcornElectronPresentationPanelValue431.height === popcornElectronPresentationPanelValue432.height && popcornElectronPresentationPanelValue431.viewportInsets.left === popcornElectronPresentationPanelValue432.viewportInsets.left && popcornElectronPresentationPanelValue431.viewportInsets.top === popcornElectronPresentationPanelValue432.viewportInsets.top && popcornElectronPresentationPanelValue431.viewportInsets.right === popcornElectronPresentationPanelValue432.viewportInsets.right && popcornElectronPresentationPanelValue431.viewportInsets.bottom === popcornElectronPresentationPanelValue432.viewportInsets.bottom)) {
        this.#p = popcornElectronPresentationPanelValue432;
        for (let popcornElectronPresentationPanelValue618 of this.#f) popcornElectronPresentationPanelValue618();
      }
    }
    #v() {
      return this.#u.selectedSlideFrame;
    }
    #y(popcornElectronPresentationPanelParam22, popcornElectronPresentationPanelParam23, popcornElectronPresentationPanelParam24) {
      let popcornElectronPresentationPanelValue324 = popcornElectronPresentationPanelParam23.selectedSlideFrame;
      if (!popcornElectronPresentationPanelValue324 || this.#c.width <= 0 || this.#c.height <= 0) return;
      let popcornElectronPresentationPanelValue325 = popcornElectronPresentationPanelParam24?.viewportChanged ?? false,
        popcornElectronPresentationPanelValue326 = {
          width: this.#c.width,
          height: this.#c.height
        };
      if (popcornElectronPresentationPanelValue325 && this.#s) {
        this.#e.setCamera(Math.abs(popcornElectronPresentationPanelParam23.zoom - 1) < 1e-4 ? $({
          viewport: popcornElectronPresentationPanelValue326,
          frame: popcornElectronPresentationPanelValue324,
          zoomFactor: popcornElectronPresentationPanelParam23.zoom,
          viewportInsets: this.#l
        }) : popcornElectronPresentationPanelHelper35({
          previousViewport: popcornElectronPresentationPanelParam24?.previousViewport ?? popcornElectronPresentationPanelValue326,
          nextViewport: popcornElectronPresentationPanelValue326,
          frame: popcornElectronPresentationPanelValue324,
          camera: this.#e.getCamera(),
          viewportInsets: this.#l
        }));
        return;
      }
      if (popcornElectronPresentationPanelParam23.camera) {
        let popcornElectronPresentationPanelValue443 = $({
            viewport: popcornElectronPresentationPanelValue326,
            frame: popcornElectronPresentationPanelValue324,
            zoomFactor: popcornElectronPresentationPanelParam23.zoom,
            viewportInsets: this.#l
          }).k,
          popcornElectronPresentationPanelValue444 = popcornElectronPresentationPanelHelper38({
            camera: popcornElectronPresentationPanelParam23.camera,
            viewport: popcornElectronPresentationPanelValue326,
            frame: popcornElectronPresentationPanelValue324,
            viewportInsets: this.#l
          });
        this.#e.setCamera(popcornElectronPresentationPanelParam23.camera);
        (!this.#s || Math.abs(popcornElectronPresentationPanelParam22.zoom - popcornElectronPresentationPanelParam23.zoom) > 1e-4) && Math.abs(popcornElectronPresentationPanelValue444 - popcornElectronPresentationPanelParam23.zoom) > 1e-4 && this.#e.zoomTo(popcornElectronPresentationPanelValue443, {
          settled: true
        });
        this.#s = true;
        return;
      }
      (!this.#s || popcornElectronPresentationPanelParam22.selectedSlideIdx !== popcornElectronPresentationPanelParam23.selectedSlideIdx || popcornElectronPresentationPanelParam22.selectedSlideFrame?.width !== popcornElectronPresentationPanelParam23.selectedSlideFrame?.width || popcornElectronPresentationPanelParam22.selectedSlideFrame?.height !== popcornElectronPresentationPanelParam23.selectedSlideFrame?.height) && (this.#e.setCamera($({
        viewport: popcornElectronPresentationPanelValue326,
        frame: popcornElectronPresentationPanelValue324,
        zoomFactor: popcornElectronPresentationPanelParam23.zoom,
        viewportInsets: this.#l
      }), {
        settled: true
      }), this.#s = true);
    }
  },
  popcornElectronPresentationPanelValue28 = [0.25, 0.5, 1, 1.5, 2];
function popcornElectronPresentationPanelHelper83(popcornElectronPresentationPanelParam105, popcornElectronPresentationPanelParam106) {
  return popcornElectronPresentationPanelParam106 === "floating" ? "w-full flex-row gap-2 @[749px]/presentation-editor:w-fit" : popcornElectronPresentationPanelParam105 === "left" ? "w-fit flex-row" : popcornElectronPresentationPanelParam105 === "bottom" ? "w-fit flex-col" : "w-fit flex-col @[749px]/presentation-editor:flex-row";
}
function popcornElectronPresentationPanelHelper84(popcornElectronPresentationPanelParam169, popcornElectronPresentationPanelParam170) {
  return popcornElectronPresentationPanelParam170 === "floating" || popcornElectronPresentationPanelParam169 === "left" ? "block" : popcornElectronPresentationPanelParam169 === "bottom" ? "hidden" : "hidden @[749px]/presentation-editor:block";
}
function popcornElectronPresentationPanelHelper85(popcornElectronPresentationPanelParam36, popcornElectronPresentationPanelParam37) {
  return popcornElectronPresentationPanelParam37 === "floating" ? "w-full flex-col items-start gap-2 @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]" : popcornElectronPresentationPanelParam36 === "left" ? "h-fit min-h-full w-full flex-col items-center gap-2.5 justify-[safe_center]" : popcornElectronPresentationPanelParam36 === "bottom" ? "w-fit gap-6" : "w-fit gap-6 @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]";
}
function popcornElectronPresentationPanelHelper86(popcornElectronPresentationPanelParam289) {
  return popcornElectronPresentationPanelParam289 === "floating" ? "w-full" : "w-40";
}
function popcornElectronPresentationPanelHelper87(popcornElectronPresentationPanelParam196) {
  return popcornElectronPresentationPanelParam196 === "floating" ? "shrink-0 pt-0.5 font-normal tabular-nums" : "pt-0.5 text-sm font-semibold";
}
var popcornElectronPresentationPanelValue30 = {
    width: "94px"
  },
  popcornElectronPresentationPanelValue31 = {
    width: "18px",
    minWidth: "18px",
    fontSize: "11px",
    lineHeight: "14px"
  },
  popcornElectronPresentationPanelValue32 = {
    borderRadius: "8px",
    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.05)"
  },
  popcornElectronPresentationPanelValue35 = ["0px 2px 8px 0px rgba(2, 133, 255, 0.16)", "0px 4px 16px 0px rgba(0, 0, 0, 0.05)"].join(", "),
  popcornElectronPresentationPanelValue37 = {
    ...popcornElectronPresentationPanelValue32,
    borderColor: "var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))"
  },
  popcornElectronPresentationPanelValue38 = {
    borderRadius: "16px",
    border: "1px solid var(--color-token-border-default, rgba(13, 13, 13, 0.1))",
    backgroundColor: "var(--color-token-bg-secondary, rgba(250, 250, 250, 0.9))",
    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)"
  };
function popcornElectronPresentationPanelHelper88(popcornElectronPresentationPanelParam259, popcornElectronPresentationPanelParam260) {
  return popcornElectronPresentationPanelParam259 <= 0 ? 0 : popcornElectronPresentationPanelParam259 + 40 + (popcornElectronPresentationPanelParam260 === "codex" ? 0 : 11);
}
function popcornElectronPresentationPanelHelper89(popcornElectronPresentationPanelParam214, popcornElectronPresentationPanelParam215, popcornElectronPresentationPanelParam216) {
  let popcornElectronPresentationPanelValue596 = [...popcornElectronPresentationPanelParam214],
    [popcornElectronPresentationPanelValue597] = popcornElectronPresentationPanelValue596.splice(popcornElectronPresentationPanelParam215, 1);
  return popcornElectronPresentationPanelValue597 == null || popcornElectronPresentationPanelValue596.splice(popcornElectronPresentationPanelParam216, 0, popcornElectronPresentationPanelValue597), popcornElectronPresentationPanelValue596;
}
function popcornElectronPresentationPanelHelper90({
  controller,
  plugins = [],
  slideThumbnailPlacement = "responsive",
  title = "presentation.pptx",
  fileMenuContent,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  onClose,
  renderSlideThumbnailOverlay,
  className,
  enablePageNavigation,
  theme = "web",
  isEditing = true,
  hideSpeakerNotes = false,
  reviewTools: popcornElectronPresentationPanelParam1,
  onHyperlinkClick,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  commentThreadsEnabled = true
}) {
  let popcornElectronPresentationPanelValue127 = _remoteTextEditSessionM(controller, React.useCallback(() => popcornElectronPresentationPanelHelper26(), []));
  if (!popcornElectronPresentationPanelValue127) return null;
  let popcornElectronPresentationPanelValue128 = popcornElectronPresentationPanelHelper47(popcornElectronPresentationPanelValue127),
    {
      panels,
      stageOverlays
    } = React.useMemo(() => popcornElectronPresentationPanelHelper27(plugins), [plugins]),
    popcornElectronPresentationPanelValue129 = annotationsEnabled && popcornElectronPresentationPanelParam1?.annotation?.enabled !== false,
    [popcornElectronPresentationPanelValue130, popcornElectronPresentationPanelValue131] = React.useState(false),
    popcornElectronPresentationPanelValue132 = drawingAnnotationsEnabled && popcornElectronPresentationPanelParam1?.drawing?.enabled !== false,
    [popcornElectronPresentationPanelValue133, popcornElectronPresentationPanelValue134] = React.useState(false),
    [popcornElectronPresentationPanelValue135, be] = React.useState(0),
    popcornElectronPresentationPanelValue136 = React.useMemo(() => new popcornElectronPresentationPanelValue22(), []);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue129 || popcornElectronPresentationPanelValue131(false);
  }, [popcornElectronPresentationPanelValue129]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue132 || popcornElectronPresentationPanelValue134(false);
  }, [popcornElectronPresentationPanelValue132]);
  React.useEffect(() => {
    !popcornElectronPresentationPanelValue130 || !popcornElectronPresentationPanelValue129 || (popcornElectronPresentationPanelValue127.clearElementSelection(), popcornElectronPresentationPanelValue127.setHoveredElementId(null));
  }, [popcornElectronPresentationPanelValue129, popcornElectronPresentationPanelValue130, popcornElectronPresentationPanelValue127]);
  React.useEffect(() => {
    !popcornElectronPresentationPanelValue133 || !popcornElectronPresentationPanelValue132 || (popcornElectronPresentationPanelValue127.clearElementSelection(), popcornElectronPresentationPanelValue127.setHoveredElementId(null));
  }, [popcornElectronPresentationPanelValue127, popcornElectronPresentationPanelValue132, popcornElectronPresentationPanelValue133]);
  React.useEffect(() => {
    if (!popcornElectronPresentationPanelValue130) return;
    let popcornElectronPresentationPanelValue473 = event => {
      event.key === "Escape" && (event.target instanceof HTMLElement && event.target.closest("[data-testid='popcorn-annotation-editor']") || popcornElectronPresentationPanelValue131(false));
    };
    return window.addEventListener("keydown", popcornElectronPresentationPanelValue473, true), () => {
      window.removeEventListener("keydown", popcornElectronPresentationPanelValue473, true);
    };
  }, [popcornElectronPresentationPanelValue130]);
  React.useEffect(() => {
    if (!popcornElectronPresentationPanelValue133) return;
    let popcornElectronPresentationPanelValue538 = event => {
      event.key === "Escape" && popcornElectronPresentationPanelValue134(false);
    };
    return window.addEventListener("keydown", popcornElectronPresentationPanelValue538, true), () => {
      window.removeEventListener("keydown", popcornElectronPresentationPanelValue538, true);
    };
  }, [popcornElectronPresentationPanelValue133]);
  let [popcornElectronPresentationPanelValue137, popcornElectronPresentationPanelValue138] = React.useState(() => Object.fromEntries(panels.map(item => [item.id, item.defaultOpen ?? false]))),
    [popcornElectronPresentationPanelValue139, popcornElectronPresentationPanelValue140] = React.useState(104),
    [popcornElectronPresentationPanelValue141, popcornElectronPresentationPanelValue142] = React.useState(() => Object.fromEntries(popcornElectronPresentationPanelValue128.slideIds.map(item => [item, null]))),
    [popcornElectronPresentationPanelValue143, popcornElectronPresentationPanelValue144] = React.useState(() => Object.fromEntries(popcornElectronPresentationPanelValue128.slideIds.map(item => [item, null]))),
    [popcornElectronPresentationPanelValue145, popcornElectronPresentationPanelValue146] = React.useState(() => popcornElectronPresentationPanelValue128.slideIds),
    [popcornElectronPresentationPanelValue147, popcornElectronPresentationPanelValue148] = React.useState(null),
    [popcornElectronPresentationPanelValue149, popcornElectronPresentationPanelValue150] = React.useState(false),
    [popcornElectronPresentationPanelValue151, popcornElectronPresentationPanelValue152] = React.useState(false),
    [popcornElectronPresentationPanelValue153, popcornElectronPresentationPanelValue154] = React.useState(false),
    [popcornElectronPresentationPanelValue155, popcornElectronPresentationPanelValue156] = React.useState(false),
    [popcornElectronPresentationPanelValue157, popcornElectronPresentationPanelValue158] = React.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(min-width: 900px)").matches : false),
    popcornElectronPresentationPanelValue159 = React.useRef(null),
    popcornElectronPresentationPanelValue160 = React.useRef(null),
    popcornElectronPresentationPanelValue161 = React.useRef([]),
    popcornElectronPresentationPanelValue162 = React.useRef([]),
    popcornElectronPresentationPanelValue163 = React.useRef(null),
    popcornElectronPresentationPanelValue164 = React.useRef(new Set()),
    popcornElectronPresentationPanelValue165 = React.useRef(popcornElectronPresentationPanelValue141),
    popcornElectronPresentationPanelValue166 = React.useRef(popcornElectronPresentationPanelValue143),
    popcornElectronPresentationPanelValue167 = React.useRef(popcornElectronPresentationPanelValue145),
    popcornElectronPresentationPanelValue168 = popcornElectronPresentationPanelImport7(popcornElectronPresentationPanelImport6(popcornElectronPresentationPanelImport8, {
      activationConstraint: {
        distance: 4
      }
    })),
    popcornElectronPresentationPanelValue169 = React.useMemo(() => [restrictToFirstScrollableAncestor], []),
    popcornElectronPresentationPanelValue170 = slideThumbnailPlacement === "left",
    popcornElectronPresentationPanelValue171 = slideThumbnailPlacement === "bottom",
    popcornElectronPresentationPanelValue172 = theme === "codex",
    popcornElectronPresentationPanelValue173 = slideThumbnailPlacement === "responsive",
    popcornElectronPresentationPanelValue174 = popcornElectronPresentationPanelValue172 && popcornElectronPresentationPanelValue173,
    popcornElectronPresentationPanelValue175 = enablePageNavigation ?? popcornElectronPresentationPanelValue172,
    popcornElectronPresentationPanelValue176 = popcornElectronPresentationPanelValue151 && (popcornElectronPresentationPanelValue170 || popcornElectronPresentationPanelValue173 || popcornElectronPresentationPanelValue174),
    popcornElectronPresentationPanelValue177 = !hideSpeakerNotes && popcornElectronPresentationPanelValue157 && popcornElectronPresentationPanelValue139 > 0,
    popcornElectronPresentationPanelValue178 = React.useMemo(() => ({
      left: popcornElectronPresentationPanelValue176 ? 220 : 0,
      top: 0,
      right: 0,
      bottom: popcornElectronPresentationPanelValue177 ? popcornElectronPresentationPanelHelper88(popcornElectronPresentationPanelValue139, theme) : 0
    }), [popcornElectronPresentationPanelValue139, popcornElectronPresentationPanelValue177, popcornElectronPresentationPanelValue176, theme]);
  React.useEffect(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    let popcornElectronPresentationPanelValue445 = window.matchMedia("(min-width: 900px)"),
      popcornElectronPresentationPanelValue446 = popcornElectronPresentationPanelValue445,
      popcornElectronPresentationPanelValue447 = () => {
        popcornElectronPresentationPanelValue158(popcornElectronPresentationPanelParam334 => popcornElectronPresentationPanelParam334 === popcornElectronPresentationPanelValue445.matches ? popcornElectronPresentationPanelParam334 : popcornElectronPresentationPanelValue445.matches);
      };
    return popcornElectronPresentationPanelValue447(), typeof popcornElectronPresentationPanelValue445.addEventListener == "function" ? popcornElectronPresentationPanelValue445.addEventListener("change", popcornElectronPresentationPanelValue447) : popcornElectronPresentationPanelValue446.addListener?.(popcornElectronPresentationPanelValue447), () => {
      typeof popcornElectronPresentationPanelValue445.removeEventListener == "function" ? popcornElectronPresentationPanelValue445.removeEventListener("change", popcornElectronPresentationPanelValue447) : popcornElectronPresentationPanelValue446.removeListener?.(popcornElectronPresentationPanelValue447);
    };
  }, []);
  popcornElectronSurfaceStyleS(() => {
    let popcornElectronPresentationPanelValue355 = popcornElectronPresentationPanelValue159.current;
    if (!popcornElectronPresentationPanelValue355) return;
    let popcornElectronPresentationPanelValue356 = null,
      popcornElectronPresentationPanelValue357 = popcornElectronPresentationPanelParam142 => {
        let popcornElectronPresentationPanelValue566 = popcornElectronPresentationPanelParam142 >= 749,
          popcornElectronPresentationPanelValue567 = popcornElectronPresentationPanelValue173 && popcornElectronPresentationPanelParam142 > 0 && popcornElectronPresentationPanelParam142 <= 688;
        popcornElectronPresentationPanelValue152(popcornElectronPresentationPanelParam345 => popcornElectronPresentationPanelParam345 === popcornElectronPresentationPanelValue566 ? popcornElectronPresentationPanelParam345 : popcornElectronPresentationPanelValue566);
        popcornElectronPresentationPanelValue154(popcornElectronPresentationPanelParam355 => popcornElectronPresentationPanelParam355 || true);
        popcornElectronPresentationPanelValue156(popcornElectronPresentationPanelParam346 => popcornElectronPresentationPanelParam346 === popcornElectronPresentationPanelValue567 ? popcornElectronPresentationPanelParam346 : popcornElectronPresentationPanelValue567);
      };
    if (popcornElectronPresentationPanelValue357(popcornElectronPresentationPanelValue355.clientWidth), typeof window < "u" && typeof window.requestAnimationFrame == "function" && (popcornElectronPresentationPanelValue356 = window.requestAnimationFrame(() => {
      popcornElectronPresentationPanelValue357(popcornElectronPresentationPanelValue355.clientWidth);
    })), typeof ResizeObserver > "u") return () => {
      popcornElectronPresentationPanelValue356 != null && typeof window.cancelAnimationFrame == "function" && window.cancelAnimationFrame(popcornElectronPresentationPanelValue356);
    };
    let popcornElectronPresentationPanelValue358 = new ResizeObserver(popcornElectronPresentationPanelParam156 => {
      let popcornElectronPresentationPanelValue576 = popcornElectronPresentationPanelParam156[0];
      popcornElectronPresentationPanelValue357(popcornElectronPresentationPanelValue576?.contentRect.width && popcornElectronPresentationPanelValue576.contentRect.width > 0 ? popcornElectronPresentationPanelValue576.contentRect.width : popcornElectronPresentationPanelValue355.clientWidth);
    });
    return popcornElectronPresentationPanelValue358.observe(popcornElectronPresentationPanelValue355), () => {
      popcornElectronPresentationPanelValue356 != null && typeof window.cancelAnimationFrame == "function" && window.cancelAnimationFrame(popcornElectronPresentationPanelValue356);
      popcornElectronPresentationPanelValue358.disconnect();
    };
  }, [slideThumbnailPlacement, popcornElectronPresentationPanelValue173]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue138(popcornElectronPresentationPanelParam69 => {
      let popcornElectronPresentationPanelValue490 = {},
        popcornElectronPresentationPanelValue491 = false;
      for (let popcornElectronPresentationPanelValue585 of panels) {
        let popcornElectronPresentationPanelValue590 = popcornElectronPresentationPanelParam69[popcornElectronPresentationPanelValue585.id] ?? popcornElectronPresentationPanelValue585.defaultOpen ?? false;
        popcornElectronPresentationPanelValue490[popcornElectronPresentationPanelValue585.id] = popcornElectronPresentationPanelValue590;
        Object.is(popcornElectronPresentationPanelParam69[popcornElectronPresentationPanelValue585.id], popcornElectronPresentationPanelValue590) || (popcornElectronPresentationPanelValue491 = true);
      }
      for (let popcornElectronPresentationPanelValue600 of Object.keys(popcornElectronPresentationPanelParam69)) if (!(popcornElectronPresentationPanelValue600 in popcornElectronPresentationPanelValue490)) {
        popcornElectronPresentationPanelValue491 = true;
        break;
      }
      return popcornElectronPresentationPanelValue491 ? popcornElectronPresentationPanelValue490 : popcornElectronPresentationPanelParam69;
    });
  }, [panels]);
  let popcornElectronPresentationPanelValue179 = React.useMemo(() => ({
    isPanelOpen: popcornElectronPresentationPanelParam349 => popcornElectronPresentationPanelValue137[popcornElectronPresentationPanelParam349] ?? false,
    openPanel: popcornElectronPresentationPanelParam312 => {
      popcornElectronPresentationPanelValue138(popcornElectronPresentationPanelParam343 => ({
        ...popcornElectronPresentationPanelParam343,
        [popcornElectronPresentationPanelParam312]: true
      }));
    },
    closePanel: popcornElectronPresentationPanelParam313 => {
      popcornElectronPresentationPanelValue138(popcornElectronPresentationPanelParam344 => ({
        ...popcornElectronPresentationPanelParam344,
        [popcornElectronPresentationPanelParam313]: false
      }));
    },
    togglePanel: popcornElectronPresentationPanelParam284 => {
      popcornElectronPresentationPanelValue138(popcornElectronPresentationPanelParam337 => ({
        ...popcornElectronPresentationPanelParam337,
        [popcornElectronPresentationPanelParam284]: !(popcornElectronPresentationPanelParam337[popcornElectronPresentationPanelParam284] ?? false)
      }));
    }
  }), [popcornElectronPresentationPanelValue137]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue165.current = popcornElectronPresentationPanelValue141;
    popcornElectronPresentationPanelValue166.current = popcornElectronPresentationPanelValue143;
  }, [popcornElectronPresentationPanelValue143, popcornElectronPresentationPanelValue141]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue167.current = popcornElectronPresentationPanelValue145;
  }, [popcornElectronPresentationPanelValue145]);
  React.useEffect(() => {
    popcornElectronPresentationPanelValue146(popcornElectronPresentationPanelValue128.slideIds);
    popcornElectronPresentationPanelValue142(popcornElectronPresentationPanelParam211 => {
      let popcornElectronPresentationPanelValue592 = {};
      for (let popcornElectronPresentationPanelValue614 of popcornElectronPresentationPanelValue128.slideIds) popcornElectronPresentationPanelValue592[popcornElectronPresentationPanelValue614] = popcornElectronPresentationPanelParam211[popcornElectronPresentationPanelValue614] ?? null;
      return popcornElectronPresentationPanelValue592;
    });
    popcornElectronPresentationPanelValue144(popcornElectronPresentationPanelParam212 => {
      let popcornElectronPresentationPanelValue593 = {};
      for (let popcornElectronPresentationPanelValue615 of popcornElectronPresentationPanelValue128.slideIds) popcornElectronPresentationPanelValue593[popcornElectronPresentationPanelValue615] = popcornElectronPresentationPanelParam212[popcornElectronPresentationPanelValue615] ?? null;
      return popcornElectronPresentationPanelValue593;
    });
  }, [popcornElectronPresentationPanelValue128.slideIds]);
  let popcornElectronPresentationPanelValue180 = React.useMemo(() => Object.fromEntries(popcornElectronPresentationPanelValue128.slideIds.map((item, index) => [item, popcornElectronPresentationPanelValue128.slideLabels[index] ?? `Slide ${index + 1}`])), [popcornElectronPresentationPanelValue128.slideIds, popcornElectronPresentationPanelValue128.slideLabels]),
    popcornElectronPresentationPanelValue181 = React.useMemo(() => Object.fromEntries(popcornElectronPresentationPanelValue128.slideIds.map((item, index) => [item, index])), [popcornElectronPresentationPanelValue128.slideIds]),
    $e = popcornElectronPresentationPanelValue128.slideIds[popcornElectronPresentationPanelValue128.selectedSlideIdx] ?? null,
    popcornElectronPresentationPanelValue182 = popcornElectronPresentationPanelValue128.fitScale ?? (popcornElectronPresentationPanelValue128.slideRect && popcornElectronPresentationPanelValue128.zoom > 0 ? popcornElectronPresentationPanelValue128.slideRect.scale / popcornElectronPresentationPanelValue128.zoom : null),
    popcornElectronPresentationPanelValue183 = popcornElectronPresentationPanelValue182 ? popcornElectronPresentationPanelHelper32(popcornElectronPresentationPanelValue182) : null,
    popcornElectronPresentationPanelValue184 = popcornElectronPresentationPanelValue128.slideRect?.scale ?? popcornElectronPresentationPanelHelper32(popcornElectronPresentationPanelValue182 ? popcornElectronPresentationPanelValue182 * popcornElectronPresentationPanelValue128.zoom : popcornElectronPresentationPanelValue128.zoom),
    popcornElectronPresentationPanelValue185 = popcornElectronPresentationPanelValue183 != null && Math.abs(popcornElectronPresentationPanelValue128.zoom - 1) < 1e-4,
    popcornElectronPresentationPanelValue186 = popcornElectronPresentationPanelValue173 && (!popcornElectronPresentationPanelValue153 || popcornElectronPresentationPanelValue155),
    popcornElectronPresentationPanelValue187 = !popcornElectronPresentationPanelValue186,
    at = popcornElectronPresentationPanelValue175 && !popcornElectronPresentationPanelValue186,
    popcornElectronPresentationPanelValue188 = popcornElectronPresentationPanelParam202 => {
      let popcornElectronPresentationPanelValue589 = popcornElectronPresentationPanelHelper32(popcornElectronPresentationPanelParam202);
      if (popcornElectronPresentationPanelValue182 && popcornElectronPresentationPanelValue182 > 0) {
        popcornElectronPresentationPanelValue127.setZoom(popcornElectronPresentationPanelValue589 / popcornElectronPresentationPanelValue182);
        return;
      }
      popcornElectronPresentationPanelValue127.setZoom(popcornElectronPresentationPanelValue589);
    },
    popcornElectronPresentationPanelValue189 = popcornElectronPresentationPanelValue183 != null && zoomToFitLabel != null ? {
      label: zoomToFitLabel,
      selected: popcornElectronPresentationPanelValue185,
      onSelect: () => {
        popcornElectronPresentationPanelValue136.fitToViewport(1);
      }
    } : undefined,
    popcornElectronPresentationPanelValue190 = popcornElectronPresentationPanelValue187 ? renderHeaderZoomControl?.({
      fitOption: popcornElectronPresentationPanelValue189,
      onZoomPercentChange: popcornElectronPresentationPanelParam319 => {
        popcornElectronPresentationPanelValue188(popcornElectronPresentationPanelParam319 / 100);
      },
      triggerTestId: "popcorn-presentation-zoom-select",
      zoomPercent: Math.round(popcornElectronPresentationPanelValue184 * 100)
    }) ?? React.createElement(remoteTextEditSessionH, {
      zoom: popcornElectronPresentationPanelValue184,
      onZoomChange: popcornElectronPresentationPanelValue188,
      options: popcornElectronPresentationPanelValue28,
      fitOption: popcornElectronPresentationPanelValue189,
      testId: "popcorn-presentation-zoom-select"
    }) : null,
    popcornElectronPresentationPanelValue191 = React.useCallback(popcornElectronPresentationPanelParam302 => {
      popcornElectronPresentationPanelParam302 >= 0 && popcornElectronPresentationPanelValue127.setSelectedSlideIdx(popcornElectronPresentationPanelParam302);
    }, [popcornElectronPresentationPanelValue127]),
    popcornElectronPresentationPanelValue192 = React.useCallback(popcornElectronPresentationPanelParam314 => {
      popcornElectronPresentationPanelParam314 >= 0 && popcornElectronPresentationPanelValue127.deleteSlide(popcornElectronPresentationPanelParam314);
    }, [popcornElectronPresentationPanelValue127]),
    popcornElectronPresentationPanelValue193 = React.useCallback((popcornElectronPresentationPanelParam240, popcornElectronPresentationPanelParam241, popcornElectronPresentationPanelParam242) => {
      popcornElectronPresentationPanelValue161.current[popcornElectronPresentationPanelParam240] = popcornElectronPresentationPanelParam241;
      popcornElectronPresentationPanelParam241 && popcornElectronPresentationPanelValue163.current && popcornElectronPresentationPanelParam242 && popcornElectronPresentationPanelValue163.current.observe(popcornElectronPresentationPanelParam241);
    }, []),
    popcornElectronPresentationPanelValue194 = React.useCallback(() => {}, []),
    popcornElectronPresentationPanelValue195 = React.useCallback(() => {
      popcornElectronPresentationPanelValue127.addSlide();
    }, [popcornElectronPresentationPanelValue127]),
    popcornElectronPresentationPanelValue196 = React.useCallback(async (popcornElectronPresentationPanelParam34, popcornElectronPresentationPanelParam35) => {
      if (popcornElectronPresentationPanelParam34 < 0 || popcornElectronPresentationPanelParam34 >= popcornElectronPresentationPanelValue127.getSnapshot().slideCount) return;
      let popcornElectronPresentationPanelValue386 = popcornElectronPresentationPanelValue127.getSnapshot().slideIds[popcornElectronPresentationPanelParam34];
      if (!popcornElectronPresentationPanelValue386) return;
      let popcornElectronPresentationPanelValue387 = popcornElectronPresentationPanelParam35?.cacheKind === "stacked-page",
        popcornElectronPresentationPanelValue388 = popcornElectronPresentationPanelValue387 ? popcornElectronPresentationPanelValue166.current[popcornElectronPresentationPanelValue386] : popcornElectronPresentationPanelValue165.current[popcornElectronPresentationPanelValue386],
        popcornElectronPresentationPanelValue389 = `${popcornElectronPresentationPanelValue387 ? "stacked-page" : "rail"}:${popcornElectronPresentationPanelValue386}`;
      if (!(!popcornElectronPresentationPanelParam35?.force && popcornElectronPresentationPanelValue388 != null || popcornElectronPresentationPanelValue164.current.has(popcornElectronPresentationPanelValue389) || popcornElectronPresentationPanelParam34 < 0 || popcornElectronPresentationPanelParam34 >= popcornElectronPresentationPanelValue127.getSnapshot().slideCount)) {
        popcornElectronPresentationPanelValue164.current.add(popcornElectronPresentationPanelValue389);
        try {
          await popcornElectronPresentationPanelHelper1();
          let popcornElectronPresentationPanelValue550 = await popcornElectronPresentationPanelValue127.requestSlideThumbnail(popcornElectronPresentationPanelParam34, popcornElectronPresentationPanelValue387 ? {
            cssMaxPx: 960
          } : undefined);
          (popcornElectronPresentationPanelValue387 ? popcornElectronPresentationPanelValue144 : popcornElectronPresentationPanelValue142)(popcornElectronPresentationPanelParam327 => popcornElectronPresentationPanelParam327[popcornElectronPresentationPanelValue386] === popcornElectronPresentationPanelValue550 ? popcornElectronPresentationPanelParam327 : {
            ...popcornElectronPresentationPanelParam327,
            [popcornElectronPresentationPanelValue386]: popcornElectronPresentationPanelValue550
          });
        } finally {
          popcornElectronPresentationPanelValue164.current.delete(popcornElectronPresentationPanelValue389);
        }
      }
    }, [popcornElectronPresentationPanelValue127]);
  React.useEffect(() => {
    let popcornElectronPresentationPanelValue509 = popcornElectronPresentationPanelValue128.slideIds[popcornElectronPresentationPanelValue128.selectedSlideIdx];
    popcornElectronPresentationPanelValue509 && (popcornElectronPresentationPanelValue164.current.delete(`rail:${popcornElectronPresentationPanelValue509}`), popcornElectronPresentationPanelValue164.current.delete(`stacked-page:${popcornElectronPresentationPanelValue509}`));
    popcornElectronPresentationPanelValue196(popcornElectronPresentationPanelValue128.selectedSlideIdx, {
      force: true
    });
    popcornElectronPresentationPanelValue509 && popcornElectronPresentationPanelValue166.current[popcornElectronPresentationPanelValue509] != null && popcornElectronPresentationPanelValue196(popcornElectronPresentationPanelValue128.selectedSlideIdx, {
      cacheKind: "stacked-page",
      force: true
    });
  }, [popcornElectronPresentationPanelValue196, popcornElectronPresentationPanelValue128.presentationVersion, popcornElectronPresentationPanelValue128.selectedSlideIdx, popcornElectronPresentationPanelValue128.slideIds]);
  React.useEffect(() => {
    if (!(typeof IntersectionObserver > "u")) {
      popcornElectronPresentationPanelValue163.current?.disconnect();
      popcornElectronPresentationPanelValue163.current = new IntersectionObserver(popcornElectronPresentationPanelParam40 => {
        for (let popcornElectronPresentationPanelValue410 of popcornElectronPresentationPanelParam40) {
          let popcornElectronPresentationPanelValue412 = popcornElectronPresentationPanelValue410.target.getAttribute("data-index");
          if (!popcornElectronPresentationPanelValue410.isIntersecting || popcornElectronPresentationPanelValue412 == null) continue;
          let popcornElectronPresentationPanelValue413 = Number(popcornElectronPresentationPanelValue412);
          if (!Number.isFinite(popcornElectronPresentationPanelValue413)) continue;
          let popcornElectronPresentationPanelValue414 = popcornElectronPresentationPanelValue410.target.getAttribute("data-thumbnail-cache-kind") === "stacked-page" ? "stacked-page" : "rail",
            popcornElectronPresentationPanelValue415 = popcornElectronPresentationPanelValue414 === "stacked-page";
          popcornElectronPresentationPanelValue196(popcornElectronPresentationPanelValue413, {
            cacheKind: popcornElectronPresentationPanelValue414,
            force: popcornElectronPresentationPanelValue415
          });
          popcornElectronPresentationPanelValue196(popcornElectronPresentationPanelValue413 + 1, {
            cacheKind: popcornElectronPresentationPanelValue414,
            force: popcornElectronPresentationPanelValue415
          });
          popcornElectronPresentationPanelValue163.current?.unobserve(popcornElectronPresentationPanelValue410.target);
        }
      }, {
        root: popcornElectronPresentationPanelValue159.current,
        rootMargin: "200px",
        threshold: 0.05
      });
      for (let popcornElectronPresentationPanelValue611 of [...popcornElectronPresentationPanelValue161.current, ...popcornElectronPresentationPanelValue162.current]) popcornElectronPresentationPanelValue611 && popcornElectronPresentationPanelValue163.current.observe(popcornElectronPresentationPanelValue611);
      return () => {
        popcornElectronPresentationPanelValue163.current?.disconnect();
      };
    }
  }, [popcornElectronPresentationPanelValue196, popcornElectronPresentationPanelValue128.presentationVersion, popcornElectronPresentationPanelValue128.slideCount]);
  let _t = React.useCallback(event => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      let popcornElectronPresentationPanelValue361 = 0;
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          popcornElectronPresentationPanelValue361 = -1;
          break;
        case "ArrowDown":
        case "ArrowRight":
          popcornElectronPresentationPanelValue361 = 1;
          break;
        default:
          return;
      }
      let popcornElectronPresentationPanelValue362 = popcornElectronPresentationPanelValue128.selectedSlideIdx,
        popcornElectronPresentationPanelValue363 = popcornElectronPresentationPanelValue128.slideIds.length - 1,
        popcornElectronPresentationPanelValue364 = popcornElectronPresentationPanelValue361 < 0 ? Math.max(0, popcornElectronPresentationPanelValue362 - 1) : Math.min(popcornElectronPresentationPanelValue363, popcornElectronPresentationPanelValue362 + 1);
      if (popcornElectronPresentationPanelValue364 === popcornElectronPresentationPanelValue362) return;
      popcornElectronPresentationPanelValue127.setSelectedSlideIdx(popcornElectronPresentationPanelValue364);
      let popcornElectronPresentationPanelValue365 = event.currentTarget.classList.contains("popcorn-presentation-stacked-pages") ? popcornElectronPresentationPanelValue162.current[popcornElectronPresentationPanelValue364] : popcornElectronPresentationPanelValue161.current[popcornElectronPresentationPanelValue364];
      popcornElectronPresentationPanelValue365?.scrollIntoView?.({
        block: "nearest",
        inline: "nearest"
      });
      popcornElectronPresentationPanelValue365?.focus();
      event.preventDefault();
    }, [popcornElectronPresentationPanelValue127, popcornElectronPresentationPanelValue128.selectedSlideIdx, popcornElectronPresentationPanelValue128.slideIds.length]),
    popcornElectronPresentationPanelValue197 = React.useCallback(popcornElectronPresentationPanelParam268 => {
      popcornElectronPresentationPanelValue148(typeof popcornElectronPresentationPanelParam268.active.id == "string" ? popcornElectronPresentationPanelParam268.active.id : null);
    }, []),
    popcornElectronPresentationPanelValue198 = React.useCallback(() => {
      popcornElectronPresentationPanelValue146(popcornElectronPresentationPanelValue128.slideIds);
      popcornElectronPresentationPanelValue148(null);
    }, [popcornElectronPresentationPanelValue128.slideIds]),
    popcornElectronPresentationPanelValue199 = React.useCallback(popcornElectronPresentationPanelParam57 => {
      popcornElectronPresentationPanelValue148(null);
      let popcornElectronPresentationPanelValue468 = typeof popcornElectronPresentationPanelParam57.active.id == "string" ? popcornElectronPresentationPanelParam57.active.id : null,
        popcornElectronPresentationPanelValue469 = typeof popcornElectronPresentationPanelParam57.over?.id == "string" ? popcornElectronPresentationPanelParam57.over.id : null;
      if (!popcornElectronPresentationPanelValue468 || !popcornElectronPresentationPanelValue469 || popcornElectronPresentationPanelValue468 === popcornElectronPresentationPanelValue469) return;
      let popcornElectronPresentationPanelValue470 = popcornElectronPresentationPanelValue167.current,
        popcornElectronPresentationPanelValue471 = popcornElectronPresentationPanelValue470.indexOf(popcornElectronPresentationPanelValue468),
        popcornElectronPresentationPanelValue472 = popcornElectronPresentationPanelValue470.indexOf(popcornElectronPresentationPanelValue469);
      popcornElectronPresentationPanelValue471 < 0 || popcornElectronPresentationPanelValue472 < 0 || popcornElectronPresentationPanelValue471 === popcornElectronPresentationPanelValue472 || (popcornElectronPresentationPanelValue146(popcornElectronPresentationPanelParam350 => popcornElectronPresentationPanelHelper89(popcornElectronPresentationPanelParam350, popcornElectronPresentationPanelValue471, popcornElectronPresentationPanelValue472)), popcornElectronPresentationPanelValue127.moveSlide(popcornElectronPresentationPanelValue471, popcornElectronPresentationPanelValue472));
    }, [popcornElectronPresentationPanelValue127]),
    popcornElectronPresentationPanelValue200 = React.useCallback(event => {
      let popcornElectronPresentationPanelValue598 = event.relatedTarget;
      popcornElectronPresentationPanelValue598 instanceof Node && event.currentTarget.contains(popcornElectronPresentationPanelValue598) || popcornElectronPresentationPanelValue150(false);
    }, []),
    popcornElectronPresentationPanelValue201 = React.useCallback(event => {
      let popcornElectronPresentationPanelValue586 = event.relatedTarget;
      popcornElectronPresentationPanelValue586 instanceof Node && event.currentTarget.parentElement?.contains(popcornElectronPresentationPanelValue586) || popcornElectronPresentationPanelValue150(false);
    }, []),
    popcornElectronPresentationPanelValue202 = React.useCallback((popcornElectronPresentationPanelParam206, popcornElectronPresentationPanelParam207, popcornElectronPresentationPanelParam208) => {
      popcornElectronPresentationPanelValue162.current[popcornElectronPresentationPanelParam206] = popcornElectronPresentationPanelParam208;
      popcornElectronPresentationPanelParam208 && popcornElectronPresentationPanelValue163.current && popcornElectronPresentationPanelValue166.current[popcornElectronPresentationPanelParam207] == null && popcornElectronPresentationPanelValue163.current.observe(popcornElectronPresentationPanelParam208);
    }, []),
    $ = React.useCallback((popcornElectronPresentationPanelParam3, popcornElectronPresentationPanelParam4 = "default", popcornElectronPresentationPanelParam5) => {
      let popcornElectronPresentationPanelValue221 = popcornElectronPresentationPanelHelper85(popcornElectronPresentationPanelParam3, popcornElectronPresentationPanelParam4);
      return isEditing ? React.createElement(popcornElectronPresentationPanelImport11, {
        sensors: popcornElectronPresentationPanelValue168,
        collisionDetection: popcornElectronPresentationPanelImport5,
        modifiers: popcornElectronPresentationPanelValue169,
        onDragStart: popcornElectronPresentationPanelValue197,
        onDragCancel: popcornElectronPresentationPanelValue198,
        onDragEnd: popcornElectronPresentationPanelValue199
      }, [React.createElement(popcornElectronSurfaceStyleDollar, {
        items: popcornElectronPresentationPanelValue145,
        strategy: popcornElectronSurfaceStyleTt
      }, <div className={clsx("flex min-w-full justify-[safe_center]", popcornElectronPresentationPanelValue221)}>
                        {popcornElectronPresentationPanelValue145.map((item, index) => {
          let popcornElectronPresentationPanelValue359 = popcornElectronPresentationPanelValue141[item] ?? null;
          return React.createElement(popcornElectronPresentationPanelValue40, {
            slideId: item,
            index,
            snapshotIndex: popcornElectronPresentationPanelValue181[item] ?? -1,
            label: popcornElectronPresentationPanelValue180[item] ?? `Slide ${index + 1}`,
            thumbnail: popcornElectronPresentationPanelValue359,
            isSelected: item === $e,
            canDelete: popcornElectronPresentationPanelValue145.length > 1,
            onSelectSlide: popcornElectronPresentationPanelValue191,
            onDeleteSlide: popcornElectronPresentationPanelValue192,
            renderSlideThumbnailOverlay,
            slideThumbnailPlacement: popcornElectronPresentationPanelParam3,
            thumbnailSize: popcornElectronPresentationPanelParam4,
            slideButtonTestIdPrefix: popcornElectronPresentationPanelParam5?.slideButtonTestIdPrefix,
            onRegisterButtonRef: popcornElectronPresentationPanelValue193
          });
        })}
                        {React.createElement(popcornElectronPresentationPanelValue41, {
          onAddSlide: popcornElectronPresentationPanelValue195,
          slideThumbnailPlacement: popcornElectronPresentationPanelParam3,
          thumbnailSize: popcornElectronPresentationPanelParam4
        })}
                      </div>), React.createElement(popcornElectronPresentationPanelImport9, {
        modifiers: popcornElectronPresentationPanelValue169
      }, popcornElectronPresentationPanelValue147 ? React.createElement(popcornElectronPresentationPanelValue39, {
        slideId: popcornElectronPresentationPanelValue147,
        index: popcornElectronPresentationPanelValue145.indexOf(popcornElectronPresentationPanelValue147),
        label: popcornElectronPresentationPanelValue180[popcornElectronPresentationPanelValue147] ?? "Slide",
        thumbnail: popcornElectronPresentationPanelValue141[popcornElectronPresentationPanelValue147] ?? null,
        isSelected: popcornElectronPresentationPanelValue147 === $e,
        onSelect: popcornElectronPresentationPanelValue194,
        renderSlideThumbnailOverlay,
        slideThumbnailPlacement: popcornElectronPresentationPanelParam3,
        thumbnailSize: popcornElectronPresentationPanelParam4,
        slideButtonTestIdPrefix: popcornElectronPresentationPanelParam5?.slideButtonTestIdPrefix,
        isDragging: true
      }) : null)]) : <div className={clsx("flex min-w-full justify-[safe_center]", popcornElectronPresentationPanelValue221)}>
            {popcornElectronPresentationPanelValue145.map((item, index) => {
          let popcornElectronPresentationPanelValue392 = popcornElectronPresentationPanelValue141[item] ?? null,
            popcornElectronPresentationPanelValue393 = popcornElectronPresentationPanelValue181[item] ?? -1;
          return React.createElement(popcornElectronPresentationPanelValue39, {
            slideId: item,
            index,
            label: popcornElectronPresentationPanelValue180[item] ?? `Slide ${index + 1}`,
            thumbnail: popcornElectronPresentationPanelValue392,
            isSelected: item === $e,
            onSelect: () => popcornElectronPresentationPanelValue191(popcornElectronPresentationPanelValue393),
            renderSlideThumbnailOverlay,
            slideThumbnailPlacement: popcornElectronPresentationPanelParam3,
            thumbnailSize: popcornElectronPresentationPanelParam4,
            slideButtonTestIdPrefix: popcornElectronPresentationPanelParam5?.slideButtonTestIdPrefix,
            buttonRef: popcornElectronPresentationPanelParam273 => {
              popcornElectronPresentationPanelValue193(index, popcornElectronPresentationPanelParam273, popcornElectronPresentationPanelValue392 == null);
            }
          });
        })}
          </div>;
    }, [popcornElectronPresentationPanelValue147, popcornElectronPresentationPanelValue195, popcornElectronPresentationPanelValue192, popcornElectronPresentationPanelValue145, popcornElectronPresentationPanelValue169, popcornElectronPresentationPanelValue198, popcornElectronPresentationPanelValue199, popcornElectronPresentationPanelValue197, popcornElectronPresentationPanelValue194, isEditing, popcornElectronPresentationPanelValue193, renderSlideThumbnailOverlay, $e, popcornElectronPresentationPanelValue191, popcornElectronPresentationPanelValue168, popcornElectronPresentationPanelValue181, popcornElectronPresentationPanelValue180, popcornElectronPresentationPanelValue141]);
  return <div className={clsx("bg-token-bg-primary text-token-text-primary flex h-full min-h-0 flex-col overflow-hidden", className)}>
      {React.createElement(popcornElectronPresentationPanelHelper40, {
      controller: popcornElectronPresentationPanelValue127
    }, [React.createElement(remoteTextEditSessionG, {
      title,
      closeLabel: "Close presentation",
      onClose,
      testId: "popcorn-presentation-header",
      className: "border-b-0",
      compactTitle: popcornElectronPresentationPanelValue172,
      fileMenuContent,
      centeredContent: at ? <PopcornPageNumberNavigation currentIndex={popcornElectronPresentationPanelValue128.selectedSlideIdx} totalCount={popcornElectronPresentationPanelValue128.slideCount} itemLabel="slide" onChangeIndex={popcornElectronPresentationPanelParam340 => popcornElectronPresentationPanelValue127.setSelectedSlideIdx(popcornElectronPresentationPanelParam340)} testId="popcorn-presentation-page-navigation" /> : null,
      actions: <div className={clsx("flex items-center", popcornElectronPresentationPanelValue172 ? "gap-1" : "gap-2")}>
                  {popcornElectronPresentationPanelParam1?.annotation && popcornElectronPresentationPanelValue129 ? React.createElement(_popcornElectronSurfaceStyleJ, {
          active: popcornElectronPresentationPanelValue130,
          onClick: () => {
            let popcornElectronPresentationPanelValue584 = !popcornElectronPresentationPanelValue130;
            popcornElectronPresentationPanelValue584 && (popcornElectronPresentationPanelParam1?.annotation?.onModeEnabled?.(), popcornElectronPresentationPanelValue134(false));
            popcornElectronPresentationPanelValue131(popcornElectronPresentationPanelValue584);
          },
          testId: "popcorn-presentation-annotation-button"
        }) : null}
                  {popcornElectronPresentationPanelParam1?.drawing && popcornElectronPresentationPanelValue132 ? React.createElement(popcornElectronSurfaceStyleM, {
          active: popcornElectronPresentationPanelValue133,
          onClick: () => {
            popcornElectronPresentationPanelValue134(popcornElectronPresentationPanelParam191 => {
              let popcornElectronPresentationPanelValue587 = !popcornElectronPresentationPanelParam191;
              return popcornElectronPresentationPanelValue587 ? popcornElectronPresentationPanelValue131(false) : be(popcornElectronPresentationPanelParam357 => popcornElectronPresentationPanelParam357 + 1), popcornElectronPresentationPanelValue587;
            });
          },
          testId: "popcorn-presentation-drawing-button"
        }) : null}
                  {popcornElectronPresentationPanelValue190}
                  {headerRightContent}
                </div>,
      icon: React.createElement(remoteTextEditSessionUnderscore, {
        kind: "presentation"
      }, React.createElement(remoteTextEditSessionJ, {
        className: "size-4"
      }))
    }), <div className="@container/presentation-editor min-h-0 flex-1">
              <div ref={popcornElectronPresentationPanelValue159} className={clsx("popcorn-presentation-editor-shell relative flex h-full min-h-0 overflow-hidden", popcornElectronPresentationPanelValue173 && "popcorn-presentation-editor-shell--small-stacked", popcornElectronPresentationPanelValue171 ? "flex-col" : popcornElectronPresentationPanelValue170 || popcornElectronPresentationPanelValue174 ? "flex-row" : "flex-col @[749px]/presentation-editor:flex-row")}>
                {popcornElectronPresentationPanelValue173 ? <div className="popcorn-presentation-stacked-pages" data-testid="popcorn-presentation-stacked-pages" onKeyDown={_t}>
                    {popcornElectronPresentationPanelValue145.map((item, index) => React.createElement($n, {
            index,
            label: popcornElectronPresentationPanelValue180[item] ?? `Slide ${index + 1}`,
            thumbnail: popcornElectronPresentationPanelValue143[item] ?? null,
            isSelected: item === $e,
            onSelect: () => popcornElectronPresentationPanelValue191(popcornElectronPresentationPanelValue181[item] ?? -1),
            buttonRef: popcornElectronPresentationPanelParam269 => {
              popcornElectronPresentationPanelValue202(index, item, popcornElectronPresentationPanelParam269);
            }
          }))}
                  </div> : null}
                {popcornElectronPresentationPanelValue186 ? null : <div className={clsx("popcorn-presentation-main-panel relative isolate flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-token-bg-primary", popcornElectronPresentationPanelValue171 ? "order-1" : popcornElectronPresentationPanelValue170 ? "order-2" : "order-1 @[749px]/presentation-editor:order-2", popcornElectronPresentationPanelValue174 && "popcorn-presentation-main-panel--codex-responsive")}>
                    <div className="min-h-0 flex-1 overflow-hidden">
                      {React.createElement(_n, {
              controller: popcornElectronPresentationPanelValue127,
              runtime: popcornElectronPresentationPanelValue136,
              stageOverlays: isEditing ? stageOverlays : [],
              panelControls: popcornElectronPresentationPanelValue179,
              isEditing,
              theme,
              viewportInsets: popcornElectronPresentationPanelValue178,
              annotationMode: popcornElectronPresentationPanelValue130,
              onAnnotationModeChange: popcornElectronPresentationPanelValue131,
              drawingMode: popcornElectronPresentationPanelValue133,
              onDrawingModeChange: popcornElectronPresentationPanelValue134,
              drawingCommitToken: popcornElectronPresentationPanelValue135,
              reviewTools: popcornElectronPresentationPanelParam1,
              onHyperlinkClick,
              annotationsEnabled,
              drawingAnnotationsEnabled,
              commentThreadsEnabled,
              annotationPortalContainerElement: popcornElectronPresentationPanelValue159.current
            })}
                    </div>
                    {hideSpeakerNotes ? null : React.createElement(popcornElectronPresentationPanelHelper91, {
            controller: popcornElectronPresentationPanelValue127,
            notesHeight: popcornElectronPresentationPanelValue139,
            setNotesHeight: popcornElectronPresentationPanelValue140,
            isEditing,
            theme,
            leftInset: popcornElectronPresentationPanelValue176 ? popcornElectronPresentationPanelValue178.left : 0
          })}
                    {React.createElement(popcornElectronPresentationPanelHelper92, {
            controller: popcornElectronPresentationPanelValue127,
            panels,
            panelControls: popcornElectronPresentationPanelValue179,
            panelOpenState: popcornElectronPresentationPanelValue137,
            isEditing
          })}
                  </div>}
                {popcornElectronPresentationPanelValue171 ? <div ref={popcornElectronPresentationPanelValue160} className="order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16" data-testid="popcorn-presentation-thumbnails" onKeyDown={_t}>
                    {$("bottom")}
                  </div> : popcornElectronPresentationPanelValue170 ? <div ref={popcornElectronPresentationPanelValue160} className="popcorn-presentation-thumbnail-rail--overlay-desktop order-1 flex h-full min-h-0 shrink-0 flex-col gap-2.5 overflow-x-hidden overflow-y-auto px-3 pt-3 pb-12" style={{
          width: "220px"
        }} data-testid="popcorn-presentation-thumbnails" onKeyDown={_t}>
                    {$("left")}
                  </div> : popcornElectronPresentationPanelValue174 ? <div data-testid="popcorn-presentation-codex-thumbnail-rail" data-open={popcornElectronPresentationPanelValue149 ? "true" : "false"} className="popcorn-presentation-codex-thumbnail-rail" style={_popcornElectronSurfaceStyleW} onFocusCapture={() => {
          popcornElectronPresentationPanelValue150(true);
        }} onBlurCapture={popcornElectronPresentationPanelValue200}>
                    <button type="button" aria-label="Show slide list" aria-expanded={popcornElectronPresentationPanelValue149} data-testid="popcorn-presentation-thumbnail-stack" className="popcorn-presentation-codex-thumbnail-stack" onMouseEnter={() => {
            popcornElectronPresentationPanelValue150(true);
          }} onMouseLeave={popcornElectronPresentationPanelValue201} onClick={() => {
            popcornElectronPresentationPanelValue150(popcornElectronPresentationPanelParam358 => !popcornElectronPresentationPanelParam358);
          }}>
                      {popcornElectronPresentationPanelValue145.map(item => <span key={item} data-testid="popcorn-presentation-thumbnail-stack-bar" className="popcorn-presentation-codex-thumbnail-stack-bar" style={{
              backgroundColor: item === $e ? "var(--color-token-text-primary, rgba(13, 13, 13, 1))" : "var(--color-token-border-default, rgba(232, 232, 232, 1))"
            }} />)}
                    </button>
                    <div ref={popcornElectronPresentationPanelValue160} className="popcorn-presentation-codex-thumbnail-panel" data-testid="popcorn-presentation-thumbnails" onMouseEnter={() => {
            popcornElectronPresentationPanelValue150(true);
          }} onMouseLeave={popcornElectronPresentationPanelValue201} onKeyDown={_t}>
                      <div className="popcorn-presentation-codex-thumbnail-panel-floating">
                        {$("left", "floating", {
                slideButtonTestIdPrefix: "popcorn-presentation-floating-slide"
              })}
                      </div>
                      <div className="popcorn-presentation-codex-thumbnail-panel-full">
                        {$("left")}
                      </div>
                    </div>
                  </div> : <div ref={popcornElectronPresentationPanelValue160} className="popcorn-presentation-thumbnail-rail--overlay-desktop order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 @[749px]/presentation-editor:order-1 @[749px]/presentation-editor:h-full @[749px]/presentation-editor:w-[220px] @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:overflow-x-hidden @[749px]/presentation-editor:overflow-y-auto @[749px]/presentation-editor:px-3 @[749px]/presentation-editor:pt-3 @[749px]/presentation-editor:pb-12" data-testid="popcorn-presentation-thumbnails" onKeyDown={_t}>
                    {$("responsive")}
                  </div>}
              </div>
            </div>])}
    </div>;
}
function $n({
  index,
  label,
  thumbnail,
  isSelected,
  onSelect,
  buttonRef
}) {
  return <button ref={buttonRef} type="button" data-index={index} data-active={isSelected} data-thumbnail-cache-kind="stacked-page" data-testid={`popcorn-presentation-stacked-page-${index}`} aria-label={label} className="popcorn-presentation-stacked-page" onClick={onSelect}>
      {thumbnail ? <img src={thumbnail} alt="" className="popcorn-presentation-stacked-page-image" draggable={false} /> : <div className="popcorn-presentation-stacked-page-placeholder" />}
    </button>;
}
function popcornElectronPresentationPanelHelper91({
  controller,
  notesHeight,
  setNotesHeight,
  isEditing,
  theme,
  leftInset
}) {
  let popcornElectronPresentationPanelValue339 = popcornElectronPresentationPanelHelper49(controller);
  return <div className="popcorn-presentation-notes-panel popcorn-presentation-desktop-only pointer-events-none absolute right-0 bottom-0 z-20 px-6 pt-4 pb-6" style={theme === "codex" ? {
    ..._popcornElectronSurfaceStyleW,
    left: `${leftInset}px`
  } : {
    left: `${leftInset}px`
  }} data-testid="popcorn-presentation-notes-panel">
      {theme === "codex" ? null : <div className="pointer-events-auto pb-3">
          {React.createElement(popcornElectronPresentationPanelHelper52, {
        notesHeight,
        setNotesHeight
      })}
        </div>}
      <div className="w-full text-sm">
        {notesHeight > 0 ? <textarea data-testid="popcorn-presentation-notes" placeholder={isEditing ? "Add speaker notes..." : "No speaker notes"} className="pointer-events-auto h-full w-full resize-none p-4 text-sm text-token-text-primary outline-none placeholder:text-token-text-secondary" style={{
        ...popcornElectronPresentationPanelValue38,
        height: `${notesHeight}px`
      }} value={popcornElectronPresentationPanelValue339.notesText} readOnly={!isEditing} onChange={event => {
        controller.updateSpeakerNotes(event.target.value);
      }} /> : null}
      </div>
    </div>;
}
function popcornElectronPresentationPanelHelper92({
  controller,
  panels,
  panelControls,
  panelOpenState,
  isEditing
}) {
  return !isEditing || panels.length === 0 ? null : <div className="popcorn-presentation-desktop-only pointer-events-none absolute inset-y-4 right-4 z-20 max-w-full">
      {panels.map(item => React.createElement(popcornElectronPresentationPanelHelper93, {
      controller,
      panel: item,
      panelControls,
      isPanelOpen: panelOpenState[item.id] ?? false
    }))}
    </div>;
}
function popcornElectronPresentationPanelHelper93({
  controller,
  panel,
  panelControls,
  isPanelOpen
}) {
  let popcornElectronPresentationPanelValue406 = popcornElectronPresentationPanelHelper50(controller, panel.snapshotScope ?? "editor");
  return panel.isVisible?.({
    controller,
    snapshot: popcornElectronPresentationPanelValue406
  }) ?? true ? <div data-testid={isPanelOpen ? "popcorn-presentation-sidebar" : undefined} aria-hidden={!isPanelOpen} inert={!isPanelOpen} className={clsx("h-full min-h-0 max-w-full transition-transform duration-300 ease-out", isPanelOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full")} style={{
    width: `${panel.widthPx ?? 336}px`
  }}>
      {panel.render({
      controller,
      snapshot: popcornElectronPresentationPanelValue406,
      panelControls
    })}
    </div> : null;
}
var popcornElectronPresentationPanelValue39 = React.memo(function ({
    slideId,
    index,
    label,
    thumbnail,
    isSelected,
    onSelect,
    renderSlideThumbnailOverlay,
    slideThumbnailPlacement = "responsive",
    thumbnailSize = "default",
    slideButtonTestIdPrefix = "popcorn-presentation-slide",
    buttonRef,
    dragAttributes,
    dragListeners,
    isDragging = false
  }) {
    let popcornElectronPresentationPanelValue276 = popcornElectronPresentationPanelHelper83(slideThumbnailPlacement, thumbnailSize),
      popcornElectronPresentationPanelValue277 = popcornElectronPresentationPanelHelper84(slideThumbnailPlacement, thumbnailSize),
      popcornElectronPresentationPanelValue278 = popcornElectronPresentationPanelHelper86(thumbnailSize),
      popcornElectronPresentationPanelValue279 = popcornElectronPresentationPanelHelper87(thumbnailSize),
      popcornElectronPresentationPanelValue280 = thumbnailSize === "floating" ? popcornElectronPresentationPanelValue30 : undefined,
      popcornElectronPresentationPanelValue281 = {
        ...(thumbnailSize === "floating" ? popcornElectronPresentationPanelValue31 : {}),
        ...(isSelected ? {
          color: "var(--color-token-interactive-label-accent-default, rgba(2, 133, 255, 1))"
        } : {})
      };
    return <button ref={buttonRef} data-index={index} type="button" data-testid={`${slideButtonTestIdPrefix}-${index}`} data-active={isSelected} data-dragging={isDragging ? "true" : "false"} aria-label={label} onClick={onSelect} className={clsx("flex shrink-0 cursor-interaction touch-none items-start gap-2.5 rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none", popcornElectronPresentationPanelValue276)} style={isSelected ? {
      backgroundColor: "var(--color-token-interactive-bg-accent-muted-context, rgba(2, 133, 255, 0.10))"
    } : undefined} {...dragAttributes} {...dragListeners}>
        <div className={clsx("text-token-text-primary", popcornElectronPresentationPanelValue279, popcornElectronPresentationPanelValue277)} style={popcornElectronPresentationPanelValue281}>
          {index + 1}
        </div>
        <div data-testid={`${slideButtonTestIdPrefix}-${index}-surface`} className={clsx("relative overflow-hidden border bg-white", popcornElectronPresentationPanelValue278, isDragging ? "shadow-lg" : null)} style={{
        ...popcornElectronPresentationPanelValue32,
        ...popcornElectronPresentationPanelValue280,
        borderColor: isSelected ? "var(--color-token-interactive-label-accent-default, rgba(2, 133, 255, 1))" : "var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))",
        borderWidth: isSelected ? "2px" : undefined,
        boxShadow: isSelected ? popcornElectronPresentationPanelValue35 : popcornElectronPresentationPanelValue32.boxShadow
      }}>
          {thumbnail ? <img src={thumbnail} alt="" className={clsx("block", popcornElectronPresentationPanelValue278)} style={popcornElectronPresentationPanelValue280} draggable={false} /> : <div className={clsx(popcornElectronPresentationPanelValue278, "animate-pulse bg-gray-200")} style={{
          ...popcornElectronPresentationPanelValue280,
          aspectRatio: 1.7777777777777777
        }} />}
          {renderSlideThumbnailOverlay ? <div className="pointer-events-none absolute right-1.5 bottom-1.5 flex items-center justify-end">
              {renderSlideThumbnailOverlay(slideId)}
            </div> : null}
        </div>
      </button>;
  }),
  popcornElectronPresentationPanelValue40 = React.memo(function ({
    slideId,
    index,
    snapshotIndex,
    label,
    thumbnail,
    isSelected,
    canDelete,
    onSelectSlide,
    onDeleteSlide,
    renderSlideThumbnailOverlay,
    slideThumbnailPlacement = "responsive",
    thumbnailSize = "default",
    slideButtonTestIdPrefix = "popcorn-presentation-slide",
    onRegisterButtonRef
  }) {
    let {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging: popcornElectronPresentationPanelValue294
      } = popcornElectronSurfaceStyleNt({
        id: slideId
      }),
      popcornElectronPresentationPanelValue295 = React.useCallback(() => {
        onSelectSlide(snapshotIndex);
      }, [onSelectSlide, snapshotIndex]),
      popcornElectronPresentationPanelValue296 = React.useCallback(() => {
        onDeleteSlide(snapshotIndex);
      }, [onDeleteSlide, snapshotIndex]),
      popcornElectronPresentationPanelValue297 = React.useCallback(popcornElectronPresentationPanelParam317 => {
        onRegisterButtonRef(index, popcornElectronPresentationPanelParam317, thumbnail == null);
      }, [index, onRegisterButtonRef, thumbnail]);
    return React.createElement(popcornElectronSurfaceStyleC, {
      actions: React.useMemo(() => [{
        kind: "item",
        id: "view",
        label,
        icon: remoteTextEditSessionK,
        onSelect: popcornElectronPresentationPanelValue295,
        testId: `popcorn-presentation-slide-view-${index}`
      }, {
        kind: "separator",
        id: "slide-actions-separator"
      }, {
        kind: "item",
        id: "delete",
        label: "Delete slide",
        icon: _remoteTextEditSessionB,
        color: "danger",
        disabled: !canDelete,
        onSelect: popcornElectronPresentationPanelValue296,
        testId: `popcorn-presentation-slide-delete-${index}`
      }], [canDelete, popcornElectronPresentationPanelValue296, popcornElectronPresentationPanelValue295, index, label]),
      trigger: <div ref={setNodeRef} style={{
        transform: popcornElectronPresentationPanelImport10.Translate.toString(transform),
        transition: popcornElectronPresentationPanelValue294 ? undefined : transition,
        opacity: popcornElectronPresentationPanelValue294 ? 0 : 1,
        position: "relative",
        display: "inline-flex"
      }}>
            {React.createElement(popcornElectronPresentationPanelValue39, {
          slideId,
          index,
          label,
          thumbnail,
          isSelected,
          onSelect: popcornElectronPresentationPanelValue295,
          renderSlideThumbnailOverlay,
          slideThumbnailPlacement,
          thumbnailSize,
          slideButtonTestIdPrefix,
          buttonRef: popcornElectronPresentationPanelValue297,
          dragAttributes: attributes,
          dragListeners: listeners,
          isDragging: popcornElectronPresentationPanelValue294
        })}
          </div>
    });
  }),
  popcornElectronPresentationPanelValue41 = React.memo(function ({
    onAddSlide,
    slideThumbnailPlacement = "responsive",
    thumbnailSize = "default"
  }) {
    let popcornElectronPresentationPanelValue333 = popcornElectronPresentationPanelHelper83(slideThumbnailPlacement, thumbnailSize),
      popcornElectronPresentationPanelValue334 = popcornElectronPresentationPanelHelper84(slideThumbnailPlacement, thumbnailSize),
      popcornElectronPresentationPanelValue335 = popcornElectronPresentationPanelHelper86(thumbnailSize),
      popcornElectronPresentationPanelValue336 = popcornElectronPresentationPanelHelper87(thumbnailSize),
      popcornElectronPresentationPanelValue337 = thumbnailSize === "floating" ? popcornElectronPresentationPanelValue30 : undefined,
      popcornElectronPresentationPanelValue338 = thumbnailSize === "floating" ? popcornElectronPresentationPanelValue31 : undefined;
    return <button type="button" onClick={onAddSlide} aria-label="Add slide" title="Add slide" data-testid="popcorn-presentation-add-slide" className={clsx("flex shrink-0 cursor-interaction items-start gap-2.5 rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none", popcornElectronPresentationPanelValue333)}>
        <div aria-hidden="true" className={clsx("text-token-text-primary invisible", popcornElectronPresentationPanelValue336, popcornElectronPresentationPanelValue334)} style={popcornElectronPresentationPanelValue338}>
          {"00"}
        </div>
        <div className={clsx("text-token-text-secondary relative flex items-center justify-center overflow-hidden border border-dashed bg-white", popcornElectronPresentationPanelValue335)} style={{
        ...popcornElectronPresentationPanelValue37,
        ...popcornElectronPresentationPanelValue337
      }}>
          <div className="flex w-full items-center justify-center transition-colors hover:bg-token-bg-tertiary" style={{
          aspectRatio: 1.7777777777777777
        }}>
            {React.createElement(remoteTextEditSessionL, {
            className: "size-4"
          })}
          </div>
        </div>
      </button>;
  });
export function PopcornElectronPresentationPanel({
  className,
  externalCrdtUpdates,
  headerTitleContent,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  initialCrdtState,
  initialPresentationProto,
  initialSelectedSlideIdx,
  initialZoom,
  onCrdtUpdate,
  pendingImageGenerations = [],
  resolveImageHydrationAssets,
  title = "codex-popcorn-demo.pptx",
  theme = "codex",
  isEditing = false,
  hideSpeakerNotes = false,
  navigationCommand,
  reviewTools,
  onHyperlinkClick,
  annotationsEnabled: popcornElectronPresentationPanelParam2 = false,
  drawingAnnotationsEnabled = false,
  enablePageNavigation,
  artifactSearchEnabled = false,
  commentThreadsEnabled = false,
  workerFactory
}) {
  let popcornElectronPresentationPanelValue213 = _popcornElectronSurfaceStyleR({
      initialCrdtState,
      externalCrdtUpdates
    }),
    popcornElectronPresentationPanelValue214 = React.useRef(initialPresentationProto),
    popcornElectronPresentationPanelValue215 = React.useRef(null),
    popcornElectronPresentationPanelValue216 = _remoteTextEditSessionM(undefined, () => new popcornElectronPresentationPanelValue10({
      initialCrdtState: popcornElectronPresentationPanelValue213.initialCrdtState,
      initialSelectedSlideIdx,
      initialZoom,
      presentationProto: initialPresentationProto ?? popcornElectronPresentationPanelHelper94().toProto(),
      workerFactory
    })),
    popcornElectronPresentationPanelValue217 = React.useRef(0),
    popcornElectronPresentationPanelValue218 = _popcornElectronSurfaceStyleI({
      artifactLabel: "Presentation",
      controller: popcornElectronPresentationPanelValue216,
      externalCrdtUpdates: popcornElectronPresentationPanelValue213.externalCrdtUpdates,
      onCrdtUpdate
    }),
    popcornElectronPresentationPanelValue219 = React.useMemo(() => popcornElectronPresentationPanelHelper96(pendingImageGenerations), [pendingImageGenerations]),
    popcornElectronPresentationPanelValue220 = React.useMemo(() => popcornElectronPresentationPanelHelper97(popcornElectronPresentationPanelValue219), [popcornElectronPresentationPanelValue219]);
  return React.useEffect(() => {
    popcornElectronPresentationPanelValue216 && popcornElectronPresentationPanelValue214.current !== initialPresentationProto && (popcornElectronPresentationPanelValue214.current = initialPresentationProto, popcornElectronPresentationPanelValue216.replaceFromProto(initialPresentationProto ?? popcornElectronPresentationPanelHelper94().toProto()));
  }, [popcornElectronPresentationPanelValue216, initialPresentationProto]), React.useEffect(() => {
    if (!popcornElectronPresentationPanelValue216 || navigationCommand == null) return;
    let popcornElectronPresentationPanelValue407 = () => {
      if (navigationCommand.requestId === popcornElectronPresentationPanelValue215.current) return true;
      let popcornElectronPresentationPanelValue450 = null;
      if (navigationCommand.slideId != null) {
        let popcornElectronPresentationPanelValue603 = popcornElectronPresentationPanelValue216.getSnapshot().slideIds.indexOf(navigationCommand.slideId);
        popcornElectronPresentationPanelValue603 >= 0 && (popcornElectronPresentationPanelValue450 = popcornElectronPresentationPanelValue603);
      }
      return popcornElectronPresentationPanelValue450 == null && navigationCommand.slideNumber != null && (popcornElectronPresentationPanelValue450 = navigationCommand.slideNumber - 1), popcornElectronPresentationPanelValue450 == null ? navigationCommand.slideId == null : (popcornElectronPresentationPanelValue215.current = navigationCommand.requestId, popcornElectronPresentationPanelValue216.setSelectedSlideIdx(popcornElectronPresentationPanelValue450), popcornElectronPresentationPanelValue216.setSelectedElementId(navigationCommand.objectId ?? null), true);
    };
    if (popcornElectronPresentationPanelValue407()) return;
    let popcornElectronPresentationPanelValue408 = popcornElectronPresentationPanelValue216.subscribe(() => {
      popcornElectronPresentationPanelValue407() && popcornElectronPresentationPanelValue408();
    });
    return popcornElectronPresentationPanelValue408;
  }, [popcornElectronPresentationPanelValue216, navigationCommand]), React.useEffect(() => {
    if (popcornElectronPresentationPanelValue216 && resolveImageHydrationAssets) return popcornElectronPresentationPanelValue216.subscribeImageHydrationRequests(popcornElectronPresentationPanelParam103 => {
      let popcornElectronPresentationPanelValue524 = popcornElectronPresentationPanelValue217.current + 1;
      popcornElectronPresentationPanelValue217.current = popcornElectronPresentationPanelValue524;
      resolveImageHydrationAssets(popcornElectronPresentationPanelParam103).then(value => {
        if (!(popcornElectronPresentationPanelValue217.current !== popcornElectronPresentationPanelValue524 || value.length === 0)) return popcornElectronPresentationPanelValue216.hydrateImageAssets(value);
      }).catch(() => {});
    });
  }, [popcornElectronPresentationPanelValue216, resolveImageHydrationAssets]), popcornElectronPresentationPanelValue216 ? <section className={clsx("no-drag relative h-full min-h-0 bg-token-bg-primary", className)} style={_popcornElectronSurfaceStyleT(theme)} data-codex-popcorn-editor={true} data-testid="popcorn-electron-presentation-panel">
        {React.createElement(popcornElectronPresentationPanelHelper90, {
      className: "h-full min-h-0",
      controller: popcornElectronPresentationPanelValue216,
      headerTitleContent,
      headerRightContent: popcornElectronPresentationPanelValue219.length > 0 ? <>
                  {React.createElement(popcornElectronPresentationPanelHelper95, {
          count: popcornElectronPresentationPanelValue219.length
        })}
                  {headerRightContent}
                </> : headerRightContent,
      renderHeaderZoomControl,
      zoomToFitLabel,
      renderSlideThumbnailOverlay: popcornElectronPresentationPanelParam53 => {
        let popcornElectronPresentationPanelValue463 = popcornElectronPresentationPanelValue220[popcornElectronPresentationPanelParam53] ?? 0;
        return popcornElectronPresentationPanelValue463 === 0 ? null : <div data-testid={`popcorn-pending-image-thumb-${popcornElectronPresentationPanelParam53}`} className="absolute top-2 right-2 rounded-full bg-amber-100/95 px-2 py-0.5 text-[11px] font-semibold text-amber-900 shadow-sm">
                  {popcornElectronPresentationPanelValue463}
                </div>;
      },
      slideThumbnailPlacement: "responsive",
      title,
      theme,
      isEditing,
      hideSpeakerNotes,
      reviewTools,
      onHyperlinkClick,
      annotationsEnabled: popcornElectronPresentationPanelParam2,
      drawingAnnotationsEnabled,
      enablePageNavigation,
      artifactSearchEnabled,
      commentThreadsEnabled
    })}
        {React.createElement(_popcornElectronSurfaceStyleN, {
      artifactLabel: "Presentation",
      restoreState: popcornElectronPresentationPanelValue218
    })}
      </section> : null;
}
function popcornElectronPresentationPanelHelper94() {
  let popcornElectronPresentationPanelValue395 = popcornElectronPresentationPanelImport4.create(),
    popcornElectronPresentationPanelValue396 = popcornElectronPresentationPanelValue395.slides.add();
  popcornElectronPresentationPanelValue396.background.fill = "#FFFFFF";
  let popcornElectronPresentationPanelValue397 = popcornElectronPresentationPanelValue396.shapes.add({
    geometry: "textbox",
    position: {
      left: 140,
      top: 188,
      width: 1e3,
      height: 88
    }
  });
  popcornElectronPresentationPanelValue397.text = "Untitled presentation";
  popcornElectronPresentationPanelValue397.text.fontSize = 30;
  popcornElectronPresentationPanelValue397.text.bold = true;
  popcornElectronPresentationPanelValue397.text.alignment = "center";
  popcornElectronPresentationPanelValue397.text.verticalAlignment = "middle";
  popcornElectronPresentationPanelValue397.text.color = "#111111";
  let popcornElectronPresentationPanelValue398 = popcornElectronPresentationPanelValue396.shapes.add({
    geometry: "textbox",
    position: {
      left: 220,
      top: 300,
      width: 840,
      height: 56
    }
  });
  return popcornElectronPresentationPanelValue398.text = "Import a presentation to replace this placeholder.", popcornElectronPresentationPanelValue398.text.fontSize = 18, popcornElectronPresentationPanelValue398.text.alignment = "center", popcornElectronPresentationPanelValue398.text.verticalAlignment = "middle", popcornElectronPresentationPanelValue398.text.color = "#666666", popcornElectronPresentationPanelValue395;
}
function popcornElectronPresentationPanelHelper95({
  count
}) {
  return <div data-testid="popcorn-pending-image-summary" className="rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-900">
      {count === 1 ? "1 image pending" : `${count} images pending`}
    </div>;
}
function popcornElectronPresentationPanelHelper96(popcornElectronPresentationPanelParam65) {
  return popcornElectronPresentationPanelParam65.flatMap(item => item.status === "failed" || item.target.type !== "presentation" || typeof item.target.aid != "string" || !item.target.aid || !item.slideId || !item.elementId ? [] : [{
    requestId: item.requestId,
    slideId: item.slideId,
    elementId: item.elementId
  }]);
}
function popcornElectronPresentationPanelHelper97(popcornElectronPresentationPanelParam226) {
  let popcornElectronPresentationPanelValue604 = {};
  for (let popcornElectronPresentationPanelValue613 of popcornElectronPresentationPanelParam226) popcornElectronPresentationPanelValue604[popcornElectronPresentationPanelValue613.slideId] = (popcornElectronPresentationPanelValue604[popcornElectronPresentationPanelValue613.slideId] ?? 0) + 1;
  return popcornElectronPresentationPanelValue604;
}
