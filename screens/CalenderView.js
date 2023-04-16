import { StyleSheet, Text, View, FlatList,} from 'react-native'
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

    var FIR = firestore().collection('FIR');

    useEffect(() => {
        Dataa();

    }, []);

    var Dataa = async () => {
        await FIR.get().then(data => {
            setTasksList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
          console.log(data);
        });
      };
 

    const Showtasks = (FormatedDate) => {
        var TempList = []
        tasksList.forEach(element => {
            if (element.firDate == FormatedDate) {
                setTaskFound(true);
                TempList.push(element);
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



        if (date.firDate != null) {
            var dotss=[{ color: getRandomColor() }];
            if(tempmarks.includes(date.firDate)){
                 dotss.push({ color: getRandomColor() })
            }

            markedDatess[date.firDate] = { marked: true, selected: 'true', selectedColor: 'shayan',  selectedTextColor: getRandomColor(), dots:dotss };

            // markedDatess[date.TaskDate] = { marked: true, selected: 'true', selectedColor: getRandomColor(), selectedTextColor: getRandomColor(), dots: [{ color: getRandomColor() }, { color: getRandomColor() }, { color: getRandomColor() }] };

            tempmarks.push(date.firDate);

        }


    });


    return (
        <View style={[styles.container,{backgroundColor:'indigo'}]}>
            <View style={[styles.top,{backgroundColor:'indigo'}]}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 ,color:'purple'}}>Calender View</Text>
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
                    headerStyle={{backgroundColor:'indigo'}}
                    minDate={'2023-1-1'}
                    maxDate={'2023-12-30'}
                    hideExtraDays={true}
                    markingType={'multi-dot'}

                    markedDates={markedDatess}
                />


            </View>

            <View style={[styles.DetailsContainer,{backgroundColor:'indigo'}]}>

                <View style={styles.Details}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,color:'purple' }}>Date :</Text>
                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 15,color:'purple' }}>{datetxt}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,color:'purple' }}>FIR REPORTS :</Text>
                    <FlatList
                        style={{
                            height: '70%'
                        }}
                        data={markedtasks}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (item != undefined) {
                                return (

                                    <>
                                        {
                                            taskFound ?
                                                <>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 5,color:'purple' }}>FIR {index + 1} : {item.TaskName}</Text>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 0 ,color:'purple'}}>Name : {item.name}</Text>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 0 ,color:'purple'}}>Crime : {item.crimeValue}</Text>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 0 ,color:'purple'}}>Status : {item.Status}</Text>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', height: 15 }}></Text>

                                                    
                                                    </>
                                                :
                                                <>
                                                    <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 5 ,color:'purple'}}>{item.TaskName}</Text>
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
        backgroundColor: '#6C4AB6',
        width: '100%',
        height: 60,
        
    },

    DetailsContainer: {
        backgroundColor: '#8D72E1',
        flex: 1

    },

    Details: {
        margin: 20,
    },

    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'lightblue'
    },
    calenderView: {
        borderRadius: 0,
        margin: 0,
        elevation: 25,
        // backgroundColor:'#8D72E1',

    },
    modalView: {

    }
})

