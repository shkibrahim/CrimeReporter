import React from 'react';
import {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-modern-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import {Modal} from 'react-native-paper';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
import Back3 from './Back3';
import {darkGreen} from './constants';
import {Image} from 'react-native';

const Rcrime = ({navigation}) => {
  const [name, setname] = useState();
  const [cnic, setcnic] = useState();
  const [description, setdescription] = useState();
  const [contact, setcontact] = useState();
  const [date, setDate] = useState();

  const currentDate = new Date(); // create a new Date object with current date and time
  const year = currentDate.getFullYear(); // get the current year (YYYY)
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // get the current month (MM) and add leading zero if necessary
  const day = currentDate.getDate().toString().padStart(2, '0'); // get the current day (DD) and add leading zero if necessary
  const formattedDate = `${year}-${month}-${day}`; // combine the year, month, and day in the desired format

  const [selectedDate, setSelectedDate] = useState(formattedDate);

  const [dateModalVisible, setDateModalVisible] = useState(false);

  const datemodvisible = () => {
    setDateModalVisible(true);
  };
  const datemodvisiblefalse = () => {
    setDateModalVisible(false);
  };

  let FIRDATA = {
    name: name,
    cnic: cnic,
    contact: contact,
    crime: crimeValue,
    dis: districtValue,
    city: cityValue,
    police: policeValue,
    des: description,
  };

  var FIR = () => {
    {
      navigation.navigate('FIRS', {
        name: name,
        cnic: cnic,
        contact: contact,
        crimeValue: crimeValue,
        districtValue: districtValue,
        cityValue: cityValue,
        policeValue: policeValue,
        description: description,
        firDate: selectedDate,
      });
    }
  };

  const [crimeOpen, setcrimeOpen] = useState();
  const [crimeValue, setcrimeValue] = useState();
  const [crime, setcrime] = useState([
    {label: 'Murder', value: 'Murder'},
    {label: 'Robbery', value: 'Robbery'},
    {label: 'Rape', value: 'Rape'},
    {label: 'Kidnapping', value: 'Kidnapping'},
  ]);
  const [districtOpen, setdistrictOpen] = useState();
  const [districtValue, setdistrictValue] = useState();
  const [district, setdistrict] = useState([
    {label: 'Rawalpindi', value: 'Rawalpindi'},
    {label: 'Murree', value: 'Murree'},
    {label: 'Rawat', value: 'Rawat'},
  ]);
  const [cityOpen, setcityOpen] = useState();
  const [cityValue, setcityValue] = useState();
  const [city, setcity] = useState([
    {label: 'Rwp', value: 'Rawalpindi'},
    {label: 'Isb', value: 'city'},
  ]);
  const [policeOpen, setpoliceOpen] = useState();
  const [policeValue, setpoliceValue] = useState();
  const [police, setpolice] = useState([
    {label: 'New Town Police Station', value: 'New Town Police Station'},
    {label: 'Bani Police Station', value: 'Bani Police Station'},
  ]);
  const [addBtnState, setAddBtnState] = useState(true);
  const [userList, setuserList] = useState([]);
  const {control} = useForm();
  //   const Save = () => {
  //     // alert('click')
  //     if ( name === '' && cnic === '' && crime === '' && district === '' && police === '' ) {
  //       alert('click');
  //     } else {
  //         const userList = {
  //             Sname: name,
  //             Scnic: cnic,
  //             Scontact: contact,
  //             Sdescription: description,
  //             Scrime: crime,
  //             Scity: city,
  //             Sdistrict: district,
  //             Spolice: police

  //         };

  //         setuserList((oldList) => [...oldList, userList]);
  //         setAddBtnState(true);
  //         setname('');
  //         setcnic('');
  //         setcontact('');
  //         setdescription('');
  //         alert('Added not Successfully');
  //         // setgender('');
  //         console.log("---.",userList)
  //      navigation.navigate('FIRS',{
  //       userList,
  //      })
  //     }

  // };

  const [selectedImage, setSelectedImage] = useState(null);

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
            <TouchableOpacity onPress={() => navigation.navigate('FIR')}>
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
                  onPress={() => props.navigation.navigate('PM')}>
                  <Text
                    style={{
                      color: '#10942e',
                      marginTop: 0,
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    CASE INFORMATION
                  </Text>
                </TouchableOpacity>
                <View style={{width: 400, marginLeft: -79}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{color: '#10942e'}}>
                      -----------------------------------------------
                    </Text>
                  </TouchableOpacity>
                </View>
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
                  }}
                  onPress={FIR}>
                  <Text
                    style={{
                      color: 'grey',
                      marginTop: 0,
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    SUSPECT INFORMATION
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={{}}>
              <Text
                style={{
                  color: '#10942e',
                  marginTop: 15,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                FULL NAME
              </Text>

              <TextInput
                style={{
                  borderRadius: 10,
                  color: darkGreen,
                  marginLeft: 12,

                  width: 350,
                  height: 50,
                  borderColor: '#B7B7B7',

                  backgroundColor: '#eceded',
                  paddingHorizontal: 10,
                  marginBottom: 30,
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={name}
                onChangeText={name => {
                  name === '' ||
                  cnic === '' ||
                  contact === '' ||
                  description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                  setname(name);
                }}
                placeholder="Enter Name"
                // secureTextEntry={true}
              />
              <Text
                style={{
                  color: '#10942e',
                  marginTop: 0,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                CNIC
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
                value={cnic}
                onChangeText={cnic => {
                  name === '' ||
                  cnic === '' ||
                  contact === '' ||
                  description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                  setcnic(cnic);
                }}
                placeholder="Enter CNIC"
                // secureTextEntry={true}
              />
              <Text
                style={{
                  color: '#10942e',
                  marginTop: 0,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                CONTACT NO.
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
                value={contact}
                onChangeText={contact => {
                  name === '' ||
                  cnic === '' ||
                  contact === '' ||
                  description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                  setcontact(contact);
                }}
                placeholder="Enter Phone Number"
              />

              <Text
                style={{
                  color: '#10942e',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
                Date
              </Text>

              <View
                style={{
                  flexDirection: 'row',
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
                <Text
                  style={{
                    marginVertical: 14,
                    color: 'grey',
                    height: 20,
                  }}>
                  {selectedDate}
                </Text>

                <TouchableOpacity
                  onPress={datemodvisible}
                  style={{marginLeft: 200, width: 50}}>
                  <Text
                    style={{
                      color: 'grey',
                      height: 20,
                      margin: 14,
                    }}>
                    [:::]
                  </Text>
                </TouchableOpacity>
              </View>

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
                render={({field: {onChange, value}}) => (
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
                DISTRICT
              </Text>
              <Controller
                name="district"
                defaultValue=""
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.dropdowndistrict}>
                    <DropDownPicker
                      style={styles.dropdown}
                      open={districtOpen}
                      value={districtValue} //genderValue
                      items={district}
                      setOpen={setdistrictOpen}
                      setValue={setdistrictValue}
                      setItems={setdistrict}
                      placeholder="Select District"
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
                  marginLeft: 10,
                  fontSize: 14,
                  name: 'cnic',
                }}>
                CITY
              </Text>
              <Controller
                name="city"
                defaultValue=""
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.dropdowncity}>
                    <DropDownPicker
                      style={styles.dropdown}
                      open={cityOpen}
                      value={cityValue} //genderValue
                      items={city}
                      setOpen={setcityOpen}
                      setValue={setcityValue}
                      setItems={setcity}
                      placeholder="Select City"
                      placeholderStyle={styles.placeholderStyles}
                      dropDownDirection="TOP"
                      onChangeValue={onChange}
                      zIndex={60}
                      zIndexInverse={70}
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
                POLICE STATION
              </Text>
              <Controller
                name="police"
                defaultValue=""
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.dropdownpolice}>
                    <DropDownPicker
                      dropDownDirection="TOP"
                      style={styles.dropdown}
                      open={policeOpen}
                      value={policeValue} //genderValue
                      items={police}
                      setOpen={setpoliceOpen}
                      setValue={setpoliceValue}
                      setItems={setpolice}
                      placeholder="Select Police Station"
                      placeholderStyle={styles.placeholderStyles}
                      onChangeValue={onChange}
                      zIndex={100}
                      zIndexInverse={110}
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
                    Upload Evidences
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
                <TouchableOpacity
              style={{
                backgroundColor: '#10942e',
                borderRadius: 10,
                width: 80,
                height: 35,
                alignItems: 'center',
              }}
              onPress={FIR}
            >
              <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
                NEXT
              </Text>
            </TouchableOpacity>
              </TouchableOpacity>
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
                  textAlign: 'left',
                  borderRadius: 10,
                  color: darkGreen,
                  marginLeft: 12,
                  paddingHorizontal: 10,
                  width: 350,
                  height: 200,
                  borderColor: '#B7B7B7',
                  marginBottom: 30,
                  backgroundColor: '#eceded',
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={description}
                onChangeText={description => {
                  name === '' ||
                  cnic === '' ||
                  contact === '' ||
                  description === ''
                    ? setAddBtnState(true)
                    : setAddBtnState(false);
                  setdescription(description);
                }}
                placeholder="Describe the Scenario "
                // secureTextEntry={true}
              />
            </ScrollView>
          </View>

          <View style={{marginLeft: 280, marginTop: -20}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#10942e',
                borderRadius: 10,
                width: 80,
                height: 35,
                alignItems: 'center',
              }}
              onPress={FIR}
            >
              <Text style={{color: 'white', fontSize: 15, marginTop: 6}}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal visible={dateModalVisible} style={{flex: 1, marginTop: 20}}>
        <View style={[styles.modalview, {marginTop: 80}]}>
          <DatePicker
            mode="calendar"
            // onSelectedChange={(date )=> {

            //     {setSelectedDate(date)}
            // }}
            onDateChange={date => {
              // const FormatedDate=`${date.split('/')[0]}`
              const FormatedDate = date.replaceAll('/', '-');
              {
                setSelectedDate(FormatedDate);
              }
              setDateModalVisible(false);
            }}
          />
        </View>
      </Modal>
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
    marginBottom: 30,
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
export default Rcrime;
