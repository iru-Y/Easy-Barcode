import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MediaMatcher
} from "./chunk-RQWU7MO2.js";
import {
  ANIMATION_MODULE_TYPE,
  InjectionToken,
  NgModule,
  inject,
  require_operators,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-LXDBMXWT.js";
import {
  require_cjs
} from "./chunk-DLHHKV44.js";
import {
  __toESM,
  init_define_NGX_ENV
} from "./chunk-X6QDMBHU.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
init_define_NGX_ENV();

// node_modules/@angular/cdk/fesm2022/css-pixel-value-C_HEqLhI.mjs
init_define_NGX_ENV();
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/@angular/cdk/fesm2022/layout.mjs
init_define_NGX_ENV();
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var LayoutModule = class _LayoutModule {
  static ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LayoutModule
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/animation-ChQ1vjiF.mjs
init_define_NGX_ENV();
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var reducedMotion = null;
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, { optional: true })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}

export {
  coerceCssPixelValue,
  coerceBooleanProperty,
  _animationsDisabled
};
//# sourceMappingURL=chunk-BWV2ZJ3E.js.map
