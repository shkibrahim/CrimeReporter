import React from 'react';
import { useState} from 'react';

import {
  View,
  Text,

  Pressable,

} from 'react-native';
import Back3 from './Back3';
import LinearGradient from 'react-native-linear-gradient';

import Modal from "react-native-modal";
import {Image} from 'react-native';

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
            <Pressable
 onPress ={()=> navigation.goBack()}
    >
    
            
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
            </Pressable>
          </View>
          <View style={{marginBottom: 19, marginTop: -35}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
          <View>
            <Pressable     onPress={() => navigation.navigate('UserNotification')}>
              <Image
                source={require('../images/icon.png')}
                style={{
                  width: 40,
                  height: 47,
                  marginLeft: 320,
                
                  marginTop:-54,
                }}
              />
            </Pressable>
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
            {/* <Pressable>
              <Text style={{color: 'grey', fontSize: 12}}>View All</Text>
            </Pressable> */}
          </View>
          {/* <ScrollView style={{height:'100%',marginBottom:-650}}> */}
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 12}}>
            <View style={{flex: 1, marginLeft: 73}}>
              <Pressable
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
              </Pressable>
            </View>
            <View style={{flex: 2, marginLeft:62}}>
              <Pressable
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
              </Pressable>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: -5}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <Pressable
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
              </Pressable>
            </View>
            <View style={{flex: 2, marginLeft: 124}}>
              <Pressable
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
              </Pressable>
            </View>
          </View>
          
          {/* <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:14,marginTop:8 }}>
            <Pressable>
              <Text style={{fontSize:20, marginLeft:10, fontWeight:'bold', color:'#494848', marginTop:9}}>Most  Wanted  Criminals</Text>
            </Pressable>
          </View> */}
         
          {/* </ScrollView> */}

          <View style={{width:430,height:60, marginTop:40, marginLeft:-8, borderRadius:17, backgroundColor:'#007711'}}>
         
          <View>
            <Pressable  disabled={true}>
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
                </Pressable>
              </View>
              <View>
                <Pressable  disabled={true}>
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
                </Pressable>
              </View>
              <View>
                <Pressable  disabled={true} >
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
                </Pressable>
              </View>
              {/* <View>
                <Pressable>
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
                </Pressable>
              </View> */}
            
          </View>
         
         
        </View>
       
      </View>
      <View style={{width:430,height:20,  backgroundColor: '#f1f8f6', marginTop:310, marginLeft:-8, borderRadius:17}}>
            </View>
            <View style={{backgroundColor:'#007711', width:56, height:55, borderRadius:40, marginLeft:170, marginTop:-30}}> 
            <Pressable style={{marginLeft:80}}    onPress={() => navigation.navigate('UserAnalytics')}><Image
                  source={require('../images/view.png')}
                  style={{
                    width:35,
                    borderRadius: 0,
                    height: 33,
                    marginLeft: -70,
                    paddingTop: 12,
                    marginTop: 10,
                  }}
                /></Pressable>
            </View>
            <View style={{backgroundColor:'white', width:35, height:35, borderRadius:40, marginLeft:332, marginTop:-20}}> 
            <Pressable style={{marginLeft:80}} 
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
                /></Pressable>
            </View>
    </Back3>
  );
};

export default UserPanel;
