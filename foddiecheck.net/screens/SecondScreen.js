import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';


/* -------- HARD CODED CONSTANTS FOR NOW -------- */  
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
    alignSelf: 'center'
  },
});
/*
const [selected, setSelected] = React.useState(new Map());
  
const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
);
*/

/* --------- FUNCTIONS --------- */

function Item({title}) {
   return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


/* -------- RENDERING OF SCREEN ----------- */

class FirstScreen extends React.Component
{
   static navigationOptions =
      {
      title: 'My Account'
   };

   render() {
      return(
         <View style={styles.container}>
            <Image source={require('./robot-dev.png')} style={{ width: '60%', height: '60%', alignSelf: 'center' }} resizeMode='contain' />
          

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 20}}>
              FoodCheck Username 
            </Text>
          </View>
 
          <FlatList
            data={LISTDATA}
            renderItem={({ item }) => <Item title={item.title}/> }
              keyExtractor={item => item.id}
            />
         </View>
      );
   }
}

export default FirstScreen;
