import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fake login function
  const handleLogin = () => {
    // Check if username and password are provided
    if (username && password) {
      // Navigate to Home (fake login)
      navigation.navigate('Home');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top center */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your logo URL
          style={styles.logo}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to FilmTube</Text>
      <Text style={styles.subtitleText}>Create an account to enjoy 24/7 movies</Text>

      {/* Login Form */}
      <View style={styles.loginContent}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Sign Up"
            onPress={() => navigation.navigate('SignUp')}
            color="#841584"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Normal background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green', // Green color for the welcome text
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: 'red', // Red color for the subtitle text
    textAlign: 'center',
    marginBottom: 30,
  },
  loginContent: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10, // Adds space between buttons
  },
});
