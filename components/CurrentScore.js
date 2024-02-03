import { Text, View, StyleSheet } from 'react-native';

const CurrentScore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Current Score</Text>
        <Text style={styles.score}>5000</Text>
      </View>
    </View>
  );
};

export default CurrentScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightcoral',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  score: {
    fontSize: 24,
    marginTop: 10,
    color: 'white',
  },
});
