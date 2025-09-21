var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      var _l2, _t2, _c, _i, _f, _s2, _n2, _e2, _r2, _a, __, _u, _Ee_instances, v_fn, o_fn, d_fn, _l3, _t3, _c2, _i2, _f2, _s3, _n3, _e3, _r3, _a2, __2, _u2, _v, _o, _d, _g, _Nr_instances, w_fn, y_fn, h_fn, p_fn, b_fn, _a3;
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
        new MutationObserver((s) => {
          for (const l of s) if (l.type === "childList") for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(s) {
          const l = {};
          return s.integrity && (l.integrity = s.integrity), s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? l.credentials = "include" : s.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
        }
        function r(s) {
          if (s.ep) return;
          s.ep = true;
          const l = n(s);
          fetch(s.href, l);
        }
      })();
      const vn = false;
      var Nt = Array.isArray, Zn = Array.prototype.indexOf, Vt = Array.from, Dt = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Jn = Object.prototype, Qn = Array.prototype, er = Object.getPrototypeOf, tn = Object.isExtensible;
      function dn(e) {
        for (var t = 0; t < e.length; t++) e[t]();
      }
      function tr() {
        var e, t, n = new Promise((r, s) => {
          e = r, t = s;
        });
        return {
          promise: n,
          resolve: e,
          reject: t
        };
      }
      const J = 2, Wt = 4, Yt = 8, tt = 16, Fe = 32, Ye = 64, $t = 128, _e = 256, kt = 512, V = 1024, se = 2048, Pe = 4096, ce = 8192, nt = 16384, hn = 32768, Rt = 65536, nn = 1 << 17, nr = 1 << 18, rt = 1 << 19, rr = 1 << 20, qt = 1 << 21, Ht = 1 << 22, je = 1 << 23, _t = Symbol("$state"), Kt = new class extends Error {
        constructor() {
          super(...arguments);
          __publicField(this, "name", "StaleReactionError");
          __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
        }
      }();
      function sr() {
        throw new Error("https://svelte.dev/e/async_derived_orphan");
      }
      function lr() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      }
      function ir() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      }
      function ar() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      }
      function or() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation");
      }
      function ur() {
        throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
      }
      const fr = 1, _r = 2, cr = 16, vr = 1, dr = 2, U = Symbol();
      function hr() {
        console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      }
      function pr() {
        console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
      }
      let br = false;
      function pn(e) {
        return e === this.v;
      }
      function gr(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
      }
      function bn(e) {
        return !gr(e, this.v);
      }
      let wr = false, ve = null;
      function Je(e) {
        ve = e;
      }
      function gn(e, t = false, n) {
        ve = {
          p: ve,
          c: null,
          e: null,
          s: e,
          x: null,
          l: null
        };
      }
      function wn(e) {
        var t = ve, n = t.e;
        if (n !== null) {
          t.e = null;
          for (var r of n) Yr(r);
        }
        return ve = t.p, {};
      }
      function yn() {
        return true;
      }
      let Ne = [], Tt = [];
      function mn() {
        var e = Ne;
        Ne = [], dn(e);
      }
      function yr() {
        var e = Tt;
        Tt = [], dn(e);
      }
      function mr() {
        return Ne.length > 0 || Tt.length > 0;
      }
      function Gt(e) {
        if (Ne.length === 0 && !ct) {
          var t = Ne;
          queueMicrotask(() => {
            t === Ne && mn();
          });
        }
        Ne.push(e);
      }
      function xr() {
        Ne.length > 0 && mn(), Tt.length > 0 && yr();
      }
      const Er = /* @__PURE__ */ new WeakMap();
      function xn(e) {
        var t = m;
        if (t === null) return g.f |= je, e;
        if ((t.f & hn) === 0) {
          if ((t.f & $t) === 0) throw !t.parent && e instanceof Error && En(e), e;
          t.b.error(e);
        } else Qe(e, t);
      }
      function Qe(e, t) {
        for (; t !== null; ) {
          if ((t.f & $t) !== 0) try {
            t.b.error(e);
            return;
          } catch (n) {
            e = n;
          }
          t = t.parent;
        }
        throw e instanceof Error && En(e), e;
      }
      function En(e) {
        const t = Er.get(e);
        t && (Dt(e, "message", {
          value: t.message
        }), Dt(e, "stack", {
          value: t.stack
        }));
      }
      const Pt = /* @__PURE__ */ new Set();
      let k = null, xt = null, Ut = /* @__PURE__ */ new Set(), Ve = [], Ot = null, jt = false, ct = false;
      const _Ee = class _Ee {
        constructor() {
          __privateAdd(this, _Ee_instances);
          __publicField(this, "current", /* @__PURE__ */ new Map());
          __privateAdd(this, _l2, /* @__PURE__ */ new Map());
          __privateAdd(this, _t2, /* @__PURE__ */ new Set());
          __privateAdd(this, _c, 0);
          __privateAdd(this, _i, null);
          __privateAdd(this, _f, false);
          __privateAdd(this, _s2, []);
          __privateAdd(this, _n2, []);
          __privateAdd(this, _e2, []);
          __privateAdd(this, _r2, []);
          __privateAdd(this, _a, []);
          __privateAdd(this, __, []);
          __privateAdd(this, _u, []);
          __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
        }
        process(t) {
          var _a4;
          Ve = [], xt = null;
          for (const s of t) __privateMethod(this, _Ee_instances, v_fn).call(this, s);
          if (__privateGet(this, _s2).length === 0 && __privateGet(this, _c) === 0) {
            __privateMethod(this, _Ee_instances, d_fn).call(this);
            var n = __privateGet(this, _e2), r = __privateGet(this, _r2);
            __privateSet(this, _e2, []), __privateSet(this, _r2, []), __privateSet(this, _a, []), xt = k, k = null, rn(n), rn(r), k === null ? k = this : Pt.delete(this), (_a4 = __privateGet(this, _i)) == null ? void 0 : _a4.resolve();
          } else __privateMethod(this, _Ee_instances, o_fn).call(this, __privateGet(this, _e2)), __privateMethod(this, _Ee_instances, o_fn).call(this, __privateGet(this, _r2)), __privateMethod(this, _Ee_instances, o_fn).call(this, __privateGet(this, _a));
          for (const s of __privateGet(this, _s2)) Ze(s);
          for (const s of __privateGet(this, _n2)) Ze(s);
          __privateSet(this, _s2, []), __privateSet(this, _n2, []);
        }
        capture(t, n) {
          __privateGet(this, _l2).has(t) || __privateGet(this, _l2).set(t, n), this.current.set(t, t.v);
        }
        activate() {
          k = this;
        }
        deactivate() {
          k = null, xt = null;
          for (const t of Ut) if (Ut.delete(t), t(), k !== null) break;
        }
        neuter() {
          __privateSet(this, _f, true);
        }
        flush() {
          Ve.length > 0 ? Sn() : __privateMethod(this, _Ee_instances, d_fn).call(this), k === this && (__privateGet(this, _c) === 0 && Pt.delete(this), this.deactivate());
        }
        increment() {
          __privateSet(this, _c, __privateGet(this, _c) + 1);
        }
        decrement() {
          if (__privateSet(this, _c, __privateGet(this, _c) - 1), __privateGet(this, _c) === 0) {
            for (const t of __privateGet(this, __)) X(t, se), et(t);
            for (const t of __privateGet(this, _u)) X(t, Pe), et(t);
            __privateSet(this, _e2, []), __privateSet(this, _r2, []), this.flush();
          } else this.deactivate();
        }
        add_callback(t) {
          __privateGet(this, _t2).add(t);
        }
        settled() {
          return (__privateGet(this, _i) ?? __privateSet(this, _i, tr())).promise;
        }
        static ensure() {
          if (k === null) {
            const t = k = new _Ee();
            Pt.add(k), ct || _Ee.enqueue(() => {
              k === t && t.flush();
            });
          }
          return k;
        }
        static enqueue(t) {
          Gt(t);
        }
      };
      _l2 = new WeakMap();
      _t2 = new WeakMap();
      _c = new WeakMap();
      _i = new WeakMap();
      _f = new WeakMap();
      _s2 = new WeakMap();
      _n2 = new WeakMap();
      _e2 = new WeakMap();
      _r2 = new WeakMap();
      _a = new WeakMap();
      __ = new WeakMap();
      _u = new WeakMap();
      _Ee_instances = new WeakSet();
      v_fn = function(t) {
        var _a4;
        t.f ^= V;
        for (var n = t.first; n !== null; ) {
          var r = n.f, s = (r & (Fe | Ye)) !== 0, l = s && (r & V) !== 0, i = l || (r & ce) !== 0 || this.skipped_effects.has(n);
          if (!i && n.fn !== null) {
            if (s) n.f ^= V;
            else if ((r & Wt) !== 0) __privateGet(this, _r2).push(n);
            else if ((r & V) === 0) if ((r & Ht) !== 0) {
              var o = ((_a4 = n.b) == null ? void 0 : _a4.is_pending()) ? __privateGet(this, _n2) : __privateGet(this, _s2);
              o.push(n);
            } else Ft(n) && ((n.f & tt) !== 0 && __privateGet(this, _a).push(n), Ze(n));
            var a = n.first;
            if (a !== null) {
              n = a;
              continue;
            }
          }
          var u = n.parent;
          for (n = n.next; n === null && u !== null; ) n = u.next, u = u.parent;
        }
      };
      o_fn = function(t) {
        for (const n of t) ((n.f & se) !== 0 ? __privateGet(this, __) : __privateGet(this, _u)).push(n), X(n, V);
        t.length = 0;
      };
      d_fn = function() {
        if (!__privateGet(this, _f)) for (const t of __privateGet(this, _t2)) t();
        __privateGet(this, _t2).clear();
      };
      let Ee = _Ee;
      function Sr(e) {
        var t = ct;
        ct = true;
        try {
          for (var n; ; ) {
            if (xr(), Ve.length === 0 && !mr() && (k == null ? void 0 : k.flush(), Ve.length === 0)) return Ot = null, n;
            Sn();
          }
        } finally {
          ct = t;
        }
      }
      function Sn() {
        var e = ze;
        jt = true;
        try {
          var t = 0;
          for (on(true); Ve.length > 0; ) {
            var n = Ee.ensure();
            if (t++ > 1e3) {
              var r, s;
              kr();
            }
            n.process(Ve), Oe.clear();
          }
        } finally {
          jt = false, on(e), Ot = null;
        }
      }
      function kr() {
        try {
          lr();
        } catch (e) {
          Qe(e, Ot);
        }
      }
      let Ue = null;
      function rn(e) {
        var t = e.length;
        if (t !== 0) {
          for (var n = 0; n < t; ) {
            var r = e[n++];
            if ((r.f & (nt | ce)) === 0 && Ft(r) && (Ue = [], Ze(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Dn(r) : r.fn = null), (Ue == null ? void 0 : Ue.length) > 0)) {
              Oe.clear();
              for (const s of Ue) Ze(s);
              Ue = [];
            }
          }
          Ue = null;
        }
      }
      function et(e) {
        for (var t = Ot = e; t.parent !== null; ) {
          t = t.parent;
          var n = t.f;
          if (jt && t === m && (n & tt) !== 0) return;
          if ((n & (Ye | Fe)) !== 0) {
            if ((n & V) === 0) return;
            t.f ^= V;
          }
        }
        Ve.push(t);
      }
      function Tr(e) {
        let t = 0, n = We(0), r;
        return () => {
          Vr() && (_(n), Mn(() => (t === 0 && (r = Hn(() => e(() => vt(n)))), t += 1, () => {
            Gt(() => {
              t -= 1, t === 0 && (r == null ? void 0 : r(), r = void 0, vt(n));
            });
          })));
        };
      }
      var Ar = Rt | rt | $t;
      function Cr(e, t, n) {
        new Nr(e, t, n);
      }
      class Nr {
        constructor(t, n, r) {
          __privateAdd(this, _Nr_instances);
          __publicField(this, "parent");
          __privateAdd(this, _l3, false);
          __privateAdd(this, _t3);
          __privateAdd(this, _c2, null);
          __privateAdd(this, _i2);
          __privateAdd(this, _f2);
          __privateAdd(this, _s3);
          __privateAdd(this, _n3, null);
          __privateAdd(this, _e3, null);
          __privateAdd(this, _r3, null);
          __privateAdd(this, _a2, null);
          __privateAdd(this, __2, 0);
          __privateAdd(this, _u2, 0);
          __privateAdd(this, _v, false);
          __privateAdd(this, _o, null);
          __privateAdd(this, _d, () => {
            __privateGet(this, _o) && ht(__privateGet(this, _o), __privateGet(this, __2));
          });
          __privateAdd(this, _g, Tr(() => (__privateSet(this, _o, We(__privateGet(this, __2))), () => {
            __privateSet(this, _o, null);
          })));
          __privateSet(this, _t3, t), __privateSet(this, _i2, n), __privateSet(this, _f2, r), this.parent = m.b, __privateSet(this, _l3, !!__privateGet(this, _i2).pending), __privateSet(this, _s3, Jt(() => {
            m.b = this;
            {
              try {
                __privateSet(this, _n3, ue(() => r(__privateGet(this, _t3))));
              } catch (s) {
                this.error(s);
              }
              __privateGet(this, _u2) > 0 ? __privateMethod(this, _Nr_instances, p_fn).call(this) : __privateSet(this, _l3, false);
            }
          }, Ar));
        }
        is_pending() {
          return __privateGet(this, _l3) || !!this.parent && this.parent.is_pending();
        }
        has_pending_snippet() {
          return !!__privateGet(this, _i2).pending;
        }
        update_pending_count(t) {
          __privateMethod(this, _Nr_instances, b_fn).call(this, t), __privateSet(this, __2, __privateGet(this, __2) + t), Ut.add(__privateGet(this, _d));
        }
        get_effect_pending() {
          return __privateGet(this, _g).call(this), _(__privateGet(this, _o));
        }
        error(t) {
          var n = __privateGet(this, _i2).onerror;
          let r = __privateGet(this, _i2).failed;
          if (__privateGet(this, _v) || !n && !r) throw t;
          __privateGet(this, _n3) && (re(__privateGet(this, _n3)), __privateSet(this, _n3, null)), __privateGet(this, _e3) && (re(__privateGet(this, _e3)), __privateSet(this, _e3, null)), __privateGet(this, _r3) && (re(__privateGet(this, _r3)), __privateSet(this, _r3, null));
          var s = false, l = false;
          const i = () => {
            if (s) {
              pr();
              return;
            }
            s = true, l && ur(), Ee.ensure(), __privateSet(this, __2, 0), __privateGet(this, _r3) !== null && Xe(__privateGet(this, _r3), () => {
              __privateSet(this, _r3, null);
            }), __privateSet(this, _l3, this.has_pending_snippet()), __privateSet(this, _n3, __privateMethod(this, _Nr_instances, h_fn).call(this, () => (__privateSet(this, _v, false), ue(() => __privateGet(this, _f2).call(this, __privateGet(this, _t3)))))), __privateGet(this, _u2) > 0 ? __privateMethod(this, _Nr_instances, p_fn).call(this) : __privateSet(this, _l3, false);
          };
          var o = g;
          try {
            G(null), l = true, n == null ? void 0 : n(t, i), l = false;
          } catch (a) {
            Qe(a, __privateGet(this, _s3) && __privateGet(this, _s3).parent);
          } finally {
            G(o);
          }
          r && Gt(() => {
            __privateSet(this, _r3, __privateMethod(this, _Nr_instances, h_fn).call(this, () => {
              __privateSet(this, _v, true);
              try {
                return ue(() => {
                  r(__privateGet(this, _t3), () => t, () => i);
                });
              } catch (a) {
                return Qe(a, __privateGet(this, _s3).parent), null;
              } finally {
                __privateSet(this, _v, false);
              }
            }));
          });
        }
      }
      _l3 = new WeakMap();
      _t3 = new WeakMap();
      _c2 = new WeakMap();
      _i2 = new WeakMap();
      _f2 = new WeakMap();
      _s3 = new WeakMap();
      _n3 = new WeakMap();
      _e3 = new WeakMap();
      _r3 = new WeakMap();
      _a2 = new WeakMap();
      __2 = new WeakMap();
      _u2 = new WeakMap();
      _v = new WeakMap();
      _o = new WeakMap();
      _d = new WeakMap();
      _g = new WeakMap();
      _Nr_instances = new WeakSet();
      w_fn = function() {
        try {
          __privateSet(this, _n3, ue(() => __privateGet(this, _f2).call(this, __privateGet(this, _t3))));
        } catch (t) {
          this.error(t);
        }
        __privateSet(this, _l3, false);
      };
      y_fn = function() {
        const t = __privateGet(this, _i2).pending;
        t && (__privateSet(this, _e3, ue(() => t(__privateGet(this, _t3)))), Ee.enqueue(() => {
          __privateSet(this, _n3, __privateMethod(this, _Nr_instances, h_fn).call(this, () => (Ee.ensure(), ue(() => __privateGet(this, _f2).call(this, __privateGet(this, _t3)))))), __privateGet(this, _u2) > 0 ? __privateMethod(this, _Nr_instances, p_fn).call(this) : (Xe(__privateGet(this, _e3), () => {
            __privateSet(this, _e3, null);
          }), __privateSet(this, _l3, false));
        }));
      };
      h_fn = function(t) {
        var n = m, r = g, s = ve;
        me(__privateGet(this, _s3)), G(__privateGet(this, _s3)), Je(__privateGet(this, _s3).ctx);
        try {
          return t();
        } catch (l) {
          return xn(l), null;
        } finally {
          me(n), G(r), Je(s);
        }
      };
      p_fn = function() {
        const t = __privateGet(this, _i2).pending;
        __privateGet(this, _n3) !== null && (__privateSet(this, _a2, document.createDocumentFragment()), Rr(__privateGet(this, _n3), __privateGet(this, _a2))), __privateGet(this, _e3) === null && __privateSet(this, _e3, ue(() => t(__privateGet(this, _t3))));
      };
      b_fn = function(t) {
        var _a4;
        if (!this.has_pending_snippet()) {
          this.parent && __privateMethod(_a4 = this.parent, _Nr_instances, b_fn).call(_a4, t);
          return;
        }
        __privateSet(this, _u2, __privateGet(this, _u2) + t), __privateGet(this, _u2) === 0 && (__privateSet(this, _l3, false), __privateGet(this, _e3) && Xe(__privateGet(this, _e3), () => {
          __privateSet(this, _e3, null);
        }), __privateGet(this, _a2) && (__privateGet(this, _t3).before(__privateGet(this, _a2)), __privateSet(this, _a2, null)));
      };
      function Rr(e, t) {
        for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
          var s = n === r ? null : gt(n);
          t.append(n), n = s;
        }
      }
      function Or(e, t, n) {
        const r = Xt;
        if (t.length === 0) {
          n(e.map(r));
          return;
        }
        var s = k, l = m, i = Fr();
        Promise.all(t.map((o) => Pr(o))).then((o) => {
          s == null ? void 0 : s.activate(), i();
          try {
            n([
              ...e.map(r),
              ...o
            ]);
          } catch (a) {
            (l.f & nt) === 0 && Qe(a, l);
          }
          s == null ? void 0 : s.deactivate(), kn();
        }).catch((o) => {
          Qe(o, l);
        });
      }
      function Fr() {
        var e = m, t = g, n = ve, r = k;
        return function() {
          me(e), G(t), Je(n), r == null ? void 0 : r.activate();
        };
      }
      function kn() {
        me(null), G(null), Je(null);
      }
      function Xt(e) {
        var t = J | se, n = g !== null && (g.f & J) !== 0 ? g : null;
        return m === null || n !== null && (n.f & _e) !== 0 ? t |= _e : m.f |= rt, {
          ctx: ve,
          deps: null,
          effects: null,
          equals: pn,
          f: t,
          fn: e,
          reactions: null,
          rv: 0,
          v: U,
          wv: 0,
          parent: n ?? m,
          ac: null
        };
      }
      function Pr(e, t) {
        let n = m;
        n === null && sr();
        var r = n.b, s = void 0, l = We(U), i = null, o = !g;
        return Kr(() => {
          try {
            var a = e();
            i && Promise.resolve(a).catch(() => {
            });
          } catch (h) {
            a = Promise.reject(h);
          }
          var u = () => a;
          s = (i == null ? void 0 : i.then(u, u)) ?? Promise.resolve(a), i = s;
          var c = k, p = r.is_pending();
          o && (r.update_pending_count(1), p || c.increment());
          const v = (h, d = void 0) => {
            i = null, p || c.activate(), d ? d !== Kt && (l.f |= je, ht(l, d)) : ((l.f & je) !== 0 && (l.f ^= je), ht(l, h)), o && (r.update_pending_count(-1), p || c.decrement()), kn();
          };
          if (s.then(v, (h) => v(null, h || "unknown")), c) return () => {
            queueMicrotask(() => c.neuter());
          };
        }), new Promise((a) => {
          function u(c) {
            function p() {
              c === s ? a(l) : u(s);
            }
            c.then(p, p);
          }
          u(s);
        });
      }
      function Ce(e) {
        const t = Xt(e);
        return jn(t), t;
      }
      function Mr(e) {
        const t = Xt(e);
        return t.equals = bn, t;
      }
      function Tn(e) {
        var t = e.effects;
        if (t !== null) {
          e.effects = null;
          for (var n = 0; n < t.length; n += 1) re(t[n]);
        }
      }
      function Ir(e) {
        for (var t = e.parent; t !== null; ) {
          if ((t.f & J) === 0) return t;
          t = t.parent;
        }
        return null;
      }
      function zt(e) {
        var t, n = m;
        me(Ir(e));
        try {
          Tn(e), t = Yn(e);
        } finally {
          me(n);
        }
        return t;
      }
      function An(e) {
        var t = zt(e);
        if (e.equals(t) || (e.v = t, e.wv = Vn()), !wt) {
          var n = (Re || (e.f & _e) !== 0) && e.deps !== null ? Pe : V;
          X(e, n);
        }
      }
      const Oe = /* @__PURE__ */ new Map();
      function We(e, t) {
        var n = {
          f: 0,
          v: e,
          reactions: null,
          equals: pn,
          rv: 0,
          wv: 0
        };
        return n;
      }
      function we(e, t) {
        const n = We(e);
        return jn(n), n;
      }
      function Lr(e, t = false, n = true) {
        const r = We(e);
        return t || (r.equals = bn), r;
      }
      function Z(e, t, n = false) {
        g !== null && (!fe || (g.f & nn) !== 0) && yn() && (g.f & (J | tt | Ht | nn)) !== 0 && !(Se == null ? void 0 : Se.includes(e)) && or();
        let r = n ? ut(t) : t;
        return ht(e, r);
      }
      function ht(e, t) {
        if (!e.equals(t)) {
          var n = e.v;
          wt ? Oe.set(e, t) : Oe.set(e, n), e.v = t;
          var r = Ee.ensure();
          r.capture(e, n), (e.f & J) !== 0 && ((e.f & se) !== 0 && zt(e), X(e, (e.f & _e) === 0 ? V : Pe)), e.wv = Vn(), Cn(e, se), m !== null && (m.f & V) !== 0 && (m.f & (Fe | Ye)) === 0 && (ne === null ? zr([
            e
          ]) : ne.push(e));
        }
        return t;
      }
      function vt(e) {
        Z(e, e.v + 1);
      }
      function Cn(e, t) {
        var n = e.reactions;
        if (n !== null) for (var r = n.length, s = 0; s < r; s++) {
          var l = n[s], i = l.f, o = (i & se) === 0;
          o && X(l, t), (i & J) !== 0 ? Cn(l, Pe) : o && ((i & tt) !== 0 && Ue !== null && Ue.push(l), et(l));
        }
      }
      function ut(e) {
        if (typeof e != "object" || e === null || _t in e) return e;
        const t = er(e);
        if (t !== Jn && t !== Qn) return e;
        var n = /* @__PURE__ */ new Map(), r = Nt(e), s = we(0), l = Be, i = (o) => {
          if (Be === l) return o();
          var a = g, u = Be;
          G(null), fn(l);
          var c = o();
          return G(a), fn(u), c;
        };
        return r && n.set("length", we(e.length)), new Proxy(e, {
          defineProperty(o, a, u) {
            (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && ir();
            var c = n.get(a);
            return c === void 0 ? c = i(() => {
              var p = we(u.value);
              return n.set(a, p), p;
            }) : Z(c, u.value, true), true;
          },
          deleteProperty(o, a) {
            var u = n.get(a);
            if (u === void 0) {
              if (a in o) {
                const c = i(() => we(U));
                n.set(a, c), vt(s);
              }
            } else Z(u, U), vt(s);
            return true;
          },
          get(o, a, u) {
            var _a4;
            if (a === _t) return e;
            var c = n.get(a), p = a in o;
            if (c === void 0 && (!p || ((_a4 = ft(o, a)) == null ? void 0 : _a4.writable)) && (c = i(() => {
              var h = ut(p ? o[a] : U), d = we(h);
              return d;
            }), n.set(a, c)), c !== void 0) {
              var v = _(c);
              return v === U ? void 0 : v;
            }
            return Reflect.get(o, a, u);
          },
          getOwnPropertyDescriptor(o, a) {
            var u = Reflect.getOwnPropertyDescriptor(o, a);
            if (u && "value" in u) {
              var c = n.get(a);
              c && (u.value = _(c));
            } else if (u === void 0) {
              var p = n.get(a), v = p == null ? void 0 : p.v;
              if (p !== void 0 && v !== U) return {
                enumerable: true,
                configurable: true,
                value: v,
                writable: true
              };
            }
            return u;
          },
          has(o, a) {
            var _a4;
            if (a === _t) return true;
            var u = n.get(a), c = u !== void 0 && u.v !== U || Reflect.has(o, a);
            if (u !== void 0 || m !== null && (!c || ((_a4 = ft(o, a)) == null ? void 0 : _a4.writable))) {
              u === void 0 && (u = i(() => {
                var v = c ? ut(o[a]) : U, h = we(v);
                return h;
              }), n.set(a, u));
              var p = _(u);
              if (p === U) return false;
            }
            return c;
          },
          set(o, a, u, c) {
            var _a4;
            var p = n.get(a), v = a in o;
            if (r && a === "length") for (var h = u; h < p.v; h += 1) {
              var d = n.get(h + "");
              d !== void 0 ? Z(d, U) : h in o && (d = i(() => we(U)), n.set(h + "", d));
            }
            if (p === void 0) (!v || ((_a4 = ft(o, a)) == null ? void 0 : _a4.writable)) && (p = i(() => we(void 0)), Z(p, ut(u)), n.set(a, p));
            else {
              v = p.v !== U;
              var b = i(() => ut(u));
              Z(p, b);
            }
            var x = Reflect.getOwnPropertyDescriptor(o, a);
            if ((x == null ? void 0 : x.set) && x.set.call(c, u), !v) {
              if (r && typeof a == "string") {
                var I = n.get("length"), w = Number(a);
                Number.isInteger(w) && w >= I.v && Z(I, w + 1);
              }
              vt(s);
            }
            return true;
          },
          ownKeys(o) {
            _(s);
            var a = Reflect.ownKeys(o).filter((p) => {
              var v = n.get(p);
              return v === void 0 || v.v !== U;
            });
            for (var [u, c] of n) c.v !== U && !(u in o) && a.push(u);
            return a;
          },
          setPrototypeOf() {
            ar();
          }
        });
      }
      function sn(e) {
        try {
          if (e !== null && typeof e == "object" && _t in e) return e[_t];
        } catch {
        }
        return e;
      }
      function Dr(e, t) {
        return Object.is(sn(e), sn(t));
      }
      var ln, Nn, Rn, On;
      function qr() {
        if (ln === void 0) {
          ln = window, Nn = /Firefox/.test(navigator.userAgent);
          var e = Element.prototype, t = Node.prototype, n = Text.prototype;
          Rn = ft(t, "firstChild").get, On = ft(t, "nextSibling").get, tn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), tn(n) && (n.__t = void 0);
        }
      }
      function bt(e = "") {
        return document.createTextNode(e);
      }
      function At(e) {
        return Rn.call(e);
      }
      function gt(e) {
        return On.call(e);
      }
      function W(e, t) {
        return At(e);
      }
      function K(e, t = false) {
        {
          var n = At(e);
          return n instanceof Comment && n.data === "" ? gt(n) : n;
        }
      }
      function D(e, t = 1, n = false) {
        let r = e;
        for (; t--; ) r = gt(r);
        return r;
      }
      function Ur(e) {
        e.textContent = "";
      }
      function Fn() {
        return false;
      }
      let an = false;
      function jr() {
        an || (an = true, document.addEventListener("reset", (e) => {
          Promise.resolve().then(() => {
            var _a4;
            if (!e.defaultPrevented) for (const t of e.target.elements) (_a4 = t.__on_r) == null ? void 0 : _a4.call(t);
          });
        }, {
          capture: true
        }));
      }
      function Zt(e) {
        var t = g, n = m;
        G(null), me(null);
        try {
          return e();
        } finally {
          G(t), me(n);
        }
      }
      function Pn(e, t, n, r = n) {
        e.addEventListener(t, () => Zt(n));
        const s = e.__on_r;
        s ? e.__on_r = () => {
          s(), r(true);
        } : e.__on_r = () => r(true), jr();
      }
      function Br(e, t) {
        var n = t.last;
        n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
      }
      function ke(e, t, n, r = true) {
        var s = m;
        s !== null && (s.f & ce) !== 0 && (e |= ce);
        var l = {
          ctx: ve,
          deps: null,
          nodes_start: null,
          nodes_end: null,
          f: e | se,
          first: null,
          fn: t,
          last: null,
          next: null,
          parent: s,
          b: s && s.b,
          prev: null,
          teardown: null,
          transitions: null,
          wv: 0,
          ac: null
        };
        if (n) try {
          Ze(l), l.f |= hn;
        } catch (a) {
          throw re(l), a;
        }
        else t !== null && et(l);
        if (r) {
          var i = l;
          if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && (i.f & rt) === 0 && (i = i.first), i !== null && (i.parent = s, s !== null && Br(i, s), g !== null && (g.f & J) !== 0 && (e & Ye) === 0)) {
            var o = g;
            (o.effects ?? (o.effects = [])).push(i);
          }
        }
        return l;
      }
      function Vr() {
        return g !== null && !fe;
      }
      function Wr(e) {
        const t = ke(Yt, null, false);
        return X(t, V), t.teardown = e, t;
      }
      function Yr(e) {
        return ke(Wt | rr, e, false);
      }
      function $r(e) {
        Ee.ensure();
        const t = ke(Ye | rt, e, true);
        return (n = {}) => new Promise((r) => {
          n.outro ? Xe(t, () => {
            re(t), r(void 0);
          }) : (re(t), r(void 0));
        });
      }
      function Hr(e) {
        return ke(Wt, e, false);
      }
      function Kr(e) {
        return ke(Ht | rt, e, true);
      }
      function Mn(e, t = 0) {
        return ke(Yt | t, e, true);
      }
      function He(e, t = [], n = []) {
        Or(t, n, (r) => {
          ke(Yt, () => e(...r.map(_)), true);
        });
      }
      function Jt(e, t = 0) {
        var n = ke(tt | t, e, true);
        return n;
      }
      function ue(e, t = true) {
        return ke(Fe | rt, e, true, t);
      }
      function In(e) {
        var t = e.teardown;
        if (t !== null) {
          const n = wt, r = g;
          un(true), G(null);
          try {
            t.call(null);
          } finally {
            un(n), G(r);
          }
        }
      }
      function Ln(e, t = false) {
        var n = e.first;
        for (e.first = e.last = null; n !== null; ) {
          const s = n.ac;
          s !== null && Zt(() => {
            s.abort(Kt);
          });
          var r = n.next;
          (n.f & Ye) !== 0 ? n.parent = null : re(n, t), n = r;
        }
      }
      function Gr(e) {
        for (var t = e.first; t !== null; ) {
          var n = t.next;
          (t.f & Fe) === 0 && re(t), t = n;
        }
      }
      function re(e, t = true) {
        var n = false;
        (t || (e.f & nr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Xr(e.nodes_start, e.nodes_end), n = true), Ln(e, t && !n), Ct(e, 0), X(e, nt);
        var r = e.transitions;
        if (r !== null) for (const l of r) l.stop();
        In(e);
        var s = e.parent;
        s !== null && s.first !== null && Dn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
      }
      function Xr(e, t) {
        for (; e !== null; ) {
          var n = e === t ? null : gt(e);
          e.remove(), e = n;
        }
      }
      function Dn(e) {
        var t = e.parent, n = e.prev, r = e.next;
        n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
      }
      function Xe(e, t) {
        var n = [];
        Qt(e, n, true), qn(n, () => {
          re(e), t && t();
        });
      }
      function qn(e, t) {
        var n = e.length;
        if (n > 0) {
          var r = () => --n || t();
          for (var s of e) s.out(r);
        } else t();
      }
      function Qt(e, t, n) {
        if ((e.f & ce) === 0) {
          if (e.f ^= ce, e.transitions !== null) for (const i of e.transitions) (i.is_global || n) && t.push(i);
          for (var r = e.first; r !== null; ) {
            var s = r.next, l = (r.f & Rt) !== 0 || (r.f & Fe) !== 0;
            Qt(r, t, l ? n : false), r = s;
          }
        }
      }
      function en(e) {
        Un(e, true);
      }
      function Un(e, t) {
        if ((e.f & ce) !== 0) {
          e.f ^= ce, (e.f & V) === 0 && (X(e, se), et(e));
          for (var n = e.first; n !== null; ) {
            var r = n.next, s = (n.f & Rt) !== 0 || (n.f & Fe) !== 0;
            Un(n, s ? t : false), n = r;
          }
          if (e.transitions !== null) for (const l of e.transitions) (l.is_global || t) && l.in();
        }
      }
      let ze = false;
      function on(e) {
        ze = e;
      }
      let wt = false;
      function un(e) {
        wt = e;
      }
      let g = null, fe = false;
      function G(e) {
        g = e;
      }
      let m = null;
      function me(e) {
        m = e;
      }
      let Se = null;
      function jn(e) {
        g !== null && (Se === null ? Se = [
          e
        ] : Se.push(e));
      }
      let $ = null, z = 0, ne = null;
      function zr(e) {
        ne = e;
      }
      let Bn = 1, pt = 0, Be = pt;
      function fn(e) {
        Be = e;
      }
      let Re = false;
      function Vn() {
        return ++Bn;
      }
      function Ft(e) {
        var _a4;
        var t = e.f;
        if ((t & se) !== 0) return true;
        if ((t & Pe) !== 0) {
          var n = e.deps, r = (t & _e) !== 0;
          if (n !== null) {
            var s, l, i = (t & kt) !== 0, o = r && m !== null && !Re, a = n.length;
            if ((i || o) && (m === null || (m.f & nt) === 0)) {
              var u = e, c = u.parent;
              for (s = 0; s < a; s++) l = n[s], (i || !((_a4 = l == null ? void 0 : l.reactions) == null ? void 0 : _a4.includes(u))) && (l.reactions ?? (l.reactions = [])).push(u);
              i && (u.f ^= kt), o && c !== null && (c.f & _e) === 0 && (u.f ^= _e);
            }
            for (s = 0; s < a; s++) if (l = n[s], Ft(l) && An(l), l.wv > e.wv) return true;
          }
          (!r || m !== null && !Re) && X(e, V);
        }
        return false;
      }
      function Wn(e, t, n = true) {
        var r = e.reactions;
        if (r !== null && !(Se == null ? void 0 : Se.includes(e))) for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (l.f & J) !== 0 ? Wn(l, t, false) : t === l && (n ? X(l, se) : (l.f & V) !== 0 && X(l, Pe), et(l));
        }
      }
      function Yn(e) {
        var _a4;
        var t = $, n = z, r = ne, s = g, l = Re, i = Se, o = ve, a = fe, u = Be, c = e.f;
        $ = null, z = 0, ne = null, Re = (c & _e) !== 0 && (fe || !ze || g === null), g = (c & (Fe | Ye)) === 0 ? e : null, Se = null, Je(e.ctx), fe = false, Be = ++pt, e.ac !== null && (Zt(() => {
          e.ac.abort(Kt);
        }), e.ac = null);
        try {
          e.f |= qt;
          var p = e.fn, v = p(), h = e.deps;
          if ($ !== null) {
            var d;
            if (Ct(e, z), h !== null && z > 0) for (h.length = z + $.length, d = 0; d < $.length; d++) h[z + d] = $[d];
            else e.deps = h = $;
            if (!Re || (c & J) !== 0 && e.reactions !== null) for (d = z; d < h.length; d++) ((_a4 = h[d]).reactions ?? (_a4.reactions = [])).push(e);
          } else h !== null && z < h.length && (Ct(e, z), h.length = z);
          if (yn() && ne !== null && !fe && h !== null && (e.f & (J | Pe | se)) === 0) for (d = 0; d < ne.length; d++) Wn(ne[d], e);
          return s !== null && s !== e && (pt++, ne !== null && (r === null ? r = ne : r.push(...ne))), (e.f & je) !== 0 && (e.f ^= je), v;
        } catch (b) {
          return xn(b);
        } finally {
          e.f ^= qt, $ = t, z = n, ne = r, g = s, Re = l, Se = i, Je(o), fe = a, Be = u;
        }
      }
      function Zr(e, t) {
        let n = t.reactions;
        if (n !== null) {
          var r = Zn.call(n, e);
          if (r !== -1) {
            var s = n.length - 1;
            s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
          }
        }
        n === null && (t.f & J) !== 0 && ($ === null || !$.includes(t)) && (X(t, Pe), (t.f & (_e | kt)) === 0 && (t.f ^= kt), Tn(t), Ct(t, 0));
      }
      function Ct(e, t) {
        var n = e.deps;
        if (n !== null) for (var r = t; r < n.length; r++) Zr(e, n[r]);
      }
      function Ze(e) {
        var t = e.f;
        if ((t & nt) === 0) {
          X(e, V);
          var n = m, r = ze;
          m = e, ze = true;
          try {
            (t & tt) !== 0 ? Gr(e) : Ln(e), In(e);
            var s = Yn(e);
            e.teardown = typeof s == "function" ? s : null, e.wv = Bn;
            var l;
            vn && wr && (e.f & se) !== 0 && e.deps;
          } finally {
            ze = r, m = n;
          }
        }
      }
      async function Jr() {
        await Promise.resolve(), Sr();
      }
      function _(e) {
        var t = e.f, n = (t & J) !== 0;
        if (g !== null && !fe) {
          var r = m !== null && (m.f & nt) !== 0;
          if (!r && !(Se == null ? void 0 : Se.includes(e))) {
            var s = g.deps;
            if ((g.f & qt) !== 0) e.rv < pt && (e.rv = pt, $ === null && s !== null && s[z] === e ? z++ : $ === null ? $ = [
              e
            ] : (!Re || !$.includes(e)) && $.push(e));
            else {
              (g.deps ?? (g.deps = [])).push(e);
              var l = e.reactions;
              l === null ? e.reactions = [
                g
              ] : l.includes(g) || l.push(g);
            }
          }
        } else if (n && e.deps === null && e.effects === null) {
          var i = e, o = i.parent;
          o !== null && (o.f & _e) === 0 && (i.f ^= _e);
        }
        if (wt) {
          if (Oe.has(e)) return Oe.get(e);
          if (n) {
            i = e;
            var a = i.v;
            return ((i.f & V) === 0 && i.reactions !== null || $n(i)) && (a = zt(i)), Oe.set(i, a), a;
          }
        } else n && (i = e, Ft(i) && An(i));
        if ((e.f & je) !== 0) throw e.v;
        return e.v;
      }
      function $n(e) {
        if (e.v === U) return true;
        if (e.deps === null) return false;
        for (const t of e.deps) if (Oe.has(t) || (t.f & J) !== 0 && $n(t)) return true;
        return false;
      }
      function Hn(e) {
        var t = fe;
        try {
          return fe = true, e();
        } finally {
          fe = t;
        }
      }
      const Qr = -7169;
      function X(e, t) {
        e.f = e.f & Qr | t;
      }
      const es = [
        "touchstart",
        "touchmove"
      ];
      function ts(e) {
        return es.includes(e);
      }
      const ns = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Set();
      let cn = null;
      function yt(e) {
        var _a4;
        var t = this, n = t.ownerDocument, r = e.type, s = ((_a4 = e.composedPath) == null ? void 0 : _a4.call(e)) || [], l = s[0] || e.target;
        cn = e;
        var i = 0, o = cn === e && e.__root;
        if (o) {
          var a = s.indexOf(o);
          if (a !== -1 && (t === document || t === window)) {
            e.__root = t;
            return;
          }
          var u = s.indexOf(t);
          if (u === -1) return;
          a <= u && (i = a);
        }
        if (l = s[i] || e.target, l !== t) {
          Dt(e, "currentTarget", {
            configurable: true,
            get() {
              return l || n;
            }
          });
          var c = g, p = m;
          G(null), me(null);
          try {
            for (var v, h = []; l !== null; ) {
              var d = l.assignedSlot || l.parentNode || l.host || null;
              try {
                var b = l["__" + r];
                if (b != null && (!l.disabled || e.target === l)) if (Nt(b)) {
                  var [x, ...I] = b;
                  x.apply(l, [
                    e,
                    ...I
                  ]);
                } else b.call(l, e);
              } catch (w) {
                v ? h.push(w) : v = w;
              }
              if (e.cancelBubble || d === t || d === null) break;
              l = d;
            }
            if (v) {
              for (let w of h) queueMicrotask(() => {
                throw w;
              });
              throw v;
            }
          } finally {
            e.__root = t, delete e.currentTarget, G(c), me(p);
          }
        }
      }
      function rs(e) {
        var t = document.createElement("template");
        return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
      }
      function Bt(e, t) {
        var n = m;
        n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
      }
      function R(e, t) {
        var n = (t & vr) !== 0, r = (t & dr) !== 0, s, l = !e.startsWith("<!>");
        return () => {
          s === void 0 && (s = rs(l ? e : "<!>" + e), n || (s = At(s)));
          var i = r || Nn ? document.importNode(s, true) : s.cloneNode(true);
          if (n) {
            var o = At(i), a = i.lastChild;
            Bt(o, a);
          } else Bt(i, i);
          return i;
        };
      }
      function xe() {
        var e = document.createDocumentFragment(), t = document.createComment(""), n = bt();
        return e.append(t, n), Bt(t, n), e;
      }
      function y(e, t) {
        e !== null && e.before(t);
      }
      function Ke(e, t) {
        var n = t == null ? "" : typeof t == "object" ? t + "" : t;
        n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
      }
      function ss(e, t) {
        return ls(e, t);
      }
      const Ge = /* @__PURE__ */ new Map();
      function ls(e, { target: t, anchor: n, props: r = {}, events: s, context: l, intro: i = true }) {
        qr();
        var o = /* @__PURE__ */ new Set(), a = (p) => {
          for (var v = 0; v < p.length; v++) {
            var h = p[v];
            if (!o.has(h)) {
              o.add(h);
              var d = ts(h);
              t.addEventListener(h, yt, {
                passive: d
              });
              var b = Ge.get(h);
              b === void 0 ? (document.addEventListener(h, yt, {
                passive: d
              }), Ge.set(h, 1)) : Ge.set(h, b + 1);
            }
          }
        };
        a(Vt(ns)), _n.add(a);
        var u = void 0, c = $r(() => {
          var p = n ?? t.appendChild(bt());
          return Cr(p, {
            pending: () => {
            }
          }, (v) => {
            if (l) {
              gn({});
              var h = ve;
              h.c = l;
            }
            s && (r.$$events = s), u = e(v, r) || {}, l && wn();
          }), () => {
            var _a4;
            for (var v of o) {
              t.removeEventListener(v, yt);
              var h = Ge.get(v);
              --h === 0 ? (document.removeEventListener(v, yt), Ge.delete(v)) : Ge.set(v, h);
            }
            _n.delete(a), p !== n && ((_a4 = p.parentNode) == null ? void 0 : _a4.removeChild(p));
          };
        });
        return is.set(u, c), u;
      }
      let is = /* @__PURE__ */ new WeakMap();
      function Y(e, t, n = false) {
        var r = e, s = null, l = null, i = U, o = n ? Rt : 0, a = false;
        const u = (h, d = true) => {
          a = true, v(d, h);
        };
        var c = null;
        function p() {
          c !== null && (c.lastChild.remove(), r.before(c), c = null);
          var h = i ? s : l, d = i ? l : s;
          h && en(h), d && Xe(d, () => {
            i ? l = null : s = null;
          });
        }
        const v = (h, d) => {
          if (i !== (i = h)) {
            var b = Fn(), x = r;
            if (b && (c = document.createDocumentFragment(), c.append(x = bt())), i ? s ?? (s = d && ue(() => d(x))) : l ?? (l = d && ue(() => d(x))), b) {
              var I = k, w = i ? s : l, E = i ? l : s;
              w && I.skipped_effects.delete(w), E && I.skipped_effects.add(E), I.add_callback(p);
            } else p();
          }
        };
        Jt(() => {
          a = false, t(u), a || v(null, null);
        }, o);
      }
      function it(e, t) {
        return t;
      }
      function as(e, t, n) {
        for (var r = e.items, s = [], l = t.length, i = 0; i < l; i++) Qt(t[i].e, s, true);
        var o = l > 0 && s.length === 0 && n !== null;
        if (o) {
          var a = n.parentNode;
          Ur(a), a.append(n), r.clear(), ye(e, t[0].prev, t[l - 1].next);
        }
        qn(s, () => {
          for (var u = 0; u < l; u++) {
            var c = t[u];
            o || (r.delete(c.k), ye(e, c.prev, c.next)), re(c.e, !o);
          }
        });
      }
      function at(e, t, n, r, s, l = null) {
        var i = e, o = {
          flags: t,
          items: /* @__PURE__ */ new Map(),
          first: null
        };
        {
          var a = e;
          i = a.appendChild(bt());
        }
        var u = null, c = false, p = /* @__PURE__ */ new Map(), v = Mr(() => {
          var x = n();
          return Nt(x) ? x : x == null ? [] : Vt(x);
        }), h, d;
        function b() {
          os(d, h, o, p, i, s, t, r, n), l !== null && (h.length === 0 ? u ? en(u) : u = ue(() => l(i)) : u !== null && Xe(u, () => {
            u = null;
          }));
        }
        Jt(() => {
          d ?? (d = m), h = _(v);
          var x = h.length;
          if (!(c && x === 0)) {
            c = x === 0;
            var I, w, E, q;
            if (Fn()) {
              var ie = /* @__PURE__ */ new Set(), Me = k;
              for (w = 0; w < x; w += 1) {
                E = h[w], q = r(E, w);
                var F = o.items.get(q) ?? p.get(q);
                F ? Kn(F, E, w) : (I = Gn(null, o, null, null, E, q, w, s, t, n, true), p.set(q, I)), ie.add(q);
              }
              for (const [P, A] of o.items) ie.has(P) || Me.skipped_effects.add(A.e);
              Me.add_callback(b);
            } else b();
            _(v);
          }
        });
      }
      function os(e, t, n, r, s, l, i, o, a) {
        var u = t.length, c = n.items, p = n.first, v = p, h, d = null, b = [], x = [], I, w, E, q;
        for (q = 0; q < u; q += 1) {
          if (I = t[q], w = o(I, q), E = c.get(w), E === void 0) {
            var ie = r.get(w);
            if (ie !== void 0) {
              r.delete(w), c.set(w, ie);
              var Me = d ? d.next : v;
              ye(n, d, ie), ye(n, ie, Me), Mt(ie, Me, s), d = ie;
            } else {
              var F = v ? v.e.nodes_start : s;
              d = Gn(F, n, d, d === null ? n.first : d.next, I, w, q, l, i, a);
            }
            c.set(w, d), b = [], x = [], v = d.next;
            continue;
          }
          if (Kn(E, I, q), (E.e.f & ce) !== 0 && en(E.e), E !== v) {
            if (h !== void 0 && h.has(E)) {
              if (b.length < x.length) {
                var P = x[0], A;
                d = P.prev;
                var Te = b[0], ae = b[b.length - 1];
                for (A = 0; A < b.length; A += 1) Mt(b[A], P, s);
                for (A = 0; A < x.length; A += 1) h.delete(x[A]);
                ye(n, Te.prev, ae.next), ye(n, d, Te), ye(n, ae, P), v = P, d = ae, q -= 1, b = [], x = [];
              } else h.delete(E), Mt(E, v, s), ye(n, E.prev, E.next), ye(n, E, d === null ? n.first : d.next), ye(n, d, E), d = E;
              continue;
            }
            for (b = [], x = []; v !== null && v.k !== w; ) (v.e.f & ce) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(v), x.push(v), v = v.next;
            if (v === null) continue;
            E = v;
          }
          b.push(E), d = E, v = E.next;
        }
        if (v !== null || h !== void 0) {
          for (var Q = h === void 0 ? [] : Vt(h); v !== null; ) (v.e.f & ce) === 0 && Q.push(v), v = v.next;
          var de = Q.length;
          if (de > 0) {
            var Ae = u === 0 ? s : null;
            as(n, Q, Ae);
          }
        }
        e.first = n.first && n.first.e, e.last = d && d.e;
        for (var H of r.values()) re(H.e);
        r.clear();
      }
      function Kn(e, t, n, r) {
        ht(e.v, t), e.i = n;
      }
      function Gn(e, t, n, r, s, l, i, o, a, u, c) {
        var p = (a & fr) !== 0, v = (a & cr) === 0, h = p ? v ? Lr(s, false, false) : We(s) : s, d = (a & _r) === 0 ? i : We(i), b = {
          i: d,
          v: h,
          k: l,
          a: null,
          e: null,
          prev: n,
          next: r
        };
        try {
          if (e === null) {
            var x = document.createDocumentFragment();
            x.append(e = bt());
          }
          return b.e = ue(() => o(e, h, d, u), br), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? c || (t.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
        } finally {
        }
      }
      function Mt(e, t, n) {
        for (var r = e.next ? e.next.e.nodes_start : n, s = t ? t.e.nodes_start : n, l = e.e.nodes_start; l !== null && l !== r; ) {
          var i = gt(l);
          s.before(l), l = i;
        }
      }
      function ye(e, t, n) {
        t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
      }
      function Xn(e, t, n = false) {
        if (e.multiple) {
          if (t == null) return;
          if (!Nt(t)) return hr();
          for (var r of e.options) r.selected = t.includes(dt(r));
          return;
        }
        for (r of e.options) {
          var s = dt(r);
          if (Dr(s, t)) {
            r.selected = true;
            return;
          }
        }
        (!n || t !== void 0) && (e.selectedIndex = -1);
      }
      function us(e) {
        var t = new MutationObserver(() => {
          Xn(e, e.__value);
        });
        t.observe(e, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: [
            "value"
          ]
        }), Wr(() => {
          t.disconnect();
        });
      }
      function fs(e, t, n = t) {
        var r = true;
        Pn(e, "change", (s) => {
          var l = s ? "[selected]" : ":checked", i;
          if (e.multiple) i = [].map.call(e.querySelectorAll(l), dt);
          else {
            var o = e.querySelector(l) ?? e.querySelector("option:not([disabled])");
            i = o && dt(o);
          }
          n(i);
        }), Hr(() => {
          var s = t();
          if (Xn(e, s, r), r && s === void 0) {
            var l = e.querySelector(":checked");
            l !== null && (s = dt(l), n(s));
          }
          e.__value = s, r = false;
        }), us(e);
      }
      function dt(e) {
        return "__value" in e ? e.__value : e.value;
      }
      function ot(e, t, n = t) {
        var r = /* @__PURE__ */ new WeakSet();
        Pn(e, "input", async (s) => {
          var l = s ? e.defaultValue : e.value;
          if (l = It(e) ? Lt(l) : l, n(l), k !== null && r.add(k), await Jr(), l !== (l = t())) {
            var i = e.selectionStart, o = e.selectionEnd;
            e.value = l ?? "", o !== null && (e.selectionStart = i, e.selectionEnd = Math.min(o, e.value.length));
          }
        }), Hn(t) == null && e.value && (n(It(e) ? Lt(e.value) : e.value), k !== null && r.add(k)), Mn(() => {
          var s = t();
          if (e === document.activeElement) {
            var l = xt ?? k;
            if (r.has(l)) return;
          }
          It(e) && s === Lt(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
        });
      }
      function It(e) {
        var t = e.type;
        return t === "number" || t === "range";
      }
      function Lt(e) {
        return e === "" ? null : +e;
      }
      const _s = "5";
      typeof window < "u" && ((_a3 = window.__svelte ?? (window.__svelte = {})).v ?? (_a3.v = /* @__PURE__ */ new Set())).add(_s);
      const cs = [
        "u8",
        "u16",
        "u32",
        "u64",
        "i8",
        "i16",
        "i32",
        "i64",
        "f16",
        "bf16",
        "f32",
        "f64"
      ], vs = (e) => {
        switch (e) {
          case "u8":
          case "u16":
          case "u32":
          case "u64":
          case "i8":
          case "i16":
          case "i32":
          case "i64":
            return false;
          case "f16":
          case "bf16":
          case "f32":
          case "f64":
            return true;
        }
      }, ds = (e) => {
        switch (e) {
          case "u8":
          case "u16":
          case "u32":
          case "u64":
          case "i8":
          case "i16":
          case "i32":
          case "i64":
            return null;
          case "f16":
            return [
              1,
              5,
              10
            ];
          case "bf16":
            return [
              1,
              8,
              7
            ];
          case "f32":
            return [
              1,
              8,
              23
            ];
          case "f64":
            return [
              1,
              11,
              52
            ];
        }
      }, hs = "/repr-viewer/assets/repr_viewer_wasm_bg-CXuzF3ya.wasm", ps = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const r = t.replace(/^data:.*?base64,/, "");
          let s;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(r, "base64");
          else if (typeof atob == "function") {
            const l = atob(r);
            s = new Uint8Array(l.length);
            for (let i = 0; i < l.length; i++) s[i] = l.charCodeAt(i);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(s, e);
        } else {
          const r = await fetch(t), s = r.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
          else {
            const l = await r.arrayBuffer();
            n = await WebAssembly.instantiate(l, e);
          }
        }
        return n.instance.exports;
      };
      let f;
      function bs(e) {
        f = e;
      }
      let T = 0, mt = null;
      function Et() {
        return (mt === null || mt.byteLength === 0) && (mt = new Uint8Array(f.memory.buffer)), mt;
      }
      const gs = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder, St = new gs("utf-8"), ws = typeof St.encodeInto == "function" ? function(e, t) {
        return St.encodeInto(e, t);
      } : function(e, t) {
        const n = St.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function O(e, t, n) {
        if (n === void 0) {
          const o = St.encode(e), a = t(o.length, 1) >>> 0;
          return Et().subarray(a, a + o.length).set(o), T = o.length, a;
        }
        let r = e.length, s = t(r, 1) >>> 0;
        const l = Et();
        let i = 0;
        for (; i < r; i++) {
          const o = e.charCodeAt(i);
          if (o > 127) break;
          l[s + i] = o;
        }
        if (i !== r) {
          i !== 0 && (e = e.slice(i)), s = n(s, r, r = i + e.length * 3, 1) >>> 0;
          const o = Et().subarray(s + i, s + r), a = ws(e, o);
          i += a.written, s = n(s, r, i, 1) >>> 0;
        }
        return T = i, s;
      }
      function le(e, t) {
        return e = e >>> 0, Et().subarray(e / 1, e / 1 + t);
      }
      function ys(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u8_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function ms(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u16_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function xs(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u32_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Es(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u64_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Ss(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i8_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function ks(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i16_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Ts(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i32_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function As(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i64_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Cs(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_f16_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Ns(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_bf16_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Rs(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_f32_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Os(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_f64_bytes(t, n);
        var s = le(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), s;
      }
      function Fs(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_u8_value(t, n);
      }
      function Ps(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_u16_value(t, n);
      }
      function Ms(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_u32_value(t, n) >>> 0;
      }
      function Is(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u64_value(t, n);
        return BigInt.asUintN(64, r);
      }
      function Ls(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i8_value(t, n);
      }
      function Ds(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i16_value(t, n);
      }
      function qs(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i32_value(t, n);
      }
      function Us(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i64_value(t, n);
      }
      function js(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_f32_value(t, n);
      }
      function Bs(e) {
        const t = O(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_f64_value(t, n);
      }
      function Vs() {
        const e = f.__wbindgen_export_0, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      URL = globalThis.URL;
      const S = await ps({
        "./repr_viewer_wasm_bg.js": {
          __wbindgen_init_externref_table: Vs
        }
      }, hs), Ws = S.memory, Ys = S.to_u8_bytes, $s = S.to_u16_bytes, Hs = S.to_u32_bytes, Ks = S.to_u64_bytes, Gs = S.to_i8_bytes, Xs = S.to_i16_bytes, zs = S.to_i32_bytes, Zs = S.to_i64_bytes, Js = S.to_f16_bytes, Qs = S.to_bf16_bytes, el = S.to_f32_bytes, tl = S.to_f64_bytes, nl = S.to_u8_value, rl = S.to_u16_value, sl = S.to_u32_value, ll = S.to_u64_value, il = S.to_i8_value, al = S.to_i16_value, ol = S.to_i32_value, ul = S.to_i64_value, fl = S.to_f32_value, _l = S.to_f64_value, cl = S.__wbindgen_export_0, vl = S.__wbindgen_malloc, dl = S.__wbindgen_realloc, hl = S.__wbindgen_free, zn = S.__wbindgen_start, pl = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbindgen_export_0: cl,
        __wbindgen_free: hl,
        __wbindgen_malloc: vl,
        __wbindgen_realloc: dl,
        __wbindgen_start: zn,
        memory: Ws,
        to_bf16_bytes: Qs,
        to_f16_bytes: Js,
        to_f32_bytes: el,
        to_f32_value: fl,
        to_f64_bytes: tl,
        to_f64_value: _l,
        to_i16_bytes: Xs,
        to_i16_value: al,
        to_i32_bytes: zs,
        to_i32_value: ol,
        to_i64_bytes: Zs,
        to_i64_value: ul,
        to_i8_bytes: Gs,
        to_i8_value: il,
        to_u16_bytes: $s,
        to_u16_value: rl,
        to_u32_bytes: Hs,
        to_u32_value: sl,
        to_u64_bytes: Ks,
        to_u64_value: ll,
        to_u8_bytes: Ys,
        to_u8_value: nl
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      bs(pl);
      zn();
      const bl = (e, t) => {
        switch (t) {
          case "u8":
            return ys(e);
          case "u16":
            return ms(e);
          case "u32":
            return xs(e);
          case "u64":
            return Es(e);
          case "i8":
            return Ss(e);
          case "i16":
            return ks(e);
          case "i32":
            return Ts(e);
          case "i64":
            return As(e);
          case "f16":
            return Cs(e);
          case "bf16":
            return Ns(e);
          case "f32":
            return Rs(e);
          case "f64":
            return Os(e);
        }
      }, gl = (e, t) => {
        switch (t) {
          case "u8":
            return Fs(e).toString();
          case "u16":
            return Ps(e).toString();
          case "u32":
            return Ms(e).toString();
          case "u64":
            return Is(e).toString();
          case "i8":
            return Ls(e).toString();
          case "i16":
            return Ds(e).toString();
          case "i32":
            return qs(e).toString();
          case "i64":
            return Us(e).toString();
          case "f16":
            return "\u672A\u5BFE\u5FDC";
          case "bf16":
            return "\u672A\u5BFE\u5FDC";
          case "f32":
            return js(e).toString();
          case "f64":
            return Bs(e).toString();
        }
      }, wl = (e) => {
        if (e.length === 0) return null;
        const t = [];
        for (let n of e) for (let r = 0; r < 8; r++) {
          const s = (n & 1) == 0 ? "0" : "1";
          t.push(s), n >>>= 1;
        }
        return t.reverse().join("");
      }, yl = (e, t) => {
        if (e.length === 0 || t === null) return null;
        const n = [], r = [], s = [], l = t[2], i = l + t[1], o = i + t[0];
        let a = 0;
        for (let u of e) for (let c = 0; c < 8; c++) {
          const p = (u & 1) == 0 ? "0" : "1";
          if (a < l) s.push(p);
          else if (a < i) r.push(p);
          else if (a < o) n.push(p);
          else return null;
          u >>>= 1, a++;
        }
        return [
          n.reverse().join(""),
          r.reverse().join(""),
          s.reverse().join("")
        ];
      };
      var ml = R("<br/>"), xl = R('<span class="text-6xl leading-20">&nbsp;&nbsp;</span>'), El = R('<span class="text-6xl leading-20">&nbsp;</span>'), Sl = R('<!> <span class="text-6xl leading-20"> </span>', 1), kl = R("<br/>"), Tl = R('<span class="text-6xl leading-20">&nbsp;&nbsp;</span>'), Al = R('<span class="text-6xl leading-20">&nbsp;</span>'), Cl = R('<!> <span class="text-6xl leading-20"> </span>', 1), Nl = R("<br/>"), Rl = R('<span class="text-6xl leading-20">&nbsp;&nbsp;</span>'), Ol = R('<span class="text-6xl leading-20">&nbsp;</span>'), Fl = R('<!> <span class="text-6xl leading-20"> </span>', 1), Pl = R('<span class="border-b-6 border-red-600"></span> <span class="border-b-6 border-yellow-600"></span> <span class="border-b-6 border-lime-600"></span>', 1), Ml = R("<br/>"), Il = R('<span class="text-6xl leading-20">&nbsp;&nbsp;</span>'), Ll = R('<span class="text-6xl leading-20">&nbsp;</span>'), Dl = R('<!> <span class="text-6xl leading-20"> </span>', 1), ql = R('<span class="border-b-6 border-blue-600"></span>'), Ul = R('<p class="text-6xl text-right"> </p>'), jl = R('<option class="bg-(--color-black)"> </option>'), Bl = R('<div class="flex flex-col m-2 items-end"><div class="m-1"><label for="converted" class="text-l">\u5909\u63DB\u5F8C\u306E\u6570\u5024</label> <input type="text" id="converted" readonly="" class="w-160 text-xl text-right border-b"/></div> <div class="m-1"><label for="sign" class="text-l">\u7B26\u53F7\u90E8</label> <input type="text" id="sign" readonly="" class="w-160 text-xl text-right border-b border-red-600"/></div> <div class="m-1"><label for="exp" class="text-l">\u6307\u6570\u90E8</label> <input type="text" id="exp" readonly="" class="w-160 text-xl text-right border-b border-yellow-600"/></div> <div class="m-1"><label for="frac" class="text-l">\u4EEE\u6570\u90E8</label> <input type="text" id="frac" readonly="" class="w-160 text-xl text-right border-b border-lime-600"/></div></div>'), Vl = R('<main><div class="flex flex-col items-center"><h1 class="m-4 text-3xl">Number Representation Viewer</h1> <hr class="m-2 w-9/10 border-double border-xs"/> <div class="m-16"><!></div> <div class="m-3"><label for="ty" class="text-l">\u30C7\u30FC\u30BF\u578B</label> <select id="ty" class="m-3 text-2xl text-center border-b-1"></select> <label for="target-number" class="text-l">\u6570\u5024</label> <input type="text" id="target-number" class="m-3 text-3xl text-right border-b-2"/></div> <!></div></main>');
      function Wl(e, t) {
        gn(t, true);
        let n = we("0"), r = we("u8"), s = Ce(() => ds(_(r))), l = Ce(() => bl(_(n), _(r))), i = Ce(() => wl(_(l))), o = Ce(() => yl(_(l), _(s))), a = Ce(() => gl(_(n), _(r))), u = Ce(() => _(o) && _(o)[0]), c = Ce(() => _(o) && _(o)[1]), p = Ce(() => _(o) && _(o)[2]);
        var v = Vl(), h = W(v), d = D(W(h), 4), b = W(d);
        {
          var x = (F) => {
            var P = xe(), A = K(P);
            {
              var Te = (Q) => {
                var de = Pl(), Ae = K(de);
                at(Ae, 21, () => [
                  ...Array(_(s)[0]).keys()
                ], it, (j, M) => {
                  var he = Sl(), pe = K(he);
                  {
                    var Ie = (C) => {
                      var B = ml();
                      y(C, B);
                    }, ee = (C) => {
                      var B = xe(), te = K(B);
                      {
                        var ge = (N) => {
                          var L = xl();
                          y(N, L);
                        }, De = (N) => {
                          var L = xe(), qe = K(L);
                          {
                            var st = (oe) => {
                              var lt = El();
                              y(oe, lt);
                            };
                            Y(qe, (oe) => {
                              _(M) !== 0 && _(M) % 4 === 0 && oe(st);
                            }, true);
                          }
                          y(N, L);
                        };
                        Y(te, (N) => {
                          _(M) !== 0 && _(M) % 8 === 0 ? N(ge) : N(De, false);
                        }, true);
                      }
                      y(C, B);
                    };
                    Y(pe, (C) => {
                      _(M) !== 0 && _(M) % 32 === 0 ? C(Ie) : C(ee, false);
                    });
                  }
                  var be = D(pe, 2), Le = W(be);
                  He(() => Ke(Le, _(i)[_(M)])), y(j, he);
                });
                var H = D(Ae, 2);
                at(H, 21, () => [
                  ...Array(_(s)[1]).keys()
                ], it, (j, M) => {
                  var he = Cl(), pe = K(he);
                  {
                    var Ie = (C) => {
                      var B = kl();
                      y(C, B);
                    }, ee = (C) => {
                      var B = xe(), te = K(B);
                      {
                        var ge = (N) => {
                          var L = Tl();
                          y(N, L);
                        }, De = (N) => {
                          var L = xe(), qe = K(L);
                          {
                            var st = (oe) => {
                              var lt = Al();
                              y(oe, lt);
                            };
                            Y(qe, (oe) => {
                              (_(M) + _(s)[0]) % 4 === 0 && oe(st);
                            }, true);
                          }
                          y(N, L);
                        };
                        Y(te, (N) => {
                          (_(M) + _(s)[0]) % 8 === 0 ? N(ge) : N(De, false);
                        }, true);
                      }
                      y(C, B);
                    };
                    Y(pe, (C) => {
                      (_(M) + _(s)[0]) % 32 === 0 ? C(Ie) : C(ee, false);
                    });
                  }
                  var be = D(pe, 2), Le = W(be);
                  He(() => Ke(Le, _(i)[_(M) + _(s)[0]])), y(j, he);
                });
                var $e = D(H, 2);
                at($e, 21, () => [
                  ...Array(_(s)[2]).keys()
                ], it, (j, M) => {
                  var he = Fl(), pe = K(he);
                  {
                    var Ie = (C) => {
                      var B = Nl();
                      y(C, B);
                    }, ee = (C) => {
                      var B = xe(), te = K(B);
                      {
                        var ge = (N) => {
                          var L = Rl();
                          y(N, L);
                        }, De = (N) => {
                          var L = xe(), qe = K(L);
                          {
                            var st = (oe) => {
                              var lt = Ol();
                              y(oe, lt);
                            };
                            Y(qe, (oe) => {
                              (_(M) + _(s)[0] + _(s)[1]) % 4 === 0 && oe(st);
                            }, true);
                          }
                          y(N, L);
                        };
                        Y(te, (N) => {
                          (_(M) + _(s)[0] + _(s)[1]) % 8 === 0 ? N(ge) : N(De, false);
                        }, true);
                      }
                      y(C, B);
                    };
                    Y(pe, (C) => {
                      (_(M) + _(s)[0] + _(s)[1]) % 32 === 0 ? C(Ie) : C(ee, false);
                    });
                  }
                  var be = D(pe, 2), Le = W(be);
                  He(() => Ke(Le, _(i)[_(M) + _(s)[0] + _(s)[1]])), y(j, he);
                }), y(Q, de);
              }, ae = (Q) => {
                var de = ql();
                at(de, 21, () => [
                  ...Array(_(i).length).keys()
                ], it, (Ae, H) => {
                  var $e = Dl(), j = K($e);
                  {
                    var M = (ee) => {
                      var be = Ml();
                      y(ee, be);
                    }, he = (ee) => {
                      var be = xe(), Le = K(be);
                      {
                        var C = (te) => {
                          var ge = Il();
                          y(te, ge);
                        }, B = (te) => {
                          var ge = xe(), De = K(ge);
                          {
                            var N = (L) => {
                              var qe = Ll();
                              y(L, qe);
                            };
                            Y(De, (L) => {
                              _(H) !== 0 && _(H) % 4 === 0 && L(N);
                            }, true);
                          }
                          y(te, ge);
                        };
                        Y(Le, (te) => {
                          _(H) !== 0 && _(H) % 8 === 0 ? te(C) : te(B, false);
                        }, true);
                      }
                      y(ee, be);
                    };
                    Y(j, (ee) => {
                      _(H) !== 0 && _(H) % 32 === 0 ? ee(M) : ee(he, false);
                    });
                  }
                  var pe = D(j, 2), Ie = W(pe);
                  He(() => Ke(Ie, _(i)[_(H)])), y(Ae, $e);
                }), y(Q, de);
              };
              Y(A, (Q) => {
                _(s) !== null ? Q(Te) : Q(ae, false);
              });
            }
            y(F, P);
          }, I = (F) => {
            var P = Ul(), A = W(P);
            He(() => Ke(A, _(i) ?? "\u5909\u63DB\u3067\u304D\u307E\u305B\u3093")), y(F, P);
          };
          Y(b, (F) => {
            _(i) !== null ? F(x) : F(I, false);
          });
        }
        var w = D(d, 2), E = D(W(w), 2);
        at(E, 21, () => cs, it, (F, P) => {
          var A = jl(), Te = W(A), ae = {};
          He(() => {
            Ke(Te, _(P)), ae !== (ae = _(P)) && (A.value = (A.__value = _(P)) ?? "");
          }), y(F, A);
        });
        var q = D(E, 4), ie = D(w, 2);
        {
          var Me = (F) => {
            var P = Bl(), A = W(P), Te = D(W(A), 2), ae = D(A, 2), Q = D(W(ae), 2), de = D(ae, 2), Ae = D(W(de), 2), H = D(de, 2), $e = D(W(H), 2);
            ot(Te, () => _(a), (j) => Z(a, j)), ot(Q, () => _(u), (j) => Z(u, j)), ot(Ae, () => _(c), (j) => Z(c, j)), ot($e, () => _(p), (j) => Z(p, j)), y(F, P);
          };
          Y(ie, (F) => {
            vs(_(r)) && F(Me);
          });
        }
        fs(E, () => _(r), (F) => Z(r, F)), ot(q, () => _(n), (F) => Z(n, F)), y(e, v), wn();
      }
      ss(Wl, {
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
