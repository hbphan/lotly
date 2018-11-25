import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FourTwentyTicketScreen extends Component {
render() {
    return (
      <View>
        <Text>FourTwentyTicketScreen</Text>
        
      </View>
    );
  }
}

export default connect(null, actions)(FourTwentyTicketScreen);
