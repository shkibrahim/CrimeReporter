import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {useForm, Controller} from 'react-hook-form'

import {
  View,
  FlatList,
  Button, StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const AdminVMD = ({routes, navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [Data, setData] = useState([]);
  const [SuspectName, setSuspectName] = useState();
  const [SuspectContact, setSuspectContact] = useState();
  const [Btnstate, setBtnstate] = useState(true);
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
  var DOUCUMENTFOUNDNOTIFICATION = firestore().collection('DOUCUMENTFOUNDNOTIFICATION');

  useEffect(() => {
    var Dataa = async () => {
      await DOUCUMENTFOUNDNOTIFICATION.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
       
      });
    };
    Dataa();
  });
//   const deny=async (item)=>{
//     await firestore()
//     .collection('FIR')
//     .doc(item.id)
//     .update({
//       Status: "Declined",
      
//     });
//     alert("Report Declined")
// }
// const AdminUppdate= (item)=>{
//     if (item.AdminRemarks != "No Remarks Yet")
//     {
//         // alert('You cannot update once you have given Remarks')
//         // console.log("helo")
//         Btnstate == true;
//     }
//    if (item.AdminRemarks = "No Remarks Yet")
//    {
//   navigation.navigate("AdminUpdate")
// }
// }
const Chat = (item)=>{
    if (item.usercontact != "..."){
        // Btnstate = false;
        let phoneNumber = item.usercontact// Replace with the phone number you want to send the message to

        let url = `whatsapp://send?phone=${phoneNumber}`;
    
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Make sure WhatsApp is installed on your device');
            });
    }
   
    else{
        alert ("no")
    }
}
// const Accept = async (item) => { 
//     const Go= {
//       ID :item.ID,
//       name: item.name,
//       cnic:item.cnic,
//       contact: item.contact,
//       crimeValue:item.crimeValue,
//       districtValue:item.districtValue,
//       cityValue:item.cityValue,
//       policeValue:item.policeValue,
//       description:item.description,
//       SuspectName: item.suspectname,
//       Suspectcontact:item.suspectcontact,
//       reason: item.reason,
//       Relation: item.relation,
//       SuspectDescription: item.SuspectDescription,
//      latitude: item.latitude,
// longitude:item.longitude,
// // trackValue : item.trackValue,
// selectedDate: item.selectedDate

//     }
    

//    await firestore()
//       .collection('AcceptedFIR')
//       .add({       
//    Go
//       })
//       .then(() => {
//         alert('Report Accepted!');
//       }).catch(()=>{
//         alert('error')
//       });

//     await firestore()
//     .collection('FIR')
//     .doc(item.id)
//     .update({
//       Status: "Accepted",
//       trackValue:trackValue,
//       // trackValue:trackValue,
//     });
//     navigation.navigate('AdminTC',{  
//       trackValue: trackValue,
//      })
//     // navigation.navigate('AdminTC')
//   }

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
             MISSING DOCUMENTS
              </Text>
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
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 180,
                            fontSize: 18,
                            alignItems:'center',
                            name: 'cnic',
                          }}>
                          {index + 1}
                        </Text>
                       
                        
                       
                        
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                         Time
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
                          {item.selectedTime}
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
                          Document Information
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
                            height:'auto',
                            marginBottom: 10,
                            fontSize: 14,
                         
                          }}>
                          {item.DocumentInformation}
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
                        Found From
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
                          {item.Location}
                        </Text>
                        </View>
                      
                        <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop:16,
                marginBottom:22,
                fontSize: 20,
                alignSelf: 'center'
              }}>
                
             RESPONSE FROM GENERAL PUBLIC
            </Text>
        
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
                     User Name
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
                          {item.username}
                        </Text>
                        </View>
                        <Text
                          style={{
                            flex:1,
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            // marginBottom:12,
                            // marginBottom:35,
                            marginTop:-10
                          }}>
                     User Cnic
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
                          {item.usercnic}
                        </Text>
                        </View>
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
                   Response
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
                          {item.UserInformation}
                        </Text>
                        </View>
                        </ScrollView>

                      
                     
                       
                      </View >
                      {/* <View style={{ flexDirection:'row'}} > */}
                      {/* <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 22,
             marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'    

            }}
            
           onPress={()=>Accept(item)}
           
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
             ACCEPT 
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 250,
              marginLeft: 72,
              marginTop:40,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'

            }}
            // disabled= {Btnstate}
           onPress={Chat}
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
            CHAT WITH USER
            </Text>
          </TouchableOpacity>
         
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
export default AdminVMD;
