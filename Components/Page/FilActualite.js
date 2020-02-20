import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import posts from '../../Helpers/postData'
import Post from '../Element/Post';

class FilActualite extends React.Component {

  render(){
    return(
      <View style={styles.main_container}>
        <FlatList
          data={postData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Post post={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: '#121212',
  },
  textinput: {
    marginLeft:5,
    marginRight: 5,
    height: 50,
    borderColor:'#000000',
    borderWidth: 1,
    paddingLeft:5
  }
})

export default FilActualite
