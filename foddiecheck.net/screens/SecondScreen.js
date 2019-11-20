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
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text >
               Place for your magic.
            </Text>
         </View>
      );
   }
}
export default FirstScreen;
