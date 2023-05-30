import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

import Home from './src/pages/Home';

export default function App(){
 
  return (
    <SafeAreaView style={style.body}>
      <Home />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EBFFEE',
  }
})
