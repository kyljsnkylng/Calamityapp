import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';

const AdminSetting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [profileInfo, setProfileInfo] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isPasswordUpdateModalVisible, setIsPasswordUpdateModalVisible] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  const showPasswordUpdateModal = () => setIsPasswordUpdateModalVisible(true);

  const hidePasswordUpdateModal = () => setIsPasswordUpdateModalVisible(false);

  const handlePasswordUpdate = () => {
    if (password) {
      alert("Your password has been successfully updated.");
      setPassword('');
      hidePasswordUpdateModal();
    } else {
      alert("Please enter a new password.");
    }
  };

  const showLogoutModal = () => setIsLogoutModalVisible(true);

  const hideLogoutModal = () => setIsLogoutModalVisible(false);

  const handleLogout = () => {
    hideLogoutModal();
    alert("Logout Successful");
  };

  return (
    <ScrollView style={darkModeEnabled ? styles.darkContainer : styles.lightContainer}>
      <Text style={darkModeEnabled ? styles.darkHeader : styles.lightHeader}>ADMIN SETTINGS</Text>

      <View style={darkModeEnabled ? styles.darkSection : styles.lightSection}>
        <Text style={darkModeEnabled ? styles.darkSectionTitle : styles.lightSectionTitle}>Account Settings</Text>
        
        <View style={styles.option}>
          <Text style={darkModeEnabled ? styles.darkOptionText : styles.lightOptionText}>Email</Text>
          <TextInput
            style={darkModeEnabled ? styles.darkInput : styles.lightInput}
            value={profileInfo}
            onChangeText={setProfileInfo}
            placeholder="Enter your Email"
            placeholderTextColor={darkModeEnabled ? '#bbb' : '#aaa'}
          />
        </View>

        <View style={styles.option}>
          <Text style={darkModeEnabled ? styles.darkOptionText : styles.lightOptionText}>Change Password</Text>
          <TextInput
            style={darkModeEnabled ? styles.darkInput : styles.lightInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password"
            placeholderTextColor={darkModeEnabled ? '#bbb' : '#aaa'}
            secureTextEntry
          />
          <TouchableOpacity onPress={showPasswordUpdateModal} style={styles.changePasswordButton}>
            <Text style={darkModeEnabled ? styles.darkOptionText : styles.lightOptionText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={showLogoutModal} style={styles.option}>
          <Text style={darkModeEnabled ? styles.darkOptionText : styles.lightOptionText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={darkModeEnabled ? styles.darkSection : styles.lightSection}>
        <Text style={darkModeEnabled ? styles.darkSectionTitle : styles.lightSectionTitle}>Notification Settings</Text>
        <View style={styles.option}>
          <Text style={darkModeEnabled ? styles.darkOptionText : styles.lightOptionText}>Enable Notifications</Text>
          <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
        </View>
      </View>

      <View style={darkModeEnabled ? styles.darkSection : styles.lightSection}>
        <Text style={darkModeEnabled ? styles.darkSectionTitle : styles.lightSectionTitle}>Customization Options</Text>
        <View style={styles.option}>
          <Text style={darkModeEnabled ? styles.darkOptionText : styles.lightOptionText}>Dark Mode</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isLogoutModalVisible}
        onRequestClose={hideLogoutModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalMessage}>Are you sure you want to log out?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={hideLogoutModal} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style={styles.logoutConfirmButton}>
                <Text style={styles.logoutConfirmButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isPasswordUpdateModalVisible}
        onRequestClose={hidePasswordUpdateModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Update Password</Text>
            <Text style={styles.modalMessage}>Are you sure you want to update your password?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={hidePasswordUpdateModal} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePasswordUpdate} style={styles.logoutConfirmButton}>
                <Text style={styles.logoutConfirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 20,
  },
  lightHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  darkHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  lightSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  darkSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#444444',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  lightSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  darkSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  option: {
    marginBottom: 10,
  },
  lightOptionText: {
    fontSize: 16,
    color: '#333',
  },
  darkOptionText: {
    fontSize: 16,
    color: '#fff',
  },
  lightInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  darkInput: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    color: '#fff',
  },
  changePasswordButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#333',
  },
  logoutConfirmButton: {
    padding: 10,
    backgroundColor: '#FF5733',
    borderRadius: 5,
  },
  logoutConfirmButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AdminSetting;
