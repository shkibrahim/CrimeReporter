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

import Complaints from './Complaints';
const Auserpanel = ({navigation}) => {
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
                source={require('../images/menu.png')}
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
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              ADMIN PANEL
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#f1f8f6',
              borderRadius: 0,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            <View style={{marginLeft: 170, marginTop: -18}}>
              <View>
                <Image
                  source={require('../images/p.png')}
                  style={{
                    width: 400,
                    // borderRadius: 35,
                    height: 260,
                    marginLeft: -174,
                    paddingTop: 12,
                    marginTop: 12,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('../images/logo1.png')}
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
                  source={require('../images/text.png')}
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
                  backgroundColor: '#e8bd0f',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -29,
                  width: 175,
                  height: 150,

                  // paddingVertical: 5,
                }}
                onPress={() => navigation.navigate('AdminTC')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: 47,
                    fontWeight: 'bold',
                  }}>
                  VIEW{' '}
                </Text>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 22,
                    marginTop: -5,
                    marginLeft: -12,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  TOTAL CASES
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 62}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#7ba946',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -10,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('AdminIT')}>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 22,
                    marginTop: 47,
                    fontWeight: 'bold',
                    marginLeft: 6,
                  }}>
                  INVESTIGATION{' '}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: -5,
                    marginLeft: -12,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  TEAMS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: -5}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f37924',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 15,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('Signup')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: 47,
                    fontWeight: 'bold',
                    marginLeft: 6,
                  }}>
                  CRIMINAL{' '}
                </Text>
                <Text
                  style={{
                    color: '#7ba946',
                    fontSize: 22,
                    marginTop: -5,
                    marginLeft: -12,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  DATA
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 124}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#dd2b27',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -22,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('AdminUN')}>
                <Text
                  style={{
                    color: 'yellow',
                    fontSize: 22,
                    marginTop: 47,
                    fontWeight: 'bold',
                    marginLeft: 6,
                  }}>
                  UPLOAD{' '}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginTop: -5,
                    fontWeight: 'bold',
                  }}>
                  NOTIFICATIONS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: -5}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4aa8c2',

                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 15,
                  width: 364,
                  height: 150,
                }}
                onPress={() => navigation.navigate('Analytics')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 52,
                    marginTop: 40,
                    fontWeight: 'bold',
                  }}>
                  ANALYTICS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Back3>
  );
};

export default Auserpanel;
