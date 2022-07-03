import type { ExtractPropTypes } from 'vue';
export declare const vueForceGraph2DProps: {
    width: NumberConstructor;
    height: NumberConstructor;
    graphData: {
        type: ObjectConstructor;
        required: boolean;
        validator(v: any): any;
    };
    backgroundColor: StringConstructor;
    nodeRelSize: NumberConstructor;
    nodeId: StringConstructor;
    nodeLabel: (FunctionConstructor | StringConstructor)[];
    nodeVal: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    nodeVisibility: {
        type: (BooleanConstructor | FunctionConstructor | StringConstructor)[];
        default: boolean;
    };
    nodeColor: (FunctionConstructor | StringConstructor)[];
    nodeAutoColorBy: (FunctionConstructor | StringConstructor)[];
    onNodeHover: FunctionConstructor;
    onNodeClick: FunctionConstructor;
    linkSource: StringConstructor;
    linkTarget: StringConstructor;
    linkLabel: (FunctionConstructor | StringConstructor)[];
    linkVisibility: {
        type: (BooleanConstructor | FunctionConstructor | StringConstructor)[];
        default: boolean;
    };
    linkColor: (FunctionConstructor | StringConstructor)[];
    linkAutoColorBy: (FunctionConstructor | StringConstructor)[];
    linkWidth: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkCurvature: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkDirectionalArrowLength: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkDirectionalArrowColor: (FunctionConstructor | StringConstructor)[];
    linkDirectionalArrowRelPos: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkDirectionalParticles: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkDirectionalParticleSpeed: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkDirectionalParticleWidth: (FunctionConstructor | StringConstructor | NumberConstructor)[];
    linkDirectionalParticleColor: (FunctionConstructor | StringConstructor)[];
    onLinkHover: FunctionConstructor;
    onLinkClick: FunctionConstructor;
    dagMode: {
        validator(v: any): boolean;
    };
    dagLevelDistance: NumberConstructor;
    dagNodeFilter: FunctionConstructor;
    onDagError: FunctionConstructor;
    d3AlphaMin: NumberConstructor;
    d3AlphaDecay: NumberConstructor;
    d3VelocityDecay: NumberConstructor;
    warmupTicks: NumberConstructor;
    cooldownTicks: NumberConstructor;
    cooldownTime: NumberConstructor;
    onEngineTick: FunctionConstructor;
    onEngineStop: FunctionConstructor;
    getGraphBbox: FunctionConstructor;
    zoomToFit: FunctionConstructor;
    onNodeRightClick: FunctionConstructor;
    onNodeDrag: FunctionConstructor;
    onNodeDragEnd: FunctionConstructor;
    onLinkRightClick: FunctionConstructor;
    linkHoverPrecision: NumberConstructor;
    onBackgroundClick: FunctionConstructor;
    onBackgroundRightClick: FunctionConstructor;
    enablePointerInteraction: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableNodeDrag: {
        type: BooleanConstructor;
        default: boolean;
    };
    linkLineDash: {
        type: (FunctionConstructor | StringConstructor | ArrayConstructor)[];
        validator(v: any): boolean;
    };
    nodeCanvasObjectMode: (FunctionConstructor | StringConstructor)[];
    nodeCanvasObject: FunctionConstructor;
    nodePointerAreaPaint: FunctionConstructor;
    linkCanvasObjectMode: (FunctionConstructor | StringConstructor)[];
    linkCanvasObject: FunctionConstructor;
    linkPointerAreaPaint: FunctionConstructor;
    autoPauseRedraw: BooleanConstructor;
    minZoom: NumberConstructor;
    maxZoom: NumberConstructor;
    enableZoomInteraction: {
        type: BooleanConstructor;
        default: boolean;
    };
    enablePanInteraction: {
        type: BooleanConstructor;
        default: boolean;
    };
    onZoom: FunctionConstructor;
    onZoomEnd: FunctionConstructor;
    onRenderFramePre: FunctionConstructor;
    onRenderFramePost: FunctionConstructor;
};
export declare type VueForceGraph2DProps = ExtractPropTypes<typeof vueForceGraph2DProps>;