import React from 'react';
import {useEffect, useState} from 'react';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  Touchable,ActivityIndicator,
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

import {StorageKeys} from '../Data/StorageKeys';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';
// import Home from './Home';
// import Screen1 from './Screen1';
// import Screen2 from './Screen2';
import {useForm, Controller} from 'react-hook-form'
const RNC = ({navigation,route}) => {

    const {  control } = useForm();
    const [CrimeOpen, setCrimeOpen] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [CrimeValue, setCrimeValue] = useState();
    const [Crime, setCrime] = useState([
      { label: "Murder", value: "Murder" },
      { label: "Kidnapping", value: "Kidnapping" },
      { label: "Robbery", value: "Robbery" },
      { label: "Rape", value: "Rape" },
  
    ]);
    const [StatusOpen, setStatusOpen] = useState();
    
    const [StatusValue, setStatusValue] = useState();
    const [Status, setStatus] = useState([
      { label: "In jail", value: "In jail" },
      { label: "Free", value: "Free" },
    
  
    ]);
  const [CName, setCName] = useState();
  const [cnic, setcnic] = useState();
  const [Address, setAddress] = useState();
  const [MemberNumber, setMemberNumber] = useState();
  const [TeamLeader, setTeamLeader] = useState();
 
  const [Data,setData] = useState([]);
  const ID = {
    id:Math.random().toString(),
  }
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

var RMV = async() => {
  if(CName== null || cnic== null || StatusValue== null ||CrimeValue== null || Address == null )
  {
alert ('Fill the form')
  }

  else{
    setIsLoading(true);
    const reference = storage().ref(selectedImage1.assets[0].fileName);
  const pathToFile = selectedImage;

  await reference.putFile(pathToFile);

  const url = await storage()
    .ref(selectedImage1.assets[0].fileName)
    .getDownloadURL();
  setSelectedImageUrl(url);
  firestore()
    .collection('CriminalData')
    .add({
      CName: CName,
      cnic:cnic,
      CrimeValue: CrimeValue,
     StatusValue:StatusValue,
     Address:Address,
     CriminalImage:url,
    
     
     
   
    })
    .then(() => {
      alert('Report Registered!');
      navigation.navigate('ACD')
    }).catch(()=>{
      alert('error')
    });

  }
  
}
const [selectedImage, setSelectedImage] = useState(null);
const [selectedImage1, setSelectedImage1] = useState(null);

const [selectedImageUrl, setSelectedImageUrl] = useState('');

const FIR2= async () => {
  console.log('111111: ',selectedImage1.assets[0].fileName)
  console.log('111111: ',selectedImage)
  const reference = storage().ref(selectedImage1.assets[0].fileName);
  const pathToFile = selectedImage;

  await reference.putFile(pathToFile);

  const url = await storage()
    .ref(selectedImage1.assets[0].fileName)
    .getDownloadURL();
  setSelectedImageUrl(url);

  console.log('111111: ',selectedImage1.assets[0].fileName)
  console.log('111111: ',selectedImage)
  console.log('111111: ',url)
};
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
      setSelectedImage1(response);
    }
  });
};
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
        REGISTER NEW CRIMINAL
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
           CRIMINAL IMAGE
            </Text>
        <View
                style={{
                  alignItems: 'center',
                  marginLeft: 150,
                  width: 90,
                  height: 87,
                  backgroundColor: 'black',
                  borderRadius: 55,
                  marginTop: 12,
                }}>
                <Image
                  style={{
                    width: 90,
                    borderRadius: 55,
                    height: 87,
                    resizeMode:'cover',
                    // marginBottom: 20,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                  source={{uri: selectedImage}}
                />
                <View style={{marginTop: -50, marginLeft: 49}}>
                  <TouchableOpacity   onPress={handleGalleryPress}>
                    <Image
                      source={require('../../images/load.png')}
                      style={{
                        width: 70,
                        height: 70,

                     
                        marginTop: 18,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

        <Text
              style={{
                color: '#10942e',
                marginTop:25,
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
           CRIMINAL NAME
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
              value={CName}
              onChangeText={setCName}
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
           CRIMINAL CNIC
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
              value={cnic}
              onChangeText={setcnic}
              placeholder="Enter CNIC"
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
                
              CRIME INVOLVED IN
            </Text>
            <Controller
        name="Crime"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={CrimeOpen}
              value={CrimeValue} //genderValue
              items={Crime}
              setOpen={setCrimeOpen}
              setValue={setCrimeValue}
              setItems={setCrime}
              placeholder="Select Crime Involved In"
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
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 14,
                name: 'cnic',
              }}>
              STATUS
            </Text>
            <Controller
        name="Status"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={StatusOpen}
              value={StatusValue} //genderValue
              items={Status}
              setOpen={setStatusOpen}
              setValue={setStatusValue}
              setItems={setStatus}
              placeholder="Select Status "
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
         ADDRESS
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
              value={Address}
              onChangeText={setAddress}
              placeholder="Enter Address"
            //   keyboardType={'password'}
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
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
            <Text style={{color: 'white', fontSize: 19, marginTop: 12, fontWeight:'bold'}}>
      Register
            </Text>
              )} 
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
export default RNC;
