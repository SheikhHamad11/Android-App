// import { View, Text } from 'react-native'
import React from 'react';
import AppNav from './src/navigation/AppNavigator';
import AuthContextProvider from './src/context/AuthContext';
export default function App() {
  return (
    <AuthContextProvider>
      <AppNav />
    </AuthContextProvider>
  );
}
