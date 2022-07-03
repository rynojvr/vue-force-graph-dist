'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('vue-force-graph/lib/utils/with-install');
var fromKapsule = require('vue-force-graph/lib/utils/from-kapsule');
var ForceGraph3D = require('3d-force-graph');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fromKapsule__default = /*#__PURE__*/_interopDefaultLegacy(fromKapsule);
var ForceGraph3D__default = /*#__PURE__*/_interopDefaultLegacy(ForceGraph3D);

const vueForceGraph3DProps = {
    width: Number,
    height: Number,
    graphData: {
        type: Object,
        required: true,
        validator(v) {
            return v.nodes && v.links;
        },
    },
    backgroundColor: String,
    nodeRelSize: Number,
    nodeId: String,
    nodeLabel: [String, Function],
    nodeVal: [Number, String, Function],
    nodeVisibility: {
        type: [Boolean, String, Function],
        default: true,
    },
    nodeColor: [String, Function],
    nodeAutoColorBy: [String, Function],
    onNodeHover: Function,
    onNodeClick: Function,
    linkSource: String,
    linkTarget: String,
    linkLabel: [String, Function],
    linkVisibility: {
        type: [Boolean, String, Function],
        default: true,
    },
    linkColor: [String, Function],
    linkAutoColorBy: [String, Function],
    linkWidth: [Number, String, Function],
    linkCurvature: [Number, String, Function],
    linkDirectionalArrowLength: [Number, String, Function],
    linkDirectionalArrowColor: [String, Function],
    linkDirectionalArrowRelPos: [Number, String, Function],
    linkDirectionalParticles: [Number, String, Function],
    linkDirectionalParticleSpeed: [Number, String, Function],
    linkDirectionalParticleWidth: [Number, String, Function],
    linkDirectionalParticleColor: [String, Function],
    onLinkHover: Function,
    onLinkClick: Function,
    dagMode: {
        validator(v) {
            return [
                "td",
                "bu",
                "lr",
                "rl",
                "zin",
                "zout",
                "radialin",
                "radialout",
            ].includes(v);
        },
    },
    dagLevelDistance: Number,
    dagNodeFilter: Function,
    onDagError: Function,
    d3AlphaMin: Number,
    d3AlphaDecay: Number,
    d3VelocityDecay: Number,
    warmupTicks: Number,
    cooldownTicks: Number,
    cooldownTime: Number,
    onEngineTick: Function,
    onEngineStop: Function,
    getGraphBbox: Function,
    zoomToFit: Function,
    onNodeRightClick: Function,
    onNodeDrag: Function,
    onNodeDragEnd: Function,
    onLinkRightClick: Function,
    linkHoverPrecision: Number,
    onBackgroundClick: Function,
    onBackgroundRightClick: Function,
    enablePointerInteraction: {
        type: Boolean,
        default: true,
    },
    enableNodeDrag: {
        type: Boolean,
        default: true,
    },
    showNavInfo: {
        type: Boolean,
        default: true,
    },
    nodeOpacity: Number,
    nodeResolution: Number,
    nodeThreeObject: [Object, String, Function],
    nodeThreeObjectExtend: {
        type: [Boolean, String, Function],
        default: false,
    },
    linkOpacity: Number,
    linkResolution: Number,
    linkCurveRotation: [Number, String, Function],
    linkMaterial: [Object, String, Function],
    linkThreeObject: [Object, String, Function],
    linkThreeObjectExtend: {
        type: [Boolean, String, Function],
        default: false,
    },
    linkPositionUpdate: Function,
    linkDirectionalArrowResolution: Number,
    linkDirectionalParticleResolution: Number,
    forceEngine: {
        validator(v) {
            return ["d3", "ngraph"].includes(v);
        },
    },
    ngraphPhysics: Object,
    numDimensions: {
        validator(v) {
            return [1, 2, 3].includes(v);
        },
    },
    enableNavigationControls: {
        type: Boolean,
        default: true,
    },
    controlType: {
        validator(v) {
            return ["trackball", "orbit", "fly"].includes(v);
        },
    },
    rendererConfig: Object,
    extraRenderers: {
        type: Array,
        validator(v) {
            return v === null || v === void 0 ? void 0 : v.every((item) => item.render);
        },
    },
};

var script = fromKapsule__default["default"](ForceGraph3D__default["default"], {
    methodNames: [
        "emitParticle",
        "d3Force",
        "d3ReheatSimulation",
        "stopAnimation",
        "pauseAnimation",
        "resumeAnimation",
        "cameraPosition",
        "zoomToFit",
        "getGraphBbox",
        "screen2GraphCoords",
        "graph2ScreenCoords",
        "postProcessingComposer",
        "scene",
        "camera",
        "renderer",
        "controls",
        "refresh",
    ],
    initPropNames: ["controlType", "rendererConfig", "extraRenderers"],
    props: vueForceGraph3DProps,
    name: "VueForceGraph3D",
});

script.__file = "packages/components/vue-force-graph-3d/src/vue-force-graph-3d.vue";

const VueForceGraph3D = withInstall.withInstall(script);

exports.VueForceGraph3D = VueForceGraph3D;
exports["default"] = VueForceGraph3D;
