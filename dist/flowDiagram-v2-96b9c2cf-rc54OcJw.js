import { f as o, p as a } from "./flowDb-956e92f1-BJ7NbOQI.js";
import { f as t, a as e } from "./styles-c10674c1-BC8ioZvN.js";
import { x as s } from "./index-B4MvTI_-.js";
import "./graph-CNrx-K_I.js";
import "./layout-DSyZ80ae.js";
import "./ExcalidrawComponent-CMEhUysG.js";
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
