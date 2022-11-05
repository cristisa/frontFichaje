import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './src/Components/navigation/BottomTab';
import ItemTable from './src/Components/ItemTable';
import Login from './src/Components/Pages/Login';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: '#EB5629'},
        headerStyle: {backgroundColor: '#EB5629'},
        headerTintColor: '#fff',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>
        <Drawer.Screen
          name="Login"
          component= { Login }/>
          <Drawer.Screen name="Incidencias" component={BottomTab} />
          <Drawer.Screen name="Item" component={ItemTable} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
