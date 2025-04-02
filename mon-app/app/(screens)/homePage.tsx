import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';
import Typo from '../components/Typo';
import Animated, { FadeIn } from "react-native-reanimated";
import Button from '../components/Button';
import { colors } from '@/constants/theme';


const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>PrintPay</Text>
        </View>
        <Animated.Image
          entering={FadeIn.duration(1000)}
          source={require("../../assets/avatars/welcome.png")}
          style={styles.headerImage}
          resizeMode='contain'
        />
        <Link href="../(screens)/login" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <MaterialIcons name="login" size={24} color="white" />
            <Typo fontWeight={"500"} style={styles.loginButtonText}>Connexion</Typo>
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Bienvenue sur PrintPay</Text>
        <Text style={styles.subtitle}>Gérez facilement les impressions et les paiements des enseignants</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dernières Activités</Text>
          <Text style={styles.cardContent}>Aucune activité récente</Text>
        </View>
        <Link href="../(screens)/register" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <MaterialIcons name="person-add" size={24} color="white" />
            <Typo fontWeight={"500"} style={styles.loginButtonText}>Inscription</Typo>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    width: '100%',
    padding: 16,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    borderRadius: 15,
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: '#666',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
  },
  space: {
    width: 16, // Ajustez cette valeur pour l'espace souhaité
  },
  footerImage: {
    width: '100%',
    height: 150,
    marginTop: 16,
  },
  loginButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default HomeScreen;