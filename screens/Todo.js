import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'

const Todo = () => {
    const [task, setTask] = useState();
    const [btnLabel, setBtnLabel] = useState('Add Item');
    const [tasklist, setTaskslist] = useState([]);
    const [edit,setEdit]=useState(null);
    const [btnstatus,setBtnstatus]=useState(false);


    const Upimage=()=>{
        return(<Image  style={{width:30,height:30 ,marginTop:10 ,marginRight:5}} source={require('../images/up.png')} />)
    };

    const Downimage=()=>{
        return(<Image  style={{width:30,height:30 ,marginTop:10 ,marginRight:5}} source={require('../images/down.png')} />)
    };
    
    const handlebtn = () => {

        if (btnLabel === "Add Item") {
            const newTask = {
                key: Math.random().toString(),
                taskName: task
            }
            setTaskslist((oldList) => [...oldList, newTask])
            setTask('')
        }
        if (btnLabel === "Update") {
            setTaskslist(() => tasklist.map((element) => element.key === edit ? { key: element.key, taskName: task } : element))

            setTask("")
            setEdit(null)
            setBtnLabel("Add Item")
            setBtnstatus(false)
        }
    }

    const setToUpdate = (taskItem) => {
        setTask(taskItem.taskName);
        setBtnLabel('Update');
        setEdit(taskItem.key)
        setBtnstatus(true)
    }

    const handleDelete=(taskItem)=>{
        setTaskslist(() => tasklist.filter((element)=> element.key != taskItem.key ))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>To Do List</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.manageTask}>
                    <View style={styles.inputView}>
                        <TextInput
                            value={task}
                            onChangeText={setTask}
                            style={styles.input}
                            placeholderTextColor='black'
                            placeholder='Enter an Item'
                        />
                        {edit ?<Upimage />:<Downimage/>}
                    </View>
                    <Button
                        onPress={() => { handlebtn() }}
                        textColor='#000'
                        style={styles.btn}
                    >{btnLabel}
                    </Button>
                </View>
                <FlatList
                    data={tasklist}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        if (item != undefined) {
                            return (
                                <View style={styles.listItem}>
                                    <TouchableOpacity onPress={() => { setToUpdate(item) }}>
                                        <View style={{ flexDirection: 'row', width: 250  ,alignItems: 'center',}}>
                                            <Text style={styles.count}>{index + 1}</Text>
                                            <Text style={styles.taskItem}>{item.taskName}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Button disabled={btnstatus} onPress={()=>{handleDelete(item)}} style={styles.btnDelete} textColor='lightblue' icon="delete" />
                                </View>
                            );
                        }
                    }}
                />
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'lightblue',
    },
    title: {
        margin: 10,
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    },
    body: {

    },
    manageTask: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10

    },
    inputView: {
        borderColor: 'black',
        borderWidth: 1,
        width: '60%',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input: {
        color: 'black',
        maxWidth:170
    },
    icon: {

    },
    btn: {
        backgroundColor: 'grey',
        borderRadius: 20,
        height: 40,
        marginTop: 5,
        marginRight: 12
    },
    taskItem: {
        color: 'black',
        marginVertical: 8,
        padding: 5,
        fontSize: 17,
        maxWidth:230,
    },
    listItem: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 18,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    count: {
        color: 'white',
        backgroundColor: 'lightblue',
        margin: 8,
        padding:3,
        fontSize: 17,
        height:30,
    },
    btnDelete: {
        marginRight: -15,
        marginTop: 5
    }
})