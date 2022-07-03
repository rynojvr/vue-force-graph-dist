'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components$1 = require('vue-force-graph/lib/components');

const components = [
    components$1.VueForceGraph3D,
    components$1.VueForceGraph2D,
    components$1.VueForceGraphVR,
    components$1.VueForceGraphAR,
    components$1.GraphContextMenu,
    components$1.GraphMenu
];
const install = (app) => {
    components.forEach(component => {
        app.use(component);
    });
};
var index = {
    install
};

exports["default"] = index;
Object.keys(components$1).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () { return components$1[k]; }
    });
});
