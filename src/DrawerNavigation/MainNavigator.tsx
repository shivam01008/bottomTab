// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Image } from "react-native";
// import { Img } from "../Utils/Imagepath";

// // Screens
// import HomeScreen from "../Screen/HomeScreen";
// import Astrology from "../Screen/Astrology";
// import Account from "../Screen/Account";
// import Cart from "../Screen/Cart";

// // Create Navigators
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// // Bottom Tabs
// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconSource;
//           if (route.name === "Home") iconSource = Img.Home;
//           else if (route.name === "Astrology") iconSource = Img.Home;
//           else if (route.name === "Cart") iconSource = Img.Home;
//           else if (route.name === "Account") iconSource = Img.Home;

//           return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
//         },
//         tabBarActiveTintColor: "blue",
//         tabBarInactiveTintColor: "gray",
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Astrology" component={Astrology} />
//       <Tab.Screen name="Cart" component={Cart} />
//       <Tab.Screen name="Account" component={Account} />
//     </Tab.Navigator>
//   );
// };

// // Drawer Navigator (Wraps Bottom Tabs)
// const MainNavigator = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="HomeTabs" component={BottomTabs} />
//     <Drawer.Screen name="Account" component={Account} />
//   </Drawer.Navigator>
// );

// export default MainNavigator;
