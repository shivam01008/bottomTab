import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import OrdersScreen from '../Screen/OrdersScreen';
import SubscriptionScreen from '../Screen/SubscriptionScreen';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ fontSize: 18, padding: 10 }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
        <Text style={{ fontSize: 18, padding: 10 }}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Subscription Plans')}>
        <Text style={{ fontSize: 18, padding: 10 }}>Subscription Plans</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity onPress={() => navigation.replace('Registration')}>
        <Text style={{ fontSize: 18, padding: 10, color: 'red' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Orders" component={OrdersScreen} />
      <Drawer.Screen name="Subscription Plans" component={SubscriptionScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
// Got an inval