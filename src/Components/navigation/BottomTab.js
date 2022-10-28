import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import About from '../About';
import Home from '../Home';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions = { ({ route }) => ({
            tabBarStyle: { backgroundColor: '#EB5629' },
            tabBarActiveTintColor:'#fff',
            tabBarInactiveTintColor: '#fff',
            headerShown: false,
        })}>
            <Tab.Screen name='Home' component={Home} 
            // options={{
            //     tabBarLabel: 'Clock',
            //     tabBarIcon: ({ color, size }) => (
            //         <FontAwesome name='fa-clock-o ' color={color} size={size} />
            //     ),
            // }}
            />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
    )
}

export default BottomTab;