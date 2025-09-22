import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Video extends Component {
  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.tituloCaja}>
          <Text style={styles.tituloTexto}>Institucional CUCEI</Text>
        </View>

        <View style={styles.webviewCaja}>
          <WebView
            source={require('./html/videoCucei.html')}            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'rgba(122, 177, 245, 1)',
    alignItems: 'center',
    paddingTop: 60,
  },
  tituloCaja: {
    backgroundColor: 'white',
    borderRadius: 15,
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
    textAlign: 'left',
    color: '#000080',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  webviewCaja: {
    flex: 1,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#000080',
    marginBottom: 20,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
