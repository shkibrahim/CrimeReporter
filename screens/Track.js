import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';

import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Back3 from './Back3';

import {Image} from 'react-native';

const Track = ({navigation, route}) => {
  // const [Data, setData] = useState([]);
  // const [firdata, setData2] = useState([]);
  // var Tracker = firestore().collection('Track');
  const {trackval} = route.params;
  const { selectedTime1} = route.params; 
  const { selectedDate1} = route.params;
  useEffect(() => {
    if (trackval === 'Accepted') {
      setclr({...setclr, bgcolor:'red',txtcolor:'red'});
    }
    if (trackval === 'Sent to Investigation Team') {
      setclr1({...setclr1, bgcolor:'red',txtcolor:'red'});
    }
    if (trackval === 'Case Proceeding Started') {
      setclr2({...setclr2, bgcolor:'red',txtcolor:'red'});
    }
    if (trackval === 'Case Closed') {
      setclr3({...setclr3, bgcolor:'red',txtcolor:'red'});
      setBtnstat(false);
    }
  }, []);

  // var Dataa = async () => {

  //   await Tracker.get().then(data => {
  //     setData2(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  //   });
  // };

  // useEffect(() => {
  //   var Dataa = async () => {
  //     await Tracker.get().then(data => {
  //       setData2(data.docs.map(doc => ({...doc.data(), id: doc.id})));
  //       // console.log(data);
  //     });
  //   };
  //   Dataa();
  // });

  // const show1=async()=>{

  //   firdata.forEach(element => {
  //       if(element.trackValue==="Accepted"){
  //         setclr=== ('red')
  //   }
  //   });
  //     alert(trackValue)
  // }

  //   useEffect((item) => {
  //       if(item.trackValue==="Accepted"){
  //           setclr=== ('red')
  //       }
  //       if(item.trackValue==="Sent to Investigation Team"){
  //         setclr1=== ('red')
  //     }
  //     if(item.trackValue==="Case Proceeding Started"){
  //       setclr2 === ('red')
  //   }
  //   if(trackValue==="Case Closed"){
  //     setclr3 === ('red')
  // }
  //   });

  const [clr, setclr] = useState ({bgcolor:'grey' , txtcolor: "grey"});
  const [clr1, setclr1] = useState ({bgcolor:'grey' , txtcolor: "grey"});
  const [clr2, setclr2] = useState ({bgcolor:'grey' , txtcolor: "grey"});
  const [clr3, setclr3] = useState ({bgcolor:'grey' , txtcolor: "grey"});
  const [btnstat, setBtnstat]=useState(true)

  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400}}>
      {/* <View style={{ width: 370,
                        marginRight:19,
                        height: 'auto',}}> */}
                      {/* <View
                        style={{
                        //   backgroundColor: 'white',
                          borderColor: 'red',
                          marginBottom: 10,
                        //   borderRadius: 19,
                          margin: 10,
                         
                          width: 370,
                          height:'auto',
                        }}>
                        
                       
                       
                        
                      
                    
                     
                    
                       
                      </View > */}
                     
                    
              
             
         
                

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
            <Text style={{color: 'white', fontSize: 29, fontWeight: 'bold'}}>
              TRACKING
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            {/* <ScrollView style={{backgroundColor:'white',borderRadius:37, width:390, marginLeft:-18}}> */}
          </View>
          
          <View style ={{
                            flexDirection: 'row',
                            height:'auto',
                            marginTop:-650,
                            marginLeft:-20
                }}>
                    <View style ={{
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            marginLeft: 18,
                            // marginTop:10,
                            // marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {selectedTime1}
                        </Text>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            // marginTop:10,
                            // marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {selectedDate1}
                        </Text>
                        </View>
                   
                        {/* <View style ={{
                marginBottom:30,
                backgroundColor:'grey',
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'black',
                            // fontWeight: 'bold',
                            marginLeft: 18,
                            marginTop:10,
                            // marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {selectedTime1}
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
                          {selectedDate1}
                        </Text>
                        </View> */}
                        <View style={{
                            backgroundColor:clr.bgcolor,
                            // marginBottom:30,
                            marginVertical: 20,
                            marginLeft:10,
                            width:24,
                         
                            borderRadius:22,
                            height:24
                        }}>
<Text style={{color:'white',   alignSelf:'center',marginTop:2}}>1</Text>
<View style={{  marginTop:8,marginLeft:12,backgroundColor: 'grey', width: 0.4, height:70}}> 
                        
                        </View>
                        </View>
                        
<View style={{ marginVertical: 20,}}>
    {/* <Text style={{color:'green',  }}>   {item.trackValue}</Text> */}
    <Text style={{color: clr.txtcolor, fontWeight:'bold', marginLeft:10}}>Accepted and Seen</Text>
    {/* <View style={{marginLeft:10, borderRadius:6 , width:220,alignSelf:'center'}}>
     

    </View> */}
    <Text style={{color:'grey', marginLeft:10}}>Your Report has been seen </Text>
    <Text style={{color:'grey', marginLeft:10}}>and Forwarded </Text>
 
</View>
                        </View>
                        <View style ={{
                            flexDirection: 'row',
                            height:'auto',
                            marginTop:30,
                            marginLeft:-20
                }}>
                   
                        {/* <View style ={{
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
                          {selectedTime}
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
                          {selectedDate}
                        </Text>
                        </View> */}
                        <View style={{
                            backgroundColor: clr1.bgcolor,
                            // marginBottom:30,
                            marginVertical: 20,
                            marginLeft:10,
                            width:24,
                         
                            borderRadius:22,
                            height:24
                        }}>
<Text style={{color:'white',   alignSelf:'center',marginTop:2}}>2</Text>
<View style={{  marginTop:8,marginLeft:12,backgroundColor: 'grey', width: 0.4, height:70}}> 
                        
                        </View>
                        </View>
                        
<View style={{ marginVertical: 20,}}>
    {/* <Text style={{color:'green',  }}>   {item.trackValue}</Text> */}
    <Text style={{color: clr1.txtcolor, fontWeight:'bold', marginLeft:10}}>Sent to Investigation Team</Text>
    {/* <View style={{marginLeft:10, borderRadius:6 , width:220,alignSelf:'center'}}>
     

    </View> */}
    <Text style={{color:'grey', marginLeft:10}}>Your Report has been sent </Text>
    <Text style={{color:'grey', marginLeft:10}}>to Investigation Team </Text>
 
</View>
                        </View>
                        <View style ={{
                            flexDirection: 'row',
                            height:'auto',
                            marginTop:30,
                            marginLeft:-28
                }}>
                   
                        {/* <View style ={{
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
                          {selectedTime}
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
                          {selectedDate}
                        </Text>
                        </View> */}
                        <View style={{
                            backgroundColor: clr2.bgcolor,
                            // marginBottom:30,
                            marginVertical: 20,
                            marginLeft:10,
                            width:24,
                         
                            borderRadius:22,
                            height:24
                        }}>
<Text style={{color:'white',   alignSelf:'center',marginTop:2}}>3</Text>
<View style={{  marginTop:8,marginLeft:12,backgroundColor: 'grey', width: 0.4, height:70}}> 
                        
                        </View>
                        </View>
                        
<View style={{ marginVertical: 20,}}>
    {/* <Text style={{color:'green',  }}>   {item.trackValue}</Text> */}
    <Text style={{color: clr2.txtcolor, fontWeight:'bold', marginLeft:10}}>Case Proceeding Started</Text>
    {/* <View style={{marginLeft:10, borderRadius:6 , width:220,alignSelf:'center'}}>
     

    </View> */}
    <Text style={{color:'grey', marginLeft:10}}>Your Report has been</Text>
    <Text style={{color:'grey', marginLeft:10}}>on working  </Text>
 
</View>
                        </View>
                        <View style ={{
                            flexDirection: 'row',
                            height:'auto',
                            marginTop:30,
                            marginLeft:-60,
                            marginBottom:100
                }}>
                   
                        {/* <View style ={{
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
                          {selectedTime}
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
                          {selectedDate}
                        </Text>
                        </View> */}
                        <View style={{
                            backgroundColor: clr3.bgcolor,
                            // marginBottom:30,
                            marginVertical: 20,
                            marginLeft:10,
                            width:24,
                         
                            borderRadius:22,
                            height:24
                        }}>
<Text style={{color:'white',   alignSelf:'center',marginTop:2}}>4</Text>
{/* <View style={{  marginTop:8,marginLeft:12,backgroundColor: 'grey', width: 0.4, height:70}}> 
                        
                        </View> */}
                        </View>
                        
<View style={{ marginVertical: 20,}}>
    {/* <Text style={{color:'green',  }}>   {item.trackValue}</Text> */}
    <Text style={{color: clr3.txtcolor, fontWeight:'bold', marginLeft:10}}>Case closed</Text>
    {/* <View style={{marginLeft:10, borderRadius:6 , width:220,alignSelf:'center'}}>
     

    </View> */}
    <Text style={{color:'grey', marginLeft:10}}>Your Case has been</Text>
    <Text style={{color:'grey', marginLeft:10}}>solved  </Text>
 
</View>
                        </View>
          {/* <View style={{marginLeft: -90, marginTop: -650}}>
            <TouchableOpacity
              style={{
                backgroundColor: clr.bgcolor,
                marginBottom: 70,
                borderRadius: 8,
                borderColor: 'green',
                borderWidth: 2,
                width: 245,
                height: 70,
              }}>
              <Text
                style={{
                  color: clr.txtcolor,
                  fontSize: 20,
                  marginLeft: 32,
                  marginTop: 20,
                }}>
                Complaint Accepted
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../images/down.png')}
            style={{
              width: 105,
              borderRadius: 0,
              height: 103,
              marginLeft: -80,

              marginTop: -70,
            }}
          />
          <View style={{marginLeft: 69}}>
            <TouchableOpacity
              style={{
                backgroundColor: clr1.bgcolor,
                marginBottom: 70,
                borderRadius: 8,
                width: 245,
                borderColor: 'green',
                borderWidth: 2,
                height: 70,
              }}>
              <Text
                style={{
                  color: clr1.txtcolor,
                  fontSize: 20,
                  marginLeft: 32,
                  marginTop: 10,
                }}>
                {' '}
                Complaint Sent to Investigation Team
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../images/downu.png')}
            style={{
              width: 105,
              borderRadius: 0,
              height: 103,
              marginLeft: -80,
              marginTop: -70,
            }}
          />
          <View style={{marginLeft: -90}}>
            <TouchableOpacity
              style={{
                backgroundColor: clr2.bgcolor,
                marginBottom: 70,
                borderColor: 'green',
                borderWidth: 2,
                borderRadius: 8,
                width: 245,
                height: 70,
              }}>
              <Text
                style={{
                  color: clr2.txtcolor,
                  fontSize: 20,
                  marginLeft: 52,
                  marginTop: 10,
                }}>
                Case Proceeding
              </Text>
              <Text
                style={{
                  color: clr2.txtcolor,
                  fontSize: 20,
                  marginLeft: 92,
                  marginTop: 0,
                }}>
                Started
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../images/down.png')}
            style={{
              width: 105,
              borderRadius: 0,
              height: 103,
              marginLeft: -80,

              marginTop: -70,
            }}
          />
          <View style={{marginLeft: 69}}>
            <TouchableOpacity
              style={{
                backgroundColor: clr3.bgcolor,
                marginBottom: 10,
                borderColor: 'green',
                borderWidth: 2,
                borderRadius: 8,
                width: 245,
                height: 70,
              }}>
              <Text
                style={{
                  color: clr3.txtcolor,
                  fontSize: 20,
                  marginLeft: 62,
                  marginTop: 20,
                }}>
                Case Closed
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={{marginLeft: -220, marginTop: 27, }}>
            <TouchableOpacity
            disabled={btnstat}
              style={{
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 2,
                borderRadius: 8,
                width: 140,
                height: 50,
              }}
              onPress={() => navigation.navigate('FB')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  marginLeft: 12,
                  marginTop: 13,
                }}>
                PROVIDE FEEDBACK
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop:-50,marginLeft:210}}>
            <TouchableOpacity
            // disabled={btnstat}
              style={{
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 2,
                borderRadius: 8,
                width: 140,
                height: 50,
              }}
              onPress={() => navigation.navigate('CaseDetails')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  marginLeft: 28,
                  marginTop: 13,
                }}>
            CASE DETAILS
              </Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
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
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdowndistrict: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdownvictim: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdowncity: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdownpolice: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
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
export default Track;
