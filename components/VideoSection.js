import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { data } from '../constants/data';

const VideoSection = () => {
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default VideoSection;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 25,
    paddingRight: 25,
    marginVertical: 40,
    marginHorizontal: 5,
    marginLeft: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
  },
});
