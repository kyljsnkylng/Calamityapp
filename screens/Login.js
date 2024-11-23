import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [successModalVisible, setSuccessModalVisible] = useState(false); 

  
  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill out both email and password fields!');
      setModalVisible(true); 
    } else {
      
      console.log('Logging in with email:', email, 'and password:', password);
      setErrorMessage(''); 
      setSuccessModalVisible(true); 
    }
  };

  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={['#6c5ce7', '#ffffff']}
        style={styles.background}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subtitle}>Sign into your Account</Text>

          <TextInput
            mode="outlined"
            label="Email Address"
            value={email}
            onChangeText={setEmail} 
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter your email"
          />

         
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={setPassword} 
            secureTextEntry
            style={styles.input}
            placeholder="Enter your password"
          />

          <Text style={styles.forgotPassword} onPress={() => {}}>Forgot your Password?</Text>

          <Button mode="contained" style={styles.button} onPress={handleLogin}>
            Login
          </Button>

          <Text style={styles.switchText} onPress={() => navigation.navigate('Register')}>
            Don't have an account? Register Now
          </Text>
        </View>
      </LinearGradient>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Error</Text>
            <Text style={styles.modalMessage}>{errorMessage}</Text>
            <Button
              mode="contained"
              onPress={() => setModalVisible(false)}
              style={styles.modalButton}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={successModalVisible}
        animationType="fade"
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Login Successful</Text>
            <Text style={styles.modalMessage}>Welcome back, you're logged in!</Text>
            <Button
              mode="contained"
              onPress={() => {
                setSuccessModalVisible(false);
              }}
              style={styles.modalButton}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#6c5ce7',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,  
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#f8f9fa',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#6c5ce7',
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    width: '100%',
    backgroundColor: '#6c5ce7',
    borderRadius: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  switchText: {
    color: '#6c5ce7',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6c5ce7',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#6c5ce7',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 10,
  },
});
