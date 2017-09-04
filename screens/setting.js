import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Switch, Image} from 'react-native';
import Header from './header'

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header showBack='true' title="趣心里" backFunc={this._backClick.bind(this)}/>

                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>
                        大字号
                    </Text>
                    <View style={styles.switchParent}>
                        <Switch/>
                    </View>
                </View>
                <View style={styles.line2}/>

                <View style={styles.line}/>
                <View style={styles.item2}>
                    <Text style={styles.text}>
                        去好评
                    </Text>
                    <View style={styles.switchParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>
                <View style={styles.line2}/>

                <View style={styles.item2}>
                    <Text style={styles.text}>
                        去吐槽
                    </Text>
                    <View style={styles.switchParent}>
                        <Image style={styles.contentArrow} source={(require("../assets/images/arrow_right.png"))}/>
                    </View>
                </View>
                <View style={styles.line2}/>

            </View>
        );
    }

    _backClick = () => {
        this.props.navigation.navigate('DrawerOpen');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    line: {
        height: 1,
        backgroundColor: '#dcdcdc',
        marginTop: 20
    },
    line2: {
        height: 1,
        backgroundColor: '#dcdcdc',
    },
    text: {
        color: '#313131',
        fontSize: 16
    },
    item: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingLeft: 16,
        paddingBottom: 8,
        paddingRight: 16,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    item2: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingLeft: 16,
        paddingBottom: 12,
        paddingRight: 16,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    switchParent: {
        flex: 1,
        alignItems: 'flex-end'
    },
    contentArrow: {
        width: 24,
        height: 24
    },

});

AppRegistry.registerComponent('QuHeart4', () => HomeScreen);
