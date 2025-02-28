import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from '../Screen/Registration';

import DrawerNavigator from './Drawernavigation';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DRAWER" component={DrawerNavigator} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
