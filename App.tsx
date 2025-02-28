import React from 'react';
import { View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/DrawerNavigation/AppNavigator';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000000' : '#F5F5F5' }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
``