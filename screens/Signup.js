import React from 'react';
import {useEffect, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

import axios from 'axios';
import DropDownPicker from "react-native-dropdown-picker";
import {BASE_URL, API_KEY} from '@env';
import {useForm, Controller} from 'react-hook-form'
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const Signup = ({navigation}) => {
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
//  const[userList,setuserList]= useState();
const [genderOpen, setgenderOpen] = useState();
const [genderValue, setgenderValue] = useState();
const [gender, setgender] = useState([
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
 
  { label: "Other", value: "Other" },
]);
  const {  control } = useForm();
  var Signup = () => {
    if(cnic== null ){
      alert ('Provide cnic')
    }
    else{
      firestore()
        .collection('Users')
        .where('cnic', '!=', cnic )
      //  alert('Cnic already registered')
        .get()
        .then((querySnapshot) => {
          if( cnic.length != 13){
            alert(' Incomplete CNIC')
              navigation.navigate("Signup")
          }
          if(querySnapshot.empty){
            alert('CNIC already registered ')
              navigation.navigate("Signup")
          }
          else{
            // Login successful
            querySnapshot.forEach((documentSnapshot) => {
              const user = documentSnapshot.data();
              // alert('Welcome ');
              // navigation.navigate("Login")
            });
          }
        })
        .catch((error) => {
          alert('Error: ' + error);
        });
    }
    {
     
      navigation.navigate('Screen2',{  
        name: name,
        cnic:cnic,
        genderValue:genderValue,
        email: email,

       })
    }

  }
  var CnicChk = () => {
  
  }



  return (
    <View style={{alignItems: 'center', width: 400}}>
      <Image
        source={require('../images/logo.png')}
        style={{
          width: 170,
          height: 100,

          alignContent: 'center',
          marginTop: 0,
        }}
      />

      <View
        style={{
          height: 400,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 0,
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 0}}>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>
            Create{' '}
          </Text>
        </View>
        <View style={{marginBottom: 19}}>
          <Text style={{color: 'grey', fontSize: 14}}>
            Your account in few steps{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1, marginLeft: 80}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -10,
                width: 30,
                height: 30,

                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'white', marginTop: 0, fontSize: 15}}>
                1
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, marginLeft: 60}}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: 30,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() =>navigation.navigate('Screen2')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3, marginLeft: 70}}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

                alignItems: 'center',

                borderRadius: 3,
                marginLeft: 25,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() =>navigation.navigate('Screen3')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>3</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            width: '100%',
            marginR: 100,
            borderRadius: 5,
            marginBottom: 30,
            height: 510,
          }}>
        
            <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              FULL NAME
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 2,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:10,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={name}
              onChangeText={(setname)  
            }
              placeholder="Enter Name"
              // secureTextEntry={true}
            />
 <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
             EMAIL
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 2,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={email}
              onChangeText={(setemail)  
            }
              placeholder="Enter Email"
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
                
              CNIC
            </Text>
      

<TextInput
           
           style={{
             borderRadius: 10,
             color: darkGreen,
             marginLeft: 2,
             marginBottom:30,
             paddingHorizontal: 10,
             width: 350,
             height:50,
             backgroundColor: 'white',
             marginVertical: 10,
           }}
           placeholderTextColor="grey"
           value={cnic}
           onChangeText={(setcnic) }
          
           placeholder="Enter CNIC (Without dashes)"
           keyboardType={'numeric'}
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
                
              GENDER
            </Text>
            <Controller
        name="gender"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={genderOpen}
              value={genderValue} //genderValue
              items={gender}
              setOpen={setgenderOpen}
              setValue={setgenderValue}
              setItems={setgender}
              placeholder="Select gender"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="DOWN"
              onChangeValue={onChange}
              zIndex={30}
              zIndexInverse={40}
            />
          </View>
        )}
      />
           
      
        </View>

        <View style={{marginLeft: 280, marginTop: -16}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 50,
              width: 80,
              height: 35,
              alignItems: 'center',
            }}
         onPress={Signup}
          >
            <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
            NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    width:"77%",
    marginBottom: 15,
    marginLeft:-2,
    borderRadius: 7,
    marginTop:10,
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
export default Signup;
