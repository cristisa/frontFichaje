import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/Components/navigation/DrawerNavigator';
// import { MainStackNavigator } from './src/Components/navigation/StackNavigator';
import { UserContextProvider } from './src/Components/context/UserContext';

export default function App() {
  return (
  <UserContextProvider>
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  </UserContextProvider>  
  );
}
