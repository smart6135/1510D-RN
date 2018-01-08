/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator, TabNavigator,} from 'react-navigation';
import Index from './src/screens/index/Index';
import ItemCategory from './src/screens/category/ItemCategory';
import Cart from  './src/screens/cart/Cart';
import Home from './src/screens/mine/Home'
import Login from './src/screens/login/Login'
import BannerDetail from  './src/screens/banner/BannerDetail'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    render() {
        return (
                <Navigator/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const Tab = TabNavigator(
    {
        Index: {
            screen: Index,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                header: null,
                gesturesEnabled: false,  // 关闭iOS下的右滑返回
            })
        },
        CateGory: {
            screen: ItemCategory,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '分类',
                header: null,
                gesturesEnabled: false,  // 关闭iOS下的右滑返回
            })
        },
        Cart: {
            screen: Cart,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '购物车',
                header: null,
                gesturesEnabled: false,  // 关闭iOS下的右滑返回
            }),
        },
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                header: null,
                gesturesEnabled: false,  // 关闭iOS下的右滑返回
            }),
        },
    },
    {
        tabBarPosition: 'bottom',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#d133ff',
            inactiveTintColor: '#333333',
            style: {backgroundColor:'#ffffff',height:Platform.OS=='ios'?45:59},
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        },

    },
);

const Navigator = StackNavigator(
    {
        Tab: {
            screen: Tab,
            navigationOptions: {
                header: null,
                gesturesEnabled: false,  // 关闭iOS下的右滑返回
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
                gesturesEnabled: false,  // 关闭iOS下的右滑返回
            }
        },
        BannerDetail:{screen:BannerDetail}

    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
        },
    }
);
