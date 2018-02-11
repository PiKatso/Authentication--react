import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1
  }
};

export { CardSection };
