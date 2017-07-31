/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,StyleSheet, Image, Alert, View} from 'react-native';

export default class QuHeart4 extends Component {
    _onPressImage() {
        console.log("You tapped the button!");
        Alert.alert('Alert Title')
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}} onPress={this._onPressImage()}>
              <Image source={require('./assets/images/index.png')} style={styles.backgroundImage}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('QuHeart4', () => QuHeart4);
