import React from 'react';
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
import Back3 from '../Back3';

import { Image } from 'react-native';

const ITPsuspect = ({ props, navigation }) => {
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
            <View style={{ alignItems: 'center', width: 400 }}>
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
                                source={require('../../images/menu.png')}
                                style={{
                                    width: 28,
                                    height: 38,
                                    marginLeft: -175,
                                    paddingTop: 12,
                                    marginTop: 12,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 19, marginTop: -35 }}>
                        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginLeft: -69 }}>
                            Call History
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require('../../images/loout.png')}
                                style={{
                                    width: 30,
                                    height: 27,
                                    marginLeft: 320,

                                    marginTop: -44,
                                }}
                            />
                        </TouchableOpacity>
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
                        <View style={{ marginBottom: 0 }}>
                            <TouchableOpacity

                            >
                                <View style={{ backgroundColor: '#007711', width: 50, height: 50, marginLeft: 19, marginTop: 72, borderRadius: 30 }}>
                                </View>
                                <TouchableOpacity >
                                    <Image
                                        source={require('../../images/user.png')}
                                        style={{
                                            width: 27,
                                            height: 27,
                                            marginLeft: 29.8,

                                            marginTop: -39,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold", width: 183, marginLeft: 100, marginTop: -44 }}>03045101971</Text>

                                </TouchableOpacity>

                                <TouchableOpacity >

                                </TouchableOpacity>
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginLeft: 0, marginTop: 30, width: 400, height: 1.5, backgroundColor: '#e1e2e2' }}></View>
                        <View style={{ marginTop: -44 }}>
                            <TouchableOpacity >
                                <View style={{ backgroundColor: '#007711', width: 50, height: 50, marginLeft: 19, marginTop: 72, borderRadius: 30 }}>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/user.png')}
                                        style={{
                                            width: 27,
                                            height: 27,
                                            marginLeft: 29.8,

                                            marginTop: -39,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold", width: 183, marginLeft: 100, marginTop: -44 }}>03124121121</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >

                                </TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 0, marginTop: 28, width: 400, height: 1.5, backgroundColor: '#e1e2e2' }}></View>
                        <View style={{ marginTop: -44 }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#007711', width: 50, height: 50, marginLeft: 19, marginTop: 72, borderRadius: 30 }}>
                                </View>
                                <TouchableOpacity >
                                    <Image
                                        source={require('../../images/user.png')}
                                        style={{
                                            width: 27,
                                            height: 27,
                                            marginLeft: 29.8,

                                            marginTop: -39,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold", width: 183, marginLeft: 100, marginTop: -44 }}>03121312321</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >

                                </TouchableOpacity>


                            </TouchableOpacity>

                        </View>
                        <View style={{ marginLeft: 0, marginTop: 30, width: 400, height: 1.5, backgroundColor: '#e1e2e2' }}></View>
                        <View style={{ marginTop: -44 }}>
                            <TouchableOpacity >
                                <View style={{ backgroundColor: '#007711', width: 50, height: 50, marginLeft: 19, marginTop: 72, borderRadius: 30 }}>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/user.png')}
                                        style={{
                                            width: 27,
                                            height: 27,
                                            marginLeft: 29.8,

                                            marginTop: -39,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold", width: 183, marginLeft: 100, marginTop: -44 }}>03124121121</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >

                                </TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 0, marginTop: 30, width: 400, height: 1.5, backgroundColor: '#e1e2e2' }}></View>
                        <View style={{ marginTop: -44 }}>
                            <TouchableOpacity >
                                <View style={{ backgroundColor: '#007711', width: 50, height: 50, marginLeft: 19, marginTop: 72, borderRadius: 30 }}>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../images/user.png')}
                                        style={{
                                            width: 27,
                                            height: 27,
                                            marginLeft: 29.8,

                                            marginTop: -39,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold", width: 183, marginLeft: 100, marginTop: -44 }}>03124121121</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >

                                </TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 0, marginTop: 30, width: 400, height: 1.5, backgroundColor: '#e1e2e2' }}></View>
                        <View style={{ marginTop: -44 }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#007711', width: 50, height: 50, marginLeft: 19, marginTop: 72, borderRadius: 30 }}>
                                </View>
                                <TouchableOpacity >
                                    <Image
                                        source={require('../../images/user.png')}
                                        style={{
                                            width: 27,
                                            height: 27,
                                            marginLeft: 29.8,

                                            marginTop: -39,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: 'black', fontSize: 24, fontWeight: "bold", width: 183, marginLeft: 100, marginTop: -44 }}>03124121121</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >

                                </TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 0, marginTop: 28, width: 400, height: 1.5, backgroundColor: '#e1e2e2' }}></View>




                        <Image
                            source={require('../../images/n.jpg')}
                            style={{
                                width: 400,
                                height: 105,
                                marginLeft: -3.8,

                                marginTop: 300,
                            }}
                        />

                    </View>




                </View>
            </View>
        </Back3>
    );
};

export default ITPsuspect;