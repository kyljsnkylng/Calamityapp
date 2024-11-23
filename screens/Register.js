import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill out all fields!');
      setModalVisible(true); 
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      setModalVisible(true); 
    } else {
      setSuccessModalVisible(true); 
      setErrorMessage(''); 
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6c5ce7', '#ffffff']}
        style={styles.background}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create an Account</Text>
          
          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
          />

          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />
          
          <Button mode="contained" onPress={handleRegister} style={styles.button}>
            Register
          </Button>

          <Text
            style={styles.switchText}
            onPress={() => navigation.navigate('Login')}
          >
            Already have an account? Login
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
            <Text style={styles.modalTitle}>Registration Successful</Text>
            <Text style={styles.modalMessage}>You have successfully created an account!</Text>
            <Button
              mode="contained"
              onPress={() => {
                setSuccessModalVisible(false);
                navigation.navigate('Login');
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
  input: {
    width: '100%',
    height: 50,  
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#f8f9fa',
    fontSize: 16, 
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
