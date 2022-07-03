export const withInstall = (main, extra) => {
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
export const withNoopInstall = (component) => {
    ;
    component.install = () => { };
    return component;
};
