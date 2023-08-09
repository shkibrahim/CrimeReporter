import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Back3 from './Back3';
import {darkGreen} from './constants';
import {Image} from 'react-native';

const FaceRecongnition = ({navigation}) => {
  const [name, setname] = useState('');
  const [cnic, setcnic] = useState('');
  const [longitude, setLongitude] = useState('Default');
  const [latitude, setLatitude] = useState('Default');
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);

  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [btnStat, seBtnStat] = React.useState(true);
  const [Data, setData1] = useState(false);



  // const img1 = {
  //   uri: 'https://www.koimoi.com/wp-content/new-galleries/2019/10/shah-rukh-khan-is-not-doing-the-remake-of-quentin-tarantinos-kill-bill-0001.jpg',
  // };

  // const img2 = {
  //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgHX3iVABrZl64nM6tblPLbLzFqaCBuIea7QSeLdLpl-q7fxVVLS7B6MH1i4oumztNqo&usqp=CAU',
  // };

  var FIR = firestore().collection('FIR');

  useEffect(() => {
    var Dataa = async () => {
      await FIR.get().then(data => {
        setData1(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
    };
    Dataa();
  }, []);

  const getimageUrls = () => {
    console.log('selected image url : ', selectedImage);
    // Data.forEach(element => {
    //   console.log(element.SuspectImage);
    // });

    console.log("link at 2  :",Data[2].SuspectImage);
    setSelectedImage(Data[2].SuspectImage)
  };

  const handleGalleryPress = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        console.log(response.assets,'--------------');
        setSelectedImage(response.assets[0].uri);
        // setSelectedImage1(response);
      }
    });
  };
  const handleGalleryPress1 = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        console.log(response.assets,'--------------');
        setSelectedImage1(response.assets[0].uri);
        // setSelectedImage1(response);
      }
    });
  };

  const matchImage = async () => {
    


    

    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "540871a081mshc1283a962e2a766p13723ajsn2dc4d8073011");
    myHeaders.append("X-RapidAPI-Host", "face-verification2.p.rapidapi.com");
    myHeaders.append("content-type", "multipart/form-data");
    
    var formdata = new FormData();

    formdata.append('Photo1', {
      uri: selectedImage,
      name: 'image.jpg',
      type: 'image/jpg'
    });
    
    formdata.append('Photo2', {
      uri: selectedImage,
      name: 'image.jpg',
      type: 'image/jpg'
    });
  
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://face-verification2.p.rapidapi.com/faceverification", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));






  };

  const launchCam = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('launch success');
        setSelectedImage(response.assets[0].uri);
        setSelectedImage1(response);
      }
    });
  };

  

  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400}}>
        <View
          style={{
            height: 400,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity onPress={() => handleGalleryPress()}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('FIR')}> */}
              <Image
                source={require('../images/arrow.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 19, marginTop: -35}}>
            <Text style={{color: 'white', fontSize: 29, fontWeight: 'bold'}}>
              FACE RECONGNITION
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            {/* <ScrollView style={{backgroundColor:'white',borderRadius:37, width:390, marginLeft:-18}}> */}
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View style={{flex: 1, marginLeft: 80}}>
                <TouchableOpacity
                  style={{
                    marginTop: 22,
                    alignItems: 'center',
                    borderRadius: 3,
                    marginLeft: -40,
                    width: 100,
                    // height: 30,

                    // paddingVertical: 5,
                  }}
                  onPress={() => handleGalleryPress1()}>
                  <Text
                    style={{
                      color: '#10942e',
                      marginTop: 0,
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    CASE INFORMATION
                  </Text>
                </TouchableOpacity>

                <Image
                  style={{
                    width: 200,
                    height: 400,
                  }}
                  source={img1}
                />

                <Image
                  style={{
                    width: 200,
                    height: 400,
                  }}
                  source={img2}
                />
                <View style={{width: 400, marginLeft: -79}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{color: '#10942e'}}>
                      -----------------------------------------------
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 2, marginLeft: 60}}>
                <TouchableOpacity
                  style={{
                    //  backgroundColor:'black',

                    marginTop: 22,
                    marginLeft: 20,
                    width: 300,
                    height: 30,
                    //  marginRight:50,

                    //  marginRight:140
                  }}
                  onPress={{}}>
                  <Text
                    style={{
                      color: 'grey',
                      marginTop: 0,
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    SUSPECT INFORMATION
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={{}}>
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
                EVIDENCES
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {selectedImage && (
                  <Image
                    style={{
                      width: 200,
                      height: 100,
                      resizeMode: 'contain',
                      marginBottom: 20,
                      marginLeft: -300,
                      marginTop: 10,
                    }}
                    source={{uri: selectedImage}}
                  />
                )}
              </View>
              <TouchableOpacity onPress={handleGalleryPress}>
                <View
                  style={{
                    borderRadius: 10,
                    color: darkGreen,
                    marginLeft: 12,
                    paddingHorizontal: 10,
                    width: 350,
                    height: 50,
                    borderColor: '#B7B7B7',
                    marginBottom: 30,
                    backgroundColor: '#eceded',
                    marginVertical: 10,
                  }}>
                  <Text style={{color: 'grey', marginTop: 12}}>
                    Upload Evidences
                  </Text>
                  <Image
                    source={require('../images/u.png')}
                    style={{
                      width: 28,
                      height: 22,
                      marginLeft: 295,
                      paddingTop: 12,
                      marginTop: -19,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{marginTop: -100}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',
                borderRadius: 10,
                width: 150,

                height: 50,
                alignItems: 'center',
                alignContent: 'center',
              }}
              onPress={() => {
                getimageUrls();
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Match
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',
                borderRadius: 10,
                width: 150,

                height: 50,
                alignItems: 'center',
                alignContent: 'center',
              }}
              onPress={() => {
                matchImage();
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Match image
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Back3>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#B7B7B7',
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: 'grey',
  },
  dropdownGender: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdowndistrict: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdowncity: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdownpolice: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: '#B7B7B7',
    height: 50,
  },
  modalview: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightblue',
  },
});
export default FaceRecongnition;

