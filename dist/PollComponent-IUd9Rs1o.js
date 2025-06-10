import { u as O, b as S, w as C, R as g, C as j, a8 as P, N as I, k as D, K as f, e as R, r as $, j as t, B as E, a9 as V, aa as k } from "./index-CSHQHh7d.js";
import { l as w } from "./LexicalCollaborationContext.prod-BooDYVUZ.js";
import { useMemo as y, useState as A, useRef as b, useCallback as B, useEffect as T } from "react";
function W(s) {
  return s.reduce((c, o) => c + o.votes.length, 0);
}
function F({
  option: s,
  index: c,
  options: o,
  totalVotes: a,
  withPollNode: p
}) {
  const { clientID: r } = w(), h = b(null), m = s.votes, _ = m.indexOf(r) !== -1, i = m.length, x = s.text;
  return /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: k(
          "PollNode__optionCheckboxWrapper",
          _ && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: h,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: () => {
              p((d) => {
                d.toggleVote(s, r);
              });
            },
            checked: _
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${i === 0 ? 0 : i / a * 100}%` }
        }
      ),
      /* @__PURE__ */ t.jsx("span", { className: "PollNode__optionInputVotesCount", children: i > 0 && (i === 1 ? "1 vote" : `${i} votes`) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: x,
          onChange: (d) => {
            const u = d.target, N = u.value, e = u.selectionStart, n = u.selectionEnd;
            p(
              (l) => {
                l.setOptionText(s, N);
              },
              () => {
                u.selectionStart = e, u.selectionEnd = n;
              }
            );
          },
          placeholder: `Option ${c + 1}`
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        disabled: o.length < 3,
        className: k(
          "PollNode__optionDelete",
          o.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": "Remove",
        onClick: () => {
          p((d) => {
            d.deleteOption(s);
          });
        }
      }
    )
  ] });
}
function q({
  question: s,
  options: c,
  nodeKey: o
}) {
  const [a] = O(), p = y(() => W(c), [c]), [r, h, m] = S(o), [v, _] = A(null), i = b(null), x = B(
    (e) => {
      if (r && C(g())) {
        e.preventDefault();
        const l = j(o);
        if (P(l))
          return l.remove(), !0;
      }
      return !1;
    },
    [r, o]
  );
  T(() => I(
    a.registerUpdateListener(({ editorState: e }) => {
      _(e.read(() => g()));
    }),
    a.registerCommand(
      $,
      (e) => {
        const n = e;
        return n.target === i.current ? (n.shiftKey || m(), h(!r), !0) : !1;
      },
      f
    ),
    a.registerCommand(
      R,
      x,
      f
    ),
    a.registerCommand(
      D,
      x,
      f
    )
  ), [m, a, r, o, x, h]);
  const d = (e, n) => {
    a.update(
      () => {
        const l = j(o);
        P(l) && e(l);
      },
      { onUpdate: n }
    );
  }, u = () => {
    d((e) => {
      e.addOption(V());
    });
  }, N = C(v) && r;
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `PollNode__container ${N ? "focused" : ""}`,
      ref: i,
      children: /* @__PURE__ */ t.jsxs("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ t.jsx("h2", { className: "PollNode__heading", children: s }),
        c.map((e, n) => {
          const l = e.uid;
          return /* @__PURE__ */ t.jsx(
            F,
            {
              withPollNode: d,
              option: e,
              index: n,
              options: c,
              totalVotes: p
            },
            l
          );
        }),
        /* @__PURE__ */ t.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ t.jsx(E, { onClick: u, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  q as default
};
