import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import Constants from 'expo-constants';

let firebaseConfig = Constants.manifest.extra.firebaseConfig;
firebase.initializeApp(firebaseConfig);
firebase.database().ref('users/1').set({
  highscore: 42
});


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
