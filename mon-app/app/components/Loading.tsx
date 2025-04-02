import { colors } from '@/constants/theme';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({
    size = "large",
    color = colors.primary,
}) => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={color} />
        </View>
    );
};


export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});