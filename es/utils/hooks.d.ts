declare function useProvider(fn: any, ...args: any[]): void;
declare function useInjector(fn: any): unknown;
interface UseGraphContext {
    <T>(ctx: T): T;
    token?: Symbol;
}
interface MenuData {
    graphContext: any;
    activeData: any;
    event: any;
}
interface UseMenuData {
    (data: MenuData): MenuData;
    token?: Symbol;
}
declare let useGraphContext: UseGraphContext;
declare let useMenuData: UseMenuData;
export { useProvider, useInjector, useGraphContext, useMenuData };
