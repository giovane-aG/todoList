import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor:'lightblue',
        alignItems: 'center',
        padding: 30
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: -20,
        fontSize: 24,
        fontFamily:'monospace'
    },
})