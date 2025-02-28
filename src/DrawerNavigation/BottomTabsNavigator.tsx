import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import OrdersScreen from '../Screen/OrdersScreen';
import Astrology from "../Screen/Astrology"

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Astrology" component={Astrology} />
      <Tab.Screen name="OrdersScreen" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
