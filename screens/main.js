import React, {Component} from 'react';
import {AppRegistry, Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './home'
import ContentScreen from './content'
import SideBar from './sideBar'

export default class DrawNav extends React.Component {

    //主界面的侧滑框架
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }


    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, marginTop: 20}}>
                <HomeConst/>
            </View>
        );
    }
}


_backClick = () => {
    // Alert.alert("dsfdf")
    this.props.navigation.navigate('hello')
}

const HomeConst = DrawerNavigator(
    {
        首页: {screen: HomeScreen},
        hello: {screen: ContentScreen}
    },
    {//这里配置参数
        header: null,
        drawerWidth: 270, // 抽屉宽
        drawerPosition: 'left',
        // activeTintColor:'#ffffff',
        contentComponent: props =>
            <SideBar backFunc={this._backClick.bind(this)}/>
    }
    )
;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#222930",
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',//按次要布局方向,控制字元素的布局，
        marginTop: 16
    },
    cat: {
        width: 48,
        height: 48,
        marginLeft: 16
    },
    text: {
        flex: 1,
        color: '#91969d',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 16
    },
    centerItem: {
        flexDirection: 'row',
        marginTop: 12,
        marginRight: 24
    },
    centerItems: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    itemsIcon: {
        width: 24,
        height: 24
    },
    itemsText: {
        color: '#91969d',
        fontSize: 14,
        marginTop: 4
    },
    contentItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 12
    },
    contentItem2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24
    },
    contentIcon: {
        width: 36,
        height: 36
    },
    contentText: {
        color: '#91969d',
        fontSize: 16
    },
    contentArrow: {
        width: 24,
        height: 24
    },
    arrowParent: {
        flex: 1,
        alignItems: 'flex-end'
    }

});

const index = StackNavigator({
    drawNav: {screen: DrawNav},
    content: {screen: HomeConst},
});

AppRegistry.registerComponent('QuHeart4', () => HomeConst);