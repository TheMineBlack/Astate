<<<<<<< HEAD
import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FilActualite } from '../Components/Page/FilActualite';
import { DrawerContent } from '../Components/Element/DrawerContent';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Feed" component={FilActualite} />
    </Drawer.Navigator>
  );
};
=======
import { StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import FilActualite from '../Components/Page/FilActualite'
import DetailsPost from '../Components/Page/DetailsPost'
import React from 'react';

const Navigation=StackNavigator({
  Accueil: {
    screen: FilActualite,
  },
  DetailPost: {
    screen: DetailsPost,
  },
});

export default Navigation;
>>>>>>> e6eac06b3558460930859b20b2a614463be2cf4b
