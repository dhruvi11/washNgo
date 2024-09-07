import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// Library ======================================================================================
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens ======================================================================================
import SplashScreen from '../screens/SplashScreen';
import LetsStartScreen from '../screens/LetsStartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'SplashScreen'}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'LetsStartScreen'}
        component={LetsStartScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'SignInScreen'}
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'SignUpScreen'}
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'WelcomeScreen'}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
