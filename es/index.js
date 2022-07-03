import { VueForceGraph3D, VueForceGraph2D, VueForceGraphVR, VueForceGraphAR, GraphContextMenu, GraphMenu } from 'vue-force-graph/es/components';
export * from 'vue-force-graph/es/components';

const components = [
    VueForceGraph3D,
    VueForceGraph2D,
    VueForceGraphVR,
    VueForceGraphAR,
    GraphContextMenu,
    GraphMenu
];
const install = (app) => {
    components.forEach(component => {
        app.use(component);
    });
};
var index = {
    install
};

export { index as default };
