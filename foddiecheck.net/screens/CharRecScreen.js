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
      title: 'Character Recognition Screen'
   };

   render()
   {
      return(
         <View>
            <Text>
               Welcome to hell.
            </Text>

         </View>
      );
   }
}
export default FirstScreen;
