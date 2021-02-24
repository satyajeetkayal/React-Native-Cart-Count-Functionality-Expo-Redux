import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Product from '../component/product';
import {connect} from 'react-redux';
import cartItems from '../reducers/cartItems';

class cartScreen extends Component {
    
    render() {
        return (
 <View style={styles.container}>
{ this.props.cartItems.length > 0 ?

        <Product onPress={this.props.removeItem}
         product={this.props.cartItems} /> : <Text>No items in your Cart</Text>
}
 </View>           
        );
    }
}

const mapStateToProps =(state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        removeItem : (product) => dispatch({type: 'REMOVE_FROM_CART', payload: product})
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default connect(null,mapStateToProps, mapDispatchToProps) (cartScreen);