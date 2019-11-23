import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstScreen from "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"
import CharRecScreen from "./screens/CharRecScreen"
import ImgPreviewScreen from "./screens/ImgPreviewScreen"

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


const AppNavigator = createStackNavigator({
   First: FirstScreen,
   Second: SecondScreen,
   CharRec: CharRecScreen,
   ImgPrew: ImgPreviewScreen
});

export default createAppContainer(AppNavigator);
