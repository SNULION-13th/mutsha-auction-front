const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/HomePage-BdiwCtxg.js",
      "assets/logo_white-B5195eUO.js",
      "assets/AuctionSearchPage-CPNBfNxA.js",
      "assets/AuctionRoomPage-DFNu8I5S.js",
      "assets/InfoModal-B29TKaYa.js",
      "assets/AuctionCreatePage-CiWdiBB3.js",
    ]),
) => i.map((i) => d[i]);
function fw(t, r) {
  for (var l = 0; l < r.length; l++) {
    const o = r[l];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in t)) {
          const c = Object.getOwnPropertyDescriptor(o, s);
          c &&
            Object.defineProperty(
              t,
              s,
              c.get ? c : { enumerable: !0, get: () => o[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = l(s);
    fetch(s.href, c);
  }
})();
function tv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Jf = { exports: {} },
  Yi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy;
function dw() {
  if (Sy) return Yi;
  Sy = 1;
  var t = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function l(o, s, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      s.key !== void 0 && (f = "" + s.key),
      "key" in s)
    ) {
      c = {};
      for (var h in s) h !== "key" && (c[h] = s[h]);
    } else c = s;
    return (
      (s = c.ref),
      { $$typeof: t, type: o, key: f, ref: s !== void 0 ? s : null, props: c }
    );
  }
  return ((Yi.Fragment = r), (Yi.jsx = l), (Yi.jsxs = l), Yi);
}
var wy;
function hw() {
  return (wy || ((wy = 1), (Jf.exports = dw())), Jf.exports);
}
var O = hw(),
  Wf = { exports: {} },
  Vi = {},
  ed = { exports: {} },
  td = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey;
function mw() {
  return (
    Ey ||
      ((Ey = 1),
      (function (t) {
        function r(N, $) {
          var k = N.length;
          N.push($);
          e: for (; 0 < k; ) {
            var ne = (k - 1) >>> 1,
              A = N[ne];
            if (0 < s(A, $)) ((N[ne] = $), (N[k] = A), (k = ne));
            else break e;
          }
        }
        function l(N) {
          return N.length === 0 ? null : N[0];
        }
        function o(N) {
          if (N.length === 0) return null;
          var $ = N[0],
            k = N.pop();
          if (k !== $) {
            N[0] = k;
            e: for (var ne = 0, A = N.length, Z = A >>> 1; ne < Z; ) {
              var re = 2 * (ne + 1) - 1,
                ee = N[re],
                ie = re + 1,
                Oe = N[ie];
              if (0 > s(ee, k))
                ie < A && 0 > s(Oe, ee)
                  ? ((N[ne] = Oe), (N[ie] = k), (ne = ie))
                  : ((N[ne] = ee), (N[re] = k), (ne = re));
              else if (ie < A && 0 > s(Oe, k))
                ((N[ne] = Oe), (N[ie] = k), (ne = ie));
              else break e;
            }
          }
          return $;
        }
        function s(N, $) {
          var k = N.sortIndex - $.sortIndex;
          return k !== 0 ? k : N.id - $.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          t.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            h = f.now();
          t.unstable_now = function () {
            return f.now() - h;
          };
        }
        var p = [],
          m = [],
          y = 1,
          v = null,
          w = 3,
          x = !1,
          E = !1,
          R = !1,
          C = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        function G(N) {
          for (var $ = l(m); $ !== null; ) {
            if ($.callback === null) o(m);
            else if ($.startTime <= N)
              (o(m), ($.sortIndex = $.expirationTime), r(p, $));
            else break;
            $ = l(m);
          }
        }
        function P(N) {
          if (((R = !1), G(N), !E))
            if (l(p) !== null) ((E = !0), _ || ((_ = !0), Ee()));
            else {
              var $ = l(m);
              $ !== null && be(P, $.startTime - N);
            }
        }
        var _ = !1,
          K = -1,
          V = 5,
          ae = -1;
        function oe() {
          return C ? !0 : !(t.unstable_now() - ae < V);
        }
        function we() {
          if (((C = !1), _)) {
            var N = t.unstable_now();
            ae = N;
            var $ = !0;
            try {
              e: {
                ((E = !1), R && ((R = !1), j(K), (K = -1)), (x = !0));
                var k = w;
                try {
                  t: {
                    for (
                      G(N), v = l(p);
                      v !== null && !(v.expirationTime > N && oe());

                    ) {
                      var ne = v.callback;
                      if (typeof ne == "function") {
                        ((v.callback = null), (w = v.priorityLevel));
                        var A = ne(v.expirationTime <= N);
                        if (((N = t.unstable_now()), typeof A == "function")) {
                          ((v.callback = A), G(N), ($ = !0));
                          break t;
                        }
                        (v === l(p) && o(p), G(N));
                      } else o(p);
                      v = l(p);
                    }
                    if (v !== null) $ = !0;
                    else {
                      var Z = l(m);
                      (Z !== null && be(P, Z.startTime - N), ($ = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (w = k), (x = !1));
                }
                $ = void 0;
              }
            } finally {
              $ ? Ee() : (_ = !1);
            }
          }
        }
        var Ee;
        if (typeof U == "function")
          Ee = function () {
            U(we);
          };
        else if (typeof MessageChannel < "u") {
          var ue = new MessageChannel(),
            se = ue.port2;
          ((ue.port1.onmessage = we),
            (Ee = function () {
              se.postMessage(null);
            }));
        } else
          Ee = function () {
            M(we, 0);
          };
        function be(N, $) {
          K = M(function () {
            N(t.unstable_now());
          }, $);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (t.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (V = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (t.unstable_next = function (N) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = w;
            }
            var k = w;
            w = $;
            try {
              return N();
            } finally {
              w = k;
            }
          }),
          (t.unstable_requestPaint = function () {
            C = !0;
          }),
          (t.unstable_runWithPriority = function (N, $) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var k = w;
            w = N;
            try {
              return $();
            } finally {
              w = k;
            }
          }),
          (t.unstable_scheduleCallback = function (N, $, k) {
            var ne = t.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? ne + k : ne))
                : (k = ne),
              N)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = k + A),
              (N = {
                id: y++,
                callback: $,
                priorityLevel: N,
                startTime: k,
                expirationTime: A,
                sortIndex: -1,
              }),
              k > ne
                ? ((N.sortIndex = k),
                  r(m, N),
                  l(p) === null &&
                    N === l(m) &&
                    (R ? (j(K), (K = -1)) : (R = !0), be(P, k - ne)))
                : ((N.sortIndex = A),
                  r(p, N),
                  E || x || ((E = !0), _ || ((_ = !0), Ee()))),
              N
            );
          }),
          (t.unstable_shouldYield = oe),
          (t.unstable_wrapCallback = function (N) {
            var $ = w;
            return function () {
              var k = w;
              w = $;
              try {
                return N.apply(this, arguments);
              } finally {
                w = k;
              }
            };
          }));
      })(td)),
    td
  );
}
var xy;
function pw() {
  return (xy || ((xy = 1), (ed.exports = mw())), ed.exports);
}
var nd = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ry;
function yw() {
  if (Ry) return Le;
  Ry = 1;
  var t = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function w(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (v && A[v]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    R = {};
  function C(A, Z, re) {
    ((this.props = A),
      (this.context = Z),
      (this.refs = R),
      (this.updater = re || x));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (A, Z) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, Z, "setState");
    }),
    (C.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function M() {}
  M.prototype = C.prototype;
  function j(A, Z, re) {
    ((this.props = A),
      (this.context = Z),
      (this.refs = R),
      (this.updater = re || x));
  }
  var U = (j.prototype = new M());
  ((U.constructor = j), E(U, C.prototype), (U.isPureReactComponent = !0));
  var G = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    _ = Object.prototype.hasOwnProperty;
  function K(A, Z, re, ee, ie, Oe) {
    return (
      (re = Oe.ref),
      {
        $$typeof: t,
        type: A,
        key: Z,
        ref: re !== void 0 ? re : null,
        props: Oe,
      }
    );
  }
  function V(A, Z) {
    return K(A.type, Z, void 0, void 0, void 0, A.props);
  }
  function ae(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t;
  }
  function oe(A) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (re) {
        return Z[re];
      })
    );
  }
  var we = /\/+/g;
  function Ee(A, Z) {
    return typeof A == "object" && A !== null && A.key != null
      ? oe("" + A.key)
      : Z.toString(36);
  }
  function ue() {}
  function se(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(ue, ue)
            : ((A.status = "pending"),
              A.then(
                function (Z) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = Z));
                },
                function (Z) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = Z));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function be(A, Z, re, ee, ie) {
    var Oe = typeof A;
    (Oe === "undefined" || Oe === "boolean") && (A = null);
    var me = !1;
    if (A === null) me = !0;
    else
      switch (Oe) {
        case "bigint":
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case t:
            case r:
              me = !0;
              break;
            case y:
              return ((me = A._init), be(me(A._payload), Z, re, ee, ie));
          }
      }
    if (me)
      return (
        (ie = ie(A)),
        (me = ee === "" ? "." + Ee(A, 0) : ee),
        G(ie)
          ? ((re = ""),
            me != null && (re = me.replace(we, "$&/") + "/"),
            be(ie, Z, re, "", function (Ct) {
              return Ct;
            }))
          : ie != null &&
            (ae(ie) &&
              (ie = V(
                ie,
                re +
                  (ie.key == null || (A && A.key === ie.key)
                    ? ""
                    : ("" + ie.key).replace(we, "$&/") + "/") +
                  me,
              )),
            Z.push(ie)),
        1
      );
    me = 0;
    var Re = ee === "" ? "." : ee + ":";
    if (G(A))
      for (var Fe = 0; Fe < A.length; Fe++)
        ((ee = A[Fe]), (Oe = Re + Ee(ee, Fe)), (me += be(ee, Z, re, Oe, ie)));
    else if (((Fe = w(A)), typeof Fe == "function"))
      for (A = Fe.call(A), Fe = 0; !(ee = A.next()).done; )
        ((ee = ee.value),
          (Oe = Re + Ee(ee, Fe++)),
          (me += be(ee, Z, re, Oe, ie)));
    else if (Oe === "object") {
      if (typeof A.then == "function") return be(se(A), Z, re, ee, ie);
      throw (
        (Z = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return me;
  }
  function N(A, Z, re) {
    if (A == null) return A;
    var ee = [],
      ie = 0;
    return (
      be(A, ee, "", "", function (Oe) {
        return Z.call(re, Oe, ie++);
      }),
      ee
    );
  }
  function $(A) {
    if (A._status === -1) {
      var Z = A._result;
      ((Z = Z()),
        Z.then(
          function (re) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = re));
          },
          function (re) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = re));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = Z)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(Z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function ne() {}
  return (
    (Le.Children = {
      map: N,
      forEach: function (A, Z, re) {
        N(
          A,
          function () {
            Z.apply(this, arguments);
          },
          re,
        );
      },
      count: function (A) {
        var Z = 0;
        return (
          N(A, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (A) {
        return (
          N(A, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (A) {
        if (!ae(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    }),
    (Le.Component = C),
    (Le.Fragment = l),
    (Le.Profiler = s),
    (Le.PureComponent = j),
    (Le.StrictMode = o),
    (Le.Suspense = p),
    (Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (Le.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return P.H.useMemoCache(A);
      },
    }),
    (Le.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (Le.cloneElement = function (A, Z, re) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var ee = E({}, A.props),
        ie = A.key,
        Oe = void 0;
      if (Z != null)
        for (me in (Z.ref !== void 0 && (Oe = void 0),
        Z.key !== void 0 && (ie = "" + Z.key),
        Z))
          !_.call(Z, me) ||
            me === "key" ||
            me === "__self" ||
            me === "__source" ||
            (me === "ref" && Z.ref === void 0) ||
            (ee[me] = Z[me]);
      var me = arguments.length - 2;
      if (me === 1) ee.children = re;
      else if (1 < me) {
        for (var Re = Array(me), Fe = 0; Fe < me; Fe++)
          Re[Fe] = arguments[Fe + 2];
        ee.children = Re;
      }
      return K(A.type, ie, void 0, void 0, Oe, ee);
    }),
    (Le.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: c, _context: A }),
        A
      );
    }),
    (Le.createElement = function (A, Z, re) {
      var ee,
        ie = {},
        Oe = null;
      if (Z != null)
        for (ee in (Z.key !== void 0 && (Oe = "" + Z.key), Z))
          _.call(Z, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (ie[ee] = Z[ee]);
      var me = arguments.length - 2;
      if (me === 1) ie.children = re;
      else if (1 < me) {
        for (var Re = Array(me), Fe = 0; Fe < me; Fe++)
          Re[Fe] = arguments[Fe + 2];
        ie.children = Re;
      }
      if (A && A.defaultProps)
        for (ee in ((me = A.defaultProps), me))
          ie[ee] === void 0 && (ie[ee] = me[ee]);
      return K(A, Oe, void 0, void 0, null, ie);
    }),
    (Le.createRef = function () {
      return { current: null };
    }),
    (Le.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (Le.isValidElement = ae),
    (Le.lazy = function (A) {
      return { $$typeof: y, _payload: { _status: -1, _result: A }, _init: $ };
    }),
    (Le.memo = function (A, Z) {
      return { $$typeof: m, type: A, compare: Z === void 0 ? null : Z };
    }),
    (Le.startTransition = function (A) {
      var Z = P.T,
        re = {};
      P.T = re;
      try {
        var ee = A(),
          ie = P.S;
        (ie !== null && ie(re, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(ne, k));
      } catch (Oe) {
        k(Oe);
      } finally {
        P.T = Z;
      }
    }),
    (Le.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (Le.use = function (A) {
      return P.H.use(A);
    }),
    (Le.useActionState = function (A, Z, re) {
      return P.H.useActionState(A, Z, re);
    }),
    (Le.useCallback = function (A, Z) {
      return P.H.useCallback(A, Z);
    }),
    (Le.useContext = function (A) {
      return P.H.useContext(A);
    }),
    (Le.useDebugValue = function () {}),
    (Le.useDeferredValue = function (A, Z) {
      return P.H.useDeferredValue(A, Z);
    }),
    (Le.useEffect = function (A, Z, re) {
      var ee = P.H;
      if (typeof re == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return ee.useEffect(A, Z);
    }),
    (Le.useId = function () {
      return P.H.useId();
    }),
    (Le.useImperativeHandle = function (A, Z, re) {
      return P.H.useImperativeHandle(A, Z, re);
    }),
    (Le.useInsertionEffect = function (A, Z) {
      return P.H.useInsertionEffect(A, Z);
    }),
    (Le.useLayoutEffect = function (A, Z) {
      return P.H.useLayoutEffect(A, Z);
    }),
    (Le.useMemo = function (A, Z) {
      return P.H.useMemo(A, Z);
    }),
    (Le.useOptimistic = function (A, Z) {
      return P.H.useOptimistic(A, Z);
    }),
    (Le.useReducer = function (A, Z, re) {
      return P.H.useReducer(A, Z, re);
    }),
    (Le.useRef = function (A) {
      return P.H.useRef(A);
    }),
    (Le.useState = function (A) {
      return P.H.useState(A);
    }),
    (Le.useSyncExternalStore = function (A, Z, re) {
      return P.H.useSyncExternalStore(A, Z, re);
    }),
    (Le.useTransition = function () {
      return P.H.useTransition();
    }),
    (Le.version = "19.1.1"),
    Le
  );
}
var Cy;
function $d() {
  return (Cy || ((Cy = 1), (nd.exports = yw())), nd.exports);
}
var rd = { exports: {} },
  Ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ay;
function gw() {
  if (Ay) return Ut;
  Ay = 1;
  var t = $d();
  function r(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var o = {
      d: {
        f: l,
        r: function () {
          throw Error(r(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function c(p, m, y) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: m,
      implementation: y,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Ut.createPortal = function (p, m) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return c(p, m, null, y);
    }),
    (Ut.flushSync = function (p) {
      var m = f.T,
        y = o.p;
      try {
        if (((f.T = null), (o.p = 2), p)) return p();
      } finally {
        ((f.T = m), (o.p = y), o.d.f());
      }
    }),
    (Ut.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        o.d.C(p, m));
    }),
    (Ut.prefetchDNS = function (p) {
      typeof p == "string" && o.d.D(p);
    }),
    (Ut.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var y = m.as,
          v = h(y, m.crossOrigin),
          w = typeof m.integrity == "string" ? m.integrity : void 0,
          x = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: w,
              fetchPriority: x,
            })
          : y === "script" &&
            o.d.X(p, {
              crossOrigin: v,
              integrity: w,
              fetchPriority: x,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Ut.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = h(m.as, m.crossOrigin);
            o.d.M(p, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && o.d.M(p);
    }),
    (Ut.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var y = m.as,
          v = h(y, m.crossOrigin);
        o.d.L(p, y, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Ut.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var y = h(m.as, m.crossOrigin);
          o.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else o.d.m(p);
    }),
    (Ut.requestFormReset = function (p) {
      o.d.r(p);
    }),
    (Ut.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Ut.useFormState = function (p, m, y) {
      return f.H.useFormState(p, m, y);
    }),
    (Ut.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Ut.version = "19.1.1"),
    Ut
  );
}
var Oy;
function nv() {
  if (Oy) return rd.exports;
  Oy = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return (t(), (rd.exports = gw()), rd.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty;
function vw() {
  if (Ty) return Vi;
  Ty = 1;
  var t = pw(),
    r = $d(),
    l = nv();
  function o(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var n = e,
      a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (a = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (c(e) !== e) throw Error(o(188));
  }
  function p(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = c(e)), n === null)) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var a = e, i = n; ; ) {
      var u = a.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((i = u.return), i !== null)) {
          a = i;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === a) return (h(u), e);
          if (d === i) return (h(u), n);
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== i.return) ((a = u), (i = d));
      else {
        for (var g = !1, S = u.child; S; ) {
          if (S === a) {
            ((g = !0), (a = u), (i = d));
            break;
          }
          if (S === i) {
            ((g = !0), (i = u), (a = d));
            break;
          }
          S = S.sibling;
        }
        if (!g) {
          for (S = d.child; S; ) {
            if (S === a) {
              ((g = !0), (a = d), (i = u));
              break;
            }
            if (S === i) {
              ((g = !0), (i = d), (a = u));
              break;
            }
            S = S.sibling;
          }
          if (!g) throw Error(o(189));
        }
      }
      if (a.alternate !== i) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : n;
  }
  function m(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = m(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    v = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    R = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    j = Symbol.for("react.consumer"),
    U = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    V = Symbol.for("react.lazy"),
    ae = Symbol.for("react.activity"),
    oe = Symbol.for("react.memo_cache_sentinel"),
    we = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (we && e[we]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ue = Symbol.for("react.client.reference");
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case E:
        return "Fragment";
      case C:
        return "Profiler";
      case R:
        return "StrictMode";
      case P:
        return "Suspense";
      case _:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case U:
          return (e.displayName || "Context") + ".Provider";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case K:
          return (
            (n = e.displayName || null),
            n !== null ? n : se(e.type) || "Memo"
          );
        case V:
          ((n = e._payload), (e = e._init));
          try {
            return se(e(n));
          } catch {}
      }
    return null;
  }
  var be = Array.isArray,
    N = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    ne = [],
    A = -1;
  function Z(e) {
    return { current: e };
  }
  function re(e) {
    0 > A || ((e.current = ne[A]), (ne[A] = null), A--);
  }
  function ee(e, n) {
    (A++, (ne[A] = e.current), (e.current = n));
  }
  var ie = Z(null),
    Oe = Z(null),
    me = Z(null),
    Re = Z(null);
  function Fe(e, n) {
    switch ((ee(me, n), ee(Oe, e), ee(ie, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? X0(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          ((n = X0(n)), (e = Z0(n, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (re(ie), ee(ie, e));
  }
  function Ct() {
    (re(ie), re(Oe), re(me));
  }
  function We(e) {
    e.memoizedState !== null && ee(Re, e);
    var n = ie.current,
      a = Z0(n, e.type);
    n !== a && (ee(Oe, e), ee(ie, a));
  }
  function At(e) {
    (Oe.current === e && (re(ie), re(Oe)),
      Re.current === e && (re(Re), (Bi._currentValue = k)));
  }
  var Zt = Object.prototype.hasOwnProperty,
    Un = t.unstable_scheduleCallback,
    Rn = t.unstable_cancelCallback,
    Yu = t.unstable_shouldYield,
    Vu = t.unstable_requestPaint,
    It = t.unstable_now,
    Qu = t.unstable_getCurrentPriorityLevel,
    So = t.unstable_ImmediatePriority,
    wo = t.unstable_UserBlockingPriority,
    Ya = t.unstable_NormalPriority,
    er = t.unstable_LowPriority,
    Rr = t.unstable_IdlePriority,
    Eo = t.log,
    Zl = t.unstable_setDisableYieldValue,
    kt = null,
    at = null;
  function Cn(e) {
    if (
      (typeof Eo == "function" && Zl(e),
      at && typeof at.setStrictMode == "function")
    )
      try {
        at.setStrictMode(kt, e);
      } catch {}
  }
  var Ot = Math.clz32 ? Math.clz32 : xo,
    Ku = Math.log,
    zn = Math.LN2;
  function xo(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ku(e) / zn) | 0)) | 0);
  }
  var sa = 256,
    ua = 4194304;
  function tr(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ca(e, n, a) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var u = 0,
      d = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var S = i & 134217727;
    return (
      S !== 0
        ? ((i = S & ~d),
          i !== 0
            ? (u = tr(i))
            : ((g &= S),
              g !== 0
                ? (u = tr(g))
                : a || ((a = S & ~e), a !== 0 && (u = tr(a)))))
        : ((S = i & ~d),
          S !== 0
            ? (u = tr(S))
            : g !== 0
              ? (u = tr(g))
              : a || ((a = i & ~e), a !== 0 && (u = tr(a)))),
      u === 0
        ? 0
        : n !== 0 &&
            n !== u &&
            (n & d) === 0 &&
            ((d = u & -u),
            (a = n & -n),
            d >= a || (d === 32 && (a & 4194048) !== 0))
          ? n
          : u
    );
  }
  function jn(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Ro(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Va() {
    var e = sa;
    return ((sa <<= 1), (sa & 4194048) === 0 && (sa = 256), e);
  }
  function Co() {
    var e = ua;
    return ((ua <<= 1), (ua & 62914560) === 0 && (ua = 4194304), e);
  }
  function Qa(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function fa(e, n) {
    ((e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ao(e, n, a, i, u, d) {
    var g = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var S = e.entanglements,
      T = e.expirationTimes,
      q = e.hiddenUpdates;
    for (a = g & ~a; 0 < a; ) {
      var I = 31 - Ot(a),
        W = 1 << I;
      ((S[I] = 0), (T[I] = -1));
      var F = q[I];
      if (F !== null)
        for (q[I] = null, I = 0; I < F.length; I++) {
          var Y = F[I];
          Y !== null && (Y.lane &= -536870913);
        }
      a &= ~W;
    }
    (i !== 0 && da(e, i, 0),
      d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(g & ~n)));
  }
  function da(e, n, a) {
    ((e.pendingLanes |= n), (e.suspendedLanes &= ~n));
    var i = 31 - Ot(n);
    ((e.entangledLanes |= n),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (a & 4194090)));
  }
  function ha(e, n) {
    var a = (e.entangledLanes |= n);
    for (e = e.entanglements; a; ) {
      var i = 31 - Ot(a),
        u = 1 << i;
      ((u & n) | (e[i] & n) && (e[i] |= n), (a &= ~u));
    }
  }
  function Il(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function $l(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function D() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : my(e.type));
  }
  function H(e, n) {
    var a = $.p;
    try {
      return (($.p = e), n());
    } finally {
      $.p = a;
    }
  }
  var Q = Math.random().toString(36).slice(2),
    te = "__reactFiber$" + Q,
    le = "__reactProps$" + Q,
    he = "__reactContainer$" + Q,
    ve = "__reactEvents$" + Q,
    pe = "__reactListeners$" + Q,
    xe = "__reactHandles$" + Q,
    Ce = "__reactResources$" + Q,
    ye = "__reactMarker$" + Q;
  function ge(e) {
    (delete e[te], delete e[le], delete e[ve], delete e[pe], delete e[xe]);
  }
  function Ue(e) {
    var n = e[te];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if ((n = a[he] || a[te])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (e = W0(e); e !== null; ) {
            if ((a = e[te])) return a;
            e = W0(e);
          }
        return n;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Ve(e) {
    if ((e = e[te] || e[he])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function nt(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ot(e) {
    var n = e[Ce];
    return (
      n ||
        (n = e[Ce] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function De(e) {
    e[ye] = !0;
  }
  var Ze = new Set(),
    Pn = {};
  function $t(e, n) {
    (jt(e, n), jt(e + "Capture", n));
  }
  function jt(e, n) {
    for (Pn[e] = n, e = 0; e < n.length; e++) Ze.add(n[e]);
  }
  var un = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ka = {},
    Cr = {};
  function nr(e) {
    return Zt.call(Cr, e)
      ? !0
      : Zt.call(Ka, e)
        ? !1
        : un.test(e)
          ? (Cr[e] = !0)
          : ((Ka[e] = !0), !1);
  }
  function rr(e, n, a) {
    if (nr(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function ar(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function _e(e, n, a, i) {
    if (i === null) e.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + i);
    }
  }
  var mt, lr;
  function qt(e) {
    if (mt === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        ((mt = (n && n[1]) || ""),
          (lr =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      mt +
      e +
      lr
    );
  }
  var lt = !1;
  function Ar(e, n) {
    if (!e || lt) return "";
    lt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var W = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(W.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(W, []);
                } catch (Y) {
                  var F = Y;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (Y) {
                  F = Y;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                F = Y;
              }
              (W = e()) &&
                typeof W.catch == "function" &&
                W.catch(function () {});
            }
          } catch (Y) {
            if (Y && F && typeof Y.stack == "string") return [Y.stack, F.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = i.DetermineComponentFrameRoot(),
        g = d[0],
        S = d[1];
      if (g && S) {
        var T = g.split(`
`),
          q = S.split(`
`);
        for (
          u = i = 0;
          i < T.length && !T[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; u < q.length && !q[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (i === T.length || u === q.length)
          for (
            i = T.length - 1, u = q.length - 1;
            1 <= i && 0 <= u && T[i] !== q[u];

          )
            u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (T[i] !== q[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || T[i] !== q[u])) {
                  var I =
                    `
` + T[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      I.includes("<anonymous>") &&
                      (I = I.replace("<anonymous>", e.displayName)),
                    I
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((lt = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? qt(a) : "";
  }
  function Oo(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return qt(e.type);
      case 16:
        return qt("Lazy");
      case 13:
        return qt("Suspense");
      case 19:
        return qt("SuspenseList");
      case 0:
      case 15:
        return Ar(e.type, !1);
      case 11:
        return Ar(e.type.render, !1);
      case 1:
        return Ar(e.type, !0);
      case 31:
        return qt("Activity");
      default:
        return "";
    }
  }
  function To(e) {
    try {
      var n = "";
      do ((n += Oo(e)), (e = e.return));
      while (e);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function cn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Gh(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function i2(e) {
    var n = Gh(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      i = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        d = a.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            ((i = "" + g), d.call(this, g));
          },
        }),
        Object.defineProperty(e, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (g) {
            i = "" + g;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function Mo(e) {
    e._valueTracker || (e._valueTracker = i2(e));
  }
  function Yh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      i = "";
    return (
      e && (i = Gh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== a ? (n.setValue(e), !0) : !1
    );
  }
  function Do(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var o2 = /[\n"\\]/g;
  function fn(e) {
    return e.replace(o2, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Xu(e, n, a, i, u, d, g, S) {
    ((e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      n != null
        ? g === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + cn(n))
          : e.value !== "" + cn(n) && (e.value = "" + cn(n))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      n != null
        ? Zu(e, g, cn(n))
        : a != null
          ? Zu(e, g, cn(a))
          : i != null && e.removeAttribute("value"),
      u == null && d != null && (e.defaultChecked = !!d),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (e.name = "" + cn(S))
        : e.removeAttribute("name"));
  }
  function Vh(e, n, a, i, u, d, g, S) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      n != null || a != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || n != null)) return;
      ((a = a != null ? "" + cn(a) : ""),
        (n = n != null ? "" + cn(n) : a),
        S || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((i = i ?? u),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = S ? e.checked : !!i),
      (e.defaultChecked = !!i),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g));
  }
  function Zu(e, n, a) {
    (n === "number" && Do(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Xa(e, n, a, i) {
    if (((e = e.options), n)) {
      n = {};
      for (var u = 0; u < a.length; u++) n["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        ((u = n.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && i && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + cn(a), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          ((e[u].selected = !0), i && (e[u].defaultSelected = !0));
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Qh(e, n, a) {
    if (
      n != null &&
      ((n = "" + cn(n)), n !== e.value && (e.value = n), a == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + cn(a) : "";
  }
  function Kh(e, n, a, i) {
    if (n == null) {
      if (i != null) {
        if (a != null) throw Error(o(92));
        if (be(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        a = i;
      }
      (a == null && (a = ""), (n = a));
    }
    ((a = cn(n)),
      (e.defaultValue = a),
      (i = e.textContent),
      i === a && i !== "" && i !== null && (e.value = i));
  }
  function Za(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var s2 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Xh(e, n, a) {
    var i = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? i
        ? e.setProperty(n, "")
        : n === "float"
          ? (e.cssFloat = "")
          : (e[n] = "")
      : i
        ? e.setProperty(n, a)
        : typeof a != "number" || a === 0 || s2.has(n)
          ? n === "float"
            ? (e.cssFloat = a)
            : (e[n] = ("" + a).trim())
          : (e[n] = a + "px");
  }
  function Zh(e, n, a) {
    if (n != null && typeof n != "object") throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var i in a)
        !a.hasOwnProperty(i) ||
          (n != null && n.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
              ? (e.cssFloat = "")
              : (e[i] = ""));
      for (var u in n)
        ((i = n[u]), n.hasOwnProperty(u) && a[u] !== i && Xh(e, u, i));
    } else for (var d in n) n.hasOwnProperty(d) && Xh(e, d, n[d]);
  }
  function Iu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var u2 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    c2 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _o(e) {
    return c2.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var $u = null;
  function Ju(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ia = null,
    $a = null;
  function Ih(e) {
    var n = Ve(e);
    if (n && (e = n.stateNode)) {
      var a = e[le] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (Xu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + fn("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var i = a[n];
              if (i !== e && i.form === e.form) {
                var u = i[le] || null;
                if (!u) throw Error(o(90));
                Xu(
                  i,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (n = 0; n < a.length; n++)
              ((i = a[n]), i.form === e.form && Yh(i));
          }
          break e;
        case "textarea":
          Qh(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((n = a.value), n != null && Xa(e, !!a.multiple, n, !1));
      }
    }
  }
  var Wu = !1;
  function $h(e, n, a) {
    if (Wu) return e(n, a);
    Wu = !0;
    try {
      var i = e(n);
      return i;
    } finally {
      if (
        ((Wu = !1),
        (Ia !== null || $a !== null) &&
          (ys(), Ia && ((n = Ia), (e = $a), ($a = Ia = null), Ih(n), e)))
      )
        for (n = 0; n < e.length; n++) Ih(e[n]);
    }
  }
  function Jl(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var i = a[le] || null;
    if (i === null) return null;
    a = i[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, n, typeof a));
    return a;
  }
  var ir = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ec = !1;
  if (ir)
    try {
      var Wl = {};
      (Object.defineProperty(Wl, "passive", {
        get: function () {
          ec = !0;
        },
      }),
        window.addEventListener("test", Wl, Wl),
        window.removeEventListener("test", Wl, Wl));
    } catch {
      ec = !1;
    }
  var Or = null,
    tc = null,
    No = null;
  function Jh() {
    if (No) return No;
    var e,
      n = tc,
      a = n.length,
      i,
      u = "value" in Or ? Or.value : Or.textContent,
      d = u.length;
    for (e = 0; e < a && n[e] === u[e]; e++);
    var g = a - e;
    for (i = 1; i <= g && n[a - i] === u[d - i]; i++);
    return (No = u.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Lo(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Uo() {
    return !0;
  }
  function Wh() {
    return !1;
  }
  function Ft(e) {
    function n(a, i, u, d, g) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = i),
        (this.nativeEvent = d),
        (this.target = g),
        (this.currentTarget = null));
      for (var S in e)
        e.hasOwnProperty(S) && ((a = e[S]), (this[S] = a ? a(d) : d[S]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Uo
          : Wh),
        (this.isPropagationStopped = Wh),
        this
      );
    }
    return (
      y(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Uo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Uo));
        },
        persist: function () {},
        isPersistent: Uo,
      }),
      n
    );
  }
  var ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zo = Ft(ma),
    ei = y({}, ma, { view: 0, detail: 0 }),
    f2 = Ft(ei),
    nc,
    rc,
    ti,
    jo = y({}, ei, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ti &&
              (ti && e.type === "mousemove"
                ? ((nc = e.screenX - ti.screenX), (rc = e.screenY - ti.screenY))
                : (rc = nc = 0),
              (ti = e)),
            nc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : rc;
      },
    }),
    em = Ft(jo),
    d2 = y({}, jo, { dataTransfer: 0 }),
    h2 = Ft(d2),
    m2 = y({}, ei, { relatedTarget: 0 }),
    ac = Ft(m2),
    p2 = y({}, ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y2 = Ft(p2),
    g2 = y({}, ma, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    v2 = Ft(g2),
    b2 = y({}, ma, { data: 0 }),
    tm = Ft(b2),
    S2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    w2 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    E2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function x2(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = E2[e])
        ? !!n[e]
        : !1;
  }
  function lc() {
    return x2;
  }
  var R2 = y({}, ei, {
      key: function (e) {
        if (e.key) {
          var n = S2[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? w2[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lc,
      charCode: function (e) {
        return e.type === "keypress" ? Lo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Lo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    C2 = Ft(R2),
    A2 = y({}, jo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    nm = Ft(A2),
    O2 = y({}, ei, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lc,
    }),
    T2 = Ft(O2),
    M2 = y({}, ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    D2 = Ft(M2),
    _2 = y({}, jo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    N2 = Ft(_2),
    L2 = y({}, ma, { newState: 0, oldState: 0 }),
    U2 = Ft(L2),
    z2 = [9, 13, 27, 32],
    ic = ir && "CompositionEvent" in window,
    ni = null;
  ir && "documentMode" in document && (ni = document.documentMode);
  var j2 = ir && "TextEvent" in window && !ni,
    rm = ir && (!ic || (ni && 8 < ni && 11 >= ni)),
    am = " ",
    lm = !1;
  function im(e, n) {
    switch (e) {
      case "keyup":
        return z2.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function om(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ja = !1;
  function P2(e, n) {
    switch (e) {
      case "compositionend":
        return om(n);
      case "keypress":
        return n.which !== 32 ? null : ((lm = !0), am);
      case "textInput":
        return ((e = n.data), e === am && lm ? null : e);
      default:
        return null;
    }
  }
  function H2(e, n) {
    if (Ja)
      return e === "compositionend" || (!ic && im(e, n))
        ? ((e = Jh()), (No = tc = Or = null), (Ja = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return rm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var B2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sm(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!B2[e.type] : n === "textarea";
  }
  function um(e, n, a, i) {
    (Ia ? ($a ? $a.push(i) : ($a = [i])) : (Ia = i),
      (n = Es(n, "onChange")),
      0 < n.length &&
        ((a = new zo("onChange", "change", null, a, i)),
        e.push({ event: a, listeners: n })));
  }
  var ri = null,
    ai = null;
  function k2(e) {
    G0(e, 0);
  }
  function Po(e) {
    var n = nt(e);
    if (Yh(n)) return e;
  }
  function cm(e, n) {
    if (e === "change") return n;
  }
  var fm = !1;
  if (ir) {
    var oc;
    if (ir) {
      var sc = "oninput" in document;
      if (!sc) {
        var dm = document.createElement("div");
        (dm.setAttribute("oninput", "return;"),
          (sc = typeof dm.oninput == "function"));
      }
      oc = sc;
    } else oc = !1;
    fm = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function hm() {
    ri && (ri.detachEvent("onpropertychange", mm), (ai = ri = null));
  }
  function mm(e) {
    if (e.propertyName === "value" && Po(ai)) {
      var n = [];
      (um(n, ai, e, Ju(e)), $h(k2, n));
    }
  }
  function q2(e, n, a) {
    e === "focusin"
      ? (hm(), (ri = n), (ai = a), ri.attachEvent("onpropertychange", mm))
      : e === "focusout" && hm();
  }
  function F2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Po(ai);
  }
  function G2(e, n) {
    if (e === "click") return Po(n);
  }
  function Y2(e, n) {
    if (e === "input" || e === "change") return Po(n);
  }
  function V2(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Jt = typeof Object.is == "function" ? Object.is : V2;
  function li(e, n) {
    if (Jt(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(e),
      i = Object.keys(n);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var u = a[i];
      if (!Zt.call(n, u) || !Jt(e[u], n[u])) return !1;
    }
    return !0;
  }
  function pm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ym(e, n) {
    var a = pm(e);
    e = 0;
    for (var i; a; ) {
      if (a.nodeType === 3) {
        if (((i = e + a.textContent.length), e <= n && i >= n))
          return { node: a, offset: n - e };
        e = i;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = pm(a);
    }
  }
  function gm(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? gm(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function vm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = Do(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = Do(e.document);
    }
    return n;
  }
  function uc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Q2 = ir && "documentMode" in document && 11 >= document.documentMode,
    Wa = null,
    cc = null,
    ii = null,
    fc = !1;
  function bm(e, n, a) {
    var i =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fc ||
      Wa == null ||
      Wa !== Do(i) ||
      ((i = Wa),
      "selectionStart" in i && uc(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (ii && li(ii, i)) ||
        ((ii = i),
        (i = Es(cc, "onSelect")),
        0 < i.length &&
          ((n = new zo("onSelect", "select", null, n, a)),
          e.push({ event: n, listeners: i }),
          (n.target = Wa))));
  }
  function pa(e, n) {
    var a = {};
    return (
      (a[e.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + e] = "webkit" + n),
      (a["Moz" + e] = "moz" + n),
      a
    );
  }
  var el = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    dc = {},
    Sm = {};
  ir &&
    ((Sm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete el.animationend.animation,
      delete el.animationiteration.animation,
      delete el.animationstart.animation),
    "TransitionEvent" in window || delete el.transitionend.transition);
  function ya(e) {
    if (dc[e]) return dc[e];
    if (!el[e]) return e;
    var n = el[e],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Sm) return (dc[e] = n[a]);
    return e;
  }
  var wm = ya("animationend"),
    Em = ya("animationiteration"),
    xm = ya("animationstart"),
    K2 = ya("transitionrun"),
    X2 = ya("transitionstart"),
    Z2 = ya("transitioncancel"),
    Rm = ya("transitionend"),
    Cm = new Map(),
    hc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  hc.push("scrollEnd");
  function An(e, n) {
    (Cm.set(e, n), $t(n, [e]));
  }
  var Am = new WeakMap();
  function dn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = Am.get(e);
      return a !== void 0
        ? a
        : ((n = { value: e, source: n, stack: To(n) }), Am.set(e, n), n);
    }
    return { value: e, source: n, stack: To(n) };
  }
  var hn = [],
    tl = 0,
    mc = 0;
  function Ho() {
    for (var e = tl, n = (mc = tl = 0); n < e; ) {
      var a = hn[n];
      hn[n++] = null;
      var i = hn[n];
      hn[n++] = null;
      var u = hn[n];
      hn[n++] = null;
      var d = hn[n];
      if (((hn[n++] = null), i !== null && u !== null)) {
        var g = i.pending;
        (g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)),
          (i.pending = u));
      }
      d !== 0 && Om(a, u, d);
    }
  }
  function Bo(e, n, a, i) {
    ((hn[tl++] = e),
      (hn[tl++] = n),
      (hn[tl++] = a),
      (hn[tl++] = i),
      (mc |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i));
  }
  function pc(e, n, a, i) {
    return (Bo(e, n, a, i), ko(e));
  }
  function nl(e, n) {
    return (Bo(e, null, null, n), ko(e));
  }
  function Om(e, n, a) {
    e.lanes |= a;
    var i = e.alternate;
    i !== null && (i.lanes |= a);
    for (var u = !1, d = e.return; d !== null; )
      ((d.childLanes |= a),
        (i = d.alternate),
        i !== null && (i.childLanes |= a),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = d),
        (d = d.return));
    return e.tag === 3
      ? ((d = e.stateNode),
        u &&
          n !== null &&
          ((u = 31 - Ot(a)),
          (e = d.hiddenUpdates),
          (i = e[u]),
          i === null ? (e[u] = [n]) : i.push(n),
          (n.lane = a | 536870912)),
        d)
      : null;
  }
  function ko(e) {
    if (50 < _i) throw ((_i = 0), (Ef = null), Error(o(185)));
    for (var n = e.return; n !== null; ) ((e = n), (n = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var rl = {};
  function I2(e, n, a, i) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Wt(e, n, a, i) {
    return new I2(e, n, a, i);
  }
  function yc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function or(e, n) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Wt(e.tag, n, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = n),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Tm(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (n = a.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function qo(e, n, a, i, u, d) {
    var g = 0;
    if (((i = e), typeof e == "function")) yc(e) && (g = 1);
    else if (typeof e == "string")
      g = JS(e, a, ie.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ae:
          return (
            (e = Wt(31, a, n, u)),
            (e.elementType = ae),
            (e.lanes = d),
            e
          );
        case E:
          return ga(a.children, u, d, n);
        case R:
          ((g = 8), (u |= 24));
          break;
        case C:
          return (
            (e = Wt(12, a, n, u | 2)),
            (e.elementType = C),
            (e.lanes = d),
            e
          );
        case P:
          return ((e = Wt(13, a, n, u)), (e.elementType = P), (e.lanes = d), e);
        case _:
          return ((e = Wt(19, a, n, u)), (e.elementType = _), (e.lanes = d), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
              case U:
                g = 10;
                break e;
              case j:
                g = 9;
                break e;
              case G:
                g = 11;
                break e;
              case K:
                g = 14;
                break e;
              case V:
                ((g = 16), (i = null));
                break e;
            }
          ((g = 29),
            (a = Error(o(130, e === null ? "null" : typeof e, ""))),
            (i = null));
      }
    return (
      (n = Wt(g, a, n, u)),
      (n.elementType = e),
      (n.type = i),
      (n.lanes = d),
      n
    );
  }
  function ga(e, n, a, i) {
    return ((e = Wt(7, e, i, n)), (e.lanes = a), e);
  }
  function gc(e, n, a) {
    return ((e = Wt(6, e, null, n)), (e.lanes = a), e);
  }
  function vc(e, n, a) {
    return (
      (n = Wt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var al = [],
    ll = 0,
    Fo = null,
    Go = 0,
    mn = [],
    pn = 0,
    va = null,
    sr = 1,
    ur = "";
  function ba(e, n) {
    ((al[ll++] = Go), (al[ll++] = Fo), (Fo = e), (Go = n));
  }
  function Mm(e, n, a) {
    ((mn[pn++] = sr), (mn[pn++] = ur), (mn[pn++] = va), (va = e));
    var i = sr;
    e = ur;
    var u = 32 - Ot(i) - 1;
    ((i &= ~(1 << u)), (a += 1));
    var d = 32 - Ot(n) + u;
    if (30 < d) {
      var g = u - (u % 5);
      ((d = (i & ((1 << g) - 1)).toString(32)),
        (i >>= g),
        (u -= g),
        (sr = (1 << (32 - Ot(n) + u)) | (a << u) | i),
        (ur = d + e));
    } else ((sr = (1 << d) | (a << u) | i), (ur = e));
  }
  function bc(e) {
    e.return !== null && (ba(e, 1), Mm(e, 1, 0));
  }
  function Sc(e) {
    for (; e === Fo; )
      ((Fo = al[--ll]), (al[ll] = null), (Go = al[--ll]), (al[ll] = null));
    for (; e === va; )
      ((va = mn[--pn]),
        (mn[pn] = null),
        (ur = mn[--pn]),
        (mn[pn] = null),
        (sr = mn[--pn]),
        (mn[pn] = null));
  }
  var Pt = null,
    st = null,
    Qe = !1,
    Sa = null,
    Hn = !1,
    wc = Error(o(519));
  function wa(e) {
    var n = Error(o(418, ""));
    throw (ui(dn(n, e)), wc);
  }
  function Dm(e) {
    var n = e.stateNode,
      a = e.type,
      i = e.memoizedProps;
    switch (((n[te] = e), (n[le] = i), a)) {
      case "dialog":
        (ke("cancel", n), ke("close", n));
        break;
      case "iframe":
      case "object":
      case "embed":
        ke("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Li.length; a++) ke(Li[a], n);
        break;
      case "source":
        ke("error", n);
        break;
      case "img":
      case "image":
      case "link":
        (ke("error", n), ke("load", n));
        break;
      case "details":
        ke("toggle", n);
        break;
      case "input":
        (ke("invalid", n),
          Vh(
            n,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ),
          Mo(n));
        break;
      case "select":
        ke("invalid", n);
        break;
      case "textarea":
        (ke("invalid", n), Kh(n, i.value, i.defaultValue, i.children), Mo(n));
    }
    ((a = i.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      i.suppressHydrationWarning === !0 ||
      K0(n.textContent, a)
        ? (i.popover != null && (ke("beforetoggle", n), ke("toggle", n)),
          i.onScroll != null && ke("scroll", n),
          i.onScrollEnd != null && ke("scrollend", n),
          i.onClick != null && (n.onclick = xs),
          (n = !0))
        : (n = !1),
      n || wa(e));
  }
  function _m(e) {
    for (Pt = e.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 13:
          Hn = !1;
          return;
        case 27:
        case 3:
          Hn = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function oi(e) {
    if (e !== Pt) return !1;
    if (!Qe) return (_m(e), (Qe = !0), !1);
    var n = e.tag,
      a;
    if (
      ((a = n !== 3 && n !== 27) &&
        ((a = n === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Hf(e.type, e.memoizedProps))),
        (a = !a)),
      a && st && wa(e),
      _m(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (n === 0) {
                st = Tn(e.nextSibling);
                break e;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          e = e.nextSibling;
        }
        st = null;
      }
    } else
      n === 27
        ? ((n = st), Gr(e.type) ? ((e = Ff), (Ff = null), (st = e)) : (st = n))
        : (st = Pt ? Tn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function si() {
    ((st = Pt = null), (Qe = !1));
  }
  function Nm() {
    var e = Sa;
    return (
      e !== null &&
        (Vt === null ? (Vt = e) : Vt.push.apply(Vt, e), (Sa = null)),
      e
    );
  }
  function ui(e) {
    Sa === null ? (Sa = [e]) : Sa.push(e);
  }
  var Ec = Z(null),
    Ea = null,
    cr = null;
  function Tr(e, n, a) {
    (ee(Ec, n._currentValue), (n._currentValue = a));
  }
  function fr(e) {
    ((e._currentValue = Ec.current), re(Ec));
  }
  function xc(e, n, a) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), i !== null && (i.childLanes |= n))
          : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Rc(e, n, a, i) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var g = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var S = d;
          d = u;
          for (var T = 0; T < n.length; T++)
            if (S.context === n[T]) {
              ((d.lanes |= a),
                (S = d.alternate),
                S !== null && (S.lanes |= a),
                xc(d.return, a, e),
                i || (g = null));
              break e;
            }
          d = S.next;
        }
      } else if (u.tag === 18) {
        if (((g = u.return), g === null)) throw Error(o(341));
        ((g.lanes |= a),
          (d = g.alternate),
          d !== null && (d.lanes |= a),
          xc(g, a, e),
          (g = null));
      } else g = u.child;
      if (g !== null) g.return = u;
      else
        for (g = u; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((u = g.sibling), u !== null)) {
            ((u.return = g.return), (g = u));
            break;
          }
          g = g.return;
        }
      u = g;
    }
  }
  function ci(e, n, a, i) {
    e = null;
    for (var u = n, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null) throw Error(o(387));
        if (((g = g.memoizedProps), g !== null)) {
          var S = u.type;
          Jt(u.pendingProps.value, g.value) ||
            (e !== null ? e.push(S) : (e = [S]));
        }
      } else if (u === Re.current) {
        if (((g = u.alternate), g === null)) throw Error(o(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Bi) : (e = [Bi]));
      }
      u = u.return;
    }
    (e !== null && Rc(n, e, a, i), (n.flags |= 262144));
  }
  function Yo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Jt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function xa(e) {
    ((Ea = e),
      (cr = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Lt(e) {
    return Lm(Ea, e);
  }
  function Vo(e, n) {
    return (Ea === null && xa(e), Lm(e, n));
  }
  function Lm(e, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), cr === null)) {
      if (e === null) throw Error(o(308));
      ((cr = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288));
    } else cr = cr.next = n;
    return a;
  }
  var $2 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    J2 = t.unstable_scheduleCallback,
    W2 = t.unstable_NormalPriority,
    vt = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Cc() {
    return { controller: new $2(), data: new Map(), refCount: 0 };
  }
  function fi(e) {
    (e.refCount--,
      e.refCount === 0 &&
        J2(W2, function () {
          e.controller.abort();
        }));
  }
  var di = null,
    Ac = 0,
    il = 0,
    ol = null;
  function eS(e, n) {
    if (di === null) {
      var a = (di = []);
      ((Ac = 0),
        (il = Mf()),
        (ol = {
          status: "pending",
          value: void 0,
          then: function (i) {
            a.push(i);
          },
        }));
    }
    return (Ac++, n.then(Um, Um), n);
  }
  function Um() {
    if (--Ac === 0 && di !== null) {
      ol !== null && (ol.status = "fulfilled");
      var e = di;
      ((di = null), (il = 0), (ol = null));
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function tS(e, n) {
    var a = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((i.status = "fulfilled"), (i.value = n));
          for (var u = 0; u < a.length; u++) (0, a[u])(n);
        },
        function (u) {
          for (i.status = "rejected", i.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      i
    );
  }
  var zm = N.S;
  N.S = function (e, n) {
    (typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      eS(e, n),
      zm !== null && zm(e, n));
  };
  var Ra = Z(null);
  function Oc() {
    var e = Ra.current;
    return e !== null ? e : tt.pooledCache;
  }
  function Qo(e, n) {
    n === null ? ee(Ra, Ra.current) : ee(Ra, n.pool);
  }
  function jm() {
    var e = Oc();
    return e === null ? null : { parent: vt._currentValue, pool: e };
  }
  var hi = Error(o(460)),
    Pm = Error(o(474)),
    Ko = Error(o(542)),
    Tc = { then: function () {} };
  function Hm(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Xo() {}
  function Bm(e, n, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(n) : a !== n && (n.then(Xo, Xo), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), qm(e), e);
      default:
        if (typeof n.status == "string") n.then(Xo, Xo);
        else {
          if (((e = tt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = n),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (n.status === "pending") {
                  var u = n;
                  ((u.status = "fulfilled"), (u.value = i));
                }
              },
              function (i) {
                if (n.status === "pending") {
                  var u = n;
                  ((u.status = "rejected"), (u.reason = i));
                }
              },
            ));
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), qm(e), e);
        }
        throw ((mi = n), hi);
    }
  }
  var mi = null;
  function km() {
    if (mi === null) throw Error(o(459));
    var e = mi;
    return ((mi = null), e);
  }
  function qm(e) {
    if (e === hi || e === Ko) throw Error(o(483));
  }
  var Mr = !1;
  function Mc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Dc(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Dr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _r(e, n, a) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Ke & 2) !== 0)) {
      var u = i.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (i.pending = n),
        (n = ko(e)),
        Om(e, null, a),
        n
      );
    }
    return (Bo(e, i, n, a), ko(e));
  }
  function pi(e, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194048) !== 0))
    ) {
      var i = n.lanes;
      ((i &= e.pendingLanes), (a |= i), (n.lanes = a), ha(e, a));
    }
  }
  function _c(e, n) {
    var a = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), a === i)) {
      var u = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var g = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (d === null ? (u = d = g) : (d = d.next = g), (a = a.next));
        } while (a !== null);
        d === null ? (u = d = n) : (d = d.next = n);
      } else u = d = n;
      ((a = {
        baseState: i.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = n) : (e.next = n),
      (a.lastBaseUpdate = n));
  }
  var Nc = !1;
  function yi() {
    if (Nc) {
      var e = ol;
      if (e !== null) throw e;
    }
  }
  function gi(e, n, a, i) {
    Nc = !1;
    var u = e.updateQueue;
    Mr = !1;
    var d = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var T = S,
        q = T.next;
      ((T.next = null), g === null ? (d = q) : (g.next = q), (g = T));
      var I = e.alternate;
      I !== null &&
        ((I = I.updateQueue),
        (S = I.lastBaseUpdate),
        S !== g &&
          (S === null ? (I.firstBaseUpdate = q) : (S.next = q),
          (I.lastBaseUpdate = T)));
    }
    if (d !== null) {
      var W = u.baseState;
      ((g = 0), (I = q = T = null), (S = d));
      do {
        var F = S.lane & -536870913,
          Y = F !== S.lane;
        if (Y ? (Ge & F) === F : (i & F) === F) {
          (F !== 0 && F === il && (Nc = !0),
            I !== null &&
              (I = I.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Me = e,
              Ae = S;
            F = n;
            var Je = a;
            switch (Ae.tag) {
              case 1:
                if (((Me = Ae.payload), typeof Me == "function")) {
                  W = Me.call(Je, W, F);
                  break e;
                }
                W = Me;
                break e;
              case 3:
                Me.flags = (Me.flags & -65537) | 128;
              case 0:
                if (
                  ((Me = Ae.payload),
                  (F = typeof Me == "function" ? Me.call(Je, W, F) : Me),
                  F == null)
                )
                  break e;
                W = y({}, W, F);
                break e;
              case 2:
                Mr = !0;
            }
          }
          ((F = S.callback),
            F !== null &&
              ((e.flags |= 64),
              Y && (e.flags |= 8192),
              (Y = u.callbacks),
              Y === null ? (u.callbacks = [F]) : Y.push(F)));
        } else
          ((Y = {
            lane: F,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            I === null ? ((q = I = Y), (T = W)) : (I = I.next = Y),
            (g |= F));
        if (((S = S.next), S === null)) {
          if (((S = u.shared.pending), S === null)) break;
          ((Y = S),
            (S = Y.next),
            (Y.next = null),
            (u.lastBaseUpdate = Y),
            (u.shared.pending = null));
        }
      } while (!0);
      (I === null && (T = W),
        (u.baseState = T),
        (u.firstBaseUpdate = q),
        (u.lastBaseUpdate = I),
        d === null && (u.shared.lanes = 0),
        (Br |= g),
        (e.lanes = g),
        (e.memoizedState = W));
    }
  }
  function Fm(e, n) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(n);
  }
  function Gm(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Fm(a[e], n);
  }
  var sl = Z(null),
    Zo = Z(0);
  function Ym(e, n) {
    ((e = vr), ee(Zo, e), ee(sl, n), (vr = e | n.baseLanes));
  }
  function Lc() {
    (ee(Zo, vr), ee(sl, sl.current));
  }
  function Uc() {
    ((vr = Zo.current), re(sl), re(Zo));
  }
  var Nr = 0,
    ze = null,
    Ie = null,
    pt = null,
    Io = !1,
    ul = !1,
    Ca = !1,
    $o = 0,
    vi = 0,
    cl = null,
    nS = 0;
  function ct() {
    throw Error(o(321));
  }
  function zc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!Jt(e[a], n[a])) return !1;
    return !0;
  }
  function jc(e, n, a, i, u, d) {
    return (
      (Nr = d),
      (ze = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (N.H = e === null || e.memoizedState === null ? Op : Tp),
      (Ca = !1),
      (d = a(i, u)),
      (Ca = !1),
      ul && (d = Qm(n, a, i, u)),
      Vm(e),
      d
    );
  }
  function Vm(e) {
    N.H = rs;
    var n = Ie !== null && Ie.next !== null;
    if (((Nr = 0), (pt = Ie = ze = null), (Io = !1), (vi = 0), (cl = null), n))
      throw Error(o(300));
    e === null ||
      Et ||
      ((e = e.dependencies), e !== null && Yo(e) && (Et = !0));
  }
  function Qm(e, n, a, i) {
    ze = e;
    var u = 0;
    do {
      if ((ul && (cl = null), (vi = 0), (ul = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (pt = Ie = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        ((d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0));
      }
      ((N.H = uS), (d = n(a, i)));
    } while (ul);
    return d;
  }
  function rS() {
    var e = N.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? bi(n) : n),
      (e = e.useState()[0]),
      (Ie !== null ? Ie.memoizedState : null) !== e && (ze.flags |= 1024),
      n
    );
  }
  function Pc() {
    var e = $o !== 0;
    return (($o = 0), e);
  }
  function Hc(e, n, a) {
    ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a));
  }
  function Bc(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        (n !== null && (n.pending = null), (e = e.next));
      }
      Io = !1;
    }
    ((Nr = 0), (pt = Ie = ze = null), (ul = !1), (vi = $o = 0), (cl = null));
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (pt === null ? (ze.memoizedState = pt = e) : (pt = pt.next = e), pt);
  }
  function yt() {
    if (Ie === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var n = pt === null ? ze.memoizedState : pt.next;
    if (n !== null) ((pt = n), (Ie = e));
    else {
      if (e === null)
        throw ze.alternate === null ? Error(o(467)) : Error(o(310));
      ((Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        pt === null ? (ze.memoizedState = pt = e) : (pt = pt.next = e));
    }
    return pt;
  }
  function kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function bi(e) {
    var n = vi;
    return (
      (vi += 1),
      cl === null && (cl = []),
      (e = Bm(cl, e, n)),
      (n = ze),
      (pt === null ? n.memoizedState : pt.next) === null &&
        ((n = n.alternate),
        (N.H = n === null || n.memoizedState === null ? Op : Tp)),
      e
    );
  }
  function Jo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return bi(e);
      if (e.$$typeof === U) return Lt(e);
    }
    throw Error(o(438, String(e)));
  }
  function qc(e) {
    var n = null,
      a = ze.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var i = ze.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (n = {
              data: i.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = kc()), (ze.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(e), i = 0; i < e; i++) a[i] = oe;
    return (n.index++, a);
  }
  function dr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Wo(e) {
    var n = yt();
    return Fc(n, Ie, e);
  }
  function Fc(e, n, a) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = a;
    var u = e.baseQueue,
      d = i.pending;
    if (d !== null) {
      if (u !== null) {
        var g = u.next;
        ((u.next = d.next), (d.next = g));
      }
      ((n.baseQueue = u = d), (i.pending = null));
    }
    if (((d = e.baseState), u === null)) e.memoizedState = d;
    else {
      n = u.next;
      var S = (g = null),
        T = null,
        q = n,
        I = !1;
      do {
        var W = q.lane & -536870913;
        if (W !== q.lane ? (Ge & W) === W : (Nr & W) === W) {
          var F = q.revertLane;
          if (F === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: q.action,
                  hasEagerState: q.hasEagerState,
                  eagerState: q.eagerState,
                  next: null,
                }),
              W === il && (I = !0));
          else if ((Nr & F) === F) {
            ((q = q.next), F === il && (I = !0));
            continue;
          } else
            ((W = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null,
            }),
              T === null ? ((S = T = W), (g = d)) : (T = T.next = W),
              (ze.lanes |= F),
              (Br |= F));
          ((W = q.action),
            Ca && a(d, W),
            (d = q.hasEagerState ? q.eagerState : a(d, W)));
        } else
          ((F = {
            lane: W,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null,
          }),
            T === null ? ((S = T = F), (g = d)) : (T = T.next = F),
            (ze.lanes |= W),
            (Br |= W));
        q = q.next;
      } while (q !== null && q !== n);
      if (
        (T === null ? (g = d) : (T.next = S),
        !Jt(d, e.memoizedState) && ((Et = !0), I && ((a = ol), a !== null)))
      )
        throw a;
      ((e.memoizedState = d),
        (e.baseState = g),
        (e.baseQueue = T),
        (i.lastRenderedState = d));
    }
    return (u === null && (i.lanes = 0), [e.memoizedState, i.dispatch]);
  }
  function Gc(e) {
    var n = yt(),
      a = n.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var i = a.dispatch,
      u = a.pending,
      d = n.memoizedState;
    if (u !== null) {
      a.pending = null;
      var g = (u = u.next);
      do ((d = e(d, g.action)), (g = g.next));
      while (g !== u);
      (Jt(d, n.memoizedState) || (Et = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (a.lastRenderedState = d));
    }
    return [d, i];
  }
  function Km(e, n, a) {
    var i = ze,
      u = yt(),
      d = Qe;
    if (d) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = n();
    var g = !Jt((Ie || u).memoizedState, a);
    (g && ((u.memoizedState = a), (Et = !0)), (u = u.queue));
    var S = Im.bind(null, i, u, e);
    if (
      (Si(2048, 8, S, [e]),
      u.getSnapshot !== n || g || (pt !== null && pt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        fl(9, es(), Zm.bind(null, i, u, a, n), null),
        tt === null)
      )
        throw Error(o(349));
      d || (Nr & 124) !== 0 || Xm(i, n, a);
    }
    return a;
  }
  function Xm(e, n, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: a }),
      (n = ze.updateQueue),
      n === null
        ? ((n = kc()), (ze.updateQueue = n), (n.stores = [e]))
        : ((a = n.stores), a === null ? (n.stores = [e]) : a.push(e)));
  }
  function Zm(e, n, a, i) {
    ((n.value = a), (n.getSnapshot = i), $m(n) && Jm(e));
  }
  function Im(e, n, a) {
    return a(function () {
      $m(n) && Jm(e);
    });
  }
  function $m(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !Jt(e, a);
    } catch {
      return !0;
    }
  }
  function Jm(e) {
    var n = nl(e, 2);
    n !== null && an(n, e, 2);
  }
  function Yc(e) {
    var n = Gt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Ca)) {
        Cn(!0);
        try {
          a();
        } finally {
          Cn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Wm(e, n, a, i) {
    return ((e.baseState = a), Fc(e, Ie, typeof i == "function" ? i : dr));
  }
  function aS(e, n, a, i, u) {
    if (ns(e)) throw Error(o(485));
    if (((e = n.action), e !== null)) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          d.listeners.push(g);
        },
      };
      (N.T !== null ? a(!0) : (d.isTransition = !1),
        i(d),
        (a = n.pending),
        a === null
          ? ((d.next = n.pending = d), ep(n, d))
          : ((d.next = a.next), (n.pending = a.next = d)));
    }
  }
  function ep(e, n) {
    var a = n.action,
      i = n.payload,
      u = e.state;
    if (n.isTransition) {
      var d = N.T,
        g = {};
      N.T = g;
      try {
        var S = a(u, i),
          T = N.S;
        (T !== null && T(g, S), tp(e, n, S));
      } catch (q) {
        Vc(e, n, q);
      } finally {
        N.T = d;
      }
    } else
      try {
        ((d = a(u, i)), tp(e, n, d));
      } catch (q) {
        Vc(e, n, q);
      }
  }
  function tp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (i) {
            np(e, n, i);
          },
          function (i) {
            return Vc(e, n, i);
          },
        )
      : np(e, n, a);
  }
  function np(e, n, a) {
    ((n.status = "fulfilled"),
      (n.value = a),
      rp(n),
      (e.state = a),
      (n = e.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (e.pending = null) : ((a = a.next), (n.next = a), ep(e, a))));
  }
  function Vc(e, n, a) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do ((n.status = "rejected"), (n.reason = a), rp(n), (n = n.next));
      while (n !== i);
    }
    e.action = null;
  }
  function rp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function ap(e, n) {
    return n;
  }
  function lp(e, n) {
    if (Qe) {
      var a = tt.formState;
      if (a !== null) {
        e: {
          var i = ze;
          if (Qe) {
            if (st) {
              t: {
                for (var u = st, d = Hn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (((u = Tn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((d = u.data), (u = d === "F!" || d === "F" ? u : null));
              }
              if (u) {
                ((st = Tn(u.nextSibling)), (i = u.data === "F!"));
                break e;
              }
            }
            wa(i);
          }
          i = !1;
        }
        i && (n = a[0]);
      }
    }
    return (
      (a = Gt()),
      (a.memoizedState = a.baseState = n),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ap,
        lastRenderedState: n,
      }),
      (a.queue = i),
      (a = Rp.bind(null, ze, i)),
      (i.dispatch = a),
      (i = Yc(!1)),
      (d = Ic.bind(null, ze, !1, i.queue)),
      (i = Gt()),
      (u = { state: n, dispatch: null, action: e, pending: null }),
      (i.queue = u),
      (a = aS.bind(null, ze, u, d, a)),
      (u.dispatch = a),
      (i.memoizedState = e),
      [n, a, !1]
    );
  }
  function ip(e) {
    var n = yt();
    return op(n, Ie, e);
  }
  function op(e, n, a) {
    if (
      ((n = Fc(e, n, ap)[0]),
      (e = Wo(dr)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var i = bi(n);
      } catch (g) {
        throw g === hi ? Ko : g;
      }
    else i = n;
    n = yt();
    var u = n.queue,
      d = u.dispatch;
    return (
      a !== n.memoizedState &&
        ((ze.flags |= 2048), fl(9, es(), lS.bind(null, u, a), null)),
      [i, d, e]
    );
  }
  function lS(e, n) {
    e.action = n;
  }
  function sp(e) {
    var n = yt(),
      a = Ie;
    if (a !== null) return op(n, a, e);
    (yt(), (n = n.memoizedState), (a = yt()));
    var i = a.queue.dispatch;
    return ((a.memoizedState = e), [n, i, !1]);
  }
  function fl(e, n, a, i) {
    return (
      (e = { tag: e, create: a, deps: i, inst: n, next: null }),
      (n = ze.updateQueue),
      n === null && ((n = kc()), (ze.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = e.next = e)
        : ((i = a.next), (a.next = e), (e.next = i), (n.lastEffect = e)),
      e
    );
  }
  function es() {
    return { destroy: void 0, resource: void 0 };
  }
  function up() {
    return yt().memoizedState;
  }
  function ts(e, n, a, i) {
    var u = Gt();
    ((i = i === void 0 ? null : i),
      (ze.flags |= e),
      (u.memoizedState = fl(1 | n, es(), a, i)));
  }
  function Si(e, n, a, i) {
    var u = yt();
    i = i === void 0 ? null : i;
    var d = u.memoizedState.inst;
    Ie !== null && i !== null && zc(i, Ie.memoizedState.deps)
      ? (u.memoizedState = fl(n, d, a, i))
      : ((ze.flags |= e), (u.memoizedState = fl(1 | n, d, a, i)));
  }
  function cp(e, n) {
    ts(8390656, 8, e, n);
  }
  function fp(e, n) {
    Si(2048, 8, e, n);
  }
  function dp(e, n) {
    return Si(4, 2, e, n);
  }
  function hp(e, n) {
    return Si(4, 4, e, n);
  }
  function mp(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function pp(e, n, a) {
    ((a = a != null ? a.concat([e]) : null), Si(4, 4, mp.bind(null, n, e), a));
  }
  function Qc() {}
  function yp(e, n) {
    var a = yt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState;
    return n !== null && zc(n, i[1]) ? i[0] : ((a.memoizedState = [e, n]), e);
  }
  function gp(e, n) {
    var a = yt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState;
    if (n !== null && zc(n, i[1])) return i[0];
    if (((i = e()), Ca)) {
      Cn(!0);
      try {
        e();
      } finally {
        Cn(!1);
      }
    }
    return ((a.memoizedState = [i, n]), i);
  }
  function Kc(e, n, a) {
    return a === void 0 || (Nr & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = a), (e = S0()), (ze.lanes |= e), (Br |= e), a);
  }
  function vp(e, n, a, i) {
    return Jt(a, n)
      ? a
      : sl.current !== null
        ? ((e = Kc(e, a, i)), Jt(e, n) || (Et = !0), e)
        : (Nr & 42) === 0
          ? ((Et = !0), (e.memoizedState = a))
          : ((e = S0()), (ze.lanes |= e), (Br |= e), n);
  }
  function bp(e, n, a, i, u) {
    var d = $.p;
    $.p = d !== 0 && 8 > d ? d : 8;
    var g = N.T,
      S = {};
    ((N.T = S), Ic(e, !1, n, a));
    try {
      var T = u(),
        q = N.S;
      if (
        (q !== null && q(S, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var I = tS(T, i);
        wi(e, n, I, rn(e));
      } else wi(e, n, i, rn(e));
    } catch (W) {
      wi(e, n, { then: function () {}, status: "rejected", reason: W }, rn());
    } finally {
      (($.p = d), (N.T = g));
    }
  }
  function iS() {}
  function Xc(e, n, a, i) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Sp(e).queue;
    bp(
      e,
      u,
      n,
      k,
      a === null
        ? iS
        : function () {
            return (wp(e), a(i));
          },
    );
  }
  function Sp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: k,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dr,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function wp(e) {
    var n = Sp(e).next.queue;
    wi(e, n, {}, rn());
  }
  function Zc() {
    return Lt(Bi);
  }
  function Ep() {
    return yt().memoizedState;
  }
  function xp() {
    return yt().memoizedState;
  }
  function oS(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = rn();
          e = Dr(a);
          var i = _r(n, e, a);
          (i !== null && (an(i, n, a), pi(i, n, a)),
            (n = { cache: Cc() }),
            (e.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function sS(e, n, a) {
    var i = rn();
    ((a = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ns(e)
        ? Cp(n, a)
        : ((a = pc(e, n, a, i)), a !== null && (an(a, e, i), Ap(a, n, i))));
  }
  function Rp(e, n, a) {
    var i = rn();
    wi(e, n, a, i);
  }
  function wi(e, n, a, i) {
    var u = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ns(e)) Cp(n, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var g = n.lastRenderedState,
            S = d(g, a);
          if (((u.hasEagerState = !0), (u.eagerState = S), Jt(S, g)))
            return (Bo(e, n, u, 0), tt === null && Ho(), !1);
        } catch {
        } finally {
        }
      if (((a = pc(e, n, u, i)), a !== null))
        return (an(a, e, i), Ap(a, n, i), !0);
    }
    return !1;
  }
  function Ic(e, n, a, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Mf(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ns(e))
    ) {
      if (n) throw Error(o(479));
    } else ((n = pc(e, a, i, 2)), n !== null && an(n, e, 2));
  }
  function ns(e) {
    var n = e.alternate;
    return e === ze || (n !== null && n === ze);
  }
  function Cp(e, n) {
    ul = Io = !0;
    var a = e.pending;
    (a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (e.pending = n));
  }
  function Ap(e, n, a) {
    if ((a & 4194048) !== 0) {
      var i = n.lanes;
      ((i &= e.pendingLanes), (a |= i), (n.lanes = a), ha(e, a));
    }
  }
  var rs = {
      readContext: Lt,
      use: Jo,
      useCallback: ct,
      useContext: ct,
      useEffect: ct,
      useImperativeHandle: ct,
      useLayoutEffect: ct,
      useInsertionEffect: ct,
      useMemo: ct,
      useReducer: ct,
      useRef: ct,
      useState: ct,
      useDebugValue: ct,
      useDeferredValue: ct,
      useTransition: ct,
      useSyncExternalStore: ct,
      useId: ct,
      useHostTransitionStatus: ct,
      useFormState: ct,
      useActionState: ct,
      useOptimistic: ct,
      useMemoCache: ct,
      useCacheRefresh: ct,
    },
    Op = {
      readContext: Lt,
      use: Jo,
      useCallback: function (e, n) {
        return ((Gt().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: Lt,
      useEffect: cp,
      useImperativeHandle: function (e, n, a) {
        ((a = a != null ? a.concat([e]) : null),
          ts(4194308, 4, mp.bind(null, n, e), a));
      },
      useLayoutEffect: function (e, n) {
        return ts(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ts(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var a = Gt();
        n = n === void 0 ? null : n;
        var i = e();
        if (Ca) {
          Cn(!0);
          try {
            e();
          } finally {
            Cn(!1);
          }
        }
        return ((a.memoizedState = [i, n]), i);
      },
      useReducer: function (e, n, a) {
        var i = Gt();
        if (a !== void 0) {
          var u = a(n);
          if (Ca) {
            Cn(!0);
            try {
              a(n);
            } finally {
              Cn(!1);
            }
          }
        } else u = n;
        return (
          (i.memoizedState = i.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (i.queue = e),
          (e = e.dispatch = sS.bind(null, ze, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Gt();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: function (e) {
        e = Yc(e);
        var n = e.queue,
          a = Rp.bind(null, ze, n);
        return ((n.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Qc,
      useDeferredValue: function (e, n) {
        var a = Gt();
        return Kc(a, e, n);
      },
      useTransition: function () {
        var e = Yc(!1);
        return (
          (e = bp.bind(null, ze, e.queue, !0, !1)),
          (Gt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, a) {
        var i = ze,
          u = Gt();
        if (Qe) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = n()), tt === null)) throw Error(o(349));
          (Ge & 124) !== 0 || Xm(i, n, a);
        }
        u.memoizedState = a;
        var d = { value: a, getSnapshot: n };
        return (
          (u.queue = d),
          cp(Im.bind(null, i, d, e), [e]),
          (i.flags |= 2048),
          fl(9, es(), Zm.bind(null, i, d, a, n), null),
          a
        );
      },
      useId: function () {
        var e = Gt(),
          n = tt.identifierPrefix;
        if (Qe) {
          var a = ur,
            i = sr;
          ((a = (i & ~(1 << (32 - Ot(i) - 1))).toString(32) + a),
            (n = "«" + n + "R" + a),
            (a = $o++),
            0 < a && (n += "H" + a.toString(32)),
            (n += "»"));
        } else ((a = nS++), (n = "«" + n + "r" + a.toString(32) + "»"));
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: Zc,
      useFormState: lp,
      useActionState: lp,
      useOptimistic: function (e) {
        var n = Gt();
        n.memoizedState = n.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = a),
          (n = Ic.bind(null, ze, !0, a)),
          (a.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: qc,
      useCacheRefresh: function () {
        return (Gt().memoizedState = oS.bind(null, ze));
      },
    },
    Tp = {
      readContext: Lt,
      use: Jo,
      useCallback: yp,
      useContext: Lt,
      useEffect: fp,
      useImperativeHandle: pp,
      useInsertionEffect: dp,
      useLayoutEffect: hp,
      useMemo: gp,
      useReducer: Wo,
      useRef: up,
      useState: function () {
        return Wo(dr);
      },
      useDebugValue: Qc,
      useDeferredValue: function (e, n) {
        var a = yt();
        return vp(a, Ie.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Wo(dr)[0],
          n = yt().memoizedState;
        return [typeof e == "boolean" ? e : bi(e), n];
      },
      useSyncExternalStore: Km,
      useId: Ep,
      useHostTransitionStatus: Zc,
      useFormState: ip,
      useActionState: ip,
      useOptimistic: function (e, n) {
        var a = yt();
        return Wm(a, Ie, e, n);
      },
      useMemoCache: qc,
      useCacheRefresh: xp,
    },
    uS = {
      readContext: Lt,
      use: Jo,
      useCallback: yp,
      useContext: Lt,
      useEffect: fp,
      useImperativeHandle: pp,
      useInsertionEffect: dp,
      useLayoutEffect: hp,
      useMemo: gp,
      useReducer: Gc,
      useRef: up,
      useState: function () {
        return Gc(dr);
      },
      useDebugValue: Qc,
      useDeferredValue: function (e, n) {
        var a = yt();
        return Ie === null ? Kc(a, e, n) : vp(a, Ie.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Gc(dr)[0],
          n = yt().memoizedState;
        return [typeof e == "boolean" ? e : bi(e), n];
      },
      useSyncExternalStore: Km,
      useId: Ep,
      useHostTransitionStatus: Zc,
      useFormState: sp,
      useActionState: sp,
      useOptimistic: function (e, n) {
        var a = yt();
        return Ie !== null
          ? Wm(a, Ie, e, n)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: qc,
      useCacheRefresh: xp,
    },
    dl = null,
    Ei = 0;
  function as(e) {
    var n = Ei;
    return ((Ei += 1), dl === null && (dl = []), Bm(dl, e, n));
  }
  function xi(e, n) {
    ((n = n.props.ref), (e.ref = n !== void 0 ? n : null));
  }
  function ls(e, n) {
    throw n.$$typeof === v
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Mp(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Dp(e) {
    function n(z, L) {
      if (e) {
        var B = z.deletions;
        B === null ? ((z.deletions = [L]), (z.flags |= 16)) : B.push(L);
      }
    }
    function a(z, L) {
      if (!e) return null;
      for (; L !== null; ) (n(z, L), (L = L.sibling));
      return null;
    }
    function i(z) {
      for (var L = new Map(); z !== null; )
        (z.key !== null ? L.set(z.key, z) : L.set(z.index, z), (z = z.sibling));
      return L;
    }
    function u(z, L) {
      return ((z = or(z, L)), (z.index = 0), (z.sibling = null), z);
    }
    function d(z, L, B) {
      return (
        (z.index = B),
        e
          ? ((B = z.alternate),
            B !== null
              ? ((B = B.index), B < L ? ((z.flags |= 67108866), L) : B)
              : ((z.flags |= 67108866), L))
          : ((z.flags |= 1048576), L)
      );
    }
    function g(z) {
      return (e && z.alternate === null && (z.flags |= 67108866), z);
    }
    function S(z, L, B, J) {
      return L === null || L.tag !== 6
        ? ((L = gc(B, z.mode, J)), (L.return = z), L)
        : ((L = u(L, B)), (L.return = z), L);
    }
    function T(z, L, B, J) {
      var ce = B.type;
      return ce === E
        ? I(z, L, B.props.children, J, B.key)
        : L !== null &&
            (L.elementType === ce ||
              (typeof ce == "object" &&
                ce !== null &&
                ce.$$typeof === V &&
                Mp(ce) === L.type))
          ? ((L = u(L, B.props)), xi(L, B), (L.return = z), L)
          : ((L = qo(B.type, B.key, B.props, null, z.mode, J)),
            xi(L, B),
            (L.return = z),
            L);
    }
    function q(z, L, B, J) {
      return L === null ||
        L.tag !== 4 ||
        L.stateNode.containerInfo !== B.containerInfo ||
        L.stateNode.implementation !== B.implementation
        ? ((L = vc(B, z.mode, J)), (L.return = z), L)
        : ((L = u(L, B.children || [])), (L.return = z), L);
    }
    function I(z, L, B, J, ce) {
      return L === null || L.tag !== 7
        ? ((L = ga(B, z.mode, J, ce)), (L.return = z), L)
        : ((L = u(L, B)), (L.return = z), L);
    }
    function W(z, L, B) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((L = gc("" + L, z.mode, B)), (L.return = z), L);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case w:
            return (
              (B = qo(L.type, L.key, L.props, null, z.mode, B)),
              xi(B, L),
              (B.return = z),
              B
            );
          case x:
            return ((L = vc(L, z.mode, B)), (L.return = z), L);
          case V:
            var J = L._init;
            return ((L = J(L._payload)), W(z, L, B));
        }
        if (be(L) || Ee(L))
          return ((L = ga(L, z.mode, B, null)), (L.return = z), L);
        if (typeof L.then == "function") return W(z, as(L), B);
        if (L.$$typeof === U) return W(z, Vo(z, L), B);
        ls(z, L);
      }
      return null;
    }
    function F(z, L, B, J) {
      var ce = L !== null ? L.key : null;
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return ce !== null ? null : S(z, L, "" + B, J);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case w:
            return B.key === ce ? T(z, L, B, J) : null;
          case x:
            return B.key === ce ? q(z, L, B, J) : null;
          case V:
            return ((ce = B._init), (B = ce(B._payload)), F(z, L, B, J));
        }
        if (be(B) || Ee(B)) return ce !== null ? null : I(z, L, B, J, null);
        if (typeof B.then == "function") return F(z, L, as(B), J);
        if (B.$$typeof === U) return F(z, L, Vo(z, B), J);
        ls(z, B);
      }
      return null;
    }
    function Y(z, L, B, J, ce) {
      if (
        (typeof J == "string" && J !== "") ||
        typeof J == "number" ||
        typeof J == "bigint"
      )
        return ((z = z.get(B) || null), S(L, z, "" + J, ce));
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case w:
            return (
              (z = z.get(J.key === null ? B : J.key) || null),
              T(L, z, J, ce)
            );
          case x:
            return (
              (z = z.get(J.key === null ? B : J.key) || null),
              q(L, z, J, ce)
            );
          case V:
            var He = J._init;
            return ((J = He(J._payload)), Y(z, L, B, J, ce));
        }
        if (be(J) || Ee(J))
          return ((z = z.get(B) || null), I(L, z, J, ce, null));
        if (typeof J.then == "function") return Y(z, L, B, as(J), ce);
        if (J.$$typeof === U) return Y(z, L, B, Vo(L, J), ce);
        ls(L, J);
      }
      return null;
    }
    function Me(z, L, B, J) {
      for (
        var ce = null, He = null, Se = L, Te = (L = 0), Rt = null;
        Se !== null && Te < B.length;
        Te++
      ) {
        Se.index > Te ? ((Rt = Se), (Se = null)) : (Rt = Se.sibling);
        var Ye = F(z, Se, B[Te], J);
        if (Ye === null) {
          Se === null && (Se = Rt);
          break;
        }
        (e && Se && Ye.alternate === null && n(z, Se),
          (L = d(Ye, L, Te)),
          He === null ? (ce = Ye) : (He.sibling = Ye),
          (He = Ye),
          (Se = Rt));
      }
      if (Te === B.length) return (a(z, Se), Qe && ba(z, Te), ce);
      if (Se === null) {
        for (; Te < B.length; Te++)
          ((Se = W(z, B[Te], J)),
            Se !== null &&
              ((L = d(Se, L, Te)),
              He === null ? (ce = Se) : (He.sibling = Se),
              (He = Se)));
        return (Qe && ba(z, Te), ce);
      }
      for (Se = i(Se); Te < B.length; Te++)
        ((Rt = Y(Se, z, Te, B[Te], J)),
          Rt !== null &&
            (e &&
              Rt.alternate !== null &&
              Se.delete(Rt.key === null ? Te : Rt.key),
            (L = d(Rt, L, Te)),
            He === null ? (ce = Rt) : (He.sibling = Rt),
            (He = Rt)));
      return (
        e &&
          Se.forEach(function (Xr) {
            return n(z, Xr);
          }),
        Qe && ba(z, Te),
        ce
      );
    }
    function Ae(z, L, B, J) {
      if (B == null) throw Error(o(151));
      for (
        var ce = null,
          He = null,
          Se = L,
          Te = (L = 0),
          Rt = null,
          Ye = B.next();
        Se !== null && !Ye.done;
        Te++, Ye = B.next()
      ) {
        Se.index > Te ? ((Rt = Se), (Se = null)) : (Rt = Se.sibling);
        var Xr = F(z, Se, Ye.value, J);
        if (Xr === null) {
          Se === null && (Se = Rt);
          break;
        }
        (e && Se && Xr.alternate === null && n(z, Se),
          (L = d(Xr, L, Te)),
          He === null ? (ce = Xr) : (He.sibling = Xr),
          (He = Xr),
          (Se = Rt));
      }
      if (Ye.done) return (a(z, Se), Qe && ba(z, Te), ce);
      if (Se === null) {
        for (; !Ye.done; Te++, Ye = B.next())
          ((Ye = W(z, Ye.value, J)),
            Ye !== null &&
              ((L = d(Ye, L, Te)),
              He === null ? (ce = Ye) : (He.sibling = Ye),
              (He = Ye)));
        return (Qe && ba(z, Te), ce);
      }
      for (Se = i(Se); !Ye.done; Te++, Ye = B.next())
        ((Ye = Y(Se, z, Te, Ye.value, J)),
          Ye !== null &&
            (e &&
              Ye.alternate !== null &&
              Se.delete(Ye.key === null ? Te : Ye.key),
            (L = d(Ye, L, Te)),
            He === null ? (ce = Ye) : (He.sibling = Ye),
            (He = Ye)));
      return (
        e &&
          Se.forEach(function (cw) {
            return n(z, cw);
          }),
        Qe && ba(z, Te),
        ce
      );
    }
    function Je(z, L, B, J) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === E &&
          B.key === null &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case w:
            e: {
              for (var ce = B.key; L !== null; ) {
                if (L.key === ce) {
                  if (((ce = B.type), ce === E)) {
                    if (L.tag === 7) {
                      (a(z, L.sibling),
                        (J = u(L, B.props.children)),
                        (J.return = z),
                        (z = J));
                      break e;
                    }
                  } else if (
                    L.elementType === ce ||
                    (typeof ce == "object" &&
                      ce !== null &&
                      ce.$$typeof === V &&
                      Mp(ce) === L.type)
                  ) {
                    (a(z, L.sibling),
                      (J = u(L, B.props)),
                      xi(J, B),
                      (J.return = z),
                      (z = J));
                    break e;
                  }
                  a(z, L);
                  break;
                } else n(z, L);
                L = L.sibling;
              }
              B.type === E
                ? ((J = ga(B.props.children, z.mode, J, B.key)),
                  (J.return = z),
                  (z = J))
                : ((J = qo(B.type, B.key, B.props, null, z.mode, J)),
                  xi(J, B),
                  (J.return = z),
                  (z = J));
            }
            return g(z);
          case x:
            e: {
              for (ce = B.key; L !== null; ) {
                if (L.key === ce)
                  if (
                    L.tag === 4 &&
                    L.stateNode.containerInfo === B.containerInfo &&
                    L.stateNode.implementation === B.implementation
                  ) {
                    (a(z, L.sibling),
                      (J = u(L, B.children || [])),
                      (J.return = z),
                      (z = J));
                    break e;
                  } else {
                    a(z, L);
                    break;
                  }
                else n(z, L);
                L = L.sibling;
              }
              ((J = vc(B, z.mode, J)), (J.return = z), (z = J));
            }
            return g(z);
          case V:
            return ((ce = B._init), (B = ce(B._payload)), Je(z, L, B, J));
        }
        if (be(B)) return Me(z, L, B, J);
        if (Ee(B)) {
          if (((ce = Ee(B)), typeof ce != "function")) throw Error(o(150));
          return ((B = ce.call(B)), Ae(z, L, B, J));
        }
        if (typeof B.then == "function") return Je(z, L, as(B), J);
        if (B.$$typeof === U) return Je(z, L, Vo(z, B), J);
        ls(z, B);
      }
      return (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
        ? ((B = "" + B),
          L !== null && L.tag === 6
            ? (a(z, L.sibling), (J = u(L, B)), (J.return = z), (z = J))
            : (a(z, L), (J = gc(B, z.mode, J)), (J.return = z), (z = J)),
          g(z))
        : a(z, L);
    }
    return function (z, L, B, J) {
      try {
        Ei = 0;
        var ce = Je(z, L, B, J);
        return ((dl = null), ce);
      } catch (Se) {
        if (Se === hi || Se === Ko) throw Se;
        var He = Wt(29, Se, null, z.mode);
        return ((He.lanes = J), (He.return = z), He);
      } finally {
      }
    };
  }
  var hl = Dp(!0),
    _p = Dp(!1),
    yn = Z(null),
    Bn = null;
  function Lr(e) {
    var n = e.alternate;
    (ee(bt, bt.current & 1),
      ee(yn, e),
      Bn === null &&
        (n === null || sl.current !== null || n.memoizedState !== null) &&
        (Bn = e));
  }
  function Np(e) {
    if (e.tag === 22) {
      if ((ee(bt, bt.current), ee(yn, e), Bn === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Bn = e);
      }
    } else Ur();
  }
  function Ur() {
    (ee(bt, bt.current), ee(yn, yn.current));
  }
  function hr(e) {
    (re(yn), Bn === e && (Bn = null), re(bt));
  }
  var bt = Z(0);
  function is(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || qf(a))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  function $c(e, n, a, i) {
    ((n = e.memoizedState),
      (a = a(i, n)),
      (a = a == null ? n : y({}, n, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Jc = {
    enqueueSetState: function (e, n, a) {
      e = e._reactInternals;
      var i = rn(),
        u = Dr(i);
      ((u.payload = n),
        a != null && (u.callback = a),
        (n = _r(e, u, i)),
        n !== null && (an(n, e, i), pi(n, e, i)));
    },
    enqueueReplaceState: function (e, n, a) {
      e = e._reactInternals;
      var i = rn(),
        u = Dr(i);
      ((u.tag = 1),
        (u.payload = n),
        a != null && (u.callback = a),
        (n = _r(e, u, i)),
        n !== null && (an(n, e, i), pi(n, e, i)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var a = rn(),
        i = Dr(a);
      ((i.tag = 2),
        n != null && (i.callback = n),
        (n = _r(e, i, a)),
        n !== null && (an(n, e, a), pi(n, e, a)));
    },
  };
  function Lp(e, n, a, i, u, d, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, d, g)
        : n.prototype && n.prototype.isPureReactComponent
          ? !li(a, i) || !li(u, d)
          : !0
    );
  }
  function Up(e, n, a, i) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, i),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, i),
      n.state !== e && Jc.enqueueReplaceState(n, n.state, null));
  }
  function Aa(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var i in n) i !== "ref" && (a[i] = n[i]);
    }
    if ((e = e.defaultProps)) {
      a === n && (a = y({}, a));
      for (var u in e) a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  var os =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function zp(e) {
    os(e);
  }
  function jp(e) {
    console.error(e);
  }
  function Pp(e) {
    os(e);
  }
  function ss(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Hp(e, n, a) {
    try {
      var i = e.onCaughtError;
      i(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Wc(e, n, a) {
    return (
      (a = Dr(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        ss(e, n);
      }),
      a
    );
  }
  function Bp(e) {
    return ((e = Dr(e)), (e.tag = 3), e);
  }
  function kp(e, n, a, i) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = i.value;
      ((e.payload = function () {
        return u(d);
      }),
        (e.callback = function () {
          Hp(n, a, i);
        }));
    }
    var g = a.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        (Hp(n, a, i),
          typeof u != "function" &&
            (kr === null ? (kr = new Set([this])) : kr.add(this)));
        var S = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function cS(e, n, a, i, u) {
    if (
      ((a.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && ci(n, a, u, !0),
        (a = yn.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Bn === null ? Rf() : a.alternate === null && ut === 0 && (ut = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              i === Tc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([i])) : n.add(i),
                  Af(e, i, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              i === Tc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([i])) : a.add(i)),
                  Af(e, i, u)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Af(e, i, u), Rf(), !1);
    }
    if (Qe)
      return (
        (n = yn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = u),
            i !== wc && ((e = Error(o(422), { cause: i })), ui(dn(e, a))))
          : (i !== wc && ((n = Error(o(423), { cause: i })), ui(dn(n, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (i = dn(i, a)),
            (u = Wc(e.stateNode, i, u)),
            _c(e, u),
            ut !== 4 && (ut = 2)),
        !1
      );
    var d = Error(o(520), { cause: i });
    if (
      ((d = dn(d, a)),
      Di === null ? (Di = [d]) : Di.push(d),
      ut !== 4 && (ut = 2),
      n === null)
    )
      return !0;
    ((i = dn(i, a)), (a = n));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = Wc(a.stateNode, i, e)),
            _c(a, e),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (kr === null || !kr.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = Bp(u)),
              kp(u, e, a, i),
              _c(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var qp = Error(o(461)),
    Et = !1;
  function Tt(e, n, a, i) {
    n.child = e === null ? _p(n, null, a, i) : hl(n, e.child, a, i);
  }
  function Fp(e, n, a, i, u) {
    a = a.render;
    var d = n.ref;
    if ("ref" in i) {
      var g = {};
      for (var S in i) S !== "ref" && (g[S] = i[S]);
    } else g = i;
    return (
      xa(n),
      (i = jc(e, n, a, g, d, u)),
      (S = Pc()),
      e !== null && !Et
        ? (Hc(e, n, u), mr(e, n, u))
        : (Qe && S && bc(n), (n.flags |= 1), Tt(e, n, i, u), n.child)
    );
  }
  function Gp(e, n, a, i, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" &&
        !yc(d) &&
        d.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = d), Yp(e, n, d, i, u))
        : ((e = qo(a.type, null, i, n, n.mode, u)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((d = e.child), !sf(e, u))) {
      var g = d.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : li), a(g, i) && e.ref === n.ref)
      )
        return mr(e, n, u);
    }
    return (
      (n.flags |= 1),
      (e = or(d, i)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Yp(e, n, a, i, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (li(d, i) && e.ref === n.ref)
        if (((Et = !1), (n.pendingProps = i = d), sf(e, u)))
          (e.flags & 131072) !== 0 && (Et = !0);
        else return ((n.lanes = e.lanes), mr(e, n, u));
    }
    return ef(e, n, a, i, u);
  }
  function Vp(e, n, a) {
    var i = n.pendingProps,
      u = i.children,
      d = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((i = d !== null ? d.baseLanes | a : a), e !== null)) {
          for (u = n.child = e.child, d = 0; u !== null; )
            ((d = d | u.lanes | u.childLanes), (u = u.sibling));
          n.childLanes = d & ~i;
        } else ((n.childLanes = 0), (n.child = null));
        return Qp(e, n, i, a);
      }
      if ((a & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Qo(n, d !== null ? d.cachePool : null),
          d !== null ? Ym(n, d) : Lc(),
          Np(n));
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Qp(e, n, d !== null ? d.baseLanes | a : a, a)
        );
    } else
      d !== null
        ? (Qo(n, d.cachePool), Ym(n, d), Ur(), (n.memoizedState = null))
        : (e !== null && Qo(n, null), Lc(), Ur());
    return (Tt(e, n, u, a), n.child);
  }
  function Qp(e, n, a, i) {
    var u = Oc();
    return (
      (u = u === null ? null : { parent: vt._currentValue, pool: u }),
      (n.memoizedState = { baseLanes: a, cachePool: u }),
      e !== null && Qo(n, null),
      Lc(),
      Np(n),
      e !== null && ci(e, n, i, !0),
      null
    );
  }
  function us(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function ef(e, n, a, i, u) {
    return (
      xa(n),
      (a = jc(e, n, a, i, void 0, u)),
      (i = Pc()),
      e !== null && !Et
        ? (Hc(e, n, u), mr(e, n, u))
        : (Qe && i && bc(n), (n.flags |= 1), Tt(e, n, a, u), n.child)
    );
  }
  function Kp(e, n, a, i, u, d) {
    return (
      xa(n),
      (n.updateQueue = null),
      (a = Qm(n, i, a, u)),
      Vm(e),
      (i = Pc()),
      e !== null && !Et
        ? (Hc(e, n, d), mr(e, n, d))
        : (Qe && i && bc(n), (n.flags |= 1), Tt(e, n, a, d), n.child)
    );
  }
  function Xp(e, n, a, i, u) {
    if ((xa(n), n.stateNode === null)) {
      var d = rl,
        g = a.contextType;
      (typeof g == "object" && g !== null && (d = Lt(g)),
        (d = new a(i, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Jc),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = i),
        (d.state = n.memoizedState),
        (d.refs = {}),
        Mc(n),
        (g = a.contextType),
        (d.context = typeof g == "object" && g !== null ? Lt(g) : rl),
        (d.state = n.memoizedState),
        (g = a.getDerivedStateFromProps),
        typeof g == "function" && ($c(n, a, g, i), (d.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((g = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          g !== d.state && Jc.enqueueReplaceState(d, d.state, null),
          gi(n, i, d, u),
          yi(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308),
        (i = !0));
    } else if (e === null) {
      d = n.stateNode;
      var S = n.memoizedProps,
        T = Aa(a, S);
      d.props = T;
      var q = d.context,
        I = a.contextType;
      ((g = rl), typeof I == "object" && I !== null && (g = Lt(I)));
      var W = a.getDerivedStateFromProps;
      ((I =
        typeof W == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (S = n.pendingProps !== S),
        I ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((S || q !== g) && Up(n, d, i, g)),
        (Mr = !1));
      var F = n.memoizedState;
      ((d.state = F),
        gi(n, i, d, u),
        yi(),
        (q = n.memoizedState),
        S || F !== q || Mr
          ? (typeof W == "function" && ($c(n, a, W, i), (q = n.memoizedState)),
            (T = Mr || Lp(n, a, T, i, F, q, g))
              ? (I ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = i),
                (n.memoizedState = q)),
            (d.props = i),
            (d.state = q),
            (d.context = g),
            (i = T))
          : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            (i = !1)));
    } else {
      ((d = n.stateNode),
        Dc(e, n),
        (g = n.memoizedProps),
        (I = Aa(a, g)),
        (d.props = I),
        (W = n.pendingProps),
        (F = d.context),
        (q = a.contextType),
        (T = rl),
        typeof q == "object" && q !== null && (T = Lt(q)),
        (S = a.getDerivedStateFromProps),
        (q =
          typeof S == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((g !== W || F !== T) && Up(n, d, i, T)),
        (Mr = !1),
        (F = n.memoizedState),
        (d.state = F),
        gi(n, i, d, u),
        yi());
      var Y = n.memoizedState;
      g !== W ||
      F !== Y ||
      Mr ||
      (e !== null && e.dependencies !== null && Yo(e.dependencies))
        ? (typeof S == "function" && ($c(n, a, S, i), (Y = n.memoizedState)),
          (I =
            Mr ||
            Lp(n, a, I, i, F, Y, T) ||
            (e !== null && e.dependencies !== null && Yo(e.dependencies)))
            ? (q ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(i, Y, T),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(i, Y, T)),
              typeof d.componentDidUpdate == "function" && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && F === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = i),
              (n.memoizedState = Y)),
          (d.props = i),
          (d.state = Y),
          (d.context = T),
          (i = I))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && F === e.memoizedState) ||
            (n.flags |= 1024),
          (i = !1));
    }
    return (
      (d = i),
      us(e, n),
      (i = (n.flags & 128) !== 0),
      d || i
        ? ((d = n.stateNode),
          (a =
            i && typeof a.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (n.flags |= 1),
          e !== null && i
            ? ((n.child = hl(n, e.child, null, u)),
              (n.child = hl(n, null, a, u)))
            : Tt(e, n, a, u),
          (n.memoizedState = d.state),
          (e = n.child))
        : (e = mr(e, n, u)),
      e
    );
  }
  function Zp(e, n, a, i) {
    return (si(), (n.flags |= 256), Tt(e, n, a, i), n.child);
  }
  var tf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function nf(e) {
    return { baseLanes: e, cachePool: jm() };
  }
  function rf(e, n, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), n && (e |= gn), e);
  }
  function Ip(e, n, a) {
    var i = n.pendingProps,
      u = !1,
      d = (n.flags & 128) !== 0,
      g;
    if (
      ((g = d) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0),
      g && ((u = !0), (n.flags &= -129)),
      (g = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Qe) {
        if ((u ? Lr(n) : Ur(), Qe)) {
          var S = st,
            T;
          if ((T = S)) {
            e: {
              for (T = S, S = Hn; T.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (((T = Tn(T.nextSibling)), T === null)) {
                  S = null;
                  break e;
                }
              }
              S = T;
            }
            S !== null
              ? ((n.memoizedState = {
                  dehydrated: S,
                  treeContext: va !== null ? { id: sr, overflow: ur } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Wt(18, null, null, 0)),
                (T.stateNode = S),
                (T.return = n),
                (n.child = T),
                (Pt = n),
                (st = null),
                (T = !0))
              : (T = !1);
          }
          T || wa(n);
        }
        if (
          ((S = n.memoizedState),
          S !== null && ((S = S.dehydrated), S !== null))
        )
          return (qf(S) ? (n.lanes = 32) : (n.lanes = 536870912), null);
        hr(n);
      }
      return (
        (S = i.children),
        (i = i.fallback),
        u
          ? (Ur(),
            (u = n.mode),
            (S = cs({ mode: "hidden", children: S }, u)),
            (i = ga(i, u, a, null)),
            (S.return = n),
            (i.return = n),
            (S.sibling = i),
            (n.child = S),
            (u = n.child),
            (u.memoizedState = nf(a)),
            (u.childLanes = rf(e, g, a)),
            (n.memoizedState = tf),
            i)
          : (Lr(n), af(n, S))
      );
    }
    if (
      ((T = e.memoizedState), T !== null && ((S = T.dehydrated), S !== null))
    ) {
      if (d)
        n.flags & 256
          ? (Lr(n), (n.flags &= -257), (n = lf(e, n, a)))
          : n.memoizedState !== null
            ? (Ur(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (Ur(),
              (u = i.fallback),
              (S = n.mode),
              (i = cs({ mode: "visible", children: i.children }, S)),
              (u = ga(u, S, a, null)),
              (u.flags |= 2),
              (i.return = n),
              (u.return = n),
              (i.sibling = u),
              (n.child = i),
              hl(n, e.child, null, a),
              (i = n.child),
              (i.memoizedState = nf(a)),
              (i.childLanes = rf(e, g, a)),
              (n.memoizedState = tf),
              (n = u));
      else if ((Lr(n), qf(S))) {
        if (((g = S.nextSibling && S.nextSibling.dataset), g)) var q = g.dgst;
        ((g = q),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = g),
          ui({ value: i, source: null, stack: null }),
          (n = lf(e, n, a)));
      } else if (
        (Et || ci(e, n, a, !1), (g = (a & e.childLanes) !== 0), Et || g)
      ) {
        if (
          ((g = tt),
          g !== null &&
            ((i = a & -a),
            (i = (i & 42) !== 0 ? 1 : Il(i)),
            (i = (i & (g.suspendedLanes | a)) !== 0 ? 0 : i),
            i !== 0 && i !== T.retryLane))
        )
          throw ((T.retryLane = i), nl(e, i), an(g, e, i), qp);
        (S.data === "$?" || Rf(), (n = lf(e, n, a)));
      } else
        S.data === "$?"
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = T.treeContext),
            (st = Tn(S.nextSibling)),
            (Pt = n),
            (Qe = !0),
            (Sa = null),
            (Hn = !1),
            e !== null &&
              ((mn[pn++] = sr),
              (mn[pn++] = ur),
              (mn[pn++] = va),
              (sr = e.id),
              (ur = e.overflow),
              (va = n)),
            (n = af(n, i.children)),
            (n.flags |= 4096));
      return n;
    }
    return u
      ? (Ur(),
        (u = i.fallback),
        (S = n.mode),
        (T = e.child),
        (q = T.sibling),
        (i = or(T, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = T.subtreeFlags & 65011712),
        q !== null ? (u = or(q, u)) : ((u = ga(u, S, a, null)), (u.flags |= 2)),
        (u.return = n),
        (i.return = n),
        (i.sibling = u),
        (n.child = i),
        (i = u),
        (u = n.child),
        (S = e.child.memoizedState),
        S === null
          ? (S = nf(a))
          : ((T = S.cachePool),
            T !== null
              ? ((q = vt._currentValue),
                (T = T.parent !== q ? { parent: q, pool: q } : T))
              : (T = jm()),
            (S = { baseLanes: S.baseLanes | a, cachePool: T })),
        (u.memoizedState = S),
        (u.childLanes = rf(e, g, a)),
        (n.memoizedState = tf),
        i)
      : (Lr(n),
        (a = e.child),
        (e = a.sibling),
        (a = or(a, { mode: "visible", children: i.children })),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((g = n.deletions),
          g === null ? ((n.deletions = [e]), (n.flags |= 16)) : g.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function af(e, n) {
    return (
      (n = cs({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function cs(e, n) {
    return (
      (e = Wt(22, e, null, n)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function lf(e, n, a) {
    return (
      hl(n, e.child, null, a),
      (e = af(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function $p(e, n, a) {
    e.lanes |= n;
    var i = e.alternate;
    (i !== null && (i.lanes |= n), xc(e.return, n, a));
  }
  function of(e, n, a, i, u) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: u,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = i),
        (d.tail = a),
        (d.tailMode = u));
  }
  function Jp(e, n, a) {
    var i = n.pendingProps,
      u = i.revealOrder,
      d = i.tail;
    if ((Tt(e, n, i.children, a), (i = bt.current), (i & 2) !== 0))
      ((i = (i & 1) | 2), (n.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $p(e, a, n);
          else if (e.tag === 19) $p(e, a, n);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      i &= 1;
    }
    switch ((ee(bt, i), u)) {
      case "forwards":
        for (a = n.child, u = null; a !== null; )
          ((e = a.alternate),
            e !== null && is(e) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = n.child), (n.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          of(n, !1, u, a, d));
        break;
      case "backwards":
        for (a = null, u = n.child, n.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && is(e) === null)) {
            n.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = a), (a = u), (u = e));
        }
        of(n, !0, a, null, d);
        break;
      case "together":
        of(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function mr(e, n, a) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Br |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((ci(e, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        e = n.child, a = or(e, e.pendingProps), n.child = a, a.return = n;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (a = a.sibling = or(e, e.pendingProps)),
          (a.return = n));
      a.sibling = null;
    }
    return n.child;
  }
  function sf(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Yo(e)));
  }
  function fS(e, n, a) {
    switch (n.tag) {
      case 3:
        (Fe(n, n.stateNode.containerInfo),
          Tr(n, vt, e.memoizedState.cache),
          si());
        break;
      case 27:
      case 5:
        We(n);
        break;
      case 4:
        Fe(n, n.stateNode.containerInfo);
        break;
      case 10:
        Tr(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Lr(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? Ip(e, n, a)
              : (Lr(n), (e = mr(e, n, a)), e !== null ? e.sibling : null);
        Lr(n);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((i = (a & n.childLanes) !== 0),
          i || (ci(e, n, a, !1), (i = (a & n.childLanes) !== 0)),
          u)
        ) {
          if (i) return Jp(e, n, a);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          ee(bt, bt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), Vp(e, n, a));
      case 24:
        Tr(n, vt, e.memoizedState.cache);
    }
    return mr(e, n, a);
  }
  function Wp(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) Et = !0;
      else {
        if (!sf(e, a) && (n.flags & 128) === 0) return ((Et = !1), fS(e, n, a));
        Et = (e.flags & 131072) !== 0;
      }
    else ((Et = !1), Qe && (n.flags & 1048576) !== 0 && Mm(n, Go, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var i = n.elementType,
            u = i._init;
          if (((i = u(i._payload)), (n.type = i), typeof i == "function"))
            yc(i)
              ? ((e = Aa(i, e)), (n.tag = 1), (n = Xp(null, n, i, e, a)))
              : ((n.tag = 0), (n = ef(null, n, i, e, a)));
          else {
            if (i != null) {
              if (((u = i.$$typeof), u === G)) {
                ((n.tag = 11), (n = Fp(null, n, i, e, a)));
                break e;
              } else if (u === K) {
                ((n.tag = 14), (n = Gp(null, n, i, e, a)));
                break e;
              }
            }
            throw ((n = se(i) || i), Error(o(306, n, "")));
          }
        }
        return n;
      case 0:
        return ef(e, n, n.type, n.pendingProps, a);
      case 1:
        return ((i = n.type), (u = Aa(i, n.pendingProps)), Xp(e, n, i, u, a));
      case 3:
        e: {
          if ((Fe(n, n.stateNode.containerInfo), e === null))
            throw Error(o(387));
          i = n.pendingProps;
          var d = n.memoizedState;
          ((u = d.element), Dc(e, n), gi(n, i, null, a));
          var g = n.memoizedState;
          if (
            ((i = g.cache),
            Tr(n, vt, i),
            i !== d.cache && Rc(n, [vt], a, !0),
            yi(),
            (i = g.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: i, isDehydrated: !1, cache: g.cache }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              n = Zp(e, n, i, a);
              break e;
            } else if (i !== u) {
              ((u = dn(Error(o(424)), n)), ui(u), (n = Zp(e, n, i, a)));
              break e;
            } else {
              switch (((e = n.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                st = Tn(e.firstChild),
                  Pt = n,
                  Qe = !0,
                  Sa = null,
                  Hn = !0,
                  a = _p(n, null, i, a),
                  n.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((si(), i === u)) {
              n = mr(e, n, a);
              break e;
            }
            Tt(e, n, i, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          us(e, n),
          e === null
            ? (a = ry(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : Qe ||
                ((a = n.type),
                (e = n.pendingProps),
                (i = Rs(me.current).createElement(a)),
                (i[te] = n),
                (i[le] = e),
                Dt(i, a, e),
                De(i),
                (n.stateNode = i))
            : (n.memoizedState = ry(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          We(n),
          e === null &&
            Qe &&
            ((i = n.stateNode = ey(n.type, n.pendingProps, me.current)),
            (Pt = n),
            (Hn = !0),
            (u = st),
            Gr(n.type) ? ((Ff = u), (st = Tn(i.firstChild))) : (st = u)),
          Tt(e, n, n.pendingProps.children, a),
          us(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            Qe &&
            ((u = i = st) &&
              ((i = BS(i, n.type, n.pendingProps, Hn)),
              i !== null
                ? ((n.stateNode = i),
                  (Pt = n),
                  (st = Tn(i.firstChild)),
                  (Hn = !1),
                  (u = !0))
                : (u = !1)),
            u || wa(n)),
          We(n),
          (u = n.type),
          (d = n.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (i = d.children),
          Hf(u, d) ? (i = null) : g !== null && Hf(u, g) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((u = jc(e, n, rS, null, null, a)), (Bi._currentValue = u)),
          us(e, n),
          Tt(e, n, i, a),
          n.child
        );
      case 6:
        return (
          e === null &&
            Qe &&
            ((e = a = st) &&
              ((a = kS(a, n.pendingProps, Hn)),
              a !== null
                ? ((n.stateNode = a), (Pt = n), (st = null), (e = !0))
                : (e = !1)),
            e || wa(n)),
          null
        );
      case 13:
        return Ip(e, n, a);
      case 4:
        return (
          Fe(n, n.stateNode.containerInfo),
          (i = n.pendingProps),
          e === null ? (n.child = hl(n, null, i, a)) : Tt(e, n, i, a),
          n.child
        );
      case 11:
        return Fp(e, n, n.type, n.pendingProps, a);
      case 7:
        return (Tt(e, n, n.pendingProps, a), n.child);
      case 8:
        return (Tt(e, n, n.pendingProps.children, a), n.child);
      case 12:
        return (Tt(e, n, n.pendingProps.children, a), n.child);
      case 10:
        return (
          (i = n.pendingProps),
          Tr(n, n.type, i.value),
          Tt(e, n, i.children, a),
          n.child
        );
      case 9:
        return (
          (u = n.type._context),
          (i = n.pendingProps.children),
          xa(n),
          (u = Lt(u)),
          (i = i(u)),
          (n.flags |= 1),
          Tt(e, n, i, a),
          n.child
        );
      case 14:
        return Gp(e, n, n.type, n.pendingProps, a);
      case 15:
        return Yp(e, n, n.type, n.pendingProps, a);
      case 19:
        return Jp(e, n, a);
      case 31:
        return (
          (i = n.pendingProps),
          (a = n.mode),
          (i = { mode: i.mode, children: i.children }),
          e === null
            ? ((a = cs(i, a)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a))
            : ((a = or(e.child, i)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a)),
          n
        );
      case 22:
        return Vp(e, n, a);
      case 24:
        return (
          xa(n),
          (i = Lt(vt)),
          e === null
            ? ((u = Oc()),
              u === null &&
                ((u = tt),
                (d = Cc()),
                (u.pooledCache = d),
                d.refCount++,
                d !== null && (u.pooledCacheLanes |= a),
                (u = d)),
              (n.memoizedState = { parent: i, cache: u }),
              Mc(n),
              Tr(n, vt, u))
            : ((e.lanes & a) !== 0 && (Dc(e, n), gi(n, null, null, a), yi()),
              (u = e.memoizedState),
              (d = n.memoizedState),
              u.parent !== i
                ? ((u = { parent: i, cache: i }),
                  (n.memoizedState = u),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = u),
                  Tr(n, vt, i))
                : ((i = d.cache),
                  Tr(n, vt, i),
                  i !== u.cache && Rc(n, [vt], a, !0))),
          Tt(e, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function pr(e) {
    e.flags |= 4;
  }
  function e0(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !sy(n))) {
      if (
        ((n = yn.current),
        n !== null &&
          ((Ge & 4194048) === Ge
            ? Bn !== null
            : ((Ge & 62914560) !== Ge && (Ge & 536870912) === 0) || n !== Bn))
      )
        throw ((mi = Tc), Pm);
      e.flags |= 8192;
    }
  }
  function fs(e, n) {
    (n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? Co() : 536870912), (e.lanes |= n), (gl |= n)));
  }
  function Ri(e, n) {
    if (!Qe)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var i = null; a !== null; )
            (a.alternate !== null && (i = a), (a = a.sibling));
          i === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function it(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      i = 0;
    if (n)
      for (var u = e.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags & 65011712),
          (i |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags),
          (i |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= i), (e.childLanes = a), n);
  }
  function dS(e, n, a) {
    var i = n.pendingProps;
    switch ((Sc(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (it(n), null);
      case 1:
        return (it(n), null);
      case 3:
        return (
          (a = n.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          fr(vt),
          Ct(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (oi(n)
              ? pr(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Nm())),
          it(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          e === null
            ? (pr(n),
              a !== null ? (it(n), e0(n, a)) : (it(n), (n.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (pr(n), it(n), e0(n, a))
                : (it(n), (n.flags &= -16777217))
              : (e.memoizedProps !== i && pr(n), it(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        (At(n), (a = me.current));
        var u = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== i && pr(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(o(166));
            return (it(n), null);
          }
          ((e = ie.current),
            oi(n) ? Dm(n) : ((e = ey(u, i, a)), (n.stateNode = e), pr(n)));
        }
        return (it(n), null);
      case 5:
        if ((At(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== i && pr(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(o(166));
            return (it(n), null);
          }
          if (((e = ie.current), oi(n))) Dm(n);
          else {
            switch (((u = Rs(me.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((e = u.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof i.is == "string"
                        ? u.createElement("select", { is: i.is })
                        : u.createElement("select")),
                      i.multiple
                        ? (e.multiple = !0)
                        : i.size && (e.size = i.size));
                    break;
                  default:
                    e =
                      typeof i.is == "string"
                        ? u.createElement(a, { is: i.is })
                        : u.createElement(a);
                }
            }
            ((e[te] = n), (e[le] = i));
            e: for (u = n.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === n) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === n) break e;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            n.stateNode = e;
            e: switch ((Dt(e, a, i), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!i.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && pr(n);
          }
        }
        return (it(n), (n.flags &= -16777217), null);
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== i && pr(n);
        else {
          if (typeof i != "string" && n.stateNode === null) throw Error(o(166));
          if (((e = me.current), oi(n))) {
            if (
              ((e = n.stateNode),
              (a = n.memoizedProps),
              (i = null),
              (u = Pt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  i = u.memoizedProps;
              }
            ((e[te] = n),
              (e = !!(
                e.nodeValue === a ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                K0(e.nodeValue, a)
              )),
              e || wa(n));
          } else
            ((e = Rs(e).createTextNode(i)), (e[te] = n), (n.stateNode = e));
        }
        return (it(n), null);
      case 13:
        if (
          ((i = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = oi(n)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[te] = n;
            } else
              (si(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (it(n), (u = !1));
          } else
            ((u = Nm()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return n.flags & 256 ? (hr(n), n) : (hr(n), null);
        }
        if ((hr(n), (n.flags & 128) !== 0)) return ((n.lanes = a), n);
        if (
          ((a = i !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          ((i = n.child),
            (u = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (u = i.alternate.memoizedState.cachePool.pool));
          var d = null;
          (i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (d = i.memoizedState.cachePool.pool),
            d !== u && (i.flags |= 2048));
        }
        return (
          a !== e && a && (n.child.flags |= 8192),
          fs(n, n.updateQueue),
          it(n),
          null
        );
      case 4:
        return (Ct(), e === null && Lf(n.stateNode.containerInfo), it(n), null);
      case 10:
        return (fr(n.type), it(n), null);
      case 19:
        if ((re(bt), (u = n.memoizedState), u === null)) return (it(n), null);
        if (((i = (n.flags & 128) !== 0), (d = u.rendering), d === null))
          if (i) Ri(u, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((d = is(e)), d !== null)) {
                  for (
                    n.flags |= 128,
                      Ri(u, !1),
                      e = d.updateQueue,
                      n.updateQueue = e,
                      fs(n, e),
                      n.subtreeFlags = 0,
                      e = a,
                      a = n.child;
                    a !== null;

                  )
                    (Tm(a, e), (a = a.sibling));
                  return (ee(bt, (bt.current & 1) | 2), n.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              It() > ms &&
              ((n.flags |= 128), (i = !0), Ri(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = is(d)), e !== null)) {
              if (
                ((n.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                fs(n, e),
                Ri(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !d.alternate &&
                  !Qe)
              )
                return (it(n), null);
            } else
              2 * It() - u.renderingStartTime > ms &&
                a !== 536870912 &&
                ((n.flags |= 128), (i = !0), Ri(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((e = u.last),
              e !== null ? (e.sibling = d) : (n.child = d),
              (u.last = d));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = It()),
            (n.sibling = null),
            (e = bt.current),
            ee(bt, i ? (e & 1) | 2 : e & 1),
            n)
          : (it(n), null);
      case 22:
      case 23:
        return (
          hr(n),
          Uc(),
          (i = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (n.flags |= 8192)
            : i && (n.flags |= 8192),
          i
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (it(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : it(n),
          (a = n.updateQueue),
          a !== null && fs(n, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (i = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
          i !== a && (n.flags |= 2048),
          e !== null && re(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          fr(vt),
          it(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function hS(e, n) {
    switch ((Sc(n), n.tag)) {
      case 1:
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          fr(vt),
          Ct(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (At(n), null);
      case 13:
        if (
          (hr(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          si();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return (re(bt), null);
      case 4:
        return (Ct(), null);
      case 10:
        return (fr(n.type), null);
      case 22:
      case 23:
        return (
          hr(n),
          Uc(),
          e !== null && re(Ra),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return (fr(vt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function t0(e, n) {
    switch ((Sc(n), n.tag)) {
      case 3:
        (fr(vt), Ct());
        break;
      case 26:
      case 27:
      case 5:
        At(n);
        break;
      case 4:
        Ct();
        break;
      case 13:
        hr(n);
        break;
      case 19:
        re(bt);
        break;
      case 10:
        fr(n.type);
        break;
      case 22:
      case 23:
        (hr(n), Uc(), e !== null && re(Ra));
        break;
      case 24:
        fr(vt);
    }
  }
  function Ci(e, n) {
    try {
      var a = n.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            i = void 0;
            var d = a.create,
              g = a.inst;
            ((i = d()), (g.destroy = i));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (S) {
      et(n, n.return, S);
    }
  }
  function zr(e, n, a) {
    try {
      var i = n.updateQueue,
        u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        i = d;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst,
              S = g.destroy;
            if (S !== void 0) {
              ((g.destroy = void 0), (u = n));
              var T = a,
                q = S;
              try {
                q();
              } catch (I) {
                et(u, T, I);
              }
            }
          }
          i = i.next;
        } while (i !== d);
      }
    } catch (I) {
      et(n, n.return, I);
    }
  }
  function n0(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        Gm(n, a);
      } catch (i) {
        et(e, e.return, i);
      }
    }
  }
  function r0(e, n, a) {
    ((a.props = Aa(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (i) {
      et(e, n, i);
    }
  }
  function Ai(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(i)) : (a.current = i);
      }
    } catch (u) {
      et(e, n, u);
    }
  }
  function kn(e, n) {
    var a = e.ref,
      i = e.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (u) {
          et(e, n, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          et(e, n, u);
        }
      else a.current = null;
  }
  function a0(e) {
    var n = e.type,
      a = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break e;
        case "img":
          a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (u) {
      et(e, e.return, u);
    }
  }
  function uf(e, n, a) {
    try {
      var i = e.stateNode;
      (US(i, e.type, a, n), (i[le] = n));
    } catch (u) {
      et(e, e.return, u);
    }
  }
  function l0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Gr(e.type)) ||
      e.tag === 4
    );
  }
  function cf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || l0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Gr(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ff(e, n, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode),
        n
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, n)
          : ((n =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            n.appendChild(e),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = xs)));
    else if (
      i !== 4 &&
      (i === 27 && Gr(e.type) && ((a = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (ff(e, n, a), e = e.sibling; e !== null; )
        (ff(e, n, a), (e = e.sibling));
  }
  function ds(e, n, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode), n ? a.insertBefore(e, n) : a.appendChild(e));
    else if (
      i !== 4 &&
      (i === 27 && Gr(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (ds(e, n, a), e = e.sibling; e !== null; )
        (ds(e, n, a), (e = e.sibling));
  }
  function i0(e) {
    var n = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var i = e.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      (Dt(n, i, a), (n[te] = e), (n[le] = a));
    } catch (d) {
      et(e, e.return, d);
    }
  }
  var yr = !1,
    ft = !1,
    df = !1,
    o0 = typeof WeakSet == "function" ? WeakSet : Set,
    xt = null;
  function mS(e, n) {
    if (((e = e.containerInfo), (jf = Ds), (e = vm(e)), uc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var u = i.anchorOffset,
              d = i.focusNode;
            i = i.focusOffset;
            try {
              (a.nodeType, d.nodeType);
            } catch {
              a = null;
              break e;
            }
            var g = 0,
              S = -1,
              T = -1,
              q = 0,
              I = 0,
              W = e,
              F = null;
            t: for (;;) {
              for (
                var Y;
                W !== a || (u !== 0 && W.nodeType !== 3) || (S = g + u),
                  W !== d || (i !== 0 && W.nodeType !== 3) || (T = g + i),
                  W.nodeType === 3 && (g += W.nodeValue.length),
                  (Y = W.firstChild) !== null;

              )
                ((F = W), (W = Y));
              for (;;) {
                if (W === e) break t;
                if (
                  (F === a && ++q === u && (S = g),
                  F === d && ++I === i && (T = g),
                  (Y = W.nextSibling) !== null)
                )
                  break;
                ((W = F), (F = W.parentNode));
              }
              W = Y;
            }
            a = S === -1 || T === -1 ? null : { start: S, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Pf = { focusedElem: e, selectionRange: a }, Ds = !1, xt = n;
      xt !== null;

    )
      if (
        ((n = xt), (e = n.child), (n.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = n), (xt = e));
      else
        for (; xt !== null; ) {
          switch (((n = xt), (d = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                ((e = void 0),
                  (a = n),
                  (u = d.memoizedProps),
                  (d = d.memoizedState),
                  (i = a.stateNode));
                try {
                  var Me = Aa(a.type, u, a.elementType === a.type);
                  ((e = i.getSnapshotBeforeUpdate(Me, d)),
                    (i.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Ae) {
                  et(a, a.return, Ae);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  kf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (xt = e));
            break;
          }
          xt = n.return;
        }
  }
  function s0(e, n, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (jr(e, a), i & 4 && Ci(5, a));
        break;
      case 1:
        if ((jr(e, a), i & 4))
          if (((e = a.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (g) {
              et(a, a.return, g);
            }
          else {
            var u = Aa(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(u, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              et(a, a.return, g);
            }
          }
        (i & 64 && n0(a), i & 512 && Ai(a, a.return));
        break;
      case 3:
        if ((jr(e, a), i & 64 && ((e = a.updateQueue), e !== null))) {
          if (((n = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            Gm(e, n);
          } catch (g) {
            et(a, a.return, g);
          }
        }
        break;
      case 27:
        n === null && i & 4 && i0(a);
      case 26:
      case 5:
        (jr(e, a), n === null && i & 4 && a0(a), i & 512 && Ai(a, a.return));
        break;
      case 12:
        jr(e, a);
        break;
      case 13:
        (jr(e, a),
          i & 4 && f0(e, a),
          i & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = xS.bind(null, a)), qS(e, a)))));
        break;
      case 22:
        if (((i = a.memoizedState !== null || yr), !i)) {
          ((n = (n !== null && n.memoizedState !== null) || ft), (u = yr));
          var d = ft;
          ((yr = i),
            (ft = n) && !d ? Pr(e, a, (a.subtreeFlags & 8772) !== 0) : jr(e, a),
            (yr = u),
            (ft = d));
        }
        break;
      case 30:
        break;
      default:
        jr(e, a);
    }
  }
  function u0(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), u0(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && ge(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var rt = null,
    Yt = !1;
  function gr(e, n, a) {
    for (a = a.child; a !== null; ) (c0(e, n, a), (a = a.sibling));
  }
  function c0(e, n, a) {
    if (at && typeof at.onCommitFiberUnmount == "function")
      try {
        at.onCommitFiberUnmount(kt, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ft || kn(a, n),
          gr(e, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ft || kn(a, n);
        var i = rt,
          u = Yt;
        (Gr(a.type) && ((rt = a.stateNode), (Yt = !1)),
          gr(e, n, a),
          zi(a.stateNode),
          (rt = i),
          (Yt = u));
        break;
      case 5:
        ft || kn(a, n);
      case 6:
        if (
          ((i = rt),
          (u = Yt),
          (rt = null),
          gr(e, n, a),
          (rt = i),
          (Yt = u),
          rt !== null)
        )
          if (Yt)
            try {
              (rt.nodeType === 9
                ? rt.body
                : rt.nodeName === "HTML"
                  ? rt.ownerDocument.body
                  : rt
              ).removeChild(a.stateNode);
            } catch (d) {
              et(a, n, d);
            }
          else
            try {
              rt.removeChild(a.stateNode);
            } catch (d) {
              et(a, n, d);
            }
        break;
      case 18:
        rt !== null &&
          (Yt
            ? ((e = rt),
              J0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              Gi(e))
            : J0(rt, a.stateNode));
        break;
      case 4:
        ((i = rt),
          (u = Yt),
          (rt = a.stateNode.containerInfo),
          (Yt = !0),
          gr(e, n, a),
          (rt = i),
          (Yt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ft || zr(2, a, n), ft || zr(4, a, n), gr(e, n, a));
        break;
      case 1:
        (ft ||
          (kn(a, n),
          (i = a.stateNode),
          typeof i.componentWillUnmount == "function" && r0(a, n, i)),
          gr(e, n, a));
        break;
      case 21:
        gr(e, n, a);
        break;
      case 22:
        ((ft = (i = ft) || a.memoizedState !== null), gr(e, n, a), (ft = i));
        break;
      default:
        gr(e, n, a);
    }
  }
  function f0(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Gi(e);
      } catch (a) {
        et(n, n.return, a);
      }
  }
  function pS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return (n === null && (n = e.stateNode = new o0()), n);
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new o0()),
          n
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function hf(e, n) {
    var a = pS(e);
    n.forEach(function (i) {
      var u = RS.bind(null, e, i);
      a.has(i) || (a.add(i), i.then(u, u));
    });
  }
  function en(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var u = a[i],
          d = e,
          g = n,
          S = g;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Gr(S.type)) {
                ((rt = S.stateNode), (Yt = !1));
                break e;
              }
              break;
            case 5:
              ((rt = S.stateNode), (Yt = !1));
              break e;
            case 3:
            case 4:
              ((rt = S.stateNode.containerInfo), (Yt = !0));
              break e;
          }
          S = S.return;
        }
        if (rt === null) throw Error(o(160));
        (c0(d, g, u),
          (rt = null),
          (Yt = !1),
          (d = u.alternate),
          d !== null && (d.return = null),
          (u.return = null));
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) (d0(n, e), (n = n.sibling));
  }
  var On = null;
  function d0(e, n) {
    var a = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (en(n, e),
          tn(e),
          i & 4 && (zr(3, e, e.return), Ci(3, e), zr(5, e, e.return)));
        break;
      case 1:
        (en(n, e),
          tn(e),
          i & 512 && (ft || a === null || kn(a, a.return)),
          i & 64 &&
            yr &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? i : a.concat(i))))));
        break;
      case 26:
        var u = On;
        if (
          (en(n, e),
          tn(e),
          i & 512 && (ft || a === null || kn(a, a.return)),
          i & 4)
        ) {
          var d = a !== null ? a.memoizedState : null;
          if (((i = e.memoizedState), a === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  ((i = e.type),
                    (a = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (i) {
                    case "title":
                      ((d = u.getElementsByTagName("title")[0]),
                        (!d ||
                          d[ye] ||
                          d[te] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = u.createElement(i)),
                          u.head.insertBefore(
                            d,
                            u.querySelector("head > title"),
                          )),
                        Dt(d, i, a),
                        (d[te] = e),
                        De(d),
                        (i = d));
                      break e;
                    case "link":
                      var g = iy("link", "href", u).get(i + (a.href || ""));
                      if (g) {
                        for (var S = 0; S < g.length; S++)
                          if (
                            ((d = g[S]),
                            d.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              d.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              d.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              d.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            g.splice(S, 1);
                            break t;
                          }
                      }
                      ((d = u.createElement(i)),
                        Dt(d, i, a),
                        u.head.appendChild(d));
                      break;
                    case "meta":
                      if (
                        (g = iy("meta", "content", u).get(
                          i + (a.content || ""),
                        ))
                      ) {
                        for (S = 0; S < g.length; S++)
                          if (
                            ((d = g[S]),
                            d.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              d.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              d.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            g.splice(S, 1);
                            break t;
                          }
                      }
                      ((d = u.createElement(i)),
                        Dt(d, i, a),
                        u.head.appendChild(d));
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  ((d[te] = e), De(d), (i = d));
                }
                e.stateNode = i;
              } else oy(u, e.type, e.stateNode);
            else e.stateNode = ly(u, i, e.memoizedProps);
          else
            d !== i
              ? (d === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                i === null
                  ? oy(u, e.type, e.stateNode)
                  : ly(u, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                uf(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (en(n, e),
          tn(e),
          i & 512 && (ft || a === null || kn(a, a.return)),
          a !== null && i & 4 && uf(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (en(n, e),
          tn(e),
          i & 512 && (ft || a === null || kn(a, a.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Za(u, "");
          } catch (Y) {
            et(e, e.return, Y);
          }
        }
        (i & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), uf(e, u, a !== null ? a.memoizedProps : u)),
          i & 1024 && (df = !0));
        break;
      case 6:
        if ((en(n, e), tn(e), i & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((i = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = i;
          } catch (Y) {
            et(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((Os = null),
          (u = On),
          (On = Cs(n.containerInfo)),
          en(n, e),
          (On = u),
          tn(e),
          i & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Gi(n.containerInfo);
          } catch (Y) {
            et(e, e.return, Y);
          }
        df && ((df = !1), h0(e));
        break;
      case 4:
        ((i = On),
          (On = Cs(e.stateNode.containerInfo)),
          en(n, e),
          tn(e),
          (On = i));
        break;
      case 12:
        (en(n, e), tn(e));
        break;
      case 13:
        (en(n, e),
          tn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (bf = It()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), hf(e, i))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var T = a !== null && a.memoizedState !== null,
          q = yr,
          I = ft;
        if (
          ((yr = q || u),
          (ft = I || T),
          en(n, e),
          (ft = I),
          (yr = q),
          tn(e),
          i & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = u ? n._visibility & -2 : n._visibility | 1,
              u && (a === null || T || yr || ft || Oa(e)),
              a = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                T = a = n;
                try {
                  if (((d = T.stateNode), u))
                    ((g = d.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none"));
                  else {
                    S = T.stateNode;
                    var W = T.memoizedProps.style,
                      F =
                        W != null && W.hasOwnProperty("display")
                          ? W.display
                          : null;
                    S.style.display =
                      F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Y) {
                  et(T, T.return, Y);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                } catch (Y) {
                  et(T, T.return, Y);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              (a === n && (a = null), (n = n.return));
            }
            (a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((a = i.retryQueue),
            a !== null && ((i.retryQueue = null), hf(e, a))));
        break;
      case 19:
        (en(n, e),
          tn(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), hf(e, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (en(n, e), tn(e));
    }
  }
  function tn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, i = e.return; i !== null; ) {
          if (l0(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              d = cf(e);
            ds(e, d, u);
            break;
          case 5:
            var g = a.stateNode;
            a.flags & 32 && (Za(g, ""), (a.flags &= -33));
            var S = cf(e);
            ds(e, S, g);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo,
              q = cf(e);
            ff(e, q, T);
            break;
          default:
            throw Error(o(161));
        }
      } catch (I) {
        et(e, e.return, I);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function h0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        (h0(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function jr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (s0(e, n.alternate, n), (n = n.sibling));
  }
  function Oa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (zr(4, n, n.return), Oa(n));
          break;
        case 1:
          kn(n, n.return);
          var a = n.stateNode;
          (typeof a.componentWillUnmount == "function" && r0(n, n.return, a),
            Oa(n));
          break;
        case 27:
          zi(n.stateNode);
        case 26:
        case 5:
          (kn(n, n.return), Oa(n));
          break;
        case 22:
          n.memoizedState === null && Oa(n);
          break;
        case 30:
          Oa(n);
          break;
        default:
          Oa(n);
      }
      e = e.sibling;
    }
  }
  function Pr(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate,
        u = e,
        d = n,
        g = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Pr(u, d, a), Ci(4, d));
          break;
        case 1:
          if (
            (Pr(u, d, a),
            (i = d),
            (u = i.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (q) {
              et(i, i.return, q);
            }
          if (((i = d), (u = i.updateQueue), u !== null)) {
            var S = i.stateNode;
            try {
              var T = u.shared.hiddenCallbacks;
              if (T !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)
                  Fm(T[u], S);
            } catch (q) {
              et(i, i.return, q);
            }
          }
          (a && g & 64 && n0(d), Ai(d, d.return));
          break;
        case 27:
          i0(d);
        case 26:
        case 5:
          (Pr(u, d, a), a && i === null && g & 4 && a0(d), Ai(d, d.return));
          break;
        case 12:
          Pr(u, d, a);
          break;
        case 13:
          (Pr(u, d, a), a && g & 4 && f0(u, d));
          break;
        case 22:
          (d.memoizedState === null && Pr(u, d, a), Ai(d, d.return));
          break;
        case 30:
          break;
        default:
          Pr(u, d, a);
      }
      n = n.sibling;
    }
  }
  function mf(e, n) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && fi(a)));
  }
  function pf(e, n) {
    ((e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && fi(e)));
  }
  function qn(e, n, a, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (m0(e, n, a, i), (n = n.sibling));
  }
  function m0(e, n, a, i) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (qn(e, n, a, i), u & 2048 && Ci(9, n));
        break;
      case 1:
        qn(e, n, a, i);
        break;
      case 3:
        (qn(e, n, a, i),
          u & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && fi(e))));
        break;
      case 12:
        if (u & 2048) {
          (qn(e, n, a, i), (e = n.stateNode));
          try {
            var d = n.memoizedProps,
              g = d.id,
              S = d.onPostCommit;
            typeof S == "function" &&
              S(
                g,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            et(n, n.return, T);
          }
        } else qn(e, n, a, i);
        break;
      case 13:
        qn(e, n, a, i);
        break;
      case 23:
        break;
      case 22:
        ((d = n.stateNode),
          (g = n.alternate),
          n.memoizedState !== null
            ? d._visibility & 2
              ? qn(e, n, a, i)
              : Oi(e, n)
            : d._visibility & 2
              ? qn(e, n, a, i)
              : ((d._visibility |= 2),
                ml(e, n, a, i, (n.subtreeFlags & 10256) !== 0)),
          u & 2048 && mf(g, n));
        break;
      case 24:
        (qn(e, n, a, i), u & 2048 && pf(n.alternate, n));
        break;
      default:
        qn(e, n, a, i);
    }
  }
  function ml(e, n, a, i, u) {
    for (u = u && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var d = e,
        g = n,
        S = a,
        T = i,
        q = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          (ml(d, g, S, T, u), Ci(8, g));
          break;
        case 23:
          break;
        case 22:
          var I = g.stateNode;
          (g.memoizedState !== null
            ? I._visibility & 2
              ? ml(d, g, S, T, u)
              : Oi(d, g)
            : ((I._visibility |= 2), ml(d, g, S, T, u)),
            u && q & 2048 && mf(g.alternate, g));
          break;
        case 24:
          (ml(d, g, S, T, u), u && q & 2048 && pf(g.alternate, g));
          break;
        default:
          ml(d, g, S, T, u);
      }
      n = n.sibling;
    }
  }
  function Oi(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e,
          i = n,
          u = i.flags;
        switch (i.tag) {
          case 22:
            (Oi(a, i), u & 2048 && mf(i.alternate, i));
            break;
          case 24:
            (Oi(a, i), u & 2048 && pf(i.alternate, i));
            break;
          default:
            Oi(a, i);
        }
        n = n.sibling;
      }
  }
  var Ti = 8192;
  function pl(e) {
    if (e.subtreeFlags & Ti)
      for (e = e.child; e !== null; ) (p0(e), (e = e.sibling));
  }
  function p0(e) {
    switch (e.tag) {
      case 26:
        (pl(e),
          e.flags & Ti &&
            e.memoizedState !== null &&
            ew(On, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        pl(e);
        break;
      case 3:
      case 4:
        var n = On;
        ((On = Cs(e.stateNode.containerInfo)), pl(e), (On = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ti), (Ti = 16777216), pl(e), (Ti = n))
            : pl(e));
        break;
      default:
        pl(e);
    }
  }
  function y0(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do ((n = e.sibling), (e.sibling = null), (e = n));
      while (e !== null);
    }
  }
  function Mi(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          ((xt = i), v0(i, e));
        }
      y0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (g0(e), (e = e.sibling));
  }
  function g0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Mi(e), e.flags & 2048 && zr(9, e, e.return));
        break;
      case 3:
        Mi(e);
        break;
      case 12:
        Mi(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), hs(e))
          : Mi(e);
        break;
      default:
        Mi(e);
    }
  }
  function hs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          ((xt = i), v0(i, e));
        }
      y0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          (zr(8, n, n.return), hs(n));
          break;
        case 22:
          ((a = n.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), hs(n)));
          break;
        default:
          hs(n);
      }
      e = e.sibling;
    }
  }
  function v0(e, n) {
    for (; xt !== null; ) {
      var a = xt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          zr(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          fi(a.memoizedState.cache);
      }
      if (((i = a.child), i !== null)) ((i.return = a), (xt = i));
      else
        e: for (a = e; xt !== null; ) {
          i = xt;
          var u = i.sibling,
            d = i.return;
          if ((u0(i), i === a)) {
            xt = null;
            break e;
          }
          if (u !== null) {
            ((u.return = d), (xt = u));
            break e;
          }
          xt = d;
        }
    }
  }
  var yS = {
      getCacheForType: function (e) {
        var n = Lt(vt),
          a = n.data.get(e);
        return (a === void 0 && ((a = e()), n.data.set(e, a)), a);
      },
    },
    gS = typeof WeakMap == "function" ? WeakMap : Map,
    Ke = 0,
    tt = null,
    Be = null,
    Ge = 0,
    Xe = 0,
    nn = null,
    Hr = !1,
    yl = !1,
    yf = !1,
    vr = 0,
    ut = 0,
    Br = 0,
    Ta = 0,
    gf = 0,
    gn = 0,
    gl = 0,
    Di = null,
    Vt = null,
    vf = !1,
    bf = 0,
    ms = 1 / 0,
    ps = null,
    kr = null,
    Mt = 0,
    qr = null,
    vl = null,
    bl = 0,
    Sf = 0,
    wf = null,
    b0 = null,
    _i = 0,
    Ef = null;
  function rn() {
    if ((Ke & 2) !== 0 && Ge !== 0) return Ge & -Ge;
    if (N.T !== null) {
      var e = il;
      return e !== 0 ? e : Mf();
    }
    return D();
  }
  function S0() {
    gn === 0 && (gn = (Ge & 536870912) === 0 || Qe ? Va() : 536870912);
    var e = yn.current;
    return (e !== null && (e.flags |= 32), gn);
  }
  function an(e, n, a) {
    (((e === tt && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null) &&
      (Sl(e, 0), Fr(e, Ge, gn, !1)),
      fa(e, a),
      ((Ke & 2) === 0 || e !== tt) &&
        (e === tt &&
          ((Ke & 2) === 0 && (Ta |= a), ut === 4 && Fr(e, Ge, gn, !1)),
        Fn(e)));
  }
  function w0(e, n, a) {
    if ((Ke & 6) !== 0) throw Error(o(327));
    var i = (!a && (n & 124) === 0 && (n & e.expiredLanes) === 0) || jn(e, n),
      u = i ? SS(e, n) : Cf(e, n, !0),
      d = i;
    do {
      if (u === 0) {
        yl && !i && Fr(e, n, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), d && !vS(a))) {
          ((u = Cf(e, n, !1)), (d = !1));
          continue;
        }
        if (u === 2) {
          if (((d = n), e.errorRecoveryDisabledLanes & d)) var g = 0;
          else
            ((g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0));
          if (g !== 0) {
            n = g;
            e: {
              var S = e;
              u = Di;
              var T = S.current.memoizedState.isDehydrated;
              if ((T && (Sl(S, g).flags |= 256), (g = Cf(S, g, !1)), g !== 2)) {
                if (yf && !T) {
                  ((S.errorRecoveryDisabledLanes |= d), (Ta |= d), (u = 4));
                  break e;
                }
                ((d = Vt),
                  (Vt = u),
                  d !== null &&
                    (Vt === null ? (Vt = d) : Vt.push.apply(Vt, d)));
              }
              u = g;
            }
            if (((d = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Sl(e, 0), Fr(e, n, 0, !0));
          break;
        }
        e: {
          switch (((i = e), (d = u), d)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fr(i, n, gn, !Hr);
              break e;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && ((u = bf + 300 - It()), 10 < u)) {
            if ((Fr(i, n, gn, !Hr), ca(i, 0, !0) !== 0)) break e;
            i.timeoutHandle = I0(
              E0.bind(null, i, a, Vt, ps, vf, n, gn, Ta, gl, Hr, d, 2, -0, 0),
              u,
            );
            break e;
          }
          E0(i, a, Vt, ps, vf, n, gn, Ta, gl, Hr, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Fn(e);
  }
  function E0(e, n, a, i, u, d, g, S, T, q, I, W, F, Y) {
    if (
      ((e.timeoutHandle = -1),
      (W = n.subtreeFlags),
      (W & 8192 || (W & 16785408) === 16785408) &&
        ((Hi = { stylesheets: null, count: 0, unsuspend: WS }),
        p0(n),
        (W = tw()),
        W !== null))
    ) {
      ((e.cancelPendingCommit = W(
        M0.bind(null, e, n, d, a, i, u, g, S, T, I, 1, F, Y),
      )),
        Fr(e, d, g, !q));
      return;
    }
    M0(e, n, d, a, i, u, g, S, T);
  }
  function vS(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var i = 0; i < a.length; i++) {
          var u = a[i],
            d = u.getSnapshot;
          u = u.value;
          try {
            if (!Jt(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        ((a.return = n), (n = a));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function Fr(e, n, a, i) {
    ((n &= ~gf),
      (n &= ~Ta),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      i && (e.warmLanes |= n),
      (i = e.expirationTimes));
    for (var u = n; 0 < u; ) {
      var d = 31 - Ot(u),
        g = 1 << d;
      ((i[d] = -1), (u &= ~g));
    }
    a !== 0 && da(e, a, n);
  }
  function ys() {
    return (Ke & 6) === 0 ? (Ni(0), !1) : !0;
  }
  function xf() {
    if (Be !== null) {
      if (Xe === 0) var e = Be.return;
      else ((e = Be), (cr = Ea = null), Bc(e), (dl = null), (Ei = 0), (e = Be));
      for (; e !== null; ) (t0(e.alternate, e), (e = e.return));
      Be = null;
    }
  }
  function Sl(e, n) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), jS(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      xf(),
      (tt = e),
      (Be = a = or(e.current, null)),
      (Ge = n),
      (Xe = 0),
      (nn = null),
      (Hr = !1),
      (yl = jn(e, n)),
      (yf = !1),
      (gl = gn = gf = Ta = Br = ut = 0),
      (Vt = Di = null),
      (vf = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= n; 0 < i; ) {
        var u = 31 - Ot(i),
          d = 1 << u;
        ((n |= e[u]), (i &= ~d));
      }
    return ((vr = n), Ho(), a);
  }
  function x0(e, n) {
    ((ze = null),
      (N.H = rs),
      n === hi || n === Ko
        ? ((n = km()), (Xe = 3))
        : n === Pm
          ? ((n = km()), (Xe = 4))
          : (Xe =
              n === qp
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (nn = n),
      Be === null && ((ut = 1), ss(e, dn(n, e.current))));
  }
  function R0() {
    var e = N.H;
    return ((N.H = rs), e === null ? rs : e);
  }
  function C0() {
    var e = N.A;
    return ((N.A = yS), e);
  }
  function Rf() {
    ((ut = 4),
      Hr || ((Ge & 4194048) !== Ge && yn.current !== null) || (yl = !0),
      ((Br & 134217727) === 0 && (Ta & 134217727) === 0) ||
        tt === null ||
        Fr(tt, Ge, gn, !1));
  }
  function Cf(e, n, a) {
    var i = Ke;
    Ke |= 2;
    var u = R0(),
      d = C0();
    ((tt !== e || Ge !== n) && ((ps = null), Sl(e, n)), (n = !1));
    var g = ut;
    e: do
      try {
        if (Xe !== 0 && Be !== null) {
          var S = Be,
            T = nn;
          switch (Xe) {
            case 8:
              (xf(), (g = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yn.current === null && (n = !0);
              var q = Xe;
              if (((Xe = 0), (nn = null), wl(e, S, T, q), a && yl)) {
                g = 0;
                break e;
              }
              break;
            default:
              ((q = Xe), (Xe = 0), (nn = null), wl(e, S, T, q));
          }
        }
        (bS(), (g = ut));
        break;
      } catch (I) {
        x0(e, I);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (cr = Ea = null),
      (Ke = i),
      (N.H = u),
      (N.A = d),
      Be === null && ((tt = null), (Ge = 0), Ho()),
      g
    );
  }
  function bS() {
    for (; Be !== null; ) A0(Be);
  }
  function SS(e, n) {
    var a = Ke;
    Ke |= 2;
    var i = R0(),
      u = C0();
    tt !== e || Ge !== n
      ? ((ps = null), (ms = It() + 500), Sl(e, n))
      : (yl = jn(e, n));
    e: do
      try {
        if (Xe !== 0 && Be !== null) {
          n = Be;
          var d = nn;
          t: switch (Xe) {
            case 1:
              ((Xe = 0), (nn = null), wl(e, n, d, 1));
              break;
            case 2:
            case 9:
              if (Hm(d)) {
                ((Xe = 0), (nn = null), O0(n));
                break;
              }
              ((n = function () {
                ((Xe !== 2 && Xe !== 9) || tt !== e || (Xe = 7), Fn(e));
              }),
                d.then(n, n));
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Hm(d)
                ? ((Xe = 0), (nn = null), O0(n))
                : ((Xe = 0), (nn = null), wl(e, n, d, 7));
              break;
            case 5:
              var g = null;
              switch (Be.tag) {
                case 26:
                  g = Be.memoizedState;
                case 5:
                case 27:
                  var S = Be;
                  if (!g || sy(g)) {
                    ((Xe = 0), (nn = null));
                    var T = S.sibling;
                    if (T !== null) Be = T;
                    else {
                      var q = S.return;
                      q !== null ? ((Be = q), gs(q)) : (Be = null);
                    }
                    break t;
                  }
              }
              ((Xe = 0), (nn = null), wl(e, n, d, 5));
              break;
            case 6:
              ((Xe = 0), (nn = null), wl(e, n, d, 6));
              break;
            case 8:
              (xf(), (ut = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        wS();
        break;
      } catch (I) {
        x0(e, I);
      }
    while (!0);
    return (
      (cr = Ea = null),
      (N.H = i),
      (N.A = u),
      (Ke = a),
      Be !== null ? 0 : ((tt = null), (Ge = 0), Ho(), ut)
    );
  }
  function wS() {
    for (; Be !== null && !Yu(); ) A0(Be);
  }
  function A0(e) {
    var n = Wp(e.alternate, e, vr);
    ((e.memoizedProps = e.pendingProps), n === null ? gs(e) : (Be = n));
  }
  function O0(e) {
    var n = e,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Kp(a, n, n.pendingProps, n.type, void 0, Ge);
        break;
      case 11:
        n = Kp(a, n, n.pendingProps, n.type.render, n.ref, Ge);
        break;
      case 5:
        Bc(n);
      default:
        (t0(a, n), (n = Be = Tm(n, vr)), (n = Wp(a, n, vr)));
    }
    ((e.memoizedProps = e.pendingProps), n === null ? gs(e) : (Be = n));
  }
  function wl(e, n, a, i) {
    ((cr = Ea = null), Bc(n), (dl = null), (Ei = 0));
    var u = n.return;
    try {
      if (cS(e, u, n, a, Ge)) {
        ((ut = 1), ss(e, dn(a, e.current)), (Be = null));
        return;
      }
    } catch (d) {
      if (u !== null) throw ((Be = u), d);
      ((ut = 1), ss(e, dn(a, e.current)), (Be = null));
      return;
    }
    n.flags & 32768
      ? (Qe || i === 1
          ? (e = !0)
          : yl || (Ge & 536870912) !== 0
            ? (e = !1)
            : ((Hr = e = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = yn.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        T0(n, e))
      : gs(n);
  }
  function gs(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        T0(n, Hr);
        return;
      }
      e = n.return;
      var a = dS(n.alternate, n, vr);
      if (a !== null) {
        Be = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Be = n;
        return;
      }
      Be = n = e;
    } while (n !== null);
    ut === 0 && (ut = 5);
  }
  function T0(e, n) {
    do {
      var a = hS(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (Be = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Be = e;
        return;
      }
      Be = e = a;
    } while (e !== null);
    ((ut = 6), (Be = null));
  }
  function M0(e, n, a, i, u, d, g, S, T) {
    e.cancelPendingCommit = null;
    do vs();
    while (Mt !== 0);
    if ((Ke & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      if (
        ((d = n.lanes | n.childLanes),
        (d |= mc),
        Ao(e, a, d, g, S, T),
        e === tt && ((Be = tt = null), (Ge = 0)),
        (vl = n),
        (qr = e),
        (bl = a),
        (Sf = d),
        (wf = u),
        (b0 = i),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            CS(Ya, function () {
              return (U0(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = N.T), (N.T = null), (u = $.p), ($.p = 2), (g = Ke), (Ke |= 4));
        try {
          mS(e, n, a);
        } finally {
          ((Ke = g), ($.p = u), (N.T = i));
        }
      }
      ((Mt = 1), D0(), _0(), N0());
    }
  }
  function D0() {
    if (Mt === 1) {
      Mt = 0;
      var e = qr,
        n = vl,
        a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        ((a = N.T), (N.T = null));
        var i = $.p;
        $.p = 2;
        var u = Ke;
        Ke |= 4;
        try {
          d0(n, e);
          var d = Pf,
            g = vm(e.containerInfo),
            S = d.focusedElem,
            T = d.selectionRange;
          if (
            g !== S &&
            S &&
            S.ownerDocument &&
            gm(S.ownerDocument.documentElement, S)
          ) {
            if (T !== null && uc(S)) {
              var q = T.start,
                I = T.end;
              if ((I === void 0 && (I = q), "selectionStart" in S))
                ((S.selectionStart = q),
                  (S.selectionEnd = Math.min(I, S.value.length)));
              else {
                var W = S.ownerDocument || document,
                  F = (W && W.defaultView) || window;
                if (F.getSelection) {
                  var Y = F.getSelection(),
                    Me = S.textContent.length,
                    Ae = Math.min(T.start, Me),
                    Je = T.end === void 0 ? Ae : Math.min(T.end, Me);
                  !Y.extend && Ae > Je && ((g = Je), (Je = Ae), (Ae = g));
                  var z = ym(S, Ae),
                    L = ym(S, Je);
                  if (
                    z &&
                    L &&
                    (Y.rangeCount !== 1 ||
                      Y.anchorNode !== z.node ||
                      Y.anchorOffset !== z.offset ||
                      Y.focusNode !== L.node ||
                      Y.focusOffset !== L.offset)
                  ) {
                    var B = W.createRange();
                    (B.setStart(z.node, z.offset),
                      Y.removeAllRanges(),
                      Ae > Je
                        ? (Y.addRange(B), Y.extend(L.node, L.offset))
                        : (B.setEnd(L.node, L.offset), Y.addRange(B)));
                  }
                }
              }
            }
            for (W = [], Y = S; (Y = Y.parentNode); )
              Y.nodeType === 1 &&
                W.push({ element: Y, left: Y.scrollLeft, top: Y.scrollTop });
            for (
              typeof S.focus == "function" && S.focus(), S = 0;
              S < W.length;
              S++
            ) {
              var J = W[S];
              ((J.element.scrollLeft = J.left), (J.element.scrollTop = J.top));
            }
          }
          ((Ds = !!jf), (Pf = jf = null));
        } finally {
          ((Ke = u), ($.p = i), (N.T = a));
        }
      }
      ((e.current = n), (Mt = 2));
    }
  }
  function _0() {
    if (Mt === 2) {
      Mt = 0;
      var e = qr,
        n = vl,
        a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        ((a = N.T), (N.T = null));
        var i = $.p;
        $.p = 2;
        var u = Ke;
        Ke |= 4;
        try {
          s0(e, n.alternate, n);
        } finally {
          ((Ke = u), ($.p = i), (N.T = a));
        }
      }
      Mt = 3;
    }
  }
  function N0() {
    if (Mt === 4 || Mt === 3) {
      ((Mt = 0), Vu());
      var e = qr,
        n = vl,
        a = bl,
        i = b0;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Mt = 5)
        : ((Mt = 0), (vl = qr = null), L0(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (kr = null),
        $l(a),
        (n = n.stateNode),
        at && typeof at.onCommitFiberRoot == "function")
      )
        try {
          at.onCommitFiberRoot(kt, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((n = N.T), (u = $.p), ($.p = 2), (N.T = null));
        try {
          for (var d = e.onRecoverableError, g = 0; g < i.length; g++) {
            var S = i[g];
            d(S.value, { componentStack: S.stack });
          }
        } finally {
          ((N.T = n), ($.p = u));
        }
      }
      ((bl & 3) !== 0 && vs(),
        Fn(e),
        (u = e.pendingLanes),
        (a & 4194090) !== 0 && (u & 42) !== 0
          ? e === Ef
            ? _i++
            : ((_i = 0), (Ef = e))
          : (_i = 0),
        Ni(0));
    }
  }
  function L0(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), fi(n)));
  }
  function vs(e) {
    return (D0(), _0(), N0(), U0());
  }
  function U0() {
    if (Mt !== 5) return !1;
    var e = qr,
      n = Sf;
    Sf = 0;
    var a = $l(bl),
      i = N.T,
      u = $.p;
    try {
      (($.p = 32 > a ? 32 : a), (N.T = null), (a = wf), (wf = null));
      var d = qr,
        g = bl;
      if (((Mt = 0), (vl = qr = null), (bl = 0), (Ke & 6) !== 0))
        throw Error(o(331));
      var S = Ke;
      if (
        ((Ke |= 4),
        g0(d.current),
        m0(d, d.current, g, a),
        (Ke = S),
        Ni(0, !1),
        at && typeof at.onPostCommitFiberRoot == "function")
      )
        try {
          at.onPostCommitFiberRoot(kt, d);
        } catch {}
      return !0;
    } finally {
      (($.p = u), (N.T = i), L0(e, n));
    }
  }
  function z0(e, n, a) {
    ((n = dn(a, n)),
      (n = Wc(e.stateNode, n, 2)),
      (e = _r(e, n, 2)),
      e !== null && (fa(e, 2), Fn(e)));
  }
  function et(e, n, a) {
    if (e.tag === 3) z0(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          z0(n, e, a);
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (kr === null || !kr.has(i)))
          ) {
            ((e = dn(a, e)),
              (a = Bp(2)),
              (i = _r(n, a, 2)),
              i !== null && (kp(a, i, n, e), fa(i, 2), Fn(i)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Af(e, n, a) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new gS();
      var u = new Set();
      i.set(n, u);
    } else ((u = i.get(n)), u === void 0 && ((u = new Set()), i.set(n, u)));
    u.has(a) ||
      ((yf = !0), u.add(a), (e = ES.bind(null, e, n, a)), n.then(e, e));
  }
  function ES(e, n, a) {
    var i = e.pingCache;
    (i !== null && i.delete(n),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      tt === e &&
        (Ge & a) === a &&
        (ut === 4 || (ut === 3 && (Ge & 62914560) === Ge && 300 > It() - bf)
          ? (Ke & 2) === 0 && Sl(e, 0)
          : (gf |= a),
        gl === Ge && (gl = 0)),
      Fn(e));
  }
  function j0(e, n) {
    (n === 0 && (n = Co()), (e = nl(e, n)), e !== null && (fa(e, n), Fn(e)));
  }
  function xS(e) {
    var n = e.memoizedState,
      a = 0;
    (n !== null && (a = n.retryLane), j0(e, a));
  }
  function RS(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (i !== null && i.delete(n), j0(e, a));
  }
  function CS(e, n) {
    return Un(e, n);
  }
  var bs = null,
    El = null,
    Of = !1,
    Ss = !1,
    Tf = !1,
    Ma = 0;
  function Fn(e) {
    (e !== El &&
      e.next === null &&
      (El === null ? (bs = El = e) : (El = El.next = e)),
      (Ss = !0),
      Of || ((Of = !0), OS()));
  }
  function Ni(e, n) {
    if (!Tf && Ss) {
      Tf = !0;
      do
        for (var a = !1, i = bs; i !== null; ) {
          if (e !== 0) {
            var u = i.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var g = i.suspendedLanes,
                S = i.pingedLanes;
              ((d = (1 << (31 - Ot(42 | e) + 1)) - 1),
                (d &= u & ~(g & ~S)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0));
            }
            d !== 0 && ((a = !0), k0(i, d));
          } else
            ((d = Ge),
              (d = ca(
                i,
                i === tt ? d : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || jn(i, d) || ((a = !0), k0(i, d)));
          i = i.next;
        }
      while (a);
      Tf = !1;
    }
  }
  function AS() {
    P0();
  }
  function P0() {
    Ss = Of = !1;
    var e = 0;
    Ma !== 0 && (zS() && (e = Ma), (Ma = 0));
    for (var n = It(), a = null, i = bs; i !== null; ) {
      var u = i.next,
        d = H0(i, n);
      (d === 0
        ? ((i.next = null),
          a === null ? (bs = u) : (a.next = u),
          u === null && (El = a))
        : ((a = i), (e !== 0 || (d & 3) !== 0) && (Ss = !0)),
        (i = u));
    }
    Ni(e);
  }
  function H0(e, n) {
    for (
      var a = e.suspendedLanes,
        i = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var g = 31 - Ot(d),
        S = 1 << g,
        T = u[g];
      (T === -1
        ? ((S & a) === 0 || (S & i) !== 0) && (u[g] = Ro(S, n))
        : T <= n && (e.expiredLanes |= S),
        (d &= ~S));
    }
    if (
      ((n = tt),
      (a = Ge),
      (a = ca(
        e,
        e === n ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (i = e.callbackNode),
      a === 0 ||
        (e === n && (Xe === 2 || Xe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Rn(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || jn(e, a)) {
      if (((n = a & -a), n === e.callbackPriority)) return n;
      switch ((i !== null && Rn(i), $l(a))) {
        case 2:
        case 8:
          a = wo;
          break;
        case 32:
          a = Ya;
          break;
        case 268435456:
          a = Rr;
          break;
        default:
          a = Ya;
      }
      return (
        (i = B0.bind(null, e)),
        (a = Un(a, i)),
        (e.callbackPriority = n),
        (e.callbackNode = a),
        n
      );
    }
    return (
      i !== null && i !== null && Rn(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function B0(e, n) {
    if (Mt !== 0 && Mt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (vs() && e.callbackNode !== a) return null;
    var i = Ge;
    return (
      (i = ca(
        e,
        e === tt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (w0(e, i, n),
          H0(e, It()),
          e.callbackNode != null && e.callbackNode === a
            ? B0.bind(null, e)
            : null)
    );
  }
  function k0(e, n) {
    if (vs()) return null;
    w0(e, n, !0);
  }
  function OS() {
    PS(function () {
      (Ke & 6) !== 0 ? Un(So, AS) : P0();
    });
  }
  function Mf() {
    return (Ma === 0 && (Ma = Va()), Ma);
  }
  function q0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : _o("" + e);
  }
  function F0(e, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      e.id && a.setAttribute("form", e.id),
      n.parentNode.insertBefore(a, n),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function TS(e, n, a, i, u) {
    if (n === "submit" && a && a.stateNode === u) {
      var d = q0((u[le] || null).action),
        g = i.submitter;
      g &&
        ((n = (n = g[le] || null)
          ? q0(n.formAction)
          : g.getAttribute("formAction")),
        n !== null && ((d = n), (g = null)));
      var S = new zo("action", "action", null, i, u);
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Ma !== 0) {
                  var T = g ? F0(u, g) : new FormData(u);
                  Xc(
                    a,
                    { pending: !0, data: T, method: u.method, action: d },
                    null,
                    T,
                  );
                }
              } else
                typeof d == "function" &&
                  (S.preventDefault(),
                  (T = g ? F0(u, g) : new FormData(u)),
                  Xc(
                    a,
                    { pending: !0, data: T, method: u.method, action: d },
                    d,
                    T,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Df = 0; Df < hc.length; Df++) {
    var _f = hc[Df],
      MS = _f.toLowerCase(),
      DS = _f[0].toUpperCase() + _f.slice(1);
    An(MS, "on" + DS);
  }
  (An(wm, "onAnimationEnd"),
    An(Em, "onAnimationIteration"),
    An(xm, "onAnimationStart"),
    An("dblclick", "onDoubleClick"),
    An("focusin", "onFocus"),
    An("focusout", "onBlur"),
    An(K2, "onTransitionRun"),
    An(X2, "onTransitionStart"),
    An(Z2, "onTransitionCancel"),
    An(Rm, "onTransitionEnd"),
    jt("onMouseEnter", ["mouseout", "mouseover"]),
    jt("onMouseLeave", ["mouseout", "mouseover"]),
    jt("onPointerEnter", ["pointerout", "pointerover"]),
    jt("onPointerLeave", ["pointerout", "pointerover"]),
    $t(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    $t(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $t(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    $t(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    $t(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Li =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    _S = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Li),
    );
  function G0(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var i = e[a],
        u = i.event;
      i = i.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var g = i.length - 1; 0 <= g; g--) {
            var S = i[g],
              T = S.instance,
              q = S.currentTarget;
            if (((S = S.listener), T !== d && u.isPropagationStopped()))
              break e;
            ((d = S), (u.currentTarget = q));
            try {
              d(u);
            } catch (I) {
              os(I);
            }
            ((u.currentTarget = null), (d = T));
          }
        else
          for (g = 0; g < i.length; g++) {
            if (
              ((S = i[g]),
              (T = S.instance),
              (q = S.currentTarget),
              (S = S.listener),
              T !== d && u.isPropagationStopped())
            )
              break e;
            ((d = S), (u.currentTarget = q));
            try {
              d(u);
            } catch (I) {
              os(I);
            }
            ((u.currentTarget = null), (d = T));
          }
      }
    }
  }
  function ke(e, n) {
    var a = n[ve];
    a === void 0 && (a = n[ve] = new Set());
    var i = e + "__bubble";
    a.has(i) || (Y0(n, e, 2, !1), a.add(i));
  }
  function Nf(e, n, a) {
    var i = 0;
    (n && (i |= 4), Y0(a, e, i, n));
  }
  var ws = "_reactListening" + Math.random().toString(36).slice(2);
  function Lf(e) {
    if (!e[ws]) {
      ((e[ws] = !0),
        Ze.forEach(function (a) {
          a !== "selectionchange" && (_S.has(a) || Nf(a, !1, e), Nf(a, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ws] || ((n[ws] = !0), Nf("selectionchange", !1, n));
    }
  }
  function Y0(e, n, a, i) {
    switch (my(n)) {
      case 2:
        var u = aw;
        break;
      case 8:
        u = lw;
        break;
      default:
        u = Kf;
    }
    ((a = u.bind(null, n, a, e)),
      (u = void 0),
      !ec ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      i
        ? u !== void 0
          ? e.addEventListener(n, a, { capture: !0, passive: u })
          : e.addEventListener(n, a, !0)
        : u !== void 0
          ? e.addEventListener(n, a, { passive: u })
          : e.addEventListener(n, a, !1));
  }
  function Uf(e, n, a, i, u) {
    var d = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var S = i.stateNode.containerInfo;
          if (S === u) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var T = g.tag;
              if ((T === 3 || T === 4) && g.stateNode.containerInfo === u)
                return;
              g = g.return;
            }
          for (; S !== null; ) {
            if (((g = Ue(S)), g === null)) return;
            if (((T = g.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              i = d = g;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    $h(function () {
      var q = d,
        I = Ju(a),
        W = [];
      e: {
        var F = Cm.get(e);
        if (F !== void 0) {
          var Y = zo,
            Me = e;
          switch (e) {
            case "keypress":
              if (Lo(a) === 0) break e;
            case "keydown":
            case "keyup":
              Y = C2;
              break;
            case "focusin":
              ((Me = "focus"), (Y = ac));
              break;
            case "focusout":
              ((Me = "blur"), (Y = ac));
              break;
            case "beforeblur":
            case "afterblur":
              Y = ac;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = em;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = h2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = T2;
              break;
            case wm:
            case Em:
            case xm:
              Y = y2;
              break;
            case Rm:
              Y = D2;
              break;
            case "scroll":
            case "scrollend":
              Y = f2;
              break;
            case "wheel":
              Y = N2;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = v2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = nm;
              break;
            case "toggle":
            case "beforetoggle":
              Y = U2;
          }
          var Ae = (n & 4) !== 0,
            Je = !Ae && (e === "scroll" || e === "scrollend"),
            z = Ae ? (F !== null ? F + "Capture" : null) : F;
          Ae = [];
          for (var L = q, B; L !== null; ) {
            var J = L;
            if (
              ((B = J.stateNode),
              (J = J.tag),
              (J !== 5 && J !== 26 && J !== 27) ||
                B === null ||
                z === null ||
                ((J = Jl(L, z)), J != null && Ae.push(Ui(L, J, B))),
              Je)
            )
              break;
            L = L.return;
          }
          0 < Ae.length &&
            ((F = new Y(F, Me, null, a, I)),
            W.push({ event: F, listeners: Ae }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (Y = e === "mouseout" || e === "pointerout"),
            F &&
              a !== $u &&
              (Me = a.relatedTarget || a.fromElement) &&
              (Ue(Me) || Me[he]))
          )
            break e;
          if (
            (Y || F) &&
            ((F =
              I.window === I
                ? I
                : (F = I.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            Y
              ? ((Me = a.relatedTarget || a.toElement),
                (Y = q),
                (Me = Me ? Ue(Me) : null),
                Me !== null &&
                  ((Je = c(Me)),
                  (Ae = Me.tag),
                  Me !== Je || (Ae !== 5 && Ae !== 27 && Ae !== 6)) &&
                  (Me = null))
              : ((Y = null), (Me = q)),
            Y !== Me)
          ) {
            if (
              ((Ae = em),
              (J = "onMouseLeave"),
              (z = "onMouseEnter"),
              (L = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ae = nm),
                (J = "onPointerLeave"),
                (z = "onPointerEnter"),
                (L = "pointer")),
              (Je = Y == null ? F : nt(Y)),
              (B = Me == null ? F : nt(Me)),
              (F = new Ae(J, L + "leave", Y, a, I)),
              (F.target = Je),
              (F.relatedTarget = B),
              (J = null),
              Ue(I) === q &&
                ((Ae = new Ae(z, L + "enter", Me, a, I)),
                (Ae.target = B),
                (Ae.relatedTarget = Je),
                (J = Ae)),
              (Je = J),
              Y && Me)
            )
              t: {
                for (Ae = Y, z = Me, L = 0, B = Ae; B; B = xl(B)) L++;
                for (B = 0, J = z; J; J = xl(J)) B++;
                for (; 0 < L - B; ) ((Ae = xl(Ae)), L--);
                for (; 0 < B - L; ) ((z = xl(z)), B--);
                for (; L--; ) {
                  if (Ae === z || (z !== null && Ae === z.alternate)) break t;
                  ((Ae = xl(Ae)), (z = xl(z)));
                }
                Ae = null;
              }
            else Ae = null;
            (Y !== null && V0(W, F, Y, Ae, !1),
              Me !== null && Je !== null && V0(W, Je, Me, Ae, !0));
          }
        }
        e: {
          if (
            ((F = q ? nt(q) : window),
            (Y = F.nodeName && F.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && F.type === "file"))
          )
            var ce = cm;
          else if (sm(F))
            if (fm) ce = Y2;
            else {
              ce = F2;
              var He = q2;
            }
          else
            ((Y = F.nodeName),
              !Y ||
              Y.toLowerCase() !== "input" ||
              (F.type !== "checkbox" && F.type !== "radio")
                ? q && Iu(q.elementType) && (ce = cm)
                : (ce = G2));
          if (ce && (ce = ce(e, q))) {
            um(W, ce, a, I);
            break e;
          }
          (He && He(e, F, q),
            e === "focusout" &&
              q &&
              F.type === "number" &&
              q.memoizedProps.value != null &&
              Zu(F, "number", F.value));
        }
        switch (((He = q ? nt(q) : window), e)) {
          case "focusin":
            (sm(He) || He.contentEditable === "true") &&
              ((Wa = He), (cc = q), (ii = null));
            break;
          case "focusout":
            ii = cc = Wa = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fc = !1), bm(W, a, I));
            break;
          case "selectionchange":
            if (Q2) break;
          case "keydown":
          case "keyup":
            bm(W, a, I);
        }
        var Se;
        if (ic)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          Ja
            ? im(e, a) && (Te = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Te = "onCompositionStart");
        (Te &&
          (rm &&
            a.locale !== "ko" &&
            (Ja || Te !== "onCompositionStart"
              ? Te === "onCompositionEnd" && Ja && (Se = Jh())
              : ((Or = I),
                (tc = "value" in Or ? Or.value : Or.textContent),
                (Ja = !0))),
          (He = Es(q, Te)),
          0 < He.length &&
            ((Te = new tm(Te, e, null, a, I)),
            W.push({ event: Te, listeners: He }),
            Se
              ? (Te.data = Se)
              : ((Se = om(a)), Se !== null && (Te.data = Se)))),
          (Se = j2 ? P2(e, a) : H2(e, a)) &&
            ((Te = Es(q, "onBeforeInput")),
            0 < Te.length &&
              ((He = new tm("onBeforeInput", "beforeinput", null, a, I)),
              W.push({ event: He, listeners: Te }),
              (He.data = Se))),
          TS(W, e, q, a, I));
      }
      G0(W, n);
    });
  }
  function Ui(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function Es(e, n) {
    for (var a = n + "Capture", i = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          d === null ||
          ((u = Jl(e, a)),
          u != null && i.unshift(Ui(e, u, d)),
          (u = Jl(e, n)),
          u != null && i.push(Ui(e, u, d))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function xl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function V0(e, n, a, i, u) {
    for (var d = n._reactName, g = []; a !== null && a !== i; ) {
      var S = a,
        T = S.alternate,
        q = S.stateNode;
      if (((S = S.tag), T !== null && T === i)) break;
      ((S !== 5 && S !== 26 && S !== 27) ||
        q === null ||
        ((T = q),
        u
          ? ((q = Jl(a, d)), q != null && g.unshift(Ui(a, q, T)))
          : u || ((q = Jl(a, d)), q != null && g.push(Ui(a, q, T)))),
        (a = a.return));
    }
    g.length !== 0 && e.push({ event: n, listeners: g });
  }
  var NS = /\r\n?/g,
    LS = /\u0000|\uFFFD/g;
  function Q0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        NS,
        `
`,
      )
      .replace(LS, "");
  }
  function K0(e, n) {
    return ((n = Q0(n)), Q0(e) === n);
  }
  function xs() {}
  function $e(e, n, a, i, u, d) {
    switch (a) {
      case "children":
        typeof i == "string"
          ? n === "body" || (n === "textarea" && i === "") || Za(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            n !== "body" &&
            Za(e, "" + i);
        break;
      case "className":
        ar(e, "class", i);
        break;
      case "tabIndex":
        ar(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ar(e, a, i);
        break;
      case "style":
        Zh(e, i, d);
        break;
      case "data":
        if (n !== "object") {
          ar(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((i = _o("" + i)), e.setAttribute(a, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == "function" &&
            (a === "formAction"
              ? (n !== "input" && $e(e, n, "name", u.name, u, null),
                $e(e, n, "formEncType", u.formEncType, u, null),
                $e(e, n, "formMethod", u.formMethod, u, null),
                $e(e, n, "formTarget", u.formTarget, u, null))
              : ($e(e, n, "encType", u.encType, u, null),
                $e(e, n, "method", u.method, u, null),
                $e(e, n, "target", u.target, u, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((i = _o("" + i)), e.setAttribute(a, i));
        break;
      case "onClick":
        i != null && (e.onclick = xs);
        break;
      case "onScroll":
        i != null && ke("scroll", e);
        break;
      case "onScrollEnd":
        i != null && ke("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((a = i.__html), a != null)) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = _o("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(a, "" + i)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(a, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? e.setAttribute(a, i)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(a, i)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(a)
          : e.setAttribute(a, i);
        break;
      case "popover":
        (ke("beforetoggle", e), ke("toggle", e), rr(e, "popover", i));
        break;
      case "xlinkActuate":
        _e(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        _e(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        _e(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        _e(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        _e(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        _e(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        _e(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        _e(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        _e(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        rr(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = u2.get(a) || a), rr(e, a, i));
    }
  }
  function zf(e, n, a, i, u, d) {
    switch (a) {
      case "style":
        Zh(e, i, d);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((a = i.__html), a != null)) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Za(e, i)
          : (typeof i == "number" || typeof i == "bigint") && Za(e, "" + i);
        break;
      case "onScroll":
        i != null && ke("scroll", e);
        break;
      case "onScrollEnd":
        i != null && ke("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = xs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Pn.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (n = a.slice(2, u ? a.length - 7 : void 0)),
              (d = e[le] || null),
              (d = d != null ? d[a] : null),
              typeof d == "function" && e.removeEventListener(n, d, u),
              typeof i == "function")
            ) {
              (typeof d != "function" &&
                d !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(n, i, u));
              break e;
            }
            a in e
              ? (e[a] = i)
              : i === !0
                ? e.setAttribute(a, "")
                : rr(e, a, i);
          }
    }
  }
  function Dt(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ke("error", e), ke("load", e));
        var i = !1,
          u = !1,
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var g = a[d];
            if (g != null)
              switch (d) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, n));
                default:
                  $e(e, n, d, g, a, null);
              }
          }
        (u && $e(e, n, "srcSet", a.srcSet, a, null),
          i && $e(e, n, "src", a.src, a, null));
        return;
      case "input":
        ke("invalid", e);
        var S = (d = g = u = null),
          T = null,
          q = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var I = a[i];
            if (I != null)
              switch (i) {
                case "name":
                  u = I;
                  break;
                case "type":
                  g = I;
                  break;
                case "checked":
                  T = I;
                  break;
                case "defaultChecked":
                  q = I;
                  break;
                case "value":
                  d = I;
                  break;
                case "defaultValue":
                  S = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null) throw Error(o(137, n));
                  break;
                default:
                  $e(e, n, i, I, a, null);
              }
          }
        (Vh(e, d, S, T, q, g, u, !1), Mo(e));
        return;
      case "select":
        (ke("invalid", e), (i = g = d = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((S = a[u]), S != null))
            switch (u) {
              case "value":
                d = S;
                break;
              case "defaultValue":
                g = S;
                break;
              case "multiple":
                i = S;
              default:
                $e(e, n, u, S, a, null);
            }
        ((n = d),
          (a = g),
          (e.multiple = !!i),
          n != null ? Xa(e, !!i, n, !1) : a != null && Xa(e, !!i, a, !0));
        return;
      case "textarea":
        (ke("invalid", e), (d = u = i = null));
        for (g in a)
          if (a.hasOwnProperty(g) && ((S = a[g]), S != null))
            switch (g) {
              case "value":
                i = S;
                break;
              case "defaultValue":
                u = S;
                break;
              case "children":
                d = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                $e(e, n, g, S, a, null);
            }
        (Kh(e, i, u, d), Mo(e));
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && ((i = a[T]), i != null))
            switch (T) {
              case "selected":
                e.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                $e(e, n, T, i, a, null);
            }
        return;
      case "dialog":
        (ke("beforetoggle", e),
          ke("toggle", e),
          ke("cancel", e),
          ke("close", e));
        break;
      case "iframe":
      case "object":
        ke("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Li.length; i++) ke(Li[i], e);
        break;
      case "image":
        (ke("error", e), ke("load", e));
        break;
      case "details":
        ke("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ke("error", e), ke("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in a)
          if (a.hasOwnProperty(q) && ((i = a[q]), i != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, n));
              default:
                $e(e, n, q, i, a, null);
            }
        return;
      default:
        if (Iu(n)) {
          for (I in a)
            a.hasOwnProperty(I) &&
              ((i = a[I]), i !== void 0 && zf(e, n, I, i, a, void 0));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && ((i = a[S]), i != null && $e(e, n, S, i, a, null));
  }
  function US(e, n, a, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          d = null,
          g = null,
          S = null,
          T = null,
          q = null,
          I = null;
        for (Y in a) {
          var W = a[Y];
          if (a.hasOwnProperty(Y) && W != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = W;
              default:
                i.hasOwnProperty(Y) || $e(e, n, Y, null, i, W);
            }
        }
        for (var F in i) {
          var Y = i[F];
          if (((W = a[F]), i.hasOwnProperty(F) && (Y != null || W != null)))
            switch (F) {
              case "type":
                d = Y;
                break;
              case "name":
                u = Y;
                break;
              case "checked":
                q = Y;
                break;
              case "defaultChecked":
                I = Y;
                break;
              case "value":
                g = Y;
                break;
              case "defaultValue":
                S = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(o(137, n));
                break;
              default:
                Y !== W && $e(e, n, F, Y, i, W);
            }
        }
        Xu(e, g, S, T, q, I, d, u);
        return;
      case "select":
        Y = g = S = F = null;
        for (d in a)
          if (((T = a[d]), a.hasOwnProperty(d) && T != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                Y = T;
              default:
                i.hasOwnProperty(d) || $e(e, n, d, null, i, T);
            }
        for (u in i)
          if (
            ((d = i[u]),
            (T = a[u]),
            i.hasOwnProperty(u) && (d != null || T != null))
          )
            switch (u) {
              case "value":
                F = d;
                break;
              case "defaultValue":
                S = d;
                break;
              case "multiple":
                g = d;
              default:
                d !== T && $e(e, n, u, d, i, T);
            }
        ((n = S),
          (a = g),
          (i = Y),
          F != null
            ? Xa(e, !!a, F, !1)
            : !!i != !!a &&
              (n != null ? Xa(e, !!a, n, !0) : Xa(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        Y = F = null;
        for (S in a)
          if (
            ((u = a[S]),
            a.hasOwnProperty(S) && u != null && !i.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                $e(e, n, S, null, i, u);
            }
        for (g in i)
          if (
            ((u = i[g]),
            (d = a[g]),
            i.hasOwnProperty(g) && (u != null || d != null))
          )
            switch (g) {
              case "value":
                F = u;
                break;
              case "defaultValue":
                Y = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== d && $e(e, n, g, u, i, d);
            }
        Qh(e, F, Y);
        return;
      case "option":
        for (var Me in a)
          if (
            ((F = a[Me]),
            a.hasOwnProperty(Me) && F != null && !i.hasOwnProperty(Me))
          )
            switch (Me) {
              case "selected":
                e.selected = !1;
                break;
              default:
                $e(e, n, Me, null, i, F);
            }
        for (T in i)
          if (
            ((F = i[T]),
            (Y = a[T]),
            i.hasOwnProperty(T) && F !== Y && (F != null || Y != null))
          )
            switch (T) {
              case "selected":
                e.selected =
                  F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                $e(e, n, T, F, i, Y);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ae in a)
          ((F = a[Ae]),
            a.hasOwnProperty(Ae) &&
              F != null &&
              !i.hasOwnProperty(Ae) &&
              $e(e, n, Ae, null, i, F));
        for (q in i)
          if (
            ((F = i[q]),
            (Y = a[q]),
            i.hasOwnProperty(q) && F !== Y && (F != null || Y != null))
          )
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null) throw Error(o(137, n));
                break;
              default:
                $e(e, n, q, F, i, Y);
            }
        return;
      default:
        if (Iu(n)) {
          for (var Je in a)
            ((F = a[Je]),
              a.hasOwnProperty(Je) &&
                F !== void 0 &&
                !i.hasOwnProperty(Je) &&
                zf(e, n, Je, void 0, i, F));
          for (I in i)
            ((F = i[I]),
              (Y = a[I]),
              !i.hasOwnProperty(I) ||
                F === Y ||
                (F === void 0 && Y === void 0) ||
                zf(e, n, I, F, i, Y));
          return;
        }
    }
    for (var z in a)
      ((F = a[z]),
        a.hasOwnProperty(z) &&
          F != null &&
          !i.hasOwnProperty(z) &&
          $e(e, n, z, null, i, F));
    for (W in i)
      ((F = i[W]),
        (Y = a[W]),
        !i.hasOwnProperty(W) ||
          F === Y ||
          (F == null && Y == null) ||
          $e(e, n, W, F, i, Y));
  }
  var jf = null,
    Pf = null;
  function Rs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function X0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Z0(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Hf(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bf = null;
  function zS() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Bf
        ? !1
        : ((Bf = e), !0)
      : ((Bf = null), !1);
  }
  var I0 = typeof setTimeout == "function" ? setTimeout : void 0,
    jS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $0 = typeof Promise == "function" ? Promise : void 0,
    PS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $0 < "u"
          ? function (e) {
              return $0.resolve(null).then(e).catch(HS);
            }
          : I0;
  function HS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Gr(e) {
    return e === "head";
  }
  function J0(e, n) {
    var a = n,
      i = 0,
      u = 0;
    do {
      var d = a.nextSibling;
      if ((e.removeChild(a), d && d.nodeType === 8))
        if (((a = d.data), a === "/$")) {
          if (0 < i && 8 > i) {
            a = i;
            var g = e.ownerDocument;
            if ((a & 1 && zi(g.documentElement), a & 2 && zi(g.body), a & 4))
              for (a = g.head, zi(a), g = a.firstChild; g; ) {
                var S = g.nextSibling,
                  T = g.nodeName;
                (g[ye] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(g),
                  (g = S));
              }
          }
          if (u === 0) {
            (e.removeChild(d), Gi(n));
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? u++
            : (i = a.charCodeAt(0) - 48);
      else i = 0;
      a = d;
    } while (a);
    Gi(n);
  }
  function kf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (kf(a), ge(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function BS(e, n, a, i) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[ye])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = Tn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function kS(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Tn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function qf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function qS(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") n();
    else {
      var i = function () {
        (n(), a.removeEventListener("DOMContentLoaded", i));
      };
      (a.addEventListener("DOMContentLoaded", i), (e._reactRetry = i));
    }
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Ff = null;
  function W0(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ey(e, n, a) {
    switch (((n = Rs(a)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function zi(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    ge(e);
  }
  var vn = new Map(),
    ty = new Set();
  function Cs(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var br = $.d;
  $.d = { f: FS, r: GS, D: YS, C: VS, L: QS, m: KS, X: ZS, S: XS, M: IS };
  function FS() {
    var e = br.f(),
      n = ys();
    return e || n;
  }
  function GS(e) {
    var n = Ve(e);
    n !== null && n.tag === 5 && n.type === "form" ? wp(n) : br.r(e);
  }
  var Rl = typeof document > "u" ? null : document;
  function ny(e, n, a) {
    var i = Rl;
    if (i && typeof n == "string" && n) {
      var u = fn(n);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        ty.has(u) ||
          (ty.add(u),
          (e = { rel: e, crossOrigin: a, href: n }),
          i.querySelector(u) === null &&
            ((n = i.createElement("link")),
            Dt(n, "link", e),
            De(n),
            i.head.appendChild(n))));
    }
  }
  function YS(e) {
    (br.D(e), ny("dns-prefetch", e, null));
  }
  function VS(e, n) {
    (br.C(e, n), ny("preconnect", e, n));
  }
  function QS(e, n, a) {
    br.L(e, n, a);
    var i = Rl;
    if (i && e && n) {
      var u = 'link[rel="preload"][as="' + fn(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + fn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + fn(a.imageSizes) + '"]'))
        : (u += '[href="' + fn(e) + '"]');
      var d = u;
      switch (n) {
        case "style":
          d = Cl(e);
          break;
        case "script":
          d = Al(e);
      }
      vn.has(d) ||
        ((e = y(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : e,
            as: n,
          },
          a,
        )),
        vn.set(d, e),
        i.querySelector(u) !== null ||
          (n === "style" && i.querySelector(ji(d))) ||
          (n === "script" && i.querySelector(Pi(d))) ||
          ((n = i.createElement("link")),
          Dt(n, "link", e),
          De(n),
          i.head.appendChild(n)));
    }
  }
  function KS(e, n) {
    br.m(e, n);
    var a = Rl;
    if (a && e) {
      var i = n && typeof n.as == "string" ? n.as : "script",
        u =
          'link[rel="modulepreload"][as="' + fn(i) + '"][href="' + fn(e) + '"]',
        d = u;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Al(e);
      }
      if (
        !vn.has(d) &&
        ((e = y({ rel: "modulepreload", href: e }, n)),
        vn.set(d, e),
        a.querySelector(u) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Pi(d))) return;
        }
        ((i = a.createElement("link")),
          Dt(i, "link", e),
          De(i),
          a.head.appendChild(i));
      }
    }
  }
  function XS(e, n, a) {
    br.S(e, n, a);
    var i = Rl;
    if (i && e) {
      var u = ot(i).hoistableStyles,
        d = Cl(e);
      n = n || "default";
      var g = u.get(d);
      if (!g) {
        var S = { loading: 0, preload: null };
        if ((g = i.querySelector(ji(d)))) S.loading = 5;
        else {
          ((e = y({ rel: "stylesheet", href: e, "data-precedence": n }, a)),
            (a = vn.get(d)) && Gf(e, a));
          var T = (g = i.createElement("link"));
          (De(T),
            Dt(T, "link", e),
            (T._p = new Promise(function (q, I) {
              ((T.onload = q), (T.onerror = I));
            })),
            T.addEventListener("load", function () {
              S.loading |= 1;
            }),
            T.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            As(g, n, i));
        }
        ((g = { type: "stylesheet", instance: g, count: 1, state: S }),
          u.set(d, g));
      }
    }
  }
  function ZS(e, n) {
    br.X(e, n);
    var a = Rl;
    if (a && e) {
      var i = ot(a).hoistableScripts,
        u = Al(e),
        d = i.get(u);
      d ||
        ((d = a.querySelector(Pi(u))),
        d ||
          ((e = y({ src: e, async: !0 }, n)),
          (n = vn.get(u)) && Yf(e, n),
          (d = a.createElement("script")),
          De(d),
          Dt(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        i.set(u, d));
    }
  }
  function IS(e, n) {
    br.M(e, n);
    var a = Rl;
    if (a && e) {
      var i = ot(a).hoistableScripts,
        u = Al(e),
        d = i.get(u);
      d ||
        ((d = a.querySelector(Pi(u))),
        d ||
          ((e = y({ src: e, async: !0, type: "module" }, n)),
          (n = vn.get(u)) && Yf(e, n),
          (d = a.createElement("script")),
          De(d),
          Dt(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        i.set(u, d));
    }
  }
  function ry(e, n, a, i) {
    var u = (u = me.current) ? Cs(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = Cl(a.href)),
            (a = ot(u).hoistableStyles),
            (i = a.get(n)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Cl(a.href);
          var d = ot(u).hoistableStyles,
            g = d.get(e);
          if (
            (g ||
              ((u = u.ownerDocument || u),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, g),
              (d = u.querySelector(ji(e))) &&
                !d._p &&
                ((g.instance = d), (g.state.loading = 5)),
              vn.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                vn.set(e, a),
                d || $S(u, e, a, g.state))),
            n && i === null)
          )
            throw Error(o(528, ""));
          return g;
        }
        if (n && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Al(a)),
              (a = ot(u).hoistableScripts),
              (i = a.get(n)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Cl(e) {
    return 'href="' + fn(e) + '"';
  }
  function ji(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ay(e) {
    return y({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function $S(e, n, a, i) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (i.loading = 1)
      : ((n = e.createElement("link")),
        (i.preload = n),
        n.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Dt(n, "link", a),
        De(n),
        e.head.appendChild(n));
  }
  function Al(e) {
    return '[src="' + fn(e) + '"]';
  }
  function Pi(e) {
    return "script[async]" + e;
  }
  function ly(e, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + fn(a.href) + '"]');
          if (i) return ((n.instance = i), De(i), i);
          var u = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            De(i),
            Dt(i, "style", u),
            As(i, a.precedence, e),
            (n.instance = i)
          );
        case "stylesheet":
          u = Cl(a.href);
          var d = e.querySelector(ji(u));
          if (d) return ((n.state.loading |= 4), (n.instance = d), De(d), d);
          ((i = ay(a)),
            (u = vn.get(u)) && Gf(i, u),
            (d = (e.ownerDocument || e).createElement("link")),
            De(d));
          var g = d;
          return (
            (g._p = new Promise(function (S, T) {
              ((g.onload = S), (g.onerror = T));
            })),
            Dt(d, "link", i),
            (n.state.loading |= 4),
            As(d, a.precedence, e),
            (n.instance = d)
          );
        case "script":
          return (
            (d = Al(a.src)),
            (u = e.querySelector(Pi(d)))
              ? ((n.instance = u), De(u), u)
              : ((i = a),
                (u = vn.get(d)) && ((i = y({}, a)), Yf(i, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                De(u),
                Dt(u, "link", i),
                e.head.appendChild(u),
                (n.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((i = n.instance), (n.state.loading |= 4), As(i, a.precedence, e));
    return n.instance;
  }
  function As(e, n, a) {
    for (
      var i = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = i.length ? i[i.length - 1] : null,
        d = u,
        g = 0;
      g < i.length;
      g++
    ) {
      var S = i[g];
      if (S.dataset.precedence === n) d = S;
      else if (d !== u) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(e, n.firstChild));
  }
  function Gf(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title));
  }
  function Yf(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity));
  }
  var Os = null;
  function iy(e, n, a) {
    if (Os === null) {
      var i = new Map(),
        u = (Os = new Map());
      u.set(a, i);
    } else ((u = Os), (i = u.get(a)), i || ((i = new Map()), u.set(a, i)));
    if (i.has(e)) return i;
    for (
      i.set(e, null), a = a.getElementsByTagName(e), u = 0;
      u < a.length;
      u++
    ) {
      var d = a[u];
      if (
        !(
          d[ye] ||
          d[te] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = d.getAttribute(n) || "";
        g = e + g;
        var S = i.get(g);
        S ? S.push(d) : i.set(g, [d]);
      }
    }
    return i;
  }
  function oy(e, n, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        n === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function JS(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled),
              typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function sy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Hi = null;
  function WS() {}
  function ew(e, n, a) {
    if (Hi === null) throw Error(o(475));
    var i = Hi;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = Cl(a.href),
          d = e.querySelector(ji(u));
        if (d) {
          ((e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (i.count++, (i = Ts.bind(i)), e.then(i, i)),
            (n.state.loading |= 4),
            (n.instance = d),
            De(d));
          return;
        }
        ((d = e.ownerDocument || e),
          (a = ay(a)),
          (u = vn.get(u)) && Gf(a, u),
          (d = d.createElement("link")),
          De(d));
        var g = d;
        ((g._p = new Promise(function (S, T) {
          ((g.onload = S), (g.onerror = T));
        })),
          Dt(d, "link", a),
          (n.instance = d));
      }
      (i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (i.count++,
          (n = Ts.bind(i)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  function tw() {
    if (Hi === null) throw Error(o(475));
    var e = Hi;
    return (
      e.stylesheets && e.count === 0 && Vf(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Vf(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                ((e.unsuspend = null), i());
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function Ts() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ms = null;
  function Vf(e, n) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ms = new Map()),
        n.forEach(nw, e),
        (Ms = null),
        Ts.call(e)));
  }
  function nw(e, n) {
    if (!(n.state.loading & 4)) {
      var a = Ms.get(e);
      if (a) var i = a.get(null);
      else {
        ((a = new Map()), Ms.set(e, a));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            d = 0;
          d < u.length;
          d++
        ) {
          var g = u[d];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (a.set(g.dataset.precedence, g), (i = g));
        }
        i && a.set(null, i);
      }
      ((u = n.instance),
        (g = u.getAttribute("data-precedence")),
        (d = a.get(g) || i),
        d === i && a.set(null, u),
        a.set(g, u),
        this.count++,
        (i = Ts.bind(this)),
        u.addEventListener("load", i),
        u.addEventListener("error", i),
        d
          ? d.parentNode.insertBefore(u, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var Bi = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function rw(e, n, a, i, u, d, g, S) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Qa(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qa(0)),
      (this.hiddenUpdates = Qa(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = u),
      (this.onCaughtError = d),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function uy(e, n, a, i, u, d, g, S, T, q, I, W) {
    return (
      (e = new rw(e, n, a, g, S, T, q, W)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = Wt(3, null, null, n)),
      (e.current = d),
      (d.stateNode = e),
      (n = Cc()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: i, isDehydrated: a, cache: n }),
      Mc(d),
      e
    );
  }
  function cy(e) {
    return e ? ((e = rl), e) : rl;
  }
  function fy(e, n, a, i, u, d) {
    ((u = cy(u)),
      i.context === null ? (i.context = u) : (i.pendingContext = u),
      (i = Dr(n)),
      (i.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (i.callback = d),
      (a = _r(e, i, n)),
      a !== null && (an(a, e, n), pi(a, e, n)));
  }
  function dy(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Qf(e, n) {
    (dy(e, n), (e = e.alternate) && dy(e, n));
  }
  function hy(e) {
    if (e.tag === 13) {
      var n = nl(e, 67108864);
      (n !== null && an(n, e, 67108864), Qf(e, 67108864));
    }
  }
  var Ds = !0;
  function aw(e, n, a, i) {
    var u = N.T;
    N.T = null;
    var d = $.p;
    try {
      (($.p = 2), Kf(e, n, a, i));
    } finally {
      (($.p = d), (N.T = u));
    }
  }
  function lw(e, n, a, i) {
    var u = N.T;
    N.T = null;
    var d = $.p;
    try {
      (($.p = 8), Kf(e, n, a, i));
    } finally {
      (($.p = d), (N.T = u));
    }
  }
  function Kf(e, n, a, i) {
    if (Ds) {
      var u = Xf(i);
      if (u === null) (Uf(e, n, i, _s, a), py(e, i));
      else if (ow(u, e, n, a, i)) i.stopPropagation();
      else if ((py(e, i), n & 4 && -1 < iw.indexOf(e))) {
        for (; u !== null; ) {
          var d = Ve(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var g = tr(d.pendingLanes);
                  if (g !== 0) {
                    var S = d;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; g; ) {
                      var T = 1 << (31 - Ot(g));
                      ((S.entanglements[1] |= T), (g &= ~T));
                    }
                    (Fn(d), (Ke & 6) === 0 && ((ms = It() + 500), Ni(0)));
                  }
                }
                break;
              case 13:
                ((S = nl(d, 2)), S !== null && an(S, d, 2), ys(), Qf(d, 2));
            }
          if (((d = Xf(i)), d === null && Uf(e, n, i, _s, a), d === u)) break;
          u = d;
        }
        u !== null && i.stopPropagation();
      } else Uf(e, n, i, null, a);
    }
  }
  function Xf(e) {
    return ((e = Ju(e)), Zf(e));
  }
  var _s = null;
  function Zf(e) {
    if (((_s = null), (e = Ue(e)), e !== null)) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((e = f(n)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return ((_s = e), null);
  }
  function my(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qu()) {
          case So:
            return 2;
          case wo:
            return 8;
          case Ya:
          case er:
            return 32;
          case Rr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var If = !1,
    Yr = null,
    Vr = null,
    Qr = null,
    ki = new Map(),
    qi = new Map(),
    Kr = [],
    iw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function py(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        Qr = null;
        break;
      case "pointerover":
      case "pointerout":
        ki.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qi.delete(n.pointerId);
    }
  }
  function Fi(e, n, a, i, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: i,
          nativeEvent: d,
          targetContainers: [u],
        }),
        n !== null && ((n = Ve(n)), n !== null && hy(n)),
        e)
      : ((e.eventSystemFlags |= i),
        (n = e.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        e);
  }
  function ow(e, n, a, i, u) {
    switch (n) {
      case "focusin":
        return ((Yr = Fi(Yr, e, n, a, i, u)), !0);
      case "dragenter":
        return ((Vr = Fi(Vr, e, n, a, i, u)), !0);
      case "mouseover":
        return ((Qr = Fi(Qr, e, n, a, i, u)), !0);
      case "pointerover":
        var d = u.pointerId;
        return (ki.set(d, Fi(ki.get(d) || null, e, n, a, i, u)), !0);
      case "gotpointercapture":
        return (
          (d = u.pointerId),
          qi.set(d, Fi(qi.get(d) || null, e, n, a, i, u)),
          !0
        );
    }
    return !1;
  }
  function yy(e) {
    var n = Ue(e.target);
    if (n !== null) {
      var a = c(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = f(a)), n !== null)) {
            ((e.blockedOn = n),
              H(e.priority, function () {
                if (a.tag === 13) {
                  var i = rn();
                  i = Il(i);
                  var u = nl(a, i);
                  (u !== null && an(u, a, i), Qf(a, i));
                }
              }));
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ns(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Xf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var i = new a.constructor(a.type, a);
        (($u = i), a.target.dispatchEvent(i), ($u = null));
      } else return ((n = Ve(a)), n !== null && hy(n), (e.blockedOn = a), !1);
      n.shift();
    }
    return !0;
  }
  function gy(e, n, a) {
    Ns(e) && a.delete(n);
  }
  function sw() {
    ((If = !1),
      Yr !== null && Ns(Yr) && (Yr = null),
      Vr !== null && Ns(Vr) && (Vr = null),
      Qr !== null && Ns(Qr) && (Qr = null),
      ki.forEach(gy),
      qi.forEach(gy));
  }
  function Ls(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      If ||
        ((If = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, sw)));
  }
  var Us = null;
  function vy(e) {
    Us !== e &&
      ((Us = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Us === e && (Us = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n],
            i = e[n + 1],
            u = e[n + 2];
          if (typeof i != "function") {
            if (Zf(i || a) === null) continue;
            break;
          }
          var d = Ve(a);
          d !== null &&
            (e.splice(n, 3),
            (n -= 3),
            Xc(d, { pending: !0, data: u, method: a.method, action: i }, i, u));
        }
      }));
  }
  function Gi(e) {
    function n(T) {
      return Ls(T, e);
    }
    (Yr !== null && Ls(Yr, e),
      Vr !== null && Ls(Vr, e),
      Qr !== null && Ls(Qr, e),
      ki.forEach(n),
      qi.forEach(n));
    for (var a = 0; a < Kr.length; a++) {
      var i = Kr[a];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Kr.length && ((a = Kr[0]), a.blockedOn === null); )
      (yy(a), a.blockedOn === null && Kr.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (i = 0; i < a.length; i += 3) {
        var u = a[i],
          d = a[i + 1],
          g = u[le] || null;
        if (typeof d == "function") g || vy(a);
        else if (g) {
          var S = null;
          if (d && d.hasAttribute("formAction")) {
            if (((u = d), (g = d[le] || null))) S = g.formAction;
            else if (Zf(u) !== null) continue;
          } else S = g.action;
          (typeof S == "function" ? (a[i + 1] = S) : (a.splice(i, 3), (i -= 3)),
            vy(a));
        }
      }
  }
  function $f(e) {
    this._internalRoot = e;
  }
  ((zs.prototype.render = $f.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      var a = n.current,
        i = rn();
      fy(a, i, e, n, null, null);
    }),
    (zs.prototype.unmount = $f.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (fy(e.current, 2, null, e, null, null), ys(), (n[he] = null));
        }
      }));
  function zs(e) {
    this._internalRoot = e;
  }
  zs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = D();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Kr.length && n !== 0 && n < Kr[a].priority; a++);
      (Kr.splice(a, 0, e), a === 0 && yy(e));
    }
  };
  var by = r.version;
  if (by !== "19.1.1") throw Error(o(527, by, "19.1.1"));
  $.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = p(n)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var uw = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!js.isDisabled && js.supportsFiber)
      try {
        ((kt = js.inject(uw)), (at = js));
      } catch {}
  }
  return (
    (Vi.createRoot = function (e, n) {
      if (!s(e)) throw Error(o(299));
      var a = !1,
        i = "",
        u = zp,
        d = jp,
        g = Pp,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks)),
        (n = uy(e, 1, !1, null, null, a, i, u, d, g, S, null)),
        (e[he] = n.current),
        Lf(e),
        new $f(n)
      );
    }),
    (Vi.hydrateRoot = function (e, n, a) {
      if (!s(e)) throw Error(o(299));
      var i = !1,
        u = "",
        d = zp,
        g = jp,
        S = Pp,
        T = null,
        q = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (g = a.onCaughtError),
          a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (T = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (q = a.formState)),
        (n = uy(e, 1, !0, n, a ?? null, i, u, d, g, S, T, q)),
        (n.context = cy(null)),
        (a = n.current),
        (i = rn()),
        (i = Il(i)),
        (u = Dr(i)),
        (u.callback = null),
        _r(a, u, i),
        (a = i),
        (n.current.lanes = a),
        fa(n, a),
        Fn(n),
        (e[he] = n.current),
        Lf(e),
        new zs(n)
      );
    }),
    (Vi.version = "19.1.1"),
    Vi
  );
}
var My;
function bw() {
  if (My) return Wf.exports;
  My = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return (t(), (Wf.exports = vw()), Wf.exports);
}
var Sw = bw(),
  b = $d();
const Ir = tv(b),
  rv = fw({ __proto__: null, default: Ir }, [b]);
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var av = (t) => {
    throw TypeError(t);
  },
  ww = (t, r, l) => r.has(t) || av("Cannot " + l),
  ad = (t, r, l) => (
    ww(t, r, "read from private field"),
    l ? l.call(t) : r.get(t)
  ),
  Ew = (t, r, l) =>
    r.has(t)
      ? av("Cannot add the same private member more than once")
      : r instanceof WeakSet
        ? r.add(t)
        : r.set(t, l),
  Dy = "popstate";
function xw(t = {}) {
  function r(o, s) {
    let { pathname: c, search: f, hash: h } = o.location;
    return Wi(
      "",
      { pathname: c, search: f, hash: h },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function l(o, s) {
    return typeof s == "string" ? s : na(s);
  }
  return Cw(r, l, null, t);
}
function qe(t, r) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
function dt(t, r) {
  if (!t) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function Rw() {
  return Math.random().toString(36).substring(2, 10);
}
function _y(t, r) {
  return { usr: t.state, key: t.key, idx: r };
}
function Wi(t, r, l = null, o) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? ia(r) : r),
    state: l,
    key: (r && r.key) || o || Rw(),
  };
}
function na({ pathname: t = "/", search: r = "", hash: l = "" }) {
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    l && l !== "#" && (t += l.charAt(0) === "#" ? l : "#" + l),
    t
  );
}
function ia(t) {
  let r = {};
  if (t) {
    let l = t.indexOf("#");
    l >= 0 && ((r.hash = t.substring(l)), (t = t.substring(0, l)));
    let o = t.indexOf("?");
    (o >= 0 && ((r.search = t.substring(o)), (t = t.substring(0, o))),
      t && (r.pathname = t));
  }
  return r;
}
function Cw(t, r, l, o = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = o,
    f = s.history,
    h = "POP",
    p = null,
    m = y();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ""));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    h = "POP";
    let C = y(),
      M = C == null ? null : C - m;
    ((m = C), p && p({ action: h, location: R.location, delta: M }));
  }
  function w(C, M) {
    h = "PUSH";
    let j = Wi(R.location, C, M);
    m = y() + 1;
    let U = _y(j, m),
      G = R.createHref(j);
    try {
      f.pushState(U, "", G);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      s.location.assign(G);
    }
    c && p && p({ action: h, location: R.location, delta: 1 });
  }
  function x(C, M) {
    h = "REPLACE";
    let j = Wi(R.location, C, M);
    m = y();
    let U = _y(j, m),
      G = R.createHref(j);
    (f.replaceState(U, "", G),
      c && p && p({ action: h, location: R.location, delta: 0 }));
  }
  function E(C) {
    return lv(C);
  }
  let R = {
    get action() {
      return h;
    },
    get location() {
      return t(s, f);
    },
    listen(C) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Dy, v),
        (p = C),
        () => {
          (s.removeEventListener(Dy, v), (p = null));
        }
      );
    },
    createHref(C) {
      return r(s, C);
    },
    createURL: E,
    encodeLocation(C) {
      let M = E(C);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: w,
    replace: x,
    go(C) {
      return f.go(C);
    },
  };
  return R;
}
function lv(t, r = !1) {
  let l = "http://localhost";
  (typeof window < "u" &&
    (l =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    qe(l, "No window.location.(origin|href) available to create URL"));
  let o = typeof t == "string" ? t : na(t);
  return (
    (o = o.replace(/ $/, "%20")),
    !r && o.startsWith("//") && (o = l + o),
    new URL(o, l)
  );
}
var $i,
  Ny = class {
    constructor(t) {
      if ((Ew(this, $i, new Map()), t)) for (let [r, l] of t) this.set(r, l);
    }
    get(t) {
      if (ad(this, $i).has(t)) return ad(this, $i).get(t);
      if (t.defaultValue !== void 0) return t.defaultValue;
      throw new Error("No value found for context");
    }
    set(t, r) {
      ad(this, $i).set(t, r);
    }
  };
$i = new WeakMap();
var Aw = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Ow(t) {
  return Aw.has(t);
}
var Tw = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function Mw(t) {
  return Tw.has(t);
}
function Dw(t) {
  return t.index === !0;
}
function eo(t, r, l = [], o = {}, s = !1) {
  return t.map((c, f) => {
    let h = [...l, String(f)],
      p = typeof c.id == "string" ? c.id : h.join("-");
    if (
      (qe(
        c.index !== !0 || !c.children,
        "Cannot specify children on an index route",
      ),
      qe(
        s || !o[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`,
      ),
      Dw(c))
    ) {
      let m = { ...c, ...r(c), id: p };
      return ((o[p] = m), m);
    } else {
      let m = { ...c, ...r(c), id: p, children: void 0 };
      return (
        (o[p] = m),
        c.children && (m.children = eo(c.children, r, h, o, s)),
        m
      );
    }
  });
}
function Wr(t, r, l = "/") {
  return $s(t, r, l, !1);
}
function $s(t, r, l, o) {
  let s = typeof r == "string" ? ia(r) : r,
    c = En(s.pathname || "/", l);
  if (c == null) return null;
  let f = iv(t);
  Nw(f);
  let h = null;
  for (let p = 0; h == null && p < f.length; ++p) {
    let m = Gw(c);
    h = qw(f[p], m, o);
  }
  return h;
}
function _w(t, r) {
  let { route: l, pathname: o, params: s } = t;
  return {
    id: l.id,
    pathname: o,
    params: s,
    data: r[l.id],
    loaderData: r[l.id],
    handle: l.handle,
  };
}
function iv(t, r = [], l = [], o = "", s = !1) {
  let c = (f, h, p = s, m) => {
    let y = {
      relativePath: m === void 0 ? f.path || "" : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f,
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(o) && p) return;
      (qe(
        y.relativePath.startsWith(o),
        `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(o.length)));
    }
    let v = Kn([o, y.relativePath]),
      w = l.concat(y);
    (f.children &&
      f.children.length > 0 &&
      (qe(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`,
      ),
      iv(f.children, r, w, v, p)),
      !(f.path == null && !f.index) &&
        r.push({ path: v, score: Bw(v, f.index), routesMeta: w }));
  };
  return (
    t.forEach((f, h) => {
      if (f.path === "" || !f.path?.includes("?")) c(f, h);
      else for (let p of ov(f.path)) c(f, h, !0, p);
    }),
    r
  );
}
function ov(t) {
  let r = t.split("/");
  if (r.length === 0) return [];
  let [l, ...o] = r,
    s = l.endsWith("?"),
    c = l.replace(/\?$/, "");
  if (o.length === 0) return s ? [c, ""] : [c];
  let f = ov(o.join("/")),
    h = [];
  return (
    h.push(...f.map((p) => (p === "" ? c : [c, p].join("/")))),
    s && h.push(...f),
    h.map((p) => (t.startsWith("/") && p === "" ? "/" : p))
  );
}
function Nw(t) {
  t.sort((r, l) =>
    r.score !== l.score
      ? l.score - r.score
      : kw(
          r.routesMeta.map((o) => o.childrenIndex),
          l.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var Lw = /^:[\w-]+$/,
  Uw = 3,
  zw = 2,
  jw = 1,
  Pw = 10,
  Hw = -2,
  Ly = (t) => t === "*";
function Bw(t, r) {
  let l = t.split("/"),
    o = l.length;
  return (
    l.some(Ly) && (o += Hw),
    r && (o += zw),
    l
      .filter((s) => !Ly(s))
      .reduce((s, c) => s + (Lw.test(c) ? Uw : c === "" ? jw : Pw), o)
  );
}
function kw(t, r) {
  return t.length === r.length && t.slice(0, -1).every((o, s) => o === r[s])
    ? t[t.length - 1] - r[r.length - 1]
    : 0;
}
function qw(t, r, l = !1) {
  let { routesMeta: o } = t,
    s = {},
    c = "/",
    f = [];
  for (let h = 0; h < o.length; ++h) {
    let p = o[h],
      m = h === o.length - 1,
      y = c === "/" ? r : r.slice(c.length) || "/",
      v = ou(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        y,
      ),
      w = p.route;
    if (
      (!v &&
        m &&
        l &&
        !o[o.length - 1].route.index &&
        (v = ou(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          y,
        )),
      !v)
    )
      return null;
    (Object.assign(s, v.params),
      f.push({
        params: s,
        pathname: Kn([c, v.pathname]),
        pathnameBase: Kw(Kn([c, v.pathnameBase])),
        route: w,
      }),
      v.pathnameBase !== "/" && (c = Kn([c, v.pathnameBase])));
  }
  return f;
}
function ou(t, r) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [l, o] = Fw(t.path, t.caseSensitive, t.end),
    s = r.match(l);
  if (!s) return null;
  let c = s[0],
    f = c.replace(/(.)\/+$/, "$1"),
    h = s.slice(1);
  return {
    params: o.reduce((m, { paramName: y, isOptional: v }, w) => {
      if (y === "*") {
        let E = h[w] || "";
        f = c.slice(0, c.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const x = h[w];
      return (
        v && !x ? (m[y] = void 0) : (m[y] = (x || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: t,
  };
}
function Fw(t, r = !1, l = !0) {
  dt(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`,
  );
  let o = [],
    s =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, h, p) => (
            o.push({ paramName: h, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    t.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
        ? (s += "\\/*$")
        : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, r ? void 0 : "i"), o]
  );
}
function Gw(t) {
  try {
    return t
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      dt(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      t
    );
  }
}
function En(t, r) {
  if (r === "/") return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase())) return null;
  let l = r.endsWith("/") ? r.length - 1 : r.length,
    o = t.charAt(l);
  return o && o !== "/" ? null : t.slice(l) || "/";
}
function Yw({ basename: t, pathname: r }) {
  return r === "/" ? t : Kn([t, r]);
}
function Vw(t, r = "/") {
  let {
    pathname: l,
    search: o = "",
    hash: s = "",
  } = typeof t == "string" ? ia(t) : t;
  return {
    pathname: l ? (l.startsWith("/") ? l : Qw(l, r)) : r,
    search: Xw(o),
    hash: Zw(s),
  };
}
function Qw(t, r) {
  let l = r.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((s) => {
      s === ".." ? l.length > 1 && l.pop() : s !== "." && l.push(s);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function ld(t, r, l, o) {
  return `Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function sv(t) {
  return t.filter(
    (r, l) => l === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Jd(t) {
  let r = sv(t);
  return r.map((l, o) => (o === r.length - 1 ? l.pathname : l.pathnameBase));
}
function Wd(t, r, l, o = !1) {
  let s;
  typeof t == "string"
    ? (s = ia(t))
    : ((s = { ...t }),
      qe(
        !s.pathname || !s.pathname.includes("?"),
        ld("?", "pathname", "search", s),
      ),
      qe(
        !s.pathname || !s.pathname.includes("#"),
        ld("#", "pathname", "hash", s),
      ),
      qe(!s.search || !s.search.includes("#"), ld("#", "search", "hash", s)));
  let c = t === "" || s.pathname === "",
    f = c ? "/" : s.pathname,
    h;
  if (f == null) h = l;
  else {
    let v = r.length - 1;
    if (!o && f.startsWith("..")) {
      let w = f.split("/");
      for (; w[0] === ".."; ) (w.shift(), (v -= 1));
      s.pathname = w.join("/");
    }
    h = v >= 0 ? r[v] : "/";
  }
  let p = Vw(s, h),
    m = f && f !== "/" && f.endsWith("/"),
    y = (c || f === ".") && l.endsWith("/");
  return (!p.pathname.endsWith("/") && (m || y) && (p.pathname += "/"), p);
}
var Kn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Kw = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Xw = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Zw = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t),
  su = class {
    constructor(t, r, l, o = !1) {
      ((this.status = t),
        (this.statusText = r || ""),
        (this.internal = o),
        l instanceof Error
          ? ((this.data = l.toString()), (this.error = l))
          : (this.data = l));
    }
  };
function to(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
var uv = ["POST", "PUT", "PATCH", "DELETE"],
  Iw = new Set(uv),
  $w = ["GET", ...uv],
  Jw = new Set($w),
  Ww = new Set([301, 302, 303, 307, 308]),
  eE = new Set([307, 308]),
  id = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  tE = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  nE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  eh = (t) => nE.test(t),
  rE = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  cv = "remix-router-transitions",
  fv = Symbol("ResetLoaderData");
function aE(t) {
  const r = t.window ? t.window : typeof window < "u" ? window : void 0,
    l =
      typeof r < "u" &&
      typeof r.document < "u" &&
      typeof r.document.createElement < "u";
  qe(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o = t.hydrationRouteProperties || [],
    s = t.mapRouteProperties || rE,
    c = {},
    f = eo(t.routes, s, void 0, c),
    h,
    p = t.basename || "/";
  p.startsWith("/") || (p = `/${p}`);
  let m = t.dataStrategy || uE,
    y = { ...t.future },
    v = null,
    w = new Set(),
    x = null,
    E = null,
    R = null,
    C = t.hydrationData != null,
    M = Wr(f, t.history.location, p),
    j = !1,
    U = null,
    G;
  if (M == null && !t.patchRoutesOnNavigation) {
    let D = bn(404, { pathname: t.history.location.pathname }),
      { matches: H, route: Q } = Ps(f);
    ((G = !0), (M = H), (U = { [Q.id]: D }));
  } else if (
    (M &&
      !t.hydrationData &&
      da(M, f, t.history.location.pathname).active &&
      (M = null),
    M)
  )
    if (M.some((D) => D.route.lazy)) G = !1;
    else if (!M.some((D) => D.route.loader)) G = !0;
    else {
      let D = t.hydrationData ? t.hydrationData.loaderData : null,
        H = t.hydrationData ? t.hydrationData.errors : null;
      if (H) {
        let Q = M.findIndex((te) => H[te.route.id] !== void 0);
        G = M.slice(0, Q + 1).every((te) => !Cd(te.route, D, H));
      } else G = M.every((Q) => !Cd(Q.route, D, H));
    }
  else {
    ((G = !1), (M = []));
    let D = da(null, f, t.history.location.pathname);
    D.active && D.matches && ((j = !0), (M = D.matches));
  }
  let P,
    _ = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: M,
      initialized: G,
      navigation: id,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || U,
      fetchers: new Map(),
      blockers: new Map(),
    },
    K = "POP",
    V = !1,
    ae,
    oe = !1,
    we = new Map(),
    Ee = null,
    ue = !1,
    se = !1,
    be = new Set(),
    N = new Map(),
    $ = 0,
    k = -1,
    ne = new Map(),
    A = new Set(),
    Z = new Map(),
    re = new Map(),
    ee = new Set(),
    ie = new Map(),
    Oe,
    me = null;
  function Re() {
    if (
      ((v = t.history.listen(({ action: D, location: H, delta: Q }) => {
        if (Oe) {
          (Oe(), (Oe = void 0));
          return;
        }
        dt(
          ie.size === 0 || Q != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let te = Ro({
          currentLocation: _.location,
          nextLocation: H,
          historyAction: D,
        });
        if (te && Q != null) {
          let le = new Promise((he) => {
            Oe = he;
          });
          (t.history.go(Q * -1),
            jn(te, {
              state: "blocked",
              location: H,
              proceed() {
                (jn(te, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: H,
                }),
                  le.then(() => t.history.go(Q)));
              },
              reset() {
                let he = new Map(_.blockers);
                (he.set(te, Qi), We({ blockers: he }));
              },
            }));
          return;
        }
        return Rn(D, H);
      })),
      l)
    ) {
      RE(r, we);
      let D = () => CE(r, we);
      (r.addEventListener("pagehide", D),
        (Ee = () => r.removeEventListener("pagehide", D)));
    }
    return (
      _.initialized || Rn("POP", _.location, { initialHydration: !0 }),
      P
    );
  }
  function Fe() {
    (v && v(),
      Ee && Ee(),
      w.clear(),
      ae && ae.abort(),
      _.fetchers.forEach((D, H) => Ot(H)),
      _.blockers.forEach((D, H) => ca(H)));
  }
  function Ct(D) {
    return (w.add(D), () => w.delete(D));
  }
  function We(D, H = {}) {
    (D.matches &&
      (D.matches = D.matches.map((le) => {
        let he = c[le.route.id],
          ve = le.route;
        return ve.element !== he.element ||
          ve.errorElement !== he.errorElement ||
          ve.hydrateFallbackElement !== he.hydrateFallbackElement
          ? { ...le, route: he }
          : le;
      })),
      (_ = { ..._, ...D }));
    let Q = [],
      te = [];
    (_.fetchers.forEach((le, he) => {
      le.state === "idle" && (ee.has(he) ? Q.push(he) : te.push(he));
    }),
      ee.forEach((le) => {
        !_.fetchers.has(le) && !N.has(le) && Q.push(le);
      }),
      [...w].forEach((le) =>
        le(_, {
          deletedFetchers: Q,
          viewTransitionOpts: H.viewTransitionOpts,
          flushSync: H.flushSync === !0,
        }),
      ),
      Q.forEach((le) => Ot(le)),
      te.forEach((le) => _.fetchers.delete(le)));
  }
  function At(D, H, { flushSync: Q } = {}) {
    let te =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        Qt(_.navigation.formMethod) &&
        _.navigation.state === "loading" &&
        D.state?._isRedirect !== !0,
      le;
    H.actionData
      ? Object.keys(H.actionData).length > 0
        ? (le = H.actionData)
        : (le = null)
      : te
        ? (le = _.actionData)
        : (le = null);
    let he = H.loaderData
        ? Gy(_.loaderData, H.loaderData, H.matches || [], H.errors)
        : _.loaderData,
      ve = _.blockers;
    ve.size > 0 && ((ve = new Map(ve)), ve.forEach((ye, ge) => ve.set(ge, Qi)));
    let pe = ue ? !1 : Ao(D, H.matches || _.matches),
      xe =
        V === !0 ||
        (_.navigation.formMethod != null &&
          Qt(_.navigation.formMethod) &&
          D.state?._isRedirect !== !0);
    (h && ((f = h), (h = void 0)),
      ue ||
        K === "POP" ||
        (K === "PUSH"
          ? t.history.push(D, D.state)
          : K === "REPLACE" && t.history.replace(D, D.state)));
    let Ce;
    if (K === "POP") {
      let ye = we.get(_.location.pathname);
      ye && ye.has(D.pathname)
        ? (Ce = { currentLocation: _.location, nextLocation: D })
        : we.has(D.pathname) &&
          (Ce = { currentLocation: D, nextLocation: _.location });
    } else if (oe) {
      let ye = we.get(_.location.pathname);
      (ye
        ? ye.add(D.pathname)
        : ((ye = new Set([D.pathname])), we.set(_.location.pathname, ye)),
        (Ce = { currentLocation: _.location, nextLocation: D }));
    }
    (We(
      {
        ...H,
        actionData: le,
        loaderData: he,
        historyAction: K,
        location: D,
        initialized: !0,
        navigation: id,
        revalidation: "idle",
        restoreScrollPosition: pe,
        preventScrollReset: xe,
        blockers: ve,
      },
      { viewTransitionOpts: Ce, flushSync: Q === !0 },
    ),
      (K = "POP"),
      (V = !1),
      (oe = !1),
      (ue = !1),
      (se = !1),
      me?.resolve(),
      (me = null));
  }
  async function Zt(D, H) {
    if (typeof D == "number") {
      t.history.go(D);
      return;
    }
    let Q = Rd(_.location, _.matches, p, D, H?.fromRouteId, H?.relative),
      { path: te, submission: le, error: he } = Uy(!1, Q, H),
      ve = _.location,
      pe = Wi(_.location, te, H && H.state);
    pe = { ...pe, ...t.history.encodeLocation(pe) };
    let xe = H && H.replace != null ? H.replace : void 0,
      Ce = "PUSH";
    xe === !0
      ? (Ce = "REPLACE")
      : xe === !1 ||
        (le != null &&
          Qt(le.formMethod) &&
          le.formAction === _.location.pathname + _.location.search &&
          (Ce = "REPLACE"));
    let ye =
        H && "preventScrollReset" in H ? H.preventScrollReset === !0 : void 0,
      ge = (H && H.flushSync) === !0,
      Ue = Ro({ currentLocation: ve, nextLocation: pe, historyAction: Ce });
    if (Ue) {
      jn(Ue, {
        state: "blocked",
        location: pe,
        proceed() {
          (jn(Ue, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: pe,
          }),
            Zt(D, H));
        },
        reset() {
          let Ve = new Map(_.blockers);
          (Ve.set(Ue, Qi), We({ blockers: Ve }));
        },
      });
      return;
    }
    await Rn(Ce, pe, {
      submission: le,
      pendingError: he,
      preventScrollReset: ye,
      replace: H && H.replace,
      enableViewTransition: H && H.viewTransition,
      flushSync: ge,
    });
  }
  function Un() {
    (me || (me = AE()), Zl(), We({ revalidation: "loading" }));
    let D = me.promise;
    return _.navigation.state === "submitting"
      ? D
      : _.navigation.state === "idle"
        ? (Rn(_.historyAction, _.location, {
            startUninterruptedRevalidation: !0,
          }),
          D)
        : (Rn(K || _.historyAction, _.navigation.location, {
            overrideNavigation: _.navigation,
            enableViewTransition: oe === !0,
          }),
          D);
  }
  async function Rn(D, H, Q) {
    (ae && ae.abort(),
      (ae = null),
      (K = D),
      (ue = (Q && Q.startUninterruptedRevalidation) === !0),
      fa(_.location, _.matches),
      (V = (Q && Q.preventScrollReset) === !0),
      (oe = (Q && Q.enableViewTransition) === !0));
    let te = h || f,
      le = Q && Q.overrideNavigation,
      he =
        Q?.initialHydration && _.matches && _.matches.length > 0 && !j
          ? _.matches
          : Wr(te, H, p),
      ve = (Q && Q.flushSync) === !0;
    if (
      he &&
      _.initialized &&
      !se &&
      gE(_.location, H) &&
      !(Q && Q.submission && Qt(Q.submission.formMethod))
    ) {
      At(H, { matches: he }, { flushSync: ve });
      return;
    }
    let pe = da(he, te, H.pathname);
    if ((pe.active && pe.matches && (he = pe.matches), !he)) {
      let { error: ot, notFoundMatches: De, route: Ze } = Va(H.pathname);
      At(
        H,
        { matches: De, loaderData: {}, errors: { [Ze.id]: ot } },
        { flushSync: ve },
      );
      return;
    }
    ae = new AbortController();
    let xe = _l(t.history, H, ae.signal, Q && Q.submission),
      Ce = t.getContext ? await t.getContext() : new Ny(),
      ye;
    if (Q && Q.pendingError)
      ye = [ea(he).route.id, { type: "error", error: Q.pendingError }];
    else if (Q && Q.submission && Qt(Q.submission.formMethod)) {
      let ot = await Yu(
        xe,
        H,
        Q.submission,
        he,
        Ce,
        pe.active,
        Q && Q.initialHydration === !0,
        { replace: Q.replace, flushSync: ve },
      );
      if (ot.shortCircuited) return;
      if (ot.pendingActionResult) {
        let [De, Ze] = ot.pendingActionResult;
        if (ln(Ze) && to(Ze.error) && Ze.error.status === 404) {
          ((ae = null),
            At(H, {
              matches: ot.matches,
              loaderData: {},
              errors: { [De]: Ze.error },
            }));
          return;
        }
      }
      ((he = ot.matches || he),
        (ye = ot.pendingActionResult),
        (le = od(H, Q.submission)),
        (ve = !1),
        (pe.active = !1),
        (xe = _l(t.history, xe.url, xe.signal)));
    }
    let {
      shortCircuited: ge,
      matches: Ue,
      loaderData: Ve,
      errors: nt,
    } = await Vu(
      xe,
      H,
      he,
      Ce,
      pe.active,
      le,
      Q && Q.submission,
      Q && Q.fetcherSubmission,
      Q && Q.replace,
      Q && Q.initialHydration === !0,
      ve,
      ye,
    );
    ge ||
      ((ae = null),
      At(H, { matches: Ue || he, ...Yy(ye), loaderData: Ve, errors: nt }));
  }
  async function Yu(D, H, Q, te, le, he, ve, pe = {}) {
    Zl();
    let xe = EE(H, Q);
    if ((We({ navigation: xe }, { flushSync: pe.flushSync === !0 }), he)) {
      let ge = await ha(te, H.pathname, D.signal);
      if (ge.type === "aborted") return { shortCircuited: !0 };
      if (ge.type === "error") {
        if (ge.partialMatches.length === 0) {
          let { matches: Ve, route: nt } = Ps(f);
          return {
            matches: Ve,
            pendingActionResult: [nt.id, { type: "error", error: ge.error }],
          };
        }
        let Ue = ea(ge.partialMatches).route.id;
        return {
          matches: ge.partialMatches,
          pendingActionResult: [Ue, { type: "error", error: ge.error }],
        };
      } else if (ge.matches) te = ge.matches;
      else {
        let { notFoundMatches: Ue, error: Ve, route: nt } = Va(H.pathname);
        return {
          matches: Ue,
          pendingActionResult: [nt.id, { type: "error", error: Ve }],
        };
      }
    }
    let Ce,
      ye = Js(te, H);
    if (!ye.route.action && !ye.route.lazy)
      Ce = {
        type: "error",
        error: bn(405, {
          method: D.method,
          pathname: H.pathname,
          routeId: ye.route.id,
        }),
      };
    else {
      let ge = Nl(s, c, D, te, ye, ve ? [] : o, le),
        Ue = await Rr(D, ge, le, null);
      if (((Ce = Ue[ye.route.id]), !Ce)) {
        for (let Ve of te)
          if (Ue[Ve.route.id]) {
            Ce = Ue[Ve.route.id];
            break;
          }
      }
      if (D.signal.aborted) return { shortCircuited: !0 };
    }
    if (_a(Ce)) {
      let ge;
      return (
        pe && pe.replace != null
          ? (ge = pe.replace)
          : (ge =
              ky(Ce.response.headers.get("Location"), new URL(D.url), p) ===
              _.location.pathname + _.location.search),
        await er(D, Ce, !0, { submission: Q, replace: ge }),
        { shortCircuited: !0 }
      );
    }
    if (ln(Ce)) {
      let ge = ea(te, ye.route.id);
      return (
        (pe && pe.replace) !== !0 && (K = "PUSH"),
        { matches: te, pendingActionResult: [ge.route.id, Ce, ye.route.id] }
      );
    }
    return { matches: te, pendingActionResult: [ye.route.id, Ce] };
  }
  async function Vu(D, H, Q, te, le, he, ve, pe, xe, Ce, ye, ge) {
    let Ue = he || od(H, ve),
      Ve = ve || pe || Qy(Ue),
      nt = !ue && !Ce;
    if (le) {
      if (nt) {
        let mt = It(ge);
        We(
          { navigation: Ue, ...(mt !== void 0 ? { actionData: mt } : {}) },
          { flushSync: ye },
        );
      }
      let _e = await ha(Q, H.pathname, D.signal);
      if (_e.type === "aborted") return { shortCircuited: !0 };
      if (_e.type === "error") {
        if (_e.partialMatches.length === 0) {
          let { matches: lr, route: qt } = Ps(f);
          return { matches: lr, loaderData: {}, errors: { [qt.id]: _e.error } };
        }
        let mt = ea(_e.partialMatches).route.id;
        return {
          matches: _e.partialMatches,
          loaderData: {},
          errors: { [mt]: _e.error },
        };
      } else if (_e.matches) Q = _e.matches;
      else {
        let { error: mt, notFoundMatches: lr, route: qt } = Va(H.pathname);
        return { matches: lr, loaderData: {}, errors: { [qt.id]: mt } };
      }
    }
    let ot = h || f,
      { dsMatches: De, revalidatingFetchers: Ze } = zy(
        D,
        te,
        s,
        c,
        t.history,
        _,
        Q,
        Ve,
        H,
        Ce ? [] : o,
        Ce === !0,
        se,
        be,
        ee,
        Z,
        A,
        ot,
        p,
        t.patchRoutesOnNavigation != null,
        ge,
      );
    if (
      ((k = ++$),
      !t.dataStrategy &&
        !De.some((_e) => _e.shouldLoad) &&
        !De.some((_e) => _e.route.middleware) &&
        Ze.length === 0)
    ) {
      let _e = sa();
      return (
        At(
          H,
          {
            matches: Q,
            loaderData: {},
            errors: ge && ln(ge[1]) ? { [ge[0]]: ge[1].error } : null,
            ...Yy(ge),
            ...(_e ? { fetchers: new Map(_.fetchers) } : {}),
          },
          { flushSync: ye },
        ),
        { shortCircuited: !0 }
      );
    }
    if (nt) {
      let _e = {};
      if (!le) {
        _e.navigation = Ue;
        let mt = It(ge);
        mt !== void 0 && (_e.actionData = mt);
      }
      (Ze.length > 0 && (_e.fetchers = Qu(Ze)), We(_e, { flushSync: ye }));
    }
    Ze.forEach((_e) => {
      (zn(_e.key), _e.controller && N.set(_e.key, _e.controller));
    });
    let Pn = () => Ze.forEach((_e) => zn(_e.key));
    ae && ae.signal.addEventListener("abort", Pn);
    let { loaderResults: $t, fetcherResults: jt } = await Eo(De, Ze, D, te);
    if (D.signal.aborted) return { shortCircuited: !0 };
    (ae && ae.signal.removeEventListener("abort", Pn),
      Ze.forEach((_e) => N.delete(_e.key)));
    let un = Hs($t);
    if (un)
      return (
        await er(D, un.result, !0, { replace: xe }),
        { shortCircuited: !0 }
      );
    if (((un = Hs(jt)), un))
      return (
        A.add(un.key),
        await er(D, un.result, !0, { replace: xe }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ka, errors: Cr } = Fy(_, Q, $t, ge, Ze, jt);
    Ce && _.errors && (Cr = { ..._.errors, ...Cr });
    let nr = sa(),
      rr = ua(k),
      ar = nr || rr || Ze.length > 0;
    return {
      matches: Q,
      loaderData: Ka,
      errors: Cr,
      ...(ar ? { fetchers: new Map(_.fetchers) } : {}),
    };
  }
  function It(D) {
    if (D && !ln(D[1])) return { [D[0]]: D[1].data };
    if (_.actionData)
      return Object.keys(_.actionData).length === 0 ? null : _.actionData;
  }
  function Qu(D) {
    return (
      D.forEach((H) => {
        let Q = _.fetchers.get(H.key),
          te = Ki(void 0, Q ? Q.data : void 0);
        _.fetchers.set(H.key, te);
      }),
      new Map(_.fetchers)
    );
  }
  async function So(D, H, Q, te) {
    zn(D);
    let le = (te && te.flushSync) === !0,
      he = h || f,
      ve = Rd(_.location, _.matches, p, Q, H, te?.relative),
      pe = Wr(he, ve, p),
      xe = da(pe, he, ve);
    if ((xe.active && xe.matches && (pe = xe.matches), !pe)) {
      at(D, H, bn(404, { pathname: ve }), { flushSync: le });
      return;
    }
    let { path: Ce, submission: ye, error: ge } = Uy(!0, ve, te);
    if (ge) {
      at(D, H, ge, { flushSync: le });
      return;
    }
    let Ue = t.getContext ? await t.getContext() : new Ny(),
      Ve = (te && te.preventScrollReset) === !0;
    if (ye && Qt(ye.formMethod)) {
      await wo(D, H, Ce, pe, Ue, xe.active, le, Ve, ye);
      return;
    }
    (Z.set(D, { routeId: H, path: Ce }),
      await Ya(D, H, Ce, pe, Ue, xe.active, le, Ve, ye));
  }
  async function wo(D, H, Q, te, le, he, ve, pe, xe) {
    (Zl(), Z.delete(D));
    let Ce = _.fetchers.get(D);
    kt(D, xE(xe, Ce), { flushSync: ve });
    let ye = new AbortController(),
      ge = _l(t.history, Q, ye.signal, xe);
    if (he) {
      let lt = await ha(te, new URL(ge.url).pathname, ge.signal, D);
      if (lt.type === "aborted") return;
      if (lt.type === "error") {
        at(D, H, lt.error, { flushSync: ve });
        return;
      } else if (lt.matches) te = lt.matches;
      else {
        at(D, H, bn(404, { pathname: Q }), { flushSync: ve });
        return;
      }
    }
    let Ue = Js(te, Q);
    if (!Ue.route.action && !Ue.route.lazy) {
      let lt = bn(405, { method: xe.formMethod, pathname: Q, routeId: H });
      at(D, H, lt, { flushSync: ve });
      return;
    }
    N.set(D, ye);
    let Ve = $,
      nt = Nl(s, c, ge, te, Ue, o, le),
      De = (await Rr(ge, nt, le, D))[Ue.route.id];
    if (ge.signal.aborted) {
      N.get(D) === ye && N.delete(D);
      return;
    }
    if (ee.has(D)) {
      if (_a(De) || ln(De)) {
        kt(D, $r(void 0));
        return;
      }
    } else {
      if (_a(De))
        if ((N.delete(D), k > Ve)) {
          kt(D, $r(void 0));
          return;
        } else
          return (
            A.add(D),
            kt(D, Ki(xe)),
            er(ge, De, !1, { fetcherSubmission: xe, preventScrollReset: pe })
          );
      if (ln(De)) {
        at(D, H, De.error);
        return;
      }
    }
    let Ze = _.navigation.location || _.location,
      Pn = _l(t.history, Ze, ye.signal),
      $t = h || f,
      jt =
        _.navigation.state !== "idle"
          ? Wr($t, _.navigation.location, p)
          : _.matches;
    qe(jt, "Didn't find any matches after fetcher action");
    let un = ++$;
    ne.set(D, un);
    let Ka = Ki(xe, De.data);
    _.fetchers.set(D, Ka);
    let { dsMatches: Cr, revalidatingFetchers: nr } = zy(
      Pn,
      le,
      s,
      c,
      t.history,
      _,
      jt,
      xe,
      Ze,
      o,
      !1,
      se,
      be,
      ee,
      Z,
      A,
      $t,
      p,
      t.patchRoutesOnNavigation != null,
      [Ue.route.id, De],
    );
    (nr
      .filter((lt) => lt.key !== D)
      .forEach((lt) => {
        let Ar = lt.key,
          Oo = _.fetchers.get(Ar),
          To = Ki(void 0, Oo ? Oo.data : void 0);
        (_.fetchers.set(Ar, To),
          zn(Ar),
          lt.controller && N.set(Ar, lt.controller));
      }),
      We({ fetchers: new Map(_.fetchers) }));
    let rr = () => nr.forEach((lt) => zn(lt.key));
    ye.signal.addEventListener("abort", rr);
    let { loaderResults: ar, fetcherResults: _e } = await Eo(Cr, nr, Pn, le);
    if (ye.signal.aborted) return;
    if (
      (ye.signal.removeEventListener("abort", rr),
      ne.delete(D),
      N.delete(D),
      nr.forEach((lt) => N.delete(lt.key)),
      _.fetchers.has(D))
    ) {
      let lt = $r(De.data);
      _.fetchers.set(D, lt);
    }
    let mt = Hs(ar);
    if (mt) return er(Pn, mt.result, !1, { preventScrollReset: pe });
    if (((mt = Hs(_e)), mt))
      return (A.add(mt.key), er(Pn, mt.result, !1, { preventScrollReset: pe }));
    let { loaderData: lr, errors: qt } = Fy(_, jt, ar, void 0, nr, _e);
    (ua(un),
      _.navigation.state === "loading" && un > k
        ? (qe(K, "Expected pending action"),
          ae && ae.abort(),
          At(_.navigation.location, {
            matches: jt,
            loaderData: lr,
            errors: qt,
            fetchers: new Map(_.fetchers),
          }))
        : (We({
            errors: qt,
            loaderData: Gy(_.loaderData, lr, jt, qt),
            fetchers: new Map(_.fetchers),
          }),
          (se = !1)));
  }
  async function Ya(D, H, Q, te, le, he, ve, pe, xe) {
    let Ce = _.fetchers.get(D);
    kt(D, Ki(xe, Ce ? Ce.data : void 0), { flushSync: ve });
    let ye = new AbortController(),
      ge = _l(t.history, Q, ye.signal);
    if (he) {
      let Ze = await ha(te, new URL(ge.url).pathname, ge.signal, D);
      if (Ze.type === "aborted") return;
      if (Ze.type === "error") {
        at(D, H, Ze.error, { flushSync: ve });
        return;
      } else if (Ze.matches) te = Ze.matches;
      else {
        at(D, H, bn(404, { pathname: Q }), { flushSync: ve });
        return;
      }
    }
    let Ue = Js(te, Q);
    N.set(D, ye);
    let Ve = $,
      nt = Nl(s, c, ge, te, Ue, o, le),
      De = (await Rr(ge, nt, le, D))[Ue.route.id];
    if ((N.get(D) === ye && N.delete(D), !ge.signal.aborted)) {
      if (ee.has(D)) {
        kt(D, $r(void 0));
        return;
      }
      if (_a(De))
        if (k > Ve) {
          kt(D, $r(void 0));
          return;
        } else {
          (A.add(D), await er(ge, De, !1, { preventScrollReset: pe }));
          return;
        }
      if (ln(De)) {
        at(D, H, De.error);
        return;
      }
      kt(D, $r(De.data));
    }
  }
  async function er(
    D,
    H,
    Q,
    {
      submission: te,
      fetcherSubmission: le,
      preventScrollReset: he,
      replace: ve,
    } = {},
  ) {
    H.response.headers.has("X-Remix-Revalidate") && (se = !0);
    let pe = H.response.headers.get("Location");
    (qe(pe, "Expected a Location header on the redirect Response"),
      (pe = ky(pe, new URL(D.url), p)));
    let xe = Wi(_.location, pe, { _isRedirect: !0 });
    if (l) {
      let nt = !1;
      if (H.response.headers.has("X-Remix-Reload-Document")) nt = !0;
      else if (eh(pe)) {
        const ot = lv(pe, !0);
        nt = ot.origin !== r.location.origin || En(ot.pathname, p) == null;
      }
      if (nt) {
        ve ? r.location.replace(pe) : r.location.assign(pe);
        return;
      }
    }
    ae = null;
    let Ce =
        ve === !0 || H.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: ye, formAction: ge, formEncType: Ue } = _.navigation;
    !te && !le && ye && ge && Ue && (te = Qy(_.navigation));
    let Ve = te || le;
    if (eE.has(H.response.status) && Ve && Qt(Ve.formMethod))
      await Rn(Ce, xe, {
        submission: { ...Ve, formAction: pe },
        preventScrollReset: he || V,
        enableViewTransition: Q ? oe : void 0,
      });
    else {
      let nt = od(xe, te);
      await Rn(Ce, xe, {
        overrideNavigation: nt,
        fetcherSubmission: le,
        preventScrollReset: he || V,
        enableViewTransition: Q ? oe : void 0,
      });
    }
  }
  async function Rr(D, H, Q, te) {
    let le,
      he = {};
    try {
      le = await fE(m, D, H, te, Q, !1);
    } catch (ve) {
      return (
        H.filter((pe) => pe.shouldLoad).forEach((pe) => {
          he[pe.route.id] = { type: "error", error: ve };
        }),
        he
      );
    }
    if (D.signal.aborted) return he;
    for (let [ve, pe] of Object.entries(le))
      if (SE(pe)) {
        let xe = pe.result;
        he[ve] = { type: "redirect", response: pE(xe, D, ve, H, p) };
      } else he[ve] = await mE(pe);
    return he;
  }
  async function Eo(D, H, Q, te) {
    let le = Rr(Q, D, te, null),
      he = Promise.all(
        H.map(async (xe) => {
          if (xe.matches && xe.match && xe.request && xe.controller) {
            let ye = (await Rr(xe.request, xe.matches, te, xe.key))[
              xe.match.route.id
            ];
            return { [xe.key]: ye };
          } else
            return Promise.resolve({
              [xe.key]: {
                type: "error",
                error: bn(404, { pathname: xe.path }),
              },
            });
        }),
      ),
      ve = await le,
      pe = (await he).reduce((xe, Ce) => Object.assign(xe, Ce), {});
    return { loaderResults: ve, fetcherResults: pe };
  }
  function Zl() {
    ((se = !0),
      Z.forEach((D, H) => {
        (N.has(H) && be.add(H), zn(H));
      }));
  }
  function kt(D, H, Q = {}) {
    (_.fetchers.set(D, H),
      We(
        { fetchers: new Map(_.fetchers) },
        { flushSync: (Q && Q.flushSync) === !0 },
      ));
  }
  function at(D, H, Q, te = {}) {
    let le = ea(_.matches, H);
    (Ot(D),
      We(
        { errors: { [le.route.id]: Q }, fetchers: new Map(_.fetchers) },
        { flushSync: (te && te.flushSync) === !0 },
      ));
  }
  function Cn(D) {
    return (
      re.set(D, (re.get(D) || 0) + 1),
      ee.has(D) && ee.delete(D),
      _.fetchers.get(D) || tE
    );
  }
  function Ot(D) {
    let H = _.fetchers.get(D);
    (N.has(D) && !(H && H.state === "loading" && ne.has(D)) && zn(D),
      Z.delete(D),
      ne.delete(D),
      A.delete(D),
      ee.delete(D),
      be.delete(D),
      _.fetchers.delete(D));
  }
  function Ku(D) {
    let H = (re.get(D) || 0) - 1;
    (H <= 0 ? (re.delete(D), ee.add(D)) : re.set(D, H),
      We({ fetchers: new Map(_.fetchers) }));
  }
  function zn(D) {
    let H = N.get(D);
    H && (H.abort(), N.delete(D));
  }
  function xo(D) {
    for (let H of D) {
      let Q = Cn(H),
        te = $r(Q.data);
      _.fetchers.set(H, te);
    }
  }
  function sa() {
    let D = [],
      H = !1;
    for (let Q of A) {
      let te = _.fetchers.get(Q);
      (qe(te, `Expected fetcher: ${Q}`),
        te.state === "loading" && (A.delete(Q), D.push(Q), (H = !0)));
    }
    return (xo(D), H);
  }
  function ua(D) {
    let H = [];
    for (let [Q, te] of ne)
      if (te < D) {
        let le = _.fetchers.get(Q);
        (qe(le, `Expected fetcher: ${Q}`),
          le.state === "loading" && (zn(Q), ne.delete(Q), H.push(Q)));
      }
    return (xo(H), H.length > 0);
  }
  function tr(D, H) {
    let Q = _.blockers.get(D) || Qi;
    return (ie.get(D) !== H && ie.set(D, H), Q);
  }
  function ca(D) {
    (_.blockers.delete(D), ie.delete(D));
  }
  function jn(D, H) {
    let Q = _.blockers.get(D) || Qi;
    qe(
      (Q.state === "unblocked" && H.state === "blocked") ||
        (Q.state === "blocked" && H.state === "blocked") ||
        (Q.state === "blocked" && H.state === "proceeding") ||
        (Q.state === "blocked" && H.state === "unblocked") ||
        (Q.state === "proceeding" && H.state === "unblocked"),
      `Invalid blocker state transition: ${Q.state} -> ${H.state}`,
    );
    let te = new Map(_.blockers);
    (te.set(D, H), We({ blockers: te }));
  }
  function Ro({ currentLocation: D, nextLocation: H, historyAction: Q }) {
    if (ie.size === 0) return;
    ie.size > 1 && dt(!1, "A router only supports one blocker at a time");
    let te = Array.from(ie.entries()),
      [le, he] = te[te.length - 1],
      ve = _.blockers.get(le);
    if (
      !(ve && ve.state === "proceeding") &&
      he({ currentLocation: D, nextLocation: H, historyAction: Q })
    )
      return le;
  }
  function Va(D) {
    let H = bn(404, { pathname: D }),
      Q = h || f,
      { matches: te, route: le } = Ps(Q);
    return { notFoundMatches: te, route: le, error: H };
  }
  function Co(D, H, Q) {
    if (((x = D), (R = H), (E = Q || null), !C && _.navigation === id)) {
      C = !0;
      let te = Ao(_.location, _.matches);
      te != null && We({ restoreScrollPosition: te });
    }
    return () => {
      ((x = null), (R = null), (E = null));
    };
  }
  function Qa(D, H) {
    return (
      (E &&
        E(
          D,
          H.map((te) => _w(te, _.loaderData)),
        )) ||
      D.key
    );
  }
  function fa(D, H) {
    if (x && R) {
      let Q = Qa(D, H);
      x[Q] = R();
    }
  }
  function Ao(D, H) {
    if (x) {
      let Q = Qa(D, H),
        te = x[Q];
      if (typeof te == "number") return te;
    }
    return null;
  }
  function da(D, H, Q) {
    if (t.patchRoutesOnNavigation)
      if (D) {
        if (Object.keys(D[0].params).length > 0)
          return { active: !0, matches: $s(H, Q, p, !0) };
      } else return { active: !0, matches: $s(H, Q, p, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ha(D, H, Q, te) {
    if (!t.patchRoutesOnNavigation) return { type: "success", matches: D };
    let le = D;
    for (;;) {
      let he = h == null,
        ve = h || f,
        pe = c;
      try {
        await t.patchRoutesOnNavigation({
          signal: Q,
          path: H,
          matches: le,
          fetcherKey: te,
          patch: (ye, ge) => {
            Q.aborted || jy(ye, ge, ve, pe, s, !1);
          },
        });
      } catch (ye) {
        return { type: "error", error: ye, partialMatches: le };
      } finally {
        he && !Q.aborted && (f = [...f]);
      }
      if (Q.aborted) return { type: "aborted" };
      let xe = Wr(ve, H, p);
      if (xe) return { type: "success", matches: xe };
      let Ce = $s(ve, H, p, !0);
      if (
        !Ce ||
        (le.length === Ce.length &&
          le.every((ye, ge) => ye.route.id === Ce[ge].route.id))
      )
        return { type: "success", matches: null };
      le = Ce;
    }
  }
  function Il(D) {
    ((c = {}), (h = eo(D, s, void 0, c)));
  }
  function $l(D, H, Q = !1) {
    let te = h == null;
    (jy(D, H, h || f, c, s, Q), te && ((f = [...f]), We({})));
  }
  return (
    (P = {
      get basename() {
        return p;
      },
      get future() {
        return y;
      },
      get state() {
        return _;
      },
      get routes() {
        return f;
      },
      get window() {
        return r;
      },
      initialize: Re,
      subscribe: Ct,
      enableScrollRestoration: Co,
      navigate: Zt,
      fetch: So,
      revalidate: Un,
      createHref: (D) => t.history.createHref(D),
      encodeLocation: (D) => t.history.encodeLocation(D),
      getFetcher: Cn,
      deleteFetcher: Ku,
      dispose: Fe,
      getBlocker: tr,
      deleteBlocker: ca,
      patchRoutes: $l,
      _internalFetchControllers: N,
      _internalSetRoutes: Il,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(D) {
        We(D);
      },
    }),
    P
  );
}
function lE(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function Rd(t, r, l, o, s, c) {
  let f, h;
  if (s) {
    f = [];
    for (let m of r)
      if ((f.push(m), m.route.id === s)) {
        h = m;
        break;
      }
  } else ((f = r), (h = r[r.length - 1]));
  let p = Wd(o || ".", Jd(f), En(t.pathname, l) || t.pathname, c === "path");
  if (
    (o == null && ((p.search = t.search), (p.hash = t.hash)),
    (o == null || o === "" || o === ".") && h)
  ) {
    let m = th(p.search);
    if (h.route.index && !m)
      p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && m) {
      let y = new URLSearchParams(p.search),
        v = y.getAll("index");
      (y.delete("index"),
        v.filter((x) => x).forEach((x) => y.append("index", x)));
      let w = y.toString();
      p.search = w ? `?${w}` : "";
    }
  }
  return (
    l !== "/" && (p.pathname = Yw({ basename: l, pathname: p.pathname })),
    na(p)
  );
}
function Uy(t, r, l) {
  if (!l || !lE(l)) return { path: r };
  if (l.formMethod && !wE(l.formMethod))
    return { path: r, error: bn(405, { method: l.formMethod }) };
  let o = () => ({ path: r, error: bn(400, { type: "invalid-body" }) }),
    c = (l.formMethod || "get").toUpperCase(),
    f = gv(r);
  if (l.body !== void 0) {
    if (l.formEncType === "text/plain") {
      if (!Qt(c)) return o();
      let v =
        typeof l.body == "string"
          ? l.body
          : l.body instanceof FormData || l.body instanceof URLSearchParams
            ? Array.from(l.body.entries()).reduce(
                (w, [x, E]) => `${w}${x}=${E}
`,
                "",
              )
            : String(l.body);
      return {
        path: r,
        submission: {
          formMethod: c,
          formAction: f,
          formEncType: l.formEncType,
          formData: void 0,
          json: void 0,
          text: v,
        },
      };
    } else if (l.formEncType === "application/json") {
      if (!Qt(c)) return o();
      try {
        let v = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
        return {
          path: r,
          submission: {
            formMethod: c,
            formAction: f,
            formEncType: l.formEncType,
            formData: void 0,
            json: v,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  qe(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let h, p;
  if (l.formData) ((h = Od(l.formData)), (p = l.formData));
  else if (l.body instanceof FormData) ((h = Od(l.body)), (p = l.body));
  else if (l.body instanceof URLSearchParams) ((h = l.body), (p = qy(h)));
  else if (l.body == null) ((h = new URLSearchParams()), (p = new FormData()));
  else
    try {
      ((h = new URLSearchParams(l.body)), (p = qy(h)));
    } catch {
      return o();
    }
  let m = {
    formMethod: c,
    formAction: f,
    formEncType: (l && l.formEncType) || "application/x-www-form-urlencoded",
    formData: p,
    json: void 0,
    text: void 0,
  };
  if (Qt(m.formMethod)) return { path: r, submission: m };
  let y = ia(r);
  return (
    t && y.search && th(y.search) && h.append("index", ""),
    (y.search = `?${h}`),
    { path: na(y), submission: m }
  );
}
function zy(t, r, l, o, s, c, f, h, p, m, y, v, w, x, E, R, C, M, j, U) {
  let G = U ? (ln(U[1]) ? U[1].error : U[1].data) : void 0,
    P = s.createURL(c.location),
    _ = s.createURL(p),
    K;
  if (y && c.errors) {
    let ue = Object.keys(c.errors)[0];
    K = f.findIndex((se) => se.route.id === ue);
  } else if (U && ln(U[1])) {
    let ue = U[0];
    K = f.findIndex((se) => se.route.id === ue) - 1;
  }
  let V = U ? U[1].statusCode : void 0,
    ae = V && V >= 400,
    oe = {
      currentUrl: P,
      currentParams: c.matches[0]?.params || {},
      nextUrl: _,
      nextParams: f[0].params,
      ...h,
      actionResult: G,
      actionStatus: V,
    },
    we = f.map((ue, se) => {
      let { route: be } = ue,
        N = null;
      if (
        (K != null && se > K
          ? (N = !1)
          : be.lazy
            ? (N = !0)
            : be.loader == null
              ? (N = !1)
              : y
                ? (N = Cd(be, c.loaderData, c.errors))
                : iE(c.loaderData, c.matches[se], ue) && (N = !0),
        N !== null)
      )
        return Ad(l, o, t, ue, m, r, N);
      let $ = ae
          ? !1
          : v ||
            P.pathname + P.search === _.pathname + _.search ||
            P.search !== _.search ||
            oE(c.matches[se], ue),
        k = { ...oe, defaultShouldRevalidate: $ },
        ne = uu(ue, k);
      return Ad(l, o, t, ue, m, r, ne, k);
    }),
    Ee = [];
  return (
    E.forEach((ue, se) => {
      if (y || !f.some((re) => re.route.id === ue.routeId) || x.has(se)) return;
      let be = c.fetchers.get(se),
        N = be && be.state !== "idle" && be.data === void 0,
        $ = Wr(C, ue.path, M);
      if (!$) {
        if (j && N) return;
        Ee.push({
          key: se,
          routeId: ue.routeId,
          path: ue.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (R.has(se)) return;
      let k = Js($, ue.path),
        ne = new AbortController(),
        A = _l(s, ue.path, ne.signal),
        Z = null;
      if (w.has(se)) (w.delete(se), (Z = Nl(l, o, A, $, k, m, r)));
      else if (N) v && (Z = Nl(l, o, A, $, k, m, r));
      else {
        let re = { ...oe, defaultShouldRevalidate: ae ? !1 : v };
        uu(k, re) && (Z = Nl(l, o, A, $, k, m, r, re));
      }
      Z &&
        Ee.push({
          key: se,
          routeId: ue.routeId,
          path: ue.path,
          matches: Z,
          match: k,
          request: A,
          controller: ne,
        });
    }),
    { dsMatches: we, revalidatingFetchers: Ee }
  );
}
function Cd(t, r, l) {
  if (t.lazy) return !0;
  if (!t.loader) return !1;
  let o = r != null && t.id in r,
    s = l != null && l[t.id] !== void 0;
  return !o && s
    ? !1
    : typeof t.loader == "function" && t.loader.hydrate === !0
      ? !0
      : !o && !s;
}
function iE(t, r, l) {
  let o = !r || l.route.id !== r.route.id,
    s = !t.hasOwnProperty(l.route.id);
  return o || s;
}
function oE(t, r) {
  let l = t.route.path;
  return (
    t.pathname !== r.pathname ||
    (l != null && l.endsWith("*") && t.params["*"] !== r.params["*"])
  );
}
function uu(t, r) {
  if (t.route.shouldRevalidate) {
    let l = t.route.shouldRevalidate(r);
    if (typeof l == "boolean") return l;
  }
  return r.defaultShouldRevalidate;
}
function jy(t, r, l, o, s, c) {
  let f;
  if (t) {
    let m = o[t];
    (qe(m, `No route found to patch children into: routeId = ${t}`),
      m.children || (m.children = []),
      (f = m.children));
  } else f = l;
  let h = [],
    p = [];
  if (
    (r.forEach((m) => {
      let y = f.find((v) => dv(m, v));
      y ? p.push({ existingRoute: y, newRoute: m }) : h.push(m);
    }),
    h.length > 0)
  ) {
    let m = eo(h, s, [t || "_", "patch", String(f?.length || "0")], o);
    f.push(...m);
  }
  if (c && p.length > 0)
    for (let m = 0; m < p.length; m++) {
      let { existingRoute: y, newRoute: v } = p[m],
        w = y,
        [x] = eo([v], s, [], {}, !0);
      Object.assign(w, {
        element: x.element ? x.element : w.element,
        errorElement: x.errorElement ? x.errorElement : w.errorElement,
        hydrateFallbackElement: x.hydrateFallbackElement
          ? x.hydrateFallbackElement
          : w.hydrateFallbackElement,
      });
    }
}
function dv(t, r) {
  return "id" in t && "id" in r && t.id === r.id
    ? !0
    : t.index === r.index &&
        t.path === r.path &&
        t.caseSensitive === r.caseSensitive
      ? (!t.children || t.children.length === 0) &&
        (!r.children || r.children.length === 0)
        ? !0
        : t.children.every((l, o) => r.children?.some((s) => dv(l, s)))
      : !1;
}
var Py = new WeakMap(),
  hv = ({ key: t, route: r, manifest: l, mapRouteProperties: o }) => {
    let s = l[r.id];
    if (
      (qe(s, "No route found in manifest"),
      !s.lazy || typeof s.lazy != "object")
    )
      return;
    let c = s.lazy[t];
    if (!c) return;
    let f = Py.get(s);
    f || ((f = {}), Py.set(s, f));
    let h = f[t];
    if (h) return h;
    let p = (async () => {
      let m = Ow(t),
        v = s[t] !== void 0 && t !== "hasErrorBoundary";
      if (m)
        (dt(
          !m,
          "Route property " +
            t +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (f[t] = Promise.resolve()));
      else if (v)
        dt(
          !1,
          `Route "${s.id}" has a static property "${t}" defined. The lazy property will be ignored.`,
        );
      else {
        let w = await c();
        w != null && (Object.assign(s, { [t]: w }), Object.assign(s, o(s)));
      }
      typeof s.lazy == "object" &&
        ((s.lazy[t] = void 0),
        Object.values(s.lazy).every((w) => w === void 0) && (s.lazy = void 0));
    })();
    return ((f[t] = p), p);
  },
  Hy = new WeakMap();
function sE(t, r, l, o, s) {
  let c = l[t.id];
  if ((qe(c, "No route found in manifest"), !t.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof t.lazy == "function") {
    let y = Hy.get(c);
    if (y) return { lazyRoutePromise: y, lazyHandlerPromise: y };
    let v = (async () => {
      qe(typeof t.lazy == "function", "No lazy route function found");
      let w = await t.lazy(),
        x = {};
      for (let E in w) {
        let R = w[E];
        if (R === void 0) continue;
        let C = Mw(E),
          j = c[E] !== void 0 && E !== "hasErrorBoundary";
        C
          ? dt(
              !C,
              "Route property " +
                E +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : j
            ? dt(
                !j,
                `Route "${c.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`,
              )
            : (x[E] = R);
      }
      (Object.assign(c, x), Object.assign(c, { ...o(c), lazy: void 0 }));
    })();
    return (
      Hy.set(c, v),
      v.catch(() => {}),
      { lazyRoutePromise: v, lazyHandlerPromise: v }
    );
  }
  let f = Object.keys(t.lazy),
    h = [],
    p;
  for (let y of f) {
    if (s && s.includes(y)) continue;
    let v = hv({ key: y, route: t, manifest: l, mapRouteProperties: o });
    v && (h.push(v), y === r && (p = v));
  }
  let m = h.length > 0 ? Promise.all(h).then(() => {}) : void 0;
  return (
    m?.catch(() => {}),
    p?.catch(() => {}),
    { lazyRoutePromise: m, lazyHandlerPromise: p }
  );
}
async function By(t) {
  let r = t.matches.filter((s) => s.shouldLoad),
    l = {};
  return (
    (await Promise.all(r.map((s) => s.resolve()))).forEach((s, c) => {
      l[r[c].route.id] = s;
    }),
    l
  );
}
async function uE(t) {
  return t.matches.some((r) => r.route.middleware) ? mv(t, () => By(t)) : By(t);
}
function mv(t, r) {
  return cE(t, r, (o) => o, vE, l);
  function l(o, s, c) {
    if (c)
      return Promise.resolve(
        Object.assign(c.value, { [s]: { type: "error", result: o } }),
      );
    {
      let { matches: f } = t,
        h = Math.min(
          f.findIndex((m) => m.route.id === s) || 0,
          f.findIndex((m) => m.unstable_shouldCallHandler()) || 0,
        ),
        p = ea(f, f[h].route.id).route.id;
      return Promise.resolve({ [p]: { type: "error", result: o } });
    }
  }
}
async function cE(t, r, l, o, s) {
  let { matches: c, request: f, params: h, context: p } = t,
    m = c.flatMap((v) =>
      v.route.middleware ? v.route.middleware.map((w) => [v.route.id, w]) : [],
    );
  return await pv({ request: f, params: h, context: p }, m, r, l, o, s);
}
async function pv(t, r, l, o, s, c, f = 0) {
  let { request: h } = t;
  if (h.signal.aborted)
    throw h.signal.reason ?? new Error(`Request aborted: ${h.method} ${h.url}`);
  let p = r[f];
  if (!p) return await l();
  let [m, y] = p,
    v,
    w = async () => {
      if (v) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((v = { value: await pv(t, r, l, o, s, c, f + 1) }), v.value);
      } catch (x) {
        return ((v = { value: await c(x, m, v) }), v.value);
      }
    };
  try {
    let x = await y(t, w),
      E = x != null ? o(x) : void 0;
    return s(E)
      ? E
      : v
        ? (E ?? v.value)
        : ((v = { value: await w() }), v.value);
  } catch (x) {
    return await c(x, m, v);
  }
}
function yv(t, r, l, o, s) {
  let c = hv({
      key: "middleware",
      route: o.route,
      manifest: r,
      mapRouteProperties: t,
    }),
    f = sE(o.route, Qt(l.method) ? "action" : "loader", r, t, s);
  return {
    middleware: c,
    route: f.lazyRoutePromise,
    handler: f.lazyHandlerPromise,
  };
}
function Ad(t, r, l, o, s, c, f, h = null) {
  let p = !1,
    m = yv(t, r, l, o, s);
  return {
    ...o,
    _lazyPromises: m,
    shouldLoad: f,
    unstable_shouldRevalidateArgs: h,
    unstable_shouldCallHandler(y) {
      return (
        (p = !0),
        h
          ? typeof y == "boolean"
            ? uu(o, { ...h, defaultShouldRevalidate: y })
            : uu(o, h)
          : f
      );
    },
    resolve(y) {
      return p || f || (y && !Qt(l.method) && (o.route.lazy || o.route.loader))
        ? dE({
            request: l,
            match: o,
            lazyHandlerPromise: m?.handler,
            lazyRoutePromise: m?.route,
            handlerOverride: y,
            scopedContext: c,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Nl(t, r, l, o, s, c, f, h = null) {
  return o.map((p) =>
    p.route.id !== s.route.id
      ? {
          ...p,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: h,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: yv(t, r, l, p, c),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Ad(t, r, l, p, c, f, !0, h),
  );
}
async function fE(t, r, l, o, s, c) {
  l.some((m) => m._lazyPromises?.middleware) &&
    (await Promise.all(l.map((m) => m._lazyPromises?.middleware)));
  let f = { request: r, params: l[0].params, context: s, matches: l },
    p = await t({
      ...f,
      fetcherKey: o,
      runClientMiddleware: (m) => {
        let y = f;
        return mv(y, () =>
          m({
            ...y,
            fetcherKey: o,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler",
              );
            },
          }),
        );
      },
    });
  try {
    await Promise.all(
      l.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route]),
    );
  } catch {}
  return p;
}
async function dE({
  request: t,
  match: r,
  lazyHandlerPromise: l,
  lazyRoutePromise: o,
  handlerOverride: s,
  scopedContext: c,
}) {
  let f,
    h,
    p = Qt(t.method),
    m = p ? "action" : "loader",
    y = (v) => {
      let w,
        x = new Promise((C, M) => (w = M));
      ((h = () => w()), t.signal.addEventListener("abort", h));
      let E = (C) =>
          typeof v != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`,
                ),
              )
            : v(
                { request: t, params: r.params, context: c },
                ...(C !== void 0 ? [C] : []),
              ),
        R = (async () => {
          try {
            return { type: "data", result: await (s ? s((M) => E(M)) : E()) };
          } catch (C) {
            return { type: "error", result: C };
          }
        })();
      return Promise.race([R, x]);
    };
  try {
    let v = p ? r.route.action : r.route.loader;
    if (l || o)
      if (v) {
        let w,
          [x] = await Promise.all([
            y(v).catch((E) => {
              w = E;
            }),
            l,
            o,
          ]);
        if (w !== void 0) throw w;
        f = x;
      } else {
        await l;
        let w = p ? r.route.action : r.route.loader;
        if (w) [f] = await Promise.all([y(w), o]);
        else if (m === "action") {
          let x = new URL(t.url),
            E = x.pathname + x.search;
          throw bn(405, { method: t.method, pathname: E, routeId: r.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (v) f = await y(v);
    else {
      let w = new URL(t.url),
        x = w.pathname + w.search;
      throw bn(404, { pathname: x });
    }
  } catch (v) {
    return { type: "error", result: v };
  } finally {
    h && t.signal.removeEventListener("abort", h);
  }
  return f;
}
async function hE(t) {
  let r = t.headers.get("Content-Type");
  return r && /\bapplication\/json\b/.test(r)
    ? t.body == null
      ? null
      : t.json()
    : t.text();
}
async function mE(t) {
  let { result: r, type: l } = t;
  if (vv(r)) {
    let o;
    try {
      o = await hE(r);
    } catch (s) {
      return { type: "error", error: s };
    }
    return l === "error"
      ? {
          type: "error",
          error: new su(r.status, r.statusText, o),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: "data", data: o, statusCode: r.status, headers: r.headers };
  }
  return l === "error"
    ? Vy(r)
      ? r.data instanceof Error
        ? {
            type: "error",
            error: r.data,
            statusCode: r.init?.status,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: "error",
            error: new su(r.init?.status || 500, void 0, r.data),
            statusCode: to(r) ? r.status : void 0,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: "error", error: r, statusCode: to(r) ? r.status : void 0 }
    : Vy(r)
      ? {
          type: "data",
          data: r.data,
          statusCode: r.init?.status,
          headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
        }
      : { type: "data", data: r };
}
function pE(t, r, l, o, s) {
  let c = t.headers.get("Location");
  if (
    (qe(
      c,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !eh(c))
  ) {
    let f = o.slice(0, o.findIndex((h) => h.route.id === l) + 1);
    ((c = Rd(new URL(r.url), f, s, c)), t.headers.set("Location", c));
  }
  return t;
}
function ky(t, r, l) {
  if (eh(t)) {
    let o = t,
      s = o.startsWith("//") ? new URL(r.protocol + o) : new URL(o),
      c = En(s.pathname, l) != null;
    if (s.origin === r.origin && c) return s.pathname + s.search + s.hash;
  }
  return t;
}
function _l(t, r, l, o) {
  let s = t.createURL(gv(r)).toString(),
    c = { signal: l };
  if (o && Qt(o.formMethod)) {
    let { formMethod: f, formEncType: h } = o;
    ((c.method = f.toUpperCase()),
      h === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": h })),
          (c.body = JSON.stringify(o.json)))
        : h === "text/plain"
          ? (c.body = o.text)
          : h === "application/x-www-form-urlencoded" && o.formData
            ? (c.body = Od(o.formData))
            : (c.body = o.formData));
  }
  return new Request(s, c);
}
function Od(t) {
  let r = new URLSearchParams();
  for (let [l, o] of t.entries())
    r.append(l, typeof o == "string" ? o : o.name);
  return r;
}
function qy(t) {
  let r = new FormData();
  for (let [l, o] of t.entries()) r.append(l, o);
  return r;
}
function yE(t, r, l, o = !1, s = !1) {
  let c = {},
    f = null,
    h,
    p = !1,
    m = {},
    y = l && ln(l[1]) ? l[1].error : void 0;
  return (
    t.forEach((v) => {
      if (!(v.route.id in r)) return;
      let w = v.route.id,
        x = r[w];
      if (
        (qe(!_a(x), "Cannot handle redirect results in processLoaderData"),
        ln(x))
      ) {
        let E = x.error;
        if ((y !== void 0 && ((E = y), (y = void 0)), (f = f || {}), s))
          f[w] = E;
        else {
          let R = ea(t, w);
          f[R.route.id] == null && (f[R.route.id] = E);
        }
        (o || (c[w] = fv),
          p || ((p = !0), (h = to(x.error) ? x.error.status : 500)),
          x.headers && (m[w] = x.headers));
      } else
        ((c[w] = x.data),
          x.statusCode && x.statusCode !== 200 && !p && (h = x.statusCode),
          x.headers && (m[w] = x.headers));
    }),
    y !== void 0 && l && ((f = { [l[0]]: y }), l[2] && (c[l[2]] = void 0)),
    { loaderData: c, errors: f, statusCode: h || 200, loaderHeaders: m }
  );
}
function Fy(t, r, l, o, s, c) {
  let { loaderData: f, errors: h } = yE(r, l, o);
  return (
    s
      .filter((p) => !p.matches || p.matches.some((m) => m.shouldLoad))
      .forEach((p) => {
        let { key: m, match: y, controller: v } = p;
        if (v && v.signal.aborted) return;
        let w = c[m];
        if ((qe(w, "Did not find corresponding fetcher result"), ln(w))) {
          let x = ea(t.matches, y?.route.id);
          ((h && h[x.route.id]) || (h = { ...h, [x.route.id]: w.error }),
            t.fetchers.delete(m));
        } else if (_a(w)) qe(!1, "Unhandled fetcher revalidation redirect");
        else {
          let x = $r(w.data);
          t.fetchers.set(m, x);
        }
      }),
    { loaderData: f, errors: h }
  );
}
function Gy(t, r, l, o) {
  let s = Object.entries(r)
    .filter(([, c]) => c !== fv)
    .reduce((c, [f, h]) => ((c[f] = h), c), {});
  for (let c of l) {
    let f = c.route.id;
    if (
      (!r.hasOwnProperty(f) &&
        t.hasOwnProperty(f) &&
        c.route.loader &&
        (s[f] = t[f]),
      o && o.hasOwnProperty(f))
    )
      break;
  }
  return s;
}
function Yy(t) {
  return t
    ? ln(t[1])
      ? { actionData: {} }
      : { actionData: { [t[0]]: t[1].data } }
    : {};
}
function ea(t, r) {
  return (
    (r ? t.slice(0, t.findIndex((o) => o.route.id === r) + 1) : [...t])
      .reverse()
      .find((o) => o.route.hasErrorBoundary === !0) || t[0]
  );
}
function Ps(t) {
  let r =
    t.length === 1
      ? t[0]
      : t.find((l) => l.index || !l.path || l.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }],
    route: r,
  };
}
function bn(
  t,
  { pathname: r, routeId: l, method: o, type: s, message: c } = {},
) {
  let f = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((f = "Bad Request"),
        o && r && l
          ? (h = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.`)
          : s === "invalid-body" && (h = "Unable to encode submission body"))
      : t === 403
        ? ((f = "Forbidden"), (h = `Route "${l}" does not match URL "${r}"`))
        : t === 404
          ? ((f = "Not Found"), (h = `No route matches URL "${r}"`))
          : t === 405 &&
            ((f = "Method Not Allowed"),
            o && r && l
              ? (h = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.`)
              : o && (h = `Invalid request method "${o.toUpperCase()}"`)),
    new su(t || 500, f, new Error(h), !0)
  );
}
function Hs(t) {
  let r = Object.entries(t);
  for (let l = r.length - 1; l >= 0; l--) {
    let [o, s] = r[l];
    if (_a(s)) return { key: o, result: s };
  }
}
function gv(t) {
  let r = typeof t == "string" ? ia(t) : t;
  return na({ ...r, hash: "" });
}
function gE(t, r) {
  return t.pathname !== r.pathname || t.search !== r.search
    ? !1
    : t.hash === ""
      ? r.hash !== ""
      : t.hash === r.hash
        ? !0
        : r.hash !== "";
}
function vE(t) {
  return (
    t != null &&
    typeof t == "object" &&
    Object.entries(t).every(([r, l]) => typeof r == "string" && bE(l))
  );
}
function bE(t) {
  return (
    t != null &&
    typeof t == "object" &&
    "type" in t &&
    "result" in t &&
    (t.type === "data" || t.type === "error")
  );
}
function SE(t) {
  return vv(t.result) && Ww.has(t.result.status);
}
function ln(t) {
  return t.type === "error";
}
function _a(t) {
  return (t && t.type) === "redirect";
}
function Vy(t) {
  return (
    typeof t == "object" &&
    t != null &&
    "type" in t &&
    "data" in t &&
    "init" in t &&
    t.type === "DataWithResponseInit"
  );
}
function vv(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body < "u"
  );
}
function wE(t) {
  return Jw.has(t.toUpperCase());
}
function Qt(t) {
  return Iw.has(t.toUpperCase());
}
function th(t) {
  return new URLSearchParams(t).getAll("index").some((r) => r === "");
}
function Js(t, r) {
  let l = typeof r == "string" ? ia(r).search : r.search;
  if (t[t.length - 1].route.index && th(l || "")) return t[t.length - 1];
  let o = sv(t);
  return o[o.length - 1];
}
function Qy(t) {
  let {
    formMethod: r,
    formAction: l,
    formEncType: o,
    text: s,
    formData: c,
    json: f,
  } = t;
  if (!(!r || !l || !o)) {
    if (s != null)
      return {
        formMethod: r,
        formAction: l,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (c != null)
      return {
        formMethod: r,
        formAction: l,
        formEncType: o,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: r,
        formAction: l,
        formEncType: o,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function od(t, r) {
  return r
    ? {
        state: "loading",
        location: t,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function EE(t, r) {
  return {
    state: "submitting",
    location: t,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function Ki(t, r) {
  return t
    ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function xE(t, r) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: r ? r.data : void 0,
  };
}
function $r(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function RE(t, r) {
  try {
    let l = t.sessionStorage.getItem(cv);
    if (l) {
      let o = JSON.parse(l);
      for (let [s, c] of Object.entries(o || {}))
        c && Array.isArray(c) && r.set(s, new Set(c || []));
    }
  } catch {}
}
function CE(t, r) {
  if (r.size > 0) {
    let l = {};
    for (let [o, s] of r) l[o] = [...s];
    try {
      t.sessionStorage.setItem(cv, JSON.stringify(l));
    } catch (o) {
      dt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`,
      );
    }
  }
}
function AE() {
  let t,
    r,
    l = new Promise((o, s) => {
      ((t = async (c) => {
        o(c);
        try {
          await l;
        } catch {}
      }),
        (r = async (c) => {
          s(c);
          try {
            await l;
          } catch {}
        }));
    });
  return { promise: l, resolve: t, reject: r };
}
var qa = b.createContext(null);
qa.displayName = "DataRouter";
var so = b.createContext(null);
so.displayName = "DataRouterState";
b.createContext(!1);
var nh = b.createContext({ isTransitioning: !1 });
nh.displayName = "ViewTransition";
var bv = b.createContext(new Map());
bv.displayName = "Fetchers";
var OE = b.createContext(null);
OE.displayName = "Await";
var In = b.createContext(null);
In.displayName = "Navigation";
var wu = b.createContext(null);
wu.displayName = "Location";
var _n = b.createContext({ outlet: null, matches: [], isDataRoute: !1 });
_n.displayName = "Route";
var rh = b.createContext(null);
rh.displayName = "RouteError";
function TE(t, { relative: r } = {}) {
  qe(
    uo(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: l, navigator: o } = b.useContext(In),
    { hash: s, pathname: c, search: f } = co(t, { relative: r }),
    h = c;
  return (
    l !== "/" && (h = c === "/" ? l : Kn([l, c])),
    o.createHref({ pathname: h, search: f, hash: s })
  );
}
function uo() {
  return b.useContext(wu) != null;
}
function $n() {
  return (
    qe(
      uo(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    b.useContext(wu).location
  );
}
var Sv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function wv(t) {
  b.useContext(In).static || b.useLayoutEffect(t);
}
function ah() {
  let { isDataRoute: t } = b.useContext(_n);
  return t ? GE() : ME();
}
function ME() {
  qe(
    uo(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let t = b.useContext(qa),
    { basename: r, navigator: l } = b.useContext(In),
    { matches: o } = b.useContext(_n),
    { pathname: s } = $n(),
    c = JSON.stringify(Jd(o)),
    f = b.useRef(!1);
  return (
    wv(() => {
      f.current = !0;
    }),
    b.useCallback(
      (p, m = {}) => {
        if ((dt(f.current, Sv), !f.current)) return;
        if (typeof p == "number") {
          l.go(p);
          return;
        }
        let y = Wd(p, JSON.parse(c), s, m.relative === "path");
        (t == null &&
          r !== "/" &&
          (y.pathname = y.pathname === "/" ? r : Kn([r, y.pathname])),
          (m.replace ? l.replace : l.push)(y, m.state, m));
      },
      [r, l, c, s, t],
    )
  );
}
var DE = b.createContext(null);
function _E(t) {
  let r = b.useContext(_n).outlet;
  return r && b.createElement(DE.Provider, { value: t }, r);
}
function fD() {
  let { matches: t } = b.useContext(_n),
    r = t[t.length - 1];
  return r ? r.params : {};
}
function co(t, { relative: r } = {}) {
  let { matches: l } = b.useContext(_n),
    { pathname: o } = $n(),
    s = JSON.stringify(Jd(l));
  return b.useMemo(() => Wd(t, JSON.parse(s), o, r === "path"), [t, s, o, r]);
}
function NE(t, r, l, o, s) {
  qe(
    uo(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: c } = b.useContext(In),
    { matches: f } = b.useContext(_n),
    h = f[f.length - 1],
    p = h ? h.params : {},
    m = h ? h.pathname : "/",
    y = h ? h.pathnameBase : "/",
    v = h && h.route;
  {
    let j = (v && v.path) || "";
    Ev(
      m,
      !v || j.endsWith("*") || j.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === "/" ? "*" : `${j}/*`}">.`,
    );
  }
  let w = $n(),
    x;
  x = w;
  let E = x.pathname || "/",
    R = E;
  if (y !== "/") {
    let j = y.replace(/^\//, "").split("/");
    R = "/" + E.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let C = Wr(t, { pathname: R });
  return (
    dt(
      v || C != null,
      `No routes matched location "${x.pathname}${x.search}${x.hash}" `,
    ),
    dt(
      C == null ||
        C[C.length - 1].route.element !== void 0 ||
        C[C.length - 1].route.Component !== void 0 ||
        C[C.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    PE(
      C &&
        C.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, p, j.params),
            pathname: Kn([
              y,
              c.encodeLocation
                ? c.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? y
                : Kn([
                    y,
                    c.encodeLocation
                      ? c.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          }),
        ),
      f,
      l,
      o,
      s,
    )
  );
}
function LE() {
  let t = FE(),
    r = to(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    l = t instanceof Error ? t.stack : null,
    o = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: o },
    c = { padding: "2px 4px", backgroundColor: o },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", t),
    (f = b.createElement(
      b.Fragment,
      null,
      b.createElement("p", null, "💿 Hey developer 👋"),
      b.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        b.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        b.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement("h2", null, "Unexpected Application Error!"),
      b.createElement("h3", { style: { fontStyle: "italic" } }, r),
      l ? b.createElement("pre", { style: s }, l) : null,
      f,
    )
  );
}
var UE = b.createElement(LE, null),
  zE = class extends b.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location ||
        (r.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation,
          };
    }
    componentDidCatch(t, r) {
      this.props.unstable_onError
        ? this.props.unstable_onError(t, r)
        : console.error(
            "React Router caught the following error during render",
            t,
          );
    }
    render() {
      return this.state.error !== void 0
        ? b.createElement(
            _n.Provider,
            { value: this.props.routeContext },
            b.createElement(rh.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function jE({ routeContext: t, match: r, children: l }) {
  let o = b.useContext(qa);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(_n.Provider, { value: t }, l)
  );
}
function PE(t, r = [], l = null, o = null, s = null) {
  if (t == null) {
    if (!l) return null;
    if (l.errors) t = l.matches;
    else if (r.length === 0 && !l.initialized && l.matches.length > 0)
      t = l.matches;
    else return null;
  }
  let c = t,
    f = l?.errors;
  if (f != null) {
    let m = c.findIndex((y) => y.route.id && f?.[y.route.id] !== void 0);
    (qe(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, m + 1))));
  }
  let h = !1,
    p = -1;
  if (l)
    for (let m = 0; m < c.length; m++) {
      let y = c[m];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = m),
        y.route.id)
      ) {
        let { loaderData: v, errors: w } = l,
          x =
            y.route.loader &&
            !v.hasOwnProperty(y.route.id) &&
            (!w || w[y.route.id] === void 0);
        if (y.route.lazy || x) {
          ((h = !0), p >= 0 ? (c = c.slice(0, p + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  return c.reduceRight((m, y, v) => {
    let w,
      x = !1,
      E = null,
      R = null;
    l &&
      ((w = f && y.route.id ? f[y.route.id] : void 0),
      (E = y.route.errorElement || UE),
      h &&
        (p < 0 && v === 0
          ? (Ev(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (x = !0),
            (R = null))
          : p === v &&
            ((x = !0), (R = y.route.hydrateFallbackElement || null))));
    let C = r.concat(c.slice(0, v + 1)),
      M = () => {
        let j;
        return (
          w
            ? (j = E)
            : x
              ? (j = R)
              : y.route.Component
                ? (j = b.createElement(y.route.Component, null))
                : y.route.element
                  ? (j = y.route.element)
                  : (j = m),
          b.createElement(jE, {
            match: y,
            routeContext: { outlet: m, matches: C, isDataRoute: l != null },
            children: j,
          })
        );
      };
    return l && (y.route.ErrorBoundary || y.route.errorElement || v === 0)
      ? b.createElement(zE, {
          location: l.location,
          revalidation: l.revalidation,
          component: E,
          error: w,
          children: M(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
          unstable_onError: o,
        })
      : M();
  }, null);
}
function lh(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function HE(t) {
  let r = b.useContext(qa);
  return (qe(r, lh(t)), r);
}
function BE(t) {
  let r = b.useContext(so);
  return (qe(r, lh(t)), r);
}
function kE(t) {
  let r = b.useContext(_n);
  return (qe(r, lh(t)), r);
}
function ih(t) {
  let r = kE(t),
    l = r.matches[r.matches.length - 1];
  return (
    qe(
      l.route.id,
      `${t} can only be used on routes that contain a unique "id"`,
    ),
    l.route.id
  );
}
function qE() {
  return ih("useRouteId");
}
function FE() {
  let t = b.useContext(rh),
    r = BE("useRouteError"),
    l = ih("useRouteError");
  return t !== void 0 ? t : r.errors?.[l];
}
function GE() {
  let { router: t } = HE("useNavigate"),
    r = ih("useNavigate"),
    l = b.useRef(!1);
  return (
    wv(() => {
      l.current = !0;
    }),
    b.useCallback(
      async (s, c = {}) => {
        (dt(l.current, Sv),
          l.current &&
            (typeof s == "number"
              ? t.navigate(s)
              : await t.navigate(s, { fromRouteId: r, ...c })));
      },
      [t, r],
    )
  );
}
var Ky = {};
function Ev(t, r, l) {
  !r && !Ky[t] && ((Ky[t] = !0), dt(!1, l));
}
var Xy = {};
function Zy(t, r) {
  !t && !Xy[r] && ((Xy[r] = !0), console.warn(r));
}
function YE(t) {
  let r = {
    hasErrorBoundary:
      t.hasErrorBoundary || t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      (t.element &&
        dt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(r, {
        element: b.createElement(t.Component),
        Component: void 0,
      })),
    t.HydrateFallback &&
      (t.hydrateFallbackElement &&
        dt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(r, {
        hydrateFallbackElement: b.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      })),
    t.ErrorBoundary &&
      (t.errorElement &&
        dt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(r, {
        errorElement: b.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  );
}
var VE = ["HydrateFallback", "hydrateFallbackElement"],
  QE = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((t, r) => {
          ((this.resolve = (l) => {
            this.status === "pending" && ((this.status = "resolved"), t(l));
          }),
            (this.reject = (l) => {
              this.status === "pending" && ((this.status = "rejected"), r(l));
            }));
        })));
    }
  };
function KE({ router: t, flushSync: r, unstable_onError: l }) {
  let [o, s] = b.useState(t.state),
    [c, f] = b.useState(),
    [h, p] = b.useState({ isTransitioning: !1 }),
    [m, y] = b.useState(),
    [v, w] = b.useState(),
    [x, E] = b.useState(),
    R = b.useRef(new Map()),
    C = b.useCallback(
      (P) => {
        s(
          (_) => (
            P.errors &&
              l &&
              Object.entries(P.errors).forEach(([K, V]) => {
                _.errors?.[K] !== V && l(V);
              }),
            P
          ),
        );
      },
      [l],
    ),
    M = b.useCallback(
      (P, { deletedFetchers: _, flushSync: K, viewTransitionOpts: V }) => {
        (P.fetchers.forEach((oe, we) => {
          oe.data !== void 0 && R.current.set(we, oe.data);
        }),
          _.forEach((oe) => R.current.delete(oe)),
          Zy(
            K === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let ae =
          t.window != null &&
          t.window.document != null &&
          typeof t.window.document.startViewTransition == "function";
        if (
          (Zy(
            V == null || ae,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !V || !ae)
        ) {
          r && K ? r(() => C(P)) : b.startTransition(() => C(P));
          return;
        }
        if (r && K) {
          r(() => {
            (v && (m && m.resolve(), v.skipTransition()),
              p({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: V.currentLocation,
                nextLocation: V.nextLocation,
              }));
          });
          let oe = t.window.document.startViewTransition(() => {
            r(() => C(P));
          });
          (oe.finished.finally(() => {
            r(() => {
              (y(void 0), w(void 0), f(void 0), p({ isTransitioning: !1 }));
            });
          }),
            r(() => w(oe)));
          return;
        }
        v
          ? (m && m.resolve(),
            v.skipTransition(),
            E({
              state: P,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }))
          : (f(P),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }));
      },
      [t.window, r, v, m, C],
    );
  (b.useLayoutEffect(() => t.subscribe(M), [t, M]),
    b.useEffect(() => {
      h.isTransitioning && !h.flushSync && y(new QE());
    }, [h]),
    b.useEffect(() => {
      if (m && c && t.window) {
        let P = c,
          _ = m.promise,
          K = t.window.document.startViewTransition(async () => {
            (b.startTransition(() => C(P)), await _);
          });
        (K.finished.finally(() => {
          (y(void 0), w(void 0), f(void 0), p({ isTransitioning: !1 }));
        }),
          w(K));
      }
    }, [c, m, t.window, C]),
    b.useEffect(() => {
      m && c && o.location.key === c.location.key && m.resolve();
    }, [m, v, o.location, c]),
    b.useEffect(() => {
      !h.isTransitioning &&
        x &&
        (f(x.state),
        p({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        E(void 0));
    }, [h.isTransitioning, x]));
  let j = b.useMemo(
      () => ({
        createHref: t.createHref,
        encodeLocation: t.encodeLocation,
        go: (P) => t.navigate(P),
        push: (P, _, K) =>
          t.navigate(P, {
            state: _,
            preventScrollReset: K?.preventScrollReset,
          }),
        replace: (P, _, K) =>
          t.navigate(P, {
            replace: !0,
            state: _,
            preventScrollReset: K?.preventScrollReset,
          }),
      }),
      [t],
    ),
    U = t.basename || "/",
    G = b.useMemo(
      () => ({
        router: t,
        navigator: j,
        static: !1,
        basename: U,
        unstable_onError: l,
      }),
      [t, j, U, l],
    );
  return b.createElement(
    b.Fragment,
    null,
    b.createElement(
      qa.Provider,
      { value: G },
      b.createElement(
        so.Provider,
        { value: o },
        b.createElement(
          bv.Provider,
          { value: R.current },
          b.createElement(
            nh.Provider,
            { value: h },
            b.createElement(
              $E,
              {
                basename: U,
                location: o.location,
                navigationType: o.historyAction,
                navigator: j,
              },
              b.createElement(XE, {
                routes: t.routes,
                future: t.future,
                state: o,
                unstable_onError: l,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var XE = b.memo(ZE);
function ZE({ routes: t, future: r, state: l, unstable_onError: o }) {
  return NE(t, void 0, l, o, r);
}
function IE(t) {
  return _E(t.context);
}
function $E({
  basename: t = "/",
  children: r = null,
  location: l,
  navigationType: o = "POP",
  navigator: s,
  static: c = !1,
}) {
  qe(
    !uo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let f = t.replace(/^\/*/, "/"),
    h = b.useMemo(
      () => ({ basename: f, navigator: s, static: c, future: {} }),
      [f, s, c],
    );
  typeof l == "string" && (l = ia(l));
  let {
      pathname: p = "/",
      search: m = "",
      hash: y = "",
      state: v = null,
      key: w = "default",
    } = l,
    x = b.useMemo(() => {
      let E = En(p, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: m, hash: y, state: v, key: w },
            navigationType: o,
          };
    }, [f, p, m, y, v, w, o]);
  return (
    dt(
      x != null,
      `<Router basename="${f}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    x == null
      ? null
      : b.createElement(
          In.Provider,
          { value: h },
          b.createElement(wu.Provider, { children: r, value: x }),
        )
  );
}
var Ws = "get",
  eu = "application/x-www-form-urlencoded";
function Eu(t) {
  return t != null && typeof t.tagName == "string";
}
function JE(t) {
  return Eu(t) && t.tagName.toLowerCase() === "button";
}
function WE(t) {
  return Eu(t) && t.tagName.toLowerCase() === "form";
}
function ex(t) {
  return Eu(t) && t.tagName.toLowerCase() === "input";
}
function tx(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function nx(t, r) {
  return t.button === 0 && (!r || r === "_self") && !tx(t);
}
function Td(t = "") {
  return new URLSearchParams(
    typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams
      ? t
      : Object.keys(t).reduce((r, l) => {
          let o = t[l];
          return r.concat(Array.isArray(o) ? o.map((s) => [l, s]) : [[l, o]]);
        }, []),
  );
}
function rx(t, r) {
  let l = Td(t);
  return (
    r &&
      r.forEach((o, s) => {
        l.has(s) ||
          r.getAll(s).forEach((c) => {
            l.append(s, c);
          });
      }),
    l
  );
}
var Bs = null;
function ax() {
  if (Bs === null)
    try {
      (new FormData(document.createElement("form"), 0), (Bs = !1));
    } catch {
      Bs = !0;
    }
  return Bs;
}
var lx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function sd(t) {
  return t != null && !lx.has(t)
    ? (dt(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`,
      ),
      null)
    : t;
}
function ix(t, r) {
  let l, o, s, c, f;
  if (WE(t)) {
    let h = t.getAttribute("action");
    ((o = h ? En(h, r) : null),
      (l = t.getAttribute("method") || Ws),
      (s = sd(t.getAttribute("enctype")) || eu),
      (c = new FormData(t)));
  } else if (JE(t) || (ex(t) && (t.type === "submit" || t.type === "image"))) {
    let h = t.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = t.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((o = p ? En(p, r) : null),
      (l = t.getAttribute("formmethod") || h.getAttribute("method") || Ws),
      (s =
        sd(t.getAttribute("formenctype")) ||
        sd(h.getAttribute("enctype")) ||
        eu),
      (c = new FormData(h, t)),
      !ax())
    ) {
      let { name: m, type: y, value: v } = t;
      if (y === "image") {
        let w = m ? `${m}.` : "";
        (c.append(`${w}x`, "0"), c.append(`${w}y`, "0"));
      } else m && c.append(m, v);
    }
  } else {
    if (Eu(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((l = Ws), (o = null), (s = eu), (f = t));
  }
  return (
    c && s === "text/plain" && ((f = c), (c = void 0)),
    { action: o, method: l.toLowerCase(), encType: s, formData: c, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function oh(t, r) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
function ox(t, r, l) {
  let o =
    typeof t == "string"
      ? new URL(
          t,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : t;
  return (
    o.pathname === "/"
      ? (o.pathname = `_root.${l}`)
      : r && En(o.pathname, r) === "/"
        ? (o.pathname = `${r.replace(/\/$/, "")}/_root.${l}`)
        : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${l}`),
    o
  );
}
async function sx(t, r) {
  if (t.id in r) return r[t.id];
  try {
    let l = await import(t.module);
    return ((r[t.id] = l), l);
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`,
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function ux(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === "preload" &&
        typeof t.imageSrcSet == "string" &&
        typeof t.imageSizes == "string"
      : typeof t.rel == "string" && typeof t.href == "string";
}
async function cx(t, r, l) {
  let o = await Promise.all(
    t.map(async (s) => {
      let c = r.routes[s.route.id];
      if (c) {
        let f = await sx(c, l);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return mx(
    o
      .flat(1)
      .filter(ux)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function Iy(t, r, l, o, s, c) {
  let f = (p, m) => (l[m] ? p.route.id !== l[m].route.id : !0),
    h = (p, m) =>
      l[m].pathname !== p.pathname ||
      (l[m].route.path?.endsWith("*") && l[m].params["*"] !== p.params["*"]);
  return c === "assets"
    ? r.filter((p, m) => f(p, m) || h(p, m))
    : c === "data"
      ? r.filter((p, m) => {
          let y = o.routes[p.route.id];
          if (!y || !y.hasLoader) return !1;
          if (f(p, m) || h(p, m)) return !0;
          if (p.route.shouldRevalidate) {
            let v = p.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: l[0]?.params || {},
              nextUrl: new URL(t, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == "boolean") return v;
          }
          return !0;
        })
      : [];
}
function fx(t, r, { includeHydrateFallback: l } = {}) {
  return dx(
    t
      .map((o) => {
        let s = r.routes[o.route.id];
        if (!s) return [];
        let c = [s.module];
        return (
          s.clientActionModule && (c = c.concat(s.clientActionModule)),
          s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)),
          l &&
            s.hydrateFallbackModule &&
            (c = c.concat(s.hydrateFallbackModule)),
          s.imports && (c = c.concat(s.imports)),
          c
        );
      })
      .flat(1),
  );
}
function dx(t) {
  return [...new Set(t)];
}
function hx(t) {
  let r = {},
    l = Object.keys(t).sort();
  for (let o of l) r[o] = t[o];
  return r;
}
function mx(t, r) {
  let l = new Set();
  return (
    new Set(r),
    t.reduce((o, s) => {
      let c = JSON.stringify(hx(s));
      return (l.has(c) || (l.add(c), o.push({ key: c, link: s })), o);
    }, [])
  );
}
function xv() {
  let t = b.useContext(qa);
  return (
    oh(
      t,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    t
  );
}
function px() {
  let t = b.useContext(so);
  return (
    oh(
      t,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    t
  );
}
var sh = b.createContext(void 0);
sh.displayName = "FrameworkContext";
function Rv() {
  let t = b.useContext(sh);
  return (
    oh(t, "You must render this element inside a <HydratedRouter> element"),
    t
  );
}
function yx(t, r) {
  let l = b.useContext(sh),
    [o, s] = b.useState(!1),
    [c, f] = b.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: y,
      onTouchStart: v,
    } = r,
    w = b.useRef(null);
  (b.useEffect(() => {
    if ((t === "render" && f(!0), t === "viewport")) {
      let R = (M) => {
          M.forEach((j) => {
            f(j.isIntersecting);
          });
        },
        C = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        w.current && C.observe(w.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [t]),
    b.useEffect(() => {
      if (o) {
        let R = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [o]));
  let x = () => {
      s(!0);
    },
    E = () => {
      (s(!1), f(!1));
    };
  return l
    ? t !== "intent"
      ? [c, w, {}]
      : [
          c,
          w,
          {
            onFocus: Xi(h, x),
            onBlur: Xi(p, E),
            onMouseEnter: Xi(m, x),
            onMouseLeave: Xi(y, E),
            onTouchStart: Xi(v, x),
          },
        ]
    : [!1, w, {}];
}
function Xi(t, r) {
  return (l) => {
    (t && t(l), l.defaultPrevented || r(l));
  };
}
function gx({ page: t, ...r }) {
  let { router: l } = xv(),
    o = b.useMemo(() => Wr(l.routes, t, l.basename), [l.routes, t, l.basename]);
  return o ? b.createElement(bx, { page: t, matches: o, ...r }) : null;
}
function vx(t) {
  let { manifest: r, routeModules: l } = Rv(),
    [o, s] = b.useState([]);
  return (
    b.useEffect(() => {
      let c = !1;
      return (
        cx(t, r, l).then((f) => {
          c || s(f);
        }),
        () => {
          c = !0;
        }
      );
    }, [t, r, l]),
    o
  );
}
function bx({ page: t, matches: r, ...l }) {
  let o = $n(),
    { manifest: s, routeModules: c } = Rv(),
    { basename: f } = xv(),
    { loaderData: h, matches: p } = px(),
    m = b.useMemo(() => Iy(t, r, p, s, o, "data"), [t, r, p, s, o]),
    y = b.useMemo(() => Iy(t, r, p, s, o, "assets"), [t, r, p, s, o]),
    v = b.useMemo(() => {
      if (t === o.pathname + o.search + o.hash) return [];
      let E = new Set(),
        R = !1;
      if (
        (r.forEach((M) => {
          let j = s.routes[M.route.id];
          !j ||
            !j.hasLoader ||
            ((!m.some((U) => U.route.id === M.route.id) &&
              M.route.id in h &&
              c[M.route.id]?.shouldRevalidate) ||
            j.hasClientLoader
              ? (R = !0)
              : E.add(M.route.id));
        }),
        E.size === 0)
      )
        return [];
      let C = ox(t, f, "data");
      return (
        R &&
          E.size > 0 &&
          C.searchParams.set(
            "_routes",
            r
              .filter((M) => E.has(M.route.id))
              .map((M) => M.route.id)
              .join(","),
          ),
        [C.pathname + C.search]
      );
    }, [f, h, o, s, m, r, t, c]),
    w = b.useMemo(() => fx(y, s), [y, s]),
    x = vx(y);
  return b.createElement(
    b.Fragment,
    null,
    v.map((E) =>
      b.createElement("link", {
        key: E,
        rel: "prefetch",
        as: "fetch",
        href: E,
        ...l,
      }),
    ),
    w.map((E) =>
      b.createElement("link", { key: E, rel: "modulepreload", href: E, ...l }),
    ),
    x.map(({ key: E, link: R }) =>
      b.createElement("link", { key: E, nonce: l.nonce, ...R }),
    ),
  );
}
function Sx(...t) {
  return (r) => {
    t.forEach((l) => {
      typeof l == "function" ? l(r) : l != null && (l.current = r);
    });
  };
}
var Cv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Cv && (window.__reactRouterVersion = "7.9.1");
} catch {}
function wx(t, r) {
  return aE({
    basename: r?.basename,
    getContext: r?.getContext,
    future: r?.future,
    history: xw({ window: r?.window }),
    hydrationData: Ex(),
    routes: t,
    mapRouteProperties: YE,
    hydrationRouteProperties: VE,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window,
  }).initialize();
}
function Ex() {
  let t = window?.__staticRouterHydrationData;
  return (t && t.errors && (t = { ...t, errors: xx(t.errors) }), t);
}
function xx(t) {
  if (!t) return null;
  let r = Object.entries(t),
    l = {};
  for (let [o, s] of r)
    if (s && s.__type === "RouteErrorResponse")
      l[o] = new su(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let c = window[s.__subType];
        if (typeof c == "function")
          try {
            let f = new c(s.message);
            ((f.stack = ""), (l[o] = f));
          } catch {}
      }
      if (l[o] == null) {
        let c = new Error(s.message);
        ((c.stack = ""), (l[o] = c));
      }
    } else l[o] = s;
  return l;
}
var Av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Na = b.forwardRef(function (
    {
      onClick: r,
      discover: l = "render",
      prefetch: o = "none",
      relative: s,
      reloadDocument: c,
      replace: f,
      state: h,
      target: p,
      to: m,
      preventScrollReset: y,
      viewTransition: v,
      ...w
    },
    x,
  ) {
    let { basename: E } = b.useContext(In),
      R = typeof m == "string" && Av.test(m),
      C,
      M = !1;
    if (typeof m == "string" && R && ((C = m), Cv))
      try {
        let ae = new URL(window.location.href),
          oe = m.startsWith("//") ? new URL(ae.protocol + m) : new URL(m),
          we = En(oe.pathname, E);
        oe.origin === ae.origin && we != null
          ? (m = we + oe.search + oe.hash)
          : (M = !0);
      } catch {
        dt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let j = TE(m, { relative: s }),
      [U, G, P] = yx(o, w),
      _ = Ox(m, {
        replace: f,
        state: h,
        target: p,
        preventScrollReset: y,
        relative: s,
        viewTransition: v,
      });
    function K(ae) {
      (r && r(ae), ae.defaultPrevented || _(ae));
    }
    let V = b.createElement("a", {
      ...w,
      ...P,
      href: C || j,
      onClick: M || c ? r : K,
      ref: Sx(x, G),
      target: p,
      "data-discover": !R && l === "render" ? "true" : void 0,
    });
    return U && !R
      ? b.createElement(b.Fragment, null, V, b.createElement(gx, { page: j }))
      : V;
  });
Na.displayName = "Link";
var Rx = b.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: l = !1,
    className: o = "",
    end: s = !1,
    style: c,
    to: f,
    viewTransition: h,
    children: p,
    ...m
  },
  y,
) {
  let v = co(f, { relative: m.relative }),
    w = $n(),
    x = b.useContext(so),
    { navigator: E, basename: R } = b.useContext(In),
    C = x != null && Nx(v) && h === !0,
    M = E.encodeLocation ? E.encodeLocation(v).pathname : v.pathname,
    j = w.pathname,
    U =
      x && x.navigation && x.navigation.location
        ? x.navigation.location.pathname
        : null;
  (l ||
    ((j = j.toLowerCase()),
    (U = U ? U.toLowerCase() : null),
    (M = M.toLowerCase())),
    U && R && (U = En(U, R) || U));
  const G = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
  let P = j === M || (!s && j.startsWith(M) && j.charAt(G) === "/"),
    _ =
      U != null &&
      (U === M || (!s && U.startsWith(M) && U.charAt(M.length) === "/")),
    K = { isActive: P, isPending: _, isTransitioning: C },
    V = P ? r : void 0,
    ae;
  typeof o == "function"
    ? (ae = o(K))
    : (ae = [
        o,
        P ? "active" : null,
        _ ? "pending" : null,
        C ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let oe = typeof c == "function" ? c(K) : c;
  return b.createElement(
    Na,
    {
      ...m,
      "aria-current": V,
      className: ae,
      ref: y,
      style: oe,
      to: f,
      viewTransition: h,
    },
    typeof p == "function" ? p(K) : p,
  );
});
Rx.displayName = "NavLink";
var Cx = b.forwardRef(
  (
    {
      discover: t = "render",
      fetcherKey: r,
      navigate: l,
      reloadDocument: o,
      replace: s,
      state: c,
      method: f = Ws,
      action: h,
      onSubmit: p,
      relative: m,
      preventScrollReset: y,
      viewTransition: v,
      ...w
    },
    x,
  ) => {
    let E = Dx(),
      R = _x(h, { relative: m }),
      C = f.toLowerCase() === "get" ? "get" : "post",
      M = typeof h == "string" && Av.test(h),
      j = (U) => {
        if ((p && p(U), U.defaultPrevented)) return;
        U.preventDefault();
        let G = U.nativeEvent.submitter,
          P = G?.getAttribute("formmethod") || f;
        E(G || U.currentTarget, {
          fetcherKey: r,
          method: P,
          navigate: l,
          replace: s,
          state: c,
          relative: m,
          preventScrollReset: y,
          viewTransition: v,
        });
      };
    return b.createElement("form", {
      ref: x,
      method: C,
      action: R,
      onSubmit: o ? p : j,
      ...w,
      "data-discover": !M && t === "render" ? "true" : void 0,
    });
  },
);
Cx.displayName = "Form";
function Ax(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ov(t) {
  let r = b.useContext(qa);
  return (qe(r, Ax(t)), r);
}
function Ox(
  t,
  {
    target: r,
    replace: l,
    state: o,
    preventScrollReset: s,
    relative: c,
    viewTransition: f,
  } = {},
) {
  let h = ah(),
    p = $n(),
    m = co(t, { relative: c });
  return b.useCallback(
    (y) => {
      if (nx(y, r)) {
        y.preventDefault();
        let v = l !== void 0 ? l : na(p) === na(m);
        h(t, {
          replace: v,
          state: o,
          preventScrollReset: s,
          relative: c,
          viewTransition: f,
        });
      }
    },
    [p, h, m, l, o, r, t, s, c, f],
  );
}
function dD(t) {
  dt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let r = b.useRef(Td(t)),
    l = b.useRef(!1),
    o = $n(),
    s = b.useMemo(() => rx(o.search, l.current ? null : r.current), [o.search]),
    c = ah(),
    f = b.useCallback(
      (h, p) => {
        const m = Td(typeof h == "function" ? h(new URLSearchParams(s)) : h);
        ((l.current = !0), c("?" + m, p));
      },
      [c, s],
    );
  return [s, f];
}
var Tx = 0,
  Mx = () => `__${String(++Tx)}__`;
function Dx() {
  let { router: t } = Ov("useSubmit"),
    { basename: r } = b.useContext(In),
    l = qE();
  return b.useCallback(
    async (o, s = {}) => {
      let { action: c, method: f, encType: h, formData: p, body: m } = ix(o, r);
      if (s.navigate === !1) {
        let y = s.fetcherKey || Mx();
        await t.fetch(y, l, s.action || c, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: m,
          formMethod: s.method || f,
          formEncType: s.encType || h,
          flushSync: s.flushSync,
        });
      } else
        await t.navigate(s.action || c, {
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: m,
          formMethod: s.method || f,
          formEncType: s.encType || h,
          replace: s.replace,
          state: s.state,
          fromRouteId: l,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [t, r, l],
  );
}
function _x(t, { relative: r } = {}) {
  let { basename: l } = b.useContext(In),
    o = b.useContext(_n);
  qe(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1),
    c = { ...co(t || ".", { relative: r }) },
    f = $n();
  if (t == null) {
    c.search = f.search;
    let h = new URLSearchParams(c.search),
      p = h.getAll("index");
    if (p.some((y) => y === "")) {
      (h.delete("index"),
        p.filter((v) => v).forEach((v) => h.append("index", v)));
      let y = h.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (
    (!t || t === ".") &&
      s.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (c.pathname = c.pathname === "/" ? l : Kn([l, c.pathname])),
    na(c)
  );
}
function Nx(t, { relative: r } = {}) {
  let l = b.useContext(nh);
  qe(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = Ov("useViewTransitionState"),
    s = co(t, { relative: r });
  if (!l.isTransitioning) return !1;
  let c = En(l.currentLocation.pathname, o) || l.currentLocation.pathname,
    f = En(l.nextLocation.pathname, o) || l.nextLocation.pathname;
  return ou(s.pathname, f) != null || ou(s.pathname, c) != null;
}
var xu = nv();
const Lx = tv(xu);
function Ux(t) {
  return b.createElement(KE, { flushSync: xu.flushSync, ...t });
}
const zx = "modulepreload",
  jx = function (t) {
    return "/" + t;
  },
  $y = {},
  Jn = function (r, l, o) {
    let s = Promise.resolve();
    if (l && l.length > 0) {
      let p = function (m) {
        return Promise.all(
          m.map((y) =>
            Promise.resolve(y).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const f = document.querySelector("meta[property=csp-nonce]"),
        h = f?.nonce || f?.getAttribute("nonce");
      s = p(
        l.map((m) => {
          if (((m = jx(m)), m in $y)) return;
          $y[m] = !0;
          const y = m.endsWith(".css"),
            v = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${v}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = y ? "stylesheet" : zx),
            y || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = m),
            h && w.setAttribute("nonce", h),
            document.head.appendChild(w),
            y)
          )
            return new Promise((x, E) => {
              (w.addEventListener("load", x),
                w.addEventListener("error", () =>
                  E(new Error(`Unable to preload CSS for ${m}`)),
                ));
            });
        }),
      );
    }
    function c(f) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = f), window.dispatchEvent(h), !h.defaultPrevented))
        throw f;
    }
    return s.then((f) => {
      for (const h of f || []) h.status === "rejected" && c(h.reason);
      return r().catch(c);
    });
  },
  Vn = {
    HOME: { ROOT: "/" },
    AUCTION: { ROOT: "/auction", ROOM: "/auction/:auctionId" },
    CREATE: { ROOT: "/create" },
    HISTORY: { ROOT: "/history" },
    AUTH: { ROOT: "/auth" },
    PAYMENT: {
      APPROVAL: "/payment/approve",
      CANCEL: "/payment/cancel",
      FAIL: "/payment/fail",
      HISTORY: "/payment/history",
    },
  },
  Md = "/assets/profile1-BgNf41Vs.svg",
  Px = "/assets/profile2-uimi6C9l.svg",
  Hx = "/assets/profile3-Cw6ESoX5.svg",
  Bx = "/assets/profile4-BoJny71e.svg",
  kx = "/assets/profile5-CaBIp1ZG.svg",
  qx = "/assets/profile6-D02euur1.svg",
  Fx = "/assets/logo-CjZZMZa2.svg",
  Tv = "/assets/cup-CJ517CSa.svg",
  Gx =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.875%201.13754C16.7594%201.02166%2016.622%200.929722%2016.4708%200.866995C16.3196%200.804268%2016.1575%200.77198%2015.9938%200.77198C15.8301%200.77198%2015.668%200.804268%2015.5168%200.866995C15.3655%200.929722%2015.2282%201.02166%2015.1125%201.13754L9.00003%207.23753L2.88754%201.12504C2.77181%201.00931%202.63442%200.917508%202.48321%200.854877C2.33201%200.792245%202.16995%200.76001%202.00629%200.76001C1.84262%200.76001%201.68056%200.792245%201.52936%200.854877C1.37815%200.917508%201.24076%201.00931%201.12504%201.12504C1.00931%201.24076%200.917508%201.37815%200.854877%201.52936C0.792245%201.68056%200.76001%201.84262%200.76001%202.00629C0.76001%202.16995%200.792245%202.33201%200.854877%202.48321C0.917508%202.63442%201.00931%202.77181%201.12504%202.88754L7.23753%209.00003L1.12504%2015.1125C1.00931%2015.2283%200.917508%2015.3656%200.854877%2015.5169C0.792245%2015.6681%200.76001%2015.8301%200.76001%2015.9938C0.76001%2016.1574%200.792245%2016.3195%200.854877%2016.4707C0.917508%2016.6219%201.00931%2016.7593%201.12504%2016.875C1.24076%2016.9908%201.37815%2017.0826%201.52936%2017.1452C1.68056%2017.2078%201.84262%2017.2401%202.00629%2017.2401C2.16995%2017.2401%202.33201%2017.2078%202.48321%2017.1452C2.63442%2017.0826%202.77181%2016.9908%202.88754%2016.875L9.00003%2010.7625L15.1125%2016.875C15.2283%2016.9908%2015.3656%2017.0826%2015.5169%2017.1452C15.6681%2017.2078%2015.8301%2017.2401%2015.9938%2017.2401C16.1574%2017.2401%2016.3195%2017.2078%2016.4707%2017.1452C16.6219%2017.0826%2016.7593%2016.9908%2016.875%2016.875C16.9908%2016.7593%2017.0826%2016.6219%2017.1452%2016.4707C17.2078%2016.3195%2017.2401%2016.1574%2017.2401%2015.9938C17.2401%2015.8301%2017.2078%2015.6681%2017.1452%2015.5169C17.0826%2015.3656%2016.9908%2015.2283%2016.875%2015.1125L10.7625%209.00003L16.875%202.88754C17.35%202.41254%2017.35%201.61254%2016.875%201.13754Z'%20fill='%23525252'/%3e%3c/svg%3e",
  Yx =
    "data:image/svg+xml,%3csvg%20width='29'%20height='26'%20viewBox='0%200%2029%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5%200C22.2333%200%2028.5013%204.88533%2028.5013%2010.9133C28.5013%2016.94%2022.2333%2021.8253%2014.5013%2021.8253C13.7315%2021.824%2012.9625%2021.775%2012.1987%2021.6787L6.32134%2025.5227C5.65334%2025.876%205.41734%2025.8373%205.69201%2024.972L6.88134%2020.068C3.04134%2018.1213%200.501343%2014.748%200.501343%2010.9133C0.501343%204.88667%206.76801%200%2014.5013%200M22.3787%2010.7467L24.3387%208.848C24.4518%208.73054%2024.5149%208.57378%2024.5147%208.41073C24.5145%208.24767%2024.451%208.09106%2024.3376%207.97388C24.2242%207.8567%2024.0698%207.78809%2023.9069%207.78252C23.7439%207.77695%2023.5851%207.83484%2023.464%207.944L20.8933%2010.432V8.376C20.8933%208.20909%2020.827%208.04902%2020.709%207.93099C20.591%207.81297%2020.4309%207.74667%2020.264%207.74667C20.0971%207.74667%2019.937%207.81297%2019.819%207.93099C19.701%208.04902%2019.6347%208.20909%2019.6347%208.376V11.7853C19.6125%2011.8828%2019.6125%2011.9839%2019.6347%2012.0813V14C19.6347%2014.1669%2019.701%2014.327%2019.819%2014.445C19.937%2014.563%2020.0971%2014.6293%2020.264%2014.6293C20.4309%2014.6293%2020.591%2014.563%2020.709%2014.445C20.827%2014.327%2020.8933%2014.1669%2020.8933%2014V12.1827L21.4627%2011.632L23.3667%2014.3427C23.4142%2014.4103%2023.4746%2014.468%2023.5444%2014.5123C23.6143%2014.5567%2023.6921%2014.5868%2023.7736%2014.601C23.8551%2014.6153%2023.9385%2014.6133%2024.0192%2014.5953C24.1%2014.5773%2024.1763%2014.5435%2024.244%2014.496C24.3117%2014.4485%2024.3693%2014.3881%2024.4137%2014.3182C24.458%2014.2484%2024.4881%2014.1706%2024.5024%2014.0891C24.5166%2014.0076%2024.5147%2013.9241%2024.4966%2013.8434C24.4786%2013.7627%2024.4449%2013.6863%2024.3973%2013.6187L22.3787%2010.7467ZM18.4347%2013.312H16.488V8.396C16.4806%208.23427%2016.4111%208.08164%2016.294%207.96983C16.1769%207.85802%2016.0212%207.79563%2015.8593%207.79563C15.6974%207.79563%2015.5418%207.85802%2015.4247%207.96983C15.3076%208.08164%2015.2381%208.23427%2015.2307%208.396V13.9413C15.2307%2014.288%2015.5107%2014.5707%2015.8587%2014.5707H18.4347C18.6016%2014.5707%2018.7617%2014.5044%2018.8797%2014.3863C18.9977%2014.2683%2019.064%2014.1082%2019.064%2013.9413C19.064%2013.7744%2018.9977%2013.6143%2018.8797%2013.4963C18.7617%2013.3783%2018.6016%2013.312%2018.4347%2013.312ZM10.6253%2011.8573L11.5533%209.58L12.404%2011.856L10.6253%2011.8573ZM13.9893%2012.5067L13.992%2012.4853C13.9916%2012.3268%2013.9311%2012.1744%2013.8227%2012.0587L12.428%208.32533C12.3695%208.14742%2012.2582%207.99159%2012.1088%207.87866C11.9594%207.76573%2011.7791%207.70107%2011.592%207.69333C11.4037%207.69325%2011.2198%207.75012%2011.0644%207.85649C10.909%207.96286%2010.7894%208.11375%2010.7213%208.28933L8.50534%2013.7227C8.44222%2013.8772%208.44307%2014.0505%208.50771%2014.2044C8.57235%2014.3583%208.69548%2014.4802%208.85001%2014.5433C9.00454%2014.6065%209.17782%2014.6056%209.33173%2014.541C9.48563%2014.4763%209.60756%2014.3532%209.67068%2014.1987L10.1133%2013.1147H12.8733L13.2707%2014.1813C13.2978%2014.2611%2013.3406%2014.3345%2013.3966%2014.3974C13.4527%2014.4603%2013.5207%2014.5113%2013.5968%2014.5474C13.6729%2014.5835%2013.7554%2014.6039%2013.8396%2014.6075C13.9237%2014.6111%2014.0077%2014.5978%2014.0866%2014.5684C14.1655%2014.5389%2014.2377%2014.4939%2014.2989%2014.4361C14.3601%2014.3782%2014.409%2014.3087%2014.4429%2014.2315C14.4767%2014.1544%2014.4947%2014.0713%2014.4958%2013.9871C14.4969%2013.9029%2014.4811%2013.8193%2014.4493%2013.7413L13.9893%2012.5067ZM9.55868%208.40267C9.55903%208.32003%209.54303%208.23815%209.51162%208.16172C9.4802%208.0853%209.43397%208.01584%209.3756%207.95735C9.31724%207.89886%209.24788%207.85249%209.17152%207.8209C9.09516%207.78932%209.01331%207.77316%208.93068%207.77333H4.60401C4.4371%207.77333%204.27703%207.83964%204.159%207.95766C4.04098%208.07568%203.97468%208.23576%203.97468%208.40267C3.97468%208.56958%204.04098%208.72965%204.159%208.84767C4.27703%208.9657%204.4371%209.032%204.60401%209.032H6.15068V14.0133C6.15068%2014.1802%206.21698%2014.3403%206.335%2014.4583C6.45303%2014.5764%206.6131%2014.6427%206.78001%2014.6427C6.94692%2014.6427%207.10699%2014.5764%207.22502%2014.4583C7.34304%2014.3403%207.40934%2014.1802%207.40934%2014.0133V9.032H8.92934C9.01209%209.03235%209.09408%209.01632%209.1706%208.98481C9.24711%208.95331%209.31663%208.90697%209.37514%208.84846C9.43365%208.78995%209.47999%208.72043%209.51149%208.64392C9.54299%208.5674%209.55903%208.48541%209.55868%208.40267Z'%20fill='black'/%3e%3c/svg%3e",
  Vx =
    "data:image/svg+xml,%3csvg%20width='47'%20height='46'%20viewBox='0%200%2047%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='23.5'%20cy='23'%20r='22'%20fill='white'%20stroke='%23F3F3F3'%20stroke-width='2'/%3e%3cpath%20d='M34.69%2011.8101C33.8509%2010.972%2032.7135%2010.5012%2031.5275%2010.5012C30.3416%2010.5012%2029.2041%2010.972%2028.365%2011.8101L13.425%2026.7501C12.9169%2027.2577%2012.5599%2027.8964%2012.3938%2028.5951L11.025%2034.3476C10.988%2034.5034%2010.9914%2034.6661%2011.0351%2034.8202C11.0788%2034.9743%2011.1612%2035.1146%2011.2745%2035.2278C11.3878%2035.341%2011.5283%2035.4233%2011.6824%2035.4668C11.8365%2035.5103%2011.9992%2035.5136%2012.155%2035.4764L17.9063%2034.1064C18.6054%2033.9404%2019.2446%2033.5834%2019.7525%2033.0751L34.69%2018.1376C35.5281%2017.2985%2035.9989%2016.1611%2035.9989%2014.9751C35.9989%2013.7892%2035.5281%2012.6517%2034.69%2011.8126M29.69%2013.1376C29.9313%2012.8963%2030.2178%2012.7049%2030.5331%2012.5743C30.8483%2012.4437%2031.1863%2012.3765%2031.5275%2012.3765C31.8688%2012.3765%2032.2067%2012.4437%2032.522%2012.5743C32.8372%2012.7049%2033.1237%2012.8963%2033.365%2013.1376C33.6063%2013.3789%2033.7977%2013.6654%2033.9283%2013.9807C34.0589%2014.2959%2034.1261%2014.6339%2034.1261%2014.9751C34.1261%2015.3164%2034.0589%2015.6543%2033.9283%2015.9696C33.7977%2016.2848%2033.6063%2016.5713%2033.365%2016.8126L32.25%2017.9239L28.575%2014.2501L29.69%2013.1376ZM27.25%2015.5776L30.925%2019.2501L18.425%2031.7501C18.1625%2032.0126%2017.8325%2032.1964%2017.4713%2032.2826L13.2013%2033.3001L14.2175%2029.0301C14.3038%2028.6676%2014.4888%2028.3376%2014.7513%2028.0751L27.25%2015.5776Z'%20fill='%23757575'/%3e%3c/svg%3e";
function Mv(t) {
  var r,
    l,
    o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (r = 0; r < s; r++)
        t[r] && (l = Mv(t[r])) && (o && (o += " "), (o += l));
    } else for (l in t) t[l] && (o && (o += " "), (o += l));
  return o;
}
function Dv() {
  for (var t, r, l = 0, o = "", s = arguments.length; l < s; l++)
    (t = arguments[l]) && (r = Mv(t)) && (o && (o += " "), (o += r));
  return o;
}
const uh = "-",
  Qx = (t) => {
    const r = Xx(t),
      { conflictingClassGroups: l, conflictingClassGroupModifiers: o } = t;
    return {
      getClassGroupId: (f) => {
        const h = f.split(uh);
        return (h[0] === "" && h.length !== 1 && h.shift(), _v(h, r) || Kx(f));
      },
      getConflictingClassGroupIds: (f, h) => {
        const p = l[f] || [];
        return h && o[f] ? [...p, ...o[f]] : p;
      },
    };
  },
  _v = (t, r) => {
    if (t.length === 0) return r.classGroupId;
    const l = t[0],
      o = r.nextPart.get(l),
      s = o ? _v(t.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    const c = t.join(uh);
    return r.validators.find(({ validator: f }) => f(c))?.classGroupId;
  },
  Jy = /^\[(.+)\]$/,
  Kx = (t) => {
    if (Jy.test(t)) {
      const r = Jy.exec(t)[1],
        l = r?.substring(0, r.indexOf(":"));
      if (l) return "arbitrary.." + l;
    }
  },
  Xx = (t) => {
    const { theme: r, classGroups: l } = t,
      o = { nextPart: new Map(), validators: [] };
    for (const s in l) Dd(l[s], o, s, r);
    return o;
  },
  Dd = (t, r, l, o) => {
    t.forEach((s) => {
      if (typeof s == "string") {
        const c = s === "" ? r : Wy(r, s);
        c.classGroupId = l;
        return;
      }
      if (typeof s == "function") {
        if (Zx(s)) {
          Dd(s(o), r, l, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: l });
        return;
      }
      Object.entries(s).forEach(([c, f]) => {
        Dd(f, Wy(r, c), l, o);
      });
    });
  },
  Wy = (t, r) => {
    let l = t;
    return (
      r.split(uh).forEach((o) => {
        (l.nextPart.has(o) ||
          l.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (l = l.nextPart.get(o)));
      }),
      l
    );
  },
  Zx = (t) => t.isThemeGetter,
  Ix = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      l = new Map(),
      o = new Map();
    const s = (c, f) => {
      (l.set(c, f), r++, r > t && ((r = 0), (o = l), (l = new Map())));
    };
    return {
      get(c) {
        let f = l.get(c);
        if (f !== void 0) return f;
        if ((f = o.get(c)) !== void 0) return (s(c, f), f);
      },
      set(c, f) {
        l.has(c) ? l.set(c, f) : s(c, f);
      },
    };
  },
  _d = "!",
  Nd = ":",
  $x = Nd.length,
  Jx = (t) => {
    const { prefix: r, experimentalParseClassName: l } = t;
    let o = (s) => {
      const c = [];
      let f = 0,
        h = 0,
        p = 0,
        m;
      for (let E = 0; E < s.length; E++) {
        let R = s[E];
        if (f === 0 && h === 0) {
          if (R === Nd) {
            (c.push(s.slice(p, E)), (p = E + $x));
            continue;
          }
          if (R === "/") {
            m = E;
            continue;
          }
        }
        R === "[" ? f++ : R === "]" ? f-- : R === "(" ? h++ : R === ")" && h--;
      }
      const y = c.length === 0 ? s : s.substring(p),
        v = Wx(y),
        w = v !== y,
        x = m && m > p ? m - p : void 0;
      return {
        modifiers: c,
        hasImportantModifier: w,
        baseClassName: v,
        maybePostfixModifierPosition: x,
      };
    };
    if (r) {
      const s = r + Nd,
        c = o;
      o = (f) =>
        f.startsWith(s)
          ? c(f.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (l) {
      const s = o;
      o = (c) => l({ className: c, parseClassName: s });
    }
    return o;
  },
  Wx = (t) =>
    t.endsWith(_d)
      ? t.substring(0, t.length - 1)
      : t.startsWith(_d)
        ? t.substring(1)
        : t,
  eR = (t) => {
    const r = Object.fromEntries(t.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const s = [];
      let c = [];
      return (
        o.forEach((f) => {
          f[0] === "[" || r[f] ? (s.push(...c.sort(), f), (c = [])) : c.push(f);
        }),
        s.push(...c.sort()),
        s
      );
    };
  },
  tR = (t) => ({
    cache: Ix(t.cacheSize),
    parseClassName: Jx(t),
    sortModifiers: eR(t),
    ...Qx(t),
  }),
  nR = /\s+/,
  rR = (t, r) => {
    const {
        parseClassName: l,
        getClassGroupId: o,
        getConflictingClassGroupIds: s,
        sortModifiers: c,
      } = r,
      f = [],
      h = t.trim().split(nR);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const y = h[m],
        {
          isExternal: v,
          modifiers: w,
          hasImportantModifier: x,
          baseClassName: E,
          maybePostfixModifierPosition: R,
        } = l(y);
      if (v) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      let C = !!R,
        M = o(C ? E.substring(0, R) : E);
      if (!M) {
        if (!C) {
          p = y + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((M = o(E)), !M)) {
          p = y + (p.length > 0 ? " " + p : p);
          continue;
        }
        C = !1;
      }
      const j = c(w).join(":"),
        U = x ? j + _d : j,
        G = U + M;
      if (f.includes(G)) continue;
      f.push(G);
      const P = s(M, C);
      for (let _ = 0; _ < P.length; ++_) {
        const K = P[_];
        f.push(U + K);
      }
      p = y + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function aR() {
  let t = 0,
    r,
    l,
    o = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (l = Nv(r)) && (o && (o += " "), (o += l));
  return o;
}
const Nv = (t) => {
  if (typeof t == "string") return t;
  let r,
    l = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (r = Nv(t[o])) && (l && (l += " "), (l += r));
  return l;
};
function lR(t, ...r) {
  let l,
    o,
    s,
    c = f;
  function f(p) {
    const m = r.reduce((y, v) => v(y), t());
    return ((l = tR(m)), (o = l.cache.get), (s = l.cache.set), (c = h), h(p));
  }
  function h(p) {
    const m = o(p);
    if (m) return m;
    const y = rR(p, l);
    return (s(p, y), y);
  }
  return function () {
    return c(aR.apply(null, arguments));
  };
}
const St = (t) => {
    const r = (l) => l[t] || [];
    return ((r.isThemeGetter = !0), r);
  },
  Lv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Uv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  iR = /^\d+\/\d+$/,
  oR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  sR =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  uR = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  cR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  fR =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ol = (t) => iR.test(t),
  je = (t) => !!t && !Number.isNaN(Number(t)),
  Zr = (t) => !!t && Number.isInteger(Number(t)),
  ud = (t) => t.endsWith("%") && je(t.slice(0, -1)),
  Sr = (t) => oR.test(t),
  dR = () => !0,
  hR = (t) => sR.test(t) && !uR.test(t),
  zv = () => !1,
  mR = (t) => cR.test(t),
  pR = (t) => fR.test(t),
  yR = (t) => !fe(t) && !de(t),
  gR = (t) => kl(t, Hv, zv),
  fe = (t) => Lv.test(t),
  Da = (t) => kl(t, Bv, hR),
  cd = (t) => kl(t, ER, je),
  eg = (t) => kl(t, jv, zv),
  vR = (t) => kl(t, Pv, pR),
  ks = (t) => kl(t, kv, mR),
  de = (t) => Uv.test(t),
  Zi = (t) => ql(t, Bv),
  bR = (t) => ql(t, xR),
  tg = (t) => ql(t, jv),
  SR = (t) => ql(t, Hv),
  wR = (t) => ql(t, Pv),
  qs = (t) => ql(t, kv, !0),
  kl = (t, r, l) => {
    const o = Lv.exec(t);
    return o ? (o[1] ? r(o[1]) : l(o[2])) : !1;
  },
  ql = (t, r, l = !1) => {
    const o = Uv.exec(t);
    return o ? (o[1] ? r(o[1]) : l) : !1;
  },
  jv = (t) => t === "position" || t === "percentage",
  Pv = (t) => t === "image" || t === "url",
  Hv = (t) => t === "length" || t === "size" || t === "bg-size",
  Bv = (t) => t === "length",
  ER = (t) => t === "number",
  xR = (t) => t === "family-name",
  kv = (t) => t === "shadow",
  RR = () => {
    const t = St("color"),
      r = St("font"),
      l = St("text"),
      o = St("font-weight"),
      s = St("tracking"),
      c = St("leading"),
      f = St("breakpoint"),
      h = St("container"),
      p = St("spacing"),
      m = St("radius"),
      y = St("shadow"),
      v = St("inset-shadow"),
      w = St("text-shadow"),
      x = St("drop-shadow"),
      E = St("blur"),
      R = St("perspective"),
      C = St("aspect"),
      M = St("ease"),
      j = St("animate"),
      U = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      G = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      P = () => [...G(), de, fe],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      K = () => ["auto", "contain", "none"],
      V = () => [de, fe, p],
      ae = () => [Ol, "full", "auto", ...V()],
      oe = () => [Zr, "none", "subgrid", de, fe],
      we = () => ["auto", { span: ["full", Zr, de, fe] }, Zr, de, fe],
      Ee = () => [Zr, "auto", de, fe],
      ue = () => ["auto", "min", "max", "fr", de, fe],
      se = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      be = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      N = () => ["auto", ...V()],
      $ = () => [
        Ol,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...V(),
      ],
      k = () => [t, de, fe],
      ne = () => [...G(), tg, eg, { position: [de, fe] }],
      A = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Z = () => ["auto", "cover", "contain", SR, gR, { size: [de, fe] }],
      re = () => [ud, Zi, Da],
      ee = () => ["", "none", "full", m, de, fe],
      ie = () => ["", je, Zi, Da],
      Oe = () => ["solid", "dashed", "dotted", "double"],
      me = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Re = () => [je, ud, tg, eg],
      Fe = () => ["", "none", E, de, fe],
      Ct = () => ["none", je, de, fe],
      We = () => ["none", je, de, fe],
      At = () => [je, de, fe],
      Zt = () => [Ol, "full", ...V()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Sr],
        breakpoint: [Sr],
        color: [dR],
        container: [Sr],
        "drop-shadow": [Sr],
        ease: ["in", "out", "in-out"],
        font: [yR],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Sr],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Sr],
        shadow: [Sr],
        spacing: ["px", je],
        text: [Sr],
        "text-shadow": [Sr],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ol, fe, de, C] }],
        container: ["container"],
        columns: [{ columns: [je, fe, de, h] }],
        "break-after": [{ "break-after": U() }],
        "break-before": [{ "break-before": U() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: P() }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: K() }],
        "overscroll-x": [{ "overscroll-x": K() }],
        "overscroll-y": [{ "overscroll-y": K() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ae() }],
        "inset-x": [{ "inset-x": ae() }],
        "inset-y": [{ "inset-y": ae() }],
        start: [{ start: ae() }],
        end: [{ end: ae() }],
        top: [{ top: ae() }],
        right: [{ right: ae() }],
        bottom: [{ bottom: ae() }],
        left: [{ left: ae() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Zr, "auto", de, fe] }],
        basis: [{ basis: [Ol, "full", "auto", h, ...V()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [je, Ol, "auto", "initial", "none", fe] }],
        grow: [{ grow: ["", je, de, fe] }],
        shrink: [{ shrink: ["", je, de, fe] }],
        order: [{ order: [Zr, "first", "last", "none", de, fe] }],
        "grid-cols": [{ "grid-cols": oe() }],
        "col-start-end": [{ col: we() }],
        "col-start": [{ "col-start": Ee() }],
        "col-end": [{ "col-end": Ee() }],
        "grid-rows": [{ "grid-rows": oe() }],
        "row-start-end": [{ row: we() }],
        "row-start": [{ "row-start": Ee() }],
        "row-end": [{ "row-end": Ee() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ue() }],
        "auto-rows": [{ "auto-rows": ue() }],
        gap: [{ gap: V() }],
        "gap-x": [{ "gap-x": V() }],
        "gap-y": [{ "gap-y": V() }],
        "justify-content": [{ justify: [...se(), "normal"] }],
        "justify-items": [{ "justify-items": [...be(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...be()] }],
        "align-content": [{ content: ["normal", ...se()] }],
        "align-items": [{ items: [...be(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...be(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": se() }],
        "place-items": [{ "place-items": [...be(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...be()] }],
        p: [{ p: V() }],
        px: [{ px: V() }],
        py: [{ py: V() }],
        ps: [{ ps: V() }],
        pe: [{ pe: V() }],
        pt: [{ pt: V() }],
        pr: [{ pr: V() }],
        pb: [{ pb: V() }],
        pl: [{ pl: V() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        "space-x": [{ "space-x": V() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": V() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: $() }],
        w: [{ w: [h, "screen", ...$()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...$()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...$()] },
        ],
        h: [{ h: ["screen", "lh", ...$()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...$()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...$()] }],
        "font-size": [{ text: ["base", l, Zi, Da] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, de, cd] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ud,
              fe,
            ],
          },
        ],
        "font-family": [{ font: [bR, fe, r] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, de, fe] }],
        "line-clamp": [{ "line-clamp": [je, "none", de, cd] }],
        leading: [{ leading: [c, ...V()] }],
        "list-image": [{ "list-image": ["none", de, fe] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", de, fe] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Oe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [je, "from-font", "auto", de, Da] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [je, "auto", de, fe] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: V() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              de,
              fe,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", de, fe] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ne() }],
        "bg-repeat": [{ bg: A() }],
        "bg-size": [{ bg: Z() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Zr,
                  de,
                  fe,
                ],
                radial: ["", de, fe],
                conic: [Zr, de, fe],
              },
              wR,
              vR,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: re() }],
        "gradient-via-pos": [{ via: re() }],
        "gradient-to-pos": [{ to: re() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: ee() }],
        "rounded-s": [{ "rounded-s": ee() }],
        "rounded-e": [{ "rounded-e": ee() }],
        "rounded-t": [{ "rounded-t": ee() }],
        "rounded-r": [{ "rounded-r": ee() }],
        "rounded-b": [{ "rounded-b": ee() }],
        "rounded-l": [{ "rounded-l": ee() }],
        "rounded-ss": [{ "rounded-ss": ee() }],
        "rounded-se": [{ "rounded-se": ee() }],
        "rounded-ee": [{ "rounded-ee": ee() }],
        "rounded-es": [{ "rounded-es": ee() }],
        "rounded-tl": [{ "rounded-tl": ee() }],
        "rounded-tr": [{ "rounded-tr": ee() }],
        "rounded-br": [{ "rounded-br": ee() }],
        "rounded-bl": [{ "rounded-bl": ee() }],
        "border-w": [{ border: ie() }],
        "border-w-x": [{ "border-x": ie() }],
        "border-w-y": [{ "border-y": ie() }],
        "border-w-s": [{ "border-s": ie() }],
        "border-w-e": [{ "border-e": ie() }],
        "border-w-t": [{ "border-t": ie() }],
        "border-w-r": [{ "border-r": ie() }],
        "border-w-b": [{ "border-b": ie() }],
        "border-w-l": [{ "border-l": ie() }],
        "divide-x": [{ "divide-x": ie() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ie() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Oe(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Oe(), "hidden", "none"] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...Oe(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [je, de, fe] }],
        "outline-w": [{ outline: ["", je, Zi, Da] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: ["", "none", y, qs, ks] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": ["none", v, qs, ks] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: ie() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [je, Da] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": ie() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": ["none", w, qs, ks] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [je, de, fe] }],
        "mix-blend": [
          { "mix-blend": [...me(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": me() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [je] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Re() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Re() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Re() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Re() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Re() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Re() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Re() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Re() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Re() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Re() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Re() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Re() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Re() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Re() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [de, fe] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Re() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Re() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": G() }],
        "mask-image-conic-pos": [{ "mask-conic": [je] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Re() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Re() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: ne() }],
        "mask-repeat": [{ mask: A() }],
        "mask-size": [{ mask: Z() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", de, fe] }],
        filter: [{ filter: ["", "none", de, fe] }],
        blur: [{ blur: Fe() }],
        brightness: [{ brightness: [je, de, fe] }],
        contrast: [{ contrast: [je, de, fe] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", x, qs, ks] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: ["", je, de, fe] }],
        "hue-rotate": [{ "hue-rotate": [je, de, fe] }],
        invert: [{ invert: ["", je, de, fe] }],
        saturate: [{ saturate: [je, de, fe] }],
        sepia: [{ sepia: ["", je, de, fe] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", de, fe] }],
        "backdrop-blur": [{ "backdrop-blur": Fe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [je, de, fe] }],
        "backdrop-contrast": [{ "backdrop-contrast": [je, de, fe] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", je, de, fe] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [je, de, fe] }],
        "backdrop-invert": [{ "backdrop-invert": ["", je, de, fe] }],
        "backdrop-opacity": [{ "backdrop-opacity": [je, de, fe] }],
        "backdrop-saturate": [{ "backdrop-saturate": [je, de, fe] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", je, de, fe] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": V() }],
        "border-spacing-x": [{ "border-spacing-x": V() }],
        "border-spacing-y": [{ "border-spacing-y": V() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              de,
              fe,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [je, "initial", de, fe] }],
        ease: [{ ease: ["linear", "initial", M, de, fe] }],
        delay: [{ delay: [je, de, fe] }],
        animate: [{ animate: ["none", j, de, fe] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [R, de, fe] }],
        "perspective-origin": [{ "perspective-origin": P() }],
        rotate: [{ rotate: Ct() }],
        "rotate-x": [{ "rotate-x": Ct() }],
        "rotate-y": [{ "rotate-y": Ct() }],
        "rotate-z": [{ "rotate-z": Ct() }],
        scale: [{ scale: We() }],
        "scale-x": [{ "scale-x": We() }],
        "scale-y": [{ "scale-y": We() }],
        "scale-z": [{ "scale-z": We() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: At() }],
        "skew-x": [{ "skew-x": At() }],
        "skew-y": [{ "skew-y": At() }],
        transform: [{ transform: [de, fe, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: P() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Zt() }],
        "translate-x": [{ "translate-x": Zt() }],
        "translate-y": [{ "translate-y": Zt() }],
        "translate-z": [{ "translate-z": Zt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: k() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              de,
              fe,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": V() }],
        "scroll-mx": [{ "scroll-mx": V() }],
        "scroll-my": [{ "scroll-my": V() }],
        "scroll-ms": [{ "scroll-ms": V() }],
        "scroll-me": [{ "scroll-me": V() }],
        "scroll-mt": [{ "scroll-mt": V() }],
        "scroll-mr": [{ "scroll-mr": V() }],
        "scroll-mb": [{ "scroll-mb": V() }],
        "scroll-ml": [{ "scroll-ml": V() }],
        "scroll-p": [{ "scroll-p": V() }],
        "scroll-px": [{ "scroll-px": V() }],
        "scroll-py": [{ "scroll-py": V() }],
        "scroll-ps": [{ "scroll-ps": V() }],
        "scroll-pe": [{ "scroll-pe": V() }],
        "scroll-pt": [{ "scroll-pt": V() }],
        "scroll-pr": [{ "scroll-pr": V() }],
        "scroll-pb": [{ "scroll-pb": V() }],
        "scroll-pl": [{ "scroll-pl": V() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", de, fe],
          },
        ],
        fill: [{ fill: ["none", ...k()] }],
        "stroke-w": [{ stroke: [je, Zi, Da, cd] }],
        stroke: [{ stroke: ["none", ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  qv = lR(RR),
  CR = (...t) => qv(Dv(t)),
  AR = { small: "px-3 py-1.5 text-base", large: "px-5 py-3 text-xl" },
  ng = { small: "rounded-[10px]", large: "rounded-[50px]" },
  OR = {
    primary: "bg-brand-primary text-bg-white",
    outlined: "bg-bg-white border border-2 border-scale-100 text-scale-600",
    gray: "bg-scale-100 text-scale-500",
    darkgray: "bg-scale-200 text-scale-300",
    kakao: "bg-point-kakao text-scale-600",
    disabled: "bg-brand-secondary text-[#C5B6AD]",
  };
function jl({
  children: t,
  className: r,
  disabled: l = !1,
  variant: o = "primary",
  size: s = "large",
  isRounded: c = !1,
  ...f
}) {
  const h = CR(
    "font-bold cursor-pointer",
    r,
    AR[s],
    c ? ng.large : ng.small,
    OR[l ? "disabled" : o],
  );
  return O.jsx("button", { className: h, ...f, children: t });
}
function Pe(t, r, { checkForDefaultPrevented: l = !0 } = {}) {
  return function (s) {
    if ((t?.(s), l === !1 || !s.defaultPrevented)) return r?.(s);
  };
}
function rg(t, r) {
  if (typeof t == "function") return t(r);
  t != null && (t.current = r);
}
function Ru(...t) {
  return (r) => {
    let l = !1;
    const o = t.map((s) => {
      const c = rg(s, r);
      return (!l && typeof c == "function" && (l = !0), c);
    });
    if (l)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const c = o[s];
          typeof c == "function" ? c() : rg(t[s], null);
        }
      };
  };
}
function Nt(...t) {
  return b.useCallback(Ru(...t), t);
}
function TR(t, r) {
  const l = b.createContext(r),
    o = (c) => {
      const { children: f, ...h } = c,
        p = b.useMemo(() => h, Object.values(h));
      return O.jsx(l.Provider, { value: p, children: f });
    };
  o.displayName = t + "Provider";
  function s(c) {
    const f = b.useContext(l);
    if (f) return f;
    if (r !== void 0) return r;
    throw new Error(`\`${c}\` must be used within \`${t}\``);
  }
  return [o, s];
}
function Fl(t, r = []) {
  let l = [];
  function o(c, f) {
    const h = b.createContext(f),
      p = l.length;
    l = [...l, f];
    const m = (v) => {
      const { scope: w, children: x, ...E } = v,
        R = w?.[t]?.[p] || h,
        C = b.useMemo(() => E, Object.values(E));
      return O.jsx(R.Provider, { value: C, children: x });
    };
    m.displayName = c + "Provider";
    function y(v, w) {
      const x = w?.[t]?.[p] || h,
        E = b.useContext(x);
      if (E) return E;
      if (f !== void 0) return f;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return [m, y];
  }
  const s = () => {
    const c = l.map((f) => b.createContext(f));
    return function (h) {
      const p = h?.[t] || c;
      return b.useMemo(() => ({ [`__scope${t}`]: { ...h, [t]: p } }), [h, p]);
    };
  };
  return ((s.scopeName = t), [o, MR(s, ...r)]);
}
function MR(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const l = () => {
    const o = t.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (c) {
      const f = o.reduce((h, { useScope: p, scopeName: m }) => {
        const v = p(c)[`__scope${m}`];
        return { ...h, ...v };
      }, {});
      return b.useMemo(() => ({ [`__scope${r.scopeName}`]: f }), [f]);
    };
  };
  return ((l.scopeName = r.scopeName), l);
}
var ra = globalThis?.document ? b.useLayoutEffect : () => {},
  DR = rv[" useId ".trim().toString()] || (() => {}),
  _R = 0;
function Ll(t) {
  const [r, l] = b.useState(DR());
  return (
    ra(() => {
      l((o) => o ?? String(_R++));
    }, [t]),
    t || (r ? `radix-${r}` : "")
  );
}
var NR = rv[" useInsertionEffect ".trim().toString()] || ra;
function ch({ prop: t, defaultProp: r, onChange: l = () => {}, caller: o }) {
  const [s, c, f] = LR({ defaultProp: r, onChange: l }),
    h = t !== void 0,
    p = h ? t : s;
  {
    const y = b.useRef(t !== void 0);
    b.useEffect(() => {
      const v = y.current;
      (v !== h &&
        console.warn(
          `${o} is changing from ${v ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (y.current = h));
    }, [h, o]);
  }
  const m = b.useCallback(
    (y) => {
      if (h) {
        const v = UR(y) ? y(t) : y;
        v !== t && f.current?.(v);
      } else c(y);
    },
    [h, t, c, f],
  );
  return [p, m];
}
function LR({ defaultProp: t, onChange: r }) {
  const [l, o] = b.useState(t),
    s = b.useRef(l),
    c = b.useRef(r);
  return (
    NR(() => {
      c.current = r;
    }, [r]),
    b.useEffect(() => {
      s.current !== l && (c.current?.(l), (s.current = l));
    }, [l, s]),
    [l, o, c]
  );
}
function UR(t) {
  return typeof t == "function";
}
function no(t) {
  const r = zR(t),
    l = b.forwardRef((o, s) => {
      const { children: c, ...f } = o,
        h = b.Children.toArray(c),
        p = h.find(PR);
      if (p) {
        const m = p.props.children,
          y = h.map((v) =>
            v === p
              ? b.Children.count(m) > 1
                ? b.Children.only(null)
                : b.isValidElement(m)
                  ? m.props.children
                  : null
              : v,
          );
        return O.jsx(r, {
          ...f,
          ref: s,
          children: b.isValidElement(m) ? b.cloneElement(m, void 0, y) : null,
        });
      }
      return O.jsx(r, { ...f, ref: s, children: c });
    });
  return ((l.displayName = `${t}.Slot`), l);
}
function zR(t) {
  const r = b.forwardRef((l, o) => {
    const { children: s, ...c } = l;
    if (b.isValidElement(s)) {
      const f = BR(s),
        h = HR(c, s.props);
      return (
        s.type !== b.Fragment && (h.ref = o ? Ru(o, f) : f),
        b.cloneElement(s, h)
      );
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((r.displayName = `${t}.SlotClone`), r);
}
var jR = Symbol("radix.slottable");
function PR(t) {
  return (
    b.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === jR
  );
}
function HR(t, r) {
  const l = { ...r };
  for (const o in r) {
    const s = t[o],
      c = r[o];
    /^on[A-Z]/.test(o)
      ? s && c
        ? (l[o] = (...h) => {
            const p = c(...h);
            return (s(...h), p);
          })
        : s && (l[o] = s)
      : o === "style"
        ? (l[o] = { ...s, ...c })
        : o === "className" && (l[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...t, ...l };
}
function BR(t) {
  let r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    l = r && "isReactWarning" in r && r.isReactWarning;
  return l
    ? t.ref
    : ((r = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (l = r && "isReactWarning" in r && r.isReactWarning),
      l ? t.props.ref : t.props.ref || t.ref);
}
var kR = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  gt = kR.reduce((t, r) => {
    const l = no(`Primitive.${r}`),
      o = b.forwardRef((s, c) => {
        const { asChild: f, ...h } = s,
          p = f ? l : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          O.jsx(p, { ...h, ref: c })
        );
      });
    return ((o.displayName = `Primitive.${r}`), { ...t, [r]: o });
  }, {});
function Fv(t, r) {
  t && xu.flushSync(() => t.dispatchEvent(r));
}
function wr(t) {
  const r = b.useRef(t);
  return (
    b.useEffect(() => {
      r.current = t;
    }),
    b.useMemo(
      () =>
        (...l) =>
          r.current?.(...l),
      [],
    )
  );
}
function qR(t, r = globalThis?.document) {
  const l = wr(t);
  b.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && l(s);
    };
    return (
      r.addEventListener("keydown", o, { capture: !0 }),
      () => r.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [l, r]);
}
var FR = "DismissableLayer",
  Ld = "dismissableLayer.update",
  GR = "dismissableLayer.pointerDownOutside",
  YR = "dismissableLayer.focusOutside",
  ag,
  Gv = b.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  fh = b.forwardRef((t, r) => {
    const {
        disableOutsidePointerEvents: l = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: c,
        onInteractOutside: f,
        onDismiss: h,
        ...p
      } = t,
      m = b.useContext(Gv),
      [y, v] = b.useState(null),
      w = y?.ownerDocument ?? globalThis?.document,
      [, x] = b.useState({}),
      E = Nt(r, (K) => v(K)),
      R = Array.from(m.layers),
      [C] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = R.indexOf(C),
      j = y ? R.indexOf(y) : -1,
      U = m.layersWithOutsidePointerEventsDisabled.size > 0,
      G = j >= M,
      P = KR((K) => {
        const V = K.target,
          ae = [...m.branches].some((oe) => oe.contains(V));
        !G || ae || (s?.(K), f?.(K), K.defaultPrevented || h?.());
      }, w),
      _ = XR((K) => {
        const V = K.target;
        [...m.branches].some((oe) => oe.contains(V)) ||
          (c?.(K), f?.(K), K.defaultPrevented || h?.());
      }, w);
    return (
      qR((K) => {
        j === m.layers.size - 1 &&
          (o?.(K), !K.defaultPrevented && h && (K.preventDefault(), h()));
      }, w),
      b.useEffect(() => {
        if (y)
          return (
            l &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ag = w.body.style.pointerEvents),
                (w.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(y)),
            m.layers.add(y),
            lg(),
            () => {
              l &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (w.body.style.pointerEvents = ag);
            }
          );
      }, [y, w, l, m]),
      b.useEffect(
        () => () => {
          y &&
            (m.layers.delete(y),
            m.layersWithOutsidePointerEventsDisabled.delete(y),
            lg());
        },
        [y, m],
      ),
      b.useEffect(() => {
        const K = () => x({});
        return (
          document.addEventListener(Ld, K),
          () => document.removeEventListener(Ld, K)
        );
      }, []),
      O.jsx(gt.div, {
        ...p,
        ref: E,
        style: {
          pointerEvents: U ? (G ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: Pe(t.onFocusCapture, _.onFocusCapture),
        onBlurCapture: Pe(t.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: Pe(
          t.onPointerDownCapture,
          P.onPointerDownCapture,
        ),
      })
    );
  });
fh.displayName = FR;
var VR = "DismissableLayerBranch",
  QR = b.forwardRef((t, r) => {
    const l = b.useContext(Gv),
      o = b.useRef(null),
      s = Nt(r, o);
    return (
      b.useEffect(() => {
        const c = o.current;
        if (c)
          return (
            l.branches.add(c),
            () => {
              l.branches.delete(c);
            }
          );
      }, [l.branches]),
      O.jsx(gt.div, { ...t, ref: s })
    );
  });
QR.displayName = VR;
function KR(t, r = globalThis?.document) {
  const l = wr(t),
    o = b.useRef(!1),
    s = b.useRef(() => {});
  return (
    b.useEffect(() => {
      const c = (h) => {
          if (h.target && !o.current) {
            let p = function () {
              Yv(GR, l, m, { discrete: !0 });
            };
            const m = { originalEvent: h };
            h.pointerType === "touch"
              ? (r.removeEventListener("click", s.current),
                (s.current = p),
                r.addEventListener("click", s.current, { once: !0 }))
              : p();
          } else r.removeEventListener("click", s.current);
          o.current = !1;
        },
        f = window.setTimeout(() => {
          r.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        (window.clearTimeout(f),
          r.removeEventListener("pointerdown", c),
          r.removeEventListener("click", s.current));
      };
    }, [r, l]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function XR(t, r = globalThis?.document) {
  const l = wr(t),
    o = b.useRef(!1);
  return (
    b.useEffect(() => {
      const s = (c) => {
        c.target &&
          !o.current &&
          Yv(YR, l, { originalEvent: c }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", s),
        () => r.removeEventListener("focusin", s)
      );
    }, [r, l]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function lg() {
  const t = new CustomEvent(Ld);
  document.dispatchEvent(t);
}
function Yv(t, r, l, { discrete: o }) {
  const s = l.originalEvent.target,
    c = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: l });
  (r && s.addEventListener(t, r, { once: !0 }),
    o ? Fv(s, c) : s.dispatchEvent(c));
}
var fd = "focusScope.autoFocusOnMount",
  dd = "focusScope.autoFocusOnUnmount",
  ig = { bubbles: !1, cancelable: !0 },
  ZR = "FocusScope",
  dh = b.forwardRef((t, r) => {
    const {
        loop: l = !1,
        trapped: o = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: c,
        ...f
      } = t,
      [h, p] = b.useState(null),
      m = wr(s),
      y = wr(c),
      v = b.useRef(null),
      w = Nt(r, (R) => p(R)),
      x = b.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (b.useEffect(() => {
      if (o) {
        let R = function (U) {
            if (x.paused || !h) return;
            const G = U.target;
            h.contains(G) ? (v.current = G) : Jr(v.current, { select: !0 });
          },
          C = function (U) {
            if (x.paused || !h) return;
            const G = U.relatedTarget;
            G !== null && (h.contains(G) || Jr(v.current, { select: !0 }));
          },
          M = function (U) {
            if (document.activeElement === document.body)
              for (const P of U) P.removedNodes.length > 0 && Jr(h);
          };
        (document.addEventListener("focusin", R),
          document.addEventListener("focusout", C));
        const j = new MutationObserver(M);
        return (
          h && j.observe(h, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", R),
              document.removeEventListener("focusout", C),
              j.disconnect());
          }
        );
      }
    }, [o, h, x.paused]),
      b.useEffect(() => {
        if (h) {
          sg.add(x);
          const R = document.activeElement;
          if (!h.contains(R)) {
            const M = new CustomEvent(fd, ig);
            (h.addEventListener(fd, m),
              h.dispatchEvent(M),
              M.defaultPrevented ||
                (IR(tC(Vv(h)), { select: !0 }),
                document.activeElement === R && Jr(h)));
          }
          return () => {
            (h.removeEventListener(fd, m),
              setTimeout(() => {
                const M = new CustomEvent(dd, ig);
                (h.addEventListener(dd, y),
                  h.dispatchEvent(M),
                  M.defaultPrevented || Jr(R ?? document.body, { select: !0 }),
                  h.removeEventListener(dd, y),
                  sg.remove(x));
              }, 0));
          };
        }
      }, [h, m, y, x]));
    const E = b.useCallback(
      (R) => {
        if ((!l && !o) || x.paused) return;
        const C = R.key === "Tab" && !R.altKey && !R.ctrlKey && !R.metaKey,
          M = document.activeElement;
        if (C && M) {
          const j = R.currentTarget,
            [U, G] = $R(j);
          U && G
            ? !R.shiftKey && M === G
              ? (R.preventDefault(), l && Jr(U, { select: !0 }))
              : R.shiftKey &&
                M === U &&
                (R.preventDefault(), l && Jr(G, { select: !0 }))
            : M === j && R.preventDefault();
        }
      },
      [l, o, x.paused],
    );
    return O.jsx(gt.div, { tabIndex: -1, ...f, ref: w, onKeyDown: E });
  });
dh.displayName = ZR;
function IR(t, { select: r = !1 } = {}) {
  const l = document.activeElement;
  for (const o of t)
    if ((Jr(o, { select: r }), document.activeElement !== l)) return;
}
function $R(t) {
  const r = Vv(t),
    l = og(r, t),
    o = og(r.reverse(), t);
  return [l, o];
}
function Vv(t) {
  const r = [],
    l = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const s = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || s
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; l.nextNode(); ) r.push(l.currentNode);
  return r;
}
function og(t, r) {
  for (const l of t) if (!JR(l, { upTo: r })) return l;
}
function JR(t, { upTo: r }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (r !== void 0 && t === r) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function WR(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Jr(t, { select: r = !1 } = {}) {
  if (t && t.focus) {
    const l = document.activeElement;
    (t.focus({ preventScroll: !0 }), t !== l && WR(t) && r && t.select());
  }
}
var sg = eC();
function eC() {
  let t = [];
  return {
    add(r) {
      const l = t[0];
      (r !== l && l?.pause(), (t = ug(t, r)), t.unshift(r));
    },
    remove(r) {
      ((t = ug(t, r)), t[0]?.resume());
    },
  };
}
function ug(t, r) {
  const l = [...t],
    o = l.indexOf(r);
  return (o !== -1 && l.splice(o, 1), l);
}
function tC(t) {
  return t.filter((r) => r.tagName !== "A");
}
var nC = "Portal",
  hh = b.forwardRef((t, r) => {
    const { container: l, ...o } = t,
      [s, c] = b.useState(!1);
    ra(() => c(!0), []);
    const f = l || (s && globalThis?.document?.body);
    return f ? Lx.createPortal(O.jsx(gt.div, { ...o, ref: r }), f) : null;
  });
hh.displayName = nC;
function rC(t, r) {
  return b.useReducer((l, o) => r[l][o] ?? l, t);
}
var oa = (t) => {
  const { present: r, children: l } = t,
    o = aC(r),
    s =
      typeof l == "function" ? l({ present: o.isPresent }) : b.Children.only(l),
    c = Nt(o.ref, lC(s));
  return typeof l == "function" || o.isPresent
    ? b.cloneElement(s, { ref: c })
    : null;
};
oa.displayName = "Presence";
function aC(t) {
  const [r, l] = b.useState(),
    o = b.useRef(null),
    s = b.useRef(t),
    c = b.useRef("none"),
    f = t ? "mounted" : "unmounted",
    [h, p] = rC(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    b.useEffect(() => {
      const m = Fs(o.current);
      c.current = h === "mounted" ? m : "none";
    }, [h]),
    ra(() => {
      const m = o.current,
        y = s.current;
      if (y !== t) {
        const w = c.current,
          x = Fs(m);
        (t
          ? p("MOUNT")
          : x === "none" || m?.display === "none"
            ? p("UNMOUNT")
            : p(y && w !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = t));
      }
    }, [t, p]),
    ra(() => {
      if (r) {
        let m;
        const y = r.ownerDocument.defaultView ?? window,
          v = (x) => {
            const R = Fs(o.current).includes(CSS.escape(x.animationName));
            if (x.target === r && R && (p("ANIMATION_END"), !s.current)) {
              const C = r.style.animationFillMode;
              ((r.style.animationFillMode = "forwards"),
                (m = y.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = C);
                })));
            }
          },
          w = (x) => {
            x.target === r && (c.current = Fs(o.current));
          };
        return (
          r.addEventListener("animationstart", w),
          r.addEventListener("animationcancel", v),
          r.addEventListener("animationend", v),
          () => {
            (y.clearTimeout(m),
              r.removeEventListener("animationstart", w),
              r.removeEventListener("animationcancel", v),
              r.removeEventListener("animationend", v));
          }
        );
      } else p("ANIMATION_END");
    }, [r, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: b.useCallback((m) => {
        ((o.current = m ? getComputedStyle(m) : null), l(m));
      }, []),
    }
  );
}
function Fs(t) {
  return t?.animationName || "none";
}
function lC(t) {
  let r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    l = r && "isReactWarning" in r && r.isReactWarning;
  return l
    ? t.ref
    : ((r = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (l = r && "isReactWarning" in r && r.isReactWarning),
      l ? t.props.ref : t.props.ref || t.ref);
}
var hd = 0;
function Qv() {
  b.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", t[0] ?? cg()),
      document.body.insertAdjacentElement("beforeend", t[1] ?? cg()),
      hd++,
      () => {
        (hd === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          hd--);
      }
    );
  }, []);
}
function cg() {
  const t = document.createElement("span");
  return (
    t.setAttribute("data-radix-focus-guard", ""),
    (t.tabIndex = 0),
    (t.style.outline = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.pointerEvents = "none"),
    t
  );
}
var Yn = function () {
  return (
    (Yn =
      Object.assign ||
      function (r) {
        for (var l, o = 1, s = arguments.length; o < s; o++) {
          l = arguments[o];
          for (var c in l)
            Object.prototype.hasOwnProperty.call(l, c) && (r[c] = l[c]);
        }
        return r;
      }),
    Yn.apply(this, arguments)
  );
};
function Kv(t, r) {
  var l = {};
  for (var o in t)
    Object.prototype.hasOwnProperty.call(t, o) &&
      r.indexOf(o) < 0 &&
      (l[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(t); s < o.length; s++)
      r.indexOf(o[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, o[s]) &&
        (l[o[s]] = t[o[s]]);
  return l;
}
function iC(t, r, l) {
  if (l || arguments.length === 2)
    for (var o = 0, s = r.length, c; o < s; o++)
      (c || !(o in r)) &&
        (c || (c = Array.prototype.slice.call(r, 0, o)), (c[o] = r[o]));
  return t.concat(c || Array.prototype.slice.call(r));
}
var tu = "right-scroll-bar-position",
  nu = "width-before-scroll-bar",
  oC = "with-scroll-bars-hidden",
  sC = "--removed-body-scroll-bar-size";
function md(t, r) {
  return (typeof t == "function" ? t(r) : t && (t.current = r), t);
}
function uC(t, r) {
  var l = b.useState(function () {
    return {
      value: t,
      callback: r,
      facade: {
        get current() {
          return l.value;
        },
        set current(o) {
          var s = l.value;
          s !== o && ((l.value = o), l.callback(o, s));
        },
      },
    };
  })[0];
  return ((l.callback = r), l.facade);
}
var cC = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
  fg = new WeakMap();
function fC(t, r) {
  var l = uC(null, function (o) {
    return t.forEach(function (s) {
      return md(s, o);
    });
  });
  return (
    cC(
      function () {
        var o = fg.get(l);
        if (o) {
          var s = new Set(o),
            c = new Set(t),
            f = l.current;
          (s.forEach(function (h) {
            c.has(h) || md(h, null);
          }),
            c.forEach(function (h) {
              s.has(h) || md(h, f);
            }));
        }
        fg.set(l, t);
      },
      [t],
    ),
    l
  );
}
function dC(t) {
  return t;
}
function hC(t, r) {
  r === void 0 && (r = dC);
  var l = [],
    o = !1,
    s = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return l.length ? l[l.length - 1] : t;
      },
      useMedium: function (c) {
        var f = r(c, o);
        return (
          l.push(f),
          function () {
            l = l.filter(function (h) {
              return h !== f;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (o = !0; l.length; ) {
          var f = l;
          ((l = []), f.forEach(c));
        }
        l = {
          push: function (h) {
            return c(h);
          },
          filter: function () {
            return l;
          },
        };
      },
      assignMedium: function (c) {
        o = !0;
        var f = [];
        if (l.length) {
          var h = l;
          ((l = []), h.forEach(c), (f = l));
        }
        var p = function () {
            var y = f;
            ((f = []), y.forEach(c));
          },
          m = function () {
            return Promise.resolve().then(p);
          };
        (m(),
          (l = {
            push: function (y) {
              (f.push(y), m());
            },
            filter: function (y) {
              return ((f = f.filter(y)), l);
            },
          }));
      },
    };
  return s;
}
function mC(t) {
  t === void 0 && (t = {});
  var r = hC(null);
  return ((r.options = Yn({ async: !0, ssr: !1 }, t)), r);
}
var Xv = function (t) {
  var r = t.sideCar,
    l = Kv(t, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = r.read();
  if (!o) throw new Error("Sidecar medium not found");
  return b.createElement(o, Yn({}, l));
};
Xv.isSideCarExport = !0;
function pC(t, r) {
  return (t.useMedium(r), Xv);
}
var Zv = mC(),
  pd = function () {},
  Cu = b.forwardRef(function (t, r) {
    var l = b.useRef(null),
      o = b.useState({
        onScrollCapture: pd,
        onWheelCapture: pd,
        onTouchMoveCapture: pd,
      }),
      s = o[0],
      c = o[1],
      f = t.forwardProps,
      h = t.children,
      p = t.className,
      m = t.removeScrollBar,
      y = t.enabled,
      v = t.shards,
      w = t.sideCar,
      x = t.noRelative,
      E = t.noIsolation,
      R = t.inert,
      C = t.allowPinchZoom,
      M = t.as,
      j = M === void 0 ? "div" : M,
      U = t.gapMode,
      G = Kv(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      P = w,
      _ = fC([l, r]),
      K = Yn(Yn({}, G), s);
    return b.createElement(
      b.Fragment,
      null,
      y &&
        b.createElement(P, {
          sideCar: Zv,
          removeScrollBar: m,
          shards: v,
          noRelative: x,
          noIsolation: E,
          inert: R,
          setCallbacks: c,
          allowPinchZoom: !!C,
          lockRef: l,
          gapMode: U,
        }),
      f
        ? b.cloneElement(b.Children.only(h), Yn(Yn({}, K), { ref: _ }))
        : b.createElement(j, Yn({}, K, { className: p, ref: _ }), h),
    );
  });
Cu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Cu.classNames = { fullWidth: nu, zeroRight: tu };
var yC = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function gC() {
  if (!document) return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var r = yC();
  return (r && t.setAttribute("nonce", r), t);
}
function vC(t, r) {
  t.styleSheet
    ? (t.styleSheet.cssText = r)
    : t.appendChild(document.createTextNode(r));
}
function bC(t) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(t);
}
var SC = function () {
    var t = 0,
      r = null;
    return {
      add: function (l) {
        (t == 0 && (r = gC()) && (vC(r, l), bC(r)), t++);
      },
      remove: function () {
        (t--,
          !t && r && (r.parentNode && r.parentNode.removeChild(r), (r = null)));
      },
    };
  },
  wC = function () {
    var t = SC();
    return function (r, l) {
      b.useEffect(
        function () {
          return (
            t.add(r),
            function () {
              t.remove();
            }
          );
        },
        [r && l],
      );
    };
  },
  Iv = function () {
    var t = wC(),
      r = function (l) {
        var o = l.styles,
          s = l.dynamic;
        return (t(o, s), null);
      };
    return r;
  },
  EC = { left: 0, top: 0, right: 0, gap: 0 },
  yd = function (t) {
    return parseInt(t || "", 10) || 0;
  },
  xC = function (t) {
    var r = window.getComputedStyle(document.body),
      l = r[t === "padding" ? "paddingLeft" : "marginLeft"],
      o = r[t === "padding" ? "paddingTop" : "marginTop"],
      s = r[t === "padding" ? "paddingRight" : "marginRight"];
    return [yd(l), yd(o), yd(s)];
  },
  RC = function (t) {
    if ((t === void 0 && (t = "margin"), typeof window > "u")) return EC;
    var r = xC(t),
      l = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, o - l + r[2] - r[0]),
    };
  },
  CC = Iv(),
  Ul = "data-scroll-locked",
  AC = function (t, r, l, o) {
    var s = t.left,
      c = t.top,
      f = t.right,
      h = t.gap;
    return (
      l === void 0 && (l = "margin"),
      `
  .`
        .concat(
          oC,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Ul,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(o, ";"),
            l === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            l === "padding" &&
              "padding-right: ".concat(h, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          tu,
          ` {
    right: `,
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          nu,
          ` {
    margin-right: `,
        )
        .concat(h, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(tu, " .")
        .concat(
          tu,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(nu, " .")
        .concat(
          nu,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Ul,
          `] {
    `,
        )
        .concat(sC, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  dg = function () {
    var t = parseInt(document.body.getAttribute(Ul) || "0", 10);
    return isFinite(t) ? t : 0;
  },
  OC = function () {
    b.useEffect(function () {
      return (
        document.body.setAttribute(Ul, (dg() + 1).toString()),
        function () {
          var t = dg() - 1;
          t <= 0
            ? document.body.removeAttribute(Ul)
            : document.body.setAttribute(Ul, t.toString());
        }
      );
    }, []);
  },
  TC = function (t) {
    var r = t.noRelative,
      l = t.noImportant,
      o = t.gapMode,
      s = o === void 0 ? "margin" : o;
    OC();
    var c = b.useMemo(
      function () {
        return RC(s);
      },
      [s],
    );
    return b.createElement(CC, { styles: AC(c, !r, s, l ? "" : "!important") });
  },
  Ud = !1;
if (typeof window < "u")
  try {
    var Gs = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Ud = !0), !0);
      },
    });
    (window.addEventListener("test", Gs, Gs),
      window.removeEventListener("test", Gs, Gs));
  } catch {
    Ud = !1;
  }
var Tl = Ud ? { passive: !1 } : !1,
  MC = function (t) {
    return t.tagName === "TEXTAREA";
  },
  $v = function (t, r) {
    if (!(t instanceof Element)) return !1;
    var l = window.getComputedStyle(t);
    return (
      l[r] !== "hidden" &&
      !(l.overflowY === l.overflowX && !MC(t) && l[r] === "visible")
    );
  },
  DC = function (t) {
    return $v(t, "overflowY");
  },
  _C = function (t) {
    return $v(t, "overflowX");
  },
  hg = function (t, r) {
    var l = r.ownerDocument,
      o = r;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var s = Jv(t, o);
      if (s) {
        var c = Wv(t, o),
          f = c[1],
          h = c[2];
        if (f > h) return !0;
      }
      o = o.parentNode;
    } while (o && o !== l.body);
    return !1;
  },
  NC = function (t) {
    var r = t.scrollTop,
      l = t.scrollHeight,
      o = t.clientHeight;
    return [r, l, o];
  },
  LC = function (t) {
    var r = t.scrollLeft,
      l = t.scrollWidth,
      o = t.clientWidth;
    return [r, l, o];
  },
  Jv = function (t, r) {
    return t === "v" ? DC(r) : _C(r);
  },
  Wv = function (t, r) {
    return t === "v" ? NC(r) : LC(r);
  },
  UC = function (t, r) {
    return t === "h" && r === "rtl" ? -1 : 1;
  },
  zC = function (t, r, l, o, s) {
    var c = UC(t, window.getComputedStyle(r).direction),
      f = c * o,
      h = l.target,
      p = r.contains(h),
      m = !1,
      y = f > 0,
      v = 0,
      w = 0;
    do {
      if (!h) break;
      var x = Wv(t, h),
        E = x[0],
        R = x[1],
        C = x[2],
        M = R - C - c * E;
      (E || M) && Jv(t, h) && ((v += M), (w += E));
      var j = h.parentNode;
      h = j && j.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? j.host : j;
    } while ((!p && h !== document.body) || (p && (r.contains(h) || r === h)));
    return (((y && Math.abs(v) < 1) || (!y && Math.abs(w) < 1)) && (m = !0), m);
  },
  Ys = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  mg = function (t) {
    return [t.deltaX, t.deltaY];
  },
  pg = function (t) {
    return t && "current" in t ? t.current : t;
  },
  jC = function (t, r) {
    return t[0] === r[0] && t[1] === r[1];
  },
  PC = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        t,
        ` {pointer-events: all;}
`,
      );
  },
  HC = 0,
  Ml = [];
function BC(t) {
  var r = b.useRef([]),
    l = b.useRef([0, 0]),
    o = b.useRef(),
    s = b.useState(HC++)[0],
    c = b.useState(Iv)[0],
    f = b.useRef(t);
  (b.useEffect(
    function () {
      f.current = t;
    },
    [t],
  ),
    b.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var R = iC([t.lockRef.current], (t.shards || []).map(pg), !0).filter(
            Boolean,
          );
          return (
            R.forEach(function (C) {
              return C.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(s)),
                R.forEach(function (C) {
                  return C.classList.remove("allow-interactivity-".concat(s));
                }));
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards],
    ));
  var h = b.useCallback(function (R, C) {
      if (
        ("touches" in R && R.touches.length === 2) ||
        (R.type === "wheel" && R.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var M = Ys(R),
        j = l.current,
        U = "deltaX" in R ? R.deltaX : j[0] - M[0],
        G = "deltaY" in R ? R.deltaY : j[1] - M[1],
        P,
        _ = R.target,
        K = Math.abs(U) > Math.abs(G) ? "h" : "v";
      if ("touches" in R && K === "h" && _.type === "range") return !1;
      var V = hg(K, _);
      if (!V) return !0;
      if ((V ? (P = K) : ((P = K === "v" ? "h" : "v"), (V = hg(K, _))), !V))
        return !1;
      if (
        (!o.current && "changedTouches" in R && (U || G) && (o.current = P), !P)
      )
        return !0;
      var ae = o.current || P;
      return zC(ae, C, R, ae === "h" ? U : G);
    }, []),
    p = b.useCallback(function (R) {
      var C = R;
      if (!(!Ml.length || Ml[Ml.length - 1] !== c)) {
        var M = "deltaY" in C ? mg(C) : Ys(C),
          j = r.current.filter(function (P) {
            return (
              P.name === C.type &&
              (P.target === C.target || C.target === P.shadowParent) &&
              jC(P.delta, M)
            );
          })[0];
        if (j && j.should) {
          C.cancelable && C.preventDefault();
          return;
        }
        if (!j) {
          var U = (f.current.shards || [])
              .map(pg)
              .filter(Boolean)
              .filter(function (P) {
                return P.contains(C.target);
              }),
            G = U.length > 0 ? h(C, U[0]) : !f.current.noIsolation;
          G && C.cancelable && C.preventDefault();
        }
      }
    }, []),
    m = b.useCallback(function (R, C, M, j) {
      var U = { name: R, delta: C, target: M, should: j, shadowParent: kC(M) };
      (r.current.push(U),
        setTimeout(function () {
          r.current = r.current.filter(function (G) {
            return G !== U;
          });
        }, 1));
    }, []),
    y = b.useCallback(function (R) {
      ((l.current = Ys(R)), (o.current = void 0));
    }, []),
    v = b.useCallback(function (R) {
      m(R.type, mg(R), R.target, h(R, t.lockRef.current));
    }, []),
    w = b.useCallback(function (R) {
      m(R.type, Ys(R), R.target, h(R, t.lockRef.current));
    }, []);
  b.useEffect(function () {
    return (
      Ml.push(c),
      t.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: w,
      }),
      document.addEventListener("wheel", p, Tl),
      document.addEventListener("touchmove", p, Tl),
      document.addEventListener("touchstart", y, Tl),
      function () {
        ((Ml = Ml.filter(function (R) {
          return R !== c;
        })),
          document.removeEventListener("wheel", p, Tl),
          document.removeEventListener("touchmove", p, Tl),
          document.removeEventListener("touchstart", y, Tl));
      }
    );
  }, []);
  var x = t.removeScrollBar,
    E = t.inert;
  return b.createElement(
    b.Fragment,
    null,
    E ? b.createElement(c, { styles: PC(s) }) : null,
    x
      ? b.createElement(TC, { noRelative: t.noRelative, gapMode: t.gapMode })
      : null,
  );
}
function kC(t) {
  for (var r = null; t !== null; )
    (t instanceof ShadowRoot && ((r = t.host), (t = t.host)),
      (t = t.parentNode));
  return r;
}
const qC = pC(Zv, BC);
var mh = b.forwardRef(function (t, r) {
  return b.createElement(Cu, Yn({}, t, { ref: r, sideCar: qC }));
});
mh.classNames = Cu.classNames;
var FC = function (t) {
    if (typeof document > "u") return null;
    var r = Array.isArray(t) ? t[0] : t;
    return r.ownerDocument.body;
  },
  Dl = new WeakMap(),
  Vs = new WeakMap(),
  Qs = {},
  gd = 0,
  eb = function (t) {
    return t && (t.host || eb(t.parentNode));
  },
  GC = function (t, r) {
    return r
      .map(function (l) {
        if (t.contains(l)) return l;
        var o = eb(l);
        return o && t.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              l,
              "in not contained inside",
              t,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (l) {
        return !!l;
      });
  },
  YC = function (t, r, l, o) {
    var s = GC(r, Array.isArray(t) ? t : [t]);
    Qs[l] || (Qs[l] = new WeakMap());
    var c = Qs[l],
      f = [],
      h = new Set(),
      p = new Set(s),
      m = function (v) {
        !v || h.has(v) || (h.add(v), m(v.parentNode));
      };
    s.forEach(m);
    var y = function (v) {
      !v ||
        p.has(v) ||
        Array.prototype.forEach.call(v.children, function (w) {
          if (h.has(w)) y(w);
          else
            try {
              var x = w.getAttribute(o),
                E = x !== null && x !== "false",
                R = (Dl.get(w) || 0) + 1,
                C = (c.get(w) || 0) + 1;
              (Dl.set(w, R),
                c.set(w, C),
                f.push(w),
                R === 1 && E && Vs.set(w, !0),
                C === 1 && w.setAttribute(l, "true"),
                E || w.setAttribute(o, "true"));
            } catch (M) {
              console.error("aria-hidden: cannot operate on ", w, M);
            }
        });
    };
    return (
      y(r),
      h.clear(),
      gd++,
      function () {
        (f.forEach(function (v) {
          var w = Dl.get(v) - 1,
            x = c.get(v) - 1;
          (Dl.set(v, w),
            c.set(v, x),
            w || (Vs.has(v) || v.removeAttribute(o), Vs.delete(v)),
            x || v.removeAttribute(l));
        }),
          gd--,
          gd ||
            ((Dl = new WeakMap()),
            (Dl = new WeakMap()),
            (Vs = new WeakMap()),
            (Qs = {})));
      }
    );
  },
  tb = function (t, r, l) {
    l === void 0 && (l = "data-aria-hidden");
    var o = Array.from(Array.isArray(t) ? t : [t]),
      s = FC(t);
    return s
      ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))),
        YC(o, s, l, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Au = "Dialog",
  [nb, hD] = Fl(Au),
  [VC, Nn] = nb(Au),
  rb = (t) => {
    const {
        __scopeDialog: r,
        children: l,
        open: o,
        defaultOpen: s,
        onOpenChange: c,
        modal: f = !0,
      } = t,
      h = b.useRef(null),
      p = b.useRef(null),
      [m, y] = ch({ prop: o, defaultProp: s ?? !1, onChange: c, caller: Au });
    return O.jsx(VC, {
      scope: r,
      triggerRef: h,
      contentRef: p,
      contentId: Ll(),
      titleId: Ll(),
      descriptionId: Ll(),
      open: m,
      onOpenChange: y,
      onOpenToggle: b.useCallback(() => y((v) => !v), [y]),
      modal: f,
      children: l,
    });
  };
rb.displayName = Au;
var ab = "DialogTrigger",
  lb = b.forwardRef((t, r) => {
    const { __scopeDialog: l, ...o } = t,
      s = Nn(ab, l),
      c = Nt(r, s.triggerRef);
    return O.jsx(gt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": vh(s.open),
      ...o,
      ref: c,
      onClick: Pe(t.onClick, s.onOpenToggle),
    });
  });
lb.displayName = ab;
var ph = "DialogPortal",
  [QC, ib] = nb(ph, { forceMount: void 0 }),
  yh = (t) => {
    const { __scopeDialog: r, forceMount: l, children: o, container: s } = t,
      c = Nn(ph, r);
    return O.jsx(QC, {
      scope: r,
      forceMount: l,
      children: b.Children.map(o, (f) =>
        O.jsx(oa, {
          present: l || c.open,
          children: O.jsx(hh, { asChild: !0, container: s, children: f }),
        }),
      ),
    });
  };
yh.displayName = ph;
var cu = "DialogOverlay",
  ob = b.forwardRef((t, r) => {
    const l = ib(cu, t.__scopeDialog),
      { forceMount: o = l.forceMount, ...s } = t,
      c = Nn(cu, t.__scopeDialog);
    return c.modal
      ? O.jsx(oa, {
          present: o || c.open,
          children: O.jsx(XC, { ...s, ref: r }),
        })
      : null;
  });
ob.displayName = cu;
var KC = no("DialogOverlay.RemoveScroll"),
  XC = b.forwardRef((t, r) => {
    const { __scopeDialog: l, ...o } = t,
      s = Nn(cu, l);
    return O.jsx(mh, {
      as: KC,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: O.jsx(gt.div, {
        "data-state": vh(s.open),
        ...o,
        ref: r,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  ja = "DialogContent",
  sb = b.forwardRef((t, r) => {
    const l = ib(ja, t.__scopeDialog),
      { forceMount: o = l.forceMount, ...s } = t,
      c = Nn(ja, t.__scopeDialog);
    return O.jsx(oa, {
      present: o || c.open,
      children: c.modal
        ? O.jsx(ZC, { ...s, ref: r })
        : O.jsx(IC, { ...s, ref: r }),
    });
  });
sb.displayName = ja;
var ZC = b.forwardRef((t, r) => {
    const l = Nn(ja, t.__scopeDialog),
      o = b.useRef(null),
      s = Nt(r, l.contentRef, o);
    return (
      b.useEffect(() => {
        const c = o.current;
        if (c) return tb(c);
      }, []),
      O.jsx(ub, {
        ...t,
        ref: s,
        trapFocus: l.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Pe(t.onCloseAutoFocus, (c) => {
          (c.preventDefault(), l.triggerRef.current?.focus());
        }),
        onPointerDownOutside: Pe(t.onPointerDownOutside, (c) => {
          const f = c.detail.originalEvent,
            h = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || h) && c.preventDefault();
        }),
        onFocusOutside: Pe(t.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  IC = b.forwardRef((t, r) => {
    const l = Nn(ja, t.__scopeDialog),
      o = b.useRef(!1),
      s = b.useRef(!1);
    return O.jsx(ub, {
      ...t,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        (t.onCloseAutoFocus?.(c),
          c.defaultPrevented ||
            (o.current || l.triggerRef.current?.focus(), c.preventDefault()),
          (o.current = !1),
          (s.current = !1));
      },
      onInteractOutside: (c) => {
        (t.onInteractOutside?.(c),
          c.defaultPrevented ||
            ((o.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (s.current = !0)));
        const f = c.target;
        (l.triggerRef.current?.contains(f) && c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            s.current &&
            c.preventDefault());
      },
    });
  }),
  ub = b.forwardRef((t, r) => {
    const {
        __scopeDialog: l,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: c,
        ...f
      } = t,
      h = Nn(ja, l),
      p = b.useRef(null),
      m = Nt(r, p);
    return (
      Qv(),
      O.jsxs(O.Fragment, {
        children: [
          O.jsx(dh, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: s,
            onUnmountAutoFocus: c,
            children: O.jsx(fh, {
              role: "dialog",
              id: h.contentId,
              "aria-describedby": h.descriptionId,
              "aria-labelledby": h.titleId,
              "data-state": vh(h.open),
              ...f,
              ref: m,
              onDismiss: () => h.onOpenChange(!1),
            }),
          }),
          O.jsxs(O.Fragment, {
            children: [
              O.jsx(WC, { titleId: h.titleId }),
              O.jsx(tA, { contentRef: p, descriptionId: h.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  gh = "DialogTitle",
  $C = b.forwardRef((t, r) => {
    const { __scopeDialog: l, ...o } = t,
      s = Nn(gh, l);
    return O.jsx(gt.h2, { id: s.titleId, ...o, ref: r });
  });
$C.displayName = gh;
var cb = "DialogDescription",
  JC = b.forwardRef((t, r) => {
    const { __scopeDialog: l, ...o } = t,
      s = Nn(cb, l);
    return O.jsx(gt.p, { id: s.descriptionId, ...o, ref: r });
  });
JC.displayName = cb;
var fb = "DialogClose",
  db = b.forwardRef((t, r) => {
    const { __scopeDialog: l, ...o } = t,
      s = Nn(fb, l);
    return O.jsx(gt.button, {
      type: "button",
      ...o,
      ref: r,
      onClick: Pe(t.onClick, () => s.onOpenChange(!1)),
    });
  });
db.displayName = fb;
function vh(t) {
  return t ? "open" : "closed";
}
var hb = "DialogTitleWarning",
  [mD, mb] = TR(hb, { contentName: ja, titleName: gh, docsSlug: "dialog" }),
  WC = ({ titleId: t }) => {
    const r = mb(hb),
      l = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
    return (
      b.useEffect(() => {
        t && (document.getElementById(t) || console.error(l));
      }, [l, t]),
      null
    );
  },
  eA = "DialogDescriptionWarning",
  tA = ({ contentRef: t, descriptionId: r }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${mb(eA).contentName}}.`;
    return (
      b.useEffect(() => {
        const s = t.current?.getAttribute("aria-describedby");
        r && s && (document.getElementById(r) || console.warn(o));
      }, [o, t, r]),
      null
    );
  },
  nA = rb,
  rA = lb,
  aA = yh,
  lA = ob,
  iA = sb,
  pb = db;
function bh(...t) {
  return qv(Dv(t));
}
function Ou({ ...t }) {
  return O.jsx(nA, { "data-slot": "dialog", ...t });
}
function Sh({ ...t }) {
  return O.jsx(aA, { "data-slot": "dialog-portal", ...t });
}
function oA({ className: t, ...r }) {
  return O.jsx(lA, {
    "data-slot": "dialog-overlay",
    className: bh(
      "fixed inset-0 z-[999] bg-black/60",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t,
    ),
    ...r,
  });
}
function Tu({ className: t, children: r, showCloseButton: l = !0, ...o }) {
  return O.jsxs(Sh, {
    children: [
      O.jsx(oA, {}),
      O.jsxs(iA, {
        "data-slot": "dialog-content",
        className: bh(
          "fixed left-1/2 top-1/2 z-[999] -translate-x-1/2 -translate-y-1/2",
          "bg-bg-white rounded-xl shadow-2xl",
          "w-full max-w-lg max-h-[85vh] overflow-y-auto",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "focus:outline-none",
          t,
        ),
        ...o,
        children: [
          r,
          l &&
            O.jsx(pb, {
              "aria-label": "close",
              className:
                "absolute right-7 top-7 p-2 cursor-pointer hover:opacity-70 transition-opacity",
              children: O.jsx("img", { src: Gx, alt: "close" }),
            }),
        ],
      }),
    ],
  });
}
function Mu({ ...t }) {
  return O.jsx(rA, { "data-slot": "dialog-trigger", ...t });
}
const yb = pb;
function sA() {
  const t = () => {
    try {
      const o =
        "https://kauth.kakao.com/oauth/authorize?client_id=ffa2c2e8fd879bd30c65582b5b1506e8&redirect_uri=http://localhost:5173/auth&response_type=code";
      window.location.href = o;
    } catch (r) {
      console.error("카카오 로그인 오류:", r);
    }
  };
  return O.jsxs(Ou, {
    children: [
      O.jsx(yh, {}),
      O.jsx(Mu, {
        asChild: !0,
        children: O.jsx(jl, { variant: "gray", children: "로그인" }),
      }),
      O.jsx(Tu, {
        className: "w-150",
        children: O.jsxs("div", {
          className: "px-20 py-22.5 flex flex-col gap-10",
          children: [
            O.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                O.jsx("div", {
                  className: "text-4xl font-bold text-scale-600",
                  children: "로그인",
                }),
                O.jsx("div", {
                  className: "text-lg text-scale-400",
                  children: "처음이면 자동 회원가입 후 이용할 수 있어요.",
                }),
              ],
            }),
            O.jsxs(jl, {
              variant: "kakao",
              onClick: t,
              className: "flex items-center justify-center gap-2",
              children: [
                O.jsx("img", { src: Yx, className: "w-8 h-8" }),
                "카카오로 시작하기",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var Gl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(t), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  uA = {
    setTimeout: (t, r) => setTimeout(t, r),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, r) => setInterval(t, r),
    clearInterval: (t) => clearInterval(t),
  },
  cA = class {
    #e = uA;
    #t = !1;
    setTimeoutProvider(t) {
      this.#e = t;
    }
    setTimeout(t, r) {
      return this.#e.setTimeout(t, r);
    }
    clearTimeout(t) {
      this.#e.clearTimeout(t);
    }
    setInterval(t, r) {
      return this.#e.setInterval(t, r);
    }
    clearInterval(t) {
      this.#e.clearInterval(t);
    }
  },
  La = new cA();
function fA(t) {
  setTimeout(t, 0);
}
var Pa = typeof window > "u" || "Deno" in globalThis;
function Ht() {}
function dA(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function zd(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function gb(t, r) {
  return Math.max(t + (r || 0) - Date.now(), 0);
}
function ta(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function Sn(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function yg(t, r) {
  const {
    type: l = "all",
    exact: o,
    fetchStatus: s,
    predicate: c,
    queryKey: f,
    stale: h,
  } = t;
  if (f) {
    if (o) {
      if (r.queryHash !== wh(f, r.options)) return !1;
    } else if (!ro(r.queryKey, f)) return !1;
  }
  if (l !== "all") {
    const p = r.isActive();
    if ((l === "active" && !p) || (l === "inactive" && p)) return !1;
  }
  return !(
    (typeof h == "boolean" && r.isStale() !== h) ||
    (s && s !== r.state.fetchStatus) ||
    (c && !c(r))
  );
}
function gg(t, r) {
  const { exact: l, status: o, predicate: s, mutationKey: c } = t;
  if (c) {
    if (!r.options.mutationKey) return !1;
    if (l) {
      if (Ha(r.options.mutationKey) !== Ha(c)) return !1;
    } else if (!ro(r.options.mutationKey, c)) return !1;
  }
  return !((o && r.state.status !== o) || (s && !s(r)));
}
function wh(t, r) {
  return (r?.queryKeyHashFn || Ha)(t);
}
function Ha(t) {
  return JSON.stringify(t, (r, l) =>
    jd(l)
      ? Object.keys(l)
          .sort()
          .reduce((o, s) => ((o[s] = l[s]), o), {})
      : l,
  );
}
function ro(t, r) {
  return t === r
    ? !0
    : typeof t != typeof r
      ? !1
      : t && r && typeof t == "object" && typeof r == "object"
        ? Object.keys(r).every((l) => ro(t[l], r[l]))
        : !1;
}
var hA = Object.prototype.hasOwnProperty;
function vb(t, r) {
  if (t === r) return t;
  const l = vg(t) && vg(r);
  if (!l && !(jd(t) && jd(r))) return r;
  const s = (l ? t : Object.keys(t)).length,
    c = l ? r : Object.keys(r),
    f = c.length,
    h = l ? new Array(f) : {};
  let p = 0;
  for (let m = 0; m < f; m++) {
    const y = l ? m : c[m],
      v = t[y],
      w = r[y];
    if (v === w) {
      ((h[y] = v), (l ? m < s : hA.call(t, y)) && p++);
      continue;
    }
    if (
      v === null ||
      w === null ||
      typeof v != "object" ||
      typeof w != "object"
    ) {
      h[y] = w;
      continue;
    }
    const x = vb(v, w);
    ((h[y] = x), x === v && p++);
  }
  return s === f && p === s ? t : h;
}
function fu(t, r) {
  if (!r || Object.keys(t).length !== Object.keys(r).length) return !1;
  for (const l in t) if (t[l] !== r[l]) return !1;
  return !0;
}
function vg(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function jd(t) {
  if (!bg(t)) return !1;
  const r = t.constructor;
  if (r === void 0) return !0;
  const l = r.prototype;
  return !(
    !bg(l) ||
    !l.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function bg(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function mA(t) {
  return new Promise((r) => {
    La.setTimeout(r, t);
  });
}
function Pd(t, r, l) {
  return typeof l.structuralSharing == "function"
    ? l.structuralSharing(t, r)
    : l.structuralSharing !== !1
      ? vb(t, r)
      : r;
}
function pA(t, r, l = 0) {
  const o = [...t, r];
  return l && o.length > l ? o.slice(1) : o;
}
function yA(t, r, l = 0) {
  const o = [r, ...t];
  return l && o.length > l ? o.slice(0, -1) : o;
}
var Eh = Symbol();
function bb(t, r) {
  return !t.queryFn && r?.initialPromise
    ? () => r.initialPromise
    : !t.queryFn || t.queryFn === Eh
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
function Sb(t, r) {
  return typeof t == "function" ? t(...r) : !!t;
}
var gA = class extends Gl {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (t) => {
          if (!Pa && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      ((this.#n = t),
        this.#t?.(),
        (this.#t = t((r) => {
          typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
        })));
    }
    setFocused(t) {
      this.#e !== t && ((this.#e = t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((r) => {
        r(t);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  xh = new gA();
function Hd() {
  let t, r;
  const l = new Promise((s, c) => {
    ((t = s), (r = c));
  });
  ((l.status = "pending"), l.catch(() => {}));
  function o(s) {
    (Object.assign(l, s), delete l.resolve, delete l.reject);
  }
  return (
    (l.resolve = (s) => {
      (o({ status: "fulfilled", value: s }), t(s));
    }),
    (l.reject = (s) => {
      (o({ status: "rejected", reason: s }), r(s));
    }),
    l
  );
}
var vA = fA;
function bA() {
  let t = [],
    r = 0,
    l = (h) => {
      h();
    },
    o = (h) => {
      h();
    },
    s = vA;
  const c = (h) => {
      r
        ? t.push(h)
        : s(() => {
            l(h);
          });
    },
    f = () => {
      const h = t;
      ((t = []),
        h.length &&
          s(() => {
            o(() => {
              h.forEach((p) => {
                l(p);
              });
            });
          }));
    };
  return {
    batch: (h) => {
      let p;
      r++;
      try {
        p = h();
      } finally {
        (r--, r || f());
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        c(() => {
          h(...p);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      l = h;
    },
    setBatchNotifyFunction: (h) => {
      o = h;
    },
    setScheduler: (h) => {
      s = h;
    },
  };
}
var wt = bA(),
  SA = class extends Gl {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (t) => {
          if (!Pa && window.addEventListener) {
            const r = () => t(!0),
              l = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", l, !1),
              () => {
                (window.removeEventListener("online", r),
                  window.removeEventListener("offline", l));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      ((this.#n = t), this.#t?.(), (this.#t = t(this.setOnline.bind(this))));
    }
    setOnline(t) {
      this.#e !== t &&
        ((this.#e = t),
        this.listeners.forEach((l) => {
          l(t);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  du = new SA();
function wA(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function wb(t) {
  return (t ?? "online") === "online" ? du.isOnline() : !0;
}
var Bd = class extends Error {
  constructor(t) {
    (super("CancelledError"),
      (this.revert = t?.revert),
      (this.silent = t?.silent));
  }
};
function Eb(t) {
  let r = !1,
    l = 0,
    o;
  const s = Hd(),
    c = () => s.status !== "pending",
    f = (R) => {
      if (!c()) {
        const C = new Bd(R);
        (w(C), t.onCancel?.(C));
      }
    },
    h = () => {
      r = !0;
    },
    p = () => {
      r = !1;
    },
    m = () =>
      xh.isFocused() &&
      (t.networkMode === "always" || du.isOnline()) &&
      t.canRun(),
    y = () => wb(t.networkMode) && t.canRun(),
    v = (R) => {
      c() || (o?.(), s.resolve(R));
    },
    w = (R) => {
      c() || (o?.(), s.reject(R));
    },
    x = () =>
      new Promise((R) => {
        ((o = (C) => {
          (c() || m()) && R(C);
        }),
          t.onPause?.());
      }).then(() => {
        ((o = void 0), c() || t.onContinue?.());
      }),
    E = () => {
      if (c()) return;
      let R;
      const C = l === 0 ? t.initialPromise : void 0;
      try {
        R = C ?? t.fn();
      } catch (M) {
        R = Promise.reject(M);
      }
      Promise.resolve(R)
        .then(v)
        .catch((M) => {
          if (c()) return;
          const j = t.retry ?? (Pa ? 0 : 3),
            U = t.retryDelay ?? wA,
            G = typeof U == "function" ? U(l, M) : U,
            P =
              j === !0 ||
              (typeof j == "number" && l < j) ||
              (typeof j == "function" && j(l, M));
          if (r || !P) {
            w(M);
            return;
          }
          (l++,
            t.onFail?.(l, M),
            mA(G)
              .then(() => (m() ? void 0 : x()))
              .then(() => {
                r ? w(M) : E();
              }));
        });
    };
  return {
    promise: s,
    status: () => s.status,
    cancel: f,
    continue: () => (o?.(), s),
    cancelRetry: h,
    continueRetry: p,
    canStart: y,
    start: () => (y() ? E() : x().then(E), s),
  };
}
var xb = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        zd(this.gcTime) &&
          (this.#e = La.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (Pa ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (La.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  EA = class extends xb {
    #e;
    #t;
    #n;
    #a;
    #r;
    #i;
    #o;
    constructor(t) {
      (super(),
        (this.#o = !1),
        (this.#i = t.defaultOptions),
        this.setOptions(t.options),
        (this.observers = []),
        (this.#a = t.client),
        (this.#n = this.#a.getQueryCache()),
        (this.queryKey = t.queryKey),
        (this.queryHash = t.queryHash),
        (this.#e = wg(this.options)),
        (this.state = t.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(t) {
      if (
        ((this.options = { ...this.#i, ...t }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const r = wg(this.options);
        r.data !== void 0 &&
          (this.setState(Sg(r.data, r.dataUpdatedAt)), (this.#e = r));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(t, r) {
      const l = Pd(this.state.data, t, this.options);
      return (
        this.#l({
          data: l,
          type: "success",
          dataUpdatedAt: r?.updatedAt,
          manual: r?.manual,
        }),
        l
      );
    }
    setState(t, r) {
      this.#l({ type: "setState", state: t, setStateOptions: r });
    }
    cancel(t) {
      const r = this.#r?.promise;
      return (this.#r?.cancel(t), r ? r.then(Ht).catch(Ht) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((t) => Sn(t.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Eh ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => ta(t.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => t.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0
        ? !0
        : t === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !gb(this.state.dataUpdatedAt, t);
    }
    onFocus() {
      (this.observers
        .find((r) => r.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    onOnline() {
      (this.observers
        .find((r) => r.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    addObserver(t) {
      this.observers.includes(t) ||
        (this.observers.push(t),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: t }));
    }
    removeObserver(t) {
      this.observers.includes(t) &&
        ((this.observers = this.observers.filter((r) => r !== t)),
        this.observers.length ||
          (this.#r &&
            (this.#o ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: t }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#l({ type: "invalidate" });
    }
    async fetch(t, r) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#r?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && r?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return (this.#r.continueRetry(), this.#r.promise);
      }
      if ((t && this.setOptions(t), !this.options.queryFn)) {
        const h = this.observers.find((p) => p.options.queryFn);
        h && this.setOptions(h.options);
      }
      const l = new AbortController(),
        o = (h) => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => ((this.#o = !0), l.signal),
          });
        },
        s = () => {
          const h = bb(this.options, r),
            m = (() => {
              const y = {
                client: this.#a,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (o(y), y);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(h, m, this) : h(m)
          );
        },
        f = (() => {
          const h = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#a,
            state: this.state,
            fetchFn: s,
          };
          return (o(h), h);
        })();
      (this.options.behavior?.onFetch(f, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#l({ type: "fetch", meta: f.fetchOptions?.meta }),
        (this.#r = Eb({
          initialPromise: r?.initialPromise,
          fn: f.fetchFn,
          onCancel: (h) => {
            (h instanceof Bd &&
              h.revert &&
              this.setState({ ...this.#t, fetchStatus: "idle" }),
              l.abort());
          },
          onFail: (h, p) => {
            this.#l({ type: "failed", failureCount: h, error: p });
          },
          onPause: () => {
            this.#l({ type: "pause" });
          },
          onContinue: () => {
            this.#l({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const h = await this.#r.start();
        if (h === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(h),
          this.#n.config.onSuccess?.(h, this),
          this.#n.config.onSettled?.(h, this.state.error, this),
          h
        );
      } catch (h) {
        if (h instanceof Bd) {
          if (h.silent) return this.#r.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data;
          }
        }
        throw (
          this.#l({ type: "error", error: h }),
          this.#n.config.onError?.(h, this),
          this.#n.config.onSettled?.(this.state.data, h, this),
          h
        );
      } finally {
        this.scheduleGc();
      }
    }
    #l(t) {
      const r = (l) => {
        switch (t.type) {
          case "failed":
            return {
              ...l,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...l, fetchStatus: "paused" };
          case "continue":
            return { ...l, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...l,
              ...Rb(l.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const o = {
              ...l,
              ...Sg(t.data, t.dataUpdatedAt),
              dataUpdateCount: l.dataUpdateCount + 1,
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = t.manual ? o : void 0), o);
          case "error":
            const s = t.error;
            return {
              ...l,
              error: s,
              errorUpdateCount: l.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: l.fetchFailureCount + 1,
              fetchFailureReason: s,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...l, isInvalidated: !0 };
          case "setState":
            return { ...l, ...t.state };
        }
      };
      ((this.state = r(this.state)),
        wt.batch(() => {
          (this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: t }));
        }));
    }
  };
function Rb(t, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: wb(r.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function Sg(t, r) {
  return {
    data: t,
    dataUpdatedAt: r ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function wg(t) {
  const r =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    l = r !== void 0,
    o = l
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: r,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? (o ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var xA = class extends Gl {
  constructor(t, r) {
    (super(),
      (this.options = r),
      (this.#e = t),
      (this.#l = null),
      (this.#o = Hd()),
      this.bindMethods(),
      this.setOptions(r));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #a = void 0;
  #r;
  #i;
  #o;
  #l;
  #p;
  #d;
  #h;
  #u;
  #c;
  #s;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Eg(this.#t, this.options) ? this.#f() : this.updateResult(),
      this.#b());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return kd(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return kd(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#S(),
      this.#w(),
      this.#t.removeObserver(this));
  }
  setOptions(t) {
    const r = this.options,
      l = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(t)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof Sn(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean",
      );
    (this.#E(),
      this.#t.setOptions(this.options),
      r._defaulted &&
        !fu(this.options, r) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          }));
    const o = this.hasListeners();
    (o && xg(this.#t, l, this.options, r) && this.#f(),
      this.updateResult(),
      o &&
        (this.#t !== l ||
          Sn(this.options.enabled, this.#t) !== Sn(r.enabled, this.#t) ||
          ta(this.options.staleTime, this.#t) !== ta(r.staleTime, this.#t)) &&
        this.#y());
    const s = this.#g();
    o &&
      (this.#t !== l ||
        Sn(this.options.enabled, this.#t) !== Sn(r.enabled, this.#t) ||
        s !== this.#s) &&
      this.#v(s);
  }
  getOptimisticResult(t) {
    const r = this.#e.getQueryCache().build(this.#e, t),
      l = this.createResult(r, t);
    return (
      CA(this, l) &&
        ((this.#a = l), (this.#i = this.options), (this.#r = this.#t.state)),
      l
    );
  }
  getCurrentResult() {
    return this.#a;
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (l, o) => (
        this.trackProp(o),
        r?.(o),
        o === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === "pending" &&
            this.#o.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            )),
        Reflect.get(l, o)
      ),
    });
  }
  trackProp(t) {
    this.#m.add(t);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const r = this.#e.defaultQueryOptions(t),
      l = this.#e.getQueryCache().build(this.#e, r);
    return l.fetch().then(() => this.createResult(l, r));
  }
  fetch(t) {
    return this.#f({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#a),
    );
  }
  #f(t) {
    this.#E();
    let r = this.#t.fetch(this.options, t);
    return (t?.throwOnError || (r = r.catch(Ht)), r);
  }
  #y() {
    this.#S();
    const t = ta(this.options.staleTime, this.#t);
    if (Pa || this.#a.isStale || !zd(t)) return;
    const l = gb(this.#a.dataUpdatedAt, t) + 1;
    this.#u = La.setTimeout(() => {
      this.#a.isStale || this.updateResult();
    }, l);
  }
  #g() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(t) {
    (this.#w(),
      (this.#s = t),
      !(
        Pa ||
        Sn(this.options.enabled, this.#t) === !1 ||
        !zd(this.#s) ||
        this.#s === 0
      ) &&
        (this.#c = La.setInterval(() => {
          (this.options.refetchIntervalInBackground || xh.isFocused()) &&
            this.#f();
        }, this.#s)));
  }
  #b() {
    (this.#y(), this.#v(this.#g()));
  }
  #S() {
    this.#u && (La.clearTimeout(this.#u), (this.#u = void 0));
  }
  #w() {
    this.#c && (La.clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(t, r) {
    const l = this.#t,
      o = this.options,
      s = this.#a,
      c = this.#r,
      f = this.#i,
      p = t !== l ? t.state : this.#n,
      { state: m } = t;
    let y = { ...m },
      v = !1,
      w;
    if (r._optimisticResults) {
      const V = this.hasListeners(),
        ae = !V && Eg(t, r),
        oe = V && xg(t, l, r, o);
      ((ae || oe) && (y = { ...y, ...Rb(m.data, t.options) }),
        r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle"));
    }
    let { error: x, errorUpdatedAt: E, status: R } = y;
    w = y.data;
    let C = !1;
    if (r.placeholderData !== void 0 && w === void 0 && R === "pending") {
      let V;
      (s?.isPlaceholderData && r.placeholderData === f?.placeholderData
        ? ((V = s.data), (C = !0))
        : (V =
            typeof r.placeholderData == "function"
              ? r.placeholderData(this.#h?.state.data, this.#h)
              : r.placeholderData),
        V !== void 0 && ((R = "success"), (w = Pd(s?.data, V, r)), (v = !0)));
    }
    if (r.select && w !== void 0 && !C)
      if (s && w === c?.data && r.select === this.#p) w = this.#d;
      else
        try {
          ((this.#p = r.select),
            (w = r.select(w)),
            (w = Pd(s?.data, w, r)),
            (this.#d = w),
            (this.#l = null));
        } catch (V) {
          this.#l = V;
        }
    this.#l && ((x = this.#l), (w = this.#d), (E = Date.now()), (R = "error"));
    const M = y.fetchStatus === "fetching",
      j = R === "pending",
      U = R === "error",
      G = j && M,
      P = w !== void 0,
      K = {
        status: R,
        fetchStatus: y.fetchStatus,
        isPending: j,
        isSuccess: R === "success",
        isError: U,
        isInitialLoading: G,
        isLoading: G,
        data: w,
        dataUpdatedAt: y.dataUpdatedAt,
        error: x,
        errorUpdatedAt: E,
        failureCount: y.fetchFailureCount,
        failureReason: y.fetchFailureReason,
        errorUpdateCount: y.errorUpdateCount,
        isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
        isFetchedAfterMount:
          y.dataUpdateCount > p.dataUpdateCount ||
          y.errorUpdateCount > p.errorUpdateCount,
        isFetching: M,
        isRefetching: M && !j,
        isLoadingError: U && !P,
        isPaused: y.fetchStatus === "paused",
        isPlaceholderData: v,
        isRefetchError: U && P,
        isStale: Rh(t, r),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: Sn(r.enabled, t) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const V = (we) => {
          K.status === "error"
            ? we.reject(K.error)
            : K.data !== void 0 && we.resolve(K.data);
        },
        ae = () => {
          const we = (this.#o = K.promise = Hd());
          V(we);
        },
        oe = this.#o;
      switch (oe.status) {
        case "pending":
          t.queryHash === l.queryHash && V(oe);
          break;
        case "fulfilled":
          (K.status === "error" || K.data !== oe.value) && ae();
          break;
        case "rejected":
          (K.status !== "error" || K.error !== oe.reason) && ae();
          break;
      }
    }
    return K;
  }
  updateResult() {
    const t = this.#a,
      r = this.createResult(this.#t, this.options);
    if (
      ((this.#r = this.#t.state),
      (this.#i = this.options),
      this.#r.data !== void 0 && (this.#h = this.#t),
      fu(r, t))
    )
      return;
    this.#a = r;
    const l = () => {
      if (!t) return !0;
      const { notifyOnChangeProps: o } = this.options,
        s = typeof o == "function" ? o() : o;
      if (s === "all" || (!s && !this.#m.size)) return !0;
      const c = new Set(s ?? this.#m);
      return (
        this.options.throwOnError && c.add("error"),
        Object.keys(this.#a).some((f) => {
          const h = f;
          return this.#a[h] !== t[h] && c.has(h);
        })
      );
    };
    this.#x({ listeners: l() });
  }
  #E() {
    const t = this.#e.getQueryCache().build(this.#e, this.options);
    if (t === this.#t) return;
    const r = this.#t;
    ((this.#t = t),
      (this.#n = t.state),
      this.hasListeners() && (r?.removeObserver(this), t.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#b());
  }
  #x(t) {
    wt.batch(() => {
      (t.listeners &&
        this.listeners.forEach((r) => {
          r(this.#a);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" }));
    });
  }
};
function RA(t, r) {
  return (
    Sn(r.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === "error" && r.retryOnMount === !1)
  );
}
function Eg(t, r) {
  return RA(t, r) || (t.state.data !== void 0 && kd(t, r, r.refetchOnMount));
}
function kd(t, r, l) {
  if (Sn(r.enabled, t) !== !1 && ta(r.staleTime, t) !== "static") {
    const o = typeof l == "function" ? l(t) : l;
    return o === "always" || (o !== !1 && Rh(t, r));
  }
  return !1;
}
function xg(t, r, l, o) {
  return (
    (t !== r || Sn(o.enabled, t) === !1) &&
    (!l.suspense || t.state.status !== "error") &&
    Rh(t, l)
  );
}
function Rh(t, r) {
  return Sn(r.enabled, t) !== !1 && t.isStaleByTime(ta(r.staleTime, t));
}
function CA(t, r) {
  return !fu(t.getCurrentResult(), r);
}
function Rg(t) {
  return {
    onFetch: (r, l) => {
      const o = r.options,
        s = r.fetchOptions?.meta?.fetchMore?.direction,
        c = r.state.data?.pages || [],
        f = r.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let y = !1;
        const v = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: !0,
              get: () => (
                r.signal.aborted
                  ? (y = !0)
                  : r.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                r.signal
              ),
            });
          },
          w = bb(r.options, r.fetchOptions),
          x = async (E, R, C) => {
            if (y) return Promise.reject();
            if (R == null && E.pages.length) return Promise.resolve(E);
            const j = (() => {
                const _ = {
                  client: r.client,
                  queryKey: r.queryKey,
                  pageParam: R,
                  direction: C ? "backward" : "forward",
                  meta: r.options.meta,
                };
                return (v(_), _);
              })(),
              U = await w(j),
              { maxPages: G } = r.options,
              P = C ? yA : pA;
            return {
              pages: P(E.pages, U, G),
              pageParams: P(E.pageParams, R, G),
            };
          };
        if (s && c.length) {
          const E = s === "backward",
            R = E ? AA : Cg,
            C = { pages: c, pageParams: f },
            M = R(o, C);
          h = await x(C, M, E);
        } else {
          const E = t ?? c.length;
          do {
            const R = p === 0 ? (f[0] ?? o.initialPageParam) : Cg(o, h);
            if (p > 0 && R == null) break;
            ((h = await x(h, R)), p++);
          } while (p < E);
        }
        return h;
      };
      r.options.persister
        ? (r.fetchFn = () =>
            r.options.persister?.(
              m,
              {
                client: r.client,
                queryKey: r.queryKey,
                meta: r.options.meta,
                signal: r.signal,
              },
              l,
            ))
        : (r.fetchFn = m);
    },
  };
}
function Cg(t, { pages: r, pageParams: l }) {
  const o = r.length - 1;
  return r.length > 0 ? t.getNextPageParam(r[o], r, l[o], l) : void 0;
}
function AA(t, { pages: r, pageParams: l }) {
  return r.length > 0 ? t.getPreviousPageParam?.(r[0], r, l[0], l) : void 0;
}
var OA = class extends xb {
  #e;
  #t;
  #n;
  #a;
  constructor(t) {
    (super(),
      (this.#e = t.client),
      (this.mutationId = t.mutationId),
      (this.#n = t.mutationCache),
      (this.#t = []),
      (this.state = t.state || Cb()),
      this.setOptions(t.options),
      this.scheduleGc());
  }
  setOptions(t) {
    ((this.options = t), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    this.#t.includes(t) ||
      (this.#t.push(t),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    ((this.#t = this.#t.filter((r) => r !== t)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: t }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#a?.continue() ?? this.execute(this.state.variables);
  }
  async execute(t) {
    const r = () => {
        this.#r({ type: "continue" });
      },
      l = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#a = Eb({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(t, l)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (c, f) => {
        this.#r({ type: "failed", failureCount: c, error: f });
      },
      onPause: () => {
        this.#r({ type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const o = this.state.status === "pending",
      s = !this.#a.canStart();
    try {
      if (o) r();
      else {
        (this.#r({ type: "pending", variables: t, isPaused: s }),
          await this.#n.config.onMutate?.(t, this, l));
        const f = await this.options.onMutate?.(t, l);
        f !== this.state.context &&
          this.#r({ type: "pending", context: f, variables: t, isPaused: s });
      }
      const c = await this.#a.start();
      return (
        await this.#n.config.onSuccess?.(c, t, this.state.context, this, l),
        await this.options.onSuccess?.(c, t, this.state.context, l),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          l,
        ),
        await this.options.onSettled?.(c, null, t, this.state.context, l),
        this.#r({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        throw (
          await this.#n.config.onError?.(c, t, this.state.context, this, l),
          await this.options.onError?.(c, t, this.state.context, l),
          await this.#n.config.onSettled?.(
            void 0,
            c,
            this.state.variables,
            this.state.context,
            this,
            l,
          ),
          await this.options.onSettled?.(void 0, c, t, this.state.context, l),
          c
        );
      } finally {
        this.#r({ type: "error", error: c });
      }
    } finally {
      this.#n.runNext(this);
    }
  }
  #r(t) {
    const r = (l) => {
      switch (t.type) {
        case "failed":
          return { ...l, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...l, isPaused: !0 };
        case "continue":
          return { ...l, isPaused: !1 };
        case "pending":
          return {
            ...l,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...l,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...l,
            data: void 0,
            error: t.error,
            failureCount: l.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = r(this.state)),
      wt.batch(() => {
        (this.#t.forEach((l) => {
          l.onMutationUpdate(t);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: t }));
      }));
  }
};
function Cb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var TA = class extends Gl {
  constructor(t = {}) {
    (super(),
      (this.config = t),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(t, r, l) {
    const o = new OA({
      client: t,
      mutationCache: this,
      mutationId: ++this.#n,
      options: t.defaultMutationOptions(r),
      state: l,
    });
    return (this.add(o), o);
  }
  add(t) {
    this.#e.add(t);
    const r = Ks(t);
    if (typeof r == "string") {
      const l = this.#t.get(r);
      l ? l.push(t) : this.#t.set(r, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (this.#e.delete(t)) {
      const r = Ks(t);
      if (typeof r == "string") {
        const l = this.#t.get(r);
        if (l)
          if (l.length > 1) {
            const o = l.indexOf(t);
            o !== -1 && l.splice(o, 1);
          } else l[0] === t && this.#t.delete(r);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const r = Ks(t);
    if (typeof r == "string") {
      const o = this.#t.get(r)?.find((s) => s.state.status === "pending");
      return !o || o === t;
    } else return !0;
  }
  runNext(t) {
    const r = Ks(t);
    return typeof r == "string"
      ? (this.#t
          .get(r)
          ?.find((o) => o !== t && o.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    wt.batch(() => {
      (this.#e.forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find((l) => gg(r, l));
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => gg(t, r));
  }
  notify(t) {
    wt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return wt.batch(() => Promise.all(t.map((r) => r.continue().catch(Ht))));
  }
};
function Ks(t) {
  return t.options.scope?.id;
}
var MA = class extends Gl {
    #e;
    #t = void 0;
    #n;
    #a;
    constructor(r, l) {
      (super(),
        (this.#e = r),
        this.setOptions(l),
        this.bindMethods(),
        this.#r());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(r) {
      const l = this.options;
      ((this.options = this.#e.defaultMutationOptions(r)),
        fu(this.options, l) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        l?.mutationKey &&
        this.options.mutationKey &&
        Ha(l.mutationKey) !== Ha(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(r) {
      (this.#r(), this.#i(r));
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      (this.#n?.removeObserver(this), (this.#n = void 0), this.#r(), this.#i());
    }
    mutate(r, l) {
      return (
        (this.#a = l),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(r)
      );
    }
    #r() {
      const r = this.#n?.state ?? Cb();
      this.#t = {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #i(r) {
      wt.batch(() => {
        if (this.#a && this.hasListeners()) {
          const l = this.#t.variables,
            o = this.#t.context,
            s = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          r?.type === "success"
            ? (this.#a.onSuccess?.(r.data, l, o, s),
              this.#a.onSettled?.(r.data, null, l, o, s))
            : r?.type === "error" &&
              (this.#a.onError?.(r.error, l, o, s),
              this.#a.onSettled?.(void 0, r.error, l, o, s));
        }
        this.listeners.forEach((l) => {
          l(this.#t);
        });
      });
    }
  },
  DA = class extends Gl {
    constructor(t = {}) {
      (super(), (this.config = t), (this.#e = new Map()));
    }
    #e;
    build(t, r, l) {
      const o = r.queryKey,
        s = r.queryHash ?? wh(o, r);
      let c = this.get(s);
      return (
        c ||
          ((c = new EA({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(r),
            state: l,
            defaultOptions: t.getQueryDefaults(o),
          })),
          this.add(c)),
        c
      );
    }
    add(t) {
      this.#e.has(t.queryHash) ||
        (this.#e.set(t.queryHash, t), this.notify({ type: "added", query: t }));
    }
    remove(t) {
      const r = this.#e.get(t.queryHash);
      r &&
        (t.destroy(),
        r === t && this.#e.delete(t.queryHash),
        this.notify({ type: "removed", query: t }));
    }
    clear() {
      wt.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return this.#e.get(t);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(t) {
      const r = { exact: !0, ...t };
      return this.getAll().find((l) => yg(r, l));
    }
    findAll(t = {}) {
      const r = this.getAll();
      return Object.keys(t).length > 0 ? r.filter((l) => yg(t, l)) : r;
    }
    notify(t) {
      wt.batch(() => {
        this.listeners.forEach((r) => {
          r(t);
        });
      });
    }
    onFocus() {
      wt.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      wt.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  },
  _A = class {
    #e;
    #t;
    #n;
    #a;
    #r;
    #i;
    #o;
    #l;
    constructor(t = {}) {
      ((this.#e = t.queryCache || new DA()),
        (this.#t = t.mutationCache || new TA()),
        (this.#n = t.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#r = new Map()),
        (this.#i = 0));
    }
    mount() {
      (this.#i++,
        this.#i === 1 &&
          ((this.#o = xh.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#l = du.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#i--,
        this.#i === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#l?.(), (this.#l = void 0)));
    }
    isFetching(t) {
      return this.#e.findAll({ ...t, fetchStatus: "fetching" }).length;
    }
    isMutating(t) {
      return this.#t.findAll({ ...t, status: "pending" }).length;
    }
    getQueryData(t) {
      const r = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(r.queryHash)?.state.data;
    }
    ensureQueryData(t) {
      const r = this.defaultQueryOptions(t),
        l = this.#e.build(this, r),
        o = l.state.data;
      return o === void 0
        ? this.fetchQuery(t)
        : (t.revalidateIfStale &&
            l.isStaleByTime(ta(r.staleTime, l)) &&
            this.prefetchQuery(r),
          Promise.resolve(o));
    }
    getQueriesData(t) {
      return this.#e.findAll(t).map(({ queryKey: r, state: l }) => {
        const o = l.data;
        return [r, o];
      });
    }
    setQueryData(t, r, l) {
      const o = this.defaultQueryOptions({ queryKey: t }),
        c = this.#e.get(o.queryHash)?.state.data,
        f = dA(r, c);
      if (f !== void 0)
        return this.#e.build(this, o).setData(f, { ...l, manual: !0 });
    }
    setQueriesData(t, r, l) {
      return wt.batch(() =>
        this.#e
          .findAll(t)
          .map(({ queryKey: o }) => [o, this.setQueryData(o, r, l)]),
      );
    }
    getQueryState(t) {
      const r = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(r.queryHash)?.state;
    }
    removeQueries(t) {
      const r = this.#e;
      wt.batch(() => {
        r.findAll(t).forEach((l) => {
          r.remove(l);
        });
      });
    }
    resetQueries(t, r) {
      const l = this.#e;
      return wt.batch(
        () => (
          l.findAll(t).forEach((o) => {
            o.reset();
          }),
          this.refetchQueries({ type: "active", ...t }, r)
        ),
      );
    }
    cancelQueries(t, r = {}) {
      const l = { revert: !0, ...r },
        o = wt.batch(() => this.#e.findAll(t).map((s) => s.cancel(l)));
      return Promise.all(o).then(Ht).catch(Ht);
    }
    invalidateQueries(t, r = {}) {
      return wt.batch(
        () => (
          this.#e.findAll(t).forEach((l) => {
            l.invalidate();
          }),
          t?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...t, type: t?.refetchType ?? t?.type ?? "active" },
                r,
              )
        ),
      );
    }
    refetchQueries(t, r = {}) {
      const l = { ...r, cancelRefetch: r.cancelRefetch ?? !0 },
        o = wt.batch(() =>
          this.#e
            .findAll(t)
            .filter((s) => !s.isDisabled() && !s.isStatic())
            .map((s) => {
              let c = s.fetch(void 0, l);
              return (
                l.throwOnError || (c = c.catch(Ht)),
                s.state.fetchStatus === "paused" ? Promise.resolve() : c
              );
            }),
        );
      return Promise.all(o).then(Ht);
    }
    fetchQuery(t) {
      const r = this.defaultQueryOptions(t);
      r.retry === void 0 && (r.retry = !1);
      const l = this.#e.build(this, r);
      return l.isStaleByTime(ta(r.staleTime, l))
        ? l.fetch(r)
        : Promise.resolve(l.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(Ht).catch(Ht);
    }
    fetchInfiniteQuery(t) {
      return ((t.behavior = Rg(t.pages)), this.fetchQuery(t));
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(Ht).catch(Ht);
    }
    ensureInfiniteQueryData(t) {
      return ((t.behavior = Rg(t.pages)), this.ensureQueryData(t));
    }
    resumePausedMutations() {
      return du.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(t) {
      this.#n = t;
    }
    setQueryDefaults(t, r) {
      this.#a.set(Ha(t), { queryKey: t, defaultOptions: r });
    }
    getQueryDefaults(t) {
      const r = [...this.#a.values()],
        l = {};
      return (
        r.forEach((o) => {
          ro(t, o.queryKey) && Object.assign(l, o.defaultOptions);
        }),
        l
      );
    }
    setMutationDefaults(t, r) {
      this.#r.set(Ha(t), { mutationKey: t, defaultOptions: r });
    }
    getMutationDefaults(t) {
      const r = [...this.#r.values()],
        l = {};
      return (
        r.forEach((o) => {
          ro(t, o.mutationKey) && Object.assign(l, o.defaultOptions);
        }),
        l
      );
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const r = {
        ...this.#n.queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: !0,
      };
      return (
        r.queryHash || (r.queryHash = wh(r.queryKey, r)),
        r.refetchOnReconnect === void 0 &&
          (r.refetchOnReconnect = r.networkMode !== "always"),
        r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
        !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
        r.queryFn === Eh && (r.enabled = !1),
        r
      );
    }
    defaultMutationOptions(t) {
      return t?._defaulted
        ? t
        : {
            ...this.#n.mutations,
            ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
            ...t,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Ab = b.createContext(void 0),
  Yl = (t) => {
    const r = b.useContext(Ab);
    if (!r)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r;
  },
  NA = ({ client: t, children: r }) => (
    b.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t],
    ),
    O.jsx(Ab.Provider, { value: t, children: r })
  ),
  Ob = b.createContext(!1),
  LA = () => b.useContext(Ob);
Ob.Provider;
function UA() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var zA = b.createContext(UA()),
  jA = () => b.useContext(zA),
  PA = (t, r) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) &&
      (r.isReset() || (t.retryOnMount = !1));
  },
  HA = (t) => {
    b.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  BA = ({
    result: t,
    errorResetBoundary: r,
    throwOnError: l,
    query: o,
    suspense: s,
  }) =>
    t.isError &&
    !r.isReset() &&
    !t.isFetching &&
    o &&
    ((s && t.data === void 0) || Sb(l, [t.error, o])),
  kA = (t) => {
    if (t.suspense) {
      const l = (s) => (s === "static" ? s : Math.max(s ?? 1e3, 1e3)),
        o = t.staleTime;
      ((t.staleTime = typeof o == "function" ? (...s) => l(o(...s)) : l(o)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
    }
  },
  qA = (t, r) => t.isLoading && t.isFetching && !r,
  FA = (t, r) => t?.suspense && r.isPending,
  Ag = (t, r, l) =>
    r.fetchOptimistic(t).catch(() => {
      l.clearReset();
    });
function GA(t, r, l) {
  const o = LA(),
    s = jA(),
    c = Yl(),
    f = c.defaultQueryOptions(t);
  (c.getDefaultOptions().queries?._experimental_beforeQuery?.(f),
    (f._optimisticResults = o ? "isRestoring" : "optimistic"),
    kA(f),
    PA(f, s),
    HA(s));
  const h = !c.getQueryCache().get(f.queryHash),
    [p] = b.useState(() => new r(c, f)),
    m = p.getOptimisticResult(f),
    y = !o && t.subscribed !== !1;
  if (
    (b.useSyncExternalStore(
      b.useCallback(
        (v) => {
          const w = y ? p.subscribe(wt.batchCalls(v)) : Ht;
          return (p.updateResult(), w);
        },
        [p, y],
      ),
      () => p.getCurrentResult(),
      () => p.getCurrentResult(),
    ),
    b.useEffect(() => {
      p.setOptions(f);
    }, [f, p]),
    FA(f, m))
  )
    throw Ag(f, p, s);
  if (
    BA({
      result: m,
      errorResetBoundary: s,
      throwOnError: f.throwOnError,
      query: c.getQueryCache().get(f.queryHash),
      suspense: f.suspense,
    })
  )
    throw m.error;
  return (
    c.getDefaultOptions().queries?._experimental_afterQuery?.(f, m),
    f.experimental_prefetchInRender &&
      !Pa &&
      qA(m, o) &&
      (h ? Ag(f, p, s) : c.getQueryCache().get(f.queryHash)?.promise)
        ?.catch(Ht)
        .finally(() => {
          p.updateResult();
        }),
    f.notifyOnChangeProps ? m : p.trackResult(m)
  );
}
function YA(t, r) {
  return GA(t, xA);
}
function Du(t, r) {
  const l = Yl(),
    [o] = b.useState(() => new MA(l, t));
  b.useEffect(() => {
    o.setOptions(t);
  }, [o, t]);
  const s = b.useSyncExternalStore(
      b.useCallback((f) => o.subscribe(wt.batchCalls(f)), [o]),
      () => o.getCurrentResult(),
      () => o.getCurrentResult(),
    ),
    c = b.useCallback(
      (f, h) => {
        o.mutate(f, h).catch(Ht);
      },
      [o],
    );
  if (s.error && Sb(o.options.throwOnError, [s.error])) throw s.error;
  return { ...s, mutate: c, mutateAsync: s.mutate };
}
function Tb(t, r) {
  return function () {
    return t.apply(r, arguments);
  };
}
const { toString: VA } = Object.prototype,
  { getPrototypeOf: Ch } = Object,
  { iterator: _u, toStringTag: Mb } = Symbol,
  Nu = ((t) => (r) => {
    const l = VA.call(r);
    return t[l] || (t[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ln = (t) => ((t = t.toLowerCase()), (r) => Nu(r) === t),
  Lu = (t) => (r) => typeof r === t,
  { isArray: Vl } = Array,
  Pl = Lu("undefined");
function fo(t) {
  return (
    t !== null &&
    !Pl(t) &&
    t.constructor !== null &&
    !Pl(t.constructor) &&
    Kt(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Db = Ln("ArrayBuffer");
function QA(t) {
  let r;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(t))
      : (r = t && t.buffer && Db(t.buffer)),
    r
  );
}
const KA = Lu("string"),
  Kt = Lu("function"),
  _b = Lu("number"),
  ho = (t) => t !== null && typeof t == "object",
  XA = (t) => t === !0 || t === !1,
  ru = (t) => {
    if (Nu(t) !== "object") return !1;
    const r = Ch(t);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Mb in t) &&
      !(_u in t)
    );
  },
  ZA = (t) => {
    if (!ho(t) || fo(t)) return !1;
    try {
      return (
        Object.keys(t).length === 0 &&
        Object.getPrototypeOf(t) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  IA = Ln("Date"),
  $A = Ln("File"),
  JA = Ln("Blob"),
  WA = Ln("FileList"),
  e3 = (t) => ho(t) && Kt(t.pipe),
  t3 = (t) => {
    let r;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (Kt(t.append) &&
          ((r = Nu(t)) === "formdata" ||
            (r === "object" &&
              Kt(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  n3 = Ln("URLSearchParams"),
  [r3, a3, l3, i3] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ln,
  ),
  o3 = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mo(t, r, { allOwnKeys: l = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let o, s;
  if ((typeof t != "object" && (t = [t]), Vl(t)))
    for (o = 0, s = t.length; o < s; o++) r.call(null, t[o], o, t);
  else {
    if (fo(t)) return;
    const c = l ? Object.getOwnPropertyNames(t) : Object.keys(t),
      f = c.length;
    let h;
    for (o = 0; o < f; o++) ((h = c[o]), r.call(null, t[h], h, t));
  }
}
function Nb(t, r) {
  if (fo(t)) return null;
  r = r.toLowerCase();
  const l = Object.keys(t);
  let o = l.length,
    s;
  for (; o-- > 0; ) if (((s = l[o]), r === s.toLowerCase())) return s;
  return null;
}
const Ua =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Lb = (t) => !Pl(t) && t !== Ua;
function qd() {
  const { caseless: t, skipUndefined: r } = (Lb(this) && this) || {},
    l = {},
    o = (s, c) => {
      const f = (t && Nb(l, c)) || c;
      ru(l[f]) && ru(s)
        ? (l[f] = qd(l[f], s))
        : ru(s)
          ? (l[f] = qd({}, s))
          : Vl(s)
            ? (l[f] = s.slice())
            : (!r || !Pl(s)) && (l[f] = s);
    };
  for (let s = 0, c = arguments.length; s < c; s++)
    arguments[s] && mo(arguments[s], o);
  return l;
}
const s3 = (t, r, l, { allOwnKeys: o } = {}) => (
    mo(
      r,
      (s, c) => {
        l && Kt(s) ? (t[c] = Tb(s, l)) : (t[c] = s);
      },
      { allOwnKeys: o },
    ),
    t
  ),
  u3 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  c3 = (t, r, l, o) => {
    ((t.prototype = Object.create(r.prototype, o)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: r.prototype }),
      l && Object.assign(t.prototype, l));
  },
  f3 = (t, r, l, o) => {
    let s, c, f;
    const h = {};
    if (((r = r || {}), t == null)) return r;
    do {
      for (s = Object.getOwnPropertyNames(t), c = s.length; c-- > 0; )
        ((f = s[c]),
          (!o || o(f, t, r)) && !h[f] && ((r[f] = t[f]), (h[f] = !0)));
      t = l !== !1 && Ch(t);
    } while (t && (!l || l(t, r)) && t !== Object.prototype);
    return r;
  },
  d3 = (t, r, l) => {
    ((t = String(t)),
      (l === void 0 || l > t.length) && (l = t.length),
      (l -= r.length));
    const o = t.indexOf(r, l);
    return o !== -1 && o === l;
  },
  h3 = (t) => {
    if (!t) return null;
    if (Vl(t)) return t;
    let r = t.length;
    if (!_b(r)) return null;
    const l = new Array(r);
    for (; r-- > 0; ) l[r] = t[r];
    return l;
  },
  m3 = (
    (t) => (r) =>
      t && r instanceof t
  )(typeof Uint8Array < "u" && Ch(Uint8Array)),
  p3 = (t, r) => {
    const o = (t && t[_u]).call(t);
    let s;
    for (; (s = o.next()) && !s.done; ) {
      const c = s.value;
      r.call(t, c[0], c[1]);
    }
  },
  y3 = (t, r) => {
    let l;
    const o = [];
    for (; (l = t.exec(r)) !== null; ) o.push(l);
    return o;
  },
  g3 = Ln("HTMLFormElement"),
  v3 = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, o, s) {
      return o.toUpperCase() + s;
    }),
  Og = (
    ({ hasOwnProperty: t }) =>
    (r, l) =>
      t.call(r, l)
  )(Object.prototype),
  b3 = Ln("RegExp"),
  Ub = (t, r) => {
    const l = Object.getOwnPropertyDescriptors(t),
      o = {};
    (mo(l, (s, c) => {
      let f;
      (f = r(s, c, t)) !== !1 && (o[c] = f || s);
    }),
      Object.defineProperties(t, o));
  },
  S3 = (t) => {
    Ub(t, (r, l) => {
      if (Kt(t) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1;
      const o = t[l];
      if (Kt(o)) {
        if (((r.enumerable = !1), "writable" in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'");
          });
      }
    });
  },
  w3 = (t, r) => {
    const l = {},
      o = (s) => {
        s.forEach((c) => {
          l[c] = !0;
        });
      };
    return (Vl(t) ? o(t) : o(String(t).split(r)), l);
  },
  E3 = () => {},
  x3 = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r);
function R3(t) {
  return !!(t && Kt(t.append) && t[Mb] === "FormData" && t[_u]);
}
const C3 = (t) => {
    const r = new Array(10),
      l = (o, s) => {
        if (ho(o)) {
          if (r.indexOf(o) >= 0) return;
          if (fo(o)) return o;
          if (!("toJSON" in o)) {
            r[s] = o;
            const c = Vl(o) ? [] : {};
            return (
              mo(o, (f, h) => {
                const p = l(f, s + 1);
                !Pl(p) && (c[h] = p);
              }),
              (r[s] = void 0),
              c
            );
          }
        }
        return o;
      };
    return l(t, 0);
  },
  A3 = Ln("AsyncFunction"),
  O3 = (t) => t && (ho(t) || Kt(t)) && Kt(t.then) && Kt(t.catch),
  zb = ((t, r) =>
    t
      ? setImmediate
      : r
        ? ((l, o) => (
            Ua.addEventListener(
              "message",
              ({ source: s, data: c }) => {
                s === Ua && c === l && o.length && o.shift()();
              },
              !1,
            ),
            (s) => {
              (o.push(s), Ua.postMessage(l, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (l) => setTimeout(l))(
    typeof setImmediate == "function",
    Kt(Ua.postMessage),
  ),
  T3 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ua)
      : (typeof process < "u" && process.nextTick) || zb,
  M3 = (t) => t != null && Kt(t[_u]),
  X = {
    isArray: Vl,
    isArrayBuffer: Db,
    isBuffer: fo,
    isFormData: t3,
    isArrayBufferView: QA,
    isString: KA,
    isNumber: _b,
    isBoolean: XA,
    isObject: ho,
    isPlainObject: ru,
    isEmptyObject: ZA,
    isReadableStream: r3,
    isRequest: a3,
    isResponse: l3,
    isHeaders: i3,
    isUndefined: Pl,
    isDate: IA,
    isFile: $A,
    isBlob: JA,
    isRegExp: b3,
    isFunction: Kt,
    isStream: e3,
    isURLSearchParams: n3,
    isTypedArray: m3,
    isFileList: WA,
    forEach: mo,
    merge: qd,
    extend: s3,
    trim: o3,
    stripBOM: u3,
    inherits: c3,
    toFlatObject: f3,
    kindOf: Nu,
    kindOfTest: Ln,
    endsWith: d3,
    toArray: h3,
    forEachEntry: p3,
    matchAll: y3,
    isHTMLForm: g3,
    hasOwnProperty: Og,
    hasOwnProp: Og,
    reduceDescriptors: Ub,
    freezeMethods: S3,
    toObjectSet: w3,
    toCamelCase: v3,
    noop: E3,
    toFiniteNumber: x3,
    findKey: Nb,
    global: Ua,
    isContextDefined: Lb,
    isSpecCompliantForm: R3,
    toJSONObject: C3,
    isAsyncFn: A3,
    isThenable: O3,
    setImmediate: zb,
    asap: T3,
    isIterable: M3,
  };
function Ne(t, r, l, o, s) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    r && (this.code = r),
    l && (this.config = l),
    o && (this.request = o),
    s && ((this.response = s), (this.status = s.status ? s.status : null)));
}
X.inherits(Ne, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: X.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const jb = Ne.prototype,
  Pb = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  Pb[t] = { value: t };
});
Object.defineProperties(Ne, Pb);
Object.defineProperty(jb, "isAxiosError", { value: !0 });
Ne.from = (t, r, l, o, s, c) => {
  const f = Object.create(jb);
  X.toFlatObject(
    t,
    f,
    function (y) {
      return y !== Error.prototype;
    },
    (m) => m !== "isAxiosError",
  );
  const h = t && t.message ? t.message : "Error",
    p = r == null && t ? t.code : r;
  return (
    Ne.call(f, h, p, l, o, s),
    t &&
      f.cause == null &&
      Object.defineProperty(f, "cause", { value: t, configurable: !0 }),
    (f.name = (t && t.name) || "Error"),
    c && Object.assign(f, c),
    f
  );
};
const D3 = null;
function Fd(t) {
  return X.isPlainObject(t) || X.isArray(t);
}
function Hb(t) {
  return X.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Tg(t, r, l) {
  return t
    ? t
        .concat(r)
        .map(function (s, c) {
          return ((s = Hb(s)), !l && c ? "[" + s + "]" : s);
        })
        .join(l ? "." : "")
    : r;
}
function _3(t) {
  return X.isArray(t) && !t.some(Fd);
}
const N3 = X.toFlatObject(X, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function Uu(t, r, l) {
  if (!X.isObject(t)) throw new TypeError("target must be an object");
  ((r = r || new FormData()),
    (l = X.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (R, C) {
        return !X.isUndefined(C[R]);
      },
    )));
  const o = l.metaTokens,
    s = l.visitor || y,
    c = l.dots,
    f = l.indexes,
    p = (l.Blob || (typeof Blob < "u" && Blob)) && X.isSpecCompliantForm(r);
  if (!X.isFunction(s)) throw new TypeError("visitor must be a function");
  function m(E) {
    if (E === null) return "";
    if (X.isDate(E)) return E.toISOString();
    if (X.isBoolean(E)) return E.toString();
    if (!p && X.isBlob(E))
      throw new Ne("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(E) || X.isTypedArray(E)
      ? p && typeof Blob == "function"
        ? new Blob([E])
        : Buffer.from(E)
      : E;
  }
  function y(E, R, C) {
    let M = E;
    if (E && !C && typeof E == "object") {
      if (X.endsWith(R, "{}"))
        ((R = o ? R : R.slice(0, -2)), (E = JSON.stringify(E)));
      else if (
        (X.isArray(E) && _3(E)) ||
        ((X.isFileList(E) || X.endsWith(R, "[]")) && (M = X.toArray(E)))
      )
        return (
          (R = Hb(R)),
          M.forEach(function (U, G) {
            !(X.isUndefined(U) || U === null) &&
              r.append(
                f === !0 ? Tg([R], G, c) : f === null ? R : R + "[]",
                m(U),
              );
          }),
          !1
        );
    }
    return Fd(E) ? !0 : (r.append(Tg(C, R, c), m(E)), !1);
  }
  const v = [],
    w = Object.assign(N3, {
      defaultVisitor: y,
      convertValue: m,
      isVisitable: Fd,
    });
  function x(E, R) {
    if (!X.isUndefined(E)) {
      if (v.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      (v.push(E),
        X.forEach(E, function (M, j) {
          (!(X.isUndefined(M) || M === null) &&
            s.call(r, M, X.isString(j) ? j.trim() : j, R, w)) === !0 &&
            x(M, R ? R.concat(j) : [j]);
        }),
        v.pop());
    }
  }
  if (!X.isObject(t)) throw new TypeError("data must be an object");
  return (x(t), r);
}
function Mg(t) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (o) {
    return r[o];
  });
}
function Ah(t, r) {
  ((this._pairs = []), t && Uu(t, this, r));
}
const Bb = Ah.prototype;
Bb.append = function (r, l) {
  this._pairs.push([r, l]);
};
Bb.toString = function (r) {
  const l = r
    ? function (o) {
        return r.call(this, o, Mg);
      }
    : Mg;
  return this._pairs
    .map(function (s) {
      return l(s[0]) + "=" + l(s[1]);
    }, "")
    .join("&");
};
function L3(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function kb(t, r, l) {
  if (!r) return t;
  const o = (l && l.encode) || L3;
  X.isFunction(l) && (l = { serialize: l });
  const s = l && l.serialize;
  let c;
  if (
    (s
      ? (c = s(r, l))
      : (c = X.isURLSearchParams(r) ? r.toString() : new Ah(r, l).toString(o)),
    c)
  ) {
    const f = t.indexOf("#");
    (f !== -1 && (t = t.slice(0, f)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + c));
  }
  return t;
}
class Dg {
  constructor() {
    this.handlers = [];
  }
  use(r, l, o) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: l,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    X.forEach(this.handlers, function (o) {
      o !== null && r(o);
    });
  }
}
const qb = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  U3 = typeof URLSearchParams < "u" ? URLSearchParams : Ah,
  z3 = typeof FormData < "u" ? FormData : null,
  j3 = typeof Blob < "u" ? Blob : null,
  P3 = {
    isBrowser: !0,
    classes: { URLSearchParams: U3, FormData: z3, Blob: j3 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Oh = typeof window < "u" && typeof document < "u",
  Gd = (typeof navigator == "object" && navigator) || void 0,
  H3 =
    Oh &&
    (!Gd || ["ReactNative", "NativeScript", "NS"].indexOf(Gd.product) < 0),
  B3 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  k3 = (Oh && window.location.href) || "http://localhost",
  q3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Oh,
        hasStandardBrowserEnv: H3,
        hasStandardBrowserWebWorkerEnv: B3,
        navigator: Gd,
        origin: k3,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  zt = { ...q3, ...P3 };
function F3(t, r) {
  return Uu(t, new zt.classes.URLSearchParams(), {
    visitor: function (l, o, s, c) {
      return zt.isNode && X.isBuffer(l)
        ? (this.append(o, l.toString("base64")), !1)
        : c.defaultVisitor.apply(this, arguments);
    },
    ...r,
  });
}
function G3(t) {
  return X.matchAll(/\w+|\[(\w*)]/g, t).map((r) =>
    r[0] === "[]" ? "" : r[1] || r[0],
  );
}
function Y3(t) {
  const r = {},
    l = Object.keys(t);
  let o;
  const s = l.length;
  let c;
  for (o = 0; o < s; o++) ((c = l[o]), (r[c] = t[c]));
  return r;
}
function Fb(t) {
  function r(l, o, s, c) {
    let f = l[c++];
    if (f === "__proto__") return !0;
    const h = Number.isFinite(+f),
      p = c >= l.length;
    return (
      (f = !f && X.isArray(s) ? s.length : f),
      p
        ? (X.hasOwnProp(s, f) ? (s[f] = [s[f], o]) : (s[f] = o), !h)
        : ((!s[f] || !X.isObject(s[f])) && (s[f] = []),
          r(l, o, s[f], c) && X.isArray(s[f]) && (s[f] = Y3(s[f])),
          !h)
    );
  }
  if (X.isFormData(t) && X.isFunction(t.entries)) {
    const l = {};
    return (
      X.forEachEntry(t, (o, s) => {
        r(G3(o), s, l, 0);
      }),
      l
    );
  }
  return null;
}
function V3(t, r, l) {
  if (X.isString(t))
    try {
      return ((r || JSON.parse)(t), X.trim(t));
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
  return (l || JSON.stringify)(t);
}
const po = {
  transitional: qb,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (r, l) {
      const o = l.getContentType() || "",
        s = o.indexOf("application/json") > -1,
        c = X.isObject(r);
      if ((c && X.isHTMLForm(r) && (r = new FormData(r)), X.isFormData(r)))
        return s ? JSON.stringify(Fb(r)) : r;
      if (
        X.isArrayBuffer(r) ||
        X.isBuffer(r) ||
        X.isStream(r) ||
        X.isFile(r) ||
        X.isBlob(r) ||
        X.isReadableStream(r)
      )
        return r;
      if (X.isArrayBufferView(r)) return r.buffer;
      if (X.isURLSearchParams(r))
        return (
          l.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          r.toString()
        );
      let h;
      if (c) {
        if (o.indexOf("application/x-www-form-urlencoded") > -1)
          return F3(r, this.formSerializer).toString();
        if ((h = X.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return Uu(
            h ? { "files[]": r } : r,
            p && new p(),
            this.formSerializer,
          );
        }
      }
      return c || s ? (l.setContentType("application/json", !1), V3(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const l = this.transitional || po.transitional,
        o = l && l.forcedJSONParsing,
        s = this.responseType === "json";
      if (X.isResponse(r) || X.isReadableStream(r)) return r;
      if (r && X.isString(r) && ((o && !this.responseType) || s)) {
        const f = !(l && l.silentJSONParsing) && s;
        try {
          return JSON.parse(r, this.parseReviver);
        } catch (h) {
          if (f)
            throw h.name === "SyntaxError"
              ? Ne.from(h, Ne.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: zt.classes.FormData, Blob: zt.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
X.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  po.headers[t] = {};
});
const Q3 = X.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  K3 = (t) => {
    const r = {};
    let l, o, s;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (f) {
            ((s = f.indexOf(":")),
              (l = f.substring(0, s).trim().toLowerCase()),
              (o = f.substring(s + 1).trim()),
              !(!l || (r[l] && Q3[l])) &&
                (l === "set-cookie"
                  ? r[l]
                    ? r[l].push(o)
                    : (r[l] = [o])
                  : (r[l] = r[l] ? r[l] + ", " + o : o)));
          }),
      r
    );
  },
  _g = Symbol("internals");
function Ii(t) {
  return t && String(t).trim().toLowerCase();
}
function au(t) {
  return t === !1 || t == null ? t : X.isArray(t) ? t.map(au) : String(t);
}
function X3(t) {
  const r = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; (o = l.exec(t)); ) r[o[1]] = o[2];
  return r;
}
const Z3 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function vd(t, r, l, o, s) {
  if (X.isFunction(o)) return o.call(this, r, l);
  if ((s && (r = l), !!X.isString(r))) {
    if (X.isString(o)) return r.indexOf(o) !== -1;
    if (X.isRegExp(o)) return o.test(r);
  }
}
function I3(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, l, o) => l.toUpperCase() + o);
}
function $3(t, r) {
  const l = X.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(t, o + l, {
      value: function (s, c, f) {
        return this[o].call(this, r, s, c, f);
      },
      configurable: !0,
    });
  });
}
let Xt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, l, o) {
    const s = this;
    function c(h, p, m) {
      const y = Ii(p);
      if (!y) throw new Error("header name must be a non-empty string");
      const v = X.findKey(s, y);
      (!v || s[v] === void 0 || m === !0 || (m === void 0 && s[v] !== !1)) &&
        (s[v || p] = au(h));
    }
    const f = (h, p) => X.forEach(h, (m, y) => c(m, y, p));
    if (X.isPlainObject(r) || r instanceof this.constructor) f(r, l);
    else if (X.isString(r) && (r = r.trim()) && !Z3(r)) f(K3(r), l);
    else if (X.isObject(r) && X.isIterable(r)) {
      let h = {},
        p,
        m;
      for (const y of r) {
        if (!X.isArray(y))
          throw TypeError("Object iterator must return a key-value pair");
        h[(m = y[0])] = (p = h[m])
          ? X.isArray(p)
            ? [...p, y[1]]
            : [p, y[1]]
          : y[1];
      }
      f(h, l);
    } else r != null && c(l, r, o);
    return this;
  }
  get(r, l) {
    if (((r = Ii(r)), r)) {
      const o = X.findKey(this, r);
      if (o) {
        const s = this[o];
        if (!l) return s;
        if (l === !0) return X3(s);
        if (X.isFunction(l)) return l.call(this, s, o);
        if (X.isRegExp(l)) return l.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, l) {
    if (((r = Ii(r)), r)) {
      const o = X.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!l || vd(this, this[o], o, l)));
    }
    return !1;
  }
  delete(r, l) {
    const o = this;
    let s = !1;
    function c(f) {
      if (((f = Ii(f)), f)) {
        const h = X.findKey(o, f);
        h && (!l || vd(o, o[h], h, l)) && (delete o[h], (s = !0));
      }
    }
    return (X.isArray(r) ? r.forEach(c) : c(r), s);
  }
  clear(r) {
    const l = Object.keys(this);
    let o = l.length,
      s = !1;
    for (; o--; ) {
      const c = l[o];
      (!r || vd(this, this[c], c, r, !0)) && (delete this[c], (s = !0));
    }
    return s;
  }
  normalize(r) {
    const l = this,
      o = {};
    return (
      X.forEach(this, (s, c) => {
        const f = X.findKey(o, c);
        if (f) {
          ((l[f] = au(s)), delete l[c]);
          return;
        }
        const h = r ? I3(c) : String(c).trim();
        (h !== c && delete l[c], (l[h] = au(s)), (o[h] = !0));
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const l = Object.create(null);
    return (
      X.forEach(this, (o, s) => {
        o != null && o !== !1 && (l[s] = r && X.isArray(o) ? o.join(", ") : o);
      }),
      l
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, l]) => r + ": " + l).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...l) {
    const o = new this(r);
    return (l.forEach((s) => o.set(s)), o);
  }
  static accessor(r) {
    const o = (this[_g] = this[_g] = { accessors: {} }).accessors,
      s = this.prototype;
    function c(f) {
      const h = Ii(f);
      o[h] || ($3(s, f), (o[h] = !0));
    }
    return (X.isArray(r) ? r.forEach(c) : c(r), this);
  }
};
Xt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
X.reduceDescriptors(Xt.prototype, ({ value: t }, r) => {
  let l = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(o) {
      this[l] = o;
    },
  };
});
X.freezeMethods(Xt);
function bd(t, r) {
  const l = this || po,
    o = r || l,
    s = Xt.from(o.headers);
  let c = o.data;
  return (
    X.forEach(t, function (h) {
      c = h.call(l, c, s.normalize(), r ? r.status : void 0);
    }),
    s.normalize(),
    c
  );
}
function Gb(t) {
  return !!(t && t.__CANCEL__);
}
function Ql(t, r, l) {
  (Ne.call(this, t ?? "canceled", Ne.ERR_CANCELED, r, l),
    (this.name = "CanceledError"));
}
X.inherits(Ql, Ne, { __CANCEL__: !0 });
function Yb(t, r, l) {
  const o = l.config.validateStatus;
  !l.status || !o || o(l.status)
    ? t(l)
    : r(
        new Ne(
          "Request failed with status code " + l.status,
          [Ne.ERR_BAD_REQUEST, Ne.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l,
        ),
      );
}
function J3(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (r && r[1]) || "";
}
function W3(t, r) {
  t = t || 10;
  const l = new Array(t),
    o = new Array(t);
  let s = 0,
    c = 0,
    f;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (p) {
      const m = Date.now(),
        y = o[c];
      (f || (f = m), (l[s] = p), (o[s] = m));
      let v = c,
        w = 0;
      for (; v !== s; ) ((w += l[v++]), (v = v % t));
      if (((s = (s + 1) % t), s === c && (c = (c + 1) % t), m - f < r)) return;
      const x = y && m - y;
      return x ? Math.round((w * 1e3) / x) : void 0;
    }
  );
}
function eO(t, r) {
  let l = 0,
    o = 1e3 / r,
    s,
    c;
  const f = (m, y = Date.now()) => {
    ((l = y), (s = null), c && (clearTimeout(c), (c = null)), t(...m));
  };
  return [
    (...m) => {
      const y = Date.now(),
        v = y - l;
      v >= o
        ? f(m, y)
        : ((s = m),
          c ||
            (c = setTimeout(() => {
              ((c = null), f(s));
            }, o - v)));
    },
    () => s && f(s),
  ];
}
const hu = (t, r, l = 3) => {
    let o = 0;
    const s = W3(50, 250);
    return eO((c) => {
      const f = c.loaded,
        h = c.lengthComputable ? c.total : void 0,
        p = f - o,
        m = s(p),
        y = f <= h;
      o = f;
      const v = {
        loaded: f,
        total: h,
        progress: h ? f / h : void 0,
        bytes: p,
        rate: m || void 0,
        estimated: m && h && y ? (h - f) / m : void 0,
        event: c,
        lengthComputable: h != null,
        [r ? "download" : "upload"]: !0,
      };
      t(v);
    }, l);
  },
  Ng = (t, r) => {
    const l = t != null;
    return [(o) => r[0]({ lengthComputable: l, total: t, loaded: o }), r[1]];
  },
  Lg =
    (t) =>
    (...r) =>
      X.asap(() => t(...r)),
  tO = zt.hasStandardBrowserEnv
    ? ((t, r) => (l) => (
        (l = new URL(l, zt.origin)),
        t.protocol === l.protocol &&
          t.host === l.host &&
          (r || t.port === l.port)
      ))(
        new URL(zt.origin),
        zt.navigator && /(msie|trident)/i.test(zt.navigator.userAgent),
      )
    : () => !0,
  nO = zt.hasStandardBrowserEnv
    ? {
        write(t, r, l, o, s, c) {
          const f = [t + "=" + encodeURIComponent(r)];
          (X.isNumber(l) && f.push("expires=" + new Date(l).toGMTString()),
            X.isString(o) && f.push("path=" + o),
            X.isString(s) && f.push("domain=" + s),
            c === !0 && f.push("secure"),
            (document.cookie = f.join("; ")));
        },
        read(t) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function rO(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function aO(t, r) {
  return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
}
function Vb(t, r, l) {
  let o = !rO(r);
  return t && (o || l == !1) ? aO(t, r) : r;
}
const Ug = (t) => (t instanceof Xt ? { ...t } : t);
function Ba(t, r) {
  r = r || {};
  const l = {};
  function o(m, y, v, w) {
    return X.isPlainObject(m) && X.isPlainObject(y)
      ? X.merge.call({ caseless: w }, m, y)
      : X.isPlainObject(y)
        ? X.merge({}, y)
        : X.isArray(y)
          ? y.slice()
          : y;
  }
  function s(m, y, v, w) {
    if (X.isUndefined(y)) {
      if (!X.isUndefined(m)) return o(void 0, m, v, w);
    } else return o(m, y, v, w);
  }
  function c(m, y) {
    if (!X.isUndefined(y)) return o(void 0, y);
  }
  function f(m, y) {
    if (X.isUndefined(y)) {
      if (!X.isUndefined(m)) return o(void 0, m);
    } else return o(void 0, y);
  }
  function h(m, y, v) {
    if (v in r) return o(m, y);
    if (v in t) return o(void 0, m);
  }
  const p = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: h,
    headers: (m, y, v) => s(Ug(m), Ug(y), v, !0),
  };
  return (
    X.forEach(Object.keys({ ...t, ...r }), function (y) {
      const v = p[y] || s,
        w = v(t[y], r[y], y);
      (X.isUndefined(w) && v !== h) || (l[y] = w);
    }),
    l
  );
}
const Qb = (t) => {
    const r = Ba({}, t);
    let {
      data: l,
      withXSRFToken: o,
      xsrfHeaderName: s,
      xsrfCookieName: c,
      headers: f,
      auth: h,
    } = r;
    if (
      ((r.headers = f = Xt.from(f)),
      (r.url = kb(
        Vb(r.baseURL, r.url, r.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer,
      )),
      h &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : ""),
            ),
        ),
      X.isFormData(l))
    ) {
      if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if (X.isFunction(l.getHeaders)) {
        const p = l.getHeaders(),
          m = ["content-type", "content-length"];
        Object.entries(p).forEach(([y, v]) => {
          m.includes(y.toLowerCase()) && f.set(y, v);
        });
      }
    }
    if (
      zt.hasStandardBrowserEnv &&
      (o && X.isFunction(o) && (o = o(r)), o || (o !== !1 && tO(r.url)))
    ) {
      const p = s && c && nO.read(c);
      p && f.set(s, p);
    }
    return r;
  },
  lO = typeof XMLHttpRequest < "u",
  iO =
    lO &&
    function (t) {
      return new Promise(function (l, o) {
        const s = Qb(t);
        let c = s.data;
        const f = Xt.from(s.headers).normalize();
        let { responseType: h, onUploadProgress: p, onDownloadProgress: m } = s,
          y,
          v,
          w,
          x,
          E;
        function R() {
          (x && x(),
            E && E(),
            s.cancelToken && s.cancelToken.unsubscribe(y),
            s.signal && s.signal.removeEventListener("abort", y));
        }
        let C = new XMLHttpRequest();
        (C.open(s.method.toUpperCase(), s.url, !0), (C.timeout = s.timeout));
        function M() {
          if (!C) return;
          const U = Xt.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders(),
            ),
            P = {
              data:
                !h || h === "text" || h === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: U,
              config: t,
              request: C,
            };
          (Yb(
            function (K) {
              (l(K), R());
            },
            function (K) {
              (o(K), R());
            },
            P,
          ),
            (C = null));
        }
        ("onloadend" in C
          ? (C.onloadend = M)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(M);
            }),
          (C.onabort = function () {
            C &&
              (o(new Ne("Request aborted", Ne.ECONNABORTED, t, C)), (C = null));
          }),
          (C.onerror = function (G) {
            const P = G && G.message ? G.message : "Network Error",
              _ = new Ne(P, Ne.ERR_NETWORK, t, C);
            ((_.event = G || null), o(_), (C = null));
          }),
          (C.ontimeout = function () {
            let G = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const P = s.transitional || qb;
            (s.timeoutErrorMessage && (G = s.timeoutErrorMessage),
              o(
                new Ne(
                  G,
                  P.clarifyTimeoutError ? Ne.ETIMEDOUT : Ne.ECONNABORTED,
                  t,
                  C,
                ),
              ),
              (C = null));
          }),
          c === void 0 && f.setContentType(null),
          "setRequestHeader" in C &&
            X.forEach(f.toJSON(), function (G, P) {
              C.setRequestHeader(P, G);
            }),
          X.isUndefined(s.withCredentials) ||
            (C.withCredentials = !!s.withCredentials),
          h && h !== "json" && (C.responseType = s.responseType),
          m && (([w, E] = hu(m, !0)), C.addEventListener("progress", w)),
          p &&
            C.upload &&
            (([v, x] = hu(p)),
            C.upload.addEventListener("progress", v),
            C.upload.addEventListener("loadend", x)),
          (s.cancelToken || s.signal) &&
            ((y = (U) => {
              C &&
                (o(!U || U.type ? new Ql(null, t, C) : U),
                C.abort(),
                (C = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(y),
            s.signal &&
              (s.signal.aborted
                ? y()
                : s.signal.addEventListener("abort", y))));
        const j = J3(s.url);
        if (j && zt.protocols.indexOf(j) === -1) {
          o(new Ne("Unsupported protocol " + j + ":", Ne.ERR_BAD_REQUEST, t));
          return;
        }
        C.send(c || null);
      });
    },
  oO = (t, r) => {
    const { length: l } = (t = t ? t.filter(Boolean) : []);
    if (r || l) {
      let o = new AbortController(),
        s;
      const c = function (m) {
        if (!s) {
          ((s = !0), h());
          const y = m instanceof Error ? m : this.reason;
          o.abort(
            y instanceof Ne ? y : new Ql(y instanceof Error ? y.message : y),
          );
        }
      };
      let f =
        r &&
        setTimeout(() => {
          ((f = null), c(new Ne(`timeout ${r} of ms exceeded`, Ne.ETIMEDOUT)));
        }, r);
      const h = () => {
        t &&
          (f && clearTimeout(f),
          (f = null),
          t.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(c)
              : m.removeEventListener("abort", c);
          }),
          (t = null));
      };
      t.forEach((m) => m.addEventListener("abort", c));
      const { signal: p } = o;
      return ((p.unsubscribe = () => X.asap(h)), p);
    }
  },
  sO = function* (t, r) {
    let l = t.byteLength;
    if (l < r) {
      yield t;
      return;
    }
    let o = 0,
      s;
    for (; o < l; ) ((s = o + r), yield t.slice(o, s), (o = s));
  },
  uO = async function* (t, r) {
    for await (const l of cO(t)) yield* sO(l, r);
  },
  cO = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const r = t.getReader();
    try {
      for (;;) {
        const { done: l, value: o } = await r.read();
        if (l) break;
        yield o;
      }
    } finally {
      await r.cancel();
    }
  },
  zg = (t, r, l, o) => {
    const s = uO(t, r);
    let c = 0,
      f,
      h = (p) => {
        f || ((f = !0), o && o(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: m, value: y } = await s.next();
            if (m) {
              (h(), p.close());
              return;
            }
            let v = y.byteLength;
            if (l) {
              let w = (c += v);
              l(w);
            }
            p.enqueue(new Uint8Array(y));
          } catch (m) {
            throw (h(m), m);
          }
        },
        cancel(p) {
          return (h(p), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  jg = 64 * 1024,
  { isFunction: Xs } = X,
  fO = (({ Request: t, Response: r }) => ({ Request: t, Response: r }))(
    X.global,
  ),
  { ReadableStream: Pg, TextEncoder: Hg } = X.global,
  Bg = (t, ...r) => {
    try {
      return !!t(...r);
    } catch {
      return !1;
    }
  },
  dO = (t) => {
    t = X.merge.call({ skipUndefined: !0 }, fO, t);
    const { fetch: r, Request: l, Response: o } = t,
      s = r ? Xs(r) : typeof fetch == "function",
      c = Xs(l),
      f = Xs(o);
    if (!s) return !1;
    const h = s && Xs(Pg),
      p =
        s &&
        (typeof Hg == "function"
          ? (
              (E) => (R) =>
                E.encode(R)
            )(new Hg())
          : async (E) => new Uint8Array(await new l(E).arrayBuffer())),
      m =
        c &&
        h &&
        Bg(() => {
          let E = !1;
          const R = new l(zt.origin, {
            body: new Pg(),
            method: "POST",
            get duplex() {
              return ((E = !0), "half");
            },
          }).headers.has("Content-Type");
          return E && !R;
        }),
      y = f && h && Bg(() => X.isReadableStream(new o("").body)),
      v = { stream: y && ((E) => E.body) };
    s &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((E) => {
        !v[E] &&
          (v[E] = (R, C) => {
            let M = R && R[E];
            if (M) return M.call(R);
            throw new Ne(
              `Response type '${E}' is not supported`,
              Ne.ERR_NOT_SUPPORT,
              C,
            );
          });
      });
    const w = async (E) => {
        if (E == null) return 0;
        if (X.isBlob(E)) return E.size;
        if (X.isSpecCompliantForm(E))
          return (
            await new l(zt.origin, { method: "POST", body: E }).arrayBuffer()
          ).byteLength;
        if (X.isArrayBufferView(E) || X.isArrayBuffer(E)) return E.byteLength;
        if ((X.isURLSearchParams(E) && (E = E + ""), X.isString(E)))
          return (await p(E)).byteLength;
      },
      x = async (E, R) => {
        const C = X.toFiniteNumber(E.getContentLength());
        return C ?? w(R);
      };
    return async (E) => {
      let {
          url: R,
          method: C,
          data: M,
          signal: j,
          cancelToken: U,
          timeout: G,
          onDownloadProgress: P,
          onUploadProgress: _,
          responseType: K,
          headers: V,
          withCredentials: ae = "same-origin",
          fetchOptions: oe,
        } = Qb(E),
        we = r || fetch;
      K = K ? (K + "").toLowerCase() : "text";
      let Ee = oO([j, U && U.toAbortSignal()], G),
        ue = null;
      const se =
        Ee &&
        Ee.unsubscribe &&
        (() => {
          Ee.unsubscribe();
        });
      let be;
      try {
        if (
          _ &&
          m &&
          C !== "get" &&
          C !== "head" &&
          (be = await x(V, M)) !== 0
        ) {
          let Z = new l(R, { method: "POST", body: M, duplex: "half" }),
            re;
          if (
            (X.isFormData(M) &&
              (re = Z.headers.get("content-type")) &&
              V.setContentType(re),
            Z.body)
          ) {
            const [ee, ie] = Ng(be, hu(Lg(_)));
            M = zg(Z.body, jg, ee, ie);
          }
        }
        X.isString(ae) || (ae = ae ? "include" : "omit");
        const N = c && "credentials" in l.prototype,
          $ = {
            ...oe,
            signal: Ee,
            method: C.toUpperCase(),
            headers: V.normalize().toJSON(),
            body: M,
            duplex: "half",
            credentials: N ? ae : void 0,
          };
        ue = c && new l(R, $);
        let k = await (c ? we(ue, oe) : we(R, $));
        const ne = y && (K === "stream" || K === "response");
        if (y && (P || (ne && se))) {
          const Z = {};
          ["status", "statusText", "headers"].forEach((Oe) => {
            Z[Oe] = k[Oe];
          });
          const re = X.toFiniteNumber(k.headers.get("content-length")),
            [ee, ie] = (P && Ng(re, hu(Lg(P), !0))) || [];
          k = new o(
            zg(k.body, jg, ee, () => {
              (ie && ie(), se && se());
            }),
            Z,
          );
        }
        K = K || "text";
        let A = await v[X.findKey(v, K) || "text"](k, E);
        return (
          !ne && se && se(),
          await new Promise((Z, re) => {
            Yb(Z, re, {
              data: A,
              headers: Xt.from(k.headers),
              status: k.status,
              statusText: k.statusText,
              config: E,
              request: ue,
            });
          })
        );
      } catch (N) {
        throw (
          se && se(),
          N && N.name === "TypeError" && /Load failed|fetch/i.test(N.message)
            ? Object.assign(new Ne("Network Error", Ne.ERR_NETWORK, E, ue), {
                cause: N.cause || N,
              })
            : Ne.from(N, N && N.code, E, ue)
        );
      }
    };
  },
  hO = new Map(),
  Kb = (t) => {
    let r = t ? t.env : {};
    const { fetch: l, Request: o, Response: s } = r,
      c = [o, s, l];
    let f = c.length,
      h = f,
      p,
      m,
      y = hO;
    for (; h--; )
      ((p = c[h]),
        (m = y.get(p)),
        m === void 0 && y.set(p, (m = h ? new Map() : dO(r))),
        (y = m));
    return m;
  };
Kb();
const Yd = { http: D3, xhr: iO, fetch: { get: Kb } };
X.forEach(Yd, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: r });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: r });
  }
});
const kg = (t) => `- ${t}`,
  mO = (t) => X.isFunction(t) || t === null || t === !1,
  Xb = {
    getAdapter: (t, r) => {
      t = X.isArray(t) ? t : [t];
      const { length: l } = t;
      let o, s;
      const c = {};
      for (let f = 0; f < l; f++) {
        o = t[f];
        let h;
        if (
          ((s = o),
          !mO(o) && ((s = Yd[(h = String(o)).toLowerCase()]), s === void 0))
        )
          throw new Ne(`Unknown adapter '${h}'`);
        if (s && (X.isFunction(s) || (s = s.get(r)))) break;
        c[h || "#" + f] = s;
      }
      if (!s) {
        const f = Object.entries(c).map(
          ([p, m]) =>
            `adapter ${p} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let h = l
          ? f.length > 1
            ? `since :
` +
              f.map(kg).join(`
`)
            : " " + kg(f[0])
          : "as no adapter specified";
        throw new Ne(
          "There is no suitable adapter to dispatch the request " + h,
          "ERR_NOT_SUPPORT",
        );
      }
      return s;
    },
    adapters: Yd,
  };
function Sd(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Ql(null, t);
}
function qg(t) {
  return (
    Sd(t),
    (t.headers = Xt.from(t.headers)),
    (t.data = bd.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Xb.getAdapter(
      t.adapter || po.adapter,
      t,
    )(t).then(
      function (o) {
        return (
          Sd(t),
          (o.data = bd.call(t, t.transformResponse, o)),
          (o.headers = Xt.from(o.headers)),
          o
        );
      },
      function (o) {
        return (
          Gb(o) ||
            (Sd(t),
            o &&
              o.response &&
              ((o.response.data = bd.call(t, t.transformResponse, o.response)),
              (o.response.headers = Xt.from(o.response.headers)))),
          Promise.reject(o)
        );
      },
    )
  );
}
const Zb = "1.12.2",
  zu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, r) => {
    zu[t] = function (o) {
      return typeof o === t || "a" + (r < 1 ? "n " : " ") + t;
    };
  },
);
const Fg = {};
zu.transitional = function (r, l, o) {
  function s(c, f) {
    return (
      "[Axios v" +
      Zb +
      "] Transitional option '" +
      c +
      "'" +
      f +
      (o ? ". " + o : "")
    );
  }
  return (c, f, h) => {
    if (r === !1)
      throw new Ne(
        s(f, " has been removed" + (l ? " in " + l : "")),
        Ne.ERR_DEPRECATED,
      );
    return (
      l &&
        !Fg[f] &&
        ((Fg[f] = !0),
        console.warn(
          s(
            f,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future",
          ),
        )),
      r ? r(c, f, h) : !0
    );
  };
};
zu.spelling = function (r) {
  return (l, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function pO(t, r, l) {
  if (typeof t != "object")
    throw new Ne("options must be an object", Ne.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(t);
  let s = o.length;
  for (; s-- > 0; ) {
    const c = o[s],
      f = r[c];
    if (f) {
      const h = t[c],
        p = h === void 0 || f(h, c, t);
      if (p !== !0)
        throw new Ne("option " + c + " must be " + p, Ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new Ne("Unknown option " + c, Ne.ERR_BAD_OPTION);
  }
}
const lu = { assertOptions: pO, validators: zu },
  Gn = lu.validators;
let za = class {
  constructor(r) {
    ((this.defaults = r || {}),
      (this.interceptors = { request: new Dg(), response: new Dg() }));
  }
  async request(r, l) {
    try {
      return await this._request(r, l);
    } catch (o) {
      if (o instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const c = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack
            ? c &&
              !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (o.stack +=
                `
` + c)
            : (o.stack = c);
        } catch {}
      }
      throw o;
    }
  }
  _request(r, l) {
    (typeof r == "string" ? ((l = l || {}), (l.url = r)) : (l = r || {}),
      (l = Ba(this.defaults, l)));
    const { transitional: o, paramsSerializer: s, headers: c } = l;
    (o !== void 0 &&
      lu.assertOptions(
        o,
        {
          silentJSONParsing: Gn.transitional(Gn.boolean),
          forcedJSONParsing: Gn.transitional(Gn.boolean),
          clarifyTimeoutError: Gn.transitional(Gn.boolean),
        },
        !1,
      ),
      s != null &&
        (X.isFunction(s)
          ? (l.paramsSerializer = { serialize: s })
          : lu.assertOptions(
              s,
              { encode: Gn.function, serialize: Gn.function },
              !0,
            )),
      l.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (l.allowAbsoluteUrls = !0)),
      lu.assertOptions(
        l,
        {
          baseUrl: Gn.spelling("baseURL"),
          withXsrfToken: Gn.spelling("withXSRFToken"),
        },
        !0,
      ),
      (l.method = (l.method || this.defaults.method || "get").toLowerCase()));
    let f = c && X.merge(c.common, c[l.method]);
    (c &&
      X.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (E) => {
          delete c[E];
        },
      ),
      (l.headers = Xt.concat(f, c)));
    const h = [];
    let p = !0;
    this.interceptors.request.forEach(function (R) {
      (typeof R.runWhen == "function" && R.runWhen(l) === !1) ||
        ((p = p && R.synchronous), h.unshift(R.fulfilled, R.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (R) {
      m.push(R.fulfilled, R.rejected);
    });
    let y,
      v = 0,
      w;
    if (!p) {
      const E = [qg.bind(this), void 0];
      for (
        E.unshift(...h), E.push(...m), w = E.length, y = Promise.resolve(l);
        v < w;

      )
        y = y.then(E[v++], E[v++]);
      return y;
    }
    w = h.length;
    let x = l;
    for (; v < w; ) {
      const E = h[v++],
        R = h[v++];
      try {
        x = E(x);
      } catch (C) {
        R.call(this, C);
        break;
      }
    }
    try {
      y = qg.call(this, x);
    } catch (E) {
      return Promise.reject(E);
    }
    for (v = 0, w = m.length; v < w; ) y = y.then(m[v++], m[v++]);
    return y;
  }
  getUri(r) {
    r = Ba(this.defaults, r);
    const l = Vb(r.baseURL, r.url, r.allowAbsoluteUrls);
    return kb(l, r.params, r.paramsSerializer);
  }
};
X.forEach(["delete", "get", "head", "options"], function (r) {
  za.prototype[r] = function (l, o) {
    return this.request(
      Ba(o || {}, { method: r, url: l, data: (o || {}).data }),
    );
  };
});
X.forEach(["post", "put", "patch"], function (r) {
  function l(o) {
    return function (c, f, h) {
      return this.request(
        Ba(h || {}, {
          method: r,
          headers: o ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: f,
        }),
      );
    };
  }
  ((za.prototype[r] = l()), (za.prototype[r + "Form"] = l(!0)));
});
let yO = class Ib {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function (c) {
      l = c;
    });
    const o = this;
    (this.promise.then((s) => {
      if (!o._listeners) return;
      let c = o._listeners.length;
      for (; c-- > 0; ) o._listeners[c](s);
      o._listeners = null;
    }),
      (this.promise.then = (s) => {
        let c;
        const f = new Promise((h) => {
          (o.subscribe(h), (c = h));
        }).then(s);
        return (
          (f.cancel = function () {
            o.unsubscribe(c);
          }),
          f
        );
      }),
      r(function (c, f, h) {
        o.reason || ((o.reason = new Ql(c, f, h)), l(o.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const l = this._listeners.indexOf(r);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      l = (o) => {
        r.abort(o);
      };
    return (
      this.subscribe(l),
      (r.signal.unsubscribe = () => this.unsubscribe(l)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new Ib(function (s) {
        r = s;
      }),
      cancel: r,
    };
  }
};
function gO(t) {
  return function (l) {
    return t.apply(null, l);
  };
}
function vO(t) {
  return X.isObject(t) && t.isAxiosError === !0;
}
const Vd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Vd).forEach(([t, r]) => {
  Vd[r] = t;
});
function $b(t) {
  const r = new za(t),
    l = Tb(za.prototype.request, r);
  return (
    X.extend(l, za.prototype, r, { allOwnKeys: !0 }),
    X.extend(l, r, null, { allOwnKeys: !0 }),
    (l.create = function (s) {
      return $b(Ba(t, s));
    }),
    l
  );
}
const ht = $b(po);
ht.Axios = za;
ht.CanceledError = Ql;
ht.CancelToken = yO;
ht.isCancel = Gb;
ht.VERSION = Zb;
ht.toFormData = Uu;
ht.AxiosError = Ne;
ht.Cancel = ht.CanceledError;
ht.all = function (r) {
  return Promise.all(r);
};
ht.spread = gO;
ht.isAxiosError = vO;
ht.mergeConfig = Ba;
ht.AxiosHeaders = Xt;
ht.formToJSON = (t) => Fb(X.isHTMLForm(t) ? new FormData(t) : t);
ht.getAdapter = Xb.getAdapter;
ht.HttpStatusCode = Vd;
ht.default = ht;
const {
    Axios: vD,
    AxiosError: bO,
    CanceledError: bD,
    isCancel: SD,
    CancelToken: wD,
    VERSION: ED,
    all: xD,
    Cancel: RD,
    isAxiosError: xn,
    spread: CD,
    toFormData: AD,
    AxiosHeaders: OD,
    HttpStatusCode: TD,
    formToJSON: MD,
    getAdapter: DD,
    mergeConfig: _D,
  } = ht,
  SO = "http://localhost:8000",
  _t = ht.create({ baseURL: `${SO}/api`, withCredentials: !0 });
_t.interceptors.request.use((t) => t);
_t.interceptors.response.use(
  (t) => t,
  async (t) => {
    const r = t.config,
      l = r?.url?.includes("/user/refresh/");
    if (t.response?.status === 401 && r && !l)
      try {
        return (await _t.post("/user/refresh/", {}), _t.request(r));
      } catch (o) {
        return o instanceof bO && o.response?.status === 401
          ? Promise.reject(new wO("Refresh token expired"))
          : Promise.reject(o);
      }
    return Promise.reject(t instanceof Error ? t : new Error(String(t)));
  },
);
class wO extends Error {
  constructor(r) {
    (super(r), (this.name = "RefreshTokenExpiredError"));
  }
}
async function EO() {
  try {
    return (await _t.post("/user/signout/")).status === 200;
  } catch (t) {
    return (
      xn(t)
        ? console.error("signOut error:", t.response?.status, t.response?.data)
        : console.error("signOut unknown error:", t),
      !1
    );
  }
}
async function ND(t) {
  try {
    return (
      (await _t.get("/user/kakao/callback/", { params: { code: t } }))
        .status === 200
    );
  } catch (r) {
    xn(r)
      ? console.error(
          "kakaoSignIn error:",
          r.response?.status,
          r.response?.data,
        )
      : console.error("kakaoSignIn unknown error:", r);
  }
  return !1;
}
async function LD(t = {}) {
  try {
    const r = await _t.get("/auction/", { params: t });
    return r.status === 200 ? r.data : [];
  } catch (r) {
    return (
      xn(r)
        ? console.error(
            "getAllAuctions error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("getAllAuctions unknown error:", r),
      []
    );
  }
}
async function UD() {
  try {
    const t = await _t.get("/auction/recommended/");
    return t.status === 200 ? t.data : [];
  } catch (t) {
    return (
      xn(t)
        ? console.error(
            "getRecommendedAuctions error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("getRecommendedAuctions unknown error:", t),
      []
    );
  }
}
async function zD(t) {
  try {
    const r = encodeURIComponent(String(t)),
      l = await _t.get(`/auction/${r}/`);
    return l.status === 200 ? l.data : null;
  } catch (r) {
    return (
      xn(r)
        ? console.error(
            "getAuctionDetail error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("getAuctionDetail unknown error:", r),
      null
    );
  }
}
async function xO() {
  try {
    const t = await _t.get("/user/me/");
    return t.status === 200 ? t.data : null;
  } catch (t) {
    return (
      xn(t)
        ? console.error(
            "getUserInfo error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("getUserInfo unknown error:", t),
      null
    );
  }
}
async function RO(t) {
  try {
    const r = await _t.post("/payment/ready/", {
      partner_order_id: `order_${Date.now()}`,
      partner_user_id: "user",
      item_name: t.point,
      quantity: 1,
      total_amount: parseInt(t.price),
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: `${window.location.origin}/payment/approve`,
      cancel_url: `${window.location.origin}/payment/cancel`,
      fail_url: `${window.location.origin}/payment/fail`,
    });
    return r.status === 200 ? r.data : null;
  } catch (r) {
    return (
      xn(r)
        ? console.error(
            "paymentReady error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("paymentReady unknown error:", r),
      null
    );
  }
}
async function CO(t, r) {
  try {
    const l = await _t.put("/user/me/", { nickname: t, profilepic_id: r });
    return l.status === 200 ? l.data : null;
  } catch (l) {
    return (
      xn(l)
        ? console.error(
            "updateUserProfile error:",
            l.response?.status,
            l.response?.data,
          )
        : console.error("updateUserProfile unknown error:", l),
      null
    );
  }
}
async function AO(t) {
  try {
    return (
      (await _t.post("/payment/approve/", { pg_token: t.pg_token, tid: t.tid }))
        .status === 200
    );
  } catch (r) {
    return (
      xn(r)
        ? console.error(
            "paymentApproval error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("paymentApproval unknown error:", r),
      !1
    );
  }
}
async function jD() {
  try {
    const t = await _t.get("/payment/history/");
    return t.status === 200 ? t.data : [];
  } catch (t) {
    return (
      xn(t)
        ? console.error(
            "[DEBUG] getPaymentHistory error:",
            t.response?.status,
            t.response?.data,
          )
        : console.error("[DEBUG] getPaymentHistory unknown error:", t),
      []
    );
  }
}
async function PD(t, r) {
  try {
    const l = await _t.post(`/auction/${t}/bid/`, { amount: r });
    return l.status === 201 ? l.data : null;
  } catch (l) {
    return (
      xn(l)
        ? console.error("placeBid error:", l.response?.status, l.response?.data)
        : console.error("placeBid unknown error:", l),
      null
    );
  }
}
async function HD(t) {
  try {
    if (t.image_file) {
      const s = new FormData();
      (s.append("title", t.title),
        s.append("description", t.description),
        s.append("starting_price", String(t.starting_price)),
        s.append("end_time", t.end_time),
        s.append("image_file", t.image_file, t.image_file.name));
      const c = await _t.post("/auction/create/", s);
      return c.status === 201 ? c.data : null;
    }
    const { image_file: r, ...l } = t,
      o = await _t.post("/auction/create/", l);
    return o.status === 201 ? o.data : null;
  } catch (r) {
    return (
      xn(r)
        ? console.error(
            "createAuction error:",
            r.response?.status,
            r.response?.data,
          )
        : console.error("createAuction unknown error:", r),
      null
    );
  }
}
const Hl = ["user", "profile"];
function OO(t = !0) {
  return YA({
    queryKey: Hl,
    queryFn: xO,
    enabled: t,
    staleTime: 300 * 1e3,
    retry: !1,
  });
}
const TO = () => {
    const t = Yl();
    return Du({
      mutationFn: async (r) => await CO(r.nickname, r.profilepicId),
      onSuccess: (r) => {
        r && t.invalidateQueries({ queryKey: Hl });
      },
      onError: (r) => {
        console.error("updateUserProfile error:", r);
      },
    });
  },
  MO = () => {
    const t = Yl();
    return Du({
      mutationFn: EO,
      onSettled: async () => {
        (console.log("logout settled"), t.setQueryData(Hl, null));
      },
    });
  },
  Jb = b.createContext(null),
  DO = ({ children: t }) => {
    const { data: r } = OO(),
      l = Yl(),
      { mutateAsync: o } = TO(),
      { mutateAsync: s } = MO(),
      c = b.useMemo(
        () =>
          r
            ? {
                profileImage: _O(r.profilepic_id),
                nickname: r.nickname ?? "",
                points: r.remaining_points,
              }
            : null,
        [r],
      ),
      f = (m) => {
        l.setQueryData(Hl, m);
      },
      h = async () => {
        (await s(), console.log(l.getQueryData(Hl)));
      },
      p = async (m, y) => {
        await o({ nickname: m, profilepicId: y });
      };
    return O.jsx(Jb.Provider, {
      value: { user: c, login: f, logout: h, updateProfile: p },
      children: t,
    });
  },
  ju = () => {
    const t = b.useContext(Jb);
    if (!t) throw new Error("useUser must be used within a UserProvider");
    return t;
  },
  mu = [Md, Px, Hx, Bx, kx, qx];
function _O(t) {
  return t ? (mu[(t - 1) % mu.length] ?? Md) : Md;
}
function Wb(t) {
  const r = t + "CollectionProvider",
    [l, o] = Fl(r),
    [s, c] = l(r, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (R) => {
      const { scope: C, children: M } = R,
        j = Ir.useRef(null),
        U = Ir.useRef(new Map()).current;
      return O.jsx(s, { scope: C, itemMap: U, collectionRef: j, children: M });
    };
  f.displayName = r;
  const h = t + "CollectionSlot",
    p = no(h),
    m = Ir.forwardRef((R, C) => {
      const { scope: M, children: j } = R,
        U = c(h, M),
        G = Nt(C, U.collectionRef);
      return O.jsx(p, { ref: G, children: j });
    });
  m.displayName = h;
  const y = t + "CollectionItemSlot",
    v = "data-radix-collection-item",
    w = no(y),
    x = Ir.forwardRef((R, C) => {
      const { scope: M, children: j, ...U } = R,
        G = Ir.useRef(null),
        P = Nt(C, G),
        _ = c(y, M);
      return (
        Ir.useEffect(
          () => (
            _.itemMap.set(G, { ref: G, ...U }),
            () => void _.itemMap.delete(G)
          ),
        ),
        O.jsx(w, { [v]: "", ref: P, children: j })
      );
    });
  x.displayName = y;
  function E(R) {
    const C = c(t + "CollectionConsumer", R);
    return Ir.useCallback(() => {
      const j = C.collectionRef.current;
      if (!j) return [];
      const U = Array.from(j.querySelectorAll(`[${v}]`));
      return Array.from(C.itemMap.values()).sort(
        (_, K) => U.indexOf(_.ref.current) - U.indexOf(K.ref.current),
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return [{ Provider: f, Slot: m, ItemSlot: x }, E, o];
}
var NO = b.createContext(void 0);
function e1(t) {
  const r = b.useContext(NO);
  return t || r || "ltr";
}
const LO = ["top", "right", "bottom", "left"],
  aa = Math.min,
  on = Math.max,
  pu = Math.round,
  Zs = Math.floor,
  Xn = (t) => ({ x: t, y: t }),
  UO = { left: "right", right: "left", bottom: "top", top: "bottom" },
  zO = { start: "end", end: "start" };
function Qd(t, r, l) {
  return on(t, aa(r, l));
}
function Er(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function xr(t) {
  return t.split("-")[0];
}
function Kl(t) {
  return t.split("-")[1];
}
function Th(t) {
  return t === "x" ? "y" : "x";
}
function Mh(t) {
  return t === "y" ? "height" : "width";
}
const jO = new Set(["top", "bottom"]);
function Qn(t) {
  return jO.has(xr(t)) ? "y" : "x";
}
function Dh(t) {
  return Th(Qn(t));
}
function PO(t, r, l) {
  l === void 0 && (l = !1);
  const o = Kl(t),
    s = Dh(t),
    c = Mh(s);
  let f =
    s === "x"
      ? o === (l ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return (r.reference[c] > r.floating[c] && (f = yu(f)), [f, yu(f)]);
}
function HO(t) {
  const r = yu(t);
  return [Kd(t), r, Kd(r)];
}
function Kd(t) {
  return t.replace(/start|end/g, (r) => zO[r]);
}
const Gg = ["left", "right"],
  Yg = ["right", "left"],
  BO = ["top", "bottom"],
  kO = ["bottom", "top"];
function qO(t, r, l) {
  switch (t) {
    case "top":
    case "bottom":
      return l ? (r ? Yg : Gg) : r ? Gg : Yg;
    case "left":
    case "right":
      return r ? BO : kO;
    default:
      return [];
  }
}
function FO(t, r, l, o) {
  const s = Kl(t);
  let c = qO(xr(t), l === "start", o);
  return (
    s && ((c = c.map((f) => f + "-" + s)), r && (c = c.concat(c.map(Kd)))),
    c
  );
}
function yu(t) {
  return t.replace(/left|right|bottom|top/g, (r) => UO[r]);
}
function GO(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function t1(t) {
  return typeof t != "number"
    ? GO(t)
    : { top: t, right: t, bottom: t, left: t };
}
function gu(t) {
  const { x: r, y: l, width: o, height: s } = t;
  return {
    width: o,
    height: s,
    top: l,
    left: r,
    right: r + o,
    bottom: l + s,
    x: r,
    y: l,
  };
}
function Vg(t, r, l) {
  let { reference: o, floating: s } = t;
  const c = Qn(r),
    f = Dh(r),
    h = Mh(f),
    p = xr(r),
    m = c === "y",
    y = o.x + o.width / 2 - s.width / 2,
    v = o.y + o.height / 2 - s.height / 2,
    w = o[h] / 2 - s[h] / 2;
  let x;
  switch (p) {
    case "top":
      x = { x: y, y: o.y - s.height };
      break;
    case "bottom":
      x = { x: y, y: o.y + o.height };
      break;
    case "right":
      x = { x: o.x + o.width, y: v };
      break;
    case "left":
      x = { x: o.x - s.width, y: v };
      break;
    default:
      x = { x: o.x, y: o.y };
  }
  switch (Kl(r)) {
    case "start":
      x[f] -= w * (l && m ? -1 : 1);
      break;
    case "end":
      x[f] += w * (l && m ? -1 : 1);
      break;
  }
  return x;
}
const YO = async (t, r, l) => {
  const {
      placement: o = "bottom",
      strategy: s = "absolute",
      middleware: c = [],
      platform: f,
    } = l,
    h = c.filter(Boolean),
    p = await (f.isRTL == null ? void 0 : f.isRTL(r));
  let m = await f.getElementRects({ reference: t, floating: r, strategy: s }),
    { x: y, y: v } = Vg(m, o, p),
    w = o,
    x = {},
    E = 0;
  for (let R = 0; R < h.length; R++) {
    const { name: C, fn: M } = h[R],
      {
        x: j,
        y: U,
        data: G,
        reset: P,
      } = await M({
        x: y,
        y: v,
        initialPlacement: o,
        placement: w,
        strategy: s,
        middlewareData: x,
        rects: m,
        platform: f,
        elements: { reference: t, floating: r },
      });
    ((y = j ?? y),
      (v = U ?? v),
      (x = { ...x, [C]: { ...x[C], ...G } }),
      P &&
        E <= 50 &&
        (E++,
        typeof P == "object" &&
          (P.placement && (w = P.placement),
          P.rects &&
            (m =
              P.rects === !0
                ? await f.getElementRects({
                    reference: t,
                    floating: r,
                    strategy: s,
                  })
                : P.rects),
          ({ x: y, y: v } = Vg(m, w, p))),
        (R = -1)));
  }
  return { x: y, y: v, placement: w, strategy: s, middlewareData: x };
};
async function ao(t, r) {
  var l;
  r === void 0 && (r = {});
  const { x: o, y: s, platform: c, rects: f, elements: h, strategy: p } = t,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: v = "floating",
      altBoundary: w = !1,
      padding: x = 0,
    } = Er(r, t),
    E = t1(x),
    C = h[w ? (v === "floating" ? "reference" : "floating") : v],
    M = gu(
      await c.getClippingRect({
        element:
          (l = await (c.isElement == null ? void 0 : c.isElement(C))) == null ||
          l
            ? C
            : C.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(h.floating))),
        boundary: m,
        rootBoundary: y,
        strategy: p,
      }),
    ),
    j =
      v === "floating"
        ? { x: o, y: s, width: f.floating.width, height: f.floating.height }
        : f.reference,
    U = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(h.floating)),
    G = (await (c.isElement == null ? void 0 : c.isElement(U)))
      ? (await (c.getScale == null ? void 0 : c.getScale(U))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    P = gu(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: j,
            offsetParent: U,
            strategy: p,
          })
        : j,
    );
  return {
    top: (M.top - P.top + E.top) / G.y,
    bottom: (P.bottom - M.bottom + E.bottom) / G.y,
    left: (M.left - P.left + E.left) / G.x,
    right: (P.right - M.right + E.right) / G.x,
  };
}
const VO = (t) => ({
    name: "arrow",
    options: t,
    async fn(r) {
      const {
          x: l,
          y: o,
          placement: s,
          rects: c,
          platform: f,
          elements: h,
          middlewareData: p,
        } = r,
        { element: m, padding: y = 0 } = Er(t, r) || {};
      if (m == null) return {};
      const v = t1(y),
        w = { x: l, y: o },
        x = Dh(s),
        E = Mh(x),
        R = await f.getDimensions(m),
        C = x === "y",
        M = C ? "top" : "left",
        j = C ? "bottom" : "right",
        U = C ? "clientHeight" : "clientWidth",
        G = c.reference[E] + c.reference[x] - w[x] - c.floating[E],
        P = w[x] - c.reference[x],
        _ = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
      let K = _ ? _[U] : 0;
      (!K || !(await (f.isElement == null ? void 0 : f.isElement(_)))) &&
        (K = h.floating[U] || c.floating[E]);
      const V = G / 2 - P / 2,
        ae = K / 2 - R[E] / 2 - 1,
        oe = aa(v[M], ae),
        we = aa(v[j], ae),
        Ee = oe,
        ue = K - R[E] - we,
        se = K / 2 - R[E] / 2 + V,
        be = Qd(Ee, se, ue),
        N =
          !p.arrow &&
          Kl(s) != null &&
          se !== be &&
          c.reference[E] / 2 - (se < Ee ? oe : we) - R[E] / 2 < 0,
        $ = N ? (se < Ee ? se - Ee : se - ue) : 0;
      return {
        [x]: w[x] + $,
        data: {
          [x]: be,
          centerOffset: se - be - $,
          ...(N && { alignmentOffset: $ }),
        },
        reset: N,
      };
    },
  }),
  QO = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(r) {
          var l, o;
          const {
              placement: s,
              middlewareData: c,
              rects: f,
              initialPlacement: h,
              platform: p,
              elements: m,
            } = r,
            {
              mainAxis: y = !0,
              crossAxis: v = !0,
              fallbackPlacements: w,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: R = !0,
              ...C
            } = Er(t, r);
          if ((l = c.arrow) != null && l.alignmentOffset) return {};
          const M = xr(s),
            j = Qn(h),
            U = xr(h) === h,
            G = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            P = w || (U || !R ? [yu(h)] : HO(h)),
            _ = E !== "none";
          !w && _ && P.push(...FO(h, R, E, G));
          const K = [h, ...P],
            V = await ao(r, C),
            ae = [];
          let oe = ((o = c.flip) == null ? void 0 : o.overflows) || [];
          if ((y && ae.push(V[M]), v)) {
            const se = PO(s, f, G);
            ae.push(V[se[0]], V[se[1]]);
          }
          if (
            ((oe = [...oe, { placement: s, overflows: ae }]),
            !ae.every((se) => se <= 0))
          ) {
            var we, Ee;
            const se = (((we = c.flip) == null ? void 0 : we.index) || 0) + 1,
              be = K[se];
            if (
              be &&
              (!(v === "alignment" ? j !== Qn(be) : !1) ||
                oe.every((k) =>
                  Qn(k.placement) === j ? k.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: se, overflows: oe },
                reset: { placement: be },
              };
            let N =
              (Ee = oe
                .filter(($) => $.overflows[0] <= 0)
                .sort(($, k) => $.overflows[1] - k.overflows[1])[0]) == null
                ? void 0
                : Ee.placement;
            if (!N)
              switch (x) {
                case "bestFit": {
                  var ue;
                  const $ =
                    (ue = oe
                      .filter((k) => {
                        if (_) {
                          const ne = Qn(k.placement);
                          return ne === j || ne === "y";
                        }
                        return !0;
                      })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((ne) => ne > 0)
                          .reduce((ne, A) => ne + A, 0),
                      ])
                      .sort((k, ne) => k[1] - ne[1])[0]) == null
                      ? void 0
                      : ue[0];
                  $ && (N = $);
                  break;
                }
                case "initialPlacement":
                  N = h;
                  break;
              }
            if (s !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function Qg(t, r) {
  return {
    top: t.top - r.height,
    right: t.right - r.width,
    bottom: t.bottom - r.height,
    left: t.left - r.width,
  };
}
function Kg(t) {
  return LO.some((r) => t[r] >= 0);
}
const KO = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(r) {
          const { rects: l } = r,
            { strategy: o = "referenceHidden", ...s } = Er(t, r);
          switch (o) {
            case "referenceHidden": {
              const c = await ao(r, { ...s, elementContext: "reference" }),
                f = Qg(c, l.reference);
              return {
                data: { referenceHiddenOffsets: f, referenceHidden: Kg(f) },
              };
            }
            case "escaped": {
              const c = await ao(r, { ...s, altBoundary: !0 }),
                f = Qg(c, l.floating);
              return { data: { escapedOffsets: f, escaped: Kg(f) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  n1 = new Set(["left", "top"]);
async function XO(t, r) {
  const { placement: l, platform: o, elements: s } = t,
    c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
    f = xr(l),
    h = Kl(l),
    p = Qn(l) === "y",
    m = n1.has(f) ? -1 : 1,
    y = c && p ? -1 : 1,
    v = Er(r, t);
  let {
    mainAxis: w,
    crossAxis: x,
    alignmentAxis: E,
  } = typeof v == "number"
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    h && typeof E == "number" && (x = h === "end" ? E * -1 : E),
    p ? { x: x * y, y: w * m } : { x: w * m, y: x * y }
  );
}
const ZO = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(r) {
          var l, o;
          const { x: s, y: c, placement: f, middlewareData: h } = r,
            p = await XO(r, t);
          return f === ((l = h.offset) == null ? void 0 : l.placement) &&
            (o = h.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: s + p.x, y: c + p.y, data: { ...p, placement: f } };
        },
      }
    );
  },
  IO = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(r) {
          const { x: l, y: o, placement: s } = r,
            {
              mainAxis: c = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (C) => {
                  let { x: M, y: j } = C;
                  return { x: M, y: j };
                },
              },
              ...p
            } = Er(t, r),
            m = { x: l, y: o },
            y = await ao(r, p),
            v = Qn(xr(s)),
            w = Th(v);
          let x = m[w],
            E = m[v];
          if (c) {
            const C = w === "y" ? "top" : "left",
              M = w === "y" ? "bottom" : "right",
              j = x + y[C],
              U = x - y[M];
            x = Qd(j, x, U);
          }
          if (f) {
            const C = v === "y" ? "top" : "left",
              M = v === "y" ? "bottom" : "right",
              j = E + y[C],
              U = E - y[M];
            E = Qd(j, E, U);
          }
          const R = h.fn({ ...r, [w]: x, [v]: E });
          return {
            ...R,
            data: { x: R.x - l, y: R.y - o, enabled: { [w]: c, [v]: f } },
          };
        },
      }
    );
  },
  $O = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(r) {
          const { x: l, y: o, placement: s, rects: c, middlewareData: f } = r,
            { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = Er(t, r),
            y = { x: l, y: o },
            v = Qn(s),
            w = Th(v);
          let x = y[w],
            E = y[v];
          const R = Er(h, r),
            C =
              typeof R == "number"
                ? { mainAxis: R, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...R };
          if (p) {
            const U = w === "y" ? "height" : "width",
              G = c.reference[w] - c.floating[U] + C.mainAxis,
              P = c.reference[w] + c.reference[U] - C.mainAxis;
            x < G ? (x = G) : x > P && (x = P);
          }
          if (m) {
            var M, j;
            const U = w === "y" ? "width" : "height",
              G = n1.has(xr(s)),
              P =
                c.reference[v] -
                c.floating[U] +
                ((G && ((M = f.offset) == null ? void 0 : M[v])) || 0) +
                (G ? 0 : C.crossAxis),
              _ =
                c.reference[v] +
                c.reference[U] +
                (G ? 0 : ((j = f.offset) == null ? void 0 : j[v]) || 0) -
                (G ? C.crossAxis : 0);
            E < P ? (E = P) : E > _ && (E = _);
          }
          return { [w]: x, [v]: E };
        },
      }
    );
  },
  JO = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(r) {
          var l, o;
          const { placement: s, rects: c, platform: f, elements: h } = r,
            { apply: p = () => {}, ...m } = Er(t, r),
            y = await ao(r, m),
            v = xr(s),
            w = Kl(s),
            x = Qn(s) === "y",
            { width: E, height: R } = c.floating;
          let C, M;
          v === "top" || v === "bottom"
            ? ((C = v),
              (M =
                w ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((M = v), (C = w === "end" ? "top" : "bottom"));
          const j = R - y.top - y.bottom,
            U = E - y.left - y.right,
            G = aa(R - y[C], j),
            P = aa(E - y[M], U),
            _ = !r.middlewareData.shift;
          let K = G,
            V = P;
          if (
            ((l = r.middlewareData.shift) != null && l.enabled.x && (V = U),
            (o = r.middlewareData.shift) != null && o.enabled.y && (K = j),
            _ && !w)
          ) {
            const oe = on(y.left, 0),
              we = on(y.right, 0),
              Ee = on(y.top, 0),
              ue = on(y.bottom, 0);
            x
              ? (V =
                  E -
                  2 * (oe !== 0 || we !== 0 ? oe + we : on(y.left, y.right)))
              : (K =
                  R -
                  2 * (Ee !== 0 || ue !== 0 ? Ee + ue : on(y.top, y.bottom)));
          }
          await p({ ...r, availableWidth: V, availableHeight: K });
          const ae = await f.getDimensions(h.floating);
          return E !== ae.width || R !== ae.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Pu() {
  return typeof window < "u";
}
function Xl(t) {
  return r1(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function sn(t) {
  var r;
  return (
    (t == null || (r = t.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function Wn(t) {
  var r;
  return (r = (r1(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function r1(t) {
  return Pu() ? t instanceof Node || t instanceof sn(t).Node : !1;
}
function Mn(t) {
  return Pu() ? t instanceof Element || t instanceof sn(t).Element : !1;
}
function Zn(t) {
  return Pu() ? t instanceof HTMLElement || t instanceof sn(t).HTMLElement : !1;
}
function Xg(t) {
  return !Pu() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof sn(t).ShadowRoot;
}
const WO = new Set(["inline", "contents"]);
function yo(t) {
  const { overflow: r, overflowX: l, overflowY: o, display: s } = Dn(t);
  return /auto|scroll|overlay|hidden|clip/.test(r + o + l) && !WO.has(s);
}
const eT = new Set(["table", "td", "th"]);
function tT(t) {
  return eT.has(Xl(t));
}
const nT = [":popover-open", ":modal"];
function Hu(t) {
  return nT.some((r) => {
    try {
      return t.matches(r);
    } catch {
      return !1;
    }
  });
}
const rT = ["transform", "translate", "scale", "rotate", "perspective"],
  aT = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  lT = ["paint", "layout", "strict", "content"];
function _h(t) {
  const r = Nh(),
    l = Mn(t) ? Dn(t) : t;
  return (
    rT.some((o) => (l[o] ? l[o] !== "none" : !1)) ||
    (l.containerType ? l.containerType !== "normal" : !1) ||
    (!r && (l.backdropFilter ? l.backdropFilter !== "none" : !1)) ||
    (!r && (l.filter ? l.filter !== "none" : !1)) ||
    aT.some((o) => (l.willChange || "").includes(o)) ||
    lT.some((o) => (l.contain || "").includes(o))
  );
}
function iT(t) {
  let r = la(t);
  for (; Zn(r) && !Bl(r); ) {
    if (_h(r)) return r;
    if (Hu(r)) return null;
    r = la(r);
  }
  return null;
}
function Nh() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const oT = new Set(["html", "body", "#document"]);
function Bl(t) {
  return oT.has(Xl(t));
}
function Dn(t) {
  return sn(t).getComputedStyle(t);
}
function Bu(t) {
  return Mn(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function la(t) {
  if (Xl(t) === "html") return t;
  const r = t.assignedSlot || t.parentNode || (Xg(t) && t.host) || Wn(t);
  return Xg(r) ? r.host : r;
}
function a1(t) {
  const r = la(t);
  return Bl(r)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : Zn(r) && yo(r)
      ? r
      : a1(r);
}
function lo(t, r, l) {
  var o;
  (r === void 0 && (r = []), l === void 0 && (l = !0));
  const s = a1(t),
    c = s === ((o = t.ownerDocument) == null ? void 0 : o.body),
    f = sn(s);
  if (c) {
    const h = Xd(f);
    return r.concat(
      f,
      f.visualViewport || [],
      yo(s) ? s : [],
      h && l ? lo(h) : [],
    );
  }
  return r.concat(s, lo(s, [], l));
}
function Xd(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function l1(t) {
  const r = Dn(t);
  let l = parseFloat(r.width) || 0,
    o = parseFloat(r.height) || 0;
  const s = Zn(t),
    c = s ? t.offsetWidth : l,
    f = s ? t.offsetHeight : o,
    h = pu(l) !== c || pu(o) !== f;
  return (h && ((l = c), (o = f)), { width: l, height: o, $: h });
}
function Lh(t) {
  return Mn(t) ? t : t.contextElement;
}
function zl(t) {
  const r = Lh(t);
  if (!Zn(r)) return Xn(1);
  const l = r.getBoundingClientRect(),
    { width: o, height: s, $: c } = l1(r);
  let f = (c ? pu(l.width) : l.width) / o,
    h = (c ? pu(l.height) : l.height) / s;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const sT = Xn(0);
function i1(t) {
  const r = sn(t);
  return !Nh() || !r.visualViewport
    ? sT
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function uT(t, r, l) {
  return (r === void 0 && (r = !1), !l || (r && l !== sn(t)) ? !1 : r);
}
function ka(t, r, l, o) {
  (r === void 0 && (r = !1), l === void 0 && (l = !1));
  const s = t.getBoundingClientRect(),
    c = Lh(t);
  let f = Xn(1);
  r && (o ? Mn(o) && (f = zl(o)) : (f = zl(t)));
  const h = uT(c, l, o) ? i1(c) : Xn(0);
  let p = (s.left + h.x) / f.x,
    m = (s.top + h.y) / f.y,
    y = s.width / f.x,
    v = s.height / f.y;
  if (c) {
    const w = sn(c),
      x = o && Mn(o) ? sn(o) : o;
    let E = w,
      R = Xd(E);
    for (; R && o && x !== E; ) {
      const C = zl(R),
        M = R.getBoundingClientRect(),
        j = Dn(R),
        U = M.left + (R.clientLeft + parseFloat(j.paddingLeft)) * C.x,
        G = M.top + (R.clientTop + parseFloat(j.paddingTop)) * C.y;
      ((p *= C.x),
        (m *= C.y),
        (y *= C.x),
        (v *= C.y),
        (p += U),
        (m += G),
        (E = sn(R)),
        (R = Xd(E)));
    }
  }
  return gu({ width: y, height: v, x: p, y: m });
}
function ku(t, r) {
  const l = Bu(t).scrollLeft;
  return r ? r.left + l : ka(Wn(t)).left + l;
}
function o1(t, r) {
  const l = t.getBoundingClientRect(),
    o = l.left + r.scrollLeft - ku(t, l),
    s = l.top + r.scrollTop;
  return { x: o, y: s };
}
function cT(t) {
  let { elements: r, rect: l, offsetParent: o, strategy: s } = t;
  const c = s === "fixed",
    f = Wn(o),
    h = r ? Hu(r.floating) : !1;
  if (o === f || (h && c)) return l;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = Xn(1);
  const y = Xn(0),
    v = Zn(o);
  if (
    (v || (!v && !c)) &&
    ((Xl(o) !== "body" || yo(f)) && (p = Bu(o)), Zn(o))
  ) {
    const x = ka(o);
    ((m = zl(o)), (y.x = x.x + o.clientLeft), (y.y = x.y + o.clientTop));
  }
  const w = f && !v && !c ? o1(f, p) : Xn(0);
  return {
    width: l.width * m.x,
    height: l.height * m.y,
    x: l.x * m.x - p.scrollLeft * m.x + y.x + w.x,
    y: l.y * m.y - p.scrollTop * m.y + y.y + w.y,
  };
}
function fT(t) {
  return Array.from(t.getClientRects());
}
function dT(t) {
  const r = Wn(t),
    l = Bu(t),
    o = t.ownerDocument.body,
    s = on(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth),
    c = on(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
  let f = -l.scrollLeft + ku(t);
  const h = -l.scrollTop;
  return (
    Dn(o).direction === "rtl" && (f += on(r.clientWidth, o.clientWidth) - s),
    { width: s, height: c, x: f, y: h }
  );
}
const Zg = 25;
function hT(t, r) {
  const l = sn(t),
    o = Wn(t),
    s = l.visualViewport;
  let c = o.clientWidth,
    f = o.clientHeight,
    h = 0,
    p = 0;
  if (s) {
    ((c = s.width), (f = s.height));
    const y = Nh();
    (!y || (y && r === "fixed")) && ((h = s.offsetLeft), (p = s.offsetTop));
  }
  const m = ku(o);
  if (m <= 0) {
    const y = o.ownerDocument,
      v = y.body,
      w = getComputedStyle(v),
      x =
        (y.compatMode === "CSS1Compat" &&
          parseFloat(w.marginLeft) + parseFloat(w.marginRight)) ||
        0,
      E = Math.abs(o.clientWidth - v.clientWidth - x);
    E <= Zg && (c -= E);
  } else m <= Zg && (c += m);
  return { width: c, height: f, x: h, y: p };
}
const mT = new Set(["absolute", "fixed"]);
function pT(t, r) {
  const l = ka(t, !0, r === "fixed"),
    o = l.top + t.clientTop,
    s = l.left + t.clientLeft,
    c = Zn(t) ? zl(t) : Xn(1),
    f = t.clientWidth * c.x,
    h = t.clientHeight * c.y,
    p = s * c.x,
    m = o * c.y;
  return { width: f, height: h, x: p, y: m };
}
function Ig(t, r, l) {
  let o;
  if (r === "viewport") o = hT(t, l);
  else if (r === "document") o = dT(Wn(t));
  else if (Mn(r)) o = pT(r, l);
  else {
    const s = i1(t);
    o = { x: r.x - s.x, y: r.y - s.y, width: r.width, height: r.height };
  }
  return gu(o);
}
function s1(t, r) {
  const l = la(t);
  return l === r || !Mn(l) || Bl(l)
    ? !1
    : Dn(l).position === "fixed" || s1(l, r);
}
function yT(t, r) {
  const l = r.get(t);
  if (l) return l;
  let o = lo(t, [], !1).filter((h) => Mn(h) && Xl(h) !== "body"),
    s = null;
  const c = Dn(t).position === "fixed";
  let f = c ? la(t) : t;
  for (; Mn(f) && !Bl(f); ) {
    const h = Dn(f),
      p = _h(f);
    (!p && h.position === "fixed" && (s = null),
      (
        c
          ? !p && !s
          : (!p && h.position === "static" && !!s && mT.has(s.position)) ||
            (yo(f) && !p && s1(t, f))
      )
        ? (o = o.filter((y) => y !== f))
        : (s = h),
      (f = la(f)));
  }
  return (r.set(t, o), o);
}
function gT(t) {
  let { element: r, boundary: l, rootBoundary: o, strategy: s } = t;
  const f = [
      ...(l === "clippingAncestors"
        ? Hu(r)
          ? []
          : yT(r, this._c)
        : [].concat(l)),
      o,
    ],
    h = f[0],
    p = f.reduce(
      (m, y) => {
        const v = Ig(r, y, s);
        return (
          (m.top = on(v.top, m.top)),
          (m.right = aa(v.right, m.right)),
          (m.bottom = aa(v.bottom, m.bottom)),
          (m.left = on(v.left, m.left)),
          m
        );
      },
      Ig(r, h, s),
    );
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top,
  };
}
function vT(t) {
  const { width: r, height: l } = l1(t);
  return { width: r, height: l };
}
function bT(t, r, l) {
  const o = Zn(r),
    s = Wn(r),
    c = l === "fixed",
    f = ka(t, !0, c, r);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const p = Xn(0);
  function m() {
    p.x = ku(s);
  }
  if (o || (!o && !c))
    if (((Xl(r) !== "body" || yo(s)) && (h = Bu(r)), o)) {
      const x = ka(r, !0, c, r);
      ((p.x = x.x + r.clientLeft), (p.y = x.y + r.clientTop));
    } else s && m();
  c && !o && s && m();
  const y = s && !o && !c ? o1(s, h) : Xn(0),
    v = f.left + h.scrollLeft - p.x - y.x,
    w = f.top + h.scrollTop - p.y - y.y;
  return { x: v, y: w, width: f.width, height: f.height };
}
function wd(t) {
  return Dn(t).position === "static";
}
function $g(t, r) {
  if (!Zn(t) || Dn(t).position === "fixed") return null;
  if (r) return r(t);
  let l = t.offsetParent;
  return (Wn(t) === l && (l = l.ownerDocument.body), l);
}
function u1(t, r) {
  const l = sn(t);
  if (Hu(t)) return l;
  if (!Zn(t)) {
    let s = la(t);
    for (; s && !Bl(s); ) {
      if (Mn(s) && !wd(s)) return s;
      s = la(s);
    }
    return l;
  }
  let o = $g(t, r);
  for (; o && tT(o) && wd(o); ) o = $g(o, r);
  return o && Bl(o) && wd(o) && !_h(o) ? l : o || iT(t) || l;
}
const ST = async function (t) {
  const r = this.getOffsetParent || u1,
    l = this.getDimensions,
    o = await l(t.floating);
  return {
    reference: bT(t.reference, await r(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function wT(t) {
  return Dn(t).direction === "rtl";
}
const ET = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cT,
  getDocumentElement: Wn,
  getClippingRect: gT,
  getOffsetParent: u1,
  getElementRects: ST,
  getClientRects: fT,
  getDimensions: vT,
  getScale: zl,
  isElement: Mn,
  isRTL: wT,
};
function c1(t, r) {
  return (
    t.x === r.x && t.y === r.y && t.width === r.width && t.height === r.height
  );
}
function xT(t, r) {
  let l = null,
    o;
  const s = Wn(t);
  function c() {
    var h;
    (clearTimeout(o), (h = l) == null || h.disconnect(), (l = null));
  }
  function f(h, p) {
    (h === void 0 && (h = !1), p === void 0 && (p = 1), c());
    const m = t.getBoundingClientRect(),
      { left: y, top: v, width: w, height: x } = m;
    if ((h || r(), !w || !x)) return;
    const E = Zs(v),
      R = Zs(s.clientWidth - (y + w)),
      C = Zs(s.clientHeight - (v + x)),
      M = Zs(y),
      U = {
        rootMargin: -E + "px " + -R + "px " + -C + "px " + -M + "px",
        threshold: on(0, aa(1, p)) || 1,
      };
    let G = !0;
    function P(_) {
      const K = _[0].intersectionRatio;
      if (K !== p) {
        if (!G) return f();
        K
          ? f(!1, K)
          : (o = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      (K === 1 && !c1(m, t.getBoundingClientRect()) && f(), (G = !1));
    }
    try {
      l = new IntersectionObserver(P, { ...U, root: s.ownerDocument });
    } catch {
      l = new IntersectionObserver(P, U);
    }
    l.observe(t);
  }
  return (f(!0), c);
}
function RT(t, r, l, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: c = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = o,
    m = Lh(t),
    y = s || c ? [...(m ? lo(m) : []), ...lo(r)] : [];
  y.forEach((M) => {
    (s && M.addEventListener("scroll", l, { passive: !0 }),
      c && M.addEventListener("resize", l));
  });
  const v = m && h ? xT(m, l) : null;
  let w = -1,
    x = null;
  f &&
    ((x = new ResizeObserver((M) => {
      let [j] = M;
      (j &&
        j.target === m &&
        x &&
        (x.unobserve(r),
        cancelAnimationFrame(w),
        (w = requestAnimationFrame(() => {
          var U;
          (U = x) == null || U.observe(r);
        }))),
        l());
    })),
    m && !p && x.observe(m),
    x.observe(r));
  let E,
    R = p ? ka(t) : null;
  p && C();
  function C() {
    const M = ka(t);
    (R && !c1(R, M) && l(), (R = M), (E = requestAnimationFrame(C)));
  }
  return (
    l(),
    () => {
      var M;
      (y.forEach((j) => {
        (s && j.removeEventListener("scroll", l),
          c && j.removeEventListener("resize", l));
      }),
        v?.(),
        (M = x) == null || M.disconnect(),
        (x = null),
        p && cancelAnimationFrame(E));
    }
  );
}
const CT = ZO,
  AT = IO,
  OT = QO,
  TT = JO,
  MT = KO,
  Jg = VO,
  DT = $O,
  _T = (t, r, l) => {
    const o = new Map(),
      s = { platform: ET, ...l },
      c = { ...s.platform, _c: o };
    return YO(t, r, { ...s, platform: c });
  };
var NT = typeof document < "u",
  LT = function () {},
  iu = NT ? b.useLayoutEffect : LT;
function vu(t, r) {
  if (t === r) return !0;
  if (typeof t != typeof r) return !1;
  if (typeof t == "function" && t.toString() === r.toString()) return !0;
  let l, o, s;
  if (t && r && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((l = t.length), l !== r.length)) return !1;
      for (o = l; o-- !== 0; ) if (!vu(t[o], r[o])) return !1;
      return !0;
    }
    if (((s = Object.keys(t)), (l = s.length), l !== Object.keys(r).length))
      return !1;
    for (o = l; o-- !== 0; ) if (!{}.hasOwnProperty.call(r, s[o])) return !1;
    for (o = l; o-- !== 0; ) {
      const c = s[o];
      if (!(c === "_owner" && t.$$typeof) && !vu(t[c], r[c])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
}
function f1(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wg(t, r) {
  const l = f1(t);
  return Math.round(r * l) / l;
}
function Ed(t) {
  const r = b.useRef(t);
  return (
    iu(() => {
      r.current = t;
    }),
    r
  );
}
function UT(t) {
  t === void 0 && (t = {});
  const {
      placement: r = "bottom",
      strategy: l = "absolute",
      middleware: o = [],
      platform: s,
      elements: { reference: c, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: p,
      open: m,
    } = t,
    [y, v] = b.useState({
      x: 0,
      y: 0,
      strategy: l,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [w, x] = b.useState(o);
  vu(w, o) || x(o);
  const [E, R] = b.useState(null),
    [C, M] = b.useState(null),
    j = b.useCallback((k) => {
      k !== _.current && ((_.current = k), R(k));
    }, []),
    U = b.useCallback((k) => {
      k !== K.current && ((K.current = k), M(k));
    }, []),
    G = c || E,
    P = f || C,
    _ = b.useRef(null),
    K = b.useRef(null),
    V = b.useRef(y),
    ae = p != null,
    oe = Ed(p),
    we = Ed(s),
    Ee = Ed(m),
    ue = b.useCallback(() => {
      if (!_.current || !K.current) return;
      const k = { placement: r, strategy: l, middleware: w };
      (we.current && (k.platform = we.current),
        _T(_.current, K.current, k).then((ne) => {
          const A = { ...ne, isPositioned: Ee.current !== !1 };
          se.current &&
            !vu(V.current, A) &&
            ((V.current = A),
            xu.flushSync(() => {
              v(A);
            }));
        }));
    }, [w, r, l, we, Ee]);
  iu(() => {
    m === !1 &&
      V.current.isPositioned &&
      ((V.current.isPositioned = !1), v((k) => ({ ...k, isPositioned: !1 })));
  }, [m]);
  const se = b.useRef(!1);
  (iu(
    () => (
      (se.current = !0),
      () => {
        se.current = !1;
      }
    ),
    [],
  ),
    iu(() => {
      if ((G && (_.current = G), P && (K.current = P), G && P)) {
        if (oe.current) return oe.current(G, P, ue);
        ue();
      }
    }, [G, P, ue, oe, ae]));
  const be = b.useMemo(
      () => ({ reference: _, floating: K, setReference: j, setFloating: U }),
      [j, U],
    ),
    N = b.useMemo(() => ({ reference: G, floating: P }), [G, P]),
    $ = b.useMemo(() => {
      const k = { position: l, left: 0, top: 0 };
      if (!N.floating) return k;
      const ne = Wg(N.floating, y.x),
        A = Wg(N.floating, y.y);
      return h
        ? {
            ...k,
            transform: "translate(" + ne + "px, " + A + "px)",
            ...(f1(N.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: l, left: ne, top: A };
    }, [l, h, N.floating, y.x, y.y]);
  return b.useMemo(
    () => ({ ...y, update: ue, refs: be, elements: N, floatingStyles: $ }),
    [y, ue, be, N, $],
  );
}
const zT = (t) => {
    function r(l) {
      return {}.hasOwnProperty.call(l, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(l) {
        const { element: o, padding: s } = typeof t == "function" ? t(l) : t;
        return o && r(o)
          ? o.current != null
            ? Jg({ element: o.current, padding: s }).fn(l)
            : {}
          : o
            ? Jg({ element: o, padding: s }).fn(l)
            : {};
      },
    };
  },
  jT = (t, r) => ({ ...CT(t), options: [t, r] }),
  PT = (t, r) => ({ ...AT(t), options: [t, r] }),
  HT = (t, r) => ({ ...DT(t), options: [t, r] }),
  BT = (t, r) => ({ ...OT(t), options: [t, r] }),
  kT = (t, r) => ({ ...TT(t), options: [t, r] }),
  qT = (t, r) => ({ ...MT(t), options: [t, r] }),
  FT = (t, r) => ({ ...zT(t), options: [t, r] });
var GT = "Arrow",
  d1 = b.forwardRef((t, r) => {
    const { children: l, width: o = 10, height: s = 5, ...c } = t;
    return O.jsx(gt.svg, {
      ...c,
      ref: r,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? l : O.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
d1.displayName = GT;
var YT = d1;
function VT(t) {
  const [r, l] = b.useState(void 0);
  return (
    ra(() => {
      if (t) {
        l({ width: t.offsetWidth, height: t.offsetHeight });
        const o = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const c = s[0];
          let f, h;
          if ("borderBoxSize" in c) {
            const p = c.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            ((f = m.inlineSize), (h = m.blockSize));
          } else ((f = t.offsetWidth), (h = t.offsetHeight));
          l({ width: f, height: h });
        });
        return (o.observe(t, { box: "border-box" }), () => o.unobserve(t));
      } else l(void 0);
    }, [t]),
    r
  );
}
var Uh = "Popper",
  [h1, m1] = Fl(Uh),
  [QT, p1] = h1(Uh),
  y1 = (t) => {
    const { __scopePopper: r, children: l } = t,
      [o, s] = b.useState(null);
    return O.jsx(QT, { scope: r, anchor: o, onAnchorChange: s, children: l });
  };
y1.displayName = Uh;
var g1 = "PopperAnchor",
  v1 = b.forwardRef((t, r) => {
    const { __scopePopper: l, virtualRef: o, ...s } = t,
      c = p1(g1, l),
      f = b.useRef(null),
      h = Nt(r, f),
      p = b.useRef(null);
    return (
      b.useEffect(() => {
        const m = p.current;
        ((p.current = o?.current || f.current),
          m !== p.current && c.onAnchorChange(p.current));
      }),
      o ? null : O.jsx(gt.div, { ...s, ref: h })
    );
  });
v1.displayName = g1;
var zh = "PopperContent",
  [KT, XT] = h1(zh),
  b1 = b.forwardRef((t, r) => {
    const {
        __scopePopper: l,
        side: o = "bottom",
        sideOffset: s = 0,
        align: c = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: y = 0,
        sticky: v = "partial",
        hideWhenDetached: w = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: E,
        ...R
      } = t,
      C = p1(zh, l),
      [M, j] = b.useState(null),
      U = Nt(r, (Re) => j(Re)),
      [G, P] = b.useState(null),
      _ = VT(G),
      K = _?.width ?? 0,
      V = _?.height ?? 0,
      ae = o + (c !== "center" ? "-" + c : ""),
      oe =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      we = Array.isArray(m) ? m : [m],
      Ee = we.length > 0,
      ue = { padding: oe, boundary: we.filter(IT), altBoundary: Ee },
      {
        refs: se,
        floatingStyles: be,
        placement: N,
        isPositioned: $,
        middlewareData: k,
      } = UT({
        strategy: "fixed",
        placement: ae,
        whileElementsMounted: (...Re) =>
          RT(...Re, { animationFrame: x === "always" }),
        elements: { reference: C.anchor },
        middleware: [
          jT({ mainAxis: s + V, alignmentAxis: f }),
          p &&
            PT({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? HT() : void 0,
              ...ue,
            }),
          p && BT({ ...ue }),
          kT({
            ...ue,
            apply: ({
              elements: Re,
              rects: Fe,
              availableWidth: Ct,
              availableHeight: We,
            }) => {
              const { width: At, height: Zt } = Fe.reference,
                Un = Re.floating.style;
              (Un.setProperty("--radix-popper-available-width", `${Ct}px`),
                Un.setProperty("--radix-popper-available-height", `${We}px`),
                Un.setProperty("--radix-popper-anchor-width", `${At}px`),
                Un.setProperty("--radix-popper-anchor-height", `${Zt}px`));
            },
          }),
          G && FT({ element: G, padding: h }),
          $T({ arrowWidth: K, arrowHeight: V }),
          w && qT({ strategy: "referenceHidden", ...ue }),
        ],
      }),
      [ne, A] = E1(N),
      Z = wr(E);
    ra(() => {
      $ && Z?.();
    }, [$, Z]);
    const re = k.arrow?.x,
      ee = k.arrow?.y,
      ie = k.arrow?.centerOffset !== 0,
      [Oe, me] = b.useState();
    return (
      ra(() => {
        M && me(window.getComputedStyle(M).zIndex);
      }, [M]),
      O.jsx("div", {
        ref: se.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...be,
          transform: $ ? be.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Oe,
          "--radix-popper-transform-origin": [
            k.transformOrigin?.x,
            k.transformOrigin?.y,
          ].join(" "),
          ...(k.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: O.jsx(KT, {
          scope: l,
          placedSide: ne,
          onArrowChange: P,
          arrowX: re,
          arrowY: ee,
          shouldHideArrow: ie,
          children: O.jsx(gt.div, {
            "data-side": ne,
            "data-align": A,
            ...R,
            ref: U,
            style: { ...R.style, animation: $ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
b1.displayName = zh;
var S1 = "PopperArrow",
  ZT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  w1 = b.forwardRef(function (r, l) {
    const { __scopePopper: o, ...s } = r,
      c = XT(S1, o),
      f = ZT[c.placedSide];
    return O.jsx("span", {
      ref: c.onArrowChange,
      style: {
        position: "absolute",
        left: c.arrowX,
        top: c.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[c.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[c.placedSide],
        visibility: c.shouldHideArrow ? "hidden" : void 0,
      },
      children: O.jsx(YT, {
        ...s,
        ref: l,
        style: { ...s.style, display: "block" },
      }),
    });
  });
w1.displayName = S1;
function IT(t) {
  return t !== null;
}
var $T = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(r) {
    const { placement: l, rects: o, middlewareData: s } = r,
      f = s.arrow?.centerOffset !== 0,
      h = f ? 0 : t.arrowWidth,
      p = f ? 0 : t.arrowHeight,
      [m, y] = E1(l),
      v = { start: "0%", center: "50%", end: "100%" }[y],
      w = (s.arrow?.x ?? 0) + h / 2,
      x = (s.arrow?.y ?? 0) + p / 2;
    let E = "",
      R = "";
    return (
      m === "bottom"
        ? ((E = f ? v : `${w}px`), (R = `${-p}px`))
        : m === "top"
          ? ((E = f ? v : `${w}px`), (R = `${o.floating.height + p}px`))
          : m === "right"
            ? ((E = `${-p}px`), (R = f ? v : `${x}px`))
            : m === "left" &&
              ((E = `${o.floating.width + p}px`), (R = f ? v : `${x}px`)),
      { data: { x: E, y: R } }
    );
  },
});
function E1(t) {
  const [r, l = "center"] = t.split("-");
  return [r, l];
}
var JT = y1,
  WT = v1,
  eM = b1,
  tM = w1,
  xd = "rovingFocusGroup.onEntryFocus",
  nM = { bubbles: !1, cancelable: !0 },
  go = "RovingFocusGroup",
  [Zd, x1, rM] = Wb(go),
  [aM, R1] = Fl(go, [rM]),
  [lM, iM] = aM(go),
  C1 = b.forwardRef((t, r) =>
    O.jsx(Zd.Provider, {
      scope: t.__scopeRovingFocusGroup,
      children: O.jsx(Zd.Slot, {
        scope: t.__scopeRovingFocusGroup,
        children: O.jsx(oM, { ...t, ref: r }),
      }),
    }),
  );
C1.displayName = go;
var oM = b.forwardRef((t, r) => {
    const {
        __scopeRovingFocusGroup: l,
        orientation: o,
        loop: s = !1,
        dir: c,
        currentTabStopId: f,
        defaultCurrentTabStopId: h,
        onCurrentTabStopIdChange: p,
        onEntryFocus: m,
        preventScrollOnEntryFocus: y = !1,
        ...v
      } = t,
      w = b.useRef(null),
      x = Nt(r, w),
      E = e1(c),
      [R, C] = ch({ prop: f, defaultProp: h ?? null, onChange: p, caller: go }),
      [M, j] = b.useState(!1),
      U = wr(m),
      G = x1(l),
      P = b.useRef(!1),
      [_, K] = b.useState(0);
    return (
      b.useEffect(() => {
        const V = w.current;
        if (V)
          return (
            V.addEventListener(xd, U),
            () => V.removeEventListener(xd, U)
          );
      }, [U]),
      O.jsx(lM, {
        scope: l,
        orientation: o,
        dir: E,
        loop: s,
        currentTabStopId: R,
        onItemFocus: b.useCallback((V) => C(V), [C]),
        onItemShiftTab: b.useCallback(() => j(!0), []),
        onFocusableItemAdd: b.useCallback(() => K((V) => V + 1), []),
        onFocusableItemRemove: b.useCallback(() => K((V) => V - 1), []),
        children: O.jsx(gt.div, {
          tabIndex: M || _ === 0 ? -1 : 0,
          "data-orientation": o,
          ...v,
          ref: x,
          style: { outline: "none", ...t.style },
          onMouseDown: Pe(t.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: Pe(t.onFocus, (V) => {
            const ae = !P.current;
            if (V.target === V.currentTarget && ae && !M) {
              const oe = new CustomEvent(xd, nM);
              if ((V.currentTarget.dispatchEvent(oe), !oe.defaultPrevented)) {
                const we = G().filter((N) => N.focusable),
                  Ee = we.find((N) => N.active),
                  ue = we.find((N) => N.id === R),
                  be = [Ee, ue, ...we]
                    .filter(Boolean)
                    .map((N) => N.ref.current);
                T1(be, y);
              }
            }
            P.current = !1;
          }),
          onBlur: Pe(t.onBlur, () => j(!1)),
        }),
      })
    );
  }),
  A1 = "RovingFocusGroupItem",
  O1 = b.forwardRef((t, r) => {
    const {
        __scopeRovingFocusGroup: l,
        focusable: o = !0,
        active: s = !1,
        tabStopId: c,
        children: f,
        ...h
      } = t,
      p = Ll(),
      m = c || p,
      y = iM(A1, l),
      v = y.currentTabStopId === m,
      w = x1(l),
      {
        onFocusableItemAdd: x,
        onFocusableItemRemove: E,
        currentTabStopId: R,
      } = y;
    return (
      b.useEffect(() => {
        if (o) return (x(), () => E());
      }, [o, x, E]),
      O.jsx(Zd.ItemSlot, {
        scope: l,
        id: m,
        focusable: o,
        active: s,
        children: O.jsx(gt.span, {
          tabIndex: v ? 0 : -1,
          "data-orientation": y.orientation,
          ...h,
          ref: r,
          onMouseDown: Pe(t.onMouseDown, (C) => {
            o ? y.onItemFocus(m) : C.preventDefault();
          }),
          onFocus: Pe(t.onFocus, () => y.onItemFocus(m)),
          onKeyDown: Pe(t.onKeyDown, (C) => {
            if (C.key === "Tab" && C.shiftKey) {
              y.onItemShiftTab();
              return;
            }
            if (C.target !== C.currentTarget) return;
            const M = cM(C, y.orientation, y.dir);
            if (M !== void 0) {
              if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
              C.preventDefault();
              let U = w()
                .filter((G) => G.focusable)
                .map((G) => G.ref.current);
              if (M === "last") U.reverse();
              else if (M === "prev" || M === "next") {
                M === "prev" && U.reverse();
                const G = U.indexOf(C.currentTarget);
                U = y.loop ? fM(U, G + 1) : U.slice(G + 1);
              }
              setTimeout(() => T1(U));
            }
          }),
          children:
            typeof f == "function"
              ? f({ isCurrentTabStop: v, hasTabStop: R != null })
              : f,
        }),
      })
    );
  });
O1.displayName = A1;
var sM = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function uM(t, r) {
  return r !== "rtl"
    ? t
    : t === "ArrowLeft"
      ? "ArrowRight"
      : t === "ArrowRight"
        ? "ArrowLeft"
        : t;
}
function cM(t, r, l) {
  const o = uM(t.key, l);
  if (
    !(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) &&
    !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))
  )
    return sM[o];
}
function T1(t, r = !1) {
  const l = document.activeElement;
  for (const o of t)
    if (
      o === l ||
      (o.focus({ preventScroll: r }), document.activeElement !== l)
    )
      return;
}
function fM(t, r) {
  return t.map((l, o) => t[(r + o) % t.length]);
}
var dM = C1,
  hM = O1,
  Id = ["Enter", " "],
  mM = ["ArrowDown", "PageUp", "Home"],
  M1 = ["ArrowUp", "PageDown", "End"],
  pM = [...mM, ...M1],
  yM = { ltr: [...Id, "ArrowRight"], rtl: [...Id, "ArrowLeft"] },
  gM = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  vo = "Menu",
  [io, vM, bM] = Wb(vo),
  [Fa, D1] = Fl(vo, [bM, m1, R1]),
  qu = m1(),
  _1 = R1(),
  [SM, Ga] = Fa(vo),
  [wM, bo] = Fa(vo),
  N1 = (t) => {
    const {
        __scopeMenu: r,
        open: l = !1,
        children: o,
        dir: s,
        onOpenChange: c,
        modal: f = !0,
      } = t,
      h = qu(r),
      [p, m] = b.useState(null),
      y = b.useRef(!1),
      v = wr(c),
      w = e1(s);
    return (
      b.useEffect(() => {
        const x = () => {
            ((y.current = !0),
              document.addEventListener("pointerdown", E, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", E, {
                capture: !0,
                once: !0,
              }));
          },
          E = () => (y.current = !1);
        return (
          document.addEventListener("keydown", x, { capture: !0 }),
          () => {
            (document.removeEventListener("keydown", x, { capture: !0 }),
              document.removeEventListener("pointerdown", E, { capture: !0 }),
              document.removeEventListener("pointermove", E, { capture: !0 }));
          }
        );
      }, []),
      O.jsx(JT, {
        ...h,
        children: O.jsx(SM, {
          scope: r,
          open: l,
          onOpenChange: v,
          content: p,
          onContentChange: m,
          children: O.jsx(wM, {
            scope: r,
            onClose: b.useCallback(() => v(!1), [v]),
            isUsingKeyboardRef: y,
            dir: w,
            modal: f,
            children: o,
          }),
        }),
      })
    );
  };
N1.displayName = vo;
var EM = "MenuAnchor",
  jh = b.forwardRef((t, r) => {
    const { __scopeMenu: l, ...o } = t,
      s = qu(l);
    return O.jsx(WT, { ...s, ...o, ref: r });
  });
jh.displayName = EM;
var Ph = "MenuPortal",
  [xM, L1] = Fa(Ph, { forceMount: void 0 }),
  U1 = (t) => {
    const { __scopeMenu: r, forceMount: l, children: o, container: s } = t,
      c = Ga(Ph, r);
    return O.jsx(xM, {
      scope: r,
      forceMount: l,
      children: O.jsx(oa, {
        present: l || c.open,
        children: O.jsx(hh, { asChild: !0, container: s, children: o }),
      }),
    });
  };
U1.displayName = Ph;
var wn = "MenuContent",
  [RM, Hh] = Fa(wn),
  z1 = b.forwardRef((t, r) => {
    const l = L1(wn, t.__scopeMenu),
      { forceMount: o = l.forceMount, ...s } = t,
      c = Ga(wn, t.__scopeMenu),
      f = bo(wn, t.__scopeMenu);
    return O.jsx(io.Provider, {
      scope: t.__scopeMenu,
      children: O.jsx(oa, {
        present: o || c.open,
        children: O.jsx(io.Slot, {
          scope: t.__scopeMenu,
          children: f.modal
            ? O.jsx(CM, { ...s, ref: r })
            : O.jsx(AM, { ...s, ref: r }),
        }),
      }),
    });
  }),
  CM = b.forwardRef((t, r) => {
    const l = Ga(wn, t.__scopeMenu),
      o = b.useRef(null),
      s = Nt(r, o);
    return (
      b.useEffect(() => {
        const c = o.current;
        if (c) return tb(c);
      }, []),
      O.jsx(Bh, {
        ...t,
        ref: s,
        trapFocus: l.open,
        disableOutsidePointerEvents: l.open,
        disableOutsideScroll: !0,
        onFocusOutside: Pe(t.onFocusOutside, (c) => c.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => l.onOpenChange(!1),
      })
    );
  }),
  AM = b.forwardRef((t, r) => {
    const l = Ga(wn, t.__scopeMenu);
    return O.jsx(Bh, {
      ...t,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => l.onOpenChange(!1),
    });
  }),
  OM = no("MenuContent.ScrollLock"),
  Bh = b.forwardRef((t, r) => {
    const {
        __scopeMenu: l,
        loop: o = !1,
        trapFocus: s,
        onOpenAutoFocus: c,
        onCloseAutoFocus: f,
        disableOutsidePointerEvents: h,
        onEntryFocus: p,
        onEscapeKeyDown: m,
        onPointerDownOutside: y,
        onFocusOutside: v,
        onInteractOutside: w,
        onDismiss: x,
        disableOutsideScroll: E,
        ...R
      } = t,
      C = Ga(wn, l),
      M = bo(wn, l),
      j = qu(l),
      U = _1(l),
      G = vM(l),
      [P, _] = b.useState(null),
      K = b.useRef(null),
      V = Nt(r, K, C.onContentChange),
      ae = b.useRef(0),
      oe = b.useRef(""),
      we = b.useRef(0),
      Ee = b.useRef(null),
      ue = b.useRef("right"),
      se = b.useRef(0),
      be = E ? mh : b.Fragment,
      N = E ? { as: OM, allowPinchZoom: !0 } : void 0,
      $ = (ne) => {
        const A = oe.current + ne,
          Z = G().filter((Re) => !Re.disabled),
          re = document.activeElement,
          ee = Z.find((Re) => Re.ref.current === re)?.textValue,
          ie = Z.map((Re) => Re.textValue),
          Oe = BM(ie, A, ee),
          me = Z.find((Re) => Re.textValue === Oe)?.ref.current;
        ((function Re(Fe) {
          ((oe.current = Fe),
            window.clearTimeout(ae.current),
            Fe !== "" && (ae.current = window.setTimeout(() => Re(""), 1e3)));
        })(A),
          me && setTimeout(() => me.focus()));
      };
    (b.useEffect(() => () => window.clearTimeout(ae.current), []), Qv());
    const k = b.useCallback(
      (ne) => ue.current === Ee.current?.side && qM(ne, Ee.current?.area),
      [],
    );
    return O.jsx(RM, {
      scope: l,
      searchRef: oe,
      onItemEnter: b.useCallback(
        (ne) => {
          k(ne) && ne.preventDefault();
        },
        [k],
      ),
      onItemLeave: b.useCallback(
        (ne) => {
          k(ne) || (K.current?.focus(), _(null));
        },
        [k],
      ),
      onTriggerLeave: b.useCallback(
        (ne) => {
          k(ne) && ne.preventDefault();
        },
        [k],
      ),
      pointerGraceTimerRef: we,
      onPointerGraceIntentChange: b.useCallback((ne) => {
        Ee.current = ne;
      }, []),
      children: O.jsx(be, {
        ...N,
        children: O.jsx(dh, {
          asChild: !0,
          trapped: s,
          onMountAutoFocus: Pe(c, (ne) => {
            (ne.preventDefault(), K.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: f,
          children: O.jsx(fh, {
            asChild: !0,
            disableOutsidePointerEvents: h,
            onEscapeKeyDown: m,
            onPointerDownOutside: y,
            onFocusOutside: v,
            onInteractOutside: w,
            onDismiss: x,
            children: O.jsx(dM, {
              asChild: !0,
              ...U,
              dir: M.dir,
              orientation: "vertical",
              loop: o,
              currentTabStopId: P,
              onCurrentTabStopIdChange: _,
              onEntryFocus: Pe(p, (ne) => {
                M.isUsingKeyboardRef.current || ne.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: O.jsx(eM, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": $1(C.open),
                "data-radix-menu-content": "",
                dir: M.dir,
                ...j,
                ...R,
                ref: V,
                style: { outline: "none", ...R.style },
                onKeyDown: Pe(R.onKeyDown, (ne) => {
                  const Z =
                      ne.target.closest("[data-radix-menu-content]") ===
                      ne.currentTarget,
                    re = ne.ctrlKey || ne.altKey || ne.metaKey,
                    ee = ne.key.length === 1;
                  Z &&
                    (ne.key === "Tab" && ne.preventDefault(),
                    !re && ee && $(ne.key));
                  const ie = K.current;
                  if (ne.target !== ie || !pM.includes(ne.key)) return;
                  ne.preventDefault();
                  const me = G()
                    .filter((Re) => !Re.disabled)
                    .map((Re) => Re.ref.current);
                  (M1.includes(ne.key) && me.reverse(), PM(me));
                }),
                onBlur: Pe(t.onBlur, (ne) => {
                  ne.currentTarget.contains(ne.target) ||
                    (window.clearTimeout(ae.current), (oe.current = ""));
                }),
                onPointerMove: Pe(
                  t.onPointerMove,
                  oo((ne) => {
                    const A = ne.target,
                      Z = se.current !== ne.clientX;
                    if (ne.currentTarget.contains(A) && Z) {
                      const re = ne.clientX > se.current ? "right" : "left";
                      ((ue.current = re), (se.current = ne.clientX));
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
z1.displayName = wn;
var TM = "MenuGroup",
  kh = b.forwardRef((t, r) => {
    const { __scopeMenu: l, ...o } = t;
    return O.jsx(gt.div, { role: "group", ...o, ref: r });
  });
kh.displayName = TM;
var MM = "MenuLabel",
  j1 = b.forwardRef((t, r) => {
    const { __scopeMenu: l, ...o } = t;
    return O.jsx(gt.div, { ...o, ref: r });
  });
j1.displayName = MM;
var bu = "MenuItem",
  ev = "menu.itemSelect",
  Fu = b.forwardRef((t, r) => {
    const { disabled: l = !1, onSelect: o, ...s } = t,
      c = b.useRef(null),
      f = bo(bu, t.__scopeMenu),
      h = Hh(bu, t.__scopeMenu),
      p = Nt(r, c),
      m = b.useRef(!1),
      y = () => {
        const v = c.current;
        if (!l && v) {
          const w = new CustomEvent(ev, { bubbles: !0, cancelable: !0 });
          (v.addEventListener(ev, (x) => o?.(x), { once: !0 }),
            Fv(v, w),
            w.defaultPrevented ? (m.current = !1) : f.onClose());
        }
      };
    return O.jsx(P1, {
      ...s,
      ref: p,
      disabled: l,
      onClick: Pe(t.onClick, y),
      onPointerDown: (v) => {
        (t.onPointerDown?.(v), (m.current = !0));
      },
      onPointerUp: Pe(t.onPointerUp, (v) => {
        m.current || v.currentTarget?.click();
      }),
      onKeyDown: Pe(t.onKeyDown, (v) => {
        const w = h.searchRef.current !== "";
        l ||
          (w && v.key === " ") ||
          (Id.includes(v.key) && (v.currentTarget.click(), v.preventDefault()));
      }),
    });
  });
Fu.displayName = bu;
var P1 = b.forwardRef((t, r) => {
    const { __scopeMenu: l, disabled: o = !1, textValue: s, ...c } = t,
      f = Hh(bu, l),
      h = _1(l),
      p = b.useRef(null),
      m = Nt(r, p),
      [y, v] = b.useState(!1),
      [w, x] = b.useState("");
    return (
      b.useEffect(() => {
        const E = p.current;
        E && x((E.textContent ?? "").trim());
      }, [c.children]),
      O.jsx(io.ItemSlot, {
        scope: l,
        disabled: o,
        textValue: s ?? w,
        children: O.jsx(hM, {
          asChild: !0,
          ...h,
          focusable: !o,
          children: O.jsx(gt.div, {
            role: "menuitem",
            "data-highlighted": y ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...c,
            ref: m,
            onPointerMove: Pe(
              t.onPointerMove,
              oo((E) => {
                o
                  ? f.onItemLeave(E)
                  : (f.onItemEnter(E),
                    E.defaultPrevented ||
                      E.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: Pe(
              t.onPointerLeave,
              oo((E) => f.onItemLeave(E)),
            ),
            onFocus: Pe(t.onFocus, () => v(!0)),
            onBlur: Pe(t.onBlur, () => v(!1)),
          }),
        }),
      })
    );
  }),
  DM = "MenuCheckboxItem",
  H1 = b.forwardRef((t, r) => {
    const { checked: l = !1, onCheckedChange: o, ...s } = t;
    return O.jsx(G1, {
      scope: t.__scopeMenu,
      checked: l,
      children: O.jsx(Fu, {
        role: "menuitemcheckbox",
        "aria-checked": Su(l) ? "mixed" : l,
        ...s,
        ref: r,
        "data-state": Fh(l),
        onSelect: Pe(s.onSelect, () => o?.(Su(l) ? !0 : !l), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
H1.displayName = DM;
var B1 = "MenuRadioGroup",
  [_M, NM] = Fa(B1, { value: void 0, onValueChange: () => {} }),
  k1 = b.forwardRef((t, r) => {
    const { value: l, onValueChange: o, ...s } = t,
      c = wr(o);
    return O.jsx(_M, {
      scope: t.__scopeMenu,
      value: l,
      onValueChange: c,
      children: O.jsx(kh, { ...s, ref: r }),
    });
  });
k1.displayName = B1;
var q1 = "MenuRadioItem",
  F1 = b.forwardRef((t, r) => {
    const { value: l, ...o } = t,
      s = NM(q1, t.__scopeMenu),
      c = l === s.value;
    return O.jsx(G1, {
      scope: t.__scopeMenu,
      checked: c,
      children: O.jsx(Fu, {
        role: "menuitemradio",
        "aria-checked": c,
        ...o,
        ref: r,
        "data-state": Fh(c),
        onSelect: Pe(o.onSelect, () => s.onValueChange?.(l), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
F1.displayName = q1;
var qh = "MenuItemIndicator",
  [G1, LM] = Fa(qh, { checked: !1 }),
  Y1 = b.forwardRef((t, r) => {
    const { __scopeMenu: l, forceMount: o, ...s } = t,
      c = LM(qh, l);
    return O.jsx(oa, {
      present: o || Su(c.checked) || c.checked === !0,
      children: O.jsx(gt.span, { ...s, ref: r, "data-state": Fh(c.checked) }),
    });
  });
Y1.displayName = qh;
var UM = "MenuSeparator",
  V1 = b.forwardRef((t, r) => {
    const { __scopeMenu: l, ...o } = t;
    return O.jsx(gt.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...o,
      ref: r,
    });
  });
V1.displayName = UM;
var zM = "MenuArrow",
  Q1 = b.forwardRef((t, r) => {
    const { __scopeMenu: l, ...o } = t,
      s = qu(l);
    return O.jsx(tM, { ...s, ...o, ref: r });
  });
Q1.displayName = zM;
var jM = "MenuSub",
  [BD, K1] = Fa(jM),
  Ji = "MenuSubTrigger",
  X1 = b.forwardRef((t, r) => {
    const l = Ga(Ji, t.__scopeMenu),
      o = bo(Ji, t.__scopeMenu),
      s = K1(Ji, t.__scopeMenu),
      c = Hh(Ji, t.__scopeMenu),
      f = b.useRef(null),
      { pointerGraceTimerRef: h, onPointerGraceIntentChange: p } = c,
      m = { __scopeMenu: t.__scopeMenu },
      y = b.useCallback(() => {
        (f.current && window.clearTimeout(f.current), (f.current = null));
      }, []);
    return (
      b.useEffect(() => y, [y]),
      b.useEffect(() => {
        const v = h.current;
        return () => {
          (window.clearTimeout(v), p(null));
        };
      }, [h, p]),
      O.jsx(jh, {
        asChild: !0,
        ...m,
        children: O.jsx(P1, {
          id: s.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": l.open,
          "aria-controls": s.contentId,
          "data-state": $1(l.open),
          ...t,
          ref: Ru(r, s.onTriggerChange),
          onClick: (v) => {
            (t.onClick?.(v),
              !(t.disabled || v.defaultPrevented) &&
                (v.currentTarget.focus(), l.open || l.onOpenChange(!0)));
          },
          onPointerMove: Pe(
            t.onPointerMove,
            oo((v) => {
              (c.onItemEnter(v),
                !v.defaultPrevented &&
                  !t.disabled &&
                  !l.open &&
                  !f.current &&
                  (c.onPointerGraceIntentChange(null),
                  (f.current = window.setTimeout(() => {
                    (l.onOpenChange(!0), y());
                  }, 100))));
            }),
          ),
          onPointerLeave: Pe(
            t.onPointerLeave,
            oo((v) => {
              y();
              const w = l.content?.getBoundingClientRect();
              if (w) {
                const x = l.content?.dataset.side,
                  E = x === "right",
                  R = E ? -5 : 5,
                  C = w[E ? "left" : "right"],
                  M = w[E ? "right" : "left"];
                (c.onPointerGraceIntentChange({
                  area: [
                    { x: v.clientX + R, y: v.clientY },
                    { x: C, y: w.top },
                    { x: M, y: w.top },
                    { x: M, y: w.bottom },
                    { x: C, y: w.bottom },
                  ],
                  side: x,
                }),
                  window.clearTimeout(h.current),
                  (h.current = window.setTimeout(
                    () => c.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((c.onTriggerLeave(v), v.defaultPrevented)) return;
                c.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: Pe(t.onKeyDown, (v) => {
            const w = c.searchRef.current !== "";
            t.disabled ||
              (w && v.key === " ") ||
              (yM[o.dir].includes(v.key) &&
                (l.onOpenChange(!0), l.content?.focus(), v.preventDefault()));
          }),
        }),
      })
    );
  });
X1.displayName = Ji;
var Z1 = "MenuSubContent",
  I1 = b.forwardRef((t, r) => {
    const l = L1(wn, t.__scopeMenu),
      { forceMount: o = l.forceMount, ...s } = t,
      c = Ga(wn, t.__scopeMenu),
      f = bo(wn, t.__scopeMenu),
      h = K1(Z1, t.__scopeMenu),
      p = b.useRef(null),
      m = Nt(r, p);
    return O.jsx(io.Provider, {
      scope: t.__scopeMenu,
      children: O.jsx(oa, {
        present: o || c.open,
        children: O.jsx(io.Slot, {
          scope: t.__scopeMenu,
          children: O.jsx(Bh, {
            id: h.contentId,
            "aria-labelledby": h.triggerId,
            ...s,
            ref: m,
            align: "start",
            side: f.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (y) => {
              (f.isUsingKeyboardRef.current && p.current?.focus(),
                y.preventDefault());
            },
            onCloseAutoFocus: (y) => y.preventDefault(),
            onFocusOutside: Pe(t.onFocusOutside, (y) => {
              y.target !== h.trigger && c.onOpenChange(!1);
            }),
            onEscapeKeyDown: Pe(t.onEscapeKeyDown, (y) => {
              (f.onClose(), y.preventDefault());
            }),
            onKeyDown: Pe(t.onKeyDown, (y) => {
              const v = y.currentTarget.contains(y.target),
                w = gM[f.dir].includes(y.key);
              v &&
                w &&
                (c.onOpenChange(!1), h.trigger?.focus(), y.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
I1.displayName = Z1;
function $1(t) {
  return t ? "open" : "closed";
}
function Su(t) {
  return t === "indeterminate";
}
function Fh(t) {
  return Su(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function PM(t) {
  const r = document.activeElement;
  for (const l of t)
    if (l === r || (l.focus(), document.activeElement !== r)) return;
}
function HM(t, r) {
  return t.map((l, o) => t[(r + o) % t.length]);
}
function BM(t, r, l) {
  const s = r.length > 1 && Array.from(r).every((m) => m === r[0]) ? r[0] : r,
    c = l ? t.indexOf(l) : -1;
  let f = HM(t, Math.max(c, 0));
  s.length === 1 && (f = f.filter((m) => m !== l));
  const p = f.find((m) => m.toLowerCase().startsWith(s.toLowerCase()));
  return p !== l ? p : void 0;
}
function kM(t, r) {
  const { x: l, y: o } = t;
  let s = !1;
  for (let c = 0, f = r.length - 1; c < r.length; f = c++) {
    const h = r[c],
      p = r[f],
      m = h.x,
      y = h.y,
      v = p.x,
      w = p.y;
    y > o != w > o && l < ((v - m) * (o - y)) / (w - y) + m && (s = !s);
  }
  return s;
}
function qM(t, r) {
  if (!r) return !1;
  const l = { x: t.clientX, y: t.clientY };
  return kM(l, r);
}
function oo(t) {
  return (r) => (r.pointerType === "mouse" ? t(r) : void 0);
}
var FM = N1,
  GM = jh,
  YM = U1,
  VM = z1,
  QM = kh,
  KM = j1,
  XM = Fu,
  ZM = H1,
  IM = k1,
  $M = F1,
  JM = Y1,
  WM = V1,
  e4 = Q1,
  t4 = X1,
  n4 = I1,
  Gu = "DropdownMenu",
  [r4, kD] = Fl(Gu, [D1]),
  Bt = D1(),
  [a4, J1] = r4(Gu),
  W1 = (t) => {
    const {
        __scopeDropdownMenu: r,
        children: l,
        dir: o,
        open: s,
        defaultOpen: c,
        onOpenChange: f,
        modal: h = !0,
      } = t,
      p = Bt(r),
      m = b.useRef(null),
      [y, v] = ch({ prop: s, defaultProp: c ?? !1, onChange: f, caller: Gu });
    return O.jsx(a4, {
      scope: r,
      triggerId: Ll(),
      triggerRef: m,
      contentId: Ll(),
      open: y,
      onOpenChange: v,
      onOpenToggle: b.useCallback(() => v((w) => !w), [v]),
      modal: h,
      children: O.jsx(FM, {
        ...p,
        open: y,
        onOpenChange: v,
        dir: o,
        modal: h,
        children: l,
      }),
    });
  };
W1.displayName = Gu;
var e2 = "DropdownMenuTrigger",
  t2 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, disabled: o = !1, ...s } = t,
      c = J1(e2, l),
      f = Bt(l);
    return O.jsx(GM, {
      asChild: !0,
      ...f,
      children: O.jsx(gt.button, {
        type: "button",
        id: c.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": c.open,
        "aria-controls": c.open ? c.contentId : void 0,
        "data-state": c.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...s,
        ref: Ru(r, c.triggerRef),
        onPointerDown: Pe(t.onPointerDown, (h) => {
          !o &&
            h.button === 0 &&
            h.ctrlKey === !1 &&
            (c.onOpenToggle(), c.open || h.preventDefault());
        }),
        onKeyDown: Pe(t.onKeyDown, (h) => {
          o ||
            (["Enter", " "].includes(h.key) && c.onOpenToggle(),
            h.key === "ArrowDown" && c.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(h.key) && h.preventDefault());
        }),
      }),
    });
  });
t2.displayName = e2;
var l4 = "DropdownMenuPortal",
  n2 = (t) => {
    const { __scopeDropdownMenu: r, ...l } = t,
      o = Bt(r);
    return O.jsx(YM, { ...o, ...l });
  };
n2.displayName = l4;
var r2 = "DropdownMenuContent",
  a2 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = J1(r2, l),
      c = Bt(l),
      f = b.useRef(!1);
    return O.jsx(VM, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...c,
      ...o,
      ref: r,
      onCloseAutoFocus: Pe(t.onCloseAutoFocus, (h) => {
        (f.current || s.triggerRef.current?.focus(),
          (f.current = !1),
          h.preventDefault());
      }),
      onInteractOutside: Pe(t.onInteractOutside, (h) => {
        const p = h.detail.originalEvent,
          m = p.button === 0 && p.ctrlKey === !0,
          y = p.button === 2 || m;
        (!s.modal || y) && (f.current = !0);
      }),
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
a2.displayName = r2;
var i4 = "DropdownMenuGroup",
  o4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(QM, { ...s, ...o, ref: r });
  });
o4.displayName = i4;
var s4 = "DropdownMenuLabel",
  u4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(KM, { ...s, ...o, ref: r });
  });
u4.displayName = s4;
var c4 = "DropdownMenuItem",
  f4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(XM, { ...s, ...o, ref: r });
  });
f4.displayName = c4;
var d4 = "DropdownMenuCheckboxItem",
  h4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(ZM, { ...s, ...o, ref: r });
  });
h4.displayName = d4;
var m4 = "DropdownMenuRadioGroup",
  p4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(IM, { ...s, ...o, ref: r });
  });
p4.displayName = m4;
var y4 = "DropdownMenuRadioItem",
  g4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx($M, { ...s, ...o, ref: r });
  });
g4.displayName = y4;
var v4 = "DropdownMenuItemIndicator",
  b4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(JM, { ...s, ...o, ref: r });
  });
b4.displayName = v4;
var S4 = "DropdownMenuSeparator",
  w4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(WM, { ...s, ...o, ref: r });
  });
w4.displayName = S4;
var E4 = "DropdownMenuArrow",
  x4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(e4, { ...s, ...o, ref: r });
  });
x4.displayName = E4;
var R4 = "DropdownMenuSubTrigger",
  C4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(t4, { ...s, ...o, ref: r });
  });
C4.displayName = R4;
var A4 = "DropdownMenuSubContent",
  O4 = b.forwardRef((t, r) => {
    const { __scopeDropdownMenu: l, ...o } = t,
      s = Bt(l);
    return O.jsx(n4, {
      ...s,
      ...o,
      ref: r,
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
O4.displayName = A4;
var T4 = W1,
  M4 = t2,
  D4 = n2,
  _4 = a2;
function N4({ ...t }) {
  return O.jsx(T4, { "data-slot": "dropdown-menu", ...t });
}
function L4({ ...t }) {
  return O.jsx(M4, { "data-slot": "dropdown-menu-trigger", ...t });
}
function U4({ className: t, sideOffset: r = 4, ...l }) {
  return O.jsx(D4, {
    children: O.jsx(_4, {
      "data-slot": "dropdown-menu-content",
      sideOffset: r,
      className: bh(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        t,
      ),
      ...l,
    }),
  });
}
const z4 = Intl.NumberFormat("ko-kr", { compactDisplay: "long" }).format,
  qD = (t) => t.toLocaleString("ko-KR"),
  j4 = () => Du({ mutationFn: RO }),
  FD = () => {
    const t = Yl();
    return Du({
      mutationFn: AO,
      onSuccess: () => {
        t.invalidateQueries({ queryKey: Hl });
      },
    });
  };
function Is({ cup: t, money: r }) {
  const l = $n(),
    { user: o } = ju(),
    { mutateAsync: s } = j4(),
    c = async () => {
      if (!o) {
        alert("로그인이 필요합니다. 먼저 로그인해주세요.");
        return;
      }
      try {
        const f = await s({ point: t.toString(), price: r.toString() });
        f &&
          (sessionStorage.setItem("returnTo", l.pathname + l.search + l.hash),
          sessionStorage.setItem("returnToScroll", String(window.scrollY)),
          localStorage.setItem("tid", f.tid),
          (window.location.href = f.next_redirect_pc_url));
      } catch (f) {
        (console.error("결제 준비 실패:", f),
          f.response?.status === 401
            ? alert("로그인이 필요합니다. 먼저 로그인해주세요.")
            : alert("결제 준비에 실패했습니다. 다시 시도해주세요."));
      }
    };
  return O.jsxs("div", {
    className: "w-full flex items-center justify-between",
    children: [
      O.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          O.jsx("img", { src: Tv, className: "w-10" }),
          O.jsxs("div", {
            className: "text-xl font-bold text-scale-500",
            children: [t, " 잔"],
          }),
        ],
      }),
      O.jsxs(jl, {
        variant: "primary",
        isRounded: !0,
        className: "text-lg font-regular px-10 py-3",
        onClick: c,
        children: ["₩ ", z4(r)],
      }),
    ],
  });
}
function P4({ open: t, onOpenChange: r, children: l }) {
  return O.jsxs(Ou, {
    open: t,
    onOpenChange: r,
    children: [
      O.jsx(Mu, { asChild: !0, children: l }),
      O.jsx(Tu, {
        className: "w-133",
        children: O.jsxs("div", {
          className: "flex flex-col items-center px-8 py-15 gap-12.5",
          children: [
            O.jsx("div", {
              className: "text-2xl font-bold text-scale-600",
              children: "포인트 충전하기",
            }),
            O.jsxs("div", {
              className: "flex flex-col gap-9 w-full",
              children: [
                O.jsx(Is, { cup: 10, money: 1e4 }),
                O.jsx(Is, { cup: 30, money: 3e4 }),
                O.jsx(Is, { cup: 50, money: 5e4 }),
                O.jsx(Is, { cup: 100, money: 9e4 }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function H4({ imageCandidates: t, selectedProfileImage: r, onSave: l }) {
  const [o, s] = b.useState(r);
  return O.jsxs(Ou, {
    children: [
      O.jsx(Sh, {}),
      O.jsx(Mu, {
        asChild: !0,
        children: O.jsx("button", {
          className:
            "absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center",
          "aria-label": "edit profile image",
          children: O.jsx("img", { src: Vx, className: "w-9 h-9" }),
        }),
      }),
      O.jsx(Tu, {
        className: "w-105",
        children: O.jsxs("div", {
          className: "px-8.5 pt-20 pb-5 flex flex-col gap-15 items-center",
          children: [
            O.jsx("div", {
              className: "text-2xl font-bold text-scale-600",
              children: "프로필 이미지 고르기",
            }),
            O.jsx("div", {
              className: "grid grid-cols-3 px-10 gap-8",
              children: t.map((c) => {
                const f = o === c;
                return O.jsxs(
                  "button",
                  {
                    onClick: () => {
                      s(c);
                    },
                    className: `group relative w-20 h-20 rounded-full overflow-hidden ${f ? "ring-4 ring-brand-primary" : "ring-0"}`,
                    children: [
                      O.jsx("img", {
                        src: c,
                        className: "w-full h-full object-cover",
                      }),
                      O.jsx("span", {
                        className: `absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity ${f ? "opacity-100" : ""}`,
                      }),
                    ],
                  },
                  c,
                );
              }),
            }),
            O.jsx(yb, {
              asChild: !0,
              children: O.jsx(jl, {
                variant: "primary",
                onClick: () => {
                  l(o);
                },
                className: "w-90 h-14",
                children: "저장하기",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function B4() {
  const { user: t, updateProfile: r } = ju(),
    [l, o] = b.useState(t?.nickname ?? ""),
    [s, c] = b.useState(t?.profileImage),
    f = /^[0-9A-Za-z\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+$/u,
    h = l.length > 10,
    p = !f.test(l),
    m = l.length === 0,
    y = !m && (h || p),
    v = !m && !h && !p,
    w = async () => {
      v && (await r(l, mu.indexOf(s ?? "") + 1));
    },
    x = (E) => {
      E && (o(t?.nickname ?? ""), c(t?.profileImage ?? ""));
    };
  return O.jsxs(Ou, {
    onOpenChange: x,
    children: [
      O.jsx(Sh, {}),
      O.jsx(Mu, {
        asChild: !0,
        children: O.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            O.jsx("img", {
              src: t?.profileImage,
              alt: "profile",
              className: "h-8 w-8 rounded-full object-cover",
            }),
            O.jsx("div", {
              className: "text-lg font-bold text-scale-600",
              children: t?.nickname,
            }),
          ],
        }),
      }),
      O.jsx(Tu, {
        className: "w-180",
        children: O.jsxs("div", {
          className: "px-20 py-22.5 flex flex-col gap-20",
          children: [
            O.jsx("div", {
              className: "text-4xl font-bold text-scale-600",
              children: "프로필 설정",
            }),
            O.jsxs("div", {
              className: "flex flex-col gap-12.5",
              children: [
                O.jsxs("div", {
                  className: "mx-auto relative w-28 h-28",
                  children: [
                    O.jsx("img", {
                      src: s,
                      className: "w-28 h-28 rounded-full object-cover",
                    }),
                    O.jsx(H4, {
                      imageCandidates: mu,
                      selectedProfileImage: s ?? "",
                      onSave: (E) => c(E),
                    }),
                  ],
                }),
                O.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    O.jsx("input", {
                      value: l,
                      onChange: (E) => {
                        o(E.target.value);
                      },
                      placeholder: "닉네임(최대 10자)",
                      className:
                        "w-full h-14 rounded-xl border border-black/10 px-5 outline-none focus:border-brand-primary",
                    }),
                    y &&
                      O.jsx("p", {
                        className: "text-sm text-red-500",
                        children:
                          "*10자 이내의 한글, 숫자, 영문자를 입력해주세요.",
                      }),
                  ],
                }),
                O.jsx(yb, {
                  asChild: !0,
                  children: O.jsx(jl, {
                    variant: v ? "primary" : "disabled",
                    disabled: !v,
                    onClick: w,
                    className: "h-14",
                    children: "멋시장 시작하기",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function k4() {
  const { logout: t, user: r } = ju(),
    l = ah();
  return O.jsxs(N4, {
    children: [
      O.jsx(L4, {
        asChild: !0,
        children: O.jsx(jl, { variant: "gray", children: "프로필" }),
      }),
      O.jsxs(U4, {
        align: "end",
        sideOffset: 12,
        className:
          "p-6 flex flex-col gap-5 w-55 border border-brand-secondary rounded-xl bg-white",
        children: [
          O.jsx(B4, {}),
          O.jsxs("div", {
            className: "flex w-full justify-between items-center",
            children: [
              O.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  O.jsx("img", { src: Tv, className: "w-8.5" }),
                  O.jsx("div", {
                    className: "text-lg font-bold text-scale-500",
                    children: "포인트",
                  }),
                ],
              }),
              O.jsxs("div", {
                className: "text-lg font-bold text-scale-600",
                children: [
                  O.jsx(Na, {
                    to: "/payment/history",
                    className: "text-brand-primary",
                    children: r?.points,
                  }),
                  "잔",
                ],
              }),
            ],
          }),
          O.jsx(P4, {}),
          O.jsx("button", {
            className:
              "flex items-center text-base text-scale-400 underline underline-offset-1 cursor-pointer",
            onClick: async () => {
              (await t(), l("/"));
            },
            children: "로그아웃",
          }),
        ],
      }),
    ],
  });
}
function q4() {
  const { user: t } = ju();
  return O.jsx("header", {
    className: "w-full h-22 fixed flex justify-center bg-bg-white mx-auto z-50",
    children: O.jsxs("div", {
      className: "w-full max-w-[1680px] flex justify-between px-17.5 py-5",
      children: [
        O.jsxs(Na, {
          to: "/",
          className: "cursor-pointer flex gap-4.5 items-center",
          children: [
            O.jsx("img", { src: Fx, className: "w-9 h-9" }),
            O.jsx("div", {
              className: "text-3xl text-brand-primary font-bold",
              children: "멋쟁이 시장처럼",
            }),
          ],
        }),
        O.jsxs("div", {
          className: "flex gap-10 items-center",
          children: [
            O.jsx(Na, {
              to: "/auction",
              className: "cursor-pointer",
              children: O.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 입찰",
              }),
            }),
            O.jsx(Na, {
              to: "/create",
              className: "cursor-pointer",
              children: O.jsx("div", {
                className: "text-xl text-scale-500",
                children: "경매 등록",
              }),
            }),
            O.jsx(Na, {
              to: "/history",
              className: "cursor-pointer",
              children: O.jsx("div", {
                className: "text-xl text-scale-500",
                children: "내 경매",
              }),
            }),
            t ? O.jsx(k4, {}) : O.jsx(sA, {}),
          ],
        }),
      ],
    }),
  });
}
function F4() {
  return O.jsx("footer", {
    className: "w-full flex justify-center px-15 py-25",
    children: O.jsx("div", {
      className: "text-xl text-scale-400",
      children: "© 2025 Likelion SNU 13th. All rights reserved.",
    }),
  });
}
function G4() {
  const { pathname: t, search: r, hash: l } = $n();
  return (
    b.useEffect(() => {
      if (l) {
        const o = document.getElementById(l.slice(1));
        if (o) {
          o.scrollIntoView({ block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [t, r, l]),
    null
  );
}
function Y4() {
  return (
    b.useEffect(() => {
      const r =
          "http://localhost:8000".replace("http", "ws") + "/ws/notifications/",
        l = new WebSocket(r);
      return (
        (l.onopen = () => {
          console.log("[WebSocket Connected] 글로벌 알림 연결됨");
        }),
        (l.onclose = () => {
          console.log("[WebSocket Closed] 글로벌 알림 연결 종료");
        }),
        (l.onerror = (o) => {
          console.error("[WebSocket Error]", o);
        }),
        (l.onmessage = (o) => {
          try {
            const s = JSON.parse(o.data);
            s?.message && alert(s.message);
          } catch (s) {
            console.error("WebSocket 메시지 파싱 오류:", s);
          }
        }),
        () => {
          l.close();
        }
      );
    }, []),
    O.jsxs("div", {
      className: "w-full bg-bg-default",
      children: [
        O.jsx(q4, {}),
        O.jsxs("main", {
          className: "min-h-screen pt-22",
          children: [O.jsx(G4, {}), O.jsx(IE, {})],
        }),
        O.jsx(F4, {}),
      ],
    })
  );
}
const V4 = b.lazy(() =>
    Jn(() => import("./HomePage-BdiwCtxg.js"), __vite__mapDeps([0, 1])),
  ),
  Q4 = b.lazy(() =>
    Jn(
      () => import("./AuctionSearchPage-CPNBfNxA.js"),
      __vite__mapDeps([2, 1]),
    ),
  ),
  K4 = b.lazy(() =>
    Jn(
      () => import("./AuctionRoomPage-DFNu8I5S.js"),
      __vite__mapDeps([3, 1, 4]),
    ),
  ),
  X4 = b.lazy(() =>
    Jn(
      () => import("./AuctionCreatePage-CiWdiBB3.js"),
      __vite__mapDeps([5, 4]),
    ),
  ),
  Z4 = b.lazy(() => Jn(() => import("./Auth-CrxCnF5b.js"), [])),
  I4 = b.lazy(() => Jn(() => import("./PaymentApprovalPage-CNvU0Eiq.js"), [])),
  $4 = b.lazy(() => Jn(() => import("./PaymentCancelPage-CDlvEnAD.js"), [])),
  J4 = b.lazy(() => Jn(() => import("./PaymentFailPage-O_2eV3p0.js"), [])),
  W4 = b.lazy(() => Jn(() => import("./PaymentHistoryPage-CZGFFQhl.js"), [])),
  eD = b.lazy(() => Jn(() => import("./HistoryPage-D86P8Pal.js"), [])),
  tD = [{ path: Vn.HOME.ROOT, element: O.jsx(V4, {}) }],
  nD = [
    { path: Vn.AUCTION.ROOT, element: O.jsx(Q4, {}) },
    { path: Vn.AUCTION.ROOM, element: O.jsx(K4, {}) },
  ],
  rD = [{ path: Vn.CREATE.ROOT, element: O.jsx(X4, {}) }],
  aD = [{ path: Vn.AUTH.ROOT, element: O.jsx(Z4, {}) }],
  lD = [{ path: Vn.HISTORY.ROOT, element: O.jsx(eD, {}) }],
  iD = [
    { path: Vn.PAYMENT.APPROVAL, element: O.jsx(I4, {}) },
    { path: Vn.PAYMENT.CANCEL, element: O.jsx($4, {}) },
    { path: Vn.PAYMENT.FAIL, element: O.jsx(J4, {}) },
    { path: Vn.PAYMENT.HISTORY, element: O.jsx(W4, {}) },
  ],
  oD = [...tD, ...nD, ...rD, ...aD, ...iD, ...lD],
  sD = wx([{ element: O.jsx(Y4, {}), children: oD }]),
  uD = new _A({
    defaultOptions: {
      queries: { staleTime: 300 * 1e3, refetchOnWindowFocus: !1, retry: 1 },
    },
  });
function cD() {
  return O.jsx(NA, {
    client: uD,
    children: O.jsx(DO, {
      children: O.jsx(b.Suspense, {
        fallback: null,
        children: O.jsx(Ux, { router: sD }),
      }),
    }),
  });
}
const l2 = document.getElementById("root");
if (!l2) throw new Error("Root element not found");
Sw.createRoot(l2).render(O.jsx(b.StrictMode, { children: O.jsx(cD, {}) }));
export {
  jl as B,
  Tv as C,
  Ou as D,
  P4 as P,
  Vn as R,
  LD as a,
  xO as b,
  yh as c,
  Mu as d,
  Tu as e,
  qD as f,
  UD as g,
  fD as h,
  zD as i,
  O as j,
  Yl as k,
  Du as l,
  HD as m,
  Ir as n,
  ju as o,
  PD as p,
  ND as q,
  b as r,
  dD as s,
  FD as t,
  ah as u,
  jD as v,
};
