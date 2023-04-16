import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form'

import axios from 'axios';
import DropDownPicker from "react-native-dropdown-picker";
import {BASE_URL, API_KEY} from '@env';
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from '../Background';
import Backround2 from '../Backround2';
import Btn from '../Btn';
import {darkGreen} from '../constants';
import Field from '../Field';
import {Image} from 'react-native';

import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from '../Home';
import Screen1 from '../Screen1';
import Screen2 from '../Screen2';

const VCS = ({navigation}) => {
  const [description, setdescription] = useState();
  const [WitnessData, setWitnessData] = useState();
  const [EvidenceData, setEvidenceData] = useState();
  const [crimeOpen, setcrimeOpen] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [crime, setcrime] = useState([
    { label: "Murder", value: "Murder" },
    { label: "Robbery", value: "Robbery" },
    { label: "Rape", value: "Rape" },
    { label: "Kidnapping", value: "Kidnapping" },
  ]);


  var ITPScene = () => {
    {    
      navigation.navigate('FIRS',{  
        crimeValue:crimeValue,
        WitnessData: WitnessData,
        EvidenceData: EvidenceData,
        description:description,})
    }  
  }

 

 
 
 
  const [addBtnState, setAddBtnState] = useState(true);
    const [userList, setuserList] = useState([]);
  const {  control } = useForm();





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
        <TouchableOpacity
         onPress={() => navigation.navigate('ITPPanel')}>
       <Image
        source={require('../../images/arrow.png')}
        style={{
          width: 28,
          height: 38,
marginLeft:-175,
          paddingTop:12,
          marginTop: 12,

        }}
      />
      </TouchableOpacity>
      </View>
        <View style={{marginBottom: 19, marginTop:-35}}>
          <Text style={{color: 'white', fontSize: 29, fontWeight:'bold'}}>
       CRIME SCENE
          </Text>
        </View>
      
        <View
          style={{
            backgroundColor:'white',
           borderRadius:37,
          marginRight:9,
            width:390,
           
          
            marginBottom: 30,
            height:650,
          }}>
          {/* <ScrollView style={{backgroundColor:'white',borderRadius:37, width:390, marginLeft:-18}}> */}
          <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1, marginLeft: 80}}>
            <TouchableOpacity
              style={{
               
marginTop:22,
                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -40,
                width: 100,
                // height: 30,

                // paddingVertical: 5,
              }}
              onPress={() => props.navigation.navigate('PM')}>
              <Text style={{color: '#10942e', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
             CASE INFORMATION
              </Text>
           
            </TouchableOpacity>
            <View style={{width:400, marginLeft:-79}}>
                <TouchableOpacity   onPress={() =>navigation.navigate('Signup')}>
            <Text style={{color:'#10942e'}}>-----------------------------------------------</Text>
            </TouchableOpacity>
          
            </View>
          </View>
          <View style={{flex: 2, marginLeft: 60, }}>
            <TouchableOpacity
              style={{
                //  backgroundColor:'black',

              
                marginTop:22,
                marginLeft: 20,
                width: 300,
                height: 30,
                //  marginRight:50,
                
                //  marginRight:140
              }}
              onPress={FIR}
              >
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>SUSPECT INFORMATION</Text>
            </TouchableOpacity>
            
          </View>
             
        </View>
        <ScrollView style={{}}>
          
        <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
             ENTER TIME
            </Text>
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
            SELECT LOCATION
            </Text>

           
           

         

           
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
              CRIME TYPE
            </Text>
            <Controller
        name="crime"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={crimeOpen}
              value={crimeValue} //genderValue
              items={crime}
              setOpen={setcrimeOpen}
              setValue={setcrimeValue}
              setItems={setcrime}
              placeholder="Select Crime Type"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="DOWN"
              onChangeValue={onChange}
              zIndex={0.15}
            //   zIndexInverse={16}
            />
          </View>
        )}
      />
       
       
       
      
       <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
          EVIDENCES
            </Text>
            <TouchableOpacity>
              <View style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}>
                <Text style={{color:'grey', marginTop:12,}}>
                  Upload Evidences
                </Text>
                <Image
        source={require('../../images/u.png')}
        style={{
          width: 28,
          height: 22,
marginLeft:295,
          paddingTop:12,
          marginTop: -19
        }}
      />

              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
          EVIDENCES INCLUDE
            </Text>
            <TextInput
           
              style={{
                textAlign:'left',
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:100,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
             
              value={EvidenceData}
              onChangeText={(EvidenceData) }
              placeholder="Evidences include... "
              // secureTextEntry={true}
            />
             <Text
              style={{
                color: '#10942e',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
                
        WITNESS
            </Text>
            <TextInput
           
           style={{
             textAlign:'left',
             borderRadius: 10,
             color: darkGreen,
             marginLeft: 12,
             paddingHorizontal: 10,
             width: 350,
             height:100,
             borderColor: "#B7B7B7",
             marginBottom:30,
             backgroundColor: '#eceded',
             marginVertical: 10,
           }}
           placeholderTextColor="grey"
          
           value={WitnessData}
           onChangeText={(setWitnessData) }
           placeholder="Write Witness information "
           // secureTextEntry={true}
         />
            <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
            DESCRIPTION
            </Text>

            <TextInput
           
              style={{
                textAlign:'left',
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:200,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={description}
              onChangeText={(description) => {
                name === '' || cnic === '' || contact === '' || description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                setdescription(description);
            }}
              placeholder="Describe the Scenario "
              // secureTextEntry={true}
            />
        </ScrollView>
        </View>
       
  
        <View style={{marginLeft: 280,marginTop:-20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius:10,
              width: 80,
              height: 35,
              alignItems: 'center',
            }}
            onPress={FIR}
            // onPress={() =>{navigation.navigate('FIRS',{  name: name,
            //   cnic:cnic,
            //   contact: contact,
            //   crimeValue:crimeValue,
            //   districtValue:districtValue,
            //   cityValue:cityValue,
            //   policeValue:policeValue,
            //   description:description,})}}
            >
            <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
            NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </Back3>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
   
  },
  placeholderStyles: {
    color: "grey",
    
  },
  dropdownGender: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdowndistrict: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdowncity: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdownpolice: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width:"90%",
    marginBottom: 15,
    marginLeft:12,
    borderRadius: 7,
    marginTop:10,
    marginBottom:30,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },


 
});
export default VCS;
