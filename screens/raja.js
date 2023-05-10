import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    ToastAndroid,
    ScrollView,
    Image,
    Pressable
  } from 'react-native';
  import { useState,useEffect } from 'react';
  import NavigationBar from './NavigationBar';
  import firestore from '@react-native-firebase/firestore';
  import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
  
  //voice-To-text
  //------------
  import Voice from '@react-native-community/voice';
  //------------
  
  export default function App({ navigation }) {
  
    const [recognizedText, setRecognizedText] = useState('');
    const [stop, setStop] = useState(true);
  
    const startRecognition = async () => {
      try {
        await Voice.start('en-US');
        console.log('Speech recognition started');
        setStop(false);
      } catch (e) {
        console.error(e);
      }
    };
  
    const stopRecognition = async () => {
      try {
        await Voice.stop();
        console.log('Speech recognition stopped');
        setStop(true);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
      Voice.onSpeechResults = (event) => {
        const recognizedWords = event.value;
        setRecognizedText(recognizedWords[0]);
      };
  
      return () => {
        Voice.destroy().then(Voice.removeAllListeners);
      };
    }, []);
  
    
    // const toastMSG = () => {
    //   ToastAndroid.show('Account Registered', ToastAndroid.SHORT);
    // };
  
    //voice-To-text
  
  
  
  
    
  
    //-----------
  
    const newsCollection = firestore().collection('News');
  
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [comments, setComments] = useState('');
    
  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
  
  
    const uploadtofbStorage=async()=>{
  
      const reference = storage().ref(selectedImage.assets[0].fileName);
      const pathToFile = selectedImage.assets[0].uri;
      await reference.putFile(pathToFile);
  
      const url = await storage().ref(selectedImage.assets[0].fileName).getDownloadURL();
      setSelectedImageUrl(url);
  }
  
    const launchCam = () => {
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
  
    const handleNewsUpload = async () => {
      var daty = new Date();
      var todayDate =
        daty.getMonth() + '-' + daty.getDate() + '-' + daty.getFullYear();
      await newsCollection
        .add({
          category: category,
          title: title,
          desc: desc,
          comments: comments,
          dateCreated: todayDate,
          imageurl:selectedImageUrl,
        })
        .then(() => {
          alert('News Uploaded successfully');
          setCategory('');
          setTitle('');
          setDesc('');
          setComments('');
          navigation.navigate('Home');
        });
    };
  
    return (
      <View style={styles.loginMain}>
        <ScrollView>
          <Text style={styles.title}>Create News</Text>
  
          {/* <View style={styles.image}>
              <Text style={{color: 'darkgreen',}}>IMAGE</Text>
          </View> */}
  
          <View style={styles.inputView}>
            <TextInput
              onChangeText={value => setCategory(value)}
              placeholder="Category"
              placeholderTextColor={'darkgreen'}
              value={category}
              style={[
                styles.inputField,
                { height: 55, borderRadius: 50 },
              ]}></TextInput>
            <TextInput
              onChangeText={value => setTitle(value)}
              placeholder="Title"
              placeholderTextColor={'darkgreen'}
              value={title}
              style={[
                styles.inputField,
                { height: 55, borderRadius: 50 },
              ]}></TextInput>
            <TextInput
              onChangeText={value => setDesc(value)}
              placeholder="Description"
              placeholderTextColor={'darkgreen'}
              value={desc}
              style={[
                styles.inputField,
                { height: 140, borderRadius: 20 },
              ]}></TextInput>
            <TextInput
              onChangeText={value => setComments(value)}
              placeholder="Tags"
              placeholderTextColor={'darkgreen'}
              value={comments}
              style={[
                styles.inputField,
                { height: 90, borderRadius: 20 },
              ]}></TextInput>
          </View>
  
          <View style={styles.buttonView}>
  
          <Text style={{color:'black'}}>text out: {recognizedText}</Text>
            {/* Voice-to-text */}
  
            {stop ? (
              <View >
              <Pressable
                onPress={startRecognition}
                style={{
                  marginHorizontal: 160,
                  marginVertical: 10,
                  backgroundColor: 'green',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}>
                <Image
                  style={{ width: 20, height: 30, margin: 4, marginLeft: 10 }}
                  source={require('../Images/mic.png')}
                />
              </Pressable>
              <Pressable
              onPress={()=>{setRecognizedText()}}
              style={{
                marginHorizontal: 160,
                marginVertical: 10,
                backgroundColor: 'green',
                width: 40,
                height: 40,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  margin: 4,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                source={require('../Images/cancel.png')}
              />
            </Pressable>
            </View>
            ) : (
              <Pressable
                onPress={stopRecognition}
                style={{
                  marginHorizontal: 160,
                  marginVertical: 10,
                  backgroundColor: 'green',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    margin: 4,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                  source={require('../Images/stop.png')}
                />
              </Pressable>
              
            
            )}
  
            <TouchableOpacity style={styles.uploadBTN} onPress={()=>{handleGalleryPress()}} >
              <Text
                style={{
                  color: '#4CBB17',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Upload Image
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={launchCam}
              style={{
                marginHorizontal: 155,
                marginVertical: 10,
                backgroundColor: 'green',
                width: 50,
                height: 50,
                borderRadius:60,
              }}>
              <Image
                style={{ width: 40, height: 30, marginVertical: 8, marginHorizontal: 5}}
                source={require('../Images/camera.png')}
              />
            </TouchableOpacity>
  
            <TouchableOpacity
              style={[styles.buttons,{marginBottom:70}]}
              onPress={handleNewsUpload}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                Submit
              </Text>
            </TouchableOpacity>
            {selectedImage && (
              <Image style={styles.image} source={{ uri: selectedImage }} />
            )}
          </View>
        </ScrollView>
  
        <NavigationBar />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    loginMain: {
      backgroundColor: 'white',
    },
  
    title: {
      fontSize: 23,
      paddingLeft: 25,
      marginTop: 25,
      fontWeight: 'bold',
      color: 'black',
    },
  
    inputView: {
      marginTop: 20,
    },
  
    inputField: {
      borderWidth: 0,
      padding: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 50,
      marginTop: 10,
      textAlign: 'center',
      borderColor: 'lightgreen',
      backgroundColor: '#E4FAE4',
      opacity: 0.7,
      color: 'black',
    },
  
    buttonView: {
      marginTop: 20,
    },
  
    uploadBTN: {
      backgroundColor: 'transparent',
      paddingTop: 19,
      paddingBottom: 19,
      borderRadius: 100,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 80,
      marginRight: 20,
      width: 200,
      color: 'black',
      borderWidth: 1,
      borderColor: '#4CBB17',
    },
  
    buttons: {
      shadowColor: 'black',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
  
      backgroundColor: '#4CBB17',
      paddingTop: 19,
      paddingBottom: 19,
      borderRadius: 100,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 80,
      marginRight: 20,
      width: 200,
    },
  
    image: {
      height: 200,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 25,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#4CBB17',
      borderWidth: 0.5,
    },
    resultBox: {
      color: 'black',
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginBottom: 10,
      marginHorizontal:30
    },
    
  });