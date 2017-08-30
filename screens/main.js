import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './home'
import ContentScreen from './content'

export default class DrawNav extends Component {

    //主界面的侧滑框架
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Main/>
            </View>
        )
    }
}

const SideBarView = ({navigation}) => (
    <ScrollView style={styles.bg}>

        <View>
            <View style={styles.title}>
                <Image style={styles.cat} source={(require("../assets/images/cat.jpg"))}/>
                <Text style={styles.text}>请登录</Text>
            </View>
        </View>

        {/*中间的内容*/}
        <View style={styles.centerItem}>
            <TouchableOpacity style={styles.centerItems} onPress={() => navigation.navigate('Setting')}>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.itemsIcon} source={(require("../assets/images/collect.png"))}/>
                    <Text style={styles.itemsText}>收藏</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerItems} onPress={() => navigation.navigate('Setting')}>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.itemsIcon} source={(require("../assets/images/alarm.png"))}/>
                    <Text style={styles.itemsText}>消息</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerItems} onPress={() => navigation.navigate('Setting')}>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.itemsIcon} source={(require("../assets/images/setting.png"))}/>
                    <Text style={styles.itemsText}>设置</Text>
                </View>
            </TouchableOpacity>

        </View>

        {/*下面的内容列表*/}
        <TouchableOpacity onPress={() => navigation.navigate('Content')}>
            <View style={styles.contentItem}>
                {/*<Image style={styles.contentIcon} source={(require("../assets/images/home.png"))}/>*/}
                <Text style={styles.contentText}>首页</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content2', {id: '16'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>情感</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content3', {id: '18'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>人际</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content4', {id: '37'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>成长</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content5', {id: '38'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>学业</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content6', {id: '39'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>职场</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content7', {id: '17'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>健康</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content8', {id: '41'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>家庭</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content9', {id: '19'})}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>其他</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>


        {/*内容列表结束*/}

        {/*</View>*/}
    </ScrollView>
)

// const MyNavScreen = ({navigation, banner}) => (
//     <ScrollView style={styles.container}>
//         <Text>{banner}</Text>
//         <Button
//             onPress={() => navigation.navigate('DrawerOpen')}
//             title="Open drawer"
//         />
//         <Button onPress={() => navigation.goBack(null)} title="Go back"/>
//     </ScrollView>
// );

const HomeConst = ({navigation}) => (
    <HomeScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
HomeConst.navigationOptions = {
    drawerLabel: 'Setting',
};

//下面的内容

const ContentConst = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst.navigationOptions = {
    drawerLabel: 'Content',
};

const ContentConst2 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst2.navigationOptions = {
    drawerLabel: 'Content2',
};

const ContentConst3 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst3.navigationOptions = {
    drawerLabel: 'Content3',
};

const ContentConst4 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst4.navigationOptions = {
    drawerLabel: 'Content4',
};

const ContentConst5 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst5.navigationOptions = {
    drawerLabel: 'Content5',
};

const ContentConst6 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst6.navigationOptions = {
    drawerLabel: 'Content6',
};

const ContentConst7 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst7.navigationOptions = {
    drawerLabel: 'Content7',
};

const ContentConst8 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst8.navigationOptions = {
    drawerLabel: 'Content8',
};

const ContentConst9 = ({navigation}) => (
    <ContentScreen banner={'这里可以传值到主界面'} navigation={navigation}/>
);
ContentConst9.navigationOptions = {
    drawerLabel: 'Content9',
};


const SideBarScreen = ({navigation}) => (
    <SideBarView banner={'这里可以传值到侧滑'} navigation={navigation}/>
);
// SideBarScreen.navigationOptions = {
//     drawerLabel: 'Item1',
// };

const Main = DrawerNavigator(
    {
        Content: {
            screen: ContentConst,
        },
        Content2: {
            screen: ContentConst2,
        },
        Content3: {
            screen: ContentConst3,
        },
        Content4: {
            screen: ContentConst4,
        },
        Content5: {
            screen: ContentConst5,
        },
        Content6: {
            screen: ContentConst6,
        },
        Content7: {
            screen: ContentConst7,
        },
        Content8: {
            screen: ContentConst8,
        },
        Content9: {
            screen: ContentConst9,
        },
        Setting: {
            screen: HomeConst,
        },

    }, {
        contentComponent: SideBarScreen,
        // initialRouteName: 'homeIndex',
        header: null,
        drawerWidth: 270,
        drawerPosition: 'left',
        inactiveTintColor: '#000000',
        activeTintColor: '#1eacff',
    },
    )
;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
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


// AppRegistry.registerComponent('QuHeart4', () => cons);