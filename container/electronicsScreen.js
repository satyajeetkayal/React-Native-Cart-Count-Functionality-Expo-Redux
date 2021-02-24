import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { electronics } from './Data';
import Product from '../component/product';
import { connect } from 'react-redux';

 class ElectronicsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Product product ={electronics} onPress={this.props.addItemToCart}/>
            </View>
            
        );

    }
    
}

const mapDispatchToProps =(dispatch) => {
    return{
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART', payload:product})
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
alignItems:'center',
justifyContent:'center'
    }
})

export default connect(null, mapDispatchToProps)(ElectronicsScreen);