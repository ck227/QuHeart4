import React from 'react'
import {AppRegistry, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class HeaderBack extends React.Component {

    props: {
        showBack: true,
        backFunc: () => any
    }

    constructor(props) {
        super(props);
        // this.backBtnFunc = this.backBtnFunc.bind(this);
    }


    backBtnFunc() {
        // this.props.pop()
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.width60}
                        onPress={this.backBtnFunc}>
                        <Image style={styles.backImg} source={(require("../assets/images/arrowLeft.png"))}/>
                    </TouchableOpacity>

                    <View style={styles.title}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            {this.props.title}
                        </Text>
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
    width60: {
        width: 60
    },
    backImg: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    title: {
        flex: 1,
        marginRight: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },
    titleText: {
        color: 'white',
        fontSize: 18
    }
});

AppRegistry.registerComponent('QuHeart4', () => HeaderBack);