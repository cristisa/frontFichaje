import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/components/navigation/DrawerNavigator';
import { Image } from 'react-native';
// import { MainStackNavigator } from './src/components/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
