import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Directorio from './Directorio';
import Principal from './Principal';
import Video from './Video';
import Mapa from './Mapa';
import Usuario from './Usuario';
import Alumno from './Alumno';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default class Menu extends Component {
    constructor(props) {
    super(props)
    this.state = { pantallaInicial: 'Usuario' }
  }

  async componentDidMount() {
    try {
      const alumno = await AsyncStorage.getItem('alumno')
      const academico = await AsyncStorage.getItem('academico')
      if (alumno && academico) {
        this.setState({ pantallaInicial: 'Alumno' })
      }
    } catch (error) {
      console.log('Error al revisar sesión:', error)
    }
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Principal} options={{ headerShown: false}} />
      <Stack.Screen name="Directorio" component={Directorio} options={{headerShown: false}}/>
      <Stack.Screen name="Video" component={Video} options={{headerShown: false}}/>
      <Stack.Screen name="Mapa" component={Mapa} options={{headerShown: false}}/>
      <Stack.Screen name="Usuario" component={Usuario} options={{headerShown: false}}/>
      <Stack.Screen name='Alumno' component={Alumno} options={{headerShown: false}}/>


    </Stack.Navigator>
    </NavigationContainer>

    )

  }
}