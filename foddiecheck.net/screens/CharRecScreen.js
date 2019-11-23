import React, { Component } from 'react';
import { Text, Alert, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import MediaLibrary from 'expo';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';



class CharRecScreen extends React.Component
{
   static navigationOptions =
      {
      title: 'Character Recognition Screenn'
   };

   gotoImgPrew = () =>
   {
     console.log('Going to new page');
      this.props.navigation.navigate('ImgPrew', {
          photo: this.state.photo, });
   }

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
           this.gotoImgPrew();
           console.log("DONE");
       });
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
           <View style={{ flex: 0.9 }}>
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
                   onPress={() => {this.setState({
                     type:
                       this.state.type === Camera.Constants.Type.back
                         ? Camera.Constants.Type.front
                         : Camera.Constants.Type.back,
                   });}}>
                   <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                 </TouchableOpacity>
               </View>
             </Camera>
           </View>
           <View  style={{ height: 1.0, flex: 0.1 }}>
              <Button onPress={()=>this.takePicture()} title = 'Take snapshot'/>
           </View>
         </View>
        );
     }
   }
 }


export default CharRecScreen;
