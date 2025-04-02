import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router"; // Utilisez useLocalSearchParams pour récupérer les paramètres
import fakeData from "../data/fakeData";

const MonthlyReport = () => {
  const { teacherId, month } = useLocalSearchParams(); // Récupérez les paramètres teacherId et month
  const teacher = fakeData.teachers.find((t) => t.id === parseInt(teacherId)); // Trouve l'enseignant correspondant

  if (!teacher) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Enseignant introuvable.</Text>
      </View>
    );
  }

  const prints = teacher.prints.filter((print) => print.date.includes(month)); // Filtrer les impressions par mois

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rapport Mensuel</Text>
      <Text style={styles.subtitle}>Enseignant : {teacher.name}</Text>
      <FlatList
        data={prints}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Copies : {item.copies}</Text>
            <Text>Coût : {item.totalCost} FCFA</Text>
            <Text>Date : {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default MonthlyReport;