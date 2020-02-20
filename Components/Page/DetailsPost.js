import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'

class DetailsPost extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détails du post</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default DetailsPost
