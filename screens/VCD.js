import {Text, View, StyleSheet, ScrollView, TextInput,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


const VCD= ({navigation}) => {
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
         
      <View style={{ marginHorizontal: 90,  marginTop:20,marginBottom:90, marginVertical: 50,width:'100%',height:'4%',  }}>
      <Image source={require("../images/logo.png") }  
      style={{width:200,
        height: 200,
       
        alignContent:'center',
        marginTop:0
        }}/>
          </View>
         <View>
            <Text style={{fontSize:35,color:'black', fontWeight:'bold',textAlign:'center'}}>CRIMINAL DATABASE </Text> 
            </View>
          <ScrollView style={styles.mainContainer}>
        <Text style={styles.text1}>   SEARCH BY CNIC</Text>

        
       
          <TextInput style={styles.txtfield} placeholder="Enter CNIC" />
          
          
         
       
        
     

        <View style={styles.container3}>
         

        
        </View>

       
        <View style={styles.container3}>
          
          
        

        </View>


      
        <View style={styles.container2 }>

        
       
           <TouchableOpacity  onPress={() =>  alert("No Criminal Found")} style={{marginTop:10,marginBottom:5,marginLeft:80,width:200,height:50, alignItems:'center',backgroundColor: 'red',borderRadius: 7,}} >
            
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
            textAlign:'center',}} >Search</Text>
            
          </TouchableOpacity>
        

        </View>
        
          </ScrollView>
          <ScrollView style={styles.mainContainer}>
        <Text style={styles.text1}>   SEARCH BY IMAGE</Text>

        
        <TouchableOpacity onPress={() =>alert("No Images")}
        style={{width: '80%',
    height:40,
   alignContent:'center',
    borderRadius: 7,
    marginVertical: 6,
    marginLeft:30,
    paddingHorizontal: 5, }} >
             <Text style={{backgroundColor: 'green',
           width: 300,
           height:40,
           borderRadius: 7,
           marginVertical: 6,
      
           paddingHorizontal: 5,
            fontWeight:'bold',
           fontSize:17,
       
            paddingHorizontal: 5,
            textAlign:'center',}} >Upload Image</Text>
          </TouchableOpacity>
          
          
         
       
        
     

        <View style={styles.container3}>
         

        
        </View>

       
        <View style={styles.container3}>
          
          
        

        </View>


      
        <View style={styles.container2 }>

        
       
           <TouchableOpacity  onPress={() =>alert("No Criminal Found")} style={{marginTop:15,marginBottom:5,marginLeft:80,width:200,height:50, alignItems:'center',backgroundColor: 'red',borderRadius: 7,}} >
            
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
            textAlign:'center',}} >Search</Text>
            
          </TouchableOpacity>
        

        </View>
        
          </ScrollView>
      </View>
  
  );
};

const styles = StyleSheet.create({
  mainContainer: {marginLeft:0,marginTop:60,marginRight:10,paddingBottom:0, borderRadius:9, backgroundColor: 'grey', },

  container1: {
    textAlign: 'left',
   marginLeft:12,
   
    // backgroundColor: 'red',
  },
  text1: {
    alignItems:'center',
    marginVertical: 0,
    fontSize:30,
  color:'black',
  fontWeight:'bold',
    paddingTop:0,
    paddingHorizontal: 0,

    
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
    marginLeft:35,
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

export default VCD;
