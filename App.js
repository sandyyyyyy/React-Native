
import React, { Component, PropTypes } from 'react';
//import react in our code.

import {  AsyncStorage,
          Modal,
          Button,
          Text,
          View,
          TouchableOpacity,
          StyleSheet,
          TouchableHighlight } from 'react-native';
//import all the basic component we have used

import { Ionicons } from 'react-native-vector-icons';
import Onboarding from 'react-native-onboarding-screen';
//import Ionicons to show the icon for bottom options

//For React Navigation 2.+ import following
//import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

//For React Navigation 3.+ import following
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
//import createStackNavigator, createBottomTabNavigator, createAppContainer in our project

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import Welcome from './pages/Welcome';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    WelcomeMsg: { screen: Welcome}
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Map',
      //Header title
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'ToDo List',
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Map: { screen: HomeStack },
    ToDo: { screen: SettingsStack },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Map') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        }
        if (routeName === 'ToDo') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+

export default createAppContainer(App);
