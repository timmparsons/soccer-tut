import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import CurrentScore from '../components/CurrentScore';
import VideoSection from '../components/VideoSection';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CurrentScore />
      <VideoSection />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
