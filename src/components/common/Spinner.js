import React from 'react';
import { View, ActivityIndictor } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndictor />
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
