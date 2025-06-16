import { C as t, N as r } from "./chunk-EIO257PC-C6rcp6vM.js";
import "./index-B-hVvLl3.js";
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
