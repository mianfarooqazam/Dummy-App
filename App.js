import React from 'react';
// navigator
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import screens
import HomeScreen from "./screens/Home"
import GalleryScreen from "./screens/Gallery"
// drawer navigation
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Gallery" component={GalleryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}