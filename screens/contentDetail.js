import React from 'react';

import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import HeaderBack from './headerBack'

export default class ContentDetail extends React.Component {

    render() {
        return (
            <View>
                <HeaderBack/>
            </View>
        );
    }

}

AppRegistry.registerComponent('QuHeart4', () => ContentDetail);