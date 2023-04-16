import React from 'react';
import {useEffect, useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {useForm, Controller} from 'react-hook-form'

const Screen2 =({route,navigation})=> {

  const { email } = route.params;
  const { name } = route.params;
  const { cnic} = route.params;
  const { genderValue } = route.params;

const [districtOpen, setdistrictOpen] = useState(false);
  const [districtValue, setdistrictValue] = useState(null);
  const [district, setdistrict] = useState([
    { label: "Rwp", value: "Rwp" },
    { label: "Murree", value: "Murree" },
   
  ]);
  const [cityOpen, setcityOpen] = useState(false);
  const [cityValue, setcityValue] = useState(null);
  const [city, setcity] = useState([
    { label: "Rwp", value: "Rawalpindi" },
    { label: "Isb", value: "Isb" },

  ]);
  const {  control } = useForm();

  var Signup2 = () => {
    {
     
      navigation.navigate('Screen3',{  
        name: name,
        cnic:cnic,
        genderValue:genderValue,
        districtValue: districtValue,
        cityValue:cityValue,
        email:email,

       })
    }
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
                // backgroundColor: '#10942e',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -10,
                width: 30,
                height: 30,

                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>
                1
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, marginLeft: 60}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',

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
              <Text style={{color: 'white', marginTop: 0, fontSize: 15}}>2</Text>
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
              onPress={() => navigation.navigate('Screen3')}>
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
                marginTop:60,
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
              
              onChangeValue={onChange}
              zIndex={60}
              zIndexInverse={70}
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
            onPress={Signup2}>
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
  dropdowndistrict: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"78%",
    marginBottom: 15,
    marginLeft:0,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdowncity: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"78%",
    marginBottom: 15,
    marginLeft:0,
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
export default Screen2;
