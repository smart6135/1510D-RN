import React,{Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import Toast from '../../utils/Toast';

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            phone:"",
            password:""
        }
    }


    login(){
        console.log("================================")
        var phone = this.state.phone;
        var password = this.state.password;
        var url = "http://192.168.234.1:8080/user/login?phone="+phone+"&password="+password;
        fetch(url, {
            method: 'GET'
        }).then((response) => response.json()) //把response转为json
            .then((responseData) => { // 上面的转好的json
              console.log(responseData);
              let {code} = responseData;
                console.log(code);
                if(code==20000){
                    Toast.info("登录成功")
                    //把后台返回的用户信息，含userid,放到缓存里面
                    let {data} = responseData;
                    let {id} = data;

                    console.log(data);
                    this.props.navigation.goBack();
                }
            }).catch(function(err) {
            //错误处理
            console.log(err)

        });
    }

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style = {styles.headtitle}>
                        登 录
                    </Text>
                </View>
                <View style={styles.inputview}>
                    <TextInput style = {styles.textinput} placeholder='手机号' underlinecolorandroid='transparent'
                               onChangeText={(text) => this.setState({phone:text})}/>
                    <View style={styles.dividerview}><Text style={styles.divider}></Text></View>
                    <TextInput style = {styles.textinput} placeholder='密码' secureTextEntry ={true} underlinecolorandroid='transparent'
                               onChangeText={(text) => this.setState({password:text})}/>
                </View>

                <View style={styles.buttomview}>
                    <TouchableOpacity onPress={()=>this.login()}>
                    <View style={styles.buttonview} >
                        <Text style={styles.logintext}>登 录</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.emptyview}></View>

                    <View style={styles.bottombtnsview}>
                        <View style={styles.bottomleftbtnview}>
                            <Text style={styles.bottombtn}>无法登录？</Text>
                        </View>
                        <View style={styles.bottomrightbtnview}>
                            <Text style={styles.bottombtn}>新用户</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,//可拉伸
        backgroundColor: '#F5FCFF',
    },
    header: {//头部高度
        height: 50,
        justifyContent:'center',//水平方向
    },
    headtitle: {//头部标题
        alignSelf:'center',
        fontSize: 18,
        color:'#000000',
    },
    avatarview: {//登录图标区域
        height: 150,
        backgroundColor: '#ECEDF1',
        justifyContent: 'center',
    },
    avatarimage: {//登录图标
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    inputview: {//用户名/密码区域
        height: 100,
    },
    textinput: {//用户名/密码输入框
        flex: 1,
        borderWidth: 0,
        fontSize: 16,
    },
    dividerview: {//分割线区域
        flexDirection: 'row',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ECEDF1'
    },
    buttomview: {
        backgroundColor: '#ECEDF1',
        flex: 1,
    },
    buttonview: {
        flexDirection: 'row',
        backgroundColor: '#1DBAF1',
        margin: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logintext: {
        alignSelf:'center',
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
    },
    emptyview: {
        flex: 1,
    },
    bottombtnsview: {
        flexDirection: 'row',
    },
    bottomleftbtnview: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bottomrightbtnview: {
        flex: 1,
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bottombtn: {
        fontSize: 15,
        color: '#1DBAF1',
    },
});
