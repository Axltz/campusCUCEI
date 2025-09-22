import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './Menu';

export default function App() {
  return (
    <Menu/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2bdffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
