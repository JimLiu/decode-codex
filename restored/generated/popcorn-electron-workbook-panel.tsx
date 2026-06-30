// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-Drl2YYRf.js
// Also matches current ref/webview/assets/PopcornElectronWorkbookPanel-DEXqsHf5.js.
// PopcornElectronWorkbookPanel chunk restored from the Codex webview bundle.
import React from "react";
import { toEsModule } from "../runtime/commonjs-interop";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { a as popcornElectronWorkbookPanelImport5, c as popcornElectronWorkbookPanelImport6, l as popcornElectronWorkbookPanelImport7, n as popcornElectronWorkbookPanelImport8, o as popcornElectronWorkbookPanelImport9 } from "@floating-ui/react-dom";
import { addressUtilsA, addressUtilsD, addressUtilsF, addressUtilsR, addressUtilsV } from "../vendor/xlsx-address-utils";
import { _ as popcornElectronWorkbookPanelImport10, b as popcornElectronWorkbookPanelImport11, t as popcornElectronWorkbookPanelImport12, v as popcornElectronWorkbookPanelImport13, y as popcornElectronWorkbookPanelImport14 } from "../boundaries/workbook-runtime";
import { tableau10N } from "../vendor/d3-tableau10";
import { Ordinal } from "../utils/ordinal";
import { _remoteTextEditSessionB, _remoteTextEditSessionC, remoteTextEditSessionD, remoteTextEditSessionF, remoteTextEditSessionG, remoteTextEditSessionH, remoteTextEditSessionI, remoteTextEditSessionK, remoteTextEditSessionL, remoteTextEditSessionM, remoteTextEditSessionN, _remoteTextEditSessionO, remoteTextEditSessionP, remoteTextEditSessionR, _remoteTextEditSessionS, remoteTextEditSessionT, remoteTextEditSessionU, remoteTextEditSessionUnderscore, remoteTextEditSessionX, remoteTextEditSessionZ } from "./remote-text-edit-session";
import { getFeatureCatalogRows, FeatureCatalogFindBar } from "../features/feature-catalog";
import { PopoverTrigger, Popover, PopoverContent, PopoverPortal, PopoverClose } from "../vendor/radix-popover";
import { a as popcornElectronWorkbookPanelImport15, d as popcornElectronWorkbookPanelImport16, f as popcornElectronWorkbookPanelImport17, i as popcornElectronWorkbookPanelImport18, n as popcornElectronWorkbookPanelImport19, p as popcornElectronWorkbookPanelImport20, t as popcornElectronWorkbookPanelImport21 } from "@dnd-kit/core";
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from "../utils/drag-modifiers";
import { popcornElectronSurfaceStyleA, popcornElectronSurfaceStyleB, popcornElectronSurfaceStyleC, popcornElectronSurfaceStyleD, popcornElectronSurfaceStyleDollar, popcornElectronSurfaceStyleE, popcornElectronSurfaceStyleEt, popcornElectronSurfaceStyleF, popcornElectronSurfaceStyleG, popcornElectronSurfaceStyleH, popcornElectronSurfaceStyleI, popcornElectronSurfaceStyleJ, _popcornElectronSurfaceStyleK, popcornElectronSurfaceStyleL, popcornElectronSurfaceStyleM, popcornElectronSurfaceStyleN, popcornElectronSurfaceStyleNt, popcornElectronSurfaceStyleO, popcornElectronSurfaceStyleP, popcornElectronSurfaceStyleQ, popcornElectronSurfaceStyleR, popcornElectronSurfaceStyleS, _popcornElectronSurfaceStyleT, popcornElectronSurfaceStyleU, popcornElectronSurfaceStyleUnderscore, popcornElectronSurfaceStyleV, popcornElectronSurfaceStyleW, popcornElectronSurfaceStyleX, popcornElectronSurfaceStyleY, popcornElectronSurfaceStyleZ } from "./popcorn-electron-surface-style";
const _remoteTextEditSessionD = remoteTextEditSessionD,
  _remoteTextEditSessionF = remoteTextEditSessionF,
  _remoteTextEditSessionL = remoteTextEditSessionL,
  _remoteTextEditSessionM = remoteTextEditSessionM,
  _remoteTextEditSessionN = remoteTextEditSessionN,
  _remoteTextEditSessionP = remoteTextEditSessionP,
  _remoteTextEditSessionR = remoteTextEditSessionR,
  _remoteTextEditSessionT = remoteTextEditSessionT,
  _popcornElectronSurfaceStyleA = popcornElectronSurfaceStyleA,
  _popcornElectronSurfaceStyleC = popcornElectronSurfaceStyleC,
  _popcornElectronSurfaceStyleD = popcornElectronSurfaceStyleD,
  _popcornElectronSurfaceStyleF = popcornElectronSurfaceStyleF,
  _popcornElectronSurfaceStyleG = popcornElectronSurfaceStyleG,
  _popcornElectronSurfaceStyleH = popcornElectronSurfaceStyleH,
  _popcornElectronSurfaceStyleI = popcornElectronSurfaceStyleI,
  _popcornElectronSurfaceStyleJ = popcornElectronSurfaceStyleJ,
  _popcornElectronSurfaceStyleL = popcornElectronSurfaceStyleL,
  _popcornElectronSurfaceStyleM = popcornElectronSurfaceStyleM,
  _popcornElectronSurfaceStyleN = popcornElectronSurfaceStyleN,
  _popcornElectronSurfaceStyleP = popcornElectronSurfaceStyleP,
  _popcornElectronSurfaceStyleR = popcornElectronSurfaceStyleR,
  _popcornElectronSurfaceStyleS = popcornElectronSurfaceStyleS,
  _popcornElectronSurfaceStyleU = popcornElectronSurfaceStyleU,
  _popcornElectronSurfaceStyleZ = popcornElectronSurfaceStyleZ;
var popcornElectronWorkbookPanelValue1 = tableau10N("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
function popcornElectronWorkbookPanelHelper1(popcornElectronWorkbookPanelParam33) {
  return {
    workbookVersion: popcornElectronWorkbookPanelParam33.meta.workbookVersion,
    showFormulas: popcornElectronWorkbookPanelParam33.meta.showFormulas,
    canUndo: popcornElectronWorkbookPanelParam33.meta.canUndo,
    canRedo: popcornElectronWorkbookPanelParam33.meta.canRedo,
    activeSheetName: popcornElectronWorkbookPanelParam33.navigation.activeSheetName,
    sheetNames: [...popcornElectronWorkbookPanelParam33.navigation.sheetNames],
    activeCell: {
      ...popcornElectronWorkbookPanelParam33.selection.activeCell
    },
    selectedAddress: popcornElectronWorkbookPanelParam33.selection.selectedAddress,
    selectionRect: {
      ...popcornElectronWorkbookPanelParam33.selection.selectionRect
    },
    selectionRanges: popcornElectronWorkbookPanelParam33.selection.selectionRanges.map(item => ({
      ...item
    })),
    activeRangeIndex: popcornElectronWorkbookPanelParam33.selection.activeRangeIndex,
    selectAllStage: popcornElectronWorkbookPanelParam33.selection.selectAllStage,
    isDraggingSelection: popcornElectronWorkbookPanelParam33.selection.isDraggingSelection,
    fillPreviewRect: popcornElectronWorkbookPanelParam33.selection.fillPreviewRect ? {
      ...popcornElectronWorkbookPanelParam33.selection.fillPreviewRect
    } : null,
    formulaInput: popcornElectronWorkbookPanelParam33.editor.formulaInput,
    editorMode: popcornElectronWorkbookPanelParam33.editor.editorMode,
    zoom: popcornElectronWorkbookPanelParam33.viewport.zoom,
    columnWidths: [...popcornElectronWorkbookPanelParam33.viewport.columnWidths],
    rowHeights: [...popcornElectronWorkbookPanelParam33.viewport.rowHeights],
    rowIndexRemap: popcornElectronWorkbookPanelParam33.viewport.rowIndexRemap ? [...popcornElectronWorkbookPanelParam33.viewport.rowIndexRemap] : null,
    freezePanes: {
      ...popcornElectronWorkbookPanelParam33.viewport.freezePanes
    },
    resizeGuide: popcornElectronWorkbookPanelParam33.viewport.resizeGuide ? {
      ...popcornElectronWorkbookPanelParam33.viewport.resizeGuide
    } : null,
    tableFilters: {
      ...popcornElectronWorkbookPanelParam33.overlays.tableFilters
    },
    tableSorts: {
      ...popcornElectronWorkbookPanelParam33.overlays.tableSorts
    },
    selectedFloatingElement: popcornElectronWorkbookPanelParam33.floating.selectedFloatingElement ? {
      ...popcornElectronWorkbookPanelParam33.floating.selectedFloatingElement,
      logicalBounds: {
        ...popcornElectronWorkbookPanelParam33.floating.selectedFloatingElement.logicalBounds
      }
    } : null
  };
}
var popcornElectronWorkbookPanelValue4 = React.createContext(null);
function popcornElectronWorkbookPanelHelper2({
  controller,
  children
}) {
  return React.createElement(popcornElectronWorkbookPanelValue4.Provider, {
    value: controller
  }, children);
}
function popcornElectronWorkbookPanelHelper3() {
  let popcornElectronWorkbookPanelValue1331 = React.useContext(popcornElectronWorkbookPanelValue4);
  if (!popcornElectronWorkbookPanelValue1331) throw Error("PopcornEditorProvider is required");
  return popcornElectronWorkbookPanelValue1331;
}
function popcornElectronWorkbookPanelHelper4() {
  let popcornElectronWorkbookPanelValue1249 = popcornElectronWorkbookPanelHelper3(),
    popcornElectronWorkbookPanelValue1250 = React.useSyncExternalStore(popcornElectronWorkbookPanelParam608 => popcornElectronWorkbookPanelValue1249.subscribe(popcornElectronWorkbookPanelParam608), () => popcornElectronWorkbookPanelValue1249.getState(), () => popcornElectronWorkbookPanelValue1249.getState());
  return React.useMemo(() => popcornElectronWorkbookPanelHelper1(popcornElectronWorkbookPanelValue1250), [popcornElectronWorkbookPanelValue1250]);
}
function popcornElectronWorkbookPanelHelper5(popcornElectronWorkbookPanelParam214) {
  let popcornElectronWorkbookPanelValue1170 = [],
    popcornElectronWorkbookPanelValue1171 = [],
    popcornElectronWorkbookPanelValue1172 = [];
  for (let popcornElectronWorkbookPanelValue1305 of popcornElectronWorkbookPanelParam214) {
    popcornElectronWorkbookPanelValue1170.push(...(popcornElectronWorkbookPanelValue1305.toolbarActions ?? []));
    popcornElectronWorkbookPanelValue1171.push(...(popcornElectronWorkbookPanelValue1305.panels ?? []));
    popcornElectronWorkbookPanelValue1172.push(...(popcornElectronWorkbookPanelValue1305.viewportOverlays ?? []));
  }
  return {
    toolbarActions: popcornElectronWorkbookPanelValue1170,
    panels: popcornElectronWorkbookPanelValue1171,
    viewportOverlays: popcornElectronWorkbookPanelValue1172
  };
}
function popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam409, popcornElectronWorkbookPanelParam410) {
  let popcornElectronWorkbookPanelValue1357 = 0;
  for (let popcornElectronWorkbookPanelValue1391 = 0; popcornElectronWorkbookPanelValue1391 < popcornElectronWorkbookPanelParam410; popcornElectronWorkbookPanelValue1391 += 1) popcornElectronWorkbookPanelValue1357 += popcornElectronWorkbookPanelParam409[popcornElectronWorkbookPanelValue1391] ?? 0;
  return popcornElectronWorkbookPanelValue1357;
}
function popcornElectronWorkbookPanelHelper7(popcornElectronWorkbookPanelParam154) {
  if (!(popcornElectronWorkbookPanelParam154.size > 0)) return [];
  let popcornElectronWorkbookPanelValue1050 = popcornElectronWorkbookPanelParam154.start + popcornElectronWorkbookPanelParam154.size,
    popcornElectronWorkbookPanelValue1051 = popcornElectronWorkbookPanelParam154.headerSize + popcornElectronWorkbookPanelParam154.frozenBodySize,
    popcornElectronWorkbookPanelValue1052 = [],
    popcornElectronWorkbookPanelValue1053 = Math.min(popcornElectronWorkbookPanelValue1050, popcornElectronWorkbookPanelValue1051);
  popcornElectronWorkbookPanelValue1053 > popcornElectronWorkbookPanelParam154.start && popcornElectronWorkbookPanelValue1052.push({
    start: popcornElectronWorkbookPanelParam154.start,
    size: popcornElectronWorkbookPanelValue1053 - popcornElectronWorkbookPanelParam154.start
  });
  let popcornElectronWorkbookPanelValue1054 = Math.max(popcornElectronWorkbookPanelParam154.start, popcornElectronWorkbookPanelValue1051);
  if (popcornElectronWorkbookPanelValue1050 > popcornElectronWorkbookPanelValue1054) {
    let popcornElectronWorkbookPanelValue1320 = popcornElectronWorkbookPanelValue1054 - popcornElectronWorkbookPanelParam154.scroll,
      popcornElectronWorkbookPanelValue1321 = popcornElectronWorkbookPanelValue1050 - popcornElectronWorkbookPanelParam154.scroll,
      popcornElectronWorkbookPanelValue1322 = Math.max(popcornElectronWorkbookPanelValue1320, popcornElectronWorkbookPanelValue1051);
    popcornElectronWorkbookPanelValue1321 > popcornElectronWorkbookPanelValue1322 && popcornElectronWorkbookPanelValue1052.push({
      start: popcornElectronWorkbookPanelValue1322,
      size: popcornElectronWorkbookPanelValue1321 - popcornElectronWorkbookPanelValue1322
    });
  }
  return popcornElectronWorkbookPanelValue1052;
}
function popcornElectronWorkbookPanelHelper8(popcornElectronWorkbookPanelParam351) {
  let popcornElectronWorkbookPanelValue1326 = [0];
  for (let popcornElectronWorkbookPanelValue1369 = 0; popcornElectronWorkbookPanelValue1369 < popcornElectronWorkbookPanelParam351.length; popcornElectronWorkbookPanelValue1369 += 1) popcornElectronWorkbookPanelValue1326[popcornElectronWorkbookPanelValue1369 + 1] = (popcornElectronWorkbookPanelValue1326[popcornElectronWorkbookPanelValue1369] ?? 0) + (popcornElectronWorkbookPanelParam351[popcornElectronWorkbookPanelValue1369] ?? 0);
  return popcornElectronWorkbookPanelValue1326;
}
function _t(popcornElectronWorkbookPanelParam243, popcornElectronWorkbookPanelParam244) {
  let popcornElectronWorkbookPanelValue1233 = Math.max(0, popcornElectronWorkbookPanelParam244),
    popcornElectronWorkbookPanelValue1234 = 0,
    popcornElectronWorkbookPanelValue1235 = 1 / 0;
  for (let popcornElectronWorkbookPanelValue1325 = 0; popcornElectronWorkbookPanelValue1325 < popcornElectronWorkbookPanelParam243.length; popcornElectronWorkbookPanelValue1325 += 1) {
    let popcornElectronWorkbookPanelValue1364 = popcornElectronWorkbookPanelParam243[popcornElectronWorkbookPanelValue1325] ?? 0,
      popcornElectronWorkbookPanelValue1365 = Math.abs(popcornElectronWorkbookPanelValue1364 - popcornElectronWorkbookPanelValue1233);
    popcornElectronWorkbookPanelValue1365 < popcornElectronWorkbookPanelValue1235 && (popcornElectronWorkbookPanelValue1234 = popcornElectronWorkbookPanelValue1325, popcornElectronWorkbookPanelValue1235 = popcornElectronWorkbookPanelValue1365);
  }
  return popcornElectronWorkbookPanelValue1234;
}
function popcornElectronWorkbookPanelHelper9(popcornElectronWorkbookPanelParam225) {
  let popcornElectronWorkbookPanelValue1197 = popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam225.columnWidths, popcornElectronWorkbookPanelParam225.freezePanes.columnCount),
    popcornElectronWorkbookPanelValue1198 = popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam225.rowHeights, popcornElectronWorkbookPanelParam225.freezePanes.rowCount);
  return {
    frozenBodyWidth: popcornElectronWorkbookPanelValue1197,
    frozenBodyHeight: popcornElectronWorkbookPanelValue1198,
    freezeLineX: 40 + popcornElectronWorkbookPanelValue1197,
    freezeLineY: 20 + popcornElectronWorkbookPanelValue1198
  };
}
function popcornElectronWorkbookPanelHelper10(popcornElectronWorkbookPanelParam89) {
  let popcornElectronWorkbookPanelValue788 = Math.min(popcornElectronWorkbookPanelParam89.maxZoom, Math.max(popcornElectronWorkbookPanelParam89.minZoom, popcornElectronWorkbookPanelParam89.camera.k)),
    popcornElectronWorkbookPanelValue789 = popcornElectronWorkbookPanelHelper9(popcornElectronWorkbookPanelParam89),
    popcornElectronWorkbookPanelValue790 = Math.max(0, popcornElectronWorkbookPanelParam89.viewportWidth / popcornElectronWorkbookPanelValue788 - 40),
    popcornElectronWorkbookPanelValue791 = Math.max(0, popcornElectronWorkbookPanelParam89.viewportHeight / popcornElectronWorkbookPanelValue788 - 20),
    popcornElectronWorkbookPanelValue792 = Math.max(0, popcornElectronWorkbookPanelParam89.bottomScrollReservePx ?? 0) / popcornElectronWorkbookPanelValue788,
    popcornElectronWorkbookPanelValue793 = popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam89.columnWidths, popcornElectronWorkbookPanelParam89.columnWidths.length),
    popcornElectronWorkbookPanelValue794 = popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam89.rowHeights, popcornElectronWorkbookPanelParam89.rowHeights.length),
    popcornElectronWorkbookPanelValue795 = Math.max(0, popcornElectronWorkbookPanelValue793 - popcornElectronWorkbookPanelValue789.frozenBodyWidth),
    popcornElectronWorkbookPanelValue796 = Math.max(0, popcornElectronWorkbookPanelValue794 - popcornElectronWorkbookPanelValue789.frozenBodyHeight),
    popcornElectronWorkbookPanelValue797 = Math.max(0, popcornElectronWorkbookPanelValue790 - popcornElectronWorkbookPanelValue789.frozenBodyWidth),
    popcornElectronWorkbookPanelValue798 = Math.max(0, popcornElectronWorkbookPanelValue791 - popcornElectronWorkbookPanelValue789.frozenBodyHeight),
    popcornElectronWorkbookPanelValue799 = Math.max(0, popcornElectronWorkbookPanelValue795 - popcornElectronWorkbookPanelValue797),
    popcornElectronWorkbookPanelValue800 = Math.max(0, popcornElectronWorkbookPanelValue796 + popcornElectronWorkbookPanelValue792 - popcornElectronWorkbookPanelValue798),
    popcornElectronWorkbookPanelValue801 = _popcornElectronSurfaceStyleG({
      ...popcornElectronWorkbookPanelParam89.camera,
      k: popcornElectronWorkbookPanelValue788
    }),
    popcornElectronWorkbookPanelValue802 = Math.min(popcornElectronWorkbookPanelValue799, Math.max(0, popcornElectronWorkbookPanelValue801.left)),
    popcornElectronWorkbookPanelValue803 = Math.min(popcornElectronWorkbookPanelValue800, Math.max(0, popcornElectronWorkbookPanelValue801.top));
  return {
    x: -popcornElectronWorkbookPanelValue802 * popcornElectronWorkbookPanelValue788,
    y: -popcornElectronWorkbookPanelValue803 * popcornElectronWorkbookPanelValue788,
    k: popcornElectronWorkbookPanelValue788
  };
}
function popcornElectronWorkbookPanelHelper11(popcornElectronWorkbookPanelParam111) {
  let popcornElectronWorkbookPanelValue892 = _popcornElectronSurfaceStyleG(popcornElectronWorkbookPanelParam111.camera),
    popcornElectronWorkbookPanelValue893 = popcornElectronWorkbookPanelHelper9(popcornElectronWorkbookPanelParam111),
    popcornElectronWorkbookPanelValue894 = popcornElectronWorkbookPanelParam111.logicalX - 40,
    popcornElectronWorkbookPanelValue895 = popcornElectronWorkbookPanelParam111.logicalY - 20,
    popcornElectronWorkbookPanelValue896 = popcornElectronWorkbookPanelParam111.logicalX >= 0 && popcornElectronWorkbookPanelParam111.logicalX < 40,
    popcornElectronWorkbookPanelValue897 = popcornElectronWorkbookPanelParam111.logicalY >= 0 && popcornElectronWorkbookPanelParam111.logicalY < 20,
    popcornElectronWorkbookPanelValue898 = popcornElectronWorkbookPanelParam111.freezePanes.columnCount > 0 && popcornElectronWorkbookPanelValue894 >= 0 && popcornElectronWorkbookPanelValue894 < popcornElectronWorkbookPanelValue893.frozenBodyWidth,
    popcornElectronWorkbookPanelValue899 = popcornElectronWorkbookPanelParam111.freezePanes.rowCount > 0 && popcornElectronWorkbookPanelValue895 >= 0 && popcornElectronWorkbookPanelValue895 < popcornElectronWorkbookPanelValue893.frozenBodyHeight,
    popcornElectronWorkbookPanelValue900 = popcornElectronWorkbookPanelValue896 || popcornElectronWorkbookPanelValue898 ? popcornElectronWorkbookPanelValue894 : popcornElectronWorkbookPanelValue893.frozenBodyWidth + (popcornElectronWorkbookPanelValue894 - popcornElectronWorkbookPanelValue893.frozenBodyWidth) + popcornElectronWorkbookPanelValue892.left,
    popcornElectronWorkbookPanelValue901 = popcornElectronWorkbookPanelValue897 || popcornElectronWorkbookPanelValue899 ? popcornElectronWorkbookPanelValue895 : popcornElectronWorkbookPanelValue893.frozenBodyHeight + (popcornElectronWorkbookPanelValue895 - popcornElectronWorkbookPanelValue893.frozenBodyHeight) + popcornElectronWorkbookPanelValue892.top;
  return {
    x: popcornElectronWorkbookPanelValue896 ? popcornElectronWorkbookPanelParam111.logicalX : 40 + popcornElectronWorkbookPanelValue900,
    y: popcornElectronWorkbookPanelValue897 ? popcornElectronWorkbookPanelParam111.logicalY : 20 + popcornElectronWorkbookPanelValue901
  };
}
function popcornElectronWorkbookPanelHelper12(event) {
  let popcornElectronWorkbookPanelValue1185 = Math.max(event.camera.k, 2.220446049250313e-16);
  return popcornElectronWorkbookPanelHelper11({
    camera: event.camera,
    logicalX: event.screenX / popcornElectronWorkbookPanelValue1185,
    logicalY: event.screenY / popcornElectronWorkbookPanelValue1185,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights
  });
}
function popcornElectronWorkbookPanelHelper13(popcornElectronWorkbookPanelParam118) {
  let popcornElectronWorkbookPanelValue909 = _popcornElectronSurfaceStyleG(popcornElectronWorkbookPanelParam118.camera),
    popcornElectronWorkbookPanelValue910 = popcornElectronWorkbookPanelHelper9(popcornElectronWorkbookPanelParam118),
    popcornElectronWorkbookPanelValue911 = popcornElectronWorkbookPanelParam118.worldX - 40,
    popcornElectronWorkbookPanelValue912 = popcornElectronWorkbookPanelParam118.worldY - 20,
    popcornElectronWorkbookPanelValue913 = popcornElectronWorkbookPanelParam118.worldX >= 0 && popcornElectronWorkbookPanelParam118.worldX < 40,
    popcornElectronWorkbookPanelValue914 = popcornElectronWorkbookPanelParam118.worldY >= 0 && popcornElectronWorkbookPanelParam118.worldY < 20,
    popcornElectronWorkbookPanelValue915 = popcornElectronWorkbookPanelParam118.freezePanes.columnCount > 0 && popcornElectronWorkbookPanelValue911 >= 0 && popcornElectronWorkbookPanelValue911 < popcornElectronWorkbookPanelValue910.frozenBodyWidth,
    popcornElectronWorkbookPanelValue916 = popcornElectronWorkbookPanelParam118.freezePanes.rowCount > 0 && popcornElectronWorkbookPanelValue912 >= 0 && popcornElectronWorkbookPanelValue912 < popcornElectronWorkbookPanelValue910.frozenBodyHeight,
    popcornElectronWorkbookPanelValue917 = popcornElectronWorkbookPanelValue913 || popcornElectronWorkbookPanelValue915 ? popcornElectronWorkbookPanelValue911 : popcornElectronWorkbookPanelValue910.frozenBodyWidth + (popcornElectronWorkbookPanelValue911 - popcornElectronWorkbookPanelValue910.frozenBodyWidth) - popcornElectronWorkbookPanelValue909.left,
    popcornElectronWorkbookPanelValue918 = popcornElectronWorkbookPanelValue914 || popcornElectronWorkbookPanelValue916 ? popcornElectronWorkbookPanelValue912 : popcornElectronWorkbookPanelValue910.frozenBodyHeight + (popcornElectronWorkbookPanelValue912 - popcornElectronWorkbookPanelValue910.frozenBodyHeight) - popcornElectronWorkbookPanelValue909.top;
  return {
    x: popcornElectronWorkbookPanelValue913 ? popcornElectronWorkbookPanelParam118.worldX : 40 + popcornElectronWorkbookPanelValue917,
    y: popcornElectronWorkbookPanelValue914 ? popcornElectronWorkbookPanelParam118.worldY : 20 + popcornElectronWorkbookPanelValue918
  };
}
function popcornElectronWorkbookPanelHelper14(popcornElectronWorkbookPanelParam433) {
  let popcornElectronWorkbookPanelValue1361 = popcornElectronWorkbookPanelHelper13(popcornElectronWorkbookPanelParam433);
  return {
    x: popcornElectronWorkbookPanelValue1361.x * popcornElectronWorkbookPanelParam433.camera.k,
    y: popcornElectronWorkbookPanelValue1361.y * popcornElectronWorkbookPanelParam433.camera.k
  };
}
function popcornElectronWorkbookPanelHelper15(popcornElectronWorkbookPanelParam108) {
  let popcornElectronWorkbookPanelValue872 = Math.max(popcornElectronWorkbookPanelParam108.camera.k, 2.220446049250313e-16),
    popcornElectronWorkbookPanelValue873 = -popcornElectronWorkbookPanelParam108.camera.x / popcornElectronWorkbookPanelValue872,
    popcornElectronWorkbookPanelValue874 = -popcornElectronWorkbookPanelParam108.camera.y / popcornElectronWorkbookPanelValue872,
    popcornElectronWorkbookPanelValue875 = popcornElectronWorkbookPanelHelper7({
      start: popcornElectronWorkbookPanelParam108.worldX,
      size: popcornElectronWorkbookPanelParam108.width,
      headerSize: 40,
      frozenBodySize: popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam108.columnWidths, popcornElectronWorkbookPanelParam108.freezePanes.columnCount),
      scroll: popcornElectronWorkbookPanelValue873
    }),
    popcornElectronWorkbookPanelValue876 = popcornElectronWorkbookPanelHelper7({
      start: popcornElectronWorkbookPanelParam108.worldY,
      size: popcornElectronWorkbookPanelParam108.height,
      headerSize: 20,
      frozenBodySize: popcornElectronWorkbookPanelHelper6(popcornElectronWorkbookPanelParam108.rowHeights, popcornElectronWorkbookPanelParam108.freezePanes.rowCount),
      scroll: popcornElectronWorkbookPanelValue874
    }),
    popcornElectronWorkbookPanelValue877 = [];
  for (let popcornElectronWorkbookPanelValue1341 of popcornElectronWorkbookPanelValue875) for (let popcornElectronWorkbookPanelValue1363 of popcornElectronWorkbookPanelValue876) popcornElectronWorkbookPanelValue877.push({
    x: popcornElectronWorkbookPanelValue1341.start,
    y: popcornElectronWorkbookPanelValue1363.start,
    width: popcornElectronWorkbookPanelValue1341.size,
    height: popcornElectronWorkbookPanelValue1363.size
  });
  return popcornElectronWorkbookPanelValue877;
}
function popcornElectronWorkbookPanelHelper16(popcornElectronWorkbookPanelParam287) {
  return popcornElectronWorkbookPanelHelper15(popcornElectronWorkbookPanelParam287).map(item => ({
    x: item.x * popcornElectronWorkbookPanelParam287.camera.k,
    y: item.y * popcornElectronWorkbookPanelParam287.camera.k,
    width: item.width * popcornElectronWorkbookPanelParam287.camera.k,
    height: item.height * popcornElectronWorkbookPanelParam287.camera.k
  }));
}
function popcornElectronWorkbookPanelHelper17(popcornElectronWorkbookPanelParam516, popcornElectronWorkbookPanelParam517, popcornElectronWorkbookPanelParam518) {
  return Math.min(popcornElectronWorkbookPanelParam518, Math.max(popcornElectronWorkbookPanelParam517, popcornElectronWorkbookPanelParam516));
}
function popcornElectronWorkbookPanelHelper18({
  threads,
  camera,
  freezePanes,
  columnWidths,
  rowHeights,
  isEditing,
  onReply,
  onResolve,
  onReopen,
  onDeleteThread,
  onToggleReaction,
  onEditComment,
  onDeleteComment
}) {
  let [popcornElectronWorkbookPanelValue372, popcornElectronWorkbookPanelValue373] = React.useState(null);
  return React.useEffect(() => {
    popcornElectronWorkbookPanelValue372 && (threads.some(item => item.threadId === popcornElectronWorkbookPanelValue372) || popcornElectronWorkbookPanelValue373(null));
  }, [popcornElectronWorkbookPanelValue372, threads]), <>
        {React.useMemo(() => threads.map(item => {
      let popcornElectronWorkbookPanelValue679 = popcornElectronWorkbookPanelHelper16({
        camera,
        worldX: 40 + columnWidths.slice(0, item.target.startCol).reduce((accumulator, current) => accumulator + current, 0),
        worldY: 20 + rowHeights.slice(0, item.target.startRow).reduce((accumulator, current) => accumulator + current, 0),
        width: columnWidths[item.target.startCol] ?? 0,
        height: rowHeights[item.target.startRow] ?? 0,
        freezePanes,
        columnWidths,
        rowHeights
      })[0];
      return !popcornElectronWorkbookPanelValue679 || popcornElectronWorkbookPanelValue679.width <= 0 || popcornElectronWorkbookPanelValue679.height <= 0 ? null : {
        thread: item,
        rect: popcornElectronWorkbookPanelValue679,
        indicatorSize: popcornElectronWorkbookPanelHelper17(Math.round(camera.k * 6), 5, 10),
        hotspotSize: popcornElectronWorkbookPanelHelper17(Math.round(camera.k * 14), 14, 22),
        targetRef: item.target.startAddress === item.target.endAddress ? item.target.startAddress : `${item.target.startAddress}:${item.target.endAddress}`
      };
    }).filter(item => item != null), [camera, columnWidths, freezePanes, rowHeights, threads]).map(({
      thread,
      rect,
      indicatorSize,
      hotspotSize,
      targetRef
    }) => {
      let popcornElectronWorkbookPanelValue419 = popcornElectronWorkbookPanelValue372 === thread.threadId,
        popcornElectronWorkbookPanelValue420 = thread.status === "resolved" ? "#94A3B8" : "#339CFF";
      return React.createElement(_popcornElectronSurfaceStyleH, {
        open: popcornElectronWorkbookPanelValue419,
        onOpenChange: popcornElectronWorkbookPanelParam500 => {
          popcornElectronWorkbookPanelValue373(popcornElectronWorkbookPanelParam500 ? thread.threadId : null);
        },
        trigger: <button type="button" data-testid={`popcorn-workbook-thread-trigger-${thread.threadId}`} aria-label={`Open comment thread for ${thread.label}`} className="pointer-events-auto absolute z-[24] overflow-visible border-0 bg-transparent p-0" style={{
          left: rect.x + Math.max(0, rect.width - hotspotSize),
          top: rect.y,
          width: hotspotSize,
          height: hotspotSize
        }} onMouseDown={event => {
          event.stopPropagation();
        }} onClick={event => {
          event.stopPropagation();
          popcornElectronWorkbookPanelValue373(popcornElectronWorkbookPanelParam568 => popcornElectronWorkbookPanelParam568 === thread.threadId ? null : thread.threadId);
        }}>
                  <span aria-hidden="true" className="absolute right-0 top-0" style={{
            width: 0,
            height: 0,
            borderTop: `${indicatorSize}px solid ${popcornElectronWorkbookPanelValue420}`,
            borderLeft: `${indicatorSize}px solid transparent`
          }} />
                </button>,
        content: React.createElement(_popcornElectronSurfaceStyleM, {
          targetPrimaryLabel: targetRef,
          targetSecondaryLabel: thread.sheetName,
          status: thread.status,
          resolvedByName: thread.resolvedBy?.displayName ?? null,
          resolvedAt: thread.resolvedAt,
          comments: thread.comments,
          isEditing,
          viewerAuthorId: thread.viewerAuthorId,
          onReply: onReply ? popcornElectronWorkbookPanelParam494 => {
            onReply(thread.threadId, popcornElectronWorkbookPanelParam494);
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
          onToggleReaction: onToggleReaction ? (popcornElectronWorkbookPanelParam469, popcornElectronWorkbookPanelParam470) => {
            onToggleReaction(thread.threadId, popcornElectronWorkbookPanelParam469, popcornElectronWorkbookPanelParam470);
          } : undefined,
          onEditComment: onEditComment ? (popcornElectronWorkbookPanelParam471, popcornElectronWorkbookPanelParam472) => {
            onEditComment(thread.threadId, popcornElectronWorkbookPanelParam471, popcornElectronWorkbookPanelParam472);
          } : undefined,
          onDeleteComment: onDeleteComment ? popcornElectronWorkbookPanelParam495 => {
            onDeleteComment(thread.threadId, popcornElectronWorkbookPanelParam495);
          } : undefined
        })
      });
    })}
      </>;
}
function popcornElectronWorkbookPanelHelper19(popcornElectronWorkbookPanelParam396) {
  let popcornElectronWorkbookPanelValue1353 = [0];
  for (let popcornElectronWorkbookPanelValue1388 of popcornElectronWorkbookPanelParam396) popcornElectronWorkbookPanelValue1353.push((popcornElectronWorkbookPanelValue1353[popcornElectronWorkbookPanelValue1353.length - 1] ?? 0) + popcornElectronWorkbookPanelValue1388);
  return popcornElectronWorkbookPanelValue1353;
}
function popcornElectronWorkbookPanelHelper20(popcornElectronWorkbookPanelParam555) {
  return popcornElectronWorkbookPanelHelper21({
    ...popcornElectronWorkbookPanelParam555,
    sizePx: 6
  });
}
function popcornElectronWorkbookPanelHelper21(popcornElectronWorkbookPanelParam97) {
  let popcornElectronWorkbookPanelValue819 = Math.min(Math.max(popcornElectronWorkbookPanelParam97.selectionRect.c1, popcornElectronWorkbookPanelParam97.selectionRect.c2), popcornElectronWorkbookPanelParam97.colWidths.length - 1),
    popcornElectronWorkbookPanelValue820 = Math.min(Math.max(popcornElectronWorkbookPanelParam97.selectionRect.r1, popcornElectronWorkbookPanelParam97.selectionRect.r2), popcornElectronWorkbookPanelParam97.rowHeights.length - 1);
  if (popcornElectronWorkbookPanelValue819 < 0 || popcornElectronWorkbookPanelValue820 < 0) return null;
  let popcornElectronWorkbookPanelValue821 = popcornElectronWorkbookPanelHelper19(popcornElectronWorkbookPanelParam97.colWidths),
    popcornElectronWorkbookPanelValue822 = popcornElectronWorkbookPanelHelper19(popcornElectronWorkbookPanelParam97.rowHeights),
    popcornElectronWorkbookPanelValue823 = popcornElectronWorkbookPanelHelper13({
      camera: popcornElectronWorkbookPanelParam97.camera,
      worldX: 40 + (popcornElectronWorkbookPanelValue821[popcornElectronWorkbookPanelValue819 + 1] ?? 0),
      worldY: 20 + (popcornElectronWorkbookPanelValue822[popcornElectronWorkbookPanelValue820 + 1] ?? 0),
      freezePanes: popcornElectronWorkbookPanelParam97.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam97.colWidths,
      rowHeights: popcornElectronWorkbookPanelParam97.rowHeights
    }),
    popcornElectronWorkbookPanelValue824 = Math.max(popcornElectronWorkbookPanelParam97.camera.k, 2.220446049250313e-16),
    popcornElectronWorkbookPanelValue825 = popcornElectronWorkbookPanelParam97.sizePx / popcornElectronWorkbookPanelValue824;
  return {
    left: popcornElectronWorkbookPanelValue823.x - popcornElectronWorkbookPanelValue825 / 2,
    top: popcornElectronWorkbookPanelValue823.y - popcornElectronWorkbookPanelValue825 / 2,
    width: popcornElectronWorkbookPanelValue825,
    height: popcornElectronWorkbookPanelValue825
  };
}
function popcornElectronWorkbookPanelHelper22(event) {
  let popcornElectronWorkbookPanelValue1036 = popcornElectronWorkbookPanelHelper21({
      selectionRect: event.selectionRect,
      colWidths: event.colWidths,
      rowHeights: event.rowHeights,
      camera: event.camera,
      freezePanes: event.freezePanes,
      sizePx: 12
    }),
    popcornElectronWorkbookPanelValue1037 = Math.max(event.camera.k, 2.220446049250313e-16);
  return !!(popcornElectronWorkbookPanelValue1036 && event.screenX >= popcornElectronWorkbookPanelValue1036.left * popcornElectronWorkbookPanelValue1037 && event.screenX <= (popcornElectronWorkbookPanelValue1036.left + popcornElectronWorkbookPanelValue1036.width) * popcornElectronWorkbookPanelValue1037 && event.screenY >= popcornElectronWorkbookPanelValue1036.top * popcornElectronWorkbookPanelValue1037 && event.screenY <= (popcornElectronWorkbookPanelValue1036.top + popcornElectronWorkbookPanelValue1036.height) * popcornElectronWorkbookPanelValue1037);
}
function popcornElectronWorkbookPanelHelper23(popcornElectronWorkbookPanelParam352) {
  let popcornElectronWorkbookPanelValue1327 = [0];
  for (let popcornElectronWorkbookPanelValue1370 = 0; popcornElectronWorkbookPanelValue1370 < popcornElectronWorkbookPanelParam352.length; popcornElectronWorkbookPanelValue1370 += 1) popcornElectronWorkbookPanelValue1327[popcornElectronWorkbookPanelValue1370 + 1] = (popcornElectronWorkbookPanelValue1327[popcornElectronWorkbookPanelValue1370] ?? 0) + (popcornElectronWorkbookPanelParam352[popcornElectronWorkbookPanelValue1370] ?? 0);
  return popcornElectronWorkbookPanelValue1327;
}
function popcornElectronWorkbookPanelHelper24(popcornElectronWorkbookPanelParam190) {
  let popcornElectronWorkbookPanelValue1121 = Math.max(0, Math.min(popcornElectronWorkbookPanelParam190.c1, popcornElectronWorkbookPanelParam190.c2)),
    popcornElectronWorkbookPanelValue1122 = Math.min(popcornElectronWorkbookPanelParam190.viewColWidths.length - 1, Math.max(popcornElectronWorkbookPanelParam190.c1, popcornElectronWorkbookPanelParam190.c2)),
    popcornElectronWorkbookPanelValue1123 = Math.max(0, Math.min(popcornElectronWorkbookPanelParam190.r1, popcornElectronWorkbookPanelParam190.r2)),
    popcornElectronWorkbookPanelValue1124 = Math.min(popcornElectronWorkbookPanelParam190.rowHeights.length - 1, Math.max(popcornElectronWorkbookPanelParam190.r1, popcornElectronWorkbookPanelParam190.r2));
  return popcornElectronWorkbookPanelValue1121 > popcornElectronWorkbookPanelValue1122 || popcornElectronWorkbookPanelValue1123 > popcornElectronWorkbookPanelValue1124 ? null : {
    cStart: popcornElectronWorkbookPanelValue1121,
    cEnd: popcornElectronWorkbookPanelValue1122,
    rStart: popcornElectronWorkbookPanelValue1123,
    rEnd: popcornElectronWorkbookPanelValue1124
  };
}
function popcornElectronWorkbookPanelHelper25(popcornElectronWorkbookPanelParam141) {
  let popcornElectronWorkbookPanelValue1010 = new Map();
  for (let popcornElectronWorkbookPanelValue1062 of popcornElectronWorkbookPanelParam141?.mergedCells ?? []) {
    let popcornElectronWorkbookPanelValue1078 = addressUtilsD(popcornElectronWorkbookPanelValue1062.startAddress),
      popcornElectronWorkbookPanelValue1079 = addressUtilsV(popcornElectronWorkbookPanelValue1062.startAddress),
      popcornElectronWorkbookPanelValue1080 = addressUtilsD(popcornElectronWorkbookPanelValue1062.endAddress),
      popcornElectronWorkbookPanelValue1081 = addressUtilsV(popcornElectronWorkbookPanelValue1062.endAddress),
      popcornElectronWorkbookPanelValue1082 = {
        r1: Math.min(popcornElectronWorkbookPanelValue1079, popcornElectronWorkbookPanelValue1081),
        c1: Math.min(popcornElectronWorkbookPanelValue1078, popcornElectronWorkbookPanelValue1080),
        r2: Math.max(popcornElectronWorkbookPanelValue1079, popcornElectronWorkbookPanelValue1081),
        c2: Math.max(popcornElectronWorkbookPanelValue1078, popcornElectronWorkbookPanelValue1080)
      };
    for (let popcornElectronWorkbookPanelValue1348 = popcornElectronWorkbookPanelValue1082.r1; popcornElectronWorkbookPanelValue1348 <= popcornElectronWorkbookPanelValue1082.r2; popcornElectronWorkbookPanelValue1348 += 1) for (let popcornElectronWorkbookPanelValue1385 = popcornElectronWorkbookPanelValue1082.c1; popcornElectronWorkbookPanelValue1385 <= popcornElectronWorkbookPanelValue1082.c2; popcornElectronWorkbookPanelValue1385 += 1) popcornElectronWorkbookPanelValue1010.set(`${popcornElectronWorkbookPanelValue1348}:${popcornElectronWorkbookPanelValue1385}`, popcornElectronWorkbookPanelValue1082);
  }
  return popcornElectronWorkbookPanelValue1010;
}
function popcornElectronWorkbookPanelHelper26(popcornElectronWorkbookPanelParam200, popcornElectronWorkbookPanelParam201, popcornElectronWorkbookPanelParam202, popcornElectronWorkbookPanelParam203, popcornElectronWorkbookPanelParam204, popcornElectronWorkbookPanelParam205) {
  let popcornElectronWorkbookPanelValue1147 = Math.max(0, Math.min(popcornElectronWorkbookPanelParam205, popcornElectronWorkbookPanelParam203 / 2, popcornElectronWorkbookPanelParam204 / 2));
  popcornElectronWorkbookPanelParam200.beginPath();
  popcornElectronWorkbookPanelParam200.moveTo(popcornElectronWorkbookPanelParam201 + popcornElectronWorkbookPanelValue1147, popcornElectronWorkbookPanelParam202);
  popcornElectronWorkbookPanelParam200.arcTo(popcornElectronWorkbookPanelParam201 + popcornElectronWorkbookPanelParam203, popcornElectronWorkbookPanelParam202, popcornElectronWorkbookPanelParam201 + popcornElectronWorkbookPanelParam203, popcornElectronWorkbookPanelParam202 + popcornElectronWorkbookPanelParam204, popcornElectronWorkbookPanelValue1147);
  popcornElectronWorkbookPanelParam200.arcTo(popcornElectronWorkbookPanelParam201 + popcornElectronWorkbookPanelParam203, popcornElectronWorkbookPanelParam202 + popcornElectronWorkbookPanelParam204, popcornElectronWorkbookPanelParam201, popcornElectronWorkbookPanelParam202 + popcornElectronWorkbookPanelParam204, popcornElectronWorkbookPanelValue1147);
  popcornElectronWorkbookPanelParam200.arcTo(popcornElectronWorkbookPanelParam201, popcornElectronWorkbookPanelParam202 + popcornElectronWorkbookPanelParam204, popcornElectronWorkbookPanelParam201, popcornElectronWorkbookPanelParam202, popcornElectronWorkbookPanelValue1147);
  popcornElectronWorkbookPanelParam200.arcTo(popcornElectronWorkbookPanelParam201, popcornElectronWorkbookPanelParam202, popcornElectronWorkbookPanelParam201 + popcornElectronWorkbookPanelParam203, popcornElectronWorkbookPanelParam202, popcornElectronWorkbookPanelValue1147);
  popcornElectronWorkbookPanelParam200.closePath();
}
function $(popcornElectronWorkbookPanelParam75) {
  let {
      ctx,
      camera
    } = popcornElectronWorkbookPanelParam75,
    popcornElectronWorkbookPanelValue716 = Math.max(camera.k, 2.220446049250313e-16),
    popcornElectronWorkbookPanelValue717 = -camera.x / popcornElectronWorkbookPanelValue716,
    popcornElectronWorkbookPanelValue718 = -camera.y / popcornElectronWorkbookPanelValue716,
    {
      width,
      height,
      dpr
    } = popcornElectronWorkbookPanelParam75.viewportMetrics;
  if (width <= 0 || height <= 0 || dpr <= 0) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  let popcornElectronWorkbookPanelValue719 = width / popcornElectronWorkbookPanelValue716 - 40,
    popcornElectronWorkbookPanelValue720 = height / popcornElectronWorkbookPanelValue716 - 20,
    popcornElectronWorkbookPanelValue721 = popcornElectronWorkbookPanelValue719 > 0 && popcornElectronWorkbookPanelValue720 > 0;
  return {
    ctx,
    camera,
    freezePanes: popcornElectronWorkbookPanelParam75.freezePanes,
    viewColWidths: popcornElectronWorkbookPanelParam75.viewColWidths,
    rowHeights: popcornElectronWorkbookPanelParam75.rowHeights,
    zoom: popcornElectronWorkbookPanelValue716,
    scrollLeft: popcornElectronWorkbookPanelValue717,
    scrollTop: popcornElectronWorkbookPanelValue718,
    viewportW: width,
    viewportH: height,
    gridBodyWidth: popcornElectronWorkbookPanelValue719,
    gridBodyHeight: popcornElectronWorkbookPanelValue720,
    hasGridBody: popcornElectronWorkbookPanelValue721,
    applyGridBodyClip: popcornElectronWorkbookPanelParam483 => popcornElectronWorkbookPanelValue721 ? (popcornElectronWorkbookPanelParam483.beginPath(), popcornElectronWorkbookPanelParam483.rect(40, 20, popcornElectronWorkbookPanelValue719, popcornElectronWorkbookPanelValue720), popcornElectronWorkbookPanelParam483.clip(), true) : false,
    intersectsGridBody: (popcornElectronWorkbookPanelParam337, popcornElectronWorkbookPanelParam338, popcornElectronWorkbookPanelParam339, popcornElectronWorkbookPanelParam340) => popcornElectronWorkbookPanelValue721 && popcornElectronWorkbookPanelParam339 > 0 && popcornElectronWorkbookPanelParam340 > 0 && popcornElectronWorkbookPanelParam337 + popcornElectronWorkbookPanelParam339 > 40 && popcornElectronWorkbookPanelParam337 < 40 + popcornElectronWorkbookPanelValue719 && popcornElectronWorkbookPanelParam338 + popcornElectronWorkbookPanelParam340 > 20 && popcornElectronWorkbookPanelParam338 < 20 + popcornElectronWorkbookPanelValue720
  };
}
function popcornElectronWorkbookPanelHelper27(popcornElectronWorkbookPanelParam34) {
  if (!popcornElectronWorkbookPanelParam34.selectionStart || !popcornElectronWorkbookPanelParam34.selectionEnd) return null;
  let r1 = Math.min(popcornElectronWorkbookPanelParam34.selectionStart.row, popcornElectronWorkbookPanelParam34.selectionEnd.row),
    r2 = Math.max(popcornElectronWorkbookPanelParam34.selectionStart.row, popcornElectronWorkbookPanelParam34.selectionEnd.row),
    c1 = Math.min(popcornElectronWorkbookPanelParam34.selectionStart.col, popcornElectronWorkbookPanelParam34.selectionEnd.col),
    c2 = Math.max(popcornElectronWorkbookPanelParam34.selectionStart.col, popcornElectronWorkbookPanelParam34.selectionEnd.col);
  popcornElectronWorkbookPanelParam34.selectionStart.row === popcornElectronWorkbookPanelParam34.selectionEnd.row && popcornElectronWorkbookPanelParam34.selectionStart.col === popcornElectronWorkbookPanelParam34.selectionEnd.col && ({
    r1,
    c1,
    r2,
    c2
  } = popcornElectronWorkbookPanelParam34.resolveMergedRect({
    r1: popcornElectronWorkbookPanelParam34.selectionStart.row,
    c1: popcornElectronWorkbookPanelParam34.selectionStart.col,
    r2: popcornElectronWorkbookPanelParam34.selectionStart.row,
    c2: popcornElectronWorkbookPanelParam34.selectionStart.col
  }));
  let popcornElectronWorkbookPanelValue591 = popcornElectronWorkbookPanelHelper13({
      camera: popcornElectronWorkbookPanelParam34.camera,
      worldX: 40 + (popcornElectronWorkbookPanelParam34.colOffsets[c1] ?? 0),
      worldY: 20 + (popcornElectronWorkbookPanelParam34.rowOffsets[r1] ?? 0),
      freezePanes: popcornElectronWorkbookPanelParam34.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam34.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam34.rowHeights
    }),
    popcornElectronWorkbookPanelValue592 = popcornElectronWorkbookPanelHelper13({
      camera: popcornElectronWorkbookPanelParam34.camera,
      worldX: 40 + (popcornElectronWorkbookPanelParam34.colOffsets[popcornElectronWorkbookPanelParam34.selectionStart.col] ?? 0),
      worldY: 20 + (popcornElectronWorkbookPanelParam34.rowOffsets[popcornElectronWorkbookPanelParam34.selectionStart.row] ?? 0),
      freezePanes: popcornElectronWorkbookPanelParam34.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam34.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam34.rowHeights
    });
  return {
    r1,
    c1,
    r2,
    c2,
    x: popcornElectronWorkbookPanelValue591.x,
    y: popcornElectronWorkbookPanelValue591.y,
    w: (popcornElectronWorkbookPanelParam34.colOffsets[c2 + 1] ?? 0) - (popcornElectronWorkbookPanelParam34.colOffsets[c1] ?? 0),
    h: (popcornElectronWorkbookPanelParam34.rowOffsets[r2 + 1] ?? 0) - (popcornElectronWorkbookPanelParam34.rowOffsets[r1] ?? 0),
    ax: popcornElectronWorkbookPanelValue592.x,
    ay: popcornElectronWorkbookPanelValue592.y,
    aw: popcornElectronWorkbookPanelParam34.viewColWidths[popcornElectronWorkbookPanelParam34.selectionStart.col] ?? 0,
    ah: popcornElectronWorkbookPanelParam34.rowHeights[popcornElectronWorkbookPanelParam34.selectionStart.row] ?? 0
  };
}
function popcornElectronWorkbookPanelHelper28(popcornElectronWorkbookPanelParam41) {
  let popcornElectronWorkbookPanelValue607 = popcornElectronWorkbookPanelHelper23(popcornElectronWorkbookPanelParam41.viewColWidths),
    popcornElectronWorkbookPanelValue608 = popcornElectronWorkbookPanelHelper23(popcornElectronWorkbookPanelParam41.rowHeights),
    popcornElectronWorkbookPanelValue609 = popcornElectronWorkbookPanelHelper25(popcornElectronWorkbookPanelParam41.sheet),
    popcornElectronWorkbookPanelValue610 = popcornElectronWorkbookPanelParam453 => popcornElectronWorkbookPanelParam453.r1 !== popcornElectronWorkbookPanelParam453.r2 || popcornElectronWorkbookPanelParam453.c1 !== popcornElectronWorkbookPanelParam453.c2 ? popcornElectronWorkbookPanelParam453 : popcornElectronWorkbookPanelValue609.get(`${popcornElectronWorkbookPanelParam453.r1}:${popcornElectronWorkbookPanelParam453.c1}`) ?? popcornElectronWorkbookPanelParam453,
    popcornElectronWorkbookPanelValue611 = {
      r1: Math.min(popcornElectronWorkbookPanelParam41.selectionRect.r1, popcornElectronWorkbookPanelParam41.selectionRect.r2),
      c1: Math.min(popcornElectronWorkbookPanelParam41.selectionRect.c1, popcornElectronWorkbookPanelParam41.selectionRect.c2),
      r2: Math.max(popcornElectronWorkbookPanelParam41.selectionRect.r1, popcornElectronWorkbookPanelParam41.selectionRect.r2),
      c2: Math.max(popcornElectronWorkbookPanelParam41.selectionRect.c1, popcornElectronWorkbookPanelParam41.selectionRect.c2)
    },
    popcornElectronWorkbookPanelValue612 = popcornElectronWorkbookPanelParam41.activeCell == null ? {
      row: popcornElectronWorkbookPanelValue611.r1,
      col: popcornElectronWorkbookPanelValue611.c1
    } : {
      row: Math.max(popcornElectronWorkbookPanelValue611.r1, Math.min(popcornElectronWorkbookPanelParam41.activeCell.row, popcornElectronWorkbookPanelValue611.r2)),
      col: Math.max(popcornElectronWorkbookPanelValue611.c1, Math.min(popcornElectronWorkbookPanelParam41.activeCell.col, popcornElectronWorkbookPanelValue611.c2))
    },
    popcornElectronWorkbookPanelValue613 = popcornElectronWorkbookPanelParam41.selectionStart ?? popcornElectronWorkbookPanelValue612,
    popcornElectronWorkbookPanelValue614 = popcornElectronWorkbookPanelParam41.selectionEnd ?? {
      row: popcornElectronWorkbookPanelValue613.row === popcornElectronWorkbookPanelValue611.r1 ? popcornElectronWorkbookPanelValue611.r2 : popcornElectronWorkbookPanelValue611.r1,
      col: popcornElectronWorkbookPanelValue613.col === popcornElectronWorkbookPanelValue611.c1 ? popcornElectronWorkbookPanelValue611.c2 : popcornElectronWorkbookPanelValue611.c1
    },
    popcornElectronWorkbookPanelValue615 = popcornElectronWorkbookPanelHelper27({
      camera: popcornElectronWorkbookPanelParam41.camera,
      colOffsets: popcornElectronWorkbookPanelValue607,
      freezePanes: popcornElectronWorkbookPanelParam41.freezePanes,
      resolveMergedRect: popcornElectronWorkbookPanelValue610,
      rowOffsets: popcornElectronWorkbookPanelValue608,
      rowHeights: popcornElectronWorkbookPanelParam41.rowHeights,
      selectionStart: popcornElectronWorkbookPanelValue613,
      selectionEnd: popcornElectronWorkbookPanelValue614,
      viewColWidths: popcornElectronWorkbookPanelParam41.viewColWidths
    });
  return {
    colOffsets: popcornElectronWorkbookPanelValue607,
    rowOffsets: popcornElectronWorkbookPanelValue608,
    resolveMergedRect: popcornElectronWorkbookPanelValue610,
    normalizedRect: popcornElectronWorkbookPanelValue611,
    selectionRect: popcornElectronWorkbookPanelValue615,
    clampedRect: popcornElectronWorkbookPanelValue615 && popcornElectronWorkbookPanelHelper24({
      c1: popcornElectronWorkbookPanelValue611.c1,
      c2: popcornElectronWorkbookPanelValue611.c2,
      r1: popcornElectronWorkbookPanelValue611.r1,
      r2: popcornElectronWorkbookPanelValue611.r2,
      viewColWidths: popcornElectronWorkbookPanelParam41.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam41.rowHeights
    })
  };
}
function popcornElectronWorkbookPanelHelper29(popcornElectronWorkbookPanelParam241) {
  let {
    clampedRect,
    selectionRect
  } = popcornElectronWorkbookPanelHelper28(popcornElectronWorkbookPanelParam241);
  if (!selectionRect || !clampedRect) return null;
  let popcornElectronWorkbookPanelValue1232 = Math.max(popcornElectronWorkbookPanelParam241.camera.k, 2.220446049250313e-16);
  return {
    left: selectionRect.x * popcornElectronWorkbookPanelValue1232,
    top: selectionRect.y * popcornElectronWorkbookPanelValue1232,
    width: selectionRect.w * popcornElectronWorkbookPanelValue1232,
    height: selectionRect.h * popcornElectronWorkbookPanelValue1232
  };
}
function popcornElectronWorkbookPanelHelper30(popcornElectronWorkbookPanelParam120) {
  if (!popcornElectronWorkbookPanelParam120.frame.hasGridBody || !popcornElectronWorkbookPanelParam120.selectionRect) return;
  let {
      ctx,
      zoom
    } = popcornElectronWorkbookPanelParam120.frame,
    {
      ax,
      ah,
      aw,
      ay,
      h,
      w,
      x,
      y
    } = popcornElectronWorkbookPanelParam120.selectionRect;
  ctx.save();
  ctx.scale(zoom, zoom);
  popcornElectronWorkbookPanelParam120.frame.applyGridBodyClip(ctx);
  ctx.fillStyle = popcornElectronWorkbookPanelParam120.accentFill;
  let popcornElectronWorkbookPanelValue923 = x + w,
    popcornElectronWorkbookPanelValue924 = y + h,
    popcornElectronWorkbookPanelValue925 = ax + aw,
    popcornElectronWorkbookPanelValue926 = ay + ah;
  ay > y && ctx.fillRect(x, y, w, ay - y);
  popcornElectronWorkbookPanelValue926 < popcornElectronWorkbookPanelValue924 && ctx.fillRect(x, popcornElectronWorkbookPanelValue926, w, popcornElectronWorkbookPanelValue924 - popcornElectronWorkbookPanelValue926);
  ax > x && ctx.fillRect(x, ay, ax - x, ah);
  popcornElectronWorkbookPanelValue925 < popcornElectronWorkbookPanelValue923 && ctx.fillRect(popcornElectronWorkbookPanelValue925, ay, popcornElectronWorkbookPanelValue923 - popcornElectronWorkbookPanelValue925, ah);
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper31(popcornElectronWorkbookPanelParam100) {
  let popcornElectronWorkbookPanelValue833 = popcornElectronWorkbookPanelHelper24({
    c1: Number.isFinite(popcornElectronWorkbookPanelParam100.range.c1) ? popcornElectronWorkbookPanelParam100.range.c1 : 0,
    c2: Number.isFinite(popcornElectronWorkbookPanelParam100.range.c2) ? popcornElectronWorkbookPanelParam100.range.c2 : popcornElectronWorkbookPanelParam100.viewColWidths.length - 1,
    r1: Number.isFinite(popcornElectronWorkbookPanelParam100.range.r1) ? popcornElectronWorkbookPanelParam100.range.r1 : 0,
    r2: Number.isFinite(popcornElectronWorkbookPanelParam100.range.r2) ? popcornElectronWorkbookPanelParam100.range.r2 : popcornElectronWorkbookPanelParam100.rowHeights.length - 1,
    viewColWidths: popcornElectronWorkbookPanelParam100.viewColWidths,
    rowHeights: popcornElectronWorkbookPanelParam100.rowHeights
  });
  return popcornElectronWorkbookPanelValue833 ? {
    x: 40 + (popcornElectronWorkbookPanelParam100.colOffsets[popcornElectronWorkbookPanelValue833.cStart] ?? 0),
    y: 20 + (popcornElectronWorkbookPanelParam100.rowOffsets[popcornElectronWorkbookPanelValue833.rStart] ?? 0),
    w: (popcornElectronWorkbookPanelParam100.colOffsets[popcornElectronWorkbookPanelValue833.cEnd + 1] ?? 0) - (popcornElectronWorkbookPanelParam100.colOffsets[popcornElectronWorkbookPanelValue833.cStart] ?? 0),
    h: (popcornElectronWorkbookPanelParam100.rowOffsets[popcornElectronWorkbookPanelValue833.rEnd + 1] ?? 0) - (popcornElectronWorkbookPanelParam100.rowOffsets[popcornElectronWorkbookPanelValue833.rStart] ?? 0)
  } : null;
}
function popcornElectronWorkbookPanelHelper32(popcornElectronWorkbookPanelParam58) {
  if (!popcornElectronWorkbookPanelParam58.rangeHighlights?.length || !popcornElectronWorkbookPanelParam58.frame.hasGridBody) return;
  let {
    ctx,
    zoom
  } = popcornElectronWorkbookPanelParam58.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  popcornElectronWorkbookPanelParam58.frame.applyGridBodyClip(ctx);
  for (let popcornElectronWorkbookPanelValue683 of popcornElectronWorkbookPanelParam58.rangeHighlights) {
    let popcornElectronWorkbookPanelValue686 = popcornElectronWorkbookPanelHelper31({
      colOffsets: popcornElectronWorkbookPanelParam58.colOffsets,
      rowOffsets: popcornElectronWorkbookPanelParam58.rowOffsets,
      viewColWidths: popcornElectronWorkbookPanelParam58.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam58.rowHeights,
      range: popcornElectronWorkbookPanelValue683
    });
    if (!popcornElectronWorkbookPanelValue686) continue;
    let popcornElectronWorkbookPanelValue687 = popcornElectronWorkbookPanelHelper15({
      camera: popcornElectronWorkbookPanelParam58.frame.camera,
      worldX: popcornElectronWorkbookPanelValue686.x,
      worldY: popcornElectronWorkbookPanelValue686.y,
      width: popcornElectronWorkbookPanelValue686.w,
      height: popcornElectronWorkbookPanelValue686.h,
      freezePanes: popcornElectronWorkbookPanelParam58.frame.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam58.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam58.rowHeights
    });
    for (let popcornElectronWorkbookPanelValue919 of popcornElectronWorkbookPanelValue687) {
      if (!popcornElectronWorkbookPanelParam58.frame.intersectsGridBody(popcornElectronWorkbookPanelValue919.x, popcornElectronWorkbookPanelValue919.y, popcornElectronWorkbookPanelValue919.width, popcornElectronWorkbookPanelValue919.height)) continue;
      let popcornElectronWorkbookPanelValue942 = popcornElectronWorkbookPanelValue683.fillAlpha ?? 0.12;
      ctx.fillStyle = popcornElectronWorkbookPanelHelper44(popcornElectronWorkbookPanelValue683.color, popcornElectronWorkbookPanelValue942);
      ctx.fillRect(popcornElectronWorkbookPanelValue919.x, popcornElectronWorkbookPanelValue919.y, popcornElectronWorkbookPanelValue919.width, popcornElectronWorkbookPanelValue919.height);
      popcornElectronWorkbookPanelValue683.showBorder !== false && (ctx.save(), popcornElectronWorkbookPanelValue683.dashed && ctx.setLineDash([6 / zoom, 4 / zoom]), ctx.strokeStyle = popcornElectronWorkbookPanelValue683.color, ctx.lineWidth = (popcornElectronWorkbookPanelValue683.borderWidthPx ?? 2) / zoom, popcornElectronWorkbookPanelHelper26(ctx, popcornElectronWorkbookPanelValue919.x, popcornElectronWorkbookPanelValue919.y, popcornElectronWorkbookPanelValue919.width, popcornElectronWorkbookPanelValue919.height, (popcornElectronWorkbookPanelValue683.borderRadiusPx ?? 2) / zoom), ctx.stroke(), ctx.restore());
    }
  }
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper33(popcornElectronWorkbookPanelParam128, popcornElectronWorkbookPanelParam129, popcornElectronWorkbookPanelParam130, popcornElectronWorkbookPanelParam131, popcornElectronWorkbookPanelParam132, popcornElectronWorkbookPanelParam133) {
  let popcornElectronWorkbookPanelValue965 = 10 / popcornElectronWorkbookPanelParam133,
    popcornElectronWorkbookPanelValue966 = 4 / popcornElectronWorkbookPanelParam133,
    popcornElectronWorkbookPanelValue967 = 2 / popcornElectronWorkbookPanelParam133,
    popcornElectronWorkbookPanelValue968 = 4 / popcornElectronWorkbookPanelParam133;
  popcornElectronWorkbookPanelParam128.save();
  popcornElectronWorkbookPanelParam128.font = `${popcornElectronWorkbookPanelValue965}px system-ui, -apple-system, BlinkMacSystemFont, sans-serif`;
  popcornElectronWorkbookPanelParam128.textBaseline = "top";
  popcornElectronWorkbookPanelParam128.textAlign = "left";
  let popcornElectronWorkbookPanelValue969 = popcornElectronWorkbookPanelParam128.measureText(popcornElectronWorkbookPanelParam129).width + popcornElectronWorkbookPanelValue966 * 2,
    popcornElectronWorkbookPanelValue970 = popcornElectronWorkbookPanelValue965 + popcornElectronWorkbookPanelValue967 * 2,
    popcornElectronWorkbookPanelValue971 = popcornElectronWorkbookPanelParam130 + 2 / popcornElectronWorkbookPanelParam133,
    popcornElectronWorkbookPanelValue972 = popcornElectronWorkbookPanelParam131 + 2 / popcornElectronWorkbookPanelParam133;
  popcornElectronWorkbookPanelParam128.fillStyle = popcornElectronWorkbookPanelParam132;
  popcornElectronWorkbookPanelHelper26(popcornElectronWorkbookPanelParam128, popcornElectronWorkbookPanelValue971, popcornElectronWorkbookPanelValue972, popcornElectronWorkbookPanelValue969, popcornElectronWorkbookPanelValue970, popcornElectronWorkbookPanelValue968);
  popcornElectronWorkbookPanelParam128.fill();
  popcornElectronWorkbookPanelParam128.fillStyle = "#ffffff";
  popcornElectronWorkbookPanelParam128.fillText(popcornElectronWorkbookPanelParam129, popcornElectronWorkbookPanelValue971 + popcornElectronWorkbookPanelValue966, popcornElectronWorkbookPanelValue972 + popcornElectronWorkbookPanelValue967);
  popcornElectronWorkbookPanelParam128.restore();
}
function popcornElectronWorkbookPanelHelper34(popcornElectronWorkbookPanelParam59) {
  if (popcornElectronWorkbookPanelParam59.awarenessSelections.length === 0 || popcornElectronWorkbookPanelParam59.viewColWidths.length === 0 || popcornElectronWorkbookPanelParam59.rowHeights.length === 0) return;
  let {
    ctx,
    scrollLeft,
    scrollTop,
    zoom
  } = popcornElectronWorkbookPanelParam59.frame;
  if (ctx.save(), ctx.scale(zoom, zoom), popcornElectronWorkbookPanelParam59.frame.applyGridBodyClip(ctx)) for (let popcornElectronWorkbookPanelValue727 of popcornElectronWorkbookPanelParam59.awarenessSelections) {
    if (popcornElectronWorkbookPanelValue727.selectedElementIds.length > 0) continue;
    let popcornElectronWorkbookPanelValue750 = popcornElectronWorkbookPanelParam59.resolveMergedRect(popcornElectronWorkbookPanelValue727.rect),
      popcornElectronWorkbookPanelValue751 = popcornElectronWorkbookPanelHelper24({
        c1: popcornElectronWorkbookPanelValue750.c1,
        c2: popcornElectronWorkbookPanelValue750.c2,
        r1: popcornElectronWorkbookPanelValue750.r1,
        r2: popcornElectronWorkbookPanelValue750.r2,
        viewColWidths: popcornElectronWorkbookPanelParam59.viewColWidths,
        rowHeights: popcornElectronWorkbookPanelParam59.rowHeights
      });
    if (!popcornElectronWorkbookPanelValue751) continue;
    let {
        cStart,
        cEnd,
        rStart,
        rEnd
      } = popcornElectronWorkbookPanelValue751,
      popcornElectronWorkbookPanelValue752 = 40 + (popcornElectronWorkbookPanelParam59.colOffsets[cStart] ?? 0) - scrollLeft,
      popcornElectronWorkbookPanelValue753 = 20 + (popcornElectronWorkbookPanelParam59.rowOffsets[rStart] ?? 0) - scrollTop,
      popcornElectronWorkbookPanelValue754 = (popcornElectronWorkbookPanelParam59.colOffsets[cEnd + 1] ?? 0) - (popcornElectronWorkbookPanelParam59.colOffsets[cStart] ?? 0),
      popcornElectronWorkbookPanelValue755 = (popcornElectronWorkbookPanelParam59.rowOffsets[rEnd + 1] ?? 0) - (popcornElectronWorkbookPanelParam59.rowOffsets[rStart] ?? 0);
    if (!popcornElectronWorkbookPanelParam59.frame.intersectsGridBody(popcornElectronWorkbookPanelValue752, popcornElectronWorkbookPanelValue753, popcornElectronWorkbookPanelValue754, popcornElectronWorkbookPanelValue755)) continue;
    ctx.strokeStyle = popcornElectronWorkbookPanelValue727.stroke;
    ctx.lineWidth = 2 / zoom;
    ctx.setLineDash([]);
    ctx.strokeRect(popcornElectronWorkbookPanelValue752, popcornElectronWorkbookPanelValue753, popcornElectronWorkbookPanelValue754, popcornElectronWorkbookPanelValue755);
    let popcornElectronWorkbookPanelValue756 = popcornElectronWorkbookPanelValue727.status ?? popcornElectronWorkbookPanelValue727.label;
    popcornElectronWorkbookPanelValue756 && popcornElectronWorkbookPanelHelper33(ctx, popcornElectronWorkbookPanelValue756, popcornElectronWorkbookPanelValue752, popcornElectronWorkbookPanelValue753, popcornElectronWorkbookPanelValue727.stroke, zoom);
  }
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper35(popcornElectronWorkbookPanelParam15) {
  if (popcornElectronWorkbookPanelParam15.awarenessDrawingSelections.length === 0 || !popcornElectronWorkbookPanelParam15.frame.hasGridBody) return;
  let {
    ctx,
    zoom
  } = popcornElectronWorkbookPanelParam15.frame;
  if (ctx.save(), ctx.scale(zoom, zoom), popcornElectronWorkbookPanelParam15.frame.applyGridBodyClip(ctx)) for (let popcornElectronWorkbookPanelValue451 of popcornElectronWorkbookPanelParam15.awarenessDrawingSelections) {
    let popcornElectronWorkbookPanelValue454 = popcornElectronWorkbookPanelValue451.rotation ?? 0,
      popcornElectronWorkbookPanelValue455 = Math.abs(popcornElectronWorkbookPanelValue454) < 0.001,
      popcornElectronWorkbookPanelValue456 = (popcornElectronWorkbookPanelValue455 ? [{
        x: popcornElectronWorkbookPanelValue451.logicalBounds.x,
        y: popcornElectronWorkbookPanelValue451.logicalBounds.y
      }, {
        x: popcornElectronWorkbookPanelValue451.logicalBounds.x + popcornElectronWorkbookPanelValue451.logicalBounds.width,
        y: popcornElectronWorkbookPanelValue451.logicalBounds.y
      }, {
        x: popcornElectronWorkbookPanelValue451.logicalBounds.x + popcornElectronWorkbookPanelValue451.logicalBounds.width,
        y: popcornElectronWorkbookPanelValue451.logicalBounds.y + popcornElectronWorkbookPanelValue451.logicalBounds.height
      }, {
        x: popcornElectronWorkbookPanelValue451.logicalBounds.x,
        y: popcornElectronWorkbookPanelValue451.logicalBounds.y + popcornElectronWorkbookPanelValue451.logicalBounds.height
      }] : (() => {
        let popcornElectronWorkbookPanelValue1095 = _popcornElectronSurfaceStyleS({
          left: popcornElectronWorkbookPanelValue451.logicalBounds.x,
          top: popcornElectronWorkbookPanelValue451.logicalBounds.y,
          width: popcornElectronWorkbookPanelValue451.logicalBounds.width,
          height: popcornElectronWorkbookPanelValue451.logicalBounds.height,
          rotation: popcornElectronWorkbookPanelValue454
        });
        return [popcornElectronWorkbookPanelValue1095.nw, popcornElectronWorkbookPanelValue1095.ne, popcornElectronWorkbookPanelValue1095.se, popcornElectronWorkbookPanelValue1095.sw];
      })()).map(item => popcornElectronWorkbookPanelHelper13({
        camera: popcornElectronWorkbookPanelParam15.frame.camera,
        worldX: item.x,
        worldY: item.y,
        freezePanes: popcornElectronWorkbookPanelParam15.frame.freezePanes,
        columnWidths: popcornElectronWorkbookPanelParam15.frame.viewColWidths,
        rowHeights: popcornElectronWorkbookPanelParam15.frame.rowHeights
      }));
    if (ctx.strokeStyle = popcornElectronWorkbookPanelValue451.stroke, ctx.lineWidth = 1.25 / zoom, ctx.setLineDash([]), popcornElectronWorkbookPanelValue455) {
      let popcornElectronWorkbookPanelValue1031 = popcornElectronWorkbookPanelHelper15({
        camera: popcornElectronWorkbookPanelParam15.frame.camera,
        worldX: popcornElectronWorkbookPanelValue451.logicalBounds.x,
        worldY: popcornElectronWorkbookPanelValue451.logicalBounds.y,
        width: popcornElectronWorkbookPanelValue451.logicalBounds.width,
        height: popcornElectronWorkbookPanelValue451.logicalBounds.height,
        freezePanes: popcornElectronWorkbookPanelParam15.frame.freezePanes,
        columnWidths: popcornElectronWorkbookPanelParam15.frame.viewColWidths,
        rowHeights: popcornElectronWorkbookPanelParam15.frame.rowHeights
      });
      for (let popcornElectronWorkbookPanelValue1387 of popcornElectronWorkbookPanelValue1031) ctx.strokeRect(popcornElectronWorkbookPanelValue1387.x, popcornElectronWorkbookPanelValue1387.y, popcornElectronWorkbookPanelValue1387.width, popcornElectronWorkbookPanelValue1387.height);
    } else {
      ctx.beginPath();
      ctx.moveTo(popcornElectronWorkbookPanelValue456[0].x, popcornElectronWorkbookPanelValue456[0].y);
      for (let popcornElectronWorkbookPanelValue1383 = 1; popcornElectronWorkbookPanelValue1383 < popcornElectronWorkbookPanelValue456.length; popcornElectronWorkbookPanelValue1383 += 1) ctx.lineTo(popcornElectronWorkbookPanelValue456[popcornElectronWorkbookPanelValue1383].x, popcornElectronWorkbookPanelValue456[popcornElectronWorkbookPanelValue1383].y);
      ctx.closePath();
      ctx.stroke();
    }
    let popcornElectronWorkbookPanelValue457 = popcornElectronWorkbookPanelValue451.label ?? popcornElectronWorkbookPanelValue451.status;
    popcornElectronWorkbookPanelValue457 && popcornElectronWorkbookPanelHelper33(ctx, popcornElectronWorkbookPanelValue457, Math.min(...popcornElectronWorkbookPanelValue456.map(item => item.x)), Math.max(...popcornElectronWorkbookPanelValue456.map(item => item.y)) + 4 / zoom, popcornElectronWorkbookPanelValue451.stroke, zoom);
  }
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper36(popcornElectronWorkbookPanelParam149) {
  if (!popcornElectronWorkbookPanelParam149.frame.hasGridBody || !popcornElectronWorkbookPanelParam149.selectionRect) return;
  let {
    ctx,
    zoom
  } = popcornElectronWorkbookPanelParam149.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  popcornElectronWorkbookPanelParam149.frame.applyGridBodyClip(ctx) && (ctx.strokeStyle = popcornElectronWorkbookPanelParam149.accentStroke, ctx.lineWidth = 2 / zoom, popcornElectronWorkbookPanelHelper26(ctx, popcornElectronWorkbookPanelParam149.selectionRect.x, popcornElectronWorkbookPanelParam149.selectionRect.y, popcornElectronWorkbookPanelParam149.selectionRect.w, popcornElectronWorkbookPanelParam149.selectionRect.h, 2 / zoom), ctx.stroke());
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper37(popcornElectronWorkbookPanelParam92) {
  if (!popcornElectronWorkbookPanelParam92.frame.hasGridBody || !popcornElectronWorkbookPanelParam92.fillPreviewRect || !popcornElectronWorkbookPanelParam92.selectionRect || popcornElectronWorkbookPanelParam92.fillPreviewRect.r1 === popcornElectronWorkbookPanelParam92.selectionRect.r1 && popcornElectronWorkbookPanelParam92.fillPreviewRect.c1 === popcornElectronWorkbookPanelParam92.selectionRect.c1 && popcornElectronWorkbookPanelParam92.fillPreviewRect.r2 === popcornElectronWorkbookPanelParam92.selectionRect.r2 && popcornElectronWorkbookPanelParam92.fillPreviewRect.c2 === popcornElectronWorkbookPanelParam92.selectionRect.c2) return;
  let {
    ctx,
    zoom
  } = popcornElectronWorkbookPanelParam92.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  popcornElectronWorkbookPanelParam92.frame.applyGridBodyClip(ctx) && (ctx.strokeStyle = popcornElectronWorkbookPanelParam92.accentStroke, ctx.lineWidth = 2 / zoom, popcornElectronWorkbookPanelHelper26(ctx, popcornElectronWorkbookPanelParam92.fillPreviewRect.x, popcornElectronWorkbookPanelParam92.fillPreviewRect.y, popcornElectronWorkbookPanelParam92.fillPreviewRect.w, popcornElectronWorkbookPanelParam92.fillPreviewRect.h, 2 / zoom), ctx.stroke());
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper38(popcornElectronWorkbookPanelParam77) {
  if (!popcornElectronWorkbookPanelParam77.frame.hasGridBody) return;
  let popcornElectronWorkbookPanelValue729 = popcornElectronWorkbookPanelHelper20({
    selectionRect: popcornElectronWorkbookPanelParam77.selectionRect,
    colWidths: popcornElectronWorkbookPanelParam77.frame.viewColWidths,
    rowHeights: popcornElectronWorkbookPanelParam77.frame.rowHeights,
    camera: popcornElectronWorkbookPanelParam77.frame.camera,
    freezePanes: popcornElectronWorkbookPanelParam77.frame.freezePanes
  });
  if (!popcornElectronWorkbookPanelValue729 || !popcornElectronWorkbookPanelParam77.frame.intersectsGridBody(popcornElectronWorkbookPanelValue729.left, popcornElectronWorkbookPanelValue729.top, popcornElectronWorkbookPanelValue729.width, popcornElectronWorkbookPanelValue729.height)) return;
  let {
      ctx,
      zoom
    } = popcornElectronWorkbookPanelParam77.frame,
    popcornElectronWorkbookPanelValue730 = 2 / zoom,
    popcornElectronWorkbookPanelValue731 = 1 / zoom,
    popcornElectronWorkbookPanelValue732 = popcornElectronWorkbookPanelValue729.left,
    popcornElectronWorkbookPanelValue733 = popcornElectronWorkbookPanelValue729.top,
    popcornElectronWorkbookPanelValue734 = popcornElectronWorkbookPanelValue729.width,
    popcornElectronWorkbookPanelValue735 = popcornElectronWorkbookPanelValue729.height;
  ctx.save();
  ctx.scale(zoom, zoom);
  popcornElectronWorkbookPanelParam77.frame.applyGridBodyClip(ctx) && (ctx.fillStyle = popcornElectronWorkbookPanelParam77.accentStroke, popcornElectronWorkbookPanelHelper26(ctx, popcornElectronWorkbookPanelValue732, popcornElectronWorkbookPanelValue733, popcornElectronWorkbookPanelValue734, popcornElectronWorkbookPanelValue735, popcornElectronWorkbookPanelValue730), ctx.fill(), ctx.strokeStyle = "#ffffff", ctx.lineWidth = popcornElectronWorkbookPanelValue731, popcornElectronWorkbookPanelHelper26(ctx, popcornElectronWorkbookPanelValue732 + popcornElectronWorkbookPanelValue731 / 2, popcornElectronWorkbookPanelValue733 + popcornElectronWorkbookPanelValue731 / 2, Math.max(0, popcornElectronWorkbookPanelValue734 - popcornElectronWorkbookPanelValue731), Math.max(0, popcornElectronWorkbookPanelValue735 - popcornElectronWorkbookPanelValue731), Math.max(0, popcornElectronWorkbookPanelValue730 - popcornElectronWorkbookPanelValue731 / 2)), ctx.stroke());
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper39(popcornElectronWorkbookPanelParam12) {
  if (!popcornElectronWorkbookPanelParam12.drawingSelection || !popcornElectronWorkbookPanelParam12.frame.hasGridBody) return;
  let {
      ctx,
      zoom
    } = popcornElectronWorkbookPanelParam12.frame,
    {
      halfVisibleSize,
      visibleSize
    } = _popcornElectronSurfaceStyleD(zoom),
    popcornElectronWorkbookPanelValue438 = popcornElectronWorkbookPanelParam12.drawingSelection.rotation ?? 0,
    popcornElectronWorkbookPanelValue439 = Math.abs(popcornElectronWorkbookPanelValue438) < 0.001,
    popcornElectronWorkbookPanelValue440 = popcornElectronWorkbookPanelValue439 ? [{
      x: popcornElectronWorkbookPanelParam12.drawingSelection.x,
      y: popcornElectronWorkbookPanelParam12.drawingSelection.y
    }, {
      x: popcornElectronWorkbookPanelParam12.drawingSelection.x + popcornElectronWorkbookPanelParam12.drawingSelection.width,
      y: popcornElectronWorkbookPanelParam12.drawingSelection.y
    }, {
      x: popcornElectronWorkbookPanelParam12.drawingSelection.x + popcornElectronWorkbookPanelParam12.drawingSelection.width,
      y: popcornElectronWorkbookPanelParam12.drawingSelection.y + popcornElectronWorkbookPanelParam12.drawingSelection.height
    }, {
      x: popcornElectronWorkbookPanelParam12.drawingSelection.x,
      y: popcornElectronWorkbookPanelParam12.drawingSelection.y + popcornElectronWorkbookPanelParam12.drawingSelection.height
    }] : (() => {
      let popcornElectronWorkbookPanelValue1142 = _popcornElectronSurfaceStyleS({
        left: popcornElectronWorkbookPanelParam12.drawingSelection.x,
        top: popcornElectronWorkbookPanelParam12.drawingSelection.y,
        width: popcornElectronWorkbookPanelParam12.drawingSelection.width,
        height: popcornElectronWorkbookPanelParam12.drawingSelection.height,
        rotation: popcornElectronWorkbookPanelValue438
      });
      return [popcornElectronWorkbookPanelValue1142.nw, popcornElectronWorkbookPanelValue1142.ne, popcornElectronWorkbookPanelValue1142.se, popcornElectronWorkbookPanelValue1142.sw];
    })(),
    popcornElectronWorkbookPanelValue441 = popcornElectronWorkbookPanelValue440.map(item => popcornElectronWorkbookPanelHelper13({
      camera: popcornElectronWorkbookPanelParam12.frame.camera,
      worldX: item.x,
      worldY: item.y,
      freezePanes: popcornElectronWorkbookPanelParam12.frame.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam12.frame.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam12.frame.rowHeights
    }));
  if (ctx.save(), ctx.scale(zoom, zoom), popcornElectronWorkbookPanelParam12.frame.applyGridBodyClip(ctx)) {
    if (ctx.strokeStyle = popcornElectronWorkbookPanelParam12.accentStroke, ctx.lineWidth = 1.25 / zoom, ctx.setLineDash([]), popcornElectronWorkbookPanelValue439) {
      let popcornElectronWorkbookPanelValue961 = popcornElectronWorkbookPanelHelper15({
        camera: popcornElectronWorkbookPanelParam12.frame.camera,
        worldX: popcornElectronWorkbookPanelParam12.drawingSelection.x,
        worldY: popcornElectronWorkbookPanelParam12.drawingSelection.y,
        width: popcornElectronWorkbookPanelParam12.drawingSelection.width,
        height: popcornElectronWorkbookPanelParam12.drawingSelection.height,
        freezePanes: popcornElectronWorkbookPanelParam12.frame.freezePanes,
        columnWidths: popcornElectronWorkbookPanelParam12.frame.viewColWidths,
        rowHeights: popcornElectronWorkbookPanelParam12.frame.rowHeights
      });
      for (let popcornElectronWorkbookPanelValue1307 of popcornElectronWorkbookPanelValue961) popcornElectronWorkbookPanelParam12.frame.intersectsGridBody(popcornElectronWorkbookPanelValue1307.x, popcornElectronWorkbookPanelValue1307.y, popcornElectronWorkbookPanelValue1307.width, popcornElectronWorkbookPanelValue1307.height) && ctx.strokeRect(popcornElectronWorkbookPanelValue1307.x, popcornElectronWorkbookPanelValue1307.y, popcornElectronWorkbookPanelValue1307.width, popcornElectronWorkbookPanelValue1307.height);
    } else if (popcornElectronWorkbookPanelValue441.length === 4) {
      ctx.beginPath();
      ctx.moveTo(popcornElectronWorkbookPanelValue441[0].x, popcornElectronWorkbookPanelValue441[0].y);
      for (let popcornElectronWorkbookPanelValue1384 = 1; popcornElectronWorkbookPanelValue1384 < popcornElectronWorkbookPanelValue441.length; popcornElectronWorkbookPanelValue1384 += 1) ctx.lineTo(popcornElectronWorkbookPanelValue441[popcornElectronWorkbookPanelValue1384].x, popcornElectronWorkbookPanelValue441[popcornElectronWorkbookPanelValue1384].y);
      ctx.closePath();
      ctx.stroke();
    }
    if (popcornElectronWorkbookPanelParam12.showResizeHandles !== false) {
      ctx.fillStyle = "#ffffff";
      for (let popcornElectronWorkbookPanelValue920 of popcornElectronWorkbookPanelValue440) {
        let popcornElectronWorkbookPanelValue949 = popcornElectronWorkbookPanelHelper15({
          camera: popcornElectronWorkbookPanelParam12.frame.camera,
          worldX: popcornElectronWorkbookPanelValue920.x - halfVisibleSize,
          worldY: popcornElectronWorkbookPanelValue920.y - halfVisibleSize,
          width: visibleSize,
          height: visibleSize,
          freezePanes: popcornElectronWorkbookPanelParam12.frame.freezePanes,
          columnWidths: popcornElectronWorkbookPanelParam12.frame.viewColWidths,
          rowHeights: popcornElectronWorkbookPanelParam12.frame.rowHeights
        });
        for (let popcornElectronWorkbookPanelValue1242 of popcornElectronWorkbookPanelValue949) popcornElectronWorkbookPanelParam12.frame.intersectsGridBody(popcornElectronWorkbookPanelValue1242.x, popcornElectronWorkbookPanelValue1242.y, popcornElectronWorkbookPanelValue1242.width, popcornElectronWorkbookPanelValue1242.height) && (ctx.beginPath(), ctx.rect(popcornElectronWorkbookPanelValue1242.x, popcornElectronWorkbookPanelValue1242.y, popcornElectronWorkbookPanelValue1242.width, popcornElectronWorkbookPanelValue1242.height), ctx.fill(), ctx.stroke());
      }
    }
  }
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper40(popcornElectronWorkbookPanelParam70) {
  if (!popcornElectronWorkbookPanelParam70.resizeGuide) return;
  let {
    ctx,
    viewportH,
    viewportW,
    zoom
  } = popcornElectronWorkbookPanelParam70.frame;
  if (ctx.save(), ctx.scale(zoom, zoom), ctx.strokeStyle = popcornElectronWorkbookPanelParam70.accentStroke, ctx.lineWidth = 1 / zoom, ctx.setLineDash([4 / zoom, 3 / zoom]), popcornElectronWorkbookPanelParam70.resizeGuide.type === "col") {
    let popcornElectronWorkbookPanelValue1134 = popcornElectronWorkbookPanelHelper13({
      camera: popcornElectronWorkbookPanelParam70.frame.camera,
      worldX: popcornElectronWorkbookPanelParam70.resizeGuide.pos,
      worldY: 20,
      freezePanes: popcornElectronWorkbookPanelParam70.frame.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam70.frame.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam70.frame.rowHeights
    }).x;
    ctx.beginPath();
    ctx.moveTo(popcornElectronWorkbookPanelValue1134, 0);
    ctx.lineTo(popcornElectronWorkbookPanelValue1134, viewportH / zoom);
    ctx.stroke();
  } else {
    let popcornElectronWorkbookPanelValue1135 = popcornElectronWorkbookPanelHelper13({
      camera: popcornElectronWorkbookPanelParam70.frame.camera,
      worldX: 40,
      worldY: popcornElectronWorkbookPanelParam70.resizeGuide.pos,
      freezePanes: popcornElectronWorkbookPanelParam70.frame.freezePanes,
      columnWidths: popcornElectronWorkbookPanelParam70.frame.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam70.frame.rowHeights
    }).y;
    ctx.beginPath();
    ctx.moveTo(0, popcornElectronWorkbookPanelValue1135);
    ctx.lineTo(viewportW / zoom, popcornElectronWorkbookPanelValue1135);
    ctx.stroke();
  }
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper41(popcornElectronWorkbookPanelParam26) {
  if (!popcornElectronWorkbookPanelParam26.selectionRect) return;
  let {
    ctx,
    viewportH,
    viewportW,
    zoom
  } = popcornElectronWorkbookPanelParam26.frame;
  ctx.save();
  ctx.scale(zoom, zoom);
  ctx.fillStyle = popcornElectronWorkbookPanelParam26.accentFill;
  let popcornElectronWorkbookPanelValue538 = viewportW / zoom - 40;
  if (popcornElectronWorkbookPanelValue538 > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(40, 0, popcornElectronWorkbookPanelValue538, 20);
    ctx.clip();
    for (let popcornElectronWorkbookPanelValue828 = popcornElectronWorkbookPanelParam26.selectionRect.c1; popcornElectronWorkbookPanelValue828 <= popcornElectronWorkbookPanelParam26.selectionRect.c2; popcornElectronWorkbookPanelValue828 += 1) {
      let popcornElectronWorkbookPanelValue865 = popcornElectronWorkbookPanelParam26.viewColWidths[popcornElectronWorkbookPanelValue828] ?? 0,
        popcornElectronWorkbookPanelValue866 = popcornElectronWorkbookPanelHelper15({
          camera: popcornElectronWorkbookPanelParam26.frame.camera,
          worldX: 40 + (popcornElectronWorkbookPanelParam26.colOffsets[popcornElectronWorkbookPanelValue828] ?? 0),
          worldY: 0,
          width: popcornElectronWorkbookPanelValue865,
          height: 20,
          freezePanes: popcornElectronWorkbookPanelParam26.frame.freezePanes,
          columnWidths: popcornElectronWorkbookPanelParam26.viewColWidths,
          rowHeights: popcornElectronWorkbookPanelParam26.rowHeights
        });
      for (let popcornElectronWorkbookPanelValue1175 of popcornElectronWorkbookPanelValue866) {
        ctx.fillRect(popcornElectronWorkbookPanelValue1175.x, popcornElectronWorkbookPanelValue1175.y, popcornElectronWorkbookPanelValue1175.width, popcornElectronWorkbookPanelValue1175.height);
        ctx.strokeStyle = popcornElectronWorkbookPanelParam26.accentStroke;
        ctx.lineWidth = 2.5 / zoom;
        ctx.beginPath();
        ctx.moveTo(popcornElectronWorkbookPanelValue1175.x, 20);
        ctx.lineTo(popcornElectronWorkbookPanelValue1175.x + popcornElectronWorkbookPanelValue1175.width, 20);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  let popcornElectronWorkbookPanelValue539 = viewportH / zoom - 20;
  if (popcornElectronWorkbookPanelValue539 > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 20, 40, popcornElectronWorkbookPanelValue539);
    ctx.clip();
    for (let popcornElectronWorkbookPanelValue830 = popcornElectronWorkbookPanelParam26.selectionRect.r1; popcornElectronWorkbookPanelValue830 <= popcornElectronWorkbookPanelParam26.selectionRect.r2; popcornElectronWorkbookPanelValue830 += 1) {
      let popcornElectronWorkbookPanelValue867 = popcornElectronWorkbookPanelParam26.rowHeights[popcornElectronWorkbookPanelValue830] ?? 0,
        popcornElectronWorkbookPanelValue868 = popcornElectronWorkbookPanelHelper15({
          camera: popcornElectronWorkbookPanelParam26.frame.camera,
          worldX: 0,
          worldY: 20 + (popcornElectronWorkbookPanelParam26.rowOffsets[popcornElectronWorkbookPanelValue830] ?? 0),
          width: 40,
          height: popcornElectronWorkbookPanelValue867,
          freezePanes: popcornElectronWorkbookPanelParam26.frame.freezePanes,
          columnWidths: popcornElectronWorkbookPanelParam26.viewColWidths,
          rowHeights: popcornElectronWorkbookPanelParam26.rowHeights
        });
      for (let popcornElectronWorkbookPanelValue1173 of popcornElectronWorkbookPanelValue868) {
        ctx.fillRect(popcornElectronWorkbookPanelValue1173.x, popcornElectronWorkbookPanelValue1173.y, popcornElectronWorkbookPanelValue1173.width, popcornElectronWorkbookPanelValue1173.height);
        ctx.strokeStyle = popcornElectronWorkbookPanelParam26.accentStroke;
        ctx.lineWidth = 2.5 / zoom;
        ctx.beginPath();
        ctx.moveTo(40, popcornElectronWorkbookPanelValue1173.y);
        ctx.lineTo(40, popcornElectronWorkbookPanelValue1173.y + popcornElectronWorkbookPanelValue1173.height);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper42(popcornElectronWorkbookPanelParam151) {
  if (popcornElectronWorkbookPanelParam151.drawingOcclusionRects.length === 0 || !popcornElectronWorkbookPanelParam151.frame.hasGridBody) return;
  let {
      ctx,
      zoom
    } = popcornElectronWorkbookPanelParam151.frame,
    popcornElectronWorkbookPanelValue1040 = 1 / Math.max(zoom, 2.220446049250313e-16);
  if (ctx.save(), ctx.scale(zoom, zoom), popcornElectronWorkbookPanelParam151.frame.applyGridBodyClip(ctx)) for (let popcornElectronWorkbookPanelValue1270 of popcornElectronWorkbookPanelParam151.drawingOcclusionRects) popcornElectronWorkbookPanelParam151.frame.intersectsGridBody(popcornElectronWorkbookPanelValue1270.x, popcornElectronWorkbookPanelValue1270.y, popcornElectronWorkbookPanelValue1270.width, popcornElectronWorkbookPanelValue1270.height) && ctx.clearRect(popcornElectronWorkbookPanelValue1270.x - popcornElectronWorkbookPanelValue1040, popcornElectronWorkbookPanelValue1270.y - popcornElectronWorkbookPanelValue1040, popcornElectronWorkbookPanelValue1270.width + popcornElectronWorkbookPanelValue1040 * 2, popcornElectronWorkbookPanelValue1270.height + popcornElectronWorkbookPanelValue1040 * 2);
  ctx.restore();
}
function popcornElectronWorkbookPanelHelper43(popcornElectronWorkbookPanelParam10) {
  let {
      colOffsets,
      rowOffsets,
      resolveMergedRect,
      normalizedRect,
      selectionRect,
      clampedRect
    } = popcornElectronWorkbookPanelHelper28({
      camera: popcornElectronWorkbookPanelParam10.frame.camera,
      activeCell: popcornElectronWorkbookPanelParam10.activeCell,
      selectionRect: popcornElectronWorkbookPanelParam10.selectionRect,
      selectionStart: popcornElectronWorkbookPanelParam10.selectionStart,
      selectionEnd: popcornElectronWorkbookPanelParam10.selectionEnd,
      viewColWidths: popcornElectronWorkbookPanelParam10.viewColWidths,
      rowHeights: popcornElectronWorkbookPanelParam10.rowHeights,
      freezePanes: popcornElectronWorkbookPanelParam10.freezePanes,
      sheet: popcornElectronWorkbookPanelParam10.sheet
    }),
    popcornElectronWorkbookPanelValue435 = popcornElectronWorkbookPanelParam10.fillPreviewRect ? popcornElectronWorkbookPanelHelper27({
      camera: popcornElectronWorkbookPanelParam10.frame.camera,
      colOffsets,
      freezePanes: popcornElectronWorkbookPanelParam10.freezePanes,
      resolveMergedRect,
      rowOffsets,
      rowHeights: popcornElectronWorkbookPanelParam10.rowHeights,
      selectionStart: {
        row: Math.min(popcornElectronWorkbookPanelParam10.fillPreviewRect.r1, popcornElectronWorkbookPanelParam10.fillPreviewRect.r2),
        col: Math.min(popcornElectronWorkbookPanelParam10.fillPreviewRect.c1, popcornElectronWorkbookPanelParam10.fillPreviewRect.c2)
      },
      selectionEnd: {
        row: Math.max(popcornElectronWorkbookPanelParam10.fillPreviewRect.r1, popcornElectronWorkbookPanelParam10.fillPreviewRect.r2),
        col: Math.max(popcornElectronWorkbookPanelParam10.fillPreviewRect.c1, popcornElectronWorkbookPanelParam10.fillPreviewRect.c2)
      },
      viewColWidths: popcornElectronWorkbookPanelParam10.viewColWidths
    }) : null,
    popcornElectronWorkbookPanelValue436 = popcornElectronWorkbookPanelParam10.suppressCellSelection ? popcornElectronWorkbookPanelParam10.rangeHighlights?.filter(popcornElectronWorkbookPanelParam570 => popcornElectronWorkbookPanelParam570.visibleWhenCellSelectionSuppressed) : popcornElectronWorkbookPanelParam10.rangeHighlights;
  popcornElectronWorkbookPanelHelper32({
    frame: popcornElectronWorkbookPanelParam10.frame,
    colOffsets,
    rowOffsets,
    viewColWidths: popcornElectronWorkbookPanelParam10.viewColWidths,
    rowHeights: popcornElectronWorkbookPanelParam10.rowHeights,
    rangeHighlights: popcornElectronWorkbookPanelValue436
  });
  !popcornElectronWorkbookPanelParam10.suppressCellSelection && selectionRect && clampedRect && (popcornElectronWorkbookPanelHelper30({
    accentFill: popcornElectronWorkbookPanelParam10.accentFill,
    frame: popcornElectronWorkbookPanelParam10.frame,
    selectionRect
  }), popcornElectronWorkbookPanelHelper36({
    accentStroke: popcornElectronWorkbookPanelParam10.accentStroke,
    frame: popcornElectronWorkbookPanelParam10.frame,
    selectionRect
  }), popcornElectronWorkbookPanelHelper37({
    accentStroke: popcornElectronWorkbookPanelParam10.accentStroke,
    fillPreviewRect: popcornElectronWorkbookPanelValue435,
    frame: popcornElectronWorkbookPanelParam10.frame,
    selectionRect
  }), popcornElectronWorkbookPanelParam10.showFillHandle && popcornElectronWorkbookPanelHelper38({
    accentStroke: popcornElectronWorkbookPanelParam10.accentStroke,
    frame: popcornElectronWorkbookPanelParam10.frame,
    selectionRect: normalizedRect
  }), popcornElectronWorkbookPanelHelper41({
    accentFill: popcornElectronWorkbookPanelParam10.accentFill,
    accentStroke: popcornElectronWorkbookPanelParam10.accentStroke,
    frame: popcornElectronWorkbookPanelParam10.frame,
    rowHeights: popcornElectronWorkbookPanelParam10.rowHeights,
    rowOffsets,
    selectionRect,
    viewColWidths: popcornElectronWorkbookPanelParam10.viewColWidths,
    colOffsets
  }));
  popcornElectronWorkbookPanelHelper34({
    awarenessSelections: popcornElectronWorkbookPanelParam10.awarenessSelections ?? [],
    frame: popcornElectronWorkbookPanelParam10.frame,
    resolveMergedRect,
    rowHeights: popcornElectronWorkbookPanelParam10.rowHeights,
    rowOffsets,
    viewColWidths: popcornElectronWorkbookPanelParam10.viewColWidths,
    colOffsets
  });
  popcornElectronWorkbookPanelHelper42({
    frame: popcornElectronWorkbookPanelParam10.frame,
    drawingOcclusionRects: popcornElectronWorkbookPanelParam10.drawingOcclusionRects ?? []
  });
  popcornElectronWorkbookPanelHelper35({
    awarenessDrawingSelections: popcornElectronWorkbookPanelParam10.awarenessDrawingSelections ?? [],
    frame: popcornElectronWorkbookPanelParam10.frame
  });
  popcornElectronWorkbookPanelHelper39({
    accentStroke: popcornElectronWorkbookPanelParam10.accentStroke,
    drawingSelection: popcornElectronWorkbookPanelParam10.drawingSelection ?? null,
    frame: popcornElectronWorkbookPanelParam10.frame,
    showResizeHandles: popcornElectronWorkbookPanelParam10.showDrawingHandles
  });
  popcornElectronWorkbookPanelHelper40({
    accentStroke: popcornElectronWorkbookPanelParam10.accentStroke,
    frame: popcornElectronWorkbookPanelParam10.frame,
    resizeGuide: popcornElectronWorkbookPanelParam10.resizeGuide
  });
}
function $t(popcornElectronWorkbookPanelParam53) {
  if (!popcornElectronWorkbookPanelParam53.overlayCanvas) return;
  let popcornElectronWorkbookPanelValue632 = popcornElectronWorkbookPanelParam53.overlayCanvas.getContext("2d");
  if (!popcornElectronWorkbookPanelValue632) return;
  let {
    width,
    height,
    dpr
  } = popcornElectronWorkbookPanelParam53.viewportMetrics;
  (width <= 0 || height <= 0 || dpr <= 0) && popcornElectronWorkbookPanelParam53.syncViewportCanvases();
  let popcornElectronWorkbookPanelValue633 = $({
    camera: popcornElectronWorkbookPanelParam53.camera,
    freezePanes: popcornElectronWorkbookPanelParam53.freezePanes,
    ctx: popcornElectronWorkbookPanelValue632,
    viewportMetrics: popcornElectronWorkbookPanelParam53.viewportMetrics,
    viewColWidths: popcornElectronWorkbookPanelParam53.viewColWidths,
    rowHeights: popcornElectronWorkbookPanelParam53.rowHeights
  });
  popcornElectronWorkbookPanelValue633 && popcornElectronWorkbookPanelHelper43({
    frame: popcornElectronWorkbookPanelValue633,
    activeCell: popcornElectronWorkbookPanelParam53.activeCell,
    selectionRect: popcornElectronWorkbookPanelParam53.selectionRect,
    selectionStart: popcornElectronWorkbookPanelParam53.selectionStart,
    selectionEnd: popcornElectronWorkbookPanelParam53.selectionEnd,
    awarenessSelections: popcornElectronWorkbookPanelParam53.awarenessSelections,
    awarenessDrawingSelections: popcornElectronWorkbookPanelParam53.awarenessDrawingSelections,
    rangeHighlights: popcornElectronWorkbookPanelParam53.rangeHighlights,
    drawingSelection: popcornElectronWorkbookPanelParam53.drawingSelection,
    drawingOcclusionRects: popcornElectronWorkbookPanelParam53.drawingOcclusionRects,
    viewColWidths: popcornElectronWorkbookPanelParam53.viewColWidths,
    rowHeights: popcornElectronWorkbookPanelParam53.rowHeights,
    freezePanes: popcornElectronWorkbookPanelParam53.freezePanes,
    accentFill: popcornElectronWorkbookPanelParam53.accentFill,
    accentStroke: popcornElectronWorkbookPanelParam53.accentStroke,
    sheet: popcornElectronWorkbookPanelParam53.sheet,
    resizeGuide: popcornElectronWorkbookPanelParam53.resizeGuide,
    fillPreviewRect: popcornElectronWorkbookPanelParam53.fillPreviewRect,
    showFillHandle: popcornElectronWorkbookPanelParam53.showFillHandle,
    showDrawingHandles: popcornElectronWorkbookPanelParam53.showDrawingHandles,
    suppressCellSelection: popcornElectronWorkbookPanelParam53.suppressCellSelection
  });
}
function popcornElectronWorkbookPanelHelper44(popcornElectronWorkbookPanelParam90, popcornElectronWorkbookPanelParam91) {
  let popcornElectronWorkbookPanelValue804 = popcornElectronWorkbookPanelParam90.trim();
  if (popcornElectronWorkbookPanelValue804.startsWith("rgba(")) {
    let popcornElectronWorkbookPanelValue1263 = popcornElectronWorkbookPanelValue804.slice(5, -1).split(",").map(item => item.trim()).filter(Boolean);
    if (popcornElectronWorkbookPanelValue1263.length >= 3) return `rgba(${popcornElectronWorkbookPanelValue1263[0]}, ${popcornElectronWorkbookPanelValue1263[1]}, ${popcornElectronWorkbookPanelValue1263[2]}, ${popcornElectronWorkbookPanelParam91})`;
  }
  if (popcornElectronWorkbookPanelParam90.startsWith("#")) {
    let popcornElectronWorkbookPanelValue1083 = popcornElectronWorkbookPanelParam90.slice(1),
      popcornElectronWorkbookPanelValue1084 = popcornElectronWorkbookPanelValue1083.length === 3 ? popcornElectronWorkbookPanelValue1083.split("").map(item => `${item}${item}`).join("") : popcornElectronWorkbookPanelValue1083;
    if (popcornElectronWorkbookPanelValue1084.length === 6) return `rgba(${Number.parseInt(popcornElectronWorkbookPanelValue1084.slice(0, 2), 16)}, ${Number.parseInt(popcornElectronWorkbookPanelValue1084.slice(2, 4), 16)}, ${Number.parseInt(popcornElectronWorkbookPanelValue1084.slice(4, 6), 16)}, ${popcornElectronWorkbookPanelParam91})`;
  }
  return popcornElectronWorkbookPanelParam90.startsWith("rgb(") ? popcornElectronWorkbookPanelParam90.replace("rgb(", "rgba(").replace(")", `, ${popcornElectronWorkbookPanelParam91})`) : popcornElectronWorkbookPanelParam90;
}
function popcornElectronWorkbookPanelHelper45(popcornElectronWorkbookPanelParam226) {
  let popcornElectronWorkbookPanelValue1199 = popcornElectronWorkbookPanelParam226.trim();
  if (popcornElectronWorkbookPanelValue1199.length === 0) return "";
  if (popcornElectronWorkbookPanelValue1199.toLowerCase() === "true") return true;
  if (popcornElectronWorkbookPanelValue1199.toLowerCase() === "false") return false;
  let popcornElectronWorkbookPanelValue1200 = Number(popcornElectronWorkbookPanelValue1199);
  return !Number.isNaN(popcornElectronWorkbookPanelValue1200) && popcornElectronWorkbookPanelValue1199 === String(popcornElectronWorkbookPanelValue1200) ? popcornElectronWorkbookPanelValue1200 : popcornElectronWorkbookPanelParam226;
}
function popcornElectronWorkbookPanelHelper46(popcornElectronWorkbookPanelParam309) {
  return `<table>${popcornElectronWorkbookPanelParam309.map(item => `<tr>${item.map(_item => `<td>${popcornElectronWorkbookPanelHelper50(_item == null ? "" : String(_item))}</td>`).join("")}</tr>`).join("")}</table>`;
}
function popcornElectronWorkbookPanelHelper47(popcornElectronWorkbookPanelParam96) {
  let popcornElectronWorkbookPanelValue816 = popcornElectronWorkbookPanelParam96.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").map(item => item.split("\t")),
    popcornElectronWorkbookPanelValue817 = popcornElectronWorkbookPanelValue816.map(item => item.map(_item => _item.trimStart().startsWith("=") ? _item : popcornElectronWorkbookPanelHelper45(_item))),
    popcornElectronWorkbookPanelValue818 = popcornElectronWorkbookPanelValue816.map(item => item.map(_item => _item.trimStart().startsWith("=") ? _item.trimStart() : null));
  return {
    kind: "copy",
    source: {
      sheetName: "",
      range: {
        r1: 0,
        c1: 0,
        r2: Math.max(popcornElectronWorkbookPanelValue816.length - 1, 0),
        c2: Math.max(...popcornElectronWorkbookPanelValue816.map(item => item.length), 1) - 1
      }
    },
    values: popcornElectronWorkbookPanelValue817,
    formulas: popcornElectronWorkbookPanelValue818,
    plainText: popcornElectronWorkbookPanelParam96,
    html: popcornElectronWorkbookPanelHelper46(popcornElectronWorkbookPanelValue817)
  };
}
function popcornElectronWorkbookPanelHelper48(popcornElectronWorkbookPanelParam454, popcornElectronWorkbookPanelParam455) {
  return {
    ...popcornElectronWorkbookPanelHelper47(popcornElectronWorkbookPanelParam455 && popcornElectronWorkbookPanelParam455.length > 0 ? popcornElectronWorkbookPanelParam455 : popcornElectronWorkbookPanelHelper51(popcornElectronWorkbookPanelParam454)),
    html: popcornElectronWorkbookPanelParam454
  };
}
function on(popcornElectronWorkbookPanelParam554) {
  return {
    row: addressUtilsV(popcornElectronWorkbookPanelParam554),
    col: addressUtilsD(popcornElectronWorkbookPanelParam554)
  };
}
function popcornElectronWorkbookPanelHelper49(popcornElectronWorkbookPanelParam560, popcornElectronWorkbookPanelParam561) {
  return `${addressUtilsF(popcornElectronWorkbookPanelParam561)}${popcornElectronWorkbookPanelParam560 + 1}`;
}
function popcornElectronWorkbookPanelHelper50(popcornElectronWorkbookPanelParam316) {
  return popcornElectronWorkbookPanelParam316.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
function popcornElectronWorkbookPanelHelper51(popcornElectronWorkbookPanelParam86) {
  if (typeof DOMParser < "u") try {
    let popcornElectronWorkbookPanelValue1098 = new DOMParser().parseFromString(popcornElectronWorkbookPanelParam86, "text/html"),
      popcornElectronWorkbookPanelValue1099 = popcornElectronWorkbookPanelValue1098.querySelector("table");
    return popcornElectronWorkbookPanelValue1099 ? Array.from(popcornElectronWorkbookPanelValue1099.rows).map(item => Array.from(item.cells).map(_item => _item.textContent ?? "").join("\t")).join("\n") : popcornElectronWorkbookPanelValue1098.body?.textContent ?? "";
  } catch {}
  return popcornElectronWorkbookPanelParam86.replace(/<br\s*\/?>/gi, "\n").replace(/<\/tr>/gi, "\n").replace(/<\/t[dh]>/gi, "\t").replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/\t+\n/g, "\n").trimEnd();
}
function popcornElectronWorkbookPanelHelper52(popcornElectronWorkbookPanelParam140) {
  if (popcornElectronWorkbookPanelParam140.length === 0) return null;
  let popcornElectronWorkbookPanelValue1006 = popcornElectronWorkbookPanelParam140[0]?.left ?? 0,
    popcornElectronWorkbookPanelValue1007 = popcornElectronWorkbookPanelParam140[0]?.top ?? 0,
    popcornElectronWorkbookPanelValue1008 = popcornElectronWorkbookPanelValue1006 + (popcornElectronWorkbookPanelParam140[0]?.width ?? 0),
    popcornElectronWorkbookPanelValue1009 = popcornElectronWorkbookPanelValue1007 + (popcornElectronWorkbookPanelParam140[0]?.height ?? 0);
  for (let popcornElectronWorkbookPanelValue1273 of popcornElectronWorkbookPanelParam140.slice(1)) {
    popcornElectronWorkbookPanelValue1006 = Math.min(popcornElectronWorkbookPanelValue1006, popcornElectronWorkbookPanelValue1273.left);
    popcornElectronWorkbookPanelValue1007 = Math.min(popcornElectronWorkbookPanelValue1007, popcornElectronWorkbookPanelValue1273.top);
    popcornElectronWorkbookPanelValue1008 = Math.max(popcornElectronWorkbookPanelValue1008, popcornElectronWorkbookPanelValue1273.left + popcornElectronWorkbookPanelValue1273.width);
    popcornElectronWorkbookPanelValue1009 = Math.max(popcornElectronWorkbookPanelValue1009, popcornElectronWorkbookPanelValue1273.top + popcornElectronWorkbookPanelValue1273.height);
  }
  return {
    left: popcornElectronWorkbookPanelValue1006,
    top: popcornElectronWorkbookPanelValue1007,
    width: Math.max(0, popcornElectronWorkbookPanelValue1008 - popcornElectronWorkbookPanelValue1006),
    height: Math.max(0, popcornElectronWorkbookPanelValue1009 - popcornElectronWorkbookPanelValue1007)
  };
}
function popcornElectronWorkbookPanelHelper53(popcornElectronWorkbookPanelParam162) {
  let popcornElectronWorkbookPanelValue1068 = popcornElectronWorkbookPanelParam162.selectionSummary.rect;
  return popcornElectronWorkbookPanelValue1068 ? {
    type: "workbook-range",
    sheetName: popcornElectronWorkbookPanelParam162.sheetName,
    rangeAddress: popcornElectronWorkbookPanelParam162.selectionSummary.rangeAddress,
    rect: {
      ...popcornElectronWorkbookPanelValue1068
    },
    rows: popcornElectronWorkbookPanelParam162.selectionSummary.rows,
    cols: popcornElectronWorkbookPanelParam162.selectionSummary.cols,
    ...(popcornElectronWorkbookPanelParam162.anchorPoint == null ? {} : {
      anchorPoint: {
        ...popcornElectronWorkbookPanelParam162.anchorPoint
      }
    })
  } : null;
}
function popcornElectronWorkbookPanelHelper54(popcornElectronWorkbookPanelParam105) {
  let popcornElectronWorkbookPanelValue862 = popcornElectronWorkbookPanelParam105.anchorPoint == null ? null : {
    ...popcornElectronWorkbookPanelParam105.anchorPoint
  };
  return {
    type: "workbook-floating-element",
    sheetName: popcornElectronWorkbookPanelParam105.sheetName,
    elementId: popcornElectronWorkbookPanelParam105.selectedFloatingElement.id,
    elementKind: popcornElectronWorkbookPanelParam105.selectedFloatingElement.kind,
    logicalBounds: {
      ...popcornElectronWorkbookPanelParam105.selectedFloatingElement.logicalBounds
    },
    rotation: popcornElectronWorkbookPanelParam105.selectedFloatingElement.rotation,
    ...(popcornElectronWorkbookPanelValue862 == null ? {} : {
      anchorPoint: popcornElectronWorkbookPanelValue862,
      elementOffset: {
        x: popcornElectronWorkbookPanelValue862.x - popcornElectronWorkbookPanelParam105.selectedFloatingElement.logicalBounds.x,
        y: popcornElectronWorkbookPanelValue862.y - popcornElectronWorkbookPanelParam105.selectedFloatingElement.logicalBounds.y
      }
    })
  };
}
function popcornElectronWorkbookPanelHelper55(popcornElectronWorkbookPanelParam212) {
  if (popcornElectronWorkbookPanelParam212.type === "workbook-range") return `${popcornElectronWorkbookPanelParam212.sheetName}!${popcornElectronWorkbookPanelParam212.rangeAddress}`;
  let popcornElectronWorkbookPanelValue1162 = popcornElectronWorkbookPanelParam212.elementKind === "xlsx-chart" ? "Chart" : popcornElectronWorkbookPanelParam212.elementKind === "xlsx-image" ? "Image" : "Shape";
  return `${popcornElectronWorkbookPanelParam212.sheetName} · ${popcornElectronWorkbookPanelValue1162}`;
}
function popcornElectronWorkbookPanelHelper56(popcornElectronWorkbookPanelParam219) {
  return {
    r1: popcornElectronWorkbookPanelParam219.rect.r1,
    c1: popcornElectronWorkbookPanelParam219.rect.c1,
    r2: popcornElectronWorkbookPanelParam219.rect.r2,
    c2: popcornElectronWorkbookPanelParam219.rect.c2,
    color: popcornElectronWorkbookPanelParam219.color,
    dashed: true,
    fillAlpha: 0.2,
    borderWidthPx: 2,
    borderRadiusPx: 2,
    visibleWhenCellSelectionSuppressed: true
  };
}
function popcornElectronWorkbookPanelHelper57(popcornElectronWorkbookPanelParam473, popcornElectronWorkbookPanelParam474) {
  return popcornElectronWorkbookPanelParam474 <= 0 ? 0 : Math.max(0, Math.min(popcornElectronWorkbookPanelParam473, popcornElectronWorkbookPanelParam474 - 1));
}
function _n(popcornElectronWorkbookPanelParam276, popcornElectronWorkbookPanelParam277, popcornElectronWorkbookPanelParam278) {
  if (popcornElectronWorkbookPanelParam278 <= 0 || popcornElectronWorkbookPanelParam276 <= 0) return 0;
  if (popcornElectronWorkbookPanelParam276 >= (popcornElectronWorkbookPanelParam277[popcornElectronWorkbookPanelParam278] ?? 0)) return popcornElectronWorkbookPanelParam278 - 1;
  let popcornElectronWorkbookPanelValue1266 = 0;
  for (; popcornElectronWorkbookPanelValue1266 < popcornElectronWorkbookPanelParam278 && (popcornElectronWorkbookPanelParam277[popcornElectronWorkbookPanelValue1266 + 1] ?? 0) <= popcornElectronWorkbookPanelParam276;) popcornElectronWorkbookPanelValue1266 += 1;
  return popcornElectronWorkbookPanelHelper57(popcornElectronWorkbookPanelValue1266, popcornElectronWorkbookPanelParam278);
}
function popcornElectronWorkbookPanelHelper58(popcornElectronWorkbookPanelParam78) {
  if (popcornElectronWorkbookPanelParam78.columnWidths.length === 0 || popcornElectronWorkbookPanelParam78.rowHeights.length === 0) return {
    rangeAddress: null,
    coveredCells: null
  };
  let popcornElectronWorkbookPanelValue736 = Math.max(0, popcornElectronWorkbookPanelParam78.logicalBounds.left - 40),
    popcornElectronWorkbookPanelValue737 = Math.max(0, popcornElectronWorkbookPanelParam78.logicalBounds.top - 20),
    popcornElectronWorkbookPanelValue738 = Math.max(popcornElectronWorkbookPanelValue736, popcornElectronWorkbookPanelParam78.logicalBounds.left + popcornElectronWorkbookPanelParam78.logicalBounds.width - 40),
    popcornElectronWorkbookPanelValue739 = Math.max(popcornElectronWorkbookPanelValue737, popcornElectronWorkbookPanelParam78.logicalBounds.top + popcornElectronWorkbookPanelParam78.logicalBounds.height - 20),
    popcornElectronWorkbookPanelValue740 = _n(popcornElectronWorkbookPanelValue736, popcornElectronWorkbookPanelParam78.colOffsets, popcornElectronWorkbookPanelParam78.columnWidths.length),
    popcornElectronWorkbookPanelValue741 = _n(popcornElectronWorkbookPanelValue737, popcornElectronWorkbookPanelParam78.rowOffsets, popcornElectronWorkbookPanelParam78.rowHeights.length),
    popcornElectronWorkbookPanelValue742 = _n(popcornElectronWorkbookPanelValue738, popcornElectronWorkbookPanelParam78.colOffsets, popcornElectronWorkbookPanelParam78.columnWidths.length),
    popcornElectronWorkbookPanelValue743 = _n(popcornElectronWorkbookPanelValue739, popcornElectronWorkbookPanelParam78.rowOffsets, popcornElectronWorkbookPanelParam78.rowHeights.length),
    popcornElectronWorkbookPanelValue744 = {
      r1: Math.min(popcornElectronWorkbookPanelValue741, popcornElectronWorkbookPanelValue743),
      c1: Math.min(popcornElectronWorkbookPanelValue740, popcornElectronWorkbookPanelValue742),
      r2: Math.max(popcornElectronWorkbookPanelValue741, popcornElectronWorkbookPanelValue743),
      c2: Math.max(popcornElectronWorkbookPanelValue740, popcornElectronWorkbookPanelValue742)
    };
  return {
    rangeAddress: popcornElectronWorkbookPanelValue744.r1 === popcornElectronWorkbookPanelValue744.r2 && popcornElectronWorkbookPanelValue744.c1 === popcornElectronWorkbookPanelValue744.c2 ? popcornElectronWorkbookPanelHelper49(popcornElectronWorkbookPanelValue744.r1, popcornElectronWorkbookPanelValue744.c1) : `${popcornElectronWorkbookPanelHelper49(popcornElectronWorkbookPanelValue744.r1, popcornElectronWorkbookPanelValue744.c1)}:${popcornElectronWorkbookPanelHelper49(popcornElectronWorkbookPanelValue744.r2, popcornElectronWorkbookPanelValue744.c2)}`,
    coveredCells: popcornElectronWorkbookPanelValue744
  };
}
function popcornElectronWorkbookPanelHelper59(popcornElectronWorkbookPanelParam199) {
  return {
    type: "workbook-drawing-region",
    sheetName: popcornElectronWorkbookPanelParam199.sheetName,
    logicalBounds: {
      ...popcornElectronWorkbookPanelParam199.logicalBounds
    },
    viewportBounds: {
      ...popcornElectronWorkbookPanelParam199.viewportBounds
    },
    rangeAddress: popcornElectronWorkbookPanelParam199.rangeAddress,
    coveredCells: popcornElectronWorkbookPanelParam199.coveredCells == null ? null : {
      ...popcornElectronWorkbookPanelParam199.coveredCells
    }
  };
}
function popcornElectronWorkbookPanelHelper60(popcornElectronWorkbookPanelParam350) {
  return popcornElectronWorkbookPanelParam350.rangeAddress ? `${popcornElectronWorkbookPanelParam350.sheetName}!${popcornElectronWorkbookPanelParam350.rangeAddress} · Drawing` : `${popcornElectronWorkbookPanelParam350.sheetName} · Drawing`;
}
function popcornElectronWorkbookPanelHelper61(event) {
  return event.target.type === "workbook-range" ? popcornElectronWorkbookPanelHelper29({
    camera: event.camera,
    freezePanes: event.freezePanes,
    selectionRect: event.target.rect,
    viewColWidths: event.columnWidths,
    rowHeights: event.rowHeights,
    sheet: event.sheet
  }) : popcornElectronWorkbookPanelHelper64({
    camera: event.camera,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights,
    bounds: {
      left: event.target.logicalBounds.x,
      top: event.target.logicalBounds.y,
      width: event.target.logicalBounds.width,
      height: event.target.logicalBounds.height
    }
  });
}
function popcornElectronWorkbookPanelHelper62(event) {
  if (event.target.type === "workbook-range" || event.target.anchorPoint == null) return popcornElectronWorkbookPanelHelper61(event);
  let popcornElectronWorkbookPanelValue1076 = popcornElectronWorkbookPanelHelper14({
    camera: event.camera,
    worldX: event.target.anchorPoint.x,
    worldY: event.target.anchorPoint.y,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights
  });
  return {
    left: popcornElectronWorkbookPanelValue1076.x,
    top: popcornElectronWorkbookPanelValue1076.y,
    width: 0,
    height: 0
  };
}
function popcornElectronWorkbookPanelHelper63(popcornElectronWorkbookPanelParam163) {
  return popcornElectronWorkbookPanelParam163.selectedFloatingElement ? popcornElectronWorkbookPanelHelper54({
    sheetName: popcornElectronWorkbookPanelParam163.snapshot.activeSheetName,
    selectedFloatingElement: popcornElectronWorkbookPanelParam163.selectedFloatingElement,
    anchorPoint: popcornElectronWorkbookPanelParam163.floatingAnchorPoint
  }) : popcornElectronWorkbookPanelHelper53({
    sheetName: popcornElectronWorkbookPanelParam163.snapshot.activeSheetName,
    selectionSummary: popcornElectronWorkbookPanelParam163.selectionSummary,
    anchorPoint: popcornElectronWorkbookPanelParam163.rangeAnchorPoint
  });
}
function popcornElectronWorkbookPanelHelper64(popcornElectronWorkbookPanelParam167) {
  return popcornElectronWorkbookPanelHelper52(popcornElectronWorkbookPanelHelper16({
    camera: popcornElectronWorkbookPanelParam167.camera,
    worldX: popcornElectronWorkbookPanelParam167.bounds.left,
    worldY: popcornElectronWorkbookPanelParam167.bounds.top,
    width: popcornElectronWorkbookPanelParam167.bounds.width,
    height: popcornElectronWorkbookPanelParam167.bounds.height,
    freezePanes: popcornElectronWorkbookPanelParam167.freezePanes,
    columnWidths: popcornElectronWorkbookPanelParam167.columnWidths,
    rowHeights: popcornElectronWorkbookPanelParam167.rowHeights
  }).map(item => ({
    left: item.x,
    top: item.y,
    width: item.width,
    height: item.height
  })));
}
async function popcornElectronWorkbookPanelHelper65(popcornElectronWorkbookPanelParam480) {
  return (await popcornElectronWorkbookPanelParam480.requestExport()).workbookProto;
}
async function popcornElectronWorkbookPanelHelper66(popcornElectronWorkbookPanelParam504, popcornElectronWorkbookPanelParam505, popcornElectronWorkbookPanelParam506) {
  return popcornElectronWorkbookPanelParam504.requestCellState(popcornElectronWorkbookPanelParam505, popcornElectronWorkbookPanelParam506);
}
async function popcornElectronWorkbookPanelHelper67(popcornElectronWorkbookPanelParam356, popcornElectronWorkbookPanelParam357, popcornElectronWorkbookPanelParam358) {
  return popcornElectronWorkbookPanelParam357.trim() ? popcornElectronWorkbookPanelParam356.requestFindMatches(popcornElectronWorkbookPanelParam357) : {
    query: popcornElectronWorkbookPanelParam357,
    matches: [],
    total: 0
  };
}
function popcornElectronWorkbookPanelHelper68(popcornElectronWorkbookPanelParam392, popcornElectronWorkbookPanelParam393) {
  return popcornElectronWorkbookPanelParam392.getState().overlays.chartSelectionHighlights.map(item => ({
    ...item
  }));
}
function popcornElectronWorkbookPanelHelper69({
  getCamera,
  overlayHtmlLayerRef
}) {
  let popcornElectronWorkbookPanelValue770 = React.useRef(false),
    popcornElectronWorkbookPanelValue771 = React.useRef(null),
    popcornElectronWorkbookPanelValue772 = React.useCallback((popcornElectronWorkbookPanelParam239 = 520) => {
      popcornElectronWorkbookPanelValue770.current = true;
      popcornElectronWorkbookPanelValue771.current != null && window.clearTimeout(popcornElectronWorkbookPanelValue771.current);
      popcornElectronWorkbookPanelValue771.current = window.setTimeout(() => {
        popcornElectronWorkbookPanelValue770.current = false;
        popcornElectronWorkbookPanelValue771.current = null;
      }, popcornElectronWorkbookPanelParam239);
    }, []);
  return React.useEffect(() => () => {
    popcornElectronWorkbookPanelValue771.current != null && (window.clearTimeout(popcornElectronWorkbookPanelValue771.current), popcornElectronWorkbookPanelValue771.current = null);
  }, []), {
    programmaticViewportUpdateRef: popcornElectronWorkbookPanelValue770,
    markProgrammaticViewportUpdate: popcornElectronWorkbookPanelValue772,
    updateOverlayTransform: React.useCallback(() => {
      let popcornElectronWorkbookPanelValue1354 = overlayHtmlLayerRef.current;
      popcornElectronWorkbookPanelValue1354 && (popcornElectronWorkbookPanelValue1354.style.transform = "translate(0px, 0px)");
    }, [overlayHtmlLayerRef])
  };
}
var popcornElectronWorkbookPanelValue6 = false,
  popcornElectronWorkbookPanelValue7 = null;
function popcornElectronWorkbookPanelHelper70() {
  popcornElectronWorkbookPanelValue6 ||= (_remoteTextEditSessionC(), true);
}
function popcornElectronWorkbookPanelHelper71() {
  return _remoteTextEditSessionO() && popcornElectronWorkbookPanelValue6;
}
function popcornElectronWorkbookPanelHelper72() {
  return popcornElectronWorkbookPanelValue7 ??= Promise.all([_remoteTextEditSessionS(), Promise.resolve().then(() => {
    popcornElectronWorkbookPanelHelper70();
  })]).then(() => {}), popcornElectronWorkbookPanelValue7;
}
function popcornElectronWorkbookPanelHelper73(popcornElectronWorkbookPanelParam353) {
  let popcornElectronWorkbookPanelValue1328 = [0];
  for (let popcornElectronWorkbookPanelValue1371 = 0; popcornElectronWorkbookPanelValue1371 < popcornElectronWorkbookPanelParam353.length; popcornElectronWorkbookPanelValue1371 += 1) popcornElectronWorkbookPanelValue1328[popcornElectronWorkbookPanelValue1371 + 1] = (popcornElectronWorkbookPanelValue1328[popcornElectronWorkbookPanelValue1371] ?? 0) + (popcornElectronWorkbookPanelParam353[popcornElectronWorkbookPanelValue1371] ?? 0);
  return popcornElectronWorkbookPanelValue1328;
}
function popcornElectronWorkbookPanelHelper74(popcornElectronWorkbookPanelParam400, popcornElectronWorkbookPanelParam401) {
  return popcornElectronWorkbookPanelParam400?.width === popcornElectronWorkbookPanelParam401.width && popcornElectronWorkbookPanelParam400?.height === popcornElectronWorkbookPanelParam401.height && popcornElectronWorkbookPanelParam400?.dpr === popcornElectronWorkbookPanelParam401.dpr;
}
var popcornElectronWorkbookPanelValue8 = class {
  #e = {
    current: null
  };
  #t = {
    current: null
  };
  #n = {
    current: {
      width: 0,
      height: 0,
      dpr: 0
    }
  };
  #r = _remoteTextEditSessionL("viewport");
  #i;
  #a = () => {
    this.scheduleViewportCanvasSync();
  };
  #o;
  #s = null;
  #c = null;
  #l = null;
  #u = null;
  #d = null;
  #f = "rgba(2, 133, 255, 0.16)";
  #p;
  #m = false;
  #h = false;
  #g = typeof document > "u" || popcornElectronWorkbookPanelHelper71();
  #_ = true;
  #v = null;
  #y = null;
  #b = false;
  #x = null;
  #S = null;
  #C = 0;
  constructor(popcornElectronWorkbookPanelParam11) {
    this.#w = popcornElectronWorkbookPanelParam11.controller;
    this.#p = popcornElectronWorkbookPanelParam11.accentStroke;
    this.#_ = popcornElectronWorkbookPanelParam11.isEditing ?? true;
    this.#C = Math.max(0, popcornElectronWorkbookPanelParam11.bottomScrollReservePx ?? 0);
    this.#o = new _popcornElectronSurfaceStyleA({
      enabled: true,
      initialCamera: {
        x: 0,
        y: 0,
        k: this.#D().zoom
      },
      minZoom: 0.25,
      maxZoom: 4,
      getViewportSize: () => {
        let popcornElectronWorkbookPanelValue1241 = this.#s;
        return {
          width: popcornElectronWorkbookPanelValue1241?.clientWidth ?? this.#n.current.width,
          height: popcornElectronWorkbookPanelValue1241?.clientHeight ?? this.#n.current.height
        };
      },
      getWorldSize: () => {
        let popcornElectronWorkbookPanelValue1220 = this.#D(),
          popcornElectronWorkbookPanelValue1221 = popcornElectronWorkbookPanelValue1220.columnWidths.reduce((accumulator, current) => accumulator + current, 0),
          popcornElectronWorkbookPanelValue1222 = popcornElectronWorkbookPanelValue1220.rowHeights.reduce((accumulator, current) => accumulator + current, 0);
        return {
          width: popcornElectronWorkbookPanelValue1221 + 40,
          height: popcornElectronWorkbookPanelValue1222 + 20
        };
      },
      requestDraw: () => {
        let popcornElectronWorkbookPanelValue1308 = this.#o.getCamera();
        this.#w.setViewportCamera(popcornElectronWorkbookPanelValue1308);
        this.scheduleViewportRedraw();
      },
      screenToWorldPoint: (popcornElectronWorkbookPanelParam196, popcornElectronWorkbookPanelParam197, popcornElectronWorkbookPanelParam198) => {
        let popcornElectronWorkbookPanelValue1139 = this.#D();
        return popcornElectronWorkbookPanelHelper12({
          camera: popcornElectronWorkbookPanelParam196,
          screenX: popcornElectronWorkbookPanelParam197,
          screenY: popcornElectronWorkbookPanelParam198,
          freezePanes: popcornElectronWorkbookPanelValue1139.freezePanes,
          columnWidths: popcornElectronWorkbookPanelValue1139.columnWidths,
          rowHeights: popcornElectronWorkbookPanelValue1139.rowHeights
        });
      },
      clampCamera: popcornElectronWorkbookPanelParam126 => {
        let popcornElectronWorkbookPanelValue954 = this.#D(),
          popcornElectronWorkbookPanelValue955 = this.#s;
        return popcornElectronWorkbookPanelHelper10({
          camera: popcornElectronWorkbookPanelParam126,
          viewportWidth: popcornElectronWorkbookPanelValue955?.clientWidth ?? this.#n.current.width,
          viewportHeight: popcornElectronWorkbookPanelValue955?.clientHeight ?? this.#n.current.height,
          freezePanes: popcornElectronWorkbookPanelValue954.freezePanes,
          columnWidths: popcornElectronWorkbookPanelValue954.columnWidths,
          rowHeights: popcornElectronWorkbookPanelValue954.rowHeights,
          minZoom: 0.25,
          maxZoom: 4,
          bottomScrollReservePx: this.#C
        });
      },
      onCameraSettled: popcornElectronWorkbookPanelParam446 => {
        this.#w.setViewportCamera(popcornElectronWorkbookPanelParam446);
        this.#w.setZoom(popcornElectronWorkbookPanelParam446.k);
      }
    });
    let popcornElectronWorkbookPanelValue437 = this.#w.getState();
    this.#i = this.#w.subscribe(() => {
      let popcornElectronWorkbookPanelValue943 = this.#w.getState(),
        popcornElectronWorkbookPanelValue944 = popcornElectronWorkbookPanelValue943.viewport !== popcornElectronWorkbookPanelValue437.viewport,
        popcornElectronWorkbookPanelValue945 = popcornElectronWorkbookPanelValue943.navigation !== popcornElectronWorkbookPanelValue437.navigation,
        popcornElectronWorkbookPanelValue946 = popcornElectronWorkbookPanelValue943.selection !== popcornElectronWorkbookPanelValue437.selection,
        popcornElectronWorkbookPanelValue947 = popcornElectronWorkbookPanelValue943.meta !== popcornElectronWorkbookPanelValue437.meta,
        popcornElectronWorkbookPanelValue948 = popcornElectronWorkbookPanelValue944 || popcornElectronWorkbookPanelValue945 || popcornElectronWorkbookPanelValue947 || popcornElectronWorkbookPanelValue946 || popcornElectronWorkbookPanelValue943.editor !== popcornElectronWorkbookPanelValue437.editor || popcornElectronWorkbookPanelValue943.overlays !== popcornElectronWorkbookPanelValue437.overlays || popcornElectronWorkbookPanelValue943.floating !== popcornElectronWorkbookPanelValue437.floating;
      popcornElectronWorkbookPanelValue437 = popcornElectronWorkbookPanelValue943;
      popcornElectronWorkbookPanelValue948 && (popcornElectronWorkbookPanelValue944 && this.#o.setCamera(this.#w.getViewportCamera()), this.#E());
    });
    this.#o.setCamera(this.#w.getViewportCamera(), {
      settled: true
    });
    typeof document < "u" && popcornElectronWorkbookPanelHelper72().then(() => {
      this.#g = true;
      this.syncViewportCanvases();
      this.scheduleViewportRedraw();
    });
  }
  #w;
  setAccentStroke(popcornElectronWorkbookPanelParam307) {
    this.#p !== popcornElectronWorkbookPanelParam307 && (this.#p = popcornElectronWorkbookPanelParam307, this.#w.setViewportAccentStroke(popcornElectronWorkbookPanelParam307), this.scheduleViewportRedraw());
  }
  setAccentFill(popcornElectronWorkbookPanelParam411) {
    this.#f !== popcornElectronWorkbookPanelParam411 && (this.#f = popcornElectronWorkbookPanelParam411, this.scheduleViewportRedraw());
  }
  setEditingEnabled(popcornElectronWorkbookPanelParam398) {
    this.#_ !== popcornElectronWorkbookPanelParam398 && (this.#_ = popcornElectronWorkbookPanelParam398, this.scheduleViewportRedraw());
  }
  setBottomScrollReservePx(popcornElectronWorkbookPanelParam279) {
    let popcornElectronWorkbookPanelValue1267 = Math.max(0, popcornElectronWorkbookPanelParam279);
    this.#C !== popcornElectronWorkbookPanelValue1267 && (this.#C = popcornElectronWorkbookPanelValue1267, this.#o.setCamera(this.#o.getCamera(), {
      settled: true
    }));
  }
  setOverlaySelectionStateProvider(popcornElectronWorkbookPanelParam519) {
    this.#v = popcornElectronWorkbookPanelParam519;
  }
  setRangeHighlightsProvider(popcornElectronWorkbookPanelParam427) {
    this.#y = popcornElectronWorkbookPanelParam427;
    this.scheduleViewportRedraw();
  }
  setSuppressCellSelection(popcornElectronWorkbookPanelParam381) {
    this.#b !== popcornElectronWorkbookPanelParam381 && (this.#b = popcornElectronWorkbookPanelParam381, this.scheduleViewportRedraw());
  }
  setDrawingSelectionProvider(popcornElectronWorkbookPanelParam543) {
    this.#x = popcornElectronWorkbookPanelParam543;
  }
  setDrawingOcclusionProvider(popcornElectronWorkbookPanelParam544) {
    this.#S = popcornElectronWorkbookPanelParam544;
  }
  attachHost(popcornElectronWorkbookPanelParam153) {
    this.#s !== popcornElectronWorkbookPanelParam153 && (this.#T(), this.#s = popcornElectronWorkbookPanelParam153, this.#o.attach(popcornElectronWorkbookPanelParam153), popcornElectronWorkbookPanelParam153 && (typeof ResizeObserver < "u" && (this.#c = new ResizeObserver(() => {
      this.scheduleViewportCanvasSync();
    }), this.#c.observe(popcornElectronWorkbookPanelParam153)), window.addEventListener("resize", this.#a), this.scheduleViewportCanvasSync()));
  }
  attachCanvas(popcornElectronWorkbookPanelParam439) {
    this.#e.current = popcornElectronWorkbookPanelParam439;
    this.scheduleViewportCanvasSync();
  }
  attachOverlayCanvas(popcornElectronWorkbookPanelParam349) {
    this.#t.current = popcornElectronWorkbookPanelParam349;
    this.#h = false;
    this.scheduleViewportCanvasSync();
  }
  getCamera() {
    return this.#o.getCamera();
  }
  subscribeToCameraChanges(popcornElectronWorkbookPanelParam448) {
    return this.#o.subscribeToCameraChanges(popcornElectronWorkbookPanelParam448);
  }
  shouldSuppressMouseInteractions() {
    return this.#o.shouldSuppressMouseInteractions();
  }
  setCamera(popcornElectronWorkbookPanelParam551, popcornElectronWorkbookPanelParam552) {
    this.#o.setCamera(popcornElectronWorkbookPanelParam551, popcornElectronWorkbookPanelParam552);
  }
  zoomTo(popcornElectronWorkbookPanelParam562, popcornElectronWorkbookPanelParam563) {
    this.#o.zoomTo(popcornElectronWorkbookPanelParam562, popcornElectronWorkbookPanelParam563);
  }
  panByScroll(popcornElectronWorkbookPanelParam537, popcornElectronWorkbookPanelParam538) {
    this.#o.panByScroll(popcornElectronWorkbookPanelParam537, popcornElectronWorkbookPanelParam538);
  }
  revealCell(popcornElectronWorkbookPanelParam310, popcornElectronWorkbookPanelParam311, popcornElectronWorkbookPanelParam312) {
    return this.revealSelectionRect({
      r1: popcornElectronWorkbookPanelParam310,
      c1: popcornElectronWorkbookPanelParam311,
      r2: popcornElectronWorkbookPanelParam310,
      c2: popcornElectronWorkbookPanelParam311
    }, {
      paddingPx: popcornElectronWorkbookPanelParam312?.paddingPx
    });
  }
  revealSelectionRect(popcornElectronWorkbookPanelParam21, popcornElectronWorkbookPanelParam22) {
    let popcornElectronWorkbookPanelValue500 = this.#s,
      popcornElectronWorkbookPanelValue501 = this.#D(),
      popcornElectronWorkbookPanelValue502 = this.#o.getCamera(),
      popcornElectronWorkbookPanelValue503 = Math.max(popcornElectronWorkbookPanelValue502.k, 2.220446049250313e-16),
      popcornElectronWorkbookPanelValue504 = popcornElectronWorkbookPanelValue500?.clientWidth ?? this.#n.current.width,
      popcornElectronWorkbookPanelValue505 = popcornElectronWorkbookPanelValue500?.clientHeight ?? this.#n.current.height,
      popcornElectronWorkbookPanelValue506 = popcornElectronWorkbookPanelValue504 / popcornElectronWorkbookPanelValue503 - 40,
      popcornElectronWorkbookPanelValue507 = (popcornElectronWorkbookPanelValue505 - this.#C) / popcornElectronWorkbookPanelValue503 - 20;
    if (popcornElectronWorkbookPanelValue506 <= 0 || popcornElectronWorkbookPanelValue507 <= 0) return;
    let popcornElectronWorkbookPanelValue508 = popcornElectronWorkbookPanelHelper73(popcornElectronWorkbookPanelValue501.columnWidths),
      popcornElectronWorkbookPanelValue509 = popcornElectronWorkbookPanelHelper73(popcornElectronWorkbookPanelValue501.rowHeights),
      popcornElectronWorkbookPanelValue510 = Math.max(0, Math.min(popcornElectronWorkbookPanelParam21.c1, popcornElectronWorkbookPanelValue501.columnWidths.length - 1)),
      popcornElectronWorkbookPanelValue511 = Math.max(0, Math.min(popcornElectronWorkbookPanelParam21.r1, popcornElectronWorkbookPanelValue501.rowHeights.length - 1)),
      popcornElectronWorkbookPanelValue512 = Math.max(popcornElectronWorkbookPanelValue510, Math.min(popcornElectronWorkbookPanelParam21.c2 + (popcornElectronWorkbookPanelParam22?.trailingContextCols ?? 0), popcornElectronWorkbookPanelValue501.columnWidths.length - 1)),
      popcornElectronWorkbookPanelValue513 = Math.max(popcornElectronWorkbookPanelValue511, Math.min(popcornElectronWorkbookPanelParam21.r2 + (popcornElectronWorkbookPanelParam22?.trailingContextRows ?? 0), popcornElectronWorkbookPanelValue501.rowHeights.length - 1)),
      popcornElectronWorkbookPanelValue514 = popcornElectronWorkbookPanelValue508[popcornElectronWorkbookPanelValue510] ?? 0,
      popcornElectronWorkbookPanelValue515 = popcornElectronWorkbookPanelValue508[popcornElectronWorkbookPanelValue512 + 1] ?? popcornElectronWorkbookPanelValue514,
      popcornElectronWorkbookPanelValue516 = popcornElectronWorkbookPanelValue509[popcornElectronWorkbookPanelValue511] ?? 0,
      popcornElectronWorkbookPanelValue517 = popcornElectronWorkbookPanelValue509[popcornElectronWorkbookPanelValue513 + 1] ?? popcornElectronWorkbookPanelValue516,
      popcornElectronWorkbookPanelValue518 = (popcornElectronWorkbookPanelParam22?.paddingPx ?? 24) / popcornElectronWorkbookPanelValue503,
      popcornElectronWorkbookPanelValue519 = popcornElectronWorkbookPanelValue508[popcornElectronWorkbookPanelValue501.freezePanes.columnCount] ?? 0,
      popcornElectronWorkbookPanelValue520 = popcornElectronWorkbookPanelValue509[popcornElectronWorkbookPanelValue501.freezePanes.rowCount] ?? 0,
      popcornElectronWorkbookPanelValue521 = Math.max(0, popcornElectronWorkbookPanelValue506 - popcornElectronWorkbookPanelValue519),
      popcornElectronWorkbookPanelValue522 = Math.max(0, popcornElectronWorkbookPanelValue507 - popcornElectronWorkbookPanelValue520),
      popcornElectronWorkbookPanelValue523 = -popcornElectronWorkbookPanelValue502.x / popcornElectronWorkbookPanelValue503,
      popcornElectronWorkbookPanelValue524 = -popcornElectronWorkbookPanelValue502.y / popcornElectronWorkbookPanelValue503;
    if (popcornElectronWorkbookPanelValue512 >= popcornElectronWorkbookPanelValue501.freezePanes.columnCount) {
      let popcornElectronWorkbookPanelValue1177 = Math.max(popcornElectronWorkbookPanelValue514, popcornElectronWorkbookPanelValue519),
        popcornElectronWorkbookPanelValue1178 = Math.max(0, popcornElectronWorkbookPanelValue515 - popcornElectronWorkbookPanelValue1177),
        popcornElectronWorkbookPanelValue1179 = popcornElectronWorkbookPanelValue519 + popcornElectronWorkbookPanelValue523 + popcornElectronWorkbookPanelValue521 - popcornElectronWorkbookPanelValue518,
        popcornElectronWorkbookPanelValue1180 = popcornElectronWorkbookPanelValue519 + popcornElectronWorkbookPanelValue523 + popcornElectronWorkbookPanelValue518;
      popcornElectronWorkbookPanelValue1178 >= popcornElectronWorkbookPanelValue521 - popcornElectronWorkbookPanelValue518 * 2 || popcornElectronWorkbookPanelValue1177 < popcornElectronWorkbookPanelValue1180 ? popcornElectronWorkbookPanelValue523 = Math.max(0, popcornElectronWorkbookPanelValue1177 - popcornElectronWorkbookPanelValue519 - popcornElectronWorkbookPanelValue518) : popcornElectronWorkbookPanelValue515 > popcornElectronWorkbookPanelValue1179 && (popcornElectronWorkbookPanelValue523 = Math.max(0, popcornElectronWorkbookPanelValue515 - popcornElectronWorkbookPanelValue519 - popcornElectronWorkbookPanelValue521 + popcornElectronWorkbookPanelValue518));
    }
    if (popcornElectronWorkbookPanelValue513 >= popcornElectronWorkbookPanelValue501.freezePanes.rowCount) {
      let popcornElectronWorkbookPanelValue1181 = Math.max(popcornElectronWorkbookPanelValue516, popcornElectronWorkbookPanelValue520),
        popcornElectronWorkbookPanelValue1182 = Math.max(0, popcornElectronWorkbookPanelValue517 - popcornElectronWorkbookPanelValue1181),
        popcornElectronWorkbookPanelValue1183 = popcornElectronWorkbookPanelValue520 + popcornElectronWorkbookPanelValue524 + popcornElectronWorkbookPanelValue522 - popcornElectronWorkbookPanelValue518,
        popcornElectronWorkbookPanelValue1184 = popcornElectronWorkbookPanelValue520 + popcornElectronWorkbookPanelValue524 + popcornElectronWorkbookPanelValue518;
      popcornElectronWorkbookPanelValue1182 >= popcornElectronWorkbookPanelValue522 - popcornElectronWorkbookPanelValue518 * 2 || popcornElectronWorkbookPanelValue1181 < popcornElectronWorkbookPanelValue1184 ? popcornElectronWorkbookPanelValue524 = Math.max(0, popcornElectronWorkbookPanelValue1181 - popcornElectronWorkbookPanelValue520 - popcornElectronWorkbookPanelValue518) : popcornElectronWorkbookPanelValue517 > popcornElectronWorkbookPanelValue1183 && (popcornElectronWorkbookPanelValue524 = Math.max(0, popcornElectronWorkbookPanelValue517 - popcornElectronWorkbookPanelValue520 - popcornElectronWorkbookPanelValue522 + popcornElectronWorkbookPanelValue518));
    }
    let popcornElectronWorkbookPanelValue525 = {
      x: -popcornElectronWorkbookPanelValue523 * popcornElectronWorkbookPanelValue503,
      y: -popcornElectronWorkbookPanelValue524 * popcornElectronWorkbookPanelValue503,
      k: popcornElectronWorkbookPanelValue503
    };
    return popcornElectronWorkbookPanelValue525.x === popcornElectronWorkbookPanelValue502.x && popcornElectronWorkbookPanelValue525.y === popcornElectronWorkbookPanelValue502.y && popcornElectronWorkbookPanelValue525.k === popcornElectronWorkbookPanelValue502.k ? false : (this.#o.setCamera(popcornElectronWorkbookPanelValue525, {
      settled: true
    }), true);
  }
  scheduleViewportRedraw() {
    this.#l ??= window.requestAnimationFrame(() => {
      this.#l = null;
      this.runViewportRedraw();
    });
  }
  scheduleViewportCanvasSync() {
    this.#u != null && cancelAnimationFrame(this.#u);
    this.#u = requestAnimationFrame(() => {
      this.#u = null;
      let popcornElectronWorkbookPanelValue1110 = this.syncViewportCanvases();
      if (this.#l != null && (cancelAnimationFrame(this.#l), this.#l = null), popcornElectronWorkbookPanelValue1110) {
        this.#E();
        return;
      }
      this.runViewportRedraw();
    });
  }
  syncViewportCanvases() {
    let popcornElectronWorkbookPanelValue577 = this.#s;
    if (!popcornElectronWorkbookPanelValue577) return false;
    let popcornElectronWorkbookPanelValue578 = popcornElectronWorkbookPanelValue577.clientWidth,
      popcornElectronWorkbookPanelValue579 = popcornElectronWorkbookPanelValue577.clientHeight,
      popcornElectronWorkbookPanelValue580 = window.devicePixelRatio || 1,
      popcornElectronWorkbookPanelValue581 = {
        width: popcornElectronWorkbookPanelValue578,
        height: popcornElectronWorkbookPanelValue579,
        dpr: popcornElectronWorkbookPanelValue580
      },
      popcornElectronWorkbookPanelValue582 = popcornElectronWorkbookPanelValue578 > 0 ? Math.round(popcornElectronWorkbookPanelValue578 * popcornElectronWorkbookPanelValue580) : 0,
      popcornElectronWorkbookPanelValue583 = popcornElectronWorkbookPanelValue579 > 0 ? Math.round(popcornElectronWorkbookPanelValue579 * popcornElectronWorkbookPanelValue580) : 0,
      popcornElectronWorkbookPanelValue584 = `${popcornElectronWorkbookPanelValue578}px`,
      popcornElectronWorkbookPanelValue585 = `${popcornElectronWorkbookPanelValue579}px`,
      popcornElectronWorkbookPanelValue586 = this.#t.current;
    popcornElectronWorkbookPanelValue586 && (popcornElectronWorkbookPanelValue586.width !== popcornElectronWorkbookPanelValue582 && (popcornElectronWorkbookPanelValue586.width = popcornElectronWorkbookPanelValue582), popcornElectronWorkbookPanelValue586.height !== popcornElectronWorkbookPanelValue583 && (popcornElectronWorkbookPanelValue586.height = popcornElectronWorkbookPanelValue583), popcornElectronWorkbookPanelValue586.style.width !== popcornElectronWorkbookPanelValue584 && (popcornElectronWorkbookPanelValue586.style.width = popcornElectronWorkbookPanelValue584), popcornElectronWorkbookPanelValue586.style.height !== popcornElectronWorkbookPanelValue585 && (popcornElectronWorkbookPanelValue586.style.height = popcornElectronWorkbookPanelValue585));
    let popcornElectronWorkbookPanelValue587 = this.#e.current;
    popcornElectronWorkbookPanelValue587 && (popcornElectronWorkbookPanelValue587.width !== popcornElectronWorkbookPanelValue582 && (popcornElectronWorkbookPanelValue587.width = popcornElectronWorkbookPanelValue582), popcornElectronWorkbookPanelValue587.height !== popcornElectronWorkbookPanelValue583 && (popcornElectronWorkbookPanelValue587.height = popcornElectronWorkbookPanelValue583), popcornElectronWorkbookPanelValue587.style.width !== popcornElectronWorkbookPanelValue584 && (popcornElectronWorkbookPanelValue587.style.width = popcornElectronWorkbookPanelValue584), popcornElectronWorkbookPanelValue587.style.height !== popcornElectronWorkbookPanelValue585 && (popcornElectronWorkbookPanelValue587.style.height = popcornElectronWorkbookPanelValue585));
    this.#n.current = {
      ...popcornElectronWorkbookPanelValue581
    };
    let popcornElectronWorkbookPanelValue588 = false;
    return popcornElectronWorkbookPanelValue587 && !this.#m && popcornElectronWorkbookPanelValue578 > 0 && popcornElectronWorkbookPanelValue579 > 0 && (this.#w.attachViewportCanvas(popcornElectronWorkbookPanelValue587, {
      width: popcornElectronWorkbookPanelValue578,
      height: popcornElectronWorkbookPanelValue579,
      dpr: popcornElectronWorkbookPanelValue580
    }), this.#m = true, this.#d = {
      ...popcornElectronWorkbookPanelValue581
    }, popcornElectronWorkbookPanelValue588 = true), popcornElectronWorkbookPanelValue586 && !this.#h && popcornElectronWorkbookPanelValue578 > 0 && popcornElectronWorkbookPanelValue579 > 0 && (this.#w.attachViewportOverlayCanvas(popcornElectronWorkbookPanelValue586, {
      width: popcornElectronWorkbookPanelValue578,
      height: popcornElectronWorkbookPanelValue579,
      dpr: popcornElectronWorkbookPanelValue580
    }), this.#h = true), popcornElectronWorkbookPanelHelper74(this.#d, popcornElectronWorkbookPanelValue581) || (this.#w.resizeViewportCanvas({
      width: popcornElectronWorkbookPanelValue578,
      height: popcornElectronWorkbookPanelValue579,
      dpr: popcornElectronWorkbookPanelValue580
    }), this.#d = {
      ...popcornElectronWorkbookPanelValue581
    }, popcornElectronWorkbookPanelValue588 = true), popcornElectronWorkbookPanelValue588;
  }
  runViewportRedraw() {
    if (!this.#g) return;
    let popcornElectronWorkbookPanelValue1077 = this.#o.getCamera();
    this.#w.requestViewportRedraw();
    this.#r.debug("worker-redraw", {
      activeSheetName: this.#D().activeSheetName,
      selection: this.#D().selectedAddress,
      viewportMetrics: this.#n.current,
      zoom: popcornElectronWorkbookPanelValue1077.k
    });
    this.#E();
  }
  destroy() {
    this.#l != null && (cancelAnimationFrame(this.#l), this.#l = null);
    this.#u != null && (cancelAnimationFrame(this.#u), this.#u = null);
    this.#T();
    this.#o.destroy();
    this.#e.current = null;
    this.#t.current = null;
    this.#m = false;
    this.#h = false;
    this.#d = null;
    this.#i();
  }
  #T() {
    this.#c?.disconnect();
    this.#c = null;
    this.#o.attach(null);
    this.#s && window.removeEventListener("resize", this.#a);
    this.#s = null;
  }
  #E() {
    let popcornElectronWorkbookPanelValue673 = this.#D(),
      popcornElectronWorkbookPanelValue674 = {
        mergedCells: this.#w.getState().overlays.mergedCells
      },
      popcornElectronWorkbookPanelValue675 = !!popcornElectronWorkbookPanelValue673.selectedFloatingElement || this.#b;
    $t({
      overlayCanvas: this.#t.current,
      camera: this.#o.getCamera(),
      viewportMetrics: this.#n.current,
      syncViewportCanvases: () => this.syncViewportCanvases(),
      activeCell: popcornElectronWorkbookPanelValue673.activeCell,
      selectionRect: popcornElectronWorkbookPanelValue673.selectionRect,
      fillPreviewRect: popcornElectronWorkbookPanelValue673.fillPreviewRect,
      selectionStart: this.#v?.().selectionStart,
      selectionEnd: this.#v?.().selectionEnd,
      rangeHighlights: [...(this.#y?.() ?? [])],
      drawingSelection: this.#x?.() ?? null,
      drawingOcclusionRects: [...(this.#S?.() ?? [])],
      viewColWidths: popcornElectronWorkbookPanelValue673.columnWidths,
      rowHeights: popcornElectronWorkbookPanelValue673.rowHeights,
      freezePanes: popcornElectronWorkbookPanelValue673.freezePanes,
      accentFill: this.#f,
      accentStroke: this.#p,
      sheet: popcornElectronWorkbookPanelValue674,
      resizeGuide: popcornElectronWorkbookPanelValue673.resizeGuide,
      showFillHandle: this.#_,
      showDrawingHandles: this.#_,
      suppressCellSelection: popcornElectronWorkbookPanelValue675
    });
  }
  #D() {
    let popcornElectronWorkbookPanelValue728 = this.#w.getState();
    return {
      workbookVersion: popcornElectronWorkbookPanelValue728.meta.workbookVersion,
      showFormulas: popcornElectronWorkbookPanelValue728.meta.showFormulas,
      activeSheetName: popcornElectronWorkbookPanelValue728.navigation.activeSheetName,
      activeCell: popcornElectronWorkbookPanelValue728.selection.activeCell,
      selectedAddress: popcornElectronWorkbookPanelValue728.selection.selectedAddress,
      selectionRect: popcornElectronWorkbookPanelValue728.selection.selectionRect,
      fillPreviewRect: popcornElectronWorkbookPanelValue728.selection.fillPreviewRect,
      zoom: popcornElectronWorkbookPanelValue728.viewport.zoom,
      columnWidths: popcornElectronWorkbookPanelValue728.viewport.columnWidths,
      rowHeights: popcornElectronWorkbookPanelValue728.viewport.rowHeights,
      freezePanes: popcornElectronWorkbookPanelValue728.viewport.freezePanes,
      resizeGuide: popcornElectronWorkbookPanelValue728.viewport.resizeGuide,
      selectedFloatingElement: popcornElectronWorkbookPanelValue728.floating.selectedFloatingElement ? {
        logicalBounds: popcornElectronWorkbookPanelValue728.floating.selectedFloatingElement.logicalBounds,
        rotation: popcornElectronWorkbookPanelValue728.floating.selectedFloatingElement.rotation
      } : null
    };
  }
};
function popcornElectronWorkbookPanelHelper75({
  rowIndex,
  colIndex,
  zoom,
  viewColWidths,
  rowHeights,
  initialValue,
  onFocus,
  onChange,
  onCommit,
  onCancel,
  viewport,
  accentColor,
  camera,
  freezePanes,
  sheetName
}) {
  let popcornElectronWorkbookPanelValue374 = React.useRef(null),
    popcornElectronWorkbookPanelValue375 = React.useRef(null),
    popcornElectronWorkbookPanelValue376 = React.useRef(null),
    [popcornElectronWorkbookPanelValue377, popcornElectronWorkbookPanelValue378] = React.useState(0),
    popcornElectronWorkbookPanelValue379 = React.useMemo(() => popcornElectronWorkbookPanelHelper76(viewColWidths), [viewColWidths]),
    popcornElectronWorkbookPanelValue380 = React.useMemo(() => popcornElectronWorkbookPanelHelper76(rowHeights), [rowHeights]),
    popcornElectronWorkbookPanelValue381 = 40 + (popcornElectronWorkbookPanelValue379[colIndex] ?? 0),
    popcornElectronWorkbookPanelValue382 = 20 + (popcornElectronWorkbookPanelValue380[rowIndex] ?? 0),
    popcornElectronWorkbookPanelValue383 = Math.max(viewColWidths[colIndex] ?? 0, 24),
    popcornElectronWorkbookPanelValue384 = Math.max(rowHeights[rowIndex] ?? 0, 24),
    popcornElectronWorkbookPanelValue385 = popcornElectronWorkbookPanelHelper16({
      camera,
      worldX: popcornElectronWorkbookPanelValue381,
      worldY: popcornElectronWorkbookPanelValue382,
      width: popcornElectronWorkbookPanelValue383,
      height: popcornElectronWorkbookPanelValue384,
      freezePanes,
      columnWidths: viewColWidths,
      rowHeights
    })[0] ?? null,
    popcornElectronWorkbookPanelValue386 = (viewport.scrollLeft + viewport.width) / Math.max(zoom, 1e-4),
    popcornElectronWorkbookPanelValue387 = (viewport.scrollTop + viewport.height) / Math.max(zoom, 1e-4),
    popcornElectronWorkbookPanelValue388 = popcornElectronWorkbookPanelHelper77(viewColWidths, colIndex),
    popcornElectronWorkbookPanelValue389 = popcornElectronWorkbookPanelHelper77(rowHeights, rowIndex),
    popcornElectronWorkbookPanelValue390 = Math.max(0, Math.min(popcornElectronWorkbookPanelValue386 - (popcornElectronWorkbookPanelValue381 + popcornElectronWorkbookPanelValue383), popcornElectronWorkbookPanelValue388 - popcornElectronWorkbookPanelValue383)),
    popcornElectronWorkbookPanelValue391 = Math.max(0, Math.min(popcornElectronWorkbookPanelValue387 - (popcornElectronWorkbookPanelValue382 + popcornElectronWorkbookPanelValue384), popcornElectronWorkbookPanelValue389 - popcornElectronWorkbookPanelValue384)),
    popcornElectronWorkbookPanelValue392 = popcornElectronWorkbookPanelValue383 + popcornElectronWorkbookPanelValue390,
    popcornElectronWorkbookPanelValue393 = popcornElectronWorkbookPanelValue384 + popcornElectronWorkbookPanelValue391,
    popcornElectronWorkbookPanelValue394 = React.useMemo(() => popcornElectronWorkbookPanelHelper78({
      sizes: viewColWidths,
      startIndex: colIndex,
      baseSize: popcornElectronWorkbookPanelValue383,
      limit: popcornElectronWorkbookPanelValue392
    }), [popcornElectronWorkbookPanelValue383, colIndex, viewColWidths, popcornElectronWorkbookPanelValue392]),
    popcornElectronWorkbookPanelValue395 = React.useMemo(() => popcornElectronWorkbookPanelHelper78({
      sizes: rowHeights,
      startIndex: rowIndex,
      baseSize: popcornElectronWorkbookPanelValue384,
      limit: popcornElectronWorkbookPanelValue393
    }), [popcornElectronWorkbookPanelValue384, popcornElectronWorkbookPanelValue393, rowHeights, rowIndex]),
    [popcornElectronWorkbookPanelValue396, popcornElectronWorkbookPanelValue397] = React.useState(popcornElectronWorkbookPanelValue394[0] ?? popcornElectronWorkbookPanelValue383),
    [popcornElectronWorkbookPanelValue398, popcornElectronWorkbookPanelValue399] = React.useState(popcornElectronWorkbookPanelValue395[0] ?? popcornElectronWorkbookPanelValue384);
  popcornElectronSurfaceStyleS(() => {
    popcornElectronWorkbookPanelValue397(popcornElectronWorkbookPanelValue394[0] ?? popcornElectronWorkbookPanelValue383);
  }, [popcornElectronWorkbookPanelValue383, popcornElectronWorkbookPanelValue394]);
  popcornElectronSurfaceStyleS(() => {
    popcornElectronWorkbookPanelValue399(popcornElectronWorkbookPanelValue395[0] ?? popcornElectronWorkbookPanelValue384);
  }, [popcornElectronWorkbookPanelValue384, popcornElectronWorkbookPanelValue395]);
  popcornElectronSurfaceStyleS(() => {
    let popcornElectronWorkbookPanelValue1027 = popcornElectronWorkbookPanelValue374.current;
    if (popcornElectronWorkbookPanelValue1027) return popcornElectronWorkbookPanelValue375.current = null, popcornElectronWorkbookPanelValue1027.textContent = initialValue, popcornElectronWorkbookPanelValue376.current != null && cancelAnimationFrame(popcornElectronWorkbookPanelValue376.current), popcornElectronWorkbookPanelValue376.current = requestAnimationFrame(() => {
      popcornElectronWorkbookPanelHelper80(popcornElectronWorkbookPanelValue1027);
      popcornElectronWorkbookPanelValue378(popcornElectronWorkbookPanelParam616 => popcornElectronWorkbookPanelParam616 + 1);
    }), () => {
      popcornElectronWorkbookPanelValue376.current != null && (cancelAnimationFrame(popcornElectronWorkbookPanelValue376.current), popcornElectronWorkbookPanelValue376.current = null);
    };
  }, [colIndex, rowIndex, sheetName]);
  popcornElectronSurfaceStyleS(() => {
    let popcornElectronWorkbookPanelValue1386 = popcornElectronWorkbookPanelValue374.current;
    popcornElectronWorkbookPanelValue1386 && popcornElectronWorkbookPanelValue1386.focus();
  }, [colIndex, rowIndex]);
  popcornElectronSurfaceStyleS(() => {
    let popcornElectronWorkbookPanelValue1102 = popcornElectronWorkbookPanelValue374.current;
    if (!popcornElectronWorkbookPanelValue1102) return;
    let popcornElectronWorkbookPanelValue1103 = Math.max(popcornElectronWorkbookPanelValue1102.scrollWidth, popcornElectronWorkbookPanelValue1102.clientWidth) / Math.max(zoom, 1e-4),
      popcornElectronWorkbookPanelValue1104 = Math.max(popcornElectronWorkbookPanelValue1102.scrollHeight, popcornElectronWorkbookPanelValue1102.clientHeight) / Math.max(zoom, 1e-4),
      popcornElectronWorkbookPanelValue1105 = popcornElectronWorkbookPanelHelper79(popcornElectronWorkbookPanelValue394, popcornElectronWorkbookPanelValue1103),
      popcornElectronWorkbookPanelValue1106 = popcornElectronWorkbookPanelHelper79(popcornElectronWorkbookPanelValue395, popcornElectronWorkbookPanelValue1104);
    popcornElectronWorkbookPanelValue1105 && Math.abs(popcornElectronWorkbookPanelValue1105 - popcornElectronWorkbookPanelValue396) > 0.5 && popcornElectronWorkbookPanelValue397(popcornElectronWorkbookPanelValue1105);
    popcornElectronWorkbookPanelValue1106 && Math.abs(popcornElectronWorkbookPanelValue1106 - popcornElectronWorkbookPanelValue398) > 0.5 && popcornElectronWorkbookPanelValue399(popcornElectronWorkbookPanelValue1106);
  }, [popcornElectronWorkbookPanelValue395, popcornElectronWorkbookPanelValue398, popcornElectronWorkbookPanelValue396, popcornElectronWorkbookPanelValue377, popcornElectronWorkbookPanelValue394, zoom]);
  let popcornElectronWorkbookPanelValue400 = React.useCallback(() => {
      let popcornElectronWorkbookPanelValue1362 = popcornElectronWorkbookPanelValue374.current?.textContent ?? "";
      onChange?.(popcornElectronWorkbookPanelValue1362);
      popcornElectronWorkbookPanelValue378(popcornElectronWorkbookPanelParam617 => popcornElectronWorkbookPanelParam617 + 1);
    }, [onChange]),
    popcornElectronWorkbookPanelValue401 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue375.current !== "cancel" && (popcornElectronWorkbookPanelValue375.current = "commit", onCommit?.(popcornElectronWorkbookPanelValue374.current?.textContent ?? "", {
        source: "blur"
      }));
    }, [onCommit]),
    popcornElectronWorkbookPanelValue402 = React.useCallback(event => {
      if (event.stopPropagation(), event.key === "Escape") {
        event.preventDefault();
        popcornElectronWorkbookPanelValue375.current = "cancel";
        onCancel?.();
        return;
      }
      event.key === "Enter" && !event.shiftKey && (event.preventDefault(), popcornElectronWorkbookPanelValue375.current = "commit", onCommit?.(popcornElectronWorkbookPanelValue374.current?.textContent ?? "", {
        source: "enter"
      }));
    }, [onCancel, onCommit]),
    popcornElectronWorkbookPanelValue403 = React.useCallback(event => {
      event.stopPropagation();
    }, []),
    popcornElectronWorkbookPanelValue404 = popcornElectronWorkbookPanelHelper81(accentColor, 0.1);
  return popcornElectronWorkbookPanelValue385 ? <div data-testid="popcorn-cell-edit-overlay" className="border-token-border pointer-events-auto absolute z-30 overflow-hidden border bg-white" style={{
    left: popcornElectronWorkbookPanelValue385.x,
    top: popcornElectronWorkbookPanelValue385.y,
    width: popcornElectronWorkbookPanelValue396 * zoom,
    height: popcornElectronWorkbookPanelValue398 * zoom,
    outline: popcornElectronWorkbookPanelValue404 ? `2px solid ${popcornElectronWorkbookPanelValue404}` : undefined
  }} onMouseDown={popcornElectronWorkbookPanelValue403} onPointerDown={popcornElectronWorkbookPanelValue403}>
      <div ref={popcornElectronWorkbookPanelValue374} role="textbox" aria-label="Cell editor" aria-multiline="true" data-testid="popcorn-cell-editor-input" contentEditable={true} suppressContentEditableWarning={true} spellCheck={false} className="text-token-text-primary h-full w-full px-[6px] text-[13px] break-words whitespace-pre-wrap focus:outline-none" onInput={popcornElectronWorkbookPanelValue400} onFocus={onFocus} onBlur={popcornElectronWorkbookPanelValue401} onKeyDown={popcornElectronWorkbookPanelValue402} />
    </div> : null;
}
function popcornElectronWorkbookPanelHelper76(popcornElectronWorkbookPanelParam354) {
  let popcornElectronWorkbookPanelValue1329 = [0];
  for (let popcornElectronWorkbookPanelValue1372 = 0; popcornElectronWorkbookPanelValue1372 < popcornElectronWorkbookPanelParam354.length; popcornElectronWorkbookPanelValue1372 += 1) popcornElectronWorkbookPanelValue1329[popcornElectronWorkbookPanelValue1372 + 1] = (popcornElectronWorkbookPanelValue1329[popcornElectronWorkbookPanelValue1372] ?? 0) + (popcornElectronWorkbookPanelParam354[popcornElectronWorkbookPanelValue1372] ?? 0);
  return popcornElectronWorkbookPanelValue1329;
}
function popcornElectronWorkbookPanelHelper77(popcornElectronWorkbookPanelParam369, popcornElectronWorkbookPanelParam370) {
  let popcornElectronWorkbookPanelValue1336 = 0;
  for (let popcornElectronWorkbookPanelValue1380 = popcornElectronWorkbookPanelParam370; popcornElectronWorkbookPanelValue1380 < popcornElectronWorkbookPanelParam369.length; popcornElectronWorkbookPanelValue1380 += 1) popcornElectronWorkbookPanelValue1336 += Math.max(popcornElectronWorkbookPanelParam369[popcornElectronWorkbookPanelValue1380] ?? 0, 0);
  return popcornElectronWorkbookPanelValue1336;
}
function popcornElectronWorkbookPanelHelper78({
  sizes,
  startIndex,
  baseSize,
  limit
}) {
  let popcornElectronWorkbookPanelValue1130 = [],
    popcornElectronWorkbookPanelValue1131 = Math.max(baseSize, 24);
  popcornElectronWorkbookPanelValue1130.push(popcornElectronWorkbookPanelValue1131);
  let popcornElectronWorkbookPanelValue1132 = popcornElectronWorkbookPanelValue1131;
  for (let popcornElectronWorkbookPanelValue1290 = startIndex + 1; popcornElectronWorkbookPanelValue1290 < sizes.length; popcornElectronWorkbookPanelValue1290 += 1) {
    let popcornElectronWorkbookPanelValue1332 = Math.max(sizes[popcornElectronWorkbookPanelValue1290] ?? 0, 0);
    if (!(popcornElectronWorkbookPanelValue1332 <= 0) && (popcornElectronWorkbookPanelValue1132 += popcornElectronWorkbookPanelValue1332, popcornElectronWorkbookPanelValue1130.push(Math.min(popcornElectronWorkbookPanelValue1132, limit)), popcornElectronWorkbookPanelValue1132 >= limit - 0.5)) break;
  }
  return popcornElectronWorkbookPanelValue1130;
}
function popcornElectronWorkbookPanelHelper79(popcornElectronWorkbookPanelParam389, popcornElectronWorkbookPanelParam390) {
  for (let popcornElectronWorkbookPanelValue1393 of popcornElectronWorkbookPanelParam389) if (popcornElectronWorkbookPanelValue1393 >= popcornElectronWorkbookPanelParam390 - 0.5) return popcornElectronWorkbookPanelValue1393;
  return popcornElectronWorkbookPanelParam389[popcornElectronWorkbookPanelParam389.length - 1] ?? null;
}
function popcornElectronWorkbookPanelHelper80(popcornElectronWorkbookPanelParam223) {
  if (typeof window > "u" || !window.getSelection) return;
  let popcornElectronWorkbookPanelValue1195 = window.getSelection();
  if (!popcornElectronWorkbookPanelValue1195) return;
  let popcornElectronWorkbookPanelValue1196 = document.createRange();
  popcornElectronWorkbookPanelValue1196.selectNodeContents(popcornElectronWorkbookPanelParam223);
  popcornElectronWorkbookPanelValue1196.collapse(false);
  popcornElectronWorkbookPanelValue1195.removeAllRanges();
  popcornElectronWorkbookPanelValue1195.addRange(popcornElectronWorkbookPanelValue1196);
}
function popcornElectronWorkbookPanelHelper81(popcornElectronWorkbookPanelParam406, popcornElectronWorkbookPanelParam407) {
  let popcornElectronWorkbookPanelValue1356 = popcornElectronWorkbookPanelHelper82(popcornElectronWorkbookPanelParam406);
  return popcornElectronWorkbookPanelValue1356 ? `rgba(${popcornElectronWorkbookPanelValue1356.r}, ${popcornElectronWorkbookPanelValue1356.g}, ${popcornElectronWorkbookPanelValue1356.b}, ${popcornElectronWorkbookPanelParam407})` : null;
}
function popcornElectronWorkbookPanelHelper82(popcornElectronWorkbookPanelParam240) {
  let popcornElectronWorkbookPanelValue1225 = popcornElectronWorkbookPanelParam240.match(/^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i);
  return popcornElectronWorkbookPanelValue1225 ? {
    r: Number(popcornElectronWorkbookPanelValue1225[1] ?? 0),
    g: Number(popcornElectronWorkbookPanelValue1225[2] ?? 0),
    b: Number(popcornElectronWorkbookPanelValue1225[3] ?? 0)
  } : null;
}
function popcornElectronWorkbookPanelHelper83(popcornElectronWorkbookPanelParam37, popcornElectronWorkbookPanelParam38, popcornElectronWorkbookPanelParam39 = 12) {
  for (let popcornElectronWorkbookPanelValue616 = popcornElectronWorkbookPanelParam37.length - 1; popcornElectronWorkbookPanelValue616 >= 0; --popcornElectronWorkbookPanelValue616) {
    let popcornElectronWorkbookPanelValue617 = popcornElectronWorkbookPanelParam37[popcornElectronWorkbookPanelValue616];
    if (popcornElectronWorkbookPanelValue617) {
      if (popcornElectronWorkbookPanelHelper84(popcornElectronWorkbookPanelValue617.kind)) {
        if (popcornElectronWorkbookPanelValue617.x === undefined || popcornElectronWorkbookPanelValue617.y === undefined || popcornElectronWorkbookPanelValue617.width === undefined || popcornElectronWorkbookPanelValue617.height === undefined) continue;
        let popcornElectronWorkbookPanelValue1047 = popcornElectronWorkbookPanelValue617.x + popcornElectronWorkbookPanelValue617.width / 2,
          popcornElectronWorkbookPanelValue1048 = popcornElectronWorkbookPanelValue617.y + popcornElectronWorkbookPanelValue617.height / 2,
          popcornElectronWorkbookPanelValue1049 = Math.max(popcornElectronWorkbookPanelValue617.width, popcornElectronWorkbookPanelValue617.height) / 2 + Math.max(0, popcornElectronWorkbookPanelParam39);
        if (popcornElectronWorkbookPanelParam38.x >= popcornElectronWorkbookPanelValue1047 - popcornElectronWorkbookPanelValue1049 && popcornElectronWorkbookPanelParam38.x <= popcornElectronWorkbookPanelValue1047 + popcornElectronWorkbookPanelValue1049 && popcornElectronWorkbookPanelParam38.y >= popcornElectronWorkbookPanelValue1048 - popcornElectronWorkbookPanelValue1049 && popcornElectronWorkbookPanelParam38.y <= popcornElectronWorkbookPanelValue1048 + popcornElectronWorkbookPanelValue1049) return popcornElectronWorkbookPanelValue617;
        continue;
      }
      if (popcornElectronWorkbookPanelHelper85(popcornElectronWorkbookPanelValue617.kind)) {
        if (popcornElectronWorkbookPanelValue617.x !== undefined && popcornElectronWorkbookPanelValue617.y !== undefined && popcornElectronWorkbookPanelValue617.width !== undefined && popcornElectronWorkbookPanelValue617.height !== undefined && popcornElectronWorkbookPanelParam38.x >= popcornElectronWorkbookPanelValue617.x && popcornElectronWorkbookPanelParam38.x <= popcornElectronWorkbookPanelValue617.x + popcornElectronWorkbookPanelValue617.width && popcornElectronWorkbookPanelParam38.y >= popcornElectronWorkbookPanelValue617.y && popcornElectronWorkbookPanelParam38.y <= popcornElectronWorkbookPanelValue617.y + popcornElectronWorkbookPanelValue617.height) return popcornElectronWorkbookPanelValue617;
        continue;
      }
      if (popcornElectronWorkbookPanelValue617.kind === "pie" && popcornElectronWorkbookPanelValue617.cx != null && popcornElectronWorkbookPanelValue617.cy != null) {
        let popcornElectronWorkbookPanelValue992 = popcornElectronWorkbookPanelParam38.x - popcornElectronWorkbookPanelValue617.cx,
          popcornElectronWorkbookPanelValue993 = popcornElectronWorkbookPanelParam38.y - popcornElectronWorkbookPanelValue617.cy,
          popcornElectronWorkbookPanelValue994 = Math.hypot(popcornElectronWorkbookPanelValue992, popcornElectronWorkbookPanelValue993);
        if (popcornElectronWorkbookPanelValue994 < (popcornElectronWorkbookPanelValue617.rInner ?? 0) || popcornElectronWorkbookPanelValue994 > (popcornElectronWorkbookPanelValue617.rOuter ?? 0)) continue;
        let popcornElectronWorkbookPanelValue995 = Math.atan2(popcornElectronWorkbookPanelValue993, popcornElectronWorkbookPanelValue992);
        popcornElectronWorkbookPanelValue995 < 0 && (popcornElectronWorkbookPanelValue995 += Math.PI * 2);
        let popcornElectronWorkbookPanelValue996 = popcornElectronWorkbookPanelValue617.startAngle ?? 0,
          popcornElectronWorkbookPanelValue997 = popcornElectronWorkbookPanelValue617.endAngle ?? 0;
        if (popcornElectronWorkbookPanelValue996 < 0 && (popcornElectronWorkbookPanelValue996 += Math.PI * 2), popcornElectronWorkbookPanelValue997 < 0 && (popcornElectronWorkbookPanelValue997 += Math.PI * 2), popcornElectronWorkbookPanelValue996 <= popcornElectronWorkbookPanelValue997 ? popcornElectronWorkbookPanelValue995 >= popcornElectronWorkbookPanelValue996 && popcornElectronWorkbookPanelValue995 <= popcornElectronWorkbookPanelValue997 : popcornElectronWorkbookPanelValue995 >= popcornElectronWorkbookPanelValue996 || popcornElectronWorkbookPanelValue995 <= popcornElectronWorkbookPanelValue997) return popcornElectronWorkbookPanelValue617;
      }
    }
  }
  return null;
}
function popcornElectronWorkbookPanelHelper84(popcornElectronWorkbookPanelParam408) {
  return popcornElectronWorkbookPanelParam408 === "scatter-point" || popcornElectronWorkbookPanelParam408 === "bubble-point" || popcornElectronWorkbookPanelParam408 === "line-point";
}
function popcornElectronWorkbookPanelHelper85(popcornElectronWorkbookPanelParam292) {
  return popcornElectronWorkbookPanelParam292 === "bar-vertical" || popcornElectronWorkbookPanelParam292 === "bar-horizontal" || popcornElectronWorkbookPanelParam292 === "line-point" || popcornElectronWorkbookPanelParam292 === "area-point" || popcornElectronWorkbookPanelParam292 === "legend";
}
function $n({
  canvasRef,
  viewportRef,
  chartTargetsRef,
  getCamera,
  selectedFloatingElement,
  suppressHover = false,
  freezePanes,
  columnWidths,
  rowHeights,
  minPointHitRadius = 12,
  subscribeToPointerEvents,
  subscribeToCameraChanges: popcornElectronWorkbookPanelParam6
}) {
  let [popcornElectronWorkbookPanelValue349, popcornElectronWorkbookPanelValue350] = React.useState(null),
    {
      x: _x,
      y,
      strategy,
      refs,
      update
    } = popcornElectronWorkbookPanelImport6({
      placement: "top",
      middleware: [popcornElectronWorkbookPanelImport5(6), popcornElectronWorkbookPanelImport8(), popcornElectronWorkbookPanelImport9({
        padding: 8
      })],
      whileElementsMounted: popcornElectronWorkbookPanelImport7,
      strategy: "fixed"
    }),
    popcornElectronWorkbookPanelValue351 = React.useRef(null),
    popcornElectronWorkbookPanelValue352 = React.useRef(false),
    popcornElectronWorkbookPanelValue353 = React.useCallback(popcornElectronWorkbookPanelParam227 => {
      if (popcornElectronWorkbookPanelParam227 == null && !popcornElectronWorkbookPanelValue352.current) return;
      let popcornElectronWorkbookPanelValue1202 = popcornElectronWorkbookPanelParam227 ?? "",
        popcornElectronWorkbookPanelValue1203 = canvasRef.current;
      popcornElectronWorkbookPanelValue1203 && (popcornElectronWorkbookPanelValue1203.style.cursor = popcornElectronWorkbookPanelValue1202);
      let popcornElectronWorkbookPanelValue1204 = viewportRef.current;
      popcornElectronWorkbookPanelValue1204 && (popcornElectronWorkbookPanelValue1204.style.cursor = popcornElectronWorkbookPanelValue1202);
      popcornElectronWorkbookPanelValue352.current = popcornElectronWorkbookPanelParam227 != null;
    }, [canvasRef, viewportRef]),
    popcornElectronWorkbookPanelValue354 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue350(null);
      popcornElectronWorkbookPanelValue353(null);
    }, [popcornElectronWorkbookPanelValue353]),
    popcornElectronWorkbookPanelValue355 = suppressHover || selectedFloatingElement?.interactionState === "dragging" || selectedFloatingElement?.interactionState === "resizing" || selectedFloatingElement?.interactionState === "rotating",
    popcornElectronWorkbookPanelValue356 = React.useCallback((popcornElectronWorkbookPanelParam230, popcornElectronWorkbookPanelParam231) => {
      if (popcornElectronWorkbookPanelValue355) {
        popcornElectronWorkbookPanelValue354();
        return;
      }
      let popcornElectronWorkbookPanelValue1210 = getCamera(),
        popcornElectronWorkbookPanelValue1211 = minPointHitRadius / Math.max(popcornElectronWorkbookPanelValue1210.k, 1e-4),
        popcornElectronWorkbookPanelValue1212 = popcornElectronWorkbookPanelHelper83(chartTargetsRef.current, {
          x: popcornElectronWorkbookPanelParam230,
          y: popcornElectronWorkbookPanelParam231
        }, popcornElectronWorkbookPanelValue1211);
      popcornElectronWorkbookPanelValue350(popcornElectronWorkbookPanelValue1212);
      popcornElectronWorkbookPanelValue353(popcornElectronWorkbookPanelValue1212 ? "pointer" : null);
    }, [chartTargetsRef, getCamera, popcornElectronWorkbookPanelValue355, minPointHitRadius, popcornElectronWorkbookPanelValue354, popcornElectronWorkbookPanelValue353]);
  return React.useEffect(() => {
    popcornElectronWorkbookPanelValue355 && popcornElectronWorkbookPanelValue354();
  }, [popcornElectronWorkbookPanelValue355, popcornElectronWorkbookPanelValue354]), React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue349 || popcornElectronWorkbookPanelValue349.kind === "legend" || !canvasRef.current) return;
    let popcornElectronWorkbookPanelValue984 = canvasRef.current.getBoundingClientRect(),
      popcornElectronWorkbookPanelValue985 = popcornElectronWorkbookPanelHelper14({
        camera: getCamera(),
        worldX: popcornElectronWorkbookPanelValue349.anchorX,
        worldY: popcornElectronWorkbookPanelValue349.anchorY,
        freezePanes,
        columnWidths,
        rowHeights
      }),
      popcornElectronWorkbookPanelValue986 = {
        getBoundingClientRect: () => new DOMRect(popcornElectronWorkbookPanelValue984.left + popcornElectronWorkbookPanelValue985.x, popcornElectronWorkbookPanelValue984.top + popcornElectronWorkbookPanelValue985.y, 0, 0)
      };
    popcornElectronWorkbookPanelValue351.current = popcornElectronWorkbookPanelValue986;
    refs.setReference(popcornElectronWorkbookPanelValue986);
    update?.();
  }, [canvasRef, columnWidths, freezePanes, getCamera, popcornElectronWorkbookPanelValue349, refs, rowHeights, update]), React.useEffect(() => {
    if (subscribeToPointerEvents) return subscribeToPointerEvents(event => {
      if (event.type === "pointerLeave") {
        popcornElectronWorkbookPanelValue354();
        return;
      }
      if (event.type === "pointerDown") {
        popcornElectronWorkbookPanelValue354();
        return;
      }
      if (event.type === "pointerUp" && event.pointerType !== "mouse") {
        popcornElectronWorkbookPanelValue354();
        return;
      }
      event.type === "pointerMove" && popcornElectronWorkbookPanelValue356(event.world.x, event.world.y);
    });
  }, [popcornElectronWorkbookPanelValue354, subscribeToPointerEvents, popcornElectronWorkbookPanelValue356]), React.useEffect(() => {
    if (subscribeToPointerEvents) return;
    let popcornElectronWorkbookPanelValue806 = canvasRef.current;
    if (!popcornElectronWorkbookPanelValue806) return;
    let popcornElectronWorkbookPanelValue807 = event => {
        let popcornElectronWorkbookPanelValue1107 = popcornElectronWorkbookPanelValue806.getBoundingClientRect(),
          popcornElectronWorkbookPanelValue1108 = popcornElectronWorkbookPanelHelper12({
            camera: getCamera(),
            screenX: event.clientX - popcornElectronWorkbookPanelValue1107.left,
            screenY: event.clientY - popcornElectronWorkbookPanelValue1107.top,
            freezePanes,
            columnWidths,
            rowHeights
          });
        popcornElectronWorkbookPanelValue356(popcornElectronWorkbookPanelValue1108.x, popcornElectronWorkbookPanelValue1108.y);
      },
      popcornElectronWorkbookPanelValue808 = () => popcornElectronWorkbookPanelValue354();
    return popcornElectronWorkbookPanelValue806.addEventListener("mousemove", popcornElectronWorkbookPanelValue807), popcornElectronWorkbookPanelValue806.addEventListener("mouseleave", popcornElectronWorkbookPanelValue808), () => {
      popcornElectronWorkbookPanelValue806.removeEventListener("mousemove", popcornElectronWorkbookPanelValue807);
      popcornElectronWorkbookPanelValue806.removeEventListener("mouseleave", popcornElectronWorkbookPanelValue808);
      popcornElectronWorkbookPanelValue354();
    };
  }, [canvasRef, popcornElectronWorkbookPanelValue354, subscribeToPointerEvents, popcornElectronWorkbookPanelValue356, getCamera, columnWidths, freezePanes, rowHeights]), React.useEffect(() => {
    if (popcornElectronWorkbookPanelParam6) return popcornElectronWorkbookPanelParam6(() => {
      popcornElectronWorkbookPanelValue354();
    });
  }, [popcornElectronWorkbookPanelValue354, popcornElectronWorkbookPanelParam6]), !popcornElectronWorkbookPanelValue349 || popcornElectronWorkbookPanelValue349.kind === "legend" ? null : <div ref={refs.setFloating} style={{
    position: strategy,
    left: _x ?? 0,
    top: y ?? 0,
    zIndex: 1e3
  }} className="pointer-events-none font-sans" data-testid="popcorn-chart-hover-tooltip">
        <div className={clsx("bg-token-main-surface-primary text-token-text-primary relative rounded-lg border px-2 py-1.5", "shadow-[0_5px_8px_3px_rgba(0,0,0,0.025),_0_0.5px_1px_0px_rgba(0,0,0,0.045)]")} style={{
      borderColor: "rgba(13, 13, 13, 0.08)"
    }}>
          <div className="flex w-full flex-col px-1 py-0.5 text-xs leading-tight">
            <div className="me-6 w-full min-w-[88px]">
              {popcornElectronWorkbookPanelValue349.category ?? popcornElectronWorkbookPanelValue349.seriesName ?? ""}
            </div>
          </div>
          <div className="mt-0.5 flex flex-col border-t border-solid pt-2" style={{
        borderTopColor: "rgba(13, 13, 13, 0.08)"
      }}>
            <div className="flex flex-row items-stretch px-1 py-0 text-xs leading-tight">
              <div className="flex items-center">
                <div className="me-1.5 h-2 w-2 rounded-[2px]" style={{
              backgroundColor: popcornElectronWorkbookPanelValue349.color ?? "transparent"
            }} />
                <div className="me-6 min-w-[88px]">
                  {popcornElectronWorkbookPanelValue349.seriesName ?? ""}
                </div>
              </div>
              <div className="grow text-end">
                {popcornElectronWorkbookPanelValue349.value}
              </div>
            </div>
          </div>
        </div>
      </div>;
}
function popcornElectronWorkbookPanelHelper86({
  open,
  values,
  selectedValue,
  targetBounds,
  onSelect,
  onClose
}) {
  let popcornElectronWorkbookPanelValue526 = React.useRef(null);
  return React.useEffect(() => {
    if (!open) return;
    let popcornElectronWorkbookPanelValue962 = event => {
        let popcornElectronWorkbookPanelValue1342 = event.target;
        popcornElectronWorkbookPanelValue1342 instanceof Node && (popcornElectronWorkbookPanelValue526.current?.contains(popcornElectronWorkbookPanelValue1342) || onClose());
      },
      popcornElectronWorkbookPanelValue963 = event => {
        event.key === "Escape" && onClose();
      };
    return window.addEventListener("pointerdown", popcornElectronWorkbookPanelValue962, true), window.addEventListener("keydown", popcornElectronWorkbookPanelValue963), () => {
      window.removeEventListener("pointerdown", popcornElectronWorkbookPanelValue962, true);
      window.removeEventListener("keydown", popcornElectronWorkbookPanelValue963);
    };
  }, [onClose, open]), !open || !targetBounds || values.length === 0 ? null : <div ref={popcornElectronWorkbookPanelValue526} data-testid="popcorn-data-validation-overlay" className="border-token-border-light bg-token-bg-primary pointer-events-auto absolute z-30 w-48 overflow-hidden rounded-xl border shadow-lg" style={{
    left: targetBounds.x,
    top: targetBounds.y + targetBounds.height + 4
  }} onMouseDown={event => {
    event.stopPropagation();
  }}>
        <div className="max-h-56 overflow-auto py-1">
          {values.map(item => <button key={item} type="button" className={clsx("text-token-text-primary hover:bg-token-bg-secondary flex w-full items-center px-3 py-1.5 text-left text-sm", item === selectedValue && "bg-token-bg-secondary font-medium")} onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        onSelect(item);
      }}>
              <span className="block truncate">{item}</span>
            </button>)}
        </div>
      </div>;
}
function popcornElectronWorkbookPanelHelper87(popcornElectronWorkbookPanelParam533, popcornElectronWorkbookPanelParam534) {
  return Math.max(0, Math.min(popcornElectronWorkbookPanelParam534, popcornElectronWorkbookPanelParam533));
}
function or({
  hostRef,
  camera,
  freezePanes,
  columnWidths,
  rowHeights,
  onCommit
}) {
  let [popcornElectronWorkbookPanelValue321, popcornElectronWorkbookPanelValue322] = React.useState(null),
    [popcornElectronWorkbookPanelValue323, popcornElectronWorkbookPanelValue324] = React.useState(null),
    [popcornElectronWorkbookPanelValue325, popcornElectronWorkbookPanelValue326] = React.useState(null),
    popcornElectronWorkbookPanelValue327 = React.useMemo(() => popcornElectronWorkbookPanelHelper8(columnWidths), [columnWidths]),
    popcornElectronWorkbookPanelValue328 = React.useMemo(() => popcornElectronWorkbookPanelHelper8(rowHeights), [rowHeights]),
    popcornElectronWorkbookPanelValue329 = popcornElectronWorkbookPanelValue321 ?? freezePanes,
    popcornElectronWorkbookPanelValue330 = React.useMemo(() => popcornElectronWorkbookPanelHelper9({
      freezePanes: popcornElectronWorkbookPanelValue329,
      columnWidths,
      rowHeights
    }), [columnWidths, popcornElectronWorkbookPanelValue329, rowHeights]),
    popcornElectronWorkbookPanelValue331 = Math.max(camera.k, 1e-4),
    popcornElectronWorkbookPanelValue332 = popcornElectronWorkbookPanelValue330.freezeLineX * popcornElectronWorkbookPanelValue331,
    popcornElectronWorkbookPanelValue333 = popcornElectronWorkbookPanelValue330.freezeLineY * popcornElectronWorkbookPanelValue331,
    popcornElectronWorkbookPanelValue334 = 40 * popcornElectronWorkbookPanelValue331,
    popcornElectronWorkbookPanelValue335 = 20 * popcornElectronWorkbookPanelValue331,
    popcornElectronWorkbookPanelValue336 = popcornElectronWorkbookPanelValue325 === "column" || popcornElectronWorkbookPanelValue323?.axis === "column" ? "rgba(96, 165, 250, 0.95)" : "rgba(15, 23, 42, 0.32)",
    popcornElectronWorkbookPanelValue337 = popcornElectronWorkbookPanelValue325 === "row" || popcornElectronWorkbookPanelValue323?.axis === "row" ? "rgba(96, 165, 250, 0.95)" : "rgba(15, 23, 42, 0.32)",
    popcornElectronWorkbookPanelValue338 = React.useCallback((event, popcornElectronWorkbookPanelParam76) => {
      let popcornElectronWorkbookPanelValue722 = hostRef.current;
      if (!popcornElectronWorkbookPanelValue722) return popcornElectronWorkbookPanelParam76.baseFreezePanes;
      let popcornElectronWorkbookPanelValue723 = popcornElectronWorkbookPanelValue722.getBoundingClientRect(),
        popcornElectronWorkbookPanelValue724 = event.clientX - popcornElectronWorkbookPanelValue723.left,
        popcornElectronWorkbookPanelValue725 = event.clientY - popcornElectronWorkbookPanelValue723.top;
      if (popcornElectronWorkbookPanelParam76.axis === "column" && popcornElectronWorkbookPanelValue724 <= 40 * popcornElectronWorkbookPanelValue331) return {
        ...popcornElectronWorkbookPanelParam76.baseFreezePanes,
        columnCount: 0
      };
      if (popcornElectronWorkbookPanelParam76.axis === "row" && popcornElectronWorkbookPanelValue725 <= 20 * popcornElectronWorkbookPanelValue331) return {
        ...popcornElectronWorkbookPanelParam76.baseFreezePanes,
        rowCount: 0
      };
      let popcornElectronWorkbookPanelValue726 = popcornElectronWorkbookPanelHelper12({
        camera,
        screenX: popcornElectronWorkbookPanelValue724,
        screenY: popcornElectronWorkbookPanelValue725,
        freezePanes: popcornElectronWorkbookPanelParam76.baseFreezePanes,
        columnWidths,
        rowHeights
      });
      return popcornElectronWorkbookPanelParam76.axis === "column" ? {
        ...popcornElectronWorkbookPanelParam76.baseFreezePanes,
        columnCount: popcornElectronWorkbookPanelHelper87(_t(popcornElectronWorkbookPanelValue327, Math.max(0, popcornElectronWorkbookPanelValue726.x - 40)), columnWidths.length)
      } : {
        ...popcornElectronWorkbookPanelParam76.baseFreezePanes,
        rowCount: popcornElectronWorkbookPanelHelper87(_t(popcornElectronWorkbookPanelValue328, Math.max(0, popcornElectronWorkbookPanelValue726.y - 20)), rowHeights.length)
      };
    }, [camera, popcornElectronWorkbookPanelValue327, columnWidths.length, hostRef, rowHeights, popcornElectronWorkbookPanelValue328, popcornElectronWorkbookPanelValue331]);
  React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue323) return;
    let popcornElectronWorkbookPanelValue958 = popcornElectronWorkbookPanelParam586 => {
        popcornElectronWorkbookPanelValue322(popcornElectronWorkbookPanelValue338(popcornElectronWorkbookPanelParam586, popcornElectronWorkbookPanelValue323));
      },
      popcornElectronWorkbookPanelValue959 = popcornElectronWorkbookPanelParam286 => {
        let popcornElectronWorkbookPanelValue1274 = popcornElectronWorkbookPanelValue338(popcornElectronWorkbookPanelParam286, popcornElectronWorkbookPanelValue323);
        popcornElectronWorkbookPanelValue322(null);
        popcornElectronWorkbookPanelValue324(null);
        (popcornElectronWorkbookPanelValue1274.rowCount !== freezePanes.rowCount || popcornElectronWorkbookPanelValue1274.columnCount !== freezePanes.columnCount) && onCommit(popcornElectronWorkbookPanelValue1274);
      };
    return window.addEventListener("mousemove", popcornElectronWorkbookPanelValue958), window.addEventListener("mouseup", popcornElectronWorkbookPanelValue959), () => {
      window.removeEventListener("mousemove", popcornElectronWorkbookPanelValue958);
      window.removeEventListener("mouseup", popcornElectronWorkbookPanelValue959);
    };
  }, [popcornElectronWorkbookPanelValue323, freezePanes, onCommit, popcornElectronWorkbookPanelValue338]);
  let popcornElectronWorkbookPanelValue339 = React.useCallback(popcornElectronWorkbookPanelParam321 => event => {
    event.preventDefault();
    event.stopPropagation();
    let popcornElectronWorkbookPanelValue1306 = {
      ...freezePanes
    };
    popcornElectronWorkbookPanelValue324({
      axis: popcornElectronWorkbookPanelParam321,
      baseFreezePanes: popcornElectronWorkbookPanelValue1306
    });
    popcornElectronWorkbookPanelValue322(popcornElectronWorkbookPanelValue1306);
  }, [freezePanes]);
  return <div className="pointer-events-none absolute inset-0 z-30">
      {(popcornElectronWorkbookPanelValue329.columnCount > 0 || popcornElectronWorkbookPanelValue323?.axis === "column") && <>
          <div aria-hidden="true" data-testid="popcorn-freeze-column-line" className="absolute top-0 bottom-0" style={{
        left: popcornElectronWorkbookPanelValue332 - 0.5,
        width: 1,
        backgroundColor: popcornElectronWorkbookPanelValue336
      }} />
          <div data-testid="popcorn-freeze-column-handle" className="pointer-events-auto absolute top-0 bottom-0" style={{
        left: popcornElectronWorkbookPanelValue332 - 9,
        width: 18,
        cursor: popcornElectronWorkbookPanelValue323?.axis === "column" ? "grabbing" : "grab"
      }} onMouseEnter={() => {
        popcornElectronWorkbookPanelValue326("column");
      }} onMouseLeave={() => {
        popcornElectronWorkbookPanelValue326(popcornElectronWorkbookPanelParam592 => popcornElectronWorkbookPanelParam592 === "column" ? null : popcornElectronWorkbookPanelParam592);
      }} onMouseDown={popcornElectronWorkbookPanelValue339("column")} />
        </>}
      {(popcornElectronWorkbookPanelValue329.rowCount > 0 || popcornElectronWorkbookPanelValue323?.axis === "row") && <>
          <div aria-hidden="true" data-testid="popcorn-freeze-row-line" className="absolute start-0 end-0" style={{
        top: popcornElectronWorkbookPanelValue333 - 0.5,
        height: 1,
        backgroundColor: popcornElectronWorkbookPanelValue337
      }} />
          <div data-testid="popcorn-freeze-row-handle" className="pointer-events-auto absolute start-0 end-0" style={{
        top: popcornElectronWorkbookPanelValue333 - 9,
        height: 18,
        cursor: popcornElectronWorkbookPanelValue323?.axis === "row" ? "grabbing" : "grab"
      }} onMouseEnter={() => {
        popcornElectronWorkbookPanelValue326("row");
      }} onMouseLeave={() => {
        popcornElectronWorkbookPanelValue326(popcornElectronWorkbookPanelParam597 => popcornElectronWorkbookPanelParam597 === "row" ? null : popcornElectronWorkbookPanelParam597);
      }} onMouseDown={popcornElectronWorkbookPanelValue339("row")} />
        </>}
      {popcornElectronWorkbookPanelValue329.columnCount === 0 && popcornElectronWorkbookPanelValue323?.axis !== "column" ? <div data-testid="popcorn-freeze-column-parked-handle" className="pointer-events-auto absolute" style={{
      left: popcornElectronWorkbookPanelValue334 - 9,
      top: 0,
      width: 18,
      height: 20 * popcornElectronWorkbookPanelValue331,
      cursor: "grab"
    }} onMouseEnter={() => {
      popcornElectronWorkbookPanelValue326("column");
    }} onMouseLeave={() => {
      popcornElectronWorkbookPanelValue326(popcornElectronWorkbookPanelParam593 => popcornElectronWorkbookPanelParam593 === "column" ? null : popcornElectronWorkbookPanelParam593);
    }} onMouseDown={popcornElectronWorkbookPanelValue339("column")}>
          <div className="absolute" style={{
        left: 8.5,
        top: 0,
        width: 1,
        height: 20 * popcornElectronWorkbookPanelValue331,
        backgroundColor: popcornElectronWorkbookPanelValue336
      }} />
        </div> : null}
      {popcornElectronWorkbookPanelValue329.rowCount === 0 && popcornElectronWorkbookPanelValue323?.axis !== "row" ? <div data-testid="popcorn-freeze-row-parked-handle" className="pointer-events-auto absolute" style={{
      left: 0,
      top: popcornElectronWorkbookPanelValue335 - 9,
      width: 40 * popcornElectronWorkbookPanelValue331,
      height: 18,
      cursor: "grab"
    }} onMouseEnter={() => {
      popcornElectronWorkbookPanelValue326("row");
    }} onMouseLeave={() => {
      popcornElectronWorkbookPanelValue326(popcornElectronWorkbookPanelParam598 => popcornElectronWorkbookPanelParam598 === "row" ? null : popcornElectronWorkbookPanelParam598);
    }} onMouseDown={popcornElectronWorkbookPanelValue339("row")}>
          <div className="absolute" style={{
        left: 0,
        top: 8.5,
        width: 40 * popcornElectronWorkbookPanelValue331,
        height: 1,
        backgroundColor: popcornElectronWorkbookPanelValue337
      }} />
        </div> : null}
    </div>;
}
var popcornElectronWorkbookPanelValue17 = toEsModule(ReactDOM());
function popcornElectronWorkbookPanelHelper88({
  className
}) {
  return <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4.4707 5.8623C4.73038 5.60262 5.15142 5.60262 5.4111 5.8623L8 8.45117L10.5889 5.8623L10.6992 5.77246C10.9709 5.59336 11.34 5.62322 11.5791 5.8623C11.8182 6.10138 11.848 6.47052 11.6689 6.74219L11.5791 6.85254L8.49512 9.93652C8.22175 10.2099 7.77825 10.2099 7.50488 9.93652L4.4209 6.85254C4.16122 6.59286 4.16122 6.17198 4.4209 5.91211L4.4707 5.8623Z" />
    </svg>;
}
function popcornElectronWorkbookPanelHelper89({
  className
}) {
  return <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M7.50488 6.06348C7.76455 5.804 8.18545 5.804 8.44531 6.06348L11.5293 9.14746L11.6191 9.25781C11.7982 9.52948 11.7684 9.89862 11.5293 10.1377C11.2902 10.3768 10.921 10.4066 10.6494 10.2275L10.5391 10.1377L8 7.59863L5.46094 10.1377C5.18757 10.411 4.74407 10.411 4.4707 10.1377C4.19733 9.86429 4.19733 9.42079 4.4707 9.14746L7.50488 6.06348Z" />
    </svg>;
}
function popcornElectronWorkbookPanelHelper90({
  btn,
  isOpen,
  onOpen,
  onClose,
  zoom,
  values,
  selectedValues,
  onToggleValue,
  onSelectAll,
  onSort,
  filterSortTitle,
  filterHeaderLabel: popcornElectronWorkbookPanelParam4,
  noDiscreteValuesLabel,
  selectAllLabel,
  sortAZLabel,
  sortZALabel
}) {
  let popcornElectronWorkbookPanelValue263 = Math.min(btn.width, 22),
    popcornElectronWorkbookPanelValue264 = Math.min(btn.height, 20),
    popcornElectronWorkbookPanelValue265 = btn.left + Math.max(0, btn.width - popcornElectronWorkbookPanelValue263 - 4),
    popcornElectronWorkbookPanelValue266 = btn.top + Math.max(0, (btn.height - popcornElectronWorkbookPanelValue264) / 2),
    {
      refs,
      floatingStyles,
      update
    } = popcornElectronWorkbookPanelImport6({
      placement: "bottom-end",
      middleware: [popcornElectronWorkbookPanelImport5(6), popcornElectronWorkbookPanelImport8(), popcornElectronWorkbookPanelImport9({
        padding: 8
      })],
      whileElementsMounted: popcornElectronWorkbookPanelImport7
    }),
    popcornElectronWorkbookPanelValue267 = React.useCallback(popcornElectronWorkbookPanelParam571 => {
      refs.setReference(popcornElectronWorkbookPanelParam571);
    }, [refs]),
    popcornElectronWorkbookPanelValue268 = React.useCallback(popcornElectronWorkbookPanelParam573 => {
      refs.setFloating(popcornElectronWorkbookPanelParam573);
    }, [refs]);
  return React.useEffect(() => {
    isOpen && update?.();
  }, [btn.height, btn.left, btn.top, btn.width, isOpen, update, zoom]), React.useEffect(() => {
    if (!isOpen) return;
    let popcornElectronWorkbookPanelValue856 = event => {
        let popcornElectronWorkbookPanelValue1213 = event.target;
        if (!(popcornElectronWorkbookPanelValue1213 instanceof Node)) return;
        let popcornElectronWorkbookPanelValue1214 = refs.reference.current,
          popcornElectronWorkbookPanelValue1215 = refs.floating.current;
        popcornElectronWorkbookPanelValue1214 && popcornElectronWorkbookPanelValue1214.contains(popcornElectronWorkbookPanelValue1213) || popcornElectronWorkbookPanelValue1215 && popcornElectronWorkbookPanelValue1215.contains(popcornElectronWorkbookPanelValue1213) || onClose();
      },
      popcornElectronWorkbookPanelValue857 = event => {
        event.key === "Escape" && onClose();
      };
    return window.addEventListener("pointerdown", popcornElectronWorkbookPanelValue856, {
      capture: true
    }), window.addEventListener("keydown", popcornElectronWorkbookPanelValue857), () => {
      window.removeEventListener("pointerdown", popcornElectronWorkbookPanelValue856, true);
      window.removeEventListener("keydown", popcornElectronWorkbookPanelValue857);
    };
  }, [isOpen, onClose, refs.floating, refs.reference]), <div className="pointer-events-auto absolute" style={{
    left: popcornElectronWorkbookPanelValue265,
    top: popcornElectronWorkbookPanelValue266,
    width: popcornElectronWorkbookPanelValue263,
    height: popcornElectronWorkbookPanelValue264
  }}>
        <div className="flex h-full items-center justify-end">
          <button ref={popcornElectronWorkbookPanelValue267} type="button" data-testid={`popcorn-filter-button-${btn.tableId}-${btn.colIdx}`} data-popcorn-filter-button="true" className={clsx("hover:bg-token-bg-secondary inline-flex items-center gap-0.5 rounded-[2px] border text-[10px] leading-none", "border-token-border-heavy bg-white")} title={filterSortTitle} onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        isOpen ? onClose() : onOpen();
      }}>
            {btn.isFiltered ? <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
              </svg> : null}
            {btn.isSorted ? btn.sortDir === "asc" ? React.createElement(popcornElectronWorkbookPanelHelper89, {
          className: "size-3"
        }) : React.createElement(popcornElectronWorkbookPanelHelper88, {
          className: "size-3"
        }) : null}
            {!btn.isFiltered && !btn.isSorted ? <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg> : null}
          </button>
        </div>
        {isOpen ? popcornElectronWorkbookPanelValue17.createPortal(<div ref={popcornElectronWorkbookPanelValue268} data-testid={`popcorn-filter-menu-${btn.tableId}-${btn.colIdx}`} data-popcorn-filter-menu="true" className="mt-1 w-56 rounded-md border bg-white text-xs shadow-lg" style={{
      ...floatingStyles,
      zIndex: 1e3,
      pointerEvents: "auto"
    }} onMouseDown={event => {
      event.stopPropagation();
    }} onMouseUp={event => {
      event.stopPropagation();
    }} onClick={event => {
      event.stopPropagation();
    }}>
                <div className="flex items-center justify-between border-b p-2 font-medium">
                  <span>{popcornElectronWorkbookPanelParam4}</span>
                  <button type="button" className="text-token-text-secondary hover:text-token-text-primary text-[11px]" onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          onSelectAll();
        }}>
                    {selectAllLabel}
                  </button>
                </div>
                <div className="max-h-48 space-y-1 overflow-auto p-2">
                  {values.map(item => <label key={item} className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedValues ? selectedValues.has(item) : true} onChange={() => onToggleValue(item)} />
                      <span className="truncate" title={item}>
                        {item}
                      </span>
                    </label>)}
                  {values.length === 0 ? <div className="text-token-text-secondary">
                      {noDiscreteValuesLabel}
                    </div> : null}
                </div>
                <div className="flex items-center gap-2 border-t p-2">
                  <div className="ms-auto flex items-center gap-2">
                    <button type="button" className="flex-1 rounded border px-2 py-1" onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            onSort("asc");
            onClose();
          }}>
                      {sortAZLabel}
                    </button>
                    <button type="button" className="flex-1 rounded border px-2 py-1" onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            onSort("desc");
            onClose();
          }}>
                      {sortZALabel}
                    </button>
                  </div>
                </div>
              </div>, document.body) : null}
      </div>;
}
function popcornElectronWorkbookPanelHelper91(popcornElectronWorkbookPanelParam317) {
  let popcornElectronWorkbookPanelValue1295 = popcornElectronWorkbookPanelParam317.split(":"),
    popcornElectronWorkbookPanelValue1296 = popcornElectronWorkbookPanelValue1295[0] ?? "A1",
    popcornElectronWorkbookPanelValue1297 = popcornElectronWorkbookPanelValue1295[1] ?? popcornElectronWorkbookPanelValue1295[0] ?? "A1";
  return {
    c1: addressUtilsD(popcornElectronWorkbookPanelValue1296),
    r1: addressUtilsV(popcornElectronWorkbookPanelValue1296),
    c2: addressUtilsD(popcornElectronWorkbookPanelValue1297),
    r2: addressUtilsV(popcornElectronWorkbookPanelValue1297)
  };
}
function popcornElectronWorkbookPanelHelper92(popcornElectronWorkbookPanelParam44, popcornElectronWorkbookPanelParam45, popcornElectronWorkbookPanelParam46, popcornElectronWorkbookPanelParam47, popcornElectronWorkbookPanelParam48, popcornElectronWorkbookPanelParam49, popcornElectronWorkbookPanelParam50, popcornElectronWorkbookPanelParam51, popcornElectronWorkbookPanelParam52) {
  return React.useMemo(() => {
    let popcornElectronWorkbookPanelValue664 = [];
    for (let popcornElectronWorkbookPanelValue667 of popcornElectronWorkbookPanelParam44.tables ?? []) {
      if (!popcornElectronWorkbookPanelValue667.ref || !popcornElectronWorkbookPanelValue667.autoFilter && !popcornElectronWorkbookPanelValue667.hasAutoFilter) continue;
      let {
          c1,
          r1,
          c2,
          r2
        } = popcornElectronWorkbookPanelHelper91(popcornElectronWorkbookPanelValue667.ref),
        popcornElectronWorkbookPanelValue668 = Math.min(c1, c2),
        popcornElectronWorkbookPanelValue669 = Math.max(c1, c2),
        popcornElectronWorkbookPanelValue670 = Math.min(r1, r2);
      if (Math.max(0, Math.min(1, popcornElectronWorkbookPanelValue667.headerRowCount ?? 1)) === 0) continue;
      let popcornElectronWorkbookPanelValue671 = popcornElectronWorkbookPanelValue670,
        popcornElectronWorkbookPanelValue672 = 20 + (popcornElectronWorkbookPanelParam48[popcornElectronWorkbookPanelValue671] ?? 0);
      for (let popcornElectronWorkbookPanelValue774 = popcornElectronWorkbookPanelValue668; popcornElectronWorkbookPanelValue774 <= popcornElectronWorkbookPanelValue669; popcornElectronWorkbookPanelValue774 += 1) {
        let popcornElectronWorkbookPanelValue783 = popcornElectronWorkbookPanelHelper16({
          camera: popcornElectronWorkbookPanelParam51,
          worldX: 40 + (popcornElectronWorkbookPanelParam47[popcornElectronWorkbookPanelValue774] ?? 0),
          worldY: popcornElectronWorkbookPanelValue672,
          width: popcornElectronWorkbookPanelParam45[popcornElectronWorkbookPanelValue774] ?? 0,
          height: popcornElectronWorkbookPanelParam46[popcornElectronWorkbookPanelValue671] ?? 0,
          freezePanes: popcornElectronWorkbookPanelParam52,
          columnWidths: popcornElectronWorkbookPanelParam45,
          rowHeights: popcornElectronWorkbookPanelParam46
        })[0];
        if (!popcornElectronWorkbookPanelValue783 || popcornElectronWorkbookPanelValue783.width <= 0 || popcornElectronWorkbookPanelValue783.height <= 0) continue;
        let popcornElectronWorkbookPanelValue784 = `${popcornElectronWorkbookPanelParam44.name}:${popcornElectronWorkbookPanelValue667.id ?? 0}:${popcornElectronWorkbookPanelValue774}`,
          popcornElectronWorkbookPanelValue785 = !!popcornElectronWorkbookPanelParam49[popcornElectronWorkbookPanelValue784]?.length,
          popcornElectronWorkbookPanelValue786 = popcornElectronWorkbookPanelParam50[`${popcornElectronWorkbookPanelParam44.name}:${popcornElectronWorkbookPanelValue667.id ?? 0}`],
          popcornElectronWorkbookPanelValue787 = !!(popcornElectronWorkbookPanelValue786 && popcornElectronWorkbookPanelValue786.colIdx === popcornElectronWorkbookPanelValue774);
        popcornElectronWorkbookPanelValue664.push({
          key: popcornElectronWorkbookPanelValue784,
          left: popcornElectronWorkbookPanelValue783.x,
          top: popcornElectronWorkbookPanelValue783.y,
          width: popcornElectronWorkbookPanelValue783.width,
          height: popcornElectronWorkbookPanelValue783.height,
          tableId: popcornElectronWorkbookPanelValue667.id ?? 0,
          colIdx: popcornElectronWorkbookPanelValue774,
          isFiltered: popcornElectronWorkbookPanelValue785,
          isSorted: popcornElectronWorkbookPanelValue787,
          sortDir: popcornElectronWorkbookPanelValue787 ? popcornElectronWorkbookPanelValue786?.dir : undefined
        });
      }
    }
    return popcornElectronWorkbookPanelValue664;
  }, [popcornElectronWorkbookPanelParam49, popcornElectronWorkbookPanelParam50, popcornElectronWorkbookPanelParam47, popcornElectronWorkbookPanelParam46, popcornElectronWorkbookPanelParam48, popcornElectronWorkbookPanelParam44, popcornElectronWorkbookPanelParam45, popcornElectronWorkbookPanelParam51, popcornElectronWorkbookPanelParam52]);
}
var popcornElectronWorkbookPanelValue21 = {
  filterSortTitle: "Filter & sort",
  filterHeaderLabel: "Filter",
  noDiscreteValuesLabel: "No discrete values",
  selectAllLabel: "Select all",
  sortAZLabel: "Sort A→Z",
  sortZALabel: "Sort Z→A"
};
function _r(popcornElectronWorkbookPanelParam355) {
  let popcornElectronWorkbookPanelValue1330 = [0];
  for (let popcornElectronWorkbookPanelValue1373 = 0; popcornElectronWorkbookPanelValue1373 < popcornElectronWorkbookPanelParam355.length; popcornElectronWorkbookPanelValue1373 += 1) popcornElectronWorkbookPanelValue1330[popcornElectronWorkbookPanelValue1373 + 1] = (popcornElectronWorkbookPanelValue1330[popcornElectronWorkbookPanelValue1373] ?? 0) + (popcornElectronWorkbookPanelParam355[popcornElectronWorkbookPanelValue1373] ?? 0);
  return popcornElectronWorkbookPanelValue1330;
}
function popcornElectronWorkbookPanelHelper93({
  sheetName,
  tables,
  filterOptionsByColumn,
  viewColWidths,
  rowHeights,
  zoom,
  camera,
  freezePanes,
  activeFilters,
  activeSortByTable,
  onSetFilterValues,
  onSetSort
}) {
  let [popcornElectronWorkbookPanelValue462, popcornElectronWorkbookPanelValue463] = React.useState(null),
    popcornElectronWorkbookPanelValue464 = React.useMemo(() => _r(viewColWidths), [viewColWidths]),
    popcornElectronWorkbookPanelValue465 = React.useMemo(() => _r(rowHeights), [rowHeights]),
    popcornElectronWorkbookPanelValue466 = popcornElectronWorkbookPanelHelper92({
      name: sheetName,
      tables
    }, viewColWidths, rowHeights, popcornElectronWorkbookPanelValue464, popcornElectronWorkbookPanelValue465, activeFilters, activeSortByTable, camera, freezePanes),
    popcornElectronWorkbookPanelValue467 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue463(null);
    }, []);
  return popcornElectronWorkbookPanelValue466.length === 0 ? null : <>
      {popcornElectronWorkbookPanelValue466.map(item => {
      let popcornElectronWorkbookPanelValue589 = popcornElectronWorkbookPanelValue462?.tableId === item.tableId && popcornElectronWorkbookPanelValue462?.colIdx === item.colIdx,
        popcornElectronWorkbookPanelValue590 = filterOptionsByColumn[`${sheetName}:${item.tableId}:${item.colIdx}`] ?? [];
      return React.createElement(popcornElectronWorkbookPanelHelper90, {
        btn: item,
        isOpen: popcornElectronWorkbookPanelValue589,
        onOpen: () => {
          popcornElectronWorkbookPanelValue463({
            tableId: item.tableId,
            colIdx: item.colIdx
          });
        },
        onClose: popcornElectronWorkbookPanelValue467,
        zoom,
        values: popcornElectronWorkbookPanelValue590,
        selectedValues: activeFilters[`${sheetName}:${item.tableId}:${item.colIdx}`] ? new Set(activeFilters[`${sheetName}:${item.tableId}:${item.colIdx}`]) : undefined,
        onToggleValue: popcornElectronWorkbookPanelParam176 => {
          let popcornElectronWorkbookPanelValue1089 = `${sheetName}:${item.tableId}:${item.colIdx}`,
            popcornElectronWorkbookPanelValue1090 = new Set(activeFilters[popcornElectronWorkbookPanelValue1089] ?? popcornElectronWorkbookPanelValue590);
          if (popcornElectronWorkbookPanelValue1090.has(popcornElectronWorkbookPanelParam176) ? popcornElectronWorkbookPanelValue1090.delete(popcornElectronWorkbookPanelParam176) : popcornElectronWorkbookPanelValue1090.add(popcornElectronWorkbookPanelParam176), popcornElectronWorkbookPanelValue1090.size === popcornElectronWorkbookPanelValue590.length) {
            onSetFilterValues(item.tableId, item.colIdx, null);
            return;
          }
          onSetFilterValues(item.tableId, item.colIdx, [...popcornElectronWorkbookPanelValue1090]);
        },
        onSelectAll: () => {
          onSetFilterValues(item.tableId, item.colIdx, null);
        },
        onSort: popcornElectronWorkbookPanelParam449 => {
          onSetSort(item.tableId, {
            colIdx: item.colIdx,
            dir: popcornElectronWorkbookPanelParam449
          });
        },
        filterSortTitle: popcornElectronWorkbookPanelValue21.filterSortTitle,
        filterHeaderLabel: popcornElectronWorkbookPanelValue21.filterHeaderLabel,
        noDiscreteValuesLabel: popcornElectronWorkbookPanelValue21.noDiscreteValuesLabel,
        selectAllLabel: popcornElectronWorkbookPanelValue21.selectAllLabel,
        sortAZLabel: popcornElectronWorkbookPanelValue21.sortAZLabel,
        sortZALabel: popcornElectronWorkbookPanelValue21.sortZALabel
      });
    })}
    </>;
}
function popcornElectronWorkbookPanelHelper94(popcornElectronWorkbookPanelParam412, popcornElectronWorkbookPanelParam413) {
  let popcornElectronWorkbookPanelValue1358 = 0;
  for (let popcornElectronWorkbookPanelValue1392 = 0; popcornElectronWorkbookPanelValue1392 < popcornElectronWorkbookPanelParam413; popcornElectronWorkbookPanelValue1392 += 1) popcornElectronWorkbookPanelValue1358 += popcornElectronWorkbookPanelParam412[popcornElectronWorkbookPanelValue1392] ?? 0;
  return popcornElectronWorkbookPanelValue1358;
}
function popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelParam520, popcornElectronWorkbookPanelParam521, popcornElectronWorkbookPanelParam522) {
  return Math.min(popcornElectronWorkbookPanelParam522, Math.max(popcornElectronWorkbookPanelParam521, popcornElectronWorkbookPanelParam520));
}
function popcornElectronWorkbookPanelHelper96(popcornElectronWorkbookPanelParam577) {
  return popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelParam577, 0, 1);
}
function popcornElectronWorkbookPanelHelper97(popcornElectronWorkbookPanelParam57) {
  let popcornElectronWorkbookPanelValue635 = popcornElectronWorkbookPanelParam57.axis === "horizontal",
    popcornElectronWorkbookPanelValue636 = Math.max(popcornElectronWorkbookPanelParam57.zoom, 2.220446049250313e-16),
    popcornElectronWorkbookPanelValue637 = popcornElectronWorkbookPanelValue635 ? popcornElectronWorkbookPanelParam57.columnWidths : popcornElectronWorkbookPanelParam57.rowHeights,
    popcornElectronWorkbookPanelValue638 = popcornElectronWorkbookPanelValue637.reduce((accumulator, current) => accumulator + current, 0),
    popcornElectronWorkbookPanelValue639 = popcornElectronWorkbookPanelValue635 ? 0 : Math.max(0, popcornElectronWorkbookPanelParam57.bottomScrollReservePx ?? 0) / popcornElectronWorkbookPanelValue636,
    popcornElectronWorkbookPanelValue640 = popcornElectronWorkbookPanelHelper94(popcornElectronWorkbookPanelValue637, popcornElectronWorkbookPanelValue635 ? popcornElectronWorkbookPanelParam57.freezePanes.columnCount : popcornElectronWorkbookPanelParam57.freezePanes.rowCount),
    popcornElectronWorkbookPanelValue641 = popcornElectronWorkbookPanelValue635 ? 40 : 20,
    popcornElectronWorkbookPanelValue642 = popcornElectronWorkbookPanelValue635 ? popcornElectronWorkbookPanelParam57.viewportWidth : popcornElectronWorkbookPanelParam57.viewportHeight,
    popcornElectronWorkbookPanelValue643 = popcornElectronWorkbookPanelValue640 * popcornElectronWorkbookPanelValue636,
    popcornElectronWorkbookPanelValue644 = popcornElectronWorkbookPanelValue635 ? popcornElectronWorkbookPanelParam57.verticalVisible : popcornElectronWorkbookPanelParam57.horizontalVisible,
    popcornElectronWorkbookPanelValue645 = popcornElectronWorkbookPanelValue641 + popcornElectronWorkbookPanelValue643 + 4,
    popcornElectronWorkbookPanelValue646 = Math.max(0, popcornElectronWorkbookPanelValue642 - popcornElectronWorkbookPanelValue645 - 4 - (popcornElectronWorkbookPanelValue644 ? 10 : 0));
  if (popcornElectronWorkbookPanelValue646 <= 0) return null;
  let popcornElectronWorkbookPanelValue647 = Math.max(0, popcornElectronWorkbookPanelValue642 / popcornElectronWorkbookPanelValue636 - popcornElectronWorkbookPanelValue641),
    popcornElectronWorkbookPanelValue648 = Math.max(0, popcornElectronWorkbookPanelValue647 - popcornElectronWorkbookPanelValue640),
    popcornElectronWorkbookPanelValue649 = Math.max(0, popcornElectronWorkbookPanelValue638 + popcornElectronWorkbookPanelValue639 - popcornElectronWorkbookPanelValue640),
    popcornElectronWorkbookPanelValue650 = Math.max(0, popcornElectronWorkbookPanelValue649 - popcornElectronWorkbookPanelValue648);
  if (popcornElectronWorkbookPanelValue650 <= 0 || popcornElectronWorkbookPanelValue649 <= 0 || popcornElectronWorkbookPanelValue648 <= 0) return null;
  let popcornElectronWorkbookPanelValue651 = popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelValue635 ? popcornElectronWorkbookPanelParam57.scrollLeft : popcornElectronWorkbookPanelParam57.scrollTop, 0, popcornElectronWorkbookPanelValue650),
    popcornElectronWorkbookPanelValue652 = popcornElectronWorkbookPanelValue650 > 0 ? popcornElectronWorkbookPanelValue651 / popcornElectronWorkbookPanelValue650 : 0,
    popcornElectronWorkbookPanelValue653 = popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelValue646 * popcornElectronWorkbookPanelHelper96(popcornElectronWorkbookPanelValue648 / popcornElectronWorkbookPanelValue649), 28, popcornElectronWorkbookPanelValue646),
    popcornElectronWorkbookPanelValue654 = Math.max(0, popcornElectronWorkbookPanelValue646 - popcornElectronWorkbookPanelValue653) * popcornElectronWorkbookPanelValue652,
    popcornElectronWorkbookPanelValue655 = popcornElectronWorkbookPanelValue645 + popcornElectronWorkbookPanelValue654,
    popcornElectronWorkbookPanelValue656 = popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelValue653 + (Math.max(popcornElectronWorkbookPanelValue653, popcornElectronWorkbookPanelValue646 * 0.8) - popcornElectronWorkbookPanelValue653) * (1 - popcornElectronWorkbookPanelValue652), 28, popcornElectronWorkbookPanelValue646),
    popcornElectronWorkbookPanelValue657 = Math.max(0, popcornElectronWorkbookPanelValue646 - popcornElectronWorkbookPanelValue656),
    popcornElectronWorkbookPanelValue658 = popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelValue657 * 0.8 + popcornElectronWorkbookPanelValue654 * 0.19999999999999996, 0, popcornElectronWorkbookPanelValue657);
  return {
    axis: popcornElectronWorkbookPanelParam57.axis,
    visible: true,
    trackStart: popcornElectronWorkbookPanelValue645,
    trackLength: popcornElectronWorkbookPanelValue646,
    thickness: 6,
    maxScroll: popcornElectronWorkbookPanelValue650,
    actualThumbStart: popcornElectronWorkbookPanelValue655,
    actualThumbLength: popcornElectronWorkbookPanelValue653,
    displayThumbStart: popcornElectronWorkbookPanelValue645 + popcornElectronWorkbookPanelValue658,
    displayThumbLength: popcornElectronWorkbookPanelValue656,
    edgeInset: 4
  };
}
function popcornElectronWorkbookPanelHelper98(popcornElectronWorkbookPanelParam31) {
  let popcornElectronWorkbookPanelValue555 = _popcornElectronSurfaceStyleG(popcornElectronWorkbookPanelParam31.camera),
    popcornElectronWorkbookPanelValue556 = popcornElectronWorkbookPanelHelper97({
      axis: "horizontal",
      viewportWidth: popcornElectronWorkbookPanelParam31.viewportWidth,
      viewportHeight: popcornElectronWorkbookPanelParam31.viewportHeight,
      zoom: popcornElectronWorkbookPanelParam31.camera.k,
      scrollLeft: popcornElectronWorkbookPanelValue555.left,
      scrollTop: popcornElectronWorkbookPanelValue555.top,
      columnWidths: popcornElectronWorkbookPanelParam31.columnWidths,
      rowHeights: popcornElectronWorkbookPanelParam31.rowHeights,
      freezePanes: popcornElectronWorkbookPanelParam31.freezePanes,
      horizontalVisible: false,
      verticalVisible: false
    }),
    popcornElectronWorkbookPanelValue557 = popcornElectronWorkbookPanelHelper97({
      axis: "vertical",
      viewportWidth: popcornElectronWorkbookPanelParam31.viewportWidth,
      viewportHeight: popcornElectronWorkbookPanelParam31.viewportHeight,
      zoom: popcornElectronWorkbookPanelParam31.camera.k,
      scrollLeft: popcornElectronWorkbookPanelValue555.left,
      scrollTop: popcornElectronWorkbookPanelValue555.top,
      columnWidths: popcornElectronWorkbookPanelParam31.columnWidths,
      rowHeights: popcornElectronWorkbookPanelParam31.rowHeights,
      freezePanes: popcornElectronWorkbookPanelParam31.freezePanes,
      horizontalVisible: false,
      verticalVisible: false,
      bottomScrollReservePx: popcornElectronWorkbookPanelParam31.bottomScrollReservePx
    }),
    popcornElectronWorkbookPanelValue558 = popcornElectronWorkbookPanelValue556 != null,
    popcornElectronWorkbookPanelValue559 = popcornElectronWorkbookPanelValue557 != null;
  return {
    horizontal: popcornElectronWorkbookPanelHelper97({
      axis: "horizontal",
      viewportWidth: popcornElectronWorkbookPanelParam31.viewportWidth,
      viewportHeight: popcornElectronWorkbookPanelParam31.viewportHeight,
      zoom: popcornElectronWorkbookPanelParam31.camera.k,
      scrollLeft: popcornElectronWorkbookPanelValue555.left,
      scrollTop: popcornElectronWorkbookPanelValue555.top,
      columnWidths: popcornElectronWorkbookPanelParam31.columnWidths,
      rowHeights: popcornElectronWorkbookPanelParam31.rowHeights,
      freezePanes: popcornElectronWorkbookPanelParam31.freezePanes,
      horizontalVisible: popcornElectronWorkbookPanelValue558,
      verticalVisible: popcornElectronWorkbookPanelValue559
    }),
    vertical: popcornElectronWorkbookPanelHelper97({
      axis: "vertical",
      viewportWidth: popcornElectronWorkbookPanelParam31.viewportWidth,
      viewportHeight: popcornElectronWorkbookPanelParam31.viewportHeight,
      zoom: popcornElectronWorkbookPanelParam31.camera.k,
      scrollLeft: popcornElectronWorkbookPanelValue555.left,
      scrollTop: popcornElectronWorkbookPanelValue555.top,
      columnWidths: popcornElectronWorkbookPanelParam31.columnWidths,
      rowHeights: popcornElectronWorkbookPanelParam31.rowHeights,
      freezePanes: popcornElectronWorkbookPanelParam31.freezePanes,
      horizontalVisible: popcornElectronWorkbookPanelValue558,
      verticalVisible: popcornElectronWorkbookPanelValue559,
      bottomScrollReservePx: popcornElectronWorkbookPanelParam31.bottomScrollReservePx
    })
  };
}
function popcornElectronWorkbookPanelHelper99(popcornElectronWorkbookPanelParam150) {
  let popcornElectronWorkbookPanelValue1038 = Math.max(0, popcornElectronWorkbookPanelParam150.metrics.trackLength - popcornElectronWorkbookPanelParam150.snapshot.displayThumbLength),
    popcornElectronWorkbookPanelValue1039 = popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelParam150.snapshot.displayThumbStart - popcornElectronWorkbookPanelParam150.snapshot.trackStart + (popcornElectronWorkbookPanelParam150.metrics.actualThumbStart - popcornElectronWorkbookPanelParam150.snapshot.actualThumbStart), 0, popcornElectronWorkbookPanelValue1038);
  return {
    displayThumbStart: popcornElectronWorkbookPanelParam150.metrics.trackStart + popcornElectronWorkbookPanelValue1039,
    displayThumbLength: popcornElectronWorkbookPanelParam150.snapshot.displayThumbLength,
    edgeInset: popcornElectronWorkbookPanelParam150.snapshot.edgeInset
  };
}
function popcornElectronWorkbookPanelHelper100(popcornElectronWorkbookPanelParam263, popcornElectronWorkbookPanelParam264) {
  let popcornElectronWorkbookPanelValue1255 = popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelParam264 - popcornElectronWorkbookPanelParam263.displayThumbStart, 0, popcornElectronWorkbookPanelParam263.displayThumbLength);
  return (popcornElectronWorkbookPanelParam263.displayThumbLength > 0 ? popcornElectronWorkbookPanelValue1255 / popcornElectronWorkbookPanelParam263.displayThumbLength : 0) * popcornElectronWorkbookPanelParam263.actualThumbLength;
}
function popcornElectronWorkbookPanelHelper101(popcornElectronWorkbookPanelParam220) {
  let popcornElectronWorkbookPanelValue1187 = Math.max(0, popcornElectronWorkbookPanelParam220.metrics.trackLength - popcornElectronWorkbookPanelParam220.metrics.actualThumbLength);
  return popcornElectronWorkbookPanelValue1187 <= 0 || popcornElectronWorkbookPanelParam220.metrics.maxScroll <= 0 ? 0 : popcornElectronWorkbookPanelHelper95(popcornElectronWorkbookPanelParam220.pointerPos - popcornElectronWorkbookPanelParam220.metrics.trackStart - popcornElectronWorkbookPanelParam220.grabOffset, 0, popcornElectronWorkbookPanelValue1187) / popcornElectronWorkbookPanelValue1187 * popcornElectronWorkbookPanelParam220.metrics.maxScroll;
}
function popcornElectronWorkbookPanelHelper102(popcornElectronWorkbookPanelParam322, popcornElectronWorkbookPanelParam323, popcornElectronWorkbookPanelParam324) {
  return popcornElectronWorkbookPanelParam322 ? !popcornElectronWorkbookPanelParam323 || popcornElectronWorkbookPanelParam323.axis !== popcornElectronWorkbookPanelParam324 ? popcornElectronWorkbookPanelParam322 : {
    ...popcornElectronWorkbookPanelParam322,
    ...popcornElectronWorkbookPanelHelper99({
      metrics: popcornElectronWorkbookPanelParam322,
      snapshot: popcornElectronWorkbookPanelParam323.snapshot
    })
  } : null;
}
function popcornElectronWorkbookPanelHelper103({
  host,
  camera,
  viewportSizeStore,
  columnWidths,
  rowHeights,
  freezePanes,
  bottomScrollReservePx,
  onSetLogicalScroll
}) {
  let {
      width,
      height
    } = React.useSyncExternalStore(viewportSizeStore.subscribe, viewportSizeStore.getSnapshot, viewportSizeStore.getSnapshot),
    [popcornElectronWorkbookPanelValue310, popcornElectronWorkbookPanelValue311] = React.useState(null),
    [popcornElectronWorkbookPanelValue312, popcornElectronWorkbookPanelValue313] = React.useState(false),
    popcornElectronWorkbookPanelValue314 = React.useRef(camera),
    popcornElectronWorkbookPanelValue315 = React.useRef(null),
    popcornElectronWorkbookPanelValue316 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue313(true);
      popcornElectronWorkbookPanelValue315.current != null && window.clearTimeout(popcornElectronWorkbookPanelValue315.current);
      popcornElectronWorkbookPanelValue315.current = window.setTimeout(() => {
        popcornElectronWorkbookPanelValue313(false);
        popcornElectronWorkbookPanelValue315.current = null;
      }, 700);
    }, []),
    popcornElectronWorkbookPanelValue317 = React.useMemo(() => popcornElectronWorkbookPanelHelper98({
      camera,
      viewportWidth: width,
      viewportHeight: height,
      columnWidths,
      rowHeights,
      freezePanes,
      bottomScrollReservePx
    }), [bottomScrollReservePx, camera, columnWidths, freezePanes, rowHeights, height, width]),
    popcornElectronWorkbookPanelValue318 = React.useMemo(() => popcornElectronWorkbookPanelHelper102(popcornElectronWorkbookPanelValue317.vertical, popcornElectronWorkbookPanelValue310, "vertical"), [popcornElectronWorkbookPanelValue310, popcornElectronWorkbookPanelValue317.vertical]),
    popcornElectronWorkbookPanelValue319 = React.useMemo(() => popcornElectronWorkbookPanelHelper102(popcornElectronWorkbookPanelValue317.horizontal, popcornElectronWorkbookPanelValue310, "horizontal"), [popcornElectronWorkbookPanelValue310, popcornElectronWorkbookPanelValue317.horizontal]),
    popcornElectronWorkbookPanelValue320 = popcornElectronWorkbookPanelValue312 || popcornElectronWorkbookPanelValue310 != null;
  return React.useEffect(() => () => {
    popcornElectronWorkbookPanelValue315.current != null && window.clearTimeout(popcornElectronWorkbookPanelValue315.current);
  }, []), React.useEffect(() => {
    let popcornElectronWorkbookPanelValue1323 = popcornElectronWorkbookPanelValue314.current,
      popcornElectronWorkbookPanelValue1324 = popcornElectronWorkbookPanelValue1323.x !== camera.x || popcornElectronWorkbookPanelValue1323.y !== camera.y || popcornElectronWorkbookPanelValue1323.k !== camera.k;
    popcornElectronWorkbookPanelValue314.current = camera;
    popcornElectronWorkbookPanelValue1324 && popcornElectronWorkbookPanelValue316();
  }, [popcornElectronWorkbookPanelValue316, camera]), React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue310 || !host) return;
    let popcornElectronWorkbookPanelValue548 = event => {
        if (event.pointerId !== popcornElectronWorkbookPanelValue310.pointerId) return;
        let popcornElectronWorkbookPanelValue973 = host.getBoundingClientRect(),
          popcornElectronWorkbookPanelValue974 = popcornElectronWorkbookPanelValue310.axis === "horizontal" ? event.clientX - popcornElectronWorkbookPanelValue973.left : event.clientY - popcornElectronWorkbookPanelValue973.top,
          popcornElectronWorkbookPanelValue975 = popcornElectronWorkbookPanelValue310.axis === "horizontal" ? popcornElectronWorkbookPanelValue317.horizontal : popcornElectronWorkbookPanelValue317.vertical;
        if (!popcornElectronWorkbookPanelValue975) return;
        let popcornElectronWorkbookPanelValue976 = popcornElectronWorkbookPanelHelper101({
          metrics: popcornElectronWorkbookPanelValue975,
          pointerPos: popcornElectronWorkbookPanelValue974,
          grabOffset: popcornElectronWorkbookPanelValue310.grabOffset
        });
        popcornElectronWorkbookPanelValue310.axis === "horizontal" ? onSetLogicalScroll({
          left: popcornElectronWorkbookPanelValue976
        }) : onSetLogicalScroll({
          top: popcornElectronWorkbookPanelValue976
        });
        event.preventDefault();
      },
      popcornElectronWorkbookPanelValue549 = event => {
        if ("pointerId" in event && event.pointerId !== popcornElectronWorkbookPanelValue310.pointerId) return;
        let popcornElectronWorkbookPanelValue829 = popcornElectronWorkbookPanelValue310.axis === "horizontal" ? popcornElectronWorkbookPanelValue317.horizontal : popcornElectronWorkbookPanelValue317.vertical;
        if (popcornElectronWorkbookPanelValue829 && "clientX" in event && host) {
          let popcornElectronWorkbookPanelValue1019 = host.getBoundingClientRect(),
            popcornElectronWorkbookPanelValue1020 = popcornElectronWorkbookPanelHelper101({
              metrics: popcornElectronWorkbookPanelValue829,
              pointerPos: popcornElectronWorkbookPanelValue310.axis === "horizontal" ? event.clientX - popcornElectronWorkbookPanelValue1019.left : event.clientY - popcornElectronWorkbookPanelValue1019.top,
              grabOffset: popcornElectronWorkbookPanelValue310.grabOffset
            });
          popcornElectronWorkbookPanelValue310.axis === "horizontal" ? onSetLogicalScroll({
            left: popcornElectronWorkbookPanelValue1020,
            settled: true
          }) : onSetLogicalScroll({
            top: popcornElectronWorkbookPanelValue1020,
            settled: true
          });
        }
        popcornElectronWorkbookPanelValue311(null);
        popcornElectronWorkbookPanelValue316();
      };
    return window.addEventListener("pointermove", popcornElectronWorkbookPanelValue548, {
      passive: false
    }), window.addEventListener("pointerup", popcornElectronWorkbookPanelValue549), window.addEventListener("pointercancel", popcornElectronWorkbookPanelValue549), window.addEventListener("blur", popcornElectronWorkbookPanelValue549), () => {
      window.removeEventListener("pointermove", popcornElectronWorkbookPanelValue548);
      window.removeEventListener("pointerup", popcornElectronWorkbookPanelValue549);
      window.removeEventListener("pointercancel", popcornElectronWorkbookPanelValue549);
      window.removeEventListener("blur", popcornElectronWorkbookPanelValue549);
    };
  }, [popcornElectronWorkbookPanelValue316, popcornElectronWorkbookPanelValue310, host, onSetLogicalScroll, popcornElectronWorkbookPanelValue317.horizontal, popcornElectronWorkbookPanelValue317.vertical]), <>
        {popcornElectronWorkbookPanelValue318 ? <div data-testid="popcorn-scrollbar-vertical" className="pointer-events-auto absolute" style={{
      top: popcornElectronWorkbookPanelValue318.displayThumbStart,
      right: popcornElectronWorkbookPanelValue318.edgeInset,
      width: popcornElectronWorkbookPanelValue318.thickness,
      height: popcornElectronWorkbookPanelValue318.displayThumbLength,
      borderRadius: 9999,
      background: "rgba(0, 0, 0, 0.35)",
      opacity: popcornElectronWorkbookPanelValue320 ? 1 : 0,
      pointerEvents: popcornElectronWorkbookPanelValue320 ? "auto" : "none",
      transition: `opacity ${160}ms ease`,
      touchAction: "none"
    }} onPointerDown={event => {
      !host || !popcornElectronWorkbookPanelValue317.vertical || (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelValue316(), popcornElectronWorkbookPanelValue311({
        axis: "vertical",
        pointerId: event.pointerId,
        grabOffset: popcornElectronWorkbookPanelHelper100(popcornElectronWorkbookPanelValue317.vertical, event.clientY - host.getBoundingClientRect().top),
        snapshot: {
          trackStart: popcornElectronWorkbookPanelValue317.vertical.trackStart,
          actualThumbStart: popcornElectronWorkbookPanelValue317.vertical.actualThumbStart,
          displayThumbStart: popcornElectronWorkbookPanelValue317.vertical.displayThumbStart,
          displayThumbLength: popcornElectronWorkbookPanelValue317.vertical.displayThumbLength,
          edgeInset: popcornElectronWorkbookPanelValue317.vertical.edgeInset
        }
      }));
    }} /> : null}
        {popcornElectronWorkbookPanelValue319 ? <div data-testid="popcorn-scrollbar-horizontal" className="pointer-events-auto absolute" style={{
      left: popcornElectronWorkbookPanelValue319.displayThumbStart,
      bottom: popcornElectronWorkbookPanelValue319.edgeInset,
      width: popcornElectronWorkbookPanelValue319.displayThumbLength,
      height: popcornElectronWorkbookPanelValue319.thickness,
      borderRadius: 9999,
      background: "rgba(0, 0, 0, 0.35)",
      opacity: popcornElectronWorkbookPanelValue320 ? 1 : 0,
      pointerEvents: popcornElectronWorkbookPanelValue320 ? "auto" : "none",
      transition: `opacity ${160}ms ease`,
      touchAction: "none"
    }} onPointerDown={event => {
      !host || !popcornElectronWorkbookPanelValue317.horizontal || (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelValue316(), popcornElectronWorkbookPanelValue311({
        axis: "horizontal",
        pointerId: event.pointerId,
        grabOffset: popcornElectronWorkbookPanelHelper100(popcornElectronWorkbookPanelValue317.horizontal, event.clientX - host.getBoundingClientRect().left),
        snapshot: {
          trackStart: popcornElectronWorkbookPanelValue317.horizontal.trackStart,
          actualThumbStart: popcornElectronWorkbookPanelValue317.horizontal.actualThumbStart,
          displayThumbStart: popcornElectronWorkbookPanelValue317.horizontal.displayThumbStart,
          displayThumbLength: popcornElectronWorkbookPanelValue317.horizontal.displayThumbLength,
          edgeInset: popcornElectronWorkbookPanelValue317.horizontal.edgeInset
        }
      }));
    }} /> : null}
      </>;
}
function popcornElectronWorkbookPanelHelper104(popcornElectronWorkbookPanelParam206) {
  let popcornElectronWorkbookPanelValue1155 = Math.max(popcornElectronWorkbookPanelParam206.zoom, 2.220446049250313e-16),
    popcornElectronWorkbookPanelValue1156 = popcornElectronWorkbookPanelParam206.start + 24,
    popcornElectronWorkbookPanelValue1157 = popcornElectronWorkbookPanelParam206.end - 24;
  return popcornElectronWorkbookPanelParam206.pointer < popcornElectronWorkbookPanelValue1156 ? -Math.max(2 / popcornElectronWorkbookPanelValue1155, Math.min(24 / popcornElectronWorkbookPanelValue1155, (popcornElectronWorkbookPanelValue1156 - popcornElectronWorkbookPanelParam206.pointer) / popcornElectronWorkbookPanelValue1155)) : popcornElectronWorkbookPanelParam206.pointer > popcornElectronWorkbookPanelValue1157 ? Math.max(2 / popcornElectronWorkbookPanelValue1155, Math.min(24 / popcornElectronWorkbookPanelValue1155, (popcornElectronWorkbookPanelParam206.pointer - popcornElectronWorkbookPanelValue1157) / popcornElectronWorkbookPanelValue1155)) : 0;
}
function popcornElectronWorkbookPanelHelper105(event) {
  return {
    deltaLeft: popcornElectronWorkbookPanelHelper104({
      pointer: event.clientX,
      start: event.containerRect.left,
      end: event.containerRect.right,
      zoom: event.zoom
    }),
    deltaTop: popcornElectronWorkbookPanelHelper104({
      pointer: event.clientY,
      start: event.containerRect.top,
      end: event.containerRect.bottom,
      zoom: event.zoom
    })
  };
}
function popcornElectronWorkbookPanelHelper106(popcornElectronWorkbookPanelParam79) {
  let popcornElectronWorkbookPanelValue745 = null,
    popcornElectronWorkbookPanelValue746 = null,
    popcornElectronWorkbookPanelValue747 = true,
    popcornElectronWorkbookPanelValue748 = () => {
      if (popcornElectronWorkbookPanelValue745 = null, !popcornElectronWorkbookPanelValue747 || !popcornElectronWorkbookPanelValue746) return;
      let popcornElectronWorkbookPanelValue982 = popcornElectronWorkbookPanelParam79.containerRef.current;
      if (!popcornElectronWorkbookPanelValue982) return;
      let popcornElectronWorkbookPanelValue983 = popcornElectronWorkbookPanelHelper105({
        clientX: popcornElectronWorkbookPanelValue746.clientX,
        clientY: popcornElectronWorkbookPanelValue746.clientY,
        containerRect: popcornElectronWorkbookPanelValue982.getBoundingClientRect(),
        zoom: popcornElectronWorkbookPanelParam79.getZoom()
      });
      (popcornElectronWorkbookPanelValue983.deltaLeft !== 0 || popcornElectronWorkbookPanelValue983.deltaTop !== 0) && (popcornElectronWorkbookPanelParam79.panViewportBy(popcornElectronWorkbookPanelValue983.deltaLeft, popcornElectronWorkbookPanelValue983.deltaTop), popcornElectronWorkbookPanelParam79.onAutoScrollFrame(popcornElectronWorkbookPanelValue746.clientX, popcornElectronWorkbookPanelValue746.clientY));
      popcornElectronWorkbookPanelValue747 && (popcornElectronWorkbookPanelValue745 = window.requestAnimationFrame(popcornElectronWorkbookPanelValue748));
    },
    popcornElectronWorkbookPanelValue749 = () => {
      popcornElectronWorkbookPanelValue745 != null || !popcornElectronWorkbookPanelValue747 || (popcornElectronWorkbookPanelValue745 = window.requestAnimationFrame(popcornElectronWorkbookPanelValue748));
    };
  return {
    updatePointer(popcornElectronWorkbookPanelParam481, popcornElectronWorkbookPanelParam482) {
      popcornElectronWorkbookPanelValue746 = {
        clientX: popcornElectronWorkbookPanelParam481,
        clientY: popcornElectronWorkbookPanelParam482
      };
      popcornElectronWorkbookPanelValue749();
    },
    stop() {
      popcornElectronWorkbookPanelValue747 = false;
      popcornElectronWorkbookPanelValue746 = null;
      popcornElectronWorkbookPanelValue745 != null && (window.cancelAnimationFrame(popcornElectronWorkbookPanelValue745), popcornElectronWorkbookPanelValue745 = null);
    }
  };
}
var popcornElectronWorkbookPanelValue35 = Object.freeze({
    isDragging: false,
    rect: null,
    rangeAddress: "",
    rows: 1,
    cols: 1
  }),
  popcornElectronWorkbookPanelValue36 = {
    getSnapshot: () => popcornElectronWorkbookPanelValue35,
    subscribe: () => () => {}
  };
function popcornElectronWorkbookPanelHelper107(popcornElectronWorkbookPanelParam304, popcornElectronWorkbookPanelParam305) {
  return popcornElectronWorkbookPanelParam304 === popcornElectronWorkbookPanelParam305 ? true : popcornElectronWorkbookPanelParam304 == null || popcornElectronWorkbookPanelParam305 == null ? false : popcornElectronWorkbookPanelParam304.r1 === popcornElectronWorkbookPanelParam305.r1 && popcornElectronWorkbookPanelParam304.c1 === popcornElectronWorkbookPanelParam305.c1 && popcornElectronWorkbookPanelParam304.r2 === popcornElectronWorkbookPanelParam305.r2 && popcornElectronWorkbookPanelParam304.c2 === popcornElectronWorkbookPanelParam305.c2;
}
function popcornElectronWorkbookPanelHelper108(popcornElectronWorkbookPanelParam265, popcornElectronWorkbookPanelParam266) {
  return popcornElectronWorkbookPanelParam265.isDragging === popcornElectronWorkbookPanelParam266.isDragging && popcornElectronWorkbookPanelParam265.rangeAddress === popcornElectronWorkbookPanelParam266.rangeAddress && popcornElectronWorkbookPanelParam265.rows === popcornElectronWorkbookPanelParam266.rows && popcornElectronWorkbookPanelParam265.cols === popcornElectronWorkbookPanelParam266.cols && popcornElectronWorkbookPanelHelper107(popcornElectronWorkbookPanelParam265.rect, popcornElectronWorkbookPanelParam266.rect);
}
function popcornElectronWorkbookPanelHelper109() {
  let popcornElectronWorkbookPanelValue1149 = popcornElectronWorkbookPanelValue35,
    popcornElectronWorkbookPanelValue1150 = new Set();
  return {
    getSnapshot: () => popcornElectronWorkbookPanelValue1149,
    subscribe: popcornElectronWorkbookPanelParam484 => (popcornElectronWorkbookPanelValue1150.add(popcornElectronWorkbookPanelParam484), () => {
      popcornElectronWorkbookPanelValue1150.delete(popcornElectronWorkbookPanelParam484);
    }),
    publish: popcornElectronWorkbookPanelParam434 => {
      if (!popcornElectronWorkbookPanelHelper108(popcornElectronWorkbookPanelValue1149, popcornElectronWorkbookPanelParam434)) {
        popcornElectronWorkbookPanelValue1149 = popcornElectronWorkbookPanelParam434;
        for (let popcornElectronWorkbookPanelValue1396 of popcornElectronWorkbookPanelValue1150) popcornElectronWorkbookPanelValue1396();
      }
    }
  };
}
function popcornElectronWorkbookPanelHelper110(popcornElectronWorkbookPanelParam155, popcornElectronWorkbookPanelParam156) {
  let popcornElectronWorkbookPanelValue1055 = {
      r1: Math.min(popcornElectronWorkbookPanelParam155.r1, popcornElectronWorkbookPanelParam155.r2),
      c1: Math.min(popcornElectronWorkbookPanelParam155.c1, popcornElectronWorkbookPanelParam155.c2),
      r2: Math.max(popcornElectronWorkbookPanelParam155.r1, popcornElectronWorkbookPanelParam155.r2),
      c2: Math.max(popcornElectronWorkbookPanelParam155.c1, popcornElectronWorkbookPanelParam155.c2)
    },
    popcornElectronWorkbookPanelValue1056 = popcornElectronWorkbookPanelValue1055.r2 - popcornElectronWorkbookPanelValue1055.r1 + 1,
    popcornElectronWorkbookPanelValue1057 = popcornElectronWorkbookPanelValue1055.c2 - popcornElectronWorkbookPanelValue1055.c1 + 1,
    popcornElectronWorkbookPanelValue1058 = `${addressUtilsF(popcornElectronWorkbookPanelValue1055.c1)}${popcornElectronWorkbookPanelValue1055.r1 + 1}`,
    popcornElectronWorkbookPanelValue1059 = `${addressUtilsF(popcornElectronWorkbookPanelValue1055.c2)}${popcornElectronWorkbookPanelValue1055.r2 + 1}`;
  return {
    isDragging: popcornElectronWorkbookPanelParam156,
    rect: popcornElectronWorkbookPanelValue1055,
    rangeAddress: popcornElectronWorkbookPanelValue1058 === popcornElectronWorkbookPanelValue1059 ? popcornElectronWorkbookPanelValue1058 : `${popcornElectronWorkbookPanelValue1058}:${popcornElectronWorkbookPanelValue1059}`,
    rows: popcornElectronWorkbookPanelValue1056,
    cols: popcornElectronWorkbookPanelValue1057
  };
}
function popcornElectronWorkbookPanelHelper111(popcornElectronWorkbookPanelParam83) {
  let {
      logicalX,
      logicalY,
      viewColWidths,
      rowHeights
    } = popcornElectronWorkbookPanelParam83,
    popcornElectronWorkbookPanelValue773 = 4 / Math.max(popcornElectronWorkbookPanelParam83.zoom, 1e-4);
  if (logicalY >= 0 && logicalY <= 20 && logicalX > 40) {
    let popcornElectronWorkbookPanelValue1143 = logicalX - 40,
      popcornElectronWorkbookPanelValue1144 = 0;
    for (let popcornElectronWorkbookPanelValue1192 = 0; popcornElectronWorkbookPanelValue1192 < viewColWidths.length; popcornElectronWorkbookPanelValue1192 += 1) if (popcornElectronWorkbookPanelValue1144 += viewColWidths[popcornElectronWorkbookPanelValue1192] ?? 0, Math.abs(popcornElectronWorkbookPanelValue1144 - popcornElectronWorkbookPanelValue1143) <= popcornElectronWorkbookPanelValue773) return {
      type: "col",
      index: popcornElectronWorkbookPanelValue1192,
      cursor: "col-resize",
      boundaryPos: 40 + popcornElectronWorkbookPanelValue1144,
      tolerance: popcornElectronWorkbookPanelValue773
    };
  }
  if (logicalX >= 0 && logicalX <= 40 && logicalY > 20) {
    let popcornElectronWorkbookPanelValue1145 = logicalY - 20,
      popcornElectronWorkbookPanelValue1146 = 0;
    for (let popcornElectronWorkbookPanelValue1193 = 0; popcornElectronWorkbookPanelValue1193 < rowHeights.length; popcornElectronWorkbookPanelValue1193 += 1) if (popcornElectronWorkbookPanelValue1146 += rowHeights[popcornElectronWorkbookPanelValue1193] ?? 0, Math.abs(popcornElectronWorkbookPanelValue1146 - popcornElectronWorkbookPanelValue1145) <= popcornElectronWorkbookPanelValue773) return {
      type: "row",
      index: popcornElectronWorkbookPanelValue1193,
      cursor: "row-resize",
      boundaryPos: 20 + popcornElectronWorkbookPanelValue1146,
      tolerance: popcornElectronWorkbookPanelValue773
    };
  }
  return null;
}
function popcornElectronWorkbookPanelHelper112(event, popcornElectronWorkbookPanelParam112, popcornElectronWorkbookPanelParam113, popcornElectronWorkbookPanelParam114, popcornElectronWorkbookPanelParam115, popcornElectronWorkbookPanelParam116, popcornElectronWorkbookPanelParam117) {
  let popcornElectronWorkbookPanelValue902 = popcornElectronWorkbookPanelParam112.current;
  if (!popcornElectronWorkbookPanelValue902 || popcornElectronWorkbookPanelParam113.current) return null;
  let popcornElectronWorkbookPanelValue903 = popcornElectronWorkbookPanelValue902.getBoundingClientRect(),
    popcornElectronWorkbookPanelValue904 = popcornElectronWorkbookPanelParam114(),
    popcornElectronWorkbookPanelValue905 = popcornElectronWorkbookPanelHelper12({
      camera: popcornElectronWorkbookPanelValue904,
      screenX: event.clientX - popcornElectronWorkbookPanelValue903.left,
      screenY: event.clientY - popcornElectronWorkbookPanelValue903.top,
      freezePanes: popcornElectronWorkbookPanelParam117,
      columnWidths: popcornElectronWorkbookPanelParam115,
      rowHeights: popcornElectronWorkbookPanelParam116
    }),
    popcornElectronWorkbookPanelValue906 = popcornElectronWorkbookPanelValue905.x,
    popcornElectronWorkbookPanelValue907 = popcornElectronWorkbookPanelValue905.y,
    popcornElectronWorkbookPanelValue908 = popcornElectronWorkbookPanelHelper111({
      logicalX: popcornElectronWorkbookPanelValue906,
      logicalY: popcornElectronWorkbookPanelValue907,
      zoom: popcornElectronWorkbookPanelValue904.k,
      viewColWidths: popcornElectronWorkbookPanelParam115,
      rowHeights: popcornElectronWorkbookPanelParam116
    });
  try {
    popcornElectronWorkbookPanelValue902.style.cursor = popcornElectronWorkbookPanelValue908?.cursor ?? "";
  } catch {}
  return popcornElectronWorkbookPanelValue908?.cursor ?? null;
}
function $r(event) {
  let popcornElectronWorkbookPanelValue1201 = popcornElectronWorkbookPanelHelper12({
    camera: event.camera,
    screenX: event.screenX,
    screenY: event.screenY,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights
  });
  return popcornElectronWorkbookPanelValue1201.x > 40 && popcornElectronWorkbookPanelValue1201.y > 20;
}
function popcornElectronWorkbookPanelHelper113(event) {
  return event.key.length === 1;
}
function popcornElectronWorkbookPanelHelper114({
  controller,
  snapshot,
  runtime,
  hostRef,
  canvasRef,
  resizingRef,
  workerPointerDragActiveRef,
  selectionStartRef,
  selectionEndRef,
  selectionDraggedRef,
  dataValidationTargetsRef,
  viewportLogger,
  annotationEnabled,
  drawingEnabled,
  annotationMode,
  drawingMode,
  annotationEditorSession,
  annotationEditorSessionRef: popcornElectronWorkbookPanelParam2,
  annotationEditorRef,
  annotationEditorLightDismissArmedRef,
  activeDrawingStrokeRef,
  workbookActiveReviewTarget,
  isEditing,
  inputFocused,
  floatingTextEdit,
  activeCellEditor,
  selectionBounds,
  selectedFloatingElement,
  toolbarRequested,
  setToolbarRequested,
  onAnnotationModeChange,
  onDrawingModeChange,
  cleanupDrawingSession,
  queueAnnotationDraftOpen,
  openCreateAnnotationEditor,
  closeAnnotationEditor,
  requestAnnotationEditorDismiss,
  beginDrawingSession,
  startWorkerViewportPointerDrag,
  isClipboardShortcut,
  navigateFindMatches,
  setFindQuery,
  setActiveFindIndex,
  setFindOpen,
  activeDataValidationAddress,
  setActiveDataValidationAddress,
  camera,
  reviewTools,
  onCellEditorBlur,
  onCellEditorChange
}) {
  return {
    handleHostMouseDownCapture: React.useCallback(event => {
      annotationEnabled && annotationEditorSession && event.target instanceof HTMLElement && !event.target.closest("[data-testid='popcorn-annotation-editor']") && !event.target.closest("[data-popcorn-annotation-marker='true']") && !event.target.closest("[data-popcorn-ask-for-edit='true']") && event.target !== canvasRef.current && requestAnnotationEditorDismiss();
      !(event.target instanceof HTMLElement && event.target.closest("[data-testid='popcorn-edit-toolbar']")) && setToolbarRequested(false);
    }, [annotationEditorSession, annotationEnabled, canvasRef, requestAnnotationEditorDismiss, setToolbarRequested]),
    handleHostKeyDown: React.useCallback(event => {
      if (!(event.target instanceof HTMLElement && (event.target.closest("[data-testid='popcorn-find-bar']") || event.target.closest("[data-testid='popcorn-annotation-editor']"))) && !isClipboardShortcut(event)) {
        if (annotationEnabled && reviewTools?.annotation?.onRequestLink && !activeCellEditor && !inputFocused && !floatingTextEdit.isActive && !annotationEditorSession && !drawingMode && (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey && event.key.toLowerCase() === "l") {
          if (!workbookActiveReviewTarget) return;
          reviewTools.annotation.onRequestLink({
            requestId: popcornElectronSurfaceStyleN("selection-link"),
            artifactKind: "workbook",
            label: popcornElectronWorkbookPanelHelper55(workbookActiveReviewTarget),
            target: workbookActiveReviewTarget
          });
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (event.key === "Escape" && activeDrawingStrokeRef.current) {
          cleanupDrawingSession();
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (event.key === "Escape" && drawingMode) {
          onDrawingModeChange?.(false);
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (event.key === "Escape" && annotationMode && !annotationEditorSession) {
          onAnnotationModeChange?.(false);
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (!isEditing && snapshot.editorMode === "grid" && !event.metaKey && !event.ctrlKey && !event.altKey && !annotationMode && popcornElectronWorkbookPanelHelper113(event)) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey) {
          if (!isEditing) return;
          let popcornElectronWorkbookPanelValue1293 = !!selectionBounds;
          setToolbarRequested(popcornElectronWorkbookPanelValue1293);
          popcornElectronWorkbookPanelValue1293 && (event.preventDefault(), event.stopPropagation());
          return;
        }
        if (event.key === "Escape" && toolbarRequested) {
          setToolbarRequested(false);
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (!(!isEditing && selectedFloatingElement && (event.key === "Backspace" || event.key === "Delete" || event.key.startsWith("Arrow")))) {
          if (snapshot.editorMode === "grid" && !event.metaKey && !event.ctrlKey && !event.altKey && !annotationMode && popcornElectronWorkbookPanelHelper113(event)) {
            let popcornElectronWorkbookPanelValue1252 = event.key === "Backspace" || event.key === "Delete" ? "" : event.key;
            controller.openCellEditor(popcornElectronWorkbookPanelValue1252) && (event.preventDefault(), event.stopPropagation());
            return;
          }
          if (event.key === "Escape" && (snapshot.selectionRect.r1 !== snapshot.selectionRect.r2 || snapshot.selectionRect.c1 !== snapshot.selectionRect.c2)) {
            controller.collapseSelectionToActiveCell();
            controller.setIsDraggingSelection(false);
            controller.setResizeGuide(null);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          controller.handleKeyboardEvent({
            key: event.key,
            metaKey: event.metaKey,
            ctrlKey: event.ctrlKey,
            altKey: event.altKey,
            shiftKey: event.shiftKey
          }) && (event.preventDefault(), event.stopPropagation(), selectionStartRef.current = null, selectionEndRef.current = null, controller.setIsDraggingSelection(false), controller.setResizeGuide(null), viewportLogger.debug("keyboard", {
            key: event.key,
            selection: snapshot.selectedAddress
          }));
        }
      }
    }, [activeCellEditor, activeDrawingStrokeRef, annotationEditorSession, annotationEnabled, annotationMode, cleanupDrawingSession, controller, drawingMode, floatingTextEdit.isActive, inputFocused, isClipboardShortcut, isEditing, onAnnotationModeChange, onDrawingModeChange, reviewTools, selectedFloatingElement, selectionBounds, selectionEndRef, selectionStartRef, snapshot.editorMode, snapshot.selectedAddress, snapshot.selectionRect.c1, snapshot.selectionRect.c2, snapshot.selectionRect.r1, snapshot.selectionRect.r2, toolbarRequested, viewportLogger, workbookActiveReviewTarget, setToolbarRequested]),
    handleHostMouseMove: React.useCallback(event => {
      let popcornElectronWorkbookPanelValue486 = hostRef.current,
        popcornElectronWorkbookPanelValue487 = canvasRef.current;
      if (drawingMode && drawingEnabled) {
        popcornElectronWorkbookPanelValue487 && (popcornElectronWorkbookPanelValue487.style.cursor = "crosshair");
        popcornElectronWorkbookPanelValue486 && (popcornElectronWorkbookPanelValue486.style.cursor = "crosshair");
        return;
      }
      if (annotationMode && annotationEnabled) {
        let popcornElectronWorkbookPanelValue1313 = popcornElectronWorkbookPanelParam2.current ? "" : popcornElectronSurfaceStyleV;
        popcornElectronWorkbookPanelValue487 && (popcornElectronWorkbookPanelValue487.style.cursor = popcornElectronWorkbookPanelValue1313);
        popcornElectronWorkbookPanelValue486 && (popcornElectronWorkbookPanelValue486.style.cursor = popcornElectronWorkbookPanelValue1313);
        return;
      }
      let popcornElectronWorkbookPanelValue488 = popcornElectronWorkbookPanelHelper112(event, hostRef, resizingRef, () => runtime.getCamera(), snapshot.columnWidths, snapshot.rowHeights, snapshot.freezePanes);
      if (workerPointerDragActiveRef.current || !popcornElectronWorkbookPanelValue486 || !popcornElectronWorkbookPanelValue487) return;
      if (!selectedFloatingElement) {
        let popcornElectronWorkbookPanelValue890 = popcornElectronWorkbookPanelValue486.getBoundingClientRect(),
          popcornElectronWorkbookPanelValue891 = isEditing && popcornElectronWorkbookPanelHelper22({
            screenX: event.clientX - popcornElectronWorkbookPanelValue890.left,
            screenY: event.clientY - popcornElectronWorkbookPanelValue890.top,
            selectionRect: snapshot.selectionRect,
            colWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
            camera: runtime.getCamera(),
            freezePanes: snapshot.freezePanes
          }) ? "crosshair" : popcornElectronWorkbookPanelValue488 ?? "";
        popcornElectronWorkbookPanelValue487.style.cursor = popcornElectronWorkbookPanelValue891;
        popcornElectronWorkbookPanelValue486.style.cursor = popcornElectronWorkbookPanelValue891;
        return;
      }
      if (!isEditing) {
        popcornElectronWorkbookPanelValue487.style.cursor = popcornElectronWorkbookPanelValue488 ?? "";
        popcornElectronWorkbookPanelValue486.style.cursor = popcornElectronWorkbookPanelValue488 ?? "";
        return;
      }
      let popcornElectronWorkbookPanelValue489 = popcornElectronWorkbookPanelValue486.getBoundingClientRect(),
        popcornElectronWorkbookPanelValue490 = popcornElectronWorkbookPanelHelper12({
          camera: runtime.getCamera(),
          screenX: event.clientX - popcornElectronWorkbookPanelValue489.left,
          screenY: event.clientY - popcornElectronWorkbookPanelValue489.top,
          freezePanes: snapshot.freezePanes,
          columnWidths: snapshot.columnWidths,
          rowHeights: snapshot.rowHeights
        }),
        popcornElectronWorkbookPanelValue491 = {
          left: selectedFloatingElement.logicalBounds.x,
          top: selectedFloatingElement.logicalBounds.y,
          width: selectedFloatingElement.logicalBounds.width,
          height: selectedFloatingElement.logicalBounds.height,
          rotation: selectedFloatingElement.rotation
        },
        popcornElectronWorkbookPanelValue492 = _popcornElectronSurfaceStyleL(popcornElectronWorkbookPanelValue491, popcornElectronWorkbookPanelValue490, runtime.getCamera().k),
        popcornElectronWorkbookPanelValue493 = selectedFloatingElement.kind === "xlsx-shape" && _popcornElectronSurfaceStyleU(popcornElectronWorkbookPanelValue491, popcornElectronWorkbookPanelValue490, runtime.getCamera().k),
        popcornElectronWorkbookPanelValue494 = popcornElectronWorkbookPanelValue492 ? _popcornElectronSurfaceStyleF(popcornElectronWorkbookPanelValue492) : popcornElectronWorkbookPanelValue493 ? _popcornElectronSurfaceStyleP() : null;
      popcornElectronWorkbookPanelValue487.style.cursor = popcornElectronWorkbookPanelValue494 ?? "";
      popcornElectronWorkbookPanelValue486.style.cursor = popcornElectronWorkbookPanelValue494 ?? "";
    }, [popcornElectronWorkbookPanelParam2, annotationEnabled, annotationMode, canvasRef, drawingEnabled, drawingMode, hostRef, isEditing, resizingRef, runtime, selectedFloatingElement, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights, snapshot.selectionRect, workerPointerDragActiveRef]),
    handleCanvasMouseDown: React.useCallback(event => {
      try {
        hostRef.current?.focus({
          preventScroll: true
        });
      } catch {}
      let popcornElectronWorkbookPanelValue416 = event.currentTarget.getBoundingClientRect(),
        popcornElectronWorkbookPanelValue417 = popcornElectronWorkbookPanelHelper12({
          camera: runtime.getCamera(),
          screenX: event.clientX - popcornElectronWorkbookPanelValue416.left,
          screenY: event.clientY - popcornElectronWorkbookPanelValue416.top,
          freezePanes: snapshot.freezePanes,
          columnWidths: snapshot.columnWidths,
          rowHeights: snapshot.rowHeights
        });
      if (annotationEnabled && !annotationMode && popcornElectronWorkbookPanelParam2.current && !requestAnnotationEditorDismiss()) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (drawingMode && drawingEnabled) {
        event.preventDefault();
        event.stopPropagation();
        beginDrawingSession(event);
        return;
      }
      if (annotationMode && annotationEnabled) {
        let popcornElectronWorkbookPanelValue535 = popcornElectronWorkbookPanelParam2.current,
          popcornElectronWorkbookPanelValue536 = annotationEditorRef.current?.querySelector("textarea")?.value ?? popcornElectronWorkbookPanelValue535?.body ?? "",
          popcornElectronWorkbookPanelValue537 = (annotationEditorSession?.mode ?? popcornElectronWorkbookPanelValue535?.mode) === "create" ? popcornElectronWorkbookPanelValue536.trim().length === 0 ? "close" : "keep" : "replace";
        if (popcornElectronWorkbookPanelValue535 != null && popcornElectronWorkbookPanelValue537 === "replace" && closeAnnotationEditor(), selectedFloatingElement && _popcornElectronSurfaceStyleC({
          left: selectedFloatingElement.logicalBounds.x,
          top: selectedFloatingElement.logicalBounds.y,
          width: selectedFloatingElement.logicalBounds.width,
          height: selectedFloatingElement.logicalBounds.height,
          rotation: selectedFloatingElement.rotation
        }, popcornElectronWorkbookPanelValue417)) {
          if (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelValue537 === "keep") {
            requestAnnotationEditorDismiss();
            return;
          }
          if (popcornElectronWorkbookPanelValue537 === "close") {
            requestAnnotationEditorDismiss();
            return;
          }
          let popcornElectronWorkbookPanelValue964 = popcornElectronWorkbookPanelHelper54({
            sheetName: snapshot.activeSheetName,
            selectedFloatingElement,
            anchorPoint: {
              x: popcornElectronWorkbookPanelValue417.x,
              y: popcornElectronWorkbookPanelValue417.y
            }
          });
          if (!popcornElectronWorkbookPanelValue964) return;
          openCreateAnnotationEditor(popcornElectronWorkbookPanelValue964, "annotation_mode_pointer");
          return;
        }
        queueAnnotationDraftOpen({
          kind: "range",
          anchorPoint: {
            x: popcornElectronWorkbookPanelValue417.x,
            y: popcornElectronWorkbookPanelValue417.y
          },
          getSelectionSummary: () => {
            let popcornElectronWorkbookPanelValue1216 = selectionStartRef.current,
              popcornElectronWorkbookPanelValue1217 = selectionEndRef.current;
            return popcornElectronWorkbookPanelValue1216 == null || popcornElectronWorkbookPanelValue1217 == null ? null : popcornElectronWorkbookPanelHelper110({
              r1: popcornElectronWorkbookPanelValue1216.row,
              c1: popcornElectronWorkbookPanelValue1216.col,
              r2: popcornElectronWorkbookPanelValue1217.row,
              c2: popcornElectronWorkbookPanelValue1217.col
            }, false);
          },
          draftClickAction: popcornElectronWorkbookPanelValue537,
          draftBody: popcornElectronWorkbookPanelValue537 === "keep" ? popcornElectronWorkbookPanelValue536 : undefined,
          wasDraftLightDismissArmed: popcornElectronWorkbookPanelValue535?.mode === "create" ? annotationEditorLightDismissArmedRef.current : undefined,
          shouldOpenDraftOnRelease: () => popcornElectronWorkbookPanelValue537 === "replace" ? true : selectionDraggedRef.current
        });
      }
      if (!(annotationMode && annotationEnabled) && floatingTextEdit.handleCanvasMouseDown(event)) return;
      if (runtime.shouldSuppressMouseInteractions()) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      let popcornElectronWorkbookPanelValue418 = dataValidationTargetsRef.current.find(item => {
        let popcornElectronWorkbookPanelValue1140 = event.clientX - popcornElectronWorkbookPanelValue416.left,
          popcornElectronWorkbookPanelValue1141 = event.clientY - popcornElectronWorkbookPanelValue416.top;
        return popcornElectronWorkbookPanelValue1140 >= item.cssBounds.x && popcornElectronWorkbookPanelValue1140 <= item.cssBounds.x + item.cssBounds.width && popcornElectronWorkbookPanelValue1141 >= item.cssBounds.y && popcornElectronWorkbookPanelValue1141 <= item.cssBounds.y + item.cssBounds.height;
      });
      if (popcornElectronWorkbookPanelValue418) {
        event.preventDefault();
        event.stopPropagation();
        controller.setSelectedAddress(popcornElectronWorkbookPanelValue418.addr);
        setActiveDataValidationAddress(popcornElectronWorkbookPanelValue418.addr);
        try {
          hostRef.current?.focus({
            preventScroll: true
          });
        } catch {}
        return;
      }
      event.preventDefault();
      startWorkerViewportPointerDrag(event);
    }, [popcornElectronWorkbookPanelParam2, annotationEditorRef, annotationEnabled, annotationMode, beginDrawingSession, closeAnnotationEditor, controller, dataValidationTargetsRef, drawingEnabled, drawingMode, floatingTextEdit, hostRef, openCreateAnnotationEditor, queueAnnotationDraftOpen, requestAnnotationEditorDismiss, runtime, selectionDraggedRef, selectedFloatingElement, snapshot.activeSheetName, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights, startWorkerViewportPointerDrag, setActiveDataValidationAddress]),
    handleCanvasDoubleClick: React.useCallback(event => {
      if (drawingMode && drawingEnabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (annotationMode && annotationEnabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (floatingTextEdit.handleCanvasDoubleClick(event) || !isEditing) return;
      if (runtime.shouldSuppressMouseInteractions()) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      let popcornElectronWorkbookPanelValue696 = event.currentTarget.getBoundingClientRect();
      if ($r({
        camera: runtime.getCamera(),
        screenX: event.clientX - popcornElectronWorkbookPanelValue696.left,
        screenY: event.clientY - popcornElectronWorkbookPanelValue696.top,
        freezePanes: snapshot.freezePanes,
        columnWidths: snapshot.columnWidths,
        rowHeights: snapshot.rowHeights
      }) && controller.openCellEditor(snapshot.formulaInput)) {
        event.preventDefault();
        event.stopPropagation();
        try {
          hostRef.current?.focus({
            preventScroll: true
          });
        } catch {}
      }
    }, [annotationEnabled, annotationMode, controller, drawingEnabled, drawingMode, floatingTextEdit, hostRef, isEditing, runtime, snapshot.columnWidths, snapshot.formulaInput, snapshot.freezePanes, snapshot.rowHeights]),
    handleCanvasMouseLeave: React.useCallback(() => {
      if (drawingMode && drawingEnabled) {
        canvasRef.current && (canvasRef.current.style.cursor = "crosshair");
        hostRef.current && (hostRef.current.style.cursor = "crosshair");
        return;
      }
      if (annotationMode && annotationEnabled) {
        let popcornElectronWorkbookPanelValue1282 = popcornElectronWorkbookPanelParam2.current ? "" : popcornElectronSurfaceStyleV;
        canvasRef.current && (canvasRef.current.style.cursor = popcornElectronWorkbookPanelValue1282);
        hostRef.current && (hostRef.current.style.cursor = popcornElectronWorkbookPanelValue1282);
        return;
      }
      !resizingRef.current && canvasRef.current && (canvasRef.current.style.cursor = "default");
      !resizingRef.current && hostRef.current && (hostRef.current.style.cursor = "default");
    }, [popcornElectronWorkbookPanelParam2, annotationEnabled, annotationMode, canvasRef, drawingEnabled, drawingMode, hostRef, resizingRef]),
    handleOverlayMouseDown: React.useCallback(event => {
      event.stopPropagation();
    }, []),
    handleFindQueryChange: React.useCallback(popcornElectronWorkbookPanelParam581 => {
      setFindQuery(popcornElectronWorkbookPanelParam581);
      setActiveFindIndex(0);
    }, [setActiveFindIndex, setFindQuery]),
    handleFindNavigatePrevious: React.useCallback(() => {
      navigateFindMatches(-1);
    }, [navigateFindMatches]),
    handleFindNavigateNext: React.useCallback(() => {
      navigateFindMatches(1);
    }, [navigateFindMatches]),
    handleFindClose: React.useCallback(() => {
      setFindOpen(false);
      setFindQuery("");
      setActiveFindIndex(0);
    }, [setActiveFindIndex, setFindOpen, setFindQuery]),
    handleSetTableFilterValues: React.useCallback((popcornElectronWorkbookPanelParam299, popcornElectronWorkbookPanelParam300, popcornElectronWorkbookPanelParam301) => {
      controller.dispatch({
        type: "set-table-filter-values",
        tableId: popcornElectronWorkbookPanelParam299,
        colIdx: popcornElectronWorkbookPanelParam300,
        values: popcornElectronWorkbookPanelParam301
      });
    }, [controller]),
    handleSetTableSort: React.useCallback((popcornElectronWorkbookPanelParam442, popcornElectronWorkbookPanelParam443) => {
      controller.dispatch({
        type: "set-table-sort",
        tableId: popcornElectronWorkbookPanelParam442,
        sort: popcornElectronWorkbookPanelParam443
      });
    }, [controller]),
    handleSetLogicalScroll: React.useCallback(({
      left,
      top,
      settled
    }) => {
      let popcornElectronWorkbookPanelValue1209 = _popcornElectronSurfaceStyleG(runtime.getCamera());
      runtime.setCamera({
        x: -((left ?? popcornElectronWorkbookPanelValue1209.left) * camera.k),
        y: -((top ?? popcornElectronWorkbookPanelValue1209.top) * camera.k),
        k: camera.k
      }, settled ? {
        settled: true
      } : undefined);
    }, [camera.k, runtime]),
    handleCellEditChange: React.useCallback(popcornElectronWorkbookPanelParam507 => {
      onCellEditorChange?.(popcornElectronWorkbookPanelParam507);
      isEditing && controller.updateFormulaInput(popcornElectronWorkbookPanelParam507);
    }, [controller, isEditing, onCellEditorChange]),
    handleCellEditCommit: React.useCallback((popcornElectronWorkbookPanelParam157, popcornElectronWorkbookPanelParam158) => {
      if (onCellEditorBlur?.(), isEditing) {
        if (popcornElectronWorkbookPanelParam158?.source === "enter") {
          controller.updateFormulaInput(popcornElectronWorkbookPanelParam157);
          controller.handleKeyboardEvent({
            key: "Enter",
            metaKey: false,
            ctrlKey: false,
            altKey: false,
            shiftKey: false
          });
          return;
        }
        controller.commitCellEdit(popcornElectronWorkbookPanelParam157);
      }
    }, [controller, isEditing, onCellEditorBlur]),
    handleCellEditCancel: React.useCallback(() => {
      onCellEditorBlur?.();
      isEditing && controller.cancelCellEdit();
    }, [controller, isEditing, onCellEditorBlur]),
    handleDataValidationSelect: React.useCallback(popcornElectronWorkbookPanelParam308 => {
      activeDataValidationAddress && (controller.setSelectedAddress(activeDataValidationAddress), controller.updateFormulaInput(popcornElectronWorkbookPanelParam308), controller.commitFormulaInput(popcornElectronWorkbookPanelParam308), setActiveDataValidationAddress(null));
    }, [activeDataValidationAddress, controller, setActiveDataValidationAddress]),
    handleDataValidationClose: React.useCallback(() => {
      setActiveDataValidationAddress(null);
    }, [setActiveDataValidationAddress]),
    handleReplyToCommentThread: React.useCallback((popcornElectronWorkbookPanelParam545, popcornElectronWorkbookPanelParam546) => {
      controller.replyToCommentThread(popcornElectronWorkbookPanelParam545, popcornElectronWorkbookPanelParam546);
    }, [controller]),
    handleResolveCommentThread: React.useCallback(popcornElectronWorkbookPanelParam556 => {
      controller.resolveCommentThread(popcornElectronWorkbookPanelParam556);
    }, [controller]),
    handleReopenCommentThread: React.useCallback(popcornElectronWorkbookPanelParam558 => {
      controller.reopenCommentThread(popcornElectronWorkbookPanelParam558);
    }, [controller]),
    handleDeleteCommentThread: React.useCallback(popcornElectronWorkbookPanelParam559 => {
      controller.deleteCommentThread(popcornElectronWorkbookPanelParam559);
    }, [controller]),
    handleToggleCommentReaction: React.useCallback((popcornElectronWorkbookPanelParam508, popcornElectronWorkbookPanelParam509, popcornElectronWorkbookPanelParam510) => {
      controller.toggleCommentReaction(popcornElectronWorkbookPanelParam508, popcornElectronWorkbookPanelParam509, popcornElectronWorkbookPanelParam510);
    }, [controller]),
    handleEditThreadComment: React.useCallback((popcornElectronWorkbookPanelParam530, popcornElectronWorkbookPanelParam531, popcornElectronWorkbookPanelParam532) => {
      controller.editThreadComment(popcornElectronWorkbookPanelParam530, popcornElectronWorkbookPanelParam531, popcornElectronWorkbookPanelParam532);
    }, [controller]),
    handleDeleteThreadComment: React.useCallback((popcornElectronWorkbookPanelParam548, popcornElectronWorkbookPanelParam549) => {
      controller.deleteThreadComment(popcornElectronWorkbookPanelParam548, popcornElectronWorkbookPanelParam549);
    }, [controller]),
    handleFreezePanesCommit: React.useCallback(popcornElectronWorkbookPanelParam452 => {
      controller.dispatch({
        type: "set-freeze-panes",
        freezePanes: popcornElectronWorkbookPanelParam452
      });
    }, [controller])
  };
}
function popcornElectronWorkbookPanelHelper115({
  snapshot,
  reviewTools,
  annotationMode,
  drawingMode,
  drawingCommitToken = 0,
  runtime,
  hostRef,
  canvasRef,
  overlayCanvasRef,
  selectionSummary,
  colOffsets,
  rowOffsets,
  camera,
  annotationRangeHighlightColor,
  mergedCells,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true
}) {
  let popcornElectronWorkbookPanelValue171 = annotationsEnabled && reviewTools?.annotation != null && reviewTools.annotation.enabled !== false,
    popcornElectronWorkbookPanelValue172 = drawingAnnotationsEnabled && reviewTools?.drawing != null && reviewTools.drawing.enabled !== false,
    [popcornElectronWorkbookPanelValue173, popcornElectronWorkbookPanelValue174] = React.useState(null),
    popcornElectronWorkbookPanelValue175 = React.useRef(popcornElectronWorkbookPanelValue173);
  popcornElectronWorkbookPanelValue175.current = popcornElectronWorkbookPanelValue173;
  let popcornElectronWorkbookPanelValue176 = React.useRef(null),
    popcornElectronWorkbookPanelValue177 = React.useRef(false),
    popcornElectronWorkbookPanelValue178 = React.useRef(null),
    popcornElectronWorkbookPanelValue179 = React.useRef(null),
    [popcornElectronWorkbookPanelValue180, popcornElectronWorkbookPanelValue181] = React.useState(0),
    [popcornElectronWorkbookPanelValue182, popcornElectronWorkbookPanelValue183] = React.useState(null),
    popcornElectronWorkbookPanelValue184 = React.useRef(null);
  popcornElectronWorkbookPanelValue184.current = popcornElectronWorkbookPanelValue182;
  let [popcornElectronWorkbookPanelValue185, popcornElectronWorkbookPanelValue186] = React.useState([]),
    popcornElectronWorkbookPanelValue187 = React.useRef([]);
  popcornElectronWorkbookPanelValue187.current = popcornElectronWorkbookPanelValue185;
  let popcornElectronWorkbookPanelValue188 = React.useRef(null),
    popcornElectronWorkbookPanelValue189 = React.useRef(null),
    popcornElectronWorkbookPanelValue190 = React.useRef(drawingCommitToken),
    [popcornElectronWorkbookPanelValue191, popcornElectronWorkbookPanelValue192] = React.useState(null),
    popcornElectronWorkbookPanelValue193 = React.useCallback(popcornElectronWorkbookPanelParam347 => {
      popcornElectronWorkbookPanelValue192(popcornElectronWorkbookPanelParam601 => popcornElectronWorkbookPanelParam601 === popcornElectronWorkbookPanelParam347 ? null : popcornElectronWorkbookPanelParam601);
      popcornElectronWorkbookPanelValue174(popcornElectronWorkbookPanelParam523 => popcornElectronWorkbookPanelParam523?.mode === "edit" && popcornElectronWorkbookPanelParam523.annotationId === popcornElectronWorkbookPanelParam347 ? null : popcornElectronWorkbookPanelParam523);
    }, []),
    popcornElectronWorkbookPanelValue194 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue192(null);
      popcornElectronWorkbookPanelValue174(null);
    }, []),
    {
      annotations,
      addPendingAnnotation,
      updatePendingAnnotation,
      dismissAnnotation
    } = popcornElectronSurfaceStyleD(reviewTools?.annotation?.handleRef, {
      onDismissAnnotation: popcornElectronWorkbookPanelParam513 => {
        popcornElectronWorkbookPanelValue193(popcornElectronWorkbookPanelParam513);
        reviewTools?.annotation?.onDismiss?.(popcornElectronWorkbookPanelParam513);
      },
      onDismissAllAnnotations: popcornElectronWorkbookPanelValue194
    }),
    {
      drawings,
      addPendingDrawing
    } = popcornElectronSurfaceStyleE(reviewTools?.drawing?.handleRef),
    popcornElectronWorkbookPanelValue195 = React.useMemo(() => annotations.filter(item => item.target.sheetName === snapshot.activeSheetName), [annotations, snapshot.activeSheetName]),
    popcornElectronWorkbookPanelValue196 = React.useMemo(() => drawings.filter(item => item.target.sheetName === snapshot.activeSheetName), [drawings, snapshot.activeSheetName]),
    popcornElectronWorkbookPanelValue197 = React.useCallback(popcornElectronWorkbookPanelParam348 => {
      popcornElectronWorkbookPanelValue183(popcornElectronWorkbookPanelParam384 => {
        let popcornElectronWorkbookPanelValue1349 = typeof popcornElectronWorkbookPanelParam348 == "function" ? popcornElectronWorkbookPanelParam348(popcornElectronWorkbookPanelParam384) : popcornElectronWorkbookPanelParam348;
        return popcornElectronWorkbookPanelValue184.current = popcornElectronWorkbookPanelValue1349, popcornElectronWorkbookPanelValue1349;
      });
    }, []),
    popcornElectronWorkbookPanelValue198 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue178.current?.();
      popcornElectronWorkbookPanelValue178.current = null;
    }, []),
    popcornElectronWorkbookPanelValue199 = React.useCallback(() => {
      try {
        hostRef.current?.focus({
          preventScroll: true
        });
      } catch {}
    }, [hostRef]),
    popcornElectronWorkbookPanelValue200 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue177.current = false;
      popcornElectronWorkbookPanelValue174(null);
      popcornElectronWorkbookPanelValue199();
    }, [popcornElectronWorkbookPanelValue199]),
    popcornElectronWorkbookPanelValue201 = React.useCallback(() => {
      let popcornElectronWorkbookPanelValue1236 = popcornElectronWorkbookPanelValue175.current;
      return popcornElectronWorkbookPanelValue1236?.mode === "create" && popcornElectronWorkbookPanelValue1236.body.trim().length > 0 ? popcornElectronWorkbookPanelValue177.current ? (popcornElectronWorkbookPanelValue200(), true) : (popcornElectronWorkbookPanelValue177.current = true, popcornElectronSurfaceStyleA(popcornElectronWorkbookPanelValue176.current), false) : (popcornElectronWorkbookPanelValue200(), true);
    }, [popcornElectronWorkbookPanelValue200]),
    popcornElectronWorkbookPanelValue202 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue189.current?.();
      popcornElectronWorkbookPanelValue189.current = null;
    }, []),
    popcornElectronWorkbookPanelValue203 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue188.current = null;
      popcornElectronWorkbookPanelValue187.current = [];
      popcornElectronWorkbookPanelValue186([]);
    }, []),
    popcornElectronWorkbookPanelValue204 = React.useCallback(popcornElectronWorkbookPanelParam207 => {
      let popcornElectronWorkbookPanelValue1158 = popcornElectronWorkbookPanelHelper14({
        camera: runtime.getCamera(),
        worldX: popcornElectronWorkbookPanelParam207.x,
        worldY: popcornElectronWorkbookPanelParam207.y,
        freezePanes: snapshot.freezePanes,
        columnWidths: snapshot.columnWidths,
        rowHeights: snapshot.rowHeights
      });
      return {
        x: popcornElectronWorkbookPanelValue1158.x,
        y: popcornElectronWorkbookPanelValue1158.y
      };
    }, [runtime, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue205 = React.useCallback(popcornElectronWorkbookPanelParam242 => {
      popcornElectronWorkbookPanelParam242 == null || popcornElectronWorkbookPanelParam242.points.length === 0 || !popcornElectronWorkbookPanelValue172 || !drawingMode || (popcornElectronWorkbookPanelValue188.current = snapshot.activeSheetName, popcornElectronWorkbookPanelValue187.current = [...popcornElectronWorkbookPanelValue187.current, popcornElectronWorkbookPanelParam242], popcornElectronWorkbookPanelValue186(popcornElectronWorkbookPanelValue187.current));
    }, [popcornElectronWorkbookPanelValue172, drawingMode, snapshot.activeSheetName]),
    popcornElectronWorkbookPanelValue206 = React.useCallback(popcornElectronWorkbookPanelParam18 => {
      if (popcornElectronWorkbookPanelParam18.length === 0) return;
      let popcornElectronWorkbookPanelValue468 = _popcornElectronSurfaceStyleZ(popcornElectronWorkbookPanelParam18),
        popcornElectronWorkbookPanelValue469 = _popcornElectronSurfaceStyleZ(popcornElectronWorkbookPanelParam18.map(item => ({
          ...item,
          points: item.points.map(popcornElectronWorkbookPanelValue204)
        }))),
        popcornElectronWorkbookPanelValue470 = hostRef.current,
        popcornElectronWorkbookPanelValue471 = canvasRef.current;
      if (!popcornElectronWorkbookPanelValue468 || !popcornElectronWorkbookPanelValue469 || !popcornElectronWorkbookPanelValue470 || !popcornElectronWorkbookPanelValue471) return;
      let popcornElectronWorkbookPanelValue472 = popcornElectronWorkbookPanelParam18.reduce((accumulator, current) => Math.max(accumulator, current.strokeWidth), 0),
        popcornElectronWorkbookPanelValue473 = popcornElectronSurfaceStyleB({
          left: popcornElectronWorkbookPanelValue469.left - popcornElectronWorkbookPanelValue472 / 2,
          top: popcornElectronWorkbookPanelValue469.top - popcornElectronWorkbookPanelValue472 / 2,
          width: popcornElectronWorkbookPanelValue469.width + popcornElectronWorkbookPanelValue472,
          height: popcornElectronWorkbookPanelValue469.height + popcornElectronWorkbookPanelValue472
        }),
        popcornElectronWorkbookPanelValue474 = {
          width: popcornElectronWorkbookPanelValue470.clientWidth,
          height: popcornElectronWorkbookPanelValue470.clientHeight
        },
        popcornElectronWorkbookPanelValue475 = popcornElectronSurfaceStyleL(popcornElectronWorkbookPanelValue473, popcornElectronWorkbookPanelValue474),
        popcornElectronWorkbookPanelValue476 = popcornElectronWorkbookPanelHelper58({
          logicalBounds: popcornElectronWorkbookPanelValue468,
          colOffsets,
          rowOffsets,
          columnWidths: snapshot.columnWidths,
          rowHeights: snapshot.rowHeights
        }),
        popcornElectronWorkbookPanelValue477 = popcornElectronWorkbookPanelHelper59({
          sheetName: snapshot.activeSheetName,
          logicalBounds: popcornElectronWorkbookPanelValue468,
          viewportBounds: popcornElectronWorkbookPanelValue475,
          rangeAddress: popcornElectronWorkbookPanelValue476.rangeAddress,
          coveredCells: popcornElectronWorkbookPanelValue476.coveredCells
        }),
        popcornElectronWorkbookPanelValue478 = popcornElectronSurfaceStyleN("drawing"),
        popcornElectronWorkbookPanelValue479 = popcornElectronWorkbookPanelHelper60(popcornElectronWorkbookPanelValue477);
      addPendingDrawing({
        drawingId: popcornElectronWorkbookPanelValue478,
        artifactKind: "workbook",
        label: popcornElectronWorkbookPanelValue479,
        target: popcornElectronWorkbookPanelValue477,
        strokes: popcornElectronWorkbookPanelParam18
      });
      let popcornElectronWorkbookPanelValue480 = {
        x: popcornElectronWorkbookPanelValue475.left + popcornElectronWorkbookPanelValue475.width / 2,
        y: popcornElectronWorkbookPanelValue475.top + popcornElectronWorkbookPanelValue475.height / 2
      };
      popcornElectronSurfaceStyleI({
        cropRect: popcornElectronWorkbookPanelValue475,
        viewportSize: popcornElectronWorkbookPanelValue474,
        baseCanvas: popcornElectronWorkbookPanelValue471,
        overlayCanvases: [overlayCanvasRef.current],
        strokes: popcornElectronWorkbookPanelParam18,
        projectPoint: popcornElectronWorkbookPanelValue204
      }).then(value => {
        let popcornElectronWorkbookPanelValue927 = {
            ...value,
            commentId: popcornElectronWorkbookPanelValue478
          },
          popcornElectronWorkbookPanelValue928 = {
            drawingId: popcornElectronWorkbookPanelValue478,
            artifactKind: "workbook",
            label: popcornElectronWorkbookPanelValue479,
            target: popcornElectronWorkbookPanelValue477,
            strokes: popcornElectronWorkbookPanelParam18,
            screenshot: popcornElectronWorkbookPanelValue927,
            browserCompatible: popcornElectronSurfaceStyleR({
              drawingId: popcornElectronWorkbookPanelValue478,
              screenshot: popcornElectronWorkbookPanelValue927,
              markerViewportPoint: popcornElectronWorkbookPanelValue480,
              viewportSize: popcornElectronWorkbookPanelValue474
            })
          };
        return reviewTools?.drawing?.onSubmit?.(popcornElectronWorkbookPanelValue928);
      }).catch(error => {
        console.error("Failed to capture workbook drawing screenshot", error);
      });
    }, [addPendingDrawing, canvasRef, colOffsets, popcornElectronWorkbookPanelValue172, drawingMode, popcornElectronWorkbookPanelValue187, hostRef, overlayCanvasRef, popcornElectronWorkbookPanelValue204, reviewTools?.drawing, rowOffsets, snapshot.activeSheetName, snapshot.columnWidths, snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue207 = React.useCallback(event => {
      popcornElectronWorkbookPanelValue199();
      popcornElectronWorkbookPanelValue202();
      let popcornElectronWorkbookPanelValue570 = event.currentTarget.getBoundingClientRect(),
        popcornElectronWorkbookPanelValue571 = (popcornElectronWorkbookPanelParam179, popcornElectronWorkbookPanelParam180) => {
          let popcornElectronWorkbookPanelValue1096 = popcornElectronWorkbookPanelHelper12({
            camera: runtime.getCamera(),
            screenX: popcornElectronWorkbookPanelParam179 - popcornElectronWorkbookPanelValue570.left,
            screenY: popcornElectronWorkbookPanelParam180 - popcornElectronWorkbookPanelValue570.top,
            freezePanes: snapshot.freezePanes,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights
          });
          return {
            x: popcornElectronWorkbookPanelValue1096.x,
            y: popcornElectronWorkbookPanelValue1096.y
          };
        },
        popcornElectronWorkbookPanelValue572 = (popcornElectronWorkbookPanelParam191, popcornElectronWorkbookPanelParam192) => {
          let popcornElectronWorkbookPanelValue1125 = popcornElectronWorkbookPanelValue571(popcornElectronWorkbookPanelParam191, popcornElectronWorkbookPanelParam192);
          popcornElectronWorkbookPanelValue197(popcornElectronWorkbookPanelParam222 => {
            if (!popcornElectronWorkbookPanelParam222) return popcornElectronWorkbookPanelParam222;
            let popcornElectronWorkbookPanelValue1194 = popcornElectronWorkbookPanelParam222.points[popcornElectronWorkbookPanelParam222.points.length - 1];
            return popcornElectronWorkbookPanelValue1194 && Math.hypot(popcornElectronWorkbookPanelValue1125.x - popcornElectronWorkbookPanelValue1194.x, popcornElectronWorkbookPanelValue1125.y - popcornElectronWorkbookPanelValue1194.y) < 0.5 ? popcornElectronWorkbookPanelParam222 : {
              ...popcornElectronWorkbookPanelParam222,
              points: [...popcornElectronWorkbookPanelParam222.points, popcornElectronWorkbookPanelValue1125]
            };
          });
        };
      popcornElectronWorkbookPanelValue197({
        color: popcornElectronSurfaceStyleF,
        strokeWidth: 3,
        points: [popcornElectronWorkbookPanelValue571(event.clientX, event.clientY)]
      });
      let popcornElectronWorkbookPanelValue573 = _event => {
          popcornElectronWorkbookPanelValue572(_event.clientX, _event.clientY);
        },
        popcornElectronWorkbookPanelValue574 = popcornElectronWorkbookPanelParam423 => {
          let popcornElectronWorkbookPanelValue1360 = popcornElectronWorkbookPanelValue184.current;
          popcornElectronWorkbookPanelValue202();
          popcornElectronWorkbookPanelValue197(null);
          popcornElectronWorkbookPanelParam423 && popcornElectronWorkbookPanelValue205(popcornElectronWorkbookPanelValue1360);
        },
        popcornElectronWorkbookPanelValue575 = () => {
          popcornElectronWorkbookPanelValue574(true);
        },
        popcornElectronWorkbookPanelValue576 = () => {
          popcornElectronWorkbookPanelValue574(false);
        };
      window.addEventListener("mousemove", popcornElectronWorkbookPanelValue573);
      window.addEventListener("mouseup", popcornElectronWorkbookPanelValue575, {
        once: true
      });
      window.addEventListener("blur", popcornElectronWorkbookPanelValue576, {
        once: true
      });
      popcornElectronWorkbookPanelValue189.current = () => {
        window.removeEventListener("mousemove", popcornElectronWorkbookPanelValue573);
        window.removeEventListener("mouseup", popcornElectronWorkbookPanelValue575);
        window.removeEventListener("blur", popcornElectronWorkbookPanelValue576);
      };
    }, [popcornElectronWorkbookPanelValue202, popcornElectronWorkbookPanelValue205, popcornElectronWorkbookPanelValue199, runtime, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights, popcornElectronWorkbookPanelValue197]),
    popcornElectronWorkbookPanelValue208 = React.useCallback(() => {
      let popcornElectronWorkbookPanelValue697 = popcornElectronWorkbookPanelValue179.current;
      if (!popcornElectronWorkbookPanelValue171 || !annotationMode || !popcornElectronWorkbookPanelValue697) {
        popcornElectronWorkbookPanelValue179.current = null;
        return;
      }
      if (snapshot.isDraggingSelection) {
        window.requestAnimationFrame(() => {
          popcornElectronWorkbookPanelValue181(popcornElectronWorkbookPanelParam618 => popcornElectronWorkbookPanelParam618 + 1);
        });
        return;
      }
      popcornElectronWorkbookPanelValue179.current = null;
      let popcornElectronWorkbookPanelValue698 = popcornElectronWorkbookPanelValue697.kind === "range" ? popcornElectronWorkbookPanelValue697.selectionSummary ?? selectionSummary : selectionSummary,
        popcornElectronWorkbookPanelValue699 = popcornElectronWorkbookPanelValue697.kind === "floating" ? popcornElectronWorkbookPanelHelper54({
          sheetName: snapshot.activeSheetName,
          selectedFloatingElement: popcornElectronWorkbookPanelValue697.selectedFloatingElement,
          anchorPoint: popcornElectronWorkbookPanelValue697.anchorPoint
        }) : popcornElectronWorkbookPanelHelper53({
          sheetName: snapshot.activeSheetName,
          selectionSummary: popcornElectronWorkbookPanelValue698,
          anchorPoint: popcornElectronWorkbookPanelValue697.anchorPoint
        });
      popcornElectronWorkbookPanelValue699 && (reviewTools?.annotation?.onStart?.("annotation_mode_pointer", {
        annotationMode
      }), popcornElectronWorkbookPanelValue177.current = false, popcornElectronWorkbookPanelValue174({
        mode: "create",
        target: popcornElectronWorkbookPanelValue699,
        body: ""
      }));
    }, [popcornElectronWorkbookPanelValue171, annotationMode, selectionSummary, snapshot.activeSheetName, snapshot.isDraggingSelection, reviewTools?.annotation]),
    popcornElectronWorkbookPanelValue209 = React.useCallback(popcornElectronWorkbookPanelParam20 => {
      if (!popcornElectronWorkbookPanelValue171 || !annotationMode) return;
      popcornElectronWorkbookPanelValue198();
      popcornElectronWorkbookPanelValue179.current = popcornElectronWorkbookPanelParam20;
      let popcornElectronWorkbookPanelValue483 = popcornElectronWorkbookPanelParam32 => {
          if (popcornElectronWorkbookPanelValue198(), !popcornElectronWorkbookPanelParam32) {
            popcornElectronWorkbookPanelValue179.current = null;
            return;
          }
          if (popcornElectronWorkbookPanelParam20.kind === "range" && popcornElectronWorkbookPanelParam20.draftClickAction != null && popcornElectronWorkbookPanelParam20.draftClickAction !== "replace" && popcornElectronWorkbookPanelParam20.shouldOpenDraftOnRelease?.() === false) {
            popcornElectronWorkbookPanelValue179.current = null;
            popcornElectronWorkbookPanelParam20.draftClickAction === "keep" && popcornElectronWorkbookPanelParam20.wasDraftLightDismissArmed !== true ? (popcornElectronWorkbookPanelValue174(popcornElectronWorkbookPanelParam238 => {
              if (popcornElectronWorkbookPanelParam238?.mode !== "create" || popcornElectronWorkbookPanelParam20.draftBody == null) return popcornElectronWorkbookPanelParam238;
              let popcornElectronWorkbookPanelValue1224 = {
                ...popcornElectronWorkbookPanelParam238,
                body: popcornElectronWorkbookPanelParam20.draftBody
              };
              return popcornElectronWorkbookPanelValue175.current = popcornElectronWorkbookPanelValue1224, popcornElectronWorkbookPanelValue1224;
            }), popcornElectronWorkbookPanelValue177.current = true, popcornElectronSurfaceStyleA(popcornElectronWorkbookPanelValue176.current)) : popcornElectronWorkbookPanelValue201();
            return;
          }
          if (popcornElectronWorkbookPanelParam20.kind === "range") {
            let popcornElectronWorkbookPanelValue960 = popcornElectronWorkbookPanelParam20.getSelectionSummary?.();
            popcornElectronWorkbookPanelValue960 != null && (popcornElectronWorkbookPanelValue179.current = {
              kind: "range",
              anchorPoint: popcornElectronWorkbookPanelParam20.anchorPoint,
              selectionSummary: popcornElectronWorkbookPanelValue960,
              draftClickAction: popcornElectronWorkbookPanelParam20.draftClickAction,
              draftBody: popcornElectronWorkbookPanelParam20.draftBody,
              wasDraftLightDismissArmed: popcornElectronWorkbookPanelParam20.wasDraftLightDismissArmed,
              shouldOpenDraftOnRelease: popcornElectronWorkbookPanelParam20.shouldOpenDraftOnRelease
            });
          }
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              popcornElectronWorkbookPanelValue181(popcornElectronWorkbookPanelParam619 => popcornElectronWorkbookPanelParam619 + 1);
            });
          });
        },
        popcornElectronWorkbookPanelValue484 = () => {
          popcornElectronWorkbookPanelValue483(true);
        },
        popcornElectronWorkbookPanelValue485 = () => {
          popcornElectronWorkbookPanelValue483(false);
        };
      window.addEventListener("mouseup", popcornElectronWorkbookPanelValue484, {
        once: true
      });
      window.addEventListener("blur", popcornElectronWorkbookPanelValue485, {
        once: true
      });
      popcornElectronWorkbookPanelValue178.current = () => {
        window.removeEventListener("mouseup", popcornElectronWorkbookPanelValue484);
        window.removeEventListener("blur", popcornElectronWorkbookPanelValue485);
      };
    }, [popcornElectronWorkbookPanelValue171, annotationMode, popcornElectronWorkbookPanelValue198, popcornElectronWorkbookPanelValue201]),
    popcornElectronWorkbookPanelValue210 = React.useCallback((popcornElectronWorkbookPanelParam293, popcornElectronWorkbookPanelParam294) => {
      reviewTools?.annotation?.onStart?.(popcornElectronWorkbookPanelParam294, {
        annotationMode
      });
      popcornElectronWorkbookPanelValue177.current = false;
      popcornElectronWorkbookPanelValue174({
        mode: "create",
        target: popcornElectronWorkbookPanelParam293,
        body: ""
      });
    }, [annotationMode, reviewTools?.annotation]),
    popcornElectronWorkbookPanelValue211 = React.useCallback(event => {
      popcornElectronWorkbookPanelValue177.current = false;
      popcornElectronWorkbookPanelValue192(event.annotationId);
      popcornElectronWorkbookPanelValue174({
        mode: "edit",
        annotationId: event.annotationId,
        target: event.target,
        body: event.body
      });
    }, [annotations]),
    popcornElectronWorkbookPanelValue212 = React.useCallback((popcornElectronWorkbookPanelParam68 = "saved", popcornElectronWorkbookPanelParam69 = "button") => {
      if (!popcornElectronWorkbookPanelValue173?.target) return;
      let popcornElectronWorkbookPanelValue703 = popcornElectronWorkbookPanelValue173.body.trim();
      if (popcornElectronWorkbookPanelValue703.length === 0) return;
      if (popcornElectronWorkbookPanelValue173.mode === "edit") {
        updatePendingAnnotation(popcornElectronWorkbookPanelValue173.annotationId, {
          body: popcornElectronWorkbookPanelValue703
        });
        reviewTools?.annotation?.onUpdate?.({
          annotationId: popcornElectronWorkbookPanelValue173.annotationId,
          artifactKind: "workbook",
          label: popcornElectronWorkbookPanelHelper55(popcornElectronWorkbookPanelValue173.target),
          body: popcornElectronWorkbookPanelValue703,
          target: popcornElectronWorkbookPanelValue173.target
        });
        popcornElectronWorkbookPanelValue200();
        return;
      }
      let popcornElectronWorkbookPanelValue704 = {
        annotationId: popcornElectronSurfaceStyleN("annotation"),
        artifactKind: "workbook",
        label: popcornElectronWorkbookPanelHelper55(popcornElectronWorkbookPanelValue173.target),
        body: popcornElectronWorkbookPanelValue703,
        target: popcornElectronWorkbookPanelValue173.target
      };
      addPendingAnnotation(popcornElectronWorkbookPanelValue704);
      popcornElectronWorkbookPanelParam68 === "direct" ? (reviewTools?.annotation?.onDirectSubmit ?? reviewTools?.annotation?.onSubmit)?.(popcornElectronWorkbookPanelValue704) : reviewTools?.annotation?.onSubmit?.(popcornElectronWorkbookPanelValue704);
      reviewTools?.annotation?.onSubmitted?.(popcornElectronWorkbookPanelValue704, popcornElectronWorkbookPanelParam68, popcornElectronWorkbookPanelParam69, {
        annotationMode
      });
      popcornElectronWorkbookPanelValue200();
    }, [addPendingAnnotation, popcornElectronWorkbookPanelValue173, annotationMode, popcornElectronWorkbookPanelValue200, reviewTools?.annotation, updatePendingAnnotation]),
    _e = React.useCallback(() => {
      popcornElectronWorkbookPanelValue173?.mode === "edit" && (dismissAnnotation(popcornElectronWorkbookPanelValue173.annotationId), popcornElectronWorkbookPanelValue192(popcornElectronWorkbookPanelParam578 => popcornElectronWorkbookPanelParam578 === popcornElectronWorkbookPanelValue173.annotationId ? null : popcornElectronWorkbookPanelParam578), popcornElectronWorkbookPanelValue200());
    }, [popcornElectronWorkbookPanelValue173, popcornElectronWorkbookPanelValue200, dismissAnnotation]);
  React.useEffect(() => {
    (!popcornElectronWorkbookPanelValue171 || !annotationMode) && (popcornElectronWorkbookPanelValue179.current = null, popcornElectronWorkbookPanelValue198());
    popcornElectronWorkbookPanelValue171 || popcornElectronWorkbookPanelValue173?.mode !== "edit" && popcornElectronWorkbookPanelValue174(null);
  }, [popcornElectronWorkbookPanelValue171, popcornElectronWorkbookPanelValue173?.mode, annotationMode, popcornElectronWorkbookPanelValue198]);
  React.useEffect(() => {
    if (drawingCommitToken === popcornElectronWorkbookPanelValue190.current) return;
    popcornElectronWorkbookPanelValue190.current = drawingCommitToken;
    let popcornElectronWorkbookPanelValue1260 = popcornElectronWorkbookPanelValue187.current;
    if (popcornElectronWorkbookPanelValue1260.length === 0) {
      popcornElectronWorkbookPanelValue203();
      return;
    }
    popcornElectronWorkbookPanelValue206(popcornElectronWorkbookPanelValue1260);
    popcornElectronWorkbookPanelValue203();
  }, [popcornElectronWorkbookPanelValue203, drawingCommitToken, popcornElectronWorkbookPanelValue206]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue172 && drawingMode || (popcornElectronWorkbookPanelValue202(), popcornElectronWorkbookPanelValue197(null), popcornElectronWorkbookPanelValue187.current.length > 0 && popcornElectronWorkbookPanelValue203());
  }, [popcornElectronWorkbookPanelValue202, popcornElectronWorkbookPanelValue203, popcornElectronWorkbookPanelValue172, drawingMode, popcornElectronWorkbookPanelValue197]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue188.current == null || popcornElectronWorkbookPanelValue188.current === snapshot.activeSheetName || popcornElectronWorkbookPanelValue203();
  }, [popcornElectronWorkbookPanelValue203, snapshot.activeSheetName]);
  React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue173) return;
    if (popcornElectronWorkbookPanelValue173.target.sheetName !== snapshot.activeSheetName) {
      popcornElectronWorkbookPanelValue192(null);
      popcornElectronWorkbookPanelValue174(null);
      return;
    }
    let popcornElectronWorkbookPanelValue869 = event => {
      let popcornElectronWorkbookPanelValue1159 = event.target;
      popcornElectronWorkbookPanelValue1159 instanceof Node && (popcornElectronWorkbookPanelValue176.current?.contains(popcornElectronWorkbookPanelValue1159) || popcornElectronWorkbookPanelValue1159 instanceof HTMLElement && popcornElectronWorkbookPanelValue1159.closest("[data-popcorn-annotation-marker='true']") || hostRef.current?.contains(popcornElectronWorkbookPanelValue1159) || popcornElectronWorkbookPanelValue201());
    };
    return document.addEventListener("mousedown", popcornElectronWorkbookPanelValue869, true), () => {
      document.removeEventListener("mousedown", popcornElectronWorkbookPanelValue869, true);
    };
  }, [popcornElectronWorkbookPanelValue173, hostRef, popcornElectronWorkbookPanelValue201, snapshot.activeSheetName]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue180 <= 0 || popcornElectronWorkbookPanelValue208();
  }, [popcornElectronWorkbookPanelValue180, popcornElectronWorkbookPanelValue208]);
  React.useEffect(() => {
    let popcornElectronWorkbookPanelValue1073 = hostRef.current,
      popcornElectronWorkbookPanelValue1074 = canvasRef.current;
    if (!popcornElectronWorkbookPanelValue1073 || !popcornElectronWorkbookPanelValue1074) return;
    let popcornElectronWorkbookPanelValue1075 = popcornElectronWorkbookPanelValue172 && drawingMode ? "crosshair" : popcornElectronWorkbookPanelValue171 && annotationMode && !popcornElectronWorkbookPanelValue173 ? popcornElectronSurfaceStyleV : "";
    return popcornElectronWorkbookPanelValue1073.style.cursor = popcornElectronWorkbookPanelValue1075, popcornElectronWorkbookPanelValue1074.style.cursor = popcornElectronWorkbookPanelValue1075, () => {
      popcornElectronWorkbookPanelValue1073.style.cursor === popcornElectronWorkbookPanelValue1075 && (popcornElectronWorkbookPanelValue1073.style.cursor = "");
      popcornElectronWorkbookPanelValue1074.style.cursor === popcornElectronWorkbookPanelValue1075 && (popcornElectronWorkbookPanelValue1074.style.cursor = "");
    };
  }, [popcornElectronWorkbookPanelValue173, popcornElectronWorkbookPanelValue171, annotationMode, canvasRef, popcornElectronWorkbookPanelValue172, drawingMode, hostRef]);
  React.useEffect(() => () => {
    popcornElectronWorkbookPanelValue198();
    popcornElectronWorkbookPanelValue202();
  }, [popcornElectronWorkbookPanelValue198, popcornElectronWorkbookPanelValue202]);
  let popcornElectronWorkbookPanelValue213 = React.useMemo(() => popcornElectronWorkbookPanelValue173?.target ? popcornElectronWorkbookPanelHelper61({
      target: popcornElectronWorkbookPanelValue173.target,
      camera,
      freezePanes: snapshot.freezePanes,
      columnWidths: snapshot.columnWidths,
      rowHeights: snapshot.rowHeights,
      sheet: {
        mergedCells
      }
    }) : null, [popcornElectronWorkbookPanelValue173?.target, camera, mergedCells, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue214 = React.useMemo(() => popcornElectronWorkbookPanelValue173?.target ? popcornElectronWorkbookPanelHelper62({
      target: popcornElectronWorkbookPanelValue173.target,
      camera,
      freezePanes: snapshot.freezePanes,
      columnWidths: snapshot.columnWidths,
      rowHeights: snapshot.rowHeights,
      sheet: {
        mergedCells
      }
    }) : null, [popcornElectronWorkbookPanelValue173?.target, camera, mergedCells, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue215 = React.useMemo(() => popcornElectronWorkbookPanelValue195.map(item => ({
      annotation: item,
      bounds: popcornElectronWorkbookPanelHelper61({
        target: item.target,
        camera,
        freezePanes: snapshot.freezePanes,
        columnWidths: snapshot.columnWidths,
        rowHeights: snapshot.rowHeights,
        sheet: {
          mergedCells
        }
      }),
      anchorBounds: popcornElectronWorkbookPanelHelper62({
        target: item.target,
        camera,
        freezePanes: snapshot.freezePanes,
        columnWidths: snapshot.columnWidths,
        rowHeights: snapshot.rowHeights,
        sheet: {
          mergedCells
        }
      })
    })).filter(item => item.bounds != null && item.anchorBounds != null), [popcornElectronWorkbookPanelValue214, popcornElectronWorkbookPanelValue213, camera, mergedCells, popcornElectronWorkbookPanelValue195, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue216 = React.useMemo(() => popcornElectronWorkbookPanelValue191 == null || popcornElectronWorkbookPanelValue173?.mode === "edit" ? null : popcornElectronWorkbookPanelValue215.find(({
      annotation
    }) => annotation.annotationId === popcornElectronWorkbookPanelValue191) ?? null, [popcornElectronWorkbookPanelValue173?.mode, popcornElectronWorkbookPanelValue191, popcornElectronWorkbookPanelValue215]),
    popcornElectronWorkbookPanelValue217 = React.useMemo(() => !popcornElectronWorkbookPanelValue171 || !annotationMode || popcornElectronWorkbookPanelValue173?.mode !== "create" ? null : popcornElectronSurfaceStyleQ(annotations, popcornElectronWorkbookPanelValue173.target), [popcornElectronWorkbookPanelValue173, popcornElectronWorkbookPanelValue171, annotationMode, annotations]);
  return {
    annotationEnabled: popcornElectronWorkbookPanelValue171,
    drawingEnabled: popcornElectronWorkbookPanelValue172,
    annotationEditorSession: popcornElectronWorkbookPanelValue173,
    annotationEditorSessionRef: popcornElectronWorkbookPanelValue175,
    annotationEditorLightDismissArmedRef: popcornElectronWorkbookPanelValue177,
    annotationEditorRef: popcornElectronWorkbookPanelValue176,
    annotationEditorAnchorBounds: popcornElectronWorkbookPanelValue214,
    annotationHighlightBounds: popcornElectronWorkbookPanelValue213,
    annotationRangeHighlights: React.useMemo(() => {
      let popcornElectronWorkbookPanelValue1041 = popcornElectronWorkbookPanelValue173?.mode === "edit" ? popcornElectronWorkbookPanelValue173.annotationId : null,
        popcornElectronWorkbookPanelValue1042 = [];
      for (let popcornElectronWorkbookPanelValue1294 of popcornElectronWorkbookPanelValue195) popcornElectronWorkbookPanelValue1294.annotationId === popcornElectronWorkbookPanelValue1041 || popcornElectronWorkbookPanelValue1294.target.type !== "workbook-range" || popcornElectronWorkbookPanelValue1042.push(popcornElectronWorkbookPanelHelper56({
        rect: popcornElectronWorkbookPanelValue1294.target.rect,
        color: annotationRangeHighlightColor
      }));
      return popcornElectronWorkbookPanelValue173?.target.type === "workbook-range" && !snapshot.isDraggingSelection && popcornElectronWorkbookPanelValue1042.push(popcornElectronWorkbookPanelHelper56({
        rect: popcornElectronWorkbookPanelValue173.target.rect,
        color: annotationRangeHighlightColor
      })), popcornElectronWorkbookPanelValue1042;
    }, [popcornElectronWorkbookPanelValue173, annotationRangeHighlightColor, snapshot.isDraggingSelection, popcornElectronWorkbookPanelValue195]),
    pendingAnnotationMarkers: popcornElectronWorkbookPanelValue215,
    hoveredAnnotationMarker: popcornElectronWorkbookPanelValue216,
    draftAnnotationMarkerNumber: popcornElectronWorkbookPanelValue217,
    activeDrawingStroke: popcornElectronWorkbookPanelValue182,
    activeDrawingStrokeRef: popcornElectronWorkbookPanelValue184,
    draftDrawingStrokes: popcornElectronWorkbookPanelValue185,
    visiblePendingDrawings: popcornElectronWorkbookPanelValue196,
    closeAnnotationEditor: popcornElectronWorkbookPanelValue200,
    requestAnnotationEditorDismiss: popcornElectronWorkbookPanelValue201,
    deleteAnnotationEditor: _e,
    submitAnnotationEditor: popcornElectronWorkbookPanelValue212,
    beginDrawingSession: popcornElectronWorkbookPanelValue207,
    cleanupDrawingSession: popcornElectronWorkbookPanelValue202,
    queueAnnotationDraftOpen: popcornElectronWorkbookPanelValue209,
    openCreateAnnotationEditor: popcornElectronWorkbookPanelValue210,
    projectWorkbookDrawingPointToViewport: popcornElectronWorkbookPanelValue204,
    handleAnnotationEditorChange: React.useCallback(popcornElectronWorkbookPanelParam318 => {
      popcornElectronWorkbookPanelValue177.current = false;
      let popcornElectronWorkbookPanelValue1298 = popcornElectronWorkbookPanelValue175.current;
      if (!popcornElectronWorkbookPanelValue1298) return;
      let popcornElectronWorkbookPanelValue1299 = {
        ...popcornElectronWorkbookPanelValue1298,
        body: popcornElectronWorkbookPanelParam318
      };
      popcornElectronWorkbookPanelValue175.current = popcornElectronWorkbookPanelValue1299;
      popcornElectronWorkbookPanelValue174(popcornElectronWorkbookPanelValue1299);
    }, []),
    getAnnotationMarkerMouseEnterHandler: React.useCallback(popcornElectronWorkbookPanelParam587 => () => {
      popcornElectronWorkbookPanelValue192(popcornElectronWorkbookPanelParam587);
    }, []),
    getAnnotationMarkerMouseLeaveHandler: React.useCallback(popcornElectronWorkbookPanelParam524 => () => {
      popcornElectronWorkbookPanelValue192(popcornElectronWorkbookPanelParam602 => popcornElectronWorkbookPanelParam602 === popcornElectronWorkbookPanelParam524 ? null : popcornElectronWorkbookPanelParam602);
    }, []),
    getAnnotationMarkerFocusHandler: React.useCallback(popcornElectronWorkbookPanelParam588 => () => {
      popcornElectronWorkbookPanelValue192(popcornElectronWorkbookPanelParam588);
    }, []),
    getAnnotationMarkerBlurHandler: React.useCallback(popcornElectronWorkbookPanelParam525 => () => {
      popcornElectronWorkbookPanelValue192(popcornElectronWorkbookPanelParam603 => popcornElectronWorkbookPanelParam603 === popcornElectronWorkbookPanelParam525 ? null : popcornElectronWorkbookPanelParam603);
    }, []),
    getAnnotationMarkerClickHandler: React.useCallback(popcornElectronWorkbookPanelParam584 => () => {
      popcornElectronWorkbookPanelValue211(popcornElectronWorkbookPanelParam584);
    }, [popcornElectronWorkbookPanelValue211, annotations])
  };
}
var popcornElectronWorkbookPanelValue38 = null;
function popcornElectronWorkbookPanelHelper116(popcornElectronWorkbookPanelParam458) {
  return popcornElectronWorkbookPanelParam458.snapshot.editorMode === "grid" && !popcornElectronWorkbookPanelParam458.inputFocused;
}
function popcornElectronWorkbookPanelHelper117(popcornElectronWorkbookPanelParam467) {
  return popcornElectronWorkbookPanelParam467.selectedFloatingElement?.kind === "xlsx-chart";
}
function popcornElectronWorkbookPanelHelper118(popcornElectronWorkbookPanelParam334) {
  if (typeof document > "u" || !popcornElectronWorkbookPanelParam334) return false;
  let popcornElectronWorkbookPanelValue1309 = document.activeElement;
  return popcornElectronWorkbookPanelValue1309 != null && popcornElectronWorkbookPanelParam334.contains(popcornElectronWorkbookPanelValue1309);
}
function popcornElectronWorkbookPanelHelper119(popcornElectronWorkbookPanelParam267) {
  return popcornElectronWorkbookPanelParam267 instanceof Element ? popcornElectronWorkbookPanelParam267.closest("input, textarea, [role='textbox'], [contenteditable]:not([contenteditable='false'])") != null : false;
}
function popcornElectronWorkbookPanelHelper120(event) {
  return popcornElectronWorkbookPanelHelper116({
    snapshot: event.snapshot,
    inputFocused: event.inputFocused
  }) && popcornElectronWorkbookPanelHelper118(event.container) && !popcornElectronWorkbookPanelHelper119(event.target);
}
function ui(event) {
  return event.clipboardData;
}
function popcornElectronWorkbookPanelHelper121(popcornElectronWorkbookPanelParam109) {
  let popcornElectronWorkbookPanelValue878 = ui(popcornElectronWorkbookPanelParam109);
  if (!popcornElectronWorkbookPanelValue878) return null;
  let popcornElectronWorkbookPanelValue879 = popcornElectronWorkbookPanelValue878.getData("text/html"),
    popcornElectronWorkbookPanelValue880 = popcornElectronWorkbookPanelValue878.getData("text/plain"),
    popcornElectronWorkbookPanelValue881 = popcornElectronWorkbookPanelValue878.getData("application/x-oai-popcorn-selection+json") || popcornElectronWorkbookPanelValue878.getData("application/json");
  if (popcornElectronWorkbookPanelValue881) try {
    let popcornElectronWorkbookPanelValue1275 = JSON.parse(popcornElectronWorkbookPanelValue881);
    if (Array.isArray(popcornElectronWorkbookPanelValue1275.values) && Array.isArray(popcornElectronWorkbookPanelValue1275.formulas)) return {
      ...popcornElectronWorkbookPanelValue1275,
      html: popcornElectronWorkbookPanelValue879 || popcornElectronWorkbookPanelValue1275.html,
      plainText: popcornElectronWorkbookPanelValue880 || popcornElectronWorkbookPanelValue1275.plainText
    };
  } catch {}
  return popcornElectronWorkbookPanelValue38 && popcornElectronWorkbookPanelValue880 === popcornElectronWorkbookPanelValue38.plainText && (!popcornElectronWorkbookPanelValue879 || popcornElectronWorkbookPanelValue879 === popcornElectronWorkbookPanelValue38.html) ? popcornElectronWorkbookPanelValue38.payload : popcornElectronWorkbookPanelValue879 ? popcornElectronWorkbookPanelHelper48(popcornElectronWorkbookPanelValue879, popcornElectronWorkbookPanelValue880 || undefined) : popcornElectronWorkbookPanelValue880 ? popcornElectronWorkbookPanelHelper47(popcornElectronWorkbookPanelValue880) : null;
}
async function popcornElectronWorkbookPanelHelper122(popcornElectronWorkbookPanelParam104) {
  let popcornElectronWorkbookPanelValue859 = ui(popcornElectronWorkbookPanelParam104);
  if (!popcornElectronWorkbookPanelValue859) return null;
  let popcornElectronWorkbookPanelValue860 = popcornElectronWorkbookPanelValue859.items;
  if (popcornElectronWorkbookPanelValue860 && popcornElectronWorkbookPanelValue860.length > 0) for (let popcornElectronWorkbookPanelValue1169 of Array.from(popcornElectronWorkbookPanelValue860)) {
    if (popcornElectronWorkbookPanelValue1169.kind !== "file" || !popcornElectronWorkbookPanelValue1169.type.startsWith("image/")) continue;
    let popcornElectronWorkbookPanelValue1207 = popcornElectronWorkbookPanelValue1169.getAsFile();
    if (popcornElectronWorkbookPanelValue1207) return {
      bytes: await popcornElectronWorkbookPanelValue1207.arrayBuffer(),
      contentType: popcornElectronWorkbookPanelValue1207.type || "image/png"
    };
  }
  let popcornElectronWorkbookPanelValue861 = popcornElectronWorkbookPanelValue859.files;
  if (popcornElectronWorkbookPanelValue861 && popcornElectronWorkbookPanelValue861.length > 0) {
    for (let popcornElectronWorkbookPanelValue1261 of Array.from(popcornElectronWorkbookPanelValue861)) if (popcornElectronWorkbookPanelValue1261.type.startsWith("image/")) return {
      bytes: await popcornElectronWorkbookPanelValue1261.arrayBuffer(),
      contentType: popcornElectronWorkbookPanelValue1261.type || "image/png"
    };
  }
  return null;
}
async function popcornElectronWorkbookPanelHelper123(popcornElectronWorkbookPanelParam139) {
  let popcornElectronWorkbookPanelValue1004 = await popcornElectronWorkbookPanelParam139.requestSelectedFloatingRasterPayload();
  if (!popcornElectronWorkbookPanelValue1004 || typeof navigator > "u" || !navigator.clipboard || typeof navigator.clipboard.write != "function" || typeof ClipboardItem > "u") return false;
  let popcornElectronWorkbookPanelValue1005 = new Blob([popcornElectronWorkbookPanelValue1004.bytes], {
    type: popcornElectronWorkbookPanelValue1004.contentType || "image/png"
  });
  return await navigator.clipboard.write([new ClipboardItem({
    [popcornElectronWorkbookPanelValue1005.type || "image/png"]: popcornElectronWorkbookPanelValue1005
  })]), true;
}
function popcornElectronWorkbookPanelHelper124(popcornElectronWorkbookPanelParam135) {
  let popcornElectronWorkbookPanelValue1002 = popcornElectronWorkbookPanelParam135.html ?? popcornElectronWorkbookPanelHelper46(popcornElectronWorkbookPanelParam135.values),
    {
      html,
      ...rest
    } = popcornElectronWorkbookPanelParam135,
    popcornElectronWorkbookPanelValue1003 = {
      "text/plain": new Blob([popcornElectronWorkbookPanelParam135.plainText], {
        type: "text/plain"
      }),
      "text/html": new Blob([popcornElectronWorkbookPanelValue1002], {
        type: "text/html"
      })
    };
  return {
    html: popcornElectronWorkbookPanelValue1002,
    baseData: popcornElectronWorkbookPanelValue1003,
    richData: {
      ...popcornElectronWorkbookPanelValue1003,
      ["application/x-oai-popcorn-selection+json"]: new Blob([JSON.stringify(rest)], {
        type: "application/x-oai-popcorn-selection+json"
      }),
      "application/json": new Blob([JSON.stringify(rest)], {
        type: "application/json"
      })
    }
  };
}
async function popcornElectronWorkbookPanelHelper125(popcornElectronWorkbookPanelParam87, popcornElectronWorkbookPanelParam88) {
  let popcornElectronWorkbookPanelValue777 = await popcornElectronWorkbookPanelParam87.requestClipboardPayload(popcornElectronWorkbookPanelParam88);
  if (!popcornElectronWorkbookPanelValue777) return false;
  let {
    html,
    baseData,
    richData
  } = popcornElectronWorkbookPanelHelper124(popcornElectronWorkbookPanelValue777);
  if (popcornElectronWorkbookPanelValue38 = {
    payload: popcornElectronWorkbookPanelValue777,
    html,
    plainText: popcornElectronWorkbookPanelValue777.plainText
  }, typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.write == "function" && typeof ClipboardItem < "u") try {
    return await navigator.clipboard.write([new ClipboardItem(richData)]), true;
  } catch {
    try {
      return await navigator.clipboard.write([new ClipboardItem(baseData)]), true;
    } catch {}
  }
  return typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.writeText == "function" ? (await navigator.clipboard.writeText(popcornElectronWorkbookPanelValue777.plainText), true) : false;
}
function popcornElectronWorkbookPanelHelper126(popcornElectronWorkbookPanelParam14) {
  let {
      controller,
      snapshot,
      inputFocused,
      containerRef
    } = popcornElectronWorkbookPanelParam14,
    popcornElectronWorkbookPanelValue443 = React.useCallback((event, popcornElectronWorkbookPanelParam127) => popcornElectronWorkbookPanelHelper120({
      container: containerRef.current,
      inputFocused,
      snapshot,
      target: event.target
    }) ? snapshot.selectedFloatingElement ? popcornElectronWorkbookPanelHelper117(snapshot) && popcornElectronWorkbookPanelParam127 === "copy" ? (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelHelper123(controller).catch(() => {}), true) : false : (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelHelper125(controller, popcornElectronWorkbookPanelParam127).catch(() => {}), true) : false, [containerRef, controller, inputFocused, snapshot]),
    popcornElectronWorkbookPanelValue444 = React.useCallback(popcornElectronWorkbookPanelParam583 => {
      popcornElectronWorkbookPanelValue443(popcornElectronWorkbookPanelParam583, "copy");
    }, [popcornElectronWorkbookPanelValue443]),
    popcornElectronWorkbookPanelValue445 = React.useCallback(popcornElectronWorkbookPanelParam585 => {
      popcornElectronWorkbookPanelValue443(popcornElectronWorkbookPanelParam585, "cut");
    }, [popcornElectronWorkbookPanelValue443]),
    popcornElectronWorkbookPanelValue446 = React.useCallback(event => {
      popcornElectronWorkbookPanelHelper120({
        container: containerRef.current,
        inputFocused,
        snapshot,
        target: event.target
      }) && (event.preventDefault(), event.stopPropagation(), (async () => {
        let popcornElectronWorkbookPanelValue1167 = await popcornElectronWorkbookPanelHelper122(event);
        if (popcornElectronWorkbookPanelValue1167) {
          controller.pasteRasterClipboardData(popcornElectronWorkbookPanelValue1167);
          return;
        }
        let popcornElectronWorkbookPanelValue1168 = popcornElectronWorkbookPanelHelper121(event);
        popcornElectronWorkbookPanelValue1168 && controller.dispatch({
          type: "paste-clipboard-data",
          clipboard: popcornElectronWorkbookPanelValue1168
        });
      })().catch(() => {}));
    }, [containerRef, controller, inputFocused, snapshot]);
  return React.useEffect(() => {
    let popcornElectronWorkbookPanelValue676 = popcornElectronWorkbookPanelParam574 => {
        popcornElectronWorkbookPanelValue443(popcornElectronWorkbookPanelParam574, "copy");
      },
      popcornElectronWorkbookPanelValue677 = popcornElectronWorkbookPanelParam576 => {
        popcornElectronWorkbookPanelValue443(popcornElectronWorkbookPanelParam576, "cut");
      },
      popcornElectronWorkbookPanelValue678 = event => {
        popcornElectronWorkbookPanelHelper120({
          container: containerRef.current,
          inputFocused,
          snapshot,
          target: event.target
        }) && (event.preventDefault(), event.stopPropagation(), (async () => {
          let popcornElectronWorkbookPanelValue1153 = await popcornElectronWorkbookPanelHelper122(event);
          if (popcornElectronWorkbookPanelValue1153) {
            controller.pasteRasterClipboardData(popcornElectronWorkbookPanelValue1153);
            return;
          }
          let popcornElectronWorkbookPanelValue1154 = popcornElectronWorkbookPanelHelper121(event);
          popcornElectronWorkbookPanelValue1154 && controller.dispatch({
            type: "paste-clipboard-data",
            clipboard: popcornElectronWorkbookPanelValue1154
          });
        })().catch(() => {}));
      };
    return window.addEventListener("copy", popcornElectronWorkbookPanelValue676, true), window.addEventListener("cut", popcornElectronWorkbookPanelValue677, true), window.addEventListener("paste", popcornElectronWorkbookPanelValue678, true), () => {
      window.removeEventListener("copy", popcornElectronWorkbookPanelValue676, true);
      window.removeEventListener("cut", popcornElectronWorkbookPanelValue677, true);
      window.removeEventListener("paste", popcornElectronWorkbookPanelValue678, true);
    };
  }, [containerRef, controller, inputFocused, snapshot, popcornElectronWorkbookPanelValue443]), {
    onCopy: popcornElectronWorkbookPanelValue444,
    onCut: popcornElectronWorkbookPanelValue445,
    onPaste: popcornElectronWorkbookPanelValue446
  };
}
function _i(popcornElectronWorkbookPanelParam110) {
  let {
    selectionRect,
    colOffsets,
    rowOffsets
  } = popcornElectronWorkbookPanelParam110;
  if (!selectionRect || colOffsets.length === 0 || rowOffsets.length === 0) return null;
  let popcornElectronWorkbookPanelValue882 = Math.min(selectionRect.r1, selectionRect.r2),
    popcornElectronWorkbookPanelValue883 = Math.max(selectionRect.r1, selectionRect.r2),
    popcornElectronWorkbookPanelValue884 = Math.min(selectionRect.c1, selectionRect.c2),
    popcornElectronWorkbookPanelValue885 = Math.max(selectionRect.c1, selectionRect.c2);
  if (popcornElectronWorkbookPanelValue882 < 0 || popcornElectronWorkbookPanelValue884 < 0 || popcornElectronWorkbookPanelValue883 + 1 >= rowOffsets.length || popcornElectronWorkbookPanelValue885 + 1 >= colOffsets.length) return null;
  let popcornElectronWorkbookPanelValue886 = 40 + (colOffsets[popcornElectronWorkbookPanelValue884] ?? 0),
    popcornElectronWorkbookPanelValue887 = 20 + (rowOffsets[popcornElectronWorkbookPanelValue882] ?? 0),
    popcornElectronWorkbookPanelValue888 = (colOffsets[popcornElectronWorkbookPanelValue885 + 1] ?? 0) - (colOffsets[popcornElectronWorkbookPanelValue884] ?? 0),
    popcornElectronWorkbookPanelValue889 = (rowOffsets[popcornElectronWorkbookPanelValue883 + 1] ?? 0) - (rowOffsets[popcornElectronWorkbookPanelValue882] ?? 0);
  return !Number.isFinite(popcornElectronWorkbookPanelValue888) || !Number.isFinite(popcornElectronWorkbookPanelValue889) ? null : {
    left: popcornElectronWorkbookPanelValue886,
    top: popcornElectronWorkbookPanelValue887,
    width: popcornElectronWorkbookPanelValue888,
    height: popcornElectronWorkbookPanelValue889
  };
}
function popcornElectronWorkbookPanelHelper127(popcornElectronWorkbookPanelParam366) {
  return React.useMemo(() => _i(popcornElectronWorkbookPanelParam366), [popcornElectronWorkbookPanelParam366.colOffsets, popcornElectronWorkbookPanelParam366.rowOffsets, popcornElectronWorkbookPanelParam366.selectionRect]);
}
function popcornElectronWorkbookPanelHelper128(popcornElectronWorkbookPanelParam341, event) {
  let popcornElectronWorkbookPanelValue1316 = popcornElectronWorkbookPanelParam341?.getBoundingClientRect();
  return {
    x: event.clientX - (popcornElectronWorkbookPanelValue1316?.left ?? 0),
    y: event.clientY - (popcornElectronWorkbookPanelValue1316?.top ?? 0)
  };
}
function popcornElectronWorkbookPanelHelper129(popcornElectronWorkbookPanelParam7) {
  let popcornElectronWorkbookPanelValue362 = React.useRef(null),
    [popcornElectronWorkbookPanelValue363, popcornElectronWorkbookPanelValue364] = React.useState(0),
    popcornElectronWorkbookPanelValue365 = React.useRef(null),
    popcornElectronWorkbookPanelValue366 = React.useMemo(() => new _remoteTextEditSessionT({
      onPointerDown: (popcornElectronWorkbookPanelParam475, popcornElectronWorkbookPanelParam476) => {
        popcornElectronWorkbookPanelParam7.controller.textPointerDown(popcornElectronWorkbookPanelParam475, popcornElectronWorkbookPanelParam476);
      },
      onPointerMove: popcornElectronWorkbookPanelParam496 => {
        popcornElectronWorkbookPanelParam7.controller.textPointerMove(popcornElectronWorkbookPanelParam496);
      },
      onPointerUp: () => {
        popcornElectronWorkbookPanelParam7.controller.textPointerUp();
      },
      onSelectWordAtPoint: popcornElectronWorkbookPanelParam477 => {
        popcornElectronWorkbookPanelParam7.controller.textSelectWordAtPoint(popcornElectronWorkbookPanelParam477);
      },
      onSelectParagraphAtPoint: popcornElectronWorkbookPanelParam459 => {
        popcornElectronWorkbookPanelParam7.controller.textSelectParagraphAtPoint(popcornElectronWorkbookPanelParam459);
      },
      onActivateBlockEnd: popcornElectronWorkbookPanelParam451 => {
        popcornElectronWorkbookPanelParam7.controller.textActivateFloatingShapeText(popcornElectronWorkbookPanelParam451);
      },
      onClear: () => {
        popcornElectronWorkbookPanelParam7.controller.textClearFloatingShapeText();
      },
      onKeyDown: popcornElectronWorkbookPanelParam490 => {
        popcornElectronWorkbookPanelParam7.controller.textHandleKeyDown(popcornElectronWorkbookPanelParam490);
      },
      onBeforeInput: popcornElectronWorkbookPanelParam478 => {
        popcornElectronWorkbookPanelParam7.controller.textHandleBeforeInput(popcornElectronWorkbookPanelParam478);
      },
      onInput: popcornElectronWorkbookPanelParam497 => {
        popcornElectronWorkbookPanelParam7.controller.textHandleInput(popcornElectronWorkbookPanelParam497);
      },
      onCompositionEnd: popcornElectronWorkbookPanelParam465 => {
        popcornElectronWorkbookPanelParam7.controller.textHandleCompositionEnd(popcornElectronWorkbookPanelParam465);
      }
    }, {
      onChange: () => {
        popcornElectronWorkbookPanelValue364(popcornElectronWorkbookPanelParam620 => popcornElectronWorkbookPanelParam620 + 1);
      }
    }), [popcornElectronWorkbookPanelParam7.controller]),
    popcornElectronWorkbookPanelValue367 = React.useCallback(() => {
      let popcornElectronWorkbookPanelValue849 = popcornElectronWorkbookPanelValue362.current,
        popcornElectronWorkbookPanelValue850 = popcornElectronWorkbookPanelParam7.canvasRef.current,
        popcornElectronWorkbookPanelValue851 = popcornElectronWorkbookPanelParam7.hostRef.current;
      if (!popcornElectronWorkbookPanelValue849) return;
      let popcornElectronWorkbookPanelValue852 = popcornElectronWorkbookPanelValue850?.clientWidth ?? popcornElectronWorkbookPanelValue851?.clientWidth ?? 0,
        popcornElectronWorkbookPanelValue853 = popcornElectronWorkbookPanelValue850?.clientHeight ?? popcornElectronWorkbookPanelValue851?.clientHeight ?? 0;
      if (popcornElectronWorkbookPanelValue852 <= 0 || popcornElectronWorkbookPanelValue853 <= 0) return;
      let popcornElectronWorkbookPanelValue854 = window.devicePixelRatio || 1;
      popcornElectronWorkbookPanelValue849.width = Math.max(1, Math.round(popcornElectronWorkbookPanelValue852 * popcornElectronWorkbookPanelValue854));
      popcornElectronWorkbookPanelValue849.height = Math.max(1, Math.round(popcornElectronWorkbookPanelValue853 * popcornElectronWorkbookPanelValue854));
      popcornElectronWorkbookPanelValue849.style.width = `${popcornElectronWorkbookPanelValue852}px`;
      popcornElectronWorkbookPanelValue849.style.height = `${popcornElectronWorkbookPanelValue853}px`;
      let popcornElectronWorkbookPanelValue855 = popcornElectronWorkbookPanelValue849.getContext("2d");
      popcornElectronWorkbookPanelValue855 && (popcornElectronWorkbookPanelValue855.setTransform(popcornElectronWorkbookPanelValue854, 0, 0, popcornElectronWorkbookPanelValue854, 0, 0), popcornElectronWorkbookPanelValue855.clearRect(0, 0, popcornElectronWorkbookPanelValue852, popcornElectronWorkbookPanelValue853), popcornElectronWorkbookPanelValue366.drawOverlay(popcornElectronWorkbookPanelValue855));
    }, [popcornElectronWorkbookPanelParam7.canvasRef, popcornElectronWorkbookPanelParam7.hostRef, popcornElectronWorkbookPanelValue366]);
  React.useEffect(() => (popcornElectronWorkbookPanelValue366.attachContainer(popcornElectronWorkbookPanelParam7.hostRef.current), () => {
    popcornElectronWorkbookPanelValue365.current?.();
    popcornElectronWorkbookPanelValue366.dispose();
  }), [popcornElectronWorkbookPanelParam7.hostRef, popcornElectronWorkbookPanelValue366]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue366.updateState({
      state: popcornElectronWorkbookPanelParam7.isEditing ? popcornElectronWorkbookPanelParam7.editorState.textEditState : null,
      blocks: popcornElectronWorkbookPanelParam7.editorState.textLayoutBlocks
    });
  }, [popcornElectronWorkbookPanelParam7.editorState.textEditState, popcornElectronWorkbookPanelParam7.editorState.textLayoutBlocks, popcornElectronWorkbookPanelParam7.isEditing, popcornElectronWorkbookPanelValue366]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelParam7.isEditing || (popcornElectronWorkbookPanelValue365.current?.(), popcornElectronWorkbookPanelValue366.clear());
  }, [popcornElectronWorkbookPanelParam7.isEditing, popcornElectronWorkbookPanelValue366]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue367();
  }, [popcornElectronWorkbookPanelParam7.editorState.textEditState, popcornElectronWorkbookPanelParam7.editorState.textLayoutBlocks, popcornElectronWorkbookPanelValue367, popcornElectronWorkbookPanelValue363]);
  React.useEffect(() => {
    let popcornElectronWorkbookPanelValue1126 = popcornElectronWorkbookPanelParam7.canvasRef.current,
      popcornElectronWorkbookPanelValue1127 = popcornElectronWorkbookPanelParam7.hostRef.current,
      popcornElectronWorkbookPanelValue1128 = popcornElectronWorkbookPanelValue1126 ?? popcornElectronWorkbookPanelValue1127;
    if (!popcornElectronWorkbookPanelValue1128 || typeof ResizeObserver > "u") return;
    let popcornElectronWorkbookPanelValue1129 = new ResizeObserver(() => {
      popcornElectronWorkbookPanelValue367();
    });
    return popcornElectronWorkbookPanelValue1129.observe(popcornElectronWorkbookPanelValue1128), () => {
      popcornElectronWorkbookPanelValue1129.disconnect();
    };
  }, [popcornElectronWorkbookPanelParam7.canvasRef, popcornElectronWorkbookPanelParam7.hostRef, popcornElectronWorkbookPanelValue367]);
  let popcornElectronWorkbookPanelValue368 = React.useCallback(popcornElectronWorkbookPanelParam564 => {
      popcornElectronWorkbookPanelValue362.current = popcornElectronWorkbookPanelParam564;
      popcornElectronWorkbookPanelValue367();
    }, [popcornElectronWorkbookPanelValue367]),
    popcornElectronWorkbookPanelValue369 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue365.current?.();
      let popcornElectronWorkbookPanelValue1000 = popcornElectronWorkbookPanelParam491 => {
          popcornElectronWorkbookPanelValue366.pointerMove(popcornElectronWorkbookPanelHelper128(popcornElectronWorkbookPanelParam7.canvasRef.current, popcornElectronWorkbookPanelParam491));
        },
        popcornElectronWorkbookPanelValue1001 = () => {
          popcornElectronWorkbookPanelValue366.pointerUp();
          popcornElectronWorkbookPanelValue365.current?.();
        };
      popcornElectronWorkbookPanelValue365.current = () => {
        window.removeEventListener("mousemove", popcornElectronWorkbookPanelValue1000);
        window.removeEventListener("mouseup", popcornElectronWorkbookPanelValue1001);
        popcornElectronWorkbookPanelValue365.current = null;
      };
      window.addEventListener("mousemove", popcornElectronWorkbookPanelValue1000);
      window.addEventListener("mouseup", popcornElectronWorkbookPanelValue1001);
    }, [popcornElectronWorkbookPanelParam7.canvasRef, popcornElectronWorkbookPanelValue366]),
    popcornElectronWorkbookPanelValue370 = React.useCallback(event => {
      if (!popcornElectronWorkbookPanelParam7.isEditing || !popcornElectronWorkbookPanelValue366.isActive()) return false;
      let popcornElectronWorkbookPanelValue1035 = popcornElectronWorkbookPanelHelper128(popcornElectronWorkbookPanelParam7.canvasRef.current, event);
      return (event.detail >= 3 ? popcornElectronWorkbookPanelValue366.selectParagraphAtPoint(popcornElectronWorkbookPanelValue1035) : event.detail === 2 ? popcornElectronWorkbookPanelValue366.selectWordAtPoint(popcornElectronWorkbookPanelValue1035) : popcornElectronWorkbookPanelValue366.tryPointerDown(popcornElectronWorkbookPanelValue1035, {
        shiftKey: event.shiftKey
      })) ? (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelValue369(), true) : (popcornElectronWorkbookPanelValue366.clear(), false);
    }, [popcornElectronWorkbookPanelParam7.canvasRef, popcornElectronWorkbookPanelValue369, popcornElectronWorkbookPanelValue366]),
    popcornElectronWorkbookPanelValue371 = React.useCallback(event => popcornElectronWorkbookPanelParam7.isEditing ? popcornElectronWorkbookPanelValue366.isActive() ? (event.preventDefault(), event.stopPropagation(), true) : popcornElectronWorkbookPanelParam7.selectedFloatingElement?.kind !== "xlsx-shape" || !popcornElectronWorkbookPanelValue366.activateBlockEnd(popcornElectronWorkbookPanelParam7.selectedFloatingElement.id) ? false : (event.preventDefault(), event.stopPropagation(), true) : false, [popcornElectronWorkbookPanelParam7.isEditing, popcornElectronWorkbookPanelParam7.selectedFloatingElement, popcornElectronWorkbookPanelValue366]);
  return {
    isActive: popcornElectronWorkbookPanelValue366.isActive(),
    clear: () => {
      popcornElectronWorkbookPanelValue366.clear();
    },
    handleCanvasMouseDown: popcornElectronWorkbookPanelValue370,
    handleCanvasDoubleClick: popcornElectronWorkbookPanelValue371,
    setTextOverlayCanvasNode: popcornElectronWorkbookPanelValue368
  };
}
function popcornElectronWorkbookPanelHelper130(popcornElectronWorkbookPanelParam99) {
  if (popcornElectronWorkbookPanelParam99.next.activeSheetName !== popcornElectronWorkbookPanelParam99.previous.activeSheetName || popcornElectronWorkbookPanelParam99.next.isDraggingSelection || !popcornElectronWorkbookPanelHelper131(popcornElectronWorkbookPanelParam99.previous, popcornElectronWorkbookPanelParam99.next)) return null;
  if (popcornElectronWorkbookPanelHelper132(popcornElectronWorkbookPanelParam99.next.selectionRect)) return {
    type: "cell",
    row: popcornElectronWorkbookPanelParam99.next.activeCell.row,
    col: popcornElectronWorkbookPanelParam99.next.activeCell.col
  };
  let popcornElectronWorkbookPanelValue832 = popcornElectronWorkbookPanelHelper134({
    previousRect: popcornElectronWorkbookPanelParam99.previous.selectionRect,
    nextRect: popcornElectronWorkbookPanelParam99.next.selectionRect,
    activeCell: popcornElectronWorkbookPanelParam99.next.activeCell
  });
  return popcornElectronWorkbookPanelValue832 ? {
    type: "cell",
    row: popcornElectronWorkbookPanelValue832.row,
    col: popcornElectronWorkbookPanelValue832.col
  } : {
    type: "range",
    selectionRect: {
      ...popcornElectronWorkbookPanelParam99.next.selectionRect
    },
    trailingContextRows: 1,
    trailingContextCols: 1
  };
}
function popcornElectronWorkbookPanelHelper131(popcornElectronWorkbookPanelParam168, popcornElectronWorkbookPanelParam169) {
  return popcornElectronWorkbookPanelParam168.selectedAddress !== popcornElectronWorkbookPanelParam169.selectedAddress || popcornElectronWorkbookPanelParam168.activeCell.row !== popcornElectronWorkbookPanelParam169.activeCell.row || popcornElectronWorkbookPanelParam168.activeCell.col !== popcornElectronWorkbookPanelParam169.activeCell.col || popcornElectronWorkbookPanelParam168.selectionRect.r1 !== popcornElectronWorkbookPanelParam169.selectionRect.r1 || popcornElectronWorkbookPanelParam168.selectionRect.c1 !== popcornElectronWorkbookPanelParam169.selectionRect.c1 || popcornElectronWorkbookPanelParam168.selectionRect.r2 !== popcornElectronWorkbookPanelParam169.selectionRect.r2 || popcornElectronWorkbookPanelParam168.selectionRect.c2 !== popcornElectronWorkbookPanelParam169.selectionRect.c2;
}
function popcornElectronWorkbookPanelHelper132(popcornElectronWorkbookPanelParam535) {
  return popcornElectronWorkbookPanelParam535.r1 === popcornElectronWorkbookPanelParam535.r2 && popcornElectronWorkbookPanelParam535.c1 === popcornElectronWorkbookPanelParam535.c2;
}
function popcornElectronWorkbookPanelHelper133(popcornElectronWorkbookPanelParam526, popcornElectronWorkbookPanelParam527, popcornElectronWorkbookPanelParam528) {
  return Math.max(popcornElectronWorkbookPanelParam527, Math.min(popcornElectronWorkbookPanelParam528, popcornElectronWorkbookPanelParam526));
}
function popcornElectronWorkbookPanelHelper134(popcornElectronWorkbookPanelParam73) {
  let popcornElectronWorkbookPanelValue712 = [];
  if (popcornElectronWorkbookPanelParam73.previousRect.r1 !== popcornElectronWorkbookPanelParam73.nextRect.r1 && popcornElectronWorkbookPanelValue712.push("top"), popcornElectronWorkbookPanelParam73.previousRect.r2 !== popcornElectronWorkbookPanelParam73.nextRect.r2 && popcornElectronWorkbookPanelValue712.push("bottom"), popcornElectronWorkbookPanelParam73.previousRect.c1 !== popcornElectronWorkbookPanelParam73.nextRect.c1 && popcornElectronWorkbookPanelValue712.push("left"), popcornElectronWorkbookPanelParam73.previousRect.c2 !== popcornElectronWorkbookPanelParam73.nextRect.c2 && popcornElectronWorkbookPanelValue712.push("right"), popcornElectronWorkbookPanelValue712.length !== 1) return null;
  switch (popcornElectronWorkbookPanelValue712[0]) {
    case "top":
      return {
        row: popcornElectronWorkbookPanelParam73.nextRect.r1,
        col: popcornElectronWorkbookPanelHelper133(popcornElectronWorkbookPanelParam73.activeCell.col, popcornElectronWorkbookPanelParam73.nextRect.c1, popcornElectronWorkbookPanelParam73.nextRect.c2)
      };
    case "bottom":
      return {
        row: popcornElectronWorkbookPanelParam73.nextRect.r2,
        col: popcornElectronWorkbookPanelHelper133(popcornElectronWorkbookPanelParam73.activeCell.col, popcornElectronWorkbookPanelParam73.nextRect.c1, popcornElectronWorkbookPanelParam73.nextRect.c2)
      };
    case "left":
      return {
        row: popcornElectronWorkbookPanelHelper133(popcornElectronWorkbookPanelParam73.activeCell.row, popcornElectronWorkbookPanelParam73.nextRect.r1, popcornElectronWorkbookPanelParam73.nextRect.r2),
        col: popcornElectronWorkbookPanelParam73.nextRect.c1
      };
    case "right":
      return {
        row: popcornElectronWorkbookPanelHelper133(popcornElectronWorkbookPanelParam73.activeCell.row, popcornElectronWorkbookPanelParam73.nextRect.r1, popcornElectronWorkbookPanelParam73.nextRect.r2),
        col: popcornElectronWorkbookPanelParam73.nextRect.c2
      };
    default:
      return null;
  }
}
function popcornElectronWorkbookPanelHelper135(popcornElectronWorkbookPanelParam36) {
  let popcornElectronWorkbookPanelValue600 = React.useRef({
    activeSheetName: popcornElectronWorkbookPanelParam36.snapshot.activeSheetName,
    activeCell: {
      ...popcornElectronWorkbookPanelParam36.snapshot.activeCell
    },
    selectedAddress: popcornElectronWorkbookPanelParam36.snapshot.selectedAddress,
    selectionRect: {
      ...popcornElectronWorkbookPanelParam36.snapshot.selectionRect
    },
    isDraggingSelection: popcornElectronWorkbookPanelParam36.snapshot.isDraggingSelection
  });
  React.useEffect(() => {
    let popcornElectronWorkbookPanelValue778 = {
        activeSheetName: popcornElectronWorkbookPanelParam36.snapshot.activeSheetName,
        activeCell: {
          ...popcornElectronWorkbookPanelParam36.snapshot.activeCell
        },
        selectedAddress: popcornElectronWorkbookPanelParam36.snapshot.selectedAddress,
        selectionRect: {
          ...popcornElectronWorkbookPanelParam36.snapshot.selectionRect
        },
        isDraggingSelection: popcornElectronWorkbookPanelParam36.snapshot.isDraggingSelection
      },
      popcornElectronWorkbookPanelValue779 = popcornElectronWorkbookPanelValue600.current;
    if (popcornElectronWorkbookPanelValue600.current = popcornElectronWorkbookPanelValue778, popcornElectronWorkbookPanelParam36.suppressReveal || popcornElectronWorkbookPanelParam36.snapshot.selectedFloatingElement) return;
    let popcornElectronWorkbookPanelValue780 = popcornElectronWorkbookPanelHelper130({
      previous: popcornElectronWorkbookPanelValue779,
      next: popcornElectronWorkbookPanelValue778
    });
    if (popcornElectronWorkbookPanelValue780) {
      if (popcornElectronWorkbookPanelValue780.type === "cell") {
        popcornElectronWorkbookPanelParam36.runtime.revealCell(popcornElectronWorkbookPanelValue780.row, popcornElectronWorkbookPanelValue780.col);
        return;
      }
      popcornElectronWorkbookPanelParam36.runtime.revealSelectionRect(popcornElectronWorkbookPanelValue780.selectionRect, {
        trailingContextRows: popcornElectronWorkbookPanelValue780.trailingContextRows,
        trailingContextCols: popcornElectronWorkbookPanelValue780.trailingContextCols
      });
    }
  }, [popcornElectronWorkbookPanelParam36.runtime, popcornElectronWorkbookPanelParam36.snapshot.activeCell.col, popcornElectronWorkbookPanelParam36.snapshot.activeCell.row, popcornElectronWorkbookPanelParam36.snapshot.activeSheetName, popcornElectronWorkbookPanelParam36.snapshot.isDraggingSelection, popcornElectronWorkbookPanelParam36.snapshot.selectedAddress, popcornElectronWorkbookPanelParam36.snapshot.selectedFloatingElement, popcornElectronWorkbookPanelParam36.snapshot.selectionRect.c1, popcornElectronWorkbookPanelParam36.snapshot.selectionRect.c2, popcornElectronWorkbookPanelParam36.snapshot.selectionRect.r1, popcornElectronWorkbookPanelParam36.snapshot.selectionRect.r2, popcornElectronWorkbookPanelParam36.suppressReveal]);
}
function popcornElectronWorkbookPanelHelper136(popcornElectronWorkbookPanelParam257, popcornElectronWorkbookPanelParam258, popcornElectronWorkbookPanelParam259) {
  if (popcornElectronWorkbookPanelParam259 <= 0 || popcornElectronWorkbookPanelParam257 <= 0) return 0;
  if (popcornElectronWorkbookPanelParam257 >= (popcornElectronWorkbookPanelParam258[popcornElectronWorkbookPanelParam259] ?? 0)) return popcornElectronWorkbookPanelParam259 - 1;
  let popcornElectronWorkbookPanelValue1251 = 0;
  for (; popcornElectronWorkbookPanelValue1251 < popcornElectronWorkbookPanelParam259 && (popcornElectronWorkbookPanelParam258[popcornElectronWorkbookPanelValue1251 + 1] ?? 0) <= popcornElectronWorkbookPanelParam257;) popcornElectronWorkbookPanelValue1251 += 1;
  return Math.max(0, Math.min(popcornElectronWorkbookPanelValue1251, popcornElectronWorkbookPanelParam259 - 1));
}
function popcornElectronWorkbookPanelHelper137() {
  let popcornElectronWorkbookPanelValue1070 = {
      width: 0,
      height: 0
    },
    popcornElectronWorkbookPanelValue1071 = new Set();
  return {
    subscribe(popcornElectronWorkbookPanelParam373) {
      return popcornElectronWorkbookPanelValue1071.add(popcornElectronWorkbookPanelParam373), () => {
        popcornElectronWorkbookPanelValue1071.delete(popcornElectronWorkbookPanelParam373);
      };
    },
    getSnapshot() {
      return popcornElectronWorkbookPanelValue1070;
    },
    setSnapshot(popcornElectronWorkbookPanelParam333) {
      if (!(popcornElectronWorkbookPanelValue1070.width === popcornElectronWorkbookPanelParam333.width && popcornElectronWorkbookPanelValue1070.height === popcornElectronWorkbookPanelParam333.height)) {
        popcornElectronWorkbookPanelValue1070 = popcornElectronWorkbookPanelParam333;
        for (let popcornElectronWorkbookPanelValue1397 of popcornElectronWorkbookPanelValue1071) popcornElectronWorkbookPanelValue1397();
      }
    }
  };
}
function popcornElectronWorkbookPanelHelper138(popcornElectronWorkbookPanelParam360, popcornElectronWorkbookPanelParam361, popcornElectronWorkbookPanelParam362) {
  return popcornElectronWorkbookPanelParam360 >= popcornElectronWorkbookPanelParam362.left && popcornElectronWorkbookPanelParam360 <= popcornElectronWorkbookPanelParam362.left + popcornElectronWorkbookPanelParam362.width && popcornElectronWorkbookPanelParam361 >= popcornElectronWorkbookPanelParam362.top && popcornElectronWorkbookPanelParam361 <= popcornElectronWorkbookPanelParam362.top + popcornElectronWorkbookPanelParam362.height;
}
function popcornElectronWorkbookPanelHelper139(popcornElectronWorkbookPanelParam288, popcornElectronWorkbookPanelParam289) {
  return popcornElectronWorkbookPanelParam289.row < popcornElectronWorkbookPanelParam288.row ? popcornElectronWorkbookPanelParam289.col < popcornElectronWorkbookPanelParam288.col ? "top-left" : "top-right" : popcornElectronWorkbookPanelParam289.col < popcornElectronWorkbookPanelParam288.col ? "bottom-left" : "bottom-right";
}
function popcornElectronWorkbookPanelHelper140({
  controller,
  snapshot,
  accentFill,
  accentStroke,
  inputFocused,
  formulaHighlightRects = [],
  onCellEditorFocus,
  onCellEditorBlur,
  onCellEditorChange,
  viewportOverlays = [],
  findRequestToken = 0,
  artifactSearchEnabled = true,
  isEditing = true,
  annotationMode = false,
  onAnnotationModeChange,
  drawingMode = false,
  onDrawingModeChange,
  drawingCommitToken: popcornElectronWorkbookPanelParam1 = 0,
  reviewTools,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  commentThreadsEnabled = true,
  bottomScrollReservePx = 0
}) {
  let popcornElectronWorkbookPanelValue87 = _remoteTextEditSessionL("viewport"),
    popcornElectronWorkbookPanelValue88 = React.useRef(null),
    [popcornElectronWorkbookPanelValue89, popcornElectronWorkbookPanelValue90] = React.useState(null),
    popcornElectronWorkbookPanelValue91 = React.useRef(null);
  popcornElectronWorkbookPanelValue91.current ||= popcornElectronWorkbookPanelHelper137();
  let popcornElectronWorkbookPanelValue92 = popcornElectronWorkbookPanelValue91.current,
    popcornElectronWorkbookPanelValue93 = React.useSyncExternalStore(popcornElectronWorkbookPanelValue92.subscribe, popcornElectronWorkbookPanelValue92.getSnapshot, popcornElectronWorkbookPanelValue92.getSnapshot),
    popcornElectronWorkbookPanelValue94 = React.useRef(null),
    popcornElectronWorkbookPanelValue95 = React.useRef(null),
    popcornElectronWorkbookPanelValue96 = React.useRef(null),
    popcornElectronWorkbookPanelValue97 = React.useRef(null),
    popcornElectronWorkbookPanelValue98 = React.useRef(null),
    popcornElectronWorkbookPanelValue99 = React.useRef(false),
    popcornElectronWorkbookPanelValue100 = React.useRef(null),
    popcornElectronWorkbookPanelValue101 = React.useRef(false),
    popcornElectronWorkbookPanelValue102 = React.useSyncExternalStore(popcornElectronWorkbookPanelParam119 => {
      let popcornElectronWorkbookPanelValue921 = popcornElectronWorkbookPanelValue89?.ownerDocument.defaultView;
      if (!popcornElectronWorkbookPanelValue89 || !popcornElectronWorkbookPanelValue921?.MutationObserver) return () => {};
      let popcornElectronWorkbookPanelValue922 = new popcornElectronWorkbookPanelValue921.MutationObserver(popcornElectronWorkbookPanelParam119);
      return popcornElectronWorkbookPanelValue922.observe(popcornElectronWorkbookPanelValue89.ownerDocument.documentElement, {
        attributeFilter: ["class", "data-theme", "style"],
        attributes: true
      }), popcornElectronWorkbookPanelValue922.observe(popcornElectronWorkbookPanelValue89, {
        attributeFilter: ["class", "data-theme", "style"],
        attributes: true
      }), () => {
        popcornElectronWorkbookPanelValue922.disconnect();
      };
    }, () => popcornElectronSurfaceStyleJ(popcornElectronWorkbookPanelValue89), () => popcornElectronSurfaceStyleJ(null)),
    popcornElectronWorkbookPanelValue103 = React.useMemo(() => popcornElectronSurfaceStyleZ(accentFill) ? popcornElectronSurfaceStyleY(popcornElectronWorkbookPanelValue102) : accentFill, [accentFill, popcornElectronWorkbookPanelValue102]),
    popcornElectronWorkbookPanelValue104 = React.useMemo(() => popcornElectronSurfaceStyleZ(accentStroke) ? popcornElectronSurfaceStyleX(popcornElectronWorkbookPanelValue102) : accentStroke, [accentStroke, popcornElectronWorkbookPanelValue102]),
    popcornElectronWorkbookPanelValue105 = React.useRef(null);
  popcornElectronWorkbookPanelValue105.current ||= new popcornElectronWorkbookPanelValue8({
    controller,
    accentStroke: popcornElectronWorkbookPanelValue104,
    isEditing,
    bottomScrollReservePx
  });
  let popcornElectronWorkbookPanelValue106 = popcornElectronWorkbookPanelValue105.current,
    popcornElectronWorkbookPanelValue107 = React.useRef(formulaHighlightRects),
    popcornElectronWorkbookPanelValue108 = React.useRef(snapshot.selectedFloatingElement?.logicalBounds ?? null),
    {
      updateOverlayTransform
    } = popcornElectronWorkbookPanelHelper69({
      getCamera: () => popcornElectronWorkbookPanelValue106.getCamera(),
      overlayHtmlLayerRef: popcornElectronWorkbookPanelValue96
    }),
    [popcornElectronWorkbookPanelValue109, popcornElectronWorkbookPanelValue110] = React.useState(false),
    [popcornElectronWorkbookPanelValue111, popcornElectronWorkbookPanelValue112] = React.useState(false),
    [popcornElectronWorkbookPanelValue113, popcornElectronWorkbookPanelValue114] = React.useState(""),
    [popcornElectronWorkbookPanelValue115, popcornElectronWorkbookPanelValue116] = React.useState(0),
    [popcornElectronWorkbookPanelValue117, popcornElectronWorkbookPanelValue118] = React.useState(0),
    [popcornElectronWorkbookPanelValue119, popcornElectronWorkbookPanelValue120] = React.useState(false),
    [popcornElectronWorkbookPanelValue121, popcornElectronWorkbookPanelValue122] = React.useState({
      matches: [],
      total: 0
    }),
    [popcornElectronWorkbookPanelValue123, popcornElectronWorkbookPanelValue124] = React.useState(null),
    [_e, popcornElectronWorkbookPanelValue125] = React.useState(true),
    [popcornElectronWorkbookPanelValue126, be] = React.useState("bottom-right"),
    popcornElectronWorkbookPanelValue127 = React.useRef(null),
    popcornElectronWorkbookPanelValue128 = React.useRef(false),
    popcornElectronWorkbookPanelValue129 = React.useRef(null),
    popcornElectronWorkbookPanelValue130 = React.useSyncExternalStore(popcornElectronWorkbookPanelParam609 => controller.subscribe(popcornElectronWorkbookPanelParam609), () => controller.getState(), () => controller.getState()),
    popcornElectronWorkbookPanelValue131 = React.useRef(popcornElectronWorkbookPanelValue130.overlays.dataValidationTargets),
    popcornElectronWorkbookPanelValue132 = React.useRef(popcornElectronWorkbookPanelValue130.floating.chartHoverTargets);
  React.useEffect(() => {
    if (!remoteTextEditSessionU() || typeof window > "u") return;
    let popcornElectronWorkbookPanelValue458 = controller,
      popcornElectronWorkbookPanelValue459 = () => {
        let popcornElectronWorkbookPanelValue625 = popcornElectronWorkbookPanelValue94.current;
        if (!popcornElectronWorkbookPanelValue625) return {
          canvasClientSize: null,
          canvasRectSize: null,
          canvasRectStretch: null,
          canvasBitmapSize: null,
          canvasBitmapScale: null
        };
        let popcornElectronWorkbookPanelValue626 = popcornElectronWorkbookPanelValue625.getBoundingClientRect(),
          popcornElectronWorkbookPanelValue627 = popcornElectronWorkbookPanelValue625.clientWidth,
          popcornElectronWorkbookPanelValue628 = popcornElectronWorkbookPanelValue625.clientHeight,
          popcornElectronWorkbookPanelValue629 = window.devicePixelRatio || 1,
          popcornElectronWorkbookPanelValue630 = Math.max(1, Math.round(popcornElectronWorkbookPanelValue627 * popcornElectronWorkbookPanelValue629)),
          popcornElectronWorkbookPanelValue631 = Math.max(1, Math.round(popcornElectronWorkbookPanelValue628 * popcornElectronWorkbookPanelValue629));
        return {
          canvasClientSize: {
            width: popcornElectronWorkbookPanelValue627,
            height: popcornElectronWorkbookPanelValue628
          },
          canvasRectSize: {
            width: popcornElectronWorkbookPanelValue626.width,
            height: popcornElectronWorkbookPanelValue626.height
          },
          canvasRectStretch: popcornElectronWorkbookPanelValue627 > 0 && popcornElectronWorkbookPanelValue628 > 0 ? {
            scaleX: popcornElectronWorkbookPanelValue626.width / popcornElectronWorkbookPanelValue627,
            scaleY: popcornElectronWorkbookPanelValue626.height / popcornElectronWorkbookPanelValue628,
            deltaWidth: popcornElectronWorkbookPanelValue626.width - popcornElectronWorkbookPanelValue627,
            deltaHeight: popcornElectronWorkbookPanelValue626.height - popcornElectronWorkbookPanelValue628
          } : null,
          canvasBitmapSize: {
            width: popcornElectronWorkbookPanelValue625.width,
            height: popcornElectronWorkbookPanelValue625.height
          },
          canvasBitmapScale: popcornElectronWorkbookPanelValue630 > 0 && popcornElectronWorkbookPanelValue631 > 0 ? {
            scaleX: popcornElectronWorkbookPanelValue625.width / popcornElectronWorkbookPanelValue630,
            scaleY: popcornElectronWorkbookPanelValue625.height / popcornElectronWorkbookPanelValue631,
            deltaWidth: popcornElectronWorkbookPanelValue625.width - popcornElectronWorkbookPanelValue630,
            deltaHeight: popcornElectronWorkbookPanelValue625.height - popcornElectronWorkbookPanelValue631
          } : null
        };
      },
      popcornElectronWorkbookPanelValue460 = {
        getDataValidationTargets: () => popcornElectronWorkbookPanelValue131.current.map(item => ({
          ...item,
          cssBounds: {
            ...item.cssBounds
          }
        })),
        getCamera: () => ({
          ...popcornElectronWorkbookPanelValue106.getCamera()
        }),
        getResizeMetrics: () => ({
          ...popcornElectronWorkbookPanelValue459(),
          controllerResizeState: popcornElectronWorkbookPanelValue458.getResizeDebugState?.() ?? null
        }),
        resetResizeMetrics: () => {
          popcornElectronWorkbookPanelValue458.resetResizeDebugState?.();
        },
        openDataValidationAtAddress: popcornElectronWorkbookPanelParam313 => {
          controller.setSelectedAddress(popcornElectronWorkbookPanelParam313);
          popcornElectronWorkbookPanelValue124(popcornElectronWorkbookPanelParam313);
          try {
            popcornElectronWorkbookPanelValue88.current?.focus({
              preventScroll: true
            });
          } catch {}
        }
      };
    return window.__POPCORN_VIEWPORT_DEBUG__ = popcornElectronWorkbookPanelValue460, () => {
      window.__POPCORN_VIEWPORT_DEBUG__ === popcornElectronWorkbookPanelValue460 && delete window.__POPCORN_VIEWPORT_DEBUG__;
    };
  }, [controller, popcornElectronWorkbookPanelValue106]);
  let popcornElectronWorkbookPanelValue133 = React.useSyncExternalStore(popcornElectronWorkbookPanelParam589 => popcornElectronWorkbookPanelValue106.subscribeToCameraChanges(popcornElectronWorkbookPanelParam589), () => popcornElectronWorkbookPanelValue106.getCamera(), () => popcornElectronWorkbookPanelValue106.getCamera()),
    popcornElectronWorkbookPanelValue134 = popcornElectronWorkbookPanelValue130.viewport.camera;
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue106.setCamera(popcornElectronWorkbookPanelValue134);
  }, [popcornElectronWorkbookPanelValue134.k, popcornElectronWorkbookPanelValue134.x, popcornElectronWorkbookPanelValue134.y, popcornElectronWorkbookPanelValue106]);
  let popcornElectronWorkbookPanelValue135 = controller.getSelectionSummarySource(),
    popcornElectronWorkbookPanelValue136 = React.useSyncExternalStore(popcornElectronWorkbookPanelValue135.subscribe, popcornElectronWorkbookPanelValue135.getSnapshot, popcornElectronWorkbookPanelValue135.getSnapshot),
    popcornElectronWorkbookPanelValue137 = React.useMemo(() => {
      if (!isEditing || snapshot.editorMode !== "editCell") return null;
      let popcornElectronWorkbookPanelValue1028 = popcornElectronWorkbookPanelValue88.current,
        popcornElectronWorkbookPanelValue1029 = popcornElectronSurfaceStyleUnderscore(popcornElectronWorkbookPanelValue133);
      return {
        row: snapshot.activeCell.row,
        col: snapshot.activeCell.col,
        address: snapshot.selectedAddress,
        initialValue: snapshot.formulaInput,
        viewport: {
          scrollLeft: popcornElectronWorkbookPanelValue1029.left,
          scrollTop: popcornElectronWorkbookPanelValue1029.top,
          width: popcornElectronWorkbookPanelValue1028?.clientWidth ?? 0,
          height: popcornElectronWorkbookPanelValue1028?.clientHeight ?? 0
        }
      };
    }, [popcornElectronWorkbookPanelValue133, snapshot.activeCell.col, snapshot.activeCell.row, snapshot.editorMode, snapshot.formulaInput, snapshot.selectedAddress]),
    popcornElectronWorkbookPanelValue138 = React.useMemo(() => {
      let popcornElectronWorkbookPanelValue1286 = [0];
      for (let popcornElectronWorkbookPanelValue1344 = 0; popcornElectronWorkbookPanelValue1344 < snapshot.columnWidths.length; popcornElectronWorkbookPanelValue1344 += 1) popcornElectronWorkbookPanelValue1286[popcornElectronWorkbookPanelValue1344 + 1] = (popcornElectronWorkbookPanelValue1286[popcornElectronWorkbookPanelValue1344] ?? 0) + (snapshot.columnWidths[popcornElectronWorkbookPanelValue1344] ?? 0);
      return popcornElectronWorkbookPanelValue1286;
    }, [snapshot.columnWidths]),
    popcornElectronWorkbookPanelValue139 = React.useMemo(() => {
      let popcornElectronWorkbookPanelValue1291 = [0];
      for (let popcornElectronWorkbookPanelValue1347 = 0; popcornElectronWorkbookPanelValue1347 < snapshot.rowHeights.length; popcornElectronWorkbookPanelValue1347 += 1) popcornElectronWorkbookPanelValue1291[popcornElectronWorkbookPanelValue1347 + 1] = (popcornElectronWorkbookPanelValue1291[popcornElectronWorkbookPanelValue1347] ?? 0) + (snapshot.rowHeights[popcornElectronWorkbookPanelValue1347] ?? 0);
      return popcornElectronWorkbookPanelValue1291;
    }, [snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue140 = popcornElectronWorkbookPanelHelper127({
      selectionRect: snapshot.selectionRect,
      colOffsets: popcornElectronWorkbookPanelValue138,
      rowOffsets: popcornElectronWorkbookPanelValue139
    });
  popcornElectronWorkbookPanelHelper135({
    snapshot,
    runtime: popcornElectronWorkbookPanelValue106,
    suppressReveal: !!snapshot.selectedFloatingElement
  });
  let popcornElectronWorkbookPanelValue141 = popcornElectronWorkbookPanelValue130.overlays,
    popcornElectronWorkbookPanelValue142 = popcornElectronWorkbookPanelValue130.floating.selectedFloatingElement,
    popcornElectronWorkbookPanelValue143 = React.useMemo(() => {
      let popcornElectronWorkbookPanelValue1228 = 40 * popcornElectronWorkbookPanelValue133.k,
        popcornElectronWorkbookPanelValue1229 = 20 * popcornElectronWorkbookPanelValue133.k,
        popcornElectronWorkbookPanelValue1230 = Math.max(0, popcornElectronWorkbookPanelValue93.width - popcornElectronWorkbookPanelValue1228),
        popcornElectronWorkbookPanelValue1231 = Math.max(0, popcornElectronWorkbookPanelValue93.height - popcornElectronWorkbookPanelValue1229);
      return popcornElectronWorkbookPanelValue1230 <= 0 || popcornElectronWorkbookPanelValue1231 <= 0 ? null : {
        left: popcornElectronWorkbookPanelValue1228,
        top: popcornElectronWorkbookPanelValue1229,
        width: popcornElectronWorkbookPanelValue1230,
        height: popcornElectronWorkbookPanelValue1231
      };
    }, [popcornElectronWorkbookPanelValue133.k, popcornElectronWorkbookPanelValue93.height, popcornElectronWorkbookPanelValue93.width]),
    popcornElectronWorkbookPanelValue144 = React.useMemo(() => popcornElectronWorkbookPanelHelper63({
      snapshot,
      selectionSummary: popcornElectronWorkbookPanelValue136,
      selectedFloatingElement: popcornElectronWorkbookPanelValue142
    }), [popcornElectronWorkbookPanelValue136, popcornElectronWorkbookPanelValue142, snapshot]),
    {
      annotationEnabled,
      drawingEnabled,
      annotationEditorSession,
      annotationEditorSessionRef: $e,
      annotationEditorLightDismissArmedRef,
      annotationEditorRef,
      annotationEditorAnchorBounds,
      annotationHighlightBounds,
      annotationRangeHighlights,
      pendingAnnotationMarkers,
      hoveredAnnotationMarker,
      draftAnnotationMarkerNumber,
      activeDrawingStroke,
      activeDrawingStrokeRef,
      draftDrawingStrokes,
      visiblePendingDrawings,
      closeAnnotationEditor,
      requestAnnotationEditorDismiss,
      deleteAnnotationEditor,
      submitAnnotationEditor,
      beginDrawingSession,
      cleanupDrawingSession,
      queueAnnotationDraftOpen,
      openCreateAnnotationEditor,
      projectWorkbookDrawingPointToViewport,
      handleAnnotationEditorChange,
      getAnnotationMarkerMouseEnterHandler,
      getAnnotationMarkerMouseLeaveHandler,
      getAnnotationMarkerFocusHandler,
      getAnnotationMarkerBlurHandler,
      getAnnotationMarkerClickHandler
    } = popcornElectronWorkbookPanelHelper115({
      snapshot,
      reviewTools,
      annotationMode,
      drawingMode,
      drawingCommitToken: popcornElectronWorkbookPanelParam1,
      runtime: popcornElectronWorkbookPanelValue106,
      hostRef: popcornElectronWorkbookPanelValue88,
      canvasRef: popcornElectronWorkbookPanelValue94,
      overlayCanvasRef: popcornElectronWorkbookPanelValue95,
      selectionSummary: popcornElectronWorkbookPanelValue136,
      colOffsets: popcornElectronWorkbookPanelValue138,
      rowOffsets: popcornElectronWorkbookPanelValue139,
      camera: popcornElectronWorkbookPanelValue133,
      annotationRangeHighlightColor: popcornElectronWorkbookPanelValue104,
      mergedCells: popcornElectronWorkbookPanelValue141.mergedCells,
      annotationsEnabled,
      drawingAnnotationsEnabled
    }),
    popcornElectronWorkbookPanelValue145 = React.useMemo(() => !artifactSearchEnabled || popcornElectronWorkbookPanelValue121.matches.length === 0 ? null : popcornElectronWorkbookPanelValue121.matches[Math.max(0, Math.min(popcornElectronWorkbookPanelValue117, popcornElectronWorkbookPanelValue121.matches.length - 1))] ?? null, [popcornElectronWorkbookPanelValue117, artifactSearchEnabled, popcornElectronWorkbookPanelValue121.matches]),
    popcornElectronWorkbookPanelValue146 = React.useMemo(() => {
      if (!popcornElectronWorkbookPanelValue145) return [];
      let popcornElectronWorkbookPanelValue1136 = on(popcornElectronWorkbookPanelValue145.address);
      return [{
        r1: popcornElectronWorkbookPanelValue1136.row,
        c1: popcornElectronWorkbookPanelValue1136.col,
        r2: popcornElectronWorkbookPanelValue1136.row,
        c2: popcornElectronWorkbookPanelValue1136.col,
        color: popcornElectronWorkbookPanelValue104,
        fillAlpha: 0.08,
        borderWidthPx: 1,
        borderRadiusPx: 0
      }];
    }, [popcornElectronWorkbookPanelValue104, popcornElectronWorkbookPanelValue145]),
    popcornElectronWorkbookPanelValue147 = React.useMemo(() => [...formulaHighlightRects, ...popcornElectronWorkbookPanelValue146], [popcornElectronWorkbookPanelValue146, formulaHighlightRects]),
    popcornElectronWorkbookPanelValue148 = popcornElectronWorkbookPanelHelper129({
      controller,
      editorState: popcornElectronWorkbookPanelValue130.editor,
      selectedFloatingElement: popcornElectronWorkbookPanelValue142,
      hostRef: popcornElectronWorkbookPanelValue88,
      canvasRef: popcornElectronWorkbookPanelValue94,
      isEditing
    }),
    popcornElectronWorkbookPanelValue149 = React.useMemo(() => popcornElectronWorkbookPanelHelper53({
      sheetName: snapshot.activeSheetName,
      selectionSummary: popcornElectronWorkbookPanelValue136
    }), [popcornElectronWorkbookPanelValue136, snapshot.activeSheetName]),
    $ = popcornElectronWorkbookPanelValue142 ? popcornElectronWorkbookPanelValue144 : popcornElectronWorkbookPanelValue149,
    popcornElectronWorkbookPanelValue150 = React.useMemo(() => $ ? popcornElectronWorkbookPanelHelper61({
      target: $,
      camera: popcornElectronWorkbookPanelValue133,
      freezePanes: snapshot.freezePanes,
      columnWidths: snapshot.columnWidths,
      rowHeights: snapshot.rowHeights,
      sheet: {
        mergedCells: popcornElectronWorkbookPanelValue141.mergedCells
      }
    }) : null, [popcornElectronWorkbookPanelValue133, popcornElectronWorkbookPanelValue141.mergedCells, $, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights]),
    popcornElectronWorkbookPanelValue151 = annotationEnabled && !annotationMode && !drawingMode && !snapshot.isDraggingSelection && !inputFocused && !popcornElectronWorkbookPanelValue148.isActive && !popcornElectronWorkbookPanelValue137 && !annotationEditorSession,
    popcornElectronWorkbookPanelValue152 = React.useMemo(() => {
      if (!$) return null;
      switch ($.type) {
        case "workbook-range":
          return `${$.type}:${$.sheetName}:${$.rangeAddress}`;
        case "workbook-floating-element":
          return `${$.type}:${$.sheetName}:${$.elementId}`;
      }
    }, [$]),
    popcornElectronWorkbookPanelValue153 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue127.current != null && (clearTimeout(popcornElectronWorkbookPanelValue127.current), popcornElectronWorkbookPanelValue127.current = null);
    }, []),
    popcornElectronWorkbookPanelValue154 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue153();
      popcornElectronWorkbookPanelValue127.current = setTimeout(() => {
        popcornElectronWorkbookPanelValue127.current = null;
        popcornElectronWorkbookPanelValue125(false);
      }, 2e3);
    }, [popcornElectronWorkbookPanelValue153]);
  React.useEffect(() => () => {
    popcornElectronWorkbookPanelValue153();
  }, [popcornElectronWorkbookPanelValue153]);
  React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue151 || popcornElectronWorkbookPanelValue150 == null || popcornElectronWorkbookPanelValue152 == null) {
      popcornElectronWorkbookPanelValue128.current = false;
      popcornElectronWorkbookPanelValue153();
      popcornElectronWorkbookPanelValue125(false);
      return;
    }
    let popcornElectronWorkbookPanelValue1151 = popcornElectronWorkbookPanelValue129.current,
      popcornElectronWorkbookPanelValue1152 = popcornElectronWorkbookPanelValue1151 != null && popcornElectronWorkbookPanelHelper138(popcornElectronWorkbookPanelValue1151.x, popcornElectronWorkbookPanelValue1151.y, popcornElectronWorkbookPanelValue150);
    if (popcornElectronWorkbookPanelValue128.current = popcornElectronWorkbookPanelValue1152, popcornElectronWorkbookPanelValue125(true), popcornElectronWorkbookPanelValue1152) {
      popcornElectronWorkbookPanelValue153();
      return;
    }
    popcornElectronWorkbookPanelValue154();
  }, [popcornElectronWorkbookPanelValue153, popcornElectronWorkbookPanelValue154, popcornElectronWorkbookPanelValue150, popcornElectronWorkbookPanelValue152, popcornElectronWorkbookPanelValue151]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue131.current = [];
    popcornElectronWorkbookPanelValue132.current = [];
    popcornElectronWorkbookPanelValue124(null);
  }, [snapshot.activeSheetName]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue131.current = popcornElectronWorkbookPanelValue130.overlays.dataValidationTargets;
    popcornElectronWorkbookPanelValue132.current = popcornElectronWorkbookPanelValue130.floating.chartHoverTargets;
  }, [popcornElectronWorkbookPanelValue130.overlays.dataValidationTargets, popcornElectronWorkbookPanelValue130.floating.chartHoverTargets]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue106.setAccentFill(popcornElectronWorkbookPanelValue103);
  }, [popcornElectronWorkbookPanelValue103, popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue106.setAccentStroke(popcornElectronWorkbookPanelValue104);
  }, [popcornElectronWorkbookPanelValue104, popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue106.setEditingEnabled(isEditing);
    controller.setEditingEnabled(isEditing);
  }, [controller, isEditing, popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue106.setBottomScrollReservePx(bottomScrollReservePx);
  }, [bottomScrollReservePx, popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => (popcornElectronWorkbookPanelValue106.setOverlaySelectionStateProvider(() => ({
    selectionStart: popcornElectronWorkbookPanelValue97.current,
    selectionEnd: popcornElectronWorkbookPanelValue98.current
  })), () => {
    popcornElectronWorkbookPanelValue106.setOverlaySelectionStateProvider(null);
  }), [popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => (popcornElectronWorkbookPanelValue106.setRangeHighlightsProvider(() => {
    let popcornElectronWorkbookPanelValue834 = popcornElectronWorkbookPanelValue107.current,
      popcornElectronWorkbookPanelValue835 = annotationRangeHighlights.length > 0 ? [...popcornElectronWorkbookPanelValue834, ...annotationRangeHighlights] : popcornElectronWorkbookPanelValue834;
    if (!annotationEnabled || !annotationMode) return popcornElectronWorkbookPanelValue835;
    let popcornElectronWorkbookPanelValue836 = popcornElectronWorkbookPanelValue97.current,
      popcornElectronWorkbookPanelValue837 = popcornElectronWorkbookPanelValue98.current;
    return popcornElectronWorkbookPanelValue836 == null || popcornElectronWorkbookPanelValue837 == null || popcornElectronWorkbookPanelValue836.row === popcornElectronWorkbookPanelValue837.row && popcornElectronWorkbookPanelValue836.col === popcornElectronWorkbookPanelValue837.col ? popcornElectronWorkbookPanelValue835 : [...popcornElectronWorkbookPanelValue835, popcornElectronWorkbookPanelHelper56({
      rect: {
        r1: Math.min(popcornElectronWorkbookPanelValue836.row, popcornElectronWorkbookPanelValue837.row),
        c1: Math.min(popcornElectronWorkbookPanelValue836.col, popcornElectronWorkbookPanelValue837.col),
        r2: Math.max(popcornElectronWorkbookPanelValue836.row, popcornElectronWorkbookPanelValue837.row),
        c2: Math.max(popcornElectronWorkbookPanelValue836.col, popcornElectronWorkbookPanelValue837.col)
      },
      color: popcornElectronWorkbookPanelValue104
    })];
  }), () => {
    popcornElectronWorkbookPanelValue106.setRangeHighlightsProvider(null);
  }), [annotationEnabled, annotationMode, annotationRangeHighlights, popcornElectronWorkbookPanelValue104, popcornElectronWorkbookPanelValue106, popcornElectronWorkbookPanelValue98, popcornElectronWorkbookPanelValue97]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue106.setSuppressCellSelection(annotationEnabled && (annotationMode || annotationEditorSession?.target.type === "workbook-range"));
  }, [annotationEditorSession?.target.type, annotationEnabled, annotationMode, popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => (popcornElectronWorkbookPanelValue106.setDrawingSelectionProvider(() => popcornElectronWorkbookPanelValue108.current), () => {
    popcornElectronWorkbookPanelValue106.setDrawingSelectionProvider(null);
  }), [popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => (popcornElectronWorkbookPanelValue106.setDrawingOcclusionProvider(() => []), () => {
    popcornElectronWorkbookPanelValue106.setDrawingOcclusionProvider(null);
  }), [popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue107.current = popcornElectronWorkbookPanelValue147;
    popcornElectronWorkbookPanelValue106.scheduleViewportRedraw();
  }, [popcornElectronWorkbookPanelValue106, popcornElectronWorkbookPanelValue147]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue108.current = snapshot.selectedFloatingElement?.logicalBounds ?? null;
    popcornElectronWorkbookPanelValue106.scheduleViewportRedraw();
  }, [popcornElectronWorkbookPanelValue106, snapshot.selectedFloatingElement]);
  popcornElectronWorkbookPanelHelper126({
    controller,
    snapshot,
    inputFocused,
    containerRef: popcornElectronWorkbookPanelValue88
  });
  React.useEffect(() => () => {
    cleanupDrawingSession();
    popcornElectronWorkbookPanelValue106.destroy();
  }, [cleanupDrawingSession, popcornElectronWorkbookPanelValue106]);
  React.useEffect(() => {
    !artifactSearchEnabled || findRequestToken <= 0 || (popcornElectronWorkbookPanelValue112(true), popcornElectronWorkbookPanelValue116(popcornElectronWorkbookPanelParam621 => popcornElectronWorkbookPanelParam621 + 1));
  }, [artifactSearchEnabled, findRequestToken]);
  React.useEffect(() => {
    artifactSearchEnabled || (popcornElectronWorkbookPanelValue112(false), popcornElectronWorkbookPanelValue114(""), popcornElectronWorkbookPanelValue118(0), popcornElectronWorkbookPanelValue122({
      matches: [],
      total: 0
    }));
  }, [artifactSearchEnabled]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue118(0);
  }, [popcornElectronWorkbookPanelValue113, snapshot.activeSheetName, snapshot.workbookVersion]);
  React.useEffect(() => {
    if (!artifactSearchEnabled) {
      popcornElectronWorkbookPanelValue122({
        matches: [],
        total: 0
      });
      return;
    }
    let popcornElectronWorkbookPanelValue1069 = false;
    return popcornElectronWorkbookPanelHelper67(controller, popcornElectronWorkbookPanelValue113, snapshot.activeSheetName).then(value => {
      popcornElectronWorkbookPanelValue1069 || popcornElectronWorkbookPanelValue122({
        matches: value.matches.map(item => ({
          address: item.address
        })),
        total: value.total
      });
    }), () => {
      popcornElectronWorkbookPanelValue1069 = true;
    };
  }, [controller, artifactSearchEnabled, popcornElectronWorkbookPanelValue113, snapshot.activeSheetName, snapshot.workbookVersion]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue124(null);
  }, [snapshot.activeSheetName, snapshot.workbookVersion]);
  let popcornElectronWorkbookPanelValue155 = React.useCallback(popcornElectronWorkbookPanelParam499 => {
    let popcornElectronWorkbookPanelValue1379 = on(popcornElectronWorkbookPanelParam499);
    controller.focusCell(popcornElectronWorkbookPanelValue1379.row, popcornElectronWorkbookPanelValue1379.col);
  }, [controller]);
  React.useEffect(() => {
    !popcornElectronWorkbookPanelValue111 || !popcornElectronWorkbookPanelValue145 || popcornElectronWorkbookPanelValue155(popcornElectronWorkbookPanelValue145.address);
  }, [popcornElectronWorkbookPanelValue155, popcornElectronWorkbookPanelValue145, popcornElectronWorkbookPanelValue111]);
  let popcornElectronWorkbookPanelValue156 = React.useCallback(popcornElectronWorkbookPanelParam228 => {
      popcornElectronWorkbookPanelValue121.matches.length !== 0 && popcornElectronWorkbookPanelValue118(popcornElectronWorkbookPanelParam290 => {
        let popcornElectronWorkbookPanelValue1278 = popcornElectronWorkbookPanelValue121.matches.length,
          popcornElectronWorkbookPanelValue1279 = (popcornElectronWorkbookPanelParam290 + popcornElectronWorkbookPanelParam228 + popcornElectronWorkbookPanelValue1278) % popcornElectronWorkbookPanelValue1278,
          popcornElectronWorkbookPanelValue1280 = popcornElectronWorkbookPanelValue121.matches[popcornElectronWorkbookPanelValue1279];
        return popcornElectronWorkbookPanelValue1280 && popcornElectronWorkbookPanelValue155(popcornElectronWorkbookPanelValue1280.address), popcornElectronWorkbookPanelValue1279;
      });
    }, [popcornElectronWorkbookPanelValue155, popcornElectronWorkbookPanelValue121.matches]),
    popcornElectronWorkbookPanelValue157 = React.useMemo(() => !artifactSearchEnabled || !popcornElectronWorkbookPanelValue113.trim() ? "" : popcornElectronWorkbookPanelValue121.total === 0 ? "No results" : `${Math.min(popcornElectronWorkbookPanelValue117 + 1, popcornElectronWorkbookPanelValue121.total)} of ${popcornElectronWorkbookPanelValue121.total}`, [popcornElectronWorkbookPanelValue117, artifactSearchEnabled, popcornElectronWorkbookPanelValue113, popcornElectronWorkbookPanelValue121.total]),
    popcornElectronWorkbookPanelValue158 = popcornElectronWorkbookPanelValue123 == null ? null : popcornElectronWorkbookPanelValue131.current.find(item => item.addr === popcornElectronWorkbookPanelValue123) ?? null,
    popcornElectronWorkbookPanelValue159 = React.useMemo(() => {
      let popcornElectronWorkbookPanelValue1343 = popcornElectronWorkbookPanelValue130.overlays.activeDataValidation;
      return popcornElectronWorkbookPanelValue123 && popcornElectronWorkbookPanelValue1343?.address === popcornElectronWorkbookPanelValue123 ? popcornElectronWorkbookPanelValue1343 : null;
    }, [popcornElectronWorkbookPanelValue123, popcornElectronWorkbookPanelValue130.overlays.activeDataValidation]);
  React.useEffect(() => {
    updateOverlayTransform();
  }, [popcornElectronWorkbookPanelValue133, updateOverlayTransform]);
  React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue89) {
      popcornElectronWorkbookPanelValue92.setSnapshot({
        width: 0,
        height: 0
      });
      return;
    }
    let popcornElectronWorkbookPanelValue1043 = () => {
      popcornElectronWorkbookPanelValue92.setSnapshot({
        width: popcornElectronWorkbookPanelValue89.clientWidth,
        height: popcornElectronWorkbookPanelValue89.clientHeight
      });
    };
    if (popcornElectronWorkbookPanelValue1043(), typeof ResizeObserver > "u") return;
    let popcornElectronWorkbookPanelValue1044 = new ResizeObserver(() => {
      popcornElectronWorkbookPanelValue1043();
    });
    return popcornElectronWorkbookPanelValue1044.observe(popcornElectronWorkbookPanelValue89), () => {
      popcornElectronWorkbookPanelValue1044.disconnect();
    };
  }, [popcornElectronWorkbookPanelValue89, popcornElectronWorkbookPanelValue92]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue110(false);
  }, [snapshot.selectionRect.r1, snapshot.selectionRect.c1, snapshot.selectionRect.r2, snapshot.selectionRect.c2]);
  React.useEffect(() => {
    snapshot.isDraggingSelection && popcornElectronWorkbookPanelValue110(false);
  }, [snapshot.isDraggingSelection]);
  React.useEffect(() => {
    (popcornElectronWorkbookPanelValue137 || inputFocused) && popcornElectronWorkbookPanelValue110(false);
  }, [popcornElectronWorkbookPanelValue137, inputFocused]);
  let popcornElectronWorkbookPanelValue160 = React.useCallback(popcornElectronWorkbookPanelParam501 => {
      popcornElectronWorkbookPanelValue88.current = popcornElectronWorkbookPanelParam501;
      popcornElectronWorkbookPanelValue90(popcornElectronWorkbookPanelParam501);
      popcornElectronWorkbookPanelValue106.attachHost(popcornElectronWorkbookPanelParam501);
    }, [popcornElectronWorkbookPanelValue106]),
    popcornElectronWorkbookPanelValue161 = React.useCallback(popcornElectronWorkbookPanelParam529 => {
      popcornElectronWorkbookPanelValue94.current = popcornElectronWorkbookPanelParam529;
      popcornElectronWorkbookPanelValue106.attachCanvas(popcornElectronWorkbookPanelParam529);
    }, [popcornElectronWorkbookPanelValue106]),
    popcornElectronWorkbookPanelValue162 = React.useCallback(popcornElectronWorkbookPanelParam498 => {
      popcornElectronWorkbookPanelValue95.current = popcornElectronWorkbookPanelParam498;
      popcornElectronWorkbookPanelValue106.attachOverlayCanvas(popcornElectronWorkbookPanelParam498);
    }, [popcornElectronWorkbookPanelValue106]),
    popcornElectronWorkbookPanelValue163 = React.useCallback(event => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey) return false;
      let popcornElectronWorkbookPanelValue1292 = event.key.toLowerCase();
      return popcornElectronWorkbookPanelValue1292 === "c" || popcornElectronWorkbookPanelValue1292 === "x" || popcornElectronWorkbookPanelValue1292 === "v";
    }, []),
    {
      handleHostMouseDownCapture,
      handleHostKeyDown,
      handleHostMouseMove,
      handleCanvasMouseDown: $t,
      handleCanvasDoubleClick,
      handleCanvasMouseLeave,
      handleOverlayMouseDown,
      handleFindQueryChange,
      handleFindNavigatePrevious,
      handleFindNavigateNext,
      handleFindClose,
      handleSetTableFilterValues,
      handleSetTableSort,
      handleSetLogicalScroll,
      handleCellEditChange,
      handleCellEditCommit,
      handleCellEditCancel,
      handleDataValidationSelect,
      handleDataValidationClose,
      handleReplyToCommentThread,
      handleResolveCommentThread,
      handleReopenCommentThread,
      handleDeleteCommentThread,
      handleToggleCommentReaction,
      handleEditThreadComment,
      handleDeleteThreadComment,
      handleFreezePanesCommit
    } = popcornElectronWorkbookPanelHelper114({
      controller,
      snapshot,
      runtime: popcornElectronWorkbookPanelValue106,
      hostRef: popcornElectronWorkbookPanelValue88,
      canvasRef: popcornElectronWorkbookPanelValue94,
      resizingRef: popcornElectronWorkbookPanelValue100,
      workerPointerDragActiveRef: popcornElectronWorkbookPanelValue101,
      selectionStartRef: popcornElectronWorkbookPanelValue97,
      selectionEndRef: popcornElectronWorkbookPanelValue98,
      selectionDraggedRef: popcornElectronWorkbookPanelValue99,
      dataValidationTargetsRef: popcornElectronWorkbookPanelValue131,
      viewportLogger: popcornElectronWorkbookPanelValue87,
      annotationEnabled,
      drawingEnabled,
      annotationMode,
      drawingMode,
      annotationEditorSession,
      annotationEditorSessionRef: $e,
      annotationEditorRef,
      annotationEditorLightDismissArmedRef,
      activeDrawingStrokeRef,
      workbookActiveReviewTarget: popcornElectronWorkbookPanelValue144,
      isEditing,
      inputFocused,
      floatingTextEdit: popcornElectronWorkbookPanelValue148,
      activeCellEditor: popcornElectronWorkbookPanelValue137,
      selectionBounds: popcornElectronWorkbookPanelValue140,
      selectedFloatingElement: popcornElectronWorkbookPanelValue142,
      toolbarRequested: popcornElectronWorkbookPanelValue109,
      setToolbarRequested: popcornElectronWorkbookPanelValue110,
      onAnnotationModeChange,
      onDrawingModeChange,
      cleanupDrawingSession,
      queueAnnotationDraftOpen,
      openCreateAnnotationEditor,
      closeAnnotationEditor,
      requestAnnotationEditorDismiss,
      beginDrawingSession,
      startWorkerViewportPointerDrag: React.useCallback(event => {
        try {
          popcornElectronWorkbookPanelValue88.current?.focus({
            preventScroll: true
          });
        } catch {}
        let popcornElectronWorkbookPanelValue340 = (popcornElectronWorkbookPanelParam251, popcornElectronWorkbookPanelParam252) => {
            let popcornElectronWorkbookPanelValue1240 = popcornElectronWorkbookPanelValue94.current?.getBoundingClientRect();
            return {
              screenX: popcornElectronWorkbookPanelParam251 - (popcornElectronWorkbookPanelValue1240?.left ?? 0),
              screenY: popcornElectronWorkbookPanelParam252 - (popcornElectronWorkbookPanelValue1240?.top ?? 0)
            };
          },
          popcornElectronWorkbookPanelValue341 = (popcornElectronWorkbookPanelParam27, popcornElectronWorkbookPanelParam28) => {
            let popcornElectronWorkbookPanelValue540 = popcornElectronWorkbookPanelValue340(popcornElectronWorkbookPanelParam27, popcornElectronWorkbookPanelParam28),
              popcornElectronWorkbookPanelValue541 = popcornElectronWorkbookPanelHelper12({
                camera: popcornElectronWorkbookPanelValue106.getCamera(),
                screenX: popcornElectronWorkbookPanelValue540.screenX,
                screenY: popcornElectronWorkbookPanelValue540.screenY,
                freezePanes: snapshot.freezePanes,
                columnWidths: snapshot.columnWidths,
                rowHeights: snapshot.rowHeights
              }),
              popcornElectronWorkbookPanelValue542 = popcornElectronWorkbookPanelValue541.x >= 0 && popcornElectronWorkbookPanelValue541.x <= 40 && popcornElectronWorkbookPanelValue541.y >= 0 && popcornElectronWorkbookPanelValue541.y <= 20,
              popcornElectronWorkbookPanelValue543 = popcornElectronWorkbookPanelValue541.y >= 0 && popcornElectronWorkbookPanelValue541.y <= 20 && popcornElectronWorkbookPanelValue541.x > 40,
              popcornElectronWorkbookPanelValue544 = popcornElectronWorkbookPanelValue541.x >= 0 && popcornElectronWorkbookPanelValue541.x <= 40 && popcornElectronWorkbookPanelValue541.y > 20;
            if (popcornElectronWorkbookPanelValue542 || popcornElectronWorkbookPanelValue543 || popcornElectronWorkbookPanelValue544 || isEditing && !popcornElectronWorkbookPanelValue142 && popcornElectronWorkbookPanelHelper22({
              screenX: popcornElectronWorkbookPanelValue540.screenX,
              screenY: popcornElectronWorkbookPanelValue540.screenY,
              selectionRect: snapshot.selectionRect,
              colWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
              camera: popcornElectronWorkbookPanelValue106.getCamera(),
              freezePanes: snapshot.freezePanes
            })) return null;
            if (popcornElectronWorkbookPanelValue142) {
              let popcornElectronWorkbookPanelValue956 = {
                left: popcornElectronWorkbookPanelValue142.logicalBounds.x,
                top: popcornElectronWorkbookPanelValue142.logicalBounds.y,
                width: popcornElectronWorkbookPanelValue142.logicalBounds.width,
                height: popcornElectronWorkbookPanelValue142.logicalBounds.height,
                rotation: popcornElectronWorkbookPanelValue142.rotation
              };
              if (_popcornElectronSurfaceStyleC(popcornElectronWorkbookPanelValue956, popcornElectronWorkbookPanelValue541) || _popcornElectronSurfaceStyleL(popcornElectronWorkbookPanelValue956, popcornElectronWorkbookPanelValue541, popcornElectronWorkbookPanelValue106.getCamera().k) != null || popcornElectronWorkbookPanelValue142.kind === "xlsx-shape" && _popcornElectronSurfaceStyleU(popcornElectronWorkbookPanelValue956, popcornElectronWorkbookPanelValue541, popcornElectronWorkbookPanelValue106.getCamera().k)) return null;
            }
            return {
              row: popcornElectronWorkbookPanelHelper136(popcornElectronWorkbookPanelValue541.y - 20, popcornElectronWorkbookPanelValue139, snapshot.rowHeights.length),
              col: popcornElectronWorkbookPanelHelper136(popcornElectronWorkbookPanelValue541.x - 40, popcornElectronWorkbookPanelValue138, snapshot.columnWidths.length)
            };
          },
          popcornElectronWorkbookPanelValue342 = (popcornElectronWorkbookPanelParam123, popcornElectronWorkbookPanelParam124) => {
            let popcornElectronWorkbookPanelValue950 = popcornElectronWorkbookPanelValue340(popcornElectronWorkbookPanelParam123, popcornElectronWorkbookPanelParam124),
              popcornElectronWorkbookPanelValue951 = popcornElectronWorkbookPanelHelper12({
                camera: popcornElectronWorkbookPanelValue106.getCamera(),
                screenX: popcornElectronWorkbookPanelValue950.screenX,
                screenY: popcornElectronWorkbookPanelValue950.screenY,
                freezePanes: snapshot.freezePanes,
                columnWidths: snapshot.columnWidths,
                rowHeights: snapshot.rowHeights
              });
            return {
              row: popcornElectronWorkbookPanelHelper136(popcornElectronWorkbookPanelValue951.y - 20, popcornElectronWorkbookPanelValue139, snapshot.rowHeights.length),
              col: popcornElectronWorkbookPanelHelper136(popcornElectronWorkbookPanelValue951.x - 40, popcornElectronWorkbookPanelValue138, snapshot.columnWidths.length)
            };
          },
          popcornElectronWorkbookPanelValue343 = popcornElectronWorkbookPanelValue341(event.clientX, event.clientY);
        popcornElectronWorkbookPanelValue97.current = popcornElectronWorkbookPanelValue343;
        popcornElectronWorkbookPanelValue98.current = popcornElectronWorkbookPanelValue343;
        popcornElectronWorkbookPanelValue99.current = false;
        popcornElectronWorkbookPanelValue106.scheduleViewportRedraw();
        controller.handleViewportPointerDown({
          ...popcornElectronWorkbookPanelValue340(event.clientX, event.clientY),
          button: event.button,
          detail: event.detail,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey
        });
        popcornElectronWorkbookPanelValue101.current = true;
        popcornElectronWorkbookPanelValue120(true);
        let popcornElectronWorkbookPanelValue344 = popcornElectronWorkbookPanelHelper106({
            containerRef: popcornElectronWorkbookPanelValue88,
            getZoom: () => popcornElectronWorkbookPanelValue106.getCamera().k,
            panViewportBy: (popcornElectronWorkbookPanelParam511, popcornElectronWorkbookPanelParam512) => {
              popcornElectronWorkbookPanelValue106.panByScroll(popcornElectronWorkbookPanelParam511, popcornElectronWorkbookPanelParam512);
            },
            onAutoScrollFrame: (popcornElectronWorkbookPanelParam170, popcornElectronWorkbookPanelParam171) => {
              popcornElectronWorkbookPanelValue97.current && (popcornElectronWorkbookPanelValue98.current = popcornElectronWorkbookPanelValue342(popcornElectronWorkbookPanelParam170, popcornElectronWorkbookPanelParam171), popcornElectronWorkbookPanelValue106.scheduleViewportRedraw());
              controller.handleViewportPointerMove({
                ...popcornElectronWorkbookPanelValue340(popcornElectronWorkbookPanelParam170, popcornElectronWorkbookPanelParam171),
                buttons: 1,
                altKey: false,
                shiftKey: false,
                ctrlKey: false
              });
            }
          }),
          popcornElectronWorkbookPanelValue345 = _event => {
            popcornElectronWorkbookPanelValue101.current && (popcornElectronWorkbookPanelValue97.current && (popcornElectronWorkbookPanelValue99.current = true, popcornElectronWorkbookPanelValue98.current = popcornElectronWorkbookPanelValue342(_event.clientX, _event.clientY), popcornElectronWorkbookPanelValue106.scheduleViewportRedraw()), popcornElectronWorkbookPanelValue344.updatePointer(_event.clientX, _event.clientY), controller.handleViewportPointerMove({
              ...popcornElectronWorkbookPanelValue340(_event.clientX, _event.clientY),
              buttons: _event.buttons,
              altKey: _event.altKey,
              shiftKey: _event.shiftKey,
              ctrlKey: _event.ctrlKey
            }));
          },
          popcornElectronWorkbookPanelValue346 = () => {
            popcornElectronWorkbookPanelValue101.current = false;
            popcornElectronWorkbookPanelValue120(false);
            popcornElectronWorkbookPanelValue97.current = null;
            popcornElectronWorkbookPanelValue98.current = null;
            popcornElectronWorkbookPanelValue99.current = false;
            popcornElectronWorkbookPanelValue106.scheduleViewportRedraw();
            popcornElectronWorkbookPanelValue344.stop();
            window.removeEventListener("mousemove", popcornElectronWorkbookPanelValue345);
            window.removeEventListener("mouseup", popcornElectronWorkbookPanelValue347);
            window.removeEventListener("blur", popcornElectronWorkbookPanelValue348);
          },
          popcornElectronWorkbookPanelValue347 = _event => {
            popcornElectronWorkbookPanelValue99.current && popcornElectronWorkbookPanelValue97.current != null && popcornElectronWorkbookPanelValue98.current != null ? be(popcornElectronWorkbookPanelHelper139(popcornElectronWorkbookPanelValue97.current, popcornElectronWorkbookPanelValue98.current)) : be("bottom-right");
            controller.handleViewportPointerUp({
              ...popcornElectronWorkbookPanelValue340(_event.clientX, _event.clientY),
              button: _event.button,
              altKey: _event.altKey,
              shiftKey: _event.shiftKey,
              ctrlKey: _event.ctrlKey
            });
            popcornElectronWorkbookPanelValue346();
          },
          popcornElectronWorkbookPanelValue348 = () => {
            controller.cancelViewportPointer();
            popcornElectronWorkbookPanelValue346();
          };
        window.addEventListener("mousemove", popcornElectronWorkbookPanelValue345);
        window.addEventListener("mouseup", popcornElectronWorkbookPanelValue347);
        window.addEventListener("blur", popcornElectronWorkbookPanelValue348);
      }, [popcornElectronWorkbookPanelValue138, controller, isEditing, popcornElectronWorkbookPanelValue139, popcornElectronWorkbookPanelValue106, popcornElectronWorkbookPanelValue142, snapshot.columnWidths, snapshot.freezePanes, snapshot.rowHeights, snapshot.selectionRect]),
      isClipboardShortcut: popcornElectronWorkbookPanelValue163,
      navigateFindMatches: popcornElectronWorkbookPanelValue156,
      setFindQuery: popcornElectronWorkbookPanelValue114,
      setActiveFindIndex: popcornElectronWorkbookPanelValue118,
      setFindOpen: popcornElectronWorkbookPanelValue112,
      activeDataValidationAddress: popcornElectronWorkbookPanelValue123,
      setActiveDataValidationAddress: popcornElectronWorkbookPanelValue124,
      camera: popcornElectronWorkbookPanelValue133,
      reviewTools,
      onCellEditorBlur,
      onCellEditorChange
    }),
    popcornElectronWorkbookPanelValue164 = React.useCallback(event => {
      let popcornElectronWorkbookPanelValue1283 = event.currentTarget.getBoundingClientRect(),
        popcornElectronWorkbookPanelValue1284 = {
          x: event.clientX - popcornElectronWorkbookPanelValue1283.left,
          y: event.clientY - popcornElectronWorkbookPanelValue1283.top
        };
      return popcornElectronWorkbookPanelValue129.current = popcornElectronWorkbookPanelValue1284, popcornElectronWorkbookPanelValue1284;
    }, []),
    popcornElectronWorkbookPanelValue165 = React.useCallback(popcornElectronWorkbookPanelParam211 => {
      let popcornElectronWorkbookPanelValue1160 = popcornElectronWorkbookPanelValue164(popcornElectronWorkbookPanelParam211);
      if (!popcornElectronWorkbookPanelValue151 || popcornElectronWorkbookPanelValue150 == null) return;
      let popcornElectronWorkbookPanelValue1161 = popcornElectronWorkbookPanelHelper138(popcornElectronWorkbookPanelValue1160.x, popcornElectronWorkbookPanelValue1160.y, popcornElectronWorkbookPanelValue150);
      if (popcornElectronWorkbookPanelValue128.current !== popcornElectronWorkbookPanelValue1161) {
        if (popcornElectronWorkbookPanelValue128.current = popcornElectronWorkbookPanelValue1161, popcornElectronWorkbookPanelValue1161) {
          popcornElectronWorkbookPanelValue153();
          popcornElectronWorkbookPanelValue125(true);
          return;
        }
        popcornElectronWorkbookPanelValue154();
      }
    }, [popcornElectronWorkbookPanelValue153, popcornElectronWorkbookPanelValue154, popcornElectronWorkbookPanelValue150, popcornElectronWorkbookPanelValue151, popcornElectronWorkbookPanelValue164]),
    popcornElectronWorkbookPanelValue166 = React.useCallback(popcornElectronWorkbookPanelParam579 => {
      popcornElectronWorkbookPanelValue165(popcornElectronWorkbookPanelParam579);
      handleHostMouseDownCapture(popcornElectronWorkbookPanelParam579);
    }, [handleHostMouseDownCapture, popcornElectronWorkbookPanelValue165]),
    popcornElectronWorkbookPanelValue167 = React.useCallback(popcornElectronWorkbookPanelParam580 => {
      handleHostMouseMove(popcornElectronWorkbookPanelParam580);
      popcornElectronWorkbookPanelValue165(popcornElectronWorkbookPanelParam580);
    }, [handleHostMouseMove, popcornElectronWorkbookPanelValue165]),
    popcornElectronWorkbookPanelValue168 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue129.current = null;
      popcornElectronWorkbookPanelValue151 && (popcornElectronWorkbookPanelValue128.current = false, popcornElectronWorkbookPanelValue154());
    }, [popcornElectronWorkbookPanelValue154, popcornElectronWorkbookPanelValue151]),
    popcornElectronWorkbookPanelValue169 = annotationEnabled && annotationMode && snapshot.isDraggingSelection,
    popcornElectronWorkbookPanelValue170 = annotationEditorAnchorBounds;
  return popcornElectronWorkbookPanelValue169 ? popcornElectronWorkbookPanelValue170 = null : annotationEditorSession?.target.type === "workbook-range" && (popcornElectronWorkbookPanelValue170 = annotationHighlightBounds), <div className="relative h-full">
        <div ref={popcornElectronWorkbookPanelValue160} data-testid="popcorn-viewport-host" role="presentation" className="relative h-full overflow-hidden focus:outline-none focus-visible:outline-none" tabIndex={-1} style={{
      touchAction: "none"
    }} onMouseDownCapture={popcornElectronWorkbookPanelValue166} onKeyDown={handleHostKeyDown} onMouseMove={popcornElectronWorkbookPanelValue167} onMouseLeave={popcornElectronWorkbookPanelValue168}>
          <div className="relative sticky start-0 top-0 h-full">
            <canvas ref={popcornElectronWorkbookPanelValue161} aria-label="Spreadsheet canvas" className="absolute top-0 left-0 focus:outline-none focus-visible:outline-none" tabIndex={-1} onMouseDown={$t} onDoubleClick={handleCanvasDoubleClick} onMouseLeave={handleCanvasMouseLeave} />
            <canvas ref={popcornElectronWorkbookPanelValue162} className="pointer-events-none absolute top-0 left-0 z-10 focus:outline-none focus-visible:outline-none" tabIndex={-1} />
            <canvas ref={popcornElectronWorkbookPanelValue148.setTextOverlayCanvasNode} className="pointer-events-none absolute top-0 left-0 z-[15] focus:outline-none focus-visible:outline-none" tabIndex={-1} />
            <div ref={popcornElectronWorkbookPanelValue96} data-testid="popcorn-overlay" className="pointer-events-none absolute inset-0 z-20" onMouseDown={handleOverlayMouseDown}>
              {artifactSearchEnabled ? React.createElement(FeatureCatalogFindBar, {
            open: popcornElectronWorkbookPanelValue111,
            query: popcornElectronWorkbookPanelValue113,
            summary: popcornElectronWorkbookPanelValue157,
            focusToken: popcornElectronWorkbookPanelValue115,
            onQueryChange: handleFindQueryChange,
            onNavigatePrevious: handleFindNavigatePrevious,
            onNavigateNext: handleFindNavigateNext,
            onClose: handleFindClose
          }) : null}
              {popcornElectronWorkbookPanelValue141.sheetTables.length > 0 ? React.createElement(popcornElectronWorkbookPanelHelper93, {
            sheetName: snapshot.activeSheetName,
            tables: popcornElectronWorkbookPanelValue141.sheetTables,
            filterOptionsByColumn: popcornElectronWorkbookPanelValue141.tableFilterOptions,
            viewColWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
            zoom: popcornElectronWorkbookPanelValue133.k,
            camera: popcornElectronWorkbookPanelValue133,
            freezePanes: snapshot.freezePanes,
            activeFilters: snapshot.tableFilters,
            activeSortByTable: snapshot.tableSorts,
            onSetFilterValues: handleSetTableFilterValues,
            onSetSort: handleSetTableSort
          }) : null}
              {React.createElement(popcornElectronWorkbookPanelHelper103, {
            host: popcornElectronWorkbookPanelValue89,
            camera: popcornElectronWorkbookPanelValue133,
            viewportSizeStore: popcornElectronWorkbookPanelValue92,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
            freezePanes: snapshot.freezePanes,
            bottomScrollReservePx,
            onSetLogicalScroll: handleSetLogicalScroll
          })}
              {popcornElectronWorkbookPanelValue137 ? React.createElement(popcornElectronWorkbookPanelHelper75, {
            rowIndex: popcornElectronWorkbookPanelValue137.row,
            colIndex: popcornElectronWorkbookPanelValue137.col,
            zoom: popcornElectronWorkbookPanelValue133.k,
            viewColWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
            initialValue: popcornElectronWorkbookPanelValue137.initialValue,
            onFocus: onCellEditorFocus,
            onChange: handleCellEditChange,
            onCommit: handleCellEditCommit,
            onCancel: handleCellEditCancel,
            viewport: popcornElectronWorkbookPanelValue137.viewport,
            accentColor: popcornElectronWorkbookPanelValue104,
            camera: popcornElectronWorkbookPanelValue133,
            freezePanes: snapshot.freezePanes,
            sheetName: snapshot.activeSheetName
          }) : null}
              {React.createElement(popcornElectronWorkbookPanelHelper86, {
            open: popcornElectronWorkbookPanelValue123 != null,
            values: popcornElectronWorkbookPanelValue159?.values ?? [],
            selectedValue: popcornElectronWorkbookPanelValue159?.selectedValue ?? "",
            targetBounds: popcornElectronWorkbookPanelValue158?.cssBounds ?? null,
            onSelect: handleDataValidationSelect,
            onClose: handleDataValidationClose
          })}
              {commentThreadsEnabled ? React.createElement(popcornElectronWorkbookPanelHelper18, {
            threads: popcornElectronWorkbookPanelValue141.commentThreads ?? [],
            camera: popcornElectronWorkbookPanelValue133,
            freezePanes: snapshot.freezePanes,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
            isEditing,
            onReply: handleReplyToCommentThread,
            onResolve: handleResolveCommentThread,
            onReopen: handleReopenCommentThread,
            onDeleteThread: handleDeleteCommentThread,
            onToggleReaction: handleToggleCommentReaction,
            onEditComment: handleEditThreadComment,
            onDeleteComment: handleDeleteThreadComment
          }) : null}
              {visiblePendingDrawings.length > 0 ? React.createElement(popcornElectronSurfaceStyleP, {
            testId: "popcorn-drawing-overlay",
            strokes: visiblePendingDrawings.flatMap(item => item.strokes),
            projectPoint: projectWorkbookDrawingPointToViewport,
            clipBounds: popcornElectronWorkbookPanelValue143
          }) : null}
              {draftDrawingStrokes.length > 0 ? React.createElement(popcornElectronSurfaceStyleP, {
            testId: "popcorn-drawing-draft-overlay",
            strokes: draftDrawingStrokes,
            projectPoint: projectWorkbookDrawingPointToViewport,
            clipBounds: popcornElectronWorkbookPanelValue143
          }) : null}
              {activeDrawingStroke ? React.createElement(popcornElectronSurfaceStyleP, {
            testId: "popcorn-drawing-active-overlay",
            strokes: [activeDrawingStroke],
            projectPoint: projectWorkbookDrawingPointToViewport,
            clipBounds: popcornElectronWorkbookPanelValue143
          }) : null}
              {pendingAnnotationMarkers.map(({
            annotation,
            bounds,
            anchorBounds
          }) => {
            let popcornElectronWorkbookPanelValue606 = popcornElectronSurfaceStyleG(annotation.target.type === "workbook-range" ? bounds : anchorBounds);
            return <div key={annotation.annotationId}>
                      {annotation.target.type === "workbook-range" ? null : React.createElement(popcornElectronSurfaceStyleU, {
                bounds,
                fillOnly: true,
                testId: `popcorn-annotation-overlay-${annotation.annotationId}`
              })}
                      {React.createElement(popcornElectronSurfaceStyleW, {
                testId: `popcorn-annotation-marker-${annotation.annotationId}`,
                markerNumber: annotation.annotationNumber,
                position: popcornElectronWorkbookPanelValue606,
                selected: annotationEditorSession?.mode === "edit" && annotationEditorSession.annotationId === annotation.annotationId,
                title: annotation.label,
                onMouseEnter: getAnnotationMarkerMouseEnterHandler(annotation.annotationId),
                onMouseLeave: getAnnotationMarkerMouseLeaveHandler(annotation.annotationId),
                onFocus: getAnnotationMarkerFocusHandler(annotation.annotationId),
                onBlur: getAnnotationMarkerBlurHandler(annotation.annotationId),
                onClick: getAnnotationMarkerClickHandler(annotation)
              })}
                    </div>;
          })}
              {hoveredAnnotationMarker ? React.createElement(popcornElectronSurfaceStyleO, {
            body: hoveredAnnotationMarker.annotation.body,
            markerPosition: popcornElectronSurfaceStyleG(hoveredAnnotationMarker.annotation.target.type === "workbook-range" ? hoveredAnnotationMarker.bounds : hoveredAnnotationMarker.anchorBounds),
            containerElement: popcornElectronWorkbookPanelValue89,
            testId: "popcorn-annotation-preview"
          }) : null}
              {annotationHighlightBounds && !popcornElectronWorkbookPanelValue169 && annotationEditorSession?.target.type !== "workbook-range" ? React.createElement(popcornElectronSurfaceStyleU, {
            bounds: annotationHighlightBounds,
            testId: "popcorn-annotation-highlight"
          }) : null}
              {annotationEnabled && annotationMode && annotationEditorSession?.mode === "create" && popcornElectronWorkbookPanelValue170 && draftAnnotationMarkerNumber != null ? React.createElement(popcornElectronSurfaceStyleW, {
            testId: "popcorn-annotation-draft-marker",
            markerNumber: draftAnnotationMarkerNumber,
            position: popcornElectronSurfaceStyleG(popcornElectronWorkbookPanelValue170),
            draft: true
          }) : null}
              {popcornElectronWorkbookPanelValue151 && _e && popcornElectronWorkbookPanelValue150 && $ ? React.createElement(popcornElectronSurfaceStyleH, {
            bounds: popcornElectronWorkbookPanelValue150,
            placement: popcornElectronWorkbookPanelValue126,
            shortcutScopeElement: popcornElectronWorkbookPanelValue89,
            testId: "popcorn-workbook-ask-for-edit-button",
            onClick: popcornElectronWorkbookPanelParam502 => {
              openCreateAnnotationEditor($, popcornElectronWorkbookPanelParam502);
            }
          }) : null}
              {annotationEditorAnchorBounds ? React.createElement(_popcornElectronSurfaceStyleK, {
            ref: annotationEditorRef,
            anchorBounds: annotationEditorAnchorBounds,
            containerElement: popcornElectronWorkbookPanelValue89,
            mode: annotationEditorSession?.mode ?? "create",
            value: annotationEditorSession?.body ?? "",
            onChange: handleAnnotationEditorChange,
            onCancel: closeAnnotationEditor,
            onDelete: deleteAnnotationEditor,
            onSubmit: submitAnnotationEditor
          }) : null}
              {viewportOverlays.map(item => <div key={item.id}>
                  {item.render({
              controller,
              snapshot,
              camera: popcornElectronWorkbookPanelValue133,
              inputFocused,
              selectionBounds: popcornElectronWorkbookPanelValue140,
              selectionSummary: popcornElectronWorkbookPanelValue136,
              accentFill,
              accentStroke,
              toolbarRequested: popcornElectronWorkbookPanelValue109
            })}
                </div>)}
            </div>
            {React.createElement(or, {
          hostRef: popcornElectronWorkbookPanelValue88,
          camera: popcornElectronWorkbookPanelValue133,
          freezePanes: snapshot.freezePanes,
          columnWidths: snapshot.columnWidths,
          rowHeights: snapshot.rowHeights,
          onCommit: handleFreezePanesCommit
        })}
            {React.createElement($n, {
          canvasRef: popcornElectronWorkbookPanelValue94,
          viewportRef: popcornElectronWorkbookPanelValue88,
          chartTargetsRef: popcornElectronWorkbookPanelValue132,
          getCamera: () => popcornElectronWorkbookPanelValue106.getCamera(),
          selectedFloatingElement: popcornElectronWorkbookPanelValue142,
          suppressHover: popcornElectronWorkbookPanelValue119,
          freezePanes: snapshot.freezePanes,
          columnWidths: snapshot.columnWidths,
          rowHeights: snapshot.rowHeights,
          subscribeToCameraChanges: popcornElectronWorkbookPanelParam590 => popcornElectronWorkbookPanelValue106.subscribeToCameraChanges(popcornElectronWorkbookPanelParam590)
        })}
          </div>
        </div>
      </div>;
}
function popcornElectronWorkbookPanelHelper141({
  title,
  widthPx = 360,
  topPx = 92,
  rightPx = 16,
  onClose,
  children
}) {
  return <div className="pointer-events-auto absolute" style={{
    right: rightPx,
    top: topPx,
    width: widthPx,
    maxWidth: "calc(100% - 32px)",
    maxHeight: `calc(100% - ${topPx + 16}px)`
  }} data-testid={`popcorn-floating-panel-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <section className="border-token-border-light bg-token-bg-primary flex max-h-full min-h-0 flex-col overflow-hidden rounded-2xl border shadow-2xl">
        <header className="border-token-border-light flex items-center justify-between border-b px-3 py-2">
          <h2 className="text-token-text-primary text-sm font-medium">
            {title}
          </h2>
          <button type="button" className="text-token-text-secondary hover:bg-token-bg-tertiary inline-flex size-8 items-center justify-center rounded-md" onClick={onClose} aria-label={`Close ${title}`}>
            {React.createElement(remoteTextEditSessionD, {
            className: "size-4"
          })}
          </button>
        </header>
        <div className="min-h-0 overflow-auto p-3">{children}</div>
      </section>
    </div>;
}
var popcornElectronWorkbookPanelValue40 = {
  text: "",
  citations: [],
  reviewMarkIds: []
};
function popcornElectronWorkbookPanelHelper142(popcornElectronWorkbookPanelParam372) {
  let popcornElectronWorkbookPanelValue1339 = popcornElectronWorkbookPanelParam372.trimStart();
  return {
    kind: "formula",
    text: popcornElectronWorkbookPanelValue1339.startsWith("=") ? popcornElectronWorkbookPanelValue1339 : `=${popcornElectronWorkbookPanelValue1339}`
  };
}
function popcornElectronWorkbookPanelHelper143(popcornElectronWorkbookPanelParam468) {
  return {
    kind: "text",
    runs: [popcornElectronWorkbookPanelHelper146({
      ...popcornElectronWorkbookPanelValue40,
      text: popcornElectronWorkbookPanelParam468
    })]
  };
}
popcornElectronWorkbookPanelHelper143("");
function popcornElectronWorkbookPanelHelper144(popcornElectronWorkbookPanelParam183) {
  if (!Array.isArray(popcornElectronWorkbookPanelParam183) || popcornElectronWorkbookPanelParam183.length === 0) return [popcornElectronWorkbookPanelHelper146(popcornElectronWorkbookPanelValue40)];
  let popcornElectronWorkbookPanelValue1097 = [];
  for (let popcornElectronWorkbookPanelValue1253 of popcornElectronWorkbookPanelParam183) {
    if (!popcornElectronWorkbookPanelValue1253) continue;
    let popcornElectronWorkbookPanelValue1264 = popcornElectronWorkbookPanelHelper146(popcornElectronWorkbookPanelValue1253);
    popcornElectronWorkbookPanelValue1264.text ||= "";
    let popcornElectronWorkbookPanelValue1265 = popcornElectronWorkbookPanelValue1097[popcornElectronWorkbookPanelValue1097.length - 1];
    if (popcornElectronWorkbookPanelValue1265 && popcornElectronWorkbookPanelHelper147(popcornElectronWorkbookPanelValue1265, popcornElectronWorkbookPanelValue1264)) {
      popcornElectronWorkbookPanelValue1265.text += popcornElectronWorkbookPanelValue1264.text;
      continue;
    }
    popcornElectronWorkbookPanelValue1097.push(popcornElectronWorkbookPanelValue1264);
  }
  return popcornElectronWorkbookPanelValue1097.length > 0 ? popcornElectronWorkbookPanelValue1097 : [popcornElectronWorkbookPanelHelper146(popcornElectronWorkbookPanelValue40)];
}
function popcornElectronWorkbookPanelHelper145(popcornElectronWorkbookPanelParam466) {
  return popcornElectronWorkbookPanelHelper144(popcornElectronWorkbookPanelParam466).map(item => item.text ?? "").join("");
}
function popcornElectronWorkbookPanelHelper146(popcornElectronWorkbookPanelParam173) {
  return popcornElectronWorkbookPanelParam173 ? {
    text: popcornElectronWorkbookPanelParam173.text ?? "",
    textStyle: popcornElectronWorkbookPanelParam173.textStyle ? {
      ...popcornElectronWorkbookPanelParam173.textStyle
    } : undefined,
    hyperlink: popcornElectronWorkbookPanelParam173.hyperlink ? {
      ...popcornElectronWorkbookPanelParam173.hyperlink
    } : undefined,
    citations: popcornElectronWorkbookPanelParam173.citations ? [...popcornElectronWorkbookPanelParam173.citations] : [],
    id: popcornElectronWorkbookPanelParam173.id,
    reviewMarkIds: popcornElectronWorkbookPanelParam173.reviewMarkIds ? [...popcornElectronWorkbookPanelParam173.reviewMarkIds] : []
  } : {
    ...popcornElectronWorkbookPanelValue40
  };
}
function popcornElectronWorkbookPanelHelper147(popcornElectronWorkbookPanelParam268, popcornElectronWorkbookPanelParam269) {
  return popcornElectronWorkbookPanelHelper148(popcornElectronWorkbookPanelParam268.textStyle, popcornElectronWorkbookPanelParam269.textStyle) && popcornElectronWorkbookPanelHelper148(popcornElectronWorkbookPanelParam268.hyperlink, popcornElectronWorkbookPanelParam269.hyperlink) && popcornElectronWorkbookPanelHelper149(popcornElectronWorkbookPanelParam268.citations, popcornElectronWorkbookPanelParam269.citations) && popcornElectronWorkbookPanelHelper149(popcornElectronWorkbookPanelParam268.reviewMarkIds, popcornElectronWorkbookPanelParam269.reviewMarkIds);
}
function popcornElectronWorkbookPanelHelper148(popcornElectronWorkbookPanelParam174, popcornElectronWorkbookPanelParam175) {
  if (popcornElectronWorkbookPanelParam174 === popcornElectronWorkbookPanelParam175) return true;
  if (popcornElectronWorkbookPanelParam174 == null || popcornElectronWorkbookPanelParam175 == null) return popcornElectronWorkbookPanelParam174 == null && popcornElectronWorkbookPanelParam175 == null;
  if (typeof popcornElectronWorkbookPanelParam174 != "object" || typeof popcornElectronWorkbookPanelParam175 != "object") return false;
  let popcornElectronWorkbookPanelValue1085 = popcornElectronWorkbookPanelParam174,
    popcornElectronWorkbookPanelValue1086 = popcornElectronWorkbookPanelParam175,
    popcornElectronWorkbookPanelValue1087 = Object.keys(popcornElectronWorkbookPanelValue1085),
    popcornElectronWorkbookPanelValue1088 = Object.keys(popcornElectronWorkbookPanelValue1086);
  return popcornElectronWorkbookPanelValue1087.length === popcornElectronWorkbookPanelValue1088.length ? popcornElectronWorkbookPanelValue1087.every(item => Reflect.get(popcornElectronWorkbookPanelValue1085, item) === Reflect.get(popcornElectronWorkbookPanelValue1086, item)) : false;
}
function popcornElectronWorkbookPanelHelper149(popcornElectronWorkbookPanelParam295, popcornElectronWorkbookPanelParam296) {
  return popcornElectronWorkbookPanelParam295 === popcornElectronWorkbookPanelParam296 ? true : !popcornElectronWorkbookPanelParam295 || !popcornElectronWorkbookPanelParam296 ? !popcornElectronWorkbookPanelParam295 && !popcornElectronWorkbookPanelParam296 : popcornElectronWorkbookPanelParam295.length === popcornElectronWorkbookPanelParam296.length ? popcornElectronWorkbookPanelParam295.every((item, index) => item === popcornElectronWorkbookPanelParam296[index]) : false;
}
function popcornElectronWorkbookPanelHelper150(popcornElectronWorkbookPanelParam492) {
  return popcornElectronWorkbookPanelParam492.kind === "formula" ? popcornElectronWorkbookPanelParam492.text : popcornElectronWorkbookPanelHelper145(popcornElectronWorkbookPanelParam492.runs);
}
var popcornElectronWorkbookPanelValue41 = JSON.parse('[{"name":"STDEV","category":"compatibility","id":13,"description":"This function is available for compatibility with Excel 2007 and earlier. Estimates standard deviation based on a sample (ignores logical values and text in the sample)","example":"=STDEV(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VAR","category":"compatibility","id":47,"description":"This function is available for compatibility with Excel 2007 and earlier. Estimates variance based on a sample (ignores logical values and text in the sample)","example":"=VAR(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a sample of a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"STDEVP","category":"compatibility","id":123,"description":"This function is available for compatibility with Excel 2007 and earlier. Calculates standard deviation based on the entire population given as arguments (ignores logical values and text)","example":"=STDEVP(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VARP","category":"compatibility","id":124,"description":"This function is available for compatibility with Excel 2007 and earlier. Calculates variance based on the entire population (ignores logical values and text in the population)","example":"=VARP(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"RANK","category":"compatibility","id":132,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the rank of a number in a list of numbers: its size relative to other values in the list","example":"=RANK(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the rank","type":"number|range","optional":false},{"name":"ref","description":"Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored","type":"value|range","optional":false},{"name":"order","description":"Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value","type":"value|range","optional":true}]},{"name":"BETADIST","category":"compatibility","id":150,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the cumulative beta probability density function","example":"=BETADIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value between A and B at which to evaluate the function","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"BETAINV","category":"compatibility","id":152,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the cumulative beta probability density function (BETADIST)","example":"=BETAINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the beta distribution","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"BINOMDIST","category":"compatibility","id":153,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the individual term binomial distribution probability","example":"=BINOMDIST(10, A1, A1, A1)","parameters":[{"name":"numberS","description":"Is the number of successes in trials","type":"number|range","optional":false},{"name":"trials","description":"Is the number of independent trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"CHIDIST","category":"compatibility","id":154,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the right-tailed probability of the chi-squared distribution","example":"=CHIDIST(A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CHIINV","category":"compatibility","id":155,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the right-tailed probability of the chi-squared distribution","example":"=CHIINV(A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CONFIDENCE","category":"compatibility","id":157,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the confidence interval for a population mean, using a normal distribution","example":"=CONFIDENCE(A1, A1, A1)","parameters":[{"name":"alpha","description":"Is the significance level used to compute the confidence level, a number greater than 0 and less than 1","type":"value|range","optional":false},{"name":"standardDev","description":"Is the population standard deviation for the data range and is assumed to be known. Standard_dev must be greater than 0","type":"value|range","optional":false},{"name":"size","description":"Is the sample size","type":"value|range","optional":false}]},{"name":"CRITBINOM","category":"compatibility","id":158,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value","example":"=CRITBINOM(A1, A1, A1)","parameters":[{"name":"trials","description":"Is the number of Bernoulli trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is the criterion value, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"EXPONDIST","category":"compatibility","id":160,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the exponential distribution","example":"=EXPONDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value of the function, a nonnegative number","type":"value|range","optional":false},{"name":"lambda","description":"Is the parameter value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"FDIST","category":"compatibility","id":161,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets","example":"=FDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"FINV","category":"compatibility","id":162,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the (right-tailed) F probability distribution: if p = FDIST(x,...), then FINV(p,...) = x","example":"=FINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"FLOOR","category":"compatibility","id":165,"description":"Rounds a number down to the nearest multiple of significance","example":"=FLOOR(10, A1)","parameters":[{"name":"numberParam","description":"Is the numeric value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round. Number and Significance must either both be positive or both be negative","type":"value|range","optional":false}]},{"name":"GAMMADIST","category":"compatibility","id":166,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the gamma distribution","example":"=GAMMADIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMADIST returns the standard gamma distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted","type":"value|range","optional":false}]},{"name":"GAMMAINV","category":"compatibility","id":167,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the gamma cumulative distribution: if p = GAMMADIST(x,...), then GAMMAINV(p,...) = x","example":"=GAMMAINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMAINV returns the inverse of the standard gamma distribution","type":"value|range","optional":false}]},{"name":"CEILING","category":"compatibility","id":168,"description":"Rounds a number up, to the nearest multiple of significance","example":"=CEILING(10, A1)","parameters":[{"name":"numberParam","description":"Is the value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round","type":"value|range","optional":false}]},{"name":"HYPGEOMDIST","category":"compatibility","id":169,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the hypergeometric distribution","example":"=HYPGEOMDIST(A1, 10, A1, 10)","parameters":[{"name":"sampleS","description":"Is the number of successes in the sample","type":"value|range","optional":false},{"name":"numberSample","description":"Is the size of the sample","type":"number|range","optional":false},{"name":"populationS","description":"Is the number of successes in the population","type":"value|range","optional":false},{"name":"numberPop","description":"Is the population size","type":"number|range","optional":false}]},{"name":"LOGNORMDIST","category":"compatibility","id":170,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the cumulative lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGNORMDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a positive number","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false}]},{"name":"LOGINV","category":"compatibility","id":171,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false}]},{"name":"NEGBINOMDIST","category":"compatibility","id":172,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success","example":"=NEGBINOMDIST(10, 10, A1)","parameters":[{"name":"numberF","description":"Is the number of failures","type":"number|range","optional":false},{"name":"numberS","description":"Is the threshold number of successes","type":"number|range","optional":false},{"name":"probabilityS","description":"Is the probability of a success; a number between 0 and 1","type":"value|range","optional":false}]},{"name":"NORMDIST","category":"compatibility","id":173,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the normal cumulative distribution for the specified mean and standard deviation","example":"=NORMDIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value for which you want the distribution","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"NORMSDIST","category":"compatibility","id":174,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the standard normal cumulative distribution (has a mean of zero and a standard deviation of one)","example":"=NORMSDIST(A1)","parameters":[{"name":"z","description":"Is the value for which you want the distribution","type":"value|range","optional":false}]},{"name":"NORMINV","category":"compatibility","id":175,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation","example":"=NORMINV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false}]},{"name":"NORMSINV","category":"compatibility","id":176,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one)","example":"=NORMSINV(A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"POISSON","category":"compatibility","id":180,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the Poisson distribution","example":"=POISSON(A1, A1, A1)","parameters":[{"name":"x","description":"Is the number of events","type":"value|range","optional":false},{"name":"mean","description":"Is the expected numeric value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"TDIST","category":"compatibility","id":181,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the Student\'s t-distribution","example":"=TDIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false},{"name":"tails","description":"Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2","type":"value|range","optional":false}]},{"name":"WEIBULL","category":"compatibility","id":182,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the Weibull distribution","example":"=WEIBULL(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"CHITEST","category":"compatibility","id":186,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom","example":"=CHITEST(A1:A5, A1:A5)","parameters":[{"name":"actualRange","description":"Is the range of data that contains observations to test against expected values","type":"range","optional":false},{"name":"expectedRange","description":"Is the range of data that contains the ratio of the product of row totals and column totals to the grand total","type":"range","optional":false}]},{"name":"COVAR","category":"compatibility","id":188,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns covariance, the average of the products of deviations for each data point pair in two data sets","example":"=COVAR({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is the second cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"FORECAST","category":"compatibility","id":189,"description":"This function is available for compatibility with Excel 2013 and earlier. Calculates, or predicts, a future value along a linear trend by using existing values","example":"=FORECAST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the data point for which you want to predict a value and must be a numeric value","type":"value|range","optional":false},{"name":"knownYs","description":"Is the dependent array or range of numeric data","type":"value|range","optional":false},{"name":"knownXs","description":"Is the independent array or range of numeric data. The variance of Known_x\'s must not be zero","type":"value|range","optional":false}]},{"name":"FTEST","category":"compatibility","id":190,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the result of an F-test, the two-tailed probability that the variances in Array1 and Array2 are not significantly different","example":"=FTEST({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false},{"name":"array2","description":"Is the second array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false}]},{"name":"TTEST","category":"compatibility","id":196,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the probability associated with a Student\'s t-Test","example":"=TTEST({1,2;3,4}, {1,2;3,4}, A1, A1)","parameters":[{"name":"array1","description":"Is the first data set","type":"array","optional":false},{"name":"array2","description":"Is the second data set","type":"array","optional":false},{"name":"tails","description":"Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2","type":"value|range","optional":false},{"name":"typeParam","description":"Is the kind of t-test: paired = 1, two-sample equal variance (homoscedastic) = 2, two-sample unequal variance = 3","type":"value|range","optional":false}]},{"name":"ZTEST","category":"compatibility","id":204,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the one-tailed P-value of a z-test","example":"=ZTEST({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data against which to test X","type":"array","optional":false},{"name":"x","description":"Is the value to test","type":"value|range","optional":false},{"name":"sigma","description":"Is the population (known) standard deviation. If omitted, the sample standard deviation is used","type":"value|range","optional":true}]},{"name":"QUARTILE","category":"compatibility","id":207,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the quartile of a data set","example":"=QUARTILE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or cell range of numeric values for which you want the quartile value","type":"array","optional":false},{"name":"quart","description":"Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4","type":"value|range","optional":false}]},{"name":"PERCENTILE","category":"compatibility","id":208,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the k-th percentile of values in a range","example":"=PERCENTILE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data that defines relative standing","type":"array","optional":false},{"name":"k","description":"Is the percentile value that is between 0 through 1, inclusive","type":"value|range","optional":false}]},{"name":"PERCENTRANK","category":"compatibility","id":209,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the rank of a value in a data set as a percentage of the data set","example":"=PERCENTRANK({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data with numeric values that defines relative standing","type":"array","optional":false},{"name":"x","description":"Is the value for which you want to know the rank","type":"value|range","optional":false},{"name":"significance","description":"Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%)","type":"value|range","optional":true}]},{"name":"MODE","category":"compatibility","id":210,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the most frequently occurring, or repetitive, value in an array or range of data","example":"=MODE(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, or names, arrays, or references that contain numbers for which you want the mode","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"TINV","category":"compatibility","id":212,"description":"This function is available for compatibility with Excel 2007 and earlier. Returns the two-tailed inverse of the Student\'s t-distribution","example":"=TINV(A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the two-tailed Student\'s t-distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is a positive integer indicating the number of degrees of freedom to characterize the distribution","type":"value|range","optional":false}]},{"name":"CONCATENATE","category":"compatibility","id":213,"description":"Joins several text strings into one text string","example":"=CONCATENATE(\\"text1\\", C1:C5, \\"text2\\", C1:C5)","parameters":[{"name":"text1","description":"Are 1 to 255 text strings to be joined into a single text string and can be text strings, numbers, or single-cell references","type":"string","optional":false},{"name":"text2","description":"Text string.","type":"string","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]}]'),
  popcornElectronWorkbookPanelValue42 = [{
    name: "CUBEVALUE",
    category: "cube",
    id: 233,
    description: "Returns an aggregated value from the cube.",
    example: "=CUBEVALUE(A1, C1:C5, A1, C1:C5)",
    parameters: [{
      name: "connection",
      description: "Is the name of a connection to an OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "memberExpression1",
      description: "Is a slicer that determines the portion of the OLAP cube for which the aggregated value is to be retrieved",
      type: "value|range",
      optional: true
    }, {
      name: "rest",
      description: "Value, reference, or range.",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "CUBEMEMBER",
    category: "cube",
    id: 234,
    description: "Returns a member or tuple from the cube.",
    example: "=CUBEMEMBER(A1, A1, A1)",
    parameters: [{
      name: "connection",
      description: "Is the name of a connection to an OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "memberExpression",
      description: "Is the expression representing the name of a member or tuple in the OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "caption",
      description: "Is the caption to be displayed in the cell",
      type: "value|range",
      optional: true
    }]
  }, {
    name: "CUBEMEMBERPROPERTY",
    category: "cube",
    id: 235,
    description: "Returns the value of a member property from the cube.",
    example: "=CUBEMEMBERPROPERTY(A1, A1, A1)",
    parameters: [{
      name: "connection",
      description: "Is the name of a connection to an OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "memberExpression",
      description: "Is the expression representing the name of a member in the OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "property",
      description: "Is the property name",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "CUBERANKEDMEMBER",
    category: "cube",
    id: 236,
    description: "Returns the nth, or ranked, member in a set.",
    example: "=CUBERANKEDMEMBER(A1, A1, A1)",
    parameters: [{
      name: "connection",
      description: "Is the name of a connection to an OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "setExpression",
      description: "Is the set from which the element is to be retrieved",
      type: "value|range",
      optional: false
    }, {
      name: "rank",
      description: "Is the rank of the element to be retrieved",
      type: "value|range",
      optional: false
    }, {
      name: "caption",
      description: "Is the caption to be displayed in the cell",
      type: "value|range",
      optional: true
    }]
  }, {
    name: "CUBEKPIMEMBER",
    category: "cube",
    id: 329,
    description: "Returns a key performance indicator (KPI) property and displays the KPI name in the cell.",
    example: "=CUBEKPIMEMBER(A1, A1, A1)",
    parameters: [{
      name: "connection",
      description: "Is the name of a connection to an OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "kpiName",
      description: "Is the KPI name",
      type: "value|range",
      optional: false
    }, {
      name: "kpiProperty",
      description: "Is the KPI property",
      type: "value|range",
      optional: false
    }, {
      name: "caption",
      description: "Is the caption to be displayed in the cell",
      type: "value|range",
      optional: true
    }]
  }, {
    name: "CUBESET",
    category: "cube",
    id: 330,
    description: "Defines a calculated set of members or tuples by sending a set expression to the cube on the server, which creates the set, and then returns that set to Microsoft Excel.",
    example: "=CUBESET(A1, A1, A1)",
    parameters: [{
      name: "connection",
      description: "Is the name of a connection to an OLAP cube",
      type: "value|range",
      optional: false
    }, {
      name: "setExpression",
      description: "Is the expression for the set",
      type: "value|range",
      optional: false
    }, {
      name: "caption",
      description: "Is the caption to be displayed in the cell",
      type: "value|range",
      optional: true
    }, {
      name: "sortOrder",
      description: "Is the sort order",
      type: "value|range",
      optional: true
    }, {
      name: "sortBy",
      description: "Is the sort by",
      type: "value|range",
      optional: true
    }]
  }, {
    name: "CUBESETCOUNT",
    category: "cube",
    id: 331,
    description: "Returns the number of items in a set.",
    example: "=CUBESETCOUNT(A1)",
    parameters: [{
      name: "setParam",
      description: "Is the set whose elements are to be counted",
      type: "value|range",
      optional: false
    }]
  }],
  popcornElectronWorkbookPanelValue43 = JSON.parse('[{"name":"DCOUNT","category":"database","id":41,"description":"Counts the cells containing numbers in the field (column) of records in the database that match the conditions you specify","example":"=DCOUNT(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DSUM","category":"database","id":42,"description":"Adds the numbers in the field (column) of records in the database that match the conditions you specify","example":"=DSUM(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DAVERAGE","category":"database","id":43,"description":"Returns the average of the values in a database field after filtering rows with a criteria table.","example":"=DAVERAGE(A1:C10, \\"Sales\\", E1:F2)","parameters":[{"name":"database","description":"Structured table (including headers) that holds the records to query.","type":"range","optional":false},{"name":"field","description":"Column to average, specified by header name (\\"Sales\\") or column index.","type":"string|number","optional":false},{"name":"criteria","description":"Criteria range with column labels and the filters to apply to the database.","type":"range","optional":false}]},{"name":"DMIN","category":"database","id":44,"description":"Returns the smallest number in the field (column) of records in the database that match the conditions you specify","example":"=DMIN(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DMAX","category":"database","id":45,"description":"Returns the largest number in the field (column) of records in the database that match the conditions you specify","example":"=DMAX(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DSTDEV","category":"database","id":46,"description":"Estimates the standard deviation based on a sample from selected database entries","example":"=DSTDEV(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DVAR","category":"database","id":48,"description":"Estimates variance based on a sample from selected database entries","example":"=DVAR(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DPRODUCT","category":"database","id":121,"description":"Multiplies the values in the field (column) of records in the database that match the conditions you specify","example":"=DPRODUCT(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DSTDEVP","category":"database","id":125,"description":"Calculates the standard deviation based on the entire population of selected database entries","example":"=DSTDEVP(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DVARP","category":"database","id":126,"description":"Calculates variance based on the entire population of selected database entries","example":"=DVARP(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DCOUNTA","category":"database","id":129,"description":"Counts nonblank cells in the field (column) of records in the database that match the conditions you specify","example":"=DCOUNTA(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]},{"name":"DGET","category":"database","id":145,"description":"Extracts from a database a single record that matches the conditions you specify","example":"=DGET(A1, A1, \\">0\\")","parameters":[{"name":"database","description":"Is the range of cells that makes up the list or database. A database is a list of related data","type":"value|range","optional":false},{"name":"field","description":"Is either the label of the column in double quotation marks or a number that represents the column\'s position in the list","type":"value|range","optional":false},{"name":"criteria","description":"Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition","type":"criteria","optional":false}]}]'),
  popcornElectronWorkbookPanelValue44 = JSON.parse('[{"name":"DATE","category":"date-time","id":63,"description":"Returns the number that represents the date in Microsoft Excel date-time code","example":"=DATE(A1, A1, A1)","parameters":[{"name":"year","description":"Is a number from 1900 or 1904 (depending on the workbook\'s date system) to 9999","type":"value|range","optional":false},{"name":"month","description":"Is a number from 1 to 12 representing the month of the year","type":"value|range","optional":false},{"name":"day","description":"Is a number from 1 to 31 representing the day of the month","type":"value|range","optional":false}]},{"name":"TIME","category":"date-time","id":64,"description":"Converts hours, minutes, and seconds given as numbers to an Excel serial number, formatted with a time format","example":"=TIME(A1, A1, A1)","parameters":[{"name":"hour","description":"Is a number from 0 to 23 representing the hour","type":"value|range","optional":false},{"name":"minute","description":"Is a number from 0 to 59 representing the minute","type":"value|range","optional":false},{"name":"second","description":"Is a number from 0 to 59 representing the second","type":"value|range","optional":false}]},{"name":"DAY","category":"date-time","id":65,"description":"Returns the day of the month, a number from 1 to 31.","example":"=DAY(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel","type":"number|range","optional":false}]},{"name":"MONTH","category":"date-time","id":66,"description":"Returns the month, a number from 1 (January) to 12 (December).","example":"=MONTH(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel","type":"number|range","optional":false}]},{"name":"YEAR","category":"date-time","id":67,"description":"Returns the year of a date, an integer in the range 1900 - 9999.","example":"=YEAR(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel","type":"number|range","optional":false}]},{"name":"WEEKDAY","category":"date-time","id":68,"description":"Returns a number from 1 to 7 identifying the day of the week of a date.","example":"=WEEKDAY(10, A1)","parameters":[{"name":"serialNumber","description":"Is a number that represents a date","type":"number|range","optional":false},{"name":"returnType","description":"Is a number: for Sunday=1 through Saturday=7, use 1; for Monday=1 through Sunday=7, use 2; for Monday=0 through Sunday=6, use 3","type":"value|range","optional":true}]},{"name":"HOUR","category":"date-time","id":69,"description":"Returns the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.).","example":"=HOUR(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel, or text in time format, such as 16:48:00 or 4:48:00 PM","type":"number|range","optional":false}]},{"name":"MINUTE","category":"date-time","id":70,"description":"Returns the minute, a number from 0 to 59.","example":"=MINUTE(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:00 or 4:48:00 PM","type":"number|range","optional":false}]},{"name":"SECOND","category":"date-time","id":71,"description":"Returns the second, a number from 0 to 59.","example":"=SECOND(10)","parameters":[{"name":"serialNumber","description":"Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:23 or 4:48:47 PM","type":"number|range","optional":false}]},{"name":"NOW","category":"date-time","id":72,"description":"Returns the current date and time formatted as a date and time.","example":"=NOW()","parameters":[]},{"name":"DATEVALUE","category":"date-time","id":106,"description":"Converts a date in the form of text to a number that represents the date in Microsoft Excel date-time code","example":"=DATEVALUE(DATE(2024, 1, 1))","parameters":[{"name":"dateText","description":"Is text that represents a date in a Microsoft Excel date format, between 1/1/1900 or 1/1/1904 (depending on the workbook\'s date system) and 12/31/9999","type":"string","optional":false}]},{"name":"TIMEVALUE","category":"date-time","id":107,"description":"Converts a text time to an Excel serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula","example":"=TIMEVALUE(TIME(9, 0, 0))","parameters":[{"name":"timeText","description":"Is a text string that gives a time in any one of the Microsoft Excel time formats (date information in the string is ignored)","type":"string","optional":false}]},{"name":"DAYS360","category":"date-time","id":134,"description":"Returns the number of days between two dates based on a 360-day year (twelve 30-day months)","example":"=DAYS360(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false},{"name":"endDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false},{"name":"method","description":"Is a logical value specifying the calculation method: U.S. (NASD) = FALSE or omitted; European = TRUE.","type":"value|range","optional":true}]},{"name":"TODAY","category":"date-time","id":135,"description":"Returns the current date formatted as a date.","example":"=TODAY()","parameters":[]},{"name":"EDATE","category":"date-time","id":302,"description":"Returns the serial number of the date that is the indicated number of months before or after the start date","example":"=EDATE(DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"months","description":"Is the number of months before or after start_date","type":"value|range","optional":false}]},{"name":"EOMONTH","category":"date-time","id":303,"description":"Returns the serial number of the last day of the month before or after a specified number of months","example":"=EOMONTH(DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"months","description":"Is the number of months before or after the start_date","type":"value|range","optional":false}]},{"name":"YEARFRAC","category":"date-time","id":304,"description":"Returns the year fraction representing the number of whole days between start_date and end_date","example":"=YEARFRAC(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"endDate","description":"Is a serial date number that represents the end date","type":"date","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"WEEKNUM","category":"date-time","id":318,"description":"Returns the week number in the year","example":"=WEEKNUM(10, A1)","parameters":[{"name":"serialNumber","description":"Is the date-time code used by Microsoft Excel for date and time calculation","type":"number|range","optional":false},{"name":"returnType","description":"Is a number (1 or 2) that determines the type of the return value","type":"value|range","optional":true}]},{"name":"WORKDAY","category":"date-time","id":323,"description":"Returns the serial number of the date before or after a specified number of workdays","example":"=WORKDAY(DATE(2024, 1, 1), A1, A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"days","description":"Is the number of nonweekend and non-holiday days before or after start_date","type":"value|range","optional":false},{"name":"holidays","description":"Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"NETWORKDAYS","category":"date-time","id":324,"description":"Returns the number of whole workdays between two dates","example":"=NETWORKDAYS(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"endDate","description":"Is a serial date number that represents the end date","type":"date","optional":false},{"name":"holidays","description":"Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"NETWORKDAYS.INTL","category":"date-time","id":372,"description":"Returns the number of whole workdays between two dates with custom weekend parameters","example":"=NETWORKDAYS.INTL(DATE(2024, 1, 1), DATE(2024, 1, 1), A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"endDate","description":"Is a serial date number that represents the end date","type":"date","optional":false},{"name":"weekend","description":"Is a number or string specifying when weekends occur","type":"value|range","optional":true},{"name":"holidays","description":"Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"WORKDAY.INTL","category":"date-time","id":373,"description":"Returns the serial number of the date before or after a specified number of workdays with custom weekend parameters","example":"=WORKDAY.INTL(DATE(2024, 1, 1), A1, A1)","parameters":[{"name":"startDate","description":"Is a serial date number that represents the start date","type":"date","optional":false},{"name":"days","description":"Is the number of nonweekend and non-holiday days before or after start_date","type":"value|range","optional":false},{"name":"weekend","description":"Is a number or string specifying when weekends occur","type":"value|range","optional":true},{"name":"holidays","description":"Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays","type":"value|range","optional":true}]},{"name":"DAYS","category":"date-time","id":420,"description":"Returns the number of days between the two dates.","example":"=DAYS(DATE(2024, 1, 1), DATE(2024, 1, 1))","parameters":[{"name":"endDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false},{"name":"startDate","description":"Start_date and end_date are the two dates between which you want to know the number of days","type":"date","optional":false}]},{"name":"ISOWEEKNUM","category":"date-time","id":431,"description":"Returns the ISO week number in the year for a given date","example":"=ISOWEEKNUM(DATE(2024, 1, 1))","parameters":[{"name":"date","description":"Is the date-time code used by Microsoft Excel for date and time calculation","type":"date","optional":false}]}]'),
  popcornElectronWorkbookPanelValue45 = JSON.parse('[{"name":"HEX2BIN","category":"engineering","id":237,"description":"Converts a Hexadecimal number to binary","example":"=HEX2BIN(10, A1)","parameters":[{"name":"numberParam","description":"Is the hexadecimal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"HEX2DEC","category":"engineering","id":238,"description":"Converts a hexadecimal number to decimal","example":"=HEX2DEC(10)","parameters":[{"name":"numberParam","description":"Is the hexadecimal number you want to convert","type":"number|range","optional":false}]},{"name":"HEX2OCT","category":"engineering","id":239,"description":"Converts a hexadecimal number to octal","example":"=HEX2OCT(10, A1)","parameters":[{"name":"numberParam","description":"Is the hexadecimal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"DEC2BIN","category":"engineering","id":240,"description":"Converts a decimal number to binary","example":"=DEC2BIN(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal integer you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"DEC2HEX","category":"engineering","id":241,"description":"Converts a decimal number to hexadecimal","example":"=DEC2HEX(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal integer you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"DEC2OCT","category":"engineering","id":242,"description":"Converts a decimal number to octal","example":"=DEC2OCT(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal integer you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"OCT2BIN","category":"engineering","id":243,"description":"Converts an octal number to binary","example":"=OCT2BIN(10, A1)","parameters":[{"name":"numberParam","description":"Is the octal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"OCT2HEX","category":"engineering","id":244,"description":"Converts an octal number to hexadecimal","example":"=OCT2HEX(10, A1)","parameters":[{"name":"numberParam","description":"Is the octal number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"OCT2DEC","category":"engineering","id":245,"description":"Converts an octal number to decimal","example":"=OCT2DEC(10)","parameters":[{"name":"numberParam","description":"Is the octal number you want to convert","type":"number|range","optional":false}]},{"name":"BIN2DEC","category":"engineering","id":246,"description":"Converts a binary number to decimal","example":"=BIN2DEC(10)","parameters":[{"name":"numberParam","description":"Is the binary number you want to convert","type":"number|range","optional":false}]},{"name":"BIN2OCT","category":"engineering","id":247,"description":"Converts a binary number to octal","example":"=BIN2OCT(10, A1)","parameters":[{"name":"numberParam","description":"Is the binary number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"BIN2HEX","category":"engineering","id":248,"description":"Converts a binary number to hexadecimal","example":"=BIN2HEX(10, A1)","parameters":[{"name":"numberParam","description":"Is the binary number you want to convert","type":"number|range","optional":false},{"name":"places","description":"Is the number of characters to use","type":"value|range","optional":true}]},{"name":"IMSUB","category":"engineering","id":249,"description":"Returns the difference of two complex numbers","example":"=IMSUB(10, 10)","parameters":[{"name":"inumber1","description":"Is the complex number from which to subtract inumber2","type":"number|range","optional":false},{"name":"inumber2","description":"Is the complex number to subtract from inumber1","type":"number|range","optional":false}]},{"name":"IMDIV","category":"engineering","id":250,"description":"Returns the quotient of two complex numbers","example":"=IMDIV(10, 10)","parameters":[{"name":"inumber1","description":"Is the complex numerator or dividend","type":"number|range","optional":false},{"name":"inumber2","description":"Is the complex denominator or divisor","type":"number|range","optional":false}]},{"name":"IMPOWER","category":"engineering","id":251,"description":"Returns a complex number raised to an integer power","example":"=IMPOWER(10, 10)","parameters":[{"name":"inumber","description":"Is a complex number you want to raise to a power","type":"number|range","optional":false},{"name":"numberParam","description":"Is the power to which you want to raise the complex number","type":"number|range","optional":false}]},{"name":"IMABS","category":"engineering","id":252,"description":"Returns the absolute value (modulus) of a complex number","example":"=IMABS(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the absolute value","type":"number|range","optional":false}]},{"name":"IMSQRT","category":"engineering","id":253,"description":"Returns the square root of a complex number","example":"=IMSQRT(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the square root","type":"number|range","optional":false}]},{"name":"IMLN","category":"engineering","id":254,"description":"Returns the natural logarithm of a complex number","example":"=IMLN(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the natural logarithm","type":"number|range","optional":false}]},{"name":"IMLOG2","category":"engineering","id":255,"description":"Returns the base-2 logarithm of a complex number","example":"=IMLOG2(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the base-2 logarithm","type":"number|range","optional":false}]},{"name":"IMLOG10","category":"engineering","id":256,"description":"Returns the base-10 logarithm of a complex number","example":"=IMLOG10(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the common logarithm","type":"number|range","optional":false}]},{"name":"IMSIN","category":"engineering","id":257,"description":"Returns the sine of a complex number","example":"=IMSIN(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the sine","type":"number|range","optional":false}]},{"name":"IMCOS","category":"engineering","id":258,"description":"Returns the cosine of a complex number","example":"=IMCOS(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the cosine","type":"number|range","optional":false}]},{"name":"IMEXP","category":"engineering","id":259,"description":"Returns the exponential of a complex number","example":"=IMEXP(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the exponential","type":"number|range","optional":false}]},{"name":"IMARGUMENT","category":"engineering","id":260,"description":"Returns the argument q, an angle expressed in radians","example":"=IMARGUMENT(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the argument","type":"number|range","optional":false}]},{"name":"IMCONJUGATE","category":"engineering","id":261,"description":"Returns the complex conjugate of a complex number","example":"=IMCONJUGATE(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the conjugate","type":"number|range","optional":false}]},{"name":"IMAGINARY","category":"engineering","id":262,"description":"Returns the imaginary coefficient of a complex number","example":"=IMAGINARY(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the imaginary coefficient","type":"number|range","optional":false}]},{"name":"IMREAL","category":"engineering","id":263,"description":"Returns the real coefficient of a complex number","example":"=IMREAL(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the real coefficient","type":"number|range","optional":false}]},{"name":"COMPLEX","category":"engineering","id":264,"description":"Converts real and imaginary coefficients into a complex number","example":"=COMPLEX(A1, A1, A1)","parameters":[{"name":"realNum","description":"Is the real coefficient of the complex number","type":"value|range","optional":false},{"name":"iNum","description":"Is the imaginary coefficient of the complex number","type":"value|range","optional":false},{"name":"suffix","description":"Is the suffix for the imaginary component of the complex number","type":"value|range","optional":true}]},{"name":"IMSUM","category":"engineering","id":265,"description":"Returns the sum of complex numbers","example":"=IMSUM(10, C1:C5, 10, C1:C5)","parameters":[{"name":"inumber1","description":"Are from 1 to 255 complex numbers to add","type":"number|range","optional":false},{"name":"inumber2","description":"Number or reference.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"IMPRODUCT","category":"engineering","id":266,"description":"Returns the product of 1 to 255 complex numbers","example":"=IMPRODUCT(10, C1:C5, 10, C1:C5)","parameters":[{"name":"inumber1","description":"Inumber1, Inumber2,... are from 1 to 255 complex numbers to multiply.","type":"number|range","optional":false},{"name":"inumber2","description":"Number or reference.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"DELTA","category":"engineering","id":271,"description":"Tests whether two numbers are equal","example":"=DELTA(10, 20)","parameters":[{"name":"number1","description":"Is the first number","type":"number|range","optional":false},{"name":"number2","description":"Is the second number","type":"number|range","optional":true}]},{"name":"GESTEP","category":"engineering","id":272,"description":"Tests whether a number is greater than a threshold value","example":"=GESTEP(10, A1)","parameters":[{"name":"numberParam","description":"Is the value to test against step","type":"number|range","optional":false},{"name":"step","description":"Is the threshold value","type":"value|range","optional":true}]},{"name":"ERF","category":"engineering","id":276,"description":"Returns the error function","example":"=ERF(A1, A1)","parameters":[{"name":"lowerLimit","description":"Is the lower bound for integrating ERF","type":"value|range","optional":false},{"name":"upperLimit","description":"Is the upper bound for integrating ERF","type":"value|range","optional":true}]},{"name":"ERFC","category":"engineering","id":277,"description":"Returns the complementary error function","example":"=ERFC(A1)","parameters":[{"name":"x","description":"Is the lower bound for integrating ERF","type":"value|range","optional":false}]},{"name":"BESSELJ","category":"engineering","id":278,"description":"Returns the Bessel function Jn(x)","example":"=BESSELJ(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the Bessel function","type":"value|range","optional":false}]},{"name":"BESSELK","category":"engineering","id":279,"description":"Returns the modified Bessel function Kn(x)","example":"=BESSELK(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the function","type":"value|range","optional":false}]},{"name":"BESSELY","category":"engineering","id":280,"description":"Returns the Bessel function Yn(x)","example":"=BESSELY(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the function","type":"value|range","optional":false}]},{"name":"BESSELI","category":"engineering","id":281,"description":"Returns the modified Bessel function In(x)","example":"=BESSELI(A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function","type":"value|range","optional":false},{"name":"n","description":"Is the order of the Bessel function","type":"value|range","optional":false}]},{"name":"CONVERT","category":"engineering","id":320,"description":"Converts a number from one measurement system to another","example":"=CONVERT(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the value in from_units to convert","type":"number|range","optional":false},{"name":"fromUnit","description":"Is the units for number","type":"value|range","optional":false},{"name":"toUnit","description":"Is the units for the result","type":"value|range","optional":false}]},{"name":"ERF.PRECISE","category":"engineering","id":392,"description":"Returns the error function","example":"=ERF.PRECISE(A1)","parameters":[{"name":"x","description":"Is the lower bound for integrating ERF.PRECISE","type":"value|range","optional":false}]},{"name":"ERFC.PRECISE","category":"engineering","id":393,"description":"Returns the complementary error function","example":"=ERFC.PRECISE(A1)","parameters":[{"name":"x","description":"Is the lower bound for integrating ERFC.PRECISE","type":"value|range","optional":false}]},{"name":"IMTAN","category":"engineering","id":403,"description":"Returns the tangent of a complex number","example":"=IMTAN(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the tangent","type":"number|range","optional":false}]},{"name":"IMCOT","category":"engineering","id":404,"description":"Returns the cotangent of a complex number","example":"=IMCOT(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the cotangent","type":"number|range","optional":false}]},{"name":"IMCSC","category":"engineering","id":405,"description":"Returns the cosecant of a complex number","example":"=IMCSC(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the cosecant","type":"number|range","optional":false}]},{"name":"IMCSCH","category":"engineering","id":406,"description":"Returns the hyperbolic cosecant of a complex number","example":"=IMCSCH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic cosecant","type":"number|range","optional":false}]},{"name":"IMSEC","category":"engineering","id":407,"description":"Returns the secant of a complex number","example":"=IMSEC(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the secant","type":"number|range","optional":false}]},{"name":"IMSECH","category":"engineering","id":408,"description":"Returns the hyperbolic secant of a complex number","example":"=IMSECH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic secant","type":"number|range","optional":false}]},{"name":"BITAND","category":"engineering","id":409,"description":"Returns a bitwise \'And\' of two numbers","example":"=BITAND(10, 20)","parameters":[{"name":"number1","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"number2","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false}]},{"name":"BITOR","category":"engineering","id":410,"description":"Returns a bitwise \'Or\' of two numbers","example":"=BITOR(10, 20)","parameters":[{"name":"number1","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"number2","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false}]},{"name":"BITXOR","category":"engineering","id":411,"description":"Returns a bitwise \'Exclusive Or\' of two numbers","example":"=BITXOR(10, 20)","parameters":[{"name":"number1","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"number2","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false}]},{"name":"BITLSHIFT","category":"engineering","id":412,"description":"Returns a number shifted left by shift_amount bits","example":"=BITLSHIFT(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"shiftAmount","description":"Is the number of bits that you want to shift Number left by","type":"value|range","optional":false}]},{"name":"BITRSHIFT","category":"engineering","id":413,"description":"Returns a number shifted right by shift_amount bits","example":"=BITRSHIFT(10, A1)","parameters":[{"name":"numberParam","description":"Is the decimal representation of the binary number you want to evaluate","type":"number|range","optional":false},{"name":"shiftAmount","description":"Is the number of bits that you want to shift Number right by","type":"value|range","optional":false}]},{"name":"IMSINH","category":"engineering","id":440,"description":"Returns the hyperbolic sine of a complex number","example":"=IMSINH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic sine","type":"number|range","optional":false}]},{"name":"IMCOSH","category":"engineering","id":441,"description":"Returns the hyperbolic cosine of a complex number","example":"=IMCOSH(10)","parameters":[{"name":"inumber","description":"Is a complex number for which you want the hyperbolic cosine","type":"number|range","optional":false}]}]'),
  popcornElectronWorkbookPanelValue46 = JSON.parse('[{"name":"NPV","category":"financial","id":12,"description":"Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values)","example":"=NPV(A1, A1:A5, C1:C5, C1:C5)","parameters":[{"name":"rate","description":"Is the rate of discount over the length of one period","type":"value|range","optional":false},{"name":"value1","description":"Are 1 to 254 payments and income, equally spaced in time and occurring at the end of each period","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"PV","category":"financial","id":54,"description":"Returns the present value of an investment: the total amount that a series of future payments is worth now","example":"=PV(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in an investment","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period and cannot change over the life of the investment","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"FV","category":"financial","id":55,"description":"Returns the future value of an investment based on periodic, constant payments and a constant interest rate","example":"=FV(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in the investment","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period; it cannot change over the life of the investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value, or the lump-sum amount that a series of future payments is worth now. If omitted, Pv = 0","type":"value|range","optional":true},{"name":"typeParam","description":"Is a value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"NPER","category":"financial","id":56,"description":"Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate","example":"=NPER(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period; it cannot change over the life of the investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value, or the lump-sum amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, zero is used","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"PMT","category":"financial","id":57,"description":"Calculates the payment for a loan based on constant payments and a constant interest rate","example":"=PMT(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payments for the loan","type":"value|range","optional":false},{"name":"pv","description":"Is the present value: the total amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made, 0 (zero) if omitted","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"RATE","category":"financial","id":58,"description":"Returns the interest rate per period of a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR","example":"=RATE(A1, A1, A1)","parameters":[{"name":"nper","description":"Is the total number of payment periods for the loan or investment","type":"value|range","optional":false},{"name":"pmt","description":"Is the payment made each period and cannot change over the life of the loan or investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value: the total amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, uses Fv = 0","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true},{"name":"guess","description":"Is your guess for what the rate will be; if omitted, Guess = 0.1 (10 percent)","type":"value|range","optional":true}]},{"name":"MIRR","category":"financial","id":59,"description":"Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash","example":"=MIRR(A1:A5, A1, A1)","parameters":[{"name":"values","description":"Is an array or a reference to cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods","type":"value|range","optional":false},{"name":"financeRate","description":"Is the interest rate you pay on the money used in the cash flows","type":"value|range","optional":false},{"name":"reinvestRate","description":"Is the interest rate you receive on the cash flows as you reinvest them","type":"value|range","optional":false}]},{"name":"IRR","category":"financial","id":60,"description":"Returns the internal rate of return for a series of cash flows","example":"=IRR(A1:A5, A1)","parameters":[{"name":"values","description":"Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return","type":"value|range","optional":false},{"name":"guess","description":"Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted","type":"value|range","optional":true}]},{"name":"SLN","category":"financial","id":108,"description":"Returns the straight-line depreciation of an asset for one period","example":"=SLN(A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false}]},{"name":"SYD","category":"financial","id":109,"description":"Returns the sum-of-years\' digits depreciation of an asset for a specified period","example":"=SYD(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"per","description":"Is the period and must use the same units as Life","type":"value|range","optional":false}]},{"name":"DDB","category":"financial","id":110,"description":"Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify","example":"=DDB(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"period","description":"Is the period for which you want to calculate the depreciation. Period must use the same units as Life","type":"value|range","optional":false},{"name":"factor","description":"Is the rate at which the balance declines. If Factor is omitted, it is assumed to be 2 (the double-declining balance method)","type":"value|range","optional":true}]},{"name":"IPMT","category":"financial","id":116,"description":"Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate","example":"=IPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"per","description":"Is the period for which you want to find the interest and must be in the range 1 to Nper","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in an investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value, or the lump-sum amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, Fv = 0","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1","type":"value|range","optional":true}]},{"name":"PPMT","category":"financial","id":117,"description":"Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate","example":"=PPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"per","description":"Specifies the period and must be in the range 1 to nper","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods in an investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value: the total amount that a series of future payments is worth now","type":"value|range","optional":false},{"name":"fv","description":"Is the future value, or cash balance you want to attain after the last payment is made","type":"value|range","optional":true},{"name":"typeParam","description":"Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted","type":"value|range","optional":true}]},{"name":"VDB","category":"financial","id":136,"description":"Returns the depreciation of an asset for any period you specify, including partial periods, using the double-declining balance method or some other method you specify","example":"=VDB(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"startPeriod","description":"Is the starting period for which you want to calculate the depreciation, in the same units as Life","type":"value|range","optional":false},{"name":"endPeriod","description":"Is the ending period for which you want to calculate the depreciation, in the same units as Life","type":"value|range","optional":false},{"name":"factor","description":"Is the rate at which the balance declines, 2 (double-declining balance) if omitted","type":"value|range","optional":true},{"name":"noSwitch","description":"Switch to straight-line depreciation when depreciation is greater than the declining balance = FALSE or omitted; do not switch = TRUE","type":"value|range","optional":true}]},{"name":"DB","category":"financial","id":146,"description":"Returns the depreciation of an asset for a specified period using the fixed-declining balance method","example":"=DB(A1, A1, A1, A1)","parameters":[{"name":"cost","description":"Is the initial cost of the asset","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of the life of the asset","type":"value|range","optional":false},{"name":"life","description":"Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset)","type":"value|range","optional":false},{"name":"period","description":"Is the period for which you want to calculate the depreciation. Period must use the same units as Life","type":"value|range","optional":false},{"name":"month","description":"Is the number of months in the first year. If month is omitted, it is assumed to be 12","type":"value|range","optional":true}]},{"name":"ISPMT","category":"financial","id":221,"description":"Returns the interest paid during a specific period of an investment","example":"=ISPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR","type":"value|range","optional":false},{"name":"per","description":"Period for which you want to find the interest","type":"value|range","optional":false},{"name":"nper","description":"Number of payment periods in an investment","type":"value|range","optional":false},{"name":"pv","description":"Lump sum amount that a series of future payments is right now","type":"value|range","optional":false}]},{"name":"XIRR","category":"financial","id":282,"description":"Returns the internal rate of return for a schedule of cash flows","example":"=XIRR(A1:A5, DATE(2024, 1, 1), A1)","parameters":[{"name":"values","description":"Is a series of cash flows that correspond to a schedule of payments in dates","type":"value|range","optional":false},{"name":"dates","description":"Is a schedule of payment dates that corresponds to the cash flow payments","type":"date","optional":false},{"name":"guess","description":"Is a number that you guess is close to the result of XIRR","type":"value|range","optional":true}]},{"name":"XNPV","category":"financial","id":283,"description":"Returns the net present value for a schedule of cash flows","example":"=XNPV(A1, A1:A5, DATE(2024, 1, 1))","parameters":[{"name":"rate","description":"Is the discount rate to apply to the cash flows","type":"value|range","optional":false},{"name":"values","description":"Is a series of cash flows that correspond to a schedule of payments in dates","type":"value|range","optional":false},{"name":"dates","description":"Is a schedule of payment dates that corresponds to the cash flow payments","type":"date","optional":false}]},{"name":"PRICEMAT","category":"financial","id":284,"description":"Returns the price per $100 face value of a security that pays interest at maturity","example":"=PRICEMAT(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security\'s issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"rate","description":"Is the security\'s interest rate at date of issue","type":"value|range","optional":false},{"name":"yld","description":"Is the security\'s annual yield","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"YIELDMAT","category":"financial","id":285,"description":"Returns the annual yield of a security that pays interest at maturity","example":"=YIELDMAT(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security\'s issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"rate","description":"Is the security\'s interest rate at date of issue","type":"value|range","optional":false},{"name":"pr","description":"Is the security\'s price per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"INTRATE","category":"financial","id":286,"description":"Returns the interest rate for a fully invested security","example":"=INTRATE(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"investment","description":"Is the amount invested in the security","type":"value|range","optional":false},{"name":"redemption","description":"Is the amount to be received at maturity","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"RECEIVED","category":"financial","id":287,"description":"Returns the amount received at maturity for a fully invested security","example":"=RECEIVED(A1, A1, A1, 10)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"investment","description":"Is the amount invested in the security","type":"value|range","optional":false},{"name":"discount","description":"Is the security\'s discount rate","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"DISC","category":"financial","id":288,"description":"Returns the discount rate for a security","example":"=DISC(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"pr","description":"Is the security\'s price per $100 face value","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"PRICEDISC","category":"financial","id":289,"description":"Returns the price per $100 face value of a discounted security","example":"=PRICEDISC(A1, A1, 10, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"discount","description":"Is the security\'s discount rate","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"YIELDDISC","category":"financial","id":290,"description":"Returns the annual yield for a discounted security. For example, a treasury bill","example":"=YIELDDISC(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"pr","description":"Is the security\'s price per $100 face value","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"TBILLEQ","category":"financial","id":291,"description":"Returns the bond-equivalent yield for a treasury bill","example":"=TBILLEQ(A1, A1, 10)","parameters":[{"name":"settlement","description":"Is the Treasury bill\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the Treasury bill\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"discount","description":"Is the Treasury bill\'s discount rate","type":"value|range","optional":false}]},{"name":"TBILLPRICE","category":"financial","id":292,"description":"Returns the price per $100 face value for a treasury bill","example":"=TBILLPRICE(A1, A1, 10)","parameters":[{"name":"settlement","description":"Is the Treasury bill\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the Treasury bill\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"discount","description":"Is the Treasury bill\'s discount rate","type":"value|range","optional":false}]},{"name":"TBILLYIELD","category":"financial","id":293,"description":"Returns the yield for a treasury bill","example":"=TBILLYIELD(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the Treasury bill\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the Treasury bill\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"pr","description":"Is the Treasury Bill\'s price per $100 face value","type":"value|range","optional":false}]},{"name":"PRICE","category":"financial","id":294,"description":"Returns the price per $100 face value of a security that pays periodic interest","example":"=PRICE(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s annual coupon rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security\'s annual yield","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"YIELD","category":"financial","id":295,"description":"Returns the yield on a security that pays periodic interest","example":"=YIELD(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s annual coupon rate","type":"value|range","optional":false},{"name":"pr","description":"Is the security\'s price per $100 face value","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"DOLLARDE","category":"financial","id":296,"description":"Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number","example":"=DOLLARDE(A1, A1)","parameters":[{"name":"fractionalDollar","description":"Is a number expressed as a fraction","type":"value|range","optional":false},{"name":"fraction","description":"Is the integer to use in the denominator of the fraction","type":"value|range","optional":false}]},{"name":"DOLLARFR","category":"financial","id":297,"description":"Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction","example":"=DOLLARFR(A1, A1)","parameters":[{"name":"decimalDollar","description":"Is a decimal number","type":"value|range","optional":false},{"name":"fraction","description":"Is the integer to use in the denominator of a fraction","type":"value|range","optional":false}]},{"name":"NOMINAL","category":"financial","id":298,"description":"Returns the annual nominal interest rate","example":"=NOMINAL(A1, A1)","parameters":[{"name":"effectRate","description":"Is the effective interest rate","type":"value|range","optional":false},{"name":"npery","description":"Is the number of compounding periods per year","type":"value|range","optional":false}]},{"name":"EFFECT","category":"financial","id":299,"description":"Returns the effective annual interest rate","example":"=EFFECT(A1, A1)","parameters":[{"name":"nominalRate","description":"Is the nominal interest rate","type":"value|range","optional":false},{"name":"npery","description":"Is the number of compounding periods per year","type":"value|range","optional":false}]},{"name":"CUMPRINC","category":"financial","id":300,"description":"Returns the cumulative principal paid on a loan between two periods","example":"=CUMPRINC(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods","type":"value|range","optional":false},{"name":"pv","description":"Is the present value","type":"value|range","optional":false},{"name":"startPeriod","description":"Is the first period in the calculation","type":"value|range","optional":false},{"name":"endPeriod","description":"Is the last period in the calculation","type":"value|range","optional":false},{"name":"typeParam","description":"Is the timing of the payment","type":"value|range","optional":false}]},{"name":"CUMIPMT","category":"financial","id":301,"description":"Returns the cumulative interest paid between two periods","example":"=CUMIPMT(A1, A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate","type":"value|range","optional":false},{"name":"nper","description":"Is the total number of payment periods","type":"value|range","optional":false},{"name":"pv","description":"Is the present value","type":"value|range","optional":false},{"name":"startPeriod","description":"Is the first period in the calculation","type":"value|range","optional":false},{"name":"endPeriod","description":"Is the last period in the calculation","type":"value|range","optional":false},{"name":"typeParam","description":"Is the timing of the payment","type":"value|range","optional":false}]},{"name":"COUPDAYBS","category":"financial","id":305,"description":"Returns the number of days from the beginning of the coupon period to the settlement date","example":"=COUPDAYBS(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPDAYS","category":"financial","id":306,"description":"Returns the number of days in the coupon period that contains the settlement date","example":"=COUPDAYS(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPDAYSNC","category":"financial","id":307,"description":"Returns the number of days from the settlement date to the next coupon date","example":"=COUPDAYSNC(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPNCD","category":"financial","id":308,"description":"Returns the next coupon date after the settlement date","example":"=COUPNCD(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPNUM","category":"financial","id":309,"description":"Returns the number of coupons payable between the settlement date and maturity date","example":"=COUPNUM(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"COUPPCD","category":"financial","id":310,"description":"Returns the previous coupon date before the settlement date","example":"=COUPPCD(A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"DURATION","category":"financial","id":311,"description":"Returns the annual duration of a security with periodic interest payments","example":"=DURATION(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"coupon","description":"Is the security\'s annual coupon rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security\'s annual yield","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"MDURATION","category":"financial","id":312,"description":"Returns the Macauley modified duration for a security with an assumed par value of $100","example":"=MDURATION(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"coupon","description":"Is the security\'s annual coupon rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security\'s annual yield","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDLPRICE","category":"financial","id":313,"description":"Returns the price per $100 face value of a security with an odd last period","example":"=ODDLPRICE(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"lastInterest","description":"Is the security\'s last coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s interest rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security\'s annual yield","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDLYIELD","category":"financial","id":314,"description":"Returns the yield of a security with an odd last period","example":"=ODDLYIELD(A1, A1, A1, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"lastInterest","description":"Is the security\'s last coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s interest rate","type":"value|range","optional":false},{"name":"pr","description":"Is the security\'s price","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDFPRICE","category":"financial","id":315,"description":"Returns the price per $100 face value of a security with an odd first period","example":"=ODDFPRICE(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security\'s issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"firstCoupon","description":"Is the security\'s first coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s interest rate","type":"value|range","optional":false},{"name":"yld","description":"Is the security\'s annual yield","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"ODDFYIELD","category":"financial","id":316,"description":"Returns the yield of a security with an odd first period","example":"=ODDFYIELD(A1, A1, TRUE, A1)","parameters":[{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"maturity","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"issue","description":"Is the security\'s issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"firstCoupon","description":"Is the security\'s first coupon date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s interest rate","type":"value|range","optional":false},{"name":"pr","description":"Is the security\'s price","type":"value|range","optional":false},{"name":"redemption","description":"Is the security\'s redemption value per $100 face value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"AMORLINC","category":"financial","id":319,"description":"Returns the prorated linear depreciation of an asset for each accounting period.","example":"=AMORLINC(A1, DATE(2024, 1, 1), A1, A1)","parameters":[{"name":"cost","description":"Is the cost of the asset","type":"value|range","optional":false},{"name":"datePurchased","description":"Is the date the asset is purchased","type":"date","optional":false},{"name":"firstPeriod","description":"Is the date of the end of the first period","type":"value|range","optional":false},{"name":"salvage","description":"Is the salvage value at the end of life of the asset.","type":"value|range","optional":false},{"name":"period","description":"Is the period","type":"value|range","optional":false},{"name":"rate","description":"Is the rate of depreciation","type":"value|range","optional":false},{"name":"basis","description":"Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.","type":"value|range","optional":true}]},{"name":"ACCRINT","category":"financial","id":321,"description":"Returns the accrued interest for a security that pays periodic interest.","example":"=ACCRINT(TRUE, A1, A1, A1)","parameters":[{"name":"issue","description":"Is the security\'s issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"firstInterest","description":"Is the security\'s first interest date, expressed as a serial date number","type":"value|range","optional":false},{"name":"settlement","description":"Is the security\'s settlement date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s annual coupon rate","type":"value|range","optional":false},{"name":"par","description":"Is the security\'s par value","type":"value|range","optional":false},{"name":"frequency","description":"Is the number of coupon payments per year","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true},{"name":"_calcMethod","description":"Value, reference, or range.","type":"value|range","optional":true}]},{"name":"ACCRINTM","category":"financial","id":322,"description":"Returns the accrued interest for a security that pays interest at maturity","example":"=ACCRINTM(TRUE, A1, A1, A1)","parameters":[{"name":"issue","description":"Is the security\'s issue date, expressed as a serial date number","type":"boolean","optional":false},{"name":"settlement","description":"Is the security\'s maturity date, expressed as a serial date number","type":"value|range","optional":false},{"name":"rate","description":"Is the security\'s annual coupon rate","type":"value|range","optional":false},{"name":"par","description":"Is the security\'s par value","type":"value|range","optional":false},{"name":"basis","description":"Is the type of day count basis to use","type":"value|range","optional":true}]},{"name":"FVSCHEDULE","category":"financial","id":328,"description":"Returns the future value of an initial principal after applying a series of compound interest rates","example":"=FVSCHEDULE(A1, A1)","parameters":[{"name":"principal","description":"Is the present value","type":"value|range","optional":false},{"name":"schedule","description":"Is an array of interest rates to apply","type":"value|range","optional":false}]},{"name":"PDURATION","category":"financial","id":417,"description":"Returns the number of periods required by an investment to reach a specified value","example":"=PDURATION(A1, A1, A1)","parameters":[{"name":"rate","description":"Is the interest rate per period.","type":"value|range","optional":false},{"name":"pv","description":"Is the present value of the investment","type":"value|range","optional":false},{"name":"fv","description":"Is the desired future value of the investment","type":"value|range","optional":false}]},{"name":"RRI","category":"financial","id":426,"description":"Returns an equivalent interest rate for the growth of an investment","example":"=RRI(A1, A1, A1)","parameters":[{"name":"nper","description":"Is the number of periods for the investment","type":"value|range","optional":false},{"name":"pv","description":"Is the present value of the investment","type":"value|range","optional":false},{"name":"fv","description":"Is the future value of the investment","type":"value|range","optional":false}]},{"name":"STOCKHISTORY","category":"financial","id":461,"description":"Returns an array of historical quote data for a symbol and date range you specify.","example":"=STOCKHISTORY(A1, DATE(2024, 1, 1), C1:C5, C1:C5)","parameters":[{"name":"stock","description":"Symbol of financial instrument to be considered or a Stock data type.","type":"value|range","optional":false},{"name":"startDate","description":"First date to return data from.","type":"date","optional":false},{"name":"endDate","description":"Last date to return data from.","type":"date","optional":true},{"name":"interval","description":"A number indicating the granularity of the data; 0 - Daily, 1 - Weekly, 2 - Monthly","type":"value|range","optional":true},{"name":"headers","description":"A logical value to add column header data; 0 - No column header, 1 - Show column header, 2 - Show instrument identifier and column header","type":"value|range","optional":true},{"name":"properties1","description":"A number indicating which column of data to return; 0 through 5","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]}]'),
  popcornElectronWorkbookPanelValue47 = [{
    name: "ISNA",
    category: "information",
    id: 3,
    description: "Checks whether a value is #N/A, and returns TRUE or FALSE",
    example: "=ISNA(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISERROR",
    category: "information",
    id: 4,
    description: "Checks whether a value is an error, and returns TRUE or FALSE",
    example: "=ISERROR(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "NA",
    category: "information",
    id: 11,
    description: "Returns the error value #N/A (value not available)",
    example: "=NA()",
    parameters: []
  }, {
    name: "TYPE",
    category: "information",
    id: 79,
    description: "Returns an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64; compound data = 128",
    example: "=TYPE(A1:A5)",
    parameters: [{
      name: "value",
      description: "Can be any value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISREF",
    category: "information",
    id: 86,
    description: "Checks whether a value is a reference, and returns TRUE or FALSE",
    example: "=ISREF(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISERR",
    category: "information",
    id: 100,
    description: "Checks whether a value is an error other than #N/A, and returns TRUE or FALSE",
    example: "=ISERR(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISTEXT",
    category: "information",
    id: 101,
    description: "Checks whether a value is text, and returns TRUE or FALSE",
    example: "=ISTEXT(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISNUMBER",
    category: "information",
    id: 102,
    description: "Checks whether a value is a number, and returns TRUE or FALSE",
    example: "=ISNUMBER(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISBLANK",
    category: "information",
    id: 103,
    description: "Checks whether a reference is to an empty cell, and returns TRUE or FALSE",
    example: "=ISBLANK(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the cell or a name that refers to the cell you want to test",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "N",
    category: "information",
    id: 105,
    description: "Converts non-number value to a number, dates to serial numbers, TRUE to 1, anything else to 0 (zero)",
    example: "=N(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want converted",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISNONTEXT",
    category: "information",
    id: 122,
    description: "Checks whether a value is not text (blank cells are not text), and returns TRUE or FALSE",
    example: "=ISNONTEXT(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want tested: a cell; a formula; or a name referring to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISLOGICAL",
    category: "information",
    id: 128,
    description: "Checks whether a value is a logical value (TRUE or FALSE), and returns TRUE or FALSE",
    example: "=ISLOGICAL(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ERROR.TYPE",
    category: "information",
    id: 148,
    description: "Returns a number matching an error value.",
    example: "=ERROR.TYPE(A1)",
    parameters: [{
      name: "errorVal",
      description: "Is the error value for which you want the identifying number, and can be an actual error value or a reference to a cell containing an error value",
      type: "value|range",
      optional: false
    }]
  }, {
    name: "ISEVEN",
    category: "information",
    id: 273,
    description: "Returns TRUE if the number is even",
    example: "=ISEVEN(10)",
    parameters: [{
      name: "numberParam",
      description: "Is the value to test",
      type: "number|range",
      optional: false
    }]
  }, {
    name: "ISODD",
    category: "information",
    id: 274,
    description: "Returns TRUE if the number is odd",
    example: "=ISODD(10)",
    parameters: [{
      name: "numberParam",
      description: "Is the value to test",
      type: "number|range",
      optional: false
    }]
  }, {
    name: "SHEET",
    category: "information",
    id: 433,
    description: "Returns the sheet number of the referenced sheet",
    example: "=SHEET(A1:A5)",
    parameters: [{
      name: "value",
      description: "Is the name of a sheet or a reference that you want the sheet number of. If omitted the number of the sheet containing the function is returned",
      type: "value|range",
      optional: true
    }]
  }, {
    name: "SHEETS",
    category: "information",
    id: 434,
    description: "Returns the number of sheets in a reference",
    example: "=SHEETS(A1:A5)",
    parameters: [{
      name: "reference",
      description: "Is a reference for which you want to know the number of sheets it contains. If omitted the number of sheets in the workbook containing the function is returned",
      type: "range",
      optional: true
    }]
  }, {
    name: "ISFORMULA",
    category: "information",
    id: 436,
    description: "Checks whether a reference is to a cell containing a formula, and returns TRUE or FALSE",
    example: "=ISFORMULA(A1:A5)",
    parameters: [{
      name: "reference",
      description: "Is a reference to the cell you want to test. Reference can be a cell reference, a formula, or name that refers to a cell",
      type: "range",
      optional: false
    }]
  }, {
    name: "ISOMITTED",
    category: "information",
    id: 481,
    description: "Checks whether the value is omitted, and returns TRUE or FALSE",
    example: "=ISOMITTED(A1)",
    parameters: [{
      name: "argument",
      description: "Is the value you want to test, such as a LAMBDA parameter",
      type: "value|range",
      optional: false
    }]
  }],
  popcornElectronWorkbookPanelValue48 = JSON.parse('[{"name":"IF","category":"logical","id":2,"description":"Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE","example":"=IF(TRUE, A1:A5)","parameters":[{"name":"logicalTest","description":"Is any value or expression that can be evaluated to TRUE or FALSE","type":"boolean","optional":false},{"name":"valueIfTrue","description":"Is the value that is returned if Logical_test is TRUE. If omitted, TRUE is returned. You can nest up to seven IF functions","type":"value|range","optional":true},{"name":"valueIfFalse","description":"Is the value that is returned if Logical_test is FALSE. If omitted, FALSE is returned","type":"value|range","optional":true}]},{"name":"TRUE","category":"logical","id":35,"description":"Returns the logical value TRUE","example":"=TRUE()","parameters":[]},{"name":"FALSE","category":"logical","id":36,"description":"Returns the logical value FALSE","example":"=FALSE()","parameters":[]},{"name":"AND","category":"logical","id":37,"description":"Checks whether all arguments are TRUE, and returns TRUE if all arguments are TRUE","example":"=AND(TRUE, C1:C5, TRUE, C1:C5)","parameters":[{"name":"logical1","description":"Are 1 to 255 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references","type":"boolean","optional":false},{"name":"logical2","description":"TRUE or FALSE.","type":"boolean","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"OR","category":"logical","id":38,"description":"Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE","example":"=OR(TRUE, C1:C5, TRUE, C1:C5)","parameters":[{"name":"logical1","description":"Are 1 to 255 conditions that you want to test that can be either TRUE or FALSE","type":"boolean","optional":false},{"name":"logical2","description":"TRUE or FALSE.","type":"boolean","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"NOT","category":"logical","id":39,"description":"Changes FALSE to TRUE, or TRUE to FALSE","example":"=NOT(TRUE)","parameters":[{"name":"logical","description":"Is a value or expression that can be evaluated to TRUE or FALSE","type":"boolean","optional":false}]},{"name":"IFERROR","category":"logical","id":332,"description":"Returns value_if_error if expression is an error and the value of the expression itself otherwise","example":"=IFERROR(A1:A5, A1:A5)","parameters":[{"name":"value","description":"Is any value or expression or reference","type":"value|range","optional":false},{"name":"valueIfError","description":"Is any value or expression or reference","type":"value|range","optional":false}]},{"name":"XOR","category":"logical","id":416,"description":"Returns a logical \'Exclusive Or\' of all arguments","example":"=XOR(TRUE, C1:C5, TRUE, C1:C5)","parameters":[{"name":"logical1","description":"Are 1 to 254 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references","type":"boolean","optional":false},{"name":"logical2","description":"TRUE or FALSE.","type":"boolean","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"IFNA","category":"logical","id":437,"description":"Returns the value you specify if the expression resolves to #N/A, otherwise returns the result of the expression","example":"=IFNA(A1:A5, A1:A5)","parameters":[{"name":"value","description":"Is any value or expression or reference","type":"value|range","optional":false},{"name":"valueIfNa","description":"Is any value or expression or reference","type":"value|range","optional":false}]},{"name":"IFS","category":"logical","id":447,"description":"Checks whether one or more conditions are met and returns a value corresponding to the first TRUE condition","example":"=IFS(TRUE, A1:A5, C1:C5, C1:C5)","parameters":[{"name":"logicalTest","description":"Is any value or expression that can be evaluated to TRUE or FALSE","type":"boolean","optional":false},{"name":"valueIfTrue","description":"Is the value returned if Logical_test is TRUE","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SWITCH","category":"logical","id":448,"description":"Evaluates an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an optional default value is returned","example":"=SWITCH(A1, A1:A5, A1, C1:C5)","parameters":[{"name":"expression","description":"Is an expression to be evaluated","type":"value|range","optional":false},{"name":"value1","description":"Is a value to be compared with expression","type":"value|range","optional":false},{"name":"result1","description":"Is a result to be returned if the corresponding value matches expression","type":"value|range","optional":false},{"name":"defaultOrValue2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"result2","description":"Value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LET","category":"logical","id":467,"description":"Assigns calculation results to names. Useful for storing intermediate calculations and values by defining names inside a formula. These names only apply within the scope of the LET function.","example":"=LET(A1, A1, A1, C1:C5)","parameters":[{"name":"name1","description":"The name, or a calculation which can make use of all names within the LET. Names must start with a letter, cannot be the output of a formula, or conflict with range syntax.","type":"value|range","optional":false},{"name":"nameValue1","description":"The value associated with the name.","type":"value|range","optional":false},{"name":"calculationOrName2","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"nameValue2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LAMBDA","category":"logical","id":468,"description":"Creates a function value, which can be called within formulas","example":"=LAMBDA(A1, C1:C5, C1:C5)","parameters":[{"name":"parameterOrCalculation","description":"A parameter, or calculation, calculating the result of the function. Parameters cannot be calculated. The last argument to LAMBDA must always be a calculation. The calculation, which may use the parameters, will return a function that can then be called.","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MAKEARRAY","category":"logical","id":469,"description":"Returns a calculated array of a specified row and column size, by applying a LAMBDA function.","example":"=MAKEARRAY(A1, A1, A1)","parameters":[{"name":"rows","description":"Is the number of rows in the array. Must be greater than zero.","type":"value|range","optional":false},{"name":"columns","description":"Is the number of columns in the array. Must be greater than zero.","type":"value|range","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to create the array. The LAMBDA takes two parameters, row index and column index.","type":"value|range","optional":false}]},{"name":"MAP","category":"logical","id":476,"description":"Returns an array formed by \'mapping\' each value in the array(s) to a new value by applying a lambda to create a new value.","example":"=MAP({1,2;3,4}, {1,2;3,4}, C1:C5, C1:C5)","parameters":[{"name":"array","description":"Is an array to be mapped","type":"array","optional":false},{"name":"lambdaOrArray2","description":"Is a LAMBDA which must be the last argument and must have a parameter for each array passed, or another array to be mapped","type":"array","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"REDUCE","category":"logical","id":477,"description":"Reduces an array to an accumulated value by applying a LAMBDA function to each value and returning the total value in the accumulator.","example":"=REDUCE(A1, {1,2;3,4}, A1)","parameters":[{"name":"initialValue","description":"Is the starting value for the accumulator","type":"value|range","optional":false},{"name":"array","description":"Is an array to be reduced","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to reduce the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":false}]},{"name":"SCAN","category":"logical","id":478,"description":"Scans an array by applying a LAMBDA function to each value and returns an array that has each intermediate value","example":"=SCAN(A1, {1,2;3,4}, A1)","parameters":[{"name":"initialValue","description":"Is the the starting value for the accumulator","type":"value|range","optional":false},{"name":"array","description":"Is an array to be scanned","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to scan the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":false}]},{"name":"BYROW","category":"logical","id":479,"description":"Applies a LAMBDA function to each row and returns an array of the results.","example":"=BYROW({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is an array to be separated by row","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to scan the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":true}]},{"name":"BYCOL","category":"logical","id":480,"description":"Applies a LAMBDA function to each column and returns an array of the results.","example":"=BYCOL({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is an array to be separated by column","type":"array","optional":false},{"name":"functionParam","description":"Is a LAMBDA that is called to scan the array. The LAMBDA takes two parameters, accumulator and value.","type":"value|range","optional":true}]}]'),
  popcornElectronWorkbookPanelValue49 = JSON.parse('[{"name":"ROW","category":"lookup-reference","id":9,"description":"Returns the row number of a reference","example":"=ROW(A1:A5)","parameters":[{"name":"reference","description":"Is the cell or a single range of cells for which you want the row number; if omitted, returns the cell containing the ROW function","type":"range","optional":true}]},{"name":"COLUMN","category":"lookup-reference","id":10,"description":"Returns the column number of a reference","example":"=COLUMN(A1:A5)","parameters":[{"name":"reference","description":"Is the cell or range of contiguous cells for which you want the column number. If omitted, the cell containing the COLUMN function is used","type":"range","optional":true}]},{"name":"LOOKUP","category":"lookup-reference","id":29,"description":"Looks up a value either from a one-row or one-column range or from an array. Provided for backward compatibility","example":"=LOOKUP(A2:A10, A2:A10, A2:A10, {1,2;3,4})","parameters":[{"name":"lookupValue","description":"Is a value that LOOKUP searches for in Lookup_vector and can be a number, text, a logical value, or a name or reference to a value","type":"value|range","optional":false},{"name":"lookupVector","description":"Is a range that contains only one row or one column of text, numbers, or logical values, placed in ascending order","type":"value|range","optional":false},{"name":"resultVectorLookupValue","description":"Is a range that contains only one row or column, the same size as Lookup_vector","type":"value|range","optional":false},{"name":"array","description":"Is a value that LOOKUP searches for in Array and can be a number, text, a logical value, or a name or reference to a value is a range of cells that contain text, number, or logical values that you want to compare with Lookup_value","type":"array","optional":false}]},{"name":"INDEX","category":"lookup-reference","id":30,"description":"Returns a value or reference of the cell at the intersection of a particular row and column, in a given range","example":"=INDEX({1,2;3,4}, A1, A1:A5, A1)","parameters":[{"name":"array","description":"Is a range of cells or an array constant.","type":"array","optional":false},{"name":"rowNum","description":"Selects the row in Array or Reference from which to return a value. If omitted, Column_num is required","type":"value|range","optional":false},{"name":"columnNumReference","description":"Selects the column in Array or Reference from which to return a value. If omitted, Row_num is required","type":"range","optional":false},{"name":"rowNum2","description":"Is a reference to one or more cell ranges","type":"value|range","optional":false},{"name":"columnNum","description":"Selects the row in Array or Reference from which to return a value. If omitted, Column_num is required","type":"value|range","optional":true},{"name":"areaNum","description":"Selects the column in Array or Reference from which to return a value. If omitted, Row_num is required selects a range in Reference from which to return a value. The first area selected or entered is area 1, the second area is area 2, and so on","type":"value|range","optional":true}]},{"name":"MATCH","category":"lookup-reference","id":62,"description":"Returns the relative position of an item in an array that matches a specified value in a specified order","example":"=MATCH(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value you use to find the value you want in the array, a number, text, or logical value, or a reference to one of these","type":"value|range","optional":false},{"name":"lookupArray","description":"Is a contiguous range of cells containing possible lookup values, an array of values, or a reference to an array","type":"array","optional":false},{"name":"matchType","description":"Is a number 1, 0, or -1 indicating which value to return.","type":"value|range","optional":true}]},{"name":"AREAS","category":"lookup-reference","id":73,"description":"Returns the number of areas in a reference. An area is a range of contiguous cells or a single cell","example":"=AREAS(A1:A5)","parameters":[{"name":"reference","description":"Is a reference to a cell or range of cells and can refer to multiple areas","type":"range","optional":false}]},{"name":"ROWS","category":"lookup-reference","id":74,"description":"Returns the number of rows in a reference or array","example":"=ROWS({1,2;3,4})","parameters":[{"name":"array","description":"Is an array, an array formula, or a reference to a range of cells for which you want the number of rows","type":"array","optional":false}]},{"name":"COLUMNS","category":"lookup-reference","id":75,"description":"Returns the number of columns in an array or reference","example":"=COLUMNS({1,2;3,4})","parameters":[{"name":"array","description":"Is an array or array formula, or a reference to a range of cells for which you want the number of columns","type":"array","optional":false}]},{"name":"OFFSET","category":"lookup-reference","id":76,"description":"Returns a reference to a range that is a given number of rows and columns from a given reference","example":"=OFFSET(A1:A5, A1, A1)","parameters":[{"name":"reference","description":"Is the reference from which you want to base the offset, a reference to a cell or range of adjacent cells","type":"range","optional":false},{"name":"rows","description":"Is the number of rows, up or down, that you want the upper-left cell of the result to refer to","type":"value|range","optional":false},{"name":"cols","description":"Is the number of columns, to the left or right, that you want the upper-left cell of the result to refer to","type":"value|range","optional":false},{"name":"height","description":"Is the height, in number of rows, that you want the result to be, the same height as Reference if omitted","type":"value|range","optional":true},{"name":"width","description":"Is the width, in number of columns, that you want the result to be, the same width as Reference if omitted","type":"value|range","optional":true}]},{"name":"TRANSPOSE","category":"lookup-reference","id":78,"description":"Converts a vertical range of cells to a horizontal range, or vice versa","example":"=TRANSPOSE({1,2;3,4})","parameters":[{"name":"array","description":"Is a range of cells on a worksheet or an array of values that you want to transpose","type":"array","optional":false}]},{"name":"CHOOSE","category":"lookup-reference","id":83,"description":"Chooses a value or action to perform from a list of values, based on an index number","example":"=CHOOSE(A1, A1:A5, C1:C5, C1:C5)","parameters":[{"name":"indexNum","description":"Specifies which value argument is selected. Index_num must be between 1 and 254, or a formula or a reference to a number between 1 and 254","type":"value|range","optional":false},{"name":"value1","description":"Are 1 to 254 numbers, cell references, defined names, formulas, functions, or text arguments from which CHOOSE selects","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HLOOKUP","category":"lookup-reference","id":84,"description":"Looks for a value in the top row of a table or array of values and returns the value in the same column from a row you specify","example":"=HLOOKUP(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value to be found in the first row of the table and can be a value, a reference, or a text string","type":"value|range","optional":false},{"name":"tableArray","description":"Is a table of text, numbers, or logical values in which data is looked up. Table_array can be a reference to a range or a range name","type":"array","optional":false},{"name":"rowIndexNum","description":"Is the row number in table_array from which the matching value should be returned. The first row of values in the table is row 1","type":"value|range","optional":false},{"name":"rangeLookup","description":"Is a logical value: to find the closest match in the top row (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE","type":"range","optional":true}]},{"name":"VLOOKUP","category":"lookup-reference","id":85,"description":"Looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify. By default, the table must be sorted in an ascending order","example":"=VLOOKUP(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value to be found in the first column of the table, and can be a value, a reference, or a text string","type":"value|range","optional":false},{"name":"tableArray","description":"Is a table of text, numbers, or logical values, in which data is retrieved. Table_array can be a reference to a range or a range name","type":"array","optional":false},{"name":"colIndexNum","description":"Is the column number in table_array from which the matching value should be returned. The first column of values in the table is column 1","type":"value|range","optional":false},{"name":"rangeLookup","description":"Is a logical value: to find the closest match in the first column (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE","type":"range","optional":true}]},{"name":"INDIRECT","category":"lookup-reference","id":111,"description":"Returns the reference specified by a text string","example":"=INDIRECT(\\"text\\", A1)","parameters":[{"name":"refText","description":"Is a reference to a cell that contains an A1- or R1C1-style reference, a name defined as a reference, or a reference to a cell as a text string","type":"string","optional":false},{"name":"a1","description":"Is a logical value that specifies the type of reference in Ref_text: R1C1-style = FALSE; A1-style = TRUE or omitted","type":"value|range","optional":true}]},{"name":"ADDRESS","category":"lookup-reference","id":133,"description":"Creates a cell reference as text, given specified row and column numbers","example":"=ADDRESS(A1, A1, A1)","parameters":[{"name":"rowNum","description":"Is the row number to use in the cell reference: Row_number = 1 for row 1","type":"value|range","optional":false},{"name":"columnNum","description":"Is the column number to use in the cell reference. For example, Column_number = 4 for column D","type":"value|range","optional":false},{"name":"absNum","description":"Specifies the reference type: absolute = 1; absolute row/relative column = 2; relative row/absolute column = 3; relative = 4","type":"value|range","optional":true},{"name":"a1","description":"Is a logical value that specifies the reference style: A1 style = 1 or TRUE; R1C1 style = 0 or FALSE","type":"value|range","optional":true},{"name":"sheetText","description":"Is text specifying the name of the worksheet to be used as the external reference","type":"string","optional":true}]},{"name":"GETPIVOTDATA","category":"lookup-reference","id":223,"description":"Extracts data stored in a PivotTable.","example":"=GETPIVOTDATA(A1, A1, C1:C5, C1:C5)","parameters":[{"name":"dataField","description":"Is the name of the data field to extract data from","type":"value|range","optional":false},{"name":"pivotTable","description":"Is a reference to a cell or range of cells in the PivotTable that contains the data you want to retrieve","type":"value|range","optional":false},{"name":"field","description":"Field to refer to","type":"value|range","optional":true},{"name":"item","description":"Field item to refer to","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HYPERLINK","category":"lookup-reference","id":224,"description":"Creates a shortcut or jump that opens a document stored on your hard drive, a network server, or on the Internet","example":"=HYPERLINK(A1, A1)","parameters":[{"name":"linkLocation","description":"Is the text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path","type":"value|range","optional":false},{"name":"friendlyName","description":"Is text or a number that is displayed in the cell. If omitted, the cell displays the Link_location text","type":"value|range","optional":true}]},{"name":"FORMULATEXT","category":"lookup-reference","id":435,"description":"Returns a formula as a string","example":"=FORMULATEXT(A1:A5)","parameters":[{"name":"reference","description":"Is a reference to a formula","type":"range","optional":false}]},{"name":"FIELDVALUE","category":"lookup-reference","id":449,"description":"Extracts a value from a field of a given record","example":"=FIELDVALUE(A1:A5, A1)","parameters":[{"name":"value","description":"The record from which you want to extract the field","type":"value|range","optional":false},{"name":"fieldName","description":"The names of the field or fields that you want to extract","type":"value|range","optional":false}]},{"name":"FILTER","category":"lookup-reference","id":450,"description":"Filter a range or array","example":"=FILTER({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"The range or array to filter","type":"array","optional":false},{"name":"include","description":"An array of booleans where TRUE represents a row or column to retain","type":"value|range","optional":false},{"name":"ifEmpty","description":"Returned if no items are retained","type":"value|range","optional":true}]},{"name":"SORT","category":"lookup-reference","id":451,"description":"Sorts a range or array","example":"=SORT({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The range or array to sort","type":"array","optional":false},{"name":"sortIndex","description":"A number indicating the row or column to sort by","type":"value|range","optional":true},{"name":"sortOrder","description":"A number indicating the desired sort order; 1 for ascending order (default), -1 for descending order","type":"value|range","optional":true},{"name":"byCol","description":"A logical value indicating the desired sort direction: FALSE to sort by row (default), TRUE to sort by column","type":"value|range","optional":true}]},{"name":"UNIQUE","category":"lookup-reference","id":452,"description":"Returns the unique values from a range or array.","example":"=UNIQUE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The range or array from which to return unique rows or columns","type":"array","optional":false},{"name":"byCol","description":"Is a logical value: compare rows against each other and return the unique rows = FALSE or omitted; compare columns against each other and return the unique columns = TRUE","type":"value|range","optional":true},{"name":"exactlyOnce","description":"Is a logical value: return rows or columns that occur exactly once from the array = TRUE; return all distinct rows or columns from the array = FALSE or omitted","type":"value|range","optional":true}]},{"name":"XMATCH","category":"lookup-reference","id":456,"description":"Returns the relative position of an item in an array. By default, an exact match is required","example":"=XMATCH(A2:A10, {1,2;3,4}, A1)","parameters":[{"name":"lookupValue","description":"Is the value to search for","type":"value|range","optional":false},{"name":"lookupArray","description":"Is the array or range to search","type":"array","optional":false},{"name":"matchMode","description":"Specify how to match the lookup_value against the values in lookup_array","type":"value|range","optional":true},{"name":"searchMode","description":"Specify the search mode to use. By default, a first to last search will be used","type":"value|range","optional":true}]},{"name":"XLOOKUP","category":"lookup-reference","id":457,"description":"Searches a range or an array for a match and returns the corresponding item from a second range or array. By default, an exact match is used","example":"=XLOOKUP(A2:A10, {1,2;3,4}, {1,2;3,4})","parameters":[{"name":"lookupValue","description":"Is the value to search for","type":"value|range","optional":false},{"name":"lookupArray","description":"Is the array or range to search","type":"array","optional":false},{"name":"returnArray","description":"Is the array or range to return","type":"array","optional":false},{"name":"ifNotFound","description":"Returned if no match is found","type":"value|range","optional":true},{"name":"matchMode","description":"Specify how to match lookup_value against the values in lookup_array","type":"value|range","optional":true},{"name":"searchMode","description":"Specify the search mode to use. By default, a first to last search will be used","type":"value|range","optional":true}]},{"name":"SORTBY","category":"lookup-reference","id":458,"description":"Sorts a range or array based on the values in a corresponding range or array","example":"=SORTBY({1,2;3,4}, {1,2;3,4}, C1:C5, C1:C5)","parameters":[{"name":"array","description":"The range or array to sort","type":"array","optional":false},{"name":"byArray","description":"The range or array to sort on","type":"array","optional":false},{"name":"sortOrder","description":"A number indicating the desired sort order; 1 for ascending order (default), -1 for descending order","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"WRAPROWS","category":"lookup-reference","id":462,"description":"Wraps a row or column vector after a specified number of values.","example":"=WRAPROWS(A1, 10, A1)","parameters":[{"name":"vector","description":"The vector or reference to wrap.","type":"value|range","optional":false},{"name":"wrapCount","description":"The maximum number of values per row.","type":"value|range","optional":false},{"name":"padWith","description":"The value with which to pad. The default is #N/A.","type":"value|range","optional":true}]},{"name":"VSTACK","category":"lookup-reference","id":463,"description":"Vertically stacks arrays into one array.","example":"=VSTACK({1,2;3,4}, C1:C5, {1,2;3,4}, C1:C5)","parameters":[{"name":"array1","description":"An array or reference to be stacked.","type":"array","optional":false},{"name":"array2","description":"Array or spill range input.","type":"array","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HSTACK","category":"lookup-reference","id":464,"description":"Horizontally stacks arrays into one array.","example":"=HSTACK({1,2;3,4}, C1:C5, {1,2;3,4}, C1:C5)","parameters":[{"name":"array1","description":"An array or reference to be stacked.","type":"array","optional":false},{"name":"array2","description":"Array or spill range input.","type":"array","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"CHOOSEROWS","category":"lookup-reference","id":465,"description":"Returns rows from an array or reference.","example":"=CHOOSEROWS({1,2;3,4}, A1, C1:C5, C1:C5)","parameters":[{"name":"array","description":"The array or reference containing the rows to be returned.","type":"array","optional":false},{"name":"rowNum1","description":"The number of the row to be returned.","type":"value|range","optional":false},{"name":"rowNum2","description":"Value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"CHOOSECOLS","category":"lookup-reference","id":466,"description":"Returns columns from an array or reference.","example":"=CHOOSECOLS({1,2;3,4}, A1, C1:C5, C1:C5)","parameters":[{"name":"array","description":"The array or reference containing the columns to be returned.","type":"array","optional":false},{"name":"colNum1","description":"The number of the column to be returned.","type":"value|range","optional":false},{"name":"colNum2","description":"Value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"TOCOL","category":"lookup-reference","id":473,"description":"Returns the array as one column.","example":"=TOCOL({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The array or reference to return as a column.","type":"array","optional":false},{"name":"ignore","description":"Whether to ignore certain types of values. By default, no values are ignored.","type":"value|range","optional":true},{"name":"scanByColumn","description":"Scan the array by column. By default, the array is scanned by row.","type":"value|range","optional":true}]},{"name":"TOROW","category":"lookup-reference","id":474,"description":"Returns the array as one row.","example":"=TOROW({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The array or reference to return as a row.","type":"array","optional":false},{"name":"ignore","description":"Whether to ignore certain types of values. By default, no values are ignored.","type":"value|range","optional":true},{"name":"scanByColumn","description":"Scan the array by column. By default, the array is scanned by row.","type":"value|range","optional":true}]},{"name":"WRAPCOLS","category":"lookup-reference","id":475,"description":"Wraps a row or column vector after a specified number of values.","example":"=WRAPCOLS(A1, 10, A1)","parameters":[{"name":"vector","description":"The vector or reference to wrap.","type":"value|range","optional":false},{"name":"wrapCount","description":"The maximum number of values per column.","type":"value|range","optional":false},{"name":"padWith","description":"The value with which to pad. The default is #N/A.","type":"value|range","optional":true}]},{"name":"EXPAND","category":"lookup-reference","id":482,"description":"Expands an array to the specified dimensions.","example":"=EXPAND({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"The array to expand.","type":"array","optional":false},{"name":"rows","description":"The number of rows in the expanded array. If missing, rows will not be expanded.","type":"value|range","optional":false},{"name":"columns","description":"The number of columns in the expanded array. If missing, columns will not be expanded.","type":"value|range","optional":true},{"name":"padWith","description":"The value with which to pad. The default is #N/A.","type":"value|range","optional":true}]},{"name":"TAKE","category":"lookup-reference","id":483,"description":"Returns rows or columns from array start or end.","example":"=TAKE({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"The array from which to take rows or columns.","type":"array","optional":false},{"name":"rows","description":"The number of rows to take. A negative value takes from the end of the array.","type":"value|range","optional":false},{"name":"columns","description":"The number of columns to take. A negative value takes from the end of the array.","type":"value|range","optional":true}]},{"name":"DROP","category":"lookup-reference","id":484,"description":"Drops rows or columns from array start or end.","example":"=DROP({1,2;3,4}, A1)","parameters":[{"name":"array","description":"The array from which to drop rows or columns.","type":"array","optional":false},{"name":"rows","description":"The number of rows to drop. A negative value drops from the end of the array.","type":"value|range","optional":true},{"name":"columns","description":"The number of columns to drop. A negative value drops from the end of the array.","type":"value|range","optional":true}]},{"name":"PY","category":"lookup-reference","id":485,"description":"Executes Python code that returns a value into the cell (not yet supported in Granola).","example":"=PY(A1)","parameters":[{"name":"useCtrlEnterToCommitPythonCodeCreatesPythonFormulas","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"IMAGE","category":"lookup-reference","id":486,"description":"Returns an image from a given source","example":"=IMAGE(A1, \\"text\\")","parameters":[{"name":"source","description":"The path of the source that points to the image","type":"value|range","optional":false},{"name":"altText","description":"The alternative text that describes the image for accessibility","type":"string","optional":true},{"name":"sizing","description":"The setting that determines the dimensions in which the image will be rendered in the cell","type":"value|range","optional":true},{"name":"height","description":"The custom height of the image in pixels","type":"value|range","optional":true},{"name":"width","description":"The custom width of the image in pixels","type":"value|range","optional":true}]},{"name":"GROUPBY","category":"lookup-reference","id":487,"description":"Aggregate values by row fields","example":"=GROUPBY(A1, A1:A5, A1)","parameters":[{"name":"rowFields","description":"The range or array containing the row fields","type":"value|range","optional":false},{"name":"values","description":"The range or array containing the values to aggregate","type":"value|range","optional":false},{"name":"functionParam","description":"The function used to do the aggregations","type":"value|range","optional":false},{"name":"fieldHeaders","description":"A number between 0 and 3 that specifies whether the field data has headers and whether field headers should be returned in the results","type":"value|range","optional":true},{"name":"totalDepth","description":"Show totals for the row fields. 0 for none, 1 for grand totals, 2 for grand total and first level subtotals, etc","type":"value|range","optional":true},{"name":"sortOrder","description":"The column index to sort the row fields on. A negative index will sort in reverse order","type":"value|range","optional":true},{"name":"filterArray","description":"An array of booleans where TRUE represents a row to retain","type":"array","optional":true},{"name":"fieldRelationship","description":"The relationship of fields when multiple columns are supplied to the row_fields argument","type":"value|range","optional":true}]},{"name":"PIVOTBY","category":"lookup-reference","id":488,"description":"Aggregate values by rows and columns","example":"=PIVOTBY(A1, A1, A1:A5, A1)","parameters":[{"name":"rowFields","description":"The range or array containing the row fields","type":"value|range","optional":false},{"name":"colFields","description":"The range or array containing the column fields","type":"value|range","optional":false},{"name":"values","description":"The range or array containing the values to aggregate","type":"value|range","optional":false},{"name":"functionParam","description":"The function used to do the aggregations","type":"value|range","optional":false},{"name":"fieldHeaders","description":"A number between 0 and 3 that specifies whether the field data has headers and whether field headers should be returned in the results","type":"value|range","optional":true},{"name":"rowTotalDepth","description":"Show totals for the row fields. 0 for none, 1 for grand totals, 2 for grand total and first level subtotals, etc","type":"value|range","optional":true},{"name":"rowSortOrder","description":"The column index to sort the row fields on. A negative index will sort in reverse order","type":"value|range","optional":true},{"name":"colTotalDepth","description":"Show totals for the column fields. 0 for none, 1 for grand totals, 2 for grand total and first level subtotals, etc","type":"value|range","optional":true},{"name":"colSortOrder","description":"The column index to sort the column fields on. A negative index will sort in reverse order","type":"value|range","optional":true},{"name":"filterArray","description":"An array of booleans where TRUE represents a row to retain","type":"array","optional":true},{"name":"relativeTo","description":"Defines what PERCENTOF is calculated relative to. This","type":"value|range","optional":true}]},{"name":"TRIMRANGE","category":"lookup-reference","id":494,"description":"Trims a range to the last used cell in any direction.","example":"=TRIMRANGE(A1:A5, A1)","parameters":[{"name":"range","description":"The range to be trimmed","type":"range","optional":false},{"name":"rowTrimMode","description":"Row trim direction","type":"value|range","optional":true},{"name":"colTrimMode","description":"Column trim direction","type":"value|range","optional":true}]}]'),
  $i = JSON.parse('[{"name":"SUM","category":"math-trig","id":5,"description":"Adds all the numbers in a range of cells","example":"=SUM(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers to sum. Logical values and text are ignored in cells, included if typed as arguments","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SIN","category":"math-trig","id":16,"description":"Returns the sine of an angle","example":"=SIN(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the sine. Degrees * PI()/180 = radians","type":"number|range","optional":false}]},{"name":"COS","category":"math-trig","id":17,"description":"Returns the cosine of an angle","example":"=COS(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the cosine","type":"number|range","optional":false}]},{"name":"TAN","category":"math-trig","id":18,"description":"Returns the tangent of an angle","example":"=TAN(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the tangent. Degrees * PI()/180 = radians","type":"number|range","optional":false}]},{"name":"ATAN","category":"math-trig","id":19,"description":"Returns the arctangent of a number in radians, in the range -Pi/2 to Pi/2","example":"=ATAN(10)","parameters":[{"name":"numberParam","description":"Is the tangent of the angle you want","type":"number|range","optional":false}]},{"name":"PI","category":"math-trig","id":20,"description":"Returns the value of Pi, 3.14159265358979, accurate to 15 digits","example":"=PI()","parameters":[]},{"name":"SQRT","category":"math-trig","id":21,"description":"Returns the square root of a number","example":"=SQRT(10)","parameters":[{"name":"numberParam","description":"Is the number for which you want the square root","type":"number|range","optional":false}]},{"name":"EXP","category":"math-trig","id":22,"description":"Returns e raised to the power of a given number","example":"=EXP(10)","parameters":[{"name":"numberParam","description":"Is the exponent applied to the base e. The constant e equals 2.71828182845904, the base of the natural logarithm","type":"number|range","optional":false}]},{"name":"LN","category":"math-trig","id":23,"description":"Returns the natural logarithm of a number","example":"=LN(10)","parameters":[{"name":"numberParam","description":"Is the positive real number for which you want the natural logarithm","type":"number|range","optional":false}]},{"name":"LOG10","category":"math-trig","id":24,"description":"Returns the base-10 logarithm of a number","example":"=LOG10(10)","parameters":[{"name":"numberParam","description":"Is the positive real number for which you want the base-10 logarithm","type":"number|range","optional":false}]},{"name":"ABS","category":"math-trig","id":25,"description":"Returns the absolute value of a number, a number without its sign","example":"=ABS(10)","parameters":[{"name":"numberParam","description":"Is the real number for which you want the absolute value","type":"number|range","optional":false}]},{"name":"INT","category":"math-trig","id":26,"description":"Rounds a number down to the nearest integer","example":"=INT(10)","parameters":[{"name":"numberParam","description":"Is the real number you want to round down to an integer","type":"number|range","optional":false}]},{"name":"SIGN","category":"math-trig","id":27,"description":"Returns the sign of a number: 1 if the number is positive, zero if the number is zero, or -1 if the number is negative","example":"=SIGN(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"ROUND","category":"math-trig","id":28,"description":"Rounds a number to a specified number of digits","example":"=ROUND(10, A1)","parameters":[{"name":"numberParam","description":"Is the number you want to round","type":"number|range","optional":false},{"name":"numDigits","description":"Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero to the nearest integer","type":"value|range","optional":false}]},{"name":"MOD","category":"math-trig","id":40,"description":"Returns the remainder after a number is divided by a divisor","example":"=MOD(10, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the remainder after the division is performed","type":"number|range","optional":false},{"name":"divisor","description":"Is the number by which you want to divide Number","type":"value|range","optional":false}]},{"name":"RAND","category":"math-trig","id":61,"description":"Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation)","example":"=RAND()","parameters":[]},{"name":"ATAN2","category":"math-trig","id":80,"description":"Returns the arctangent of the specified x- and y- coordinates, in radians between -Pi and Pi, excluding -Pi","example":"=ATAN2(A1, A1)","parameters":[{"name":"xNum","description":"Is the x-coordinate of the point","type":"value|range","optional":false},{"name":"yNum","description":"Is the y-coordinate of the point","type":"value|range","optional":false}]},{"name":"ASIN","category":"math-trig","id":81,"description":"Returns the arcsine of a number in radians, in the range -Pi/2 to Pi/2","example":"=ASIN(10)","parameters":[{"name":"numberParam","description":"Is the sine of the angle you want and must be from -1 to 1","type":"number|range","optional":false}]},{"name":"ACOS","category":"math-trig","id":82,"description":"Returns the arccosine of a number, in radians in the range 0 to Pi. The arccosine is the angle whose cosine is Number","example":"=ACOS(10)","parameters":[{"name":"numberParam","description":"Is the cosine of the angle you want and must be from -1 to 1","type":"number|range","optional":false}]},{"name":"LOG","category":"math-trig","id":87,"description":"Returns the logarithm of a number to the base you specify","example":"=LOG(10, A1)","parameters":[{"name":"numberParam","description":"Is the positive real number for which you want the logarithm","type":"number|range","optional":false},{"name":"base","description":"Is the base of the logarithm; 10 if omitted","type":"value|range","optional":true}]},{"name":"MDETERM","category":"math-trig","id":113,"description":"Returns the matrix determinant of an array","example":"=MDETERM({1,2;3,4})","parameters":[{"name":"array","description":"Is a numeric array with an equal number of rows and columns, either a cell range or an array constant","type":"array","optional":false}]},{"name":"MINVERSE","category":"math-trig","id":114,"description":"Returns the inverse matrix for the matrix stored in an array","example":"=MINVERSE({1,2;3,4})","parameters":[{"name":"array","description":"Is a numeric array with an equal number of rows and columns, either a cell range or an array constant","type":"array","optional":false}]},{"name":"MMULT","category":"math-trig","id":115,"description":"Returns the matrix product of two arrays, an array with the same number of rows as array1 and columns as array2","example":"=MMULT({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first array of numbers to multiply and must have the same number of columns as Array2 has rows","type":"array","optional":false},{"name":"array2","description":"Array or spill range input.","type":"array","optional":false}]},{"name":"PRODUCT","category":"math-trig","id":119,"description":"Multiplies all the numbers given as arguments","example":"=PRODUCT(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, logical values, or text representations of numbers that you want to multiply","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"FACT","category":"math-trig","id":120,"description":"Returns the factorial of a number, equal to 1*2*3*...* Number","example":"=FACT(10)","parameters":[{"name":"numberParam","description":"Is the nonnegative number you want the factorial of","type":"number|range","optional":false}]},{"name":"TRUNC","category":"math-trig","id":127,"description":"Truncates a number to an integer by removing the decimal, or fractional, part of the number","example":"=TRUNC(10, A1)","parameters":[{"name":"numberParam","description":"Is the number you want to truncate","type":"number|range","optional":false},{"name":"numDigits","description":"Is a number specifying the precision of the truncation, 0 (zero) if omitted","type":"value|range","optional":true}]},{"name":"ROUNDUP","category":"math-trig","id":130,"description":"Rounds a number up, away from zero","example":"=ROUNDUP(10, A1)","parameters":[{"name":"numberParam","description":"Is any real number that you want rounded up","type":"number|range","optional":false},{"name":"numDigits","description":"Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer","type":"value|range","optional":false}]},{"name":"ROUNDDOWN","category":"math-trig","id":131,"description":"Rounds a number down, toward zero","example":"=ROUNDDOWN(10, A1)","parameters":[{"name":"numberParam","description":"Is any real number that you want rounded down","type":"number|range","optional":false},{"name":"numDigits","description":"Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer","type":"value|range","optional":false}]},{"name":"SUMPRODUCT","category":"math-trig","id":138,"description":"Returns the sum of the products of corresponding ranges or arrays","example":"=SUMPRODUCT({1,2;3,4}, C1:C5, C1:C5)","parameters":[{"name":"array1","description":"Are 2 to 255 arrays for which you want to multiply and then add components. All arrays must have the same dimensions","type":"array","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SINH","category":"math-trig","id":139,"description":"Returns the hyperbolic sine of a number","example":"=SINH(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"COSH","category":"math-trig","id":140,"description":"Returns the hyperbolic cosine of a number","example":"=COSH(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"TANH","category":"math-trig","id":141,"description":"Returns the hyperbolic tangent of a number","example":"=TANH(10)","parameters":[{"name":"numberParam","description":"Is any real number","type":"number|range","optional":false}]},{"name":"ASINH","category":"math-trig","id":142,"description":"Returns the inverse hyperbolic sine of a number","example":"=ASINH(10)","parameters":[{"name":"numberParam","description":"Is any real number equal to or greater than 1","type":"number|range","optional":false}]},{"name":"ACOSH","category":"math-trig","id":143,"description":"Returns the inverse hyperbolic cosine of a number","example":"=ACOSH(10)","parameters":[{"name":"numberParam","description":"Is any real number equal to or greater than 1","type":"number|range","optional":false}]},{"name":"ATANH","category":"math-trig","id":144,"description":"Returns the inverse hyperbolic tangent of a number","example":"=ATANH(10)","parameters":[{"name":"numberParam","description":"Is any real number between -1 and 1 excluding -1 and 1","type":"number|range","optional":false}]},{"name":"COMBIN","category":"math-trig","id":156,"description":"Returns the number of combinations for a given number of items","example":"=COMBIN(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of items","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of items in each combination","type":"number|range","optional":false}]},{"name":"EVEN","category":"math-trig","id":159,"description":"Rounds a positive number up and negative number down to the nearest even integer","example":"=EVEN(10)","parameters":[{"name":"numberParam","description":"Is the value to round","type":"number|range","optional":false}]},{"name":"ODD","category":"math-trig","id":178,"description":"Rounds a positive number up and negative number down to the nearest odd integer","example":"=ODD(10)","parameters":[{"name":"numberParam","description":"Is the value to round","type":"number|range","optional":false}]},{"name":"SUMXMY2","category":"math-trig","id":183,"description":"Sums the squares of the differences in two corresponding ranges or arrays","example":"=SUMXMY2({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"arrayX","description":"Is the first range or array of values and can be a number or name, array, or reference that contains numbers","type":"array","optional":false},{"name":"arrayY","description":"Is the second range or array of values and can be a number or name, array, or reference that contains numbers","type":"array","optional":false}]},{"name":"SUMX2MY2","category":"math-trig","id":184,"description":"Sums the differences between the squares of two corresponding ranges or arrays","example":"=SUMX2MY2({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"arrayX","description":"Is the first range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false},{"name":"arrayY","description":"Is the second range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false}]},{"name":"SUMX2PY2","category":"math-trig","id":185,"description":"Returns the sum total of the sums of squares of numbers in two corresponding ranges or arrays","example":"=SUMX2PY2({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"arrayX","description":"Is the first range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false},{"name":"arrayY","description":"Is the second range or array of numbers and can be a number or name, array, or reference that contains numbers","type":"array","optional":false}]},{"name":"SUMSQ","category":"math-trig","id":201,"description":"Returns the sum of the squares of the arguments. The arguments can be numbers, arrays, names, or references to cells that contain numbers","example":"=SUMSQ(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, arrays, names, or references to arrays for which you want the sum of the squares","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"POWER","category":"math-trig","id":214,"description":"Returns the result of a number raised to a power","example":"=POWER(10, A1)","parameters":[{"name":"numberParam","description":"Is the base number, any real number","type":"number|range","optional":false},{"name":"power","description":"Is the exponent, to which the base number is raised","type":"value|range","optional":false}]},{"name":"RADIANS","category":"math-trig","id":215,"description":"Converts degrees to radians","example":"=RADIANS(A1)","parameters":[{"name":"angle","description":"Is an angle in degrees that you want to convert","type":"value|range","optional":false}]},{"name":"DEGREES","category":"math-trig","id":216,"description":"Converts radians to degrees","example":"=DEGREES(A1)","parameters":[{"name":"angle","description":"Is the angle in radians that you want to convert","type":"value|range","optional":false}]},{"name":"SUBTOTAL","category":"math-trig","id":217,"description":"Returns a subtotal in a list or database","example":"=SUBTOTAL(A1, A1, C1:C5, C1:C5)","parameters":[{"name":"functionNum","description":"Is the number 1 to 11 that specifies the summary function for the subtotal.","type":"value|range","optional":false},{"name":"ref1","description":"Are 1 to 254 ranges or references for which you want the subtotal","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SUMIF","category":"math-trig","id":218,"description":"Adds the cells specified by a given condition or criteria","example":"=SUMIF(A1:A5, \\">0\\", A1:A5)","parameters":[{"name":"range","description":"Is the range of cells you want evaluated","type":"range","optional":false},{"name":"criteria","description":"Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added","type":"criteria","optional":false},{"name":"sumRange","description":"Are the actual cells to sum. If omitted, the cells in range are used","type":"range","optional":true}]},{"name":"ROMAN","category":"math-trig","id":222,"description":"Converts an Arabic numeral to Roman, as text","example":"=ROMAN(10, A1)","parameters":[{"name":"numberParam","description":"Is the Arabic numeral you want to convert","type":"number|range","optional":false},{"name":"form","description":"Is the number specifying the type of Roman numeral you want.","type":"value|range","optional":true}]},{"name":"SERIESSUM","category":"math-trig","id":267,"description":"Returns the sum of a power series based on the formula","example":"=SERIESSUM(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the input value to the power series","type":"value|range","optional":false},{"name":"n","description":"Is the initial power to which you want to raise x","type":"value|range","optional":false},{"name":"m","description":"Is the step by which to increase n for each term in the series","type":"value|range","optional":false},{"name":"coefficients","description":"Is a set of coefficients by which each successive power of x is multiplied","type":"value|range","optional":false}]},{"name":"FACTDOUBLE","category":"math-trig","id":268,"description":"Returns the double factorial of a number","example":"=FACTDOUBLE(10)","parameters":[{"name":"numberParam","description":"Is the value for which to return the double factorial","type":"number|range","optional":false}]},{"name":"SQRTPI","category":"math-trig","id":269,"description":"Returns the square root of (number * Pi)","example":"=SQRTPI(10)","parameters":[{"name":"numberParam","description":"Is the number by which p is multiplied","type":"number|range","optional":false}]},{"name":"QUOTIENT","category":"math-trig","id":270,"description":"Returns the integer portion of a division","example":"=QUOTIENT(A1, A1)","parameters":[{"name":"numerator","description":"Is the dividend","type":"value|range","optional":false},{"name":"denominator","description":"Is the divisor","type":"value|range","optional":false}]},{"name":"MROUND","category":"math-trig","id":275,"description":"Returns a number rounded to the desired multiple","example":"=MROUND(10, A1)","parameters":[{"name":"numberParam","description":"Is the value to round","type":"number|range","optional":false},{"name":"multiple","description":"Is the multiple to which you want to round number","type":"value|range","optional":false}]},{"name":"RANDBETWEEN","category":"math-trig","id":317,"description":"Returns a random number between the numbers you specify","example":"=RANDBETWEEN(A1, A1)","parameters":[{"name":"bottom","description":"Is the smallest integer RANDBETWEEN will return","type":"value|range","optional":false},{"name":"top","description":"Is the largest integer RANDBETWEEN will return","type":"value|range","optional":false}]},{"name":"GCD","category":"math-trig","id":325,"description":"Returns the greatest common divisor","example":"=GCD(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 values","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MULTINOMIAL","category":"math-trig","id":326,"description":"Returns the multinomial of a set of numbers","example":"=MULTINOMIAL(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 values for which you want the multinomial","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LCM","category":"math-trig","id":327,"description":"Returns the least common multiple","example":"=LCM(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 values for which you want the least common multiple","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SUMIFS","category":"math-trig","id":334,"description":"Adds the cells specified by a given set of conditions or criteria","example":"=SUMIFS(A1:A5, A1:A5, \\">0\\", C1:C5)","parameters":[{"name":"sumRange","description":"Are the actual cells to sum.","type":"range","optional":false},{"name":"criteriaRange","description":"Is the range of cells you want evaluated for the particular condition","type":"range","optional":false},{"name":"criteria","description":"Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added","type":"criteria","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"AGGREGATE","category":"math-trig","id":337,"description":"","example":"=AGGREGATE(A1, A1, A1, C1:C5)","parameters":[{"name":"functionNum","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"options","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"ref1","description":"Value, reference, or range.","type":"value|range","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"ACOT","category":"math-trig","id":395,"description":"Returns the arccotangent of a number, in radians in the range 0 to Pi.","example":"=ACOT(10)","parameters":[{"name":"numberParam","description":"Is the cotangent of the angle you want","type":"number|range","optional":false}]},{"name":"ACOTH","category":"math-trig","id":396,"description":"Returns the inverse hyperbolic cotangent of a number","example":"=ACOTH(10)","parameters":[{"name":"numberParam","description":"Is the hyperbolic cotangent of the angle that you want","type":"number|range","optional":false}]},{"name":"COT","category":"math-trig","id":397,"description":"Returns the cotangent of an angle","example":"=COT(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the cotangent","type":"number|range","optional":false}]},{"name":"COTH","category":"math-trig","id":398,"description":"Returns the hyperbolic cotangent of a number","example":"=COTH(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the hyperbolic cotangent","type":"number|range","optional":false}]},{"name":"CSC","category":"math-trig","id":399,"description":"Returns the cosecant of an angle","example":"=CSC(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the cosecant","type":"number|range","optional":false}]},{"name":"CSCH","category":"math-trig","id":400,"description":"Returns the hyperbolic cosecant of an angle","example":"=CSCH(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the hyperbolic cosecant","type":"number|range","optional":false}]},{"name":"SEC","category":"math-trig","id":401,"description":"Returns the secant of an angle","example":"=SEC(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the secant","type":"number|range","optional":false}]},{"name":"SECH","category":"math-trig","id":402,"description":"Returns the hyperbolic secant of an angle","example":"=SECH(10)","parameters":[{"name":"numberParam","description":"Is the angle in radians for which you want the hyperbolic secant","type":"number|range","optional":false}]},{"name":"COMBINA","category":"math-trig","id":415,"description":"Returns the number of combinations with repetitions for a given number of items","example":"=COMBINA(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of items","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of items in each combination","type":"number|range","optional":false}]},{"name":"BASE","category":"math-trig","id":418,"description":"Converts a number into a text representation with the given radix (base)","example":"=BASE(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number that you want to convert","type":"number|range","optional":false},{"name":"radix","description":"Is the base Radix that you want to convert the number into","type":"value|range","optional":false},{"name":"minLength","description":"Is the minimum length of the returned string. If omitted leading zeros are not added","type":"value|range","optional":true}]},{"name":"DECIMAL","category":"math-trig","id":419,"description":"Converts a text representation of a number in a given base into a decimal number","example":"=DECIMAL(10, A1)","parameters":[{"name":"numberParam","description":"Is the number that you want to convert","type":"number|range","optional":false},{"name":"radix","description":"Is the base Radix of the number you are converting","type":"value|range","optional":false}]},{"name":"MUNIT","category":"math-trig","id":429,"description":"Returns the unit matrix for the specified dimension","example":"=MUNIT(A1)","parameters":[{"name":"dimension","description":"Is an integer specifying the dimension of the unit matrix that you want to return","type":"value|range","optional":false}]},{"name":"ARABIC","category":"math-trig","id":430,"description":"Converts a Roman numeral to Arabic","example":"=ARABIC(\\"text\\")","parameters":[{"name":"text","description":"Is the Roman numeral you want to convert","type":"string","optional":false}]},{"name":"CEILING.MATH","category":"math-trig","id":438,"description":"Rounds a number up, to the nearest integer or to the nearest multiple of significance","example":"=CEILING.MATH(10, A1)","parameters":[{"name":"numberParam","description":"Is the value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round","type":"value|range","optional":true},{"name":"mode","description":"When given and nonzero this function will round away from zero","type":"value|range","optional":true}]},{"name":"FLOOR.MATH","category":"math-trig","id":439,"description":"Rounds a number down, to the nearest integer or to the nearest multiple of significance","example":"=FLOOR.MATH(10, A1)","parameters":[{"name":"numberParam","description":"Is the value you want to round","type":"number|range","optional":false},{"name":"significance","description":"Is the multiple to which you want to round","type":"value|range","optional":true},{"name":"mode","description":"When given and nonzero this function will round towards zero","type":"value|range","optional":true}]},{"name":"RANDARRAY","category":"math-trig","id":459,"description":"Returns an array of random numbers","example":"=RANDARRAY(A1)","parameters":[{"name":"rows","description":"The number of rows in the returned array","type":"value|range","optional":true},{"name":"columns","description":"The number of columns in the returned array","type":"value|range","optional":true},{"name":"min","description":"The minimum number you would like returned","type":"value|range","optional":true},{"name":"max","description":"The maximum number you would like returned","type":"value|range","optional":true},{"name":"integer","description":"Return an integer or a decimal value. TRUE for an integer, FALSE for a decimal number","type":"value|range","optional":true}]},{"name":"SEQUENCE","category":"math-trig","id":460,"description":"Returns a sequence of numbers","example":"=SEQUENCE(A1, A1)","parameters":[{"name":"rows","description":"The number of rows to return","type":"value|range","optional":false},{"name":"columns","description":"The number of columns to return","type":"value|range","optional":true},{"name":"start","description":"The first number in the sequence","type":"value|range","optional":true},{"name":"step","description":"The amount to increment each subsequent value in the sequence","type":"value|range","optional":true}]},{"name":"PERCENTOF","category":"math-trig","id":470,"description":"Returns the percentage of a subset of a given data set","example":"=PERCENTOF(A1, A1)","parameters":[{"name":"dataSubset","description":"Is the subset","type":"value|range","optional":false},{"name":"dataAll","description":"Is the data set","type":"value|range","optional":false}]}]'),
  popcornElectronWorkbookPanelValue50 = JSON.parse('[{"name":"COUNT","category":"statistical","id":1,"description":"Counts the number of cells in a range that contain numbers","example":"=COUNT(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 arguments that can contain or refer to a variety of different types of data, but only numbers are counted","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"AVERAGE","category":"statistical","id":6,"description":"Returns the arithmetic mean of the supplied numbers, ignoring text and empty cells.","example":"=AVERAGE(A2:A6, 10, 12)","parameters":[{"name":"number1","description":"First number, reference, or range that contains values to average.","type":"number|range","optional":false},{"name":"number2","description":"Additional number, reference, or range to include in the mean.","type":"number|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total) supplied as numbers or ranges.","type":"number|range","optional":false}]},{"name":"MIN","category":"statistical","id":7,"description":"Returns the smallest numeric value from the supplied numbers or ranges, ignoring text, logical values, and blanks.","example":"=MIN(A2:A10, 0, C2:C4)","parameters":[{"name":"number1","description":"First number, reference, or range that contains values to compare.","type":"number|range","optional":false},{"name":"number2","description":"Optional additional number, reference, or range.","type":"number|range","optional":true},{"name":"rest","description":"Optional extra numbers or ranges (up to 255 total arguments).","type":"number|range","optional":false}]},{"name":"MAX","category":"statistical","id":8,"description":"Returns the largest numeric value from the supplied numbers or ranges, ignoring text, logical values, and blanks.","example":"=MAX(A2:A10, 0, C2:C4)","parameters":[{"name":"number1","description":"First number, reference, or range that contains values to compare.","type":"number|range","optional":false},{"name":"number2","description":"Optional additional number, reference, or range.","type":"number|range","optional":true},{"name":"rest","description":"Optional extra numbers or ranges (up to 255 total arguments).","type":"number|range","optional":false}]},{"name":"LINEST","category":"statistical","id":50,"description":"Returns statistics that describe a linear trend matching known data points, by fitting a straight line using the least squares method","example":"=LINEST(A1, A1)","parameters":[{"name":"knownYs","description":"Is the set of y-values you already know in the relationship y = mx + b","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional set of x-values that you may already know in the relationship y = mx + b","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE or omitted; b is set equal to 0 if Const = FALSE","type":"value|range","optional":true},{"name":"stats","description":"Is a logical value: return additional regression statistics = TRUE; return m-coefficients and the constant b = FALSE or omitted","type":"value|range","optional":true}]},{"name":"TREND","category":"statistical","id":51,"description":"Returns numbers in a linear trend matching known data points, using the least squares method","example":"=TREND(A1, A1)","parameters":[{"name":"knownYs","description":"Is a range or array of y-values you already know in the relationship y = mx + b","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional range or array of x-values that you know in the relationship y = mx + b, an array the same size as Known_y\'s","type":"value|range","optional":true},{"name":"newXs","description":"Is a range or array of new x-values for which you want TREND to return corresponding y-values","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE or omitted; b is set equal to 0 if Const = FALSE","type":"value|range","optional":true}]},{"name":"LOGEST","category":"statistical","id":52,"description":"Returns statistics that describe an exponential curve matching known data points","example":"=LOGEST(A1, A1)","parameters":[{"name":"knownYs","description":"Is the set of y-values you already know in the relationship y = b*m^x","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional set of x-values that you may already know in the relationship y = b*m^x","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE or omitted; b is set equal to 1 if Const = FALSE","type":"value|range","optional":true},{"name":"stats","description":"Is a logical value: return additional regression statistics = TRUE; return m-coefficients and the constant b = FALSE or omitted","type":"value|range","optional":true}]},{"name":"GROWTH","category":"statistical","id":53,"description":"Returns numbers in an exponential growth trend matching known data points","example":"=GROWTH(A1, A1)","parameters":[{"name":"knownYs","description":"Is the set of y-values you already know in the relationship y = b*m^x, an array or range of positive numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is an optional set of x-values that you may already know in the relationship y = b*m^x, an array or range the same size as Known_y\'s","type":"value|range","optional":true},{"name":"newXs","description":"Are new x-values for which you want GROWTH to return corresponding y-values","type":"value|range","optional":true},{"name":"constParam","description":"Is a logical value: the constant b is calculated normally if Const = TRUE; b is set equal to 1 if Const = FALSE or omitted","type":"value|range","optional":true}]},{"name":"COUNTA","category":"statistical","id":118,"description":"Counts the number of cells in a range that are not empty","example":"=COUNTA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 arguments representing the values and cells you want to count. Values can be any type of information","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MEDIAN","category":"statistical","id":137,"description":"Returns the median, or the number in the middle of the set of given numbers","example":"=MEDIAN(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the median","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"FREQUENCY","category":"statistical","id":147,"description":"Calculates how often values occur within a range of values and then returns a vertical array of numbers having one more element than Bins_array","example":"=FREQUENCY({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"dataArray","description":"Is an array of or reference to a set of values for which you want to count frequencies (blanks and text are ignored)","type":"array","optional":false},{"name":"binsArray","description":"Is an array of or reference to intervals into which you want to group the values in data_array","type":"array","optional":false}]},{"name":"AVEDEV","category":"statistical","id":149,"description":"Returns the average of the absolute deviations of data points from their mean. Arguments can be numbers or names, arrays, or references that contain numbers","example":"=AVEDEV(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 arguments for which you want the average of the absolute deviations","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"GAMMALN","category":"statistical","id":151,"description":"Returns the natural logarithm of the gamma function","example":"=GAMMALN(A1)","parameters":[{"name":"x","description":"Is the value for which you want to calculate GAMMALN, a positive number","type":"value|range","optional":false}]},{"name":"FISHER","category":"statistical","id":163,"description":"Returns the Fisher transformation","example":"=FISHER(A1)","parameters":[{"name":"x","description":"Is the value for which you want the transformation, a number between -1 and 1, excluding -1 and 1","type":"value|range","optional":false}]},{"name":"FISHERINV","category":"statistical","id":164,"description":"Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x","example":"=FISHERINV(A1)","parameters":[{"name":"y","description":"Is the value for which you want to perform the inverse of the transformation","type":"value|range","optional":false}]},{"name":"STANDARDIZE","category":"statistical","id":177,"description":"Returns a normalized value from a distribution characterized by a mean and standard deviation","example":"=STANDARDIZE(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value you want to normalize","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false}]},{"name":"PERMUT","category":"statistical","id":179,"description":"Returns the number of permutations for a given number of objects that can be selected from the total objects","example":"=PERMUT(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of objects","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of objects in each permutation","type":"number|range","optional":false}]},{"name":"CORREL","category":"statistical","id":187,"description":"Returns the correlation coefficient between two data sets","example":"=CORREL({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is a cell range of values. The values should be numbers, names, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is a second cell range of values. The values should be numbers, names, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"INTERCEPT","category":"statistical","id":191,"description":"Calculates the point at which a line will intersect the y-axis by using a best-fit regression line plotted through the known x-values and y-values","example":"=INTERCEPT(A1, A1)","parameters":[{"name":"knownYs","description":"Is the dependent set of observations or data and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is the independent set of observations or data and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"PEARSON","category":"statistical","id":192,"description":"Returns the Pearson product moment correlation coefficient, r","example":"=PEARSON({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is a set of independent values","type":"array","optional":false},{"name":"array2","description":"Is a set of dependent values","type":"array","optional":false}]},{"name":"RSQ","category":"statistical","id":193,"description":"Returns the square of the Pearson product moment correlation coefficient through the given data points","example":"=RSQ(A1, A1)","parameters":[{"name":"knownYs","description":"Is an array or range of data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is an array or range of data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"STEYX","category":"statistical","id":194,"description":"Returns the standard error of the predicted y-value for each x in a regression","example":"=STEYX(A1, A1)","parameters":[{"name":"knownYs","description":"Is an array or range of dependent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is an array or range of independent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"SLOPE","category":"statistical","id":195,"description":"Returns the slope of the linear regression line through the given data points","example":"=SLOPE(A1, A1)","parameters":[{"name":"knownYs","description":"Is an array or cell range of numeric dependent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false},{"name":"knownXs","description":"Is the set of independent data points and can be numbers or names, arrays, or references that contain numbers","type":"value|range","optional":false}]},{"name":"PROB","category":"statistical","id":197,"description":"Returns the probability that values in a range are between two limits or equal to a lower limit","example":"=PROB(A1:A5, A1:A5, A1)","parameters":[{"name":"xRange","description":"Is the range of numeric values of x with which there are associated probabilities","type":"range","optional":false},{"name":"probRange","description":"Is the set of probabilities associated with values in X_range, values between 0 and 1 and excluding 0","type":"range","optional":false},{"name":"lowerLimit","description":"Is the lower bound on the value for which you want a probability","type":"value|range","optional":false},{"name":"upperLimit","description":"Is the optional upper bound on the value. If omitted, PROB returns the probability that X_range values are equal to Lower_limit","type":"value|range","optional":true}]},{"name":"DEVSQ","category":"statistical","id":198,"description":"Returns the sum of squares of deviations of data points from their sample mean","example":"=DEVSQ(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 arguments, or an array or array reference, on which you want DEVSQ to calculate","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"GEOMEAN","category":"statistical","id":199,"description":"Returns the geometric mean of an array or range of positive numeric data","example":"=GEOMEAN(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the mean","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"HARMEAN","category":"statistical","id":200,"description":"Returns the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals","example":"=HARMEAN(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the harmonic mean","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"KURT","category":"statistical","id":202,"description":"Returns the kurtosis of a data set","example":"=KURT(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the kurtosis","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"SKEW","category":"statistical","id":203,"description":"Returns the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean","example":"=SKEW(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the skewness","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"LARGE","category":"statistical","id":205,"description":"Returns the k-th largest value in a data set. For example, the fifth largest number","example":"=LARGE({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data for which you want to determine the k-th largest value","type":"array","optional":false},{"name":"k","description":"Is the position (from the largest) in the array or cell range of the value to return","type":"value|range","optional":false}]},{"name":"SMALL","category":"statistical","id":206,"description":"Returns the k-th smallest value in a data set. For example, the fifth smallest number","example":"=SMALL({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is an array or range of numerical data for which you want to determine the k-th smallest value","type":"array","optional":false},{"name":"k","description":"Is the position (from the smallest) in the array or range of the value to return","type":"value|range","optional":false}]},{"name":"TRIMMEAN","category":"statistical","id":211,"description":"Returns the mean of the interior portion of a set of data values","example":"=TRIMMEAN({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the range or array of values to trim and average","type":"array","optional":false},{"name":"percent","description":"Is the fractional number of data points to exclude from the top and bottom of the data set","type":"value|range","optional":false}]},{"name":"COUNTIF","category":"statistical","id":219,"description":"Counts the number of cells within a range that meet the given condition","example":"=COUNTIF(A1:A5, \\">0\\")","parameters":[{"name":"range","description":"Is the range of cells from which you want to count nonblank cells","type":"range","optional":false},{"name":"criteria","description":"Is the condition in the form of a number, expression, or text that defines which cells will be counted","type":"criteria","optional":false}]},{"name":"COUNTBLANK","category":"statistical","id":220,"description":"Counts the number of empty cells in a specified range of cells","example":"=COUNTBLANK(A1:A5)","parameters":[{"name":"range","description":"Is the range from which you want to count the empty cells","type":"range","optional":false}]},{"name":"AVERAGEA","category":"statistical","id":225,"description":"Returns the arithmetic mean while treating TRUE as 1, FALSE or text as 0, and numbers as-is.","example":"=AVERAGEA(A2:A5, TRUE, \\"5\\")","parameters":[{"name":"value1","description":"First value, reference, or range to evaluate (text and logical values are counted).","type":"value|range","optional":false},{"name":"value2","description":"Additional value, reference, or range to include in the average.","type":"value|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total).","type":"value|range","optional":false}]},{"name":"MAXA","category":"statistical","id":226,"description":"Returns the largest value while treating TRUE as 1, FALSE or text as 0, and numbers as-is.","example":"=MAXA(A2:A6, TRUE, \\"5\\")","parameters":[{"name":"value1","description":"First value, reference, or range to evaluate (text/logical values are counted).","type":"value|range","optional":false},{"name":"value2","description":"Optional additional value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total).","type":"value|range","optional":false}]},{"name":"MINA","category":"statistical","id":227,"description":"Returns the smallest value while treating TRUE as 1, FALSE or text as 0, and numbers as-is.","example":"=MINA(A2:A6, FALSE, \\"5\\")","parameters":[{"name":"value1","description":"First value, reference, or range to evaluate (text/logical values are counted).","type":"value|range","optional":false},{"name":"value2","description":"Optional additional value, reference, or range.","type":"value|range","optional":true},{"name":"rest","description":"Optional extra arguments (up to 255 total).","type":"value|range","optional":false}]},{"name":"STDEVPA","category":"statistical","id":228,"description":"Calculates standard deviation based on an entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=STDEVPA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 values corresponding to a population and can be values, names, arrays, or references that contain values","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VARPA","category":"statistical","id":229,"description":"Calculates variance based on the entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=VARPA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 value arguments corresponding to a population","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"STDEVA","category":"statistical","id":230,"description":"Estimates standard deviation based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=STDEVA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 values corresponding to a sample of a population and can be values or names or references to values","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VARA","category":"statistical","id":231,"description":"Estimates variance based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1","example":"=VARA(A1:A5, C1:C5, B1:B5, C1:C5)","parameters":[{"name":"value1","description":"Are 1 to 255 value arguments corresponding to a sample of a population","type":"value|range","optional":false},{"name":"value2","description":"Value argument for the calculation.","type":"value|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"COUNTIFS","category":"statistical","id":333,"description":"Counts the number of cells specified by a given set of conditions or criteria","example":"=COUNTIFS(A1:A5, \\">0\\", C1:C5, C1:C5)","parameters":[{"name":"criteriaRange","description":"Is the range of cells you want evaluated for the particular condition","type":"range","optional":false},{"name":"criteria","description":"Is the condition in the form of a number, expression, or text that defines which cells will be counted","type":"criteria","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"AVERAGEIF","category":"statistical","id":335,"description":"Calculates the mean of cells in a range that satisfy a single condition.","example":"=AVERAGEIF(A2:A10, \\">100\\", B2:B10)","parameters":[{"name":"range","description":"Cells that are tested against the criteria.","type":"range","optional":false},{"name":"criteria","description":"Condition such as \\">0\\" or \\"apples\\" that determines which cells qualify.","type":"criteria","optional":false},{"name":"averageRange","description":"Optional cells to average when they differ from range; range is used when omitted.","type":"range","optional":true}]},{"name":"AVERAGEIFS","category":"statistical","id":336,"description":"Calculates the mean of cells that satisfy multiple range/criteria pairs.","example":"=AVERAGEIFS(B2:B10, A2:A10, \\"=West\\", C2:C10, \\">0\\")","parameters":[{"name":"averageRange","description":"Cells whose values are averaged when every criteria pair is satisfied.","type":"range","optional":false},{"name":"criteriaRange1","description":"Cells evaluated against the first criteria.","type":"range","optional":false},{"name":"criteria1","description":"First condition, such as \\"=North\\" or \\">0\\".","type":"criteria","optional":false},{"name":"rest","description":"Optional additional pairs supplied as criteria_range2, criteria2, criteria_range3, criteria3, and so on.","type":"range|criteria","optional":false}]},{"name":"BINOM.DIST","category":"statistical","id":338,"description":"Returns the individual term binomial distribution probability","example":"=BINOM.DIST(10, A1, A1, A1)","parameters":[{"name":"numberS","description":"Is the number of successes in trials","type":"number|range","optional":false},{"name":"trials","description":"Is the number of independent trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"BINOM.INV","category":"statistical","id":339,"description":"Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value","example":"=BINOM.INV(A1, A1, A1)","parameters":[{"name":"trials","description":"Is the number of Bernoulli trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is the criterion value, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"CONFIDENCE.NORM","category":"statistical","id":340,"description":"Returns the confidence interval for a population mean, using a normal distribution","example":"=CONFIDENCE.NORM(A1, A1, A1)","parameters":[{"name":"alpha","description":"Is the significance level used to compute the confidence level, a number greater than 0 and less than 1","type":"value|range","optional":false},{"name":"standardDev","description":"Is the population standard deviation for the data range and is assumed to be known. Standard_dev must be greater than 0","type":"value|range","optional":false},{"name":"size","description":"Is the sample size","type":"value|range","optional":false}]},{"name":"CONFIDENCE.T","category":"statistical","id":341,"description":"Returns the confidence interval for a population mean, using a Student\'s T distribution","example":"=CONFIDENCE.T(A1, A1, A1)","parameters":[{"name":"alpha","description":"Is the significance level used to compute the confidence level, a number greater than 0 and less than 1","type":"value|range","optional":false},{"name":"standardDev","description":"Is the population standard deviation for the data range and is assumed to be known. Standard_dev must be greater than 0","type":"value|range","optional":false},{"name":"size","description":"Is the sample size","type":"value|range","optional":false}]},{"name":"CHISQ.TEST","category":"statistical","id":342,"description":"Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom","example":"=CHISQ.TEST(A1:A5, A1:A5)","parameters":[{"name":"actualRange","description":"Is the range of data that contains observations to test against expected values","type":"range","optional":false},{"name":"expectedRange","description":"Is the range of data that contains the ratio of the product of row totals and column totals to the grand total","type":"range","optional":false}]},{"name":"F.TEST","category":"statistical","id":343,"description":"Returns the result of an F-test, the two-tailed probability that the variances in Array1 and Array2 are not significantly different","example":"=F.TEST({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false},{"name":"array2","description":"Is the second array or range of data and can be numbers or names, arrays, or references that contain numbers (blanks are ignored)","type":"array","optional":false}]},{"name":"COVARIANCE.P","category":"statistical","id":344,"description":"Returns population covariance, the average of the products of deviations for each data point pair in two data sets","example":"=COVARIANCE.P({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is the second cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"COVARIANCE.S","category":"statistical","id":345,"description":"Returns sample covariance, the average of the products of deviations for each data point pair in two data sets","example":"=COVARIANCE.S({1,2;3,4}, {1,2;3,4})","parameters":[{"name":"array1","description":"Is the first cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false},{"name":"array2","description":"Is the second cell range of integers and must be numbers, arrays, or references that contain numbers","type":"array","optional":false}]},{"name":"EXPON.DIST","category":"statistical","id":346,"description":"Returns the exponential distribution","example":"=EXPON.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value of the function, a nonnegative number","type":"value|range","optional":false},{"name":"lambda","description":"Is the parameter value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"GAMMA.DIST","category":"statistical","id":347,"description":"Returns the gamma distribution","example":"=GAMMA.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.DIST returns the standard gamma distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted","type":"value|range","optional":false}]},{"name":"GAMMA.INV","category":"statistical","id":348,"description":"Returns the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x","example":"=GAMMA.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.INV returns the inverse of the standard gamma distribution","type":"value|range","optional":false}]},{"name":"MODE.MULT","category":"statistical","id":349,"description":"Returns a vertical array of the most frequently occurring, or repetitive, values in an array or range of data. For a horizontal array, use =TRANSPOSE(MODE.MULT(number1,number2,...))","example":"=MODE.MULT(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, or names, arrays, or references that contain numbers for which you want the mode","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"MODE.SNGL","category":"statistical","id":350,"description":"Returns the most frequently occurring, or repetitive, value in an array or range of data","example":"=MODE.SNGL(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers, or names, arrays, or references that contain numbers for which you want the mode","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"NORM.DIST","category":"statistical","id":351,"description":"Returns the normal distribution for the specified mean and standard deviation","example":"=NORM.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value for which you want the distribution","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"NORM.INV","category":"statistical","id":352,"description":"Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation","example":"=NORM.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the arithmetic mean of the distribution","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of the distribution, a positive number","type":"value|range","optional":false}]},{"name":"PERCENTILE.EXC","category":"statistical","id":353,"description":"Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive","example":"=PERCENTILE.EXC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data that defines relative standing","type":"array","optional":false},{"name":"k","description":"Is the percentile value that is between 0 through 1, inclusive","type":"value|range","optional":false}]},{"name":"PERCENTILE.INC","category":"statistical","id":354,"description":"Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive","example":"=PERCENTILE.INC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or range of data that defines relative standing","type":"array","optional":false},{"name":"k","description":"Is the percentile value that is between 0 through 1, inclusive","type":"value|range","optional":false}]},{"name":"PERCENTRANK.EXC","category":"statistical","id":355,"description":"Returns the rank of a value in a data set as a percentage (0..1, exclusive) of the data set","example":"=PERCENTRANK.EXC({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data with numeric values that defines relative standing","type":"array","optional":false},{"name":"x","description":"Is the value for which you want to know the rank","type":"value|range","optional":false},{"name":"significance","description":"Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%)","type":"value|range","optional":true}]},{"name":"PERCENTRANK.INC","category":"statistical","id":356,"description":"Returns the rank of a value in a data set as a percentage (0..1, inclusive) of the data set","example":"=PERCENTRANK.INC({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data with numeric values that defines relative standing","type":"array","optional":false},{"name":"x","description":"Is the value for which you want to know the rank","type":"value|range","optional":false},{"name":"significance","description":"Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%)","type":"value|range","optional":true}]},{"name":"POISSON.DIST","category":"statistical","id":357,"description":"Returns the Poisson distribution","example":"=POISSON.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the number of events","type":"value|range","optional":false},{"name":"mean","description":"Is the expected numeric value, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"QUARTILE.EXC","category":"statistical","id":358,"description":"Returns the quartile of a data set, based on percentile values from 0..1, exclusive","example":"=QUARTILE.EXC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or cell range of numeric values for which you want the quartile value","type":"array","optional":false},{"name":"quart","description":"Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4","type":"value|range","optional":false}]},{"name":"QUARTILE.INC","category":"statistical","id":359,"description":"Returns the quartile of a data set, based on percentile values from 0..1, inclusive","example":"=QUARTILE.INC({1,2;3,4}, A1)","parameters":[{"name":"array","description":"Is the array or cell range of numeric values for which you want the quartile value","type":"array","optional":false},{"name":"quart","description":"Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4","type":"value|range","optional":false}]},{"name":"RANK.AVG","category":"statistical","id":360,"description":"Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the average rank is returned","example":"=RANK.AVG(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the rank","type":"number|range","optional":false},{"name":"ref","description":"Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored","type":"value|range","optional":false},{"name":"order","description":"Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value","type":"value|range","optional":true}]},{"name":"RANK.EQ","category":"statistical","id":361,"description":"Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the top rank of that set of values is returned","example":"=RANK.EQ(10, A1, A1)","parameters":[{"name":"numberParam","description":"Is the number for which you want to find the rank","type":"number|range","optional":false},{"name":"ref","description":"Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored","type":"value|range","optional":false},{"name":"order","description":"Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value","type":"value|range","optional":true}]},{"name":"STDEV.S","category":"statistical","id":362,"description":"Estimates standard deviation based on a sample (ignores logical values and text in the sample)","example":"=STDEV.S(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"STDEV.P","category":"statistical","id":363,"description":"Calculates standard deviation based on the entire population given as arguments (ignores logical values and text)","example":"=STDEV.P(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"T.DIST","category":"statistical","id":364,"description":"Returns the left-tailed Student\'s t-distribution","example":"=T.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"T.DIST.2T","category":"statistical","id":365,"description":"Returns the two-tailed Student\'s t-distribution","example":"=T.DIST.2T(A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false}]},{"name":"T.DIST.RT","category":"statistical","id":366,"description":"Returns the right-tailed Student\'s t-distribution","example":"=T.DIST.RT(A1, A1)","parameters":[{"name":"x","description":"Is the numeric value at which to evaluate the distribution","type":"value|range","optional":false},{"name":"degFreedom","description":"Is an integer indicating the number of degrees of freedom that characterize the distribution","type":"value|range","optional":false}]},{"name":"T.INV","category":"statistical","id":367,"description":"Returns the left-tailed inverse of the Student\'s t-distribution","example":"=T.INV(A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the two-tailed Student\'s t-distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is a positive integer indicating the number of degrees of freedom to characterize the distribution","type":"value|range","optional":false}]},{"name":"T.INV.2T","category":"statistical","id":368,"description":"Returns the two-tailed inverse of the Student\'s t-distribution","example":"=T.INV.2T(A1, A1)","parameters":[{"name":"probability","description":"Is the probability associated with the two-tailed Student\'s t-distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is a positive integer indicating the number of degrees of freedom to characterize the distribution","type":"value|range","optional":false}]},{"name":"VAR.S","category":"statistical","id":369,"description":"Estimates variance based on a sample (ignores logical values and text in the sample)","example":"=VAR.S(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a sample of a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"VAR.P","category":"statistical","id":370,"description":"Calculates variance based on the entire population (ignores logical values and text in the population)","example":"=VAR.P(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 255 numeric arguments corresponding to a population","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"WEIBULL.DIST","category":"statistical","id":371,"description":"Returns the Weibull distribution","example":"=WEIBULL.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution, a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"BETA.DIST","category":"statistical","id":374,"description":"Returns the beta probability distribution function","example":"=BETA.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value between A and B at which to evaluate the function","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"BETA.INV","category":"statistical","id":375,"description":"Returns the inverse of the cumulative beta probability density function (BETA.DIST)","example":"=BETA.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the beta distribution","type":"value|range","optional":false},{"name":"alpha","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"beta","description":"Is a parameter to the distribution and must be greater than 0","type":"value|range","optional":false},{"name":"a","description":"Is an optional lower bound to the interval of x. If omitted, A = 0","type":"value|range","optional":true},{"name":"b","description":"Is an optional upper bound to the interval of x. If omitted, B = 1","type":"value|range","optional":true}]},{"name":"CHISQ.DIST","category":"statistical","id":376,"description":"Returns the left-tailed probability of the chi-squared distribution","example":"=CHISQ.DIST(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"CHISQ.DIST.RT","category":"statistical","id":377,"description":"Returns the right-tailed probability of the chi-squared distribution","example":"=CHISQ.DIST.RT(A1, A1)","parameters":[{"name":"x","description":"Is the value at which you want to evaluate the distribution, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CHISQ.INV","category":"statistical","id":378,"description":"Returns the inverse of the left-tailed probability of the chi-squared distribution","example":"=CHISQ.INV(A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"CHISQ.INV.RT","category":"statistical","id":379,"description":"Returns the inverse of the right-tailed probability of the chi-squared distribution","example":"=CHISQ.INV.RT(A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom","description":"Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"F.DIST","category":"statistical","id":380,"description":"Returns the (left-tailed) F probability distribution (degree of diversity) for two data sets","example":"=F.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"F.DIST.RT","category":"statistical","id":381,"description":"Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets","example":"=F.DIST.RT(A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a nonnegative number","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"F.INV","category":"statistical","id":382,"description":"Returns the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x","example":"=F.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"F.INV.RT","category":"statistical","id":383,"description":"Returns the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x","example":"=F.INV.RT(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false},{"name":"degFreedom1","description":"Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false},{"name":"degFreedom2","description":"Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10","type":"value|range","optional":false}]},{"name":"HYPGEOM.DIST","category":"statistical","id":384,"description":"Returns the hypergeometric distribution","example":"=HYPGEOM.DIST(A1, 10, A1, 10)","parameters":[{"name":"sampleS","description":"Is the number of successes in the sample","type":"value|range","optional":false},{"name":"numberSample","description":"Is the size of the sample","type":"number|range","optional":false},{"name":"populationS","description":"Is the number of successes in the population","type":"value|range","optional":false},{"name":"numberPop","description":"Is the population size","type":"number|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"LOGNORM.DIST","category":"statistical","id":385,"description":"Returns the lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGNORM.DIST(A1, A1, A1, A1)","parameters":[{"name":"x","description":"Is the value at which to evaluate the function, a positive number","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE","type":"value|range","optional":false}]},{"name":"LOGNORM.INV","category":"statistical","id":386,"description":"Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev","example":"=LOGNORM.INV(A1, A1, A1)","parameters":[{"name":"probability","description":"Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive","type":"value|range","optional":false},{"name":"mean","description":"Is the mean of ln(x)","type":"value|range","optional":false},{"name":"standardDev","description":"Is the standard deviation of ln(x), a positive number","type":"value|range","optional":false}]},{"name":"NEGBINOM.DIST","category":"statistical","id":387,"description":"Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success","example":"=NEGBINOM.DIST(10, 10, A1, A1)","parameters":[{"name":"numberF","description":"Is the number of failures","type":"number|range","optional":false},{"name":"numberS","description":"Is the threshold number of successes","type":"number|range","optional":false},{"name":"probabilityS","description":"Is the probability of a success; a number between 0 and 1","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE","type":"value|range","optional":false}]},{"name":"NORM.S.DIST","category":"statistical","id":388,"description":"Returns the standard normal distribution (has a mean of zero and a standard deviation of one)","example":"=NORM.S.DIST(A1, A1)","parameters":[{"name":"z","description":"Is the value for which you want the distribution","type":"value|range","optional":false},{"name":"cumulative","description":"Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE","type":"value|range","optional":false}]},{"name":"NORM.S.INV","category":"statistical","id":389,"description":"Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one)","example":"=NORM.S.INV(A1)","parameters":[{"name":"probability","description":"Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive","type":"value|range","optional":false}]},{"name":"T.TEST","category":"statistical","id":390,"description":"Returns the probability associated with a Student\'s t-Test","example":"=T.TEST({1,2;3,4}, {1,2;3,4}, A1, A1)","parameters":[{"name":"array1","description":"Is the first data set","type":"array","optional":false},{"name":"array2","description":"Is the second data set","type":"array","optional":false},{"name":"tails","description":"Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2","type":"value|range","optional":false},{"name":"typeParam","description":"Is the kind of t-test: paired = 1, two-sample equal variance (homoscedastic) = 2, two-sample unequal variance = 3","type":"value|range","optional":false}]},{"name":"Z.TEST","category":"statistical","id":391,"description":"Returns the one-tailed P-value of a z-test","example":"=Z.TEST({1,2;3,4}, A1, A1)","parameters":[{"name":"array","description":"Is the array or range of data against which to test X","type":"array","optional":false},{"name":"x","description":"Is the value to test","type":"value|range","optional":false},{"name":"sigma","description":"Is the population (known) standard deviation. If omitted, the sample standard deviation is used","type":"value|range","optional":true}]},{"name":"GAMMALN.PRECISE","category":"statistical","id":394,"description":"Returns the natural logarithm of the gamma function","example":"=GAMMALN.PRECISE(A1)","parameters":[{"name":"x","description":"Is the value for which you want to calculate GAMMALN.PRECISE, a positive number","type":"value|range","optional":false}]},{"name":"PERMUTATIONA","category":"statistical","id":414,"description":"Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects","example":"=PERMUTATIONA(10, 10)","parameters":[{"name":"numberParam","description":"Is the total number of objects","type":"number|range","optional":false},{"name":"numberChosen","description":"Is the number of objects in each permutation","type":"number|range","optional":false}]},{"name":"BINOM.DIST.RANGE","category":"statistical","id":421,"description":"Returns the probability of a trial result using a binomial distribution","example":"=BINOM.DIST.RANGE(A1, A1, 10)","parameters":[{"name":"trials","description":"Is the number of independent trials","type":"value|range","optional":false},{"name":"probabilityS","description":"Is the probability of success on each trial","type":"value|range","optional":false},{"name":"numberS","description":"Is the number of successes in trials","type":"number|range","optional":false},{"name":"numberS2","description":"If provided this function returns the probability that the number of successful trials shall lie between number_s and number_s2","type":"number|range","optional":true}]},{"name":"GAMMA","category":"statistical","id":422,"description":"Returns the Gamma function value","example":"=GAMMA(A1)","parameters":[{"name":"x","description":"Is the value for which you want to calculate Gamma","type":"value|range","optional":false}]},{"name":"SKEW.P","category":"statistical","id":423,"description":"Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean","example":"=SKEW.P(10, C1:C5, 20, C1:C5)","parameters":[{"name":"number1","description":"Are 1 to 254 numbers or names, arrays, or references that contain numbers for which you want the population skewness","type":"number|range","optional":false},{"name":"number2","description":"Additional number, range, or reference to include.","type":"number|range","optional":true},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"GAUSS","category":"statistical","id":424,"description":"Returns 0.5 less than the standard normal cumulative distribution","example":"=GAUSS(A1)","parameters":[{"name":"x","description":"Is the value for which you want the distribution","type":"value|range","optional":false}]},{"name":"PHI","category":"statistical","id":425,"description":"Returns the value of the density function for a standard normal distribution","example":"=PHI(A1)","parameters":[{"name":"x","description":"Is the number for which you want the density of the standard normal distribution","type":"value|range","optional":false}]},{"name":"FORECAST.LINEAR","category":"statistical","id":442,"description":"Calculates, or predicts, a future value along a linear trend by using existing values","example":"=FORECAST.LINEAR(A1, A1, A1)","parameters":[{"name":"x","description":"Is the data point for which you want to predict a value and must be a numeric value","type":"value|range","optional":false},{"name":"knownYs","description":"Is the dependent array or range of numeric data","type":"value|range","optional":false},{"name":"knownXs","description":"Is the independent array or range of numeric data. The variance of Known_x\'s must not be zero","type":"value|range","optional":false}]},{"name":"MAXIFS","category":"statistical","id":443,"description":"Returns the maximum value from maxRange after applying one or more criteria ranges.","example":"=MAXIFS(B2:B20, A2:A20, \\"North\\", C2:C20, \\">1000\\")","parameters":[{"name":"maxRange","description":"Cells that contain the values to compare.","type":"range","optional":false},{"name":"criteriaRange1","description":"First range to test against the paired criteria.","type":"range","optional":false},{"name":"criteria1","description":"First condition, such as \\"=East\\" or \\">0\\".","type":"criteria","optional":false},{"name":"rest","description":"Optional additional pairs supplied as criteria_range2, criteria2, criteria_range3, criteria3, and so on.","type":"range|criteria","optional":false}]},{"name":"MINIFS","category":"statistical","id":444,"description":"Returns the minimum value from minRange after applying one or more criteria ranges.","example":"=MINIFS(B2:B20, A2:A20, \\"North\\", C2:C20, \\">0\\")","parameters":[{"name":"minRange","description":"Cells that contain the values to compare.","type":"range","optional":false},{"name":"criteriaRange1","description":"First range to test against the paired criteria.","type":"range","optional":false},{"name":"criteria1","description":"First condition, such as \\"=East\\" or \\">0\\".","type":"criteria","optional":false},{"name":"rest","description":"Optional additional pairs supplied as criteria_range2, criteria2, criteria_range3, criteria3, and so on.","type":"range|criteria","optional":false}]}]'),
  popcornElectronWorkbookPanelValue51 = JSON.parse('[{"name":"DOLLAR","category":"text","id":14,"description":"Converts a number to text, using currency format","example":"=DOLLAR(10, A1)","parameters":[{"name":"numberParam","description":"Is a number, a reference to a cell containing a number, or a formula that evaluates to a number","type":"number|range","optional":false},{"name":"decimals","description":"Is the number of digits to the right of the decimal point. The number is rounded as necessary; if omitted, Decimals = 2","type":"value|range","optional":true}]},{"name":"FIXED","category":"text","id":15,"description":"Rounds a number to the specified number of decimals and returns the result as text with or without commas","example":"=FIXED(10, A1)","parameters":[{"name":"numberParam","description":"Is the number you want to round and convert to text","type":"number|range","optional":false},{"name":"decimals","description":"Is the number of digits to the right of the decimal point. If omitted, Decimals = 2","type":"value|range","optional":true},{"name":"noCommas","description":"Is a logical value: do not display commas in the returned text = TRUE; do display commas in the returned text = FALSE or omitted","type":"value|range","optional":true}]},{"name":"REPT","category":"text","id":31,"description":"Repeats text a given number of times. Use REPT to fill a cell with a number of instances of a text string","example":"=REPT(\\"text\\", TIME(9, 0, 0))","parameters":[{"name":"text","description":"Is the text you want to repeat","type":"string","optional":false},{"name":"numberTimes","description":"Is a positive number specifying the number of times to repeat text","type":"time","optional":false}]},{"name":"MID","category":"text","id":32,"description":"Returns the characters from the middle of a text string, given a starting position and length","example":"=MID(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"Is the text string from which you want to extract the characters","type":"string","optional":false},{"name":"startNum","description":"Is the position of the first character you want to extract. The first character in Text is 1","type":"value|range","optional":false},{"name":"numChars","description":"Specifies how many characters to return from Text","type":"value|range","optional":false}]},{"name":"LEN","category":"text","id":33,"description":"Returns the number of characters in a text string","example":"=LEN(\\"text\\")","parameters":[{"name":"text","description":"Is the text whose length you want to find. Spaces count as characters","type":"string","optional":false}]},{"name":"VALUE","category":"text","id":34,"description":"Converts a text string that represents a number to a number","example":"=VALUE(\\"text\\")","parameters":[{"name":"text","description":"Is the text enclosed in quotation marks or a reference to a cell containing the text you want to convert","type":"string","optional":false}]},{"name":"TEXT","category":"text","id":49,"description":"Converts a value to text in a specific number format","example":"=TEXT(A1:A5, \\"#,##0.00\\")","parameters":[{"name":"value","description":"Is a number, a formula that evaluates to a numeric value, or a reference to a cell containing a numeric value","type":"value|range","optional":false},{"name":"formatText","description":"Is a number format in text form from the Category box on the Number tab in the Format Cells dialog box","type":"string","optional":false}]},{"name":"SEARCH","category":"text","id":77,"description":"Returns the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive)","example":"=SEARCH(\\"text\\", \\"text\\", A1)","parameters":[{"name":"findText","description":"Is the text you want to find. You can use the ? and * wildcard characters; use ~? and ~* to find the ? and * characters","type":"string","optional":false},{"name":"withinText","description":"Is the text in which you want to search for Find_text","type":"string","optional":false},{"name":"startNum","description":"Is the character number in Within_text, counting from the left, at which you want to start searching. If omitted, 1 is used","type":"value|range","optional":true}]},{"name":"CHAR","category":"text","id":88,"description":"Returns the character specified by the code number from the character set for your computer","example":"=CHAR(10)","parameters":[{"name":"numberParam","description":"Is a number between 1 and 255 specifying which character you want","type":"number|range","optional":false}]},{"name":"LOWER","category":"text","id":89,"description":"Converts all letters in a text string to lowercase","example":"=LOWER(\\"text\\")","parameters":[{"name":"text","description":"Is the text you want to convert to lowercase. Characters in Text that are not letters are not changed","type":"string","optional":false}]},{"name":"UPPER","category":"text","id":90,"description":"Converts a text string to all uppercase letters","example":"=UPPER(\\"text\\")","parameters":[{"name":"text","description":"Is the text you want converted to uppercase, a reference or a text string","type":"string","optional":false}]},{"name":"PROPER","category":"text","id":91,"description":"Converts a text string to proper case; the first letter in each word to uppercase, and all other letters to lowercase","example":"=PROPER(\\"text\\")","parameters":[{"name":"text","description":"Is text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize","type":"string","optional":false}]},{"name":"LEFT","category":"text","id":92,"description":"Returns the specified number of characters from the start of a text string","example":"=LEFT(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the text string containing the characters you want to extract","type":"string","optional":false},{"name":"numChars","description":"Specifies how many characters you want LEFT to extract; 1 if omitted","type":"value|range","optional":true}]},{"name":"RIGHT","category":"text","id":93,"description":"Returns the specified number of characters from the end of a text string","example":"=RIGHT(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the text string that contains the characters you want to extract","type":"string","optional":false},{"name":"numChars","description":"Specifies how many characters you want to extract, 1 if omitted","type":"value|range","optional":true}]},{"name":"EXACT","category":"text","id":94,"description":"Checks whether two text strings are exactly the same, and returns TRUE or FALSE. EXACT is case-sensitive","example":"=EXACT(\\"text1\\", \\"text2\\")","parameters":[{"name":"text1","description":"Is the first text string","type":"string","optional":false},{"name":"text2","description":"Is the second text string","type":"string","optional":false}]},{"name":"TRIM","category":"text","id":95,"description":"Removes all spaces from a text string except for single spaces between words","example":"=TRIM(\\"text\\")","parameters":[{"name":"text","description":"Is the text from which you want spaces removed","type":"string","optional":false}]},{"name":"REPLACE","category":"text","id":96,"description":"Replaces part of a text string with a different text string","example":"=REPLACE(\\"text\\", A1, A1, \\"text\\")","parameters":[{"name":"oldText","description":"Is text in which you want to replace some characters","type":"string","optional":false},{"name":"startNum","description":"Is the position of the character in Old_text that you want to replace with New_text","type":"value|range","optional":false},{"name":"numChars","description":"Is the number of characters in Old_text that you want to replace","type":"value|range","optional":false},{"name":"newText","description":"Is the text that will replace characters in Old_text","type":"string","optional":false}]},{"name":"SUBSTITUTE","category":"text","id":97,"description":"Replaces existing text with new text in a text string","example":"=SUBSTITUTE(\\"text\\", \\"text\\", \\"text\\")","parameters":[{"name":"text","description":"Is the text or the reference to a cell containing text in which you want to substitute characters","type":"string","optional":false},{"name":"oldText","description":"Is the existing text you want to replace. If the case of Old_text does not match the case of text, SUBSTITUTE will not replace the text","type":"string","optional":false},{"name":"newText","description":"Is the text you want to replace Old_text with","type":"string","optional":false},{"name":"instanceNum","description":"Specifies which occurrence of Old_text you want to replace. If omitted, every instance of Old_text is replaced","type":"value|range","optional":true}]},{"name":"CODE","category":"text","id":98,"description":"Returns a numeric code for the first character in a text string, in the character set used by your computer","example":"=CODE(\\"text\\")","parameters":[{"name":"text","description":"Is the text for which you want the code of the first character","type":"string","optional":false}]},{"name":"FIND","category":"text","id":99,"description":"Returns the starting position of one text string within another text string. FIND is case-sensitive","example":"=FIND(\\"text\\", \\"text\\", A1)","parameters":[{"name":"findText","description":"Is the text you want to find. Use double quotes (empty text) to match the first character in Within_text; wildcard characters not allowed","type":"string","optional":false},{"name":"withinText","description":"Is the text containing the text you want to find","type":"string","optional":false},{"name":"startNum","description":"Specifies the character at which to start the search. The first character in Within_text is character number 1. If omitted, Start_num = 1","type":"value|range","optional":true}]},{"name":"T","category":"text","id":104,"description":"Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not","example":"=T(A1:A5)","parameters":[{"name":"value","description":"Is the value to test","type":"value|range","optional":false}]},{"name":"CLEAN","category":"text","id":112,"description":"Removes all nonprintable characters from text","example":"=CLEAN(\\"text\\")","parameters":[{"name":"text","description":"Is any worksheet information from which you want to remove nonprintable characters","type":"string","optional":false}]},{"name":"BAHTTEXT","category":"text","id":232,"description":"Converts a number to text (baht)","example":"=BAHTTEXT(10)","parameters":[{"name":"numberParam","description":"Is a number that you want to convert","type":"number|range","optional":false}]},{"name":"UNICHAR","category":"text","id":427,"description":"Returns the Unicode character referenced by the given numeric value","example":"=UNICHAR(10)","parameters":[{"name":"numberParam","description":"Is the Unicode number representing a character","type":"number|range","optional":false}]},{"name":"UNICODE","category":"text","id":428,"description":"Returns the number (code point) corresponding to the first character of the text","example":"=UNICODE(\\"text\\")","parameters":[{"name":"text","description":"Is the character that you want the Unicode value of","type":"string","optional":false}]},{"name":"NUMBERVALUE","category":"text","id":432,"description":"Converts text to number in a locale-independent manner","example":"=NUMBERVALUE(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the string representing the number you want to convert","type":"string","optional":false},{"name":"decimalSeparator","description":"Is the character used as the decimal separator in the string","type":"value|range","optional":true},{"name":"groupSeparator","description":"Is the character used as the group separator in the string","type":"value|range","optional":true}]},{"name":"TEXTJOIN","category":"text","id":445,"description":"Concatenates a list or range of text strings using a delimiter","example":"=TEXTJOIN(\\",\\", A1, \\"text1\\", C1:C5)","parameters":[{"name":"delimiter","description":"Character or string to insert between each text item","type":"string","optional":false},{"name":"ignoreEmpty","description":"If TRUE(default), ignores empty cells","type":"value|range","optional":false},{"name":"text1","description":"Are 1 to 252 text strings or ranges to be joined","type":"string","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"CONCAT","category":"text","id":446,"description":"Concatenates a list or range of text strings","example":"=CONCAT(\\"text1\\", C1:C5, C1:C5)","parameters":[{"name":"text1","description":"Are 1 to 254 text strings or ranges to be joined to a single text string","type":"string","optional":false},{"name":"rest","description":"Value, reference, or range.","type":"value|range","optional":false}]},{"name":"TEXTBEFORE","category":"text","id":453,"description":"Returns text that\'s before delimiting characters.","example":"=TEXTBEFORE(\\"text\\", \\",\\", A1)","parameters":[{"name":"text","description":"The text you want to search for the delimiter.","type":"string","optional":false},{"name":"delimiter","description":"The character or string to use as a delimiter.","type":"string","optional":false},{"name":"instanceNum","description":"The desired occurrence of delimiter. The default is 1. A negative number searches from the end.","type":"value|range","optional":true},{"name":"matchMode","description":"Searches the text for a delimiter match. By default, a case-sensitive match is done.","type":"value|range","optional":true},{"name":"matchEnd","description":"Whether to match the delimiter against the end of text. By default, they\'re not matched.","type":"value|range","optional":true},{"name":"ifNotFound","description":"Returned if no match is found. By default, #N/A is returned.","type":"value|range","optional":true}]},{"name":"TEXTAFTER","category":"text","id":454,"description":"Returns text that\'s after delimiting characters.","example":"=TEXTAFTER(\\"text\\", \\",\\", A1)","parameters":[{"name":"text","description":"The text you want to search for the delimiter.","type":"string","optional":false},{"name":"delimiter","description":"The character or string to use as a delimiter.","type":"string","optional":false},{"name":"instanceNum","description":"The desired occurrence of delimiter. The default is 1. A negative number searches from the end.","type":"value|range","optional":true},{"name":"matchMode","description":"Searches the text for a delimiter match. By default, a case-sensitive match is done.","type":"value|range","optional":true},{"name":"matchEnd","description":"Whether to match the delimiter against the end of text. By default, they\'re not matched.","type":"value|range","optional":true},{"name":"ifNotFound","description":"Returned if no match is found. By default, #N/A is returned.","type":"value|range","optional":true}]},{"name":"TEXTSPLIT","category":"text","id":455,"description":"Splits text into rows or columns using delimiters.","example":"=TEXTSPLIT(\\"text\\", \\",\\", \\",\\")","parameters":[{"name":"text","description":"The text to split","type":"string","optional":false},{"name":"colDelimiter","description":"Character or string to split columns by.","type":"string","optional":false},{"name":"rowDelimiter","description":"Character or string to split rows by.","type":"string","optional":true},{"name":"ignoreEmpty","description":"Whether to ignore empty cells. Defaults to TRUE.","type":"value|range","optional":true},{"name":"matchMode","description":"Searches the text for a delimiter match. By default, a case-sensitive match is done.","type":"value|range","optional":true},{"name":"padWith","description":"The value to use for padding. Defaults to an empty string.","type":"value|range","optional":true}]},{"name":"VALUETOTEXT","category":"text","id":471,"description":"Returns a text representation of a value","example":"=VALUETOTEXT(A1:A5, \\"#,##0.00\\")","parameters":[{"name":"value","description":"The value to represent as text","type":"value|range","optional":false},{"name":"format","description":"The format of the text","type":"string","optional":true}]},{"name":"ARRAYTOTEXT","category":"text","id":472,"description":"Returns a text representation of an array","example":"=ARRAYTOTEXT({1,2;3,4}, \\"#,##0.00\\")","parameters":[{"name":"array","description":"The array to represent as text","type":"array","optional":false},{"name":"format","description":"The format of the text","type":"string","optional":true}]},{"name":"TRANSLATE","category":"text","id":489,"description":"Translates a text string from one language into another language using the Microsoft Translation service","example":"=TRANSLATE(\\"text\\", A1)","parameters":[{"name":"text","description":"Is the text you want to translate","type":"string","optional":false},{"name":"sourceLanguage","description":"Specifies the source language your text is currently in. Expressed as a two-letter language code","type":"value|range","optional":true},{"name":"targetLanguage","description":"Specifies the language you want your text to be translated into. Expressed as a two-letter language code","type":"value|range","optional":true}]},{"name":"DETECTLANGUAGE","category":"text","id":490,"description":"Detects the language of a text string using the Microsoft Translation service","example":"=DETECTLANGUAGE(\\"text\\")","parameters":[{"name":"text","description":"Is the text you would like to detect the language for","type":"string","optional":false}]},{"name":"REGEXTEST","category":"text","id":491,"description":"Checks whether the input matches the pattern, and returns TRUE or FALSE","example":"=REGEXTEST(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"Is the text you are searching within","type":"string","optional":false},{"name":"pattern","description":"The regular expression to be applied","type":"value|range","optional":false},{"name":"caseSensitivity","description":"Whether the match is case sensitive","type":"value|range","optional":true}]},{"name":"REGEXREPLACE","category":"text","id":492,"description":"Returns \'text\', with \'replacement\' in place of matches with \'pattern\'","example":"=REGEXREPLACE(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"The text you are searching within","type":"string","optional":false},{"name":"pattern","description":"The regular expression to be applied","type":"value|range","optional":false},{"name":"replacement","description":"The string that replaces the matching substring in text. Where $n appears in the string, where $n is a whole number, $n is replaced with the nth capture group","type":"value|range","optional":false},{"name":"occurrence","description":"Which occurrence to be replaced. If 0, all occurrences are replaced. A negative value means that number of occurrences from the end of the text.","type":"value|range","optional":true},{"name":"caseSensitivity","description":"Whether the match is case sensitive","type":"value|range","optional":true}]},{"name":"REGEXEXTRACT","category":"text","id":493,"description":"Extracts substrings of \'text\' based on the provided REGEX \'pattern\'","example":"=REGEXEXTRACT(\\"text\\", A1, A1)","parameters":[{"name":"text","description":"Is the text you are searching within","type":"string","optional":false},{"name":"pattern","description":"The regular expression to be applied","type":"value|range","optional":false},{"name":"returnMode","description":"Specify which matches to return","type":"value|range","optional":true},{"name":"caseSensitivity","description":"Whether the match is case sensitive","type":"value|range","optional":true}]}]'),
  popcornElectronWorkbookPanelValue52 = [...popcornElectronWorkbookPanelValue41, ...popcornElectronWorkbookPanelValue42, ...popcornElectronWorkbookPanelValue43, ...popcornElectronWorkbookPanelValue44, ...popcornElectronWorkbookPanelValue45, ...popcornElectronWorkbookPanelValue46, ...popcornElectronWorkbookPanelValue47, ...popcornElectronWorkbookPanelValue48, ...popcornElectronWorkbookPanelValue49, ...$i, ...popcornElectronWorkbookPanelValue50, ...popcornElectronWorkbookPanelValue51],
  popcornElectronWorkbookPanelValue53 = new Set(["Identifier", "Number"]),
  popcornElectronWorkbookPanelValue54 = new Set(["Identifier", "Number"]),
  popcornElectronWorkbookPanelValue55 = /^[A-Za-z0-9:$]+$/;
function popcornElectronWorkbookPanelHelper151(popcornElectronWorkbookPanelParam35) {
  let popcornElectronWorkbookPanelValue593 = popcornElectronWorkbookPanelImport11(popcornElectronWorkbookPanelParam35 ?? ""),
    popcornElectronWorkbookPanelValue594 = [],
    popcornElectronWorkbookPanelValue595 = [],
    popcornElectronWorkbookPanelValue596 = [],
    popcornElectronWorkbookPanelValue597 = [],
    popcornElectronWorkbookPanelValue598 = null,
    popcornElectronWorkbookPanelValue599;
  for (let popcornElectronWorkbookPanelValue634 = 0; popcornElectronWorkbookPanelValue634 < popcornElectronWorkbookPanelValue593.length; popcornElectronWorkbookPanelValue634 += 1) {
    let popcornElectronWorkbookPanelValue659 = popcornElectronWorkbookPanelValue593[popcornElectronWorkbookPanelValue634];
    if (!popcornElectronWorkbookPanelValue659 || popcornElectronWorkbookPanelValue659.type === "EOF") continue;
    let popcornElectronWorkbookPanelValue660 = popcornElectronWorkbookPanelParam35.slice(popcornElectronWorkbookPanelValue659.start, popcornElectronWorkbookPanelValue659.end);
    if (popcornElectronWorkbookPanelValue659.type === "Whitespace") {
      popcornElectronWorkbookPanelValue594.push({
        kind: "ws",
        from: popcornElectronWorkbookPanelValue659.start,
        to: popcornElectronWorkbookPanelValue659.end,
        text: popcornElectronWorkbookPanelValue660
      });
      continue;
    }
    if (popcornElectronWorkbookPanelValue659.type === "Identifier" && popcornElectronWorkbookPanelValue593[popcornElectronWorkbookPanelValue634 + 1]?.type === "Bang") {
      let popcornElectronWorkbookPanelValue1268 = popcornElectronWorkbookPanelHelper162(popcornElectronWorkbookPanelValue660),
        popcornElectronWorkbookPanelValue1269 = {
          kind: "sheet_name",
          from: popcornElectronWorkbookPanelValue659.start,
          to: popcornElectronWorkbookPanelValue659.end,
          text: popcornElectronWorkbookPanelValue660,
          norm: popcornElectronWorkbookPanelValue1268
        };
      popcornElectronWorkbookPanelValue594.push(popcornElectronWorkbookPanelValue1269);
      popcornElectronWorkbookPanelValue595.push(popcornElectronWorkbookPanelHelper154(popcornElectronWorkbookPanelValue1269.from, popcornElectronWorkbookPanelValue1269.to));
      popcornElectronWorkbookPanelValue598 = popcornElectronWorkbookPanelValue1268;
      continue;
    }
    if (popcornElectronWorkbookPanelValue659.type === "Bang") {
      let popcornElectronWorkbookPanelValue1287 = {
        kind: "op",
        from: popcornElectronWorkbookPanelValue659.start,
        to: popcornElectronWorkbookPanelValue659.end,
        text: popcornElectronWorkbookPanelValue660
      };
      popcornElectronWorkbookPanelValue594.push(popcornElectronWorkbookPanelValue1287);
      popcornElectronWorkbookPanelValue595.push(popcornElectronWorkbookPanelHelper154(popcornElectronWorkbookPanelValue1287.from, popcornElectronWorkbookPanelValue1287.to));
      popcornElectronWorkbookPanelValue599 = popcornElectronWorkbookPanelValue598 ?? undefined;
      popcornElectronWorkbookPanelValue598 = null;
      continue;
    }
    let popcornElectronWorkbookPanelValue661 = popcornElectronWorkbookPanelHelper155(popcornElectronWorkbookPanelValue593, popcornElectronWorkbookPanelValue634 + 1),
      popcornElectronWorkbookPanelValue662 = (popcornElectronWorkbookPanelValue659.type === "Identifier" || popcornElectronWorkbookPanelValue659.type === "Boolean") && popcornElectronWorkbookPanelValue661?.type === "ParenOpen";
    if (!popcornElectronWorkbookPanelValue662) {
      let popcornElectronWorkbookPanelValue1223 = popcornElectronWorkbookPanelHelper156(popcornElectronWorkbookPanelValue593, popcornElectronWorkbookPanelValue634, popcornElectronWorkbookPanelParam35, popcornElectronWorkbookPanelValue599);
      if (popcornElectronWorkbookPanelValue1223) {
        popcornElectronWorkbookPanelValue594.push(popcornElectronWorkbookPanelValue1223.token);
        popcornElectronWorkbookPanelValue595.push(popcornElectronWorkbookPanelValue1223.highlight);
        popcornElectronWorkbookPanelValue596.push(popcornElectronWorkbookPanelValue1223.refSpan);
        popcornElectronWorkbookPanelValue634 = popcornElectronWorkbookPanelValue1223.nextIndex - 1;
        popcornElectronWorkbookPanelValue599 = undefined;
        continue;
      }
    }
    popcornElectronWorkbookPanelValue599 &&= undefined;
    let popcornElectronWorkbookPanelValue663 = popcornElectronWorkbookPanelHelper152(popcornElectronWorkbookPanelValue659, popcornElectronWorkbookPanelValue660);
    popcornElectronWorkbookPanelValue662 && popcornElectronWorkbookPanelValue663.kind === "ident" ? (popcornElectronWorkbookPanelValue663.norm = popcornElectronWorkbookPanelValue660.toUpperCase(), popcornElectronWorkbookPanelValue595.push({
      kind: "func",
      from: popcornElectronWorkbookPanelValue663.from,
      to: popcornElectronWorkbookPanelValue663.to
    })) : popcornElectronWorkbookPanelHelper153(popcornElectronWorkbookPanelValue663, popcornElectronWorkbookPanelValue595, popcornElectronWorkbookPanelValue597);
    popcornElectronWorkbookPanelValue594.push(popcornElectronWorkbookPanelValue663);
  }
  return {
    tokens: popcornElectronWorkbookPanelValue594,
    highlights: popcornElectronWorkbookPanelValue595,
    refs: popcornElectronWorkbookPanelValue596,
    errors: popcornElectronWorkbookPanelValue597.length > 0 ? popcornElectronWorkbookPanelValue597 : undefined
  };
}
function popcornElectronWorkbookPanelHelper152(popcornElectronWorkbookPanelParam102, popcornElectronWorkbookPanelParam103) {
  let popcornElectronWorkbookPanelValue858 = {
    from: popcornElectronWorkbookPanelParam102.start,
    to: popcornElectronWorkbookPanelParam102.end,
    text: popcornElectronWorkbookPanelParam103
  };
  switch (popcornElectronWorkbookPanelParam102.type) {
    case "Number":
      return {
        ...popcornElectronWorkbookPanelValue858,
        kind: "number"
      };
    case "String":
      return {
        ...popcornElectronWorkbookPanelValue858,
        kind: "string"
      };
    case "Boolean":
    case "Identifier":
      return {
        ...popcornElectronWorkbookPanelValue858,
        kind: "ident"
      };
    case "Error":
      return {
        ...popcornElectronWorkbookPanelValue858,
        kind: "error"
      };
    case "Operator":
    case "ParenOpen":
    case "ParenClose":
    case "Comma":
    case "Colon":
    case "At":
    case "Hash":
    case "LBrace":
    case "RBrace":
    case "Semicolon":
      return {
        ...popcornElectronWorkbookPanelValue858,
        kind: "op"
      };
    default:
      return {
        ...popcornElectronWorkbookPanelValue858,
        kind: "unknown"
      };
  }
}
function popcornElectronWorkbookPanelHelper153(popcornElectronWorkbookPanelParam136, popcornElectronWorkbookPanelParam137, popcornElectronWorkbookPanelParam138) {
  switch (popcornElectronWorkbookPanelParam136.kind) {
    case "string":
      popcornElectronWorkbookPanelParam137.push({
        kind: "string",
        from: popcornElectronWorkbookPanelParam136.from,
        to: popcornElectronWorkbookPanelParam136.to
      });
      break;
    case "number":
      popcornElectronWorkbookPanelParam137.push({
        kind: "number",
        from: popcornElectronWorkbookPanelParam136.from,
        to: popcornElectronWorkbookPanelParam136.to
      });
      break;
    case "error":
      popcornElectronWorkbookPanelParam137.push({
        kind: "error",
        from: popcornElectronWorkbookPanelParam136.from,
        to: popcornElectronWorkbookPanelParam136.to
      });
      popcornElectronWorkbookPanelParam138.push({
        from: popcornElectronWorkbookPanelParam136.from,
        to: popcornElectronWorkbookPanelParam136.to,
        code: popcornElectronWorkbookPanelParam136.text
      });
      break;
    case "op":
      popcornElectronWorkbookPanelParam137.push(popcornElectronWorkbookPanelHelper154(popcornElectronWorkbookPanelParam136.from, popcornElectronWorkbookPanelParam136.to));
      break;
    default:
      break;
  }
}
function popcornElectronWorkbookPanelHelper154(popcornElectronWorkbookPanelParam514, popcornElectronWorkbookPanelParam515) {
  return {
    kind: "dim",
    from: popcornElectronWorkbookPanelParam514,
    to: popcornElectronWorkbookPanelParam515
  };
}
function popcornElectronWorkbookPanelHelper155(popcornElectronWorkbookPanelParam314, popcornElectronWorkbookPanelParam315) {
  for (let popcornElectronWorkbookPanelValue1338 = popcornElectronWorkbookPanelParam315; popcornElectronWorkbookPanelValue1338 < popcornElectronWorkbookPanelParam314.length; popcornElectronWorkbookPanelValue1338 += 1) {
    let popcornElectronWorkbookPanelValue1374 = popcornElectronWorkbookPanelParam314[popcornElectronWorkbookPanelValue1338];
    if (!(!popcornElectronWorkbookPanelValue1374 || popcornElectronWorkbookPanelValue1374.type === "Whitespace")) return popcornElectronWorkbookPanelValue1374;
  }
  return null;
}
function popcornElectronWorkbookPanelHelper156(popcornElectronWorkbookPanelParam63, popcornElectronWorkbookPanelParam64, popcornElectronWorkbookPanelParam65, popcornElectronWorkbookPanelParam66) {
  let popcornElectronWorkbookPanelValue688 = popcornElectronWorkbookPanelParam63[popcornElectronWorkbookPanelParam64];
  if (!popcornElectronWorkbookPanelValue688 || !popcornElectronWorkbookPanelValue53.has(popcornElectronWorkbookPanelValue688.type)) return null;
  let popcornElectronWorkbookPanelValue689 = popcornElectronWorkbookPanelParam64 + 1,
    popcornElectronWorkbookPanelValue690 = false;
  for (; popcornElectronWorkbookPanelValue689 < popcornElectronWorkbookPanelParam63.length;) {
    let popcornElectronWorkbookPanelValue1208 = popcornElectronWorkbookPanelParam63[popcornElectronWorkbookPanelValue689];
    if (!popcornElectronWorkbookPanelValue1208 || popcornElectronWorkbookPanelValue1208.type === "EOF" || popcornElectronWorkbookPanelValue1208.type === "Whitespace") break;
    if (popcornElectronWorkbookPanelValue1208.type === "Colon") {
      if (popcornElectronWorkbookPanelValue690) break;
      popcornElectronWorkbookPanelValue690 = true;
      popcornElectronWorkbookPanelValue689 += 1;
      continue;
    }
    if (!popcornElectronWorkbookPanelValue54.has(popcornElectronWorkbookPanelValue1208.type)) break;
    popcornElectronWorkbookPanelValue689 += 1;
  }
  let popcornElectronWorkbookPanelValue691 = popcornElectronWorkbookPanelParam63[popcornElectronWorkbookPanelValue689 - 1];
  if (!popcornElectronWorkbookPanelValue691) return null;
  let popcornElectronWorkbookPanelValue692 = popcornElectronWorkbookPanelParam65.slice(popcornElectronWorkbookPanelValue688.start, popcornElectronWorkbookPanelValue691.end);
  if (!popcornElectronWorkbookPanelValue692 || !popcornElectronWorkbookPanelValue55.test(popcornElectronWorkbookPanelValue692)) return null;
  let popcornElectronWorkbookPanelValue693 = popcornElectronWorkbookPanelHelper157(popcornElectronWorkbookPanelValue692, popcornElectronWorkbookPanelParam66);
  if (!popcornElectronWorkbookPanelValue693) return null;
  let popcornElectronWorkbookPanelValue694 = {
      kind: "ref",
      from: popcornElectronWorkbookPanelValue688.start,
      to: popcornElectronWorkbookPanelValue691.end,
      text: popcornElectronWorkbookPanelValue692,
      norm: popcornElectronWorkbookPanelValue693.a1
    },
    popcornElectronWorkbookPanelValue695 = popcornElectronWorkbookPanelHelper163(popcornElectronWorkbookPanelValue693.sheet, popcornElectronWorkbookPanelValue693.a1);
  return {
    token: popcornElectronWorkbookPanelValue694,
    highlight: {
      kind: "ref",
      from: popcornElectronWorkbookPanelValue694.from,
      to: popcornElectronWorkbookPanelValue694.to,
      colorKey: popcornElectronWorkbookPanelValue695,
      ref: {
        a1: popcornElectronWorkbookPanelValue693.sheet ? `${popcornElectronWorkbookPanelValue693.sheet}!${popcornElectronWorkbookPanelValue693.a1}` : popcornElectronWorkbookPanelValue693.a1,
        sheet: popcornElectronWorkbookPanelValue693.sheet,
        abs: popcornElectronWorkbookPanelValue693.isAbsolute
      }
    },
    refSpan: {
      id: popcornElectronWorkbookPanelValue695,
      from: popcornElectronWorkbookPanelValue694.from,
      to: popcornElectronWorkbookPanelValue694.to,
      a1: popcornElectronWorkbookPanelValue693.a1,
      sheet: popcornElectronWorkbookPanelValue693.sheet
    },
    nextIndex: popcornElectronWorkbookPanelValue689
  };
}
function popcornElectronWorkbookPanelHelper157(popcornElectronWorkbookPanelParam71, popcornElectronWorkbookPanelParam72) {
  let popcornElectronWorkbookPanelValue705 = popcornElectronWorkbookPanelParam71.trim();
  if (!popcornElectronWorkbookPanelValue705) return null;
  let popcornElectronWorkbookPanelValue706 = popcornElectronWorkbookPanelParam72?.trim() || undefined,
    popcornElectronWorkbookPanelValue707 = popcornElectronWorkbookPanelValue705.indexOf(":");
  if (popcornElectronWorkbookPanelValue707 === -1) {
    let popcornElectronWorkbookPanelValue1243 = popcornElectronWorkbookPanelHelper158(popcornElectronWorkbookPanelValue705, popcornElectronWorkbookPanelValue706, false);
    return !popcornElectronWorkbookPanelValue1243 || popcornElectronWorkbookPanelValue1243.kind !== "cell" ? null : {
      sheet: popcornElectronWorkbookPanelValue706,
      a1: popcornElectronWorkbookPanelHelper160(popcornElectronWorkbookPanelValue1243.address),
      isAbsolute: popcornElectronWorkbookPanelValue1243.address.absRow || popcornElectronWorkbookPanelValue1243.address.absCol
    };
  }
  if (popcornElectronWorkbookPanelValue705.indexOf(":", popcornElectronWorkbookPanelValue707 + 1) !== -1) return null;
  let popcornElectronWorkbookPanelValue708 = popcornElectronWorkbookPanelValue705.slice(0, popcornElectronWorkbookPanelValue707),
    popcornElectronWorkbookPanelValue709 = popcornElectronWorkbookPanelValue705.slice(popcornElectronWorkbookPanelValue707 + 1);
  if (!popcornElectronWorkbookPanelValue708 || !popcornElectronWorkbookPanelValue709) return null;
  let popcornElectronWorkbookPanelValue710 = popcornElectronWorkbookPanelHelper158(popcornElectronWorkbookPanelValue708, popcornElectronWorkbookPanelValue706, true),
    popcornElectronWorkbookPanelValue711 = popcornElectronWorkbookPanelHelper158(popcornElectronWorkbookPanelValue709, popcornElectronWorkbookPanelValue706, true);
  return !popcornElectronWorkbookPanelValue710 || !popcornElectronWorkbookPanelValue711 ? null : popcornElectronWorkbookPanelValue710.kind === "cell" && popcornElectronWorkbookPanelValue711.kind === "cell" ? {
    sheet: popcornElectronWorkbookPanelValue706,
    a1: `${popcornElectronWorkbookPanelHelper160(popcornElectronWorkbookPanelValue710.address)}:${popcornElectronWorkbookPanelHelper160(popcornElectronWorkbookPanelValue711.address)}`,
    isAbsolute: false
  } : popcornElectronWorkbookPanelValue710.kind === "column" && popcornElectronWorkbookPanelValue711.kind === "column" ? {
    sheet: popcornElectronWorkbookPanelValue706,
    a1: `${popcornElectronWorkbookPanelHelper161(popcornElectronWorkbookPanelValue710)}:${popcornElectronWorkbookPanelHelper161(popcornElectronWorkbookPanelValue711)}`,
    isAbsolute: false
  } : popcornElectronWorkbookPanelValue710.kind === "row" && popcornElectronWorkbookPanelValue711.kind === "row" ? {
    sheet: popcornElectronWorkbookPanelValue706,
    a1: `${_a(popcornElectronWorkbookPanelValue710)}:${_a(popcornElectronWorkbookPanelValue711)}`,
    isAbsolute: false
  } : null;
}
function popcornElectronWorkbookPanelHelper158(popcornElectronWorkbookPanelParam159, popcornElectronWorkbookPanelParam160, popcornElectronWorkbookPanelParam161) {
  let popcornElectronWorkbookPanelValue1063 = popcornElectronWorkbookPanelParam159.trim();
  if (!popcornElectronWorkbookPanelValue1063) return null;
  let popcornElectronWorkbookPanelValue1064 = popcornElectronWorkbookPanelParam160 ? {
      sheetName: popcornElectronWorkbookPanelParam160
    } : undefined,
    popcornElectronWorkbookPanelValue1065 = popcornElectronWorkbookPanelImport13(popcornElectronWorkbookPanelValue1063, popcornElectronWorkbookPanelValue1064);
  if (popcornElectronWorkbookPanelValue1065) return {
    kind: "cell",
    address: popcornElectronWorkbookPanelValue1065,
    raw: popcornElectronWorkbookPanelValue1063
  };
  if (!popcornElectronWorkbookPanelParam161) return null;
  let popcornElectronWorkbookPanelValue1066 = popcornElectronWorkbookPanelImport14(popcornElectronWorkbookPanelValue1063, popcornElectronWorkbookPanelValue1064);
  if (popcornElectronWorkbookPanelValue1066 && popcornElectronWorkbookPanelValue1066.kind === "WholeColumn") return {
    kind: "column",
    col: popcornElectronWorkbookPanelValue1066.col,
    raw: popcornElectronWorkbookPanelValue1063
  };
  let popcornElectronWorkbookPanelValue1067 = popcornElectronWorkbookPanelHelper159(popcornElectronWorkbookPanelValue1063);
  return popcornElectronWorkbookPanelValue1067 ? {
    kind: "row",
    row: popcornElectronWorkbookPanelValue1067.row,
    abs: popcornElectronWorkbookPanelValue1067.abs,
    raw: popcornElectronWorkbookPanelValue1063
  } : null;
}
function popcornElectronWorkbookPanelHelper159(popcornElectronWorkbookPanelParam271) {
  let popcornElectronWorkbookPanelValue1258 = /^(\$?)(\d{1,7})$/.exec(popcornElectronWorkbookPanelParam271);
  if (!popcornElectronWorkbookPanelValue1258) return null;
  let popcornElectronWorkbookPanelValue1259 = Number(popcornElectronWorkbookPanelValue1258[2]);
  return !Number.isInteger(popcornElectronWorkbookPanelValue1259) || popcornElectronWorkbookPanelValue1259 <= 0 ? null : {
    row: popcornElectronWorkbookPanelValue1259,
    abs: popcornElectronWorkbookPanelValue1258[1] === "$"
  };
}
function popcornElectronWorkbookPanelHelper160(popcornElectronWorkbookPanelParam365) {
  let popcornElectronWorkbookPanelValue1334 = popcornElectronWorkbookPanelImport10(popcornElectronWorkbookPanelParam365.col);
  return `${popcornElectronWorkbookPanelParam365.absCol ? `$${popcornElectronWorkbookPanelValue1334}` : popcornElectronWorkbookPanelValue1334}${popcornElectronWorkbookPanelParam365.absRow ? `$${popcornElectronWorkbookPanelParam365.row}` : String(popcornElectronWorkbookPanelParam365.row)}`;
}
function popcornElectronWorkbookPanelHelper161(popcornElectronWorkbookPanelParam450) {
  let popcornElectronWorkbookPanelValue1367 = popcornElectronWorkbookPanelImport10(popcornElectronWorkbookPanelParam450.col);
  return popcornElectronWorkbookPanelParam450.raw.startsWith("$") ? `$${popcornElectronWorkbookPanelValue1367}` : popcornElectronWorkbookPanelValue1367;
}
function _a(popcornElectronWorkbookPanelParam485) {
  let popcornElectronWorkbookPanelValue1375 = String(popcornElectronWorkbookPanelParam485.row);
  return popcornElectronWorkbookPanelParam485.abs ? `$${popcornElectronWorkbookPanelValue1375}` : popcornElectronWorkbookPanelValue1375;
}
function popcornElectronWorkbookPanelHelper162(popcornElectronWorkbookPanelParam272) {
  let popcornElectronWorkbookPanelValue1262 = popcornElectronWorkbookPanelParam272.trim();
  return popcornElectronWorkbookPanelValue1262.length >= 2 && popcornElectronWorkbookPanelValue1262.startsWith("'") && popcornElectronWorkbookPanelValue1262.endsWith("'") && (popcornElectronWorkbookPanelValue1262 = popcornElectronWorkbookPanelValue1262.slice(1, -1).replace(/''/g, "'")), popcornElectronWorkbookPanelValue1262;
}
function popcornElectronWorkbookPanelHelper163(popcornElectronWorkbookPanelParam377, popcornElectronWorkbookPanelParam378) {
  return `ref:${(popcornElectronWorkbookPanelParam377 ?? "local").toUpperCase()}:${popcornElectronWorkbookPanelParam378.replace(/\$/g, "").toUpperCase()}`;
}
var popcornElectronWorkbookPanelValue56 = popcornElectronWorkbookPanelHelper165(),
  popcornElectronWorkbookPanelValue57 = /^[A-Za-z0-9_.]+$/,
  popcornElectronWorkbookPanelValue58 = /[A-Za-z]/;
function popcornElectronWorkbookPanelHelper164(popcornElectronWorkbookPanelParam101) {
  let popcornElectronWorkbookPanelValue838 = popcornElectronWorkbookPanelParam101.formula ?? "",
    popcornElectronWorkbookPanelValue839 = popcornElectronWorkbookPanelHelper166(popcornElectronWorkbookPanelParam101.caret ?? 0, popcornElectronWorkbookPanelValue838.length),
    popcornElectronWorkbookPanelValue840 = popcornElectronWorkbookPanelHelper151(popcornElectronWorkbookPanelValue838).tokens,
    popcornElectronWorkbookPanelValue841 = popcornElectronWorkbookPanelHelper173(popcornElectronWorkbookPanelValue840, popcornElectronWorkbookPanelValue839),
    popcornElectronWorkbookPanelValue842 = popcornElectronWorkbookPanelHelper167(popcornElectronWorkbookPanelValue838, popcornElectronWorkbookPanelValue839, popcornElectronWorkbookPanelValue840),
    popcornElectronWorkbookPanelValue843 = popcornElectronWorkbookPanelValue842.prefix.toUpperCase(),
    popcornElectronWorkbookPanelValue844 = popcornElectronWorkbookPanelValue58.test(popcornElectronWorkbookPanelValue842.prefix),
    popcornElectronWorkbookPanelValue845 = popcornElectronWorkbookPanelHelper169(popcornElectronWorkbookPanelValue843),
    popcornElectronWorkbookPanelValue846 = popcornElectronWorkbookPanelHelper170(popcornElectronWorkbookPanelValue838, popcornElectronWorkbookPanelValue839),
    popcornElectronWorkbookPanelValue847 = popcornElectronWorkbookPanelHelper172(popcornElectronWorkbookPanelParam101.selectedFunctionName, popcornElectronWorkbookPanelValue845),
    popcornElectronWorkbookPanelValue848 = popcornElectronWorkbookPanelValue846?.metadata ?? popcornElectronWorkbookPanelValue847 ?? (popcornElectronWorkbookPanelValue845.length === 1 ? popcornElectronWorkbookPanelValue845[0] : undefined);
  if (popcornElectronWorkbookPanelValue848) {
    let popcornElectronWorkbookPanelValue1256 = popcornElectronWorkbookPanelValue846?.metadata === popcornElectronWorkbookPanelValue848 ? popcornElectronWorkbookPanelValue846.argumentIndex : 0;
    return {
      kind: "parameters",
      function: popcornElectronWorkbookPanelValue848,
      argumentIndex: popcornElectronWorkbookPanelValue1256,
      parameter: popcornElectronWorkbookPanelHelper171(popcornElectronWorkbookPanelValue848.parameters, popcornElectronWorkbookPanelValue1256)
    };
  }
  return !popcornElectronWorkbookPanelValue844 || popcornElectronWorkbookPanelValue841 || popcornElectronWorkbookPanelValue845.length === 0 ? null : {
    kind: "functions",
    prefix: popcornElectronWorkbookPanelValue842.prefix,
    suggestions: popcornElectronWorkbookPanelValue845
  };
}
function popcornElectronWorkbookPanelHelper165() {
  let popcornElectronWorkbookPanelValue1352 = new Map();
  for (let popcornElectronWorkbookPanelValue1390 of popcornElectronWorkbookPanelValue52) popcornElectronWorkbookPanelValue1352.set(popcornElectronWorkbookPanelValue1390.name.toUpperCase(), popcornElectronWorkbookPanelValue1390);
  return popcornElectronWorkbookPanelValue1352;
}
function popcornElectronWorkbookPanelHelper166(popcornElectronWorkbookPanelParam456, popcornElectronWorkbookPanelParam457) {
  return Number.isNaN(popcornElectronWorkbookPanelParam456) ? 0 : Math.min(Math.max(popcornElectronWorkbookPanelParam456, 0), popcornElectronWorkbookPanelParam457);
}
function popcornElectronWorkbookPanelHelper167(popcornElectronWorkbookPanelParam232, popcornElectronWorkbookPanelParam233, popcornElectronWorkbookPanelParam234) {
  for (let popcornElectronWorkbookPanelValue1318 of popcornElectronWorkbookPanelParam234) if (popcornElectronWorkbookPanelValue1318.kind === "ident" && popcornElectronWorkbookPanelValue1318.from <= popcornElectronWorkbookPanelParam233 && popcornElectronWorkbookPanelParam233 <= popcornElectronWorkbookPanelValue1318.to) return {
    prefix: popcornElectronWorkbookPanelParam232.slice(popcornElectronWorkbookPanelValue1318.from, popcornElectronWorkbookPanelParam233),
    start: popcornElectronWorkbookPanelValue1318.from
  };
  let popcornElectronWorkbookPanelValue1218 = popcornElectronWorkbookPanelHelper168(popcornElectronWorkbookPanelParam232, popcornElectronWorkbookPanelParam233);
  return {
    prefix: popcornElectronWorkbookPanelParam232.slice(popcornElectronWorkbookPanelValue1218, popcornElectronWorkbookPanelParam233),
    start: popcornElectronWorkbookPanelValue1218
  };
}
function popcornElectronWorkbookPanelHelper168(popcornElectronWorkbookPanelParam335, popcornElectronWorkbookPanelParam336) {
  let popcornElectronWorkbookPanelValue1310 = popcornElectronWorkbookPanelParam336;
  for (; popcornElectronWorkbookPanelValue1310 > 0;) {
    let popcornElectronWorkbookPanelValue1377 = popcornElectronWorkbookPanelParam335[popcornElectronWorkbookPanelValue1310 - 1] ?? "";
    if (!popcornElectronWorkbookPanelValue57.test(popcornElectronWorkbookPanelValue1377)) break;
    --popcornElectronWorkbookPanelValue1310;
  }
  return popcornElectronWorkbookPanelValue1310;
}
function popcornElectronWorkbookPanelHelper169(popcornElectronWorkbookPanelParam402) {
  return popcornElectronWorkbookPanelParam402 ? popcornElectronWorkbookPanelValue52.filter(item => item.name.toUpperCase().startsWith(popcornElectronWorkbookPanelParam402)) : popcornElectronWorkbookPanelValue52.slice();
}
function popcornElectronWorkbookPanelHelper170(popcornElectronWorkbookPanelParam60, popcornElectronWorkbookPanelParam61) {
  let popcornElectronWorkbookPanelValue680 = popcornElectronWorkbookPanelImport11(popcornElectronWorkbookPanelParam60),
    popcornElectronWorkbookPanelValue681 = [],
    popcornElectronWorkbookPanelValue682 = null;
  for (let popcornElectronWorkbookPanelValue757 of popcornElectronWorkbookPanelValue680) {
    if (popcornElectronWorkbookPanelValue757.start >= popcornElectronWorkbookPanelParam61) break;
    if (popcornElectronWorkbookPanelValue757.type !== "Whitespace") {
      switch (popcornElectronWorkbookPanelValue757.type) {
        case "ParenOpen":
          if (popcornElectronWorkbookPanelValue682 && popcornElectronWorkbookPanelValue682.type === "Identifier") {
            let popcornElectronWorkbookPanelValue1205 = popcornElectronWorkbookPanelParam60.slice(popcornElectronWorkbookPanelValue682.start, popcornElectronWorkbookPanelValue682.end).toUpperCase(),
              popcornElectronWorkbookPanelValue1206 = popcornElectronWorkbookPanelValue56.get(popcornElectronWorkbookPanelValue1205);
            popcornElectronWorkbookPanelValue681.push({
              kind: "function",
              frame: {
                name: popcornElectronWorkbookPanelValue1205,
                metadata: popcornElectronWorkbookPanelValue1206,
                argumentIndex: 0
              }
            });
          } else popcornElectronWorkbookPanelValue681.push({
            kind: "group"
          });
          break;
        case "ParenClose":
          popcornElectronWorkbookPanelValue681.pop();
          break;
        case "Comma":
          for (let popcornElectronWorkbookPanelValue1244 = popcornElectronWorkbookPanelValue681.length - 1; popcornElectronWorkbookPanelValue1244 >= 0; --popcornElectronWorkbookPanelValue1244) {
            let popcornElectronWorkbookPanelValue1285 = popcornElectronWorkbookPanelValue681[popcornElectronWorkbookPanelValue1244];
            if (!(!popcornElectronWorkbookPanelValue1285 || popcornElectronWorkbookPanelValue1285.kind !== "function")) {
              popcornElectronWorkbookPanelValue1285.frame.argumentIndex += 1;
              break;
            }
          }
          break;
        default:
          break;
      }
      popcornElectronWorkbookPanelValue682 = popcornElectronWorkbookPanelValue757;
    }
  }
  for (let popcornElectronWorkbookPanelValue1333 = popcornElectronWorkbookPanelValue681.length - 1; popcornElectronWorkbookPanelValue1333 >= 0; --popcornElectronWorkbookPanelValue1333) {
    let popcornElectronWorkbookPanelValue1368 = popcornElectronWorkbookPanelValue681[popcornElectronWorkbookPanelValue1333];
    if (!(!popcornElectronWorkbookPanelValue1368 || popcornElectronWorkbookPanelValue1368.kind !== "function")) return popcornElectronWorkbookPanelValue1368.frame;
  }
}
function popcornElectronWorkbookPanelHelper171(popcornElectronWorkbookPanelParam440, popcornElectronWorkbookPanelParam441) {
  if (popcornElectronWorkbookPanelParam440.length !== 0) return popcornElectronWorkbookPanelParam441 < popcornElectronWorkbookPanelParam440.length ? popcornElectronWorkbookPanelParam440[popcornElectronWorkbookPanelParam441] : popcornElectronWorkbookPanelParam440[popcornElectronWorkbookPanelParam440.length - 1];
}
function popcornElectronWorkbookPanelHelper172(popcornElectronWorkbookPanelParam319, popcornElectronWorkbookPanelParam320) {
  if (!popcornElectronWorkbookPanelParam319) return;
  let popcornElectronWorkbookPanelValue1301 = popcornElectronWorkbookPanelParam319.trim().toUpperCase();
  if (popcornElectronWorkbookPanelValue1301) return popcornElectronWorkbookPanelValue56.get(popcornElectronWorkbookPanelValue1301) ?? popcornElectronWorkbookPanelParam320.find(item => item.name.toUpperCase() === popcornElectronWorkbookPanelValue1301);
}
function popcornElectronWorkbookPanelHelper173(popcornElectronWorkbookPanelParam428, popcornElectronWorkbookPanelParam429) {
  return popcornElectronWorkbookPanelParam428.some(item => item.kind === "ref" && item.from <= popcornElectronWorkbookPanelParam429 && popcornElectronWorkbookPanelParam429 <= item.to);
}
function popcornElectronWorkbookPanelHelper174(popcornElectronWorkbookPanelParam235, popcornElectronWorkbookPanelParam236, popcornElectronWorkbookPanelParam237) {
  for (let popcornElectronWorkbookPanelValue1319 of popcornElectronWorkbookPanelParam237) if (popcornElectronWorkbookPanelValue1319.kind === "ident" && popcornElectronWorkbookPanelValue1319.from <= popcornElectronWorkbookPanelParam236 && popcornElectronWorkbookPanelParam236 <= popcornElectronWorkbookPanelValue1319.to) return {
    prefix: popcornElectronWorkbookPanelParam235.slice(popcornElectronWorkbookPanelValue1319.from, popcornElectronWorkbookPanelParam236),
    start: popcornElectronWorkbookPanelValue1319.from
  };
  let popcornElectronWorkbookPanelValue1219 = popcornElectronWorkbookPanelHelper175(popcornElectronWorkbookPanelParam235, popcornElectronWorkbookPanelParam236);
  return {
    prefix: popcornElectronWorkbookPanelParam235.slice(popcornElectronWorkbookPanelValue1219, popcornElectronWorkbookPanelParam236),
    start: popcornElectronWorkbookPanelValue1219
  };
}
function popcornElectronWorkbookPanelHelper175(popcornElectronWorkbookPanelParam302, popcornElectronWorkbookPanelParam303) {
  let popcornElectronWorkbookPanelValue1288 = /^[A-Za-z0-9_.]+$/,
    popcornElectronWorkbookPanelValue1289 = popcornElectronWorkbookPanelParam303;
  for (; popcornElectronWorkbookPanelValue1289 > 0;) {
    let popcornElectronWorkbookPanelValue1378 = popcornElectronWorkbookPanelParam302[popcornElectronWorkbookPanelValue1289 - 1] ?? "";
    if (!popcornElectronWorkbookPanelValue1288.test(popcornElectronWorkbookPanelValue1378)) break;
    --popcornElectronWorkbookPanelValue1289;
  }
  return popcornElectronWorkbookPanelValue1289;
}
function popcornElectronWorkbookPanelHelper176({
  result,
  position,
  selectedIndex,
  onSuggestionHover,
  onSuggestionSelect
}) {
  if (result.kind === "functions") {
    let popcornElectronWorkbookPanelValue452 = result.suggestions;
    if (popcornElectronWorkbookPanelValue452.length === 0) return null;
    let popcornElectronWorkbookPanelValue453 = Math.min(selectedIndex, Math.max(popcornElectronWorkbookPanelValue452.length - 1, 0));
    return <div className="border-token-border bg-token-bg-primary absolute z-30 w-[430px] rounded-xl border p-2 shadow-xl" style={{
      top: position.top,
      left: position.left
    }}>
        <ul className="scrollbar-hide max-h-[420px] space-y-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {popcornElectronWorkbookPanelValue452.map((item, index) => {
          let popcornElectronWorkbookPanelValue546 = index === popcornElectronWorkbookPanelValue453,
            popcornElectronWorkbookPanelValue547 = item.description?.trim();
          return <li key={item.name}>
                <button type="button" className={clsx("w-full rounded-lg px-3 py-2 text-start", popcornElectronWorkbookPanelValue546 ? "bg-token-bg-secondary" : "hover:bg-token-bg-secondary")} onMouseEnter={() => onSuggestionHover(index)} onFocus={() => onSuggestionHover(index)} onMouseDown={event => {
              event.preventDefault();
            }} onClick={() => onSuggestionSelect(item)}>
                  <div className="text-token-text-primary text-[14px] leading-5">
                    {item.name}
                  </div>
                  {popcornElectronWorkbookPanelValue547 ? <div className={clsx("grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-200", popcornElectronWorkbookPanelValue546 ? "mt-0.5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <div className="text-token-text-secondary line-clamp-2 text-[14px] leading-5">
                          {popcornElectronWorkbookPanelValue547}
                        </div>
                      </div>
                    </div> : null}
                </button>
              </li>;
        })}
        </ul>
      </div>;
  }
  let popcornElectronWorkbookPanelValue357 = result.function,
    popcornElectronWorkbookPanelValue358 = popcornElectronWorkbookPanelValue357.parameters ?? [];
  return <div className="border-token-border bg-token-bg-primary absolute z-30 w-72 rounded-md border p-3 text-xs shadow-lg" style={{
    top: position.top,
    left: position.left
  }}>
      <div className="text-token-text-primary text-sm font-semibold">
        {popcornElectronWorkbookPanelValue357.name}
      </div>
      <div className="text-token-text-secondary mt-1 font-mono text-[11px]">
        <span className="text-token-text-primary">
          {popcornElectronWorkbookPanelValue357.name}
        </span>
        <span>{"("}</span>
        {popcornElectronWorkbookPanelValue358.map((item, index) => {
        let popcornElectronWorkbookPanelValue998 = index === result.argumentIndex,
          popcornElectronWorkbookPanelValue999 = item.type ?? item.name;
        return <span key={`${popcornElectronWorkbookPanelValue357.name}-sig-${item.name}-${index}`} className={clsx("rounded-sm px-0.5", popcornElectronWorkbookPanelValue998 && "bg-green-500/30 font-semibold text-green-900")}>
              {popcornElectronWorkbookPanelValue999}
              {index < popcornElectronWorkbookPanelValue358.length - 1 ? ", " : null}
            </span>;
      })}
        <span className={clsx(popcornElectronWorkbookPanelValue358.length === 0 && "text-token-text-tertiary")}>
          {")"}
        </span>
      </div>
      <p className="text-token-text-secondary mt-1 mb-2 text-[11px]">
        {popcornElectronWorkbookPanelValue357.description}
      </p>
      {popcornElectronWorkbookPanelValue357.example ? <div className="text-token-text-tertiary mb-2 font-mono text-[10px]">
          {popcornElectronWorkbookPanelValue357.example}
        </div> : null}
      <ul className="space-y-1">
        {popcornElectronWorkbookPanelValue358.map((item, index) => {
        let popcornElectronWorkbookPanelValue665 = index === result.argumentIndex,
          popcornElectronWorkbookPanelValue666 = item.type ?? item.name;
        return <li key={`${popcornElectronWorkbookPanelValue357.name}-${item.name}-${index}`} className={clsx("rounded px-2 py-1", popcornElectronWorkbookPanelValue665 ? "bg-green-500/20 text-green-900" : "text-token-text-secondary")}>
              <span className="text-token-text-primary font-semibold">
                {item.name}
              </span>
              <span className="text-token-text-tertiary ms-1 text-[11px]">
                {popcornElectronWorkbookPanelValue666}
              </span>
              {item.optional ? <span className="text-token-text-tertiary text-[10px] uppercase">
                  {"optional"}
                </span> : null}
              <div className="text-[11px]">{item.description}</div>
            </li>;
      })}
      </ul>
    </div>;
}
function popcornElectronWorkbookPanelHelper177({
  text,
  tokenized,
  refColors
}) {
  let popcornElectronWorkbookPanelValue781 = [],
    popcornElectronWorkbookPanelValue782 = 0;
  for (let popcornElectronWorkbookPanelValue1072 of tokenized.tokens) {
    popcornElectronWorkbookPanelValue1072.from > popcornElectronWorkbookPanelValue782 && popcornElectronWorkbookPanelValue781.push(<span key={`gap-${popcornElectronWorkbookPanelValue782}`}>
          {text.slice(popcornElectronWorkbookPanelValue782, popcornElectronWorkbookPanelValue1072.from)}
        </span>);
    popcornElectronWorkbookPanelValue781.push(React.createElement(popcornElectronWorkbookPanelHelper178, {
      text: text.slice(popcornElectronWorkbookPanelValue1072.from, popcornElectronWorkbookPanelValue1072.to),
      highlight: popcornElectronWorkbookPanelHelper179(popcornElectronWorkbookPanelValue1072, tokenized.highlights),
      refColors
    }));
    popcornElectronWorkbookPanelValue782 = popcornElectronWorkbookPanelValue1072.to;
  }
  return popcornElectronWorkbookPanelValue782 < text.length && popcornElectronWorkbookPanelValue781.push(<span key={`trail-${popcornElectronWorkbookPanelValue782}`}>
          {text.slice(popcornElectronWorkbookPanelValue782, text.length)}
        </span>), <pre className="m-0 font-mono text-xs break-words whitespace-pre-wrap" style={{
    lineHeight: "inherit"
  }}>
        {popcornElectronWorkbookPanelValue781}
      </pre>;
}
function popcornElectronWorkbookPanelHelper178({
  text,
  highlight,
  refColors
}) {
  if (!highlight) return <span>{text}</span>;
  let {
    className,
    style
  } = popcornElectronWorkbookPanelHelper180(highlight, refColors);
  return <span className={className} style={style}>
      {text}
    </span>;
}
function popcornElectronWorkbookPanelHelper179(popcornElectronWorkbookPanelParam385, popcornElectronWorkbookPanelParam386) {
  for (let popcornElectronWorkbookPanelValue1382 of popcornElectronWorkbookPanelParam386) if (popcornElectronWorkbookPanelValue1382.from <= popcornElectronWorkbookPanelParam385.from && popcornElectronWorkbookPanelValue1382.to >= popcornElectronWorkbookPanelParam385.to) return popcornElectronWorkbookPanelValue1382;
  return null;
}
function popcornElectronWorkbookPanelHelper180(popcornElectronWorkbookPanelParam106, popcornElectronWorkbookPanelParam107) {
  switch (popcornElectronWorkbookPanelParam106.kind) {
    case "func":
      return {
        className: "text-token-text-accent font-semibold"
      };
    case "string":
      return {
        className: "text-token-text-tertiary"
      };
    case "number":
      return {
        className: "text-token-text-secondary"
      };
    case "error":
      return {
        className: "text-token-text-critical"
      };
    case "ref":
      {
        let popcornElectronWorkbookPanelValue1276 = popcornElectronWorkbookPanelParam106.colorKey ?? popcornElectronWorkbookPanelParam106.ref?.a1?.toUpperCase(),
          popcornElectronWorkbookPanelValue1277 = popcornElectronWorkbookPanelValue1276 ? popcornElectronWorkbookPanelParam107?.[popcornElectronWorkbookPanelValue1276] : undefined;
        return {
          className: "font-semibold",
          style: popcornElectronWorkbookPanelValue1277 ? {
            color: popcornElectronWorkbookPanelValue1277
          } : undefined
        };
      }
    default:
      return {
        className: "text-token-text-primary"
      };
  }
}
function popcornElectronWorkbookPanelHelper181(popcornElectronWorkbookPanelParam245, popcornElectronWorkbookPanelParam246, popcornElectronWorkbookPanelParam247, popcornElectronWorkbookPanelParam248, popcornElectronWorkbookPanelParam249, popcornElectronWorkbookPanelParam250) {
  let popcornElectronWorkbookPanelValue1237 = popcornElectronWorkbookPanelParam246 ?? {
      start: popcornElectronWorkbookPanelParam248.start,
      prefix: ""
    },
    popcornElectronWorkbookPanelValue1238 = popcornElectronWorkbookPanelParam247.slice(0, popcornElectronWorkbookPanelValue1237.start),
    popcornElectronWorkbookPanelValue1239 = popcornElectronWorkbookPanelParam247.slice(popcornElectronWorkbookPanelParam248.end);
  popcornElectronWorkbookPanelParam249("formula", `${popcornElectronWorkbookPanelValue1238}${`${popcornElectronWorkbookPanelParam245.name}()`}${popcornElectronWorkbookPanelValue1239}`, popcornElectronWorkbookPanelValue1237.start + popcornElectronWorkbookPanelParam245.name.length + 1);
  popcornElectronWorkbookPanelParam250();
}
function popcornElectronWorkbookPanelHelper182(popcornElectronWorkbookPanelParam42, popcornElectronWorkbookPanelParam43) {
  if (typeof window > "u" || typeof document > "u") return null;
  let popcornElectronWorkbookPanelValue618 = document.createElement("div"),
    popcornElectronWorkbookPanelValue619 = window.getComputedStyle(popcornElectronWorkbookPanelParam42),
    popcornElectronWorkbookPanelValue620 = "boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.tabSize.wordBreak".split(".");
  popcornElectronWorkbookPanelValue618.style.position = "absolute";
  popcornElectronWorkbookPanelValue618.style.visibility = "hidden";
  popcornElectronWorkbookPanelValue618.style.whiteSpace = "pre-wrap";
  popcornElectronWorkbookPanelValue618.style.wordWrap = "break-word";
  popcornElectronWorkbookPanelValue618.style.top = `${popcornElectronWorkbookPanelParam42.scrollTop}px`;
  popcornElectronWorkbookPanelValue618.style.left = `${popcornElectronWorkbookPanelParam42.scrollLeft}px`;
  let popcornElectronWorkbookPanelValue621 = popcornElectronWorkbookPanelValue618.style,
    popcornElectronWorkbookPanelValue622 = popcornElectronWorkbookPanelValue619;
  for (let popcornElectronWorkbookPanelValue1394 of popcornElectronWorkbookPanelValue620) popcornElectronWorkbookPanelValue621[popcornElectronWorkbookPanelValue1394] = popcornElectronWorkbookPanelValue622[popcornElectronWorkbookPanelValue1394];
  popcornElectronWorkbookPanelValue618.textContent = popcornElectronWorkbookPanelParam42.value.slice(0, popcornElectronWorkbookPanelParam43);
  popcornElectronWorkbookPanelParam42.selectionEnd === popcornElectronWorkbookPanelParam42.value.length && (popcornElectronWorkbookPanelValue618.textContent += "​");
  document.body.appendChild(popcornElectronWorkbookPanelValue618);
  let popcornElectronWorkbookPanelValue623 = document.createElement("span");
  popcornElectronWorkbookPanelValue623.textContent = popcornElectronWorkbookPanelParam42.value.slice(popcornElectronWorkbookPanelParam43) || "​";
  popcornElectronWorkbookPanelValue618.appendChild(popcornElectronWorkbookPanelValue623);
  let {
    offsetTop,
    offsetLeft,
    offsetHeight
  } = popcornElectronWorkbookPanelValue623;
  document.body.removeChild(popcornElectronWorkbookPanelValue618);
  let popcornElectronWorkbookPanelValue624 = popcornElectronWorkbookPanelParam42.getBoundingClientRect();
  return {
    top: popcornElectronWorkbookPanelValue624.top + offsetTop - popcornElectronWorkbookPanelParam42.scrollTop,
    left: popcornElectronWorkbookPanelValue624.left + offsetLeft - popcornElectronWorkbookPanelParam42.scrollLeft,
    height: offsetHeight
  };
}
var popcornElectronWorkbookPanelValue59 = React.forwardRef(function ({
  value,
  onChange,
  onSubmit,
  onCancel,
  onFocus,
  onBlur,
  readOnly = false,
  refColors,
  className,
  allowShiftEnterNewline = true,
  inputId,
  inputLabel,
  inputTestId
}, popcornElectronWorkbookPanelParam5) {
  let popcornElectronWorkbookPanelValue269 = value.kind === "formula" ? value.text : popcornElectronWorkbookPanelHelper145(value.runs),
    [popcornElectronWorkbookPanelValue270, popcornElectronWorkbookPanelValue271] = React.useState(value.kind),
    [popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue273] = React.useState(popcornElectronWorkbookPanelValue269),
    [popcornElectronWorkbookPanelValue274, popcornElectronWorkbookPanelValue275] = React.useState({
      start: popcornElectronWorkbookPanelValue269.length,
      end: popcornElectronWorkbookPanelValue269.length
    }),
    [popcornElectronWorkbookPanelValue276, popcornElectronWorkbookPanelValue277] = React.useState(false),
    [popcornElectronWorkbookPanelValue278, popcornElectronWorkbookPanelValue279] = React.useState(0),
    popcornElectronWorkbookPanelValue280 = React.useRef(null),
    popcornElectronWorkbookPanelValue281 = React.useRef(null),
    [popcornElectronWorkbookPanelValue282, popcornElectronWorkbookPanelValue283] = React.useState(0),
    popcornElectronWorkbookPanelValue284 = React.useRef(value),
    popcornElectronWorkbookPanelValue285 = React.useRef(onChange),
    popcornElectronWorkbookPanelValue286 = React.useMemo(() => value.kind === "formula" ? value.text : popcornElectronWorkbookPanelHelper145(value.runs), [value]),
    popcornElectronWorkbookPanelValue287 = popcornElectronWorkbookPanelValue276 ? popcornElectronWorkbookPanelValue270 : value.kind,
    popcornElectronWorkbookPanelValue288 = popcornElectronWorkbookPanelValue276 ? popcornElectronWorkbookPanelValue272 : popcornElectronWorkbookPanelValue286;
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue284.current = value;
  }, [value]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue285.current = onChange;
  }, [onChange]);
  let popcornElectronWorkbookPanelValue289 = React.useCallback((popcornElectronWorkbookPanelParam387, popcornElectronWorkbookPanelParam388) => {
      let popcornElectronWorkbookPanelValue1351 = popcornElectronWorkbookPanelParam387 === "formula" ? popcornElectronWorkbookPanelHelper142(popcornElectronWorkbookPanelParam388) : popcornElectronWorkbookPanelHelper143(popcornElectronWorkbookPanelParam388);
      popcornElectronWorkbookPanelValue284.current = popcornElectronWorkbookPanelValue1351;
      popcornElectronWorkbookPanelValue285.current(popcornElectronWorkbookPanelValue1351);
    }, []),
    popcornElectronWorkbookPanelValue290 = React.useCallback((popcornElectronWorkbookPanelParam187, popcornElectronWorkbookPanelParam188, popcornElectronWorkbookPanelParam189) => {
      let popcornElectronWorkbookPanelValue1120 = popcornElectronWorkbookPanelParam187 ?? (popcornElectronWorkbookPanelParam188.trimStart().startsWith("=") ? "formula" : "text");
      popcornElectronWorkbookPanelValue271(popcornElectronWorkbookPanelValue1120);
      popcornElectronWorkbookPanelValue273(popcornElectronWorkbookPanelParam188);
      popcornElectronWorkbookPanelValue289(popcornElectronWorkbookPanelValue1120, popcornElectronWorkbookPanelParam188);
      typeof popcornElectronWorkbookPanelParam189 == "number" && requestAnimationFrame(() => {
        popcornElectronWorkbookPanelValue280.current?.setSelectionRange(popcornElectronWorkbookPanelParam189, popcornElectronWorkbookPanelParam189);
        popcornElectronWorkbookPanelValue275({
          start: popcornElectronWorkbookPanelParam189,
          end: popcornElectronWorkbookPanelParam189
        });
      });
    }, [popcornElectronWorkbookPanelValue289]);
  React.useImperativeHandle(popcornElectronWorkbookPanelParam5, () => ({
    focus: () => popcornElectronWorkbookPanelValue280.current?.focus(),
    setValue: popcornElectronWorkbookPanelParam359 => {
      popcornElectronWorkbookPanelValue273(popcornElectronWorkbookPanelParam359.kind === "formula" ? popcornElectronWorkbookPanelParam359.text : popcornElectronWorkbookPanelHelper145(popcornElectronWorkbookPanelParam359.runs));
      popcornElectronWorkbookPanelValue271(popcornElectronWorkbookPanelParam359.kind);
      popcornElectronWorkbookPanelValue284.current = popcornElectronWorkbookPanelParam359;
    },
    getValue: () => popcornElectronWorkbookPanelValue284.current,
    insertReference: popcornElectronWorkbookPanelParam256 => {
      let popcornElectronWorkbookPanelValue1248 = popcornElectronWorkbookPanelValue280.current;
      if (!popcornElectronWorkbookPanelValue1248) return;
      let {
        selectionStart = 0,
        selectionEnd = 0
      } = popcornElectronWorkbookPanelValue1248;
      popcornElectronWorkbookPanelValue290("formula", `${popcornElectronWorkbookPanelValue272.slice(0, selectionStart)}${popcornElectronWorkbookPanelParam256}${popcornElectronWorkbookPanelValue272.slice(selectionEnd)}`, selectionStart + popcornElectronWorkbookPanelParam256.length);
    },
    getCaretClientRect: () => {
      let popcornElectronWorkbookPanelValue1100 = popcornElectronWorkbookPanelValue280.current;
      if (!popcornElectronWorkbookPanelValue1100) return null;
      let popcornElectronWorkbookPanelValue1101 = popcornElectronWorkbookPanelHelper182(popcornElectronWorkbookPanelValue1100, popcornElectronWorkbookPanelValue1100.selectionStart ?? 0);
      return popcornElectronWorkbookPanelValue1101 ? new DOMRect(popcornElectronWorkbookPanelValue1101.left, popcornElectronWorkbookPanelValue1101.top, 1, popcornElectronWorkbookPanelValue1101.height ?? (parseFloat(getComputedStyle(popcornElectronWorkbookPanelValue1100).lineHeight) || 16)) : null;
    }
  }), [popcornElectronWorkbookPanelValue290, popcornElectronWorkbookPanelValue272]);
  let popcornElectronWorkbookPanelValue291 = React.useCallback(event => {
      let popcornElectronWorkbookPanelValue1188 = event.target.value,
        popcornElectronWorkbookPanelValue1189 = popcornElectronWorkbookPanelValue1188.trimStart(),
        popcornElectronWorkbookPanelValue1190 = (popcornElectronWorkbookPanelValue1189.startsWith("=") || popcornElectronWorkbookPanelValue270 === "formula") && popcornElectronWorkbookPanelValue1189.startsWith("=") ? "formula" : "text";
      popcornElectronWorkbookPanelValue271(popcornElectronWorkbookPanelValue1190);
      popcornElectronWorkbookPanelValue273(popcornElectronWorkbookPanelValue1188);
      popcornElectronWorkbookPanelValue289(popcornElectronWorkbookPanelValue1190, popcornElectronWorkbookPanelValue1188);
      popcornElectronWorkbookPanelValue279(0);
    }, [popcornElectronWorkbookPanelValue289, popcornElectronWorkbookPanelValue270]),
    popcornElectronWorkbookPanelValue292 = React.useCallback(() => {
      if (!popcornElectronWorkbookPanelValue276) return;
      let popcornElectronWorkbookPanelValue1314 = popcornElectronWorkbookPanelValue280.current;
      popcornElectronWorkbookPanelValue1314 && popcornElectronWorkbookPanelValue275({
        start: popcornElectronWorkbookPanelValue1314.selectionStart ?? 0,
        end: popcornElectronWorkbookPanelValue1314.selectionEnd ?? 0
      });
    }, [popcornElectronWorkbookPanelValue276]),
    popcornElectronWorkbookPanelValue293 = React.useCallback(() => {
      let popcornElectronWorkbookPanelValue1345 = popcornElectronWorkbookPanelValue286;
      popcornElectronWorkbookPanelValue271(value.kind);
      popcornElectronWorkbookPanelValue273(popcornElectronWorkbookPanelValue1345);
      popcornElectronWorkbookPanelValue275({
        start: popcornElectronWorkbookPanelValue1345.length,
        end: popcornElectronWorkbookPanelValue1345.length
      });
      popcornElectronWorkbookPanelValue277(true);
      onFocus?.();
    }, [popcornElectronWorkbookPanelValue286, onFocus, value.kind]),
    popcornElectronWorkbookPanelValue294 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue277(false);
      onBlur?.();
    }, [onBlur]),
    popcornElectronWorkbookPanelValue295 = React.useCallback(() => {
      let popcornElectronWorkbookPanelValue1340 = popcornElectronWorkbookPanelValue270 === "formula" ? popcornElectronWorkbookPanelHelper142(popcornElectronWorkbookPanelValue272) : popcornElectronWorkbookPanelHelper143(popcornElectronWorkbookPanelValue272);
      popcornElectronWorkbookPanelValue284.current = popcornElectronWorkbookPanelValue1340;
      onSubmit?.(popcornElectronWorkbookPanelValue1340);
      popcornElectronWorkbookPanelValue280.current?.blur();
    }, [popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue270, onSubmit]),
    popcornElectronWorkbookPanelValue296 = React.useCallback(() => {
      onCancel?.();
    }, [onCancel]),
    popcornElectronWorkbookPanelValue297 = React.useMemo(() => popcornElectronWorkbookPanelValue287 === "formula" ? popcornElectronWorkbookPanelHelper151(popcornElectronWorkbookPanelValue288) : null, [popcornElectronWorkbookPanelValue287, popcornElectronWorkbookPanelValue288]),
    popcornElectronWorkbookPanelValue298 = React.useMemo(() => popcornElectronWorkbookPanelValue270 === "formula" ? popcornElectronWorkbookPanelHelper174(popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue274.start, popcornElectronWorkbookPanelValue297?.tokens ?? []) : null, [popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue270, popcornElectronWorkbookPanelValue274.start, popcornElectronWorkbookPanelValue297?.tokens]),
    popcornElectronWorkbookPanelValue299 = React.useMemo(() => popcornElectronWorkbookPanelValue270 === "formula" ? popcornElectronWorkbookPanelHelper164({
      formula: popcornElectronWorkbookPanelValue272,
      caret: popcornElectronWorkbookPanelValue274.start
    }) : null, [popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue270, popcornElectronWorkbookPanelValue274.start]),
    popcornElectronWorkbookPanelValue300 = popcornElectronWorkbookPanelValue299?.kind === "functions" ? popcornElectronWorkbookPanelValue299.suggestions.length : 0,
    popcornElectronWorkbookPanelValue301 = (popcornElectronWorkbookPanelValue298?.prefix?.trim().length ?? 0) >= 1,
    popcornElectronWorkbookPanelValue302 = popcornElectronWorkbookPanelValue270 === "formula" && popcornElectronWorkbookPanelValue276 && popcornElectronWorkbookPanelValue299?.kind === "functions" && popcornElectronWorkbookPanelValue301 && popcornElectronWorkbookPanelValue300 > 0,
    popcornElectronWorkbookPanelValue303 = popcornElectronWorkbookPanelValue270 === "formula" && popcornElectronWorkbookPanelValue276 && popcornElectronWorkbookPanelValue299?.kind === "parameters",
    popcornElectronWorkbookPanelValue304 = popcornElectronWorkbookPanelValue302 ? Math.min(popcornElectronWorkbookPanelValue278, Math.max(popcornElectronWorkbookPanelValue300 - 1, 0)) : 0;
  React.useEffect(() => {
    let popcornElectronWorkbookPanelValue1381 = popcornElectronWorkbookPanelValue281.current;
    popcornElectronWorkbookPanelValue1381 && popcornElectronWorkbookPanelValue283(popcornElectronWorkbookPanelValue1381.offsetHeight + 4);
  }, [popcornElectronWorkbookPanelValue276, readOnly, popcornElectronWorkbookPanelValue287, popcornElectronWorkbookPanelValue288]);
  let popcornElectronWorkbookPanelValue305 = React.useCallback(event => {
      if (event.stopPropagation(), !readOnly) {
        if (popcornElectronWorkbookPanelValue302 && popcornElectronWorkbookPanelValue299?.kind === "functions") {
          let popcornElectronWorkbookPanelValue863 = popcornElectronWorkbookPanelValue299.suggestions,
            popcornElectronWorkbookPanelValue864 = popcornElectronWorkbookPanelValue863.length;
          if (popcornElectronWorkbookPanelValue864 > 0) {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              popcornElectronWorkbookPanelValue279(popcornElectronWorkbookPanelParam613 => (popcornElectronWorkbookPanelParam613 + 1) % popcornElectronWorkbookPanelValue864);
              return;
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              popcornElectronWorkbookPanelValue279(popcornElectronWorkbookPanelParam605 => (popcornElectronWorkbookPanelParam605 - 1 + popcornElectronWorkbookPanelValue864) % popcornElectronWorkbookPanelValue864);
              return;
            }
            if (event.key === "Enter") {
              event.preventDefault();
              let popcornElectronWorkbookPanelValue1271 = popcornElectronWorkbookPanelValue863[Math.min(popcornElectronWorkbookPanelValue304, popcornElectronWorkbookPanelValue864 - 1)];
              popcornElectronWorkbookPanelValue1271 && popcornElectronWorkbookPanelHelper181(popcornElectronWorkbookPanelValue1271, popcornElectronWorkbookPanelValue298, popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue274, popcornElectronWorkbookPanelValue290, () => popcornElectronWorkbookPanelValue279(0));
              return;
            }
          }
        }
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          popcornElectronWorkbookPanelValue295();
          return;
        }
        event.key === "Enter" && event.shiftKey && allowShiftEnterNewline && popcornElectronWorkbookPanelValue270 === "text" || event.key === "Escape" && (event.preventDefault(), popcornElectronWorkbookPanelValue296());
      }
    }, [popcornElectronWorkbookPanelValue304, allowShiftEnterNewline, popcornElectronWorkbookPanelValue290, popcornElectronWorkbookPanelValue299, popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue296, popcornElectronWorkbookPanelValue295, popcornElectronWorkbookPanelValue298, popcornElectronWorkbookPanelValue270, readOnly, popcornElectronWorkbookPanelValue274, popcornElectronWorkbookPanelValue302]),
    popcornElectronWorkbookPanelValue306 = popcornElectronWorkbookPanelValue287 === "formula",
    popcornElectronWorkbookPanelValue307 = popcornElectronWorkbookPanelValue287 === "formula" && popcornElectronWorkbookPanelValue297 ? React.createElement(popcornElectronWorkbookPanelHelper177, {
      text: popcornElectronWorkbookPanelValue288,
      tokenized: popcornElectronWorkbookPanelValue297,
      refColors
    }) : null,
    popcornElectronWorkbookPanelValue308 = () => ({
      left: 0,
      top: popcornElectronWorkbookPanelValue282
    }),
    popcornElectronWorkbookPanelValue309 = null;
  return popcornElectronWorkbookPanelValue302 && popcornElectronWorkbookPanelValue299?.kind === "functions" ? popcornElectronWorkbookPanelValue309 = React.createElement(popcornElectronWorkbookPanelHelper176, {
    result: popcornElectronWorkbookPanelValue299,
    position: popcornElectronWorkbookPanelValue308(),
    selectedIndex: popcornElectronWorkbookPanelValue304,
    onSuggestionHover: popcornElectronWorkbookPanelParam624 => popcornElectronWorkbookPanelValue279(popcornElectronWorkbookPanelParam624),
    onSuggestionSelect: popcornElectronWorkbookPanelParam591 => popcornElectronWorkbookPanelHelper181(popcornElectronWorkbookPanelParam591, popcornElectronWorkbookPanelValue298, popcornElectronWorkbookPanelValue272, popcornElectronWorkbookPanelValue274, popcornElectronWorkbookPanelValue290, () => popcornElectronWorkbookPanelValue279(0))
  }) : popcornElectronWorkbookPanelValue303 && popcornElectronWorkbookPanelValue299?.kind === "parameters" && (popcornElectronWorkbookPanelValue309 = React.createElement(popcornElectronWorkbookPanelHelper176, {
    result: popcornElectronWorkbookPanelValue299,
    position: popcornElectronWorkbookPanelValue308(),
    selectedIndex: 0,
    onSuggestionHover: () => {},
    onSuggestionSelect: () => {}
  })), <div ref={popcornElectronWorkbookPanelValue281} className={clsx("border-token-border-heavy relative flex min-h-[30px] items-center rounded border", "bg-token-bg-primary text-xs", className)} onKeyDown={event => {
    event.stopPropagation();
  }}>
        <textarea ref={popcornElectronWorkbookPanelValue280} id={inputId} aria-label={inputLabel} data-testid={inputTestId} value={popcornElectronWorkbookPanelValue288} readOnly={readOnly} spellCheck={false} className={clsx("peer block w-full resize-none overflow-hidden border-0 bg-transparent text-xs outline-none", "focus:ring-0 focus:shadow-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none", "px-1.5 py-0", popcornElectronWorkbookPanelValue287 === "formula" ? "font-mono" : "font-sans", popcornElectronWorkbookPanelValue306 ? "caret-token-text-primary text-transparent" : "text-token-text-primary")} rows={1} style={{
      height: 26,
      lineHeight: "26px",
      color: popcornElectronWorkbookPanelValue306 ? "transparent" : undefined,
      boxShadow: "none",
      opacity: 1,
      outline: "none"
    }} onChange={popcornElectronWorkbookPanelValue291} onSelect={popcornElectronWorkbookPanelValue292} onFocus={popcornElectronWorkbookPanelValue293} onBlur={popcornElectronWorkbookPanelValue294} onKeyDown={popcornElectronWorkbookPanelValue305} />
        <div className={clsx("pointer-events-none absolute inset-x-1.5 top-1/2 h-[26px] -translate-y-1/2 overflow-hidden text-xs leading-[26px]", "text-token-text-primary font-mono", popcornElectronWorkbookPanelValue287 === "formula" ? "opacity-100" : "opacity-0")} style={{
      borderRadius: "inherit"
    }}>
          {popcornElectronWorkbookPanelValue307}
        </div>
        {popcornElectronWorkbookPanelValue309}
      </div>;
});
function popcornElectronWorkbookPanelHelper183(popcornElectronWorkbookPanelParam445) {
  let popcornElectronWorkbookPanelValue1366 = popcornElectronWorkbookPanelParam445.trimStart();
  return popcornElectronWorkbookPanelValue1366.startsWith("=") ? popcornElectronWorkbookPanelHelper142(popcornElectronWorkbookPanelValue1366) : popcornElectronWorkbookPanelHelper143(popcornElectronWorkbookPanelParam445);
}
function popcornElectronWorkbookPanelHelper184({
  controller,
  snapshot,
  onFxFocus,
  onFxBlur,
  refColors,
  isEditing = true,
  showZoomSelect = true
}) {
  let popcornElectronWorkbookPanelValue426 = React.useRef(null),
    popcornElectronWorkbookPanelValue427 = React.useRef(false),
    popcornElectronWorkbookPanelValue428 = controller.getSelectionSummarySource?.() ?? popcornElectronWorkbookPanelValue36,
    popcornElectronWorkbookPanelValue429 = React.useSyncExternalStore(popcornElectronWorkbookPanelValue428.subscribe, popcornElectronWorkbookPanelValue428.getSnapshot, popcornElectronWorkbookPanelValue428.getSnapshot),
    popcornElectronWorkbookPanelValue430 = React.useMemo(() => popcornElectronWorkbookPanelValue429.isDragging && (popcornElectronWorkbookPanelValue429.rows > 1 || popcornElectronWorkbookPanelValue429.cols > 1) ? `${popcornElectronWorkbookPanelValue429.rows}R x ${popcornElectronWorkbookPanelValue429.cols}C` : snapshot.selectedAddress, [popcornElectronWorkbookPanelValue429, snapshot.selectedAddress]),
    popcornElectronWorkbookPanelValue431 = React.useMemo(() => popcornElectronWorkbookPanelHelper183(snapshot.formulaInput), [snapshot.formulaInput]),
    popcornElectronWorkbookPanelValue432 = popcornElectronWorkbookPanelParam553 => {
      isEditing && controller.updateFormulaInput(popcornElectronWorkbookPanelHelper150(popcornElectronWorkbookPanelParam553));
    },
    popcornElectronWorkbookPanelValue433 = popcornElectronWorkbookPanelParam342 => {
      if (!isEditing) return;
      let popcornElectronWorkbookPanelValue1317 = popcornElectronWorkbookPanelHelper150(popcornElectronWorkbookPanelParam342);
      controller.updateFormulaInput(popcornElectronWorkbookPanelValue1317);
      popcornElectronWorkbookPanelValue427.current = true;
      controller.commitFormulaInput(popcornElectronWorkbookPanelValue1317);
    },
    popcornElectronWorkbookPanelValue434 = popcornElectronWorkbookPanelParam594 => {
      controller.setZoom(popcornElectronWorkbookPanelParam594);
    };
  return <div data-testid="popcorn-formula-bar" className="bg-token-bg-primary border-token-border-light flex h-10 items-center gap-2 border-b px-3 sm:px-4">
      <div className="text-token-text-secondary flex w-[64px] items-center justify-start rounded-md py-1 ps-1 text-xs font-medium">
        <span className="block truncate">
          {popcornElectronWorkbookPanelValue430}
        </span>
      </div>
      <div className="bg-token-border-light h-8 w-px shrink-0" />
      <button type="button" className="text-token-text-secondary hover:bg-token-bg-primary hover:text-token-text-primary inline-flex size-8 items-center justify-center rounded-md disabled:pointer-events-none disabled:opacity-50" aria-label="Insert function" data-testid="popcorn-formula-picker" disabled={!isEditing} onClick={() => popcornElectronWorkbookPanelValue426.current?.focus()}>
        {React.createElement(remoteTextEditSessionN, {
        className: "size-4"
      })}
      </button>
      <div className="min-w-0 flex-1">
        {React.createElement(popcornElectronWorkbookPanelValue59, {
        ref: popcornElectronWorkbookPanelValue426,
        inputId: "popcorn-formula-bar",
        inputLabel: "Formula bar",
        inputTestId: "popcorn-formula-input",
        value: popcornElectronWorkbookPanelValue431,
        onChange: popcornElectronWorkbookPanelValue432,
        onSubmit: popcornElectronWorkbookPanelValue433,
        onFocus: isEditing ? onFxFocus : undefined,
        onBlur: () => {
          if (popcornElectronWorkbookPanelValue427.current) {
            popcornElectronWorkbookPanelValue427.current = false;
            onFxBlur?.();
            return;
          }
          isEditing && controller.commitFormulaInput();
          onFxBlur?.();
        },
        readOnly: !isEditing,
        refColors,
        allowShiftEnterNewline: false,
        className: "rounded-md border-0 bg-transparent shadow-none"
      })}
      </div>
      {showZoomSelect ? <>
          <div className="bg-token-border-light mx-2 h-8 w-px shrink-0" />
          {React.createElement(remoteTextEditSessionH, {
        zoom: snapshot.zoom,
        onZoomChange: popcornElectronWorkbookPanelValue434
      })}
        </> : null}
    </div>;
}
var popcornElectronWorkbookPanelValue60 = {
  "--app-shell-tab-background": "color-mix(in srgb, var(--color-token-foreground) 5%, var(--color-token-main-surface-primary))"
};
function popcornElectronWorkbookPanelHelper185({
  containerWidth,
  gapWidth,
  moreButtonWidths,
  tabWidths
}) {
  if (containerWidth <= 0 || tabWidths.reduce((accumulator, current) => accumulator + current, 0) + Math.max(0, tabWidths.length - 1) * gapWidth <= containerWidth) return tabWidths.length;
  let popcornElectronWorkbookPanelValue1030 = [0];
  for (let popcornElectronWorkbookPanelValue1389 of tabWidths) popcornElectronWorkbookPanelValue1030.push((popcornElectronWorkbookPanelValue1030[popcornElectronWorkbookPanelValue1030.length - 1] ?? 0) + popcornElectronWorkbookPanelValue1389);
  for (let popcornElectronWorkbookPanelValue1300 = tabWidths.length - 1; popcornElectronWorkbookPanelValue1300 >= 0; --popcornElectronWorkbookPanelValue1300) {
    let popcornElectronWorkbookPanelValue1346 = moreButtonWidths[tabWidths.length - popcornElectronWorkbookPanelValue1300] ?? moreButtonWidths[moreButtonWidths.length - 1] ?? 0;
    if ((popcornElectronWorkbookPanelValue1030[popcornElectronWorkbookPanelValue1300] ?? 0) + popcornElectronWorkbookPanelValue1300 * gapWidth + popcornElectronWorkbookPanelValue1346 <= containerWidth) return popcornElectronWorkbookPanelValue1300;
  }
  return 0;
}
function popcornElectronWorkbookPanelHelper186({
  sheetName,
  tabClassName,
  tabStyle,
  isActive,
  showsAppShellTabBackground,
  onClick,
  onDoubleClick,
  buttonRef,
  dragAttributes,
  dragListeners,
  isDragging = false
}) {
  return <button ref={buttonRef ?? undefined} type="button" onClick={onClick} onDoubleClick={onDoubleClick} className={tabClassName} style={tabStyle} data-testid={`popcorn-sheet-tab-${sheetName}`} data-dragging={isDragging ? "true" : "false"} {...dragAttributes} {...dragListeners}>
      {showsAppShellTabBackground ? <span aria-hidden="true" className={clsx("pointer-events-none absolute inset-0 z-0 rounded-md", "group-hover/tab:bg-[var(--app-shell-tab-background)]", (isActive || isDragging) && "bg-[var(--app-shell-tab-background)]")} /> : null}
      <span className="relative z-10 block min-w-0 truncate">{sheetName}</span>
    </button>;
}
function popcornElectronWorkbookPanelHelper187({
  sheetName,
  index,
  isActive,
  tabClassName,
  tabStyle,
  showsAppShellTabBackground,
  controller,
  snapshot,
  startRenameSheet
}) {
  let {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging
    } = popcornElectronSurfaceStyleNt({
      id: sheetName
    }),
    popcornElectronWorkbookPanelValue545 = {
      transform: popcornElectronWorkbookPanelImport20.Translate.toString(transform),
      transition: isDragging ? undefined : transition,
      opacity: isDragging ? 0 : 1,
      zIndex: isDragging ? 0 : undefined,
      position: "relative",
      display: "inline-flex"
    };
  return React.createElement(popcornElectronSurfaceStyleC, {
    actions: [{
      kind: "item",
      id: "view",
      icon: remoteTextEditSessionK,
      label: "View page",
      onSelect: () => controller.setActiveSheetName(sheetName),
      testId: `popcorn-sheet-view-${index}`
    }, {
      kind: "item",
      id: "rename",
      icon: remoteTextEditSessionI,
      label: "Rename",
      onSelect: () => {
        startRenameSheet(index);
      },
      testId: `popcorn-sheet-rename-${index}`
    }, {
      kind: "separator",
      id: "sheet-actions-separator"
    }, {
      kind: "item",
      id: "delete",
      icon: _remoteTextEditSessionB,
      label: "Delete",
      color: "danger",
      disabled: snapshot.sheetNames.length <= 1,
      onSelect: () => {
        controller.deleteSheet(index);
      },
      testId: `popcorn-sheet-delete-${index}`
    }],
    trigger: <div ref={setNodeRef} style={popcornElectronWorkbookPanelValue545}>
        {React.createElement(popcornElectronWorkbookPanelHelper186, {
        sheetName,
        tabClassName,
        tabStyle,
        isActive,
        showsAppShellTabBackground,
        onClick: () => controller.setActiveSheetName(sheetName),
        onDoubleClick: () => {
          startRenameSheet(index);
        },
        dragAttributes: attributes,
        dragListeners: listeners,
        isDragging
      })}
      </div>
  });
}
function popcornElectronWorkbookPanelHelper188({
  controller,
  snapshot,
  accentFill,
  accentStroke,
  variant = "inline",
  density = "regular",
  addButtonPosition = "end",
  isEditing = true
}) {
  let [popcornElectronWorkbookPanelValue218, popcornElectronWorkbookPanelValue219] = React.useState(null),
    [popcornElectronWorkbookPanelValue220, popcornElectronWorkbookPanelValue221] = React.useState(""),
    [popcornElectronWorkbookPanelValue222, popcornElectronWorkbookPanelValue223] = React.useState(null),
    [popcornElectronWorkbookPanelValue224, popcornElectronWorkbookPanelValue225] = React.useState(snapshot.sheetNames.length),
    popcornElectronWorkbookPanelValue226 = React.useRef(null),
    popcornElectronWorkbookPanelValue227 = React.useRef([]),
    popcornElectronWorkbookPanelValue228 = React.useRef([]),
    popcornElectronWorkbookPanelValue229 = React.useRef(null),
    popcornElectronWorkbookPanelValue230 = React.useMemo(() => snapshot.sheetNames.indexOf(snapshot.activeSheetName), [snapshot.activeSheetName, snapshot.sheetNames]),
    popcornElectronWorkbookPanelValue231 = popcornElectronWorkbookPanelImport17(popcornElectronWorkbookPanelImport16(popcornElectronWorkbookPanelImport18, {
      activationConstraint: {
        distance: 4
      }
    })),
    popcornElectronWorkbookPanelValue232 = variant === "row",
    popcornElectronWorkbookPanelValue233 = density === "compact" || popcornElectronWorkbookPanelValue232,
    popcornElectronWorkbookPanelValue234 = accentFill != null && accentStroke != null ? {
      backgroundColor: accentFill,
      color: accentStroke
    } : undefined,
    popcornElectronWorkbookPanelValue235 = popcornElectronWorkbookPanelValue234 == null,
    popcornElectronWorkbookPanelValue236 = "group/tab relative flex h-7 max-w-39 shrink-0 items-center overflow-hidden rounded-lg bg-token-main-surface-primary px-2 py-1 text-sm font-normal touch-none";
  if (!popcornElectronWorkbookPanelValue235) {
    let popcornElectronWorkbookPanelValue1137 = "inline-flex h-[30px] py-1.5";
    popcornElectronWorkbookPanelValue232 ? popcornElectronWorkbookPanelValue1137 = "flex h-6" : popcornElectronWorkbookPanelValue233 && (popcornElectronWorkbookPanelValue1137 = "inline-flex h-6");
    popcornElectronWorkbookPanelValue236 = clsx("max-w-[200px] shrink-0 items-center gap-1 overflow-hidden rounded-lg border border-transparent px-3 text-sm font-normal transition-colors touch-none", popcornElectronWorkbookPanelValue1137);
  }
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue218 != null && (popcornElectronWorkbookPanelValue229.current?.focus(), popcornElectronWorkbookPanelValue229.current?.select());
  }, [popcornElectronWorkbookPanelValue218]);
  React.useLayoutEffect(() => {
    let popcornElectronWorkbookPanelValue775 = () => {
      let popcornElectronWorkbookPanelValue939 = popcornElectronWorkbookPanelValue226.current?.getBoundingClientRect().width ?? 0,
        popcornElectronWorkbookPanelValue940 = snapshot.sheetNames.map((item, index) => popcornElectronWorkbookPanelValue227.current[index]?.getBoundingClientRect().width ?? 0),
        popcornElectronWorkbookPanelValue941 = popcornElectronWorkbookPanelHelper185({
          containerWidth: popcornElectronWorkbookPanelValue939,
          gapWidth: 4,
          moreButtonWidths: Array.from({
            length: snapshot.sheetNames.length + 1
          }, (popcornElectronWorkbookPanelParam539, popcornElectronWorkbookPanelParam540) => popcornElectronWorkbookPanelValue228.current[popcornElectronWorkbookPanelParam540]?.getBoundingClientRect().width ?? 0),
          tabWidths: popcornElectronWorkbookPanelValue940
        });
      popcornElectronWorkbookPanelValue225(popcornElectronWorkbookPanelParam604 => popcornElectronWorkbookPanelParam604 === popcornElectronWorkbookPanelValue941 ? popcornElectronWorkbookPanelParam604 : popcornElectronWorkbookPanelValue941);
    };
    if (popcornElectronWorkbookPanelValue775(), typeof ResizeObserver > "u" || popcornElectronWorkbookPanelValue226.current == null) return;
    let popcornElectronWorkbookPanelValue776 = new ResizeObserver(popcornElectronWorkbookPanelValue775);
    return popcornElectronWorkbookPanelValue776.observe(popcornElectronWorkbookPanelValue226.current), () => {
      popcornElectronWorkbookPanelValue776.disconnect();
    };
  }, [4, snapshot.sheetNames]);
  function popcornElectronWorkbookPanelHelper231() {
    popcornElectronWorkbookPanelValue219(null);
    popcornElectronWorkbookPanelValue221("");
  }
  function popcornElectronWorkbookPanelHelper232() {
    if (popcornElectronWorkbookPanelValue218 == null) return;
    let popcornElectronWorkbookPanelValue1245 = snapshot.sheetNames[popcornElectronWorkbookPanelValue218];
    if (!popcornElectronWorkbookPanelValue1245) {
      popcornElectronWorkbookPanelHelper231();
      return;
    }
    let popcornElectronWorkbookPanelValue1246 = popcornElectronWorkbookPanelValue220.trim(),
      popcornElectronWorkbookPanelValue1247 = popcornElectronWorkbookPanelValue1246.length > 0 ? popcornElectronWorkbookPanelValue1246 : popcornElectronWorkbookPanelValue1245;
    controller.renameSheet(popcornElectronWorkbookPanelValue218, popcornElectronWorkbookPanelValue1247);
    popcornElectronWorkbookPanelHelper231();
  }
  function popcornElectronWorkbookPanelHelper233(popcornElectronWorkbookPanelParam493) {
    let popcornElectronWorkbookPanelValue1376 = snapshot.sheetNames[popcornElectronWorkbookPanelParam493];
    popcornElectronWorkbookPanelValue1376 && (popcornElectronWorkbookPanelValue219(popcornElectronWorkbookPanelParam493), popcornElectronWorkbookPanelValue221(popcornElectronWorkbookPanelValue1376));
  }
  function popcornElectronWorkbookPanelHelper234(popcornElectronWorkbookPanelParam186) {
    popcornElectronWorkbookPanelValue223(null);
    let popcornElectronWorkbookPanelValue1116 = typeof popcornElectronWorkbookPanelParam186.active.id == "string" ? popcornElectronWorkbookPanelParam186.active.id : null,
      popcornElectronWorkbookPanelValue1117 = typeof popcornElectronWorkbookPanelParam186.over?.id == "string" ? popcornElectronWorkbookPanelParam186.over.id : null;
    if (!popcornElectronWorkbookPanelValue1116 || !popcornElectronWorkbookPanelValue1117 || popcornElectronWorkbookPanelValue1116 === popcornElectronWorkbookPanelValue1117) return;
    let popcornElectronWorkbookPanelValue1118 = snapshot.sheetNames.indexOf(popcornElectronWorkbookPanelValue1116),
      popcornElectronWorkbookPanelValue1119 = snapshot.sheetNames.indexOf(popcornElectronWorkbookPanelValue1117);
    popcornElectronWorkbookPanelValue1118 < 0 || popcornElectronWorkbookPanelValue1119 < 0 || popcornElectronWorkbookPanelValue1118 === popcornElectronWorkbookPanelValue1119 || controller.moveSheet(popcornElectronWorkbookPanelValue1118, popcornElectronWorkbookPanelValue1119);
  }
  function popcornElectronWorkbookPanelHelper235(popcornElectronWorkbookPanelParam462) {
    popcornElectronWorkbookPanelValue223(typeof popcornElectronWorkbookPanelParam462.active.id == "string" ? popcornElectronWorkbookPanelParam462.active.id : null);
  }
  function popcornElectronWorkbookPanelHelper236() {
    popcornElectronWorkbookPanelValue223(null);
  }
  let popcornElectronWorkbookPanelValue237 = isEditing ? <button type="button" onClick={() => controller.addSheet()} className={popcornElectronWorkbookPanelValue235 ? "text-token-text-secondary hover:bg-[var(--app-shell-tab-background)] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md" : clsx("text-token-text-tertiary hover:text-token-text-primary hover:bg-token-bg-tertiary inline-flex shrink-0 items-center justify-center rounded-md", popcornElectronWorkbookPanelValue233 ? "size-6" : "h-[30px] w-[30px]")} style={popcornElectronWorkbookPanelValue235 ? popcornElectronWorkbookPanelValue60 : undefined} aria-label="Add sheet" data-testid="popcorn-add-sheet">
        {React.createElement(remoteTextEditSessionL, {
        className: "size-4"
      })}
      </button> : null,
    popcornElectronWorkbookPanelValue238 = Math.min(popcornElectronWorkbookPanelValue224, snapshot.sheetNames.length),
    popcornElectronWorkbookPanelValue239 = snapshot.sheetNames.slice(0, popcornElectronWorkbookPanelValue238),
    popcornElectronWorkbookPanelValue240 = snapshot.sheetNames.slice(popcornElectronWorkbookPanelValue238),
    popcornElectronWorkbookPanelValue241 = clsx(popcornElectronWorkbookPanelValue236, popcornElectronWorkbookPanelValue235 ? "text-token-text-secondary hover:bg-[var(--app-shell-tab-background)]" : "text-token-text-tertiary hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-primary");
  function popcornElectronWorkbookPanelHelper237(popcornElectronWorkbookPanelParam152) {
    return popcornElectronWorkbookPanelValue235 ? clsx(popcornElectronWorkbookPanelValue236, popcornElectronWorkbookPanelParam152 ? "text-token-text-primary" : "text-token-text-secondary") : clsx(popcornElectronWorkbookPanelValue236, popcornElectronWorkbookPanelParam152 ? "bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover" : "text-token-text-tertiary hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-primary");
  }
  function popcornElectronWorkbookPanelHelper238(popcornElectronWorkbookPanelParam550) {
    return popcornElectronWorkbookPanelValue235 ? popcornElectronWorkbookPanelValue60 : popcornElectronWorkbookPanelParam550 ? popcornElectronWorkbookPanelValue234 : undefined;
  }
  function popcornElectronWorkbookPanelHelper239(popcornElectronWorkbookPanelParam54, popcornElectronWorkbookPanelParam55, popcornElectronWorkbookPanelParam56) {
    return <div key={`${popcornElectronWorkbookPanelParam54}-${popcornElectronWorkbookPanelParam55}`} className={clsx(popcornElectronWorkbookPanelParam56, "cursor-text")} style={popcornElectronWorkbookPanelHelper238(popcornElectronWorkbookPanelParam55 === popcornElectronWorkbookPanelValue230)}>
        {popcornElectronWorkbookPanelValue235 ? <span aria-hidden="true" className={clsx("pointer-events-none absolute inset-0 z-0 rounded-md", "group-hover/tab:bg-[var(--app-shell-tab-background)]", popcornElectronWorkbookPanelParam55 === popcornElectronWorkbookPanelValue230 && "bg-[var(--app-shell-tab-background)]")} /> : null}
        <input ref={popcornElectronWorkbookPanelValue229} value={popcornElectronWorkbookPanelValue220} aria-label="Rename sheet" onChange={event => popcornElectronWorkbookPanelValue221(event.target.value)} onBlur={popcornElectronWorkbookPanelHelper232} onKeyDown={event => {
        if (event.key === "Enter") {
          event.preventDefault();
          popcornElectronWorkbookPanelHelper232();
          return;
        }
        event.key === "Escape" && (event.preventDefault(), popcornElectronWorkbookPanelHelper231());
      }} className="relative z-10 block w-full min-w-0 appearance-none border-0 bg-transparent p-0 text-sm leading-5 font-normal text-inherit shadow-none ring-0 outline-none focus:border-0 focus:shadow-none focus:ring-0 focus:outline-none" />
      </div>;
  }
  function popcornElectronWorkbookPanelHelper240(popcornElectronWorkbookPanelParam143, popcornElectronWorkbookPanelParam144) {
    let popcornElectronWorkbookPanelValue1017 = popcornElectronWorkbookPanelParam144 === popcornElectronWorkbookPanelValue230,
      popcornElectronWorkbookPanelValue1018 = popcornElectronWorkbookPanelHelper237(popcornElectronWorkbookPanelValue1017);
    return popcornElectronWorkbookPanelValue218 === popcornElectronWorkbookPanelParam144 ? popcornElectronWorkbookPanelHelper239(popcornElectronWorkbookPanelParam143, popcornElectronWorkbookPanelParam144, popcornElectronWorkbookPanelValue1018) : React.createElement(popcornElectronWorkbookPanelHelper187, {
      sheetName: popcornElectronWorkbookPanelParam143,
      index: popcornElectronWorkbookPanelParam144,
      isActive: popcornElectronWorkbookPanelValue1017,
      tabClassName: popcornElectronWorkbookPanelValue1018,
      tabStyle: popcornElectronWorkbookPanelHelper238(popcornElectronWorkbookPanelValue1017),
      showsAppShellTabBackground: popcornElectronWorkbookPanelValue235,
      controller,
      snapshot,
      startRenameSheet: popcornElectronWorkbookPanelHelper233
    });
  }
  function popcornElectronWorkbookPanelHelper241(popcornElectronWorkbookPanelParam194, popcornElectronWorkbookPanelParam195) {
    let popcornElectronWorkbookPanelValue1138 = popcornElectronWorkbookPanelParam195 === popcornElectronWorkbookPanelValue230;
    return React.createElement(popcornElectronWorkbookPanelHelper186, {
      sheetName: popcornElectronWorkbookPanelParam194,
      onClick: () => controller.setActiveSheetName(popcornElectronWorkbookPanelParam194),
      isActive: popcornElectronWorkbookPanelValue1138,
      tabClassName: popcornElectronWorkbookPanelHelper237(popcornElectronWorkbookPanelValue1138),
      tabStyle: popcornElectronWorkbookPanelHelper238(popcornElectronWorkbookPanelValue1138),
      showsAppShellTabBackground: popcornElectronWorkbookPanelValue235
    });
  }
  let popcornElectronWorkbookPanelValue242 = popcornElectronWorkbookPanelValue240.length > 0 ? React.createElement(Popover, null, [React.createElement(PopoverTrigger, {
      asChild: true
    }, <button type="button" className={popcornElectronWorkbookPanelValue241} style={popcornElectronWorkbookPanelValue235 ? popcornElectronWorkbookPanelValue60 : undefined} data-testid="popcorn-sheet-tabs-more" aria-label={`${popcornElectronWorkbookPanelValue240.length} more sheets`}>
                    <span className="block min-w-0 truncate">
                      {popcornElectronWorkbookPanelValue240.length}
                      {" more"}
                    </span>
                  </button>), React.createElement(PopoverPortal, null, React.createElement(PopoverContent, {
      align: "start",
      sideOffset: 6,
      className: "border-token-border-light bg-token-bg-primary z-50 min-w-[180px] rounded-xl border p-1 shadow-lg",
      "data-testid": "popcorn-sheet-tabs-more-menu"
    }, popcornElectronWorkbookPanelValue240.map((item, index) => {
      let popcornElectronWorkbookPanelValue602 = popcornElectronWorkbookPanelValue238 + index,
        popcornElectronWorkbookPanelValue603 = item === snapshot.activeSheetName;
      return React.createElement(PopoverClose, {
        asChild: true
      }, <button type="button" className={clsx("flex w-full min-w-0 cursor-default items-center rounded-lg px-3 py-2 text-left text-sm outline-none", popcornElectronWorkbookPanelValue603 ? "bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover focus-visible:bg-token-interactive-bg-accent-muted-hover" : "text-token-text-primary hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background")} aria-current={popcornElectronWorkbookPanelValue603 ? "true" : undefined} data-testid={`popcorn-sheet-tabs-more-item-${item}`} onClick={() => controller.setActiveSheetName(item)}>
                                <span className="block min-w-0 truncate">
                                  {item}
                                </span>
                              </button>);
    })))]) : null,
    popcornElectronWorkbookPanelValue243 = <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 -z-10 flex min-w-max items-center gap-1 opacity-0">
        {snapshot.sheetNames.map((item, index) => <button key={`measure-tab-${item}-${index}`} ref={popcornElectronWorkbookPanelParam541 => {
        popcornElectronWorkbookPanelValue227.current[index] = popcornElectronWorkbookPanelParam541;
      }} type="button" className={popcornElectronWorkbookPanelHelper237(index === popcornElectronWorkbookPanelValue230)} tabIndex={-1}>
            <span className="block min-w-0 truncate">{item}</span>
          </button>)}
        {Array.from({
        length: snapshot.sheetNames.length + 1
      }, (popcornElectronWorkbookPanelParam145, popcornElectronWorkbookPanelParam146) => <button key={`measure-more-${popcornElectronWorkbookPanelParam146}`} ref={popcornElectronWorkbookPanelParam542 => {
        popcornElectronWorkbookPanelValue228.current[popcornElectronWorkbookPanelParam146] = popcornElectronWorkbookPanelParam542;
      }} type="button" className={popcornElectronWorkbookPanelValue241} tabIndex={-1}>
              <span className="block min-w-0 truncate">
                {popcornElectronWorkbookPanelParam146}
                {" more"}
              </span>
            </button>)}
      </div>;
  return <div data-testid="popcorn-pages-bar" className={clsx("flex items-center gap-2", variant === "row" ? "bg-token-bg-primary border-token-border-light h-9 border-t px-3 sm:px-4" : "min-w-0 flex-1")}>
      {addButtonPosition === "start" ? popcornElectronWorkbookPanelValue237 : null}
      <div ref={popcornElectronWorkbookPanelValue226} data-testid="popcorn-pages-scroll" className="relative min-w-0 flex-1 overflow-hidden">
        {popcornElectronWorkbookPanelValue243}
        {isEditing ? React.createElement(popcornElectronWorkbookPanelImport21, {
        sensors: popcornElectronWorkbookPanelValue231,
        collisionDetection: popcornElectronWorkbookPanelImport15,
        modifiers: [restrictToVerticalAxis, restrictToFirstScrollableAncestor],
        onDragStart: popcornElectronWorkbookPanelHelper235,
        onDragCancel: popcornElectronWorkbookPanelHelper236,
        onDragEnd: popcornElectronWorkbookPanelHelper234
      }, [React.createElement(popcornElectronSurfaceStyleDollar, {
        items: popcornElectronWorkbookPanelValue239,
        strategy: popcornElectronSurfaceStyleEt
      }, <div className="flex min-w-0 items-center gap-1 overflow-hidden">
                        {popcornElectronWorkbookPanelValue239.map((item, index) => popcornElectronWorkbookPanelHelper240(item, index))}
                        {popcornElectronWorkbookPanelValue242}
                      </div>), React.createElement(popcornElectronWorkbookPanelImport19, {
        modifiers: [restrictToVerticalAxis, restrictToFirstScrollableAncestor]
      }, popcornElectronWorkbookPanelValue222 ? React.createElement(popcornElectronWorkbookPanelHelper186, {
        sheetName: popcornElectronWorkbookPanelValue222,
        tabClassName: clsx(popcornElectronWorkbookPanelValue236, "shadow-lg"),
        tabStyle: popcornElectronWorkbookPanelHelper238(true),
        isActive: true,
        showsAppShellTabBackground: popcornElectronWorkbookPanelValue235,
        isDragging: true
      }) : null)]) : <div className="flex min-w-0 items-center gap-1 overflow-hidden">
            {popcornElectronWorkbookPanelValue239.map((item, index) => popcornElectronWorkbookPanelHelper241(item, index))}
            {popcornElectronWorkbookPanelValue242}
          </div>}
      </div>
      {addButtonPosition === "end" ? popcornElectronWorkbookPanelValue237 : null}
    </div>;
}
function popcornElectronWorkbookPanelHelper189({
  controller,
  snapshot,
  title,
  actions,
  reviewToolControl,
  headerRightContent,
  renderHeaderZoomControl,
  fileMenuContent,
  sheetTabAccentFill,
  sheetTabAccentStroke,
  theme,
  isEditing,
  onClose
}) {
  let popcornElectronWorkbookPanelValue449 = theme === "codex",
    popcornElectronWorkbookPanelValue450 = renderHeaderZoomControl?.({
      onZoomPercentChange: popcornElectronWorkbookPanelParam565 => {
        controller.setZoom(popcornElectronWorkbookPanelParam565 / 100);
      },
      triggerTestId: "popcorn-zoom-select",
      zoomPercent: Math.round(snapshot.zoom * 100)
    }) ?? React.createElement(remoteTextEditSessionH, {
      zoom: snapshot.zoom,
      onZoomChange: popcornElectronWorkbookPanelParam612 => controller.setZoom(popcornElectronWorkbookPanelParam612)
    });
  return React.createElement(remoteTextEditSessionG, {
    testId: "popcorn-toolbar",
    title,
    closeLabel: "Close spreadsheet",
    onClose,
    compactTitle: popcornElectronWorkbookPanelValue449,
    fileMenuContent,
    icon: React.createElement(remoteTextEditSessionUnderscore, {
      kind: "workbook"
    }, React.createElement(remoteTextEditSessionM, {
      className: "size-4"
    })),
    centerContent: React.createElement(popcornElectronWorkbookPanelHelper188, {
      controller,
      snapshot,
      accentFill: sheetTabAccentFill,
      accentStroke: sheetTabAccentStroke,
      variant: "inline",
      addButtonPosition: "end",
      isEditing
    }),
    actions: popcornElectronWorkbookPanelValue449 || actions.length > 0 || reviewToolControl || headerRightContent ? <div className={clsx("flex items-center", popcornElectronWorkbookPanelValue449 ? "gap-1" : "gap-2")}>
          {reviewToolControl}
          {popcornElectronWorkbookPanelValue449 ? popcornElectronWorkbookPanelValue450 : null}
          {actions.length > 0 ? <div className="flex items-center gap-1">
              {actions.map(item => <button key={item.id} className={clsx("text-token-text-primary hover:bg-token-bg-tertiary inline-flex size-8 items-center justify-center rounded-md", "text-token-text-primary", item.isActive ? "bg-token-bg-tertiary" : null)} data-testid={`popcorn-toolbar-action-${item.id}`} type="button" title={item.title} aria-label={item.ariaLabel ?? item.title ?? item.label} onClick={() => item.onSelect(controller)}>
                  {item.icon ? React.createElement(item.icon, {
            className: "size-4"
          }) : item.label}
                </button>)}
            </div> : null}
          {headerRightContent}
        </div> : null
  });
}
var popcornElectronWorkbookPanelValue62 = [2, 133, 255],
  $a = `rgba(${popcornElectronWorkbookPanelValue62[0]}, ${popcornElectronWorkbookPanelValue62[1]}, ${popcornElectronWorkbookPanelValue62[2]}, 0.15)`,
  popcornElectronWorkbookPanelValue63 = `rgba(${popcornElectronWorkbookPanelValue62[0]}, ${popcornElectronWorkbookPanelValue62[1]}, ${popcornElectronWorkbookPanelValue62[2]}, 1)`;
function to(popcornElectronWorkbookPanelParam184) {
  if (!popcornElectronWorkbookPanelParam184) return null;
  let popcornElectronWorkbookPanelValue1111 = popcornElectronWorkbookPanelParam184.replace(/\$|\s+/g, "");
  if (!popcornElectronWorkbookPanelValue1111) return null;
  let popcornElectronWorkbookPanelValue1112 = /[A-Za-z]/.test(popcornElectronWorkbookPanelValue1111),
    popcornElectronWorkbookPanelValue1113 = /\d/.test(popcornElectronWorkbookPanelValue1111);
  return popcornElectronWorkbookPanelValue1112 && popcornElectronWorkbookPanelValue1113 ? {
    kind: "cell",
    row: addressUtilsV(popcornElectronWorkbookPanelValue1111),
    col: addressUtilsD(popcornElectronWorkbookPanelValue1111)
  } : popcornElectronWorkbookPanelValue1112 ? {
    kind: "column",
    col: addressUtilsD(popcornElectronWorkbookPanelValue1111)
  } : popcornElectronWorkbookPanelValue1113 ? {
    kind: "row",
    row: addressUtilsV(popcornElectronWorkbookPanelValue1111)
  } : null;
}
function no(popcornElectronWorkbookPanelParam81) {
  if (!popcornElectronWorkbookPanelParam81) return null;
  let popcornElectronWorkbookPanelValue760 = (popcornElectronWorkbookPanelParam81.includes("!") ? popcornElectronWorkbookPanelParam81.slice(popcornElectronWorkbookPanelParam81.indexOf("!") + 1) : popcornElectronWorkbookPanelParam81).split(":"),
    popcornElectronWorkbookPanelValue761 = to(popcornElectronWorkbookPanelValue760[0] ?? ""),
    popcornElectronWorkbookPanelValue762 = to(popcornElectronWorkbookPanelValue760[1] ?? popcornElectronWorkbookPanelValue760[0] ?? "");
  return !popcornElectronWorkbookPanelValue761 || !popcornElectronWorkbookPanelValue762 ? null : popcornElectronWorkbookPanelValue761.kind === "cell" && popcornElectronWorkbookPanelValue762.kind === "cell" ? {
    r1: Math.min(popcornElectronWorkbookPanelValue761.row, popcornElectronWorkbookPanelValue762.row),
    r2: Math.max(popcornElectronWorkbookPanelValue761.row, popcornElectronWorkbookPanelValue762.row),
    c1: Math.min(popcornElectronWorkbookPanelValue761.col, popcornElectronWorkbookPanelValue762.col),
    c2: Math.max(popcornElectronWorkbookPanelValue761.col, popcornElectronWorkbookPanelValue762.col)
  } : popcornElectronWorkbookPanelValue761.kind === "column" && popcornElectronWorkbookPanelValue762.kind === "column" ? {
    r1: 0,
    r2: 1 / 0,
    c1: Math.min(popcornElectronWorkbookPanelValue761.col, popcornElectronWorkbookPanelValue762.col),
    c2: Math.max(popcornElectronWorkbookPanelValue761.col, popcornElectronWorkbookPanelValue762.col)
  } : popcornElectronWorkbookPanelValue761.kind === "row" && popcornElectronWorkbookPanelValue762.kind === "row" ? {
    r1: Math.min(popcornElectronWorkbookPanelValue761.row, popcornElectronWorkbookPanelValue762.row),
    r2: Math.max(popcornElectronWorkbookPanelValue761.row, popcornElectronWorkbookPanelValue762.row),
    c1: 0,
    c2: 1 / 0
  } : null;
}
var popcornElectronWorkbookPanelValue64 = Ordinal().domain(Array.from({
  length: 12
}, (popcornElectronWorkbookPanelParam606, popcornElectronWorkbookPanelParam607) => popcornElectronWorkbookPanelParam607.toString())).range(popcornElectronWorkbookPanelValue1);
function popcornElectronWorkbookPanelHelper190({
  sheetName,
  resetSelectionAddr,
  resetSheet
}) {
  let [popcornElectronWorkbookPanelValue560, popcornElectronWorkbookPanelValue561] = React.useState(false),
    [popcornElectronWorkbookPanelValue562, popcornElectronWorkbookPanelValue563] = React.useState([]),
    [popcornElectronWorkbookPanelValue564, popcornElectronWorkbookPanelValue565] = React.useState({}),
    popcornElectronWorkbookPanelValue566 = React.useMemo(() => popcornElectronWorkbookPanelValue562.map(item => {
      let popcornElectronWorkbookPanelValue1311 = no(item.ref),
        popcornElectronWorkbookPanelValue1312 = popcornElectronWorkbookPanelValue564[item.id];
      return !popcornElectronWorkbookPanelValue1311 || !popcornElectronWorkbookPanelValue1312 ? null : {
        ...popcornElectronWorkbookPanelValue1311,
        color: popcornElectronWorkbookPanelValue1312
      };
    }).filter(item => item != null), [popcornElectronWorkbookPanelValue562, popcornElectronWorkbookPanelValue564]),
    popcornElectronWorkbookPanelValue567 = React.useCallback(() => {
      popcornElectronWorkbookPanelValue561(false);
      popcornElectronWorkbookPanelValue563([]);
      popcornElectronWorkbookPanelValue565({});
    }, []),
    popcornElectronWorkbookPanelValue568 = React.useCallback(popcornElectronWorkbookPanelParam98 => {
      let popcornElectronWorkbookPanelValue831 = popcornElectronWorkbookPanelParam98.trim();
      if (!popcornElectronWorkbookPanelValue831.startsWith("=")) {
        popcornElectronWorkbookPanelValue563([]);
        popcornElectronWorkbookPanelValue565({});
        return;
      }
      try {
        let popcornElectronWorkbookPanelValue987 = popcornElectronWorkbookPanelHelper151(popcornElectronWorkbookPanelValue831),
          popcornElectronWorkbookPanelValue988 = sheetName ? sheetName.trim().toUpperCase() : null,
          popcornElectronWorkbookPanelValue989 = [],
          popcornElectronWorkbookPanelValue990 = new Set(),
          popcornElectronWorkbookPanelValue991 = {};
        for (let popcornElectronWorkbookPanelValue1148 of popcornElectronWorkbookPanelValue987.refs) {
          if (!popcornElectronWorkbookPanelValue1148 || popcornElectronWorkbookPanelValue990.has(popcornElectronWorkbookPanelValue1148.id)) continue;
          let popcornElectronWorkbookPanelValue1163 = popcornElectronWorkbookPanelValue1148.sheet?.toUpperCase();
          if (popcornElectronWorkbookPanelValue1163 && popcornElectronWorkbookPanelValue988 && popcornElectronWorkbookPanelValue1163 !== popcornElectronWorkbookPanelValue988) continue;
          let popcornElectronWorkbookPanelValue1164 = popcornElectronWorkbookPanelValue64(popcornElectronWorkbookPanelValue989.length.toString());
          popcornElectronWorkbookPanelValue991[popcornElectronWorkbookPanelValue1148.id] = popcornElectronWorkbookPanelValue1164;
          popcornElectronWorkbookPanelValue989.push({
            id: popcornElectronWorkbookPanelValue1148.id,
            ref: popcornElectronWorkbookPanelValue1148.a1
          });
          popcornElectronWorkbookPanelValue990.add(popcornElectronWorkbookPanelValue1148.id);
        }
        popcornElectronWorkbookPanelValue563(popcornElectronWorkbookPanelValue989);
        popcornElectronWorkbookPanelValue565(popcornElectronWorkbookPanelValue991);
      } catch {
        popcornElectronWorkbookPanelValue563([]);
        popcornElectronWorkbookPanelValue565({});
      }
    }, [sheetName]),
    popcornElectronWorkbookPanelValue569 = React.useCallback(popcornElectronWorkbookPanelParam582 => {
      popcornElectronWorkbookPanelValue561(true);
      popcornElectronWorkbookPanelValue568(popcornElectronWorkbookPanelParam582);
    }, [popcornElectronWorkbookPanelValue568]);
  return React.useEffect(() => {
    popcornElectronWorkbookPanelValue561(false);
    popcornElectronWorkbookPanelValue563([]);
    popcornElectronWorkbookPanelValue565({});
  }, [resetSelectionAddr, resetSheet]), {
    inputFocused: popcornElectronWorkbookPanelValue560,
    beginInputSession: popcornElectronWorkbookPanelValue569,
    endInputSession: popcornElectronWorkbookPanelValue567,
    updateFormulaReferences: popcornElectronWorkbookPanelValue568,
    formulaHighlightRects: popcornElectronWorkbookPanelValue566,
    refColors: popcornElectronWorkbookPanelValue564
  };
}
function popcornElectronWorkbookPanelHelper191() {
  return typeof window > "u" ? null : window;
}
function popcornElectronWorkbookPanelHelper192(popcornElectronWorkbookPanelParam62) {
  if (!remoteTextEditSessionU()) return () => {};
  let popcornElectronWorkbookPanelValue684 = popcornElectronWorkbookPanelHelper191();
  if (!popcornElectronWorkbookPanelValue684) return () => {};
  let popcornElectronWorkbookPanelValue685 = {
    controller: popcornElectronWorkbookPanelParam62,
    controllerId: "id" in popcornElectronWorkbookPanelParam62 && typeof popcornElectronWorkbookPanelParam62.id == "number" ? popcornElectronWorkbookPanelParam62.id : undefined,
    getSnapshot: () => popcornElectronWorkbookPanelHelper1(popcornElectronWorkbookPanelParam62.getState()),
    exportWorkbookProto: () => popcornElectronWorkbookPanelHelper65(popcornElectronWorkbookPanelParam62),
    getCellState: undefined,
    captureState: undefined,
    requestWorkbookProto: () => popcornElectronWorkbookPanelHelper65(popcornElectronWorkbookPanelParam62),
    requestCellState: (popcornElectronWorkbookPanelParam610, popcornElectronWorkbookPanelParam611) => popcornElectronWorkbookPanelHelper66(popcornElectronWorkbookPanelParam62, popcornElectronWorkbookPanelParam610, popcornElectronWorkbookPanelParam611),
    captureStateAsync: async () => {
      let popcornElectronWorkbookPanelValue1133 = popcornElectronWorkbookPanelHelper1(popcornElectronWorkbookPanelParam62.getState());
      return {
        snapshot: popcornElectronWorkbookPanelValue1133,
        selectedCell: popcornElectronWorkbookPanelValue1133.activeSheetName && popcornElectronWorkbookPanelValue1133.selectedAddress ? await popcornElectronWorkbookPanelHelper66(popcornElectronWorkbookPanelParam62, popcornElectronWorkbookPanelValue1133.activeSheetName, popcornElectronWorkbookPanelValue1133.selectedAddress) : null,
        logCount: (popcornElectronWorkbookPanelValue684.__POPCORN_LOGS__ ?? []).length
      };
    },
    getLogs: () => [...(popcornElectronWorkbookPanelValue684.__POPCORN_LOGS__ ?? [])],
    clearLogs: () => {
      popcornElectronWorkbookPanelValue684.__POPCORN_LOGS__ = [];
    }
  };
  return popcornElectronWorkbookPanelValue684.__POPCORN_DEVTOOLS__ = popcornElectronWorkbookPanelValue685, () => {
    popcornElectronWorkbookPanelValue684.__POPCORN_DEVTOOLS__ === popcornElectronWorkbookPanelValue685 && delete popcornElectronWorkbookPanelValue684.__POPCORN_DEVTOOLS__;
  };
}
function popcornElectronWorkbookPanelHelper193() {
  let popcornElectronWorkbookPanelValue1032 = popcornElectronWorkbookPanelImport12.create(),
    popcornElectronWorkbookPanelValue1033 = popcornElectronWorkbookPanelValue1032.worksheets.add("Sheet1");
  popcornElectronWorkbookPanelValue1033.getRange("A1:B4").values = [["Month", "Revenue"], ["Jan", 120], ["Feb", 140], ["Mar", 165]];
  let popcornElectronWorkbookPanelValue1034 = popcornElectronWorkbookPanelValue1033.charts.add("ColumnClustered", popcornElectronWorkbookPanelValue1033.getRange("A1:B4"), "Auto");
  return popcornElectronWorkbookPanelValue1034.title.text = "Quarterly revenue", popcornElectronWorkbookPanelValue1034.setPosition(popcornElectronWorkbookPanelValue1033.getRange("D2")), popcornElectronWorkbookPanelValue1034.width = 360, popcornElectronWorkbookPanelValue1034.height = 240, popcornElectronWorkbookPanelValue1032.recalculate(), popcornElectronWorkbookPanelValue1032;
}
function popcornElectronWorkbookPanelHelper194() {
  return new Worker(new URL("" + new URL("runtime.worker-qQoYBwXk.js", import.meta.url).href, "" + import.meta.url), {
    type: "module",
    name: "popcorn-workbook-worker"
  });
}
var popcornElectronWorkbookPanelValue65 = {
  meta: {
    workbookVersion: 0,
    showFormulas: false,
    canUndo: false,
    canRedo: false
  },
  navigation: {
    activeSheetName: "Sheet1",
    sheetNames: ["Sheet1"]
  },
  selection: {
    activeCell: {
      row: 0,
      col: 0
    },
    selectedAddress: "A1",
    selectionRect: {
      r1: 0,
      c1: 0,
      r2: 0,
      c2: 0
    },
    selectionRanges: [{
      r1: 0,
      c1: 0,
      r2: 0,
      c2: 0
    }],
    activeRangeIndex: 0,
    selectAllStage: 0,
    isDraggingSelection: false,
    fillPreviewRect: null
  },
  editor: {
    formulaInput: "",
    editorMode: "grid",
    textLayoutBlocks: [],
    textEditState: null
  },
  viewport: {
    zoom: 1,
    columnWidths: [],
    rowHeights: [],
    rowIndexRemap: null,
    freezePanes: {
      rowCount: 0,
      columnCount: 0
    },
    resizeGuide: null,
    camera: {
      x: 0,
      y: 0,
      k: 1
    }
  },
  overlays: {
    awarenessSelections: [],
    awarenessDrawingSelections: [],
    mergedCells: [],
    sheetTables: [],
    tableFilterOptions: {},
    tableFilters: {},
    tableSorts: {},
    chartSelectionHighlights: [],
    activeDataValidation: null,
    dataValidationTargets: [],
    commentThreads: []
  },
  floating: {
    selectedFloatingElement: null,
    chartHoverTargets: []
  },
  find: {
    query: "",
    matches: [],
    total: 0
  },
  clipboard: {
    copyPayload: null,
    cutPayload: null
  }
};
function popcornElectronWorkbookPanelHelper195(popcornElectronWorkbookPanelParam575 = popcornElectronWorkbookPanelValue65) {
  return new _remoteTextEditSessionN(popcornElectronWorkbookPanelParam575);
}
function popcornElectronWorkbookPanelHelper196() {
  if (!(typeof window < "u" && typeof Worker < "u" && typeof HTMLCanvasElement < "u" && typeof OffscreenCanvas < "u")) throw Error("Popcorn workbook viewport requires Worker and OffscreenCanvas support.");
}
function popcornElectronWorkbookPanelHelper197() {
  return popcornElectronWorkbookPanelHelper194();
}
var popcornElectronWorkbookPanelValue66 = 1;
function popcornElectronWorkbookPanelHelper198(popcornElectronWorkbookPanelParam394, popcornElectronWorkbookPanelParam395) {
  return popcornElectronWorkbookPanelParam394?.width === popcornElectronWorkbookPanelParam395?.width && popcornElectronWorkbookPanelParam394?.height === popcornElectronWorkbookPanelParam395?.height && popcornElectronWorkbookPanelParam394?.dpr === popcornElectronWorkbookPanelParam395?.dpr;
}
function popcornElectronWorkbookPanelHelper199(popcornElectronWorkbookPanelParam566) {
  return popcornElectronWorkbookPanelParam566 ? {
    ...popcornElectronWorkbookPanelParam566
  } : null;
}
function _o(popcornElectronWorkbookPanelParam567) {
  return popcornElectronWorkbookPanelParam567 ? {
    ...popcornElectronWorkbookPanelParam567
  } : null;
}
function popcornElectronWorkbookPanelHelper200(popcornElectronWorkbookPanelParam215, popcornElectronWorkbookPanelParam216, popcornElectronWorkbookPanelParam217) {
  (popcornElectronWorkbookPanelParam217?.resizeIntrinsicBitmap ?? true) && (popcornElectronWorkbookPanelParam215.width = Math.max(1, Math.round(popcornElectronWorkbookPanelParam216.width * popcornElectronWorkbookPanelParam216.dpr)), popcornElectronWorkbookPanelParam215.height = Math.max(1, Math.round(popcornElectronWorkbookPanelParam216.height * popcornElectronWorkbookPanelParam216.dpr)));
  popcornElectronWorkbookPanelParam215.style.width = `${popcornElectronWorkbookPanelParam216.width}px`;
  popcornElectronWorkbookPanelParam215.style.height = `${popcornElectronWorkbookPanelParam216.height}px`;
}
function popcornElectronWorkbookPanelHelper201(popcornElectronWorkbookPanelParam367, popcornElectronWorkbookPanelParam368) {
  return popcornElectronWorkbookPanelParam367.x === popcornElectronWorkbookPanelParam368.x && popcornElectronWorkbookPanelParam367.y === popcornElectronWorkbookPanelParam368.y && popcornElectronWorkbookPanelParam367.width === popcornElectronWorkbookPanelParam368.width && popcornElectronWorkbookPanelParam367.height === popcornElectronWorkbookPanelParam368.height;
}
function popcornElectronWorkbookPanelHelper202(popcornElectronWorkbookPanelParam181, popcornElectronWorkbookPanelParam182) {
  if (popcornElectronWorkbookPanelParam181.length !== popcornElectronWorkbookPanelParam182.length) return false;
  for (let popcornElectronWorkbookPanelValue1186 = 0; popcornElectronWorkbookPanelValue1186 < popcornElectronWorkbookPanelParam181.length; popcornElectronWorkbookPanelValue1186 += 1) {
    let popcornElectronWorkbookPanelValue1226 = popcornElectronWorkbookPanelParam181[popcornElectronWorkbookPanelValue1186],
      popcornElectronWorkbookPanelValue1227 = popcornElectronWorkbookPanelParam182[popcornElectronWorkbookPanelValue1186];
    if (!popcornElectronWorkbookPanelValue1226 || !popcornElectronWorkbookPanelValue1227 || popcornElectronWorkbookPanelValue1226.id !== popcornElectronWorkbookPanelValue1227.id || popcornElectronWorkbookPanelValue1226.addr !== popcornElectronWorkbookPanelValue1227.addr || popcornElectronWorkbookPanelValue1226.sheetName !== popcornElectronWorkbookPanelValue1227.sheetName || !popcornElectronWorkbookPanelHelper201(popcornElectronWorkbookPanelValue1226.cssBounds, popcornElectronWorkbookPanelValue1227.cssBounds)) return false;
  }
  return true;
}
function popcornElectronWorkbookPanelHelper203(popcornElectronWorkbookPanelParam84, popcornElectronWorkbookPanelParam85) {
  if (popcornElectronWorkbookPanelParam84.length !== popcornElectronWorkbookPanelParam85.length) return false;
  for (let popcornElectronWorkbookPanelValue805 = 0; popcornElectronWorkbookPanelValue805 < popcornElectronWorkbookPanelParam84.length; popcornElectronWorkbookPanelValue805 += 1) {
    let popcornElectronWorkbookPanelValue826 = popcornElectronWorkbookPanelParam84[popcornElectronWorkbookPanelValue805],
      popcornElectronWorkbookPanelValue827 = popcornElectronWorkbookPanelParam85[popcornElectronWorkbookPanelValue805];
    if (!popcornElectronWorkbookPanelValue826 || !popcornElectronWorkbookPanelValue827 || popcornElectronWorkbookPanelValue826.kind !== popcornElectronWorkbookPanelValue827.kind || popcornElectronWorkbookPanelValue826.x !== popcornElectronWorkbookPanelValue827.x || popcornElectronWorkbookPanelValue826.y !== popcornElectronWorkbookPanelValue827.y || popcornElectronWorkbookPanelValue826.width !== popcornElectronWorkbookPanelValue827.width || popcornElectronWorkbookPanelValue826.height !== popcornElectronWorkbookPanelValue827.height || popcornElectronWorkbookPanelValue826.cx !== popcornElectronWorkbookPanelValue827.cx || popcornElectronWorkbookPanelValue826.cy !== popcornElectronWorkbookPanelValue827.cy || popcornElectronWorkbookPanelValue826.rOuter !== popcornElectronWorkbookPanelValue827.rOuter || popcornElectronWorkbookPanelValue826.rInner !== popcornElectronWorkbookPanelValue827.rInner || popcornElectronWorkbookPanelValue826.startAngle !== popcornElectronWorkbookPanelValue827.startAngle || popcornElectronWorkbookPanelValue826.endAngle !== popcornElectronWorkbookPanelValue827.endAngle || popcornElectronWorkbookPanelValue826.seriesName !== popcornElectronWorkbookPanelValue827.seriesName || popcornElectronWorkbookPanelValue826.category !== popcornElectronWorkbookPanelValue827.category || popcornElectronWorkbookPanelValue826.value !== popcornElectronWorkbookPanelValue827.value || popcornElectronWorkbookPanelValue826.color !== popcornElectronWorkbookPanelValue827.color || popcornElectronWorkbookPanelValue826.anchorX !== popcornElectronWorkbookPanelValue827.anchorX || popcornElectronWorkbookPanelValue826.anchorY !== popcornElectronWorkbookPanelValue827.anchorY || popcornElectronWorkbookPanelValue826.elementId !== popcornElectronWorkbookPanelValue827.elementId || popcornElectronWorkbookPanelValue826.seriesIndex !== popcornElectronWorkbookPanelValue827.seriesIndex) return false;
  }
  return true;
}
var popcornElectronWorkbookPanelValue67 = class {
  id = popcornElectronWorkbookPanelValue66++;
  #e = _remoteTextEditSessionL("workbook-main-controller");
  #t = popcornElectronWorkbookPanelHelper195();
  #n = popcornElectronWorkbookPanelHelper109();
  #r = new Set();
  #i;
  #a;
  #o = null;
  #s = null;
  #c = null;
  #l = null;
  #u = null;
  #d = null;
  #f = 1;
  #p = null;
  #m = null;
  #h = null;
  #g = null;
  #_ = null;
  #v = 0;
  #y = 0;
  #b;
  #x = false;
  constructor(popcornElectronWorkbookPanelParam40 = {}) {
    let popcornElectronWorkbookPanelValue604 = popcornElectronWorkbookPanelParam40.workbook ?? popcornElectronWorkbookPanelHelper193(),
      popcornElectronWorkbookPanelValue605 = (popcornElectronWorkbookPanelParam40.workerFactory ?? popcornElectronWorkbookPanelHelper197)();
    this.#a = {
      x: 0,
      y: 0,
      k: popcornElectronWorkbookPanelParam40.initialZoom ?? 1
    };
    this.#i = new _remoteTextEditSessionD(popcornElectronWorkbookPanelValue605, popcornElectronWorkbookPanelParam614 => this.#D(popcornElectronWorkbookPanelParam614), popcornElectronWorkbookPanelParam569 => {
      throw Error(popcornElectronWorkbookPanelParam569);
    });
    this.#e.debug("bootstrap", {
      controllerId: this.id,
      activeSheetName: popcornElectronWorkbookPanelValue604.awareness.activeSheetName,
      sheetNames: Array.from(popcornElectronWorkbookPanelValue604.worksheets, popcornElectronWorkbookPanelParam615 => popcornElectronWorkbookPanelParam615.name),
      initialSelectedAddress: popcornElectronWorkbookPanelParam40.initialSelectedAddress,
      initialZoom: popcornElectronWorkbookPanelParam40.initialZoom
    });
    this.#i.bootstrap({
      workbookProto: popcornElectronWorkbookPanelValue604.toProto(),
      initialCrdtState: popcornElectronWorkbookPanelParam40.initialCrdtState,
      initialSelectedAddress: popcornElectronWorkbookPanelParam40.initialSelectedAddress,
      initialZoom: popcornElectronWorkbookPanelParam40.initialZoom
    });
    this.#b = popcornElectronWorkbookPanelHelper72().then(() => {
      let popcornElectronWorkbookPanelValue870 = _remoteTextEditSessionF();
      this.#e.debug("font-render-deps-ready", {
        fontCount: popcornElectronWorkbookPanelValue870.length,
        fonts: popcornElectronWorkbookPanelValue870.map(item => ({
          family: item.family,
          style: item.style,
          weight: item.weight,
          format: item.format,
          src: item.src
        })),
        fontDebug: _remoteTextEditSessionP()
      });
      popcornElectronWorkbookPanelValue870.length !== 0 && (this.#i.dispatch({
        kind: "install-font-faces",
        fonts: popcornElectronWorkbookPanelValue870
      }), this.#e.debug("font-install-dispatched", {
        fontCount: popcornElectronWorkbookPanelValue870.length
      }));
    }).catch(() => {});
  }
  subscribe(popcornElectronWorkbookPanelParam557) {
    return this.#t.subscribe(popcornElectronWorkbookPanelParam557);
  }
  getState() {
    return this.#t.getState();
  }
  getSnapshot() {
    return this.getState();
  }
  getSelectionSummarySource() {
    return this.#n;
  }
  dispatch(popcornElectronWorkbookPanelParam489) {
    this.#i.dispatch({
      kind: "command",
      command: popcornElectronWorkbookPanelParam489
    });
  }
  attachViewport(popcornElectronWorkbookPanelParam172) {
    return popcornElectronWorkbookPanelHelper196(), this.#b.then(() => {
      if (this.#x) return;
      let popcornElectronWorkbookPanelValue1165 = popcornElectronWorkbookPanelParam172.host.getBoundingClientRect(),
        popcornElectronWorkbookPanelValue1166 = window.devicePixelRatio || 1;
      this.attachViewportCanvas(popcornElectronWorkbookPanelParam172.canvas, {
        width: popcornElectronWorkbookPanelValue1165.width,
        height: popcornElectronWorkbookPanelValue1165.height,
        dpr: popcornElectronWorkbookPanelValue1166
      });
    }), () => {};
  }
  requestExport(popcornElectronWorkbookPanelParam218) {
    return this.#i.request({
      kind: "export",
      format: popcornElectronWorkbookPanelParam218?.format ?? "proto"
    }).then(value => {
      if (value.kind !== "export") throw Error(`Unexpected export response: ${value.kind}`);
      return value.result;
    });
  }
  requestCrdtSnapshot() {
    return this.#i.request({
      kind: "crdt-snapshot"
    }).then(value => {
      if (value.kind !== "crdt-snapshot") throw Error(`Unexpected CRDT snapshot response: ${value.kind}`);
      return new Uint8Array(value.result);
    });
  }
  loadInitialCrdtState(popcornElectronWorkbookPanelParam213) {
    return this.#i.request({
      kind: "load-initial-crdt-state",
      update: popcornElectronWorkbookPanelParam213
    }).then(value => {
      if (value.kind !== "load-initial-crdt-state") throw Error(`Unexpected initial CRDT load response: ${value.kind}`);
    });
  }
  applyCrdtUpdate(popcornElectronWorkbookPanelParam224) {
    return this.#i.request({
      kind: "apply-crdt-update",
      update: popcornElectronWorkbookPanelParam224
    }).then(value => {
      if (value.kind !== "apply-crdt-update") throw Error(`Unexpected CRDT apply response: ${value.kind}`);
    });
  }
  subscribeCrdtUpdates(popcornElectronWorkbookPanelParam363) {
    return this.#r.add(popcornElectronWorkbookPanelParam363), () => {
      this.#r.delete(popcornElectronWorkbookPanelParam363);
    };
  }
  setPresenceSelections(popcornElectronWorkbookPanelParam273, popcornElectronWorkbookPanelParam274, popcornElectronWorkbookPanelParam275 = {}) {
    this.#i.dispatch({
      kind: "set-presence-selections",
      presenceId: popcornElectronWorkbookPanelParam273,
      selections: popcornElectronWorkbookPanelParam274,
      presenceKind: popcornElectronWorkbookPanelParam275.kind
    });
  }
  clearPresenceSelections(popcornElectronWorkbookPanelParam297, popcornElectronWorkbookPanelParam298 = {}) {
    this.#i.dispatch({
      kind: "clear-presence-selections",
      presenceId: popcornElectronWorkbookPanelParam297,
      sheetName: popcornElectronWorkbookPanelParam298.sheetName
    });
  }
  replaceFromProto(popcornElectronWorkbookPanelParam221) {
    return this.#i.request({
      kind: "replace-from-proto",
      workbookProto: popcornElectronWorkbookPanelParam221
    }).then(value => {
      if (value.kind !== "replace-from-proto") throw Error(`Unexpected replace response: ${value.kind}`);
    });
  }
  dispose() {
    this.#x || (this.#x = true, this.#p?.bitmap.close(), this.#p = null, this.#r.clear(), this.#i.dispose());
  }
  setZoom(popcornElectronWorkbookPanelParam503) {
    this.dispatch({
      type: "set-zoom",
      zoom: popcornElectronWorkbookPanelParam503
    });
  }
  setSelectedAddress(popcornElectronWorkbookPanelParam424) {
    this.dispatch({
      type: "set-selected-address",
      address: popcornElectronWorkbookPanelParam424
    });
  }
  handleKeyboardEvent(popcornElectronWorkbookPanelParam383) {
    return this.dispatch({
      type: "handle-keyboard-event",
      event: popcornElectronWorkbookPanelParam383
    }), true;
  }
  updateFormulaInput(popcornElectronWorkbookPanelParam435) {
    this.dispatch({
      type: "update-formula-input",
      value: popcornElectronWorkbookPanelParam435
    });
  }
  commitFormulaInput(popcornElectronWorkbookPanelParam436) {
    this.dispatch({
      type: "commit-formula-input",
      value: popcornElectronWorkbookPanelParam436
    });
  }
  openCellEditor(popcornElectronWorkbookPanelParam391) {
    return this.dispatch({
      type: "open-cell-editor",
      initialValue: popcornElectronWorkbookPanelParam391
    }), true;
  }
  commitCellEdit(popcornElectronWorkbookPanelParam414) {
    return this.dispatch({
      type: "commit-cell-edit",
      value: popcornElectronWorkbookPanelParam414
    }), true;
  }
  cancelCellEdit() {
    this.dispatch({
      type: "cancel-cell-edit"
    });
  }
  setActiveSheetName(popcornElectronWorkbookPanelParam415) {
    this.dispatch({
      type: "set-active-sheet-name",
      sheetName: popcornElectronWorkbookPanelParam415
    });
  }
  setSelectionRect(popcornElectronWorkbookPanelParam420) {
    this.dispatch({
      type: "set-selection-rect",
      selectionRect: popcornElectronWorkbookPanelParam420
    });
  }
  setIsDraggingSelection(popcornElectronWorkbookPanelParam346) {
    this.dispatch({
      type: "set-is-dragging-selection",
      isDraggingSelection: popcornElectronWorkbookPanelParam346
    });
  }
  setResizeGuide(popcornElectronWorkbookPanelParam444) {
    this.dispatch({
      type: "set-resize-guide",
      resizeGuide: popcornElectronWorkbookPanelParam444
    });
  }
  setColumnWidth(popcornElectronWorkbookPanelParam416, popcornElectronWorkbookPanelParam417) {
    this.dispatch({
      type: "set-column-width",
      index: popcornElectronWorkbookPanelParam416,
      width: popcornElectronWorkbookPanelParam417
    });
  }
  setRowHeight(popcornElectronWorkbookPanelParam425, popcornElectronWorkbookPanelParam426) {
    this.dispatch({
      type: "set-row-height",
      index: popcornElectronWorkbookPanelParam425,
      height: popcornElectronWorkbookPanelParam426
    });
  }
  autofitColumn(popcornElectronWorkbookPanelParam463) {
    this.dispatch({
      type: "autofit-column",
      index: popcornElectronWorkbookPanelParam463
    });
  }
  autofitRow(popcornElectronWorkbookPanelParam486) {
    this.dispatch({
      type: "autofit-row",
      index: popcornElectronWorkbookPanelParam486
    });
  }
  moveSheet(popcornElectronWorkbookPanelParam437, popcornElectronWorkbookPanelParam438) {
    this.dispatch({
      type: "move-sheet",
      fromIndex: popcornElectronWorkbookPanelParam437,
      toIndex: popcornElectronWorkbookPanelParam438
    });
  }
  renameSheet(popcornElectronWorkbookPanelParam430, popcornElectronWorkbookPanelParam431) {
    this.dispatch({
      type: "rename-sheet",
      index: popcornElectronWorkbookPanelParam430,
      nextName: popcornElectronWorkbookPanelParam431
    });
  }
  addSheet(popcornElectronWorkbookPanelParam487) {
    this.dispatch({
      type: "add-sheet",
      sheetName: popcornElectronWorkbookPanelParam487
    });
  }
  deleteSheet(popcornElectronWorkbookPanelParam479) {
    this.dispatch({
      type: "delete-sheet",
      index: popcornElectronWorkbookPanelParam479
    });
  }
  replyToCommentThread(popcornElectronWorkbookPanelParam330, popcornElectronWorkbookPanelParam331) {
    return this.dispatch({
      type: "reply-comment-thread",
      threadId: popcornElectronWorkbookPanelParam330,
      body: popcornElectronWorkbookPanelParam331
    }), true;
  }
  resolveCommentThread(popcornElectronWorkbookPanelParam374) {
    return this.dispatch({
      type: "resolve-comment-thread",
      threadId: popcornElectronWorkbookPanelParam374
    }), true;
  }
  reopenCommentThread(popcornElectronWorkbookPanelParam375) {
    return this.dispatch({
      type: "reopen-comment-thread",
      threadId: popcornElectronWorkbookPanelParam375
    }), true;
  }
  deleteCommentThread(popcornElectronWorkbookPanelParam376) {
    return this.dispatch({
      type: "delete-comment-thread",
      threadId: popcornElectronWorkbookPanelParam376
    }), true;
  }
  toggleCommentReaction(popcornElectronWorkbookPanelParam253, popcornElectronWorkbookPanelParam254, popcornElectronWorkbookPanelParam255) {
    return this.dispatch({
      type: "toggle-comment-reaction",
      threadId: popcornElectronWorkbookPanelParam253,
      commentId: popcornElectronWorkbookPanelParam254,
      reactionType: popcornElectronWorkbookPanelParam255
    }), true;
  }
  editThreadComment(popcornElectronWorkbookPanelParam260, popcornElectronWorkbookPanelParam261, popcornElectronWorkbookPanelParam262) {
    return this.dispatch({
      type: "edit-thread-comment",
      threadId: popcornElectronWorkbookPanelParam260,
      commentId: popcornElectronWorkbookPanelParam261,
      body: popcornElectronWorkbookPanelParam262
    }), true;
  }
  deleteThreadComment(popcornElectronWorkbookPanelParam284, popcornElectronWorkbookPanelParam285) {
    return this.dispatch({
      type: "delete-thread-comment",
      threadId: popcornElectronWorkbookPanelParam284,
      commentId: popcornElectronWorkbookPanelParam285
    }), true;
  }
  requestFindMatches(popcornElectronWorkbookPanelParam229) {
    return this.#i.request({
      kind: "find-matches",
      query: popcornElectronWorkbookPanelParam229
    }).then(value => {
      if (value.kind !== "find-matches") throw Error(`Unexpected find response: ${value.kind}`);
      return value.result;
    });
  }
  requestCellState(popcornElectronWorkbookPanelParam209, popcornElectronWorkbookPanelParam210) {
    return this.#i.request({
      kind: "inspect-cell",
      sheetName: popcornElectronWorkbookPanelParam209,
      address: popcornElectronWorkbookPanelParam210
    }).then(value => {
      if (value.kind !== "inspect-cell") throw Error(`Unexpected inspect response: ${value.kind}`);
      return value.result;
    });
  }
  requestNavigationTarget(popcornElectronWorkbookPanelParam164, popcornElectronWorkbookPanelParam165, popcornElectronWorkbookPanelParam166) {
    return this.#i.request({
      kind: "navigation-target",
      sheetName: popcornElectronWorkbookPanelParam164,
      objectId: popcornElectronWorkbookPanelParam165,
      ...(popcornElectronWorkbookPanelParam166 == null ? {} : {
        objectKind: popcornElectronWorkbookPanelParam166
      })
    }).then(value => {
      if (value.kind !== "navigation-target") throw Error(`Unexpected navigation response: ${value.kind}`);
      return value.result;
    });
  }
  requestClipboardPayload(popcornElectronWorkbookPanelParam208) {
    return this.#i.request({
      kind: "clipboard-payload",
      copyKind: popcornElectronWorkbookPanelParam208
    }).then(value => {
      if (value.kind !== "clipboard-payload") throw Error(`Unexpected clipboard response: ${value.kind}`);
      return value.result;
    });
  }
  requestSelectedFloatingRasterPayload() {
    return this.#i.request({
      kind: "selected-floating-raster-payload"
    }).then(value => {
      if (value.kind !== "selected-floating-raster-payload") throw Error(`Unexpected floating raster response: ${value.kind}`);
      return value.result;
    });
  }
  pasteClipboardData(popcornElectronWorkbookPanelParam379) {
    return this.dispatch({
      type: "paste-clipboard-data",
      clipboard: popcornElectronWorkbookPanelParam379
    }), true;
  }
  pasteRasterClipboardData(popcornElectronWorkbookPanelParam332) {
    return this.dispatch({
      type: "paste-raster-clipboard-data",
      clipboard: popcornElectronWorkbookPanelParam332
    }), true;
  }
  recalculate() {
    this.dispatch({
      type: "recalculate"
    });
  }
  runWorksheetEdit(popcornElectronWorkbookPanelParam344, popcornElectronWorkbookPanelParam345) {
    return this.dispatch({
      type: "run-worksheet-edit",
      kind: popcornElectronWorkbookPanelParam344,
      options: popcornElectronWorkbookPanelParam345
    }), true;
  }
  focusCell(popcornElectronWorkbookPanelParam460, popcornElectronWorkbookPanelParam461) {
    this.dispatch({
      type: "focus-cell",
      row: popcornElectronWorkbookPanelParam460,
      col: popcornElectronWorkbookPanelParam461
    });
  }
  collapseSelectionToActiveCell() {
    this.dispatch({
      type: "collapse-selection-to-active-cell"
    });
  }
  setSelectedFloatingElement(popcornElectronWorkbookPanelParam280, popcornElectronWorkbookPanelParam281) {
    this.dispatch({
      type: "set-selected-floating-element",
      selectedFloatingElement: popcornElectronWorkbookPanelParam280,
      sheetName: popcornElectronWorkbookPanelParam281?.sheetName
    });
  }
  textActivateFloatingShapeText(popcornElectronWorkbookPanelParam327) {
    return this.#i.dispatch({
      kind: "text-activate-block-end",
      blockId: popcornElectronWorkbookPanelParam327
    }), true;
  }
  textClearFloatingShapeText() {
    this.#i.dispatch({
      kind: "text-clear"
    });
  }
  textPointerDown(popcornElectronWorkbookPanelParam282, popcornElectronWorkbookPanelParam283) {
    return this.#i.dispatch({
      kind: "text-pointer-down",
      point: popcornElectronWorkbookPanelParam282,
      shiftKey: popcornElectronWorkbookPanelParam283?.shiftKey
    }), true;
  }
  textPointerMove(popcornElectronWorkbookPanelParam397) {
    return this.#i.dispatch({
      kind: "text-pointer-move",
      point: popcornElectronWorkbookPanelParam397
    }), true;
  }
  textPointerUp() {
    this.#i.dispatch({
      kind: "text-pointer-up"
    });
  }
  textSelectWordAtPoint(popcornElectronWorkbookPanelParam343) {
    return this.#i.dispatch({
      kind: "text-select-word-at-point",
      point: popcornElectronWorkbookPanelParam343
    }), true;
  }
  textSelectParagraphAtPoint(popcornElectronWorkbookPanelParam326) {
    return this.#i.dispatch({
      kind: "text-select-paragraph-at-point",
      point: popcornElectronWorkbookPanelParam326
    }), true;
  }
  textHandleKeyDown(popcornElectronWorkbookPanelParam403) {
    return this.#i.dispatch({
      kind: "text-keydown",
      event: popcornElectronWorkbookPanelParam403
    }), true;
  }
  textHandleBeforeInput(popcornElectronWorkbookPanelParam382) {
    return this.#i.dispatch({
      kind: "text-before-input",
      event: popcornElectronWorkbookPanelParam382
    }), true;
  }
  textHandleInput(popcornElectronWorkbookPanelParam421) {
    return this.#i.dispatch({
      kind: "text-input",
      event: popcornElectronWorkbookPanelParam421
    }), true;
  }
  textHandleCompositionEnd(popcornElectronWorkbookPanelParam399) {
    this.#i.dispatch({
      kind: "text-composition-end",
      event: popcornElectronWorkbookPanelParam399
    });
  }
  attachViewportCanvas(popcornElectronWorkbookPanelParam94, popcornElectronWorkbookPanelParam95) {
    popcornElectronWorkbookPanelHelper196();
    let popcornElectronWorkbookPanelValue814 = {
        ...popcornElectronWorkbookPanelParam95
      },
      popcornElectronWorkbookPanelValue815 = this.#o !== popcornElectronWorkbookPanelParam94;
    if (this.#o = popcornElectronWorkbookPanelParam94, this.#s = popcornElectronWorkbookPanelParam94.getContext("2d"), !this.#s) throw Error("Workbook viewport canvas 2d context is unavailable.");
    this.#l ??= {
      ...popcornElectronWorkbookPanelValue814
    };
    this.#u ??= {
      ...popcornElectronWorkbookPanelValue814
    };
    this.#C(this.#l);
    this.#b.then(() => {
      if (!this.#x) {
        if (popcornElectronWorkbookPanelValue815) {
          if (this.#o !== popcornElectronWorkbookPanelParam94) return;
          this.#i.dispatch({
            kind: "attach-canvas",
            width: popcornElectronWorkbookPanelValue814.width,
            height: popcornElectronWorkbookPanelValue814.height,
            dpr: popcornElectronWorkbookPanelValue814.dpr
          });
          return;
        }
        this.resizeViewportCanvas(popcornElectronWorkbookPanelValue814);
      }
    });
  }
  attachViewportOverlayCanvas(popcornElectronWorkbookPanelParam328, popcornElectronWorkbookPanelParam329) {
    let popcornElectronWorkbookPanelValue1304 = {
      ...popcornElectronWorkbookPanelParam329
    };
    this.#c = popcornElectronWorkbookPanelParam328;
    this.#l ??= {
      ...popcornElectronWorkbookPanelValue1304
    };
    this.#u ??= {
      ...popcornElectronWorkbookPanelValue1304
    };
    popcornElectronWorkbookPanelHelper200(popcornElectronWorkbookPanelParam328, popcornElectronWorkbookPanelValue1304);
  }
  setEditingEnabled(popcornElectronWorkbookPanelParam418) {
    this.#i.dispatch({
      kind: "set-editing-enabled",
      isEditing: popcornElectronWorkbookPanelParam418
    });
  }
  resizeViewportCanvas(popcornElectronWorkbookPanelParam419) {
    let popcornElectronWorkbookPanelValue1359 = {
      ...popcornElectronWorkbookPanelParam419
    };
    this.#u = popcornElectronWorkbookPanelValue1359;
    this.#C(popcornElectronWorkbookPanelValue1359);
    this.#S();
  }
  #S() {
    let popcornElectronWorkbookPanelValue1045 = this.#u;
    if (!popcornElectronWorkbookPanelValue1045 || this.#d || popcornElectronWorkbookPanelHelper198(this.#p?.metrics ?? null, popcornElectronWorkbookPanelValue1045) && this.#d == null) return;
    let popcornElectronWorkbookPanelValue1046 = this.#f++;
    this.#d = {
      resizeId: popcornElectronWorkbookPanelValue1046,
      metrics: {
        ...popcornElectronWorkbookPanelValue1045
      },
      requestedAtMs: performance.now()
    };
    this.#i.dispatch({
      kind: "resize-viewport",
      width: popcornElectronWorkbookPanelValue1045.width,
      height: popcornElectronWorkbookPanelValue1045.height,
      dpr: popcornElectronWorkbookPanelValue1045.dpr,
      resizeId: popcornElectronWorkbookPanelValue1046
    });
  }
  setViewportCamera(popcornElectronWorkbookPanelParam380) {
    this.#a = {
      ...popcornElectronWorkbookPanelParam380
    };
    this.#i.dispatch({
      kind: "set-camera",
      camera: popcornElectronWorkbookPanelParam380
    });
  }
  revealFloatingElementBounds(popcornElectronWorkbookPanelParam142) {
    let popcornElectronWorkbookPanelValue1011 = this.#l ?? this.#u;
    if (!popcornElectronWorkbookPanelValue1011) return;
    let popcornElectronWorkbookPanelValue1012 = this.#a,
      popcornElectronWorkbookPanelValue1013 = popcornElectronWorkbookPanelParam142.x * popcornElectronWorkbookPanelValue1012.k + popcornElectronWorkbookPanelValue1012.x,
      popcornElectronWorkbookPanelValue1014 = popcornElectronWorkbookPanelParam142.y * popcornElectronWorkbookPanelValue1012.k + popcornElectronWorkbookPanelValue1012.y,
      popcornElectronWorkbookPanelValue1015 = (popcornElectronWorkbookPanelParam142.x + popcornElectronWorkbookPanelParam142.width) * popcornElectronWorkbookPanelValue1012.k + popcornElectronWorkbookPanelValue1012.x,
      popcornElectronWorkbookPanelValue1016 = (popcornElectronWorkbookPanelParam142.y + popcornElectronWorkbookPanelParam142.height) * popcornElectronWorkbookPanelValue1012.k + popcornElectronWorkbookPanelValue1012.y;
    popcornElectronWorkbookPanelValue1013 >= 24 && popcornElectronWorkbookPanelValue1014 >= 24 && popcornElectronWorkbookPanelValue1015 <= popcornElectronWorkbookPanelValue1011.width - 24 && popcornElectronWorkbookPanelValue1016 <= popcornElectronWorkbookPanelValue1011.height - 24 || this.setViewportCamera({
      ...popcornElectronWorkbookPanelValue1012,
      x: -Math.max(0, popcornElectronWorkbookPanelParam142.x * popcornElectronWorkbookPanelValue1012.k - 24),
      y: -Math.max(0, popcornElectronWorkbookPanelParam142.y * popcornElectronWorkbookPanelValue1012.k - 24)
    });
  }
  handleViewportPointerDown(popcornElectronWorkbookPanelParam404) {
    this.#i.dispatch({
      kind: "viewport-pointer-down",
      ...popcornElectronWorkbookPanelParam404
    });
  }
  handleViewportPointerMove(popcornElectronWorkbookPanelParam405) {
    this.#i.dispatch({
      kind: "viewport-pointer-move",
      ...popcornElectronWorkbookPanelParam405
    });
  }
  handleViewportPointerUp(popcornElectronWorkbookPanelParam422) {
    this.#i.dispatch({
      kind: "viewport-pointer-up",
      ...popcornElectronWorkbookPanelParam422
    });
  }
  cancelViewportPointer() {
    this.#i.dispatch({
      kind: "viewport-pointer-cancel"
    });
  }
  getViewportCamera() {
    return {
      ...this.#a
    };
  }
  setViewportAccentStroke(popcornElectronWorkbookPanelParam599) {}
  requestViewportRedraw() {
    this.#i.dispatch({
      kind: "redraw"
    });
  }
  getResizeDebugState() {
    return {
      committedMetrics: popcornElectronWorkbookPanelHelper199(this.#l),
      requestedMetrics: popcornElectronWorkbookPanelHelper199(this.#u),
      inFlightResize: this.#d ? {
        resizeId: this.#d.resizeId,
        metrics: {
          ...this.#d.metrics
        },
        requestedAtMs: this.#d.requestedAtMs
      } : null,
      lastPresentedScaleMismatch: _o(this.#m),
      maxPresentedScaleMismatch: _o(this.#h),
      lastResizeFrameLatencyMs: this.#g,
      maxResizeFrameLatencyMs: this.#_,
      droppedStaleResizeFrameCount: this.#v,
      presentedResizeCount: this.#y
    };
  }
  resetResizeDebugState() {
    this.#m = null;
    this.#h = null;
    this.#g = null;
    this.#_ = null;
    this.#v = 0;
    this.#y = 0;
  }
  #C(popcornElectronWorkbookPanelParam364) {
    this.#l = {
      ...popcornElectronWorkbookPanelParam364
    };
    this.#o && (popcornElectronWorkbookPanelHelper200(this.#o, popcornElectronWorkbookPanelParam364), this.#T());
    this.#c && popcornElectronWorkbookPanelHelper200(this.#c, popcornElectronWorkbookPanelParam364);
  }
  destroy() {
    this.dispose();
  }
  #w(popcornElectronWorkbookPanelParam125) {
    let popcornElectronWorkbookPanelValue952 = this.#l;
    if (this.#y += 1, !popcornElectronWorkbookPanelValue952) {
      this.#m = null;
      return;
    }
    let popcornElectronWorkbookPanelValue953 = {
      scaleX: popcornElectronWorkbookPanelValue952.width / Math.max(popcornElectronWorkbookPanelParam125.width, 1),
      scaleY: popcornElectronWorkbookPanelValue952.height / Math.max(popcornElectronWorkbookPanelParam125.height, 1),
      deltaWidth: popcornElectronWorkbookPanelValue952.width - popcornElectronWorkbookPanelParam125.width,
      deltaHeight: popcornElectronWorkbookPanelValue952.height - popcornElectronWorkbookPanelParam125.height
    };
    this.#m = popcornElectronWorkbookPanelValue953;
    Math.max(Math.abs(popcornElectronWorkbookPanelValue953.scaleX - 1), Math.abs(popcornElectronWorkbookPanelValue953.scaleY - 1)) > (this.#h ? Math.max(Math.abs(this.#h.scaleX - 1), Math.abs(this.#h.scaleY - 1)) : -1) && (this.#h = popcornElectronWorkbookPanelValue953);
  }
  #T() {
    let popcornElectronWorkbookPanelValue1091 = this.#o,
      popcornElectronWorkbookPanelValue1092 = this.#s,
      popcornElectronWorkbookPanelValue1093 = this.#p,
      popcornElectronWorkbookPanelValue1094 = this.#l;
    !popcornElectronWorkbookPanelValue1091 || !popcornElectronWorkbookPanelValue1092 || !popcornElectronWorkbookPanelValue1093 || !popcornElectronWorkbookPanelValue1094 || (popcornElectronWorkbookPanelValue1092.setTransform(1, 0, 0, 1, 0, 0), popcornElectronWorkbookPanelValue1092.clearRect(0, 0, popcornElectronWorkbookPanelValue1091.width, popcornElectronWorkbookPanelValue1091.height), popcornElectronWorkbookPanelValue1092.setTransform(popcornElectronWorkbookPanelValue1094.dpr, 0, 0, popcornElectronWorkbookPanelValue1094.dpr, 0, 0), popcornElectronWorkbookPanelValue1092.drawImage(popcornElectronWorkbookPanelValue1093.bitmap, 0, 0, popcornElectronWorkbookPanelValue1093.metrics.width, popcornElectronWorkbookPanelValue1093.metrics.height));
  }
  #E(popcornElectronWorkbookPanelParam93) {
    let popcornElectronWorkbookPanelValue809 = {
        width: popcornElectronWorkbookPanelParam93.width,
        height: popcornElectronWorkbookPanelParam93.height,
        dpr: popcornElectronWorkbookPanelParam93.dpr
      },
      popcornElectronWorkbookPanelValue810 = popcornElectronWorkbookPanelParam93.resizeId != null,
      popcornElectronWorkbookPanelValue811 = popcornElectronWorkbookPanelValue810 && this.#d?.resizeId === popcornElectronWorkbookPanelParam93.resizeId,
      popcornElectronWorkbookPanelValue812 = !popcornElectronWorkbookPanelValue810 || popcornElectronWorkbookPanelValue811,
      popcornElectronWorkbookPanelValue813 = !this.#u || popcornElectronWorkbookPanelHelper198(this.#u, popcornElectronWorkbookPanelValue809);
    if (!popcornElectronWorkbookPanelValue812 || !popcornElectronWorkbookPanelValue813) {
      popcornElectronWorkbookPanelValue810 && (this.#v += 1);
      popcornElectronWorkbookPanelParam93.bitmap.close();
      popcornElectronWorkbookPanelValue811 && (this.#d = null, this.#S());
      return;
    }
    if (this.#p?.bitmap.close(), this.#p = {
      bitmap: popcornElectronWorkbookPanelParam93.bitmap,
      metrics: popcornElectronWorkbookPanelValue809
    }, this.#w(popcornElectronWorkbookPanelValue809), popcornElectronWorkbookPanelValue811 && this.#d) {
      let popcornElectronWorkbookPanelValue1272 = performance.now() - this.#d.requestedAtMs;
      this.#g = popcornElectronWorkbookPanelValue1272;
      this.#_ = this.#_ == null ? popcornElectronWorkbookPanelValue1272 : Math.max(this.#_, popcornElectronWorkbookPanelValue1272);
      this.#d = null;
    }
    this.#T();
    popcornElectronWorkbookPanelValue811 && this.#S();
  }
  #D(popcornElectronWorkbookPanelParam13) {
    this.#e.debug("event", {
      controllerId: this.id,
      kind: popcornElectronWorkbookPanelParam13.kind,
      state: popcornElectronWorkbookPanelParam13.kind === "navigation" ? popcornElectronWorkbookPanelParam13.state : popcornElectronWorkbookPanelParam13.kind === "selection" ? {
        selectedAddress: popcornElectronWorkbookPanelParam13.state.selectedAddress,
        activeCell: popcornElectronWorkbookPanelParam13.state.activeCell
      } : popcornElectronWorkbookPanelParam13.kind === "meta" ? popcornElectronWorkbookPanelParam13.state : undefined
    });
    let popcornElectronWorkbookPanelValue442 = this.#t.getState();
    switch (popcornElectronWorkbookPanelParam13.kind) {
      case "crdt-update":
        {
          let popcornElectronWorkbookPanelValue1350 = new Uint8Array(popcornElectronWorkbookPanelParam13.update);
          for (let popcornElectronWorkbookPanelValue1395 of this.#r) popcornElectronWorkbookPanelValue1395(popcornElectronWorkbookPanelValue1350);
          return;
        }
      case "meta":
        this.#t.patch({
          meta: popcornElectronWorkbookPanelParam13.state
        });
        return;
      case "navigation":
        this.#t.patch({
          navigation: popcornElectronWorkbookPanelParam13.state
        });
        return;
      case "selection":
        this.#t.patch({
          selection: popcornElectronWorkbookPanelParam13.state
        });
        this.#n.publish(popcornElectronWorkbookPanelHelper110(popcornElectronWorkbookPanelParam13.state.selectionRect, popcornElectronWorkbookPanelParam13.state.isDraggingSelection));
        return;
      case "editor":
        this.#t.patch({
          editor: popcornElectronWorkbookPanelParam13.state
        });
        return;
      case "viewport":
        this.#a = {
          ...popcornElectronWorkbookPanelParam13.state.camera
        };
        this.#t.patch({
          viewport: {
            ...popcornElectronWorkbookPanelParam13.state,
            camera: {
              ...this.#a
            }
          }
        });
        return;
      case "viewport-frame":
        this.#E(popcornElectronWorkbookPanelParam13);
        return;
      case "overlays":
        this.#t.patch({
          overlays: popcornElectronWorkbookPanelParam13.state
        });
        return;
      case "floating":
        this.#t.patch({
          floating: popcornElectronWorkbookPanelParam13.state
        });
        return;
      case "overlay-anchors":
        if (popcornElectronWorkbookPanelHelper202(this.#t.getState().overlays.dataValidationTargets, popcornElectronWorkbookPanelParam13.state.dataValidationTargets)) return;
        this.#t.patch({
          overlays: {
            ...this.#t.getState().overlays,
            dataValidationTargets: popcornElectronWorkbookPanelParam13.state.dataValidationTargets.map(item => ({
              ...item,
              cssBounds: {
                ...item.cssBounds
              }
            }))
          }
        });
        return;
      case "hover":
        if (popcornElectronWorkbookPanelHelper203(this.#t.getState().floating.chartHoverTargets, popcornElectronWorkbookPanelParam13.state.chartHoverTargets)) return;
        this.#t.patch({
          floating: {
            ...this.#t.getState().floating,
            chartHoverTargets: popcornElectronWorkbookPanelParam13.state.chartHoverTargets.map(item => ({
              ...item
            }))
          }
        });
        return;
      case "find":
        this.#t.patch({
          find: popcornElectronWorkbookPanelParam13.state
        });
        return;
      case "clipboard":
        this.#t.patch({
          clipboard: popcornElectronWorkbookPanelParam13.state
        });
        return;
      default:
        {
          let popcornElectronWorkbookPanelValue1303 = popcornElectronWorkbookPanelParam13;
          throw this.#t.replace(popcornElectronWorkbookPanelValue442), Error(`Unhandled workbook state event: ${popcornElectronWorkbookPanelValue1303}`);
        }
    }
  }
};
function popcornElectronWorkbookPanelHelper204({
  controller,
  plugins,
  title,
  fileMenuContent,
  headerRightContent,
  renderHeaderZoomControl,
  onClose,
  accentFill,
  accentStroke,
  theme,
  isEditing,
  reviewTools,
  bottomScrollReservePx,
  annotationHeaderButtonEnabled = true,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  artifactSearchEnabled = true,
  commentThreadsEnabled: popcornElectronWorkbookPanelParam3 = true
}) {
  let popcornElectronWorkbookPanelValue244 = popcornElectronWorkbookPanelHelper4(),
    {
      toolbarActions,
      panels,
      viewportOverlays
    } = React.useMemo(() => popcornElectronWorkbookPanelHelper5(plugins), [plugins]),
    popcornElectronWorkbookPanelValue245 = React.useMemo(() => panels.filter(item => item.placement === "sidebar"), [panels]),
    popcornElectronWorkbookPanelValue246 = React.useMemo(() => panels.filter(item => item.placement === "floating"), [panels]),
    [popcornElectronWorkbookPanelValue247, popcornElectronWorkbookPanelValue248] = React.useState(() => Object.fromEntries(popcornElectronWorkbookPanelValue246.map(item => [item.id, item.defaultOpen ?? false]))),
    [popcornElectronWorkbookPanelValue249, popcornElectronWorkbookPanelValue250] = React.useState(0),
    popcornElectronWorkbookPanelValue251 = annotationsEnabled && reviewTools?.annotation?.enabled !== false,
    popcornElectronWorkbookPanelValue252 = annotationHeaderButtonEnabled && popcornElectronWorkbookPanelValue251,
    [popcornElectronWorkbookPanelValue253, popcornElectronWorkbookPanelValue254] = React.useState(false),
    popcornElectronWorkbookPanelValue255 = drawingAnnotationsEnabled && reviewTools?.drawing?.enabled !== false,
    [popcornElectronWorkbookPanelValue256, popcornElectronWorkbookPanelValue257] = React.useState(false),
    [popcornElectronWorkbookPanelValue258, popcornElectronWorkbookPanelValue259] = React.useState(0),
    {
      beginInputSession,
      endInputSession,
      formulaHighlightRects,
      inputFocused,
      refColors,
      updateFormulaReferences
    } = popcornElectronWorkbookPanelHelper190({
      sheetName: popcornElectronWorkbookPanelValue244.activeSheetName,
      resetSelectionAddr: popcornElectronWorkbookPanelValue244.selectedAddress,
      resetSheet: `${popcornElectronWorkbookPanelValue244.activeSheetName}:${popcornElectronWorkbookPanelValue244.workbookVersion}`
    });
  React.useEffect(() => popcornElectronWorkbookPanelHelper192(controller), [controller]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue251 || popcornElectronWorkbookPanelValue254(false);
  }, [popcornElectronWorkbookPanelValue251]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue255 || popcornElectronWorkbookPanelValue257(false);
  }, [popcornElectronWorkbookPanelValue255]);
  React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue253) return;
    let popcornElectronWorkbookPanelValue1061 = event => {
      event.key === "Escape" && (event.target instanceof HTMLElement && event.target.closest("[data-testid='popcorn-annotation-editor']") || popcornElectronWorkbookPanelValue254(false));
    };
    return window.addEventListener("keydown", popcornElectronWorkbookPanelValue1061, true), () => {
      window.removeEventListener("keydown", popcornElectronWorkbookPanelValue1061, true);
    };
  }, [popcornElectronWorkbookPanelValue253]);
  React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue256) return;
    let popcornElectronWorkbookPanelValue1176 = event => {
      event.key === "Escape" && popcornElectronWorkbookPanelValue257(false);
    };
    return window.addEventListener("keydown", popcornElectronWorkbookPanelValue1176, true), () => {
      window.removeEventListener("keydown", popcornElectronWorkbookPanelValue1176, true);
    };
  }, [popcornElectronWorkbookPanelValue256]);
  let popcornElectronWorkbookPanelValue260 = React.useMemo(() => popcornElectronWorkbookPanelHelper68(controller, {
      activeSheetName: popcornElectronWorkbookPanelValue244.activeSheetName,
      selectedFloatingElement: popcornElectronWorkbookPanelValue244.selectedFloatingElement
    }), [controller, popcornElectronWorkbookPanelValue244.activeSheetName, popcornElectronWorkbookPanelValue244.selectedFloatingElement, popcornElectronWorkbookPanelValue244.workbookVersion]),
    popcornElectronWorkbookPanelValue261 = React.useMemo(() => [...popcornElectronWorkbookPanelValue260, ...formulaHighlightRects], [popcornElectronWorkbookPanelValue260, formulaHighlightRects]);
  React.useEffect(() => {
    popcornElectronWorkbookPanelValue248(popcornElectronWorkbookPanelParam185 => {
      let popcornElectronWorkbookPanelValue1114 = {},
        popcornElectronWorkbookPanelValue1115 = false;
      for (let popcornElectronWorkbookPanelValue1315 of popcornElectronWorkbookPanelValue246) {
        let popcornElectronWorkbookPanelValue1335 = popcornElectronWorkbookPanelParam185[popcornElectronWorkbookPanelValue1315.id] ?? popcornElectronWorkbookPanelValue1315.defaultOpen ?? false;
        popcornElectronWorkbookPanelValue1114[popcornElectronWorkbookPanelValue1315.id] = popcornElectronWorkbookPanelValue1335;
        Object.is(popcornElectronWorkbookPanelParam185[popcornElectronWorkbookPanelValue1315.id], popcornElectronWorkbookPanelValue1335) || (popcornElectronWorkbookPanelValue1115 = true);
      }
      for (let popcornElectronWorkbookPanelValue1355 of Object.keys(popcornElectronWorkbookPanelParam185)) if (!(popcornElectronWorkbookPanelValue1355 in popcornElectronWorkbookPanelValue1114)) {
        popcornElectronWorkbookPanelValue1115 = true;
        break;
      }
      return popcornElectronWorkbookPanelValue1115 ? popcornElectronWorkbookPanelValue1114 : popcornElectronWorkbookPanelParam185;
    });
  }, [popcornElectronWorkbookPanelValue246]);
  let popcornElectronWorkbookPanelValue262 = React.useMemo(() => popcornElectronWorkbookPanelValue246.flatMap(item => item.toolbarTrigger ? [{
    id: item.id,
    label: item.toolbarTrigger.label,
    title: item.toolbarTrigger.title,
    ariaLabel: item.toolbarTrigger.ariaLabel,
    icon: item.toolbarTrigger.icon,
    isActive: popcornElectronWorkbookPanelValue247[item.id] ?? false,
    onSelect: () => {
      popcornElectronWorkbookPanelValue248(popcornElectronWorkbookPanelParam572 => ({
        ...popcornElectronWorkbookPanelParam572,
        [item.id]: !(popcornElectronWorkbookPanelParam572[item.id] ?? false)
      }));
    }
  }] : []), [popcornElectronWorkbookPanelValue247, popcornElectronWorkbookPanelValue246]);
  return <div data-testid="popcorn-editor-surface" className="bg-token-bg-primary relative flex h-full min-h-0 flex-col" onKeyDownCapture={event => {
    !(event.metaKey || event.ctrlKey) || event.altKey || event.key.toLowerCase() !== "f" || artifactSearchEnabled && (event.preventDefault(), event.stopPropagation(), popcornElectronWorkbookPanelValue250(popcornElectronWorkbookPanelParam622 => popcornElectronWorkbookPanelParam622 + 1));
  }}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          {React.createElement(popcornElectronWorkbookPanelHelper189, {
          controller,
          snapshot: popcornElectronWorkbookPanelValue244,
          title,
          actions: [...toolbarActions, ...popcornElectronWorkbookPanelValue262],
          reviewToolControl: reviewTools?.annotation && popcornElectronWorkbookPanelValue252 || reviewTools?.drawing && popcornElectronWorkbookPanelValue255 ? <div className="flex items-center gap-2">
                    {reviewTools?.annotation && popcornElectronWorkbookPanelValue252 ? React.createElement(_popcornElectronSurfaceStyleJ, {
              active: popcornElectronWorkbookPanelValue253,
              onClick: () => {
                let popcornElectronWorkbookPanelValue1191 = !popcornElectronWorkbookPanelValue253;
                popcornElectronWorkbookPanelValue1191 && (reviewTools?.annotation?.onModeEnabled?.(), popcornElectronWorkbookPanelValue257(false));
                popcornElectronWorkbookPanelValue254(popcornElectronWorkbookPanelValue1191);
              }
            }) : null}
                    {reviewTools?.drawing && popcornElectronWorkbookPanelValue255 ? React.createElement(popcornElectronSurfaceStyleM, {
              active: popcornElectronWorkbookPanelValue256,
              onClick: () => {
                popcornElectronWorkbookPanelValue257(popcornElectronWorkbookPanelParam291 => {
                  let popcornElectronWorkbookPanelValue1281 = !popcornElectronWorkbookPanelParam291;
                  return popcornElectronWorkbookPanelValue1281 ? popcornElectronWorkbookPanelValue254(false) : popcornElectronWorkbookPanelValue259(popcornElectronWorkbookPanelParam623 => popcornElectronWorkbookPanelParam623 + 1), popcornElectronWorkbookPanelValue1281;
                });
              }
            }) : null}
                  </div> : null,
          headerRightContent,
          renderHeaderZoomControl,
          fileMenuContent,
          sheetTabAccentFill: theme === "codex" ? undefined : accentFill,
          sheetTabAccentStroke: theme === "codex" ? undefined : accentStroke,
          theme,
          isEditing,
          onClose
        })}
          {React.createElement(popcornElectronWorkbookPanelHelper184, {
          controller,
          snapshot: popcornElectronWorkbookPanelValue244,
          onFxFocus: () => {
            beginInputSession(popcornElectronWorkbookPanelValue244.formulaInput);
          },
          onFxBlur: () => {
            endInputSession();
          },
          refColors,
          accentColor: accentStroke,
          isEditing,
          showZoomSelect: theme !== "codex"
        })}
          <div className="min-h-0 flex-1">
            <div className="h-full min-h-0">
              {React.createElement(popcornElectronWorkbookPanelHelper140, {
              controller,
              snapshot: popcornElectronWorkbookPanelValue244,
              accentFill,
              accentStroke,
              inputFocused,
              formulaHighlightRects: popcornElectronWorkbookPanelValue261,
              onCellEditorFocus: () => {
                beginInputSession(popcornElectronWorkbookPanelValue244.formulaInput);
              },
              onCellEditorBlur: () => {
                endInputSession();
              },
              onCellEditorChange: popcornElectronWorkbookPanelParam536 => {
                updateFormulaReferences(popcornElectronWorkbookPanelParam536);
              },
              viewportOverlays,
              findRequestToken: popcornElectronWorkbookPanelValue249,
              artifactSearchEnabled,
              isEditing,
              annotationMode: popcornElectronWorkbookPanelValue253,
              onAnnotationModeChange: popcornElectronWorkbookPanelValue254,
              drawingMode: popcornElectronWorkbookPanelValue256,
              onDrawingModeChange: popcornElectronWorkbookPanelValue257,
              drawingCommitToken: popcornElectronWorkbookPanelValue258,
              reviewTools,
              bottomScrollReservePx,
              annotationsEnabled,
              drawingAnnotationsEnabled,
              commentThreadsEnabled: popcornElectronWorkbookPanelParam3
            })}
            </div>
          </div>
        </div>
        {popcornElectronWorkbookPanelValue245.length > 0 ? <aside data-testid="popcorn-editor-sidebar" className="border-token-border-light min-h-0 w-[320px] shrink-0 border-s">
            <div className="h-full overflow-auto p-3">
              {popcornElectronWorkbookPanelValue245.map(item => <section key={item.id} className="border-token-border-light bg-token-bg-primary mb-3 rounded-xl border p-3 last:mb-0">
                  <h3 className="text-token-text-primary mb-2 text-sm font-medium">
                    {item.title}
                  </h3>
                  {item.render({
              controller,
              snapshot: popcornElectronWorkbookPanelValue244
            })}
                </section>)}
            </div>
          </aside> : null}
      </div>
      {popcornElectronWorkbookPanelValue246.length > 0 ? <div className="pointer-events-none absolute inset-0 z-40">
          {popcornElectronWorkbookPanelValue246.map((item, index) => popcornElectronWorkbookPanelValue247[item.id] ? React.createElement(popcornElectronWorkbookPanelHelper141, {
        title: item.title,
        widthPx: item.widthPx,
        topPx: 96 + index * 24,
        onClose: () => {
          popcornElectronWorkbookPanelValue248(popcornElectronWorkbookPanelParam600 => ({
            ...popcornElectronWorkbookPanelParam600,
            [item.id]: false
          }));
        }
      }, item.render({
        controller,
        snapshot: popcornElectronWorkbookPanelValue244
      })) : null)}
        </div> : null}
    </div>;
}
function popcornElectronWorkbookPanelHelper205({
  controller,
  controllerOptions,
  plugins = [],
  className,
  title = "New spreadsheet",
  fileMenuContent,
  headerRightContent,
  renderHeaderZoomControl,
  onClose,
  accentFill,
  accentStroke,
  theme = "web",
  isEditing = true,
  reviewTools,
  bottomScrollReservePx,
  annotationHeaderButtonEnabled = true,
  annotationsEnabled: popcornElectronWorkbookPanelParam23 = true,
  drawingAnnotationsEnabled = true,
  artifactSearchEnabled = true,
  commentThreadsEnabled = true
}) {
  let popcornElectronWorkbookPanelValue527 = accentFill ?? (theme === "codex" ? "var(--color-token-interactive-bg-accent-muted-context, rgba(51, 156, 255, 0.18))" : $a),
    popcornElectronWorkbookPanelValue528 = accentStroke ?? (theme === "codex" ? "var(--color-token-text-link-foreground, #339cff)" : popcornElectronWorkbookPanelValue63),
    popcornElectronWorkbookPanelValue529 = _remoteTextEditSessionM(controller, React.useCallback(() => {
      if (typeof window > "u") throw Error("Popcorn workbook editor requires an explicit controller outside the browser.");
      return new popcornElectronWorkbookPanelValue67(controllerOptions);
    }, [controllerOptions]));
  return popcornElectronWorkbookPanelValue529 ? <div className={clsx("no-drag", className)} data-codex-popcorn-editor={true} data-testid="popcorn-editor-root" style={{
    height: "100%",
    minHeight: 0
  }}>
      {React.createElement(popcornElectronWorkbookPanelHelper2, {
      controller: popcornElectronWorkbookPanelValue529
    }, React.createElement(popcornElectronWorkbookPanelHelper204, {
      controller: popcornElectronWorkbookPanelValue529,
      plugins,
      title,
      fileMenuContent,
      headerRightContent,
      renderHeaderZoomControl,
      onClose,
      accentFill: popcornElectronWorkbookPanelValue527,
      accentStroke: popcornElectronWorkbookPanelValue528,
      theme,
      isEditing,
      reviewTools,
      bottomScrollReservePx,
      annotationHeaderButtonEnabled,
      annotationsEnabled: popcornElectronWorkbookPanelParam23,
      drawingAnnotationsEnabled,
      artifactSearchEnabled,
      commentThreadsEnabled
    }))}
    </div> : null;
}
var popcornElectronWorkbookPanelValue68 = {
  Purple: {
    1e3: "#000000",
    900: "#200D53",
    800: "#35158E",
    700: "#4C20CA",
    600: "#6D3FDC",
    500: "#875BE1",
    400: "#A47EE7",
    300: "#BC9EED",
    200: "#D3BEF2",
    100: "#E8DFF6",
    0: "#FFFFFF"
  },
  Pink: {
    1e3: "#000000",
    900: "#310E28",
    800: "#541945",
    700: "#782563",
    600: "#9D3383",
    500: "#D347B0",
    400: "#E659C2",
    300: "#EC8ACF",
    200: "#F1B4DD",
    100: "#F5DBEC",
    0: "#FFFFFF"
  },
  Red: {
    1e3: "#000000",
    900: "#360C19",
    800: "#5B142D",
    700: "#831D42",
    600: "#AB2958",
    500: "#D53670",
    400: "#EE4D83",
    300: "#F28BA6",
    200: "#F5B5C3",
    100: "#F7DBE1",
    0: "#FFFFFF"
  },
  Orange: {
    1e3: "#000000",
    900: "#29170C",
    800: "#4D2510",
    700: "#723414",
    600: "#96461C",
    500: "#BB5926",
    400: "#E36E30",
    300: "#EF9262",
    200: "#F3B99C",
    100: "#F6DDD1",
    0: "#FFFFFF"
  },
  Yellow: {
    1e3: "#000000",
    900: "#231A07",
    800: "#3F2D07",
    700: "#5C4107",
    600: "#7A570C",
    500: "#996E12",
    400: "#B98618",
    300: "#DB9F1E",
    200: "#F1B023",
    100: "#FADEB3",
    0: "#FFFFFF"
  },
  Olive: {
    1e3: "#000000",
    900: "#1E1C06",
    800: "#323204",
    700: "#494903",
    600: "#616106",
    500: "#7A7A0A",
    400: "#95950E",
    300: "#B0B013",
    200: "#CCCC24",
    100: "#EAE848",
    0: "#FFFFFF"
  },
  Green: {
    1e3: "#000000",
    900: "#0E2008",
    800: "#0C380D",
    700: "#135215",
    600: "#1D6D1E",
    500: "#268928",
    400: "#30A633",
    300: "#3DCB40",
    200: "#4DE24E",
    100: "#94F98A",
    0: "#FFFFFF"
  },
  Turquoise: {
    1e3: "#000000",
    900: "#06201A",
    800: "#08372F",
    700: "#0A5044",
    600: "#116B5B",
    500: "#188673",
    400: "#20A38C",
    300: "#27C0A6",
    200: "#2CD1B4",
    100: "#67FBDC",
    0: "#FFFFFF"
  },
  Cyan: {
    1e3: "#000000",
    900: "#061F26",
    800: "#053642",
    700: "#044E5F",
    600: "#08687E",
    500: "#0C839E",
    400: "#129FBF",
    300: "#16B7DB",
    200: "#51D7FC",
    100: "#BCEBFB",
    0: "#FFFFFF"
  },
  Blue: {
    1e3: "#000000",
    900: "#0D1B37",
    800: "#15305F",
    700: "#1E4788",
    600: "#2A5EB1",
    500: "#3A7DE8",
    400: "#6490F0",
    300: "#91AAF3",
    200: "#B8C6F6",
    100: "#DDE2F8",
    0: "#FFFFFF"
  },
  DesaturatedCool: {
    1e3: "#000000",
    900: "#1A1A1A",
    800: "#262626",
    700: "#333333",
    600: "#474747",
    500: "#595959",
    400: "#747474",
    300: "#8C8C8C",
    200: "#B3B3B3",
    100: "#D8D8D8",
    0: "#FFFFFF"
  },
  DesaturatedWarm: {
    1e3: "#000000",
    900: "#1E1C1B",
    800: "#2C2927",
    700: "#393634",
    600: "#4E4947",
    500: "#62605E",
    400: "#7A7775",
    300: "#928E8D",
    200: "#B3ACAB",
    100: "#D8D1D0",
    0: "#FFFFFF"
  }
};
function popcornElectronWorkbookPanelHelper206({
  icon,
  hideLabel,
  isActive,
  label,
  subLabel,
  iconClassName,
  labelClassName
}) {
  return <>
      {icon ? React.createElement(icon, {
      className: clsx("size-4", {
        "me-0.5": !hideLabel,
        "text-token-text-tertiary": !hideLabel && !isActive,
        "text-token-text-primary": hideLabel && !isActive,
        "text-token-interactive-label-accent-default": isActive
      }, iconClassName)
    }) : null}
      {hideLabel ? null : <span className={clsx("truncate text-sm", {
      "text-token-text-primary": !isActive,
      "text-token-interactive-label-accent-default": isActive
    }, labelClassName)}>
          {label}
        </span>}
      {subLabel}
    </>;
}
function popcornElectronWorkbookPanelHelper207({
  children
}) {
  return <div className={clsx("bg-token-main-surface-primary m-0 flex h-9 w-fit min-w-0 shrink items-center overflow-hidden rounded-xl px-1 py-1", "shadow-[0_8px_12px_0_rgba(0,0,0,0.16),0_0_1px_0_rgba(0,0,0,0.60)]")}>
      {children}
    </div>;
}
function popcornElectronWorkbookPanelHelper208({
  label,
  subLabel,
  icon,
  isDisabled = false,
  isActive = false,
  hideLabel = false,
  onClick,
  onMouseDown,
  iconClassName,
  labelClassName
}) {
  return <button type="button" className="flex h-full items-center gap-2 rounded-lg px-2 hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent" onClick={onClick} onMouseDown={onMouseDown} aria-label={hideLabel ? label : undefined} disabled={isDisabled} aria-pressed={isActive || undefined} data-state={isActive ? "on" : undefined}>
      {React.createElement(popcornElectronWorkbookPanelHelper206, {
      icon,
      hideLabel,
      label,
      subLabel,
      isActive,
      iconClassName,
      labelClassName
    })}
    </button>;
}
function popcornElectronWorkbookPanelHelper209({
  label,
  hideLabel,
  icon,
  children,
  align = "end"
}) {
  return React.createElement(Popover, null, [React.createElement(PopoverTrigger, {
    asChild: true
  }, <button type="button" className="flex h-full items-center gap-2 rounded-lg px-2 hover:bg-black/5" aria-label={hideLabel ? label : undefined}>
            {React.createElement(popcornElectronWorkbookPanelHelper206, {
      icon,
      hideLabel,
      label
    })}
          </button>), React.createElement(PopoverPortal, null, React.createElement(PopoverContent, {
    align,
    sideOffset: 8,
    className: "z-50"
  }, children))]);
}
function popcornElectronWorkbookPanelHelper210() {
  return <div className="mx-1 h-3 w-px bg-token-border-default" />;
}
var popcornElectronWorkbookPanelValue71 = ["DesaturatedWarm", "Purple", "Red", "Orange", "Yellow", "Green", "Cyan", "Blue"],
  popcornElectronWorkbookPanelValue72 = [700, 600, 500, 400, 300, 200, 100];
function popcornElectronWorkbookPanelHelper211({
  bounds,
  zoom = 1,
  isVisible,
  items
}) {
  let [popcornElectronWorkbookPanelValue421, popcornElectronWorkbookPanelValue422] = React.useState(() => typeof window > "u"),
    {
      refs,
      floatingStyles,
      update
    } = popcornElectronWorkbookPanelImport6({
      placement: "top",
      strategy: "absolute",
      middleware: [popcornElectronWorkbookPanelImport5(12), popcornElectronWorkbookPanelImport8({
        fallbackPlacements: ["bottom"]
      }), popcornElectronWorkbookPanelImport9({
        padding: 8
      })],
      whileElementsMounted: popcornElectronWorkbookPanelImport7
    }),
    popcornElectronWorkbookPanelValue423 = React.useCallback(event => {
      event.preventDefault();
      event.stopPropagation();
    }, []);
  if (React.useEffect(() => {
    if (typeof window > "u") {
      popcornElectronWorkbookPanelValue422(true);
      return;
    }
    if (!isVisible) {
      popcornElectronWorkbookPanelValue422(false);
      return;
    }
    popcornElectronWorkbookPanelValue422(true);
  }, [isVisible]), React.useEffect(() => {
    isVisible && update?.();
  }, [bounds?.height, bounds?.left, bounds?.top, bounds?.width, isVisible, update, zoom]), !bounds || !isVisible) return null;
  let popcornElectronWorkbookPanelValue424 = (bounds.left + bounds.width / 2) * zoom,
    popcornElectronWorkbookPanelValue425 = Math.max(8, bounds.top * zoom - 12);
  return <div className="pointer-events-none absolute inset-0 z-30">
      <div ref={refs.setReference} className="pointer-events-none absolute" style={{
      left: popcornElectronWorkbookPanelValue424,
      top: popcornElectronWorkbookPanelValue425,
      width: 1,
      height: 1
    }} />
      <div ref={refs.setFloating} className="pointer-events-auto absolute drop-shadow-lg" style={{
      ...floatingStyles,
      zIndex: 30
    }} data-testid="popcorn-edit-toolbar">
        <div className={clsx("transition-all duration-150 ease-out", popcornElectronWorkbookPanelValue421 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")}>
          {React.createElement(popcornElectronWorkbookPanelHelper207, null, items.map(item => {
          switch (item.kind) {
            case "button":
              return React.createElement(popcornElectronWorkbookPanelHelper208, {
                label: item.label,
                icon: item.icon,
                hideLabel: item.hideLabel,
                isActive: item.isActive,
                isDisabled: item.isDisabled,
                subLabel: item.subLabel,
                iconClassName: item.iconClassName,
                labelClassName: item.labelClassName,
                onClick: popcornElectronWorkbookPanelParam464 => {
                  popcornElectronWorkbookPanelValue423(popcornElectronWorkbookPanelParam464);
                  item.onClick?.();
                }
              });
            case "popover":
              return React.createElement(popcornElectronWorkbookPanelHelper209, {
                label: item.label,
                icon: item.icon,
                hideLabel: item.hideLabel,
                align: item.align
              }, item.content);
            case "separator":
              return React.createElement(popcornElectronWorkbookPanelHelper210, null);
            default:
              return item;
          }
        }))}
        </div>
      </div>
    </div>;
}
function popcornElectronWorkbookPanelHelper212({
  bounds,
  zoom,
  isVisible,
  selectionRangeAddress,
  runWorksheetEdit,
  onAskSelectionContext
}) {
  let popcornElectronWorkbookPanelValue359 = React.useMemo(() => popcornElectronWorkbookPanelValue71.flatMap(item => popcornElectronWorkbookPanelValue72.map(_item => {
      let popcornElectronWorkbookPanelValue1254 = popcornElectronWorkbookPanelValue68[item];
      return {
        key: `${item}-${_item}`,
        label: `${item} shade ${_item}`,
        hex: popcornElectronWorkbookPanelValue1254?.[_item] ?? "#000000"
      };
    })), []),
    popcornElectronWorkbookPanelValue360 = React.useCallback(popcornElectronWorkbookPanelParam447 => {
      !selectionRangeAddress || !runWorksheetEdit || runWorksheetEdit("applyRangeFill", {
        rangeAddress: selectionRangeAddress,
        hex: popcornElectronWorkbookPanelParam447
      });
    }, [runWorksheetEdit, selectionRangeAddress]),
    popcornElectronWorkbookPanelValue361 = React.useCallback(popcornElectronWorkbookPanelParam432 => {
      !selectionRangeAddress || !runWorksheetEdit || runWorksheetEdit("applyRangeFontColor", {
        rangeAddress: selectionRangeAddress,
        hex: popcornElectronWorkbookPanelParam432
      });
    }, [runWorksheetEdit, selectionRangeAddress]);
  return React.createElement(popcornElectronWorkbookPanelHelper211, {
    bounds,
    zoom,
    isVisible,
    items: [{
      kind: "button",
      id: "text-style",
      label: "Text styles",
      icon: remoteTextEditSessionZ
    }, {
      kind: "button",
      id: "bold",
      label: "Bold",
      icon: remoteTextEditSessionX,
      hideLabel: true,
      onClick: () => {
        !selectionRangeAddress || !runWorksheetEdit || runWorksheetEdit("toggleRangeBold", {
          rangeAddress: selectionRangeAddress
        });
      }
    }, {
      kind: "button",
      id: "italic",
      label: "Italic",
      icon: remoteTextEditSessionP,
      hideLabel: true,
      onClick: () => {
        !selectionRangeAddress || !runWorksheetEdit || runWorksheetEdit("toggleRangeItalic", {
          rangeAddress: selectionRangeAddress
        });
      }
    }, {
      kind: "separator",
      id: "text-separator"
    }, {
      kind: "popover",
      id: "fill-color",
      label: "Fill color",
      icon: remoteTextEditSessionF,
      hideLabel: true,
      align: "center",
      content: <div data-walnut-edit-popover="true" className="border-token-border-light rounded-lg border bg-white p-3 shadow-xl">
              <p className="text-token-text-secondary mb-2 text-xs font-medium">
                {"Background color"}
              </p>
              <div className="grid grid-cols-7 gap-1">
                {popcornElectronWorkbookPanelValue359.map(item => React.createElement(PopoverClose, {
            asChild: true
          }, <button type="button" className="focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2" style={{
            backgroundColor: item.hex
          }} onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            popcornElectronWorkbookPanelValue360(item.hex);
          }}>
                          <span className="sr-only">{item.label}</span>
                        </button>))}
              </div>
            </div>
    }, {
      kind: "popover",
      id: "text-color",
      label: "Text color",
      icon: remoteTextEditSessionT,
      hideLabel: true,
      align: "center",
      content: <div data-walnut-edit-popover="true" className="border-token-border-light rounded-lg border bg-white p-3 shadow-xl">
              <p className="text-token-text-secondary mb-2 text-xs font-medium">
                {"Text color"}
              </p>
              <div className="grid grid-cols-7 gap-1">
                {popcornElectronWorkbookPanelValue359.map(item => React.createElement(PopoverClose, {
            asChild: true
          }, <button type="button" className="focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2" style={{
            backgroundColor: item.hex
          }} onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            popcornElectronWorkbookPanelValue361(item.hex);
          }}>
                          <span className="sr-only">{item.label}</span>
                        </button>))}
              </div>
            </div>
    }, {
      kind: "button",
      id: "borders",
      label: "Borders",
      icon: remoteTextEditSessionR,
      hideLabel: true,
      onClick: () => {
        !selectionRangeAddress || !runWorksheetEdit || runWorksheetEdit("applyRangeBorders", {
          rangeAddress: selectionRangeAddress
        });
      }
    }, {
      kind: "separator",
      id: "ask-separator"
    }, {
      kind: "button",
      id: "ask",
      label: "Ask",
      subLabel: <span className="text-token-text-tertiary text-[11px] leading-none">
              {"⌘I"}
            </span>,
      onClick: () => {
        onAskSelectionContext?.();
      }
    }]
  });
}
function popcornElectronWorkbookPanelHelper213(popcornElectronWorkbookPanelParam67) {
  let {
      selectionBounds,
      isDragging,
      canEdit,
      hasActiveCellEditor,
      inputFocused,
      toolbarRequested,
      delayMs = 150
    } = popcornElectronWorkbookPanelParam67,
    [popcornElectronWorkbookPanelValue700, popcornElectronWorkbookPanelValue701] = React.useState(false),
    popcornElectronWorkbookPanelValue702 = React.useRef(null);
  return React.useEffect(() => {
    let popcornElectronWorkbookPanelValue1060 = () => {
      popcornElectronWorkbookPanelValue702.current != null && typeof window < "u" && (window.clearTimeout(popcornElectronWorkbookPanelValue702.current), popcornElectronWorkbookPanelValue702.current = null);
    };
    return !(toolbarRequested && selectionBounds && !isDragging && canEdit && !hasActiveCellEditor && !inputFocused) || typeof window > "u" ? (popcornElectronWorkbookPanelValue1060(), popcornElectronWorkbookPanelValue701(false), popcornElectronWorkbookPanelValue1060) : (popcornElectronWorkbookPanelValue1060(), popcornElectronWorkbookPanelValue702.current = window.setTimeout(() => {
      popcornElectronWorkbookPanelValue701(true);
      popcornElectronWorkbookPanelValue702.current = null;
    }, delayMs), popcornElectronWorkbookPanelValue1060);
  }, [canEdit, delayMs, hasActiveCellEditor, inputFocused, isDragging, selectionBounds, toolbarRequested]), React.useEffect(() => () => {
    popcornElectronWorkbookPanelValue702.current != null && typeof window < "u" && (window.clearTimeout(popcornElectronWorkbookPanelValue702.current), popcornElectronWorkbookPanelValue702.current = null);
  }, []), popcornElectronWorkbookPanelValue700;
}
function popcornElectronWorkbookPanelHelper214({
  controller,
  snapshot,
  inputFocused,
  selectionBounds,
  selectionSummary,
  toolbarRequested,
  onAskSelectionContext
}) {
  let popcornElectronWorkbookPanelValue871 = popcornElectronWorkbookPanelHelper213({
    selectionBounds,
    isDragging: snapshot.isDraggingSelection,
    canEdit: true,
    hasActiveCellEditor: snapshot.editorMode === "editCell",
    inputFocused,
    toolbarRequested
  });
  return React.createElement(popcornElectronWorkbookPanelHelper212, {
    bounds: selectionBounds,
    zoom: snapshot.zoom,
    isVisible: popcornElectronWorkbookPanelValue871,
    selectionRangeAddress: selectionSummary.rangeAddress || null,
    runWorksheetEdit: (popcornElectronWorkbookPanelParam595, popcornElectronWorkbookPanelParam596) => controller.runWorksheetEdit(popcornElectronWorkbookPanelParam595, popcornElectronWorkbookPanelParam596),
    onAskSelectionContext
  });
}
function popcornElectronWorkbookPanelHelper215(popcornElectronWorkbookPanelParam193) {
  return {
    id: "popcorn-formatting",
    viewportOverlays: [{
      id: "popcorn-formatting-toolbar",
      render: popcornElectronWorkbookPanelParam325 => React.createElement(popcornElectronWorkbookPanelHelper214, {
        ...popcornElectronWorkbookPanelParam325,
        onAskSelectionContext: popcornElectronWorkbookPanelParam193?.onAskSelectionContext ?? null
      })
    }]
  };
}
function popcornElectronWorkbookPanelHelper216(popcornElectronWorkbookPanelParam371) {
  let popcornElectronWorkbookPanelValue1337 = [...(popcornElectronWorkbookPanelParam371.plugins ?? []), popcornElectronWorkbookPanelHelper215()];
  return React.createElement(popcornElectronWorkbookPanelHelper205, {
    ...popcornElectronWorkbookPanelParam371,
    plugins: popcornElectronWorkbookPanelValue1337
  });
}
var popcornElectronWorkbookPanelValue75 = Date.UTC(2025, 9, 1),
  popcornElectronWorkbookPanelValue77 = ["North", "South", "West", "East"],
  popcornElectronWorkbookPanelValue78 = ["Ava", "Noah", "Mia", "Liam", "Ivy", "Eli"],
  popcornElectronWorkbookPanelValue79 = ["Core", "Plus", "AI", "Ops"],
  popcornElectronWorkbookPanelValue80 = ["Q1", "Q2", "Q3", "Q4"],
  popcornElectronWorkbookPanelValue81 = ["Backlog", "In progress", "Blocked", "Done"],
  popcornElectronWorkbookPanelValue82 = {
    font: {
      bold: true
    },
    fill: "#E5E7EB"
  },
  popcornElectronWorkbookPanelValue83 = {
    font: {
      bold: true
    },
    fill: "#DBEAFE"
  },
  popcornElectronWorkbookPanelValue84 = {
    minColor: "#FECACA",
    midColor: "#FDE68A",
    maxColor: "#86EFAC"
  },
  $o = {
    minColor: "#DBEAFE",
    midColor: "#93C5FD",
    maxColor: "#1D4ED8"
  },
  popcornElectronWorkbookPanelValue85 = {
    allowBlank: true,
    list: {
      inCellDropDown: true,
      source: [...popcornElectronWorkbookPanelValue81]
    },
    showInputMessage: true,
    promptTitle: "Status",
    prompt: "Pick one of the supported statuses."
  },
  popcornElectronWorkbookPanelValue86 = ["Artifact", "Area", "Feature", "Summary"];
function popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelParam488) {
  popcornElectronWorkbookPanelParam488.format.autofitColumns();
  popcornElectronWorkbookPanelParam488.format.autofitRows();
}
function popcornElectronWorkbookPanelHelper218(popcornElectronWorkbookPanelParam30) {
  let popcornElectronWorkbookPanelValue551 = popcornElectronWorkbookPanelParam30.worksheets.add("Revenue"),
    popcornElectronWorkbookPanelValue552 = popcornElectronWorkbookPanelValue551.getRange("A1:G7");
  popcornElectronWorkbookPanelValue552.values = [["Quarter", "North", "South", "West", "East", "Total", "Delta"], ["Q1", 120, 90, 80, 72, 362, 0.08], ["Q2", 135, 100, 92, 88, 415, 0.12], ["Q3", 150, 110, 105, 94, 459, 0.11], ["Q4", 170, 128, 120, 109, 527, 0.15], ["Q5", 182, 139, 126, 118, 565, 0.07], ["Q6", 194, 147, 133, 121, 595, 0.05]];
  popcornElectronWorkbookPanelValue551.getRange("F2").formulas = [["=SUM(B2:E2)"]];
  popcornElectronWorkbookPanelValue551.getRange("F2:F7").fillDown();
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue552);
  popcornElectronWorkbookPanelValue551.getRange("A1:G1").format = popcornElectronWorkbookPanelValue82;
  popcornElectronWorkbookPanelValue551.getRange("F2:F7").format = {
    font: {
      bold: true
    }
  };
  popcornElectronWorkbookPanelValue551.getRange("G2:G7").conditionalFormats.addColorScale(popcornElectronWorkbookPanelValue84);
  popcornElectronWorkbookPanelValue551.getRange("F9:H13").values = [["Region", "Owner", "Status"], ["North", "Ava", "Done"], ["South", "Noah", "In progress"], ["West", "Mia", "Blocked"], ["East", "Liam", "Backlog"]];
  let popcornElectronWorkbookPanelValue553 = popcornElectronWorkbookPanelValue551.tables.add("F9:H13", true, "RegionalOwners");
  popcornElectronWorkbookPanelValue553.showFilterButton = true;
  popcornElectronWorkbookPanelValue551.getRange("A15").values = [["Merged viewport anchor test: scroll this block so A15 moves offscreen."]];
  popcornElectronWorkbookPanelValue551.getRange("A15:D18").merge();
  popcornElectronWorkbookPanelValue551.getRange("A15:D18").format = {
    fill: "#E0F2FE",
    font: {
      bold: true,
      color: "#075985"
    },
    horizontalAlignment: "center",
    verticalAlignment: "middle",
    wrapText: true
  };
  popcornElectronWorkbookPanelValue551.getRange("A15:D18").format.rowHeightPx = 32;
  popcornElectronWorkbookPanelValue551.getRange("A15:D18").format.columnWidthPx = 112;
  let popcornElectronWorkbookPanelValue554 = popcornElectronWorkbookPanelValue551.charts.add("ColumnClustered", popcornElectronWorkbookPanelValue551.getRange("A1:E7"), "Auto");
  return popcornElectronWorkbookPanelValue554.title.text = "Regional revenue", popcornElectronWorkbookPanelValue554.setPosition(popcornElectronWorkbookPanelValue551.getRange("I2")), popcornElectronWorkbookPanelValue554.width = 460, popcornElectronWorkbookPanelValue554.height = 280, popcornElectronWorkbookPanelValue551;
}
function is() {
  return Array.from({
    length: 1500
  }, (popcornElectronWorkbookPanelParam121, popcornElectronWorkbookPanelParam122) => {
    let popcornElectronWorkbookPanelValue929 = popcornElectronWorkbookPanelValue77[popcornElectronWorkbookPanelParam122 % popcornElectronWorkbookPanelValue77.length],
      popcornElectronWorkbookPanelValue930 = popcornElectronWorkbookPanelValue78[popcornElectronWorkbookPanelParam122 * 3 % popcornElectronWorkbookPanelValue78.length],
      popcornElectronWorkbookPanelValue931 = popcornElectronWorkbookPanelValue79[popcornElectronWorkbookPanelParam122 * 5 % popcornElectronWorkbookPanelValue79.length],
      popcornElectronWorkbookPanelValue932 = popcornElectronWorkbookPanelValue80[popcornElectronWorkbookPanelParam122 * 7 % popcornElectronWorkbookPanelValue80.length],
      popcornElectronWorkbookPanelValue933 = 40 + popcornElectronWorkbookPanelParam122 * 11 % 180,
      popcornElectronWorkbookPanelValue934 = popcornElectronWorkbookPanelValue933 * (90 + popcornElectronWorkbookPanelParam122 * 17 % 45),
      popcornElectronWorkbookPanelValue935 = Number((popcornElectronWorkbookPanelParam122 * 13 % 28 / 100 + 0.18).toFixed(2)),
      popcornElectronWorkbookPanelValue936 = popcornElectronWorkbookPanelValue81[popcornElectronWorkbookPanelParam122 * 19 % popcornElectronWorkbookPanelValue81.length],
      popcornElectronWorkbookPanelValue937 = popcornElectronWorkbookPanelParam122 % 12 + 1,
      popcornElectronWorkbookPanelValue938 = popcornElectronWorkbookPanelParam122 % 27 + 1;
    return [popcornElectronWorkbookPanelValue929, popcornElectronWorkbookPanelValue930, popcornElectronWorkbookPanelValue931, popcornElectronWorkbookPanelValue932, popcornElectronWorkbookPanelValue934, popcornElectronWorkbookPanelValue933, popcornElectronWorkbookPanelValue935, popcornElectronWorkbookPanelValue936, `2025-${String(popcornElectronWorkbookPanelValue937).padStart(2, "0")}-${String(popcornElectronWorkbookPanelValue938).padStart(2, "0")}`];
  });
}
function as(popcornElectronWorkbookPanelParam270) {
  let popcornElectronWorkbookPanelValue1257 = Math.imul(popcornElectronWorkbookPanelParam270 ^ 2654435769, 2246822507);
  return popcornElectronWorkbookPanelValue1257 ^= popcornElectronWorkbookPanelValue1257 >>> 13, popcornElectronWorkbookPanelValue1257 = Math.imul(popcornElectronWorkbookPanelValue1257, 3266489909), popcornElectronWorkbookPanelValue1257 ^= popcornElectronWorkbookPanelValue1257 >>> 16, (popcornElectronWorkbookPanelValue1257 >>> 0) / 4294967296;
}
function os() {
  return Array.from({
    length: 182
  }, (popcornElectronWorkbookPanelParam147, popcornElectronWorkbookPanelParam148) => {
    let popcornElectronWorkbookPanelValue1021 = new Date(popcornElectronWorkbookPanelValue75 + popcornElectronWorkbookPanelParam148 * 86400000).toISOString().slice(0, 10),
      popcornElectronWorkbookPanelValue1022 = Math.sin(popcornElectronWorkbookPanelParam148 * Math.PI * 2 / 7),
      popcornElectronWorkbookPanelValue1023 = as(popcornElectronWorkbookPanelParam148 * 17 + 3),
      popcornElectronWorkbookPanelValue1024 = as(popcornElectronWorkbookPanelParam148 * 29 + 11),
      popcornElectronWorkbookPanelValue1025 = as(popcornElectronWorkbookPanelParam148 * 43 + 19),
      popcornElectronWorkbookPanelValue1026 = Math.round(860 + popcornElectronWorkbookPanelParam148 * 3.8 + popcornElectronWorkbookPanelValue1022 * 110 + (popcornElectronWorkbookPanelValue1023 - 0.5) * 120);
    return [popcornElectronWorkbookPanelValue1021, popcornElectronWorkbookPanelValue1026, Number((185 + popcornElectronWorkbookPanelValue1022 * 14 + (popcornElectronWorkbookPanelValue1024 - 0.5) * 32 + (popcornElectronWorkbookPanelValue1026 > 1250 ? 18 : 0)).toFixed(1)), Math.max(0, Math.round(8 + popcornElectronWorkbookPanelValue1022 * 3 + (popcornElectronWorkbookPanelValue1025 - 0.45) * 12))];
  });
}
function popcornElectronWorkbookPanelHelper219(popcornElectronWorkbookPanelParam134) {
  let popcornElectronWorkbookPanelValue977 = popcornElectronWorkbookPanelParam134.worksheets.add("Data"),
    popcornElectronWorkbookPanelValue978 = ["Region", "Rep", "Product", "Quarter", "Revenue", "Units", "Margin", "Status", "Date"],
    popcornElectronWorkbookPanelValue979 = is(),
    popcornElectronWorkbookPanelValue980 = popcornElectronWorkbookPanelParam134.utils.toA1String(1, 1, popcornElectronWorkbookPanelValue979.length + 1, popcornElectronWorkbookPanelValue978.length);
  popcornElectronWorkbookPanelValue977.getRange(popcornElectronWorkbookPanelValue980).values = [popcornElectronWorkbookPanelValue978, ...popcornElectronWorkbookPanelValue979];
  let popcornElectronWorkbookPanelValue981 = popcornElectronWorkbookPanelValue977.tables.add(popcornElectronWorkbookPanelValue980, true, "SalesData");
  return popcornElectronWorkbookPanelValue981.style = "TableStyleMedium2", popcornElectronWorkbookPanelValue981.showFilterButton = true, popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue977.getRange("A1:I12")), popcornElectronWorkbookPanelValue977;
}
function popcornElectronWorkbookPanelHelper220(popcornElectronWorkbookPanelParam82) {
  let popcornElectronWorkbookPanelValue763 = popcornElectronWorkbookPanelParam82.worksheets.add("Daily logs"),
    popcornElectronWorkbookPanelValue764 = ["Date", "Requests", "Latency ms", "Errors"],
    popcornElectronWorkbookPanelValue765 = os(),
    popcornElectronWorkbookPanelValue766 = popcornElectronWorkbookPanelParam82.utils.toA1String(1, 1, popcornElectronWorkbookPanelValue765.length + 1, popcornElectronWorkbookPanelValue764.length),
    popcornElectronWorkbookPanelValue767 = popcornElectronWorkbookPanelValue763.getRange(popcornElectronWorkbookPanelValue766);
  popcornElectronWorkbookPanelValue767.values = [popcornElectronWorkbookPanelValue764, ...popcornElectronWorkbookPanelValue765];
  let popcornElectronWorkbookPanelValue768 = popcornElectronWorkbookPanelValue763.tables.add(popcornElectronWorkbookPanelValue766, true, "DailyLogs");
  popcornElectronWorkbookPanelValue768.style = "TableStyleMedium4";
  popcornElectronWorkbookPanelValue768.showFilterButton = true;
  popcornElectronWorkbookPanelValue763.getRange("A1:D1").format = popcornElectronWorkbookPanelValue83;
  popcornElectronWorkbookPanelValue763.getRange(`C2:C${popcornElectronWorkbookPanelValue765.length + 1}`).format.numberFormat = "0.0";
  popcornElectronWorkbookPanelValue763.getRange(`B2:B${popcornElectronWorkbookPanelValue765.length + 1}`).conditionalFormats.addColorScale($o);
  popcornElectronWorkbookPanelValue763.getRange(`D2:D${popcornElectronWorkbookPanelValue765.length + 1}`).conditionalFormats.addColorScale(popcornElectronWorkbookPanelValue84);
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue763.getRange("A1:D14"));
  let popcornElectronWorkbookPanelValue769 = popcornElectronWorkbookPanelValue763.charts.add("line", popcornElectronWorkbookPanelValue767, "Auto");
  return popcornElectronWorkbookPanelValue769.title.text = "Daily logs trend", popcornElectronWorkbookPanelValue769.setPosition(popcornElectronWorkbookPanelValue763.getRange("F2")), popcornElectronWorkbookPanelValue769.width = 720, popcornElectronWorkbookPanelValue769.height = 360, popcornElectronWorkbookPanelValue763;
}
function popcornElectronWorkbookPanelHelper221(popcornElectronWorkbookPanelParam80) {
  let popcornElectronWorkbookPanelValue758 = popcornElectronWorkbookPanelParam80.worksheets.add("Pivot"),
    popcornElectronWorkbookPanelValue759 = popcornElectronWorkbookPanelParam80.pivotTables.add("SalesPivot", `Data!A1:I${1501}`, "Pivot!A3"),
    {
      hierarchies,
      rowHierarchies,
      columnHierarchies,
      dataHierarchies
    } = popcornElectronWorkbookPanelValue759;
  rowHierarchies.add(hierarchies.getItem("Region"));
  rowHierarchies.add(hierarchies.getItem("Product"));
  columnHierarchies.add(hierarchies.getItem("Quarter"));
  dataHierarchies.add(hierarchies.getItem("Revenue"));
  dataHierarchies.add(hierarchies.getItem("Units"));
  popcornElectronWorkbookPanelValue759.layout.emptyCellText = "--";
  popcornElectronWorkbookPanelValue759.layout.preserveFormatting = true;
  popcornElectronWorkbookPanelValue758.getRange("A1:F2").values = [["Sales pivot", "Backed by Data!A1:I1501", "", "", "", ""], ["Try selecting the pivot body to test formatting, copy, and navigation.", "", "", "", "", ""]];
  popcornElectronWorkbookPanelValue758.getRange("A1:F2").format = {
    wrapText: true
  };
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue758.getRange("A1:F2"));
}
function popcornElectronWorkbookPanelHelper222(popcornElectronWorkbookPanelParam16) {
  let popcornElectronWorkbookPanelValue447 = popcornElectronWorkbookPanelParam16.worksheets.add("Planning");
  popcornElectronWorkbookPanelValue447.getRange("A1:H9").values = [["Workstream", "Owner", "ETA", "Priority", "Confidence", "Variance", "Status", "Notes"], ["Canvas worker", "Ava", "2026-04-01", "P0", 0.88, 0.05, "Done", "Offscreen redraw path is in place."], ["Clipboard", "Noah", "2026-04-02", "P0", 0.62, -0.03, "In progress", "Needs browser-system parity."], ["Pivot chrome", "Mia", "2026-04-04", "P1", 0.57, 0.01, "Backlog", "Toolbar hooks are ready."], ["Undo/redo", "Liam", "2026-04-03", "P0", 0.94, 0.09, "Done", "Granola keyboard bus already carries the mutations."], ["Charts", "Ivy", "2026-04-05", "P1", 0.71, 0.12, "In progress", "Series highlighting is now source-aware."], ["Tables", "Eli", "2026-04-05", "P1", 0.83, 0.07, "Done", "Sizing and styles should mirror Excel."], ["Validation", "Ava", "2026-04-06", "P1", 0.66, -0.02, "Blocked", "Awaiting polished dropdown chrome."], ["Docs/Slides core", "Noah", "2026-04-08", "P2", 0.48, 0.14, "Backlog", "Shared floating selection runtime next."]];
  let popcornElectronWorkbookPanelValue448 = popcornElectronWorkbookPanelValue447.tables.add("A1:H9", true, "PlanTable");
  popcornElectronWorkbookPanelValue448.style = "TableStyleMedium9";
  popcornElectronWorkbookPanelValue448.showFilterButton = true;
  popcornElectronWorkbookPanelValue447.getRange("E2:E9").conditionalFormats.addColorScale(popcornElectronWorkbookPanelValue84);
  popcornElectronWorkbookPanelValue447.getRange("F2:F9").conditionalFormats.add("cellIs", {
    operator: "greaterThan",
    formula: 0.1,
    format: {
      fill: "#FEF3C7",
      font: {
        color: "#92400E",
        bold: true
      }
    }
  });
  popcornElectronWorkbookPanelValue447.getRange("G2:G40").dataValidation = popcornElectronWorkbookPanelValue85;
  popcornElectronWorkbookPanelValue447.getRange("J1:N6").values = [["Scenario", "North", "South", "West", "East"], ["Base", 362, 415, 459, 527], ["Stretch", 380, 430, 490, 558], ["Downside", 320, 390, 421, 480], ["AI assist", 401, 445, 512, 590], ["Partner", 387, 438, 501, 572]];
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue447.getRange("J1:N6"));
  popcornElectronWorkbookPanelValue447.getRange("J1:N1").format = popcornElectronWorkbookPanelValue83;
  popcornElectronWorkbookPanelValue447.getRange("J2:N6").conditionalFormats.addColorScale($o);
}
function popcornElectronWorkbookPanelHelper223(popcornElectronWorkbookPanelParam25) {
  let popcornElectronWorkbookPanelValue534 = popcornElectronWorkbookPanelParam25.worksheets.add("Freeze");
  return popcornElectronWorkbookPanelValue534.getRange("A1:H12").values = [["Region", "Owner", "Status", "ETA", "Revenue", "Variance", "Notes", "Formula"], ["North", "Ava", "Done", "2026-04-01", 362, 0.08, "Frozen panes should keep headers and the first columns visible.", "=E2*(1+F2)"], ["South", "Noah", "In progress", "2026-04-02", 415, 0.12, "Drag the freeze lines from the parked handles or existing boundaries.", "=E3*(1+F3)"], ["West", "Mia", "Blocked", "2026-04-03", 459, -0.02, "This sheet is the manual playground for scrolling and frozen headers.", "=E4*(1+F4)"], ["East", "Liam", "Backlog", "2026-04-04", 527, 0.05, "The first two rows and first two columns start frozen.", "=E5*(1+F5)"], ...Array.from({
    length: 7
  }, (popcornElectronWorkbookPanelParam177, popcornElectronWorkbookPanelParam178) => [popcornElectronWorkbookPanelValue77[popcornElectronWorkbookPanelParam178 % popcornElectronWorkbookPanelValue77.length], popcornElectronWorkbookPanelValue78[popcornElectronWorkbookPanelParam178 % popcornElectronWorkbookPanelValue78.length], popcornElectronWorkbookPanelValue81[popcornElectronWorkbookPanelParam178 % popcornElectronWorkbookPanelValue81.length], `2026-04-${String(popcornElectronWorkbookPanelParam178 + 5).padStart(2, "0")}`, 240 + popcornElectronWorkbookPanelParam178 * 18, Number(((popcornElectronWorkbookPanelParam178 % 5 - 2) * 0.03).toFixed(2)), `Row ${popcornElectronWorkbookPanelParam178 + 6} adds more scrollable body content for freeze testing.`, `=E${popcornElectronWorkbookPanelParam178 + 6}*(1+F${popcornElectronWorkbookPanelParam178 + 6})`])], popcornElectronWorkbookPanelValue534.getRange("A1:H2").format = popcornElectronWorkbookPanelValue83, popcornElectronWorkbookPanelValue534.getRange("G2:G12").format = {
    wrapText: true
  }, popcornElectronWorkbookPanelValue534.getRange("H2:H12").format = {
    font: {
      bold: true
    }
  }, popcornElectronWorkbookPanelValue534.getRange("A1:H12").format.autofitColumns(), popcornElectronWorkbookPanelValue534.getRange("G2:G12").format.columnWidthPx = 280, popcornElectronWorkbookPanelValue534.getRange("G2:G12").format.autofitRows(), popcornElectronWorkbookPanelValue534.freezePanes.freezeRows(2), popcornElectronWorkbookPanelValue534.freezePanes.freezeColumns(2), popcornElectronWorkbookPanelValue534;
}
function fs(popcornElectronWorkbookPanelParam29) {
  let popcornElectronWorkbookPanelValue550 = popcornElectronWorkbookPanelParam29.worksheets.add("Layout");
  popcornElectronWorkbookPanelValue550.getRange("A1:D8").values = [["Case", "Wrap", "Height", "Preview"], ["Single line", "off", "fixed", "This line stays on one row and should clip when the column is narrow."], ["Wrapped paragraph", "on", "auto", "This is a longer sentence that should wrap naturally once the column gets narrow enough to require multiple lines."], ["Multiline manual", "on", "fixed", "First line\nSecond line\nThird line"], ["Wide fixed column", "off", "auto", "A deliberately wide column to compare against the wrapped cases."], ["Narrow fixed column", "on", "fixed", "Narrow column with forced wrap and explicit row height."], ["Mixed style", "on", "auto", "Bold headers, fills, and row auto-fit should all remain stable."], ["Notes", "on", "auto", "Popcorn should match Excel-like sizing rules as closely as Granola exposes today."]];
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue550.getRange("A1:D8"));
  popcornElectronWorkbookPanelValue550.getRange("A1:D1").format = popcornElectronWorkbookPanelValue82;
  popcornElectronWorkbookPanelValue550.getRange("D2:D8").format = {
    wrapText: true
  };
  popcornElectronWorkbookPanelValue550.getRange("D4:D4").format.rowHeightPx = 72;
  popcornElectronWorkbookPanelValue550.getRange("D6:D6").format.rowHeightPx = 56;
  popcornElectronWorkbookPanelValue550.getRange("D2:D8").format.autofitRows();
  popcornElectronWorkbookPanelValue550.getRange("D2:D2").format.wrapText = false;
  popcornElectronWorkbookPanelValue550.getRange("D5:D5").format.wrapText = false;
  popcornElectronWorkbookPanelValue550.getRange("B2:C8").format.horizontalAlignment = "center";
  popcornElectronWorkbookPanelValue550.getRange("D2:D8").format.columnWidthPx = 210;
  popcornElectronWorkbookPanelValue550.getRange("A2:A8").format.columnWidthPx = 132;
  popcornElectronWorkbookPanelValue550.getRange("D2:D8").format.autofitRows();
}
function popcornElectronWorkbookPanelHelper224(popcornElectronWorkbookPanelParam17) {
  let popcornElectronWorkbookPanelValue461 = popcornElectronWorkbookPanelParam17.worksheets.add("Auto row height");
  popcornElectronWorkbookPanelValue461.getRange("A1:C9").values = [["Case", "Cell to inspect", "Expected result"], ["Instructions", "Open this sheet after changing the auto row height code. The rows below spell out what should happen in the cell text itself.", "Rows 3 and 7 should grow automatically; row 5 should stay fixed."], ["Unset row height", "B3 AUTO HEIGHT CHECK: this cell has wrapText=true and no explicit row height. Expected: row 3 grows tall enough to show this whole message without clipping. If only the first line is visible, unset auto row height is not working.", "Row 3 should be much taller than the default row height."], ["Spacer", "", ""], ["Custom row height", "B5 FIXED HEIGHT CHECK: this cell also wraps, but row 5 has an explicit 24 px custom height. Expected: row 5 stays short so this long wrapped message is clipped or visibly constrained.", "Row 5 should stay about 24 px high."], ["Spacer", "", ""], ["Manual newlines", "B7 AUTO HEIGHT CHECK:\nLine 2 should be visible.\nLine 3 should be visible.\nExpected: row 7 grows to show every line.", "Row 7 should grow to fit all newline-separated lines."], ["Spacer", "", ""], ["No wrap", "B9 NO WRAP CHECK: wrapText=false here, so the row should stay at the normal height even though the text is long.", "Row 9 should stay normal height."]];
  popcornElectronWorkbookPanelValue461.getRange("A1:C1").format = popcornElectronWorkbookPanelValue82;
  popcornElectronWorkbookPanelValue461.getRange("A1:C9").format.verticalAlignment = "top";
  popcornElectronWorkbookPanelValue461.getRange("A:A").format.columnWidthPx = 150;
  popcornElectronWorkbookPanelValue461.getRange("B:B").format.columnWidthPx = 280;
  popcornElectronWorkbookPanelValue461.getRange("C:C").format.columnWidthPx = 220;
  popcornElectronWorkbookPanelValue461.getRange("B2:C7").format.wrapText = true;
  popcornElectronWorkbookPanelValue461.getRange("B9:C9").format.wrapText = false;
  popcornElectronWorkbookPanelValue461.getRange("5:5").format.rowHeightPx = 24;
  popcornElectronWorkbookPanelValue461.getRange("A2:C9").format.fill = "#F8FAFC";
  popcornElectronWorkbookPanelValue461.getRange("A3:C3").format.fill = "#DCFCE7";
  popcornElectronWorkbookPanelValue461.getRange("A5:C5").format.fill = "#FEF3C7";
  popcornElectronWorkbookPanelValue461.getRange("A7:C7").format.fill = "#DBEAFE";
}
function popcornElectronWorkbookPanelHelper225(popcornElectronWorkbookPanelParam74) {
  let popcornElectronWorkbookPanelValue713 = popcornElectronWorkbookPanelParam74.worksheets.add("Catalog"),
    popcornElectronWorkbookPanelValue714 = getFeatureCatalogRows();
  popcornElectronWorkbookPanelValue713.getRange(popcornElectronWorkbookPanelParam74.utils.toA1String(1, 1, popcornElectronWorkbookPanelValue714.length + 1, popcornElectronWorkbookPanelValue86.length)).values = [popcornElectronWorkbookPanelValue86, ...popcornElectronWorkbookPanelValue714];
  let popcornElectronWorkbookPanelValue715 = popcornElectronWorkbookPanelValue713.tables.add(popcornElectronWorkbookPanelParam74.utils.toA1String(1, 1, popcornElectronWorkbookPanelValue714.length + 1, popcornElectronWorkbookPanelValue86.length), true, "FeatureCatalog");
  popcornElectronWorkbookPanelValue715.style = "TableStyleMedium4";
  popcornElectronWorkbookPanelValue715.showFilterButton = true;
  popcornElectronWorkbookPanelValue713.getRange("A1:D1").format = popcornElectronWorkbookPanelValue83;
  popcornElectronWorkbookPanelValue713.getRange("D2:D200").format = {
    wrapText: true
  };
  popcornElectronWorkbookPanelValue713.getRange("B2:B200").conditionalFormats.addCustom('=$A2="Workbook"', {
    fill: "#DBEAFE"
  });
  popcornElectronWorkbookPanelValue713.getRange("B2:B200").conditionalFormats.addCustom('=$A2="Presentation"', {
    fill: "#EDE9FE"
  });
  popcornElectronWorkbookPanelValue713.getRange("B2:B200").conditionalFormats.addCustom('=$A2="Document"', {
    fill: "#DCFCE7"
  });
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue713.getRange("A1:D40"));
  popcornElectronWorkbookPanelValue713.getRange("D2:D40").format.columnWidthPx = 420;
  popcornElectronWorkbookPanelValue713.getRange("D2:D40").format.autofitRows();
}
function popcornElectronWorkbookPanelHelper226(popcornElectronWorkbookPanelParam19) {
  let popcornElectronWorkbookPanelValue481 = popcornElectronWorkbookPanelParam19.worksheets.add("Showcase");
  popcornElectronWorkbookPanelValue481.getRange("A1:H8").values = [["Artifact", "Jan", "Feb", "Mar", "Apr", "Sparkline", "Object demo", "Notes"], ["Workbook", 5, 7, 9, 11, "", "Shape + image", "Anchored workbook drawings"], ["Presentation", 4, 6, 8, 10, "", "Chart parity", "Shared object primitives"], ["Document", 3, 5, 6, 9, "", "Inline media", "Pagination-aware editing"], ["Shared", 6, 8, 10, 12, "", "Worker split", "Shared text-edit runtime"]];
  popcornElectronWorkbookPanelValue481.getRange("A1:H1").format = popcornElectronWorkbookPanelValue82;
  popcornElectronWorkbookPanelValue481.getRange("H2:H5").format = {
    wrapText: true
  };
  popcornElectronWorkbookPanelValue481.getRange("F2:F5").sparklines.add("line", popcornElectronWorkbookPanelValue481.getRange("B2:E5"), {
    markers: {
      show: true
    }
  });
  let popcornElectronWorkbookPanelValue482 = popcornElectronWorkbookPanelValue481.shapes.add({
    geometry: "upArrow",
    anchor: {
      from: {
        row: 1,
        col: 6,
        rowOffsetPx: 6,
        colOffsetPx: 4
      },
      extent: {
        widthPx: 170,
        heightPx: 120
      }
    },
    fill: {
      type: "solid",
      color: "#2563EB"
    },
    line: {
      width: 1,
      style: "solid",
      fill: "#1D4ED8"
    }
  });
  popcornElectronWorkbookPanelValue482.text = "Flip me\nvertically";
  popcornElectronWorkbookPanelValue482.text.color = "#FFFFFF";
  popcornElectronWorkbookPanelValue482.text.alignment = "center";
  popcornElectronWorkbookPanelValue482.text.verticalAlignment = "middle";
  popcornElectronWorkbookPanelValue482.text.wrap = "square";
  popcornElectronWorkbookPanelValue481.shapes.add({
    geometry: "star5",
    anchor: {
      from: {
        row: 4,
        col: 6,
        rowOffsetPx: 4,
        colOffsetPx: 18
      },
      extent: {
        widthPx: 54,
        heightPx: 54
      }
    },
    fill: {
      type: "gradient",
      angleDeg: 90,
      stops: [{
        offset: 0,
        color: "accent2"
      }, {
        offset: 1e5,
        color: "accent5"
      }]
    },
    line: {
      width: 1,
      style: "solid",
      fill: "text1"
    }
  });
  popcornElectronWorkbookPanelValue481.images.add({
    dataUrl: _remoteTextEditSessionR,
    anchor: {
      from: {
        row: 3,
        col: 6,
        rowOffsetPx: 10,
        colOffsetPx: 96
      },
      extent: {
        widthPx: 44,
        heightPx: 44
      }
    }
  });
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue481.getRange("A1:H8"));
  popcornElectronWorkbookPanelValue481.getRange("H2:H5").format.columnWidthPx = 240;
  popcornElectronWorkbookPanelValue481.getRange("H2:H5").format.autofitRows();
}
function popcornElectronWorkbookPanelHelper227(popcornElectronWorkbookPanelParam9) {
  let popcornElectronWorkbookPanelValue409 = popcornElectronWorkbookPanelParam9.worksheets.add("Shapes");
  popcornElectronWorkbookPanelValue409.getRange("A1:H6").values = [["Shape showcase", "Fill", "Line", "Anchor", "Notes", "", "", ""], ["Rectangle", "Solid accent", "Dashed", "Extent", "Simple text box with dashed stroke.", "", "", ""], ["Moon", "Gradient", "Solid", "Two-cell", "Two-cell anchor with gradient fill.", "", "", ""], ["Hexagon", "Solid accent", "Solid", "Extent", "Badge-like label.", "", "", ""], ["Chevron", "Solid", "Dashed", "Extent", "Directional callout.", "", "", ""], ["Star", "Gradient", "Solid", "Extent", "High-contrast review marker.", "", "", ""]];
  popcornElectronWorkbookPanelValue409.getRange("A1:E1").format = popcornElectronWorkbookPanelValue83;
  popcornElectronWorkbookPanelValue409.getRange("E2:E6").format = {
    wrapText: true
  };
  popcornElectronWorkbookPanelValue409.getRange("E2:E6").format.columnWidthPx = 260;
  popcornElectronWorkbookPanelValue409.getRange("E2:E6").format.autofitRows();
  let popcornElectronWorkbookPanelValue410 = popcornElectronWorkbookPanelValue409.shapes.add({
    geometry: "rect",
    anchor: {
      from: {
        row: 1,
        col: 5,
        rowOffsetPx: 8,
        colOffsetPx: 12
      },
      extent: {
        widthPx: 220,
        heightPx: 120
      }
    },
    fill: "#DBEAFE",
    line: {
      width: 1.5,
      style: "dashed",
      fill: "#2563EB"
    }
  });
  popcornElectronWorkbookPanelValue410.text = "Dashed border";
  popcornElectronWorkbookPanelValue410.text.alignment = "center";
  popcornElectronWorkbookPanelValue410.text.verticalAlignment = "middle";
  popcornElectronWorkbookPanelValue410.text.wrap = "square";
  let popcornElectronWorkbookPanelValue411 = popcornElectronWorkbookPanelValue409.shapes.add({
    geometry: "moon",
    anchor: {
      from: {
        row: 6,
        col: 5,
        rowOffsetPx: 4,
        colOffsetPx: 16
      },
      to: {
        row: 12,
        col: 8,
        rowOffsetPx: 10,
        colOffsetPx: 26
      }
    },
    fill: {
      type: "gradient",
      angleDeg: 0,
      stops: [{
        offset: 0,
        color: "accent2"
      }, {
        offset: 1e5,
        color: "accent5"
      }]
    },
    line: {
      width: 1.5,
      style: "solid",
      fill: "accent3"
    }
  });
  popcornElectronWorkbookPanelValue411.text = "Gradient moon";
  popcornElectronWorkbookPanelValue411.text.alignment = "center";
  popcornElectronWorkbookPanelValue411.text.verticalAlignment = "middle";
  popcornElectronWorkbookPanelValue411.text.wrap = "square";
  let popcornElectronWorkbookPanelValue412 = popcornElectronWorkbookPanelValue409.shapes.add({
    geometry: "hexagon",
    anchor: {
      from: {
        row: 2,
        col: 9,
        rowOffsetPx: 6,
        colOffsetPx: 14
      },
      extent: {
        widthPx: 180,
        heightPx: 120
      }
    },
    fill: "accent4",
    line: {
      width: 1.5,
      style: "solid",
      fill: "accent6"
    }
  });
  popcornElectronWorkbookPanelValue412.text = "Badge";
  popcornElectronWorkbookPanelValue412.text.color = "#FFFFFF";
  popcornElectronWorkbookPanelValue412.text.alignment = "center";
  popcornElectronWorkbookPanelValue412.text.verticalAlignment = "middle";
  let popcornElectronWorkbookPanelValue413 = popcornElectronWorkbookPanelValue409.shapes.add({
    geometry: "chevron",
    anchor: {
      from: {
        row: 7,
        col: 9,
        rowOffsetPx: 4,
        colOffsetPx: 8
      },
      extent: {
        widthPx: 220,
        heightPx: 90
      }
    },
    fill: "#FDE68A",
    line: {
      width: 1.5,
      style: "dashed",
      fill: "#D97706"
    }
  });
  popcornElectronWorkbookPanelValue413.text = "Review flow";
  popcornElectronWorkbookPanelValue413.text.alignment = "center";
  popcornElectronWorkbookPanelValue413.text.verticalAlignment = "middle";
  let popcornElectronWorkbookPanelValue414 = popcornElectronWorkbookPanelValue409.shapes.add({
    geometry: "upArrow",
    anchor: {
      from: {
        row: 11,
        col: 9,
        rowOffsetPx: 8,
        colOffsetPx: 18
      },
      extent: {
        widthPx: 170,
        heightPx: 150
      }
    },
    fill: "#2563EB",
    line: {
      width: 1.5,
      style: "solid",
      fill: "#1D4ED8"
    }
  });
  popcornElectronWorkbookPanelValue414.text = "Flip me";
  popcornElectronWorkbookPanelValue414.text.color = "#FFFFFF";
  popcornElectronWorkbookPanelValue414.text.alignment = "center";
  popcornElectronWorkbookPanelValue414.text.verticalAlignment = "middle";
  popcornElectronWorkbookPanelValue414.text.wrap = "square";
  let popcornElectronWorkbookPanelValue415 = popcornElectronWorkbookPanelValue409.shapes.add({
    geometry: "star5",
    anchor: {
      from: {
        row: 13,
        col: 5,
        rowOffsetPx: 4,
        colOffsetPx: 40
      },
      extent: {
        widthPx: 150,
        heightPx: 140
      }
    },
    fill: {
      type: "gradient",
      angleDeg: 90,
      stops: [{
        offset: 0,
        color: "accent1"
      }, {
        offset: 1e5,
        color: "accent5"
      }]
    },
    line: {
      width: 1,
      style: "solid",
      fill: "text1"
    }
  });
  popcornElectronWorkbookPanelValue415.text = "Marker";
  popcornElectronWorkbookPanelValue415.text.color = "#FFFFFF";
  popcornElectronWorkbookPanelValue415.text.alignment = "center";
  popcornElectronWorkbookPanelValue415.text.verticalAlignment = "middle";
  popcornElectronWorkbookPanelHelper217(popcornElectronWorkbookPanelValue409.getRange("A1:E6"));
}
function _s(popcornElectronWorkbookPanelParam24) {
  let popcornElectronWorkbookPanelValue530 = popcornElectronWorkbookPanelParam24.worksheets.getItem("Revenue"),
    popcornElectronWorkbookPanelValue531 = popcornElectronWorkbookPanelParam24.worksheets.getItem("Planning"),
    popcornElectronWorkbookPanelValue532 = popcornElectronWorkbookPanelParam24.worksheets.getItem("Freeze");
  popcornElectronWorkbookPanelParam24.comments.setSelf({
    id: "popcorn-demo-reviewer",
    displayName: "Ava Reviewer",
    initials: "AR",
    email: "ava@example.com"
  });
  popcornElectronWorkbookPanelParam24.comments.addThread({
    cell: popcornElectronWorkbookPanelValue530.getRange("F4")
  }, "Please confirm the Q3 total before export. The regional numbers changed in yesterday's source refresh.", {
    createdAt: "2026-04-18T09:15:00.000Z"
  }).addReply("Confirmed. The total now matches the pipeline snapshot.", {
    author: {
      id: "popcorn-demo-owner",
      displayName: "Noah Owner",
      initials: "NO",
      email: "noah@example.com"
    },
    createdAt: "2026-04-18T10:02:00.000Z"
  });
  let popcornElectronWorkbookPanelValue533 = popcornElectronWorkbookPanelParam24.comments.addThread({
    range: popcornElectronWorkbookPanelValue531.getRange("B4:D6")
  }, "These dates still assume the old launch sequence. We should update the dependency notes before sharing.", {
    author: {
      id: "popcorn-demo-pm",
      displayName: "Mia PM",
      initials: "MP",
      email: "mia@example.com"
    },
    createdAt: "2026-04-17T14:30:00.000Z"
  });
  popcornElectronWorkbookPanelValue533.addReply("Tracked. I will revise the milestone owners after legal signs off.", {
    createdAt: "2026-04-17T16:05:00.000Z"
  });
  popcornElectronWorkbookPanelValue533.resolve({
    id: "popcorn-demo-pm",
    displayName: "Mia PM",
    initials: "MP",
    email: "mia@example.com"
  }, "2026-04-17T18:20:00.000Z");
  popcornElectronWorkbookPanelParam24.comments.addThread({
    cell: popcornElectronWorkbookPanelValue532.getRange("C12")
  }, "This frozen-pane example is handy for manual viewport checks. Keep it in the fixture.", {
    author: {
      id: "popcorn-demo-qa",
      displayName: "Eli QA",
      initials: "EQ"
    },
    createdAt: "2026-04-16T11:45:00.000Z"
  });
}
function popcornElectronWorkbookPanelHelper228() {
  let popcornElectronWorkbookPanelValue1174 = popcornElectronWorkbookPanelImport12.create();
  return popcornElectronWorkbookPanelHelper218(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper222(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper223(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper219(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper220(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper221(popcornElectronWorkbookPanelValue1174), fs(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper224(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper225(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper226(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelHelper227(popcornElectronWorkbookPanelValue1174), _s(popcornElectronWorkbookPanelValue1174), popcornElectronWorkbookPanelValue1174.worksheets.setActiveWorksheet("Revenue"), popcornElectronWorkbookPanelValue1174.recalculate(), popcornElectronWorkbookPanelValue1174;
}
function popcornElectronWorkbookPanelHelper229(popcornElectronWorkbookPanelParam547) {
  return popcornElectronWorkbookPanelParam547 == null ? popcornElectronWorkbookPanelHelper228() : popcornElectronWorkbookPanelImport12.load(popcornElectronWorkbookPanelParam547);
}
export function PopcornElectronWorkbookPanel({
  className,
  externalCrdtUpdates,
  headerTitleContent,
  headerRightContent,
  renderHeaderZoomControl,
  initialCrdtState,
  initialSelectedAddress,
  initialWorkbookProto,
  initialZoom,
  onCrdtUpdate,
  title = "codex-popcorn-demo.xlsx",
  theme = "codex",
  isEditing = false,
  navigationCommand,
  reviewTools,
  bottomScrollReservePx,
  annotationsEnabled = false,
  drawingAnnotationsEnabled: popcornElectronWorkbookPanelParam8 = false,
  artifactSearchEnabled = false,
  commentThreadsEnabled = false,
  workerFactory
}) {
  let popcornElectronWorkbookPanelValue405 = _popcornElectronSurfaceStyleR({
      initialCrdtState,
      externalCrdtUpdates
    }),
    popcornElectronWorkbookPanelValue406 = _remoteTextEditSessionM(undefined, () => new popcornElectronWorkbookPanelValue67({
      initialCrdtState: popcornElectronWorkbookPanelValue405.initialCrdtState,
      initialSelectedAddress,
      initialZoom,
      workerFactory,
      workbook: popcornElectronWorkbookPanelHelper229(initialWorkbookProto)
    })),
    popcornElectronWorkbookPanelValue407 = _popcornElectronSurfaceStyleI({
      artifactLabel: "Spreadsheet",
      controller: popcornElectronWorkbookPanelValue406,
      externalCrdtUpdates: popcornElectronWorkbookPanelValue405.externalCrdtUpdates,
      onCrdtUpdate
    }),
    popcornElectronWorkbookPanelValue408 = React.useRef(null);
  return React.useEffect(() => {
    if (!popcornElectronWorkbookPanelValue406 || navigationCommand == null) return;
    let popcornElectronWorkbookPanelValue495,
      popcornElectronWorkbookPanelValue496 = true,
      popcornElectronWorkbookPanelValue497 = () => {
        popcornElectronWorkbookPanelValue495?.();
        popcornElectronWorkbookPanelValue495 = undefined;
      },
      popcornElectronWorkbookPanelValue498 = popcornElectronWorkbookPanelParam306 => {
        if (popcornElectronWorkbookPanelValue496) {
          if (popcornElectronWorkbookPanelParam306) {
            popcornElectronWorkbookPanelValue497();
            return;
          }
          popcornElectronWorkbookPanelValue495 ??= popcornElectronWorkbookPanelValue406.subscribe(popcornElectronWorkbookPanelHelper242);
        }
      },
      popcornElectronWorkbookPanelValue499 = () => {
        if (navigationCommand.requestId === popcornElectronWorkbookPanelValue408.current) return true;
        let popcornElectronWorkbookPanelValue601 = popcornElectronWorkbookPanelValue406.getState().navigation;
        return popcornElectronWorkbookPanelValue601.sheetNames.includes(navigationCommand.sheet) ? popcornElectronWorkbookPanelValue601.activeSheetName === navigationCommand.sheet ? "range" in navigationCommand ? (popcornElectronWorkbookPanelHelper230({
          controller: popcornElectronWorkbookPanelValue406,
          range: navigationCommand.range,
          sheetName: navigationCommand.sheet
        }), popcornElectronWorkbookPanelValue408.current = navigationCommand.requestId, true) : popcornElectronWorkbookPanelValue406.requestNavigationTarget(navigationCommand.sheet, navigationCommand.objectId, navigationCommand.objectKind).then(value => {
          if (!popcornElectronWorkbookPanelValue496) return true;
          if (value?.kind === "range") popcornElectronWorkbookPanelHelper230({
            controller: popcornElectronWorkbookPanelValue406,
            range: value.ref,
            sheetName: navigationCommand.sheet
          });else if (value?.kind === "floating") {
            let popcornElectronWorkbookPanelValue957 = {
              id: value.id,
              kind: value.floatingKind,
              logicalBounds: {
                ...value.logicalBounds
              },
              ...(value.rotation == null ? {} : {
                rotation: value.rotation
              }),
              interactionState: "selected"
            };
            popcornElectronWorkbookPanelValue406.setSelectedFloatingElement(popcornElectronWorkbookPanelValue957, {
              sheetName: navigationCommand.sheet
            });
            popcornElectronWorkbookPanelValue406.revealFloatingElementBounds(popcornElectronWorkbookPanelValue957.logicalBounds);
          }
          return popcornElectronWorkbookPanelValue408.current = navigationCommand.requestId, true;
        }) : (popcornElectronWorkbookPanelValue495 ??= popcornElectronWorkbookPanelValue406.subscribe(popcornElectronWorkbookPanelHelper242), popcornElectronWorkbookPanelValue406.setActiveSheetName(navigationCommand.sheet), false) : false;
      };
    function popcornElectronWorkbookPanelHelper242() {
      let popcornElectronWorkbookPanelValue1302 = popcornElectronWorkbookPanelValue499();
      if (typeof popcornElectronWorkbookPanelValue1302 == "boolean") {
        popcornElectronWorkbookPanelValue498(popcornElectronWorkbookPanelValue1302);
        return;
      }
      popcornElectronWorkbookPanelValue1302.then(popcornElectronWorkbookPanelValue498);
    }
    return popcornElectronWorkbookPanelHelper242(), () => {
      popcornElectronWorkbookPanelValue496 = false;
      popcornElectronWorkbookPanelValue497();
    };
  }, [popcornElectronWorkbookPanelValue406, navigationCommand]), popcornElectronWorkbookPanelValue406 ? <section className={clsx("no-drag relative h-full min-h-0 bg-token-bg-primary", className)} style={_popcornElectronSurfaceStyleT(theme)} data-codex-popcorn-editor={true} data-testid="popcorn-electron-workbook-panel">
        {React.createElement(popcornElectronWorkbookPanelHelper216, {
      className: "h-full min-h-0",
      controller: popcornElectronWorkbookPanelValue406,
      headerTitleContent,
      headerRightContent,
      renderHeaderZoomControl,
      title,
      theme,
      isEditing,
      reviewTools,
      bottomScrollReservePx,
      annotationHeaderButtonEnabled: false,
      annotationsEnabled,
      drawingAnnotationsEnabled: popcornElectronWorkbookPanelParam8,
      artifactSearchEnabled,
      commentThreadsEnabled
    })}
        {React.createElement(_popcornElectronSurfaceStyleN, {
      artifactLabel: "Spreadsheet",
      restoreState: popcornElectronWorkbookPanelValue407
    })}
      </section> : null;
}
function popcornElectronWorkbookPanelHelper230({
  controller,
  range,
  sheetName
}) {
  let popcornElectronWorkbookPanelValue1109 = addressUtilsA(range);
  popcornElectronWorkbookPanelValue1109 && (controller.setActiveSheetName(sheetName), controller.setSelectedAddress(addressUtilsR(popcornElectronWorkbookPanelValue1109.bounds.startRow, popcornElectronWorkbookPanelValue1109.bounds.startCol)), controller.setSelectionRect({
    r1: popcornElectronWorkbookPanelValue1109.bounds.startRow,
    c1: popcornElectronWorkbookPanelValue1109.bounds.startCol,
    r2: popcornElectronWorkbookPanelValue1109.bounds.endRow,
    c2: popcornElectronWorkbookPanelValue1109.bounds.endCol
  }));
}
