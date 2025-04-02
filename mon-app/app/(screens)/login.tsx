import { user } from '../data/fakeData';
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <View style={styles.container}>
            <BackButton iconSize={20} />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10
    },
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