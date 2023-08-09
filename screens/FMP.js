import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form'
import Geolocation from '@react-native-community/geolocation';

import { Linking } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

import {
  View,
  StyleSheet,
  Text,
  Touchable,
  Pressable,
  ScrollView,  Keyboard,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import storage from '@react-native-firebase/storage'
import {darkGreen} from './constants';
import { StorageKeys } from '../Data/StorageKeys';

import AsyncStorage from '@react-native-async-storage/async-storage'


import {Image} from 'react-native';

const FMP = ({navigation}) => {
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
  const [name, setname] = useState();
  const [Address, setAddress] = useState('');
  const [date, setDate] = useState();
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [cnic, setcnic] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [btnStat, seBtnStat] = React.useState(true);
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [Relation, setRelation] = useState();
let FIRDATA={
  name:name,
  cnic:cnic,
   contact:contact,
   Relation :Relation,
  disValue:districtValue,
  cityValue:cityValue,
  policeValue:policeValue,
  description:description,
}


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
    if (name == null) {
      seBtnStat(true);
    } else {
      seBtnStat(false);
    }
  }, [name]);

  //useEffect
  useEffect(() => {
    AsyncStorage.getItem(StorageKeys.CurrentUser)
      .then(data => {
        if (data != null) {
          const us = JSON.parse(data);
          console.log('user is : ', us);
          setcnic(us.cnic);
        }
      })
      .catch(error => console.log(error));

    Geolocation.getCurrentPosition(
      position => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 1000},
    );
  }, []);

// const Latitude = `${Location.latitude}`
// const Longitude = `${Location.longitude}`
 
//   Latitude = `${position.coords.latitude}`
//   Longitude = `${position.coords.longitude}`
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
const datemodvisiblefalse = () => {
  setDateModalVisible(false);
};
  
  var RMV= () => {
    setIsLoading(true);

    {
     
      navigation.navigate('FMPB',{  
        name: name,
        cnic:cnic,
        contact: contact,
        Address:Address,
       Relation:Relation,
       selectedDate:selectedDate,
        districtValue:districtValue,
        cityValue:cityValue,
        policeValue:policeValue,
       latitude : latitude,
       longitude: longitude
       })
    }
    setIsLoading(false);

    // alert(latitude)
  }

 
 
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

var GoBack = () => { 
    navigation.goBack();
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
        <Pressable
         onPress={GoBack}>
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
      </Pressable>
      </View>
        <View style={{marginBottom: 19, marginTop:-35}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight:'bold'}}>
      REPORT MISSING PERSON
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
            <Pressable
              style={{
               
marginTop:22,
                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -40,
                width: 100,
                // height: 30,

                // paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('RMP')}>
              <Text style={{color: '#10942e', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
             CASE REGISTERER
              </Text>
           
            </Pressable>
            <View style={{width:400, marginLeft:-79}}>
                <Pressable   onPress={() =>navigation.navigate('RMP')}>
            <Text style={{color:'#10942e'}}>-----------------------------------------------</Text>
            </Pressable>
          
            </View>
          </View>
          <View style={{flex: 2, marginLeft: 60, }}>
            <Pressable
              style={{
                //  backgroundColor:'black',

              
                marginTop:22,
                marginLeft: 20,
                width: 300,
                height: 30,
                //  marginRight:50,
                
                //  marginRight:140
              }}
              onPress={RMV}
              >
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>M.PERSON INFORMATION</Text>
            </Pressable>
            
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
             
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
             
                backgroundColor: '#eceded',
                paddingHorizontal: 10,
                marginBottom:30,
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
              onChangeText={(cnic) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setcnic(cnic);
                
            }}
            keyboardType={'numeric'}
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
              onChangeText={(contact) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setcontact(contact);
            }}
              placeholder="Enter Phone Number"
              keyboardType={'numeric'}
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

                <Pressable
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
                </Pressable>
              </View>
        
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
                // marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             LOCATION
            </Text>
            <Pressable    onPress={Location} >           
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
               ' {longitude}' + '{latitude}'
                </Text>
              
              </View>
            </Pressable>
       <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
           SELECT NEAREST POLICE STATION
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
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
          Home Address
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
              value={Address}
              onChangeText={(Address) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setAddress(Address);
            }}
              placeholder="Enter your Home Address"
            //   keyboardType={'numeric'}
            />
           
        </ScrollView>
        {isKeyboardActive ? (
              <Text style={{height:180}}></Text>
            ) : (
              null
            )}
        </View>
       
  
        <View style={{marginLeft: 280,marginTop:-20 }}>
          <Pressable
           disabled={btnStat}
           style={{
            backgroundColor: !btnStat ? '#10942e' : 'grey',
            borderRadius: 10,
            width: 80,
            height: 35,
            alignItems: 'center',
          }}
          onPress={() => {
            RMV();
          }}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
                NEXT
              </Text>
            )}
        
         
         
          </Pressable>
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
export default FMP;
