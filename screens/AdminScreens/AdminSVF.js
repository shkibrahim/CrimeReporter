import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Linking} from 'react-native';
import {useForm, Controller} from 'react-hook-form'
import Geolocation from '@react-native-community/geolocation';
import {
  View,
  FlatList,
  Button, StyleSheet,
  Text,TouchableOpacity,
  Touchable,
 Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DropDownPicker from 'react-native-dropdown-picker';
import { List } from 'react-native-paper';


const AdminSVF = ({routes, navigation}) => {
  
  const [Data, setData] = useState([]);

  const [trackOpen, settrackOpen] = useState();
  const [trackValue, settrackValue] = useState();
  const [track, settrack] = useState([
    { label: "Accepted", value: "Accepted" },
   
    { label: "Sent to Investigation Team", value: "Sent to Investigation Team" },
   
    { label: "Case Proceeding Started", value: "Case Proceeding Started" },
    { label: "Case Closed", value: "Case Closed" },
  ]);
  const {  control } = useForm();
  const [relation, setrelation] = useState();
  const [SuspectDescription, setSuspectDescription] = useState();
  var Team = firestore().collection('FIR');

  useEffect(() => {
    var Dataa = async () => {
      await Team.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
       
      });
    };
    Dataa();
  });
  var SearchCNIC = async () => {
    if(Token== null){
      alert ('Fill the blank')
    }
    else{
            await  Team
              .where('FIRTOKEN', '==',Token) 
              .get() 
              .then(data => { 
                setList(data.docs.map(doc => ({...doc.data(), id: doc.id}))); 
              });
          }
          if(Token!= null){
                  await  Team
                    .where('FIRTOKEN', '!=',Token) 
            alert('No Person Found')
                    .get() 
                    .then(data => { 
                      setList(data.docs.map(doc => ({...doc.data(), id: doc.id}))); 
                    });
                }
       
            
  }
// 222222222222222222222W 1`````````````````````````````````````````SSSSSSSS` useEffect(() => {
//     var Dataa = async () => {
//       await FIR.get().then(data => {
//         setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
       
//       });
//     };
//     Dataa();
//   });
 
//   var SearchCNIC = async () => {
//     // alert('gell')
//     console.log("ellffffffffffffffffff" , Token)
//     if(Token=== ''){
//       alert ('Fill the CNIC')
//       return 0;
//     }
//     else{
//             await  FIR
//               .where('FIRTOKEN', '==',Token) 
//     //   console.log(FIRTOKEN)
//               .get() 
//               .then(data => { 
//                 setData(data.docs.map(doc => ({...doc.data(), id: doc.id}))); 
//                 console.log("ddddddddddddddddddddddd " , data.docs)
//               });
//           }
        //   if(Token!= null){
        //           await  FIR
        //             .where('FIRTOKEN', '!=',Token) 
        //             .get() 
        //             .then(data => { 
        //               setData(data.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        //             });
        //    alert('No FIR Found')
        //         }
       
  
//   const deny=async (item)=>{
//     await firestore()
//     .collection('FIR')
//     .doc(item.id)
//     .update({
//       Status: "Declined",
      
//     });
//     alert("Report Declined")
// }

const [Token, setToken] = useState('');
const currentDate = new Date(); // create a new Date object with current date and time
const year = currentDate.getFullYear(); // get the current year (YYYY)
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // get the current month (MM) and add leading zero if necessary
const day = currentDate.getDate().toString().padStart(2, '0'); // get the current day (DD) and add leading zero if necessary
const formattedDate = `${year}-${month}-${day}`; // combine the year, month, and day in the desired format

const [selectedDate1, setSelectedDate1] = useState(formattedDate);

const [dateModalVisible, setDateModalVisible] = useState(false);

const datemodvisible = () => {
  setDateModalVisible(true);
};
const currentTime = new Date();
const formattedTime =  currentTime.getHours() + ":" 
+ currentTime.getMinutes()
const [selectedTime1, setSelectedTime1] = useState(formattedTime);
const datemodvisiblefalse = () => {
  setDateModalVisible(false);
};


const [Longitude, setLongitude] = useState();
const [Latitude, setLatitude] = useState();
useEffect((item) => {

  Geolocation.getCurrentPosition(
    position => { 
  //  item.Longitude(position.coords.longitude);
    //  item.Latitude(position.coords.latitude);
    },
    error => console.log(error),
    { enableHighAccuracy: true,  timeout: 30000, maximumAge: 1000 }
  );
}, []);





function MAP() {
  Geolocation.requestAuthorization();
  Geolocation.getCurrentPosition(
    position => {
      // console.log(position.coords.latitude, position.coords.longitude);
      const label = ' LOCATION on MAPS'; // Replace with your label
      const url = `https://www.google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}&query_place_id=${label}`;
      // alert('LOCATION HAS BEEN SET');
      Linking.openURL(url);
      //   Latitude = `${position.coords.latitude}`
      //   Longitude = `${position.coords.longitude}`
    },
    error => {
      console.error(error);
    },
    {enableHighAccuracy: true, timeout: 40900, maximumAge: 15},
  );
}

const Accept = async (item) => { 
   await firestore()
      .collection('AcceptedFIR')
      .add({       
        ID :item.ID,
        name: item.name,
        cnic:item.cnic,
        contact: item.contact,
        crimeValue:item.crimeValue,
        districtValue:item.districtValue,
        cityValue:item.cityValue,
        policeValue:item.policeValue,
        description:item.description,
        suspectname: item.suspectname,
        suspectcontact:item.suspectcontact,
        reason: item.reason,
        Evidence: item.Evidence,
        EvidenceImage: item.EvidenceImage,
        suspectcnic:item.suspectcnic,
        SuspectImage:item.SuspectImage,
        relation: item.relation,
        SuspectDescription: item.SuspectDescription,
       latitude: item.latitude,
  longitude:item.longitude,
  // trackValue : item.trackValue,
  selectedDate: item.selectedDate
  
      })
      .then(() => {
        alert('Report Accepted!');
      }).catch(()=>{
        alert('error')
      });

    await firestore()
    .collection('FIR')
    .doc(item.id)
    .update({
      Status: "Seen",
      trackValue:trackValue,
      selectedDate1:selectedDate1,
      selectedTime1:selectedTime1,
      // trackValue:trackValue,
    });
    navigation.navigate('AdminTC',{  
      trackValue: trackValue,
      selectedTime1:selectedTime1,
      selectedDate1:selectedDate1,
     })
    // navigation.navigate('AdminTC')
  }

  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400}}>
        <View
          style={{
            // height: 400,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../../images/arrow.png')}
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
          {/* <View>
            <Pressable>
              <Image
                source={require('../images/loout.png')}
                style={{
                  width: 30,
                  height: 27,
                  marginLeft: 320,

                  marginTop: -44,
                }}
              />
            </Pressable>
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
               REGISTERED FIR
              </Text>
            </View>
            <View style={{marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 , marginBottom:20}}>
            <TouchableOpacity
            disabled = {true}
              onPress={() => navigation.navigate('RNC')}>
              <Text style={{fontSize:20, marginLeft:103, fontWeight:'bold', color:'green', marginTop:9, alignContent:'center'}}>SEARCH FIR TOKEN</Text>
            </TouchableOpacity>
          </View>
          <TextInput
           
           style={{
             borderRadius: 10,
             color: 'black',
             marginLeft: 12,
             paddingHorizontal: 10,
             width: 350,
             height:50,
             borderColor: "#B7B7B7",
             marginBottom:15,
             backgroundColor: '#eceded',
             marginVertical: 10,
           }}
           placeholderTextColor="grey"
           value={Token}
           onChangeText={setToken}
           placeholder="Enter FIR Token"
           // secureTextEntry={true}
         />


        
          <View style={{backgroundColor: 'red', width:140,height:50, borderRadius:8,marginTop:8, alignSelf:'center', alignItems:'center' }}>
            <TouchableOpacity 
             onPress={SearchCNIC}
             >
              <Text style={{fontSize:20,fontWeight:'bold', color:'white', marginTop:10}}>SEARCH </Text>
            </TouchableOpacity>
          </View>
            <View style={{}}>
            <FlatList
                style={{width: '100%'}}
                data={List}
                horizontal={true}
                // Horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                    //  <FlatList 
                    <View style={{ width: 370,
                        marginRight:19,
                        height: 640,}}>
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
                       
                        
                        <Text
                          style={{
                            color: '#10942e',
                            marginBottom:-5,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            // name: 'cnic',
                          }}>
                          NAME:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                            marginBottom:-5,
                           
                          }}>
                          CNIC:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                          {item.cnic}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                          CONTACT NO:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                          
                          }}>
                          {item.contact}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                          DATE
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                          
                          }}>
                          {item.selectedDate}
                        </Text>
                        </View>
                        
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                          }}>
                          CRIME TYPE:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                         
                          }}>
                          {item.crimeValue}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            marginBottom:-5,
                            fontSize: 14,
                            
                          }}>
                          DISTRICT: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                            marginBottom:-5,
                          }}>
                          CITY: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                           
                          }}>
                          {item.cityValue}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                          }}>
                         LOCATION:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                           
                          }}>
                          {item.longitude} +  {item.latitude}
                        </Text>
                        <Pressable style={{marginLeft:122}}
                        onPress={MAP}>
                          <Text style={{color:'green'}}>
View Location on Map
                          </Text>
                        </Pressable>
                        </View>

                     
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                          POLICE STATION: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                           
                          }}>
                          {item.policeValue}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                          }}>
                          EVIDENCES IMAGES
                        </Text>
                        <View
                style={{
                  alignItems: 'center',
                  marginLeft: 140,
                  width: 90,
                  height: 87,
                  backgroundColor: 'black',
                  borderRadius: 55,
                  marginTop: 12,
                }}>
                <Image
                  style={{
                    width: 90,
                    borderRadius: 5,
                    height: 87,
                    resizeMode:'cover',
                    // marginBottom: 20,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                  source={{uri: item.EvidenceImage}}
                />
              
              </View>
              <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                          }}>
                          EVIDENCES
                        </Text>

                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                           
                          }}>
                          {item.Evidence}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                          }}>
                          DESCRIPTION: 
                        </Text>

                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                           
                          }}>
                          {item.description}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            name: 'cnic',
                            
                            marginBottom:-5,
                          }}>
                          SUSPECT NAME: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                          {item.suspectname}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            name: 'cnic',
                            
                            marginBottom:-5,
                          }}>
                          SUSPECT Cnic: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                          {item.suspectcnic}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            name: 'cnic',
                            
                            marginBottom:-5,
                          }}>
                          SUSPECT IMAGE:
                        </Text>
                        <View
                style={{
                  alignItems: 'center',
                  marginLeft: 140,
                  width: 90,
                  height: 87,
                  backgroundColor: 'black',
                  borderRadius: 55,
                  marginTop: 12,
                }}>
                <Image
                  style={{
                    width: 90,
                    borderRadius: 5,
                    height: 87,
                    resizeMode:'cover',
                    // marginBottom: 20,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                  source={{uri: item.SuspectImage}}
                />
              
              </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            
                            marginBottom:-5,
                          }}>
                          SUSPECT CONTACT INFORMATION:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                            
                          }}>
                          {item.suspectcontact}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                          SUSPECT REASON: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                           
                          }}>
                          {item.reason}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                          SUSPECT RELATION WITH YOU: 
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                            
                            marginBottom:-5,
                          }}>
                          SUSPECT DESCRIPTION:
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
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
                            
                          }}>
                          {item.SuspectDescription}
                        </Text>
                        </View>
                        <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop:16,
                fontSize: 20,
                alignSelf: 'center'
              }}>
                
              TRACK
            </Text>
            <Controller
        name="track"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={trackOpen}
              value={trackValue} //genderValue
              items={track}
              setOpen={settrackOpen}
              setValue={settrackValue}
              setItems={settrack}
              placeholder="Select track"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={30}
              zIndexInverse={40}
            />
             {/* <Pressable
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 80,
              marginLeft: 282,
             marginTop:9,
              height: 30,
              alignItems: 'center',
              alignContent: 'center'    

            }}
            
           onPress={Track}
           
           >

            <Text style={{color: 'white', fontSize:17, marginTop: 4, fontWeight:'bold'}}>
             Update
            </Text>
          </Pressable> */}
          </View>
          
        )}
      />
        <Text
                          style={{
                            flex:1,
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            
                            // marginBottom:35,
                            marginTop:-10
                          }}>
                       Current Tracking Status :  
                        </Text>
                        <Text
                          style={{
                            flex:2,
                            color: 'red',
                            // fontWeight: 'bold',
                            marginLeft: 177,
                            fontSize: 14,
                            
                            // marginBottom:35,
                            marginTop:-19
                          }}>
                         {item.trackValue}
                        </Text>
                        </ScrollView>

                      
                        <View style={{ marginBottom: -5}}>
       
        </View>
                       
                      </View >
                      {/* <View style={{ flexDirection:'row'}} > */}
                      <Pressable
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 112,
             marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'    

            }}
            
           onPress={()=>Accept(item)}
           
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
            SEEN 
            </Text>
          </Pressable>
          {/* <Pressable
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 222,
              marginTop:-50,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'

            }}
           onPress={()=>{deny(item)}}
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
             DECLINE
            </Text>
          </Pressable> */}
         
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
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
    color: "grey",
    
  },
  dropdownGender: {
  //   backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"99%",
  //   marginBottom: 15,
    marginLeft:2,
    borderRadius: 12,
  //   borderColor:'green',
  //   borderWidth:1,
    marginTop:6,
    height:100
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },


 
});
export default AdminSVF;
