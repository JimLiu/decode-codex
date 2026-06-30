// Restored from ref/webview/assets/document-Cpom6Lb8.js
// Document protobuf runtime restored from the Codex webview bundle.
import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import {
  presentationDollar,
  presentationN,
  _presentationG as presentationG,
  _presentationGt as presentationGt,
  _presentationHn as presentationHn,
  _presentationO as presentationO,
  _presentationQt as presentationQt,
  presentationSr,
  presentationYn,
  presentationYt,
  presentationBr,
  presentationLr,
  presentationMr,
  presentationXr,
  _presentationYn,
  presentationYr,
} from "./presentation-runtime-current";
import { spreadsheetGn, spreadsheetHn } from "./spreadsheet-schema-current";
function documentHelper1() {
  return {
    id: void 0,
    charts: [],
    name: ``,
    widthEmu: 0,
    heightEmu: 0,
    elements: [],
    images: [],
    footnotes: [],
    comments: [],
    commentReferences: [],
    textStyles: [],
    reviewMarks: [],
    sections: [],
    numberingDefinitions: [],
    paragraphNumberings: [],
    tableStyleDefinitions: [],
    endnotes: [],
    settings: void 0,
    theme: void 0,
    fonts: [],
  };
}
function documentHelper2() {
  return {
    id: ``,
    paragraphs: [],
    referenceRunIds: [],
  };
}
function documentHelper3() {
  return {
    id: ``,
    paragraphs: [],
    referenceRunIds: [],
  };
}
function documentHelper4() {
  return {
    id: ``,
    author: ``,
    initials: ``,
    createdAt: ``,
    paragraphs: [],
  };
}
function documentHelper5() {
  return {
    commentId: ``,
    runIds: [],
  };
}
function documentHelper6() {
  return {
    numberingFormat: void 0,
    defaultNoteIds: [],
    numberingStart: void 0,
    numberingRestart: void 0,
    position: void 0,
  };
}
function documentHelper7() {
  return {
    defaultTabStop: void 0,
    autoHyphenation: void 0,
    mirrorMargins: void 0,
    footnoteProperties: void 0,
    endnoteProperties: void 0,
    displayBackgroundShape: void 0,
    backgroundFill: void 0,
  };
}
function documentHelper8() {
  return {
    relationshipId: ``,
    key: void 0,
    type: 0,
    contentType: ``,
    data: new Uint8Array(),
    subsetted: void 0,
  };
}
function documentHelper9() {
  return {
    name: ``,
    altName: void 0,
    family: void 0,
    embeddedFonts: [],
  };
}
function documentHelper10() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    header: 0,
    footer: 0,
    gutter: 0,
  };
}
function documentHelper11() {
  return {
    widthEmu: 0,
    heightEmu: 0,
    pageMargin: void 0,
  };
}
function documentHelper12() {
  return {
    count: 0,
    space: 0,
    widths: [],
    hasSeparatorLine: !1,
  };
}
function documentHelper13() {
  return {
    type: void 0,
    linePitch: void 0,
    charSpace: void 0,
  };
}
function documentHelper14() {
  return {
    elements: [],
  };
}
function documentHelper15() {
  return {
    level: 0,
    numberFormat: ``,
    levelText: ``,
    startAt: 0,
    paragraphStyleId: ``,
  };
}
function documentHelper16() {
  return {
    numId: ``,
    abstractNumId: ``,
    levels: [],
  };
}
function documentHelper17() {
  return {
    paragraphId: ``,
    numId: ``,
    level: 0,
  };
}
function documentHelper18() {
  return {
    id: ``,
    breakType: 0,
    pageSetup: void 0,
    columns: void 0,
    elements: [],
    header: void 0,
    footer: void 0,
    startsWithPageBreak: !1,
    pageNumberStart: void 0,
    pageNumberFormat: void 0,
    differentFirstPage: void 0,
    firstHeader: void 0,
    firstFooter: void 0,
    documentGrid: void 0,
  };
}
function documentHelper19() {
  return {
    id: void 0,
    elements: [],
    charts: [],
  };
}
function documentHelper20() {
  return {
    id: void 0,
    type: 0,
    version: ``,
    document: void 0,
    presentation: void 0,
    workbook: void 0,
    playground: void 0,
  };
}
function documentHelper21(documentParam82) {
  let documentValue95 = $.Number(documentParam82.toString());
  if (documentValue95 > $.Number.MAX_SAFE_INTEGER)
    throw new $.Error(`Value is larger than Number.MAX_SAFE_INTEGER`);
  if (documentValue95 < $.Number.MIN_SAFE_INTEGER)
    throw new $.Error(`Value is smaller than Number.MIN_SAFE_INTEGER`);
  return documentValue95;
}
var documentT,
  documentD,
  documentC,
  documentN,
  documentO,
  documentM,
  documentF,
  documentI,
  documentA,
  documentG,
  documentL,
  documentU,
  documentP,
  documentY,
  documentB,
  documentR,
  documentS,
  documentH,
  documentV,
  documentUnderscore,
  documentX,
  _documentC,
  _documentS,
  _documentT,
  $,
  documentW = rolldownRuntimeN(() => {
    (presentationBr(),
      presentationHn(),
      presentationQt(),
      presentationYr(),
      spreadsheetGn(),
      (documentT = `oaiproto.coworker.docx`),
      (documentD = (function (documentParam52) {
        return (
          (documentParam52[
            (documentParam52.EMBEDDED_FONT_TYPE_UNSPECIFIED = 0)
          ] = `EMBEDDED_FONT_TYPE_UNSPECIFIED`),
          (documentParam52[(documentParam52.EMBEDDED_FONT_TYPE_REGULAR = 1)] =
            `EMBEDDED_FONT_TYPE_REGULAR`),
          (documentParam52[(documentParam52.EMBEDDED_FONT_TYPE_BOLD = 2)] =
            `EMBEDDED_FONT_TYPE_BOLD`),
          (documentParam52[(documentParam52.EMBEDDED_FONT_TYPE_ITALIC = 3)] =
            `EMBEDDED_FONT_TYPE_ITALIC`),
          (documentParam52[
            (documentParam52.EMBEDDED_FONT_TYPE_BOLD_ITALIC = 4)
          ] = `EMBEDDED_FONT_TYPE_BOLD_ITALIC`),
          (documentParam52[(documentParam52.UNRECOGNIZED = -1)] =
            `UNRECOGNIZED`),
          documentParam52
        );
      })({})),
      (documentC = (function (documentParam51) {
        return (
          (documentParam51[
            (documentParam51.SECTION_BREAK_TYPE_UNSPECIFIED = 0)
          ] = `SECTION_BREAK_TYPE_UNSPECIFIED`),
          (documentParam51[
            (documentParam51.SECTION_BREAK_TYPE_CONTINUOUS = 1)
          ] = `SECTION_BREAK_TYPE_CONTINUOUS`),
          (documentParam51[(documentParam51.SECTION_BREAK_TYPE_NEXT_PAGE = 2)] =
            `SECTION_BREAK_TYPE_NEXT_PAGE`),
          (documentParam51[(documentParam51.SECTION_BREAK_TYPE_EVEN_PAGE = 3)] =
            `SECTION_BREAK_TYPE_EVEN_PAGE`),
          (documentParam51[(documentParam51.SECTION_BREAK_TYPE_ODD_PAGE = 4)] =
            `SECTION_BREAK_TYPE_ODD_PAGE`),
          (documentParam51[(documentParam51.UNRECOGNIZED = -1)] =
            `UNRECOGNIZED`),
          documentParam51
        );
      })({})),
      (documentN = (function (documentParam53) {
        return (
          (documentParam53[(documentParam53.ARTIFACT_TYPE_UNSPECIFIED = 0)] =
            `ARTIFACT_TYPE_UNSPECIFIED`),
          (documentParam53[(documentParam53.ARTIFACT_TYPE_DOCUMENT = 1)] =
            `ARTIFACT_TYPE_DOCUMENT`),
          (documentParam53[(documentParam53.ARTIFACT_TYPE_PRESENTATION = 2)] =
            `ARTIFACT_TYPE_PRESENTATION`),
          (documentParam53[(documentParam53.ARTIFACT_TYPE_WORKBOOK = 3)] =
            `ARTIFACT_TYPE_WORKBOOK`),
          (documentParam53[(documentParam53.ARTIFACT_TYPE_PLAYGROUND = 4)] =
            `ARTIFACT_TYPE_PLAYGROUND`),
          (documentParam53[(documentParam53.UNRECOGNIZED = -1)] =
            `UNRECOGNIZED`),
          documentParam53
        );
      })({})),
      (documentO = {
        encode(documentParam6, documentParam7 = new presentationSr()) {
          documentParam6.id !== void 0 &&
            documentParam7.uint32(50).string(documentParam6.id);
          for (let documentValue121 of documentParam6.charts)
            _presentationYn
              .encode(documentValue121, documentParam7.uint32(10).fork())
              .join();
          (documentParam6.name !== `` &&
            documentParam7.uint32(18).string(documentParam6.name),
            documentParam6.widthEmu !== 0 &&
              documentParam7.uint32(24).int64(documentParam6.widthEmu),
            documentParam6.heightEmu !== 0 &&
              documentParam7.uint32(32).int64(documentParam6.heightEmu));
          for (let documentValue116 of documentParam6.elements)
            presentationO
              .encode(documentValue116, documentParam7.uint32(42).fork())
              .join();
          for (let documentValue122 of documentParam6.images)
            presentationN
              .encode(documentValue122, documentParam7.uint32(58).fork())
              .join();
          for (let documentValue113 of documentParam6.footnotes)
            documentM
              .encode(documentValue113, documentParam7.uint32(66).fork())
              .join();
          for (let documentValue117 of documentParam6.comments)
            documentI
              .encode(documentValue117, documentParam7.uint32(74).fork())
              .join();
          for (let documentValue106 of documentParam6.commentReferences)
            documentA
              .encode(documentValue106, documentParam7.uint32(82).fork())
              .join();
          for (let documentValue109 of documentParam6.textStyles)
            presentationMr
              .encode(documentValue109, documentParam7.uint32(90).fork())
              .join();
          for (let documentValue108 of documentParam6.reviewMarks)
            presentationLr
              .encode(documentValue108, documentParam7.uint32(98).fork())
              .join();
          for (let documentValue114 of documentParam6.sections)
            _documentC
              .encode(documentValue114, documentParam7.uint32(106).fork())
              .join();
          for (let documentValue104 of documentParam6.numberingDefinitions)
            documentUnderscore
              .encode(documentValue104, documentParam7.uint32(114).fork())
              .join();
          for (let documentValue105 of documentParam6.paragraphNumberings)
            documentX
              .encode(documentValue105, documentParam7.uint32(122).fork())
              .join();
          for (let documentValue103 of documentParam6.tableStyleDefinitions)
            presentationGt
              .encode(documentValue103, documentParam7.uint32(130).fork())
              .join();
          for (let documentValue115 of documentParam6.endnotes)
            documentF
              .encode(documentValue115, documentParam7.uint32(138).fork())
              .join();
          (documentParam6.settings !== void 0 &&
            documentL
              .encode(
                documentParam6.settings,
                documentParam7.uint32(146).fork(),
              )
              .join(),
            documentParam6.theme !== void 0 &&
              presentationYt
                .encode(documentParam6.theme, documentParam7.uint32(154).fork())
                .join());
          for (let documentValue123 of documentParam6.fonts)
            documentP
              .encode(documentValue123, documentParam7.uint32(162).fork())
              .join();
          return documentParam7;
        },
        decode(documentParam1, documentParam2) {
          let documentValue1 =
              documentParam1 instanceof presentationXr
                ? documentParam1
                : new presentationXr(documentParam1),
            documentValue2 =
              documentParam2 === void 0
                ? documentValue1.len
                : documentValue1.pos + documentParam2,
            documentValue3 = documentHelper1();
          for (; documentValue1.pos < documentValue2; ) {
            let documentValue4 = documentValue1.uint32();
            switch (documentValue4 >>> 3) {
              case 6:
                if (documentValue4 !== 50) break;
                documentValue3.id = documentValue1.string();
                continue;
              case 1:
                if (documentValue4 !== 10) break;
                documentValue3.charts.push(
                  _presentationYn.decode(
                    documentValue1,
                    documentValue1.uint32(),
                  ),
                );
                continue;
              case 2:
                if (documentValue4 !== 18) break;
                documentValue3.name = documentValue1.string();
                continue;
              case 3:
                if (documentValue4 !== 24) break;
                documentValue3.widthEmu = documentHelper21(
                  documentValue1.int64(),
                );
                continue;
              case 4:
                if (documentValue4 !== 32) break;
                documentValue3.heightEmu = documentHelper21(
                  documentValue1.int64(),
                );
                continue;
              case 5:
                if (documentValue4 !== 42) break;
                documentValue3.elements.push(
                  presentationO.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 7:
                if (documentValue4 !== 58) break;
                documentValue3.images.push(
                  presentationN.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 8:
                if (documentValue4 !== 66) break;
                documentValue3.footnotes.push(
                  documentM.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 9:
                if (documentValue4 !== 74) break;
                documentValue3.comments.push(
                  documentI.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 10:
                if (documentValue4 !== 82) break;
                documentValue3.commentReferences.push(
                  documentA.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 11:
                if (documentValue4 !== 90) break;
                documentValue3.textStyles.push(
                  presentationMr.decode(
                    documentValue1,
                    documentValue1.uint32(),
                  ),
                );
                continue;
              case 12:
                if (documentValue4 !== 98) break;
                documentValue3.reviewMarks.push(
                  presentationLr.decode(
                    documentValue1,
                    documentValue1.uint32(),
                  ),
                );
                continue;
              case 13:
                if (documentValue4 !== 106) break;
                documentValue3.sections.push(
                  _documentC.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 14:
                if (documentValue4 !== 114) break;
                documentValue3.numberingDefinitions.push(
                  documentUnderscore.decode(
                    documentValue1,
                    documentValue1.uint32(),
                  ),
                );
                continue;
              case 15:
                if (documentValue4 !== 122) break;
                documentValue3.paragraphNumberings.push(
                  documentX.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 16:
                if (documentValue4 !== 130) break;
                documentValue3.tableStyleDefinitions.push(
                  presentationGt.decode(
                    documentValue1,
                    documentValue1.uint32(),
                  ),
                );
                continue;
              case 17:
                if (documentValue4 !== 138) break;
                documentValue3.endnotes.push(
                  documentF.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
              case 18:
                if (documentValue4 !== 146) break;
                documentValue3.settings = documentL.decode(
                  documentValue1,
                  documentValue1.uint32(),
                );
                continue;
              case 19:
                if (documentValue4 !== 154) break;
                documentValue3.theme = presentationYt.decode(
                  documentValue1,
                  documentValue1.uint32(),
                );
                continue;
              case 20:
                if (documentValue4 !== 162) break;
                documentValue3.fonts.push(
                  documentP.decode(documentValue1, documentValue1.uint32()),
                );
                continue;
            }
            if ((documentValue4 & 7) == 4 || documentValue4 === 0) break;
            documentValue1.skip(documentValue4 & 7);
          }
          return documentValue3;
        },
        create(documentParam103) {
          return documentO.fromPartial(documentParam103 ?? {});
        },
        fromPartial(documentParam5) {
          let documentValue9 = documentHelper1();
          return (
            (documentValue9.id = documentParam5.id ?? void 0),
            (documentValue9.charts =
              documentParam5.charts?.map((documentParam123) =>
                _presentationYn.fromPartial(documentParam123),
              ) || []),
            (documentValue9.name = documentParam5.name ?? ``),
            (documentValue9.widthEmu = documentParam5.widthEmu ?? 0),
            (documentValue9.heightEmu = documentParam5.heightEmu ?? 0),
            (documentValue9.elements =
              documentParam5.elements?.map((documentParam124) =>
                presentationO.fromPartial(documentParam124),
              ) || []),
            (documentValue9.images =
              documentParam5.images?.map((documentParam125) =>
                presentationN.fromPartial(documentParam125),
              ) || []),
            (documentValue9.footnotes =
              documentParam5.footnotes?.map((documentParam126) =>
                documentM.fromPartial(documentParam126),
              ) || []),
            (documentValue9.comments =
              documentParam5.comments?.map((documentParam127) =>
                documentI.fromPartial(documentParam127),
              ) || []),
            (documentValue9.commentReferences =
              documentParam5.commentReferences?.map((documentParam128) =>
                documentA.fromPartial(documentParam128),
              ) || []),
            (documentValue9.textStyles =
              documentParam5.textStyles?.map((documentParam129) =>
                presentationMr.fromPartial(documentParam129),
              ) || []),
            (documentValue9.reviewMarks =
              documentParam5.reviewMarks?.map((documentParam130) =>
                presentationLr.fromPartial(documentParam130),
              ) || []),
            (documentValue9.sections =
              documentParam5.sections?.map((documentParam131) =>
                _documentC.fromPartial(documentParam131),
              ) || []),
            (documentValue9.numberingDefinitions =
              documentParam5.numberingDefinitions?.map((documentParam132) =>
                documentUnderscore.fromPartial(documentParam132),
              ) || []),
            (documentValue9.paragraphNumberings =
              documentParam5.paragraphNumberings?.map((documentParam133) =>
                documentX.fromPartial(documentParam133),
              ) || []),
            (documentValue9.tableStyleDefinitions =
              documentParam5.tableStyleDefinitions?.map((documentParam134) =>
                presentationGt.fromPartial(documentParam134),
              ) || []),
            (documentValue9.endnotes =
              documentParam5.endnotes?.map((documentParam135) =>
                documentF.fromPartial(documentParam135),
              ) || []),
            (documentValue9.settings =
              documentParam5.settings !== void 0 &&
              documentParam5.settings !== null
                ? documentL.fromPartial(documentParam5.settings)
                : void 0),
            (documentValue9.theme =
              documentParam5.theme !== void 0 && documentParam5.theme !== null
                ? presentationYt.fromPartial(documentParam5.theme)
                : void 0),
            (documentValue9.fonts =
              documentParam5.fonts?.map((documentParam136) =>
                documentP.fromPartial(documentParam136),
              ) || []),
            documentValue9
          );
        },
      }),
      (documentM = {
        encode(documentParam91, documentParam92 = new presentationSr()) {
          documentParam91.id !== `` &&
            documentParam92.uint32(10).string(documentParam91.id);
          for (let documentValue110 of documentParam91.paragraphs)
            presentationG
              .encode(documentValue110, documentParam92.uint32(18).fork())
              .join();
          for (let documentValue126 of documentParam91.referenceRunIds)
            documentParam92.uint32(26).string(documentValue126);
          return documentParam92;
        },
        decode(documentParam35, documentParam36) {
          let documentValue51 =
              documentParam35 instanceof presentationXr
                ? documentParam35
                : new presentationXr(documentParam35),
            documentValue52 =
              documentParam36 === void 0
                ? documentValue51.len
                : documentValue51.pos + documentParam36,
            documentValue53 = documentHelper2();
          for (; documentValue51.pos < documentValue52; ) {
            let documentValue74 = documentValue51.uint32();
            switch (documentValue74 >>> 3) {
              case 1:
                if (documentValue74 !== 10) break;
                documentValue53.id = documentValue51.string();
                continue;
              case 2:
                if (documentValue74 !== 18) break;
                documentValue53.paragraphs.push(
                  presentationG.decode(
                    documentValue51,
                    documentValue51.uint32(),
                  ),
                );
                continue;
              case 3:
                if (documentValue74 !== 26) break;
                documentValue53.referenceRunIds.push(documentValue51.string());
                continue;
            }
            if ((documentValue74 & 7) == 4 || documentValue74 === 0) break;
            documentValue51.skip(documentValue74 & 7);
          }
          return documentValue53;
        },
        create(documentParam104) {
          return documentM.fromPartial(documentParam104 ?? {});
        },
        fromPartial(documentParam80) {
          let documentValue93 = documentHelper2();
          return (
            (documentValue93.id = documentParam80.id ?? ``),
            (documentValue93.paragraphs =
              documentParam80.paragraphs?.map((documentParam137) =>
                presentationG.fromPartial(documentParam137),
              ) || []),
            (documentValue93.referenceRunIds =
              documentParam80.referenceRunIds?.map(
                (documentParam146) => documentParam146,
              ) || []),
            documentValue93
          );
        },
      }),
      (documentF = {
        encode(documentParam93, documentParam94 = new presentationSr()) {
          documentParam93.id !== `` &&
            documentParam94.uint32(10).string(documentParam93.id);
          for (let documentValue111 of documentParam93.paragraphs)
            presentationG
              .encode(documentValue111, documentParam94.uint32(18).fork())
              .join();
          for (let documentValue127 of documentParam93.referenceRunIds)
            documentParam94.uint32(26).string(documentValue127);
          return documentParam94;
        },
        decode(documentParam37, documentParam38) {
          let documentValue54 =
              documentParam37 instanceof presentationXr
                ? documentParam37
                : new presentationXr(documentParam37),
            documentValue55 =
              documentParam38 === void 0
                ? documentValue54.len
                : documentValue54.pos + documentParam38,
            documentValue56 = documentHelper3();
          for (; documentValue54.pos < documentValue55; ) {
            let documentValue75 = documentValue54.uint32();
            switch (documentValue75 >>> 3) {
              case 1:
                if (documentValue75 !== 10) break;
                documentValue56.id = documentValue54.string();
                continue;
              case 2:
                if (documentValue75 !== 18) break;
                documentValue56.paragraphs.push(
                  presentationG.decode(
                    documentValue54,
                    documentValue54.uint32(),
                  ),
                );
                continue;
              case 3:
                if (documentValue75 !== 26) break;
                documentValue56.referenceRunIds.push(documentValue54.string());
                continue;
            }
            if ((documentValue75 & 7) == 4 || documentValue75 === 0) break;
            documentValue54.skip(documentValue75 & 7);
          }
          return documentValue56;
        },
        create(documentParam105) {
          return documentF.fromPartial(documentParam105 ?? {});
        },
        fromPartial(documentParam81) {
          let documentValue94 = documentHelper3();
          return (
            (documentValue94.id = documentParam81.id ?? ``),
            (documentValue94.paragraphs =
              documentParam81.paragraphs?.map((documentParam138) =>
                presentationG.fromPartial(documentParam138),
              ) || []),
            (documentValue94.referenceRunIds =
              documentParam81.referenceRunIds?.map(
                (documentParam147) => documentParam147,
              ) || []),
            documentValue94
          );
        },
      }),
      (documentI = {
        encode(documentParam64, documentParam65 = new presentationSr()) {
          (documentParam64.id !== `` &&
            documentParam65.uint32(10).string(documentParam64.id),
            documentParam64.author !== `` &&
              documentParam65.uint32(18).string(documentParam64.author),
            documentParam64.initials !== `` &&
              documentParam65.uint32(26).string(documentParam64.initials),
            documentParam64.createdAt !== `` &&
              documentParam65.uint32(34).string(documentParam64.createdAt));
          for (let documentValue112 of documentParam64.paragraphs)
            presentationG
              .encode(documentValue112, documentParam65.uint32(42).fork())
              .join();
          return documentParam65;
        },
        decode(documentParam23, documentParam24) {
          let documentValue32 =
              documentParam23 instanceof presentationXr
                ? documentParam23
                : new presentationXr(documentParam23),
            documentValue33 =
              documentParam24 === void 0
                ? documentValue32.len
                : documentValue32.pos + documentParam24,
            documentValue34 = documentHelper4();
          for (; documentValue32.pos < documentValue33; ) {
            let documentValue46 = documentValue32.uint32();
            switch (documentValue46 >>> 3) {
              case 1:
                if (documentValue46 !== 10) break;
                documentValue34.id = documentValue32.string();
                continue;
              case 2:
                if (documentValue46 !== 18) break;
                documentValue34.author = documentValue32.string();
                continue;
              case 3:
                if (documentValue46 !== 26) break;
                documentValue34.initials = documentValue32.string();
                continue;
              case 4:
                if (documentValue46 !== 34) break;
                documentValue34.createdAt = documentValue32.string();
                continue;
              case 5:
                if (documentValue46 !== 42) break;
                documentValue34.paragraphs.push(
                  presentationG.decode(
                    documentValue32,
                    documentValue32.uint32(),
                  ),
                );
                continue;
            }
            if ((documentValue46 & 7) == 4 || documentValue46 === 0) break;
            documentValue32.skip(documentValue46 & 7);
          }
          return documentValue34;
        },
        create(documentParam106) {
          return documentI.fromPartial(documentParam106 ?? {});
        },
        fromPartial(documentParam70) {
          let documentValue88 = documentHelper4();
          return (
            (documentValue88.id = documentParam70.id ?? ``),
            (documentValue88.author = documentParam70.author ?? ``),
            (documentValue88.initials = documentParam70.initials ?? ``),
            (documentValue88.createdAt = documentParam70.createdAt ?? ``),
            (documentValue88.paragraphs =
              documentParam70.paragraphs?.map((documentParam139) =>
                presentationG.fromPartial(documentParam139),
              ) || []),
            documentValue88
          );
        },
      }),
      (documentA = {
        encode(documentParam98, documentParam99 = new presentationSr()) {
          documentParam98.commentId !== `` &&
            documentParam99.uint32(10).string(documentParam98.commentId);
          for (let documentValue129 of documentParam98.runIds)
            documentParam99.uint32(18).string(documentValue129);
          return documentParam99;
        },
        decode(documentParam49, documentParam50) {
          let documentValue70 =
              documentParam49 instanceof presentationXr
                ? documentParam49
                : new presentationXr(documentParam49),
            documentValue71 =
              documentParam50 === void 0
                ? documentValue70.len
                : documentValue70.pos + documentParam50,
            documentValue72 = documentHelper5();
          for (; documentValue70.pos < documentValue71; ) {
            let documentValue83 = documentValue70.uint32();
            switch (documentValue83 >>> 3) {
              case 1:
                if (documentValue83 !== 10) break;
                documentValue72.commentId = documentValue70.string();
                continue;
              case 2:
                if (documentValue83 !== 18) break;
                documentValue72.runIds.push(documentValue70.string());
                continue;
            }
            if ((documentValue83 & 7) == 4 || documentValue83 === 0) break;
            documentValue70.skip(documentValue83 & 7);
          }
          return documentValue72;
        },
        create(documentParam107) {
          return documentA.fromPartial(documentParam107 ?? {});
        },
        fromPartial(documentParam97) {
          let documentValue100 = documentHelper5();
          return (
            (documentValue100.commentId = documentParam97.commentId ?? ``),
            (documentValue100.runIds =
              documentParam97.runIds?.map(
                (documentParam148) => documentParam148,
              ) || []),
            documentValue100
          );
        },
      }),
      (documentG = {
        encode(documentParam56, documentParam57 = new presentationSr()) {
          documentParam56.numberingFormat !== void 0 &&
            documentParam57.uint32(10).string(documentParam56.numberingFormat);
          for (let documentValue128 of documentParam56.defaultNoteIds)
            documentParam57.uint32(18).string(documentValue128);
          return (
            documentParam56.numberingStart !== void 0 &&
              documentParam57.uint32(24).int32(documentParam56.numberingStart),
            documentParam56.numberingRestart !== void 0 &&
              documentParam57
                .uint32(34)
                .string(documentParam56.numberingRestart),
            documentParam56.position !== void 0 &&
              documentParam57.uint32(42).string(documentParam56.position),
            documentParam57
          );
        },
        decode(documentParam21, documentParam22) {
          let documentValue28 =
              documentParam21 instanceof presentationXr
                ? documentParam21
                : new presentationXr(documentParam21),
            documentValue29 =
              documentParam22 === void 0
                ? documentValue28.len
                : documentValue28.pos + documentParam22,
            documentValue30 = documentHelper6();
          for (; documentValue28.pos < documentValue29; ) {
            let documentValue45 = documentValue28.uint32();
            switch (documentValue45 >>> 3) {
              case 1:
                if (documentValue45 !== 10) break;
                documentValue30.numberingFormat = documentValue28.string();
                continue;
              case 2:
                if (documentValue45 !== 18) break;
                documentValue30.defaultNoteIds.push(documentValue28.string());
                continue;
              case 3:
                if (documentValue45 !== 24) break;
                documentValue30.numberingStart = documentValue28.int32();
                continue;
              case 4:
                if (documentValue45 !== 34) break;
                documentValue30.numberingRestart = documentValue28.string();
                continue;
              case 5:
                if (documentValue45 !== 42) break;
                documentValue30.position = documentValue28.string();
                continue;
            }
            if ((documentValue45 & 7) == 4 || documentValue45 === 0) break;
            documentValue28.skip(documentValue45 & 7);
          }
          return documentValue30;
        },
        create(documentParam108) {
          return documentG.fromPartial(documentParam108 ?? {});
        },
        fromPartial(documentParam63) {
          let documentValue84 = documentHelper6();
          return (
            (documentValue84.numberingFormat =
              documentParam63.numberingFormat ?? void 0),
            (documentValue84.defaultNoteIds =
              documentParam63.defaultNoteIds?.map(
                (documentParam149) => documentParam149,
              ) || []),
            (documentValue84.numberingStart =
              documentParam63.numberingStart ?? void 0),
            (documentValue84.numberingRestart =
              documentParam63.numberingRestart ?? void 0),
            (documentValue84.position = documentParam63.position ?? void 0),
            documentValue84
          );
        },
      }),
      (documentL = {
        encode(documentParam31, documentParam32 = new presentationSr()) {
          return (
            documentParam31.defaultTabStop !== void 0 &&
              documentParam32.uint32(8).int32(documentParam31.defaultTabStop),
            documentParam31.autoHyphenation !== void 0 &&
              documentParam32.uint32(16).bool(documentParam31.autoHyphenation),
            documentParam31.mirrorMargins !== void 0 &&
              documentParam32.uint32(24).bool(documentParam31.mirrorMargins),
            documentParam31.footnoteProperties !== void 0 &&
              documentG
                .encode(
                  documentParam31.footnoteProperties,
                  documentParam32.uint32(34).fork(),
                )
                .join(),
            documentParam31.endnoteProperties !== void 0 &&
              documentG
                .encode(
                  documentParam31.endnoteProperties,
                  documentParam32.uint32(42).fork(),
                )
                .join(),
            documentParam31.displayBackgroundShape !== void 0 &&
              documentParam32
                .uint32(48)
                .bool(documentParam31.displayBackgroundShape),
            documentParam31.backgroundFill !== void 0 &&
              presentationYn
                .encode(
                  documentParam31.backgroundFill,
                  documentParam32.uint32(58).fork(),
                )
                .join(),
            documentParam32
          );
        },
        decode(documentParam11, documentParam12) {
          let documentValue11 =
              documentParam11 instanceof presentationXr
                ? documentParam11
                : new presentationXr(documentParam11),
            documentValue12 =
              documentParam12 === void 0
                ? documentValue11.len
                : documentValue11.pos + documentParam12,
            documentValue13 = documentHelper7();
          for (; documentValue11.pos < documentValue12; ) {
            let documentValue20 = documentValue11.uint32();
            switch (documentValue20 >>> 3) {
              case 1:
                if (documentValue20 !== 8) break;
                documentValue13.defaultTabStop = documentValue11.int32();
                continue;
              case 2:
                if (documentValue20 !== 16) break;
                documentValue13.autoHyphenation = documentValue11.bool();
                continue;
              case 3:
                if (documentValue20 !== 24) break;
                documentValue13.mirrorMargins = documentValue11.bool();
                continue;
              case 4:
                if (documentValue20 !== 34) break;
                documentValue13.footnoteProperties = documentG.decode(
                  documentValue11,
                  documentValue11.uint32(),
                );
                continue;
              case 5:
                if (documentValue20 !== 42) break;
                documentValue13.endnoteProperties = documentG.decode(
                  documentValue11,
                  documentValue11.uint32(),
                );
                continue;
              case 6:
                if (documentValue20 !== 48) break;
                documentValue13.displayBackgroundShape = documentValue11.bool();
                continue;
              case 7:
                if (documentValue20 !== 58) break;
                documentValue13.backgroundFill = presentationYn.decode(
                  documentValue11,
                  documentValue11.uint32(),
                );
                continue;
            }
            if ((documentValue20 & 7) == 4 || documentValue20 === 0) break;
            documentValue11.skip(documentValue20 & 7);
          }
          return documentValue13;
        },
        create(documentParam109) {
          return documentL.fromPartial(documentParam109 ?? {});
        },
        fromPartial(documentParam27) {
          let documentValue38 = documentHelper7();
          return (
            (documentValue38.defaultTabStop =
              documentParam27.defaultTabStop ?? void 0),
            (documentValue38.autoHyphenation =
              documentParam27.autoHyphenation ?? void 0),
            (documentValue38.mirrorMargins =
              documentParam27.mirrorMargins ?? void 0),
            (documentValue38.footnoteProperties =
              documentParam27.footnoteProperties !== void 0 &&
              documentParam27.footnoteProperties !== null
                ? documentG.fromPartial(documentParam27.footnoteProperties)
                : void 0),
            (documentValue38.endnoteProperties =
              documentParam27.endnoteProperties !== void 0 &&
              documentParam27.endnoteProperties !== null
                ? documentG.fromPartial(documentParam27.endnoteProperties)
                : void 0),
            (documentValue38.displayBackgroundShape =
              documentParam27.displayBackgroundShape ?? void 0),
            (documentValue38.backgroundFill =
              documentParam27.backgroundFill !== void 0 &&
              documentParam27.backgroundFill !== null
                ? presentationYn.fromPartial(documentParam27.backgroundFill)
                : void 0),
            documentValue38
          );
        },
      }),
      (documentU = {
        encode(event, documentParam60 = new presentationSr()) {
          return (
            event.relationshipId !== `` &&
              documentParam60.uint32(10).string(event.relationshipId),
            event.key !== void 0 &&
              documentParam60.uint32(18).string(event.key),
            event.type !== 0 && documentParam60.uint32(24).int32(event.type),
            event.contentType !== `` &&
              documentParam60.uint32(34).string(event.contentType),
            event.data.length !== 0 &&
              documentParam60.uint32(42).bytes(event.data),
            event.subsetted !== void 0 &&
              documentParam60.uint32(48).bool(event.subsetted),
            documentParam60
          );
        },
        decode(documentParam17, documentParam18) {
          let documentValue21 =
              documentParam17 instanceof presentationXr
                ? documentParam17
                : new presentationXr(documentParam17),
            documentValue22 =
              documentParam18 === void 0
                ? documentValue21.len
                : documentValue21.pos + documentParam18,
            documentValue23 = documentHelper8();
          for (; documentValue21.pos < documentValue22; ) {
            let documentValue39 = documentValue21.uint32();
            switch (documentValue39 >>> 3) {
              case 1:
                if (documentValue39 !== 10) break;
                documentValue23.relationshipId = documentValue21.string();
                continue;
              case 2:
                if (documentValue39 !== 18) break;
                documentValue23.key = documentValue21.string();
                continue;
              case 3:
                if (documentValue39 !== 24) break;
                documentValue23.type = documentValue21.int32();
                continue;
              case 4:
                if (documentValue39 !== 34) break;
                documentValue23.contentType = documentValue21.string();
                continue;
              case 5:
                if (documentValue39 !== 42) break;
                documentValue23.data = documentValue21.bytes();
                continue;
              case 6:
                if (documentValue39 !== 48) break;
                documentValue23.subsetted = documentValue21.bool();
                continue;
            }
            if ((documentValue39 & 7) == 4 || documentValue39 === 0) break;
            documentValue21.skip(documentValue39 & 7);
          }
          return documentValue23;
        },
        create(documentParam110) {
          return documentU.fromPartial(documentParam110 ?? {});
        },
        fromPartial(event) {
          let documentValue85 = documentHelper8();
          return (
            (documentValue85.relationshipId = event.relationshipId ?? ``),
            (documentValue85.key = event.key ?? void 0),
            (documentValue85.type = event.type ?? 0),
            (documentValue85.contentType = event.contentType ?? ``),
            (documentValue85.data = event.data ?? new Uint8Array()),
            (documentValue85.subsetted = event.subsetted ?? void 0),
            documentValue85
          );
        },
      }),
      (documentP = {
        encode(documentParam71, documentParam72 = new presentationSr()) {
          (documentParam71.name !== `` &&
            documentParam72.uint32(10).string(documentParam71.name),
            documentParam71.altName !== void 0 &&
              documentParam72.uint32(18).string(documentParam71.altName),
            documentParam71.family !== void 0 &&
              documentParam72.uint32(26).string(documentParam71.family));
          for (let documentValue107 of documentParam71.embeddedFonts)
            documentU
              .encode(documentValue107, documentParam72.uint32(34).fork())
              .join();
          return documentParam72;
        },
        decode(documentParam28, documentParam29) {
          let documentValue41 =
              documentParam28 instanceof presentationXr
                ? documentParam28
                : new presentationXr(documentParam28),
            documentValue42 =
              documentParam29 === void 0
                ? documentValue41.len
                : documentValue41.pos + documentParam29,
            documentValue43 = documentHelper9();
          for (; documentValue41.pos < documentValue42; ) {
            let documentValue69 = documentValue41.uint32();
            switch (documentValue69 >>> 3) {
              case 1:
                if (documentValue69 !== 10) break;
                documentValue43.name = documentValue41.string();
                continue;
              case 2:
                if (documentValue69 !== 18) break;
                documentValue43.altName = documentValue41.string();
                continue;
              case 3:
                if (documentValue69 !== 26) break;
                documentValue43.family = documentValue41.string();
                continue;
              case 4:
                if (documentValue69 !== 34) break;
                documentValue43.embeddedFonts.push(
                  documentU.decode(documentValue41, documentValue41.uint32()),
                );
                continue;
            }
            if ((documentValue69 & 7) == 4 || documentValue69 === 0) break;
            documentValue41.skip(documentValue69 & 7);
          }
          return documentValue43;
        },
        create(documentParam111) {
          return documentP.fromPartial(documentParam111 ?? {});
        },
        fromPartial(documentParam74) {
          let documentValue90 = documentHelper9();
          return (
            (documentValue90.name = documentParam74.name ?? ``),
            (documentValue90.altName = documentParam74.altName ?? void 0),
            (documentValue90.family = documentParam74.family ?? void 0),
            (documentValue90.embeddedFonts =
              documentParam74.embeddedFonts?.map((documentParam140) =>
                documentU.fromPartial(documentParam140),
              ) || []),
            documentValue90
          );
        },
      }),
      (documentY = {
        encode(documentParam58, documentParam59 = new presentationSr()) {
          return (
            documentParam58.top !== 0 &&
              documentParam59.uint32(8).int32(documentParam58.top),
            documentParam58.bottom !== 0 &&
              documentParam59.uint32(16).int32(documentParam58.bottom),
            documentParam58.left !== 0 &&
              documentParam59.uint32(24).int32(documentParam58.left),
            documentParam58.right !== 0 &&
              documentParam59.uint32(32).int32(documentParam58.right),
            documentParam58.header !== 0 &&
              documentParam59.uint32(40).int32(documentParam58.header),
            documentParam58.footer !== 0 &&
              documentParam59.uint32(48).int32(documentParam58.footer),
            documentParam58.gutter !== 0 &&
              documentParam59.uint32(56).int32(documentParam58.gutter),
            documentParam59
          );
        },
        decode(documentParam15, documentParam16) {
          let documentValue17 =
              documentParam15 instanceof presentationXr
                ? documentParam15
                : new presentationXr(documentParam15),
            documentValue18 =
              documentParam16 === void 0
                ? documentValue17.len
                : documentValue17.pos + documentParam16,
            documentValue19 = documentHelper10();
          for (; documentValue17.pos < documentValue18; ) {
            let documentValue31 = documentValue17.uint32();
            switch (documentValue31 >>> 3) {
              case 1:
                if (documentValue31 !== 8) break;
                documentValue19.top = documentValue17.int32();
                continue;
              case 2:
                if (documentValue31 !== 16) break;
                documentValue19.bottom = documentValue17.int32();
                continue;
              case 3:
                if (documentValue31 !== 24) break;
                documentValue19.left = documentValue17.int32();
                continue;
              case 4:
                if (documentValue31 !== 32) break;
                documentValue19.right = documentValue17.int32();
                continue;
              case 5:
                if (documentValue31 !== 40) break;
                documentValue19.header = documentValue17.int32();
                continue;
              case 6:
                if (documentValue31 !== 48) break;
                documentValue19.footer = documentValue17.int32();
                continue;
              case 7:
                if (documentValue31 !== 56) break;
                documentValue19.gutter = documentValue17.int32();
                continue;
            }
            if ((documentValue31 & 7) == 4 || documentValue31 === 0) break;
            documentValue17.skip(documentValue31 & 7);
          }
          return documentValue19;
        },
        create(documentParam112) {
          return documentY.fromPartial(documentParam112 ?? {});
        },
        fromPartial(documentParam68) {
          let documentValue86 = documentHelper10();
          return (
            (documentValue86.top = documentParam68.top ?? 0),
            (documentValue86.bottom = documentParam68.bottom ?? 0),
            (documentValue86.left = documentParam68.left ?? 0),
            (documentValue86.right = documentParam68.right ?? 0),
            (documentValue86.header = documentParam68.header ?? 0),
            (documentValue86.footer = documentParam68.footer ?? 0),
            (documentValue86.gutter = documentParam68.gutter ?? 0),
            documentValue86
          );
        },
      }),
      (documentB = {
        encode(documentParam75, documentParam76 = new presentationSr()) {
          return (
            documentParam75.widthEmu !== 0 &&
              documentParam76.uint32(8).int64(documentParam75.widthEmu),
            documentParam75.heightEmu !== 0 &&
              documentParam76.uint32(16).int64(documentParam75.heightEmu),
            documentParam75.pageMargin !== void 0 &&
              documentY
                .encode(
                  documentParam75.pageMargin,
                  documentParam76.uint32(26).fork(),
                )
                .join(),
            documentParam76
          );
        },
        decode(documentParam39, documentParam40) {
          let documentValue57 =
              documentParam39 instanceof presentationXr
                ? documentParam39
                : new presentationXr(documentParam39),
            documentValue58 =
              documentParam40 === void 0
                ? documentValue57.len
                : documentValue57.pos + documentParam40,
            documentValue59 = documentHelper11();
          for (; documentValue57.pos < documentValue58; ) {
            let documentValue76 = documentValue57.uint32();
            switch (documentValue76 >>> 3) {
              case 1:
                if (documentValue76 !== 8) break;
                documentValue59.widthEmu = documentHelper21(
                  documentValue57.int64(),
                );
                continue;
              case 2:
                if (documentValue76 !== 16) break;
                documentValue59.heightEmu = documentHelper21(
                  documentValue57.int64(),
                );
                continue;
              case 3:
                if (documentValue76 !== 26) break;
                documentValue59.pageMargin = documentY.decode(
                  documentValue57,
                  documentValue57.uint32(),
                );
                continue;
            }
            if ((documentValue76 & 7) == 4 || documentValue76 === 0) break;
            documentValue57.skip(documentValue76 & 7);
          }
          return documentValue59;
        },
        create(documentParam113) {
          return documentB.fromPartial(documentParam113 ?? {});
        },
        fromPartial(documentParam69) {
          let documentValue87 = documentHelper11();
          return (
            (documentValue87.widthEmu = documentParam69.widthEmu ?? 0),
            (documentValue87.heightEmu = documentParam69.heightEmu ?? 0),
            (documentValue87.pageMargin =
              documentParam69.pageMargin !== void 0 &&
              documentParam69.pageMargin !== null
                ? documentY.fromPartial(documentParam69.pageMargin)
                : void 0),
            documentValue87
          );
        },
      }),
      (documentR = {
        encode(documentParam66, documentParam67 = new presentationSr()) {
          (documentParam66.count !== 0 &&
            documentParam67.uint32(8).int32(documentParam66.count),
            documentParam66.space !== 0 &&
              documentParam67.uint32(16).int32(documentParam66.space),
            documentParam67.uint32(26).fork());
          for (let documentValue130 of documentParam66.widths)
            documentParam67.int32(documentValue130);
          return (
            documentParam67.join(),
            documentParam66.hasSeparatorLine !== !1 &&
              documentParam67.uint32(32).bool(documentParam66.hasSeparatorLine),
            documentParam67
          );
        },
        decode(documentParam19, documentParam20) {
          let documentValue25 =
              documentParam19 instanceof presentationXr
                ? documentParam19
                : new presentationXr(documentParam19),
            documentValue26 =
              documentParam20 === void 0
                ? documentValue25.len
                : documentValue25.pos + documentParam20,
            documentValue27 = documentHelper12();
          for (; documentValue25.pos < documentValue26; ) {
            let documentValue40 = documentValue25.uint32();
            switch (documentValue40 >>> 3) {
              case 1:
                if (documentValue40 !== 8) break;
                documentValue27.count = documentValue25.int32();
                continue;
              case 2:
                if (documentValue40 !== 16) break;
                documentValue27.space = documentValue25.int32();
                continue;
              case 3:
                if (documentValue40 === 24) {
                  documentValue27.widths.push(documentValue25.int32());
                  continue;
                }
                if (documentValue40 === 26) {
                  let documentValue102 =
                    documentValue25.uint32() + documentValue25.pos;
                  for (; documentValue25.pos < documentValue102; )
                    documentValue27.widths.push(documentValue25.int32());
                  continue;
                }
                break;
              case 4:
                if (documentValue40 !== 32) break;
                documentValue27.hasSeparatorLine = documentValue25.bool();
                continue;
            }
            if ((documentValue40 & 7) == 4 || documentValue40 === 0) break;
            documentValue25.skip(documentValue40 & 7);
          }
          return documentValue27;
        },
        create(documentParam114) {
          return documentR.fromPartial(documentParam114 ?? {});
        },
        fromPartial(documentParam77) {
          let documentValue92 = documentHelper12();
          return (
            (documentValue92.count = documentParam77.count ?? 0),
            (documentValue92.space = documentParam77.space ?? 0),
            (documentValue92.widths =
              documentParam77.widths?.map(
                (documentParam150) => documentParam150,
              ) || []),
            (documentValue92.hasSeparatorLine =
              documentParam77.hasSeparatorLine ?? !1),
            documentValue92
          );
        },
      }),
      (documentS = {
        encode(documentParam78, documentParam79 = new presentationSr()) {
          return (
            documentParam78.type !== void 0 &&
              documentParam79.uint32(10).string(documentParam78.type),
            documentParam78.linePitch !== void 0 &&
              documentParam79.uint32(16).int32(documentParam78.linePitch),
            documentParam78.charSpace !== void 0 &&
              documentParam79.uint32(24).int32(documentParam78.charSpace),
            documentParam79
          );
        },
        decode(documentParam43, documentParam44) {
          let documentValue63 =
              documentParam43 instanceof presentationXr
                ? documentParam43
                : new presentationXr(documentParam43),
            documentValue64 =
              documentParam44 === void 0
                ? documentValue63.len
                : documentValue63.pos + documentParam44,
            documentValue65 = documentHelper13();
          for (; documentValue63.pos < documentValue64; ) {
            let documentValue78 = documentValue63.uint32();
            switch (documentValue78 >>> 3) {
              case 1:
                if (documentValue78 !== 10) break;
                documentValue65.type = documentValue63.string();
                continue;
              case 2:
                if (documentValue78 !== 16) break;
                documentValue65.linePitch = documentValue63.int32();
                continue;
              case 3:
                if (documentValue78 !== 24) break;
                documentValue65.charSpace = documentValue63.int32();
                continue;
            }
            if ((documentValue78 & 7) == 4 || documentValue78 === 0) break;
            documentValue63.skip(documentValue78 & 7);
          }
          return documentValue65;
        },
        create(documentParam115) {
          return documentS.fromPartial(documentParam115 ?? {});
        },
        fromPartial(documentParam95) {
          let documentValue98 = documentHelper13();
          return (
            (documentValue98.type = documentParam95.type ?? void 0),
            (documentValue98.linePitch = documentParam95.linePitch ?? void 0),
            (documentValue98.charSpace = documentParam95.charSpace ?? void 0),
            documentValue98
          );
        },
      }),
      (documentH = {
        encode(documentParam101, documentParam102 = new presentationSr()) {
          for (let documentValue118 of documentParam101.elements)
            presentationO
              .encode(documentValue118, documentParam102.uint32(10).fork())
              .join();
          return documentParam102;
        },
        decode(documentParam54, documentParam55) {
          let documentValue80 =
              documentParam54 instanceof presentationXr
                ? documentParam54
                : new presentationXr(documentParam54),
            documentValue81 =
              documentParam55 === void 0
                ? documentValue80.len
                : documentValue80.pos + documentParam55,
            documentValue82 = documentHelper14();
          for (; documentValue80.pos < documentValue81; ) {
            let documentValue91 = documentValue80.uint32();
            switch (documentValue91 >>> 3) {
              case 1:
                if (documentValue91 !== 10) break;
                documentValue82.elements.push(
                  presentationO.decode(
                    documentValue80,
                    documentValue80.uint32(),
                  ),
                );
                continue;
            }
            if ((documentValue91 & 7) == 4 || documentValue91 === 0) break;
            documentValue80.skip(documentValue91 & 7);
          }
          return documentValue82;
        },
        create(documentParam116) {
          return documentH.fromPartial(documentParam116 ?? {});
        },
        fromPartial(documentParam100) {
          let documentValue101 = documentHelper14();
          return (
            (documentValue101.elements =
              documentParam100.elements?.map((documentParam141) =>
                presentationO.fromPartial(documentParam141),
              ) || []),
            documentValue101
          );
        },
      }),
      (documentV = {
        encode(documentParam61, documentParam62 = new presentationSr()) {
          return (
            documentParam61.level !== 0 &&
              documentParam62.uint32(8).int32(documentParam61.level),
            documentParam61.numberFormat !== `` &&
              documentParam62.uint32(18).string(documentParam61.numberFormat),
            documentParam61.levelText !== `` &&
              documentParam62.uint32(26).string(documentParam61.levelText),
            documentParam61.startAt !== 0 &&
              documentParam62.uint32(32).int32(documentParam61.startAt),
            documentParam61.paragraphStyleId !== `` &&
              documentParam62
                .uint32(42)
                .string(documentParam61.paragraphStyleId),
            documentParam62
          );
        },
        decode(documentParam25, documentParam26) {
          let documentValue35 =
              documentParam25 instanceof presentationXr
                ? documentParam25
                : new presentationXr(documentParam25),
            documentValue36 =
              documentParam26 === void 0
                ? documentValue35.len
                : documentValue35.pos + documentParam26,
            documentValue37 = documentHelper15();
          for (; documentValue35.pos < documentValue36; ) {
            let documentValue47 = documentValue35.uint32();
            switch (documentValue47 >>> 3) {
              case 1:
                if (documentValue47 !== 8) break;
                documentValue37.level = documentValue35.int32();
                continue;
              case 2:
                if (documentValue47 !== 18) break;
                documentValue37.numberFormat = documentValue35.string();
                continue;
              case 3:
                if (documentValue47 !== 26) break;
                documentValue37.levelText = documentValue35.string();
                continue;
              case 4:
                if (documentValue47 !== 32) break;
                documentValue37.startAt = documentValue35.int32();
                continue;
              case 5:
                if (documentValue47 !== 42) break;
                documentValue37.paragraphStyleId = documentValue35.string();
                continue;
            }
            if ((documentValue47 & 7) == 4 || documentValue47 === 0) break;
            documentValue35.skip(documentValue47 & 7);
          }
          return documentValue37;
        },
        create(documentParam117) {
          return documentV.fromPartial(documentParam117 ?? {});
        },
        fromPartial(documentParam73) {
          let documentValue89 = documentHelper15();
          return (
            (documentValue89.level = documentParam73.level ?? 0),
            (documentValue89.numberFormat = documentParam73.numberFormat ?? ``),
            (documentValue89.levelText = documentParam73.levelText ?? ``),
            (documentValue89.startAt = documentParam73.startAt ?? 0),
            (documentValue89.paragraphStyleId =
              documentParam73.paragraphStyleId ?? ``),
            documentValue89
          );
        },
      }),
      (documentUnderscore = {
        encode(documentParam86, documentParam87 = new presentationSr()) {
          (documentParam86.numId !== `` &&
            documentParam87.uint32(10).string(documentParam86.numId),
            documentParam86.abstractNumId !== `` &&
              documentParam87.uint32(18).string(documentParam86.abstractNumId));
          for (let documentValue124 of documentParam86.levels)
            documentV
              .encode(documentValue124, documentParam87.uint32(26).fork())
              .join();
          return documentParam87;
        },
        decode(documentParam41, documentParam42) {
          let documentValue60 =
              documentParam41 instanceof presentationXr
                ? documentParam41
                : new presentationXr(documentParam41),
            documentValue61 =
              documentParam42 === void 0
                ? documentValue60.len
                : documentValue60.pos + documentParam42,
            documentValue62 = documentHelper16();
          for (; documentValue60.pos < documentValue61; ) {
            let documentValue77 = documentValue60.uint32();
            switch (documentValue77 >>> 3) {
              case 1:
                if (documentValue77 !== 10) break;
                documentValue62.numId = documentValue60.string();
                continue;
              case 2:
                if (documentValue77 !== 18) break;
                documentValue62.abstractNumId = documentValue60.string();
                continue;
              case 3:
                if (documentValue77 !== 26) break;
                documentValue62.levels.push(
                  documentV.decode(documentValue60, documentValue60.uint32()),
                );
                continue;
            }
            if ((documentValue77 & 7) == 4 || documentValue77 === 0) break;
            documentValue60.skip(documentValue77 & 7);
          }
          return documentValue62;
        },
        create(documentParam118) {
          return documentUnderscore.fromPartial(documentParam118 ?? {});
        },
        fromPartial(documentParam90) {
          let documentValue97 = documentHelper16();
          return (
            (documentValue97.numId = documentParam90.numId ?? ``),
            (documentValue97.abstractNumId =
              documentParam90.abstractNumId ?? ``),
            (documentValue97.levels =
              documentParam90.levels?.map((documentParam142) =>
                documentV.fromPartial(documentParam142),
              ) || []),
            documentValue97
          );
        },
      }),
      (documentX = {
        encode(documentParam84, documentParam85 = new presentationSr()) {
          return (
            documentParam84.paragraphId !== `` &&
              documentParam85.uint32(10).string(documentParam84.paragraphId),
            documentParam84.numId !== `` &&
              documentParam85.uint32(18).string(documentParam84.numId),
            documentParam84.level !== 0 &&
              documentParam85.uint32(24).int32(documentParam84.level),
            documentParam85
          );
        },
        decode(documentParam45, documentParam46) {
          let documentValue66 =
              documentParam45 instanceof presentationXr
                ? documentParam45
                : new presentationXr(documentParam45),
            documentValue67 =
              documentParam46 === void 0
                ? documentValue66.len
                : documentValue66.pos + documentParam46,
            documentValue68 = documentHelper17();
          for (; documentValue66.pos < documentValue67; ) {
            let documentValue79 = documentValue66.uint32();
            switch (documentValue79 >>> 3) {
              case 1:
                if (documentValue79 !== 10) break;
                documentValue68.paragraphId = documentValue66.string();
                continue;
              case 2:
                if (documentValue79 !== 18) break;
                documentValue68.numId = documentValue66.string();
                continue;
              case 3:
                if (documentValue79 !== 24) break;
                documentValue68.level = documentValue66.int32();
                continue;
            }
            if ((documentValue79 & 7) == 4 || documentValue79 === 0) break;
            documentValue66.skip(documentValue79 & 7);
          }
          return documentValue68;
        },
        create(documentParam119) {
          return documentX.fromPartial(documentParam119 ?? {});
        },
        fromPartial(documentParam96) {
          let documentValue99 = documentHelper17();
          return (
            (documentValue99.paragraphId = documentParam96.paragraphId ?? ``),
            (documentValue99.numId = documentParam96.numId ?? ``),
            (documentValue99.level = documentParam96.level ?? 0),
            documentValue99
          );
        },
      }),
      (_documentC = {
        encode(documentParam9, documentParam10 = new presentationSr()) {
          (documentParam9.id !== `` &&
            documentParam10.uint32(10).string(documentParam9.id),
            documentParam9.breakType !== 0 &&
              documentParam10.uint32(16).int32(documentParam9.breakType),
            documentParam9.pageSetup !== void 0 &&
              documentB
                .encode(
                  documentParam9.pageSetup,
                  documentParam10.uint32(26).fork(),
                )
                .join(),
            documentParam9.columns !== void 0 &&
              documentR
                .encode(
                  documentParam9.columns,
                  documentParam10.uint32(34).fork(),
                )
                .join());
          for (let documentValue119 of documentParam9.elements)
            presentationO
              .encode(documentValue119, documentParam10.uint32(42).fork())
              .join();
          return (
            documentParam9.header !== void 0 &&
              documentH
                .encode(
                  documentParam9.header,
                  documentParam10.uint32(50).fork(),
                )
                .join(),
            documentParam9.footer !== void 0 &&
              documentH
                .encode(
                  documentParam9.footer,
                  documentParam10.uint32(58).fork(),
                )
                .join(),
            documentParam9.startsWithPageBreak !== !1 &&
              documentParam10
                .uint32(64)
                .bool(documentParam9.startsWithPageBreak),
            documentParam9.pageNumberStart !== void 0 &&
              documentParam10.uint32(72).int32(documentParam9.pageNumberStart),
            documentParam9.pageNumberFormat !== void 0 &&
              documentParam10
                .uint32(82)
                .string(documentParam9.pageNumberFormat),
            documentParam9.differentFirstPage !== void 0 &&
              documentParam10
                .uint32(88)
                .bool(documentParam9.differentFirstPage),
            documentParam9.firstHeader !== void 0 &&
              documentH
                .encode(
                  documentParam9.firstHeader,
                  documentParam10.uint32(98).fork(),
                )
                .join(),
            documentParam9.firstFooter !== void 0 &&
              documentH
                .encode(
                  documentParam9.firstFooter,
                  documentParam10.uint32(106).fork(),
                )
                .join(),
            documentParam9.documentGrid !== void 0 &&
              documentS
                .encode(
                  documentParam9.documentGrid,
                  documentParam10.uint32(114).fork(),
                )
                .join(),
            documentParam10
          );
        },
        decode(documentParam3, documentParam4) {
          let documentValue5 =
              documentParam3 instanceof presentationXr
                ? documentParam3
                : new presentationXr(documentParam3),
            documentValue6 =
              documentParam4 === void 0
                ? documentValue5.len
                : documentValue5.pos + documentParam4,
            documentValue7 = documentHelper18();
          for (; documentValue5.pos < documentValue6; ) {
            let documentValue8 = documentValue5.uint32();
            switch (documentValue8 >>> 3) {
              case 1:
                if (documentValue8 !== 10) break;
                documentValue7.id = documentValue5.string();
                continue;
              case 2:
                if (documentValue8 !== 16) break;
                documentValue7.breakType = documentValue5.int32();
                continue;
              case 3:
                if (documentValue8 !== 26) break;
                documentValue7.pageSetup = documentB.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
              case 4:
                if (documentValue8 !== 34) break;
                documentValue7.columns = documentR.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
              case 5:
                if (documentValue8 !== 42) break;
                documentValue7.elements.push(
                  presentationO.decode(documentValue5, documentValue5.uint32()),
                );
                continue;
              case 6:
                if (documentValue8 !== 50) break;
                documentValue7.header = documentH.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
              case 7:
                if (documentValue8 !== 58) break;
                documentValue7.footer = documentH.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
              case 8:
                if (documentValue8 !== 64) break;
                documentValue7.startsWithPageBreak = documentValue5.bool();
                continue;
              case 9:
                if (documentValue8 !== 72) break;
                documentValue7.pageNumberStart = documentValue5.int32();
                continue;
              case 10:
                if (documentValue8 !== 82) break;
                documentValue7.pageNumberFormat = documentValue5.string();
                continue;
              case 11:
                if (documentValue8 !== 88) break;
                documentValue7.differentFirstPage = documentValue5.bool();
                continue;
              case 12:
                if (documentValue8 !== 98) break;
                documentValue7.firstHeader = documentH.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
              case 13:
                if (documentValue8 !== 106) break;
                documentValue7.firstFooter = documentH.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
              case 14:
                if (documentValue8 !== 114) break;
                documentValue7.documentGrid = documentS.decode(
                  documentValue5,
                  documentValue5.uint32(),
                );
                continue;
            }
            if ((documentValue8 & 7) == 4 || documentValue8 === 0) break;
            documentValue5.skip(documentValue8 & 7);
          }
          return documentValue7;
        },
        create(documentParam120) {
          return _documentC.fromPartial(documentParam120 ?? {});
        },
        fromPartial(documentParam8) {
          let documentValue10 = documentHelper18();
          return (
            (documentValue10.id = documentParam8.id ?? ``),
            (documentValue10.breakType = documentParam8.breakType ?? 0),
            (documentValue10.pageSetup =
              documentParam8.pageSetup !== void 0 &&
              documentParam8.pageSetup !== null
                ? documentB.fromPartial(documentParam8.pageSetup)
                : void 0),
            (documentValue10.columns =
              documentParam8.columns !== void 0 &&
              documentParam8.columns !== null
                ? documentR.fromPartial(documentParam8.columns)
                : void 0),
            (documentValue10.elements =
              documentParam8.elements?.map((documentParam143) =>
                presentationO.fromPartial(documentParam143),
              ) || []),
            (documentValue10.header =
              documentParam8.header !== void 0 && documentParam8.header !== null
                ? documentH.fromPartial(documentParam8.header)
                : void 0),
            (documentValue10.footer =
              documentParam8.footer !== void 0 && documentParam8.footer !== null
                ? documentH.fromPartial(documentParam8.footer)
                : void 0),
            (documentValue10.startsWithPageBreak =
              documentParam8.startsWithPageBreak ?? !1),
            (documentValue10.pageNumberStart =
              documentParam8.pageNumberStart ?? void 0),
            (documentValue10.pageNumberFormat =
              documentParam8.pageNumberFormat ?? void 0),
            (documentValue10.differentFirstPage =
              documentParam8.differentFirstPage ?? void 0),
            (documentValue10.firstHeader =
              documentParam8.firstHeader !== void 0 &&
              documentParam8.firstHeader !== null
                ? documentH.fromPartial(documentParam8.firstHeader)
                : void 0),
            (documentValue10.firstFooter =
              documentParam8.firstFooter !== void 0 &&
              documentParam8.firstFooter !== null
                ? documentH.fromPartial(documentParam8.firstFooter)
                : void 0),
            (documentValue10.documentGrid =
              documentParam8.documentGrid !== void 0 &&
              documentParam8.documentGrid !== null
                ? documentS.fromPartial(documentParam8.documentGrid)
                : void 0),
            documentValue10
          );
        },
      }),
      (_documentS = {
        encode(documentParam88, documentParam89 = new presentationSr()) {
          documentParam88.id !== void 0 &&
            documentParam89.uint32(10).string(documentParam88.id);
          for (let documentValue120 of documentParam88.elements)
            presentationO
              .encode(documentValue120, documentParam89.uint32(18).fork())
              .join();
          for (let documentValue125 of documentParam88.charts)
            _presentationYn
              .encode(documentValue125, documentParam89.uint32(26).fork())
              .join();
          return documentParam89;
        },
        decode(documentParam33, documentParam34) {
          let documentValue48 =
              documentParam33 instanceof presentationXr
                ? documentParam33
                : new presentationXr(documentParam33),
            documentValue49 =
              documentParam34 === void 0
                ? documentValue48.len
                : documentValue48.pos + documentParam34,
            documentValue50 = documentHelper19();
          for (; documentValue48.pos < documentValue49; ) {
            let documentValue73 = documentValue48.uint32();
            switch (documentValue73 >>> 3) {
              case 1:
                if (documentValue73 !== 10) break;
                documentValue50.id = documentValue48.string();
                continue;
              case 2:
                if (documentValue73 !== 18) break;
                documentValue50.elements.push(
                  presentationO.decode(
                    documentValue48,
                    documentValue48.uint32(),
                  ),
                );
                continue;
              case 3:
                if (documentValue73 !== 26) break;
                documentValue50.charts.push(
                  _presentationYn.decode(
                    documentValue48,
                    documentValue48.uint32(),
                  ),
                );
                continue;
            }
            if ((documentValue73 & 7) == 4 || documentValue73 === 0) break;
            documentValue48.skip(documentValue73 & 7);
          }
          return documentValue50;
        },
        create(documentParam121) {
          return _documentS.fromPartial(documentParam121 ?? {});
        },
        fromPartial(documentParam83) {
          let documentValue96 = documentHelper19();
          return (
            (documentValue96.id = documentParam83.id ?? void 0),
            (documentValue96.elements =
              documentParam83.elements?.map((documentParam144) =>
                presentationO.fromPartial(documentParam144),
              ) || []),
            (documentValue96.charts =
              documentParam83.charts?.map((documentParam145) =>
                _presentationYn.fromPartial(documentParam145),
              ) || []),
            documentValue96
          );
        },
      }),
      (_documentT = {
        encode(documentParam47, documentParam48 = new presentationSr()) {
          return (
            documentParam47.id !== void 0 &&
              documentParam48.uint32(82).string(documentParam47.id),
            documentParam47.type !== 0 &&
              documentParam48.uint32(8).int32(documentParam47.type),
            documentParam47.version !== `` &&
              documentParam48.uint32(50).string(documentParam47.version),
            documentParam47.document !== void 0 &&
              documentO
                .encode(
                  documentParam47.document,
                  documentParam48.uint32(18).fork(),
                )
                .join(),
            documentParam47.presentation !== void 0 &&
              presentationDollar
                .encode(
                  documentParam47.presentation,
                  documentParam48.uint32(26).fork(),
                )
                .join(),
            documentParam47.workbook !== void 0 &&
              spreadsheetHn
                .encode(
                  documentParam47.workbook,
                  documentParam48.uint32(34).fork(),
                )
                .join(),
            documentParam47.playground !== void 0 &&
              _documentS
                .encode(
                  documentParam47.playground,
                  documentParam48.uint32(42).fork(),
                )
                .join(),
            documentParam48
          );
        },
        decode(documentParam13, documentParam14) {
          let documentValue14 =
              documentParam13 instanceof presentationXr
                ? documentParam13
                : new presentationXr(documentParam13),
            documentValue15 =
              documentParam14 === void 0
                ? documentValue14.len
                : documentValue14.pos + documentParam14,
            documentValue16 = documentHelper20();
          for (; documentValue14.pos < documentValue15; ) {
            let documentValue24 = documentValue14.uint32();
            switch (documentValue24 >>> 3) {
              case 10:
                if (documentValue24 !== 82) break;
                documentValue16.id = documentValue14.string();
                continue;
              case 1:
                if (documentValue24 !== 8) break;
                documentValue16.type = documentValue14.int32();
                continue;
              case 6:
                if (documentValue24 !== 50) break;
                documentValue16.version = documentValue14.string();
                continue;
              case 2:
                if (documentValue24 !== 18) break;
                documentValue16.document = documentO.decode(
                  documentValue14,
                  documentValue14.uint32(),
                );
                continue;
              case 3:
                if (documentValue24 !== 26) break;
                documentValue16.presentation = presentationDollar.decode(
                  documentValue14,
                  documentValue14.uint32(),
                );
                continue;
              case 4:
                if (documentValue24 !== 34) break;
                documentValue16.workbook = spreadsheetHn.decode(
                  documentValue14,
                  documentValue14.uint32(),
                );
                continue;
              case 5:
                if (documentValue24 !== 42) break;
                documentValue16.playground = _documentS.decode(
                  documentValue14,
                  documentValue14.uint32(),
                );
                continue;
            }
            if ((documentValue24 & 7) == 4 || documentValue24 === 0) break;
            documentValue14.skip(documentValue24 & 7);
          }
          return documentValue16;
        },
        create(documentParam122) {
          return _documentT.fromPartial(documentParam122 ?? {});
        },
        fromPartial(documentParam30) {
          let documentValue44 = documentHelper20();
          return (
            (documentValue44.id = documentParam30.id ?? void 0),
            (documentValue44.type = documentParam30.type ?? 0),
            (documentValue44.version = documentParam30.version ?? ``),
            (documentValue44.document =
              documentParam30.document !== void 0 &&
              documentParam30.document !== null
                ? documentO.fromPartial(documentParam30.document)
                : void 0),
            (documentValue44.presentation =
              documentParam30.presentation !== void 0 &&
              documentParam30.presentation !== null
                ? presentationDollar.fromPartial(documentParam30.presentation)
                : void 0),
            (documentValue44.workbook =
              documentParam30.workbook !== void 0 &&
              documentParam30.workbook !== null
                ? spreadsheetHn.fromPartial(documentParam30.workbook)
                : void 0),
            (documentValue44.playground =
              documentParam30.playground !== void 0 &&
              documentParam30.playground !== null
                ? _documentS.fromPartial(documentParam30.playground)
                : void 0),
            documentValue44
          );
        },
      }),
      ($ = (() => {
        if (typeof globalThis < `u`) return globalThis;
        if (typeof self < `u`) return self;
        if (typeof window < `u`) return window;
        if (typeof global < `u`) return global;
        throw `Unable to locate global object`;
      })()));
  });
export {
  documentC,
  _documentS,
  documentT,
  documentUnderscore,
  documentA,
  documentB,
  _documentC,
  documentD,
  documentF,
  documentG,
  documentH,
  documentI,
  documentL,
  documentM,
  documentN,
  documentO,
  documentP,
  documentR,
  documentS,
  _documentT,
  documentU,
  documentV,
  documentW,
  documentX,
  documentY,
};
