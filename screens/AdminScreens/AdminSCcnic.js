import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Touchable, FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import firestore from '@react-native-firebase/firestore';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';


const AdminSCcnic = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setpassword] = useState();
  const [List, setList] = useState([]);
  var Team = firestore().collection('CriminalData');
 

  useEffect(() => {
    var Dataa = async () => {
      await Team.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
       
      });
    };
    Dataa();
  });
  var SearchCNIC = async () => {
    if(cnic== null){
      alert ('Fill the CNIC')
    }
    else{
            await  Team
              .where('cnic', '==',cnic) 
              .get() 
              .then(data => { 
                setList(data.docs.map(doc => ({...doc.data(), id: doc.id}))); 
              });
          }
         
       
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
const [selectedImage, setSelectedImage] = useState(null);
const [selectedImage1, setSelectedImage1] = useState(null);

const [selectedImageUrl, setSelectedImageUrl] = useState('');
const [Data, setData] = useState({});
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
            {/* <TouchableOpacity
                 onPress={() => navigation.navigate('FIR')}>
              <Image
                source={require('../../images/menu.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              />
            </TouchableOpacity> */}
          </View>
          <View style={{marginBottom: 13, marginTop: 13}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
          <View>
    
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              // marginBottom: 30,
              height: 650,
            }}>
            <View style={{marginLeft: 10, marginTop: 18}}>
           
              <View style={{backgroundColor: '#10942e',marginLeft:0, width:370,height:50, borderRadius:8,marginTop:8 , marginBottom:20}}>
            <TouchableOpacity
            disabled = {true}
              onPress={() => navigation.navigate('RNC')}>
              <Text style={{fontSize:20, marginLeft:73, fontWeight:'bold', color:'white', marginTop:9, alignContent:'center'}}>Search Criminal By CNIC</Text>
            </TouchableOpacity>
          </View>
          <TextInput
           
           style={{
             borderRadius: 10,
             color: 'black',
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
           value={cnic}
           onChangeText={setcnic}
           placeholder="Enter Cnic"
           // secureTextEntry={true}
         />


        
          <View style={{backgroundColor: 'red', width:140,height:50, borderRadius:8,marginTop:8, alignSelf:'center', alignItems:'center' }}>
            <TouchableOpacity  onPress={SearchCNIC}>
              <Text style={{fontSize:20,fontWeight:'bold', color:'white', marginTop:10}}>SEARCH </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
              <FlatList
                style={{width: '100%'}}
                data={List}
                // horizontal={true}
                // Horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                  if (item != undefined) {
                    return (
                    //  <FlatList 
                    <View style={{ width: 370,
                        marginRight:19,
                        marginLeft:-12,
                        height: 440,}}>
                      <View
                        style={{
                        //   backgroundColor: 'white',
                          borderColor: 'red',
                          marginBottom: 10,
                        //   borderRadius: 19,
                          margin: 10,
                         
                          width: 370,
                          height: 390,
                        }}>
                          <ScrollView>
                        {/* <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 180,
                            fontSize: 18,
                            alignItems:'center',
                            name: 'cnic',
                          }}>
                          {index + 1}
                        </Text> */}
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                          }}>
                        Criminal Image
                        </Text>
                        <View
                style={{
                  alignItems: 'center',
                  marginLeft: 140,
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
                  source={{uri: item.CriminalImage}}
                />
                <View style={{marginTop: -50, marginLeft: 49}}>
                  {/* <TouchableOpacity  disabled= {!inputEditable} onPress={handleGalleryPress}>
                    <Image
                      source={require('../images/load.png')}
                      style={{
                        width: 70,
                        height: 70,

                     
                        marginTop: 18,
                      }}
                    />
                  </TouchableOpacity> */}
                </View>
              </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                          }}>
                        Criminal Name
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            name: 'cnic',
                          }}>
                          {item.CName}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            marginBottom:-5,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            // name: 'cnic',
                          }}>
                          CNIC
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            
                          }}>
                          {item.cnic}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                           
                          }}>
                          Crime Involved In
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            name: 'cnic',
                          }}>
                          {item.CrimeValue}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginLeft: 10,
                            fontSize: 14,
                           
                            marginBottom:-5,
                          }}>
                          Status
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                          
                          }}>
                          {item.StatusValue}
                        </Text>
                        </View>
                        <Text
                          style={{
                            color: '#10942e',
                            fontWeight: 'bold',
                            marginBottom: 15,
                            marginLeft: 10,
                            fontSize: 14,
                            marginBottom:-5,
                           
                          }}>
                        Address
                        </Text>
                        <View style ={{backgroundColor:  '#eceded',  borderRadius: 10,  paddingHorizontal: 10,
                marginBottom:30,
                marginVertical: 10,}}>
                        <Text
                          style={{
                            color: 'grey',
                            // fontWeight: 'bold',
                            // marginLeft: 10,
                            marginTop:10,
                            marginBottom: 10,
                            fontSize: 14,
                            name: 'cnic',
                          }}>
                          {item.Address}
                        </Text>
                        </View>
                       
                      
                        </ScrollView>

                      
                        <View style={{ marginBottom: -5}}>
       
        </View>
                       
                      </View >
                     
                        {/* <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 160,
              marginLeft: 17,
              marginTop:0,
              height: 50,
              alignSelf:'flex-start',
              alignItems: 'center',
              alignContent: 'center'

            }}
            onPress={() => navigation.navigate('AdminVAC')}>
            <Text style={{ color: 'white', fontSize:17, marginTop: 13, fontWeight:'bold', alignSelf:'center'}}>
         ASSIGN A CASE
            </Text>
          </TouchableOpacity>  */}
          {/* <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              width: 160,
              // marginLeft: 80,
              marginTop:-49,
              height: 50,
              alignSelf:'flex-end',
              alignItems: 'center',
              alignContent: 'center'

            }}
            onPress={() => navigation.navigate('AdminAssignedCasesTeam')}>
            <Text style={{ color: 'white', fontSize:17, marginTop: 13, fontWeight:'bold', alignSelf:'center'}}>
        VIEW CASES
            </Text>
          </TouchableOpacity>  */}
         
                      </View>
                    );
                  }
                }}
              />
            </View>





         
             
              
            </View>
          </View>
        
          
          
         
          
          
         
          {/* <View style={{marginLeft: 0, marginTop: -320}}>
          
          </View> */}
       
   
   
        </View>
       
      </View>
    </Back3>
  );
};

export default AdminSCcnic;
