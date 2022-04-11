import { Text, View,Button } from 'react-native';
import ColorContainer from '../components/ColorContainer';
import constants from '../constants/constants';

const Color = ( { selectColor, color } ) => {
    const styles = {
        text: {
            color: color,
            fontSize: constants.titleFZ,
            textTransform: 'uppercase',
            textAlign: 'center',
            fontFamily: 'SairaStencilOne_400Regular'
           }
        };
    
    const handlerSelectColor = color => {
        selectColor(color)
    }
    
  return (
    <View>
        <Text style={styles.text}>{color}</Text>

        <ColorContainer handlerSelectColor={handlerSelectColor}  color={color} />

        <Button title="Return" color="#9b9b9b" onPress={() => handlerSelectColor(false)} />
    </View>
  )
}

export default Color