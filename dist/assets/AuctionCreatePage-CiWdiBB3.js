import {
  k as wn,
  l as kn,
  m as xn,
  n as z,
  r as Fe,
  j as y,
  C as zn,
  u as Zn,
  B as $n,
  R as En,
} from "./index-BafdFBMt.js";
import { I as Bt } from "./InfoModal-B29TKaYa.js";
const An =
  "data:image/svg+xml,%3csvg%20width='63'%20height='64'%20viewBox='0%200%2063%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M52.2309%2021.1128L38.4497%207.33156C38.173%207.05457%2037.7977%206.89878%2037.4062%206.89844H13.7812C12.8675%206.89844%2011.9912%207.26142%2011.345%207.90755C10.6989%208.55367%2010.3359%209.43%2010.3359%2010.3438V53.6562C10.3359%2054.57%2010.6989%2055.4463%2011.345%2056.0925C11.9912%2056.7386%2012.8675%2057.1016%2013.7812%2057.1016H49.2188C50.1325%2057.1016%2051.0088%2056.7386%2051.655%2056.0925C52.3011%2055.4463%2052.6641%2054.57%2052.6641%2053.6562V22.1562C52.6637%2021.7648%2052.5079%2021.3895%2052.2309%2021.1128ZM38.8828%2011.9384L47.6241%2020.6797H38.8828V11.9384ZM49.2188%2054.1484H13.7812C13.6507%2054.1484%2013.5255%2054.0966%2013.4332%2054.0043C13.3409%2053.912%2013.2891%2053.7868%2013.2891%2053.6562V10.3438C13.2891%2010.2132%2013.3409%2010.088%2013.4332%209.99572C13.5255%209.90342%2013.6507%209.85156%2013.7812%209.85156H35.9297V22.1562C35.9297%2022.5479%2036.0853%2022.9234%2036.3622%2023.2003C36.6391%2023.4772%2037.0146%2023.6328%2037.4062%2023.6328H49.7109V53.6562C49.7109%2053.7868%2049.6591%2053.912%2049.5668%2054.0043C49.4745%2054.0966%2049.3493%2054.1484%2049.2188%2054.1484Z'%20fill='%23ADADAD'/%3e%3c/svg%3e";
function Wt() {
  const e = wn();
  return kn({
    mutationFn: (t) => xn(t),
    onSuccess: () => {
      (e.invalidateQueries({ queryKey: ["auctions"] }),
        e.invalidateQueries({ queryKey: ["myAuctions"] }),
        e.invalidateQueries({ queryKey: ["recommendedAuctions"] }));
    },
    onError: (t) => {
      console.error("경매 생성 실패:", t);
    },
  });
}
function d(e, t, r) {
  function n(a, f) {
    var m;
    (Object.defineProperty(a, "_zod", { value: a._zod ?? {}, enumerable: !1 }),
      (m = a._zod).traits ?? (m.traits = new Set()),
      a._zod.traits.add(e),
      t(a, f));
    for (const g in i.prototype)
      g in a || Object.defineProperty(a, g, { value: i.prototype[g].bind(a) });
    ((a._zod.constr = i), (a._zod.def = f));
  }
  const o = r?.Parent ?? Object;
  class s extends o {}
  Object.defineProperty(s, "name", { value: e });
  function i(a) {
    var f;
    const m = r?.Parent ? new s() : this;
    (n(m, a), (f = m._zod).deferred ?? (f.deferred = []));
    for (const g of m._zod.deferred) g();
    return m;
  }
  return (
    Object.defineProperty(i, "init", { value: n }),
    Object.defineProperty(i, Symbol.hasInstance, {
      value: (a) =>
        r?.Parent && a instanceof r.Parent ? !0 : a?._zod?.traits?.has(e),
    }),
    Object.defineProperty(i, "name", { value: e }),
    i
  );
}
class $e extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
class Sr extends Error {
  constructor(t) {
    (super(`Encountered unidirectional transform during encode: ${t}`),
      (this.name = "ZodEncodeError"));
  }
}
const Vr = {};
function ve(e) {
  return Vr;
}
function Fn(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e)
    .filter(([n, o]) => t.indexOf(+n) === -1)
    .map(([n, o]) => o);
}
function ht(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function yt(e) {
  return {
    get value() {
      {
        const t = e();
        return (Object.defineProperty(this, "value", { value: t }), t);
      }
    },
  };
}
function wt(e) {
  return e == null;
}
function kt(e) {
  const t = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Sn(e, t) {
  const r = (e.toString().split(".")[1] || "").length,
    n = t.toString();
  let o = (n.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(n)) {
    const f = n.match(/\d?e-(\d?)/);
    f?.[1] && (o = Number.parseInt(f[1]));
  }
  const s = r > o ? r : o,
    i = Number.parseInt(e.toFixed(s).replace(".", "")),
    a = Number.parseInt(t.toFixed(s).replace(".", ""));
  return (i % a) / 10 ** s;
}
const qt = Symbol("evaluating");
function D(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== qt) return (n === void 0 && ((n = qt), (n = r())), n);
    },
    set(o) {
      Object.defineProperty(e, t, { value: o });
    },
    configurable: !0,
  });
}
function ye(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function we(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function Ht(e) {
  return JSON.stringify(e);
}
const Ir =
  "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function We(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Vn = yt(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Ne(e) {
  if (We(e) === !1) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    We(r) === !1 ||
    Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1
  );
}
function Nr(e) {
  return Ne(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const In = new Set(["string", "number", "symbol"]);
function Ye(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function me(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return ((!t || r?.parent) && (n._zod.parent = e), n);
}
function k(e) {
  const t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (
    delete t.message,
    typeof t.error == "string" ? { ...t, error: () => t.error } : t
  );
}
function Nn(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
  );
}
const Cn = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};
function On(e, t) {
  const r = e._zod.def,
    n = we(e._zod.def, {
      get shape() {
        const o = {};
        for (const s in t) {
          if (!(s in r.shape)) throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (o[s] = r.shape[s]);
        }
        return (ye(this, "shape", o), o);
      },
      checks: [],
    });
  return me(e, n);
}
function jn(e, t) {
  const r = e._zod.def,
    n = we(e._zod.def, {
      get shape() {
        const o = { ...e._zod.def.shape };
        for (const s in t) {
          if (!(s in r.shape)) throw new Error(`Unrecognized key: "${s}"`);
          t[s] && delete o[s];
        }
        return (ye(this, "shape", o), o);
      },
      checks: [],
    });
  return me(e, n);
}
function Dn(e, t) {
  if (!Ne(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(
      "Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.",
    );
  const o = we(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return (ye(this, "shape", s), s);
    },
    checks: [],
  });
  return me(e, o);
}
function Tn(e, t) {
  if (!Ne(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return (ye(this, "shape", n), n);
    },
    checks: e._zod.def.checks,
  };
  return me(e, r);
}
function Pn(e, t) {
  const r = we(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return (ye(this, "shape", n), n);
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: [],
  });
  return me(e, r);
}
function Rn(e, t, r) {
  const n = we(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape,
        s = { ...o };
      if (r)
        for (const i in r) {
          if (!(i in o)) throw new Error(`Unrecognized key: "${i}"`);
          r[i] &&
            (s[i] = e ? new e({ type: "optional", innerType: o[i] }) : o[i]);
        }
      else
        for (const i in o)
          s[i] = e ? new e({ type: "optional", innerType: o[i] }) : o[i];
      return (ye(this, "shape", s), s);
    },
    checks: [],
  });
  return me(t, n);
}
function Un(e, t, r) {
  const n = we(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape,
        s = { ...o };
      if (r)
        for (const i in r) {
          if (!(i in s)) throw new Error(`Unrecognized key: "${i}"`);
          r[i] && (s[i] = new e({ type: "nonoptional", innerType: o[i] }));
        }
      else
        for (const i in o)
          s[i] = new e({ type: "nonoptional", innerType: o[i] });
      return (ye(this, "shape", s), s);
    },
    checks: [],
  });
  return me(t, n);
}
function Ze(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
function Cr(e, t) {
  return t.map((r) => {
    var n;
    return ((n = r).path ?? (n.path = []), r.path.unshift(e), r);
  });
}
function Pe(e) {
  return typeof e == "string" ? e : e?.message;
}
function be(e, t, r) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o =
      Pe(e.inst?._zod.def?.error?.(e)) ??
      Pe(t?.error?.(e)) ??
      Pe(r.customError?.(e)) ??
      Pe(r.localeError?.(e)) ??
      "Invalid input";
    n.message = o;
  }
  return (
    delete n.inst,
    delete n.continue,
    t?.reportInput || delete n.input,
    n
  );
}
function xt(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function Ce(...e) {
  const [t, r, n] = e;
  return typeof t == "string"
    ? { message: t, code: "custom", input: r, inst: n }
    : { ...t };
}
const Or = (e, t) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
      (e.message = JSON.stringify(t, ht, 2)),
      Object.defineProperty(e, "toString", {
        value: () => e.message,
        enumerable: !1,
      }));
  },
  zt = d("$ZodError", Or),
  Xe = d("$ZodError", Or, { Parent: Error });
function Mn(e, t = (r) => r.message) {
  const r = {},
    n = [];
  for (const o of e.issues)
    o.path.length > 0
      ? ((r[o.path[0]] = r[o.path[0]] || []), r[o.path[0]].push(t(o)))
      : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function Ln(e, t = (r) => r.message) {
  const r = { _errors: [] },
    n = (o) => {
      for (const s of o.issues)
        if (s.code === "invalid_union" && s.errors.length)
          s.errors.map((i) => n({ issues: i }));
        else if (s.code === "invalid_key") n({ issues: s.issues });
        else if (s.code === "invalid_element") n({ issues: s.issues });
        else if (s.path.length === 0) r._errors.push(t(s));
        else {
          let i = r,
            a = 0;
          for (; a < s.path.length; ) {
            const f = s.path[a];
            (a === s.path.length - 1
              ? ((i[f] = i[f] || { _errors: [] }), i[f]._errors.push(t(s)))
              : (i[f] = i[f] || { _errors: [] }),
              (i = i[f]),
              a++);
          }
        }
    };
  return (n(e), r);
}
const Qe = (e) => (t, r, n, o) => {
    const s = n ? Object.assign(n, { async: !1 }) : { async: !1 },
      i = t._zod.run({ value: r, issues: [] }, s);
    if (i instanceof Promise) throw new $e();
    if (i.issues.length) {
      const a = new (o?.Err ?? e)(i.issues.map((f) => be(f, s, ve())));
      throw (Ir(a, o?.callee), a);
    }
    return i.value;
  },
  Bn = Qe(Xe),
  et = (e) => async (t, r, n, o) => {
    const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
    let i = t._zod.run({ value: r, issues: [] }, s);
    if ((i instanceof Promise && (i = await i), i.issues.length)) {
      const a = new (o?.Err ?? e)(i.issues.map((f) => be(f, s, ve())));
      throw (Ir(a, o?.callee), a);
    }
    return i.value;
  },
  Wn = et(Xe),
  tt = (e) => (t, r, n) => {
    const o = n ? { ...n, async: !1 } : { async: !1 },
      s = t._zod.run({ value: r, issues: [] }, o);
    if (s instanceof Promise) throw new $e();
    return s.issues.length
      ? {
          success: !1,
          error: new (e ?? zt)(s.issues.map((i) => be(i, o, ve()))),
        }
      : { success: !0, data: s.value };
  },
  qn = tt(Xe),
  rt = (e) => async (t, r, n) => {
    const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
    let s = t._zod.run({ value: r, issues: [] }, o);
    return (
      s instanceof Promise && (s = await s),
      s.issues.length
        ? { success: !1, error: new e(s.issues.map((i) => be(i, o, ve()))) }
        : { success: !0, data: s.value }
    );
  },
  Hn = rt(Xe),
  Kn = (e) => (t, r, n) => {
    const o = n
      ? Object.assign(n, { direction: "backward" })
      : { direction: "backward" };
    return Qe(e)(t, r, o);
  },
  Gn = (e) => (t, r, n) => Qe(e)(t, r, n),
  Jn = (e) => async (t, r, n) => {
    const o = n
      ? Object.assign(n, { direction: "backward" })
      : { direction: "backward" };
    return et(e)(t, r, o);
  },
  Yn = (e) => async (t, r, n) => et(e)(t, r, n),
  Xn = (e) => (t, r, n) => {
    const o = n
      ? Object.assign(n, { direction: "backward" })
      : { direction: "backward" };
    return tt(e)(t, r, o);
  },
  Qn = (e) => (t, r, n) => tt(e)(t, r, n),
  eo = (e) => async (t, r, n) => {
    const o = n
      ? Object.assign(n, { direction: "backward" })
      : { direction: "backward" };
    return rt(e)(t, r, o);
  },
  to = (e) => async (t, r, n) => rt(e)(t, r, n),
  ro = /^[cC][^\s-]{8,}$/,
  no = /^[0-9a-z]+$/,
  oo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  so = /^[0-9a-vA-V]{20}$/,
  io = /^[A-Za-z0-9]{27}$/,
  uo = /^[a-zA-Z0-9_-]{21}$/,
  ao =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  co =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Kt = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
  lo =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  fo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ho() {
  return new RegExp(fo, "u");
}
const mo =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  po =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  go =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  _o =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  vo =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  jr = /^[A-Za-z0-9_-]*$/,
  bo =
    /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
  yo = /^\+(?:[0-9]){6,14}[0-9]$/,
  Dr =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  wo = new RegExp(`^${Dr}$`);
function Tr(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number"
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ko(e) {
  return new RegExp(`^${Tr(e)}$`);
}
function xo(e) {
  const t = Tr({ precision: e.precision }),
    r = ["Z"];
  (e.local && r.push(""),
    e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"));
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Dr}T(?:${n})$`);
}
const zo = (e) => {
    const t = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  },
  Zo = /^-?\d+$/,
  $o = /^-?\d+(?:\.\d+)?/,
  Eo = /^[^A-Z]*$/,
  Ao = /^[^a-z]*$/,
  X = d("$ZodCheck", (e, t) => {
    var r;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = t),
      (r = e._zod).onattach ?? (r.onattach = []));
  }),
  Pr = { number: "number", bigint: "bigint", object: "date" },
  Rr = d("$ZodCheckLessThan", (e, t) => {
    X.init(e, t);
    const r = Pr[typeof t.value];
    (e._zod.onattach.push((n) => {
      const o = n._zod.bag,
        s =
          (t.inclusive ? o.maximum : o.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      t.value < s &&
        (t.inclusive ? (o.maximum = t.value) : (o.exclusiveMaximum = t.value));
    }),
      (e._zod.check = (n) => {
        (t.inclusive ? n.value <= t.value : n.value < t.value) ||
          n.issues.push({
            origin: r,
            code: "too_big",
            maximum: t.value,
            input: n.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Ur = d("$ZodCheckGreaterThan", (e, t) => {
    X.init(e, t);
    const r = Pr[typeof t.value];
    (e._zod.onattach.push((n) => {
      const o = n._zod.bag,
        s =
          (t.inclusive ? o.minimum : o.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      t.value > s &&
        (t.inclusive ? (o.minimum = t.value) : (o.exclusiveMinimum = t.value));
    }),
      (e._zod.check = (n) => {
        (t.inclusive ? n.value >= t.value : n.value > t.value) ||
          n.issues.push({
            origin: r,
            code: "too_small",
            minimum: t.value,
            input: n.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Fo = d("$ZodCheckMultipleOf", (e, t) => {
    (X.init(e, t),
      e._zod.onattach.push((r) => {
        var n;
        (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
      }),
      (e._zod.check = (r) => {
        if (typeof r.value != typeof t.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint"
          ? r.value % t.value === BigInt(0)
          : Sn(r.value, t.value) === 0) ||
          r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  So = d("$ZodCheckNumberFormat", (e, t) => {
    (X.init(e, t), (t.format = t.format || "float64"));
    const r = t.format?.includes("int"),
      n = r ? "int" : "number",
      [o, s] = Cn[t.format];
    (e._zod.onattach.push((i) => {
      const a = i._zod.bag;
      ((a.format = t.format),
        (a.minimum = o),
        (a.maximum = s),
        r && (a.pattern = Zo));
    }),
      (e._zod.check = (i) => {
        const a = i.value;
        if (r) {
          if (!Number.isInteger(a)) {
            i.issues.push({
              expected: n,
              format: t.format,
              code: "invalid_type",
              continue: !1,
              input: a,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(a)) {
            a > 0
              ? i.issues.push({
                  input: a,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: n,
                  continue: !t.abort,
                })
              : i.issues.push({
                  input: a,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: n,
                  continue: !t.abort,
                });
            return;
          }
        }
        (a < o &&
          i.issues.push({
            origin: "number",
            input: a,
            code: "too_small",
            minimum: o,
            inclusive: !0,
            inst: e,
            continue: !t.abort,
          }),
          a > s &&
            i.issues.push({
              origin: "number",
              input: a,
              code: "too_big",
              maximum: s,
              inst: e,
            }));
      }));
  }),
  Vo = d("$ZodCheckMaxLength", (e, t) => {
    var r;
    (X.init(e, t),
      (r = e._zod.def).when ??
        (r.when = (n) => {
          const o = n.value;
          return !wt(o) && o.length !== void 0;
        }),
      e._zod.onattach.push((n) => {
        const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < o && (n._zod.bag.maximum = t.maximum);
      }),
      (e._zod.check = (n) => {
        const o = n.value;
        if (o.length <= t.maximum) return;
        const i = xt(o);
        n.issues.push({
          origin: i,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: o,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  Io = d("$ZodCheckMinLength", (e, t) => {
    var r;
    (X.init(e, t),
      (r = e._zod.def).when ??
        (r.when = (n) => {
          const o = n.value;
          return !wt(o) && o.length !== void 0;
        }),
      e._zod.onattach.push((n) => {
        const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > o && (n._zod.bag.minimum = t.minimum);
      }),
      (e._zod.check = (n) => {
        const o = n.value;
        if (o.length >= t.minimum) return;
        const i = xt(o);
        n.issues.push({
          origin: i,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: o,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  No = d("$ZodCheckLengthEquals", (e, t) => {
    var r;
    (X.init(e, t),
      (r = e._zod.def).when ??
        (r.when = (n) => {
          const o = n.value;
          return !wt(o) && o.length !== void 0;
        }),
      e._zod.onattach.push((n) => {
        const o = n._zod.bag;
        ((o.minimum = t.length), (o.maximum = t.length), (o.length = t.length));
      }),
      (e._zod.check = (n) => {
        const o = n.value,
          s = o.length;
        if (s === t.length) return;
        const i = xt(o),
          a = s > t.length;
        n.issues.push({
          origin: i,
          ...(a
            ? { code: "too_big", maximum: t.length }
            : { code: "too_small", minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: n.value,
          inst: e,
          continue: !t.abort,
        });
      }));
  }),
  nt = d("$ZodCheckStringFormat", (e, t) => {
    var r, n;
    (X.init(e, t),
      e._zod.onattach.push((o) => {
        const s = o._zod.bag;
        ((s.format = t.format),
          t.pattern &&
            (s.patterns ?? (s.patterns = new Set()),
            s.patterns.add(t.pattern)));
      }),
      t.pattern
        ? ((r = e._zod).check ??
          (r.check = (o) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(o.value) &&
                o.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: t.format,
                  input: o.value,
                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                  inst: e,
                  continue: !t.abort,
                }));
          }))
        : ((n = e._zod).check ?? (n.check = () => {})));
  }),
  Co = d("$ZodCheckRegex", (e, t) => {
    (nt.init(e, t),
      (e._zod.check = (r) => {
        ((t.pattern.lastIndex = 0),
          !t.pattern.test(r.value) &&
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: t.pattern.toString(),
              inst: e,
              continue: !t.abort,
            }));
      }));
  }),
  Oo = d("$ZodCheckLowerCase", (e, t) => {
    (t.pattern ?? (t.pattern = Eo), nt.init(e, t));
  }),
  jo = d("$ZodCheckUpperCase", (e, t) => {
    (t.pattern ?? (t.pattern = Ao), nt.init(e, t));
  }),
  Do = d("$ZodCheckIncludes", (e, t) => {
    X.init(e, t);
    const r = Ye(t.includes),
      n = new RegExp(
        typeof t.position == "number" ? `^.{${t.position}}${r}` : r,
      );
    ((t.pattern = n),
      e._zod.onattach.push((o) => {
        const s = o._zod.bag;
        (s.patterns ?? (s.patterns = new Set()), s.patterns.add(n));
      }),
      (e._zod.check = (o) => {
        o.value.includes(t.includes, t.position) ||
          o.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: o.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  To = d("$ZodCheckStartsWith", (e, t) => {
    X.init(e, t);
    const r = new RegExp(`^${Ye(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = r),
      e._zod.onattach.push((n) => {
        const o = n._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(r));
      }),
      (e._zod.check = (n) => {
        n.value.startsWith(t.prefix) ||
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Po = d("$ZodCheckEndsWith", (e, t) => {
    X.init(e, t);
    const r = new RegExp(`.*${Ye(t.suffix)}$`);
    (t.pattern ?? (t.pattern = r),
      e._zod.onattach.push((n) => {
        const o = n._zod.bag;
        (o.patterns ?? (o.patterns = new Set()), o.patterns.add(r));
      }),
      (e._zod.check = (n) => {
        n.value.endsWith(t.suffix) ||
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: n.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Ro = d("$ZodCheckOverwrite", (e, t) => {
    (X.init(e, t),
      (e._zod.check = (r) => {
        r.value = t.tx(r.value);
      }));
  });
class Uo {
  constructor(t = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = t));
  }
  indented(t) {
    ((this.indent += 1), t(this), (this.indent -= 1));
  }
  write(t) {
    if (typeof t == "function") {
      (t(this, { execution: "sync" }), t(this, { execution: "async" }));
      return;
    }
    const n = t
        .split(
          `
`,
        )
        .filter((i) => i),
      o = Math.min(...n.map((i) => i.length - i.trimStart().length)),
      s = n.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s) this.content.push(i);
  }
  compile() {
    const t = Function,
      r = this?.args,
      o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(
      ...r,
      o.join(`
`),
    );
  }
}
const Mo = { major: 4, minor: 1, patch: 12 },
  W = d("$ZodType", (e, t) => {
    var r;
    (e ?? (e = {}),
      (e._zod.def = t),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Mo));
    const n = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && n.unshift(e);
    for (const o of n) for (const s of o._zod.onattach) s(e);
    if (n.length === 0)
      ((r = e._zod).deferred ?? (r.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      const o = (i, a, f) => {
          let m = Ze(i),
            g;
          for (const x of a) {
            if (x._zod.def.when) {
              if (!x._zod.def.when(i)) continue;
            } else if (m) continue;
            const b = i.issues.length,
              S = x._zod.check(i);
            if (S instanceof Promise && f?.async === !1) throw new $e();
            if (g || S instanceof Promise)
              g = (g ?? Promise.resolve()).then(async () => {
                (await S, i.issues.length !== b && (m || (m = Ze(i, b))));
              });
            else {
              if (i.issues.length === b) continue;
              m || (m = Ze(i, b));
            }
          }
          return g ? g.then(() => i) : i;
        },
        s = (i, a, f) => {
          if (Ze(i)) return ((i.aborted = !0), i);
          const m = o(a, n, f);
          if (m instanceof Promise) {
            if (f.async === !1) throw new $e();
            return m.then((g) => e._zod.parse(g, f));
          }
          return e._zod.parse(m, f);
        };
      e._zod.run = (i, a) => {
        if (a.skipChecks) return e._zod.parse(i, a);
        if (a.direction === "backward") {
          const m = e._zod.parse(
            { value: i.value, issues: [] },
            { ...a, skipChecks: !0 },
          );
          return m instanceof Promise ? m.then((g) => s(g, i, a)) : s(m, i, a);
        }
        const f = e._zod.parse(i, a);
        if (f instanceof Promise) {
          if (a.async === !1) throw new $e();
          return f.then((m) => o(m, n, a));
        }
        return o(f, n, a);
      };
    }
    e["~standard"] = {
      validate: (o) => {
        try {
          const s = qn(e, o);
          return s.success ? { value: s.data } : { issues: s.error?.issues };
        } catch {
          return Hn(e, o).then((i) =>
            i.success ? { value: i.data } : { issues: i.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  Zt = d("$ZodString", (e, t) => {
    (W.init(e, t),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? zo(e._zod.bag)),
      (e._zod.parse = (r, n) => {
        if (t.coerce)
          try {
            r.value = String(r.value);
          } catch {}
        return (
          typeof r.value == "string" ||
            r.issues.push({
              expected: "string",
              code: "invalid_type",
              input: r.value,
              inst: e,
            }),
          r
        );
      }));
  }),
  T = d("$ZodStringFormat", (e, t) => {
    (nt.init(e, t), Zt.init(e, t));
  }),
  Lo = d("$ZodGUID", (e, t) => {
    (t.pattern ?? (t.pattern = co), T.init(e, t));
  }),
  Bo = d("$ZodUUID", (e, t) => {
    if (t.version) {
      const n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        t.version
      ];
      if (n === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Kt(n));
    } else t.pattern ?? (t.pattern = Kt());
    T.init(e, t);
  }),
  Wo = d("$ZodEmail", (e, t) => {
    (t.pattern ?? (t.pattern = lo), T.init(e, t));
  }),
  qo = d("$ZodURL", (e, t) => {
    (T.init(e, t),
      (e._zod.check = (r) => {
        try {
          const n = r.value.trim(),
            o = new URL(n);
          (t.hostname &&
            ((t.hostname.lastIndex = 0),
            t.hostname.test(o.hostname) ||
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: bo.source,
                input: r.value,
                inst: e,
                continue: !t.abort,
              })),
            t.protocol &&
              ((t.protocol.lastIndex = 0),
              t.protocol.test(
                o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol,
              ) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: t.protocol.source,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                })),
            t.normalize ? (r.value = o.href) : (r.value = n));
          return;
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  Ho = d("$ZodEmoji", (e, t) => {
    (t.pattern ?? (t.pattern = ho()), T.init(e, t));
  }),
  Ko = d("$ZodNanoID", (e, t) => {
    (t.pattern ?? (t.pattern = uo), T.init(e, t));
  }),
  Go = d("$ZodCUID", (e, t) => {
    (t.pattern ?? (t.pattern = ro), T.init(e, t));
  }),
  Jo = d("$ZodCUID2", (e, t) => {
    (t.pattern ?? (t.pattern = no), T.init(e, t));
  }),
  Yo = d("$ZodULID", (e, t) => {
    (t.pattern ?? (t.pattern = oo), T.init(e, t));
  }),
  Xo = d("$ZodXID", (e, t) => {
    (t.pattern ?? (t.pattern = so), T.init(e, t));
  }),
  Qo = d("$ZodKSUID", (e, t) => {
    (t.pattern ?? (t.pattern = io), T.init(e, t));
  }),
  es = d("$ZodISODateTime", (e, t) => {
    (t.pattern ?? (t.pattern = xo(t)), T.init(e, t));
  }),
  ts = d("$ZodISODate", (e, t) => {
    (t.pattern ?? (t.pattern = wo), T.init(e, t));
  }),
  rs = d("$ZodISOTime", (e, t) => {
    (t.pattern ?? (t.pattern = ko(t)), T.init(e, t));
  }),
  ns = d("$ZodISODuration", (e, t) => {
    (t.pattern ?? (t.pattern = ao), T.init(e, t));
  }),
  os = d("$ZodIPv4", (e, t) => {
    (t.pattern ?? (t.pattern = mo),
      T.init(e, t),
      e._zod.onattach.push((r) => {
        const n = r._zod.bag;
        n.format = "ipv4";
      }));
  }),
  ss = d("$ZodIPv6", (e, t) => {
    (t.pattern ?? (t.pattern = po),
      T.init(e, t),
      e._zod.onattach.push((r) => {
        const n = r._zod.bag;
        n.format = "ipv6";
      }),
      (e._zod.check = (r) => {
        try {
          new URL(`http://[${r.value}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  }),
  is = d("$ZodCIDRv4", (e, t) => {
    (t.pattern ?? (t.pattern = go), T.init(e, t));
  }),
  us = d("$ZodCIDRv6", (e, t) => {
    (t.pattern ?? (t.pattern = _o),
      T.init(e, t),
      (e._zod.check = (r) => {
        const n = r.value.split("/");
        try {
          if (n.length !== 2) throw new Error();
          const [o, s] = n;
          if (!s) throw new Error();
          const i = Number(s);
          if (`${i}` !== s) throw new Error();
          if (i < 0 || i > 128) throw new Error();
          new URL(`http://[${o}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
        }
      }));
  });
function Mr(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
const as = d("$ZodBase64", (e, t) => {
  (t.pattern ?? (t.pattern = vo),
    T.init(e, t),
    e._zod.onattach.push((r) => {
      r._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (r) => {
      Mr(r.value) ||
        r.issues.push({
          code: "invalid_format",
          format: "base64",
          input: r.value,
          inst: e,
          continue: !t.abort,
        });
    }));
});
function cs(e) {
  if (!jr.test(e)) return !1;
  const t = e.replace(/[-_]/g, (n) => (n === "-" ? "+" : "/")),
    r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Mr(r);
}
const ls = d("$ZodBase64URL", (e, t) => {
    (t.pattern ?? (t.pattern = jr),
      T.init(e, t),
      e._zod.onattach.push((r) => {
        r._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (r) => {
        cs(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  ds = d("$ZodE164", (e, t) => {
    (t.pattern ?? (t.pattern = yo), T.init(e, t));
  });
function fs(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3) return !1;
    const [n] = r;
    if (!n) return !1;
    const o = JSON.parse(atob(n));
    return !(
      ("typ" in o && o?.typ !== "JWT") ||
      !o.alg ||
      (t && (!("alg" in o) || o.alg !== t))
    );
  } catch {
    return !1;
  }
}
const hs = d("$ZodJWT", (e, t) => {
    (T.init(e, t),
      (e._zod.check = (r) => {
        fs(r.value, t.alg) ||
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !t.abort,
          });
      }));
  }),
  Lr = d("$ZodNumber", (e, t) => {
    (W.init(e, t),
      (e._zod.pattern = e._zod.bag.pattern ?? $o),
      (e._zod.parse = (r, n) => {
        if (t.coerce)
          try {
            r.value = Number(r.value);
          } catch {}
        const o = r.value;
        if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
          return r;
        const s =
          typeof o == "number"
            ? Number.isNaN(o)
              ? "NaN"
              : Number.isFinite(o)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: o,
            inst: e,
            ...(s ? { received: s } : {}),
          }),
          r
        );
      }));
  }),
  ms = d("$ZodNumber", (e, t) => {
    (So.init(e, t), Lr.init(e, t));
  }),
  ps = d("$ZodUnknown", (e, t) => {
    (W.init(e, t), (e._zod.parse = (r) => r));
  }),
  gs = d("$ZodNever", (e, t) => {
    (W.init(e, t),
      (e._zod.parse = (r, n) => (
        r.issues.push({
          expected: "never",
          code: "invalid_type",
          input: r.value,
          inst: e,
        }),
        r
      )));
  });
function Gt(e, t, r) {
  (e.issues.length && t.issues.push(...Cr(r, e.issues)),
    (t.value[r] = e.value));
}
const _s = d("$ZodArray", (e, t) => {
  (W.init(e, t),
    (e._zod.parse = (r, n) => {
      const o = r.value;
      if (!Array.isArray(o))
        return (
          r.issues.push({
            expected: "array",
            code: "invalid_type",
            input: o,
            inst: e,
          }),
          r
        );
      r.value = Array(o.length);
      const s = [];
      for (let i = 0; i < o.length; i++) {
        const a = o[i],
          f = t.element._zod.run({ value: a, issues: [] }, n);
        f instanceof Promise ? s.push(f.then((m) => Gt(m, r, i))) : Gt(f, r, i);
      }
      return s.length ? Promise.all(s).then(() => r) : r;
    }));
});
function qe(e, t, r, n) {
  (e.issues.length && t.issues.push(...Cr(r, e.issues)),
    e.value === void 0
      ? r in n && (t.value[r] = void 0)
      : (t.value[r] = e.value));
}
function Br(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const r = Nn(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r),
  };
}
function Wr(e, t, r, n, o, s) {
  const i = [],
    a = o.keySet,
    f = o.catchall._zod,
    m = f.def.type;
  for (const g of Object.keys(t)) {
    if (a.has(g)) continue;
    if (m === "never") {
      i.push(g);
      continue;
    }
    const x = f.run({ value: t[g], issues: [] }, n);
    x instanceof Promise
      ? e.push(x.then((b) => qe(b, r, g, t)))
      : qe(x, r, g, t);
  }
  return (
    i.length &&
      r.issues.push({ code: "unrecognized_keys", keys: i, input: t, inst: s }),
    e.length ? Promise.all(e).then(() => r) : r
  );
}
const vs = d("$ZodObject", (e, t) => {
    if ((W.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get)) {
      const a = t.shape;
      Object.defineProperty(t, "shape", {
        get: () => {
          const f = { ...a };
          return (Object.defineProperty(t, "shape", { value: f }), f);
        },
      });
    }
    const n = yt(() => Br(t));
    D(e._zod, "propValues", () => {
      const a = t.shape,
        f = {};
      for (const m in a) {
        const g = a[m]._zod;
        if (g.values) {
          f[m] ?? (f[m] = new Set());
          for (const x of g.values) f[m].add(x);
        }
      }
      return f;
    });
    const o = We,
      s = t.catchall;
    let i;
    e._zod.parse = (a, f) => {
      i ?? (i = n.value);
      const m = a.value;
      if (!o(m))
        return (
          a.issues.push({
            expected: "object",
            code: "invalid_type",
            input: m,
            inst: e,
          }),
          a
        );
      a.value = {};
      const g = [],
        x = i.shape;
      for (const b of i.keys) {
        const I = x[b]._zod.run({ value: m[b], issues: [] }, f);
        I instanceof Promise
          ? g.push(I.then((F) => qe(F, a, b, m)))
          : qe(I, a, b, m);
      }
      return s
        ? Wr(g, m, a, f, n.value, e)
        : g.length
          ? Promise.all(g).then(() => a)
          : a;
    };
  }),
  bs = d("$ZodObjectJIT", (e, t) => {
    vs.init(e, t);
    const r = e._zod.parse,
      n = yt(() => Br(t)),
      o = (b) => {
        const S = new Uo(["shape", "payload", "ctx"]),
          I = n.value,
          F = (A) => {
            const $ = Ht(A);
            return `shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`;
          };
        S.write("const input = payload.value;");
        const R = Object.create(null);
        let re = 0;
        for (const A of I.keys) R[A] = `key_${re++}`;
        S.write("const newResult = {};");
        for (const A of I.keys) {
          const $ = R[A],
            E = Ht(A);
          (S.write(`const ${$} = ${F(A)};`),
            S.write(`
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        
        if (${$}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${$}.value;
        }
        
      `));
        }
        (S.write("payload.value = newResult;"), S.write("return payload;"));
        const Z = S.compile();
        return (A, $) => Z(b, A, $);
      };
    let s;
    const i = We,
      a = !Vr.jitless,
      m = a && Vn.value,
      g = t.catchall;
    let x;
    e._zod.parse = (b, S) => {
      x ?? (x = n.value);
      const I = b.value;
      return i(I)
        ? a && m && S?.async === !1 && S.jitless !== !0
          ? (s || (s = o(t.shape)),
            (b = s(b, S)),
            g ? Wr([], I, b, S, x, e) : b)
          : r(b, S)
        : (b.issues.push({
            expected: "object",
            code: "invalid_type",
            input: I,
            inst: e,
          }),
          b);
    };
  });
function Jt(e, t, r, n) {
  for (const s of e) if (s.issues.length === 0) return ((t.value = s.value), t);
  const o = e.filter((s) => !Ze(s));
  return o.length === 1
    ? ((t.value = o[0].value), o[0])
    : (t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: r,
        errors: e.map((s) => s.issues.map((i) => be(i, n, ve()))),
      }),
      t);
}
const ys = d("$ZodUnion", (e, t) => {
    (W.init(e, t),
      D(e._zod, "optin", () =>
        t.options.some((o) => o._zod.optin === "optional")
          ? "optional"
          : void 0,
      ),
      D(e._zod, "optout", () =>
        t.options.some((o) => o._zod.optout === "optional")
          ? "optional"
          : void 0,
      ),
      D(e._zod, "values", () => {
        if (t.options.every((o) => o._zod.values))
          return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
      }),
      D(e._zod, "pattern", () => {
        if (t.options.every((o) => o._zod.pattern)) {
          const o = t.options.map((s) => s._zod.pattern);
          return new RegExp(`^(${o.map((s) => kt(s.source)).join("|")})$`);
        }
      }));
    const r = t.options.length === 1,
      n = t.options[0]._zod.run;
    e._zod.parse = (o, s) => {
      if (r) return n(o, s);
      let i = !1;
      const a = [];
      for (const f of t.options) {
        const m = f._zod.run({ value: o.value, issues: [] }, s);
        if (m instanceof Promise) (a.push(m), (i = !0));
        else {
          if (m.issues.length === 0) return m;
          a.push(m);
        }
      }
      return i ? Promise.all(a).then((f) => Jt(f, o, e, s)) : Jt(a, o, e, s);
    };
  }),
  ws = d("$ZodIntersection", (e, t) => {
    (W.init(e, t),
      (e._zod.parse = (r, n) => {
        const o = r.value,
          s = t.left._zod.run({ value: o, issues: [] }, n),
          i = t.right._zod.run({ value: o, issues: [] }, n);
        return s instanceof Promise || i instanceof Promise
          ? Promise.all([s, i]).then(([f, m]) => Yt(r, f, m))
          : Yt(r, s, i);
      }));
  });
function mt(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Ne(e) && Ne(t)) {
    const r = Object.keys(t),
      n = Object.keys(e).filter((s) => r.indexOf(s) !== -1),
      o = { ...e, ...t };
    for (const s of n) {
      const i = mt(e[s], t[s]);
      if (!i.valid)
        return { valid: !1, mergeErrorPath: [s, ...i.mergeErrorPath] };
      o[s] = i.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        s = t[n],
        i = mt(o, s);
      if (!i.valid)
        return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] };
      r.push(i.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Yt(e, t, r) {
  if (
    (t.issues.length && e.issues.push(...t.issues),
    r.issues.length && e.issues.push(...r.issues),
    Ze(e))
  )
    return e;
  const n = mt(t.value, r.value);
  if (!n.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`,
    );
  return ((e.value = n.data), e);
}
const ks = d("$ZodEnum", (e, t) => {
    W.init(e, t);
    const r = Fn(t.entries),
      n = new Set(r);
    ((e._zod.values = n),
      (e._zod.pattern = new RegExp(
        `^(${r
          .filter((o) => In.has(typeof o))
          .map((o) => (typeof o == "string" ? Ye(o) : o.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (o, s) => {
        const i = o.value;
        return (
          n.has(i) ||
            o.issues.push({
              code: "invalid_value",
              values: r,
              input: i,
              inst: e,
            }),
          o
        );
      }));
  }),
  xs = d("$ZodTransform", (e, t) => {
    (W.init(e, t),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") throw new Sr(e.constructor.name);
        const o = t.transform(r.value, r);
        if (n.async)
          return (o instanceof Promise ? o : Promise.resolve(o)).then(
            (i) => ((r.value = i), r),
          );
        if (o instanceof Promise) throw new $e();
        return ((r.value = o), r);
      }));
  });
function Xt(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const zs = d("$ZodOptional", (e, t) => {
    (W.init(e, t),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      D(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, void 0])
          : void 0,
      ),
      D(e._zod, "pattern", () => {
        const r = t.innerType._zod.pattern;
        return r ? new RegExp(`^(${kt(r.source)})?$`) : void 0;
      }),
      (e._zod.parse = (r, n) => {
        if (t.innerType._zod.optin === "optional") {
          const o = t.innerType._zod.run(r, n);
          return o instanceof Promise
            ? o.then((s) => Xt(s, r.value))
            : Xt(o, r.value);
        }
        return r.value === void 0 ? r : t.innerType._zod.run(r, n);
      }));
  }),
  Zs = d("$ZodNullable", (e, t) => {
    (W.init(e, t),
      D(e._zod, "optin", () => t.innerType._zod.optin),
      D(e._zod, "optout", () => t.innerType._zod.optout),
      D(e._zod, "pattern", () => {
        const r = t.innerType._zod.pattern;
        return r ? new RegExp(`^(${kt(r.source)}|null)$`) : void 0;
      }),
      D(e._zod, "values", () =>
        t.innerType._zod.values
          ? new Set([...t.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (r, n) =>
        r.value === null ? r : t.innerType._zod.run(r, n)));
  }),
  $s = d("$ZodDefault", (e, t) => {
    (W.init(e, t),
      (e._zod.optin = "optional"),
      D(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") return t.innerType._zod.run(r, n);
        if (r.value === void 0) return ((r.value = t.defaultValue), r);
        const o = t.innerType._zod.run(r, n);
        return o instanceof Promise ? o.then((s) => Qt(s, t)) : Qt(o, t);
      }));
  });
function Qt(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
const Es = d("$ZodPrefault", (e, t) => {
    (W.init(e, t),
      (e._zod.optin = "optional"),
      D(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (r, n) => (
        n.direction === "backward" ||
          (r.value === void 0 && (r.value = t.defaultValue)),
        t.innerType._zod.run(r, n)
      )));
  }),
  As = d("$ZodNonOptional", (e, t) => {
    (W.init(e, t),
      D(e._zod, "values", () => {
        const r = t.innerType._zod.values;
        return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
      }),
      (e._zod.parse = (r, n) => {
        const o = t.innerType._zod.run(r, n);
        return o instanceof Promise ? o.then((s) => er(s, e)) : er(o, e);
      }));
  });
function er(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: t,
      }),
    e
  );
}
const Fs = d("$ZodCatch", (e, t) => {
    (W.init(e, t),
      D(e._zod, "optin", () => t.innerType._zod.optin),
      D(e._zod, "optout", () => t.innerType._zod.optout),
      D(e._zod, "values", () => t.innerType._zod.values),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") return t.innerType._zod.run(r, n);
        const o = t.innerType._zod.run(r, n);
        return o instanceof Promise
          ? o.then(
              (s) => (
                (r.value = s.value),
                s.issues.length &&
                  ((r.value = t.catchValue({
                    ...r,
                    error: { issues: s.issues.map((i) => be(i, n, ve())) },
                    input: r.value,
                  })),
                  (r.issues = [])),
                r
              ),
            )
          : ((r.value = o.value),
            o.issues.length &&
              ((r.value = t.catchValue({
                ...r,
                error: { issues: o.issues.map((s) => be(s, n, ve())) },
                input: r.value,
              })),
              (r.issues = [])),
            r);
      }));
  }),
  Ss = d("$ZodPipe", (e, t) => {
    (W.init(e, t),
      D(e._zod, "values", () => t.in._zod.values),
      D(e._zod, "optin", () => t.in._zod.optin),
      D(e._zod, "optout", () => t.out._zod.optout),
      D(e._zod, "propValues", () => t.in._zod.propValues),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") {
          const s = t.out._zod.run(r, n);
          return s instanceof Promise
            ? s.then((i) => Re(i, t.in, n))
            : Re(s, t.in, n);
        }
        const o = t.in._zod.run(r, n);
        return o instanceof Promise
          ? o.then((s) => Re(s, t.out, n))
          : Re(o, t.out, n);
      }));
  });
function Re(e, t, r) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Vs = d("$ZodReadonly", (e, t) => {
  (W.init(e, t),
    D(e._zod, "propValues", () => t.innerType._zod.propValues),
    D(e._zod, "values", () => t.innerType._zod.values),
    D(e._zod, "optin", () => t.innerType._zod.optin),
    D(e._zod, "optout", () => t.innerType._zod.optout),
    (e._zod.parse = (r, n) => {
      if (n.direction === "backward") return t.innerType._zod.run(r, n);
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then(tr) : tr(o);
    }));
});
function tr(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
const Is = d("$ZodCustom", (e, t) => {
  (X.init(e, t),
    W.init(e, t),
    (e._zod.parse = (r, n) => r),
    (e._zod.check = (r) => {
      const n = r.value,
        o = t.fn(n);
      if (o instanceof Promise) return o.then((s) => rr(s, r, n, e));
      rr(o, r, n, e);
    }));
});
function rr(e, t, r, n) {
  if (!e) {
    const o = {
      code: "custom",
      input: r,
      inst: n,
      path: [...(n._zod.def.path ?? [])],
      continue: !n._zod.def.abort,
    };
    (n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(Ce(o)));
  }
}
class Ns {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add(t, ...r) {
    const n = r[0];
    if ((this._map.set(t, n), n && typeof n == "object" && "id" in n)) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  clear() {
    return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
  }
  remove(t) {
    const r = this._map.get(t);
    return (
      r && typeof r == "object" && "id" in r && this._idmap.delete(r.id),
      this._map.delete(t),
      this
    );
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...(this.get(r) ?? {}) };
      delete n.id;
      const o = { ...n, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Cs() {
  return new Ns();
}
const Ue = Cs();
function Os(e, t) {
  return new e({ type: "string", ...k(t) });
}
function js(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function nr(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ds(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ts(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...k(t),
  });
}
function Ps(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...k(t),
  });
}
function Rs(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...k(t),
  });
}
function Us(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ms(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ls(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Bs(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ws(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function qs(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Hs(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ks(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Gs(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Js(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Ys(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Xs(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function Qs(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ei(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ti(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ri(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...k(t),
  });
}
function ni(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...k(t),
  });
}
function oi(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...k(t),
  });
}
function si(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...k(t),
  });
}
function ii(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...k(t),
  });
}
function ui(e, t) {
  return new e({ type: "number", checks: [], ...k(t) });
}
function ai(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...k(t),
  });
}
function ci(e) {
  return new e({ type: "unknown" });
}
function li(e, t) {
  return new e({ type: "never", ...k(t) });
}
function or(e, t) {
  return new Rr({ check: "less_than", ...k(t), value: e, inclusive: !1 });
}
function lt(e, t) {
  return new Rr({ check: "less_than", ...k(t), value: e, inclusive: !0 });
}
function sr(e, t) {
  return new Ur({ check: "greater_than", ...k(t), value: e, inclusive: !1 });
}
function dt(e, t) {
  return new Ur({ check: "greater_than", ...k(t), value: e, inclusive: !0 });
}
function ir(e, t) {
  return new Fo({ check: "multiple_of", ...k(t), value: e });
}
function qr(e, t) {
  return new Vo({ check: "max_length", ...k(t), maximum: e });
}
function He(e, t) {
  return new Io({ check: "min_length", ...k(t), minimum: e });
}
function Hr(e, t) {
  return new No({ check: "length_equals", ...k(t), length: e });
}
function di(e, t) {
  return new Co({
    check: "string_format",
    format: "regex",
    ...k(t),
    pattern: e,
  });
}
function fi(e) {
  return new Oo({ check: "string_format", format: "lowercase", ...k(e) });
}
function hi(e) {
  return new jo({ check: "string_format", format: "uppercase", ...k(e) });
}
function mi(e, t) {
  return new Do({
    check: "string_format",
    format: "includes",
    ...k(t),
    includes: e,
  });
}
function pi(e, t) {
  return new To({
    check: "string_format",
    format: "starts_with",
    ...k(t),
    prefix: e,
  });
}
function gi(e, t) {
  return new Po({
    check: "string_format",
    format: "ends_with",
    ...k(t),
    suffix: e,
  });
}
function Oe(e) {
  return new Ro({ check: "overwrite", tx: e });
}
function _i(e) {
  return Oe((t) => t.normalize(e));
}
function vi() {
  return Oe((e) => e.trim());
}
function bi() {
  return Oe((e) => e.toLowerCase());
}
function yi() {
  return Oe((e) => e.toUpperCase());
}
function wi(e, t, r) {
  return new e({ type: "array", element: t, ...k(r) });
}
function ki(e, t, r) {
  return new e({ type: "custom", check: "custom", fn: t, ...k(r) });
}
function xi(e) {
  const t = zi(
    (r) => (
      (r.addIssue = (n) => {
        if (typeof n == "string") r.issues.push(Ce(n, r.value, t._zod.def));
        else {
          const o = n;
          (o.fatal && (o.continue = !1),
            o.code ?? (o.code = "custom"),
            o.input ?? (o.input = r.value),
            o.inst ?? (o.inst = t),
            o.continue ?? (o.continue = !t._zod.def.abort),
            r.issues.push(Ce(o)));
        }
      }),
      e(r.value, r)
    ),
  );
  return t;
}
function zi(e, t) {
  const r = new X({ check: "custom", ...k(t) });
  return ((r._zod.check = e), r);
}
const Zi = d("ZodISODateTime", (e, t) => {
  (es.init(e, t), P.init(e, t));
});
function $i(e) {
  return ni(Zi, e);
}
const Ei = d("ZodISODate", (e, t) => {
  (ts.init(e, t), P.init(e, t));
});
function Ai(e) {
  return oi(Ei, e);
}
const Fi = d("ZodISOTime", (e, t) => {
  (rs.init(e, t), P.init(e, t));
});
function Si(e) {
  return si(Fi, e);
}
const Vi = d("ZodISODuration", (e, t) => {
  (ns.init(e, t), P.init(e, t));
});
function Ii(e) {
  return ii(Vi, e);
}
const Ni = (e, t) => {
    (zt.init(e, t),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (r) => Ln(e, r) },
        flatten: { value: (r) => Mn(e, r) },
        addIssue: {
          value: (r) => {
            (e.issues.push(r), (e.message = JSON.stringify(e.issues, ht, 2)));
          },
        },
        addIssues: {
          value: (r) => {
            (e.issues.push(...r),
              (e.message = JSON.stringify(e.issues, ht, 2)));
          },
        },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  oe = d("ZodError", Ni, { Parent: Error }),
  Ci = Qe(oe),
  Oi = et(oe),
  ji = tt(oe),
  Di = rt(oe),
  Ti = Kn(oe),
  Pi = Gn(oe),
  Ri = Jn(oe),
  Ui = Yn(oe),
  Mi = Xn(oe),
  Li = Qn(oe),
  Bi = eo(oe),
  Wi = to(oe),
  H = d(
    "ZodType",
    (e, t) => (
      W.init(e, t),
      (e.def = t),
      (e.type = t.type),
      Object.defineProperty(e, "_def", { value: t }),
      (e.check = (...r) =>
        e.clone(
          we(t, {
            checks: [
              ...(t.checks ?? []),
              ...r.map((n) =>
                typeof n == "function"
                  ? {
                      _zod: {
                        check: n,
                        def: { check: "custom" },
                        onattach: [],
                      },
                    }
                  : n,
              ),
            ],
          }),
        )),
      (e.clone = (r, n) => me(e, r, n)),
      (e.brand = () => e),
      (e.register = (r, n) => (r.add(e, n), e)),
      (e.parse = (r, n) => Ci(e, r, n, { callee: e.parse })),
      (e.safeParse = (r, n) => ji(e, r, n)),
      (e.parseAsync = async (r, n) => Oi(e, r, n, { callee: e.parseAsync })),
      (e.safeParseAsync = async (r, n) => Di(e, r, n)),
      (e.spa = e.safeParseAsync),
      (e.encode = (r, n) => Ti(e, r, n)),
      (e.decode = (r, n) => Pi(e, r, n)),
      (e.encodeAsync = async (r, n) => Ri(e, r, n)),
      (e.decodeAsync = async (r, n) => Ui(e, r, n)),
      (e.safeEncode = (r, n) => Mi(e, r, n)),
      (e.safeDecode = (r, n) => Li(e, r, n)),
      (e.safeEncodeAsync = async (r, n) => Bi(e, r, n)),
      (e.safeDecodeAsync = async (r, n) => Wi(e, r, n)),
      (e.refine = (r, n) => e.check(Ou(r, n))),
      (e.superRefine = (r) => e.check(ju(r))),
      (e.overwrite = (r) => e.check(Oe(r))),
      (e.optional = () => fr(e)),
      (e.nullable = () => hr(e)),
      (e.nullish = () => fr(hr(e))),
      (e.nonoptional = (r) => Fu(e, r)),
      (e.array = () => pu(e)),
      (e.or = (r) => vu([e, r])),
      (e.and = (r) => yu(e, r)),
      (e.transform = (r) => mr(e, xu(r))),
      (e.default = (r) => $u(e, r)),
      (e.prefault = (r) => Au(e, r)),
      (e.catch = (r) => Vu(e, r)),
      (e.pipe = (r) => mr(e, r)),
      (e.readonly = () => Cu(e)),
      (e.describe = (r) => {
        const n = e.clone();
        return (Ue.add(n, { description: r }), n);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return Ue.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...r) => {
        if (r.length === 0) return Ue.get(e);
        const n = e.clone();
        return (Ue.add(n, r[0]), n);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  Kr = d("_ZodString", (e, t) => {
    (Zt.init(e, t), H.init(e, t));
    const r = e._zod.bag;
    ((e.format = r.format ?? null),
      (e.minLength = r.minimum ?? null),
      (e.maxLength = r.maximum ?? null),
      (e.regex = (...n) => e.check(di(...n))),
      (e.includes = (...n) => e.check(mi(...n))),
      (e.startsWith = (...n) => e.check(pi(...n))),
      (e.endsWith = (...n) => e.check(gi(...n))),
      (e.min = (...n) => e.check(He(...n))),
      (e.max = (...n) => e.check(qr(...n))),
      (e.length = (...n) => e.check(Hr(...n))),
      (e.nonempty = (...n) => e.check(He(1, ...n))),
      (e.lowercase = (n) => e.check(fi(n))),
      (e.uppercase = (n) => e.check(hi(n))),
      (e.trim = () => e.check(vi())),
      (e.normalize = (...n) => e.check(_i(...n))),
      (e.toLowerCase = () => e.check(bi())),
      (e.toUpperCase = () => e.check(yi())));
  }),
  qi = d("ZodString", (e, t) => {
    (Zt.init(e, t),
      Kr.init(e, t),
      (e.email = (r) => e.check(js(Hi, r))),
      (e.url = (r) => e.check(Us(Ki, r))),
      (e.jwt = (r) => e.check(ri(cu, r))),
      (e.emoji = (r) => e.check(Ms(Gi, r))),
      (e.guid = (r) => e.check(nr(ar, r))),
      (e.uuid = (r) => e.check(Ds(Me, r))),
      (e.uuidv4 = (r) => e.check(Ts(Me, r))),
      (e.uuidv6 = (r) => e.check(Ps(Me, r))),
      (e.uuidv7 = (r) => e.check(Rs(Me, r))),
      (e.nanoid = (r) => e.check(Ls(Ji, r))),
      (e.guid = (r) => e.check(nr(ar, r))),
      (e.cuid = (r) => e.check(Bs(Yi, r))),
      (e.cuid2 = (r) => e.check(Ws(Xi, r))),
      (e.ulid = (r) => e.check(qs(Qi, r))),
      (e.base64 = (r) => e.check(Qs(iu, r))),
      (e.base64url = (r) => e.check(ei(uu, r))),
      (e.xid = (r) => e.check(Hs(eu, r))),
      (e.ksuid = (r) => e.check(Ks(tu, r))),
      (e.ipv4 = (r) => e.check(Gs(ru, r))),
      (e.ipv6 = (r) => e.check(Js(nu, r))),
      (e.cidrv4 = (r) => e.check(Ys(ou, r))),
      (e.cidrv6 = (r) => e.check(Xs(su, r))),
      (e.e164 = (r) => e.check(ti(au, r))),
      (e.datetime = (r) => e.check($i(r))),
      (e.date = (r) => e.check(Ai(r))),
      (e.time = (r) => e.check(Si(r))),
      (e.duration = (r) => e.check(Ii(r))));
  });
function ur(e) {
  return Os(qi, e);
}
const P = d("ZodStringFormat", (e, t) => {
    (T.init(e, t), Kr.init(e, t));
  }),
  Hi = d("ZodEmail", (e, t) => {
    (Wo.init(e, t), P.init(e, t));
  }),
  ar = d("ZodGUID", (e, t) => {
    (Lo.init(e, t), P.init(e, t));
  }),
  Me = d("ZodUUID", (e, t) => {
    (Bo.init(e, t), P.init(e, t));
  }),
  Ki = d("ZodURL", (e, t) => {
    (qo.init(e, t), P.init(e, t));
  }),
  Gi = d("ZodEmoji", (e, t) => {
    (Ho.init(e, t), P.init(e, t));
  }),
  Ji = d("ZodNanoID", (e, t) => {
    (Ko.init(e, t), P.init(e, t));
  }),
  Yi = d("ZodCUID", (e, t) => {
    (Go.init(e, t), P.init(e, t));
  }),
  Xi = d("ZodCUID2", (e, t) => {
    (Jo.init(e, t), P.init(e, t));
  }),
  Qi = d("ZodULID", (e, t) => {
    (Yo.init(e, t), P.init(e, t));
  }),
  eu = d("ZodXID", (e, t) => {
    (Xo.init(e, t), P.init(e, t));
  }),
  tu = d("ZodKSUID", (e, t) => {
    (Qo.init(e, t), P.init(e, t));
  }),
  ru = d("ZodIPv4", (e, t) => {
    (os.init(e, t), P.init(e, t));
  }),
  nu = d("ZodIPv6", (e, t) => {
    (ss.init(e, t), P.init(e, t));
  }),
  ou = d("ZodCIDRv4", (e, t) => {
    (is.init(e, t), P.init(e, t));
  }),
  su = d("ZodCIDRv6", (e, t) => {
    (us.init(e, t), P.init(e, t));
  }),
  iu = d("ZodBase64", (e, t) => {
    (as.init(e, t), P.init(e, t));
  }),
  uu = d("ZodBase64URL", (e, t) => {
    (ls.init(e, t), P.init(e, t));
  }),
  au = d("ZodE164", (e, t) => {
    (ds.init(e, t), P.init(e, t));
  }),
  cu = d("ZodJWT", (e, t) => {
    (hs.init(e, t), P.init(e, t));
  }),
  Gr = d("ZodNumber", (e, t) => {
    (Lr.init(e, t),
      H.init(e, t),
      (e.gt = (n, o) => e.check(sr(n, o))),
      (e.gte = (n, o) => e.check(dt(n, o))),
      (e.min = (n, o) => e.check(dt(n, o))),
      (e.lt = (n, o) => e.check(or(n, o))),
      (e.lte = (n, o) => e.check(lt(n, o))),
      (e.max = (n, o) => e.check(lt(n, o))),
      (e.int = (n) => e.check(cr(n))),
      (e.safe = (n) => e.check(cr(n))),
      (e.positive = (n) => e.check(sr(0, n))),
      (e.nonnegative = (n) => e.check(dt(0, n))),
      (e.negative = (n) => e.check(or(0, n))),
      (e.nonpositive = (n) => e.check(lt(0, n))),
      (e.multipleOf = (n, o) => e.check(ir(n, o))),
      (e.step = (n, o) => e.check(ir(n, o))),
      (e.finite = () => e));
    const r = e._zod.bag;
    ((e.minValue =
      Math.max(
        r.minimum ?? Number.NEGATIVE_INFINITY,
        r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
      ) ?? null),
      (e.maxValue =
        Math.min(
          r.maximum ?? Number.POSITIVE_INFINITY,
          r.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
        ) ?? null),
      (e.isInt =
        (r.format ?? "").includes("int") ||
        Number.isSafeInteger(r.multipleOf ?? 0.5)),
      (e.isFinite = !0),
      (e.format = r.format ?? null));
  });
function Le(e) {
  return ui(Gr, e);
}
const lu = d("ZodNumberFormat", (e, t) => {
  (ms.init(e, t), Gr.init(e, t));
});
function cr(e) {
  return ai(lu, e);
}
const du = d("ZodUnknown", (e, t) => {
  (ps.init(e, t), H.init(e, t));
});
function lr() {
  return ci(du);
}
const fu = d("ZodNever", (e, t) => {
  (gs.init(e, t), H.init(e, t));
});
function hu(e) {
  return li(fu, e);
}
const mu = d("ZodArray", (e, t) => {
  (_s.init(e, t),
    H.init(e, t),
    (e.element = t.element),
    (e.min = (r, n) => e.check(He(r, n))),
    (e.nonempty = (r) => e.check(He(1, r))),
    (e.max = (r, n) => e.check(qr(r, n))),
    (e.length = (r, n) => e.check(Hr(r, n))),
    (e.unwrap = () => e.element));
});
function pu(e, t) {
  return wi(mu, e, t);
}
const gu = d("ZodObject", (e, t) => {
  (bs.init(e, t),
    H.init(e, t),
    D(e, "shape", () => t.shape),
    (e.keyof = () => wu(Object.keys(e._zod.def.shape))),
    (e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: lr() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: lr() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: hu() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (r) => Dn(e, r)),
    (e.safeExtend = (r) => Tn(e, r)),
    (e.merge = (r) => Pn(e, r)),
    (e.pick = (r) => On(e, r)),
    (e.omit = (r) => jn(e, r)),
    (e.partial = (...r) => Rn(Jr, e, r[0])),
    (e.required = (...r) => Un(Yr, e, r[0])));
});
function dr(e, t) {
  const r = { type: "object", shape: e ?? {}, ...k(t) };
  return new gu(r);
}
const _u = d("ZodUnion", (e, t) => {
  (ys.init(e, t), H.init(e, t), (e.options = t.options));
});
function vu(e, t) {
  return new _u({ type: "union", options: e, ...k(t) });
}
const bu = d("ZodIntersection", (e, t) => {
  (ws.init(e, t), H.init(e, t));
});
function yu(e, t) {
  return new bu({ type: "intersection", left: e, right: t });
}
const pt = d("ZodEnum", (e, t) => {
  (ks.init(e, t),
    H.init(e, t),
    (e.enum = t.entries),
    (e.options = Object.values(t.entries)));
  const r = new Set(Object.keys(t.entries));
  ((e.extract = (n, o) => {
    const s = {};
    for (const i of n)
      if (r.has(i)) s[i] = t.entries[i];
      else throw new Error(`Key ${i} not found in enum`);
    return new pt({ ...t, checks: [], ...k(o), entries: s });
  }),
    (e.exclude = (n, o) => {
      const s = { ...t.entries };
      for (const i of n)
        if (r.has(i)) delete s[i];
        else throw new Error(`Key ${i} not found in enum`);
      return new pt({ ...t, checks: [], ...k(o), entries: s });
    }));
});
function wu(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new pt({ type: "enum", entries: r, ...k(t) });
}
const ku = d("ZodTransform", (e, t) => {
  (xs.init(e, t),
    H.init(e, t),
    (e._zod.parse = (r, n) => {
      if (n.direction === "backward") throw new Sr(e.constructor.name);
      r.addIssue = (s) => {
        if (typeof s == "string") r.issues.push(Ce(s, r.value, t));
        else {
          const i = s;
          (i.fatal && (i.continue = !1),
            i.code ?? (i.code = "custom"),
            i.input ?? (i.input = r.value),
            i.inst ?? (i.inst = e),
            r.issues.push(Ce(i)));
        }
      };
      const o = t.transform(r.value, r);
      return o instanceof Promise
        ? o.then((s) => ((r.value = s), r))
        : ((r.value = o), r);
    }));
});
function xu(e) {
  return new ku({ type: "transform", transform: e });
}
const Jr = d("ZodOptional", (e, t) => {
  (zs.init(e, t), H.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function fr(e) {
  return new Jr({ type: "optional", innerType: e });
}
const zu = d("ZodNullable", (e, t) => {
  (Zs.init(e, t), H.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function hr(e) {
  return new zu({ type: "nullable", innerType: e });
}
const Zu = d("ZodDefault", (e, t) => {
  ($s.init(e, t),
    H.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function $u(e, t) {
  return new Zu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Nr(t);
    },
  });
}
const Eu = d("ZodPrefault", (e, t) => {
  (Es.init(e, t), H.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Au(e, t) {
  return new Eu({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Nr(t);
    },
  });
}
const Yr = d("ZodNonOptional", (e, t) => {
  (As.init(e, t), H.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Fu(e, t) {
  return new Yr({ type: "nonoptional", innerType: e, ...k(t) });
}
const Su = d("ZodCatch", (e, t) => {
  (Fs.init(e, t),
    H.init(e, t),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Vu(e, t) {
  return new Su({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t,
  });
}
const Iu = d("ZodPipe", (e, t) => {
  (Ss.init(e, t), H.init(e, t), (e.in = t.in), (e.out = t.out));
});
function mr(e, t) {
  return new Iu({ type: "pipe", in: e, out: t });
}
const Nu = d("ZodReadonly", (e, t) => {
  (Vs.init(e, t), H.init(e, t), (e.unwrap = () => e._zod.def.innerType));
});
function Cu(e) {
  return new Nu({ type: "readonly", innerType: e });
}
const Xr = d("ZodCustom", (e, t) => {
  (Is.init(e, t), H.init(e, t));
});
function Ou(e, t = {}) {
  return ki(Xr, e, t);
}
function ju(e) {
  return xi(e);
}
function Du(e, t = { error: `Input not instance of ${e.name}` }) {
  const r = new Xr({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof e,
    abort: !0,
    ...k(t),
  });
  return ((r._zod.bag.Class = e), r);
}
const Tu = dr({
  title: ur()
    .min(1, "상품명을 입력해주세요.")
    .max(100, "상품명은 100자 이내로 입력해주세요."),
  description: ur()
    .min(1, "상품 설명을 입력해주세요.")
    .max(1e3, "상품 설명은 1000자 이내로 입력해주세요."),
  image: Du(File, { message: "사진을 등록해주세요." })
    .refine((e) => e.size <= 5 * 1024 * 1024, {
      message: "이미지 크기는 5MB 이하여야 합니다.",
    })
    .refine((e) => e.type.startsWith("image/"), {
      message: "이미지 파일만 업로드 가능합니다.",
    }),
  startPrice: Le()
    .min(1, "시작가는 최소 1잔 이상이어야 합니다.")
    .max(999999, "시작가는 999,999잔을 초과할 수 없습니다."),
  duration: dr({
    days: Le().min(0).max(365),
    hours: Le().min(0).max(23),
    minutes: Le().min(0).max(59),
  }).refine((e) => e.days * 24 * 60 + e.hours * 60 + e.minutes >= 1, {
    message: "경매 기간은 최소 1분 이상이어야 합니다.",
  }),
});
function Be(e) {
  return e.replace(/\D+/g, "");
}
function Pu(e) {
  const t = ((e.days * 24 + e.hours) * 60 + e.minutes) * 60 * 1e3;
  return new Date(Date.now() + t).toISOString();
}
var je = (e) => e.type === "checkbox",
  _e = (e) => e instanceof Date,
  Y = (e) => e == null;
const Qr = (e) => typeof e == "object";
var B = (e) => !Y(e) && !Array.isArray(e) && Qr(e) && !_e(e),
  en = (e) =>
    B(e) && e.target ? (je(e.target) ? e.target.checked : e.target.value) : e,
  Ru = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  tn = (e, t) => e.has(Ru(t)),
  Uu = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return B(t) && t.hasOwnProperty("isPrototypeOf");
  },
  $t =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function q(e) {
  let t;
  const r = Array.isArray(e),
    n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (!($t && (e instanceof Blob || n)) && (r || B(e)))
    if (((t = r ? [] : Object.create(Object.getPrototypeOf(e))), !r && !Uu(e)))
      t = e;
    else for (const o in e) e.hasOwnProperty(o) && (t[o] = q(e[o]));
  else return e;
  return t;
}
var ot = (e) => /^\w*$/.test(e),
  U = (e) => e === void 0,
  Et = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  At = (e) => Et(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  _ = (e, t, r) => {
    if (!t || !B(e)) return r;
    const n = (ot(t) ? [t] : At(t)).reduce((o, s) => (Y(o) ? o : o[s]), e);
    return U(n) || n === e ? (U(e[t]) ? r : e[t]) : n;
  },
  ee = (e) => typeof e == "boolean",
  C = (e, t, r) => {
    let n = -1;
    const o = ot(t) ? [t] : At(t),
      s = o.length,
      i = s - 1;
    for (; ++n < s; ) {
      const a = o[n];
      let f = r;
      if (n !== i) {
        const m = e[a];
        f = B(m) || Array.isArray(m) ? m : isNaN(+o[n + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      ((e[a] = f), (e = e[a]));
    }
  };
const Ke = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ie = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  fe = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  rn = z.createContext(null);
rn.displayName = "HookFormContext";
const Ft = () => z.useContext(rn);
var nn = (e, t, r, n = !0) => {
  const o = { defaultValues: t._defaultValues };
  for (const s in e)
    Object.defineProperty(o, s, {
      get: () => {
        const i = s;
        return (
          t._proxyFormState[i] !== ie.all &&
            (t._proxyFormState[i] = !n || ie.all),
          r && (r[i] = !0),
          e[i]
        );
      },
    });
  return o;
};
const St = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function Mu(e) {
  const t = Ft(),
    { control: r = t.control, disabled: n, name: o, exact: s } = e || {},
    [i, a] = z.useState(r._formState),
    f = z.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    St(
      () =>
        r._subscribe({
          name: o,
          formState: f.current,
          exact: s,
          callback: (m) => {
            !n && a({ ...r._formState, ...m });
          },
        }),
      [o, n, s],
    ),
    z.useEffect(() => {
      f.current.isValid && r._setValid(!0);
    }, [r]),
    z.useMemo(() => nn(i, r, f.current, !1), [i, r])
  );
}
var te = (e) => typeof e == "string",
  gt = (e, t, r, n, o) =>
    te(e)
      ? (n && t.watch.add(e), _(r, e, o))
      : Array.isArray(e)
        ? e.map((s) => (n && t.watch.add(s), _(r, s)))
        : (n && (t.watchAll = !0), r),
  _t = (e) => Y(e) || !Qr(e);
function ue(e, t, r = new WeakSet()) {
  if (_t(e) || _t(t)) return e === t;
  if (_e(e) && _e(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    o = Object.keys(t);
  if (n.length !== o.length) return !1;
  if (r.has(e) || r.has(t)) return !0;
  (r.add(e), r.add(t));
  for (const s of n) {
    const i = e[s];
    if (!o.includes(s)) return !1;
    if (s !== "ref") {
      const a = t[s];
      if (
        (_e(i) && _e(a)) ||
        (B(i) && B(a)) ||
        (Array.isArray(i) && Array.isArray(a))
          ? !ue(i, a, r)
          : i !== a
      )
        return !1;
    }
  }
  return !0;
}
function Lu(e) {
  const t = Ft(),
    {
      control: r = t.control,
      name: n,
      defaultValue: o,
      disabled: s,
      exact: i,
      compute: a,
    } = e || {},
    f = z.useRef(o),
    m = z.useRef(a),
    g = z.useRef(void 0),
    x = z.useRef(r),
    b = z.useRef(n);
  m.current = a;
  const [S, I] = z.useState(() => {
      const $ = r._getWatch(n, f.current);
      return m.current ? m.current($) : $;
    }),
    F = z.useCallback(
      ($) => {
        const E = gt(n, r._names, $ || r._formValues, !1, f.current);
        return m.current ? m.current(E) : E;
      },
      [r._formValues, r._names, n],
    ),
    R = z.useCallback(
      ($) => {
        if (!s) {
          const E = gt(n, r._names, $ || r._formValues, !1, f.current);
          if (m.current) {
            const Q = m.current(E);
            ue(Q, g.current) || (I(Q), (g.current = Q));
          } else I(E);
        }
      },
      [r._formValues, r._names, s, n],
    );
  (St(
    () => (
      (x.current !== r || !ue(b.current, n)) &&
        ((x.current = r), (b.current = n), R()),
      r._subscribe({
        name: n,
        formState: { values: !0 },
        exact: i,
        callback: ($) => {
          R($.values);
        },
      })
    ),
    [r, i, n, R],
  ),
    z.useEffect(() => r._removeUnmounted()));
  const re = x.current !== r,
    Z = b.current,
    A = z.useMemo(() => {
      if (s) return null;
      const $ = !re && !ue(Z, n);
      return re || $ ? F() : null;
    }, [s, re, n, Z, F]);
  return A !== null ? A : S;
}
function Bu(e) {
  const t = Ft(),
    {
      name: r,
      disabled: n,
      control: o = t.control,
      shouldUnregister: s,
      defaultValue: i,
    } = e,
    a = tn(o._names.array, r),
    f = z.useMemo(
      () => _(o._formValues, r, _(o._defaultValues, r, i)),
      [o, r, i],
    ),
    m = Lu({ control: o, name: r, defaultValue: f, exact: !0 }),
    g = Mu({ control: o, name: r, exact: !0 }),
    x = z.useRef(e),
    b = z.useRef(void 0),
    S = z.useRef(
      o.register(r, {
        ...e.rules,
        value: m,
        ...(ee(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    );
  x.current = e;
  const I = z.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!_(g.errors, r) },
            isDirty: { enumerable: !0, get: () => !!_(g.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!_(g.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!_(g.validatingFields, r),
            },
            error: { enumerable: !0, get: () => _(g.errors, r) },
          },
        ),
      [g, r],
    ),
    F = z.useCallback(
      (A) =>
        S.current.onChange({
          target: { value: en(A), name: r },
          type: Ke.CHANGE,
        }),
      [r],
    ),
    R = z.useCallback(
      () =>
        S.current.onBlur({
          target: { value: _(o._formValues, r), name: r },
          type: Ke.BLUR,
        }),
      [r, o._formValues],
    ),
    re = z.useCallback(
      (A) => {
        const $ = _(o._fields, r);
        $ &&
          A &&
          ($._f.ref = {
            focus: () => A.focus && A.focus(),
            select: () => A.select && A.select(),
            setCustomValidity: (E) => A.setCustomValidity(E),
            reportValidity: () => A.reportValidity(),
          });
      },
      [o._fields, r],
    ),
    Z = z.useMemo(
      () => ({
        name: r,
        value: m,
        ...(ee(n) || g.disabled ? { disabled: g.disabled || n } : {}),
        onChange: F,
        onBlur: R,
        ref: re,
      }),
      [r, n, g.disabled, F, R, re, m],
    );
  return (
    z.useEffect(() => {
      const A = o._options.shouldUnregister || s,
        $ = b.current;
      ($ && $ !== r && !a && o.unregister($),
        o.register(r, {
          ...x.current.rules,
          ...(ee(x.current.disabled) ? { disabled: x.current.disabled } : {}),
        }));
      const E = (Q, ce) => {
        const pe = _(o._fields, Q);
        pe && pe._f && (pe._f.mount = ce);
      };
      if ((E(r, !0), A)) {
        const Q = q(_(o._options.defaultValues, r, x.current.defaultValue));
        (C(o._defaultValues, r, Q),
          U(_(o._formValues, r)) && C(o._formValues, r, Q));
      }
      return (
        !a && o.register(r),
        (b.current = r),
        () => {
          (a ? A && !o._state.action : A) ? o.unregister(r) : E(r, !1);
        }
      );
    }, [r, o, a, s]),
    z.useEffect(() => {
      o._setDisabledField({ disabled: n, name: r });
    }, [n, r, o]),
    z.useMemo(() => ({ field: Z, formState: g, fieldState: I }), [Z, g, I])
  );
}
const Se = (e) => e.render(Bu(e));
var Vt = (e, t, r, n, o) =>
    t
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: o || !0 },
        }
      : {},
  Ve = (e) => (Array.isArray(e) ? e : [e]),
  pr = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const s of e) s.next && s.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  };
function on(e, t) {
  const r = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const o = e[n],
        s = t[n];
      if (o && B(o) && s) {
        const i = on(o, s);
        B(i) && (r[n] = i);
      } else e[n] && (r[n] = s);
    }
  return r;
}
var G = (e) => B(e) && !Object.keys(e).length,
  It = (e) => e.type === "file",
  ae = (e) => typeof e == "function",
  Ge = (e) => {
    if (!$t) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  sn = (e) => e.type === "select-multiple",
  Nt = (e) => e.type === "radio",
  Wu = (e) => Nt(e) || je(e),
  ft = (e) => Ge(e) && e.isConnected;
function qu(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) e = U(e) ? n++ : e[t[n++]];
  return e;
}
function Hu(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !U(e[t])) return !1;
  return !0;
}
function L(e, t) {
  const r = Array.isArray(t) ? t : ot(t) ? [t] : At(t),
    n = r.length === 1 ? e : qu(e, r),
    o = r.length - 1,
    s = r[o];
  return (
    n && delete n[s],
    o !== 0 &&
      ((B(n) && G(n)) || (Array.isArray(n) && Hu(n))) &&
      L(e, r.slice(0, -1)),
    e
  );
}
var Ku = (e) => {
  for (const t in e) if (ae(e[t])) return !0;
  return !1;
};
function un(e) {
  return Array.isArray(e) || (B(e) && !Ku(e));
}
function vt(e, t = {}) {
  for (const r in e)
    un(e[r])
      ? ((t[r] = Array.isArray(e[r]) ? [] : {}), vt(e[r], t[r]))
      : U(e[r]) || (t[r] = !0);
  return t;
}
function ze(e, t, r) {
  r || (r = vt(t));
  for (const n in e)
    un(e[n])
      ? U(t) || _t(r[n])
        ? (r[n] = vt(e[n], Array.isArray(e[n]) ? [] : {}))
        : ze(e[n], Y(t) ? {} : t[n], r[n])
      : (r[n] = !ue(e[n], t[n]));
  return r;
}
const gr = { value: !1, isValid: !1 },
  _r = { value: !0, isValid: !0 };
var an = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        const t = e
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled
        ? e[0].attributes && !U(e[0].attributes.value)
          ? U(e[0].value) || e[0].value === ""
            ? _r
            : { value: e[0].value, isValid: !0 }
          : _r
        : gr;
    }
    return gr;
  },
  cn = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
    U(e)
      ? e
      : t
        ? e === ""
          ? NaN
          : e && +e
        : r && te(e)
          ? new Date(e)
          : n
            ? n(e)
            : e;
const vr = { isValid: !1, value: null };
var ln = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : t,
        vr,
      )
    : vr;
function br(e) {
  const t = e.ref;
  return It(t)
    ? t.files
    : Nt(t)
      ? ln(e.refs).value
      : sn(t)
        ? [...t.selectedOptions].map(({ value: r }) => r)
        : je(t)
          ? an(e.refs).value
          : cn(U(t.value) ? e.ref.value : t.value, e);
}
var Gu = (e, t, r, n) => {
    const o = {};
    for (const s of e) {
      const i = _(t, s);
      i && C(o, s, i._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: n,
    };
  },
  Je = (e) => e instanceof RegExp,
  Ae = (e) =>
    U(e)
      ? e
      : Je(e)
        ? e.source
        : B(e)
          ? Je(e.value)
            ? e.value.source
            : e.value
          : e,
  yr = (e) => ({
    isOnSubmit: !e || e === ie.onSubmit,
    isOnBlur: e === ie.onBlur,
    isOnChange: e === ie.onChange,
    isOnAll: e === ie.all,
    isOnTouch: e === ie.onTouched,
  });
const wr = "AsyncFunction";
var Ju = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (ae(e.validate) && e.validate.constructor.name === wr) ||
      (B(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === wr))
    ),
  Yu = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate),
  kr = (e, t, r) =>
    !r &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length)),
      ));
const Ie = (e, t, r, n) => {
  for (const o of r || Object.keys(e)) {
    const s = _(e, o);
    if (s) {
      const { _f: i, ...a } = s;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], o) && !n) return !0;
        if (i.ref && t(i.ref, i.name) && !n) return !0;
        if (Ie(a, t)) break;
      } else if (B(a) && Ie(a, t)) break;
    }
  }
};
function xr(e, t, r) {
  const n = _(e, r);
  if (n || ot(r)) return { error: n, name: r };
  const o = r.split(".");
  for (; o.length; ) {
    const s = o.join("."),
      i = _(t, s),
      a = _(e, s);
    if (i && !Array.isArray(i) && r !== s) return { name: r };
    if (a && a.type) return { name: s, error: a };
    if (a && a.root && a.root.type) return { name: `${s}.root`, error: a.root };
    o.pop();
  }
  return { name: r };
}
var Xu = (e, t, r, n) => {
    r(e);
    const { name: o, ...s } = e;
    return (
      G(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((i) => t[i] === (!n || ie.all))
    );
  },
  Qu = (e, t, r) =>
    !e ||
    !t ||
    e === t ||
    Ve(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n))),
  ea = (e, t, r, n, o) =>
    o.isOnAll
      ? !1
      : !r && o.isOnTouch
        ? !(t || e)
        : (r ? n.isOnBlur : o.isOnBlur)
          ? !e
          : (r ? n.isOnChange : o.isOnChange)
            ? e
            : !0,
  ta = (e, t) => !Et(_(e, t)).length && L(e, t),
  ra = (e, t, r) => {
    const n = Ve(_(e, r));
    return (C(n, "root", t[r]), C(e, r, n), e);
  };
function zr(e, t, r = "validate") {
  if (te(e) || (Array.isArray(e) && e.every(te)) || (ee(e) && !e))
    return { type: r, message: te(e) ? e : "", ref: t };
}
var xe = (e) => (B(e) && !Je(e) ? e : { value: e, message: "" }),
  Zr = async (e, t, r, n, o, s) => {
    const {
        ref: i,
        refs: a,
        required: f,
        maxLength: m,
        minLength: g,
        min: x,
        max: b,
        pattern: S,
        validate: I,
        name: F,
        valueAsNumber: R,
        mount: re,
      } = e._f,
      Z = _(r, F);
    if (!re || t.has(F)) return {};
    const A = a ? a[0] : i,
      $ = (V) => {
        o &&
          A.reportValidity &&
          (A.setCustomValidity(ee(V) ? "" : V || ""), A.reportValidity());
      },
      E = {},
      Q = Nt(i),
      ce = je(i),
      pe = Q || ce,
      se =
        ((R || It(i)) && U(i.value) && U(Z)) ||
        (Ge(i) && i.value === "") ||
        Z === "" ||
        (Array.isArray(Z) && !Z.length),
      ge = Vt.bind(null, F, n, E),
      le = (V, O, M, K = fe.maxLength, J = fe.minLength) => {
        const de = V ? O : M;
        E[F] = { type: V ? K : J, message: de, ref: i, ...ge(V ? K : J, de) };
      };
    if (
      s
        ? !Array.isArray(Z) || !Z.length
        : f &&
          ((!pe && (se || Y(Z))) ||
            (ee(Z) && !Z) ||
            (ce && !an(a).isValid) ||
            (Q && !ln(a).isValid))
    ) {
      const { value: V, message: O } = te(f)
        ? { value: !!f, message: f }
        : xe(f);
      if (
        V &&
        ((E[F] = {
          type: fe.required,
          message: O,
          ref: A,
          ...ge(fe.required, O),
        }),
        !n)
      )
        return ($(O), E);
    }
    if (!se && (!Y(x) || !Y(b))) {
      let V, O;
      const M = xe(b),
        K = xe(x);
      if (!Y(Z) && !isNaN(Z)) {
        const J = i.valueAsNumber || (Z && +Z);
        (Y(M.value) || (V = J > M.value), Y(K.value) || (O = J < K.value));
      } else {
        const J = i.valueAsDate || new Date(Z),
          de = (De) => new Date(new Date().toDateString() + " " + De),
          Ee = i.type == "time",
          ke = i.type == "week";
        (te(M.value) &&
          Z &&
          (V = Ee
            ? de(Z) > de(M.value)
            : ke
              ? Z > M.value
              : J > new Date(M.value)),
          te(K.value) &&
            Z &&
            (O = Ee
              ? de(Z) < de(K.value)
              : ke
                ? Z < K.value
                : J < new Date(K.value)));
      }
      if ((V || O) && (le(!!V, M.message, K.message, fe.max, fe.min), !n))
        return ($(E[F].message), E);
    }
    if ((m || g) && !se && (te(Z) || (s && Array.isArray(Z)))) {
      const V = xe(m),
        O = xe(g),
        M = !Y(V.value) && Z.length > +V.value,
        K = !Y(O.value) && Z.length < +O.value;
      if ((M || K) && (le(M, V.message, O.message), !n))
        return ($(E[F].message), E);
    }
    if (S && !se && te(Z)) {
      const { value: V, message: O } = xe(S);
      if (
        Je(V) &&
        !Z.match(V) &&
        ((E[F] = {
          type: fe.pattern,
          message: O,
          ref: i,
          ...ge(fe.pattern, O),
        }),
        !n)
      )
        return ($(O), E);
    }
    if (I) {
      if (ae(I)) {
        const V = await I(Z, r),
          O = zr(V, A);
        if (O && ((E[F] = { ...O, ...ge(fe.validate, O.message) }), !n))
          return ($(O.message), E);
      } else if (B(I)) {
        let V = {};
        for (const O in I) {
          if (!G(V) && !n) break;
          const M = zr(await I[O](Z, r), A, O);
          M &&
            ((V = { ...M, ...ge(O, M.message) }),
            $(M.message),
            n && (E[F] = V));
        }
        if (!G(V) && ((E[F] = { ref: A, ...V }), !n)) return E;
      }
    }
    return ($(!0), E);
  };
const na = {
  mode: ie.onSubmit,
  reValidateMode: ie.onChange,
  shouldFocusError: !0,
};
function oa(e = {}) {
  let t = { ...na, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: ae(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    o =
      B(t.defaultValues) || B(t.values)
        ? q(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : q(o),
    i = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    f,
    m = 0;
  const g = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let x = { ...g };
  const b = { array: pr(), state: pr() },
    S = t.criteriaMode === ie.all,
    I = (u) => (c) => {
      (clearTimeout(m), (m = setTimeout(u, c)));
    },
    F = async (u) => {
      if (!t.disabled && (g.isValid || x.isValid || u)) {
        const c = t.resolver ? G((await ce()).errors) : await se(n, !0);
        c !== r.isValid && b.state.next({ isValid: c });
      }
    },
    R = (u, c) => {
      !t.disabled &&
        (g.isValidating ||
          g.validatingFields ||
          x.isValidating ||
          x.validatingFields) &&
        ((u || Array.from(a.mount)).forEach((l) => {
          l && (c ? C(r.validatingFields, l, c) : L(r.validatingFields, l));
        }),
        b.state.next({
          validatingFields: r.validatingFields,
          isValidating: !G(r.validatingFields),
        }));
    },
    re = (u, c = [], l, v, p = !0, h = !0) => {
      if (v && l && !t.disabled) {
        if (((i.action = !0), h && Array.isArray(_(n, u)))) {
          const w = l(_(n, u), v.argA, v.argB);
          p && C(n, u, w);
        }
        if (h && Array.isArray(_(r.errors, u))) {
          const w = l(_(r.errors, u), v.argA, v.argB);
          (p && C(r.errors, u, w), ta(r.errors, u));
        }
        if (
          (g.touchedFields || x.touchedFields) &&
          h &&
          Array.isArray(_(r.touchedFields, u))
        ) {
          const w = l(_(r.touchedFields, u), v.argA, v.argB);
          p && C(r.touchedFields, u, w);
        }
        ((g.dirtyFields || x.dirtyFields) && (r.dirtyFields = ze(o, s)),
          b.state.next({
            name: u,
            isDirty: le(u, c),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          }));
      } else C(s, u, c);
    },
    Z = (u, c) => {
      (C(r.errors, u, c), b.state.next({ errors: r.errors }));
    },
    A = (u) => {
      ((r.errors = u), b.state.next({ errors: r.errors, isValid: !1 }));
    },
    $ = (u, c, l, v) => {
      const p = _(n, u);
      if (p) {
        const h = _(s, u, U(l) ? _(o, u) : l);
        (U(h) || (v && v.defaultChecked) || c
          ? C(s, u, c ? h : br(p._f))
          : M(u, h),
          i.mount && F());
      }
    },
    E = (u, c, l, v, p) => {
      let h = !1,
        w = !1;
      const N = { name: u };
      if (!t.disabled) {
        if (!l || v) {
          (g.isDirty || x.isDirty) &&
            ((w = r.isDirty),
            (r.isDirty = N.isDirty = le()),
            (h = w !== N.isDirty));
          const j = ue(_(o, u), c);
          ((w = !!_(r.dirtyFields, u)),
            j ? L(r.dirtyFields, u) : C(r.dirtyFields, u, !0),
            (N.dirtyFields = r.dirtyFields),
            (h = h || ((g.dirtyFields || x.dirtyFields) && w !== !j)));
        }
        if (l) {
          const j = _(r.touchedFields, u);
          j ||
            (C(r.touchedFields, u, l),
            (N.touchedFields = r.touchedFields),
            (h = h || ((g.touchedFields || x.touchedFields) && j !== l)));
        }
        h && p && b.state.next(N);
      }
      return h ? N : {};
    },
    Q = (u, c, l, v) => {
      const p = _(r.errors, u),
        h = (g.isValid || x.isValid) && ee(c) && r.isValid !== c;
      if (
        (t.delayError && l
          ? ((f = I(() => Z(u, l))), f(t.delayError))
          : (clearTimeout(m),
            (f = null),
            l ? C(r.errors, u, l) : L(r.errors, u)),
        (l ? !ue(p, l) : p) || !G(v) || h)
      ) {
        const w = {
          ...v,
          ...(h && ee(c) ? { isValid: c } : {}),
          errors: r.errors,
          name: u,
        };
        ((r = { ...r, ...w }), b.state.next(w));
      }
    },
    ce = async (u) => {
      R(u, !0);
      const c = await t.resolver(
        s,
        t.context,
        Gu(u || a.mount, n, t.criteriaMode, t.shouldUseNativeValidation),
      );
      return (R(u), c);
    },
    pe = async (u) => {
      const { errors: c } = await ce(u);
      if (u)
        for (const l of u) {
          const v = _(c, l);
          v ? C(r.errors, l, v) : L(r.errors, l);
        }
      else r.errors = c;
      return c;
    },
    se = async (u, c, l = { valid: !0 }) => {
      for (const v in u) {
        const p = u[v];
        if (p) {
          const { _f: h, ...w } = p;
          if (h) {
            const N = a.array.has(h.name),
              j = p._f && Ju(p._f);
            j && g.validatingFields && R([h.name], !0);
            const ne = await Zr(
              p,
              a.disabled,
              s,
              S,
              t.shouldUseNativeValidation && !c,
              N,
            );
            if (
              (j && g.validatingFields && R([h.name]),
              ne[h.name] && ((l.valid = !1), c))
            )
              break;
            !c &&
              (_(ne, h.name)
                ? N
                  ? ra(r.errors, ne, h.name)
                  : C(r.errors, h.name, ne[h.name])
                : L(r.errors, h.name));
          }
          !G(w) && (await se(w, c, l));
        }
      }
      return l.valid;
    },
    ge = () => {
      for (const u of a.unMount) {
        const c = _(n, u);
        c &&
          (c._f.refs ? c._f.refs.every((l) => !ft(l)) : !ft(c._f.ref)) &&
          st(u);
      }
      a.unMount = new Set();
    },
    le = (u, c) => !t.disabled && (u && c && C(s, u, c), !ue(De(), o)),
    V = (u, c, l) =>
      gt(u, a, { ...(i.mount ? s : U(c) ? o : te(u) ? { [u]: c } : c) }, l, c),
    O = (u) => Et(_(i.mount ? s : o, u, t.shouldUnregister ? _(o, u, []) : [])),
    M = (u, c, l = {}) => {
      const v = _(n, u);
      let p = c;
      if (v) {
        const h = v._f;
        h &&
          (!h.disabled && C(s, u, cn(c, h)),
          (p = Ge(h.ref) && Y(c) ? "" : c),
          sn(h.ref)
            ? [...h.ref.options].forEach(
                (w) => (w.selected = p.includes(w.value)),
              )
            : h.refs
              ? je(h.ref)
                ? h.refs.forEach((w) => {
                    (!w.defaultChecked || !w.disabled) &&
                      (Array.isArray(p)
                        ? (w.checked = !!p.find((N) => N === w.value))
                        : (w.checked = p === w.value || !!p));
                  })
                : h.refs.forEach((w) => (w.checked = w.value === p))
              : It(h.ref)
                ? (h.ref.value = "")
                : ((h.ref.value = p),
                  h.ref.type || b.state.next({ name: u, values: q(s) })));
      }
      ((l.shouldDirty || l.shouldTouch) &&
        E(u, p, l.shouldTouch, l.shouldDirty, !0),
        l.shouldValidate && ke(u));
    },
    K = (u, c, l) => {
      for (const v in c) {
        if (!c.hasOwnProperty(v)) return;
        const p = c[v],
          h = u + "." + v,
          w = _(n, h);
        (a.array.has(u) || B(p) || (w && !w._f)) && !_e(p)
          ? K(h, p, l)
          : M(h, p, l);
      }
    },
    J = (u, c, l = {}) => {
      const v = _(n, u),
        p = a.array.has(u),
        h = q(c);
      (C(s, u, h),
        p
          ? (b.array.next({ name: u, values: q(s) }),
            (g.isDirty || g.dirtyFields || x.isDirty || x.dirtyFields) &&
              l.shouldDirty &&
              b.state.next({
                name: u,
                dirtyFields: ze(o, s),
                isDirty: le(u, h),
              }))
          : v && !v._f && !Y(h)
            ? K(u, h, l)
            : M(u, h, l),
        kr(u, a) && b.state.next({ ...r, name: u }),
        b.state.next({ name: i.mount ? u : void 0, values: q(s) }));
    },
    de = async (u) => {
      i.mount = !0;
      const c = u.target;
      let l = c.name,
        v = !0;
      const p = _(n, l),
        h = (j) => {
          v =
            Number.isNaN(j) ||
            (_e(j) && isNaN(j.getTime())) ||
            ue(j, _(s, l, j));
        },
        w = yr(t.mode),
        N = yr(t.reValidateMode);
      if (p) {
        let j, ne;
        const Te = c.type ? br(p._f) : en(u),
          he = u.type === Ke.BLUR || u.type === Ke.FOCUS_OUT,
          vn =
            (!Yu(p._f) && !t.resolver && !_(r.errors, l) && !p._f.deps) ||
            ea(he, _(r.touchedFields, l), r.isSubmitted, N, w),
          at = kr(l, a, he);
        (C(s, l, Te),
          he
            ? (!c || !c.readOnly) && (p._f.onBlur && p._f.onBlur(u), f && f(0))
            : p._f.onChange && p._f.onChange(u));
        const ct = E(l, Te, he),
          bn = !G(ct) || at;
        if ((!he && b.state.next({ name: l, type: u.type, values: q(s) }), vn))
          return (
            (g.isValid || x.isValid) &&
              (t.mode === "onBlur" ? he && F() : he || F()),
            bn && b.state.next({ name: l, ...(at ? {} : ct) })
          );
        if ((!he && at && b.state.next({ ...r }), t.resolver)) {
          const { errors: Mt } = await ce([l]);
          if ((h(Te), v)) {
            const yn = xr(r.errors, n, l),
              Lt = xr(Mt, n, yn.name || l);
            ((j = Lt.error), (l = Lt.name), (ne = G(Mt)));
          }
        } else
          (R([l], !0),
            (j = (await Zr(p, a.disabled, s, S, t.shouldUseNativeValidation))[
              l
            ]),
            R([l]),
            h(Te),
            v &&
              (j
                ? (ne = !1)
                : (g.isValid || x.isValid) && (ne = await se(n, !0))));
        v &&
          (p._f.deps &&
            (!Array.isArray(p._f.deps) || p._f.deps.length > 0) &&
            ke(p._f.deps),
          Q(l, ne, j, ct));
      }
    },
    Ee = (u, c) => {
      if (_(r.errors, c) && u.focus) return (u.focus(), 1);
    },
    ke = async (u, c = {}) => {
      let l, v;
      const p = Ve(u);
      if (t.resolver) {
        const h = await pe(U(u) ? u : p);
        ((l = G(h)), (v = u ? !p.some((w) => _(h, w)) : l));
      } else
        u
          ? ((v = (
              await Promise.all(
                p.map(async (h) => {
                  const w = _(n, h);
                  return await se(w && w._f ? { [h]: w } : w);
                }),
              )
            ).every(Boolean)),
            !(!v && !r.isValid) && F())
          : (v = l = await se(n));
      return (
        b.state.next({
          ...(!te(u) || ((g.isValid || x.isValid) && l !== r.isValid)
            ? {}
            : { name: u }),
          ...(t.resolver || !u ? { isValid: l } : {}),
          errors: r.errors,
        }),
        c.shouldFocus && !v && Ie(n, Ee, u ? p : a.mount),
        v
      );
    },
    De = (u, c) => {
      let l = { ...(i.mount ? s : o) };
      return (
        c && (l = on(c.dirtyFields ? r.dirtyFields : r.touchedFields, l)),
        U(u) ? l : te(u) ? _(l, u) : u.map((v) => _(l, v))
      );
    },
    Ct = (u, c) => ({
      invalid: !!_((c || r).errors, u),
      isDirty: !!_((c || r).dirtyFields, u),
      error: _((c || r).errors, u),
      isValidating: !!_(r.validatingFields, u),
      isTouched: !!_((c || r).touchedFields, u),
    }),
    dn = (u) => {
      (u && Ve(u).forEach((c) => L(r.errors, c)),
        b.state.next({ errors: u ? r.errors : {} }));
    },
    Ot = (u, c, l) => {
      const v = (_(n, u, { _f: {} })._f || {}).ref,
        p = _(r.errors, u) || {},
        { ref: h, message: w, type: N, ...j } = p;
      (C(r.errors, u, { ...j, ...c, ref: v }),
        b.state.next({ name: u, errors: r.errors, isValid: !1 }),
        l && l.shouldFocus && v && v.focus && v.focus());
    },
    fn = (u, c) =>
      ae(u)
        ? b.state.subscribe({
            next: (l) => "values" in l && u(V(void 0, c), l),
          })
        : V(u, c, !0),
    jt = (u) =>
      b.state.subscribe({
        next: (c) => {
          Qu(u.name, c.name, u.exact) &&
            Xu(c, u.formState || g, _n, u.reRenderRoot) &&
            u.callback({ values: { ...s }, ...r, ...c, defaultValues: o });
        },
      }).unsubscribe,
    hn = (u) => (
      (i.mount = !0),
      (x = { ...x, ...u.formState }),
      jt({ ...u, formState: x })
    ),
    st = (u, c = {}) => {
      for (const l of u ? Ve(u) : a.mount)
        (a.mount.delete(l),
          a.array.delete(l),
          c.keepValue || (L(n, l), L(s, l)),
          !c.keepError && L(r.errors, l),
          !c.keepDirty && L(r.dirtyFields, l),
          !c.keepTouched && L(r.touchedFields, l),
          !c.keepIsValidating && L(r.validatingFields, l),
          !t.shouldUnregister && !c.keepDefaultValue && L(o, l));
      (b.state.next({ values: q(s) }),
        b.state.next({ ...r, ...(c.keepDirty ? { isDirty: le() } : {}) }),
        !c.keepIsValid && F());
    },
    Dt = ({ disabled: u, name: c }) => {
      ((ee(u) && i.mount) || u || a.disabled.has(c)) &&
        (u ? a.disabled.add(c) : a.disabled.delete(c));
    },
    it = (u, c = {}) => {
      let l = _(n, u);
      const v = ee(c.disabled) || ee(t.disabled);
      return (
        C(n, u, {
          ...(l || {}),
          _f: {
            ...(l && l._f ? l._f : { ref: { name: u } }),
            name: u,
            mount: !0,
            ...c,
          },
        }),
        a.mount.add(u),
        l
          ? Dt({ disabled: ee(c.disabled) ? c.disabled : t.disabled, name: u })
          : $(u, !0, c.value),
        {
          ...(v ? { disabled: c.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!c.required,
                min: Ae(c.min),
                max: Ae(c.max),
                minLength: Ae(c.minLength),
                maxLength: Ae(c.maxLength),
                pattern: Ae(c.pattern),
              }
            : {}),
          name: u,
          onChange: de,
          onBlur: de,
          ref: (p) => {
            if (p) {
              (it(u, c), (l = _(n, u)));
              const h =
                  (U(p.value) &&
                    p.querySelectorAll &&
                    p.querySelectorAll("input,select,textarea")[0]) ||
                  p,
                w = Wu(h),
                N = l._f.refs || [];
              if (w ? N.find((j) => j === h) : h === l._f.ref) return;
              (C(n, u, {
                _f: {
                  ...l._f,
                  ...(w
                    ? {
                        refs: [
                          ...N.filter(ft),
                          h,
                          ...(Array.isArray(_(o, u)) ? [{}] : []),
                        ],
                        ref: { type: h.type, name: u },
                      }
                    : { ref: h }),
                },
              }),
                $(u, !1, void 0, h));
            } else
              ((l = _(n, u, {})),
                l._f && (l._f.mount = !1),
                (t.shouldUnregister || c.shouldUnregister) &&
                  !(tn(a.array, u) && i.action) &&
                  a.unMount.add(u));
          },
        }
      );
    },
    ut = () => t.shouldFocusError && Ie(n, Ee, a.mount),
    mn = (u) => {
      ee(u) &&
        (b.state.next({ disabled: u }),
        Ie(
          n,
          (c, l) => {
            const v = _(n, l);
            v &&
              ((c.disabled = v._f.disabled || u),
              Array.isArray(v._f.refs) &&
                v._f.refs.forEach((p) => {
                  p.disabled = v._f.disabled || u;
                }));
          },
          0,
          !1,
        ));
    },
    Tt = (u, c) => async (l) => {
      let v;
      l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
      let p = q(s);
      if ((b.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: h, values: w } = await ce();
        ((r.errors = h), (p = q(w)));
      } else await se(n);
      if (a.disabled.size) for (const h of a.disabled) L(p, h);
      if ((L(r.errors, "root"), G(r.errors))) {
        b.state.next({ errors: {} });
        try {
          await u(p, l);
        } catch (h) {
          v = h;
        }
      } else (c && (await c({ ...r.errors }, l)), ut(), setTimeout(ut));
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: G(r.errors) && !v,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        v)
      )
        throw v;
    },
    pn = (u, c = {}) => {
      _(n, u) &&
        (U(c.defaultValue)
          ? J(u, q(_(o, u)))
          : (J(u, c.defaultValue), C(o, u, q(c.defaultValue))),
        c.keepTouched || L(r.touchedFields, u),
        c.keepDirty ||
          (L(r.dirtyFields, u),
          (r.isDirty = c.defaultValue ? le(u, q(_(o, u))) : le())),
        c.keepError || (L(r.errors, u), g.isValid && F()),
        b.state.next({ ...r }));
    },
    Pt = (u, c = {}) => {
      const l = u ? q(u) : o,
        v = q(l),
        p = G(u),
        h = p ? o : v;
      if ((c.keepDefaultValues || (o = l), !c.keepValues)) {
        if (c.keepDirtyValues) {
          const w = new Set([...a.mount, ...Object.keys(ze(o, s))]);
          for (const N of Array.from(w))
            _(r.dirtyFields, N) ? C(h, N, _(s, N)) : J(N, _(h, N));
        } else {
          if ($t && U(u))
            for (const w of a.mount) {
              const N = _(n, w);
              if (N && N._f) {
                const j = Array.isArray(N._f.refs) ? N._f.refs[0] : N._f.ref;
                if (Ge(j)) {
                  const ne = j.closest("form");
                  if (ne) {
                    ne.reset();
                    break;
                  }
                }
              }
            }
          if (c.keepFieldsRef) for (const w of a.mount) J(w, _(h, w));
          else n = {};
        }
        ((s = t.shouldUnregister ? (c.keepDefaultValues ? q(o) : {}) : q(h)),
          b.array.next({ values: { ...h } }),
          b.state.next({ values: { ...h } }));
      }
      ((a = {
        mount: c.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (i.mount =
          !g.isValid ||
          !!c.keepIsValid ||
          !!c.keepDirtyValues ||
          (!t.shouldUnregister && !G(h))),
        (i.watch = !!t.shouldUnregister),
        b.state.next({
          submitCount: c.keepSubmitCount ? r.submitCount : 0,
          isDirty: p
            ? !1
            : c.keepDirty
              ? r.isDirty
              : !!(c.keepDefaultValues && !ue(u, o)),
          isSubmitted: c.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: p
            ? {}
            : c.keepDirtyValues
              ? c.keepDefaultValues && s
                ? ze(o, s)
                : r.dirtyFields
              : c.keepDefaultValues && u
                ? ze(o, u)
                : c.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: c.keepTouched ? r.touchedFields : {},
          errors: c.keepErrors ? r.errors : {},
          isSubmitSuccessful: c.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: o,
        }));
    },
    Rt = (u, c) => Pt(ae(u) ? u(s) : u, c),
    gn = (u, c = {}) => {
      const l = _(n, u),
        v = l && l._f;
      if (v) {
        const p = v.refs ? v.refs[0] : v.ref;
        p.focus && (p.focus(), c.shouldSelect && ae(p.select) && p.select());
      }
    },
    _n = (u) => {
      r = { ...r, ...u };
    },
    Ut = {
      control: {
        register: it,
        unregister: st,
        getFieldState: Ct,
        handleSubmit: Tt,
        setError: Ot,
        _subscribe: jt,
        _runSchema: ce,
        _focusError: ut,
        _getWatch: V,
        _getDirty: le,
        _setValid: F,
        _setFieldArray: re,
        _setDisabledField: Dt,
        _setErrors: A,
        _getFieldArray: O,
        _reset: Pt,
        _resetDefaultValues: () =>
          ae(t.defaultValues) &&
          t.defaultValues().then((u) => {
            (Rt(u, t.resetOptions), b.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ge,
        _disableForm: mn,
        _subjects: b,
        _proxyFormState: g,
        get _fields() {
          return n;
        },
        get _formValues() {
          return s;
        },
        get _state() {
          return i;
        },
        set _state(u) {
          i = u;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return a;
        },
        set _names(u) {
          a = u;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return t;
        },
        set _options(u) {
          t = { ...t, ...u };
        },
      },
      subscribe: hn,
      trigger: ke,
      register: it,
      handleSubmit: Tt,
      watch: fn,
      setValue: J,
      getValues: De,
      reset: Rt,
      resetField: pn,
      clearErrors: dn,
      unregister: st,
      setError: Ot,
      setFocus: gn,
      getFieldState: Ct,
    };
  return { ...Ut, formControl: Ut };
}
function sa(e = {}) {
  const t = z.useRef(void 0),
    r = z.useRef(void 0),
    [n, o] = z.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: ae(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      isReady: !1,
      defaultValues: ae(e.defaultValues) ? void 0 : e.defaultValues,
    });
  if (!t.current)
    if (e.formControl)
      ((t.current = { ...e.formControl, formState: n }),
        e.defaultValues &&
          !ae(e.defaultValues) &&
          e.formControl.reset(e.defaultValues, e.resetOptions));
    else {
      const { formControl: i, ...a } = oa(e);
      t.current = { ...a, formState: n };
    }
  const s = t.current.control;
  return (
    (s._options = e),
    St(() => {
      const i = s._subscribe({
        formState: s._proxyFormState,
        callback: () => o({ ...s._formState }),
        reRenderRoot: !0,
      });
      return (
        o((a) => ({ ...a, isReady: !0 })),
        (s._formState.isReady = !0),
        i
      );
    }, [s]),
    z.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    z.useEffect(() => {
      (e.mode && (s._options.mode = e.mode),
        e.reValidateMode && (s._options.reValidateMode = e.reValidateMode));
    }, [s, e.mode, e.reValidateMode]),
    z.useEffect(() => {
      e.errors && (s._setErrors(e.errors), s._focusError());
    }, [s, e.errors]),
    z.useEffect(() => {
      e.shouldUnregister && s._subjects.state.next({ values: s._getWatch() });
    }, [s, e.shouldUnregister]),
    z.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const i = s._getDirty();
        i !== n.isDirty && s._subjects.state.next({ isDirty: i });
      }
    }, [s, n.isDirty]),
    z.useEffect(() => {
      e.values && !ue(e.values, r.current)
        ? (s._reset(e.values, {
            keepFieldsRef: !0,
            ...s._options.resetOptions,
          }),
          (r.current = e.values),
          o((i) => ({ ...i })))
        : s._resetDefaultValues();
    }, [s, e.values]),
    z.useEffect(() => {
      (s._state.mount || (s._setValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted());
    }),
    (t.current.formState = nn(n, s)),
    t.current
  );
}
const $r = (e, t, r) => {
    if (e && "reportValidity" in e) {
      const n = _(r, t);
      (e.setCustomValidity((n && n.message) || ""), e.reportValidity());
    }
  },
  bt = (e, t) => {
    for (const r in t.fields) {
      const n = t.fields[r];
      n && n.ref && "reportValidity" in n.ref
        ? $r(n.ref, r, e)
        : n && n.refs && n.refs.forEach((o) => $r(o, r, e));
    }
  },
  Er = (e, t) => {
    t.shouldUseNativeValidation && bt(e, t);
    const r = {};
    for (const n in e) {
      const o = _(t.fields, n),
        s = Object.assign(e[n] || {}, { ref: o && o.ref });
      if (ia(t.names || Object.keys(e), n)) {
        const i = Object.assign({}, _(r, n));
        (C(i, "root", s), C(r, n, i));
      } else C(r, n, s);
    }
    return r;
  },
  ia = (e, t) => {
    const r = Ar(t);
    return e.some((n) => Ar(n).match(`^${r}\\.\\d+`));
  };
function Ar(e) {
  return e.replace(/\]|\[/g, "");
}
function Fr(e, t) {
  try {
    var r = e();
  } catch (n) {
    return t(n);
  }
  return r && r.then ? r.then(void 0, t) : r;
}
function ua(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0],
      o = n.code,
      s = n.message,
      i = n.path.join(".");
    if (!r[i])
      if ("unionErrors" in n) {
        var a = n.unionErrors[0].errors[0];
        r[i] = { message: a.message, type: a.code };
      } else r[i] = { message: s, type: o };
    if (
      ("unionErrors" in n &&
        n.unionErrors.forEach(function (g) {
          return g.errors.forEach(function (x) {
            return e.push(x);
          });
        }),
      t)
    ) {
      var f = r[i].types,
        m = f && f[n.code];
      r[i] = Vt(i, t, r, o, m ? [].concat(m, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function aa(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0],
      o = n.code,
      s = n.message,
      i = n.path.join(".");
    if (!r[i])
      if (n.code === "invalid_union" && n.errors.length > 0) {
        var a = n.errors[0][0];
        r[i] = { message: a.message, type: a.code };
      } else r[i] = { message: s, type: o };
    if (
      (n.code === "invalid_union" &&
        n.errors.forEach(function (g) {
          return g.forEach(function (x) {
            return e.push(x);
          });
        }),
      t)
    ) {
      var f = r[i].types,
        m = f && f[n.code];
      r[i] = Vt(i, t, r, o, m ? [].concat(m, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function ca(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    (function (n) {
      return "_def" in n && typeof n._def == "object" && "typeName" in n._def;
    })(e))
  )
    return function (n, o, s) {
      try {
        return Promise.resolve(
          Fr(
            function () {
              return Promise.resolve(
                e[r.mode === "sync" ? "parse" : "parseAsync"](n, t),
              ).then(function (i) {
                return (
                  s.shouldUseNativeValidation && bt({}, s),
                  { errors: {}, values: r.raw ? Object.assign({}, n) : i }
                );
              });
            },
            function (i) {
              if (
                (function (a) {
                  return Array.isArray(a?.issues);
                })(i)
              )
                return {
                  values: {},
                  errors: Er(
                    ua(
                      i.errors,
                      !s.shouldUseNativeValidation && s.criteriaMode === "all",
                    ),
                    s,
                  ),
                };
              throw i;
            },
          ),
        );
      } catch (i) {
        return Promise.reject(i);
      }
    };
  if (
    (function (n) {
      return "_zod" in n && typeof n._zod == "object";
    })(e)
  )
    return function (n, o, s) {
      try {
        return Promise.resolve(
          Fr(
            function () {
              return Promise.resolve(
                (r.mode === "sync" ? Bn : Wn)(e, n, t),
              ).then(function (i) {
                return (
                  s.shouldUseNativeValidation && bt({}, s),
                  { errors: {}, values: r.raw ? Object.assign({}, n) : i }
                );
              });
            },
            function (i) {
              if (
                (function (a) {
                  return a instanceof zt;
                })(i)
              )
                return {
                  values: {},
                  errors: Er(
                    aa(
                      i.issues,
                      !s.shouldUseNativeValidation && s.criteriaMode === "all",
                    ),
                    s,
                  ),
                };
              throw i;
            },
          ),
        );
      } catch (i) {
        return Promise.reject(i);
      }
    };
  throw new Error("Invalid input: not a Zod schema");
}
const la = Fe.memo(({ register: e, formState: { errors: t } }) =>
    y.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        y.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "상품명",
        }),
        y.jsx("input", {
          ...e("title"),
          placeholder: "예: 빈티지 가죽 자켓",
          className:
            "w-full h-14 rounded-md border border-scale-200 focus:border-brand-primary outline-none px-4 text-base text-scale-500 placeholder:text-scale-300",
        }),
        t.title &&
          y.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: t.title.message,
          }),
      ],
    }),
  ),
  da = Fe.memo(({ register: e, formState: { errors: t } }) =>
    y.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        y.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "상품 설명",
        }),
        y.jsx("textarea", {
          ...e("description"),
          placeholder: "상품의 상태, 사용 이력, 특징 등을 작성해주세요.",
          className:
            "w-full min-h-36 rounded-md border border-scale-200 focus:border-brand-primary outline-none p-4 text-base text-scale-500 placeholder:text-scale-300",
        }),
        t.description &&
          y.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: t.description.message,
          }),
      ],
    }),
  );
function fa({ control: e }) {
  const [t, r] = Fe.useState(null),
    n = Fe.useRef(null);
  return y.jsx(Se, {
    name: "image",
    control: e,
    render: ({
      field: { onChange: o, value: s },
      fieldState: { error: i },
    }) => (
      Fe.useEffect(() => {
        if (!s) {
          r(null);
          return;
        }
        const a = URL.createObjectURL(s);
        return (r(a), () => URL.revokeObjectURL(a));
      }, [s]),
      y.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          y.jsx("label", {
            className: "text-lg font-bold text-scale-600",
            children: "사진",
          }),
          y.jsxs("div", {
            onClick: () => n.current?.click(),
            onDrop: (a) => {
              (a.preventDefault(), a.stopPropagation());
              const f = a.dataTransfer.files?.[0];
              f && f.type.startsWith("image/") && o(f);
            },
            onDragOver: (a) => {
              (a.preventDefault(), a.stopPropagation());
            },
            className: `w-full h-[320px] rounded-md border ${t ? "border-transparent" : "border-scale-200"} overflow-hidden cursor-pointer flex items-center justify-center`,
            title: t
              ? "클릭하여 다른 사진으로 변경"
              : "클릭 또는 드래그 앤 드롭",
            children: [
              t
                ? y.jsx("img", {
                    src: t,
                    alt: "preview",
                    className: "w-full h-full object-cover",
                  })
                : y.jsxs("div", {
                    className:
                      "flex flex-col items-center gap-4 text-scale-300",
                    children: [
                      y.jsx("img", { src: An, className: "w-16 opacity-60" }),
                      y.jsx("div", {
                        className: "text-base",
                        children: "클릭하여 업로드 또는 드래그 앤 드롭",
                      }),
                    ],
                  }),
              y.jsx("input", {
                ref: n,
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (a) => {
                  const f = a.target.files?.[0];
                  f && o(f);
                },
              }),
            ],
          }),
          i &&
            y.jsx("p", {
              className: "text-point-warning text-base mt-1",
              children: i.message,
            }),
        ],
      })
    ),
  });
}
function ha({ control: e }) {
  return y.jsx(Se, {
    name: "startPrice",
    control: e,
    render: ({ field: { onChange: t, value: r }, fieldState: { error: n } }) =>
      y.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          y.jsx("label", {
            className: "text-lg font-bold text-scale-600",
            children: "시작가",
          }),
          y.jsxs("div", {
            className: "flex items-center gap-6",
            children: [
              y.jsx("img", { src: zn, className: "w-10" }),
              y.jsx("input", {
                inputMode: "numeric",
                value: r || "",
                onChange: (o) => {
                  const s = Be(o.target.value);
                  t(s ? Number(s) : 0);
                },
                className:
                  "w-24 text-3xl font-bold text-brand-primary bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center",
              }),
              y.jsx("span", {
                className: "text-3xl font-bold text-scale-500",
                children: "잔",
              }),
            ],
          }),
          n &&
            y.jsx("p", {
              className: "text-point-warning text-base mt-1",
              children: n.message,
            }),
        ],
      }),
  });
}
function ma({ control: e, formState: { errors: t } }) {
  return y.jsxs("div", {
    className: "flex flex-col gap-2",
    children: [
      y.jsx("label", {
        className: "text-lg font-bold text-scale-600",
        children: "경매 기간",
      }),
      y.jsxs("div", {
        className: "flex items-center gap-5 text-scale-500",
        children: [
          y.jsx(Se, {
            name: "duration.days",
            control: e,
            render: ({ field: { onChange: r, value: n } }) =>
              y.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  y.jsx("input", {
                    inputMode: "numeric",
                    value: n,
                    onChange: (o) => {
                      const s = Be(o.target.value);
                      r(s ? Number(s) : 0);
                    },
                    className:
                      "w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center",
                  }),
                  y.jsx("span", { className: "text-3xl pb-1", children: "d" }),
                ],
              }),
          }),
          y.jsx(Se, {
            name: "duration.hours",
            control: e,
            render: ({ field: { onChange: r, value: n } }) =>
              y.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  y.jsx("input", {
                    inputMode: "numeric",
                    value: String(n).padStart(2, "0"),
                    onChange: (o) => {
                      const s = Be(o.target.value),
                        i = s ? Number(s) : 0;
                      r(Math.min(i, 23));
                    },
                    className:
                      "w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center",
                  }),
                  y.jsx("span", { className: "text-3xl pb-1", children: "h" }),
                ],
              }),
          }),
          y.jsx(Se, {
            name: "duration.minutes",
            control: e,
            render: ({ field: { onChange: r, value: n } }) =>
              y.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  y.jsx("input", {
                    inputMode: "numeric",
                    value: String(n).padStart(2, "0"),
                    onChange: (o) => {
                      const s = Be(o.target.value),
                        i = s ? Number(s) : 0;
                      r(Math.min(i, 59));
                    },
                    className:
                      "w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center",
                  }),
                  y.jsx("span", { className: "text-3xl pb-1", children: "m" }),
                ],
              }),
          }),
        ],
      }),
      t.duration &&
        y.jsx("p", {
          className: "text-point-warning text-base mt-1",
          children: t.duration.message,
        }),
    ],
  });
}
function va() {
  const e = Zn(),
    t = Wt(),
    r = sa({
      resolver: ca(Tu),
      mode: "onTouched",
      defaultValues: {
        title: "",
        description: "",
        startPrice: 0,
        duration: { days: 10, hours: 0, minutes: 0 },
      },
    }),
    { handleSubmit: n, formState: o, reset: s, register: i, control: a } = r,
    { mutateAsync: f, isSuccess: m, isError: g, reset: x } = Wt(),
    b = async (F) => {
      try {
        const R = Pu(F.duration);
        await f({
          title: F.title,
          description: F.description,
          starting_price: F.startPrice,
          end_time: R,
          image_file: F.image,
        });
      } catch (R) {
        console.log(R);
      }
    },
    S = () => {
      (x(), s(), e(En.HISTORY.ROOT));
    },
    I = () => {
      (x(), s());
    };
  return y.jsx("div", {
    className: "w-full px-50 py-30",
    children: y.jsxs("div", {
      className: "max-w-[973px] mx-auto flex flex-col gap-25",
      children: [
        y.jsxs("div", {
          className: "flex flex-col gap-5",
          children: [
            y.jsx("div", {
              className: "text-5xl font-bold text-scale-600",
              children: "경매 등록하기",
            }),
            y.jsx("div", {
              className: "text-2xl text-scale-400",
              children: "당신의 애착템, 술잔으로 걸어보세요!",
            }),
          ],
        }),
        y.jsxs("form", {
          onSubmit: n(b),
          className:
            "w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-35 py-22.5",
          children: [
            y.jsxs("div", {
              className: "grid grid-cols-1 gap-12",
              children: [
                y.jsx(la, { register: i, formState: o }),
                y.jsx(da, { register: i, formState: o }),
                y.jsx(fa, { control: a }),
                y.jsxs("div", {
                  className: "w-full flex gap-38",
                  children: [
                    y.jsx(ha, { control: a }),
                    y.jsx(ma, { control: a, formState: o }),
                  ],
                }),
              ],
            }),
            y.jsx("div", {
              className: "w-full flex justify-center",
              children: y.jsx($n, {
                type: "submit",
                variant: o.isValid ? "primary" : "disabled",
                disabled: !o.isValid || t.isPending,
                className: "w-80 h-14",
                children: t.isPending ? "등록 중 ..." : "상품 등록하기",
              }),
            }),
          ],
        }),
        y.jsx(Bt, {
          open: m,
          onClose: I,
          title: `상품 등록이 완료되었어요!
내 경매에서 확인해 보세요.`,
          closeButton: "닫기",
          confirmButton: "내 경매 보기",
          onConfirm: S,
        }),
        y.jsx(Bt, {
          open: g,
          onClose: I,
          title: "등록에 실패했습니다.\\n잠시 후 다시 시도해 주세요.",
          closeButton: "닫기",
          confirmButton: "확인",
          onConfirm: S,
        }),
      ],
    }),
  });
}
export { va as default };
