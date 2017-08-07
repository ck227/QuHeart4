
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Alert, View, Text, TouchableOpacity, Linking,} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }

}

AppRegistry.registerComponent('QuHeart4', () => QuHeart4);
