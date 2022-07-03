"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuData = exports.useGraphContext = exports.useInjector = exports.useProvider = void 0;
const vue_1 = require("vue");
function useProvider(fn, ...args) {
    !fn.token && (fn.token = Symbol());
    (0, vue_1.provide)(fn.token, fn(...args));
}
exports.useProvider = useProvider;
function useInjector(fn) {
    const token = typeof fn === 'symbol' ? fn : fn.token;
    return (0, vue_1.inject)(token);
}
exports.useInjector = useInjector;
let useGraphContext = (ctx) => {
    return ctx;
};
exports.useGraphContext = useGraphContext;
let useMenuData = (data) => {
    return data;
};
exports.useMenuData = useMenuData;
