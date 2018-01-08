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

import {Container, Header, Item, Input, Icon} from 'native-base';
import Toast from '../../utils/Toast';
import Swiper from 'react-native-swiper';


export default class Index extends Component{

    constructor(props){
        super(props);
        this.state={
            searchText:'',//搜索框的文本
            advertisements: [
                {"imageUrl":"http://img20.360buyimg.com/da/jfs/t15463/87/1406832982/153955/a1915aef/5a4dd1bbN0b9b319b.jpg","desc":"箱包季"},
                {"imageUrl":"http://img14.360buyimg.com/da/s590x470_jfs/t13693/55/1127482456/50987/9a81a5ee/5a3b1230N6a308876.jpg","desc":"女神范儿"},
                {"imageUrl":"http://img20.360buyimg.com/babel/s590x470_jfs/t12970/270/1975868465/59085/c45c549e/5a4c8828N9c59e3c9.jpg","desc":"新年耀你红"}
            ],
            swiperShow:false,
            products: [],
        }
    }

    componentDidMount(){
      //  this._fetchProducts();
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }

    // _fetchProducts = () => {
    //     const req = new Request(SERVER_URL + PRODUCT_API, {method: 'GET'});
    //     console.log('request: ', SERVER_URL + PRODUCT_API);
    //     fetch(req).then((res) => {
    //         return res.json(); // 将返回的数据转换成JSON格式
    //     }).then((result, done) => {
    //         if (!done) {
    //             this._saveProducts(result);
    //             this.setState({isNetworkValid: true, products: result});
    //         }
    //     }).catch((err) => { // Promise异常处理
    //         const products = this._queryProducts();
    //         console.log('products: ' + JSON.stringify(products));
    //         this.setState({isNetworkValid: false, products: products});
    //     });
    // }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <TextInput placeholder="请输入要搜索的内容" style={styles.input} onChangeText={text=>{
                        this.setState({searchText:text})
                    }}></TextInput>
                    <Button style={styles.button} title="搜索" onPress={()=>Toast.info(this.state.searchText)}></Button>
                </View>
                <View style={styles.advertisement}>
                    {this.renderAdvertisementContent()}
                </View>
                <View style={styles.products}>
                    <Text>
                        商品列表
                    </Text>
                 {/*   <List dataArray={this.state.products} renderRow={this._renderRow}></List>*/}
                </View>
            </View>
        );
    }


    //react-native-swiper有兼容性问题
    renderAdvertisementContent(){
        if(this.state.swiperShow){
            return (
                <Swiper loop={true} height={190} autoplay={true} style={[styles.advertisementContent]}>
                    {this.state.advertisements.map((advertisement, index) => {
                    console.log(advertisement)
                    return (
                    <TouchableHighlight
                    key={index}
                    onPress={() => this.props.navigation.navigate('BannerDetail',{bannerTitle:advertisement.desc})
                    }>
                    <Image style={styles.advertisementContent} source={{uri:advertisement.imageUrl}}></Image>
                    </TouchableHighlight>
                    );
                    })}
                </Swiper>
            )
        }
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    searchbar:{
        marginTop:Platform.OS=='ios'?20:0,
        height:40,
      //  backgroundColor:'red',
       // justifyContent:'center',
       // alignItems:'center'
        flexDirection:'row'
    },
    advertisement:{
        height:180,
      //  backgroundColor:'green',
      //  justifyContent:'center',
      //  alignItems:'center'
    },
    products:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        flex:1,
        borderWidth:2,
        borderColor:'gray',
        borderRadius:10//设置圆角边框
    },
    button:{
        flex:1
    },
    advertisementContent: {
        width: Dimensions.get('window').width,
        height: 180
    }
})