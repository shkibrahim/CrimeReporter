import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Background from './Background';
export class First extends Component {
  constructor(props){
    super(props);
    setTimeout(() => {
      this.props.navigation.replace('Second');
    }, 2000);
  }
  render() {
    return (
        <Background>
         
         <View style={{ marginLeft:84 ,marginTop:300}}>
      
    
      <Image source={require("../images/bis.png") }  
      style={{width: 220,
        height: 46,
        marginLeft:5,
        alignContent:'center',
        leftpadding:-10}}/>
       
          </View>
      <View>
       
        <View style={{ marginVertical: 20 }}>
      
    
      <Image source={require("../images/WELCOME.png") }  
      style={{width: 400,
        height: 150,
        alignContent:'center',
        leftpadding:-10}}/>
       
          </View>
      </View>
      </Background>
    );
  }
}

export default First;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 30,
  },
  logoTextWrapper: {
    width: '100%',
    height: '10%',
  },
  icon: {
    width: 200,
    height: 200,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    height: '100%',
    width: '80%',
  },
  from: {
    color: 'gray',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});