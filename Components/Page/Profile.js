import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'

class Profile extends React.Component {
  render(){
    return(
      <View style={styles.main_container}>
        <Text>Page du profil</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#000'
  }
})

export default Profile
