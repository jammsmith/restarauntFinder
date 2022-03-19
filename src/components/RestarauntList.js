import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestarauntList = () => (
  <View style={styles.container}>
    <Text>Restaraunt List</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 16
  }
});

export default RestarauntList;
