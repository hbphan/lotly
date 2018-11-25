import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LotteryHomeScreen from './screens/LotteryHomeScreen';
import FourTwentyTicketScreen from './screens/FourTwentyTicketScreen';

export default class App extends React.Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA3LM9vtcR2ZYwecuaxPnT5BDeRkr_lVmY',
      authDomain: 'oauthlogin-c557d.firebaseapp.com',
      databaseURL: 'https://oauthlogin-c557d.firebaseio.com',
      projectId: 'oauthlogin-c557d',
      storageBucket: 'oauthlogin-c557d.appspot.com',
      messagingSenderId: '318603307160'
    };
    firebase.initializeApp(config);
    AsyncStorage.removeItem('fb_token');
  }
  

  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createStackNavigator({
          lotteryHome: { screen: LotteryHomeScreen },
          fourTwentyTicket: { screen: FourTwentyTicketScreen }
        }    
        )
      }
    }, 
    {
      navigationOptions: {
        tabBarVisible: false
      },
      lazyLoad: true
    });

    return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <MainNavigator />
          </Provider>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center'
  },
});
