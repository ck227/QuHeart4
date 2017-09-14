import React from 'react'
import {AppRegistry, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class Header extends React.Component {

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
                        style={[styles.width48, this.props.sideWidth]}
                        onPress={this.props.showBack ? this.backBtnFunc : undefined}>
                        {this.props.showBack ?
                            <Image style={styles.backImg} source={(require("../assets/images/menu.png"))}/>
                            : null}
                    </TouchableOpacity>

                    <View style={styles.title}>
                        <TouchableOpacity underlayColor={'transparent'}>
                            <Text style={styles.titleText} numberOfLines={1}>
                                {this.props.title}
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4a9df8",
        height: 76,
        paddingTop:20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around'
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
        fontSize: 18
    },
    whiteColor: {
        color: "#ffffff"
    },
    title:{
        flex:1,
        marginRight:60,
        justifyContent:'center',
        alignItems:'center'

    }
});

AppRegistry.registerComponent('QuHeart4', () => Header);