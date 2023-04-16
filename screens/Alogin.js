import React, {useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import Background2 from '../screens/Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import {Image} from 'react-native';
import {green} from './constants';
import Field from './Field';

const Alogin = ({navigation}) => {
  const [Apass, setApass] = useState('');
  const [Acnic, setAcnic] = useState('');
  const [validated, setvalidated] = useState(false);
  const [error, setError] = useState('wrong credentials');
  
  const validate= async ()=> {
    if (Apass == '123' && Acnic == '123') {
      setvalidated(true);
      alert("Logged In Successfully");
      navigation.navigate('Auserpanel');
    } else {
      alert(error);
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
            onChangeText={value => setAcnic(value)}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor="grey"
            placeholder="Enter CNIC"
            keyboardType={'numeric'}
          />

          {/* <Field placeholder="Apassword" secureTextEntry={true} /> */}

          <Text
            style={{
              color: '#10942e',
              fontWeight: 'bold',
              marginRight: 270,
              fontSize: 14,
            }}>
            Password
          </Text>

          <TextInput
            onChangeText={value => setApass(value)}
            Apassword={true}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor="grey"
            placeholder="Enter password"
            secureTextEntry={true}
            value={Apass}
          />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 30,
            }}>
            <Text style={{color: '#10942e', fontWeight: 'bold', fontSize: 14}}>
              Forgot password ?
            </Text>
          </View>

       

          <TouchableOpacity
            onPress={validate}
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
            <Text
              style={{
                color: 'white',
                marginTop: 11,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        
          
         
          
        
        </View>
      </View>
    </Background2>
  );
};

export default Alogin;
