import React, { useState } from 'react';
import { View, Text,TouchableOpacity,Image, Alert,TextInput,ActivityIndicator } from 'react-native';
import { Rating, Input, Button, } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import Background2 from '../screens/Backround2';
const  FB= ({navigation, route}) =>{
  const [rating, setRating] = useState(0);
  const [feedback, setfeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
 
 
 
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

 

  var Submit = async() => {
   
      setIsLoading(true);
      firestore()
        .collection('Feedback')
        .add({
         

rating : rating,
feedback:feedback

        })  
        .then(() => {
          alert('Feedback Registered');
          navigation.goBack();
        })
        .catch(() => {
          alert('error');
        })
    
  };



  return (
    <Background2>
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
          <View style={{marginBottom: 19, marginTop: -40, alignSelf:'center',}}>
            <Text style={{color: 'green', fontSize: 29, }}>
             PROVIDE FEEDBACK
            </Text>
          </View>
    <View style={{alignItems: 'center', width: 400}}>
      <View style={{marginHorizontal: 90, marginVertical: 0}}>
        <Image
          source={require('../images/logo.png')}
          style={{
            width: 380,
            height: 200,

            alignContent: 'center',
            marginTop: 0,
          }}
        />
      </View>




    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Rating 
        showRating
        onFinishRating={handleRatingChange}
        style={{ paddingVertical: 10 , color:'green'}}
      />

<Text
                    style={{
                      color: 'green',
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    FEEDBACK DESCRIPTION
                  </Text>
      {/* <Input style={{paddingVertical:10}}
        placeholder="Enter your feedback"
        onChangeText={handleFeedbackChange}
        value={feedback}
      /> */}
         <TextInput
                style={{
                  borderRadius: 10,
                  color: 'black',
                  marginLeft: 12,

                  width: 350,
                  height: 100,
                  borderColor: '#B7B7B7',

                  backgroundColor: '#eceded',
                  paddingHorizontal: 10,
                  marginBottom: 30,
                  marginVertical: 10,
                }}
                placeholderTextColor="grey"
                value={feedback}
                onChangeText= {setfeedback}
                 
                 
              
                placeholder="EnterFeedback"
                // secureTextEntry={true}
              />



<TouchableOpacity
            onPress={Submit}
          
            disabled={rating === 0 }
            style={{
              backgroundColor: '#10942e',
              borderRadius: 10,
              alignItems: 'center',
              alignContent: 'center',
              width: 200,
              height: 50,
              paddingVertical: 5,
              marginVertical: 1,
            }}>
                {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
            <Text
              style={{
                color: 'white',
                marginTop: 11,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
             SUBMIT
            </Text>
                )}
          </TouchableOpacity>
      {/* <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={rating === 0 || feedback === ''}
      /> */}
    </View>
    </View>
    </Background2>
  );
};


export default FB;