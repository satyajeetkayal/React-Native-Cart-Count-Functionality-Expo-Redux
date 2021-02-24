import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class shoppingCart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button type="clear" title="Home" onPress={()=> this.props.navigation.navigate('HomeScreen')} />
                <Button type="clear" title="Electronics" onPress={()=> this.props.navigation.navigate('ElectronicsScreen')} />
                <Button type="clear" title="Books" onPress={()=> this.props.navigation.navigate('BookScreen')} />
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

