import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  View,
  FlatList,
  Button,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';

import {Image} from 'react-native';


const AdminUpdate = ({routes, navigation}) => {

  const [AdminRemarksa, setAdminRemarksa] = useState();
  const [Data, setData] = useState([]);

  var ITPI = firestore().collection('ITPI');

  useEffect(() => {
    var Dataa = async () => {
      await ITPI.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      
      });
    };
    Dataa();
  });


  const Update = async (item) => { 

    await firestore()
    .collection('ITPI')
    .doc(item.id)
    .update({
    AdminRemarks: AdminRemarksa,
      // trackValue:trackValue,
    });
    
    navigation.navigate("ITPreview")
    // navigation.navigate('AdminTC')
  }
//   const deny=async (item)=>{
//     await firestore()
//     .collection('FIR')
//     .doc(item.id)
//     .update({
//       Status: "Declined",
      
//     });
//     alert("Report Declined")
// }

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
             INFORMATION OF CASE
              </Text>
            </View>
            <View style={{}}>
              <FlatList
                style={{width: '100%'}}
                data={Data}
                // horizontal={true}
                Horizontal = {true}
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
                         ---
                        </Text>
                       
                        
                        <Text
                          style={{
                            color: '#10942e',
                            marginBottom:-5,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            // name: 'cnic',
                          }}>
                         Time:
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
                         Date:
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
                          Tracking Status:
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
                          {item.trackValue}
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
                          Investigation Remarks:
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
                          {item.CaseInformation}
                        </Text>
                        </View>

                        
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:5,
                          }}>
                          Admin Remarks:
                        </Text>
                        <View style={{
                  borderRadius: 10,
                  marginLeft: 0,
                  // paddingHorizontal: 10,
                  width: 368,
                  height: 150,
                  borderColor: '#B7B7B7',
                  // marginBottom: 30,
                  backgroundColor: '#eceded',}}>
              <TextInput
                // style={{
                //   borderRadius: 10,
                //   color: 'black',
                //   marginLeft: 12,
                //   paddingHorizontal: 10,
                //   width: 350,
                //   height: 150,
                //   borderColor: '#B7B7B7',
                //   marginBottom: 30,
                //   backgroundColor: '#eceded',
                //   marginVertical: 10,
                // }}
                placeholderTextColor="red"
                // value={cnic}
                // keyboardType='Numeric'
                // onChangeText={cnic => {
                //   name === '' ||
                //   cnic === '' ||
                //   contact === '' ||
                //   description === ''
                //     ? setAddBtnState(true)
                value={AdminRemarksa}
                onChangeText={
               
                  setAdminRemarksa
                }
                //     : setAddBtnState(false);
                //   setcnic(cnic);
                // }}
                placeholder="Give your Remarks here"
                style={{  color: 'green',
                
                color: 'black',
                borderRadius: 10,
                marginLeft: -2,
                // paddingHorizontal: 10,
                width: 350,
                height: 150,
              
                // marginVertical: 10,
                // borderColor:'green',
                marginTop:-52
            ,}}
            multiline={true}
                // secureTextEntry={true}
              />
              </View>
                        </ScrollView>

                      
                        <View style={{ marginBottom: -5}}>
       
        </View>
                       
                      </View >
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

            }}><Text>Status:{item.Status}</Text></TouchableOpacity> */}
                        <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 250,
              marginLeft: 70,
              marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'

            }}
            onPress={Update}>
            <Text style={{ color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
            Update your Remarks
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

export default AdminUpdate;
