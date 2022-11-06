import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import ItemTable from '../ItemTable';
import DetailDay from '../DetailDay';
import { Login } from '../Pages/Login';
import Color from '../../styles/Colors';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: '#EB5629'},
        headerStyle: {backgroundColor: '#EB5629'},
        headerTintColor: '#fff',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
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