import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';


export default class Header extends Component {
render() {
    return (
      <View style={styles.header}>
        <image
            source={{ uri: 'https://github.com/hbphan/lotly/blob/master/assets/images/SettingLogo.png' }}
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
