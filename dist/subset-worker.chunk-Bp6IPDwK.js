import { C as t, N as r } from "./chunk-EIO257PC-BeH-YCfQ.js";
import "./index-C6GX-Z8i.js";
var m = import.meta.url ? new URL(import.meta.url) : void 0;
typeof window > "u" && typeof self < "u" && (self.onmessage = async (a) => {
  switch (a.data.command) {
    case t.Subset:
      let e = await r(a.data.arrayBuffer, a.data.codePoints);
      self.postMessage(e, { transfer: [e] });
      break;
  }
});
export {
  m as WorkerUrl
};
