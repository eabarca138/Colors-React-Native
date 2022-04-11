
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, SairaStencilOne_400Regular } from '@expo-google-fonts/saira-stencil-one';
import ColorContainer from '../components/ColorContainer';
import constants from '../constants/constants'

const Selection = ( {selectColor} ) => {
    const handlerSelectColor = color => {
        selectColor(color)
    }

    /* google fonts */
    let [fontsLoaded] = useFonts({
        SairaStencilOne_400Regular,
      });
      if(!fontsLoaded) return <AppLoading/>

      /* colors */
      const colorsArr = ['red', 'green', 'blue', 'yellow']

  return (
    <View>
        <Text style={styles.text}>Select color:</Text>
        <View style={styles.colors}>
            {
                colorsArr.map((color, i) => <ColorContainer key={i} handlerSelectColor={handlerSelectColor} color={color}/>)
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: constants.titleFZ,
        fontFamily: 'SairaStencilOne_400Regular'
    },
    colors: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  });
  

export default Selection