import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Selection from './screens/Selection'
import Color from './screens/Color'


export default function App() {
  const [color, setColor] = useState('')
  const selectColor = color => {
    setColor(color)
  }

  /* switch */
  let content = < Selection selectColor={selectColor}/>
  if (color) {
    content = <Color selectColor={selectColor}  color={color}/>
  }
  return (
    <View style={styles.container}>
      { content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8DE7E'
  },
});
