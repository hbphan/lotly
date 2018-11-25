import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';


export default class Header extends Component {
render() {
    return (
      <View style={styles.header}>
        <image
            source={{ uri: 'https://www.google.com.vn/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiNtsXGz-7eAhVLT7wKHYHMDV0QjRx6BAgBEAU&url=https%3A%2F%2Ftutorialscapital.com%2Freact-native-custom-animated-sliding-drawer-android-ios-tutorial%2F&psig=AOvVaw3wM2GkFM33rCEr8VVNP8aI&ust=1543202041928432' }}
            style={styles.settingLogo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      marginTop: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      width: Dimensions.get('window').width,
      borderBottomWidth: 4,
      borderBottomColor: '#ccc',
    },
    settingLogo: {
        width: 40,
        height: 40,
        marginTop: 20,
    }
  });
