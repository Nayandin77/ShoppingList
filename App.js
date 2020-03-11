import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import uuid4 from 'uuid4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid4(), text: 'Milk' },
    { id: uuid4(), text: 'Eggs' },
    { id: uuid4(), text: 'Bread' },
    { id: uuid4(), text: 'Chocolate' },
  ]);


  const deleteItem = (id) => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id != id); // returns all the ids but not the id being deleted
    });
  };

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item name', {text:'Ok'});
    } else {
      setItems(previousItems => {
        return [{id: uuid4(), text}, ...previousItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} 
        deleteItem={deleteItem} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;