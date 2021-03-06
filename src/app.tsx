import Taro, { Component } from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider, connect } from '@tarojs/redux';

import Index from './pages/index';

import configStore from './store';

import './app.scss';

const store = configStore();

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {
    //
  }

  componentDidShow() {
    //
  }

  componentDidHide() {
    //
  }

  componentCatchError() {
    //
  }

  render() {
    return (
      <Provider store={store}>
        <Index name='Hello' />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
