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
import RMP from '../RMP';

const Analytics = ({navigation}) => {
  const [Complaintdata, setData1] = useState([]);
  const [RMVdata, setData3] = useState([]);
  const [firdata, setData2] = useState([]);
  const [missingdata, setData4] = useState([]);
  const [fc, setfc] = useState(0);
  const [cc, setcc] = useState(0);
  const [mc, setmc] = useState(0);
  const [miss, setmiss] = useState(0);
  var Complaint = firestore().collection('AcceptedComplaints');
  var fir = firestore().collection('AcceptedFIR');
  var missing = firestore().collection('AcceptedMissingPersonREPORTS');
  var RMV = firestore().collection('AcceptedREPORTS');
 
  useEffect(()=>{
    const total=(firdata.length+Complaintdata.length+RMVdata.length+missingdata.length)
    if(total >0 ){
      var len4=missingdata.length
    var len1=firdata.length
    var len2=Complaintdata.length
    var len3=RMVdata.length
    var percent=100/(firdata.length+Complaintdata.length+RMVdata.length+missingdata.length)
    setfc(len1*percent)
    setcc(len2*percent) 
    setmc(len3*percent)
    setmiss(len4*percent)

    }
  },[firdata,Complaintdata,RMVdata,missingdata])

  useEffect(() => {
    var FilterList = [];
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
      await missing.get().then(data => {
        setData4(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
    };
    Dataa();

  },[]);

  const show1 = async () => {
    var count = 0;
    firdata.forEach(element => {
      if (element.crimeValue === 'Kidnapping') {
        count += 1;
      }
    });
    alert(count);
  };

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
          
          <View style={{marginBottom: 19, marginTop: 15}}>
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

              // marginBottom: 30,
              height: 750,
            }}>
            <View style={{marginLeft: 170, marginTop: -18}}>
              <View>
                <Image
                  // source={require('../../images/p.png')}
                  style={{
                    width: 400,
                    // borderRadius: 35,
                    // height: 260,
                    marginLeft: -174,
                    paddingTop: 12,
                    marginTop: 12,
                  }}
                />
                
              </View>
              
              <View 
                style={{position:'absolute' , marginLeft:-60, marginTop:55, marginBottom:50}}
              >
              <Pie
                  radius={92}
                  innerRadius={30}
                  sections={[
                    {
                      // percentage: (doneTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: fc,
                      color: 'orange',
                    },
                    {
                      // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: cc,
                      color: 'green',
                    },
                    {
                      // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: mc,
                      color: 'red',
                    },
                    {
                      // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                      percentage: miss,
                      color: 'blue',
                    },
                    // {
                    //   percentage: 6,
                    //   color: '#CEA9BC',
                    // },  
                  ]}
                  dividerSize={1}
                  backgroundColor={'white'}
                  strokeCap={'butt'}
                />
              </View>
            </View>
         
<ScrollView>
          {/* <View style={{marginTop: -480, marginLeft: -280}}></View>

          <View style={{marginLeft: 300, marginTop: -18}}></View> */}
<View style={{marginLeft:-30, marginTop:130,}}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: 100,
              
              
              backgroundColor: 'white',
            }}>
            <View style={{flex: 1, marginLeft: 73}}>
              <TouchableOpacity  onPress={() => navigation.navigate('AdminCases')}
                style={{
                  //   backgroundColor: '#e8bd0f',
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: -29,
                  // marginRight:29,
                  borderColor: 'green',
                  borderWidth: 2,
                  width: 175,
                  height: 150,
                }}
             >
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  {Complaintdata.length + firdata.length + RMVdata.length + missingdata.length} 
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 22,
                    marginTop: 7,
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
                  borderColor: 'green',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 17,
                  marginLeft: 10,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('FIRAnalytics')}>
                <Text
                  style={{
                    color: 'orange',
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
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  FIR
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
                    color: 'green',
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
                    marginTop: 7,
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
                  borderColor: 'green',
                  borderWidth: 2,
                  alignItems: 'center',
                  borderRadius: 17,
                  // marginLeft: 0,
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
                  {RMVdata.length}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 18,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  MISSING VEHICLES
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
                    color: 'blue',
                    // borderWidth:2,
                    // borderColor:'black',
                    fontSize: 62,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                  {missingdata.length}
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 18,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                MISSING PERSON
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
                  // marginLeft: -22,
                  width: 175,
                  height: 150,
                }}
                onPress={() => navigation.navigate('CalenderView')}>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 32,
                    marginTop: 37,
                    fontWeight: 'bold',
                  }}>
                 CALENDER
                </Text>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 26,
                    marginTop: 7,
                    fontWeight: 'bold',
                  }}>
                 VIEW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>
          </ScrollView>
          </View>
        </View>
      </View>
    </Back3>
  );
};

export default Analytics;
