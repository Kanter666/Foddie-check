import React, { Component } from 'react';
import { Text, Alert, StyleSheet, TouchableOpacity, View, TouchableHighlight,
  Button , Dimensions, Image } from 'react-native';
import MediaLibrary from 'expo';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  retake: {
    position: 'absolute',
    left: 30,
    bottom: 30,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
  },
  rank: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
  }
});

class CharRecScreen extends React.Component
{
   static navigationOptions =
      {
      title: 'FoodCheck'
   };

   state = {
     hasCameraPermission: null,
     type: Camera.Constants.Type.back,
   };

   async componentDidMount() {
     const { status } = await Permissions.askAsync(Permissions.CAMERA);
     this.setState({ hasCameraPermission: status === 'granted' });
   }


   async takePicture() {
       this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
           this.setState({
               photo: data
           });
           console.log('Taked photo');
       });
   }

   renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        flashMode={Camera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={()=>this.takePicture()}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (
      <View>
        <Image
          source={{ uri: this.state.photo.uri }}
          style={styles.preview}
        />
        <Text
          style={styles.retake}
          onPress={() => this.setState({ photo: null })}
        >Retake
        </Text>
        <Text
          style={styles.rank}
          onPress={() => this.props.navigation.navigate('First')}
        >Use
        </Text>
      </View>
    );
  }


   render() {
     const { hasCameraPermission } = this.state;
     if (hasCameraPermission === null) {
       return <View />;
     } else if (hasCameraPermission === false) {
       return <Text>No access to camera</Text>;
     } else {
    return (
      <View style={styles.container}>
        {this.state.photo ? this.renderImage() : this.renderCamera()}
      </View>
    );
     }
   }
 }


export default CharRecScreen;
