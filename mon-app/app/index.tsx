import { colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const HeadingPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('./(screens)/homePage');
        }, 2000);
    }, []);   
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../assets/avatars/splashImage.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:colors.neutral900,
    },
    logo:{
        aspectRatio: 1,
        height: "20%",
    },
})

export default HeadingPage;
