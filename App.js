/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Alert, Text,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/home/home'

export default class IndexScreen extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    /*constructor(props) {
        super(props);

        /!*this.timer = setTimeout(
            () => {
                // Alert.alert('跳转到主界面')
                // const {navigate} = this.props.navigation;
                // navigate('Home')
                this._goHome.bind(this);
            },
            1000
        );*!/
    }*/

    /*_goHome() {
        // this.props.navigator.push({
        //     title: '主界面标题',
        //     component: Main
        // })
        // const { navigate } = this.props.navigation;
        // navigate('Main')
        this.props.navigation.navigate('Main')
    }*/

    /*_goHome = () => {
        this.props.navigator.push({
            title: 'Main!',
            component: Main
        });
    };*/

    render() {
        /*return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Image source={require('./assets/images/index.png')} style={styles.backgroundImage}/>
            </View>
        );*/
        return <Text>Hello, Navigation!</Text>;
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
