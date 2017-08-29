import React, {Component} from 'react';
import {AppRegistry, Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, Alert, route} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './home'
import ContentScreen from './content'
import SideBar from './sideBar'

export default class Navi extends React.Component {

    //主界面的侧滑框架
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 20}}>
                <FDF/>
            </View>
        );
    }

}

const FDF = StackNavigator({
    SideBar: {screen: SideBar},//backFunc={this.dfgfg}
    Home: {screen: HomeScreen},
    Content: {screen: ContentScreen},
});