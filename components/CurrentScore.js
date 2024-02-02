import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CurrentScore = () => {
  return (
    <View style={styles.container}>
      <Text>Current Score</Text>
      <Text>5000</Text>
    </View>
  );
};

export default CurrentScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
