import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
    </View>
  )
}

export default GoldScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"gold",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    text:{
        fontSize:30,
        color:"white"
    }
})