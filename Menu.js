import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Directorio from './Directorio';
import Principal from './Principal';
import Video from './Video';


export default class Menu extends Component {
  render() {
    const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Principal} options={{ headerShown: false}} />
      <Stack.Screen name="Directorio" component={Directorio} options={{headerShown: false}}/>
      <Stack.Screen name="Video" component={Video} options={{headerShown: false}}/>

    </Stack.Navigator>
    </NavigationContainer>

    )

  }
}