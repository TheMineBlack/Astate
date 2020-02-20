import 'react-native-gesture-handler';
import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FilActualite from './Components/Page/FilActualite';
import Profile from './Components/Page/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={FilActualite}
          headerMode="screen"
          options={{
            headerRight: ({navigation}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.header_profile_photoC}/>
              </TouchableOpacity>
            ),
            title: "Accueil",
            headerStyle:{
              backgroundColor: "#272727"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Mon profil"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header_profile_photoC: {
    height: 35,
    width: 35,
    backgroundColor: '#c45919',
    borderWidth: 1,
    borderRadius: 10
  }
})
