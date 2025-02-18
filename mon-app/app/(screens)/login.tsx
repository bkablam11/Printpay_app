import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { user } from '../data/fakeData';

const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.welcomeMessage}>Welcome to the app!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    email: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20
    },
    welcomeMessage: {
        fontSize: 16,
        color: '#333'
    }
})

export default Login