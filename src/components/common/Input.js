import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 2,
    color: '#a1a1a1',
    lineHeight: 23,
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  }
}

export { Input };
