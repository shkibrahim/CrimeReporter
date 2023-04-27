import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form'
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  Touchable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Background from './Background';
import Backround2 from './Backround2';
import Btn from './Btn';
import {darkGreen} from './constants';
import Field from './Field';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import ImagePicker from 'react-native-image-picker';

const RMPB = ({navigation,route}) => {
    const [CompanyOpen, setCompanyOpen] = useState();
    const [CompanyValue, setCompanyValue] = useState();
    const [Company, setCompany] = useState([
      { label: "Honda", value: "Honda" },
      { label: "Toyota", value: "Toyota" },
      { label: "Yahama", value: "Yahama" },
      { label: "Kia", value: "Kia" },
      { label: "BMW", value: "BMW" },
    ]);
    const [GenderOpen, setGenderOpen] = useState();
    const [GenderValue, setGenderValue] = useState();
    const [Gender, setGender] = useState([
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" },
     
    ]);
    const {  control } = useForm();
    const takePhoto = () => { 
     
        ImagePicker.openCamera({
          cropping: true,
          mediaType:'photo',
        }).then(image => {
          setImage(image.path);
          setIsNavigated(true);
        }).catch((err) => { 
          console.log("openCamera catch" + err.toString()) });
  
       };
       const Gallery = () => {
         ImagePicker.openPicker({
           cropping: true,
           mediaType:'photo',
         }).then(image =>{
           setImage(image.path);
           setIsNavigated(true);
         });
        
    };
  const [MissingPersonName, setMissingPersonName] = useState();
  const [Age, setAge] = useState();
  const [Model, setModel] = useState();
  
  const [Color, setColor] = useState();
  const [VisualDescription, setVisualDescription] = useState();
  const { name } = route.params;
  const { cnic} = route.params;
  const {Relation} = route.params;
  const { contact } = route.params;
  const { districtValue } = route.params;
  const{policeValue} = route.params;
  const { cityValue } = route.params;
  const ID = {
    id:Math.random().toString(),
  }
  const [Data,setData] = useState([]);
  var GoBack = () => { 
    navigation.goBack();
  }
  var RMV = () => {
    if(name== null || cnic== null || contact==  null  || districtValue== null || GenderValue == null||  cityValue== null || policeValue== null ||  Relation == null ||  VisualDescription == null || MissingPersonName == null || Age == null  )
    {
alert ("Fill the information")
    }
    // console.log(cityValue)
    else{
    firestore()
      .collection('RMP')
      .add({
        name: name,
        cnic:cnic,
        contact: contact,
        ID:ID,
        // selectedImage : selectedImage,
        MissingPersonName : MissingPersonName,
        districtValue:districtValue,
        cityValue:cityValue,
        policeValue:policeValue,
        Relation: Relation,
       Age : Age,
       GenderValue :GenderValue,
        VisualDescription: VisualDescription,
        Status:"Pending",
     
      })
      .then(() => {
        alert('Report Registered!');
        navigation.navigate ("UserPanel")
      }).catch(()=>{
        alert('error')
      });

    }
    
  }
  const [selectedImage, setSelectedImage] = useState(null);

  const launchCam=()=>{
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      saveToPhotos: true,
    };
    
    launchCamera(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log("launch success")
        setSelectedImage(response.assets[0].uri);
      }
    });
  }
  
  const handleGalleryPress = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };
  
    launchImageLibrary(options, response => {
      if (response.assets) {
        setSelectedImage(response.assets[0].uri);
      }
    });
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
        <TouchableOpacity onPress={GoBack}>
       <Image
        source={require('../images/arrow.png')}
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
          <Text style={{color: 'white', fontSize: 20, fontWeight:'bold'}}>
       REPORT MISSING PERSON
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
              onPress={() => navigation.goBack()}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
              CASE REGISTERER
              </Text>
           
            </TouchableOpacity>
         
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
             >
              <Text style={{color: '#10942e', fontSize: 10, fontWeight:'bold'}}>M.PERSON INFORMATION</Text>
            </TouchableOpacity>
            <View style={{width:400, marginLeft:-29,marginTop:-7}}>
              
            <Text style={{color:'#10942e'}}>---------------------------------------------------------------</Text>
           
          
            </View>
          </View>
             
        </View>
        <ScrollView style={{}}>
        <Text
              style={{
                color: '#10942e',
                marginTop:5,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
            MISSING PERSON NAME
            </Text>
            <Text style={{color: 'black'}}>{MissingPersonName}</Text>

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
              value={MissingPersonName}
              onChangeText={setMissingPersonName}
              placeholder="Enter Name"
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
            MISSING PERSON AGE
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
              value={Age}
              onChangeText={setAge}
              placeholder="Enter Age"
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
                
     PICTURES
            </Text>
            <View style={{ flex: 1,
    alignItems: 'center',
    justifyContent: 'center',}}>
            {selectedImage && (
        <Image style={{ width: 200,
          height: 100,
          resizeMode: 'contain',
          marginBottom: 20,marginLeft:-300, marginTop:10}} source={{uri: selectedImage}} />
      )}</View>

            <TouchableOpacity  onPress= {handleGalleryPress}>
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
                  Upload Missing Person Photos
                </Text>
                <Image
        source={require('../images/u.png')}
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
                
           GENDER
            </Text>
            <Controller
        name="Gender"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdowndistrict}>
            <DropDownPicker
              style={styles.dropdown}
              open={GenderOpen}
              value={GenderValue} //genderValue
              items={Gender}
              setOpen={setGenderOpen}
              setValue={setGenderValue}
              setItems={setGender}
              placeholder="Select Gender"
              placeholderStyle={styles.placeholderStyles}
              dropDownDirection="TOP"
              onChangeValue={onChange}
              zIndex={30}
              zIndexInverse={40}
            />
          </View>
        )}
      />
          
         
            
             <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             VISUAL DESCRIPTION OF MISSING PERSON
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:150,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
               
              }}
              placeholderTextColor="grey"
              
              value={VisualDescription}
              onChangeText={setVisualDescription}
              placeholder="Describe visual description of missing person"
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
           onPress={RMV}>
            <Text style={{color: 'white', fontSize: 19, marginTop: 12, fontWeight:'bold'}}>
         REGISTER REPORT
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

export default RMPB;
