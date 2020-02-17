import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import posts from '../Helpers/postData'
import PostTemplate from './PostTemplate'

class FilActualite extends React.Component {
  render(){
    console.log(postData);
    return(
      <View style={styles.main_container}>
        <View style={{height:95, backgroundColor:'#272727',justifyContent:'center',alignItems:'center',paddingTop:35}}>
          <Text style={{color:'#FFFFFF',fontWeight: 'bold',fontSize:24}}>Astate</Text>
        </View>
        <FlatList
          data={postData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <PostTemplate post={item}/>}
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
