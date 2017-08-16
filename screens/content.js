import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Header from './header'

// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var REQUEST_URL = 'https://qiye.quheart.com/smartHeart/front/qaAct.htm?operate=showQas2&loginName=18507104251&pageNo=1&pageSize=10';//&qaType=16

var ids

export default class ContentScreen extends Component {

    static navigationOptions = ({navigation}) => ({

        // title: `Chat with ${navigation.state.params.title}`,
    });

    componentDidMount() {
        this.props.navigation.setParams({
            ids: `${navigation.state.params.id}`,
            REQUEST_URL: REQUEST_URL + '&qaType=' + ids
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    // dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    dataSource: this.state.dataSource.cloneWithRows(responseData.qaUserBeans),
                    loaded: true,
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View>
                <Header showBack='false' title="趣心里" backFunc={this._backClick.bind(this)}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    style={styles.listView}
                />
            </View>
        );
    }

    _backClick = () => {
        this.props.navigation.navigate('DrawerOpen');
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    加载中...
                </Text>
            </View>
        );
    }

    renderMovie(listdata) {
        return (

            <View style={styles.item}>

                <View style={styles.container}>

                    <Image
                        source={{uri: listdata.headImg}}
                        style={styles.thumbnail}
                    />

                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{listdata.qaTitle}</Text>
                        <Text numberOfLines={2} style={styles.content}>{listdata.qaContent}</Text>
                    </View>

                </View>

                <View style={styles.divider}/>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6
    },
    rightContainer: {
        flex: 1,
        marginLeft: 12
    },
    title: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'left',
    },
    content: {
        color: '#999999',
        fontSize: 12,
        textAlign: 'left'
    },
    thumbnail: {
        width: 80,
        height: 60,
    },
    listView: {
        backgroundColor: '#FFFFFF',
    },
    divider: {
        height: 0.5,
        backgroundColor: '#CCCCCC',
        marginLeft: 104,
        marginTop: 6
    },
});

AppRegistry.registerComponent('QuHeart4', () => list);