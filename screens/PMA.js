import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import { Button } from 'react-native-paper';
import {
  View,
  FlatList,
  
  Text,
  Touchable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const PMA = ({props, navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [Data, setData] = useState([]);

  var PMA = firestore().collection('Users');

  useEffect(() => {
    var Dataa = async () => {
      await PMA.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        // console.log(data);
      });
    };
    Dataa();
  });
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
  }
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
                    resizeMode: 'contain',
                    // marginBottom: 20,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                  source={{uri: selectedImage}}
                />
                <View style={{marginTop: -50, marginLeft: 49}}>
                  <TouchableOpacity onPress={handleGalleryPress}>
                    <Image
                      source={require('../images/up.png')}
                      style={{
                        width: 40,
                        height: 40,

                        alignContent: 'center',
                        marginTop: 18,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{}}>
              <FlatList
                style={{width: '100%'}}
                data={Data}
                horizontal={true}
                // Horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                      //  <FlatList
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
                            {/* <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 180,
                            fontSize: 18,
                            alignItems:'center',
                            name: 'cnic',
                          }}>
                          {index + 1}
                        </Text> */}
                            {/* <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                          }}>
                          ID: 
                        </Text> */}
                            {/* <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            name: 'cnic',
                          }}>
                          {1+ 2+ Math.Random}
                        </Text>
                        </View> */}
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
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.name}
                              </Text>
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
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                  name: 'cnic',
                                }}>
                                {item.cnic}
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
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.districtValue}
                              </Text>
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
                              <Text
                                style={{
                                  color: 'grey',
                                  // fontWeight: 'bold',
                                  // marginLeft: 10,
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontSize: 14,
                                }}>
                                {item.cityValue}
                              </Text>
                            </View>
                          </ScrollView>
                          <TouchableOpacity
                        onPress={() => { handlebtn() }}
                       
                        style={styles.btn}
                    ><Text> Upload </Text>
                    </TouchableOpacity>
                          <View style={{marginBottom: -5}}></View>

                          
                        </View>
                        {/* <View style={{ flexDirection:'row'}} > */}
                        {/* <TouchableOpacity style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 10,
              marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'

            }}><Text>Status:{item.Status}</Text></TouchableOpacity>
                        <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 200,
              marginTop:-50,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'

            }}
            onPress={() => navigation.navigate('Track',{trackstat:item.Status})}>
            <Text style={{ color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
             TRACK
            </Text>
          </TouchableOpacity> */}
                      </View>
                    );
                  }
                }}
              />
             
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
  body: {

  },
  manageTask: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10

  },
  inputView: {
      borderColor: 'black',
      borderWidth: 1,
      width: '60%',
      borderRadius: 10,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  input: {
      color: 'black',
      maxWidth:170
  },
  icon: {

  },
  btn: {
      backgroundColor: 'black',
      borderRadius: 20,
      height: 40,
      marginTop: 45,
      marginRight: 12,
      labelcolor:'white'
  },
  taskItem: {
      color: 'black',
      marginVertical: 8,
      padding: 5,
      fontSize: 17,
      maxWidth:230,
  },
  listItem: {
      flexDirection: 'row',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 5,
      marginHorizontal: 18,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  count: {
      color: 'white',
      backgroundColor: 'lightblue',
      margin: 8,
      padding:3,
      fontSize: 17,
      height:30,
  },
  btnDelete: {
      marginRight: -15,
      marginTop: 5
  }
})