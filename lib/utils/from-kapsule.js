"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const hooks_1 = require("./hooks");
function omit(target, args) {
    return Object.fromEntries(Object.keys(target)
        .filter((k) => {
        return !args.includes(k);
    })
        .map((k) => [k, target[k]]));
}
function fromKapsule(kapsuleComponent, comboParam) {
    const { wrapperElementType = 'div', methodNames = [], initPropNames = [], props = {}, name = '' } = comboParam;
    return (0, vue_1.defineComponent)({
        name,
        props,
        setup(props, { expose, slots }) {
            const domEl = (0, vue_1.ref)(null);
            const comp = kapsuleComponent(getConfigOptions());
            (0, hooks_1.useProvider)(hooks_1.useGraphContext, comp);
            const dynamicProps = omit(props, [...methodNames, ...initPropNames]);
            const retFuncs = Object.fromEntries(methodNames.map((k) => [k, comp[k]]));
            function getConfigOptions() {
                return Object.fromEntries(initPropNames
                    .filter((prop) => props.hasOwnProperty(prop))
                    .map((prop) => [prop, props[prop]]));
            }
            function __call(method, ...args) {
                comp[method] instanceof Function ? comp[method](...args) : undefined;
            }
            (0, vue_1.watchEffect)(() => {
                Object.keys(dynamicProps).forEach((p) => {
                    if (props[p] !== undefined) {
                        __call(p, props[p]);
                    }
                });
            });
            function init() {
                comp(domEl.value);
                resizeHandle();
                window.addEventListener('resize', resizeHandle);
            }
            function resizeHandle() {
                comp.height(props.height || window.innerHeight)
                    .width(props.width || window.innerWidth);
            }
            (0, vue_1.onMounted)(() => {
                init();
            });
            (0, vue_1.onBeforeUnmount)(() => {
                comp._destructor instanceof Function ? comp._destructor() : null;
                window.removeEventListener('resize', resizeHandle);
            });
            expose(Object.assign(Object.assign({}, retFuncs), { graphContext: comp }));
            return () => {
                return (0, vue_1.h)(wrapperElementType, {}, [
                    (0, vue_1.h)(wrapperElementType, { ref: domEl }),
                    slots.default !== undefined ? slots.default() : undefined,
                ]);
            };
        }
    });
}
exports.default = fromKapsule;
