import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Importez DateTimePicker
import { useRouter, useLocalSearchParams } from "expo-router";
import fakeData from "../data/fakeData";

const MonthlyReport = () => {
  const router = useRouter();
  const { teacherId } = useLocalSearchParams();

  if (!teacherId) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Paramètre teacherId manquant.</Text>
      </View>
    );
  }

  const teacher = fakeData.teachers.find((t) => t.id === parseInt(teacherId));

  if (!teacher) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Enseignant introuvable.</Text>
      </View>
    );
  }

  const [startDate, setStartDate] = useState(new Date()); // Date de début
  const [endDate, setEndDate] = useState(new Date()); // Date de fin
  const [showStartPicker, setShowStartPicker] = useState(false); // Afficher le sélecteur de date de début
  const [showEndPicker, setShowEndPicker] = useState(false); // Afficher le sélecteur de date de fin
  const [filteredPrints, setFilteredPrints] = useState(teacher?.prints || []);

  // Fonction pour filtrer les impressions par période
  const filterPrintsByDate = () => {
    const filtered = teacher.prints.filter((print) => {
      const printDate = new Date(print.date);
      return printDate >= startDate && printDate <= endDate;
    });

    setFilteredPrints(filtered);
  };

  // Calcul des totaux
  const totalCopies = filteredPrints.reduce((sum, print) => sum + print.copies, 0);
  const totalPayment = filteredPrints.reduce((sum, print) => sum + print.totalCost, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rapport Mensuel</Text>
      <Text style={styles.subtitle}>Enseignant : {teacher.name}</Text>

      {/* Section pour sélectionner une période */}
      <View style={styles.filterContainer}>
        {/* Bouton pour sélectionner la date de début */}
        <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>
            Date de début : {startDate.toISOString().split("T")[0]}
          </Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={(event, selectedDate) => {
              setShowStartPicker(false);
              if (selectedDate) setStartDate(selectedDate);
            }}
          />
        )}

        {/* Bouton pour sélectionner la date de fin */}
        <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>
            Date de fin : {endDate.toISOString().split("T")[0]}
          </Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={(event, selectedDate) => {
              setShowEndPicker(false);
              if (selectedDate) setEndDate(selectedDate);
            }}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={filterPrintsByDate}>
          <Text style={styles.buttonText}>Filtrer</Text>
        </TouchableOpacity>
      </View>

      {/* Résumé des totaux */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Nombre total de copies : {totalCopies}</Text>
        <Text style={styles.summaryText}>Paiement total : {totalPayment} FCFA</Text>
      </View>

      {/* Liste des impressions */}
      <FlatList
        data={filteredPrints}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Copies : {item.copies}</Text>
            <Text>Coût : {item.totalCost} FCFA</Text>
            <Text>Date : {item.date}</Text>
          </View>
        )}
      />

      {/* Bouton pour revenir à la page teacher/[id].js */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push(`/teacher/${teacherId}`)}
      >
        <Text style={styles.backButtonText}>Retour à l'enseignant</Text>
      </TouchableOpacity>
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
  filterContainer: {
    marginBottom: 16,
  },
  dateButton: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  dateButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  summaryContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
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
  backButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "#6200ee",
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default MonthlyReport;