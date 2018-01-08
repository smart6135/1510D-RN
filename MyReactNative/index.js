import { AppRegistry } from 'react-native';
import App from './App';

/**
 * AppRegistry是所有React Native 应用的入口，应用的根组件通过AppRegistry.
 * registerComponent方法注册自己，然后
 * 原生系统才可以加载React Native 应用的代码并运行React Native应用
 */
AppRegistry.registerComponent('MyReactNative', () => App);
