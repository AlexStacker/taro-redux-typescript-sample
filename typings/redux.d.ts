declare module '@tarojs/redux' {
    import {
        ComponentClass,
        ComponentType,
        Component,
    } from '@tarojs/taro';

    import {
        Action,
        AnyAction,
        Store,
        Dispatch
    } from 'redux';

    export type InferableComponentEnhancerWithProps<IInjectedProps, INeedsProps> =
        <IComponent extends ComponentClass<IInjectedProps & INeedsProps>>(component: IComponent) => IComponent

    export interface IConnect {
        <IStateProps = {}, IDispatchProps = {}, IOwnProps = {}>(
            mapStateToProps?: MapStateToPropsParam<IStateProps, IOwnProps, any>,
            mapDispatchToProps?: MapDispatchToPropsParam<IDispatchProps, IOwnProps>,
        ): InferableComponentEnhancerWithProps<IStateProps & IDispatchProps, IOwnProps>
    }

    export const connect: IConnect

    interface MapStateToProps<TStateProps, TOwnProps, State> {
        (state: State, ownProps: TOwnProps): TStateProps;
    }

    interface MapStateToPropsFactory<TStateProps, TOwnProps, State> {
        (initialState: State, ownProps: TOwnProps): MapStateToProps<TStateProps, TOwnProps, State>;
    }

    type MapStateToPropsParam<TStateProps, TOwnProps, State> = MapStateToPropsFactory<TStateProps, TOwnProps, State> | MapStateToProps<TStateProps, TOwnProps, State> | null | undefined;

    interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
        (dispatch: Dispatch, ownProps: TOwnProps): TDispatchProps;
    }

    type MapDispatchToProps<TDispatchProps, TOwnProps> =
        MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | TDispatchProps;

    interface MapDispatchToPropsFactory<TDispatchProps, TOwnProps> {
        (dispatch: Dispatch, ownProps: TOwnProps): MapDispatchToProps<TDispatchProps, TOwnProps>;
    }

    type MapDispatchToPropsParam<TDispatchProps, TOwnProps> = MapDispatchToPropsFactory<TDispatchProps, TOwnProps> | MapDispatchToProps<TDispatchProps, TOwnProps>;

    interface MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
        (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TMergedProps;
    }

    export interface ProviderProps<A extends Action = AnyAction> {
        store: Store<any, A>;
    }

    export class Provider<A extends Action = AnyAction> extends Component<ProviderProps<A>, any> { }
}
