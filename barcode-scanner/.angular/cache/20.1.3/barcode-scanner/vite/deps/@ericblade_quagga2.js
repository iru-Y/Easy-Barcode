import {
  __commonJS,
  init_define_NGX_ENV
} from "./chunk-TG4IPNUP.js";

// node_modules/@ericblade/quagga2/dist/quagga.min.js
var require_quagga_min = __commonJS({
  "node_modules/@ericblade/quagga2/dist/quagga.min.js"(exports, module) {
    init_define_NGX_ENV();
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quagga = e() : t.Quagga = e();
    }(window, function() {
      return function(t) {
        var e = {};
        function n(r) {
          if (e[r]) return e[r].exports;
          var o = e[r] = { i: r, l: false, exports: {} };
          return t[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, r) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2) return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var o in t2) n.d(r, o, (function(e3) {
            return t2[e3];
          }).bind(null, o));
          return r;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "/", n(n.s = 73);
      }([function(t, e, n) {
        var r = n(61);
        t.exports = function(t2, e2, n2) {
          return (e2 = r(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function(t2) {
          if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        function n(e2) {
          return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
            return t2.__proto__ || Object.getPrototypeOf(t2);
          }, t.exports.__esModule = true, t.exports.default = t.exports, n(e2);
        }
        t.exports = n, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function(t2, e2) {
          if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(61);
        function o(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var o2 = e2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, r(o2.key), o2);
          }
        }
        t.exports = function(t2, e2, n2) {
          return e2 && o(t2.prototype, e2), n2 && o(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
          return r;
        }), n.d(e, "b", function() {
          return o;
        }), n.d(e, "c", function() {
          return i;
        }), n.d(e, "d", function() {
          return a;
        });
        var r = {};
        n.r(r), n.d(r, "EPSILON", function() {
          return u;
        }), n.d(r, "ARRAY_TYPE", function() {
          return c;
        }), n.d(r, "RANDOM", function() {
          return s;
        }), n.d(r, "setMatrixArrayType", function() {
          return f;
        }), n.d(r, "toRadian", function() {
          return d;
        }), n.d(r, "equals", function() {
          return h;
        });
        var o = {};
        n.r(o), n.d(o, "create", function() {
          return v;
        }), n.d(o, "clone", function() {
          return p;
        }), n.d(o, "copy", function() {
          return y;
        }), n.d(o, "identity", function() {
          return g;
        }), n.d(o, "fromValues", function() {
          return x;
        }), n.d(o, "set", function() {
          return m;
        }), n.d(o, "transpose", function() {
          return _;
        }), n.d(o, "invert", function() {
          return b;
        }), n.d(o, "adjoint", function() {
          return w;
        }), n.d(o, "determinant", function() {
          return O;
        }), n.d(o, "multiply", function() {
          return R;
        }), n.d(o, "rotate", function() {
          return M;
        }), n.d(o, "scale", function() {
          return C;
        }), n.d(o, "fromRotation", function() {
          return E;
        }), n.d(o, "fromScaling", function() {
          return A;
        }), n.d(o, "str", function() {
          return S;
        }), n.d(o, "frob", function() {
          return k;
        }), n.d(o, "LDU", function() {
          return P;
        }), n.d(o, "add", function() {
          return T;
        }), n.d(o, "subtract", function() {
          return D;
        }), n.d(o, "exactEquals", function() {
          return j;
        }), n.d(o, "equals", function() {
          return I;
        }), n.d(o, "multiplyScalar", function() {
          return z;
        }), n.d(o, "multiplyScalarAndAdd", function() {
          return U;
        }), n.d(o, "mul", function() {
          return L;
        }), n.d(o, "sub", function() {
          return N;
        });
        var i = {};
        n.r(i), n.d(i, "create", function() {
          return F;
        }), n.d(i, "clone", function() {
          return B;
        }), n.d(i, "fromValues", function() {
          return W;
        }), n.d(i, "copy", function() {
          return q;
        }), n.d(i, "set", function() {
          return V;
        }), n.d(i, "add", function() {
          return G;
        }), n.d(i, "subtract", function() {
          return H;
        }), n.d(i, "multiply", function() {
          return X;
        }), n.d(i, "divide", function() {
          return Q;
        }), n.d(i, "ceil", function() {
          return Y;
        }), n.d(i, "floor", function() {
          return $;
        }), n.d(i, "min", function() {
          return Z;
        }), n.d(i, "max", function() {
          return K;
        }), n.d(i, "round", function() {
          return J;
        }), n.d(i, "scale", function() {
          return tt;
        }), n.d(i, "scaleAndAdd", function() {
          return et;
        }), n.d(i, "distance", function() {
          return nt;
        }), n.d(i, "squaredDistance", function() {
          return rt;
        }), n.d(i, "length", function() {
          return ot;
        }), n.d(i, "squaredLength", function() {
          return it;
        }), n.d(i, "negate", function() {
          return at;
        }), n.d(i, "inverse", function() {
          return ut;
        }), n.d(i, "normalize", function() {
          return ct;
        }), n.d(i, "dot", function() {
          return st;
        }), n.d(i, "cross", function() {
          return ft;
        }), n.d(i, "lerp", function() {
          return lt;
        }), n.d(i, "random", function() {
          return dt;
        }), n.d(i, "transformMat2", function() {
          return ht;
        }), n.d(i, "transformMat2d", function() {
          return vt;
        }), n.d(i, "transformMat3", function() {
          return pt;
        }), n.d(i, "transformMat4", function() {
          return yt;
        }), n.d(i, "rotate", function() {
          return gt;
        }), n.d(i, "angle", function() {
          return xt;
        }), n.d(i, "zero", function() {
          return mt;
        }), n.d(i, "str", function() {
          return _t;
        }), n.d(i, "exactEquals", function() {
          return bt;
        }), n.d(i, "equals", function() {
          return wt;
        }), n.d(i, "len", function() {
          return Rt;
        }), n.d(i, "sub", function() {
          return Mt;
        }), n.d(i, "mul", function() {
          return Ct;
        }), n.d(i, "div", function() {
          return Et;
        }), n.d(i, "dist", function() {
          return At;
        }), n.d(i, "sqrDist", function() {
          return St;
        }), n.d(i, "sqrLen", function() {
          return kt;
        }), n.d(i, "forEach", function() {
          return Pt;
        });
        var a = {};
        n.r(a), n.d(a, "create", function() {
          return Tt;
        }), n.d(a, "clone", function() {
          return Dt;
        }), n.d(a, "length", function() {
          return jt;
        }), n.d(a, "fromValues", function() {
          return It;
        }), n.d(a, "copy", function() {
          return zt;
        }), n.d(a, "set", function() {
          return Ut;
        }), n.d(a, "add", function() {
          return Lt;
        }), n.d(a, "subtract", function() {
          return Nt;
        }), n.d(a, "multiply", function() {
          return Ft;
        }), n.d(a, "divide", function() {
          return Bt;
        }), n.d(a, "ceil", function() {
          return Wt;
        }), n.d(a, "floor", function() {
          return qt;
        }), n.d(a, "min", function() {
          return Vt;
        }), n.d(a, "max", function() {
          return Gt;
        }), n.d(a, "round", function() {
          return Ht;
        }), n.d(a, "scale", function() {
          return Xt;
        }), n.d(a, "scaleAndAdd", function() {
          return Qt;
        }), n.d(a, "distance", function() {
          return Yt;
        }), n.d(a, "squaredDistance", function() {
          return $t;
        }), n.d(a, "squaredLength", function() {
          return Zt;
        }), n.d(a, "negate", function() {
          return Kt;
        }), n.d(a, "inverse", function() {
          return Jt;
        }), n.d(a, "normalize", function() {
          return te;
        }), n.d(a, "dot", function() {
          return ee;
        }), n.d(a, "cross", function() {
          return ne;
        }), n.d(a, "lerp", function() {
          return re;
        }), n.d(a, "hermite", function() {
          return oe;
        }), n.d(a, "bezier", function() {
          return ie;
        }), n.d(a, "random", function() {
          return ae;
        }), n.d(a, "transformMat4", function() {
          return ue;
        }), n.d(a, "transformMat3", function() {
          return ce;
        }), n.d(a, "transformQuat", function() {
          return se;
        }), n.d(a, "rotateX", function() {
          return fe;
        }), n.d(a, "rotateY", function() {
          return le;
        }), n.d(a, "rotateZ", function() {
          return de;
        }), n.d(a, "angle", function() {
          return he;
        }), n.d(a, "zero", function() {
          return ve;
        }), n.d(a, "str", function() {
          return pe;
        }), n.d(a, "exactEquals", function() {
          return ye;
        }), n.d(a, "equals", function() {
          return ge;
        }), n.d(a, "sub", function() {
          return xe;
        }), n.d(a, "mul", function() {
          return me;
        }), n.d(a, "div", function() {
          return _e;
        }), n.d(a, "dist", function() {
          return be;
        }), n.d(a, "sqrDist", function() {
          return we;
        }), n.d(a, "len", function() {
          return Oe;
        }), n.d(a, "sqrLen", function() {
          return Re;
        }), n.d(a, "forEach", function() {
          return Me;
        });
        var u = 1e-6, c = "undefined" != typeof Float32Array ? Float32Array : Array, s = Math.random;
        function f(t2) {
          c = t2;
        }
        var l = Math.PI / 180;
        function d(t2) {
          return t2 * l;
        }
        function h(t2, e2) {
          return Math.abs(t2 - e2) <= u * Math.max(1, Math.abs(t2), Math.abs(e2));
        }
        function v() {
          var t2 = new c(4);
          return c != Float32Array && (t2[1] = 0, t2[2] = 0), t2[0] = 1, t2[3] = 1, t2;
        }
        function p(t2) {
          var e2 = new c(4);
          return e2[0] = t2[0], e2[1] = t2[1], e2[2] = t2[2], e2[3] = t2[3], e2;
        }
        function y(t2, e2) {
          return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], t2;
        }
        function g(t2) {
          return t2[0] = 1, t2[1] = 0, t2[2] = 0, t2[3] = 1, t2;
        }
        function x(t2, e2, n2, r2) {
          var o2 = new c(4);
          return o2[0] = t2, o2[1] = e2, o2[2] = n2, o2[3] = r2, o2;
        }
        function m(t2, e2, n2, r2, o2) {
          return t2[0] = e2, t2[1] = n2, t2[2] = r2, t2[3] = o2, t2;
        }
        function _(t2, e2) {
          if (t2 === e2) {
            var n2 = e2[1];
            t2[1] = e2[2], t2[2] = n2;
          } else t2[0] = e2[0], t2[1] = e2[2], t2[2] = e2[1], t2[3] = e2[3];
          return t2;
        }
        function b(t2, e2) {
          var n2 = e2[0], r2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = n2 * i2 - o2 * r2;
          return a2 ? (a2 = 1 / a2, t2[0] = i2 * a2, t2[1] = -r2 * a2, t2[2] = -o2 * a2, t2[3] = n2 * a2, t2) : null;
        }
        function w(t2, e2) {
          var n2 = e2[0];
          return t2[0] = e2[3], t2[1] = -e2[1], t2[2] = -e2[2], t2[3] = n2, t2;
        }
        function O(t2) {
          return t2[0] * t2[3] - t2[2] * t2[1];
        }
        function R(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1], i2 = e2[2], a2 = e2[3], u2 = n2[0], c2 = n2[1], s2 = n2[2], f2 = n2[3];
          return t2[0] = r2 * u2 + i2 * c2, t2[1] = o2 * u2 + a2 * c2, t2[2] = r2 * s2 + i2 * f2, t2[3] = o2 * s2 + a2 * f2, t2;
        }
        function M(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1], i2 = e2[2], a2 = e2[3], u2 = Math.sin(n2), c2 = Math.cos(n2);
          return t2[0] = r2 * c2 + i2 * u2, t2[1] = o2 * c2 + a2 * u2, t2[2] = r2 * -u2 + i2 * c2, t2[3] = o2 * -u2 + a2 * c2, t2;
        }
        function C(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1], i2 = e2[2], a2 = e2[3], u2 = n2[0], c2 = n2[1];
          return t2[0] = r2 * u2, t2[1] = o2 * u2, t2[2] = i2 * c2, t2[3] = a2 * c2, t2;
        }
        function E(t2, e2) {
          var n2 = Math.sin(e2), r2 = Math.cos(e2);
          return t2[0] = r2, t2[1] = n2, t2[2] = -n2, t2[3] = r2, t2;
        }
        function A(t2, e2) {
          return t2[0] = e2[0], t2[1] = 0, t2[2] = 0, t2[3] = e2[1], t2;
        }
        function S(t2) {
          return "mat2(" + t2[0] + ", " + t2[1] + ", " + t2[2] + ", " + t2[3] + ")";
        }
        function k(t2) {
          return Math.hypot(t2[0], t2[1], t2[2], t2[3]);
        }
        function P(t2, e2, n2, r2) {
          return t2[2] = r2[2] / r2[0], n2[0] = r2[0], n2[1] = r2[1], n2[3] = r2[3] - t2[2] * n2[1], [t2, e2, n2];
        }
        function T(t2, e2, n2) {
          return t2[0] = e2[0] + n2[0], t2[1] = e2[1] + n2[1], t2[2] = e2[2] + n2[2], t2[3] = e2[3] + n2[3], t2;
        }
        function D(t2, e2, n2) {
          return t2[0] = e2[0] - n2[0], t2[1] = e2[1] - n2[1], t2[2] = e2[2] - n2[2], t2[3] = e2[3] - n2[3], t2;
        }
        function j(t2, e2) {
          return t2[0] === e2[0] && t2[1] === e2[1] && t2[2] === e2[2] && t2[3] === e2[3];
        }
        function I(t2, e2) {
          var n2 = t2[0], r2 = t2[1], o2 = t2[2], i2 = t2[3], a2 = e2[0], c2 = e2[1], s2 = e2[2], f2 = e2[3];
          return Math.abs(n2 - a2) <= u * Math.max(1, Math.abs(n2), Math.abs(a2)) && Math.abs(r2 - c2) <= u * Math.max(1, Math.abs(r2), Math.abs(c2)) && Math.abs(o2 - s2) <= u * Math.max(1, Math.abs(o2), Math.abs(s2)) && Math.abs(i2 - f2) <= u * Math.max(1, Math.abs(i2), Math.abs(f2));
        }
        function z(t2, e2, n2) {
          return t2[0] = e2[0] * n2, t2[1] = e2[1] * n2, t2[2] = e2[2] * n2, t2[3] = e2[3] * n2, t2;
        }
        function U(t2, e2, n2, r2) {
          return t2[0] = e2[0] + n2[0] * r2, t2[1] = e2[1] + n2[1] * r2, t2[2] = e2[2] + n2[2] * r2, t2[3] = e2[3] + n2[3] * r2, t2;
        }
        Math.hypot || (Math.hypot = function() {
          for (var t2 = 0, e2 = arguments.length; e2--; ) t2 += arguments[e2] * arguments[e2];
          return Math.sqrt(t2);
        });
        var L = R, N = D;
        function F() {
          var t2 = new c(2);
          return c != Float32Array && (t2[0] = 0, t2[1] = 0), t2;
        }
        function B(t2) {
          var e2 = new c(2);
          return e2[0] = t2[0], e2[1] = t2[1], e2;
        }
        function W(t2, e2) {
          var n2 = new c(2);
          return n2[0] = t2, n2[1] = e2, n2;
        }
        function q(t2, e2) {
          return t2[0] = e2[0], t2[1] = e2[1], t2;
        }
        function V(t2, e2, n2) {
          return t2[0] = e2, t2[1] = n2, t2;
        }
        function G(t2, e2, n2) {
          return t2[0] = e2[0] + n2[0], t2[1] = e2[1] + n2[1], t2;
        }
        function H(t2, e2, n2) {
          return t2[0] = e2[0] - n2[0], t2[1] = e2[1] - n2[1], t2;
        }
        function X(t2, e2, n2) {
          return t2[0] = e2[0] * n2[0], t2[1] = e2[1] * n2[1], t2;
        }
        function Q(t2, e2, n2) {
          return t2[0] = e2[0] / n2[0], t2[1] = e2[1] / n2[1], t2;
        }
        function Y(t2, e2) {
          return t2[0] = Math.ceil(e2[0]), t2[1] = Math.ceil(e2[1]), t2;
        }
        function $(t2, e2) {
          return t2[0] = Math.floor(e2[0]), t2[1] = Math.floor(e2[1]), t2;
        }
        function Z(t2, e2, n2) {
          return t2[0] = Math.min(e2[0], n2[0]), t2[1] = Math.min(e2[1], n2[1]), t2;
        }
        function K(t2, e2, n2) {
          return t2[0] = Math.max(e2[0], n2[0]), t2[1] = Math.max(e2[1], n2[1]), t2;
        }
        function J(t2, e2) {
          return t2[0] = Math.round(e2[0]), t2[1] = Math.round(e2[1]), t2;
        }
        function tt(t2, e2, n2) {
          return t2[0] = e2[0] * n2, t2[1] = e2[1] * n2, t2;
        }
        function et(t2, e2, n2, r2) {
          return t2[0] = e2[0] + n2[0] * r2, t2[1] = e2[1] + n2[1] * r2, t2;
        }
        function nt(t2, e2) {
          var n2 = e2[0] - t2[0], r2 = e2[1] - t2[1];
          return Math.hypot(n2, r2);
        }
        function rt(t2, e2) {
          var n2 = e2[0] - t2[0], r2 = e2[1] - t2[1];
          return n2 * n2 + r2 * r2;
        }
        function ot(t2) {
          var e2 = t2[0], n2 = t2[1];
          return Math.hypot(e2, n2);
        }
        function it(t2) {
          var e2 = t2[0], n2 = t2[1];
          return e2 * e2 + n2 * n2;
        }
        function at(t2, e2) {
          return t2[0] = -e2[0], t2[1] = -e2[1], t2;
        }
        function ut(t2, e2) {
          return t2[0] = 1 / e2[0], t2[1] = 1 / e2[1], t2;
        }
        function ct(t2, e2) {
          var n2 = e2[0], r2 = e2[1], o2 = n2 * n2 + r2 * r2;
          return o2 > 0 && (o2 = 1 / Math.sqrt(o2)), t2[0] = e2[0] * o2, t2[1] = e2[1] * o2, t2;
        }
        function st(t2, e2) {
          return t2[0] * e2[0] + t2[1] * e2[1];
        }
        function ft(t2, e2, n2) {
          var r2 = e2[0] * n2[1] - e2[1] * n2[0];
          return t2[0] = t2[1] = 0, t2[2] = r2, t2;
        }
        function lt(t2, e2, n2, r2) {
          var o2 = e2[0], i2 = e2[1];
          return t2[0] = o2 + r2 * (n2[0] - o2), t2[1] = i2 + r2 * (n2[1] - i2), t2;
        }
        function dt(t2, e2) {
          e2 = e2 || 1;
          var n2 = 2 * s() * Math.PI;
          return t2[0] = Math.cos(n2) * e2, t2[1] = Math.sin(n2) * e2, t2;
        }
        function ht(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1];
          return t2[0] = n2[0] * r2 + n2[2] * o2, t2[1] = n2[1] * r2 + n2[3] * o2, t2;
        }
        function vt(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1];
          return t2[0] = n2[0] * r2 + n2[2] * o2 + n2[4], t2[1] = n2[1] * r2 + n2[3] * o2 + n2[5], t2;
        }
        function pt(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1];
          return t2[0] = n2[0] * r2 + n2[3] * o2 + n2[6], t2[1] = n2[1] * r2 + n2[4] * o2 + n2[7], t2;
        }
        function yt(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1];
          return t2[0] = n2[0] * r2 + n2[4] * o2 + n2[12], t2[1] = n2[1] * r2 + n2[5] * o2 + n2[13], t2;
        }
        function gt(t2, e2, n2, r2) {
          var o2 = e2[0] - n2[0], i2 = e2[1] - n2[1], a2 = Math.sin(r2), u2 = Math.cos(r2);
          return t2[0] = o2 * u2 - i2 * a2 + n2[0], t2[1] = o2 * a2 + i2 * u2 + n2[1], t2;
        }
        function xt(t2, e2) {
          var n2 = t2[0], r2 = t2[1], o2 = e2[0], i2 = e2[1], a2 = Math.sqrt(n2 * n2 + r2 * r2) * Math.sqrt(o2 * o2 + i2 * i2), u2 = a2 && (n2 * o2 + r2 * i2) / a2;
          return Math.acos(Math.min(Math.max(u2, -1), 1));
        }
        function mt(t2) {
          return t2[0] = 0, t2[1] = 0, t2;
        }
        function _t(t2) {
          return "vec2(" + t2[0] + ", " + t2[1] + ")";
        }
        function bt(t2, e2) {
          return t2[0] === e2[0] && t2[1] === e2[1];
        }
        function wt(t2, e2) {
          var n2 = t2[0], r2 = t2[1], o2 = e2[0], i2 = e2[1];
          return Math.abs(n2 - o2) <= u * Math.max(1, Math.abs(n2), Math.abs(o2)) && Math.abs(r2 - i2) <= u * Math.max(1, Math.abs(r2), Math.abs(i2));
        }
        var Ot, Rt = ot, Mt = H, Ct = X, Et = Q, At = nt, St = rt, kt = it, Pt = (Ot = F(), function(t2, e2, n2, r2, o2, i2) {
          var a2, u2;
          for (e2 || (e2 = 2), n2 || (n2 = 0), u2 = r2 ? Math.min(r2 * e2 + n2, t2.length) : t2.length, a2 = n2; a2 < u2; a2 += e2) Ot[0] = t2[a2], Ot[1] = t2[a2 + 1], o2(Ot, Ot, i2), t2[a2] = Ot[0], t2[a2 + 1] = Ot[1];
          return t2;
        });
        function Tt() {
          var t2 = new c(3);
          return c != Float32Array && (t2[0] = 0, t2[1] = 0, t2[2] = 0), t2;
        }
        function Dt(t2) {
          var e2 = new c(3);
          return e2[0] = t2[0], e2[1] = t2[1], e2[2] = t2[2], e2;
        }
        function jt(t2) {
          var e2 = t2[0], n2 = t2[1], r2 = t2[2];
          return Math.hypot(e2, n2, r2);
        }
        function It(t2, e2, n2) {
          var r2 = new c(3);
          return r2[0] = t2, r2[1] = e2, r2[2] = n2, r2;
        }
        function zt(t2, e2) {
          return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2;
        }
        function Ut(t2, e2, n2, r2) {
          return t2[0] = e2, t2[1] = n2, t2[2] = r2, t2;
        }
        function Lt(t2, e2, n2) {
          return t2[0] = e2[0] + n2[0], t2[1] = e2[1] + n2[1], t2[2] = e2[2] + n2[2], t2;
        }
        function Nt(t2, e2, n2) {
          return t2[0] = e2[0] - n2[0], t2[1] = e2[1] - n2[1], t2[2] = e2[2] - n2[2], t2;
        }
        function Ft(t2, e2, n2) {
          return t2[0] = e2[0] * n2[0], t2[1] = e2[1] * n2[1], t2[2] = e2[2] * n2[2], t2;
        }
        function Bt(t2, e2, n2) {
          return t2[0] = e2[0] / n2[0], t2[1] = e2[1] / n2[1], t2[2] = e2[2] / n2[2], t2;
        }
        function Wt(t2, e2) {
          return t2[0] = Math.ceil(e2[0]), t2[1] = Math.ceil(e2[1]), t2[2] = Math.ceil(e2[2]), t2;
        }
        function qt(t2, e2) {
          return t2[0] = Math.floor(e2[0]), t2[1] = Math.floor(e2[1]), t2[2] = Math.floor(e2[2]), t2;
        }
        function Vt(t2, e2, n2) {
          return t2[0] = Math.min(e2[0], n2[0]), t2[1] = Math.min(e2[1], n2[1]), t2[2] = Math.min(e2[2], n2[2]), t2;
        }
        function Gt(t2, e2, n2) {
          return t2[0] = Math.max(e2[0], n2[0]), t2[1] = Math.max(e2[1], n2[1]), t2[2] = Math.max(e2[2], n2[2]), t2;
        }
        function Ht(t2, e2) {
          return t2[0] = Math.round(e2[0]), t2[1] = Math.round(e2[1]), t2[2] = Math.round(e2[2]), t2;
        }
        function Xt(t2, e2, n2) {
          return t2[0] = e2[0] * n2, t2[1] = e2[1] * n2, t2[2] = e2[2] * n2, t2;
        }
        function Qt(t2, e2, n2, r2) {
          return t2[0] = e2[0] + n2[0] * r2, t2[1] = e2[1] + n2[1] * r2, t2[2] = e2[2] + n2[2] * r2, t2;
        }
        function Yt(t2, e2) {
          var n2 = e2[0] - t2[0], r2 = e2[1] - t2[1], o2 = e2[2] - t2[2];
          return Math.hypot(n2, r2, o2);
        }
        function $t(t2, e2) {
          var n2 = e2[0] - t2[0], r2 = e2[1] - t2[1], o2 = e2[2] - t2[2];
          return n2 * n2 + r2 * r2 + o2 * o2;
        }
        function Zt(t2) {
          var e2 = t2[0], n2 = t2[1], r2 = t2[2];
          return e2 * e2 + n2 * n2 + r2 * r2;
        }
        function Kt(t2, e2) {
          return t2[0] = -e2[0], t2[1] = -e2[1], t2[2] = -e2[2], t2;
        }
        function Jt(t2, e2) {
          return t2[0] = 1 / e2[0], t2[1] = 1 / e2[1], t2[2] = 1 / e2[2], t2;
        }
        function te(t2, e2) {
          var n2 = e2[0], r2 = e2[1], o2 = e2[2], i2 = n2 * n2 + r2 * r2 + o2 * o2;
          return i2 > 0 && (i2 = 1 / Math.sqrt(i2)), t2[0] = e2[0] * i2, t2[1] = e2[1] * i2, t2[2] = e2[2] * i2, t2;
        }
        function ee(t2, e2) {
          return t2[0] * e2[0] + t2[1] * e2[1] + t2[2] * e2[2];
        }
        function ne(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1], i2 = e2[2], a2 = n2[0], u2 = n2[1], c2 = n2[2];
          return t2[0] = o2 * c2 - i2 * u2, t2[1] = i2 * a2 - r2 * c2, t2[2] = r2 * u2 - o2 * a2, t2;
        }
        function re(t2, e2, n2, r2) {
          var o2 = e2[0], i2 = e2[1], a2 = e2[2];
          return t2[0] = o2 + r2 * (n2[0] - o2), t2[1] = i2 + r2 * (n2[1] - i2), t2[2] = a2 + r2 * (n2[2] - a2), t2;
        }
        function oe(t2, e2, n2, r2, o2, i2) {
          var a2 = i2 * i2, u2 = a2 * (2 * i2 - 3) + 1, c2 = a2 * (i2 - 2) + i2, s2 = a2 * (i2 - 1), f2 = a2 * (3 - 2 * i2);
          return t2[0] = e2[0] * u2 + n2[0] * c2 + r2[0] * s2 + o2[0] * f2, t2[1] = e2[1] * u2 + n2[1] * c2 + r2[1] * s2 + o2[1] * f2, t2[2] = e2[2] * u2 + n2[2] * c2 + r2[2] * s2 + o2[2] * f2, t2;
        }
        function ie(t2, e2, n2, r2, o2, i2) {
          var a2 = 1 - i2, u2 = a2 * a2, c2 = i2 * i2, s2 = u2 * a2, f2 = 3 * i2 * u2, l2 = 3 * c2 * a2, d2 = c2 * i2;
          return t2[0] = e2[0] * s2 + n2[0] * f2 + r2[0] * l2 + o2[0] * d2, t2[1] = e2[1] * s2 + n2[1] * f2 + r2[1] * l2 + o2[1] * d2, t2[2] = e2[2] * s2 + n2[2] * f2 + r2[2] * l2 + o2[2] * d2, t2;
        }
        function ae(t2, e2) {
          e2 = e2 || 1;
          var n2 = 2 * s() * Math.PI, r2 = 2 * s() - 1, o2 = Math.sqrt(1 - r2 * r2) * e2;
          return t2[0] = Math.cos(n2) * o2, t2[1] = Math.sin(n2) * o2, t2[2] = r2 * e2, t2;
        }
        function ue(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1], i2 = e2[2], a2 = n2[3] * r2 + n2[7] * o2 + n2[11] * i2 + n2[15];
          return a2 = a2 || 1, t2[0] = (n2[0] * r2 + n2[4] * o2 + n2[8] * i2 + n2[12]) / a2, t2[1] = (n2[1] * r2 + n2[5] * o2 + n2[9] * i2 + n2[13]) / a2, t2[2] = (n2[2] * r2 + n2[6] * o2 + n2[10] * i2 + n2[14]) / a2, t2;
        }
        function ce(t2, e2, n2) {
          var r2 = e2[0], o2 = e2[1], i2 = e2[2];
          return t2[0] = r2 * n2[0] + o2 * n2[3] + i2 * n2[6], t2[1] = r2 * n2[1] + o2 * n2[4] + i2 * n2[7], t2[2] = r2 * n2[2] + o2 * n2[5] + i2 * n2[8], t2;
        }
        function se(t2, e2, n2) {
          var r2 = n2[0], o2 = n2[1], i2 = n2[2], a2 = n2[3], u2 = e2[0], c2 = e2[1], s2 = e2[2], f2 = o2 * s2 - i2 * c2, l2 = i2 * u2 - r2 * s2, d2 = r2 * c2 - o2 * u2, h2 = o2 * d2 - i2 * l2, v2 = i2 * f2 - r2 * d2, p2 = r2 * l2 - o2 * f2, y2 = 2 * a2;
          return f2 *= y2, l2 *= y2, d2 *= y2, h2 *= 2, v2 *= 2, p2 *= 2, t2[0] = u2 + f2 + h2, t2[1] = c2 + l2 + v2, t2[2] = s2 + d2 + p2, t2;
        }
        function fe(t2, e2, n2, r2) {
          var o2 = [], i2 = [];
          return o2[0] = e2[0] - n2[0], o2[1] = e2[1] - n2[1], o2[2] = e2[2] - n2[2], i2[0] = o2[0], i2[1] = o2[1] * Math.cos(r2) - o2[2] * Math.sin(r2), i2[2] = o2[1] * Math.sin(r2) + o2[2] * Math.cos(r2), t2[0] = i2[0] + n2[0], t2[1] = i2[1] + n2[1], t2[2] = i2[2] + n2[2], t2;
        }
        function le(t2, e2, n2, r2) {
          var o2 = [], i2 = [];
          return o2[0] = e2[0] - n2[0], o2[1] = e2[1] - n2[1], o2[2] = e2[2] - n2[2], i2[0] = o2[2] * Math.sin(r2) + o2[0] * Math.cos(r2), i2[1] = o2[1], i2[2] = o2[2] * Math.cos(r2) - o2[0] * Math.sin(r2), t2[0] = i2[0] + n2[0], t2[1] = i2[1] + n2[1], t2[2] = i2[2] + n2[2], t2;
        }
        function de(t2, e2, n2, r2) {
          var o2 = [], i2 = [];
          return o2[0] = e2[0] - n2[0], o2[1] = e2[1] - n2[1], o2[2] = e2[2] - n2[2], i2[0] = o2[0] * Math.cos(r2) - o2[1] * Math.sin(r2), i2[1] = o2[0] * Math.sin(r2) + o2[1] * Math.cos(r2), i2[2] = o2[2], t2[0] = i2[0] + n2[0], t2[1] = i2[1] + n2[1], t2[2] = i2[2] + n2[2], t2;
        }
        function he(t2, e2) {
          var n2 = t2[0], r2 = t2[1], o2 = t2[2], i2 = e2[0], a2 = e2[1], u2 = e2[2], c2 = Math.sqrt(n2 * n2 + r2 * r2 + o2 * o2) * Math.sqrt(i2 * i2 + a2 * a2 + u2 * u2), s2 = c2 && ee(t2, e2) / c2;
          return Math.acos(Math.min(Math.max(s2, -1), 1));
        }
        function ve(t2) {
          return t2[0] = 0, t2[1] = 0, t2[2] = 0, t2;
        }
        function pe(t2) {
          return "vec3(" + t2[0] + ", " + t2[1] + ", " + t2[2] + ")";
        }
        function ye(t2, e2) {
          return t2[0] === e2[0] && t2[1] === e2[1] && t2[2] === e2[2];
        }
        function ge(t2, e2) {
          var n2 = t2[0], r2 = t2[1], o2 = t2[2], i2 = e2[0], a2 = e2[1], c2 = e2[2];
          return Math.abs(n2 - i2) <= u * Math.max(1, Math.abs(n2), Math.abs(i2)) && Math.abs(r2 - a2) <= u * Math.max(1, Math.abs(r2), Math.abs(a2)) && Math.abs(o2 - c2) <= u * Math.max(1, Math.abs(o2), Math.abs(c2));
        }
        var xe = Nt, me = Ft, _e = Bt, be = Yt, we = $t, Oe = jt, Re = Zt, Me = function() {
          var t2 = Tt();
          return function(e2, n2, r2, o2, i2, a2) {
            var u2, c2;
            for (n2 || (n2 = 3), r2 || (r2 = 0), c2 = o2 ? Math.min(o2 * n2 + r2, e2.length) : e2.length, u2 = r2; u2 < c2; u2 += n2) t2[0] = e2[u2], t2[1] = e2[u2 + 1], t2[2] = e2[u2 + 2], i2(t2, t2, a2), e2[u2] = t2[0], e2[u2 + 1] = t2[1], e2[u2 + 2] = t2[2];
            return e2;
          };
        }();
      }, function(t, e, n) {
        var r = n(13).default, o = n(1);
        t.exports = function(t2, e2) {
          if (e2 && ("object" === r(e2) || "function" == typeof e2)) return e2;
          if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
          return o(t2);
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(40);
        t.exports = function(t2, e2) {
          if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
          t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && r(t2, e2);
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(141)();
        t.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (t2) {
          "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
        }
      }, function(t, e, n) {
        "use strict";
        e.a = { init: function(t2, e2) {
          t2.fill(e2);
        }, shuffle: function(t2) {
          for (var e2 = t2.length - 1; e2 > 0; e2--) {
            var n2 = Math.floor(Math.random() * (e2 + 1)), r = [t2[n2], t2[e2]];
            t2[e2] = r[0], t2[n2] = r[1];
          }
          return t2;
        }, toPointList: function(t2) {
          var e2 = t2.reduce(function(t3, e3) {
            var n2 = "[".concat(e3.join(","), "]");
            return t3.push(n2), t3;
          }, []);
          return "[".concat(e2.join(",\r\n"), "]");
        }, threshold: function(t2, e2, n2) {
          return t2.reduce(function(r, o) {
            return n2.apply(t2, [o]) >= e2 && r.push(o), r;
          }, []);
        }, maxIndex: function(t2) {
          for (var e2 = 0, n2 = 0; n2 < t2.length; n2++) t2[n2] > t2[e2] && (e2 = n2);
          return e2;
        }, max: function(t2) {
          for (var e2 = 0, n2 = 0; n2 < t2.length; n2++) t2[n2] > e2 && (e2 = t2[n2]);
          return e2;
        }, sum: function(t2) {
          for (var e2 = t2.length, n2 = 0; e2--; ) n2 += t2[e2];
          return n2;
        } };
      }, function(t, e, n) {
        "use strict";
        n.d(e, "h", function() {
          return u;
        }), n.d(e, "i", function() {
          return s;
        }), n.d(e, "b", function() {
          return f;
        }), n.d(e, "j", function() {
          return l;
        }), n.d(e, "e", function() {
          return d;
        }), n.d(e, "c", function() {
          return h;
        }), n.d(e, "f", function() {
          return v;
        }), n.d(e, "g", function() {
          return p;
        }), n.d(e, "a", function() {
          return g;
        }), n.d(e, "d", function() {
          return m;
        });
        var r = n(5), o = n(9);
        r.a.setMatrixArrayType(Array);
        var i = function(t2, e2) {
          var n2 = [], o2 = { rad: 0, vec: r.c.clone([0, 0]) }, i2 = {};
          function a2(t3) {
            i2[t3.id] = t3, n2.push(t3);
          }
          function u2() {
            var t3, e3 = 0;
            for (t3 = 0; t3 < n2.length; t3++) e3 += n2[t3].rad;
            o2.rad = e3 / n2.length, o2.vec = r.c.clone([Math.cos(o2.rad), Math.sin(o2.rad)]);
          }
          return a2(t2), u2(), { add: function(t3) {
            i2[t3.id] || (a2(t3), u2());
          }, fits: function(t3) {
            return Math.abs(r.c.dot(t3.point.vec, o2.vec)) > e2;
          }, getPoints: function() {
            return n2;
          }, getCenter: function() {
            return o2;
          } };
        }, a = function(t2, e2, n2) {
          return { rad: t2[n2], point: t2, id: e2 };
        };
        function u(t2, e2) {
          return { x: t2, y: e2, toVec2: function() {
            return r.c.clone([this.x, this.y]);
          }, toVec3: function() {
            return r.d.clone([this.x, this.y, 1]);
          }, round: function() {
            return this.x = this.x > 0 ? Math.floor(this.x + 0.5) : Math.floor(this.x - 0.5), this.y = this.y > 0 ? Math.floor(this.y + 0.5) : Math.floor(this.y - 0.5), this;
          } };
        }
        function c(t2, e2) {
          e2 || (e2 = 8);
          for (var n2 = t2.data, r2 = n2.length, o2 = 8 - e2, i2 = new Int32Array(1 << e2); r2--; ) i2[n2[r2] >> o2]++;
          return i2;
        }
        function s(t2, e2) {
          var n2 = function(t3) {
            var e3, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8, r2 = 8 - n3;
            function i2(t4, n4) {
              for (var r3 = 0, o2 = t4; o2 <= n4; o2++) r3 += e3[o2];
              return r3;
            }
            function a2(t4, n4) {
              for (var r3 = 0, o2 = t4; o2 <= n4; o2++) r3 += o2 * e3[o2];
              return r3;
            }
            function u2() {
              var r3, u3, s3, f2, l2 = [0], d2 = (1 << n3) - 1;
              e3 = c(t3, n3);
              for (var h2 = 1; h2 < d2; h2++) 0 === (s3 = (r3 = i2(0, h2)) * (u3 = i2(h2 + 1, d2))) && (s3 = 1), f2 = a2(0, h2) * u3 - a2(h2 + 1, d2) * r3, l2[h2] = f2 * f2 / s3;
              return o.a.maxIndex(l2);
            }
            var s2 = u2();
            return s2 << r2;
          }(t2);
          return function(t3, e3, n3) {
            n3 || (n3 = t3);
            for (var r2 = t3.data, o2 = r2.length, i2 = n3.data; o2--; ) i2[o2] = r2[o2] < e3 ? 1 : 0;
          }(t2, n2, e2), n2;
        }
        function f(t2, e2, n2) {
          var r2, o2, u2, c2, s2 = [];
          function f2(t3) {
            var e3 = false;
            for (o2 = 0; o2 < s2.length; o2++) (u2 = s2[o2]).fits(t3) && (u2.add(t3), e3 = true);
            return e3;
          }
          for (n2 || (n2 = "rad"), r2 = 0; r2 < t2.length; r2++) f2(c2 = a(t2[r2], r2, n2)) || s2.push(i(c2, e2));
          return s2;
        }
        r.a.setMatrixArrayType(Array);
        function l(t2, e2, n2) {
          var r2, o2, i2, a2, u2 = 0, c2 = 0, s2 = [];
          for (r2 = 0; r2 < e2; r2++) s2[r2] = { score: 0, item: null };
          for (r2 = 0; r2 < t2.length; r2++) if ((o2 = n2.apply(this, [t2[r2]])) > c2) for ((i2 = s2[u2]).score = o2, i2.item = t2[r2], c2 = Number.MAX_VALUE, a2 = 0; a2 < e2; a2++) s2[a2].score < c2 && (c2 = s2[a2].score, u2 = a2);
          return s2;
        }
        function d(t2, e2, n2) {
          for (var r2, o2 = 0, i2 = e2.x, a2 = Math.floor(t2.length / 4), u2 = e2.x / 2, c2 = 0, s2 = e2.x; i2 < a2; ) {
            for (r2 = 0; r2 < u2; r2++) n2[c2] = (0.299 * t2[4 * o2 + 0] + 0.587 * t2[4 * o2 + 1] + 0.114 * t2[4 * o2 + 2] + (0.299 * t2[4 * (o2 + 1) + 0] + 0.587 * t2[4 * (o2 + 1) + 1] + 0.114 * t2[4 * (o2 + 1) + 2]) + (0.299 * t2[4 * i2 + 0] + 0.587 * t2[4 * i2 + 1] + 0.114 * t2[4 * i2 + 2]) + (0.299 * t2[4 * (i2 + 1) + 0] + 0.587 * t2[4 * (i2 + 1) + 1] + 0.114 * t2[4 * (i2 + 1) + 2])) / 4, c2++, o2 += 2, i2 += 2;
            o2 += s2, i2 += s2;
          }
        }
        function h(t2, e2, n2) {
          var r2 = t2.length / 4 | 0;
          if (n2 && true === n2.singleChannel) for (var o2 = 0; o2 < r2; o2++) e2[o2] = t2[4 * o2 + 0];
          else for (var i2 = 0; i2 < r2; i2++) e2[i2] = 0.299 * t2[4 * i2 + 0] + 0.587 * t2[4 * i2 + 1] + 0.114 * t2[4 * i2 + 2];
        }
        function v(t2, e2) {
          for (var n2 = t2.data, r2 = t2.size.x, o2 = e2.data, i2 = 0, a2 = r2, u2 = n2.length, c2 = r2 / 2, s2 = 0; a2 < u2; ) {
            for (var f2 = 0; f2 < c2; f2++) o2[s2] = Math.floor((n2[i2] + n2[i2 + 1] + n2[a2] + n2[a2 + 1]) / 4), s2++, i2 += 2, a2 += 2;
            i2 += r2, a2 += r2;
          }
        }
        function p(t2) {
          var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0, 0], n2 = t2[0], r2 = t2[1], o2 = t2[2], i2 = o2 * r2, a2 = i2 * (1 - Math.abs(n2 / 60 % 2 - 1)), u2 = o2 - i2, c2 = 0, s2 = 0, f2 = 0;
          return n2 < 60 ? (c2 = i2, s2 = a2) : n2 < 120 ? (c2 = a2, s2 = i2) : n2 < 180 ? (s2 = i2, f2 = a2) : n2 < 240 ? (s2 = a2, f2 = i2) : n2 < 300 ? (c2 = a2, f2 = i2) : n2 < 360 && (c2 = i2, f2 = a2), e2[0] = 255 * (c2 + u2) | 0, e2[1] = 255 * (s2 + u2) | 0, e2[2] = 255 * (f2 + u2) | 0, e2;
        }
        function y(t2) {
          for (var e2 = [], n2 = [], r2 = 1; r2 < Math.sqrt(t2) + 1; r2++) t2 % r2 == 0 && (n2.push(r2), r2 !== t2 / r2 && e2.unshift(Math.floor(t2 / r2)));
          return n2.concat(e2);
        }
        function g(t2, e2) {
          var n2, r2 = y(e2.x), o2 = y(e2.y), i2 = Math.max(e2.x, e2.y), a2 = function(t3, e3) {
            for (var n3 = 0, r3 = 0, o3 = []; n3 < t3.length && r3 < e3.length; ) t3[n3] === e3[r3] ? (o3.push(t3[n3]), n3++, r3++) : t3[n3] > e3[r3] ? r3++ : n3++;
            return o3;
          }(r2, o2), u2 = [8, 10, 15, 20, 32, 60, 80], c2 = { "x-small": 5, small: 4, medium: 3, large: 2, "x-large": 1 }, s2 = c2[t2] || c2.medium, f2 = u2[s2], l2 = Math.floor(i2 / f2);
          function d2(t3) {
            for (var e3 = 0, n3 = t3[Math.floor(t3.length / 2)]; e3 < t3.length - 1 && t3[e3] < l2; ) e3++;
            return e3 > 0 && (n3 = Math.abs(t3[e3] - l2) > Math.abs(t3[e3 - 1] - l2) ? t3[e3 - 1] : t3[e3]), l2 / n3 < u2[s2 + 1] / u2[s2] && l2 / n3 > u2[s2 - 1] / u2[s2] ? { x: n3, y: n3 } : null;
          }
          return (n2 = d2(a2)) || (n2 = d2(y(i2))) || (n2 = d2(y(l2 * f2))), n2;
        }
        var x = { top: function(t2, e2) {
          return "%" === t2.unit ? Math.floor(e2.height * (t2.value / 100)) : null;
        }, right: function(t2, e2) {
          return "%" === t2.unit ? Math.floor(e2.width - e2.width * (t2.value / 100)) : null;
        }, bottom: function(t2, e2) {
          return "%" === t2.unit ? Math.floor(e2.height - e2.height * (t2.value / 100)) : null;
        }, left: function(t2, e2) {
          return "%" === t2.unit ? Math.floor(e2.width * (t2.value / 100)) : null;
        } };
        function m(t2, e2, n2) {
          var r2 = { width: t2, height: e2 }, o2 = Object.keys(n2).reduce(function(t3, e3) {
            var o3 = function(t4) {
              return { value: parseFloat(t4), unit: (t4.indexOf("%"), t4.length, "%") };
            }(n2[e3]), i2 = x[e3](o3, r2);
            return t3[e3] = i2, t3;
          }, {});
          return { sx: o2.left, sy: o2.top, sw: o2.right - o2.left, sh: o2.bottom - o2.top };
        }
      }, function(t, e, n) {
        "use strict";
        var r = n(62), o = n.n(r), i = n(3), a = n.n(i), u = n(4), c = n.n(u), s = n(0), f = n.n(s), l = n(5), d = n(9), h = n(10);
        function v(t2) {
          if (t2 < 0) throw new Error("expected positive number, received ".concat(t2));
        }
        l.a.setMatrixArrayType(Array);
        var p = function() {
          function t2(e2, n2) {
            var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uint8Array, o2 = arguments.length > 3 ? arguments[3] : void 0;
            a()(this, t2), f()(this, "data", void 0), f()(this, "size", void 0), f()(this, "indexMapping", void 0), n2 ? this.data = n2 : (this.data = new r2(e2.x * e2.y), o2 && d.a.init(this.data, 0)), this.size = e2;
          }
          return c()(t2, [{ key: "inImageWithBorder", value: function(t3) {
            var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return v(e2), t3.x >= 0 && t3.y >= 0 && t3.x < this.size.x + 2 * e2 && t3.y < this.size.y + 2 * e2;
          } }, { key: "subImageAsCopy", value: function(t3, e2) {
            v(e2.x), v(e2.y);
            for (var n2 = t3.size, r2 = n2.x, o2 = n2.y, i2 = 0; i2 < r2; i2++) for (var a2 = 0; a2 < o2; a2++) t3.data[a2 * r2 + i2] = this.data[(e2.y + a2) * this.size.x + e2.x + i2];
            return t3;
          } }, { key: "get", value: function(t3, e2) {
            return this.data[e2 * this.size.x + t3];
          } }, { key: "getSafe", value: function(t3, e2) {
            if (!this.indexMapping) {
              this.indexMapping = { x: [], y: [] };
              for (var n2 = 0; n2 < this.size.x; n2++) this.indexMapping.x[n2] = n2, this.indexMapping.x[n2 + this.size.x] = n2;
              for (var r2 = 0; r2 < this.size.y; r2++) this.indexMapping.y[r2] = r2, this.indexMapping.y[r2 + this.size.y] = r2;
            }
            return this.data[this.indexMapping.y[e2 + this.size.y] * this.size.x + this.indexMapping.x[t3 + this.size.x]];
          } }, { key: "set", value: function(t3, e2, n2) {
            return this.data[e2 * this.size.x + t3] = n2, delete this.indexMapping, this;
          } }, { key: "zeroBorder", value: function() {
            for (var t3 = this.size, e2 = t3.x, n2 = t3.y, r2 = 0; r2 < e2; r2++) this.data[r2] = this.data[(n2 - 1) * e2 + r2] = 0;
            for (var o2 = 1; o2 < n2 - 1; o2++) this.data[o2 * e2] = this.data[o2 * e2 + (e2 - 1)] = 0;
            return delete this.indexMapping, this;
          } }, { key: "moments", value: function(t3) {
            var e2, n2, r2, o2, i2, a2, u2, c2, s2, f2, d2 = this.data, h2 = this.size.y, v2 = this.size.x, p2 = [], y = [], g = Math.PI, x = g / 4;
            if (t3 <= 0) return y;
            for (i2 = 0; i2 < t3; i2++) p2[i2] = { m00: 0, m01: 0, m10: 0, m11: 0, m02: 0, m20: 0, theta: 0, rad: 0 };
            for (n2 = 0; n2 < h2; n2++) for (o2 = n2 * n2, e2 = 0; e2 < v2; e2++) (r2 = d2[n2 * v2 + e2]) > 0 && ((a2 = p2[r2 - 1]).m00 += 1, a2.m01 += n2, a2.m10 += e2, a2.m11 += e2 * n2, a2.m02 += o2, a2.m20 += e2 * e2);
            for (i2 = 0; i2 < t3; i2++) a2 = p2[i2], isNaN(a2.m00) || 0 === a2.m00 || (c2 = a2.m10 / a2.m00, s2 = a2.m01 / a2.m00, u2 = a2.m11 / a2.m00 - c2 * s2, f2 = (a2.m02 / a2.m00 - s2 * s2 - (a2.m20 / a2.m00 - c2 * c2)) / (2 * u2), f2 = 0.5 * Math.atan(f2) + (u2 >= 0 ? x : -x) + g, a2.theta = (180 * f2 / g + 90) % 180 - 90, a2.theta < 0 && (a2.theta += 180), a2.rad = f2 > g ? f2 - g : f2, a2.vec = l.c.clone([Math.cos(f2), Math.sin(f2)]), y.push(a2));
            return y;
          } }, { key: "getAsRGBA", value: function() {
            for (var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e2 = new Uint8ClampedArray(4 * this.size.x * this.size.y), n2 = 0; n2 < this.size.y; n2++) for (var r2 = 0; r2 < this.size.x; r2++) {
              var o2 = n2 * this.size.x + r2, i2 = this.get(r2, n2) * t3;
              e2[4 * o2 + 0] = i2, e2[4 * o2 + 1] = i2, e2[4 * o2 + 2] = i2, e2[4 * o2 + 3] = 255;
            }
            return e2;
          } }, { key: "show", value: function(t3) {
            var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            console.warn("* imagewrapper show getcontext 2d");
            var n2 = t3.getContext("2d");
            if (!n2) throw new Error("Unable to get canvas context");
            var r2 = n2.getImageData(0, 0, t3.width, t3.height), o2 = this.getAsRGBA(e2);
            t3.width = this.size.x, t3.height = this.size.y;
            var i2 = new ImageData(o2, r2.width, r2.height);
            n2.putImageData(i2, 0, 0);
          } }, { key: "overlay", value: function(t3, e2, n2) {
            var r2 = e2 < 0 || e2 > 360 ? 360 : e2, i2 = [0, 1, 1], a2 = [0, 0, 0], u2 = [255, 255, 255], c2 = [0, 0, 0];
            console.warn("* imagewrapper overlay getcontext 2d");
            var s2 = t3.getContext("2d");
            if (!s2) throw new Error("Unable to get canvas context");
            for (var f2 = s2.getImageData(n2.x, n2.y, this.size.x, this.size.y), l2 = f2.data, d2 = this.data.length; d2--; ) {
              i2[0] = this.data[d2] * r2;
              var v2 = 4 * d2, p2 = i2[0] <= 0 ? u2 : i2[0] >= 360 ? c2 : Object(h.g)(i2, a2), y = o()(p2, 3);
              l2[v2] = y[0], l2[v2 + 1] = y[1], l2[v2 + 2] = y[2], l2[v2 + 3] = 255;
            }
            s2.putImageData(f2, n2.x, n2.y);
          } }]), t2;
        }();
        e.a = p;
      }, function(t, e) {
        function n(t2, e2, n2, r, o, i, a) {
          try {
            var u = t2[i](a), c = u.value;
          } catch (t3) {
            return void n2(t3);
          }
          u.done ? e2(c) : Promise.resolve(c).then(r, o);
        }
        t.exports = function(t2) {
          return function() {
            var e2 = this, r = arguments;
            return new Promise(function(o, i) {
              var a = t2.apply(e2, r);
              function u(t3) {
                n(a, o, i, u, c, "next", t3);
              }
              function c(t3) {
                n(a, o, i, u, c, "throw", t3);
              }
              u(void 0);
            });
          };
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        function n(e2) {
          return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, t.exports.__esModule = true, t.exports.default = t.exports, n(e2);
        }
        t.exports = n, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(142);
        function o() {
          return "undefined" != typeof Reflect && Reflect.get ? (t.exports = o = Reflect.get.bind(), t.exports.__esModule = true, t.exports.default = t.exports) : (t.exports = o = function(t2, e2, n2) {
            var o2 = r(t2, e2);
            if (o2) {
              var i = Object.getOwnPropertyDescriptor(o2, e2);
              return i.get ? i.get.call(arguments.length < 3 ? t2 : n2) : i.value;
            }
          }, t.exports.__esModule = true, t.exports.default = t.exports), o.apply(this, arguments);
        }
        t.exports = o, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = typeof t2;
          return null != t2 && ("object" == e2 || "function" == e2);
        };
      }, function(t, e) {
        var n = Array.isArray;
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        e.a = { drawRect: function(t2, e2, n2, r) {
          n2.strokeStyle = r.color, n2.fillStyle = r.color, n2.lineWidth = r.lineWidth || 1, n2.beginPath(), n2.strokeRect(t2.x, t2.y, e2.x, e2.y);
        }, drawPath: function(t2, e2, n2, r) {
          n2.strokeStyle = r.color, n2.fillStyle = r.color, n2.lineWidth = r.lineWidth, n2.beginPath(), n2.moveTo(t2[0][e2.x], t2[0][e2.y]);
          for (var o = 1; o < t2.length; o++) n2.lineTo(t2[o][e2.x], t2[o][e2.y]);
          n2.closePath(), n2.stroke();
        }, drawImage: function(t2, e2, n2) {
          var r = n2.getImageData(0, 0, e2.x, e2.y), o = r.data, i = o.length, a = t2.length;
          if (i / a != 4) return false;
          for (; a--; ) {
            var u = t2[a];
            o[--i] = 255, o[--i] = u, o[--i] = u, o[--i] = u;
          }
          return n2.putImageData(r, 0, 0), true;
        } };
      }, function(t, e, n) {
        var r = n(74), o = n(129)(function(t2, e2, n2) {
          r(t2, e2, n2);
        });
        t.exports = o;
      }, function(t, e, n) {
        var r = n(44), o = "object" == typeof self && self && self.Object === Object && self, i = r || o || Function("return this")();
        t.exports = i;
      }, function(t, e) {
        t.exports = function(t2) {
          return null != t2 && "object" == typeof t2;
        };
      }, function(t, e, n) {
        "use strict";
        e.a = { searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]], create: function(t2, e2) {
          var n2, r = t2.data, o = e2.data, i = this.searchDirections, a = t2.size.x;
          function u(t3, e3, u2, c2) {
            var s, f, l;
            for (s = 0; s < i.length; s++) {
              if (f = t3.cy + i[t3.dir][0], l = t3.cx + i[t3.dir][1], r[n2 = f * a + l] === e3 && (0 === o[n2] || o[n2] === u2)) return o[n2] = u2, t3.cy = f, t3.cx = l, true;
              0 === o[n2] && (o[n2] = c2), t3.dir = (t3.dir + 1) % 8;
            }
            return false;
          }
          function c(t3, e3, n3) {
            return { dir: n3, x: t3, y: e3, next: null, prev: null };
          }
          return { trace: function(t3, e3, n3, r2) {
            return u(t3, e3, n3, r2);
          }, contourTracing: function(e3, n3, r2, o2, i2) {
            return function(e4, n4, r3, o3, i3) {
              var a2, s, f, l = null, d = { cx: n4, cy: e4, dir: 0 };
              if (u(d, o3, r3, i3)) {
                a2 = l = c(n4, e4, d.dir), f = d.dir, (s = c(d.cx, d.cy, 0)).prev = a2, a2.next = s, s.next = null, a2 = s;
                var h = t2.size.x * t2.size.y, v = 0;
                do {
                  d.dir = (d.dir + 6) % 8, u(d, o3, r3, i3), f !== d.dir ? (a2.dir = d.dir, (s = c(d.cx, d.cy, 0)).prev = a2, a2.next = s, s.next = null, a2 = s) : (a2.dir = f, a2.x = d.cx, a2.y = d.cy), f = d.dir;
                } while ((d.cx !== n4 || d.cy !== e4) && ++v < h);
                l.prev = a2.prev, a2.prev.next = l;
              }
              return l;
            }(e3, n3, r2, o2, i2);
          } };
        } };
      }, function(t, e, n) {
        var r = n(27), o = n(87), i = n(88), a = r ? r.toStringTag : void 0;
        t.exports = function(t2) {
          return null == t2 ? void 0 === t2 ? "[object Undefined]" : "[object Null]" : a && a in Object(t2) ? o(t2) : i(t2);
        };
      }, function(t, e, n) {
        "use strict";
        (function(t2) {
          var r, o, i, a, u, c, s, f, l, d, h = n(5), v = n(11), p = n(10), y = n(9), g = (n(17), n(65)), x = n(21), m = n(66);
          h.a.setMatrixArrayType(Array);
          var _, b, w = { ctx: { binary: null }, dom: { binary: null } }, O = { x: 0, y: 0 };
          function R(t3) {
            var e2, n2, o2, i2, a2, u2, c2, s2 = l.size.x, f2 = l.size.y, d2 = -l.size.x, v2 = -l.size.y;
            for (e2 = 0, n2 = 0; n2 < t3.length; n2++) e2 += (i2 = t3[n2]).rad;
            for ((e2 = (180 * (e2 /= t3.length) / Math.PI + 90) % 180 - 90) < 0 && (e2 += 180), e2 = (180 - e2) * Math.PI / 180, a2 = h.b.copy(h.b.create(), [Math.cos(e2), Math.sin(e2), -Math.sin(e2), Math.cos(e2)]), n2 = 0; n2 < t3.length; n2++) {
              for (i2 = t3[n2], o2 = 0; o2 < 4; o2++) h.c.transformMat2(i2.box[o2], i2.box[o2], a2);
              0;
            }
            for (n2 = 0; n2 < t3.length; n2++) for (i2 = t3[n2], o2 = 0; o2 < 4; o2++) i2.box[o2][0] < s2 && (s2 = i2.box[o2][0]), i2.box[o2][0] > d2 && (d2 = i2.box[o2][0]), i2.box[o2][1] < f2 && (f2 = i2.box[o2][1]), i2.box[o2][1] > v2 && (v2 = i2.box[o2][1]);
            for (u2 = [[s2, f2], [d2, f2], [d2, v2], [s2, v2]], c2 = r.halfSample ? 2 : 1, a2 = h.b.invert(a2, a2), o2 = 0; o2 < 4; o2++) h.c.transformMat2(u2[o2], u2[o2], a2);
            for (o2 = 0; o2 < 4; o2++) h.c.scale(u2[o2], u2[o2], c2);
            return u2;
          }
          function M(t3, e2) {
            l.subImageAsCopy(a, Object(p.h)(t3, e2)), b.skeletonize();
          }
          function C(t3, e2, n2, r2) {
            var o2, i2, u2, c2, s2 = [], f2 = [], l2 = Math.ceil(d.x / 3);
            if (t3.length >= 2) {
              for (o2 = 0; o2 < t3.length; o2++) t3[o2].m00 > l2 && s2.push(t3[o2]);
              if (s2.length >= 2) {
                for (u2 = function(t4) {
                  var e3 = Object(p.b)(t4, 0.9), n3 = Object(p.j)(e3, 1, function(t5) {
                    return t5.getPoints().length;
                  }), r3 = [], o3 = [];
                  if (1 === n3.length) {
                    r3 = n3[0].item.getPoints();
                    for (var i3 = 0; i3 < r3.length; i3++) o3.push(r3[i3].point);
                  }
                  return o3;
                }(s2), i2 = 0, o2 = 0; o2 < u2.length; o2++) {
                  var v2, y2;
                  i2 += null !== (v2 = null === (y2 = u2[o2]) || void 0 === y2 ? void 0 : y2.rad) && void 0 !== v2 ? v2 : 0;
                }
                u2.length > 1 && u2.length >= s2.length / 4 * 3 && u2.length > t3.length / 4 && (i2 /= u2.length, c2 = { index: e2[1] * O.x + e2[0], pos: { x: n2, y: r2 }, box: [h.c.clone([n2, r2]), h.c.clone([n2 + a.size.x, r2]), h.c.clone([n2 + a.size.x, r2 + a.size.y]), h.c.clone([n2, r2 + a.size.y])], moments: u2, rad: i2, vec: h.c.clone([Math.cos(i2), Math.sin(i2)]) }, f2.push(c2));
              }
            }
            return f2;
          }
          e.a = { init: function(e2, n2) {
            r = n2, _ = e2, function() {
              o = r.halfSample ? new v.a({ x: _.size.x / 2 | 0, y: _.size.y / 2 | 0 }) : _, d = Object(p.a)(r.patchSize, o.size), O.x = o.size.x / d.x | 0, O.y = o.size.y / d.y | 0, l = new v.a(o.size, void 0, Uint8Array, false), u = new v.a(d, void 0, Array, true);
              var e3 = new ArrayBuffer(65536);
              a = new v.a(d, new Uint8Array(e3, 0, d.x * d.y)), i = new v.a(d, new Uint8Array(e3, d.x * d.y * 3, d.x * d.y), void 0, true), b = Object(m.a)("undefined" != typeof window ? window : "undefined" != typeof self ? self : t2, { size: d.x }, e3), f = new v.a({ x: o.size.x / a.size.x | 0, y: o.size.y / a.size.y | 0 }, void 0, Array, true), c = new v.a(f.size, void 0, void 0, true), s = new v.a(f.size, void 0, Int32Array, true);
            }(), function() {
              if (!r.useWorker && "undefined" != typeof document) {
                w.dom.binary = document.createElement("canvas"), w.dom.binary.className = "binaryBuffer";
                var t3 = !!r.willReadFrequently;
                console.warn("* initCanvas willReadFrequently", t3, r), w.ctx.binary = w.dom.binary.getContext("2d", { willReadFrequently: t3 }), w.dom.binary.width = l.size.x, w.dom.binary.height = l.size.y;
              }
            }();
          }, locate: function() {
            r.halfSample && Object(p.f)(_, o), Object(p.i)(o, l), l.zeroBorder();
            var t3 = function() {
              var t4, e3, n3, r2, o2, c2, s2 = [];
              for (t4 = 0; t4 < O.x; t4++) for (e3 = 0; e3 < O.y; e3++) M(n3 = a.size.x * t4, r2 = a.size.y * e3), i.zeroBorder(), y.a.init(u.data, 0), c2 = g.a.create(i, u).rasterize(0), o2 = u.moments(c2.count), s2 = s2.concat(C(o2, [t4, e3], n3, r2));
              return s2;
            }();
            if (t3.length < O.x * O.y * 0.05) return null;
            var e2 = function(t4) {
              var e3, n3, r2 = 0, o2 = 0;
              function i2() {
                var t5;
                for (t5 = 0; t5 < s.data.length; t5++) if (0 === s.data[t5] && 1 === c.data[t5]) return t5;
                return s.data.length;
              }
              function a2(t5) {
                var e4, n4, o3, i3, u2, l2 = t5 % s.size.x, d2 = t5 / s.size.x | 0;
                if (t5 < s.data.length) for (o3 = f.data[t5], s.data[t5] = r2, u2 = 0; u2 < x.a.searchDirections.length; u2++) n4 = d2 + x.a.searchDirections[u2][0], e4 = l2 + x.a.searchDirections[u2][1], i3 = n4 * s.size.x + e4, 0 !== c.data[i3] ? 0 === s.data[i3] && Math.abs(h.c.dot(f.data[i3].vec, o3.vec)) > 0.95 && a2(i3) : s.data[i3] = Number.MAX_VALUE;
              }
              for (y.a.init(c.data, 0), y.a.init(s.data, 0), y.a.init(f.data, null), e3 = 0; e3 < t4.length; e3++) n3 = t4[e3], f.data[n3.index] = n3, c.data[n3.index] = 1;
              for (c.zeroBorder(); (o2 = i2()) < s.data.length; ) r2++, a2(o2);
              return r2;
            }(t3);
            if (e2 < 1) return null;
            var n2 = function(t4) {
              var e3, n3, r2 = [];
              for (e3 = 0; e3 < t4; e3++) r2.push(0);
              for (n3 = s.data.length; n3--; ) s.data[n3] > 0 && r2[s.data[n3] - 1]++;
              return (r2 = r2.map(function(t5, e4) {
                return { val: t5, label: e4 + 1 };
              })).sort(function(t5, e4) {
                return e4.val - t5.val;
              }), r2.filter(function(t5) {
                return t5.val >= 5;
              });
            }(e2);
            return 0 === n2.length ? null : function(t4, e3) {
              var n3, r2, o2, i2, a2 = [], u2 = [];
              for (n3 = 0; n3 < t4.length; n3++) {
                for (r2 = s.data.length, a2.length = 0; r2--; ) s.data[r2] === t4[n3].label && (o2 = f.data[r2], a2.push(o2));
                (i2 = R(a2)) && u2.push(i2);
              }
              return u2;
            }(n2);
          }, checkImageConstraints: function(t3, e2) {
            var n2, r2, o2 = t3.getWidth(), i2 = t3.getHeight(), a2 = e2.halfSample ? 0.5 : 1;
            t3.getConfig().area && (r2 = Object(p.d)(o2, i2, t3.getConfig().area), t3.setTopRight({ x: r2.sx, y: r2.sy }), t3.setCanvasSize({ x: o2, y: i2 }), o2 = r2.sw, i2 = r2.sh);
            var u2 = { x: Math.floor(o2 * a2), y: Math.floor(i2 * a2) };
            if (n2 = Object(p.a)(e2.patchSize, u2), t3.setWidth(Math.max(Math.floor(Math.floor(u2.x / n2.x) * (1 / a2) * n2.x), n2.x)), t3.setHeight(Math.max(Math.floor(Math.floor(u2.y / n2.y) * (1 / a2) * n2.y), n2.y)), t3.getWidth() % n2.x == 0 && t3.getHeight() % n2.y == 0) return true;
            throw new Error("Image dimensions do not comply with the current settings: Width (".concat(o2, " )and height (").concat(i2, ") must a multiple of ").concat(n2.x));
          } };
        }).call(this, n(45));
      }, function(t, e, n) {
        var r = n(76), o = n(77), i = n(78), a = n(79), u = n(80);
        function c(t2) {
          var e2 = -1, n2 = null == t2 ? 0 : t2.length;
          for (this.clear(); ++e2 < n2; ) {
            var r2 = t2[e2];
            this.set(r2[0], r2[1]);
          }
        }
        c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, t.exports = c;
      }, function(t, e, n) {
        var r = n(26);
        t.exports = function(t2, e2) {
          for (var n2 = t2.length; n2--; ) if (r(t2[n2][0], e2)) return n2;
          return -1;
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return t2 === e2 || t2 != t2 && e2 != e2;
        };
      }, function(t, e, n) {
        var r = n(19).Symbol;
        t.exports = r;
      }, function(t, e, n) {
        var r = n(34)(Object, "create");
        t.exports = r;
      }, function(t, e, n) {
        var r = n(101);
        t.exports = function(t2, e2) {
          var n2 = t2.__data__;
          return r(e2) ? n2["string" == typeof e2 ? "string" : "hash"] : n2.map;
        };
      }, function(t, e, n) {
        var r = n(116), o = n(20), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, c = r(/* @__PURE__ */ function() {
          return arguments;
        }()) ? r : function(t2) {
          return o(t2) && a.call(t2, "callee") && !u.call(t2, "callee");
        };
        t.exports = c;
      }, function(t, e) {
        var n = /^(?:0|[1-9]\d*)$/;
        t.exports = function(t2, e2) {
          var r = typeof t2;
          return !!(e2 = null == e2 ? 9007199254740991 : e2) && ("number" == r || "symbol" != r && n.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < e2;
        };
      }, function(t, e, n) {
        var r = n(16), o = n(149), i = n(150), a = n(153);
        t.exports = function(t2, e2) {
          return r(t2) ? t2 : o(t2, e2) ? [t2] : i(a(t2));
        };
      }, function(t, e, n) {
        var r = n(143), o = n(144), i = n(59), a = n(145);
        t.exports = function(t2) {
          return r(t2) || o(t2) || i(t2) || a();
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(86), o = n(92);
        t.exports = function(t2, e2) {
          var n2 = o(t2, e2);
          return r(n2) ? n2 : void 0;
        };
      }, function(t, e, n) {
        var r = n(22), o = n(15);
        t.exports = function(t2) {
          if (!o(t2)) return false;
          var e2 = r(t2);
          return "[object Function]" == e2 || "[object GeneratorFunction]" == e2 || "[object AsyncFunction]" == e2 || "[object Proxy]" == e2;
        };
      }, function(t, e, n) {
        var r = n(48);
        t.exports = function(t2, e2, n2) {
          "__proto__" == e2 && r ? r(t2, e2, { configurable: true, enumerable: true, value: n2, writable: true }) : t2[e2] = n2;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return t2.webpackPolyfill || (t2.deprecate = function() {
          }, t2.paths = [], t2.children || (t2.children = []), Object.defineProperty(t2, "loaded", { enumerable: true, get: function() {
            return t2.l;
          } }), Object.defineProperty(t2, "id", { enumerable: true, get: function() {
            return t2.i;
          } }), t2.webpackPolyfill = 1), t2;
        };
      }, function(t, e, n) {
        var r = n(35), o = n(39);
        t.exports = function(t2) {
          return null != t2 && o(t2.length) && !r(t2);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return "number" == typeof t2 && t2 > -1 && t2 % 1 == 0 && t2 <= 9007199254740991;
        };
      }, function(t, e) {
        function n(e2, r) {
          return t.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e3) {
            return t2.__proto__ = e3, t2;
          }, t.exports.__esModule = true, t.exports.default = t.exports, n(e2, r);
        }
        t.exports = n, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(22), o = n(20);
        t.exports = function(t2) {
          return "symbol" == typeof t2 || o(t2) && "[object Symbol]" == r(t2);
        };
      }, function(t, e, n) {
        var r = n(41);
        t.exports = function(t2) {
          if ("string" == typeof t2 || r(t2)) return t2;
          var e2 = t2 + "";
          return "0" == e2 && 1 / t2 == -1 / 0 ? "-0" : e2;
        };
      }, function(t, e, n) {
        var r = n(34)(n(19), "Map");
        t.exports = r;
      }, function(t, e, n) {
        (function(e2) {
          var n2 = "object" == typeof e2 && e2 && e2.Object === Object && e2;
          t.exports = n2;
        }).call(this, n(45));
      }, function(t, e) {
        var n;
        n = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        var r = n(93), o = n(100), i = n(102), a = n(103), u = n(104);
        function c(t2) {
          var e2 = -1, n2 = null == t2 ? 0 : t2.length;
          for (this.clear(); ++e2 < n2; ) {
            var r2 = t2[e2];
            this.set(r2[0], r2[1]);
          }
        }
        c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, t.exports = c;
      }, function(t, e, n) {
        var r = n(36), o = n(26);
        t.exports = function(t2, e2, n2) {
          (void 0 !== n2 && !o(t2[e2], n2) || void 0 === n2 && !(e2 in t2)) && r(t2, e2, n2);
        };
      }, function(t, e, n) {
        var r = n(34), o = function() {
          try {
            var t2 = r(Object, "defineProperty");
            return t2({}, "", {}), t2;
          } catch (t3) {
          }
        }();
        t.exports = o;
      }, function(t, e, n) {
        var r = n(115)(Object.getPrototypeOf, Object);
        t.exports = r;
      }, function(t, e) {
        var n = Object.prototype;
        t.exports = function(t2) {
          var e2 = t2 && t2.constructor;
          return t2 === ("function" == typeof e2 && e2.prototype || n);
        };
      }, function(t, e, n) {
        (function(t2) {
          var r = n(19), o = n(118), i = e && !e.nodeType && e, a = i && "object" == typeof t2 && t2 && !t2.nodeType && t2, u = a && a.exports === i ? r.Buffer : void 0, c = (u ? u.isBuffer : void 0) || o;
          t2.exports = c;
        }).call(this, n(37)(t));
      }, function(t, e, n) {
        var r = n(120), o = n(121), i = n(122), a = i && i.isTypedArray, u = a ? o(a) : r;
        t.exports = u;
      }, function(t, e) {
        t.exports = function(t2, e2) {
          if (("constructor" !== e2 || "function" != typeof t2[e2]) && "__proto__" != e2) return t2[e2];
        };
      }, function(t, e, n) {
        var r = n(36), o = n(26), i = Object.prototype.hasOwnProperty;
        t.exports = function(t2, e2, n2) {
          var a = t2[e2];
          i.call(t2, e2) && o(a, n2) && (void 0 !== n2 || e2 in t2) || r(t2, e2, n2);
        };
      }, function(t, e, n) {
        var r = n(125), o = n(127), i = n(38);
        t.exports = function(t2) {
          return i(t2) ? r(t2, true) : o(t2);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return t2;
        };
      }, function(t, e, n) {
        var r = n(131), o = Math.max;
        t.exports = function(t2, e2, n2) {
          return e2 = o(void 0 === e2 ? t2.length - 1 : e2, 0), function() {
            for (var i = arguments, a = -1, u = o(i.length - e2, 0), c = Array(u); ++a < u; ) c[a] = i[e2 + a];
            a = -1;
            for (var s = Array(e2 + 1); ++a < e2; ) s[a] = i[a];
            return s[e2] = n2(c), r(t2, this, s);
          };
        };
      }, function(t, e, n) {
        var r = n(132), o = n(134)(r);
        t.exports = o;
      }, function(t, e, n) {
        var r = n(60);
        t.exports = function(t2, e2) {
          if (t2) {
            if ("string" == typeof t2) return r(t2, e2);
            var n2 = Object.prototype.toString.call(t2).slice(8, -1);
            return "Object" === n2 && t2.constructor && (n2 = t2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? r(t2, e2) : void 0;
          }
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n = 0, r = new Array(e2); n < e2; n++) r[n] = t2[n];
          return r;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(13).default, o = n(140);
        t.exports = function(t2) {
          var e2 = o(t2, "string");
          return "symbol" === r(e2) ? e2 : String(e2);
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(137), o = n(138), i = n(59), a = n(139);
        t.exports = function(t2, e2) {
          return r(t2) || o(t2, e2) || i(t2, e2) || a();
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(146), o = n(160)(function(t2, e2) {
          return null == t2 ? {} : r(t2, e2);
        });
        t.exports = o;
      }, function(t, e, n) {
        var r = n(2), o = n(40), i = n(165), a = n(166);
        function u(e2) {
          var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return t.exports = u = function(t2) {
            if (null === t2 || !i(t2)) return t2;
            if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n2) {
              if (n2.has(t2)) return n2.get(t2);
              n2.set(t2, e3);
            }
            function e3() {
              return a(t2, arguments, r(this).constructor);
            }
            return e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), o(e3, t2);
          }, t.exports.__esModule = true, t.exports.default = t.exports, u(e2);
        }
        t.exports = u, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        "use strict";
        var r = n(21), o = { createContour2D: function() {
          return { dir: null, index: null, firstVertex: null, insideContours: null, nextpeer: null, prevpeer: null };
        }, CONTOUR_DIR: { CW_DIR: 0, CCW_DIR: 1, UNKNOWN_DIR: 2 }, DIR: { OUTSIDE_EDGE: -32767, INSIDE_EDGE: -32766 }, create: function(t2, e2) {
          var n2 = t2.data, i = e2.data, a = t2.size.x, u = t2.size.y, c = r.a.create(t2, e2);
          return { rasterize: function(t3) {
            var e3, r2, s, f, l, d, h, v, p, y, g, x, m = [], _ = 0;
            for (x = 0; x < 400; x++) m[x] = 0;
            for (m[0] = n2[0], p = null, d = 1; d < u - 1; d++) for (f = 0, r2 = m[0], l = 1; l < a - 1; l++) if (0 === i[g = d * a + l]) if ((e3 = n2[g]) !== r2) {
              if (0 === f) m[s = _ + 1] = e3, r2 = e3, null !== (h = c.contourTracing(d, l, s, e3, o.DIR.OUTSIDE_EDGE)) && (_++, f = s, (v = o.createContour2D()).dir = o.CONTOUR_DIR.CW_DIR, v.index = f, v.firstVertex = h, v.nextpeer = p, v.insideContours = null, null !== p && (p.prevpeer = v), p = v);
              else if (null !== (h = c.contourTracing(d, l, o.DIR.INSIDE_EDGE, e3, f))) {
                for ((v = o.createContour2D()).firstVertex = h, v.insideContours = null, v.dir = 0 === t3 ? o.CONTOUR_DIR.CCW_DIR : o.CONTOUR_DIR.CW_DIR, v.index = t3, y = p; null !== y && y.index !== f; ) y = y.nextpeer;
                null !== y && (v.nextpeer = y.insideContours, null !== y.insideContours && (y.insideContours.prevpeer = v), y.insideContours = v);
              }
            } else i[g] = f;
            else i[g] === o.DIR.OUTSIDE_EDGE || i[g] === o.DIR.INSIDE_EDGE ? (f = 0, r2 = i[g] === o.DIR.INSIDE_EDGE ? n2[g] : m[0]) : r2 = m[f = i[g]];
            for (y = p; null !== y; ) y.index = t3, y = y.nextpeer;
            return { cc: p, count: _ };
          }, debug: { drawContour: function(t3, e3) {
            var n3, r2, i2, a2 = t3.getContext("2d"), u2 = e3;
            for (a2.strokeStyle = "red", a2.fillStyle = "red", a2.lineWidth = 1, n3 = null !== u2 ? u2.insideContours : null; null !== u2; ) {
              switch (null !== n3 ? (r2 = n3, n3 = n3.nextpeer) : (r2 = u2, n3 = null !== (u2 = u2.nextpeer) ? u2.insideContours : null), r2.dir) {
                case o.CONTOUR_DIR.CW_DIR:
                  a2.strokeStyle = "red";
                  break;
                case o.CONTOUR_DIR.CCW_DIR:
                  a2.strokeStyle = "blue";
                  break;
                case o.CONTOUR_DIR.UNKNOWN_DIR:
                  a2.strokeStyle = "green";
              }
              i2 = r2.firstVertex, a2.beginPath(), a2.moveTo(i2.x, i2.y);
              do {
                i2 = i2.next, a2.lineTo(i2.x, i2.y);
              } while (i2 !== r2.firstVertex);
              a2.stroke();
            }
          } } };
        } };
        e.a = o;
      }, function(t, e, n) {
        "use strict";
        e.a = function(t2, e2, n2) {
          ;
          var r = new t2.Uint8Array(n2), o = e2.size | 0, i = t2.Math.imul;
          function a(t3, e3) {
            t3 |= 0;
            e3 |= 0;
            var n3 = 0;
            var i2 = 0;
            var a2 = 0;
            var u2 = 0;
            var c2 = 0;
            var s2 = 0;
            var f2 = 0;
            var l2 = 0;
            for (n3 = 1; (n3 | 0) < (o - 1 | 0); n3 = n3 + 1 | 0) {
              l2 = l2 + o | 0;
              for (i2 = 1; (i2 | 0) < (o - 1 | 0); i2 = i2 + 1 | 0) {
                u2 = l2 - o | 0;
                c2 = l2 + o | 0;
                s2 = i2 - 1 | 0;
                f2 = i2 + 1 | 0;
                a2 = (r[t3 + u2 + s2 | 0] | 0) + (r[t3 + u2 + f2 | 0] | 0) + (r[t3 + l2 + i2 | 0] | 0) + (r[t3 + c2 + s2 | 0] | 0) + (r[t3 + c2 + f2 | 0] | 0) | 0;
                if ((a2 | 0) == (5 | 0)) {
                  r[e3 + l2 + i2 | 0] = 1;
                } else {
                  r[e3 + l2 + i2 | 0] = 0;
                }
              }
            }
          }
          function u(t3, e3, n3) {
            t3 |= 0;
            e3 |= 0;
            n3 |= 0;
            var a2 = 0;
            a2 = i(o, o) | 0;
            while ((a2 | 0) > 0) {
              a2 = a2 - 1 | 0;
              r[n3 + a2 | 0] = (r[t3 + a2 | 0] | 0) - (r[e3 + a2 | 0] | 0) | 0;
            }
          }
          function c(t3, e3, n3) {
            t3 |= 0;
            e3 |= 0;
            n3 |= 0;
            var a2 = 0;
            a2 = i(o, o) | 0;
            while ((a2 | 0) > 0) {
              a2 = a2 - 1 | 0;
              r[n3 + a2 | 0] = r[t3 + a2 | 0] | 0 | (r[e3 + a2 | 0] | 0) | 0;
            }
          }
          function s(t3) {
            t3 |= 0;
            var e3 = 0;
            var n3 = 0;
            n3 = i(o, o) | 0;
            while ((n3 | 0) > 0) {
              n3 = n3 - 1 | 0;
              e3 = (e3 | 0) + (r[t3 + n3 | 0] | 0) | 0;
            }
            return e3 | 0;
          }
          function f(t3, e3) {
            t3 |= 0;
            e3 |= 0;
            var n3 = 0;
            n3 = i(o, o) | 0;
            while ((n3 | 0) > 0) {
              n3 = n3 - 1 | 0;
              r[t3 + n3 | 0] = e3;
            }
          }
          function l(t3, e3) {
            t3 |= 0;
            e3 |= 0;
            var n3 = 0;
            var i2 = 0;
            var a2 = 0;
            var u2 = 0;
            var c2 = 0;
            var s2 = 0;
            var f2 = 0;
            var l2 = 0;
            for (n3 = 1; (n3 | 0) < (o - 1 | 0); n3 = n3 + 1 | 0) {
              l2 = l2 + o | 0;
              for (i2 = 1; (i2 | 0) < (o - 1 | 0); i2 = i2 + 1 | 0) {
                u2 = l2 - o | 0;
                c2 = l2 + o | 0;
                s2 = i2 - 1 | 0;
                f2 = i2 + 1 | 0;
                a2 = (r[t3 + u2 + s2 | 0] | 0) + (r[t3 + u2 + f2 | 0] | 0) + (r[t3 + l2 + i2 | 0] | 0) + (r[t3 + c2 + s2 | 0] | 0) + (r[t3 + c2 + f2 | 0] | 0) | 0;
                if ((a2 | 0) > (0 | 0)) {
                  r[e3 + l2 + i2 | 0] = 1;
                } else {
                  r[e3 + l2 + i2 | 0] = 0;
                }
              }
            }
          }
          function d(t3, e3) {
            t3 |= 0;
            e3 |= 0;
            var n3 = 0;
            n3 = i(o, o) | 0;
            while ((n3 | 0) > 0) {
              n3 = n3 - 1 | 0;
              r[e3 + n3 | 0] = r[t3 + n3 | 0] | 0;
            }
          }
          function h(t3) {
            t3 |= 0;
            var e3 = 0;
            var n3 = 0;
            for (e3 = 0; (e3 | 0) < (o - 1 | 0); e3 = e3 + 1 | 0) {
              r[t3 + e3 | 0] = 0;
              r[t3 + n3 | 0] = 0;
              n3 = n3 + o - 1 | 0;
              r[t3 + n3 | 0] = 0;
              n3 = n3 + 1 | 0;
            }
            for (e3 = 0; (e3 | 0) < (o | 0); e3 = e3 + 1 | 0) {
              r[t3 + n3 | 0] = 0;
              n3 = n3 + 1 | 0;
            }
          }
          function v() {
            var t3 = 0;
            var e3 = 0;
            var n3 = 0;
            var r2 = 0;
            var v2 = 0;
            var p = 0;
            e3 = i(o, o) | 0;
            n3 = e3 + e3 | 0;
            r2 = n3 + e3 | 0;
            f(r2, 0);
            h(t3);
            do {
              a(t3, e3);
              l(e3, n3);
              u(t3, n3, n3);
              c(r2, n3, r2);
              d(e3, t3);
              v2 = s(t3) | 0;
              p = (v2 | 0) == 0 | 0;
            } while (!p);
          }
          return { skeletonize: v };
        };
      }, , , , , , , function(t, e, n) {
        t.exports = n(168);
      }, function(t, e, n) {
        var r = n(75), o = n(47), i = n(105), a = n(107), u = n(15), c = n(55), s = n(53);
        t.exports = function t2(e2, n2, f, l, d) {
          e2 !== n2 && i(n2, function(i2, c2) {
            if (d || (d = new r()), u(i2)) a(e2, n2, c2, f, t2, l, d);
            else {
              var h = l ? l(s(e2, c2), i2, c2 + "", e2, n2, d) : void 0;
              void 0 === h && (h = i2), o(e2, c2, h);
            }
          }, c);
        };
      }, function(t, e, n) {
        var r = n(24), o = n(81), i = n(82), a = n(83), u = n(84), c = n(85);
        function s(t2) {
          var e2 = this.__data__ = new r(t2);
          this.size = e2.size;
        }
        s.prototype.clear = o, s.prototype.delete = i, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s;
      }, function(t, e) {
        t.exports = function() {
          this.__data__ = [], this.size = 0;
        };
      }, function(t, e, n) {
        var r = n(25), o = Array.prototype.splice;
        t.exports = function(t2) {
          var e2 = this.__data__, n2 = r(e2, t2);
          return !(n2 < 0) && (n2 == e2.length - 1 ? e2.pop() : o.call(e2, n2, 1), --this.size, true);
        };
      }, function(t, e, n) {
        var r = n(25);
        t.exports = function(t2) {
          var e2 = this.__data__, n2 = r(e2, t2);
          return n2 < 0 ? void 0 : e2[n2][1];
        };
      }, function(t, e, n) {
        var r = n(25);
        t.exports = function(t2) {
          return r(this.__data__, t2) > -1;
        };
      }, function(t, e, n) {
        var r = n(25);
        t.exports = function(t2, e2) {
          var n2 = this.__data__, o = r(n2, t2);
          return o < 0 ? (++this.size, n2.push([t2, e2])) : n2[o][1] = e2, this;
        };
      }, function(t, e, n) {
        var r = n(24);
        t.exports = function() {
          this.__data__ = new r(), this.size = 0;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = this.__data__, n = e2.delete(t2);
          return this.size = e2.size, n;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return this.__data__.get(t2);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return this.__data__.has(t2);
        };
      }, function(t, e, n) {
        var r = n(24), o = n(43), i = n(46);
        t.exports = function(t2, e2) {
          var n2 = this.__data__;
          if (n2 instanceof r) {
            var a = n2.__data__;
            if (!o || a.length < 199) return a.push([t2, e2]), this.size = ++n2.size, this;
            n2 = this.__data__ = new i(a);
          }
          return n2.set(t2, e2), this.size = n2.size, this;
        };
      }, function(t, e, n) {
        var r = n(35), o = n(89), i = n(15), a = n(91), u = /^\[object .+?Constructor\]$/, c = Function.prototype, s = Object.prototype, f = c.toString, l = s.hasOwnProperty, d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function(t2) {
          return !(!i(t2) || o(t2)) && (r(t2) ? d : u).test(a(t2));
        };
      }, function(t, e, n) {
        var r = n(27), o = Object.prototype, i = o.hasOwnProperty, a = o.toString, u = r ? r.toStringTag : void 0;
        t.exports = function(t2) {
          var e2 = i.call(t2, u), n2 = t2[u];
          try {
            t2[u] = void 0;
            var r2 = true;
          } catch (t3) {
          }
          var o2 = a.call(t2);
          return r2 && (e2 ? t2[u] = n2 : delete t2[u]), o2;
        };
      }, function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t2) {
          return n.call(t2);
        };
      }, function(t, e, n) {
        var r, o = n(90), i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function(t2) {
          return !!i && i in t2;
        };
      }, function(t, e, n) {
        var r = n(19)["__core-js_shared__"];
        t.exports = r;
      }, function(t, e) {
        var n = Function.prototype.toString;
        t.exports = function(t2) {
          if (null != t2) {
            try {
              return n.call(t2);
            } catch (t3) {
            }
            try {
              return t2 + "";
            } catch (t3) {
            }
          }
          return "";
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return null == t2 ? void 0 : t2[e2];
        };
      }, function(t, e, n) {
        var r = n(94), o = n(24), i = n(43);
        t.exports = function() {
          this.size = 0, this.__data__ = { hash: new r(), map: new (i || o)(), string: new r() };
        };
      }, function(t, e, n) {
        var r = n(95), o = n(96), i = n(97), a = n(98), u = n(99);
        function c(t2) {
          var e2 = -1, n2 = null == t2 ? 0 : t2.length;
          for (this.clear(); ++e2 < n2; ) {
            var r2 = t2[e2];
            this.set(r2[0], r2[1]);
          }
        }
        c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, t.exports = c;
      }, function(t, e, n) {
        var r = n(28);
        t.exports = function() {
          this.__data__ = r ? r(null) : {}, this.size = 0;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = this.has(t2) && delete this.__data__[t2];
          return this.size -= e2 ? 1 : 0, e2;
        };
      }, function(t, e, n) {
        var r = n(28), o = Object.prototype.hasOwnProperty;
        t.exports = function(t2) {
          var e2 = this.__data__;
          if (r) {
            var n2 = e2[t2];
            return "__lodash_hash_undefined__" === n2 ? void 0 : n2;
          }
          return o.call(e2, t2) ? e2[t2] : void 0;
        };
      }, function(t, e, n) {
        var r = n(28), o = Object.prototype.hasOwnProperty;
        t.exports = function(t2) {
          var e2 = this.__data__;
          return r ? void 0 !== e2[t2] : o.call(e2, t2);
        };
      }, function(t, e, n) {
        var r = n(28);
        t.exports = function(t2, e2) {
          var n2 = this.__data__;
          return this.size += this.has(t2) ? 0 : 1, n2[t2] = r && void 0 === e2 ? "__lodash_hash_undefined__" : e2, this;
        };
      }, function(t, e, n) {
        var r = n(29);
        t.exports = function(t2) {
          var e2 = r(this, t2).delete(t2);
          return this.size -= e2 ? 1 : 0, e2;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = typeof t2;
          return "string" == e2 || "number" == e2 || "symbol" == e2 || "boolean" == e2 ? "__proto__" !== t2 : null === t2;
        };
      }, function(t, e, n) {
        var r = n(29);
        t.exports = function(t2) {
          return r(this, t2).get(t2);
        };
      }, function(t, e, n) {
        var r = n(29);
        t.exports = function(t2) {
          return r(this, t2).has(t2);
        };
      }, function(t, e, n) {
        var r = n(29);
        t.exports = function(t2, e2) {
          var n2 = r(this, t2), o = n2.size;
          return n2.set(t2, e2), this.size += n2.size == o ? 0 : 1, this;
        };
      }, function(t, e, n) {
        var r = n(106)();
        t.exports = r;
      }, function(t, e) {
        t.exports = function(t2) {
          return function(e2, n, r) {
            for (var o = -1, i = Object(e2), a = r(e2), u = a.length; u--; ) {
              var c = a[t2 ? u : ++o];
              if (false === n(i[c], c, i)) break;
            }
            return e2;
          };
        };
      }, function(t, e, n) {
        var r = n(47), o = n(108), i = n(109), a = n(112), u = n(113), c = n(30), s = n(16), f = n(117), l = n(51), d = n(35), h = n(15), v = n(119), p = n(52), y = n(53), g = n(123);
        t.exports = function(t2, e2, n2, x, m, _, b) {
          var w = y(t2, n2), O = y(e2, n2), R = b.get(O);
          if (R) r(t2, n2, R);
          else {
            var M = _ ? _(w, O, n2 + "", t2, e2, b) : void 0, C = void 0 === M;
            if (C) {
              var E = s(O), A = !E && l(O), S = !E && !A && p(O);
              M = O, E || A || S ? s(w) ? M = w : f(w) ? M = a(w) : A ? (C = false, M = o(O, true)) : S ? (C = false, M = i(O, true)) : M = [] : v(O) || c(O) ? (M = w, c(w) ? M = g(w) : h(w) && !d(w) || (M = u(O))) : C = false;
            }
            C && (b.set(O, M), m(M, O, x, _, b), b.delete(O)), r(t2, n2, M);
          }
        };
      }, function(t, e, n) {
        (function(t2) {
          var r = n(19), o = e && !e.nodeType && e, i = o && "object" == typeof t2 && t2 && !t2.nodeType && t2, a = i && i.exports === o ? r.Buffer : void 0, u = a ? a.allocUnsafe : void 0;
          t2.exports = function(t3, e2) {
            if (e2) return t3.slice();
            var n2 = t3.length, r2 = u ? u(n2) : new t3.constructor(n2);
            return t3.copy(r2), r2;
          };
        }).call(this, n(37)(t));
      }, function(t, e, n) {
        var r = n(110);
        t.exports = function(t2, e2) {
          var n2 = e2 ? r(t2.buffer) : t2.buffer;
          return new t2.constructor(n2, t2.byteOffset, t2.length);
        };
      }, function(t, e, n) {
        var r = n(111);
        t.exports = function(t2) {
          var e2 = new t2.constructor(t2.byteLength);
          return new r(e2).set(new r(t2)), e2;
        };
      }, function(t, e, n) {
        var r = n(19).Uint8Array;
        t.exports = r;
      }, function(t, e) {
        t.exports = function(t2, e2) {
          var n = -1, r = t2.length;
          for (e2 || (e2 = Array(r)); ++n < r; ) e2[n] = t2[n];
          return e2;
        };
      }, function(t, e, n) {
        var r = n(114), o = n(49), i = n(50);
        t.exports = function(t2) {
          return "function" != typeof t2.constructor || i(t2) ? {} : r(o(t2));
        };
      }, function(t, e, n) {
        var r = n(15), o = Object.create, i = /* @__PURE__ */ function() {
          function t2() {
          }
          return function(e2) {
            if (!r(e2)) return {};
            if (o) return o(e2);
            t2.prototype = e2;
            var n2 = new t2();
            return t2.prototype = void 0, n2;
          };
        }();
        t.exports = i;
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return function(n) {
            return t2(e2(n));
          };
        };
      }, function(t, e, n) {
        var r = n(22), o = n(20);
        t.exports = function(t2) {
          return o(t2) && "[object Arguments]" == r(t2);
        };
      }, function(t, e, n) {
        var r = n(38), o = n(20);
        t.exports = function(t2) {
          return o(t2) && r(t2);
        };
      }, function(t, e) {
        t.exports = function() {
          return false;
        };
      }, function(t, e, n) {
        var r = n(22), o = n(49), i = n(20), a = Function.prototype, u = Object.prototype, c = a.toString, s = u.hasOwnProperty, f = c.call(Object);
        t.exports = function(t2) {
          if (!i(t2) || "[object Object]" != r(t2)) return false;
          var e2 = o(t2);
          if (null === e2) return true;
          var n2 = s.call(e2, "constructor") && e2.constructor;
          return "function" == typeof n2 && n2 instanceof n2 && c.call(n2) == f;
        };
      }, function(t, e, n) {
        var r = n(22), o = n(39), i = n(20), a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = true, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = false, t.exports = function(t2) {
          return i(t2) && o(t2.length) && !!a[r(t2)];
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return function(e2) {
            return t2(e2);
          };
        };
      }, function(t, e, n) {
        (function(t2) {
          var r = n(44), o = e && !e.nodeType && e, i = o && "object" == typeof t2 && t2 && !t2.nodeType && t2, a = i && i.exports === o && r.process, u = function() {
            try {
              var t3 = i && i.require && i.require("util").types;
              return t3 || a && a.binding && a.binding("util");
            } catch (t4) {
            }
          }();
          t2.exports = u;
        }).call(this, n(37)(t));
      }, function(t, e, n) {
        var r = n(124), o = n(55);
        t.exports = function(t2) {
          return r(t2, o(t2));
        };
      }, function(t, e, n) {
        var r = n(54), o = n(36);
        t.exports = function(t2, e2, n2, i) {
          var a = !n2;
          n2 || (n2 = {});
          for (var u = -1, c = e2.length; ++u < c; ) {
            var s = e2[u], f = i ? i(n2[s], t2[s], s, n2, t2) : void 0;
            void 0 === f && (f = t2[s]), a ? o(n2, s, f) : r(n2, s, f);
          }
          return n2;
        };
      }, function(t, e, n) {
        var r = n(126), o = n(30), i = n(16), a = n(51), u = n(31), c = n(52), s = Object.prototype.hasOwnProperty;
        t.exports = function(t2, e2) {
          var n2 = i(t2), f = !n2 && o(t2), l = !n2 && !f && a(t2), d = !n2 && !f && !l && c(t2), h = n2 || f || l || d, v = h ? r(t2.length, String) : [], p = v.length;
          for (var y in t2) !e2 && !s.call(t2, y) || h && ("length" == y || l && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, p)) || v.push(y);
          return v;
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          for (var n = -1, r = Array(t2); ++n < t2; ) r[n] = e2(n);
          return r;
        };
      }, function(t, e, n) {
        var r = n(15), o = n(50), i = n(128), a = Object.prototype.hasOwnProperty;
        t.exports = function(t2) {
          if (!r(t2)) return i(t2);
          var e2 = o(t2), n2 = [];
          for (var u in t2) ("constructor" != u || !e2 && a.call(t2, u)) && n2.push(u);
          return n2;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = [];
          if (null != t2) for (var n in Object(t2)) e2.push(n);
          return e2;
        };
      }, function(t, e, n) {
        var r = n(130), o = n(135);
        t.exports = function(t2) {
          return r(function(e2, n2) {
            var r2 = -1, i = n2.length, a = i > 1 ? n2[i - 1] : void 0, u = i > 2 ? n2[2] : void 0;
            for (a = t2.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(n2[0], n2[1], u) && (a = i < 3 ? void 0 : a, i = 1), e2 = Object(e2); ++r2 < i; ) {
              var c = n2[r2];
              c && t2(e2, c, r2, a);
            }
            return e2;
          });
        };
      }, function(t, e, n) {
        var r = n(56), o = n(57), i = n(58);
        t.exports = function(t2, e2) {
          return i(o(t2, e2, r), t2 + "");
        };
      }, function(t, e) {
        t.exports = function(t2, e2, n) {
          switch (n.length) {
            case 0:
              return t2.call(e2);
            case 1:
              return t2.call(e2, n[0]);
            case 2:
              return t2.call(e2, n[0], n[1]);
            case 3:
              return t2.call(e2, n[0], n[1], n[2]);
          }
          return t2.apply(e2, n);
        };
      }, function(t, e, n) {
        var r = n(133), o = n(48), i = n(56), a = o ? function(t2, e2) {
          return o(t2, "toString", { configurable: true, enumerable: false, value: r(e2), writable: true });
        } : i;
        t.exports = a;
      }, function(t, e) {
        t.exports = function(t2) {
          return function() {
            return t2;
          };
        };
      }, function(t, e) {
        var n = Date.now;
        t.exports = function(t2) {
          var e2 = 0, r = 0;
          return function() {
            var o = n(), i = 16 - (o - r);
            if (r = o, i > 0) {
              if (++e2 >= 800) return arguments[0];
            } else e2 = 0;
            return t2.apply(void 0, arguments);
          };
        };
      }, function(t, e, n) {
        var r = n(26), o = n(38), i = n(31), a = n(15);
        t.exports = function(t2, e2, n2) {
          if (!a(n2)) return false;
          var u = typeof e2;
          return !!("number" == u ? o(n2) && i(e2, n2.length) : "string" == u && e2 in n2) && r(n2[e2], t2);
        };
      }, function(t, e) {
        "undefined" != typeof window && (window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t2) {
          window.setTimeout(t2, 1e3 / 60);
        })), "function" != typeof Math.imul && (Math.imul = function(t2, e2) {
          var n = 65535 & t2, r = 65535 & e2;
          return n * r + ((t2 >>> 16 & 65535) * r + n * (e2 >>> 16 & 65535) << 16 >>> 0) | 0;
        }), "function" != typeof Object.assign && (Object.assign = function(t2) {
          "use strict";
          if (null === t2) throw new TypeError("Cannot convert undefined or null to object");
          for (var e2 = Object(t2), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (null !== r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e2[o] = r[o]);
          }
          return e2;
        });
      }, function(t, e) {
        t.exports = function(t2) {
          if (Array.isArray(t2)) return t2;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function(t2, e2) {
          var n = null == t2 ? null : "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
          if (null != n) {
            var r, o, i, a, u = [], c = true, s = false;
            try {
              if (i = (n = n.call(t2)).next, 0 === e2) {
                if (Object(n) !== n) return;
                c = false;
              } else for (; !(c = (r = i.call(n)).done) && (u.push(r.value), u.length !== e2); c = true) ;
            } catch (t3) {
              s = true, o = t3;
            } finally {
              try {
                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return;
              } finally {
                if (s) throw o;
              }
            }
            return u;
          }
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(13).default;
        t.exports = function(t2, e2) {
          if ("object" !== r(t2) || null === t2) return t2;
          var n2 = t2[Symbol.toPrimitive];
          if (void 0 !== n2) {
            var o = n2.call(t2, e2 || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e2 ? String : Number)(t2);
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(13).default;
        function o() {
          "use strict";
          t.exports = o = function() {
            return n2;
          }, t.exports.__esModule = true, t.exports.default = t.exports;
          var e2, n2 = {}, i = Object.prototype, a = i.hasOwnProperty, u = Object.defineProperty || function(t2, e3, n3) {
            t2[e3] = n3.value;
          }, c = "function" == typeof Symbol ? Symbol : {}, s = c.iterator || "@@iterator", f = c.asyncIterator || "@@asyncIterator", l = c.toStringTag || "@@toStringTag";
          function d(t2, e3, n3) {
            return Object.defineProperty(t2, e3, { value: n3, enumerable: true, configurable: true, writable: true }), t2[e3];
          }
          try {
            d({}, "");
          } catch (e3) {
            d = function(t2, e4, n3) {
              return t2[e4] = n3;
            };
          }
          function h(t2, e3, n3, r2) {
            var o2 = e3 && e3.prototype instanceof m ? e3 : m, i2 = Object.create(o2.prototype), a2 = new T(r2 || []);
            return u(i2, "_invoke", { value: A(t2, n3, a2) }), i2;
          }
          function v(t2, e3, n3) {
            try {
              return { type: "normal", arg: t2.call(e3, n3) };
            } catch (t3) {
              return { type: "throw", arg: t3 };
            }
          }
          n2.wrap = h;
          var p = "suspendedStart", y = "executing", g = "completed", x = {};
          function m() {
          }
          function _() {
          }
          function b() {
          }
          var w = {};
          d(w, s, function() {
            return this;
          });
          var O = Object.getPrototypeOf, R = O && O(O(D([])));
          R && R !== i && a.call(R, s) && (w = R);
          var M = b.prototype = m.prototype = Object.create(w);
          function C(t2) {
            ["next", "throw", "return"].forEach(function(e3) {
              d(t2, e3, function(t3) {
                return this._invoke(e3, t3);
              });
            });
          }
          function E(t2, e3) {
            function n3(o3, i2, u2, c2) {
              var s2 = v(t2[o3], t2, i2);
              if ("throw" !== s2.type) {
                var f2 = s2.arg, l2 = f2.value;
                return l2 && "object" == r(l2) && a.call(l2, "__await") ? e3.resolve(l2.__await).then(function(t3) {
                  n3("next", t3, u2, c2);
                }, function(t3) {
                  n3("throw", t3, u2, c2);
                }) : e3.resolve(l2).then(function(t3) {
                  f2.value = t3, u2(f2);
                }, function(t3) {
                  return n3("throw", t3, u2, c2);
                });
              }
              c2(s2.arg);
            }
            var o2;
            u(this, "_invoke", { value: function(t3, r2) {
              function i2() {
                return new e3(function(e4, o3) {
                  n3(t3, r2, e4, o3);
                });
              }
              return o2 = o2 ? o2.then(i2, i2) : i2();
            } });
          }
          function A(t2, n3, r2) {
            var o2 = p;
            return function(i2, a2) {
              if (o2 === y) throw new Error("Generator is already running");
              if (o2 === g) {
                if ("throw" === i2) throw a2;
                return { value: e2, done: true };
              }
              for (r2.method = i2, r2.arg = a2; ; ) {
                var u2 = r2.delegate;
                if (u2) {
                  var c2 = S(u2, r2);
                  if (c2) {
                    if (c2 === x) continue;
                    return c2;
                  }
                }
                if ("next" === r2.method) r2.sent = r2._sent = r2.arg;
                else if ("throw" === r2.method) {
                  if (o2 === p) throw o2 = g, r2.arg;
                  r2.dispatchException(r2.arg);
                } else "return" === r2.method && r2.abrupt("return", r2.arg);
                o2 = y;
                var s2 = v(t2, n3, r2);
                if ("normal" === s2.type) {
                  if (o2 = r2.done ? g : "suspendedYield", s2.arg === x) continue;
                  return { value: s2.arg, done: r2.done };
                }
                "throw" === s2.type && (o2 = g, r2.method = "throw", r2.arg = s2.arg);
              }
            };
          }
          function S(t2, n3) {
            var r2 = n3.method, o2 = t2.iterator[r2];
            if (o2 === e2) return n3.delegate = null, "throw" === r2 && t2.iterator.return && (n3.method = "return", n3.arg = e2, S(t2, n3), "throw" === n3.method) || "return" !== r2 && (n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a '" + r2 + "' method")), x;
            var i2 = v(o2, t2.iterator, n3.arg);
            if ("throw" === i2.type) return n3.method = "throw", n3.arg = i2.arg, n3.delegate = null, x;
            var a2 = i2.arg;
            return a2 ? a2.done ? (n3[t2.resultName] = a2.value, n3.next = t2.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e2), n3.delegate = null, x) : a2 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, x);
          }
          function k(t2) {
            var e3 = { tryLoc: t2[0] };
            1 in t2 && (e3.catchLoc = t2[1]), 2 in t2 && (e3.finallyLoc = t2[2], e3.afterLoc = t2[3]), this.tryEntries.push(e3);
          }
          function P(t2) {
            var e3 = t2.completion || {};
            e3.type = "normal", delete e3.arg, t2.completion = e3;
          }
          function T(t2) {
            this.tryEntries = [{ tryLoc: "root" }], t2.forEach(k, this), this.reset(true);
          }
          function D(t2) {
            if (t2 || "" === t2) {
              var n3 = t2[s];
              if (n3) return n3.call(t2);
              if ("function" == typeof t2.next) return t2;
              if (!isNaN(t2.length)) {
                var o2 = -1, i2 = function n4() {
                  for (; ++o2 < t2.length; ) if (a.call(t2, o2)) return n4.value = t2[o2], n4.done = false, n4;
                  return n4.value = e2, n4.done = true, n4;
                };
                return i2.next = i2;
              }
            }
            throw new TypeError(r(t2) + " is not iterable");
          }
          return _.prototype = b, u(M, "constructor", { value: b, configurable: true }), u(b, "constructor", { value: _, configurable: true }), _.displayName = d(b, l, "GeneratorFunction"), n2.isGeneratorFunction = function(t2) {
            var e3 = "function" == typeof t2 && t2.constructor;
            return !!e3 && (e3 === _ || "GeneratorFunction" === (e3.displayName || e3.name));
          }, n2.mark = function(t2) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t2, b) : (t2.__proto__ = b, d(t2, l, "GeneratorFunction")), t2.prototype = Object.create(M), t2;
          }, n2.awrap = function(t2) {
            return { __await: t2 };
          }, C(E.prototype), d(E.prototype, f, function() {
            return this;
          }), n2.AsyncIterator = E, n2.async = function(t2, e3, r2, o2, i2) {
            void 0 === i2 && (i2 = Promise);
            var a2 = new E(h(t2, e3, r2, o2), i2);
            return n2.isGeneratorFunction(e3) ? a2 : a2.next().then(function(t3) {
              return t3.done ? t3.value : a2.next();
            });
          }, C(M), d(M, l, "Generator"), d(M, s, function() {
            return this;
          }), d(M, "toString", function() {
            return "[object Generator]";
          }), n2.keys = function(t2) {
            var e3 = Object(t2), n3 = [];
            for (var r2 in e3) n3.push(r2);
            return n3.reverse(), function t3() {
              for (; n3.length; ) {
                var r3 = n3.pop();
                if (r3 in e3) return t3.value = r3, t3.done = false, t3;
              }
              return t3.done = true, t3;
            };
          }, n2.values = D, T.prototype = { constructor: T, reset: function(t2) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e2, this.done = false, this.delegate = null, this.method = "next", this.arg = e2, this.tryEntries.forEach(P), !t2) for (var n3 in this) "t" === n3.charAt(0) && a.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e2);
          }, stop: function() {
            this.done = true;
            var t2 = this.tryEntries[0].completion;
            if ("throw" === t2.type) throw t2.arg;
            return this.rval;
          }, dispatchException: function(t2) {
            if (this.done) throw t2;
            var n3 = this;
            function r2(r3, o3) {
              return u2.type = "throw", u2.arg = t2, n3.next = r3, o3 && (n3.method = "next", n3.arg = e2), !!o3;
            }
            for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
              var i2 = this.tryEntries[o2], u2 = i2.completion;
              if ("root" === i2.tryLoc) return r2("end");
              if (i2.tryLoc <= this.prev) {
                var c2 = a.call(i2, "catchLoc"), s2 = a.call(i2, "finallyLoc");
                if (c2 && s2) {
                  if (this.prev < i2.catchLoc) return r2(i2.catchLoc, true);
                  if (this.prev < i2.finallyLoc) return r2(i2.finallyLoc);
                } else if (c2) {
                  if (this.prev < i2.catchLoc) return r2(i2.catchLoc, true);
                } else {
                  if (!s2) throw new Error("try statement without catch or finally");
                  if (this.prev < i2.finallyLoc) return r2(i2.finallyLoc);
                }
              }
            }
          }, abrupt: function(t2, e3) {
            for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
              var r2 = this.tryEntries[n3];
              if (r2.tryLoc <= this.prev && a.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                var o2 = r2;
                break;
              }
            }
            o2 && ("break" === t2 || "continue" === t2) && o2.tryLoc <= e3 && e3 <= o2.finallyLoc && (o2 = null);
            var i2 = o2 ? o2.completion : {};
            return i2.type = t2, i2.arg = e3, o2 ? (this.method = "next", this.next = o2.finallyLoc, x) : this.complete(i2);
          }, complete: function(t2, e3) {
            if ("throw" === t2.type) throw t2.arg;
            return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e3 && (this.next = e3), x;
          }, finish: function(t2) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var n3 = this.tryEntries[e3];
              if (n3.finallyLoc === t2) return this.complete(n3.completion, n3.afterLoc), P(n3), x;
            }
          }, catch: function(t2) {
            for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
              var n3 = this.tryEntries[e3];
              if (n3.tryLoc === t2) {
                var r2 = n3.completion;
                if ("throw" === r2.type) {
                  var o2 = r2.arg;
                  P(n3);
                }
                return o2;
              }
            }
            throw new Error("illegal catch attempt");
          }, delegateYield: function(t2, n3, r2) {
            return this.delegate = { iterator: D(t2), resultName: n3, nextLoc: r2 }, "next" === this.method && (this.arg = e2), x;
          } }, n2;
        }
        t.exports = o, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(2);
        t.exports = function(t2, e2) {
          for (; !Object.prototype.hasOwnProperty.call(t2, e2) && null !== (t2 = r(t2)); ) ;
          return t2;
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(60);
        t.exports = function(t2) {
          if (Array.isArray(t2)) return r(t2);
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function(t2) {
          if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"]) return Array.from(t2);
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(147), o = n(157);
        t.exports = function(t2, e2) {
          return r(t2, e2, function(e3, n2) {
            return o(t2, n2);
          });
        };
      }, function(t, e, n) {
        var r = n(148), o = n(156), i = n(32);
        t.exports = function(t2, e2, n2) {
          for (var a = -1, u = e2.length, c = {}; ++a < u; ) {
            var s = e2[a], f = r(t2, s);
            n2(f, s) && o(c, i(s, t2), f);
          }
          return c;
        };
      }, function(t, e, n) {
        var r = n(32), o = n(42);
        t.exports = function(t2, e2) {
          for (var n2 = 0, i = (e2 = r(e2, t2)).length; null != t2 && n2 < i; ) t2 = t2[o(e2[n2++])];
          return n2 && n2 == i ? t2 : void 0;
        };
      }, function(t, e, n) {
        var r = n(16), o = n(41), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
        t.exports = function(t2, e2) {
          if (r(t2)) return false;
          var n2 = typeof t2;
          return !("number" != n2 && "symbol" != n2 && "boolean" != n2 && null != t2 && !o(t2)) || (a.test(t2) || !i.test(t2) || null != e2 && t2 in Object(e2));
        };
      }, function(t, e, n) {
        var r = n(151), o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g, a = r(function(t2) {
          var e2 = [];
          return 46 === t2.charCodeAt(0) && e2.push(""), t2.replace(o, function(t3, n2, r2, o2) {
            e2.push(r2 ? o2.replace(i, "$1") : n2 || t3);
          }), e2;
        });
        t.exports = a;
      }, function(t, e, n) {
        var r = n(152);
        t.exports = function(t2) {
          var e2 = r(t2, function(t3) {
            return 500 === n2.size && n2.clear(), t3;
          }), n2 = e2.cache;
          return e2;
        };
      }, function(t, e, n) {
        var r = n(46);
        function o(t2, e2) {
          if ("function" != typeof t2 || null != e2 && "function" != typeof e2) throw new TypeError("Expected a function");
          var n2 = function() {
            var r2 = arguments, o2 = e2 ? e2.apply(this, r2) : r2[0], i = n2.cache;
            if (i.has(o2)) return i.get(o2);
            var a = t2.apply(this, r2);
            return n2.cache = i.set(o2, a) || i, a;
          };
          return n2.cache = new (o.Cache || r)(), n2;
        }
        o.Cache = r, t.exports = o;
      }, function(t, e, n) {
        var r = n(154);
        t.exports = function(t2) {
          return null == t2 ? "" : r(t2);
        };
      }, function(t, e, n) {
        var r = n(27), o = n(155), i = n(16), a = n(41), u = r ? r.prototype : void 0, c = u ? u.toString : void 0;
        t.exports = function t2(e2) {
          if ("string" == typeof e2) return e2;
          if (i(e2)) return o(e2, t2) + "";
          if (a(e2)) return c ? c.call(e2) : "";
          var n2 = e2 + "";
          return "0" == n2 && 1 / e2 == -1 / 0 ? "-0" : n2;
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          for (var n = -1, r = null == t2 ? 0 : t2.length, o = Array(r); ++n < r; ) o[n] = e2(t2[n], n, t2);
          return o;
        };
      }, function(t, e, n) {
        var r = n(54), o = n(32), i = n(31), a = n(15), u = n(42);
        t.exports = function(t2, e2, n2, c) {
          if (!a(t2)) return t2;
          for (var s = -1, f = (e2 = o(e2, t2)).length, l = f - 1, d = t2; null != d && ++s < f; ) {
            var h = u(e2[s]), v = n2;
            if ("__proto__" === h || "constructor" === h || "prototype" === h) return t2;
            if (s != l) {
              var p = d[h];
              void 0 === (v = c ? c(p, h, d) : void 0) && (v = a(p) ? p : i(e2[s + 1]) ? [] : {});
            }
            r(d, h, v), d = d[h];
          }
          return t2;
        };
      }, function(t, e, n) {
        var r = n(158), o = n(159);
        t.exports = function(t2, e2) {
          return null != t2 && o(t2, e2, r);
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return null != t2 && e2 in Object(t2);
        };
      }, function(t, e, n) {
        var r = n(32), o = n(30), i = n(16), a = n(31), u = n(39), c = n(42);
        t.exports = function(t2, e2, n2) {
          for (var s = -1, f = (e2 = r(e2, t2)).length, l = false; ++s < f; ) {
            var d = c(e2[s]);
            if (!(l = null != t2 && n2(t2, d))) break;
            t2 = t2[d];
          }
          return l || ++s != f ? l : !!(f = null == t2 ? 0 : t2.length) && u(f) && a(d, f) && (i(t2) || o(t2));
        };
      }, function(t, e, n) {
        var r = n(161), o = n(57), i = n(58);
        t.exports = function(t2) {
          return i(o(t2, void 0, r), t2 + "");
        };
      }, function(t, e, n) {
        var r = n(162);
        t.exports = function(t2) {
          return (null == t2 ? 0 : t2.length) ? r(t2, 1) : [];
        };
      }, function(t, e, n) {
        var r = n(163), o = n(164);
        t.exports = function t2(e2, n2, i, a, u) {
          var c = -1, s = e2.length;
          for (i || (i = o), u || (u = []); ++c < s; ) {
            var f = e2[c];
            n2 > 0 && i(f) ? n2 > 1 ? t2(f, n2 - 1, i, a, u) : r(u, f) : a || (u[u.length] = f);
          }
          return u;
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          for (var n = -1, r = e2.length, o = t2.length; ++n < r; ) t2[o + n] = e2[n];
          return t2;
        };
      }, function(t, e, n) {
        var r = n(27), o = n(30), i = n(16), a = r ? r.isConcatSpreadable : void 0;
        t.exports = function(t2) {
          return i(t2) || o(t2) || !!(a && t2 && t2[a]);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          try {
            return -1 !== Function.toString.call(t2).indexOf("[native code]");
          } catch (e2) {
            return "function" == typeof t2;
          }
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        var r = n(40), o = n(167);
        function i(e2, n2, a) {
          return o() ? (t.exports = i = Reflect.construct.bind(), t.exports.__esModule = true, t.exports.default = t.exports) : (t.exports = i = function(t2, e3, n3) {
            var o2 = [null];
            o2.push.apply(o2, e3);
            var i2 = new (Function.bind.apply(t2, o2))();
            return n3 && r(i2, n3.prototype), i2;
          }, t.exports.__esModule = true, t.exports.default = t.exports), i.apply(null, arguments);
        }
        t.exports = i, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e) {
        t.exports = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t2) {
            return false;
          }
        }, t.exports.__esModule = true, t.exports.default = t.exports;
      }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "BarcodeDecoder", function() {
          return Lt;
        }), n.d(e, "Readers", function() {
          return r;
        }), n.d(e, "CameraAccess", function() {
          return re;
        }), n.d(e, "ImageDebug", function() {
          return h.a;
        }), n.d(e, "ImageWrapper", function() {
          return c.a;
        }), n.d(e, "ResultCollector", function() {
          return oe;
        });
        var r = {};
        n.r(r), n.d(r, "BarcodeReader", function() {
          return k;
        }), n.d(r, "TwoOfFiveReader", function() {
          return z;
        }), n.d(r, "NewCodabarReader", function() {
          return B;
        }), n.d(r, "Code128Reader", function() {
          return q;
        }), n.d(r, "Code32Reader", function() {
          return tt;
        }), n.d(r, "Code39Reader", function() {
          return Z;
        }), n.d(r, "Code39VINReader", function() {
          return ot;
        }), n.d(r, "Code93Reader", function() {
          return ct;
        }), n.d(r, "EAN2Reader", function() {
          return mt;
        }), n.d(r, "EAN5Reader", function() {
          return wt;
        }), n.d(r, "EAN8Reader", function() {
          return Rt;
        }), n.d(r, "EANReader", function() {
          return gt;
        }), n.d(r, "I2of5Reader", function() {
          return Ct;
        }), n.d(r, "UPCEReader", function() {
          return St;
        }), n.d(r, "UPCReader", function() {
          return Pt;
        });
        var o = n(13), i = n.n(o), a = n(18), u = n.n(a), c = (n(136), n(11)), s = n(12), f = n.n(s), l = n(8), d = n.n(l), h = n(17), v = n(3), p = n.n(v), y = n(4), g = n.n(y), x = n(1), m = n.n(x), _ = n(7), b = n.n(_), w = n(6), O = n.n(w), R = n(2), M = n.n(R), C = n(0), E = n.n(C), A = n(9), S = function(t2) {
          return t2[t2.Forward = 1] = "Forward", t2[t2.Reverse = -1] = "Reverse", t2;
        }({}), k = function() {
          function t2(e2, n2) {
            p()(this, t2), E()(this, "_row", []), E()(this, "config", {}), E()(this, "supplements", []), E()(this, "SINGLE_CODE_ERROR", 0), E()(this, "FORMAT", "unknown"), E()(this, "CONFIG_KEYS", {}), this._row = [], this.config = e2 || {}, n2 && (this.supplements = n2);
          }
          return g()(t2, [{ key: "_nextUnset", value: function(t3) {
            for (var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = e2; n2 < t3.length; n2++) if (!t3[n2]) return n2;
            return t3.length;
          } }, { key: "_matchPattern", value: function(t3, e2) {
            for (var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.SINGLE_CODE_ERROR || 1, r2 = 0, o2 = 0, i2 = 0, a2 = 0, u2 = 0, c2 = 0, s2 = 0, f2 = 0; f2 < t3.length; f2++) i2 += t3[f2], a2 += e2[f2];
            if (i2 < a2) return Number.MAX_VALUE;
            n2 *= u2 = i2 / a2;
            for (var l2 = 0; l2 < t3.length; l2++) {
              if (c2 = t3[l2], s2 = e2[l2] * u2, (o2 = Math.abs(c2 - s2) / s2) > n2) return Number.MAX_VALUE;
              r2 += o2;
            }
            return r2 / a2;
          } }, { key: "_nextSet", value: function(t3) {
            for (var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = e2; n2 < t3.length; n2++) if (t3[n2]) return n2;
            return t3.length;
          } }, { key: "_correctBars", value: function(t3, e2, n2) {
            for (var r2 = n2.length, o2 = 0; r2--; ) (o2 = t3[n2[r2]] * (1 - (1 - e2) / 2)) > 1 && (t3[n2[r2]] = o2);
          } }, { key: "decodePattern", value: function(t3) {
            this._row = t3;
            var e2 = this.decode();
            return null === e2 ? (this._row.reverse(), (e2 = this.decode()) && (e2.direction = S.Reverse, e2.start = this._row.length - e2.start, e2.end = this._row.length - e2.end)) : e2.direction = S.Forward, e2 && (e2.format = this.FORMAT), e2;
          } }, { key: "_matchRange", value: function(t3, e2, n2) {
            var r2;
            for (r2 = t3 = t3 < 0 ? 0 : t3; r2 < e2; r2++) if (this._row[r2] !== n2) return false;
            return true;
          } }, { key: "_fillCounters", value: function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._nextUnset(this._row), e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._row.length, n2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r2 = [], o2 = 0;
            r2[o2] = 0;
            for (var i2 = t3; i2 < e2; i2++) this._row[i2] ^ (n2 ? 1 : 0) ? r2[o2]++ : (r2[++o2] = 1, n2 = !n2);
            return r2;
          } }, { key: "_toCounters", value: function(t3, e2) {
            var n2 = e2.length, r2 = this._row.length, o2 = !this._row[t3], i2 = 0;
            A.a.init(e2, 0);
            for (var a2 = t3; a2 < r2; a2++) if (this._row[a2] ^ (o2 ? 1 : 0)) e2[i2]++;
            else {
              if (++i2 === n2) break;
              e2[i2] = 1, o2 = !o2;
            }
            return e2;
          } }, { key: "decodeImage", value: function(t3) {
            return null;
          } }], [{ key: "Exception", get: function() {
            return { StartNotFoundException: "Start-Info was not found!", CodeNotFoundException: "Code could not be found!", PatternNotFoundException: "Pattern could not be found!" };
          } }]), t2;
        }();
        function P(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var T = [3, 1, 3, 1, 1, 1], D = [3, 1, 1, 1, 3], j = [[1, 1, 3, 3, 1], [3, 1, 1, 1, 3], [1, 3, 1, 1, 3], [3, 3, 1, 1, 1], [1, 1, 3, 1, 3], [3, 1, 3, 1, 1], [1, 3, 3, 1, 1], [1, 1, 1, 3, 3], [3, 1, 1, 3, 1], [1, 3, 1, 3, 1]], I = T.reduce(function(t2, e2) {
          return t2 + e2;
        }, 0), z = function(t2) {
          b()(n2, t2);
          var e2 = P(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "barSpaceRatio", [1, 1]), E()(m()(t3), "FORMAT", "2of5"), E()(m()(t3), "SINGLE_CODE_ERROR", 0.78), E()(m()(t3), "AVG_CODE_ERROR", 0.3), t3;
          }
          return g()(n2, [{ key: "_findPattern", value: function(t3, e3) {
            var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o2 = [], i2 = 0, a2 = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }, u2 = 0, c2 = 0, s2 = this.AVG_CODE_ERROR;
            e3 || (e3 = this._nextSet(this._row));
            for (var f2 = 0; f2 < t3.length; f2++) o2[f2] = 0;
            for (var l2 = e3; l2 < this._row.length; l2++) if (this._row[l2] ^ (n3 ? 1 : 0)) o2[i2]++;
            else {
              if (i2 === o2.length - 1) {
                u2 = 0;
                for (var d2 = 0; d2 < o2.length; d2++) u2 += o2[d2];
                if ((c2 = this._matchPattern(o2, t3)) < s2) return a2.error = c2, a2.start = l2 - u2, a2.end = l2, a2;
                if (!r2) return null;
                for (var h2 = 0; h2 < o2.length - 2; h2++) o2[h2] = o2[h2 + 2];
                o2[o2.length - 2] = 0, o2[o2.length - 1] = 0, i2--;
              } else i2++;
              o2[i2] = 1, n3 = !n3;
            }
            return null;
          } }, { key: "_findStart", value: function() {
            for (var t3 = null, e3 = this._nextSet(this._row), n3 = 1, r2 = 0; !t3; ) {
              if (!(t3 = this._findPattern(T, e3, false, true))) return null;
              if (n3 = Math.floor((t3.end - t3.start) / I), (r2 = t3.start - 5 * n3) >= 0 && this._matchRange(r2, t3.start, 0)) return t3;
              e3 = t3.end, t3 = null;
            }
            return t3;
          } }, { key: "_verifyTrailingWhitespace", value: function(t3) {
            var e3 = t3.end + (t3.end - t3.start) / 2;
            return e3 < this._row.length && this._matchRange(t3.end, e3, 0) ? t3 : null;
          } }, { key: "_findEnd", value: function() {
            this._row.reverse();
            var t3 = this._nextSet(this._row), e3 = this._findPattern(D, t3, false, true);
            if (this._row.reverse(), null === e3) return null;
            var n3 = e3.start;
            return e3.start = this._row.length - e3.end, e3.end = this._row.length - n3, null !== e3 ? this._verifyTrailingWhitespace(e3) : null;
          } }, { key: "_verifyCounterLength", value: function(t3) {
            return t3.length % 10 == 0;
          } }, { key: "_decodeCode", value: function(t3) {
            for (var e3 = this.AVG_CODE_ERROR, n3 = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }, r2 = 0; r2 < j.length; r2++) {
              var o2 = this._matchPattern(t3, j[r2]);
              o2 < n3.error && (n3.code = r2, n3.error = o2);
            }
            return n3.error < e3 ? n3 : null;
          } }, { key: "_decodePayload", value: function(t3, e3, n3) {
            for (var r2 = 0, o2 = t3.length, i2 = [0, 0, 0, 0, 0], a2 = null; r2 < o2; ) {
              for (var u2 = 0; u2 < 5; u2++) i2[u2] = t3[r2] * this.barSpaceRatio[0], r2 += 2;
              if (!(a2 = this._decodeCode(i2))) return null;
              e3.push("".concat(a2.code)), n3.push(a2);
            }
            return a2;
          } }, { key: "decode", value: function(t3, e3) {
            var n3 = this._findStart();
            if (!n3) return null;
            var r2 = this._findEnd();
            if (!r2) return null;
            var o2 = this._fillCounters(n3.end, r2.start, false);
            if (!this._verifyCounterLength(o2)) return null;
            var i2 = [];
            i2.push(n3);
            var a2 = [];
            return this._decodePayload(o2, a2, i2) ? a2.length < 5 ? null : (i2.push(r2), { code: a2.join(""), start: n3.start, end: r2.end, startInfo: n3, decodedCodes: i2, format: this.FORMAT }) : null;
          } }]), n2;
        }(k);
        function U(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var L = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68], N = [3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41, 11, 14], F = [26, 41, 11, 14], B = function(t2) {
          b()(n2, t2);
          var e2 = U(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "_counters", []), E()(m()(t3), "FORMAT", "codabar"), t3;
          }
          return g()(n2, [{ key: "_computeAlternatingThreshold", value: function(t3, e3) {
            for (var n3 = Number.MAX_VALUE, r2 = 0, o2 = 0, i2 = t3; i2 < e3; i2 += 2) (o2 = this._counters[i2]) > r2 && (r2 = o2), o2 < n3 && (n3 = o2);
            return (n3 + r2) / 2 | 0;
          } }, { key: "_toPattern", value: function(t3) {
            var e3 = t3 + 7;
            if (e3 > this._counters.length) return -1;
            for (var n3 = this._computeAlternatingThreshold(t3, e3), r2 = this._computeAlternatingThreshold(t3 + 1, e3), o2 = 64, i2 = 0, a2 = 0, u2 = 0; u2 < 7; u2++) i2 = 0 == (1 & u2) ? n3 : r2, this._counters[t3 + u2] > i2 && (a2 |= o2), o2 >>= 1;
            return a2;
          } }, { key: "_isStartEnd", value: function(t3) {
            for (var e3 = 0; e3 < F.length; e3++) if (F[e3] === t3) return true;
            return false;
          } }, { key: "_sumCounters", value: function(t3, e3) {
            for (var n3 = 0, r2 = t3; r2 < e3; r2++) n3 += this._counters[r2];
            return n3;
          } }, { key: "_findStart", value: function() {
            for (var t3 = this._nextUnset(this._row), e3 = 1; e3 < this._counters.length; e3++) {
              var n3 = this._toPattern(e3);
              if (-1 !== n3 && this._isStartEnd(n3)) return { start: t3 += this._sumCounters(0, e3), end: t3 + this._sumCounters(e3, e3 + 8), startCounter: e3, endCounter: e3 + 8 };
            }
            return null;
          } }, { key: "_patternToChar", value: function(t3) {
            for (var e3 = 0; e3 < N.length; e3++) if (N[e3] === t3) return String.fromCharCode(L[e3]);
            return null;
          } }, { key: "_calculatePatternLength", value: function(t3) {
            for (var e3 = 0, n3 = t3; n3 < t3 + 7; n3++) e3 += this._counters[n3];
            return e3;
          } }, { key: "_verifyWhitespace", value: function(t3, e3) {
            return (t3 - 1 <= 0 || this._counters[t3 - 1] >= this._calculatePatternLength(t3) / 2) && (e3 + 8 >= this._counters.length || this._counters[e3 + 7] >= this._calculatePatternLength(e3) / 2);
          } }, { key: "_charToPattern", value: function(t3) {
            for (var e3 = t3.charCodeAt(0), n3 = 0; n3 < L.length; n3++) if (L[n3] === e3) return N[n3];
            return 0;
          } }, { key: "_thresholdResultPattern", value: function(t3, e3) {
            for (var n3, r2 = { space: { narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }, wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE } }, bar: { narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }, wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE } } }, o2 = e3, i2 = 0; i2 < t3.length; i2++) {
              n3 = this._charToPattern(t3[i2]);
              for (var a2 = 6; a2 >= 0; a2--) {
                var u2 = 2 == (1 & a2) ? r2.bar : r2.space, c2 = 1 == (1 & n3) ? u2.wide : u2.narrow;
                c2.size += this._counters[o2 + a2], c2.counts++, n3 >>= 1;
              }
              o2 += 8;
            }
            return ["space", "bar"].forEach(function(t4) {
              var e4 = r2[t4];
              e4.wide.min = Math.floor((e4.narrow.size / e4.narrow.counts + e4.wide.size / e4.wide.counts) / 2), e4.narrow.max = Math.ceil(e4.wide.min), e4.wide.max = Math.ceil((2 * e4.wide.size + 1.5) / e4.wide.counts);
            }), r2;
          } }, { key: "_validateResult", value: function(t3, e3) {
            for (var n3, r2 = this._thresholdResultPattern(t3, e3), o2 = e3, i2 = 0; i2 < t3.length; i2++) {
              n3 = this._charToPattern(t3[i2]);
              for (var a2 = 6; a2 >= 0; a2--) {
                var u2 = 0 == (1 & a2) ? r2.bar : r2.space, c2 = 1 == (1 & n3) ? u2.wide : u2.narrow, s2 = this._counters[o2 + a2];
                if (s2 < c2.min || s2 > c2.max) return false;
                n3 >>= 1;
              }
              o2 += 8;
            }
            return true;
          } }, { key: "decode", value: function(t3, e3) {
            if (this._counters = this._fillCounters(), !(e3 = this._findStart())) return null;
            var n3, r2 = e3.startCounter, o2 = [];
            do {
              if ((n3 = this._toPattern(r2)) < 0) return null;
              var i2 = this._patternToChar(n3);
              if (null === i2) return null;
              if (o2.push(i2), r2 += 8, o2.length > 1 && this._isStartEnd(n3)) break;
            } while (r2 < this._counters.length);
            if (o2.length - 2 < 4 || !this._isStartEnd(n3)) return null;
            if (!this._verifyWhitespace(e3.startCounter, r2 - 8)) return null;
            if (!this._validateResult(o2, e3.startCounter)) return null;
            r2 = r2 > this._counters.length ? this._counters.length : r2;
            var a2 = e3.start + this._sumCounters(e3.startCounter, r2 - 8);
            return { code: o2.join(""), start: e3.start, end: a2, startInfo: e3, decodedCodes: o2, format: this.FORMAT };
          } }]), n2;
        }(k);
        function W(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var q = function(t2) {
          b()(n2, t2);
          var e2 = W(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "CODE_SHIFT", 98), E()(m()(t3), "CODE_C", 99), E()(m()(t3), "CODE_B", 100), E()(m()(t3), "CODE_A", 101), E()(m()(t3), "START_CODE_A", 103), E()(m()(t3), "START_CODE_B", 104), E()(m()(t3), "START_CODE_C", 105), E()(m()(t3), "STOP_CODE", 106), E()(m()(t3), "CODE_PATTERN", [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]), E()(m()(t3), "SINGLE_CODE_ERROR", 0.64), E()(m()(t3), "AVG_CODE_ERROR", 0.3), E()(m()(t3), "FORMAT", "code_128"), E()(m()(t3), "MODULE_INDICES", { bar: [0, 2, 4], space: [1, 3, 5] }), t3;
          }
          return g()(n2, [{ key: "_decodeCode", value: function(t3, e3) {
            for (var n3 = { error: Number.MAX_VALUE, code: -1, start: t3, end: t3, correction: { bar: 1, space: 1 } }, r2 = [0, 0, 0, 0, 0, 0], o2 = t3, i2 = !this._row[o2], a2 = 0, u2 = o2; u2 < this._row.length; u2++) if (this._row[u2] ^ (i2 ? 1 : 0)) r2[a2]++;
            else {
              if (a2 === r2.length - 1) {
                e3 && this._correct(r2, e3);
                for (var c2 = 0; c2 < this.CODE_PATTERN.length; c2++) {
                  var s2 = this._matchPattern(r2, this.CODE_PATTERN[c2]);
                  s2 < n3.error && (n3.code = c2, n3.error = s2);
                }
                return n3.end = u2, -1 === n3.code || n3.error > this.AVG_CODE_ERROR ? null : (this.CODE_PATTERN[n3.code] && (n3.correction.bar = this.calculateCorrection(this.CODE_PATTERN[n3.code], r2, this.MODULE_INDICES.bar), n3.correction.space = this.calculateCorrection(this.CODE_PATTERN[n3.code], r2, this.MODULE_INDICES.space)), n3);
              }
              r2[++a2] = 1, i2 = !i2;
            }
            return null;
          } }, { key: "_correct", value: function(t3, e3) {
            this._correctBars(t3, e3.bar, this.MODULE_INDICES.bar), this._correctBars(t3, e3.space, this.MODULE_INDICES.space);
          } }, { key: "_findStart", value: function() {
            for (var t3 = [0, 0, 0, 0, 0, 0], e3 = this._nextSet(this._row), n3 = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0, correction: { bar: 1, space: 1 } }, r2 = false, o2 = 0, i2 = e3; i2 < this._row.length; i2++) if (this._row[i2] ^ (r2 ? 1 : 0)) t3[o2]++;
            else {
              if (o2 === t3.length - 1) {
                for (var a2 = t3.reduce(function(t4, e4) {
                  return t4 + e4;
                }, 0), u2 = this.START_CODE_A; u2 <= this.START_CODE_C; u2++) {
                  var c2 = this._matchPattern(t3, this.CODE_PATTERN[u2]);
                  c2 < n3.error && (n3.code = u2, n3.error = c2);
                }
                if (n3.error < this.AVG_CODE_ERROR) return n3.start = i2 - a2, n3.end = i2, n3.correction.bar = this.calculateCorrection(this.CODE_PATTERN[n3.code], t3, this.MODULE_INDICES.bar), n3.correction.space = this.calculateCorrection(this.CODE_PATTERN[n3.code], t3, this.MODULE_INDICES.space), n3;
                for (var s2 = 0; s2 < 4; s2++) t3[s2] = t3[s2 + 2];
                t3[4] = 0, t3[5] = 0, o2--;
              } else o2++;
              t3[o2] = 1, r2 = !r2;
            }
            return null;
          } }, { key: "decode", value: function(t3, e3) {
            var n3 = this, r2 = this._findStart();
            if (null === r2) return null;
            var o2 = { code: r2.code, start: r2.start, end: r2.end, correction: { bar: r2.correction.bar, space: r2.correction.space } }, i2 = [];
            i2.push(o2);
            for (var a2 = o2.code, u2 = function(t4) {
              switch (t4) {
                case n3.START_CODE_A:
                  return n3.CODE_A;
                case n3.START_CODE_B:
                  return n3.CODE_B;
                case n3.START_CODE_C:
                  return n3.CODE_C;
                default:
                  return null;
              }
            }(o2.code), c2 = false, s2 = false, f2 = s2, l2 = true, d2 = 0, h2 = [], v2 = []; !c2; ) {
              if (f2 = s2, s2 = false, null !== (o2 = this._decodeCode(o2.end, o2.correction))) switch (o2.code !== this.STOP_CODE && (l2 = true), o2.code !== this.STOP_CODE && (h2.push(o2.code), a2 += ++d2 * o2.code), i2.push(o2), u2) {
                case this.CODE_A:
                  if (o2.code < 64) v2.push(String.fromCharCode(32 + o2.code));
                  else if (o2.code < 96) v2.push(String.fromCharCode(o2.code - 64));
                  else switch (o2.code !== this.STOP_CODE && (l2 = false), o2.code) {
                    case this.CODE_SHIFT:
                      s2 = true, u2 = this.CODE_B;
                      break;
                    case this.CODE_B:
                      u2 = this.CODE_B;
                      break;
                    case this.CODE_C:
                      u2 = this.CODE_C;
                      break;
                    case this.STOP_CODE:
                      c2 = true;
                  }
                  break;
                case this.CODE_B:
                  if (o2.code < 96) v2.push(String.fromCharCode(32 + o2.code));
                  else switch (o2.code !== this.STOP_CODE && (l2 = false), o2.code) {
                    case this.CODE_SHIFT:
                      s2 = true, u2 = this.CODE_A;
                      break;
                    case this.CODE_A:
                      u2 = this.CODE_A;
                      break;
                    case this.CODE_C:
                      u2 = this.CODE_C;
                      break;
                    case this.STOP_CODE:
                      c2 = true;
                  }
                  break;
                case this.CODE_C:
                  if (o2.code < 100) v2.push(o2.code < 10 ? "0" + o2.code : o2.code);
                  else switch (o2.code !== this.STOP_CODE && (l2 = false), o2.code) {
                    case this.CODE_A:
                      u2 = this.CODE_A;
                      break;
                    case this.CODE_B:
                      u2 = this.CODE_B;
                      break;
                    case this.STOP_CODE:
                      c2 = true;
                  }
              }
              else c2 = true;
              f2 && (u2 = u2 === this.CODE_A ? this.CODE_B : this.CODE_A);
            }
            return null === o2 ? null : (o2.end = this._nextUnset(this._row, o2.end), this._verifyTrailingWhitespace(o2) ? (a2 -= d2 * h2[h2.length - 1]) % 103 !== h2[h2.length - 1] ? null : v2.length ? (l2 && v2.splice(v2.length - 1, 1), { code: v2.join(""), start: r2.start, end: o2.end, codeset: u2, startInfo: r2, decodedCodes: i2, endInfo: o2, format: this.FORMAT }) : null : null);
          } }, { key: "_verifyTrailingWhitespace", value: function(t3) {
            var e3;
            return (e3 = t3.end + (t3.end - t3.start) / 2) < this._row.length && this._matchRange(t3.end, e3, 0) ? t3 : null;
          } }, { key: "calculateCorrection", value: function(t3, e3, n3) {
            for (var r2 = n3.length, o2 = 0, i2 = 0; r2--; ) i2 += t3[n3[r2]], o2 += e3[n3[r2]];
            return i2 / o2;
          } }]), n2;
        }(k), V = n(14), G = n.n(V), H = n(33), X = n.n(H);
        function Q(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var Y = new Uint16Array(X()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%").map(function(t2) {
          return t2.charCodeAt(0);
        })), $ = new Uint16Array([52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 148, 168, 162, 138, 42]), Z = function(t2) {
          b()(n2, t2);
          var e2 = Q(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "code_39"), t3;
          }
          return g()(n2, [{ key: "_findStart", value: function() {
            for (var t3 = this._nextSet(this._row), e3 = t3, n3 = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), r2 = 0, o2 = false, i2 = t3; i2 < this._row.length; i2++) if (this._row[i2] ^ (o2 ? 1 : 0)) n3[r2]++;
            else {
              if (r2 === n3.length - 1) {
                if (148 === this._toPattern(n3)) {
                  var a2 = Math.floor(Math.max(0, e3 - (i2 - e3) / 4));
                  if (this._matchRange(a2, e3, 0)) return { start: e3, end: i2 };
                }
                e3 += n3[0] + n3[1];
                for (var u2 = 0; u2 < 7; u2++) n3[u2] = n3[u2 + 2];
                n3[7] = 0, n3[8] = 0, r2--;
              } else r2++;
              n3[r2] = 1, o2 = !o2;
            }
            return null;
          } }, { key: "_toPattern", value: function(t3) {
            for (var e3 = t3.length, n3 = 0, r2 = e3, o2 = 0; r2 > 3; ) {
              n3 = this._findNextWidth(t3, n3), r2 = 0;
              for (var i2 = 0, a2 = 0; a2 < e3; a2++) t3[a2] > n3 && (i2 |= 1 << e3 - 1 - a2, r2++, o2 += t3[a2]);
              if (3 === r2) {
                for (var u2 = 0; u2 < e3 && r2 > 0; u2++) if (t3[u2] > n3 && (r2--, 2 * t3[u2] >= o2)) return -1;
                return i2;
              }
            }
            return -1;
          } }, { key: "_findNextWidth", value: function(t3, e3) {
            for (var n3 = Number.MAX_VALUE, r2 = 0; r2 < t3.length; r2++) t3[r2] < n3 && t3[r2] > e3 && (n3 = t3[r2]);
            return n3;
          } }, { key: "_patternToChar", value: function(t3) {
            for (var e3 = 0; e3 < $.length; e3++) if ($[e3] === t3) return String.fromCharCode(Y[e3]);
            return null;
          } }, { key: "_verifyTrailingWhitespace", value: function(t3, e3, n3) {
            var r2 = A.a.sum(n3);
            return 3 * (e3 - t3 - r2) >= r2;
          } }, { key: "decode", value: function() {
            var t3 = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), e3 = [], n3 = this._findStart();
            if (!n3) return null;
            var r2, o2, i2 = this._nextSet(this._row, n3.end);
            do {
              t3 = this._toCounters(i2, t3);
              var a2 = this._toPattern(t3);
              if (a2 < 0) return null;
              if (null === (r2 = this._patternToChar(a2))) return null;
              e3.push(r2), o2 = i2, i2 += A.a.sum(t3), i2 = this._nextSet(this._row, i2);
            } while ("*" !== r2);
            return e3.pop(), e3.length && this._verifyTrailingWhitespace(o2, i2, t3) ? { code: e3.join(""), start: n3.start, end: i2, startInfo: n3, decodedCodes: e3, format: this.FORMAT } : null;
          } }]), n2;
        }(k);
        function K(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var J = /[AEIO]/g, tt = function(t2) {
          b()(n2, t2);
          var e2 = K(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "code_32_reader"), t3;
          }
          return g()(n2, [{ key: "_decodeCode32", value: function(t3) {
            if (/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(t3)) return null;
            for (var e3 = 0, n3 = 0; n3 < t3.length; n3++) e3 = 32 * e3 + "0123456789BCDFGHJKLMNPQRSTUVWXYZ".indexOf(t3[n3]);
            var r2 = "".concat(e3);
            return r2.length < 9 && (r2 = ("000000000" + r2).slice(-9)), "A" + r2;
          } }, { key: "_checkChecksum", value: function(t3) {
            return !!t3;
          } }, { key: "decode", value: function() {
            var t3 = G()(M()(n2.prototype), "decode", this).call(this);
            if (!t3) return null;
            var e3 = t3.code;
            if (!e3) return null;
            if (e3 = e3.replace(J, ""), !this._checkChecksum(e3)) return null;
            var r2 = this._decodeCode32(e3);
            return r2 ? (t3.code = r2, t3) : null;
          } }]), n2;
        }(Z);
        function et(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var nt = /[IOQ]/g, rt = /[A-Z0-9]{17}/, ot = function(t2) {
          b()(n2, t2);
          var e2 = et(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "code_39_vin"), t3;
          }
          return g()(n2, [{ key: "_checkChecksum", value: function(t3) {
            return !!t3;
          } }, { key: "decode", value: function() {
            var t3 = G()(M()(n2.prototype), "decode", this).call(this);
            if (!t3) return null;
            var e3 = t3.code;
            return e3 && (e3 = e3.replace(nt, "")).match(rt) && this._checkChecksum(e3) ? (t3.code = e3, t3) : null;
          } }]), n2;
        }(Z);
        function it(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var at = new Uint16Array(X()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*").map(function(t2) {
          return t2.charCodeAt(0);
        })), ut = new Uint16Array([276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350]), ct = function(t2) {
          b()(n2, t2);
          var e2 = it(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "code_93"), t3;
          }
          return g()(n2, [{ key: "_patternToChar", value: function(t3) {
            for (var e3 = 0; e3 < ut.length; e3++) if (ut[e3] === t3) return String.fromCharCode(at[e3]);
            return null;
          } }, { key: "_toPattern", value: function(t3) {
            for (var e3 = t3.length, n3 = t3.reduce(function(t4, e4) {
              return t4 + e4;
            }, 0), r2 = 0, o2 = 0; o2 < e3; o2++) {
              var i2 = Math.round(9 * t3[o2] / n3);
              if (i2 < 1 || i2 > 4) return -1;
              if (0 == (1 & o2)) for (var a2 = 0; a2 < i2; a2++) r2 = r2 << 1 | 1;
              else r2 <<= i2;
            }
            return r2;
          } }, { key: "_findStart", value: function() {
            for (var t3 = this._nextSet(this._row), e3 = t3, n3 = new Uint16Array([0, 0, 0, 0, 0, 0]), r2 = 0, o2 = false, i2 = t3; i2 < this._row.length; i2++) if (this._row[i2] ^ (o2 ? 1 : 0)) n3[r2]++;
            else {
              if (r2 === n3.length - 1) {
                if (350 === this._toPattern(n3)) {
                  var a2 = Math.floor(Math.max(0, e3 - (i2 - e3) / 4));
                  if (this._matchRange(a2, e3, 0)) return { start: e3, end: i2 };
                }
                e3 += n3[0] + n3[1];
                for (var u2 = 0; u2 < 4; u2++) n3[u2] = n3[u2 + 2];
                n3[4] = 0, n3[5] = 0, r2--;
              } else r2++;
              n3[r2] = 1, o2 = !o2;
            }
            return null;
          } }, { key: "_verifyEnd", value: function(t3, e3) {
            return !(t3 === e3 || !this._row[e3]);
          } }, { key: "_decodeExtended", value: function(t3) {
            for (var e3 = t3.length, n3 = [], r2 = 0; r2 < e3; r2++) {
              var o2 = t3[r2];
              if (o2 >= "a" && o2 <= "d") {
                if (r2 > e3 - 2) return null;
                var i2 = t3[++r2], a2 = i2.charCodeAt(0), u2 = void 0;
                switch (o2) {
                  case "a":
                    if (!(i2 >= "A" && i2 <= "Z")) return null;
                    u2 = String.fromCharCode(a2 - 64);
                    break;
                  case "b":
                    if (i2 >= "A" && i2 <= "E") u2 = String.fromCharCode(a2 - 38);
                    else if (i2 >= "F" && i2 <= "J") u2 = String.fromCharCode(a2 - 11);
                    else if (i2 >= "K" && i2 <= "O") u2 = String.fromCharCode(a2 + 16);
                    else if (i2 >= "P" && i2 <= "S") u2 = String.fromCharCode(a2 + 43);
                    else {
                      if (!(i2 >= "T" && i2 <= "Z")) return null;
                      u2 = String.fromCharCode(127);
                    }
                    break;
                  case "c":
                    if (i2 >= "A" && i2 <= "O") u2 = String.fromCharCode(a2 - 32);
                    else {
                      if ("Z" !== i2) return null;
                      u2 = ":";
                    }
                    break;
                  case "d":
                    if (!(i2 >= "A" && i2 <= "Z")) return null;
                    u2 = String.fromCharCode(a2 + 32);
                    break;
                  default:
                    return console.warn("* code_93_reader _decodeExtended hit default case, this may be an error", u2), null;
                }
                n3.push(u2);
              } else n3.push(o2);
            }
            return n3;
          } }, { key: "_matchCheckChar", value: function(t3, e3, n3) {
            var r2 = t3.slice(0, e3), o2 = r2.length, i2 = r2.reduce(function(t4, e4, r3) {
              return t4 + ((-1 * r3 + (o2 - 1)) % n3 + 1) * at.indexOf(e4.charCodeAt(0));
            }, 0);
            return at[i2 % 47] === t3[e3].charCodeAt(0);
          } }, { key: "_verifyChecksums", value: function(t3) {
            return this._matchCheckChar(t3, t3.length - 2, 20) && this._matchCheckChar(t3, t3.length - 1, 15);
          } }, { key: "decode", value: function(t3, e3) {
            if (!(e3 = this._findStart())) return null;
            var n3, r2, o2 = new Uint16Array([0, 0, 0, 0, 0, 0]), i2 = [], a2 = this._nextSet(this._row, e3.end);
            do {
              o2 = this._toCounters(a2, o2);
              var u2 = this._toPattern(o2);
              if (u2 < 0) return null;
              if (null === (r2 = this._patternToChar(u2))) return null;
              i2.push(r2), n3 = a2, a2 += A.a.sum(o2), a2 = this._nextSet(this._row, a2);
            } while ("*" !== r2);
            return i2.pop(), i2.length && this._verifyEnd(n3, a2) && this._verifyChecksums(i2) ? (i2 = i2.slice(0, i2.length - 2), null === (i2 = this._decodeExtended(i2)) ? null : { code: i2.join(""), start: e3.start, end: a2, startInfo: e3, decodedCodes: i2, format: this.FORMAT }) : null;
          } }]), n2;
        }(k);
        function st(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function ft(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? st(Object(n2), true).forEach(function(e3) {
              E()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : st(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        function lt(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var dt = [1, 1, 1], ht = [1, 1, 1, 1, 1], vt = [1, 1, 2], pt = [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]], yt = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], gt = function(t2) {
          b()(n2, t2);
          var e2 = lt(n2);
          function n2(t3, r2) {
            var o2;
            return p()(this, n2), o2 = e2.call(this, u()({ supplements: [] }, t3), r2), E()(m()(o2), "FORMAT", "ean_13"), E()(m()(o2), "SINGLE_CODE_ERROR", 0.7), E()(m()(o2), "STOP_PATTERN", [1, 1, 1]), o2;
          }
          return g()(n2, [{ key: "_findPattern", value: function(t3, e3, n3, r2) {
            var o2 = new Array(t3.length).fill(0), i2 = { error: Number.MAX_VALUE, start: 0, end: 0 }, a2 = 0;
            e3 || (e3 = this._nextSet(this._row));
            for (var u2 = false, c2 = e3; c2 < this._row.length; c2++) if (this._row[c2] ^ (n3 ? 1 : 0)) o2[a2] += 1;
            else {
              if (a2 === o2.length - 1) {
                var s2 = this._matchPattern(o2, t3);
                if (s2 < 0.48 && i2.error && s2 < i2.error) return u2 = true, i2.error = s2, i2.start = c2 - o2.reduce(function(t4, e4) {
                  return t4 + e4;
                }, 0), i2.end = c2, i2;
                if (r2) {
                  for (var f2 = 0; f2 < o2.length - 2; f2++) o2[f2] = o2[f2 + 2];
                  o2[o2.length - 2] = 0, o2[o2.length - 1] = 0, a2--;
                }
              } else a2++;
              o2[a2] = 1, n3 = !n3;
            }
            return u2 ? i2 : null;
          } }, { key: "_decodeCode", value: function(t3, e3) {
            var n3 = [0, 0, 0, 0], r2 = t3, o2 = { error: Number.MAX_VALUE, code: -1, start: t3, end: t3 }, i2 = !this._row[r2], a2 = 0;
            e3 || (e3 = pt.length);
            for (var u2 = r2; u2 < this._row.length; u2++) if (this._row[u2] ^ (i2 ? 1 : 0)) n3[a2]++;
            else {
              if (a2 === n3.length - 1) {
                for (var c2 = 0; c2 < e3; c2++) {
                  var s2 = this._matchPattern(n3, pt[c2]);
                  o2.end = u2, s2 < o2.error && (o2.code = c2, o2.error = s2);
                }
                return o2.error > 0.48 ? null : o2;
              }
              n3[++a2] = 1, i2 = !i2;
            }
            return null;
          } }, { key: "_findStart", value: function() {
            for (var t3 = this._nextSet(this._row), e3 = null; !e3; ) {
              if (!(e3 = this._findPattern(dt, t3, false, true))) return null;
              var n3 = e3.start - (e3.end - e3.start);
              if (n3 >= 0 && this._matchRange(n3, e3.start, 0)) return e3;
              t3 = e3.end, e3 = null;
            }
            return null;
          } }, { key: "_calculateFirstDigit", value: function(t3) {
            for (var e3 = 0; e3 < yt.length; e3++) if (t3 === yt[e3]) return e3;
            return null;
          } }, { key: "_decodePayload", value: function(t3, e3, n3) {
            for (var r2 = ft({}, t3), o2 = 0, i2 = 0; i2 < 6; i2++) {
              if (!(r2 = this._decodeCode(r2.end))) return null;
              r2.code >= 10 ? (r2.code -= 10, o2 |= 1 << 5 - i2) : o2 |= 0 << 5 - i2, e3.push(r2.code), n3.push(r2);
            }
            var a2 = this._calculateFirstDigit(o2);
            if (null === a2) return null;
            e3.unshift(a2);
            var u2 = this._findPattern(ht, r2.end, true, false);
            if (null === u2 || !u2.end) return null;
            n3.push(u2);
            for (var c2 = 0; c2 < 6; c2++) {
              if (!(u2 = this._decodeCode(u2.end, 10))) return null;
              n3.push(u2), e3.push(u2.code);
            }
            return u2;
          } }, { key: "_verifyTrailingWhitespace", value: function(t3) {
            var e3 = t3.end + (t3.end - t3.start);
            return e3 < this._row.length && this._matchRange(t3.end, e3, 0) ? t3 : null;
          } }, { key: "_findEnd", value: function(t3, e3) {
            var n3 = this._findPattern(this.STOP_PATTERN, t3, e3, false);
            return null !== n3 ? this._verifyTrailingWhitespace(n3) : null;
          } }, { key: "_checksum", value: function(t3) {
            for (var e3 = 0, n3 = t3.length - 2; n3 >= 0; n3 -= 2) e3 += t3[n3];
            e3 *= 3;
            for (var r2 = t3.length - 1; r2 >= 0; r2 -= 2) e3 += t3[r2];
            return e3 % 10 == 0;
          } }, { key: "_decodeExtensions", value: function(t3) {
            var e3 = this._nextSet(this._row, t3), n3 = this._findPattern(vt, e3, false, false);
            if (null === n3) return null;
            for (var r2 = 0; r2 < this.supplements.length; r2++) try {
              var o2 = this.supplements[r2].decode(this._row, n3.end);
              if (null !== o2) return { code: o2.code, start: e3, startInfo: n3, end: o2.end, decodedCodes: o2.decodedCodes, format: this.supplements[r2].FORMAT };
            } catch (t4) {
              console.error("* decodeExtensions error in ", this.supplements[r2], ": ", t4);
            }
            return null;
          } }, { key: "decode", value: function(t3, e3) {
            var n3 = new Array(), r2 = new Array(), o2 = {}, i2 = this._findStart();
            if (!i2) return null;
            var a2 = { start: i2.start, end: i2.end };
            if (r2.push(a2), !(a2 = this._decodePayload(a2, n3, r2))) return null;
            if (!(a2 = this._findEnd(a2.end, false))) return null;
            if (r2.push(a2), !this._checksum(n3)) return null;
            if (this.supplements.length > 0) {
              var u2 = this._decodeExtensions(a2.end);
              if (!u2) return null;
              if (!u2.decodedCodes) return null;
              var c2 = u2.decodedCodes[u2.decodedCodes.length - 1], s2 = { start: c2.start + ((c2.end - c2.start) / 2 | 0), end: c2.end };
              if (!this._verifyTrailingWhitespace(s2)) return null;
              o2 = { supplement: u2, code: n3.join("") + u2.code };
            }
            return ft(ft({ code: n3.join(""), start: i2.start, end: a2.end, startInfo: i2, decodedCodes: r2 }, o2), {}, { format: this.FORMAT });
          } }]), n2;
        }(k);
        function xt(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var mt = function(t2) {
          b()(n2, t2);
          var e2 = xt(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "ean_2"), t3;
          }
          return g()(n2, [{ key: "decode", value: function(t3, e3) {
            t3 && (this._row = t3);
            var n3 = 0, r2 = e3, o2 = this._row.length, i2 = [], a2 = [], u2 = null;
            if (void 0 === r2) return null;
            for (var c2 = 0; c2 < 2 && r2 < o2; c2++) {
              if (!(u2 = this._decodeCode(r2))) return null;
              a2.push(u2), i2.push(u2.code % 10), u2.code >= 10 && (n3 |= 1 << 1 - c2), 1 !== c2 && (r2 = this._nextSet(this._row, u2.end), r2 = this._nextUnset(this._row, r2));
            }
            if (2 !== i2.length || parseInt(i2.join("")) % 4 !== n3) return null;
            var s2 = this._findStart();
            return { code: i2.join(""), decodedCodes: a2, end: u2.end, format: this.FORMAT, startInfo: s2, start: s2.start };
          } }]), n2;
        }(gt);
        function _t(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var bt = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
        var wt = function(t2) {
          b()(n2, t2);
          var e2 = _t(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "ean_5"), t3;
          }
          return g()(n2, [{ key: "decode", value: function(t3, e3) {
            if (void 0 === e3) return null;
            t3 && (this._row = t3);
            for (var n3 = 0, r2 = e3, o2 = this._row.length, i2 = null, a2 = [], u2 = [], c2 = 0; c2 < 5 && r2 < o2; c2++) {
              if (!(i2 = this._decodeCode(r2))) return null;
              u2.push(i2), a2.push(i2.code % 10), i2.code >= 10 && (n3 |= 1 << 4 - c2), 4 !== c2 && (r2 = this._nextSet(this._row, i2.end), r2 = this._nextUnset(this._row, r2));
            }
            if (5 !== a2.length) return null;
            if (function(t4) {
              for (var e4 = t4.length, n4 = 0, r3 = e4 - 2; r3 >= 0; r3 -= 2) n4 += t4[r3];
              n4 *= 3;
              for (var o3 = e4 - 1; o3 >= 0; o3 -= 2) n4 += t4[o3];
              return (n4 *= 3) % 10;
            }(a2) !== function(t4) {
              for (var e4 = 0; e4 < 10; e4++) if (t4 === bt[e4]) return e4;
              return null;
            }(n3)) return null;
            var s2 = this._findStart();
            return { code: a2.join(""), decodedCodes: u2, end: i2.end, format: this.FORMAT, startInfo: s2, start: s2.start };
          } }]), n2;
        }(gt);
        function Ot(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var Rt = function(t2) {
          b()(n2, t2);
          var e2 = Ot(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "ean_8"), t3;
          }
          return g()(n2, [{ key: "_decodePayload", value: function(t3, e3, n3) {
            for (var r2 = t3, o2 = 0; o2 < 4; o2++) {
              if (!(r2 = this._decodeCode(r2.end, 10))) return null;
              e3.push(r2.code), n3.push(r2);
            }
            if (null === (r2 = this._findPattern(ht, r2.end, true, false))) return null;
            n3.push(r2);
            for (var i2 = 0; i2 < 4; i2++) {
              if (!(r2 = this._decodeCode(r2.end, 10))) return null;
              n3.push(r2), e3.push(r2.code);
            }
            return r2;
          } }]), n2;
        }(gt);
        function Mt(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var Ct = function(t2) {
          b()(n2, t2);
          var e2 = Mt(n2);
          function n2(t3) {
            var r2;
            return p()(this, n2), r2 = e2.call(this, u()({ normalizeBarSpaceWidth: false }, t3)), E()(m()(r2), "barSpaceRatio", [1, 1]), E()(m()(r2), "SINGLE_CODE_ERROR", 0.78), E()(m()(r2), "AVG_CODE_ERROR", 0.38), E()(m()(r2), "START_PATTERN", [1, 1, 1, 1]), E()(m()(r2), "STOP_PATTERN", [1, 1, 3]), E()(m()(r2), "CODE_PATTERN", [[1, 1, 3, 3, 1], [3, 1, 1, 1, 3], [1, 3, 1, 1, 3], [3, 3, 1, 1, 1], [1, 1, 3, 1, 3], [3, 1, 3, 1, 1], [1, 3, 3, 1, 1], [1, 1, 1, 3, 3], [3, 1, 1, 3, 1], [1, 3, 1, 3, 1]]), E()(m()(r2), "MAX_CORRECTION_FACTOR", 5), E()(m()(r2), "FORMAT", "i2of5"), t3.normalizeBarSpaceWidth && (r2.SINGLE_CODE_ERROR = 0.38, r2.AVG_CODE_ERROR = 0.09), r2.config = t3, O()(r2, m()(r2));
          }
          return g()(n2, [{ key: "_matchPattern", value: function(t3, e3) {
            if (this.config.normalizeBarSpaceWidth) {
              for (var r2 = [0, 0], o2 = [0, 0], i2 = [0, 0], a2 = this.MAX_CORRECTION_FACTOR, u2 = 1 / a2, c2 = 0; c2 < t3.length; c2++) r2[c2 % 2] += t3[c2], o2[c2 % 2] += e3[c2];
              i2[0] = o2[0] / r2[0], i2[1] = o2[1] / r2[1], i2[0] = Math.max(Math.min(i2[0], a2), u2), i2[1] = Math.max(Math.min(i2[1], a2), u2), this.barSpaceRatio = i2;
              for (var s2 = 0; s2 < t3.length; s2++) t3[s2] *= this.barSpaceRatio[s2 % 2];
            }
            return G()(M()(n2.prototype), "_matchPattern", this).call(this, t3, e3);
          } }, { key: "_findPattern", value: function(t3, e3) {
            var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o2 = new Array(t3.length).fill(0), i2 = 0, a2 = { error: Number.MAX_VALUE, start: 0, end: 0 }, u2 = this.AVG_CODE_ERROR;
            n3 = n3 || false, r2 = r2 || false, e3 || (e3 = this._nextSet(this._row));
            for (var c2 = e3; c2 < this._row.length; c2++) if (this._row[c2] ^ (n3 ? 1 : 0)) o2[i2]++;
            else {
              if (i2 === o2.length - 1) {
                var s2 = o2.reduce(function(t4, e4) {
                  return t4 + e4;
                }, 0), f2 = this._matchPattern(o2, t3);
                if (f2 < u2) return a2.error = f2, a2.start = c2 - s2, a2.end = c2, a2;
                if (!r2) return null;
                for (var l2 = 0; l2 < o2.length - 2; l2++) o2[l2] = o2[l2 + 2];
                o2[o2.length - 2] = 0, o2[o2.length - 1] = 0, i2--;
              } else i2++;
              o2[i2] = 1, n3 = !n3;
            }
            return null;
          } }, { key: "_findStart", value: function() {
            for (var t3 = 0, e3 = this._nextSet(this._row), n3 = null, r2 = 1; !n3; ) {
              if (!(n3 = this._findPattern(this.START_PATTERN, e3, false, true))) return null;
              if (r2 = Math.floor((n3.end - n3.start) / 4), (t3 = n3.start - 10 * r2) >= 0 && this._matchRange(t3, n3.start, 0)) return n3;
              e3 = n3.end, n3 = null;
            }
            return null;
          } }, { key: "_verifyTrailingWhitespace", value: function(t3) {
            var e3 = t3.end + (t3.end - t3.start) / 2;
            return e3 < this._row.length && this._matchRange(t3.end, e3, 0) ? t3 : null;
          } }, { key: "_findEnd", value: function() {
            this._row.reverse();
            var t3 = this._findPattern(this.STOP_PATTERN);
            if (this._row.reverse(), null === t3) return null;
            var e3 = t3.start;
            return t3.start = this._row.length - t3.end, t3.end = this._row.length - e3, null !== t3 ? this._verifyTrailingWhitespace(t3) : null;
          } }, { key: "_decodePair", value: function(t3) {
            for (var e3 = [], n3 = 0; n3 < t3.length; n3++) {
              var r2 = this._decodeCode(t3[n3]);
              if (!r2) return null;
              e3.push(r2);
            }
            return e3;
          } }, { key: "_decodeCode", value: function(t3) {
            for (var e3 = this.AVG_CODE_ERROR, n3 = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }, r2 = 0; r2 < this.CODE_PATTERN.length; r2++) {
              var o2 = this._matchPattern(t3, this.CODE_PATTERN[r2]);
              o2 < n3.error && (n3.code = r2, n3.error = o2);
            }
            return n3.error < e3 ? n3 : null;
          } }, { key: "_decodePayload", value: function(t3, e3, n3) {
            for (var r2 = 0, o2 = t3.length, i2 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], a2 = null; r2 < o2; ) {
              for (var u2 = 0; u2 < 5; u2++) i2[0][u2] = t3[r2] * this.barSpaceRatio[0], i2[1][u2] = t3[r2 + 1] * this.barSpaceRatio[1], r2 += 2;
              if (!(a2 = this._decodePair(i2))) return null;
              for (var c2 = 0; c2 < a2.length; c2++) e3.push(a2[c2].code + ""), n3.push(a2[c2]);
            }
            return a2;
          } }, { key: "_verifyCounterLength", value: function(t3) {
            return t3.length % 10 == 0;
          } }, { key: "decode", value: function(t3, e3) {
            var n3 = new Array(), r2 = new Array(), o2 = this._findStart();
            if (!o2) return null;
            r2.push(o2);
            var i2 = this._findEnd();
            if (!i2) return null;
            var a2 = this._fillCounters(o2.end, i2.start, false);
            return this._verifyCounterLength(a2) && this._decodePayload(a2, n3, r2) ? n3.length % 2 != 0 || n3.length < 6 ? null : (r2.push(i2), { code: n3.join(""), start: o2.start, end: i2.end, startInfo: o2, decodedCodes: r2, format: this.FORMAT }) : null;
          } }]), n2;
        }(k);
        function Et(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function At(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var St = function(t2) {
          b()(n2, t2);
          var e2 = At(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "CODE_FREQUENCY", [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]), E()(m()(t3), "STOP_PATTERN", [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]), E()(m()(t3), "FORMAT", "upc_e"), t3;
          }
          return g()(n2, [{ key: "_decodePayload", value: function(t3, e3, n3) {
            for (var r2 = function(t4) {
              for (var e4 = 1; e4 < arguments.length; e4++) {
                var n4 = null != arguments[e4] ? arguments[e4] : {};
                e4 % 2 ? Et(Object(n4), true).forEach(function(e5) {
                  E()(t4, e5, n4[e5]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(n4)) : Et(Object(n4)).forEach(function(e5) {
                  Object.defineProperty(t4, e5, Object.getOwnPropertyDescriptor(n4, e5));
                });
              }
              return t4;
            }({}, t3), o2 = 0, i2 = 0; i2 < 6; i2++) {
              if (!(r2 = this._decodeCode(r2.end))) return null;
              r2.code >= 10 && (r2.code = r2.code - 10, o2 |= 1 << 5 - i2), e3.push(r2.code), n3.push(r2);
            }
            return this._determineParity(o2, e3) ? r2 : null;
          } }, { key: "_determineParity", value: function(t3, e3) {
            for (var n3 = 0; n3 < this.CODE_FREQUENCY.length; n3++) for (var r2 = 0; r2 < this.CODE_FREQUENCY[n3].length; r2++) if (t3 === this.CODE_FREQUENCY[n3][r2]) return e3.unshift(n3), e3.push(r2), true;
            return false;
          } }, { key: "_convertToUPCA", value: function(t3) {
            var e3 = [t3[0]], n3 = t3[t3.length - 2];
            return (e3 = n3 <= 2 ? e3.concat(t3.slice(1, 3)).concat([n3, 0, 0, 0, 0]).concat(t3.slice(3, 6)) : 3 === n3 ? e3.concat(t3.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(t3.slice(4, 6)) : 4 === n3 ? e3.concat(t3.slice(1, 5)).concat([0, 0, 0, 0, 0, t3[5]]) : e3.concat(t3.slice(1, 6)).concat([0, 0, 0, 0, n3])).push(t3[t3.length - 1]), e3;
          } }, { key: "_checksum", value: function(t3) {
            return G()(M()(n2.prototype), "_checksum", this).call(this, this._convertToUPCA(t3));
          } }, { key: "_findEnd", value: function(t3, e3) {
            return G()(M()(n2.prototype), "_findEnd", this).call(this, t3, true);
          } }, { key: "_verifyTrailingWhitespace", value: function(t3) {
            var e3 = t3.end + (t3.end - t3.start) / 2;
            return e3 < this._row.length && this._matchRange(t3.end, e3, 0) ? t3 : null;
          } }]), n2;
        }(gt);
        function kt(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var Pt = function(t2) {
          b()(n2, t2);
          var e2 = kt(n2);
          function n2() {
            var t3;
            p()(this, n2);
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
            return t3 = e2.call.apply(e2, [this].concat(o2)), E()(m()(t3), "FORMAT", "upc_a"), t3;
          }
          return g()(n2, [{ key: "decode", value: function(t3, e3) {
            var n3 = gt.prototype.decode.call(this);
            return n3 && n3.code && 13 === n3.code.length && "0" === n3.code.charAt(0) ? (n3.code = n3.code.substring(1), n3) : null;
          } }]), n2;
        }(gt), Tt = {}, Dt = { UP: 1, DOWN: -1 };
        Tt.getBarcodeLine = function(t2, e2, n2) {
          var r2, o2, i2, a2, u2, c2 = 0 | e2.x, s2 = 0 | e2.y, f2 = 0 | n2.x, l2 = 0 | n2.y, d2 = Math.abs(l2 - s2) > Math.abs(f2 - c2), h2 = [], v2 = t2.data, p2 = t2.size.x, y2 = 255, g2 = 0;
          function x2(t3, e3) {
            u2 = v2[e3 * p2 + t3], y2 = u2 < y2 ? u2 : y2, g2 = u2 > g2 ? u2 : g2, h2.push(u2);
          }
          d2 && (i2 = c2, c2 = s2, s2 = i2, i2 = f2, f2 = l2, l2 = i2), c2 > f2 && (i2 = c2, c2 = f2, f2 = i2, i2 = s2, s2 = l2, l2 = i2);
          var m2 = f2 - c2, _2 = Math.abs(l2 - s2);
          r2 = m2 / 2 | 0, o2 = s2;
          var b2 = s2 < l2 ? 1 : -1;
          for (a2 = c2; a2 < f2; a2++) d2 ? x2(o2, a2) : x2(a2, o2), (r2 -= _2) < 0 && (o2 += b2, r2 += m2);
          return { line: h2, min: y2, max: g2 };
        }, Tt.toBinaryLine = function(t2) {
          var e2, n2, r2, o2, i2, a2, u2 = t2.min, c2 = t2.max, s2 = t2.line, f2 = u2 + (c2 - u2) / 2, l2 = [], d2 = (c2 - u2) / 12, h2 = -d2;
          for (r2 = s2[0] > f2 ? Dt.UP : Dt.DOWN, l2.push({ pos: 0, val: s2[0] }), i2 = 0; i2 < s2.length - 2; i2++) r2 !== (o2 = (e2 = s2[i2 + 1] - s2[i2]) + (n2 = s2[i2 + 2] - s2[i2 + 1]) < h2 && s2[i2 + 1] < 1.5 * f2 ? Dt.DOWN : e2 + n2 > d2 && s2[i2 + 1] > 0.5 * f2 ? Dt.UP : r2) && (l2.push({ pos: i2, val: s2[i2] }), r2 = o2);
          for (l2.push({ pos: s2.length, val: s2[s2.length - 1] }), a2 = l2[0].pos; a2 < l2[1].pos; a2++) s2[a2] = s2[a2] > f2 ? 0 : 1;
          for (i2 = 1; i2 < l2.length - 1; i2++) for (d2 = l2[i2 + 1].val > l2[i2].val ? l2[i2].val + (l2[i2 + 1].val - l2[i2].val) / 3 * 2 | 0 : l2[i2 + 1].val + (l2[i2].val - l2[i2 + 1].val) / 3 | 0, a2 = l2[i2].pos; a2 < l2[i2 + 1].pos; a2++) s2[a2] = s2[a2] > d2 ? 0 : 1;
          return { line: s2, threshold: d2 };
        }, Tt.debug = { printFrequency: function(t2, e2) {
          var n2, r2 = e2.getContext("2d");
          for (e2.width = t2.length, e2.height = 256, r2.beginPath(), r2.strokeStyle = "blue", n2 = 0; n2 < t2.length; n2++) r2.moveTo(n2, 255), r2.lineTo(n2, 255 - t2[n2]);
          r2.stroke(), r2.closePath();
        }, printPattern: function(t2, e2) {
          var n2, r2 = e2.getContext("2d");
          for (e2.width = t2.length, r2.fillColor = "black", n2 = 0; n2 < t2.length; n2++) 1 === t2[n2] && r2.fillRect(n2, 0, 1, 100);
        } };
        var jt = Tt;
        function It(t2, e2) {
          var n2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
          if (!n2) {
            if (Array.isArray(t2) || (n2 = function(t3, e3) {
              if (!t3) return;
              if ("string" == typeof t3) return zt(t3, e3);
              var n3 = Object.prototype.toString.call(t3).slice(8, -1);
              "Object" === n3 && t3.constructor && (n3 = t3.constructor.name);
              if ("Map" === n3 || "Set" === n3) return Array.from(t3);
              if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return zt(t3, e3);
            }(t2)) || e2 && t2 && "number" == typeof t2.length) {
              n2 && (t2 = n2);
              var r2 = 0, o2 = function() {
              };
              return { s: o2, n: function() {
                return r2 >= t2.length ? { done: true } : { done: false, value: t2[r2++] };
              }, e: function(t3) {
                throw t3;
              }, f: o2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, a2 = true, u2 = false;
          return { s: function() {
            n2 = n2.call(t2);
          }, n: function() {
            var t3 = n2.next();
            return a2 = t3.done, t3;
          }, e: function(t3) {
            u2 = true, i2 = t3;
          }, f: function() {
            try {
              a2 || null == n2.return || n2.return();
            } finally {
              if (u2) throw i2;
            }
          } };
        }
        function zt(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++) r2[n2] = t2[n2];
          return r2;
        }
        var Ut = { code_128_reader: q, ean_reader: gt, ean_5_reader: wt, ean_2_reader: mt, ean_8_reader: Rt, code_39_reader: Z, code_39_vin_reader: ot, codabar_reader: B, upc_reader: Pt, upc_e_reader: St, i2of5_reader: Ct, "2of5_reader": z, code_93_reader: ct, code_32_reader: tt }, Lt = { registerReader: function(t2, e2) {
          Ut[t2] = e2;
        }, create: function(t2, e2) {
          var n2 = { frequency: null, pattern: null, overlay: null }, r2 = [];
          function o2() {
            t2.readers.forEach(function(t3) {
              var e3, n3 = {}, o3 = [];
              "object" === i()(t3) ? (e3 = t3.format, n3 = t3.config) : "string" == typeof t3 && (e3 = t3), n3.supplements && (o3 = n3.supplements.map(function(t4) {
                return new Ut[t4]();
              }));
              try {
                var a3 = new Ut[e3](n3, o3);
                r2.push(a3);
              } catch (t4) {
                throw console.error("* Error constructing reader ", e3, t4), t4;
              }
            });
          }
          function a2(t3) {
            var n3, o3 = null, i2 = jt.getBarcodeLine(e2, t3[0], t3[1]);
            for (jt.toBinaryLine(i2), n3 = 0; n3 < r2.length && null === o3; n3++) o3 = r2[n3].decodePattern(i2.line);
            return null === o3 ? null : { codeResult: o3, barcodeLine: i2 };
          }
          function u2(t3) {
            return c2.apply(this, arguments);
          }
          function c2() {
            return (c2 = f()(d.a.mark(function t3(e3) {
              var n3, o3, i2, a3;
              return d.a.wrap(function(t4) {
                for (; ; ) switch (t4.prev = t4.next) {
                  case 0:
                    n3 = null, o3 = It(r2), t4.prev = 2, o3.s();
                  case 4:
                    if ((i2 = o3.n()).done) {
                      t4.next = 14;
                      break;
                    }
                    if (!(a3 = i2.value).decodeImage) {
                      t4.next = 12;
                      break;
                    }
                    return t4.next = 9, a3.decodeImage(e3);
                  case 9:
                    if (!(n3 = t4.sent)) {
                      t4.next = 12;
                      break;
                    }
                    return t4.abrupt("break", 14);
                  case 12:
                    t4.next = 4;
                    break;
                  case 14:
                    t4.next = 19;
                    break;
                  case 16:
                    t4.prev = 16, t4.t0 = t4.catch(2), o3.e(t4.t0);
                  case 19:
                    return t4.prev = 19, o3.f(), t4.finish(19);
                  case 22:
                    return t4.abrupt("return", n3);
                  case 23:
                  case "end":
                    return t4.stop();
                }
              }, t3, null, [[2, 16, 19, 22]]);
            }))).apply(this, arguments);
          }
          function s2(t3) {
            var r3, o3;
            n2.overlay;
            var i2 = function(t4) {
              return Math.sqrt(Math.pow(Math.abs(t4[1].y - t4[0].y), 2) + Math.pow(Math.abs(t4[1].x - t4[0].x), 2));
            }(r3 = function(t4) {
              return [{ x: (t4[1][0] - t4[0][0]) / 2 + t4[0][0], y: (t4[1][1] - t4[0][1]) / 2 + t4[0][1] }, { x: (t4[3][0] - t4[2][0]) / 2 + t4[2][0], y: (t4[3][1] - t4[2][1]) / 2 + t4[2][1] }];
            }(t3)), u3 = Math.atan2(r3[1].y - r3[0].y, r3[1].x - r3[0].x);
            return null === (r3 = function(t4, n3, r4) {
              function o4(e3) {
                var r5 = e3 * Math.sin(n3), o5 = e3 * Math.cos(n3);
                t4[0].y -= r5, t4[0].x -= o5, t4[1].y += r5, t4[1].x += o5;
              }
              for (o4(r4); r4 > 1 && (!e2.inImageWithBorder(t4[0]) || !e2.inImageWithBorder(t4[1])); ) o4(-(r4 -= Math.ceil(r4 / 2)));
              return t4;
            }(r3, u3, Math.floor(0.1 * i2))) ? null : (null === (o3 = a2(r3)) && (o3 = function(t4, e3, n3) {
              var r4, o4, i3, u4 = Math.sqrt(Math.pow(t4[1][0] - t4[0][0], 2) + Math.pow(t4[1][1] - t4[0][1], 2)), c3 = null, s3 = Math.sin(n3), f2 = Math.cos(n3);
              for (r4 = 1; r4 < 16 && null === c3; r4++) i3 = { y: (o4 = u4 / 16 * r4 * (r4 % 2 == 0 ? -1 : 1)) * s3, x: o4 * f2 }, e3[0].y += i3.x, e3[0].x -= i3.y, e3[1].y += i3.x, e3[1].x -= i3.y, c3 = a2(e3);
              return c3;
            }(t3, r3, u3)), null === o3 ? null : { codeResult: o3.codeResult, line: r3, angle: u3, pattern: o3.barcodeLine.line, threshold: o3.barcodeLine.threshold });
          }
          return o2(), { decodeFromBoundingBox: function(t3) {
            return s2(t3);
          }, decodeFromBoundingBoxes: function(e3) {
            var n3, r3, o3 = [], i2 = t2.multiple;
            for (n3 = 0; n3 < e3.length; n3++) {
              var a3 = e3[n3];
              if ((r3 = s2(a3) || {}).box = a3, i2) o3.push(r3);
              else if (r3.codeResult) return r3;
            }
            return { barcodes: o3 };
          }, decodeFromImage: function(t3) {
            return f()(d.a.mark(function e3() {
              var n3;
              return d.a.wrap(function(e4) {
                for (; ; ) switch (e4.prev = e4.next) {
                  case 0:
                    return e4.next = 2, u2(t3);
                  case 2:
                    return n3 = e4.sent, e4.abrupt("return", n3);
                  case 4:
                  case "end":
                    return e4.stop();
                }
              }, e3);
            }))();
          }, registerReader: function(t3, e3) {
            if (Ut[t3]) throw new Error("cannot register existing reader", t3);
            Ut[t3] = e3;
          }, setReaders: function(e3) {
            t2.readers = e3, r2.length = 0, o2();
          } };
        } }, Nt = /* @__PURE__ */ function() {
          var t2 = {};
          function e2(e3) {
            return t2[e3] || (t2[e3] = { subscribers: [] }), t2[e3];
          }
          function n2(t3, e3) {
            t3.async ? setTimeout(function() {
              t3.callback(e3);
            }, 4) : t3.callback(e3);
          }
          function r2(t3, n3, r3) {
            var o2;
            if ("function" == typeof n3) o2 = { callback: n3, async: r3 };
            else if (!(o2 = n3).callback) throw new Error("Callback was not specified on options");
            e2(t3).subscribers.push(o2);
          }
          return { subscribe: function(t3, e3, n3) {
            return r2(t3, e3, n3);
          }, publish: function(t3, r3) {
            var o2 = e2(t3), i2 = o2.subscribers;
            i2.filter(function(t4) {
              return !!t4.once;
            }).forEach(function(t4) {
              n2(t4, r3);
            }), o2.subscribers = i2.filter(function(t4) {
              return !t4.once;
            }), o2.subscribers.forEach(function(t4) {
              n2(t4, r3);
            });
          }, once: function(t3, e3) {
            var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            r2(t3, { callback: e3, async: n3, once: true });
          }, unsubscribe: function(n3, r3) {
            if (n3) {
              var o2 = e2(n3);
              o2.subscribers = o2 && r3 ? o2.subscribers.filter(function(t3) {
                return t3.callback !== r3;
              }) : [];
            } else t2 = {};
          } };
        }(), Ft = n(63), Bt = n.n(Ft), Wt = n(64);
        function qt(t2) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = M()(t2);
            if (e2) {
              var o2 = M()(this).constructor;
              n2 = Reflect.construct(r2, arguments, o2);
            } else n2 = r2.apply(this, arguments);
            return O()(this, n2);
          };
        }
        var Vt, Gt = function(t2) {
          b()(n2, t2);
          var e2 = qt(n2);
          function n2(t3, r2) {
            var o2;
            return p()(this, n2), o2 = e2.call(this, t3), E()(m()(o2), "code", void 0), o2.code = r2, Object.setPrototypeOf(m()(o2), n2.prototype), o2;
          }
          return g()(n2);
        }(n.n(Wt)()(Error)), Ht = "This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.";
        function Xt() {
          try {
            return navigator.mediaDevices.enumerateDevices();
          } catch (e2) {
            var t2 = new Gt("enumerateDevices is not defined. ".concat(Ht), -1);
            return Promise.reject(t2);
          }
        }
        function Qt(t2) {
          try {
            return navigator.mediaDevices.getUserMedia(t2);
          } catch (t3) {
            var e2 = new Gt("getUserMedia is not defined. ".concat(Ht), -1);
            return Promise.reject(e2);
          }
        }
        function Yt(t2) {
          return new Promise(function(e2, n2) {
            var r2 = 10;
            !function o2() {
              r2 > 0 ? t2.videoWidth > 10 && t2.videoHeight > 10 ? e2() : window.setTimeout(o2, 500) : n2(new Gt("Unable to play video stream. Is webcam working?", -1)), r2--;
            }();
          });
        }
        function $t(t2, e2) {
          return Zt.apply(this, arguments);
        }
        function Zt() {
          return (Zt = f()(d.a.mark(function t2(e2, n2) {
            var r2;
            return d.a.wrap(function(t3) {
              for (; ; ) switch (t3.prev = t3.next) {
                case 0:
                  return t3.next = 2, Qt(n2);
                case 2:
                  if (r2 = t3.sent, Vt = r2, !e2) {
                    t3.next = 11;
                    break;
                  }
                  return e2.setAttribute("autoplay", "true"), e2.setAttribute("muted", "true"), e2.setAttribute("playsinline", "true"), e2.srcObject = r2, e2.addEventListener("loadedmetadata", function() {
                    e2.play().catch(function(t4) {
                      console.warn("* Error while trying to play video stream:", t4);
                    });
                  }), t3.abrupt("return", Yt(e2));
                case 11:
                  return t3.abrupt("return", Promise.resolve());
                case 12:
                case "end":
                  return t3.stop();
              }
            }, t2);
          }))).apply(this, arguments);
        }
        function Kt(t2) {
          var e2 = Bt()(t2, ["width", "height", "facingMode", "aspectRatio", "deviceId"]);
          return void 0 !== t2.minAspectRatio && t2.minAspectRatio > 0 && (e2.aspectRatio = t2.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), void 0 !== t2.facing && (e2.facingMode = t2.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), e2;
        }
        function Jt() {
          var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = Kt(t2);
          return e2 && e2.deviceId && e2.facingMode && delete e2.facingMode, Promise.resolve({ audio: false, video: e2 });
        }
        function te() {
          return (te = f()(d.a.mark(function t2() {
            var e2;
            return d.a.wrap(function(t3) {
              for (; ; ) switch (t3.prev = t3.next) {
                case 0:
                  return t3.next = 2, Xt();
                case 2:
                  return e2 = t3.sent, t3.abrupt("return", e2.filter(function(t4) {
                    return "videoinput" === t4.kind;
                  }));
                case 4:
                case "end":
                  return t3.stop();
              }
            }, t2);
          }))).apply(this, arguments);
        }
        function ee() {
          if (!Vt) return null;
          var t2 = Vt.getVideoTracks();
          return t2 && null != t2 && t2.length ? t2[0] : null;
        }
        var ne = { requestedVideoElement: null, request: function(t2, e2) {
          return f()(d.a.mark(function n2() {
            var r2;
            return d.a.wrap(function(n3) {
              for (; ; ) switch (n3.prev = n3.next) {
                case 0:
                  return ne.requestedVideoElement = t2, n3.next = 3, Jt(e2);
                case 3:
                  return r2 = n3.sent, n3.abrupt("return", $t(t2, r2));
                case 5:
                case "end":
                  return n3.stop();
              }
            }, n2);
          }))();
        }, release: function() {
          var t2 = Vt && Vt.getVideoTracks();
          return null !== ne.requestedVideoElement && ne.requestedVideoElement.pause(), new Promise(function(e2) {
            setTimeout(function() {
              t2 && t2.length && t2.forEach(function(t3) {
                return t3.stop();
              }), Vt = null, ne.requestedVideoElement = null, e2();
            }, 0);
          });
        }, enumerateVideoDevices: function() {
          return te.apply(this, arguments);
        }, getActiveStreamLabel: function() {
          var t2 = ee();
          return t2 ? t2.label : "";
        }, getActiveTrack: ee, disableTorch: function() {
          return f()(d.a.mark(function t2() {
            var e2;
            return d.a.wrap(function(t3) {
              for (; ; ) switch (t3.prev = t3.next) {
                case 0:
                  if (!(e2 = ee())) {
                    t3.next = 11;
                    break;
                  }
                  return t3.prev = 2, t3.next = 5, e2.applyConstraints({ advanced: [{ torch: false }] });
                case 5:
                  t3.next = 11;
                  break;
                case 7:
                  throw t3.prev = 7, t3.t0 = t3.catch(2), t3.t0 instanceof OverconstrainedError && console.warn("quagga2/CameraAccess: Torch not supported on this device"), t3.t0;
                case 11:
                case "end":
                  return t3.stop();
              }
            }, t2, null, [[2, 7]]);
          }))();
        }, enableTorch: function() {
          return f()(d.a.mark(function t2() {
            var e2;
            return d.a.wrap(function(t3) {
              for (; ; ) switch (t3.prev = t3.next) {
                case 0:
                  if (!(e2 = ee())) {
                    t3.next = 11;
                    break;
                  }
                  return t3.prev = 2, t3.next = 5, e2.applyConstraints({ advanced: [{ torch: true }] });
                case 5:
                  t3.next = 11;
                  break;
                case 7:
                  throw t3.prev = 7, t3.t0 = t3.catch(2), t3.t0 instanceof OverconstrainedError && console.warn("quagga2/CameraAccess: Torch not supported on this device"), t3.t0;
                case 11:
                case "end":
                  return t3.stop();
              }
            }, t2, null, [[2, 7]]);
          }))();
        } }, re = ne;
        var oe = { create: function(t2) {
          var e2, n2 = document.createElement("canvas"), r2 = n2.getContext("2d", { willReadFrequently: !!t2.willReadFrequently }), o2 = [], i2 = null !== (e2 = t2.capacity) && void 0 !== e2 ? e2 : 20, a2 = true === t2.capture;
          function u2(e3) {
            return !!i2 && e3 && !function(t3, e4) {
              return e4 && e4.some(function(e5) {
                return Object.keys(e5).every(function(n3) {
                  return e5[n3] === t3[n3];
                });
              });
            }(e3, t2.blacklist) && function(t3, e4) {
              return "function" != typeof e4 || e4(t3);
            }(e3, t2.filter);
          }
          return { addResult: function(t3, e3, c2) {
            var s2 = {};
            u2(c2) && (i2--, s2.codeResult = c2, a2 && (n2.width = e3.x, n2.height = e3.y, h.a.drawImage(t3, e3, r2), s2.frame = n2.toDataURL()), o2.push(s2));
          }, getResults: function() {
            return o2;
          } };
        } }, ie = { inputStream: { name: "Live", type: "LiveStream", constraints: { width: 640, height: 480, facingMode: "environment" }, area: { top: "0%", right: "0%", left: "0%", bottom: "0%" }, singleChannel: false }, locate: true, numOfWorkers: 4, decoder: { readers: ["code_128_reader"] }, locator: { halfSample: true, patchSize: "medium" } }, ae = n(5), ue = n(10), ce = Math.PI / 180;
        var se = { create: function(t2, e2) {
          var n2, r2 = {}, o2 = t2.getConfig(), i2 = (Object(ue.h)(t2.getRealWidth(), t2.getRealHeight()), t2.getCanvasSize()), a2 = Object(ue.h)(t2.getWidth(), t2.getHeight()), u2 = t2.getTopRight(), c2 = u2.x, s2 = u2.y, f2 = null, l2 = null, d2 = o2.willReadFrequently;
          return (n2 = e2 || document.createElement("canvas")).width = i2.x, n2.height = i2.y, console.warn("*** frame_grabber_browser: willReadFrequently=", d2, "canvas=", n2), f2 = n2.getContext("2d", { willReadFrequently: !!d2 }), l2 = new Uint8Array(a2.x * a2.y), r2.attachData = function(t3) {
            l2 = t3;
          }, r2.getData = function() {
            return l2;
          }, r2.grab = function() {
            var e3, r3 = o2.halfSample, u3 = t2.getFrame(), d3 = u3, h2 = 0;
            if (d3) {
              if (function(t3, e4) {
                t3.width !== e4.x && (t3.width = e4.x), t3.height !== e4.y && (t3.height = e4.y);
              }(n2, i2), "ImageStream" === o2.type && (d3 = u3.img, u3.tags && u3.tags.orientation)) switch (u3.tags.orientation) {
                case 6:
                  h2 = 90 * ce;
                  break;
                case 8:
                  h2 = -90 * ce;
              }
              return 0 !== h2 ? (f2.translate(i2.x / 2, i2.y / 2), f2.rotate(h2), f2.drawImage(d3, -i2.y / 2, -i2.x / 2, i2.y, i2.x), f2.rotate(-h2), f2.translate(-i2.x / 2, -i2.y / 2)) : f2.drawImage(d3, 0, 0, i2.x, i2.y), e3 = f2.getImageData(c2, s2, a2.x, a2.y).data, r3 ? Object(ue.e)(e3, a2, l2) : Object(ue.c)(e3, l2, o2), true;
            }
            return false;
          }, r2.getSize = function() {
            return a2;
          }, r2;
        } }, fe = se, le = { 274: "orientation" }, de = Object.keys(le).map(function(t2) {
          return le[t2];
        });
        function he(t2) {
          return new Promise(function(e2) {
            var n2 = new FileReader();
            n2.onload = function(t3) {
              return e2(t3.target.result);
            }, n2.readAsArrayBuffer(t2);
          });
        }
        function ve(t2) {
          return new Promise(function(e2, n2) {
            var r2 = new XMLHttpRequest();
            r2.open("GET", t2, true), r2.responseType = "blob", r2.onreadystatechange = function() {
              r2.readyState !== XMLHttpRequest.DONE || 200 !== r2.status && 0 !== r2.status || e2(this.response);
            }, r2.onerror = n2, r2.send();
          });
        }
        function pe(t2) {
          var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de, n2 = new DataView(t2), r2 = t2.byteLength, o2 = e2.reduce(function(t3, e3) {
            var n3 = Object.keys(le).filter(function(t4) {
              return le[t4] === e3;
            })[0];
            return n3 && (t3[n3] = e3), t3;
          }, {}), i2 = 2;
          if (255 !== n2.getUint8(0) || 216 !== n2.getUint8(1)) return false;
          for (; i2 < r2; ) {
            if (255 !== n2.getUint8(i2)) return false;
            if (225 === n2.getUint8(i2 + 1)) return ye(n2, i2 + 4, o2);
            i2 += 2 + n2.getUint16(i2 + 2);
          }
          return false;
        }
        function ye(t2, e2, n2) {
          if ("Exif" !== function(t3, e3, n3) {
            for (var r3 = "", o3 = e3; o3 < e3 + n3; o3++) r3 += String.fromCharCode(t3.getUint8(o3));
            return r3;
          }(t2, e2, 4)) return false;
          var r2, o2 = e2 + 6;
          if (18761 === t2.getUint16(o2)) r2 = false;
          else {
            if (19789 !== t2.getUint16(o2)) return false;
            r2 = true;
          }
          if (42 !== t2.getUint16(o2 + 2, !r2)) return false;
          var i2 = t2.getUint32(o2 + 4, !r2);
          return !(i2 < 8) && function(t3, e3, n3, r3, o3) {
            for (var i3 = t3.getUint16(n3, !o3), a2 = {}, u2 = 0; u2 < i3; u2++) {
              var c2 = n3 + 12 * u2 + 2, s2 = r3[t3.getUint16(c2, !o3)];
              s2 && (a2[s2] = ge(t3, c2, e3, n3, o3));
            }
            return a2;
          }(t2, o2, o2 + i2, n2, r2);
        }
        function ge(t2, e2, n2, r2, o2) {
          var i2 = t2.getUint16(e2 + 2, !o2), a2 = t2.getUint32(e2 + 4, !o2);
          switch (i2) {
            case 3:
              if (1 === a2) return t2.getUint16(e2 + 8, !o2);
          }
          return null;
        }
        var xe = {};
        function me(t2, e2) {
          t2.onload = function() {
            e2.loaded(this);
          };
        }
        xe.load = function(t2, e2, n2, r2, o2) {
          var i2, a2, u2, c2 = new Array(r2), s2 = new Array(c2.length);
          if (false === o2) c2[0] = t2;
          else for (i2 = 0; i2 < c2.length; i2++) u2 = n2 + i2, c2[i2] = "".concat(t2, "image-").concat("00".concat(u2).slice(-3), ".jpg");
          for (s2.notLoaded = [], s2.addImage = function(t3) {
            s2.notLoaded.push(t3);
          }, s2.loaded = function(n3) {
            for (var r3 = s2.notLoaded, i3 = 0; i3 < r3.length; i3++) if (r3[i3] === n3) {
              r3.splice(i3, 1);
              for (var a3 = 0; a3 < c2.length; a3++) {
                var u3 = c2[a3].substr(c2[a3].lastIndexOf("/"));
                if (-1 !== n3.src.lastIndexOf(u3)) {
                  s2[a3] = { img: n3 };
                  break;
                }
              }
              break;
            }
            0 === r3.length && (false === o2 ? function(t3) {
              var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de;
              return /^blob:/i.test(t3) ? ve(t3).then(he).then(function(t4) {
                return pe(t4, e3);
              }) : Promise.resolve(null);
            }(t2, ["orientation"]).then(function(t3) {
              s2[0].tags = t3, e2(s2);
            }).catch(function(t3) {
              console.log(t3), e2(s2);
            }) : e2(s2));
          }, i2 = 0; i2 < c2.length; i2++) a2 = new Image(), s2.addImage(a2), me(a2, s2), a2.src = c2[i2];
        };
        var _e = xe, be = { createVideoStream: function(t2) {
          console.warn("**** InputStreamBrowser createVideoStream");
          var e2, n2, r2 = null, o2 = ["canrecord", "ended"], i2 = {}, a2 = { x: 0, y: 0, type: "Point" }, u2 = { x: 0, y: 0, type: "XYSize" };
          var c2 = { getRealWidth: function() {
            return t2.videoWidth;
          }, getRealHeight: function() {
            return t2.videoHeight;
          }, getWidth: function() {
            return e2;
          }, getHeight: function() {
            return n2;
          }, setWidth: function(t3) {
            e2 = t3;
          }, setHeight: function(t3) {
            n2 = t3;
          }, setInputStream: function(t3) {
            r2 = t3, this.setAttribute("src", void 0 !== t3.src ? t3.src : "");
          }, ended: function() {
            return t2.ended;
          }, getConfig: function() {
            return r2;
          }, setAttribute: function(e3, n3) {
            t2 && t2.setAttribute(e3, n3);
          }, pause: function() {
            t2.pause();
          }, play: function() {
            t2.play();
          }, setCurrentTime: function(t3) {
            var e3;
            "LiveStream" !== (null === (e3 = r2) || void 0 === e3 ? void 0 : e3.type) && this.setAttribute("currentTime", t3.toString());
          }, addEventListener: function(e3, n3, r3) {
            -1 !== o2.indexOf(e3) ? (i2[e3] || (i2[e3] = []), i2[e3].push(n3)) : t2.addEventListener(e3, n3, r3);
          }, clearEventHandlers: function() {
            o2.forEach(function(e3) {
              var n3 = i2[e3];
              n3 && n3.length > 0 && n3.forEach(function(n4) {
                t2.removeEventListener(e3, n4);
              });
            });
          }, trigger: function(o3, a3) {
            var s2, f2, l2, d2, h2, v2 = i2[o3];
            if ("canrecord" === o3 && (d2 = t2.videoWidth, h2 = t2.videoHeight, e2 = null !== (f2 = r2) && void 0 !== f2 && f2.size ? d2 / h2 > 1 ? r2.size : Math.floor(d2 / h2 * r2.size) : d2, n2 = null !== (l2 = r2) && void 0 !== l2 && l2.size ? d2 / h2 > 1 ? Math.floor(h2 / d2 * r2.size) : r2.size : h2, u2.x = e2, u2.y = n2), v2 && v2.length > 0) for (s2 = 0; s2 < v2.length; s2++) v2[s2].apply(c2, a3);
          }, setTopRight: function(t3) {
            a2.x = t3.x, a2.y = t3.y;
          }, getTopRight: function() {
            return a2;
          }, setCanvasSize: function(t3) {
            u2.x = t3.x, u2.y = t3.y;
          }, getCanvasSize: function() {
            return u2;
          }, getFrame: function() {
            return t2;
          } };
          return c2;
        }, createLiveStream: function(t2) {
          console.warn("**** InputStreamBrowser createLiveStream"), t2 && t2.setAttribute("autoplay", "true");
          var e2 = be.createVideoStream(t2);
          return e2.ended = function() {
            return false;
          }, e2;
        }, createImageStream: function() {
          var t2, e2, n2 = null, r2 = 0, o2 = 0, i2 = 0, a2 = true, u2 = false, c2 = null, s2 = 0, f2 = null, l2 = false, d2 = ["canrecord", "ended"], h2 = {}, v2 = { x: 0, y: 0, type: "Point" }, p2 = { x: 0, y: 0, type: "XYSize" };
          function y2(t3, e3) {
            var n3, r3 = h2[t3];
            if (r3 && r3.length > 0) for (n3 = 0; n3 < r3.length; n3++) r3[n3].apply(g2, e3);
          }
          var g2 = { trigger: y2, getWidth: function() {
            return t2;
          }, getHeight: function() {
            return e2;
          }, setWidth: function(e3) {
            t2 = e3;
          }, setHeight: function(t3) {
            e2 = t3;
          }, getRealWidth: function() {
            return r2;
          }, getRealHeight: function() {
            return o2;
          }, setInputStream: function(a3) {
            var l3;
            n2 = a3, false === a3.sequence ? (f2 = a3.src, s2 = 1) : (f2 = a3.src, s2 = a3.length), u2 = false, _e.load(f2, function(a4) {
              var s3, f3;
              if (c2 = a4, a4[0].tags && a4[0].tags.orientation) switch (a4[0].tags.orientation) {
                case 6:
                case 8:
                  r2 = a4[0].img.height, o2 = a4[0].img.width;
                  break;
                default:
                  r2 = a4[0].img.width, o2 = a4[0].img.height;
              }
              else r2 = a4[0].img.width, o2 = a4[0].img.height;
              t2 = null !== (s3 = n2) && void 0 !== s3 && s3.size ? r2 / o2 > 1 ? n2.size : Math.floor(r2 / o2 * n2.size) : r2, e2 = null !== (f3 = n2) && void 0 !== f3 && f3.size ? r2 / o2 > 1 ? Math.floor(o2 / r2 * n2.size) : n2.size : o2, p2.x = t2, p2.y = e2, u2 = true, i2 = 0, setTimeout(function() {
                y2("canrecord", []);
              }, 0);
            }, 1, s2, null === (l3 = n2) || void 0 === l3 ? void 0 : l3.sequence);
          }, ended: function() {
            return l2;
          }, setAttribute: function() {
          }, getConfig: function() {
            return n2;
          }, pause: function() {
            a2 = true;
          }, play: function() {
            a2 = false;
          }, setCurrentTime: function(t3) {
            i2 = t3;
          }, addEventListener: function(t3, e3) {
            -1 !== d2.indexOf(t3) && (h2[t3] || (h2[t3] = []), h2[t3].push(e3));
          }, clearEventHandlers: function() {
            Object.keys(h2).forEach(function(t3) {
              return delete h2[t3];
            });
          }, setTopRight: function(t3) {
            v2.x = t3.x, v2.y = t3.y;
          }, getTopRight: function() {
            return v2;
          }, setCanvasSize: function(t3) {
            p2.x = t3.x, p2.y = t3.y;
          }, getCanvasSize: function() {
            return p2;
          }, getFrame: function() {
            var t3, e3;
            if (!u2) return null;
            a2 || (t3 = null === (e3 = c2) || void 0 === e3 ? void 0 : e3[i2], i2 < s2 - 1 ? i2++ : setTimeout(function() {
              l2 = true, y2("ended", []);
            }, 0));
            return t3;
          } };
          return g2;
        } }, we = be, Oe = n(23), Re = g()(function t2() {
          p()(this, t2), E()(this, "config", void 0), E()(this, "inputStream", void 0), E()(this, "framegrabber", void 0), E()(this, "inputImageWrapper", void 0), E()(this, "stopped", false), E()(this, "boxSize", void 0), E()(this, "resultCollector", void 0), E()(this, "decoder", void 0), E()(this, "workerPool", []), E()(this, "onUIThread", true), E()(this, "canvasContainer", new Ce());
        }), Me = g()(function t2() {
          p()(this, t2), E()(this, "image", void 0), E()(this, "overlay", void 0);
        }), Ce = g()(function t2() {
          p()(this, t2), E()(this, "ctx", void 0), E()(this, "dom", void 0), this.ctx = new Me(), this.dom = new Me();
        });
        function Ee(t2) {
          if ("undefined" == typeof document) return null;
          if (t2 instanceof HTMLElement && t2.nodeName && 1 === t2.nodeType) return t2;
          var e2 = "string" == typeof t2 ? t2 : "#interactive.viewport";
          return document.querySelector(e2);
        }
        function Ae(t2, e2, n2) {
          var r2 = function(t3, e3) {
            var n3 = document.querySelector(t3);
            return n3 || ((n3 = document.createElement("canvas")).className = e3), n3;
          }(t2, e2);
          console.warn("* initCanvas getCanvasAndContext");
          var o2 = r2.getContext("2d", { willReadFrequently: n2.willReadFrequently });
          return { canvas: r2, context: o2 };
        }
        function Se(t2) {
          var e2, n2, r2, o2, i2, a2, u2 = Ee(null == t2 || null === (e2 = t2.config) || void 0 === e2 || null === (n2 = e2.inputStream) || void 0 === n2 ? void 0 : n2.target), c2 = null == t2 || null === (r2 = t2.config) || void 0 === r2 || null === (o2 = r2.inputStream) || void 0 === o2 ? void 0 : o2.type;
          if (!c2) return null;
          var s2 = function(t3, e3) {
            var n3 = e3.willReadFrequently;
            if ("undefined" != typeof document) {
              var r3 = Ae("canvas.imgBuffer", "imgBuffer", { willReadFrequently: n3 }), o3 = Ae("canvas.drawingBuffer", "drawingBuffer", { willReadFrequently: n3 });
              return r3.canvas.width = o3.canvas.width = t3.x, r3.canvas.height = o3.canvas.height = t3.y, { dom: { image: r3.canvas, overlay: o3.canvas }, ctx: { image: r3.context, overlay: o3.context } };
            }
            return null;
          }(t2.inputStream.getCanvasSize(), { willReadFrequently: !(null == t2 || null === (i2 = t2.config) || void 0 === i2 || null === (a2 = i2.inputStream) || void 0 === a2 || !a2.willReadFrequently) });
          if (!s2) return { dom: { image: null, overlay: null }, ctx: { image: null, overlay: null } };
          var f2 = s2.dom;
          return "undefined" != typeof document && u2 && ("ImageStream" !== c2 || u2.contains(f2.image) || u2.appendChild(f2.image), u2.contains(f2.overlay) || u2.appendChild(f2.overlay)), s2;
        }
        function ke(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function Pe(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? ke(Object(n2), true).forEach(function(e3) {
              E()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : ke(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        ae.a.setMatrixArrayType(Array);
        var Te = [];
        function De(t2) {
          return Pe(Pe({}, t2), {}, { inputStream: Pe(Pe({}, t2.inputStream), {}, { target: null }) });
        }
        function je(t2) {
          if (t2) {
            var e2 = t2().default;
            if (!e2) return void self.postMessage({ event: "error", message: "Quagga could not be created" });
          }
          var n2;
          function r2(t3) {
            self.postMessage({ event: "processed", imageData: n2.data, result: t3 }, [n2.data.buffer]);
          }
          function o2() {
            self.postMessage({ event: "initialized", imageData: n2.data }, [n2.data.buffer]);
          }
          self.onmessage = function(t3) {
            if ("init" === t3.data.cmd) {
              var i2 = t3.data.config;
              i2.numOfWorkers = 0, n2 = new e2.ImageWrapper({ x: t3.data.size.x, y: t3.data.size.y }, new Uint8Array(t3.data.imageData)), e2.init(i2, o2, n2), e2.onProcessed(r2);
            } else "process" === t3.data.cmd ? (n2.data = new Uint8Array(t3.data.imageData), e2.start()) : "setReaders" === t3.data.cmd ? e2.setReaders(t3.data.readers) : "registerReader" === t3.data.cmd && e2.registerReader(t3.data.name, t3.data.reader);
          };
        }
        function Ie(t2, e2, n2) {
          var r2, o2, i2 = ("undefined" != typeof __factorySource__ && (o2 = __factorySource__), r2 = new Blob(["(" + je.toString() + ")(" + o2 + ");"], { type: "text/javascript" }), window.URL.createObjectURL(r2)), a2 = { worker: new Worker(i2), imageData: new Uint8Array(e2.getWidth() * e2.getHeight()), busy: true };
          a2.worker.onmessage = function(t3) {
            "initialized" === t3.data.event ? (URL.revokeObjectURL(i2), a2.busy = false, a2.imageData = new Uint8Array(t3.data.imageData), n2(a2)) : "processed" === t3.data.event ? (a2.imageData = new Uint8Array(t3.data.imageData), a2.busy = false, "undefined" != typeof publishResult && publishResult(t3.data.result, a2.imageData)) : t3.data.event;
          }, a2.worker.postMessage({ cmd: "init", size: { x: e2.getWidth(), y: e2.getHeight() }, imageData: a2.imageData, config: De(t2) }, [a2.imageData.buffer]);
        }
        function ze(t2, e2, n2, r2) {
          var o2 = t2 - Te.length;
          if (0 === o2 && r2) r2();
          else if (o2 < 0) {
            Te.slice(o2).forEach(function(t3) {
              t3.worker.terminate();
            }), Te = Te.slice(0, o2), r2 && r2();
          } else {
            var i2 = function(e3) {
              Te.push(e3), Te.length >= t2 && r2 && r2();
            };
            if (e2) for (var a2 = 0; a2 < o2; a2++) Ie(e2, n2, i2);
          }
        }
        function Ue(t2, e2, n2) {
          for (var r2 = t2.length; r2--; ) t2[r2][0] += e2, t2[r2][1] += n2;
        }
        ae.a.setMatrixArrayType(Array);
        var Le = function() {
          function t2() {
            var e3 = this;
            p()(this, t2), E()(this, "context", new Re()), E()(this, "canRecord", function(t3) {
              var n3;
              e3.context.config && (Oe.a.checkImageConstraints(e3.context.inputStream, null === (n3 = e3.context.config) || void 0 === n3 ? void 0 : n3.locator), e3.initCanvas(), e3.context.framegrabber = fe.create(e3.context.inputStream, e3.context.canvasContainer.dom.image), void 0 === e3.context.config.numOfWorkers && (e3.context.config.numOfWorkers = 0), ze(e3.context.config.numOfWorkers, e3.context.config, e3.context.inputStream, function() {
                var n4;
                0 === (null === (n4 = e3.context.config) || void 0 === n4 ? void 0 : n4.numOfWorkers) && e3.initializeData(), e3.ready(t3);
              }));
            }), E()(this, "update", function() {
              if (e3.context.onUIThread) {
                var t3, n3 = (o2 = e3.context.framegrabber, Te.length ? !!(i2 = Te.filter(function(t4) {
                  return !t4.busy;
                })[0]) && (o2.attachData(i2.imageData), o2.grab() && (i2.busy = true, i2.worker.postMessage({ cmd: "process", imageData: i2.imageData }, [i2.imageData.buffer])), true) : null);
                if (!n3) e3.context.framegrabber.attachData(null === (t3 = e3.context.inputImageWrapper) || void 0 === t3 ? void 0 : t3.data), e3.context.framegrabber.grab() && (n3 || e3.locateAndDecode());
              } else {
                var r2;
                e3.context.framegrabber.attachData(null === (r2 = e3.context.inputImageWrapper) || void 0 === r2 ? void 0 : r2.data), e3.context.framegrabber.grab(), e3.locateAndDecode();
              }
              var o2, i2;
            });
          }
          var e2, n2;
          return g()(t2, [{ key: "initBuffers", value: function(t3) {
            if (this.context.config) {
              var e3 = function(t4, e4, n4) {
                var r3 = e4 || new c.a({ x: t4.getWidth(), y: t4.getHeight(), type: "XYSize" }), o2 = [ae.c.clone([0, 0]), ae.c.clone([0, r3.size.y]), ae.c.clone([r3.size.x, r3.size.y]), ae.c.clone([r3.size.x, 0])];
                return Oe.a.init(r3, n4), { inputImageWrapper: r3, boxSize: o2 };
              }(this.context.inputStream, t3, this.context.config.locator), n3 = e3.inputImageWrapper, r2 = e3.boxSize;
              this.context.inputImageWrapper = n3, this.context.boxSize = r2;
            }
          } }, { key: "initializeData", value: function(t3) {
            this.context.config && (this.initBuffers(t3), this.context.decoder = Lt.create(this.context.config.decoder, this.context.inputImageWrapper));
          } }, { key: "getViewPort", value: function() {
            return this.context.config && this.context.config.inputStream ? Ee(this.context.config.inputStream.target) : null;
          } }, { key: "ready", value: function(t3) {
            this.context.inputStream.play(), t3();
          } }, { key: "initCanvas", value: function() {
            var t3 = Se(this.context);
            if (t3) {
              var e3 = t3.ctx, n3 = t3.dom;
              this.context.canvasContainer.dom.image = n3.image, this.context.canvasContainer.dom.overlay = n3.overlay, this.context.canvasContainer.ctx.image = e3.image, this.context.canvasContainer.ctx.overlay = e3.overlay;
            }
          } }, { key: "initInputStream", value: function(t3) {
            if (this.context.config && this.context.config.inputStream) {
              var e3 = this.context.config.inputStream, n3 = e3.type, r2 = e3.constraints, o2 = function() {
                var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "LiveStream", e4 = arguments.length > 1 ? arguments[1] : void 0, n4 = arguments.length > 2 ? arguments[2] : void 0;
                switch (t4) {
                  case "VideoStream":
                    var r3 = document.createElement("video");
                    return { video: r3, inputStream: n4.createVideoStream(r3) };
                  case "ImageStream":
                    return { inputStream: n4.createImageStream() };
                  case "LiveStream":
                    var o3 = null;
                    return e4 && ((o3 = e4.querySelector("video")) || (o3 = document.createElement("video"), e4.appendChild(o3))), { video: o3, inputStream: n4.createLiveStream(o3) };
                  default:
                    return console.error("* setupInputStream invalid type ".concat(t4)), { video: null, inputStream: null };
                }
              }(n3, this.getViewPort(), we), i2 = o2.video, a2 = o2.inputStream;
              "LiveStream" === n3 && i2 && re.request(i2, r2).then(function() {
                return a2.trigger("canrecord");
              }).catch(function(e4) {
                return t3(e4);
              }), a2 && (a2.setAttribute("preload", "auto"), a2.setInputStream(this.context.config.inputStream), a2.addEventListener("canrecord", this.canRecord.bind(void 0, t3))), this.context.inputStream = a2;
            }
          } }, { key: "getBoundingBoxes", value: function() {
            var t3;
            return null !== (t3 = this.context.config) && void 0 !== t3 && t3.locate ? Oe.a.locate() : [[ae.c.clone(this.context.boxSize[0]), ae.c.clone(this.context.boxSize[1]), ae.c.clone(this.context.boxSize[2]), ae.c.clone(this.context.boxSize[3])]];
          } }, { key: "transformResult", value: function(t3) {
            var e3 = this, n3 = this.context.inputStream.getTopRight(), r2 = n3.x, o2 = n3.y;
            if ((0 !== r2 || 0 !== o2) && (t3.barcodes && t3.barcodes.forEach(function(t4) {
              return e3.transformResult(t4);
            }), t3.line && 2 === t3.line.length && function(t4, e4, n4) {
              t4[0].x += e4, t4[0].y += n4, t4[1].x += e4, t4[1].y += n4;
            }(t3.line, r2, o2), t3.box && Ue(t3.box, r2, o2), t3.boxes && t3.boxes.length > 0)) for (var i2 = 0; i2 < t3.boxes.length; i2++) Ue(t3.boxes[i2], r2, o2);
          } }, { key: "addResult", value: function(t3, e3) {
            var n3 = this;
            e3 && this.context.resultCollector && (t3.barcodes ? t3.barcodes.filter(function(t4) {
              return t4.codeResult;
            }).forEach(function(t4) {
              return n3.addResult(t4, e3);
            }) : t3.codeResult && this.context.resultCollector.addResult(e3, this.context.inputStream.getCanvasSize(), t3.codeResult));
          } }, { key: "hasCodeResult", value: function(t3) {
            return !(!t3 || !(t3.barcodes ? t3.barcodes.some(function(t4) {
              return t4.codeResult;
            }) : t3.codeResult));
          } }, { key: "publishResult", value: function() {
            var t3, e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n3 = arguments.length > 1 ? arguments[1] : void 0, r2 = e3;
            e3 && this.context.onUIThread && (this.transformResult(e3), this.addResult(e3, n3), r2 = (null == e3 || null === (t3 = e3.barcodes) || void 0 === t3 ? void 0 : t3.length) > 0 ? e3.barcodes : e3);
            Nt.publish("processed", r2), this.hasCodeResult(e3) && Nt.publish("detected", r2);
          } }, { key: "locateAndDecode", value: (n2 = f()(d.a.mark(function t3() {
            var e3, n3, r2, o2, i2;
            return d.a.wrap(function(t4) {
              for (; ; ) switch (t4.prev = t4.next) {
                case 0:
                  if (!(e3 = this.getBoundingBoxes())) {
                    t4.next = 12;
                    break;
                  }
                  return t4.next = 4, this.context.decoder.decodeFromBoundingBoxes(e3);
                case 4:
                  if (t4.t0 = t4.sent, t4.t0) {
                    t4.next = 7;
                    break;
                  }
                  t4.t0 = {};
                case 7:
                  (r2 = t4.t0).boxes = e3, this.publishResult(r2, null === (n3 = this.context.inputImageWrapper) || void 0 === n3 ? void 0 : n3.data), t4.next = 16;
                  break;
                case 12:
                  return t4.next = 14, this.context.decoder.decodeFromImage(this.context.inputImageWrapper);
                case 14:
                  (o2 = t4.sent) ? this.publishResult(o2, null === (i2 = this.context.inputImageWrapper) || void 0 === i2 ? void 0 : i2.data) : this.publishResult();
                case 16:
                case "end":
                  return t4.stop();
              }
            }, t3, this);
          })), function() {
            return n2.apply(this, arguments);
          }) }, { key: "startContinuousUpdate", value: function() {
            var t3, e3 = this, n3 = null, r2 = 1e3 / ((null === (t3 = this.context.config) || void 0 === t3 ? void 0 : t3.frequency) || 60);
            this.context.stopped = false;
            var o2 = this.context;
            !function t4(i2) {
              n3 = n3 || i2, o2.stopped || (i2 >= n3 && (n3 += r2, e3.update()), window.requestAnimationFrame(t4));
            }(performance.now());
          } }, { key: "start", value: function() {
            var t3, e3;
            this.context.onUIThread && "LiveStream" === (null === (t3 = this.context.config) || void 0 === t3 || null === (e3 = t3.inputStream) || void 0 === e3 ? void 0 : e3.type) ? this.startContinuousUpdate() : this.update();
          } }, { key: "stop", value: (e2 = f()(d.a.mark(function t3() {
            var e3;
            return d.a.wrap(function(t4) {
              for (; ; ) switch (t4.prev = t4.next) {
                case 0:
                  if (this.context.stopped = true, ze(0), null === (e3 = this.context.config) || void 0 === e3 || !e3.inputStream || "LiveStream" !== this.context.config.inputStream.type) {
                    t4.next = 6;
                    break;
                  }
                  return t4.next = 5, re.release();
                case 5:
                  this.context.inputStream.clearEventHandlers();
                case 6:
                case "end":
                  return t4.stop();
              }
            }, t3, this);
          })), function() {
            return e2.apply(this, arguments);
          }) }, { key: "setReaders", value: function(t3) {
            this.context.decoder && this.context.decoder.setReaders(t3), function(t4) {
              Te.forEach(function(e3) {
                return e3.worker.postMessage({ cmd: "setReaders", readers: t4 });
              });
            }(t3);
          } }, { key: "registerReader", value: function(t3, e3) {
            Lt.registerReader(t3, e3), this.context.decoder && this.context.decoder.registerReader(t3, e3), function(t4, e4) {
              Te.forEach(function(n3) {
                return n3.worker.postMessage({ cmd: "registerReader", name: t4, reader: e4 });
              });
            }(t3, e3);
          } }]), t2;
        }(), Ne = new Le(), Fe = Ne.context, Be = { init: function(t2, e2, n2) {
          var r2, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ne;
          return e2 || (r2 = new Promise(function(t3, n3) {
            e2 = function(e3) {
              e3 ? n3(e3) : t3();
            };
          })), o2.context.config = u()({}, ie, t2), o2.context.config.numOfWorkers > 0 && (o2.context.config.numOfWorkers = 0), n2 ? (o2.context.onUIThread = false, o2.initializeData(n2), e2 && e2()) : o2.initInputStream(e2), r2;
        }, start: function() {
          return Ne.start();
        }, stop: function() {
          return Ne.stop();
        }, pause: function() {
          Fe.stopped = true;
        }, onDetected: function(t2) {
          t2 && ("function" == typeof t2 || "object" === i()(t2) && t2.callback) ? Nt.subscribe("detected", t2) : console.trace("* warning: Quagga.onDetected called with invalid callback, ignoring");
        }, offDetected: function(t2) {
          Nt.unsubscribe("detected", t2);
        }, onProcessed: function(t2) {
          t2 && ("function" == typeof t2 || "object" === i()(t2) && t2.callback) ? Nt.subscribe("processed", t2) : console.trace("* warning: Quagga.onProcessed called with invalid callback, ignoring");
        }, offProcessed: function(t2) {
          Nt.unsubscribe("processed", t2);
        }, setReaders: function(t2) {
          t2 ? Ne.setReaders(t2) : console.trace("* warning: Quagga.setReaders called with no readers, ignoring");
        }, registerReader: function(t2, e2) {
          t2 ? e2 ? Ne.registerReader(t2, e2) : console.trace("* warning: Quagga.registerReader called with no reader, ignoring") : console.trace("* warning: Quagga.registerReader called with no name, ignoring");
        }, registerResultCollector: function(t2) {
          t2 && "function" == typeof t2.addResult && (Fe.resultCollector = t2);
        }, get canvas() {
          return Fe.canvasContainer;
        }, decodeSingle: function(t2, e2) {
          var n2 = this, r2 = new Le();
          return (t2 = u()({ inputStream: { type: "ImageStream", sequence: false, size: 800, src: t2.src }, numOfWorkers: 1, locator: { halfSample: false } }, t2)).numOfWorkers > 0 && (t2.numOfWorkers = 0), t2.numOfWorkers > 0 && ("undefined" == typeof Blob || "undefined" == typeof Worker) && (console.warn("* no Worker and/or Blob support - forcing numOfWorkers to 0"), t2.numOfWorkers = 0), new Promise(function(o2, i2) {
            try {
              n2.init(t2, function() {
                Nt.once("processed", function(t3) {
                  r2.stop(), e2 && e2.call(null, t3), o2(t3);
                }, true), r2.start();
              }, null, r2);
            } catch (t3) {
              i2(t3);
            }
          });
        }, get default() {
          return Be;
        }, Readers: r, CameraAccess: re, ImageDebug: h.a, ImageWrapper: c.a, ResultCollector: oe };
        e.default = Be;
      }]).default;
    });
  }
});
export default require_quagga_min();
/*! Bundled license information:

@ericblade/quagga2/dist/quagga.min.js:
  (* @preserve ASM BEGIN *)
  (* @preserve ASM END *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=@ericblade_quagga2.js.map
