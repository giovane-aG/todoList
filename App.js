import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  FlatList, 
  TouchableOpacity,
} from 'react-native';

import * as SQLite from 'expo-sqlite'

import Header from './components/Header'
import FormInput from './components/FormInput'

const db = SQLite.openDatabase('todosDB.db')

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    db.transaction(
      (tx)=> {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS todos
          (id integer primary key not null, todo text)`
        )
        tx.executeSql(`SELECT * from todos`, [], (_, { rows }) => {
          let auxiliarArray = []

          rows._array.forEach((todo) => {
            console.log(todo.todo)
            auxiliarArray.push(todo.todo)
          })

          setTodos(auxiliarArray)
        })
      }
    )
  }, [])

  const addTodo = (text) => {

    if(text != '') {
      db.transaction(
        (tx) => {
          tx.executeSql(`INSERT INTO todos (todo) VALUES (?)`, [text])
          tx.executeSql('SELECT * FROM todos', [], (_, resultSet) => {
            console.log(JSON.stringify(resultSet))
          })
        }
      )
      setTodos([...todos, text])
    }
  }
  
  const handleRenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleItemPressed(item)}
        style={styles.itemContainer}
      >
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    )
  }

  async function handleItemPressed (item) {
    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM todos WHERE todo=?', [item], (_, resultSet) => {
          console.log(resultSet)
        })
      }
    )

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
