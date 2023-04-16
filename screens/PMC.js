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
} from 'react-native';
import Back3 from './Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const PMC = ({navigation}) => {
  const [name, setname] = useState();
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
        <TouchableOpacity>
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
          <Text style={{color: 'white', fontSize: 19, fontWeight:'bold'}}>
        Profile Management
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
              onPress={() => navigation.navigate('PM')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15, fontWeight:'bold'}}>
              PERSONAL
              </Text>
           
            </TouchableOpacity>
         
          </View>
          <View style={{flex: 2, marginLeft: 60, }}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

              
                marginTop:22,
                marginLeft: 30,
                width: 300,
                height: 30,
                //  marginRight:50,
                
                //  marginRight:140
              }}
             >
              <Text style={{color: '#10942e', fontSize: 15, fontWeight:'bold'}}>CONTACT</Text>
            </TouchableOpacity>
            <View style={{width:400, marginLeft:-29,marginTop:-7}}>
                <TouchableOpacity   onPress={() =>navigation.navigate('Signup')}>
            <Text style={{color:'#10942e'}}>---------------------------------------------------------------</Text>
            </TouchableOpacity>
          
            </View>
          </View>
             
        </View>
        <ScrollView style={{}}>
            <View style={{
alignItems:'center',
marginLeft:150,
                width:90,
                height:87,
                 backgroundColor:'black',
                 borderRadius:55,
                
            }}>
           <View style={{marginTop:60,marginLeft:49
        }}>
            <TouchableOpacity>
            <Image
        source={require('../images/up.png')}
        style={{
          
          width: 40,
          height:40,

          alignContent: 'center',
          marginTop: 0,
        }}
      />
            </TouchableOpacity>
           </View>
            </View>
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              FULL NAME
            </Text>

            <TextInput
           
              style={{
                borderRadius: 100,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 360,
                backgroundColor: 'rgb(220,220, 220)',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={name}
              onChangeText={setname}
              placeholder="Enter Name"
              // secureTextEntry={true}
            />

            {/* <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>2</Text> */}

            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}

            {/* <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>3</Text> */}
            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}
            {/* 
          <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>4</Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
           <Text style={{color:'#10942e',fontWeight:'bold',marginLeft:10 , fontSize:14 }}>5</Text>
           <Field
            placeholder="Enter CNIC"
            
          /> */}
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
            {/* <DropDownPicker style={{borderRadius: 100, color: darkGreen, marginLeft:2,paddingHorizontal: 10, width: 355, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, label:'Select 1'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}

            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
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
                
               DISCRICT
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
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
                
              City
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
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
                
               Area Police Station
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
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
                
               QUALIFICATION
            </Text>
            <Field
             placeholderTextColor="grey"
              placeholder=" Enter CNIC  (without dashes)"
              value={cnic}
              onChangeText={setcnic}
              keyboardType={'numeric'}
              
            />
            {/* <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              Password
            </Text>
            <Field
              placeholder="Password"
              value={password}
              onChangeText={setpassword}
              secureTextEntry={true}
            />
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              Confirm Password
            </Text>
            <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
            {/* <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
        </ScrollView>
        </View>
  
        <View style={{marginLeft: 280, }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 50,
              width: 80,
              height: 35,
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('UserPanel')}>
            <Text style={{color: 'white', fontSize: 15, marginTop: 6, fontWeight:'bold'}}>
          UPDATE
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </Back3>
  );
};

export default PMC;
