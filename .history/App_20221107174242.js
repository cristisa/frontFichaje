import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/Components/navigation/DrawerNavigator';
import {UserContext} from 'context/UserContext'; 
// import { MainStackNavigator } from './src/Components/navigation/StackNavigator';

export default function App() {
  return (
  <UserContext> 
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  </UserContext> 
  );
}
