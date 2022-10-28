import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="About" component={About}/>
        <Drawer.Screen name="Contact" component={Contact}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});