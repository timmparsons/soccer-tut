import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CurrentScore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Your Progress</Text>
        <AntDesign name='right' size={12} color='black' style={styles.progressArrow} />
      </View>
      <View style={styles.progressInfoContainer}>
        <View style={styles.circleBlue}></View>
        <Text style={styles.progressInfoText}>1/5 Videos completed</Text>
      </View>
      <View style={styles.progressInfoContainer}>
        <View style={styles.circleOrange}></View>
        <Text style={styles.progressInfoText}>3/5 Tasks completed</Text>
      </View>
    </View>
  );
};

export default CurrentScore;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    margin: 40,
    paddingLeft: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    padding: 10,
  },
  progressText: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  progressArrow: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  progressInfoContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  circleBlue: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    marginTop: 5,
    marginRight: 10,
  },
  circleOrange: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
    marginTop: 5,
    marginRight: 10,
  },
  progressInfoText: {
    color: 'gray',
  },
});
