import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class DisplayAnImage extends Component {
  constructor(props) {
      super(props);
      this.state= {
          photo: props.navigation.state.params.photo
      };
      console.log("Finished constructor");

  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{flex: 1}}
          source={{uri: this.state.photo.uri}}
        />
      </View>
    );
  }
}
