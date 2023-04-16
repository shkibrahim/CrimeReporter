import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import { green } from '../constants';



const Analytics = ({navigation}) => {
    const [Complaintdata, setData1] = useState([]);
    const [RMVdata, setData3] = useState([]);
    const [firdata, setData2] = useState([]);
    var Complaint = firestore().collection('AcceptedComplaints');
    var fir = firestore().collection('AcceptedFIR');
    var RMV = firestore().collection('AcceptedREPORTS');
    useEffect(() => {
        var FilterList=[]
        var Dataa = async () => {
          await Complaint.get().then(data => {
            setData1(data.docs.map(doc => ({...doc.data(), id: doc.id})));
          });
          await RMV.get().then(data => {
            setData3(data.docs.map(doc => ({...doc.data(), id: doc.id})));
          });
          await fir.get().then(data => {
            setData2(data.docs.map(doc => ({...doc.data(), id: doc.id})));
          });
        };
        Dataa();
      });

      const show1=async()=>{
        var count=0;
        firdata.forEach(element => {
            if(element.crimeValue==="Kidnapping"){
            count+=1;
        }
        });
          alert(count)
      }

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
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              ANALYTICS
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 0,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            <View style={{marginLeft: 170, marginTop: -18}}>
              <View>
                <Image
                  source={require('../../images/p.png')}
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

          <View style={{marginTop: -480, marginLeft: -280, }}></View>

          <View style={{marginLeft: 300, marginTop: -18, }}></View>

          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 100,backgroundColor: 'white'}}>
            <View style={{flex: 1, marginLeft: 73}}>
              <TouchableOpacity
                style={{
                //   backgroundColor: '#e8bd0f',
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -29,
                  borderColor:'green',
                  borderWidth:2,
                  width: 175,
                  height: 150,             
                }}
                onPress={() => navigation.navigate('AdminVF')}>
                     <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                {Complaintdata.length+firdata.length+ RMVdata.length}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop:7,
                    fontWeight: 'bold',
                  }}>
                 TOTAL CASES
                </Text>
            
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 62}}>
              <TouchableOpacity
                style={{
                //   backgroundColor: '#7ba946',
                  borderColor:'green',
                  borderWidth:2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -10,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('AdminVC')}>
              
                <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                {firdata.length}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop:7,
                    fontWeight: 'bold',
                  }}>
                FIR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: -5, backgroundColor:'white'}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                //   backgroundColor: '#f37924',
                  borderColor:'green',
                  borderWidth:2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 15,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('Signup')}>
                 <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                {Complaintdata.length}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop:7,
                    fontWeight: 'bold',
                  }}>
                COMPLAINTS
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 124}}>
              <TouchableOpacity
                style={{
                //   backgroundColor: '#dd2b27',
                  borderColor:'green',
                  borderWidth:2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -22,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('AdminVMH')}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                {RMVdata.length}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 18,
                    marginTop:7,
                    fontWeight: 'bold',
                  }}>
              MISSING VEHICLES
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
          <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                //   backgroundColor: '#4aa8c2',
                  borderColor:'green',
                  borderWidth:2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -35,
                  width: 364,
                  height: 100,
                  marginTop:-8
                }}
                onPress={() => navigation.navigate('AdminRBI')}>
                {/* <Text
                  style={{
                    color: 'white',
                    fontSize: 52,
                    marginTop: 20,
                    fontWeight: 'bold',
                  }}>
                  ANALYTICS
                </Text> */}
                 <Text
                  style={{
                    color: 'green',
                    fontSize: 23,
                    marginTop: 19,
                    fontWeight: 'bold',
                    marginLeft:-2
                  }}>
                 VIEW
                </Text>
                <Text
                  style={{
                    color: 'orange',
                    fontSize: 28,
                    // marginTop: 19,
                    fontWeight: 'bold',
                    marginLeft:-2
                  }}>
                REPORTS BY ITP'S
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </Back3>
  );
};

export default Analytics;
