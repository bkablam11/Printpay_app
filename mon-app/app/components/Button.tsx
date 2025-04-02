import { CustomButtonProps } from '@/types';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, View } from 'react-native';
import Loading from './Loading';


const Button = ({
    onPress, style, loading = false, children,
}: CustomButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.button, style, { backgroundColor: 'transparent' }]} >
                <Loading />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Button;