import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import CurrentScore from '../components/CurrentScore';
import ProgressSection from '../components/ProgressSection';
import VideoSection from '../components/VideoSection';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CurrentScore />
      <ProgressSection />
      <VideoSection />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
