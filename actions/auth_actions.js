import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');
export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  /*
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  fbProvider.addScope('email');
  
  firebase.auth().signInWithRedirect(fbProvider)
    .then(result => {
      const token = result.credential.accessToken;
      // await AsyncStorage.setItem('fb_token', token);
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    })
    .catch(() => {
      dispatch({ type: FACEBOOK_LOGIN_FAIL });
    });
  */
  
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('294023621219383', {
    permissions: ['public_profile', 'email']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  if (type === 'success') {
    await AsyncStorage.setItem('fb_token', token);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInAndRetrieveDataWithCredential(credential)
      .then(() => {
        const { currentUser } = firebase.auth();
        console.log(currentUser.displayName, currentUser.email);
        console.log(currentUser.providerData[0].providerId);
        const { displayName } = currentUser;
        const { email } = currentUser;
        const { providerId } = currentUser.providerData[0];
        const referId = currentUser.uid;
        firebase.database().ref('/users')
          .push({ displayName, email, providerId, referId })
            .then(() => {
              dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
            });
      })
      .catch(error => {
        console.log(error);
      });
    /*
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}`)
      .push(currentUser.displayName, currentUser.email);

    */
  }
};

