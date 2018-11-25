import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AppHeader from '../components/AppHeader';


class LotteryHomeScreen extends Component {
render() {
    return (
      <View >
        <AppHeader />
      </View>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
*/

export default connect(null, actions)(LotteryHomeScreen);
