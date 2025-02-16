import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>PrintPay</Text>
      </View>
      <Image
        source={{ uri: 'https://example.com/your-image.jpg' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Bienvenue sur PrintPay</Text>
      <Text style={styles.subtitle}>Gérez facilement les impressions et les paiements des enseignants</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dernières Activités</Text>
        <Text style={styles.cardContent}>Aucune activité récente</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="../screens/dashboard" asChild>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="bar-chart" size={24} color="white" />
            <Text style={styles.buttonText}>Voir le Dashboard</Text>
          </TouchableOpacity>
        </Link>
        <View style={styles.space} />
        <Link href="../screens/paiement" asChild>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="add-circle" size={24} color="white" />
            <Text style={styles.buttonText}>Ajouter un Paiement</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Image
        source={{ uri: 'https://example.com/another-image.jpg' }}
        style={styles.footerImage}
      />
    </ScrollView>
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
  buttonContainer: {
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default HomeScreen;