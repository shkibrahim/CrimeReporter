import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import Background2 from '../../screens/Backround2';

import {darkGreen} from '../constants';
import {Image} from 'react-native';

import firestore from '@react-native-firebase/firestore';
const ITP = ({navigation}) => {
  const [Teampass, setTeampass] = useState();
  const [Teamid, setTeamid] = useState();
  // const {cnic, pass} = Data([]);
  const [Data, setData] = useState([]);
  var Login = () => {
    if(Teamid== null || Teampass == null){
      alert ('Fill the CNIC and password')
    }
    else{
      firestore()
        .collection('Team')
        .where('TeamID', '==', Teamid)
        .where('Password', '==', Teampass)
        .get()
        .then((querySnapshot) => {
          if(querySnapshot.empty){
            alert('Incorrect Team ID  or password!')
          }
          else{
            // Login successful
            querySnapshot.forEach((documentSnapshot) => {
              const user = documentSnapshot.data();
              // alert('Welcome ');
              navigation.navigate("ITPPanel")
            });
          }
        })
        .catch((error) => {
          alert('Error: ' + error);
        });
    }
  }
//   var FIR = firestore().collection('Users');

//   useEffect(() => {
//     var Dataa = async () => {
//       await FIR.get().then(data => {
//         setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        
      
//       });
//     };
//     Dataa();
//   });
//   var Login = () => {
//     // data={Data}
    
// if (Teamid == Data.cnic && Teampass == Data.pass){
// navigation.navigate("UserPanel")
// }
// else {
//   alert("no user found")
// }
// }
  return (
    <Background2>
      <View style={{alignItems: 'center', width: 400}}>
        <View style={{marginHorizontal: 90, marginVertical: 0}}>
          <Image
            source={require('../../images/logo.png')}
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
           Team ID
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
            onChangeText={ setTeamid}
            
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            value= {Teamid}

            placeholderTextColor="grey"
            placeholder="Enter CNIC"
            keyboardType={'numeric'}
          />

{/* <View>
  {Data.map(d=>{
    return <Text>{d}</Text>
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
            onChangeText={ setTeampass}
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
            value={Teampass}
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

          <TouchableOpacity
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
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{color: '#10942e', fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* <Text style={{fontSize: 14, color: 'red', marginTop: 20}}>
            PPF expects all users to act responsibly while using CRMPF{' '}
          </Text> */}
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'red'}}>For guidance read </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: 'red', fontWeight: 'bold', fontSize: 14}}>
                citizen's guidelines manual
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>
              In case of any issue.{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{color: '#10942e', fontWeight: 'bold', fontSize: 16}}>
                Contact Us
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Background2>
  );
};

export default ITP;
