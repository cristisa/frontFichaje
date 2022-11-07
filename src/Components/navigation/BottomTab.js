import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFichaje from '../Pages/HomeFichaje';
import Calendar from '../Pages/Calendar';
import Icon from '@expo/vector-icons/Ionicons'
import Incidence from '../Pages/Incidence';
import { Colors } from '../../styles/Colors'

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
                    case 'HomeFichaje':
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
            <Tab.Screen name='HomeFichaje' component={HomeFichaje} />
            <Tab.Screen name='Calendar' component={Calendar} />
        </Tab.Navigator>
    )
}

export default BottomTab;