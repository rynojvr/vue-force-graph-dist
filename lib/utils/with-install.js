"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withNoopInstall = exports.withInstall = void 0;
const withInstall = (main, extra) => {
    ;
    main.install = function (app) {
        for (const comp of [main, ...Object.values(extra !== null && extra !== void 0 ? extra : {})]) {
            app.component(comp.name, comp);
        }
    };
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp;
        }
    }
    return main;
};
exports.withInstall = withInstall;
const withNoopInstall = (component) => {
    ;
    component.install = () => { };
    return component;
};
exports.withNoopInstall = withNoopInstall;
