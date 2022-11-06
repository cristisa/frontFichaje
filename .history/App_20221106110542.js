import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './src/Components/navigation/BottomTab';
import ItemTable from './src/Components/ItemTable';
import Login from './src/Components/Pages/Login';
import { Colors } from './src/styles/Colors';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: Colors.orangebg},
        headerStyle: {backgroundColor: Colors.orangebg},
        headerTintColor: Colors.white,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.white,
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
