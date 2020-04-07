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
import FormInput from './components/FormInput'


const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')


  const addTodo = (text) => {
    if(text != '') {
      setTodos([...todos, text])
      setText('')
    }  
  }

  
  const handleRenderItem = ({ item }) => {
    return (
      <TouchableOpacity
      onPress={() => handleItemPressed(item)}
      style={styles.itemContainer} >
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    )
  }

  function handleItemPressed (item) {    
    const filteredTodos = todos.filter((todo) => {
      if(todo != item)
      return todo
    })

    setTodos(filteredTodos)
  }

  return (

    <View style={styles.container}>
      <Header />

      <FormInput
        addTodo={addTodo} />

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
  
  itemContainer: {
    marginVertical: 5
  },

  itemText: {
    fontSize: 18,
    fontStyle: 'italic',
    fontFamily: 'monospace'
  },

});
