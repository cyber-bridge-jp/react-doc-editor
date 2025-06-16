import { f as o, p as a } from "./flowDb-956e92f1-CrH4UxbG.js";
import { f as t, a as e } from "./styles-c10674c1-CPiCHz8s.js";
import { x as s } from "./index-CGAOqTVC.js";
import "./graph-D5BcP87h.js";
import "./layout-CI_XIIlL.js";
import "./index-B-hVvLl3.js";
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
