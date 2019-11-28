import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FirstScreen from "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"
import CharRecScreen from "./screens/CharRecScreen"

const styles = StyleSheet.create(
{
   container:
   {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },

   text:
   {
      fontSize: 25,
      color: 'black'
   },

   buttonHolder:
   {
      paddingTop: 25
   },
});

const TabNavigator = createBottomTabNavigator({
     First: FirstScreen,
     CharRec: CharRecScreen,
     Second: SecondScreen },
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'First') {
            iconName = 'ios-stats';
          }
          else if (routeName === 'CharRec') {
            iconName = `ios-camera`;
          }
          else if (routeName === 'Second') {
            iconName = `ios-person`;
          }

          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
      },
  }
);

export default createAppContainer(TabNavigator);
