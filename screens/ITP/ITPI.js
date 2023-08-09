import React from 'react';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-modern-datepicker';

import {useForm, Controller} from 'react-hook-form';

import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import firestore from '@react-native-firebase/firestore';

import DropDownPicker from 'react-native-dropdown-picker';



const ITPI = ({navigation}) => {
  const [AdminRemarks, setAdminRemarks] = useState("No Remarks Yet");
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
//   generate id code
//   let randomNumber = Math.floor(Math.random() * 10000000);
// while(randomNumber < 1000000) {
//   randomNumber = Math.floor(Math.random() * 10000000);
// }
// console.log(randomNumber);
  const [CaseInformation, setCaseInformation] = useState();
  const [date, setDate] = useState();
  const currentDate = new Date(); // create a new Date object with current date and time
  const year = currentDate.getFullYear(); // get the current year (YYYY)
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // get the current month (MM) and add leading zero if necessary
  const day = currentDate.getDate().toString().padStart(2, '0'); // get the current day (DD) and add leading zero if necessary
  const formattedDate = `${year}-${month}-${day}`; // combine the year, month, and day in the desired format

  const [selectedDate, setSelectedDate] = useState(formattedDate);

  const [dateModalVisible, setDateModalVisible] = useState(false);

  const datemodvisible = () => {
    setDateModalVisible(true);
  };
  const currentTime = new Date();
 const formattedTime =  currentTime.getHours() + ":" 
 + currentTime.getMinutes()
 const [selectedTime, setSelectedTime] = useState(formattedTime);
  const datemodvisiblefalse = () => {
    setDateModalVisible(false);
  };
  const {control} = useForm();
//   const  [ID, setID] = useState();
  const [trackOpen, settrackOpen] = useState();
  const [trackValue, settrackValue] = useState();
  const [track, settrack] = useState([
    // {label: 'Stage:0 "0 Percent Completion"', value: 'Stage:0 "0 Percent Completion"'},
    {label: 'Stage:1 "30 Percent Completion"', value: 'Stage:1 "30 Percent Completion"'},
    {label: 'Stage:2 "60 Percent Completion"', value: 'Stage:2 "60 Percent Completion"'},
    {label: 'Stage:3 "90 Percent Completion"', value: 'Stage:3 "90 Percent Completion"'},
    {label: 'Stage:4 Case Completed', value: 'Stage:4 Case Completed'},
  ]);
  let randomNumber = Math.floor(Math.random() * 10000000);
while(randomNumber < 1000000) {
  randomNumber = Math.floor(Math.random() * 10000000);
}
console.log(randomNumber);
const ID =  randomNumber;
  var ITPI = firestore().collection('ITPI');

//   useEffect(() => {
//     var Dataa = async () => {
//       await RMV.get().then(data => {
//         setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
     
//       });
//     };
//     Dataa();
//   });

var Update = async(item) => {

    if(selectedDate == null || selectedTime == null || CaseInformation == null || trackValue == null )
    {
alert ('Fill the form')
    }
else{
    firestore()
    .collection('ITPI')
    .where('trackValue', '==', trackValue)
    .doc(item.id)
    .update({
        selectedDate:selectedDate,
        selectedTime:selectedTime,
       
        CaseInformation:CaseInformation,
        trackValue:trackValue
    })
    .then((querySnapshot) => {
        if(querySnapshot.empty){
         alert('Cannot update')
        }
        else{
          
          querySnapshot.forEach((documentSnapshot) => {
            const user = documentSnapshot.data();
            alert('Welcome ');
            // navigation.navigate("UserPanel")
          })
          .catch((er)=>{
            console.log(er)
          });
        }
      })
}
    
 
    }
  var Accept = () => {

    if(selectedDate == null || selectedTime == null || CaseInformation == null || trackValue == null  ||  ID == null)
    {
alert ('Fill the form')
    }
else{
    firestore()
      .collection('ITPI')
      .add({
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        CaseInformation:CaseInformation,
        trackValue:trackValue,
        AdminRemarks:AdminRemarks,
        
        ID: ID,
      
      })
      .then(() => {
        alert('Submitted Successfully');
        navigation.navigate('ITPVAC')
      }).catch(()=>{
        alert('error')
      });
}
    
  

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
            <TouchableOpacity
                >
              {/* <Image
                source={require('../../images/menu.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              /> */}
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 15, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
           PROVIDE INFORMATION
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              {/* <Image
                source={require('../../images/loout.png')}
                style={{
                  width: 30,
                  height: 27,
                  marginLeft: 320,
                
                  marginTop:-44,
                }}
              /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

            //   marginBottom: 30,
              height: 650,
            }}>
                <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 18,
                  fontSize: 14,
                  name: 'cnic',
                  marginTop:30
                }}>
                Date
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 15,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    marginVertical: 14,
                    color: 'grey',
                    height: 20,
                  }}>
                  {selectedDate}
                </Text>

              </View>
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 18,
                  fontSize: 14,
                  name: 'cnic',
                //   marginTop:30
                }}>
                Time
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 15,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    marginVertical: 14,
                    color: 'grey',
                    height: 20,
                  }}>
                  {selectedTime}
                </Text>

             
              </View>
              
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 18,
                  marginBottom:13,
                  fontSize: 14,
                  name: 'cnic',
                //   marginTop:30
                }}>
               Case Information
              </Text>
              <View style={{
                  borderRadius: 10,
                  marginLeft: 12,
                  // paddingHorizontal: 10,
                  width: 350,
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
                value={CaseInformation}
                onChangeText={
               
                  setCaseInformation
                }
                //     : setAddBtnState(false);
                //   setcnic(cnic);
                // }}
                placeholder=" Provide brief description of your working on case and  provide information "
                style={{  color: 'green',
                
                color: 'black',
                borderRadius: 10,
                marginLeft: -2,
                // paddingHorizontal: 10,
                width: 350,
                height: 150,
              
                // marginVertical: 10,
                // borderColor:'green',
                marginTop:-50
            ,}}
            multiline={true}
                // secureTextEntry={true}
              />
              </View>
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop:15,
                  fontSize: 14,
                  name: 'cnic',
                }}>
               Tracking Status
              </Text>
              <Controller
                name="track"
                defaultValue="Not yet Started"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.dropdownGender}>
                    <DropDownPicker
                      style={styles.dropdown}
                      open={trackOpen}
                      value={trackValue} //genderValue
                      items={track}
                      setOpen={settrackOpen}
                      setValue={settrackValue}
                      setItems={settrack}
                      placeholder="Select Work Tracking Status"
                      placeholderStyle={styles.placeholderStyles}
                      dropDownDirection="TOP"
                      onChangeValue={onChange}
                      zIndex={6}
                      zIndexInverse={16}
                    />
                  </View>
                )}
              />
              <View style={{}}>
                  <TouchableOpacity
            style={{
                alignSelf:'center',
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
            //   marginLeft: 14,
             marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'    

            }}
            
           onPress={Accept}
           
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
            SUBMIT
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
                alignSelf:'flex-end',
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              marginLeft: 62,

             marginTop:30,
              height: 50,
              alignItems: 'center',
              alignContent: 'center'    

            }}
            
           onPress={Update}
           
           >
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
            UPDATE
            </Text>
          </TouchableOpacity> */}
          </View>
          <TouchableOpacity
            style={{
                alignSelf:'center',
            //   backgroundColor: '#10942e',
            //   borderRadius: 10,
              width: 150,
              marginLeft: 402,
             marginTop:90,
              height: 50,
            //   alignItems: 'center',
            //   alignContent: 'center'    

            }}
            onPress={() => navigation.navigate('ITPreview')}
         
           >
            <Text style={{color: 'green', fontSize:14, marginTop: 11, fontWeight:'bold'}}>
         Preview
            </Text>
          </TouchableOpacity>



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
    modalview: {
      height: '100%',
      width: '100%',
      backgroundColor: 'lightblue',
    },
  });
export default ITPI;
