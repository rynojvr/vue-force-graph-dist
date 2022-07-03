import type { Plugin } from 'vue';
export declare type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;
export declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;
