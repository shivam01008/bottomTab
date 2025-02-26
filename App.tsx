import React from 'react';
import { View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './src/BottomTabsNavigator';
import RegistrationScreen from './src/Screen/Registration';

const Stack = createNativeStackNavigator(); // ✅ Define Stack

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000000' : '#F5F5F5' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="HomeTabs" component={BottomTabsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
