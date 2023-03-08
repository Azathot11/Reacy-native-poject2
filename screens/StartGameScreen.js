import React from 'react'
import { View ,TextInput,StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {

  const pressedHandler =()=>{
    console.log('Pressed')
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressedHandler={pressedHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressedHandler={pressedHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:100,
      marginHorizontal:24,
      padding:16,
      backgroundColor:'#3b021f',
      borderRadius:8,
      elevation:4,
      shadowColor:'#000',
      shadowOffset:{width:0,height:2},
      shadowRadius:6,
      shadowOpacity:0.25
      
    },
    numberInput:{
      height:50,
      width:50,
      fontSize:32,
      borderBottomColor:"#ddb52f",
      borderBottomWidth:2,
      color:'#ddb52f',
      marginVertical:8,
      fontWeight:"bold",
      textAlign:'center',

    },
  
    buttonsContainer:{
      flexDirection:'row',
    },
    buttonContainer:{
      flex:1,
    },

});