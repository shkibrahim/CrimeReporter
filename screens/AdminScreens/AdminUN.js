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
import Back3 from '../Back3';

import {Image} from 'react-native';


const AdminUN = ({navigation}) => {


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
            {/* <TouchableOpacity
                 onPress={() => navigation.navigate('FIR')}>
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
            </TouchableOpacity> */}
          </View>
          <View style={{marginBottom: 12, marginTop: 12}}>
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
            <View style={{marginTop:90, marginLeft:-82}}><Text style={{color:'red', fontWeight:'bold', fontSize:20, fontFamily:'Impact'}}>UPLOAD NOTIFICATIONS</Text></View>
              <View>
                <Image
                  source={require('../../images/p.png')}
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
                  source={require('../../images/logo1.png')}
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
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AdminRMC')}>
              <Text style={{fontSize:20, marginLeft:50, fontWeight:'bold', color:'#10942e', marginTop:9, alignContent:'center'}}>REGISTER MISSING CRIMINAL</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity  
            onPress={() => navigation.navigate('AdminRMV')}
            >
              <Text style={{fontSize:20, marginLeft:45, fontWeight:'bold', color:'#10942e', marginTop:9}}>REGISTER MISSING VEHICLE</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity 
             onPress={() => navigation.navigate('AdminRMD')}
            >
              <Text style={{fontSize:20, marginLeft:36, fontWeight:'bold', color:'#10942e', marginTop:9}}>REGISTER MISSING DOCUMENTS</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#b8b8b8',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 }}>
            <TouchableOpacity 
             onPress={() => navigation.navigate('AdminVRNotification')}
             >
              <Text style={{fontSize:20, fontWeight:'bold', color:'#10942e',alignSelf:'center', marginTop:9}}>VIEW RESPONSE</Text>
            </TouchableOpacity>
          </View>
   
        </View>
       
      </View>
    </Back3>
  );
};

export default AdminUN;
