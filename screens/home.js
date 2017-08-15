import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, Alert} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Header from './header'
import ContentScreen from './content'

class HomeScreen extends Component {

    /*static navigationOptions = {
        title: '首页',
        drawerLabel: '趣心里',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/images/death.jpg')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };*/

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
        // Alert.alert('这里执行了')
        this.props.navigation.navigate('DrawerOpen');
    }
}

export default class DrawNav extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{flex: 1, marginTop: 20}}>
                <HomeConst/>
            </View>
        );
    }
}

const HomeConst = DrawerNavigator({
    首页: {
        screen: HomeScreen,
    },
    情感: {
        screen: ContentScreen,
    },
    单身: {
        screen: ContentScreen,
    },
    新闻: {
        screen: ContentScreen,
    },
    职场: {
        screen: ContentScreen,
    },
    搞笑: {
        screen: ContentScreen,
    },


});

AppRegistry.registerComponent('QuHeart4', () => HomeConst);
