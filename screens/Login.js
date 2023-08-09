import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Touchable,
  Pressable,
  TextInput, ActivityIndicator,
  Button,
} from 'react-native';
import Background2 from '../screens/Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import {Image} from 'react-native';
import {green} from './constants';
import Field from './Field';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '../Data/StorageKeys';

const Login = ({navigation}) => {
  const [Loginpass, setLoginpass] = useState();
  const [Logincnic, setLogincnic] = useState();
  // const {cnic, pass} = Data([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  var Login = () => {
    if(Logincnic== null || Loginpass == null){
      alert ('Fill the CNIC and password')
    }
    else{
      setIsLoading(true);
      firestore()
        .collection('Users')
        .where('cnic', '==', Logincnic)
        .where('password', '==', Loginpass)
        .get()
        .then((querySnapshot) => {
          if(querySnapshot.empty){
            alert('Incorrect CNIC or password!')  
          }
          else{
            // Login successful
              querySnapshot.forEach((documentSnapshot) => {
              const user = documentSnapshot.data();

              AsyncStorage.setItem(StorageKeys.CurrentUser, JSON.stringify(user))
              .then(() => {
                console.log('User Stored Successfully')
              })
              .catch((error) => console.log(error));
              navigation.replace("UserPanel")
            });
          }
        })
        .catch((error) => {
          alert('Error: ' + error);
        });
    }
  }

  return (
    <Background2>
      <View style={{alignItems: 'center', width: 400}}>
        <View style={{marginHorizontal: 90, marginVertical: 0}}>
          <Image
            source={require('../images/logo.png')}
            style={{
              width: 380,
              height: 200,

              alignContent: 'center',
              marginTop: 0,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#10942e',
              fontWeight: 'bold',
              marginRight: 290,
              fontSize: 14,
            }}>
            CNIC #
          </Text>
        </View>
        <View
          style={{
            marginBottom: 189,
            height: 700,
            width: 460,
            alignItems: 'center',
          }}>
          <TextInput
            onChangeText={ setLogincnic}
            
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            value= {Logincnic}

            placeholderTextColor="grey"
            placeholder="Enter CNIC"
            keyboardType={'numeric'}
          />

{/* <View>
  {Data.map(d=>{
    return <Text style={{color: 'black', fontSize:30}}>{d}</Text>
  })}
  </View> */}
            
        

          <Text
            style={{
              color: '#10942e',
              fontWeight: 'bold',
              marginRight: 270,
              fontSize: 14,
            }}>
            PASSWORD
          </Text>

          <TextInput
            onChangeText={ setLoginpass}
            password={true}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor="grey"
            placeholder="Enter Password"
            secureTextEntry={true}
            value={Loginpass}
          />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 30,
            }}>
            <Text style={{color: '#10942e', fontWeight: 'bold', fontSize: 14}}>
              Forgot Password ?
            </Text>
          </View>

          {/* <Btn bgColor={green} textColor='white' btnLabel="Login" onPress={()=>validate} /> */}

          <Pressable
            onPress={Login}
            style={{
              backgroundColor: '#10942e',
              borderRadius: 100,
              alignItems: 'center',
              alignContent: 'center',
              width: 300,
              height: 50,
              paddingVertical: 5,
              marginVertical: 1,
            }}>

{isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
            <Text
              style={{
                color: 'white',
                marginTop: 11,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              SIGN IN
            </Text>
                   )}
          </Pressable>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>
              Don't have an account?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{color: '#10942e', fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </Pressable>
          </View>
          <Text style={{fontSize: 14, color: 'red', marginTop: 20}}>
            PPF expects all users to act responsibly while using CRMPF{' '}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'red'}}>For guidance read </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'red', fontWeight: 'bold', fontSize: 14}}>
                citizen's guidelines manual
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>
              In case of any issue.{' '}
            </Text>
            <Pressable >
            {/* onPress={() => navigation.navigate('Signup')} */}
              <Text
                style={{color: '#10942e', fontWeight: 'bold', fontSize: 16}}>
                Contact Us
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Background2>
  );
};

export default Login;
