import { g as b, f as k, p as v, h as S, j as t, B as D, q as g, s as L } from "./index-D6zAFZpw.js";
import { r as I } from "./LexicalCollaborationContext-CYOOCLTg.js";
import { $isNodeSelection as P, $getSelection as j, $getNodeByKey as E, CLICK_COMMAND as M, COMMAND_PRIORITY_LOW as h, KEY_DELETE_COMMAND as A, KEY_BACKSPACE_COMMAND as $ } from "lexical";
import { useMemo as R, useState as V, useRef as O, useCallback as y, useEffect as B } from "react";
var T = I();
function W(s) {
  return s.reduce((c, o) => c + o.votes.length, 0);
}
function Y({
  option: s,
  index: c,
  options: o,
  totalVotes: r,
  withPollNode: x
}) {
  const { clientID: a } = T.useCollaborationContext(), C = O(null), p = s.votes, _ = p.indexOf(a) !== -1, i = p.length, m = s.text;
  return /* @__PURE__ */ t.jsxs("div", { className: "PollNode__optionContainer", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: g(
          "PollNode__optionCheckboxWrapper",
          _ && "PollNode__optionCheckboxChecked"
        ),
        children: /* @__PURE__ */ t.jsx(
          "input",
          {
            ref: C,
            className: "PollNode__optionCheckbox",
            type: "checkbox",
            onChange: () => {
              x((d) => {
                d.toggleVote(s, a);
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
            const u = d.target, N = u.value, e = u.selectionStart, n = u.selectionEnd;
            x(
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
        className: g(
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
function w({
  question: s,
  options: c,
  nodeKey: o
}) {
  const [r] = b.useLexicalComposerContext(), x = R(() => W(c), [c]), [a, C, p] = k.useLexicalNodeSelection(o), [f, _] = V(null), i = O(null), m = y(
    (e) => {
      if (a && P(j())) {
        e.preventDefault();
        const l = E(o);
        if (v(l))
          return l.remove(), !0;
      }
      return !1;
    },
    [a, o]
  );
  B(() => S.mergeRegister(
    r.registerUpdateListener(({ editorState: e }) => {
      _(e.read(() => j()));
    }),
    r.registerCommand(
      M,
      (e) => {
        const n = e;
        return n.target === i.current ? (n.shiftKey || p(), C(!a), !0) : !1;
      },
      h
    ),
    r.registerCommand(
      A,
      m,
      h
    ),
    r.registerCommand(
      $,
      m,
      h
    )
  ), [p, r, a, o, m, C]);
  const d = (e, n) => {
    r.update(
      () => {
        const l = E(o);
        v(l) && e(l);
      },
      { onUpdate: n }
    );
  }, u = () => {
    d((e) => {
      e.addOption(L());
    });
  }, N = P(f) && a;
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
            Y,
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
  w as default
};
