import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import OrdersScreen from '../Screen/OrdersScreen';
import SubscriptionScreen from '../Screen/SubscriptionScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='BOTTOM' screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="BOTTOM" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
