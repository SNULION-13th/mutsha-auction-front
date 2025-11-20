import {
  r as a,
  b as C,
  u as D,
  j as e,
  D as I,
  c as B,
  d as P,
  e as T,
  f as k,
  B as N,
  p as E,
  R,
  P as O,
  h as $,
  C as W,
  i as L,
} from "./index-BafdFBMt.js";
import { L as A } from "./logo_white-B5195eUO.js";
import { I as U } from "./InfoModal-B29TKaYa.js";
function y(l) {
  const h = new Date(l.replace(" ", "T")),
    s = new Date(),
    o = h.getTime() - s.getTime();
  if (o <= 0) return "00d 00h 00m";
  const d = Math.floor(o / (1e3 * 60)),
    i = Math.floor(d / 1440),
    p = Math.floor((d % 1440) / 60),
    f = d % 60;
  return `${i}d ${p}h ${f}m`;
}
function F({
  bid: l,
  auctionId: h,
  onBidSuccess: s,
  children: o,
  isOpen: d,
  onOpenChange: i,
}) {
  const [p, f] = a.useState(null),
    [x, j] = a.useState(!0),
    [S, m] = a.useState(!1),
    [v, M] = a.useState(!1),
    [g, b] = a.useState(!1),
    _ = async () => {
      j(!0);
      try {
        const t = await C();
        f(t);
      } finally {
        j(!1);
      }
    };
  a.useEffect(() => {
    let t = !0;
    return (
      (async () => {
        try {
          const w = await C();
          t && f(w);
        } finally {
          t && j(!1);
        }
      })(),
      () => {
        t = !1;
      }
    );
  }, []);
  const r = p?.remaining_points ?? 0,
    n = a.useMemo(() => (x || !l || l <= 0 ? !1 : r >= l), [x, l, r]),
    c = !x && l > 0 && r < l,
    u = D();
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(I, {
        open: d,
        onOpenChange: i,
        children: [
          e.jsx(B, {}),
          e.jsx(P, { asChild: !0, children: o }),
          e.jsx(T, {
            className: "w-[532px]",
            children: e.jsxs("div", {
              className: "px-8 pt-20 pb-5 flex flex-col items-center gap-5",
              children: [
                c
                  ? e.jsxs("p", {
                      className:
                        "text-scale-600 text-2xl font-bold text-center",
                      children: [
                        "포인트가 부족합니다. ",
                        e.jsx("br", {}),
                        " 지금 바로 충전하시겠습니까?",
                      ],
                    })
                  : e.jsxs("p", {
                      className:
                        "text-scale-600 text-2xl font-bold text-center",
                      children: [
                        e.jsx("span", {
                          className: "font-bold text-brand-primary",
                          children: k(l),
                        }),
                        e.jsx("span", {
                          className: "font-bold text-brand-primary",
                          children: " 잔",
                        }),
                        "으로 이 상품에 ",
                        e.jsx("br", {}),
                        "입찰할까요?",
                      ],
                    }),
                e.jsx("div", {
                  children: e.jsxs("span", {
                    className: "text-xl font-bold text-scale-500",
                    children: [
                      "내 포인트 :",
                      x ? "불러오는 중..." : ` ${k(r)} 잔`,
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "flex w-full items-center justify-center pt-5 gap-5",
                  children: [
                    e.jsx(N, {
                      variant: "outlined",
                      onClick: () => i(!1),
                      className: "flex-1",
                      children: "취소",
                    }),
                    c
                      ? e.jsx(N, {
                          variant: "primary",
                          onClick: () => M(!0),
                          className: "flex-1",
                          children: "충전하기",
                        })
                      : e.jsx(N, {
                          variant: "primary",
                          disabled: !n || g,
                          onClick: async () => {
                            if (!(!h || g))
                              try {
                                b(!0);
                                const t = await E(h, l);
                                t && (s(t), m(!0));
                              } finally {
                                b(!1);
                              }
                          },
                          className: "flex-1",
                          children: g ? "처리 중 ..." : "입찰",
                        }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsx(U, {
        open: S,
        onOpenChange: (t) => {
          t || (m(!1), i(!1));
        },
        onClose: () => {
          (m(!1), i(!1));
        },
        title: `입찰이 완료되었어요! 
내 경매에서 확인해 보세요.`,
        closeButton: "닫기",
        confirmButton: "내 경매 보기",
        onConfirm: () => {
          (m(!1), i(!1), u(R.HISTORY.ROOT));
        },
      }),
      e.jsx(O, {
        open: v,
        onOpenChange: (t) => {
          t || (M(!1), _());
        },
      }),
    ],
  });
}
function Y() {
  const { auctionId: l } = $(),
    h = D(),
    [s, o] = a.useState(null),
    [d, i] = a.useState(!0),
    [p, f] = a.useState(null),
    [x, j] = a.useState(""),
    [S, m] = a.useState(!1),
    v = a.useMemo(() => {
      const n = Number(x.replace(/[^\d]/g, ""));
      return Number.isFinite(n) ? n : 0;
    }, [x]),
    [M, g] = a.useState("");
  (a.useEffect(() => {
    async function n() {
      try {
        i(!0);
        const c = await L(l ?? "");
        c ? (o(c), g(y(c.end_time))) : f("경매를 찾을 수 없습니다.");
      } catch (c) {
        (console.error("경매 상세 정보 로딩 실패:", c),
          f("경매 정보를 불러오는데 실패했습니다."));
      } finally {
        i(!1);
      }
    }
    l && n();
  }, [l]),
    a.useEffect(() => {
      if (!l) return;
      const n = "http://localhost:8000".replace(/^http/, "ws"),
        c = new WebSocket(`${n}/ws/auction/${l}/`);
      return (
        (c.onopen = () => {
          console.log("WebSocket connection established");
        }),
        (c.onmessage = (u) => {
          try {
            const t = JSON.parse(u.data);
            t && t.id !== void 0
              ? (console.log("실시간 경매 상태 업데이트:", t.current_price),
                o((w) => (w && w.id === t.id ? { ...w, ...t } : t)))
              : console.warn("수신된 데이터 형식이 다릅니다: ", t);
          } catch (t) {
            console.error("메시지 처리 중 오류 발생:", t);
          }
        }),
        (c.onclose = (u) => {
          console.log("WebSocket connection closed:", u);
        }),
        (c.onerror = (u) => {
          console.error("WebSocket error:", u);
        }),
        () => {
          c.close();
        }
      );
    }, [l]),
    a.useEffect(() => {
      if (!s) return;
      const n = setInterval(() => {
        g(y(s.end_time));
      }, 1e3);
      return () => {
        clearInterval(n);
      };
    }, [s]));
  const b = a.useMemo(() => {
      if (!s) return !1;
      const n = Math.max(s.starting_price ?? 0, (s.current_price ?? 0) + 1);
      return v >= n;
    }, [s, v]),
    _ = (n) => {
      (o(n), j(""));
    },
    r = a.useMemo(
      () => (s?.end_time ? y(s.end_time) === "00d 00h 00m" : !1),
      [s?.end_time],
    );
  return d
    ? e.jsx("div", {
        className: "w-full py-40 text-center text-scale-400",
        children: "불러오는 중 ...",
      })
    : p || !s
      ? e.jsx("div", {
          className: "w-full px-50 pt-40",
          children: e.jsxs("div", {
            className: "max-w-[1160px] mx-auto text-center",
            children: [
              e.jsx("div", {
                className: "text-2xl text-scale-500 mb-4",
                children: p,
              }),
              e.jsx(N, {
                variant: "primary",
                onClick: () => h("/auction"),
                children: "경매 목록으로 돌아가기",
              }),
            ],
          }),
        })
      : e.jsx("div", {
          className: "w-full px-50 py-30",
          children: e.jsxs("div", {
            className: "max-w-[1062px] mx-auto flex flex-col gap-25",
            children: [
              e.jsxs("div", {
                className: "flex flex-col gap-5",
                children: [
                  e.jsx("div", {
                    className: "text-5xl font-bold text-scale-600",
                    children: "경매 입찰하기",
                  }),
                  e.jsx("div", {
                    className: "text-2xl text-scale-400",
                    children: "멋사 구성원들의 애착템에 입찰해보세요!",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "w-full h-full flex gap-9",
                children: [
                  e.jsxs("div", {
                    className:
                      "w-[470px] shrink-0 min-h-[577px] rounded-2xl bg-bg-white flex flex-col gap-5 shadow-xl",
                    children: [
                      e.jsx("img", {
                        src: String(s.image_file),
                        className:
                          "w-full h-[392px] object-cover rounded-t-2xl",
                      }),
                      e.jsxs("div", {
                        className: "px-7 py-5 pb-12 flex flex-col gap-6",
                        children: [
                          e.jsx("div", {
                            className: "text-2xl font-bold text-scale-600",
                            children: s.title,
                          }),
                          e.jsx("div", {
                            className: "text-lg text-scale-400",
                            children: s.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "w-full min-h-[577px] rounded-2xl bg-bg-white flex flex-col gap-14 shadow-xl px-12.5 py-20 justify-center",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          e.jsx("div", {
                            className: "text-3xl font-bold text-scale-600",
                            children: "경매 정보",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("div", {
                                className: "text-xl font-bold text-scale-500",
                                children: "현재 입찰가",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("img", { src: W, className: "w-10" }),
                                  e.jsxs("div", {
                                    className:
                                      "text-3xl font-bold text-brand-primary",
                                    children: [s.current_price, "잔"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("div", {
                                className: "text-xl font-bold text-scale-500",
                                children: "남은 시간",
                              }),
                              e.jsx("div", {
                                className: "text-2xl font-bold text-scale-500",
                                children: y(s.end_time),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center w-full py-2.5",
                            children: [
                              e.jsxs("div", {
                                className: "w-1/2 flex flex-col gap-1.5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-xl font-bold text-scale-500",
                                    children: "최소 입찰가",
                                  }),
                                  e.jsx("div", {
                                    className: "text-xl text-scale-400",
                                    children: s.starting_price,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "w-1/2 flex flex-col gap-1.5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-xl font-bold text-scale-500",
                                    children: "판매자",
                                  }),
                                  e.jsx("div", {
                                    className: "text-xl text-scale-400",
                                    children: s.seller_nickname,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col gap-7",
                        children: [
                          e.jsx("div", {
                            className: "text-3xl font-bold text-scale-600",
                            children: "입찰하기",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("input", {
                                    type: "number",
                                    inputMode: "numeric",
                                    disabled: r,
                                    min: Math.max(
                                      s.starting_price ?? 0,
                                      (s.current_price ?? 0) + 1,
                                    ),
                                    value: x,
                                    onChange: (n) => {
                                      const c = n.target.value.replace(
                                        /[^\d]/g,
                                        "",
                                      );
                                      j(c.replace(/^0+(?=\d)/, ""));
                                    },
                                    placeholder: r
                                      ? "이미 종료된 경매"
                                      : "입찰가 입력",
                                    className: `flex-1 h-12 rounded-sm border border-scale-200 px-4 placeholder:text-scale-300 focus:outline-none ${r ? "bg-scale-100 text-scale-300 cursor-not-allowed" : "text-scale-600 focus:ring-2 focus:ring-brand-primary/40"}`,
                                  }),
                                  e.jsx("span", {
                                    className: "text-xl text-scale-600",
                                    children: "잔",
                                  }),
                                  r
                                    ? e.jsx(N, {
                                        variant: "darkgray",
                                        className:
                                          "h-12 w-50 px-6 flex gap-2.5 items-center justify-center cursor-not-allowed",
                                        children: "경매 종료",
                                      })
                                    : e.jsx(F, {
                                        bid: v,
                                        auctionId: s.id,
                                        onBidSuccess: _,
                                        isOpen: S,
                                        onOpenChange: m,
                                        children: e.jsxs(N, {
                                          variant: "primary",
                                          disabled: !b,
                                          onClick: () => m(!0),
                                          className:
                                            "h-12 w-50 px-6 flex gap-2.5 items-center justify-center",
                                          children: [
                                            e.jsx("img", {
                                              src: A,
                                              className: "w-5",
                                            }),
                                            "입찰하기",
                                          ],
                                        }),
                                      }),
                                ],
                              }),
                              !r &&
                                !b &&
                                e.jsxs("div", {
                                  className:
                                    "text-base px-2 text-point-warning",
                                  children: [
                                    "최소",
                                    " ",
                                    Math.max(
                                      s.starting_price ?? 0,
                                      (s.current_price ?? 0) + 1,
                                    ),
                                    "잔 이상으로 입력해 주세요.",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
}
export { Y as default };
