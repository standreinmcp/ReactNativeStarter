import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import {LoginScreen} from '../screens/login';
import {HomeScreen} from '../screens/home';
import LoginFigma from '../screens/loginFigma/LoginFigma'
import RoomScreen from '../screens/Rooms/RoomScreen';
import AccountScreen from '../screens/account/AccountScreen'

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>

    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.accountScreen}>
        <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.loginFigma}
        component={LoginFigma}
      />
       <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.accountScreen}
        component={AccountScreen}
      />
        <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.roomScreen}
        component={RoomScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.loginScreen}
        component={LoginScreen}
      />
       <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.homeScreen}
        component={()=><HomeScreen text={'text'}/>}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
