import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigator";
import { Login } from "../Pages/Login";
import Incidence from "../Incidence";
import { HomeFichaje } from "../Pages/HomeFichaje";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeFichaje" component={HomeFichaje} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };