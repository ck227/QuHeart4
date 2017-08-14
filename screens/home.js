import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button,Alert} from 'react-native';
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
                <Header showBack='true' title="首页" backFunc={this._backClick.bind(this)}/>
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

/*//打开的方法
open()
{
    this.props.navigation.navigate('DrawerOpen');
}

//关闭的方法
close()
{
    this.props.navigation.navigate('DrawerClose');
}*/

// const styles = StyleSheet.create({
//     icon: {
//         width: 24,
//         height: 24,
//     },
// });


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
    Home: {
        screen: HomeScreen,
    },
    Content: {
        screen: ContentScreen,
    },
    Content2: {
        screen: ContentScreen,
    },
    Content3: {
        screen: ContentScreen,
    },
    Content4: {
        screen: ContentScreen,
    },
    Content5: {
        screen: ContentScreen,
    },


});

AppRegistry.registerComponent('QuHeart4', () => HomeConst);
