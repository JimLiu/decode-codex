// Restored from ref/webview/assets/cose-bilkent-S5V4N54A-DOa-Zu-d.js
// CoseBilkentS5V4N54A chunk restored from the Codex webview bundle.
import { toEsModule } from "../runtime/commonjs-interop";
import { Src } from "./roughjs-geometry";
import cytoscape from "cytoscape";
import { loadCytoscapeCoseBilkent } from "./cytoscape-cose-bilkent";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
var coseBilkentS5V4N54AValue1 = toEsModule(loadCytoscapeCoseBilkent(), 1);
cytoscape.use(coseBilkentS5V4N54AValue1.default);
function coseBilkentS5V4N54AHelper1(
  coseBilkentS5V4N54AParam6,
  coseBilkentS5V4N54AParam7,
) {
  coseBilkentS5V4N54AParam6.forEach((item) => {
    let coseBilkentS5V4N54AValue17 = {
      id: item.id,
      labelText: item.label,
      height: item.height,
      width: item.width,
      padding: item.padding ?? 0,
    };
    Object.keys(item).forEach((_item) => {
      ["id", "label", "height", "width", "padding", "x", "y"].includes(_item) ||
        (coseBilkentS5V4N54AValue17[_item] = item[_item]);
    });
    coseBilkentS5V4N54AParam7.add({
      group: "nodes",
      data: coseBilkentS5V4N54AValue17,
      position: {
        x: item.x ?? 0,
        y: item.y ?? 0,
      },
    });
  });
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper1, "addNodes");
function coseBilkentS5V4N54AHelper2(
  coseBilkentS5V4N54AParam12,
  coseBilkentS5V4N54AParam13,
) {
  coseBilkentS5V4N54AParam12.forEach((item) => {
    let coseBilkentS5V4N54AValue24 = {
      id: item.id,
      source: item.start,
      target: item.end,
    };
    Object.keys(item).forEach((_item) => {
      ["id", "start", "end"].includes(_item) ||
        (coseBilkentS5V4N54AValue24[_item] = item[_item]);
    });
    coseBilkentS5V4N54AParam13.add({
      group: "edges",
      data: coseBilkentS5V4N54AValue24,
    });
  });
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper2, "addEdges");
function coseBilkentS5V4N54AHelper3(coseBilkentS5V4N54AParam3) {
  return new Promise((coseBilkentS5V4N54AParam4) => {
    let coseBilkentS5V4N54AValue9 = Src("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      coseBilkentS5V4N54AValue10 = cytoscape({
        container: document.getElementById("cy"),
        style: [
          {
            selector: "edge",
            style: {
              "curve-style": "bezier",
            },
          },
        ],
      });
    coseBilkentS5V4N54AValue9.remove();
    coseBilkentS5V4N54AHelper1(
      coseBilkentS5V4N54AParam3.nodes,
      coseBilkentS5V4N54AValue10,
    );
    coseBilkentS5V4N54AHelper2(
      coseBilkentS5V4N54AParam3.edges,
      coseBilkentS5V4N54AValue10,
    );
    coseBilkentS5V4N54AValue10.nodes().forEach(function (item) {
      item.layoutDimensions = () => {
        let coseBilkentS5V4N54AValue34 = item.data();
        return {
          w: coseBilkentS5V4N54AValue34.width,
          h: coseBilkentS5V4N54AValue34.height,
        };
      };
    });
    coseBilkentS5V4N54AValue10
      .layout({
        name: "cose-bilkent",
        quality: "proof",
        styleEnabled: false,
        animate: false,
      })
      .run();
    coseBilkentS5V4N54AValue10.ready((coseBilkentS5V4N54AParam14) => {
      chunkAGHRB4JFR.info("Cytoscape ready", coseBilkentS5V4N54AParam14);
      coseBilkentS5V4N54AParam4(coseBilkentS5V4N54AValue10);
    });
  });
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper3, "createCytoscapeInstance");
function coseBilkentS5V4N54AHelper4(coseBilkentS5V4N54AParam11) {
  return coseBilkentS5V4N54AParam11.nodes().map((item) => {
    let coseBilkentS5V4N54AValue25 = item.data(),
      coseBilkentS5V4N54AValue26 = item.position(),
      coseBilkentS5V4N54AValue27 = {
        id: coseBilkentS5V4N54AValue25.id,
        x: coseBilkentS5V4N54AValue26.x,
        y: coseBilkentS5V4N54AValue26.y,
      };
    return (
      Object.keys(coseBilkentS5V4N54AValue25).forEach((_item) => {
        _item !== "id" &&
          (coseBilkentS5V4N54AValue27[_item] =
            coseBilkentS5V4N54AValue25[_item]);
      }),
      coseBilkentS5V4N54AValue27
    );
  });
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper4, "extractPositionedNodes");
function coseBilkentS5V4N54AHelper5(coseBilkentS5V4N54AParam5) {
  return coseBilkentS5V4N54AParam5.edges().map((item) => {
    let coseBilkentS5V4N54AValue14 = item.data(),
      coseBilkentS5V4N54AValue15 = item._private.rscratch,
      coseBilkentS5V4N54AValue16 = {
        id: coseBilkentS5V4N54AValue14.id,
        source: coseBilkentS5V4N54AValue14.source,
        target: coseBilkentS5V4N54AValue14.target,
        startX: coseBilkentS5V4N54AValue15.startX,
        startY: coseBilkentS5V4N54AValue15.startY,
        midX: coseBilkentS5V4N54AValue15.midX,
        midY: coseBilkentS5V4N54AValue15.midY,
        endX: coseBilkentS5V4N54AValue15.endX,
        endY: coseBilkentS5V4N54AValue15.endY,
      };
    return (
      Object.keys(coseBilkentS5V4N54AValue14).forEach((_item) => {
        ["id", "source", "target"].includes(_item) ||
          (coseBilkentS5V4N54AValue16[_item] =
            coseBilkentS5V4N54AValue14[_item]);
      }),
      coseBilkentS5V4N54AValue16
    );
  });
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper5, "extractPositionedEdges");
async function coseBilkentS5V4N54AHelper6(
  coseBilkentS5V4N54AParam9,
  coseBilkentS5V4N54AParam10,
) {
  chunkAGHRB4JFR.debug("Starting cose-bilkent layout algorithm");
  try {
    coseBilkentS5V4N54AHelper7(coseBilkentS5V4N54AParam9);
    let coseBilkentS5V4N54AValue28 = await coseBilkentS5V4N54AHelper3(
        coseBilkentS5V4N54AParam9,
      ),
      coseBilkentS5V4N54AValue29 = coseBilkentS5V4N54AHelper4(
        coseBilkentS5V4N54AValue28,
      ),
      coseBilkentS5V4N54AValue30 = coseBilkentS5V4N54AHelper5(
        coseBilkentS5V4N54AValue28,
      );
    return (
      chunkAGHRB4JFR.debug(
        `Layout completed: ${coseBilkentS5V4N54AValue29.length} nodes, ${coseBilkentS5V4N54AValue30.length} edges`,
      ),
      {
        nodes: coseBilkentS5V4N54AValue29,
        edges: coseBilkentS5V4N54AValue30,
      }
    );
  } catch (coseBilkentS5V4N54AValue35) {
    throw (
      chunkAGHRB4JFR.error(
        "Error in cose-bilkent layout algorithm:",
        coseBilkentS5V4N54AValue35,
      ),
      coseBilkentS5V4N54AValue35
    );
  }
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper6, "executeCoseBilkentLayout");
function coseBilkentS5V4N54AHelper7(coseBilkentS5V4N54AParam8) {
  if (!coseBilkentS5V4N54AParam8) throw Error("Layout data is required");
  if (!coseBilkentS5V4N54AParam8.config)
    throw Error("Configuration is required in layout data");
  if (!coseBilkentS5V4N54AParam8.rootNode) throw Error("Root node is required");
  if (
    !coseBilkentS5V4N54AParam8.nodes ||
    !Array.isArray(coseBilkentS5V4N54AParam8.nodes)
  )
    throw Error("No nodes found in layout data");
  if (!Array.isArray(coseBilkentS5V4N54AParam8.edges))
    throw Error("Edges array is required in layout data");
  return true;
}
chunkAGHRB4JFN(coseBilkentS5V4N54AHelper7, "validateLayoutData");
export const coseBilkentS5V4N54A = chunkAGHRB4JFN(
  async (
    coseBilkentS5V4N54AParam1,
    coseBilkentS5V4N54AParam2,
    {
      insertCluster,
      insertEdge,
      insertEdgeLabel,
      insertMarkers,
      insertNode,
      log,
      positionEdgeLabel,
    },
    { algorithm },
  ) => {
    let coseBilkentS5V4N54AValue2 = {},
      coseBilkentS5V4N54AValue3 = {},
      coseBilkentS5V4N54AValue4 = coseBilkentS5V4N54AParam2.select("g");
    insertMarkers(
      coseBilkentS5V4N54AValue4,
      coseBilkentS5V4N54AParam1.markers,
      coseBilkentS5V4N54AParam1.type,
      coseBilkentS5V4N54AParam1.diagramId,
    );
    let _coseBilkentS5V4N54A = coseBilkentS5V4N54AValue4
        .insert("g")
        .attr("class", "subgraphs"),
      coseBilkentS5V4N54AValue5 = coseBilkentS5V4N54AValue4
        .insert("g")
        .attr("class", "edgePaths"),
      coseBilkentS5V4N54AValue6 = coseBilkentS5V4N54AValue4
        .insert("g")
        .attr("class", "edgeLabels"),
      coseBilkentS5V4N54AValue7 = coseBilkentS5V4N54AValue4
        .insert("g")
        .attr("class", "nodes");
    log.debug("Inserting nodes into DOM for dimension calculation");
    await Promise.all(
      coseBilkentS5V4N54AParam1.nodes.map(async (item) => {
        if (item.isGroup) {
          let coseBilkentS5V4N54AValue33 = {
            ...item,
          };
          coseBilkentS5V4N54AValue3[item.id] = coseBilkentS5V4N54AValue33;
          coseBilkentS5V4N54AValue2[item.id] = coseBilkentS5V4N54AValue33;
          await insertCluster(_coseBilkentS5V4N54A, item);
        } else {
          let coseBilkentS5V4N54AValue18 = {
            ...item,
          };
          coseBilkentS5V4N54AValue2[item.id] = coseBilkentS5V4N54AValue18;
          let coseBilkentS5V4N54AValue19 = await insertNode(
              coseBilkentS5V4N54AValue7,
              item,
              {
                config: coseBilkentS5V4N54AParam1.config,
                dir: coseBilkentS5V4N54AParam1.direction || "TB",
              },
            ),
            coseBilkentS5V4N54AValue20 = coseBilkentS5V4N54AValue19
              .node()
              .getBBox();
          coseBilkentS5V4N54AValue18.width = coseBilkentS5V4N54AValue20.width;
          coseBilkentS5V4N54AValue18.height = coseBilkentS5V4N54AValue20.height;
          coseBilkentS5V4N54AValue18.domId = coseBilkentS5V4N54AValue19;
          log.debug(
            `Node ${item.id} dimensions: ${coseBilkentS5V4N54AValue20.width}x${coseBilkentS5V4N54AValue20.height}`,
          );
        }
      }),
    );
    log.debug("Running cose-bilkent layout algorithm");
    let coseBilkentS5V4N54AValue8 = await coseBilkentS5V4N54AHelper6(
      {
        ...coseBilkentS5V4N54AParam1,
        nodes: coseBilkentS5V4N54AParam1.nodes.map((item) => {
          let coseBilkentS5V4N54AValue32 = coseBilkentS5V4N54AValue2[item.id];
          return {
            ...item,
            width: coseBilkentS5V4N54AValue32.width,
            height: coseBilkentS5V4N54AValue32.height,
          };
        }),
      },
      coseBilkentS5V4N54AParam1.config,
    );
    log.debug("Positioning nodes based on layout results");
    coseBilkentS5V4N54AValue8.nodes.forEach((item) => {
      let coseBilkentS5V4N54AValue22 = coseBilkentS5V4N54AValue2[item.id];
      coseBilkentS5V4N54AValue22?.domId &&
        (coseBilkentS5V4N54AValue22.domId.attr(
          "transform",
          `translate(${item.x}, ${item.y})`,
        ),
        (coseBilkentS5V4N54AValue22.x = item.x),
        (coseBilkentS5V4N54AValue22.y = item.y),
        log.debug(
          `Positioned node ${coseBilkentS5V4N54AValue22.id} at center (${item.x}, ${item.y})`,
        ));
    });
    coseBilkentS5V4N54AValue8.edges.forEach((item) => {
      let coseBilkentS5V4N54AValue23 = coseBilkentS5V4N54AParam1.edges.find(
        (_item) => _item.id === item.id,
      );
      coseBilkentS5V4N54AValue23 &&
        (coseBilkentS5V4N54AValue23.points = [
          {
            x: item.startX,
            y: item.startY,
          },
          {
            x: item.midX,
            y: item.midY,
          },
          {
            x: item.endX,
            y: item.endY,
          },
        ]);
    });
    log.debug("Inserting and positioning edges");
    await Promise.all(
      coseBilkentS5V4N54AParam1.edges.map(async (item) => {
        await insertEdgeLabel(coseBilkentS5V4N54AValue6, item);
        let coseBilkentS5V4N54AValue11 =
            coseBilkentS5V4N54AValue2[item.start ?? ""],
          coseBilkentS5V4N54AValue12 =
            coseBilkentS5V4N54AValue2[item.end ?? ""];
        if (coseBilkentS5V4N54AValue11 && coseBilkentS5V4N54AValue12) {
          let coseBilkentS5V4N54AValue13 = coseBilkentS5V4N54AValue8.edges.find(
            (_item) => _item.id === item.id,
          );
          if (coseBilkentS5V4N54AValue13) {
            log.debug("APA01 positionedEdge", coseBilkentS5V4N54AValue13);
            let coseBilkentS5V4N54AValue31 = {
              ...item,
            };
            positionEdgeLabel(
              coseBilkentS5V4N54AValue31,
              insertEdge(
                coseBilkentS5V4N54AValue5,
                coseBilkentS5V4N54AValue31,
                coseBilkentS5V4N54AValue3,
                coseBilkentS5V4N54AParam1.type,
                coseBilkentS5V4N54AValue11,
                coseBilkentS5V4N54AValue12,
                coseBilkentS5V4N54AParam1.diagramId,
              ),
            );
          } else {
            let coseBilkentS5V4N54AValue21 = {
              ...item,
              points: [
                {
                  x: coseBilkentS5V4N54AValue11.x || 0,
                  y: coseBilkentS5V4N54AValue11.y || 0,
                },
                {
                  x: coseBilkentS5V4N54AValue12.x || 0,
                  y: coseBilkentS5V4N54AValue12.y || 0,
                },
              ],
            };
            positionEdgeLabel(
              coseBilkentS5V4N54AValue21,
              insertEdge(
                coseBilkentS5V4N54AValue5,
                coseBilkentS5V4N54AValue21,
                coseBilkentS5V4N54AValue3,
                coseBilkentS5V4N54AParam1.type,
                coseBilkentS5V4N54AValue11,
                coseBilkentS5V4N54AValue12,
                coseBilkentS5V4N54AParam1.diagramId,
              ),
            );
          }
        }
      }),
    );
    log.debug("Cose-bilkent rendering completed");
  },
  "render",
);
