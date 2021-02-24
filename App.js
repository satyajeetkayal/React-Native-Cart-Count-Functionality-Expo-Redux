
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from './container/shoppingCart';
import HomeScreen from './container/homeScreen';
import ElectronicsScreen from './container/electronicsScreen';
import BookScreen from './container/bookScreen';
import ShoppingIcon from './container/shoppingIcon';
import {Provider} from 'react-redux';
import store from './store'
import CartScreen from './container/cartScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render(){

  return (
    <Provider store={store}>
<NavigationContainer >
  <Stack.Navigator initialRouteName="ShoppingCart">
    <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{title:"Shopping Cart", headerTitleAlign:'center', headerRight:props =><ShoppingIcon />, headerStatusBarHeight:50 }}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:"Home", headerTitleAlign:'center', headerRight: props =><ShoppingIcon />, headerStatusBarHeight:50}}/>
    <Stack.Screen name="ElectronicsScreen" component={ElectronicsScreen} options={{title:"Electronics", headerTitleAlign:'center', headerRight:(props) =><ShoppingIcon />, headerStatusBarHeight:50}}/>
    <Stack.Screen name="BookScreen" component={BookScreen} options={{title:"Books", headerTitleAlign:'center', headerRight:props =><ShoppingIcon />, headerStatusBarHeight:50}}/>
    <Stack.Screen name="Cart" component={CartScreen}/>
    <Stack.Screen name="ShoppingIcon" component={ShoppingIcon}/>
  </Stack.Navigator>
</NavigationContainer>
</Provider>
  );
  }
}