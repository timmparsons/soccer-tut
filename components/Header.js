import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <MaterialCommunityIcons name='face-man-profile' size={44} color='black' />
        <View style={styles.welcomeText}>
          <Text>
            Welcome back, {'\n'}
            <Text style={styles.boldName}>Tim!</Text>
          </Text>
        </View>
      </View>
      <AntDesign name='bells' size={32} color='black' />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    paddingLeft: 15,
  },
  boldName: {
    fontWeight: 'bold',
  },
});
