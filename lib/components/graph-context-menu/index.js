'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('vue-force-graph/lib/utils/with-install');
var vue = require('vue');
var hooks = require('vue-force-graph/lib/utils/hooks');

const contextMenuProps = {
    bindType: {
        type: String,
        default: "node",
        validator: (v) => {
            return ["node", "edge", 'canvas'].includes(v);
        }
    },
    mode: {
        type: String,
        default: '2d',
        validator: (v) => {
            return ['2d', '3d', 'ar', 'vr'].includes(v);
        }
    },
    width: {
        type: [Number, String],
        default: 'auto'
    },
    height: {
        type: [Number, String],
        default: "auto"
    },
    backgroundColor: {
        type: String,
        default: "rgba(0,0,0,0)"
    }
};

var script$1 = vue.defineComponent({
    name: "GraphContextMenu",
    props: contextMenuProps,
    setup(props) {
        const menuContainerRef = vue.ref();
        const state = vue.reactive({
            visible: false,
            xyz: [0, 0, 0],
        });
        const hide = () => {
            state.visible = false;
        };
        const menuData = vue.reactive({
            graphContext: null,
            activeData: null,
            event: null,
        });
        const graphContext = hooks.useInjector(hooks.useGraphContext.token);
        menuData.graphContext = graphContext;
        console.dir(graphContext);
        const show = () => {
            state.visible = true;
        };
        let reqID;
        const resetContainerPosition = () => {
            let x = 0, y = 0;
            if (props.mode === "3d" || props.mode === "2d") {
                if (state.xyz.every((v) => !v))
                    return;
                const g = graphContext.graph2ScreenCoords(...state.xyz);
                x = g.x;
                y = g.y;
            }
            if (state.visible) {
                setContainerPosition(x, y);
            }
            else {
                return;
            }
            reqID = window.requestAnimationFrame(resetContainerPosition);
        };
        vue.watch(() => state.visible, () => {
            if (!state.visible) {
                window.cancelAnimationFrame(reqID);
            }
            else {
                reqID = window.requestAnimationFrame(resetContainerPosition);
            }
        });
        vue.watchEffect(() => {
            hooks.useProvider(hooks.useMenuData, menuData);
        });
        const setContainerPosition = (x, y) => {
            menuContainerRef.value.style.top = y + "px";
            menuContainerRef.value.style.left = x + "px";
        };
        const onActionHandle = () => {
            switch (props.bindType) {
                case "node":
                    onNodeRightClickHandle();
                    break;
                case "edge":
                    onLinkRightClickHandle();
                    break;
                case "canvas":
                    onBackgroundRightClickHandle();
                    break;
            }
        };
        const onNodeRightClickHandle = () => {
            graphContext.onNodeRightClick((node, evt) => {
                console.log(node, evt);
                menuData.activeData = node;
                menuData.event = evt;
                state.xyz = [node.x, node.y, node.z];
                const x = evt.clientX;
                const y = evt.clientY;
                setContainerPosition(x, y);
                show();
            });
        };
        const onLinkRightClickHandle = () => {
            graphContext.onLinkRightClick((node, evt) => {
                menuData.event = evt;
                menuData.activeData = node;
                const { clientX, clientY } = evt;
                const { x: tx, y: ty } = graphContext.graph2ScreenCoords(node.target.x, node.target.y, node.target.z);
                const { x: sx, y: sy } = graphContext.graph2ScreenCoords(node.source.x, node.source.y, node.source.z);
                const percentx = (clientX - tx) / (sx - tx);
                const percenty = (clientY - ty) / (sy - ty);
                state.xyz = [
                    percentx * (node.source.x - node.target.x) + node.target.x,
                    percenty * (node.source.y - node.target.y) + node.target.y,
                    ((percentx + percenty) / 2) * (+node.source.z - node.target.z) +
                        node.target.z,
                ];
                setContainerPosition(clientX, clientY);
                show();
            });
        };
        const onBackgroundRightClickHandle = () => {
            graphContext.onBackgroundRightClick((evt) => {
                menuData.event = evt;
                menuData.activeData = null;
                setContainerPosition(evt.clientX, evt.clientY);
                show();
            });
        };
        onActionHandle();
        vue.onMounted(() => {
            document.addEventListener("click", hide, false);
            resetContainerPosition();
        });
        vue.onBeforeUnmount(() => {
            document.removeEventListener("click", hide, false);
        });
        return Object.assign(Object.assign(Object.assign({ menuContainerRef }, vue.toRefs(state)), vue.toRefs(menuData)), { hide });
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    ref: "menuContainerRef",
    class: "menus-container",
    style: vue.normalizeStyle({
      width: _ctx.width,
      height: _ctx.height,
      backgroundColor: _ctx.backgroundColor,
    }),
    onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.hide && _ctx.hide(...args)), ["stop"]))
  }, [
    vue.renderSlot(_ctx.$slots, "default", {
      graphContext: _ctx.graphContext,
      activeData: _ctx.activeData,
      event: _ctx.event
    })
  ], 4 /* STYLE */)), [
    [vue.vShow, _ctx.visible]
  ])
}

script$1.render = render$1;
script$1.__scopeId = "data-v-294bd8b4";
script$1.__file = "packages/components/graph-context-menu/src/context-menu.vue";

const menuProps = {
    data: {
        type: Array,
        default: () => [],
        validator: (v) => {
            return v.every(item => item.hasOwnProperty('id') && item.hasOwnProperty('label'));
        }
    }
};

var script = vue.defineComponent({
    name: "GraphMenu",
    props: menuProps,
    emits: ["change"],
    setup(_, { emit }) {
        const data = hooks.useInjector(hooks.useMenuData.token);
        const clickItemHandle = (item) => {
            const { activeData, event, graphContext } = data;
            emit("change", {
                activeData,
                event,
                graphContext,
                menuItem: item,
            });
        };
        return {
            clickItemHandle,
        };
    },
});

const _hoisted_1 = { class: "force-graph-menu" };
const _hoisted_2 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1, [
    (!_ctx.data.length)
      ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
      : vue.createCommentVNode("v-if", true),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.data, (item) => {
      return (vue.openBlock(), vue.createElementBlock("li", {
        class: "force-graph-menu-item",
        key: item.id,
        onClick: $event => (_ctx.clickItemHandle(item))
      }, vue.toDisplayString(item.label), 9 /* TEXT, PROPS */, _hoisted_2))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script.render = render;
script.__scopeId = "data-v-0f279b70";
script.__file = "packages/components/graph-context-menu/src/menu.vue";

const GraphContextMenu = withInstall.withInstall(script$1, {
    GraphMenu: script
});
const GraphMenu = withInstall.withNoopInstall(script);

exports.GraphContextMenu = GraphContextMenu;
exports.GraphMenu = GraphMenu;
exports["default"] = GraphContextMenu;
