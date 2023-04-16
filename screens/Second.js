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

const Second = ({props, navigation}) => {
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
          <View style={{marginTop:12, marginBottom:19,alignSelf: 'center'}}>
          <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
            {/* <TouchableOpacity>
              <Image
                source={require('../images/menu.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              />
            </TouchableOpacity> */}
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
                <View style={{marginBottom:0}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    >
             <View style={{backgroundColor:'#007711', width:50,height:50, marginLeft:19, marginTop:72, borderRadius:30}}>
             </View>
          <TouchableOpacity     onPress={() => navigation.navigate("Home")} >
          <Image
                source={require('../images/user.png')}
                style={{
                  width: 27,
                  height: 27,
                  marginLeft: 29.8,

                  marginTop:-39,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity     onPress={() => navigation.navigate("Home")}>
         <Text style={{color:'black', fontSize:24, fontWeight:"bold", width:183, marginLeft:100,marginTop:-44}}>INLAND CITIZEN</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#b8d9bd', width:35,height:35, marginLeft:329, marginTop:-42, borderRadius:30}}>
             </View>
          <TouchableOpacity     onPress={() => navigation.navigate("Home")}>
          <Image
                source={require('../images/arrow1.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 339.8,

                  marginTop:-26,
                }}
              />
          </TouchableOpacity>
          </TouchableOpacity>

          </View>
          <View style={{marginLeft:0,marginTop:28,width:400,height:1.5,backgroundColor:'#e1e2e2'}}></View>
          <View style={{marginTop:-44}}>
            <TouchableOpacity   onPress={() => navigation.navigate("Alogin")}>
             <View style={{backgroundColor:'#ffc600', width:50,height:50, marginLeft:19, marginTop:72, borderRadius:30}}>
             </View>
          <TouchableOpacity  onPress={() => navigation.navigate("Alogin")}>
          <Image
                source={require('../images/admin.png')}
                style={{
                  width: 39,
                  height: 39,
                  marginLeft: 23.8,

                  marginTop:-43,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("Alogin")}>
         <Text style={{color:'black', fontSize:24, fontWeight:"bold", width:183, marginLeft:100,marginTop:-44}}>ADMIN</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#ffe899', width:35,height:35, marginLeft:329, marginTop:-42, borderRadius:30}}>
             </View>
          <TouchableOpacity  onPress={() => navigation.navigate("Alogin")}>
          <Image
                source={require('../images/arrow1.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 339.8,

                  marginTop:-26,
                }}
              />
          </TouchableOpacity>
          
          </TouchableOpacity>
          </View>
          <View style={{marginLeft:0,marginTop:28,width:400,height:1.5,backgroundColor:'#e1e2e2'}}></View>
          <View style={{marginTop:-44}}>
            <TouchableOpacity>
             <View style={{backgroundColor:'#38bdbb', width:50,height:50, marginLeft:19, marginTop:72, borderRadius:30}}>
             </View>
          <TouchableOpacity onPress={() => navigation.navigate("ITP")}>
          <Image
                source={require('../images/team.png')}
                style={{
                  width:37,
                  height: 37,
                  marginLeft: 25.1,

                  marginTop:-43,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ITP")}>
         <Text style={{color:'black', fontSize:24, fontWeight:"bold", width:183, marginLeft:100,marginTop:-44}}>ITP</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#b3e6e5', width:35,height:35, marginLeft:329, marginTop:-42, borderRadius:30}}>
             </View>
          <TouchableOpacity onPress={() => navigation.navigate("ITP")}>
          <Image
                source={require('../images/arrow3.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 339.8,

                  marginTop:-26,
                }}
              />
          </TouchableOpacity>
          
          </TouchableOpacity>
          </View>
          <Image
                source={require('../images/n.jpg')}
                style={{
                  width: 400,
                  height: 105,
                  marginLeft: -3.8,

                  marginTop:300,
                }}
              />

          </View>

      
        
        
        </View>
      </View>
    </Back3>
  );
};

export default Second;
