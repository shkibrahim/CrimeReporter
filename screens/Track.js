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

  useEffect(() => {
    if (trackval === 'Accepted') {
      setclr({...setclr, bgcolor:'red',txtcolor:'white'});
    }
    if (trackval === 'Sent to Investigation Team') {
      setclr1({...setclr1, bgcolor:'red',txtcolor:'white'});
    }
    if (trackval === 'Case Proceeding Started') {
      setclr2({...setclr2, bgcolor:'red',txtcolor:'white'});
    }
    if (trackval === 'Case Closed') {
      setclr3({...setclr3, bgcolor:'red',txtcolor:'white'});
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

  const [clr, setclr] = useState ({bgcolor:'white' , txtcolor: "green"});
  const [clr1, setclr1] = useState ({bgcolor:'white' , txtcolor: "green"});
  const [clr2, setclr2] = useState ({bgcolor:'white' , txtcolor: "green"});
  const [clr3, setclr3] = useState ({bgcolor:'white' , txtcolor: "green"});
  const [btnstat, setBtnstat]=useState(true)
  // const [name, setname] = useState();
  // const [cnic, setcnic] = useState();
  // const [description, setdescription] = useState();
  // const [contact, setcontact] = useState();

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
            <TouchableOpacity onPress={() => navigation.navigate('Complaints')}>
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
          {/* <Text style={{color:'red', marginTop:-100}}>texr:{trackValue}</Text> */}
          <View style={{marginLeft: -90, marginTop: -650}}>
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
          </View>
          <View style={{marginLeft: -220, marginTop: 27}}>
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
