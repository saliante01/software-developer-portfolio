import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import * as i0 from "@angular/core";
export class App {
    title = signal('portfolio', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "relative", "z-0", "bg-[#050816]", "min-h-screen", "text-white", "scroll-smooth", "selection:bg-purple-500", "selection:text-white"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-navbar");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "router-outlet");
        } }, dependencies: [RouterOutlet, Navbar], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [RouterOutlet, Navbar], template: "<div class=\"relative z-0 bg-[#050816] min-h-screen text-white scroll-smooth selection:bg-purple-500 selection:text-white\">\n  <app-navbar></app-navbar>\n</div>\n\n<router-outlet />\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 }); })();
