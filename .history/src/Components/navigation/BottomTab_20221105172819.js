import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Calendar from '../Calendar';
import Icon from '@expo/vector-icons/Ionicons'
import Incidence from '../Incidence';
import Colors from '../..styles/Colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions = { ({ route }) => ({
            tabBarStyle: { backgroundColor: Colors.orangebg },
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.white,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
                switch ( route.name ) {
                    case 'Clock':
                        iconName = focused ? 'time' : 'time';
                        break;
                    case 'Home':
                        iconName = focused ? 'home' : 'home';
                        break;
                    case 'Calendar':
                        iconName = focused ? 'calendar' : 'calendar';
                        break;
                }
                return <Icon name={ iconName } size ={ size } color={ color }/>
            }
        })}>
            <Tab.Screen name='Clock' component={Incidence} />
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Calendar' component={Calendar} />
        </Tab.Navigator>
    )
}

export default BottomTab;