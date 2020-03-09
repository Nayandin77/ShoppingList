import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Bread' },
    { id: 4, text: 'Chocolate' },
  ]);

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <FlatList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;