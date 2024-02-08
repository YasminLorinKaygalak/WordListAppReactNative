import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WordList from './WordList';
import Home from './Home';
import Details from './Details';
import AddWord from './AddWord';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={WordList} />
    <Stack.Screen name='AddWord' component={AddWord} />  
    </Stack.Navigator>    
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
