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
      var _s2, _t2, _c, _i, _f, _l2, _n2, _e2, _r2, _a, __, _u, _Ee_instances, v_fn, o_fn, d_fn, _s3, _t3, _c2, _i2, _f2, _l3, _n3, _e3, _r3, _a2, __2, _u2, _v, _o, _d, _x, _Nr_instances, m_fn, b_fn, h_fn, p_fn, g_fn, _a3;
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
        new MutationObserver((l) => {
          for (const s of l) if (s.type === "childList") for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(l) {
          const s = {};
          return l.integrity && (s.integrity = l.integrity), l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? s.credentials = "include" : l.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function r(l) {
          if (l.ep) return;
          l.ep = true;
          const s = n(l);
          fetch(l.href, s);
        }
      })();
      const vn = false;
      var Nt = Array.isArray, Zn = Array.prototype.indexOf, Vt = Array.from, Dt = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Jn = Object.prototype, Qn = Array.prototype, er = Object.getPrototypeOf, tn = Object.isExtensible;
      function dn(e) {
        for (var t = 0; t < e.length; t++) e[t]();
      }
      function tr() {
        var e, t, n = new Promise((r, l) => {
          e = r, t = l;
        });
        return {
          promise: n,
          resolve: e,
          reject: t
        };
      }
      const J = 2, Wt = 4, Yt = 8, Qe = 16, Fe = 32, Ye = 64, $t = 128, _e = 256, kt = 512, V = 1024, le = 2048, Pe = 4096, ce = 8192, et = 16384, hn = 32768, Rt = 65536, nn = 1 << 17, nr = 1 << 18, tt = 1 << 19, rr = 1 << 20, qt = 1 << 21, Ht = 1 << 22, je = 1 << 23, _t = Symbol("$state"), Kt = new class extends Error {
        constructor() {
          super(...arguments);
          __publicField(this, "name", "StaleReactionError");
          __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
        }
      }();
      function lr() {
        throw new Error("https://svelte.dev/e/async_derived_orphan");
      }
      function sr() {
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
      let gr = false;
      function pn(e) {
        return e === this.v;
      }
      function xr(e, t) {
        return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
      }
      function gn(e) {
        return !xr(e, this.v);
      }
      let mr = false, ve = null;
      function ze(e) {
        ve = e;
      }
      function xn(e, t = false, n) {
        ve = {
          p: ve,
          c: null,
          e: null,
          s: e,
          x: null,
          l: null
        };
      }
      function mn(e) {
        var t = ve, n = t.e;
        if (n !== null) {
          t.e = null;
          for (var r of n) Yr(r);
        }
        return ve = t.p, {};
      }
      function bn() {
        return true;
      }
      let Ne = [], Tt = [];
      function wn() {
        var e = Ne;
        Ne = [], dn(e);
      }
      function br() {
        var e = Tt;
        Tt = [], dn(e);
      }
      function wr() {
        return Ne.length > 0 || Tt.length > 0;
      }
      function Gt(e) {
        if (Ne.length === 0 && !ct) {
          var t = Ne;
          queueMicrotask(() => {
            t === Ne && wn();
          });
        }
        Ne.push(e);
      }
      function yr() {
        Ne.length > 0 && wn(), Tt.length > 0 && br();
      }
      const Er = /* @__PURE__ */ new WeakMap();
      function yn(e) {
        var t = w;
        if (t === null) return x.f |= je, e;
        if ((t.f & hn) === 0) {
          if ((t.f & $t) === 0) throw !t.parent && e instanceof Error && En(e), e;
          t.b.error(e);
        } else Ze(e, t);
      }
      function Ze(e, t) {
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
      let k = null, yt = null, Ut = /* @__PURE__ */ new Set(), Ve = [], Ot = null, jt = false, ct = false;
      const _Ee = class _Ee {
        constructor() {
          __privateAdd(this, _Ee_instances);
          __publicField(this, "current", /* @__PURE__ */ new Map());
          __privateAdd(this, _s2, /* @__PURE__ */ new Map());
          __privateAdd(this, _t2, /* @__PURE__ */ new Set());
          __privateAdd(this, _c, 0);
          __privateAdd(this, _i, null);
          __privateAdd(this, _f, false);
          __privateAdd(this, _l2, []);
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
          Ve = [], yt = null;
          for (const l of t) __privateMethod(this, _Ee_instances, v_fn).call(this, l);
          if (__privateGet(this, _l2).length === 0 && __privateGet(this, _c) === 0) {
            __privateMethod(this, _Ee_instances, d_fn).call(this);
            var n = __privateGet(this, _e2), r = __privateGet(this, _r2);
            __privateSet(this, _e2, []), __privateSet(this, _r2, []), __privateSet(this, _a, []), yt = k, k = null, rn(n), rn(r), k === null ? k = this : Pt.delete(this), (_a4 = __privateGet(this, _i)) == null ? void 0 : _a4.resolve();
          } else __privateMethod(this, _Ee_instances, o_fn).call(this, __privateGet(this, _e2)), __privateMethod(this, _Ee_instances, o_fn).call(this, __privateGet(this, _r2)), __privateMethod(this, _Ee_instances, o_fn).call(this, __privateGet(this, _a));
          for (const l of __privateGet(this, _l2)) Xe(l);
          for (const l of __privateGet(this, _n2)) Xe(l);
          __privateSet(this, _l2, []), __privateSet(this, _n2, []);
        }
        capture(t, n) {
          __privateGet(this, _s2).has(t) || __privateGet(this, _s2).set(t, n), this.current.set(t, t.v);
        }
        activate() {
          k = this;
        }
        deactivate() {
          k = null, yt = null;
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
            for (const t of __privateGet(this, __)) X(t, le), Je(t);
            for (const t of __privateGet(this, _u)) X(t, Pe), Je(t);
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
      _s2 = new WeakMap();
      _t2 = new WeakMap();
      _c = new WeakMap();
      _i = new WeakMap();
      _f = new WeakMap();
      _l2 = new WeakMap();
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
          var r = n.f, l = (r & (Fe | Ye)) !== 0, s = l && (r & V) !== 0, i = s || (r & ce) !== 0 || this.skipped_effects.has(n);
          if (!i && n.fn !== null) {
            if (l) n.f ^= V;
            else if ((r & Wt) !== 0) __privateGet(this, _r2).push(n);
            else if ((r & V) === 0) if ((r & Ht) !== 0) {
              var o = ((_a4 = n.b) == null ? void 0 : _a4.is_pending()) ? __privateGet(this, _n2) : __privateGet(this, _l2);
              o.push(n);
            } else Ft(n) && ((n.f & Qe) !== 0 && __privateGet(this, _a).push(n), Xe(n));
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
        for (const n of t) ((n.f & le) !== 0 ? __privateGet(this, __) : __privateGet(this, _u)).push(n), X(n, V);
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
            if (yr(), Ve.length === 0 && !wr() && (k == null ? void 0 : k.flush(), Ve.length === 0)) return Ot = null, n;
            Sn();
          }
        } finally {
          ct = t;
        }
      }
      function Sn() {
        var e = Ge;
        jt = true;
        try {
          var t = 0;
          for (on(true); Ve.length > 0; ) {
            var n = Ee.ensure();
            if (t++ > 1e3) {
              var r, l;
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
          sr();
        } catch (e) {
          Ze(e, Ot);
        }
      }
      let Ue = null;
      function rn(e) {
        var t = e.length;
        if (t !== 0) {
          for (var n = 0; n < t; ) {
            var r = e[n++];
            if ((r.f & (et | ce)) === 0 && Ft(r) && (Ue = [], Xe(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Dn(r) : r.fn = null), (Ue == null ? void 0 : Ue.length) > 0)) {
              Oe.clear();
              for (const l of Ue) Xe(l);
              Ue = [];
            }
          }
          Ue = null;
        }
      }
      function Je(e) {
        for (var t = Ot = e; t.parent !== null; ) {
          t = t.parent;
          var n = t.f;
          if (jt && t === w && (n & Qe) !== 0) return;
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
      var Ar = Rt | tt | $t;
      function Cr(e, t, n) {
        new Nr(e, t, n);
      }
      class Nr {
        constructor(t, n, r) {
          __privateAdd(this, _Nr_instances);
          __publicField(this, "parent");
          __privateAdd(this, _s3, false);
          __privateAdd(this, _t3);
          __privateAdd(this, _c2, null);
          __privateAdd(this, _i2);
          __privateAdd(this, _f2);
          __privateAdd(this, _l3);
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
          __privateAdd(this, _x, Tr(() => (__privateSet(this, _o, We(__privateGet(this, __2))), () => {
            __privateSet(this, _o, null);
          })));
          __privateSet(this, _t3, t), __privateSet(this, _i2, n), __privateSet(this, _f2, r), this.parent = w.b, __privateSet(this, _s3, !!__privateGet(this, _i2).pending), __privateSet(this, _l3, Jt(() => {
            w.b = this;
            {
              try {
                __privateSet(this, _n3, ue(() => r(__privateGet(this, _t3))));
              } catch (l) {
                this.error(l);
              }
              __privateGet(this, _u2) > 0 ? __privateMethod(this, _Nr_instances, p_fn).call(this) : __privateSet(this, _s3, false);
            }
          }, Ar));
        }
        is_pending() {
          return __privateGet(this, _s3) || !!this.parent && this.parent.is_pending();
        }
        has_pending_snippet() {
          return !!__privateGet(this, _i2).pending;
        }
        update_pending_count(t) {
          __privateMethod(this, _Nr_instances, g_fn).call(this, t), __privateSet(this, __2, __privateGet(this, __2) + t), Ut.add(__privateGet(this, _d));
        }
        get_effect_pending() {
          return __privateGet(this, _x).call(this), _(__privateGet(this, _o));
        }
        error(t) {
          var n = __privateGet(this, _i2).onerror;
          let r = __privateGet(this, _i2).failed;
          if (__privateGet(this, _v) || !n && !r) throw t;
          __privateGet(this, _n3) && (re(__privateGet(this, _n3)), __privateSet(this, _n3, null)), __privateGet(this, _e3) && (re(__privateGet(this, _e3)), __privateSet(this, _e3, null)), __privateGet(this, _r3) && (re(__privateGet(this, _r3)), __privateSet(this, _r3, null));
          var l = false, s = false;
          const i = () => {
            if (l) {
              pr();
              return;
            }
            l = true, s && ur(), Ee.ensure(), __privateSet(this, __2, 0), __privateGet(this, _r3) !== null && Ke(__privateGet(this, _r3), () => {
              __privateSet(this, _r3, null);
            }), __privateSet(this, _s3, this.has_pending_snippet()), __privateSet(this, _n3, __privateMethod(this, _Nr_instances, h_fn).call(this, () => (__privateSet(this, _v, false), ue(() => __privateGet(this, _f2).call(this, __privateGet(this, _t3)))))), __privateGet(this, _u2) > 0 ? __privateMethod(this, _Nr_instances, p_fn).call(this) : __privateSet(this, _s3, false);
          };
          var o = x;
          try {
            G(null), s = true, n == null ? void 0 : n(t, i), s = false;
          } catch (a) {
            Ze(a, __privateGet(this, _l3) && __privateGet(this, _l3).parent);
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
                return Ze(a, __privateGet(this, _l3).parent), null;
              } finally {
                __privateSet(this, _v, false);
              }
            }));
          });
        }
      }
      _s3 = new WeakMap();
      _t3 = new WeakMap();
      _c2 = new WeakMap();
      _i2 = new WeakMap();
      _f2 = new WeakMap();
      _l3 = new WeakMap();
      _n3 = new WeakMap();
      _e3 = new WeakMap();
      _r3 = new WeakMap();
      _a2 = new WeakMap();
      __2 = new WeakMap();
      _u2 = new WeakMap();
      _v = new WeakMap();
      _o = new WeakMap();
      _d = new WeakMap();
      _x = new WeakMap();
      _Nr_instances = new WeakSet();
      m_fn = function() {
        try {
          __privateSet(this, _n3, ue(() => __privateGet(this, _f2).call(this, __privateGet(this, _t3))));
        } catch (t) {
          this.error(t);
        }
        __privateSet(this, _s3, false);
      };
      b_fn = function() {
        const t = __privateGet(this, _i2).pending;
        t && (__privateSet(this, _e3, ue(() => t(__privateGet(this, _t3)))), Ee.enqueue(() => {
          __privateSet(this, _n3, __privateMethod(this, _Nr_instances, h_fn).call(this, () => (Ee.ensure(), ue(() => __privateGet(this, _f2).call(this, __privateGet(this, _t3)))))), __privateGet(this, _u2) > 0 ? __privateMethod(this, _Nr_instances, p_fn).call(this) : (Ke(__privateGet(this, _e3), () => {
            __privateSet(this, _e3, null);
          }), __privateSet(this, _s3, false));
        }));
      };
      h_fn = function(t) {
        var n = w, r = x, l = ve;
        we(__privateGet(this, _l3)), G(__privateGet(this, _l3)), ze(__privateGet(this, _l3).ctx);
        try {
          return t();
        } catch (s) {
          return yn(s), null;
        } finally {
          we(n), G(r), ze(l);
        }
      };
      p_fn = function() {
        const t = __privateGet(this, _i2).pending;
        __privateGet(this, _n3) !== null && (__privateSet(this, _a2, document.createDocumentFragment()), Rr(__privateGet(this, _n3), __privateGet(this, _a2))), __privateGet(this, _e3) === null && __privateSet(this, _e3, ue(() => t(__privateGet(this, _t3))));
      };
      g_fn = function(t) {
        var _a4;
        if (!this.has_pending_snippet()) {
          this.parent && __privateMethod(_a4 = this.parent, _Nr_instances, g_fn).call(_a4, t);
          return;
        }
        __privateSet(this, _u2, __privateGet(this, _u2) + t), __privateGet(this, _u2) === 0 && (__privateSet(this, _s3, false), __privateGet(this, _e3) && Ke(__privateGet(this, _e3), () => {
          __privateSet(this, _e3, null);
        }), __privateGet(this, _a2) && (__privateGet(this, _t3).before(__privateGet(this, _a2)), __privateSet(this, _a2, null)));
      };
      function Rr(e, t) {
        for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
          var l = n === r ? null : xt(n);
          t.append(n), n = l;
        }
      }
      function Or(e, t, n) {
        const r = Xt;
        if (t.length === 0) {
          n(e.map(r));
          return;
        }
        var l = k, s = w, i = Fr();
        Promise.all(t.map((o) => Pr(o))).then((o) => {
          l == null ? void 0 : l.activate(), i();
          try {
            n([
              ...e.map(r),
              ...o
            ]);
          } catch (a) {
            (s.f & et) === 0 && Ze(a, s);
          }
          l == null ? void 0 : l.deactivate(), kn();
        }).catch((o) => {
          Ze(o, s);
        });
      }
      function Fr() {
        var e = w, t = x, n = ve, r = k;
        return function() {
          we(e), G(t), ze(n), r == null ? void 0 : r.activate();
        };
      }
      function kn() {
        we(null), G(null), ze(null);
      }
      function Xt(e) {
        var t = J | le, n = x !== null && (x.f & J) !== 0 ? x : null;
        return w === null || n !== null && (n.f & _e) !== 0 ? t |= _e : w.f |= tt, {
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
          parent: n ?? w,
          ac: null
        };
      }
      function Pr(e, t) {
        let n = w;
        n === null && lr();
        var r = n.b, l = void 0, s = We(U), i = null, o = !x;
        return Kr(() => {
          try {
            var a = e();
            i && Promise.resolve(a).catch(() => {
            });
          } catch (h) {
            a = Promise.reject(h);
          }
          var u = () => a;
          l = (i == null ? void 0 : i.then(u, u)) ?? Promise.resolve(a), i = l;
          var c = k, p = r.is_pending();
          o && (r.update_pending_count(1), p || c.increment());
          const v = (h, d = void 0) => {
            i = null, p || c.activate(), d ? d !== Kt && (s.f |= je, ht(s, d)) : ((s.f & je) !== 0 && (s.f ^= je), ht(s, h)), o && (r.update_pending_count(-1), p || c.decrement()), kn();
          };
          if (l.then(v, (h) => v(null, h || "unknown")), c) return () => {
            queueMicrotask(() => c.neuter());
          };
        }), new Promise((a) => {
          function u(c) {
            function p() {
              c === l ? a(s) : u(l);
            }
            c.then(p, p);
          }
          u(l);
        });
      }
      function Ce(e) {
        const t = Xt(e);
        return jn(t), t;
      }
      function Mr(e) {
        const t = Xt(e);
        return t.equals = gn, t;
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
        var t, n = w;
        we(Ir(e));
        try {
          Tn(e), t = Yn(e);
        } finally {
          we(n);
        }
        return t;
      }
      function An(e) {
        var t = zt(e);
        if (e.equals(t) || (e.v = t, e.wv = Vn()), !mt) {
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
      function me(e, t) {
        const n = We(e);
        return jn(n), n;
      }
      function Lr(e, t = false, n = true) {
        const r = We(e);
        return t || (r.equals = gn), r;
      }
      function Z(e, t, n = false) {
        x !== null && (!fe || (x.f & nn) !== 0) && bn() && (x.f & (J | Qe | Ht | nn)) !== 0 && !(Se == null ? void 0 : Se.includes(e)) && or();
        let r = n ? ut(t) : t;
        return ht(e, r);
      }
      function ht(e, t) {
        if (!e.equals(t)) {
          var n = e.v;
          mt ? Oe.set(e, t) : Oe.set(e, n), e.v = t;
          var r = Ee.ensure();
          r.capture(e, n), (e.f & J) !== 0 && ((e.f & le) !== 0 && zt(e), X(e, (e.f & _e) === 0 ? V : Pe)), e.wv = Vn(), Cn(e, le), w !== null && (w.f & V) !== 0 && (w.f & (Fe | Ye)) === 0 && (ne === null ? zr([
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
        if (n !== null) for (var r = n.length, l = 0; l < r; l++) {
          var s = n[l], i = s.f, o = (i & le) === 0;
          o && X(s, t), (i & J) !== 0 ? Cn(s, Pe) : o && ((i & Qe) !== 0 && Ue !== null && Ue.push(s), Je(s));
        }
      }
      function ut(e) {
        if (typeof e != "object" || e === null || _t in e) return e;
        const t = er(e);
        if (t !== Jn && t !== Qn) return e;
        var n = /* @__PURE__ */ new Map(), r = Nt(e), l = me(0), s = Be, i = (o) => {
          if (Be === s) return o();
          var a = x, u = Be;
          G(null), fn(s);
          var c = o();
          return G(a), fn(u), c;
        };
        return r && n.set("length", me(e.length)), new Proxy(e, {
          defineProperty(o, a, u) {
            (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && ir();
            var c = n.get(a);
            return c === void 0 ? c = i(() => {
              var p = me(u.value);
              return n.set(a, p), p;
            }) : Z(c, u.value, true), true;
          },
          deleteProperty(o, a) {
            var u = n.get(a);
            if (u === void 0) {
              if (a in o) {
                const c = i(() => me(U));
                n.set(a, c), vt(l);
              }
            } else Z(u, U), vt(l);
            return true;
          },
          get(o, a, u) {
            var _a4;
            if (a === _t) return e;
            var c = n.get(a), p = a in o;
            if (c === void 0 && (!p || ((_a4 = ft(o, a)) == null ? void 0 : _a4.writable)) && (c = i(() => {
              var h = ut(p ? o[a] : U), d = me(h);
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
            if (u !== void 0 || w !== null && (!c || ((_a4 = ft(o, a)) == null ? void 0 : _a4.writable))) {
              u === void 0 && (u = i(() => {
                var v = c ? ut(o[a]) : U, h = me(v);
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
              d !== void 0 ? Z(d, U) : h in o && (d = i(() => me(U)), n.set(h + "", d));
            }
            if (p === void 0) (!v || ((_a4 = ft(o, a)) == null ? void 0 : _a4.writable)) && (p = i(() => me(void 0)), Z(p, ut(u)), n.set(a, p));
            else {
              v = p.v !== U;
              var g = i(() => ut(u));
              Z(p, g);
            }
            var y = Reflect.getOwnPropertyDescriptor(o, a);
            if ((y == null ? void 0 : y.set) && y.set.call(c, u), !v) {
              if (r && typeof a == "string") {
                var M = n.get("length"), m = Number(a);
                Number.isInteger(m) && m >= M.v && Z(M, m + 1);
              }
              vt(l);
            }
            return true;
          },
          ownKeys(o) {
            _(l);
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
      function ln(e) {
        try {
          if (e !== null && typeof e == "object" && _t in e) return e[_t];
        } catch {
        }
        return e;
      }
      function Dr(e, t) {
        return Object.is(ln(e), ln(t));
      }
      var sn, Nn, Rn, On;
      function qr() {
        if (sn === void 0) {
          sn = window, Nn = /Firefox/.test(navigator.userAgent);
          var e = Element.prototype, t = Node.prototype, n = Text.prototype;
          Rn = ft(t, "firstChild").get, On = ft(t, "nextSibling").get, tn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), tn(n) && (n.__t = void 0);
        }
      }
      function gt(e = "") {
        return document.createTextNode(e);
      }
      function At(e) {
        return Rn.call(e);
      }
      function xt(e) {
        return On.call(e);
      }
      function H(e, t) {
        return At(e);
      }
      function K(e, t = false) {
        {
          var n = At(e);
          return n instanceof Comment && n.data === "" ? xt(n) : n;
        }
      }
      function D(e, t = 1, n = false) {
        let r = e;
        for (; t--; ) r = xt(r);
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
        var t = x, n = w;
        G(null), we(null);
        try {
          return e();
        } finally {
          G(t), we(n);
        }
      }
      function Pn(e, t, n, r = n) {
        e.addEventListener(t, () => Zt(n));
        const l = e.__on_r;
        l ? e.__on_r = () => {
          l(), r(true);
        } : e.__on_r = () => r(true), jr();
      }
      function Br(e, t) {
        var n = t.last;
        n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
      }
      function ke(e, t, n, r = true) {
        var l = w;
        l !== null && (l.f & ce) !== 0 && (e |= ce);
        var s = {
          ctx: ve,
          deps: null,
          nodes_start: null,
          nodes_end: null,
          f: e | le,
          first: null,
          fn: t,
          last: null,
          next: null,
          parent: l,
          b: l && l.b,
          prev: null,
          teardown: null,
          transitions: null,
          wv: 0,
          ac: null
        };
        if (n) try {
          Xe(s), s.f |= hn;
        } catch (a) {
          throw re(s), a;
        }
        else t !== null && Je(s);
        if (r) {
          var i = s;
          if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && (i.f & tt) === 0 && (i = i.first), i !== null && (i.parent = l, l !== null && Br(i, l), x !== null && (x.f & J) !== 0 && (e & Ye) === 0)) {
            var o = x;
            (o.effects ?? (o.effects = [])).push(i);
          }
        }
        return s;
      }
      function Vr() {
        return x !== null && !fe;
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
        const t = ke(Ye | tt, e, true);
        return (n = {}) => new Promise((r) => {
          n.outro ? Ke(t, () => {
            re(t), r(void 0);
          }) : (re(t), r(void 0));
        });
      }
      function Hr(e) {
        return ke(Wt, e, false);
      }
      function Kr(e) {
        return ke(Ht | tt, e, true);
      }
      function Mn(e, t = 0) {
        return ke(Yt | t, e, true);
      }
      function lt(e, t = [], n = []) {
        Or(t, n, (r) => {
          ke(Yt, () => e(...r.map(_)), true);
        });
      }
      function Jt(e, t = 0) {
        var n = ke(Qe | t, e, true);
        return n;
      }
      function ue(e, t = true) {
        return ke(Fe | tt, e, true, t);
      }
      function In(e) {
        var t = e.teardown;
        if (t !== null) {
          const n = mt, r = x;
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
          const l = n.ac;
          l !== null && Zt(() => {
            l.abort(Kt);
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
        (t || (e.f & nr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Xr(e.nodes_start, e.nodes_end), n = true), Ln(e, t && !n), Ct(e, 0), X(e, et);
        var r = e.transitions;
        if (r !== null) for (const s of r) s.stop();
        In(e);
        var l = e.parent;
        l !== null && l.first !== null && Dn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
      }
      function Xr(e, t) {
        for (; e !== null; ) {
          var n = e === t ? null : xt(e);
          e.remove(), e = n;
        }
      }
      function Dn(e) {
        var t = e.parent, n = e.prev, r = e.next;
        n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
      }
      function Ke(e, t) {
        var n = [];
        Qt(e, n, true), qn(n, () => {
          re(e), t && t();
        });
      }
      function qn(e, t) {
        var n = e.length;
        if (n > 0) {
          var r = () => --n || t();
          for (var l of e) l.out(r);
        } else t();
      }
      function Qt(e, t, n) {
        if ((e.f & ce) === 0) {
          if (e.f ^= ce, e.transitions !== null) for (const i of e.transitions) (i.is_global || n) && t.push(i);
          for (var r = e.first; r !== null; ) {
            var l = r.next, s = (r.f & Rt) !== 0 || (r.f & Fe) !== 0;
            Qt(r, t, s ? n : false), r = l;
          }
        }
      }
      function en(e) {
        Un(e, true);
      }
      function Un(e, t) {
        if ((e.f & ce) !== 0) {
          e.f ^= ce, (e.f & V) === 0 && (X(e, le), Je(e));
          for (var n = e.first; n !== null; ) {
            var r = n.next, l = (n.f & Rt) !== 0 || (n.f & Fe) !== 0;
            Un(n, l ? t : false), n = r;
          }
          if (e.transitions !== null) for (const s of e.transitions) (s.is_global || t) && s.in();
        }
      }
      let Ge = false;
      function on(e) {
        Ge = e;
      }
      let mt = false;
      function un(e) {
        mt = e;
      }
      let x = null, fe = false;
      function G(e) {
        x = e;
      }
      let w = null;
      function we(e) {
        w = e;
      }
      let Se = null;
      function jn(e) {
        x !== null && (Se === null ? Se = [
          e
        ] : Se.push(e));
      }
      let Y = null, z = 0, ne = null;
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
        if ((t & le) !== 0) return true;
        if ((t & Pe) !== 0) {
          var n = e.deps, r = (t & _e) !== 0;
          if (n !== null) {
            var l, s, i = (t & kt) !== 0, o = r && w !== null && !Re, a = n.length;
            if ((i || o) && (w === null || (w.f & et) === 0)) {
              var u = e, c = u.parent;
              for (l = 0; l < a; l++) s = n[l], (i || !((_a4 = s == null ? void 0 : s.reactions) == null ? void 0 : _a4.includes(u))) && (s.reactions ?? (s.reactions = [])).push(u);
              i && (u.f ^= kt), o && c !== null && (c.f & _e) === 0 && (u.f ^= _e);
            }
            for (l = 0; l < a; l++) if (s = n[l], Ft(s) && An(s), s.wv > e.wv) return true;
          }
          (!r || w !== null && !Re) && X(e, V);
        }
        return false;
      }
      function Wn(e, t, n = true) {
        var r = e.reactions;
        if (r !== null && !(Se == null ? void 0 : Se.includes(e))) for (var l = 0; l < r.length; l++) {
          var s = r[l];
          (s.f & J) !== 0 ? Wn(s, t, false) : t === s && (n ? X(s, le) : (s.f & V) !== 0 && X(s, Pe), Je(s));
        }
      }
      function Yn(e) {
        var _a4;
        var t = Y, n = z, r = ne, l = x, s = Re, i = Se, o = ve, a = fe, u = Be, c = e.f;
        Y = null, z = 0, ne = null, Re = (c & _e) !== 0 && (fe || !Ge || x === null), x = (c & (Fe | Ye)) === 0 ? e : null, Se = null, ze(e.ctx), fe = false, Be = ++pt, e.ac !== null && (Zt(() => {
          e.ac.abort(Kt);
        }), e.ac = null);
        try {
          e.f |= qt;
          var p = e.fn, v = p(), h = e.deps;
          if (Y !== null) {
            var d;
            if (Ct(e, z), h !== null && z > 0) for (h.length = z + Y.length, d = 0; d < Y.length; d++) h[z + d] = Y[d];
            else e.deps = h = Y;
            if (!Re || (c & J) !== 0 && e.reactions !== null) for (d = z; d < h.length; d++) ((_a4 = h[d]).reactions ?? (_a4.reactions = [])).push(e);
          } else h !== null && z < h.length && (Ct(e, z), h.length = z);
          if (bn() && ne !== null && !fe && h !== null && (e.f & (J | Pe | le)) === 0) for (d = 0; d < ne.length; d++) Wn(ne[d], e);
          return l !== null && l !== e && (pt++, ne !== null && (r === null ? r = ne : r.push(...ne))), (e.f & je) !== 0 && (e.f ^= je), v;
        } catch (g) {
          return yn(g);
        } finally {
          e.f ^= qt, Y = t, z = n, ne = r, x = l, Re = s, Se = i, ze(o), fe = a, Be = u;
        }
      }
      function Zr(e, t) {
        let n = t.reactions;
        if (n !== null) {
          var r = Zn.call(n, e);
          if (r !== -1) {
            var l = n.length - 1;
            l === 0 ? n = t.reactions = null : (n[r] = n[l], n.pop());
          }
        }
        n === null && (t.f & J) !== 0 && (Y === null || !Y.includes(t)) && (X(t, Pe), (t.f & (_e | kt)) === 0 && (t.f ^= kt), Tn(t), Ct(t, 0));
      }
      function Ct(e, t) {
        var n = e.deps;
        if (n !== null) for (var r = t; r < n.length; r++) Zr(e, n[r]);
      }
      function Xe(e) {
        var t = e.f;
        if ((t & et) === 0) {
          X(e, V);
          var n = w, r = Ge;
          w = e, Ge = true;
          try {
            (t & Qe) !== 0 ? Gr(e) : Ln(e), In(e);
            var l = Yn(e);
            e.teardown = typeof l == "function" ? l : null, e.wv = Bn;
            var s;
            vn && mr && (e.f & le) !== 0 && e.deps;
          } finally {
            Ge = r, w = n;
          }
        }
      }
      async function Jr() {
        await Promise.resolve(), Sr();
      }
      function _(e) {
        var t = e.f, n = (t & J) !== 0;
        if (x !== null && !fe) {
          var r = w !== null && (w.f & et) !== 0;
          if (!r && !(Se == null ? void 0 : Se.includes(e))) {
            var l = x.deps;
            if ((x.f & qt) !== 0) e.rv < pt && (e.rv = pt, Y === null && l !== null && l[z] === e ? z++ : Y === null ? Y = [
              e
            ] : (!Re || !Y.includes(e)) && Y.push(e));
            else {
              (x.deps ?? (x.deps = [])).push(e);
              var s = e.reactions;
              s === null ? e.reactions = [
                x
              ] : s.includes(x) || s.push(x);
            }
          }
        } else if (n && e.deps === null && e.effects === null) {
          var i = e, o = i.parent;
          o !== null && (o.f & _e) === 0 && (i.f ^= _e);
        }
        if (mt) {
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
      const el = [
        "touchstart",
        "touchmove"
      ];
      function tl(e) {
        return el.includes(e);
      }
      const nl = /* @__PURE__ */ new Set(), _n = /* @__PURE__ */ new Set();
      let cn = null;
      function bt(e) {
        var _a4;
        var t = this, n = t.ownerDocument, r = e.type, l = ((_a4 = e.composedPath) == null ? void 0 : _a4.call(e)) || [], s = l[0] || e.target;
        cn = e;
        var i = 0, o = cn === e && e.__root;
        if (o) {
          var a = l.indexOf(o);
          if (a !== -1 && (t === document || t === window)) {
            e.__root = t;
            return;
          }
          var u = l.indexOf(t);
          if (u === -1) return;
          a <= u && (i = a);
        }
        if (s = l[i] || e.target, s !== t) {
          Dt(e, "currentTarget", {
            configurable: true,
            get() {
              return s || n;
            }
          });
          var c = x, p = w;
          G(null), we(null);
          try {
            for (var v, h = []; s !== null; ) {
              var d = s.assignedSlot || s.parentNode || s.host || null;
              try {
                var g = s["__" + r];
                if (g != null && (!s.disabled || e.target === s)) if (Nt(g)) {
                  var [y, ...M] = g;
                  y.apply(s, [
                    e,
                    ...M
                  ]);
                } else g.call(s, e);
              } catch (m) {
                v ? h.push(m) : v = m;
              }
              if (e.cancelBubble || d === t || d === null) break;
              s = d;
            }
            if (v) {
              for (let m of h) queueMicrotask(() => {
                throw m;
              });
              throw v;
            }
          } finally {
            e.__root = t, delete e.currentTarget, G(c), we(p);
          }
        }
      }
      function rl(e) {
        var t = document.createElement("template");
        return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
      }
      function Bt(e, t) {
        var n = w;
        n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
      }
      function N(e, t) {
        var n = (t & vr) !== 0, r = (t & dr) !== 0, l, s = !e.startsWith("<!>");
        return () => {
          l === void 0 && (l = rl(s ? e : "<!>" + e), n || (l = At(l)));
          var i = r || Nn ? document.importNode(l, true) : l.cloneNode(true);
          if (n) {
            var o = At(i), a = i.lastChild;
            Bt(o, a);
          } else Bt(i, i);
          return i;
        };
      }
      function ye() {
        var e = document.createDocumentFragment(), t = document.createComment(""), n = gt();
        return e.append(t, n), Bt(t, n), e;
      }
      function b(e, t) {
        e !== null && e.before(t);
      }
      function st(e, t) {
        var n = t == null ? "" : typeof t == "object" ? t + "" : t;
        n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
      }
      function ll(e, t) {
        return sl(e, t);
      }
      const He = /* @__PURE__ */ new Map();
      function sl(e, { target: t, anchor: n, props: r = {}, events: l, context: s, intro: i = true }) {
        qr();
        var o = /* @__PURE__ */ new Set(), a = (p) => {
          for (var v = 0; v < p.length; v++) {
            var h = p[v];
            if (!o.has(h)) {
              o.add(h);
              var d = tl(h);
              t.addEventListener(h, bt, {
                passive: d
              });
              var g = He.get(h);
              g === void 0 ? (document.addEventListener(h, bt, {
                passive: d
              }), He.set(h, 1)) : He.set(h, g + 1);
            }
          }
        };
        a(Vt(nl)), _n.add(a);
        var u = void 0, c = $r(() => {
          var p = n ?? t.appendChild(gt());
          return Cr(p, {
            pending: () => {
            }
          }, (v) => {
            if (s) {
              xn({});
              var h = ve;
              h.c = s;
            }
            l && (r.$$events = l), u = e(v, r) || {}, s && mn();
          }), () => {
            var _a4;
            for (var v of o) {
              t.removeEventListener(v, bt);
              var h = He.get(v);
              --h === 0 ? (document.removeEventListener(v, bt), He.delete(v)) : He.set(v, h);
            }
            _n.delete(a), p !== n && ((_a4 = p.parentNode) == null ? void 0 : _a4.removeChild(p));
          };
        });
        return il.set(u, c), u;
      }
      let il = /* @__PURE__ */ new WeakMap();
      function W(e, t, n = false) {
        var r = e, l = null, s = null, i = U, o = n ? Rt : 0, a = false;
        const u = (h, d = true) => {
          a = true, v(d, h);
        };
        var c = null;
        function p() {
          c !== null && (c.lastChild.remove(), r.before(c), c = null);
          var h = i ? l : s, d = i ? s : l;
          h && en(h), d && Ke(d, () => {
            i ? s = null : l = null;
          });
        }
        const v = (h, d) => {
          if (i !== (i = h)) {
            var g = Fn(), y = r;
            if (g && (c = document.createDocumentFragment(), c.append(y = gt())), i ? l ?? (l = d && ue(() => d(y))) : s ?? (s = d && ue(() => d(y))), g) {
              var M = k, m = i ? l : s, E = i ? s : l;
              m && M.skipped_effects.delete(m), E && M.skipped_effects.add(E), M.add_callback(p);
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
      function al(e, t, n) {
        for (var r = e.items, l = [], s = t.length, i = 0; i < s; i++) Qt(t[i].e, l, true);
        var o = s > 0 && l.length === 0 && n !== null;
        if (o) {
          var a = n.parentNode;
          Ur(a), a.append(n), r.clear(), be(e, t[0].prev, t[s - 1].next);
        }
        qn(l, () => {
          for (var u = 0; u < s; u++) {
            var c = t[u];
            o || (r.delete(c.k), be(e, c.prev, c.next)), re(c.e, !o);
          }
        });
      }
      function at(e, t, n, r, l, s = null) {
        var i = e, o = {
          flags: t,
          items: /* @__PURE__ */ new Map(),
          first: null
        };
        {
          var a = e;
          i = a.appendChild(gt());
        }
        var u = null, c = false, p = /* @__PURE__ */ new Map(), v = Mr(() => {
          var y = n();
          return Nt(y) ? y : y == null ? [] : Vt(y);
        }), h, d;
        function g() {
          ol(d, h, o, p, i, l, t, r, n), s !== null && (h.length === 0 ? u ? en(u) : u = ue(() => s(i)) : u !== null && Ke(u, () => {
            u = null;
          }));
        }
        Jt(() => {
          d ?? (d = w), h = _(v);
          var y = h.length;
          if (!(c && y === 0)) {
            c = y === 0;
            var M, m, E, q;
            if (Fn()) {
              var ie = /* @__PURE__ */ new Set(), Me = k;
              for (m = 0; m < y; m += 1) {
                E = h[m], q = r(E, m);
                var O = o.items.get(q) ?? p.get(q);
                O ? Kn(O, E, m) : (M = Gn(null, o, null, null, E, q, m, l, t, n, true), p.set(q, M)), ie.add(q);
              }
              for (const [I, F] of o.items) ie.has(I) || Me.skipped_effects.add(F.e);
              Me.add_callback(g);
            } else g();
            _(v);
          }
        });
      }
      function ol(e, t, n, r, l, s, i, o, a) {
        var u = t.length, c = n.items, p = n.first, v = p, h, d = null, g = [], y = [], M, m, E, q;
        for (q = 0; q < u; q += 1) {
          if (M = t[q], m = o(M, q), E = c.get(m), E === void 0) {
            var ie = r.get(m);
            if (ie !== void 0) {
              r.delete(m), c.set(m, ie);
              var Me = d ? d.next : v;
              be(n, d, ie), be(n, ie, Me), Mt(ie, Me, l), d = ie;
            } else {
              var O = v ? v.e.nodes_start : l;
              d = Gn(O, n, d, d === null ? n.first : d.next, M, m, q, s, i, a);
            }
            c.set(m, d), g = [], y = [], v = d.next;
            continue;
          }
          if (Kn(E, M, q), (E.e.f & ce) !== 0 && en(E.e), E !== v) {
            if (h !== void 0 && h.has(E)) {
              if (g.length < y.length) {
                var I = y[0], F;
                d = I.prev;
                var Te = g[0], ae = g[g.length - 1];
                for (F = 0; F < g.length; F += 1) Mt(g[F], I, l);
                for (F = 0; F < y.length; F += 1) h.delete(y[F]);
                be(n, Te.prev, ae.next), be(n, d, Te), be(n, ae, I), v = I, d = ae, q -= 1, g = [], y = [];
              } else h.delete(E), Mt(E, v, l), be(n, E.prev, E.next), be(n, E, d === null ? n.first : d.next), be(n, d, E), d = E;
              continue;
            }
            for (g = [], y = []; v !== null && v.k !== m; ) (v.e.f & ce) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(v), y.push(v), v = v.next;
            if (v === null) continue;
            E = v;
          }
          g.push(E), d = E, v = E.next;
        }
        if (v !== null || h !== void 0) {
          for (var Q = h === void 0 ? [] : Vt(h); v !== null; ) (v.e.f & ce) === 0 && Q.push(v), v = v.next;
          var de = Q.length;
          if (de > 0) {
            var Ae = u === 0 ? l : null;
            al(n, Q, Ae);
          }
        }
        e.first = n.first && n.first.e, e.last = d && d.e;
        for (var $ of r.values()) re($.e);
        r.clear();
      }
      function Kn(e, t, n, r) {
        ht(e.v, t), e.i = n;
      }
      function Gn(e, t, n, r, l, s, i, o, a, u, c) {
        var p = (a & fr) !== 0, v = (a & cr) === 0, h = p ? v ? Lr(l, false, false) : We(l) : l, d = (a & _r) === 0 ? i : We(i), g = {
          i: d,
          v: h,
          k: s,
          a: null,
          e: null,
          prev: n,
          next: r
        };
        try {
          if (e === null) {
            var y = document.createDocumentFragment();
            y.append(e = gt());
          }
          return g.e = ue(() => o(e, h, d, u), gr), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? c || (t.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
        } finally {
        }
      }
      function Mt(e, t, n) {
        for (var r = e.next ? e.next.e.nodes_start : n, l = t ? t.e.nodes_start : n, s = e.e.nodes_start; s !== null && s !== r; ) {
          var i = xt(s);
          l.before(s), s = i;
        }
      }
      function be(e, t, n) {
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
          var l = dt(r);
          if (Dr(l, t)) {
            r.selected = true;
            return;
          }
        }
        (!n || t !== void 0) && (e.selectedIndex = -1);
      }
      function ul(e) {
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
      function fl(e, t, n = t) {
        var r = true;
        Pn(e, "change", (l) => {
          var s = l ? "[selected]" : ":checked", i;
          if (e.multiple) i = [].map.call(e.querySelectorAll(s), dt);
          else {
            var o = e.querySelector(s) ?? e.querySelector("option:not([disabled])");
            i = o && dt(o);
          }
          n(i);
        }), Hr(() => {
          var l = t();
          if (Xn(e, l, r), r && l === void 0) {
            var s = e.querySelector(":checked");
            s !== null && (l = dt(s), n(l));
          }
          e.__value = l, r = false;
        }), ul(e);
      }
      function dt(e) {
        return "__value" in e ? e.__value : e.value;
      }
      function ot(e, t, n = t) {
        var r = /* @__PURE__ */ new WeakSet();
        Pn(e, "input", async (l) => {
          var s = l ? e.defaultValue : e.value;
          if (s = It(e) ? Lt(s) : s, n(s), k !== null && r.add(k), await Jr(), s !== (s = t())) {
            var i = e.selectionStart, o = e.selectionEnd;
            e.value = s ?? "", o !== null && (e.selectionStart = i, e.selectionEnd = Math.min(o, e.value.length));
          }
        }), Hn(t) == null && e.value && (n(It(e) ? Lt(e.value) : e.value), k !== null && r.add(k)), Mn(() => {
          var l = t();
          if (e === document.activeElement) {
            var s = yt ?? k;
            if (r.has(s)) return;
          }
          It(e) && l === Lt(e.value) || e.type === "date" && !l && !e.value || l !== e.value && (e.value = l ?? "");
        });
      }
      function It(e) {
        var t = e.type;
        return t === "number" || t === "range";
      }
      function Lt(e) {
        return e === "" ? null : +e;
      }
      const _l = "5";
      typeof window < "u" && ((_a3 = window.__svelte ?? (window.__svelte = {})).v ?? (_a3.v = /* @__PURE__ */ new Set())).add(_l);
      const cl = [
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
      ], vl = (e) => {
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
      }, dl = (e) => {
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
      }, hl = "/repr-viewer/assets/repr_viewer_wasm_bg-CXuzF3ya.wasm", pl = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const r = t.replace(/^data:.*?base64,/, "");
          let l;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") l = Buffer.from(r, "base64");
          else if (typeof atob == "function") {
            const s = atob(r);
            l = new Uint8Array(s.length);
            for (let i = 0; i < s.length; i++) l[i] = s.charCodeAt(i);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(l, e);
        } else {
          const r = await fetch(t), l = r.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && l.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
          else {
            const s = await r.arrayBuffer();
            n = await WebAssembly.instantiate(s, e);
          }
        }
        return n.instance.exports;
      };
      let f;
      function gl(e) {
        f = e;
      }
      let T = 0, wt = null;
      function Et() {
        return (wt === null || wt.byteLength === 0) && (wt = new Uint8Array(f.memory.buffer)), wt;
      }
      const xl = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder, St = new xl("utf-8"), ml = typeof St.encodeInto == "function" ? function(e, t) {
        return St.encodeInto(e, t);
      } : function(e, t) {
        const n = St.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function R(e, t, n) {
        if (n === void 0) {
          const o = St.encode(e), a = t(o.length, 1) >>> 0;
          return Et().subarray(a, a + o.length).set(o), T = o.length, a;
        }
        let r = e.length, l = t(r, 1) >>> 0;
        const s = Et();
        let i = 0;
        for (; i < r; i++) {
          const o = e.charCodeAt(i);
          if (o > 127) break;
          s[l + i] = o;
        }
        if (i !== r) {
          i !== 0 && (e = e.slice(i)), l = n(l, r, r = i + e.length * 3, 1) >>> 0;
          const o = Et().subarray(l + i, l + r), a = ml(e, o);
          i += a.written, l = n(l, r, i, 1) >>> 0;
        }
        return T = i, l;
      }
      function se(e, t) {
        return e = e >>> 0, Et().subarray(e / 1, e / 1 + t);
      }
      function bl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u8_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function wl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u16_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function yl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u32_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function El(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u64_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Sl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i8_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function kl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i16_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Tl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i32_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Al(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_i64_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Cl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_f16_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Nl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_bf16_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Rl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_f32_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Ol(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_f64_bytes(t, n);
        var l = se(r[0], r[1]).slice();
        return f.__wbindgen_free(r[0], r[1] * 1, 1), l;
      }
      function Fl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_u8_value(t, n);
      }
      function Pl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_u16_value(t, n);
      }
      function Ml(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_u32_value(t, n) >>> 0;
      }
      function Il(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T, r = f.to_u64_value(t, n);
        return BigInt.asUintN(64, r);
      }
      function Ll(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i8_value(t, n);
      }
      function Dl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i16_value(t, n);
      }
      function ql(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i32_value(t, n);
      }
      function Ul(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_i64_value(t, n);
      }
      function jl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_f32_value(t, n);
      }
      function Bl(e) {
        const t = R(e, f.__wbindgen_malloc, f.__wbindgen_realloc), n = T;
        return f.to_f64_value(t, n);
      }
      function Vl() {
        const e = f.__wbindgen_export_0, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      URL = globalThis.URL;
      const S = await pl({
        "./repr_viewer_wasm_bg.js": {
          __wbindgen_init_externref_table: Vl
        }
      }, hl), Wl = S.memory, Yl = S.to_u8_bytes, $l = S.to_u16_bytes, Hl = S.to_u32_bytes, Kl = S.to_u64_bytes, Gl = S.to_i8_bytes, Xl = S.to_i16_bytes, zl = S.to_i32_bytes, Zl = S.to_i64_bytes, Jl = S.to_f16_bytes, Ql = S.to_bf16_bytes, es = S.to_f32_bytes, ts = S.to_f64_bytes, ns = S.to_u8_value, rs = S.to_u16_value, ls = S.to_u32_value, ss = S.to_u64_value, is = S.to_i8_value, as = S.to_i16_value, os = S.to_i32_value, us = S.to_i64_value, fs = S.to_f32_value, _s = S.to_f64_value, cs = S.__wbindgen_export_0, vs = S.__wbindgen_malloc, ds = S.__wbindgen_realloc, hs = S.__wbindgen_free, zn = S.__wbindgen_start, ps = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbindgen_export_0: cs,
        __wbindgen_free: hs,
        __wbindgen_malloc: vs,
        __wbindgen_realloc: ds,
        __wbindgen_start: zn,
        memory: Wl,
        to_bf16_bytes: Ql,
        to_f16_bytes: Jl,
        to_f32_bytes: es,
        to_f32_value: fs,
        to_f64_bytes: ts,
        to_f64_value: _s,
        to_i16_bytes: Xl,
        to_i16_value: as,
        to_i32_bytes: zl,
        to_i32_value: os,
        to_i64_bytes: Zl,
        to_i64_value: us,
        to_i8_bytes: Gl,
        to_i8_value: is,
        to_u16_bytes: $l,
        to_u16_value: rs,
        to_u32_bytes: Hl,
        to_u32_value: ls,
        to_u64_bytes: Kl,
        to_u64_value: ss,
        to_u8_bytes: Yl,
        to_u8_value: ns
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      gl(ps);
      zn();
      const gs = (e, t) => {
        switch (t) {
          case "u8":
            return bl(e);
          case "u16":
            return wl(e);
          case "u32":
            return yl(e);
          case "u64":
            return El(e);
          case "i8":
            return Sl(e);
          case "i16":
            return kl(e);
          case "i32":
            return Tl(e);
          case "i64":
            return Al(e);
          case "f16":
            return Cl(e);
          case "bf16":
            return Nl(e);
          case "f32":
            return Rl(e);
          case "f64":
            return Ol(e);
        }
      }, xs = (e, t) => {
        switch (t) {
          case "u8":
            return Fl(e).toString();
          case "u16":
            return Pl(e).toString();
          case "u32":
            return Ml(e).toString();
          case "u64":
            return Il(e).toString();
          case "i8":
            return Ll(e).toString();
          case "i16":
            return Dl(e).toString();
          case "i32":
            return ql(e).toString();
          case "i64":
            return Ul(e).toString();
          case "f16":
            return "\u672A\u5BFE\u5FDC";
          case "bf16":
            return "\u672A\u5BFE\u5FDC";
          case "f32":
            return jl(e).toString();
          case "f64":
            return Bl(e).toString();
        }
      }, ms = (e) => {
        if (e.length === 0) return null;
        const t = [];
        for (let n of e) for (let r = 0; r < 8; r++) {
          const l = (n & 1) == 0 ? "0" : "1";
          t.push(l), n >>>= 1;
        }
        return t.reverse().join("");
      }, bs = (e, t) => {
        if (e.length === 0 || t === null) return null;
        const n = [], r = [], l = [], s = t[2], i = s + t[1], o = i + t[0];
        let a = 0;
        for (let u of e) for (let c = 0; c < 8; c++) {
          const p = (u & 1) == 0 ? "0" : "1";
          if (a < s) l.push(p);
          else if (a < i) r.push(p);
          else if (a < o) n.push(p);
          else return null;
          u >>>= 1, a++;
        }
        return [
          n.reverse().join(""),
          r.reverse().join(""),
          l.reverse().join("")
        ];
      };
      var ws = N("<br/>"), ys = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;&nbsp;</span>'), Es = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;</span>'), Ss = N('<!> <span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"> </span>', 1), ks = N("<br/>"), Ts = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;&nbsp;</span>'), As = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;</span>'), Cs = N('<!> <span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"> </span>', 1), Ns = N("<br/>"), Rs = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;&nbsp;</span>'), Os = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;</span>'), Fs = N('<!> <span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"> </span>', 1), Ps = N('<span class="border-b-6 border-red-600"></span> <span class="border-b-6 border-yellow-600"></span> <span class="border-b-6 border-lime-600"></span>', 1), Ms = N("<br/>"), Is = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;&nbsp;</span>'), Ls = N('<span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20">&nbsp;</span>'), Ds = N('<!> <span class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 sm:leading-11 md:leading-14 lg:leading-17 xl:leading-20"> </span>', 1), qs = N('<span class="border-b-6 border-blue-600"></span>'), Us = N('<p class="text:xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">\u6570\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</p>'), js = N('<option class="bg-(--color-black)"> </option>'), Bs = N('<div class="flex flex-col m-2 items-end"><div class="m-1"><label for="converted" class="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">\u5909\u63DB\u5F8C\u306E\u6570\u5024</label> <input type="text" id="converted" readonly="" class="w-80 sm:w-100 md:w-120 lg:w-140 xl:w-160 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b"/></div> <div class="m-1"><label for="sign" class="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">\u7B26\u53F7\u90E8</label> <input type="text" id="sign" readonly="" class="w-80 sm:w-100 md:w-120 lg:w-140 xl:w-160 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b border-red-600"/></div> <div class="m-1"><label for="exp" class="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">\u6307\u6570\u90E8</label> <input type="text" id="exp" readonly="" class="w-80 sm:w-100 md:w-120 lg:w-140 xl:w-160 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b border-yellow-600"/></div> <div class="m-1"><label for="frac" class="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">\u4EEE\u6570\u90E8</label> <input type="text" id="frac" readonly="" class="w-80 sm:w-100 md:w-120 lg:w-140 xl:w-160 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-right border-b border-lime-600"/></div></div>'), Vs = N('<main><div class="flex flex-col items-center"><h1 class="m-4 text:md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Number Representation Viewer</h1> <hr class="m-2 w-9/10 border-double border-xs"/> <div class="m-12"><!></div> <div class="m-3"><label for="ty" class="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">\u30C7\u30FC\u30BF\u578B</label> <select id="ty" class="m-3 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center border-b-1"></select> <label for="target-number" class="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">\u6570\u5024</label> <input type="text" id="target-number" class="m-3 w-25 sm:w-40 md:w-55 lg:w-70 xl:w-85 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-right border-b-2"/></div> <!></div></main>');
      function Ws(e, t) {
        xn(t, true);
        let n = me("0"), r = me("u8"), l = Ce(() => dl(_(r))), s = Ce(() => gs(_(n), _(r))), i = Ce(() => ms(_(s))), o = Ce(() => bs(_(s), _(l))), a = Ce(() => xs(_(n), _(r))), u = Ce(() => _(o) && _(o)[0]), c = Ce(() => _(o) && _(o)[1]), p = Ce(() => _(o) && _(o)[2]);
        var v = Vs(), h = H(v), d = D(H(h), 4), g = H(d);
        {
          var y = (O) => {
            var I = ye(), F = K(I);
            {
              var Te = (Q) => {
                var de = Ps(), Ae = K(de);
                at(Ae, 21, () => [
                  ...Array(_(l)[0]).keys()
                ], it, (j, P) => {
                  var he = Ss(), pe = K(he);
                  {
                    var Ie = (A) => {
                      var B = ws();
                      b(A, B);
                    }, ee = (A) => {
                      var B = ye(), te = K(B);
                      {
                        var xe = (C) => {
                          var L = ys();
                          b(C, L);
                        }, De = (C) => {
                          var L = ye(), qe = K(L);
                          {
                            var nt = (oe) => {
                              var rt = Es();
                              b(oe, rt);
                            };
                            W(qe, (oe) => {
                              _(P) !== 0 && _(P) % 4 === 0 && oe(nt);
                            }, true);
                          }
                          b(C, L);
                        };
                        W(te, (C) => {
                          _(P) !== 0 && _(P) % 8 === 0 ? C(xe) : C(De, false);
                        }, true);
                      }
                      b(A, B);
                    };
                    W(pe, (A) => {
                      _(P) !== 0 && _(P) % 16 === 0 ? A(Ie) : A(ee, false);
                    });
                  }
                  var ge = D(pe, 2), Le = H(ge);
                  lt(() => st(Le, _(i)[_(P)])), b(j, he);
                });
                var $ = D(Ae, 2);
                at($, 21, () => [
                  ...Array(_(l)[1]).keys()
                ], it, (j, P) => {
                  var he = Cs(), pe = K(he);
                  {
                    var Ie = (A) => {
                      var B = ks();
                      b(A, B);
                    }, ee = (A) => {
                      var B = ye(), te = K(B);
                      {
                        var xe = (C) => {
                          var L = Ts();
                          b(C, L);
                        }, De = (C) => {
                          var L = ye(), qe = K(L);
                          {
                            var nt = (oe) => {
                              var rt = As();
                              b(oe, rt);
                            };
                            W(qe, (oe) => {
                              (_(P) + _(l)[0]) % 4 === 0 && oe(nt);
                            }, true);
                          }
                          b(C, L);
                        };
                        W(te, (C) => {
                          (_(P) + _(l)[0]) % 8 === 0 ? C(xe) : C(De, false);
                        }, true);
                      }
                      b(A, B);
                    };
                    W(pe, (A) => {
                      (_(P) + _(l)[0]) % 16 === 0 ? A(Ie) : A(ee, false);
                    });
                  }
                  var ge = D(pe, 2), Le = H(ge);
                  lt(() => st(Le, _(i)[_(P) + _(l)[0]])), b(j, he);
                });
                var $e = D($, 2);
                at($e, 21, () => [
                  ...Array(_(l)[2]).keys()
                ], it, (j, P) => {
                  var he = Fs(), pe = K(he);
                  {
                    var Ie = (A) => {
                      var B = Ns();
                      b(A, B);
                    }, ee = (A) => {
                      var B = ye(), te = K(B);
                      {
                        var xe = (C) => {
                          var L = Rs();
                          b(C, L);
                        }, De = (C) => {
                          var L = ye(), qe = K(L);
                          {
                            var nt = (oe) => {
                              var rt = Os();
                              b(oe, rt);
                            };
                            W(qe, (oe) => {
                              (_(P) + _(l)[0] + _(l)[1]) % 4 === 0 && oe(nt);
                            }, true);
                          }
                          b(C, L);
                        };
                        W(te, (C) => {
                          (_(P) + _(l)[0] + _(l)[1]) % 8 === 0 ? C(xe) : C(De, false);
                        }, true);
                      }
                      b(A, B);
                    };
                    W(pe, (A) => {
                      (_(P) + _(l)[0] + _(l)[1]) % 16 === 0 ? A(Ie) : A(ee, false);
                    });
                  }
                  var ge = D(pe, 2), Le = H(ge);
                  lt(() => st(Le, _(i)[_(P) + _(l)[0] + _(l)[1]])), b(j, he);
                }), b(Q, de);
              }, ae = (Q) => {
                var de = qs();
                at(de, 21, () => [
                  ...Array(_(i).length).keys()
                ], it, (Ae, $) => {
                  var $e = Ds(), j = K($e);
                  {
                    var P = (ee) => {
                      var ge = Ms();
                      b(ee, ge);
                    }, he = (ee) => {
                      var ge = ye(), Le = K(ge);
                      {
                        var A = (te) => {
                          var xe = Is();
                          b(te, xe);
                        }, B = (te) => {
                          var xe = ye(), De = K(xe);
                          {
                            var C = (L) => {
                              var qe = Ls();
                              b(L, qe);
                            };
                            W(De, (L) => {
                              _($) !== 0 && _($) % 4 === 0 && L(C);
                            }, true);
                          }
                          b(te, xe);
                        };
                        W(Le, (te) => {
                          _($) !== 0 && _($) % 8 === 0 ? te(A) : te(B, false);
                        }, true);
                      }
                      b(ee, ge);
                    };
                    W(j, (ee) => {
                      _($) !== 0 && _($) % 16 === 0 ? ee(P) : ee(he, false);
                    });
                  }
                  var pe = D(j, 2), Ie = H(pe);
                  lt(() => st(Ie, _(i)[_($)])), b(Ae, $e);
                }), b(Q, de);
              };
              W(F, (Q) => {
                _(l) !== null ? Q(Te) : Q(ae, false);
              });
            }
            b(O, I);
          }, M = (O) => {
            var I = Us();
            b(O, I);
          };
          W(g, (O) => {
            _(i) !== null ? O(y) : O(M, false);
          });
        }
        var m = D(d, 2), E = D(H(m), 2);
        at(E, 21, () => cl, it, (O, I) => {
          var F = js(), Te = H(F), ae = {};
          lt(() => {
            st(Te, _(I)), ae !== (ae = _(I)) && (F.value = (F.__value = _(I)) ?? "");
          }), b(O, F);
        });
        var q = D(E, 4), ie = D(m, 2);
        {
          var Me = (O) => {
            var I = Bs(), F = H(I), Te = D(H(F), 2), ae = D(F, 2), Q = D(H(ae), 2), de = D(ae, 2), Ae = D(H(de), 2), $ = D(de, 2), $e = D(H($), 2);
            ot(Te, () => _(a), (j) => Z(a, j)), ot(Q, () => _(u), (j) => Z(u, j)), ot(Ae, () => _(c), (j) => Z(c, j)), ot($e, () => _(p), (j) => Z(p, j)), b(O, I);
          };
          W(ie, (O) => {
            vl(_(r)) && O(Me);
          });
        }
        fl(E, () => _(r), (O) => Z(r, O)), ot(q, () => _(n), (O) => Z(n, O)), b(e, v), mn();
      }
      ll(Ws, {
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
