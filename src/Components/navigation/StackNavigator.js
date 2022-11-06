import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Prueba from "../Pages/Prueba";
import Home from "../Pages/Home";
import DrawerNavigation from "./DrawerNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Prueba" component={Prueba} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };