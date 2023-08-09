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
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';

import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const AdminMP = ({route, navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
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
  var RMV = firestore().collection('RMP');

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
//     .collection('RMP')
//     .doc(item.id)
//     .update({
//       Status: "Declined",
//     });
//     alert('declined')
// }
const Accept = async (item) => { 
    const Go= {
        ID: item.ID,
        name: item.name,
        cnic:item.cnic,
       districtValue:item.districtValue,
       cityValue:item.cityValue,
       policeValue:item.policeValue,
     selectedDate:item.selectedDate,
     latitude:item.latitude,
     longitude:item.longitude,
     MissingPersonName:item.MissingPersonName,
        contact: item.contact,
        Age:item.Age,
        VisualDescription:item.VisualDescription,
        GenderValue:item.GenderValue,
     
    }
    

   await firestore()
      .collection('AcceptedMissingPersonREPORTS')
      .add({       
   Go
      })
      .then(() => {
        alert('Report Accepted!');
      }).catch(()=>{
        alert('error')
      });

    await firestore()
    .collection('RMP')
    .doc(item.id)
    .update({
      Status: "Accepted",
      trackValue:trackValue,
    });
    navigation.navigate('AdminTC',{  
      trackValue: trackValue,
     })
  }


  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400}}>
        <View
          style={{
           
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
          <View>
            <Pressable onPress={() => navigation.navigate('UserPanel')}>
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
               REGISTERED REPORTS
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
                           
                          }}>
                      Missing Person Image
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
                    borderRadius: 55,
                    height: 87,
                    resizeMode:'cover',
                    // marginBottom: 20,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                  source={{uri: item.MissingPerson}}
                />
                <View style={{marginTop: -50, marginLeft: 49}}>
                  {/* <Pressable  disabled= {!inputEditable} onPress={handleGalleryPress}>
                    <Image
                      source={require('../images/load.png')}
                      style={{
                        width: 70,
                        height: 70,

                     
                        marginTop: 18,
                      }}
                    />
                  </Pressable> */}
                </View>
              </View>
                        
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
                         MISSING PERSON NAME:
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
                          {item.MissingPersonName}
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
                          MISSING PERSON AGE
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
                          {item.Age}
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
                          MISSING PERSON VISUALS:
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
                          {item.VisualDescription}
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
                        MISSING PERSON GENDER
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
                          {item.GenderValue}
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
                      <Pressable
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 12,
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
          <Pressable
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
             onPress={() => navigation.navigate('AdminSearchMP',{  
              MissingPerson:item.MissingPerson,
              MPcnic: item.MPcnic,
              
             
             })}
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
             SEARCH
            </Text>
          </Pressable>
                    
              
                      {/* <View style={{ flexDirection:'row'}} > */}
                      {/* <Pressable style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 10,
              marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'

            }}><Text>Status:{item.Status}</Text></Pressable>
                        <Pressable
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
export default AdminMP;
