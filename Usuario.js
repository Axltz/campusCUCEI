import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Usuario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      contrasena: ''
    }
  }

  async componentDidMount() {
    const alumno = await AsyncStorage.getItem('alumno');
    const academico = await AsyncStorage.getItem('academico');
    if (alumno && academico) {
      this.props.navigation.replace('Alumno', {
        alumno: JSON.parse(alumno),
        academico: JSON.parse(academico),
      });
    }
  }

  irAAlumno = () => {
    const { usuario, contrasena } = this.state

    if (usuario === '' || contrasena === '') {
      Alert.alert('Error', 'Por favor ingresa tu código y contraseña.')
      return
    }

    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = async () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let respuesta = xhttp.responseText      
        let separador = respuesta.indexOf('}{')
        let parte1 = respuesta.substring(0, separador + 1)
        let parte2 = respuesta.substring(separador + 1)

        let datosAlumno = JSON.parse(parte1)
        let datosAcademicos = JSON.parse(parte2)
      
        if (datosAlumno.codigo) {
          await AsyncStorage.setItem('alumno', JSON.stringify(datosAlumno))
          await AsyncStorage.setItem('academico', JSON.stringify(datosAcademicos))

          this.props.navigation.replace('Alumno', {
            alumno: datosAlumno,
            academico: datosAcademicos
          })
        } else {
          Alert.alert('Error', 'Credenciales incorrectas o usuario no encontrado.')
        }
      }
    }

    xhttp.open(
      "GET",
      `https://cuceimobile.space/campusCucei/auth.php?codigo=${usuario}&nip=${contrasena}`,
      true
    )
    xhttp.send()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/fondoApp.png')}
          style={styles.background}
        />

        <Image
          source={require('./img/leoLogo.png')}
          style={{ width: 300, height: 130, resizeMode: 'contain', marginBottom: 40 }}
        />

        <View style={styles.card}>
          <Text style={styles.title}>UDG</Text>

          <TextInput
            placeholder="Código"
            keyboardType="numeric"
            value={this.state.usuario}
            onChangeText={usuario => this.setState({ usuario })}
            style={styles.input}
          />

          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            value={this.state.contrasena}
            onChangeText={contrasena => this.setState({ contrasena })}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={this.irAAlumno}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('./img/LogosUDGCUCEI.png')}
          style={{ width: 300, height: 120, resizeMode: 'contain', marginTop: 40 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  card: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 4
  },
  title: { fontSize: 26, fontWeight: 'bold', color: '#010179ff', marginBottom: 16 },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12
  },
  button: {
    backgroundColor: '#010179ff',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
})
