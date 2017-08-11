import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class Header extends Component {

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                        hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                        style={[styles.width48, this.props.sideWidth]}
                        onPress={this.props.showBack ? this.backBtnFunc : undefined}>
                        {this.props.showBack ?
                            <Image style={styles.backImg} source={(require("../assets/images/menu.png"))}/>
                            : null}
                    </TouchableOpacity>
                    <Text style={[styles.whiteColor, styles.textCenter, styles.headerText]}>{this.props.title}</Text>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4a9df8",
        height: 45,
        flexDirection: "row",
        alignItems: "center"
    },
    width48: {
        width: 60
    },
    height48: {
        height: 48
    },
    backImg: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    headerText: {
        fontSize: 18,
        flex: 1
    },
    whiteColor: {
        color: "#ffffff"
    },
    textCenter: {
        textAlign: "center"
    },
});

AppRegistry.registerComponent('QuHeart4', () => Header);