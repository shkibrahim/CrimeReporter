import React from 'react';
import {useEffect, useState} from 'react';

import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';

import {Image} from 'react-native';


const UserNotification = ({navigation}) => {


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
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../images/arrow.png')}
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
          <View style={{marginBottom: 12, marginTop:-35}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity>
              <Image
                source={require('../../images/loout.png')}
                style={{
                  width: 30,
                  height: 27,
                  marginLeft: 320,
                
                  marginTop:-44,
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
            <View style={{marginLeft: 170, marginTop: -18}}>
            <View style={{marginTop:90, marginLeft:-72}}>
                <Text style={{color:'red', fontWeight:'bold', fontSize:20, fontFamily:'Impact'}}>VIEW NOTIFICATIONS</Text></View>
              <View>
                <Image
                  source={require('../images/p.png')}
                  style={{
                    width: 350,
                    borderRadius:12,
                    height: 150,
                    marginLeft: -150,
                    paddingTop: 12,
                    marginTop: 12,
                  }}
                />
              </View>
          
              <View style={{marginTop: -190, marginLeft: -140}}>
              <Image
                  source={require('../images/logo1.png')}
                  style={{
                    width: 130,
                    borderRadius: 35,
                    height: 100,
                    marginLeft:105,
                   
                    marginTop: 72,
                  }}
                />
              </View>
              
            </View>
          </View>
        
          
          
         
          
          
         
          <View style={{marginLeft: 0, marginTop: -320}}>
          
          </View>
          <View style={{alignSelf:'center',backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserNVMC')}>
              <Text style={{fontSize:20, marginLeft:90, fontWeight:'bold', color:'#10942e', marginTop:9, alignContent:'center'}}>MISSING CRIMINAL</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity  onPress={() => navigation.navigate('UserNVMV')}>
              <Text style={{fontSize:20, marginLeft:95, fontWeight:'bold', color:'#10942e', marginTop:9}}>MISSING VEHICLE</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity  onPress={() => navigation.navigate('UserNVMD')}>
              <Text style={{fontSize:20, marginLeft:80, fontWeight:'bold', color:'#10942e', marginTop:9}}>MISSING DOCUMENTS</Text>
            </TouchableOpacity>
          </View>
        
   
        </View>
       
      </View>
    </Back3>
  );
};

export default UserNotification;
