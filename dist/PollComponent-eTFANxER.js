import { b, a as D, r as v, L as E, j as t, B as S, t as g, v as I } from "./index-DUbKVMZR.js";
import { l as M } from "./LexicalCollaborationContext.prod-CUImU7gP.js";
import { $isNodeSelection as P, $getSelection as j, $getNodeByKey as O, KEY_BACKSPACE_COMMAND as $, COMMAND_PRIORITY_LOW as f, KEY_DELETE_COMMAND as A, CLICK_COMMAND as R } from "lexical";
import { useMemo as L, useState as V, useRef as k, useCallback as y, useEffect as B } from "react";
function T(n) {
  return n.reduce((c, o) => c + o.votes.length, 0);
}
function W({
  option: n,
  index: c,
  options: o,
  totalVotes: r,
  withPollNode: p
}) {
  const { clientID: a } = M(), N = k(null), _ = n.votes, x = _.indexOf(a) !== -1, i = _.length, m = n.text;
  return /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: g(
          "PollNode__optionCheckboxWrapper",
          x && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: N,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: () => {
              p((d) => {
                d.toggleVote(n, a);
              });
            },
            checked: x
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${i === 0 ? 0 : i / r * 100}%` }
        }
      ),
      /* @__PURE__ */ t.jsx("span", { className: "PollNode__optionInputVotesCount", children: i > 0 && (i === 1 ? "1 vote" : `${i} votes`) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: m,
          onChange: (d) => {
            const u = d.target, h = u.value, e = u.selectionStart, s = u.selectionEnd;
            p(
              (l) => {
                l.setOptionText(n, h);
              },
              () => {
                u.selectionStart = e, u.selectionEnd = s;
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
        className: g(
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
function q({
  question: n,
  options: c,
  nodeKey: o
}) {
  const [r] = b(), p = L(() => T(c), [c]), [a, N, _] = D(o), [C, x] = V(null), i = k(null), m = y(
    (e) => {
      if (a && P(j())) {
        e.preventDefault();
        const l = O(o);
        if (v(l))
          return l.remove(), !0;
      }
      return !1;
    },
    [a, o]
  );
  B(() => E(
    r.registerUpdateListener(({ editorState: e }) => {
      x(e.read(() => j()));
    }),
    r.registerCommand(
      R,
      (e) => {
        const s = e;
        return s.target === i.current ? (s.shiftKey || _(), N(!a), !0) : !1;
      },
      f
    ),
    r.registerCommand(
      A,
      m,
      f
    ),
    r.registerCommand(
      $,
      m,
      f
    )
  ), [_, r, a, o, m, N]);
  const d = (e, s) => {
    r.update(
      () => {
        const l = O(o);
        v(l) && e(l);
      },
      { onUpdate: s }
    );
  }, u = () => {
    d((e) => {
      e.addOption(I());
    });
  }, h = P(C) && a;
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `PollNode__container ${h ? "focused" : ""}`,
      ref: i,
      children: /* @__PURE__ */ t.jsxs("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ t.jsx("h2", { className: "PollNode__heading", children: n }),
        c.map((e, s) => {
          const l = e.uid;
          return /* @__PURE__ */ t.jsx(
            W,
            {
              withPollNode: d,
              option: e,
              index: s,
              options: c,
              totalVotes: p
            },
            l
          );
        }),
        /* @__PURE__ */ t.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ t.jsx(S, { onClick: u, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  q as default
};
