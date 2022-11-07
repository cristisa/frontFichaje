import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import ItemTable from '../Pages/ItemTable';
import DetailDay from '../Pages/DetailDay';
import { Login } from '../Pages/Login';
import FinFichaje from '../Pages/FinFichaje';
import Help from '../Pages/Help';
import Profile from '../Pages/Profile';

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
        <Drawer.Screen name="Perfil" component={Profile}/>
        <Drawer.Screen
          name="Incidencias"
          component={BottomTab}
          />
          <Drawer.Screen name="Listado de empleados" component={ItemTable}/>
          <Drawer.Screen name="Detalle del día" component={DetailDay} />
          <Drawer.Screen name="Finalizar fichaje" component={FinFichaje}/>
          <Drawer.Screen name="Ayuda" component={Help} />
      </Drawer.Navigator>
  );
}
