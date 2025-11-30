import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Principal extends Component {
  constructor(props) {
    super(props);
  }

  irADirectorio = () => {
    console.log("Pulsando Directorio");
    this.props.navigation.navigate('Directorio');
  };

  irAVideo = () => {
    console.log("Pulsando Video");
    this.props.navigation.navigate('Video');
  };
  irAMapa = () => {
    console.log("Pulsando Mapa");
    this.props.navigation.navigate('Mapa');
  }
  irAUsurio = () => {
    console.log("Pulsando Usuario");
    this.props.navigation.navigate('Usuario');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#fff' }}>

        <Image
          source={require('./img/fondoApp.png')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />

        <View style={{ marginTop: 60, marginBottom: 20 }}>
          <Image
            source={require('./img/LogosUDGCUCEI.png')}
            style={{ width: 350, height: 150, resizeMode: 'contain' }}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignSelf: 'center',
            borderWidth: 4,
            borderColor: '#010179ff',
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 30, textAlign: 'center', color: '#010179ff' }}>
            Bienvenido
          </Text>
        </View>

        <View style={styles.grid}>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.irADirectorio} style={styles.cardTouchable}>
              <View style={styles.card}>
                <Image source={require('./img/directorioIcon.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.irAVideo} style={styles.cardTouchable}>
              <View style={styles.card}>
                <Image source={require('./img/iconoVideo.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={this.irAMapa} style={styles.cardTouchable}>
              <View style={styles.card}>
                <Image source={require('./img/mapaIcon.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.irAUsurio} style={styles.cardTouchable}>
              <View style={styles.card}>
                <Image source={require('./img/usuario.png')} style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 70,
  },
  cardTouchable: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    height: 130,
    width: 130,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  icon: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
