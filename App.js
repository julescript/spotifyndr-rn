import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
});
