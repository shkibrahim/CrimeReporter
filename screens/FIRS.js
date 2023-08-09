import React from 'react';
import {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import storage from '@react-native-firebase/storage';
import {useForm, Controller} from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  TouchableOpacity,StyleSheet,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import Back3 from './Back3';

import {darkGreen} from './constants';

import {Image} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const FIRS = ({navigation, route}) => {
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
  const [SuspectOpen, setSuspectOpen] = useState('No');
  const [SuspectValue, setSuspectValue] = useState('No');
  const [Suspect, setSuspect] = useState([

    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);
  const [suspectcnic, setsuspectcnic] = useState('No');
  const [suspectname, setsuspectname] = useState('No');
  const [trackValue, settrackValue] = useState(null);
  const [suspectcontact, setsuspectcontact] = useState('No');
  const [Reason, setReason] = useState('No');
  const [relation, setrelation] = useState('No');
  const [SuspectDescription, setSuspectDescription] = useState('No');
  const {name} = route.params;
  const {cnic} = route.params;
  const {description} = route.params;
  const {contact} = route.params;
  const {crimeValue} = route.params;
  const {districtValue} = route.params;
  const {control} = useForm();
  const {Evidence} = route.params;
  const {policeValue} = route.params;
  const {selectedDate} = route.params;
  const {latitude} = route.params;
  const {cityValue} = route.params;
  const {longitude} = route.params;
  const {Simage} = route.params;
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ID = {
    id: Math.random().toString(),
  };

  const FIRTOKEN = Math.floor(1000000 + Math.random() * 9000000);

  var FIR = async () => {
    if (
      name == null ||
      // suspectcnic == null ||
      cnic == null ||
      Evidence == null ||
      contact == null ||
      crimeValue == null ||
      districtValue == null ||
      cityValue == null ||
      policeValue == null ||
      description == null ||
      SuspectValue == null ||
      // suspectname == null ||
      // suspectcontact == null ||
      // Reason == null ||
      // relation == null ||
      // SuspectDescription == null ||
      selectedDate == null ||
      longitude == null ||
      latitude == null
    ) {
      alert('Fill the form');
    } else {
      setIsLoading(true);
      var url='';
      if(selectedDate!=undefined && selectedImage1!=undefined ){
      const reference = storage().ref(selectedImage1.assets[0].fileName);
      const pathToFile = selectedImage;

      await reference.putFile(pathToFile);
     
      url = await storage()
        .ref(selectedImage1.assets[0].fileName)
        .getDownloadURL();
      setSelectedImageUrl(url);

      }

      firestore()
        .collection('FIR')
        .add({
          name: name,
          SuspectValue:SuspectValue,
          cnic: cnic,
          Evidence: Evidence,
          FIRTOKEN:FIRTOKEN,
          ID: ID,
          contact: contact,
          crimeValue: crimeValue,
          districtValue: districtValue,
          cityValue: cityValue,
          policeValue: policeValue,
          description: description,
          suspectname: suspectname,
          suspectcnic: suspectcnic,
          suspectcontact: suspectcontact,
          reason: Reason,
          relation: relation,
          selectedDate: selectedDate,
          longitude: longitude,
          latitude: latitude,
          trackValue: trackValue,
          Status: 'Pending',
          SuspectDescription: SuspectDescription,
          EvidenceImage: Simage,
          SuspectImage: url,
        })
        .then(() => {
          setIsLoading(false);
          // alert('Your FIR Token number is', FIRTOKEN)
          console.log(FIRTOKEN)
          alert('Your FIRTOKEN IS ' + FIRTOKEN)
          alert('FIR Registered!  Your Token ID is '+ FIRTOKEN);
          navigation.navigate('FIR');
        })
        .catch(() => {
          setIsLoading(false);
          alert('error');
        });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const FIR2 = async () => {
    console.log('111111: ', selectedImage1.assets[0].fileName);
    console.log('111111: ', selectedImage);
    const reference = storage().ref(selectedImage1.assets[0].fileName);
    const pathToFile = selectedImage;

    await reference.putFile(pathToFile);

    const url = await storage()
      .ref(selectedImage1.assets[0].fileName)
      .getDownloadURL();
    setSelectedImageUrl(url);

    console.log('111111: ', selectedImage1.assets[0].fileName);
    console.log('111111: ', selectedImage);
    console.log('111111: ', url);
  };

  const launchCam = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('launch success');
        setSelectedImage(response.assets[0].uri);
        setSelectedImage1(response);
      }
    });
  };

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../images/arrow.png')}
                style={{
                  width: 28,
                  height: 38,
                  marginLeft: -175,
                  paddingTop: 12,
                  marginTop: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 19, marginTop: -35}}>
            <Text style={{color: 'white', fontSize: 29, fontWeight: 'bold'}}>
              FIR
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>
            {/* <ScrollView style={{backgroundColor:'white',borderRadius:37, width:390, marginLeft:-18}}> */}
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View style={{flex: 1, marginLeft: 80}}>
                <TouchableOpacity
                  style={{
                    marginTop: 22,
                    alignItems: 'center',
                    borderRadius: 3,
                    marginLeft: -40,
                    width: 100,
                    // height: 30,

                    // paddingVertical: 5,
                  }}
                  onPress={() => navigation.navigate('Rcrime')}>
                  <Text
                    style={{
                      color: 'grey',
                      marginTop: 0,
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    CASE INFORMATION
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 2, marginLeft: 60}}>
                <TouchableOpacity
                  style={{
                    //  backgroundColor:'black',

                    marginTop: 22,
                    marginLeft: 20,
                    width: 300,
                    height: 30,
                    //  marginRight:50,

                    //  marginRight:140
                  }}>
                  <Text
                    style={{
                      color: '#10942e',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    SUSPECT INFORMATION
                  </Text>
                </TouchableOpacity>
                <View style={{width: 400, marginLeft: -29, marginTop: -7}}>
                  <Text style={{color: '#10942e'}}>
                    ---------------------------------------------------------------
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView style={{}}>
            <Text
                style={{
                  color: '#10942e',
                  marginTop: 5,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
               ANY SUSPECT
              </Text>
              <Controller
                name="Suspect"
                defaultValue=""
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.dropdownGender}>
                    <DropDownPicker
                      style={styles.dropdown}
                      open={SuspectOpen}
                      value={SuspectValue} //genderValue
                      items={Suspect}
                      setOpen={setSuspectOpen}
                      setValue={setSuspectValue}
                      setItems={setSuspect}
                      placeholder="Select"
                      placeholderStyle={styles.placeholderStyles}
                      dropDownDirection="DOWN"
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
                  marginTop: 5,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                SUSPECT NAME
              </Text>
              {/* 
            <TouchableOpacity
            
            // onPress={() => navigation.navigate('UserPanel')}
           onPress={FIR}>
            <Text style={{color: 'black', fontSize: 19, fontWeight:'bold'}}>
         REGISTER FIR
            </Text>
          </TouchableOpacity> */}

              <TextInput
                style={{
                  borderRadius: 10,
                  color: darkGreen,
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 15,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={suspectname}
                onChangeText={setsuspectname}
                placeholder="Enter Name"
                // secureTextEntry={true}
              />

              <Text
                style={{
                  color: '#10942e',
                  marginTop: 15,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                SUSPECT Cnic
              </Text>

              <TextInput
                style={{
                  borderRadius: 10,
                  color: darkGreen,
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={suspectcnic}
                onChangeText={setsuspectcnic}
                placeholder="Enter Suspect cnic"
                keyboardType={'numeric'}
                // secureTextEntry={true}
              />
              <Text
                style={{
                  color: '#10942e',
                  marginTop: 15,
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
                  height: 50,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={suspectcontact}
                onChangeText={setsuspectcontact}
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
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {selectedImage && (
                  <Image
                    style={{
                      width: 200,
                      height: 100,
                      resizeMode: 'contain',
                      marginBottom: 20,
                      marginLeft: -300,
                      marginTop: 10,
                    }}
                    source={{uri: selectedImage}}
                  />
                )}
              </View>
              <TouchableOpacity onPress={handleGalleryPress}>
                <View
                  style={{
                    borderRadius: 10,
                    color: darkGreen,
                    marginLeft: 12,
                    paddingHorizontal: 10,
                    width: 350,
                    height: 50,
                    borderColor: '#B7B7B7',
                    marginBottom: 30,
                    backgroundColor: '#eceded',
                    marginVertical: 10,
                  }}>
                  <Text style={{color: 'grey', marginTop: 12}}>
                    Upload Suspect images
                  </Text>
                  <Image
                    source={require('../images/u.png')}
                    style={{
                      width: 28,
                      height: 22,
                      marginLeft: 295,
                      paddingTop: 12,
                      marginTop: -19,
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
                  height: 150,
                  borderColor: '#B7B7B7',
                  marginBottom: 15,
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
                  height: 90,
                  borderColor: '#B7B7B7',
                  marginBottom: 15,
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
                  height: 150,
                  borderColor: '#B7B7B7',
                  marginBottom: 15,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={SuspectDescription}
                onChangeText={setSuspectDescription}
                placeholder="Describe"
                // secureTextEntry={true}
              />

              {isKeyboardActive ? (
                <Text style={{color: 'black', height: 200}}></Text>
              ) : null}
            </ScrollView>
          </View>

          <View style={{marginLeft: 280}}>
            <TouchableOpacity
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
              onPress={FIR}>
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
                  REGISTER FIR
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
    borderStyle: 'solid',
    borderColor: '#B7B7B7',
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
    color: 'grey',
  },
  dropdownGender: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 100,
  },
  dropdowndistrict: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdowncity: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdownpolice: {
    backgroundColor: 'rgb(220,220, 220)',
    marginHorizontal: 10,
    width: '90%',
    marginBottom: 15,
    marginLeft: 12,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 30,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: '#B7B7B7',
    height: 50,
  },
  modalview: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightblue',
  },
});
export default FIRS;
