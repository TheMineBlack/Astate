import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './Navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Navigation />
=======
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
>>>>>>> e6eac06b3558460930859b20b2a614463be2cf4b
    </NavigationContainer>
  );
}
