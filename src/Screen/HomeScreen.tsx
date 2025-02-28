import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native'; // Import DrawerActions
import { Img } from '../Utils/Imagepath';

const HomeScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Button to open Drawer */}
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ marginBottom: 20 }}>
        <Image source={Img.Home} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
