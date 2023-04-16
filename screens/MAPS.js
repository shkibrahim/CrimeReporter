import React from 'react';
import { Linking } from 'react-native';
import { Geolocation } from 'react-native';


import { useEffect, useState } from 'react';

import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import { BASE_URL, API_KEY } from '@env';
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
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import { darkGreen } from './constants';
import Field from './Field';
import { Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    SelectList,
    MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';


const MAPS = ({ navigation }) => {
    const latitude = 33.6518; // Replace with your latitude
    const longitude = 73.1566; // Replace with your longitude
    const label = 'Comstas Universty Islamabad'; // Replace with your label

    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${label}`;

    Linking.openURL(url);






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


        <View style={{ alignItems: 'center', width: 400 }}>
            <View
                style={{
                    height: 400,
                    width: 460,
                    borderTopLeftRadius: 130,
                    paddingTop: 0,
                    alignItems: 'center',
                }}>



                <View style={{ marginLeft: 170, marginTop: -18, marginRight: 170 }}>
                    <View style={{ marginTop: 90, marginLeft: -119 }}><Text style={{ color: 'red', fontWeight: 'bold', fontSize: 40, fontFamily: 'Impact' }}></Text></View>




                </View>
            </View>












        </View>



    );
};

export default MAPS;