import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, Alert} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Header from './header'
import ContentScreen from './content'

/**
 * TODO:
 * 左侧数据，分页，item点击跳转新界面，详情界面
 */

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

//{"description":"帖子类型","id":16,"sysType":"QA_TYPE","typeName":"情感"},
// {"description":"帖子类型","id":18,"sysType":"QA_TYPE","typeName":"人际"},
// {"description":"帖子分类","id":37,"sysType":"QA_TYPE","typeName":"成长"},
// {"description":"帖子类型","id":38,"sysType":"QA_TYPE","typeName":"学业"},
// {"description":"帖子类型","id":39,"sysType":"QA_TYPE","typeName":"职场"},
// {"description":"帖子类型","id":17,"sysType":"QA_TYPE","typeName":"健康"},
// {"description":"帖子类型","id":41,"sysType":"QA_TYPE","typeName":"家庭"},
// {"description":"帖子类型","id":19,"sysType":"QA_TYPE","typeName":"其他"}

const HomeConst = DrawerNavigator({
    首页: {
        screen: HomeScreen,
    },
    情感: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '情感',
            id: '16'
        }),
    },
    人际: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '人际',
            id: '18'
        }),
    },
    成长: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '成长',
            id: '37'
        }),
    },
    学业: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '学业',
            id: '38'
        }),
    },
    职场: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '职场',
            id: '39'
        }),
    },
    健康: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '健康',
            id: '17'
        }),
    },
    家庭: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '健康',
            id: '41'
        }),
    },
    其他: {
        screen: ContentScreen,
        navigationOptions: ({navigation}) => ({
            title: '其他',
            id: '19'
        }),
    }


});

AppRegistry.registerComponent('QuHeart4', () => HomeConst);
