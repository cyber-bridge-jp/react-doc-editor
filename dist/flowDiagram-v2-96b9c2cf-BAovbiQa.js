import { f as o, p as a } from "./flowDb-956e92f1-DXW_CS5C.js";
import { f as t, a as e } from "./styles-c10674c1-BbSDAldl.js";
import { x as s } from "./index-CItKjTo7.js";
import "./graph-Bhp3j7pe.js";
import "./layout-E4fER10d.js";
import "./ExcalidrawComponent-BJxV53Ze.js";
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
