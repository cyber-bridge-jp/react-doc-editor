import { f as o, p as a } from "./flowDb-956e92f1-CLyQCtTD.js";
import { f as t, a as e } from "./styles-c10674c1-CV74Ip8G.js";
import { x as s } from "./index-DPBlcgvJ.js";
import "./graph-1uIXYtOq.js";
import "./layout-B5zrlhBT.js";
import "./index-B1XK6w54.js";
const b = {
  parser: a,
  db: o,
  renderer: e,
  styles: t,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), e.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  b as diagram
};
