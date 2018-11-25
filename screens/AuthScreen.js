import React, { Component } from 'react';
import { View, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class AuthScreen extends Component {
  componentDidMount() {
    // this.props.facebookLogin();
    this.onAuthComplete(this.props);
    AsyncStorage.removeItem('fb_token');
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('lotteryHome');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Login with Facebook"
          raised
          buttonStyle={styles.buttonFbStyle}
          onPress={this.props.facebookLogin}
        />

        <Button
          title="Login with Google"
          raised
          buttonStyle={styles.buttonGoStyle}
          onPress={this.props.facebookLogin}
        />

        <Button
          title="Login with Twitter"
          raised
          buttonStyle={styles.buttonTwStyle}
          onPress={this.props.facebookLogin}
        />

      </View>
    );
  }
}


function mapStateToProps({ auth }) {
  return { token: auth.token };
}

const styles = {
  buttonFbStyle: {
    backgroundColor: '#3b5998',
    width: SCREEN_WIDTH - 50,
    marginTop: 250
  },
  buttonGoStyle: {
    backgroundColor: '#db4437',
    width: SCREEN_WIDTH - 50,
    marginTop: 20
  },
  buttonTwStyle: {
    backgroundColor: '#1da1f2',
    width: SCREEN_WIDTH - 50,
    marginTop: 20
  }
};


export default connect(mapStateToProps, actions)(AuthScreen);
