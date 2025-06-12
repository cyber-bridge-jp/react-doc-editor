import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { l as O } from "./LexicalCollaborationContext.prod-BooDYVUZ.js";
import { u as D, b as $, T as P, M as x, S as k, a7 as b, L as V, k as E, I as v, w as T, r as j, B as M, a8 as R, a9 as S } from "./index-Bec-pY47.js";
import { useMemo as y, useState as A, useRef as I, useCallback as B, useEffect as L } from "react";
function W(n) {
  return n.reduce((c, o) => c + o.votes.length, 0);
}
function w({
  option: n,
  index: c,
  options: o,
  totalVotes: a,
  withPollNode: p
}) {
  const { clientID: r } = O(), _ = I(null), m = n.votes, f = m.indexOf(r) !== -1, i = m.length, h = n.text;
  return /* @__PURE__ */ g("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: S(
          "PollNode__optionCheckboxWrapper",
          f && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ t(
          "input",
          {
            ref: _,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: () => {
              p((d) => {
                d.toggleVote(n, r);
              });
            },
            checked: f
          }
        )
      }
    ),
    /* @__PURE__ */ g("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ t(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${i === 0 ? 0 : i / a * 100}%` }
        }
      ),
      /* @__PURE__ */ t("span", { className: "PollNode__optionInputVotesCount", children: i > 0 && (i === 1 ? "1 vote" : `${i} votes`) }),
      /* @__PURE__ */ t(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: h,
          onChange: (d) => {
            const u = d.target, N = u.value, e = u.selectionStart, l = u.selectionEnd;
            p(
              (s) => {
                s.setOptionText(n, N);
              },
              () => {
                u.selectionStart = e, u.selectionEnd = l;
              }
            );
          },
          placeholder: `Option ${c + 1}`
        }
      )
    ] }),
    /* @__PURE__ */ t(
      "button",
      {
        disabled: o.length < 3,
        className: S(
          "PollNode__optionDelete",
          o.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": "Remove",
        onClick: () => {
          p((d) => {
            d.deleteOption(n);
          });
        }
      }
    )
  ] });
}
function G({
  question: n,
  options: c,
  nodeKey: o
}) {
  const [a] = D(), p = y(() => W(c), [c]), [r, _, m] = $(o), [C, f] = A(null), i = I(null), h = B(
    (e) => {
      if (r && P(x())) {
        e.preventDefault();
        const s = k(o);
        if (b(s))
          return s.remove(), !0;
      }
      return !1;
    },
    [r, o]
  );
  L(() => V(
    a.registerUpdateListener(({ editorState: e }) => {
      f(e.read(() => x()));
    }),
    a.registerCommand(
      j,
      (e) => {
        const l = e;
        return l.target === i.current ? (l.shiftKey || m(), _(!r), !0) : !1;
      },
      v
    ),
    a.registerCommand(
      T,
      h,
      v
    ),
    a.registerCommand(
      E,
      h,
      v
    )
  ), [m, a, r, o, h, _]);
  const d = (e, l) => {
    a.update(
      () => {
        const s = k(o);
        b(s) && e(s);
      },
      { onUpdate: l }
    );
  }, u = () => {
    d((e) => {
      e.addOption(R());
    });
  }, N = P(C) && r;
  return /* @__PURE__ */ t(
    "div",
    {
      className: `PollNode__container ${N ? "focused" : ""}`,
      ref: i,
      children: /* @__PURE__ */ g("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ t("h2", { className: "PollNode__heading", children: n }),
        c.map((e, l) => {
          const s = e.uid;
          return /* @__PURE__ */ t(
            w,
            {
              withPollNode: d,
              option: e,
              index: l,
              options: c,
              totalVotes: p
            },
            s
          );
        }),
        /* @__PURE__ */ t("div", { className: "PollNode__footer", children: /* @__PURE__ */ t(M, { onClick: u, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  G as default
};
