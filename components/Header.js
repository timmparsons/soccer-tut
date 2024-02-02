import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='face-man-profile' size={24} color='black' />
      <Text>Welcome back, Tim!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
