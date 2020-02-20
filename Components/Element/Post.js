import React from 'react'
import { StyleSheet, View, Text, Image, Button, Icon} from 'react-native'

class Post extends React.Component {
  render() {
    const post = this.props.post
    return (
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <View style={styles.header_profile}>
            <View style={styles.header_profile_photoC}>
              <Image style={styles.header_profile_photo}/>
            </View>
            <View style={styles.header_profile_name}>
              <Text style={[styles.setWhite90,styles.setBold,{fontSize: 16}]}>{post.pseudo}</Text>
            </View>
            <View style={styles.header_profile_id}>
              <Text style={[styles.setWhite60,{fontSize: 12}]}>@{post.username}</Text>
            </View>
        </View>

        <View style={styles.header_save}>
          <Image style={{height:20,width:20}} source={require('../../Images/saveIcon.png')}/>
        </View>

        </View>
          <View style={styles.content_container}>
          <Text style={[styles.setWhite90]}>{post.contenu}</Text>
        </View>
        <View style={styles.footer_container}>
          <View style={styles.footer_commentaires}>
            <Text style={[styles.setWhite54,{fontSize: 12}]}>C {post.nbCommentaires}</Text>
          </View>
          <View style={styles.footer_like}>
            <Text style={{color: 'green', fontSize: 12}}>+ {post.nbPlus}</Text>
          </View>
          <View style={styles.footer_dislike}>
            <Text style={{color: 'red', fontSize: 12}}>- {post.nbMoins}</Text>
          </View>
          <View style={styles.footer_plus}>
            <Text style={[styles.setWhite54,{fontSize: 12}]}>=</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {

  },
  header_container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#222222',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation:13,
    zIndex: 3
  },
  setWhite90:{
    color: '#E5E5E5'
  },
  setWhite77:{
    color: '#C4C4C4'
  },
  setWhite60:{
    color: '#999999'
  },
  setWhite54:{
    color: '#8A8A8A'
  },
  setBold:{
    fontWeight:'bold'
  },
  header_profile:{
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
    marginLeft: 3
  },
  header_profile_name: {
    marginLeft: 10,
    marginRight: 5
  },
  header_profile_id: {
    marginRight: 5
  },
  header_profile_photoC: {
    height: 35,
    width: 35,
    backgroundColor: '#c45919',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 5
  },
  header_save: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_container: {
    flex: 3,
    backgroundColor: '#272727',
    padding: 15,
    paddingTop: 20
  },
  content_container_image: {
  },
  footer_container: {
    padding:10,
    flexDirection: 'row',
    backgroundColor: '#272727',
    borderWidth: 1,
    borderTopColor: '#222222',
    borderBottomColor: '#272727',
    borderLeftColor: '#272727',
    borderRightColor: '#272727',
    zIndex:4
  },
  footer_commentaires: {
    flex:1,
  },
  footer_like: {
    flex:1,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  footer_dislike: {
    flex:1,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  footer_plus: {
    flex:0.5,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default Post
