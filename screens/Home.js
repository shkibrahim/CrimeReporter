import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Background from './Background'
import { Image } from 'react-native';


const Home = (props,navigation) => {

  return (
<Background>
  <View>
<View style={{marginLeft:12,marginBottom:79}}>
         
      </View>
<View style={{alignItems: 'center', width: 400}}>

      <View style={{ marginHorizontal: 40, marginVertical: 0 , marginTop:70}}>
      
    
      <Image source={require("../images/logo.png") }  
      style={{width: 300,
        height: 150,
        alignContent:'center',
        leftpadding:-10}}/>
       
          </View>
          <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
      
    
      <Image source={require("../images/WELCOME.png") }  
      style={{width: 400,
        height: 150,
        alignContent:'center',
        leftpadding:-10}}/>
       
          </View>
          <TouchableOpacity
     
     style={{
 
       borderRadius: 100,
       alignItems: 'center',
       alignContent:'center',
       width: 300,
       height:50,
       backgroundColor:'#10942e',
       paddingVertical: 5,
       marginVertical: 10
     }}  onPress={() => props.navigation.navigate("Login")}>
     <Text style={{color: 'white',marginTop:10, fontSize: 15,fontWeight:'bold' }}>
     SIGN IN
     </Text>
   </TouchableOpacity> 
      {/* <Btn bgColor='#10942e' textColor='white' btnLabel="SIGN IN" Press={() => navigation.navigate("Login")} /> */}
      <TouchableOpacity
     
        style={{
    
          borderRadius: 100,
          alignItems: 'center',
          alignContent:'center',
          width: 300,
          height:50,
          paddingVertical: 5,
      
        }}  onPress={() => props.navigation.navigate("Signup")}>
        <Text style={{color: 'grey',marginTop:0, fontSize: 15,fontWeight:'bold' }}>
        SIGN UP
        </Text>
      </TouchableOpacity> 
      
      </View>
      </View>
  </Background>
  )
}

export default Home

const styles = StyleSheet.create({})