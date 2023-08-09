import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form'
import Geolocation from '@react-native-community/geolocation';

import DropDownPicker from "react-native-dropdown-picker";
import { Linking } from 'react-native';

import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,Keyboard,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Back3 from './Back3';

import {darkGreen} from './constants';


import {Image} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { StorageKeys } from '../Data/StorageKeys';

import AsyncStorage from '@react-native-async-storage/async-storage'
import storage from '@react-native-firebase/storage';
const Rcomplaint = ({navigation}) => {
  const [name, setname] = useState();
  const [longitude, setLongitude] = useState(null);
  const [Evidence, setEvidence] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [cnic, setcnic] = useState();
  const [imageUri, setImageUri] = useState(null);
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardActive(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardActive(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
let COMPLAINTDATA={
  name:name,
  cnic:cnic,
   contact:contact,

  crime:crimeValue,
  dis:districtValue,
  city:cityValue,
  police:policeValue,
  des:description,
}
const [date, setDate] = useState();

const currentDate = new Date(); // create a new Date object with current date and time
const year = currentDate.getFullYear(); // get the current year (YYYY)
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // get the current month (MM) and add leading zero if necessary
const day = currentDate.getDate().toString().padStart(2, '0'); // get the current day (DD) and add leading zero if necessary
const formattedDate = `${year}-${month}-${day}`; // combine the year, month, and day in the desired format

const [selectedDate, setSelectedDate] = useState(formattedDate);

const [dateModalVisible, setDateModalVisible] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const [selectedImage1, setSelectedImage1] = useState(null);

const [selectedImageUrl, setSelectedImageUrl] = useState('');
const [isLoading, setIsLoading] = useState(false);

const [btnStat, seBtnStat] = React.useState(true); 


useEffect(()=>{
  if(selectedImage==null){
  seBtnStat(true)
}
else{
  seBtnStat(false)
}
},[selectedImage])


const datemodvisible = () => {
  setDateModalVisible(true);
};
const datemodvisiblefalse = () => {
  setDateModalVisible(false);
};
// const pickImage = () => {
//   ImagePicker.launchImageLibrary({}, response => {
//     if (response.uri) {
//       setImageUri(response.uri);
//     }
//   });
function Location() {
  Geolocation.requestAuthorization();
Geolocation.getCurrentPosition(
  position => {
    // console.log(position.coords.latitude, position.coords.longitude);
    const label = 'CURRENT LOCATION'; // Replace with your label
    const url = `https://www.google.com/maps/search/?api=1&query=${position.coords.latitude},${position.coords.longitude}&query_place_id=${label}`;
    alert('LOCATION HAS BEEN SET')
    Linking.openURL(url);
  //   Latitude = `${position.coords.latitude}`
  //   Longitude = `${position.coords.longitude}`
  },
  error => {
    console.error(error);
  },
  { enableHighAccuracy: true, timeout: 3900, maximumAge: 1 }
);
}
useEffect(() => {
  AsyncStorage.getItem(StorageKeys.CurrentUser)
  .then((data) => {
    if (data != null) {
      const us=JSON.parse(data)
      console.log('user is : ',us)
      setcnic(us.cnic)
    }
  })
  .catch((error) => console.log(error));  


  Geolocation.getCurrentPosition(
    position => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    },
    error => console.log(error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}, []);
// };
  var Complaint =async () => {
    setIsLoading(true);

    const reference = storage().ref(selectedImage1.assets[0].fileName);
    const pathToFile = selectedImage;

    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(selectedImage1.assets[0].fileName)
      .getDownloadURL();
    setSelectedImageUrl(url);

    setIsLoading(false);
    
     
      navigation.navigate('Rcomplaints',{  name: name,
        cnic:cnic,
        contact: contact,
        crimeValue:crimeValue,
        districtValue:districtValue,
        selectedDate: selectedDate,
        longitude: longitude,
        latitude: latitude,
        Evidence:Evidence,
        cityValue:cityValue,
        victimValue: victimValue,
        policeValue:policeValue,
        description:description,})
    
    // console.log(crimeValue)
    // firestore()
    //   .collection('FIR')
    //   .add({
     
        
    //   })
    //   .then(() => {
    //     alert('User added!');
    //   }).catch(()=>{
    //     alert('error')
    //   });

      
  }


  const uploadtofbStorage = async () => {
    const reference = storage().ref(selectedImage1.assets[0].fileName);
    const pathToFile = selectedImage;

    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(selectedImage1.assets[0].fileName)
      .getDownloadURL();
    setSelectedImageUrl(url);
  };
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
        setSelectedImage1(response);
      }
    });
  };
 
 

  const [victimOpen, setvictimOpen] = useState();
  const [victimValue, setvictimValue] = useState();
  const [victim, setvictim] = useState([
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },

  ]);
  const [crimeOpen, setcrimeOpen] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [crime, setcrime] = useState([
    { label: "Woman Harrasement", value: "Woman Harrasement" },
    { label: "Document Lost", value: "Document Lost" },
    { label: "Street Fight", value: "Street Fight" },
    { label: "Land Accusation", value: "Land Accusation" },
  ]);
  const [districtOpen, setdistrictOpen] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [district, setdistrict] = useState([
    { label: "Rawalpindi", value: "Rawalpindi" },
    { label: "Murree", value: "Murree" },
    { label: "Rawat", value: "Rawat" },
  ]);
  const [cityOpen, setcityOpen] = useState();
  const [cityValue, setcityValue] = useState();
  const [city, setcity] = useState([
    { label: "Rwp", value: "Rawalpindi" },
    { label: "Isb", value: "city" },

  ]);
  const [policeOpen, setpoliceOpen] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [police, setpolice] = useState([
    { label: "New Town Police Station", value: "New Town Police Station" },
    { label: "Bani Police Station", value: "Bani Police Station" },

  ]);
  const [addBtnState, setAddBtnState] = useState(true);
    const [userList, setuserList] = useState([]);
  const {  control } = useForm();
  
//     // alert('click')
//     if ( name === '' && cnic === '' && crime === '' && district === '' && police === '' ) {
//       alert('click');
//     } else {
//         const userList = {
//             Sname: name,
//             Scnic: cnic,
//             Scontact: contact,
//             Sdescription: description,
//             Scrime: crime,
//             Scity: city,
//             Sdistrict: district,
//             Spolice: police
            
//         };

     

//         setuserList((oldList) => [...oldList, userList]);
//         setAddBtnState(true);
//         setname('');
//         setcnic('');
//         setcontact('');
//         setdescription('');
//         alert('Added not Successfully');
//         // setgender('');
//         console.log("---.",userList)
//      navigation.navigate('FIRS',{
//       userList,
//      })
//     }

// };

  


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
        <TouchableOpacity
         onPress={() => navigation.navigate('Complaints')}>
       <Image
        source={require('../images/arrow.png')}
        style={{
          width: 28,
          height: 38,
marginLeft:-175,
          paddingTop:12,
          marginTop: 12,

        }}
      />
      </TouchableOpacity>
      </View>
        <View style={{marginBottom: 19, marginTop:-35}}>
          <Text style={{color: 'white', fontSize: 29, fontWeight:'bold'}}>
      COMPLAINTS
          </Text>
        </View>
      
        <View
          style={{
            backgroundColor:'white',
           borderRadius:37,
          marginRight:9,
            width:390,
           
          
            marginBottom: 30,
            height:650,
          }}>
          {/* <ScrollView style={{backgroundColor:'white',borderRadius:37, width:390, marginLeft:-18}}> */}
          <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1, marginLeft: 80}}>
            <TouchableOpacity
              style={{
               
marginTop:22,
                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -40,
                width: 100,
                // height: 30,

                // paddingVertical: 5,
              }}
              onPress={() => props.navigation.navigate('PM')}>
              <Text style={{color: '#10942e', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
             CASE INFORMATION
              </Text>
           
            </TouchableOpacity>
            <View style={{width:400, marginLeft:-79}}>
                <TouchableOpacity   onPress={() =>navigation.navigate('Signup')}>
            <Text style={{color:'#10942e'}}>-----------------------------------------------</Text>
            </TouchableOpacity>
          
            </View>
          </View>
          <View style={{flex: 2, marginLeft: 60, }}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

              
                marginTop:22,
                marginLeft: 20,
                width: 300,
                height: 30,
                //  marginRight:50,
                
                //  marginRight:140
              }}
              onPress={Complaint}
              >
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>SUSPECT INFORMATION</Text>
            </TouchableOpacity>
            
          </View>
             
        </View>
        <ScrollView style={{}}>
       
           
            <Text
              style={{
                color: '#10942e',
                marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
              FULL NAME
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={name}
              onChangeText={(name) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setname(name);
            }}
              placeholder="Enter Name"
              // secureTextEntry={true}
            />
            <Text
              style={{
                color: '#10942e',
                marginTop:0,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
              CNIC
            </Text>

            <TextInput
             editable={false}
              style={{
                borderRadius: 10,
                color: 'grey',
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={cnic}
              keyboardType='Numeric'
              onChangeText={(cnic) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setcnic(cnic);
            }}
              placeholder="Enter CNIC"
              // secureTextEntry={true}
            />
             <Text
              style={{
                color: '#10942e',
                marginTop:0,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
              CONTACT NO.
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={contact}
              keyboardType='Numeric'
              onChangeText={(contact) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setcontact(contact);
            }}
              placeholder="Enter Phone Number"
             
            />
             <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
                Date
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 10,
                  color: darkGreen,
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

                <TouchableOpacity
                  onPress={datemodvisible}
                  style={{marginLeft: 200, width: 50}}>
                  <Text
                    style={{
                      color: 'grey',
                      height: 20,
                      margin: 14,
                    }}>
                    [:::]
                  </Text>
                </TouchableOpacity>
              </View>

    <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
             ARE YOU THE VICTIM?
            </Text>
<Controller
        name="victim"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownvictim}>
            <DropDownPicker
              style={styles.dropdown}
              open={victimOpen}
              value={victimValue} //genderValue
              items={victim}
              setOpen={setvictimOpen}
              setValue={setvictimValue}
              setItems={setvictim}
              placeholder="Select "
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={30}
              zIndexInverse={40}
            />
          </View>
        )}
      />

            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
              CRIME TYPE
            </Text>
            <Controller
        name="crime"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={crimeOpen}
              value={crimeValue} //genderValue
              items={crime}
              setOpen={setcrimeOpen}
              setValue={setcrimeValue}
              setItems={setcrime}
              placeholder="Select Crime Type"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={6}
              zIndexInverse={16}
            />
          </View>
        )}
      />
         <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
            DISTRICT
            </Text>
            <Controller
        name="district"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdowndistrict}>
            <DropDownPicker
              style={styles.dropdown}
              open={districtOpen}
              value={districtValue} //genderValue
              items={district}
              setOpen={setdistrictOpen}
              setValue={setdistrictValue}
              setItems={setdistrict}
              placeholder="Select District"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={30}
              zIndexInverse={40}
            />
          </View>
        )}
      />
        <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
             CITY
            </Text>
            <Controller
        name="city"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdowncity}>
            <DropDownPicker
              style={styles.dropdown}
              open={cityOpen}
              value={cityValue} //genderValue
              items={city}
              setOpen={setcityOpen}
              setValue={setcityValue}
              setItems={setcity}
              placeholder="Select City"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={60}
              zIndexInverse={70}
            />
          </View>
        )}
      />
       <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
            POLICE STATION
            </Text>
            <Controller
        name="police"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownpolice}>
            <DropDownPicker
          dropDownDirection="TOP"
              style={styles.dropdown}
              open={policeOpen}
              value={policeValue} //genderValue
              items={police}
              setOpen={setpoliceOpen}
              setValue={setpoliceValue}
              setItems={setpolice}
              placeholder="Select Police Station"
              placeholderStyle={styles.placeholderStyles}
              
              onChangeValue={onChange}
              zIndex={100}
              zIndexInverse={110}
            />
          </View>
        )}
      />
        <Text
              style={{
                color: '#10942e',
                // marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             LOCATION
            </Text>
            <TouchableOpacity    onPress={Location} >           
              <View style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
            >  
                <Text style={{color:'grey', marginTop:12,}}>
               '{longitude}' + '{latitude}'
                </Text>
              
              </View>
            </TouchableOpacity>
       <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
          EVIDENCES
            </Text>
            <View style={{ flex: 1,
    alignItems: 'center',
    justifyContent: 'center',}}>
            {selectedImage && (
        <Image style={{ width: 200,
          height: 100,
          resizeMode: 'contain',
          marginBottom: 20,marginLeft:-300, marginTop:10}} source={{uri: selectedImage}} />
      )}</View>
            <TouchableOpacity   onPress= {handleGalleryPress} >
            {/* {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />} */}
              <View style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
            >  
                <Text style={{color:'grey', marginTop:12,}}>
                  Upload Evidences
                </Text>
                <Image
        source={require('../images/u.png')}
        style={{
          width: 28,
          height: 22,
marginLeft:295,
          paddingTop:12,
          marginTop: -19
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
                }}>EVIDENCE INCLUDE
              </Text>

              <TextInput
                style={{
                  borderRadius: 10,
                  color: darkGreen,
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
                value={Evidence}
                keyboardType="Numeric"
                onChangeText={Evidence => {
                  name === '' ||
                  cnic === '' ||
                  contact === '' ||
                  description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                  setEvidence(Evidence);
                }}
                placeholder="Enter Evidences"
              />
            <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
            DESCRIPTION
            </Text>

            <TextInput
           
              style={{
                textAlign:'left',
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:200,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={description}
              onChangeText={(description) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setdescription(description);
            }}
              placeholder="Describe the Scenario "
              // secureTextEntry={true}
            />
        </ScrollView>
        {isKeyboardActive ? (
              <Text style={{height:180}}></Text>
            ) : (
              null
            )}
        </View>
       
  
        <View style={{marginLeft: 280,marginTop:-20 }}>
        <TouchableOpacity
            disabled={btnStat}
              style={{
                backgroundColor: !btnStat?'#10942e' : 'grey',
                borderRadius: 10,
                width: 80,
                height: 35,
                alignItems: 'center',
              }}
              onPress={() => {
                Complaint();
              }}>
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
                NEXT
              </Text>
              )}
{/* 
              <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
                NEXT
              </Text> */}
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
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdowndistrict: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdownvictim: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdowncity: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdownpolice: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
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
export default Rcomplaint;
