import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView, Pressable, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';


export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0, 
      num2: 0, 
      num3: 0, 
      num4: 0, 
      num5: 0, 
      num6: 0,
      num7: 0,
      num8: 0,
      num9: 0,
      num10: 0,
      num11: 0,
      num12: 0,
      num13: 0,
      num14: 0,
      num15: 0,
      num16: 0,
      num17: 0,
      num18: 0,
      num19: 0,
      num20: 0,
      num21: 0,
      num22: 0,
      num23: 0,
      num24: 0,
      num25: 0,
      num26: 0,
      num27: 0,
      num28: 0,
      num29: 0,
      num30: 0,
      num31: 0,
    };
  }

  toggleModal = (key) => {
    this.setState({ [key]: 1 });
  };
  
  closeModal = (key) => {
    this.setState({ [key]: 0 });
  };

  renderGenericModal = (title, stateKey, descripcion, images = []) => {
    if (this.state[stateKey] !== 1) return null;

    const handleClose = () => this.closeModal(stateKey);
    const imagesToDisplay = images.length > 0 ? images : [{ isPlaceholder: true, texto: 'Sin imagen' }];

    return (
     <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={handleClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={handleClose}
            >
              <Text style={styles.textClose}>Cerrar</Text>
            </Pressable>
          </View>

          <ScrollView 
            style={styles.scrollContenedor} 
            contentContainerStyle={styles.scrollContentContainer}
          >
            <PagerView style={styles.pagerContainer} initialPage={0}>
              {imagesToDisplay.map((img, index) => (
                <View style={styles.page} key={index}>
                  {img.isPlaceholder ? (
                    <View style={styles.imagenPlaceholder}>
                      <Text style={styles.textoCarrusel}>{img.texto}</Text>
                    </View>
                  ) : (
                    <>
                      <Image source={img.source} style={styles.imagenCarrusel} />
                      <Text style={styles.textoCarrusel}>{img.texto}</Text>
                    </>
                  )}
                </View>
              ))}
            </PagerView>

            <Text style={styles.textoDescriptivo}>{descripcion}</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}



  render() {

    const rectoriaImages = [
      { source: require('./img/FotosCucei/rectoria1.jpg'), texto: "Foto del edificio por fuera" },
      { source: require('./img/FotosCucei/rectoria2.jpg'), texto: "Foto del auditorio Enrique Diaz De León" },
      { source: require('./img/FotosCucei/IMG_5041.jpg'), texto: "Foto de la entrada de Coordinación" },
      { source: require('./img/FotosCucei/IMG_5043.jpg'), texto: "Foto del pasillo principal por fuera" },
    ];
    
    const AlfayBetaImages = [
      { source: require('./img/FotosCucei/IMG_5014.jpg'), texto: "Foto del edificio Alfa y Beta" },
      { source: require('./img/FotosCucei/alfaBetaDentro.jpg'), texto: "Foto del pasillo Alfa y Beta" },
      { source: require('./img/FotosCucei/IMG_5018.jpg'), texto: "Foto del edificio Alfa y Beta" },
      { source: require('./img/FotosCucei/alfaBetaDentro2.jpg'), texto: "Foto del pasillo Alfa y Beta" },
    ]

    const BibliotecaImages = [
      { source: require('./img/FotosCucei/IMG_5021.jpg'), texto: "Foto de la entrada de la biblioteca" },
      {source: require('./img/FotosCucei/biblio1.jpg'), texto: "Foto del interior de la biblioteca" },
      {source: require('./img/FotosCucei/biblio2.jpg'), texto: "Foto del interior de la biblioteca" },
      {source: require('./img/FotosCucei/IMG_5023.jpg'), texto: "Foto por Fuera de la biblioteca" },
    ];
    const CafeteriaImages = [
      { source: require('./img/FotosCucei/CafeX.jpg'), texto: "Foto de la entrada de la Cafeteria X" },
      { source: require('./img/FotosCucei/CafeX2.jpg'), texto: "Foto de la Cafeteria X" },
      { source: require('./img/FotosCucei/CafeX3.jpg'), texto: "Foto de la Cafeteria X" },
    ];
    const WalmartImages = [
      { source: require('./img/FotosCucei/IMG_5243.jpg'), texto: "Foto del laboratorio de Quimica y Fisica CUCEI modulo Y" },
      { source: require('./img/FotosCucei/IMG_5245.jpg'), texto: "Foto del laboratorio de Quimica y Fisica CUCEI modulo Y" },
      { source: require('./img/FotosCucei/IMG_5256.jpg'), texto: "Foto del laboratorio de Quimica y Fisica CUCEI modulo Y" },
      { source: require('./img/FotosCucei/IMG_5253.jpg'), texto: "Foto del auditorio Nikolal V. Mitskievich" },
    ];
    const moduloZ = [
      { source: require('./img/FotosCucei/IMG_5249.jpg'), texto: "Foto de los modulo Z" },
      { source: require('./img/FotosCucei/IMG_5250.jpg'), texto: "Foto de los modulo Z" },
      { source: require('./img/FotosCucei/IMG_5251.jpg'), texto: "Foto de los modulo Z" },
      { source: require('./img/FotosCucei/IMG_5255.jpg'), texto: "Foto de los modulo Z" },
    ];
    const moduloXW = [
      { source: require('./img/FotosCucei/IMG-20251010-WA0132.jpg'), texto: "Foto del interior del modulo W" },
      { source: require('./img/FotosCucei/IMG-20251010-WA0135.jpg'), texto: "Foto del interior del modulo X" },
      { source: require('./img/FotosCucei/IMG_5215.jpg'), texto: "Foto del modulo X" },
      { source: require('./img/FotosCucei/IMG_5220.jpg'), texto: "Cubiculo modulo w" },
    ];
    
    const moduloV = [
      { source: require('./img/FotosCucei/IMG_5225.jpg'), texto: "Foto modulo V" },
      { source: require('./img/FotosCucei/IMG_5194.jpg'), texto: "Foto modulo V" },
      { source: require('./img/FotosCucei/IMG_5195.jpg'), texto: "Foto modulo V" },
      { source: require('./img/FotosCucei/IMG_5192.jpg'), texto: "Foto modulo V" },
    ];
    const moduloV2 = [
      { source: require('./img/FotosCucei/IMG_5198.jpg'), texto: "Foto modulo V2" },
      { source: require('./img/FotosCucei/IMG_5199.jpg'), texto: "Foto modulo V2" },
      { source: require('./img/FotosCucei/IMG_5200.jpg'), texto: "Foto modulo V2" },
      { source: require('./img/FotosCucei/IMG_5201.jpg'), texto: "Foto modulo V2" },
    ];
    const moduloU = [
      { source: require('./img/FotosCucei/IMG_5189.jpg'), texto: "Foto modulo U (Papeleria)" },
      { source: require('./img/FotosCucei/IMG_5188.jpg'), texto: "Foto modulo U" },
      { source: require('./img/FotosCucei/IMG_5187.jpg'), texto: "Foto modulo U" },
      { source: require('./img/FotosCucei/IMG_5186.jpg'), texto: "Foto modulo U" },
    ];
    const moduloT = [
      { source: require('./img/FotosCucei/IMG_5174.jpg'), texto: "Foto modulo T" },
      { source: require('./img/FotosCucei/IMG_5175.jpg'), texto: "Foto modulo T" },
      { source: require('./img/FotosCucei/IMG_5176.jpg'), texto: "Foto modulo T" },
      { source: require('./img/FotosCucei/IMG_5177.jpg'), texto: "Foto modulo T" },
    ];
    const moduloS = [
      { source: require('./img/FotosCucei/IMG_5183.jpg'), texto: "Foto modulo S" },
      { source: require('./img/FotosCucei/modS.jpg'), texto: "Foto modulo S" },
      { source: require('./img/FotosCucei/modS2.jpg'), texto: "Foto modulo S" },
      { source: require('./img/FotosCucei/modS3.jpg'), texto: "Foto modulo S" },
      { source: require('./img/FotosCucei/s2.jpg'), texto: "Foto modulo S2" },
      { source: require('./img/FotosCucei/s2_2.jpg'), texto: "Foto modulo S2" },

    ];
    const moduloR = [
      { source: require('./img/FotosCucei/IMG_5179.jpg'), texto: "Foto modulo R" },
      { source: require('./img/FotosCucei/IMG_5180.jpg'), texto: "Foto modulo R" },
      { source: require('./img/FotosCucei/IMG_5181.jpg'), texto: "Foto modulo R" },
      { source: require('./img/FotosCucei/IMG_5182.jpg'), texto: "Foto modulo R" },
    ];
    const moduloQ = [
      { source: require('./img/FotosCucei/IMG_5138.jpg'), texto: "Foto modulo Q" },
      { source: require('./img/FotosCucei/IMG_5139.jpg'), texto: "Foto modulo Q" },
      { source: require('./img/FotosCucei/IMG_5140.jpg'), texto: "Foto modulo Q" },
      { source: require('./img/FotosCucei/IMG_5141.jpg'), texto: "Foto modulo Q" },
    ];
    const moduloP = [
      { source: require('./img/FotosCucei/IMG_5152.jpg'), texto: "Foto modulo P" },
      { source: require('./img/FotosCucei/IMG_5153.jpg'), texto: "Foto modulo P" },
      { source: require('./img/FotosCucei/IMG_5154.jpg'), texto: "Foto modulo P" },
      { source: require('./img/FotosCucei/IMG_5155.jpg'), texto: "Foto modulo P" },
    ];
    const moduloO = [
    
      { source: require('./img/FotosCucei/IMG_5136.jpg'), texto: "Oficinas de divtic o" },
      { source: require('./img/FotosCucei/IMG_5128.jpg'), texto: "Foto modulo o" },
      { source: require('./img/FotosCucei/IMG_5303.jpg'), texto: "Foto la oficina de coordinación por dentro" },
      { source: require('./img/FotosCucei/IMG_5301.jpg'), texto: "Foto modulo o" },
    ];
    const moduloN = [
      { source: require('./img/FotosCucei/IMG_5134.jpg'), texto: "Foto modulo N" },
      { source: require('./img/FotosCucei/IMG_5132.jpg'), texto: "Foto modulo N" },
    ];
    const moduloM = [
      { source: require('./img/FotosCucei/IMG_5122.jpg'), texto: "Foto modulo M desde afuera" },
      { source: require('./img/FotosCucei/modM.jpg'), texto: "Área de estudio del modulo M" },
      { source: require('./img/FotosCucei/modM2.jpg'), texto: "Foto modulo M" },
      { source: require('./img/FotosCucei/escalerasO.jpg'), texto: "Foto escaleras del modulo M" },

    ];
    const moduloL = [
      { source: require('./img/FotosCucei/IMG_5114.jpg'), texto: "Foto modulo L" },
      { source: require('./img/FotosCucei/IMG_5115.jpg'), texto: "Foto modulo L" },
      { source: require('./img/FotosCucei/IMG_5147.jpg'), texto: "Foto modulo L" },
      { source: require('./img/FotosCucei/IMG_5145.jpg'), texto: "Foto modulo L" },
    ];
    const moduloK = [
      { source: require('./img/FotosCucei/IMG_5096.jpg'), texto: "Foto modulo K" },
      { source: require('./img/FotosCucei/IMG_5094.jpg'), texto: "Foto modulo K" },
      { source: require('./img/FotosCucei/IMG_5095.jpg'), texto: "Foto modulo K" },
      { source: require('./img/FotosCucei/IMG_5107.jpg'), texto: "Foto modulo K" },
    ]
    ;
    const moduloJ = [
      { source: require('./img/FotosCucei/IMG_5100.jpg'), texto: "Foto modulo J" },
      { source: require('./img/FotosCucei/IMG_5106.jpg'), texto: "Foto modulo J" },
    ];
    const moduloIyHImages = [
      { source: require('./img/FotosCucei/IMG_5103.jpg'), texto: "Foto modulo I" },
      { source: require('./img/FotosCucei/IMG_5104.jpg'), texto: "Foto modulo I" },
      { source: require('./img/FotosCucei/labH.jpg'), texto: "Foto modulo H" },
      { source: require('./img/FotosCucei/modH.jpg'), texto: "Laboratorio de analisis clinicos e investigación traslacional" },
    ];
    const moduloG = [
      { source: require('./img/FotosCucei/ModuloG_CUCEI.jpg'), texto: "Foto modulo G" },
      { source: require('./img/FotosCucei/ModuloG2_CUCEI.jpg'), texto: "Foto modulo G" },
      { source: require('./img/FotosCucei/ModuloG3_CUCEI.jpg'), texto: "Foto modulo G" },

    ];
    const moduloF = [
      { source: require('./img/FotosCucei/IMG_5079.jpg'), texto: "Foto del modulo F" },
      { source: require('./img/FotosCucei/garrafones.jpg'), texto: "Área de llenado de agua y hornos de microondas" },
    ];
    const moduloE = [
      { source: require('./img/FotosCucei/IMG_5064.jpg'), texto: "Foto del modulo E" },
      { source: require('./img/FotosCucei/IMG_5065.jpg'), texto: "Foto del modulo E" },
      { source: require('./img/FotosCucei/IMG-20251010-WA0101.jpg'), texto: "Foto del modulo F" },
      { source: require('./img/FotosCucei/IMG-20251010-WA0127.jpg'), texto: "Tienda Cucei" },
    ];
    const moduloD = [
      { source: require('./img/FotosCucei/IMG_5054.jpg'), texto: "Foto del modulo D" },
      { source: require('./img/FotosCucei/IMG_5053.jpg'), texto: "Foto del modulo D" },
    ];
    const moduloC = [
      { source: require('./img/FotosCucei/IMG_5044.jpg'), texto: "Foto del modulo C" },
      { source: require('./img/FotosCucei/IMG_5045.jpg'), texto: "Foto del modulo C" },
      { source: require('./img/FotosCucei/IMG_5046.jpg'), texto: "Foto del modulo C" },
    ];
    const moduloB = [
      { source: require('./img/FotosCucei/IMG_5047.jpg'), texto: "Foto del modulo B" },
      { source: require('./img/FotosCucei/IMG_5048.jpg'), texto: "Foto del modulo B" },
      { source: require('./img/FotosCucei/IMG_5049.jpg'), texto: "Foto del modulo B" },
      { source: require('./img/FotosCucei/IMG_5050.jpg'), texto: "Foto del modulo B" },
    ];
    const TitanicImages = [
      { source: require('./img/FotosCucei/IMG_5168.jpg'), texto: "Foto del Laboratorio (Titanic)" },
      { source: require('./img/FotosCucei/IMG_5169.jpg'), texto: "Foto del Laboratorio (Titanic)" }, 
      { source: require('./img/FotosCucei/titanic3.jpg'), texto: "Foto del Laboratorio (Titanic)" },
      { source: require('./img/FotosCucei/titanic4.jpg'), texto: "Foto del Laboratorio (Titanic)" },
    ];
    const labInduIma = [
      { source: require('./img/FotosCucei/IMG_5068.jpg'), texto: "Foto del laboratorio industrial" },
      { source: require('./img/FotosCucei/IMG_5070.jpg'), texto: "Foto del laboratorio industrial" },
      { source: require('./img/FotosCucei/IMG_5071.jpg'), texto: "Foto del laboratorio industrial" },
      { source: require('./img/FotosCucei/IMG_5069.jpg'), texto: "Foto del laboratorio industrial" },
    ];
    const estacionamientoImages = [
      { source: require('./img/FotosCucei/IMG_5058.jpg'), texto: "Foto del Estacionamiento" },
      { source: require('./img/FotosCucei/IMG_5063.jpg'), texto: "Foto del Estacionamiento (acceso)" },
      { source: require('./img/FotosCucei/IMG_5060.jpg'), texto: "Foto del Estacionamiento" },
    ];
    const Rectoria = () => this.toggleModal('num1');
    const AlfaYBeta = () => this.toggleModal('num2');
    const Walmart = () => this.toggleModal('num3');
    const Biblioteca = () => this.toggleModal('num4');
    const CafeteriaX = () => this.toggleModal('num5');
    const ModuloZ = () => this.toggleModal('num6');
    const ModuloXW = () => this.toggleModal('num7');
    const ModuloV = () => this.toggleModal('num9');
    const ModuloV2 = () => this.toggleModal('num10');
    const ModuloU = () => this.toggleModal('num11');
    const ModuloT = () => this.toggleModal('num12');
    const ModuloS = () => this.toggleModal('num13');
    const ModuloR = () => this.toggleModal('num14');
    const ModuloQ = () => this.toggleModal('num15');
    const ModuloP = () => this.toggleModal('num16');
    const ModuloO = () => this.toggleModal('num17');
    const ModuloN = () => this.toggleModal('num18');
    const ModuloM = () => this.toggleModal('num19');
    const ModuloL = () => this.toggleModal('num20');
    const ModuloK = () => this.toggleModal('num21');
    const ModuloJ = () => this.toggleModal('num22');
    const moduloIyH = () => this.toggleModal('num23');
    const ModuloG = () => this.toggleModal('num24');
    const ModuloF = () => this.toggleModal('num25');
    const ModuloE = () => this.toggleModal('num26');
    const ModuloD = () => this.toggleModal('num27');
    const ModuloC = () => this.toggleModal('num28');
    const ModuloB = () => this.toggleModal('num29');
    const Estacionamiento = () => this.toggleModal('num30');
    const labIndu = () => this.toggleModal('num31');
    const Titanic = () => this.toggleModal('num8');

  const { width } = Dimensions.get('window');

  const SIZE_MULTIPLIER = 2; 

  const baseMapWidth = 610;
  const baseMapHeight = 410;
  const displayMapWidth = Math.round(width * 0.95 * SIZE_MULTIPLIER);
  const scale = displayMapWidth / baseMapWidth;
  const displayMapHeight = Math.round(baseMapHeight * scale);

  const GLOBAL_SHIFT_X = -100; 
  const GLOBAL_SHIFT_Y = -50;  

    return (
      <View style={styles.contenedor}>
        <ScrollView style={styles.mapaCaja}>
          
          <View style={{ marginLeft: GLOBAL_SHIFT_X, marginTop: GLOBAL_SHIFT_Y }}>

      <Image
          source={require('./assets/mapa_2024.jpg')}
          style={[styles.mapa, {width: displayMapWidth, height: displayMapHeight, marginTop: Math.round(150 * scale), marginLeft: Math.round(-80 * scale) }]}
        />

          <TouchableOpacity 
          onPress={Rectoria}
          style={[styles.botonGenerico, { top: Math.round(550 * scale), left: Math.round(220 * scale), width: Math.round(40 * scale), height: Math.round(80 * scale), borderRadius: Math.round(5 * scale) }]}
          >
            <View />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={AlfaYBeta} 
            style={[styles.botonGenerico, { top: Math.round(350 * scale), left: Math.round(290 * scale), width: Math.round(25 * scale), height: Math.round(25 * scale) }]}
          >
            <View />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={Walmart} 
            style={[styles.botonGenerico, { top: Math.round(200 * scale), left: Math.round(210 * scale), width: Math.round(25 * scale), height: Math.round(25 * scale) }]}
          >
            <View />
          </TouchableOpacity>
                    
           <TouchableOpacity 
          onPress={Titanic}
          style={[styles.botonGenerico, { top: Math.round(280 * scale), left: Math.round(330 * scale), width: Math.round(15 * scale), height: Math.round(20 * scale), borderRadius: Math.round(5 * scale) }]}
          >
            <View />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={Biblioteca} 
            style={[styles.botonGenerico, { top: Math.round(470 * scale), left: Math.round(250 * scale), width: Math.round(40 * scale), height: Math.round(40 * scale) }]}
          >
            <View />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={CafeteriaX} 
            style={[styles.botonGenerico, { top: Math.round(130 * scale), left: Math.round(275 * scale), width: Math.round(25 * scale), height: Math.round(50 * scale) }]}
          >
          <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloZ} 
            style={[styles.botonGenerico, { top: Math.round(160 * scale), left: Math.round(180 * scale), width: Math.round(35 * scale), height: Math.round(45 * scale) }]}
          >
            <View />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ModuloXW} 
            style={[styles.botonGenerico, { top: Math.round(150 * scale), left: Math.round(230 * scale), width: Math.round(40 * scale), height: Math.round(45 * scale) }]}
          >
            <View />
          </TouchableOpacity>
          


          <TouchableOpacity 
            onPress={ModuloV} 
            style={[styles.botonGenerico, { top: Math.round(195 * scale), left: Math.round(280 * scale), width: Math.round(35 * scale), height: Math.round(15 * scale), transform: [{ rotate: '45deg' }], } ]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloV2} 
            style={[styles.botonGenerico, { top: Math.round(210 * scale), left: Math.round(270 * scale), width: Math.round(35 * scale), height: Math.round(15 * scale), transform: [{ rotate: '45deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloU} 
            style={[styles.botonGenerico, { top: Math.round(250 * scale), left: Math.round(300 * scale), width: Math.round(35 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloT} 
            style={[styles.botonGenerico, { top: Math.round(270 * scale), left: Math.round(300 * scale), width: Math.round(35 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloS} 
            style={[styles.botonGenerico, { top: Math.round(235 * scale), left: Math.round(255 * scale), width: Math.round(35 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloR} 
            style={[styles.botonGenerico, { top: Math.round(280 * scale), left: Math.round(290 * scale), width: Math.round(25 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloQ} 
            style={[styles.botonGenerico, { top: Math.round(300 * scale), left: Math.round(310 * scale), width: Math.round(35 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloP} 
            style={[styles.botonGenerico, { top: Math.round(305 * scale), left: Math.round(295 * scale), width: Math.round(35 * scale), height: Math.round(10 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloO} 
            style={[styles.botonGenerico, { top: Math.round(255 * scale), left: Math.round(255 * scale), width: Math.round(15 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloN} 
            style={[styles.botonGenerico, { top: Math.round(285 * scale), left: Math.round(250 * scale), width: Math.round(40 * scale), height: Math.round(12 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloM} 
            style={[styles.botonGenerico, { top: Math.round(300 * scale), left: Math.round(245 * scale), width: Math.round(40 * scale), height: Math.round(12 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloL} 
            style={[styles.botonGenerico, { top: Math.round(335 * scale), left: Math.round(300 * scale), width: Math.round(30 * scale), height: Math.round(15 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloK} 
            style={[styles.botonGenerico, { top: Math.round(320 * scale), left: Math.round(240 * scale), width: Math.round(45 * scale), height: Math.round(10 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloJ} 
            style={[styles.botonGenerico, { top: Math.round(340 * scale), left: Math.round(250 * scale), width: Math.round(40 * scale), height: Math.round(10 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={moduloIyH} 
            style={[styles.botonGenerico, { top: Math.round(350 * scale), left: Math.round(220 * scale), width: Math.round(90 * scale), height: Math.round(10 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloG} 
            style={[styles.botonGenerico, { top: Math.round(310 * scale), left: Math.round(160 * scale), width: Math.round(70 * scale), height: Math.round(20 * scale), transform: [{ rotate: '40deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloF} 
            style={[styles.botonGenerico, { top: Math.round(360 * scale), left: Math.round(255 * scale), width: Math.round(20 * scale), height: Math.round(45 * scale), transform: [{ rotate: '0deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloE} 
            style={[styles.botonGenerico, { top: Math.round(385 * scale), left: Math.round(155 * scale), width: Math.round(160 * scale), height: Math.round(15 * scale), transform: [{ rotate: '30deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloD} 
            style={[styles.botonGenerico, { top: Math.round(530 * scale), left: Math.round(260 * scale), width: Math.round(25 * scale), height: Math.round(15 * scale), transform: [{ rotate: '30deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloC} 
            style={[styles.botonGenerico, { top: Math.round(560 * scale), left: Math.round(270 * scale), width: Math.round(25 * scale), height: Math.round(15 * scale), transform: [{ rotate: '30deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ModuloB} 
            style={[styles.botonGenerico, { top: Math.round(580 * scale), left: Math.round(270 * scale), width: Math.round(25 * scale), height: Math.round(15 * scale), transform: [{ rotate: '30deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={labIndu} 
            style={[styles.botonGenerico, { top: Math.round(400 * scale), left: Math.round(180 * scale), width: Math.round(25 * scale), height: Math.round(25 * scale), transform: [{ rotate: '30deg' }] }]}
          >
            <View />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={Estacionamiento} 
            style={[styles.botonGenerico, { top: Math.round(430 * scale), left: Math.round(230 * scale), width: Math.round(25 * scale), height: Math.round(15 * scale), transform: [{ rotate: '30deg' }] }]}
          >
            
            <View />
          </TouchableOpacity>


          </View>
        
        </ScrollView>
        {this.renderGenericModal('Rectoría', 'num1', "La Rectoría es el edificio principal del Centro Universitario. Aquí se concentran las oficinas administrativas y espacios de dirección, además de áreas de atención al alumnado.", rectoriaImages)}
        {this.renderGenericModal('Alfa y Beta', 'num2', "Este es el Alfa y Beta, utilizado para salones de computo y equipo como recurso para el alumnado.", AlfayBetaImages)}
        {this.renderGenericModal('Modulo Y', 'num3', `El Laboratorio de Química del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) es un espacio diseñado para el desarrollo de prácticas experimentales que complementan la formación teórica de los estudiantes. En él se realizan experimentos de análisis cualitativo y cuantitativo, reacciones químicas, y estudios de propiedades de la materia. El módulo Y alberga los laboratorios de Química y Física, donde los estudiantes realizan prácticas experimentales esenciales para su formación. También se encuentra el auditorio Nikolai V. Mitskievich, un espacio destinado a conferencias, clases magistrales y eventos académicos. Es un edificio clave en la formación científica del CUCEI.
Cuenta con equipo especializado, medidas de seguridad y supervisión académica que garantizan un aprendizaje seguro y efectivo. Su objetivo es fomentar el pensamiento científico, la precisión experimental y la comprensión de los principios que rigen los procesos químicos.`, WalmartImages)}
        {this.renderGenericModal('Biblioteca', 'num4', 'La Biblioteca del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) es un espacio dedicado al apoyo académico, la investigación y el aprendizaje autónomo. Ofrece una amplia colección de libros, revistas científicas, tesis, materiales digitales y bases de datos especializadas en ingeniería, física, matemáticas, computación y otras áreas de las ciencias exactas. Además, cuenta con áreas de estudio individual y grupal, computadoras con acceso a internet, servicios de préstamo interno y externo, así como orientación bibliográfica para estudiantes, docentes e investigadores. Su objetivo es facilitar el acceso al conocimiento y fomentar el desarrollo académico dentro de la comunidad universitaria.', BibliotecaImages)}
        {this.renderGenericModal('Cafeteria (modulo X)', 'num5', `La Cafetería X es uno de los lugares más concurridos por la comunidad universitaria. En su interior se ofrece una amplia variedad de alimentos y bebidas, con un ambiente relajado y espacios cómodos para convivir entre clases. Su ubicación estratégica la convierte en un punto de descanso popular dentro del campus.`, CafeteriaImages)}
        {this.renderGenericModal('Módulo Z', 'num6', `El módulo Z se caracteriza por su diseño funcional y moderno, con salones amplios y pasillos iluminados. Es una de las áreas académicas más recientes del campus, donde se imparten diversas materias teóricas y prácticas, contribuyendo al dinamismo educativo de la institución..`, moduloZ)}
        {this.renderGenericModal('Módulo X y W', 'num7', `Los módulos X y W cuentan con aulas bien equipadas y cubículos destinados a profesores. Sus interiores están diseñados para favorecer la concentración y la interacción académica. Representan espacios esenciales para el desarrollo de clases teóricas y asesorías..`, moduloXW)}
        {this.renderGenericModal('Laboratorios Mecanica', 'num8', `Varios laboratorios del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI), conocido como "Titanic", es un espacio equipado con herramientas y tecnología avanzada para el uso académico de los estudiantes. Este laboratorio ofrece acceso a software especializado, herramientas de programación, simulación y análisis de datos, facilitando el aprendizaje práctico en áreas como la ingeniería y las ciencias exactas. Además, cuenta con personal de apoyo que brinda asistencia técnica y orientación en el uso de los recursos disponibles. El objetivo del laboratorio es fomentar el desarrollo de habilidades tecnológicas y computacionales esenciales para la formación profesional de los estudiantes.`, TitanicImages)}
        {this.renderGenericModal('Módulo V', 'num9', `Los módulos V y V2 son edificios gemelos que albergan múltiples aulas. Ahi hay varios departamentos de Fisica. Son puntos clave para diversas carreras, especialmente en los primeros semestres.`, moduloV)}
        {this.renderGenericModal('Módulo V2', 'num10', `Los módulos V y V2 son edificios gemelos que albergan múltiples aulas. Ahi hay varios departamentos de Matematica. Son puntos clave para diversas carreras, especialmente en los primeros semestres..`, moduloV2)}
        {this.renderGenericModal('Módulo U', 'num11', `El módulo U es conocido por su ubicación cercana a la papelería del campus ademas hay salones de clase.`, moduloU)}
        {this.renderGenericModal('Módulo T', 'num12', `El módulo T es un edificio académico con varias aulas y pasillos amplios. Es comúnmente utilizado para clases de distintas ingenierías y se distingue por su accesibilidad y cercanía con otros módulos centrales del CUCEI..`, moduloT)}
        {this.renderGenericModal('Módulo S', 'num13', `Los módulos S y S2 son espacios amplios dedicados principalmente a actividades académicas y de laboratorio. Sus modernas instalaciones permiten un ambiente cómodo para el aprendizaje, y sus pasillos interconectados facilitan la movilidad dentro del área y hay un auditorio llamado Antonio Alatorre.`, moduloS)}
        {this.renderGenericModal('Módulo R', 'num14', `Salones de clase y laboratorios de microprocesadores y microcontroladores.`, moduloR)}
        {this.renderGenericModal('Módulo Q', 'num15', `Salones de clase.`, moduloQ)}
        {this.renderGenericModal('Módulo P', 'num16', `El módulo P alberga aulas amplias y laboratorios destinados a prácticas experimentales. Es frecuentado por estudiantes de distintas ingenierías y mantiene una estructura organizada que facilita el desarrollo de las actividades educativas..`, moduloP)}
        {this.renderGenericModal('Módulo O', 'num17', `El módulo M también alberga oficinas de DIVTIC y áreas de coordinación académica. En su interior se encuentran espacios destinados al personal docente y administrativo, siendo un punto clave en la organización académica del CUCEI.`, moduloO)}
        {this.renderGenericModal('Módulo N', 'num18', `Salones de clase y area de estudiantes y cubiculos de computación se encuentra en el segundo piso en frente del M, alberga una sucursal del banco Santander.`, moduloN)}
        {this.renderGenericModal('Módulo M', 'num19', `Salones de clase y area de estudiantes y cubiculos de computación se encuentra en el segundo piso, alberga una sucursal del banco Santander.`, moduloM)}
        {this.renderGenericModal('Módulo L', 'num20', `Salones de clase y Hospital.`, moduloL)}
        {this.renderGenericModal('Módulo K', 'num21', `El módulo K se distingue por su ubicación estratégica y su arquitectura sencilla. En él se imparten diversas asignaturas teóricas, con aulas equipadas para el trabajo colaborativo, se distingue tambien por su color rojo.`, moduloK)}
        {this.renderGenericModal('Módulo J', 'num22', `Salones de clase.`, moduloJ)}
        {this.renderGenericModal('Módulo I y H', 'num23', `Los módulos I y H se utilizan tanto para clases teóricas como para prácticas de laboratorio. En el módulo H se encuentra el laboratorio de análisis clínicos e investigación traslacional, donde se desarrollan actividades científicas especializadas..`, moduloIyHImages)}
        {this.renderGenericModal('Módulo G', 'num24', `Laboratorio de ingenieria Quimica.`, moduloG)}
        {this.renderGenericModal('Módulo F', 'num25', `Salones de clase, área de llenado y laboratorios.`, moduloF)}
        {this.renderGenericModal('Módulo E', 'num26', `Salones de clase y oficinas de coordinación de el área de Quimica.`, moduloE)}
        {this.renderGenericModal('Módulo D', 'num27', `Salones de clase de proulex.`, moduloD)}
        {this.renderGenericModal('Módulo C', 'num28', `Salones de clase.`, moduloC)}
        {this.renderGenericModal('Módulo B', 'num29', `Salones de clase.`, moduloB)}
        {this.renderGenericModal('Estacionamiento', 'num30', `Área destinada para el estacionamiento de vehículos de estudiantes, personal académico y administrativo del CUCEI. Cuenta con vigilancia y medidas de seguridad para proteger los vehículos estacionados.`, estacionamientoImages)}
        {this.renderGenericModal('Lab Industrial', 'num31', `El Laboratorio Industrial del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) es un espacio destinado a la formación práctica de los estudiantes y al desarrollo de proyectos relacionados con la ingeniería y los procesos industriales. En este laboratorio se realizan prácticas de control de calidad, análisis de materiales, manufactura, metrología, y automatización de procesos, entre otras áreas.`, labInduIma)}
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
  mapaCaja: {
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
  mapa: {
    transform: [{ rotate: '90deg' }],
  },

  botonGenerico: {
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: { 
    transform: [{ rotate: '90deg' }],
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: 400,
    maxHeight: 350,
    shadowColor: '#3a1c1cff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    paddingHorizontal: 8,
  },
  modalText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },

  scrollContenedor: {
    width: '100%',
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  pagerContainer: {
    marginTop: 8,
    alignSelf: "center",
    height: 300,
    width: 350,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  imagenCarrusel: {
    width: 220,
    height: 220,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imagenPlaceholder: { 
    width: 220, 
    height: 220, 
    backgroundColor: '#eee', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textoCarrusel: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#222'
  },
  textoDescriptivo: {
    marginTop: -10,
    textAlign: "justify",
    fontSize: 14,
    width: '90%',
    color: '#333'
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    position: 'absolute',
    right: 6,
    top: 2,
    backgroundColor: '#2196F3',
    width: 75,
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700'
  },
    textClose: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
    modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000ff',
    flexShrink: 1,
  },
});