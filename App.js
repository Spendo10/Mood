import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryPage from './screens/CategoryPage';
import NigeriaMoviesScreen from './screens/NigeriaMoviesScreen'; // Adjust the import path if necessary

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Categories' }} />
        <Stack.Screen 
          name="CategoryPage" 
          component={CategoryPage} 
          options={({ route }) => ({ title: route.params.categoryName })} 
        />
        <Stack.Screen 
          name="NigeriaMoviesScreen" 
          component={NigeriaMoviesScreen} 
          options={{ title: 'Nigeria Movies' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
