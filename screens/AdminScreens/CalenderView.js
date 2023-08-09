import { StyleSheet, Text, View, FlatList,ScrollView,Image} from 'react-native'
import React, { useState, useEffect ,useContext} from 'react'
import { Calendar } from 'react-native-calendars'
import { useIsFocused } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const CalenderView = ({ navigation }) => {

    const [datetxt, setdatetxt] = useState('No date Selected')
    const [tasksList, setTasksList] = useState([]);
    const [markedtasks, setmarkedtasks] = useState([{TaskName:'Select Date to Show tasks'}]);
    const [markedDatess, setmarkedDatess] = useState({});
    const [taskFound, setTaskFound] = useState(false);
    const isFocused = useIsFocused();

    var FIR = firestore().collection('AcceptedFIR');

    useEffect(() => {
        Dataa();

    }, []);

    var Dataa = async () => {
        await FIR.get().then(data => {
            setTasksList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
      };

    //   useEffect(() => {
    //     var Dataa = async () => {
    //       await FIR.get().then(data => {
    //         setData2(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    //       });
    //     };
    //     Dataa();
    //   }, []);
 

    const Showtasks = (FormatedDate) => {
        var TempList = []
        tasksList.forEach(element => {
            if (element.selectedDate == FormatedDate) {
                setTaskFound(true);
                TempList.push(element);
                console.log(TempList)
            }
            
        });
        if(TempList.length===0){
            setTaskFound(false);
            TempList = [{TaskName:'No Task on Selected Date'}]
        }
        setmarkedtasks(TempList);
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }


    var tempmarks=[];


    tasksList.forEach((date) => {
        if (date.selectedDate != null) {
            var dotss=[{ color: getRandomColor() }];
            if(tempmarks.includes(date.selectedDate)){
                 dotss.push({ color: getRandomColor() })
            }

            markedDatess[date.selectedDate] = { marked: true, selected: 'true', selectedColor: 'shayan',  selectedTextColor: getRandomColor(), dots:dotss };

            // markedDatess[date.TaskDate] = { marked: true, selected: 'true', selectedColor: getRandomColor(), selectedTextColor: getRandomColor(), dots: [{ color: getRandomColor() }, { color: getRandomColor() }, { color: getRandomColor() }] };

            tempmarks.push(date.selectedDate);

        }

    })


    


    return (
        <View style={[styles.container,{backgroundColor:'green'}]}>
            <View style={[styles.top,{backgroundColor:'green'}]}>
                <Text style={{ fontSize: 20,  margin: 10 ,color:'white'}}>CALENDER VIEW</Text>
            </View>
            <View style={styles.modalView}>
                <Calendar
                    onDayPress={(date) => {
                        var mon = '00'
                        var da = '00'
                        if (date.month <= 9) {
                            mon = `0${date.month}`
                        } else {
                            mon = date.month;
                        }
                        if (date.day <= 9) {
                            da = `0${date.day}`
                        } else {
                            da = date.day;
                        }
                        const FormatedDate = `${date.year}-${mon}-${da}`
                        setdatetxt(FormatedDate)
                        Showtasks(FormatedDate);

                    }}
                    // initialDate={'2023-1-17'}
                    style={[styles.calenderView,{}]}
                    headerStyle={{backgroundColor:'grey'}}
                    minDate={'2023-1-1'}
                    maxDate={'2023-12-30'}
                    hideExtraDays={true}
                    markingType={'multi-dot'}

                    markedDates={markedDatess}
                />


            </View>

            <View style={[styles.DetailsContainer,{backgroundColor:'white'}]}>

                <View style={styles.Details}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,color:'green' }}>Date :</Text>
                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 15,color:'green' }}>{datetxt}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,color:'green' }}>FIR REPORTS :</Text>
                    <FlatList
                        style={{
                            height: '70%',
                            // marginRight:130
                        }}
                        data={markedtasks}

                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (item != undefined) {
                                return (

                                    <>
                                        {
                                            taskFound ?
                                            <ScrollView style={{width:380, marginRight:10}}>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 180,
                                                fontSize: 18,
                                                alignItems:'center',
                                                name: 'cnic',
                                              }}>
                                              {index + 1}
                                            </Text>
                                           
                                            
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                marginBottom:-5,
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                // name: 'cnic',
                                              }}>
                                              NAME:
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
                                              {item.name}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                               
                                              }}>
                                              CNIC:
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
                                                name: 'cnic',
                                              }}>
                                              {item.cnic}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                               
                                                marginBottom:-5,
                                              }}>
                                              CONTACT NO:
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
                                              {item.contact}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                               
                                                marginBottom:-5,
                                              }}>
                                              DATE
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
                                              {item.selectedDate}
                                            </Text>
                                            </View>
                                            
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                              }}>
                                              CRIME TYPE:
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
                                              {item.crimeValue}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                marginBottom:-5,
                                                fontSize: 14,
                                                
                                              }}>
                                              DISTRICT: 
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
                                              {item.districtValue}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                              }}>
                                              CITY: 
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
                                              {item.cityValue}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                              }}>
                                             LOCATION:
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
                                              {item.longitude} +  {item.latitude}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                               
                                                marginBottom:-5,
                                              }}>
                                              POLICE STATION: 
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
                                              {item.policeValue}
                                            </Text>
                                            </View>
                    
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                              }}>
                                              EVIDENCES
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
                                              {item.Evidence}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                              }}>
                                              EVIDENCES IMAGES
                                            </Text>
                                            <View
                                    style={{
                                      alignItems: 'center',
                                      marginLeft: 140,
                                      width: 90,
                                      height: 87,
                                      backgroundColor: 'black',
                                      borderRadius: 55,
                                      marginTop: 12,
                                    }}>
                                    <Image
                                      style={{
                                        width: 90,
                                        borderRadius: 5,
                                        height: 87,
                                        resizeMode:'cover',
                                        // marginBottom: 20,
                                        marginLeft: 0,
                                        marginTop: 0,
                                      }}
                                      source={{uri: item.EvidenceImage}}
                                    />
                                  
                                  </View>
                    
                    
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                marginBottom:-5,
                                              }}>
                                              DESCRIPTION: 
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
                                              {item.description}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                name: 'cnic',
                                                
                                                marginBottom:-5,
                                              }}>
                                              SUSPECT NAME: 
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
                                                name: 'cnic',
                                              }}>
                                              {item.suspectname}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                name: 'cnic',
                                                
                                                marginBottom:-5,
                                              }}>
                                              SUSPECT IMAGE:
                                            </Text>
                                            <View
                                    style={{
                                      alignItems: 'center',
                                      marginLeft: 140,
                                      width: 90,
                                      height: 87,
                                      backgroundColor: 'black',
                                      borderRadius: 55,
                                      marginTop: 12,
                                    }}>
                                    <Image
                                      style={{
                                        width: 90,
                                        borderRadius: 5,
                                        height: 87,
                                        resizeMode:'cover',
                                        // marginBottom: 20,
                                        marginLeft: 0,
                                        marginTop: 0,
                                      }}
                                      source={{uri: item.SuspectImage}}
                                    />
                                  
                                  </View>
                    
                    
                    
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                
                                                marginBottom:-5,
                                              }}>
                                              SUSPECT CONTACT INFORMATION:
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
                                              {item.suspectcontact}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                               
                                                marginBottom:-5,
                                              }}>
                                              SUSPECT REASON: 
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
                                              {item.reason}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                               
                                                marginBottom:-5,
                                              }}>
                                              SUSPECT RELATION WITH YOU: 
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
                                              {item.name}
                                            </Text>
                                            </View>
                                            <Text
                                              style={{
                                                color: '#10942e',
                                                fontWeight: 'bold',
                                                marginLeft: 10,
                                                fontSize: 14,
                                                
                                                marginBottom:-5,
                                              }}>
                                              SUSPECT DESCRIPTION:
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
                                              {item.SuspectDescription}
                                            </Text>
                                            </View>
                                            </ScrollView>
                                                :
                                                <>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 5 ,color:'green'}}>{item.TaskName}</Text>
                                                </>
                                        }
                                    </>
                                );
                            }
                        }}
                    />

                </View>

            </View>


        </View>
    )
}

export default CalenderView

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        
        
    },
    top: {
        position: 'relative',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: '100%',
        height: 60,
        
    },

    DetailsContainer: {
        backgroundColor: 'red',
        flex: 1

    },

    Details: {
        margin: 20,
    },

    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'red'
    },
    calenderView: {
        borderRadius: 0,
        width:420,
        margin: 0,
        marginLeft:-11,
        elevation: 25,
        // backgroundColor:'#8D72E1',

    },
    modalView: {

    }
})

