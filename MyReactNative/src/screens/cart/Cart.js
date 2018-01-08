import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Storage from '../../utils/Storage';
export default class Cart extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        Storage.get("userId").then((userId) => {
            console.log(userId)
            if (userId) {
            }else{
                console.log("---------")
                this.props.navigation.navigate('Login');
            }
        });
    }

    render() {
        return (
            <View>
                <Text>cart</Text>
            </View>
        );
    }
}