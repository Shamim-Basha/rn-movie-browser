import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Shamim Basha</Text>
      <Text>My project2 - Movie browser for CS50's Mobile App Development with React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center'
  },
  name:{
    fontWeight:'bold',
    fontSize:22,
    marginTop:40
  }

})