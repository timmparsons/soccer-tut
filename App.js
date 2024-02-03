import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import Leaderboard from './screens/Leaderboard';
import ChatScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: '#e91e63',
            tabBarIcon: () => <FontAwesome name='home' size={24} color='black' />,
          }}
        />
        <Tab.Screen
          name='Chat'
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarActiveTintColor: '#e91e63',
            tabBarIcon: () => <Entypo name='chat' size={24} color='black' />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name='Leaderboard'
          component={Leaderboard}
          options={{
            tabBarLabel: 'Leaderboard',
            tabBarActiveTintColor: '#e91e63',
            tabBarIcon: () => <MaterialIcons name='leaderboard' size={24} color='black' />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
