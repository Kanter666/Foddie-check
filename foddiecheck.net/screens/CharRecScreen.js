import React, { Component } from 'react';
import { Text, Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


class FirstScreen extends React.Component
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

   async snapPhoto() {
    console.log('Button Pressed');
    if (this.camera) {
       console.log('Taking photo');
       const options = { quality: 1, base64: true, fixOrientation: true,
       exif: true};
       await this.camera.takePictureAsync(options).then(photo => {
          photo.exif.Orientation = 1;
           console.log(photo);
           });
     }
    }

   render() {
     const { hasCameraPermission } = this.state;
     if (hasCameraPermission === null) {
       return <View />;
     } else if (hasCameraPermission === false) {
       return <Text>No access to camera</Text>;
     } else {
       return (
         <View style={{ flex: 1 }}>
           <Camera style={{ flex: 1 }}
           ref={ (ref) => {this.camera = ref} }
           type={this.state.type}>
             <View
               style={{
                 flex: 1,
                 backgroundColor: 'transparent',
                 flexDirection: 'row',
               }}>
               <TouchableOpacity
                 style={{
                   flex: 0.1,
                   alignSelf: 'flex-end',
                   alignItems: 'center',
                 }}
                 onPress={this.snapPhoto.bind(this)

                 }>
                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {this.setState({
                 type:
                   this.state.type === Camera.Constants.Type.back
                     ? Camera.Constants.Type.front
                     : Camera.Constants.Type.back,
               });}}>
            </TouchableOpacity>
             </View>
           </Camera>
         </View>
       );
     }
   }
 }


export default FirstScreen;
