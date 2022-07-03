import type { ExtractPropTypes } from 'vue';
export declare const contextMenuProps: {
    bindType: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
};
export declare type ContextMenuProps = ExtractPropTypes<typeof contextMenuProps>;
