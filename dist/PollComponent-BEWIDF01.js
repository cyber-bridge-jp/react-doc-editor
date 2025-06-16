import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { l as I } from "./LexicalCollaborationContext.prod-BooDYVUZ.js";
import { H as V, Q as D, U as P, V as x, W as k, aU as b, Z as $, a3 as E, a1 as v, a4 as W, a6 as j, ai as y, aV as R, aW as O } from "./index-B-hVvLl3.js";
import { useMemo as T, useState as U, useRef as S, useCallback as A, useEffect as L } from "react";
function M(n) {
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
function Z({
  question: n,
  options: a,
  nodeKey: o
}) {
  const [c] = V(), p = T(() => M(a), [a]), [r, _, m] = D(o), [C, f] = U(null), i = S(null), h = A(
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
  L(() => $(
    c.registerUpdateListener(({ editorState: e }) => {
      f(e.read(() => x()));
    }),
    c.registerCommand(
      j,
      (e) => {
        const s = e;
        return s.target === i.current ? (s.shiftKey || m(), _(!r), !0) : !1;
      },
      v
    ),
    c.registerCommand(
      W,
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
        /* @__PURE__ */ t("div", { className: "PollNode__footer", children: /* @__PURE__ */ t(y, { onClick: u, small: !0, children: "Add Option" }) })
      ] })
    }
  );
}
export {
  Z as default
};
