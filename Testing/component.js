/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const component = (props) => {
  return (
    <View style={{flex:1}} testID={'wrapper'}>
      <Text style={{color:'red'}} testID={'text'}>
        {props.value}
      </Text>
    </View>
  );
};

export default component;