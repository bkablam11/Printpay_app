import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BackButtonProps } from '@/types';
import { useRouter } from 'expo-router';
import { CaretLeft } from 'phosphor-react-native';
import { verticalScale } from '@/utils/styling';
import { colors, radius } from '@/constants/theme';

const BackButton = ({ style, iconSize = 26 }:
    BackButtonProps) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            style={[styles.button, style]} onPress={() => router.back()}>
            <CaretLeft size={verticalScale(iconSize)} color={colors.white} weight='bold' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: 'flex-start',
        padding: 5,
        borderCurve: "continuous",
        borderRadius: radius._12,
    },
    text: {
        color: 'white',
        marginLeft: 5,
        fontSize: 16,
    },
});

export default BackButton;