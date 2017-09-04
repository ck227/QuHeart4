/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Alert, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/setting'
// import IndexScreen from './App'


export default class IndexScreen extends Component {

    // static navigationOptions = {
    //     title: 'Welcome',
    // };


    /*constructor(props) {
        super(props);
        // this._goHome = this._goHome.bind(this);
        /!*this.timer = setTimeout(
            () => {
                // Alert.alert('这里执行了')
                // this._goHome()
                // this.props.navigation.navigate('Main')
                const {navigate} = this.props.navigation;
                navigate.navigate('Main')
            },
            1000
        );*!/
    }*/

    /*_goHome = () => {
        // Alert.alert('这里执行了')
        this.props.navigation.navigate('Main')
    };*/

    // _goHome() {
    // Alert.alert('这里执行了')
    // this.props.navigation.navigate('Main')
    // }

    render() {
        /*const {navigate} = this.props.navigation
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Image source={require('./assets/images/index.png')} style={styles.backgroundImage}/>
            </View>
        );*/
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Main')}
                    title="Chat with Lucy"
                />
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


const QuHeart4 = StackNavigator({
    Index: {screen: IndexScreen},
    Main: {screen: HomeScreen},
});


AppRegistry.registerComponent('QuHeart4', () => QuHeart4);
