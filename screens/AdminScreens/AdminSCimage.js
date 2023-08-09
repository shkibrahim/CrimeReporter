import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Touchable,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Back3 from '../Back3';
import firestore from '@react-native-firebase/firestore';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';

const AdminSCimage = ({navigation}) => {
  const [List, setList] = useState([]);


  const [fbImage, setFBImage] = useState('https://previews.123rf.com/images/apoev/apoev2107/apoev210700033/171405527-default-avatar-photo-placeholder-gray-profile-picture-icon-business-man-illustration.jpg');

  const [selectedImage, setSelectedImage] = useState('https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg');
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [Data, setData] = useState({});
  const [matchStat, setMatchStat] = useState('Matching Status');

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
  var Team = firestore().collection('CriminalData');
  useEffect(() => {
    var Dataa = async () => {
      await Team.get().then(data => {
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
    };
    Dataa();
  });
  var Search = async () => {
    await Team.where('trackValue', '==', 'Case Closed')
      .get()
      .then(data => {
        setList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
  };

  const matchImage = async () => {

    var tempRes='';


    for (let i = 0; i < Data.length; i++) {

      setFBImage(Data[i].CriminalImage);
      console.log('Selected Image: ', selectedImage);
      console.log(i + 1 + 'image in data Base : ' + Data[i].CriminalImage);

      var myHeaders = new Headers();
      myHeaders.append(
        'X-RapidAPI-Key',
        '540871a081mshc1283a962e2a766p13723ajsn2dc4d8073011',
      );
      myHeaders.append('X-RapidAPI-Host', 'face-verification2.p.rapidapi.com');
      myHeaders.append('content-type', 'multipart/form-data');

      var formdata = new FormData();

      formdata.append('Photo1', {
        uri: selectedImage,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      formdata.append('Photo2', {
        uri: Data[i].CriminalImage,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      await fetch(
        'https://face-verification2.p.rapidapi.com/faceverification',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          var res = JSON.parse(result);
          setMatchStat('responce : ' +res.data.resultMessage);
          console.log('responce : ' , res.data.resultIndex);
          if(res.data.resultIndex===0){
            setMatchStat("Match Found");
            console.log('Match Found');
            tempRes='stop'
          }
        })
        .catch(error =>{ console.log('error'+ error)});

        if(tempRes=="stop"){
          alert('Match Found');
          setList([{CName:Data[i].CName , cnic:Data[i].cnic , CrimeValue:Data[i].CrimeValue ,StatusValue:Data[i].StatusValue,  Address:Data[i].Address}])
          console.log(Data[i])  
          break;
        }

    }






    // console.log("  i am  "+" here")

    // var myHeaders = new Headers();
    // myHeaders.append(
    //   'X-RapidAPI-Key',
    //   '540871a081mshc1283a962e2a766p13723ajsn2dc4d8073011',
    // );
    // myHeaders.append('X-RapidAPI-Host', 'face-verification2.p.rapidapi.com');
    // myHeaders.append('content-type', 'multipart/form-data');

    // var formdata = new FormData();

    // formdata.append('Photo1', {
    //   uri: selectedImage,
    //   name: 'image.jpg',
    //   type: 'image/jpg',
    // });

    // console.log("  selected image "+selectedImage)

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow',
    // };

    // Data.forEach(async (element) => {

    //   console.log("current image  "+element.CriminalImage)

    //   formdata.append('Photo2', {
    //     uri: element.CriminalImage,
    //     name: 'image.jpg',
    //     type: 'image/jpg',
    //   });

    //   await fetch(
    //     'https://face-verification2.p.rapidapi.com/faceverification',
    //     requestOptions,
    //   )
    //     .then(response => response.text())
    //     .then(result => console.log("resultssss : " ,result))
    //     .catch(error => console.log('error', error));
    //   alert('Face matched');
    // });

    // navigation.navigate('AdminSCcnic')
  };
  const Search2 = async () => {
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    const compareImage = async image => {
      const formdata = new FormData();
      formdata.append('Photo1', {
        uri: selectedImage,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      formdata.append('Photo2', {
        uri: image.CriminalImage,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      requestOptions.body = formdata;

      try {
        const response = await fetch(
          'https://face-verification2.p.rapidapi.com/faceverification',
          requestOptions,
        );
        const result = await response.text();
        console.log(result);

        // Perform necessary actions based on the comparison result
        if (result === 'The two faces belong to the same person') {
          // Match found
          console.log('Match found for image:', image.CriminalImage);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    try {
      const querySnapshot = await Team.get();
      const criminalData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      for (const criminal of criminalData) {
        await compareImage(criminal);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Back3>
      <View style={{alignItems: 'center', width: 400}}>
        <View
          style={{
            // height: 400,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
         
          <View style={{marginBottom: 13, marginTop: 13}}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              CRIME REPORTER
            </Text>
          </View>
        
          <View style={{marginTop:-50,}}>
            <TouchableOpacity onPress={() =>{
              setList([])
              setFBImage()
              setSelectedImage()
              }}>
              <Image
                source={require('../../images/arrow.png')}
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
              {/* <View
                style={{
                  backgroundColor: '#10942e',
                  marginLeft: 0,
                  // width: 370,
                  // height: 50,
                  borderRadius: 8,
                  marginTop: 8,
                  marginBottom: 30,
                }}> */}
                {/* <TouchableOpacity> */}
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 75,
                      fontWeight: 'bold',
                      color: 'green',
                      marginTop: 9,
                    }}>
                    SEARCH THROUGH IMAGE
                  </Text>
                {/* </TouchableOpacity> */}

                <View style={{flexDirection:'row', marginTop:6}}>
                <View
                  style={{
                    alignItems: 'center',
                    marginLeft: 16,
                    width: 160,
                    marginRight:40,
                    height: 167,
                    backgroundColor: 'grey',
                    borderRadius: 5,
                    // marginTop: 10,
                   
                  }}>
                  <Image
                    style={{
                      width: 160,
                      borderRadius: 5,
                      height: 167,
                      resizeMode: 'cover',
                      // marginBottom: 20,
                      marginLeft: 0,
                      marginTop: 0,
                    }}
                    source={{uri: selectedImage}}
                  />
                  <View style={{marginTop: -50, marginLeft: 69}}>
                    <TouchableOpacity onPress={handleGalleryPress}>
                      <Image
                        source={require('../../images/load.png')}
                        style={{
                          width: 100,
                          height: 100,
                          marginLeft: 73,

                          marginTop: 18,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginLeft:-10}}>
                  <Image
                    style={{
                      backgroundColor: 'grey',
                      marginLeft: 100,
                      marginVertical: 10,
                      width: 160,
                      borderRadius: 5,
                      height: 167,

                      // marginBottom: 20,
                      marginLeft: 0,
                      marginTop: 0,
                    }}
                    source={{uri: fbImage}}
                  />
                  </View>
                </View>

                {/* <View
                  style={{
                    alignItems: 'center',
                    marginLeft: 120,
                    width: 150,
                    height: 157,
                    backgroundColor: 'grey',
                    borderRadius: 5,
                    marginTop: 10,
                  }}>
                  <Image
                    style={{
                      width: 150,
                      borderRadius: 5,
                      height: 157,
                      resizeMode: 'cover',
                      // marginBottom: 20,
                      marginLeft: 0,
                      marginTop: 0,
                    }}
                    source={{uri: selectedImage}}
                  />
                  <View style={{marginTop: -50, marginLeft: 49}}>
                    <TouchableOpacity onPress={handleGalleryPress}>
                      <Image
                        source={require('../../images/load.png')}
                        style={{
                          width: 100,
                          height: 100,
                          marginLeft: 73,

                          marginTop: 18,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View> */}
                {/* <View
                  style={{
                    alignItems: 'center',
                    marginLeft: 120,
                    width: 150,
                    height: 157,
                    backgroundColor: 'grey',
                    borderRadius: 5,
                    marginTop: 42,
                  }}>
                  <Image
                    style={{
                      width: 150,
                      borderRadius: 5,
                      height: 157,
                      resizeMode: 'cover',
                      // marginBottom: 20,
                      marginLeft: 0,
                      marginTop: 0,
                    }}
                    source={{uri: selectedImage2}}
                  />
                  <View style={{marginTop: -50, marginLeft: 49}}>
                    <TouchableOpacity onPress={handleGalleryPress}>
                      <Image
                        source={require('../../images/load.png')}
                        style={{
                          width: 100,
                          height: 100,
                          marginLeft: 73,

                          marginTop: 18,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View> */}
                <View
                  style={{
                    backgroundColor: 'red',
                    width: 140,
                    height: 50,
                    // marginBottom: 120,
                    borderRadius: 8,
                    marginTop: 18,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={matchImage}>
                    {isLoading ? <ActivityIndicator color="white" /> : null}

                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                        marginTop: 10,
                      }}>
                      SEARCH{' '}
                    </Text>
                  </TouchableOpacity>
                  {/* <Text  style={{color:'black', marginTop:30  , width:300}}>{matchStat}</Text> */}
                </View>
            

              <View style={{}}>
                <FlatList
                  style={{width: '100%', marginLeft:-10,}}
                  data={List}
                  horizontal={true}
                  // Horizontal = {true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    if (item != undefined) {
                      return (
                        //  <FlatList
                        <View
                          style={{
                            width: 370,
                            marginRight: 19,
                            // marginTop: 260,
                            height: 640,
                          }}>
                          <View
                            style={{
                              //   backgroundColor: 'white',
                              borderColor: 'red',
                              marginBottom: 10,
                              //   borderRadius: 19,
                              margin: 10,

                              width: 370,
                              height: 400,
                            }}>
                            <ScrollView >
                              
                              <Text
                                style={{
                                  color: '#10942e',
                                  fontWeight: 'bold',
                                  marginLeft: 10,
                                  fontSize: 14,
                                }}>
                                Criminal Name
                              </Text>
                              <View
                                style={{
                                  backgroundColor: '#eceded',
                                  borderRadius: 10,
                                  paddingHorizontal: 10,
                                  marginBottom: 30,
                                  marginVertical: 10,
                                }}>
                                <Text
                                  style={{
                                    color: 'grey',
                                    // fontWeight: 'bold',
                                    // marginLeft: 10,
                                    marginTop: 10,
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
                                  marginBottom: -5,
                                  fontWeight: 'bold',
                                  marginLeft: 10,
                                  fontSize: 14,
                                  // name: 'cnic',
                                }}>
                                CNIC
                              </Text>
                              <View
                                style={{
                                  backgroundColor: '#eceded',
                                  borderRadius: 10,
                                  paddingHorizontal: 10,
                                  marginBottom: 30,
                                  marginVertical: 10,
                                }}>
                                <Text
                                  style={{
                                    color: 'grey',
                                    // fontWeight: 'bold',
                                    // marginLeft: 10,
                                    marginTop: 10,
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
                                  marginBottom: -5,
                                }}>
                                Crime Involved In
                              </Text>
                              <View
                                style={{
                                  backgroundColor: '#eceded',
                                  borderRadius: 10,
                                  paddingHorizontal: 10,
                                  marginBottom: 30,
                                  marginVertical: 10,
                                }}>
                                <Text
                                  style={{
                                    color: 'grey',
                                    // fontWeight: 'bold',
                                    // marginLeft: 10,
                                    marginTop: 10,
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

                                  marginBottom: -5,
                                }}>
                                Status
                              </Text>
                              <View
                                style={{
                                  backgroundColor: '#eceded',
                                  borderRadius: 10,
                                  paddingHorizontal: 10,
                                  marginBottom: 30,
                                  marginVertical: 10,
                                }}>
                                <Text
                                  style={{
                                    color: 'grey',
                                    // fontWeight: 'bold',
                                    // marginLeft: 10,
                                    marginTop: 10,
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
                                  marginBottom: -5,
                                }}>
                                Address
                              </Text>
                              <View
                                style={{
                                  backgroundColor: '#eceded',
                                  borderRadius: 10,
                                  paddingHorizontal: 10,
                                  marginBottom: 30,
                                  marginVertical: 10,
                                }}>
                                <Text
                                  style={{
                                    color: 'grey',
                                    // fontWeight: 'bold',
                                    // marginLeft: 10,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    fontSize: 14,
                                    name: 'cnic',
                                  }}>
                                  {item.Address}
                                </Text>
                              </View>
                            </ScrollView>

                            <View style={{marginBottom: -5}}></View>
                          </View>
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

export default AdminSCimage;
