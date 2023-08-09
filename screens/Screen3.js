import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,  ActivityIndicator,
} from 'react-native';

import {darkGreen} from './constants';

import {Image} from 'react-native';


const Screen3 = ({route,navigation}) => {
  const {name} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const {email} = route.params;
  const { cnic} = route.params;
  const { genderValue } = route.params;
  const { districtValue } = route.params;
  const { cityValue } = route.params;
  // const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  var Users = () => {
    if(name== null || cnic== null ||  districtValue== null || cityValue== null || password == null || cpassword == null || genderValue == null || email == null  )
    {
alert ('Fill the form')
    }
    // console.log(cityValue)
    if( password!==cpassword){
      alert("password and confirm password doesnot match")
    }
    else{
      setIsLoading(true);
    firestore()
      .collection('Users')
      .add({
        name: name,
        cnic:cnic,
        genderValue:genderValue,
        districtValue:districtValue,
        cityValue:cityValue,
        password : password,
      email: email,
       
     
      })
      .then(() => {
       
        alert('Your account has made successfully');
        navigation.navigate('Home')
      }).catch(()=>{
        alert( error)
      });

    }
    
  }



  return (
    <View style={{alignItems: 'center', width: 400}}>
      <Image
        source={require('../images/logo.png')}
        style={{
          width: 170,
          height: 100,

          alignContent: 'center',
          marginTop: 0,
        }}
      />

      <View
        style={{
          height: 400,
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 0,
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 0}}>
          <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>
            Create{' '}
          </Text>
        </View>
        <View style={{marginBottom: 19}}>
          <Text style={{color: 'grey', fontSize: 14}}>
            Your account in few steps{' '}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1, marginLeft: 80}}>
            <TouchableOpacity
              style={{
                // backgroundColor: '#10942e',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -10,
                width: 30,
                height: 30,

                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, marginLeft: 60}}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

                alignItems: 'center',
                borderRadius: 3,
                marginLeft: 30,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() => navigation.navigate('Screen2')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 15}}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 3, marginLeft: 70}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',

                alignItems: 'center',

                borderRadius: 3,
                marginLeft: 25,
                width: 30,
                height: 30,
                //  marginRight:50,
                paddingVertical: 5,
                //  marginRight:140
              }}
              onPress={() => navigation.navigate('Screen3')}>
              <Text style={{color: 'white', marginTop: 0, fontSize: 15}}>
                3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            width: '100%',
            marginR: 100,
            borderRadius: 5,
            marginBottom: 30,
            height: 390,
          }}>
          {/* <ScrollView> */}
         
          <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
              PASSWORD
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 2,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={password}
              onChangeText={(setpassword)  
              
             }
              placeholder="Enter Password"
              secureTextEntry={true}
              keyboardType={'password'}
            />
  <Text
              style={{
                color: '#10942e',
                marginTop:30,
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
              }}>
          CONFIRM PASSWORD
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 2,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: 'white',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={cpassword}
              onChangeText={(setcpassword) }
             
            
              placeholder="Confirm Password"
              secureTextEntry={true}
              keyboardType={'password'}
            />
        
          {/* </ScrollView> */}
        </View>

        <View style={{ marginTop: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 150,
              height: 50,
              alignItems: 'center',

            }}
           onPress={Users}
           >
    {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
            <Text style={{color: 'white', fontSize:22, marginTop: 11, fontWeight:'bold'}}>
              SUBMIT
            </Text>
               )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen3;
