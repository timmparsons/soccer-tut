import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const ProgressSection = () => {
  return (
    <View style={styles.videosContainer}>
      <View style={styles.yourVideosContainer}>
        <Text style={styles.yourVideosContainerHeading}>Your Videos</Text>
        <Text style={[styles.yourVideosContainerHeading, styles.yourVideosContainerHeadingMore]}>See More</Text>
      </View>
      <View>
        <Progress.Bar progress={0.4} width={400} />
      </View>
    </View>
  );
};

export default ProgressSection;

const styles = StyleSheet.create({
  videosContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  yourVideosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  yourVideosContainerHeading: {
    fontWeight: 'bold',
  },
  yourVideosContainerHeadingMore: {
    color: '#be7df7',
  },
});
