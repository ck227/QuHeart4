import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Header from './header'

export default class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Header showBack='true' title="趣心里" backFunc={this._backClick.bind(this)}/>
                <Text>
                    这里显示主界面
                </Text>
            </View>
        );
    }

    _backClick = () => {
        this.props.navigation.navigate('DrawerOpen');
    }

}

AppRegistry.registerComponent('QuHeart4', () => HomeScreen);
