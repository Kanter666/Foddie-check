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
      title: 'Second Screen'
   };

   render()
   {
      return(
         <View>
            <Text>
               Place for your magic.
            </Text>
         </View>
      );
   }
}
export default FirstScreen;
