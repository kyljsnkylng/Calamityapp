import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

const UpdateScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [calamityType, setCalamityType] = useState('');
  const [alertDate, setAlertDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); 
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || alertDate;
    setShowDatePicker(false);
    setAlertDate(currentDate);
  };

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      } else {
        alert('Image selection canceled');
      }
    } else {
      alert('Permission to access the photo library is required!');
    }
  };

  const handleSubmit = () => {
    if (title && description && calamityType && alertDate) {
      setModalVisible(true); 
    } else {
      alert('Please complete all fields!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Create Calamity Alert</Title>

          <TextInput
            style={styles.input}
            placeholder="Enter Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Enter Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Calamity Type (e.g., Typhoon)"
            value={calamityType}
            onChangeText={setCalamityType}
          />

          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
            <Text style={styles.dateText}>
              {alertDate ? alertDate.toLocaleDateString() : 'Select Alert Date'}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={alertDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
            <Text style={styles.imageButtonText}>
              {imageUri ? 'Change Image' : 'Upload Image (Optional)'}
            </Text>
          </TouchableOpacity>

          {imageUri && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
          )}

          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Submit Alert
          </Button>
        </Card.Content>
      </Card>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Alert Submitted Successfully!</Text>
            <Text style={styles.modalMessage}>
              Your alert has been created and saved. Thank you!
            </Text>
            <Button
              mode="contained"
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f9',
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 12,
    fontSize: 16,
  },
  textarea: {
    textAlignVertical: 'top',
  },
  datePicker: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
  imageButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#4CAF50',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007bff',
  },
});

export default UpdateScreen;
