import React, {Component} from 'react';
import {AppRegistry, Text, View, ScrollView, StyleSheet, Image, Button, Alert} from 'react-native';
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

const HomeConst = DrawerNavigator(
    {
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
                title: '家庭',
                id: '41'
            }),
        },
        其他: {
            screen: ContentScreen,
            navigationOptions: ({navigation}) => ({
                title: '其他',
                id: '19'
            }),
        },

    }, {//这里配置参数
        drawerWidth: 270, // 抽屉宽
        drawerPosition: 'left',
        contentComponent: props =>
            <ScrollView style={styles.bg}>

                <View>
                    <View style={styles.title}>
                        <Image style={styles.cat} source={(require("../assets/images/cat.jpg"))}/>
                        <Text style={styles.text}>请登录</Text>
                    </View>
                </View>

                {/*中间的内容*/}
                <View style={styles.centerItem}>
                    <View style={styles.centerItems}>
                        <Image style={styles.itemsIcon} source={(require("../assets/images/collect.png"))}/>
                        <Text style={styles.itemsText}>收藏</Text>
                    </View>

                    <View style={styles.centerItems}>
                        <Image style={styles.itemsIcon} source={(require("../assets/images/alarm.png"))}/>
                        <Text style={styles.itemsText}>消息</Text>
                    </View>

                    <View style={styles.centerItems}>
                        <Image style={styles.itemsIcon} source={(require("../assets/images/setting.png"))}/>
                        <Text style={styles.itemsText}>设置</Text>
                    </View>
                </View>

                {/*下面的内容列表*/}
                <View style={styles.contentItem}>
                    {/*<Image style={styles.contentIcon} source={(require("../assets/images/home.png"))}/>*/}
                    <Text style={styles.contentText}>首页</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>情感</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>人际</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>成长</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>学业</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>职场</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>健康</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>家庭</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                <View style={styles.contentItem2}>
                    <Text style={styles.contentText}>其他</Text>
                    <View style={styles.arrowParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>

                {/*</View>*/}
            </ScrollView>
    })
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

AppRegistry.registerComponent('QuHeart4', () => HomeConst);
