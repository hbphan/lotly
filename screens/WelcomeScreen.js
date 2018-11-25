import _ from 'lodash';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Lotly', color: '#009688' },
  { text: 'Use this app to buy lottery ticket on Ethereum blockchain', color: '#009688' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('lotteryHome');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
