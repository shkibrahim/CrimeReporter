import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  View,
  FlatList,
  Button,
  route, StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import {useForm, Controller} from 'react-hook-form'
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const AdminVC = ({ navigation,route}) => {
  const [name, setname] = useState();
  const [trackOpen, settrackOpen] = useState();
const [trackValue, settrackValue] = useState();
const [track, settrack] = useState([
  { label: "Accepted", value: "Accepted" },
 
  { label: "Sent to Investigation Team", value: "Sent to Investigation Team" },
 
  { label: "Case Proceeding Started", value: "Case Proceeding Started" },
  { label: "Case Closed", value: "Case Closed" },
]);
  const {  control } = useForm();
//   const { name } = route.params;
//   const {victimValue} = route.params;
//   const { cnic} = route.params;
//   const { description} = route.params;
//   const { contact } = route.params;
//   const { crimeValue } = route.params;
//   const { districtValue } = route.params;
//   const{policeValue} = route.params;
//   const { cityValue } = route.params;
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  // const [victimValue, setvictimValue] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [SuspectName, setSuspectName] = useState();
  const [SuspectContact, setSuspectContact] = useState();
  const [Reason, setReason] = useState();
  const [relation, setrelation] = useState();
  const [ID, setID] = useState();
  const [SuspectDescription, setSuspectDescription] = useState();
  const [Data, setData] = useState([]);
  const [AData, setAData]= useState([]);

  var Track = firestore().collection('Track');


  const Accept = async (item) => { 
    // const Go= {
    //   name: item.name,
    //   cnic:item.cnic,
    //   Contact: item.Contact,
    //   crimeValue:item.crimeValue,
    //   districtValue:item.districtValue,
    //   cityValue:item.cityValue,
    //   policeValue:item.policeValue,
    //   description:item.description,
    //   SuspectName: item.suspectname,
    //   Suspectcontact:item.suspectcontact,
    //   reason: item.reason,
    //   Relation: item.relation,
    //   SuspectDescription: item.SuspectDescription
    // }
    

   await firestore()
      .collection('AcceptedComplaints')
      .add({       
        name: item.name,
        cnic:item.cnic,
        contact: item.contact,
        crimeValue:item.crimeValue,
        districtValue:item.districtValue,
        cityValue:item.cityValue,
        policeValue:item.policeValue,
        description:item.description,
        victimValue:item.victimValue,
        // victimValue:victimValue,
        suspectname: item.suspectname,
        suspectcontact:item.suspectcontact,
        reason: item.reason,
        relation: item.relation,
        SuspectDescription: item.SuspectDescription
      })
      .then(() => {
        alert('User added!');
      }).catch(()=>{
        alert('error')
      });

    await firestore()
    .collection('Complaint')
    .doc(item.id)
    .update({
      Status: "Accepted",
      trackValue:trackValue,
    });
    navigation.navigate('AdminTC',{  
        trackValue: trackValue,
      

       })
  }
//   const getRandomNumber = () => {
//     const randomNumber = Math.floor(Math.random()) ;
//     setNumber(randomNumber);
// }
  var Complaint = firestore().collection('Complaint');

  useEffect(() => {
    var Dataa = async () => {
      await Complaint.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
     
      });
    };
    Dataa();
  });
//   var Ac= {
// Data = AData,
//   }

// const deny=async (item)=>{
//     await firestore()
//     .collection('Complaint')
//     .doc(item.id)
//     .update({
//       Status: "Declined",
//     });
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
               REGISTERED COMPLAINTS
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
                        height: 680,}}>
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
                          <ScrollView style={{height:650}}>
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
                            marginBottom: 15,
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                          }}>
                          VICTIM: 
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
                          {item.victimValue}
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
                          SUSPECT REASON: {item.reason}
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
                        {/* <TouchableOpacity style={{width:45, height:45}}  onPress={() => Accept(item.cnic)}><Text style= {{color:'black'}}  >X</Text></TouchableOpacity> */}
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
             {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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
                       
                      </View>
                        <TouchableOpacity
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
          </TouchableOpacity>
        


          {/* <TouchableOpacity
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
export default AdminVC;
