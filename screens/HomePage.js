import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.dashboardContainer}>
        <Text style={styles.heading}> Dashboard</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Alert Level</Text>
          <Text style={styles.alertText}>Severe Typhoon Warning - Category 4</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Affected Areas Map</Text>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Map View (Coming Soon)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Tips</Text>
          <Text style={styles.tipText}>- Stay indoors and away from windows.</Text>
          <Text style={styles.tipText}>- Keep emergency supplies ready.</Text>
          <Text style={styles.tipText}>- Evacuate if instructed by authorities.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <View style={styles.update}>
            <Text style={styles.updateText}>11:30 AM - Strong winds expected within the next hour.</Text>
          </View>
          <View style={styles.update}>
            <Text style={styles.updateText}>10:00 AM - Typhoon tracking update: Moving northward.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          <Text style={styles.contactText}>Local Hotline: 123-456-789</Text>
          <Text style={styles.contactText}>National Disaster Response: 987-654-321</Text>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="dashboard" size={30} color="#FF9800" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Update')}
        >
          <Icon name="update" size={30} color="#4CAF50" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Chatbot')}
        >
          <Icon name="chat" size={30} color="#008CBA" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('AdminSetting')}
        >
          <Icon name="settings" size={30} color="#9E9E9E" />
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Login')} 
        >
          <Icon name="person" size={30} color="#03A9F4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  dashboardContainer: {
    padding: 20,
    paddingBottom: 80,
    marginBottom: 70,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  alertText: {
    fontSize: 16,
    color: '#D32F2F',
    fontWeight: 'bold',
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  mapText: {
    fontSize: 16,
    color: '#757575',
  },
  tipText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  update: {
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  updateText: {
    fontSize: 14,
    color: '#333',
  },
  contactText: {
    fontSize: 14,
    color: '#00796B',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
