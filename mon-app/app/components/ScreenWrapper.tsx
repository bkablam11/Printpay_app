import { colors } from '@/constants/theme';
import { ScreenWrapperProps } from '@/types';
import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Dimensions, Platform } from 'react-native';

const {height} = Dimensions.get('window');


const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
    let paddingTop = Platform.OS === 'android' ? height * 0.06 : 50;
    return (
            <View style={
                [
                    {
                        paddingTop,
                        flex: 1,
                        backgroundColor:colors.neutral900,
                    },
                    style,
                    
                ]
            }>
                <StatusBar barStyle="light-content"/>
                {children}
            </View>
    );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});