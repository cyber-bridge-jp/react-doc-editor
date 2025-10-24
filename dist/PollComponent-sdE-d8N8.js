import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { l as I } from "./LexicalCollaborationContext.prod-BooDYVUZ.js";
import { K as D, J as V, M as P, O as x, Q as k, ap as b, V as $, a0 as E, Y as v, a1 as j, a3 as y, af as M, aq as R, ar as O } from "./index-D1Kv7B10.js";
import { useMemo as T, useState as A, useRef as S, useCallback as L, useEffect as W } from "react";
function q(n) {
  return n.reduce((a, o) => a + o.votes.length, 0);
}
function w({
  option: n,
  index: a,
  options: o,
  totalVotes: c,
  withPollNode: p
}) {
  const { clientID: r } = I(), _ = S(null), m = n.votes, f = m.indexOf(r) !== -1, i = m.length, h = n.text;
  return /* @__PURE__ */ g("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: O(
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
          style: { width: `${i === 0 ? 0 : i / c * 100}%` }
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
            const u = d.target, N = u.value, e = u.selectionStart, s = u.selectionEnd;
            p(
              (l) => {
                l.setOptionText(n, N);
              },
              () => {
                u.selectionStart = e, u.selectionEnd = s;
              }
            );
          },
          placeholder: `Option ${a + 1}`
        }
      )
    ] }),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        disabled: o.length < 3,
        className: O(
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
function U({
  question: n,
  options: a,
  nodeKey: o
}) {
  const [c] = D(), p = T(() => q(a), [a]), [r, _, m] = V(o), [C, f] = A(null), i = S(null), h = L(
    (e) => {
      if (r && P(x())) {
        e.preventDefault();
        const l = k(o);
        if (b(l))
          return l.remove(), !0;
      }
      return !1;
    },
    [r, o]
  );
  W(() => $(
    c.registerUpdateListener(({ editorState: e }) => {
      f(e.read(() => x()));
    }),
    c.registerCommand(
      y,
      (e) => {
        const s = e;
        return s.target === i.current ? (s.shiftKey || m(), _(!r), !0) : !1;
      },
      v
    ),
    c.registerCommand(
      j,
      h,
      v
    ),
    c.registerCommand(
      E,
      h,
      v
    )
  ), [m, c, r, o, h, _]);
  const d = (e, s) => {
    c.update(
      () => {
        const l = k(o);
        b(l) && e(l);
      },
      { onUpdate: s }
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
        a.map((e, s) => {
          const l = e.uid;
          return /* @__PURE__ */ t(
            w,
            {
              withPollNode: d,
              option: e,
              index: s,
              options: a,
              totalVotes: p
            },
            l
          );
        }),
        /* @__PURE__ */ t("div", { className: "PollNode__footer", children: /* @__PURE__ */ t(M, { onClick: u, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  U as default
};
