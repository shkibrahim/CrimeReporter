import React from 'react';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Pie from 'react-native-pie';
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

const FIRAnalytics = ({navigation}) => {
  const [Complaintdata, setData1] = useState([]);
  const [RMVdata, setData3] = useState([]);
  const [firdata, setData2] = useState([]);

  const [ml, setml] = useState(0);
  const [rol, setrol] = useState(0);
  const [ral, setral] = useState(0);
  const [kl, setkl] = useState(0);

  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(0);
  const [count4, setcount4] = useState(0);
  var fir = firestore().collection('AcceptedFIR');
  useEffect(() => {
    var Dataa = async () => {
      await fir.get().then(data => {
        setData2(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
    };
    Dataa();
  }, []);


  useEffect(() => {
    if (firdata.length > 0) {
      const MurderList = firdata.filter(item => {
        return item.crimeValue === 'Murder';
      });
      const RobberyList = firdata.filter(item => {
        return item.crimeValue === 'Robbery';
      });
      const RapeList = firdata.filter(item => {
        return item.crimeValue === 'Rape';
      });
      const KidnappingList = firdata.filter(item => {
        return item.crimeValue === 'Kidnapping';
      });

      var len1 = MurderList.length;
      var len2 = RobberyList.length;
      var len3 = RapeList.length;
      var len4 = KidnappingList.length;
      setcount1(len1)
      setcount2(len2)
      setcount3(len3)
      setcount4(len4)


      var percent=100/(len1+len2+len3+len4)
      setml(len1*percent)
      setrol(len2*percent)
      setral(len3*percent)
      setkl(len4*percent)

    }
  }, [firdata]);


  // const show1 = async () => {
  //   var count = 0;
  //   firdata.forEach(element => {
  //     if (element.crimeValue === 'Kidnapping') {
  //       count += 1;
  //     }
  //   });
  //   alert(count);
  // };

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
          {/* <View>
           
          </View> */}
          <View style={{marginBottom: 19, marginTop: 15}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              FIR ANALYTICS
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
                  // source={require('../../images/p.png')}
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

              <View
                style={{position: 'absolute', marginLeft: -60, marginTop: 55}}>
                <Pie
                  radius={92}
                  innerRadius={30}
                  sections={[
                    {
                      // percentage: (doneTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: ml,
                      color: 'red',
                    },
                    {
                      // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: rol,
                      color: 'green',
                    },
                    {
                      // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: ral,
                      color: '#FFDB58',
                    },
                    {
                      percentage: kl,
                      color: 'orange',
                    },
                  ]}
                  dividerSize={1}
                  backgroundColor={'white'}
                  strokeCap={'butt'}
                />
              </View>
            </View>
          </View>
        
          <View style={{marginTop: -530, marginLeft: -280}}></View>

          <View style={{marginLeft: 300, marginTop: -18}}></View>
  <ScrollView style={{width:490, marginLeft:18, height:1400, marginBottom:-300}}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: 100,
              backgroundColor: 'white',
            }}>
            <View style={{flex: 1, marginLeft: 73}}>
              <TouchableOpacity
                style={{
                  //   backgroundColor: '#e8bd0f',
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -29,
                  borderColor: 'green',
                  borderWidth: 2,
                  width: 175,
                  height: 150,
                }}
               >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  {count1}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  MURDERS
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 62}}>
              <TouchableOpacity
                style={{
                  //   backgroundColor: '#7ba946',
                  borderColor: 'green',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -10,
                  width: 175,
                  height: 150,
                }}
              >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  {count2}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  ROBBERY
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: -5,
              backgroundColor: 'white',
            }}>
            <View style={{flex: 1, marginLeft: 30}}>
              <TouchableOpacity
                style={{
                  //   backgroundColor: '#f37924',
                  borderColor: 'green',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 15,
                  width: 175,
                  height: 150,
                }}
              >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  {count3}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  RAPE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginLeft: 124}}>
              <TouchableOpacity
                style={{
                  //   backgroundColor: '#dd2b27',
                  borderColor: 'green',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -22,
                  width: 175,
                  height: 150,
                }}
              >
                <Text
                  style={{
                    color: 'red',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  {count4}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 18,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  KIDNAPPINGS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{ flexDirection: 'column',}}> */}
          <View style={{ flexDirection:'row', marginBottom:23}}>
            {/* <View style={{  borderRadius:14}}> </View>   */}
            <View style={{backgroundColor:'red', width:20,height:20, marginLeft:49, marginTop:0, borderRadius:30}}>
             </View>
            <Text style={{color:'green' , marginLeft:10,flex:2}}>
              MURDER
            </Text>
            <View style={{backgroundColor:'orange', width:20,height:20, marginLeft:49,marginTop:0, borderRadius:30}}>
             </View>
            <Text style={{color:'green' , marginLeft:10,flex:4}}>
              KIDNAPPINGS
            </Text>

          </View>
          <View style={{ flexDirection:'row'}}>
            {/* <View style={{  borderRadius:14}}> </View>   */}
            <View style={{backgroundColor:'green', width:20,height:20, marginLeft:49, marginTop:0, borderRadius:30}}>
             </View>
            <Text style={{color:'green' , marginLeft:10,flex:2}}>
              ROBBERY
            </Text>
            <View style={{backgroundColor:'#FFDB58', width:20,height:20, marginLeft:49, marginTop:0, borderRadius:30}}>
             </View>
            <Text style={{color:'green' , marginLeft:10,flex:4}}>
              RAPE
            </Text>

          </View>
          {/* </View> */}
          </ScrollView>
        </View>
       
      </View>
    </Back3>
  );
};

export default FIRAnalytics;
