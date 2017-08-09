import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Hello, Navigation!</Text>
            </View>
        );
    }

}

AppRegistry.registerComponent('QuHeart4', () => HomeScreen);
