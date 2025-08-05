import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PurpleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purple Screen</Text>
    </View>
  )
}

export default PurpleScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    text:{
        fontSize:30,
        color:"white"
    }
})