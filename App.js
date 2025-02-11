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
import SearchResultsScreen from './screens/SearchResultsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="NigeriaMovies" component={NigeriaMoviesScreen} />
        <Stack.Screen name="ActionMovies" component={ActionMoviesScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
