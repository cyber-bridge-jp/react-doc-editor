import { g as k, f as S, p as g, h as b, j as t, B as D, q as v, s as L } from "./index-aozLG5N8.js";
import { L as I } from "./LexicalCollaborationContext-DcPP_uZR.js";
import { $isNodeSelection as P, $getSelection as j, $getNodeByKey as O, CLICK_COMMAND as M, COMMAND_PRIORITY_LOW as h, KEY_DELETE_COMMAND as A, KEY_BACKSPACE_COMMAND as $ } from "lexical";
import { useMemo as R, useState as V, useRef as E, useCallback as y, useEffect as B } from "react";
function T(s) {
  return s.reduce((c, o) => c + o.votes.length, 0);
}
function W({
  option: s,
  index: c,
  options: o,
  totalVotes: a,
  withPollNode: x
}) {
  const { clientID: r } = I.useCollaborationContext(), _ = E(null), p = s.votes, N = p.indexOf(r) !== -1, i = p.length, m = s.text;
  return /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: v(
          "PollNode__optionCheckboxWrapper",
          N && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: _,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: () => {
              x((d) => {
                d.toggleVote(s, r);
              });
            },
            checked: N
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
          value: m,
          onChange: (d) => {
            const u = d.target, C = u.value, e = u.selectionStart, n = u.selectionEnd;
            x(
              (l) => {
                l.setOptionText(s, C);
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
        className: v(
          "PollNode__optionDelete",
          o.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": "Remove",
        onClick: () => {
          x((d) => {
            d.deleteOption(s);
          });
        }
      }
    )
  ] });
}
function F({
  question: s,
  options: c,
  nodeKey: o
}) {
  const [a] = k.useLexicalComposerContext(), x = R(() => T(c), [c]), [r, _, p] = S.useLexicalNodeSelection(o), [f, N] = V(null), i = E(null), m = y(
    (e) => {
      if (r && P(j())) {
        e.preventDefault();
        const l = O(o);
        if (g(l))
          return l.remove(), !0;
      }
      return !1;
    },
    [r, o]
  );
  B(() => b.mergeRegister(
    a.registerUpdateListener(({ editorState: e }) => {
      N(e.read(() => j()));
    }),
    a.registerCommand(
      M,
      (e) => {
        const n = e;
        return n.target === i.current ? (n.shiftKey || p(), _(!r), !0) : !1;
      },
      h
    ),
    a.registerCommand(
      A,
      m,
      h
    ),
    a.registerCommand(
      $,
      m,
      h
    )
  ), [p, a, r, o, m, _]);
  const d = (e, n) => {
    a.update(
      () => {
        const l = O(o);
        g(l) && e(l);
      },
      { onUpdate: n }
    );
  }, u = () => {
    d((e) => {
      e.addOption(L());
    });
  }, C = P(f) && r;
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `PollNode__container ${C ? "focused" : ""}`,
      ref: i,
      children: /* @__PURE__ */ t.jsxs("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ t.jsx("h2", { className: "PollNode__heading", children: s }),
        c.map((e, n) => {
          const l = e.uid;
          return /* @__PURE__ */ t.jsx(
            W,
            {
              withPollNode: d,
              option: e,
              index: n,
              options: c,
              totalVotes: x
            },
            l
          );
        }),
        /* @__PURE__ */ t.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ t.jsx(D, { onClick: u, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  F as default
};
