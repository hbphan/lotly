import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from '../actions';
import Header from '../components/Header';

export default class LotteryHomeScreen extends Component {
render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>LotteryHomeScreen</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


// export default connect(null, actions)(LotteryHomeScreen);
