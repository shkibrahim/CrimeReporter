import React from 'react';
import { Linking } from 'react-native';

import { useEffect, useState } from 'react';

import {
    View,
    Text,
    Touchable,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';


const ITPcall = ({ navigation }) => {
    let phoneNumber = '+923045101971'; // Replace with the phone number you want to send the message to

    let url = `whatsapp://send?phone=${phoneNumber}`;

    Linking.openURL(url)
        .then((data) => {
            console.log('WhatsApp Opened');
        })
        .catch(() => {
            alert('Make sure WhatsApp is installed on your device');
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
                    <View style={{ marginTop: 90, marginLeft: -119 }}><Text style={{ color: 'red', fontWeight: 'bold', fontSize: 40, fontFamily: 'Impact' }}>Go Back To Call Again</Text></View>




                </View>
            </View>












        </View>



    );
};

export default ITPcall;