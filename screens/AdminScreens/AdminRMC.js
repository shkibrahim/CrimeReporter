import React from 'react';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-modern-datepicker';

import {useForm, Controller} from 'react-hook-form';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  View,
  Text,
  StyleSheet,
  Touchable,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import firestore from '@react-native-firebase/firestore';

import DropDownPicker from 'react-native-dropdown-picker';



const AdminRMC = ({navigation}) => {
  const [AdminRemarks, setAdminRemarks] = useState("No Remarks Yet");
  const [cnic, setcnic] = useState();
  const [username, setusername] = useState();
  const [usercnic, setusercnic] = useState();
  const [usercontact, setcontact] = useState();
  const [name, setname] = useState();
  const [Location, setLocation] = useState();
  const [Bounty, setBounty] = useState();
  const [Crimes, setCrimes] = useState();
  const [UserInformation, setUserInformation] = useState('No Information');
  const [CriminalInformation, setCriminalInformation] = useState();
  const [Appearance, setAppearance] = useState();
 
const [selectedImage, setSelectedImage] = useState(null);

const launchCam=()=>{
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    saveToPhotos: true,
  };
  
  launchCamera(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      console.log("launch success")
      setSelectedImage(response.assets[0].uri);
    }
  });
}

const handleGalleryPress = () => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
  };

  launchImageLibrary(options, response => {
    if (response.assets) {
      setSelectedImage(response.assets[0].uri);
    }
  });
}
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
    {label: 'Stage:4 "Case Completed"', value: 'Stage:4 "Case Completed"'},
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

var Accept = () => {

    if(selectedDate == null || selectedTime == null || CriminalInformation == null || name == null  || cnic == null  || Appearance == null || Crimes == null || Bounty == null || Location == null)
    {
alert ('Fill the form')
    }
else{
    firestore()
      .collection('MISSINGCRIMINALNOTIFICATION')
      .add({
        name: name,
        usercnic:'...',
       
        UserInformation: '...',
        cnic:cnic,
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        CriminalInformation:CriminalInformation,
        Appearance:Appearance,
        Crimes:Crimes,
        Bounty:Bounty,
        username:'...',
        usercontact:'...',
       
        Location:Location
      
      })
      .then(() => {
        alert('Successful!');
       
      }).catch(()=>{
        alert('error')
      });

    }
    
 
    }
//   var Accept = () => {

//     if(selectedDate == null || selectedTime == null || CaseInformation == null || trackValue == null  ||  ID == null)
//     {
// alert ('Fill the form')
//     }
// else{
//     firestore()
//       .collection('ITPI')
//       .add({
//         selectedDate:selectedDate,
//         selectedTime:selectedTime,
//         CaseInformation:CaseInformation,
//         trackValue:trackValue,
//         AdminRemarks:AdminRemarks,
        
//         ID: ID,
      
//       })
//       .then(() => {
//         alert('Submitted Successfully');
//         navigation.navigate('ITSW')
//       }).catch(()=>{
//         alert('error')
//       });
// }
    
  

//     }
    
  
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
          
          <View style={{marginBottom: 15, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
           POST MISSING CRIMINAL
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

            //   marginBottom: 130,
              height: 550,
            }}>
            <ScrollView style={{}}>
            <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
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
                  marginBottom: 30,
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
                  marginTop: 15,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                Criminal Name
              </Text>

              <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,

                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',

                  backgroundColor: '#eceded',
                  paddingHorizontal: 10,
                  marginBottom: 30,
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={name}
                onChangeText={name => {
                  name === '' ||
                  cnic === '' ||
              
                  
                  setname(name);
                }}
                placeholder="Enter Name"
                // secureTextEntry={true}
              />
              <Text
                style={{
                  color: '#10942e',
                  marginTop: 0,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
               Criminal Cnic
              </Text>

              <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={cnic}
                keyboardType='Numeric'
                onChangeText={cnic => {
                  name === '' ||
                  cnic === '' ||
               
                  setcnic(cnic);
                }}
                placeholder="Enter CNIC"
                // secureTextEntry={true}
              />
              
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
              Criminal Images
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {selectedImage && (
                  <Image
                    style={{
                      width: 200,
                      height: 100,
                      resizeMode: 'contain',
                      marginBottom: 20,
                      marginLeft: -300,
                      marginTop: 10,
                    }}
                    source={{uri: selectedImage}}
                  />
                )}
              </View>
              <TouchableOpacity onPress={handleGalleryPress}>
                <View
                  style={{
                    borderRadius: 10,
                    color: 'black',
                    marginLeft: 12,
                    paddingHorizontal: 10,
                    width: 350,
                    height: 50,
                    borderColor: '#B7B7B7',
                    marginBottom: 30,
                    backgroundColor: '#eceded',
                    marginVertical: 10,
                  }}>
                  <Text style={{color: 'grey', marginTop: 12}}>
                    Upload Images
                  </Text>
                  <Image
                    source={require('../../images/u.png')}
                    style={{
                      width: 28,
                      height: 22,
                      marginLeft: 295,
                      paddingTop: 12,
                      marginTop: -19,
                    }}
                  />
                </View>
            
              </TouchableOpacity>
              <Text
                style={{
                  color: '#10942e',
                  marginTop: 0,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                  marginVertical: 10,
                }}>
              Criminal Information
              </Text>

              <View style={{
                  borderRadius: 10,
                  marginLeft: 12,
                  // paddingHorizontal: 10,
                  width: 350,
                  height: 150,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',}}>
              <TextInput
               
                placeholderTextColor="grey"
             
                value={CriminalInformation}
                onChangeText={
               
                  setCriminalInformation
                }
             
                placeholder=" Provide Criminal Information "
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
                  fontSize: 14,
                  name: 'cnic',
                }}>
                Appearance of Criminal
              </Text>
             
              <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 70,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={Appearance}
                // keyboardType='Numeric'
                onChangeText={
               
                    setAppearance
                  }
               
                placeholder="Enter Appearance of Criminal"
                // secureTextEntry={true}
              />
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
              Crimes Involved In
              </Text>
              <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 70,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={Crimes}
                // keyboardType='Numeric'
                onChangeText={
               
                    setCrimes
                  }
               
                placeholder="Crimes"
                // secureTextEntry={true}
              />
              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
               Bounty on Criminal
              </Text>
              <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={Bounty}
                keyboardType='Numeric'
                onChangeText={
               
                    setBounty
                  }
               
                placeholder="Enter Bounty announced on Criminal"
                // secureTextEntry={true}
              />
               
         <Text
              style={{
                color: '#10942e',
                // marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             Last Seen at
            </Text>
            <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={Location}
                // keyboardType='Numeric'
                onChangeText={
               
                    setLocation
                  }
               
                placeholder="Enter last location of Criminal"
                // secureTextEntry={true}
              />
             
             

             
            </ScrollView>
              </View>
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
export default AdminRMC;
