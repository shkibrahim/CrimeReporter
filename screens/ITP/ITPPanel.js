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
import Back3 from '../Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from '../Background';
import Backround2 from '../Backround2';
import Btn from '../Btn';
import {darkGreen} from '../constants';
import Field from '../Field';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from '../Home';
import Screen1 from '../Screen1';

import Complaints from '../Complaints';
const ITPPanel = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [password, setpassword] = useState();

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
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
          <View style={{marginBottom: 19, marginTop: -35}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              INVESTIGATION TEAM PANEL
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('VRF')}>
              <Image
                source={require('../../images/icon.png')}
                style={{
                  width: 40,
                  height: 47,
                  marginLeft: 320,

                  marginTop: -54,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',

              borderRadius: 0,
              marginRight: 9,
              width: 390,

              marginBottom: 20,
              height: 670,
            }}>
            <View style={{marginLeft: 170, marginTop: -18}}>
              <View>
                <Image
                  source={require('../../images/p.png')}
                  style={{
                    width: 400,

                    height: 260,
                    marginLeft: -174,
                    paddingTop: 12,
                    marginTop: 12,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../images/logo1.png')}
                  style={{
                    width: 90,
                    borderRadius: 0,
                    height: 80,
                    marginLeft: -160,
                    paddingTop: 12,
                    marginTop: -249,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../../images/text.png')}
                  style={{
                    width: 410,
                    borderRadius: 0,
                    height: 620,
                    marginLeft: -220,

                    marginTop: -320,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{marginTop: -480, marginLeft: -280}}></View>

          <View style={{marginLeft: 300, marginTop: -18}}></View>

          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 12}}>
            <View style={{flex: 1, marginLeft: 73}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#c0e4c9',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -31,
                  width: 367,
                  height: 200,

                  // paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('VCS')}>
                <Image
                  source={require('../../images/vc.jpg')}
                  style={{
                    borderRadius: 17,
                    width: 370,
                    height: 200,

                    marginTop: 0,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 200,
              marginBottom: 20,
              marginTop: -5,
            }}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f9d0d0',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 13,
                  width: 367,
                  height: 200,
                }}
                onPress={() => navigation.navigate('ITPVAC')}>
                <Image
                  source={require('../../images/va.jpg')}
                  style={{
                    borderRadius: 20,
                    width: 370,
                    height: 200,

                    marginTop: 0,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: 430,
              height: 70,
              marginTop: 40,
              marginLeft: -8,
              borderRadius: 17,
              backgroundColor: '#007711',
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  source={require('../../images/home.png')}
                  style={{
                    width: 40,
                    borderRadius: 0,
                    height: 70,
                    marginLeft: 50,
                    paddingTop: 12,
                    marginTop: -9,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require('../../images/sea.png')}
                  style={{
                    width: 40,
                    borderRadius: 0,
                    height: 70,
                    marginLeft: 120,
                    paddingTop: 12,
                    marginTop: -67,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  source={require('../../images/settin.png')}
                  style={{
                    width: 60,
                    borderRadius: 0,
                    height: 100,
                    marginLeft: 267,

                    marginTop: -87,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 430,
          height: 20,
          backgroundColor: 'white',
          marginTop: 310,
          marginLeft: -8,
          borderRadius: 17,
        }}></View>
      <View
        style={{
          backgroundColor: '#007711',
          width: 56,
          height: 55,
          borderRadius: 40,
          marginLeft: 170,
          marginTop: -20,
        }}></View>
      <TouchableOpacity style={{marginLeft: 250, marginTop: -50}}>
        <Image
          source={require('../../images/view.png')}
          style={{
            width: 35,
            borderRadius: 0,
            height: 33,
            marginLeft: -70,
            paddingTop: 12,
            marginTop: 10,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: 'white',
          width: 35,
          height: 35,
          borderRadius: 40,
          marginLeft: 332,
          marginTop: -14,
        }}>
        <TouchableOpacity style={{marginLeft: 80}}>
          <Image
            source={require('../../images/pro.png')}
            style={{
              width: 35,
              borderRadius: 0,
              height: 33,
              marginLeft: -80,
              paddingTop: 12,
              marginTop: 0,
            }}
          />
        </TouchableOpacity>
      </View>
    </Back3>
  );
};

export default ITPPanel;
