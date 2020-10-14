import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import {LoginScreen} from '../screens/login';
import {HomeScreen} from '../screens/home';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.homeScreen}>
      <Stack.Screen
        name={roots.loginScreen}
        component={LoginScreen}
      />
       <Stack.Screen
        name={roots.homeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
