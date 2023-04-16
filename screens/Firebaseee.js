import { StyleSheet, Text, View ,Button } from 'react-native'
import React from 'react'

const Firebaseee = () => {
    const FIREBASE_API_ENDPOINT='https://crms-2b917-default-rtdb.firebaseio.com/'

  const postData=()=>{
    var requestOptions={
      method: 'POST',
      body:JSON.stringify({
        empname:'new emp',
        taskdesc: 'new task'
      })
    }
 

  fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`,requestOptions)
  .then((responce)=>responce.json())
  .then((result)=>console.log(result))
  .catch((error)=>console.log('error',error));

}

  const getData=async()=>{
    const responce =await fetch(`${FIREBASE_API_ENDPOINT}/task.json`);
    const data = await responce.json();
    console.log(data);
    
  }

  const deleteData=()=>{
    const id='-NKqoSuyy_Osb1Leof8M'
    var requestOptions={
      method : 'DELETE'
    }

    fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`,requestOptions)
  .then((responce)=>responce.json())
  .then((result)=>console.log('DELETE Responce',result))
  .catch((error)=>console.log('error',error));

  }

  const updateData=()=>{
    const id='-NKqoSuyy_Osb1Leof8M'
    var requestOptions={
      method : 'PATCH',
      body:JSON.stringify({
        username:'username',
        pass:'pass',
        empname: 'updated name'
      })

    }

    fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`,requestOptions)
  .then((responce)=>responce.json())
  .then((result)=>console.log(result))
  .catch((error)=>console.log('error',error));

  }
  return (
    <View>
      <Button title="Post" onPress={()=>{postData()}}/>
      <Button title="update" onPress={()=>{updateData()}}/>
      <Button title="Delete" onPress={()=>{deleteData()}}/>
    </View>
  )
}

export default Firebaseee;

const styles = StyleSheet.create({})