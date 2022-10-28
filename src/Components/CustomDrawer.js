import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import Home from "./Home";
import About from "./About";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
    return (
      <View style={{flex:1, backgroundColor:"orange"}}>
        <Drawer.Navigator drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{flex:1, width:'65%', paddingRight:20, backgroundColor:"transparent"}}
        sceneContainerStyle={{backgroundColor:"transparent"}}
        initialRouteName="Home">
        <Drawer.Screen name="Home">
          {props => <Home {...props} />}
        </Drawer.Screen>
        </Drawer.Navigator>
      </View>
    )
  }

  export default CustomDrawer;