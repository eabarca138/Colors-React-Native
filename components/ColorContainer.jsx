import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ColorContainer = ({color, handlerSelectColor}) => {
    const styles = {
        colorContainer: {
            backgroundColor: color,  
            height: 100,
            width: 100,
            margin: 20,
           }
        };

  return (
    <TouchableOpacity onPress={() => handlerSelectColor(color)}  style={styles.colorContainer}></TouchableOpacity>
  )
}

export default ColorContainer