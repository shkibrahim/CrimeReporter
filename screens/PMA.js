import React  ,{useRef} from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {
  View,
  FlatList,
  Text,
  Touchable,ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';

import {Image} from 'react-native';
import {StorageKeys} from '../Data/StorageKeys';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const PMA = ({props, navigation}) => {

  const [name, setname] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [PersonImage, setPersonImage] = useState();
  const [Data, setData] = useState({});
  const [Cuse, setCuser] = useState('no User');
  const [isLoading, setIsLoading] = useState(false);
  const[inputEditable,setInputEditable]=useState(false);
  const[cancelColour,setCancelColour]=useState('#10942e');
  const[updateCancelbtn,setUpdateCancelbtn]=useState('Update');
  const[ShowSavebtn,setShowSavebtn]=useState(false);

  var PMA = firestore().collection('Users');

  useEffect(() => {
    var getdata = async () => {
      await PMA.where('cnic', '==', Cuse)
        .get()
        .then(data => {
          setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
    };
    getdata();
  }, [Cuse]);

  

  useEffect(() => {
    AsyncStorage.getItem(StorageKeys.CurrentUser)
      .then(data => {
        if (data != null) {
          const us = JSON.parse(data);
          console.log('user is now: ', us);
          setCuser(us.cnic);
        }
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if(Data.length >0){
    setcityValue(Data[0].cityValue);
    setdistrictValue(Data[0].districtValue);
    setname(Data[0].name);
    setcnic(Data[0].cnic);
    // if (Data[0].Pimage.length>2){
      setselectedImage(Data[0].Pimage)

    // }
  }
  }, [Data]);

  const [selectedImage, setselectedImage] = useState(null);

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
      }
    });
  };
  const [selectedImage1, setSelectedImage1] = useState(null);

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const FIR2= async () => {
    console.log('111111: ',selectedImage1.assets[0].fileName)
    console.log('111111: ',selectedImage)
    const reference = storage().ref(selectedImage1.assets[0].fileName);
    const pathToFile = selectedImage;

    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(selectedImage1.assets[0].fileName)
      .getDownloadURL();
    setSelectedImageUrl(url);

    console.log('111111: ',selectedImage1.assets[0].fileName)
    console.log('111111: ',selectedImage)
    console.log('111111: ',url)
  };

  const handleGalleryPress = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        setselectedImage(response.assets[0].uri);
        setSelectedImage1(response);
      }
    });
  };

  const SaveData=async()=>{
    setIsLoading(true);
    const reference = storage().ref(selectedImage1.assets[0].fileName);
  const pathToFile = selectedImage;

  await reference.putFile(pathToFile);

  const url = await storage()
    .ref(selectedImage1.assets[0].fileName)
    .getDownloadURL();
  setSelectedImageUrl(url);

    try {
      await firestore()
    .collection('Users')
    .where('cnic', '==', cnic)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
            documentSnapshot.ref.update({
              Pimage: url,
                name: name,
                districtValue: districtValue,
                cityValue: cityValue
            });
        });
    });
    alert('Update successful')
      console.log('Update successful');
      setShowSavebtn(false)
      setInputEditable(false)
      setUpdateCancelbtn('Update')
      setCancelColour('#10942e')
  } catch (error) {
      console.error('Error updating document:', error);
  }

  }

  const update1 = () => {

    if(updateCancelbtn==='Update'){
      setInputEditable(true)
      setUpdateCancelbtn('Cancel')
      setCancelColour('red')
      setShowSavebtn(true)
    
    }

    if(updateCancelbtn==='Cancel'){
      setUpdateCancelbtn('Update')
      setCancelColour('#10942e')
      setInputEditable(false)
      setShowSavebtn(false)
      setcityValue(Data[0].cityValue);
    setdistrictValue(Data[0].districtValue);
    setname(Data[0].name);
    setcnic(Data[0].cnic);
   
    console.log(Data[0].Pimage)
    }

    
   
    
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
            <TouchableOpacity onPress={() => navigation.navigate('UserPanel')}>
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
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
          {/* <View>
            <TouchableOpacity>
              <Image
                source={require('../images/loout.png')}
                style={{
                  width: 30,
                  height: 27,
                  marginLeft: 320,

                  marginTop: -44,
                }}
              />
            </TouchableOpacity>
          </View> */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            <View
              style={{
                marginBottom: 0,
                marginTop: 15,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 19, fontWeight: 'bold'}}>
                PROFILE MANAGEMENT
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: 0,
                  width: 90,
                  height: 87,
                  backgroundColor: 'black',
                  borderRadius: 55,
                  marginTop: 12,
                }}>
                <Image
                  style={{
                    width: 90,
                    borderRadius: 55,
                    height: 87,
                    resizeMode:'cover',
                    // marginBottom: 20,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                  source={{uri: selectedImage}}
                />
                <View style={{marginTop: -50, marginLeft: 49}}>
                  <TouchableOpacity  disabled= {!inputEditable} onPress={handleGalleryPress}>
                    <Image
                      source={require('../images/load.png')}
                      style={{
                        width: 70,
                        height: 70,

                     
                        marginTop: 18,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{}}>
              <View style={{width: 370, marginRight: 19, height: 640}}>
                <View
                  style={{
                    //   backgroundColor: 'white',
                    borderColor: 'red',
                    marginBottom: 10,
                    //   borderRadius: 19,
                    margin: 10,

                    width: 370,
                    height: 530,
                  }}>
                  <ScrollView>
                    <Text
                      style={{
                        color: '#10942e',
                        marginBottom: -5,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        fontSize: 14,
                        // name: 'cnic',
                      }}>
                      NAME:
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#eceded',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        marginVertical: 10,
                      }}>
                      <TextInput
                        
                        editable={inputEditable}
                        style={{
                          color: 'darkgreen',
                          fontSize: 14,
                          name: 'cnic',
                        }}
                        placeholderTextColor="grey"
                        value={name}
                        // keyboardType="Numeric"
                        onChangeText={name => {
                          setname(name);
                        }}
                        // placeholder=""
                        // secureTextEntry={true}
                      />
                    </View>
                    <Text
                      style={{
                        color: '#10942e',
                        fontWeight: 'bold',
                        marginLeft: 10,
                        fontSize: 14,
                        marginBottom: -5,
                      }}>
                      CNIC:
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#eceded',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        marginVertical: 10,
                      }}>
                      <Text
                        style={{
                          color: 'grey',
                          marginTop: 10,
                          marginBottom: 10,
                          fontSize: 14,
                          name: 'cnic',
                        }}>
                        {cnic}
                      </Text>
                    </View>

                    <Text
                      style={{
                        color: '#10942e',
                        fontWeight: 'bold',
                        marginLeft: 10,
                        marginBottom: -5,
                        fontSize: 14,
                      }}>
                      DISTRICT:
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#eceded',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        marginVertical: 10,
                      }}>
                      <TextInput
                        editable={inputEditable}
                        style={{
                          color: 'darkgreen',
                          fontSize: 14,
                          name: 'cnic',
                        }}
                        placeholderTextColor="grey"
                        value={districtValue}
                        // keyboardType="Numeric"
                        onChangeText={setdistrictValue}
                        // placeholder=""
                        // secureTextEntry={true}
                      />
                    </View>
                    <Text
                      style={{
                        color: '#10942e',
                        fontWeight: 'bold',
                        marginLeft: 10,
                        fontSize: 14,
                        marginBottom: -5,
                      }}>
                      CITY:
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#eceded',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        marginVertical: 10,
                      }}>
                      <TextInput
                        editable={inputEditable}
                        style={{
                          color: 'darkgreen',
                          fontSize: 14,
                          name: 'cnic',
                        }}
                        placeholderTextColor="grey"
                        value={cityValue}
                        // keyboardType="Numeric"
                        onChangeText={setcityValue}
                        // placeholder=""
                        // secureTextEntry={true}
                      />
                    </View>
                  </ScrollView>
               

                  <TouchableOpacity
                    style={{
                      backgroundColor: cancelColour,
                      borderRadius: 10,
                      width: 80,
                      height: 35,
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      update1();
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        marginTop: 6,
                      }}>
                      {updateCancelbtn}
                    </Text>

                  </TouchableOpacity>
                    
                  {ShowSavebtn ?
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#10942e',
                      borderRadius: 10,
                      marginTop:10,
                      width: 80,
                      height: 35,
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      SaveData();
                    }}>
                         {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        marginTop: 6,
                      }}>
                      Save
                    </Text>
  )}
                  </TouchableOpacity>
                  :null  
                }



                  <View style={{marginBottom: -5}}></View>
                </View>
               
              </View>
            </View>
          </View>
        </View>
      </View>
    </Back3>
  );
};

export default PMA;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'lightblue',
  },
  title: {
    margin: 10,
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  body: {},
  manageTask: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  inputView: {
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: 'black',
    maxWidth: 170,
  },
  icon: {},
  btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 40,
    marginTop: 45,
    marginRight: 12,
    labelcolor: 'white',
  },
  taskItem: {
    color: 'black',
    marginVertical: 8,
    padding: 5,
    fontSize: 17,
    maxWidth: 230,
  },
  listItem: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  count: {
    color: 'white',
    backgroundColor: 'lightblue',
    margin: 8,
    padding: 3,
    fontSize: 17,
    height: 30,
  },
  btnDelete: {
    marginRight: -15,
    marginTop: 5,
  },
});
