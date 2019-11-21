import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

const LISTDATA = [
  {
    id: 'settings',
    title: 'User Settings',

  },
  {
    id: 'addproduct',
    title: 'Add Product',
  },

  {
    id: 'foodcheck',
    title: 'FoodCheck Inc.',
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


class FirstScreen extends React.Component
{
   static navigationOptions =
      {
      title: 'My Account'
   };

   render()
   {
      return(
         <View style={styles.container}>
           <View>
            <Image style={{ width: '60%', height: '60%', alignSelf: 'center' }} resizeMode='contain' source={'../images/robot-dev.png'}/>
           </View>
           <FlatList
              data={LISTDATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
         </View>
      );
   }
}

export default FirstScreen;
