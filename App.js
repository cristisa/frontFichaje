import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './src/components/navigation/BottomTab';
import ItemTable from './src/components/ItemTable';

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
          name="Incidencias"
          component={BottomTab}/>
          <Drawer.Screen name="Item" component={ItemTable} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
