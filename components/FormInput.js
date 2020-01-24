import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function FormInput({ addTodo }) {
    const [text, setText] = useState('')
    

    function handleButton() {
        addTodo(text)
        setText('')
    }
    
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='add new todo...'
                value={text}
                onChangeText={setText}
            />
            <Button
                style={styles.btn}
                title='Add'
                color='lightblue'
                onPress={handleButton}
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