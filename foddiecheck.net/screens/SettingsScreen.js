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
      title: 'Settings'
   };

   render()
   {
      return(
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source='robot-dev.png'/>
         </View>
      );
   }
}
export default FirstScreen;
