import { f as o, p as a } from "./flowDb-956e92f1-CtXGE1NV.js";
import { f as t, a as e } from "./styles-c10674c1-DvfVdUw6.js";
import { x as s } from "./index-BcnatAuT.js";
import "./graph-CfJwIsjC.js";
import "./layout-BsXZEq9K.js";
import "./index-BEwq7YSb.js";
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
