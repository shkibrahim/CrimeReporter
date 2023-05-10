import React from 'react';
import {useEffect, useState} from 'react';


import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {darkGreen} from './constants';

import {Image} from 'react-native';


const Rcomplaints = ({navigation,route}) => {


 
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
  const { cnic} = route.params;
  const { description} = route.params;
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
  var Complaint = () => {
    if(name== null || cnic== null || contact==  null || crimeValue== null || districtValue== null || cityValue== null || policeValue== null || description == null || selectedDate == null || longitude == null || latitude == null ||
       SuspectName == null || SuspectContact == null || Reason == null || relation == null || SuspectDescription == null || victimValue == null )
    {
alert ('Fill the form')
    }
    // console.log(cityValue)
    else{

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
        <TouchableOpacity onPress={() =>navigation.navigate('Rcomplaint')}>
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
              onPress={() => navigation.navigate('Rcrime')}>
              <Text style={{color: 'grey', marginTop: 0, fontSize: 10, fontWeight:'bold'}}>
              CASE INFORMATION
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
              <Text style={{color: '#10942e', fontSize: 10, fontWeight:'bold'}}>SUSPECT INFORMATION</Text>
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
            <TouchableOpacity onPress={handleGalleryPress}>
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
            </TouchableOpacity>
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
           onPress={Complaint}>
            <Text style={{color: 'white', fontSize: 17, marginTop: 14, fontWeight:'bold'}}>
         REGISTER COMPLAINT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </Back3>
  );
};

export default Rcomplaints;
