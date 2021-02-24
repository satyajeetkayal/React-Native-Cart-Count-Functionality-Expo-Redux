import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import CartScreen from './cartScreen';
import {withNavigation} from 'react-navigation';
import cartItems from '../reducers/cartItems';

class ShoppingIcon extends Component{

    render(){
        return(

<View style={{padding:5}}>
    <View style={{position: 'relative', 
    height: 30, width: 30, borderRadius: 15, 
    backgroundColor:'rgba(95,197,123,0.8)', right:13,
    bottom:-20, alignItems:'center', justifyContent:'center',
    zIndex:2000}}>
<Text style={{color:'white', fontWeight:'bold'}}>{this.props.cartItems.length}</Text>
    </View>
    <Icon name="ios-cart" size={30} onPress={()=> this.props.navigation.navigate('Cart')}/>
</View>
);
 
}
}
    
const mapStateToProps =(state)=>{
    return{
        cartItems: state
    }

}

export default connect(mapStateToProps)(ShoppingIcon);