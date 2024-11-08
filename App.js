import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import NigeriaMoviesScreen from './screens/NigeriaMoviesScreen';
import ActionMoviesScreen from './screens/ActionMoviesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="NigeriaMoviesScreen" component={NigeriaMoviesScreen} />
        <Stack.Screen name="ActionMoviesScreen" component={ActionMoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
