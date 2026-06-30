// Restored from ref/webview/assets/stateDiagram-FKZM4ZOC-DB2Mqdbr.js
// StateDiagramFKZM4ZOC chunk restored from the Codex webview bundle.
import { Dagre } from "./dagre";
import { chunkS3R3BYOJC } from "./chunk-s3r3byoj";
import { Graphlib } from "./graphlib";
import { Src } from "./roughjs-geometry";
import { line } from "./d3-shape-line";
import { stepH } from "./d3-shape-curves";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DL,
  _chunkABZYJK2DN,
  chunkABZYJK2DW,
  chunkABZYJK2DM,
} from "./katex-auto-render";
import {
  getStateDiagramStyles,
  stateDiagramParser,
  StateDiagramDb,
} from "./mermaid-state-diagram-fpaj";
var stateDiagramFKZM4ZOCValue1 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam36) =>
      stateDiagramFKZM4ZOCParam36
        .append("circle")
        .attr("class", "start-state")
        .attr("r", _chunkABZYJK2DL().state.sizeUnit)
        .attr(
          "cx",
          _chunkABZYJK2DL().state.padding + _chunkABZYJK2DL().state.sizeUnit,
        )
        .attr(
          "cy",
          _chunkABZYJK2DL().state.padding + _chunkABZYJK2DL().state.sizeUnit,
        ),
    "drawStartState",
  ),
  stateDiagramFKZM4ZOCValue2 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam35) =>
      stateDiagramFKZM4ZOCParam35
        .append("line")
        .style("stroke", "grey")
        .style("stroke-dasharray", "3")
        .attr("x1", _chunkABZYJK2DL().state.textHeight)
        .attr("class", "divider")
        .attr("x2", _chunkABZYJK2DL().state.textHeight * 2)
        .attr("y1", 0)
        .attr("y2", 0),
    "drawDivider",
  ),
  stateDiagramFKZM4ZOCValue3 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam27, stateDiagramFKZM4ZOCParam28) => {
      let stateDiagramFKZM4ZOCValue84 = stateDiagramFKZM4ZOCParam27
          .append("text")
          .attr("x", 2 * _chunkABZYJK2DL().state.padding)
          .attr(
            "y",
            _chunkABZYJK2DL().state.textHeight +
              2 * _chunkABZYJK2DL().state.padding,
          )
          .attr("font-size", _chunkABZYJK2DL().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFKZM4ZOCParam28.id),
        stateDiagramFKZM4ZOCValue85 = stateDiagramFKZM4ZOCValue84
          .node()
          .getBBox();
      return (
        stateDiagramFKZM4ZOCParam27
          .insert("rect", ":first-child")
          .attr("x", _chunkABZYJK2DL().state.padding)
          .attr("y", _chunkABZYJK2DL().state.padding)
          .attr(
            "width",
            stateDiagramFKZM4ZOCValue85.width +
              2 * _chunkABZYJK2DL().state.padding,
          )
          .attr(
            "height",
            stateDiagramFKZM4ZOCValue85.height +
              2 * _chunkABZYJK2DL().state.padding,
          )
          .attr("rx", _chunkABZYJK2DL().state.radius),
        stateDiagramFKZM4ZOCValue84
      );
    },
    "drawSimpleState",
  ),
  stateDiagramFKZM4ZOCValue4 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam11, stateDiagramFKZM4ZOCParam12) => {
      let stateDiagramFKZM4ZOCValue35 = chunkAGHRB4JFN(function (
          stateDiagramFKZM4ZOCParam37,
          stateDiagramFKZM4ZOCParam38,
          stateDiagramFKZM4ZOCParam39,
        ) {
          let stateDiagramFKZM4ZOCValue100 = stateDiagramFKZM4ZOCParam37
            .append("tspan")
            .attr("x", 2 * _chunkABZYJK2DL().state.padding)
            .text(stateDiagramFKZM4ZOCParam38);
          stateDiagramFKZM4ZOCParam39 ||
            stateDiagramFKZM4ZOCValue100.attr(
              "dy",
              _chunkABZYJK2DL().state.textHeight,
            );
        }, "addTspan"),
        stateDiagramFKZM4ZOCValue36 = stateDiagramFKZM4ZOCParam11
          .append("text")
          .attr("x", 2 * _chunkABZYJK2DL().state.padding)
          .attr(
            "y",
            _chunkABZYJK2DL().state.textHeight +
              1.3 * _chunkABZYJK2DL().state.padding,
          )
          .attr("font-size", _chunkABZYJK2DL().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFKZM4ZOCParam12.descriptions[0])
          .node()
          .getBBox(),
        stateDiagramFKZM4ZOCValue37 = stateDiagramFKZM4ZOCValue36.height,
        stateDiagramFKZM4ZOCValue38 = stateDiagramFKZM4ZOCParam11
          .append("text")
          .attr("x", _chunkABZYJK2DL().state.padding)
          .attr(
            "y",
            stateDiagramFKZM4ZOCValue37 +
              _chunkABZYJK2DL().state.padding * 0.4 +
              _chunkABZYJK2DL().state.dividerMargin +
              _chunkABZYJK2DL().state.textHeight,
          )
          .attr("class", "state-description"),
        stateDiagramFKZM4ZOCValue39 = true,
        stateDiagramFKZM4ZOCValue40 = true;
      stateDiagramFKZM4ZOCParam12.descriptions.forEach(function (item) {
        stateDiagramFKZM4ZOCValue39 ||
          (stateDiagramFKZM4ZOCValue35(
            stateDiagramFKZM4ZOCValue38,
            item,
            stateDiagramFKZM4ZOCValue40,
          ),
          (stateDiagramFKZM4ZOCValue40 = false));
        stateDiagramFKZM4ZOCValue39 = false;
      });
      let stateDiagramFKZM4ZOCValue41 = stateDiagramFKZM4ZOCParam11
          .append("line")
          .attr("x1", _chunkABZYJK2DL().state.padding)
          .attr(
            "y1",
            _chunkABZYJK2DL().state.padding +
              stateDiagramFKZM4ZOCValue37 +
              _chunkABZYJK2DL().state.dividerMargin / 2,
          )
          .attr(
            "y2",
            _chunkABZYJK2DL().state.padding +
              stateDiagramFKZM4ZOCValue37 +
              _chunkABZYJK2DL().state.dividerMargin / 2,
          )
          .attr("class", "descr-divider"),
        stateDiagramFKZM4ZOCValue42 = stateDiagramFKZM4ZOCValue38
          .node()
          .getBBox(),
        stateDiagramFKZM4ZOCValue43 = Math.max(
          stateDiagramFKZM4ZOCValue42.width,
          stateDiagramFKZM4ZOCValue36.width,
        );
      return (
        stateDiagramFKZM4ZOCValue41.attr(
          "x2",
          stateDiagramFKZM4ZOCValue43 + 3 * _chunkABZYJK2DL().state.padding,
        ),
        stateDiagramFKZM4ZOCParam11
          .insert("rect", ":first-child")
          .attr("x", _chunkABZYJK2DL().state.padding)
          .attr("y", _chunkABZYJK2DL().state.padding)
          .attr(
            "width",
            stateDiagramFKZM4ZOCValue43 + 2 * _chunkABZYJK2DL().state.padding,
          )
          .attr(
            "height",
            stateDiagramFKZM4ZOCValue42.height +
              stateDiagramFKZM4ZOCValue37 +
              2 * _chunkABZYJK2DL().state.padding,
          )
          .attr("rx", _chunkABZYJK2DL().state.radius),
        stateDiagramFKZM4ZOCParam11
      );
    },
    "drawDescrState",
  ),
  stateDiagramFKZM4ZOCValue5 = chunkAGHRB4JFN(
    (
      stateDiagramFKZM4ZOCParam13,
      stateDiagramFKZM4ZOCParam14,
      stateDiagramFKZM4ZOCParam15,
    ) => {
      let stateDiagramFKZM4ZOCValue44 = _chunkABZYJK2DL().state.padding,
        stateDiagramFKZM4ZOCValue45 = 2 * _chunkABZYJK2DL().state.padding,
        stateDiagramFKZM4ZOCValue46 = stateDiagramFKZM4ZOCParam13
          .node()
          .getBBox(),
        stateDiagramFKZM4ZOCValue47 = stateDiagramFKZM4ZOCValue46.width,
        stateDiagramFKZM4ZOCValue48 = stateDiagramFKZM4ZOCValue46.x,
        stateDiagramFKZM4ZOCValue49 = stateDiagramFKZM4ZOCParam13
          .append("text")
          .attr("x", 0)
          .attr("y", _chunkABZYJK2DL().state.titleShift)
          .attr("font-size", _chunkABZYJK2DL().state.fontSize)
          .attr("class", "state-title")
          .text(stateDiagramFKZM4ZOCParam14.id),
        stateDiagramFKZM4ZOCValue50 =
          stateDiagramFKZM4ZOCValue49.node().getBBox().width +
          stateDiagramFKZM4ZOCValue45,
        stateDiagramFKZM4ZOCValue51 = Math.max(
          stateDiagramFKZM4ZOCValue50,
          stateDiagramFKZM4ZOCValue47,
        );
      stateDiagramFKZM4ZOCValue51 === stateDiagramFKZM4ZOCValue47 &&
        (stateDiagramFKZM4ZOCValue51 += stateDiagramFKZM4ZOCValue45);
      let stateDiagramFKZM4ZOCValue52,
        stateDiagramFKZM4ZOCValue53 = stateDiagramFKZM4ZOCParam13
          .node()
          .getBBox();
      stateDiagramFKZM4ZOCParam14.doc;
      stateDiagramFKZM4ZOCValue52 =
        stateDiagramFKZM4ZOCValue48 - stateDiagramFKZM4ZOCValue44;
      stateDiagramFKZM4ZOCValue50 > stateDiagramFKZM4ZOCValue47 &&
        (stateDiagramFKZM4ZOCValue52 =
          (stateDiagramFKZM4ZOCValue47 - stateDiagramFKZM4ZOCValue51) / 2 +
          stateDiagramFKZM4ZOCValue44);
      Math.abs(stateDiagramFKZM4ZOCValue48 - stateDiagramFKZM4ZOCValue53.x) <
        stateDiagramFKZM4ZOCValue44 &&
        stateDiagramFKZM4ZOCValue50 > stateDiagramFKZM4ZOCValue47 &&
        (stateDiagramFKZM4ZOCValue52 =
          stateDiagramFKZM4ZOCValue48 -
          (stateDiagramFKZM4ZOCValue50 - stateDiagramFKZM4ZOCValue47) / 2);
      let stateDiagramFKZM4ZOCValue54 = 1 - _chunkABZYJK2DL().state.textHeight;
      return (
        stateDiagramFKZM4ZOCParam13
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFKZM4ZOCValue52)
          .attr("y", stateDiagramFKZM4ZOCValue54)
          .attr(
            "class",
            stateDiagramFKZM4ZOCParam15 ? "alt-composit" : "composit",
          )
          .attr("width", stateDiagramFKZM4ZOCValue51)
          .attr(
            "height",
            stateDiagramFKZM4ZOCValue53.height +
              _chunkABZYJK2DL().state.textHeight +
              _chunkABZYJK2DL().state.titleShift +
              1,
          )
          .attr("rx", "0"),
        stateDiagramFKZM4ZOCValue49.attr(
          "x",
          stateDiagramFKZM4ZOCValue52 + stateDiagramFKZM4ZOCValue44,
        ),
        stateDiagramFKZM4ZOCValue50 <= stateDiagramFKZM4ZOCValue47 &&
          stateDiagramFKZM4ZOCValue49.attr(
            "x",
            stateDiagramFKZM4ZOCValue48 +
              (stateDiagramFKZM4ZOCValue51 - stateDiagramFKZM4ZOCValue45) / 2 -
              stateDiagramFKZM4ZOCValue50 / 2 +
              stateDiagramFKZM4ZOCValue44,
          ),
        stateDiagramFKZM4ZOCParam13
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFKZM4ZOCValue52)
          .attr(
            "y",
            _chunkABZYJK2DL().state.titleShift -
              _chunkABZYJK2DL().state.textHeight -
              _chunkABZYJK2DL().state.padding,
          )
          .attr("width", stateDiagramFKZM4ZOCValue51)
          .attr("height", _chunkABZYJK2DL().state.textHeight * 3)
          .attr("rx", _chunkABZYJK2DL().state.radius),
        stateDiagramFKZM4ZOCParam13
          .insert("rect", ":first-child")
          .attr("x", stateDiagramFKZM4ZOCValue52)
          .attr(
            "y",
            _chunkABZYJK2DL().state.titleShift -
              _chunkABZYJK2DL().state.textHeight -
              _chunkABZYJK2DL().state.padding,
          )
          .attr("width", stateDiagramFKZM4ZOCValue51)
          .attr(
            "height",
            stateDiagramFKZM4ZOCValue53.height +
              3 +
              2 * _chunkABZYJK2DL().state.textHeight,
          )
          .attr("rx", _chunkABZYJK2DL().state.radius),
        stateDiagramFKZM4ZOCParam13
      );
    },
    "addTitleAndBox",
  ),
  stateDiagramFKZM4ZOCValue6 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam26) => (
      stateDiagramFKZM4ZOCParam26
        .append("circle")
        .attr("class", "end-state-outer")
        .attr(
          "r",
          _chunkABZYJK2DL().state.sizeUnit +
            _chunkABZYJK2DL().state.miniPadding,
        )
        .attr(
          "cx",
          _chunkABZYJK2DL().state.padding +
            _chunkABZYJK2DL().state.sizeUnit +
            _chunkABZYJK2DL().state.miniPadding,
        )
        .attr(
          "cy",
          _chunkABZYJK2DL().state.padding +
            _chunkABZYJK2DL().state.sizeUnit +
            _chunkABZYJK2DL().state.miniPadding,
        ),
      stateDiagramFKZM4ZOCParam26
        .append("circle")
        .attr("class", "end-state-inner")
        .attr("r", _chunkABZYJK2DL().state.sizeUnit)
        .attr(
          "cx",
          _chunkABZYJK2DL().state.padding +
            _chunkABZYJK2DL().state.sizeUnit +
            2,
        )
        .attr(
          "cy",
          _chunkABZYJK2DL().state.padding +
            _chunkABZYJK2DL().state.sizeUnit +
            2,
        )
    ),
    "drawEndState",
  ),
  stateDiagramFKZM4ZOCValue7 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam29, stateDiagramFKZM4ZOCParam30) => {
      let stateDiagramFKZM4ZOCValue88 = _chunkABZYJK2DL().state.forkWidth,
        stateDiagramFKZM4ZOCValue89 = _chunkABZYJK2DL().state.forkHeight;
      if (stateDiagramFKZM4ZOCParam30.parentId) {
        let stateDiagramFKZM4ZOCValue104 = stateDiagramFKZM4ZOCValue88;
        stateDiagramFKZM4ZOCValue88 = stateDiagramFKZM4ZOCValue89;
        stateDiagramFKZM4ZOCValue89 = stateDiagramFKZM4ZOCValue104;
      }
      return stateDiagramFKZM4ZOCParam29
        .append("rect")
        .style("stroke", "black")
        .style("fill", "black")
        .attr("width", stateDiagramFKZM4ZOCValue88)
        .attr("height", stateDiagramFKZM4ZOCValue89)
        .attr("x", _chunkABZYJK2DL().state.padding)
        .attr("y", _chunkABZYJK2DL().state.padding);
    },
    "drawForkJoinState",
  ),
  stateDiagramFKZM4ZOCValue8 = chunkAGHRB4JFN(
    (
      stateDiagramFKZM4ZOCParam16,
      stateDiagramFKZM4ZOCParam17,
      stateDiagramFKZM4ZOCParam18,
      stateDiagramFKZM4ZOCParam19,
    ) => {
      let stateDiagramFKZM4ZOCValue66 = 0,
        stateDiagramFKZM4ZOCValue67 =
          stateDiagramFKZM4ZOCParam19.append("text");
      stateDiagramFKZM4ZOCValue67.style("text-anchor", "start");
      stateDiagramFKZM4ZOCValue67.attr("class", "noteText");
      let stateDiagramFKZM4ZOCValue68 = stateDiagramFKZM4ZOCParam16.replace(
        /\r\n/g,
        "<br/>",
      );
      stateDiagramFKZM4ZOCValue68 = stateDiagramFKZM4ZOCValue68.replace(
        /\n/g,
        "<br/>",
      );
      let stateDiagramFKZM4ZOCValue69 = stateDiagramFKZM4ZOCValue68.split(
          chunkABZYJK2DM.lineBreakRegex,
        ),
        stateDiagramFKZM4ZOCValue70 = 1.25 * _chunkABZYJK2DL().state.noteMargin;
      for (let stateDiagramFKZM4ZOCValue96 of stateDiagramFKZM4ZOCValue69) {
        let stateDiagramFKZM4ZOCValue98 = stateDiagramFKZM4ZOCValue96.trim();
        if (stateDiagramFKZM4ZOCValue98.length > 0) {
          let stateDiagramFKZM4ZOCValue99 =
            stateDiagramFKZM4ZOCValue67.append("tspan");
          if (
            (stateDiagramFKZM4ZOCValue99.text(stateDiagramFKZM4ZOCValue98),
            stateDiagramFKZM4ZOCValue70 === 0)
          ) {
            let stateDiagramFKZM4ZOCValue103 = stateDiagramFKZM4ZOCValue99
              .node()
              .getBBox();
            stateDiagramFKZM4ZOCValue70 += stateDiagramFKZM4ZOCValue103.height;
          }
          stateDiagramFKZM4ZOCValue66 += stateDiagramFKZM4ZOCValue70;
          stateDiagramFKZM4ZOCValue99.attr(
            "x",
            stateDiagramFKZM4ZOCParam17 + _chunkABZYJK2DL().state.noteMargin,
          );
          stateDiagramFKZM4ZOCValue99.attr(
            "y",
            stateDiagramFKZM4ZOCParam18 +
              stateDiagramFKZM4ZOCValue66 +
              1.25 * _chunkABZYJK2DL().state.noteMargin,
          );
        }
      }
      return {
        textWidth: stateDiagramFKZM4ZOCValue67.node().getBBox().width,
        textHeight: stateDiagramFKZM4ZOCValue66,
      };
    },
    "_drawLongText",
  ),
  stateDiagramFKZM4ZOCValue9 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam31, stateDiagramFKZM4ZOCParam32) => {
      stateDiagramFKZM4ZOCParam32.attr("class", "state-note");
      let stateDiagramFKZM4ZOCValue92 = stateDiagramFKZM4ZOCParam32
          .append("rect")
          .attr("x", 0)
          .attr("y", _chunkABZYJK2DL().state.padding),
        { textWidth, textHeight } = stateDiagramFKZM4ZOCValue8(
          stateDiagramFKZM4ZOCParam31,
          0,
          0,
          stateDiagramFKZM4ZOCParam32.append("g"),
        );
      return (
        stateDiagramFKZM4ZOCValue92.attr(
          "height",
          textHeight + 2 * _chunkABZYJK2DL().state.noteMargin,
        ),
        stateDiagramFKZM4ZOCValue92.attr(
          "width",
          textWidth + _chunkABZYJK2DL().state.noteMargin * 2,
        ),
        stateDiagramFKZM4ZOCValue92
      );
    },
    "drawNote",
  ),
  stateDiagramFKZM4ZOCValue10 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCParam20,
    stateDiagramFKZM4ZOCParam21,
  ) {
    let stateDiagramFKZM4ZOCValue71 = stateDiagramFKZM4ZOCParam21.id,
      stateDiagramFKZM4ZOCValue72 = {
        id: stateDiagramFKZM4ZOCValue71,
        label: stateDiagramFKZM4ZOCParam21.id,
        width: 0,
        height: 0,
      },
      stateDiagramFKZM4ZOCValue73 = stateDiagramFKZM4ZOCParam20
        .append("g")
        .attr("id", stateDiagramFKZM4ZOCValue71)
        .attr("class", "stateGroup");
    stateDiagramFKZM4ZOCParam21.type === "start" &&
      stateDiagramFKZM4ZOCValue1(stateDiagramFKZM4ZOCValue73);
    stateDiagramFKZM4ZOCParam21.type === "end" &&
      stateDiagramFKZM4ZOCValue6(stateDiagramFKZM4ZOCValue73);
    (stateDiagramFKZM4ZOCParam21.type === "fork" ||
      stateDiagramFKZM4ZOCParam21.type === "join") &&
      stateDiagramFKZM4ZOCValue7(
        stateDiagramFKZM4ZOCValue73,
        stateDiagramFKZM4ZOCParam21,
      );
    stateDiagramFKZM4ZOCParam21.type === "note" &&
      stateDiagramFKZM4ZOCValue9(
        stateDiagramFKZM4ZOCParam21.note.text,
        stateDiagramFKZM4ZOCValue73,
      );
    stateDiagramFKZM4ZOCParam21.type === "divider" &&
      stateDiagramFKZM4ZOCValue2(stateDiagramFKZM4ZOCValue73);
    stateDiagramFKZM4ZOCParam21.type === "default" &&
      stateDiagramFKZM4ZOCParam21.descriptions.length === 0 &&
      stateDiagramFKZM4ZOCValue3(
        stateDiagramFKZM4ZOCValue73,
        stateDiagramFKZM4ZOCParam21,
      );
    stateDiagramFKZM4ZOCParam21.type === "default" &&
      stateDiagramFKZM4ZOCParam21.descriptions.length > 0 &&
      stateDiagramFKZM4ZOCValue4(
        stateDiagramFKZM4ZOCValue73,
        stateDiagramFKZM4ZOCParam21,
      );
    let stateDiagramFKZM4ZOCValue74 = stateDiagramFKZM4ZOCValue73
      .node()
      .getBBox();
    return (
      (stateDiagramFKZM4ZOCValue72.width =
        stateDiagramFKZM4ZOCValue74.width +
        2 * _chunkABZYJK2DL().state.padding),
      (stateDiagramFKZM4ZOCValue72.height =
        stateDiagramFKZM4ZOCValue74.height +
        2 * _chunkABZYJK2DL().state.padding),
      stateDiagramFKZM4ZOCValue72
    );
  }, "drawState"),
  stateDiagramFKZM4ZOCValue11 = 0,
  stateDiagramFKZM4ZOCValue12 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCParam8,
    stateDiagramFKZM4ZOCParam9,
    stateDiagramFKZM4ZOCParam10,
  ) {
    let stateDiagramFKZM4ZOCValue30 = chunkAGHRB4JFN(function (
      stateDiagramFKZM4ZOCParam34,
    ) {
      switch (stateDiagramFKZM4ZOCParam34) {
        case StateDiagramDb.relationType.AGGREGATION:
          return "aggregation";
        case StateDiagramDb.relationType.EXTENSION:
          return "extension";
        case StateDiagramDb.relationType.COMPOSITION:
          return "composition";
        case StateDiagramDb.relationType.DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    stateDiagramFKZM4ZOCParam9.points =
      stateDiagramFKZM4ZOCParam9.points.filter((item) => !Number.isNaN(item.y));
    let stateDiagramFKZM4ZOCValue31 = stateDiagramFKZM4ZOCParam9.points,
      stateDiagramFKZM4ZOCValue32 = line()
        .x(function (stateDiagramFKZM4ZOCParam42) {
          return stateDiagramFKZM4ZOCParam42.x;
        })
        .y(function (stateDiagramFKZM4ZOCParam43) {
          return stateDiagramFKZM4ZOCParam43.y;
        })
        .curve(stepH),
      stateDiagramFKZM4ZOCValue33 = stateDiagramFKZM4ZOCParam8
        .append("path")
        .attr("d", stateDiagramFKZM4ZOCValue32(stateDiagramFKZM4ZOCValue31))
        .attr("id", "edge" + stateDiagramFKZM4ZOCValue11)
        .attr("class", "transition"),
      stateDiagramFKZM4ZOCValue34 = "";
    if (
      (_chunkABZYJK2DL().state.arrowMarkerAbsolute &&
        (stateDiagramFKZM4ZOCValue34 = chunkABZYJK2DW(true)),
      stateDiagramFKZM4ZOCValue33.attr(
        "marker-end",
        "url(" +
          stateDiagramFKZM4ZOCValue34 +
          "#" +
          stateDiagramFKZM4ZOCValue30(StateDiagramDb.relationType.DEPENDENCY) +
          "End)",
      ),
      stateDiagramFKZM4ZOCParam10.title !== undefined)
    ) {
      let stateDiagramFKZM4ZOCValue55 = stateDiagramFKZM4ZOCParam8
          .append("g")
          .attr("class", "stateLabel"),
        { x, y } = chunkS3R3BYOJC.calcLabelPosition(
          stateDiagramFKZM4ZOCParam9.points,
        ),
        stateDiagramFKZM4ZOCValue56 = chunkABZYJK2DM.getRows(
          stateDiagramFKZM4ZOCParam10.title,
        ),
        stateDiagramFKZM4ZOCValue57 = 0,
        stateDiagramFKZM4ZOCValue58 = [],
        stateDiagramFKZM4ZOCValue59 = 0,
        stateDiagramFKZM4ZOCValue60 = 0;
      for (
        let stateDiagramFKZM4ZOCValue86 = 0;
        stateDiagramFKZM4ZOCValue86 <= stateDiagramFKZM4ZOCValue56.length;
        stateDiagramFKZM4ZOCValue86++
      ) {
        let stateDiagramFKZM4ZOCValue90 = stateDiagramFKZM4ZOCValue55
            .append("text")
            .attr("text-anchor", "middle")
            .text(stateDiagramFKZM4ZOCValue56[stateDiagramFKZM4ZOCValue86])
            .attr("x", x)
            .attr("y", y + stateDiagramFKZM4ZOCValue57),
          stateDiagramFKZM4ZOCValue91 = stateDiagramFKZM4ZOCValue90
            .node()
            .getBBox();
        stateDiagramFKZM4ZOCValue59 = Math.max(
          stateDiagramFKZM4ZOCValue59,
          stateDiagramFKZM4ZOCValue91.width,
        );
        stateDiagramFKZM4ZOCValue60 = Math.min(
          stateDiagramFKZM4ZOCValue60,
          stateDiagramFKZM4ZOCValue91.x,
        );
        chunkAGHRB4JFR.info(
          stateDiagramFKZM4ZOCValue91.x,
          x,
          y + stateDiagramFKZM4ZOCValue57,
        );
        stateDiagramFKZM4ZOCValue57 === 0 &&
          ((stateDiagramFKZM4ZOCValue57 = stateDiagramFKZM4ZOCValue90
            .node()
            .getBBox().height),
          chunkAGHRB4JFR.info("Title height", stateDiagramFKZM4ZOCValue57, y));
        stateDiagramFKZM4ZOCValue58.push(stateDiagramFKZM4ZOCValue90);
      }
      let stateDiagramFKZM4ZOCValue61 =
        stateDiagramFKZM4ZOCValue57 * stateDiagramFKZM4ZOCValue56.length;
      if (stateDiagramFKZM4ZOCValue56.length > 1) {
        let stateDiagramFKZM4ZOCValue102 =
          (stateDiagramFKZM4ZOCValue56.length - 1) *
          stateDiagramFKZM4ZOCValue57 *
          0.5;
        stateDiagramFKZM4ZOCValue58.forEach((item, index) =>
          item.attr(
            "y",
            y +
              index * stateDiagramFKZM4ZOCValue57 -
              stateDiagramFKZM4ZOCValue102,
          ),
        );
        stateDiagramFKZM4ZOCValue61 =
          stateDiagramFKZM4ZOCValue57 * stateDiagramFKZM4ZOCValue56.length;
      }
      let stateDiagramFKZM4ZOCValue62 = stateDiagramFKZM4ZOCValue55
        .node()
        .getBBox();
      stateDiagramFKZM4ZOCValue55
        .insert("rect", ":first-child")
        .attr("class", "box")
        .attr(
          "x",
          x -
            stateDiagramFKZM4ZOCValue59 / 2 -
            _chunkABZYJK2DL().state.padding / 2,
        )
        .attr(
          "y",
          y -
            stateDiagramFKZM4ZOCValue61 / 2 -
            _chunkABZYJK2DL().state.padding / 2 -
            3.5,
        )
        .attr(
          "width",
          stateDiagramFKZM4ZOCValue59 + _chunkABZYJK2DL().state.padding,
        )
        .attr(
          "height",
          stateDiagramFKZM4ZOCValue61 + _chunkABZYJK2DL().state.padding,
        );
      chunkAGHRB4JFR.info(stateDiagramFKZM4ZOCValue62);
    }
    stateDiagramFKZM4ZOCValue11++;
  }, "drawEdge"),
  stateDiagramFKZM4ZOCValue13,
  stateDiagramFKZM4ZOCValue14 = {},
  stateDiagramFKZM4ZOCValue15 = chunkAGHRB4JFN(function () {}, "setConf"),
  stateDiagramFKZM4ZOCValue16 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCParam33,
  ) {
    stateDiagramFKZM4ZOCParam33
      .append("defs")
      .append("marker")
      .attr("id", "dependencyEnd")
      .attr("refX", 19)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "insertMarkers"),
  stateDiagramFKZM4ZOCValue17 = chunkAGHRB4JFN(function (
    stateDiagramFKZM4ZOCParam22,
    stateDiagramFKZM4ZOCParam23,
    stateDiagramFKZM4ZOCParam24,
    stateDiagramFKZM4ZOCParam25,
  ) {
    stateDiagramFKZM4ZOCValue13 = _chunkABZYJK2DL().state;
    let stateDiagramFKZM4ZOCValue75 = _chunkABZYJK2DL().securityLevel,
      stateDiagramFKZM4ZOCValue76;
    stateDiagramFKZM4ZOCValue75 === "sandbox" &&
      (stateDiagramFKZM4ZOCValue76 = Src("#i" + stateDiagramFKZM4ZOCParam23));
    let stateDiagramFKZM4ZOCValue77 = Src(
        stateDiagramFKZM4ZOCValue75 === "sandbox"
          ? stateDiagramFKZM4ZOCValue76.nodes()[0].contentDocument.body
          : "body",
      ),
      stateDiagramFKZM4ZOCValue78 =
        stateDiagramFKZM4ZOCValue75 === "sandbox"
          ? stateDiagramFKZM4ZOCValue76.nodes()[0].contentDocument
          : document;
    chunkAGHRB4JFR.debug("Rendering diagram " + stateDiagramFKZM4ZOCParam22);
    let stateDiagramFKZM4ZOCValue79 = stateDiagramFKZM4ZOCValue77.select(
      `[id='${stateDiagramFKZM4ZOCParam23}']`,
    );
    stateDiagramFKZM4ZOCValue16(stateDiagramFKZM4ZOCValue79);
    stateDiagramFKZM4ZOCValue19(
      stateDiagramFKZM4ZOCParam25.db.getRootDoc(),
      stateDiagramFKZM4ZOCValue79,
      undefined,
      false,
      stateDiagramFKZM4ZOCValue77,
      stateDiagramFKZM4ZOCValue78,
      stateDiagramFKZM4ZOCParam25,
    );
    let stateDiagramFKZM4ZOCValue80 = stateDiagramFKZM4ZOCValue13.padding,
      stateDiagramFKZM4ZOCValue81 = stateDiagramFKZM4ZOCValue79
        .node()
        .getBBox(),
      stateDiagramFKZM4ZOCValue82 =
        stateDiagramFKZM4ZOCValue81.width + stateDiagramFKZM4ZOCValue80 * 2,
      stateDiagramFKZM4ZOCValue83 =
        stateDiagramFKZM4ZOCValue81.height + stateDiagramFKZM4ZOCValue80 * 2;
    _chunkABZYJK2DN(
      stateDiagramFKZM4ZOCValue79,
      stateDiagramFKZM4ZOCValue83,
      stateDiagramFKZM4ZOCValue82 * 1.75,
      stateDiagramFKZM4ZOCValue13.useMaxWidth,
    );
    stateDiagramFKZM4ZOCValue79.attr(
      "viewBox",
      `${stateDiagramFKZM4ZOCValue81.x - stateDiagramFKZM4ZOCValue13.padding}  ${stateDiagramFKZM4ZOCValue81.y - stateDiagramFKZM4ZOCValue13.padding} ` +
        stateDiagramFKZM4ZOCValue82 +
        " " +
        stateDiagramFKZM4ZOCValue83,
    );
  }, "draw"),
  stateDiagramFKZM4ZOCValue18 = chunkAGHRB4JFN(
    (stateDiagramFKZM4ZOCParam41) =>
      stateDiagramFKZM4ZOCParam41
        ? stateDiagramFKZM4ZOCParam41.length *
          stateDiagramFKZM4ZOCValue13.fontSizeFactor
        : 1,
    "getLabelWidth",
  ),
  stateDiagramFKZM4ZOCValue19 = chunkAGHRB4JFN(
    (
      stateDiagramFKZM4ZOCParam1,
      stateDiagramFKZM4ZOCParam2,
      stateDiagramFKZM4ZOCParam3,
      stateDiagramFKZM4ZOCParam4,
      stateDiagramFKZM4ZOCParam5,
      stateDiagramFKZM4ZOCParam6,
      stateDiagramFKZM4ZOCParam7,
    ) => {
      let stateDiagramFKZM4ZOCValue20 = new Graphlib({
          compound: true,
          multigraph: true,
        }),
        stateDiagramFKZM4ZOCValue21,
        stateDiagramFKZM4ZOCValue22 = true;
      for (
        stateDiagramFKZM4ZOCValue21 = 0;
        stateDiagramFKZM4ZOCValue21 < stateDiagramFKZM4ZOCParam1.length;
        stateDiagramFKZM4ZOCValue21++
      )
        if (
          stateDiagramFKZM4ZOCParam1[stateDiagramFKZM4ZOCValue21].stmt ===
          "relation"
        ) {
          stateDiagramFKZM4ZOCValue22 = false;
          break;
        }
      stateDiagramFKZM4ZOCParam3
        ? stateDiagramFKZM4ZOCValue20.setGraph({
            rankdir: "LR",
            multigraph: true,
            compound: true,
            ranker: "tight-tree",
            ranksep: stateDiagramFKZM4ZOCValue22
              ? 1
              : stateDiagramFKZM4ZOCValue13.edgeLengthFactor,
            nodeSep: stateDiagramFKZM4ZOCValue22 ? 1 : 50,
            isMultiGraph: true,
          })
        : stateDiagramFKZM4ZOCValue20.setGraph({
            rankdir: "TB",
            multigraph: true,
            compound: true,
            ranksep: stateDiagramFKZM4ZOCValue22
              ? 1
              : stateDiagramFKZM4ZOCValue13.edgeLengthFactor,
            nodeSep: stateDiagramFKZM4ZOCValue22 ? 1 : 50,
            ranker: "tight-tree",
            isMultiGraph: true,
          });
      stateDiagramFKZM4ZOCValue20.setDefaultEdgeLabel(function () {
        return {};
      });
      let stateDiagramFKZM4ZOCValue23 =
          stateDiagramFKZM4ZOCParam7.db.getStates(),
        stateDiagramFKZM4ZOCValue24 =
          stateDiagramFKZM4ZOCParam7.db.getRelations(),
        stateDiagramFKZM4ZOCValue25 = Object.keys(stateDiagramFKZM4ZOCValue23);
      for (let stateDiagramFKZM4ZOCValue63 of stateDiagramFKZM4ZOCValue25) {
        let stateDiagramFKZM4ZOCValue64 =
          stateDiagramFKZM4ZOCValue23[stateDiagramFKZM4ZOCValue63];
        stateDiagramFKZM4ZOCParam3 &&
          (stateDiagramFKZM4ZOCValue64.parentId = stateDiagramFKZM4ZOCParam3);
        let stateDiagramFKZM4ZOCValue65;
        if (stateDiagramFKZM4ZOCValue64.doc) {
          let stateDiagramFKZM4ZOCValue97 = stateDiagramFKZM4ZOCParam2
            .append("g")
            .attr("id", stateDiagramFKZM4ZOCValue64.id)
            .attr("class", "stateGroup");
          stateDiagramFKZM4ZOCValue65 = stateDiagramFKZM4ZOCValue19(
            stateDiagramFKZM4ZOCValue64.doc,
            stateDiagramFKZM4ZOCValue97,
            stateDiagramFKZM4ZOCValue64.id,
            !stateDiagramFKZM4ZOCParam4,
            stateDiagramFKZM4ZOCParam5,
            stateDiagramFKZM4ZOCParam6,
            stateDiagramFKZM4ZOCParam7,
          );
          {
            stateDiagramFKZM4ZOCValue97 = stateDiagramFKZM4ZOCValue5(
              stateDiagramFKZM4ZOCValue97,
              stateDiagramFKZM4ZOCValue64,
              stateDiagramFKZM4ZOCParam4,
            );
            let stateDiagramFKZM4ZOCValue101 = stateDiagramFKZM4ZOCValue97
              .node()
              .getBBox();
            stateDiagramFKZM4ZOCValue65.width =
              stateDiagramFKZM4ZOCValue101.width;
            stateDiagramFKZM4ZOCValue65.height =
              stateDiagramFKZM4ZOCValue101.height +
              stateDiagramFKZM4ZOCValue13.padding / 2;
            stateDiagramFKZM4ZOCValue14[stateDiagramFKZM4ZOCValue64.id] = {
              y: stateDiagramFKZM4ZOCValue13.compositTitleSize,
            };
          }
        } else
          stateDiagramFKZM4ZOCValue65 = stateDiagramFKZM4ZOCValue10(
            stateDiagramFKZM4ZOCParam2,
            stateDiagramFKZM4ZOCValue64,
            stateDiagramFKZM4ZOCValue20,
          );
        if (stateDiagramFKZM4ZOCValue64.note) {
          let stateDiagramFKZM4ZOCValue87 = stateDiagramFKZM4ZOCValue10(
            stateDiagramFKZM4ZOCParam2,
            {
              descriptions: [],
              id: stateDiagramFKZM4ZOCValue64.id + "-note",
              note: stateDiagramFKZM4ZOCValue64.note,
              type: "note",
            },
            stateDiagramFKZM4ZOCValue20,
          );
          stateDiagramFKZM4ZOCValue64.note.position === "left of"
            ? (stateDiagramFKZM4ZOCValue20.setNode(
                stateDiagramFKZM4ZOCValue65.id + "-note",
                stateDiagramFKZM4ZOCValue87,
              ),
              stateDiagramFKZM4ZOCValue20.setNode(
                stateDiagramFKZM4ZOCValue65.id,
                stateDiagramFKZM4ZOCValue65,
              ))
            : (stateDiagramFKZM4ZOCValue20.setNode(
                stateDiagramFKZM4ZOCValue65.id,
                stateDiagramFKZM4ZOCValue65,
              ),
              stateDiagramFKZM4ZOCValue20.setNode(
                stateDiagramFKZM4ZOCValue65.id + "-note",
                stateDiagramFKZM4ZOCValue87,
              ));
          stateDiagramFKZM4ZOCValue20.setParent(
            stateDiagramFKZM4ZOCValue65.id,
            stateDiagramFKZM4ZOCValue65.id + "-group",
          );
          stateDiagramFKZM4ZOCValue20.setParent(
            stateDiagramFKZM4ZOCValue65.id + "-note",
            stateDiagramFKZM4ZOCValue65.id + "-group",
          );
        } else
          stateDiagramFKZM4ZOCValue20.setNode(
            stateDiagramFKZM4ZOCValue65.id,
            stateDiagramFKZM4ZOCValue65,
          );
      }
      chunkAGHRB4JFR.debug(
        "Count=",
        stateDiagramFKZM4ZOCValue20.nodeCount(),
        stateDiagramFKZM4ZOCValue20,
      );
      let stateDiagramFKZM4ZOCValue26 = 0;
      stateDiagramFKZM4ZOCValue24.forEach(function (item) {
        stateDiagramFKZM4ZOCValue26++;
        chunkAGHRB4JFR.debug("Setting edge", item);
        stateDiagramFKZM4ZOCValue20.setEdge(
          item.id1,
          item.id2,
          {
            relation: item,
            width: stateDiagramFKZM4ZOCValue18(item.title),
            height:
              stateDiagramFKZM4ZOCValue13.labelHeight *
              chunkABZYJK2DM.getRows(item.title).length,
            labelpos: "c",
          },
          "id" + stateDiagramFKZM4ZOCValue26,
        );
      });
      Dagre(stateDiagramFKZM4ZOCValue20);
      chunkAGHRB4JFR.debug(
        "Graph after layout",
        stateDiagramFKZM4ZOCValue20.nodes(),
      );
      let stateDiagramFKZM4ZOCValue27 = stateDiagramFKZM4ZOCParam2.node();
      stateDiagramFKZM4ZOCValue20.nodes().forEach(function (item) {
        item !== undefined &&
        stateDiagramFKZM4ZOCValue20.node(item) !== undefined
          ? (chunkAGHRB4JFR.warn(
              "Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFKZM4ZOCValue20.node(item)),
            ),
            stateDiagramFKZM4ZOCParam5
              .select("#" + stateDiagramFKZM4ZOCValue27.id + " #" + item)
              .attr(
                "transform",
                "translate(" +
                  (stateDiagramFKZM4ZOCValue20.node(item).x -
                    stateDiagramFKZM4ZOCValue20.node(item).width / 2) +
                  "," +
                  (stateDiagramFKZM4ZOCValue20.node(item).y +
                    (stateDiagramFKZM4ZOCValue14[item]
                      ? stateDiagramFKZM4ZOCValue14[item].y
                      : 0) -
                    stateDiagramFKZM4ZOCValue20.node(item).height / 2) +
                  " )",
              ),
            stateDiagramFKZM4ZOCParam5
              .select("#" + stateDiagramFKZM4ZOCValue27.id + " #" + item)
              .attr(
                "data-x-shift",
                stateDiagramFKZM4ZOCValue20.node(item).x -
                  stateDiagramFKZM4ZOCValue20.node(item).width / 2,
              ),
            stateDiagramFKZM4ZOCParam6
              .querySelectorAll(
                "#" +
                  stateDiagramFKZM4ZOCValue27.id +
                  " #" +
                  item +
                  " .divider",
              )
              .forEach((_item) => {
                let stateDiagramFKZM4ZOCValue93 = _item.parentElement,
                  stateDiagramFKZM4ZOCValue94 = 0,
                  stateDiagramFKZM4ZOCValue95 = 0;
                stateDiagramFKZM4ZOCValue93 &&
                  (stateDiagramFKZM4ZOCValue93.parentElement &&
                    (stateDiagramFKZM4ZOCValue94 =
                      stateDiagramFKZM4ZOCValue93.parentElement.getBBox()
                        .width),
                  (stateDiagramFKZM4ZOCValue95 = parseInt(
                    stateDiagramFKZM4ZOCValue93.getAttribute("data-x-shift"),
                    10,
                  )),
                  Number.isNaN(stateDiagramFKZM4ZOCValue95) &&
                    (stateDiagramFKZM4ZOCValue95 = 0));
                _item.setAttribute("x1", 0 - stateDiagramFKZM4ZOCValue95 + 8);
                _item.setAttribute(
                  "x2",
                  stateDiagramFKZM4ZOCValue94 - stateDiagramFKZM4ZOCValue95 - 8,
                );
              }))
          : chunkAGHRB4JFR.debug(
              "No Node " +
                item +
                ": " +
                JSON.stringify(stateDiagramFKZM4ZOCValue20.node(item)),
            );
      });
      let stateDiagramFKZM4ZOCValue28 = stateDiagramFKZM4ZOCValue27.getBBox();
      stateDiagramFKZM4ZOCValue20.edges().forEach(function (item) {
        item !== undefined &&
          stateDiagramFKZM4ZOCValue20.edge(item) !== undefined &&
          (chunkAGHRB4JFR.debug(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(stateDiagramFKZM4ZOCValue20.edge(item)),
          ),
          stateDiagramFKZM4ZOCValue12(
            stateDiagramFKZM4ZOCParam2,
            stateDiagramFKZM4ZOCValue20.edge(item),
            stateDiagramFKZM4ZOCValue20.edge(item).relation,
          ));
      });
      stateDiagramFKZM4ZOCValue28 = stateDiagramFKZM4ZOCValue27.getBBox();
      let stateDiagramFKZM4ZOCValue29 = {
        id: stateDiagramFKZM4ZOCParam3 || "root",
        label: stateDiagramFKZM4ZOCParam3 || "root",
        width: 0,
        height: 0,
      };
      return (
        (stateDiagramFKZM4ZOCValue29.width =
          stateDiagramFKZM4ZOCValue28.width +
          2 * stateDiagramFKZM4ZOCValue13.padding),
        (stateDiagramFKZM4ZOCValue29.height =
          stateDiagramFKZM4ZOCValue28.height +
          2 * stateDiagramFKZM4ZOCValue13.padding),
        chunkAGHRB4JFR.debug(
          "Doc rendered",
          stateDiagramFKZM4ZOCValue29,
          stateDiagramFKZM4ZOCValue20,
        ),
        stateDiagramFKZM4ZOCValue29
      );
    },
    "renderDoc",
  );
export const stateDiagramFKZM4ZOC = {
  parser: stateDiagramParser,
  get db() {
    return new StateDiagramDb(1);
  },
  renderer: {
    setConf: stateDiagramFKZM4ZOCValue15,
    draw: stateDiagramFKZM4ZOCValue17,
  },
  styles: getStateDiagramStyles,
  init: chunkAGHRB4JFN((stateDiagramFKZM4ZOCParam40) => {
    stateDiagramFKZM4ZOCParam40.state ||= {};
    stateDiagramFKZM4ZOCParam40.state.arrowMarkerAbsolute =
      stateDiagramFKZM4ZOCParam40.arrowMarkerAbsolute;
  }, "init"),
};
