import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const TomatoScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato Screen</Text>
      <Button title="Gold Screen" onPress={()=>navigation.navigate("GoldScreen")} />
    </View>
  )
}

export default TomatoScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"tomato",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    text:{
        fontSize:30,
        color:"white"
    }
})