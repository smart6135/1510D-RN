import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Dimensions,
    TouchableHighlight,
    Image
} from 'react-native';

export default class BannerDetail extends Component{
    static navigationOptions = ({navigation}) => ({
       // title:'商品名称'
        title:navigation.state.params.bannerTitle,
    });

    render(){
        return(
            <View/>
        )
    }
}