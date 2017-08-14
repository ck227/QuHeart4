import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class Header extends Component {

    props: {
        showBack: true,
        backFunc: () => any
    }

    constructor(props) {
        super(props);
        this.backBtnFunc = this.backBtnFunc.bind(this);
    }


    backBtnFunc() {
        this.props.backFunc ? this.props.backFunc.call(null) : this.props.navigator.pop();
    }

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

                    <TouchableOpacity style={styles.textCenter} underlayColor={'transparent'}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            {this.props.title}
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4a9df8",
        height: 56,
        flexDirection: "row",
        alignItems: "center"
    },
    width48: {
        width: 60
    },
    backImg: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10
    },
    whiteColor: {
        color: "#ffffff"
    },
    textCenter: {
        flex: 1,
        alignItems: 'center'
    },
});

AppRegistry.registerComponent('QuHeart4', () => Header);