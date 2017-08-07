/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Alert, View, Text, TouchableOpacity, Linking,} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class IndexScreen extends Component {


    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);

        this.timer = setTimeout(
            () => {
                //Alert.alert('跳转到主界面')
                const {navigate} = this.props.navigation;
                navigate('Home')
            },
            3000
        );
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Image source={require('./assets/images/index.png')} style={styles.backgroundImage}/>
            </View>
        );
    }

}

class HomeScreen extends Component {
    static navigationOptions = {
        title: '主界面',
    };

    render() {
        return (
            <View>
                <Text>主界面text</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Index: {screen: IndexScreen},
    Home: {screen: HomeScreen},
});

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


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
