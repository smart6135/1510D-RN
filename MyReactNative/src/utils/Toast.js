import {Platform, ToastAndroid, AlertIOS} from 'react-native';

function info(message) {
    if (Platform.OS === 'ios') {
        AlertIOS.alert('提示', message.toString());
    } else {
        ToastAndroid.show(message.toString(), ToastAndroid.SHORT);
    }
}

function error(message) {
    if (Platform.OS === 'ios') {
        AlertIOS.alert('错误', message.toString());
    } else {
        ToastAndroid.show(message.toString(), ToastAndroid.LONG);
    }
}

function success(message) {
    if (Platform.OS === 'ios') {
        AlertIOS.alert('成功', message.toString());
    } else {
        ToastAndroid.show(message.toString(), ToastAndroid.SHORT);
    }
}

export default {
    info,
    error,
    success
};