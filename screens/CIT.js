import {Text, View, StyleSheet, ScrollView, TextInput,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


const CIT= ({navigation}) => {
  const [selected, setSelected] = React.useState('');
  const [categories, setCategories] = React.useState([]);

  const data = [
    {key: 'Murder', value: 'Murder'},
    {key: 'Robbery', value: 'Robbery'},
    {key: 'Rape', value: 'Rape'},
   
  ];
  const data1 = [
    
    {key: 'Rawalpindi', value: 'Rawalpindi'},
    {key: 'Islamabad', value: 'Islamabad'},
    
  ];
  const data2 = [
    
    {key: 'New Town', value: 'New Town'},
    {key: 'Bani', value: 'Bani'},
    
  ];
  return (
  
      <View style={styles.container1}>
         
      <View style={{ marginHorizontal: 90,  marginTop:-40, marginVertical: 50,  }}>
      <Image source={require("../images/logo.png") }  
      style={{width:200,
        height: 200,
       
        alignContent:'center',
        marginTop:0
        }}/>
          </View>
          <ScrollView style={styles.mainContainer}>
        <Text style={styles.text1}>    Create Investigation Team </Text>

        <View style={styles.container2}>
        <View style={{marginLeft:12}}><Text style={{fontSize:17}}>Enter Name of Incharge Police Officer: </Text></View>
          <TextInput style={styles.txtfield} placeholder="Enter Name" />
          <View style={{marginLeft:12}}><Text style={{fontSize:17}}>Enter Team ID:</Text></View>
          <TextInput
            style={styles.txtfield}
            placeholder="Team ID"
            keyboardType={'numeric'}
          />
          
          <View style={{marginLeft:12}}><Text style={{fontSize:17}}>Enter Number of Team Members:</Text></View>
          <TextInput
            style={styles.txtfield}
            placeholder="No. of team members"
            keyboardType={'numeric'}
          />
        </View>
        <View style={{marginLeft:12}}><Text style={{fontSize:17,color:'black'}}>Select Team Speciality:</Text></View>
        <View style={styles.container3}>
          <SelectList
            boxStyles={{    backgroundColor: 'green',
            width: '86%',
            height:44,
            borderRadius: 7,
            marginVertical: 6,
            marginLeft:0,
            paddingHorizontal: 5,}} //override default styles
            setSelected={setSelected}
            data={data}
          />
<View style={{marginLeft:0}}><Text style={{fontSize:17,color:'black'}}>Select City:</Text></View>
          <SelectList
            boxStyles={{ backgroundColor: 'green',
            width: '86%',
            height:44,
            borderRadius: 7,
            marginVertical: 6,
            marginLeft:0,
            paddingHorizontal: 5,}} //override default styles
            setSelected={setSelected}
            data={data1}
          />
        </View>

     

        <View style={styles.container3}>
         
<View style={{marginLeft:0}}><Text style={{fontSize:17,color:'black'}}>Select Police Station:</Text></View>
          <SelectList
            boxStyles={{backgroundColor: 'green',
            width: '86%',
            height:44,
            borderRadius: 7,
            marginVertical: 6,
            marginLeft:0,
            paddingHorizontal: 5,}} //override default styles
            setSelected={setSelected}
            data={data2}
          />
        </View>

       
        <View style={styles.container3}>
          
          
        

        </View>


      
        <View style={styles.container2 }>

        
       
           <TouchableOpacity  onPress={() =>alert("Investigation Team Created")} style={{marginTop:10,marginLeft:80,width:200,height:50, alignItems:'center',backgroundColor: 'red',borderRadius: 7,}} >
            
             <Text style={{
            // width: '30%',
            // height:30,
            color:'white',
            fontSize:22,
            fontWeight:'bold',
            borderRadius: 7,
            marginVertical: 6,
            
           
            marginLeft:0,
            paddingHorizontal: 5,
            textAlign:'center',}} >Create Team</Text>
            
          </TouchableOpacity>
        
          <TouchableOpacity style={{width:30,height:20, alignItems:'center',}} >
             <Text style={{backgroundColor: 'grey',
            width: '30%',
            height:30,
            borderRadius: 7,
            marginVertical: 6,
            
           
            marginLeft:0,
            paddingHorizontal: 5,
            textAlign:'center',}} >Upload Image</Text>
          </TouchableOpacity>
       
         
         
         
       

        </View>
        
          </ScrollView>
      </View>
  
  );
};

const styles = StyleSheet.create({
  mainContainer: {marginLeft:0,marginRight:10,paddingBottom:0, borderRadius:9, backgroundColor: 'grey',marginTop:-100 },

  container1: {
    textAlign: 'left',
   marginLeft:12,
   
    // backgroundColor: 'red',
  },
  text1: {
    alignItems:'center',
    marginVertical: 0,
  color:'black',
  fontWeight:'bold',
    paddingTop:0,
    paddingHorizontal: 20,
    paddingVertical:40,
    fontSize: 20,
    marginLeft:25,
    marginTop:25,
    
  },

  container2: {
 
   color:'black',
   placeholder:'Enter Details',
  },



  container3: {
   
    justifyContent: 'space-around',
    marginHorizontal: 15,
  },

  textinput1: {
    width: '50%',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 15,
  },

  btn1:{

   
   

  },

  btn2:{

    // backgroundColor:"skyblue",
    // borderRadius:15,
    // margin:25,
    // marginHorizontal:55,

    // padding:15,
  },

  txtfield: {
    backgroundColor: 'silver',
    width: '80%',
    height:40,
    borderRadius: 7,
    marginVertical: 6,
    marginLeft:12,
    paddingHorizontal: 5,
  },
  txtfield1: {
    backgroundColor: 'silver',
    width: '80%',
    height:40,
    borderRadius: 7,
    marginVertical: 6,
    marginLeft:12,
    paddingHorizontal: 5,
  },

  txtfield2:{

    width: '80%',
    height:200,
    
    backgroundColor: 'silver',
    borderRadius: 7,
    marginVertical: 6,
    color:'black',
 
    
    marginLeft:12,
    paddingHorizontal: 5,


  },



});

export default CIT;
