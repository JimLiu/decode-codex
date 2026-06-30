// Restored from ref/webview/assets/PopcornElectronDocumentPanel-LEVj37uj.js
// Also matches current ref/webview/assets/PopcornElectronDocumentPanel-BJYIlWEb.js.
// PopcornElectronDocumentPanel chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { presentationRr, __presentationT, _presentationJn, presentationWt, presentationFn, _presentationEn, ___presentationN, presentationAt, presentationQ, _presentationZ } from "../vendor/presentation-runtime";
import { H as popcornElectronDocumentPanelImport10, I as popcornElectronDocumentPanelImport11, L as popcornElectronDocumentPanelImport12, M as popcornElectronDocumentPanelImport13, N as popcornElectronDocumentPanelImport14, O as popcornElectronDocumentPanelImport15, P as popcornElectronDocumentPanelImport16, S as popcornElectronDocumentPanelImport17, T as popcornElectronDocumentPanelImport18, U as popcornElectronDocumentPanelImport19, V as popcornElectronDocumentPanelImport20, W as popcornElectronDocumentPanelImport21, a as popcornElectronDocumentPanelImport22, c as popcornElectronDocumentPanelImport23, d as popcornElectronDocumentPanelImport24, f as popcornElectronDocumentPanelImport25, g as popcornElectronDocumentPanelImport26, h as popcornElectronDocumentPanelImport27, i as popcornElectronDocumentPanelImport28, j as popcornElectronDocumentPanelImport29, k as popcornElectronDocumentPanelImport30, l as popcornElectronDocumentPanelImport31, m as popcornElectronDocumentPanelImport32, o as popcornElectronDocumentPanelImport33, p as popcornElectronDocumentPanelImport34, s as popcornElectronDocumentPanelImport35, u as popcornElectronDocumentPanelImport36, w as popcornElectronDocumentPanelImport37, x as popcornElectronDocumentPanelImport38, A as popcornElectronDocumentPanelImport4, B as popcornElectronDocumentPanelImport5, D as popcornElectronDocumentPanelImport6, E as popcornElectronDocumentPanelImport7, F as popcornElectronDocumentPanelImport8, G as popcornElectronDocumentPanelImport9 } from "../boundaries/workbook-runtime";
import { documentW, documentM } from "../vendor/document-schema";
import { remoteTextEditSessionA, _remoteTextEditSessionC, _remoteTextEditSessionD, _remoteTextEditSessionF, remoteTextEditSessionG, remoteTextEditSessionH, _remoteTextEditSessionL, _remoteTextEditSessionM, _remoteTextEditSessionN, _remoteTextEditSessionP, _remoteTextEditSessionR, _remoteTextEditSessionS, _remoteTextEditSessionT, remoteTextEditSessionU, remoteTextEditSessionUnderscore } from "./remote-text-edit-session";
import { FeatureCatalogFindBar, getFeatureCatalogItems } from "../features/feature-catalog";
import { PopcornPageNumberNavigation } from "../features/popcorn-page-number-navigation";
var popcornElectronDocumentPanelValue1 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam709 = []) {
      this.#e = popcornElectronDocumentPanelParam709.map(item => new popcornElectronDocumentPanelValue2(item));
    }
    get items() {
      return [...this.#e];
    }
    add(popcornElectronDocumentPanelParam318 = {}) {
      let popcornElectronDocumentPanelValue703 = new popcornElectronDocumentPanelValue2({
        id: popcornElectronDocumentPanelParam318.id ?? "",
        tetherId: popcornElectronDocumentPanelParam318.tetherId ?? "",
        targetId: popcornElectronDocumentPanelParam318.targetId ?? "",
        type: popcornElectronDocumentPanelParam318.type ?? presentationQ.CONTENT_REFERENCE_TYPE_UNSPECIFIED,
        ...popcornElectronDocumentPanelParam318
      });
      return this.#e.push(popcornElectronDocumentPanelValue703), popcornElectronDocumentPanelValue703;
    }
    replace(popcornElectronDocumentPanelParam746) {
      this.#e = popcornElectronDocumentPanelParam746.map(item => new popcornElectronDocumentPanelValue2(item));
    }
    toProto() {
      return this.#e.map(item => item.toProto());
    }
  },
  popcornElectronDocumentPanelValue2 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam360) {
      this.#e = {
        ...popcornElectronDocumentPanelParam360,
        id: popcornElectronDocumentPanelParam360.id ?? "",
        tetherId: popcornElectronDocumentPanelParam360.tetherId ?? "",
        targetId: popcornElectronDocumentPanelParam360.targetId ?? "",
        type: popcornElectronDocumentPanelParam360.type ?? presentationQ.CONTENT_REFERENCE_TYPE_UNSPECIFIED
      };
    }
    get id() {
      return this.#e.id;
    }
    set id(popcornElectronDocumentPanelParam805) {
      this.#e.id = popcornElectronDocumentPanelParam805;
    }
    get title() {
      return this.#e.title ?? "";
    }
    set title(popcornElectronDocumentPanelParam785) {
      this.#e.title = popcornElectronDocumentPanelParam785;
    }
    get uri() {
      return this.#e.uri ?? "";
    }
    set uri(popcornElectronDocumentPanelParam797) {
      this.#e.uri = popcornElectronDocumentPanelParam797;
    }
    get locator() {
      return this.#e.locator ?? "";
    }
    set locator(popcornElectronDocumentPanelParam779) {
      this.#e.locator = popcornElectronDocumentPanelParam779;
    }
    get evidence() {
      return this.#e.evidence ?? "";
    }
    set evidence(popcornElectronDocumentPanelParam774) {
      this.#e.evidence = popcornElectronDocumentPanelParam774;
    }
    get note() {
      return this.#e.note ?? "";
    }
    set note(popcornElectronDocumentPanelParam789) {
      this.#e.note = popcornElectronDocumentPanelParam789;
    }
    toProto() {
      return structuredClone(this.#e);
    }
  },
  popcornElectronDocumentPanelValue3 = {
    accent1: "#156082",
    accent2: "#E97132",
    accent3: "#196B24",
    accent4: "#0F9ED5",
    accent5: "#A02B93",
    accent6: "#4EA72E",
    bg1: "#FFFFFF",
    bg2: "#000000",
    tx1: "#1F1F1F",
    tx2: "#FFFFFF",
    dk1: "#000000",
    lt1: "#FFFFFF",
    dk2: "#0E2841",
    lt2: "#E8E8E8",
    hlink: "#467886",
    folHlink: "#96607D"
  };
function popcornElectronDocumentPanelHelper1(popcornElectronDocumentPanelParam633) {
  if (!popcornElectronDocumentPanelParam633) return;
  let popcornElectronDocumentPanelValue955 = new popcornElectronDocumentPanelImport20();
  return popcornElectronDocumentPanelImport10(popcornElectronDocumentPanelValue955, popcornElectronDocumentPanelParam633), popcornElectronDocumentPanelValue955.toProto();
}
function popcornElectronDocumentPanelHelper2(popcornElectronDocumentPanelParam238) {
  let popcornElectronDocumentPanelValue634 = popcornElectronDocumentPanelParam238.paragraphStyle ? {
    ...popcornElectronDocumentPanelParam238.paragraphStyle,
    tabStops: popcornElectronDocumentPanelParam238.paragraphStyle.tabStops ?? []
  } : undefined;
  return {
    id: popcornElectronDocumentPanelParam238.id,
    name: popcornElectronDocumentPanelParam238.name,
    basedOn: popcornElectronDocumentPanelParam238.basedOn,
    textStyle: popcornElectronDocumentPanelHelper1(popcornElectronDocumentPanelParam238.textStyle),
    paragraphStyle: popcornElectronDocumentPanelValue634,
    spaceBefore: popcornElectronDocumentPanelParam238.spaceBefore,
    spaceAfter: popcornElectronDocumentPanelParam238.spaceAfter,
    tags: []
  };
}
function popcornElectronDocumentPanelHelper3() {
  let popcornElectronDocumentPanelValue852 = new popcornElectronDocumentPanelImport7({
    stub: () => {}
  }, undefined);
  return popcornElectronDocumentPanelValue852.colorScheme = {
    name: "Office",
    themeColors: {
      ...popcornElectronDocumentPanelValue3
    }
  }, popcornElectronDocumentPanelValue852.toProto();
}
function popcornElectronDocumentPanelHelper4() {
  return [{
    name: "Aptos",
    family: "swiss",
    embeddedFonts: []
  }, {
    name: "Aptos Display",
    family: "swiss",
    embeddedFonts: []
  }, {
    name: "Times New Roman",
    family: "roman",
    embeddedFonts: []
  }, {
    name: "Cambria Math",
    family: "roman",
    embeddedFonts: []
  }];
}
function popcornElectronDocumentPanelHelper5() {
  return {
    defaultTabStop: 720
  };
}
function popcornElectronDocumentPanelHelper6() {
  return [popcornElectronDocumentPanelHelper2({
    id: "Normal",
    name: "Normal",
    textStyle: {
      typeface: "Aptos",
      fontSize: "12pt"
    },
    paragraphStyle: {
      lineSpacingPercent: 115833
    },
    spaceAfter: 160
  }), popcornElectronDocumentPanelHelper2({
    id: "Title",
    name: "Title",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos Display",
      fontSize: "28pt",
      color: "#1F1F1F"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceAfter: 80
  }), popcornElectronDocumentPanelHelper2({
    id: "Subtitle",
    name: "Subtitle",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos",
      fontSize: "14pt",
      color: "#6B7280"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceAfter: 80
  }), popcornElectronDocumentPanelHelper2({
    id: "Heading1",
    name: "Heading 1",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos Display",
      fontSize: "20pt",
      color: "#156082"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceBefore: 360,
    spaceAfter: 80
  }), popcornElectronDocumentPanelHelper2({
    id: "Heading2",
    name: "Heading 2",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos Display",
      fontSize: "16pt",
      color: "#156082"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceBefore: 160,
    spaceAfter: 80
  }), popcornElectronDocumentPanelHelper2({
    id: "Quote",
    name: "Quote",
    basedOn: "Normal",
    textStyle: {
      italic: true,
      color: "#6B7280"
    },
    paragraphStyle: {
      lineSpacingPercent: 115833
    },
    spaceBefore: 80,
    spaceAfter: 80
  }), popcornElectronDocumentPanelHelper2({
    id: "IntenseQuote",
    name: "Intense Quote",
    basedOn: "Quote",
    textStyle: {
      bold: true,
      color: "#156082"
    },
    paragraphStyle: {
      lineSpacingPercent: 115833
    },
    spaceBefore: 80,
    spaceAfter: 80
  }), popcornElectronDocumentPanelHelper2({
    id: "ListParagraph",
    name: "List Paragraph",
    basedOn: "Normal",
    paragraphStyle: {
      marginLeft: 457200,
      indent: -228600
    }
  }), popcornElectronDocumentPanelHelper2({
    id: "Caption",
    name: "Caption",
    basedOn: "Normal",
    textStyle: {
      fontSize: "9pt",
      italic: true,
      color: "#6B7280"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceAfter: 80
  })];
}
function popcornElectronDocumentPanelHelper7() {
  return {
    id: "doc-paragraph-1",
    runs: [{
      id: "doc-run-1",
      text: "Start writing here...",
      textStyle: undefined,
      hyperlink: undefined,
      citations: [],
      reviewMarkIds: []
    }],
    inlineNodes: [],
    textStyle: undefined,
    styleId: "Normal"
  };
}
function popcornElectronDocumentPanelHelper8() {
  return {
    id: "doc-element-1",
    type: presentationWt.ELEMENT_TYPE_TEXT,
    paragraphs: [popcornElectronDocumentPanelHelper7()],
    bbox: undefined,
    zIndex: 0,
    innerXml: "",
    outerXml: "",
    shape: undefined,
    image: undefined,
    chartReference: undefined,
    video: undefined,
    table: undefined,
    name: "",
    placeholderIndex: 0,
    placeholderType: "",
    effects: [],
    children: [],
    levelsStyles: [],
    fill: undefined,
    lineReference: undefined,
    fillReference: undefined,
    effectReference: undefined,
    fontReference: undefined,
    hyperlink: undefined,
    textStyle: undefined,
    citations: []
  };
}
function popcornElectronDocumentPanelHelper9() {
  let popcornElectronDocumentPanelValue362 = popcornElectronDocumentPanelHelper8(),
    popcornElectronDocumentPanelValue363 = popcornElectronDocumentPanelHelper8();
  return {
    id: "walnut-document",
    name: "New document",
    widthEmu: 12240,
    heightEmu: 15840,
    charts: [],
    elements: [popcornElectronDocumentPanelValue362],
    images: [],
    footnotes: [],
    comments: [],
    commentReferences: [],
    textStyles: popcornElectronDocumentPanelHelper6(),
    reviewMarks: [],
    tableStyleDefinitions: [],
    endnotes: [],
    settings: popcornElectronDocumentPanelHelper5(),
    theme: popcornElectronDocumentPanelHelper3(),
    fonts: popcornElectronDocumentPanelHelper4(),
    sections: [{
      id: "doc-section-1",
      breakType: documentW.SECTION_BREAK_TYPE_UNSPECIFIED,
      pageSetup: {
        widthEmu: 12240,
        heightEmu: 15840,
        pageMargin: undefined
      },
      columns: {
        count: 1,
        space: 0,
        widths: [],
        hasSeparatorLine: false
      },
      elements: [popcornElectronDocumentPanelValue363],
      header: undefined,
      footer: undefined,
      startsWithPageBreak: false,
      differentFirstPage: undefined,
      firstHeader: undefined,
      firstFooter: undefined
    }],
    numberingDefinitions: [],
    paragraphNumberings: []
  };
}
function popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam783) {
  return structuredClone(popcornElectronDocumentPanelParam783);
}
var popcornElectronDocumentPanelValue4 = class {
    #e;
    #t;
    constructor(popcornElectronDocumentPanelParam636 = [], popcornElectronDocumentPanelParam637 = {}) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam636);
      this.#t = popcornElectronDocumentPanelParam637.onMutated;
    }
    get items() {
      return popcornElectronDocumentPanelHelper10(this.#e);
    }
    getById(popcornElectronDocumentPanelParam545) {
      if (!popcornElectronDocumentPanelParam545) return;
      let popcornElectronDocumentPanelValue911 = this.#e.find(item => item.id === popcornElectronDocumentPanelParam545);
      return popcornElectronDocumentPanelValue911 ? popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue911) : undefined;
    }
    set(popcornElectronDocumentPanelParam476) {
      let popcornElectronDocumentPanelValue844 = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam476),
        popcornElectronDocumentPanelValue845 = this.#e.findIndex(item => item.id === popcornElectronDocumentPanelValue844.id);
      return popcornElectronDocumentPanelValue845 >= 0 ? this.#e[popcornElectronDocumentPanelValue845] = popcornElectronDocumentPanelValue844 : this.#e.push(popcornElectronDocumentPanelValue844), this.#t?.(), popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue844);
    }
    delete(popcornElectronDocumentPanelParam521) {
      let popcornElectronDocumentPanelValue891 = this.#e.findIndex(item => item.id === popcornElectronDocumentPanelParam521);
      return popcornElectronDocumentPanelValue891 < 0 ? false : (this.#e.splice(popcornElectronDocumentPanelValue891, 1), this.#t?.(), true);
    }
    replace(popcornElectronDocumentPanelParam751) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam751);
      this.#t?.();
    }
    toProto() {
      return popcornElectronDocumentPanelHelper10(this.#e);
    }
  },
  popcornElectronDocumentPanelValue5 = class {
    #e;
    #t;
    constructor(popcornElectronDocumentPanelParam638 = [], popcornElectronDocumentPanelParam639 = {}) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam638);
      this.#t = popcornElectronDocumentPanelParam639.onMutated;
    }
    get items() {
      return popcornElectronDocumentPanelHelper10(this.#e);
    }
    getByCommentId(popcornElectronDocumentPanelParam529) {
      if (!popcornElectronDocumentPanelParam529) return;
      let popcornElectronDocumentPanelValue894 = this.#e.find(item => item.commentId === popcornElectronDocumentPanelParam529);
      return popcornElectronDocumentPanelValue894 ? popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue894) : undefined;
    }
    set(popcornElectronDocumentPanelParam436) {
      let popcornElectronDocumentPanelValue812 = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam436),
        popcornElectronDocumentPanelValue813 = this.#e.findIndex(item => item.commentId === popcornElectronDocumentPanelValue812.commentId);
      return popcornElectronDocumentPanelValue813 >= 0 ? this.#e[popcornElectronDocumentPanelValue813] = popcornElectronDocumentPanelValue812 : this.#e.push(popcornElectronDocumentPanelValue812), this.#t?.(), popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue812);
    }
    delete(popcornElectronDocumentPanelParam503) {
      let popcornElectronDocumentPanelValue877 = this.#e.findIndex(item => item.commentId === popcornElectronDocumentPanelParam503);
      return popcornElectronDocumentPanelValue877 < 0 ? false : (this.#e.splice(popcornElectronDocumentPanelValue877, 1), this.#t?.(), true);
    }
    replace(popcornElectronDocumentPanelParam752) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam752);
      this.#t?.();
    }
    toProto() {
      return popcornElectronDocumentPanelHelper10(this.#e);
    }
  },
  popcornElectronDocumentPanelValue6 = class {
    #e;
    #t;
    #n;
    #r;
    constructor(popcornElectronDocumentPanelParam356) {
      this.#e = new popcornElectronDocumentPanelImport22({
        people: popcornElectronDocumentPanelParam356.people ?? [],
        threads: popcornElectronDocumentPanelParam356.threads ?? []
      });
      this.#t = popcornElectronDocumentPanelParam356.documentId ?? "";
      this.#n = popcornElectronDocumentPanelParam356.textElementId ?? "";
      this.#r = popcornElectronDocumentPanelParam356.resolveTextRange;
    }
    get people() {
      return this.#e.people;
    }
    get threads() {
      return this.#e.threads;
    }
    setSelf(popcornElectronDocumentPanelParam775) {
      return this.#e.setSelf(popcornElectronDocumentPanelParam775);
    }
    addThread(popcornElectronDocumentPanelParam546, popcornElectronDocumentPanelParam547, popcornElectronDocumentPanelParam548 = {}) {
      let popcornElectronDocumentPanelValue912 = this.#i(popcornElectronDocumentPanelParam546.textRange);
      return this.#e.addThread({
        proto: popcornElectronDocumentPanelValue912
      }, popcornElectronDocumentPanelParam547, popcornElectronDocumentPanelParam548);
    }
    toProto() {
      return this.#e.toProto();
    }
    #i(popcornElectronDocumentPanelParam324) {
      let popcornElectronDocumentPanelValue705 = this.#r(popcornElectronDocumentPanelParam324),
        popcornElectronDocumentPanelValue706 = popcornElectronDocumentPanelValue705?.startCp ?? 0,
        popcornElectronDocumentPanelValue707 = popcornElectronDocumentPanelValue705?.length ?? 0;
      return {
        textRange: {
          slideId: this.#t,
          elementId: this.#n,
          startCp: popcornElectronDocumentPanelValue706,
          length: popcornElectronDocumentPanelValue707
        }
      };
    }
  };
function popcornElectronDocumentPanelHelper11(popcornElectronDocumentPanelParam443, popcornElectronDocumentPanelParam444) {
  return popcornElectronDocumentPanelParam444 instanceof ArrayBuffer ? `ArrayBuffer:${popcornElectronDocumentPanelParam444.byteLength}` : ArrayBuffer.isView(popcornElectronDocumentPanelParam444) ? `${popcornElectronDocumentPanelParam444.constructor.name}:${popcornElectronDocumentPanelParam444.byteLength}` : popcornElectronDocumentPanelParam444;
}
function popcornElectronDocumentPanelHelper12(popcornElectronDocumentPanelParam778) {
  return JSON.stringify(popcornElectronDocumentPanelParam778, popcornElectronDocumentPanelHelper11);
}
var popcornElectronDocumentPanelValue7 = class {
    #e;
    #t;
    reset() {
      this.#e = undefined;
      this.#t = undefined;
    }
    getPages(popcornElectronDocumentPanelParam416, popcornElectronDocumentPanelParam417, popcornElectronDocumentPanelParam418 = "default") {
      let popcornElectronDocumentPanelValue802 = `${popcornElectronDocumentPanelParam418}:${popcornElectronDocumentPanelHelper12(popcornElectronDocumentPanelParam416)}`;
      if (popcornElectronDocumentPanelValue802 === this.#e && this.#t) return this.#t;
      let popcornElectronDocumentPanelValue803 = popcornElectronDocumentPanelParam417(popcornElectronDocumentPanelParam416);
      return this.#e = popcornElectronDocumentPanelValue802, this.#t = popcornElectronDocumentPanelValue803, popcornElectronDocumentPanelValue803;
    }
  },
  popcornElectronDocumentPanelValue8 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam747) {
      this.#e = structuredClone(popcornElectronDocumentPanelParam747);
    }
    get id() {
      return this.#e.id ?? "";
    }
    toProto() {
      return structuredClone(this.#e);
    }
  },
  popcornElectronDocumentPanelValue9 = class {
    #e = [];
    #t;
    #n;
    #r;
    #i;
    constructor(popcornElectronDocumentPanelParam336) {
      this.#t = popcornElectronDocumentPanelParam336.documentId ?? "";
      this.#n = popcornElectronDocumentPanelParam336.textElementId ?? "";
      this.#r = popcornElectronDocumentPanelParam336.resolveTextRange;
      this.#i = popcornElectronDocumentPanelParam336.onMutated;
      this.#e = (popcornElectronDocumentPanelParam336.endnotes ?? []).map(item => new popcornElectronDocumentPanelValue8(item));
    }
    get items() {
      return [...this.#e];
    }
    add(popcornElectronDocumentPanelParam311, popcornElectronDocumentPanelParam312) {
      let popcornElectronDocumentPanelValue697 = this.#a(popcornElectronDocumentPanelParam311),
        popcornElectronDocumentPanelValue698 = this.#o(popcornElectronDocumentPanelParam312.range),
        popcornElectronDocumentPanelValue699 = new popcornElectronDocumentPanelValue8({
          id: popcornElectronDocumentPanelImport17(),
          paragraphs: popcornElectronDocumentPanelValue697,
          referenceTextRange: popcornElectronDocumentPanelValue698,
          referenceRunIds: []
        });
      return this.#e.push(popcornElectronDocumentPanelValue699), this.#i?.(), popcornElectronDocumentPanelValue699;
    }
    replace(popcornElectronDocumentPanelParam685) {
      this.#e = popcornElectronDocumentPanelParam685.map(item => new popcornElectronDocumentPanelValue8(item));
      this.#i?.();
    }
    toProto() {
      return this.#e.map(item => item.toProto());
    }
    #a(popcornElectronDocumentPanelParam756) {
      return popcornElectronDocumentPanelImport18(popcornElectronDocumentPanelParam756) ? popcornElectronDocumentPanelImport37(popcornElectronDocumentPanelParam756) : popcornElectronDocumentPanelImport37([String(popcornElectronDocumentPanelParam756)]);
    }
    #o(popcornElectronDocumentPanelParam407) {
      let popcornElectronDocumentPanelValue789 = this.#r(popcornElectronDocumentPanelParam407);
      if (popcornElectronDocumentPanelValue789) return {
        slideId: this.#t,
        elementId: this.#n,
        startCp: popcornElectronDocumentPanelValue789.startCp,
        length: popcornElectronDocumentPanelValue789.length
      };
    }
  },
  popcornElectronDocumentPanelValue10 = class {
    #e;
    #t;
    constructor(popcornElectronDocumentPanelParam640 = [], popcornElectronDocumentPanelParam641 = {}) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam640);
      this.#t = popcornElectronDocumentPanelParam641.onMutated;
    }
    get items() {
      return popcornElectronDocumentPanelHelper10(this.#e);
    }
    getByName(popcornElectronDocumentPanelParam538) {
      if (!popcornElectronDocumentPanelParam538) return;
      let popcornElectronDocumentPanelValue906 = this.#e.find(item => item.name === popcornElectronDocumentPanelParam538);
      return popcornElectronDocumentPanelValue906 ? popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue906) : undefined;
    }
    set(popcornElectronDocumentPanelParam467) {
      let popcornElectronDocumentPanelValue836 = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam467),
        popcornElectronDocumentPanelValue837 = this.#e.findIndex(item => item.name === popcornElectronDocumentPanelValue836.name);
      return popcornElectronDocumentPanelValue837 >= 0 ? this.#e[popcornElectronDocumentPanelValue837] = popcornElectronDocumentPanelValue836 : this.#e.push(popcornElectronDocumentPanelValue836), this.#t?.(), popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue836);
    }
    delete(popcornElectronDocumentPanelParam516) {
      let popcornElectronDocumentPanelValue885 = this.#e.findIndex(item => item.name === popcornElectronDocumentPanelParam516);
      return popcornElectronDocumentPanelValue885 < 0 ? false : (this.#e.splice(popcornElectronDocumentPanelValue885, 1), this.#t?.(), true);
    }
    replace(popcornElectronDocumentPanelParam753) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam753);
      this.#t?.();
    }
    toProto() {
      return popcornElectronDocumentPanelHelper10(this.#e);
    }
  },
  popcornElectronDocumentPanelValue11 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam798) {
      this.#e = popcornElectronDocumentPanelParam798;
    }
    get id() {
      return this.#e.id ?? "";
    }
    toProto() {
      return {
        ...this.#e,
        referenceRunIds: this.#e.referenceRunIds ?? [],
        paragraphs: this.#e.paragraphs ? this.#e.paragraphs.map(item => ({
          ...item,
          runs: item.runs?.map(popcornElectronDocumentPanelParam835 => ({
            ...popcornElectronDocumentPanelParam835
          })) ?? []
        })) : []
      };
    }
  },
  popcornElectronDocumentPanelValue12 = class {
    #e = [];
    #t;
    #n;
    #r;
    #i;
    constructor(popcornElectronDocumentPanelParam335) {
      this.#t = popcornElectronDocumentPanelParam335.documentId ?? "";
      this.#n = popcornElectronDocumentPanelParam335.textElementId ?? "";
      this.#r = popcornElectronDocumentPanelParam335.resolveTextRange;
      this.#i = popcornElectronDocumentPanelParam335.onMutated;
      this.#e = (popcornElectronDocumentPanelParam335.footnotes ?? []).map(item => new popcornElectronDocumentPanelValue11(item));
    }
    add(popcornElectronDocumentPanelParam313, popcornElectronDocumentPanelParam314) {
      let popcornElectronDocumentPanelValue700 = this.#a(popcornElectronDocumentPanelParam313),
        popcornElectronDocumentPanelValue701 = this.#o(popcornElectronDocumentPanelParam314.range),
        popcornElectronDocumentPanelValue702 = new popcornElectronDocumentPanelValue11({
          id: popcornElectronDocumentPanelImport17(),
          paragraphs: popcornElectronDocumentPanelValue700,
          referenceTextRange: popcornElectronDocumentPanelValue701,
          referenceRunIds: []
        });
      return this.#e.push(popcornElectronDocumentPanelValue702), this.#i?.(), popcornElectronDocumentPanelValue702;
    }
    toProto() {
      return this.#e.map(item => item.toProto());
    }
    #a(popcornElectronDocumentPanelParam757) {
      return popcornElectronDocumentPanelImport18(popcornElectronDocumentPanelParam757) ? popcornElectronDocumentPanelImport37(popcornElectronDocumentPanelParam757) : popcornElectronDocumentPanelImport37([String(popcornElectronDocumentPanelParam757)]);
    }
    #o(popcornElectronDocumentPanelParam408) {
      let popcornElectronDocumentPanelValue790 = this.#r(popcornElectronDocumentPanelParam408);
      if (popcornElectronDocumentPanelValue790) return {
        slideId: this.#t,
        elementId: this.#n,
        startCp: popcornElectronDocumentPanelValue790.startCp,
        length: popcornElectronDocumentPanelValue790.length
      };
    }
  };
function popcornElectronDocumentPanelHelper13(popcornElectronDocumentPanelParam642) {
  let popcornElectronDocumentPanelValue957 = popcornElectronDocumentPanelParam642 === undefined ? 1 : Math.floor(popcornElectronDocumentPanelParam642);
  return popcornElectronDocumentPanelValue957 > 1 ? popcornElectronDocumentPanelValue957 : 1;
}
function popcornElectronDocumentPanelHelper14(popcornElectronDocumentPanelParam485) {
  for (let popcornElectronDocumentPanelValue908 of popcornElectronDocumentPanelParam485) for (let popcornElectronDocumentPanelValue935 of popcornElectronDocumentPanelValue908.cells ?? []) if (popcornElectronDocumentPanelValue935.horizontalMerge === false || popcornElectronDocumentPanelValue935.verticalMerge === false) return true;
  return false;
}
function popcornElectronDocumentPanelHelper15(popcornElectronDocumentPanelParam625) {
  return popcornElectronDocumentPanelParam625.map(item => ({
    ...item,
    cells: item.cells.map(_item => ({
      ..._item
    }))
  }));
}
function popcornElectronDocumentPanelHelper16(popcornElectronDocumentPanelParam127) {
  for (let popcornElectronDocumentPanelValue503 of popcornElectronDocumentPanelParam127) for (let popcornElectronDocumentPanelValue527 = 0; popcornElectronDocumentPanelValue527 < popcornElectronDocumentPanelValue503.cells.length; popcornElectronDocumentPanelValue527 += 1) {
    let popcornElectronDocumentPanelValue539 = popcornElectronDocumentPanelValue503.cells[popcornElectronDocumentPanelValue527];
    if (!popcornElectronDocumentPanelValue539 || popcornElectronDocumentPanelValue539.horizontalMerge !== true) {
      popcornElectronDocumentPanelValue539?.horizontalMerge === false && (popcornElectronDocumentPanelValue539.horizontalMerge = true);
      continue;
    }
    let popcornElectronDocumentPanelValue540 = popcornElectronDocumentPanelHelper13(popcornElectronDocumentPanelValue539.gridSpan),
      popcornElectronDocumentPanelValue541 = popcornElectronDocumentPanelValue527 + 1;
    for (; popcornElectronDocumentPanelValue541 < popcornElectronDocumentPanelValue503.cells.length;) {
      let popcornElectronDocumentPanelValue856 = popcornElectronDocumentPanelValue503.cells[popcornElectronDocumentPanelValue541];
      if (!popcornElectronDocumentPanelValue856 || popcornElectronDocumentPanelValue856.horizontalMerge !== false) break;
      popcornElectronDocumentPanelValue540 += popcornElectronDocumentPanelHelper13(popcornElectronDocumentPanelValue856.gridSpan);
      popcornElectronDocumentPanelValue856.horizontalMerge = true;
      popcornElectronDocumentPanelValue541 += 1;
    }
    popcornElectronDocumentPanelValue540 > 1 && (popcornElectronDocumentPanelValue539.gridSpan = popcornElectronDocumentPanelValue540);
    popcornElectronDocumentPanelValue539.horizontalMerge = undefined;
  }
}
function popcornElectronDocumentPanelHelper17(popcornElectronDocumentPanelParam338) {
  let popcornElectronDocumentPanelValue733 = [],
    popcornElectronDocumentPanelValue734 = 0;
  for (let popcornElectronDocumentPanelValue814 of popcornElectronDocumentPanelParam338.cells ?? []) {
    if (!popcornElectronDocumentPanelValue814 || popcornElectronDocumentPanelValue814.horizontalMerge === true) continue;
    let popcornElectronDocumentPanelValue864 = popcornElectronDocumentPanelHelper13(popcornElectronDocumentPanelValue814.gridSpan);
    popcornElectronDocumentPanelValue733.push({
      cell: popcornElectronDocumentPanelValue814,
      columnIndex: popcornElectronDocumentPanelValue734,
      columnSpan: popcornElectronDocumentPanelValue864
    });
    popcornElectronDocumentPanelValue734 += popcornElectronDocumentPanelValue864;
  }
  return popcornElectronDocumentPanelValue733;
}
function popcornElectronDocumentPanelHelper18(popcornElectronDocumentPanelParam63) {
  let popcornElectronDocumentPanelValue400 = new Map(),
    popcornElectronDocumentPanelValue401 = new Set();
  for (let popcornElectronDocumentPanelValue464 of popcornElectronDocumentPanelParam63) {
    let popcornElectronDocumentPanelValue471 = popcornElectronDocumentPanelHelper17(popcornElectronDocumentPanelValue464);
    for (let popcornElectronDocumentPanelValue483 of popcornElectronDocumentPanelValue471) {
      let {
        cell,
        columnIndex,
        columnSpan
      } = popcornElectronDocumentPanelValue483;
      if (cell.verticalMerge === true) {
        let popcornElectronDocumentPanelValue822 = {
          cell,
          rowSpan: 1
        };
        popcornElectronDocumentPanelValue401.add(popcornElectronDocumentPanelValue822);
        for (let popcornElectronDocumentPanelValue986 = 0; popcornElectronDocumentPanelValue986 < columnSpan; popcornElectronDocumentPanelValue986 += 1) popcornElectronDocumentPanelValue400.set(columnIndex + popcornElectronDocumentPanelValue986, popcornElectronDocumentPanelValue822);
        cell.verticalMerge = undefined;
        continue;
      }
      if (cell.verticalMerge === false) {
        let popcornElectronDocumentPanelValue793 = popcornElectronDocumentPanelValue400.get(columnIndex);
        if (popcornElectronDocumentPanelValue793) {
          popcornElectronDocumentPanelValue793.rowSpan += 1;
          for (let popcornElectronDocumentPanelValue987 = 0; popcornElectronDocumentPanelValue987 < columnSpan; popcornElectronDocumentPanelValue987 += 1) popcornElectronDocumentPanelValue400.set(columnIndex + popcornElectronDocumentPanelValue987, popcornElectronDocumentPanelValue793);
        }
        cell.verticalMerge = true;
        continue;
      }
      for (let popcornElectronDocumentPanelValue988 = 0; popcornElectronDocumentPanelValue988 < columnSpan; popcornElectronDocumentPanelValue988 += 1) popcornElectronDocumentPanelValue400.delete(columnIndex + popcornElectronDocumentPanelValue988);
    }
  }
  let popcornElectronDocumentPanelValue402 = new Set();
  for (let popcornElectronDocumentPanelValue865 of popcornElectronDocumentPanelValue401) popcornElectronDocumentPanelValue402.has(popcornElectronDocumentPanelValue865.cell) || (popcornElectronDocumentPanelValue402.add(popcornElectronDocumentPanelValue865.cell), popcornElectronDocumentPanelValue865.rowSpan > 1 && (popcornElectronDocumentPanelValue865.cell.rowSpan = Math.max(popcornElectronDocumentPanelHelper13(popcornElectronDocumentPanelValue865.cell.rowSpan), popcornElectronDocumentPanelValue865.rowSpan)));
}
function popcornElectronDocumentPanelHelper19(popcornElectronDocumentPanelParam445) {
  let popcornElectronDocumentPanelValue820 = popcornElectronDocumentPanelParam445.table;
  if (!popcornElectronDocumentPanelValue820 || popcornElectronDocumentPanelValue820.rows.length === 0 || !popcornElectronDocumentPanelHelper14(popcornElectronDocumentPanelValue820.rows)) return popcornElectronDocumentPanelParam445;
  let popcornElectronDocumentPanelValue821 = popcornElectronDocumentPanelHelper15(popcornElectronDocumentPanelValue820.rows);
  return popcornElectronDocumentPanelHelper16(popcornElectronDocumentPanelValue821), popcornElectronDocumentPanelHelper18(popcornElectronDocumentPanelValue821), {
    ...popcornElectronDocumentPanelParam445,
    table: {
      ...popcornElectronDocumentPanelValue820,
      rows: popcornElectronDocumentPanelValue821
    }
  };
}
var $e = {
    accent1: "accent1",
    accent2: "accent2",
    accent3: "accent3",
    accent4: "accent4",
    accent5: "accent5",
    accent6: "accent6",
    bg1: "lt1",
    tx1: "dk1",
    bg2: "lt2",
    tx2: "dk2",
    hlink: "hlink",
    folHlink: "folHlink"
  },
  popcornElectronDocumentPanelValue13 = popcornElectronDocumentPanelImport29(new popcornElectronDocumentPanelImport7({
    stub: () => {}
  }, undefined), $e);
function popcornElectronDocumentPanelHelper20(popcornElectronDocumentPanelParam807) {
  return popcornElectronDocumentPanelImport29(popcornElectronDocumentPanelParam807, $e);
}
function popcornElectronDocumentPanelHelper21(popcornElectronDocumentPanelParam737) {
  return popcornElectronDocumentPanelHelper20(new popcornElectronDocumentPanelImport7({
    stub: () => {}
  }, popcornElectronDocumentPanelParam737));
}
function popcornElectronDocumentPanelHelper22(popcornElectronDocumentPanelParam210, popcornElectronDocumentPanelParam211, popcornElectronDocumentPanelParam212, popcornElectronDocumentPanelParam213 = popcornElectronDocumentPanelValue13) {
  return !popcornElectronDocumentPanelParam210.paragraphs || popcornElectronDocumentPanelParam210.paragraphs.length === 0 ? 0 : popcornElectronDocumentPanelImport6(popcornElectronDocumentPanelParam210, popcornElectronDocumentPanelParam211, popcornElectronDocumentPanelParam213, undefined, {
    mode: "layout",
    bboxPx: {
      x: 0,
      y: 0,
      width: Math.max(1, popcornElectronDocumentPanelParam212),
      height: 1e5
    },
    paddingPx: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    wrap: true,
    paragraphSpacingUnit: "twips"
  })?.height ?? Math.max(18, popcornElectronDocumentPanelParam210.paragraphs.length * 18);
}
function popcornElectronDocumentPanelHelper23(popcornElectronDocumentPanelParam725) {
  if (!(popcornElectronDocumentPanelParam725 === undefined || popcornElectronDocumentPanelParam725 <= 0)) return popcornElectronDocumentPanelParam725 * popcornElectronDocumentPanelImport5;
}
function popcornElectronDocumentPanelHelper24(popcornElectronDocumentPanelParam672) {
  if (!(popcornElectronDocumentPanelParam672 === undefined || !Number.isFinite(popcornElectronDocumentPanelParam672))) return popcornElectronDocumentPanelParam672 * popcornElectronDocumentPanelImport5;
}
function popcornElectronDocumentPanelHelper25(popcornElectronDocumentPanelParam559, popcornElectronDocumentPanelParam560) {
  if (popcornElectronDocumentPanelParam559) {
    for (let popcornElectronDocumentPanelValue967 of popcornElectronDocumentPanelParam559.split(";")) if (popcornElectronDocumentPanelValue967.startsWith(popcornElectronDocumentPanelParam560)) return popcornElectronDocumentPanelValue967.slice(popcornElectronDocumentPanelParam560.length);
  }
}
function popcornElectronDocumentPanelHelper26(popcornElectronDocumentPanelParam500, popcornElectronDocumentPanelParam501, popcornElectronDocumentPanelParam502) {
  return popcornElectronDocumentPanelParam500.placement?.type === popcornElectronDocumentPanelParam501 && popcornElectronDocumentPanelParam500.placement.anchorParagraphId ? popcornElectronDocumentPanelParam500.placement.anchorParagraphId : popcornElectronDocumentPanelHelper25(popcornElectronDocumentPanelParam500.id, popcornElectronDocumentPanelParam502);
}
function popcornElectronDocumentPanelHelper27(popcornElectronDocumentPanelParam232, popcornElectronDocumentPanelParam233 = {
  widthPx: 180,
  heightPx: 120
}) {
  if (!popcornElectronDocumentPanelParam232.bbox) return popcornElectronDocumentPanelParam233;
  let popcornElectronDocumentPanelValue627 = popcornElectronDocumentPanelHelper23(popcornElectronDocumentPanelParam232.bbox.widthEmu),
    popcornElectronDocumentPanelValue628 = popcornElectronDocumentPanelHelper23(popcornElectronDocumentPanelParam232.bbox.heightEmu);
  return popcornElectronDocumentPanelValue627 !== undefined && popcornElectronDocumentPanelValue628 !== undefined ? {
    widthPx: popcornElectronDocumentPanelValue627,
    heightPx: popcornElectronDocumentPanelValue628
  } : popcornElectronDocumentPanelValue627 === undefined ? popcornElectronDocumentPanelValue628 === undefined ? popcornElectronDocumentPanelParam233 : {
    widthPx: 1,
    heightPx: popcornElectronDocumentPanelValue628
  } : {
    widthPx: popcornElectronDocumentPanelValue627,
    heightPx: 1
  };
}
function _t(popcornElectronDocumentPanelParam764, popcornElectronDocumentPanelParam765) {
  return popcornElectronDocumentPanelHelper24(popcornElectronDocumentPanelParam764.bbox?.xEmu) ?? popcornElectronDocumentPanelParam765;
}
function popcornElectronDocumentPanelHelper28(popcornElectronDocumentPanelParam766, popcornElectronDocumentPanelParam767) {
  return popcornElectronDocumentPanelHelper24(popcornElectronDocumentPanelParam766.bbox?.yEmu) ?? popcornElectronDocumentPanelParam767;
}
function popcornElectronDocumentPanelHelper29(popcornElectronDocumentPanelParam305, popcornElectronDocumentPanelParam306) {
  let popcornElectronDocumentPanelValue689 = popcornElectronDocumentPanelHelper26(popcornElectronDocumentPanelParam305, 2, "__docxAnchorParagraphId:"),
    popcornElectronDocumentPanelValue690 = popcornElectronDocumentPanelHelper24(popcornElectronDocumentPanelParam305.placement?.yOffsetEmu) ?? popcornElectronDocumentPanelHelper24(popcornElectronDocumentPanelParam305.bbox?.yEmu) ?? 0;
  if (popcornElectronDocumentPanelParam305.placement?.verticalRelativeFrom?.trim().toLowerCase() === "page") return popcornElectronDocumentPanelValue690;
  if (!popcornElectronDocumentPanelValue689) return;
  let popcornElectronDocumentPanelValue691 = popcornElectronDocumentPanelParam306.get(popcornElectronDocumentPanelValue689);
  if (popcornElectronDocumentPanelValue691 !== undefined) return popcornElectronDocumentPanelValue691 + popcornElectronDocumentPanelValue690;
}
function popcornElectronDocumentPanelHelper30(popcornElectronDocumentPanelParam510, popcornElectronDocumentPanelParam511) {
  let popcornElectronDocumentPanelValue879 = popcornElectronDocumentPanelHelper26(popcornElectronDocumentPanelParam510, 1, "__docxInlineParagraphId:");
  if (!popcornElectronDocumentPanelValue879) return;
  let popcornElectronDocumentPanelValue880 = popcornElectronDocumentPanelParam511.get(popcornElectronDocumentPanelValue879);
  if (popcornElectronDocumentPanelValue880 !== undefined) return popcornElectronDocumentPanelValue880 + (popcornElectronDocumentPanelHelper24(popcornElectronDocumentPanelParam510.bbox?.yEmu) ?? 0);
}
function popcornElectronDocumentPanelHelper31(popcornElectronDocumentPanelParam768) {
  return popcornElectronDocumentPanelHelper26(popcornElectronDocumentPanelParam768, 1, "__docxInlineParagraphId:") !== undefined;
}
function popcornElectronDocumentPanelHelper32(popcornElectronDocumentPanelParam810) {
  return popcornElectronDocumentPanelHelper27(popcornElectronDocumentPanelParam810);
}
function popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelParam813) {
  return popcornElectronDocumentPanelImport12(popcornElectronDocumentPanelParam813);
}
function popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam811) {
  return popcornElectronDocumentPanelParam811 / popcornElectronDocumentPanelImport5;
}
function popcornElectronDocumentPanelHelper35(popcornElectronDocumentPanelParam341) {
  let popcornElectronDocumentPanelValue740 = popcornElectronDocumentPanelParam341.table;
  if (!popcornElectronDocumentPanelValue740 || popcornElectronDocumentPanelValue740.rows.length === 0) return 0;
  let popcornElectronDocumentPanelValue741 = 0;
  for (let popcornElectronDocumentPanelValue947 of popcornElectronDocumentPanelValue740.rows) popcornElectronDocumentPanelValue947.heightEmu && popcornElectronDocumentPanelValue947.heightEmu > 0 ? popcornElectronDocumentPanelValue741 += popcornElectronDocumentPanelValue947.heightEmu * popcornElectronDocumentPanelImport5 : popcornElectronDocumentPanelValue741 += 24;
  return Math.max(popcornElectronDocumentPanelValue741, popcornElectronDocumentPanelValue740.rows.length * 24);
}
function popcornElectronDocumentPanelHelper36(popcornElectronDocumentPanelParam430, popcornElectronDocumentPanelParam431) {
  let popcornElectronDocumentPanelValue811 = popcornElectronDocumentPanelParam430.bbox?.widthEmu !== undefined && popcornElectronDocumentPanelParam430.bbox.widthEmu > 0 ? popcornElectronDocumentPanelParam430.bbox.widthEmu * popcornElectronDocumentPanelImport5 : undefined;
  return popcornElectronDocumentPanelValue811 && Number.isFinite(popcornElectronDocumentPanelValue811) && popcornElectronDocumentPanelValue811 > 0 ? popcornElectronDocumentPanelValue811 : popcornElectronDocumentPanelParam431;
}
function popcornElectronDocumentPanelHelper37(popcornElectronDocumentPanelParam522, popcornElectronDocumentPanelParam523) {
  let popcornElectronDocumentPanelValue892 = popcornElectronDocumentPanelParam522.bbox?.xEmu === undefined ? undefined : popcornElectronDocumentPanelParam522.bbox.xEmu * popcornElectronDocumentPanelImport5;
  return popcornElectronDocumentPanelValue892 !== undefined && Number.isFinite(popcornElectronDocumentPanelValue892) ? popcornElectronDocumentPanelValue892 : popcornElectronDocumentPanelParam523;
}
function popcornElectronDocumentPanelHelper38(popcornElectronDocumentPanelParam694, popcornElectronDocumentPanelParam695, popcornElectronDocumentPanelParam696, popcornElectronDocumentPanelParam697 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam698) {
  return popcornElectronDocumentPanelHelper41(popcornElectronDocumentPanelParam694, popcornElectronDocumentPanelParam695, popcornElectronDocumentPanelParam696, popcornElectronDocumentPanelParam697, popcornElectronDocumentPanelParam698).heightPx;
}
function popcornElectronDocumentPanelHelper39(popcornElectronDocumentPanelParam105, popcornElectronDocumentPanelParam106, popcornElectronDocumentPanelParam107, popcornElectronDocumentPanelParam108, popcornElectronDocumentPanelParam109) {
  let popcornElectronDocumentPanelValue463 = popcornElectronDocumentPanelParam105.table;
  if (!(!popcornElectronDocumentPanelValue463 || popcornElectronDocumentPanelValue463.rows.length === 0)) return popcornElectronDocumentPanelImport27(popcornElectronDocumentPanelHelper19({
    ...popcornElectronDocumentPanelParam105,
    type: presentationWt.ELEMENT_TYPE_TABLE,
    bbox: {
      xEmu: 0,
      yEmu: 0,
      widthEmu: popcornElectronDocumentPanelHelper34(Math.max(1, popcornElectronDocumentPanelParam107)),
      heightEmu: popcornElectronDocumentPanelParam105.bbox?.heightEmu
    }
  }), popcornElectronDocumentPanelParam106, popcornElectronDocumentPanelParam108, {
    paragraphSpacingUnit: "twips",
    explicitRowHeightBehavior: "atLeast",
    autoRowMinimumHeightPx: 0,
    fitColumnWidthsToFrame: true,
    drawDefaultCellBorders: false,
    collapseParagraphBoundarySpacing: false,
    documentGridLinePitchTwips: popcornElectronDocumentPanelParam109
  });
}
function popcornElectronDocumentPanelHelper40(popcornElectronDocumentPanelParam515) {
  let popcornElectronDocumentPanelValue883 = popcornElectronDocumentPanelParam515.table;
  return popcornElectronDocumentPanelValue883 ? popcornElectronDocumentPanelValue883.rows.map(item => item.heightEmu && item.heightEmu > 0 ? item.heightEmu * popcornElectronDocumentPanelImport5 : 24) : [];
}
function popcornElectronDocumentPanelHelper41(popcornElectronDocumentPanelParam193, popcornElectronDocumentPanelParam194, popcornElectronDocumentPanelParam195, popcornElectronDocumentPanelParam196 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam197) {
  let popcornElectronDocumentPanelValue567 = popcornElectronDocumentPanelParam193.table;
  if (!popcornElectronDocumentPanelValue567 || popcornElectronDocumentPanelValue567.rows.length === 0) return {
    widthPx: popcornElectronDocumentPanelParam195,
    heightPx: 0,
    rowHeightsPx: []
  };
  let popcornElectronDocumentPanelValue568 = popcornElectronDocumentPanelHelper39(popcornElectronDocumentPanelParam193, popcornElectronDocumentPanelParam194, popcornElectronDocumentPanelParam195, popcornElectronDocumentPanelParam196, popcornElectronDocumentPanelParam197),
    popcornElectronDocumentPanelValue569 = popcornElectronDocumentPanelHelper40(popcornElectronDocumentPanelParam193),
    popcornElectronDocumentPanelValue570 = popcornElectronDocumentPanelValue568?.rowHeightsPx.length === popcornElectronDocumentPanelValue567.rows.length ? popcornElectronDocumentPanelValue568.rowHeightsPx : popcornElectronDocumentPanelValue569,
    popcornElectronDocumentPanelValue571 = popcornElectronDocumentPanelHelper35(popcornElectronDocumentPanelParam193),
    popcornElectronDocumentPanelValue572 = popcornElectronDocumentPanelValue568 && popcornElectronDocumentPanelValue568.heightPx > 0 ? popcornElectronDocumentPanelValue568.heightPx : popcornElectronDocumentPanelValue570.reduce((accumulator, current) => accumulator + current, 0);
  return {
    widthPx: popcornElectronDocumentPanelParam195,
    heightPx: popcornElectronDocumentPanelValue572 > 0 ? popcornElectronDocumentPanelValue572 : popcornElectronDocumentPanelValue571,
    rowHeightsPx: popcornElectronDocumentPanelValue570
  };
}
function popcornElectronDocumentPanelHelper42() {
  return [];
}
function popcornElectronDocumentPanelHelper43(popcornElectronDocumentPanelParam769) {
  return popcornElectronDocumentPanelParam769.map(item => ({
    ...item
  }));
}
function popcornElectronDocumentPanelHelper44(popcornElectronDocumentPanelParam719, popcornElectronDocumentPanelParam720, popcornElectronDocumentPanelParam721, popcornElectronDocumentPanelParam722) {
  return popcornElectronDocumentPanelParam719 < popcornElectronDocumentPanelParam722 - 0.01 && popcornElectronDocumentPanelParam721 < popcornElectronDocumentPanelParam720 - 0.01;
}
function popcornElectronDocumentPanelHelper45(popcornElectronDocumentPanelParam432, popcornElectronDocumentPanelParam433) {
  return popcornElectronDocumentPanelParam432.emptyTextOnly === popcornElectronDocumentPanelParam433.emptyTextOnly && popcornElectronDocumentPanelHelper44(popcornElectronDocumentPanelParam432.leftPx, popcornElectronDocumentPanelParam432.rightPx, popcornElectronDocumentPanelParam433.leftPx, popcornElectronDocumentPanelParam433.rightPx) && popcornElectronDocumentPanelHelper44(popcornElectronDocumentPanelParam432.topPx, popcornElectronDocumentPanelParam432.bottomPx, popcornElectronDocumentPanelParam433.topPx, popcornElectronDocumentPanelParam433.bottomPx);
}
function popcornElectronDocumentPanelHelper46(popcornElectronDocumentPanelParam770, popcornElectronDocumentPanelParam771) {
  return !popcornElectronDocumentPanelParam770.emptyTextOnly || popcornElectronDocumentPanelParam771;
}
function popcornElectronDocumentPanelHelper47(popcornElectronDocumentPanelParam117, popcornElectronDocumentPanelParam118) {
  let popcornElectronDocumentPanelValue477 = {
      ...popcornElectronDocumentPanelParam118
    },
    popcornElectronDocumentPanelValue478 = true;
  for (; popcornElectronDocumentPanelValue478;) {
    popcornElectronDocumentPanelValue478 = false;
    for (let popcornElectronDocumentPanelValue611 = popcornElectronDocumentPanelParam117.length - 1; popcornElectronDocumentPanelValue611 >= 0; --popcornElectronDocumentPanelValue611) {
      let popcornElectronDocumentPanelValue649 = popcornElectronDocumentPanelParam117[popcornElectronDocumentPanelValue611];
      !popcornElectronDocumentPanelValue649 || !popcornElectronDocumentPanelHelper45(popcornElectronDocumentPanelValue649, popcornElectronDocumentPanelValue477) || (popcornElectronDocumentPanelValue477.leftPx = Math.min(popcornElectronDocumentPanelValue477.leftPx, popcornElectronDocumentPanelValue649.leftPx), popcornElectronDocumentPanelValue477.rightPx = Math.max(popcornElectronDocumentPanelValue477.rightPx, popcornElectronDocumentPanelValue649.rightPx), popcornElectronDocumentPanelValue477.topPx = Math.min(popcornElectronDocumentPanelValue477.topPx, popcornElectronDocumentPanelValue649.topPx), popcornElectronDocumentPanelValue477.bottomPx = Math.max(popcornElectronDocumentPanelValue477.bottomPx, popcornElectronDocumentPanelValue649.bottomPx), popcornElectronDocumentPanelParam117.splice(popcornElectronDocumentPanelValue611, 1), popcornElectronDocumentPanelValue478 = true);
    }
  }
  popcornElectronDocumentPanelParam117.push(popcornElectronDocumentPanelValue477);
  popcornElectronDocumentPanelParam117.sort((popcornElectronDocumentPanelParam579, popcornElectronDocumentPanelParam580) => Math.abs(popcornElectronDocumentPanelParam579.topPx - popcornElectronDocumentPanelParam580.topPx) > 0.01 ? popcornElectronDocumentPanelParam579.topPx - popcornElectronDocumentPanelParam580.topPx : popcornElectronDocumentPanelParam579.leftPx - popcornElectronDocumentPanelParam580.leftPx);
}
function popcornElectronDocumentPanelHelper48(popcornElectronDocumentPanelParam96, popcornElectronDocumentPanelParam97, popcornElectronDocumentPanelParam98, popcornElectronDocumentPanelParam99, popcornElectronDocumentPanelParam100, popcornElectronDocumentPanelParam101 = 0, popcornElectronDocumentPanelParam102 = false) {
  let popcornElectronDocumentPanelValue451 = popcornElectronDocumentPanelParam97 + popcornElectronDocumentPanelParam98,
    popcornElectronDocumentPanelValue452 = popcornElectronDocumentPanelParam99,
    popcornElectronDocumentPanelValue453 = Math.max(0, popcornElectronDocumentPanelParam101);
  for (;;) {
    let popcornElectronDocumentPanelValue494 = popcornElectronDocumentPanelParam96.find(item => popcornElectronDocumentPanelHelper46(item, popcornElectronDocumentPanelParam102) && popcornElectronDocumentPanelHelper44(popcornElectronDocumentPanelParam97, popcornElectronDocumentPanelValue451, item.leftPx, item.rightPx) && popcornElectronDocumentPanelValue452 >= item.topPx - 0.01 && popcornElectronDocumentPanelValue452 < item.bottomPx - 0.01);
    if (!popcornElectronDocumentPanelValue494) {
      let popcornElectronDocumentPanelValue609 = popcornElectronDocumentPanelParam96.filter(item => popcornElectronDocumentPanelHelper46(item, popcornElectronDocumentPanelParam102) && popcornElectronDocumentPanelHelper44(popcornElectronDocumentPanelParam97, popcornElectronDocumentPanelValue451, item.leftPx, item.rightPx) && item.topPx > popcornElectronDocumentPanelValue452 + 0.01).sort((popcornElectronDocumentPanelParam820, popcornElectronDocumentPanelParam821) => popcornElectronDocumentPanelParam820.topPx - popcornElectronDocumentPanelParam821.topPx)[0],
        popcornElectronDocumentPanelValue610 = Math.min(popcornElectronDocumentPanelParam100, popcornElectronDocumentPanelValue609?.topPx ?? popcornElectronDocumentPanelParam100);
      if (!popcornElectronDocumentPanelValue609 || popcornElectronDocumentPanelValue610 - popcornElectronDocumentPanelValue452 >= popcornElectronDocumentPanelValue453 - 0.01) return {
        currentY: popcornElectronDocumentPanelValue452,
        boundaryBottomPx: popcornElectronDocumentPanelValue610
      };
      popcornElectronDocumentPanelValue452 = popcornElectronDocumentPanelValue609.bottomPx;
      continue;
    }
    popcornElectronDocumentPanelValue452 = popcornElectronDocumentPanelValue494.bottomPx;
  }
}
var popcornElectronDocumentPanelValue25 = {
  top: 1440,
  bottom: 1440,
  left: 1440,
  right: 1440,
  header: 720,
  footer: 720,
  gutter: 0
};
function popcornElectronDocumentPanelHelper49(popcornElectronDocumentPanelParam121) {
  return popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_TABLE || popcornElectronDocumentPanelParam121.table ? "table" : popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_CHART || popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_CHART_REFERENCE || popcornElectronDocumentPanelParam121.chartReference ? "chart" : popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_IMAGE || popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_IMAGE_REFERENCE || popcornElectronDocumentPanelParam121.imageReference || popcornElectronDocumentPanelParam121.image ? "image" : popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_SHAPE || popcornElectronDocumentPanelParam121.shape ? "shape" : popcornElectronDocumentPanelParam121.type === presentationWt.ELEMENT_TYPE_GROUP || (popcornElectronDocumentPanelParam121.children?.length ?? 0) > 0 ? "group" : "text";
}
function $t(popcornElectronDocumentPanelParam614, popcornElectronDocumentPanelParam615) {
  let popcornElectronDocumentPanelValue946 = popcornElectronDocumentPanelParam614.columns.widths.map(() => popcornElectronDocumentPanelParam615);
  return popcornElectronDocumentPanelValue946.length > 0 ? popcornElectronDocumentPanelValue946 : [popcornElectronDocumentPanelParam615];
}
function popcornElectronDocumentPanelHelper50(popcornElectronDocumentPanelParam561, popcornElectronDocumentPanelParam562 = 0) {
  let popcornElectronDocumentPanelValue919 = popcornElectronDocumentPanelParam561.columns.widths.map(() => 0);
  return popcornElectronDocumentPanelValue919.length === 0 ? [popcornElectronDocumentPanelParam562] : (popcornElectronDocumentPanelValue919[0] = popcornElectronDocumentPanelParam562, popcornElectronDocumentPanelValue919);
}
function popcornElectronDocumentPanelHelper51(popcornElectronDocumentPanelParam550, popcornElectronDocumentPanelParam551 = false) {
  let popcornElectronDocumentPanelValue915 = popcornElectronDocumentPanelParam550.columns.widths.map(() => false);
  return popcornElectronDocumentPanelValue915.length === 0 ? [popcornElectronDocumentPanelParam551] : (popcornElectronDocumentPanelValue915[0] = popcornElectronDocumentPanelParam551, popcornElectronDocumentPanelValue915);
}
function popcornElectronDocumentPanelHelper52(popcornElectronDocumentPanelParam552, popcornElectronDocumentPanelParam553) {
  let popcornElectronDocumentPanelValue916 = popcornElectronDocumentPanelParam552.columns.widths.map(() => undefined);
  return popcornElectronDocumentPanelValue916.length === 0 ? [popcornElectronDocumentPanelParam553] : (popcornElectronDocumentPanelValue916[0] = popcornElectronDocumentPanelParam553, popcornElectronDocumentPanelValue916);
}
function popcornElectronDocumentPanelHelper53(popcornElectronDocumentPanelParam554, popcornElectronDocumentPanelParam555) {
  let popcornElectronDocumentPanelValue917 = popcornElectronDocumentPanelParam554.columns.widths.map(() => undefined);
  return popcornElectronDocumentPanelValue917.length === 0 ? [popcornElectronDocumentPanelParam555] : (popcornElectronDocumentPanelValue917[0] = popcornElectronDocumentPanelParam555, popcornElectronDocumentPanelValue917);
}
function popcornElectronDocumentPanelHelper54(popcornElectronDocumentPanelParam365, popcornElectronDocumentPanelParam366) {
  return {
    xPx: popcornElectronDocumentPanelParam365.columns.xPositions[popcornElectronDocumentPanelParam366] ?? popcornElectronDocumentPanelParam365.contentLeftPx,
    yPx: popcornElectronDocumentPanelParam365.contentTopPx,
    widthPx: popcornElectronDocumentPanelParam365.columns.widths[popcornElectronDocumentPanelParam366] ?? popcornElectronDocumentPanelParam365.contentWidthPx,
    heightPx: popcornElectronDocumentPanelParam365.contentBottomPx - popcornElectronDocumentPanelParam365.contentTopPx
  };
}
function popcornElectronDocumentPanelHelper55({
  settings,
  sectionIndex,
  sourceElementIndex,
  fragmentIndex,
  columnIndex,
  lineStartIndex,
  lineEndIndex,
  rowStartIndex,
  rowEndIndex,
  balanced
}) {
  return {
    sectionIndex: sectionIndex + 1,
    sourceElementIndex: sourceElementIndex + 1,
    fragmentIndex,
    columnIndex: columnIndex + 1,
    columnFrame: popcornElectronDocumentPanelHelper54(settings, columnIndex),
    lineStartIndex,
    lineEndIndex,
    rowStartIndex,
    rowEndIndex,
    balanced,
    documentGridLinePitchTwips: settings.documentGridLinePitchTwips,
    documentGridLinePitchPx: settings.documentGridLinePitchTwips === undefined ? undefined : popcornElectronDocumentPanelHelper33(settings.documentGridLinePitchTwips)
  };
}
function on(popcornElectronDocumentPanelParam669, popcornElectronDocumentPanelParam670) {
  let popcornElectronDocumentPanelValue965 = (popcornElectronDocumentPanelParam669.get(popcornElectronDocumentPanelParam670) ?? 0) + 1;
  return popcornElectronDocumentPanelParam669.set(popcornElectronDocumentPanelParam670, popcornElectronDocumentPanelValue965), popcornElectronDocumentPanelValue965;
}
function popcornElectronDocumentPanelHelper56(popcornElectronDocumentPanelParam566, popcornElectronDocumentPanelParam567) {
  let popcornElectronDocumentPanelValue921 = popcornElectronDocumentPanelParam566?.trim().toLowerCase(),
    popcornElectronDocumentPanelValue922 = popcornElectronDocumentPanelParam567?.trim().toLowerCase();
  return !!popcornElectronDocumentPanelValue921 && popcornElectronDocumentPanelValue921 === popcornElectronDocumentPanelValue922;
}
function popcornElectronDocumentPanelHelper57({
  previousParagraphStyleId,
  currentParagraphStyleId,
  currentParagraphUsesContextualSpacing
}) {
  return currentParagraphUsesContextualSpacing && popcornElectronDocumentPanelHelper56(previousParagraphStyleId, currentParagraphStyleId);
}
function popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelParam592, popcornElectronDocumentPanelParam593, popcornElectronDocumentPanelParam594) {
  for (let popcornElectronDocumentPanelValue969 of popcornElectronDocumentPanelParam592.paragraphs ?? []) popcornElectronDocumentPanelValue969.id && !popcornElectronDocumentPanelParam594.has(popcornElectronDocumentPanelValue969.id) && popcornElectronDocumentPanelParam594.set(popcornElectronDocumentPanelValue969.id, popcornElectronDocumentPanelParam593);
}
function popcornElectronDocumentPanelHelper59(popcornElectronDocumentPanelParam624) {
  return popcornElectronDocumentPanelParam624 === "image" || popcornElectronDocumentPanelParam624 === "shape" || popcornElectronDocumentPanelParam624 === "group" || popcornElectronDocumentPanelParam624 === "chart";
}
function popcornElectronDocumentPanelHelper60(popcornElectronDocumentPanelParam776) {
  return popcornElectronDocumentPanelHelper59(popcornElectronDocumentPanelParam776) || popcornElectronDocumentPanelParam776 === "table";
}
function popcornElectronDocumentPanelHelper61(popcornElectronDocumentPanelParam731) {
  return popcornElectronDocumentPanelParam731.placement?.behindDocument === true;
}
function popcornElectronDocumentPanelHelper62(popcornElectronDocumentPanelParam643) {
  return popcornElectronDocumentPanelParam643.placement?.type === 2 && popcornElectronDocumentPanelParam643.placement.wrap?.type === 1;
}
function popcornElectronDocumentPanelHelper63(popcornElectronDocumentPanelParam644) {
  return popcornElectronDocumentPanelParam644.placement?.type === 2 && popcornElectronDocumentPanelParam644.placement.wrap?.type === 5;
}
function popcornElectronDocumentPanelHelper64(popcornElectronDocumentPanelParam474) {
  if (!popcornElectronDocumentPanelHelper65(popcornElectronDocumentPanelParam474)) return false;
  let popcornElectronDocumentPanelValue841 = popcornElectronDocumentPanelParam474.placement?.horizontalAlignment?.trim().toLowerCase();
  return popcornElectronDocumentPanelValue841 === "left" || popcornElectronDocumentPanelValue841 === "center" || popcornElectronDocumentPanelValue841 === "right";
}
function popcornElectronDocumentPanelHelper65(popcornElectronDocumentPanelParam732) {
  return popcornElectronDocumentPanelParam732.placement?.type === 1 && !popcornElectronDocumentPanelHelper31(popcornElectronDocumentPanelParam732);
}
function _n(popcornElectronDocumentPanelParam180, popcornElectronDocumentPanelParam181, popcornElectronDocumentPanelParam182, popcornElectronDocumentPanelParam183, popcornElectronDocumentPanelParam184 = 0) {
  if (popcornElectronDocumentPanelHelper60(popcornElectronDocumentPanelParam180.kind)) {
    let popcornElectronDocumentPanelValue606 = popcornElectronDocumentPanelHelper30(popcornElectronDocumentPanelParam180.element, popcornElectronDocumentPanelParam182);
    if (popcornElectronDocumentPanelValue606 !== undefined) return popcornElectronDocumentPanelValue606;
    if (popcornElectronDocumentPanelHelper65(popcornElectronDocumentPanelParam180.element)) return popcornElectronDocumentPanelParam181 + popcornElectronDocumentPanelImport26(popcornElectronDocumentPanelParam180.element).topPx;
    if (popcornElectronDocumentPanelHelper31(popcornElectronDocumentPanelParam180.element) && popcornElectronDocumentPanelParam183 !== undefined) return popcornElectronDocumentPanelParam183 + (popcornElectronDocumentPanelParam180.element.bbox?.yEmu ?? 0) * popcornElectronDocumentPanelImport5;
    let popcornElectronDocumentPanelValue607 = popcornElectronDocumentPanelHelper29(popcornElectronDocumentPanelParam180.element, popcornElectronDocumentPanelParam182);
    if (popcornElectronDocumentPanelValue607 !== undefined) return popcornElectronDocumentPanelHelper67(popcornElectronDocumentPanelParam180.element) ? popcornElectronDocumentPanelParam184 + popcornElectronDocumentPanelValue607 : popcornElectronDocumentPanelValue607;
    let popcornElectronDocumentPanelValue608 = popcornElectronDocumentPanelHelper28(popcornElectronDocumentPanelParam180.element, popcornElectronDocumentPanelParam181);
    return popcornElectronDocumentPanelHelper66(popcornElectronDocumentPanelParam180.element) ? popcornElectronDocumentPanelParam184 + popcornElectronDocumentPanelValue608 : popcornElectronDocumentPanelValue608;
  }
  return popcornElectronDocumentPanelParam181;
}
function popcornElectronDocumentPanelHelper66(popcornElectronDocumentPanelParam653) {
  return popcornElectronDocumentPanelParam653.bbox?.yEmu !== undefined && Number.isFinite(popcornElectronDocumentPanelParam653.bbox.yEmu);
}
function popcornElectronDocumentPanelHelper67(popcornElectronDocumentPanelParam524) {
  return popcornElectronDocumentPanelParam524.placement?.type === 2 && popcornElectronDocumentPanelParam524.placement.verticalRelativeFrom?.trim().toLowerCase() === "page";
}
function popcornElectronDocumentPanelHelper68(popcornElectronDocumentPanelParam733, popcornElectronDocumentPanelParam734) {
  return Math.max(0, popcornElectronDocumentPanelParam734 - popcornElectronDocumentPanelParam733.contentTopPx);
}
function popcornElectronDocumentPanelHelper69(popcornElectronDocumentPanelParam493, popcornElectronDocumentPanelParam494, popcornElectronDocumentPanelParam495, popcornElectronDocumentPanelParam496) {
  return popcornElectronDocumentPanelHelper60(popcornElectronDocumentPanelParam493.kind) && (popcornElectronDocumentPanelHelper61(popcornElectronDocumentPanelParam493.element) || popcornElectronDocumentPanelHelper63(popcornElectronDocumentPanelParam493.element) || popcornElectronDocumentPanelHelper62(popcornElectronDocumentPanelParam493.element)) ? popcornElectronDocumentPanelParam494 : Math.max(popcornElectronDocumentPanelParam494, popcornElectronDocumentPanelParam495 + popcornElectronDocumentPanelParam496 + popcornElectronDocumentPanelHelper70(popcornElectronDocumentPanelParam493.element));
}
function popcornElectronDocumentPanelHelper70(popcornElectronDocumentPanelParam763) {
  return popcornElectronDocumentPanelHelper65(popcornElectronDocumentPanelParam763) ? popcornElectronDocumentPanelImport26(popcornElectronDocumentPanelParam763).bottomPx : 0;
}
function popcornElectronDocumentPanelHelper71(popcornElectronDocumentPanelParam270, popcornElectronDocumentPanelParam271) {
  if (popcornElectronDocumentPanelParam270.widths.length !== popcornElectronDocumentPanelParam271.widths.length) return true;
  for (let popcornElectronDocumentPanelValue767 = 0; popcornElectronDocumentPanelValue767 < popcornElectronDocumentPanelParam270.widths.length; popcornElectronDocumentPanelValue767 += 1) if (Math.abs((popcornElectronDocumentPanelParam270.widths[popcornElectronDocumentPanelValue767] ?? 0) - (popcornElectronDocumentPanelParam271.widths[popcornElectronDocumentPanelValue767] ?? 0)) > 0.5 || Math.abs((popcornElectronDocumentPanelParam270.xPositions[popcornElectronDocumentPanelValue767] ?? 0) - (popcornElectronDocumentPanelParam271.xPositions[popcornElectronDocumentPanelValue767] ?? 0)) > 0.5) return true;
  return false;
}
function popcornElectronDocumentPanelHelper72(popcornElectronDocumentPanelParam535) {
  return popcornElectronDocumentPanelParam535.sections.length > 0 ? popcornElectronDocumentPanelParam535.sections.flatMap(item => item.elements ?? []) : popcornElectronDocumentPanelParam535.elements ?? [];
}
function popcornElectronDocumentPanelHelper73(popcornElectronDocumentPanelParam319, popcornElectronDocumentPanelParam320) {
  for (let popcornElectronDocumentPanelValue995 of popcornElectronDocumentPanelParam319.paragraphs ?? []) popcornElectronDocumentPanelParam320(popcornElectronDocumentPanelValue995);
  let popcornElectronDocumentPanelValue704 = popcornElectronDocumentPanelParam319.table;
  if (popcornElectronDocumentPanelValue704) for (let popcornElectronDocumentPanelValue854 of popcornElectronDocumentPanelValue704.rows) for (let popcornElectronDocumentPanelValue898 of popcornElectronDocumentPanelValue854.cells) {
    for (let popcornElectronDocumentPanelValue996 of popcornElectronDocumentPanelValue898.paragraphs ?? []) popcornElectronDocumentPanelParam320(popcornElectronDocumentPanelValue996);
    for (let popcornElectronDocumentPanelValue991 of popcornElectronDocumentPanelValue898.elements ?? []) popcornElectronDocumentPanelHelper73(popcornElectronDocumentPanelValue991, popcornElectronDocumentPanelParam320);
  }
}
function popcornElectronDocumentPanelHelper74(popcornElectronDocumentPanelParam479, popcornElectronDocumentPanelParam480, popcornElectronDocumentPanelParam481) {
  let popcornElectronDocumentPanelValue847 = popcornElectronDocumentPanelParam479,
    popcornElectronDocumentPanelValue848 = new Set();
  for (; popcornElectronDocumentPanelValue847 && !popcornElectronDocumentPanelValue848.has(popcornElectronDocumentPanelValue847);) {
    popcornElectronDocumentPanelValue848.add(popcornElectronDocumentPanelValue847);
    let popcornElectronDocumentPanelValue964 = popcornElectronDocumentPanelParam480.get(popcornElectronDocumentPanelValue847);
    if (popcornElectronDocumentPanelValue964) return popcornElectronDocumentPanelValue964;
    popcornElectronDocumentPanelValue847 = popcornElectronDocumentPanelParam481.get(popcornElectronDocumentPanelValue847);
  }
}
function popcornElectronDocumentPanelHelper75(popcornElectronDocumentPanelParam414) {
  let popcornElectronDocumentPanelValue797 = popcornElectronDocumentPanelParam414?.replace(/%[0-9]+/g, "").trim();
  if (!popcornElectronDocumentPanelValue797) return;
  if (popcornElectronDocumentPanelValue797 === "o") return "◦";
  let popcornElectronDocumentPanelValue798 = popcornElectronDocumentPanelValue797.codePointAt(0);
  return popcornElectronDocumentPanelValue798 === 61623 ? "•" : popcornElectronDocumentPanelValue798 === 61607 ? "▪" : popcornElectronDocumentPanelValue797;
}
function popcornElectronDocumentPanelHelper76(popcornElectronDocumentPanelParam119, popcornElectronDocumentPanelParam120) {
  let popcornElectronDocumentPanelValue479 = popcornElectronDocumentPanelParam120 ?? "",
    popcornElectronDocumentPanelValue480 = popcornElectronDocumentPanelValue479.startsWith("[") && popcornElectronDocumentPanelValue479.endsWith("]"),
    popcornElectronDocumentPanelValue481 = popcornElectronDocumentPanelValue479.endsWith(")"),
    popcornElectronDocumentPanelValue482 = popcornElectronDocumentPanelValue479.endsWith(".");
  switch (popcornElectronDocumentPanelParam119) {
    case "decimal":
      return popcornElectronDocumentPanelValue480 ? "arabicBracketBoth" : !popcornElectronDocumentPanelValue482 && !popcornElectronDocumentPanelValue481 ? "arabicPlain" : "arabicPeriod";
    case "lowerLetter":
      return popcornElectronDocumentPanelValue481 ? "alphaLcParenR" : "alphaLcPeriod";
    case "upperLetter":
      return popcornElectronDocumentPanelValue481 ? "alphaUcParenR" : "alphaUcPeriod";
    case "lowerRoman":
      return "romanLcPeriod";
    case "upperRoman":
      return "romanUcPeriod";
    default:
      return;
  }
}
function popcornElectronDocumentPanelHelper77(popcornElectronDocumentPanelParam167, popcornElectronDocumentPanelParam168, popcornElectronDocumentPanelParam169) {
  let popcornElectronDocumentPanelValue553 = popcornElectronDocumentPanelParam167?.levels?.find(popcornElectronDocumentPanelParam822 => (popcornElectronDocumentPanelParam822.level ?? 0) === popcornElectronDocumentPanelParam168);
  if (!popcornElectronDocumentPanelValue553) return;
  if (popcornElectronDocumentPanelValue553.numberFormat === "bullet") {
    let popcornElectronDocumentPanelValue881 = popcornElectronDocumentPanelHelper75(popcornElectronDocumentPanelValue553.levelText);
    return popcornElectronDocumentPanelValue881 ? {
      startAt: popcornElectronDocumentPanelParam169,
      paragraphStyle: {
        bulletCharacter: popcornElectronDocumentPanelValue881,
        tabStops: []
      }
    } : undefined;
  }
  let popcornElectronDocumentPanelValue554 = popcornElectronDocumentPanelHelper76(popcornElectronDocumentPanelValue553.numberFormat, popcornElectronDocumentPanelValue553.levelText);
  if (popcornElectronDocumentPanelValue554) return {
    startAt: popcornElectronDocumentPanelParam169,
    paragraphStyle: {
      autoNumberType: popcornElectronDocumentPanelValue554,
      autoNumberStartAt: popcornElectronDocumentPanelParam169,
      tabStops: []
    }
  };
}
function popcornElectronDocumentPanelHelper78(popcornElectronDocumentPanelParam368, popcornElectronDocumentPanelParam369, popcornElectronDocumentPanelParam370) {
  let popcornElectronDocumentPanelValue758 = popcornElectronDocumentPanelParam368?.autoNumberStartAt;
  if (typeof popcornElectronDocumentPanelValue758 == "number" && popcornElectronDocumentPanelValue758 > 0) return popcornElectronDocumentPanelValue758;
  let popcornElectronDocumentPanelValue759 = popcornElectronDocumentPanelParam369?.levels?.find(popcornElectronDocumentPanelParam823 => (popcornElectronDocumentPanelParam823.level ?? 0) === popcornElectronDocumentPanelParam370)?.startAt;
  return typeof popcornElectronDocumentPanelValue759 == "number" && popcornElectronDocumentPanelValue759 > 0 ? popcornElectronDocumentPanelValue759 : 1;
}
function popcornElectronDocumentPanelHelper79(popcornElectronDocumentPanelParam25) {
  let popcornElectronDocumentPanelValue333 = new Map(),
    popcornElectronDocumentPanelValue334 = new Map(),
    popcornElectronDocumentPanelValue335 = new Map(),
    popcornElectronDocumentPanelValue336 = new Map(),
    popcornElectronDocumentPanelValue337 = new Map(),
    popcornElectronDocumentPanelValue338 = new Map(),
    popcornElectronDocumentPanelValue339 = new Set();
  for (let popcornElectronDocumentPanelValue975 of popcornElectronDocumentPanelParam25.textStyles ?? []) popcornElectronDocumentPanelValue975.id && popcornElectronDocumentPanelValue335.set(popcornElectronDocumentPanelValue975.id, popcornElectronDocumentPanelValue975.basedOn);
  for (let popcornElectronDocumentPanelValue666 of popcornElectronDocumentPanelParam25.numberingDefinitions ?? []) {
    popcornElectronDocumentPanelValue666?.numId && popcornElectronDocumentPanelValue336.set(popcornElectronDocumentPanelValue666.numId, popcornElectronDocumentPanelValue666);
    for (let popcornElectronDocumentPanelValue787 of popcornElectronDocumentPanelValue666?.levels ?? []) popcornElectronDocumentPanelValue787?.paragraphStyleId && popcornElectronDocumentPanelValue666?.numId && popcornElectronDocumentPanelValue334.set(popcornElectronDocumentPanelValue787.paragraphStyleId, {
      numId: popcornElectronDocumentPanelValue666.numId,
      level: Math.max(0, popcornElectronDocumentPanelValue787.level ?? 0)
    });
  }
  for (let popcornElectronDocumentPanelValue937 of popcornElectronDocumentPanelParam25.paragraphNumberings ?? []) popcornElectronDocumentPanelValue937?.paragraphId && popcornElectronDocumentPanelValue937.numId && popcornElectronDocumentPanelValue333.set(popcornElectronDocumentPanelValue937.paragraphId, popcornElectronDocumentPanelValue937);
  for (let popcornElectronDocumentPanelValue484 of popcornElectronDocumentPanelHelper72(popcornElectronDocumentPanelParam25)) popcornElectronDocumentPanelHelper73(popcornElectronDocumentPanelValue484, popcornElectronDocumentPanelParam145 => {
    if (!popcornElectronDocumentPanelParam145.id || popcornElectronDocumentPanelValue339.has(popcornElectronDocumentPanelParam145.id)) return;
    popcornElectronDocumentPanelValue339.add(popcornElectronDocumentPanelParam145.id);
    let popcornElectronDocumentPanelValue504 = popcornElectronDocumentPanelValue333.get(popcornElectronDocumentPanelParam145.id) ?? popcornElectronDocumentPanelHelper74(popcornElectronDocumentPanelParam145.styleId, popcornElectronDocumentPanelValue334, popcornElectronDocumentPanelValue335);
    if (!popcornElectronDocumentPanelValue504?.numId) return;
    let popcornElectronDocumentPanelValue505 = Math.max(0, popcornElectronDocumentPanelValue504.level ?? 0),
      popcornElectronDocumentPanelValue506 = popcornElectronDocumentPanelValue336.get(popcornElectronDocumentPanelValue504.numId),
      popcornElectronDocumentPanelValue507 = popcornElectronDocumentPanelValue337.get(popcornElectronDocumentPanelValue504.numId) ?? [];
    for (let popcornElectronDocumentPanelValue983 = popcornElectronDocumentPanelValue505 + 1; popcornElectronDocumentPanelValue983 < popcornElectronDocumentPanelValue507.length; popcornElectronDocumentPanelValue983 += 1) popcornElectronDocumentPanelValue507[popcornElectronDocumentPanelValue983] = undefined;
    popcornElectronDocumentPanelValue507[popcornElectronDocumentPanelValue505] === undefined && (popcornElectronDocumentPanelValue507[popcornElectronDocumentPanelValue505] = popcornElectronDocumentPanelHelper78(popcornElectronDocumentPanelParam145.paragraphStyle, popcornElectronDocumentPanelValue506, popcornElectronDocumentPanelValue505));
    let popcornElectronDocumentPanelValue508 = popcornElectronDocumentPanelValue507[popcornElectronDocumentPanelValue505] ?? 1;
    popcornElectronDocumentPanelValue338.set(popcornElectronDocumentPanelParam145.id, {
      startAt: popcornElectronDocumentPanelValue508,
      paragraphStyle: popcornElectronDocumentPanelHelper77(popcornElectronDocumentPanelValue506, popcornElectronDocumentPanelValue505, popcornElectronDocumentPanelValue508)?.paragraphStyle
    });
    popcornElectronDocumentPanelValue507[popcornElectronDocumentPanelValue505] = popcornElectronDocumentPanelValue508 + 1;
    popcornElectronDocumentPanelValue337.set(popcornElectronDocumentPanelValue504.numId, popcornElectronDocumentPanelValue507);
  });
  return popcornElectronDocumentPanelValue338;
}
function popcornElectronDocumentPanelHelper80(popcornElectronDocumentPanelParam302, popcornElectronDocumentPanelParam303, popcornElectronDocumentPanelParam304) {
  let popcornElectronDocumentPanelValue688 = popcornElectronDocumentPanelImport11(popcornElectronDocumentPanelParam302, popcornElectronDocumentPanelParam303);
  if (popcornElectronDocumentPanelValue688) return popcornElectronDocumentPanelParam302?.autoNumberType && (popcornElectronDocumentPanelParam302.marginLeft === undefined && (popcornElectronDocumentPanelValue688.marginLeft = undefined), popcornElectronDocumentPanelParam302.indent === undefined && (popcornElectronDocumentPanelValue688.indent = undefined)), popcornElectronDocumentPanelParam304 !== undefined && (popcornElectronDocumentPanelValue688.autoNumberStartAt = popcornElectronDocumentPanelParam304), popcornElectronDocumentPanelValue688;
}
function popcornElectronDocumentPanelHelper81(popcornElectronDocumentPanelParam468, popcornElectronDocumentPanelParam469, popcornElectronDocumentPanelParam470) {
  let popcornElectronDocumentPanelValue838 = popcornElectronDocumentPanelParam468.paragraphs ?? [];
  if (popcornElectronDocumentPanelValue838.length === 0) return popcornElectronDocumentPanelParam468;
  let popcornElectronDocumentPanelValue839 = popcornElectronDocumentPanelHelper82(popcornElectronDocumentPanelValue838, popcornElectronDocumentPanelParam469, popcornElectronDocumentPanelParam470);
  return popcornElectronDocumentPanelValue839.changed ? {
    ...popcornElectronDocumentPanelParam468,
    paragraphs: popcornElectronDocumentPanelValue839.paragraphs
  } : popcornElectronDocumentPanelParam468;
}
function popcornElectronDocumentPanelHelper82(popcornElectronDocumentPanelParam14, popcornElectronDocumentPanelParam15, popcornElectronDocumentPanelParam16, popcornElectronDocumentPanelParam17 = {}) {
  let popcornElectronDocumentPanelValue293 = false;
  return {
    paragraphs: popcornElectronDocumentPanelParam14.map(item => {
      let popcornElectronDocumentPanelValue296 = item.id ? popcornElectronDocumentPanelParam16.get(item.id) : undefined,
        popcornElectronDocumentPanelValue297 = popcornElectronDocumentPanelValue296?.startAt,
        popcornElectronDocumentPanelValue298 = popcornElectronDocumentPanelParam15(item.styleId);
      if (!popcornElectronDocumentPanelValue298) {
        if (popcornElectronDocumentPanelValue297 === undefined) return item;
        let popcornElectronDocumentPanelValue642 = popcornElectronDocumentPanelHelper80(item.paragraphStyle, undefined, undefined),
          popcornElectronDocumentPanelValue643 = popcornElectronDocumentPanelImport11(popcornElectronDocumentPanelValue296?.paragraphStyle, popcornElectronDocumentPanelValue642);
        return popcornElectronDocumentPanelValue643 && popcornElectronDocumentPanelValue297 !== undefined && popcornElectronDocumentPanelValue643.autoNumberType && (popcornElectronDocumentPanelValue643.autoNumberStartAt = popcornElectronDocumentPanelValue297), popcornElectronDocumentPanelValue643 === item.paragraphStyle ? item : (popcornElectronDocumentPanelValue293 = true, {
          ...item,
          paragraphStyle: popcornElectronDocumentPanelValue643
        });
      }
      let popcornElectronDocumentPanelValue299 = popcornElectronDocumentPanelHelper83(item.textStyle, popcornElectronDocumentPanelValue298.textStyle, popcornElectronDocumentPanelParam17.preserveDirectTextStyle === true),
        popcornElectronDocumentPanelValue300 = popcornElectronDocumentPanelValue298.contextualSpacing ? popcornElectronDocumentPanelImport14(popcornElectronDocumentPanelValue299) : popcornElectronDocumentPanelValue299,
        popcornElectronDocumentPanelValue301 = popcornElectronDocumentPanelHelper80(item.paragraphStyle, popcornElectronDocumentPanelValue298.paragraphStyle, undefined),
        popcornElectronDocumentPanelValue302 = popcornElectronDocumentPanelImport11(popcornElectronDocumentPanelValue296?.paragraphStyle, popcornElectronDocumentPanelValue301);
      popcornElectronDocumentPanelValue302 && popcornElectronDocumentPanelValue297 !== undefined && popcornElectronDocumentPanelValue302.autoNumberType && (popcornElectronDocumentPanelValue302.autoNumberStartAt = popcornElectronDocumentPanelValue297);
      let popcornElectronDocumentPanelValue303 = popcornElectronDocumentPanelHelper84(item.runs, popcornElectronDocumentPanelParam17.preserveDirectTextStyle === true ? popcornElectronDocumentPanelValue299 : popcornElectronDocumentPanelValue298.textStyle),
        popcornElectronDocumentPanelValue304 = item.spaceBefore ?? popcornElectronDocumentPanelValue298.spaceBefore,
        popcornElectronDocumentPanelValue305 = item.spaceAfter ?? popcornElectronDocumentPanelValue298.spaceAfter,
        popcornElectronDocumentPanelValue306 = {
          ...item,
          textStyle: popcornElectronDocumentPanelValue300,
          paragraphStyle: popcornElectronDocumentPanelValue302,
          runs: popcornElectronDocumentPanelValue303,
          ...(popcornElectronDocumentPanelValue304 === undefined ? {} : {
            spaceBefore: popcornElectronDocumentPanelValue304
          }),
          ...(popcornElectronDocumentPanelValue305 === undefined ? {} : {
            spaceAfter: popcornElectronDocumentPanelValue305
          })
        };
      return (popcornElectronDocumentPanelValue306.textStyle !== item.textStyle || popcornElectronDocumentPanelValue306.paragraphStyle !== item.paragraphStyle || popcornElectronDocumentPanelValue306.runs !== item.runs || popcornElectronDocumentPanelValue306.spaceBefore !== item.spaceBefore || popcornElectronDocumentPanelValue306.spaceAfter !== item.spaceAfter) && (popcornElectronDocumentPanelValue293 = true), popcornElectronDocumentPanelValue306;
    }),
    changed: popcornElectronDocumentPanelValue293
  };
}
function popcornElectronDocumentPanelHelper83(popcornElectronDocumentPanelParam315, popcornElectronDocumentPanelParam316, popcornElectronDocumentPanelParam317 = false) {
  if (!popcornElectronDocumentPanelParam317) {
    let popcornElectronDocumentPanelValue773 = {};
    return popcornElectronDocumentPanelParam315?.alignment !== undefined && (popcornElectronDocumentPanelValue773.alignment = popcornElectronDocumentPanelParam315.alignment), popcornElectronDocumentPanelParam315?.scheme !== undefined && (popcornElectronDocumentPanelValue773.scheme = popcornElectronDocumentPanelParam315.scheme), Object.keys(popcornElectronDocumentPanelValue773).length === 0 ? popcornElectronDocumentPanelParam316 : popcornElectronDocumentPanelImport8(popcornElectronDocumentPanelValue773, popcornElectronDocumentPanelParam316);
  }
  return popcornElectronDocumentPanelImport8(popcornElectronDocumentPanelParam315, popcornElectronDocumentPanelParam316);
}
function popcornElectronDocumentPanelHelper84(popcornElectronDocumentPanelParam272, popcornElectronDocumentPanelParam273) {
  if (!popcornElectronDocumentPanelParam272 || !popcornElectronDocumentPanelParam273) return popcornElectronDocumentPanelParam272;
  let {
    alignment,
    ...rest
  } = popcornElectronDocumentPanelParam273;
  if (Object.keys(rest).length === 0) return popcornElectronDocumentPanelParam272;
  let popcornElectronDocumentPanelValue656 = false,
    popcornElectronDocumentPanelValue657 = popcornElectronDocumentPanelParam272.map(item => {
      let popcornElectronDocumentPanelValue910 = popcornElectronDocumentPanelImport8(item.textStyle, rest);
      return popcornElectronDocumentPanelValue910 === item.textStyle ? item : (popcornElectronDocumentPanelValue656 = true, {
        ...item,
        textStyle: popcornElectronDocumentPanelValue910
      });
    });
  return popcornElectronDocumentPanelValue656 ? popcornElectronDocumentPanelValue657 : popcornElectronDocumentPanelParam272;
}
function popcornElectronDocumentPanelHelper85(popcornElectronDocumentPanelParam150, popcornElectronDocumentPanelParam151, popcornElectronDocumentPanelParam152) {
  let popcornElectronDocumentPanelValue520 = popcornElectronDocumentPanelParam150.table;
  if (!popcornElectronDocumentPanelValue520 || popcornElectronDocumentPanelValue520.rows.length === 0) return popcornElectronDocumentPanelParam150;
  let popcornElectronDocumentPanelValue521 = false,
    popcornElectronDocumentPanelValue522 = popcornElectronDocumentPanelValue520.rows.map(item => {
      let popcornElectronDocumentPanelValue612 = false,
        popcornElectronDocumentPanelValue613 = item.cells.map(_item => {
          let popcornElectronDocumentPanelValue728 = _item.paragraphs ?? [];
          if (popcornElectronDocumentPanelValue728.length === 0) return _item;
          let popcornElectronDocumentPanelValue729 = popcornElectronDocumentPanelHelper82(popcornElectronDocumentPanelValue728, popcornElectronDocumentPanelParam151, popcornElectronDocumentPanelParam152, {
            preserveDirectTextStyle: true
          });
          return popcornElectronDocumentPanelValue729.changed ? (popcornElectronDocumentPanelValue612 = true, {
            ..._item,
            paragraphs: popcornElectronDocumentPanelValue729.paragraphs
          }) : _item;
        });
      return popcornElectronDocumentPanelValue612 ? (popcornElectronDocumentPanelValue521 = true, {
        ...item,
        cells: popcornElectronDocumentPanelValue613
      }) : item;
    });
  return popcornElectronDocumentPanelValue521 ? {
    ...popcornElectronDocumentPanelParam150,
    table: {
      ...popcornElectronDocumentPanelValue520,
      rows: popcornElectronDocumentPanelValue522
    }
  } : popcornElectronDocumentPanelParam150;
}
function popcornElectronDocumentPanelHelper86(popcornElectronDocumentPanelParam587, popcornElectronDocumentPanelParam588, popcornElectronDocumentPanelParam589) {
  return popcornElectronDocumentPanelHelper85(popcornElectronDocumentPanelParam587.paragraphs && popcornElectronDocumentPanelParam587.paragraphs.length > 0 ? popcornElectronDocumentPanelHelper81(popcornElectronDocumentPanelParam587, popcornElectronDocumentPanelParam588, popcornElectronDocumentPanelParam589) : popcornElectronDocumentPanelParam587, popcornElectronDocumentPanelParam588, popcornElectronDocumentPanelParam589);
}
function popcornElectronDocumentPanelHelper87(popcornElectronDocumentPanelParam742, popcornElectronDocumentPanelParam743, popcornElectronDocumentPanelParam744) {
  return popcornElectronDocumentPanelParam742.map(item => popcornElectronDocumentPanelHelper86(item, popcornElectronDocumentPanelParam743, popcornElectronDocumentPanelParam744));
}
function popcornElectronDocumentPanelHelper88(popcornElectronDocumentPanelParam74, popcornElectronDocumentPanelParam75, popcornElectronDocumentPanelParam76, popcornElectronDocumentPanelParam77) {
  return popcornElectronDocumentPanelParam74.map(item => {
    let popcornElectronDocumentPanelValue413 = popcornElectronDocumentPanelHelper86(item, popcornElectronDocumentPanelParam75, popcornElectronDocumentPanelParam76),
      popcornElectronDocumentPanelValue414 = popcornElectronDocumentPanelValue413.paragraphs ?? [],
      popcornElectronDocumentPanelValue415 = popcornElectronDocumentPanelValue414.length > 0 ? popcornElectronDocumentPanelImport30({
        element: popcornElectronDocumentPanelValue413,
        unit: "twips"
      }) : {
        firstParagraphSpaceBeforePx: 0,
        lastParagraphSpaceAfterPx: 0
      },
      popcornElectronDocumentPanelValue416 = popcornElectronDocumentPanelValue414[0],
      popcornElectronDocumentPanelValue417 = popcornElectronDocumentPanelValue414[popcornElectronDocumentPanelValue414.length - 1];
    return {
      element: popcornElectronDocumentPanelValue413,
      kind: popcornElectronDocumentPanelHelper49(popcornElectronDocumentPanelValue413),
      linesByWidth: new Map(),
      measurementsByWidth: new Map(),
      tableMeasurementsByWidth: new Map(),
      defaultTabStopTwips: popcornElectronDocumentPanelParam77,
      docxSectionBreakCarrier: _r(popcornElectronDocumentPanelValue413),
      firstParagraphSpaceBeforePx: popcornElectronDocumentPanelValue415.firstParagraphSpaceBeforePx,
      lastParagraphSpaceAfterPx: popcornElectronDocumentPanelValue415.lastParagraphSpaceAfterPx,
      firstParagraphStyleId: popcornElectronDocumentPanelValue416?.styleId,
      lastParagraphStyleId: popcornElectronDocumentPanelValue417?.styleId,
      firstParagraphUsesContextualSpacing: popcornElectronDocumentPanelImport16(popcornElectronDocumentPanelValue416?.textStyle)
    };
  });
}
function popcornElectronDocumentPanelHelper89(popcornElectronDocumentPanelParam450, popcornElectronDocumentPanelParam451) {
  return {
    id: popcornElectronDocumentPanelParam450,
    type: presentationWt.ELEMENT_TYPE_TEXT,
    paragraphs: popcornElectronDocumentPanelParam451,
    effects: [],
    children: [],
    levelsStyles: [],
    citations: []
  };
}
function popcornElectronDocumentPanelHelper90(popcornElectronDocumentPanelParam138, popcornElectronDocumentPanelParam139, popcornElectronDocumentPanelParam140, popcornElectronDocumentPanelParam141) {
  let popcornElectronDocumentPanelValue498 = new Map(),
    popcornElectronDocumentPanelValue499 = new Map();
  for (let popcornElectronDocumentPanelValue580 of popcornElectronDocumentPanelParam138.footnotes ?? []) {
    if (popcornElectronDocumentPanelValue580.id === undefined || popcornElectronDocumentPanelValue580.id.length === 0) continue;
    let popcornElectronDocumentPanelValue605 = popcornElectronDocumentPanelHelper88([popcornElectronDocumentPanelHelper89(`docx-footnote-${popcornElectronDocumentPanelValue580.id}`, popcornElectronDocumentPanelValue580.paragraphs ?? [])], popcornElectronDocumentPanelParam139, popcornElectronDocumentPanelParam140, popcornElectronDocumentPanelParam141)[0];
    if (popcornElectronDocumentPanelValue605) {
      popcornElectronDocumentPanelValue498.set(popcornElectronDocumentPanelValue580.id, popcornElectronDocumentPanelValue605.element);
      for (let popcornElectronDocumentPanelValue832 of popcornElectronDocumentPanelValue580.referenceRunIds ?? []) {
        let popcornElectronDocumentPanelValue895 = popcornElectronDocumentPanelValue499.get(popcornElectronDocumentPanelValue832);
        if (popcornElectronDocumentPanelValue895) {
          popcornElectronDocumentPanelValue895.push(popcornElectronDocumentPanelValue580.id);
          continue;
        }
        popcornElectronDocumentPanelValue499.set(popcornElectronDocumentPanelValue832, [popcornElectronDocumentPanelValue580.id]);
      }
    }
  }
  return {
    elementById: popcornElectronDocumentPanelValue498,
    idsByReferenceRunId: popcornElectronDocumentPanelValue499,
    layoutByKey: new Map()
  };
}
function popcornElectronDocumentPanelHelper91() {
  return {
    ids: [],
    idSet: new Set()
  };
}
function popcornElectronDocumentPanelHelper92(popcornElectronDocumentPanelParam286, popcornElectronDocumentPanelParam287) {
  if (!popcornElectronDocumentPanelParam286) return [];
  let popcornElectronDocumentPanelValue673 = [],
    popcornElectronDocumentPanelValue674 = new Set();
  for (let popcornElectronDocumentPanelValue799 of popcornElectronDocumentPanelParam286.segments) {
    let popcornElectronDocumentPanelValue849 = popcornElectronDocumentPanelValue799.run.id;
    if (popcornElectronDocumentPanelValue849 === undefined) continue;
    let popcornElectronDocumentPanelValue850 = popcornElectronDocumentPanelParam287.idsByReferenceRunId.get(popcornElectronDocumentPanelValue849);
    if (popcornElectronDocumentPanelValue850) for (let popcornElectronDocumentPanelValue985 of popcornElectronDocumentPanelValue850) popcornElectronDocumentPanelValue674.has(popcornElectronDocumentPanelValue985) || (popcornElectronDocumentPanelValue674.add(popcornElectronDocumentPanelValue985), popcornElectronDocumentPanelValue673.push(popcornElectronDocumentPanelValue985));
  }
  return popcornElectronDocumentPanelValue673;
}
function popcornElectronDocumentPanelHelper93(popcornElectronDocumentPanelParam461, popcornElectronDocumentPanelParam462, popcornElectronDocumentPanelParam463, popcornElectronDocumentPanelParam464) {
  let popcornElectronDocumentPanelValue833 = [],
    popcornElectronDocumentPanelValue834 = new Set();
  for (let popcornElectronDocumentPanelValue943 = popcornElectronDocumentPanelParam462; popcornElectronDocumentPanelValue943 < popcornElectronDocumentPanelParam463; popcornElectronDocumentPanelValue943 += 1) for (let popcornElectronDocumentPanelValue976 of popcornElectronDocumentPanelHelper92(popcornElectronDocumentPanelParam461[popcornElectronDocumentPanelValue943], popcornElectronDocumentPanelParam464)) popcornElectronDocumentPanelValue834.has(popcornElectronDocumentPanelValue976) || (popcornElectronDocumentPanelValue834.add(popcornElectronDocumentPanelValue976), popcornElectronDocumentPanelValue833.push(popcornElectronDocumentPanelValue976));
  return popcornElectronDocumentPanelValue833;
}
function popcornElectronDocumentPanelHelper94(popcornElectronDocumentPanelParam705, popcornElectronDocumentPanelParam706) {
  return `${Math.round(popcornElectronDocumentPanelParam706 * 1e3)}|${popcornElectronDocumentPanelParam705.join(",")}`;
}
function popcornElectronDocumentPanelHelper95(popcornElectronDocumentPanelParam714, popcornElectronDocumentPanelParam715) {
  return `${Math.round(popcornElectronDocumentPanelParam714 * 1e3)}|${popcornElectronDocumentPanelParam715 ?? ""}`;
}
function popcornElectronDocumentPanelHelper96(popcornElectronDocumentPanelParam155, popcornElectronDocumentPanelParam156, popcornElectronDocumentPanelParam157, popcornElectronDocumentPanelParam158) {
  let popcornElectronDocumentPanelValue528 = popcornElectronDocumentPanelHelper94(popcornElectronDocumentPanelParam156, popcornElectronDocumentPanelParam157),
    popcornElectronDocumentPanelValue529 = popcornElectronDocumentPanelParam155.layoutByKey.get(popcornElectronDocumentPanelValue528);
  if (popcornElectronDocumentPanelValue529) return popcornElectronDocumentPanelValue529;
  let popcornElectronDocumentPanelValue530 = [];
  for (let popcornElectronDocumentPanelValue940 of popcornElectronDocumentPanelParam156) {
    let popcornElectronDocumentPanelValue961 = popcornElectronDocumentPanelParam155.elementById.get(popcornElectronDocumentPanelValue940);
    popcornElectronDocumentPanelValue961 && popcornElectronDocumentPanelValue530.push(...(popcornElectronDocumentPanelValue961.paragraphs ?? []));
  }
  let popcornElectronDocumentPanelValue531 = popcornElectronDocumentPanelHelper89(`docx-footnotes-${popcornElectronDocumentPanelParam156.join("-")}`, popcornElectronDocumentPanelValue530),
    popcornElectronDocumentPanelValue532 = popcornElectronDocumentPanelHelper148(popcornElectronDocumentPanelValue531, popcornElectronDocumentPanelParam157, popcornElectronDocumentPanelParam158),
    popcornElectronDocumentPanelValue533 = popcornElectronDocumentPanelValue532.reduce((accumulator, current) => accumulator + Math.max(1, current.heightPx), 0),
    popcornElectronDocumentPanelValue534 = {
      element: popcornElectronDocumentPanelValue531,
      lines: popcornElectronDocumentPanelValue532,
      textHeightPx: popcornElectronDocumentPanelValue533,
      reservedHeightPx: popcornElectronDocumentPanelValue533 > 0 ? popcornElectronDocumentPanelValue533 + 6 : 0
    };
  return popcornElectronDocumentPanelParam155.layoutByKey.set(popcornElectronDocumentPanelValue528, popcornElectronDocumentPanelValue534), popcornElectronDocumentPanelValue534;
}
function popcornElectronDocumentPanelHelper97(popcornElectronDocumentPanelParam541, popcornElectronDocumentPanelParam542, popcornElectronDocumentPanelParam543, popcornElectronDocumentPanelParam544) {
  return popcornElectronDocumentPanelParam541.ids.length === 0 ? 0 : popcornElectronDocumentPanelHelper96(popcornElectronDocumentPanelParam542, popcornElectronDocumentPanelParam541.ids, popcornElectronDocumentPanelParam543.contentWidthPx, popcornElectronDocumentPanelParam544).reservedHeightPx;
}
function popcornElectronDocumentPanelHelper98(popcornElectronDocumentPanelParam699, popcornElectronDocumentPanelParam700, popcornElectronDocumentPanelParam701, popcornElectronDocumentPanelParam702) {
  return popcornElectronDocumentPanelParam701.contentBottomPx - popcornElectronDocumentPanelHelper97(popcornElectronDocumentPanelParam699, popcornElectronDocumentPanelParam700, popcornElectronDocumentPanelParam701, popcornElectronDocumentPanelParam702);
}
function popcornElectronDocumentPanelHelper99(popcornElectronDocumentPanelParam350, popcornElectronDocumentPanelParam351, popcornElectronDocumentPanelParam352 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam353) {
  let popcornElectronDocumentPanelValue749 = popcornElectronDocumentPanelHelper95(popcornElectronDocumentPanelParam351, popcornElectronDocumentPanelParam353),
    popcornElectronDocumentPanelValue750 = popcornElectronDocumentPanelParam350.linesByWidth.get(popcornElectronDocumentPanelValue749);
  if (popcornElectronDocumentPanelValue750) return popcornElectronDocumentPanelValue750;
  let popcornElectronDocumentPanelValue751 = popcornElectronDocumentPanelParam350.kind === "text" ? popcornElectronDocumentPanelHelper148(popcornElectronDocumentPanelParam350.element, popcornElectronDocumentPanelParam351, popcornElectronDocumentPanelParam352, popcornElectronDocumentPanelParam350.defaultTabStopTwips, popcornElectronDocumentPanelParam353) : [];
  return popcornElectronDocumentPanelParam350.linesByWidth.set(popcornElectronDocumentPanelValue749, popcornElectronDocumentPanelValue751), popcornElectronDocumentPanelValue751;
}
function popcornElectronDocumentPanelHelper100(popcornElectronDocumentPanelParam390, popcornElectronDocumentPanelParam391, popcornElectronDocumentPanelParam392, popcornElectronDocumentPanelParam393 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam394) {
  let popcornElectronDocumentPanelValue774 = popcornElectronDocumentPanelHelper95(popcornElectronDocumentPanelParam392, popcornElectronDocumentPanelParam394),
    popcornElectronDocumentPanelValue775 = popcornElectronDocumentPanelParam390.measurementsByWidth.get(popcornElectronDocumentPanelValue774);
  if (popcornElectronDocumentPanelValue775) return popcornElectronDocumentPanelValue775;
  let popcornElectronDocumentPanelValue776 = popcornElectronDocumentPanelHelper138(popcornElectronDocumentPanelParam390.element, popcornElectronDocumentPanelParam390.kind, popcornElectronDocumentPanelParam391, popcornElectronDocumentPanelParam392, popcornElectronDocumentPanelParam393, popcornElectronDocumentPanelParam394);
  return popcornElectronDocumentPanelParam390.measurementsByWidth.set(popcornElectronDocumentPanelValue774, popcornElectronDocumentPanelValue776), popcornElectronDocumentPanelValue776;
}
function popcornElectronDocumentPanelHelper101(popcornElectronDocumentPanelParam342, popcornElectronDocumentPanelParam343, popcornElectronDocumentPanelParam344, popcornElectronDocumentPanelParam345 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam346) {
  let popcornElectronDocumentPanelValue742 = popcornElectronDocumentPanelHelper36(popcornElectronDocumentPanelParam342.element, popcornElectronDocumentPanelParam344),
    popcornElectronDocumentPanelValue743 = popcornElectronDocumentPanelHelper95(popcornElectronDocumentPanelValue742, popcornElectronDocumentPanelParam346),
    popcornElectronDocumentPanelValue744 = popcornElectronDocumentPanelParam342.tableMeasurementsByWidth.get(popcornElectronDocumentPanelValue743);
  if (popcornElectronDocumentPanelValue744) return popcornElectronDocumentPanelValue744;
  let popcornElectronDocumentPanelValue745 = popcornElectronDocumentPanelHelper41(popcornElectronDocumentPanelParam342.element, popcornElectronDocumentPanelParam343, popcornElectronDocumentPanelValue742, popcornElectronDocumentPanelParam345, popcornElectronDocumentPanelParam346);
  return popcornElectronDocumentPanelParam342.tableMeasurementsByWidth.set(popcornElectronDocumentPanelValue743, popcornElectronDocumentPanelValue745), popcornElectronDocumentPanelValue745;
}
function $n(popcornElectronDocumentPanelParam160, popcornElectronDocumentPanelParam161, popcornElectronDocumentPanelParam162) {
  let popcornElectronDocumentPanelValue536 = popcornElectronDocumentPanelParam161.columns.xPositions[popcornElectronDocumentPanelParam162] ?? popcornElectronDocumentPanelParam161.contentLeftPx,
    popcornElectronDocumentPanelValue537 = popcornElectronDocumentPanelParam161.columns.widths[popcornElectronDocumentPanelParam162] ?? popcornElectronDocumentPanelParam161.contentWidthPx;
  if (popcornElectronDocumentPanelParam160.kind === "table") {
    let popcornElectronDocumentPanelValue870 = popcornElectronDocumentPanelHelper104(popcornElectronDocumentPanelParam160.element, popcornElectronDocumentPanelParam161);
    if (popcornElectronDocumentPanelValue870 !== undefined) return popcornElectronDocumentPanelValue870;
    let popcornElectronDocumentPanelValue871 = popcornElectronDocumentPanelHelper102(popcornElectronDocumentPanelParam160.element, popcornElectronDocumentPanelValue536, popcornElectronDocumentPanelValue537);
    return popcornElectronDocumentPanelValue871 === undefined ? popcornElectronDocumentPanelHelper37(popcornElectronDocumentPanelParam160.element, popcornElectronDocumentPanelValue536) : popcornElectronDocumentPanelValue871;
  }
  if (popcornElectronDocumentPanelHelper59(popcornElectronDocumentPanelParam160.kind)) {
    let popcornElectronDocumentPanelValue872 = popcornElectronDocumentPanelHelper104(popcornElectronDocumentPanelParam160.element, popcornElectronDocumentPanelParam161);
    if (popcornElectronDocumentPanelValue872 !== undefined) return popcornElectronDocumentPanelValue872;
    let popcornElectronDocumentPanelValue873 = popcornElectronDocumentPanelHelper102(popcornElectronDocumentPanelParam160.element, popcornElectronDocumentPanelValue536, popcornElectronDocumentPanelValue537);
    return popcornElectronDocumentPanelValue873 === undefined ? _t(popcornElectronDocumentPanelParam160.element, popcornElectronDocumentPanelValue536) : popcornElectronDocumentPanelValue873;
  }
  return popcornElectronDocumentPanelValue536;
}
function popcornElectronDocumentPanelHelper102(popcornElectronDocumentPanelParam261, popcornElectronDocumentPanelParam262, popcornElectronDocumentPanelParam263) {
  if (!popcornElectronDocumentPanelHelper64(popcornElectronDocumentPanelParam261)) return;
  let popcornElectronDocumentPanelValue646 = popcornElectronDocumentPanelParam261.placement;
  if (popcornElectronDocumentPanelValue646 === undefined) return;
  let popcornElectronDocumentPanelValue647 = popcornElectronDocumentPanelValue646.horizontalAlignment?.trim().toLowerCase();
  if (!popcornElectronDocumentPanelValue647) return;
  let popcornElectronDocumentPanelValue648 = popcornElectronDocumentPanelHelper27(popcornElectronDocumentPanelParam261).widthPx;
  return popcornElectronDocumentPanelValue647 === "center" ? popcornElectronDocumentPanelParam262 + Math.max(0, (popcornElectronDocumentPanelParam263 - popcornElectronDocumentPanelValue648) / 2) : popcornElectronDocumentPanelValue647 === "right" ? popcornElectronDocumentPanelParam262 + Math.max(0, popcornElectronDocumentPanelParam263 - popcornElectronDocumentPanelValue648) : popcornElectronDocumentPanelParam262;
}
function popcornElectronDocumentPanelHelper103(popcornElectronDocumentPanelParam241, popcornElectronDocumentPanelParam242, popcornElectronDocumentPanelParam243) {
  let popcornElectronDocumentPanelValue636 = popcornElectronDocumentPanelHelper62(popcornElectronDocumentPanelParam242.element) && !popcornElectronDocumentPanelHelper61(popcornElectronDocumentPanelParam242.element);
  if (!popcornElectronDocumentPanelValue636 && !popcornElectronDocumentPanelHelper63(popcornElectronDocumentPanelParam242.element)) return;
  let {
    leftPx,
    rightPx,
    topPx,
    bottomPx
  } = popcornElectronDocumentPanelImport26(popcornElectronDocumentPanelParam242.element);
  popcornElectronDocumentPanelHelper47(popcornElectronDocumentPanelParam241, {
    leftPx: popcornElectronDocumentPanelParam243.xPx - leftPx,
    rightPx: popcornElectronDocumentPanelParam243.xPx + popcornElectronDocumentPanelParam243.widthPx + rightPx,
    topPx: popcornElectronDocumentPanelParam243.yPx - topPx,
    bottomPx: popcornElectronDocumentPanelParam243.yPx + popcornElectronDocumentPanelParam243.heightPx + bottomPx,
    emptyTextOnly: popcornElectronDocumentPanelValue636
  });
}
function popcornElectronDocumentPanelHelper104(popcornElectronDocumentPanelParam85, popcornElectronDocumentPanelParam86) {
  if (popcornElectronDocumentPanelParam85.placement?.type !== 2) return;
  let popcornElectronDocumentPanelValue418 = popcornElectronDocumentPanelParam85.placement.horizontalRelativeFrom?.trim().toLowerCase(),
    popcornElectronDocumentPanelValue419 = popcornElectronDocumentPanelParam85.bbox?.widthEmu !== undefined && popcornElectronDocumentPanelParam85.bbox.widthEmu > 0 ? popcornElectronDocumentPanelParam85.bbox.widthEmu * popcornElectronDocumentPanelImport5 : 0;
  if (popcornElectronDocumentPanelParam85.placement.xOffsetEmu !== undefined && Number.isFinite(popcornElectronDocumentPanelParam85.placement.xOffsetEmu)) {
    let popcornElectronDocumentPanelValue944 = popcornElectronDocumentPanelParam85.placement.xOffsetEmu * popcornElectronDocumentPanelImport5;
    return popcornElectronDocumentPanelValue418 === "page" ? popcornElectronDocumentPanelValue944 : popcornElectronDocumentPanelParam86.contentLeftPx + popcornElectronDocumentPanelValue944;
  }
  let popcornElectronDocumentPanelValue420 = popcornElectronDocumentPanelParam85.placement.horizontalAlignment?.trim().toLowerCase();
  if (!popcornElectronDocumentPanelValue420) return;
  let popcornElectronDocumentPanelValue421 = popcornElectronDocumentPanelValue418 === "page",
    popcornElectronDocumentPanelValue422 = popcornElectronDocumentPanelValue421 ? 0 : popcornElectronDocumentPanelParam86.contentLeftPx,
    popcornElectronDocumentPanelValue423 = popcornElectronDocumentPanelValue421 ? popcornElectronDocumentPanelParam86.pageWidthPx : popcornElectronDocumentPanelParam86.contentWidthPx;
  return popcornElectronDocumentPanelValue420 === "center" ? popcornElectronDocumentPanelValue422 + Math.max(0, (popcornElectronDocumentPanelValue423 - popcornElectronDocumentPanelValue419) / 2) : popcornElectronDocumentPanelValue420 === "right" ? popcornElectronDocumentPanelValue422 + Math.max(0, popcornElectronDocumentPanelValue423 - popcornElectronDocumentPanelValue419) : popcornElectronDocumentPanelValue422;
}
function popcornElectronDocumentPanelHelper105(popcornElectronDocumentPanelParam609) {
  return popcornElectronDocumentPanelParam609.firstParagraphSpaceBeforePx > 0 || popcornElectronDocumentPanelParam609.lastParagraphSpaceAfterPx > 0;
}
function popcornElectronDocumentPanelHelper106({
  lineIndex,
  trailingSpaceAfterPx,
  firstParagraphSpaceBeforePx
}) {
  return lineIndex === 0 ? popcornElectronDocumentPanelImport4(trailingSpaceAfterPx, firstParagraphSpaceBeforePx) : 0;
}
function popcornElectronDocumentPanelHelper107(popcornElectronDocumentPanelParam618) {
  return popcornElectronDocumentPanelParam618 ? popcornElectronDocumentPanelParam618.segments.some(item => (item.text ?? "").trim().length > 0) : false;
}
function or(popcornElectronDocumentPanelParam146, popcornElectronDocumentPanelParam147, popcornElectronDocumentPanelParam148) {
  let popcornElectronDocumentPanelValue511 = popcornElectronDocumentPanelParam221 => {
      let popcornElectronDocumentPanelValue595 = popcornElectronDocumentPanelParam147,
        popcornElectronDocumentPanelValue596 = 0,
        popcornElectronDocumentPanelValue597 = false;
      for (; popcornElectronDocumentPanelValue595 < popcornElectronDocumentPanelParam146.length;) {
        let popcornElectronDocumentPanelValue760 = popcornElectronDocumentPanelParam146[popcornElectronDocumentPanelValue595],
          popcornElectronDocumentPanelValue761 = Math.max(1, popcornElectronDocumentPanelValue760?.heightPx ?? 0);
        if (popcornElectronDocumentPanelValue596 + popcornElectronDocumentPanelValue761 > popcornElectronDocumentPanelParam148 + 0.5) break;
        if (popcornElectronDocumentPanelValue596 += popcornElectronDocumentPanelValue761, popcornElectronDocumentPanelValue595 += 1, popcornElectronDocumentPanelParam221 && popcornElectronDocumentPanelValue760?.flowBreakAfter) {
          popcornElectronDocumentPanelValue597 = true;
          break;
        }
      }
      return {
        nextLineIndex: popcornElectronDocumentPanelValue595,
        fragmentHeightPx: popcornElectronDocumentPanelValue596,
        endsWithFlowBreak: popcornElectronDocumentPanelValue597
      };
    },
    popcornElectronDocumentPanelValue512 = popcornElectronDocumentPanelValue511(true);
  if (!popcornElectronDocumentPanelValue512.endsWithFlowBreak) return popcornElectronDocumentPanelValue512;
  let popcornElectronDocumentPanelValue513 = popcornElectronDocumentPanelValue511(false);
  return popcornElectronDocumentPanelValue513.nextLineIndex < popcornElectronDocumentPanelParam146.length ? popcornElectronDocumentPanelValue513 : popcornElectronDocumentPanelValue512;
}
function popcornElectronDocumentPanelHelper108({
  lines,
  startIndex,
  currentY,
  boundaryBottomPx,
  pageContentBottomPx,
  pageFootnoteIds,
  preparedFootnotes,
  footnoteWidthPx,
  theme
}) {
  if (preparedFootnotes.idsByReferenceRunId.size === 0) return or(lines, startIndex, Math.max(0, boundaryBottomPx - currentY));
  let popcornElectronDocumentPanelValue395 = startIndex,
    popcornElectronDocumentPanelValue396 = 0,
    popcornElectronDocumentPanelValue397 = false,
    popcornElectronDocumentPanelValue398 = [...pageFootnoteIds],
    popcornElectronDocumentPanelValue399 = new Set(popcornElectronDocumentPanelValue398);
  for (; popcornElectronDocumentPanelValue395 < lines.length;) {
    let popcornElectronDocumentPanelValue559 = lines[popcornElectronDocumentPanelValue395],
      popcornElectronDocumentPanelValue560 = [...popcornElectronDocumentPanelValue398],
      popcornElectronDocumentPanelValue561 = new Set(popcornElectronDocumentPanelValue399);
    for (let popcornElectronDocumentPanelValue981 of popcornElectronDocumentPanelHelper92(popcornElectronDocumentPanelValue559, preparedFootnotes)) popcornElectronDocumentPanelValue561.has(popcornElectronDocumentPanelValue981) || (popcornElectronDocumentPanelValue560.push(popcornElectronDocumentPanelValue981), popcornElectronDocumentPanelValue561.add(popcornElectronDocumentPanelValue981));
    let popcornElectronDocumentPanelValue562 = popcornElectronDocumentPanelValue560.length > 0 ? popcornElectronDocumentPanelHelper96(preparedFootnotes, popcornElectronDocumentPanelValue560, footnoteWidthPx, theme).reservedHeightPx : 0,
      popcornElectronDocumentPanelValue563 = Math.min(boundaryBottomPx, pageContentBottomPx - popcornElectronDocumentPanelValue562),
      popcornElectronDocumentPanelValue564 = Math.max(0, popcornElectronDocumentPanelValue563 - currentY),
      popcornElectronDocumentPanelValue565 = Math.max(1, popcornElectronDocumentPanelValue559?.heightPx ?? 0);
    if (popcornElectronDocumentPanelValue396 + popcornElectronDocumentPanelValue565 > popcornElectronDocumentPanelValue564 + 0.5) break;
    if (popcornElectronDocumentPanelValue396 += popcornElectronDocumentPanelValue565, popcornElectronDocumentPanelValue395 += 1, popcornElectronDocumentPanelValue398 = popcornElectronDocumentPanelValue560, popcornElectronDocumentPanelValue399 = popcornElectronDocumentPanelValue561, popcornElectronDocumentPanelValue559?.flowBreakAfter) {
      popcornElectronDocumentPanelValue397 = true;
      break;
    }
  }
  return {
    nextLineIndex: popcornElectronDocumentPanelValue395,
    fragmentHeightPx: popcornElectronDocumentPanelValue396,
    endsWithFlowBreak: popcornElectronDocumentPanelValue397
  };
}
function popcornElectronDocumentPanelHelper109(popcornElectronDocumentPanelParam581) {
  return typeof popcornElectronDocumentPanelParam581 == "number" && Number.isFinite(popcornElectronDocumentPanelParam581) && popcornElectronDocumentPanelParam581 > 1 ? Math.floor(popcornElectronDocumentPanelParam581) : 1;
}
function popcornElectronDocumentPanelHelper110(popcornElectronDocumentPanelParam571, popcornElectronDocumentPanelParam572, popcornElectronDocumentPanelParam573) {
  let popcornElectronDocumentPanelValue925 = 0;
  for (let popcornElectronDocumentPanelValue979 = popcornElectronDocumentPanelParam572; popcornElectronDocumentPanelValue979 < popcornElectronDocumentPanelParam573; popcornElectronDocumentPanelValue979 += 1) popcornElectronDocumentPanelValue925 += Math.max(1, popcornElectronDocumentPanelParam571[popcornElectronDocumentPanelValue979] ?? 0);
  return popcornElectronDocumentPanelValue925;
}
function popcornElectronDocumentPanelHelper111(popcornElectronDocumentPanelParam321, popcornElectronDocumentPanelParam322, popcornElectronDocumentPanelParam323) {
  if (popcornElectronDocumentPanelParam323 <= popcornElectronDocumentPanelParam322) return false;
  for (let popcornElectronDocumentPanelValue801 = popcornElectronDocumentPanelParam322; popcornElectronDocumentPanelValue801 < popcornElectronDocumentPanelParam323; popcornElectronDocumentPanelValue801 += 1) {
    let popcornElectronDocumentPanelValue855 = popcornElectronDocumentPanelParam321[popcornElectronDocumentPanelValue801];
    if (popcornElectronDocumentPanelValue855) for (let popcornElectronDocumentPanelValue914 of popcornElectronDocumentPanelValue855.cells) {
      let popcornElectronDocumentPanelValue948 = popcornElectronDocumentPanelHelper109(popcornElectronDocumentPanelValue914.rowSpan);
      if (Math.min(popcornElectronDocumentPanelParam321.length, popcornElectronDocumentPanelValue801 + popcornElectronDocumentPanelValue948) > popcornElectronDocumentPanelParam323) return false;
    }
  }
  return true;
}
function popcornElectronDocumentPanelHelper112(popcornElectronDocumentPanelParam457, popcornElectronDocumentPanelParam458, popcornElectronDocumentPanelParam459) {
  let popcornElectronDocumentPanelValue829 = popcornElectronDocumentPanelParam457.length - popcornElectronDocumentPanelParam458,
    popcornElectronDocumentPanelValue830 = Math.max(1, Math.min(popcornElectronDocumentPanelParam459, popcornElectronDocumentPanelValue829));
  for (let popcornElectronDocumentPanelValue970 = popcornElectronDocumentPanelParam458 + popcornElectronDocumentPanelValue830; popcornElectronDocumentPanelValue970 <= popcornElectronDocumentPanelParam457.length; popcornElectronDocumentPanelValue970 += 1) if (popcornElectronDocumentPanelHelper111(popcornElectronDocumentPanelParam457, popcornElectronDocumentPanelParam458, popcornElectronDocumentPanelValue970)) return popcornElectronDocumentPanelValue970 - popcornElectronDocumentPanelParam458;
  return popcornElectronDocumentPanelValue830;
}
function popcornElectronDocumentPanelHelper113(popcornElectronDocumentPanelParam398) {
  let popcornElectronDocumentPanelValue780 = popcornElectronDocumentPanelParam398.table;
  if (!popcornElectronDocumentPanelValue780 || popcornElectronDocumentPanelValue780.rows.length <= 1 || popcornElectronDocumentPanelValue780.properties?.firstRow !== true) return 0;
  let popcornElectronDocumentPanelValue781 = popcornElectronDocumentPanelValue780.rows[0];
  return popcornElectronDocumentPanelValue781 ? popcornElectronDocumentPanelValue781.cells.some(item => popcornElectronDocumentPanelHelper109(item.rowSpan) > 1) ? 0 : 1 : 0;
}
function popcornElectronDocumentPanelHelper114(popcornElectronDocumentPanelParam288, popcornElectronDocumentPanelParam289, popcornElectronDocumentPanelParam290, popcornElectronDocumentPanelParam291) {
  let popcornElectronDocumentPanelValue675 = popcornElectronDocumentPanelParam288.table;
  if (!popcornElectronDocumentPanelValue675) return popcornElectronDocumentPanelParam288;
  let popcornElectronDocumentPanelValue676 = popcornElectronDocumentPanelParam289 > 0 && popcornElectronDocumentPanelParam291 > 0 ? popcornElectronDocumentPanelValue675.rows.slice(0, popcornElectronDocumentPanelParam291) : [],
    popcornElectronDocumentPanelValue677 = popcornElectronDocumentPanelValue675.rows.slice(popcornElectronDocumentPanelParam289, popcornElectronDocumentPanelParam289 + popcornElectronDocumentPanelParam290);
  return {
    ...popcornElectronDocumentPanelParam288,
    bbox: popcornElectronDocumentPanelParam288.bbox ? {
      ...popcornElectronDocumentPanelParam288.bbox,
      heightEmu: undefined
    } : popcornElectronDocumentPanelParam288.bbox,
    table: {
      ...popcornElectronDocumentPanelValue675,
      rows: [...popcornElectronDocumentPanelValue676, ...popcornElectronDocumentPanelValue677]
    }
  };
}
function popcornElectronDocumentPanelHelper115({
  preparedElement,
  rowOffset,
  availableHeight,
  isFreshPageSlot,
  ctx,
  widthPx,
  theme,
  documentGridLinePitchTwips
}) {
  let popcornElectronDocumentPanelValue279 = preparedElement.element.table;
  if (!popcornElectronDocumentPanelValue279 || popcornElectronDocumentPanelValue279.rows.length === 0 || rowOffset >= popcornElectronDocumentPanelValue279.rows.length) return {
    rowCount: 0,
    widthPx,
    heightPx: 0
  };
  let popcornElectronDocumentPanelValue280 = popcornElectronDocumentPanelValue279.rows,
    popcornElectronDocumentPanelValue281 = popcornElectronDocumentPanelHelper101(preparedElement, ctx, widthPx, theme, documentGridLinePitchTwips),
    popcornElectronDocumentPanelValue282 = popcornElectronDocumentPanelValue279.properties?.keepTogether === true,
    popcornElectronDocumentPanelValue283 = popcornElectronDocumentPanelHelper113(preparedElement.element),
    popcornElectronDocumentPanelValue284 = rowOffset > 0 ? popcornElectronDocumentPanelHelper110(popcornElectronDocumentPanelValue281.rowHeightsPx, 0, popcornElectronDocumentPanelValue283) : 0,
    popcornElectronDocumentPanelValue285 = rowOffset === 0 && popcornElectronDocumentPanelValue283 > 0 && popcornElectronDocumentPanelValue279.rows.length > popcornElectronDocumentPanelValue283 ? popcornElectronDocumentPanelValue283 + 1 : 1,
    popcornElectronDocumentPanelValue286 = Math.min(popcornElectronDocumentPanelValue285, popcornElectronDocumentPanelValue279.rows.length - rowOffset);
  if (popcornElectronDocumentPanelValue282) {
    let popcornElectronDocumentPanelValue598 = popcornElectronDocumentPanelValue279.rows.length - rowOffset,
      popcornElectronDocumentPanelValue599 = popcornElectronDocumentPanelValue284 + popcornElectronDocumentPanelHelper110(popcornElectronDocumentPanelValue281.rowHeightsPx, rowOffset, popcornElectronDocumentPanelValue279.rows.length);
    if (!isFreshPageSlot && popcornElectronDocumentPanelValue599 > availableHeight + 0.5) return {
      rowCount: 0,
      widthPx: popcornElectronDocumentPanelValue281.widthPx,
      heightPx: 0
    };
    let popcornElectronDocumentPanelValue600 = popcornElectronDocumentPanelHelper114(preparedElement.element, rowOffset, popcornElectronDocumentPanelValue598, popcornElectronDocumentPanelValue283),
      popcornElectronDocumentPanelValue601 = popcornElectronDocumentPanelHelper138(popcornElectronDocumentPanelValue600, "table", ctx, widthPx, theme);
    return {
      element: popcornElectronDocumentPanelValue600,
      rowCount: popcornElectronDocumentPanelValue598,
      widthPx: popcornElectronDocumentPanelValue601.widthPx,
      heightPx: popcornElectronDocumentPanelValue601.heightPx > 0 ? popcornElectronDocumentPanelValue601.heightPx : popcornElectronDocumentPanelValue599
    };
  }
  let popcornElectronDocumentPanelValue287 = popcornElectronDocumentPanelValue284,
    popcornElectronDocumentPanelValue288 = 0,
    popcornElectronDocumentPanelValue289 = 0;
  for (let popcornElectronDocumentPanelValue788 = rowOffset; popcornElectronDocumentPanelValue788 < popcornElectronDocumentPanelValue279.rows.length; popcornElectronDocumentPanelValue788 += 1) {
    popcornElectronDocumentPanelValue287 += Math.max(1, popcornElectronDocumentPanelValue281.rowHeightsPx[popcornElectronDocumentPanelValue788] ?? 0);
    let popcornElectronDocumentPanelValue860 = popcornElectronDocumentPanelValue788 - rowOffset + 1;
    if (popcornElectronDocumentPanelValue287 > availableHeight + 0.5) break;
    popcornElectronDocumentPanelValue860 >= popcornElectronDocumentPanelValue286 && popcornElectronDocumentPanelHelper111(popcornElectronDocumentPanelValue280, rowOffset, popcornElectronDocumentPanelValue788 + 1) && (popcornElectronDocumentPanelValue288 = popcornElectronDocumentPanelValue860, popcornElectronDocumentPanelValue289 = popcornElectronDocumentPanelValue287);
  }
  if (popcornElectronDocumentPanelValue288 === 0) {
    if (!isFreshPageSlot) return {
      rowCount: 0,
      widthPx: popcornElectronDocumentPanelValue281.widthPx,
      heightPx: 0
    };
    popcornElectronDocumentPanelValue288 = popcornElectronDocumentPanelHelper112(popcornElectronDocumentPanelValue280, rowOffset, popcornElectronDocumentPanelValue286);
    popcornElectronDocumentPanelValue289 = popcornElectronDocumentPanelValue284 + popcornElectronDocumentPanelHelper110(popcornElectronDocumentPanelValue281.rowHeightsPx, rowOffset, rowOffset + popcornElectronDocumentPanelValue288);
  }
  let popcornElectronDocumentPanelValue290 = popcornElectronDocumentPanelHelper114(preparedElement.element, rowOffset, popcornElectronDocumentPanelValue288, popcornElectronDocumentPanelValue283),
    popcornElectronDocumentPanelValue291 = popcornElectronDocumentPanelHelper138(popcornElectronDocumentPanelValue290, "table", ctx, widthPx, theme);
  return {
    element: popcornElectronDocumentPanelValue290,
    rowCount: popcornElectronDocumentPanelValue288,
    widthPx: popcornElectronDocumentPanelValue291.widthPx,
    heightPx: popcornElectronDocumentPanelValue291.heightPx > 0 ? popcornElectronDocumentPanelValue291.heightPx : popcornElectronDocumentPanelValue289
  };
}
function popcornElectronDocumentPanelHelper116(popcornElectronDocumentPanelParam415) {
  if ((popcornElectronDocumentPanelParam415.paragraphs?.length ?? 0) !== 1) return false;
  let popcornElectronDocumentPanelValue800 = popcornElectronDocumentPanelParam415.paragraphs?.[0];
  return popcornElectronDocumentPanelValue800 ? (popcornElectronDocumentPanelValue800.runs ?? []).every(item => (item.text ?? "").trim().length === 0) : false;
}
function popcornElectronDocumentPanelHelper117(popcornElectronDocumentPanelParam657, popcornElectronDocumentPanelParam658) {
  return popcornElectronDocumentPanelHelper116(popcornElectronDocumentPanelParam657) ? popcornElectronDocumentPanelParam658.length > 0 && popcornElectronDocumentPanelParam658.every(item => !popcornElectronDocumentPanelHelper107(item)) : false;
}
function _r(popcornElectronDocumentPanelParam540) {
  let popcornElectronDocumentPanelValue909 = popcornElectronDocumentPanelParam540.paragraphs ?? [];
  return popcornElectronDocumentPanelValue909.length === 1 && popcornElectronDocumentPanelValue909[0]?.docxSectionBreakCarrier === true && popcornElectronDocumentPanelHelper116(popcornElectronDocumentPanelParam540);
}
function popcornElectronDocumentPanelHelper118(popcornElectronDocumentPanelParam409) {
  return popcornElectronDocumentPanelParam409 ? popcornElectronDocumentPanelParam409.segments.length === 0 && popcornElectronDocumentPanelParam409.widthPx === 0 && popcornElectronDocumentPanelParam409.baselineOffsetPx === 0 && popcornElectronDocumentPanelParam409.maxAscentPx === 0 && popcornElectronDocumentPanelParam409.maxDescentPx === 0 : false;
}
function popcornElectronDocumentPanelHelper119({
  lineIndex,
  lines,
  previousElementWasEmptyParagraph,
  previousEmptyParagraphHasSpacing,
  firstParagraphSpaceBeforePx
}) {
  return lineIndex !== 0 || firstParagraphSpaceBeforePx <= 0 || !popcornElectronDocumentPanelHelper118(lines[0]) ? false : previousElementWasEmptyParagraph && previousEmptyParagraphHasSpacing;
}
function popcornElectronDocumentPanelHelper120(popcornElectronDocumentPanelParam477, popcornElectronDocumentPanelParam478) {
  let popcornElectronDocumentPanelValue846 = popcornElectronDocumentPanelParam477[popcornElectronDocumentPanelParam478];
  return popcornElectronDocumentPanelValue846 ? popcornElectronDocumentPanelHelper60(popcornElectronDocumentPanelValue846.kind) ? !(popcornElectronDocumentPanelHelper61(popcornElectronDocumentPanelValue846.element) || popcornElectronDocumentPanelHelper62(popcornElectronDocumentPanelValue846.element) || popcornElectronDocumentPanelHelper63(popcornElectronDocumentPanelValue846.element) && !popcornElectronDocumentPanelHelper31(popcornElectronDocumentPanelValue846.element)) : true : false;
}
function popcornElectronDocumentPanelHelper121(popcornElectronDocumentPanelParam38, popcornElectronDocumentPanelParam39, popcornElectronDocumentPanelParam40, popcornElectronDocumentPanelParam41, popcornElectronDocumentPanelParam42, popcornElectronDocumentPanelParam43 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam44) {
  let popcornElectronDocumentPanelValue361 = 0;
  for (let popcornElectronDocumentPanelValue366 = popcornElectronDocumentPanelParam40 + 1; popcornElectronDocumentPanelValue366 < popcornElectronDocumentPanelParam39.length; popcornElectronDocumentPanelValue366 += 1) {
    let popcornElectronDocumentPanelValue383 = popcornElectronDocumentPanelParam39[popcornElectronDocumentPanelValue366];
    if (!popcornElectronDocumentPanelValue383 || !popcornElectronDocumentPanelHelper120(popcornElectronDocumentPanelParam39, popcornElectronDocumentPanelValue366)) continue;
    if (popcornElectronDocumentPanelValue383.kind !== "text") return popcornElectronDocumentPanelValue361 + popcornElectronDocumentPanelHelper100(popcornElectronDocumentPanelValue383, popcornElectronDocumentPanelParam41, popcornElectronDocumentPanelParam42, popcornElectronDocumentPanelParam43, popcornElectronDocumentPanelParam44).heightPx;
    let popcornElectronDocumentPanelValue384 = popcornElectronDocumentPanelHelper99(popcornElectronDocumentPanelValue383, popcornElectronDocumentPanelParam42, popcornElectronDocumentPanelParam43, popcornElectronDocumentPanelParam44),
      popcornElectronDocumentPanelValue385 = popcornElectronDocumentPanelHelper117(popcornElectronDocumentPanelValue383.element, popcornElectronDocumentPanelValue384),
      className = popcornElectronDocumentPanelHelper57({
        previousParagraphStyleId: popcornElectronDocumentPanelParam38.lastParagraphStyleId,
        currentParagraphStyleId: popcornElectronDocumentPanelValue383.firstParagraphStyleId,
        currentParagraphUsesContextualSpacing: popcornElectronDocumentPanelValue383.firstParagraphUsesContextualSpacing
      });
    if (!popcornElectronDocumentPanelValue385 && popcornElectronDocumentPanelValue383.firstParagraphSpaceBeforePx <= 0 && popcornElectronDocumentPanelValue361 <= 0) return;
    let popcornElectronDocumentPanelValue386 = popcornElectronDocumentPanelHelper119({
      lineIndex: 0,
      lines: popcornElectronDocumentPanelValue384,
      previousElementWasEmptyParagraph: true,
      previousEmptyParagraphHasSpacing: popcornElectronDocumentPanelHelper105(popcornElectronDocumentPanelParam38),
      firstParagraphSpaceBeforePx: popcornElectronDocumentPanelValue383.firstParagraphSpaceBeforePx
    }) || className ? 1 : 0;
    if (popcornElectronDocumentPanelValue386 >= popcornElectronDocumentPanelValue384.length) return popcornElectronDocumentPanelValue361;
    let popcornElectronDocumentPanelValue387 = popcornElectronDocumentPanelValue384.slice(popcornElectronDocumentPanelValue386).reduce((accumulator, current) => accumulator + Math.max(1, current.heightPx), 0);
    if (popcornElectronDocumentPanelValue385) {
      popcornElectronDocumentPanelValue361 += popcornElectronDocumentPanelValue387;
      continue;
    }
    return popcornElectronDocumentPanelValue361 + popcornElectronDocumentPanelValue387;
  }
}
function popcornElectronDocumentPanelHelper122({
  preparedElements,
  settings,
  sectionStartY,
  columnBottomPx,
  initialOccupiedRegions,
  sectionIndex,
  ctx,
  theme
}) {
  if (columnBottomPx <= sectionStartY) return;
  let popcornElectronDocumentPanelValue185 = [],
    popcornElectronDocumentPanelValue186 = 0,
    popcornElectronDocumentPanelValue187 = $t(settings, sectionStartY),
    popcornElectronDocumentPanelValue188 = popcornElectronDocumentPanelHelper50(settings),
    popcornElectronDocumentPanelValue189 = popcornElectronDocumentPanelHelper51(settings),
    popcornElectronDocumentPanelValue190 = popcornElectronDocumentPanelHelper51(settings),
    popcornElectronDocumentPanelValue191 = popcornElectronDocumentPanelHelper52(settings),
    popcornElectronDocumentPanelValue192 = new Map(),
    popcornElectronDocumentPanelValue193 = popcornElectronDocumentPanelHelper53(settings),
    popcornElectronDocumentPanelValue194 = popcornElectronDocumentPanelHelper43(initialOccupiedRegions),
    popcornElectronDocumentPanelValue195 = 0,
    popcornElectronDocumentPanelValue196 = false,
    popcornElectronDocumentPanelValue197 = false,
    popcornElectronDocumentPanelValue198,
    popcornElectronDocumentPanelValue199 = new Map();
  for (let popcornElectronDocumentPanelValue216 = 0; popcornElectronDocumentPanelValue216 < preparedElements.length; popcornElectronDocumentPanelValue216 += 1) {
    let popcornElectronDocumentPanelValue217 = preparedElements[popcornElectronDocumentPanelValue216];
    if (popcornElectronDocumentPanelValue217.docxSectionBreakCarrier) {
      popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue217.lastParagraphSpaceAfterPx;
      popcornElectronDocumentPanelValue189[popcornElectronDocumentPanelValue186] = false;
      popcornElectronDocumentPanelValue190[popcornElectronDocumentPanelValue186] = false;
      popcornElectronDocumentPanelValue191[popcornElectronDocumentPanelValue186] = undefined;
      popcornElectronDocumentPanelValue195 = popcornElectronDocumentPanelValue217.lastParagraphSpaceAfterPx;
      popcornElectronDocumentPanelValue196 = false;
      popcornElectronDocumentPanelValue197 = false;
      popcornElectronDocumentPanelValue198 = undefined;
      continue;
    }
    if (popcornElectronDocumentPanelValue217.kind !== "text") {
      let popcornElectronDocumentPanelValue324 = false;
      for (; !popcornElectronDocumentPanelValue324;) {
        let popcornElectronDocumentPanelValue326 = settings.columns.widths[popcornElectronDocumentPanelValue186] ?? settings.contentWidthPx,
          popcornElectronDocumentPanelValue327 = popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] ?? sectionStartY,
          popcornElectronDocumentPanelValue328 = popcornElectronDocumentPanelValue327 === sectionStartY,
          popcornElectronDocumentPanelValue329 = popcornElectronDocumentPanelValue327 + (popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] ?? 0),
          popcornElectronDocumentPanelValue330 = popcornElectronDocumentPanelHelper100(popcornElectronDocumentPanelValue217, ctx, popcornElectronDocumentPanelValue326, theme, settings.documentGridLinePitchTwips),
          popcornElectronDocumentPanelValue331 = _n(popcornElectronDocumentPanelValue217, popcornElectronDocumentPanelValue329, popcornElectronDocumentPanelValue192, popcornElectronDocumentPanelValue193[popcornElectronDocumentPanelValue186]),
          popcornElectronDocumentPanelValue332 = popcornElectronDocumentPanelHelper69(popcornElectronDocumentPanelValue217, popcornElectronDocumentPanelValue329, popcornElectronDocumentPanelValue331, popcornElectronDocumentPanelValue330.heightPx);
        if (popcornElectronDocumentPanelValue332 > columnBottomPx) {
          if (!popcornElectronDocumentPanelValue328 && popcornElectronDocumentPanelValue186 < settings.columns.widths.length - 1) {
            popcornElectronDocumentPanelValue186 += 1;
            continue;
          }
          return;
        }
        popcornElectronDocumentPanelValue185.push({
          kind: popcornElectronDocumentPanelValue217.kind,
          element: popcornElectronDocumentPanelValue217.element,
          xPx: $n(popcornElectronDocumentPanelValue217, settings, popcornElectronDocumentPanelValue186),
          yPx: popcornElectronDocumentPanelValue331,
          widthPx: popcornElectronDocumentPanelValue330.widthPx,
          heightPx: popcornElectronDocumentPanelValue330.heightPx,
          flow: popcornElectronDocumentPanelHelper55({
            settings,
            sectionIndex,
            sourceElementIndex: popcornElectronDocumentPanelValue216,
            fragmentIndex: on(popcornElectronDocumentPanelValue199, popcornElectronDocumentPanelValue216),
            columnIndex: popcornElectronDocumentPanelValue186,
            balanced: true
          })
        });
        popcornElectronDocumentPanelHelper103(popcornElectronDocumentPanelValue194, popcornElectronDocumentPanelValue217, {
          xPx: $n(popcornElectronDocumentPanelValue217, settings, popcornElectronDocumentPanelValue186),
          yPx: popcornElectronDocumentPanelValue331,
          widthPx: popcornElectronDocumentPanelValue330.widthPx,
          heightPx: popcornElectronDocumentPanelValue330.heightPx
        });
        popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue332;
        popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] = 0;
        popcornElectronDocumentPanelValue189[popcornElectronDocumentPanelValue186] = false;
        popcornElectronDocumentPanelValue190[popcornElectronDocumentPanelValue186] = false;
        popcornElectronDocumentPanelValue191[popcornElectronDocumentPanelValue186] = undefined;
        popcornElectronDocumentPanelValue195 = 0;
        popcornElectronDocumentPanelValue196 = false;
        popcornElectronDocumentPanelValue197 = false;
        popcornElectronDocumentPanelValue198 = undefined;
        popcornElectronDocumentPanelValue324 = true;
      }
      continue;
    }
    let popcornElectronDocumentPanelValue218 = 0,
      popcornElectronDocumentPanelValue219 = false;
    for (; !popcornElectronDocumentPanelValue219;) {
      let popcornElectronDocumentPanelValue220 = settings.columns.widths[popcornElectronDocumentPanelValue186] ?? settings.contentWidthPx,
        popcornElectronDocumentPanelValue221 = popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] ?? sectionStartY,
        popcornElectronDocumentPanelValue222 = popcornElectronDocumentPanelHelper99(popcornElectronDocumentPanelValue217, popcornElectronDocumentPanelValue220, theme, settings.documentGridLinePitchTwips);
      if (popcornElectronDocumentPanelValue222.length === 0 || popcornElectronDocumentPanelValue218 >= popcornElectronDocumentPanelValue222.length) {
        popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue217.element, popcornElectronDocumentPanelValue221, popcornElectronDocumentPanelValue192);
        popcornElectronDocumentPanelValue193[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue221;
        popcornElectronDocumentPanelValue219 = true;
        break;
      }
      let popcornElectronDocumentPanelValue223 = popcornElectronDocumentPanelValue189[popcornElectronDocumentPanelValue186] ?? false,
        popcornElectronDocumentPanelValue224 = popcornElectronDocumentPanelValue190[popcornElectronDocumentPanelValue186] ?? false,
        popcornElectronDocumentPanelValue225 = popcornElectronDocumentPanelHelper119({
          lineIndex: popcornElectronDocumentPanelValue218,
          lines: popcornElectronDocumentPanelValue222,
          previousElementWasEmptyParagraph: popcornElectronDocumentPanelValue223,
          previousEmptyParagraphHasSpacing: popcornElectronDocumentPanelValue224,
          firstParagraphSpaceBeforePx: popcornElectronDocumentPanelValue217.firstParagraphSpaceBeforePx
        }),
        className = popcornElectronDocumentPanelHelper57({
          previousParagraphStyleId: popcornElectronDocumentPanelValue191[popcornElectronDocumentPanelValue186],
          currentParagraphStyleId: popcornElectronDocumentPanelValue217.firstParagraphStyleId,
          currentParagraphUsesContextualSpacing: popcornElectronDocumentPanelValue217.firstParagraphUsesContextualSpacing
        }),
        popcornElectronDocumentPanelValue226 = popcornElectronDocumentPanelValue225 || className && popcornElectronDocumentPanelValue218 === 0 && popcornElectronDocumentPanelHelper118(popcornElectronDocumentPanelValue222[0]),
        popcornElectronDocumentPanelValue227 = popcornElectronDocumentPanelValue226 && popcornElectronDocumentPanelValue218 === 0 ? 1 : popcornElectronDocumentPanelValue218;
      if (popcornElectronDocumentPanelValue227 >= popcornElectronDocumentPanelValue222.length) {
        popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue217.element, popcornElectronDocumentPanelValue221, popcornElectronDocumentPanelValue192);
        popcornElectronDocumentPanelValue193[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue221;
        popcornElectronDocumentPanelValue219 = true;
        break;
      }
      let popcornElectronDocumentPanelValue228 = popcornElectronDocumentPanelHelper117(popcornElectronDocumentPanelValue217.element, popcornElectronDocumentPanelValue222),
        popcornElectronDocumentPanelValue229 = popcornElectronDocumentPanelHelper106({
          lineIndex: popcornElectronDocumentPanelValue227,
          trailingSpaceAfterPx: className ? 0 : popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] ?? 0,
          firstParagraphSpaceBeforePx: popcornElectronDocumentPanelValue226 ? 0 : popcornElectronDocumentPanelValue217.firstParagraphSpaceBeforePx
        }),
        popcornElectronDocumentPanelValue230 = popcornElectronDocumentPanelHelper48(popcornElectronDocumentPanelValue194, settings.columns.xPositions[popcornElectronDocumentPanelValue186] ?? settings.contentLeftPx, popcornElectronDocumentPanelValue220, popcornElectronDocumentPanelValue221 - popcornElectronDocumentPanelValue229, columnBottomPx, Math.max(1, popcornElectronDocumentPanelValue222[popcornElectronDocumentPanelValue227]?.heightPx ?? 0), popcornElectronDocumentPanelValue228),
        popcornElectronDocumentPanelValue231 = popcornElectronDocumentPanelValue230.currentY,
        popcornElectronDocumentPanelValue232 = Math.max(0, popcornElectronDocumentPanelValue230.boundaryBottomPx - popcornElectronDocumentPanelValue231),
        popcornElectronDocumentPanelValue233 = popcornElectronDocumentPanelValue221 === sectionStartY,
        {
          nextLineIndex,
          fragmentHeightPx,
          endsWithFlowBreak
        } = or(popcornElectronDocumentPanelValue222, popcornElectronDocumentPanelValue227, popcornElectronDocumentPanelValue232);
      if (nextLineIndex === popcornElectronDocumentPanelValue227) {
        if (!popcornElectronDocumentPanelValue233) {
          if (popcornElectronDocumentPanelValue186 < settings.columns.widths.length - 1) {
            popcornElectronDocumentPanelValue186 += 1;
            continue;
          }
          return;
        }
        if (fragmentHeightPx = Math.max(1, popcornElectronDocumentPanelValue222[popcornElectronDocumentPanelValue227]?.heightPx ?? 0), fragmentHeightPx > popcornElectronDocumentPanelValue232) return;
        nextLineIndex = Math.min(popcornElectronDocumentPanelValue222.length, popcornElectronDocumentPanelValue227 + 1);
        endsWithFlowBreak = false;
      }
      if (popcornElectronDocumentPanelValue185.push({
        kind: "text",
        element: popcornElectronDocumentPanelValue217.element,
        xPx: settings.columns.xPositions[popcornElectronDocumentPanelValue186] ?? settings.contentLeftPx,
        yPx: popcornElectronDocumentPanelValue231,
        widthPx: popcornElectronDocumentPanelValue220,
        heightPx: fragmentHeightPx,
        flow: popcornElectronDocumentPanelHelper55({
          settings,
          sectionIndex,
          sourceElementIndex: popcornElectronDocumentPanelValue216,
          fragmentIndex: on(popcornElectronDocumentPanelValue199, popcornElectronDocumentPanelValue216),
          columnIndex: popcornElectronDocumentPanelValue186,
          lineStartIndex: popcornElectronDocumentPanelValue227 + 1,
          lineEndIndex: nextLineIndex,
          balanced: true
        }),
        textLines: popcornElectronDocumentPanelValue222.slice(popcornElectronDocumentPanelValue227, nextLineIndex)
      }), popcornElectronDocumentPanelValue218 === 0 && (popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue217.element, popcornElectronDocumentPanelValue231, popcornElectronDocumentPanelValue192), popcornElectronDocumentPanelValue193[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue231), popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue231 + fragmentHeightPx, popcornElectronDocumentPanelValue218 = nextLineIndex, popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] = 0, endsWithFlowBreak && popcornElectronDocumentPanelValue218 < popcornElectronDocumentPanelValue222.length) {
        if (popcornElectronDocumentPanelValue186 < settings.columns.widths.length - 1) {
          popcornElectronDocumentPanelValue186 += 1;
          continue;
        }
        return;
      }
      if (popcornElectronDocumentPanelValue218 >= popcornElectronDocumentPanelValue222.length) {
        let popcornElectronDocumentPanelValue549 = (popcornElectronDocumentPanelValue217.element.paragraphs?.length ?? 0) > 1 ? 8 : 0;
        popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] = (popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] ?? sectionStartY) + popcornElectronDocumentPanelValue549;
        popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue549 > 0 ? 0 : popcornElectronDocumentPanelValue217.lastParagraphSpaceAfterPx;
        popcornElectronDocumentPanelValue189[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelHelper117(popcornElectronDocumentPanelValue217.element, popcornElectronDocumentPanelValue222);
        popcornElectronDocumentPanelValue190[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue189[popcornElectronDocumentPanelValue186] === true && popcornElectronDocumentPanelHelper105(popcornElectronDocumentPanelValue217);
        popcornElectronDocumentPanelValue191[popcornElectronDocumentPanelValue186] = popcornElectronDocumentPanelValue217.lastParagraphStyleId;
        popcornElectronDocumentPanelValue195 = popcornElectronDocumentPanelValue188[popcornElectronDocumentPanelValue186] ?? 0;
        popcornElectronDocumentPanelValue196 = popcornElectronDocumentPanelValue189[popcornElectronDocumentPanelValue186] ?? false;
        popcornElectronDocumentPanelValue197 = popcornElectronDocumentPanelValue190[popcornElectronDocumentPanelValue186] ?? false;
        popcornElectronDocumentPanelValue198 = popcornElectronDocumentPanelValue217.lastParagraphStyleId;
        popcornElectronDocumentPanelValue219 = true;
        break;
      }
      if ((popcornElectronDocumentPanelValue187[popcornElectronDocumentPanelValue186] ?? sectionStartY) >= columnBottomPx) {
        if (popcornElectronDocumentPanelValue186 < settings.columns.widths.length - 1) {
          popcornElectronDocumentPanelValue186 += 1;
          continue;
        }
        return;
      }
    }
  }
  return {
    bodyElements: popcornElectronDocumentPanelValue185,
    endY: Math.max(...popcornElectronDocumentPanelValue187),
    trailingSpaceAfterPx: popcornElectronDocumentPanelValue195,
    previousEmptyParagraph: popcornElectronDocumentPanelValue196,
    previousEmptyParagraphHasSpacing: popcornElectronDocumentPanelValue197,
    previousParagraphStyleId: popcornElectronDocumentPanelValue198,
    occupiedRegions: popcornElectronDocumentPanelValue194
  };
}
function popcornElectronDocumentPanelHelper123({
  preparedElements,
  settings,
  sectionStartY,
  initialOccupiedRegions,
  sectionIndex,
  ctx,
  theme
}) {
  if (preparedElements.length === 0) return {
    bodyElements: [],
    endY: sectionStartY,
    trailingSpaceAfterPx: 0,
    previousEmptyParagraph: false,
    previousEmptyParagraphHasSpacing: false,
    previousParagraphStyleId: undefined,
    occupiedRegions: popcornElectronDocumentPanelHelper43(initialOccupiedRegions)
  };
  let popcornElectronDocumentPanelValue378 = Math.floor(settings.contentBottomPx - sectionStartY);
  if (popcornElectronDocumentPanelValue378 <= 0) return;
  let popcornElectronDocumentPanelValue379 = 1,
    popcornElectronDocumentPanelValue380 = popcornElectronDocumentPanelValue378,
    popcornElectronDocumentPanelValue381,
    popcornElectronDocumentPanelValue382;
  for (; popcornElectronDocumentPanelValue379 <= popcornElectronDocumentPanelValue380;) {
    let popcornElectronDocumentPanelValue614 = Math.floor((popcornElectronDocumentPanelValue379 + popcornElectronDocumentPanelValue380) / 2),
      popcornElectronDocumentPanelValue615 = popcornElectronDocumentPanelHelper122({
        preparedElements,
        settings,
        sectionStartY,
        columnBottomPx: Math.min(settings.contentBottomPx, sectionStartY + popcornElectronDocumentPanelValue614),
        initialOccupiedRegions,
        sectionIndex,
        ctx,
        theme
      });
    popcornElectronDocumentPanelValue615 ? (popcornElectronDocumentPanelValue381 = popcornElectronDocumentPanelValue615, popcornElectronDocumentPanelValue382 = popcornElectronDocumentPanelValue614, popcornElectronDocumentPanelValue380 = popcornElectronDocumentPanelValue614 - 1) : popcornElectronDocumentPanelValue379 = popcornElectronDocumentPanelValue614 + 1;
  }
  if (!(!popcornElectronDocumentPanelValue381 || popcornElectronDocumentPanelValue382 === undefined)) return popcornElectronDocumentPanelValue381;
}
function popcornElectronDocumentPanelHelper124(popcornElectronDocumentPanelParam277) {
  let popcornElectronDocumentPanelValue664 = popcornElectronDocumentPanelParam277.pageSetup?.pageMargin ?? popcornElectronDocumentPanelValue25;
  return {
    topPx: popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue664.top ?? popcornElectronDocumentPanelValue25.top),
    bottomPx: popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue664.bottom ?? popcornElectronDocumentPanelValue25.bottom),
    leftPx: popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue664.left ?? popcornElectronDocumentPanelValue25.left),
    rightPx: popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue664.right ?? popcornElectronDocumentPanelValue25.right),
    headerPx: popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue664.header ?? popcornElectronDocumentPanelValue25.header),
    footerPx: popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue664.footer ?? popcornElectronDocumentPanelValue25.footer)
  };
}
function popcornElectronDocumentPanelHelper125(popcornElectronDocumentPanelParam777) {
  return (popcornElectronDocumentPanelParam777 ?? "").includes("__docxMirrorMargins:1");
}
function popcornElectronDocumentPanelHelper126(popcornElectronDocumentPanelParam603, popcornElectronDocumentPanelParam604, popcornElectronDocumentPanelParam605) {
  return popcornElectronDocumentPanelParam605 % 2 != 0 || !popcornElectronDocumentPanelHelper125(popcornElectronDocumentPanelParam603) ? 0 : popcornElectronDocumentPanelParam604.margins.rightPx - popcornElectronDocumentPanelParam604.margins.leftPx;
}
function popcornElectronDocumentPanelHelper127(event, popcornElectronDocumentPanelParam84 = 0) {
  return {
    key: event.key,
    margins: {
      topPx: event.margins.topPx,
      bottomPx: event.margins.bottomPx,
      leftPx: event.margins.leftPx,
      rightPx: event.margins.rightPx,
      headerPx: event.margins.headerPx,
      footerPx: event.margins.footerPx
    },
    contentFrame: {
      xPx: event.contentLeftPx + popcornElectronDocumentPanelParam84,
      yPx: event.contentTopPx,
      widthPx: event.contentWidthPx,
      heightPx: event.contentBottomPx - event.contentTopPx
    },
    columns: event.columns.widths.map((item, index) => ({
      index: index + 1,
      frame: {
        xPx: (event.columns.xPositions[index] ?? event.contentLeftPx) + popcornElectronDocumentPanelParam84,
        yPx: event.contentTopPx,
        widthPx: item,
        heightPx: event.contentBottomPx - event.contentTopPx
      }
    })),
    documentGrid: event.documentGrid,
    mirrorMarginXOffsetPx: popcornElectronDocumentPanelParam84
  };
}
function popcornElectronDocumentPanelHelper128(popcornElectronDocumentPanelParam758, popcornElectronDocumentPanelParam759) {
  return {
    ...popcornElectronDocumentPanelParam758,
    xPx: popcornElectronDocumentPanelParam758.xPx + popcornElectronDocumentPanelParam759
  };
}
function popcornElectronDocumentPanelHelper129(popcornElectronDocumentPanelParam611, popcornElectronDocumentPanelParam612) {
  return popcornElectronDocumentPanelParam611?.columnFrame ? {
    ...popcornElectronDocumentPanelParam611,
    columnFrame: popcornElectronDocumentPanelHelper128(popcornElectronDocumentPanelParam611.columnFrame, popcornElectronDocumentPanelParam612)
  } : popcornElectronDocumentPanelParam611;
}
function popcornElectronDocumentPanelHelper130(popcornElectronDocumentPanelParam512, popcornElectronDocumentPanelParam513) {
  return {
    ...popcornElectronDocumentPanelParam512,
    xPx: popcornElectronDocumentPanelParam512.xPx + popcornElectronDocumentPanelParam513,
    flow: popcornElectronDocumentPanelHelper129(popcornElectronDocumentPanelParam512.flow, popcornElectronDocumentPanelParam513),
    children: popcornElectronDocumentPanelParam512.children?.map(popcornElectronDocumentPanelParam839 => popcornElectronDocumentPanelHelper130(popcornElectronDocumentPanelParam839, popcornElectronDocumentPanelParam513))
  };
}
function popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelParam128, popcornElectronDocumentPanelParam129, popcornElectronDocumentPanelParam130, popcornElectronDocumentPanelParam131 = {}) {
  let popcornElectronDocumentPanelValue495 = popcornElectronDocumentPanelHelper126(popcornElectronDocumentPanelParam128.sectionId, popcornElectronDocumentPanelParam129, popcornElectronDocumentPanelParam130),
    popcornElectronDocumentPanelValue496 = Math.abs(popcornElectronDocumentPanelValue495) < 0.01 ? popcornElectronDocumentPanelParam128 : {
      ...popcornElectronDocumentPanelParam128,
      layout: popcornElectronDocumentPanelHelper127(popcornElectronDocumentPanelParam129, popcornElectronDocumentPanelValue495),
      headerElements: popcornElectronDocumentPanelParam128.headerElements.map(item => popcornElectronDocumentPanelHelper130(item, popcornElectronDocumentPanelValue495)),
      bodyElements: popcornElectronDocumentPanelParam128.bodyElements.map(item => popcornElectronDocumentPanelHelper130(item, popcornElectronDocumentPanelValue495)),
      footerElements: popcornElectronDocumentPanelParam128.footerElements.map(item => popcornElectronDocumentPanelHelper130(item, popcornElectronDocumentPanelValue495)),
      pageNumberElement: popcornElectronDocumentPanelParam128.pageNumberElement ? popcornElectronDocumentPanelHelper130(popcornElectronDocumentPanelParam128.pageNumberElement, popcornElectronDocumentPanelValue495) : undefined
    };
  return popcornElectronDocumentPanelParam131.layoutMode === "pageless" ? popcornElectronDocumentPanelHelper132(popcornElectronDocumentPanelValue496, popcornElectronDocumentPanelParam129, popcornElectronDocumentPanelParam131) : popcornElectronDocumentPanelValue496;
}
function popcornElectronDocumentPanelHelper132(popcornElectronDocumentPanelParam124, popcornElectronDocumentPanelParam125, popcornElectronDocumentPanelParam126) {
  let popcornElectronDocumentPanelValue490 = popcornElectronDocumentPanelHelper133(popcornElectronDocumentPanelParam124.bodyElements),
    popcornElectronDocumentPanelValue491 = Math.max(popcornElectronDocumentPanelParam125.contentTopPx, popcornElectronDocumentPanelValue490),
    popcornElectronDocumentPanelValue492 = Math.ceil(Math.max(popcornElectronDocumentPanelParam125.basePageHeightPx, popcornElectronDocumentPanelParam126.pagelessMinHeightPx ?? 0, popcornElectronDocumentPanelValue491 + popcornElectronDocumentPanelParam125.margins.bottomPx)),
    popcornElectronDocumentPanelValue493 = Math.max(1, popcornElectronDocumentPanelValue492 - popcornElectronDocumentPanelParam125.contentTopPx - popcornElectronDocumentPanelParam125.margins.bottomPx);
  return {
    ...popcornElectronDocumentPanelParam124,
    heightPx: popcornElectronDocumentPanelValue492,
    layout: {
      ...popcornElectronDocumentPanelParam124.layout,
      contentFrame: {
        ...popcornElectronDocumentPanelParam124.layout.contentFrame,
        heightPx: popcornElectronDocumentPanelValue493
      },
      columns: popcornElectronDocumentPanelParam124.layout.columns.map(item => ({
        ...item,
        frame: {
          ...item.frame,
          heightPx: popcornElectronDocumentPanelValue493
        }
      }))
    }
  };
}
function popcornElectronDocumentPanelHelper133(popcornElectronDocumentPanelParam442) {
  let popcornElectronDocumentPanelValue818 = 0,
    popcornElectronDocumentPanelValue819 = popcornElectronDocumentPanelParam590 => {
      popcornElectronDocumentPanelValue818 = Math.max(popcornElectronDocumentPanelValue818, popcornElectronDocumentPanelParam590.yPx + popcornElectronDocumentPanelParam590.heightPx);
      for (let popcornElectronDocumentPanelValue997 of popcornElectronDocumentPanelParam590.children ?? []) popcornElectronDocumentPanelValue819(popcornElectronDocumentPanelValue997);
    };
  for (let popcornElectronDocumentPanelValue1001 of popcornElectronDocumentPanelParam442) popcornElectronDocumentPanelValue819(popcornElectronDocumentPanelValue1001);
  return popcornElectronDocumentPanelValue818;
}
function popcornElectronDocumentPanelHelper134(popcornElectronDocumentPanelParam93, popcornElectronDocumentPanelParam94, popcornElectronDocumentPanelParam95) {
  let popcornElectronDocumentPanelValue445 = Math.max(1, popcornElectronDocumentPanelParam93.columns?.count ?? 1),
    popcornElectronDocumentPanelValue446 = popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelParam93.columns?.space ?? 0),
    popcornElectronDocumentPanelValue447 = (popcornElectronDocumentPanelParam93.columns?.widths ?? []).map(item => Math.max(0, popcornElectronDocumentPanelHelper33(item))),
    popcornElectronDocumentPanelValue448 = [],
    popcornElectronDocumentPanelValue449 = [];
  if (popcornElectronDocumentPanelValue447.length >= popcornElectronDocumentPanelValue445 && popcornElectronDocumentPanelValue447.some(item => item > 0)) {
    let popcornElectronDocumentPanelValue746 = popcornElectronDocumentPanelValue447.slice(0, popcornElectronDocumentPanelValue445).reduce((accumulator, current) => accumulator + current, 0),
      popcornElectronDocumentPanelValue747 = Math.max(1, popcornElectronDocumentPanelParam95 - popcornElectronDocumentPanelValue446 * (popcornElectronDocumentPanelValue445 - 1)),
      popcornElectronDocumentPanelValue748 = popcornElectronDocumentPanelValue746 > 0 ? popcornElectronDocumentPanelValue747 / popcornElectronDocumentPanelValue746 : 1;
    for (let popcornElectronDocumentPanelValue941 = 0; popcornElectronDocumentPanelValue941 < popcornElectronDocumentPanelValue445; popcornElectronDocumentPanelValue941 += 1) {
      let popcornElectronDocumentPanelValue974 = popcornElectronDocumentPanelValue447[popcornElectronDocumentPanelValue941] ?? 0;
      popcornElectronDocumentPanelValue448.push(Math.max(1, popcornElectronDocumentPanelValue974 * popcornElectronDocumentPanelValue748));
    }
  } else {
    let popcornElectronDocumentPanelValue942 = Math.max(1, popcornElectronDocumentPanelParam95 - popcornElectronDocumentPanelValue446 * (popcornElectronDocumentPanelValue445 - 1)) / popcornElectronDocumentPanelValue445;
    for (let popcornElectronDocumentPanelValue992 = 0; popcornElectronDocumentPanelValue992 < popcornElectronDocumentPanelValue445; popcornElectronDocumentPanelValue992 += 1) popcornElectronDocumentPanelValue448.push(popcornElectronDocumentPanelValue942);
  }
  let popcornElectronDocumentPanelValue450 = popcornElectronDocumentPanelParam94;
  for (let popcornElectronDocumentPanelValue990 of popcornElectronDocumentPanelValue448) {
    popcornElectronDocumentPanelValue449.push(popcornElectronDocumentPanelValue450);
    popcornElectronDocumentPanelValue450 += popcornElectronDocumentPanelValue990 + popcornElectronDocumentPanelValue446;
  }
  return {
    xPositions: popcornElectronDocumentPanelValue449,
    widths: popcornElectronDocumentPanelValue448
  };
}
function popcornElectronDocumentPanelHelper135(popcornElectronDocumentPanelParam487) {
  switch (popcornElectronDocumentPanelParam487) {
    case "lines":
    case "linesAndChars":
    case "snapToChars":
      return true;
    default:
      return false;
  }
}
function popcornElectronDocumentPanelHelper136(popcornElectronDocumentPanelParam206) {
  let popcornElectronDocumentPanelValue576 = popcornElectronDocumentPanelParam206.documentGrid;
  if (!popcornElectronDocumentPanelValue576) return;
  let popcornElectronDocumentPanelValue577 = popcornElectronDocumentPanelValue576.linePitch !== undefined && popcornElectronDocumentPanelValue576.linePitch > 0 ? popcornElectronDocumentPanelValue576.linePitch : undefined,
    popcornElectronDocumentPanelValue578 = popcornElectronDocumentPanelValue577 !== undefined && popcornElectronDocumentPanelHelper135(popcornElectronDocumentPanelValue576.type) ? popcornElectronDocumentPanelValue577 : undefined;
  return {
    type: popcornElectronDocumentPanelValue576.type,
    linePitchTwips: popcornElectronDocumentPanelValue577,
    linePitchPx: popcornElectronDocumentPanelValue577 === undefined ? undefined : popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue577),
    charSpaceTwips: popcornElectronDocumentPanelValue576.charSpace,
    activeLinePitchTwips: popcornElectronDocumentPanelValue578,
    activeLinePitchPx: popcornElectronDocumentPanelValue578 === undefined ? undefined : popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue578)
  };
}
function popcornElectronDocumentPanelHelper137(popcornElectronDocumentPanelParam628) {
  if (popcornElectronDocumentPanelParam628?.activeLinePitchTwips !== undefined) return popcornElectronDocumentPanelParam628.activeLinePitchTwips;
}
function popcornElectronDocumentPanelHelper138(popcornElectronDocumentPanelParam186, popcornElectronDocumentPanelParam187, popcornElectronDocumentPanelParam188, popcornElectronDocumentPanelParam189, popcornElectronDocumentPanelParam190, popcornElectronDocumentPanelParam191) {
  if (popcornElectronDocumentPanelParam187 === "table") {
    let popcornElectronDocumentPanelValue959 = popcornElectronDocumentPanelHelper36(popcornElectronDocumentPanelParam186, popcornElectronDocumentPanelParam189);
    return {
      widthPx: popcornElectronDocumentPanelValue959,
      heightPx: popcornElectronDocumentPanelHelper38(popcornElectronDocumentPanelParam186, popcornElectronDocumentPanelParam188, popcornElectronDocumentPanelValue959, popcornElectronDocumentPanelParam190, popcornElectronDocumentPanelParam191)
    };
  }
  if (popcornElectronDocumentPanelParam187 === "image") {
    let popcornElectronDocumentPanelValue962 = popcornElectronDocumentPanelHelper32(popcornElectronDocumentPanelParam186);
    return {
      widthPx: popcornElectronDocumentPanelValue962.widthPx,
      heightPx: popcornElectronDocumentPanelValue962.heightPx
    };
  }
  return popcornElectronDocumentPanelParam187 === "shape" || popcornElectronDocumentPanelParam187 === "chart" || popcornElectronDocumentPanelParam187 === "group" ? popcornElectronDocumentPanelHelper27(popcornElectronDocumentPanelParam186, {
    widthPx: Math.max(1, Math.min(popcornElectronDocumentPanelParam189, 180)),
    heightPx: 120
  }) : {
    widthPx: popcornElectronDocumentPanelParam189,
    heightPx: popcornElectronDocumentPanelHelper22(popcornElectronDocumentPanelParam186, popcornElectronDocumentPanelParam188, popcornElectronDocumentPanelParam189, popcornElectronDocumentPanelParam190)
  };
}
function popcornElectronDocumentPanelHelper139(popcornElectronDocumentPanelParam504, popcornElectronDocumentPanelParam505) {
  return popcornElectronDocumentPanelParam504.bbox?.widthEmu !== undefined && popcornElectronDocumentPanelParam504.bbox.widthEmu > 0 ? Math.max(1, popcornElectronDocumentPanelParam504.bbox.widthEmu * popcornElectronDocumentPanelImport5) : Math.max(1, popcornElectronDocumentPanelParam505);
}
function popcornElectronDocumentPanelHelper140(popcornElectronDocumentPanelParam198, popcornElectronDocumentPanelParam199, popcornElectronDocumentPanelParam200, popcornElectronDocumentPanelParam201, popcornElectronDocumentPanelParam202, popcornElectronDocumentPanelParam203) {
  return (popcornElectronDocumentPanelParam198.children ?? []).map(item => {
    let popcornElectronDocumentPanelValue623 = popcornElectronDocumentPanelHelper49(item),
      popcornElectronDocumentPanelValue624 = popcornElectronDocumentPanelHelper138(item, popcornElectronDocumentPanelValue623, popcornElectronDocumentPanelParam202, popcornElectronDocumentPanelHelper139(item, popcornElectronDocumentPanelParam201), popcornElectronDocumentPanelParam203),
      popcornElectronDocumentPanelValue625 = {
        kind: popcornElectronDocumentPanelValue623,
        element: item,
        xPx: popcornElectronDocumentPanelParam199 + _t(item, 0),
        yPx: popcornElectronDocumentPanelParam200 + popcornElectronDocumentPanelHelper28(item, 0),
        widthPx: popcornElectronDocumentPanelValue624.widthPx,
        heightPx: popcornElectronDocumentPanelValue624.heightPx
      };
    return popcornElectronDocumentPanelValue623 === "group" && (popcornElectronDocumentPanelValue625.children = popcornElectronDocumentPanelHelper140(item, popcornElectronDocumentPanelValue625.xPx, popcornElectronDocumentPanelValue625.yPx, popcornElectronDocumentPanelValue625.widthPx, popcornElectronDocumentPanelParam202, popcornElectronDocumentPanelParam203)), popcornElectronDocumentPanelValue625;
  });
}
function popcornElectronDocumentPanelHelper141(popcornElectronDocumentPanelParam595) {
  return popcornElectronDocumentPanelParam595.type === presentationWt.ELEMENT_TYPE_TEXT || popcornElectronDocumentPanelParam595.type === presentationWt.ELEMENT_TYPE_TEXT_GROUP;
}
function popcornElectronDocumentPanelHelper142(popcornElectronDocumentPanelParam361) {
  let popcornElectronDocumentPanelValue757 = new Map();
  for (let popcornElectronDocumentPanelValue842 of popcornElectronDocumentPanelParam361.table?.rows ?? []) for (let popcornElectronDocumentPanelValue902 of popcornElectronDocumentPanelValue842.cells ?? []) for (let popcornElectronDocumentPanelValue954 of popcornElectronDocumentPanelValue902.elements ?? []) popcornElectronDocumentPanelHelper141(popcornElectronDocumentPanelValue954) || popcornElectronDocumentPanelValue954.id && popcornElectronDocumentPanelValue954.id.length > 0 && popcornElectronDocumentPanelValue757.set(popcornElectronDocumentPanelValue954.id, popcornElectronDocumentPanelValue954);
  return popcornElectronDocumentPanelValue757;
}
function popcornElectronDocumentPanelHelper143(popcornElectronDocumentPanelParam296, popcornElectronDocumentPanelParam297) {
  let popcornElectronDocumentPanelValue682 = popcornElectronDocumentPanelParam296.bbox?.widthEmu === 0,
    popcornElectronDocumentPanelValue683 = popcornElectronDocumentPanelParam296.bbox?.heightEmu === 0;
  return {
    ...popcornElectronDocumentPanelParam296,
    bbox: {
      ...popcornElectronDocumentPanelParam296.bbox,
      xEmu: popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam297.xPx),
      yEmu: popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam297.yPx),
      widthEmu: popcornElectronDocumentPanelValue682 ? 0 : popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam297.widthPx),
      heightEmu: popcornElectronDocumentPanelValue683 ? 0 : popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam297.heightPx)
    }
  };
}
function popcornElectronDocumentPanelHelper144(popcornElectronDocumentPanelParam66, popcornElectronDocumentPanelParam67, popcornElectronDocumentPanelParam68, popcornElectronDocumentPanelParam69, popcornElectronDocumentPanelParam70, popcornElectronDocumentPanelParam71, popcornElectronDocumentPanelParam72, popcornElectronDocumentPanelParam73) {
  if (!popcornElectronDocumentPanelParam66.table || popcornElectronDocumentPanelParam66.table.rows.length === 0) return [];
  let popcornElectronDocumentPanelValue405 = popcornElectronDocumentPanelImport27(popcornElectronDocumentPanelHelper19({
      ...popcornElectronDocumentPanelHelper143(popcornElectronDocumentPanelParam66, {
        xPx: popcornElectronDocumentPanelParam67,
        yPx: popcornElectronDocumentPanelParam68,
        widthPx: popcornElectronDocumentPanelParam69,
        heightPx: popcornElectronDocumentPanelParam70
      }),
      type: presentationWt.ELEMENT_TYPE_TABLE
    }), popcornElectronDocumentPanelParam71, popcornElectronDocumentPanelParam72, {
      paragraphSpacingUnit: "twips",
      explicitRowHeightBehavior: "atLeast",
      autoRowMinimumHeightPx: 0,
      fitColumnWidthsToFrame: true,
      drawDefaultCellBorders: false,
      collapseParagraphBoundarySpacing: false,
      documentGridLinePitchTwips: popcornElectronDocumentPanelParam73?.documentGridLinePitchTwips
    }),
    popcornElectronDocumentPanelValue406 = popcornElectronDocumentPanelHelper142(popcornElectronDocumentPanelParam66),
    popcornElectronDocumentPanelValue407 = [];
  if (!popcornElectronDocumentPanelValue405) return popcornElectronDocumentPanelValue407;
  for (let popcornElectronDocumentPanelValue791 of popcornElectronDocumentPanelValue405.cellElementFrames ?? []) {
    let popcornElectronDocumentPanelValue861 = popcornElectronDocumentPanelValue406.get(popcornElectronDocumentPanelValue791.elementId);
    if (!popcornElectronDocumentPanelValue861) continue;
    let popcornElectronDocumentPanelValue862 = popcornElectronDocumentPanelHelper49(popcornElectronDocumentPanelValue861);
    popcornElectronDocumentPanelValue407.push(popcornElectronDocumentPanelHelper145(popcornElectronDocumentPanelValue861, popcornElectronDocumentPanelValue862, popcornElectronDocumentPanelValue791.xPx, popcornElectronDocumentPanelValue791.yPx, popcornElectronDocumentPanelValue791.widthPx, popcornElectronDocumentPanelValue791.heightPx, popcornElectronDocumentPanelParam71, popcornElectronDocumentPanelParam72, undefined, popcornElectronDocumentPanelParam73));
  }
  return popcornElectronDocumentPanelValue407;
}
function popcornElectronDocumentPanelHelper145(popcornElectronDocumentPanelParam250, popcornElectronDocumentPanelParam251, popcornElectronDocumentPanelParam252, popcornElectronDocumentPanelParam253, popcornElectronDocumentPanelParam254, popcornElectronDocumentPanelParam255, popcornElectronDocumentPanelParam256, popcornElectronDocumentPanelParam257, popcornElectronDocumentPanelParam258, popcornElectronDocumentPanelParam259) {
  let popcornElectronDocumentPanelValue644 = {
    kind: popcornElectronDocumentPanelParam251,
    element: popcornElectronDocumentPanelParam250,
    xPx: popcornElectronDocumentPanelParam252,
    yPx: popcornElectronDocumentPanelParam253,
    widthPx: popcornElectronDocumentPanelParam254,
    heightPx: popcornElectronDocumentPanelParam255,
    flow: popcornElectronDocumentPanelParam259,
    textLines: popcornElectronDocumentPanelParam258
  };
  return popcornElectronDocumentPanelParam251 === "group" && (popcornElectronDocumentPanelValue644.children = popcornElectronDocumentPanelHelper140(popcornElectronDocumentPanelParam250, popcornElectronDocumentPanelParam252, popcornElectronDocumentPanelParam253, popcornElectronDocumentPanelParam254, popcornElectronDocumentPanelParam256, popcornElectronDocumentPanelParam257)), popcornElectronDocumentPanelParam251 === "table" && (popcornElectronDocumentPanelValue644.children = popcornElectronDocumentPanelHelper144(popcornElectronDocumentPanelParam250, popcornElectronDocumentPanelParam252, popcornElectronDocumentPanelParam253, popcornElectronDocumentPanelParam254, popcornElectronDocumentPanelParam255, popcornElectronDocumentPanelParam256, popcornElectronDocumentPanelParam257, popcornElectronDocumentPanelParam259)), popcornElectronDocumentPanelValue644;
}
function popcornElectronDocumentPanelHelper146(popcornElectronDocumentPanelParam132, popcornElectronDocumentPanelParam133, popcornElectronDocumentPanelParam134, popcornElectronDocumentPanelParam135, popcornElectronDocumentPanelParam136, popcornElectronDocumentPanelParam137) {
  if (popcornElectronDocumentPanelParam132.bodyElements = popcornElectronDocumentPanelParam132.bodyElements.filter(item => item.flow?.noteKind !== "footnote"), popcornElectronDocumentPanelParam133.ids.length === 0) return;
  let popcornElectronDocumentPanelValue497 = popcornElectronDocumentPanelHelper96(popcornElectronDocumentPanelParam134, popcornElectronDocumentPanelParam133.ids, popcornElectronDocumentPanelParam135.contentWidthPx, popcornElectronDocumentPanelParam137);
  popcornElectronDocumentPanelValue497.textHeightPx <= 0 || popcornElectronDocumentPanelParam132.bodyElements.push(popcornElectronDocumentPanelHelper145(popcornElectronDocumentPanelValue497.element, "text", popcornElectronDocumentPanelParam135.contentLeftPx, popcornElectronDocumentPanelParam135.contentBottomPx - popcornElectronDocumentPanelValue497.textHeightPx, popcornElectronDocumentPanelParam135.contentWidthPx, popcornElectronDocumentPanelValue497.textHeightPx, popcornElectronDocumentPanelParam136, popcornElectronDocumentPanelParam137, popcornElectronDocumentPanelValue497.lines, {
    noteKind: "footnote",
    noteIds: [...popcornElectronDocumentPanelParam133.ids]
  }));
}
function popcornElectronDocumentPanelHelper147(popcornElectronDocumentPanelParam421, popcornElectronDocumentPanelParam422, popcornElectronDocumentPanelParam423, popcornElectronDocumentPanelParam424, popcornElectronDocumentPanelParam425, popcornElectronDocumentPanelParam426, popcornElectronDocumentPanelParam427, popcornElectronDocumentPanelParam428, popcornElectronDocumentPanelParam429) {
  let popcornElectronDocumentPanelValue810 = false;
  for (let popcornElectronDocumentPanelValue949 of popcornElectronDocumentPanelHelper93(popcornElectronDocumentPanelParam424, popcornElectronDocumentPanelParam425, popcornElectronDocumentPanelParam426, popcornElectronDocumentPanelParam423)) popcornElectronDocumentPanelParam422.idSet.has(popcornElectronDocumentPanelValue949) || (popcornElectronDocumentPanelParam422.idSet.add(popcornElectronDocumentPanelValue949), popcornElectronDocumentPanelParam422.ids.push(popcornElectronDocumentPanelValue949), popcornElectronDocumentPanelValue810 = true);
  popcornElectronDocumentPanelValue810 && popcornElectronDocumentPanelHelper146(popcornElectronDocumentPanelParam421, popcornElectronDocumentPanelParam422, popcornElectronDocumentPanelParam423, popcornElectronDocumentPanelParam427, popcornElectronDocumentPanelParam428, popcornElectronDocumentPanelParam429);
}
function popcornElectronDocumentPanelHelper148(popcornElectronDocumentPanelParam244, popcornElectronDocumentPanelParam245, popcornElectronDocumentPanelParam246 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam247, popcornElectronDocumentPanelParam248) {
  return popcornElectronDocumentPanelImport15(popcornElectronDocumentPanelParam244, popcornElectronDocumentPanelParam246, {
    bboxPx: {
      x: 0,
      y: 0,
      width: Math.max(1, popcornElectronDocumentPanelParam245),
      height: 1e5
    },
    paddingPx: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    wrap: true,
    paragraphSpacingUnit: "twips",
    defaultTabStopTwips: popcornElectronDocumentPanelParam247,
    documentGridLinePitchTwips: popcornElectronDocumentPanelParam248
  })?.lines ?? [];
}
function popcornElectronDocumentPanelHelper149(popcornElectronDocumentPanelParam79, popcornElectronDocumentPanelParam80, popcornElectronDocumentPanelParam81, popcornElectronDocumentPanelParam82, popcornElectronDocumentPanelParam83) {
  let popcornElectronDocumentPanelValue409 = [],
    popcornElectronDocumentPanelValue410 = popcornElectronDocumentPanelParam80,
    popcornElectronDocumentPanelValue411 = new Map(),
    popcornElectronDocumentPanelValue412;
  for (let [popcornElectronDocumentPanelValue460, popcornElectronDocumentPanelValue461] of popcornElectronDocumentPanelParam79.entries()) {
    let popcornElectronDocumentPanelValue466 = popcornElectronDocumentPanelHelper49(popcornElectronDocumentPanelValue461),
      popcornElectronDocumentPanelValue467 = popcornElectronDocumentPanelHelper138(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelValue466, popcornElectronDocumentPanelParam82, popcornElectronDocumentPanelParam81.contentWidthPx, popcornElectronDocumentPanelParam83),
      popcornElectronDocumentPanelValue468 = popcornElectronDocumentPanelValue466 === "table" ? popcornElectronDocumentPanelHelper104(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelParam81) ?? popcornElectronDocumentPanelHelper37(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelParam81.contentLeftPx) : popcornElectronDocumentPanelHelper59(popcornElectronDocumentPanelValue466) ? popcornElectronDocumentPanelHelper104(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelParam81) ?? _t(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelParam81.contentLeftPx) : popcornElectronDocumentPanelParam81.contentLeftPx,
      popcornElectronDocumentPanelValue469 = popcornElectronDocumentPanelValue466 === "text" ? popcornElectronDocumentPanelValue410 : _n({
        element: popcornElectronDocumentPanelValue461,
        kind: popcornElectronDocumentPanelValue466
      }, popcornElectronDocumentPanelValue410, popcornElectronDocumentPanelValue411, popcornElectronDocumentPanelValue412);
    if (popcornElectronDocumentPanelValue409.push(popcornElectronDocumentPanelHelper145(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelValue466, popcornElectronDocumentPanelValue468, popcornElectronDocumentPanelValue469, popcornElectronDocumentPanelValue467.widthPx, popcornElectronDocumentPanelValue467.heightPx, popcornElectronDocumentPanelParam82, popcornElectronDocumentPanelParam83)), popcornElectronDocumentPanelValue466 === "text") {
      popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue461, popcornElectronDocumentPanelValue469, popcornElectronDocumentPanelValue411);
      popcornElectronDocumentPanelValue412 = popcornElectronDocumentPanelValue469;
      popcornElectronDocumentPanelValue410 += popcornElectronDocumentPanelValue467.heightPx;
      popcornElectronDocumentPanelValue460 < popcornElectronDocumentPanelParam79.length - 1 && (popcornElectronDocumentPanelValue410 += 8);
      continue;
    }
    let popcornElectronDocumentPanelValue470 = popcornElectronDocumentPanelHelper69({
      element: popcornElectronDocumentPanelValue461,
      kind: popcornElectronDocumentPanelValue466
    }, popcornElectronDocumentPanelValue410, popcornElectronDocumentPanelValue469, popcornElectronDocumentPanelValue467.heightPx);
    popcornElectronDocumentPanelValue470 > popcornElectronDocumentPanelValue410 && (popcornElectronDocumentPanelValue410 = popcornElectronDocumentPanelValue470, popcornElectronDocumentPanelValue460 < popcornElectronDocumentPanelParam79.length - 1 && (popcornElectronDocumentPanelValue410 += 8));
  }
  return {
    elements: popcornElectronDocumentPanelValue409,
    totalHeightPx: Math.max(0, popcornElectronDocumentPanelValue410 - popcornElectronDocumentPanelParam80)
  };
}
function popcornElectronDocumentPanelHelper150(popcornElectronDocumentPanelParam26, popcornElectronDocumentPanelParam27, popcornElectronDocumentPanelParam28 = {}) {
  let popcornElectronDocumentPanelValue340 = popcornElectronDocumentPanelParam26.pageSetup?.widthEmu || popcornElectronDocumentPanelParam27.widthEmu || 12240,
    popcornElectronDocumentPanelValue341 = popcornElectronDocumentPanelParam26.pageSetup?.heightEmu || popcornElectronDocumentPanelParam27.heightEmu || 15840,
    popcornElectronDocumentPanelValue342 = Math.max(1, popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue340)),
    popcornElectronDocumentPanelValue343 = Math.max(1, popcornElectronDocumentPanelHelper33(popcornElectronDocumentPanelValue341)),
    popcornElectronDocumentPanelValue344 = popcornElectronDocumentPanelParam28.layoutMode === "pageless" ? Math.max(popcornElectronDocumentPanelValue343, 1e5) : popcornElectronDocumentPanelValue343,
    popcornElectronDocumentPanelValue345 = popcornElectronDocumentPanelHelper124(popcornElectronDocumentPanelParam26),
    popcornElectronDocumentPanelValue346 = popcornElectronDocumentPanelValue345.leftPx,
    popcornElectronDocumentPanelValue347 = Math.max(1, popcornElectronDocumentPanelValue342 - popcornElectronDocumentPanelValue345.leftPx - popcornElectronDocumentPanelValue345.rightPx),
    popcornElectronDocumentPanelValue348 = popcornElectronDocumentPanelValue345.topPx,
    popcornElectronDocumentPanelValue349 = Math.max(popcornElectronDocumentPanelValue348, popcornElectronDocumentPanelValue344 - popcornElectronDocumentPanelValue345.bottomPx),
    popcornElectronDocumentPanelValue350 = popcornElectronDocumentPanelHelper134(popcornElectronDocumentPanelParam26, popcornElectronDocumentPanelValue346, popcornElectronDocumentPanelValue347),
    popcornElectronDocumentPanelValue351 = popcornElectronDocumentPanelHelper136(popcornElectronDocumentPanelParam26),
    popcornElectronDocumentPanelValue352 = popcornElectronDocumentPanelHelper137(popcornElectronDocumentPanelValue351),
    popcornElectronDocumentPanelValue353 = popcornElectronDocumentPanelParam26.pageSetup?.pageMargin ?? popcornElectronDocumentPanelValue25;
  return {
    pageWidthPx: popcornElectronDocumentPanelValue342,
    pageHeightPx: popcornElectronDocumentPanelValue344,
    basePageHeightPx: popcornElectronDocumentPanelValue343,
    margins: popcornElectronDocumentPanelValue345,
    contentLeftPx: popcornElectronDocumentPanelValue346,
    contentWidthPx: popcornElectronDocumentPanelValue347,
    contentTopPx: popcornElectronDocumentPanelValue348,
    contentBottomPx: popcornElectronDocumentPanelValue349,
    columns: popcornElectronDocumentPanelValue350,
    documentGrid: popcornElectronDocumentPanelValue351,
    documentGridLinePitchTwips: popcornElectronDocumentPanelValue352,
    key: [popcornElectronDocumentPanelParam28.layoutMode ?? "paged", popcornElectronDocumentPanelValue340, popcornElectronDocumentPanelParam28.layoutMode === "pageless" ? popcornElectronDocumentPanelValue344 : popcornElectronDocumentPanelValue341, popcornElectronDocumentPanelValue353.top ?? popcornElectronDocumentPanelValue25.top, popcornElectronDocumentPanelValue353.bottom ?? popcornElectronDocumentPanelValue25.bottom, popcornElectronDocumentPanelValue353.left ?? popcornElectronDocumentPanelValue25.left, popcornElectronDocumentPanelValue353.right ?? popcornElectronDocumentPanelValue25.right, popcornElectronDocumentPanelValue353.header ?? popcornElectronDocumentPanelValue25.header, popcornElectronDocumentPanelValue353.footer ?? popcornElectronDocumentPanelValue25.footer, popcornElectronDocumentPanelValue351?.type ?? "no-grid-type", popcornElectronDocumentPanelValue351?.linePitchTwips ?? "no-grid-line-pitch", popcornElectronDocumentPanelValue351?.charSpaceTwips ?? "no-grid-char-space", popcornElectronDocumentPanelValue352 ?? "no-grid", popcornElectronDocumentPanelHelper125(popcornElectronDocumentPanelParam26.id) ? "mirror" : "plain"].join(":")
  };
}
function popcornElectronDocumentPanelHelper151(popcornElectronDocumentPanelParam347) {
  return popcornElectronDocumentPanelParam347.startsWithPageBreak === true || popcornElectronDocumentPanelParam347.breakType === documentW.SECTION_BREAK_TYPE_NEXT_PAGE || popcornElectronDocumentPanelParam347.breakType === documentW.SECTION_BREAK_TYPE_EVEN_PAGE || popcornElectronDocumentPanelParam347.breakType === documentW.SECTION_BREAK_TYPE_ODD_PAGE;
}
function popcornElectronDocumentPanelHelper152(popcornElectronDocumentPanelParam367) {
  return (popcornElectronDocumentPanelParam367.elements ?? []).some(item => popcornElectronDocumentPanelHelper49(item) === "text" ? (item.paragraphs ?? []).some(_item => (_item.runs ?? []).some(__item => (__item.text ?? "").trim().length > 0)) : true);
}
function $r(popcornElectronDocumentPanelParam665) {
  return !popcornElectronDocumentPanelHelper151(popcornElectronDocumentPanelParam665) || popcornElectronDocumentPanelHelper152(popcornElectronDocumentPanelParam665) ? false : (popcornElectronDocumentPanelParam665.elements?.length ?? 0) > 0;
}
function popcornElectronDocumentPanelHelper153(popcornElectronDocumentPanelParam115, popcornElectronDocumentPanelParam116) {
  let popcornElectronDocumentPanelValue472 = [],
    popcornElectronDocumentPanelValue473 = false;
  for (let popcornElectronDocumentPanelValue514 of popcornElectronDocumentPanelParam115) {
    if ($r(popcornElectronDocumentPanelValue514)) {
      popcornElectronDocumentPanelValue473 ||= popcornElectronDocumentPanelHelper151(popcornElectronDocumentPanelValue514);
      continue;
    }
    let popcornElectronDocumentPanelValue523 = popcornElectronDocumentPanelValue472[popcornElectronDocumentPanelValue472.length - 1],
      popcornElectronDocumentPanelValue524 = popcornElectronDocumentPanelValue523 ? popcornElectronDocumentPanelHelper150(popcornElectronDocumentPanelValue523, popcornElectronDocumentPanelParam116) : undefined,
      popcornElectronDocumentPanelValue525 = popcornElectronDocumentPanelHelper150(popcornElectronDocumentPanelValue514, popcornElectronDocumentPanelParam116),
      popcornElectronDocumentPanelValue526 = !popcornElectronDocumentPanelValue473 && popcornElectronDocumentPanelValue523 !== undefined && popcornElectronDocumentPanelHelper151(popcornElectronDocumentPanelValue514) && popcornElectronDocumentPanelValue524?.key === popcornElectronDocumentPanelValue525.key && !popcornElectronDocumentPanelHelper71(popcornElectronDocumentPanelValue524.columns, popcornElectronDocumentPanelValue525.columns) && !popcornElectronDocumentPanelValue514.pageSetup && !popcornElectronDocumentPanelValue514.header && !popcornElectronDocumentPanelValue514.footer && !popcornElectronDocumentPanelValue514.firstHeader && !popcornElectronDocumentPanelValue514.firstFooter && !popcornElectronDocumentPanelValue514.differentFirstPage;
    popcornElectronDocumentPanelValue472.push(popcornElectronDocumentPanelValue526 ? {
      ...popcornElectronDocumentPanelValue514,
      breakType: documentW.SECTION_BREAK_TYPE_UNSPECIFIED
    } : popcornElectronDocumentPanelValue514);
    popcornElectronDocumentPanelValue473 = false;
  }
  return popcornElectronDocumentPanelValue472;
}
function popcornElectronDocumentPanelHelper154(popcornElectronDocumentPanelParam563, popcornElectronDocumentPanelParam564) {
  if (popcornElectronDocumentPanelParam563) {
    for (let popcornElectronDocumentPanelValue968 of popcornElectronDocumentPanelParam563.split(";")) if (popcornElectronDocumentPanelValue968.startsWith(popcornElectronDocumentPanelParam564)) return popcornElectronDocumentPanelValue968.slice(popcornElectronDocumentPanelParam564.length);
  }
}
function popcornElectronDocumentPanelHelper155(popcornElectronDocumentPanelParam410) {
  switch (popcornElectronDocumentPanelParam410) {
    case "decimal":
    case "upperRoman":
    case "lowerRoman":
    case "upperLetter":
    case "lowerLetter":
      return popcornElectronDocumentPanelParam410;
    default:
      return;
  }
}
function popcornElectronDocumentPanelHelper156(popcornElectronDocumentPanelParam249) {
  let popcornElectronDocumentPanelValue637 = popcornElectronDocumentPanelParam249.pageSetup;
  if (popcornElectronDocumentPanelValue637?.pageNumbers) return popcornElectronDocumentPanelValue637.pageNumbers;
  let popcornElectronDocumentPanelValue638 = popcornElectronDocumentPanelHelper154(popcornElectronDocumentPanelParam249.id, "__docxPageNumberStart:"),
    popcornElectronDocumentPanelValue639 = popcornElectronDocumentPanelValue638 ? Number.parseInt(popcornElectronDocumentPanelValue638, 10) : undefined,
    popcornElectronDocumentPanelValue640 = popcornElectronDocumentPanelValue639 !== undefined && Number.isFinite(popcornElectronDocumentPanelValue639) && popcornElectronDocumentPanelValue639 > 0 ? popcornElectronDocumentPanelValue639 : undefined,
    popcornElectronDocumentPanelValue641 = popcornElectronDocumentPanelHelper155(popcornElectronDocumentPanelHelper154(popcornElectronDocumentPanelParam249.id, "__docxPageNumberFormat:"));
  return popcornElectronDocumentPanelValue640 !== undefined || popcornElectronDocumentPanelValue641 !== undefined ? {
    start: popcornElectronDocumentPanelValue640,
    formatType: popcornElectronDocumentPanelValue641
  } : undefined;
}
function popcornElectronDocumentPanelHelper157(popcornElectronDocumentPanelParam383, popcornElectronDocumentPanelParam384) {
  let popcornElectronDocumentPanelValue769 = popcornElectronDocumentPanelHelper156(popcornElectronDocumentPanelParam384);
  popcornElectronDocumentPanelValue769 && (popcornElectronDocumentPanelValue769.formatType && (popcornElectronDocumentPanelParam383.formatType = popcornElectronDocumentPanelValue769.formatType), popcornElectronDocumentPanelValue769.start === undefined ? popcornElectronDocumentPanelParam383.nextValue === undefined && (popcornElectronDocumentPanelParam383.nextValue = 1) : popcornElectronDocumentPanelParam383.nextValue = popcornElectronDocumentPanelValue769.start);
}
function popcornElectronDocumentPanelHelper158(popcornElectronDocumentPanelParam274, popcornElectronDocumentPanelParam275) {
  let popcornElectronDocumentPanelValue658 = popcornElectronDocumentPanelParam275 ?? "decimal";
  return popcornElectronDocumentPanelValue658 === "upperRoman" ? popcornElectronDocumentPanelHelper159(popcornElectronDocumentPanelParam274).toUpperCase() : popcornElectronDocumentPanelValue658 === "lowerRoman" ? popcornElectronDocumentPanelHelper159(popcornElectronDocumentPanelParam274).toLowerCase() : popcornElectronDocumentPanelValue658 === "upperLetter" ? popcornElectronDocumentPanelHelper160(popcornElectronDocumentPanelParam274).toUpperCase() : popcornElectronDocumentPanelValue658 === "lowerLetter" ? popcornElectronDocumentPanelHelper160(popcornElectronDocumentPanelParam274).toLowerCase() : String(popcornElectronDocumentPanelParam274);
}
function popcornElectronDocumentPanelHelper159(popcornElectronDocumentPanelParam218) {
  let popcornElectronDocumentPanelValue590 = [[1e3, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]],
    popcornElectronDocumentPanelValue591 = Math.max(1, Math.floor(popcornElectronDocumentPanelParam218)),
    popcornElectronDocumentPanelValue592 = "";
  for (let [popcornElectronDocumentPanelValue977, popcornElectronDocumentPanelValue978] of popcornElectronDocumentPanelValue590) for (; popcornElectronDocumentPanelValue591 >= popcornElectronDocumentPanelValue977;) {
    popcornElectronDocumentPanelValue592 += popcornElectronDocumentPanelValue978;
    popcornElectronDocumentPanelValue591 -= popcornElectronDocumentPanelValue977;
  }
  return popcornElectronDocumentPanelValue592;
}
function popcornElectronDocumentPanelHelper160(popcornElectronDocumentPanelParam411) {
  let popcornElectronDocumentPanelValue794 = Math.max(1, Math.floor(popcornElectronDocumentPanelParam411)),
    popcornElectronDocumentPanelValue795 = "";
  for (; popcornElectronDocumentPanelValue794 > 0;) {
    --popcornElectronDocumentPanelValue794;
    popcornElectronDocumentPanelValue795 = String.fromCharCode(65 + popcornElectronDocumentPanelValue794 % 26) + popcornElectronDocumentPanelValue795;
    popcornElectronDocumentPanelValue794 = Math.floor(popcornElectronDocumentPanelValue794 / 26);
  }
  return popcornElectronDocumentPanelValue795;
}
function popcornElectronDocumentPanelHelper161(popcornElectronDocumentPanelParam760, popcornElectronDocumentPanelParam761) {
  return popcornElectronDocumentPanelParam760.some(item => popcornElectronDocumentPanelHelper162(item, popcornElectronDocumentPanelParam761));
}
function popcornElectronDocumentPanelHelper162(popcornElectronDocumentPanelParam153, popcornElectronDocumentPanelParam154) {
  return (popcornElectronDocumentPanelParam153.paragraphs ?? []).some(item => (item.runs ?? []).some(_item => (_item.text ?? "").includes(popcornElectronDocumentPanelParam154))) || (popcornElectronDocumentPanelParam153.children ?? []).some(item => popcornElectronDocumentPanelHelper162(item, popcornElectronDocumentPanelParam154)) ? true : (popcornElectronDocumentPanelParam153.table?.rows ?? []).some(item => item.cells.some(_item => (_item.text ?? "").includes(popcornElectronDocumentPanelParam154) || (_item.paragraphs ?? []).some(__item => (__item.runs ?? []).some(___item => (___item.text ?? "").includes(popcornElectronDocumentPanelParam154))) ? true : (_item.elements ?? []).some(__item => popcornElectronDocumentPanelHelper162(__item, popcornElectronDocumentPanelParam154))));
}
function ui(popcornElectronDocumentPanelParam465, popcornElectronDocumentPanelParam466) {
  let popcornElectronDocumentPanelValue835 = popcornElectronDocumentPanelParam583 => popcornElectronDocumentPanelParam583.replaceAll("__docxField:PAGE__", popcornElectronDocumentPanelParam466.currentPageText ?? "").replaceAll("__docxField:NUMPAGES__", popcornElectronDocumentPanelParam466.totalPagesText ?? "");
  return popcornElectronDocumentPanelParam465.map(item => popcornElectronDocumentPanelHelper163(item, popcornElectronDocumentPanelValue835));
}
function popcornElectronDocumentPanelHelper163(popcornElectronDocumentPanelParam64, popcornElectronDocumentPanelParam65) {
  return {
    ...popcornElectronDocumentPanelParam64,
    paragraphs: (popcornElectronDocumentPanelParam64.paragraphs ?? []).map(item => ({
      ...item,
      runs: (item.runs ?? []).map(_item => ({
        ..._item,
        text: popcornElectronDocumentPanelParam65(_item.text ?? "")
      }))
    })),
    children: (popcornElectronDocumentPanelParam64.children ?? []).map(item => popcornElectronDocumentPanelHelper163(item, popcornElectronDocumentPanelParam65)),
    table: popcornElectronDocumentPanelParam64.table ? {
      ...popcornElectronDocumentPanelParam64.table,
      rows: popcornElectronDocumentPanelParam64.table.rows.map(item => ({
        ...item,
        cells: item.cells.map(_item => ({
          ..._item,
          text: _item.text ? popcornElectronDocumentPanelParam65(_item.text) : _item.text,
          paragraphs: (_item.paragraphs ?? []).map(__item => ({
            ...__item,
            runs: (__item.runs ?? []).map(___item => ({
              ...___item,
              text: popcornElectronDocumentPanelParam65(___item.text ?? "")
            }))
          })),
          elements: (_item.elements ?? []).map(__item => popcornElectronDocumentPanelHelper163(__item, popcornElectronDocumentPanelParam65))
        }))
      }))
    } : popcornElectronDocumentPanelParam64.table
  };
}
function popcornElectronDocumentPanelHelper164(popcornElectronDocumentPanelParam87, popcornElectronDocumentPanelParam88) {
  let popcornElectronDocumentPanelValue425 = Math.max(popcornElectronDocumentPanelParam88.contentTopPx, popcornElectronDocumentPanelParam88.pageHeightPx - popcornElectronDocumentPanelParam88.margins.footerPx - 18);
  return {
    kind: "text",
    element: {
      id: "",
      type: presentationWt.ELEMENT_TYPE_TEXT,
      paragraphs: [{
        id: "",
        runs: [{
          id: "",
          text: popcornElectronDocumentPanelParam87,
          citations: [],
          reviewMarkIds: []
        }],
        textStyle: {
          alignment: _presentationJn.ALIGNMENT_TYPE_CENTER,
          fontSize: 1e3,
          name: "Times New Roman",
          typeface: "Times New Roman"
        },
        inlineNodes: []
      }],
      effects: [],
      children: [],
      levelsStyles: [],
      citations: []
    },
    xPx: popcornElectronDocumentPanelParam88.contentLeftPx,
    yPx: popcornElectronDocumentPanelValue425,
    widthPx: popcornElectronDocumentPanelParam88.contentWidthPx,
    heightPx: 18
  };
}
function popcornElectronDocumentPanelHelper165(popcornElectronDocumentPanelParam50, popcornElectronDocumentPanelParam51, popcornElectronDocumentPanelParam52, popcornElectronDocumentPanelParam53, popcornElectronDocumentPanelParam54, popcornElectronDocumentPanelParam55, popcornElectronDocumentPanelParam56, popcornElectronDocumentPanelParam57) {
  let popcornElectronDocumentPanelValue368 = popcornElectronDocumentPanelHelper161(popcornElectronDocumentPanelParam52, "__docxField:PAGE__") || popcornElectronDocumentPanelHelper161(popcornElectronDocumentPanelParam53, "__docxField:PAGE__"),
    popcornElectronDocumentPanelValue369 = popcornElectronDocumentPanelValue368 ? popcornElectronDocumentPanelHelper158(popcornElectronDocumentPanelParam55.nextValue ?? 1, popcornElectronDocumentPanelParam55.formatType) : undefined;
  popcornElectronDocumentPanelValue368 && (popcornElectronDocumentPanelParam55.nextValue = (popcornElectronDocumentPanelParam55.nextValue ?? 1) + 1);
  let popcornElectronDocumentPanelValue370 = ui(popcornElectronDocumentPanelParam52, {
      currentPageText: popcornElectronDocumentPanelValue369
    }),
    popcornElectronDocumentPanelValue371 = ui(popcornElectronDocumentPanelParam53, {
      currentPageText: popcornElectronDocumentPanelValue369
    }),
    popcornElectronDocumentPanelValue372 = popcornElectronDocumentPanelHelper149(popcornElectronDocumentPanelValue370, Math.max(0, popcornElectronDocumentPanelParam51.margins.headerPx), popcornElectronDocumentPanelParam51, popcornElectronDocumentPanelParam56, popcornElectronDocumentPanelParam57),
    popcornElectronDocumentPanelValue373 = popcornElectronDocumentPanelHelper149(popcornElectronDocumentPanelValue371, 0, popcornElectronDocumentPanelParam51, popcornElectronDocumentPanelParam56, popcornElectronDocumentPanelParam57),
    popcornElectronDocumentPanelValue374 = popcornElectronDocumentPanelHelper149(popcornElectronDocumentPanelValue371, Math.max(popcornElectronDocumentPanelParam51.contentTopPx, popcornElectronDocumentPanelParam51.pageHeightPx - popcornElectronDocumentPanelParam51.margins.footerPx - popcornElectronDocumentPanelValue373.totalHeightPx), popcornElectronDocumentPanelParam51, popcornElectronDocumentPanelParam56, popcornElectronDocumentPanelParam57),
    popcornElectronDocumentPanelValue375;
  return popcornElectronDocumentPanelParam54 && !popcornElectronDocumentPanelValue368 && popcornElectronDocumentPanelParam55.nextValue !== undefined && (popcornElectronDocumentPanelValue375 = popcornElectronDocumentPanelHelper164(popcornElectronDocumentPanelHelper158(popcornElectronDocumentPanelParam55.nextValue, popcornElectronDocumentPanelParam55.formatType), popcornElectronDocumentPanelParam51), popcornElectronDocumentPanelParam55.nextValue += 1), {
    sectionId: popcornElectronDocumentPanelParam50,
    widthPx: popcornElectronDocumentPanelParam51.pageWidthPx,
    heightPx: popcornElectronDocumentPanelParam51.pageHeightPx,
    layout: popcornElectronDocumentPanelHelper127(popcornElectronDocumentPanelParam51),
    headerElements: popcornElectronDocumentPanelValue372.elements,
    bodyElements: [],
    footerElements: popcornElectronDocumentPanelValue374.elements,
    pageNumberElement: popcornElectronDocumentPanelValue375
  };
}
function popcornElectronDocumentPanelHelper166(popcornElectronDocumentPanelParam1, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelParam3 = popcornElectronDocumentPanelValue13, popcornElectronDocumentPanelParam4 = {}) {
  let popcornElectronDocumentPanelValue85 = popcornElectronDocumentPanelParam4.layoutMode === "pageless",
    popcornElectronDocumentPanelValue86 = popcornElectronDocumentPanelHelper153(popcornElectronDocumentPanelParam1.sections.length > 0 ? popcornElectronDocumentPanelParam1.sections : [{
      id: "doc-section-1",
      breakType: 0,
      pageSetup: undefined,
      columns: undefined,
      elements: popcornElectronDocumentPanelParam1.elements,
      header: undefined,
      footer: undefined,
      firstHeader: undefined,
      firstFooter: undefined,
      differentFirstPage: undefined,
      startsWithPageBreak: false
    }], popcornElectronDocumentPanelParam1),
    popcornElectronDocumentPanelValue87 = [],
    popcornElectronDocumentPanelValue88 = [],
    popcornElectronDocumentPanelValue89 = [],
    popcornElectronDocumentPanelValue90 = [],
    popcornElectronDocumentPanelValue91 = [],
    popcornElectronDocumentPanelValue92 = {},
    popcornElectronDocumentPanelValue93,
    popcornElectronDocumentPanelValue94,
    popcornElectronDocumentPanelValue95,
    popcornElectronDocumentPanelValue96 = 0,
    popcornElectronDocumentPanelValue97 = 0,
    popcornElectronDocumentPanelValue98 = false,
    popcornElectronDocumentPanelValue99 = false,
    popcornElectronDocumentPanelValue100,
    popcornElectronDocumentPanelValue101 = popcornElectronDocumentPanelHelper42(),
    popcornElectronDocumentPanelValue102 = new Map(),
    popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91(),
    popcornElectronDocumentPanelValue104 = new popcornElectronDocumentPanelImport13(popcornElectronDocumentPanelParam1.textStyles ?? []),
    popcornElectronDocumentPanelValue105 = popcornElectronDocumentPanelParam834 => popcornElectronDocumentPanelValue104.resolve(popcornElectronDocumentPanelParam834),
    popcornElectronDocumentPanelValue106 = popcornElectronDocumentPanelHelper79(popcornElectronDocumentPanelParam1),
    popcornElectronDocumentPanelValue107 = popcornElectronDocumentPanelHelper90(popcornElectronDocumentPanelParam1, popcornElectronDocumentPanelValue105, popcornElectronDocumentPanelValue106, popcornElectronDocumentPanelParam1.settings?.defaultTabStop),
    popcornElectronDocumentPanelValue108 = popcornElectronDocumentPanelValue86.map(item => ({
      section: item,
      settings: popcornElectronDocumentPanelHelper150(item, popcornElectronDocumentPanelParam1, popcornElectronDocumentPanelParam4)
    }));
  for (let popcornElectronDocumentPanelValue109 = 0; popcornElectronDocumentPanelValue109 < popcornElectronDocumentPanelValue108.length; popcornElectronDocumentPanelValue109 += 1) {
    let {
        section,
        settings
      } = popcornElectronDocumentPanelValue108[popcornElectronDocumentPanelValue109],
      popcornElectronDocumentPanelValue110 = popcornElectronDocumentPanelValue108[popcornElectronDocumentPanelValue109 - 1],
      popcornElectronDocumentPanelValue111 = popcornElectronDocumentPanelValue108[popcornElectronDocumentPanelValue109 + 1];
    popcornElectronDocumentPanelHelper157(popcornElectronDocumentPanelValue92, section);
    let popcornElectronDocumentPanelValue112 = popcornElectronDocumentPanelHelper87(section.header?.elements ?? popcornElectronDocumentPanelValue88, popcornElectronDocumentPanelValue105, popcornElectronDocumentPanelValue106),
      popcornElectronDocumentPanelValue113 = popcornElectronDocumentPanelHelper87(section.footer?.elements ?? popcornElectronDocumentPanelValue89, popcornElectronDocumentPanelValue105, popcornElectronDocumentPanelValue106),
      popcornElectronDocumentPanelValue114 = popcornElectronDocumentPanelHelper87(section.firstHeader?.elements ?? popcornElectronDocumentPanelValue90, popcornElectronDocumentPanelValue105, popcornElectronDocumentPanelValue106),
      popcornElectronDocumentPanelValue115 = popcornElectronDocumentPanelHelper87(section.firstFooter?.elements ?? popcornElectronDocumentPanelValue91, popcornElectronDocumentPanelValue105, popcornElectronDocumentPanelValue106),
      popcornElectronDocumentPanelValue116 = !!section.pageSetup?.pageNumbers;
    section.header && (popcornElectronDocumentPanelValue88 = popcornElectronDocumentPanelValue112);
    section.footer && (popcornElectronDocumentPanelValue89 = popcornElectronDocumentPanelValue113);
    section.firstHeader && (popcornElectronDocumentPanelValue90 = popcornElectronDocumentPanelValue114);
    section.firstFooter && (popcornElectronDocumentPanelValue91 = popcornElectronDocumentPanelValue115);
    let popcornElectronDocumentPanelValue117 = popcornElectronDocumentPanelHelper88(section.elements ?? [], popcornElectronDocumentPanelValue105, popcornElectronDocumentPanelValue106, popcornElectronDocumentPanelParam1.settings?.defaultTabStop),
      popcornElectronDocumentPanelValue118 = section.id || "doc-section",
      popcornElectronDocumentPanelValue119 = popcornElectronDocumentPanelParam357 => popcornElectronDocumentPanelHelper165(popcornElectronDocumentPanelValue118, settings, popcornElectronDocumentPanelValue85 ? [] : popcornElectronDocumentPanelParam357 && section.differentFirstPage ? popcornElectronDocumentPanelValue114 : popcornElectronDocumentPanelValue112, popcornElectronDocumentPanelValue85 ? [] : popcornElectronDocumentPanelParam357 && section.differentFirstPage ? popcornElectronDocumentPanelValue115 : popcornElectronDocumentPanelValue113, popcornElectronDocumentPanelValue85 ? false : popcornElectronDocumentPanelValue116, popcornElectronDocumentPanelValue92, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelParam3),
      popcornElectronDocumentPanelValue120 = !popcornElectronDocumentPanelValue93 || !popcornElectronDocumentPanelValue95 || !popcornElectronDocumentPanelValue85 && (popcornElectronDocumentPanelValue94 !== settings.key || popcornElectronDocumentPanelHelper151(section));
    popcornElectronDocumentPanelValue120 && (popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95 ?? settings, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4)), popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(true), popcornElectronDocumentPanelValue102 = new Map(), popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91(), popcornElectronDocumentPanelValue94 = settings.key, popcornElectronDocumentPanelValue95 = settings, popcornElectronDocumentPanelValue96 = settings.contentTopPx, popcornElectronDocumentPanelValue97 = 0, popcornElectronDocumentPanelValue98 = false, popcornElectronDocumentPanelValue99 = false, popcornElectronDocumentPanelValue100 = undefined, popcornElectronDocumentPanelValue101 = popcornElectronDocumentPanelHelper42());
    let popcornElectronDocumentPanelValue121 = Math.max(popcornElectronDocumentPanelValue96, settings.contentTopPx),
      popcornElectronDocumentPanelValue122 = !popcornElectronDocumentPanelValue120 && (popcornElectronDocumentPanelValue85 || !popcornElectronDocumentPanelHelper151(section)) && popcornElectronDocumentPanelValue121 > settings.contentTopPx + 0.01,
      popcornElectronDocumentPanelValue123 = popcornElectronDocumentPanelValue110 !== undefined && section.breakType === documentW.SECTION_BREAK_TYPE_CONTINUOUS && popcornElectronDocumentPanelHelper71(popcornElectronDocumentPanelValue110.settings.columns, settings.columns),
      popcornElectronDocumentPanelValue124 = popcornElectronDocumentPanelValue122 && popcornElectronDocumentPanelValue98 && (!popcornElectronDocumentPanelValue123 || !popcornElectronDocumentPanelValue99);
    if (popcornElectronDocumentPanelValue93 !== undefined && popcornElectronDocumentPanelValue111 !== undefined && settings.columns.widths.length > 1 && popcornElectronDocumentPanelValue111.settings.key === settings.key && (popcornElectronDocumentPanelValue85 || !popcornElectronDocumentPanelHelper151(popcornElectronDocumentPanelValue111.section)) && popcornElectronDocumentPanelHelper71(settings.columns, popcornElectronDocumentPanelValue111.settings.columns) && popcornElectronDocumentPanelValue93) {
      let popcornElectronDocumentPanelValue517 = popcornElectronDocumentPanelHelper123({
        preparedElements: popcornElectronDocumentPanelValue117,
        settings,
        sectionStartY: popcornElectronDocumentPanelValue121,
        initialOccupiedRegions: popcornElectronDocumentPanelValue101,
        sectionIndex: popcornElectronDocumentPanelValue109,
        ctx: popcornElectronDocumentPanelParam2,
        theme: popcornElectronDocumentPanelParam3
      });
      if (popcornElectronDocumentPanelValue517) {
        popcornElectronDocumentPanelValue93.bodyElements.push(...popcornElectronDocumentPanelValue517.bodyElements);
        popcornElectronDocumentPanelValue96 = popcornElectronDocumentPanelValue517.endY;
        popcornElectronDocumentPanelValue97 = popcornElectronDocumentPanelValue517.trailingSpaceAfterPx;
        popcornElectronDocumentPanelValue98 = popcornElectronDocumentPanelValue517.previousEmptyParagraph;
        popcornElectronDocumentPanelValue99 = popcornElectronDocumentPanelValue517.previousEmptyParagraphHasSpacing;
        popcornElectronDocumentPanelValue100 = popcornElectronDocumentPanelValue517.previousParagraphStyleId;
        popcornElectronDocumentPanelValue101 = popcornElectronDocumentPanelValue517.occupiedRegions;
        continue;
      }
    }
    let popcornElectronDocumentPanelValue125 = 0,
      popcornElectronDocumentPanelValue126 = $t(settings, popcornElectronDocumentPanelValue121),
      popcornElectronDocumentPanelValue127 = popcornElectronDocumentPanelHelper50(settings, popcornElectronDocumentPanelValue122 ? popcornElectronDocumentPanelValue97 : 0),
      popcornElectronDocumentPanelValue128 = popcornElectronDocumentPanelHelper51(settings, popcornElectronDocumentPanelValue124 ? popcornElectronDocumentPanelValue98 : false),
      popcornElectronDocumentPanelValue129 = popcornElectronDocumentPanelHelper51(settings, popcornElectronDocumentPanelValue124 ? popcornElectronDocumentPanelValue99 : false),
      popcornElectronDocumentPanelValue130 = popcornElectronDocumentPanelHelper52(settings, popcornElectronDocumentPanelValue122 ? popcornElectronDocumentPanelValue100 : undefined),
      popcornElectronDocumentPanelValue131 = popcornElectronDocumentPanelHelper53(settings),
      popcornElectronDocumentPanelValue132 = popcornElectronDocumentPanelHelper43(popcornElectronDocumentPanelValue101),
      popcornElectronDocumentPanelValue133 = () => {
        popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95 ?? settings, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4));
        popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false);
        popcornElectronDocumentPanelValue102 = new Map();
        popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91();
        popcornElectronDocumentPanelValue94 = settings.key;
        popcornElectronDocumentPanelValue95 = settings;
        popcornElectronDocumentPanelValue121 = settings.contentTopPx;
        popcornElectronDocumentPanelValue97 = 0;
        popcornElectronDocumentPanelValue98 = false;
        popcornElectronDocumentPanelValue99 = false;
        popcornElectronDocumentPanelValue100 = undefined;
        popcornElectronDocumentPanelValue125 = 0;
        popcornElectronDocumentPanelValue126 = $t(settings, popcornElectronDocumentPanelValue121);
        popcornElectronDocumentPanelValue127 = popcornElectronDocumentPanelHelper50(settings);
        popcornElectronDocumentPanelValue128 = popcornElectronDocumentPanelHelper51(settings);
        popcornElectronDocumentPanelValue129 = popcornElectronDocumentPanelHelper51(settings);
        popcornElectronDocumentPanelValue130 = popcornElectronDocumentPanelHelper52(settings);
        popcornElectronDocumentPanelValue131 = popcornElectronDocumentPanelHelper53(settings);
        popcornElectronDocumentPanelValue132 = popcornElectronDocumentPanelHelper42();
      },
      popcornElectronDocumentPanelValue134 = () => {
        if (popcornElectronDocumentPanelValue125 < settings.columns.widths.length - 1) {
          popcornElectronDocumentPanelValue125 += 1;
          return;
        }
        popcornElectronDocumentPanelValue133();
      },
      popcornElectronDocumentPanelValue135 = new Map();
    for (let popcornElectronDocumentPanelValue167 = 0; popcornElectronDocumentPanelValue167 < popcornElectronDocumentPanelValue117.length; popcornElectronDocumentPanelValue167 += 1) {
      let popcornElectronDocumentPanelValue168 = popcornElectronDocumentPanelValue117[popcornElectronDocumentPanelValue167];
      if (popcornElectronDocumentPanelValue168.docxSectionBreakCarrier) {
        popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue168.lastParagraphSpaceAfterPx;
        popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] = false;
        popcornElectronDocumentPanelValue129[popcornElectronDocumentPanelValue125] = false;
        popcornElectronDocumentPanelValue130[popcornElectronDocumentPanelValue125] = undefined;
        popcornElectronDocumentPanelValue97 = popcornElectronDocumentPanelValue168.lastParagraphSpaceAfterPx;
        popcornElectronDocumentPanelValue98 = false;
        popcornElectronDocumentPanelValue99 = false;
        popcornElectronDocumentPanelValue100 = undefined;
        continue;
      }
      if (popcornElectronDocumentPanelValue168.kind === "table" && popcornElectronDocumentPanelHelper120(popcornElectronDocumentPanelValue117, popcornElectronDocumentPanelValue167)) {
        let popcornElectronDocumentPanelValue253 = popcornElectronDocumentPanelValue168.element.table;
        if (!popcornElectronDocumentPanelValue253 || popcornElectronDocumentPanelValue253.rows.length === 0) continue;
        let popcornElectronDocumentPanelValue254 = 0;
        for (; popcornElectronDocumentPanelValue254 < popcornElectronDocumentPanelValue253.rows.length;) {
          let popcornElectronDocumentPanelValue255 = settings.columns.widths[popcornElectronDocumentPanelValue125] ?? settings.contentWidthPx,
            popcornElectronDocumentPanelValue256 = popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] ?? popcornElectronDocumentPanelValue121,
            popcornElectronDocumentPanelValue257 = popcornElectronDocumentPanelValue256 + (popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] ?? 0),
            popcornElectronDocumentPanelValue258 = _n(popcornElectronDocumentPanelValue168, popcornElectronDocumentPanelValue257, popcornElectronDocumentPanelValue102, popcornElectronDocumentPanelValue131[popcornElectronDocumentPanelValue125], popcornElectronDocumentPanelValue85 ? popcornElectronDocumentPanelHelper68(settings, popcornElectronDocumentPanelValue121) : 0),
            popcornElectronDocumentPanelValue259 = popcornElectronDocumentPanelValue256 === settings.contentTopPx,
            popcornElectronDocumentPanelValue260 = Math.max(0, settings.contentBottomPx - popcornElectronDocumentPanelValue258),
            popcornElectronDocumentPanelValue261 = popcornElectronDocumentPanelHelper115({
              preparedElement: popcornElectronDocumentPanelValue168,
              rowOffset: popcornElectronDocumentPanelValue254,
              availableHeight: popcornElectronDocumentPanelValue260,
              isFreshPageSlot: popcornElectronDocumentPanelValue259,
              ctx: popcornElectronDocumentPanelParam2,
              widthPx: popcornElectronDocumentPanelValue255,
              theme: popcornElectronDocumentPanelParam3,
              documentGridLinePitchTwips: settings.documentGridLinePitchTwips
            });
          if (!popcornElectronDocumentPanelValue261.element || popcornElectronDocumentPanelValue261.rowCount <= 0) {
            popcornElectronDocumentPanelValue134();
            continue;
          }
          popcornElectronDocumentPanelValue93 || (popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false), popcornElectronDocumentPanelValue102 = new Map(), popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91());
          let popcornElectronDocumentPanelValue262 = $n(popcornElectronDocumentPanelValue168, settings, popcornElectronDocumentPanelValue125);
          popcornElectronDocumentPanelValue93.bodyElements.push(popcornElectronDocumentPanelHelper145(popcornElectronDocumentPanelValue261.element, "table", popcornElectronDocumentPanelValue262, popcornElectronDocumentPanelValue258, popcornElectronDocumentPanelValue261.widthPx, popcornElectronDocumentPanelValue261.heightPx, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelParam3, undefined, popcornElectronDocumentPanelHelper55({
            settings,
            sectionIndex: popcornElectronDocumentPanelValue109,
            sourceElementIndex: popcornElectronDocumentPanelValue167,
            fragmentIndex: on(popcornElectronDocumentPanelValue135, popcornElectronDocumentPanelValue167),
            columnIndex: popcornElectronDocumentPanelValue125,
            rowStartIndex: popcornElectronDocumentPanelValue254 + 1,
            rowEndIndex: popcornElectronDocumentPanelValue254 + popcornElectronDocumentPanelValue261.rowCount
          })));
          popcornElectronDocumentPanelHelper103(popcornElectronDocumentPanelValue132, {
            ...popcornElectronDocumentPanelValue168,
            element: popcornElectronDocumentPanelValue261.element
          }, {
            xPx: popcornElectronDocumentPanelValue262,
            yPx: popcornElectronDocumentPanelValue258,
            widthPx: popcornElectronDocumentPanelValue261.widthPx,
            heightPx: popcornElectronDocumentPanelValue261.heightPx
          });
          popcornElectronDocumentPanelValue254 += popcornElectronDocumentPanelValue261.rowCount;
          popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] = Math.max(popcornElectronDocumentPanelValue257, popcornElectronDocumentPanelValue258 + popcornElectronDocumentPanelValue261.heightPx);
          popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] = 0;
          popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] = false;
          popcornElectronDocumentPanelValue129[popcornElectronDocumentPanelValue125] = false;
          popcornElectronDocumentPanelValue130[popcornElectronDocumentPanelValue125] = undefined;
          popcornElectronDocumentPanelValue97 = 0;
          popcornElectronDocumentPanelValue98 = false;
          popcornElectronDocumentPanelValue99 = false;
          popcornElectronDocumentPanelValue100 = undefined;
          popcornElectronDocumentPanelValue254 < popcornElectronDocumentPanelValue253.rows.length && popcornElectronDocumentPanelValue134();
        }
        continue;
      }
      if (popcornElectronDocumentPanelValue168.kind !== "text") {
        let popcornElectronDocumentPanelValue244 = false;
        for (; !popcornElectronDocumentPanelValue244;) {
          let popcornElectronDocumentPanelValue245 = settings.columns.widths[popcornElectronDocumentPanelValue125] ?? settings.contentWidthPx,
            popcornElectronDocumentPanelValue246 = popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] ?? popcornElectronDocumentPanelValue121,
            popcornElectronDocumentPanelValue247 = popcornElectronDocumentPanelValue246 + (popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] ?? 0),
            popcornElectronDocumentPanelValue248 = popcornElectronDocumentPanelHelper100(popcornElectronDocumentPanelValue168, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelValue245, popcornElectronDocumentPanelParam3, settings.documentGridLinePitchTwips),
            popcornElectronDocumentPanelValue249 = _n(popcornElectronDocumentPanelValue168, popcornElectronDocumentPanelValue247, popcornElectronDocumentPanelValue102, popcornElectronDocumentPanelValue131[popcornElectronDocumentPanelValue125], popcornElectronDocumentPanelValue85 ? popcornElectronDocumentPanelHelper68(settings, popcornElectronDocumentPanelValue121) : 0),
            popcornElectronDocumentPanelValue250 = popcornElectronDocumentPanelHelper69(popcornElectronDocumentPanelValue168, popcornElectronDocumentPanelValue247, popcornElectronDocumentPanelValue249, popcornElectronDocumentPanelValue248.heightPx),
            popcornElectronDocumentPanelValue251 = popcornElectronDocumentPanelValue246 === settings.contentTopPx;
          if (popcornElectronDocumentPanelValue250 > settings.contentBottomPx && !popcornElectronDocumentPanelValue251) {
            if (popcornElectronDocumentPanelValue125 < settings.columns.widths.length - 1) {
              popcornElectronDocumentPanelValue125 += 1;
              continue;
            }
            popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95 ?? settings, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4));
            popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false);
            popcornElectronDocumentPanelValue102 = new Map();
            popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91();
            popcornElectronDocumentPanelValue94 = settings.key;
            popcornElectronDocumentPanelValue95 = settings;
            popcornElectronDocumentPanelValue121 = settings.contentTopPx;
            popcornElectronDocumentPanelValue97 = 0;
            popcornElectronDocumentPanelValue98 = false;
            popcornElectronDocumentPanelValue99 = false;
            popcornElectronDocumentPanelValue100 = undefined;
            popcornElectronDocumentPanelValue125 = 0;
            popcornElectronDocumentPanelValue126 = $t(settings, popcornElectronDocumentPanelValue121);
            popcornElectronDocumentPanelValue127 = popcornElectronDocumentPanelHelper50(settings);
            popcornElectronDocumentPanelValue128 = popcornElectronDocumentPanelHelper51(settings);
            popcornElectronDocumentPanelValue129 = popcornElectronDocumentPanelHelper51(settings);
            popcornElectronDocumentPanelValue130 = popcornElectronDocumentPanelHelper52(settings);
            popcornElectronDocumentPanelValue131 = popcornElectronDocumentPanelHelper53(settings);
            popcornElectronDocumentPanelValue132 = popcornElectronDocumentPanelHelper42();
            continue;
          }
          popcornElectronDocumentPanelValue93 || (popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false), popcornElectronDocumentPanelValue102 = new Map(), popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91());
          let popcornElectronDocumentPanelValue252 = $n(popcornElectronDocumentPanelValue168, settings, popcornElectronDocumentPanelValue125);
          popcornElectronDocumentPanelValue93.bodyElements.push(popcornElectronDocumentPanelHelper145(popcornElectronDocumentPanelValue168.element, popcornElectronDocumentPanelValue168.kind, popcornElectronDocumentPanelValue252, popcornElectronDocumentPanelValue249, popcornElectronDocumentPanelValue248.widthPx, popcornElectronDocumentPanelValue248.heightPx, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelParam3, undefined, popcornElectronDocumentPanelHelper55({
            settings,
            sectionIndex: popcornElectronDocumentPanelValue109,
            sourceElementIndex: popcornElectronDocumentPanelValue167,
            fragmentIndex: on(popcornElectronDocumentPanelValue135, popcornElectronDocumentPanelValue167),
            columnIndex: popcornElectronDocumentPanelValue125
          })));
          popcornElectronDocumentPanelHelper103(popcornElectronDocumentPanelValue132, popcornElectronDocumentPanelValue168, {
            xPx: popcornElectronDocumentPanelValue252,
            yPx: popcornElectronDocumentPanelValue249,
            widthPx: popcornElectronDocumentPanelValue248.widthPx,
            heightPx: popcornElectronDocumentPanelValue248.heightPx
          });
          popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue250;
          popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] = 0;
          popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] = false;
          popcornElectronDocumentPanelValue129[popcornElectronDocumentPanelValue125] = false;
          popcornElectronDocumentPanelValue130[popcornElectronDocumentPanelValue125] = undefined;
          popcornElectronDocumentPanelValue97 = 0;
          popcornElectronDocumentPanelValue98 = false;
          popcornElectronDocumentPanelValue99 = false;
          popcornElectronDocumentPanelValue100 = undefined;
          popcornElectronDocumentPanelValue244 = true;
        }
        continue;
      }
      let popcornElectronDocumentPanelValue169 = 0,
        popcornElectronDocumentPanelValue170 = false;
      for (; !popcornElectronDocumentPanelValue170;) {
        let popcornElectronDocumentPanelValue171 = settings.columns.widths[popcornElectronDocumentPanelValue125] ?? settings.contentWidthPx,
          popcornElectronDocumentPanelValue172 = popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] ?? popcornElectronDocumentPanelValue121,
          popcornElectronDocumentPanelValue173 = popcornElectronDocumentPanelHelper99(popcornElectronDocumentPanelValue168, popcornElectronDocumentPanelValue171, popcornElectronDocumentPanelParam3, settings.documentGridLinePitchTwips);
        if (popcornElectronDocumentPanelValue173.length === 0 || popcornElectronDocumentPanelValue169 >= popcornElectronDocumentPanelValue173.length) {
          popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue168.element, popcornElectronDocumentPanelValue172, popcornElectronDocumentPanelValue102);
          popcornElectronDocumentPanelValue131[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue172;
          popcornElectronDocumentPanelValue170 = true;
          break;
        }
        let popcornElectronDocumentPanelValue174 = popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] ?? false,
          popcornElectronDocumentPanelValue175 = popcornElectronDocumentPanelValue129[popcornElectronDocumentPanelValue125] ?? false,
          popcornElectronDocumentPanelValue176 = popcornElectronDocumentPanelHelper119({
            lineIndex: popcornElectronDocumentPanelValue169,
            lines: popcornElectronDocumentPanelValue173,
            previousElementWasEmptyParagraph: popcornElectronDocumentPanelValue174,
            previousEmptyParagraphHasSpacing: popcornElectronDocumentPanelValue175,
            firstParagraphSpaceBeforePx: popcornElectronDocumentPanelValue168.firstParagraphSpaceBeforePx
          }),
          className = popcornElectronDocumentPanelHelper57({
            previousParagraphStyleId: popcornElectronDocumentPanelValue130[popcornElectronDocumentPanelValue125],
            currentParagraphStyleId: popcornElectronDocumentPanelValue168.firstParagraphStyleId,
            currentParagraphUsesContextualSpacing: popcornElectronDocumentPanelValue168.firstParagraphUsesContextualSpacing
          }),
          popcornElectronDocumentPanelValue177 = popcornElectronDocumentPanelValue176 || className && popcornElectronDocumentPanelValue169 === 0 && popcornElectronDocumentPanelHelper118(popcornElectronDocumentPanelValue173[0]),
          popcornElectronDocumentPanelValue178 = popcornElectronDocumentPanelValue177 && popcornElectronDocumentPanelValue169 === 0 ? 1 : popcornElectronDocumentPanelValue169;
        if (popcornElectronDocumentPanelValue178 >= popcornElectronDocumentPanelValue173.length) {
          popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue168.element, popcornElectronDocumentPanelValue172, popcornElectronDocumentPanelValue102);
          popcornElectronDocumentPanelValue131[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue172;
          popcornElectronDocumentPanelValue170 = true;
          break;
        }
        let popcornElectronDocumentPanelValue179 = popcornElectronDocumentPanelHelper117(popcornElectronDocumentPanelValue168.element, popcornElectronDocumentPanelValue173),
          popcornElectronDocumentPanelValue180 = popcornElectronDocumentPanelValue172 - popcornElectronDocumentPanelHelper106({
            lineIndex: popcornElectronDocumentPanelValue178,
            trailingSpaceAfterPx: className ? 0 : popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] ?? 0,
            firstParagraphSpaceBeforePx: popcornElectronDocumentPanelValue177 ? 0 : popcornElectronDocumentPanelValue168.firstParagraphSpaceBeforePx
          }),
          popcornElectronDocumentPanelValue181 = popcornElectronDocumentPanelHelper98(popcornElectronDocumentPanelValue103, popcornElectronDocumentPanelValue107, settings, popcornElectronDocumentPanelParam3),
          popcornElectronDocumentPanelValue182 = popcornElectronDocumentPanelHelper48(popcornElectronDocumentPanelValue132, settings.columns.xPositions[popcornElectronDocumentPanelValue125] ?? settings.contentLeftPx, popcornElectronDocumentPanelValue171, popcornElectronDocumentPanelValue180, popcornElectronDocumentPanelValue181, Math.max(1, popcornElectronDocumentPanelValue173[popcornElectronDocumentPanelValue178]?.heightPx ?? 0), popcornElectronDocumentPanelValue179);
        popcornElectronDocumentPanelValue180 = popcornElectronDocumentPanelValue182.currentY;
        let popcornElectronDocumentPanelValue183 = Math.max(0, popcornElectronDocumentPanelValue182.boundaryBottomPx - popcornElectronDocumentPanelValue180),
          popcornElectronDocumentPanelValue184 = popcornElectronDocumentPanelValue172 === settings.contentTopPx,
          {
            nextLineIndex,
            fragmentHeightPx,
            endsWithFlowBreak
          } = popcornElectronDocumentPanelHelper108({
            lines: popcornElectronDocumentPanelValue173,
            startIndex: popcornElectronDocumentPanelValue178,
            currentY: popcornElectronDocumentPanelValue180,
            boundaryBottomPx: popcornElectronDocumentPanelValue182.boundaryBottomPx,
            pageContentBottomPx: settings.contentBottomPx,
            pageFootnoteIds: popcornElectronDocumentPanelValue103.ids,
            preparedFootnotes: popcornElectronDocumentPanelValue107,
            footnoteWidthPx: settings.contentWidthPx,
            theme: popcornElectronDocumentPanelParam3
          });
        if (popcornElectronDocumentPanelValue179 && nextLineIndex > popcornElectronDocumentPanelValue178 && !popcornElectronDocumentPanelValue184) {
          let popcornElectronDocumentPanelValue857 = popcornElectronDocumentPanelHelper121(popcornElectronDocumentPanelValue168, popcornElectronDocumentPanelValue117, popcornElectronDocumentPanelValue167, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelValue171, popcornElectronDocumentPanelParam3, settings.documentGridLinePitchTwips);
          popcornElectronDocumentPanelValue857 !== undefined && fragmentHeightPx + popcornElectronDocumentPanelValue857 > popcornElectronDocumentPanelValue183 + 0.5 && (nextLineIndex = popcornElectronDocumentPanelValue178, fragmentHeightPx = 0, endsWithFlowBreak = false);
        }
        if (nextLineIndex === popcornElectronDocumentPanelValue178) {
          if (!popcornElectronDocumentPanelValue184) {
            if (popcornElectronDocumentPanelValue125 < settings.columns.widths.length - 1) {
              popcornElectronDocumentPanelValue125 += 1;
              continue;
            }
            popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95 ?? settings, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4));
            popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false);
            popcornElectronDocumentPanelValue102 = new Map();
            popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91();
            popcornElectronDocumentPanelValue94 = settings.key;
            popcornElectronDocumentPanelValue95 = settings;
            popcornElectronDocumentPanelValue121 = settings.contentTopPx;
            popcornElectronDocumentPanelValue97 = 0;
            popcornElectronDocumentPanelValue98 = false;
            popcornElectronDocumentPanelValue99 = false;
            popcornElectronDocumentPanelValue100 = undefined;
            popcornElectronDocumentPanelValue125 = 0;
            popcornElectronDocumentPanelValue126 = $t(settings, popcornElectronDocumentPanelValue121);
            popcornElectronDocumentPanelValue127 = popcornElectronDocumentPanelHelper50(settings);
            popcornElectronDocumentPanelValue128 = popcornElectronDocumentPanelHelper51(settings);
            popcornElectronDocumentPanelValue129 = popcornElectronDocumentPanelHelper51(settings);
            popcornElectronDocumentPanelValue130 = popcornElectronDocumentPanelHelper52(settings);
            popcornElectronDocumentPanelValue131 = popcornElectronDocumentPanelHelper53(settings);
            popcornElectronDocumentPanelValue132 = popcornElectronDocumentPanelHelper42();
            continue;
          }
          fragmentHeightPx = Math.max(1, popcornElectronDocumentPanelValue173[popcornElectronDocumentPanelValue178]?.heightPx ?? 0);
          nextLineIndex = Math.min(popcornElectronDocumentPanelValue173.length, popcornElectronDocumentPanelValue178 + 1);
          endsWithFlowBreak = false;
        }
        if (popcornElectronDocumentPanelValue93 || (popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false), popcornElectronDocumentPanelValue102 = new Map(), popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91()), popcornElectronDocumentPanelValue93.bodyElements.push({
          kind: "text",
          element: popcornElectronDocumentPanelValue168.element,
          xPx: settings.columns.xPositions[popcornElectronDocumentPanelValue125] ?? settings.contentLeftPx,
          yPx: popcornElectronDocumentPanelValue180,
          widthPx: popcornElectronDocumentPanelValue171,
          heightPx: fragmentHeightPx,
          flow: popcornElectronDocumentPanelHelper55({
            settings,
            sectionIndex: popcornElectronDocumentPanelValue109,
            sourceElementIndex: popcornElectronDocumentPanelValue167,
            fragmentIndex: on(popcornElectronDocumentPanelValue135, popcornElectronDocumentPanelValue167),
            columnIndex: popcornElectronDocumentPanelValue125,
            lineStartIndex: popcornElectronDocumentPanelValue178 + 1,
            lineEndIndex: nextLineIndex
          }),
          textLines: popcornElectronDocumentPanelValue173.slice(popcornElectronDocumentPanelValue178, nextLineIndex)
        }), popcornElectronDocumentPanelValue85 || popcornElectronDocumentPanelHelper147(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue103, popcornElectronDocumentPanelValue107, popcornElectronDocumentPanelValue173, popcornElectronDocumentPanelValue178, nextLineIndex, settings, popcornElectronDocumentPanelParam2, popcornElectronDocumentPanelParam3), popcornElectronDocumentPanelValue169 === 0 && (popcornElectronDocumentPanelHelper58(popcornElectronDocumentPanelValue168.element, popcornElectronDocumentPanelValue180, popcornElectronDocumentPanelValue102), popcornElectronDocumentPanelValue131[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue180), popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue180 + fragmentHeightPx, popcornElectronDocumentPanelValue169 = nextLineIndex, popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] = 0, endsWithFlowBreak && popcornElectronDocumentPanelValue169 < popcornElectronDocumentPanelValue173.length) {
          if (popcornElectronDocumentPanelValue125 < settings.columns.widths.length - 1) {
            popcornElectronDocumentPanelValue125 += 1;
            continue;
          }
          popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95 ?? settings, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4));
          popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false);
          popcornElectronDocumentPanelValue102 = new Map();
          popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91();
          popcornElectronDocumentPanelValue94 = settings.key;
          popcornElectronDocumentPanelValue95 = settings;
          popcornElectronDocumentPanelValue121 = settings.contentTopPx;
          popcornElectronDocumentPanelValue97 = 0;
          popcornElectronDocumentPanelValue98 = false;
          popcornElectronDocumentPanelValue99 = false;
          popcornElectronDocumentPanelValue100 = undefined;
          popcornElectronDocumentPanelValue125 = 0;
          popcornElectronDocumentPanelValue126 = $t(settings, popcornElectronDocumentPanelValue121);
          popcornElectronDocumentPanelValue127 = popcornElectronDocumentPanelHelper50(settings);
          popcornElectronDocumentPanelValue128 = popcornElectronDocumentPanelHelper51(settings);
          popcornElectronDocumentPanelValue129 = popcornElectronDocumentPanelHelper51(settings);
          popcornElectronDocumentPanelValue130 = popcornElectronDocumentPanelHelper52(settings);
          popcornElectronDocumentPanelValue131 = popcornElectronDocumentPanelHelper53(settings);
          popcornElectronDocumentPanelValue132 = popcornElectronDocumentPanelHelper42();
          continue;
        }
        if (popcornElectronDocumentPanelValue169 >= popcornElectronDocumentPanelValue173.length) {
          let popcornElectronDocumentPanelValue538 = (popcornElectronDocumentPanelValue168.element.paragraphs?.length ?? 0) > 1 ? 8 : 0;
          popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] = (popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] ?? popcornElectronDocumentPanelValue121) + popcornElectronDocumentPanelValue538;
          popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue538 > 0 ? 0 : popcornElectronDocumentPanelValue168.lastParagraphSpaceAfterPx;
          popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelHelper117(popcornElectronDocumentPanelValue168.element, popcornElectronDocumentPanelValue173);
          popcornElectronDocumentPanelValue129[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] === true && popcornElectronDocumentPanelHelper105(popcornElectronDocumentPanelValue168);
          popcornElectronDocumentPanelValue130[popcornElectronDocumentPanelValue125] = popcornElectronDocumentPanelValue168.lastParagraphStyleId;
          popcornElectronDocumentPanelValue97 = popcornElectronDocumentPanelValue127[popcornElectronDocumentPanelValue125] ?? 0;
          popcornElectronDocumentPanelValue98 = popcornElectronDocumentPanelValue128[popcornElectronDocumentPanelValue125] ?? false;
          popcornElectronDocumentPanelValue99 = popcornElectronDocumentPanelValue129[popcornElectronDocumentPanelValue125] ?? false;
          popcornElectronDocumentPanelValue100 = popcornElectronDocumentPanelValue168.lastParagraphStyleId;
          popcornElectronDocumentPanelValue170 = true;
          break;
        }
        if ((popcornElectronDocumentPanelValue126[popcornElectronDocumentPanelValue125] ?? popcornElectronDocumentPanelValue121) >= settings.contentBottomPx) {
          if (popcornElectronDocumentPanelValue125 < settings.columns.widths.length - 1) {
            popcornElectronDocumentPanelValue125 += 1;
            continue;
          }
          popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95 ?? settings, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4));
          popcornElectronDocumentPanelValue93 = popcornElectronDocumentPanelValue119(false);
          popcornElectronDocumentPanelValue102 = new Map();
          popcornElectronDocumentPanelValue103 = popcornElectronDocumentPanelHelper91();
          popcornElectronDocumentPanelValue94 = settings.key;
          popcornElectronDocumentPanelValue95 = settings;
          popcornElectronDocumentPanelValue121 = settings.contentTopPx;
          popcornElectronDocumentPanelValue97 = 0;
          popcornElectronDocumentPanelValue98 = false;
          popcornElectronDocumentPanelValue99 = false;
          popcornElectronDocumentPanelValue100 = undefined;
          popcornElectronDocumentPanelValue125 = 0;
          popcornElectronDocumentPanelValue126 = $t(settings, popcornElectronDocumentPanelValue121);
          popcornElectronDocumentPanelValue127 = popcornElectronDocumentPanelHelper50(settings);
          popcornElectronDocumentPanelValue128 = popcornElectronDocumentPanelHelper51(settings);
          popcornElectronDocumentPanelValue129 = popcornElectronDocumentPanelHelper51(settings);
          popcornElectronDocumentPanelValue130 = popcornElectronDocumentPanelHelper52(settings);
          popcornElectronDocumentPanelValue131 = popcornElectronDocumentPanelHelper53(settings);
          popcornElectronDocumentPanelValue132 = popcornElectronDocumentPanelHelper42();
        }
      }
    }
    popcornElectronDocumentPanelValue96 = Math.max(...popcornElectronDocumentPanelValue126);
    popcornElectronDocumentPanelValue101 = popcornElectronDocumentPanelHelper43(popcornElectronDocumentPanelValue132);
  }
  return popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue95 ? popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelHelper131(popcornElectronDocumentPanelValue93, popcornElectronDocumentPanelValue95, popcornElectronDocumentPanelValue87.length + 1, popcornElectronDocumentPanelParam4)) : popcornElectronDocumentPanelValue93 && popcornElectronDocumentPanelValue87.push(popcornElectronDocumentPanelValue93), popcornElectronDocumentPanelValue87;
}
var {
    layoutDocumentFlow
  } = {
    layoutDocumentFlow: popcornElectronDocumentPanelHelper166
  },
  popcornElectronDocumentPanelValue36 = {
    leftEmu: 91440,
    rightEmu: 91440,
    topEmu: 45720,
    bottomEmu: 45720
  };
popcornElectronDocumentPanelImport28.load({
  id: "",
  slides: [],
  theme: undefined,
  layouts: [],
  charts: [],
  images: [],
  contentReferences: [],
  textStyles: [],
  people: [],
  threads: []
}).slides.add();
function _i(popcornElectronDocumentPanelParam92) {
  let popcornElectronDocumentPanelValue442 = popcornElectronDocumentPanelParam92.table;
  if (!popcornElectronDocumentPanelValue442 || popcornElectronDocumentPanelValue442.rows.length === 0) return popcornElectronDocumentPanelParam92;
  let popcornElectronDocumentPanelValue443 = false,
    popcornElectronDocumentPanelValue444 = popcornElectronDocumentPanelValue442.rows.map(item => {
      let popcornElectronDocumentPanelValue515 = false,
        popcornElectronDocumentPanelValue516 = item.cells.map(_item => _item.marginLeft === popcornElectronDocumentPanelValue36.leftEmu && _item.marginRight === popcornElectronDocumentPanelValue36.rightEmu && _item.marginTop === popcornElectronDocumentPanelValue36.topEmu && _item.marginBottom === popcornElectronDocumentPanelValue36.bottomEmu ? (popcornElectronDocumentPanelValue515 = true, {
          ..._item,
          marginLeft: undefined,
          marginRight: undefined,
          marginTop: undefined,
          marginBottom: undefined
        }) : _item);
      return popcornElectronDocumentPanelValue515 ? (popcornElectronDocumentPanelValue443 = true, {
        ...item,
        cells: popcornElectronDocumentPanelValue516
      }) : item;
    });
  return popcornElectronDocumentPanelValue443 ? {
    ...popcornElectronDocumentPanelParam92,
    table: {
      ...popcornElectronDocumentPanelValue442,
      rows: popcornElectronDocumentPanelValue444
    }
  } : popcornElectronDocumentPanelParam92;
}
function popcornElectronDocumentPanelHelper167(popcornElectronDocumentPanelParam403) {
  let popcornElectronDocumentPanelValue785 = (popcornElectronDocumentPanelParam403.sections ?? []).map(item => ({
    ...item,
    elements: (item.elements ?? []).map(_i)
  }));
  return {
    ...popcornElectronDocumentPanelParam403,
    sections: popcornElectronDocumentPanelValue785,
    elements: popcornElectronDocumentPanelValue785.flatMap(item => item.elements ?? [])
  };
}
function popcornElectronDocumentPanelHelper168(popcornElectronDocumentPanelParam531) {
  return popcornElectronDocumentPanelHelper169(popcornElectronDocumentPanelParam531.element, {
    xPx: popcornElectronDocumentPanelParam531.xPx,
    yPx: popcornElectronDocumentPanelParam531.yPx,
    widthPx: popcornElectronDocumentPanelParam531.widthPx,
    heightPx: popcornElectronDocumentPanelParam531.heightPx
  });
}
function popcornElectronDocumentPanelHelper169(popcornElectronDocumentPanelParam298, popcornElectronDocumentPanelParam299) {
  let popcornElectronDocumentPanelValue684 = popcornElectronDocumentPanelParam298.bbox?.widthEmu === 0,
    popcornElectronDocumentPanelValue685 = popcornElectronDocumentPanelParam298.bbox?.heightEmu === 0;
  return {
    ...popcornElectronDocumentPanelParam298,
    bbox: {
      ...popcornElectronDocumentPanelParam298.bbox,
      xEmu: popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam299.xPx),
      yEmu: popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam299.yPx),
      widthEmu: popcornElectronDocumentPanelValue684 ? 0 : popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam299.widthPx),
      heightEmu: popcornElectronDocumentPanelValue685 ? 0 : popcornElectronDocumentPanelHelper34(popcornElectronDocumentPanelParam299.heightPx)
    }
  };
}
function popcornElectronDocumentPanelHelper170(popcornElectronDocumentPanelParam536) {
  return [popcornElectronDocumentPanelParam536.layoutMode ?? "paged", popcornElectronDocumentPanelParam536.pagelessMinHeightPx ?? "default-min-height"].join(":");
}
function popcornElectronDocumentPanelHelper171(popcornElectronDocumentPanelParam518, popcornElectronDocumentPanelParam519, popcornElectronDocumentPanelParam520 = {}) {
  return popcornElectronDocumentPanelParam518.resolveLayoutPages(popcornElectronDocumentPanelParam710 => {
    let popcornElectronDocumentPanelValue973 = popcornElectronDocumentPanelHelper167(popcornElectronDocumentPanelParam710);
    return layoutDocumentFlow(popcornElectronDocumentPanelValue973, popcornElectronDocumentPanelParam519, popcornElectronDocumentPanelHelper21(popcornElectronDocumentPanelValue973.theme), popcornElectronDocumentPanelParam520);
  }, popcornElectronDocumentPanelHelper170(popcornElectronDocumentPanelParam520));
}
function popcornElectronDocumentPanelHelper172(popcornElectronDocumentPanelParam412, popcornElectronDocumentPanelParam413) {
  if (typeof OffscreenCanvas > "u") throw Error("OffscreenCanvas API is not available for document layout export.");
  return new OffscreenCanvas(popcornElectronDocumentPanelParam412, popcornElectronDocumentPanelParam413);
}
function popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam673, popcornElectronDocumentPanelParam674, popcornElectronDocumentPanelParam675, popcornElectronDocumentPanelParam676) {
  return {
    left: popcornElectronDocumentPanelParam673,
    top: popcornElectronDocumentPanelParam674,
    width: popcornElectronDocumentPanelParam675,
    height: popcornElectronDocumentPanelParam676
  };
}
function popcornElectronDocumentPanelHelper174(popcornElectronDocumentPanelParam795) {
  return popcornElectronDocumentPanelParam795 * 72 / 96;
}
function popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam606) {
  if (!(popcornElectronDocumentPanelParam606 === undefined || !Number.isFinite(popcornElectronDocumentPanelParam606))) return Math.round(popcornElectronDocumentPanelParam606 * 100) / 100;
}
function popcornElectronDocumentPanelHelper176(popcornElectronDocumentPanelParam738) {
  return popcornElectronDocumentPanelParam738 === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelImport12(popcornElectronDocumentPanelParam738));
}
function popcornElectronDocumentPanelHelper177(popcornElectronDocumentPanelParam736) {
  return popcornElectronDocumentPanelParam736 === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam736 * popcornElectronDocumentPanelImport5);
}
function popcornElectronDocumentPanelHelper178(popcornElectronDocumentPanelParam13) {
  if (!popcornElectronDocumentPanelParam13 || popcornElectronDocumentPanelParam13.length === 0) return;
  let popcornElectronDocumentPanelValue292 = [];
  for (let [popcornElectronDocumentPanelValue294, popcornElectronDocumentPanelValue295] of popcornElectronDocumentPanelParam13.entries()) {
    let popcornElectronDocumentPanelValue307 = popcornElectronDocumentPanelValue295.paragraphStyle,
      popcornElectronDocumentPanelValue308 = (popcornElectronDocumentPanelValue307?.tabStops ?? []).map(item => popcornElectronDocumentPanelHelper177(item.position)).filter(item => item !== undefined),
      popcornElectronDocumentPanelValue309 = {
        index: popcornElectronDocumentPanelValue294 + 1,
        id: popcornElectronDocumentPanelValue295.id || undefined,
        styleId: popcornElectronDocumentPanelValue295.styleId,
        bulletCharacter: popcornElectronDocumentPanelValue307?.bulletCharacter ?? popcornElectronDocumentPanelValue295.bulletCharacter,
        autoNumberType: popcornElectronDocumentPanelValue307?.autoNumberType,
        autoNumberStartAt: popcornElectronDocumentPanelValue307?.autoNumberStartAt,
        directMarginLeftTwips: popcornElectronDocumentPanelValue295.marginLeft,
        directIndentTwips: popcornElectronDocumentPanelValue295.indent,
        styleMarginLeftEmu: popcornElectronDocumentPanelValue307?.marginLeft,
        styleIndentEmu: popcornElectronDocumentPanelValue307?.indent,
        marginLeftPx: popcornElectronDocumentPanelHelper176(popcornElectronDocumentPanelValue295.marginLeft) ?? popcornElectronDocumentPanelHelper177(popcornElectronDocumentPanelValue307?.marginLeft),
        indentPx: popcornElectronDocumentPanelHelper176(popcornElectronDocumentPanelValue295.indent) ?? popcornElectronDocumentPanelHelper177(popcornElectronDocumentPanelValue307?.indent),
        spaceBeforeTwips: popcornElectronDocumentPanelValue295.spaceBefore,
        spaceAfterTwips: popcornElectronDocumentPanelValue295.spaceAfter,
        spaceBeforePx: popcornElectronDocumentPanelHelper176(popcornElectronDocumentPanelValue295.spaceBefore),
        spaceAfterPx: popcornElectronDocumentPanelHelper176(popcornElectronDocumentPanelValue295.spaceAfter),
        lineSpacingPercent: popcornElectronDocumentPanelValue307?.lineSpacingPercent,
        tabStopsPx: popcornElectronDocumentPanelValue308.length > 0 ? popcornElectronDocumentPanelValue308 : undefined
      };
    (popcornElectronDocumentPanelValue309.bulletCharacter !== undefined || popcornElectronDocumentPanelValue309.autoNumberType !== undefined || popcornElectronDocumentPanelValue309.autoNumberStartAt !== undefined || popcornElectronDocumentPanelValue309.directMarginLeftTwips !== undefined || popcornElectronDocumentPanelValue309.directIndentTwips !== undefined || popcornElectronDocumentPanelValue309.styleMarginLeftEmu !== undefined || popcornElectronDocumentPanelValue309.styleIndentEmu !== undefined || popcornElectronDocumentPanelValue309.spaceBeforeTwips !== undefined || popcornElectronDocumentPanelValue309.spaceAfterTwips !== undefined || popcornElectronDocumentPanelValue309.lineSpacingPercent !== undefined || popcornElectronDocumentPanelValue309.tabStopsPx !== undefined) && popcornElectronDocumentPanelValue292.push(popcornElectronDocumentPanelValue309);
  }
  return popcornElectronDocumentPanelValue292.length > 0 ? popcornElectronDocumentPanelValue292 : undefined;
}
function popcornElectronDocumentPanelHelper179(popcornElectronDocumentPanelParam484) {
  if (popcornElectronDocumentPanelParam484) return {
    left: popcornElectronDocumentPanelParam484.xEmu ?? 0,
    top: popcornElectronDocumentPanelParam484.yEmu ?? 0,
    width: popcornElectronDocumentPanelParam484.widthEmu ?? 0,
    height: popcornElectronDocumentPanelParam484.heightEmu ?? 0
  };
}
function popcornElectronDocumentPanelHelper180(popcornElectronDocumentPanelParam711) {
  return popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam711.xPx, popcornElectronDocumentPanelParam711.yPx, popcornElectronDocumentPanelParam711.widthPx, popcornElectronDocumentPanelParam711.heightPx);
}
function popcornElectronDocumentPanelHelper181(popcornElectronDocumentPanelParam646, popcornElectronDocumentPanelParam647) {
  return popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam646.left - popcornElectronDocumentPanelParam647.left, popcornElectronDocumentPanelParam646.top - popcornElectronDocumentPanelParam647.top, popcornElectronDocumentPanelParam646.width, popcornElectronDocumentPanelParam646.height);
}
function popcornElectronDocumentPanelHelper182(popcornElectronDocumentPanelParam332, popcornElectronDocumentPanelParam333, popcornElectronDocumentPanelParam334) {
  if (!popcornElectronDocumentPanelParam333) return;
  let popcornElectronDocumentPanelValue726 = popcornElectronDocumentPanelHelper180(popcornElectronDocumentPanelParam333.contentFrame),
    popcornElectronDocumentPanelValue727 = popcornElectronDocumentPanelParam334?.columnFrame ? popcornElectronDocumentPanelHelper180(popcornElectronDocumentPanelParam334.columnFrame) : undefined;
  return {
    pageFrame: popcornElectronDocumentPanelParam332,
    contentRelativeFrame: popcornElectronDocumentPanelHelper181(popcornElectronDocumentPanelParam332, popcornElectronDocumentPanelValue726),
    columnRelativeFrame: popcornElectronDocumentPanelValue727 ? popcornElectronDocumentPanelHelper181(popcornElectronDocumentPanelParam332, popcornElectronDocumentPanelValue727) : undefined
  };
}
function popcornElectronDocumentPanelHelper183(popcornElectronDocumentPanelParam78) {
  if (popcornElectronDocumentPanelParam78) return {
    type: popcornElectronDocumentPanelParam78.type,
    anchorParagraphId: popcornElectronDocumentPanelParam78.anchorParagraphId,
    horizontalRelativeFrom: popcornElectronDocumentPanelParam78.horizontalRelativeFrom,
    verticalRelativeFrom: popcornElectronDocumentPanelParam78.verticalRelativeFrom,
    xOffsetEmu: popcornElectronDocumentPanelParam78.xOffsetEmu,
    yOffsetEmu: popcornElectronDocumentPanelParam78.yOffsetEmu,
    horizontalAlignment: popcornElectronDocumentPanelParam78.horizontalAlignment,
    verticalAlignment: popcornElectronDocumentPanelParam78.verticalAlignment,
    behindDocument: popcornElectronDocumentPanelParam78.behindDocument,
    layoutInCell: popcornElectronDocumentPanelParam78.layoutInCell,
    allowOverlap: popcornElectronDocumentPanelParam78.allowOverlap,
    relativeHeight: popcornElectronDocumentPanelParam78.relativeHeight,
    locked: popcornElectronDocumentPanelParam78.locked,
    distanceTopEmu: popcornElectronDocumentPanelParam78.distanceTopEmu,
    distanceBottomEmu: popcornElectronDocumentPanelParam78.distanceBottomEmu,
    distanceLeftEmu: popcornElectronDocumentPanelParam78.distanceLeftEmu,
    distanceRightEmu: popcornElectronDocumentPanelParam78.distanceRightEmu,
    wrapType: popcornElectronDocumentPanelParam78.wrap?.type,
    wrapSide: popcornElectronDocumentPanelParam78.wrap?.side
  };
}
function popcornElectronDocumentPanelHelper184(popcornElectronDocumentPanelParam225) {
  switch (popcornElectronDocumentPanelParam225) {
    case presentationAt.FILL_TYPE_UNSPECIFIED:
      return "unspecified";
    case presentationAt.FILL_TYPE_SOLID:
      return "solid";
    case presentationAt.FILL_TYPE_GRADIENT:
      return "gradient";
    case presentationAt.FILL_TYPE_PICTURE:
      return "picture";
    case presentationAt.FILL_TYPE_PATTERN:
      return "pattern";
    default:
      return "unknown";
  }
}
function popcornElectronDocumentPanelHelper185(popcornElectronDocumentPanelParam278) {
  switch (popcornElectronDocumentPanelParam278) {
    case _presentationZ.COLOR_TYPE_UNSPECIFIED:
      return "unspecified";
    case _presentationZ.COLOR_TYPE_RGB:
      return "rgb";
    case _presentationZ.COLOR_TYPE_SCHEME:
      return "scheme";
    case _presentationZ.COLOR_TYPE_SYSTEM:
      return "system";
    default:
      return "unknown";
  }
}
function popcornElectronDocumentPanelHelper186(popcornElectronDocumentPanelParam170, popcornElectronDocumentPanelParam171) {
  if (!popcornElectronDocumentPanelParam170) return;
  let popcornElectronDocumentPanelValue555 = popcornElectronDocumentPanelParam170.color;
  return {
    type: popcornElectronDocumentPanelHelper184(popcornElectronDocumentPanelParam170.type),
    color: popcornElectronDocumentPanelValue555 && popcornElectronDocumentPanelParam171 ? popcornElectronDocumentPanelImport19(popcornElectronDocumentPanelValue555, popcornElectronDocumentPanelParam171) : undefined,
    colorValue: popcornElectronDocumentPanelValue555?.value,
    colorType: popcornElectronDocumentPanelValue555?.type === undefined ? undefined : popcornElectronDocumentPanelHelper185(popcornElectronDocumentPanelValue555.type),
    lastColor: popcornElectronDocumentPanelValue555?.lastColor,
    transform: popcornElectronDocumentPanelValue555?.transform,
    gradientStopCount: popcornElectronDocumentPanelParam170.gradientStops && popcornElectronDocumentPanelParam170.gradientStops.length > 0 ? popcornElectronDocumentPanelParam170.gradientStops.length : undefined,
    imageAssetId: popcornElectronDocumentPanelParam170.imageReference?.id
  };
}
function popcornElectronDocumentPanelHelper187(popcornElectronDocumentPanelParam192) {
  switch (popcornElectronDocumentPanelParam192) {
    case _presentationEn.LINE_STYLE_UNSPECIFIED:
      return "unspecified";
    case _presentationEn.LINE_STYLE_SOLID:
      return "solid";
    case _presentationEn.LINE_STYLE_DASHED:
      return "dashed";
    case _presentationEn.LINE_STYLE_DOTTED:
      return "dotted";
    case _presentationEn.LINE_STYLE_DASH_DOT:
      return "dash-dot";
    case _presentationEn.LINE_STYLE_DASH_DOT_DOT:
      return "dash-dot-dot";
    default:
      return "unknown";
  }
}
function popcornElectronDocumentPanelHelper188(popcornElectronDocumentPanelParam308, popcornElectronDocumentPanelParam309) {
  if (popcornElectronDocumentPanelParam308) return {
    style: popcornElectronDocumentPanelParam308.style === undefined ? undefined : popcornElectronDocumentPanelHelper187(popcornElectronDocumentPanelParam308.style),
    widthPx: popcornElectronDocumentPanelParam308.widthEmu === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam308.widthEmu * popcornElectronDocumentPanelImport5),
    color: popcornElectronDocumentPanelParam308.fill?.color && popcornElectronDocumentPanelParam309 ? popcornElectronDocumentPanelImport19(popcornElectronDocumentPanelParam308.fill.color, popcornElectronDocumentPanelParam309) : undefined,
    fill: popcornElectronDocumentPanelHelper186(popcornElectronDocumentPanelParam308.fill, popcornElectronDocumentPanelParam309)
  };
}
function popcornElectronDocumentPanelHelper189(popcornElectronDocumentPanelParam104) {
  let popcornElectronDocumentPanelValue462 = popcornElectronDocumentPanelParam104.flow;
  if (popcornElectronDocumentPanelValue462) return {
    sectionIndex: popcornElectronDocumentPanelValue462.sectionIndex,
    sourceElementIndex: popcornElectronDocumentPanelValue462.sourceElementIndex,
    fragmentIndex: popcornElectronDocumentPanelValue462.fragmentIndex,
    columnIndex: popcornElectronDocumentPanelValue462.columnIndex,
    columnFrame: popcornElectronDocumentPanelValue462.columnFrame ? popcornElectronDocumentPanelHelper180(popcornElectronDocumentPanelValue462.columnFrame) : undefined,
    lineStartIndex: popcornElectronDocumentPanelValue462.lineStartIndex,
    lineEndIndex: popcornElectronDocumentPanelValue462.lineEndIndex,
    rowStartIndex: popcornElectronDocumentPanelValue462.rowStartIndex,
    rowEndIndex: popcornElectronDocumentPanelValue462.rowEndIndex,
    balanced: popcornElectronDocumentPanelValue462.balanced,
    noteKind: popcornElectronDocumentPanelValue462.noteKind,
    noteIds: popcornElectronDocumentPanelValue462.noteIds,
    documentGridLinePitchTwips: popcornElectronDocumentPanelValue462.documentGridLinePitchTwips,
    documentGridLinePitchPx: popcornElectronDocumentPanelValue462.documentGridLinePitchPx
  };
}
function popcornElectronDocumentPanelHelper190(popcornElectronDocumentPanelParam226) {
  if (popcornElectronDocumentPanelParam226.textLines && popcornElectronDocumentPanelParam226.textLines.length > 0) {
    let popcornElectronDocumentPanelValue899 = popcornElectronDocumentPanelParam226.textLines.map(item => item.segments.map(_item => _item.text).join("")).join("\n");
    if (popcornElectronDocumentPanelValue899.length > 0) return popcornElectronDocumentPanelValue899;
  }
  let popcornElectronDocumentPanelValue617 = (popcornElectronDocumentPanelParam226.element.paragraphs ?? []).map(item => (item.runs ?? []).map(_item => _item.text ?? "").join("")).join("\n");
  return popcornElectronDocumentPanelValue617.length > 0 ? popcornElectronDocumentPanelValue617 : undefined;
}
function popcornElectronDocumentPanelHelper191(popcornElectronDocumentPanelParam172, popcornElectronDocumentPanelParam173, popcornElectronDocumentPanelParam174, popcornElectronDocumentPanelParam175, popcornElectronDocumentPanelParam176, popcornElectronDocumentPanelParam177) {
  let popcornElectronDocumentPanelValue556 = popcornElectronDocumentPanelParam175 + (popcornElectronDocumentPanelParam172.xPx ?? popcornElectronDocumentPanelParam174.x ?? 0);
  return {
    index: popcornElectronDocumentPanelParam173 + 1,
    text: popcornElectronDocumentPanelParam172.text,
    frame: popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelValue556, popcornElectronDocumentPanelParam176 + popcornElectronDocumentPanelParam177, popcornElectronDocumentPanelParam172.widthPx, popcornElectronDocumentPanelParam174.heightPx),
    font: popcornElectronDocumentPanelParam172.font,
    fontKey: popcornElectronDocumentPanelParam172.fontKey,
    fill: popcornElectronDocumentPanelParam172.fill,
    highlight: popcornElectronDocumentPanelParam172.highlight,
    underline: popcornElectronDocumentPanelParam172.underline,
    fontSizePx: popcornElectronDocumentPanelParam172.px,
    fontSizePt: popcornElectronDocumentPanelHelper174(popcornElectronDocumentPanelParam172.px),
    paraIndex: popcornElectronDocumentPanelParam172.paraIndex,
    runIndex: popcornElectronDocumentPanelParam172.runIndex,
    charStart: popcornElectronDocumentPanelParam172.charStart,
    charEnd: popcornElectronDocumentPanelParam172.charEnd
  };
}
function popcornElectronDocumentPanelHelper192(popcornElectronDocumentPanelParam110, popcornElectronDocumentPanelParam111, popcornElectronDocumentPanelParam112 = 0, popcornElectronDocumentPanelParam113 = 0, popcornElectronDocumentPanelParam114 = popcornElectronDocumentPanelParam110.topY ?? 0) {
  let popcornElectronDocumentPanelValue465 = popcornElectronDocumentPanelParam110.segments.map((item, index) => popcornElectronDocumentPanelHelper191(item, index, popcornElectronDocumentPanelParam110, popcornElectronDocumentPanelParam112, popcornElectronDocumentPanelParam113, popcornElectronDocumentPanelParam114));
  return {
    index: popcornElectronDocumentPanelParam111 + 1,
    text: popcornElectronDocumentPanelParam110.segments.map(item => item.text).join(""),
    frame: popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam112 + (popcornElectronDocumentPanelParam110.x ?? 0), popcornElectronDocumentPanelParam113 + popcornElectronDocumentPanelParam114, popcornElectronDocumentPanelParam110.widthPx, popcornElectronDocumentPanelParam110.heightPx),
    align: popcornElectronDocumentPanelParam110.align,
    baselineY: popcornElectronDocumentPanelParam113 + (popcornElectronDocumentPanelParam110.baselineY ?? popcornElectronDocumentPanelParam114 + popcornElectronDocumentPanelParam110.baselineOffsetPx),
    availableWidthPx: popcornElectronDocumentPanelParam110.availableWidthPx,
    contentHeightPx: popcornElectronDocumentPanelParam110.contentHeightPx,
    naturalHeightPx: popcornElectronDocumentPanelParam110.naturalHeightPx,
    leadingBeforePx: popcornElectronDocumentPanelParam110.leadingBeforePx,
    leadingAfterPx: popcornElectronDocumentPanelParam110.leadingAfterPx,
    maxAscentPx: popcornElectronDocumentPanelParam110.maxAscentPx,
    maxDescentPx: popcornElectronDocumentPanelParam110.maxDescentPx,
    segments: popcornElectronDocumentPanelValue465
  };
}
function popcornElectronDocumentPanelHelper193(popcornElectronDocumentPanelParam471, popcornElectronDocumentPanelParam472 = 0, popcornElectronDocumentPanelParam473 = 0) {
  let popcornElectronDocumentPanelValue840 = 0;
  return popcornElectronDocumentPanelParam471.map((item, index) => {
    let popcornElectronDocumentPanelValue930 = item.topY ?? popcornElectronDocumentPanelValue840,
      popcornElectronDocumentPanelValue931 = popcornElectronDocumentPanelHelper192(item, index, popcornElectronDocumentPanelParam472, popcornElectronDocumentPanelParam473, popcornElectronDocumentPanelValue930);
    return popcornElectronDocumentPanelValue840 = popcornElectronDocumentPanelValue930 + item.heightPx, popcornElectronDocumentPanelValue931;
  });
}
function popcornElectronDocumentPanelHelper194(popcornElectronDocumentPanelParam790, popcornElectronDocumentPanelParam791) {
  return `${popcornElectronDocumentPanelParam790}:${popcornElectronDocumentPanelParam791}`;
}
function popcornElectronDocumentPanelHelper195(popcornElectronDocumentPanelParam530) {
  let popcornElectronDocumentPanelValue896 = new Map();
  for (let popcornElectronDocumentPanelValue966 of popcornElectronDocumentPanelParam530.cellLayouts ?? []) popcornElectronDocumentPanelValue896.set(popcornElectronDocumentPanelHelper194(popcornElectronDocumentPanelValue966.row, popcornElectronDocumentPanelValue966.col), popcornElectronDocumentPanelHelper193(popcornElectronDocumentPanelValue966.block.lines));
  return popcornElectronDocumentPanelValue896;
}
function popcornElectronDocumentPanelHelper196(popcornElectronDocumentPanelParam285) {
  let popcornElectronDocumentPanelValue672 = new Map();
  for (let popcornElectronDocumentPanelValue752 of popcornElectronDocumentPanelParam285.cellElementFrames ?? []) {
    let popcornElectronDocumentPanelValue804 = popcornElectronDocumentPanelHelper194(popcornElectronDocumentPanelValue752.row, popcornElectronDocumentPanelValue752.col),
      popcornElectronDocumentPanelValue805 = popcornElectronDocumentPanelValue672.get(popcornElectronDocumentPanelValue804) ?? [];
    popcornElectronDocumentPanelValue805.push({
      elementId: popcornElectronDocumentPanelValue752.elementId,
      frame: popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelValue752.xPx, popcornElectronDocumentPanelValue752.yPx, popcornElectronDocumentPanelValue752.widthPx, popcornElectronDocumentPanelValue752.heightPx)
    });
    popcornElectronDocumentPanelValue672.set(popcornElectronDocumentPanelValue804, popcornElectronDocumentPanelValue805);
  }
  return popcornElectronDocumentPanelValue672;
}
function popcornElectronDocumentPanelHelper197(popcornElectronDocumentPanelParam164) {
  if (!popcornElectronDocumentPanelParam164) return;
  let popcornElectronDocumentPanelValue545 = {
    left: popcornElectronDocumentPanelParam164.marginLeft === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam164.marginLeft * popcornElectronDocumentPanelImport5),
    right: popcornElectronDocumentPanelParam164.marginRight === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam164.marginRight * popcornElectronDocumentPanelImport5),
    top: popcornElectronDocumentPanelParam164.marginTop === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam164.marginTop * popcornElectronDocumentPanelImport5),
    bottom: popcornElectronDocumentPanelParam164.marginBottom === undefined ? undefined : popcornElectronDocumentPanelHelper175(popcornElectronDocumentPanelParam164.marginBottom * popcornElectronDocumentPanelImport5)
  };
  return popcornElectronDocumentPanelValue545.left !== undefined || popcornElectronDocumentPanelValue545.right !== undefined || popcornElectronDocumentPanelValue545.top !== undefined || popcornElectronDocumentPanelValue545.bottom !== undefined ? popcornElectronDocumentPanelValue545 : undefined;
}
function popcornElectronDocumentPanelHelper198(popcornElectronDocumentPanelParam9, popcornElectronDocumentPanelParam10, popcornElectronDocumentPanelParam11, popcornElectronDocumentPanelParam12) {
  if (popcornElectronDocumentPanelParam9.kind !== "table" || !popcornElectronDocumentPanelParam9.element.table) return;
  let popcornElectronDocumentPanelValue273 = popcornElectronDocumentPanelHelper19({
      ...popcornElectronDocumentPanelHelper168(popcornElectronDocumentPanelParam9),
      type: presentationWt.ELEMENT_TYPE_TABLE
    }),
    popcornElectronDocumentPanelValue274 = popcornElectronDocumentPanelImport27(popcornElectronDocumentPanelValue273, popcornElectronDocumentPanelParam10, popcornElectronDocumentPanelParam11, {
      paragraphSpacingUnit: "twips",
      explicitRowHeightBehavior: "atLeast",
      autoRowMinimumHeightPx: 0,
      fitColumnWidthsToFrame: true,
      drawDefaultCellBorders: false,
      collapseParagraphBoundarySpacing: false,
      documentGridLinePitchTwips: popcornElectronDocumentPanelParam9.flow?.documentGridLinePitchTwips
    });
  if (!popcornElectronDocumentPanelValue274) return;
  let popcornElectronDocumentPanelValue275 = popcornElectronDocumentPanelHelper195(popcornElectronDocumentPanelValue274),
    popcornElectronDocumentPanelValue276 = popcornElectronDocumentPanelHelper196(popcornElectronDocumentPanelValue274),
    popcornElectronDocumentPanelValue277 = popcornElectronDocumentPanelParam9.yPx,
    popcornElectronDocumentPanelValue278 = popcornElectronDocumentPanelValue274.rowHeightsPx.map((item, index) => {
      let popcornElectronDocumentPanelValue403 = popcornElectronDocumentPanelValue274.cellRects.filter(_item => _item.row === index).map(_item => {
          let popcornElectronDocumentPanelValue454 = popcornElectronDocumentPanelHelper194(_item.row, _item.col),
            popcornElectronDocumentPanelValue455 = popcornElectronDocumentPanelValue275.get(popcornElectronDocumentPanelValue454),
            popcornElectronDocumentPanelValue456 = popcornElectronDocumentPanelValue276.get(popcornElectronDocumentPanelValue454),
            popcornElectronDocumentPanelValue457 = popcornElectronDocumentPanelValue273.table?.rows?.[_item.row]?.cells?.[_item.col],
            popcornElectronDocumentPanelValue458 = popcornElectronDocumentPanelHelper178(popcornElectronDocumentPanelValue457?.paragraphs),
            popcornElectronDocumentPanelValue459 = popcornElectronDocumentPanelHelper173(_item.xPx, _item.yPx, _item.widthPx, _item.heightPx);
          return {
            row: _item.row + 1,
            col: _item.col + 1,
            frame: popcornElectronDocumentPanelValue459,
            coordinateHints: popcornElectronDocumentPanelHelper182(popcornElectronDocumentPanelValue459, popcornElectronDocumentPanelParam12, popcornElectronDocumentPanelParam9.flow),
            textLines: popcornElectronDocumentPanelValue455 && popcornElectronDocumentPanelValue455.length > 0 ? popcornElectronDocumentPanelValue455 : undefined,
            paragraphs: popcornElectronDocumentPanelValue458,
            fill: popcornElectronDocumentPanelHelper186(popcornElectronDocumentPanelValue457?.fill, popcornElectronDocumentPanelParam11),
            marginsPx: popcornElectronDocumentPanelHelper197(popcornElectronDocumentPanelValue457),
            elementFrames: popcornElectronDocumentPanelValue456 && popcornElectronDocumentPanelValue456.length > 0 ? popcornElectronDocumentPanelValue456 : undefined
          };
        }),
        popcornElectronDocumentPanelValue404 = {
          index: index + 1,
          frame: popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam9.xPx, popcornElectronDocumentPanelValue277, popcornElectronDocumentPanelParam9.widthPx, item),
          cells: popcornElectronDocumentPanelValue403
        };
      return popcornElectronDocumentPanelValue277 += item, popcornElectronDocumentPanelValue404;
    });
  return {
    frame: popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam9.xPx, popcornElectronDocumentPanelParam9.yPx, popcornElectronDocumentPanelParam9.widthPx, popcornElectronDocumentPanelParam9.heightPx),
    height: popcornElectronDocumentPanelValue274.heightPx,
    rowHeights: popcornElectronDocumentPanelValue274.rowHeightsPx,
    rows: popcornElectronDocumentPanelValue278
  };
}
function popcornElectronDocumentPanelHelper199(popcornElectronDocumentPanelParam29, popcornElectronDocumentPanelParam30, popcornElectronDocumentPanelParam31, popcornElectronDocumentPanelParam32, popcornElectronDocumentPanelParam33, popcornElectronDocumentPanelParam34, popcornElectronDocumentPanelParam35) {
  let popcornElectronDocumentPanelValue354 = popcornElectronDocumentPanelHelper190(popcornElectronDocumentPanelParam29),
    popcornElectronDocumentPanelValue355 = popcornElectronDocumentPanelParam29.textLines ? popcornElectronDocumentPanelHelper193(popcornElectronDocumentPanelParam29.textLines, popcornElectronDocumentPanelParam29.xPx, popcornElectronDocumentPanelParam29.yPx) : undefined,
    popcornElectronDocumentPanelValue356 = popcornElectronDocumentPanelHelper178(popcornElectronDocumentPanelParam29.element.paragraphs),
    popcornElectronDocumentPanelValue357 = popcornElectronDocumentPanelHelper173(popcornElectronDocumentPanelParam29.xPx, popcornElectronDocumentPanelParam29.yPx, popcornElectronDocumentPanelParam29.widthPx, popcornElectronDocumentPanelParam29.heightPx);
  return {
    path: popcornElectronDocumentPanelParam31,
    order: popcornElectronDocumentPanelParam32,
    region: popcornElectronDocumentPanelParam30,
    kind: popcornElectronDocumentPanelParam29.kind,
    id: popcornElectronDocumentPanelParam29.element.id || undefined,
    name: popcornElectronDocumentPanelParam29.element.name || undefined,
    frame: popcornElectronDocumentPanelValue357,
    coordinateHints: popcornElectronDocumentPanelHelper182(popcornElectronDocumentPanelValue357, popcornElectronDocumentPanelParam33, popcornElectronDocumentPanelParam29.flow),
    flow: popcornElectronDocumentPanelHelper189(popcornElectronDocumentPanelParam29),
    bboxEmu: popcornElectronDocumentPanelHelper179(popcornElectronDocumentPanelParam29.element.bbox),
    placement: popcornElectronDocumentPanelHelper183(popcornElectronDocumentPanelParam29.element.placement),
    text: popcornElectronDocumentPanelValue354,
    textLines: popcornElectronDocumentPanelValue355,
    paragraphs: popcornElectronDocumentPanelValue356,
    shapeType: popcornElectronDocumentPanelParam29.element.shape?.geometry?.toString(),
    shapeFill: popcornElectronDocumentPanelHelper186(popcornElectronDocumentPanelParam29.element.shape?.fill, popcornElectronDocumentPanelParam35),
    shapeLine: popcornElectronDocumentPanelHelper188(popcornElectronDocumentPanelParam29.element.shape?.line, popcornElectronDocumentPanelParam35),
    imageAssetId: popcornElectronDocumentPanelParam29.element.imageReference?.id,
    chartReferenceId: popcornElectronDocumentPanelParam29.element.chartReference?.id,
    tableRows: popcornElectronDocumentPanelParam29.element.table?.rows.length,
    tableColumns: Math.max(0, ...(popcornElectronDocumentPanelParam29.element.table?.rows.map(popcornElectronDocumentPanelParam832 => popcornElectronDocumentPanelParam832.cells.length) ?? [0])),
    tableLayout: popcornElectronDocumentPanelParam34 && popcornElectronDocumentPanelParam35 ? popcornElectronDocumentPanelHelper198(popcornElectronDocumentPanelParam29, popcornElectronDocumentPanelParam34, popcornElectronDocumentPanelParam35, popcornElectronDocumentPanelParam33) : undefined,
    children: (popcornElectronDocumentPanelParam29.children ?? []).map((item, index) => popcornElectronDocumentPanelHelper199(item, popcornElectronDocumentPanelParam30, `${popcornElectronDocumentPanelParam31}.children.${index + 1}`, index + 1, popcornElectronDocumentPanelParam33, popcornElectronDocumentPanelParam34, popcornElectronDocumentPanelParam35))
  };
}
function $i(event) {
  return {
    key: event.key,
    margins: {
      top: event.margins.topPx,
      bottom: event.margins.bottomPx,
      left: event.margins.leftPx,
      right: event.margins.rightPx,
      header: event.margins.headerPx,
      footer: event.margins.footerPx
    },
    contentFrame: popcornElectronDocumentPanelHelper180(event.contentFrame),
    columns: event.columns.map(item => ({
      index: item.index,
      frame: popcornElectronDocumentPanelHelper180(item.frame)
    })),
    documentGrid: event.documentGrid,
    mirrorMarginXOffsetPx: event.mirrorMarginXOffsetPx
  };
}
function popcornElectronDocumentPanelHelper200(popcornElectronDocumentPanelParam596, popcornElectronDocumentPanelParam597, popcornElectronDocumentPanelParam598, popcornElectronDocumentPanelParam599, popcornElectronDocumentPanelParam600) {
  return popcornElectronDocumentPanelParam596.map((item, index) => popcornElectronDocumentPanelHelper199(item, popcornElectronDocumentPanelParam597, `${popcornElectronDocumentPanelParam597}.${index + 1}`, index + 1, popcornElectronDocumentPanelParam598, popcornElectronDocumentPanelParam599, popcornElectronDocumentPanelParam600));
}
function popcornElectronDocumentPanelHelper201(popcornElectronDocumentPanelParam59, popcornElectronDocumentPanelParam60, popcornElectronDocumentPanelParam61) {
  let popcornElectronDocumentPanelValue388 = popcornElectronDocumentPanelParam59.toProto(),
    popcornElectronDocumentPanelValue389 = popcornElectronDocumentPanelParam61 ? popcornElectronDocumentPanelHelper21(popcornElectronDocumentPanelValue388.theme) : undefined;
  return {
    schema: "openai.document.layout/v1",
    unit: "px",
    document: {
      id: popcornElectronDocumentPanelParam59.id,
      name: popcornElectronDocumentPanelParam59.name,
      widthEmu: popcornElectronDocumentPanelValue388.widthEmu,
      heightEmu: popcornElectronDocumentPanelValue388.heightEmu,
      pageCount: popcornElectronDocumentPanelParam60.length
    },
    pages: popcornElectronDocumentPanelParam60.map((item, index) => ({
      index: index + 1,
      sectionId: item.sectionId,
      frame: popcornElectronDocumentPanelHelper173(0, 0, item.widthPx, item.heightPx),
      layout: $i(item.layout),
      headerElements: popcornElectronDocumentPanelHelper200(item.headerElements, "header", item.layout, popcornElectronDocumentPanelParam61, popcornElectronDocumentPanelValue389),
      bodyElements: popcornElectronDocumentPanelHelper200(item.bodyElements, "body", item.layout, popcornElectronDocumentPanelParam61, popcornElectronDocumentPanelValue389),
      footerElements: popcornElectronDocumentPanelHelper200(item.footerElements, "footer", item.layout, popcornElectronDocumentPanelParam61, popcornElectronDocumentPanelValue389),
      pageNumberElement: item.pageNumberElement ? popcornElectronDocumentPanelHelper199(item.pageNumberElement, "pageNumber", "pageNumber.1", 1, item.layout, popcornElectronDocumentPanelParam61, popcornElectronDocumentPanelValue389) : undefined
    }))
  };
}
function popcornElectronDocumentPanelHelper202(popcornElectronDocumentPanelParam460) {
  let popcornElectronDocumentPanelValue831 = popcornElectronDocumentPanelHelper172(1, 1).getContext("2d");
  if (!popcornElectronDocumentPanelValue831) throw Error("Canvas 2D context unavailable for document layout export.");
  return popcornElectronDocumentPanelHelper201(popcornElectronDocumentPanelParam460, popcornElectronDocumentPanelHelper171(popcornElectronDocumentPanelParam460, popcornElectronDocumentPanelValue831), popcornElectronDocumentPanelValue831);
}
function popcornElectronDocumentPanelHelper203(popcornElectronDocumentPanelParam556, popcornElectronDocumentPanelParam557) {
  let popcornElectronDocumentPanelValue918 = popcornElectronDocumentPanelParam557 ? popcornElectronDocumentPanelHelper201(popcornElectronDocumentPanelParam556, popcornElectronDocumentPanelParam557) : popcornElectronDocumentPanelHelper202(popcornElectronDocumentPanelParam556);
  return new Blob([JSON.stringify(popcornElectronDocumentPanelValue918, null, 2)], {
    type: "application/vnd.openai.document-layout+json"
  });
}
var popcornElectronDocumentPanelValue39 = class {
    #e;
    #t;
    constructor(popcornElectronDocumentPanelParam385 = [], popcornElectronDocumentPanelParam386 = []) {
      this.#e = new Map();
      this.#t = new Map();
      for (let popcornElectronDocumentPanelValue998 of popcornElectronDocumentPanelParam385) this.define(popcornElectronDocumentPanelValue998);
      for (let popcornElectronDocumentPanelValue972 of popcornElectronDocumentPanelParam386) this.assignParagraph(popcornElectronDocumentPanelValue972.paragraphId, popcornElectronDocumentPanelValue972.numId, popcornElectronDocumentPanelValue972.level);
    }
    get definitions() {
      return Array.from(this.#e.values());
    }
    get paragraphBindings() {
      return Array.from(this.#t.values());
    }
    define(popcornElectronDocumentPanelParam607) {
      popcornElectronDocumentPanelParam607?.numId && this.#e.set(popcornElectronDocumentPanelParam607.numId, {
        ...popcornElectronDocumentPanelParam607,
        levels: [...(popcornElectronDocumentPanelParam607.levels ?? [])]
      });
    }
    removeDefinition(popcornElectronDocumentPanelParam773) {
      this.#e.delete(popcornElectronDocumentPanelParam773);
    }
    assignParagraph(popcornElectronDocumentPanelParam574, popcornElectronDocumentPanelParam575, popcornElectronDocumentPanelParam576 = 0) {
      !popcornElectronDocumentPanelParam574 || !popcornElectronDocumentPanelParam575 || this.#t.set(popcornElectronDocumentPanelParam574, {
        paragraphId: popcornElectronDocumentPanelParam574,
        numId: popcornElectronDocumentPanelParam575,
        level: popcornElectronDocumentPanelParam576
      });
    }
    clearParagraphBinding(popcornElectronDocumentPanelParam754) {
      this.#t.delete(popcornElectronDocumentPanelParam754);
    }
    toProto() {
      return {
        numberingDefinitions: this.definitions,
        paragraphNumberings: this.paragraphBindings
      };
    }
  },
  popcornElectronDocumentPanelValue40 = {
    insertion: ___presentationN.REVIEW_MARK_TYPE_INSERTION,
    deletion: ___presentationN.REVIEW_MARK_TYPE_DELETION
  },
  popcornElectronDocumentPanelValue41 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam781) {
      this.#e = {
        ...popcornElectronDocumentPanelParam781
      };
    }
    get id() {
      return this.#e.id;
    }
    toProto() {
      return {
        ...this.#e
      };
    }
  },
  popcornElectronDocumentPanelValue42 = class {
    #e = [];
    constructor(popcornElectronDocumentPanelParam712 = []) {
      this.#e = popcornElectronDocumentPanelParam712.map(item => new popcornElectronDocumentPanelValue41(item));
    }
    add(popcornElectronDocumentPanelParam379) {
      let popcornElectronDocumentPanelValue766 = new popcornElectronDocumentPanelValue41({
        id: popcornElectronDocumentPanelImport17(),
        type: popcornElectronDocumentPanelValue40[popcornElectronDocumentPanelParam379.type],
        author: popcornElectronDocumentPanelParam379.author,
        initials: popcornElectronDocumentPanelParam379.initials,
        createdAt: popcornElectronDocumentPanelParam379.createdAt
      });
      return this.#e.push(popcornElectronDocumentPanelValue766), popcornElectronDocumentPanelValue766;
    }
    toProto() {
      return this.#e.map(item => item.toProto());
    }
  },
  popcornElectronDocumentPanelValue43 = class extends popcornElectronDocumentPanelImport38 {
    type = "text";
    constructor(popcornElectronDocumentPanelParam525, popcornElectronDocumentPanelParam526) {
      super(popcornElectronDocumentPanelParam525, {
        ...(popcornElectronDocumentPanelParam526 ?? {}),
        type: presentationWt.ELEMENT_TYPE_TEXT
      });
      this.data.type = presentationWt.ELEMENT_TYPE_TEXT;
    }
    get id() {
      return this.data.id;
    }
    toProto() {
      return super.toProto();
    }
  },
  popcornElectronDocumentPanelValue44 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam799) {
      this.#e = popcornElectronDocumentPanelParam799;
    }
    add(popcornElectronDocumentPanelParam165 = {}) {
      let {
          text,
          style
        } = popcornElectronDocumentPanelParam165,
        popcornElectronDocumentPanelValue550;
      if (this.#t() && this.#e.clear(), text !== undefined && popcornElectronDocumentPanelImport18(text)) {
        let popcornElectronDocumentPanelValue768 = popcornElectronDocumentPanelImport37(text);
        if (popcornElectronDocumentPanelValue768.length === 0) popcornElectronDocumentPanelValue550 = this.#e.add();else {
          popcornElectronDocumentPanelValue550 = this.#e.append(popcornElectronDocumentPanelValue768[0]);
          for (let popcornElectronDocumentPanelValue980 = 1; popcornElectronDocumentPanelValue980 < popcornElectronDocumentPanelValue768.length; popcornElectronDocumentPanelValue980 += 1) this.#e.append(popcornElectronDocumentPanelValue768[popcornElectronDocumentPanelValue980]);
        }
      } else {
        popcornElectronDocumentPanelValue550 = this.#e.add();
        text !== undefined && popcornElectronDocumentPanelValue550.setPlainText(String(text));
      }
      return style && (popcornElectronDocumentPanelValue550.style = style), popcornElectronDocumentPanelValue550;
    }
    #t() {
      if (this.#e.length !== 1) return false;
      let popcornElectronDocumentPanelValue851 = this.#e.getItem(0);
      return popcornElectronDocumentPanelValue851 ? popcornElectronDocumentPanelValue851.toPlainText().trim() === "Start writing here..." : false;
    }
  },
  popcornElectronDocumentPanelValue45 = {
    "Normal Table": {
      styleId: "TableNormal",
      name: "Normal Table",
      uiPriority: "99",
      default: "1",
      tblPr: {
        cellMargins: {
          top: {
            w: "0",
            type: "dxa"
          },
          left: {
            w: "108",
            type: "dxa"
          },
          bottom: {
            w: "0",
            type: "dxa"
          },
          right: {
            w: "108",
            type: "dxa"
          }
        }
      }
    },
    "Table Grid": {
      styleId: "TableGrid",
      name: "Table Grid",
      basedOn: "TableNormal",
      uiPriority: "39",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "auto"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "auto"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "auto"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "auto"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "auto"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "auto"
          }
        }
      }
    },
    "Grid Table Light": {
      styleId: "TableGridLight",
      name: "Grid Table Light",
      basedOn: "TableNormal",
      uiPriority: "40",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          }
        }
      }
    },
    "Plain Table 1": {
      styleId: "PlainTable1",
      name: "Plain Table 1",
      basedOn: "TableNormal",
      uiPriority: "41",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "BFBFBF",
            themeColor: "background1",
            themeShade: "BF"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "BFBFBF",
              themeColor: "background1",
              themeShade: "BF"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }]
    },
    "Plain Table 2": {
      styleId: "PlainTable2",
      name: "Plain Table 2",
      basedOn: "TableNormal",
      uiPriority: "42",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "7F7F7F",
            themeColor: "text1",
            themeTint: "80"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "7F7F7F",
            themeColor: "text1",
            themeTint: "80"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }]
    },
    "Plain Table 3": {
      styleId: "PlainTable3",
      name: "Plain Table 3",
      basedOn: "TableNormal",
      uiPriority: "43",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "Plain Table 4": {
      styleId: "PlainTable4",
      name: "Plain Table 4",
      basedOn: "TableNormal",
      uiPriority: "44",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }]
    },
    "Plain Table 5": {
      styleId: "PlainTable5",
      name: "Plain Table 5",
      basedOn: "TableNormal",
      uiPriority: "45",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "7F7F7F",
              themeColor: "text1",
              themeTint: "80"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "F2F2F2",
            themeFill: "background1",
            themeFillShade: "F2"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "Grid Table 1 Light": {
      styleId: "GridTable1Light",
      name: "Grid Table 1 Light",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "999999",
            themeColor: "text1",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "999999",
            themeColor: "text1",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "999999",
            themeColor: "text1",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "999999",
            themeColor: "text1",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "999999",
            themeColor: "text1",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "999999",
            themeColor: "text1",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 1 Light Accent 1": {
      styleId: "GridTable1Light-Accent1",
      name: "Grid Table 1 Light Accent 1",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "83CAEB",
            themeColor: "accent1",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "83CAEB",
            themeColor: "accent1",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "83CAEB",
            themeColor: "accent1",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "83CAEB",
            themeColor: "accent1",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "83CAEB",
            themeColor: "accent1",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "83CAEB",
            themeColor: "accent1",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 1 Light Accent 2": {
      styleId: "GridTable1Light-Accent2",
      name: "Grid Table 1 Light Accent 2",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F6C5AC",
            themeColor: "accent2",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F6C5AC",
            themeColor: "accent2",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F6C5AC",
            themeColor: "accent2",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F6C5AC",
            themeColor: "accent2",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F6C5AC",
            themeColor: "accent2",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F6C5AC",
            themeColor: "accent2",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "F1A983",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "F1A983",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 1 Light Accent 3": {
      styleId: "GridTable1Light-Accent3",
      name: "Grid Table 1 Light Accent 3",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "84E290",
            themeColor: "accent3",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "84E290",
            themeColor: "accent3",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "84E290",
            themeColor: "accent3",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "84E290",
            themeColor: "accent3",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "84E290",
            themeColor: "accent3",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "84E290",
            themeColor: "accent3",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "47D459",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "47D459",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 1 Light Accent 4": {
      styleId: "GridTable1Light-Accent4",
      name: "Grid Table 1 Light Accent 4",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "95DCF7",
            themeColor: "accent4",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "95DCF7",
            themeColor: "accent4",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "95DCF7",
            themeColor: "accent4",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "95DCF7",
            themeColor: "accent4",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "95DCF7",
            themeColor: "accent4",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "95DCF7",
            themeColor: "accent4",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "60CAF3",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "60CAF3",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 1 Light Accent 5": {
      styleId: "GridTable1Light-Accent5",
      name: "Grid Table 1 Light Accent 5",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E59EDC",
            themeColor: "accent5",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "D86DCB",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "D86DCB",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 2": {
      styleId: "GridTable2",
      name: "Grid Table 2",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 3": {
      styleId: "GridTable3",
      name: "Grid Table 3",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 4": {
      styleId: "GridTable4",
      name: "Grid Table 4",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 5 Dark": {
      styleId: "GridTable5Dark",
      name: "Grid Table 5 Dark",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "auto",
          fill: "CCCCCC",
          themeFill: "text1",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "999999",
            themeFill: "text1",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "999999",
            themeFill: "text1",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 6 Colorful": {
      styleId: "GridTable6Colorful",
      name: "Grid Table 6 Colorful",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "000000",
          themeColor: "text1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 7 Colorful": {
      styleId: "GridTable7Colorful",
      name: "Grid Table 7 Colorful",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "000000",
          themeColor: "text1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "List Table 1 Light": {
      styleId: "ListTable1Light",
      name: "List Table 1 Light",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 2": {
      styleId: "ListTable2",
      name: "List Table 2",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 3": {
      styleId: "ListTable3",
      name: "List Table 3",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "000000",
            themeColor: "text1"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 4": {
      styleId: "ListTable4",
      name: "List Table 4",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "666666",
            themeColor: "text1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "000000",
            themeFill: "text1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "666666",
              themeColor: "text1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 5 Dark": {
      styleId: "ListTable5Dark",
      name: "List Table 5 Dark",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "000000",
            themeColor: "text1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "auto",
          fill: "000000",
          themeFill: "text1"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 6 Colorful": {
      styleId: "ListTable6Colorful",
      name: "List Table 6 Colorful",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "000000",
          themeColor: "text1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "000000",
            themeColor: "text1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "000000",
            themeColor: "text1"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 7 Colorful": {
      styleId: "ListTable7Colorful",
      name: "List Table 7 Colorful",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "000000",
          themeColor: "text1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "000000",
              themeColor: "text1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "CCCCCC",
            themeFill: "text1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 7 Colorful Accent 1": {
      styleId: "ListTable7Colorful-Accent1",
      name: "List Table 7 Colorful Accent 1",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent1",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    }
  },
  popcornElectronDocumentPanelValue46 = {
    "List Table 6 Colorful Accent 1": {
      styleId: "ListTable6Colorful-Accent1",
      name: "List Table 6 Colorful Accent 1",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent1",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 5 Dark Accent 1": {
      styleId: "ListTable5Dark-Accent1",
      name: "List Table 5 Dark Accent 1",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "auto",
          fill: "156082",
          themeFill: "accent1"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 4 Accent 1": {
      styleId: "ListTable4-Accent1",
      name: "List Table 4 Accent 1",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 3 Accent 1": {
      styleId: "ListTable3-Accent1",
      name: "List Table 3 Accent 1",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "156082",
            themeColor: "accent1"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 2 Accent 1": {
      styleId: "ListTable2-Accent1",
      name: "List Table 2 Accent 1",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 1 Light Accent 1": {
      styleId: "ListTable1Light-Accent1",
      name: "List Table 1 Light Accent 1",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 7 Colorful Accent 1": {
      styleId: "GridTable7Colorful-Accent1",
      name: "Grid Table 7 Colorful Accent 1",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent1",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 6 Colorful Accent 1": {
      styleId: "GridTable6Colorful-Accent1",
      name: "Grid Table 6 Colorful Accent 1",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent1",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 5 Dark Accent 1": {
      styleId: "GridTable5Dark-Accent1",
      name: "Grid Table 5 Dark Accent 1",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "auto",
          fill: "C1E4F5",
          themeFill: "accent1",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "83CAEB",
            themeFill: "accent1",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "83CAEB",
            themeFill: "accent1",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 4 Accent 1": {
      styleId: "GridTable4-Accent1",
      name: "Grid Table 4 Accent 1",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "156082",
            themeFill: "accent1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "156082",
              themeColor: "accent1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 3 Accent 1": {
      styleId: "GridTable3-Accent1",
      name: "Grid Table 3 Accent 1",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "45B0E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "auto",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "auto",
            fill: "C1E4F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "45B0E1",
              themeColor: "accent1",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 1 Light Accent 6": {
      styleId: "GridTable1Light-Accent6",
      name: "Grid Table 1 Light Accent 6",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "B4E5A2",
            themeColor: "accent6",
            themeTint: "66"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "B4E5A2",
            themeColor: "accent6",
            themeTint: "66"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "B4E5A2",
            themeColor: "accent6",
            themeTint: "66"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "B4E5A2",
            themeColor: "accent6",
            themeTint: "66"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "B4E5A2",
            themeColor: "accent6",
            themeTint: "66"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "B4E5A2",
            themeColor: "accent6",
            themeTint: "66"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }]
    },
    "Grid Table 2 Accent 1": {
      styleId: "GridTable2-Accent1",
      name: "Grid Table 2 Accent 1",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "46B1E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "46B1E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "46B1E1",
            themeColor: "accent1",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "46B1E1",
            themeColor: "accent1",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "46B1E1",
              themeColor: "accent1",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "46B1E1",
              themeColor: "accent1",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C1E5F5",
            fill: "C1E5F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C1E5F5",
            fill: "C1E5F5",
            themeFill: "accent1",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 2 Accent 2": {
      styleId: "GridTable2-Accent2",
      name: "Grid Table 2 Accent 2",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 2 Accent 3": {
      styleId: "GridTable2-Accent3",
      name: "Grid Table 2 Accent 3",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 2 Accent 4": {
      styleId: "GridTable2-Accent4",
      name: "Grid Table 2 Accent 4",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 2 Accent 5": {
      styleId: "GridTable2-Accent5",
      name: "Grid Table 2 Accent 5",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 2 Accent 6": {
      styleId: "GridTable2-Accent6",
      name: "Grid Table 2 Accent 6",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "2",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "2",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "2",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "2",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "2",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 3 Accent 2": {
      styleId: "GridTable3-Accent2",
      name: "Grid Table 3 Accent 2",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 3 Accent 3": {
      styleId: "GridTable3-Accent3",
      name: "Grid Table 3 Accent 3",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 3 Accent 4": {
      styleId: "GridTable3-Accent4",
      name: "Grid Table 3 Accent 4",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }]
    }
  },
  popcornElectronDocumentPanelValue47 = {
    "Grid Table 3 Accent 5": {
      styleId: "GridTable3-Accent5",
      name: "Grid Table 3 Accent 5",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 3 Accent 6": {
      styleId: "GridTable3-Accent6",
      name: "Grid Table 3 Accent 6",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 4 Accent 2": {
      styleId: "GridTable4-Accent2",
      name: "Grid Table 4 Accent 2",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 4 Accent 3": {
      styleId: "GridTable4-Accent3",
      name: "Grid Table 4 Accent 3",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 4 Accent 4": {
      styleId: "GridTable4-Accent4",
      name: "Grid Table 4 Accent 4",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 4 Accent 5": {
      styleId: "GridTable4-Accent5",
      name: "Grid Table 4 Accent 5",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 4 Accent 6": {
      styleId: "GridTable4-Accent6",
      name: "Grid Table 4 Accent 6",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 5 Dark Accent 2": {
      styleId: "GridTable5Dark-Accent2",
      name: "Grid Table 5 Dark Accent 2",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "FBE3D6",
          fill: "FBE3D6",
          themeFill: "accent2",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F6C6AD",
            fill: "F6C6AD",
            themeFill: "accent2",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F6C6AD",
            fill: "F6C6AD",
            themeFill: "accent2",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 5 Dark Accent 3": {
      styleId: "GridTable5Dark-Accent3",
      name: "Grid Table 5 Dark Accent 3",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "C2F1C8",
          fill: "C2F1C8",
          themeFill: "accent3",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "84E291",
            fill: "84E291",
            themeFill: "accent3",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "84E291",
            fill: "84E291",
            themeFill: "accent3",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 5 Dark Accent 4": {
      styleId: "GridTable5Dark-Accent4",
      name: "Grid Table 5 Dark Accent 4",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "CAEEFB",
          fill: "CAEEFB",
          themeFill: "accent4",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "96DCF8",
            fill: "96DCF8",
            themeFill: "accent4",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "96DCF8",
            fill: "96DCF8",
            themeFill: "accent4",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 5 Dark Accent 5": {
      styleId: "GridTable5Dark-Accent5",
      name: "Grid Table 5 Dark Accent 5",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "F2CFEE",
          fill: "F2CFEE",
          themeFill: "accent5",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "E59EDD",
            fill: "E59EDD",
            themeFill: "accent5",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "E59EDD",
            fill: "E59EDD",
            themeFill: "accent5",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 5 Dark Accent 6": {
      styleId: "GridTable5Dark-Accent6",
      name: "Grid Table 5 Dark Accent 6",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "FFFFFF",
            themeColor: "background1"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "D9F2D0",
          fill: "D9F2D0",
          themeFill: "accent6",
          themeFillTint: "33"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "B4E5A2",
            fill: "B4E5A2",
            themeFill: "accent6",
            themeFillTint: "66"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "B4E5A2",
            fill: "B4E5A2",
            themeFill: "accent6",
            themeFillTint: "66"
          }
        }
      }]
    },
    "Grid Table 6 Colorful Accent 2": {
      styleId: "GridTable6Colorful-Accent2",
      name: "Grid Table 6 Colorful Accent 2",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent2",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 6 Colorful Accent 3": {
      styleId: "GridTable6Colorful-Accent3",
      name: "Grid Table 6 Colorful Accent 3",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent3",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 6 Colorful Accent 4": {
      styleId: "GridTable6Colorful-Accent4",
      name: "Grid Table 6 Colorful Accent 4",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent4",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 6 Colorful Accent 5": {
      styleId: "GridTable6Colorful-Accent5",
      name: "Grid Table 6 Colorful Accent 5",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent5",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 6 Colorful Accent 6": {
      styleId: "GridTable6Colorful-Accent6",
      name: "Grid Table 6 Colorful Accent 6",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent6",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "12",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    },
    "Grid Table 7 Colorful Accent 2": {
      styleId: "GridTable7Colorful-Accent2",
      name: "Grid Table 7 Colorful Accent 2",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent2",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }]
    }
  },
  popcornElectronDocumentPanelValue48 = {
    "Grid Table 7 Colorful Accent 3": {
      styleId: "GridTable7Colorful-Accent3",
      name: "Grid Table 7 Colorful Accent 3",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent3",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 7 Colorful Accent 4": {
      styleId: "GridTable7Colorful-Accent4",
      name: "Grid Table 7 Colorful Accent 4",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent4",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 7 Colorful Accent 5": {
      styleId: "GridTable7Colorful-Accent5",
      name: "Grid Table 7 Colorful Accent 5",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent5",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "Grid Table 7 Colorful Accent 6": {
      styleId: "GridTable7Colorful-Accent6",
      name: "Grid Table 7 Colorful Accent 6",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent6",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideV: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            },
            insideH: {
              val: "nil"
            },
            insideV: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }]
    },
    "List Table 1 Light Accent 2": {
      styleId: "ListTable1Light-Accent2",
      name: "List Table 1 Light Accent 2",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 1 Light Accent 3": {
      styleId: "ListTable1Light-Accent3",
      name: "List Table 1 Light Accent 3",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 1 Light Accent 4": {
      styleId: "ListTable1Light-Accent4",
      name: "List Table 1 Light Accent 4",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 1 Light Accent 5": {
      styleId: "ListTable1Light-Accent5",
      name: "List Table 1 Light Accent 5",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 1 Light Accent 6": {
      styleId: "ListTable1Light-Accent6",
      name: "List Table 1 Light Accent 6",
      basedOn: "TableNormal",
      uiPriority: "46",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 2 Accent 2": {
      styleId: "ListTable2-Accent2",
      name: "List Table 2 Accent 2",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 2 Accent 3": {
      styleId: "ListTable2-Accent3",
      name: "List Table 2 Accent 3",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 2 Accent 4": {
      styleId: "ListTable2-Accent4",
      name: "List Table 2 Accent 4",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 2 Accent 5": {
      styleId: "ListTable2-Accent5",
      name: "List Table 2 Accent 5",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 2 Accent 6": {
      styleId: "ListTable2-Accent6",
      name: "List Table 2 Accent 6",
      basedOn: "TableNormal",
      uiPriority: "47",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 3 Accent 2": {
      styleId: "ListTable3-Accent2",
      name: "List Table 3 Accent 2",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 3 Accent 3": {
      styleId: "ListTable3-Accent3",
      name: "List Table 3 Accent 3",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 3 Accent 4": {
      styleId: "ListTable3-Accent4",
      name: "List Table 3 Accent 4",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 3 Accent 5": {
      styleId: "ListTable3-Accent5",
      name: "List Table 3 Accent 5",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 3 Accent 6": {
      styleId: "ListTable3-Accent6",
      name: "List Table 3 Accent 6",
      basedOn: "TableNormal",
      uiPriority: "48",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            insideH: {
              val: "nil"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            },
            bottom: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            bottom: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 4 Accent 2": {
      styleId: "ListTable4-Accent2",
      name: "List Table 4 Accent 2",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "F2AA84",
            themeColor: "accent2",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "E97132",
            fill: "E97132",
            themeFill: "accent2"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "F2AA84",
              themeColor: "accent2",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 4 Accent 3": {
      styleId: "ListTable4-Accent3",
      name: "List Table 4 Accent 3",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "47D45A",
            themeColor: "accent3",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "196B24",
            fill: "196B24",
            themeFill: "accent3"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "47D45A",
              themeColor: "accent3",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 4 Accent 4": {
      styleId: "ListTable4-Accent4",
      name: "List Table 4 Accent 4",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "61CBF4",
            themeColor: "accent4",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "0F9ED5",
            fill: "0F9ED5",
            themeFill: "accent4"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "61CBF4",
              themeColor: "accent4",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 4 Accent 5": {
      styleId: "ListTable4-Accent5",
      name: "List Table 4 Accent 5",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "D86ECC",
            themeColor: "accent5",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "A02B93",
            fill: "A02B93",
            themeFill: "accent5"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "D86ECC",
              themeColor: "accent5",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 4 Accent 6": {
      styleId: "ListTable4-Accent6",
      name: "List Table 4 Accent 6",
      basedOn: "TableNormal",
      uiPriority: "49",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          left: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          right: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          },
          insideH: {
            val: "single",
            sz: "4",
            space: "0",
            color: "8ED973",
            themeColor: "accent6",
            themeTint: "99"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true,
          color: {
            val: "FFFFFF",
            themeColor: "background1"
          }
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            },
            insideH: {
              val: "nil"
            }
          },
          shading: {
            val: "clear",
            color: "4EA72E",
            fill: "4EA72E",
            themeFill: "accent6"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "8ED973",
              themeColor: "accent6",
              themeTint: "99"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    }
  },
  popcornElectronDocumentPanelValue49 = {
    "List Table 5 Dark Accent 2": {
      styleId: "ListTable5Dark-Accent2",
      name: "List Table 5 Dark Accent 2",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "E97132",
          fill: "E97132",
          themeFill: "accent2"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 5 Dark Accent 3": {
      styleId: "ListTable5Dark-Accent3",
      name: "List Table 5 Dark Accent 3",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "196B24",
          fill: "196B24",
          themeFill: "accent3"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 5 Dark Accent 4": {
      styleId: "ListTable5Dark-Accent4",
      name: "List Table 5 Dark Accent 4",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "0F9ED5",
          fill: "0F9ED5",
          themeFill: "accent4"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 5 Dark Accent 5": {
      styleId: "ListTable5Dark-Accent5",
      name: "List Table 5 Dark Accent 5",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "A02B93",
          fill: "A02B93",
          themeFill: "accent5"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 5 Dark Accent 6": {
      styleId: "ListTable5Dark-Accent6",
      name: "List Table 5 Dark Accent 6",
      basedOn: "TableNormal",
      uiPriority: "50",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "FFFFFF",
          themeColor: "background1"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "24",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          left: {
            val: "single",
            sz: "24",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          bottom: {
            val: "single",
            sz: "24",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          right: {
            val: "single",
            sz: "24",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          }
        }
      },
      tcPr: {
        shading: {
          val: "clear",
          color: "4EA72E",
          fill: "4EA72E",
          themeFill: "accent6"
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "18",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band2Vert",
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            },
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "FFFFFF",
              themeColor: "background1"
            }
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            top: {
              val: "nil"
            },
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 6 Colorful Accent 2": {
      styleId: "ListTable6Colorful-Accent2",
      name: "List Table 6 Colorful Accent 2",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent2",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "E97132",
            themeColor: "accent2"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 6 Colorful Accent 3": {
      styleId: "ListTable6Colorful-Accent3",
      name: "List Table 6 Colorful Accent 3",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent3",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "196B24",
            themeColor: "accent3"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 6 Colorful Accent 4": {
      styleId: "ListTable6Colorful-Accent4",
      name: "List Table 6 Colorful Accent 4",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent4",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "0F9ED5",
            themeColor: "accent4"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 6 Colorful Accent 5": {
      styleId: "ListTable6Colorful-Accent5",
      name: "List Table 6 Colorful Accent 5",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent5",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "A02B93",
            themeColor: "accent5"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 6 Colorful Accent 6": {
      styleId: "ListTable6Colorful-Accent6",
      name: "List Table 6 Colorful Accent 6",
      basedOn: "TableNormal",
      uiPriority: "51",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent6",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1",
        borders: {
          top: {
            val: "single",
            sz: "4",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          },
          bottom: {
            val: "single",
            sz: "4",
            space: "0",
            color: "4EA72E",
            themeColor: "accent6"
          }
        }
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          bold: true
        },
        tcPr: {
          borders: {
            top: {
              val: "double",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          }
        }
      }, {
        type: "firstCol",
        rPr: {
          bold: true
        }
      }, {
        type: "lastCol",
        rPr: {
          bold: true
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }]
    },
    "List Table 7 Colorful Accent 2": {
      styleId: "ListTable7Colorful-Accent2",
      name: "List Table 7 Colorful Accent 2",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent2",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "E97132",
              themeColor: "accent2"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "FBE3D6",
            fill: "FBE3D6",
            themeFill: "accent2",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 7 Colorful Accent 3": {
      styleId: "ListTable7Colorful-Accent3",
      name: "List Table 7 Colorful Accent 3",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent3",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "196B24",
              themeColor: "accent3"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "C2F1C8",
            fill: "C2F1C8",
            themeFill: "accent3",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 7 Colorful Accent 4": {
      styleId: "ListTable7Colorful-Accent4",
      name: "List Table 7 Colorful Accent 4",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent4",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "0F9ED5",
              themeColor: "accent4"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "CAEEFB",
            fill: "CAEEFB",
            themeFill: "accent4",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 7 Colorful Accent 5": {
      styleId: "ListTable7Colorful-Accent5",
      name: "List Table 7 Colorful Accent 5",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent5",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "A02B93",
              themeColor: "accent5"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "F2CFEE",
            fill: "F2CFEE",
            themeFill: "accent5",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    },
    "List Table 7 Colorful Accent 6": {
      styleId: "ListTable7Colorful-Accent6",
      name: "List Table 7 Colorful Accent 6",
      basedOn: "TableNormal",
      uiPriority: "52",
      pPr: {
        spacing: {
          after: "0",
          line: "240",
          lineRule: "auto"
        }
      },
      rPr: {
        color: {
          val: "0F4761",
          themeColor: "accent6",
          themeShade: "BF"
        }
      },
      tblPr: {
        rowBandSize: "1",
        colBandSize: "1"
      },
      tblStylePr: [{
        type: "firstRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            bottom: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastRow",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            top: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "firstCol",
        pPr: {
          alignment: "right"
        },
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            right: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "lastCol",
        rPr: {
          italic: true
        },
        tcPr: {
          borders: {
            left: {
              val: "single",
              sz: "4",
              space: "0",
              color: "4EA72E",
              themeColor: "accent6"
            }
          },
          shading: {
            val: "clear",
            color: "FFFFFF",
            fill: "FFFFFF",
            themeFill: "background1"
          }
        }
      }, {
        type: "band1Vert",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "band1Horz",
        tcPr: {
          shading: {
            val: "clear",
            color: "D9F2D0",
            fill: "D9F2D0",
            themeFill: "accent6",
            themeFillTint: "33"
          }
        }
      }, {
        type: "neCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "nwCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }, {
        type: "seCell",
        tcPr: {
          borders: {
            left: {
              val: "nil"
            }
          }
        }
      }, {
        type: "swCell",
        tcPr: {
          borders: {
            right: {
              val: "nil"
            }
          }
        }
      }]
    }
  },
  popcornElectronDocumentPanelValue50 = "Normal Table.Table Grid.Grid Table Light.Plain Table 1.Plain Table 2.Plain Table 3.Plain Table 4.Plain Table 5.Grid Table 1 Light.Grid Table 1 Light Accent 1.Grid Table 1 Light Accent 2.Grid Table 1 Light Accent 3.Grid Table 1 Light Accent 4.Grid Table 1 Light Accent 5.Grid Table 2.Grid Table 3.Grid Table 4.Grid Table 5 Dark.Grid Table 6 Colorful.Grid Table 7 Colorful.List Table 1 Light.List Table 2.List Table 3.List Table 4.List Table 5 Dark.List Table 6 Colorful.List Table 7 Colorful.List Table 7 Colorful Accent 1.List Table 6 Colorful Accent 1.List Table 5 Dark Accent 1.List Table 4 Accent 1.List Table 3 Accent 1.List Table 2 Accent 1.List Table 1 Light Accent 1.Grid Table 7 Colorful Accent 1.Grid Table 6 Colorful Accent 1.Grid Table 5 Dark Accent 1.Grid Table 4 Accent 1.Grid Table 3 Accent 1.Grid Table 1 Light Accent 6.Grid Table 2 Accent 1.Grid Table 2 Accent 2.Grid Table 2 Accent 3.Grid Table 2 Accent 4.Grid Table 2 Accent 5.Grid Table 2 Accent 6.Grid Table 3 Accent 2.Grid Table 3 Accent 3.Grid Table 3 Accent 4.Grid Table 3 Accent 5.Grid Table 3 Accent 6.Grid Table 4 Accent 2.Grid Table 4 Accent 3.Grid Table 4 Accent 4.Grid Table 4 Accent 5.Grid Table 4 Accent 6.Grid Table 5 Dark Accent 2.Grid Table 5 Dark Accent 3.Grid Table 5 Dark Accent 4.Grid Table 5 Dark Accent 5.Grid Table 5 Dark Accent 6.Grid Table 6 Colorful Accent 2.Grid Table 6 Colorful Accent 3.Grid Table 6 Colorful Accent 4.Grid Table 6 Colorful Accent 5.Grid Table 6 Colorful Accent 6.Grid Table 7 Colorful Accent 2.Grid Table 7 Colorful Accent 3.Grid Table 7 Colorful Accent 4.Grid Table 7 Colorful Accent 5.Grid Table 7 Colorful Accent 6.List Table 1 Light Accent 2.List Table 1 Light Accent 3.List Table 1 Light Accent 4.List Table 1 Light Accent 5.List Table 1 Light Accent 6.List Table 2 Accent 2.List Table 2 Accent 3.List Table 2 Accent 4.List Table 2 Accent 5.List Table 2 Accent 6.List Table 3 Accent 2.List Table 3 Accent 3.List Table 3 Accent 4.List Table 3 Accent 5.List Table 3 Accent 6.List Table 4 Accent 2.List Table 4 Accent 3.List Table 4 Accent 4.List Table 4 Accent 5.List Table 4 Accent 6.List Table 5 Dark Accent 2.List Table 5 Dark Accent 3.List Table 5 Dark Accent 4.List Table 5 Dark Accent 5.List Table 5 Dark Accent 6.List Table 6 Colorful Accent 2.List Table 6 Colorful Accent 3.List Table 6 Colorful Accent 4.List Table 6 Colorful Accent 5.List Table 6 Colorful Accent 6.List Table 7 Colorful Accent 2.List Table 7 Colorful Accent 3.List Table 7 Colorful Accent 4.List Table 7 Colorful Accent 5.List Table 7 Colorful Accent 6".split("."),
  popcornElectronDocumentPanelValue51 = {
    ...popcornElectronDocumentPanelValue45,
    ...popcornElectronDocumentPanelValue46,
    ...popcornElectronDocumentPanelValue47,
    ...popcornElectronDocumentPanelValue48,
    ...popcornElectronDocumentPanelValue49
  },
  _a = {
    TableNormal: "Normal Table",
    TableGrid: "Table Grid",
    TableGridLight: "Grid Table Light",
    PlainTable1: "Plain Table 1",
    PlainTable2: "Plain Table 2",
    PlainTable3: "Plain Table 3",
    PlainTable4: "Plain Table 4",
    PlainTable5: "Plain Table 5",
    GridTable1Light: "Grid Table 1 Light",
    "GridTable1Light-Accent1": "Grid Table 1 Light Accent 1",
    "GridTable1Light-Accent2": "Grid Table 1 Light Accent 2",
    "GridTable1Light-Accent3": "Grid Table 1 Light Accent 3",
    "GridTable1Light-Accent4": "Grid Table 1 Light Accent 4",
    "GridTable1Light-Accent5": "Grid Table 1 Light Accent 5",
    GridTable2: "Grid Table 2",
    GridTable3: "Grid Table 3",
    GridTable4: "Grid Table 4",
    GridTable5Dark: "Grid Table 5 Dark",
    GridTable6Colorful: "Grid Table 6 Colorful",
    GridTable7Colorful: "Grid Table 7 Colorful",
    ListTable1Light: "List Table 1 Light",
    ListTable2: "List Table 2",
    ListTable3: "List Table 3",
    ListTable4: "List Table 4",
    ListTable5Dark: "List Table 5 Dark",
    ListTable6Colorful: "List Table 6 Colorful",
    ListTable7Colorful: "List Table 7 Colorful",
    "ListTable7Colorful-Accent1": "List Table 7 Colorful Accent 1",
    "ListTable6Colorful-Accent1": "List Table 6 Colorful Accent 1",
    "ListTable5Dark-Accent1": "List Table 5 Dark Accent 1",
    "ListTable4-Accent1": "List Table 4 Accent 1",
    "ListTable3-Accent1": "List Table 3 Accent 1",
    "ListTable2-Accent1": "List Table 2 Accent 1",
    "ListTable1Light-Accent1": "List Table 1 Light Accent 1",
    "GridTable7Colorful-Accent1": "Grid Table 7 Colorful Accent 1",
    "GridTable6Colorful-Accent1": "Grid Table 6 Colorful Accent 1",
    "GridTable5Dark-Accent1": "Grid Table 5 Dark Accent 1",
    "GridTable4-Accent1": "Grid Table 4 Accent 1",
    "GridTable3-Accent1": "Grid Table 3 Accent 1",
    "GridTable1Light-Accent6": "Grid Table 1 Light Accent 6",
    "GridTable2-Accent1": "Grid Table 2 Accent 1",
    "GridTable2-Accent2": "Grid Table 2 Accent 2",
    "GridTable2-Accent3": "Grid Table 2 Accent 3",
    "GridTable2-Accent4": "Grid Table 2 Accent 4",
    "GridTable2-Accent5": "Grid Table 2 Accent 5",
    "GridTable2-Accent6": "Grid Table 2 Accent 6",
    "GridTable3-Accent2": "Grid Table 3 Accent 2",
    "GridTable3-Accent3": "Grid Table 3 Accent 3",
    "GridTable3-Accent4": "Grid Table 3 Accent 4",
    "GridTable3-Accent5": "Grid Table 3 Accent 5",
    "GridTable3-Accent6": "Grid Table 3 Accent 6",
    "GridTable4-Accent2": "Grid Table 4 Accent 2",
    "GridTable4-Accent3": "Grid Table 4 Accent 3",
    "GridTable4-Accent4": "Grid Table 4 Accent 4",
    "GridTable4-Accent5": "Grid Table 4 Accent 5",
    "GridTable4-Accent6": "Grid Table 4 Accent 6",
    "GridTable5Dark-Accent2": "Grid Table 5 Dark Accent 2",
    "GridTable5Dark-Accent3": "Grid Table 5 Dark Accent 3",
    "GridTable5Dark-Accent4": "Grid Table 5 Dark Accent 4",
    "GridTable5Dark-Accent5": "Grid Table 5 Dark Accent 5",
    "GridTable5Dark-Accent6": "Grid Table 5 Dark Accent 6",
    "GridTable6Colorful-Accent2": "Grid Table 6 Colorful Accent 2",
    "GridTable6Colorful-Accent3": "Grid Table 6 Colorful Accent 3",
    "GridTable6Colorful-Accent4": "Grid Table 6 Colorful Accent 4",
    "GridTable6Colorful-Accent5": "Grid Table 6 Colorful Accent 5",
    "GridTable6Colorful-Accent6": "Grid Table 6 Colorful Accent 6",
    "GridTable7Colorful-Accent2": "Grid Table 7 Colorful Accent 2",
    "GridTable7Colorful-Accent3": "Grid Table 7 Colorful Accent 3",
    "GridTable7Colorful-Accent4": "Grid Table 7 Colorful Accent 4",
    "GridTable7Colorful-Accent5": "Grid Table 7 Colorful Accent 5",
    "GridTable7Colorful-Accent6": "Grid Table 7 Colorful Accent 6",
    "ListTable1Light-Accent2": "List Table 1 Light Accent 2",
    "ListTable1Light-Accent3": "List Table 1 Light Accent 3",
    "ListTable1Light-Accent4": "List Table 1 Light Accent 4",
    "ListTable1Light-Accent5": "List Table 1 Light Accent 5",
    "ListTable1Light-Accent6": "List Table 1 Light Accent 6",
    "ListTable2-Accent2": "List Table 2 Accent 2",
    "ListTable2-Accent3": "List Table 2 Accent 3",
    "ListTable2-Accent4": "List Table 2 Accent 4",
    "ListTable2-Accent5": "List Table 2 Accent 5",
    "ListTable2-Accent6": "List Table 2 Accent 6",
    "ListTable3-Accent2": "List Table 3 Accent 2",
    "ListTable3-Accent3": "List Table 3 Accent 3",
    "ListTable3-Accent4": "List Table 3 Accent 4",
    "ListTable3-Accent5": "List Table 3 Accent 5",
    "ListTable3-Accent6": "List Table 3 Accent 6",
    "ListTable4-Accent2": "List Table 4 Accent 2",
    "ListTable4-Accent3": "List Table 4 Accent 3",
    "ListTable4-Accent4": "List Table 4 Accent 4",
    "ListTable4-Accent5": "List Table 4 Accent 5",
    "ListTable4-Accent6": "List Table 4 Accent 6",
    "ListTable5Dark-Accent2": "List Table 5 Dark Accent 2",
    "ListTable5Dark-Accent3": "List Table 5 Dark Accent 3",
    "ListTable5Dark-Accent4": "List Table 5 Dark Accent 4",
    "ListTable5Dark-Accent5": "List Table 5 Dark Accent 5",
    "ListTable5Dark-Accent6": "List Table 5 Dark Accent 6",
    "ListTable6Colorful-Accent2": "List Table 6 Colorful Accent 2",
    "ListTable6Colorful-Accent3": "List Table 6 Colorful Accent 3",
    "ListTable6Colorful-Accent4": "List Table 6 Colorful Accent 4",
    "ListTable6Colorful-Accent5": "List Table 6 Colorful Accent 5",
    "ListTable6Colorful-Accent6": "List Table 6 Colorful Accent 6",
    "ListTable7Colorful-Accent2": "List Table 7 Colorful Accent 2",
    "ListTable7Colorful-Accent3": "List Table 7 Colorful Accent 3",
    "ListTable7Colorful-Accent4": "List Table 7 Colorful Accent 4",
    "ListTable7Colorful-Accent5": "List Table 7 Colorful Accent 5",
    "ListTable7Colorful-Accent6": "List Table 7 Colorful Accent 6"
  },
  popcornElectronDocumentPanelValue52 = {
    tableStyleLight1: "TableStyleLight1"
  },
  popcornElectronDocumentPanelValue53 = {
    TableStyleLight1: popcornElectronDocumentPanelValue52.tableStyleLight1,
    "Table Style Light 1": popcornElectronDocumentPanelValue52.tableStyleLight1
  },
  popcornElectronDocumentPanelValue54 = {
    color: "#111111",
    width: 0.35,
    style: "solid"
  },
  popcornElectronDocumentPanelValue55 = {
    left: 7.2,
    right: 7.2,
    top: 2.4,
    bottom: 2.4
  };
function popcornElectronDocumentPanelHelper204(popcornElectronDocumentPanelParam800) {
  if (popcornElectronDocumentPanelParam800) return popcornElectronDocumentPanelValue53[popcornElectronDocumentPanelParam800];
}
function popcornElectronDocumentPanelHelper205(popcornElectronDocumentPanelParam707) {
  if (popcornElectronDocumentPanelParam707) return popcornElectronDocumentPanelHelper207(popcornElectronDocumentPanelParam707) ? popcornElectronDocumentPanelParam707 : popcornElectronDocumentPanelHelper208(popcornElectronDocumentPanelParam707) ? _a[popcornElectronDocumentPanelParam707] : undefined;
}
function popcornElectronDocumentPanelHelper206() {
  return popcornElectronDocumentPanelValue50.map(item => popcornElectronDocumentPanelHelper209(popcornElectronDocumentPanelValue51[item]));
}
function popcornElectronDocumentPanelHelper207(popcornElectronDocumentPanelParam703) {
  return Object.prototype.hasOwnProperty.call(popcornElectronDocumentPanelValue51, popcornElectronDocumentPanelParam703);
}
function popcornElectronDocumentPanelHelper208(popcornElectronDocumentPanelParam704) {
  return Object.prototype.hasOwnProperty.call(_a, popcornElectronDocumentPanelParam704);
}
function popcornElectronDocumentPanelHelper209(popcornElectronDocumentPanelParam265) {
  return {
    id: popcornElectronDocumentPanelParam265.styleId,
    name: popcornElectronDocumentPanelParam265.name,
    basedOn: popcornElectronDocumentPanelParam265.basedOn,
    wholeTable: popcornElectronDocumentPanelHelper212(popcornElectronDocumentPanelParam265),
    conditionalStyles: (popcornElectronDocumentPanelParam265.tblStylePr ?? []).flatMap(item => {
      let popcornElectronDocumentPanelValue886 = popcornElectronDocumentPanelHelper211(item.type),
        popcornElectronDocumentPanelValue887 = popcornElectronDocumentPanelHelper212(item);
      return popcornElectronDocumentPanelValue886 === undefined || popcornElectronDocumentPanelValue887 === undefined ? [] : [{
        condition: popcornElectronDocumentPanelValue886,
        style: popcornElectronDocumentPanelValue887
      }];
    })
  };
}
function popcornElectronDocumentPanelHelper210(popcornElectronDocumentPanelParam796) {
  return popcornElectronDocumentPanelValue51[popcornElectronDocumentPanelParam796].styleId;
}
function popcornElectronDocumentPanelHelper211(popcornElectronDocumentPanelParam62) {
  switch (popcornElectronDocumentPanelParam62) {
    case "wholeTable":
      return __presentationT.CONDITION_WHOLE_TABLE;
    case "firstRow":
      return __presentationT.CONDITION_FIRST_ROW;
    case "lastRow":
      return __presentationT.CONDITION_LAST_ROW;
    case "firstCol":
      return __presentationT.CONDITION_FIRST_COLUMN;
    case "lastCol":
      return __presentationT.CONDITION_LAST_COLUMN;
    case "band1Horz":
      return __presentationT.CONDITION_BANDED_ROW_ODD;
    case "band2Horz":
      return __presentationT.CONDITION_BANDED_ROW_EVEN;
    case "band1Vert":
      return __presentationT.CONDITION_BANDED_COLUMN_ODD;
    case "band2Vert":
      return __presentationT.CONDITION_BANDED_COLUMN_EVEN;
    case "nwCell":
      return __presentationT.CONDITION_TOP_LEFT_CELL;
    case "neCell":
      return __presentationT.CONDITION_TOP_RIGHT_CELL;
    case "swCell":
      return __presentationT.CONDITION_BOTTOM_LEFT_CELL;
    case "seCell":
      return __presentationT.CONDITION_BOTTOM_RIGHT_CELL;
    default:
      return;
  }
}
function popcornElectronDocumentPanelHelper212(popcornElectronDocumentPanelParam327) {
  let popcornElectronDocumentPanelValue711 = popcornElectronDocumentPanelHelper213(popcornElectronDocumentPanelParam327),
    popcornElectronDocumentPanelValue712 = popcornElectronDocumentPanelHelper214(popcornElectronDocumentPanelParam327),
    popcornElectronDocumentPanelValue713 = popcornElectronDocumentPanelHelper215(popcornElectronDocumentPanelParam327),
    popcornElectronDocumentPanelValue714 = popcornElectronDocumentPanelHelper230(popcornElectronDocumentPanelParam327.pPr?.spacing?.after);
  if (!(popcornElectronDocumentPanelValue711 === undefined && popcornElectronDocumentPanelValue712 === undefined && popcornElectronDocumentPanelValue713 === undefined && popcornElectronDocumentPanelValue714 === undefined)) return {
    tableProperties: popcornElectronDocumentPanelValue711,
    cellStyle: popcornElectronDocumentPanelValue712,
    textStyle: popcornElectronDocumentPanelValue713,
    spaceAfter: popcornElectronDocumentPanelValue714
  };
}
function popcornElectronDocumentPanelHelper213(popcornElectronDocumentPanelParam276) {
  let popcornElectronDocumentPanelValue659 = popcornElectronDocumentPanelHelper218(popcornElectronDocumentPanelParam276.tblPr?.shading),
    popcornElectronDocumentPanelValue660 = popcornElectronDocumentPanelHelper216(popcornElectronDocumentPanelParam276.tblPr?.alignment),
    popcornElectronDocumentPanelValue661 = popcornElectronDocumentPanelHelper221(popcornElectronDocumentPanelParam276.tblPr?.borders),
    popcornElectronDocumentPanelValue662 = popcornElectronDocumentPanelHelper228(popcornElectronDocumentPanelParam276.tblPr?.cellMargins);
  if (!(popcornElectronDocumentPanelValue659 === undefined && popcornElectronDocumentPanelValue660 === undefined && popcornElectronDocumentPanelValue661 === undefined && popcornElectronDocumentPanelValue662 === undefined)) return {
    fill: popcornElectronDocumentPanelValue659,
    alignment: popcornElectronDocumentPanelValue660,
    borders: popcornElectronDocumentPanelValue661,
    cellMargins: popcornElectronDocumentPanelValue662,
    effects: []
  };
}
function popcornElectronDocumentPanelHelper214(popcornElectronDocumentPanelParam89) {
  let popcornElectronDocumentPanelValue426 = popcornElectronDocumentPanelHelper218(popcornElectronDocumentPanelParam89.tcPr?.shading),
    popcornElectronDocumentPanelValue427 = popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam89.tcPr?.margins?.left),
    popcornElectronDocumentPanelValue428 = popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam89.tcPr?.margins?.right),
    popcornElectronDocumentPanelValue429 = popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam89.tcPr?.margins?.top),
    popcornElectronDocumentPanelValue430 = popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam89.tcPr?.margins?.bottom),
    popcornElectronDocumentPanelValue431 = popcornElectronDocumentPanelHelper220(popcornElectronDocumentPanelParam89.tcPr?.borders),
    popcornElectronDocumentPanelValue432 = popcornElectronDocumentPanelHelper222(popcornElectronDocumentPanelParam89.tcPr?.borders),
    popcornElectronDocumentPanelValue433 = popcornElectronDocumentPanelParam89.tcPr?.verticalAlignment,
    popcornElectronDocumentPanelValue434 = popcornElectronDocumentPanelParam89.tcPr?.textDirection;
  if (!(popcornElectronDocumentPanelValue426 === undefined && popcornElectronDocumentPanelValue431 === undefined && popcornElectronDocumentPanelValue432 === undefined && popcornElectronDocumentPanelValue427 === undefined && popcornElectronDocumentPanelValue428 === undefined && popcornElectronDocumentPanelValue429 === undefined && popcornElectronDocumentPanelValue430 === undefined && popcornElectronDocumentPanelValue433 === undefined && popcornElectronDocumentPanelValue434 === undefined)) return {
    fill: popcornElectronDocumentPanelValue426,
    lines: popcornElectronDocumentPanelValue431,
    borders: popcornElectronDocumentPanelValue432,
    marginLeft: popcornElectronDocumentPanelValue427,
    marginRight: popcornElectronDocumentPanelValue428,
    marginTop: popcornElectronDocumentPanelValue429,
    marginBottom: popcornElectronDocumentPanelValue430,
    anchor: popcornElectronDocumentPanelValue433,
    textDirection: popcornElectronDocumentPanelValue434
  };
}
function popcornElectronDocumentPanelHelper215(popcornElectronDocumentPanelParam339) {
  let popcornElectronDocumentPanelValue735 = popcornElectronDocumentPanelParam339.rPr,
    popcornElectronDocumentPanelValue736 = popcornElectronDocumentPanelHelper219(popcornElectronDocumentPanelValue735?.color),
    popcornElectronDocumentPanelValue737 = popcornElectronDocumentPanelHelper217(popcornElectronDocumentPanelParam339.pPr?.alignment);
  if (!(popcornElectronDocumentPanelValue736 === undefined && popcornElectronDocumentPanelValue737 === undefined && popcornElectronDocumentPanelValue735?.bold !== true && popcornElectronDocumentPanelValue735?.italic !== true)) return {
    bold: popcornElectronDocumentPanelValue735?.bold,
    italic: popcornElectronDocumentPanelValue735?.italic,
    fill: popcornElectronDocumentPanelValue736,
    alignment: popcornElectronDocumentPanelValue737
  };
}
function popcornElectronDocumentPanelHelper216(popcornElectronDocumentPanelParam348) {
  switch (popcornElectronDocumentPanelParam348) {
    case "left":
      return _presentationJn.ALIGNMENT_TYPE_LEFT;
    case "center":
      return _presentationJn.ALIGNMENT_TYPE_CENTER;
    case "right":
      return _presentationJn.ALIGNMENT_TYPE_RIGHT;
    default:
      return;
  }
}
function popcornElectronDocumentPanelHelper217(popcornElectronDocumentPanelParam349) {
  switch (popcornElectronDocumentPanelParam349) {
    case "left":
      return _presentationJn.ALIGNMENT_TYPE_LEFT;
    case "center":
      return _presentationJn.ALIGNMENT_TYPE_CENTER;
    case "right":
      return _presentationJn.ALIGNMENT_TYPE_RIGHT;
    default:
      return;
  }
}
function popcornElectronDocumentPanelHelper218(popcornElectronDocumentPanelParam585) {
  let popcornElectronDocumentPanelValue932 = popcornElectronDocumentPanelHelper231(popcornElectronDocumentPanelParam585);
  return popcornElectronDocumentPanelValue932 ? new popcornElectronDocumentPanelImport21({
    type: "solid",
    color: popcornElectronDocumentPanelValue932
  }).toProto() : undefined;
}
function popcornElectronDocumentPanelHelper219(popcornElectronDocumentPanelParam586) {
  let popcornElectronDocumentPanelValue933 = popcornElectronDocumentPanelHelper233(popcornElectronDocumentPanelParam586);
  return popcornElectronDocumentPanelValue933 ? new popcornElectronDocumentPanelImport21({
    type: "solid",
    color: popcornElectronDocumentPanelValue933
  }).toProto() : undefined;
}
function popcornElectronDocumentPanelHelper220(popcornElectronDocumentPanelParam185) {
  if (!popcornElectronDocumentPanelParam185) return;
  let popcornElectronDocumentPanelValue566 = {
    top: popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam185.top),
    right: popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam185.right),
    bottom: popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam185.bottom),
    left: popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam185.left),
    diagonalDown: popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam185.tl2br),
    diagonalUp: popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam185.tr2bl)
  };
  if (!(popcornElectronDocumentPanelValue566.top === undefined && popcornElectronDocumentPanelValue566.right === undefined && popcornElectronDocumentPanelValue566.bottom === undefined && popcornElectronDocumentPanelValue566.left === undefined && popcornElectronDocumentPanelValue566.diagonalDown === undefined && popcornElectronDocumentPanelValue566.diagonalUp === undefined)) return popcornElectronDocumentPanelValue566;
}
function popcornElectronDocumentPanelHelper221(popcornElectronDocumentPanelParam337) {
  if (!popcornElectronDocumentPanelParam337) return;
  let popcornElectronDocumentPanelValue732 = {
    top: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam337.top),
    right: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam337.right),
    bottom: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam337.bottom),
    left: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam337.left),
    insideHorizontal: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam337.insideH),
    insideVertical: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam337.insideV)
  };
  return popcornElectronDocumentPanelHelper223(popcornElectronDocumentPanelValue732) ? popcornElectronDocumentPanelValue732 : undefined;
}
function popcornElectronDocumentPanelHelper222(popcornElectronDocumentPanelParam354) {
  if (!popcornElectronDocumentPanelParam354) return;
  let popcornElectronDocumentPanelValue753 = {
    top: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam354.top),
    right: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam354.right),
    bottom: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam354.bottom),
    left: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam354.left),
    diagonalDown: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam354.tl2br),
    diagonalUp: popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam354.tr2bl)
  };
  return popcornElectronDocumentPanelHelper224(popcornElectronDocumentPanelValue753) ? popcornElectronDocumentPanelValue753 : undefined;
}
function popcornElectronDocumentPanelHelper223(popcornElectronDocumentPanelParam388) {
  return popcornElectronDocumentPanelParam388.top !== undefined || popcornElectronDocumentPanelParam388.right !== undefined || popcornElectronDocumentPanelParam388.bottom !== undefined || popcornElectronDocumentPanelParam388.left !== undefined || popcornElectronDocumentPanelParam388.insideHorizontal !== undefined || popcornElectronDocumentPanelParam388.insideVertical !== undefined;
}
function popcornElectronDocumentPanelHelper224(popcornElectronDocumentPanelParam406) {
  return popcornElectronDocumentPanelParam406.top !== undefined || popcornElectronDocumentPanelParam406.right !== undefined || popcornElectronDocumentPanelParam406.bottom !== undefined || popcornElectronDocumentPanelParam406.left !== undefined || popcornElectronDocumentPanelParam406.diagonalDown !== undefined || popcornElectronDocumentPanelParam406.diagonalUp !== undefined;
}
function popcornElectronDocumentPanelHelper225(popcornElectronDocumentPanelParam532) {
  if (!popcornElectronDocumentPanelParam532) return;
  if (popcornElectronDocumentPanelParam532.val === "nil") return {
    none: true
  };
  let popcornElectronDocumentPanelValue897 = popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam532);
  return popcornElectronDocumentPanelValue897 ? {
    line: popcornElectronDocumentPanelValue897
  } : undefined;
}
function popcornElectronDocumentPanelHelper226(popcornElectronDocumentPanelParam537) {
  if (!(!popcornElectronDocumentPanelParam537 || popcornElectronDocumentPanelParam537.val === "nil")) return popcornElectronDocumentPanelImport23({
    color: popcornElectronDocumentPanelHelper232(popcornElectronDocumentPanelParam537),
    width: popcornElectronDocumentPanelHelper227(popcornElectronDocumentPanelParam537),
    style: "solid"
  })?.toProto();
}
function popcornElectronDocumentPanelHelper227(popcornElectronDocumentPanelParam619) {
  let popcornElectronDocumentPanelValue950 = Number(popcornElectronDocumentPanelParam619.sz);
  return !Number.isFinite(popcornElectronDocumentPanelValue950) || popcornElectronDocumentPanelValue950 <= 0 ? 1 : popcornElectronDocumentPanelValue950 / 6;
}
function popcornElectronDocumentPanelHelper228(popcornElectronDocumentPanelParam279) {
  if (!popcornElectronDocumentPanelParam279) return;
  let popcornElectronDocumentPanelValue665 = {
    left: popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam279.left),
    right: popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam279.right),
    top: popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam279.top),
    bottom: popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam279.bottom)
  };
  if (!(popcornElectronDocumentPanelValue665.left === undefined && popcornElectronDocumentPanelValue665.right === undefined && popcornElectronDocumentPanelValue665.top === undefined && popcornElectronDocumentPanelValue665.bottom === undefined)) return popcornElectronDocumentPanelValue665;
}
function popcornElectronDocumentPanelHelper229(popcornElectronDocumentPanelParam716) {
  if (!(!popcornElectronDocumentPanelParam716 || popcornElectronDocumentPanelParam716.type !== "dxa")) return popcornElectronDocumentPanelHelper230(popcornElectronDocumentPanelParam716.w);
}
function popcornElectronDocumentPanelHelper230(popcornElectronDocumentPanelParam533) {
  if (popcornElectronDocumentPanelParam533 === undefined) return;
  let popcornElectronDocumentPanelValue903 = Number(popcornElectronDocumentPanelParam533);
  return Number.isFinite(popcornElectronDocumentPanelValue903) ? Math.round(popcornElectronDocumentPanelValue903 * 635) : undefined;
}
function popcornElectronDocumentPanelHelper231(popcornElectronDocumentPanelParam378) {
  if (!(!popcornElectronDocumentPanelParam378 || popcornElectronDocumentPanelParam378.val === "nil")) return popcornElectronDocumentPanelHelper233({
    val: popcornElectronDocumentPanelParam378.val,
    color: popcornElectronDocumentPanelParam378.fill,
    themeColor: popcornElectronDocumentPanelParam378.themeFill,
    themeTint: popcornElectronDocumentPanelParam378.themeFillTint,
    themeShade: popcornElectronDocumentPanelParam378.themeFillShade
  });
}
function popcornElectronDocumentPanelHelper232(popcornElectronDocumentPanelParam434) {
  if (popcornElectronDocumentPanelParam434.val !== "nil") return popcornElectronDocumentPanelHelper233({
    color: popcornElectronDocumentPanelParam434.color,
    themeColor: popcornElectronDocumentPanelParam434.themeColor,
    themeTint: popcornElectronDocumentPanelParam434.themeTint,
    themeShade: popcornElectronDocumentPanelParam434.themeShade
  });
}
function popcornElectronDocumentPanelHelper233(popcornElectronDocumentPanelParam227) {
  if (!popcornElectronDocumentPanelParam227 || popcornElectronDocumentPanelParam227.val === "nil") return;
  let popcornElectronDocumentPanelValue618 = popcornElectronDocumentPanelHelper234(popcornElectronDocumentPanelParam227.themeColor),
    popcornElectronDocumentPanelValue619 = popcornElectronDocumentPanelHelper235(popcornElectronDocumentPanelParam227),
    popcornElectronDocumentPanelValue620 = popcornElectronDocumentPanelParam227.color ?? popcornElectronDocumentPanelParam227.val;
  return popcornElectronDocumentPanelValue618 ? {
    type: "proto",
    proto: {
      type: _presentationZ.COLOR_TYPE_SCHEME,
      value: popcornElectronDocumentPanelValue618,
      transform: popcornElectronDocumentPanelValue619,
      lastColor: popcornElectronDocumentPanelValue620
    }
  } : popcornElectronDocumentPanelValue620 ? `#${popcornElectronDocumentPanelValue620}` : undefined;
}
function popcornElectronDocumentPanelHelper234(popcornElectronDocumentPanelParam159) {
  switch (popcornElectronDocumentPanelParam159) {
    case "accent1":
      return "accent1";
    case "accent2":
      return "accent2";
    case "accent3":
      return "accent3";
    case "accent4":
      return "accent4";
    case "accent5":
      return "accent5";
    case "accent6":
      return "accent6";
    case "background1":
      return "bg1";
    case "background2":
      return "bg2";
    case "text1":
      return "tx1";
    case "text2":
      return "tx2";
    default:
      return;
  }
}
function popcornElectronDocumentPanelHelper235(popcornElectronDocumentPanelParam260) {
  if (popcornElectronDocumentPanelParam260.themeTint !== undefined) {
    let popcornElectronDocumentPanelValue893 = Number.parseInt(popcornElectronDocumentPanelParam260.themeTint, 16) / 255;
    return {
      lumMod: Math.round(popcornElectronDocumentPanelValue893 * 1e5),
      lumOff: Math.round((1 - popcornElectronDocumentPanelValue893) * 1e5)
    };
  }
  if (popcornElectronDocumentPanelParam260.themeShade !== undefined) {
    let popcornElectronDocumentPanelValue934 = Number.parseInt(popcornElectronDocumentPanelParam260.themeShade, 16) / 255;
    return {
      lumMod: Math.round(popcornElectronDocumentPanelValue934 * 1e5)
    };
  }
}
function $a(popcornElectronDocumentPanelParam616, popcornElectronDocumentPanelParam617) {
  switch (popcornElectronDocumentPanelParam617) {
    case "TableStyleLight1":
      popcornElectronDocumentPanelHelper236(popcornElectronDocumentPanelParam616);
      break;
  }
}
function popcornElectronDocumentPanelHelper236(popcornElectronDocumentPanelParam166) {
  if (popcornElectronDocumentPanelParam166.rowCount === 0 || popcornElectronDocumentPanelParam166.columnCount === 0) return;
  let popcornElectronDocumentPanelValue551 = popcornElectronDocumentPanelParam166.styleOptions,
    popcornElectronDocumentPanelValue552 = popcornElectronDocumentPanelParam166.cells.block({
      row: 0,
      column: 0,
      rowCount: popcornElectronDocumentPanelParam166.rowCount,
      columnCount: popcornElectronDocumentPanelParam166.columnCount
    });
  popcornElectronDocumentPanelValue552.forEachCell(popcornElectronDocumentPanelParam814 => {
    popcornElectronDocumentPanelParam814.margins = popcornElectronDocumentPanelValue55;
  });
  popcornElectronDocumentPanelValue552.borders = {
    top: popcornElectronDocumentPanelValue54,
    bottom: popcornElectronDocumentPanelValue54,
    insideHorizontal: popcornElectronDocumentPanelValue54
  };
  popcornElectronDocumentPanelValue552.textStyle.color = "#111111";
  to(popcornElectronDocumentPanelParam166, popcornElectronDocumentPanelValue551);
  no(popcornElectronDocumentPanelParam166, popcornElectronDocumentPanelValue551);
  popcornElectronDocumentPanelHelper237(popcornElectronDocumentPanelParam166, popcornElectronDocumentPanelValue551);
  popcornElectronDocumentPanelHelper238(popcornElectronDocumentPanelParam166, popcornElectronDocumentPanelValue551);
  popcornElectronDocumentPanelHelper239(popcornElectronDocumentPanelParam166, popcornElectronDocumentPanelValue551);
}
function to(popcornElectronDocumentPanelParam371, popcornElectronDocumentPanelParam372) {
  if (!popcornElectronDocumentPanelParam372.headerRow) return;
  let popcornElectronDocumentPanelValue762 = popcornElectronDocumentPanelParam371.cells.block({
    row: 0,
    column: 0,
    rowCount: 1,
    columnCount: popcornElectronDocumentPanelParam371.columnCount
  });
  popcornElectronDocumentPanelValue762.textStyle.bold = true;
  popcornElectronDocumentPanelValue762.borders = {
    bottom: popcornElectronDocumentPanelValue54
  };
}
function no(popcornElectronDocumentPanelParam358, popcornElectronDocumentPanelParam359) {
  if (!popcornElectronDocumentPanelParam359.totalRow) return;
  let popcornElectronDocumentPanelValue756 = popcornElectronDocumentPanelParam358.cells.block({
    row: popcornElectronDocumentPanelParam358.rowCount - 1,
    column: 0,
    rowCount: 1,
    columnCount: popcornElectronDocumentPanelParam358.columnCount
  });
  popcornElectronDocumentPanelValue756.textStyle.bold = true;
  popcornElectronDocumentPanelValue756.borders = {
    top: popcornElectronDocumentPanelValue54
  };
}
function popcornElectronDocumentPanelHelper237(popcornElectronDocumentPanelParam223, popcornElectronDocumentPanelParam224) {
  popcornElectronDocumentPanelParam224.firstColumn && (popcornElectronDocumentPanelParam223.cells.block({
    row: 0,
    column: 0,
    rowCount: popcornElectronDocumentPanelParam223.rowCount,
    columnCount: 1
  }).textStyle.bold = true);
  popcornElectronDocumentPanelParam224.lastColumn && (popcornElectronDocumentPanelParam223.cells.block({
    row: 0,
    column: popcornElectronDocumentPanelParam223.columnCount - 1,
    rowCount: popcornElectronDocumentPanelParam223.rowCount,
    columnCount: 1
  }).textStyle.bold = true);
}
function popcornElectronDocumentPanelHelper238(popcornElectronDocumentPanelParam236, popcornElectronDocumentPanelParam237) {
  if (!popcornElectronDocumentPanelParam237.bandedRows) return;
  let popcornElectronDocumentPanelValue632 = popcornElectronDocumentPanelParam237.headerRow ? 1 : 0,
    popcornElectronDocumentPanelValue633 = popcornElectronDocumentPanelParam237.totalRow ? popcornElectronDocumentPanelParam236.rowCount - 2 : popcornElectronDocumentPanelParam236.rowCount - 1;
  for (let popcornElectronDocumentPanelValue786 = popcornElectronDocumentPanelValue632; popcornElectronDocumentPanelValue786 <= popcornElectronDocumentPanelValue633; popcornElectronDocumentPanelValue786 += 1) (popcornElectronDocumentPanelValue786 - popcornElectronDocumentPanelValue632) % 2 == 0 && (popcornElectronDocumentPanelParam236.cells.block({
    row: popcornElectronDocumentPanelValue786,
    column: 0,
    rowCount: 1,
    columnCount: popcornElectronDocumentPanelParam236.columnCount
  }).fill = "#D9D9D9");
}
function popcornElectronDocumentPanelHelper239(popcornElectronDocumentPanelParam228, popcornElectronDocumentPanelParam229) {
  if (!popcornElectronDocumentPanelParam229.bandedColumns) return;
  let popcornElectronDocumentPanelValue621 = popcornElectronDocumentPanelParam229.firstColumn ? 1 : 0,
    popcornElectronDocumentPanelValue622 = popcornElectronDocumentPanelParam229.lastColumn ? popcornElectronDocumentPanelParam228.columnCount - 2 : popcornElectronDocumentPanelParam228.columnCount - 1;
  for (let popcornElectronDocumentPanelValue792 = popcornElectronDocumentPanelValue621; popcornElectronDocumentPanelValue792 <= popcornElectronDocumentPanelValue622; popcornElectronDocumentPanelValue792 += 1) (popcornElectronDocumentPanelValue792 - popcornElectronDocumentPanelValue621) % 2 == 0 && (popcornElectronDocumentPanelParam228.cells.block({
    row: 0,
    column: popcornElectronDocumentPanelValue792,
    rowCount: popcornElectronDocumentPanelParam228.rowCount,
    columnCount: 1
  }).fill = "#D9D9D9");
}
function popcornElectronDocumentPanelHelper240(popcornElectronDocumentPanelParam691) {
  if (!(popcornElectronDocumentPanelParam691 === undefined || !Number.isFinite(popcornElectronDocumentPanelParam691))) return popcornElectronDocumentPanelParam691;
}
function popcornElectronDocumentPanelHelper241(popcornElectronDocumentPanelParam654) {
  if (!(popcornElectronDocumentPanelParam654 === undefined || !Number.isFinite(popcornElectronDocumentPanelParam654) || popcornElectronDocumentPanelParam654 <= 0)) return popcornElectronDocumentPanelParam654;
}
function popcornElectronDocumentPanelHelper242(popcornElectronDocumentPanelParam399, popcornElectronDocumentPanelParam400 = {}) {
  let popcornElectronDocumentPanelValue782 = {
    left: popcornElectronDocumentPanelHelper240(popcornElectronDocumentPanelParam399.left),
    top: popcornElectronDocumentPanelHelper240(popcornElectronDocumentPanelParam399.top),
    width: popcornElectronDocumentPanelHelper241(popcornElectronDocumentPanelParam399.width),
    height: popcornElectronDocumentPanelHelper241(popcornElectronDocumentPanelParam399.height)
  };
  return popcornElectronDocumentPanelParam400.inline && (popcornElectronDocumentPanelValue782.left = undefined, popcornElectronDocumentPanelValue782.top = undefined), popcornElectronDocumentPanelValue782;
}
function popcornElectronDocumentPanelHelper243(popcornElectronDocumentPanelParam452, popcornElectronDocumentPanelParam453, popcornElectronDocumentPanelParam454) {
  let popcornElectronDocumentPanelValue824 = popcornElectronDocumentPanelHelper245(popcornElectronDocumentPanelParam453, popcornElectronDocumentPanelParam454);
  if (!(!popcornElectronDocumentPanelParam452 && !popcornElectronDocumentPanelHelper246(popcornElectronDocumentPanelValue824))) return {
    type: ___presentationN.ELEMENT_PLACEMENT_TYPE_INLINE,
    horizontalAlignment: popcornElectronDocumentPanelParam452,
    ...popcornElectronDocumentPanelValue824
  };
}
function popcornElectronDocumentPanelHelper244(popcornElectronDocumentPanelParam20, popcornElectronDocumentPanelParam21, popcornElectronDocumentPanelParam22) {
  if (popcornElectronDocumentPanelParam20?.wrap === "inline") return popcornElectronDocumentPanelHelper243(popcornElectronDocumentPanelParam20.alignment, popcornElectronDocumentPanelParam20, popcornElectronDocumentPanelParam22);
  let popcornElectronDocumentPanelValue318 = popcornElectronDocumentPanelParam21.left !== undefined || popcornElectronDocumentPanelParam21.top !== undefined,
    popcornElectronDocumentPanelValue319 = popcornElectronDocumentPanelParam22?.spaceBefore !== undefined || popcornElectronDocumentPanelParam22?.spaceAfter !== undefined;
  if (!popcornElectronDocumentPanelParam20?.wrap && !popcornElectronDocumentPanelValue318) return popcornElectronDocumentPanelValue319 ? popcornElectronDocumentPanelHelper243(undefined, popcornElectronDocumentPanelParam20, popcornElectronDocumentPanelParam22) : undefined;
  let popcornElectronDocumentPanelValue320 = popcornElectronDocumentPanelHelper247(popcornElectronDocumentPanelParam20, popcornElectronDocumentPanelParam22),
    popcornElectronDocumentPanelValue321 = popcornElectronDocumentPanelHelper248(popcornElectronDocumentPanelParam20, popcornElectronDocumentPanelParam22);
  return {
    type: ___presentationN.ELEMENT_PLACEMENT_TYPE_ANCHORED,
    anchorParagraphId: popcornElectronDocumentPanelParam20?.anchorParagraphId,
    horizontalRelativeFrom: popcornElectronDocumentPanelParam20?.horizontalRelativeFrom ?? "page",
    verticalRelativeFrom: popcornElectronDocumentPanelParam20?.verticalRelativeFrom ?? "page",
    xOffsetEmu: popcornElectronDocumentPanelParam21.left === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelParam21.left),
    yOffsetEmu: popcornElectronDocumentPanelParam21.top === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelParam21.top),
    horizontalAlignment: popcornElectronDocumentPanelParam21.left === undefined ? popcornElectronDocumentPanelParam20?.horizontalAlignment ?? popcornElectronDocumentPanelParam20?.alignment : popcornElectronDocumentPanelParam20?.horizontalAlignment,
    verticalAlignment: popcornElectronDocumentPanelParam20?.verticalAlignment,
    wrap: {
      type: popcornElectronDocumentPanelHelper249(popcornElectronDocumentPanelParam20?.wrap),
      side: popcornElectronDocumentPanelParam20?.wrapSide
    },
    distanceTopEmu: popcornElectronDocumentPanelValue320 === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue320),
    distanceBottomEmu: popcornElectronDocumentPanelValue321 === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue321),
    distanceLeftEmu: popcornElectronDocumentPanelParam20?.distanceLeft === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelParam20.distanceLeft),
    distanceRightEmu: popcornElectronDocumentPanelParam20?.distanceRight === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelParam20.distanceRight),
    behindDocument: popcornElectronDocumentPanelParam20?.behindDocument,
    layoutInCell: popcornElectronDocumentPanelParam20?.layoutInCell,
    allowOverlap: popcornElectronDocumentPanelParam20?.allowOverlap,
    relativeHeight: popcornElectronDocumentPanelParam20?.relativeHeight,
    locked: popcornElectronDocumentPanelParam20?.locked
  };
}
function popcornElectronDocumentPanelHelper245(popcornElectronDocumentPanelParam234, popcornElectronDocumentPanelParam235) {
  let popcornElectronDocumentPanelValue630 = popcornElectronDocumentPanelHelper247(popcornElectronDocumentPanelParam234, popcornElectronDocumentPanelParam235),
    popcornElectronDocumentPanelValue631 = popcornElectronDocumentPanelHelper248(popcornElectronDocumentPanelParam234, popcornElectronDocumentPanelParam235);
  return {
    distanceTopEmu: popcornElectronDocumentPanelValue630 === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue630),
    distanceBottomEmu: popcornElectronDocumentPanelValue631 === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue631),
    distanceLeftEmu: popcornElectronDocumentPanelParam234?.distanceLeft === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelParam234.distanceLeft),
    distanceRightEmu: popcornElectronDocumentPanelParam234?.distanceRight === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelParam234.distanceRight)
  };
}
function popcornElectronDocumentPanelHelper246(popcornElectronDocumentPanelParam446) {
  return popcornElectronDocumentPanelParam446.distanceTopEmu !== undefined || popcornElectronDocumentPanelParam446.distanceBottomEmu !== undefined || popcornElectronDocumentPanelParam446.distanceLeftEmu !== undefined || popcornElectronDocumentPanelParam446.distanceRightEmu !== undefined;
}
function popcornElectronDocumentPanelHelper247(popcornElectronDocumentPanelParam727, popcornElectronDocumentPanelParam728) {
  return popcornElectronDocumentPanelParam727?.distanceTop ?? popcornElectronDocumentPanelParam728?.spaceBefore;
}
function popcornElectronDocumentPanelHelper248(popcornElectronDocumentPanelParam723, popcornElectronDocumentPanelParam724) {
  return popcornElectronDocumentPanelParam723?.distanceBottom ?? popcornElectronDocumentPanelParam724?.spaceAfter;
}
function popcornElectronDocumentPanelHelper249(popcornElectronDocumentPanelParam268) {
  return popcornElectronDocumentPanelParam268 === "none" ? presentationFn.ELEMENT_WRAP_TYPE_NONE : popcornElectronDocumentPanelParam268 === "tight" ? presentationFn.ELEMENT_WRAP_TYPE_TIGHT : popcornElectronDocumentPanelParam268 === "through" ? presentationFn.ELEMENT_WRAP_TYPE_THROUGH : popcornElectronDocumentPanelParam268 === "topAndBottom" ? presentationFn.ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM : presentationFn.ELEMENT_WRAP_TYPE_SQUARE;
}
var _o = {
    headerRow: false,
    totalRow: false,
    firstColumn: false,
    lastColumn: false,
    bandedRows: false,
    bandedColumns: false
  },
  popcornElectronDocumentPanelValue57 = {
    left: 7.68,
    right: 7.68,
    top: 7.68,
    bottom: 7.68
  };
function popcornElectronDocumentPanelHelper250(popcornElectronDocumentPanelParam608) {
  return Object.fromEntries(Object.entries(popcornElectronDocumentPanelParam608).filter(([, popcornElectronDocumentPanelParam826]) => popcornElectronDocumentPanelParam826 !== undefined));
}
function popcornElectronDocumentPanelHelper251(popcornElectronDocumentPanelParam517) {
  return popcornElectronDocumentPanelParam517 ? popcornElectronDocumentPanelParam517.trim().toLowerCase().replace(/[^a-z0-9]+/g, "") === "tablegrid" : false;
}
var popcornElectronDocumentPanelValue58 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam801) {
      this.#e = popcornElectronDocumentPanelParam801;
    }
    add(popcornElectronDocumentPanelParam8) {
      if (Array.isArray(popcornElectronDocumentPanelParam8)) {
        let popcornElectronDocumentPanelValue960 = this.#e.add(popcornElectronDocumentPanelParam8);
        return popcornElectronDocumentPanelValue960.cellMargins = popcornElectronDocumentPanelValue57, popcornElectronDocumentPanelValue960;
      }
      let {
          position,
          style,
          columnWidths,
          cellMargins,
          keepTogether,
          ...rest
        } = popcornElectronDocumentPanelParam8,
        popcornElectronDocumentPanelValue266 = popcornElectronDocumentPanelHelper242({
          left: position?.left,
          top: position?.top,
          width: position?.width,
          height: position?.height
        }),
        popcornElectronDocumentPanelValue267 = popcornElectronDocumentPanelValue266.left !== undefined || popcornElectronDocumentPanelValue266.top !== undefined || popcornElectronDocumentPanelValue266.width !== undefined || popcornElectronDocumentPanelValue266.height !== undefined,
        popcornElectronDocumentPanelValue268 = {
          ...rest,
          left: popcornElectronDocumentPanelValue267 ? popcornElectronDocumentPanelValue266.left : undefined,
          top: popcornElectronDocumentPanelValue267 ? popcornElectronDocumentPanelValue266.top : undefined,
          width: popcornElectronDocumentPanelValue267 ? popcornElectronDocumentPanelValue266.width : undefined,
          height: popcornElectronDocumentPanelValue267 ? popcornElectronDocumentPanelValue266.height : undefined
        },
        popcornElectronDocumentPanelValue269 = this.#e.add(popcornElectronDocumentPanelValue268);
      popcornElectronDocumentPanelValue269.cellMargins = cellMargins ?? popcornElectronDocumentPanelValue57;
      popcornElectronDocumentPanelValue269.keepTogether = keepTogether;
      popcornElectronDocumentPanelValue269.placement = popcornElectronDocumentPanelHelper244(undefined, popcornElectronDocumentPanelValue266);
      let popcornElectronDocumentPanelValue270 = typeof style == "string" ? {
          preset: style
        } : style,
        popcornElectronDocumentPanelValue271 = popcornElectronDocumentPanelValue270?.preset;
      if (popcornElectronDocumentPanelValue270) {
        let {
            preset,
            ..._rest
          } = popcornElectronDocumentPanelValue270,
          popcornElectronDocumentPanelValue730 = popcornElectronDocumentPanelHelper204(preset),
          popcornElectronDocumentPanelValue731 = popcornElectronDocumentPanelHelper205(preset);
        popcornElectronDocumentPanelValue730 ? popcornElectronDocumentPanelValue269.styleId = popcornElectronDocumentPanelValue730 : popcornElectronDocumentPanelValue731 ? popcornElectronDocumentPanelValue269.styleId = popcornElectronDocumentPanelHelper210(popcornElectronDocumentPanelValue731) : preset && (popcornElectronDocumentPanelValue269.styleId = preset);
        popcornElectronDocumentPanelValue269.styleOptions = {
          ..._o,
          ...popcornElectronDocumentPanelHelper250(popcornElectronDocumentPanelValue269.styleOptions),
          ...popcornElectronDocumentPanelHelper250(_rest)
        };
      }
      popcornElectronDocumentPanelHelper251(popcornElectronDocumentPanelValue271) && popcornElectronDocumentPanelValue269.rowCount > 0 && popcornElectronDocumentPanelValue269.columnCount > 0 && popcornElectronDocumentPanelValue269.cells.block({
        row: 0,
        column: 0,
        rowCount: popcornElectronDocumentPanelValue269.rowCount,
        columnCount: popcornElectronDocumentPanelValue269.columnCount
      }).applyBorders({
        outside: {
          color: "#000000",
          width: 1,
          style: "solid"
        },
        inside: {
          color: "#000000",
          width: 1,
          style: "solid"
        }
      });
      let popcornElectronDocumentPanelValue272 = popcornElectronDocumentPanelHelper204(popcornElectronDocumentPanelValue271);
      return popcornElectronDocumentPanelValue272 && $a(popcornElectronDocumentPanelValue269, popcornElectronDocumentPanelValue272), columnWidths !== undefined && (popcornElectronDocumentPanelValue269.columnWidths = columnWidths), popcornElectronDocumentPanelValue269;
    }
  },
  popcornElectronDocumentPanelValue59 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam802) {
      this.#e = popcornElectronDocumentPanelParam802;
    }
    add(popcornElectronDocumentPanelParam329) {
      let popcornElectronDocumentPanelValue717 = popcornElectronDocumentPanelHelper252(popcornElectronDocumentPanelParam329),
        popcornElectronDocumentPanelValue718 = popcornElectronDocumentPanelHelper253(popcornElectronDocumentPanelParam329, popcornElectronDocumentPanelValue717),
        popcornElectronDocumentPanelValue719 = this.#e.add(popcornElectronDocumentPanelValue718);
      return popcornElectronDocumentPanelValue719.placement = popcornElectronDocumentPanelHelper244(popcornElectronDocumentPanelParam329.style, popcornElectronDocumentPanelValue717, {
        spaceBefore: popcornElectronDocumentPanelParam329.spaceBefore,
        spaceAfter: popcornElectronDocumentPanelParam329.spaceAfter
      }), popcornElectronDocumentPanelValue719;
    }
  };
function popcornElectronDocumentPanelHelper252(popcornElectronDocumentPanelParam330) {
  let popcornElectronDocumentPanelValue720 = popcornElectronDocumentPanelParam330.size,
    popcornElectronDocumentPanelValue721 = popcornElectronDocumentPanelParam330.position ?? {};
  return popcornElectronDocumentPanelHelper242({
    left: popcornElectronDocumentPanelValue721.left,
    top: popcornElectronDocumentPanelValue721.top,
    width: popcornElectronDocumentPanelValue721.width ?? popcornElectronDocumentPanelValue720?.width,
    height: popcornElectronDocumentPanelValue721.height ?? popcornElectronDocumentPanelValue720?.height
  }, {
    inline: popcornElectronDocumentPanelParam330.style?.wrap === "inline"
  });
}
function popcornElectronDocumentPanelHelper253(popcornElectronDocumentPanelParam219, popcornElectronDocumentPanelParam220) {
  let popcornElectronDocumentPanelValue594 = {
    alt: popcornElectronDocumentPanelParam219.alt,
    fit: popcornElectronDocumentPanelParam219.fit,
    position: popcornElectronDocumentPanelParam220,
    contentType: popcornElectronDocumentPanelParam219.contentType
  };
  return "blob" in popcornElectronDocumentPanelParam219 ? {
    ...popcornElectronDocumentPanelValue594,
    blob: popcornElectronDocumentPanelHelper254(popcornElectronDocumentPanelParam219.blob),
    contentType: popcornElectronDocumentPanelParam219.contentType
  } : "path" in popcornElectronDocumentPanelParam219 ? {
    ...popcornElectronDocumentPanelValue594,
    path: popcornElectronDocumentPanelParam219.path
  } : "dataUrl" in popcornElectronDocumentPanelParam219 ? {
    ...popcornElectronDocumentPanelValue594,
    dataUrl: popcornElectronDocumentPanelParam219.dataUrl
  } : "uri" in popcornElectronDocumentPanelParam219 ? {
    ...popcornElectronDocumentPanelValue594,
    uri: popcornElectronDocumentPanelParam219.uri
  } : {
    ...popcornElectronDocumentPanelValue594,
    prompt: popcornElectronDocumentPanelParam219.prompt
  };
}
function popcornElectronDocumentPanelHelper254(popcornElectronDocumentPanelParam307) {
  if (popcornElectronDocumentPanelParam307 instanceof ArrayBuffer) return popcornElectronDocumentPanelParam307;
  let popcornElectronDocumentPanelValue692 = popcornElectronDocumentPanelParam307.buffer;
  if (popcornElectronDocumentPanelValue692 instanceof ArrayBuffer && popcornElectronDocumentPanelParam307.byteOffset === 0 && popcornElectronDocumentPanelParam307.byteLength === popcornElectronDocumentPanelValue692.byteLength) return popcornElectronDocumentPanelValue692;
  let popcornElectronDocumentPanelValue693 = new Uint8Array(popcornElectronDocumentPanelParam307.byteLength);
  return popcornElectronDocumentPanelValue693.set(popcornElectronDocumentPanelParam307), popcornElectronDocumentPanelValue693.buffer;
}
var popcornElectronDocumentPanelValue60 = class {
  #e;
  constructor(popcornElectronDocumentPanelParam808) {
    this.#e = popcornElectronDocumentPanelParam808;
  }
  add(popcornElectronDocumentPanelParam209) {
    let popcornElectronDocumentPanelValue581 = popcornElectronDocumentPanelHelper255(popcornElectronDocumentPanelParam209),
      popcornElectronDocumentPanelValue582 = this.#e.add({
        geometry: popcornElectronDocumentPanelParam209.geometry,
        position: popcornElectronDocumentPanelValue581,
        adjustmentList: popcornElectronDocumentPanelParam209.adjustmentList,
        fill: popcornElectronDocumentPanelParam209.fill,
        line: popcornElectronDocumentPanelParam209.line
      });
    return popcornElectronDocumentPanelParam209.text !== undefined && (popcornElectronDocumentPanelValue582.text = popcornElectronDocumentPanelParam209.text), popcornElectronDocumentPanelValue582.placement = popcornElectronDocumentPanelHelper244(popcornElectronDocumentPanelParam209.style, popcornElectronDocumentPanelValue581, {
      spaceBefore: popcornElectronDocumentPanelParam209.spaceBefore,
      spaceAfter: popcornElectronDocumentPanelParam209.spaceAfter
    }), popcornElectronDocumentPanelValue582;
  }
};
function popcornElectronDocumentPanelHelper255(popcornElectronDocumentPanelParam284) {
  let popcornElectronDocumentPanelValue669 = popcornElectronDocumentPanelParam284.size,
    popcornElectronDocumentPanelValue670 = popcornElectronDocumentPanelParam284.position ?? {},
    popcornElectronDocumentPanelValue671 = {
      left: popcornElectronDocumentPanelValue670.left,
      top: popcornElectronDocumentPanelValue670.top,
      width: popcornElectronDocumentPanelValue670.width ?? popcornElectronDocumentPanelValue669?.width,
      height: popcornElectronDocumentPanelValue670.height ?? popcornElectronDocumentPanelValue669?.height
    };
  return popcornElectronDocumentPanelParam284.style?.wrap === "inline" && (popcornElectronDocumentPanelValue671.left = undefined, popcornElectronDocumentPanelValue671.top = undefined), popcornElectronDocumentPanelValue671;
}
var popcornElectronDocumentPanelValue61 = class {
  #e;
  constructor(popcornElectronDocumentPanelParam809) {
    this.#e = popcornElectronDocumentPanelParam809;
  }
  add(popcornElectronDocumentPanelParam163) {
    let popcornElectronDocumentPanelValue542 = popcornElectronDocumentPanelHelper256(popcornElectronDocumentPanelParam163),
      popcornElectronDocumentPanelValue543 = this.#e.add(popcornElectronDocumentPanelParam163.chartType, {
        ...popcornElectronDocumentPanelParam163.config,
        series: popcornElectronDocumentPanelHelper257(popcornElectronDocumentPanelParam163.config?.series),
        position: popcornElectronDocumentPanelValue542
      });
    popcornElectronDocumentPanelParam163.config?.chartLine === undefined && (popcornElectronDocumentPanelValue543.chartLine.visible = false);
    let popcornElectronDocumentPanelValue544 = popcornElectronDocumentPanelValue543.chart;
    return popcornElectronDocumentPanelValue544 && !popcornElectronDocumentPanelValue544.chartSpaceLine.isSet && (popcornElectronDocumentPanelValue544.chartSpaceLine.visible = false), popcornElectronDocumentPanelValue543.placement = popcornElectronDocumentPanelHelper244(popcornElectronDocumentPanelParam163.style, popcornElectronDocumentPanelValue542, {
      spaceBefore: popcornElectronDocumentPanelParam163.spaceBefore,
      spaceAfter: popcornElectronDocumentPanelParam163.spaceAfter
    }), popcornElectronDocumentPanelValue543;
  }
};
function popcornElectronDocumentPanelHelper256(popcornElectronDocumentPanelParam331) {
  let popcornElectronDocumentPanelValue722 = popcornElectronDocumentPanelParam331.size,
    popcornElectronDocumentPanelValue723 = popcornElectronDocumentPanelParam331.position ?? {};
  return popcornElectronDocumentPanelHelper242({
    left: popcornElectronDocumentPanelValue723.left,
    top: popcornElectronDocumentPanelValue723.top,
    width: popcornElectronDocumentPanelValue723.width ?? popcornElectronDocumentPanelValue722?.width,
    height: popcornElectronDocumentPanelValue723.height ?? popcornElectronDocumentPanelValue722?.height
  }, {
    inline: popcornElectronDocumentPanelParam331.style?.wrap === "inline"
  });
}
var popcornElectronDocumentPanelValue62 = [{
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        lighten: 0.8
      }
    }
  }, {
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        lighten: 0.6
      }
    }
  }, {
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        lighten: 0.4
      }
    }
  }, {
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        darken: 0.1
      }
    }
  }, {
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        darken: 0.25
      }
    }
  }, {
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        darken: 0.5
      }
    }
  }],
  popcornElectronDocumentPanelValue63 = [{
    style: "solid",
    width: 1,
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1"
      }
    }
  }, {
    style: "solid",
    width: 1,
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.1
        }
      }
    }
  }, {
    style: "solid",
    width: 1,
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.2
        }
      }
    }
  }, {
    style: "solid",
    width: 1,
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.3
        }
      }
    }
  }, {
    style: "solid",
    width: 1,
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.4
        }
      }
    }
  }, {
    style: "solid",
    width: 1,
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.5
        }
      }
    }
  }];
function popcornElectronDocumentPanelHelper257(popcornElectronDocumentPanelParam420) {
  if (popcornElectronDocumentPanelParam420) return popcornElectronDocumentPanelParam420.map((item, index) => item.fill || item.line || item.stroke ? {
    ...item
  } : {
    ...item,
    fill: popcornElectronDocumentPanelValue62[index % popcornElectronDocumentPanelValue62.length],
    line: popcornElectronDocumentPanelValue63[index % popcornElectronDocumentPanelValue63.length]
  });
}
var popcornElectronDocumentPanelValue64 = class extends popcornElectronDocumentPanelImport38 {
  constructor(popcornElectronDocumentPanelParam803, popcornElectronDocumentPanelParam804) {
    super(popcornElectronDocumentPanelParam803, popcornElectronDocumentPanelParam804);
  }
  get id() {
    return this.data.id;
  }
  toProto() {
    return super.toProto();
  }
};
function popcornElectronDocumentPanelHelper258(popcornElectronDocumentPanelParam568, popcornElectronDocumentPanelParam569) {
  let popcornElectronDocumentPanelValue923 = popcornElectronDocumentPanelParam568?.alignment ?? popcornElectronDocumentPanelParam569?.alignment;
  return popcornElectronDocumentPanelValue923 === undefined ? popcornElectronDocumentPanelParam569 : popcornElectronDocumentPanelImport8({
    alignment: popcornElectronDocumentPanelValue923
  }, popcornElectronDocumentPanelParam569);
}
var popcornElectronDocumentPanelValue65 = class {
    #e;
    constructor(popcornElectronDocumentPanelParam772 = []) {
      this.#e = new popcornElectronDocumentPanelImport13(popcornElectronDocumentPanelParam772);
    }
    resolveTextStyleByName(popcornElectronDocumentPanelParam659) {
      return this.#e.resolveByName(popcornElectronDocumentPanelParam659)?.textStyle;
    }
    resolveParagraphTextStyle(popcornElectronDocumentPanelParam489, popcornElectronDocumentPanelParam490) {
      let popcornElectronDocumentPanelValue866 = this.resolveParagraphStyleDefinition(popcornElectronDocumentPanelParam489.styleId)?.textStyle;
      return popcornElectronDocumentPanelImport8(popcornElectronDocumentPanelImport8(popcornElectronDocumentPanelParam489.textStyle, popcornElectronDocumentPanelValue866), popcornElectronDocumentPanelParam490);
    }
    resolveParagraphStyle(popcornElectronDocumentPanelParam497) {
      let popcornElectronDocumentPanelValue874 = this.resolveParagraphStyleDefinition(popcornElectronDocumentPanelParam497.styleId)?.paragraphStyle;
      return popcornElectronDocumentPanelImport11(popcornElectronDocumentPanelParam497.paragraphStyle, popcornElectronDocumentPanelValue874);
    }
    resolveRunTextStyle(popcornElectronDocumentPanelParam437, popcornElectronDocumentPanelParam438, popcornElectronDocumentPanelParam439) {
      let popcornElectronDocumentPanelValue815 = this.resolveParagraphStyleDefinition(popcornElectronDocumentPanelParam437.styleId)?.textStyle,
        popcornElectronDocumentPanelValue816 = popcornElectronDocumentPanelImport8(popcornElectronDocumentPanelHelper258(popcornElectronDocumentPanelParam437.textStyle, popcornElectronDocumentPanelValue815), popcornElectronDocumentPanelParam439);
      return popcornElectronDocumentPanelImport8(popcornElectronDocumentPanelParam438.textStyle, popcornElectronDocumentPanelValue816);
    }
    resolveParagraphStyleDefinition(popcornElectronDocumentPanelParam686) {
      return this.#e.resolve(popcornElectronDocumentPanelParam686);
    }
  },
  popcornElectronDocumentPanelValue66 = class PopcornElectronDocumentPanelClass1 {
    #e;
    #t;
    #n = [];
    #r = new Map();
    #i;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    constructor(popcornElectronDocumentPanelParam122) {
      this.#u = popcornElectronDocumentPanelParam122.context;
      this.#e = this.#d();
      let {
        bodyElement,
        remainingElements
      } = this.#v(popcornElectronDocumentPanelParam122.elements ?? []);
      this.#i = new popcornElectronDocumentPanelValue43(this.#e, bodyElement);
      this.#h(this.#i);
      let popcornElectronDocumentPanelValue485 = new popcornElectronDocumentPanelImport31(this.#e, []),
        popcornElectronDocumentPanelValue486 = new popcornElectronDocumentPanelImport36(this.#e, []),
        popcornElectronDocumentPanelValue487 = new popcornElectronDocumentPanelImport33(this.#e, []),
        popcornElectronDocumentPanelValue488 = new popcornElectronDocumentPanelImport24(this.#e, []);
      this.#c = new popcornElectronDocumentPanelValue60(popcornElectronDocumentPanelValue485);
      this.#s = new popcornElectronDocumentPanelValue59(popcornElectronDocumentPanelValue486);
      this.#o = new popcornElectronDocumentPanelValue58(popcornElectronDocumentPanelValue487);
      this.#l = new popcornElectronDocumentPanelValue61(popcornElectronDocumentPanelValue488);
      this.#a = new popcornElectronDocumentPanelValue44(this.#i.paragraphs);
      for (let popcornElectronDocumentPanelValue994 of remainingElements) this.#y(popcornElectronDocumentPanelValue994, popcornElectronDocumentPanelValue485, popcornElectronDocumentPanelValue486, popcornElectronDocumentPanelValue487, popcornElectronDocumentPanelValue488);
    }
    get text() {
      return this.#i.text;
    }
    get textElements() {
      return this.#n.map(item => this.#r.get(item)).filter(item => item instanceof popcornElectronDocumentPanelValue43);
    }
    getElementById(popcornElectronDocumentPanelParam739) {
      if (popcornElectronDocumentPanelParam739) return this.#r.get(popcornElectronDocumentPanelParam739);
    }
    removeElementById(popcornElectronDocumentPanelParam582) {
      return !popcornElectronDocumentPanelParam582 || popcornElectronDocumentPanelParam582 === this.#i.id || !this.#r.get(popcornElectronDocumentPanelParam582) ? false : (this.#_(popcornElectronDocumentPanelParam582), true);
    }
    resolveTextBlock(popcornElectronDocumentPanelParam269) {
      let popcornElectronDocumentPanelValue654 = popcornElectronDocumentPanelImport32(popcornElectronDocumentPanelParam269);
      if (popcornElectronDocumentPanelValue654) {
        let popcornElectronDocumentPanelValue890 = this.getElementById(popcornElectronDocumentPanelValue654.tableId);
        return popcornElectronDocumentPanelValue890 instanceof popcornElectronDocumentPanelImport35 ? popcornElectronDocumentPanelValue890.getCellById(popcornElectronDocumentPanelValue654.cellId)?.text ?? null : null;
      }
      let popcornElectronDocumentPanelValue655 = this.getElementById(popcornElectronDocumentPanelParam269);
      return popcornElectronDocumentPanelValue655 && (popcornElectronDocumentPanelValue655 instanceof popcornElectronDocumentPanelValue43 || "text" in popcornElectronDocumentPanelValue655) ? popcornElectronDocumentPanelValue655.text : null;
    }
    set text(popcornElectronDocumentPanelParam784) {
      this.#i.text.set(popcornElectronDocumentPanelParam784);
    }
    get paragraphs() {
      return this.#a;
    }
    startParagraphBlock(popcornElectronDocumentPanelParam387 = false) {
      if (!popcornElectronDocumentPanelParam387 && this.#n.length === 1 && this.#n[0] === this.#i.id) return this.#a;
      let popcornElectronDocumentPanelValue770 = new popcornElectronDocumentPanelValue43(this.#e);
      return this.#g(popcornElectronDocumentPanelValue770), new popcornElectronDocumentPanelValue44(popcornElectronDocumentPanelValue770.paragraphs);
    }
    get tables() {
      return this.#o;
    }
    get images() {
      return this.#s;
    }
    get shapes() {
      return this.#c;
    }
    get charts() {
      return this.#l;
    }
    createChildBody(popcornElectronDocumentPanelParam645 = []) {
      return new PopcornElectronDocumentPanelClass1({
        elements: popcornElectronDocumentPanelParam645,
        context: this.#u
      });
    }
    addGroup(popcornElectronDocumentPanelParam58) {
      let popcornElectronDocumentPanelValue376 = popcornElectronDocumentPanelHelper242({
          left: popcornElectronDocumentPanelParam58.position?.left,
          top: popcornElectronDocumentPanelParam58.position?.top,
          width: popcornElectronDocumentPanelParam58.position?.width ?? popcornElectronDocumentPanelParam58.size?.width,
          height: popcornElectronDocumentPanelParam58.position?.height ?? popcornElectronDocumentPanelParam58.size?.height
        }, {
          inline: popcornElectronDocumentPanelParam58.style?.wrap === "inline"
        }),
        popcornElectronDocumentPanelValue377 = new popcornElectronDocumentPanelValue64(this.#e, {
          id: popcornElectronDocumentPanelParam58.id,
          name: popcornElectronDocumentPanelParam58.name ?? "",
          type: presentationWt.ELEMENT_TYPE_GROUP,
          children: popcornElectronDocumentPanelParam58.children,
          bbox: {
            xEmu: popcornElectronDocumentPanelValue376.left === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue376.left),
            yEmu: popcornElectronDocumentPanelValue376.top === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue376.top),
            widthEmu: popcornElectronDocumentPanelValue376.width === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue376.width),
            heightEmu: popcornElectronDocumentPanelValue376.height === undefined ? undefined : popcornElectronDocumentPanelImport9(popcornElectronDocumentPanelValue376.height)
          }
        });
      return popcornElectronDocumentPanelValue377.placement = popcornElectronDocumentPanelHelper244(popcornElectronDocumentPanelParam58.style, popcornElectronDocumentPanelValue376, {
        spaceBefore: popcornElectronDocumentPanelParam58.spaceBefore,
        spaceAfter: popcornElectronDocumentPanelParam58.spaceAfter
      }), this.#g(popcornElectronDocumentPanelValue377), popcornElectronDocumentPanelValue377;
    }
    get textElementId() {
      return this.#i.id;
    }
    toProto() {
      return this.#n.map(item => this.#r.get(item)).filter(item => !!item).map(item => (item instanceof popcornElectronDocumentPanelValue43, item.toProto()));
    }
    #d() {
      return {
        stub: () => {},
        getTextStyleByName: popcornElectronDocumentPanelParam836 => this.#p(popcornElectronDocumentPanelParam836),
        getListPresetProfile: () => "document",
        onElementMutated: () => this.#u.invalidateLayout(),
        getExistingElementIds: () => this.#u.getExistingElementIds(),
        getResolvedParagraphTextStyle: (popcornElectronDocumentPanelParam440, popcornElectronDocumentPanelParam441) => {
          let popcornElectronDocumentPanelValue817 = this.#m().resolveParagraphTextStyle(popcornElectronDocumentPanelParam440.toProto(), popcornElectronDocumentPanelParam441?.toProto());
          return popcornElectronDocumentPanelValue817 ? new popcornElectronDocumentPanelImport20(popcornElectronDocumentPanelValue817) : undefined;
        },
        getResolvedParagraphStyle: popcornElectronDocumentPanelParam740 => this.#m().resolveParagraphStyle(popcornElectronDocumentPanelParam740.toProto()),
        getResolvedRunTextStyle: (popcornElectronDocumentPanelParam395, popcornElectronDocumentPanelParam396, popcornElectronDocumentPanelParam397) => {
          let popcornElectronDocumentPanelValue779 = this.#m().resolveRunTextStyle(popcornElectronDocumentPanelParam395.toProto(), popcornElectronDocumentPanelParam396.toProto(), popcornElectronDocumentPanelParam397?.toProto());
          return popcornElectronDocumentPanelValue779 ? new popcornElectronDocumentPanelImport20(popcornElectronDocumentPanelValue779) : undefined;
        },
        getSlide: () => this.#f(),
        getImageById: popcornElectronDocumentPanelParam815 => this.#u.images.getById(popcornElectronDocumentPanelParam815),
        createImageAsset: popcornElectronDocumentPanelParam818 => this.#u.images.add(popcornElectronDocumentPanelParam818),
        getChartById: popcornElectronDocumentPanelParam816 => this.#u.charts.getById(popcornElectronDocumentPanelParam816),
        createChartAsset: popcornElectronDocumentPanelParam819 => this.#u.charts.add(popcornElectronDocumentPanelParam819),
        attachChartAsset: popcornElectronDocumentPanelParam817 => this.#u.charts.attach(popcornElectronDocumentPanelParam817),
        _register: (popcornElectronDocumentPanelParam827, popcornElectronDocumentPanelParam828) => this.#g(popcornElectronDocumentPanelParam827, popcornElectronDocumentPanelParam828),
        _unregister: popcornElectronDocumentPanelParam837 => this.#_(popcornElectronDocumentPanelParam837)
      };
    }
    #f() {
      if (this.#t) return this.#t;
      let popcornElectronDocumentPanelValue686 = () => [...this.#r.values()],
        popcornElectronDocumentPanelValue687 = {
          id: undefined,
          elements: {
            get items() {
              return popcornElectronDocumentPanelValue686();
            }
          }
        };
      return this.#t = popcornElectronDocumentPanelValue687, popcornElectronDocumentPanelValue687;
    }
    #p(popcornElectronDocumentPanelParam620) {
      let popcornElectronDocumentPanelValue951 = this.#m().resolveTextStyleByName(popcornElectronDocumentPanelParam620);
      if (popcornElectronDocumentPanelValue951) return new popcornElectronDocumentPanelImport20(popcornElectronDocumentPanelValue951);
    }
    #m() {
      return new popcornElectronDocumentPanelValue65(this.#u.readTextStyleDefinitions());
    }
    #h(popcornElectronDocumentPanelParam570) {
      this.#u.registerElementId(popcornElectronDocumentPanelParam570.id);
      this.#r.set(popcornElectronDocumentPanelParam570.id, popcornElectronDocumentPanelParam570);
      this.#n = [popcornElectronDocumentPanelParam570.id];
    }
    #g(popcornElectronDocumentPanelParam214, popcornElectronDocumentPanelParam215) {
      let popcornElectronDocumentPanelValue583 = popcornElectronDocumentPanelParam214.id;
      if (!popcornElectronDocumentPanelValue583) return;
      this.#u.registerElementId(popcornElectronDocumentPanelValue583);
      this.#r.set(popcornElectronDocumentPanelValue583, popcornElectronDocumentPanelParam214);
      let popcornElectronDocumentPanelValue584 = this.#n.indexOf(popcornElectronDocumentPanelValue583);
      popcornElectronDocumentPanelValue584 >= 0 && this.#n.splice(popcornElectronDocumentPanelValue584, 1);
      let popcornElectronDocumentPanelValue585 = this.#n.indexOf(this.#i.id),
        popcornElectronDocumentPanelValue586 = popcornElectronDocumentPanelValue585 >= 0 ? popcornElectronDocumentPanelValue585 + 1 : 0,
        popcornElectronDocumentPanelValue587 = popcornElectronDocumentPanelParam215?.index ?? this.#n.length,
        popcornElectronDocumentPanelValue588 = Math.max(popcornElectronDocumentPanelValue586, popcornElectronDocumentPanelValue587);
      this.#n.splice(popcornElectronDocumentPanelValue588, 0, popcornElectronDocumentPanelValue583);
      this.#u.invalidateLayout();
    }
    #_(popcornElectronDocumentPanelParam514) {
      this.#r.delete(popcornElectronDocumentPanelParam514);
      let popcornElectronDocumentPanelValue882 = this.#n.indexOf(popcornElectronDocumentPanelParam514);
      popcornElectronDocumentPanelValue882 >= 0 && this.#n.splice(popcornElectronDocumentPanelValue882, 1);
      this.#u.invalidateLayout();
    }
    #v(popcornElectronDocumentPanelParam264) {
      let popcornElectronDocumentPanelValue650 = popcornElectronDocumentPanelParam264.findIndex(item => item.type === presentationWt.ELEMENT_TYPE_TEXT || item.type === presentationWt.ELEMENT_TYPE_TEXT_GROUP);
      return popcornElectronDocumentPanelValue650 >= 0 ? {
        bodyElement: popcornElectronDocumentPanelParam264[popcornElectronDocumentPanelValue650],
        remainingElements: popcornElectronDocumentPanelParam264.filter((item, index) => index !== popcornElectronDocumentPanelValue650)
      } : {
        bodyElement: undefined,
        remainingElements: popcornElectronDocumentPanelParam264
      };
    }
    #y(popcornElectronDocumentPanelParam45, popcornElectronDocumentPanelParam46, popcornElectronDocumentPanelParam47, popcornElectronDocumentPanelParam48, popcornElectronDocumentPanelParam49) {
      if (popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_TEXT || popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_TEXT_GROUP) {
        let popcornElectronDocumentPanelValue963 = new popcornElectronDocumentPanelValue43(this.#e, popcornElectronDocumentPanelParam45);
        this.#g(popcornElectronDocumentPanelValue963);
        return;
      }
      if (popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_TABLE || popcornElectronDocumentPanelParam45.table) {
        popcornElectronDocumentPanelParam48.add({
          proto: popcornElectronDocumentPanelParam45
        });
        return;
      }
      if (popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_CHART || popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_CHART_REFERENCE || popcornElectronDocumentPanelParam45.chartReference) {
        popcornElectronDocumentPanelParam49.add({
          proto: popcornElectronDocumentPanelParam45
        });
        return;
      }
      if (popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_IMAGE || popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_IMAGE_REFERENCE || popcornElectronDocumentPanelParam45.imageReference) {
        popcornElectronDocumentPanelParam47.add({
          proto: popcornElectronDocumentPanelParam45
        });
        return;
      }
      if (popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_SHAPE || popcornElectronDocumentPanelParam45.shape !== undefined) {
        popcornElectronDocumentPanelParam46.add({
          proto: popcornElectronDocumentPanelParam45
        });
        return;
      }
      (popcornElectronDocumentPanelParam45.type === presentationWt.ELEMENT_TYPE_GROUP || (popcornElectronDocumentPanelParam45.children?.length ?? 0) > 0) && this.#g(new popcornElectronDocumentPanelValue64(this.#e, popcornElectronDocumentPanelParam45));
    }
  };
function popcornElectronDocumentPanelHelper259(popcornElectronDocumentPanelParam401) {
  if (!popcornElectronDocumentPanelParam401) return;
  let popcornElectronDocumentPanelValue783 = popcornElectronDocumentPanelParam401.pageNumbers ? {
    ...popcornElectronDocumentPanelParam401.pageNumbers
  } : undefined;
  return {
    ...popcornElectronDocumentPanelParam401,
    pageMargin: popcornElectronDocumentPanelParam401.pageMargin ? {
      ...popcornElectronDocumentPanelParam401.pageMargin
    } : undefined,
    pageNumbers: popcornElectronDocumentPanelValue783
  };
}
function popcornElectronDocumentPanelHelper260(popcornElectronDocumentPanelParam687) {
  if (popcornElectronDocumentPanelParam687) return {
    ...popcornElectronDocumentPanelParam687,
    widths: [...(popcornElectronDocumentPanelParam687.widths ?? [])]
  };
}
function popcornElectronDocumentPanelHelper261(popcornElectronDocumentPanelParam787) {
  if (popcornElectronDocumentPanelParam787) return {
    ...popcornElectronDocumentPanelParam787
  };
}
function popcornElectronDocumentPanelHelper262(popcornElectronDocumentPanelParam449) {
  let popcornElectronDocumentPanelValue823 = popcornElectronDocumentPanelParam449.paragraphs ?? [];
  for (let popcornElectronDocumentPanelValue926 of popcornElectronDocumentPanelValue823) {
    let popcornElectronDocumentPanelValue952 = popcornElectronDocumentPanelValue926.runs ?? [];
    for (let popcornElectronDocumentPanelValue982 of popcornElectronDocumentPanelValue952) if ((popcornElectronDocumentPanelValue982.text ?? "").length > 0) return true;
  }
  return false;
}
function popcornElectronDocumentPanelHelper263(popcornElectronDocumentPanelParam380) {
  for (let popcornElectronDocumentPanelValue825 of popcornElectronDocumentPanelParam380) if (popcornElectronDocumentPanelValue825 && (!(popcornElectronDocumentPanelValue825.type === presentationWt.ELEMENT_TYPE_TEXT || popcornElectronDocumentPanelValue825.type === presentationWt.ELEMENT_TYPE_TEXT_GROUP) || popcornElectronDocumentPanelHelper262(popcornElectronDocumentPanelValue825))) return true;
  return false;
}
var popcornElectronDocumentPanelValue67 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    #d;
    #f;
    #p;
    #m;
    #h;
    #g;
    #_;
    #v;
    constructor(popcornElectronDocumentPanelParam24) {
      let popcornElectronDocumentPanelValue325 = popcornElectronDocumentPanelParam24.section;
      this.#m = popcornElectronDocumentPanelParam24.context;
      this.#e = popcornElectronDocumentPanelValue325?.id || popcornElectronDocumentPanelParam24.defaultId;
      this.#t = popcornElectronDocumentPanelValue325?.breakType ?? documentW.SECTION_BREAK_TYPE_UNSPECIFIED;
      this.#n = popcornElectronDocumentPanelHelper259(popcornElectronDocumentPanelValue325?.pageSetup);
      this.#r = popcornElectronDocumentPanelHelper260(popcornElectronDocumentPanelValue325?.columns);
      this.#h = popcornElectronDocumentPanelValue325?.startsWithPageBreak ?? false;
      this.#g = popcornElectronDocumentPanelValue325?.pageNumberStart;
      this.#_ = popcornElectronDocumentPanelValue325?.pageNumberFormat;
      this.#v = popcornElectronDocumentPanelHelper261(popcornElectronDocumentPanelValue325?.documentGrid);
      this.#p = popcornElectronDocumentPanelValue325?.differentFirstPage ?? false;
      this.#i = new popcornElectronDocumentPanelValue66({
        elements: popcornElectronDocumentPanelValue325?.elements ?? popcornElectronDocumentPanelParam24.fallbackElements ?? [],
        context: popcornElectronDocumentPanelParam24.context
      });
      this.#a = new popcornElectronDocumentPanelValue66({
        elements: popcornElectronDocumentPanelValue325?.header?.elements ?? [],
        context: popcornElectronDocumentPanelParam24.context
      });
      this.#o = new popcornElectronDocumentPanelValue66({
        elements: popcornElectronDocumentPanelValue325?.footer?.elements ?? [],
        context: popcornElectronDocumentPanelParam24.context
      });
      this.#s = new popcornElectronDocumentPanelValue66({
        elements: popcornElectronDocumentPanelValue325?.firstHeader?.elements ?? [],
        context: popcornElectronDocumentPanelParam24.context
      });
      this.#c = new popcornElectronDocumentPanelValue66({
        elements: popcornElectronDocumentPanelValue325?.firstFooter?.elements ?? [],
        context: popcornElectronDocumentPanelParam24.context
      });
      this.#l = !!popcornElectronDocumentPanelValue325?.header;
      this.#u = !!popcornElectronDocumentPanelValue325?.footer;
      this.#d = !!popcornElectronDocumentPanelValue325?.firstHeader;
      this.#f = !!popcornElectronDocumentPanelValue325?.firstFooter;
    }
    get id() {
      return this.#e;
    }
    get breakType() {
      return this.#t;
    }
    set breakType(popcornElectronDocumentPanelParam688) {
      this.#t = popcornElectronDocumentPanelParam688;
      this.#m.invalidateLayout();
    }
    get body() {
      return this.#i;
    }
    get pageSetup() {
      return this.#n ? popcornElectronDocumentPanelHelper259(this.#n) : undefined;
    }
    set pageSetup(popcornElectronDocumentPanelParam671) {
      this.#n = popcornElectronDocumentPanelHelper259(popcornElectronDocumentPanelParam671);
      this.#m.invalidateLayout();
    }
    get columns() {
      return this.#r ? popcornElectronDocumentPanelHelper260(this.#r) : undefined;
    }
    set columns(popcornElectronDocumentPanelParam682) {
      this.#r = popcornElectronDocumentPanelHelper260(popcornElectronDocumentPanelParam682);
      this.#m.invalidateLayout();
    }
    get header() {
      return this.#l = true, this.#a;
    }
    get footer() {
      return this.#u = true, this.#o;
    }
    get firstHeader() {
      return this.#d = true, this.#s;
    }
    get firstFooter() {
      return this.#f = true, this.#c;
    }
    get differentFirstPage() {
      return this.#p;
    }
    set differentFirstPage(popcornElectronDocumentPanelParam655) {
      this.#p = popcornElectronDocumentPanelParam655;
      this.#m.invalidateLayout();
    }
    get startsWithPageBreak() {
      return this.#h;
    }
    set startsWithPageBreak(popcornElectronDocumentPanelParam648) {
      this.#h = popcornElectronDocumentPanelParam648;
      this.#m.invalidateLayout();
    }
    get pageNumberStart() {
      return this.#g;
    }
    set pageNumberStart(popcornElectronDocumentPanelParam666) {
      this.#g = popcornElectronDocumentPanelParam666;
      this.#m.invalidateLayout();
    }
    get pageNumberFormat() {
      return this.#_;
    }
    set pageNumberFormat(popcornElectronDocumentPanelParam661) {
      this.#_ = popcornElectronDocumentPanelParam661;
      this.#m.invalidateLayout();
    }
    get documentGrid() {
      return popcornElectronDocumentPanelHelper261(this.#v);
    }
    set documentGrid(popcornElectronDocumentPanelParam662) {
      this.#v = popcornElectronDocumentPanelHelper261(popcornElectronDocumentPanelParam662);
      this.#m.invalidateLayout();
    }
    clearHeader() {
      this.#l = false;
      this.#m.invalidateLayout();
    }
    clearFooter() {
      this.#u = false;
      this.#m.invalidateLayout();
    }
    toProto() {
      let popcornElectronDocumentPanelValue390 = {
          id: this.#e,
          breakType: this.#t,
          pageSetup: popcornElectronDocumentPanelHelper259(this.#n),
          columns: popcornElectronDocumentPanelHelper260(this.#r),
          elements: this.#i.toProto(),
          header: undefined,
          footer: undefined,
          startsWithPageBreak: this.#h,
          pageNumberStart: this.#g,
          pageNumberFormat: this.#_,
          differentFirstPage: this.#p || undefined,
          firstHeader: undefined,
          firstFooter: undefined,
          documentGrid: popcornElectronDocumentPanelHelper261(this.#v)
        },
        popcornElectronDocumentPanelValue391 = this.#a.toProto();
      this.#l && popcornElectronDocumentPanelHelper263(popcornElectronDocumentPanelValue391) && (popcornElectronDocumentPanelValue390.header = this.#y(popcornElectronDocumentPanelValue391));
      let popcornElectronDocumentPanelValue392 = this.#o.toProto();
      this.#u && popcornElectronDocumentPanelHelper263(popcornElectronDocumentPanelValue392) && (popcornElectronDocumentPanelValue390.footer = this.#y(popcornElectronDocumentPanelValue392));
      let popcornElectronDocumentPanelValue393 = this.#s.toProto();
      this.#d && popcornElectronDocumentPanelHelper263(popcornElectronDocumentPanelValue393) && (popcornElectronDocumentPanelValue390.firstHeader = this.#y(popcornElectronDocumentPanelValue393));
      let popcornElectronDocumentPanelValue394 = this.#c.toProto();
      return this.#f && popcornElectronDocumentPanelHelper263(popcornElectronDocumentPanelValue394) && (popcornElectronDocumentPanelValue390.firstFooter = this.#y(popcornElectronDocumentPanelValue394)), popcornElectronDocumentPanelValue390;
    }
    #y(popcornElectronDocumentPanelParam792) {
      return {
        elements: popcornElectronDocumentPanelParam792
      };
    }
  },
  popcornElectronDocumentPanelValue68 = class {
    #e = [];
    #t;
    #n;
    constructor(popcornElectronDocumentPanelParam123) {
      this.#n = popcornElectronDocumentPanelParam123.context;
      let popcornElectronDocumentPanelValue489 = popcornElectronDocumentPanelParam123.sections ?? [];
      popcornElectronDocumentPanelValue489.length > 0 ? this.#e = popcornElectronDocumentPanelValue489.map((item, index) => new popcornElectronDocumentPanelValue67({
        section: item,
        context: this.#n,
        defaultId: `doc-section-${index + 1}`
      })) : this.#e = [new popcornElectronDocumentPanelValue67({
        fallbackElements: popcornElectronDocumentPanelParam123.fallbackElements ?? [],
        context: this.#n,
        defaultId: "doc-section-1"
      })];
      this.#t = this.#e.length + 1;
    }
    get items() {
      return [...this.#e];
    }
    get first() {
      return this.#e[0];
    }
    add(popcornElectronDocumentPanelParam90 = {}) {
      let popcornElectronDocumentPanelValue439 = {
          id: popcornElectronDocumentPanelParam90.id || this.#r(),
          breakType: popcornElectronDocumentPanelParam90.breakType ?? documentW.SECTION_BREAK_TYPE_UNSPECIFIED,
          pageSetup: popcornElectronDocumentPanelParam90.pageSetup,
          columns: popcornElectronDocumentPanelParam90.columns,
          elements: popcornElectronDocumentPanelParam90.elements ?? [],
          header: popcornElectronDocumentPanelParam90.header,
          footer: popcornElectronDocumentPanelParam90.footer,
          differentFirstPage: popcornElectronDocumentPanelParam90.differentFirstPage,
          firstHeader: popcornElectronDocumentPanelParam90.firstHeader,
          firstFooter: popcornElectronDocumentPanelParam90.firstFooter,
          startsWithPageBreak: popcornElectronDocumentPanelParam90.startsWithPageBreak ?? false,
          pageNumberStart: popcornElectronDocumentPanelParam90.pageNumberStart,
          pageNumberFormat: popcornElectronDocumentPanelParam90.pageNumberFormat
        },
        popcornElectronDocumentPanelValue440 = new popcornElectronDocumentPanelValue67({
          section: popcornElectronDocumentPanelValue439,
          context: this.#n,
          defaultId: popcornElectronDocumentPanelValue439.id
        });
      return this.#e.push(popcornElectronDocumentPanelValue440), this.#n.invalidateLayout(), popcornElectronDocumentPanelValue440;
    }
    toProto() {
      return this.#e.map(item => item.toProto());
    }
    #r() {
      let popcornElectronDocumentPanelValue958 = `doc-section-${this.#t}`;
      return this.#t += 1, popcornElectronDocumentPanelValue958;
    }
  };
function popcornElectronDocumentPanelHelper264(popcornElectronDocumentPanelParam389) {
  return popcornElectronDocumentPanelParam389.numberingFormat === undefined && popcornElectronDocumentPanelParam389.defaultNoteIds.length === 0 && popcornElectronDocumentPanelParam389.numberingStart === undefined && popcornElectronDocumentPanelParam389.numberingRestart === undefined && popcornElectronDocumentPanelParam389.position === undefined;
}
var popcornElectronDocumentPanelValue69 = class {
    #e;
    #t;
    constructor(popcornElectronDocumentPanelParam626, popcornElectronDocumentPanelParam627) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam626 ?? {
        defaultNoteIds: []
      });
      this.#t = popcornElectronDocumentPanelParam627;
    }
    get numberingFormat() {
      return this.#e.numberingFormat;
    }
    set numberingFormat(popcornElectronDocumentPanelParam663) {
      this.#e.numberingFormat = popcornElectronDocumentPanelParam663;
      this.#t?.();
    }
    get defaultNoteIds() {
      return [...(this.#e.defaultNoteIds ?? [])];
    }
    set defaultNoteIds(popcornElectronDocumentPanelParam649) {
      this.#e.defaultNoteIds = [...popcornElectronDocumentPanelParam649];
      this.#t?.();
    }
    get numberingStart() {
      return this.#e.numberingStart;
    }
    set numberingStart(popcornElectronDocumentPanelParam667) {
      this.#e.numberingStart = popcornElectronDocumentPanelParam667;
      this.#t?.();
    }
    get numberingRestart() {
      return this.#e.numberingRestart;
    }
    set numberingRestart(popcornElectronDocumentPanelParam656) {
      this.#e.numberingRestart = popcornElectronDocumentPanelParam656;
      this.#t?.();
    }
    get position() {
      return this.#e.position;
    }
    set position(popcornElectronDocumentPanelParam713) {
      this.#e.position = popcornElectronDocumentPanelParam713;
      this.#t?.();
    }
    replace(popcornElectronDocumentPanelParam660) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam660 ?? {
        defaultNoteIds: []
      });
      this.#t?.();
    }
    toProto() {
      return popcornElectronDocumentPanelHelper264(this.#e) ? undefined : popcornElectronDocumentPanelHelper10(this.#e);
    }
  },
  popcornElectronDocumentPanelValue70 = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    constructor(popcornElectronDocumentPanelParam634, popcornElectronDocumentPanelParam635 = {}) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam634 ?? {});
      this.#i = popcornElectronDocumentPanelParam635.onMutated;
    }
    get defaultTabStop() {
      return this.#e.defaultTabStop;
    }
    set defaultTabStop(popcornElectronDocumentPanelParam668) {
      this.#e.defaultTabStop = popcornElectronDocumentPanelParam668;
      this.#i?.();
    }
    get autoHyphenation() {
      return this.#e.autoHyphenation;
    }
    set autoHyphenation(popcornElectronDocumentPanelParam664) {
      this.#e.autoHyphenation = popcornElectronDocumentPanelParam664;
      this.#i?.();
    }
    get mirrorMargins() {
      return this.#e.mirrorMargins;
    }
    set mirrorMargins(popcornElectronDocumentPanelParam677) {
      this.#e.mirrorMargins = popcornElectronDocumentPanelParam677;
      this.#i?.();
    }
    get displayBackgroundShape() {
      return this.#e.displayBackgroundShape;
    }
    set displayBackgroundShape(popcornElectronDocumentPanelParam613) {
      this.#e.displayBackgroundShape = popcornElectronDocumentPanelParam613;
      this.#i?.();
    }
    get backgroundFill() {
      return this.#r ||= new popcornElectronDocumentPanelImport21({
        type: "proto",
        proto: this.#e.backgroundFill
      }), this.#r;
    }
    set backgroundFill(popcornElectronDocumentPanelParam498) {
      this.#r = popcornElectronDocumentPanelParam498 === undefined ? undefined : new popcornElectronDocumentPanelImport21(popcornElectronDocumentPanelParam498);
      this.#e.backgroundFill = undefined;
      this.#i?.();
    }
    clearBackgroundFill() {
      this.#r = undefined;
      this.#e.backgroundFill = undefined;
      this.#i?.();
    }
    resolveRenderBackgroundFill() {
      return this.#r ? this.#r.toProto() : this.#e.backgroundFill;
    }
    get footnoteProperties() {
      return this.#t ||= new popcornElectronDocumentPanelValue69(this.#e.footnoteProperties, this.#i), this.#t;
    }
    get endnoteProperties() {
      return this.#n ||= new popcornElectronDocumentPanelValue69(this.#e.endnoteProperties, this.#i), this.#n;
    }
    clearFootnoteProperties() {
      this.#t = undefined;
      this.#e.footnoteProperties = undefined;
      this.#i?.();
    }
    clearEndnoteProperties() {
      this.#n = undefined;
      this.#e.endnoteProperties = undefined;
      this.#i?.();
    }
    replace(popcornElectronDocumentPanelParam486) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam486 ?? {});
      this.#t = undefined;
      this.#n = undefined;
      this.#r = undefined;
      this.#i?.();
    }
    toProto() {
      let popcornElectronDocumentPanelValue435 = this.#t?.toProto(),
        popcornElectronDocumentPanelValue436 = this.#n?.toProto(),
        popcornElectronDocumentPanelValue437 = this.#r?.toProto(),
        popcornElectronDocumentPanelValue438 = {
          ...popcornElectronDocumentPanelHelper10(this.#e),
          footnoteProperties: this.#t ? popcornElectronDocumentPanelValue435 : this.#e.footnoteProperties,
          endnoteProperties: this.#n ? popcornElectronDocumentPanelValue436 : this.#e.endnoteProperties,
          backgroundFill: this.#r ? popcornElectronDocumentPanelValue437 : this.#e.backgroundFill
        };
      if (!(popcornElectronDocumentPanelValue438.defaultTabStop === undefined && popcornElectronDocumentPanelValue438.autoHyphenation === undefined && popcornElectronDocumentPanelValue438.mirrorMargins === undefined && popcornElectronDocumentPanelValue438.displayBackgroundShape === undefined && popcornElectronDocumentPanelValue438.footnoteProperties === undefined && popcornElectronDocumentPanelValue438.endnoteProperties === undefined && popcornElectronDocumentPanelValue438.backgroundFill === undefined)) return popcornElectronDocumentPanelValue438;
    }
  };
function popcornElectronDocumentPanelHelper265(popcornElectronDocumentPanelParam601) {
  if (!popcornElectronDocumentPanelParam601) return;
  let popcornElectronDocumentPanelValue938 = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam601);
  return popcornElectronDocumentPanelValue938.tabStops = popcornElectronDocumentPanelValue938.tabStops ?? [], popcornElectronDocumentPanelValue938;
}
function popcornElectronDocumentPanelHelper266(popcornElectronDocumentPanelParam222) {
  return {
    ...popcornElectronDocumentPanelParam222,
    wholeTable: popcornElectronDocumentPanelParam222.wholeTable ? {
      ...popcornElectronDocumentPanelParam222.wholeTable,
      paragraphStyle: popcornElectronDocumentPanelHelper265(popcornElectronDocumentPanelParam222.wholeTable.paragraphStyle)
    } : undefined,
    conditionalStyles: (popcornElectronDocumentPanelParam222.conditionalStyles ?? []).map(item => ({
      ...item,
      style: item.style ? {
        ...item.style,
        paragraphStyle: popcornElectronDocumentPanelHelper265(item.style.paragraphStyle)
      } : undefined
    }))
  };
}
var popcornElectronDocumentPanelValue71 = class {
  #e;
  #t;
  constructor(popcornElectronDocumentPanelParam629 = [], popcornElectronDocumentPanelParam630 = {}) {
    this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam629).map(popcornElectronDocumentPanelHelper266);
    this.#t = popcornElectronDocumentPanelParam630.onMutated;
  }
  get items() {
    return popcornElectronDocumentPanelHelper10(this.#e).map(popcornElectronDocumentPanelHelper266);
  }
  getById(popcornElectronDocumentPanelParam565) {
    if (!popcornElectronDocumentPanelParam565) return;
    let popcornElectronDocumentPanelValue920 = this.#e.find(item => item.id === popcornElectronDocumentPanelParam565);
    return popcornElectronDocumentPanelValue920 ? popcornElectronDocumentPanelHelper266(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue920)) : undefined;
  }
  getByName(popcornElectronDocumentPanelParam549) {
    if (!popcornElectronDocumentPanelParam549) return;
    let popcornElectronDocumentPanelValue913 = this.#e.find(item => item.name === popcornElectronDocumentPanelParam549);
    return popcornElectronDocumentPanelValue913 ? popcornElectronDocumentPanelHelper266(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue913)) : undefined;
  }
  set(popcornElectronDocumentPanelParam419) {
    let popcornElectronDocumentPanelValue806 = popcornElectronDocumentPanelHelper266(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam419)),
      popcornElectronDocumentPanelValue807 = this.#e.findIndex(item => item.id === popcornElectronDocumentPanelValue806.id || item.name === popcornElectronDocumentPanelValue806.name);
    return popcornElectronDocumentPanelValue807 >= 0 ? this.#e[popcornElectronDocumentPanelValue807] = popcornElectronDocumentPanelValue806 : this.#e.push(popcornElectronDocumentPanelValue806), this.#t?.(), popcornElectronDocumentPanelHelper266(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue806));
  }
  addOfficeWordDefaults() {
    let popcornElectronDocumentPanelValue667 = popcornElectronDocumentPanelHelper206(),
      popcornElectronDocumentPanelValue668 = popcornElectronDocumentPanelHelper10(this.#e);
    for (let popcornElectronDocumentPanelValue859 of popcornElectronDocumentPanelValue667) {
      let popcornElectronDocumentPanelValue888 = popcornElectronDocumentPanelHelper266(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue859)),
        popcornElectronDocumentPanelValue889 = popcornElectronDocumentPanelValue668.findIndex(item => item.id === popcornElectronDocumentPanelValue888.id || item.name === popcornElectronDocumentPanelValue888.name);
      popcornElectronDocumentPanelValue889 >= 0 ? popcornElectronDocumentPanelValue668[popcornElectronDocumentPanelValue889] = popcornElectronDocumentPanelValue888 : popcornElectronDocumentPanelValue668.push(popcornElectronDocumentPanelValue888);
    }
    return this.#e = popcornElectronDocumentPanelValue668, this.#t?.(), popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue667).map(popcornElectronDocumentPanelHelper266);
  }
  delete(popcornElectronDocumentPanelParam499) {
    let popcornElectronDocumentPanelValue876 = this.#e.findIndex(item => item.id === popcornElectronDocumentPanelParam499 || item.name === popcornElectronDocumentPanelParam499);
    return popcornElectronDocumentPanelValue876 < 0 ? false : (this.#e.splice(popcornElectronDocumentPanelValue876, 1), this.#t?.(), true);
  }
  replace(popcornElectronDocumentPanelParam741) {
    this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam741).map(popcornElectronDocumentPanelHelper266);
    this.#t?.();
  }
  toProto() {
    return popcornElectronDocumentPanelHelper10(this.#e).map(popcornElectronDocumentPanelHelper266);
  }
};
function popcornElectronDocumentPanelHelper267(popcornElectronDocumentPanelParam602) {
  if (!popcornElectronDocumentPanelParam602) return;
  let popcornElectronDocumentPanelValue939 = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam602);
  return popcornElectronDocumentPanelValue939.tabStops = popcornElectronDocumentPanelValue939.tabStops ?? [], popcornElectronDocumentPanelValue939;
}
function popcornElectronDocumentPanelHelper268(popcornElectronDocumentPanelParam689) {
  return {
    ...popcornElectronDocumentPanelParam689,
    paragraphStyle: popcornElectronDocumentPanelHelper267(popcornElectronDocumentPanelParam689.paragraphStyle)
  };
}
var $o = class {
    #e;
    #t;
    constructor(popcornElectronDocumentPanelParam621 = [], popcornElectronDocumentPanelParam622 = {}) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam621).map(popcornElectronDocumentPanelHelper268);
      this.#t = popcornElectronDocumentPanelParam622.onMutated;
    }
    get items() {
      return popcornElectronDocumentPanelHelper10(this.#e).map(popcornElectronDocumentPanelHelper268);
    }
    getById(popcornElectronDocumentPanelParam539) {
      if (!popcornElectronDocumentPanelParam539) return;
      let popcornElectronDocumentPanelValue907 = this.#e.find(item => item.id === popcornElectronDocumentPanelParam539);
      return popcornElectronDocumentPanelValue907 ? popcornElectronDocumentPanelHelper268(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue907)) : undefined;
    }
    getByName(popcornElectronDocumentPanelParam534) {
      if (!popcornElectronDocumentPanelParam534) return;
      let popcornElectronDocumentPanelValue904 = this.#e.find(item => item.name === popcornElectronDocumentPanelParam534);
      return popcornElectronDocumentPanelValue904 ? popcornElectronDocumentPanelHelper268(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue904)) : undefined;
    }
    set(popcornElectronDocumentPanelParam355) {
      let popcornElectronDocumentPanelValue754 = popcornElectronDocumentPanelHelper268(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam355)),
        popcornElectronDocumentPanelValue755 = this.#e.findIndex(item => item.id === popcornElectronDocumentPanelValue754.id || item.name === popcornElectronDocumentPanelValue754.name);
      return popcornElectronDocumentPanelValue755 >= 0 ? this.#e[popcornElectronDocumentPanelValue755] = popcornElectronDocumentPanelValue754 : this.#e.push(popcornElectronDocumentPanelValue754), this.#t?.(), popcornElectronDocumentPanelHelper268(popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelValue754));
    }
    delete(popcornElectronDocumentPanelParam488) {
      let popcornElectronDocumentPanelValue863 = this.#e.findIndex(item => item.id === popcornElectronDocumentPanelParam488 || item.name === popcornElectronDocumentPanelParam488);
      return popcornElectronDocumentPanelValue863 < 0 ? false : (this.#e.splice(popcornElectronDocumentPanelValue863, 1), this.#t?.(), true);
    }
    replace(popcornElectronDocumentPanelParam726) {
      this.#e = popcornElectronDocumentPanelHelper10(popcornElectronDocumentPanelParam726).map(popcornElectronDocumentPanelHelper268);
      this.#t?.();
    }
    toProto() {
      return popcornElectronDocumentPanelHelper10(this.#e).map(popcornElectronDocumentPanelHelper268);
    }
  },
  popcornElectronDocumentPanelValue72 = class {
    #e;
    #t;
    #n;
    constructor(popcornElectronDocumentPanelParam266, popcornElectronDocumentPanelParam267 = {}) {
      this.#t = popcornElectronDocumentPanelParam266 !== undefined;
      this.#n = popcornElectronDocumentPanelParam267.onMutated;
      this.#e = new popcornElectronDocumentPanelImport7({
        stub: () => {},
        queueCollaborativePublish: () => {
          this.#t = true;
          this.#n?.();
        }
      }, popcornElectronDocumentPanelParam266);
    }
    get colorScheme() {
      let popcornElectronDocumentPanelValue408 = this.#e.colorScheme;
      return {
        name: popcornElectronDocumentPanelValue408.name,
        themeColors: {
          accent1: popcornElectronDocumentPanelValue408.themeColors.accent1.hex,
          accent2: popcornElectronDocumentPanelValue408.themeColors.accent2.hex,
          accent3: popcornElectronDocumentPanelValue408.themeColors.accent3.hex,
          accent4: popcornElectronDocumentPanelValue408.themeColors.accent4.hex,
          accent5: popcornElectronDocumentPanelValue408.themeColors.accent5.hex,
          accent6: popcornElectronDocumentPanelValue408.themeColors.accent6.hex,
          bg1: popcornElectronDocumentPanelValue408.themeColors.bg1.hex,
          bg2: popcornElectronDocumentPanelValue408.themeColors.bg2.hex,
          tx1: popcornElectronDocumentPanelValue408.themeColors.tx1.hex,
          tx2: popcornElectronDocumentPanelValue408.themeColors.tx2.hex,
          dk1: popcornElectronDocumentPanelValue408.themeColors.dk1.hex,
          lt1: popcornElectronDocumentPanelValue408.themeColors.lt1.hex,
          dk2: popcornElectronDocumentPanelValue408.themeColors.dk2.hex,
          lt2: popcornElectronDocumentPanelValue408.themeColors.lt2.hex,
          hlink: popcornElectronDocumentPanelValue408.themeColors.hlink.hex,
          folHlink: popcornElectronDocumentPanelValue408.themeColors.folHlink.hex
        }
      };
    }
    set colorScheme(popcornElectronDocumentPanelParam683) {
      this.#t = true;
      this.#e.colorScheme = popcornElectronDocumentPanelParam683;
    }
    get hexColorMap() {
      return this.#e.hexColorMap;
    }
    resolveThemeColorHex(popcornElectronDocumentPanelParam684) {
      return this.#e.resolveThemeColorHex(popcornElectronDocumentPanelParam684);
    }
    resolveRenderThemeMap() {
      return popcornElectronDocumentPanelHelper20(this.#e);
    }
    replace(popcornElectronDocumentPanelParam623) {
      this.#t = popcornElectronDocumentPanelParam623 !== undefined;
      this.#e.replaceFromProto(popcornElectronDocumentPanelParam623);
      this.#n?.();
    }
    clear() {
      this.#t = false;
      this.#e.replaceFromProto(undefined);
      this.#n?.();
    }
    toProto() {
      return this.#t ? this.#e.toProto() : undefined;
    }
  };
function popcornElectronDocumentPanelHelper269(popcornElectronDocumentPanelParam340) {
  let popcornElectronDocumentPanelValue738 = popcornElectronDocumentPanelParam340.buffer;
  if (popcornElectronDocumentPanelValue738 instanceof ArrayBuffer && popcornElectronDocumentPanelParam340.byteOffset === 0 && popcornElectronDocumentPanelParam340.byteLength === popcornElectronDocumentPanelValue738.byteLength) return new Uint8Array(popcornElectronDocumentPanelValue738);
  let popcornElectronDocumentPanelValue739 = new Uint8Array(popcornElectronDocumentPanelParam340.byteLength);
  return popcornElectronDocumentPanelValue739.set(popcornElectronDocumentPanelParam340), popcornElectronDocumentPanelValue739;
}
function popcornElectronDocumentPanelHelper270(popcornElectronDocumentPanelParam207, popcornElectronDocumentPanelParam208) {
  if (Array.isArray(popcornElectronDocumentPanelParam207)) {
    for (let popcornElectronDocumentPanelValue1000 of popcornElectronDocumentPanelParam207) popcornElectronDocumentPanelHelper270(popcornElectronDocumentPanelValue1000, popcornElectronDocumentPanelParam208);
    return;
  }
  if (typeof popcornElectronDocumentPanelParam207 != "object" || !popcornElectronDocumentPanelParam207) return;
  let popcornElectronDocumentPanelValue579 = popcornElectronDocumentPanelParam207;
  if (popcornElectronDocumentPanelValue579.type === _presentationZ.COLOR_TYPE_SCHEME && typeof popcornElectronDocumentPanelValue579.value == "string" && popcornElectronDocumentPanelValue579.lastColor === undefined) {
    let popcornElectronDocumentPanelValue936 = popcornElectronDocumentPanelParam208[popcornElectronDocumentPanelValue579.value] ?? popcornElectronDocumentPanelValue3[popcornElectronDocumentPanelValue579.value];
    popcornElectronDocumentPanelValue936 !== undefined && (popcornElectronDocumentPanelValue579.lastColor = popcornElectronDocumentPanelValue936.replace(/^#/, ""));
  }
  for (let popcornElectronDocumentPanelValue993 of Object.values(popcornElectronDocumentPanelValue579)) popcornElectronDocumentPanelHelper270(popcornElectronDocumentPanelValue993, popcornElectronDocumentPanelParam208);
}
var popcornElectronDocumentPanelValue73 = class PopcornElectronDocumentPanelClass2 {
  #e;
  #t;
  #n = new Set();
  #r;
  charts;
  images;
  textStyles;
  tableStyleDefinitions;
  fonts;
  settings;
  theme;
  commentContents;
  commentReferences;
  sections;
  numbering;
  comments;
  citations;
  footnotes;
  endnotes;
  revisions;
  constructor(popcornElectronDocumentPanelParam5) {
    let popcornElectronDocumentPanelValue234 = popcornElectronDocumentPanelParam5;
    this.#e = {
      id: popcornElectronDocumentPanelParam5.id ?? "",
      name: popcornElectronDocumentPanelParam5.name ?? "Untitled document",
      widthEmu: popcornElectronDocumentPanelParam5.widthEmu ?? 0,
      heightEmu: popcornElectronDocumentPanelParam5.heightEmu ?? 0
    };
    this.#t = new popcornElectronDocumentPanelValue7();
    this.charts = new popcornElectronDocumentPanelImport34({
      stub: () => {}
    }, popcornElectronDocumentPanelParam5.charts ?? []);
    this.images = new popcornElectronDocumentPanelImport25({
      stub: () => {}
    }, popcornElectronDocumentPanelParam5.images ?? []);
    this.textStyles = new $o(popcornElectronDocumentPanelParam5.textStyles ?? [], {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.tableStyleDefinitions = new popcornElectronDocumentPanelValue71(popcornElectronDocumentPanelParam5.tableStyleDefinitions ?? [], {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.fonts = new popcornElectronDocumentPanelValue10(popcornElectronDocumentPanelParam5.fonts ?? [], {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.settings = new popcornElectronDocumentPanelValue70(popcornElectronDocumentPanelParam5.settings, {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.theme = new popcornElectronDocumentPanelValue72(popcornElectronDocumentPanelParam5.theme, {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.commentContents = new popcornElectronDocumentPanelValue4(popcornElectronDocumentPanelParam5.comments ?? [], {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.commentReferences = new popcornElectronDocumentPanelValue5(popcornElectronDocumentPanelParam5.commentReferences ?? [], {
      onMutated: () => this.invalidateLayoutCache()
    });
    this.#r = {
      charts: this.charts,
      images: this.images,
      getExistingElementIds: () => [...this.#n],
      registerElementId: popcornElectronDocumentPanelParam729 => {
        popcornElectronDocumentPanelParam729.length > 0 && this.#n.add(popcornElectronDocumentPanelParam729);
      },
      readTextStyleDefinitions: () => this.textStyles.toProto(),
      invalidateLayout: () => this.invalidateLayoutCache()
    };
    this.sections = new popcornElectronDocumentPanelValue68({
      sections: popcornElectronDocumentPanelParam5.sections ?? [],
      fallbackElements: popcornElectronDocumentPanelParam5.elements ?? [],
      context: this.#r
    });
    this.numbering = new popcornElectronDocumentPanelValue39(popcornElectronDocumentPanelParam5.numberingDefinitions ?? [], popcornElectronDocumentPanelParam5.paragraphNumberings ?? []);
    let popcornElectronDocumentPanelValue235 = this.sections.first.body,
      popcornElectronDocumentPanelValue236 = this.sections.first.pageSetup;
    popcornElectronDocumentPanelValue236?.widthEmu && (this.#e.widthEmu = popcornElectronDocumentPanelValue236.widthEmu);
    popcornElectronDocumentPanelValue236?.heightEmu && (this.#e.heightEmu = popcornElectronDocumentPanelValue236.heightEmu);
    this.comments = new popcornElectronDocumentPanelValue6({
      people: [],
      threads: [],
      documentId: this.#e.id,
      textElementId: popcornElectronDocumentPanelValue235.textElementId,
      resolveTextRange: popcornElectronDocumentPanelParam829 => popcornElectronDocumentPanelParam829.getTextRange()
    });
    this.citations = new popcornElectronDocumentPanelValue1(popcornElectronDocumentPanelValue234.contentReferences ?? []);
    this.footnotes = new popcornElectronDocumentPanelValue12({
      footnotes: popcornElectronDocumentPanelParam5.footnotes ?? [],
      documentId: this.#e.id,
      textElementId: popcornElectronDocumentPanelValue235.textElementId,
      resolveTextRange: popcornElectronDocumentPanelParam830 => popcornElectronDocumentPanelParam830.getTextRange(),
      onMutated: () => this.invalidateLayoutCache()
    });
    this.endnotes = new popcornElectronDocumentPanelValue9({
      endnotes: popcornElectronDocumentPanelParam5.endnotes ?? [],
      documentId: this.#e.id,
      textElementId: popcornElectronDocumentPanelValue235.textElementId,
      resolveTextRange: popcornElectronDocumentPanelParam831 => popcornElectronDocumentPanelParam831.getTextRange(),
      onMutated: () => this.invalidateLayoutCache()
    });
    this.revisions = new popcornElectronDocumentPanelValue42(popcornElectronDocumentPanelParam5.reviewMarks ?? []);
  }
  static create() {
    return new PopcornElectronDocumentPanelClass2(popcornElectronDocumentPanelHelper9());
  }
  static load(popcornElectronDocumentPanelParam786) {
    return new PopcornElectronDocumentPanelClass2(popcornElectronDocumentPanelParam786);
  }
  static fromDocumentBytes(popcornElectronDocumentPanelParam708) {
    return PopcornElectronDocumentPanelClass2.load(documentM.decode(popcornElectronDocumentPanelParam708));
  }
  get id() {
    return this.#e.id;
  }
  get name() {
    return this.#e.name;
  }
  set name(popcornElectronDocumentPanelParam780) {
    this.#e.name = popcornElectronDocumentPanelParam780 ?? "";
  }
  get body() {
    return this.sections.first.body;
  }
  invalidateLayoutCache() {
    this.#t.reset();
  }
  resolveLayoutPages(popcornElectronDocumentPanelParam650, popcornElectronDocumentPanelParam651) {
    return this.#t.getPages(this.toProto(), popcornElectronDocumentPanelParam650, popcornElectronDocumentPanelParam651);
  }
  get pagePaintContext() {
    return {
      chartsById: new Map(this.charts.toProto().filter(item => !!item.id).map(item => [item.id, item])),
      pageBackgroundFill: this.settings.displayBackgroundShape === false ? undefined : this.settings.resolveRenderBackgroundFill(),
      themeMap: this.theme.resolveRenderThemeMap()
    };
  }
  toProto() {
    let popcornElectronDocumentPanelValue312 = this.comments.toProto(),
      popcornElectronDocumentPanelValue313 = this.sections.toProto(),
      popcornElectronDocumentPanelValue314 = popcornElectronDocumentPanelValue313.flatMap(item => item.elements ?? []),
      popcornElectronDocumentPanelValue315 = this.numbering.toProto(),
      popcornElectronDocumentPanelValue316 = popcornElectronDocumentPanelValue313[0]?.pageSetup,
      popcornElectronDocumentPanelValue317 = {
        id: this.#e.id,
        name: this.#e.name,
        widthEmu: popcornElectronDocumentPanelValue316?.widthEmu ?? this.#e.widthEmu,
        heightEmu: popcornElectronDocumentPanelValue316?.heightEmu ?? this.#e.heightEmu,
        charts: this.charts.toProto(),
        elements: popcornElectronDocumentPanelValue314,
        images: this.images.toProto(),
        footnotes: this.footnotes.toProto(),
        comments: this.commentContents.toProto(),
        commentReferences: this.commentReferences.toProto(),
        textStyles: this.textStyles.toProto(),
        reviewMarks: this.revisions.toProto(),
        sections: popcornElectronDocumentPanelValue313,
        numberingDefinitions: popcornElectronDocumentPanelValue315.numberingDefinitions,
        paragraphNumberings: popcornElectronDocumentPanelValue315.paragraphNumberings,
        tableStyleDefinitions: this.tableStyleDefinitions.toProto(),
        endnotes: this.endnotes.toProto(),
        settings: this.settings.toProto(),
        theme: this.theme.toProto(),
        fonts: this.fonts.toProto()
      };
    return popcornElectronDocumentPanelValue317.people = popcornElectronDocumentPanelValue312.people, popcornElectronDocumentPanelValue317.threads = popcornElectronDocumentPanelValue312.threads, popcornElectronDocumentPanelValue317.contentReferences = this.citations.toProto(), popcornElectronDocumentPanelHelper270(popcornElectronDocumentPanelValue317, this.theme.hexColorMap), popcornElectronDocumentPanelValue317;
  }
  toDocumentBytes() {
    return popcornElectronDocumentPanelHelper269(documentM.encode(this.toProto()).finish());
  }
  save() {}
  export(popcornElectronDocumentPanelParam402 = {
    format: "layout"
  }) {
    let popcornElectronDocumentPanelValue784 = popcornElectronDocumentPanelParam402.format ?? "layout";
    if (popcornElectronDocumentPanelValue784 === "layout") return Promise.resolve(popcornElectronDocumentPanelHelper203(this));
    throw Error(`Unsupported document export format: ${popcornElectronDocumentPanelValue784}`);
  }
};
function is({
  artifactLabel,
  title,
  className,
  header,
  toolbar,
  sidebar,
  footer,
  children
}) {
  return <div className={clsx("bg-token-bg-primary text-token-text-primary flex h-full min-h-0 flex-col", className)}>
      {header ?? <header className="border-token-border-light flex items-center justify-between border-b px-4 py-3">
          <div className="min-w-0">
            <div className="text-token-text-tertiary text-xs font-medium uppercase tracking-[0.12em]">
              {artifactLabel}
            </div>
            <div className="truncate text-sm font-semibold">{title}</div>
          </div>
          {toolbar ? <div className="ms-4 flex shrink-0 items-center gap-2">
              {toolbar}
            </div> : null}
        </header>}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {sidebar ? <aside className="border-token-border-light bg-token-bg-secondary min-h-0 w-[240px] shrink-0 overflow-auto border-e">
            {sidebar}
          </aside> : null}
        <div className="min-h-0 min-w-0 flex-1">{children}</div>
      </div>
      {footer ? <footer className="border-token-border-light bg-token-bg-secondary border-t">
          {footer}
        </footer> : null}
    </div>;
}
function as(popcornElectronDocumentPanelParam149) {
  let [popcornElectronDocumentPanelValue518, popcornElectronDocumentPanelValue519] = React.useState({
    width: 0,
    height: 0
  });
  return React.useEffect(() => {
    let popcornElectronDocumentPanelValue573 = popcornElectronDocumentPanelParam149.current;
    if (!popcornElectronDocumentPanelValue573) return;
    let popcornElectronDocumentPanelValue574 = () => {
      let popcornElectronDocumentPanelValue809 = popcornElectronDocumentPanelValue573.getBoundingClientRect();
      popcornElectronDocumentPanelValue519({
        width: Math.max(0, Math.round(popcornElectronDocumentPanelValue809.width)),
        height: Math.max(0, Math.round(popcornElectronDocumentPanelValue809.height))
      });
    };
    popcornElectronDocumentPanelValue574();
    let popcornElectronDocumentPanelValue575 = new ResizeObserver(popcornElectronDocumentPanelValue574);
    return popcornElectronDocumentPanelValue575.observe(popcornElectronDocumentPanelValue573), () => {
      popcornElectronDocumentPanelValue575.disconnect();
    };
  }, [popcornElectronDocumentPanelParam149]), popcornElectronDocumentPanelValue518;
}
var os = null;
function popcornElectronDocumentPanelHelper271() {
  return os ??= Promise.all([_remoteTextEditSessionS(), Promise.resolve().then(() => {
    _remoteTextEditSessionC();
  })]).then(() => {}), os;
}
var popcornElectronDocumentPanelValue75 = {
    widthEmu: 12240,
    heightEmu: 15840,
    pageMargin: {
      top: 1440,
      bottom: 1440,
      left: 1440,
      right: 1267,
      header: 720,
      footer: 720,
      gutter: 0
    }
  },
  popcornElectronDocumentPanelValue76 = {
    count: 1,
    space: 360,
    widths: [],
    hasSeparatorLine: false
  },
  popcornElectronDocumentPanelValue77 = {
    count: 2,
    space: 360,
    widths: [],
    hasSeparatorLine: false
  };
function popcornElectronDocumentPanelHelper272() {
  return getFeatureCatalogItems().map(item => ({
    text: `${fs(item.artifact)} / ${item.area}: ${item.feature}. ${item.summary}`,
    style: {
      bulletCharacter: "•",
      marginLeft: 720,
      indent: 360,
      spaceAfter: 120
    }
  }));
}
function fs(popcornElectronDocumentPanelParam717) {
  return popcornElectronDocumentPanelParam717.charAt(0).toUpperCase() + popcornElectronDocumentPanelParam717.slice(1);
}
function popcornElectronDocumentPanelHelper273() {
  let popcornElectronDocumentPanelValue200 = popcornElectronDocumentPanelValue73.create();
  popcornElectronDocumentPanelValue200.name = "Popcorn Document";
  let popcornElectronDocumentPanelValue201 = popcornElectronDocumentPanelValue200.sections.first;
  popcornElectronDocumentPanelValue201.pageSetup = popcornElectronDocumentPanelValue75;
  popcornElectronDocumentPanelValue201.columns = popcornElectronDocumentPanelValue76;
  popcornElectronDocumentPanelValue201.header.text = ["Popcorn artifact engine"];
  popcornElectronDocumentPanelValue201.footer.text = ["Popcorn document demo"];
  popcornElectronDocumentPanelValue200.body.paragraphs.add({
    text: "Popcorn is growing into a unified artifact engine for workbook, presentation, and document editing."
  });
  popcornElectronDocumentPanelValue200.body.paragraphs.add({
    text: "Granola owns the document model and layout cache. Popcorn owns the editor shell, host integration, and worker-driven canvas presentation."
  });
  popcornElectronDocumentPanelValue200.body.paragraphs.add({
    text: "This default document is both a manual demo and a deterministic feature corpus for the document route, its browser smoke, and agent-driven debugging loops."
  });
  popcornElectronDocumentPanelValue200.body.text.get("Popcorn is growing into a unified artifact engine for workbook, presentation, and document editing.").style = "title";
  popcornElectronDocumentPanelValue200.body.text.get("Granola owns the document model and layout cache. Popcorn owns the editor shell, host integration, and worker-driven canvas presentation.").style = "heading2";
  popcornElectronDocumentPanelValue200.body.text.get("This default document is both a manual demo and a deterministic feature corpus for the document route, its browser smoke, and agent-driven debugging loops.").spacingAfter = 320;
  popcornElectronDocumentPanelValue200.body.tables.add({
    rows: 5,
    columns: 4,
    values: [["Artifact", "Primary surface", "Worker model", "Status"], ["Workbook", "Grid + formula chrome", "Granola workbook", "Advanced"], ["Presentation", "Slide stage", "Granola presentation", "Expanding"], ["Document", "Paged canvas", "Granola document", "Expanding"], ["Shared", "Worker split + devtools", "Popcorn shared", "Core"]],
    style: {
      preset: "TableGrid",
      headerRow: true
    },
    position: {
      left: 72,
      top: 260,
      width: 560,
      height: 188
    }
  });
  popcornElectronDocumentPanelValue200.body.shapes.add({
    geometry: "roundRect",
    position: {
      left: 666,
      top: 260,
      width: 280,
      height: 168
    },
    fill: {
      type: "solid",
      color: "#E0F2FE"
    },
    line: {
      style: "solid",
      fill: {
        type: "solid",
        color: "#38BDF8"
      },
      width: 1
    },
    text: "Shared object editing, find, and pagination-aware text sessions live in the same artifact-engine family now."
  });
  popcornElectronDocumentPanelValue200.body.images.add({
    dataUrl: _remoteTextEditSessionR,
    alt: "Popcorn artifact marker",
    size: {
      width: 96,
      height: 96
    },
    style: {
      wrap: "inline",
      alignment: "center"
    }
  });
  popcornElectronDocumentPanelValue200.body.paragraphs.add({
    text: "Feature highlights across the engine:"
  });
  popcornElectronDocumentPanelValue200.body.text.get("Feature highlights across the engine:").style = "heading1";
  for (let popcornElectronDocumentPanelValue989 of popcornElectronDocumentPanelHelper272()) popcornElectronDocumentPanelValue200.body.paragraphs.add(popcornElectronDocumentPanelValue989);
  for (let popcornElectronDocumentPanelValue716 = 0; popcornElectronDocumentPanelValue716 < 70; popcornElectronDocumentPanelValue716 += 1) popcornElectronDocumentPanelValue200.body.paragraphs.add({
    text: `Artifact engine note ${popcornElectronDocumentPanelValue716 + 1}: Popcorn should keep artifact ownership explicit while Granola owns the document model, pagination, and reusable text-edit primitives.`
  });
  let popcornElectronDocumentPanelValue202 = popcornElectronDocumentPanelValue200.sections.add({
    pageSetup: popcornElectronDocumentPanelValue75,
    columns: popcornElectronDocumentPanelValue77
  });
  popcornElectronDocumentPanelValue202.header.text = ["Artifact catalog"];
  popcornElectronDocumentPanelValue202.footer.text = ["Sectioned feature catalog"];
  popcornElectronDocumentPanelValue202.body.paragraphs.add({
    text: "Artifact feature catalog"
  });
  popcornElectronDocumentPanelValue202.body.text.get("Artifact feature catalog").style = "heading1";
  for (let popcornElectronDocumentPanelValue548 of getFeatureCatalogItems()) {
    popcornElectronDocumentPanelValue202.body.paragraphs.add({
      text: `${fs(popcornElectronDocumentPanelValue548.artifact)} / ${popcornElectronDocumentPanelValue548.area}`,
      style: {
        spaceBefore: 120,
        spaceAfter: 60
      }
    });
    popcornElectronDocumentPanelValue202.body.text.get(`${fs(popcornElectronDocumentPanelValue548.artifact)} / ${popcornElectronDocumentPanelValue548.area}`).style = "heading2";
    popcornElectronDocumentPanelValue202.body.paragraphs.add({
      text: `${popcornElectronDocumentPanelValue548.feature}: ${popcornElectronDocumentPanelValue548.summary}`,
      style: {
        bulletCharacter: "•",
        marginLeft: 720,
        indent: 360,
        spaceAfter: 120
      }
    });
  }
  let popcornElectronDocumentPanelValue203 = popcornElectronDocumentPanelValue200.sections.add({
    pageSetup: popcornElectronDocumentPanelValue75,
    columns: popcornElectronDocumentPanelValue76
  });
  return popcornElectronDocumentPanelValue203.header.text = ["Document figures"], popcornElectronDocumentPanelValue203.footer.text = ["Media and object coverage"], popcornElectronDocumentPanelValue203.body.paragraphs.add({
    text: "Embedded content and pagination coverage"
  }), popcornElectronDocumentPanelValue203.body.text.get("Embedded content and pagination coverage").style = "heading1", popcornElectronDocumentPanelValue203.body.tables.add({
    rows: 4,
    columns: 3,
    values: [["Coverage", "Example", "Why it matters"], ["Sections", "Headers, footers, and columns", "Tests pagination, structure, and exported layout."], ["Objects", "Shapes, images, and tables", "Exercises selection overlays and page-aware object hit testing."], ["Search", "Find over long note sequences", "Keeps human UI and agent inspection aligned."]],
    style: {
      preset: "TableGrid",
      headerRow: true
    },
    position: {
      left: 72,
      top: 144,
      width: 560,
      height: 210
    }
  }), popcornElectronDocumentPanelValue203.body.images.add({
    dataUrl: _remoteTextEditSessionR,
    alt: "Document figure placeholder",
    position: {
      left: 120,
      top: 396,
      width: 220,
      height: 220
    }
  }), popcornElectronDocumentPanelValue203.body.shapes.add({
    geometry: "roundRect",
    size: {
      width: 300,
      height: 120
    },
    position: {
      left: 420,
      top: 436
    },
    style: {
      wrap: "square",
      alignment: "center"
    },
    fill: "accent2",
    line: {
      style: "solid",
      fill: "accent5",
      width: 1
    },
    text: "Object selection in documents now follows the same model-backed controller pattern as workbook charts and slide objects."
  }), popcornElectronDocumentPanelValue200;
}
function popcornElectronDocumentPanelHelper274() {
  return new Worker(new URL("" + new URL("runtime.worker-aiywle7O.js", import.meta.url).href, "" + import.meta.url), {
    type: "module",
    name: "popcorn-document-worker"
  });
}
var popcornElectronDocumentPanelValue78 = {
  documentVersion: 0,
  title: "Untitled document",
  bodyText: "",
  canUndo: false,
  canRedo: false,
  zoom: 1,
  pageIndex: 0,
  pageCount: 0,
  pageLayouts: [],
  selectedTextBlockId: null,
  selectedObjectId: null,
  selectedObjectKind: null,
  textEditState: null,
  findOpen: false,
  findQuery: "",
  findResultCount: 0,
  findActiveResultIndex: -1,
  findSummary: "",
  findFocusToken: 0
};
function popcornElectronDocumentPanelHelper275(popcornElectronDocumentPanelParam793 = popcornElectronDocumentPanelValue78) {
  return new _remoteTextEditSessionN(popcornElectronDocumentPanelParam793);
}
function _s() {
  return typeof window < "u" && typeof Worker < "u" && typeof HTMLCanvasElement < "u" && "transferControlToOffscreen" in HTMLCanvasElement.prototype;
}
function popcornElectronDocumentPanelHelper276(popcornElectronDocumentPanelParam528) {
  return popcornElectronDocumentPanelParam528.documentProto ? popcornElectronDocumentPanelParam528.documentProto : popcornElectronDocumentPanelParam528.document ? popcornElectronDocumentPanelParam528.document.toProto() : popcornElectronDocumentPanelHelper273().toProto();
}
function popcornElectronDocumentPanelHelper277() {
  return popcornElectronDocumentPanelHelper274();
}
var popcornElectronDocumentPanelValue79 = 1,
  popcornElectronDocumentPanelValue80 = class {
    id = popcornElectronDocumentPanelValue79++;
    #e = _remoteTextEditSessionL("document-main-controller");
    #t = popcornElectronDocumentPanelHelper275();
    #n;
    #r;
    #i = new Set();
    #a = new Map();
    #o = new Map();
    #s = [];
    #c = {
      searchFragments: [],
      objectTargets: []
    };
    #l = false;
    constructor(popcornElectronDocumentPanelParam91 = {}) {
      this.#n = new _remoteTextEditSessionD((popcornElectronDocumentPanelParam91.workerFactory ?? popcornElectronDocumentPanelHelper277)(), popcornElectronDocumentPanelParam838 => this.#f(popcornElectronDocumentPanelParam838), popcornElectronDocumentPanelParam788 => {
        throw Error(popcornElectronDocumentPanelParam788);
      });
      let popcornElectronDocumentPanelValue441 = popcornElectronDocumentPanelHelper276(popcornElectronDocumentPanelParam91);
      this.#n.bootstrap({
        documentProto: popcornElectronDocumentPanelValue441,
        initialPageIndex: popcornElectronDocumentPanelParam91.initialPageIndex,
        initialZoom: popcornElectronDocumentPanelParam91.initialZoom
      });
      this.#r = popcornElectronDocumentPanelHelper271().then(() => {
        let popcornElectronDocumentPanelValue663 = _remoteTextEditSessionF();
        this.#e.debug("font-render-deps-ready", {
          fontCount: popcornElectronDocumentPanelValue663.length,
          fontDebug: _remoteTextEditSessionP()
        });
        popcornElectronDocumentPanelValue663.length !== 0 && this.#n.dispatch({
          kind: "install-font-faces",
          fonts: popcornElectronDocumentPanelValue663
        });
      }).catch(() => {});
    }
    subscribe(popcornElectronDocumentPanelParam762) {
      return this.#t.subscribe(popcornElectronDocumentPanelParam762);
    }
    getState() {
      return this.#t.getState();
    }
    getSnapshot() {
      return this.#t.getState();
    }
    dispatch(popcornElectronDocumentPanelParam840) {}
    attachViewport() {
      return () => {};
    }
    attachPageCanvas(popcornElectronDocumentPanelParam23) {
      this.#d(popcornElectronDocumentPanelParam23.surfaceId);
      let popcornElectronDocumentPanelValue322 = popcornElectronDocumentPanelParam23.dpr ?? window.devicePixelRatio ?? 1;
      if (popcornElectronDocumentPanelParam23.canvas.style.width = `${popcornElectronDocumentPanelParam23.width}px`, popcornElectronDocumentPanelParam23.canvas.style.height = `${popcornElectronDocumentPanelParam23.height}px`, !_s()) return popcornElectronDocumentPanelParam23.canvas.width = Math.max(1, Math.round(popcornElectronDocumentPanelParam23.width * popcornElectronDocumentPanelValue322)), popcornElectronDocumentPanelParam23.canvas.height = Math.max(1, Math.round(popcornElectronDocumentPanelParam23.height * popcornElectronDocumentPanelValue322)), false;
      if (this.#a.get(popcornElectronDocumentPanelParam23.surfaceId) === popcornElectronDocumentPanelParam23.canvas) return this.resizePageCanvas({
        surfaceId: popcornElectronDocumentPanelParam23.surfaceId,
        width: popcornElectronDocumentPanelParam23.width,
        height: popcornElectronDocumentPanelParam23.height,
        dpr: popcornElectronDocumentPanelValue322
      }), true;
      this.#a.set(popcornElectronDocumentPanelParam23.surfaceId, popcornElectronDocumentPanelParam23.canvas);
      let popcornElectronDocumentPanelValue323 = popcornElectronDocumentPanelParam23.canvas.transferControlToOffscreen();
      return this.#r.then(() => {
        this.#l || this.#a.get(popcornElectronDocumentPanelParam23.surfaceId) === popcornElectronDocumentPanelParam23.canvas && this.#n.dispatch({
          kind: "attach-page-canvas",
          surfaceId: popcornElectronDocumentPanelParam23.surfaceId,
          pageIndex: popcornElectronDocumentPanelParam23.pageIndex,
          canvas: popcornElectronDocumentPanelValue323,
          width: popcornElectronDocumentPanelParam23.width,
          height: popcornElectronDocumentPanelParam23.height,
          dpr: popcornElectronDocumentPanelValue322
        }, [popcornElectronDocumentPanelValue323]);
      }), true;
    }
    resizePageCanvas(popcornElectronDocumentPanelParam328) {
      let popcornElectronDocumentPanelValue715 = popcornElectronDocumentPanelParam328.dpr ?? window.devicePixelRatio ?? 1;
      this.#n.dispatch({
        kind: "resize-page-canvas",
        surfaceId: popcornElectronDocumentPanelParam328.surfaceId,
        width: popcornElectronDocumentPanelParam328.width,
        height: popcornElectronDocumentPanelParam328.height,
        dpr: popcornElectronDocumentPanelValue715
      });
    }
    detachPageCanvas(popcornElectronDocumentPanelParam292) {
      this.#d(popcornElectronDocumentPanelParam292);
      let popcornElectronDocumentPanelValue678 = window.setTimeout(() => {
        this.#o.delete(popcornElectronDocumentPanelParam292);
        this.#a.delete(popcornElectronDocumentPanelParam292);
        !this.#l && this.#n.dispatch({
          kind: "detach-page-canvas",
          surfaceId: popcornElectronDocumentPanelParam292
        });
      }, 0);
      this.#o.set(popcornElectronDocumentPanelParam292, popcornElectronDocumentPanelValue678);
    }
    subscribeRenderedPages(popcornElectronDocumentPanelParam527) {
      return this.#i.add(popcornElectronDocumentPanelParam527), () => {
        this.#i.delete(popcornElectronDocumentPanelParam527);
      };
    }
    getRenderedPages() {
      return this.#s;
    }
    getSearchFragments() {
      return this.#c.searchFragments;
    }
    getObjectTargets() {
      return this.#c.objectTargets;
    }
    requestExport(popcornElectronDocumentPanelParam300) {
      return this.#n.request({
        kind: "export",
        format: popcornElectronDocumentPanelParam300?.format ?? "proto"
      }).then(value => {
        if (value.kind !== "export") throw Error(`Unexpected export response: ${value.kind}`);
        return value.result;
      });
    }
    exportDocumentProto() {
      return this.requestExport({
        format: "proto"
      }).then(value => value.documentProto);
    }
    replaceFromProto(popcornElectronDocumentPanelParam310) {
      return this.#n.request({
        kind: "replace-from-proto",
        documentProto: popcornElectronDocumentPanelParam310
      }).then(value => {
        if (value.kind !== "replace-from-proto") throw Error(`Unexpected replace response: ${value.kind}`);
      });
    }
    replaceDocument(popcornElectronDocumentPanelParam690) {
      return this.replaceFromProto(popcornElectronDocumentPanelParam690.toProto());
    }
    dispose() {
      if (!this.#l) {
        this.#l = true;
        for (let popcornElectronDocumentPanelValue984 of this.#o.values()) window.clearTimeout(popcornElectronDocumentPanelValue984);
        this.#o.clear();
        this.#i.clear();
        this.#a.clear();
        this.#n.dispose();
      }
    }
    setZoom(popcornElectronDocumentPanelParam692) {
      this.#n.dispatch({
        kind: "set-zoom",
        zoom: popcornElectronDocumentPanelParam692
      });
    }
    setPageIndex(popcornElectronDocumentPanelParam506, popcornElectronDocumentPanelParam507) {
      this.#n.dispatch({
        kind: "set-page-index",
        pageIndex: popcornElectronDocumentPanelParam506,
        origin: popcornElectronDocumentPanelParam507?.origin
      });
    }
    goToPreviousPage() {
      this.setPageIndex(this.getSnapshot().pageIndex - 1, {
        origin: "navigation"
      });
    }
    goToNextPage() {
      this.setPageIndex(this.getSnapshot().pageIndex + 1, {
        origin: "navigation"
      });
    }
    setSelectedTextBlockId(popcornElectronDocumentPanelParam482, popcornElectronDocumentPanelParam483) {
      this.#n.dispatch({
        kind: "select-text-block",
        blockId: popcornElectronDocumentPanelParam482,
        pageIndex: popcornElectronDocumentPanelParam483?.pageIndex
      });
    }
    setSelectedObject(popcornElectronDocumentPanelParam631) {
      this.#n.dispatch({
        kind: "select-object",
        target: popcornElectronDocumentPanelParam631
      });
    }
    clearSelection() {
      this.#n.dispatch({
        kind: "clear-selection"
      });
    }
    deleteSelectedObject() {
      this.#n.dispatch({
        kind: "delete-selected-object"
      });
    }
    appendParagraph(popcornElectronDocumentPanelParam632) {
      this.#n.dispatch({
        kind: "append-paragraph",
        text: popcornElectronDocumentPanelParam632
      });
    }
    openFind() {
      this.#n.dispatch({
        kind: "open-find"
      });
    }
    closeFind() {
      this.#n.dispatch({
        kind: "close-find"
      });
    }
    setFindQuery(popcornElectronDocumentPanelParam652) {
      this.#n.dispatch({
        kind: "set-find-query",
        query: popcornElectronDocumentPanelParam652
      });
    }
    goToNextFindResult() {
      this.#n.dispatch({
        kind: "go-to-next-find-result"
      });
    }
    goToPreviousFindResult() {
      this.#n.dispatch({
        kind: "go-to-previous-find-result"
      });
    }
    textPointerDown(popcornElectronDocumentPanelParam362, popcornElectronDocumentPanelParam363, popcornElectronDocumentPanelParam364) {
      return this.#n.dispatch({
        kind: "text-pointer-down",
        pageIndex: popcornElectronDocumentPanelParam362,
        point: popcornElectronDocumentPanelParam363,
        shiftKey: popcornElectronDocumentPanelParam364?.shiftKey
      }), true;
    }
    textPointerMove(popcornElectronDocumentPanelParam584) {
      return this.#n.dispatch({
        kind: "text-pointer-move",
        point: popcornElectronDocumentPanelParam584
      }), true;
    }
    textPointerUp() {
      this.#n.dispatch({
        kind: "text-pointer-up"
      });
    }
    textSelectWordAtPoint(popcornElectronDocumentPanelParam404, popcornElectronDocumentPanelParam405) {
      return this.#n.dispatch({
        kind: "text-select-word-at-point",
        pageIndex: popcornElectronDocumentPanelParam404,
        point: popcornElectronDocumentPanelParam405
      }), true;
    }
    textSelectParagraphAtPoint(popcornElectronDocumentPanelParam381, popcornElectronDocumentPanelParam382) {
      return this.#n.dispatch({
        kind: "text-select-paragraph-at-point",
        pageIndex: popcornElectronDocumentPanelParam381,
        point: popcornElectronDocumentPanelParam382
      }), true;
    }
    textActivateBlockEnd(popcornElectronDocumentPanelParam508) {
      return this.#n.dispatch({
        kind: "text-activate-block-end",
        blockId: popcornElectronDocumentPanelParam508
      }), true;
    }
    textClear() {
      this.#n.dispatch({
        kind: "text-clear"
      });
    }
    textHandleKeyDown(popcornElectronDocumentPanelParam591) {
      return this.#n.dispatch({
        kind: "text-keydown",
        event: popcornElectronDocumentPanelParam591
      }), true;
    }
    textHandleBeforeInput(popcornElectronDocumentPanelParam577) {
      return this.#n.dispatch({
        kind: "text-before-input",
        event: popcornElectronDocumentPanelParam577
      }), true;
    }
    textHandleInput(popcornElectronDocumentPanelParam610) {
      return this.#n.dispatch({
        kind: "text-input",
        event: popcornElectronDocumentPanelParam610
      }), true;
    }
    textHandleCompositionEnd(popcornElectronDocumentPanelParam558) {
      return this.#n.dispatch({
        kind: "text-composition-end",
        event: popcornElectronDocumentPanelParam558
      }), true;
    }
    undo() {
      this.#n.dispatch({
        kind: "undo"
      });
    }
    redo() {
      this.#n.dispatch({
        kind: "redo"
      });
    }
    #u() {
      for (let popcornElectronDocumentPanelValue999 of this.#i) popcornElectronDocumentPanelValue999();
    }
    #d(popcornElectronDocumentPanelParam578) {
      let popcornElectronDocumentPanelValue927 = this.#o.get(popcornElectronDocumentPanelParam578);
      popcornElectronDocumentPanelValue927 !== undefined && (window.clearTimeout(popcornElectronDocumentPanelValue927), this.#o.delete(popcornElectronDocumentPanelParam578));
    }
    #f(popcornElectronDocumentPanelParam103) {
      switch (popcornElectronDocumentPanelParam103.kind) {
        case "meta":
        case "navigation":
        case "selection":
        case "editor":
        case "find":
          this.#t.patch(popcornElectronDocumentPanelParam103.state);
          return;
        case "layout":
          this.#c = popcornElectronDocumentPanelParam103.metadata;
          this.#t.patch({
            pageCount: popcornElectronDocumentPanelParam103.pageLayouts.length,
            pageLayouts: popcornElectronDocumentPanelParam103.pageLayouts
          });
          return;
        case "rendered-pages":
          this.#s = popcornElectronDocumentPanelParam103.pages;
          this.#u();
          return;
        case "debug-log":
          _remoteTextEditSessionL(popcornElectronDocumentPanelParam103.namespace).debug(popcornElectronDocumentPanelParam103.message, popcornElectronDocumentPanelParam103.details);
          return;
        default:
          return popcornElectronDocumentPanelParam103;
      }
    }
  };
function popcornElectronDocumentPanelHelper278(popcornElectronDocumentPanelParam794 = {}) {
  return new popcornElectronDocumentPanelValue80(popcornElectronDocumentPanelParam794);
}
function popcornElectronDocumentPanelHelper279(popcornElectronDocumentPanelParam325, popcornElectronDocumentPanelParam326) {
  if (popcornElectronDocumentPanelParam325.length === 0 || popcornElectronDocumentPanelParam326.viewportHeight <= 0) return [];
  let popcornElectronDocumentPanelValue708 = Math.max(0, popcornElectronDocumentPanelParam326.overscanPx ?? 0),
    popcornElectronDocumentPanelValue709 = popcornElectronDocumentPanelParam326.scrollTop - popcornElectronDocumentPanelValue708,
    popcornElectronDocumentPanelValue710 = popcornElectronDocumentPanelParam326.scrollTop + popcornElectronDocumentPanelParam326.viewportHeight + popcornElectronDocumentPanelValue708;
  return popcornElectronDocumentPanelParam325.filter(item => item.top + item.height >= popcornElectronDocumentPanelValue709 && item.top <= popcornElectronDocumentPanelValue710);
}
function popcornElectronDocumentPanelHelper280(popcornElectronDocumentPanelParam693) {
  let popcornElectronDocumentPanelValue971 = popcornElectronDocumentPanelParam693.at(-1);
  return popcornElectronDocumentPanelValue971 ? popcornElectronDocumentPanelValue971.top + popcornElectronDocumentPanelValue971.height : 0;
}
function popcornElectronDocumentPanelHelper281() {
  return typeof window > "u" ? null : window;
}
function popcornElectronDocumentPanelHelper282(popcornElectronDocumentPanelParam6) {
  if (!remoteTextEditSessionU()) return () => {};
  let popcornElectronDocumentPanelValue242 = popcornElectronDocumentPanelHelper281();
  if (!popcornElectronDocumentPanelValue242) return () => {};
  let popcornElectronDocumentPanelValue243 = {
    controller: popcornElectronDocumentPanelParam6.controller,
    getSnapshot: () => popcornElectronDocumentPanelParam6.controller.getSnapshot(),
    exportDocumentProto: () => popcornElectronDocumentPanelParam6.controller.exportDocumentProto(),
    getBodyText: () => popcornElectronDocumentPanelParam6.controller.getSnapshot().bodyText,
    getTextLayoutBlocks: () => popcornElectronDocumentPanelParam6.getTextLayoutBlocks(),
    getTextEditState: () => popcornElectronDocumentPanelParam6.getTextEditState(),
    getFindState: () => {
      let popcornElectronDocumentPanelValue651 = popcornElectronDocumentPanelParam6.controller.getSnapshot();
      return {
        open: popcornElectronDocumentPanelValue651.findOpen,
        query: popcornElectronDocumentPanelValue651.findQuery,
        summary: popcornElectronDocumentPanelValue651.findSummary,
        resultCount: popcornElectronDocumentPanelValue651.findResultCount,
        activeResultIndex: popcornElectronDocumentPanelValue651.findActiveResultIndex,
        selectedTextBlockId: popcornElectronDocumentPanelValue651.selectedTextBlockId
      };
    },
    getSearchFragments: () => popcornElectronDocumentPanelParam6.controller.getSearchFragments(),
    getObjectTargets: () => popcornElectronDocumentPanelParam6.controller.getObjectTargets(),
    getPageState: () => {
      let popcornElectronDocumentPanelValue645 = popcornElectronDocumentPanelParam6.controller.getSnapshot();
      return {
        pageIndex: popcornElectronDocumentPanelValue645.pageIndex,
        pageCount: popcornElectronDocumentPanelValue645.pageCount,
        pageLayouts: popcornElectronDocumentPanelValue645.pageLayouts,
        pageRects: popcornElectronDocumentPanelParam6.getPageRects(),
        renderedPages: popcornElectronDocumentPanelParam6.getRenderedPages(),
        textLayoutBlockCount: popcornElectronDocumentPanelParam6.getTextLayoutBlocks().length
      };
    },
    captureState: () => {
      let popcornElectronDocumentPanelValue367 = popcornElectronDocumentPanelParam6.controller.getSnapshot();
      return {
        snapshot: popcornElectronDocumentPanelValue367,
        pageState: {
          pageIndex: popcornElectronDocumentPanelValue367.pageIndex,
          pageCount: popcornElectronDocumentPanelValue367.pageCount,
          pageLayouts: popcornElectronDocumentPanelValue367.pageLayouts,
          pageRects: popcornElectronDocumentPanelParam6.getPageRects(),
          renderedPages: popcornElectronDocumentPanelParam6.getRenderedPages(),
          textLayoutBlockCount: popcornElectronDocumentPanelParam6.getTextLayoutBlocks().length
        },
        bodyText: popcornElectronDocumentPanelValue367.bodyText,
        textLayoutBlocks: popcornElectronDocumentPanelParam6.getTextLayoutBlocks(),
        textEditState: popcornElectronDocumentPanelParam6.getTextEditState(),
        findState: {
          open: popcornElectronDocumentPanelValue367.findOpen,
          query: popcornElectronDocumentPanelValue367.findQuery,
          summary: popcornElectronDocumentPanelValue367.findSummary,
          resultCount: popcornElectronDocumentPanelValue367.findResultCount,
          activeResultIndex: popcornElectronDocumentPanelValue367.findActiveResultIndex,
          selectedTextBlockId: popcornElectronDocumentPanelValue367.selectedTextBlockId
        },
        searchFragments: popcornElectronDocumentPanelParam6.controller.getSearchFragments(),
        objectTargets: popcornElectronDocumentPanelParam6.controller.getObjectTargets(),
        logCount: (popcornElectronDocumentPanelValue242.__POPCORN_LOGS__ ?? []).length
      };
    },
    getLogs: () => [...(popcornElectronDocumentPanelValue242.__POPCORN_LOGS__ ?? [])],
    clearLogs: () => {
      popcornElectronDocumentPanelValue242.__POPCORN_LOGS__ = [];
    }
  };
  return popcornElectronDocumentPanelValue242.__POPCORN_DOCUMENT_DEVTOOLS__ = popcornElectronDocumentPanelValue243, () => {
    popcornElectronDocumentPanelValue242.__POPCORN_DOCUMENT_DEVTOOLS__ === popcornElectronDocumentPanelValue243 && delete popcornElectronDocumentPanelValue242.__POPCORN_DOCUMENT_DEVTOOLS__;
  };
}
function popcornElectronDocumentPanelHelper283(popcornElectronDocumentPanelParam280, popcornElectronDocumentPanelParam281) {
  for (let popcornElectronDocumentPanelValue724 = popcornElectronDocumentPanelParam280.length - 1; popcornElectronDocumentPanelValue724 >= 0; --popcornElectronDocumentPanelValue724) {
    let popcornElectronDocumentPanelValue771 = popcornElectronDocumentPanelParam280[popcornElectronDocumentPanelValue724];
    if (popcornElectronDocumentPanelValue771 && popcornElectronDocumentPanelParam281.x >= popcornElectronDocumentPanelValue771.hitBox.x && popcornElectronDocumentPanelParam281.x <= popcornElectronDocumentPanelValue771.hitBox.x + popcornElectronDocumentPanelValue771.hitBox.width && popcornElectronDocumentPanelParam281.y >= popcornElectronDocumentPanelValue771.hitBox.y && popcornElectronDocumentPanelParam281.y <= popcornElectronDocumentPanelValue771.hitBox.y + popcornElectronDocumentPanelValue771.hitBox.height) return popcornElectronDocumentPanelValue771;
  }
  return null;
}
function popcornElectronDocumentPanelHelper284(popcornElectronDocumentPanelParam678, popcornElectronDocumentPanelParam679) {
  return popcornElectronDocumentPanelParam679 ? popcornElectronDocumentPanelParam678.find(item => item.id === popcornElectronDocumentPanelParam679) ?? null : null;
}
function popcornElectronDocumentPanelHelper285(popcornElectronDocumentPanelParam282, popcornElectronDocumentPanelParam283) {
  for (let popcornElectronDocumentPanelValue725 = popcornElectronDocumentPanelParam282.length - 1; popcornElectronDocumentPanelValue725 >= 0; --popcornElectronDocumentPanelValue725) {
    let popcornElectronDocumentPanelValue772 = popcornElectronDocumentPanelParam282[popcornElectronDocumentPanelValue725];
    if (popcornElectronDocumentPanelValue772 && popcornElectronDocumentPanelParam283.x >= popcornElectronDocumentPanelValue772.hitBox.x && popcornElectronDocumentPanelParam283.x <= popcornElectronDocumentPanelValue772.hitBox.x + popcornElectronDocumentPanelValue772.hitBox.width && popcornElectronDocumentPanelParam283.y >= popcornElectronDocumentPanelValue772.hitBox.y && popcornElectronDocumentPanelParam283.y <= popcornElectronDocumentPanelValue772.hitBox.y + popcornElectronDocumentPanelValue772.hitBox.height) return popcornElectronDocumentPanelValue772;
  }
  return null;
}
function popcornElectronDocumentPanelHelper286(popcornElectronDocumentPanelParam680, popcornElectronDocumentPanelParam681) {
  return popcornElectronDocumentPanelParam681 ? popcornElectronDocumentPanelParam680.find(item => item.id === popcornElectronDocumentPanelParam681) ?? null : null;
}
function js(popcornElectronDocumentPanelParam142, popcornElectronDocumentPanelParam143, popcornElectronDocumentPanelParam144 = {}) {
  if (!popcornElectronDocumentPanelParam143) return;
  let popcornElectronDocumentPanelValue500 = popcornElectronDocumentPanelParam144.fill ?? "rgba(51, 108, 255, 0.14)",
    popcornElectronDocumentPanelValue501 = popcornElectronDocumentPanelParam144.stroke ?? "rgba(51, 108, 255, 0.95)",
    popcornElectronDocumentPanelValue502 = popcornElectronDocumentPanelParam144.lineWidth ?? 1.5;
  popcornElectronDocumentPanelParam142.save();
  popcornElectronDocumentPanelValue500 && (popcornElectronDocumentPanelParam142.fillStyle = popcornElectronDocumentPanelValue500, popcornElectronDocumentPanelParam142.fillRect(popcornElectronDocumentPanelParam143.hitBox.x, popcornElectronDocumentPanelParam143.hitBox.y, popcornElectronDocumentPanelParam143.hitBox.width, popcornElectronDocumentPanelParam143.hitBox.height));
  popcornElectronDocumentPanelValue501 && (popcornElectronDocumentPanelParam142.strokeStyle = popcornElectronDocumentPanelValue501, popcornElectronDocumentPanelParam142.lineWidth = popcornElectronDocumentPanelValue502, popcornElectronDocumentPanelParam142.strokeRect(popcornElectronDocumentPanelParam143.hitBox.x + 0.5, popcornElectronDocumentPanelParam143.hitBox.y + 0.5, Math.max(0, popcornElectronDocumentPanelParam143.hitBox.width - 1), Math.max(0, popcornElectronDocumentPanelParam143.hitBox.height - 1)));
  popcornElectronDocumentPanelParam142.restore();
}
function popcornElectronDocumentPanelHelper287(popcornElectronDocumentPanelParam204, popcornElectronDocumentPanelParam205) {
  popcornElectronDocumentPanelParam205 && (popcornElectronDocumentPanelParam204.save(), popcornElectronDocumentPanelParam204.strokeStyle = "rgba(51, 108, 255, 0.95)", popcornElectronDocumentPanelParam204.fillStyle = "rgba(51, 108, 255, 0.08)", popcornElectronDocumentPanelParam204.lineWidth = 1.5, popcornElectronDocumentPanelParam204.fillRect(popcornElectronDocumentPanelParam205.hitBox.x, popcornElectronDocumentPanelParam205.hitBox.y, popcornElectronDocumentPanelParam205.hitBox.width, popcornElectronDocumentPanelParam205.hitBox.height), popcornElectronDocumentPanelParam204.strokeRect(popcornElectronDocumentPanelParam205.hitBox.x + 0.5, popcornElectronDocumentPanelParam205.hitBox.y + 0.5, Math.max(0, popcornElectronDocumentPanelParam205.hitBox.width - 1), Math.max(0, popcornElectronDocumentPanelParam205.hitBox.height - 1)), popcornElectronDocumentPanelParam204.restore());
}
function popcornElectronDocumentPanelHelper288({
  controller,
  surfaceId,
  rect,
  pageTextLayoutBlocks,
  pageObjectTargets,
  selectedTextBlockId,
  selectedObjectId,
  textEditSession,
  overlayVersion,
  enableWorker = true,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onClick,
  onDoubleClick
}) {
  let popcornElectronDocumentPanelValue237 = React.useRef(null),
    popcornElectronDocumentPanelValue238 = React.useRef(null),
    popcornElectronDocumentPanelValue239 = window.devicePixelRatio || 1,
    popcornElectronDocumentPanelValue240 = React.useMemo(() => popcornElectronDocumentPanelHelper284(pageObjectTargets, selectedObjectId), [pageObjectTargets, selectedObjectId]),
    popcornElectronDocumentPanelValue241 = React.useMemo(() => popcornElectronDocumentPanelHelper286(pageTextLayoutBlocks, selectedTextBlockId), [pageTextLayoutBlocks, selectedTextBlockId]);
  return React.useEffect(() => {
    let popcornElectronDocumentPanelValue629 = popcornElectronDocumentPanelValue237.current;
    if (!(!popcornElectronDocumentPanelValue629 || !enableWorker) && controller.attachPageCanvas({
      surfaceId,
      pageIndex: rect.pageIndex,
      canvas: popcornElectronDocumentPanelValue629,
      width: rect.width,
      height: rect.height,
      dpr: popcornElectronDocumentPanelValue239
    })) return () => {
      controller.detachPageCanvas(surfaceId);
    };
  }, [controller, popcornElectronDocumentPanelValue239, enableWorker, rect.pageIndex, surfaceId]), React.useEffect(() => {
    let popcornElectronDocumentPanelValue535 = popcornElectronDocumentPanelValue237.current;
    if (popcornElectronDocumentPanelValue535) {
      if (popcornElectronDocumentPanelValue535.style.width = `${rect.width}px`, popcornElectronDocumentPanelValue535.style.height = `${rect.height}px`, !enableWorker) {
        popcornElectronDocumentPanelValue535.width = Math.max(1, Math.round(rect.width * popcornElectronDocumentPanelValue239));
        popcornElectronDocumentPanelValue535.height = Math.max(1, Math.round(rect.height * popcornElectronDocumentPanelValue239));
        return;
      }
      controller.resizePageCanvas({
        surfaceId,
        width: rect.width,
        height: rect.height,
        dpr: popcornElectronDocumentPanelValue239
      });
    }
  }, [controller, popcornElectronDocumentPanelValue239, enableWorker, rect.height, rect.width, surfaceId]), React.useEffect(() => {
    let popcornElectronDocumentPanelValue509 = popcornElectronDocumentPanelValue238.current;
    if (!popcornElectronDocumentPanelValue509) return;
    popcornElectronDocumentPanelValue509.width = Math.max(1, Math.round(rect.width * popcornElectronDocumentPanelValue239));
    popcornElectronDocumentPanelValue509.height = Math.max(1, Math.round(rect.height * popcornElectronDocumentPanelValue239));
    popcornElectronDocumentPanelValue509.style.width = `${rect.width}px`;
    popcornElectronDocumentPanelValue509.style.height = `${rect.height}px`;
    let popcornElectronDocumentPanelValue510 = popcornElectronDocumentPanelValue509.getContext("2d");
    popcornElectronDocumentPanelValue510 && (popcornElectronDocumentPanelValue510.setTransform(popcornElectronDocumentPanelValue239, 0, 0, popcornElectronDocumentPanelValue239, 0, 0), popcornElectronDocumentPanelValue510.clearRect(0, 0, rect.width, rect.height), popcornElectronDocumentPanelHelper287(popcornElectronDocumentPanelValue510, popcornElectronDocumentPanelValue240), js(popcornElectronDocumentPanelValue510, popcornElectronDocumentPanelValue241), popcornElectronDocumentPanelValue510.save(), popcornElectronDocumentPanelValue510.translate(-rect.left, -rect.top), textEditSession.drawOverlay(popcornElectronDocumentPanelValue510), popcornElectronDocumentPanelValue510.restore());
  }, [popcornElectronDocumentPanelValue239, overlayVersion, rect.height, rect.left, rect.top, rect.width, popcornElectronDocumentPanelValue240, popcornElectronDocumentPanelValue241, textEditSession]), <div className="absolute" style={{
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  }} data-testid={`popcorn-document-page-${rect.pageIndex}`}>
        <div className="absolute inset-0 rounded-sm bg-white shadow-[0_8px_32px_rgba(15,23,42,0.12)] ring-1 ring-black/8" />
        <canvas ref={popcornElectronDocumentPanelValue237} className="absolute inset-0" data-testid={`popcorn-document-page-canvas-${rect.pageIndex}`} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onClick={onClick} onDoubleClick={onDoubleClick} />
        <canvas ref={popcornElectronDocumentPanelValue238} className="pointer-events-none absolute inset-0" data-testid={`popcorn-document-page-overlay-${rect.pageIndex}`} />
      </div>;
}
function popcornElectronDocumentPanelHelper289({
  controller,
  snapshot,
  enableWorker = true,
  artifactSearchEnabled = true,
  bottomScrollReservePx = 0,
  scrollContainerRef
}) {
  let popcornElectronDocumentPanelValue136 = React.useRef(null),
    popcornElectronDocumentPanelValue137 = scrollContainerRef ?? popcornElectronDocumentPanelValue136,
    popcornElectronDocumentPanelValue138 = React.useRef(false),
    popcornElectronDocumentPanelValue139 = React.useRef(null),
    popcornElectronDocumentPanelValue140 = React.useRef(new Map()),
    popcornElectronDocumentPanelValue141 = React.useRef(new Map()),
    popcornElectronDocumentPanelValue142 = React.useRef(null),
    popcornElectronDocumentPanelValue143 = React.useRef(snapshot.pageIndex),
    [popcornElectronDocumentPanelValue144, popcornElectronDocumentPanelValue145] = React.useState(0),
    [popcornElectronDocumentPanelValue146, popcornElectronDocumentPanelValue147] = React.useState(0),
    popcornElectronDocumentPanelValue148 = as(popcornElectronDocumentPanelValue137),
    popcornElectronDocumentPanelValue149 = React.useSyncExternalStore(popcornElectronDocumentPanelParam812 => controller.subscribeRenderedPages(popcornElectronDocumentPanelParam812), () => controller.getRenderedPages(), () => controller.getRenderedPages()),
    popcornElectronDocumentPanelValue150 = React.useMemo(() => new Map(popcornElectronDocumentPanelValue149.map(item => [item.pageIndex, item])), [popcornElectronDocumentPanelValue149]),
    popcornElectronDocumentPanelValue151 = React.useMemo(() => {
      let popcornElectronDocumentPanelValue796 = new Map();
      for (let popcornElectronDocumentPanelValue900 of controller.getObjectTargets()) {
        let popcornElectronDocumentPanelValue953 = popcornElectronDocumentPanelValue796.get(popcornElectronDocumentPanelValue900.pageIndex);
        popcornElectronDocumentPanelValue953 ? popcornElectronDocumentPanelValue953.push(popcornElectronDocumentPanelValue900) : popcornElectronDocumentPanelValue796.set(popcornElectronDocumentPanelValue900.pageIndex, [popcornElectronDocumentPanelValue900]);
      }
      return popcornElectronDocumentPanelValue796;
    }, [controller, snapshot.documentVersion, snapshot.pageLayouts, popcornElectronDocumentPanelValue149]),
    popcornElectronDocumentPanelValue152 = React.useMemo(() => {
      let popcornElectronDocumentPanelValue474 = snapshot.pageLayouts.reduce((accumulator, current) => Math.max(accumulator, Math.round(current.width * snapshot.zoom)), 0),
        popcornElectronDocumentPanelValue475 = Math.max(popcornElectronDocumentPanelValue148.width, popcornElectronDocumentPanelValue474 + 80),
        popcornElectronDocumentPanelValue476 = 32;
      return snapshot.pageLayouts.map(item => {
        let popcornElectronDocumentPanelValue602 = Math.max(1, Math.round(item.width * snapshot.zoom)),
          popcornElectronDocumentPanelValue603 = Math.max(1, Math.round(item.height * snapshot.zoom)),
          popcornElectronDocumentPanelValue604 = {
            pageIndex: item.pageIndex,
            left: Math.round((popcornElectronDocumentPanelValue475 - popcornElectronDocumentPanelValue602) / 2),
            top: popcornElectronDocumentPanelValue476,
            width: popcornElectronDocumentPanelValue602,
            height: popcornElectronDocumentPanelValue603,
            scale: snapshot.zoom
          };
        return popcornElectronDocumentPanelValue476 += popcornElectronDocumentPanelValue603 + 28, popcornElectronDocumentPanelValue604;
      });
    }, [popcornElectronDocumentPanelValue148.width, snapshot.pageLayouts, snapshot.zoom]),
    popcornElectronDocumentPanelValue153 = React.useMemo(() => {
      let popcornElectronDocumentPanelValue924 = popcornElectronDocumentPanelValue152.reduce((accumulator, current) => Math.max(accumulator, current.width), 0);
      return Math.max(popcornElectronDocumentPanelValue148.width, popcornElectronDocumentPanelValue924 + 80);
    }, [popcornElectronDocumentPanelValue148.width, popcornElectronDocumentPanelValue152]),
    popcornElectronDocumentPanelValue154 = React.useMemo(() => popcornElectronDocumentPanelValue152.map(item => ({
      key: `document-page-${item.pageIndex}`,
      index: item.pageIndex,
      top: item.top,
      height: item.height
    })), [popcornElectronDocumentPanelValue152]),
    popcornElectronDocumentPanelValue155 = React.useMemo(() => popcornElectronDocumentPanelHelper279(popcornElectronDocumentPanelValue154, {
      scrollTop: popcornElectronDocumentPanelValue146,
      viewportHeight: popcornElectronDocumentPanelValue148.height,
      overscanPx: 1600
    }), [popcornElectronDocumentPanelValue148.height, popcornElectronDocumentPanelValue146, popcornElectronDocumentPanelValue154]),
    popcornElectronDocumentPanelValue156 = React.useMemo(() => {
      let popcornElectronDocumentPanelValue901 = new Map(popcornElectronDocumentPanelValue152.map(item => [item.pageIndex, item]));
      return popcornElectronDocumentPanelValue155.map(item => popcornElectronDocumentPanelValue901.get(item.index)).filter(item => !!item);
    }, [popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue155]),
    popcornElectronDocumentPanelValue157 = React.useMemo(() => popcornElectronDocumentPanelHelper280(popcornElectronDocumentPanelValue154) + 32 + Math.max(0, bottomScrollReservePx), [bottomScrollReservePx, popcornElectronDocumentPanelValue154]),
    popcornElectronDocumentPanelValue158 = React.useMemo(() => {
      let popcornElectronDocumentPanelValue695 = new Map(),
        popcornElectronDocumentPanelValue696 = [];
      for (let popcornElectronDocumentPanelValue843 of popcornElectronDocumentPanelValue156) {
        let popcornElectronDocumentPanelValue869 = popcornElectronDocumentPanelValue150.get(popcornElectronDocumentPanelValue843.pageIndex);
        for (let popcornElectronDocumentPanelValue945 of popcornElectronDocumentPanelValue869?.textLayoutBlocks ?? []) {
          popcornElectronDocumentPanelValue695.set(popcornElectronDocumentPanelValue945.id, popcornElectronDocumentPanelValue843.pageIndex);
          popcornElectronDocumentPanelValue696.push(popcornElectronDocumentPanelHelper295(popcornElectronDocumentPanelValue945, popcornElectronDocumentPanelValue843));
        }
      }
      return popcornElectronDocumentPanelValue140.current = popcornElectronDocumentPanelValue695, popcornElectronDocumentPanelValue696;
    }, [popcornElectronDocumentPanelValue150, popcornElectronDocumentPanelValue156]),
    popcornElectronDocumentPanelValue159 = React.useMemo(() => new _remoteTextEditSessionT({
      onPointerDown: (popcornElectronDocumentPanelParam216, popcornElectronDocumentPanelParam217) => {
        let popcornElectronDocumentPanelValue589 = popcornElectronDocumentPanelHelper294(popcornElectronDocumentPanelParam216, popcornElectronDocumentPanelParam217?.blockId ?? null, popcornElectronDocumentPanelValue139.current, popcornElectronDocumentPanelValue140.current, popcornElectronDocumentPanelValue141.current);
        popcornElectronDocumentPanelValue589 && (popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelValue589.pageIndex, controller.textPointerDown(popcornElectronDocumentPanelValue589.pageIndex, popcornElectronDocumentPanelValue589.pagePoint, {
          shiftKey: popcornElectronDocumentPanelParam217?.shiftKey
        }));
      },
      onPointerMove: popcornElectronDocumentPanelParam509 => {
        let popcornElectronDocumentPanelValue878 = popcornElectronDocumentPanelHelper294(popcornElectronDocumentPanelParam509, null, popcornElectronDocumentPanelValue139.current, popcornElectronDocumentPanelValue140.current, popcornElectronDocumentPanelValue141.current);
        popcornElectronDocumentPanelValue878 && controller.textPointerMove(popcornElectronDocumentPanelValue878.pagePoint);
      },
      onPointerUp: () => {
        controller.textPointerUp();
      },
      onSelectWordAtPoint: (popcornElectronDocumentPanelParam239, popcornElectronDocumentPanelParam240) => {
        let popcornElectronDocumentPanelValue635 = popcornElectronDocumentPanelHelper294(popcornElectronDocumentPanelParam239, popcornElectronDocumentPanelParam240?.blockId ?? null, popcornElectronDocumentPanelValue139.current, popcornElectronDocumentPanelValue140.current, popcornElectronDocumentPanelValue141.current);
        popcornElectronDocumentPanelValue635 && (popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelValue635.pageIndex, controller.textSelectWordAtPoint(popcornElectronDocumentPanelValue635.pageIndex, popcornElectronDocumentPanelValue635.pagePoint));
      },
      onSelectParagraphAtPoint: (popcornElectronDocumentPanelParam230, popcornElectronDocumentPanelParam231) => {
        let popcornElectronDocumentPanelValue626 = popcornElectronDocumentPanelHelper294(popcornElectronDocumentPanelParam230, popcornElectronDocumentPanelParam231?.blockId ?? null, popcornElectronDocumentPanelValue139.current, popcornElectronDocumentPanelValue140.current, popcornElectronDocumentPanelValue141.current);
        popcornElectronDocumentPanelValue626 && (popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelValue626.pageIndex, controller.textSelectParagraphAtPoint(popcornElectronDocumentPanelValue626.pageIndex, popcornElectronDocumentPanelValue626.pagePoint));
      },
      onActivateBlockEnd: popcornElectronDocumentPanelParam735 => {
        controller.textActivateBlockEnd(popcornElectronDocumentPanelParam735);
      },
      onClear: () => {
        controller.textClear();
      },
      onKeyDown: popcornElectronDocumentPanelParam745 => {
        controller.textHandleKeyDown(popcornElectronDocumentPanelParam745);
      },
      onBeforeInput: popcornElectronDocumentPanelParam730 => {
        controller.textHandleBeforeInput(popcornElectronDocumentPanelParam730);
      },
      onInput: popcornElectronDocumentPanelParam748 => {
        controller.textHandleInput(popcornElectronDocumentPanelParam748);
      },
      onCompositionEnd: popcornElectronDocumentPanelParam718 => {
        controller.textHandleCompositionEnd(popcornElectronDocumentPanelParam718);
      }
    }, {
      onChange: () => {
        popcornElectronDocumentPanelValue145(popcornElectronDocumentPanelParam841 => popcornElectronDocumentPanelParam841 + 1);
      },
      onUnhandledKeyDown: event => {
        if (artifactSearchEnabled && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {
          controller.openFind();
          event.preventDefault();
          return;
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
          event.shiftKey ? controller.redo() : controller.undo();
          event.preventDefault();
          return;
        }
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "y" && (controller.redo(), event.preventDefault());
      }
    }), [artifactSearchEnabled, controller]);
  React.useEffect(() => {
    popcornElectronDocumentPanelValue141.current = new Map(popcornElectronDocumentPanelValue152.map(item => [item.pageIndex, item]));
  }, [popcornElectronDocumentPanelValue152]);
  React.useEffect(() => {
    let popcornElectronDocumentPanelValue777 = snapshot.textEditState?.activeBlockId ?? null;
    if (!popcornElectronDocumentPanelValue777) {
      popcornElectronDocumentPanelValue139.current = null;
      return;
    }
    let popcornElectronDocumentPanelValue778 = popcornElectronDocumentPanelValue140.current.get(popcornElectronDocumentPanelValue777);
    popcornElectronDocumentPanelValue778 !== undefined && (popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelValue778);
  }, [snapshot.textEditState]);
  React.useEffect(() => (popcornElectronDocumentPanelValue159.attachContainer(popcornElectronDocumentPanelValue137.current), () => {
    popcornElectronDocumentPanelValue159.dispose();
  }), [popcornElectronDocumentPanelValue159]);
  React.useEffect(() => {
    popcornElectronDocumentPanelValue159.updateState({
      state: snapshot.textEditState,
      blocks: popcornElectronDocumentPanelValue158
    });
  }, [snapshot.textEditState, popcornElectronDocumentPanelValue159, popcornElectronDocumentPanelValue158]);
  React.useEffect(() => popcornElectronDocumentPanelHelper282({
    controller,
    getTextLayoutBlocks: () => popcornElectronDocumentPanelValue158,
    getTextEditState: () => snapshot.textEditState,
    getPageRects: () => popcornElectronDocumentPanelValue152,
    getRenderedPages: () => popcornElectronDocumentPanelValue149
  }), [controller, popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue149, snapshot.textEditState, popcornElectronDocumentPanelValue158]);
  React.useEffect(() => {
    popcornElectronDocumentPanelValue143.current !== snapshot.pageIndex && (popcornElectronDocumentPanelValue143.current = snapshot.pageIndex, popcornElectronDocumentPanelHelper290(popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue146, popcornElectronDocumentPanelValue148.height) !== snapshot.pageIndex && (popcornElectronDocumentPanelValue142.current = snapshot.pageIndex));
  }, [popcornElectronDocumentPanelValue148.height, popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue146, snapshot.pageIndex]);
  React.useEffect(() => {
    let popcornElectronDocumentPanelValue808 = popcornElectronDocumentPanelHelper290(popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue146, popcornElectronDocumentPanelValue148.height);
    popcornElectronDocumentPanelValue142.current !== snapshot.pageIndex && (popcornElectronDocumentPanelValue808 == null || popcornElectronDocumentPanelValue808 === snapshot.pageIndex || controller.setPageIndex(popcornElectronDocumentPanelValue808, {
      origin: "scroll"
    }));
  }, [popcornElectronDocumentPanelValue148.height, controller, popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue146, snapshot.pageIndex]);
  React.useEffect(() => {
    if (!popcornElectronDocumentPanelValue137.current) return;
    if (popcornElectronDocumentPanelHelper290(popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue146, popcornElectronDocumentPanelValue148.height) === snapshot.pageIndex) {
      popcornElectronDocumentPanelValue142.current = null;
      return;
    }
    let popcornElectronDocumentPanelValue546 = popcornElectronDocumentPanelValue152[snapshot.pageIndex];
    if (!popcornElectronDocumentPanelValue546) return;
    let popcornElectronDocumentPanelValue547 = Math.max(0, popcornElectronDocumentPanelValue546.top - 32);
    if (popcornElectronDocumentPanelValue142.current = snapshot.pageIndex, typeof popcornElectronDocumentPanelValue137.current.scrollTo == "function") {
      popcornElectronDocumentPanelValue137.current.scrollTo({
        top: popcornElectronDocumentPanelValue547,
        behavior: "auto"
      });
      return;
    }
    popcornElectronDocumentPanelValue137.current.scrollTop = popcornElectronDocumentPanelValue547;
    popcornElectronDocumentPanelValue147(popcornElectronDocumentPanelValue547);
  }, [popcornElectronDocumentPanelValue148.height, popcornElectronDocumentPanelValue152, popcornElectronDocumentPanelValue146, snapshot.pageIndex]);
  let popcornElectronDocumentPanelValue160 = React.useCallback(() => {
      let popcornElectronDocumentPanelValue956 = popcornElectronDocumentPanelValue137.current;
      popcornElectronDocumentPanelValue956 && (popcornElectronDocumentPanelValue147(popcornElectronDocumentPanelValue956.scrollTop), popcornElectronDocumentPanelValue142.current = null);
    }, []),
    popcornElectronDocumentPanelValue161 = React.useCallback((popcornElectronDocumentPanelParam36, popcornElectronDocumentPanelParam37) => event => {
      popcornElectronDocumentPanelValue137.current?.focus();
      let popcornElectronDocumentPanelValue358 = popcornElectronDocumentPanelHelper291(event, popcornElectronDocumentPanelParam36),
        popcornElectronDocumentPanelValue359 = popcornElectronDocumentPanelHelper293(popcornElectronDocumentPanelValue358, popcornElectronDocumentPanelParam36);
      if (!popcornElectronDocumentPanelValue359) {
        controller.clearSelection();
        return;
      }
      let popcornElectronDocumentPanelValue360 = popcornElectronDocumentPanelHelper283(popcornElectronDocumentPanelValue151.get(popcornElectronDocumentPanelParam36.pageIndex) ?? [], popcornElectronDocumentPanelValue359);
      if (!popcornElectronDocumentPanelValue159.isActive()) {
        if (popcornElectronDocumentPanelValue360) {
          controller.setSelectedObject({
            id: popcornElectronDocumentPanelValue360.id,
            kind: popcornElectronDocumentPanelValue360.kind,
            pageIndex: popcornElectronDocumentPanelParam36.pageIndex
          });
          return;
        }
        let popcornElectronDocumentPanelValue616 = popcornElectronDocumentPanelHelper285(popcornElectronDocumentPanelParam37?.textLayoutBlocks ?? [], popcornElectronDocumentPanelValue359);
        controller.setSelectedTextBlockId(popcornElectronDocumentPanelValue616?.id ?? null, {
          pageIndex: popcornElectronDocumentPanelParam36.pageIndex
        });
        return;
      }
      if (popcornElectronDocumentPanelValue360) {
        popcornElectronDocumentPanelValue159.clear();
        controller.setSelectedObject({
          id: popcornElectronDocumentPanelValue360.id,
          kind: popcornElectronDocumentPanelValue360.kind,
          pageIndex: popcornElectronDocumentPanelParam36.pageIndex
        });
        return;
      }
      if (popcornElectronDocumentPanelValue159.tryPointerDown(popcornElectronDocumentPanelValue358, {
        shiftKey: event.shiftKey
      })) {
        popcornElectronDocumentPanelValue138.current = true;
        popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelParam36.pageIndex;
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {}
        return;
      }
      popcornElectronDocumentPanelValue159.clear();
    }, [controller, popcornElectronDocumentPanelValue151, popcornElectronDocumentPanelValue159]),
    popcornElectronDocumentPanelValue162 = React.useCallback((popcornElectronDocumentPanelParam178, popcornElectronDocumentPanelParam179) => event => {
      let popcornElectronDocumentPanelValue557 = popcornElectronDocumentPanelHelper291(event, popcornElectronDocumentPanelParam178),
        popcornElectronDocumentPanelValue558 = popcornElectronDocumentPanelHelper293(popcornElectronDocumentPanelValue557, popcornElectronDocumentPanelParam178);
      if (!popcornElectronDocumentPanelValue138.current) {
        let popcornElectronDocumentPanelValue652 = popcornElectronDocumentPanelValue151.get(popcornElectronDocumentPanelParam178.pageIndex) ?? [];
        if (popcornElectronDocumentPanelValue558 && popcornElectronDocumentPanelHelper283(popcornElectronDocumentPanelValue652, popcornElectronDocumentPanelValue558)) {
          event.currentTarget.style.cursor = "move";
          return;
        }
        let popcornElectronDocumentPanelValue653 = popcornElectronDocumentPanelValue558 ? popcornElectronDocumentPanelHelper285(popcornElectronDocumentPanelParam179?.textLayoutBlocks ?? [], popcornElectronDocumentPanelValue558) : null;
        event.currentTarget.style.cursor = popcornElectronDocumentPanelValue653 ? "text" : "";
        return;
      }
      popcornElectronDocumentPanelValue159.pointerMove(popcornElectronDocumentPanelValue557);
    }, [popcornElectronDocumentPanelValue151, popcornElectronDocumentPanelValue159]),
    popcornElectronDocumentPanelValue163 = React.useCallback(popcornElectronDocumentPanelParam301 => event => {
      if (popcornElectronDocumentPanelValue138.current) {
        if (event.currentTarget.hasPointerCapture?.(event.pointerId)) try {
          event.currentTarget.releasePointerCapture(event.pointerId);
        } catch {}
        popcornElectronDocumentPanelValue138.current = false;
        popcornElectronDocumentPanelValue159.pointerUp();
      }
    }, [popcornElectronDocumentPanelValue159]),
    popcornElectronDocumentPanelValue164 = React.useCallback(popcornElectronDocumentPanelParam435 => event => {
      if (event.detail < 3) return;
      let popcornElectronDocumentPanelValue826 = popcornElectronDocumentPanelHelper292(event, popcornElectronDocumentPanelParam435);
      popcornElectronDocumentPanelValue159.selectParagraphAtPoint(popcornElectronDocumentPanelValue826) && (popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelParam435.pageIndex, event.preventDefault());
    }, [popcornElectronDocumentPanelValue159]),
    popcornElectronDocumentPanelValue165 = React.useCallback(popcornElectronDocumentPanelParam475 => event => {
      let popcornElectronDocumentPanelValue853 = popcornElectronDocumentPanelHelper292(event, popcornElectronDocumentPanelParam475);
      (popcornElectronDocumentPanelValue159.selectWordAtPoint(popcornElectronDocumentPanelValue853) || popcornElectronDocumentPanelValue159.tryPointerDown(popcornElectronDocumentPanelValue853)) && (popcornElectronDocumentPanelValue139.current = popcornElectronDocumentPanelParam475.pageIndex, event.preventDefault());
    }, [popcornElectronDocumentPanelValue159]),
    popcornElectronDocumentPanelValue166 = event => {
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
      if (artifactSearchEnabled && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {
        event.preventDefault();
        controller.openFind();
        return;
      }
      if ((event.key === "Backspace" || event.key === "Delete") && !popcornElectronDocumentPanelValue159.isActive() && snapshot.selectedObjectId) {
        controller.deleteSelectedObject();
        event.preventDefault();
        return;
      }
      if (event.key === "Escape") {
        if (popcornElectronDocumentPanelValue159.isActive()) {
          popcornElectronDocumentPanelValue159.clear();
          event.preventDefault();
          return;
        }
        if (snapshot.findOpen) {
          controller.closeFind();
          event.preventDefault();
          return;
        }
        (snapshot.selectedTextBlockId || snapshot.selectedObjectId) && (controller.clearSelection(), event.preventDefault());
        return;
      }
      event.key === "Enter" && !popcornElectronDocumentPanelValue159.isActive() && snapshot.selectedTextBlockId && controller.textActivateBlockEnd(snapshot.selectedTextBlockId) && event.preventDefault();
    };
  return <div ref={popcornElectronDocumentPanelValue137} className="relative h-full min-h-0 overflow-auto bg-token-bg-tertiary" tabIndex={0} data-testid="popcorn-document-stage" onKeyDown={popcornElectronDocumentPanelValue166} onScroll={popcornElectronDocumentPanelValue160}>
      <div className="relative min-w-full" style={{
      height: Math.max(popcornElectronDocumentPanelValue157, popcornElectronDocumentPanelValue148.height),
      width: Math.max(popcornElectronDocumentPanelValue153, popcornElectronDocumentPanelValue148.width)
    }}>
        {popcornElectronDocumentPanelValue156.map(item => {
        let popcornElectronDocumentPanelValue424 = popcornElectronDocumentPanelValue150.get(item.pageIndex);
        return React.createElement(popcornElectronDocumentPanelHelper288, {
          controller,
          surfaceId: `document-page-${item.pageIndex}`,
          rect: item,
          pageTextLayoutBlocks: popcornElectronDocumentPanelValue424?.textLayoutBlocks ?? [],
          pageObjectTargets: popcornElectronDocumentPanelValue151.get(item.pageIndex) ?? [],
          selectedTextBlockId: snapshot.selectedTextBlockId,
          selectedObjectId: snapshot.selectedObjectId,
          textEditSession: popcornElectronDocumentPanelValue159,
          overlayVersion: popcornElectronDocumentPanelValue144,
          enableWorker,
          onPointerDown: popcornElectronDocumentPanelValue161(item, popcornElectronDocumentPanelValue424),
          onPointerMove: popcornElectronDocumentPanelValue162(item, popcornElectronDocumentPanelValue424),
          onPointerUp: popcornElectronDocumentPanelValue163(item),
          onClick: popcornElectronDocumentPanelValue164(item),
          onDoubleClick: popcornElectronDocumentPanelValue165(item)
        });
      })}
      </div>
    </div>;
}
function popcornElectronDocumentPanelHelper290(popcornElectronDocumentPanelParam293, popcornElectronDocumentPanelParam294, popcornElectronDocumentPanelParam295) {
  if (popcornElectronDocumentPanelParam293.length === 0 || popcornElectronDocumentPanelParam295 <= 0) return null;
  let popcornElectronDocumentPanelValue679 = popcornElectronDocumentPanelParam294 + popcornElectronDocumentPanelParam295 / 2,
    popcornElectronDocumentPanelValue680 = popcornElectronDocumentPanelParam293[0]?.pageIndex ?? null,
    popcornElectronDocumentPanelValue681 = 1 / 0;
  for (let popcornElectronDocumentPanelValue905 of popcornElectronDocumentPanelParam293) {
    let popcornElectronDocumentPanelValue928 = popcornElectronDocumentPanelValue905.top + popcornElectronDocumentPanelValue905.height / 2,
      popcornElectronDocumentPanelValue929 = Math.abs(popcornElectronDocumentPanelValue928 - popcornElectronDocumentPanelValue679);
    popcornElectronDocumentPanelValue929 < popcornElectronDocumentPanelValue681 && (popcornElectronDocumentPanelValue681 = popcornElectronDocumentPanelValue929, popcornElectronDocumentPanelValue680 = popcornElectronDocumentPanelValue905.pageIndex);
  }
  return popcornElectronDocumentPanelValue680;
}
function popcornElectronDocumentPanelHelper291(event, popcornElectronDocumentPanelParam491) {
  let popcornElectronDocumentPanelValue867 = event.currentTarget.getBoundingClientRect();
  return {
    x: popcornElectronDocumentPanelParam491.left + (event.clientX - popcornElectronDocumentPanelValue867.left),
    y: popcornElectronDocumentPanelParam491.top + (event.clientY - popcornElectronDocumentPanelValue867.top)
  };
}
function popcornElectronDocumentPanelHelper292(event, popcornElectronDocumentPanelParam492) {
  let popcornElectronDocumentPanelValue868 = event.currentTarget.getBoundingClientRect();
  return {
    x: popcornElectronDocumentPanelParam492.left + (event.clientX - popcornElectronDocumentPanelValue868.left),
    y: popcornElectronDocumentPanelParam492.top + (event.clientY - popcornElectronDocumentPanelValue868.top)
  };
}
function popcornElectronDocumentPanelHelper293(popcornElectronDocumentPanelParam455, popcornElectronDocumentPanelParam456) {
  let popcornElectronDocumentPanelValue827 = popcornElectronDocumentPanelParam455.x - popcornElectronDocumentPanelParam456.left,
    popcornElectronDocumentPanelValue828 = popcornElectronDocumentPanelParam455.y - popcornElectronDocumentPanelParam456.top;
  return popcornElectronDocumentPanelValue827 < 0 || popcornElectronDocumentPanelValue828 < 0 || popcornElectronDocumentPanelValue827 > popcornElectronDocumentPanelParam456.width || popcornElectronDocumentPanelValue828 > popcornElectronDocumentPanelParam456.height ? null : {
    x: popcornElectronDocumentPanelValue827 / popcornElectronDocumentPanelParam456.scale,
    y: popcornElectronDocumentPanelValue828 / popcornElectronDocumentPanelParam456.scale
  };
}
function popcornElectronDocumentPanelHelper294(popcornElectronDocumentPanelParam373, popcornElectronDocumentPanelParam374, popcornElectronDocumentPanelParam375, popcornElectronDocumentPanelParam376, popcornElectronDocumentPanelParam377) {
  let popcornElectronDocumentPanelValue763 = (popcornElectronDocumentPanelParam374 ? popcornElectronDocumentPanelParam376.get(popcornElectronDocumentPanelParam374) : undefined) ?? popcornElectronDocumentPanelParam375;
  if (popcornElectronDocumentPanelValue763 == null) return null;
  let popcornElectronDocumentPanelValue764 = popcornElectronDocumentPanelParam377.get(popcornElectronDocumentPanelValue763);
  if (!popcornElectronDocumentPanelValue764) return null;
  let popcornElectronDocumentPanelValue765 = popcornElectronDocumentPanelHelper293(popcornElectronDocumentPanelParam373, popcornElectronDocumentPanelValue764);
  return popcornElectronDocumentPanelValue765 ? {
    pageIndex: popcornElectronDocumentPanelValue763,
    pagePoint: popcornElectronDocumentPanelValue765
  } : null;
}
function popcornElectronDocumentPanelHelper295(popcornElectronDocumentPanelParam18, popcornElectronDocumentPanelParam19) {
  let popcornElectronDocumentPanelValue310 = popcornElectronDocumentPanelParam19.scale,
    popcornElectronDocumentPanelValue311 = popcornElectronDocumentPanelParam806 => popcornElectronDocumentPanelParam806 === undefined ? undefined : popcornElectronDocumentPanelParam806 * popcornElectronDocumentPanelValue310;
  return {
    ...popcornElectronDocumentPanelParam18,
    hitBox: {
      x: popcornElectronDocumentPanelParam19.left + popcornElectronDocumentPanelParam18.hitBox.x * popcornElectronDocumentPanelValue310,
      y: popcornElectronDocumentPanelParam19.top + popcornElectronDocumentPanelParam18.hitBox.y * popcornElectronDocumentPanelValue310,
      width: popcornElectronDocumentPanelParam18.hitBox.width * popcornElectronDocumentPanelValue310,
      height: popcornElectronDocumentPanelParam18.hitBox.height * popcornElectronDocumentPanelValue310
    },
    layout: {
      x: popcornElectronDocumentPanelParam19.left + popcornElectronDocumentPanelParam18.layout.x * popcornElectronDocumentPanelValue310,
      y: popcornElectronDocumentPanelParam19.top + popcornElectronDocumentPanelParam18.layout.y * popcornElectronDocumentPanelValue310,
      width: popcornElectronDocumentPanelParam18.layout.width * popcornElectronDocumentPanelValue310,
      height: popcornElectronDocumentPanelParam18.layout.height * popcornElectronDocumentPanelValue310,
      unrotatedWidth: popcornElectronDocumentPanelValue311(popcornElectronDocumentPanelParam18.layout.unrotatedWidth),
      unrotatedHeight: popcornElectronDocumentPanelValue311(popcornElectronDocumentPanelParam18.layout.unrotatedHeight),
      linkRects: popcornElectronDocumentPanelParam18.layout.linkRects.map(item => ({
        ...item,
        x: popcornElectronDocumentPanelParam19.left + item.x * popcornElectronDocumentPanelValue310,
        y: popcornElectronDocumentPanelParam19.top + item.y * popcornElectronDocumentPanelValue310,
        width: item.width * popcornElectronDocumentPanelValue310,
        height: item.height * popcornElectronDocumentPanelValue310
      })),
      lines: popcornElectronDocumentPanelParam18.layout.lines.map(item => ({
        ...item,
        widthPx: item.widthPx * popcornElectronDocumentPanelValue310,
        heightPx: item.heightPx * popcornElectronDocumentPanelValue310,
        offsetPx: item.offsetPx * popcornElectronDocumentPanelValue310,
        availableWidthPx: popcornElectronDocumentPanelValue311(item.availableWidthPx),
        baselineOffsetPx: item.baselineOffsetPx * popcornElectronDocumentPanelValue310,
        maxAscentPx: item.maxAscentPx * popcornElectronDocumentPanelValue310,
        maxDescentPx: item.maxDescentPx * popcornElectronDocumentPanelValue310,
        maxPx: item.maxPx * popcornElectronDocumentPanelValue310,
        segments: item.segments.map(_item => ({
          ..._item,
          widthPx: _item.widthPx * popcornElectronDocumentPanelValue310,
          px: _item.px * popcornElectronDocumentPanelValue310,
          ascentPx: _item.ascentPx * popcornElectronDocumentPanelValue310,
          descentPx: _item.descentPx * popcornElectronDocumentPanelValue310,
          advance: Float32Array.from(_item.advance, popcornElectronDocumentPanelParam842 => popcornElectronDocumentPanelParam842 * popcornElectronDocumentPanelValue310)
        }))
      }))
    }
  };
}
function popcornElectronDocumentPanelHelper296({
  controller,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  title,
  className,
  enableWorker = true,
  enablePageNavigation,
  theme = "web",
  isEditing = true,
  artifactSearchEnabled = true,
  bottomScrollReservePx
}) {
  let popcornElectronDocumentPanelValue204 = _remoteTextEditSessionM(controller, React.useCallback(() => popcornElectronDocumentPanelHelper278(), []));
  if (!popcornElectronDocumentPanelValue204) return null;
  let popcornElectronDocumentPanelValue205 = React.useSyncExternalStore(popcornElectronDocumentPanelParam833 => popcornElectronDocumentPanelValue204.subscribe(popcornElectronDocumentPanelParam833), () => popcornElectronDocumentPanelValue204.getSnapshot(), () => popcornElectronDocumentPanelValue204.getSnapshot()),
    [popcornElectronDocumentPanelValue206, popcornElectronDocumentPanelValue207] = React.useState(true),
    popcornElectronDocumentPanelValue208 = React.useRef(null),
    popcornElectronDocumentPanelValue209 = as(popcornElectronDocumentPanelValue208),
    popcornElectronDocumentPanelValue210 = popcornElectronDocumentPanelValue209.width > 0 && popcornElectronDocumentPanelValue205.pageLayouts.length > 0 ? popcornElectronDocumentPanelHelper297({
      pageLayouts: popcornElectronDocumentPanelValue205.pageLayouts,
      viewportWidth: popcornElectronDocumentPanelValue209.width
    }) : null,
    popcornElectronDocumentPanelValue211 = popcornElectronDocumentPanelValue210 != null && zoomToFitLabel != null,
    popcornElectronDocumentPanelValue212 = React.useCallback(popcornElectronDocumentPanelParam782 => {
      popcornElectronDocumentPanelValue207(false);
      popcornElectronDocumentPanelValue204.setZoom(popcornElectronDocumentPanelParam782);
    }, [popcornElectronDocumentPanelValue204]),
    popcornElectronDocumentPanelValue213 = popcornElectronDocumentPanelValue211 ? {
      label: zoomToFitLabel,
      selected: popcornElectronDocumentPanelValue206 && Math.abs(popcornElectronDocumentPanelValue205.zoom - popcornElectronDocumentPanelValue210) < 1e-4,
      onSelect: () => {
        let popcornElectronDocumentPanelValue593 = popcornElectronDocumentPanelHelper299({
          pageIndex: popcornElectronDocumentPanelValue205.pageIndex,
          pageLayouts: popcornElectronDocumentPanelValue205.pageLayouts,
          viewportHeight: popcornElectronDocumentPanelValue209.height,
          zoom: popcornElectronDocumentPanelValue210
        });
        popcornElectronDocumentPanelValue207(true);
        popcornElectronDocumentPanelValue204.setZoom(popcornElectronDocumentPanelValue210);
        popcornElectronDocumentPanelValue593 != null && window.requestAnimationFrame(() => {
          popcornElectronDocumentPanelHelper300(popcornElectronDocumentPanelValue208.current, popcornElectronDocumentPanelValue593);
        });
      }
    } : undefined;
  React.useEffect(() => {
    !popcornElectronDocumentPanelValue206 || !popcornElectronDocumentPanelValue211 || Math.abs(popcornElectronDocumentPanelValue205.zoom - popcornElectronDocumentPanelValue210) < 1e-4 || popcornElectronDocumentPanelValue204.setZoom(popcornElectronDocumentPanelValue210);
  }, [popcornElectronDocumentPanelValue211, popcornElectronDocumentPanelValue204, popcornElectronDocumentPanelValue210, popcornElectronDocumentPanelValue206, popcornElectronDocumentPanelValue205.zoom]);
  let popcornElectronDocumentPanelValue214 = popcornElectronDocumentPanelValue205.textEditState?.selection ? `${popcornElectronDocumentPanelValue205.textEditState.selection.selectedCharacterCount} chars selected` : popcornElectronDocumentPanelValue205.textEditState?.activeBlockId ? "Editing text" : popcornElectronDocumentPanelValue205.selectedObjectId ? `${popcornElectronDocumentPanelValue205.selectedObjectKind ?? "object"} selected` : popcornElectronDocumentPanelValue205.selectedTextBlockId ? "Text block selected" : "",
    popcornElectronDocumentPanelValue215 = renderHeaderZoomControl?.({
      fitOption: popcornElectronDocumentPanelValue213,
      onZoomPercentChange: popcornElectronDocumentPanelParam755 => {
        popcornElectronDocumentPanelValue207(false);
        popcornElectronDocumentPanelValue204.setZoom(popcornElectronDocumentPanelParam755 / 100);
      },
      triggerTestId: "popcorn-document-zoom-select",
      zoomPercent: Math.round(popcornElectronDocumentPanelValue205.zoom * 100)
    }) ?? React.createElement(remoteTextEditSessionH, {
      zoom: popcornElectronDocumentPanelValue205.zoom,
      onZoomChange: popcornElectronDocumentPanelValue212,
      fitOption: popcornElectronDocumentPanelValue213,
      testId: "popcorn-document-zoom-select"
    });
  return React.useEffect(() => {
    artifactSearchEnabled || !popcornElectronDocumentPanelValue205.findOpen || popcornElectronDocumentPanelValue204.closeFind();
  }, [artifactSearchEnabled, popcornElectronDocumentPanelValue204, popcornElectronDocumentPanelValue205.findOpen]), React.createElement(is, {
    artifactLabel: "Document",
    title: title ?? popcornElectronDocumentPanelValue205.title,
    className,
    header: React.createElement(remoteTextEditSessionG, {
      title: title ?? popcornElectronDocumentPanelValue205.title,
      closeLabel: "Close document",
      testId: "popcorn-document-header",
      compactTitle: theme === "codex",
      centeredContent: enablePageNavigation ?? theme === "codex" ? <PopcornPageNumberNavigation currentIndex={popcornElectronDocumentPanelValue205.pageIndex} totalCount={popcornElectronDocumentPanelValue205.pageCount} itemLabel="page" onChangeIndex={popcornElectronDocumentPanelParam824 => popcornElectronDocumentPanelValue204.setPageIndex(popcornElectronDocumentPanelParam824)} testId="popcorn-document-page-navigation" /> : null,
      actions: <>
            <button type="button" className="rounded-md border px-2 py-1 text-xs disabled:opacity-50" onClick={() => popcornElectronDocumentPanelValue204.undo()} disabled={!popcornElectronDocumentPanelValue205.canUndo}>
              {"Undo"}
            </button>
            <button type="button" className="rounded-md border px-2 py-1 text-xs disabled:opacity-50" onClick={() => popcornElectronDocumentPanelValue204.redo()} disabled={!popcornElectronDocumentPanelValue205.canRedo}>
              {"Redo"}
            </button>
            <button type="button" className="rounded-md border px-2 py-1 text-xs" onClick={() => isEditing ? popcornElectronDocumentPanelValue204.appendParagraph("New paragraph") : undefined} disabled={!isEditing}>
              {"Add paragraph"}
            </button>
            {popcornElectronDocumentPanelValue214.length > 0 ? <div className="rounded-full border px-3 py-1 text-xs" data-testid="popcorn-document-selection-status">
                {popcornElectronDocumentPanelValue214}
              </div> : null}
            {popcornElectronDocumentPanelValue215}
            {headerRightContent}
          </>,
      icon: React.createElement(remoteTextEditSessionUnderscore, {
        kind: "document"
      }, React.createElement(remoteTextEditSessionA, {
        className: "size-4"
      }))
    })
  }, <div className="relative h-full min-h-0">
          {artifactSearchEnabled ? React.createElement(FeatureCatalogFindBar, {
      open: popcornElectronDocumentPanelValue205.findOpen,
      query: popcornElectronDocumentPanelValue205.findQuery,
      summary: popcornElectronDocumentPanelValue205.findSummary,
      focusToken: popcornElectronDocumentPanelValue205.findFocusToken,
      onQueryChange: popcornElectronDocumentPanelParam825 => popcornElectronDocumentPanelValue204.setFindQuery(popcornElectronDocumentPanelParam825),
      onNavigatePrevious: () => popcornElectronDocumentPanelValue204.goToPreviousFindResult(),
      onNavigateNext: () => popcornElectronDocumentPanelValue204.goToNextFindResult(),
      onClose: () => popcornElectronDocumentPanelValue204.closeFind()
    }) : null}
          {React.createElement(popcornElectronDocumentPanelHelper289, {
      controller: popcornElectronDocumentPanelValue204,
      snapshot: popcornElectronDocumentPanelValue205,
      enableWorker,
      artifactSearchEnabled,
      bottomScrollReservePx,
      scrollContainerRef: popcornElectronDocumentPanelValue208
    })}
        </div>);
}
function popcornElectronDocumentPanelHelper297({
  pageLayouts,
  viewportWidth
}) {
  let popcornElectronDocumentPanelValue875 = pageLayouts.reduce((accumulator, current) => Math.max(accumulator, current.width), 0);
  return popcornElectronDocumentPanelValue875 <= 0 ? 1 : popcornElectronDocumentPanelHelper298((viewportWidth - 80) / popcornElectronDocumentPanelValue875);
}
function popcornElectronDocumentPanelHelper298(popcornElectronDocumentPanelParam749) {
  return Math.max(0.25, Math.min(3, popcornElectronDocumentPanelParam749));
}
function popcornElectronDocumentPanelHelper299({
  pageIndex,
  pageLayouts,
  viewportHeight,
  zoom
}) {
  let popcornElectronDocumentPanelValue694 = 32;
  for (let popcornElectronDocumentPanelValue858 of pageLayouts) {
    let popcornElectronDocumentPanelValue884 = Math.max(1, Math.round(popcornElectronDocumentPanelValue858.height * zoom));
    if (popcornElectronDocumentPanelValue858.pageIndex === pageIndex) return Math.max(0, popcornElectronDocumentPanelValue694 + popcornElectronDocumentPanelValue884 / 2 - viewportHeight / 2);
    popcornElectronDocumentPanelValue694 += popcornElectronDocumentPanelValue884 + 28;
  }
  return null;
}
function popcornElectronDocumentPanelHelper300(popcornElectronDocumentPanelParam447, popcornElectronDocumentPanelParam448) {
  if (popcornElectronDocumentPanelParam447 != null) {
    if (typeof popcornElectronDocumentPanelParam447.scrollTo == "function") {
      popcornElectronDocumentPanelParam447.scrollTo({
        top: popcornElectronDocumentPanelParam448,
        behavior: "auto"
      });
      return;
    }
    popcornElectronDocumentPanelParam447.scrollTop = popcornElectronDocumentPanelParam448;
  }
}
function popcornElectronDocumentPanelHelper301(popcornElectronDocumentPanelParam750) {
  return popcornElectronDocumentPanelParam750 == null ? popcornElectronDocumentPanelHelper273() : popcornElectronDocumentPanelValue73.load(popcornElectronDocumentPanelParam750);
}
export function PopcornElectronDocumentPanel({
  className,
  documentProtoVersion = 0,
  headerTitleContent,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  initialDocumentProto,
  initialPageIndex,
  initialZoom,
  title = "codex-popcorn-demo.docx",
  theme = "codex",
  isEditing = false,
  bottomScrollReservePx,
  annotationsEnabled = false,
  drawingAnnotationsEnabled = false,
  enablePageNavigation,
  navigationTarget,
  artifactSearchEnabled: popcornElectronDocumentPanelParam7 = false,
  commentThreadsEnabled = false
}) {
  let popcornElectronDocumentPanelValue263 = React.useRef(documentProtoVersion),
    popcornElectronDocumentPanelValue264 = React.useRef(null),
    popcornElectronDocumentPanelValue265 = _remoteTextEditSessionM(undefined, () => new popcornElectronDocumentPanelValue80({
      document: popcornElectronDocumentPanelHelper301(initialDocumentProto),
      initialPageIndex,
      initialZoom
    }));
  return React.useEffect(() => {
    popcornElectronDocumentPanelValue265 && documentProtoVersion !== popcornElectronDocumentPanelValue263.current && (popcornElectronDocumentPanelValue263.current = documentProtoVersion, popcornElectronDocumentPanelValue265.replaceDocument(popcornElectronDocumentPanelHelper301(initialDocumentProto)));
  }, [popcornElectronDocumentPanelValue265, documentProtoVersion, initialDocumentProto]), React.useEffect(() => {
    !popcornElectronDocumentPanelValue265 || navigationTarget == null || navigationTarget.requestId !== popcornElectronDocumentPanelValue264.current && (popcornElectronDocumentPanelValue264.current = navigationTarget.requestId, popcornElectronDocumentPanelValue265.setPageIndex(navigationTarget.pageNumber - 1, {
      origin: "navigation"
    }));
  }, [popcornElectronDocumentPanelValue265, navigationTarget]), popcornElectronDocumentPanelValue265 ? <section className={clsx("no-drag h-full min-h-0 bg-token-bg-primary", className)} data-codex-popcorn-editor={true} data-testid="popcorn-electron-document-panel">
        {React.createElement(popcornElectronDocumentPanelHelper296, {
      className: "h-full min-h-0",
      controller: popcornElectronDocumentPanelValue265,
      headerTitleContent,
      headerRightContent,
      zoomToFitLabel,
      renderHeaderZoomControl,
      title,
      theme,
      isEditing,
      bottomScrollReservePx,
      annotationsEnabled,
      drawingAnnotationsEnabled,
      enablePageNavigation,
      artifactSearchEnabled: popcornElectronDocumentPanelParam7,
      commentThreadsEnabled
    })}
      </section> : null;
}
