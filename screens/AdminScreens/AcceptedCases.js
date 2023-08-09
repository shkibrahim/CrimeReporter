import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {useForm, Controller} from 'react-hook-form';

import {
  View,
  FlatList,
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DropDownPicker from 'react-native-dropdown-picker';

const AcceptedCases = ({routes, navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [cityValue, setcityValue] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [Data, setData] = useState([]);
  const [teamlist, setTeamlist] = useState([]);
  const [SuspectName, setSuspectName] = useState();
  const [SuspectContact, setSuspectContact] = useState();
  const [Reason, setReason] = useState();
  const [trackOpen, settrackOpen] = useState();
  const [trackValue, settrackValue] = useState();
  const [track, settrack] = useState([
    {label: 'Accepted', value: 'Accepted'},

    {label: 'Sent to Investigation Team', value: 'Sent to Investigation Team'},

    {label: 'Case Proceeding Started', value: 'Case Proceeding Started'},
    {label: 'Case Closed', value: 'Case Closed'},
  ]);
  const {control} = useForm();
  const [relation, setrelation] = useState();
  const [SuspectDescription, setSuspectDescription] = useState();
  var FIR = firestore().collection('AcceptedFIR');
  var InvTeam = firestore().collection('Team');

  const [ml, setml] = useState([]);
  const [rol, setrol] = useState([]);
  const [ral, setral] = useState([]);
  const [kl, setkl] = useState([]);


  useEffect(() => {
    var Dataa = async () => {
      await FIR.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });

      await InvTeam.get().then(data => {
        setTeamlist(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
    };
    Dataa();
  });

  useEffect(() => {
    if (teamlist.length > 0) {
      const MurderList = teamlist.filter(item => {
        return item.ExpertiesValue === 'Murder';
      });
      const RobberyList = teamlist.filter(item => {
        return item.ExpertiesValue === 'Robbery';
      });
      const RapeList = teamlist.filter(item => {
        return item.ExpertiesValue === 'Rape';
      });
      const KidnappingList = teamlist.filter(item => {
        return item.ExpertiesValue === 'Kidnapping';
      });

      setml(MurderList)
      setrol(RobberyList)
      setral(RapeList)
      setkl(KidnappingList)

    }
  }, [teamlist]);

  const deny = async item => {
    await firestore().collection('FIR').doc(item.id).update({
      Status: 'Declined',
    });
    alert('Report Declined');
  };

  const Accept = async item => {
    const Go = {
      ID: item.ID,
      name: item.name,
      cnic: item.cnic,
      contact: item.contact,
      crimeValue: item.crimeValue,
      districtValue: item.districtValue,
      cityValue: item.cityValue,
      policeValue: item.policeValue,
      description: item.description,
      SuspectName: item.suspectname,
      Suspectcontact: item.suspectcontact,
      reason: item.reason,
      Relation: item.relation,
      SuspectDescription: item.SuspectDescription,
      latitude: item.latitude,
      longitude: item.longitude,
      // trackValue : item.trackValue,
      selectedDate: item.selectedDate,
    };

    await firestore()
      .collection('AcceptedFIR')
      .add({
        Go,
      })
      .then(() => {
        alert('Report Accepted!');
      })
      .catch(() => {
        alert('error');
      });

    await firestore().collection('FIR').doc(item.id).update({
      Status: 'Accepted',
      trackValue: trackValue,
      // trackValue:trackValue,
    });
    navigation.navigate('AdminTC', {
      trackValue: trackValue,
    });
    // navigation.navigate('AdminTC')
  };

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
            
            }}>
            <View
              style={{
                marginBottom: 0,
                marginTop: 15,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'red', fontSize: 19, fontWeight: 'bold'}}>
                ACCEPTED FIR
              </Text>
            </View>
            <View style={{}}>
              <FlatList
                style={{width: '100%'}}
                data={Data}
                horizontal={true}
                // Horizontal = {true}
                showsHorizontalScrollIndicator={true}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                      //  <FlatList
                      <View style={{width: 370, marginRight: 19, height: 650}}>
                        <View
                          style={{
                            //   backgroundColor: 'white',
                            borderColor: 'red',
                            marginBottom: 10,
                            //   borderRadius: 19,
                            margin: 10,

                            width: 370,
                          }}>
                          <ScrollView
                            showsVerticalScrollIndicator={true}>
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

                            <View
                              style={{
                                marginBottom: 0,
                                marginTop: 15,
                                // alignContent: 'center',
                                // alignItems: 'center',
                              }}>
                              <Text
                                style={{
                                  color: 'red',
                                  fontSize: 19,
                                  marginLeft:30,
                                  fontWeight: 'bold',
                                }}>
                                Recommended Investigation Teams
                              </Text>
                              {item.crimeValue === 'Murder' ? (
                               <View>
                               {ml.map((murder, index) => (


                                 <Text
                                   key={index}
                                   style={{
                                     color: 'green',
                                     marginTop:20,
                                     fontSize: 15,
                                    //  fontWeight: 'bold',
                                   }}>
                                    {index+1}.
                                    Team Name:
                                    {''}  {murder.TeamName}{''}

                                  {'                                                     '} Team Leader: 
                                  {''}   {murder.TeamLeader}
                                 </Text>

                                 
                               )
                               
                               )}
                             
                             </View>
                             )
                              : null}
                              {item.crimeValue === 'Robbery' ? (
                                <View>
                                {rol.map((murder, index) => (
                                  
                                  <Text
                                    key={index}
                                    style={{
                                      color: 'red',
                                      fontSize: 12,
                                      fontWeight: 'bold',
                                    }}>
                                    {murder.TeamName}
                                   
                                  </Text>
                                ))}
                                    <Text
                                    // key={index}
                                    style={{
                                      color: 'red',
                                      fontSize: 12,
                                      fontWeight: 'bold',
                                    }}>
                                    ddd
                                   
                                  </Text>
                              </View>
                              ) : null}
                              {item.crimeValue === 'Rape' ? (
                                <View>
                                {ral.map((murder, index) => (
                                  <Text
                                    key={index}
                                    style={{
                                      color: 'red',
                                      fontSize: 12,
                                      fontWeight: 'bold',
                                      marginBottom:40
                                    }}>
                                       
                                    {murder.TeamName}
                                    {murder.TeamLeader}
                                  </Text>
                                ))}
                              </View>
                              ) : null}
                              {item.crimeValue === 'Kidnapping' ? (
                                <View>
                                {kl.map((murder, index) => (
                                  <Text
                                    key={index}
                                    style={{
                                      color: 'red',
                                      fontSize: 12,
                                      fontWeight: 'bold',
                                    }}>
                                    {murder.TeamName}
                                  </Text>
                                ))}
                              </View>
                              ) : null}
                            </View>
                          </ScrollView>
                        </View>
                        {/* <View style={{ flexDirection:'row'}} > */}
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
    borderStyle: 'solid',
    borderColor: '#B7B7B7',
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
    color: 'grey',
  },
  dropdownGender: {
    //   backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '99%',
    //   marginBottom: 15,
    marginLeft: 2,
    borderRadius: 12,
    //   borderColor:'green',
    //   borderWidth:1,
    marginTop: 6,
    height: 100,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: '#B7B7B7',
    height: 50,
  },
});
export default AcceptedCases;
