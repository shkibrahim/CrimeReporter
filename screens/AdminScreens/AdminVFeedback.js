import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Touchable,FlatList,ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import Background2 from '../../screens/Backround2';

import {Image} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '../../Data/StorageKeys';

const AdminVFeedback = ({navigation}) => {
  const [Loginpass, setLoginpass] = useState();
  const [Logincnic, setLogincnic] = useState();
  // const {cnic, pass} = Data([]);
  const [Data, setData] = useState([]);
  var FIR = firestore().collection('Feedback');

  useEffect(() => {
    var Dataa = async () => {
      await FIR.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
       
      });
    };
    Dataa();
  });



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
      
        <View style={{}}>
            <FlatList
                style={{width: '100%'}}
                data={Data}
                horizontal={true}
                // Horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                    //  <FlatList 
                    <View style={{ width: 370,
                        marginRight:19,
                        height: 640,}}>
                      <View
                        style={{
                        //   backgroundColor: 'white',
                          borderColor: 'red',
                          marginBottom: 10,
                        //   borderRadius: 19,
                          margin: 10,
                         
                          width: 370,
                          height: 530,
                        }}>
                          <ScrollView>
                   
                        
                        <Text
                          style={{
                            color: '#10942e',
                            marginBottom:-5,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            // name: 'cnic',
                          }}>
                          Rating
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {item.rating}
                        </Text>
                        </View>
                          
                        <Text
                          style={{
                            color: '#10942e',
                            marginBottom:-5,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            // name: 'cnic',
                          }}>
                         Description
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {item.feedback}
                        </Text>
                        </View>
                      

                     
                        </ScrollView>

                    
                       
                      </View >
                   
                  
         
         
                      </View>
                    );
                  }
                }}
              />
            </View>
      </View>
    </Background2>
  );
};

export default AdminVFeedback;
