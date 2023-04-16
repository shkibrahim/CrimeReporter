import React from 'react';
import { Linking } from 'react-native';

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


const ITPzoom = ({ navigation }) => {
    let url = 'https://zoom.us/'; // Replace with the website URL you want to open

    Linking.canOpenURL(url).then((supported) => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log(`Don't know how to open URI: ${url}`);
        }
    });





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

export default ITPzoom;