import React from 'react';
import {useEffect, useState} from 'react';


import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  Touchable,
  Image,
  TouchableOpacity,
  ScrollView,StyleSheet,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';

// import Background from './Background';
// import Backround2 from './Backround2';
// import Btn from './Btn';
import {darkGreen} from '../constants';


import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
// import Home from './Home';
// import Screen1 from './Screen1';
// import Screen2 from './Screen2';
import {useForm, Controller} from 'react-hook-form'
const AdminCIT = ({navigation,route}) => {

    const {  control } = useForm();
    const [ExpertiesOpen, setExpertiesOpen] = useState();
    const [ExpertiesValue, setExpertiesValue] = useState();
    const [Experties, setExperties] = useState([
      { label: "Murder", value: "Murder" },
      { label: "Kidnapping", value: "Kidnapping" },
      { label: "Robbery", value: "Robbery" },
      { label: "Rape", value: "Rape" },
  
    ]);
  const [TeamName, setTeamName] = useState();
  const [TeamID, setTeamID] = useState();
  const [Password, setPassword] = useState();
  const [MemberNumber, setMemberNumber] = useState();
  const [TeamLeader, setTeamLeader] = useState();
 
  const [Data,setData] = useState([]);
  const ID = {
    id:Math.random().toString(),
  }
  var TEAMS = () => {
    if(TeamName== null || TeamLeader== null || MemberNumber==  null || ExpertiesValue== null )
    {
alert ('Fill the form')
    }
    // console.log(cityValue)
    else{
    firestore()
      .collection('Team')
      .add({
        TeamName: TeamName,
        TeamLeader: TeamLeader,
        MemberNumber: MemberNumber,
        ExpertiesValue: ExpertiesValue,
        TeamID:TeamID,
        Password:Password,

      })
      .then(() => {
        alert('Teams Created');
      }).catch(()=>{
        alert('error')
      });

    }
    
  }

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
        <TouchableOpacity>
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
          <Text style={{color: 'white', fontSize:16, fontWeight:'bold'}}>
        CREATE INVESTIGATION TEAMS
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
         
         
             
        </View>
        <ScrollView style={{}}>
        <Text
              style={{
                color: '#10942e',
                marginTop:25,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             TEAM NAME
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={TeamName}
              onChangeText={setTeamName}
              placeholder="Enter Name"
              // secureTextEntry={true}
            />
             <Text
              style={{
                color: '#10942e',
                marginTop:25,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             TEAM LEADER
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={TeamLeader}
              onChangeText={setTeamLeader}
              placeholder="Enter Leader Name"
              // secureTextEntry={true}
            />
            <Text
              style={{
                color: '#10942e',
                marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
           NO OF TEAM MEMBERS
            </Text>

            <TextInput
           
              style={{
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
              }}
              placeholderTextColor="grey"
              value={MemberNumber}
              onChangeText={setMemberNumber}
              placeholder="Enter Total number of team members"
              keyboardType={'numeric'}
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
                
              EXPERTIES
            </Text>
            <Controller
        name="Experties"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={ExpertiesOpen}
              value={ExpertiesValue} //genderValue
              items={Experties}
              setOpen={setExpertiesOpen}
              setValue={setExpertiesValue}
              setItems={setExperties}
              placeholder="Select Experties Type"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={6}
              zIndexInverse={16}
            />
          </View>
        )}
      />
        <Text
              style={{
                color: '#10942e',
                marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
          TEAMS ID
            </Text>

            <TextInput
           
              style={{
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
              }}
              placeholderTextColor="grey"
              value={TeamID}
              onChangeText={setTeamID}
              placeholder="Enter Team ID"
              keyboardType={'numeric'}
              // secureTextEntry={true}
            />
  <Text
              style={{
                color: '#10942e',
                marginTop:15,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
          PASSWORD
            </Text>

            <TextInput
           
              style={{
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
              }}
              placeholderTextColor="grey"
              value={Password}
              onChangeText={setPassword}
              placeholder="Enter Password"
              keyboardType={'password'}
              // secureTextEntry={true}
            />
       
           
        </ScrollView>
        </View>
  
        <View style={{marginLeft: 280, }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 200,
              height: 50,
              alignItems: 'center',
              marginLeft:-245,
              marginTop:-22
            }}
            // onPress={() => navigation.navigate('UserPanel')}
           onPress={TEAMS}>
            <Text style={{color: 'white', fontSize: 19, marginTop: 12, fontWeight:'bold'}}>
        Create Teams
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
export default AdminCIT;
