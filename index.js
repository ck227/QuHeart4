/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Alert, View, Text, TouchableOpacity, Linking,} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

export default class QuHeart4 extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    _onPressImage() {
        console.log("You tapped the button!");
        Alert.alert('Alert Title')
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={(e) => {
                    Linking.openURL('http://www.devio.org/');
                }}
            >
                <View>
                    <Text style={styles.item}>
                        SplashScreen 启动屏
                    </Text>
                    <Text style={styles.item}>
                        @：http://www.devio.org/
                    </Text>
                    <Text style={styles.item}>
                        GitHub:https://github.com/crazycodeboy
                    </Text>
                    <Text style={styles.item}>
                        Email:crazycodeboy@gmail.com
                    </Text>
                </View>
            </TouchableOpacity>
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
