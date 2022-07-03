import { DefineComponent } from 'vue';
export interface ComboParamProps {
    wrapperElementType?: string;
    methodNames: string[];
    initPropNames?: string[];
    props: any;
    name: string;
}
export default function fromKapsule(kapsuleComponent: (options: any) => any, comboParam: ComboParamProps): DefineComponent;
