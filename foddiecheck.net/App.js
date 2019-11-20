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
   }
});

const TabNavigator = createBottomTabNavigator({
   First: FirstScreen,
   CharRec: CharRecScreen,
   Second: SecondScreen
});

export default createAppContainer(TabNavigator);
