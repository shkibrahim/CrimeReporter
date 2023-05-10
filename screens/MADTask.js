import React from 'react';
import {useEffect, useState} from 'react';

import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Back3 from './Back3';

import {darkGreen} from './constants';


const MADTask = ({props, navigation}) => {
    const [history, setHistory] = useState([]);

  const [Price, setPrice] = useState();
  const [Percentage, setPercentage] = useState();
  const [password, setpassword] = useState();
  const [FinalPrice, setFinalPrice] = useState();
  const [discount, setdiscount] = useState();
  const [Save, setSave] = useState(0);
  const [PriceAfterDiscount, setPriceAfterDiscount] = useState();
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);
  // const saveData=  async (name, cnic, password) => {
  //   const user={
  //     name:name,

  //     password:password
  //   }
  //    try {
  //      await AsyncStorage.setItem("userData", JSON.stringify(user));

  //      alert(user.name)
  //   } catch (error) {
  //     alert("Something went wrong", error);
  //   }

  // }
  const DiscountPrice = () => {
  
    const discount =  (Price * Percentage) / 100;
    const PriceAfterDiscount =Price - discount;
  
    setFinalPrice(PriceAfterDiscount.toFixed(2));
    const Save= (discount)  ;
    setSave (Save);
    const calculation = `${Price} - ${discount} = ${FinalPrice}`;
    setHistory([...history, calculation]);

  };
const clearInputs = () => {
    setPrice('');
    setPercentage('');
    setFinalPrice('');
    setSave('');
    setHistory('')
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
          <View style={{marginTop:12, marginBottom:19,alignSelf: 'center'}}>
          <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              DISCOUNT CALCULATOR
            </Text>
            {/* <TouchableOpacity>
              <Image
                source={require('../images/menu.png')}
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
      
         
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 37,
              marginRight: 9,
              width: 390,

              marginBottom: 30,
              height: 650,
            }}>

<Text
              style={{
                color: '#10942e',
                marginTop:25,
                // marginLeft:-32,
                fontWeight: 'bold',
                marginLeft: 25,
                fontSize: 14,
              }}>
          PRICE:
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 22,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={Price}
              onChangeText={setPrice}
              placeholder="Enter Price"
              keyboardType={'numeric'}
              // secureTextEntry={true}
            />
<Text
              style={{
                color: '#10942e',
                marginTop:5,
                // marginLeft:-32,
                fontWeight: 'bold',
                marginLeft: 25,
                fontSize: 14,
              }}>
          PERCENTAGE:
            </Text>

            <TextInput
           
              style={{
                borderRadius: 10,
                color: darkGreen,
                marginLeft: 22,
                paddingHorizontal: 10,
                width: 350,
                height:50,
                borderColor: "#B7B7B7",
                marginBottom:30,
                backgroundColor: '#eceded',
                marginVertical: 10,
              }}
              placeholderTextColor="grey"
              value={Percentage}
              onChangeText={setPercentage}
              placeholder="Enter Percentage"
              keyboardType={'numeric'}
              // secureTextEntry={true}
            />
 <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 20,
              width: 180,
              height: 45,
              marginLeft: 105,
              alignItems: 'center',
            }}
         onPress={DiscountPrice}
          >
            <Text style={{color: 'white', fontSize: 15, marginTop: 12, fontWeight: 'bold'}}>
           Calculate Discount
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#10942e',
              borderRadius: 20,
              marginTop:23,
              width: 180,
              height: 45,
              marginLeft: 105,
              alignItems: 'center',
            }}
         onPress={clearInputs}
          >
            <Text style={{color: 'white', fontSize: 15, marginTop: 12, fontWeight: 'bold'}}>
           Refresh
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'green', fontSize: 15, marginTop: 12, marginLeft:20}}>
          {`DISCOUNT IS : ${Save}`}
         

            </Text>
            <Text style={{color: 'green', fontSize: 15, marginTop: 12, marginLeft:20}}>
      
          {`FINAL PRICE IS : ${FinalPrice}`}

            </Text>
            <View style={{backgroundColor: 'green', borderRadius:12}}>
            {history.length > 0 ? (
        <View style={{}}>
          <Text style={{fontSize:22, fontWeight:'bold'}}>History:</Text>
          <ScrollView style={{marginLeft:12, height:120}}>
            {history.map((calculation, index) => (
              <Text key={index} style={{}}>
              {index+1}  {calculation}
              </Text>
            ))}
          </ScrollView>
        </View>
      ) : null}

            </View>

                {/* <View style={{marginBottom:0}}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    >
             <View style={{backgroundColor:'#007711', width:50,height:50, marginLeft:19, marginTop:72, borderRadius:30}}>
             </View>
          <TouchableOpacity     onPress={() => navigation.navigate("Home")} >
          <Image
                source={require('../images/user.png')}
                style={{
                  width: 27,
                  height: 27,
                  marginLeft: 29.8,

                  marginTop:-39,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity     onPress={() => navigation.navigate("Home")}>
         <Text style={{color:'black', fontSize:24, fontWeight:"bold", width:183, marginLeft:100,marginTop:-44}}>INLAND CITIZEN</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#b8d9bd', width:35,height:35, marginLeft:329, marginTop:-42, borderRadius:30}}>
             </View>
          <TouchableOpacity     onPress={() => navigation.navigate("Home")}>
          <Image
                source={require('../images/arrow1.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 339.8,

                  marginTop:-26,
                }}
              />
          </TouchableOpacity>
          </TouchableOpacity>

          </View> */}
          {/* <View style={{marginLeft:0,marginTop:28,width:400,height:1.5,backgroundColor:'#e1e2e2'}}></View> */}
          {/* <View style={{marginTop:-44}}>
            <TouchableOpacity   onPress={() => navigation.navigate("Alogin")}>
             <View style={{backgroundColor:'#ffc600', width:50,height:50, marginLeft:19, marginTop:72, borderRadius:30}}>
             </View>
          <TouchableOpacity  onPress={() => navigation.navigate("Alogin")}>
          <Image
                source={require('../images/admin.png')}
                style={{
                  width: 39,
                  height: 39,
                  marginLeft: 23.8,

                  marginTop:-43,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("Alogin")}>
         <Text style={{color:'black', fontSize:24, fontWeight:"bold", width:183, marginLeft:100,marginTop:-44}}>ADMIN</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#ffe899', width:35,height:35, marginLeft:329, marginTop:-42, borderRadius:30}}>
             </View>
          <TouchableOpacity  onPress={() => navigation.navigate("Alogin")}>
          <Image
                source={require('../images/arrow1.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 339.8,

                  marginTop:-26,
                }}
              />
          </TouchableOpacity>
          
          </TouchableOpacity>
          </View> */}
          {/* <View style={{marginLeft:0,marginTop:28,width:400,height:1.5,backgroundColor:'#e1e2e2'}}></View>
          <View style={{marginTop:-44}}>
            <TouchableOpacity>
             <View style={{backgroundColor:'#38bdbb', width:50,height:50, marginLeft:19, marginTop:72, borderRadius:30}}>
             </View>
          <TouchableOpacity onPress={() => navigation.navigate("ITP")}>
          <Image
                source={require('../images/team.png')}
                style={{
                  width:37,
                  height: 37,
                  marginLeft: 25.1,

                  marginTop:-43,
                }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ITP")}>
         <Text style={{color:'black', fontSize:24, fontWeight:"bold", width:183, marginLeft:100,marginTop:-44}}>ITP</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#b3e6e5', width:35,height:35, marginLeft:329, marginTop:-42, borderRadius:30}}>
             </View>
          <TouchableOpacity onPress={() => navigation.navigate("ITP")}>
          <Image
                source={require('../images/arrow3.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 339.8,

                  marginTop:-26,
                }}
              />
          </TouchableOpacity>
          
          </TouchableOpacity>
          </View> */}
          {/* <Image
                source={require('../images/n.jpg')}
                style={{
                  width: 400,
                  height: 105,
                  marginLeft: -3.8,

                  marginTop:300,
                }}
              /> */}

          </View>

      
        
        
        </View>
      </View>
    </Back3>
  );
};

export default MADTask;
