import { jsx as o, Fragment as de, jsxs as I } from "react/jsx-runtime";
import { K as te, at as K, au as fe, av as me, aw as pe, J as he, M as k, O as X, Q as y, ax as N, U as O, V as Ee, W as Ce, Y as E, Z as ve, a0 as Re, a1 as xe, a3 as Se, a4 as be, ay as Ie, a5 as ke, a6 as ye, az as Ne, aA as De, aB as Le, a8 as Pe, a9 as Me, aa as we, ab as ze } from "./index-CW_PN8RV.js";
import { useEffect as z, useCallback as C, useRef as D, useState as B, Suspense as _e } from "react";
import { d as $e } from "./LexicalNestedComposer.prod-3hJ1MNcl.js";
import { I as He } from "./ImageResizer-C3z1nz78.js";
const Ye = new RegExp(function() {
  const { alpha: c, alphanumeric: l, hashChars: r } = function() {
    const i = String.fromCharCode, d = "A-Za-zªµºÀ-ÖØ-öø-Ɂɐ-ˁˆ-ˑˠ-ˤˮͺΆΈ-ΊΌΎ-ΡΣ-ώϐ-ϵϷ-ҁҊ-ӎӐ-ӹԀ-ԏԱ-Ֆՙա-ևא-תװ-ײء-غـ-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ݭހ-ޥޱऄ-हऽॐक़-ॡॽঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹఅ-ఌఎ-ఐఒ-నప-ళవ-హౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹൠ-ൡඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཪྈ-ྋက-အဣ-ဧဩ-ဪၐ-ၕႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᴀ-ᶿḀ-ẛẠ-ỹἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℱℳ-ℹℼ-ℿⅅ-ⅉⰀ-Ⱞⰰ-ⱞⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄬㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-龻ꀀ-ꒌꠀ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ̀-ͯ҃-֑҆-ֹֻ-ֽֿׁ-ׂׄ-ׇׅؐ-ًؕ-ٰٞۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ްँ-ः़ा-्॑-॔ॢ-ॣঁ-ঃ়া-ৄে-ৈো-্ৗৢ-ৣਁ-ਃ਼ਾ-ੂੇ-ੈੋ-੍ੰ-ੱઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣଁ-ଃ଼ା-ୃେ-ୈୋ-୍ୖ-ୗஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕ-ౖಂ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕ-ೖം-ഃാ-ൃെ-ൈൊ-്ൗං-ඃ්ා-ුූෘ-ෟෲ-ෳัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-༹༙༵༷༾-༿ཱ-྄྆-྇ྐ-ྗྙ-ྼ࿆ာ-ဲံ-္ၖ-ၙ፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈ-ᧉᨗ-ᨛ᷀-᷃⃐-⃥⃜⃡-⃫〪-゙〯-゚ꠂ꠆ꠋꠣ-ꠧﬞ︀-️︠-︣À-ÖØ-öø-ÿĀ-ɏɓ-ɔɖ-ɗəɛɣɨɯɲʉʋʻ̀-ͯḀ-ỿЀ-ӿԀ-ԧⷠ-ⷿꙀ-֑ꚟ-ֿׁ-ׂׄ-ׇׅא-תװ-״﬒-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﭏؐ-ؚؠ-ٟٮ-ۓە-ۜ۞-۪ۨ-ۯۺ-ۼۿݐ-ݿࢠࢢ-ࢬࣤ-ࣾﭐ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼ‌-‌ก-ฺเ-๎ᄀ-ᇿ㄰-ㆅꥠ-꥿가-힯ힰ-퟿ﾡ-ￜァ-ヺー-ヾｦ-ﾟ０-９Ａ-Ｚａ-ｚぁ-ゖ゙-ゞ㐀-䶿一-鿿" + i(173824) + "-" + i(177983) + i(177984) + "-" + i(178207) + i(194560) + "-" + i(195103) + "〃々〻";
    return { alpha: d, alphanumeric: d + "0-9٠-٩۰-۹०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉០-៩᠐-᠙᥆-᥏᧐-᧙０-９_", hashChars: "#\\uFF03" };
  }(), u = "[" + l + "]";
  return "(" + ("^|$|[^&/" + l + "]") + ")(" + ("[" + r + "]") + ")(" + u + "*" + ("[" + c + "]") + u + "*)";
}(), "i");
function Te() {
  const [c] = te();
  z(() => {
    if (!c.hasNodes([K])) throw new Error("HashtagPlugin: HashtagNode not registered on editor");
  }, [c]);
  const l = C((u) => fe(u.getTextContent()), []), r = C((u) => {
    const i = Ye.exec(u);
    if (i === null) return null;
    const d = i[3].length + 1, v = i.index + i[1].length;
    return { end: v + d, start: v };
  }, []);
  return me(r, K, l), null;
}
const ee = /* @__PURE__ */ new Set(), Xe = pe();
function F(c, l) {
  const r = c.style;
  r.top = l.y + "px", r.left = l.x + "px";
}
function Be(c) {
  if (!ee.has(c))
    throw new Promise((l) => {
      const r = new Image();
      r.src = c, r.onload = () => {
        ee.add(c), l(null);
      };
    });
}
function Fe({
  altText: c,
  className: l,
  imageRef: r,
  src: u,
  width: i,
  height: d,
  maxWidth: v
}) {
  return Be(u), /* @__PURE__ */ o(
    "img",
    {
      className: l || void 0,
      src: u,
      alt: c,
      ref: r,
      style: {
        height: d,
        maxWidth: v,
        width: i
      },
      draggable: "false"
    }
  );
}
function Je({
  src: c,
  altText: l,
  nodeKey: r,
  width: u,
  height: i,
  maxWidth: d,
  resizable: v,
  showCaption: R,
  caption: S,
  captionsEnabled: ne,
  isAbsolute: m,
  xOffset: L,
  yOffset: P
}) {
  const M = D(null), _ = D(null), x = D(null), [g, f, w] = he(r), [b, j] = B(!1), [s] = te(), [$, se] = B(null), G = D(null), [U, A] = B(!1), p = D({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  z(() => {
    const t = p.current;
    t.x = L, t.y = P;
    const e = x.current;
    e !== null && F(e, t);
  }, [L, P]), z(() => {
    if (m) {
      const t = p.current;
      t.x = L, t.y = P;
      const e = x.current;
      e !== null && F(e, t);
    }
  }, [L, P, m]);
  const H = C(
    (t) => {
      if (g && k(X())) {
        t.preventDefault();
        const n = y(r);
        if (N(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [g, r]
  ), Z = C(
    (t) => {
      const e = X(), n = _.current;
      if (g && k(e) && e.getNodes().length === 1) {
        if (R)
          return O(null), t.preventDefault(), S.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [S, g, R]
  ), J = C(
    (t) => G.current === S || _.current === t.target ? (O(null), s.update(() => {
      f(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [S, s, f]
  ), Y = C(
    (t) => {
      const e = t;
      return U && A(!1), b ? !0 : e.target === M.current ? (e.shiftKey ? f(!g) : (w(), f(!0)), !0) : !1;
    },
    [b, g, f, w]
  ), T = C(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === M.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? f(!g) : (w(), f(!0), A(!0)));
      });
    },
    [s]
  ), Q = (t) => {
    const e = x.current, n = p.current, a = s.getRootElement();
    e && p.current.isDragging && t.target === e.firstChild && (p.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const h = y(r);
      N(h) && h.setPosition(n.x, n.y);
    })), a == null || a.removeEventListener("pointermove", V), a == null || a.removeEventListener("pointerup", Q);
  }, V = (t) => {
    const e = x.current, n = p.current, a = n.rootElementRect;
    e !== null && n.isDragging && a !== null && (n.x = t.pageX - n.offsetX - a.left, n.y = t.pageY - n.offsetY - a.top, F(e, n));
  }, re = (t) => {
    var h;
    const e = x.current, n = p.current, a = s.getRootElement();
    if (e !== null && t.button !== 2 && m && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((h = e.parentElement) == null ? void 0 : h.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ue, left: ge } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - ge, n.offsetY = t.pageY - ue, e.classList.add("dragging"), a == null || a.addEventListener("pointermove", V), a == null || a.addEventListener("pointerup", Q);
    }
  };
  z(() => {
    let t = !0;
    const e = s.getRootElement(), n = Ee(
      s.registerUpdateListener(({ editorState: a }) => {
        t && se(a.read(() => X()));
      }),
      s.registerCommand(
        be,
        (a, h) => (G.current = h, !1),
        E
      ),
      s.registerCommand(
        Se,
        Y,
        E
      ),
      s.registerCommand(
        Xe,
        Y,
        E
      ),
      s.registerCommand(
        xe,
        H,
        E
      ),
      s.registerCommand(
        Re,
        H,
        E
      ),
      s.registerCommand(ve, Z, E),
      s.registerCommand(
        Ce,
        J,
        E
      )
    );
    return e == null || e.addEventListener("contextmenu", T), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", T);
    };
  }, [
    w,
    s,
    b,
    g,
    r,
    H,
    Z,
    J,
    Y,
    T,
    f
  ]);
  const W = (t = !0) => {
    s.update(() => {
      const e = y(r);
      N(e) && e.setShowCaption(t);
    });
  }, ae = (t, e) => {
    setTimeout(() => {
      j(!1);
    }, 200), s.update(() => {
      const n = y(r);
      N(n) && n.setWidthAndHeight(t, e);
    });
  }, oe = (t) => {
    s.update(() => {
      const e = y(r);
      N(e) && e.setAbsolute(t.target.checked);
    });
  }, ie = () => {
    j(!0);
  }, { historyState: ce } = Ie(), le = g && k($) && !b, q = g || b;
  return /* @__PURE__ */ o(_e, { fallback: null, children: /* @__PURE__ */ o(de, { children: /* @__PURE__ */ I(
    "div",
    {
      ref: x,
      draggable: !m && le,
      style: {
        position: m ? "absolute" : "initial",
        zIndex: m ? 1 : 0
      },
      onPointerDown: re,
      children: [
        /* @__PURE__ */ o(
          Fe,
          {
            className: q ? `focused ${k($) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: M,
            width: u,
            height: i,
            maxWidth: d
          }
        ),
        R && /* @__PURE__ */ o("div", { className: "image-caption-container", children: /* @__PURE__ */ I($e, { initialEditor: S, children: [
          /* @__PURE__ */ o(ke, {}),
          /* @__PURE__ */ o(ye, {}),
          /* @__PURE__ */ o(Ne, {}),
          /* @__PURE__ */ o(Te, {}),
          /* @__PURE__ */ o(De, {}),
          /* @__PURE__ */ o(Le, { externalHistoryState: ce }),
          /* @__PURE__ */ o(
            Pe,
            {
              contentEditable: /* @__PURE__ */ o(ze, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ o(we, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Me
            }
          )
        ] }) }),
        U && /* @__PURE__ */ I("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ o("div", { children: /* @__PURE__ */ I("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: m,
                onChange: oe
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ o("div", { children: /* @__PURE__ */ I("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: R,
                onChange: () => W(!R)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        v && k($) && q && s.isEditable() && /* @__PURE__ */ o(
          He,
          {
            showCaption: R,
            setShowCaption: W,
            editor: s,
            buttonRef: _,
            imageRef: M,
            maxWidth: d,
            onResizeStart: ie,
            onResizeEnd: ae,
            captionsEnabled: ne
          }
        )
      ]
    }
  ) }) });
}
export {
  Xe as RIGHT_CLICK_IMAGE_COMMAND,
  Je as default
};
