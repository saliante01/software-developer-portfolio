import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Navbar {
    static ɵfac = function Navbar_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Navbar)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Navbar, selectors: [["app-navbar"]], decls: 2, vars: 0, template: function Navbar_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "navbar works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Navbar, [{
        type: Component,
        args: [{ selector: 'app-navbar', imports: [], template: "<p>navbar works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/navbar/navbar.ts", lineNumber: 9 }); })();
