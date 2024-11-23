import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './screens/HomePage';
import ChatbotScreen from './screens/ChatbotScreen';
import AdminSetting from './screens/AdminSetting';
import Update from './screens/Update';
import Login from './screens/Login';
import Register from './screens/Register';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
        <Stack.Screen name="AdminSetting" component={AdminSetting} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
