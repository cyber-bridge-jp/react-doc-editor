import { g as P, f as j, h as o, q as g, i as E, j as t, B as S, s as v, t as I } from "./index-CP_DG8xS.js";
import { r as L } from "./LexicalCollaborationContext-PFB_jjs6.js";
import { useMemo as b, useState as k, useRef as O, useCallback as D, useEffect as M } from "react";
var R = L();
function $(n) {
  return n.reduce((a, s) => a + s.votes.length, 0);
}
function A({
  option: n,
  index: a,
  options: s,
  totalVotes: i,
  withPollNode: p
}) {
  const { clientID: r } = R.useCollaborationContext(), C = O(null), _ = n.votes, m = _.indexOf(r) !== -1, d = _.length, N = n.text;
  return /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: v(
          "PollNode__optionCheckboxWrapper",
          m && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: C,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: () => {
              p((u) => {
                u.toggleVote(n, r);
              });
            },
            checked: m
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionInputWrapper", children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "PollNode__optionInputVotes",
          style: { width: `${d === 0 ? 0 : d / i * 100}%` }
        }
      ),
      /* @__PURE__ */ t.jsx("span", { className: "PollNode__optionInputVotesCount", children: d > 0 && (d === 1 ? "1 vote" : `${d} votes`) }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          className: "PollNode__optionInput",
          type: "text",
          value: N,
          onChange: (u) => {
            const x = u.target, h = x.value, e = x.selectionStart, l = x.selectionEnd;
            p(
              (c) => {
                c.setOptionText(n, h);
              },
              () => {
                x.selectionStart = e, x.selectionEnd = l;
              }
            );
          },
          placeholder: `Option ${a + 1}`
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        disabled: s.length < 3,
        className: v(
          "PollNode__optionDelete",
          s.length < 3 && "PollNode__optionDeleteDisabled"
        ),
        "aria-label": "Remove",
        onClick: () => {
          p((u) => {
            u.deleteOption(n);
          });
        }
      }
    )
  ] });
}
function V({
  question: n,
  options: a,
  nodeKey: s
}) {
  const [i] = P.useLexicalComposerContext(), p = b(() => $(a), [a]), [r, C, _] = j.useLexicalNodeSelection(s), [f, m] = k(null), d = O(null), N = D(
    (e) => {
      if (r && o.$isNodeSelection(o.$getSelection())) {
        e.preventDefault();
        const c = o.$getNodeByKey(s);
        if (g(c))
          return c.remove(), !0;
      }
      return !1;
    },
    [r, s]
  );
  M(() => E.mergeRegister(
    i.registerUpdateListener(({ editorState: e }) => {
      m(e.read(() => o.$getSelection()));
    }),
    i.registerCommand(
      o.CLICK_COMMAND,
      (e) => {
        const l = e;
        return l.target === d.current ? (l.shiftKey || _(), C(!r), !0) : !1;
      },
      o.COMMAND_PRIORITY_LOW
    ),
    i.registerCommand(
      o.KEY_DELETE_COMMAND,
      N,
      o.COMMAND_PRIORITY_LOW
    ),
    i.registerCommand(
      o.KEY_BACKSPACE_COMMAND,
      N,
      o.COMMAND_PRIORITY_LOW
    )
  ), [_, i, r, s, N, C]);
  const u = (e, l) => {
    i.update(
      () => {
        const c = o.$getNodeByKey(s);
        g(c) && e(c);
      },
      { onUpdate: l }
    );
  }, x = () => {
    u((e) => {
      e.addOption(I());
    });
  }, h = o.$isNodeSelection(f) && r;
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `PollNode__container ${h ? "focused" : ""}`,
      ref: d,
      children: /* @__PURE__ */ t.jsxs("div", { className: "PollNode__inner", children: [
        /* @__PURE__ */ t.jsx("h2", { className: "PollNode__heading", children: n }),
        a.map((e, l) => {
          const c = e.uid;
          return /* @__PURE__ */ t.jsx(
            A,
            {
              withPollNode: u,
              option: e,
              index: l,
              options: a,
              totalVotes: p
            },
            c
          );
        }),
        /* @__PURE__ */ t.jsx("div", { className: "PollNode__footer", children: /* @__PURE__ */ t.jsx(S, { onClick: x, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  V as default
};
