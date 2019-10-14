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
      title: 'First Screen'
   };

   gotoSecondScreen = () =>
   {
      this.props.navigation.navigate('Second');
   }

    gotoCharRecScreen = () =>
    {
       this.props.navigation.navigate('CharRec');
    }

   render()
   {
      return(
         <View>
            <Text>
               First Screen.
            </Text>

            <View>
               <Button onPress = { this.gotoSecondScreen } title = 'Go To Second Screen'/>
            </View>
            <View>
               <Button onPress = { this.gotoCharRecScreen } title = 'Go To Character Recognition Screen'/>
            </View>
         </View>
      );
   }
}
export default FirstScreen;
