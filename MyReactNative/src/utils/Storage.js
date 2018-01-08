import {AsyncStorage} from 'react-native';


function get(key) {
    return AsyncStorage.getItem(key).then(value => JSON.parse(value));
}

function set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
}

export default {
    get,
    set,
};