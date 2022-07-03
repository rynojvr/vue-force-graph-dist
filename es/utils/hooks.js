import { provide, inject } from 'vue';
function useProvider(fn, ...args) {
    !fn.token && (fn.token = Symbol());
    provide(fn.token, fn(...args));
}
function useInjector(fn) {
    const token = typeof fn === 'symbol' ? fn : fn.token;
    return inject(token);
}
let useGraphContext = (ctx) => {
    return ctx;
};
let useMenuData = (data) => {
    return data;
};
export { useProvider, useInjector, useGraphContext, useMenuData };
