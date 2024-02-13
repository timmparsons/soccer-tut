import { StyleSheet, Text, View, FlatList, Item, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const VideoSection = () => {
  const data = [
    {
      id: 1,
      description: 'test 1',
    },
    {
      id: 2,
      description: 'test 2',
    },
    {
      id: 3,
      description: 'test 3',
    },
    {
      id: 4,
      description: 'test 4',
    },
    {
      id: 5,
      description: 'test 5',
    },
    {
      id: 6,
      description: 'test 6',
    },
  ];

  const Video = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderVideo = ({ item }) => {
    return <Video item={item} backgroundColor={'blue'} textColor={'white'} />;
  };

  return (
    <SafeAreaView style={styles.videosContainer}>
      <View style={styles.yourVideosContainer}>
        <Text style={styles.yourVideosContainerHeading}>Your Videos</Text>
        <Text style={[styles.yourVideosContainerHeading, styles.yourVideosContainerHeadingMore]}>See More</Text>
      </View>

      <Progress.Bar progress={75} />

      {/* <FlatList
        data={data}
        renderItem={renderVideo}
        // horizontal={true}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </SafeAreaView>
  );
};

export default VideoSection;

const styles = StyleSheet.create({
  videosContainer: {
    marginLeft: 20,
    marginRight: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: '10%',
  },
  yourVideosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yourVideosContainerHeading: {
    fontWeight: 'bold',
  },
  yourVideosContainerHeadingMore: {
    color: '#be7df7',
  },

  // item: {
  //   height: 100,
  //   padding: 25,
  //   margin: 10,
  //   borderRadius: 6,
  // },
});
