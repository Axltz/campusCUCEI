import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const backgroundImage = require('./img/fondoFotoCucei.jpg');

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false };
  }
  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contenedor}>
          <View style={styles.tituloCaja}>
            <Text style={styles.tituloTexto}>Institucional CUCEI</Text>
          </View>

          <View style={styles.videoBackground}>
            <View style={styles.videoYoutube}>
              <WebView 
                source={{ uri: 'https://axltz.github.io/videCuCei/' }}
                style={styles.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsFullscreenVideo={true}
                mediaPlaybackRequiresUserAction={false}
              />

              <TouchableOpacity style={styles.fullscreenButton} onPress={() => this.setState({ fullscreen: true })}>
                <Text style={styles.fullscreenText}>Pantalla completa</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Fullscreen modal */}
          <Modal visible={this.state.fullscreen} animationType="slide" presentationStyle="fullScreen">
            <View style={styles.fullscreenContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => this.setState({ fullscreen: false })}>
                <Text style={styles.closeText}>Cerrar</Text>
              </TouchableOpacity>
              <WebView
                source={{ uri: 'https://axltz.github.io/videCuCei/' }}
                style={styles.fullscreenWebview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsFullscreenVideo={true}
                mediaPlaybackRequiresUserAction={false}
              />
            </View>
          </Modal>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contenedor: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  tituloCaja: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  tituloTexto: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000002ff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  videoBackground: {
    width: '90%',
    height: 240,
    backgroundColor: "rgba(238, 241, 244, 0.71)",
    borderRadius: 15,
    padding: 10,
    marginTop: 140,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  videoYoutube: {
    width: '100%',
    marginTop: 10,
    aspectRatio: 16 / 9,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft: 30,
    marginTop: 15
  },
});