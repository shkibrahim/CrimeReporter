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

import {darkGreen} from './constants';
import Field from './Field';
import {Image} from 'react-native';

const PM = ({navigation}) => {
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
        Profile Managem
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
              onPress={() => props.navigation.navigate('PM')}>
              <Text style={{color: '#10942e', marginTop: 0, fontSize: 15, fontWeight:'bold'}}>
              PERSONAL
              </Text>
           
            </TouchableOpacity>
            <View style={{width:400, marginLeft:-79}}>
                <TouchableOpacity   onPress={() =>navigation.navigate('Signup')}>
            <Text style={{color:'#10942e'}}>-----------------------------------------------</Text>
            </TouchableOpacity>
          
            </View>
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
              onPress={() => navigation.navigate('PMC')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15, fontWeight:'bold'}}>CONTACT</Text>
            </TouchableOpacity>
            
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
            onPress={() => navigation.navigate('PMC')}>
            <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
            NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </Back3>
  );
};

export default PM;
