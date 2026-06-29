// Restored from ref/webview/assets/chunk-JZLCHNYA-Dn_DumwI.js
// ChunkJZLCHNYA chunk restored from the Codex webview bundle.
import {
  chunkS3R3BYOJA,
  chunkS3R3BYOJD,
  chunkS3R3BYOJF,
  chunkS3R3BYOJL,
} from "./chunk-s3r3byoj";
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DW,
  _chunkABZYJK2DL,
  chunkABZYJK2DO as chunkABZYJK2DD,
  chunkABZYJK2DV,
  _chunkABZYJK2DM,
  chunkABZYJK2DQ,
  chunkABZYJK2DA,
  _chunkABZYJK2DX,
  chunkABZYJK2DM,
  _chunkABZYJK2DY,
} from "./katex-auto-render";
import { chunkJA3XYJ7ZA, chunkJA3XYJ7ZR } from "./chunk-ja3xyj7z";
import { chunkCVBHYZKI } from "./mermaid-subgraph-title-margins";
import {
  chunkATLVNIR6R as chunkATLVNIR6A,
  chunkATLVNIR6I,
  chunkATLVNIR6N,
  chunkATLVNIR6T,
} from "./chunk-atlvnir6";
import rough from "roughjs";
var chunkJZLCHNYAS = chunkAGHRB4JFN(
    async (
      chunkJZLCHNYAParam19,
      chunkJZLCHNYAParam20,
      chunkJZLCHNYAParam21,
    ) => {
      let chunkJZLCHNYAValue196,
        chunkJZLCHNYAValue197 =
          chunkJZLCHNYAParam20.useHtmlLabels ||
          chunkABZYJK2DV(_chunkABZYJK2DL()?.htmlLabels);
      chunkJZLCHNYAValue196 = chunkJZLCHNYAParam21 || "node default";
      let chunkJZLCHNYAValue198 = chunkJZLCHNYAParam19
          .insert("g")
          .attr("class", chunkJZLCHNYAValue196)
          .attr("id", chunkJZLCHNYAParam20.domId || chunkJZLCHNYAParam20.id),
        chunkJZLCHNYAValue199 = chunkJZLCHNYAValue198
          .insert("g")
          .attr("class", "label")
          .attr("style", chunkS3R3BYOJF(chunkJZLCHNYAParam20.labelStyle)),
        chunkJZLCHNYAValue200;
      chunkJZLCHNYAValue200 =
        chunkJZLCHNYAParam20.label === undefined
          ? ""
          : typeof chunkJZLCHNYAParam20.label == "string"
            ? chunkJZLCHNYAParam20.label
            : chunkJZLCHNYAParam20.label[0];
      let chunkJZLCHNYAValue201 = await chunkJA3XYJ7ZA(
          chunkJZLCHNYAValue199,
          _chunkABZYJK2DM(
            chunkS3R3BYOJD(chunkJZLCHNYAValue200),
            _chunkABZYJK2DL(),
          ),
          {
            useHtmlLabels: chunkJZLCHNYAValue197,
            width:
              chunkJZLCHNYAParam20.width ||
              _chunkABZYJK2DL().flowchart?.wrappingWidth,
            cssClasses: "markdown-node-label",
            style: chunkJZLCHNYAParam20.labelStyle,
            addSvgBackground:
              !!chunkJZLCHNYAParam20.icon || !!chunkJZLCHNYAParam20.img,
          },
        ),
        chunkJZLCHNYAValue202 = chunkJZLCHNYAValue201.getBBox(),
        chunkJZLCHNYAValue203 = (chunkJZLCHNYAParam20?.padding ?? 0) / 2;
      if (chunkJZLCHNYAValue197) {
        let chunkJZLCHNYAValue436 = chunkJZLCHNYAValue201.children[0],
          chunkJZLCHNYAValue437 = Src(chunkJZLCHNYAValue201),
          chunkJZLCHNYAValue438 =
            chunkJZLCHNYAValue436.getElementsByTagName("img");
        if (chunkJZLCHNYAValue438) {
          let chunkJZLCHNYAValue622 =
            chunkJZLCHNYAValue200.replace(/<img[^>]*>/g, "").trim() === "";
          await Promise.all(
            [...chunkJZLCHNYAValue438].map(
              (item) =>
                new Promise((chunkJZLCHNYAParam145) => {
                  function chunkJZLCHNYAHelper83() {
                    if (
                      ((item.style.display = "flex"),
                      (item.style.flexDirection = "column"),
                      chunkJZLCHNYAValue622)
                    ) {
                      let [chunkJZLCHNYAValue913 = chunkABZYJK2DD.fontSize] =
                          chunkS3R3BYOJA(
                            _chunkABZYJK2DL().fontSize
                              ? _chunkABZYJK2DL().fontSize
                              : window.getComputedStyle(document.body).fontSize,
                          ),
                        chunkJZLCHNYAValue914 =
                          chunkJZLCHNYAValue913 * 5 + "px";
                      item.style.minWidth = chunkJZLCHNYAValue914;
                      item.style.maxWidth = chunkJZLCHNYAValue914;
                    } else item.style.width = "100%";
                    chunkJZLCHNYAParam145(item);
                  }
                  chunkAGHRB4JFN(chunkJZLCHNYAHelper83, "setupImage");
                  setTimeout(() => {
                    item.complete && chunkJZLCHNYAHelper83();
                  });
                  item.addEventListener("error", chunkJZLCHNYAHelper83);
                  item.addEventListener("load", chunkJZLCHNYAHelper83);
                }),
            ),
          );
        }
        chunkJZLCHNYAValue202 = chunkJZLCHNYAValue436.getBoundingClientRect();
        chunkJZLCHNYAValue437.attr("width", chunkJZLCHNYAValue202.width);
        chunkJZLCHNYAValue437.attr("height", chunkJZLCHNYAValue202.height);
      }
      return (
        chunkJZLCHNYAValue197
          ? chunkJZLCHNYAValue199.attr(
              "transform",
              "translate(" +
                -chunkJZLCHNYAValue202.width / 2 +
                ", " +
                -chunkJZLCHNYAValue202.height / 2 +
                ")",
            )
          : chunkJZLCHNYAValue199.attr(
              "transform",
              "translate(0, " + -chunkJZLCHNYAValue202.height / 2 + ")",
            ),
        chunkJZLCHNYAParam20.centerLabel &&
          chunkJZLCHNYAValue199.attr(
            "transform",
            "translate(" +
              -chunkJZLCHNYAValue202.width / 2 +
              ", " +
              -chunkJZLCHNYAValue202.height / 2 +
              ")",
          ),
        chunkJZLCHNYAValue199.insert("rect", ":first-child"),
        {
          shapeSvg: chunkJZLCHNYAValue198,
          bbox: chunkJZLCHNYAValue202,
          halfPadding: chunkJZLCHNYAValue203,
          label: chunkJZLCHNYAValue199,
        }
      );
    },
    "labelHelper",
  ),
  chunkJZLCHNYAValue1 = chunkAGHRB4JFN(
    async (
      chunkJZLCHNYAParam102,
      chunkJZLCHNYAParam103,
      chunkJZLCHNYAParam104,
    ) => {
      let chunkJZLCHNYAValue583 =
          chunkJZLCHNYAParam104.useHtmlLabels ||
          chunkABZYJK2DV(_chunkABZYJK2DL()?.flowchart?.htmlLabels),
        chunkJZLCHNYAValue584 = chunkJZLCHNYAParam102
          .insert("g")
          .attr("class", "label")
          .attr("style", chunkJZLCHNYAParam104.labelStyle || ""),
        chunkJZLCHNYAValue585 = await chunkJA3XYJ7ZA(
          chunkJZLCHNYAValue584,
          _chunkABZYJK2DM(
            chunkS3R3BYOJD(chunkJZLCHNYAParam103),
            _chunkABZYJK2DL(),
          ),
          {
            useHtmlLabels: chunkJZLCHNYAValue583,
            width:
              chunkJZLCHNYAParam104.width ||
              _chunkABZYJK2DL()?.flowchart?.wrappingWidth,
            style: chunkJZLCHNYAParam104.labelStyle,
            addSvgBackground:
              !!chunkJZLCHNYAParam104.icon || !!chunkJZLCHNYAParam104.img,
          },
        ),
        chunkJZLCHNYAValue586 = chunkJZLCHNYAValue585.getBBox(),
        chunkJZLCHNYAValue587 = chunkJZLCHNYAParam104.padding / 2;
      if (chunkABZYJK2DV(_chunkABZYJK2DL()?.flowchart?.htmlLabels)) {
        let chunkJZLCHNYAValue1047 = chunkJZLCHNYAValue585.children[0],
          chunkJZLCHNYAValue1048 = Src(chunkJZLCHNYAValue585);
        chunkJZLCHNYAValue586 = chunkJZLCHNYAValue1047.getBoundingClientRect();
        chunkJZLCHNYAValue1048.attr("width", chunkJZLCHNYAValue586.width);
        chunkJZLCHNYAValue1048.attr("height", chunkJZLCHNYAValue586.height);
      }
      return (
        chunkJZLCHNYAValue583
          ? chunkJZLCHNYAValue584.attr(
              "transform",
              "translate(" +
                -chunkJZLCHNYAValue586.width / 2 +
                ", " +
                -chunkJZLCHNYAValue586.height / 2 +
                ")",
            )
          : chunkJZLCHNYAValue584.attr(
              "transform",
              "translate(0, " + -chunkJZLCHNYAValue586.height / 2 + ")",
            ),
        chunkJZLCHNYAParam104.centerLabel &&
          chunkJZLCHNYAValue584.attr(
            "transform",
            "translate(" +
              -chunkJZLCHNYAValue586.width / 2 +
              ", " +
              -chunkJZLCHNYAValue586.height / 2 +
              ")",
          ),
        chunkJZLCHNYAValue584.insert("rect", ":first-child"),
        {
          shapeSvg: chunkJZLCHNYAParam102,
          bbox: chunkJZLCHNYAValue586,
          halfPadding: chunkJZLCHNYAValue587,
          label: chunkJZLCHNYAValue584,
        }
      );
    },
    "insertLabel",
  ),
  chunkJZLCHNYAU = chunkAGHRB4JFN(
    (chunkJZLCHNYAParam313, chunkJZLCHNYAParam314) => {
      let chunkJZLCHNYAValue1100 = chunkJZLCHNYAParam314.node().getBBox();
      chunkJZLCHNYAParam313.width = chunkJZLCHNYAValue1100.width;
      chunkJZLCHNYAParam313.height = chunkJZLCHNYAValue1100.height;
    },
    "updateNodeBounds",
  ),
  chunkJZLCHNYAValue2 = chunkAGHRB4JFN(
    (chunkJZLCHNYAParam304, chunkJZLCHNYAParam305) =>
      (chunkJZLCHNYAParam304.look === "handDrawn" ? "rough-node" : "node") +
      " " +
      chunkJZLCHNYAParam304.cssClasses +
      " " +
      (chunkJZLCHNYAParam305 || ""),
    "getNodeClasses",
  );
function chunkJZLCHNYAHelper1(chunkJZLCHNYAParam306) {
  let chunkJZLCHNYAValue1078 = chunkJZLCHNYAParam306.map(
    (item, index) => `${index === 0 ? "M" : "L"}${item.x},${item.y}`,
  );
  return (chunkJZLCHNYAValue1078.push("Z"), chunkJZLCHNYAValue1078.join(" "));
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper1, "createPathFromPoints");
function chunkJZLCHNYAHelper2(
  chunkJZLCHNYAParam241,
  chunkJZLCHNYAParam242,
  chunkJZLCHNYAParam243,
  chunkJZLCHNYAParam244,
  chunkJZLCHNYAParam245,
  chunkJZLCHNYAParam246,
) {
  let chunkJZLCHNYAValue967 = [],
    chunkJZLCHNYAValue968 = chunkJZLCHNYAParam243 - chunkJZLCHNYAParam241,
    chunkJZLCHNYAValue969 = chunkJZLCHNYAParam244 - chunkJZLCHNYAParam242,
    chunkJZLCHNYAValue970 = chunkJZLCHNYAValue968 / chunkJZLCHNYAParam246,
    chunkJZLCHNYAValue971 = (2 * Math.PI) / chunkJZLCHNYAValue970,
    chunkJZLCHNYAValue972 = chunkJZLCHNYAParam242 + chunkJZLCHNYAValue969 / 2;
  for (
    let chunkJZLCHNYAValue1068 = 0;
    chunkJZLCHNYAValue1068 <= 50;
    chunkJZLCHNYAValue1068++
  ) {
    let chunkJZLCHNYAValue1093 =
        chunkJZLCHNYAParam241 +
        (chunkJZLCHNYAValue1068 / 50) * chunkJZLCHNYAValue968,
      chunkJZLCHNYAValue1094 =
        chunkJZLCHNYAValue972 +
        chunkJZLCHNYAParam245 *
          Math.sin(
            chunkJZLCHNYAValue971 *
              (chunkJZLCHNYAValue1093 - chunkJZLCHNYAParam241),
          );
    chunkJZLCHNYAValue967.push({
      x: chunkJZLCHNYAValue1093,
      y: chunkJZLCHNYAValue1094,
    });
  }
  return chunkJZLCHNYAValue967;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper2, "generateFullSineWavePoints");
function chunkJZLCHNYAHelper3(
  chunkJZLCHNYAParam254,
  chunkJZLCHNYAParam255,
  chunkJZLCHNYAParam256,
  chunkJZLCHNYAParam257,
  chunkJZLCHNYAParam258,
  chunkJZLCHNYAParam259,
) {
  let chunkJZLCHNYAValue975 = [],
    chunkJZLCHNYAValue976 = (chunkJZLCHNYAParam258 * Math.PI) / 180,
    chunkJZLCHNYAValue977 =
      ((chunkJZLCHNYAParam259 * Math.PI) / 180 - chunkJZLCHNYAValue976) /
      (chunkJZLCHNYAParam257 - 1);
  for (
    let chunkJZLCHNYAValue1062 = 0;
    chunkJZLCHNYAValue1062 < chunkJZLCHNYAParam257;
    chunkJZLCHNYAValue1062++
  ) {
    let chunkJZLCHNYAValue1079 =
        chunkJZLCHNYAValue976 + chunkJZLCHNYAValue1062 * chunkJZLCHNYAValue977,
      chunkJZLCHNYAValue1080 =
        chunkJZLCHNYAParam254 +
        chunkJZLCHNYAParam256 * Math.cos(chunkJZLCHNYAValue1079),
      chunkJZLCHNYAValue1081 =
        chunkJZLCHNYAParam255 +
        chunkJZLCHNYAParam256 * Math.sin(chunkJZLCHNYAValue1079);
    chunkJZLCHNYAValue975.push({
      x: -chunkJZLCHNYAValue1080,
      y: -chunkJZLCHNYAValue1081,
    });
  }
  return chunkJZLCHNYAValue975;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper3, "generateCirclePoints");
var chunkJZLCHNYAValue3 = chunkAGHRB4JFN(
  (chunkJZLCHNYAParam213, chunkJZLCHNYAParam214) => {
    var chunkJZLCHNYAValue916 = chunkJZLCHNYAParam213.x,
      chunkJZLCHNYAValue917 = chunkJZLCHNYAParam213.y,
      chunkJZLCHNYAValue918 = chunkJZLCHNYAParam214.x - chunkJZLCHNYAValue916,
      chunkJZLCHNYAValue919 = chunkJZLCHNYAParam214.y - chunkJZLCHNYAValue917,
      chunkJZLCHNYAValue920 = chunkJZLCHNYAParam213.width / 2,
      chunkJZLCHNYAValue921 = chunkJZLCHNYAParam213.height / 2,
      chunkJZLCHNYAValue922,
      chunkJZLCHNYAValue923;
    return (
      Math.abs(chunkJZLCHNYAValue919) * chunkJZLCHNYAValue920 >
      Math.abs(chunkJZLCHNYAValue918) * chunkJZLCHNYAValue921
        ? (chunkJZLCHNYAValue919 < 0 &&
            (chunkJZLCHNYAValue921 = -chunkJZLCHNYAValue921),
          (chunkJZLCHNYAValue922 =
            chunkJZLCHNYAValue919 === 0
              ? 0
              : (chunkJZLCHNYAValue921 * chunkJZLCHNYAValue918) /
                chunkJZLCHNYAValue919),
          (chunkJZLCHNYAValue923 = chunkJZLCHNYAValue921))
        : (chunkJZLCHNYAValue918 < 0 &&
            (chunkJZLCHNYAValue920 = -chunkJZLCHNYAValue920),
          (chunkJZLCHNYAValue922 = chunkJZLCHNYAValue920),
          (chunkJZLCHNYAValue923 =
            chunkJZLCHNYAValue918 === 0
              ? 0
              : (chunkJZLCHNYAValue920 * chunkJZLCHNYAValue919) /
                chunkJZLCHNYAValue918)),
      {
        x: chunkJZLCHNYAValue916 + chunkJZLCHNYAValue922,
        y: chunkJZLCHNYAValue917 + chunkJZLCHNYAValue923,
      }
    );
  },
  "intersectRect",
);
function chunkJZLCHNYAHelper4(chunkJZLCHNYAParam392, chunkJZLCHNYAParam393) {
  chunkJZLCHNYAParam393 &&
    chunkJZLCHNYAParam392.attr("style", chunkJZLCHNYAParam393);
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper4, "applyStyle");
async function chunkJZLCHNYAHelper5(chunkJZLCHNYAParam179) {
  let chunkJZLCHNYAValue782 = Src(
      document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"),
    ),
    chunkJZLCHNYAValue783 = chunkJZLCHNYAValue782.append("xhtml:div"),
    chunkJZLCHNYAValue784 = _chunkABZYJK2DL(),
    chunkJZLCHNYAValue785 = chunkJZLCHNYAParam179.label;
  chunkJZLCHNYAParam179.label &&
    _chunkABZYJK2DX(chunkJZLCHNYAParam179.label) &&
    (chunkJZLCHNYAValue785 = await chunkABZYJK2DA(
      chunkJZLCHNYAParam179.label.replace(chunkABZYJK2DM.lineBreakRegex, "\n"),
      chunkJZLCHNYAValue784,
    ));
  let chunkJZLCHNYAValue786 =
    '<span class="' +
    (chunkJZLCHNYAParam179.isNode ? "nodeLabel" : "edgeLabel") +
    '" ' +
    (chunkJZLCHNYAParam179.labelStyle
      ? 'style="' + chunkJZLCHNYAParam179.labelStyle + '"'
      : "") +
    ">" +
    chunkJZLCHNYAValue785 +
    "</span>";
  return (
    chunkJZLCHNYAValue783.html(
      _chunkABZYJK2DM(chunkJZLCHNYAValue786, chunkJZLCHNYAValue784),
    ),
    chunkJZLCHNYAHelper4(
      chunkJZLCHNYAValue783,
      chunkJZLCHNYAParam179.labelStyle,
    ),
    chunkJZLCHNYAValue783.style("display", "inline-block"),
    chunkJZLCHNYAValue783.style("padding-right", "1px"),
    chunkJZLCHNYAValue783.style("white-space", "nowrap"),
    chunkJZLCHNYAValue783.attr("xmlns", "http://www.w3.org/1999/xhtml"),
    chunkJZLCHNYAValue782.node()
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper5, "addHtmlLabel");
var chunkJZLCHNYAR = chunkAGHRB4JFN(
    async (
      chunkJZLCHNYAParam66,
      chunkJZLCHNYAParam67,
      chunkJZLCHNYAParam68,
      chunkJZLCHNYAParam69,
    ) => {
      let chunkJZLCHNYAValue435 = chunkJZLCHNYAParam66 || "";
      if (
        (typeof chunkJZLCHNYAValue435 == "object" &&
          (chunkJZLCHNYAValue435 = chunkJZLCHNYAValue435[0]),
        chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels))
      )
        return (
          (chunkJZLCHNYAValue435 = chunkJZLCHNYAValue435.replace(
            /\\n|\n/g,
            "<br />",
          )),
          chunkAGHRB4JFR.info("vertexText" + chunkJZLCHNYAValue435),
          await chunkJZLCHNYAHelper5({
            isNode: chunkJZLCHNYAParam69,
            label: chunkS3R3BYOJD(chunkJZLCHNYAValue435).replace(
              /fa[blrs]?:fa-[\w-]+/g,
              (chunkJZLCHNYAParam394) =>
                `<i class='${chunkJZLCHNYAParam394.replace(":", " ")}'></i>`,
            ),
            labelStyle:
              chunkJZLCHNYAParam67 &&
              chunkJZLCHNYAParam67.replace("fill:", "color:"),
          })
        );
      {
        let chunkJZLCHNYAValue739 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text",
        );
        chunkJZLCHNYAValue739.setAttribute(
          "style",
          chunkJZLCHNYAParam67.replace("color:", "fill:"),
        );
        let chunkJZLCHNYAValue740 = [];
        chunkJZLCHNYAValue740 =
          typeof chunkJZLCHNYAValue435 == "string"
            ? chunkJZLCHNYAValue435.split(/\\n|\n|<br\s*\/?>/gi)
            : Array.isArray(chunkJZLCHNYAValue435)
              ? chunkJZLCHNYAValue435
              : [];
        for (let chunkJZLCHNYAValue847 of chunkJZLCHNYAValue740) {
          let chunkJZLCHNYAValue858 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          chunkJZLCHNYAValue858.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          chunkJZLCHNYAValue858.setAttribute("dy", "1em");
          chunkJZLCHNYAValue858.setAttribute("x", "0");
          chunkJZLCHNYAParam68
            ? chunkJZLCHNYAValue858.setAttribute("class", "title-row")
            : chunkJZLCHNYAValue858.setAttribute("class", "row");
          chunkJZLCHNYAValue858.textContent = chunkJZLCHNYAValue847.trim();
          chunkJZLCHNYAValue739.appendChild(chunkJZLCHNYAValue858);
        }
        return chunkJZLCHNYAValue739;
      }
    },
    "createLabel",
  ),
  chunkJZLCHNYAValue4 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam195,
      chunkJZLCHNYAParam196,
      chunkJZLCHNYAParam197,
      chunkJZLCHNYAParam198,
      chunkJZLCHNYAParam199,
    ) =>
      [
        "M",
        chunkJZLCHNYAParam195 + chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam196,
        "H",
        chunkJZLCHNYAParam195 + chunkJZLCHNYAParam197 - chunkJZLCHNYAParam199,
        "A",
        chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam199,
        0,
        0,
        1,
        chunkJZLCHNYAParam195 + chunkJZLCHNYAParam197,
        chunkJZLCHNYAParam196 + chunkJZLCHNYAParam199,
        "V",
        chunkJZLCHNYAParam196 + chunkJZLCHNYAParam198 - chunkJZLCHNYAParam199,
        "A",
        chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam199,
        0,
        0,
        1,
        chunkJZLCHNYAParam195 + chunkJZLCHNYAParam197 - chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam196 + chunkJZLCHNYAParam198,
        "H",
        chunkJZLCHNYAParam195 + chunkJZLCHNYAParam199,
        "A",
        chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam199,
        0,
        0,
        1,
        chunkJZLCHNYAParam195,
        chunkJZLCHNYAParam196 + chunkJZLCHNYAParam198 - chunkJZLCHNYAParam199,
        "V",
        chunkJZLCHNYAParam196 + chunkJZLCHNYAParam199,
        "A",
        chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam199,
        0,
        0,
        1,
        chunkJZLCHNYAParam195 + chunkJZLCHNYAParam199,
        chunkJZLCHNYAParam196,
        "Z",
      ].join(" "),
    "createRoundedRectPathD",
  ),
  chunkJZLCHNYAValue5 = chunkAGHRB4JFN(async (chunkJZLCHNYAParam24, event) => {
    chunkAGHRB4JFR.info("Creating subgraph rect for ", event.id, event);
    let chunkJZLCHNYAValue219 = _chunkABZYJK2DL(),
      { themeVariables, handDrawnSeed } = chunkJZLCHNYAValue219,
      { clusterBkg, clusterBorder } = themeVariables,
      { labelStyles, nodeStyles, borderStyles, backgroundStyles } =
        chunkATLVNIR6I(event),
      chunkJZLCHNYAValue220 = chunkJZLCHNYAParam24
        .insert("g")
        .attr("class", "cluster " + event.cssClasses)
        .attr("id", event.id)
        .attr("data-look", event.look),
      chunkJZLCHNYAValue221 = chunkABZYJK2DV(
        chunkJZLCHNYAValue219.flowchart.htmlLabels,
      ),
      chunkJZLCHNYAValue222 = chunkJZLCHNYAValue220
        .insert("g")
        .attr("class", "cluster-label "),
      chunkJZLCHNYAValue223 = await chunkJA3XYJ7ZA(
        chunkJZLCHNYAValue222,
        event.label,
        {
          style: event.labelStyle,
          useHtmlLabels: chunkJZLCHNYAValue221,
          isNode: true,
        },
      ),
      chunkJZLCHNYAValue224 = chunkJZLCHNYAValue223.getBBox();
    if (chunkABZYJK2DV(chunkJZLCHNYAValue219.flowchart.htmlLabels)) {
      let chunkJZLCHNYAValue1049 = chunkJZLCHNYAValue223.children[0],
        chunkJZLCHNYAValue1050 = Src(chunkJZLCHNYAValue223);
      chunkJZLCHNYAValue224 = chunkJZLCHNYAValue1049.getBoundingClientRect();
      chunkJZLCHNYAValue1050.attr("width", chunkJZLCHNYAValue224.width);
      chunkJZLCHNYAValue1050.attr("height", chunkJZLCHNYAValue224.height);
    }
    let _chunkJZLCHNYAS =
      event.width <= chunkJZLCHNYAValue224.width + event.padding
        ? chunkJZLCHNYAValue224.width + event.padding
        : event.width;
    event.width <= chunkJZLCHNYAValue224.width + event.padding
      ? (event.diff = (_chunkJZLCHNYAS - event.width) / 2 - event.padding)
      : (event.diff = -event.padding);
    let chunkJZLCHNYAValue225 = event.height,
      _chunkJZLCHNYAU = event.x - _chunkJZLCHNYAS / 2,
      chunkJZLCHNYAValue226 = event.y - chunkJZLCHNYAValue225 / 2;
    chunkAGHRB4JFR.trace("Data ", event, JSON.stringify(event));
    let chunkJZLCHNYAValue227;
    if (event.look === "handDrawn") {
      let chunkJZLCHNYAValue859 = rough.svg(chunkJZLCHNYAValue220),
        chunkJZLCHNYAValue860 = chunkATLVNIR6A(event, {
          roughness: 0.7,
          fill: clusterBkg,
          stroke: clusterBorder,
          fillWeight: 3,
          seed: handDrawnSeed,
        }),
        chunkJZLCHNYAValue861 = chunkJZLCHNYAValue859.path(
          chunkJZLCHNYAValue4(
            _chunkJZLCHNYAU,
            chunkJZLCHNYAValue226,
            _chunkJZLCHNYAS,
            chunkJZLCHNYAValue225,
            0,
          ),
          chunkJZLCHNYAValue860,
        );
      chunkJZLCHNYAValue227 = chunkJZLCHNYAValue220.insert(
        () => (
          chunkAGHRB4JFR.debug("Rough node insert CXC", chunkJZLCHNYAValue861),
          chunkJZLCHNYAValue861
        ),
        ":first-child",
      );
      chunkJZLCHNYAValue227
        .select("path:nth-child(2)")
        .attr("style", borderStyles.join(";"));
      chunkJZLCHNYAValue227
        .select("path")
        .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
    } else {
      chunkJZLCHNYAValue227 = chunkJZLCHNYAValue220.insert(
        "rect",
        ":first-child",
      );
      chunkJZLCHNYAValue227
        .attr("style", nodeStyles)
        .attr("rx", event.rx)
        .attr("ry", event.ry)
        .attr("x", _chunkJZLCHNYAU)
        .attr("y", chunkJZLCHNYAValue226)
        .attr("width", _chunkJZLCHNYAS)
        .attr("height", chunkJZLCHNYAValue225);
    }
    let { subGraphTitleTopMargin } = chunkCVBHYZKI(chunkJZLCHNYAValue219);
    if (
      (chunkJZLCHNYAValue222.attr(
        "transform",
        `translate(${event.x - chunkJZLCHNYAValue224.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
      ),
      labelStyles)
    ) {
      let chunkJZLCHNYAValue1108 = chunkJZLCHNYAValue222.select("span");
      chunkJZLCHNYAValue1108 &&
        chunkJZLCHNYAValue1108.attr("style", labelStyles);
    }
    let chunkJZLCHNYAValue228 = chunkJZLCHNYAValue227.node().getBBox();
    return (
      (event.offsetX = 0),
      (event.width = chunkJZLCHNYAValue228.width),
      (event.height = chunkJZLCHNYAValue228.height),
      (event.offsetY = chunkJZLCHNYAValue224.height - event.padding / 2),
      (event.intersect = function (chunkJZLCHNYAParam408) {
        return chunkJZLCHNYAValue3(event, chunkJZLCHNYAParam408);
      }),
      {
        cluster: chunkJZLCHNYAValue220,
        labelBBox: chunkJZLCHNYAValue224,
      }
    );
  }, "rect"),
  chunkJZLCHNYAValue6 = {
    rect: chunkJZLCHNYAValue5,
    squareRect: chunkJZLCHNYAValue5,
    roundedWithTitle: chunkAGHRB4JFN(async (chunkJZLCHNYAParam11, event) => {
      let chunkJZLCHNYAValue124 = _chunkABZYJK2DL(),
        { themeVariables, handDrawnSeed } = chunkJZLCHNYAValue124,
        {
          altBackground,
          compositeBackground,
          compositeTitleBackground,
          nodeBorder,
        } = themeVariables,
        chunkJZLCHNYAValue125 = chunkJZLCHNYAParam11
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.id)
          .attr("data-id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYAValue126 = chunkJZLCHNYAValue125.insert(
          "g",
          ":first-child",
        ),
        chunkJZLCHNYAValue127 = chunkJZLCHNYAValue125
          .insert("g")
          .attr("class", "cluster-label"),
        chunkJZLCHNYAValue128 = chunkJZLCHNYAValue125.append("rect"),
        chunkJZLCHNYAValue129 = chunkJZLCHNYAValue127
          .node()
          .appendChild(
            await chunkJZLCHNYAR(
              event.label,
              event.labelStyle,
              undefined,
              true,
            ),
          ),
        chunkJZLCHNYAValue130 = chunkJZLCHNYAValue129.getBBox();
      if (chunkABZYJK2DV(chunkJZLCHNYAValue124.flowchart.htmlLabels)) {
        let chunkJZLCHNYAValue1042 = chunkJZLCHNYAValue129.children[0],
          chunkJZLCHNYAValue1043 = Src(chunkJZLCHNYAValue129);
        chunkJZLCHNYAValue130 = chunkJZLCHNYAValue1042.getBoundingClientRect();
        chunkJZLCHNYAValue1043.attr("width", chunkJZLCHNYAValue130.width);
        chunkJZLCHNYAValue1043.attr("height", chunkJZLCHNYAValue130.height);
      }
      let chunkJZLCHNYAValue131 = 0 * event.padding,
        chunkJZLCHNYAValue132 = chunkJZLCHNYAValue131 / 2,
        chunkJZLCHNYAValue133 =
          (event.width <= chunkJZLCHNYAValue130.width + event.padding
            ? chunkJZLCHNYAValue130.width + event.padding
            : event.width) + chunkJZLCHNYAValue131;
      event.width <= chunkJZLCHNYAValue130.width + event.padding
        ? (event.diff =
            (chunkJZLCHNYAValue133 - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunkJZLCHNYAValue134 = event.height + chunkJZLCHNYAValue131,
        chunkJZLCHNYAValue135 =
          event.height +
          chunkJZLCHNYAValue131 -
          chunkJZLCHNYAValue130.height -
          6,
        chunkJZLCHNYAValue136 = event.x - chunkJZLCHNYAValue133 / 2,
        _chunkJZLCHNYAS = event.y - chunkJZLCHNYAValue134 / 2;
      event.width = chunkJZLCHNYAValue133;
      let chunkJZLCHNYAValue137 =
          event.y -
          event.height / 2 -
          chunkJZLCHNYAValue132 +
          chunkJZLCHNYAValue130.height +
          2,
        _chunkJZLCHNYAU;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYAValue789 = event.cssClasses.includes(
            "statediagram-cluster-alt",
          ),
          chunkJZLCHNYAValue790 = rough.svg(chunkJZLCHNYAValue125),
          chunkJZLCHNYAValue791 =
            event.rx || event.ry
              ? chunkJZLCHNYAValue790.path(
                  chunkJZLCHNYAValue4(
                    chunkJZLCHNYAValue136,
                    _chunkJZLCHNYAS,
                    chunkJZLCHNYAValue133,
                    chunkJZLCHNYAValue134,
                    10,
                  ),
                  {
                    roughness: 0.7,
                    fill: compositeTitleBackground,
                    fillStyle: "solid",
                    stroke: nodeBorder,
                    seed: handDrawnSeed,
                  },
                )
              : chunkJZLCHNYAValue790.rectangle(
                  chunkJZLCHNYAValue136,
                  _chunkJZLCHNYAS,
                  chunkJZLCHNYAValue133,
                  chunkJZLCHNYAValue134,
                  {
                    seed: handDrawnSeed,
                  },
                );
        _chunkJZLCHNYAU = chunkJZLCHNYAValue125.insert(
          () => chunkJZLCHNYAValue791,
          ":first-child",
        );
        let chunkJZLCHNYAValue792 = chunkJZLCHNYAValue790.rectangle(
          chunkJZLCHNYAValue136,
          chunkJZLCHNYAValue137,
          chunkJZLCHNYAValue133,
          chunkJZLCHNYAValue135,
          {
            fill: chunkJZLCHNYAValue789 ? altBackground : compositeBackground,
            fillStyle: chunkJZLCHNYAValue789 ? "hachure" : "solid",
            stroke: nodeBorder,
            seed: handDrawnSeed,
          },
        );
        _chunkJZLCHNYAU = chunkJZLCHNYAValue125.insert(
          () => chunkJZLCHNYAValue791,
          ":first-child",
        );
        chunkJZLCHNYAValue128 = chunkJZLCHNYAValue125.insert(
          () => chunkJZLCHNYAValue792,
        );
      } else {
        _chunkJZLCHNYAU = chunkJZLCHNYAValue126.insert("rect", ":first-child");
        _chunkJZLCHNYAU
          .attr("class", "outer")
          .attr("x", chunkJZLCHNYAValue136)
          .attr("y", _chunkJZLCHNYAS)
          .attr("width", chunkJZLCHNYAValue133)
          .attr("height", chunkJZLCHNYAValue134)
          .attr("data-look", event.look);
        chunkJZLCHNYAValue128
          .attr("class", "inner")
          .attr("x", chunkJZLCHNYAValue136)
          .attr("y", chunkJZLCHNYAValue137)
          .attr("width", chunkJZLCHNYAValue133)
          .attr("height", chunkJZLCHNYAValue135);
      }
      return (
        chunkJZLCHNYAValue127.attr(
          "transform",
          `translate(${event.x - chunkJZLCHNYAValue130.width / 2}, ${_chunkJZLCHNYAS + 1 - (chunkABZYJK2DV(chunkJZLCHNYAValue124.flowchart.htmlLabels) ? 0 : 3)})`,
        ),
        (event.height = _chunkJZLCHNYAU.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = chunkJZLCHNYAValue130.height - event.padding / 2),
        (event.labelBBox = chunkJZLCHNYAValue130),
        (event.intersect = function (chunkJZLCHNYAParam377) {
          return chunkJZLCHNYAValue3(event, chunkJZLCHNYAParam377);
        }),
        {
          cluster: chunkJZLCHNYAValue125,
          labelBBox: chunkJZLCHNYAValue130,
        }
      );
    }, "roundedWithTitle"),
    noteGroup: chunkAGHRB4JFN(
      (chunkJZLCHNYAParam189, chunkJZLCHNYAParam190) => {
        let chunkJZLCHNYAValue798 = chunkJZLCHNYAParam189
            .insert("g")
            .attr("class", "note-cluster")
            .attr("id", chunkJZLCHNYAParam190.id),
          chunkJZLCHNYAValue799 = chunkJZLCHNYAValue798.insert(
            "rect",
            ":first-child",
          ),
          chunkJZLCHNYAValue800 = 0 * chunkJZLCHNYAParam190.padding,
          chunkJZLCHNYAValue801 = chunkJZLCHNYAValue800 / 2;
        chunkJZLCHNYAValue799
          .attr("rx", chunkJZLCHNYAParam190.rx)
          .attr("ry", chunkJZLCHNYAParam190.ry)
          .attr(
            "x",
            chunkJZLCHNYAParam190.x -
              chunkJZLCHNYAParam190.width / 2 -
              chunkJZLCHNYAValue801,
          )
          .attr(
            "y",
            chunkJZLCHNYAParam190.y -
              chunkJZLCHNYAParam190.height / 2 -
              chunkJZLCHNYAValue801,
          )
          .attr("width", chunkJZLCHNYAParam190.width + chunkJZLCHNYAValue800)
          .attr("height", chunkJZLCHNYAParam190.height + chunkJZLCHNYAValue800)
          .attr("fill", "none");
        let chunkJZLCHNYAValue802 = chunkJZLCHNYAValue799.node().getBBox();
        return (
          (chunkJZLCHNYAParam190.width = chunkJZLCHNYAValue802.width),
          (chunkJZLCHNYAParam190.height = chunkJZLCHNYAValue802.height),
          (chunkJZLCHNYAParam190.intersect = function (chunkJZLCHNYAParam378) {
            return chunkJZLCHNYAValue3(
              chunkJZLCHNYAParam190,
              chunkJZLCHNYAParam378,
            );
          }),
          {
            cluster: chunkJZLCHNYAValue798,
            labelBBox: {
              width: 0,
              height: 0,
            },
          }
        );
      },
      "noteGroup",
    ),
    divider: chunkAGHRB4JFN((chunkJZLCHNYAParam72, event) => {
      let { themeVariables, handDrawnSeed } = _chunkABZYJK2DL(),
        { nodeBorder } = themeVariables,
        chunkJZLCHNYAValue442 = chunkJZLCHNYAParam72
          .insert("g")
          .attr("class", event.cssClasses)
          .attr("id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYAValue443 = chunkJZLCHNYAValue442.insert(
          "g",
          ":first-child",
        ),
        chunkJZLCHNYAValue444 = 0 * event.padding,
        chunkJZLCHNYAValue445 = event.width + chunkJZLCHNYAValue444;
      event.diff = -event.padding;
      let chunkJZLCHNYAValue446 = event.height + chunkJZLCHNYAValue444,
        chunkJZLCHNYAValue447 = event.x - chunkJZLCHNYAValue445 / 2,
        chunkJZLCHNYAValue448 = event.y - chunkJZLCHNYAValue446 / 2;
      event.width = chunkJZLCHNYAValue445;
      let chunkJZLCHNYAValue449;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYAValue978 = rough
          .svg(chunkJZLCHNYAValue442)
          .rectangle(
            chunkJZLCHNYAValue447,
            chunkJZLCHNYAValue448,
            chunkJZLCHNYAValue445,
            chunkJZLCHNYAValue446,
            {
              fill: "lightgrey",
              roughness: 0.5,
              strokeLineDash: [5],
              stroke: nodeBorder,
              seed: handDrawnSeed,
            },
          );
        chunkJZLCHNYAValue449 = chunkJZLCHNYAValue442.insert(
          () => chunkJZLCHNYAValue978,
          ":first-child",
        );
      } else {
        chunkJZLCHNYAValue449 = chunkJZLCHNYAValue443.insert(
          "rect",
          ":first-child",
        );
        chunkJZLCHNYAValue449
          .attr("class", "divider")
          .attr("x", chunkJZLCHNYAValue447)
          .attr("y", chunkJZLCHNYAValue448)
          .attr("width", chunkJZLCHNYAValue445)
          .attr("height", chunkJZLCHNYAValue446)
          .attr("data-look", event.look);
      }
      return (
        (event.height = chunkJZLCHNYAValue449.node().getBBox().height),
        (event.offsetX = 0),
        (event.offsetY = 0),
        (event.intersect = function (chunkJZLCHNYAParam379) {
          return chunkJZLCHNYAValue3(event, chunkJZLCHNYAParam379);
        }),
        {
          cluster: chunkJZLCHNYAValue442,
          labelBBox: {},
        }
      );
    }, "divider"),
    kanbanSection: chunkAGHRB4JFN(async (chunkJZLCHNYAParam18, event) => {
      chunkAGHRB4JFR.info("Creating subgraph rect for ", event.id, event);
      let chunkJZLCHNYAValue186 = _chunkABZYJK2DL(),
        { themeVariables, handDrawnSeed } = chunkJZLCHNYAValue186,
        { clusterBkg, clusterBorder } = themeVariables,
        { labelStyles, nodeStyles, borderStyles, backgroundStyles } =
          chunkATLVNIR6I(event),
        chunkJZLCHNYAValue187 = chunkJZLCHNYAParam18
          .insert("g")
          .attr("class", "cluster " + event.cssClasses)
          .attr("id", event.id)
          .attr("data-look", event.look),
        chunkJZLCHNYAValue188 = chunkABZYJK2DV(
          chunkJZLCHNYAValue186.flowchart.htmlLabels,
        ),
        chunkJZLCHNYAValue189 = chunkJZLCHNYAValue187
          .insert("g")
          .attr("class", "cluster-label "),
        chunkJZLCHNYAValue190 = await chunkJA3XYJ7ZA(
          chunkJZLCHNYAValue189,
          event.label,
          {
            style: event.labelStyle,
            useHtmlLabels: chunkJZLCHNYAValue188,
            isNode: true,
            width: event.width,
          },
        ),
        chunkJZLCHNYAValue191 = chunkJZLCHNYAValue190.getBBox();
      if (chunkABZYJK2DV(chunkJZLCHNYAValue186.flowchart.htmlLabels)) {
        let chunkJZLCHNYAValue1044 = chunkJZLCHNYAValue190.children[0],
          chunkJZLCHNYAValue1045 = Src(chunkJZLCHNYAValue190);
        chunkJZLCHNYAValue191 = chunkJZLCHNYAValue1044.getBoundingClientRect();
        chunkJZLCHNYAValue1045.attr("width", chunkJZLCHNYAValue191.width);
        chunkJZLCHNYAValue1045.attr("height", chunkJZLCHNYAValue191.height);
      }
      let _chunkJZLCHNYAS =
        event.width <= chunkJZLCHNYAValue191.width + event.padding
          ? chunkJZLCHNYAValue191.width + event.padding
          : event.width;
      event.width <= chunkJZLCHNYAValue191.width + event.padding
        ? (event.diff = (_chunkJZLCHNYAS - event.width) / 2 - event.padding)
        : (event.diff = -event.padding);
      let chunkJZLCHNYAValue192 = event.height,
        _chunkJZLCHNYAU = event.x - _chunkJZLCHNYAS / 2,
        chunkJZLCHNYAValue193 = event.y - chunkJZLCHNYAValue192 / 2;
      chunkAGHRB4JFR.trace("Data ", event, JSON.stringify(event));
      let chunkJZLCHNYAValue194;
      if (event.look === "handDrawn") {
        let chunkJZLCHNYAValue837 = rough.svg(chunkJZLCHNYAValue187),
          chunkJZLCHNYAValue838 = chunkATLVNIR6A(event, {
            roughness: 0.7,
            fill: clusterBkg,
            stroke: clusterBorder,
            fillWeight: 4,
            seed: handDrawnSeed,
          }),
          chunkJZLCHNYAValue839 = chunkJZLCHNYAValue837.path(
            chunkJZLCHNYAValue4(
              _chunkJZLCHNYAU,
              chunkJZLCHNYAValue193,
              _chunkJZLCHNYAS,
              chunkJZLCHNYAValue192,
              event.rx,
            ),
            chunkJZLCHNYAValue838,
          );
        chunkJZLCHNYAValue194 = chunkJZLCHNYAValue187.insert(
          () => (
            chunkAGHRB4JFR.debug(
              "Rough node insert CXC",
              chunkJZLCHNYAValue839,
            ),
            chunkJZLCHNYAValue839
          ),
          ":first-child",
        );
        chunkJZLCHNYAValue194
          .select("path:nth-child(2)")
          .attr("style", borderStyles.join(";"));
        chunkJZLCHNYAValue194
          .select("path")
          .attr("style", backgroundStyles.join(";").replace("fill", "stroke"));
      } else {
        chunkJZLCHNYAValue194 = chunkJZLCHNYAValue187.insert(
          "rect",
          ":first-child",
        );
        chunkJZLCHNYAValue194
          .attr("style", nodeStyles)
          .attr("rx", event.rx)
          .attr("ry", event.ry)
          .attr("x", _chunkJZLCHNYAU)
          .attr("y", chunkJZLCHNYAValue193)
          .attr("width", _chunkJZLCHNYAS)
          .attr("height", chunkJZLCHNYAValue192);
      }
      let { subGraphTitleTopMargin } = chunkCVBHYZKI(chunkJZLCHNYAValue186);
      if (
        (chunkJZLCHNYAValue189.attr(
          "transform",
          `translate(${event.x - chunkJZLCHNYAValue191.width / 2}, ${event.y - event.height / 2 + subGraphTitleTopMargin})`,
        ),
        labelStyles)
      ) {
        let chunkJZLCHNYAValue1104 = chunkJZLCHNYAValue189.select("span");
        chunkJZLCHNYAValue1104 &&
          chunkJZLCHNYAValue1104.attr("style", labelStyles);
      }
      let chunkJZLCHNYAValue195 = chunkJZLCHNYAValue194.node().getBBox();
      return (
        (event.offsetX = 0),
        (event.width = chunkJZLCHNYAValue195.width),
        (event.height = chunkJZLCHNYAValue195.height),
        (event.offsetY = chunkJZLCHNYAValue191.height - event.padding / 2),
        (event.intersect = function (chunkJZLCHNYAParam380) {
          return chunkJZLCHNYAValue3(event, chunkJZLCHNYAParam380);
        }),
        {
          cluster: chunkJZLCHNYAValue187,
          labelBBox: chunkJZLCHNYAValue191,
        }
      );
    }, "kanbanSection"),
  },
  chunkJZLCHNYAValue7 = new Map();
export const chunkJZLCHNYAT = chunkAGHRB4JFN(() => {
  chunkJZLCHNYAValue7 = new Map();
}, "clear");
export const chunkJZLCHNYAI = chunkAGHRB4JFN(
  async (chunkJZLCHNYAParam310, chunkJZLCHNYAParam311) => {
    let chunkJZLCHNYAValue1097 = await chunkJZLCHNYAValue6[
      chunkJZLCHNYAParam311.shape || "rect"
    ](chunkJZLCHNYAParam310, chunkJZLCHNYAParam311);
    return (
      chunkJZLCHNYAValue7.set(chunkJZLCHNYAParam311.id, chunkJZLCHNYAValue1097),
      chunkJZLCHNYAValue1097
    );
  },
  "insertCluster",
);
function chunkJZLCHNYAHelper6(chunkJZLCHNYAParam409, chunkJZLCHNYAParam410) {
  return chunkJZLCHNYAParam409.intersect(chunkJZLCHNYAParam410);
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper6, "intersectNode");
var chunkJZLCHNYAValue8 = chunkJZLCHNYAHelper6;
function chunkJZLCHNYAHelper7(
  chunkJZLCHNYAParam237,
  chunkJZLCHNYAParam238,
  chunkJZLCHNYAParam239,
  chunkJZLCHNYAParam240,
) {
  var chunkJZLCHNYAValue960 = chunkJZLCHNYAParam237.x,
    chunkJZLCHNYAValue961 = chunkJZLCHNYAParam237.y,
    chunkJZLCHNYAValue962 = chunkJZLCHNYAValue960 - chunkJZLCHNYAParam240.x,
    chunkJZLCHNYAValue963 = chunkJZLCHNYAValue961 - chunkJZLCHNYAParam240.y,
    chunkJZLCHNYAValue964 = Math.sqrt(
      chunkJZLCHNYAParam238 *
        chunkJZLCHNYAParam238 *
        chunkJZLCHNYAValue963 *
        chunkJZLCHNYAValue963 +
        chunkJZLCHNYAParam239 *
          chunkJZLCHNYAParam239 *
          chunkJZLCHNYAValue962 *
          chunkJZLCHNYAValue962,
    ),
    chunkJZLCHNYAValue965 = Math.abs(
      (chunkJZLCHNYAParam238 * chunkJZLCHNYAParam239 * chunkJZLCHNYAValue962) /
        chunkJZLCHNYAValue964,
    );
  chunkJZLCHNYAParam240.x < chunkJZLCHNYAValue960 &&
    (chunkJZLCHNYAValue965 = -chunkJZLCHNYAValue965);
  var chunkJZLCHNYAValue966 = Math.abs(
    (chunkJZLCHNYAParam238 * chunkJZLCHNYAParam239 * chunkJZLCHNYAValue963) /
      chunkJZLCHNYAValue964,
  );
  return (
    chunkJZLCHNYAParam240.y < chunkJZLCHNYAValue961 &&
      (chunkJZLCHNYAValue966 = -chunkJZLCHNYAValue966),
    {
      x: chunkJZLCHNYAValue960 + chunkJZLCHNYAValue965,
      y: chunkJZLCHNYAValue961 + chunkJZLCHNYAValue966,
    }
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper7, "intersectEllipse");
var chunkJZLCHNYAValue9 = chunkJZLCHNYAHelper7;
function chunkJZLCHNYAHelper8(
  chunkJZLCHNYAParam389,
  chunkJZLCHNYAParam390,
  chunkJZLCHNYAParam391,
) {
  return chunkJZLCHNYAValue9(
    chunkJZLCHNYAParam389,
    chunkJZLCHNYAParam390,
    chunkJZLCHNYAParam390,
    chunkJZLCHNYAParam391,
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper8, "intersectCircle");
var chunkJZLCHNYAValue10 = chunkJZLCHNYAHelper8;
function chunkJZLCHNYAHelper9(
  chunkJZLCHNYAParam182,
  chunkJZLCHNYAParam183,
  chunkJZLCHNYAParam184,
  chunkJZLCHNYAParam185,
) {
  {
    let chunkJZLCHNYAValue803 =
        chunkJZLCHNYAParam183.y - chunkJZLCHNYAParam182.y,
      chunkJZLCHNYAValue804 = chunkJZLCHNYAParam182.x - chunkJZLCHNYAParam183.x,
      chunkJZLCHNYAValue805 =
        chunkJZLCHNYAParam183.x * chunkJZLCHNYAParam182.y -
        chunkJZLCHNYAParam182.x * chunkJZLCHNYAParam183.y,
      chunkJZLCHNYAValue806 =
        chunkJZLCHNYAValue803 * chunkJZLCHNYAParam184.x +
        chunkJZLCHNYAValue804 * chunkJZLCHNYAParam184.y +
        chunkJZLCHNYAValue805,
      chunkJZLCHNYAValue807 =
        chunkJZLCHNYAValue803 * chunkJZLCHNYAParam185.x +
        chunkJZLCHNYAValue804 * chunkJZLCHNYAParam185.y +
        chunkJZLCHNYAValue805;
    if (
      chunkJZLCHNYAValue806 !== 0 &&
      chunkJZLCHNYAValue807 !== 0 &&
      chunkJZLCHNYAHelper10(chunkJZLCHNYAValue806, chunkJZLCHNYAValue807)
    )
      return;
    let chunkJZLCHNYAValue809 =
        chunkJZLCHNYAParam185.y - chunkJZLCHNYAParam184.y,
      chunkJZLCHNYAValue810 = chunkJZLCHNYAParam184.x - chunkJZLCHNYAParam185.x,
      chunkJZLCHNYAValue811 =
        chunkJZLCHNYAParam185.x * chunkJZLCHNYAParam184.y -
        chunkJZLCHNYAParam184.x * chunkJZLCHNYAParam185.y,
      chunkJZLCHNYAValue812 =
        chunkJZLCHNYAValue809 * chunkJZLCHNYAParam182.x +
        chunkJZLCHNYAValue810 * chunkJZLCHNYAParam182.y +
        chunkJZLCHNYAValue811,
      chunkJZLCHNYAValue813 =
        chunkJZLCHNYAValue809 * chunkJZLCHNYAParam183.x +
        chunkJZLCHNYAValue810 * chunkJZLCHNYAParam183.y +
        chunkJZLCHNYAValue811;
    if (
      Math.abs(chunkJZLCHNYAValue812) < 1e-6 &&
      Math.abs(chunkJZLCHNYAValue813) < 1e-6 &&
      chunkJZLCHNYAHelper10(chunkJZLCHNYAValue812, chunkJZLCHNYAValue813)
    )
      return;
    let chunkJZLCHNYAValue814 =
      chunkJZLCHNYAValue803 * chunkJZLCHNYAValue810 -
      chunkJZLCHNYAValue809 * chunkJZLCHNYAValue804;
    if (chunkJZLCHNYAValue814 === 0) return;
    let chunkJZLCHNYAValue815 = Math.abs(chunkJZLCHNYAValue814 / 2),
      chunkJZLCHNYAValue816 =
        chunkJZLCHNYAValue804 * chunkJZLCHNYAValue811 -
        chunkJZLCHNYAValue810 * chunkJZLCHNYAValue805,
      chunkJZLCHNYAValue817 =
        chunkJZLCHNYAValue816 < 0
          ? (chunkJZLCHNYAValue816 - chunkJZLCHNYAValue815) /
            chunkJZLCHNYAValue814
          : (chunkJZLCHNYAValue816 + chunkJZLCHNYAValue815) /
            chunkJZLCHNYAValue814;
    return (
      (chunkJZLCHNYAValue816 =
        chunkJZLCHNYAValue809 * chunkJZLCHNYAValue805 -
        chunkJZLCHNYAValue803 * chunkJZLCHNYAValue811),
      {
        x: chunkJZLCHNYAValue817,
        y:
          chunkJZLCHNYAValue816 < 0
            ? (chunkJZLCHNYAValue816 - chunkJZLCHNYAValue815) /
              chunkJZLCHNYAValue814
            : (chunkJZLCHNYAValue816 + chunkJZLCHNYAValue815) /
              chunkJZLCHNYAValue814,
      }
    );
  }
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper9, "intersectLine");
function chunkJZLCHNYAHelper10(chunkJZLCHNYAParam411, chunkJZLCHNYAParam412) {
  return chunkJZLCHNYAParam411 * chunkJZLCHNYAParam412 > 0;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper10, "sameSign");
var chunkJZLCHNYAValue11 = chunkJZLCHNYAHelper9;
function chunkJZLCHNYAHelper11(
  chunkJZLCHNYAParam146,
  chunkJZLCHNYAParam147,
  chunkJZLCHNYAParam148,
) {
  let chunkJZLCHNYAValue709 = chunkJZLCHNYAParam146.x,
    chunkJZLCHNYAValue710 = chunkJZLCHNYAParam146.y,
    chunkJZLCHNYAValue711 = [],
    chunkJZLCHNYAValue712 = 1 / 0,
    chunkJZLCHNYAValue713 = 1 / 0;
  typeof chunkJZLCHNYAParam147.forEach == "function"
    ? chunkJZLCHNYAParam147.forEach(function (item) {
        chunkJZLCHNYAValue712 = Math.min(chunkJZLCHNYAValue712, item.x);
        chunkJZLCHNYAValue713 = Math.min(chunkJZLCHNYAValue713, item.y);
      })
    : ((chunkJZLCHNYAValue712 = Math.min(
        chunkJZLCHNYAValue712,
        chunkJZLCHNYAParam147.x,
      )),
      (chunkJZLCHNYAValue713 = Math.min(
        chunkJZLCHNYAValue713,
        chunkJZLCHNYAParam147.y,
      )));
  let chunkJZLCHNYAValue714 =
      chunkJZLCHNYAValue709 -
      chunkJZLCHNYAParam146.width / 2 -
      chunkJZLCHNYAValue712,
    chunkJZLCHNYAValue715 =
      chunkJZLCHNYAValue710 -
      chunkJZLCHNYAParam146.height / 2 -
      chunkJZLCHNYAValue713;
  for (
    let chunkJZLCHNYAValue1029 = 0;
    chunkJZLCHNYAValue1029 < chunkJZLCHNYAParam147.length;
    chunkJZLCHNYAValue1029++
  ) {
    let chunkJZLCHNYAValue1051 = chunkJZLCHNYAParam147[chunkJZLCHNYAValue1029],
      chunkJZLCHNYAValue1052 =
        chunkJZLCHNYAParam147[
          chunkJZLCHNYAValue1029 < chunkJZLCHNYAParam147.length - 1
            ? chunkJZLCHNYAValue1029 + 1
            : 0
        ],
      chunkJZLCHNYAValue1053 = chunkJZLCHNYAValue11(
        chunkJZLCHNYAParam146,
        chunkJZLCHNYAParam148,
        {
          x: chunkJZLCHNYAValue714 + chunkJZLCHNYAValue1051.x,
          y: chunkJZLCHNYAValue715 + chunkJZLCHNYAValue1051.y,
        },
        {
          x: chunkJZLCHNYAValue714 + chunkJZLCHNYAValue1052.x,
          y: chunkJZLCHNYAValue715 + chunkJZLCHNYAValue1052.y,
        },
      );
    chunkJZLCHNYAValue1053 &&
      chunkJZLCHNYAValue711.push(chunkJZLCHNYAValue1053);
  }
  return chunkJZLCHNYAValue711.length
    ? (chunkJZLCHNYAValue711.length > 1 &&
        chunkJZLCHNYAValue711.sort(
          function (chunkJZLCHNYAParam269, chunkJZLCHNYAParam270) {
            let chunkJZLCHNYAValue983 =
                chunkJZLCHNYAParam269.x - chunkJZLCHNYAParam148.x,
              chunkJZLCHNYAValue984 =
                chunkJZLCHNYAParam269.y - chunkJZLCHNYAParam148.y,
              chunkJZLCHNYAValue985 = Math.sqrt(
                chunkJZLCHNYAValue983 * chunkJZLCHNYAValue983 +
                  chunkJZLCHNYAValue984 * chunkJZLCHNYAValue984,
              ),
              chunkJZLCHNYAValue986 =
                chunkJZLCHNYAParam270.x - chunkJZLCHNYAParam148.x,
              chunkJZLCHNYAValue987 =
                chunkJZLCHNYAParam270.y - chunkJZLCHNYAParam148.y,
              chunkJZLCHNYAValue988 = Math.sqrt(
                chunkJZLCHNYAValue986 * chunkJZLCHNYAValue986 +
                  chunkJZLCHNYAValue987 * chunkJZLCHNYAValue987,
              );
            return chunkJZLCHNYAValue985 < chunkJZLCHNYAValue988
              ? -1
              : chunkJZLCHNYAValue985 === chunkJZLCHNYAValue988
                ? 0
                : 1;
          },
        ),
      chunkJZLCHNYAValue711[0])
    : chunkJZLCHNYAParam146;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper11, "intersectPolygon");
var chunkJZLCHNYAValue12 = {
  node: chunkJZLCHNYAValue8,
  circle: chunkJZLCHNYAValue10,
  ellipse: chunkJZLCHNYAValue9,
  polygon: chunkJZLCHNYAHelper11,
  rect: chunkJZLCHNYAValue3,
};
function chunkJZLCHNYAHelper12(chunkJZLCHNYAParam191, chunkJZLCHNYAParam192) {
  let { labelStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam192);
  chunkJZLCHNYAParam192.labelStyle = labelStyles;
  let chunkJZLCHNYAValue819 = chunkJZLCHNYAValue2(chunkJZLCHNYAParam192),
    chunkJZLCHNYAValue820 = chunkJZLCHNYAValue819;
  chunkJZLCHNYAValue819 || (chunkJZLCHNYAValue820 = "anchor");
  let chunkJZLCHNYAValue821 = chunkJZLCHNYAParam191
      .insert("g")
      .attr("class", chunkJZLCHNYAValue820)
      .attr("id", chunkJZLCHNYAParam192.domId || chunkJZLCHNYAParam192.id),
    { cssStyles } = chunkJZLCHNYAParam192,
    chunkJZLCHNYAValue822 = rough.svg(chunkJZLCHNYAValue821),
    chunkJZLCHNYAValue823 = chunkATLVNIR6A(chunkJZLCHNYAParam192, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid",
    });
  chunkJZLCHNYAParam192.look !== "handDrawn" &&
    (chunkJZLCHNYAValue823.roughness = 0);
  let chunkJZLCHNYAValue824 = chunkJZLCHNYAValue822.circle(
      0,
      0,
      2,
      chunkJZLCHNYAValue823,
    ),
    chunkJZLCHNYAValue825 = chunkJZLCHNYAValue821.insert(
      () => chunkJZLCHNYAValue824,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue825
      .attr("class", "anchor")
      .attr("style", chunkS3R3BYOJF(cssStyles)),
    chunkJZLCHNYAU(chunkJZLCHNYAParam192, chunkJZLCHNYAValue825),
    (chunkJZLCHNYAParam192.intersect = function (chunkJZLCHNYAParam337) {
      return (
        chunkAGHRB4JFR.info(
          "Circle intersect",
          chunkJZLCHNYAParam192,
          1,
          chunkJZLCHNYAParam337,
        ),
        chunkJZLCHNYAValue12.circle(
          chunkJZLCHNYAParam192,
          1,
          chunkJZLCHNYAParam337,
        )
      );
    }),
    chunkJZLCHNYAValue821
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper12, "anchor");
function chunkJZLCHNYAHelper13(
  chunkJZLCHNYAParam161,
  chunkJZLCHNYAParam162,
  chunkJZLCHNYAParam163,
  chunkJZLCHNYAParam164,
  chunkJZLCHNYAParam165,
  chunkJZLCHNYAParam166,
  chunkJZLCHNYAParam167,
) {
  let chunkJZLCHNYAValue749 =
      (chunkJZLCHNYAParam161 + chunkJZLCHNYAParam163) / 2,
    chunkJZLCHNYAValue750 = (chunkJZLCHNYAParam162 + chunkJZLCHNYAParam164) / 2,
    chunkJZLCHNYAValue751 = Math.atan2(
      chunkJZLCHNYAParam164 - chunkJZLCHNYAParam162,
      chunkJZLCHNYAParam163 - chunkJZLCHNYAParam161,
    ),
    chunkJZLCHNYAValue752 = (chunkJZLCHNYAParam163 - chunkJZLCHNYAParam161) / 2,
    chunkJZLCHNYAValue753 = (chunkJZLCHNYAParam164 - chunkJZLCHNYAParam162) / 2,
    chunkJZLCHNYAValue754 = chunkJZLCHNYAValue752 / chunkJZLCHNYAParam165,
    chunkJZLCHNYAValue755 = chunkJZLCHNYAValue753 / chunkJZLCHNYAParam166,
    chunkJZLCHNYAValue756 = Math.sqrt(
      chunkJZLCHNYAValue754 ** 2 + chunkJZLCHNYAValue755 ** 2,
    );
  if (chunkJZLCHNYAValue756 > 1)
    throw Error(
      "The given radii are too small to create an arc between the points.",
    );
  let chunkJZLCHNYAValue757 = Math.sqrt(1 - chunkJZLCHNYAValue756 ** 2),
    chunkJZLCHNYAValue758 =
      chunkJZLCHNYAValue749 +
      chunkJZLCHNYAValue757 *
        chunkJZLCHNYAParam166 *
        Math.sin(chunkJZLCHNYAValue751) *
        (chunkJZLCHNYAParam167 ? -1 : 1),
    chunkJZLCHNYAValue759 =
      chunkJZLCHNYAValue750 -
      chunkJZLCHNYAValue757 *
        chunkJZLCHNYAParam165 *
        Math.cos(chunkJZLCHNYAValue751) *
        (chunkJZLCHNYAParam167 ? -1 : 1),
    chunkJZLCHNYAValue760 = Math.atan2(
      (chunkJZLCHNYAParam162 - chunkJZLCHNYAValue759) / chunkJZLCHNYAParam166,
      (chunkJZLCHNYAParam161 - chunkJZLCHNYAValue758) / chunkJZLCHNYAParam165,
    ),
    chunkJZLCHNYAValue761 =
      Math.atan2(
        (chunkJZLCHNYAParam164 - chunkJZLCHNYAValue759) / chunkJZLCHNYAParam166,
        (chunkJZLCHNYAParam163 - chunkJZLCHNYAValue758) / chunkJZLCHNYAParam165,
      ) - chunkJZLCHNYAValue760;
  chunkJZLCHNYAParam167 &&
    chunkJZLCHNYAValue761 < 0 &&
    (chunkJZLCHNYAValue761 += 2 * Math.PI);
  !chunkJZLCHNYAParam167 &&
    chunkJZLCHNYAValue761 > 0 &&
    (chunkJZLCHNYAValue761 -= 2 * Math.PI);
  let chunkJZLCHNYAValue762 = [];
  for (
    let chunkJZLCHNYAValue1055 = 0;
    chunkJZLCHNYAValue1055 < 20;
    chunkJZLCHNYAValue1055++
  ) {
    let chunkJZLCHNYAValue1072 =
        chunkJZLCHNYAValue760 +
        (chunkJZLCHNYAValue1055 / 19) * chunkJZLCHNYAValue761,
      chunkJZLCHNYAValue1073 =
        chunkJZLCHNYAValue758 +
        chunkJZLCHNYAParam165 * Math.cos(chunkJZLCHNYAValue1072),
      chunkJZLCHNYAValue1074 =
        chunkJZLCHNYAValue759 +
        chunkJZLCHNYAParam166 * Math.sin(chunkJZLCHNYAValue1072);
    chunkJZLCHNYAValue762.push({
      x: chunkJZLCHNYAValue1073,
      y: chunkJZLCHNYAValue1074,
    });
  }
  return chunkJZLCHNYAValue762;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper13, "generateArcPoints");
async function chunkJZLCHNYAHelper14(
  chunkJZLCHNYAParam122,
  chunkJZLCHNYAParam123,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam123);
  chunkJZLCHNYAParam123.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam122,
      chunkJZLCHNYAParam123,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam123),
    ),
    chunkJZLCHNYAValue641 = bbox.width + chunkJZLCHNYAParam123.padding + 20,
    chunkJZLCHNYAValue642 = bbox.height + chunkJZLCHNYAParam123.padding,
    chunkJZLCHNYAValue643 = chunkJZLCHNYAValue642 / 2,
    chunkJZLCHNYAValue644 =
      chunkJZLCHNYAValue643 / (2.5 + chunkJZLCHNYAValue642 / 50),
    { cssStyles } = chunkJZLCHNYAParam123,
    chunkJZLCHNYAValue645 = [
      {
        x: chunkJZLCHNYAValue641 / 2,
        y: -chunkJZLCHNYAValue642 / 2,
      },
      {
        x: -chunkJZLCHNYAValue641 / 2,
        y: -chunkJZLCHNYAValue642 / 2,
      },
      ...chunkJZLCHNYAHelper13(
        -chunkJZLCHNYAValue641 / 2,
        -chunkJZLCHNYAValue642 / 2,
        -chunkJZLCHNYAValue641 / 2,
        chunkJZLCHNYAValue642 / 2,
        chunkJZLCHNYAValue644,
        chunkJZLCHNYAValue643,
        false,
      ),
      {
        x: chunkJZLCHNYAValue641 / 2,
        y: chunkJZLCHNYAValue642 / 2,
      },
      ...chunkJZLCHNYAHelper13(
        chunkJZLCHNYAValue641 / 2,
        chunkJZLCHNYAValue642 / 2,
        chunkJZLCHNYAValue641 / 2,
        -chunkJZLCHNYAValue642 / 2,
        chunkJZLCHNYAValue644,
        chunkJZLCHNYAValue643,
        true,
      ),
    ],
    chunkJZLCHNYAValue646 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue647 = chunkATLVNIR6A(chunkJZLCHNYAParam123, {});
  chunkJZLCHNYAParam123.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue647.roughness = 0),
    (chunkJZLCHNYAValue647.fillStyle = "solid"));
  let chunkJZLCHNYAValue648 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue645),
    chunkJZLCHNYAValue649 = chunkJZLCHNYAValue646.path(
      chunkJZLCHNYAValue648,
      chunkJZLCHNYAValue647,
    ),
    chunkJZLCHNYAValue650 = shapeSvg.insert(
      () => chunkJZLCHNYAValue649,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue650.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam123.look !== "handDrawn" &&
      chunkJZLCHNYAValue650.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam123.look !== "handDrawn" &&
      chunkJZLCHNYAValue650.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue650.attr(
      "transform",
      `translate(${chunkJZLCHNYAValue644 / 2}, 0)`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam123, chunkJZLCHNYAValue650),
    (chunkJZLCHNYAParam123.intersect = function (chunkJZLCHNYAParam349) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam123,
        chunkJZLCHNYAValue645,
        chunkJZLCHNYAParam349,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper14, "bowTieRect");
function chunkJZLCHNYAHelper15(
  chunkJZLCHNYAParam215,
  chunkJZLCHNYAParam216,
  chunkJZLCHNYAParam217,
  chunkJZLCHNYAParam218,
) {
  return chunkJZLCHNYAParam215
    .insert("polygon", ":first-child")
    .attr(
      "points",
      chunkJZLCHNYAParam218
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -chunkJZLCHNYAParam216 / 2 +
        "," +
        chunkJZLCHNYAParam217 / 2 +
        ")",
    );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper15, "insertPolygonShape");
async function chunkJZLCHNYAHelper16(
  chunkJZLCHNYAParam155,
  chunkJZLCHNYAParam156,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam156);
  chunkJZLCHNYAParam156.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam155,
      chunkJZLCHNYAParam156,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam156),
    ),
    chunkJZLCHNYAValue729 = bbox.height + chunkJZLCHNYAParam156.padding,
    chunkJZLCHNYAValue730 = bbox.width + chunkJZLCHNYAParam156.padding + 12,
    chunkJZLCHNYAValue731 = chunkJZLCHNYAValue730,
    chunkJZLCHNYAValue732 = -chunkJZLCHNYAValue729,
    chunkJZLCHNYAValue733 = [
      {
        x: 12,
        y: chunkJZLCHNYAValue732,
      },
      {
        x: chunkJZLCHNYAValue731,
        y: chunkJZLCHNYAValue732,
      },
      {
        x: chunkJZLCHNYAValue731,
        y: 0,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYAValue732 + 12,
      },
      {
        x: 12,
        y: chunkJZLCHNYAValue732,
      },
    ],
    chunkJZLCHNYAValue734,
    { cssStyles } = chunkJZLCHNYAParam156;
  if (chunkJZLCHNYAParam156.look === "handDrawn") {
    let chunkJZLCHNYAValue1002 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1003 = chunkATLVNIR6A(chunkJZLCHNYAParam156, {}),
      chunkJZLCHNYAValue1004 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue733),
      chunkJZLCHNYAValue1005 = chunkJZLCHNYAValue1002.path(
        chunkJZLCHNYAValue1004,
        chunkJZLCHNYAValue1003,
      );
    chunkJZLCHNYAValue734 = shapeSvg
      .insert(() => chunkJZLCHNYAValue1005, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue730 / 2}, ${chunkJZLCHNYAValue729 / 2})`,
      );
    cssStyles && chunkJZLCHNYAValue734.attr("style", cssStyles);
  } else
    chunkJZLCHNYAValue734 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue730,
      chunkJZLCHNYAValue729,
      chunkJZLCHNYAValue733,
    );
  return (
    nodeStyles && chunkJZLCHNYAValue734.attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam156, chunkJZLCHNYAValue734),
    (chunkJZLCHNYAParam156.intersect = function (chunkJZLCHNYAParam350) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam156,
        chunkJZLCHNYAValue733,
        chunkJZLCHNYAParam350,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper16, "card");
function chunkJZLCHNYAHelper17(chunkJZLCHNYAParam159, chunkJZLCHNYAParam160) {
  let { nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam160);
  chunkJZLCHNYAParam160.label = "";
  let chunkJZLCHNYAValue741 = chunkJZLCHNYAParam159
      .insert("g")
      .attr("class", chunkJZLCHNYAValue2(chunkJZLCHNYAParam160))
      .attr("id", chunkJZLCHNYAParam160.domId ?? chunkJZLCHNYAParam160.id),
    { cssStyles } = chunkJZLCHNYAParam160,
    chunkJZLCHNYAValue742 = Math.max(28, chunkJZLCHNYAParam160.width ?? 0),
    chunkJZLCHNYAValue743 = [
      {
        x: 0,
        y: chunkJZLCHNYAValue742 / 2,
      },
      {
        x: chunkJZLCHNYAValue742 / 2,
        y: 0,
      },
      {
        x: 0,
        y: -chunkJZLCHNYAValue742 / 2,
      },
      {
        x: -chunkJZLCHNYAValue742 / 2,
        y: 0,
      },
    ],
    chunkJZLCHNYAValue744 = rough.svg(chunkJZLCHNYAValue741),
    chunkJZLCHNYAValue745 = chunkATLVNIR6A(chunkJZLCHNYAParam160, {});
  chunkJZLCHNYAParam160.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue745.roughness = 0),
    (chunkJZLCHNYAValue745.fillStyle = "solid"));
  let chunkJZLCHNYAValue746 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue743),
    chunkJZLCHNYAValue747 = chunkJZLCHNYAValue744.path(
      chunkJZLCHNYAValue746,
      chunkJZLCHNYAValue745,
    ),
    chunkJZLCHNYAValue748 = chunkJZLCHNYAValue741.insert(
      () => chunkJZLCHNYAValue747,
      ":first-child",
    );
  return (
    cssStyles &&
      chunkJZLCHNYAParam160.look !== "handDrawn" &&
      chunkJZLCHNYAValue748.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam160.look !== "handDrawn" &&
      chunkJZLCHNYAValue748.selectAll("path").attr("style", nodeStyles),
    (chunkJZLCHNYAParam160.width = 28),
    (chunkJZLCHNYAParam160.height = 28),
    (chunkJZLCHNYAParam160.intersect = function (chunkJZLCHNYAParam351) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam160,
        chunkJZLCHNYAValue743,
        chunkJZLCHNYAParam351,
      );
    }),
    chunkJZLCHNYAValue741
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper17, "choice");
async function chunkJZLCHNYAHelper18(
  chunkJZLCHNYAParam132,
  chunkJZLCHNYAParam133,
  chunkJZLCHNYAParam134,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam133);
  chunkJZLCHNYAParam133.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam132,
      chunkJZLCHNYAParam133,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam133),
    ),
    chunkJZLCHNYAValue682 = chunkJZLCHNYAParam134?.padding ?? halfPadding,
    chunkJZLCHNYAValue683 = bbox.width / 2 + chunkJZLCHNYAValue682,
    chunkJZLCHNYAValue684,
    { cssStyles } = chunkJZLCHNYAParam133;
  if (chunkJZLCHNYAParam133.look === "handDrawn") {
    let chunkJZLCHNYAValue1026 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1027 = chunkATLVNIR6A(chunkJZLCHNYAParam133, {}),
      chunkJZLCHNYAValue1028 = chunkJZLCHNYAValue1026.circle(
        0,
        0,
        chunkJZLCHNYAValue683 * 2,
        chunkJZLCHNYAValue1027,
      );
    chunkJZLCHNYAValue684 = shapeSvg.insert(
      () => chunkJZLCHNYAValue1028,
      ":first-child",
    );
    chunkJZLCHNYAValue684
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles));
  } else
    chunkJZLCHNYAValue684 = shapeSvg
      .insert("circle", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("r", chunkJZLCHNYAValue683)
      .attr("cx", 0)
      .attr("cy", 0);
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam133, chunkJZLCHNYAValue684),
    (chunkJZLCHNYAParam133.calcIntersect = function (
      chunkJZLCHNYAParam342,
      chunkJZLCHNYAParam343,
    ) {
      let chunkJZLCHNYAValue1103 = chunkJZLCHNYAParam342.width / 2;
      return chunkJZLCHNYAValue12.circle(
        chunkJZLCHNYAParam342,
        chunkJZLCHNYAValue1103,
        chunkJZLCHNYAParam343,
      );
    }),
    (chunkJZLCHNYAParam133.intersect = function (chunkJZLCHNYAParam338) {
      return (
        chunkAGHRB4JFR.info(
          "Circle intersect",
          chunkJZLCHNYAParam133,
          chunkJZLCHNYAValue683,
          chunkJZLCHNYAParam338,
        ),
        chunkJZLCHNYAValue12.circle(
          chunkJZLCHNYAParam133,
          chunkJZLCHNYAValue683,
          chunkJZLCHNYAParam338,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper18, "circle");
function chunkJZLCHNYAHelper19(chunkJZLCHNYAParam212) {
  let chunkJZLCHNYAValue906 = Math.cos(Math.PI / 4),
    chunkJZLCHNYAValue907 = Math.sin(Math.PI / 4),
    chunkJZLCHNYAValue908 = chunkJZLCHNYAParam212 * 2,
    chunkJZLCHNYAValue909 = {
      x: (chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue906,
      y: (chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue907,
    },
    chunkJZLCHNYAValue910 = {
      x: -(chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue906,
      y: (chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue907,
    },
    chunkJZLCHNYAValue911 = {
      x: -(chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue906,
      y: -(chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue907,
    },
    chunkJZLCHNYAValue912 = {
      x: (chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue906,
      y: -(chunkJZLCHNYAValue908 / 2) * chunkJZLCHNYAValue907,
    };
  return `M ${chunkJZLCHNYAValue910.x},${chunkJZLCHNYAValue910.y} L ${chunkJZLCHNYAValue912.x},${chunkJZLCHNYAValue912.y}
                   M ${chunkJZLCHNYAValue909.x},${chunkJZLCHNYAValue909.y} L ${chunkJZLCHNYAValue911.x},${chunkJZLCHNYAValue911.y}`;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper19, "createLine");
function chunkJZLCHNYAHelper20(chunkJZLCHNYAParam153, chunkJZLCHNYAParam154) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam154);
  chunkJZLCHNYAParam154.labelStyle = labelStyles;
  chunkJZLCHNYAParam154.label = "";
  let chunkJZLCHNYAValue721 = chunkJZLCHNYAParam153
      .insert("g")
      .attr("class", chunkJZLCHNYAValue2(chunkJZLCHNYAParam154))
      .attr("id", chunkJZLCHNYAParam154.domId ?? chunkJZLCHNYAParam154.id),
    chunkJZLCHNYAValue722 = Math.max(30, chunkJZLCHNYAParam154?.width ?? 0),
    { cssStyles } = chunkJZLCHNYAParam154,
    chunkJZLCHNYAValue723 = rough.svg(chunkJZLCHNYAValue721),
    chunkJZLCHNYAValue724 = chunkATLVNIR6A(chunkJZLCHNYAParam154, {});
  chunkJZLCHNYAParam154.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue724.roughness = 0),
    (chunkJZLCHNYAValue724.fillStyle = "solid"));
  let chunkJZLCHNYAValue725 = chunkJZLCHNYAValue723.circle(
      0,
      0,
      chunkJZLCHNYAValue722 * 2,
      chunkJZLCHNYAValue724,
    ),
    chunkJZLCHNYAValue726 = chunkJZLCHNYAHelper19(chunkJZLCHNYAValue722),
    chunkJZLCHNYAValue727 = chunkJZLCHNYAValue723.path(
      chunkJZLCHNYAValue726,
      chunkJZLCHNYAValue724,
    ),
    chunkJZLCHNYAValue728 = chunkJZLCHNYAValue721.insert(
      () => chunkJZLCHNYAValue725,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue728.insert(() => chunkJZLCHNYAValue727),
    cssStyles &&
      chunkJZLCHNYAParam154.look !== "handDrawn" &&
      chunkJZLCHNYAValue728.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam154.look !== "handDrawn" &&
      chunkJZLCHNYAValue728.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam154, chunkJZLCHNYAValue728),
    (chunkJZLCHNYAParam154.intersect = function (chunkJZLCHNYAParam301) {
      return (
        chunkAGHRB4JFR.info("crossedCircle intersect", chunkJZLCHNYAParam154, {
          radius: chunkJZLCHNYAValue722,
          point: chunkJZLCHNYAParam301,
        }),
        chunkJZLCHNYAValue12.circle(
          chunkJZLCHNYAParam154,
          chunkJZLCHNYAValue722,
          chunkJZLCHNYAParam301,
        )
      );
    }),
    chunkJZLCHNYAValue721
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper20, "crossedCircle");
function chunkJZLCHNYAHelper21(
  chunkJZLCHNYAParam219,
  chunkJZLCHNYAParam220,
  chunkJZLCHNYAParam221,
  chunkJZLCHNYAParam222 = 100,
  chunkJZLCHNYAParam223 = 0,
  chunkJZLCHNYAParam224 = 180,
) {
  let chunkJZLCHNYAValue951 = [],
    chunkJZLCHNYAValue952 = (chunkJZLCHNYAParam223 * Math.PI) / 180,
    chunkJZLCHNYAValue953 =
      ((chunkJZLCHNYAParam224 * Math.PI) / 180 - chunkJZLCHNYAValue952) /
      (chunkJZLCHNYAParam222 - 1);
  for (
    let chunkJZLCHNYAValue1063 = 0;
    chunkJZLCHNYAValue1063 < chunkJZLCHNYAParam222;
    chunkJZLCHNYAValue1063++
  ) {
    let chunkJZLCHNYAValue1082 =
        chunkJZLCHNYAValue952 + chunkJZLCHNYAValue1063 * chunkJZLCHNYAValue953,
      chunkJZLCHNYAValue1083 =
        chunkJZLCHNYAParam219 +
        chunkJZLCHNYAParam221 * Math.cos(chunkJZLCHNYAValue1082),
      chunkJZLCHNYAValue1084 =
        chunkJZLCHNYAParam220 +
        chunkJZLCHNYAParam221 * Math.sin(chunkJZLCHNYAValue1082);
    chunkJZLCHNYAValue951.push({
      x: -chunkJZLCHNYAValue1083,
      y: -chunkJZLCHNYAValue1084,
    });
  }
  return chunkJZLCHNYAValue951;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper21, "generateCirclePoints");
async function _e(chunkJZLCHNYAParam35, chunkJZLCHNYAParam36) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam36);
  chunkJZLCHNYAParam36.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam35,
      chunkJZLCHNYAParam36,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam36),
    ),
    chunkJZLCHNYAValue270 = bbox.width + (chunkJZLCHNYAParam36.padding ?? 0),
    chunkJZLCHNYAValue271 = bbox.height + (chunkJZLCHNYAParam36.padding ?? 0),
    chunkJZLCHNYAValue272 = Math.max(5, chunkJZLCHNYAValue271 * 0.1),
    { cssStyles } = chunkJZLCHNYAParam36,
    chunkJZLCHNYAValue273 = [
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2,
        -chunkJZLCHNYAValue271 / 2,
        chunkJZLCHNYAValue272,
        30,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYAValue270 / 2 - chunkJZLCHNYAValue272,
        y: chunkJZLCHNYAValue272,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2 + chunkJZLCHNYAValue272 * 2,
        -chunkJZLCHNYAValue272,
        chunkJZLCHNYAValue272,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2 + chunkJZLCHNYAValue272 * 2,
        chunkJZLCHNYAValue272,
        chunkJZLCHNYAValue272,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYAValue270 / 2 - chunkJZLCHNYAValue272,
        y: -chunkJZLCHNYAValue271 / 2,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2,
        chunkJZLCHNYAValue271 / 2,
        chunkJZLCHNYAValue272,
        20,
        0,
        90,
      ),
    ],
    chunkJZLCHNYAValue274 = [
      {
        x: chunkJZLCHNYAValue270 / 2,
        y: -chunkJZLCHNYAValue271 / 2 - chunkJZLCHNYAValue272,
      },
      {
        x: -chunkJZLCHNYAValue270 / 2,
        y: -chunkJZLCHNYAValue271 / 2 - chunkJZLCHNYAValue272,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2,
        -chunkJZLCHNYAValue271 / 2,
        chunkJZLCHNYAValue272,
        20,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYAValue270 / 2 - chunkJZLCHNYAValue272,
        y: -chunkJZLCHNYAValue272,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2 + chunkJZLCHNYAValue270 * 0.1,
        -chunkJZLCHNYAValue272,
        chunkJZLCHNYAValue272,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2 + chunkJZLCHNYAValue270 * 0.1,
        chunkJZLCHNYAValue272,
        chunkJZLCHNYAValue272,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYAValue270 / 2 - chunkJZLCHNYAValue272,
        y: chunkJZLCHNYAValue271 / 2,
      },
      ...chunkJZLCHNYAHelper21(
        chunkJZLCHNYAValue270 / 2,
        chunkJZLCHNYAValue271 / 2,
        chunkJZLCHNYAValue272,
        20,
        0,
        90,
      ),
      {
        x: -chunkJZLCHNYAValue270 / 2,
        y: chunkJZLCHNYAValue271 / 2 + chunkJZLCHNYAValue272,
      },
      {
        x: chunkJZLCHNYAValue270 / 2,
        y: chunkJZLCHNYAValue271 / 2 + chunkJZLCHNYAValue272,
      },
    ],
    chunkJZLCHNYAValue275 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue276 = chunkATLVNIR6A(chunkJZLCHNYAParam36, {
      fill: "none",
    });
  chunkJZLCHNYAParam36.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue276.roughness = 0),
    (chunkJZLCHNYAValue276.fillStyle = "solid"));
  let chunkJZLCHNYAValue277 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYAValue273,
    ).replace("Z", ""),
    chunkJZLCHNYAValue278 = chunkJZLCHNYAValue275.path(
      chunkJZLCHNYAValue277,
      chunkJZLCHNYAValue276,
    ),
    chunkJZLCHNYAValue279 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue274),
    chunkJZLCHNYAValue280 = chunkJZLCHNYAValue275.path(chunkJZLCHNYAValue279, {
      ...chunkJZLCHNYAValue276,
    }),
    chunkJZLCHNYAValue281 = shapeSvg.insert("g", ":first-child");
  return (
    chunkJZLCHNYAValue281
      .insert(() => chunkJZLCHNYAValue280, ":first-child")
      .attr("stroke-opacity", 0),
    chunkJZLCHNYAValue281.insert(() => chunkJZLCHNYAValue278, ":first-child"),
    chunkJZLCHNYAValue281.attr("class", "text"),
    cssStyles &&
      chunkJZLCHNYAParam36.look !== "handDrawn" &&
      chunkJZLCHNYAValue281.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam36.look !== "handDrawn" &&
      chunkJZLCHNYAValue281.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue281.attr(
      "transform",
      `translate(${chunkJZLCHNYAValue272}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue270 / 2 + chunkJZLCHNYAValue272 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue271 / 2 + (chunkJZLCHNYAParam36.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam36, chunkJZLCHNYAValue281),
    (chunkJZLCHNYAParam36.intersect = function (chunkJZLCHNYAParam352) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam36,
        chunkJZLCHNYAValue274,
        chunkJZLCHNYAParam352,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(_e, "curlyBraceLeft");
function chunkJZLCHNYAHelper22(
  chunkJZLCHNYAParam231,
  chunkJZLCHNYAParam232,
  chunkJZLCHNYAParam233,
  chunkJZLCHNYAParam234 = 100,
  chunkJZLCHNYAParam235 = 0,
  chunkJZLCHNYAParam236 = 180,
) {
  let chunkJZLCHNYAValue957 = [],
    chunkJZLCHNYAValue958 = (chunkJZLCHNYAParam235 * Math.PI) / 180,
    chunkJZLCHNYAValue959 =
      ((chunkJZLCHNYAParam236 * Math.PI) / 180 - chunkJZLCHNYAValue958) /
      (chunkJZLCHNYAParam234 - 1);
  for (
    let chunkJZLCHNYAValue1065 = 0;
    chunkJZLCHNYAValue1065 < chunkJZLCHNYAParam234;
    chunkJZLCHNYAValue1065++
  ) {
    let chunkJZLCHNYAValue1088 =
        chunkJZLCHNYAValue958 + chunkJZLCHNYAValue1065 * chunkJZLCHNYAValue959,
      chunkJZLCHNYAValue1089 =
        chunkJZLCHNYAParam231 +
        chunkJZLCHNYAParam233 * Math.cos(chunkJZLCHNYAValue1088),
      chunkJZLCHNYAValue1090 =
        chunkJZLCHNYAParam232 +
        chunkJZLCHNYAParam233 * Math.sin(chunkJZLCHNYAValue1088);
    chunkJZLCHNYAValue957.push({
      x: chunkJZLCHNYAValue1089,
      y: chunkJZLCHNYAValue1090,
    });
  }
  return chunkJZLCHNYAValue957;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper22, "generateCirclePoints");
async function chunkJZLCHNYAHelper23(
  chunkJZLCHNYAParam33,
  chunkJZLCHNYAParam34,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam34);
  chunkJZLCHNYAParam34.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam33,
      chunkJZLCHNYAParam34,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam34),
    ),
    chunkJZLCHNYAValue258 = bbox.width + (chunkJZLCHNYAParam34.padding ?? 0),
    chunkJZLCHNYAValue259 = bbox.height + (chunkJZLCHNYAParam34.padding ?? 0),
    chunkJZLCHNYAValue260 = Math.max(5, chunkJZLCHNYAValue259 * 0.1),
    { cssStyles } = chunkJZLCHNYAParam34,
    chunkJZLCHNYAValue261 = [
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2,
        -chunkJZLCHNYAValue259 / 2,
        chunkJZLCHNYAValue260,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260,
        y: -chunkJZLCHNYAValue260,
      },
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260 * 2,
        -chunkJZLCHNYAValue260,
        chunkJZLCHNYAValue260,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260 * 2,
        chunkJZLCHNYAValue260,
        chunkJZLCHNYAValue260,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260,
        y: chunkJZLCHNYAValue259 / 2,
      },
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2,
        chunkJZLCHNYAValue259 / 2,
        chunkJZLCHNYAValue260,
        20,
        0,
        90,
      ),
    ],
    chunkJZLCHNYAValue262 = [
      {
        x: -chunkJZLCHNYAValue258 / 2,
        y: -chunkJZLCHNYAValue259 / 2 - chunkJZLCHNYAValue260,
      },
      {
        x: chunkJZLCHNYAValue258 / 2,
        y: -chunkJZLCHNYAValue259 / 2 - chunkJZLCHNYAValue260,
      },
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2,
        -chunkJZLCHNYAValue259 / 2,
        chunkJZLCHNYAValue260,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260,
        y: -chunkJZLCHNYAValue260,
      },
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260 * 2,
        -chunkJZLCHNYAValue260,
        chunkJZLCHNYAValue260,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260 * 2,
        chunkJZLCHNYAValue260,
        chunkJZLCHNYAValue260,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYAValue258 / 2 + chunkJZLCHNYAValue260,
        y: chunkJZLCHNYAValue259 / 2,
      },
      ...chunkJZLCHNYAHelper22(
        chunkJZLCHNYAValue258 / 2,
        chunkJZLCHNYAValue259 / 2,
        chunkJZLCHNYAValue260,
        20,
        0,
        90,
      ),
      {
        x: chunkJZLCHNYAValue258 / 2,
        y: chunkJZLCHNYAValue259 / 2 + chunkJZLCHNYAValue260,
      },
      {
        x: -chunkJZLCHNYAValue258 / 2,
        y: chunkJZLCHNYAValue259 / 2 + chunkJZLCHNYAValue260,
      },
    ],
    chunkJZLCHNYAValue263 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue264 = chunkATLVNIR6A(chunkJZLCHNYAParam34, {
      fill: "none",
    });
  chunkJZLCHNYAParam34.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue264.roughness = 0),
    (chunkJZLCHNYAValue264.fillStyle = "solid"));
  let chunkJZLCHNYAValue265 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYAValue261,
    ).replace("Z", ""),
    chunkJZLCHNYAValue266 = chunkJZLCHNYAValue263.path(
      chunkJZLCHNYAValue265,
      chunkJZLCHNYAValue264,
    ),
    chunkJZLCHNYAValue267 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue262),
    chunkJZLCHNYAValue268 = chunkJZLCHNYAValue263.path(chunkJZLCHNYAValue267, {
      ...chunkJZLCHNYAValue264,
    }),
    chunkJZLCHNYAValue269 = shapeSvg.insert("g", ":first-child");
  return (
    chunkJZLCHNYAValue269
      .insert(() => chunkJZLCHNYAValue268, ":first-child")
      .attr("stroke-opacity", 0),
    chunkJZLCHNYAValue269.insert(() => chunkJZLCHNYAValue266, ":first-child"),
    chunkJZLCHNYAValue269.attr("class", "text"),
    cssStyles &&
      chunkJZLCHNYAParam34.look !== "handDrawn" &&
      chunkJZLCHNYAValue269.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam34.look !== "handDrawn" &&
      chunkJZLCHNYAValue269.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue269.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue260}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue258 / 2 + (chunkJZLCHNYAParam34.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue259 / 2 + (chunkJZLCHNYAParam34.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam34, chunkJZLCHNYAValue269),
    (chunkJZLCHNYAParam34.intersect = function (chunkJZLCHNYAParam353) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam34,
        chunkJZLCHNYAValue262,
        chunkJZLCHNYAParam353,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper23, "curlyBraceRight");
function chunkJZLCHNYAHelper24(
  chunkJZLCHNYAParam225,
  chunkJZLCHNYAParam226,
  chunkJZLCHNYAParam227,
  chunkJZLCHNYAParam228 = 100,
  chunkJZLCHNYAParam229 = 0,
  chunkJZLCHNYAParam230 = 180,
) {
  let chunkJZLCHNYAValue954 = [],
    chunkJZLCHNYAValue955 = (chunkJZLCHNYAParam229 * Math.PI) / 180,
    chunkJZLCHNYAValue956 =
      ((chunkJZLCHNYAParam230 * Math.PI) / 180 - chunkJZLCHNYAValue955) /
      (chunkJZLCHNYAParam228 - 1);
  for (
    let chunkJZLCHNYAValue1064 = 0;
    chunkJZLCHNYAValue1064 < chunkJZLCHNYAParam228;
    chunkJZLCHNYAValue1064++
  ) {
    let chunkJZLCHNYAValue1085 =
        chunkJZLCHNYAValue955 + chunkJZLCHNYAValue1064 * chunkJZLCHNYAValue956,
      chunkJZLCHNYAValue1086 =
        chunkJZLCHNYAParam225 +
        chunkJZLCHNYAParam227 * Math.cos(chunkJZLCHNYAValue1085),
      chunkJZLCHNYAValue1087 =
        chunkJZLCHNYAParam226 +
        chunkJZLCHNYAParam227 * Math.sin(chunkJZLCHNYAValue1085);
    chunkJZLCHNYAValue954.push({
      x: -chunkJZLCHNYAValue1086,
      y: -chunkJZLCHNYAValue1087,
    });
  }
  return chunkJZLCHNYAValue954;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper24, "generateCirclePoints");
async function chunkJZLCHNYAHelper25(
  chunkJZLCHNYAParam22,
  chunkJZLCHNYAParam23,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam23);
  chunkJZLCHNYAParam23.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam22,
      chunkJZLCHNYAParam23,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam23),
    ),
    chunkJZLCHNYAValue204 = bbox.width + (chunkJZLCHNYAParam23.padding ?? 0),
    chunkJZLCHNYAValue205 = bbox.height + (chunkJZLCHNYAParam23.padding ?? 0),
    chunkJZLCHNYAValue206 = Math.max(5, chunkJZLCHNYAValue205 * 0.1),
    { cssStyles } = chunkJZLCHNYAParam23,
    chunkJZLCHNYAValue207 = [
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2,
        -chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        30,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206,
        y: chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2 + chunkJZLCHNYAValue206 * 2,
        -chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2 + chunkJZLCHNYAValue206 * 2,
        chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206,
        y: -chunkJZLCHNYAValue205 / 2,
      },
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2,
        chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        20,
        0,
        90,
      ),
    ],
    chunkJZLCHNYAValue208 = [
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 +
          chunkJZLCHNYAValue206 +
          chunkJZLCHNYAValue206 / 2,
        -chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        y: chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        -chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        0,
        90,
      ),
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        y: -chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 +
          chunkJZLCHNYAValue206 +
          chunkJZLCHNYAValue206 / 2,
        chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        30,
        -180,
        -270,
      ),
    ],
    chunkJZLCHNYAValue209 = [
      {
        x: chunkJZLCHNYAValue204 / 2,
        y: -chunkJZLCHNYAValue205 / 2 - chunkJZLCHNYAValue206,
      },
      {
        x: -chunkJZLCHNYAValue204 / 2,
        y: -chunkJZLCHNYAValue205 / 2 - chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2,
        -chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        20,
        -90,
        0,
      ),
      {
        x: -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206,
        y: -chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2 + chunkJZLCHNYAValue206 * 2,
        -chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        -180,
        -270,
      ),
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2 + chunkJZLCHNYAValue206 * 2,
        chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        -90,
        -180,
      ),
      {
        x: -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206,
        y: chunkJZLCHNYAValue205 / 2,
      },
      ...chunkJZLCHNYAHelper24(
        chunkJZLCHNYAValue204 / 2,
        chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        20,
        0,
        90,
      ),
      {
        x: -chunkJZLCHNYAValue204 / 2,
        y: chunkJZLCHNYAValue205 / 2 + chunkJZLCHNYAValue206,
      },
      {
        x:
          chunkJZLCHNYAValue204 / 2 -
          chunkJZLCHNYAValue206 -
          chunkJZLCHNYAValue206 / 2,
        y: chunkJZLCHNYAValue205 / 2 + chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 +
          chunkJZLCHNYAValue206 +
          chunkJZLCHNYAValue206 / 2,
        -chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        20,
        -90,
        -180,
      ),
      {
        x: chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        y: chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        -chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        0,
        90,
      ),
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        chunkJZLCHNYAValue206,
        chunkJZLCHNYAValue206,
        20,
        -90,
        0,
      ),
      {
        x: chunkJZLCHNYAValue204 / 2 - chunkJZLCHNYAValue206 / 2,
        y: -chunkJZLCHNYAValue206,
      },
      ...chunkJZLCHNYAHelper24(
        -chunkJZLCHNYAValue204 / 2 +
          chunkJZLCHNYAValue206 +
          chunkJZLCHNYAValue206 / 2,
        chunkJZLCHNYAValue205 / 2,
        chunkJZLCHNYAValue206,
        30,
        -180,
        -270,
      ),
    ],
    chunkJZLCHNYAValue210 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue211 = chunkATLVNIR6A(chunkJZLCHNYAParam23, {
      fill: "none",
    });
  chunkJZLCHNYAParam23.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue211.roughness = 0),
    (chunkJZLCHNYAValue211.fillStyle = "solid"));
  let chunkJZLCHNYAValue212 = chunkJZLCHNYAHelper1(
      chunkJZLCHNYAValue207,
    ).replace("Z", ""),
    chunkJZLCHNYAValue213 = chunkJZLCHNYAValue210.path(
      chunkJZLCHNYAValue212,
      chunkJZLCHNYAValue211,
    ),
    chunkJZLCHNYAValue214 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue208).replace(
      "Z",
      "",
    ),
    chunkJZLCHNYAValue215 = chunkJZLCHNYAValue210.path(
      chunkJZLCHNYAValue214,
      chunkJZLCHNYAValue211,
    ),
    chunkJZLCHNYAValue216 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue209),
    chunkJZLCHNYAValue217 = chunkJZLCHNYAValue210.path(chunkJZLCHNYAValue216, {
      ...chunkJZLCHNYAValue211,
    }),
    chunkJZLCHNYAValue218 = shapeSvg.insert("g", ":first-child");
  return (
    chunkJZLCHNYAValue218
      .insert(() => chunkJZLCHNYAValue217, ":first-child")
      .attr("stroke-opacity", 0),
    chunkJZLCHNYAValue218.insert(() => chunkJZLCHNYAValue213, ":first-child"),
    chunkJZLCHNYAValue218.insert(() => chunkJZLCHNYAValue215, ":first-child"),
    chunkJZLCHNYAValue218.attr("class", "text"),
    cssStyles &&
      chunkJZLCHNYAParam23.look !== "handDrawn" &&
      chunkJZLCHNYAValue218.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam23.look !== "handDrawn" &&
      chunkJZLCHNYAValue218.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue218.attr(
      "transform",
      `translate(${chunkJZLCHNYAValue206 - chunkJZLCHNYAValue206 / 4}, 0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue204 / 2 + (chunkJZLCHNYAParam23.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue205 / 2 + (chunkJZLCHNYAParam23.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam23, chunkJZLCHNYAValue218),
    (chunkJZLCHNYAParam23.intersect = function (chunkJZLCHNYAParam354) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam23,
        chunkJZLCHNYAValue209,
        chunkJZLCHNYAParam354,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper25, "curlyBraces");
async function be(chunkJZLCHNYAParam100, chunkJZLCHNYAParam101) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam101);
  chunkJZLCHNYAParam101.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam100,
      chunkJZLCHNYAParam101,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam101),
    ),
    chunkJZLCHNYAValue570 = Math.max(
      80,
      (bbox.width + (chunkJZLCHNYAParam101.padding ?? 0) * 2) * 1.25,
      chunkJZLCHNYAParam101?.width ?? 0,
    ),
    chunkJZLCHNYAValue571 = Math.max(
      20,
      bbox.height + (chunkJZLCHNYAParam101.padding ?? 0) * 2,
      chunkJZLCHNYAParam101?.height ?? 0,
    ),
    chunkJZLCHNYAValue572 = chunkJZLCHNYAValue571 / 2,
    { cssStyles } = chunkJZLCHNYAParam101,
    chunkJZLCHNYAValue573 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue574 = chunkATLVNIR6A(chunkJZLCHNYAParam101, {});
  chunkJZLCHNYAParam101.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue574.roughness = 0),
    (chunkJZLCHNYAValue574.fillStyle = "solid"));
  let chunkJZLCHNYAValue575 = chunkJZLCHNYAValue570,
    chunkJZLCHNYAValue576 = chunkJZLCHNYAValue571,
    chunkJZLCHNYAValue577 = chunkJZLCHNYAValue575 - chunkJZLCHNYAValue572,
    chunkJZLCHNYAValue578 = chunkJZLCHNYAValue576 / 4,
    chunkJZLCHNYAValue579 = [
      {
        x: chunkJZLCHNYAValue577,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue578,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYAValue576 / 2,
      },
      {
        x: chunkJZLCHNYAValue578,
        y: chunkJZLCHNYAValue576,
      },
      {
        x: chunkJZLCHNYAValue577,
        y: chunkJZLCHNYAValue576,
      },
      ...chunkJZLCHNYAHelper3(
        -chunkJZLCHNYAValue577,
        -chunkJZLCHNYAValue576 / 2,
        chunkJZLCHNYAValue572,
        50,
        270,
        90,
      ),
    ],
    chunkJZLCHNYAValue580 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue579),
    chunkJZLCHNYAValue581 = chunkJZLCHNYAValue573.path(
      chunkJZLCHNYAValue580,
      chunkJZLCHNYAValue574,
    ),
    chunkJZLCHNYAValue582 = shapeSvg.insert(
      () => chunkJZLCHNYAValue581,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue582.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam101.look !== "handDrawn" &&
      chunkJZLCHNYAValue582.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam101.look !== "handDrawn" &&
      chunkJZLCHNYAValue582.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue582.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue570 / 2}, ${-chunkJZLCHNYAValue571 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam101, chunkJZLCHNYAValue582),
    (chunkJZLCHNYAParam101.intersect = function (chunkJZLCHNYAParam355) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam101,
        chunkJZLCHNYAValue579,
        chunkJZLCHNYAParam355,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(be, "curvedTrapezoid");
var chunkJZLCHNYAValue13 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam272,
      chunkJZLCHNYAParam273,
      chunkJZLCHNYAParam274,
      chunkJZLCHNYAParam275,
      chunkJZLCHNYAParam276,
      chunkJZLCHNYAParam277,
    ) =>
      [
        `M${chunkJZLCHNYAParam272},${chunkJZLCHNYAParam273 + chunkJZLCHNYAParam277}`,
        `a${chunkJZLCHNYAParam276},${chunkJZLCHNYAParam277} 0,0,0 ${chunkJZLCHNYAParam274},0`,
        `a${chunkJZLCHNYAParam276},${chunkJZLCHNYAParam277} 0,0,0 ${-chunkJZLCHNYAParam274},0`,
        `l0,${chunkJZLCHNYAParam275}`,
        `a${chunkJZLCHNYAParam276},${chunkJZLCHNYAParam277} 0,0,0 ${chunkJZLCHNYAParam274},0`,
        `l0,${-chunkJZLCHNYAParam275}`,
      ].join(" "),
    "createCylinderPathD",
  ),
  chunkJZLCHNYAValue14 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam278,
      chunkJZLCHNYAParam279,
      chunkJZLCHNYAParam280,
      chunkJZLCHNYAParam281,
      chunkJZLCHNYAParam282,
      chunkJZLCHNYAParam283,
    ) =>
      [
        `M${chunkJZLCHNYAParam278},${chunkJZLCHNYAParam279 + chunkJZLCHNYAParam283}`,
        `M${chunkJZLCHNYAParam278 + chunkJZLCHNYAParam280},${chunkJZLCHNYAParam279 + chunkJZLCHNYAParam283}`,
        `a${chunkJZLCHNYAParam282},${chunkJZLCHNYAParam283} 0,0,0 ${-chunkJZLCHNYAParam280},0`,
        `l0,${chunkJZLCHNYAParam281}`,
        `a${chunkJZLCHNYAParam282},${chunkJZLCHNYAParam283} 0,0,0 ${chunkJZLCHNYAParam280},0`,
        `l0,${-chunkJZLCHNYAParam281}`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  chunkJZLCHNYAValue15 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam319,
      chunkJZLCHNYAParam320,
      chunkJZLCHNYAParam321,
      chunkJZLCHNYAParam322,
      chunkJZLCHNYAParam323,
      chunkJZLCHNYAParam324,
    ) =>
      [
        `M${chunkJZLCHNYAParam319 - chunkJZLCHNYAParam321 / 2},${-chunkJZLCHNYAParam322 / 2}`,
        `a${chunkJZLCHNYAParam323},${chunkJZLCHNYAParam324} 0,0,0 ${chunkJZLCHNYAParam321},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
async function chunkJZLCHNYAHelper26(
  chunkJZLCHNYAParam45,
  chunkJZLCHNYAParam46,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam46);
  chunkJZLCHNYAParam46.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam45,
      chunkJZLCHNYAParam46,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam46),
    ),
    chunkJZLCHNYAValue335 = Math.max(
      bbox.width + chunkJZLCHNYAParam46.padding,
      chunkJZLCHNYAParam46.width ?? 0,
    ),
    chunkJZLCHNYAValue336 = chunkJZLCHNYAValue335 / 2,
    chunkJZLCHNYAValue337 =
      chunkJZLCHNYAValue336 / (2.5 + chunkJZLCHNYAValue335 / 50),
    chunkJZLCHNYAValue338 = Math.max(
      bbox.height + chunkJZLCHNYAValue337 + chunkJZLCHNYAParam46.padding,
      chunkJZLCHNYAParam46.height ?? 0,
    ),
    chunkJZLCHNYAValue339,
    { cssStyles } = chunkJZLCHNYAParam46;
  if (chunkJZLCHNYAParam46.look === "handDrawn") {
    let chunkJZLCHNYAValue932 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue933 = chunkJZLCHNYAValue14(
        0,
        0,
        chunkJZLCHNYAValue335,
        chunkJZLCHNYAValue338,
        chunkJZLCHNYAValue336,
        chunkJZLCHNYAValue337,
      ),
      chunkJZLCHNYAValue934 = chunkJZLCHNYAValue15(
        0,
        chunkJZLCHNYAValue337,
        chunkJZLCHNYAValue335,
        chunkJZLCHNYAValue338,
        chunkJZLCHNYAValue336,
        chunkJZLCHNYAValue337,
      ),
      chunkJZLCHNYAValue935 = chunkJZLCHNYAValue932.path(
        chunkJZLCHNYAValue933,
        chunkATLVNIR6A(chunkJZLCHNYAParam46, {}),
      ),
      chunkJZLCHNYAValue936 = chunkJZLCHNYAValue932.path(
        chunkJZLCHNYAValue934,
        chunkATLVNIR6A(chunkJZLCHNYAParam46, {
          fill: "none",
        }),
      );
    chunkJZLCHNYAValue339 = shapeSvg.insert(
      () => chunkJZLCHNYAValue936,
      ":first-child",
    );
    chunkJZLCHNYAValue339 = shapeSvg.insert(
      () => chunkJZLCHNYAValue935,
      ":first-child",
    );
    chunkJZLCHNYAValue339.attr("class", "basic label-container");
    cssStyles && chunkJZLCHNYAValue339.attr("style", cssStyles);
  } else {
    let chunkJZLCHNYAValue1024 = chunkJZLCHNYAValue13(
      0,
      0,
      chunkJZLCHNYAValue335,
      chunkJZLCHNYAValue338,
      chunkJZLCHNYAValue336,
      chunkJZLCHNYAValue337,
    );
    chunkJZLCHNYAValue339 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunkJZLCHNYAValue1024)
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles))
      .attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYAValue339.attr("label-offset-y", chunkJZLCHNYAValue337),
    chunkJZLCHNYAValue339.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue335 / 2}, ${-(chunkJZLCHNYAValue338 / 2 + chunkJZLCHNYAValue337)})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam46, chunkJZLCHNYAValue339),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + (chunkJZLCHNYAParam46.padding ?? 0) / 1.5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunkJZLCHNYAParam46.intersect = function (chunkJZLCHNYAParam205) {
      let chunkJZLCHNYAValue854 = chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam46,
          chunkJZLCHNYAParam205,
        ),
        chunkJZLCHNYAValue855 =
          chunkJZLCHNYAValue854.x - (chunkJZLCHNYAParam46.x ?? 0);
      if (
        chunkJZLCHNYAValue336 != 0 &&
        (Math.abs(chunkJZLCHNYAValue855) <
          (chunkJZLCHNYAParam46.width ?? 0) / 2 ||
          (Math.abs(chunkJZLCHNYAValue855) ==
            (chunkJZLCHNYAParam46.width ?? 0) / 2 &&
            Math.abs(chunkJZLCHNYAValue854.y - (chunkJZLCHNYAParam46.y ?? 0)) >
              (chunkJZLCHNYAParam46.height ?? 0) / 2 - chunkJZLCHNYAValue337))
      ) {
        let chunkJZLCHNYAValue1033 =
          chunkJZLCHNYAValue337 *
          chunkJZLCHNYAValue337 *
          (1 -
            (chunkJZLCHNYAValue855 * chunkJZLCHNYAValue855) /
              (chunkJZLCHNYAValue336 * chunkJZLCHNYAValue336));
        chunkJZLCHNYAValue1033 > 0 &&
          (chunkJZLCHNYAValue1033 = Math.sqrt(chunkJZLCHNYAValue1033));
        chunkJZLCHNYAValue1033 = chunkJZLCHNYAValue337 - chunkJZLCHNYAValue1033;
        chunkJZLCHNYAParam205.y - (chunkJZLCHNYAParam46.y ?? 0) > 0 &&
          (chunkJZLCHNYAValue1033 = -chunkJZLCHNYAValue1033);
        chunkJZLCHNYAValue854.y += chunkJZLCHNYAValue1033;
      }
      return chunkJZLCHNYAValue854;
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper26, "cylinder");
async function chunkJZLCHNYAHelper27(
  chunkJZLCHNYAParam87,
  chunkJZLCHNYAParam88,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam88);
  chunkJZLCHNYAParam88.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam87,
      chunkJZLCHNYAParam88,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam88),
    ),
    chunkJZLCHNYAValue518 = bbox.width + chunkJZLCHNYAParam88.padding,
    chunkJZLCHNYAValue519 = bbox.height + chunkJZLCHNYAParam88.padding,
    chunkJZLCHNYAValue520 = chunkJZLCHNYAValue519 * 0.2,
    chunkJZLCHNYAValue521 = -chunkJZLCHNYAValue518 / 2,
    chunkJZLCHNYAValue522 =
      -chunkJZLCHNYAValue519 / 2 - chunkJZLCHNYAValue520 / 2,
    { cssStyles } = chunkJZLCHNYAParam88,
    chunkJZLCHNYAValue523 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue524 = chunkATLVNIR6A(chunkJZLCHNYAParam88, {});
  chunkJZLCHNYAParam88.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue524.roughness = 0),
    (chunkJZLCHNYAValue524.fillStyle = "solid"));
  let chunkJZLCHNYAValue525 = [
      {
        x: chunkJZLCHNYAValue521,
        y: chunkJZLCHNYAValue522 + chunkJZLCHNYAValue520,
      },
      {
        x: -chunkJZLCHNYAValue521,
        y: chunkJZLCHNYAValue522 + chunkJZLCHNYAValue520,
      },
      {
        x: -chunkJZLCHNYAValue521,
        y: -chunkJZLCHNYAValue522,
      },
      {
        x: chunkJZLCHNYAValue521,
        y: -chunkJZLCHNYAValue522,
      },
      {
        x: chunkJZLCHNYAValue521,
        y: chunkJZLCHNYAValue522,
      },
      {
        x: -chunkJZLCHNYAValue521,
        y: chunkJZLCHNYAValue522,
      },
      {
        x: -chunkJZLCHNYAValue521,
        y: chunkJZLCHNYAValue522 + chunkJZLCHNYAValue520,
      },
    ],
    chunkJZLCHNYAValue526 = chunkJZLCHNYAValue523.polygon(
      chunkJZLCHNYAValue525.map((item) => [item.x, item.y]),
      chunkJZLCHNYAValue524,
    ),
    chunkJZLCHNYAValue527 = shapeSvg.insert(
      () => chunkJZLCHNYAValue526,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue527.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam88.look !== "handDrawn" &&
      chunkJZLCHNYAValue527.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam88.look !== "handDrawn" &&
      chunkJZLCHNYAValue527.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${chunkJZLCHNYAValue521 + (chunkJZLCHNYAParam88.padding ?? 0) / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunkJZLCHNYAValue522 + chunkJZLCHNYAValue520 + (chunkJZLCHNYAParam88.padding ?? 0) / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam88, chunkJZLCHNYAValue527),
    (chunkJZLCHNYAParam88.intersect = function (chunkJZLCHNYAParam395) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam88,
        chunkJZLCHNYAParam395,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper27, "dividedRectangle");
async function chunkJZLCHNYAHelper28(
  chunkJZLCHNYAParam70,
  chunkJZLCHNYAParam71,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam71);
  chunkJZLCHNYAParam71.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam70,
      chunkJZLCHNYAParam71,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam71),
    ),
    chunkJZLCHNYAValue439 = bbox.width / 2 + halfPadding + 5,
    chunkJZLCHNYAValue440 = bbox.width / 2 + halfPadding,
    chunkJZLCHNYAValue441,
    { cssStyles } = chunkJZLCHNYAParam71;
  if (chunkJZLCHNYAParam71.look === "handDrawn") {
    let chunkJZLCHNYAValue901 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue902 = chunkATLVNIR6A(chunkJZLCHNYAParam71, {
        roughness: 0.2,
        strokeWidth: 2.5,
      }),
      chunkJZLCHNYAValue903 = chunkATLVNIR6A(chunkJZLCHNYAParam71, {
        roughness: 0.2,
        strokeWidth: 1.5,
      }),
      chunkJZLCHNYAValue904 = chunkJZLCHNYAValue901.circle(
        0,
        0,
        chunkJZLCHNYAValue439 * 2,
        chunkJZLCHNYAValue902,
      ),
      chunkJZLCHNYAValue905 = chunkJZLCHNYAValue901.circle(
        0,
        0,
        chunkJZLCHNYAValue440 * 2,
        chunkJZLCHNYAValue903,
      );
    chunkJZLCHNYAValue441 = shapeSvg.insert("g", ":first-child");
    chunkJZLCHNYAValue441
      .attr("class", chunkS3R3BYOJF(chunkJZLCHNYAParam71.cssClasses))
      .attr("style", chunkS3R3BYOJF(cssStyles));
    chunkJZLCHNYAValue441.node()?.appendChild(chunkJZLCHNYAValue904);
    chunkJZLCHNYAValue441.node()?.appendChild(chunkJZLCHNYAValue905);
  } else {
    chunkJZLCHNYAValue441 = shapeSvg.insert("g", ":first-child");
    let chunkJZLCHNYAValue862 = chunkJZLCHNYAValue441.insert(
        "circle",
        ":first-child",
      ),
      chunkJZLCHNYAValue863 = chunkJZLCHNYAValue441.insert("circle");
    chunkJZLCHNYAValue441
      .attr("class", "basic label-container")
      .attr("style", nodeStyles);
    chunkJZLCHNYAValue862
      .attr("class", "outer-circle")
      .attr("style", nodeStyles)
      .attr("r", chunkJZLCHNYAValue439)
      .attr("cx", 0)
      .attr("cy", 0);
    chunkJZLCHNYAValue863
      .attr("class", "inner-circle")
      .attr("style", nodeStyles)
      .attr("r", chunkJZLCHNYAValue440)
      .attr("cx", 0)
      .attr("cy", 0);
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam71, chunkJZLCHNYAValue441),
    (chunkJZLCHNYAParam71.intersect = function (chunkJZLCHNYAParam315) {
      return (
        chunkAGHRB4JFR.info(
          "DoubleCircle intersect",
          chunkJZLCHNYAParam71,
          chunkJZLCHNYAValue439,
          chunkJZLCHNYAParam315,
        ),
        chunkJZLCHNYAValue12.circle(
          chunkJZLCHNYAParam71,
          chunkJZLCHNYAValue439,
          chunkJZLCHNYAParam315,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper28, "doublecircle");
function chunkJZLCHNYAHelper29(
  chunkJZLCHNYAParam135,
  chunkJZLCHNYAParam136,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam136);
  chunkJZLCHNYAParam136.label = "";
  chunkJZLCHNYAParam136.labelStyle = labelStyles;
  let chunkJZLCHNYAValue685 = chunkJZLCHNYAParam135
      .insert("g")
      .attr("class", chunkJZLCHNYAValue2(chunkJZLCHNYAParam136))
      .attr("id", chunkJZLCHNYAParam136.domId ?? chunkJZLCHNYAParam136.id),
    { cssStyles } = chunkJZLCHNYAParam136,
    chunkJZLCHNYAValue686 = rough.svg(chunkJZLCHNYAValue685),
    { nodeBorder } = themeVariables,
    chunkJZLCHNYAValue687 = chunkATLVNIR6A(chunkJZLCHNYAParam136, {
      fillStyle: "solid",
    });
  chunkJZLCHNYAParam136.look !== "handDrawn" &&
    (chunkJZLCHNYAValue687.roughness = 0);
  let chunkJZLCHNYAValue688 = chunkJZLCHNYAValue686.circle(
      0,
      0,
      14,
      chunkJZLCHNYAValue687,
    ),
    chunkJZLCHNYAValue689 = chunkJZLCHNYAValue685.insert(
      () => chunkJZLCHNYAValue688,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue689
      .selectAll("path")
      .attr("style", `fill: ${nodeBorder} !important;`),
    cssStyles &&
      cssStyles.length > 0 &&
      chunkJZLCHNYAParam136.look !== "handDrawn" &&
      chunkJZLCHNYAValue689.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam136.look !== "handDrawn" &&
      chunkJZLCHNYAValue689.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam136, chunkJZLCHNYAValue689),
    (chunkJZLCHNYAParam136.intersect = function (chunkJZLCHNYAParam302) {
      return (
        chunkAGHRB4JFR.info("filledCircle intersect", chunkJZLCHNYAParam136, {
          radius: 7,
          point: chunkJZLCHNYAParam302,
        }),
        chunkJZLCHNYAValue12.circle(
          chunkJZLCHNYAParam136,
          7,
          chunkJZLCHNYAParam302,
        )
      );
    }),
    chunkJZLCHNYAValue685
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper29, "filledCircle");
async function chunkJZLCHNYAHelper30(
  chunkJZLCHNYAParam105,
  chunkJZLCHNYAParam106,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam106);
  chunkJZLCHNYAParam106.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam105,
      chunkJZLCHNYAParam106,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam106),
    ),
    chunkJZLCHNYAValue588 = bbox.width + (chunkJZLCHNYAParam106.padding ?? 0),
    chunkJZLCHNYAValue589 = chunkJZLCHNYAValue588 + bbox.height,
    chunkJZLCHNYAValue590 = chunkJZLCHNYAValue588 + bbox.height,
    chunkJZLCHNYAValue591 = [
      {
        x: 0,
        y: -chunkJZLCHNYAValue589,
      },
      {
        x: chunkJZLCHNYAValue590,
        y: -chunkJZLCHNYAValue589,
      },
      {
        x: chunkJZLCHNYAValue590 / 2,
        y: 0,
      },
    ],
    { cssStyles } = chunkJZLCHNYAParam106,
    chunkJZLCHNYAValue592 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue593 = chunkATLVNIR6A(chunkJZLCHNYAParam106, {});
  chunkJZLCHNYAParam106.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue593.roughness = 0),
    (chunkJZLCHNYAValue593.fillStyle = "solid"));
  let chunkJZLCHNYAValue594 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue591),
    chunkJZLCHNYAValue595 = chunkJZLCHNYAValue592.path(
      chunkJZLCHNYAValue594,
      chunkJZLCHNYAValue593,
    ),
    chunkJZLCHNYAValue596 = shapeSvg
      .insert(() => chunkJZLCHNYAValue595, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue589 / 2}, ${chunkJZLCHNYAValue589 / 2})`,
      );
  return (
    cssStyles &&
      chunkJZLCHNYAParam106.look !== "handDrawn" &&
      chunkJZLCHNYAValue596.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam106.look !== "handDrawn" &&
      chunkJZLCHNYAValue596.selectChildren("path").attr("style", nodeStyles),
    (chunkJZLCHNYAParam106.width = chunkJZLCHNYAValue588),
    (chunkJZLCHNYAParam106.height = chunkJZLCHNYAValue589),
    chunkJZLCHNYAU(chunkJZLCHNYAParam106, chunkJZLCHNYAValue596),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-chunkJZLCHNYAValue589 / 2 + (chunkJZLCHNYAParam106.padding ?? 0) / 2 + (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunkJZLCHNYAParam106.intersect = function (chunkJZLCHNYAParam317) {
      return (
        chunkAGHRB4JFR.info(
          "Triangle intersect",
          chunkJZLCHNYAParam106,
          chunkJZLCHNYAValue591,
          chunkJZLCHNYAParam317,
        ),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam106,
          chunkJZLCHNYAValue591,
          chunkJZLCHNYAParam317,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper30, "flippedTriangle");
function chunkJZLCHNYAHelper31(
  chunkJZLCHNYAParam120,
  chunkJZLCHNYAParam121,
  { dir, config: { state, themeVariables } },
) {
  let { nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam121);
  chunkJZLCHNYAParam121.label = "";
  let chunkJZLCHNYAValue631 = chunkJZLCHNYAParam120
      .insert("g")
      .attr("class", chunkJZLCHNYAValue2(chunkJZLCHNYAParam121))
      .attr("id", chunkJZLCHNYAParam121.domId ?? chunkJZLCHNYAParam121.id),
    { cssStyles } = chunkJZLCHNYAParam121,
    chunkJZLCHNYAValue632 = Math.max(70, chunkJZLCHNYAParam121?.width ?? 0),
    chunkJZLCHNYAValue633 = Math.max(10, chunkJZLCHNYAParam121?.height ?? 0);
  dir === "LR" &&
    ((chunkJZLCHNYAValue632 = Math.max(10, chunkJZLCHNYAParam121?.width ?? 0)),
    (chunkJZLCHNYAValue633 = Math.max(70, chunkJZLCHNYAParam121?.height ?? 0)));
  let chunkJZLCHNYAValue634 = (-1 * chunkJZLCHNYAValue632) / 2,
    chunkJZLCHNYAValue635 = (-1 * chunkJZLCHNYAValue633) / 2,
    chunkJZLCHNYAValue636 = rough.svg(chunkJZLCHNYAValue631),
    chunkJZLCHNYAValue637 = chunkATLVNIR6A(chunkJZLCHNYAParam121, {
      stroke: themeVariables.lineColor,
      fill: themeVariables.lineColor,
    });
  chunkJZLCHNYAParam121.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue637.roughness = 0),
    (chunkJZLCHNYAValue637.fillStyle = "solid"));
  let chunkJZLCHNYAValue638 = chunkJZLCHNYAValue636.rectangle(
      chunkJZLCHNYAValue634,
      chunkJZLCHNYAValue635,
      chunkJZLCHNYAValue632,
      chunkJZLCHNYAValue633,
      chunkJZLCHNYAValue637,
    ),
    chunkJZLCHNYAValue639 = chunkJZLCHNYAValue631.insert(
      () => chunkJZLCHNYAValue638,
      ":first-child",
    );
  cssStyles &&
    chunkJZLCHNYAParam121.look !== "handDrawn" &&
    chunkJZLCHNYAValue639.selectAll("path").attr("style", cssStyles);
  nodeStyles &&
    chunkJZLCHNYAParam121.look !== "handDrawn" &&
    chunkJZLCHNYAValue639.selectAll("path").attr("style", nodeStyles);
  chunkJZLCHNYAU(chunkJZLCHNYAParam121, chunkJZLCHNYAValue639);
  let chunkJZLCHNYAValue640 = state?.padding ?? 0;
  return (
    chunkJZLCHNYAParam121.width &&
      chunkJZLCHNYAParam121.height &&
      ((chunkJZLCHNYAParam121.width += chunkJZLCHNYAValue640 / 2 || 0),
      (chunkJZLCHNYAParam121.height += chunkJZLCHNYAValue640 / 2 || 0)),
    (chunkJZLCHNYAParam121.intersect = function (chunkJZLCHNYAParam396) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam121,
        chunkJZLCHNYAParam396,
      );
    }),
    chunkJZLCHNYAValue631
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper31, "forkJoin");
async function chunkJZLCHNYAHelper32(
  chunkJZLCHNYAParam107,
  chunkJZLCHNYAParam108,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam108);
  chunkJZLCHNYAParam108.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam107,
      chunkJZLCHNYAParam108,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam108),
    ),
    chunkJZLCHNYAValue597 = Math.max(
      80,
      bbox.width + (chunkJZLCHNYAParam108.padding ?? 0) * 2,
      chunkJZLCHNYAParam108?.width ?? 0,
    ),
    chunkJZLCHNYAValue598 = Math.max(
      50,
      bbox.height + (chunkJZLCHNYAParam108.padding ?? 0) * 2,
      chunkJZLCHNYAParam108?.height ?? 0,
    ),
    chunkJZLCHNYAValue599 = chunkJZLCHNYAValue598 / 2,
    { cssStyles } = chunkJZLCHNYAParam108,
    chunkJZLCHNYAValue600 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue601 = chunkATLVNIR6A(chunkJZLCHNYAParam108, {});
  chunkJZLCHNYAParam108.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue601.roughness = 0),
    (chunkJZLCHNYAValue601.fillStyle = "solid"));
  let chunkJZLCHNYAValue602 = [
      {
        x: -chunkJZLCHNYAValue597 / 2,
        y: -chunkJZLCHNYAValue598 / 2,
      },
      {
        x: chunkJZLCHNYAValue597 / 2 - chunkJZLCHNYAValue599,
        y: -chunkJZLCHNYAValue598 / 2,
      },
      ...chunkJZLCHNYAHelper3(
        -chunkJZLCHNYAValue597 / 2 + chunkJZLCHNYAValue599,
        0,
        chunkJZLCHNYAValue599,
        50,
        90,
        270,
      ),
      {
        x: chunkJZLCHNYAValue597 / 2 - chunkJZLCHNYAValue599,
        y: chunkJZLCHNYAValue598 / 2,
      },
      {
        x: -chunkJZLCHNYAValue597 / 2,
        y: chunkJZLCHNYAValue598 / 2,
      },
    ],
    chunkJZLCHNYAValue603 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue602),
    chunkJZLCHNYAValue604 = chunkJZLCHNYAValue600.path(
      chunkJZLCHNYAValue603,
      chunkJZLCHNYAValue601,
    ),
    chunkJZLCHNYAValue605 = shapeSvg.insert(
      () => chunkJZLCHNYAValue604,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue605.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam108.look !== "handDrawn" &&
      chunkJZLCHNYAValue605.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam108.look !== "handDrawn" &&
      chunkJZLCHNYAValue605.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam108, chunkJZLCHNYAValue605),
    (chunkJZLCHNYAParam108.intersect = function (chunkJZLCHNYAParam303) {
      return (
        chunkAGHRB4JFR.info("Pill intersect", chunkJZLCHNYAParam108, {
          radius: chunkJZLCHNYAValue599,
          point: chunkJZLCHNYAParam303,
        }),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam108,
          chunkJZLCHNYAValue602,
          chunkJZLCHNYAParam303,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper32, "halfRoundedRectangle");
async function chunkJZLCHNYAHelper33(
  chunkJZLCHNYAParam116,
  chunkJZLCHNYAParam117,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam117);
  chunkJZLCHNYAParam117.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam116,
      chunkJZLCHNYAParam117,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam117),
    ),
    chunkJZLCHNYAValue609 = bbox.height + (chunkJZLCHNYAParam117.padding ?? 0),
    chunkJZLCHNYAValue610 =
      bbox.width + (chunkJZLCHNYAParam117.padding ?? 0) * 2.5,
    { cssStyles } = chunkJZLCHNYAParam117,
    chunkJZLCHNYAValue611 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue612 = chunkATLVNIR6A(chunkJZLCHNYAParam117, {});
  chunkJZLCHNYAParam117.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue612.roughness = 0),
    (chunkJZLCHNYAValue612.fillStyle = "solid"));
  let chunkJZLCHNYAValue613 = chunkJZLCHNYAValue610 / 2,
    chunkJZLCHNYAValue614 = chunkJZLCHNYAValue613 / 6;
  chunkJZLCHNYAValue613 += chunkJZLCHNYAValue614;
  let chunkJZLCHNYAValue615 = chunkJZLCHNYAValue609 / 2,
    chunkJZLCHNYAValue616 = chunkJZLCHNYAValue615 / 2,
    chunkJZLCHNYAValue617 = chunkJZLCHNYAValue613 - chunkJZLCHNYAValue616,
    chunkJZLCHNYAValue618 = [
      {
        x: -chunkJZLCHNYAValue617,
        y: -chunkJZLCHNYAValue615,
      },
      {
        x: 0,
        y: -chunkJZLCHNYAValue615,
      },
      {
        x: chunkJZLCHNYAValue617,
        y: -chunkJZLCHNYAValue615,
      },
      {
        x: chunkJZLCHNYAValue613,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue617,
        y: chunkJZLCHNYAValue615,
      },
      {
        x: 0,
        y: chunkJZLCHNYAValue615,
      },
      {
        x: -chunkJZLCHNYAValue617,
        y: chunkJZLCHNYAValue615,
      },
      {
        x: -chunkJZLCHNYAValue613,
        y: 0,
      },
    ],
    chunkJZLCHNYAValue619 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue618),
    chunkJZLCHNYAValue620 = chunkJZLCHNYAValue611.path(
      chunkJZLCHNYAValue619,
      chunkJZLCHNYAValue612,
    ),
    chunkJZLCHNYAValue621 = shapeSvg.insert(
      () => chunkJZLCHNYAValue620,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue621.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam117.look !== "handDrawn" &&
      chunkJZLCHNYAValue621.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam117.look !== "handDrawn" &&
      chunkJZLCHNYAValue621.selectChildren("path").attr("style", nodeStyles),
    (chunkJZLCHNYAParam117.width = chunkJZLCHNYAValue610),
    (chunkJZLCHNYAParam117.height = chunkJZLCHNYAValue609),
    chunkJZLCHNYAU(chunkJZLCHNYAParam117, chunkJZLCHNYAValue621),
    (chunkJZLCHNYAParam117.intersect = function (chunkJZLCHNYAParam356) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam117,
        chunkJZLCHNYAValue618,
        chunkJZLCHNYAParam356,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper33, "hexagon");
async function chunkJZLCHNYAHelper34(
  chunkJZLCHNYAParam130,
  chunkJZLCHNYAParam131,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam131);
  chunkJZLCHNYAParam131.label = "";
  chunkJZLCHNYAParam131.labelStyle = labelStyles;
  let { shapeSvg } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam130,
      chunkJZLCHNYAParam131,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam131),
    ),
    chunkJZLCHNYAValue673 = Math.max(30, chunkJZLCHNYAParam131?.width ?? 0),
    chunkJZLCHNYAValue674 = Math.max(30, chunkJZLCHNYAParam131?.height ?? 0),
    { cssStyles } = chunkJZLCHNYAParam131,
    chunkJZLCHNYAValue675 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue676 = chunkATLVNIR6A(chunkJZLCHNYAParam131, {});
  chunkJZLCHNYAParam131.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue676.roughness = 0),
    (chunkJZLCHNYAValue676.fillStyle = "solid"));
  let chunkJZLCHNYAValue677 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue673,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYAValue674,
      },
      {
        x: chunkJZLCHNYAValue673,
        y: chunkJZLCHNYAValue674,
      },
    ],
    chunkJZLCHNYAValue678 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue677),
    chunkJZLCHNYAValue679 = chunkJZLCHNYAValue675.path(
      chunkJZLCHNYAValue678,
      chunkJZLCHNYAValue676,
    ),
    chunkJZLCHNYAValue680 = shapeSvg.insert(
      () => chunkJZLCHNYAValue679,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue680.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam131.look !== "handDrawn" &&
      chunkJZLCHNYAValue680.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam131.look !== "handDrawn" &&
      chunkJZLCHNYAValue680.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue680.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue673 / 2}, ${-chunkJZLCHNYAValue674 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam131, chunkJZLCHNYAValue680),
    (chunkJZLCHNYAParam131.intersect = function (chunkJZLCHNYAParam312) {
      return (
        chunkAGHRB4JFR.info("Pill intersect", chunkJZLCHNYAParam131, {
          points: chunkJZLCHNYAValue677,
        }),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam131,
          chunkJZLCHNYAValue677,
          chunkJZLCHNYAParam312,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper34, "hourglass");
async function chunkJZLCHNYAHelper35(
  chunkJZLCHNYAParam12,
  chunkJZLCHNYAParam13,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam13);
  chunkJZLCHNYAParam13.labelStyle = labelStyles;
  let chunkJZLCHNYAValue138 = chunkJZLCHNYAParam13.assetHeight ?? 48,
    chunkJZLCHNYAValue139 = chunkJZLCHNYAParam13.assetWidth ?? 48,
    chunkJZLCHNYAValue140 = Math.max(
      chunkJZLCHNYAValue138,
      chunkJZLCHNYAValue139,
    ),
    chunkJZLCHNYAValue141 = flowchart?.wrappingWidth;
  chunkJZLCHNYAParam13.width = Math.max(
    chunkJZLCHNYAValue140,
    chunkJZLCHNYAValue141 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam12,
      chunkJZLCHNYAParam13,
      "icon-shape default",
    ),
    chunkJZLCHNYAValue142 = chunkJZLCHNYAParam13.pos === "t",
    chunkJZLCHNYAValue143 = chunkJZLCHNYAValue140,
    chunkJZLCHNYAValue144 = chunkJZLCHNYAValue140,
    { nodeBorder } = themeVariables,
    { stylesMap: chunkJZLCHNYAValue145 } = chunkATLVNIR6T(chunkJZLCHNYAParam13),
    chunkJZLCHNYAValue146 = -chunkJZLCHNYAValue144 / 2,
    chunkJZLCHNYAValue147 = -chunkJZLCHNYAValue143 / 2,
    chunkJZLCHNYAValue148 = chunkJZLCHNYAParam13.label ? 8 : 0,
    chunkJZLCHNYAValue149 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue150 = chunkATLVNIR6A(chunkJZLCHNYAParam13, {
      stroke: "none",
      fill: "none",
    });
  chunkJZLCHNYAParam13.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue150.roughness = 0),
    (chunkJZLCHNYAValue150.fillStyle = "solid"));
  let chunkJZLCHNYAValue151 = chunkJZLCHNYAValue149.rectangle(
      chunkJZLCHNYAValue146,
      chunkJZLCHNYAValue147,
      chunkJZLCHNYAValue144,
      chunkJZLCHNYAValue143,
      chunkJZLCHNYAValue150,
    ),
    chunkJZLCHNYAValue152 = Math.max(chunkJZLCHNYAValue144, bbox.width),
    chunkJZLCHNYAValue153 =
      chunkJZLCHNYAValue143 + bbox.height + chunkJZLCHNYAValue148,
    chunkJZLCHNYAValue154 = chunkJZLCHNYAValue149.rectangle(
      -chunkJZLCHNYAValue152 / 2,
      -chunkJZLCHNYAValue153 / 2,
      chunkJZLCHNYAValue152,
      chunkJZLCHNYAValue153,
      {
        ...chunkJZLCHNYAValue150,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYAValue155 = shapeSvg.insert(
      () => chunkJZLCHNYAValue151,
      ":first-child",
    ),
    _chunkJZLCHNYAR = shapeSvg.insert(() => chunkJZLCHNYAValue154);
  if (chunkJZLCHNYAParam13.icon) {
    let chunkJZLCHNYAValue868 = shapeSvg.append("g");
    chunkJZLCHNYAValue868.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAParam13.icon, {
        height: chunkJZLCHNYAValue140,
        width: chunkJZLCHNYAValue140,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunkJZLCHNYAValue869 = chunkJZLCHNYAValue868.node().getBBox(),
      chunkJZLCHNYAValue870 = chunkJZLCHNYAValue869.width,
      chunkJZLCHNYAValue871 = chunkJZLCHNYAValue869.height,
      chunkJZLCHNYAValue872 = chunkJZLCHNYAValue869.x,
      chunkJZLCHNYAValue873 = chunkJZLCHNYAValue869.y;
    chunkJZLCHNYAValue868.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue870 / 2 - chunkJZLCHNYAValue872},${chunkJZLCHNYAValue142 ? bbox.height / 2 + chunkJZLCHNYAValue148 / 2 - chunkJZLCHNYAValue871 / 2 - chunkJZLCHNYAValue873 : -bbox.height / 2 - chunkJZLCHNYAValue148 / 2 - chunkJZLCHNYAValue871 / 2 - chunkJZLCHNYAValue873})`,
    );
    chunkJZLCHNYAValue868.attr(
      "style",
      `color: ${chunkJZLCHNYAValue145.get("stroke") ?? nodeBorder};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYAValue142 ? -chunkJZLCHNYAValue153 / 2 : chunkJZLCHNYAValue153 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYAValue155.attr(
      "transform",
      `translate(0,${chunkJZLCHNYAValue142 ? bbox.height / 2 + chunkJZLCHNYAValue148 / 2 : -bbox.height / 2 - chunkJZLCHNYAValue148 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam13, _chunkJZLCHNYAR),
    (chunkJZLCHNYAParam13.intersect = function (chunkJZLCHNYAParam83) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunkJZLCHNYAParam13,
          chunkJZLCHNYAParam83,
        ),
        !chunkJZLCHNYAParam13.label)
      )
        return chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam13,
          chunkJZLCHNYAParam83,
        );
      let chunkJZLCHNYAValue502 = chunkJZLCHNYAParam13.x ?? 0,
        chunkJZLCHNYAValue503 = chunkJZLCHNYAParam13.y ?? 0,
        chunkJZLCHNYAValue504 = chunkJZLCHNYAParam13.height ?? 0,
        chunkJZLCHNYAValue505 = [];
      return (
        (chunkJZLCHNYAValue505 = chunkJZLCHNYAValue142
          ? [
              {
                x: chunkJZLCHNYAValue502 - bbox.width / 2,
                y: chunkJZLCHNYAValue503 - chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 + bbox.width / 2,
                y: chunkJZLCHNYAValue503 - chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue148,
              },
              {
                x: chunkJZLCHNYAValue502 + chunkJZLCHNYAValue144 / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue148,
              },
              {
                x: chunkJZLCHNYAValue502 + chunkJZLCHNYAValue144 / 2,
                y: chunkJZLCHNYAValue503 + chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 - chunkJZLCHNYAValue144 / 2,
                y: chunkJZLCHNYAValue503 + chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 - chunkJZLCHNYAValue144 / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue148,
              },
              {
                x: chunkJZLCHNYAValue502 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue148,
              },
            ]
          : [
              {
                x: chunkJZLCHNYAValue502 - chunkJZLCHNYAValue144 / 2,
                y: chunkJZLCHNYAValue503 - chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 + chunkJZLCHNYAValue144 / 2,
                y: chunkJZLCHNYAValue503 - chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 + chunkJZLCHNYAValue144 / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  chunkJZLCHNYAValue143,
              },
              {
                x: chunkJZLCHNYAValue502 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  chunkJZLCHNYAValue143,
              },
              {
                x: chunkJZLCHNYAValue502 + bbox.width / 2 / 2,
                y: chunkJZLCHNYAValue503 + chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 - bbox.width / 2,
                y: chunkJZLCHNYAValue503 + chunkJZLCHNYAValue504 / 2,
              },
              {
                x: chunkJZLCHNYAValue502 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  chunkJZLCHNYAValue143,
              },
              {
                x: chunkJZLCHNYAValue502 - chunkJZLCHNYAValue144 / 2,
                y:
                  chunkJZLCHNYAValue503 -
                  chunkJZLCHNYAValue504 / 2 +
                  chunkJZLCHNYAValue143,
              },
            ]),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam13,
          chunkJZLCHNYAValue505,
          chunkJZLCHNYAParam83,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper35, "icon");
async function chunkJZLCHNYAHelper36(
  chunkJZLCHNYAParam43,
  chunkJZLCHNYAParam44,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam44);
  chunkJZLCHNYAParam44.labelStyle = labelStyles;
  let chunkJZLCHNYAValue314 = chunkJZLCHNYAParam44.assetHeight ?? 48,
    chunkJZLCHNYAValue315 = chunkJZLCHNYAParam44.assetWidth ?? 48,
    chunkJZLCHNYAValue316 = Math.max(
      chunkJZLCHNYAValue314,
      chunkJZLCHNYAValue315,
    ),
    chunkJZLCHNYAValue317 = flowchart?.wrappingWidth;
  chunkJZLCHNYAParam44.width = Math.max(
    chunkJZLCHNYAValue316,
    chunkJZLCHNYAValue317 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam43,
      chunkJZLCHNYAParam44,
      "icon-shape default",
    ),
    chunkJZLCHNYAValue318 = chunkJZLCHNYAParam44.label ? 8 : 0,
    chunkJZLCHNYAValue319 = chunkJZLCHNYAParam44.pos === "t",
    { nodeBorder, mainBkg } = themeVariables,
    { stylesMap: chunkJZLCHNYAValue320 } = chunkATLVNIR6T(chunkJZLCHNYAParam44),
    chunkJZLCHNYAValue321 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue322 = chunkATLVNIR6A(chunkJZLCHNYAParam44, {});
  chunkJZLCHNYAParam44.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue322.roughness = 0),
    (chunkJZLCHNYAValue322.fillStyle = "solid"));
  chunkJZLCHNYAValue322.stroke = chunkJZLCHNYAValue320.get("fill") ?? mainBkg;
  let chunkJZLCHNYAValue323 = shapeSvg.append("g");
  chunkJZLCHNYAParam44.icon &&
    chunkJZLCHNYAValue323.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAParam44.icon, {
        height: chunkJZLCHNYAValue316,
        width: chunkJZLCHNYAValue316,
        fallbackPrefix: "",
      })}</g>`,
    );
  let chunkJZLCHNYAValue324 = chunkJZLCHNYAValue323.node().getBBox(),
    chunkJZLCHNYAValue325 = chunkJZLCHNYAValue324.width,
    chunkJZLCHNYAValue326 = chunkJZLCHNYAValue324.height,
    chunkJZLCHNYAValue327 = chunkJZLCHNYAValue324.x,
    chunkJZLCHNYAValue328 = chunkJZLCHNYAValue324.y,
    chunkJZLCHNYAValue329 =
      Math.max(chunkJZLCHNYAValue325, chunkJZLCHNYAValue326) * Math.SQRT2 + 40,
    chunkJZLCHNYAValue330 = chunkJZLCHNYAValue321.circle(
      0,
      0,
      chunkJZLCHNYAValue329,
      chunkJZLCHNYAValue322,
    ),
    _chunkJZLCHNYAR = Math.max(chunkJZLCHNYAValue329, bbox.width),
    chunkJZLCHNYAValue331 =
      chunkJZLCHNYAValue329 + bbox.height + chunkJZLCHNYAValue318,
    chunkJZLCHNYAValue332 = chunkJZLCHNYAValue321.rectangle(
      -_chunkJZLCHNYAR / 2,
      -chunkJZLCHNYAValue331 / 2,
      _chunkJZLCHNYAR,
      chunkJZLCHNYAValue331,
      {
        ...chunkJZLCHNYAValue322,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYAValue333 = shapeSvg.insert(
      () => chunkJZLCHNYAValue330,
      ":first-child",
    ),
    chunkJZLCHNYAValue334 = shapeSvg.insert(() => chunkJZLCHNYAValue332);
  return (
    chunkJZLCHNYAValue323.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue325 / 2 - chunkJZLCHNYAValue327},${chunkJZLCHNYAValue319 ? bbox.height / 2 + chunkJZLCHNYAValue318 / 2 - chunkJZLCHNYAValue326 / 2 - chunkJZLCHNYAValue328 : -bbox.height / 2 - chunkJZLCHNYAValue318 / 2 - chunkJZLCHNYAValue326 / 2 - chunkJZLCHNYAValue328})`,
    ),
    chunkJZLCHNYAValue323.attr(
      "style",
      `color: ${chunkJZLCHNYAValue320.get("stroke") ?? nodeBorder};`,
    ),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYAValue319 ? -chunkJZLCHNYAValue331 / 2 : chunkJZLCHNYAValue331 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYAValue333.attr(
      "transform",
      `translate(0,${chunkJZLCHNYAValue319 ? bbox.height / 2 + chunkJZLCHNYAValue318 / 2 : -bbox.height / 2 - chunkJZLCHNYAValue318 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam44, chunkJZLCHNYAValue334),
    (chunkJZLCHNYAParam44.intersect = function (chunkJZLCHNYAParam341) {
      return (
        chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunkJZLCHNYAParam44,
          chunkJZLCHNYAParam341,
        ),
        chunkJZLCHNYAValue12.rect(chunkJZLCHNYAParam44, chunkJZLCHNYAParam341)
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper36, "iconCircle");
async function chunkJZLCHNYAHelper37(
  chunkJZLCHNYAParam7,
  chunkJZLCHNYAParam8,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam8);
  chunkJZLCHNYAParam8.labelStyle = labelStyles;
  let chunkJZLCHNYAValue88 = chunkJZLCHNYAParam8.assetHeight ?? 48,
    chunkJZLCHNYAValue89 = chunkJZLCHNYAParam8.assetWidth ?? 48,
    chunkJZLCHNYAValue90 = Math.max(chunkJZLCHNYAValue88, chunkJZLCHNYAValue89),
    chunkJZLCHNYAValue91 = flowchart?.wrappingWidth;
  chunkJZLCHNYAParam8.width = Math.max(
    chunkJZLCHNYAValue90,
    chunkJZLCHNYAValue91 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam7,
      chunkJZLCHNYAParam8,
      "icon-shape default",
    ),
    chunkJZLCHNYAValue92 = chunkJZLCHNYAParam8.pos === "t",
    chunkJZLCHNYAValue93 = chunkJZLCHNYAValue90 + halfPadding * 2,
    chunkJZLCHNYAValue94 = chunkJZLCHNYAValue90 + halfPadding * 2,
    { nodeBorder: chunkJZLCHNYAValue95, mainBkg } = themeVariables,
    { stylesMap } = chunkATLVNIR6T(chunkJZLCHNYAParam8),
    chunkJZLCHNYAValue96 = -chunkJZLCHNYAValue94 / 2,
    chunkJZLCHNYAValue97 = -chunkJZLCHNYAValue93 / 2,
    chunkJZLCHNYAValue98 = chunkJZLCHNYAParam8.label ? 8 : 0,
    chunkJZLCHNYAValue99 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue100 = chunkATLVNIR6A(chunkJZLCHNYAParam8, {});
  chunkJZLCHNYAParam8.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue100.roughness = 0),
    (chunkJZLCHNYAValue100.fillStyle = "solid"));
  chunkJZLCHNYAValue100.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunkJZLCHNYAValue101 = chunkJZLCHNYAValue99.path(
      chunkJZLCHNYAValue4(
        chunkJZLCHNYAValue96,
        chunkJZLCHNYAValue97,
        chunkJZLCHNYAValue94,
        chunkJZLCHNYAValue93,
        5,
      ),
      chunkJZLCHNYAValue100,
    ),
    chunkJZLCHNYAValue102 = Math.max(chunkJZLCHNYAValue94, bbox.width),
    chunkJZLCHNYAValue103 =
      chunkJZLCHNYAValue93 + bbox.height + chunkJZLCHNYAValue98,
    _chunkJZLCHNYAR = chunkJZLCHNYAValue99.rectangle(
      -chunkJZLCHNYAValue102 / 2,
      -chunkJZLCHNYAValue103 / 2,
      chunkJZLCHNYAValue102,
      chunkJZLCHNYAValue103,
      {
        ...chunkJZLCHNYAValue100,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYAValue104 = shapeSvg
      .insert(() => chunkJZLCHNYAValue101, ":first-child")
      .attr("class", "icon-shape2"),
    chunkJZLCHNYAValue105 = shapeSvg.insert(() => _chunkJZLCHNYAR);
  if (chunkJZLCHNYAParam8.icon) {
    let chunkJZLCHNYAValue874 = shapeSvg.append("g");
    chunkJZLCHNYAValue874.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAParam8.icon, {
        height: chunkJZLCHNYAValue90,
        width: chunkJZLCHNYAValue90,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunkJZLCHNYAValue875 = chunkJZLCHNYAValue874.node().getBBox(),
      chunkJZLCHNYAValue876 = chunkJZLCHNYAValue875.width,
      chunkJZLCHNYAValue877 = chunkJZLCHNYAValue875.height,
      chunkJZLCHNYAValue878 = chunkJZLCHNYAValue875.x,
      chunkJZLCHNYAValue879 = chunkJZLCHNYAValue875.y;
    chunkJZLCHNYAValue874.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue876 / 2 - chunkJZLCHNYAValue878},${chunkJZLCHNYAValue92 ? bbox.height / 2 + chunkJZLCHNYAValue98 / 2 - chunkJZLCHNYAValue877 / 2 - chunkJZLCHNYAValue879 : -bbox.height / 2 - chunkJZLCHNYAValue98 / 2 - chunkJZLCHNYAValue877 / 2 - chunkJZLCHNYAValue879})`,
    );
    chunkJZLCHNYAValue874.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? chunkJZLCHNYAValue95};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYAValue92 ? -chunkJZLCHNYAValue103 / 2 : chunkJZLCHNYAValue103 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYAValue104.attr(
      "transform",
      `translate(0,${chunkJZLCHNYAValue92 ? bbox.height / 2 + chunkJZLCHNYAValue98 / 2 : -bbox.height / 2 - chunkJZLCHNYAValue98 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam8, chunkJZLCHNYAValue105),
    (chunkJZLCHNYAParam8.intersect = function (chunkJZLCHNYAParam84) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunkJZLCHNYAParam8,
          chunkJZLCHNYAParam84,
        ),
        !chunkJZLCHNYAParam8.label)
      )
        return chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam8,
          chunkJZLCHNYAParam84,
        );
      let chunkJZLCHNYAValue506 = chunkJZLCHNYAParam8.x ?? 0,
        chunkJZLCHNYAValue507 = chunkJZLCHNYAParam8.y ?? 0,
        chunkJZLCHNYAValue508 = chunkJZLCHNYAParam8.height ?? 0,
        chunkJZLCHNYAValue509 = [];
      return (
        (chunkJZLCHNYAValue509 = chunkJZLCHNYAValue92
          ? [
              {
                x: chunkJZLCHNYAValue506 - bbox.width / 2,
                y: chunkJZLCHNYAValue507 - chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 + bbox.width / 2,
                y: chunkJZLCHNYAValue507 - chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue98,
              },
              {
                x: chunkJZLCHNYAValue506 + chunkJZLCHNYAValue94 / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue98,
              },
              {
                x: chunkJZLCHNYAValue506 + chunkJZLCHNYAValue94 / 2,
                y: chunkJZLCHNYAValue507 + chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 - chunkJZLCHNYAValue94 / 2,
                y: chunkJZLCHNYAValue507 + chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 - chunkJZLCHNYAValue94 / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue98,
              },
              {
                x: chunkJZLCHNYAValue506 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue98,
              },
            ]
          : [
              {
                x: chunkJZLCHNYAValue506 - chunkJZLCHNYAValue94 / 2,
                y: chunkJZLCHNYAValue507 - chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 + chunkJZLCHNYAValue94 / 2,
                y: chunkJZLCHNYAValue507 - chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 + chunkJZLCHNYAValue94 / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  chunkJZLCHNYAValue93,
              },
              {
                x: chunkJZLCHNYAValue506 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  chunkJZLCHNYAValue93,
              },
              {
                x: chunkJZLCHNYAValue506 + bbox.width / 2 / 2,
                y: chunkJZLCHNYAValue507 + chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 - bbox.width / 2,
                y: chunkJZLCHNYAValue507 + chunkJZLCHNYAValue508 / 2,
              },
              {
                x: chunkJZLCHNYAValue506 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  chunkJZLCHNYAValue93,
              },
              {
                x: chunkJZLCHNYAValue506 - chunkJZLCHNYAValue94 / 2,
                y:
                  chunkJZLCHNYAValue507 -
                  chunkJZLCHNYAValue508 / 2 +
                  chunkJZLCHNYAValue93,
              },
            ]),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam8,
          chunkJZLCHNYAValue509,
          chunkJZLCHNYAParam84,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper37, "iconRounded");
async function chunkJZLCHNYAHelper38(
  chunkJZLCHNYAParam9,
  chunkJZLCHNYAParam10,
  { config: { themeVariables, flowchart } },
) {
  let { labelStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam10);
  chunkJZLCHNYAParam10.labelStyle = labelStyles;
  let chunkJZLCHNYAValue106 = chunkJZLCHNYAParam10.assetHeight ?? 48,
    chunkJZLCHNYAValue107 = chunkJZLCHNYAParam10.assetWidth ?? 48,
    chunkJZLCHNYAValue108 = Math.max(
      chunkJZLCHNYAValue106,
      chunkJZLCHNYAValue107,
    ),
    chunkJZLCHNYAValue109 = flowchart?.wrappingWidth;
  chunkJZLCHNYAParam10.width = Math.max(
    chunkJZLCHNYAValue108,
    chunkJZLCHNYAValue109 ?? 0,
  );
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam9,
      chunkJZLCHNYAParam10,
      "icon-shape default",
    ),
    chunkJZLCHNYAValue110 = chunkJZLCHNYAParam10.pos === "t",
    chunkJZLCHNYAValue111 = chunkJZLCHNYAValue108 + halfPadding * 2,
    chunkJZLCHNYAValue112 = chunkJZLCHNYAValue108 + halfPadding * 2,
    { nodeBorder: chunkJZLCHNYAValue113, mainBkg } = themeVariables,
    { stylesMap } = chunkATLVNIR6T(chunkJZLCHNYAParam10),
    chunkJZLCHNYAValue114 = -chunkJZLCHNYAValue112 / 2,
    chunkJZLCHNYAValue115 = -chunkJZLCHNYAValue111 / 2,
    chunkJZLCHNYAValue116 = chunkJZLCHNYAParam10.label ? 8 : 0,
    chunkJZLCHNYAValue117 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue118 = chunkATLVNIR6A(chunkJZLCHNYAParam10, {});
  chunkJZLCHNYAParam10.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue118.roughness = 0),
    (chunkJZLCHNYAValue118.fillStyle = "solid"));
  chunkJZLCHNYAValue118.stroke = stylesMap.get("fill") ?? mainBkg;
  let chunkJZLCHNYAValue119 = chunkJZLCHNYAValue117.path(
      chunkJZLCHNYAValue4(
        chunkJZLCHNYAValue114,
        chunkJZLCHNYAValue115,
        chunkJZLCHNYAValue112,
        chunkJZLCHNYAValue111,
        0.1,
      ),
      chunkJZLCHNYAValue118,
    ),
    chunkJZLCHNYAValue120 = Math.max(chunkJZLCHNYAValue112, bbox.width),
    chunkJZLCHNYAValue121 =
      chunkJZLCHNYAValue111 + bbox.height + chunkJZLCHNYAValue116,
    _chunkJZLCHNYAR = chunkJZLCHNYAValue117.rectangle(
      -chunkJZLCHNYAValue120 / 2,
      -chunkJZLCHNYAValue121 / 2,
      chunkJZLCHNYAValue120,
      chunkJZLCHNYAValue121,
      {
        ...chunkJZLCHNYAValue118,
        fill: "transparent",
        stroke: "none",
      },
    ),
    chunkJZLCHNYAValue122 = shapeSvg.insert(
      () => chunkJZLCHNYAValue119,
      ":first-child",
    ),
    chunkJZLCHNYAValue123 = shapeSvg.insert(() => _chunkJZLCHNYAR);
  if (chunkJZLCHNYAParam10.icon) {
    let chunkJZLCHNYAValue880 = shapeSvg.append("g");
    chunkJZLCHNYAValue880.html(
      `<g>${await chunkJA3XYJ7ZR(chunkJZLCHNYAParam10.icon, {
        height: chunkJZLCHNYAValue108,
        width: chunkJZLCHNYAValue108,
        fallbackPrefix: "",
      })}</g>`,
    );
    let chunkJZLCHNYAValue881 = chunkJZLCHNYAValue880.node().getBBox(),
      chunkJZLCHNYAValue882 = chunkJZLCHNYAValue881.width,
      chunkJZLCHNYAValue883 = chunkJZLCHNYAValue881.height,
      chunkJZLCHNYAValue884 = chunkJZLCHNYAValue881.x,
      chunkJZLCHNYAValue885 = chunkJZLCHNYAValue881.y;
    chunkJZLCHNYAValue880.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue882 / 2 - chunkJZLCHNYAValue884},${chunkJZLCHNYAValue110 ? bbox.height / 2 + chunkJZLCHNYAValue116 / 2 - chunkJZLCHNYAValue883 / 2 - chunkJZLCHNYAValue885 : -bbox.height / 2 - chunkJZLCHNYAValue116 / 2 - chunkJZLCHNYAValue883 / 2 - chunkJZLCHNYAValue885})`,
    );
    chunkJZLCHNYAValue880.attr(
      "style",
      `color: ${stylesMap.get("stroke") ?? chunkJZLCHNYAValue113};`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYAValue110 ? -chunkJZLCHNYAValue121 / 2 : chunkJZLCHNYAValue121 / 2 - bbox.height})`,
    ),
    chunkJZLCHNYAValue122.attr(
      "transform",
      `translate(0,${chunkJZLCHNYAValue110 ? bbox.height / 2 + chunkJZLCHNYAValue116 / 2 : -bbox.height / 2 - chunkJZLCHNYAValue116 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam10, chunkJZLCHNYAValue123),
    (chunkJZLCHNYAParam10.intersect = function (chunkJZLCHNYAParam85) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunkJZLCHNYAParam10,
          chunkJZLCHNYAParam85,
        ),
        !chunkJZLCHNYAParam10.label)
      )
        return chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam10,
          chunkJZLCHNYAParam85,
        );
      let chunkJZLCHNYAValue510 = chunkJZLCHNYAParam10.x ?? 0,
        chunkJZLCHNYAValue511 = chunkJZLCHNYAParam10.y ?? 0,
        chunkJZLCHNYAValue512 = chunkJZLCHNYAParam10.height ?? 0,
        chunkJZLCHNYAValue513 = [];
      return (
        (chunkJZLCHNYAValue513 = chunkJZLCHNYAValue110
          ? [
              {
                x: chunkJZLCHNYAValue510 - bbox.width / 2,
                y: chunkJZLCHNYAValue511 - chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 + bbox.width / 2,
                y: chunkJZLCHNYAValue511 - chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue116,
              },
              {
                x: chunkJZLCHNYAValue510 + chunkJZLCHNYAValue112 / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue116,
              },
              {
                x: chunkJZLCHNYAValue510 + chunkJZLCHNYAValue112 / 2,
                y: chunkJZLCHNYAValue511 + chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 - chunkJZLCHNYAValue112 / 2,
                y: chunkJZLCHNYAValue511 + chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 - chunkJZLCHNYAValue112 / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue116,
              },
              {
                x: chunkJZLCHNYAValue510 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue116,
              },
            ]
          : [
              {
                x: chunkJZLCHNYAValue510 - chunkJZLCHNYAValue112 / 2,
                y: chunkJZLCHNYAValue511 - chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 + chunkJZLCHNYAValue112 / 2,
                y: chunkJZLCHNYAValue511 - chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 + chunkJZLCHNYAValue112 / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  chunkJZLCHNYAValue111,
              },
              {
                x: chunkJZLCHNYAValue510 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  chunkJZLCHNYAValue111,
              },
              {
                x: chunkJZLCHNYAValue510 + bbox.width / 2 / 2,
                y: chunkJZLCHNYAValue511 + chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 - bbox.width / 2,
                y: chunkJZLCHNYAValue511 + chunkJZLCHNYAValue512 / 2,
              },
              {
                x: chunkJZLCHNYAValue510 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  chunkJZLCHNYAValue111,
              },
              {
                x: chunkJZLCHNYAValue510 - chunkJZLCHNYAValue112 / 2,
                y:
                  chunkJZLCHNYAValue511 -
                  chunkJZLCHNYAValue512 / 2 +
                  chunkJZLCHNYAValue111,
              },
            ]),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam10,
          chunkJZLCHNYAValue513,
          chunkJZLCHNYAParam85,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper38, "iconSquare");
async function chunkJZLCHNYAHelper39(
  chunkJZLCHNYAParam5,
  chunkJZLCHNYAParam6,
  { config: { flowchart } },
) {
  let chunkJZLCHNYAValue69 = new Image();
  chunkJZLCHNYAValue69.src = chunkJZLCHNYAParam6?.img ?? "";
  await chunkJZLCHNYAValue69.decode();
  let chunkJZLCHNYAValue70 = Number(
      chunkJZLCHNYAValue69.naturalWidth.toString().replace("px", ""),
    ),
    chunkJZLCHNYAValue71 = Number(
      chunkJZLCHNYAValue69.naturalHeight.toString().replace("px", ""),
    );
  chunkJZLCHNYAParam6.imageAspectRatio =
    chunkJZLCHNYAValue70 / chunkJZLCHNYAValue71;
  let { labelStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam6);
  chunkJZLCHNYAParam6.labelStyle = labelStyles;
  let chunkJZLCHNYAValue72 = flowchart?.wrappingWidth;
  chunkJZLCHNYAParam6.defaultWidth = flowchart?.wrappingWidth;
  let chunkJZLCHNYAValue73 = Math.max(
      chunkJZLCHNYAParam6.label ? (chunkJZLCHNYAValue72 ?? 0) : 0,
      chunkJZLCHNYAParam6?.assetWidth ?? chunkJZLCHNYAValue70,
    ),
    chunkJZLCHNYAValue74 =
      chunkJZLCHNYAParam6.constraint === "on" &&
      chunkJZLCHNYAParam6?.assetHeight
        ? chunkJZLCHNYAParam6.assetHeight * chunkJZLCHNYAParam6.imageAspectRatio
        : chunkJZLCHNYAValue73,
    chunkJZLCHNYAValue75 =
      chunkJZLCHNYAParam6.constraint === "on"
        ? chunkJZLCHNYAValue74 / chunkJZLCHNYAParam6.imageAspectRatio
        : (chunkJZLCHNYAParam6?.assetHeight ?? chunkJZLCHNYAValue71);
  chunkJZLCHNYAParam6.width = Math.max(
    chunkJZLCHNYAValue74,
    chunkJZLCHNYAValue72 ?? 0,
  );
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam5,
      chunkJZLCHNYAParam6,
      "image-shape default",
    ),
    chunkJZLCHNYAValue76 = chunkJZLCHNYAParam6.pos === "t",
    chunkJZLCHNYAValue77 = -chunkJZLCHNYAValue74 / 2,
    chunkJZLCHNYAValue78 = -chunkJZLCHNYAValue75 / 2,
    chunkJZLCHNYAValue79 = chunkJZLCHNYAParam6.label ? 8 : 0,
    chunkJZLCHNYAValue80 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue81 = chunkATLVNIR6A(chunkJZLCHNYAParam6, {});
  chunkJZLCHNYAParam6.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue81.roughness = 0),
    (chunkJZLCHNYAValue81.fillStyle = "solid"));
  let chunkJZLCHNYAValue82 = chunkJZLCHNYAValue80.rectangle(
      chunkJZLCHNYAValue77,
      chunkJZLCHNYAValue78,
      chunkJZLCHNYAValue74,
      chunkJZLCHNYAValue75,
      chunkJZLCHNYAValue81,
    ),
    chunkJZLCHNYAValue83 = Math.max(chunkJZLCHNYAValue74, bbox.width),
    chunkJZLCHNYAValue84 =
      chunkJZLCHNYAValue75 + bbox.height + chunkJZLCHNYAValue79,
    chunkJZLCHNYAValue85 = chunkJZLCHNYAValue80.rectangle(
      -chunkJZLCHNYAValue83 / 2,
      -chunkJZLCHNYAValue84 / 2,
      chunkJZLCHNYAValue83,
      chunkJZLCHNYAValue84,
      {
        ...chunkJZLCHNYAValue81,
        fill: "none",
        stroke: "none",
      },
    ),
    chunkJZLCHNYAValue86 = shapeSvg.insert(
      () => chunkJZLCHNYAValue82,
      ":first-child",
    ),
    chunkJZLCHNYAValue87 = shapeSvg.insert(() => chunkJZLCHNYAValue85);
  if (chunkJZLCHNYAParam6.img) {
    let chunkJZLCHNYAValue1000 = shapeSvg.append("image");
    chunkJZLCHNYAValue1000.attr("href", chunkJZLCHNYAParam6.img);
    chunkJZLCHNYAValue1000.attr("width", chunkJZLCHNYAValue74);
    chunkJZLCHNYAValue1000.attr("height", chunkJZLCHNYAValue75);
    chunkJZLCHNYAValue1000.attr("preserveAspectRatio", "none");
    chunkJZLCHNYAValue1000.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue74 / 2},${chunkJZLCHNYAValue76 ? chunkJZLCHNYAValue84 / 2 - chunkJZLCHNYAValue75 : -chunkJZLCHNYAValue84 / 2})`,
    );
  }
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))},${chunkJZLCHNYAValue76 ? -chunkJZLCHNYAValue75 / 2 - bbox.height / 2 - chunkJZLCHNYAValue79 / 2 : chunkJZLCHNYAValue75 / 2 - bbox.height / 2 + chunkJZLCHNYAValue79 / 2})`,
    ),
    chunkJZLCHNYAValue86.attr(
      "transform",
      `translate(0,${chunkJZLCHNYAValue76 ? bbox.height / 2 + chunkJZLCHNYAValue79 / 2 : -bbox.height / 2 - chunkJZLCHNYAValue79 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam6, chunkJZLCHNYAValue87),
    (chunkJZLCHNYAParam6.intersect = function (chunkJZLCHNYAParam86) {
      if (
        (chunkAGHRB4JFR.info(
          "iconSquare intersect",
          chunkJZLCHNYAParam6,
          chunkJZLCHNYAParam86,
        ),
        !chunkJZLCHNYAParam6.label)
      )
        return chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam6,
          chunkJZLCHNYAParam86,
        );
      let chunkJZLCHNYAValue514 = chunkJZLCHNYAParam6.x ?? 0,
        chunkJZLCHNYAValue515 = chunkJZLCHNYAParam6.y ?? 0,
        chunkJZLCHNYAValue516 = chunkJZLCHNYAParam6.height ?? 0,
        chunkJZLCHNYAValue517 = [];
      return (
        (chunkJZLCHNYAValue517 = chunkJZLCHNYAValue76
          ? [
              {
                x: chunkJZLCHNYAValue514 - bbox.width / 2,
                y: chunkJZLCHNYAValue515 - chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 + bbox.width / 2,
                y: chunkJZLCHNYAValue515 - chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue79,
              },
              {
                x: chunkJZLCHNYAValue514 + chunkJZLCHNYAValue74 / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue79,
              },
              {
                x: chunkJZLCHNYAValue514 + chunkJZLCHNYAValue74 / 2,
                y: chunkJZLCHNYAValue515 + chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 - chunkJZLCHNYAValue74 / 2,
                y: chunkJZLCHNYAValue515 + chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 - chunkJZLCHNYAValue74 / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue79,
              },
              {
                x: chunkJZLCHNYAValue514 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  bbox.height +
                  chunkJZLCHNYAValue79,
              },
            ]
          : [
              {
                x: chunkJZLCHNYAValue514 - chunkJZLCHNYAValue74 / 2,
                y: chunkJZLCHNYAValue515 - chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 + chunkJZLCHNYAValue74 / 2,
                y: chunkJZLCHNYAValue515 - chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 + chunkJZLCHNYAValue74 / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  chunkJZLCHNYAValue75,
              },
              {
                x: chunkJZLCHNYAValue514 + bbox.width / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  chunkJZLCHNYAValue75,
              },
              {
                x: chunkJZLCHNYAValue514 + bbox.width / 2 / 2,
                y: chunkJZLCHNYAValue515 + chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 - bbox.width / 2,
                y: chunkJZLCHNYAValue515 + chunkJZLCHNYAValue516 / 2,
              },
              {
                x: chunkJZLCHNYAValue514 - bbox.width / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  chunkJZLCHNYAValue75,
              },
              {
                x: chunkJZLCHNYAValue514 - chunkJZLCHNYAValue74 / 2,
                y:
                  chunkJZLCHNYAValue515 -
                  chunkJZLCHNYAValue516 / 2 +
                  chunkJZLCHNYAValue75,
              },
            ]),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam6,
          chunkJZLCHNYAValue517,
          chunkJZLCHNYAParam86,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper39, "imageSquare");
async function chunkJZLCHNYAHelper40(
  chunkJZLCHNYAParam137,
  chunkJZLCHNYAParam138,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam138);
  chunkJZLCHNYAParam138.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam137,
      chunkJZLCHNYAParam138,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam138),
    ),
    chunkJZLCHNYAValue690 = Math.max(
      bbox.width + (chunkJZLCHNYAParam138.padding ?? 0) * 2,
      chunkJZLCHNYAParam138?.width ?? 0,
    ),
    chunkJZLCHNYAValue691 = Math.max(
      bbox.height + (chunkJZLCHNYAParam138.padding ?? 0) * 2,
      chunkJZLCHNYAParam138?.height ?? 0,
    ),
    chunkJZLCHNYAValue692 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue690,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue690 + (3 * chunkJZLCHNYAValue691) / 6,
        y: -chunkJZLCHNYAValue691,
      },
      {
        x: (-3 * chunkJZLCHNYAValue691) / 6,
        y: -chunkJZLCHNYAValue691,
      },
    ],
    chunkJZLCHNYAValue693,
    { cssStyles } = chunkJZLCHNYAParam138;
  if (chunkJZLCHNYAParam138.look === "handDrawn") {
    let chunkJZLCHNYAValue1006 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1007 = chunkATLVNIR6A(chunkJZLCHNYAParam138, {}),
      chunkJZLCHNYAValue1008 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue692),
      chunkJZLCHNYAValue1009 = chunkJZLCHNYAValue1006.path(
        chunkJZLCHNYAValue1008,
        chunkJZLCHNYAValue1007,
      );
    chunkJZLCHNYAValue693 = shapeSvg
      .insert(() => chunkJZLCHNYAValue1009, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue690 / 2}, ${chunkJZLCHNYAValue691 / 2})`,
      );
    cssStyles && chunkJZLCHNYAValue693.attr("style", cssStyles);
  } else
    chunkJZLCHNYAValue693 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue690,
      chunkJZLCHNYAValue691,
      chunkJZLCHNYAValue692,
    );
  return (
    nodeStyles && chunkJZLCHNYAValue693.attr("style", nodeStyles),
    (chunkJZLCHNYAParam138.width = chunkJZLCHNYAValue690),
    (chunkJZLCHNYAParam138.height = chunkJZLCHNYAValue691),
    chunkJZLCHNYAU(chunkJZLCHNYAParam138, chunkJZLCHNYAValue693),
    (chunkJZLCHNYAParam138.intersect = function (chunkJZLCHNYAParam357) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam138,
        chunkJZLCHNYAValue692,
        chunkJZLCHNYAParam357,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper40, "inv_trapezoid");
async function chunkJZLCHNYAHelper41(
  chunkJZLCHNYAParam93,
  chunkJZLCHNYAParam94,
  chunkJZLCHNYAParam95,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam94);
  chunkJZLCHNYAParam94.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam93,
      chunkJZLCHNYAParam94,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam94),
    ),
    chunkJZLCHNYAValue551 = Math.max(
      bbox.width + chunkJZLCHNYAParam95.labelPaddingX * 2,
      chunkJZLCHNYAParam94?.width || 0,
    ),
    chunkJZLCHNYAValue552 = Math.max(
      bbox.height + chunkJZLCHNYAParam95.labelPaddingY * 2,
      chunkJZLCHNYAParam94?.height || 0,
    ),
    chunkJZLCHNYAValue553 = -chunkJZLCHNYAValue551 / 2,
    chunkJZLCHNYAValue554 = -chunkJZLCHNYAValue552 / 2,
    chunkJZLCHNYAValue555,
    { rx, ry } = chunkJZLCHNYAParam94,
    { cssStyles } = chunkJZLCHNYAParam94;
  if (
    (chunkJZLCHNYAParam95?.rx &&
      chunkJZLCHNYAParam95.ry &&
      ((rx = chunkJZLCHNYAParam95.rx), (ry = chunkJZLCHNYAParam95.ry)),
    chunkJZLCHNYAParam94.look === "handDrawn")
  ) {
    let chunkJZLCHNYAValue992 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue993 = chunkATLVNIR6A(chunkJZLCHNYAParam94, {}),
      chunkJZLCHNYAValue994 =
        rx || ry
          ? chunkJZLCHNYAValue992.path(
              chunkJZLCHNYAValue4(
                chunkJZLCHNYAValue553,
                chunkJZLCHNYAValue554,
                chunkJZLCHNYAValue551,
                chunkJZLCHNYAValue552,
                rx || 0,
              ),
              chunkJZLCHNYAValue993,
            )
          : chunkJZLCHNYAValue992.rectangle(
              chunkJZLCHNYAValue553,
              chunkJZLCHNYAValue554,
              chunkJZLCHNYAValue551,
              chunkJZLCHNYAValue552,
              chunkJZLCHNYAValue993,
            );
    chunkJZLCHNYAValue555 = shapeSvg.insert(
      () => chunkJZLCHNYAValue994,
      ":first-child",
    );
    chunkJZLCHNYAValue555
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles));
  } else {
    chunkJZLCHNYAValue555 = shapeSvg.insert("rect", ":first-child");
    chunkJZLCHNYAValue555
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("rx", chunkS3R3BYOJF(rx))
      .attr("ry", chunkS3R3BYOJF(ry))
      .attr("x", chunkJZLCHNYAValue553)
      .attr("y", chunkJZLCHNYAValue554)
      .attr("width", chunkJZLCHNYAValue551)
      .attr("height", chunkJZLCHNYAValue552);
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam94, chunkJZLCHNYAValue555),
    (chunkJZLCHNYAParam94.calcIntersect = function (
      chunkJZLCHNYAParam381,
      chunkJZLCHNYAParam382,
    ) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam381,
        chunkJZLCHNYAParam382,
      );
    }),
    (chunkJZLCHNYAParam94.intersect = function (chunkJZLCHNYAParam397) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam94,
        chunkJZLCHNYAParam397,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper41, "drawRect");
async function chunkJZLCHNYAHelper42(
  chunkJZLCHNYAParam207,
  chunkJZLCHNYAParam208,
) {
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam207,
      chunkJZLCHNYAParam208,
      "label",
    ),
    chunkJZLCHNYAValue864 = shapeSvg.insert("rect", ":first-child");
  return (
    chunkJZLCHNYAValue864.attr("width", 0.1).attr("height", 0.1),
    shapeSvg.attr("class", "label edgeLabel"),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam208, chunkJZLCHNYAValue864),
    (chunkJZLCHNYAParam208.intersect = function (chunkJZLCHNYAParam398) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam208,
        chunkJZLCHNYAParam398,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper42, "labelRect");
async function chunkJZLCHNYAHelper43(
  chunkJZLCHNYAParam139,
  chunkJZLCHNYAParam140,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam140);
  chunkJZLCHNYAParam140.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam139,
      chunkJZLCHNYAParam140,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam140),
    ),
    chunkJZLCHNYAValue694 = Math.max(
      bbox.width + (chunkJZLCHNYAParam140.padding ?? 0),
      chunkJZLCHNYAParam140?.width ?? 0,
    ),
    chunkJZLCHNYAValue695 = Math.max(
      bbox.height + (chunkJZLCHNYAParam140.padding ?? 0),
      chunkJZLCHNYAParam140?.height ?? 0,
    ),
    chunkJZLCHNYAValue696 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue694 + (3 * chunkJZLCHNYAValue695) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue694,
        y: -chunkJZLCHNYAValue695,
      },
      {
        x: -(3 * chunkJZLCHNYAValue695) / 6,
        y: -chunkJZLCHNYAValue695,
      },
    ],
    chunkJZLCHNYAValue697,
    { cssStyles } = chunkJZLCHNYAParam140;
  if (chunkJZLCHNYAParam140.look === "handDrawn") {
    let chunkJZLCHNYAValue1010 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1011 = chunkATLVNIR6A(chunkJZLCHNYAParam140, {}),
      chunkJZLCHNYAValue1012 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue696),
      chunkJZLCHNYAValue1013 = chunkJZLCHNYAValue1010.path(
        chunkJZLCHNYAValue1012,
        chunkJZLCHNYAValue1011,
      );
    chunkJZLCHNYAValue697 = shapeSvg
      .insert(() => chunkJZLCHNYAValue1013, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue694 / 2}, ${chunkJZLCHNYAValue695 / 2})`,
      );
    cssStyles && chunkJZLCHNYAValue697.attr("style", cssStyles);
  } else
    chunkJZLCHNYAValue697 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue694,
      chunkJZLCHNYAValue695,
      chunkJZLCHNYAValue696,
    );
  return (
    nodeStyles && chunkJZLCHNYAValue697.attr("style", nodeStyles),
    (chunkJZLCHNYAParam140.width = chunkJZLCHNYAValue694),
    (chunkJZLCHNYAParam140.height = chunkJZLCHNYAValue695),
    chunkJZLCHNYAU(chunkJZLCHNYAParam140, chunkJZLCHNYAValue697),
    (chunkJZLCHNYAParam140.intersect = function (chunkJZLCHNYAParam358) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam140,
        chunkJZLCHNYAValue696,
        chunkJZLCHNYAParam358,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper43, "lean_left");
async function chunkJZLCHNYAHelper44(
  chunkJZLCHNYAParam141,
  chunkJZLCHNYAParam142,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam142);
  chunkJZLCHNYAParam142.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam141,
      chunkJZLCHNYAParam142,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam142),
    ),
    chunkJZLCHNYAValue698 = Math.max(
      bbox.width + (chunkJZLCHNYAParam142.padding ?? 0),
      chunkJZLCHNYAParam142?.width ?? 0,
    ),
    chunkJZLCHNYAValue699 = Math.max(
      bbox.height + (chunkJZLCHNYAParam142.padding ?? 0),
      chunkJZLCHNYAParam142?.height ?? 0,
    ),
    chunkJZLCHNYAValue700 = [
      {
        x: (-3 * chunkJZLCHNYAValue699) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue698,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue698 + (3 * chunkJZLCHNYAValue699) / 6,
        y: -chunkJZLCHNYAValue699,
      },
      {
        x: 0,
        y: -chunkJZLCHNYAValue699,
      },
    ],
    chunkJZLCHNYAValue701,
    { cssStyles } = chunkJZLCHNYAParam142;
  if (chunkJZLCHNYAParam142.look === "handDrawn") {
    let chunkJZLCHNYAValue1014 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1015 = chunkATLVNIR6A(chunkJZLCHNYAParam142, {}),
      chunkJZLCHNYAValue1016 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue700),
      chunkJZLCHNYAValue1017 = chunkJZLCHNYAValue1014.path(
        chunkJZLCHNYAValue1016,
        chunkJZLCHNYAValue1015,
      );
    chunkJZLCHNYAValue701 = shapeSvg
      .insert(() => chunkJZLCHNYAValue1017, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue698 / 2}, ${chunkJZLCHNYAValue699 / 2})`,
      );
    cssStyles && chunkJZLCHNYAValue701.attr("style", cssStyles);
  } else
    chunkJZLCHNYAValue701 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue698,
      chunkJZLCHNYAValue699,
      chunkJZLCHNYAValue700,
    );
  return (
    nodeStyles && chunkJZLCHNYAValue701.attr("style", nodeStyles),
    (chunkJZLCHNYAParam142.width = chunkJZLCHNYAValue698),
    (chunkJZLCHNYAParam142.height = chunkJZLCHNYAValue699),
    chunkJZLCHNYAU(chunkJZLCHNYAParam142, chunkJZLCHNYAValue701),
    (chunkJZLCHNYAParam142.intersect = function (chunkJZLCHNYAParam359) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam142,
        chunkJZLCHNYAValue700,
        chunkJZLCHNYAParam359,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper44, "lean_right");
function chunkJZLCHNYAHelper45(chunkJZLCHNYAParam124, chunkJZLCHNYAParam125) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam125);
  chunkJZLCHNYAParam125.label = "";
  chunkJZLCHNYAParam125.labelStyle = labelStyles;
  let chunkJZLCHNYAValue651 = chunkJZLCHNYAParam124
      .insert("g")
      .attr("class", chunkJZLCHNYAValue2(chunkJZLCHNYAParam125))
      .attr("id", chunkJZLCHNYAParam125.domId ?? chunkJZLCHNYAParam125.id),
    { cssStyles } = chunkJZLCHNYAParam125,
    chunkJZLCHNYAValue652 = Math.max(35, chunkJZLCHNYAParam125?.width ?? 0),
    chunkJZLCHNYAValue653 = Math.max(35, chunkJZLCHNYAParam125?.height ?? 0),
    chunkJZLCHNYAValue654 = [
      {
        x: chunkJZLCHNYAValue652,
        y: 0,
      },
      {
        x: 0,
        y: chunkJZLCHNYAValue653 + 3.5,
      },
      {
        x: chunkJZLCHNYAValue652 - 14,
        y: chunkJZLCHNYAValue653 + 3.5,
      },
      {
        x: 0,
        y: 2 * chunkJZLCHNYAValue653,
      },
      {
        x: chunkJZLCHNYAValue652,
        y: chunkJZLCHNYAValue653 - 3.5,
      },
      {
        x: 14,
        y: chunkJZLCHNYAValue653 - 3.5,
      },
    ],
    chunkJZLCHNYAValue655 = rough.svg(chunkJZLCHNYAValue651),
    chunkJZLCHNYAValue656 = chunkATLVNIR6A(chunkJZLCHNYAParam125, {});
  chunkJZLCHNYAParam125.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue656.roughness = 0),
    (chunkJZLCHNYAValue656.fillStyle = "solid"));
  let chunkJZLCHNYAValue657 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue654),
    chunkJZLCHNYAValue658 = chunkJZLCHNYAValue655.path(
      chunkJZLCHNYAValue657,
      chunkJZLCHNYAValue656,
    ),
    chunkJZLCHNYAValue659 = chunkJZLCHNYAValue651.insert(
      () => chunkJZLCHNYAValue658,
      ":first-child",
    );
  return (
    cssStyles &&
      chunkJZLCHNYAParam125.look !== "handDrawn" &&
      chunkJZLCHNYAValue659.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam125.look !== "handDrawn" &&
      chunkJZLCHNYAValue659.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue659.attr(
      "transform",
      `translate(-${chunkJZLCHNYAValue652 / 2},${-chunkJZLCHNYAValue653})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam125, chunkJZLCHNYAValue659),
    (chunkJZLCHNYAParam125.intersect = function (chunkJZLCHNYAParam316) {
      return (
        chunkAGHRB4JFR.info(
          "lightningBolt intersect",
          chunkJZLCHNYAParam125,
          chunkJZLCHNYAParam316,
        ),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam125,
          chunkJZLCHNYAValue654,
          chunkJZLCHNYAParam316,
        )
      );
    }),
    chunkJZLCHNYAValue651
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper45, "lightningBolt");
var chunkJZLCHNYAValue16 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam247,
      chunkJZLCHNYAParam248,
      chunkJZLCHNYAParam249,
      chunkJZLCHNYAParam250,
      chunkJZLCHNYAParam251,
      chunkJZLCHNYAParam252,
      chunkJZLCHNYAParam253,
    ) =>
      [
        `M${chunkJZLCHNYAParam247},${chunkJZLCHNYAParam248 + chunkJZLCHNYAParam252}`,
        `a${chunkJZLCHNYAParam251},${chunkJZLCHNYAParam252} 0,0,0 ${chunkJZLCHNYAParam249},0`,
        `a${chunkJZLCHNYAParam251},${chunkJZLCHNYAParam252} 0,0,0 ${-chunkJZLCHNYAParam249},0`,
        `l0,${chunkJZLCHNYAParam250}`,
        `a${chunkJZLCHNYAParam251},${chunkJZLCHNYAParam252} 0,0,0 ${chunkJZLCHNYAParam249},0`,
        `l0,${-chunkJZLCHNYAParam250}`,
        `M${chunkJZLCHNYAParam247},${chunkJZLCHNYAParam248 + chunkJZLCHNYAParam252 + chunkJZLCHNYAParam253}`,
        `a${chunkJZLCHNYAParam251},${chunkJZLCHNYAParam252} 0,0,0 ${chunkJZLCHNYAParam249},0`,
      ].join(" "),
    "createCylinderPathD",
  ),
  chunkJZLCHNYAValue17 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam260,
      chunkJZLCHNYAParam261,
      chunkJZLCHNYAParam262,
      chunkJZLCHNYAParam263,
      chunkJZLCHNYAParam264,
      chunkJZLCHNYAParam265,
      chunkJZLCHNYAParam266,
    ) =>
      [
        `M${chunkJZLCHNYAParam260},${chunkJZLCHNYAParam261 + chunkJZLCHNYAParam265}`,
        `M${chunkJZLCHNYAParam260 + chunkJZLCHNYAParam262},${chunkJZLCHNYAParam261 + chunkJZLCHNYAParam265}`,
        `a${chunkJZLCHNYAParam264},${chunkJZLCHNYAParam265} 0,0,0 ${-chunkJZLCHNYAParam262},0`,
        `l0,${chunkJZLCHNYAParam263}`,
        `a${chunkJZLCHNYAParam264},${chunkJZLCHNYAParam265} 0,0,0 ${chunkJZLCHNYAParam262},0`,
        `l0,${-chunkJZLCHNYAParam263}`,
        `M${chunkJZLCHNYAParam260},${chunkJZLCHNYAParam261 + chunkJZLCHNYAParam265 + chunkJZLCHNYAParam266}`,
        `a${chunkJZLCHNYAParam264},${chunkJZLCHNYAParam265} 0,0,0 ${chunkJZLCHNYAParam262},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  chunkJZLCHNYAValue18 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam325,
      chunkJZLCHNYAParam326,
      chunkJZLCHNYAParam327,
      chunkJZLCHNYAParam328,
      chunkJZLCHNYAParam329,
      chunkJZLCHNYAParam330,
    ) =>
      [
        `M${chunkJZLCHNYAParam325 - chunkJZLCHNYAParam327 / 2},${-chunkJZLCHNYAParam328 / 2}`,
        `a${chunkJZLCHNYAParam329},${chunkJZLCHNYAParam330} 0,0,0 ${chunkJZLCHNYAParam327},0`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
async function chunkJZLCHNYAHelper46(
  chunkJZLCHNYAParam39,
  chunkJZLCHNYAParam40,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam40);
  chunkJZLCHNYAParam40.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam39,
      chunkJZLCHNYAParam40,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam40),
    ),
    chunkJZLCHNYAValue299 = Math.max(
      bbox.width + (chunkJZLCHNYAParam40.padding ?? 0),
      chunkJZLCHNYAParam40.width ?? 0,
    ),
    chunkJZLCHNYAValue300 = chunkJZLCHNYAValue299 / 2,
    chunkJZLCHNYAValue301 =
      chunkJZLCHNYAValue300 / (2.5 + chunkJZLCHNYAValue299 / 50),
    chunkJZLCHNYAValue302 = Math.max(
      bbox.height + chunkJZLCHNYAValue301 + (chunkJZLCHNYAParam40.padding ?? 0),
      chunkJZLCHNYAParam40.height ?? 0,
    ),
    chunkJZLCHNYAValue303 = chunkJZLCHNYAValue302 * 0.1,
    chunkJZLCHNYAValue304,
    { cssStyles } = chunkJZLCHNYAParam40;
  if (chunkJZLCHNYAParam40.look === "handDrawn") {
    let chunkJZLCHNYAValue924 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue925 = chunkJZLCHNYAValue17(
        0,
        0,
        chunkJZLCHNYAValue299,
        chunkJZLCHNYAValue302,
        chunkJZLCHNYAValue300,
        chunkJZLCHNYAValue301,
        chunkJZLCHNYAValue303,
      ),
      chunkJZLCHNYAValue926 = chunkJZLCHNYAValue18(
        0,
        chunkJZLCHNYAValue301,
        chunkJZLCHNYAValue299,
        chunkJZLCHNYAValue302,
        chunkJZLCHNYAValue300,
        chunkJZLCHNYAValue301,
      ),
      chunkJZLCHNYAValue927 = chunkATLVNIR6A(chunkJZLCHNYAParam40, {}),
      chunkJZLCHNYAValue928 = chunkJZLCHNYAValue924.path(
        chunkJZLCHNYAValue925,
        chunkJZLCHNYAValue927,
      ),
      chunkJZLCHNYAValue929 = chunkJZLCHNYAValue924.path(
        chunkJZLCHNYAValue926,
        chunkJZLCHNYAValue927,
      );
    shapeSvg
      .insert(() => chunkJZLCHNYAValue929, ":first-child")
      .attr("class", "line");
    chunkJZLCHNYAValue304 = shapeSvg.insert(
      () => chunkJZLCHNYAValue928,
      ":first-child",
    );
    chunkJZLCHNYAValue304.attr("class", "basic label-container");
    cssStyles && chunkJZLCHNYAValue304.attr("style", cssStyles);
  } else {
    let chunkJZLCHNYAValue1023 = chunkJZLCHNYAValue16(
      0,
      0,
      chunkJZLCHNYAValue299,
      chunkJZLCHNYAValue302,
      chunkJZLCHNYAValue300,
      chunkJZLCHNYAValue301,
      chunkJZLCHNYAValue303,
    );
    chunkJZLCHNYAValue304 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunkJZLCHNYAValue1023)
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles))
      .attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYAValue304.attr("label-offset-y", chunkJZLCHNYAValue301),
    chunkJZLCHNYAValue304.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue299 / 2}, ${-(chunkJZLCHNYAValue302 / 2 + chunkJZLCHNYAValue301)})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam40, chunkJZLCHNYAValue304),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + chunkJZLCHNYAValue301 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    (chunkJZLCHNYAParam40.intersect = function (chunkJZLCHNYAParam206) {
      let chunkJZLCHNYAValue856 = chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam40,
          chunkJZLCHNYAParam206,
        ),
        chunkJZLCHNYAValue857 =
          chunkJZLCHNYAValue856.x - (chunkJZLCHNYAParam40.x ?? 0);
      if (
        chunkJZLCHNYAValue300 != 0 &&
        (Math.abs(chunkJZLCHNYAValue857) <
          (chunkJZLCHNYAParam40.width ?? 0) / 2 ||
          (Math.abs(chunkJZLCHNYAValue857) ==
            (chunkJZLCHNYAParam40.width ?? 0) / 2 &&
            Math.abs(chunkJZLCHNYAValue856.y - (chunkJZLCHNYAParam40.y ?? 0)) >
              (chunkJZLCHNYAParam40.height ?? 0) / 2 - chunkJZLCHNYAValue301))
      ) {
        let chunkJZLCHNYAValue1034 =
          chunkJZLCHNYAValue301 *
          chunkJZLCHNYAValue301 *
          (1 -
            (chunkJZLCHNYAValue857 * chunkJZLCHNYAValue857) /
              (chunkJZLCHNYAValue300 * chunkJZLCHNYAValue300));
        chunkJZLCHNYAValue1034 > 0 &&
          (chunkJZLCHNYAValue1034 = Math.sqrt(chunkJZLCHNYAValue1034));
        chunkJZLCHNYAValue1034 = chunkJZLCHNYAValue301 - chunkJZLCHNYAValue1034;
        chunkJZLCHNYAParam206.y - (chunkJZLCHNYAParam40.y ?? 0) > 0 &&
          (chunkJZLCHNYAValue1034 = -chunkJZLCHNYAValue1034);
        chunkJZLCHNYAValue856.y += chunkJZLCHNYAValue1034;
      }
      return chunkJZLCHNYAValue856;
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper46, "linedCylinder");
async function chunkJZLCHNYAHelper47(
  chunkJZLCHNYAParam58,
  chunkJZLCHNYAParam59,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam59);
  chunkJZLCHNYAParam59.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam58,
      chunkJZLCHNYAParam59,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam59),
    ),
    chunkJZLCHNYAValue391 = Math.max(
      bbox.width + (chunkJZLCHNYAParam59.padding ?? 0) * 2,
      chunkJZLCHNYAParam59?.width ?? 0,
    ),
    chunkJZLCHNYAValue392 = Math.max(
      bbox.height + (chunkJZLCHNYAParam59.padding ?? 0) * 2,
      chunkJZLCHNYAParam59?.height ?? 0,
    ),
    chunkJZLCHNYAValue393 = chunkJZLCHNYAValue392 / 4,
    chunkJZLCHNYAValue394 = chunkJZLCHNYAValue392 + chunkJZLCHNYAValue393,
    { cssStyles } = chunkJZLCHNYAParam59,
    chunkJZLCHNYAValue395 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue396 = chunkATLVNIR6A(chunkJZLCHNYAParam59, {});
  chunkJZLCHNYAParam59.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue396.roughness = 0),
    (chunkJZLCHNYAValue396.fillStyle = "solid"));
  let chunkJZLCHNYAValue397 = [
      {
        x: -chunkJZLCHNYAValue391 / 2 - (chunkJZLCHNYAValue391 / 2) * 0.1,
        y: -chunkJZLCHNYAValue394 / 2,
      },
      {
        x: -chunkJZLCHNYAValue391 / 2 - (chunkJZLCHNYAValue391 / 2) * 0.1,
        y: chunkJZLCHNYAValue394 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYAValue391 / 2 - (chunkJZLCHNYAValue391 / 2) * 0.1,
        chunkJZLCHNYAValue394 / 2,
        chunkJZLCHNYAValue391 / 2 + (chunkJZLCHNYAValue391 / 2) * 0.1,
        chunkJZLCHNYAValue394 / 2,
        chunkJZLCHNYAValue393,
        0.8,
      ),
      {
        x: chunkJZLCHNYAValue391 / 2 + (chunkJZLCHNYAValue391 / 2) * 0.1,
        y: -chunkJZLCHNYAValue394 / 2,
      },
      {
        x: -chunkJZLCHNYAValue391 / 2 - (chunkJZLCHNYAValue391 / 2) * 0.1,
        y: -chunkJZLCHNYAValue394 / 2,
      },
      {
        x: -chunkJZLCHNYAValue391 / 2,
        y: -chunkJZLCHNYAValue394 / 2,
      },
      {
        x: -chunkJZLCHNYAValue391 / 2,
        y: (chunkJZLCHNYAValue394 / 2) * 1.1,
      },
      {
        x: -chunkJZLCHNYAValue391 / 2,
        y: -chunkJZLCHNYAValue394 / 2,
      },
    ],
    chunkJZLCHNYAValue398 = chunkJZLCHNYAValue395.polygon(
      chunkJZLCHNYAValue397.map((item) => [item.x, item.y]),
      chunkJZLCHNYAValue396,
    ),
    chunkJZLCHNYAValue399 = shapeSvg.insert(
      () => chunkJZLCHNYAValue398,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue399.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam59.look !== "handDrawn" &&
      chunkJZLCHNYAValue399.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam59.look !== "handDrawn" &&
      chunkJZLCHNYAValue399.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue399.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYAValue393 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue391 / 2 + (chunkJZLCHNYAParam59.padding ?? 0) + ((chunkJZLCHNYAValue391 / 2) * 0.1) / 2 - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue392 / 2 + (chunkJZLCHNYAParam59.padding ?? 0) - chunkJZLCHNYAValue393 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam59, chunkJZLCHNYAValue399),
    (chunkJZLCHNYAParam59.intersect = function (chunkJZLCHNYAParam360) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam59,
        chunkJZLCHNYAValue397,
        chunkJZLCHNYAParam360,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper47, "linedWaveEdgedRect");
async function chunkJZLCHNYAHelper48(
  chunkJZLCHNYAParam49,
  chunkJZLCHNYAParam50,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam50);
  chunkJZLCHNYAParam50.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam49,
      chunkJZLCHNYAParam50,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam50),
    ),
    chunkJZLCHNYAValue357 = Math.max(
      bbox.width + (chunkJZLCHNYAParam50.padding ?? 0) * 2,
      chunkJZLCHNYAParam50?.width ?? 0,
    ),
    chunkJZLCHNYAValue358 = Math.max(
      bbox.height + (chunkJZLCHNYAParam50.padding ?? 0) * 2,
      chunkJZLCHNYAParam50?.height ?? 0,
    ),
    chunkJZLCHNYAValue359 = -chunkJZLCHNYAValue357 / 2,
    chunkJZLCHNYAValue360 = -chunkJZLCHNYAValue358 / 2,
    { cssStyles } = chunkJZLCHNYAParam50,
    chunkJZLCHNYAValue361 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue362 = chunkATLVNIR6A(chunkJZLCHNYAParam50, {}),
    chunkJZLCHNYAValue363 = [
      {
        x: chunkJZLCHNYAValue359 - 5,
        y: chunkJZLCHNYAValue360 + 5,
      },
      {
        x: chunkJZLCHNYAValue359 - 5,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358 + 5,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357 - 5,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358 + 5,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357 - 5,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358 - 5,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357 + 5,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358 - 5,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357 + 5,
        y: chunkJZLCHNYAValue360 - 5,
      },
      {
        x: chunkJZLCHNYAValue359 + 5,
        y: chunkJZLCHNYAValue360 - 5,
      },
      {
        x: chunkJZLCHNYAValue359 + 5,
        y: chunkJZLCHNYAValue360,
      },
      {
        x: chunkJZLCHNYAValue359,
        y: chunkJZLCHNYAValue360,
      },
      {
        x: chunkJZLCHNYAValue359,
        y: chunkJZLCHNYAValue360 + 5,
      },
    ],
    chunkJZLCHNYAValue364 = [
      {
        x: chunkJZLCHNYAValue359,
        y: chunkJZLCHNYAValue360 + 5,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357 - 5,
        y: chunkJZLCHNYAValue360 + 5,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357 - 5,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357,
        y: chunkJZLCHNYAValue360 + chunkJZLCHNYAValue358,
      },
      {
        x: chunkJZLCHNYAValue359 + chunkJZLCHNYAValue357,
        y: chunkJZLCHNYAValue360,
      },
      {
        x: chunkJZLCHNYAValue359,
        y: chunkJZLCHNYAValue360,
      },
    ];
  chunkJZLCHNYAParam50.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue362.roughness = 0),
    (chunkJZLCHNYAValue362.fillStyle = "solid"));
  let chunkJZLCHNYAValue365 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue363),
    chunkJZLCHNYAValue366 = chunkJZLCHNYAValue361.path(
      chunkJZLCHNYAValue365,
      chunkJZLCHNYAValue362,
    ),
    chunkJZLCHNYAValue367 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue364),
    chunkJZLCHNYAValue368 = chunkJZLCHNYAValue361.path(chunkJZLCHNYAValue367, {
      ...chunkJZLCHNYAValue362,
      fill: "none",
    }),
    chunkJZLCHNYAValue369 = shapeSvg.insert(
      () => chunkJZLCHNYAValue368,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue369.insert(() => chunkJZLCHNYAValue366, ":first-child"),
    chunkJZLCHNYAValue369.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam50.look !== "handDrawn" &&
      chunkJZLCHNYAValue369.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam50.look !== "handDrawn" &&
      chunkJZLCHNYAValue369.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - 5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam50, chunkJZLCHNYAValue369),
    (chunkJZLCHNYAParam50.intersect = function (chunkJZLCHNYAParam361) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam50,
        chunkJZLCHNYAValue363,
        chunkJZLCHNYAParam361,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper48, "multiRect");
async function chunkJZLCHNYAHelper49(
  chunkJZLCHNYAParam37,
  chunkJZLCHNYAParam38,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam38);
  chunkJZLCHNYAParam38.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam37,
      chunkJZLCHNYAParam38,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam38),
    ),
    chunkJZLCHNYAValue282 = Math.max(
      bbox.width + (chunkJZLCHNYAParam38.padding ?? 0) * 2,
      chunkJZLCHNYAParam38?.width ?? 0,
    ),
    chunkJZLCHNYAValue283 = Math.max(
      bbox.height + (chunkJZLCHNYAParam38.padding ?? 0) * 2,
      chunkJZLCHNYAParam38?.height ?? 0,
    ),
    chunkJZLCHNYAValue284 = chunkJZLCHNYAValue283 / 4,
    chunkJZLCHNYAValue285 = chunkJZLCHNYAValue283 + chunkJZLCHNYAValue284,
    chunkJZLCHNYAValue286 = -chunkJZLCHNYAValue282 / 2,
    chunkJZLCHNYAValue287 = -chunkJZLCHNYAValue285 / 2,
    { cssStyles } = chunkJZLCHNYAParam38,
    chunkJZLCHNYAValue288 = chunkJZLCHNYAHelper2(
      chunkJZLCHNYAValue286 - 5,
      chunkJZLCHNYAValue287 + chunkJZLCHNYAValue285 + 5,
      chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282 - 5,
      chunkJZLCHNYAValue287 + chunkJZLCHNYAValue285 + 5,
      chunkJZLCHNYAValue284,
      0.8,
    ),
    chunkJZLCHNYAValue289 =
      chunkJZLCHNYAValue288?.[chunkJZLCHNYAValue288.length - 1],
    chunkJZLCHNYAValue290 = [
      {
        x: chunkJZLCHNYAValue286 - 5,
        y: chunkJZLCHNYAValue287 + 5,
      },
      {
        x: chunkJZLCHNYAValue286 - 5,
        y: chunkJZLCHNYAValue287 + chunkJZLCHNYAValue285 + 5,
      },
      ...chunkJZLCHNYAValue288,
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282 - 5,
        y: chunkJZLCHNYAValue289.y - 5,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282,
        y: chunkJZLCHNYAValue289.y - 5,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282,
        y: chunkJZLCHNYAValue289.y - 10,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282 + 5,
        y: chunkJZLCHNYAValue289.y - 10,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282 + 5,
        y: chunkJZLCHNYAValue287 - 5,
      },
      {
        x: chunkJZLCHNYAValue286 + 5,
        y: chunkJZLCHNYAValue287 - 5,
      },
      {
        x: chunkJZLCHNYAValue286 + 5,
        y: chunkJZLCHNYAValue287,
      },
      {
        x: chunkJZLCHNYAValue286,
        y: chunkJZLCHNYAValue287,
      },
      {
        x: chunkJZLCHNYAValue286,
        y: chunkJZLCHNYAValue287 + 5,
      },
    ],
    chunkJZLCHNYAValue291 = [
      {
        x: chunkJZLCHNYAValue286,
        y: chunkJZLCHNYAValue287 + 5,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282 - 5,
        y: chunkJZLCHNYAValue287 + 5,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282 - 5,
        y: chunkJZLCHNYAValue289.y - 5,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282,
        y: chunkJZLCHNYAValue289.y - 5,
      },
      {
        x: chunkJZLCHNYAValue286 + chunkJZLCHNYAValue282,
        y: chunkJZLCHNYAValue287,
      },
      {
        x: chunkJZLCHNYAValue286,
        y: chunkJZLCHNYAValue287,
      },
    ],
    chunkJZLCHNYAValue292 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue293 = chunkATLVNIR6A(chunkJZLCHNYAParam38, {});
  chunkJZLCHNYAParam38.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue293.roughness = 0),
    (chunkJZLCHNYAValue293.fillStyle = "solid"));
  let chunkJZLCHNYAValue294 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue290),
    chunkJZLCHNYAValue295 = chunkJZLCHNYAValue292.path(
      chunkJZLCHNYAValue294,
      chunkJZLCHNYAValue293,
    ),
    chunkJZLCHNYAValue296 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue291),
    chunkJZLCHNYAValue297 = chunkJZLCHNYAValue292.path(
      chunkJZLCHNYAValue296,
      chunkJZLCHNYAValue293,
    ),
    chunkJZLCHNYAValue298 = shapeSvg.insert(
      () => chunkJZLCHNYAValue295,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue298.insert(() => chunkJZLCHNYAValue297),
    chunkJZLCHNYAValue298.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam38.look !== "handDrawn" &&
      chunkJZLCHNYAValue298.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam38.look !== "handDrawn" &&
      chunkJZLCHNYAValue298.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue298.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYAValue284 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - 5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 5 - chunkJZLCHNYAValue284 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam38, chunkJZLCHNYAValue298),
    (chunkJZLCHNYAParam38.intersect = function (chunkJZLCHNYAParam362) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam38,
        chunkJZLCHNYAValue290,
        chunkJZLCHNYAParam362,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper49, "multiWaveEdgedRectangle");
async function chunkJZLCHNYAHelper50(
  chunkJZLCHNYAParam96,
  chunkJZLCHNYAParam97,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam97);
  chunkJZLCHNYAParam97.labelStyle = labelStyles;
  chunkJZLCHNYAParam97.useHtmlLabels ||
    _chunkABZYJK2DY().flowchart?.htmlLabels !== false ||
    (chunkJZLCHNYAParam97.centerLabel = true);
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam96,
      chunkJZLCHNYAParam97,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam97),
    ),
    chunkJZLCHNYAValue556 = Math.max(
      bbox.width + (chunkJZLCHNYAParam97.padding ?? 0) * 2,
      chunkJZLCHNYAParam97?.width ?? 0,
    ),
    chunkJZLCHNYAValue557 = Math.max(
      bbox.height + (chunkJZLCHNYAParam97.padding ?? 0) * 2,
      chunkJZLCHNYAParam97?.height ?? 0,
    ),
    chunkJZLCHNYAValue558 = -chunkJZLCHNYAValue556 / 2,
    chunkJZLCHNYAValue559 = -chunkJZLCHNYAValue557 / 2,
    { cssStyles } = chunkJZLCHNYAParam97,
    chunkJZLCHNYAValue560 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue561 = chunkATLVNIR6A(chunkJZLCHNYAParam97, {
      fill: themeVariables.noteBkgColor,
      stroke: themeVariables.noteBorderColor,
    });
  chunkJZLCHNYAParam97.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue561.roughness = 0),
    (chunkJZLCHNYAValue561.fillStyle = "solid"));
  let chunkJZLCHNYAValue562 = chunkJZLCHNYAValue560.rectangle(
      chunkJZLCHNYAValue558,
      chunkJZLCHNYAValue559,
      chunkJZLCHNYAValue556,
      chunkJZLCHNYAValue557,
      chunkJZLCHNYAValue561,
    ),
    chunkJZLCHNYAValue563 = shapeSvg.insert(
      () => chunkJZLCHNYAValue562,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue563.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam97.look !== "handDrawn" &&
      chunkJZLCHNYAValue563.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam97.look !== "handDrawn" &&
      chunkJZLCHNYAValue563.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam97, chunkJZLCHNYAValue563),
    (chunkJZLCHNYAParam97.intersect = function (chunkJZLCHNYAParam399) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam97,
        chunkJZLCHNYAParam399,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper50, "note");
var chunkJZLCHNYAValue19 = chunkAGHRB4JFN(
  (chunkJZLCHNYAParam292, chunkJZLCHNYAParam293, chunkJZLCHNYAParam294) =>
    [
      `M${chunkJZLCHNYAParam292 + chunkJZLCHNYAParam294 / 2},${chunkJZLCHNYAParam293}`,
      `L${chunkJZLCHNYAParam292 + chunkJZLCHNYAParam294},${chunkJZLCHNYAParam293 - chunkJZLCHNYAParam294 / 2}`,
      `L${chunkJZLCHNYAParam292 + chunkJZLCHNYAParam294 / 2},${chunkJZLCHNYAParam293 - chunkJZLCHNYAParam294}`,
      `L${chunkJZLCHNYAParam292},${chunkJZLCHNYAParam293 - chunkJZLCHNYAParam294 / 2}`,
      "Z",
    ].join(" "),
  "createDecisionBoxPathD",
);
async function chunkJZLCHNYAHelper51(
  chunkJZLCHNYAParam81,
  chunkJZLCHNYAParam82,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam82);
  chunkJZLCHNYAParam82.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam81,
      chunkJZLCHNYAParam82,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam82),
    ),
    chunkJZLCHNYAValue498 =
      bbox.width +
      chunkJZLCHNYAParam82.padding +
      (bbox.height + chunkJZLCHNYAParam82.padding),
    chunkJZLCHNYAValue500 = [
      {
        x: chunkJZLCHNYAValue498 / 2,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue498,
        y: -chunkJZLCHNYAValue498 / 2,
      },
      {
        x: chunkJZLCHNYAValue498 / 2,
        y: -chunkJZLCHNYAValue498,
      },
      {
        x: 0,
        y: -chunkJZLCHNYAValue498 / 2,
      },
    ],
    chunkJZLCHNYAValue501,
    { cssStyles } = chunkJZLCHNYAParam82;
  if (chunkJZLCHNYAParam82.look === "handDrawn") {
    let chunkJZLCHNYAValue996 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue997 = chunkATLVNIR6A(chunkJZLCHNYAParam82, {}),
      chunkJZLCHNYAValue998 = chunkJZLCHNYAValue19(0, 0, chunkJZLCHNYAValue498),
      chunkJZLCHNYAValue999 = chunkJZLCHNYAValue996.path(
        chunkJZLCHNYAValue998,
        chunkJZLCHNYAValue997,
      );
    chunkJZLCHNYAValue501 = shapeSvg
      .insert(() => chunkJZLCHNYAValue999, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue498 / 2 + 0.5}, ${chunkJZLCHNYAValue498 / 2})`,
      );
    cssStyles && chunkJZLCHNYAValue501.attr("style", cssStyles);
  } else {
    chunkJZLCHNYAValue501 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue498,
      chunkJZLCHNYAValue498,
      chunkJZLCHNYAValue500,
    );
    chunkJZLCHNYAValue501.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue498 / 2 + 0.5}, ${chunkJZLCHNYAValue498 / 2})`,
    );
  }
  return (
    nodeStyles && chunkJZLCHNYAValue501.attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam82, chunkJZLCHNYAValue501),
    (chunkJZLCHNYAParam82.calcIntersect = function (
      chunkJZLCHNYAParam267,
      chunkJZLCHNYAParam268,
    ) {
      let chunkJZLCHNYAValue980 = chunkJZLCHNYAParam267.width,
        chunkJZLCHNYAValue981 = [
          {
            x: chunkJZLCHNYAValue980 / 2,
            y: 0,
          },
          {
            x: chunkJZLCHNYAValue980,
            y: -chunkJZLCHNYAValue980 / 2,
          },
          {
            x: chunkJZLCHNYAValue980 / 2,
            y: -chunkJZLCHNYAValue980,
          },
          {
            x: 0,
            y: -chunkJZLCHNYAValue980 / 2,
          },
        ],
        chunkJZLCHNYAValue982 = chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam267,
          chunkJZLCHNYAValue981,
          chunkJZLCHNYAParam268,
        );
      return {
        x: chunkJZLCHNYAValue982.x - 0.5,
        y: chunkJZLCHNYAValue982.y - 0.5,
      };
    }),
    (chunkJZLCHNYAParam82.intersect = function (chunkJZLCHNYAParam348) {
      return this.calcIntersect(chunkJZLCHNYAParam82, chunkJZLCHNYAParam348);
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper51, "question");
async function $e(chunkJZLCHNYAParam79, chunkJZLCHNYAParam80) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam80);
  chunkJZLCHNYAParam80.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam79,
      chunkJZLCHNYAParam80,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam80),
    ),
    chunkJZLCHNYAValue487 = Math.max(
      bbox.width + (chunkJZLCHNYAParam80.padding ?? 0),
      chunkJZLCHNYAParam80?.width ?? 0,
    ),
    chunkJZLCHNYAValue488 = Math.max(
      bbox.height + (chunkJZLCHNYAParam80.padding ?? 0),
      chunkJZLCHNYAParam80?.height ?? 0,
    ),
    chunkJZLCHNYAValue489 = -chunkJZLCHNYAValue487 / 2,
    chunkJZLCHNYAValue490 = -chunkJZLCHNYAValue488 / 2,
    chunkJZLCHNYAValue491 = chunkJZLCHNYAValue490 / 2,
    chunkJZLCHNYAValue492 = [
      {
        x: chunkJZLCHNYAValue489 + chunkJZLCHNYAValue491,
        y: chunkJZLCHNYAValue490,
      },
      {
        x: chunkJZLCHNYAValue489,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue489 + chunkJZLCHNYAValue491,
        y: -chunkJZLCHNYAValue490,
      },
      {
        x: -chunkJZLCHNYAValue489,
        y: -chunkJZLCHNYAValue490,
      },
      {
        x: -chunkJZLCHNYAValue489,
        y: chunkJZLCHNYAValue490,
      },
    ],
    { cssStyles } = chunkJZLCHNYAParam80,
    chunkJZLCHNYAValue493 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue494 = chunkATLVNIR6A(chunkJZLCHNYAParam80, {});
  chunkJZLCHNYAParam80.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue494.roughness = 0),
    (chunkJZLCHNYAValue494.fillStyle = "solid"));
  let chunkJZLCHNYAValue495 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue492),
    chunkJZLCHNYAValue496 = chunkJZLCHNYAValue493.path(
      chunkJZLCHNYAValue495,
      chunkJZLCHNYAValue494,
    ),
    chunkJZLCHNYAValue497 = shapeSvg.insert(
      () => chunkJZLCHNYAValue496,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue497.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam80.look !== "handDrawn" &&
      chunkJZLCHNYAValue497.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam80.look !== "handDrawn" &&
      chunkJZLCHNYAValue497.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue497.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue491 / 2},0)`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue491 / 2 - bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam80, chunkJZLCHNYAValue497),
    (chunkJZLCHNYAParam80.intersect = function (chunkJZLCHNYAParam363) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam80,
        chunkJZLCHNYAValue492,
        chunkJZLCHNYAParam363,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN($e, "rect_left_inv_arrow");
async function chunkJZLCHNYAHelper52(
  chunkJZLCHNYAParam14,
  chunkJZLCHNYAParam15,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam15);
  chunkJZLCHNYAParam15.labelStyle = labelStyles;
  let chunkJZLCHNYAValue156;
  chunkJZLCHNYAValue156 = chunkJZLCHNYAParam15.cssClasses
    ? "node " + chunkJZLCHNYAParam15.cssClasses
    : "node default";
  let chunkJZLCHNYAValue157 = chunkJZLCHNYAParam14
      .insert("g")
      .attr("class", chunkJZLCHNYAValue156)
      .attr("id", chunkJZLCHNYAParam15.domId || chunkJZLCHNYAParam15.id),
    chunkJZLCHNYAValue158 = chunkJZLCHNYAValue157.insert("g"),
    chunkJZLCHNYAValue159 = chunkJZLCHNYAValue157
      .insert("g")
      .attr("class", "label")
      .attr("style", nodeStyles),
    chunkJZLCHNYAValue160 = chunkJZLCHNYAParam15.description,
    chunkJZLCHNYAValue161 = chunkJZLCHNYAParam15.label,
    chunkJZLCHNYAValue162 = chunkJZLCHNYAValue159
      .node()
      .appendChild(
        await chunkJZLCHNYAR(
          chunkJZLCHNYAValue161,
          chunkJZLCHNYAParam15.labelStyle,
          true,
          true,
        ),
      ),
    chunkJZLCHNYAValue163 = {
      width: 0,
      height: 0,
    };
  if (chunkABZYJK2DV(_chunkABZYJK2DL()?.flowchart?.htmlLabels)) {
    let chunkJZLCHNYAValue1057 = chunkJZLCHNYAValue162.children[0],
      chunkJZLCHNYAValue1058 = Src(chunkJZLCHNYAValue162);
    chunkJZLCHNYAValue163 = chunkJZLCHNYAValue1057.getBoundingClientRect();
    chunkJZLCHNYAValue1058.attr("width", chunkJZLCHNYAValue163.width);
    chunkJZLCHNYAValue1058.attr("height", chunkJZLCHNYAValue163.height);
  }
  chunkAGHRB4JFR.info("Text 2", chunkJZLCHNYAValue160);
  let chunkJZLCHNYAValue164 = chunkJZLCHNYAValue160 || [],
    chunkJZLCHNYAValue165 = chunkJZLCHNYAValue162.getBBox(),
    chunkJZLCHNYAValue166 = chunkJZLCHNYAValue159
      .node()
      .appendChild(
        await chunkJZLCHNYAR(
          chunkJZLCHNYAValue164.join
            ? chunkJZLCHNYAValue164.join("<br/>")
            : chunkJZLCHNYAValue164,
          chunkJZLCHNYAParam15.labelStyle,
          true,
          true,
        ),
      ),
    chunkJZLCHNYAValue167 = chunkJZLCHNYAValue166.children[0],
    chunkJZLCHNYAValue168 = Src(chunkJZLCHNYAValue166);
  chunkJZLCHNYAValue163 = chunkJZLCHNYAValue167.getBoundingClientRect();
  chunkJZLCHNYAValue168.attr("width", chunkJZLCHNYAValue163.width);
  chunkJZLCHNYAValue168.attr("height", chunkJZLCHNYAValue163.height);
  let chunkJZLCHNYAValue169 = (chunkJZLCHNYAParam15.padding || 0) / 2;
  Src(chunkJZLCHNYAValue166).attr(
    "transform",
    "translate( " +
      (chunkJZLCHNYAValue163.width > chunkJZLCHNYAValue165.width
        ? 0
        : (chunkJZLCHNYAValue165.width - chunkJZLCHNYAValue163.width) / 2) +
      ", " +
      (chunkJZLCHNYAValue165.height + chunkJZLCHNYAValue169 + 5) +
      ")",
  );
  Src(chunkJZLCHNYAValue162).attr(
    "transform",
    "translate( " +
      (chunkJZLCHNYAValue163.width < chunkJZLCHNYAValue165.width
        ? 0
        : -(chunkJZLCHNYAValue165.width - chunkJZLCHNYAValue163.width) / 2) +
      ", 0)",
  );
  chunkJZLCHNYAValue163 = chunkJZLCHNYAValue159.node().getBBox();
  chunkJZLCHNYAValue159.attr(
    "transform",
    "translate(" +
      -chunkJZLCHNYAValue163.width / 2 +
      ", " +
      (-chunkJZLCHNYAValue163.height / 2 - chunkJZLCHNYAValue169 + 3) +
      ")",
  );
  let _chunkJZLCHNYAS =
      chunkJZLCHNYAValue163.width + (chunkJZLCHNYAParam15.padding || 0),
    chunkJZLCHNYAValue170 =
      chunkJZLCHNYAValue163.height + (chunkJZLCHNYAParam15.padding || 0),
    chunkJZLCHNYAValue171 =
      -chunkJZLCHNYAValue163.width / 2 - chunkJZLCHNYAValue169,
    chunkJZLCHNYAValue172 =
      -chunkJZLCHNYAValue163.height / 2 - chunkJZLCHNYAValue169,
    chunkJZLCHNYAValue173,
    chunkJZLCHNYAValue174;
  if (chunkJZLCHNYAParam15.look === "handDrawn") {
    let chunkJZLCHNYAValue850 = rough.svg(chunkJZLCHNYAValue157),
      chunkJZLCHNYAValue851 = chunkATLVNIR6A(chunkJZLCHNYAParam15, {}),
      chunkJZLCHNYAValue852 = chunkJZLCHNYAValue850.path(
        chunkJZLCHNYAValue4(
          chunkJZLCHNYAValue171,
          chunkJZLCHNYAValue172,
          _chunkJZLCHNYAS,
          chunkJZLCHNYAValue170,
          chunkJZLCHNYAParam15.rx || 0,
        ),
        chunkJZLCHNYAValue851,
      ),
      chunkJZLCHNYAValue853 = chunkJZLCHNYAValue850.line(
        -chunkJZLCHNYAValue163.width / 2 - chunkJZLCHNYAValue169,
        -chunkJZLCHNYAValue163.height / 2 -
          chunkJZLCHNYAValue169 +
          chunkJZLCHNYAValue165.height +
          chunkJZLCHNYAValue169,
        chunkJZLCHNYAValue163.width / 2 + chunkJZLCHNYAValue169,
        -chunkJZLCHNYAValue163.height / 2 -
          chunkJZLCHNYAValue169 +
          chunkJZLCHNYAValue165.height +
          chunkJZLCHNYAValue169,
        chunkJZLCHNYAValue851,
      );
    chunkJZLCHNYAValue174 = chunkJZLCHNYAValue157.insert(
      () => (
        chunkAGHRB4JFR.debug("Rough node insert CXC", chunkJZLCHNYAValue852),
        chunkJZLCHNYAValue853
      ),
      ":first-child",
    );
    chunkJZLCHNYAValue173 = chunkJZLCHNYAValue157.insert(
      () => (
        chunkAGHRB4JFR.debug("Rough node insert CXC", chunkJZLCHNYAValue852),
        chunkJZLCHNYAValue852
      ),
      ":first-child",
    );
  } else {
    chunkJZLCHNYAValue173 = chunkJZLCHNYAValue158.insert(
      "rect",
      ":first-child",
    );
    chunkJZLCHNYAValue174 = chunkJZLCHNYAValue158.insert("line");
    chunkJZLCHNYAValue173
      .attr("class", "outer title-state")
      .attr("style", nodeStyles)
      .attr("x", -chunkJZLCHNYAValue163.width / 2 - chunkJZLCHNYAValue169)
      .attr("y", -chunkJZLCHNYAValue163.height / 2 - chunkJZLCHNYAValue169)
      .attr(
        "width",
        chunkJZLCHNYAValue163.width + (chunkJZLCHNYAParam15.padding || 0),
      )
      .attr(
        "height",
        chunkJZLCHNYAValue163.height + (chunkJZLCHNYAParam15.padding || 0),
      );
    chunkJZLCHNYAValue174
      .attr("class", "divider")
      .attr("x1", -chunkJZLCHNYAValue163.width / 2 - chunkJZLCHNYAValue169)
      .attr("x2", chunkJZLCHNYAValue163.width / 2 + chunkJZLCHNYAValue169)
      .attr(
        "y1",
        -chunkJZLCHNYAValue163.height / 2 -
          chunkJZLCHNYAValue169 +
          chunkJZLCHNYAValue165.height +
          chunkJZLCHNYAValue169,
      )
      .attr(
        "y2",
        -chunkJZLCHNYAValue163.height / 2 -
          chunkJZLCHNYAValue169 +
          chunkJZLCHNYAValue165.height +
          chunkJZLCHNYAValue169,
      );
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam15, chunkJZLCHNYAValue173),
    (chunkJZLCHNYAParam15.intersect = function (chunkJZLCHNYAParam400) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam15,
        chunkJZLCHNYAParam400,
      );
    }),
    chunkJZLCHNYAValue157
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper52, "rectWithTitle");
function chunkJZLCHNYAHelper53(
  chunkJZLCHNYAParam168,
  chunkJZLCHNYAParam169,
  chunkJZLCHNYAParam170,
  chunkJZLCHNYAParam171,
  chunkJZLCHNYAParam172,
  chunkJZLCHNYAParam173,
  chunkJZLCHNYAParam174,
) {
  let chunkJZLCHNYAValue763 =
      (chunkJZLCHNYAParam168 + chunkJZLCHNYAParam170) / 2,
    chunkJZLCHNYAValue764 = (chunkJZLCHNYAParam169 + chunkJZLCHNYAParam171) / 2,
    chunkJZLCHNYAValue765 = Math.atan2(
      chunkJZLCHNYAParam171 - chunkJZLCHNYAParam169,
      chunkJZLCHNYAParam170 - chunkJZLCHNYAParam168,
    ),
    chunkJZLCHNYAValue766 = (chunkJZLCHNYAParam170 - chunkJZLCHNYAParam168) / 2,
    chunkJZLCHNYAValue767 = (chunkJZLCHNYAParam171 - chunkJZLCHNYAParam169) / 2,
    chunkJZLCHNYAValue768 = chunkJZLCHNYAValue766 / chunkJZLCHNYAParam172,
    chunkJZLCHNYAValue769 = chunkJZLCHNYAValue767 / chunkJZLCHNYAParam173,
    chunkJZLCHNYAValue770 = Math.sqrt(
      chunkJZLCHNYAValue768 ** 2 + chunkJZLCHNYAValue769 ** 2,
    );
  if (chunkJZLCHNYAValue770 > 1)
    throw Error(
      "The given radii are too small to create an arc between the points.",
    );
  let chunkJZLCHNYAValue771 = Math.sqrt(1 - chunkJZLCHNYAValue770 ** 2),
    chunkJZLCHNYAValue772 =
      chunkJZLCHNYAValue763 +
      chunkJZLCHNYAValue771 *
        chunkJZLCHNYAParam173 *
        Math.sin(chunkJZLCHNYAValue765) *
        (chunkJZLCHNYAParam174 ? -1 : 1),
    chunkJZLCHNYAValue773 =
      chunkJZLCHNYAValue764 -
      chunkJZLCHNYAValue771 *
        chunkJZLCHNYAParam172 *
        Math.cos(chunkJZLCHNYAValue765) *
        (chunkJZLCHNYAParam174 ? -1 : 1),
    chunkJZLCHNYAValue774 = Math.atan2(
      (chunkJZLCHNYAParam169 - chunkJZLCHNYAValue773) / chunkJZLCHNYAParam173,
      (chunkJZLCHNYAParam168 - chunkJZLCHNYAValue772) / chunkJZLCHNYAParam172,
    ),
    chunkJZLCHNYAValue775 =
      Math.atan2(
        (chunkJZLCHNYAParam171 - chunkJZLCHNYAValue773) / chunkJZLCHNYAParam173,
        (chunkJZLCHNYAParam170 - chunkJZLCHNYAValue772) / chunkJZLCHNYAParam172,
      ) - chunkJZLCHNYAValue774;
  chunkJZLCHNYAParam174 &&
    chunkJZLCHNYAValue775 < 0 &&
    (chunkJZLCHNYAValue775 += 2 * Math.PI);
  !chunkJZLCHNYAParam174 &&
    chunkJZLCHNYAValue775 > 0 &&
    (chunkJZLCHNYAValue775 -= 2 * Math.PI);
  let chunkJZLCHNYAValue776 = [];
  for (
    let chunkJZLCHNYAValue1056 = 0;
    chunkJZLCHNYAValue1056 < 20;
    chunkJZLCHNYAValue1056++
  ) {
    let chunkJZLCHNYAValue1075 =
        chunkJZLCHNYAValue774 +
        (chunkJZLCHNYAValue1056 / 19) * chunkJZLCHNYAValue775,
      chunkJZLCHNYAValue1076 =
        chunkJZLCHNYAValue772 +
        chunkJZLCHNYAParam172 * Math.cos(chunkJZLCHNYAValue1075),
      chunkJZLCHNYAValue1077 =
        chunkJZLCHNYAValue773 +
        chunkJZLCHNYAParam173 * Math.sin(chunkJZLCHNYAValue1075);
    chunkJZLCHNYAValue776.push({
      x: chunkJZLCHNYAValue1076,
      y: chunkJZLCHNYAValue1077,
    });
  }
  return chunkJZLCHNYAValue776;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper53, "generateArcPoints");
async function chunkJZLCHNYAHelper54(
  chunkJZLCHNYAParam60,
  chunkJZLCHNYAParam61,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam61);
  chunkJZLCHNYAParam61.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam60,
      chunkJZLCHNYAParam61,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam61),
    ),
    chunkJZLCHNYAValue400 = chunkJZLCHNYAParam61?.padding ?? 0,
    chunkJZLCHNYAValue401 = chunkJZLCHNYAParam61?.padding ?? 0,
    chunkJZLCHNYAValue402 =
      (chunkJZLCHNYAParam61?.width ? chunkJZLCHNYAParam61?.width : bbox.width) +
      chunkJZLCHNYAValue400 * 2,
    chunkJZLCHNYAValue403 =
      (chunkJZLCHNYAParam61?.height
        ? chunkJZLCHNYAParam61?.height
        : bbox.height) +
      chunkJZLCHNYAValue401 * 2,
    chunkJZLCHNYAValue404 = chunkJZLCHNYAParam61.radius || 5,
    chunkJZLCHNYAValue405 = chunkJZLCHNYAParam61.taper || 5,
    { cssStyles } = chunkJZLCHNYAParam61,
    chunkJZLCHNYAValue406 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue407 = chunkATLVNIR6A(chunkJZLCHNYAParam61, {});
  chunkJZLCHNYAParam61.stroke &&
    (chunkJZLCHNYAValue407.stroke = chunkJZLCHNYAParam61.stroke);
  chunkJZLCHNYAParam61.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue407.roughness = 0),
    (chunkJZLCHNYAValue407.fillStyle = "solid"));
  let chunkJZLCHNYAValue408 = [
      {
        x: -chunkJZLCHNYAValue402 / 2 + chunkJZLCHNYAValue405,
        y: -chunkJZLCHNYAValue403 / 2,
      },
      {
        x: chunkJZLCHNYAValue402 / 2 - chunkJZLCHNYAValue405,
        y: -chunkJZLCHNYAValue403 / 2,
      },
      ...chunkJZLCHNYAHelper53(
        chunkJZLCHNYAValue402 / 2 - chunkJZLCHNYAValue405,
        -chunkJZLCHNYAValue403 / 2,
        chunkJZLCHNYAValue402 / 2,
        -chunkJZLCHNYAValue403 / 2 + chunkJZLCHNYAValue405,
        chunkJZLCHNYAValue404,
        chunkJZLCHNYAValue404,
        true,
      ),
      {
        x: chunkJZLCHNYAValue402 / 2,
        y: -chunkJZLCHNYAValue403 / 2 + chunkJZLCHNYAValue405,
      },
      {
        x: chunkJZLCHNYAValue402 / 2,
        y: chunkJZLCHNYAValue403 / 2 - chunkJZLCHNYAValue405,
      },
      ...chunkJZLCHNYAHelper53(
        chunkJZLCHNYAValue402 / 2,
        chunkJZLCHNYAValue403 / 2 - chunkJZLCHNYAValue405,
        chunkJZLCHNYAValue402 / 2 - chunkJZLCHNYAValue405,
        chunkJZLCHNYAValue403 / 2,
        chunkJZLCHNYAValue404,
        chunkJZLCHNYAValue404,
        true,
      ),
      {
        x: chunkJZLCHNYAValue402 / 2 - chunkJZLCHNYAValue405,
        y: chunkJZLCHNYAValue403 / 2,
      },
      {
        x: -chunkJZLCHNYAValue402 / 2 + chunkJZLCHNYAValue405,
        y: chunkJZLCHNYAValue403 / 2,
      },
      ...chunkJZLCHNYAHelper53(
        -chunkJZLCHNYAValue402 / 2 + chunkJZLCHNYAValue405,
        chunkJZLCHNYAValue403 / 2,
        -chunkJZLCHNYAValue402 / 2,
        chunkJZLCHNYAValue403 / 2 - chunkJZLCHNYAValue405,
        chunkJZLCHNYAValue404,
        chunkJZLCHNYAValue404,
        true,
      ),
      {
        x: -chunkJZLCHNYAValue402 / 2,
        y: chunkJZLCHNYAValue403 / 2 - chunkJZLCHNYAValue405,
      },
      {
        x: -chunkJZLCHNYAValue402 / 2,
        y: -chunkJZLCHNYAValue403 / 2 + chunkJZLCHNYAValue405,
      },
      ...chunkJZLCHNYAHelper53(
        -chunkJZLCHNYAValue402 / 2,
        -chunkJZLCHNYAValue403 / 2 + chunkJZLCHNYAValue405,
        -chunkJZLCHNYAValue402 / 2 + chunkJZLCHNYAValue405,
        -chunkJZLCHNYAValue403 / 2,
        chunkJZLCHNYAValue404,
        chunkJZLCHNYAValue404,
        true,
      ),
    ],
    chunkJZLCHNYAValue409 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue408),
    chunkJZLCHNYAValue410 = chunkJZLCHNYAValue406.path(
      chunkJZLCHNYAValue409,
      chunkJZLCHNYAValue407,
    ),
    chunkJZLCHNYAValue411 = shapeSvg.insert(
      () => chunkJZLCHNYAValue410,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue411.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunkJZLCHNYAParam61.look !== "handDrawn" &&
      chunkJZLCHNYAValue411.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam61.look !== "handDrawn" &&
      chunkJZLCHNYAValue411.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam61, chunkJZLCHNYAValue411),
    (chunkJZLCHNYAParam61.intersect = function (chunkJZLCHNYAParam364) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam61,
        chunkJZLCHNYAValue408,
        chunkJZLCHNYAParam364,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper54, "roundedRect");
async function chunkJZLCHNYAHelper55(
  chunkJZLCHNYAParam64,
  chunkJZLCHNYAParam65,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam65);
  chunkJZLCHNYAParam65.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam64,
      chunkJZLCHNYAParam65,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam65),
    ),
    chunkJZLCHNYAValue425 = chunkJZLCHNYAParam65?.padding ?? 0,
    chunkJZLCHNYAValue426 = Math.max(
      bbox.width + (chunkJZLCHNYAParam65.padding ?? 0) * 2,
      chunkJZLCHNYAParam65?.width ?? 0,
    ),
    chunkJZLCHNYAValue427 = Math.max(
      bbox.height + (chunkJZLCHNYAParam65.padding ?? 0) * 2,
      chunkJZLCHNYAParam65?.height ?? 0,
    ),
    chunkJZLCHNYAValue428 = -bbox.width / 2 - chunkJZLCHNYAValue425,
    chunkJZLCHNYAValue429 = -bbox.height / 2 - chunkJZLCHNYAValue425,
    { cssStyles } = chunkJZLCHNYAParam65,
    chunkJZLCHNYAValue430 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue431 = chunkATLVNIR6A(chunkJZLCHNYAParam65, {});
  chunkJZLCHNYAParam65.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue431.roughness = 0),
    (chunkJZLCHNYAValue431.fillStyle = "solid"));
  let chunkJZLCHNYAValue432 = [
      {
        x: chunkJZLCHNYAValue428,
        y: chunkJZLCHNYAValue429,
      },
      {
        x: chunkJZLCHNYAValue428 + chunkJZLCHNYAValue426 + 8,
        y: chunkJZLCHNYAValue429,
      },
      {
        x: chunkJZLCHNYAValue428 + chunkJZLCHNYAValue426 + 8,
        y: chunkJZLCHNYAValue429 + chunkJZLCHNYAValue427,
      },
      {
        x: chunkJZLCHNYAValue428 - 8,
        y: chunkJZLCHNYAValue429 + chunkJZLCHNYAValue427,
      },
      {
        x: chunkJZLCHNYAValue428 - 8,
        y: chunkJZLCHNYAValue429,
      },
      {
        x: chunkJZLCHNYAValue428,
        y: chunkJZLCHNYAValue429,
      },
      {
        x: chunkJZLCHNYAValue428,
        y: chunkJZLCHNYAValue429 + chunkJZLCHNYAValue427,
      },
    ],
    chunkJZLCHNYAValue433 = chunkJZLCHNYAValue430.polygon(
      chunkJZLCHNYAValue432.map((item) => [item.x, item.y]),
      chunkJZLCHNYAValue431,
    ),
    chunkJZLCHNYAValue434 = shapeSvg.insert(
      () => chunkJZLCHNYAValue433,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue434
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles)),
    nodeStyles &&
      chunkJZLCHNYAParam65.look !== "handDrawn" &&
      chunkJZLCHNYAValue434.selectAll("path").attr("style", nodeStyles),
    cssStyles &&
      chunkJZLCHNYAParam65.look !== "handDrawn" &&
      chunkJZLCHNYAValue434.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue426 / 2 + 4 + (chunkJZLCHNYAParam65.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue427 / 2 + (chunkJZLCHNYAParam65.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam65, chunkJZLCHNYAValue434),
    (chunkJZLCHNYAParam65.intersect = function (chunkJZLCHNYAParam401) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam65,
        chunkJZLCHNYAParam401,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper55, "shadedProcess");
async function chunkJZLCHNYAHelper56(
  chunkJZLCHNYAParam77,
  chunkJZLCHNYAParam78,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam78);
  chunkJZLCHNYAParam78.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam77,
      chunkJZLCHNYAParam78,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam78),
    ),
    chunkJZLCHNYAValue477 = Math.max(
      bbox.width + (chunkJZLCHNYAParam78.padding ?? 0) * 2,
      chunkJZLCHNYAParam78?.width ?? 0,
    ),
    chunkJZLCHNYAValue478 = Math.max(
      bbox.height + (chunkJZLCHNYAParam78.padding ?? 0) * 2,
      chunkJZLCHNYAParam78?.height ?? 0,
    ),
    chunkJZLCHNYAValue479 = -chunkJZLCHNYAValue477 / 2,
    chunkJZLCHNYAValue480 = -chunkJZLCHNYAValue478 / 2,
    { cssStyles } = chunkJZLCHNYAParam78,
    chunkJZLCHNYAValue481 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue482 = chunkATLVNIR6A(chunkJZLCHNYAParam78, {});
  chunkJZLCHNYAParam78.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue482.roughness = 0),
    (chunkJZLCHNYAValue482.fillStyle = "solid"));
  let chunkJZLCHNYAValue483 = [
      {
        x: chunkJZLCHNYAValue479,
        y: chunkJZLCHNYAValue480,
      },
      {
        x: chunkJZLCHNYAValue479,
        y: chunkJZLCHNYAValue480 + chunkJZLCHNYAValue478,
      },
      {
        x: chunkJZLCHNYAValue479 + chunkJZLCHNYAValue477,
        y: chunkJZLCHNYAValue480 + chunkJZLCHNYAValue478,
      },
      {
        x: chunkJZLCHNYAValue479 + chunkJZLCHNYAValue477,
        y: chunkJZLCHNYAValue480 - chunkJZLCHNYAValue478 / 2,
      },
    ],
    chunkJZLCHNYAValue484 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue483),
    chunkJZLCHNYAValue485 = chunkJZLCHNYAValue481.path(
      chunkJZLCHNYAValue484,
      chunkJZLCHNYAValue482,
    ),
    chunkJZLCHNYAValue486 = shapeSvg.insert(
      () => chunkJZLCHNYAValue485,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue486.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam78.look !== "handDrawn" &&
      chunkJZLCHNYAValue486.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam78.look !== "handDrawn" &&
      chunkJZLCHNYAValue486.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue486.attr(
      "transform",
      `translate(0, ${chunkJZLCHNYAValue478 / 4})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue477 / 2 + (chunkJZLCHNYAParam78.padding ?? 0) - (bbox.x - (bbox.left ?? 0))}, ${-chunkJZLCHNYAValue478 / 4 + (chunkJZLCHNYAParam78.padding ?? 0) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam78, chunkJZLCHNYAValue486),
    (chunkJZLCHNYAParam78.intersect = function (chunkJZLCHNYAParam365) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam78,
        chunkJZLCHNYAValue483,
        chunkJZLCHNYAParam365,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper56, "slopedRect");
async function chunkJZLCHNYAHelper57(
  chunkJZLCHNYAParam290,
  chunkJZLCHNYAParam291,
) {
  return chunkJZLCHNYAHelper41(chunkJZLCHNYAParam290, chunkJZLCHNYAParam291, {
    rx: 0,
    ry: 0,
    classes: "",
    labelPaddingX:
      chunkJZLCHNYAParam291.labelPaddingX ??
      (chunkJZLCHNYAParam291?.padding || 0) * 2,
    labelPaddingY: chunkJZLCHNYAParam291?.padding || 0,
  });
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper57, "squareRect");
async function at(chunkJZLCHNYAParam128, chunkJZLCHNYAParam129) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam129);
  chunkJZLCHNYAParam129.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam128,
      chunkJZLCHNYAParam129,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam129),
    ),
    chunkJZLCHNYAValue664 = bbox.height + chunkJZLCHNYAParam129.padding,
    chunkJZLCHNYAValue665 =
      bbox.width + chunkJZLCHNYAValue664 / 4 + chunkJZLCHNYAParam129.padding,
    chunkJZLCHNYAValue666 = chunkJZLCHNYAValue664 / 2,
    { cssStyles } = chunkJZLCHNYAParam129,
    chunkJZLCHNYAValue667 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue668 = chunkATLVNIR6A(chunkJZLCHNYAParam129, {});
  chunkJZLCHNYAParam129.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue668.roughness = 0),
    (chunkJZLCHNYAValue668.fillStyle = "solid"));
  let chunkJZLCHNYAValue669 = [
      {
        x: -chunkJZLCHNYAValue665 / 2 + chunkJZLCHNYAValue666,
        y: -chunkJZLCHNYAValue664 / 2,
      },
      {
        x: chunkJZLCHNYAValue665 / 2 - chunkJZLCHNYAValue666,
        y: -chunkJZLCHNYAValue664 / 2,
      },
      ...chunkJZLCHNYAHelper3(
        -chunkJZLCHNYAValue665 / 2 + chunkJZLCHNYAValue666,
        0,
        chunkJZLCHNYAValue666,
        50,
        90,
        270,
      ),
      {
        x: chunkJZLCHNYAValue665 / 2 - chunkJZLCHNYAValue666,
        y: chunkJZLCHNYAValue664 / 2,
      },
      ...chunkJZLCHNYAHelper3(
        chunkJZLCHNYAValue665 / 2 - chunkJZLCHNYAValue666,
        0,
        chunkJZLCHNYAValue666,
        50,
        270,
        450,
      ),
    ],
    chunkJZLCHNYAValue670 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue669),
    chunkJZLCHNYAValue671 = chunkJZLCHNYAValue667.path(
      chunkJZLCHNYAValue670,
      chunkJZLCHNYAValue668,
    ),
    chunkJZLCHNYAValue672 = shapeSvg.insert(
      () => chunkJZLCHNYAValue671,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue672.attr("class", "basic label-container outer-path"),
    cssStyles &&
      chunkJZLCHNYAParam129.look !== "handDrawn" &&
      chunkJZLCHNYAValue672.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam129.look !== "handDrawn" &&
      chunkJZLCHNYAValue672.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam129, chunkJZLCHNYAValue672),
    (chunkJZLCHNYAParam129.intersect = function (chunkJZLCHNYAParam366) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam129,
        chunkJZLCHNYAValue669,
        chunkJZLCHNYAParam366,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(at, "stadium");
async function chunkJZLCHNYAHelper58(
  chunkJZLCHNYAParam339,
  chunkJZLCHNYAParam340,
) {
  return chunkJZLCHNYAHelper41(chunkJZLCHNYAParam339, chunkJZLCHNYAParam340, {
    rx: 5,
    ry: 5,
    classes: "flowchart-node",
  });
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper58, "state");
function chunkJZLCHNYAHelper59(
  chunkJZLCHNYAParam143,
  chunkJZLCHNYAParam144,
  { config: { themeVariables } },
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam144);
  chunkJZLCHNYAParam144.labelStyle = labelStyles;
  let { cssStyles } = chunkJZLCHNYAParam144,
    { lineColor, stateBorder, nodeBorder } = themeVariables,
    chunkJZLCHNYAValue702 = chunkJZLCHNYAParam143
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunkJZLCHNYAParam144.domId || chunkJZLCHNYAParam144.id),
    chunkJZLCHNYAValue703 = rough.svg(chunkJZLCHNYAValue702),
    chunkJZLCHNYAValue704 = chunkATLVNIR6A(chunkJZLCHNYAParam144, {});
  chunkJZLCHNYAParam144.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue704.roughness = 0),
    (chunkJZLCHNYAValue704.fillStyle = "solid"));
  let chunkJZLCHNYAValue705 = chunkJZLCHNYAValue703.circle(0, 0, 14, {
      ...chunkJZLCHNYAValue704,
      stroke: lineColor,
      strokeWidth: 2,
    }),
    chunkJZLCHNYAValue706 = stateBorder ?? nodeBorder,
    chunkJZLCHNYAValue707 = chunkJZLCHNYAValue703.circle(0, 0, 5, {
      ...chunkJZLCHNYAValue704,
      fill: chunkJZLCHNYAValue706,
      stroke: chunkJZLCHNYAValue706,
      strokeWidth: 2,
      fillStyle: "solid",
    }),
    chunkJZLCHNYAValue708 = chunkJZLCHNYAValue702.insert(
      () => chunkJZLCHNYAValue705,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue708.insert(() => chunkJZLCHNYAValue707),
    cssStyles &&
      chunkJZLCHNYAValue708.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAValue708.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam144, chunkJZLCHNYAValue708),
    (chunkJZLCHNYAParam144.intersect = function (chunkJZLCHNYAParam375) {
      return chunkJZLCHNYAValue12.circle(
        chunkJZLCHNYAParam144,
        7,
        chunkJZLCHNYAParam375,
      );
    }),
    chunkJZLCHNYAValue702
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper59, "stateEnd");
function chunkJZLCHNYAHelper60(
  chunkJZLCHNYAParam180,
  chunkJZLCHNYAParam181,
  { config: { themeVariables } },
) {
  let { lineColor } = themeVariables,
    chunkJZLCHNYAValue787 = chunkJZLCHNYAParam180
      .insert("g")
      .attr("class", "node default")
      .attr("id", chunkJZLCHNYAParam181.domId || chunkJZLCHNYAParam181.id),
    chunkJZLCHNYAValue788;
  if (chunkJZLCHNYAParam181.look === "handDrawn") {
    let chunkJZLCHNYAValue1025 = rough
      .svg(chunkJZLCHNYAValue787)
      .circle(0, 0, 14, chunkATLVNIR6N(lineColor));
    chunkJZLCHNYAValue788 = chunkJZLCHNYAValue787.insert(
      () => chunkJZLCHNYAValue1025,
    );
    chunkJZLCHNYAValue788
      .attr("class", "state-start")
      .attr("r", 7)
      .attr("width", 14)
      .attr("height", 14);
  } else {
    chunkJZLCHNYAValue788 = chunkJZLCHNYAValue787.insert(
      "circle",
      ":first-child",
    );
    chunkJZLCHNYAValue788
      .attr("class", "state-start")
      .attr("r", 7)
      .attr("width", 14)
      .attr("height", 14);
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam181, chunkJZLCHNYAValue788),
    (chunkJZLCHNYAParam181.intersect = function (chunkJZLCHNYAParam376) {
      return chunkJZLCHNYAValue12.circle(
        chunkJZLCHNYAParam181,
        7,
        chunkJZLCHNYAParam376,
      );
    }),
    chunkJZLCHNYAValue787
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper60, "stateStart");
async function chunkJZLCHNYAHelper61(
  chunkJZLCHNYAParam98,
  chunkJZLCHNYAParam99,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam99);
  chunkJZLCHNYAParam99.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam98,
      chunkJZLCHNYAParam99,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam99),
    ),
    chunkJZLCHNYAValue564 = (chunkJZLCHNYAParam99?.padding || 0) / 2,
    chunkJZLCHNYAValue565 = bbox.width + chunkJZLCHNYAParam99.padding,
    chunkJZLCHNYAValue566 = bbox.height + chunkJZLCHNYAParam99.padding,
    chunkJZLCHNYAValue567 = -bbox.width / 2 - chunkJZLCHNYAValue564,
    chunkJZLCHNYAValue568 = -bbox.height / 2 - chunkJZLCHNYAValue564,
    chunkJZLCHNYAValue569 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue565,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue565,
        y: -chunkJZLCHNYAValue566,
      },
      {
        x: 0,
        y: -chunkJZLCHNYAValue566,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: -8,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue565 + 8,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue565 + 8,
        y: -chunkJZLCHNYAValue566,
      },
      {
        x: -8,
        y: -chunkJZLCHNYAValue566,
      },
      {
        x: -8,
        y: 0,
      },
    ];
  if (chunkJZLCHNYAParam99.look === "handDrawn") {
    let chunkJZLCHNYAValue894 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue895 = chunkATLVNIR6A(chunkJZLCHNYAParam99, {}),
      chunkJZLCHNYAValue896 = chunkJZLCHNYAValue894.rectangle(
        chunkJZLCHNYAValue567 - 8,
        chunkJZLCHNYAValue568,
        chunkJZLCHNYAValue565 + 16,
        chunkJZLCHNYAValue566,
        chunkJZLCHNYAValue895,
      ),
      chunkJZLCHNYAValue897 = chunkJZLCHNYAValue894.line(
        chunkJZLCHNYAValue567,
        chunkJZLCHNYAValue568,
        chunkJZLCHNYAValue567,
        chunkJZLCHNYAValue568 + chunkJZLCHNYAValue566,
        chunkJZLCHNYAValue895,
      ),
      chunkJZLCHNYAValue898 = chunkJZLCHNYAValue894.line(
        chunkJZLCHNYAValue567 + chunkJZLCHNYAValue565,
        chunkJZLCHNYAValue568,
        chunkJZLCHNYAValue567 + chunkJZLCHNYAValue565,
        chunkJZLCHNYAValue568 + chunkJZLCHNYAValue566,
        chunkJZLCHNYAValue895,
      );
    shapeSvg.insert(() => chunkJZLCHNYAValue897, ":first-child");
    shapeSvg.insert(() => chunkJZLCHNYAValue898, ":first-child");
    let chunkJZLCHNYAValue899 = shapeSvg.insert(
        () => chunkJZLCHNYAValue896,
        ":first-child",
      ),
      { cssStyles } = chunkJZLCHNYAParam99;
    chunkJZLCHNYAValue899
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles));
    chunkJZLCHNYAU(chunkJZLCHNYAParam99, chunkJZLCHNYAValue899);
  } else {
    let chunkJZLCHNYAValue1107 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue565,
      chunkJZLCHNYAValue566,
      chunkJZLCHNYAValue569,
    );
    nodeStyles && chunkJZLCHNYAValue1107.attr("style", nodeStyles);
    chunkJZLCHNYAU(chunkJZLCHNYAParam99, chunkJZLCHNYAValue1107);
  }
  return (
    (chunkJZLCHNYAParam99.intersect = function (chunkJZLCHNYAParam367) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam99,
        chunkJZLCHNYAValue569,
        chunkJZLCHNYAParam367,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper61, "subroutine");
async function chunkJZLCHNYAHelper62(
  chunkJZLCHNYAParam75,
  chunkJZLCHNYAParam76,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam76);
  chunkJZLCHNYAParam76.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam75,
      chunkJZLCHNYAParam76,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam76),
    ),
    chunkJZLCHNYAValue462 = Math.max(
      bbox.width + (chunkJZLCHNYAParam76.padding ?? 0) * 2,
      chunkJZLCHNYAParam76?.width ?? 0,
    ),
    chunkJZLCHNYAValue463 = Math.max(
      bbox.height + (chunkJZLCHNYAParam76.padding ?? 0) * 2,
      chunkJZLCHNYAParam76?.height ?? 0,
    ),
    chunkJZLCHNYAValue464 = -chunkJZLCHNYAValue462 / 2,
    chunkJZLCHNYAValue465 = -chunkJZLCHNYAValue463 / 2,
    chunkJZLCHNYAValue466 = 0.2 * chunkJZLCHNYAValue463,
    chunkJZLCHNYAValue467 = 0.2 * chunkJZLCHNYAValue463,
    { cssStyles } = chunkJZLCHNYAParam76,
    chunkJZLCHNYAValue468 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue469 = chunkATLVNIR6A(chunkJZLCHNYAParam76, {}),
    chunkJZLCHNYAValue470 = [
      {
        x: chunkJZLCHNYAValue464 - chunkJZLCHNYAValue466 / 2,
        y: chunkJZLCHNYAValue465,
      },
      {
        x:
          chunkJZLCHNYAValue464 +
          chunkJZLCHNYAValue462 +
          chunkJZLCHNYAValue466 / 2,
        y: chunkJZLCHNYAValue465,
      },
      {
        x:
          chunkJZLCHNYAValue464 +
          chunkJZLCHNYAValue462 +
          chunkJZLCHNYAValue466 / 2,
        y: chunkJZLCHNYAValue465 + chunkJZLCHNYAValue463,
      },
      {
        x: chunkJZLCHNYAValue464 - chunkJZLCHNYAValue466 / 2,
        y: chunkJZLCHNYAValue465 + chunkJZLCHNYAValue463,
      },
    ],
    chunkJZLCHNYAValue471 = [
      {
        x:
          chunkJZLCHNYAValue464 +
          chunkJZLCHNYAValue462 -
          chunkJZLCHNYAValue466 / 2,
        y: chunkJZLCHNYAValue465 + chunkJZLCHNYAValue463,
      },
      {
        x:
          chunkJZLCHNYAValue464 +
          chunkJZLCHNYAValue462 +
          chunkJZLCHNYAValue466 / 2,
        y: chunkJZLCHNYAValue465 + chunkJZLCHNYAValue463,
      },
      {
        x:
          chunkJZLCHNYAValue464 +
          chunkJZLCHNYAValue462 +
          chunkJZLCHNYAValue466 / 2,
        y:
          chunkJZLCHNYAValue465 + chunkJZLCHNYAValue463 - chunkJZLCHNYAValue467,
      },
    ];
  chunkJZLCHNYAParam76.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue469.roughness = 0),
    (chunkJZLCHNYAValue469.fillStyle = "solid"));
  let chunkJZLCHNYAValue472 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue470),
    chunkJZLCHNYAValue473 = chunkJZLCHNYAValue468.path(
      chunkJZLCHNYAValue472,
      chunkJZLCHNYAValue469,
    ),
    chunkJZLCHNYAValue474 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue471),
    chunkJZLCHNYAValue475 = chunkJZLCHNYAValue468.path(chunkJZLCHNYAValue474, {
      ...chunkJZLCHNYAValue469,
      fillStyle: "solid",
    }),
    chunkJZLCHNYAValue476 = shapeSvg.insert(
      () => chunkJZLCHNYAValue475,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue476.insert(() => chunkJZLCHNYAValue473, ":first-child"),
    chunkJZLCHNYAValue476.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam76.look !== "handDrawn" &&
      chunkJZLCHNYAValue476.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam76.look !== "handDrawn" &&
      chunkJZLCHNYAValue476.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam76, chunkJZLCHNYAValue476),
    (chunkJZLCHNYAParam76.intersect = function (chunkJZLCHNYAParam368) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam76,
        chunkJZLCHNYAValue470,
        chunkJZLCHNYAParam368,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper62, "taggedRect");
async function chunkJZLCHNYAHelper63(
  chunkJZLCHNYAParam47,
  chunkJZLCHNYAParam48,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam48);
  chunkJZLCHNYAParam48.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam47,
      chunkJZLCHNYAParam48,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam48),
    ),
    chunkJZLCHNYAValue340 = Math.max(
      bbox.width + (chunkJZLCHNYAParam48.padding ?? 0) * 2,
      chunkJZLCHNYAParam48?.width ?? 0,
    ),
    chunkJZLCHNYAValue341 = Math.max(
      bbox.height + (chunkJZLCHNYAParam48.padding ?? 0) * 2,
      chunkJZLCHNYAParam48?.height ?? 0,
    ),
    chunkJZLCHNYAValue342 = chunkJZLCHNYAValue341 / 4,
    chunkJZLCHNYAValue343 = 0.2 * chunkJZLCHNYAValue340,
    chunkJZLCHNYAValue344 = 0.2 * chunkJZLCHNYAValue341,
    chunkJZLCHNYAValue345 = chunkJZLCHNYAValue341 + chunkJZLCHNYAValue342,
    { cssStyles } = chunkJZLCHNYAParam48,
    chunkJZLCHNYAValue346 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue347 = chunkATLVNIR6A(chunkJZLCHNYAParam48, {});
  chunkJZLCHNYAParam48.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue347.roughness = 0),
    (chunkJZLCHNYAValue347.fillStyle = "solid"));
  let chunkJZLCHNYAValue348 = [
      {
        x: -chunkJZLCHNYAValue340 / 2 - (chunkJZLCHNYAValue340 / 2) * 0.1,
        y: chunkJZLCHNYAValue345 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYAValue340 / 2 - (chunkJZLCHNYAValue340 / 2) * 0.1,
        chunkJZLCHNYAValue345 / 2,
        chunkJZLCHNYAValue340 / 2 + (chunkJZLCHNYAValue340 / 2) * 0.1,
        chunkJZLCHNYAValue345 / 2,
        chunkJZLCHNYAValue342,
        0.8,
      ),
      {
        x: chunkJZLCHNYAValue340 / 2 + (chunkJZLCHNYAValue340 / 2) * 0.1,
        y: -chunkJZLCHNYAValue345 / 2,
      },
      {
        x: -chunkJZLCHNYAValue340 / 2 - (chunkJZLCHNYAValue340 / 2) * 0.1,
        y: -chunkJZLCHNYAValue345 / 2,
      },
    ],
    chunkJZLCHNYAValue349 =
      -chunkJZLCHNYAValue340 / 2 + (chunkJZLCHNYAValue340 / 2) * 0.1,
    chunkJZLCHNYAValue350 =
      -chunkJZLCHNYAValue345 / 2 - chunkJZLCHNYAValue344 * 0.4,
    chunkJZLCHNYAValue351 = [
      {
        x:
          chunkJZLCHNYAValue349 + chunkJZLCHNYAValue340 - chunkJZLCHNYAValue343,
        y: (chunkJZLCHNYAValue350 + chunkJZLCHNYAValue341) * 1.4,
      },
      {
        x: chunkJZLCHNYAValue349 + chunkJZLCHNYAValue340,
        y:
          chunkJZLCHNYAValue350 + chunkJZLCHNYAValue341 - chunkJZLCHNYAValue344,
      },
      {
        x: chunkJZLCHNYAValue349 + chunkJZLCHNYAValue340,
        y: (chunkJZLCHNYAValue350 + chunkJZLCHNYAValue341) * 0.9,
      },
      ...chunkJZLCHNYAHelper2(
        chunkJZLCHNYAValue349 + chunkJZLCHNYAValue340,
        (chunkJZLCHNYAValue350 + chunkJZLCHNYAValue341) * 1.3,
        chunkJZLCHNYAValue349 + chunkJZLCHNYAValue340 - chunkJZLCHNYAValue343,
        (chunkJZLCHNYAValue350 + chunkJZLCHNYAValue341) * 1.5,
        -chunkJZLCHNYAValue341 * 0.03,
        0.5,
      ),
    ],
    chunkJZLCHNYAValue352 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue348),
    chunkJZLCHNYAValue353 = chunkJZLCHNYAValue346.path(
      chunkJZLCHNYAValue352,
      chunkJZLCHNYAValue347,
    ),
    chunkJZLCHNYAValue354 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue351),
    chunkJZLCHNYAValue355 = chunkJZLCHNYAValue346.path(chunkJZLCHNYAValue354, {
      ...chunkJZLCHNYAValue347,
      fillStyle: "solid",
    }),
    chunkJZLCHNYAValue356 = shapeSvg.insert(
      () => chunkJZLCHNYAValue355,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue356.insert(() => chunkJZLCHNYAValue353, ":first-child"),
    chunkJZLCHNYAValue356.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam48.look !== "handDrawn" &&
      chunkJZLCHNYAValue356.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam48.look !== "handDrawn" &&
      chunkJZLCHNYAValue356.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue356.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYAValue342 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue340 / 2 + (chunkJZLCHNYAParam48.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue341 / 2 + (chunkJZLCHNYAParam48.padding ?? 0) - chunkJZLCHNYAValue342 / 2 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam48, chunkJZLCHNYAValue356),
    (chunkJZLCHNYAParam48.intersect = function (chunkJZLCHNYAParam369) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam48,
        chunkJZLCHNYAValue348,
        chunkJZLCHNYAParam369,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper63, "taggedWaveEdgedRectangle");
async function chunkJZLCHNYAHelper64(
  chunkJZLCHNYAParam193,
  chunkJZLCHNYAParam194,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam194);
  chunkJZLCHNYAParam194.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam193,
      chunkJZLCHNYAParam194,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam194),
    ),
    chunkJZLCHNYAValue826 = Math.max(
      bbox.width + chunkJZLCHNYAParam194.padding,
      chunkJZLCHNYAParam194?.width || 0,
    ),
    chunkJZLCHNYAValue827 = Math.max(
      bbox.height + chunkJZLCHNYAParam194.padding,
      chunkJZLCHNYAParam194?.height || 0,
    ),
    chunkJZLCHNYAValue828 = -chunkJZLCHNYAValue826 / 2,
    chunkJZLCHNYAValue829 = -chunkJZLCHNYAValue827 / 2,
    chunkJZLCHNYAValue830 = shapeSvg.insert("rect", ":first-child");
  return (
    chunkJZLCHNYAValue830
      .attr("class", "text")
      .attr("style", nodeStyles)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("x", chunkJZLCHNYAValue828)
      .attr("y", chunkJZLCHNYAValue829)
      .attr("width", chunkJZLCHNYAValue826)
      .attr("height", chunkJZLCHNYAValue827),
    chunkJZLCHNYAU(chunkJZLCHNYAParam194, chunkJZLCHNYAValue830),
    (chunkJZLCHNYAParam194.intersect = function (chunkJZLCHNYAParam402) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam194,
        chunkJZLCHNYAParam402,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper64, "text");
var chunkJZLCHNYAValue20 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam295,
      chunkJZLCHNYAParam296,
      chunkJZLCHNYAParam297,
      chunkJZLCHNYAParam298,
      chunkJZLCHNYAParam299,
      chunkJZLCHNYAParam300,
    ) => `M${chunkJZLCHNYAParam295},${chunkJZLCHNYAParam296}
    a${chunkJZLCHNYAParam299},${chunkJZLCHNYAParam300} 0,0,1 0,${-chunkJZLCHNYAParam298}
    l${chunkJZLCHNYAParam297},0
    a${chunkJZLCHNYAParam299},${chunkJZLCHNYAParam300} 0,0,1 0,${chunkJZLCHNYAParam298}
    M${chunkJZLCHNYAParam297},${-chunkJZLCHNYAParam298}
    a${chunkJZLCHNYAParam299},${chunkJZLCHNYAParam300} 0,0,0 0,${chunkJZLCHNYAParam298}
    l${-chunkJZLCHNYAParam297},0`,
    "createCylinderPathD",
  ),
  chunkJZLCHNYAValue21 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam284,
      chunkJZLCHNYAParam285,
      chunkJZLCHNYAParam286,
      chunkJZLCHNYAParam287,
      chunkJZLCHNYAParam288,
      chunkJZLCHNYAParam289,
    ) =>
      [
        `M${chunkJZLCHNYAParam284},${chunkJZLCHNYAParam285}`,
        `M${chunkJZLCHNYAParam284 + chunkJZLCHNYAParam286},${chunkJZLCHNYAParam285}`,
        `a${chunkJZLCHNYAParam288},${chunkJZLCHNYAParam289} 0,0,0 0,${-chunkJZLCHNYAParam287}`,
        `l${-chunkJZLCHNYAParam286},0`,
        `a${chunkJZLCHNYAParam288},${chunkJZLCHNYAParam289} 0,0,0 0,${chunkJZLCHNYAParam287}`,
        `l${chunkJZLCHNYAParam286},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  chunkJZLCHNYAValue22 = chunkAGHRB4JFN(
    (
      chunkJZLCHNYAParam331,
      chunkJZLCHNYAParam332,
      chunkJZLCHNYAParam333,
      chunkJZLCHNYAParam334,
      chunkJZLCHNYAParam335,
      chunkJZLCHNYAParam336,
    ) =>
      [
        `M${chunkJZLCHNYAParam331 + chunkJZLCHNYAParam333 / 2},${-chunkJZLCHNYAParam334 / 2}`,
        `a${chunkJZLCHNYAParam335},${chunkJZLCHNYAParam336} 0,0,0 0,${chunkJZLCHNYAParam334}`,
      ].join(" "),
    "createInnerCylinderPathD",
  );
async function chunkJZLCHNYAHelper65(
  chunkJZLCHNYAParam31,
  chunkJZLCHNYAParam32,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam32);
  chunkJZLCHNYAParam32.labelStyle = labelStyles;
  let { shapeSvg, bbox, label, halfPadding } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam31,
      chunkJZLCHNYAParam32,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam32),
    ),
    chunkJZLCHNYAValue252 =
      chunkJZLCHNYAParam32.look === "neo" ? halfPadding * 2 : halfPadding,
    chunkJZLCHNYAValue253 = bbox.height + chunkJZLCHNYAValue252,
    chunkJZLCHNYAValue254 = chunkJZLCHNYAValue253 / 2,
    chunkJZLCHNYAValue255 =
      chunkJZLCHNYAValue254 / (2.5 + chunkJZLCHNYAValue253 / 50),
    chunkJZLCHNYAValue256 =
      bbox.width + chunkJZLCHNYAValue255 + chunkJZLCHNYAValue252,
    { cssStyles } = chunkJZLCHNYAParam32,
    chunkJZLCHNYAValue257;
  if (chunkJZLCHNYAParam32.look === "handDrawn") {
    let chunkJZLCHNYAValue937 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue938 = chunkJZLCHNYAValue21(
        0,
        0,
        chunkJZLCHNYAValue256,
        chunkJZLCHNYAValue253,
        chunkJZLCHNYAValue255,
        chunkJZLCHNYAValue254,
      ),
      chunkJZLCHNYAValue939 = chunkJZLCHNYAValue22(
        0,
        0,
        chunkJZLCHNYAValue256,
        chunkJZLCHNYAValue253,
        chunkJZLCHNYAValue255,
        chunkJZLCHNYAValue254,
      ),
      chunkJZLCHNYAValue940 = chunkJZLCHNYAValue937.path(
        chunkJZLCHNYAValue938,
        chunkATLVNIR6A(chunkJZLCHNYAParam32, {}),
      ),
      chunkJZLCHNYAValue941 = chunkJZLCHNYAValue937.path(
        chunkJZLCHNYAValue939,
        chunkATLVNIR6A(chunkJZLCHNYAParam32, {
          fill: "none",
        }),
      );
    chunkJZLCHNYAValue257 = shapeSvg.insert(
      () => chunkJZLCHNYAValue941,
      ":first-child",
    );
    chunkJZLCHNYAValue257 = shapeSvg.insert(
      () => chunkJZLCHNYAValue940,
      ":first-child",
    );
    chunkJZLCHNYAValue257.attr("class", "basic label-container");
    cssStyles && chunkJZLCHNYAValue257.attr("style", cssStyles);
  } else {
    let chunkJZLCHNYAValue915 = chunkJZLCHNYAValue20(
      0,
      0,
      chunkJZLCHNYAValue256,
      chunkJZLCHNYAValue253,
      chunkJZLCHNYAValue255,
      chunkJZLCHNYAValue254,
    );
    chunkJZLCHNYAValue257 = shapeSvg
      .insert("path", ":first-child")
      .attr("d", chunkJZLCHNYAValue915)
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles))
      .attr("style", nodeStyles);
    chunkJZLCHNYAValue257.attr("class", "basic label-container");
    cssStyles &&
      chunkJZLCHNYAValue257.selectAll("path").attr("style", cssStyles);
    nodeStyles &&
      chunkJZLCHNYAValue257.selectAll("path").attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYAValue257.attr("label-offset-x", chunkJZLCHNYAValue255),
    chunkJZLCHNYAValue257.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue256 / 2}, ${chunkJZLCHNYAValue253 / 2} )`,
    ),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) - chunkJZLCHNYAValue255 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam32, chunkJZLCHNYAValue257),
    (chunkJZLCHNYAParam32.intersect = function (chunkJZLCHNYAParam204) {
      let chunkJZLCHNYAValue848 = chunkJZLCHNYAValue12.rect(
          chunkJZLCHNYAParam32,
          chunkJZLCHNYAParam204,
        ),
        chunkJZLCHNYAValue849 =
          chunkJZLCHNYAValue848.y - (chunkJZLCHNYAParam32.y ?? 0);
      if (
        chunkJZLCHNYAValue254 != 0 &&
        (Math.abs(chunkJZLCHNYAValue849) <
          (chunkJZLCHNYAParam32.height ?? 0) / 2 ||
          (Math.abs(chunkJZLCHNYAValue849) ==
            (chunkJZLCHNYAParam32.height ?? 0) / 2 &&
            Math.abs(chunkJZLCHNYAValue848.x - (chunkJZLCHNYAParam32.x ?? 0)) >
              (chunkJZLCHNYAParam32.width ?? 0) / 2 - chunkJZLCHNYAValue255))
      ) {
        let chunkJZLCHNYAValue1030 =
          chunkJZLCHNYAValue255 *
          chunkJZLCHNYAValue255 *
          (1 -
            (chunkJZLCHNYAValue849 * chunkJZLCHNYAValue849) /
              (chunkJZLCHNYAValue254 * chunkJZLCHNYAValue254));
        chunkJZLCHNYAValue1030 != 0 &&
          (chunkJZLCHNYAValue1030 = Math.sqrt(
            Math.abs(chunkJZLCHNYAValue1030),
          ));
        chunkJZLCHNYAValue1030 = chunkJZLCHNYAValue255 - chunkJZLCHNYAValue1030;
        chunkJZLCHNYAParam204.x - (chunkJZLCHNYAParam32.x ?? 0) > 0 &&
          (chunkJZLCHNYAValue1030 = -chunkJZLCHNYAValue1030);
        chunkJZLCHNYAValue848.x += chunkJZLCHNYAValue1030;
      }
      return chunkJZLCHNYAValue848;
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper65, "tiltedCylinder");
async function _t(chunkJZLCHNYAParam157, chunkJZLCHNYAParam158) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam158);
  chunkJZLCHNYAParam158.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam157,
      chunkJZLCHNYAParam158,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam158),
    ),
    chunkJZLCHNYAValue735 = bbox.width + chunkJZLCHNYAParam158.padding,
    chunkJZLCHNYAValue736 = bbox.height + chunkJZLCHNYAParam158.padding,
    chunkJZLCHNYAValue737 = [
      {
        x: (-3 * chunkJZLCHNYAValue736) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue735 + (3 * chunkJZLCHNYAValue736) / 6,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue735,
        y: -chunkJZLCHNYAValue736,
      },
      {
        x: 0,
        y: -chunkJZLCHNYAValue736,
      },
    ],
    chunkJZLCHNYAValue738,
    { cssStyles } = chunkJZLCHNYAParam158;
  if (chunkJZLCHNYAParam158.look === "handDrawn") {
    let chunkJZLCHNYAValue1018 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1019 = chunkATLVNIR6A(chunkJZLCHNYAParam158, {}),
      chunkJZLCHNYAValue1020 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue737),
      chunkJZLCHNYAValue1021 = chunkJZLCHNYAValue1018.path(
        chunkJZLCHNYAValue1020,
        chunkJZLCHNYAValue1019,
      );
    chunkJZLCHNYAValue738 = shapeSvg
      .insert(() => chunkJZLCHNYAValue1021, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue735 / 2}, ${chunkJZLCHNYAValue736 / 2})`,
      );
    cssStyles && chunkJZLCHNYAValue738.attr("style", cssStyles);
  } else
    chunkJZLCHNYAValue738 = chunkJZLCHNYAHelper15(
      shapeSvg,
      chunkJZLCHNYAValue735,
      chunkJZLCHNYAValue736,
      chunkJZLCHNYAValue737,
    );
  return (
    nodeStyles && chunkJZLCHNYAValue738.attr("style", nodeStyles),
    (chunkJZLCHNYAParam158.width = chunkJZLCHNYAValue735),
    (chunkJZLCHNYAParam158.height = chunkJZLCHNYAValue736),
    chunkJZLCHNYAU(chunkJZLCHNYAParam158, chunkJZLCHNYAValue738),
    (chunkJZLCHNYAParam158.intersect = function (chunkJZLCHNYAParam370) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam158,
        chunkJZLCHNYAValue737,
        chunkJZLCHNYAParam370,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(_t, "trapezoid");
async function chunkJZLCHNYAHelper66(
  chunkJZLCHNYAParam118,
  chunkJZLCHNYAParam119,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam119);
  chunkJZLCHNYAParam119.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam118,
      chunkJZLCHNYAParam119,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam119),
    ),
    chunkJZLCHNYAValue623 = Math.max(
      60,
      bbox.width + (chunkJZLCHNYAParam119.padding ?? 0) * 2,
      chunkJZLCHNYAParam119?.width ?? 0,
    ),
    chunkJZLCHNYAValue624 = Math.max(
      20,
      bbox.height + (chunkJZLCHNYAParam119.padding ?? 0) * 2,
      chunkJZLCHNYAParam119?.height ?? 0,
    ),
    { cssStyles } = chunkJZLCHNYAParam119,
    chunkJZLCHNYAValue625 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue626 = chunkATLVNIR6A(chunkJZLCHNYAParam119, {});
  chunkJZLCHNYAParam119.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue626.roughness = 0),
    (chunkJZLCHNYAValue626.fillStyle = "solid"));
  let chunkJZLCHNYAValue627 = [
      {
        x: (-chunkJZLCHNYAValue623 / 2) * 0.8,
        y: -chunkJZLCHNYAValue624 / 2,
      },
      {
        x: (chunkJZLCHNYAValue623 / 2) * 0.8,
        y: -chunkJZLCHNYAValue624 / 2,
      },
      {
        x: chunkJZLCHNYAValue623 / 2,
        y: (-chunkJZLCHNYAValue624 / 2) * 0.6,
      },
      {
        x: chunkJZLCHNYAValue623 / 2,
        y: chunkJZLCHNYAValue624 / 2,
      },
      {
        x: -chunkJZLCHNYAValue623 / 2,
        y: chunkJZLCHNYAValue624 / 2,
      },
      {
        x: -chunkJZLCHNYAValue623 / 2,
        y: (-chunkJZLCHNYAValue624 / 2) * 0.6,
      },
    ],
    chunkJZLCHNYAValue628 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue627),
    chunkJZLCHNYAValue629 = chunkJZLCHNYAValue625.path(
      chunkJZLCHNYAValue628,
      chunkJZLCHNYAValue626,
    ),
    chunkJZLCHNYAValue630 = shapeSvg.insert(
      () => chunkJZLCHNYAValue629,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue630.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam119.look !== "handDrawn" &&
      chunkJZLCHNYAValue630.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam119.look !== "handDrawn" &&
      chunkJZLCHNYAValue630.selectChildren("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam119, chunkJZLCHNYAValue630),
    (chunkJZLCHNYAParam119.intersect = function (chunkJZLCHNYAParam371) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam119,
        chunkJZLCHNYAValue627,
        chunkJZLCHNYAParam371,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper66, "trapezoidalPentagon");
async function chunkJZLCHNYAHelper67(
  chunkJZLCHNYAParam89,
  chunkJZLCHNYAParam90,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam90);
  chunkJZLCHNYAParam90.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam89,
      chunkJZLCHNYAParam90,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam90),
    ),
    chunkJZLCHNYAValue528 = chunkABZYJK2DV(
      _chunkABZYJK2DL().flowchart?.htmlLabels,
    ),
    chunkJZLCHNYAValue529 = bbox.width + (chunkJZLCHNYAParam90.padding ?? 0),
    chunkJZLCHNYAValue530 = chunkJZLCHNYAValue529 + bbox.height,
    chunkJZLCHNYAValue531 = chunkJZLCHNYAValue529 + bbox.height,
    chunkJZLCHNYAValue532 = [
      {
        x: 0,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue531,
        y: 0,
      },
      {
        x: chunkJZLCHNYAValue531 / 2,
        y: -chunkJZLCHNYAValue530,
      },
    ],
    { cssStyles } = chunkJZLCHNYAParam90,
    chunkJZLCHNYAValue533 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue534 = chunkATLVNIR6A(chunkJZLCHNYAParam90, {});
  chunkJZLCHNYAParam90.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue534.roughness = 0),
    (chunkJZLCHNYAValue534.fillStyle = "solid"));
  let chunkJZLCHNYAValue535 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue532),
    chunkJZLCHNYAValue536 = chunkJZLCHNYAValue533.path(
      chunkJZLCHNYAValue535,
      chunkJZLCHNYAValue534,
    ),
    chunkJZLCHNYAValue537 = shapeSvg
      .insert(() => chunkJZLCHNYAValue536, ":first-child")
      .attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue530 / 2}, ${chunkJZLCHNYAValue530 / 2})`,
      );
  return (
    cssStyles &&
      chunkJZLCHNYAParam90.look !== "handDrawn" &&
      chunkJZLCHNYAValue537.selectChildren("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam90.look !== "handDrawn" &&
      chunkJZLCHNYAValue537.selectChildren("path").attr("style", nodeStyles),
    (chunkJZLCHNYAParam90.width = chunkJZLCHNYAValue529),
    (chunkJZLCHNYAParam90.height = chunkJZLCHNYAValue530),
    chunkJZLCHNYAU(chunkJZLCHNYAParam90, chunkJZLCHNYAValue537),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2 - (bbox.x - (bbox.left ?? 0))}, ${chunkJZLCHNYAValue530 / 2 - (bbox.height + (chunkJZLCHNYAParam90.padding ?? 0) / (chunkJZLCHNYAValue528 ? 2 : 1) - (bbox.y - (bbox.top ?? 0)))})`,
    ),
    (chunkJZLCHNYAParam90.intersect = function (chunkJZLCHNYAParam318) {
      return (
        chunkAGHRB4JFR.info(
          "Triangle intersect",
          chunkJZLCHNYAParam90,
          chunkJZLCHNYAValue532,
          chunkJZLCHNYAParam318,
        ),
        chunkJZLCHNYAValue12.polygon(
          chunkJZLCHNYAParam90,
          chunkJZLCHNYAValue532,
          chunkJZLCHNYAParam318,
        )
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper67, "triangle");
async function chunkJZLCHNYAHelper68(
  chunkJZLCHNYAParam73,
  chunkJZLCHNYAParam74,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam74);
  chunkJZLCHNYAParam74.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam73,
      chunkJZLCHNYAParam74,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam74),
    ),
    chunkJZLCHNYAValue450 = Math.max(
      bbox.width + (chunkJZLCHNYAParam74.padding ?? 0) * 2,
      chunkJZLCHNYAParam74?.width ?? 0,
    ),
    chunkJZLCHNYAValue451 = Math.max(
      bbox.height + (chunkJZLCHNYAParam74.padding ?? 0) * 2,
      chunkJZLCHNYAParam74?.height ?? 0,
    ),
    chunkJZLCHNYAValue452 = chunkJZLCHNYAValue451 / 8,
    chunkJZLCHNYAValue453 = chunkJZLCHNYAValue451 + chunkJZLCHNYAValue452,
    { cssStyles } = chunkJZLCHNYAParam74,
    chunkJZLCHNYAValue454 = 70 - chunkJZLCHNYAValue450,
    chunkJZLCHNYAValue455 =
      chunkJZLCHNYAValue454 > 0 ? chunkJZLCHNYAValue454 / 2 : 0,
    chunkJZLCHNYAValue456 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue457 = chunkATLVNIR6A(chunkJZLCHNYAParam74, {});
  chunkJZLCHNYAParam74.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue457.roughness = 0),
    (chunkJZLCHNYAValue457.fillStyle = "solid"));
  let chunkJZLCHNYAValue458 = [
      {
        x: -chunkJZLCHNYAValue450 / 2 - chunkJZLCHNYAValue455,
        y: chunkJZLCHNYAValue453 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYAValue450 / 2 - chunkJZLCHNYAValue455,
        chunkJZLCHNYAValue453 / 2,
        chunkJZLCHNYAValue450 / 2 + chunkJZLCHNYAValue455,
        chunkJZLCHNYAValue453 / 2,
        chunkJZLCHNYAValue452,
        0.8,
      ),
      {
        x: chunkJZLCHNYAValue450 / 2 + chunkJZLCHNYAValue455,
        y: -chunkJZLCHNYAValue453 / 2,
      },
      {
        x: -chunkJZLCHNYAValue450 / 2 - chunkJZLCHNYAValue455,
        y: -chunkJZLCHNYAValue453 / 2,
      },
    ],
    chunkJZLCHNYAValue459 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue458),
    chunkJZLCHNYAValue460 = chunkJZLCHNYAValue456.path(
      chunkJZLCHNYAValue459,
      chunkJZLCHNYAValue457,
    ),
    chunkJZLCHNYAValue461 = shapeSvg.insert(
      () => chunkJZLCHNYAValue460,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue461.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam74.look !== "handDrawn" &&
      chunkJZLCHNYAValue461.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam74.look !== "handDrawn" &&
      chunkJZLCHNYAValue461.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAValue461.attr(
      "transform",
      `translate(0,${-chunkJZLCHNYAValue452 / 2})`,
    ),
    label.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue450 / 2 + (chunkJZLCHNYAParam74.padding ?? 0) - (bbox.x - (bbox.left ?? 0))},${-chunkJZLCHNYAValue451 / 2 + (chunkJZLCHNYAParam74.padding ?? 0) - chunkJZLCHNYAValue452 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam74, chunkJZLCHNYAValue461),
    (chunkJZLCHNYAParam74.intersect = function (chunkJZLCHNYAParam372) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam74,
        chunkJZLCHNYAValue458,
        chunkJZLCHNYAParam372,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper68, "waveEdgedRectangle");
async function chunkJZLCHNYAHelper69(
  chunkJZLCHNYAParam91,
  chunkJZLCHNYAParam92,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam92);
  chunkJZLCHNYAParam92.labelStyle = labelStyles;
  let { shapeSvg, bbox } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam91,
      chunkJZLCHNYAParam92,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam92),
    ),
    chunkJZLCHNYAValue538 = Math.max(
      bbox.width + (chunkJZLCHNYAParam92.padding ?? 0) * 2,
      chunkJZLCHNYAParam92?.width ?? 0,
    ),
    chunkJZLCHNYAValue539 = Math.max(
      bbox.height + (chunkJZLCHNYAParam92.padding ?? 0) * 2,
      chunkJZLCHNYAParam92?.height ?? 0,
    ),
    chunkJZLCHNYAValue540 = chunkJZLCHNYAValue538 / chunkJZLCHNYAValue539,
    chunkJZLCHNYAValue541 = chunkJZLCHNYAValue538,
    chunkJZLCHNYAValue542 = chunkJZLCHNYAValue539;
  chunkJZLCHNYAValue541 > chunkJZLCHNYAValue542 * chunkJZLCHNYAValue540
    ? (chunkJZLCHNYAValue542 = chunkJZLCHNYAValue541 / chunkJZLCHNYAValue540)
    : (chunkJZLCHNYAValue541 = chunkJZLCHNYAValue542 * chunkJZLCHNYAValue540);
  chunkJZLCHNYAValue541 = Math.max(chunkJZLCHNYAValue541, 100);
  chunkJZLCHNYAValue542 = Math.max(chunkJZLCHNYAValue542, 50);
  let chunkJZLCHNYAValue543 = Math.min(
      chunkJZLCHNYAValue542 * 0.2,
      chunkJZLCHNYAValue542 / 4,
    ),
    chunkJZLCHNYAValue544 = chunkJZLCHNYAValue542 + chunkJZLCHNYAValue543 * 2,
    { cssStyles } = chunkJZLCHNYAParam92,
    chunkJZLCHNYAValue545 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue546 = chunkATLVNIR6A(chunkJZLCHNYAParam92, {});
  chunkJZLCHNYAParam92.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue546.roughness = 0),
    (chunkJZLCHNYAValue546.fillStyle = "solid"));
  let chunkJZLCHNYAValue547 = [
      {
        x: -chunkJZLCHNYAValue541 / 2,
        y: chunkJZLCHNYAValue544 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        -chunkJZLCHNYAValue541 / 2,
        chunkJZLCHNYAValue544 / 2,
        chunkJZLCHNYAValue541 / 2,
        chunkJZLCHNYAValue544 / 2,
        chunkJZLCHNYAValue543,
        1,
      ),
      {
        x: chunkJZLCHNYAValue541 / 2,
        y: -chunkJZLCHNYAValue544 / 2,
      },
      ...chunkJZLCHNYAHelper2(
        chunkJZLCHNYAValue541 / 2,
        -chunkJZLCHNYAValue544 / 2,
        -chunkJZLCHNYAValue541 / 2,
        -chunkJZLCHNYAValue544 / 2,
        chunkJZLCHNYAValue543,
        -1,
      ),
    ],
    chunkJZLCHNYAValue548 = chunkJZLCHNYAHelper1(chunkJZLCHNYAValue547),
    chunkJZLCHNYAValue549 = chunkJZLCHNYAValue545.path(
      chunkJZLCHNYAValue548,
      chunkJZLCHNYAValue546,
    ),
    chunkJZLCHNYAValue550 = shapeSvg.insert(
      () => chunkJZLCHNYAValue549,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue550.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam92.look !== "handDrawn" &&
      chunkJZLCHNYAValue550.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam92.look !== "handDrawn" &&
      chunkJZLCHNYAValue550.selectAll("path").attr("style", nodeStyles),
    chunkJZLCHNYAU(chunkJZLCHNYAParam92, chunkJZLCHNYAValue550),
    (chunkJZLCHNYAParam92.intersect = function (chunkJZLCHNYAParam373) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam92,
        chunkJZLCHNYAValue547,
        chunkJZLCHNYAParam373,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper69, "waveRectangle");
async function chunkJZLCHNYAHelper70(
  chunkJZLCHNYAParam62,
  chunkJZLCHNYAParam63,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam63);
  chunkJZLCHNYAParam63.labelStyle = labelStyles;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam62,
      chunkJZLCHNYAParam63,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam63),
    ),
    chunkJZLCHNYAValue412 = Math.max(
      bbox.width + (chunkJZLCHNYAParam63.padding ?? 0) * 2,
      chunkJZLCHNYAParam63?.width ?? 0,
    ),
    chunkJZLCHNYAValue413 = Math.max(
      bbox.height + (chunkJZLCHNYAParam63.padding ?? 0) * 2,
      chunkJZLCHNYAParam63?.height ?? 0,
    ),
    chunkJZLCHNYAValue414 = -chunkJZLCHNYAValue412 / 2,
    chunkJZLCHNYAValue415 = -chunkJZLCHNYAValue413 / 2,
    { cssStyles } = chunkJZLCHNYAParam63,
    chunkJZLCHNYAValue416 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue417 = chunkATLVNIR6A(chunkJZLCHNYAParam63, {}),
    chunkJZLCHNYAValue418 = [
      {
        x: chunkJZLCHNYAValue414 - 5,
        y: chunkJZLCHNYAValue415 - 5,
      },
      {
        x: chunkJZLCHNYAValue414 - 5,
        y: chunkJZLCHNYAValue415 + chunkJZLCHNYAValue413,
      },
      {
        x: chunkJZLCHNYAValue414 + chunkJZLCHNYAValue412,
        y: chunkJZLCHNYAValue415 + chunkJZLCHNYAValue413,
      },
      {
        x: chunkJZLCHNYAValue414 + chunkJZLCHNYAValue412,
        y: chunkJZLCHNYAValue415 - 5,
      },
    ],
    chunkJZLCHNYAValue419 = `M${chunkJZLCHNYAValue414 - 5},${chunkJZLCHNYAValue415 - 5} L${chunkJZLCHNYAValue414 + chunkJZLCHNYAValue412},${chunkJZLCHNYAValue415 - 5} L${chunkJZLCHNYAValue414 + chunkJZLCHNYAValue412},${chunkJZLCHNYAValue415 + chunkJZLCHNYAValue413} L${chunkJZLCHNYAValue414 - 5},${chunkJZLCHNYAValue415 + chunkJZLCHNYAValue413} L${chunkJZLCHNYAValue414 - 5},${chunkJZLCHNYAValue415 - 5}
                M${chunkJZLCHNYAValue414 - 5},${chunkJZLCHNYAValue415} L${chunkJZLCHNYAValue414 + chunkJZLCHNYAValue412},${chunkJZLCHNYAValue415}
                M${chunkJZLCHNYAValue414},${chunkJZLCHNYAValue415 - 5} L${chunkJZLCHNYAValue414},${chunkJZLCHNYAValue415 + chunkJZLCHNYAValue413}`;
  chunkJZLCHNYAParam63.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue417.roughness = 0),
    (chunkJZLCHNYAValue417.fillStyle = "solid"));
  let chunkJZLCHNYAValue420 = chunkJZLCHNYAValue416.path(
      chunkJZLCHNYAValue419,
      chunkJZLCHNYAValue417,
    ),
    chunkJZLCHNYAValue421 = shapeSvg.insert(
      () => chunkJZLCHNYAValue420,
      ":first-child",
    );
  return (
    chunkJZLCHNYAValue421.attr("transform", `translate(${2.5}, ${2.5})`),
    chunkJZLCHNYAValue421.attr("class", "basic label-container"),
    cssStyles &&
      chunkJZLCHNYAParam63.look !== "handDrawn" &&
      chunkJZLCHNYAValue421.selectAll("path").attr("style", cssStyles),
    nodeStyles &&
      chunkJZLCHNYAParam63.look !== "handDrawn" &&
      chunkJZLCHNYAValue421.selectAll("path").attr("style", nodeStyles),
    label.attr(
      "transform",
      `translate(${-(bbox.width / 2) + 2.5 - (bbox.x - (bbox.left ?? 0))}, ${-(bbox.height / 2) + 2.5 - (bbox.y - (bbox.top ?? 0))})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam63, chunkJZLCHNYAValue421),
    (chunkJZLCHNYAParam63.intersect = function (chunkJZLCHNYAParam374) {
      return chunkJZLCHNYAValue12.polygon(
        chunkJZLCHNYAParam63,
        chunkJZLCHNYAValue418,
        chunkJZLCHNYAParam374,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper70, "windowPane");
async function chunkJZLCHNYAHelper71(chunkJZLCHNYAParam1, chunkJZLCHNYAParam2) {
  let chunkJZLCHNYAValue26 = chunkJZLCHNYAParam2;
  if (
    (chunkJZLCHNYAValue26.alias &&
      (chunkJZLCHNYAParam2.label = chunkJZLCHNYAValue26.alias),
    chunkJZLCHNYAParam2.look === "handDrawn")
  ) {
    let { themeVariables: _themeVariables } = _chunkABZYJK2DY(),
      { background } = _themeVariables;
    await chunkJZLCHNYAHelper71(chunkJZLCHNYAParam1, {
      ...chunkJZLCHNYAParam2,
      id: chunkJZLCHNYAParam2.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${background}`],
    });
  }
  let chunkJZLCHNYAValue27 = _chunkABZYJK2DY();
  chunkJZLCHNYAParam2.useHtmlLabels = chunkJZLCHNYAValue27.htmlLabels;
  let chunkJZLCHNYAValue28 = chunkJZLCHNYAValue27.er?.diagramPadding ?? 10,
    chunkJZLCHNYAValue29 = chunkJZLCHNYAValue27.er?.entityPadding ?? 6,
    { cssStyles } = chunkJZLCHNYAParam2,
    { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam2);
  if (
    chunkJZLCHNYAValue26.attributes.length === 0 &&
    chunkJZLCHNYAParam2.label
  ) {
    let chunkJZLCHNYAValue886 = {
      rx: 0,
      ry: 0,
      labelPaddingX: chunkJZLCHNYAValue28,
      labelPaddingY: chunkJZLCHNYAValue28 * 1.5,
      classes: "",
    };
    chunkS3R3BYOJL(chunkJZLCHNYAParam2.label, chunkJZLCHNYAValue27) +
      chunkJZLCHNYAValue886.labelPaddingX * 2 <
      chunkJZLCHNYAValue27.er.minEntityWidth &&
      (chunkJZLCHNYAParam2.width = chunkJZLCHNYAValue27.er.minEntityWidth);
    let chunkJZLCHNYAValue887 = await chunkJZLCHNYAHelper41(
      chunkJZLCHNYAParam1,
      chunkJZLCHNYAParam2,
      chunkJZLCHNYAValue886,
    );
    if (!chunkABZYJK2DV(chunkJZLCHNYAValue27.htmlLabels)) {
      let chunkJZLCHNYAValue1069 = chunkJZLCHNYAValue887.select("text"),
        chunkJZLCHNYAValue1070 = chunkJZLCHNYAValue1069.node()?.getBBox();
      chunkJZLCHNYAValue1069.attr(
        "transform",
        `translate(${-chunkJZLCHNYAValue1070.width / 2}, 0)`,
      );
    }
    return chunkJZLCHNYAValue887;
  }
  chunkJZLCHNYAValue27.htmlLabels ||
    ((chunkJZLCHNYAValue28 *= 1.25), (chunkJZLCHNYAValue29 *= 1.25));
  let chunkJZLCHNYAValue30 = chunkJZLCHNYAValue2(chunkJZLCHNYAParam2);
  chunkJZLCHNYAValue30 ||= "node default";
  let chunkJZLCHNYAValue31 = chunkJZLCHNYAParam1
      .insert("g")
      .attr("class", chunkJZLCHNYAValue30)
      .attr("id", chunkJZLCHNYAParam2.domId || chunkJZLCHNYAParam2.id),
    chunkJZLCHNYAValue32 = await chunkJZLCHNYAHelper72(
      chunkJZLCHNYAValue31,
      chunkJZLCHNYAParam2.label ?? "",
      chunkJZLCHNYAValue27,
      0,
      0,
      ["name"],
      labelStyles,
    );
  chunkJZLCHNYAValue32.height += chunkJZLCHNYAValue29;
  let chunkJZLCHNYAValue33 = 0,
    chunkJZLCHNYAValue34 = [],
    chunkJZLCHNYAValue35 = [],
    chunkJZLCHNYAValue36 = 0,
    chunkJZLCHNYAValue37 = 0,
    chunkJZLCHNYAValue38 = 0,
    _chunkJZLCHNYAS = 0,
    chunkJZLCHNYAValue39 = true,
    chunkJZLCHNYAValue40 = true;
  for (let chunkJZLCHNYAValue835 of chunkJZLCHNYAValue26.attributes) {
    let chunkJZLCHNYAValue840 = await chunkJZLCHNYAHelper72(
      chunkJZLCHNYAValue31,
      chunkJZLCHNYAValue835.type,
      chunkJZLCHNYAValue27,
      0,
      chunkJZLCHNYAValue33,
      ["attribute-type"],
      labelStyles,
    );
    chunkJZLCHNYAValue36 = Math.max(
      chunkJZLCHNYAValue36,
      chunkJZLCHNYAValue840.width + chunkJZLCHNYAValue28,
    );
    let chunkJZLCHNYAValue841 = await chunkJZLCHNYAHelper72(
      chunkJZLCHNYAValue31,
      chunkJZLCHNYAValue835.name,
      chunkJZLCHNYAValue27,
      0,
      chunkJZLCHNYAValue33,
      ["attribute-name"],
      labelStyles,
    );
    chunkJZLCHNYAValue37 = Math.max(
      chunkJZLCHNYAValue37,
      chunkJZLCHNYAValue841.width + chunkJZLCHNYAValue28,
    );
    let chunkJZLCHNYAValue842 = await chunkJZLCHNYAHelper72(
      chunkJZLCHNYAValue31,
      chunkJZLCHNYAValue835.keys.join(),
      chunkJZLCHNYAValue27,
      0,
      chunkJZLCHNYAValue33,
      ["attribute-keys"],
      labelStyles,
    );
    chunkJZLCHNYAValue38 = Math.max(
      chunkJZLCHNYAValue38,
      chunkJZLCHNYAValue842.width + chunkJZLCHNYAValue28,
    );
    let chunkJZLCHNYAValue843 = await chunkJZLCHNYAHelper72(
      chunkJZLCHNYAValue31,
      chunkJZLCHNYAValue835.comment,
      chunkJZLCHNYAValue27,
      0,
      chunkJZLCHNYAValue33,
      ["attribute-comment"],
      labelStyles,
    );
    _chunkJZLCHNYAS = Math.max(
      _chunkJZLCHNYAS,
      chunkJZLCHNYAValue843.width + chunkJZLCHNYAValue28,
    );
    let chunkJZLCHNYAValue844 =
      Math.max(
        chunkJZLCHNYAValue840.height,
        chunkJZLCHNYAValue841.height,
        chunkJZLCHNYAValue842.height,
        chunkJZLCHNYAValue843.height,
      ) + chunkJZLCHNYAValue29;
    chunkJZLCHNYAValue35.push({
      yOffset: chunkJZLCHNYAValue33,
      rowHeight: chunkJZLCHNYAValue844,
    });
    chunkJZLCHNYAValue33 += chunkJZLCHNYAValue844;
  }
  let chunkJZLCHNYAValue41 = 4;
  chunkJZLCHNYAValue38 <= chunkJZLCHNYAValue28 &&
    ((chunkJZLCHNYAValue39 = false),
    (chunkJZLCHNYAValue38 = 0),
    chunkJZLCHNYAValue41--);
  _chunkJZLCHNYAS <= chunkJZLCHNYAValue28 &&
    ((chunkJZLCHNYAValue40 = false),
    (_chunkJZLCHNYAS = 0),
    chunkJZLCHNYAValue41--);
  let chunkJZLCHNYAValue42 = chunkJZLCHNYAValue31.node().getBBox();
  if (
    chunkJZLCHNYAValue32.width +
      chunkJZLCHNYAValue28 * 2 -
      (chunkJZLCHNYAValue36 +
        chunkJZLCHNYAValue37 +
        chunkJZLCHNYAValue38 +
        _chunkJZLCHNYAS) >
    0
  ) {
    let chunkJZLCHNYAValue1071 =
      chunkJZLCHNYAValue32.width +
      chunkJZLCHNYAValue28 * 2 -
      (chunkJZLCHNYAValue36 +
        chunkJZLCHNYAValue37 +
        chunkJZLCHNYAValue38 +
        _chunkJZLCHNYAS);
    chunkJZLCHNYAValue36 += chunkJZLCHNYAValue1071 / chunkJZLCHNYAValue41;
    chunkJZLCHNYAValue37 += chunkJZLCHNYAValue1071 / chunkJZLCHNYAValue41;
    chunkJZLCHNYAValue38 > 0 &&
      (chunkJZLCHNYAValue38 += chunkJZLCHNYAValue1071 / chunkJZLCHNYAValue41);
    _chunkJZLCHNYAS > 0 &&
      (_chunkJZLCHNYAS += chunkJZLCHNYAValue1071 / chunkJZLCHNYAValue41);
  }
  let chunkJZLCHNYAValue43 =
      chunkJZLCHNYAValue36 +
      chunkJZLCHNYAValue37 +
      chunkJZLCHNYAValue38 +
      _chunkJZLCHNYAS,
    chunkJZLCHNYAValue44 = rough.svg(chunkJZLCHNYAValue31),
    chunkJZLCHNYAValue45 = chunkATLVNIR6A(chunkJZLCHNYAParam2, {});
  chunkJZLCHNYAParam2.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue45.roughness = 0),
    (chunkJZLCHNYAValue45.fillStyle = "solid"));
  let _chunkJZLCHNYAR = 0;
  chunkJZLCHNYAValue35.length > 0 &&
    (_chunkJZLCHNYAR = chunkJZLCHNYAValue35.reduce(
      (accumulator, current) => accumulator + (current?.rowHeight ?? 0),
      0,
    ));
  let chunkJZLCHNYAValue46 = Math.max(
      chunkJZLCHNYAValue42.width + chunkJZLCHNYAValue28 * 2,
      chunkJZLCHNYAParam2?.width || 0,
      chunkJZLCHNYAValue43,
    ),
    chunkJZLCHNYAValue47 = Math.max(
      (_chunkJZLCHNYAR ?? 0) + chunkJZLCHNYAValue32.height,
      chunkJZLCHNYAParam2?.height || 0,
    ),
    chunkJZLCHNYAValue48 = -chunkJZLCHNYAValue46 / 2,
    chunkJZLCHNYAValue49 = -chunkJZLCHNYAValue47 / 2;
  chunkJZLCHNYAValue31
    .selectAll("g:not(:first-child)")
    .each(
      (chunkJZLCHNYAParam200, chunkJZLCHNYAParam201, chunkJZLCHNYAParam202) => {
        let chunkJZLCHNYAValue831 = Src(
            chunkJZLCHNYAParam202[chunkJZLCHNYAParam201],
          ),
          chunkJZLCHNYAValue832 = chunkJZLCHNYAValue831.attr("transform"),
          chunkJZLCHNYAValue833 = 0,
          chunkJZLCHNYAValue834 = 0;
        if (chunkJZLCHNYAValue832) {
          let chunkJZLCHNYAValue900 = RegExp(
            /translate\(([^,]+),([^)]+)\)/,
          ).exec(chunkJZLCHNYAValue832);
          chunkJZLCHNYAValue900 &&
            ((chunkJZLCHNYAValue833 = parseFloat(chunkJZLCHNYAValue900[1])),
            (chunkJZLCHNYAValue834 = parseFloat(chunkJZLCHNYAValue900[2])),
            chunkJZLCHNYAValue831.attr("class").includes("attribute-name")
              ? (chunkJZLCHNYAValue833 += chunkJZLCHNYAValue36)
              : chunkJZLCHNYAValue831.attr("class").includes("attribute-keys")
                ? (chunkJZLCHNYAValue833 +=
                    chunkJZLCHNYAValue36 + chunkJZLCHNYAValue37)
                : chunkJZLCHNYAValue831
                    .attr("class")
                    .includes("attribute-comment") &&
                  (chunkJZLCHNYAValue833 +=
                    chunkJZLCHNYAValue36 +
                    chunkJZLCHNYAValue37 +
                    chunkJZLCHNYAValue38));
        }
        chunkJZLCHNYAValue831.attr(
          "transform",
          `translate(${chunkJZLCHNYAValue48 + chunkJZLCHNYAValue28 / 2 + chunkJZLCHNYAValue833}, ${chunkJZLCHNYAValue834 + chunkJZLCHNYAValue49 + chunkJZLCHNYAValue32.height + chunkJZLCHNYAValue29 / 2})`,
        );
      },
    );
  chunkJZLCHNYAValue31
    .select(".name")
    .attr(
      "transform",
      "translate(" +
        -chunkJZLCHNYAValue32.width / 2 +
        ", " +
        (chunkJZLCHNYAValue49 + chunkJZLCHNYAValue29 / 2) +
        ")",
    );
  let _chunkJZLCHNYAI = chunkJZLCHNYAValue44.rectangle(
      chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue49,
      chunkJZLCHNYAValue46,
      chunkJZLCHNYAValue47,
      chunkJZLCHNYAValue45,
    ),
    _chunkJZLCHNYAT = chunkJZLCHNYAValue31
      .insert(() => _chunkJZLCHNYAI, ":first-child")
      .attr("style", cssStyles.join("")),
    { themeVariables } = _chunkABZYJK2DY(),
    { rowEven, rowOdd, nodeBorder } = themeVariables;
  chunkJZLCHNYAValue34.push(0);
  for (let [
    chunkJZLCHNYAValue930,
    chunkJZLCHNYAValue931,
  ] of chunkJZLCHNYAValue35.entries()) {
    let chunkJZLCHNYAValue944 =
        (chunkJZLCHNYAValue930 + 1) % 2 == 0 &&
        chunkJZLCHNYAValue931.yOffset !== 0,
      chunkJZLCHNYAValue945 = chunkJZLCHNYAValue44.rectangle(
        chunkJZLCHNYAValue48,
        chunkJZLCHNYAValue32.height +
          chunkJZLCHNYAValue49 +
          chunkJZLCHNYAValue931?.yOffset,
        chunkJZLCHNYAValue46,
        chunkJZLCHNYAValue931?.rowHeight,
        {
          ...chunkJZLCHNYAValue45,
          fill: chunkJZLCHNYAValue944 ? rowEven : rowOdd,
          stroke: nodeBorder,
        },
      );
    chunkJZLCHNYAValue31
      .insert(() => chunkJZLCHNYAValue945, "g.label")
      .attr("style", cssStyles.join(""))
      .attr("class", `row-rect-${chunkJZLCHNYAValue944 ? "even" : "odd"}`);
  }
  let chunkJZLCHNYAValue50 = chunkJZLCHNYAValue44.line(
    chunkJZLCHNYAValue48,
    chunkJZLCHNYAValue32.height + chunkJZLCHNYAValue49,
    chunkJZLCHNYAValue46 + chunkJZLCHNYAValue48,
    chunkJZLCHNYAValue32.height + chunkJZLCHNYAValue49,
    chunkJZLCHNYAValue45,
  );
  chunkJZLCHNYAValue31
    .insert(() => chunkJZLCHNYAValue50)
    .attr("class", "divider");
  chunkJZLCHNYAValue50 = chunkJZLCHNYAValue44.line(
    chunkJZLCHNYAValue36 + chunkJZLCHNYAValue48,
    chunkJZLCHNYAValue32.height + chunkJZLCHNYAValue49,
    chunkJZLCHNYAValue36 + chunkJZLCHNYAValue48,
    chunkJZLCHNYAValue47 + chunkJZLCHNYAValue49,
    chunkJZLCHNYAValue45,
  );
  chunkJZLCHNYAValue31
    .insert(() => chunkJZLCHNYAValue50)
    .attr("class", "divider");
  chunkJZLCHNYAValue39 &&
    ((chunkJZLCHNYAValue50 = chunkJZLCHNYAValue44.line(
      chunkJZLCHNYAValue36 + chunkJZLCHNYAValue37 + chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue32.height + chunkJZLCHNYAValue49,
      chunkJZLCHNYAValue36 + chunkJZLCHNYAValue37 + chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue47 + chunkJZLCHNYAValue49,
      chunkJZLCHNYAValue45,
    )),
    chunkJZLCHNYAValue31
      .insert(() => chunkJZLCHNYAValue50)
      .attr("class", "divider"));
  chunkJZLCHNYAValue40 &&
    ((chunkJZLCHNYAValue50 = chunkJZLCHNYAValue44.line(
      chunkJZLCHNYAValue36 +
        chunkJZLCHNYAValue37 +
        chunkJZLCHNYAValue38 +
        chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue32.height + chunkJZLCHNYAValue49,
      chunkJZLCHNYAValue36 +
        chunkJZLCHNYAValue37 +
        chunkJZLCHNYAValue38 +
        chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue47 + chunkJZLCHNYAValue49,
      chunkJZLCHNYAValue45,
    )),
    chunkJZLCHNYAValue31
      .insert(() => chunkJZLCHNYAValue50)
      .attr("class", "divider"));
  for (let chunkJZLCHNYAValue1067 of chunkJZLCHNYAValue34) {
    chunkJZLCHNYAValue50 = chunkJZLCHNYAValue44.line(
      chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue32.height +
        chunkJZLCHNYAValue49 +
        chunkJZLCHNYAValue1067,
      chunkJZLCHNYAValue46 + chunkJZLCHNYAValue48,
      chunkJZLCHNYAValue32.height +
        chunkJZLCHNYAValue49 +
        chunkJZLCHNYAValue1067,
      chunkJZLCHNYAValue45,
    );
    chunkJZLCHNYAValue31
      .insert(() => chunkJZLCHNYAValue50)
      .attr("class", "divider");
  }
  if (
    (chunkJZLCHNYAU(chunkJZLCHNYAParam2, _chunkJZLCHNYAT),
    nodeStyles && chunkJZLCHNYAParam2.look !== "handDrawn")
  ) {
    let chunkJZLCHNYAValue1001 = nodeStyles
      .split(";")
      ?.filter((chunkJZLCHNYAParam416) =>
        chunkJZLCHNYAParam416.includes("stroke"),
      )
      ?.map((chunkJZLCHNYAParam417) => `${chunkJZLCHNYAParam417}`)
      .join("; ");
    chunkJZLCHNYAValue31
      .selectAll("path")
      .attr("style", chunkJZLCHNYAValue1001 ?? "");
    chunkJZLCHNYAValue31
      .selectAll(".row-rect-even path")
      .attr("style", nodeStyles);
  }
  return (
    (chunkJZLCHNYAParam2.intersect = function (chunkJZLCHNYAParam403) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam2,
        chunkJZLCHNYAParam403,
      );
    }),
    chunkJZLCHNYAValue31
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper71, "erBox");
async function chunkJZLCHNYAHelper72(
  chunkJZLCHNYAParam109,
  chunkJZLCHNYAParam110,
  chunkJZLCHNYAParam111,
  chunkJZLCHNYAParam112 = 0,
  chunkJZLCHNYAParam113 = 0,
  chunkJZLCHNYAParam114 = [],
  chunkJZLCHNYAParam115 = "",
) {
  let chunkJZLCHNYAValue606 = chunkJZLCHNYAParam109
    .insert("g")
    .attr("class", `label ${chunkJZLCHNYAParam114.join(" ")}`)
    .attr(
      "transform",
      `translate(${chunkJZLCHNYAParam112}, ${chunkJZLCHNYAParam113})`,
    )
    .attr("style", chunkJZLCHNYAParam115);
  chunkJZLCHNYAParam110 !== _chunkABZYJK2DW(chunkJZLCHNYAParam110) &&
    ((chunkJZLCHNYAParam110 = _chunkABZYJK2DW(chunkJZLCHNYAParam110)),
    (chunkJZLCHNYAParam110 = chunkJZLCHNYAParam110
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")));
  let chunkJZLCHNYAValue607 = chunkJZLCHNYAValue606.node().appendChild(
    await chunkJA3XYJ7ZA(
      chunkJZLCHNYAValue606,
      chunkJZLCHNYAParam110,
      {
        width:
          chunkS3R3BYOJL(chunkJZLCHNYAParam110, chunkJZLCHNYAParam111) + 100,
        style: chunkJZLCHNYAParam115,
        useHtmlLabels: chunkJZLCHNYAParam111.htmlLabels,
      },
      chunkJZLCHNYAParam111,
    ),
  );
  if (
    chunkJZLCHNYAParam110.includes("&lt;") ||
    chunkJZLCHNYAParam110.includes("&gt;")
  ) {
    let chunkJZLCHNYAValue946 = chunkJZLCHNYAValue607.children[0];
    for (
      chunkJZLCHNYAValue946.textContent = chunkJZLCHNYAValue946.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
      chunkJZLCHNYAValue946.childNodes[0];

    ) {
      chunkJZLCHNYAValue946 = chunkJZLCHNYAValue946.childNodes[0];
      chunkJZLCHNYAValue946.textContent = chunkJZLCHNYAValue946.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
    }
  }
  let chunkJZLCHNYAValue608 = chunkJZLCHNYAValue607.getBBox();
  if (chunkABZYJK2DV(chunkJZLCHNYAParam111.htmlLabels)) {
    let chunkJZLCHNYAValue1031 = chunkJZLCHNYAValue607.children[0];
    chunkJZLCHNYAValue1031.style.textAlign = "start";
    let chunkJZLCHNYAValue1032 = Src(chunkJZLCHNYAValue607);
    chunkJZLCHNYAValue608 = chunkJZLCHNYAValue1031.getBoundingClientRect();
    chunkJZLCHNYAValue1032.attr("width", chunkJZLCHNYAValue608.width);
    chunkJZLCHNYAValue1032.attr("height", chunkJZLCHNYAValue608.height);
  }
  return chunkJZLCHNYAValue608;
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper72, "addText");
async function chunkJZLCHNYAHelper73(
  chunkJZLCHNYAParam53,
  chunkJZLCHNYAParam54,
  chunkJZLCHNYAParam55,
  chunkJZLCHNYAParam56,
  chunkJZLCHNYAParam57 = chunkJZLCHNYAParam55.class.padding ?? 12,
) {
  let chunkJZLCHNYAValue378 = chunkJZLCHNYAParam56 ? 0 : 3,
    chunkJZLCHNYAValue379 = chunkJZLCHNYAParam53
      .insert("g")
      .attr("class", chunkJZLCHNYAValue2(chunkJZLCHNYAParam54))
      .attr("id", chunkJZLCHNYAParam54.domId || chunkJZLCHNYAParam54.id),
    chunkJZLCHNYAValue380 = null,
    chunkJZLCHNYAValue381 = null,
    chunkJZLCHNYAValue382 = null,
    chunkJZLCHNYAValue383 = null,
    chunkJZLCHNYAValue384 = 0,
    chunkJZLCHNYAValue385 = 0,
    chunkJZLCHNYAValue386 = 0;
  if (
    ((chunkJZLCHNYAValue380 = chunkJZLCHNYAValue379
      .insert("g")
      .attr("class", "annotation-group text")),
    chunkJZLCHNYAParam54.annotations.length > 0)
  ) {
    let chunkJZLCHNYAValue1091 = chunkJZLCHNYAParam54.annotations[0];
    await chunkJZLCHNYAHelper74(
      chunkJZLCHNYAValue380,
      {
        text: `\xAB${chunkJZLCHNYAValue1091}\xBB`,
      },
      0,
    );
    chunkJZLCHNYAValue384 = chunkJZLCHNYAValue380.node().getBBox().height;
  }
  chunkJZLCHNYAValue381 = chunkJZLCHNYAValue379
    .insert("g")
    .attr("class", "label-group text");
  await chunkJZLCHNYAHelper74(chunkJZLCHNYAValue381, chunkJZLCHNYAParam54, 0, [
    "font-weight: bolder",
  ]);
  let chunkJZLCHNYAValue387 = chunkJZLCHNYAValue381.node().getBBox();
  chunkJZLCHNYAValue385 = chunkJZLCHNYAValue387.height;
  chunkJZLCHNYAValue382 = chunkJZLCHNYAValue379
    .insert("g")
    .attr("class", "members-group text");
  let chunkJZLCHNYAValue388 = 0;
  for (let chunkJZLCHNYAValue1098 of chunkJZLCHNYAParam54.members) {
    let chunkJZLCHNYAValue1105 = await chunkJZLCHNYAHelper74(
      chunkJZLCHNYAValue382,
      chunkJZLCHNYAValue1098,
      chunkJZLCHNYAValue388,
      [chunkJZLCHNYAValue1098.parseClassifier()],
    );
    chunkJZLCHNYAValue388 += chunkJZLCHNYAValue1105 + chunkJZLCHNYAValue378;
  }
  chunkJZLCHNYAValue386 = chunkJZLCHNYAValue382.node().getBBox().height;
  chunkJZLCHNYAValue386 <= 0 &&
    (chunkJZLCHNYAValue386 = chunkJZLCHNYAParam57 / 2);
  chunkJZLCHNYAValue383 = chunkJZLCHNYAValue379
    .insert("g")
    .attr("class", "methods-group text");
  let chunkJZLCHNYAValue389 = 0;
  for (let chunkJZLCHNYAValue1099 of chunkJZLCHNYAParam54.methods) {
    let chunkJZLCHNYAValue1106 = await chunkJZLCHNYAHelper74(
      chunkJZLCHNYAValue383,
      chunkJZLCHNYAValue1099,
      chunkJZLCHNYAValue389,
      [chunkJZLCHNYAValue1099.parseClassifier()],
    );
    chunkJZLCHNYAValue389 += chunkJZLCHNYAValue1106 + chunkJZLCHNYAValue378;
  }
  let chunkJZLCHNYAValue390 = chunkJZLCHNYAValue379.node().getBBox();
  if (chunkJZLCHNYAValue380 !== null) {
    let chunkJZLCHNYAValue1102 = chunkJZLCHNYAValue380.node().getBBox();
    chunkJZLCHNYAValue380.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue1102.width / 2})`,
    );
  }
  return (
    chunkJZLCHNYAValue381.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue387.width / 2}, ${chunkJZLCHNYAValue384})`,
    ),
    (chunkJZLCHNYAValue390 = chunkJZLCHNYAValue379.node().getBBox()),
    chunkJZLCHNYAValue382.attr(
      "transform",
      `translate(0, ${chunkJZLCHNYAValue384 + chunkJZLCHNYAValue385 + chunkJZLCHNYAParam57 * 2})`,
    ),
    (chunkJZLCHNYAValue390 = chunkJZLCHNYAValue379.node().getBBox()),
    chunkJZLCHNYAValue383.attr(
      "transform",
      `translate(0, ${chunkJZLCHNYAValue384 + chunkJZLCHNYAValue385 + (chunkJZLCHNYAValue386 ? chunkJZLCHNYAValue386 + chunkJZLCHNYAParam57 * 4 : chunkJZLCHNYAParam57 * 2)})`,
    ),
    (chunkJZLCHNYAValue390 = chunkJZLCHNYAValue379.node().getBBox()),
    {
      shapeSvg: chunkJZLCHNYAValue379,
      bbox: chunkJZLCHNYAValue390,
    }
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper73, "textHelper");
async function chunkJZLCHNYAHelper74(
  chunkJZLCHNYAParam25,
  chunkJZLCHNYAParam26,
  chunkJZLCHNYAParam27,
  chunkJZLCHNYAParam28 = [],
) {
  let chunkJZLCHNYAValue229 = chunkJZLCHNYAParam25
      .insert("g")
      .attr("class", "label")
      .attr("style", chunkJZLCHNYAParam28.join("; ")),
    chunkJZLCHNYAValue230 = _chunkABZYJK2DY(),
    chunkJZLCHNYAValue231 =
      "useHtmlLabels" in chunkJZLCHNYAParam26
        ? chunkJZLCHNYAParam26.useHtmlLabels
        : (chunkABZYJK2DV(chunkJZLCHNYAValue230.htmlLabels) ?? true),
    chunkJZLCHNYAValue232 = "";
  chunkJZLCHNYAValue232 =
    "text" in chunkJZLCHNYAParam26
      ? chunkJZLCHNYAParam26.text
      : chunkJZLCHNYAParam26.label;
  !chunkJZLCHNYAValue231 &&
    chunkJZLCHNYAValue232.startsWith("\\") &&
    (chunkJZLCHNYAValue232 = chunkJZLCHNYAValue232.substring(1));
  _chunkABZYJK2DX(chunkJZLCHNYAValue232) && (chunkJZLCHNYAValue231 = true);
  let chunkJZLCHNYAValue233 = await chunkJA3XYJ7ZA(
      chunkJZLCHNYAValue229,
      chunkABZYJK2DQ(chunkS3R3BYOJD(chunkJZLCHNYAValue232)),
      {
        width:
          chunkS3R3BYOJL(chunkJZLCHNYAValue232, chunkJZLCHNYAValue230) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunkJZLCHNYAValue231,
      },
      chunkJZLCHNYAValue230,
    ),
    chunkJZLCHNYAValue234,
    chunkJZLCHNYAValue235 = 1;
  if (chunkJZLCHNYAValue231) {
    let chunkJZLCHNYAValue422 = chunkJZLCHNYAValue233.children[0],
      chunkJZLCHNYAValue423 = Src(chunkJZLCHNYAValue233);
    chunkJZLCHNYAValue235 =
      chunkJZLCHNYAValue422.innerHTML.split("<br>").length;
    chunkJZLCHNYAValue422.innerHTML.includes("</math>") &&
      (chunkJZLCHNYAValue235 +=
        chunkJZLCHNYAValue422.innerHTML.split("<mrow>").length - 1);
    let chunkJZLCHNYAValue424 =
      chunkJZLCHNYAValue422.getElementsByTagName("img");
    if (chunkJZLCHNYAValue424) {
      let chunkJZLCHNYAValue681 =
        chunkJZLCHNYAValue232.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...chunkJZLCHNYAValue424].map(
          (item) =>
            new Promise((chunkJZLCHNYAParam175) => {
              function chunkJZLCHNYAHelper84() {
                if (
                  ((item.style.display = "flex"),
                  (item.style.flexDirection = "column"),
                  chunkJZLCHNYAValue681)
                ) {
                  let chunkJZLCHNYAValue973 =
                      chunkJZLCHNYAValue230.fontSize?.toString() ??
                      window.getComputedStyle(document.body).fontSize,
                    chunkJZLCHNYAValue974 =
                      parseInt(chunkJZLCHNYAValue973, 10) * 5 + "px";
                  item.style.minWidth = chunkJZLCHNYAValue974;
                  item.style.maxWidth = chunkJZLCHNYAValue974;
                } else item.style.width = "100%";
                chunkJZLCHNYAParam175(item);
              }
              chunkAGHRB4JFN(chunkJZLCHNYAHelper84, "setupImage");
              setTimeout(() => {
                item.complete && chunkJZLCHNYAHelper84();
              });
              item.addEventListener("error", chunkJZLCHNYAHelper84);
              item.addEventListener("load", chunkJZLCHNYAHelper84);
            }),
        ),
      );
    }
    chunkJZLCHNYAValue234 = chunkJZLCHNYAValue422.getBoundingClientRect();
    chunkJZLCHNYAValue423.attr("width", chunkJZLCHNYAValue234.width);
    chunkJZLCHNYAValue423.attr("height", chunkJZLCHNYAValue234.height);
  } else {
    chunkJZLCHNYAParam28.includes("font-weight: bolder") &&
      Src(chunkJZLCHNYAValue233).selectAll("tspan").attr("font-weight", "");
    chunkJZLCHNYAValue235 = chunkJZLCHNYAValue233.children.length;
    let chunkJZLCHNYAValue836 = chunkJZLCHNYAValue233.children[0];
    (chunkJZLCHNYAValue233.textContent === "" ||
      chunkJZLCHNYAValue233.textContent.includes("&gt")) &&
      ((chunkJZLCHNYAValue836.textContent =
        chunkJZLCHNYAValue232[0] +
        chunkJZLCHNYAValue232
          .substring(1)
          .replaceAll("&gt;", ">")
          .replaceAll("&lt;", "<")
          .trim()),
      chunkJZLCHNYAValue232[1] === " " &&
        (chunkJZLCHNYAValue836.textContent =
          chunkJZLCHNYAValue836.textContent[0] +
          " " +
          chunkJZLCHNYAValue836.textContent.substring(1)));
    chunkJZLCHNYAValue836.textContent === "undefined" &&
      (chunkJZLCHNYAValue836.textContent = "");
    chunkJZLCHNYAValue234 = chunkJZLCHNYAValue233.getBBox();
  }
  return (
    chunkJZLCHNYAValue229.attr(
      "transform",
      "translate(0," +
        (-chunkJZLCHNYAValue234.height / (2 * chunkJZLCHNYAValue235) +
          chunkJZLCHNYAParam27) +
        ")",
    ),
    chunkJZLCHNYAValue234.height
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper74, "addText");
async function chunkJZLCHNYAHelper75(chunkJZLCHNYAParam3, chunkJZLCHNYAParam4) {
  let chunkJZLCHNYAValue51 = _chunkABZYJK2DL(),
    chunkJZLCHNYAValue52 = chunkJZLCHNYAValue51.class.padding ?? 12,
    chunkJZLCHNYAValue53 = chunkJZLCHNYAValue52,
    chunkJZLCHNYAValue54 =
      chunkJZLCHNYAParam4.useHtmlLabels ??
      chunkABZYJK2DV(chunkJZLCHNYAValue51.htmlLabels) ??
      true,
    chunkJZLCHNYAValue55 = chunkJZLCHNYAParam4;
  chunkJZLCHNYAValue55.annotations = chunkJZLCHNYAValue55.annotations ?? [];
  chunkJZLCHNYAValue55.members = chunkJZLCHNYAValue55.members ?? [];
  chunkJZLCHNYAValue55.methods = chunkJZLCHNYAValue55.methods ?? [];
  let { shapeSvg, bbox } = await chunkJZLCHNYAHelper73(
      chunkJZLCHNYAParam3,
      chunkJZLCHNYAParam4,
      chunkJZLCHNYAValue51,
      chunkJZLCHNYAValue54,
      chunkJZLCHNYAValue53,
    ),
    { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam4);
  chunkJZLCHNYAParam4.labelStyle = labelStyles;
  chunkJZLCHNYAParam4.cssStyles = chunkJZLCHNYAValue55.styles || "";
  let chunkJZLCHNYAValue56 =
    chunkJZLCHNYAValue55.styles?.join(";") || nodeStyles || "";
  chunkJZLCHNYAParam4.cssStyles ||= chunkJZLCHNYAValue56
    .replaceAll("!important", "")
    .split(";");
  let chunkJZLCHNYAValue57 =
      chunkJZLCHNYAValue55.members.length === 0 &&
      chunkJZLCHNYAValue55.methods.length === 0 &&
      !chunkJZLCHNYAValue51.class?.hideEmptyMembersBox,
    chunkJZLCHNYAValue58 = rough.svg(shapeSvg),
    chunkJZLCHNYAValue59 = chunkATLVNIR6A(chunkJZLCHNYAParam4, {});
  chunkJZLCHNYAParam4.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue59.roughness = 0),
    (chunkJZLCHNYAValue59.fillStyle = "solid"));
  let chunkJZLCHNYAValue60 = bbox.width,
    chunkJZLCHNYAValue61 = bbox.height;
  chunkJZLCHNYAValue55.members.length === 0 &&
  chunkJZLCHNYAValue55.methods.length === 0
    ? (chunkJZLCHNYAValue61 += chunkJZLCHNYAValue53)
    : chunkJZLCHNYAValue55.members.length > 0 &&
      chunkJZLCHNYAValue55.methods.length === 0 &&
      (chunkJZLCHNYAValue61 += chunkJZLCHNYAValue53 * 2);
  let chunkJZLCHNYAValue62 = -chunkJZLCHNYAValue60 / 2,
    chunkJZLCHNYAValue63 = -chunkJZLCHNYAValue61 / 2,
    _chunkJZLCHNYAS = chunkJZLCHNYAValue58.rectangle(
      chunkJZLCHNYAValue62 - chunkJZLCHNYAValue52,
      chunkJZLCHNYAValue63 -
        chunkJZLCHNYAValue52 -
        (chunkJZLCHNYAValue57
          ? chunkJZLCHNYAValue52
          : chunkJZLCHNYAValue55.members.length === 0 &&
              chunkJZLCHNYAValue55.methods.length === 0
            ? -chunkJZLCHNYAValue52 / 2
            : 0),
      chunkJZLCHNYAValue60 + 2 * chunkJZLCHNYAValue52,
      chunkJZLCHNYAValue61 +
        2 * chunkJZLCHNYAValue52 +
        (chunkJZLCHNYAValue57
          ? chunkJZLCHNYAValue52 * 2
          : chunkJZLCHNYAValue55.members.length === 0 &&
              chunkJZLCHNYAValue55.methods.length === 0
            ? -chunkJZLCHNYAValue52
            : 0),
      chunkJZLCHNYAValue59,
    ),
    chunkJZLCHNYAValue64 = shapeSvg.insert(
      () => _chunkJZLCHNYAS,
      ":first-child",
    );
  chunkJZLCHNYAValue64.attr("class", "basic label-container");
  let chunkJZLCHNYAValue65 = chunkJZLCHNYAValue64.node().getBBox();
  shapeSvg
    .selectAll(".text")
    .each(
      (chunkJZLCHNYAParam186, chunkJZLCHNYAParam187, chunkJZLCHNYAParam188) => {
        let chunkJZLCHNYAValue793 = Src(
            chunkJZLCHNYAParam188[chunkJZLCHNYAParam187],
          ),
          chunkJZLCHNYAValue794 = chunkJZLCHNYAValue793.attr("transform"),
          chunkJZLCHNYAValue795 = 0;
        if (chunkJZLCHNYAValue794) {
          let chunkJZLCHNYAValue1095 = RegExp(
            /translate\(([^,]+),([^)]+)\)/,
          ).exec(chunkJZLCHNYAValue794);
          chunkJZLCHNYAValue1095 &&
            (chunkJZLCHNYAValue795 = parseFloat(chunkJZLCHNYAValue1095[2]));
        }
        let chunkJZLCHNYAValue796 =
          chunkJZLCHNYAValue795 +
          chunkJZLCHNYAValue63 +
          chunkJZLCHNYAValue52 -
          (chunkJZLCHNYAValue57
            ? chunkJZLCHNYAValue52
            : chunkJZLCHNYAValue55.members.length === 0 &&
                chunkJZLCHNYAValue55.methods.length === 0
              ? -chunkJZLCHNYAValue52 / 2
              : 0);
        chunkJZLCHNYAValue54 || (chunkJZLCHNYAValue796 -= 4);
        let chunkJZLCHNYAValue797 = chunkJZLCHNYAValue62;
        (chunkJZLCHNYAValue793.attr("class").includes("label-group") ||
          chunkJZLCHNYAValue793.attr("class").includes("annotation-group")) &&
          ((chunkJZLCHNYAValue797 =
            -chunkJZLCHNYAValue793.node()?.getBBox().width / 2 || 0),
          shapeSvg
            .selectAll("text")
            .each(
              function (
                chunkJZLCHNYAParam307,
                chunkJZLCHNYAParam308,
                chunkJZLCHNYAParam309,
              ) {
                window.getComputedStyle(
                  chunkJZLCHNYAParam309[chunkJZLCHNYAParam308],
                ).textAnchor === "middle" && (chunkJZLCHNYAValue797 = 0);
              },
            ));
        chunkJZLCHNYAValue793.attr(
          "transform",
          `translate(${chunkJZLCHNYAValue797}, ${chunkJZLCHNYAValue796})`,
        );
      },
    );
  let chunkJZLCHNYAValue66 =
      shapeSvg.select(".annotation-group").node().getBBox().height -
        (chunkJZLCHNYAValue57 ? chunkJZLCHNYAValue52 / 2 : 0) || 0,
    chunkJZLCHNYAValue67 =
      shapeSvg.select(".label-group").node().getBBox().height -
        (chunkJZLCHNYAValue57 ? chunkJZLCHNYAValue52 / 2 : 0) || 0,
    chunkJZLCHNYAValue68 =
      shapeSvg.select(".members-group").node().getBBox().height -
        (chunkJZLCHNYAValue57 ? chunkJZLCHNYAValue52 / 2 : 0) || 0;
  if (
    chunkJZLCHNYAValue55.members.length > 0 ||
    chunkJZLCHNYAValue55.methods.length > 0 ||
    chunkJZLCHNYAValue57
  ) {
    let chunkJZLCHNYAValue1054 = chunkJZLCHNYAValue58.line(
      chunkJZLCHNYAValue65.x,
      chunkJZLCHNYAValue66 +
        chunkJZLCHNYAValue67 +
        chunkJZLCHNYAValue63 +
        chunkJZLCHNYAValue52,
      chunkJZLCHNYAValue65.x + chunkJZLCHNYAValue65.width,
      chunkJZLCHNYAValue66 +
        chunkJZLCHNYAValue67 +
        chunkJZLCHNYAValue63 +
        chunkJZLCHNYAValue52,
      chunkJZLCHNYAValue59,
    );
    shapeSvg
      .insert(() => chunkJZLCHNYAValue1054)
      .attr("class", "divider")
      .attr("style", chunkJZLCHNYAValue56);
  }
  if (
    chunkJZLCHNYAValue57 ||
    chunkJZLCHNYAValue55.members.length > 0 ||
    chunkJZLCHNYAValue55.methods.length > 0
  ) {
    let chunkJZLCHNYAValue1022 = chunkJZLCHNYAValue58.line(
      chunkJZLCHNYAValue65.x,
      chunkJZLCHNYAValue66 +
        chunkJZLCHNYAValue67 +
        chunkJZLCHNYAValue68 +
        chunkJZLCHNYAValue63 +
        chunkJZLCHNYAValue53 * 2 +
        chunkJZLCHNYAValue52,
      chunkJZLCHNYAValue65.x + chunkJZLCHNYAValue65.width,
      chunkJZLCHNYAValue66 +
        chunkJZLCHNYAValue67 +
        chunkJZLCHNYAValue68 +
        chunkJZLCHNYAValue63 +
        chunkJZLCHNYAValue52 +
        chunkJZLCHNYAValue53 * 2,
      chunkJZLCHNYAValue59,
    );
    shapeSvg
      .insert(() => chunkJZLCHNYAValue1022)
      .attr("class", "divider")
      .attr("style", chunkJZLCHNYAValue56);
  }
  if (
    (chunkJZLCHNYAValue55.look !== "handDrawn" &&
      shapeSvg.selectAll("path").attr("style", chunkJZLCHNYAValue56),
    chunkJZLCHNYAValue64
      .select(":nth-child(2)")
      .attr("style", chunkJZLCHNYAValue56),
    shapeSvg
      .selectAll(".divider")
      .select("path")
      .attr("style", chunkJZLCHNYAValue56),
    chunkJZLCHNYAParam4.labelStyle
      ? shapeSvg.selectAll("span").attr("style", chunkJZLCHNYAParam4.labelStyle)
      : shapeSvg.selectAll("span").attr("style", chunkJZLCHNYAValue56),
    !chunkJZLCHNYAValue54)
  ) {
    let chunkJZLCHNYAValue942 = RegExp(/color\s*:\s*([^;]*)/),
      chunkJZLCHNYAValue943 = chunkJZLCHNYAValue942.exec(chunkJZLCHNYAValue56);
    if (chunkJZLCHNYAValue943) {
      let chunkJZLCHNYAValue1101 = chunkJZLCHNYAValue943[0].replace(
        "color",
        "fill",
      );
      shapeSvg.selectAll("tspan").attr("style", chunkJZLCHNYAValue1101);
    } else if (labelStyles) {
      let chunkJZLCHNYAValue1061 = chunkJZLCHNYAValue942.exec(labelStyles);
      if (chunkJZLCHNYAValue1061) {
        let chunkJZLCHNYAValue1096 = chunkJZLCHNYAValue1061[0].replace(
          "color",
          "fill",
        );
        shapeSvg.selectAll("tspan").attr("style", chunkJZLCHNYAValue1096);
      }
    }
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam4, chunkJZLCHNYAValue64),
    (chunkJZLCHNYAParam4.intersect = function (chunkJZLCHNYAParam404) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam4,
        chunkJZLCHNYAParam404,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper75, "classBox");
async function chunkJZLCHNYAHelper76(
  chunkJZLCHNYAParam29,
  chunkJZLCHNYAParam30,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam30);
  chunkJZLCHNYAParam30.labelStyle = labelStyles;
  let chunkJZLCHNYAValue236 = chunkJZLCHNYAParam30,
    chunkJZLCHNYAValue237 = chunkJZLCHNYAParam30,
    chunkJZLCHNYAValue238 = "verifyMethod" in chunkJZLCHNYAParam30,
    chunkJZLCHNYAValue239 = chunkJZLCHNYAValue2(chunkJZLCHNYAParam30),
    chunkJZLCHNYAValue240 = chunkJZLCHNYAParam29
      .insert("g")
      .attr("class", chunkJZLCHNYAValue239)
      .attr("id", chunkJZLCHNYAParam30.domId ?? chunkJZLCHNYAParam30.id),
    chunkJZLCHNYAValue241;
  chunkJZLCHNYAValue241 = chunkJZLCHNYAValue238
    ? await chunkJZLCHNYAHelper77(
        chunkJZLCHNYAValue240,
        `&lt;&lt;${chunkJZLCHNYAValue236.type}&gt;&gt;`,
        0,
        chunkJZLCHNYAParam30.labelStyle,
      )
    : await chunkJZLCHNYAHelper77(
        chunkJZLCHNYAValue240,
        "&lt;&lt;Element&gt;&gt;",
        0,
        chunkJZLCHNYAParam30.labelStyle,
      );
  let chunkJZLCHNYAValue242 = chunkJZLCHNYAValue241,
    chunkJZLCHNYAValue243 = await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      chunkJZLCHNYAValue236.name,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle + "; font-weight: bold;",
    );
  if (
    ((chunkJZLCHNYAValue242 += chunkJZLCHNYAValue243 + 20),
    chunkJZLCHNYAValue238)
  ) {
    let chunkJZLCHNYAValue865 = await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      `${chunkJZLCHNYAValue236.requirementId ? `ID: ${chunkJZLCHNYAValue236.requirementId}` : ""}`,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle,
    );
    chunkJZLCHNYAValue242 += chunkJZLCHNYAValue865;
    let chunkJZLCHNYAValue866 = await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      `${chunkJZLCHNYAValue236.text ? `Text: ${chunkJZLCHNYAValue236.text}` : ""}`,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle,
    );
    chunkJZLCHNYAValue242 += chunkJZLCHNYAValue866;
    let chunkJZLCHNYAValue867 = await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      `${chunkJZLCHNYAValue236.risk ? `Risk: ${chunkJZLCHNYAValue236.risk}` : ""}`,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle,
    );
    chunkJZLCHNYAValue242 += chunkJZLCHNYAValue867;
    await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      `${chunkJZLCHNYAValue236.verifyMethod ? `Verification: ${chunkJZLCHNYAValue236.verifyMethod}` : ""}`,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle,
    );
  } else {
    let chunkJZLCHNYAValue1041 = await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      `${chunkJZLCHNYAValue237.type ? `Type: ${chunkJZLCHNYAValue237.type}` : ""}`,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle,
    );
    chunkJZLCHNYAValue242 += chunkJZLCHNYAValue1041;
    await chunkJZLCHNYAHelper77(
      chunkJZLCHNYAValue240,
      `${chunkJZLCHNYAValue237.docRef ? `Doc Ref: ${chunkJZLCHNYAValue237.docRef}` : ""}`,
      chunkJZLCHNYAValue242,
      chunkJZLCHNYAParam30.labelStyle,
    );
  }
  let chunkJZLCHNYAValue244 =
      (chunkJZLCHNYAValue240.node()?.getBBox().width ?? 200) + 20,
    chunkJZLCHNYAValue245 =
      (chunkJZLCHNYAValue240.node()?.getBBox().height ?? 200) + 20,
    chunkJZLCHNYAValue246 = -chunkJZLCHNYAValue244 / 2,
    chunkJZLCHNYAValue247 = -chunkJZLCHNYAValue245 / 2,
    chunkJZLCHNYAValue248 = rough.svg(chunkJZLCHNYAValue240),
    chunkJZLCHNYAValue249 = chunkATLVNIR6A(chunkJZLCHNYAParam30, {});
  chunkJZLCHNYAParam30.look !== "handDrawn" &&
    ((chunkJZLCHNYAValue249.roughness = 0),
    (chunkJZLCHNYAValue249.fillStyle = "solid"));
  let chunkJZLCHNYAValue250 = chunkJZLCHNYAValue248.rectangle(
      chunkJZLCHNYAValue246,
      chunkJZLCHNYAValue247,
      chunkJZLCHNYAValue244,
      chunkJZLCHNYAValue245,
      chunkJZLCHNYAValue249,
    ),
    chunkJZLCHNYAValue251 = chunkJZLCHNYAValue240.insert(
      () => chunkJZLCHNYAValue250,
      ":first-child",
    );
  if (
    (chunkJZLCHNYAValue251
      .attr("class", "basic label-container")
      .attr("style", nodeStyles),
    chunkJZLCHNYAValue240
      .selectAll(".label")
      .each(
        (
          chunkJZLCHNYAParam209,
          chunkJZLCHNYAParam210,
          chunkJZLCHNYAParam211,
        ) => {
          let chunkJZLCHNYAValue888 = Src(
              chunkJZLCHNYAParam211[chunkJZLCHNYAParam210],
            ),
            chunkJZLCHNYAValue889 = chunkJZLCHNYAValue888.attr("transform"),
            chunkJZLCHNYAValue890 = 0,
            chunkJZLCHNYAValue891 = 0;
          if (chunkJZLCHNYAValue889) {
            let chunkJZLCHNYAValue1066 = RegExp(
              /translate\(([^,]+),([^)]+)\)/,
            ).exec(chunkJZLCHNYAValue889);
            chunkJZLCHNYAValue1066 &&
              ((chunkJZLCHNYAValue890 = parseFloat(chunkJZLCHNYAValue1066[1])),
              (chunkJZLCHNYAValue891 = parseFloat(chunkJZLCHNYAValue1066[2])));
          }
          let chunkJZLCHNYAValue892 =
              chunkJZLCHNYAValue891 - chunkJZLCHNYAValue245 / 2,
            chunkJZLCHNYAValue893 = chunkJZLCHNYAValue246 + 10;
          (chunkJZLCHNYAParam210 === 0 || chunkJZLCHNYAParam210 === 1) &&
            (chunkJZLCHNYAValue893 = chunkJZLCHNYAValue890);
          chunkJZLCHNYAValue888.attr(
            "transform",
            `translate(${chunkJZLCHNYAValue893}, ${chunkJZLCHNYAValue892 + 20})`,
          );
        },
      ),
    chunkJZLCHNYAValue242 > chunkJZLCHNYAValue241 + chunkJZLCHNYAValue243 + 20)
  ) {
    let chunkJZLCHNYAValue1092 = chunkJZLCHNYAValue248.line(
      chunkJZLCHNYAValue246,
      chunkJZLCHNYAValue247 +
        chunkJZLCHNYAValue241 +
        chunkJZLCHNYAValue243 +
        20,
      chunkJZLCHNYAValue246 + chunkJZLCHNYAValue244,
      chunkJZLCHNYAValue247 +
        chunkJZLCHNYAValue241 +
        chunkJZLCHNYAValue243 +
        20,
      chunkJZLCHNYAValue249,
    );
    chunkJZLCHNYAValue240
      .insert(() => chunkJZLCHNYAValue1092)
      .attr("style", nodeStyles);
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam30, chunkJZLCHNYAValue251),
    (chunkJZLCHNYAParam30.intersect = function (chunkJZLCHNYAParam405) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam30,
        chunkJZLCHNYAParam405,
      );
    }),
    chunkJZLCHNYAValue240
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper76, "requirementBox");
async function chunkJZLCHNYAHelper77(
  chunkJZLCHNYAParam149,
  chunkJZLCHNYAParam150,
  chunkJZLCHNYAParam151,
  chunkJZLCHNYAParam152 = "",
) {
  if (chunkJZLCHNYAParam150 === "") return 0;
  let chunkJZLCHNYAValue716 = chunkJZLCHNYAParam149
      .insert("g")
      .attr("class", "label")
      .attr("style", chunkJZLCHNYAParam152),
    chunkJZLCHNYAValue717 = _chunkABZYJK2DL(),
    chunkJZLCHNYAValue718 = chunkJZLCHNYAValue717.htmlLabels ?? true,
    chunkJZLCHNYAValue719 = await chunkJA3XYJ7ZA(
      chunkJZLCHNYAValue716,
      chunkABZYJK2DQ(chunkS3R3BYOJD(chunkJZLCHNYAParam150)),
      {
        width:
          chunkS3R3BYOJL(chunkJZLCHNYAParam150, chunkJZLCHNYAValue717) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: chunkJZLCHNYAValue718,
        style: chunkJZLCHNYAParam152,
      },
      chunkJZLCHNYAValue717,
    ),
    chunkJZLCHNYAValue720;
  if (chunkJZLCHNYAValue718) {
    let chunkJZLCHNYAValue1059 = chunkJZLCHNYAValue719.children[0],
      chunkJZLCHNYAValue1060 = Src(chunkJZLCHNYAValue719);
    chunkJZLCHNYAValue720 = chunkJZLCHNYAValue1059.getBoundingClientRect();
    chunkJZLCHNYAValue1060.attr("width", chunkJZLCHNYAValue720.width);
    chunkJZLCHNYAValue1060.attr("height", chunkJZLCHNYAValue720.height);
  } else {
    let chunkJZLCHNYAValue995 = chunkJZLCHNYAValue719.children[0];
    for (let chunkJZLCHNYAValue1046 of chunkJZLCHNYAValue995.children) {
      chunkJZLCHNYAValue1046.textContent = chunkJZLCHNYAValue1046.textContent
        .replaceAll("&gt;", ">")
        .replaceAll("&lt;", "<");
      chunkJZLCHNYAParam152 &&
        chunkJZLCHNYAValue1046.setAttribute("style", chunkJZLCHNYAParam152);
    }
    chunkJZLCHNYAValue720 = chunkJZLCHNYAValue719.getBBox();
    chunkJZLCHNYAValue720.height += 6;
  }
  return (
    chunkJZLCHNYAValue716.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue720.width / 2},${-chunkJZLCHNYAValue720.height / 2 + chunkJZLCHNYAParam151})`,
    ),
    chunkJZLCHNYAValue720.height
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper77, "addText");
var chunkJZLCHNYAValue23 = chunkAGHRB4JFN((chunkJZLCHNYAParam271) => {
  switch (chunkJZLCHNYAParam271) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function chunkJZLCHNYAHelper78(
  chunkJZLCHNYAParam16,
  chunkJZLCHNYAParam17,
  { config },
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam17);
  chunkJZLCHNYAParam17.labelStyle = labelStyles || "";
  let chunkJZLCHNYAValue175 = chunkJZLCHNYAParam17.width;
  chunkJZLCHNYAParam17.width = (chunkJZLCHNYAParam17.width ?? 200) - 10;
  let { shapeSvg, bbox, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam16,
      chunkJZLCHNYAParam17,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam17),
    ),
    chunkJZLCHNYAValue176 = chunkJZLCHNYAParam17.padding || 10,
    chunkJZLCHNYAValue177 = "",
    chunkJZLCHNYAValue178;
  "ticket" in chunkJZLCHNYAParam17 &&
    chunkJZLCHNYAParam17.ticket &&
    config?.kanban?.ticketBaseUrl &&
    ((chunkJZLCHNYAValue177 = config?.kanban?.ticketBaseUrl.replace(
      "#TICKET#",
      chunkJZLCHNYAParam17.ticket,
    )),
    (chunkJZLCHNYAValue178 = shapeSvg
      .insert("svg:a", ":first-child")
      .attr("class", "kanban-ticket-link")
      .attr("xlink:href", chunkJZLCHNYAValue177)
      .attr("target", "_blank")));
  let chunkJZLCHNYAValue179 = {
      useHtmlLabels: chunkJZLCHNYAParam17.useHtmlLabels,
      labelStyle: chunkJZLCHNYAParam17.labelStyle || "",
      width: chunkJZLCHNYAParam17.width,
      img: chunkJZLCHNYAParam17.img,
      padding: chunkJZLCHNYAParam17.padding || 8,
      centerLabel: false,
    },
    _label,
    _bbox;
  chunkJZLCHNYAValue178
    ? ({ label: _label, bbox: _bbox } = await chunkJZLCHNYAValue1(
        chunkJZLCHNYAValue178,
        ("ticket" in chunkJZLCHNYAParam17 && chunkJZLCHNYAParam17.ticket) || "",
        chunkJZLCHNYAValue179,
      ))
    : ({ label: _label, bbox: _bbox } = await chunkJZLCHNYAValue1(
        shapeSvg,
        ("ticket" in chunkJZLCHNYAParam17 && chunkJZLCHNYAParam17.ticket) || "",
        chunkJZLCHNYAValue179,
      ));
  let { label: __label, bbox: __bbox } = await chunkJZLCHNYAValue1(
    shapeSvg,
    ("assigned" in chunkJZLCHNYAParam17 && chunkJZLCHNYAParam17.assigned) || "",
    chunkJZLCHNYAValue179,
  );
  chunkJZLCHNYAParam17.width = chunkJZLCHNYAValue175;
  let chunkJZLCHNYAValue180 = chunkJZLCHNYAParam17?.width || 0,
    chunkJZLCHNYAValue181 = Math.max(_bbox.height, __bbox.height) / 2,
    chunkJZLCHNYAValue182 =
      Math.max(bbox.height + 20, chunkJZLCHNYAParam17?.height || 0) +
      chunkJZLCHNYAValue181,
    chunkJZLCHNYAValue183 = -chunkJZLCHNYAValue180 / 2,
    chunkJZLCHNYAValue184 = -chunkJZLCHNYAValue182 / 2;
  label.attr(
    "transform",
    "translate(" +
      (chunkJZLCHNYAValue176 - chunkJZLCHNYAValue180 / 2) +
      ", " +
      (-chunkJZLCHNYAValue181 - bbox.height / 2) +
      ")",
  );
  _label.attr(
    "transform",
    "translate(" +
      (chunkJZLCHNYAValue176 - chunkJZLCHNYAValue180 / 2) +
      ", " +
      (-chunkJZLCHNYAValue181 + bbox.height / 2) +
      ")",
  );
  __label.attr(
    "transform",
    "translate(" +
      (chunkJZLCHNYAValue176 + chunkJZLCHNYAValue180 / 2 - __bbox.width - 20) +
      ", " +
      (-chunkJZLCHNYAValue181 + bbox.height / 2) +
      ")",
  );
  let chunkJZLCHNYAValue185,
    { rx, ry } = chunkJZLCHNYAParam17,
    { cssStyles } = chunkJZLCHNYAParam17;
  if (chunkJZLCHNYAParam17.look === "handDrawn") {
    let chunkJZLCHNYAValue989 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue990 = chunkATLVNIR6A(chunkJZLCHNYAParam17, {}),
      chunkJZLCHNYAValue991 =
        rx || ry
          ? chunkJZLCHNYAValue989.path(
              chunkJZLCHNYAValue4(
                chunkJZLCHNYAValue183,
                chunkJZLCHNYAValue184,
                chunkJZLCHNYAValue180,
                chunkJZLCHNYAValue182,
                rx || 0,
              ),
              chunkJZLCHNYAValue990,
            )
          : chunkJZLCHNYAValue989.rectangle(
              chunkJZLCHNYAValue183,
              chunkJZLCHNYAValue184,
              chunkJZLCHNYAValue180,
              chunkJZLCHNYAValue182,
              chunkJZLCHNYAValue990,
            );
    chunkJZLCHNYAValue185 = shapeSvg.insert(
      () => chunkJZLCHNYAValue991,
      ":first-child",
    );
    chunkJZLCHNYAValue185
      .attr("class", "basic label-container")
      .attr("style", cssStyles || null);
  } else {
    chunkJZLCHNYAValue185 = shapeSvg.insert("rect", ":first-child");
    chunkJZLCHNYAValue185
      .attr("class", "basic label-container __APA__")
      .attr("style", nodeStyles)
      .attr("rx", rx ?? 5)
      .attr("ry", ry ?? 5)
      .attr("x", chunkJZLCHNYAValue183)
      .attr("y", chunkJZLCHNYAValue184)
      .attr("width", chunkJZLCHNYAValue180)
      .attr("height", chunkJZLCHNYAValue182);
    let chunkJZLCHNYAValue818 =
      "priority" in chunkJZLCHNYAParam17 && chunkJZLCHNYAParam17.priority;
    if (chunkJZLCHNYAValue818) {
      let chunkJZLCHNYAValue947 = shapeSvg.append("line"),
        chunkJZLCHNYAValue948 = chunkJZLCHNYAValue183 + 2,
        chunkJZLCHNYAValue949 =
          chunkJZLCHNYAValue184 + Math.floor((rx ?? 0) / 2),
        chunkJZLCHNYAValue950 =
          chunkJZLCHNYAValue184 +
          chunkJZLCHNYAValue182 -
          Math.floor((rx ?? 0) / 2);
      chunkJZLCHNYAValue947
        .attr("x1", chunkJZLCHNYAValue948)
        .attr("y1", chunkJZLCHNYAValue949)
        .attr("x2", chunkJZLCHNYAValue948)
        .attr("y2", chunkJZLCHNYAValue950)
        .attr("stroke-width", "4")
        .attr("stroke", chunkJZLCHNYAValue23(chunkJZLCHNYAValue818));
    }
  }
  return (
    chunkJZLCHNYAU(chunkJZLCHNYAParam17, chunkJZLCHNYAValue185),
    (chunkJZLCHNYAParam17.height = chunkJZLCHNYAValue182),
    (chunkJZLCHNYAParam17.intersect = function (chunkJZLCHNYAParam406) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam17,
        chunkJZLCHNYAParam406,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper78, "kanbanItem");
async function chunkJZLCHNYAHelper79(
  chunkJZLCHNYAParam41,
  chunkJZLCHNYAParam42,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam42);
  chunkJZLCHNYAParam42.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam41,
      chunkJZLCHNYAParam42,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam42),
    ),
    chunkJZLCHNYAValue305 = bbox.width + 10 * halfPadding,
    chunkJZLCHNYAValue306 = bbox.height + 8 * halfPadding,
    chunkJZLCHNYAValue307 = 0.15 * chunkJZLCHNYAValue305,
    { cssStyles } = chunkJZLCHNYAParam42,
    chunkJZLCHNYAValue308 = bbox.width + 20,
    chunkJZLCHNYAValue309 = bbox.height + 20,
    chunkJZLCHNYAValue310 = Math.max(
      chunkJZLCHNYAValue305,
      chunkJZLCHNYAValue308,
    ),
    chunkJZLCHNYAValue311 = Math.max(
      chunkJZLCHNYAValue306,
      chunkJZLCHNYAValue309,
    );
  label.attr("transform", `translate(${-bbox.width / 2}, ${-bbox.height / 2})`);
  let chunkJZLCHNYAValue312,
    chunkJZLCHNYAValue313 = `M0 0 
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${chunkJZLCHNYAValue310 * 0.25},${-1 * chunkJZLCHNYAValue311 * 0.1}
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${chunkJZLCHNYAValue310 * 0.25},0
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${chunkJZLCHNYAValue310 * 0.25},0
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${chunkJZLCHNYAValue310 * 0.25},${chunkJZLCHNYAValue311 * 0.1}

    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${chunkJZLCHNYAValue310 * 0.15},${chunkJZLCHNYAValue311 * 0.33}
    a${chunkJZLCHNYAValue307 * 0.8},${chunkJZLCHNYAValue307 * 0.8} 1 0,0 0,${chunkJZLCHNYAValue311 * 0.34}
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${-1 * chunkJZLCHNYAValue310 * 0.15},${chunkJZLCHNYAValue311 * 0.33}

    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${-1 * chunkJZLCHNYAValue310 * 0.25},${chunkJZLCHNYAValue311 * 0.15}
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${-1 * chunkJZLCHNYAValue310 * 0.25},0
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${-1 * chunkJZLCHNYAValue310 * 0.25},0
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${-1 * chunkJZLCHNYAValue310 * 0.25},${-1 * chunkJZLCHNYAValue311 * 0.15}

    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${-1 * chunkJZLCHNYAValue310 * 0.1},${-1 * chunkJZLCHNYAValue311 * 0.33}
    a${chunkJZLCHNYAValue307 * 0.8},${chunkJZLCHNYAValue307 * 0.8} 1 0,0 0,${-1 * chunkJZLCHNYAValue311 * 0.34}
    a${chunkJZLCHNYAValue307},${chunkJZLCHNYAValue307} 1 0,0 ${chunkJZLCHNYAValue310 * 0.1},${-1 * chunkJZLCHNYAValue311 * 0.33}
  H0 V0 Z`;
  if (chunkJZLCHNYAParam42.look === "handDrawn") {
    let chunkJZLCHNYAValue1035 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1036 = chunkATLVNIR6A(chunkJZLCHNYAParam42, {}),
      chunkJZLCHNYAValue1037 = chunkJZLCHNYAValue1035.path(
        chunkJZLCHNYAValue313,
        chunkJZLCHNYAValue1036,
      );
    chunkJZLCHNYAValue312 = shapeSvg.insert(
      () => chunkJZLCHNYAValue1037,
      ":first-child",
    );
    chunkJZLCHNYAValue312
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles));
  } else
    chunkJZLCHNYAValue312 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunkJZLCHNYAValue313);
  return (
    chunkJZLCHNYAValue312.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue310 / 2}, ${-chunkJZLCHNYAValue311 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam42, chunkJZLCHNYAValue312),
    (chunkJZLCHNYAParam42.calcIntersect = function (
      chunkJZLCHNYAParam383,
      chunkJZLCHNYAParam384,
    ) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam383,
        chunkJZLCHNYAParam384,
      );
    }),
    (chunkJZLCHNYAParam42.intersect = function (chunkJZLCHNYAParam345) {
      return (
        chunkAGHRB4JFR.info(
          "Bang intersect",
          chunkJZLCHNYAParam42,
          chunkJZLCHNYAParam345,
        ),
        chunkJZLCHNYAValue12.rect(chunkJZLCHNYAParam42, chunkJZLCHNYAParam345)
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper79, "bang");
async function chunkJZLCHNYAHelper80(
  chunkJZLCHNYAParam51,
  chunkJZLCHNYAParam52,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam52);
  chunkJZLCHNYAParam52.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam51,
      chunkJZLCHNYAParam52,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam52),
    ),
    chunkJZLCHNYAValue370 = bbox.width + 2 * halfPadding,
    chunkJZLCHNYAValue371 = bbox.height + 2 * halfPadding,
    chunkJZLCHNYAValue372 = 0.15 * chunkJZLCHNYAValue370,
    chunkJZLCHNYAValue373 = 0.25 * chunkJZLCHNYAValue370,
    chunkJZLCHNYAValue374 = 0.35 * chunkJZLCHNYAValue370,
    chunkJZLCHNYAValue375 = 0.2 * chunkJZLCHNYAValue370,
    { cssStyles } = chunkJZLCHNYAParam52,
    chunkJZLCHNYAValue376,
    chunkJZLCHNYAValue377 = `M0 0 
    a${chunkJZLCHNYAValue372},${chunkJZLCHNYAValue372} 0 0,1 ${chunkJZLCHNYAValue370 * 0.25},${-1 * chunkJZLCHNYAValue370 * 0.1}
    a${chunkJZLCHNYAValue374},${chunkJZLCHNYAValue374} 1 0,1 ${chunkJZLCHNYAValue370 * 0.4},${-1 * chunkJZLCHNYAValue370 * 0.1}
    a${chunkJZLCHNYAValue373},${chunkJZLCHNYAValue373} 1 0,1 ${chunkJZLCHNYAValue370 * 0.35},${chunkJZLCHNYAValue370 * 0.2}

    a${chunkJZLCHNYAValue372},${chunkJZLCHNYAValue372} 1 0,1 ${chunkJZLCHNYAValue370 * 0.15},${chunkJZLCHNYAValue371 * 0.35}
    a${chunkJZLCHNYAValue375},${chunkJZLCHNYAValue375} 1 0,1 ${-1 * chunkJZLCHNYAValue370 * 0.15},${chunkJZLCHNYAValue371 * 0.65}

    a${chunkJZLCHNYAValue373},${chunkJZLCHNYAValue372} 1 0,1 ${-1 * chunkJZLCHNYAValue370 * 0.25},${chunkJZLCHNYAValue370 * 0.15}
    a${chunkJZLCHNYAValue374},${chunkJZLCHNYAValue374} 1 0,1 ${-1 * chunkJZLCHNYAValue370 * 0.5},0
    a${chunkJZLCHNYAValue372},${chunkJZLCHNYAValue372} 1 0,1 ${-1 * chunkJZLCHNYAValue370 * 0.25},${-1 * chunkJZLCHNYAValue370 * 0.15}

    a${chunkJZLCHNYAValue372},${chunkJZLCHNYAValue372} 1 0,1 ${-1 * chunkJZLCHNYAValue370 * 0.1},${-1 * chunkJZLCHNYAValue371 * 0.35}
    a${chunkJZLCHNYAValue375},${chunkJZLCHNYAValue375} 1 0,1 ${chunkJZLCHNYAValue370 * 0.1},${-1 * chunkJZLCHNYAValue371 * 0.65}
  H0 V0 Z`;
  if (chunkJZLCHNYAParam52.look === "handDrawn") {
    let chunkJZLCHNYAValue1038 = rough.svg(shapeSvg),
      chunkJZLCHNYAValue1039 = chunkATLVNIR6A(chunkJZLCHNYAParam52, {}),
      chunkJZLCHNYAValue1040 = chunkJZLCHNYAValue1038.path(
        chunkJZLCHNYAValue377,
        chunkJZLCHNYAValue1039,
      );
    chunkJZLCHNYAValue376 = shapeSvg.insert(
      () => chunkJZLCHNYAValue1040,
      ":first-child",
    );
    chunkJZLCHNYAValue376
      .attr("class", "basic label-container")
      .attr("style", chunkS3R3BYOJF(cssStyles));
  } else
    chunkJZLCHNYAValue376 = shapeSvg
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", nodeStyles)
      .attr("d", chunkJZLCHNYAValue377);
  return (
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    chunkJZLCHNYAValue376.attr(
      "transform",
      `translate(${-chunkJZLCHNYAValue370 / 2}, ${-chunkJZLCHNYAValue371 / 2})`,
    ),
    chunkJZLCHNYAU(chunkJZLCHNYAParam52, chunkJZLCHNYAValue376),
    (chunkJZLCHNYAParam52.calcIntersect = function (
      chunkJZLCHNYAParam385,
      chunkJZLCHNYAParam386,
    ) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam385,
        chunkJZLCHNYAParam386,
      );
    }),
    (chunkJZLCHNYAParam52.intersect = function (chunkJZLCHNYAParam344) {
      return (
        chunkAGHRB4JFR.info(
          "Cloud intersect",
          chunkJZLCHNYAParam52,
          chunkJZLCHNYAParam344,
        ),
        chunkJZLCHNYAValue12.rect(chunkJZLCHNYAParam52, chunkJZLCHNYAParam344)
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper80, "cloud");
async function chunkJZLCHNYAHelper81(
  chunkJZLCHNYAParam126,
  chunkJZLCHNYAParam127,
) {
  let { labelStyles, nodeStyles } = chunkATLVNIR6I(chunkJZLCHNYAParam127);
  chunkJZLCHNYAParam127.labelStyle = labelStyles;
  let { shapeSvg, bbox, halfPadding, label } = await chunkJZLCHNYAS(
      chunkJZLCHNYAParam126,
      chunkJZLCHNYAParam127,
      chunkJZLCHNYAValue2(chunkJZLCHNYAParam127),
    ),
    chunkJZLCHNYAValue660 = bbox.width + 8 * halfPadding,
    chunkJZLCHNYAValue661 = bbox.height + 2 * halfPadding,
    chunkJZLCHNYAValue662 = `
    M${-chunkJZLCHNYAValue660 / 2} ${chunkJZLCHNYAValue661 / 2 - 5}
    v${-chunkJZLCHNYAValue661 + 10}
    q0,-5 5,-5
    h${chunkJZLCHNYAValue660 - 10}
    q5,0 5,5
    v${chunkJZLCHNYAValue661 - 10}
    q0,5 -5,5
    h${-chunkJZLCHNYAValue660 + 10}
    q-5,0 -5,-5
    Z
  `,
    chunkJZLCHNYAValue663 = shapeSvg
      .append("path")
      .attr("id", "node-" + chunkJZLCHNYAParam127.id)
      .attr("class", "node-bkg node-" + chunkJZLCHNYAParam127.type)
      .attr("style", nodeStyles)
      .attr("d", chunkJZLCHNYAValue662);
  return (
    shapeSvg
      .append("line")
      .attr("class", "node-line-")
      .attr("x1", -chunkJZLCHNYAValue660 / 2)
      .attr("y1", chunkJZLCHNYAValue661 / 2)
      .attr("x2", chunkJZLCHNYAValue660 / 2)
      .attr("y2", chunkJZLCHNYAValue661 / 2),
    label.attr(
      "transform",
      `translate(${-bbox.width / 2}, ${-bbox.height / 2})`,
    ),
    shapeSvg.append(() => label.node()),
    chunkJZLCHNYAU(chunkJZLCHNYAParam127, chunkJZLCHNYAValue663),
    (chunkJZLCHNYAParam127.calcIntersect = function (
      chunkJZLCHNYAParam387,
      chunkJZLCHNYAParam388,
    ) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam387,
        chunkJZLCHNYAParam388,
      );
    }),
    (chunkJZLCHNYAParam127.intersect = function (chunkJZLCHNYAParam407) {
      return chunkJZLCHNYAValue12.rect(
        chunkJZLCHNYAParam127,
        chunkJZLCHNYAParam407,
      );
    }),
    shapeSvg
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper81, "defaultMindmapNode");
async function chunkJZLCHNYAHelper82(
  chunkJZLCHNYAParam346,
  chunkJZLCHNYAParam347,
) {
  return chunkJZLCHNYAHelper18(chunkJZLCHNYAParam346, chunkJZLCHNYAParam347, {
    padding: chunkJZLCHNYAParam347.padding ?? 0,
  });
}
chunkAGHRB4JFN(chunkJZLCHNYAHelper82, "mindmapCircle");
var chunkJZLCHNYAValue24 = [
    {
      semanticName: "Process",
      name: "Rectangle",
      shortName: "rect",
      description: "Standard process shape",
      aliases: ["proc", "process", "rectangle"],
      internalAliases: ["squareRect"],
      handler: chunkJZLCHNYAHelper57,
    },
    {
      semanticName: "Event",
      name: "Rounded Rectangle",
      shortName: "rounded",
      description: "Represents an event",
      aliases: ["event"],
      internalAliases: ["roundedRect"],
      handler: chunkJZLCHNYAHelper54,
    },
    {
      semanticName: "Terminal Point",
      name: "Stadium",
      shortName: "stadium",
      description: "Terminal point",
      aliases: ["terminal", "pill"],
      handler: at,
    },
    {
      semanticName: "Subprocess",
      name: "Framed Rectangle",
      shortName: "fr-rect",
      description: "Subprocess",
      aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
      handler: chunkJZLCHNYAHelper61,
    },
    {
      semanticName: "Database",
      name: "Cylinder",
      shortName: "cyl",
      description: "Database storage",
      aliases: ["db", "database", "cylinder"],
      handler: chunkJZLCHNYAHelper26,
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: ["circ"],
      handler: chunkJZLCHNYAHelper18,
    },
    {
      semanticName: "Bang",
      name: "Bang",
      shortName: "bang",
      description: "Bang",
      aliases: ["bang"],
      handler: chunkJZLCHNYAHelper79,
    },
    {
      semanticName: "Cloud",
      name: "Cloud",
      shortName: "cloud",
      description: "cloud",
      aliases: ["cloud"],
      handler: chunkJZLCHNYAHelper80,
    },
    {
      semanticName: "Decision",
      name: "Diamond",
      shortName: "diam",
      description: "Decision-making step",
      aliases: ["decision", "diamond", "question"],
      handler: chunkJZLCHNYAHelper51,
    },
    {
      semanticName: "Prepare Conditional",
      name: "Hexagon",
      shortName: "hex",
      description: "Preparation or condition step",
      aliases: ["hexagon", "prepare"],
      handler: chunkJZLCHNYAHelper33,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Right",
      shortName: "lean-r",
      description: "Represents input or output",
      aliases: ["lean-right", "in-out"],
      internalAliases: ["lean_right"],
      handler: chunkJZLCHNYAHelper44,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Left",
      shortName: "lean-l",
      description: "Represents output or input",
      aliases: ["lean-left", "out-in"],
      internalAliases: ["lean_left"],
      handler: chunkJZLCHNYAHelper43,
    },
    {
      semanticName: "Priority Action",
      name: "Trapezoid Base Bottom",
      shortName: "trap-b",
      description: "Priority action",
      aliases: ["priority", "trapezoid-bottom", "trapezoid"],
      handler: _t,
    },
    {
      semanticName: "Manual Operation",
      name: "Trapezoid Base Top",
      shortName: "trap-t",
      description: "Represents a manual task",
      aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
      internalAliases: ["inv_trapezoid"],
      handler: chunkJZLCHNYAHelper40,
    },
    {
      semanticName: "Stop",
      name: "Double Circle",
      shortName: "dbl-circ",
      description: "Represents a stop point",
      aliases: ["double-circle"],
      internalAliases: ["doublecircle"],
      handler: chunkJZLCHNYAHelper28,
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: chunkJZLCHNYAHelper64,
    },
    {
      semanticName: "Card",
      name: "Notched Rectangle",
      shortName: "notch-rect",
      description: "Represents a card",
      aliases: ["card", "notched-rectangle"],
      handler: chunkJZLCHNYAHelper16,
    },
    {
      semanticName: "Lined/Shaded Process",
      name: "Lined Rectangle",
      shortName: "lin-rect",
      description: "Lined process shape",
      aliases: [
        "lined-rectangle",
        "lined-process",
        "lin-proc",
        "shaded-process",
      ],
      handler: chunkJZLCHNYAHelper55,
    },
    {
      semanticName: "Start",
      name: "Small Circle",
      shortName: "sm-circ",
      description: "Small starting point",
      aliases: ["start", "small-circle"],
      internalAliases: ["stateStart"],
      handler: chunkJZLCHNYAHelper60,
    },
    {
      semanticName: "Stop",
      name: "Framed Circle",
      shortName: "fr-circ",
      description: "Stop point",
      aliases: ["stop", "framed-circle"],
      internalAliases: ["stateEnd"],
      handler: chunkJZLCHNYAHelper59,
    },
    {
      semanticName: "Fork/Join",
      name: "Filled Rectangle",
      shortName: "fork",
      description: "Fork or join in process flow",
      aliases: ["join"],
      internalAliases: ["forkJoin"],
      handler: chunkJZLCHNYAHelper31,
    },
    {
      semanticName: "Collate",
      name: "Hourglass",
      shortName: "hourglass",
      description: "Represents a collate operation",
      aliases: ["hourglass", "collate"],
      handler: chunkJZLCHNYAHelper34,
    },
    {
      semanticName: "Comment",
      name: "Curly Brace",
      shortName: "brace",
      description: "Adds a comment",
      aliases: ["comment", "brace-l"],
      handler: _e,
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: chunkJZLCHNYAHelper23,
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: chunkJZLCHNYAHelper25,
    },
    {
      semanticName: "Com Link",
      name: "Lightning Bolt",
      shortName: "bolt",
      description: "Communication link",
      aliases: ["com-link", "lightning-bolt"],
      handler: chunkJZLCHNYAHelper45,
    },
    {
      semanticName: "Document",
      name: "Document",
      shortName: "doc",
      description: "Represents a document",
      aliases: ["doc", "document"],
      handler: chunkJZLCHNYAHelper68,
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: ["half-rounded-rectangle"],
      handler: chunkJZLCHNYAHelper32,
    },
    {
      semanticName: "Direct Access Storage",
      name: "Horizontal Cylinder",
      shortName: "h-cyl",
      description: "Direct access storage",
      aliases: ["das", "horizontal-cylinder"],
      handler: chunkJZLCHNYAHelper65,
    },
    {
      semanticName: "Disk Storage",
      name: "Lined Cylinder",
      shortName: "lin-cyl",
      description: "Disk storage",
      aliases: ["disk", "lined-cylinder"],
      handler: chunkJZLCHNYAHelper46,
    },
    {
      semanticName: "Display",
      name: "Curved Trapezoid",
      shortName: "curv-trap",
      description: "Represents a display",
      aliases: ["curved-trapezoid", "display"],
      handler: be,
    },
    {
      semanticName: "Divided Process",
      name: "Divided Rectangle",
      shortName: "div-rect",
      description: "Divided process shape",
      aliases: ["div-proc", "divided-rectangle", "divided-process"],
      handler: chunkJZLCHNYAHelper27,
    },
    {
      semanticName: "Extract",
      name: "Triangle",
      shortName: "tri",
      description: "Extraction process",
      aliases: ["extract", "triangle"],
      handler: chunkJZLCHNYAHelper67,
    },
    {
      semanticName: "Internal Storage",
      name: "Window Pane",
      shortName: "win-pane",
      description: "Internal storage",
      aliases: ["internal-storage", "window-pane"],
      handler: chunkJZLCHNYAHelper70,
    },
    {
      semanticName: "Junction",
      name: "Filled Circle",
      shortName: "f-circ",
      description: "Junction point",
      aliases: ["junction", "filled-circle"],
      handler: chunkJZLCHNYAHelper29,
    },
    {
      semanticName: "Loop Limit",
      name: "Trapezoidal Pentagon",
      shortName: "notch-pent",
      description: "Loop limit step",
      aliases: ["loop-limit", "notched-pentagon"],
      handler: chunkJZLCHNYAHelper66,
    },
    {
      semanticName: "Manual File",
      name: "Flipped Triangle",
      shortName: "flip-tri",
      description: "Manual file operation",
      aliases: ["manual-file", "flipped-triangle"],
      handler: chunkJZLCHNYAHelper30,
    },
    {
      semanticName: "Manual Input",
      name: "Sloped Rectangle",
      shortName: "sl-rect",
      description: "Manual input step",
      aliases: ["manual-input", "sloped-rectangle"],
      handler: chunkJZLCHNYAHelper56,
    },
    {
      semanticName: "Multi-Document",
      name: "Stacked Document",
      shortName: "docs",
      description: "Multiple documents",
      aliases: ["documents", "st-doc", "stacked-document"],
      handler: chunkJZLCHNYAHelper49,
    },
    {
      semanticName: "Multi-Process",
      name: "Stacked Rectangle",
      shortName: "st-rect",
      description: "Multiple processes",
      aliases: ["procs", "processes", "stacked-rectangle"],
      handler: chunkJZLCHNYAHelper48,
    },
    {
      semanticName: "Stored Data",
      name: "Bow Tie Rectangle",
      shortName: "bow-rect",
      description: "Stored data",
      aliases: ["stored-data", "bow-tie-rectangle"],
      handler: chunkJZLCHNYAHelper14,
    },
    {
      semanticName: "Summary",
      name: "Crossed Circle",
      shortName: "cross-circ",
      description: "Summary",
      aliases: ["summary", "crossed-circle"],
      handler: chunkJZLCHNYAHelper20,
    },
    {
      semanticName: "Tagged Document",
      name: "Tagged Document",
      shortName: "tag-doc",
      description: "Tagged document",
      aliases: ["tag-doc", "tagged-document"],
      handler: chunkJZLCHNYAHelper63,
    },
    {
      semanticName: "Tagged Process",
      name: "Tagged Rectangle",
      shortName: "tag-rect",
      description: "Tagged process",
      aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
      handler: chunkJZLCHNYAHelper62,
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: ["paper-tape"],
      handler: chunkJZLCHNYAHelper69,
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: ["rect_left_inv_arrow"],
      handler: $e,
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: ["lined-document"],
      handler: chunkJZLCHNYAHelper47,
    },
  ],
  chunkJZLCHNYAValue25 = chunkAGHRB4JFN(() => {
    let chunkJZLCHNYAValue780 = {
        state: chunkJZLCHNYAHelper58,
        choice: chunkJZLCHNYAHelper17,
        note: chunkJZLCHNYAHelper50,
        rectWithTitle: chunkJZLCHNYAHelper52,
        labelRect: chunkJZLCHNYAHelper42,
        iconSquare: chunkJZLCHNYAHelper38,
        iconCircle: chunkJZLCHNYAHelper36,
        icon: chunkJZLCHNYAHelper35,
        iconRounded: chunkJZLCHNYAHelper37,
        imageSquare: chunkJZLCHNYAHelper39,
        anchor: chunkJZLCHNYAHelper12,
        kanbanItem: chunkJZLCHNYAHelper78,
        mindmapCircle: chunkJZLCHNYAHelper82,
        defaultMindmapNode: chunkJZLCHNYAHelper81,
        classBox: chunkJZLCHNYAHelper75,
        erBox: chunkJZLCHNYAHelper71,
        requirementBox: chunkJZLCHNYAHelper76,
      },
      chunkJZLCHNYAValue781 = [
        ...Object.entries(chunkJZLCHNYAValue780),
        ...chunkJZLCHNYAValue24.flatMap((item) =>
          [
            item.shortName,
            ...("aliases" in item ? item.aliases : []),
            ...("internalAliases" in item ? item.internalAliases : []),
          ].map((_item) => [_item, item.handler]),
        ),
      ];
    return Object.fromEntries(chunkJZLCHNYAValue781);
  }, "generateShapeMap")();
function chunkJZLCHNYAO(chunkJZLCHNYAParam413) {
  return chunkJZLCHNYAParam413 in chunkJZLCHNYAValue25;
}
chunkAGHRB4JFN(chunkJZLCHNYAO, "isValidShape");
var $ = new Map();
async function chunkJZLCHNYAA(
  chunkJZLCHNYAParam176,
  chunkJZLCHNYAParam177,
  chunkJZLCHNYAParam178,
) {
  let chunkJZLCHNYAValue777, chunkJZLCHNYAValue778;
  chunkJZLCHNYAParam177.shape === "rect" &&
    (chunkJZLCHNYAParam177.rx && chunkJZLCHNYAParam177.ry
      ? (chunkJZLCHNYAParam177.shape = "roundedRect")
      : (chunkJZLCHNYAParam177.shape = "squareRect"));
  let chunkJZLCHNYAValue779 = chunkJZLCHNYAParam177.shape
    ? chunkJZLCHNYAValue25[chunkJZLCHNYAParam177.shape]
    : undefined;
  if (!chunkJZLCHNYAValue779)
    throw Error(
      `No such shape: ${chunkJZLCHNYAParam177.shape}. Please check your syntax.`,
    );
  if (chunkJZLCHNYAParam177.link) {
    let chunkJZLCHNYAValue979;
    chunkJZLCHNYAParam178.config.securityLevel === "sandbox"
      ? (chunkJZLCHNYAValue979 = "_top")
      : chunkJZLCHNYAParam177.linkTarget &&
        (chunkJZLCHNYAValue979 = chunkJZLCHNYAParam177.linkTarget || "_blank");
    chunkJZLCHNYAValue777 = chunkJZLCHNYAParam176
      .insert("svg:a")
      .attr("xlink:href", chunkJZLCHNYAParam177.link)
      .attr("target", chunkJZLCHNYAValue979 ?? null);
    chunkJZLCHNYAValue778 = await chunkJZLCHNYAValue779(
      chunkJZLCHNYAValue777,
      chunkJZLCHNYAParam177,
      chunkJZLCHNYAParam178,
    );
  } else {
    chunkJZLCHNYAValue778 = await chunkJZLCHNYAValue779(
      chunkJZLCHNYAParam176,
      chunkJZLCHNYAParam177,
      chunkJZLCHNYAParam178,
    );
    chunkJZLCHNYAValue777 = chunkJZLCHNYAValue778;
  }
  return (
    chunkJZLCHNYAParam177.tooltip &&
      chunkJZLCHNYAValue778.attr("title", chunkJZLCHNYAParam177.tooltip),
    $.set(chunkJZLCHNYAParam177.id, chunkJZLCHNYAValue777),
    chunkJZLCHNYAParam177.haveCallback &&
      chunkJZLCHNYAValue777.attr(
        "class",
        chunkJZLCHNYAValue777.attr("class") + " clickable",
      ),
    chunkJZLCHNYAValue777
  );
}
chunkAGHRB4JFN(chunkJZLCHNYAA, "insertNode");
export const chunkJZLCHNYAN = chunkAGHRB4JFN(() => {
  $.clear();
}, "clear");
export const chunkJZLCHNYAL = chunkAGHRB4JFN(
  (chunkJZLCHNYAParam414, chunkJZLCHNYAParam415) => {
    $.set(chunkJZLCHNYAParam415.id, chunkJZLCHNYAParam414);
  },
  "setNodeElem",
);
export const chunkJZLCHNYAC = chunkAGHRB4JFN((chunkJZLCHNYAParam203) => {
  let chunkJZLCHNYAValue845 = $.get(chunkJZLCHNYAParam203.id);
  chunkAGHRB4JFR.trace(
    "Transforming node",
    chunkJZLCHNYAParam203.diff,
    chunkJZLCHNYAParam203,
    "translate(" +
      (chunkJZLCHNYAParam203.x - chunkJZLCHNYAParam203.width / 2 - 5) +
      ", " +
      chunkJZLCHNYAParam203.width / 2 +
      ")",
  );
  let chunkJZLCHNYAValue846 = chunkJZLCHNYAParam203.diff || 0;
  return (
    chunkJZLCHNYAParam203.clusterNode
      ? chunkJZLCHNYAValue845.attr(
          "transform",
          "translate(" +
            (chunkJZLCHNYAParam203.x +
              chunkJZLCHNYAValue846 -
              chunkJZLCHNYAParam203.width / 2) +
            ", " +
            (chunkJZLCHNYAParam203.y - chunkJZLCHNYAParam203.height / 2 - 8) +
            ")",
        )
      : chunkJZLCHNYAValue845.attr(
          "transform",
          "translate(" +
            chunkJZLCHNYAParam203.x +
            ", " +
            chunkJZLCHNYAParam203.y +
            ")",
        ),
    chunkJZLCHNYAValue846
  );
}, "positionNode");
export {
  chunkJZLCHNYAA,
  chunkJZLCHNYAO,
  chunkJZLCHNYAR,
  chunkJZLCHNYAS,
  chunkJZLCHNYAU,
};
