import React from 'react';

import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Header from './header'
import ContentDetail from './contentDetail'

var ids
var naviga

class ContentScreen extends React.Component {

    _backClick = () => {
        naviga.navigate('DrawerOpen');
    }

    constructor(props) {
        super(props);
        // // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        // this.fetchData = this.fetchData.bind(this);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
        ids = this.props.id ? this.props.id : null
        naviga = this.props.navigation
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const {page} = this.state;
        var url = `https://qiye.quheart.com/smartHeart/front/qaAct.htm?operate=showQas2&loginName=18507104251&pageNo=${page}&pageSize=10`;
        url = ids ? url + '&qaType=' + ids : url
        this.setState({loading: true});
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.qaUserBeans : [...this.state.data, ...res.qaUserBeans],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({error, loading: false});
            });
    }

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    handleLoadMore = () => {
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        // return <SearchBar placeholder="Type Here..." lightTheme round/>;
        return <Text>这里是列表头部</Text>;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}>
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    _onItemClick = () => {
        naviga.navigate('detail')
    };

    render() {

        return (
            <View>
                <Header showBack='false' title={this.props.banner} backFunc={this._backClick.bind(this)}/>
                <FlatList
                    data={this.state.data}
                    renderItem={({item, index}) => (

                        <TouchableOpacity onPress={this._onItemClick}>
                            <View style={styles.item}>
                                <View style={styles.container}>
                                    <Image
                                        source={{uri: item.headImg}}
                                        style={styles.thumbnail}/>
                                    <View style={styles.rightContainer}>
                                        <Text style={styles.title}>{item.qaTitle}</Text>
                                        <Text numberOfLines={2} style={styles.content}>{item.qaContent}</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() =>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View
                                style={{
                                    height: 1,
                                    width: 104,
                                    backgroundColor: 'white'
                                }}/>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#CED0CE",
                                }}
                            />
                        </View>
                    }
                    keyExtractor={(item, index) => index}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    //onEndReachedThreshold={15}
                />

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
        paddingTop: 8,
        paddingBottom: 8
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
    // divider: {
    //     height: 0.5,
    //     backgroundColor: '#999999',
    //     marginLeft: 104,
    //     marginTop: 6
    // },
});

const index = StackNavigator({
    content: {screen: ContentScreen},
    detail: {screen: ContentDetail},
}, {
    header: null
});

export default index

// AppRegistry.registerComponent('QuHeart4', () => index);