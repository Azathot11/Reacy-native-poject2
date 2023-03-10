import React from 'react'
import { Text, View ,Pressable,StyleSheet} from 'react-native'

const PrimaryButton = ({children,pressedHandler}) => {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed})=> pressed ? [styles.pressed ,styles.buttonInnerContainer]: styles.buttonInnerContainer} onPress={pressedHandler} android_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius:28,
    margin:4,
    overflow:'hidden',
  },
  buttonInnerContainer:{
    backgroundColor:'#72063c',
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
  },
  buttonText:{
    color:"white",
    textAlign:"center",
  },
  pressed:{
    opacity:0.75,
  }
});