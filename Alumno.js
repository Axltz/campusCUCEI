import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Alumno({ route, navigation }) {
  const [alumno, setAlumno] = useState(route?.params?.alumno || {});
  const [academico, setAcademico] = useState(route?.params?.academico || {});
  const [mostrarMaterias, setMostrarMaterias] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      if (!route?.params) {
        const alumnoGuardado = await AsyncStorage.getItem('alumno');
        const academicoGuardado = await AsyncStorage.getItem('academico');
        if (alumnoGuardado && academicoGuardado) {
          setAlumno(JSON.parse(alumnoGuardado));
          setAcademico(JSON.parse(academicoGuardado));
        }
      }
    };
    cargarDatos();
  }, []);

  const cerrarSesion = async () => {
    await AsyncStorage.removeItem('alumno');
    await AsyncStorage.removeItem('academico');
    navigation.replace('Usuario');
  };

  const promedio = academico.promedio ? parseFloat(academico.promedio) : 0;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require('./img/fondoApp.png')} style={styles.background} />

        <View style={styles.titleBox}>
          <Text style={styles.title}>Datos del alumno</Text>
        </View>

        <View style={styles.dataBox}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{alumno.nombre}</Text>

          <Text style={styles.label}>Código:</Text>
          <Text style={styles.value}>{alumno.codigo}</Text>

          <Text style={styles.label}>Carrera:</Text>
          <Text style={styles.value}>{alumno.carrera}</Text>

          <Text style={styles.label}>Ciclo:</Text>
          <Text style={styles.value}>{alumno.ciclo}</Text>

          <Text style={styles.label}>Campus:</Text>
          <Text style={styles.value}>{alumno.campus}</Text>

          <Text style={styles.label}>Estatus:</Text>
          <Text style={styles.value}>{alumno.situacion}</Text>
        </View>

        <View style={styles.dataBox}>
          <Text style={styles.label}>Créditos obtenidos:</Text>
          <Text style={styles.value}>{academico.creditos}</Text>

          <Text style={styles.label}>Créditos requeridos:</Text>
          <Text style={styles.value}>{academico.creditosRequeridos}</Text>

          <Text style={styles.label}>Certificado:</Text>
          <Text style={styles.value}>{academico.certificado}</Text>

          <Text style={styles.label}>Promedio general:</Text>
          <Text style={styles.value}>{promedio}</Text>
        </View>

        {academico.creditosAreas && (
          <>
            <View style={styles.titleBox}>
              <Text style={styles.title}>Créditos por área</Text>
            </View>

            {academico.creditosAreas.map((area, index) => {
              const porcentaje = Math.min(
                (area.creditos / area.requeridos) * 100,
                100
              );

              return (
                <View key={index} style={styles.dataBox}>
                  <Text style={styles.label}>{area.area}</Text>

                  <View style={styles.graphContainer}>
                    <View style={styles.graphBarBackground}>
                      <View
                        style={[styles.graphBarFill, { width: `${porcentaje}%` }]}
                      />
                    </View>
                    <Text style={styles.graphText}>
                      {area.creditos}/{area.requeridos} créditos ({porcentaje.toFixed(1)}%)
                    </Text>
                  </View>
                </View>
              );
            })}
          </>
        )}

        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setMostrarMaterias(!mostrarMaterias)}
        >
          <Text style={styles.showText}>
            {mostrarMaterias ? 'Ocultar materias' : 'Ver materias y calificaciones'}
          </Text>
        </TouchableOpacity>

        {mostrarMaterias && (
          <View style={{ width: '90%', marginBottom: 30 }}>
            {academico.materias?.map((m, index) => (
              <View key={index} style={styles.materiaCard}>
                <Text style={styles.label}>{m.descripcion}</Text>
                <Text style={styles.value}>Clave: {m.clave}</Text>
                <Text style={styles.value}>Ciclo: {m.ciclo}</Text>
                <Text style={styles.value}>Créditos: {m.creditos}</Text>
                <Text style={styles.value}>Calificación: {m.calificacion}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={cerrarSesion}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>

        <View>
          <Image
            source={require('./img/leoAni.png')}
            style={{
              width: 350,
              height: 200,
              resizeMode: 'contain',
              marginBottom: 40,
              marginLeft: 200,
            }}
          />
          <Image
            source={require('./img/ID.png')}
            style={{
              width: 180,
              height: 250,
              resizeMode: 'contain',
              marginTop: -250,
              marginLeft: 100,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },

  background: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '110%',
    resizeMode: 'cover',
  },

  titleBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '90%',
    maxWidth: 420,
    marginBottom: 30,
    elevation: 5,
    borderColor: '#00398fff',
    borderWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#010179ff',
    textAlign: 'center',
  },

  dataBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 16,
    width: '90%',
    maxWidth: 420,
    marginBottom: 25,
    borderWidth: 4,
    borderColor: '#0070b1ff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },

  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#010179ff',
  },

  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },

  showButton: {
    backgroundColor: '#0070b1ff',
    paddingVertical: 14,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },

  showText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  materiaCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 14,
    borderWidth: 3,
    borderColor: '#0070b1ff',
    marginBottom: 12,
  },

  logoutButton: {
    backgroundColor: '#b22222',
    paddingVertical: 14,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    marginBottom: 40,
  },

  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  graphContainer: {
    marginTop: 12,
  },

  graphBarBackground: {
    width: '100%',
    height: 25,
    backgroundColor: '#ccc',
    borderRadius: 12,
    overflow: 'hidden',
  },

  graphBarFill: {
    height: '100%',
    backgroundColor: '#0070b1ff',
  },

  graphText: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#010179ff',
    textAlign: 'center',
  },
});
