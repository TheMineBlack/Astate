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
