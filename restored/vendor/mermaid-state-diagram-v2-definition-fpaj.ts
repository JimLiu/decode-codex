// Restored from ref/webview/assets/stateDiagram-v2-4FDKWEC3-D0mP3Mt0.js
// StateDiagramV24FDKWEC3 chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
import {
  getStateDiagramStyles,
  stateDiagramParser,
  stateDiagramRenderer,
  StateDiagramDb,
} from "./mermaid-state-diagram-fpaj";

type MermaidStateDiagramConfig = {
  arrowMarkerAbsolute?: boolean;
  state?: {
    arrowMarkerAbsolute?: boolean;
  };
};

const initStateDiagramDefinition = chunkAGHRB4JFN(
  (config: MermaidStateDiagramConfig) => {
    config.state ||= {};
    config.state.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
  },
  "init",
);

const stateDiagramDefinition = {
  get parser() {
    return stateDiagramParser;
  },
  get db() {
    return new StateDiagramDb(2);
  },
  get renderer() {
    return stateDiagramRenderer;
  },
  get styles() {
    return getStateDiagramStyles;
  },
  get init() {
    return initStateDiagramDefinition;
  },
};

export {
  stateDiagramDefinition as diagram,
  stateDiagramDefinition as stateDiagramV24FDKWEC3,
};
