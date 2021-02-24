import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

export default class Product extends Component {

renderProduct =(product) => {
    console.log('product')
    
return product.map((item, index) =>{

        return(
<View key ={index} style={{padding:20}}>
    <Button type="clear" onPress={()=>this.props.onPress(item) } title={item.name + "-" + item.price} />
</View>
        );
    })    
}

    render() {
        return (
            <View style={styles.container}>
                {this.renderProduct(this.props.product)}
            </View>
            
        );
    }
}
 const styles = StyleSheet.create({
     container:{
flex:1,
alignItems:'center',
justifyContent:'center'
     }
 })