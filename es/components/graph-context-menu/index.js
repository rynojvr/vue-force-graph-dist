import { withInstall, withNoopInstall } from 'vue-force-graph/es/utils/with-install';
import { defineComponent, ref, reactive, watch, watchEffect, onMounted, onBeforeUnmount, toRefs, withDirectives, openBlock, createElementBlock, normalizeStyle, withModifiers, renderSlot, vShow, createCommentVNode, Fragment, renderList, toDisplayString } from 'vue';
import { useInjector, useGraphContext, useProvider, useMenuData } from 'vue-force-graph/es/utils/hooks';

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

var script$1 = defineComponent({
    name: "GraphContextMenu",
    props: contextMenuProps,
    setup(props) {
        const menuContainerRef = ref();
        const state = reactive({
            visible: false,
            xyz: [0, 0, 0],
        });
        const hide = () => {
            state.visible = false;
        };
        const menuData = reactive({
            graphContext: null,
            activeData: null,
            event: null,
        });
        const graphContext = useInjector(useGraphContext.token);
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
        watch(() => state.visible, () => {
            if (!state.visible) {
                window.cancelAnimationFrame(reqID);
            }
            else {
                reqID = window.requestAnimationFrame(resetContainerPosition);
            }
        });
        watchEffect(() => {
            useProvider(useMenuData, menuData);
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
        onMounted(() => {
            document.addEventListener("click", hide, false);
            resetContainerPosition();
        });
        onBeforeUnmount(() => {
            document.removeEventListener("click", hide, false);
        });
        return Object.assign(Object.assign(Object.assign({ menuContainerRef }, toRefs(state)), toRefs(menuData)), { hide });
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "menuContainerRef",
    class: "menus-container",
    style: normalizeStyle({
      width: _ctx.width,
      height: _ctx.height,
      backgroundColor: _ctx.backgroundColor,
    }),
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.hide && _ctx.hide(...args)), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {
      graphContext: _ctx.graphContext,
      activeData: _ctx.activeData,
      event: _ctx.event
    })
  ], 4 /* STYLE */)), [
    [vShow, _ctx.visible]
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

var script = defineComponent({
    name: "GraphMenu",
    props: menuProps,
    emits: ["change"],
    setup(_, { emit }) {
        const data = useInjector(useMenuData.token);
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
  return (openBlock(), createElementBlock("ul", _hoisted_1, [
    (!_ctx.data.length)
      ? renderSlot(_ctx.$slots, "default", { key: 0 })
      : createCommentVNode("v-if", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item) => {
      return (openBlock(), createElementBlock("li", {
        class: "force-graph-menu-item",
        key: item.id,
        onClick: $event => (_ctx.clickItemHandle(item))
      }, toDisplayString(item.label), 9 /* TEXT, PROPS */, _hoisted_2))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script.render = render;
script.__scopeId = "data-v-0f279b70";
script.__file = "packages/components/graph-context-menu/src/menu.vue";

const GraphContextMenu = withInstall(script$1, {
    GraphMenu: script
});
const GraphMenu = withNoopInstall(script);

export { GraphContextMenu, GraphMenu, GraphContextMenu as default };
