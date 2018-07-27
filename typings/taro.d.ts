import { Component } from "@tarojs/taro";

declare module '@tarojs/taro' {

    type ComponentState = {};
    type ComponentType<P = {}> = ComponentClass<P>;

    interface ComponentClass<P = {}, S = ComponentState> extends ComponentLifecycle<P, S> {
        new(props: P, context?: any): Component<P, S>;
    }
}
