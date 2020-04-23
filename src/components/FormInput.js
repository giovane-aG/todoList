import React, { useState } from 'react'
import { 
  View, 
  TextInput, 
  Button,
  StyleSheet, 
  Keyboard,
} from 'react-native'

export default function FormInput({ addTodo }) {
  const [text, setText] = useState('')


  function handleButtonPressed() {
    Keyboard.dismiss()
    addTodo(text)
    setText('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Add new todo...'
        value={text}
        onChangeText={setText}
      />
      <Button
        style={styles.btn}
        title='Add'
        color='lightblue'
        onPress={handleButtonPressed}
      />
    </View>
  )
}

const styles = StyleSheet.create({
form: {
    flexDirection: 'row',
    marginVertical: 20,
},

input: {
    margin: 10,
    width: 150
},

})