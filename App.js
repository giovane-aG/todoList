import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  FlatList, 
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import Header from './components/Header'


const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')


  const handleButton = () => {
    setTodos([...todos, text])
    setText('')
  }

  const handleItemPressed = (item) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo != item )
    })
  }

  const handleRenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} >
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='add new todo...'
                onChangeText={setText}
                value={text}
            />
            <Button
                style={styles.btn}
                title='Add'
                color='lightblue'
                onPress={handleButton}
            />
        </View>

      <FlatList 
        data={todos}
        keyExtractor={item => (item.length * Math.random()).toString()}
        renderItem={handleRenderItem}
      />


    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  form: {
    flexDirection: 'row',
    marginVertical: 20,
  },

  input: {
      margin: 10,
      width: 150
  },

  itemContainer: {
    marginVertical: 5
  },

  itemText: {
    fontSize: 18,
    fontStyle: 'italic',
    fontFamily: 'monospace'
  },

});
