import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {useForm, Controller} from 'react-hook-form'

import {
  View,
  FlatList,
  Button,
  Text,StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';

import {Image} from 'react-native';

const AdminPreview = ({routes, navigation}) => {
  const [name, setname] = useState();
  const [btnstate, setbtnstate] = useState(false);
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [Data, setData] = useState([]);
//   const [trackOpen, settrackOpen] = useState();
//   const [trackValue, settrackValue] = useState();
//   const [track, settrack] = useState([
//     { label: "Accepted", value: "Accepted" },
   
//     { label: "Sent to Investigation Team", value: "Sent to Investigation Team" },
   
//     { label: "Case Proceeding Started", value: "Case Proceeding Started" },
//     { label: "Case Closed", value: "Case Closed" },
//   ]);
  const {  control } = useForm();
  var RMV = firestore().collection('ITPI');

  useEffect(() => {
    var Dataa = async () => {
      await RMV.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
     
      });
    };
    Dataa();
  });

//   const deny=async (item)=>{
//     await firestore()
//     .collection('RMV')
//     .doc(item.id)
//     .update({
//       Status: "Declined",
//     });
//     alert('declined')
// }
const AdminUppdate= (item)=>{
    if (item.AdminRemarks != "No Remarks Yet")
    {
        alert('You cannot update once you have given Remarks')
        console.log("helo")
        btnstate == true;
    }
   if (item.AdminRemarks = "No Remarks Yet")
   {
  navigation.navigate("AdminUpdate")
}
}
const Accept = async (item) => { 
    const Go= {
    //     ID: item.ID,
    //     name: item.name,
    //     cnic:item.cnic,
    //    districtValue:item.districtValue,
    //    cityValue:item.cityValue,
    //    policeValue:item.policeValue,
    //    description:item.description,
    //    VehicleName:item.VehicleName,
    //    VehicleNumber: item.VehicleNumber,
    //    VehicleTypeValue:item.VehicleTypeValue,
    //    Model: item.Model,
    //    Color:item.Color,
    //    VehicleDescription: item.VehicleDescription,
    //     contact: item.contact,   
    //     districtValue:item.districtValue,
    //     cityValue:item.cityValue,
    //     policeValue:item.policeValue,
    //     description:item.description,
    }
    

//    await firestore()
//       .collection('AcceptedREPORTS')
//       .add({       
//    Go
//       })
//       .then(() => {
//         alert('Report Accepted!');
//       }).catch(()=>{
//         alert('error')
//       });

    await firestore()
    .collection('ITPI')
    .doc(item.id)
    .update({
    //   Status: "Accepted",
    //   trackValue:trackValue,
    });
    // navigation.navigate('AdminTC',{  
    //   trackValue: trackValue,
    //  })
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
              PREVIEW
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
                // flexDirection: 'row',
                marginLeft:12,
                // alignContent: 'center',
                // alignItems: 'center',
              }}>
              <Text style={{color: '#10942e', fontSize: 19, fontWeight: 'bold'}}>
              Case ID:
              </Text>
              <Text style={{color: '#10942e', fontSize: 19, fontWeight: 'bold'}}>
              Case Type:
              </Text>
            </View>
            <View style={{}}>
              <FlatList
                style={{width: '100%'}}
                data={Data}
                // horizontal={true}
                // Horizontal = {true}
                showsVerticalScrollIndicator={true}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                    //  <FlatList 
                    <View style={{ width: 370,
                        marginRight:19,
                        height: 'auto',}}>
                      <View
                        style={{
                        //   backgroundColor: 'white',
                          borderColor: 'red',
                          marginBottom: 10,
                        //   borderRadius: 19,
                          margin: 10,
                         
                          width: 370,
                          height:'auto',
                        }}>
                        
                       
                       
                        
                      
                        <View style ={{
                            flexDirection: 'row',
                            height:'auto'
                }}>
                   
                        <View style ={{
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            marginLeft: 18,
                            marginTop:10,
                            // marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {item.selectedTime}
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            // marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {item.selectedDate}
                        </Text>
                        </View>
                        <View style={{
                            backgroundColor: 'green',
                            // marginBottom:30,
                            marginVertical: 20,
                            marginLeft:10,
                            width:24,
                         
                            borderRadius:22,
                            height:24
                        }}>
<Text style={{color:'white',   alignSelf:'center',marginTop:2}}>{index+1}</Text>
<View style={{  marginTop:8,marginLeft:12,backgroundColor: 'grey', width: 0.4, height:100}}> 
                        
                        </View>
                        </View>
                        
<View style={{ marginVertical: 20,}}>
    <Text style={{color:'green',  }}>   {item.trackValue}</Text>
    <Text style={{color:'grey', fontWeight:'bold', marginLeft:10}}>Investigation Team</Text>
    <View style={{marginLeft:10, borderRadius:6 , width:220,alignSelf:'center'}}>
        <ScrollView style={{height:'auto' }} 
        showsVerticalScrollIndicator = {true} 
        vertical={true}>
          
    <Text style={{color:'red', }}>{item.CaseInformation}</Text>
    </ScrollView>

    </View>
    <Text style={{color:'grey', fontWeight:'bold', marginLeft:10}}>Admin Remarks</Text>
    <View style={{marginLeft:10, borderRadius:6 , width:220,alignSelf:'center'}}>
        <ScrollView style={{height:'auto' }} 
        showsVerticalScrollIndicator = {true} 
        vertical={true}>
          
    <Text style={{color:'red', }}>{item.AdminRemarks}</Text>
    </ScrollView>
<TouchableOpacity  style={{height:32,width:102, borderRadius:4,borderWidth:2, borderColor:'green', backgroundColor:'lightyellow'}}
 onPress={AdminUppdate}
 disabled = {btnstate}>
    <Text style={{color:'green', alignSelf:'center', marginTop:4}}>Give Remarks</Text></TouchableOpacity>
    </View>
</View>
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
    marginTop:2,
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
export default AdminPreview;
