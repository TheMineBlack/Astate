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
