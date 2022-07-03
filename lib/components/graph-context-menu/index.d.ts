declare const GraphContextMenu: import("vue-force-graph/es/utils/with-install").SFCWithInstall<import("vue").DefineComponent<any, {
    hide: () => void;
    graphContext: any;
    activeData: any;
    event: any;
    visible: import("vue").Ref<boolean>;
    xyz: import("vue").Ref<number[]>;
    menuContainerRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any>, {} | {
    [x: string]: any;
}>> & {
    GraphMenu: import("vue").DefineComponent<any, {
        clickItemHandle: (item: any) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
        onChange?: (...args: any[]) => any;
    }, {} | {
        [x: string]: any;
    }>;
};
declare const GraphMenu: import("vue-force-graph/es/utils/with-install").SFCWithInstall<import("vue").DefineComponent<any, {
    clickItemHandle: (item: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
    onChange?: (...args: any[]) => any;
}, {} | {
    [x: string]: any;
}>>;
export { GraphContextMenu, GraphMenu };
export default GraphContextMenu;
