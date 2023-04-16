import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import Pie from 'react-native-pie' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';


const Piechart1 = () => {
  const [pendingTaskCount, setPendingTaskCount] = useState(0)
  const [doneTaskCount, setDoneTaskCount] = useState(0)
  const [Categorys, setCategories] = useState([{val1:40,val2:20,val3:20,val4:20},{val1:10,val2:20,val3:20,val4:50}])
  const [pending, setPending] = useState(30)
  const [done, setDone] = useState(70)
  const [listss, setlistss] = useState([])
  const [robberySize, setRobberySize] = useState(0)
  const [kidnappingSize, setKidnappingSize] = useState(0)
  const [murderSize, setMurderSize] = useState(0)
  const [rapeSize, setRapeSize] = useState(0)
  const isFocused = useIsFocused();

  var FIR = firestore().collection('FIR');
  useEffect(() => {
    loadData();
  }, []);

  
  const loadData=async()=>{
    const crime1='Murder'
    const crime2='Robbery'
    const crime3='Rape'
    const crime4='Kidnapping'
    const crime5='Kidnapping'

    await FIR.get().then(data => {
        setlistss(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        console.log(data.size);
    });

    await FIR.where('crimeValue', '==', crime1).get().then(data => {
        setMurderSize(data.size)
        setlistss(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        console.log(data.size);
    });

    await FIR.where('crimeValue', '==', crime2).get().then(data => {
        setRobberySize(data.size)
        console.log(data.size);
    });

    await FIR.where('crimeValue', '==', crime3).get().then(data => {
        setRapeSize(data.size)
        console.log(data.size);
    });

    await FIR.where('crimeValue', '==', crime4).get().then(data => {
        setKidnappingSize(data.size)
        console.log(data.size);
    });

  }

  const LoadTodo =async () => {
    var DoneT="new"
    var PendT="new"

    await AsyncStorage.getItem('@Stored_Tasks')
      .then((data) => {
        if (data != null) {
          const newdata = JSON.parse(data)
          setPendingTaskCount(newdata.length);
           DoneT=newdata.length;
          
        }
      })
      .catch((error) => console.log(error));

    await AsyncStorage.getItem('@Done_Tasks')
      .then((data) => {
        if (data != null) {
          setDoneTaskCount(parseInt(data));
           PendT=parseInt(data);
          
          
        }
      })
      .catch((error) => console.log(error));
      console.log(DoneT)
      console.log(PendT)
      setDone((DoneT/(PendT+DoneT))*100)
      setPending((PendT/(PendT+DoneT))*100)
      
  };

  return (
    <View style={styles.container}>
      <View style={[styles.top,{backgroundColor:'indigo'}]}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10,color:'purple'  }}>Pie Chart</Text>
        <View style={{height:-3,width:"100%",backgroundColor:'purple',alignSelf:'center'}}><Text>.</Text></View>
      </View>

      <TouchableOpacity
              style={{
                backgroundColor: '#10942e',
                borderRadius: 10,
                width: 80,
                height: 35,
                alignItems: 'center',
              }}
              onPress={()=>{console.log(listss.length)}}
            >
              <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
                NEXT
              </Text>
            </TouchableOpacity>
      <FlatList
                        style={{
                            
                        }}
                        data={Categorys}
                        horizontal={true}
                        renderItem={({ item, index }) => {
                            if (item != undefined) {
                                return (
                                    <View style={{ backgroundColor:'green' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'purple' , margin:30}}> To-Do(s) Statistics {listss.length}</Text>
                                        <View style={{ margin:60}}>
                                    <Pie
                                      radius={80}
                                      innerRadius={30}
                                      sections={[
                                        {
                                          // percentage: (doneTaskCount/(pendingTaskCount+doneTaskCount))*100,
                                          percentage:item.val1,
                                          color: '#44CD40',
                                        },
                                        {
                                          // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                                          percentage:item.val2,
                                          color: '#404FCD',
                            
                                        },
                                        {
                                            // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                                            percentage:item.val3,
                                            color: '#404FCD',
                              
                                          },
                                          {
                                            // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                                            percentage:item.val4,
                                            color: '#404FCD',
                              
                                          },
                                        
                                      ]}
                                      dividerSize={1}
                                      backgroundColor={'gray'}
                                      strokeCap={'butt'}
                                    />
                                    </View>
                                  </View>
                                );
                            }
                        }}
                    />

<FlatList
                        style={{
                            
                        }}
                        data={Categorys}
                        horizontal={true}
                        renderItem={({ item, index }) => {
                            if (item != undefined) {
                                return (
                                    <View style={{ backgroundColor:'green' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold',color:'purple' , margin:30}}> To-Do(s) Statistics</Text>
                                        <View style={{ margin:60}}>
                                    <Pie
                                      radius={80}
                                      innerRadius={30}
                                      sections={[
                                        {
                                          // percentage: (doneTaskCount/(pendingTaskCount+doneTaskCount))*100,
                                          percentage:70,
                                          color: '#44CD40',
                                        },
                                        {
                                          // percentage: (pendingTaskCount/(pendingTaskCount+doneTaskCount))*100,
                                          percentage:30,
                                          color: '#404FCD',
                            
                                        },
                                        
                                      ]}
                                      dividerSize={1}
                                      backgroundColor={'gray'}
                                      strokeCap={'butt'}
                                    />
                                    </View>
                                  </View>
                                );
                            }
                        }}
                    />


   
     

      
    </View>
  )
}

export default Piechart1

const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    position: 'relative',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#866DFF',
    width: '100%',
    height: 60,
  },
  sheduledview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0056',

  },
  unsheduledview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#866DFF',
  },
  keyss: {
    backgroundColor: '#0056',
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 15,
    justifyContent:'space-around'
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 0,
    marginHorizontal: 10
  }

})