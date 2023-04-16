import React from 'react';
import {useEffect, useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import Modal from "react-native-modal";
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';
import PMn from './PM';

import Complaints from './Complaints';
const UserPanel = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [password, setpassword] = useState();
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);
  // const saveData=  async (name, cnic, password) => {
  //   const user={
  //     name:name,

  //     password:password
  //   }
  //    try {
  //      await AsyncStorage.setItem("userData", JSON.stringify(user));

  //      alert(user.name)
  //   } catch (error) {
  //     alert("Something went wrong", error);
  //   }

  // }
  // const [isModalVisible, setIsModalVisible] = React.useState(false);

  // useEffect(() => {
  //   const checkForSubscription = setTimeout(() => {
  //     setIsModalVisible(() => !isModalVisible);
  //   }, 1500);
  //   return () => clearTimeout(checkForSubscription);
  // }, []);

  // const handleSignUp = () => {
  //   // sign up the user and close the modal
  //   setIsModalVisible(() => !isModalVisible);
  // };

  // const handleDecline = () => setIsModalVisible(() => !isModalVisible);
  const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    function handleClose() {
        setModalVisible(false);
        setIsNavigated(false);
    }
  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400, }}>
        <View
          style={{
            height: 400,
            
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
 onPress={handlePress}
    >
       <Modal visible={modalVisible} onRequestClose={handleClose}>
                            <View >
                                <Text>Select image from</Text>

                                {/* <TouchableOpacity activeOpacity={0.5} onPress={Gallery}>
                                    <View >
                                        <MaterialIcons
                                            name="camera"
                                            size={40}
                                            color="#02AABD"
                                        />
                                        <Text>Gallery</Text>
                                    </View>
                                </TouchableOpacity> */}

                                {/* <TouchableOpacity activeOpacity={0.5} onPress={takePhoto}>
                                    <View >
                                        <MaterialIcons name="image" size={40} color="#02AABD" />
                                        <Text style={styles.inModText}>Take a Photo</Text>
                                    </View>
                                </TouchableOpacity> */}

                                <View>
                                    <TouchableOpacity onPress={handleClose}>
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            colors={['#02AABD', '#02AABD']}
                                         >
                                            <Text >Cancel</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
            
              <Image
                source={require('../images/menu.png')}
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
          <View>
            <TouchableOpacity     onPress={() => navigation.navigate('UserNotification')}>
              <Image
                source={require('../images/icon.png')}
                style={{
                  width: 40,
                  height: 47,
                  marginLeft: 320,
                
                  marginTop:-54,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#f1f8f6',
              borderRadius: 0,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            <View style={{marginLeft: 170, marginTop: -18}}>
              <View>
                <Image
                  source={require('../images/p.png')}
                  style={{
                    width: 400,
                    // borderRadius: 35,
                    height: 260,
                    marginLeft: -174,
                    paddingTop: 12,
                    marginTop: 12,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../images/logo1.png')}
                  style={{
                    width: 90,
                    borderRadius: 0,
                    height: 80,
                    marginLeft: -160,
                    paddingTop: 12,
                    marginTop: -249,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../images/text.png')}
                  style={{
                    width: 410,
                    borderRadius: 0,
                    height: 620,
                    marginLeft: -220,
                 
                    marginTop: -320,
                  }}
                />
              </View>
              {/* <View style={{marginTop: -160, marginLeft: -140}}>
                <Text
                  style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
                  Salam Ibrahim,
                </Text>
              </View> */}
              {/* <TextInput
                style={{
                  borderRadius: 100,
                  backgroundColor: 'white',
                  marginTop: 60,
                  marginLeft: -150,
                  width: 350,
color:'black',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={name}
                onChangeText={setname}
                placeholder="   Search"
                // secureTextEntry={true}
              /> */}
            </View>
          </View>
        
          <View style={{marginTop: -480, marginLeft: -280}}>
            {/* <Text style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
              Categories
            </Text> */}
          </View>
          
          <View style={{marginLeft: 300, marginTop:-18}}>
            {/* <TouchableOpacity>
              <Text style={{color: 'grey', fontSize: 12}}>View All</Text>
            </TouchableOpacity> */}
          </View>
          {/* <ScrollView style={{height:'100%',marginBottom:-650}}> */}
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 12}}>
            <View style={{flex: 1, marginLeft: 73}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#c0e4c9',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -29,
                  width: 175,
                  height: 200,

                  // paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('FIR')}>

                <Image
                  source={require('../images/fir1.png')}
                  style={{
                    borderRadius: 10,
                    width: 100,
                    height: 100,

                    marginTop: 28,
                  }}
                />
               <Text style={{color:'grey',fontSize:18,marginTop:27, marginLeft:-12}}>FIR</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft:62}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f9d7ab',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -10,
                  width: 175,
                  height: 200,

                  // paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('Complaints')}>
               <Image
                  source={require('../images/repfir.png')}
                  style={{
                    borderRadius: 20,
                    width: 100,
                    height: 100,

                    marginTop: 25,
                  }}
                />
                <Text style={{color:'grey',fontSize:18,marginTop:27}}>COMPLAINTS</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: -5}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f9d0d0',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 15,
                  width: 175,
                  height: 200,
                }}
                onPress={() => navigation.navigate('MP')}>
                <Image
                  source={require('../images/miss.png')}
                  style={{
                    borderRadius: 20,
                    width: 100,
                    height: 100,

                    marginTop: 25,
                  }}
                />
                <Text style={{color:'grey',fontSize:18,marginTop:27}}> MISSING PERSON</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 124}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#d9ebec',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -22,
                  width: 175,
                  height: 200,
                }}
                onPress={() => navigation.navigate('MV')}>
              <Image
                  source={require('../images/mca.png')}
                  style={{
                    borderRadius: 20,
                    width: 100,
                    height: 120,

                    marginTop: 20,
                  }}
                />
                <Text style={{color:'grey',fontSize:18,marginTop:12}}>MISSING VEHICLE</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:14,marginTop:8 }}>
            <TouchableOpacity>
              <Text style={{fontSize:20, marginLeft:10, fontWeight:'bold', color:'#494848', marginTop:9}}>Most  Wanted  Criminals</Text>
            </TouchableOpacity>
          </View> */}
         
          {/* </ScrollView> */}

          <View style={{width:430,height:60, marginTop:40, marginLeft:-8, borderRadius:17, backgroundColor:'#007711'}}>
         
          <View>
            <TouchableOpacity>
                <Image
                  source={require('../images/home.png')}
                  style={{
                    width:40,
                    borderRadius: 0,
                    height: 70,
                    marginLeft: 50,
                    paddingTop: 12,
                    marginTop: -9,
                  }}
                />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                <Image
                  source={require('../images/sea.png')}
                  style={{
                    width:40,
                    borderRadius: 0,
                    height: 70,
                    marginLeft: 120,
                    paddingTop: 12,
                    marginTop: -67,
                  }}
                />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                <Image
                  source={require('../images/settin.png')}
                  style={{
                    width:60,
                    borderRadius: 0,
                    height: 100,
                    marginLeft: 267,
                   
                    marginTop: -87,
                  }}
                />
                </TouchableOpacity>
              </View>
              {/* <View>
                <TouchableOpacity>
                <Image
                  source={require('../images/pro.png')}
                  style={{
                    width:40,
                    borderRadius: 0,
                    height: 50,
                    marginLeft: 347,
                   
                    marginTop: -77,
                  }}
                />
                </TouchableOpacity>
              </View> */}
            
          </View>
         
         
        </View>
       
      </View>
      <View style={{width:430,height:20,  backgroundColor: '#f1f8f6', marginTop:310, marginLeft:-8, borderRadius:17}}>
            </View>
            <View style={{backgroundColor:'#007711', width:56, height:55, borderRadius:40, marginLeft:170, marginTop:-30}}> 
            <TouchableOpacity style={{marginLeft:80}}><Image
                  source={require('../images/view.png')}
                  style={{
                    width:35,
                    borderRadius: 0,
                    height: 33,
                    marginLeft: -70,
                    paddingTop: 12,
                    marginTop: 10,
                  }}
                /></TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white', width:35, height:35, borderRadius:40, marginLeft:332, marginTop:-20}}> 
            <TouchableOpacity style={{marginLeft:80}} 
         onPress={() => navigation.navigate("PMA")}  ><Image
                  source={require('../images/pro.png')}
                  style={{
                    width:35,
                    borderRadius: 0,
                    height: 33,
                    marginLeft: -80,
                    paddingTop: 12,
                    marginTop: 0,
                  }}
                /></TouchableOpacity>
            </View>
    </Back3>
  );
};

export default UserPanel;
