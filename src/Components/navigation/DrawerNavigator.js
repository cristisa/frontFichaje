import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ItemTable from '../Pages/ItemTable';
import DetailDay from '../Pages/DetailDay';
import { Login } from '../Pages/Login';
import FinFichaje from '../Pages/FinFichaje';
import Help from '../Pages/Help';
import Profile from '../Pages/Profile';
import Incidence from '../Pages/Incidence';
import BottomTab from './BottomTab';

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
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen
          name="Incidencia"
          component={BottomTab}
          />
          <Drawer.Screen name="Listado de empleados" component={ItemTable}/>
          <Drawer.Screen name="Detalle del día" component={DetailDay} />
          <Drawer.Screen name="Finalizar fichaje" component={FinFichaje}/>
          <Drawer.Screen name="Ayuda" component={Help} />
      </Drawer.Navigator>
  );
}
