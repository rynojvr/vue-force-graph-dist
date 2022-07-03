import type { ExtractPropTypes } from 'vue';
export declare const menuProps: {
    data: {
        type: ArrayConstructor;
        default: () => any[];
        validator: (v: any) => any;
    };
};
export declare type MenuProps = ExtractPropTypes<typeof menuProps>;
