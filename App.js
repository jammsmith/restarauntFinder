import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import RestarauntSearch from './src/components/RestarauntSearch';
import RestarauntList from './src/components/RestarauntList';

export default function App () {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestarauntSearch />
        <RestarauntList />
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
