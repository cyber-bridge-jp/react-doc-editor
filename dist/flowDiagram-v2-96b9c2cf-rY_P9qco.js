import { f as o, p as a } from "./flowDb-956e92f1-BOdhTV52.js";
import { f as t, a as e } from "./styles-c10674c1-BHCijdxK.js";
import { x as s } from "./index-DgQY_bq6.js";
import "./graph-DBcbahuz.js";
import "./layout-DMVUs-9d.js";
import "./index-DKOoj54Z.js";
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
