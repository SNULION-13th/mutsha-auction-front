import {
  j as e,
  r as n,
  u as r,
  B as c,
  C as x,
  g as m,
} from "./index-BafdFBMt.js";
import { L as f } from "./logo_white-B5195eUO.js";
const u = "/assets/phone-BxcePYKp.svg",
  h = "/assets/heart-D_FxMiay.svg",
  g = "/assets/hand-BdHYxwsw.svg",
  j = "/assets/landingBg-CclL83mf.png";
function p({ question: a, answer: l }) {
  const [s, i] = n.useState(!1);
  return e.jsxs("div", {
    className: `flex flex-col justify-center rounded-xl px-12.5 py-10 shadow-lg w-full bg-bg-white ${s ? "border-2 border-brand-primary ring-4 ring-brand-primary/15" : ""}`,
    children: [
      e.jsxs("div", {
        className: "flex justify-between items-center",
        children: [
          e.jsx("div", {
            className: "text-xl font-bold truncate",
            children: a,
          }),
          e.jsx("button", {
            onClick: () => i(!s),
            children: e.jsx("svg", {
              className: `transition-transform transform ${s ? "rotate-180" : "rotate-0"}`,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
            }),
          }),
        ],
      }),
      e.jsx("div", {
        className: `grid transition-[grid-template-rows] duration-300 ease-in-out ${s ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
        children: e.jsx("div", {
          className: "overflow-hidden",
          children: e.jsx("div", {
            className: "text-lg text-left mt-4",
            children: l,
          }),
        }),
      }),
    ],
  });
}
function w() {
  const a = [
    {
      question: "Q. 어떻게 경매에 참여하나요?",
      answer:
        "바로 위 블럭 확인 부탁드립니다! 아니면 등록하면서 배워보는 건 어때요?",
    },
    {
      question: "Q. 경매 등록은 무료인가요?",
      answer: "네. 누구든지 경매에 등록할 수 있습니다.",
    },
    {
      question: "Q. 술잔(포인트)은 어떻게 충전하나요?",
      answer:
        "로그인 시 생기는 헤더 프로필 버튼을 누르면 '충전하기' 버튼을 통해 포인트를 충전하실 수 있습니다. 결제는 카카오페이로!",
    },
    {
      question:
        "Q. 네 번째 질문입니다. 만약 QNA가 너무너무 길면 어떡하나요? 전 하고 싶은 말이 너무너무 많은데 이 세상이 저에겐 너무 짧습니다.",
      answer: "말을 줄이자!",
    },
  ];
  return e.jsx("div", {
    className: "w-full px-50 py-25",
    children: e.jsxs("div", {
      className: "max-w-[1160px] mx-auto flex flex-col gap-15",
      children: [
        e.jsx("div", {
          className: "text-5xl font-bold text-scale-600",
          children: "FAQs",
        }),
        e.jsx("div", {
          className: "w-full flex flex-col gap-7.5",
          children: a.map((l) =>
            e.jsx(p, { question: l.question, answer: l.answer }, l.question),
          ),
        }),
      ],
    }),
  });
}
function v({ image: a, title: l, description: s }) {
  return e.jsxs("div", {
    className:
      "w-full flex items-center bg-bg-white rounded-xl p-5 gap-5 shadow-lg",
    children: [
      e.jsx("div", {
        className: "w-25 h-25 shrink-0",
        children: e.jsx("img", {
          src: a,
          className: "w-full h-full object-contain",
        }),
      }),
      e.jsxs("div", {
        className: "flex flex-col gap-2 flex-1 min-w-0",
        children: [
          e.jsx("div", {
            className: "text-xl text-scale-600 font-bold",
            children: l,
          }),
          e.jsx("div", {
            className: "text-base text-scale-400 flex-1 truncate",
            children: s,
          }),
        ],
      }),
    ],
  });
}
function N() {
  const a = r(),
    l = [
      {
        image: u,
        title: "상품 올리기",
        description: "상품의 사진을 찍어 올려요",
      },
      { image: x, title: "술잔 걸기", description: "시작가를 술잔으로 정해요" },
      { image: h, title: "등록 완료", description: "올리면 바로 경매 시작!" },
      { image: g, title: "낙찰 정산", description: "낙찰 시 술잔이 적립돼요" },
    ];
  return e.jsx("div", {
    className: "w-full px-50 pt-25",
    children: e.jsxs("div", {
      className: "max-w-[1160px] mx-auto flex flex-col gap-15",
      children: [
        e.jsxs("div", {
          className: "w-full flex justify-between items-center",
          children: [
            e.jsxs("div", {
              className: "flex flex-col gap-5",
              children: [
                e.jsx("div", {
                  className: "text-5xl font-bold text-scale-600",
                  children: "경매 등록하기",
                }),
                e.jsx("div", {
                  className: "text-2xl text-scale-400",
                  children: "당신의 애착템, 술잔으로 걸어보세요!",
                }),
              ],
            }),
            e.jsx(c, {
              variant: "primary",
              isRounded: !0,
              className: "w-62.5",
              onClick: () => a("/create"),
              children: "경매 등록하러 가기",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-col gap-10",
          children: [
            e.jsx("div", {
              className: "w-full text-center text-xl text-scale-400",
              children: "어떻게 등록할 수 있나요?",
            }),
            e.jsx("div", {
              className:
                "w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-scale-200",
              children: l.map((s) =>
                e.jsx(
                  v,
                  {
                    image: s.image,
                    title: s.title,
                    description: s.description,
                  },
                  s.title,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function b() {
  return e.jsx("div", {
    className: "w-full h-215 bg-cover bg-center",
    style: { backgroundImage: `url(${j})` },
    children: e.jsx("div", {
      className: "w-full h-full px-50 py-50",
      children: e.jsxs("div", {
        className:
          "max-w-[1160px] mx-auto flex flex-col gap-14 h-full justify-center",
        children: [
          e.jsxs("div", {
            className: "flex flex-col gap-5",
            children: [
              e.jsx("img", { src: f, className: "w-18 h-18" }),
              e.jsxs("div", {
                className: "text-6xl font-bold text-bg-white",
                children: ["멋쟁이", e.jsx("br", {}), "시장처럼"],
              }),
            ],
          }),
          e.jsx("div", {
            className: "text-3xl text-bg-white",
            children: "실시간으로 경매에 참여하고, 바로 낙찰하자!",
          }),
        ],
      }),
    }),
  });
}
const d = "/assets/yhfashion-BzeJL5Rt.png";
function y({
  image: a,
  title: l,
  description: s,
  auctionId: i,
  onCardClick: t,
}) {
  return e.jsxs("div", {
    className:
      "w-full flex flex-col items-start bg-bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200",
    onClick: () => t(i),
    children: [
      e.jsx("div", {
        className: "h-72 w-full flex justify-center overflow-hidden",
        children: e.jsx("img", {
          src: a,
          className: "h-full w-full object-cover rounded-t-xl",
          alt: l,
          onError: (o) => {
            o.currentTarget.src = d;
          },
        }),
      }),
      e.jsxs("div", {
        className: "flex flex-col gap-1.5 w-full px-6 py-5",
        children: [
          e.jsx("div", {
            className: "text-xl text-scale-600 font-bold",
            children: l,
          }),
          e.jsx("div", {
            className: "text-base text-scale-400 w-full truncate",
            children: s,
          }),
        ],
      }),
    ],
  });
}
function C() {
  const a = r(),
    [l, s] = n.useState([]);
  n.useEffect(() => {
    (async () => {
      try {
        const t = await m();
        Array.isArray(t)
          ? s(t)
          : (console.warn("getRecommendedAuctions returned non-array:", t),
            s([]));
      } catch (t) {
        (console.error("추천 경매 데이터 로딩 실패:", t), s([]));
      }
    })();
  }, []);
  const i = (t) => {
    a(`/auction/${t}`);
  };
  return e.jsx("div", {
    className: "w-full px-50 pt-25",
    children: e.jsxs("div", {
      className: "max-w-[1160px] mx-auto flex flex-col gap-15",
      children: [
        e.jsxs("div", {
          className: "w-full flex justify-between items-center",
          children: [
            e.jsxs("div", {
              className: "flex flex-col gap-5",
              children: [
                e.jsx("div", {
                  className: "text-5xl font-bold text-scale-600",
                  children: "오늘의 추천 경매",
                }),
                e.jsx("div", {
                  className: "text-2xl text-scale-400",
                  children: "멋사 구성원들의 애착템에 입찰해보세요!",
                }),
              ],
            }),
            e.jsx(c, {
              variant: "primary",
              isRounded: !0,
              className: "w-62.5",
              onClick: () => a("/auction"),
              children: "전체 경매 보러가기",
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "w-full grid grid-cols-2 gap-10 pb-25 border-b border-b-scale-200",
          children:
            Array.isArray(l) && l.length > 0
              ? l.map((t) =>
                  e.jsx(
                    y,
                    {
                      image: t.image_file_url || t.image_url || d,
                      title: t.title,
                      description: t.description,
                      auctionId: t.id,
                      onCardClick: i,
                    },
                    t.id,
                  ),
                )
              : e.jsx("div", {
                  className: "col-span-2 text-center py-20",
                  children: e.jsx("div", {
                    className: "text-xl text-scale-500",
                    children: "현재 추천할 경매가 없습니다.",
                  }),
                }),
        }),
      ],
    }),
  });
}
function Q() {
  return e.jsxs("div", {
    children: [e.jsx(b, {}), e.jsx(C, {}), e.jsx(N, {}), e.jsx(w, {})],
  });
}
export { Q as default };
