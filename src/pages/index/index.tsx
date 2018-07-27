import Taro, { Component, ComponentClass } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { add, minus, asyncAdd } from '../../actions/counter';

import './index.scss';

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {
  name: string;
};

type PageState = {
  useHi: boolean;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

@connect<PageStateProps, PageDispatchProps, PageOwnProps>(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    // @ts-ignore
    dispatch(asyncAdd());
  }
}))
class Index extends Component<PageOwnProps, PageState> {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillReceiveProps(nextProps: IProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {
    //
  }

  componentDidShow() {
    //
  }

  componentDidHide() {
    //
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
        <View>Hello, World</View>
      </View>
    );
  }
}

interface Index {
  props: IProps;
}

export default Index as ComponentClass<PageOwnProps, PageState>;
