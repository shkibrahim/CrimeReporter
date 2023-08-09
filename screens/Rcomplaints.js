import React from 'react';
import {useEffect, useState} from 'react';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';
import {
  View,Keyboard,
  Text,
  Touchable,  ActivityIndicator,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {darkGreen} from './constants';

import {Image} from 'react-native';


const Rcomplaints = ({navigation,route}) => {

  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardActive(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardActive(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
 
  const [SuspectName, setSuspectName] = useState();
  const [SuspectContact, setSuspectContact] = useState();
  const [Reason, setReason] = useState();
  const [relation, setrelation] = useState();
  const [SuspectDescription, setSuspectDescription] = useState();
  const { name } = route.params;
  const {victimValue} = route.params;
  const { selectedDate} = route.params;
  const { longitude} = route.params;
  const { latitude} = route.params;
  const {Evidence} = route.params;
  const { cnic} = route.params;
  const { description} = route.params;
  const {Simage} = route.params;
  // const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    // const {trackValue} = route.params;
    const[trackValue, settrackValue] = useState();
  const { contact } = route.params;
  const { crimeValue } = route.params;
  const { districtValue } = route.params;
  const{policeValue} = route.params;
  const { cityValue } = route.params;
  const [Data,setData] = useState([]);
  const ID = {
    id:Math.random().toString(),
  }
  var Complaint = async() => {
    if(name== null || cnic== null || contact==  null || 
      Evidence == null ||crimeValue== null || districtValue== null || cityValue== null || policeValue== null || description == null || selectedDate == null || longitude == null || latitude == null ||
       SuspectName == null || SuspectContact == null || Reason == null || relation == null || SuspectDescription == null || victimValue == null )
    {
alert ('Fill the form')
    }
    // console.log(cityValue)
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
      .collection('Complaint')
      .add({
        name: name,
        ID:ID,
        trackValue:"Pending",
        cnic:cnic,
        victimValue:victimValue,
        contact: contact,
        latitude : latitude,
        longitude : longitude,
        selectedDate : selectedDate,
        crimeValue:crimeValue,
        districtValue:districtValue,
        cityValue:cityValue,
        policeValue:policeValue,
        description:description,
        suspectname:SuspectName,
        suspectcontact:SuspectContact,
        reason:Reason,
        relation:relation,
        SuspectDescription:SuspectDescription,
        Status:"Pending"
      })
      .then(() => {
        alert('Complaint Registered!');
        navigation.navigate('Complaints')
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
         
          width: 460,
          borderTopLeftRadius: 130,
          paddingTop: 0,
          alignItems: 'center',
        }}>
       <View>
        <Pressable onPress={() =>navigation.navigate('Rcomplaint')}>
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
      </Pressable>
      </View>
        <View style={{marginBottom: 19, marginTop:-35}}>
          <Text style={{color: 'white', fontSize: 29, fontWeight:'bold'}}>
        COMPLAINT
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
            <Pressable
              style={{
               
marginTop:22,
                alignItems: 'center',
                borderRadius: 3,
                marginLeft: -40,
                width: 100,
                // height: 30,

                // paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Rcrime')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
              CASE INFORMATION
              </Text>
           
            </Pressable>
         
          </View>
          <View style={{flex: 2, marginLeft: 60, }}>
            <Pressable
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
              <Text style={{color: '#10942e', fontSize: 10, fontWeight:'bold'}}>SUSPECT INFORMATION</Text>
            </Pressable>
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
              SUSPECT NAME
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
              value={SuspectName}
              onChangeText={setSuspectName}
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
            SUSPECT CONTACT NO.
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
              value={SuspectContact}
              onChangeText={setSuspectContact}
              placeholder="Enter contact number"
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
                
         SUSPECT IMAGES
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
            <Pressable onPress={handleGalleryPress}>
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
                  Upload Suspect images
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
            </Pressable>
            <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             REASON FOR SUSPECT
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
              
              value={Reason}
              onChangeText={setReason}
              placeholder="Describe"
              // secureTextEntry={true}
            />
             <Text
              style={{
                color: '#10942e',
               
                fontWeight: 'bold',
                marginLeft: 15,
                fontSize: 14,
              }}>
             RELATION WITH VICTIM 
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 12,
                paddingHorizontal: 10,
                width: 350,
                height:90,
                borderColor: "#B7B7B7",
                marginBottom:15,
                backgroundColor: '#eceded',
                marginVertical: 10,
               
              }}
              placeholderTextColor="grey"
              placeholder="Describe"
              value={relation}
              onChangeText={setrelation}
            
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
              
              value={SuspectDescription}
              onChangeText={setSuspectDescription}
              placeholder="Describe"
              // secureTextEntry={true}
            />
           
        </ScrollView>
        {isKeyboardActive ? (
              <Text style={{height:180}}></Text>
            ) : (
              null
            )}
        </View>
  
        <View style={{marginLeft: 280, }}>
          <Pressable
              style={{
                backgroundColor: '#10942e',
                borderRadius: 10,
                width: 200,
                height: 50,
                alignItems: 'center',
                marginLeft: -245,
                marginTop: -22,
              }}
              // onPress={() => navigation.navigate('UserPanel')}
              onPress={Complaint}>
                {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text
                style={{
                  color: 'white',
                  fontSize: 19,
                  marginTop: 12,
                  fontWeight: 'bold',
                }}>
                REGISTER COMPLAINT
              </Text>
              )}

              
            </Pressable>
        </View>
      </View>

    </View>
    </Back3>
  );
};

export default Rcomplaints;
