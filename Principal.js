import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: 40 }}>
          <TouchableOpacity onPress={this.irADirectorio}>
            <View
              style={{
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
              }}
            >
              <Image
                source={require('./img/directorioIcon.png')}
                style={{ height: 80, width: 80, resizeMode: 'contain' }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.irAVideo}>
            <View
              style={{
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
              }}
            >
              <Image
                source={require('./img/iconoVideo.png')}
                style={{ height: 80, width: 80, resizeMode: 'contain' }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
