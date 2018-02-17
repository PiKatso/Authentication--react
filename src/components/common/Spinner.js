import React from 'react';
import { View, ActivityIndictor } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndictor size={size || 'large'} />
    </View>
  );
};

const styles ={
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItemss: 'center'
  }
}

export { Spinner };
