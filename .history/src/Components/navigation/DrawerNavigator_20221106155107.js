import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import ItemTable from '../ItemTable';
import DetailDay from '../DetailDay';
import { Login } from '../Pages/Login';
import Color from '../../styles/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: Colors.orangebg},
        headerStyle: {backgroundColor: Colors.orangebg},
        headerTintColor: Colors.white,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.white,
        headerTitle: '',
      }}>
        <Drawer.Screen
          name="Login"
          component={Login}
          />
          <Drawer.Screen name="Incidencias" component={BottomTab} />
          <Drawer.Screen name="Detalle del día" component={DetailDay} />
          <Drawer.Screen name="Listado de empleados" component={ItemTable}/>
      </Drawer.Navigator>
  );
}