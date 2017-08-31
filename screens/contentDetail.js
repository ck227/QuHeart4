import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class ContentDetail extends Component {

    render() {
        return (
            <View>
                <Image style={styles.img} source={(require("../assets/images/meizi.jpeg"))}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: 100
    }

});

