import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    position: 'relative',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#fcfcfc',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
