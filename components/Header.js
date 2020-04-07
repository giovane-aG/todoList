import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

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
        backgroundColor:'#fafafa',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: Constants.statusBarHeight,
    },

    title: {
        color: 'lightblue',
        fontWeight: 'bold',
        fontStyle: 'italic',  
        fontSize: 24,
        fontFamily: 'Roboto'
    },
})