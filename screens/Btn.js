import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
    return (
      <TouchableOpacity
      onPress={Press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: 'center',
          alignContent:'center',
          width: 300,
          height:50,
          paddingVertical: 5,
          marginVertical: 1
        }}>
        <Text style={{color: textColor,marginTop:11, fontSize: 15,fontWeight:'bold' }}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }