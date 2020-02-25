import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'

export function Profile(){
  return(
    <View style={styles.main_container}>
      <Text>Page du profil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#000'
  }
})
