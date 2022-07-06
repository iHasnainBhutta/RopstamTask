import React, { Component } from "react";
import { NavigationContainer as Container } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/authScreens/Login";
import Home from "../screens/appScreens/Home";

const Stack = createStackNavigator();

const NavigationContainer = (props) => {
  return (
    <Container initialRouteName="Login">
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </Container>
  );
};

export default NavigationContainer;
