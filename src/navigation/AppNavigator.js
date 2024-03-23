import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import MenuItemList from "../screens/MenuItemList";
import CategoryDetail from "../screens/CategoryDetail";
import MenuItemDetail from "../screens/MenuItemDetail";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MenuItemList" component={MenuItemList} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
        <Stack.Screen name="MenuItemDetail" component={MenuItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
