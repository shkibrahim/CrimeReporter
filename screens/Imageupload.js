// import { StyleSheet, Text, View ,StatusBar,SafeAreaView,TouchableOpacity} from 'react-native'
// import React,{useState}from 'react'
// import ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const Imageupload = () => {
//     const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [transferred, setTransferred] = useState(0);

//   const selectImage = () => {
//     const options = {
//       maxWidth: 2000,
//       maxHeight: 2000,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log(source);
//         setImage(source);
//       }
//     });
//   };

//   const uploadImage = async () => {
//     const { uri } = image;
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//     setUploading(true);
//     setTransferred(0);
//     const task = storage()
//       .ref(filename)
//       .putFile(uploadUri);
//     // set progress state
//     task.on('state_changed', snapshot => {
//       setTransferred(
//         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
//       );
//     });
//     try {
//       await task;
//     } catch (e) {
//       console.error(e);
//     }
//     setUploading(false);
//     Alert.alert(
//       'Photo uploaded!',
//       'Your photo has been uploaded to Firebase Cloud Storage!'
//     );
//     setImage(null);
//   };


//   return (
//     <SafeAreaView style={[styles.container,{flex:1,backgroundColor:'grey',margin:20,padding:40,justifyContent:'space-around'}]}>
//       <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
//         <Text style={styles.buttonText}>Pick an image</Text>
//       </TouchableOpacity>
//       <View style={styles.imageContainer}>
//         {image !== null ? (
//           <Image source={{ uri: image.uri }} style={styles.imageBox} />
//         ) : null}
//         {uploading ? (
//           <View style={styles.progressBarContainer}>
//             <Progress.Bar progress={transferred} width={300} />
//           </View>
//         ) : (
//           <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
//             <Text style={styles.buttonText}>Upload image</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </SafeAreaView>
      
//   )
// }

// export default Imageupload

// const styles = StyleSheet.create({})

import React, {useState} from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  CameraRoll,
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Imageupload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const launchCam=()=>{
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      saveToPhotos: true,
    };
    
    launchCamera(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log("launch success")
        setSelectedImage(response.assets[0].uri);
      }
    });
  }

  const handleGalleryPress = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image style={styles.image} source={{uri: selectedImage}} />
      )}

      <View style={{margin: 10, width: '90%'}}>
        <Button title="Take a photo" onPress={launchCam} />
      </View>
      <View style={{margin: 10, width: '90%'}}>
        <Button title="Choose from library" onPress={handleGalleryPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default Imageupload;