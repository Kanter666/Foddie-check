import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


class FirstScreen extends React.Component
{
   static navigationOptions =
      {
      title: 'My Achievements'
   };

   render()
   {
      return(
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
               First Screen.
            </Text>
         </View>
      );
   }
}
export default FirstScreen;
