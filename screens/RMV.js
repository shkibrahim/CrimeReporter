import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form'

import axios from 'axios';
import DropDownPicker from "react-native-dropdown-picker";
import {BASE_URL, API_KEY} from '@env';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';

import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const RMV = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
let FIRDATA={
  name:name,
  cnic:cnic,
   contact:contact,

  dis:districtValue,
  city:cityValue,
  police:policeValue,
  des:description,
}

  var RMV= () => {
    {
     
      navigation.navigate('RMVB',{  name: name,
        cnic:cnic,
        contact: contact,
       
        districtValue:districtValue,
        cityValue:cityValue,
        policeValue:policeValue,
        description:description,})
    }
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
//   const Save = () => {
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
          height: 400,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 0,
          alignItems: 'center',
        }}>
        <View>
        <TouchableOpacity
         onPress={() => navigation.navigate('FIR')}>
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
          <Text style={{color: 'white', fontSize: 20, fontWeight:'bold'}}>
      REPORT MISSING VEHICLES
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
              onPress={() =>navigation.navigate('RMVB')}
              >
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>VEHICLE INFORMATION</Text>
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
        </View>
       
  
        <View style={{marginLeft: 280,marginTop:-20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius:10,
              width: 80,
              height: 35,
              alignItems: 'center',
            }}
            onPress={RMV}
            // onPress={() =>{navigation.navigate('FIRS',{  name: name,
            //   cnic:cnic,
            //   contact: contact,
            //   crimeValue:crimeValue,
            //   districtValue:districtValue,
            //   cityValue:cityValue,
            //   policeValue:policeValue,
            //   description:description,})}}
            >
            <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
            NEXT
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
export default RMV;
