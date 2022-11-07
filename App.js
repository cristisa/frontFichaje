import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/Components/navigation/DrawerNavigator';
// import { MainStackNavigator } from './src/Components/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
