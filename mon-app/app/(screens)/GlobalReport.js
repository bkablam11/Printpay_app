import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Sélecteur de date
import { useRouter } from "expo-router"; // Importez useRouter pour la navigation
import fakeData from "../data/fakeData";

const GlobalReport = () => {
  const router = useRouter(); // Initialisez le routeur
  const [startDate, setStartDate] = useState(new Date()); // Date de début
  const [endDate, setEndDate] = useState(new Date()); // Date de fin
  const [showStartPicker, setShowStartPicker] = useState(false); // Afficher le sélecteur de date de début
  const [showEndPicker, setShowEndPicker] = useState(false); // Afficher le sélecteur de date de fin
  const [filteredData, setFilteredData] = useState([]); // Données filtrées

  // Fonction pour filtrer les impressions de tous les enseignants
  const filterDataByDate = () => {
    const filtered = fakeData.teachers
      .map((teacher) => {
        const filteredPrints = teacher.prints.filter((print) => {
          const printDate = new Date(print.date);
          return printDate >= startDate && printDate <= endDate;
        });

        if (filteredPrints.length > 0) {
          return {
            ...teacher,
            prints: filteredPrints,
          };
        }
        return null;
      })
      .filter((teacher) => teacher !== null); // Supprimez les enseignants sans impressions

    setFilteredData(filtered);
  };

  // Calcul des totaux globaux
  const totalCopies = filteredData.reduce(
    (sum, teacher) => sum + teacher.prints.reduce((subSum, print) => subSum + print.copies, 0),
    0
  );
  const totalPayment = filteredData.reduce(
    (sum, teacher) => sum + teacher.prints.reduce((subSum, print) => subSum + print.totalCost, 0),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rapport Global</Text>

      {/* Sélecteurs de dates */}
      <View style={styles.filterContainer}>
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

        <TouchableOpacity style={styles.button} onPress={filterDataByDate}>
          <Text style={styles.buttonText}>Filtrer</Text>
        </TouchableOpacity>
      </View>

      {/* Résumé des totaux */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Nombre total de copies : {totalCopies}</Text>
        <Text style={styles.summaryText}>Paiement total : {totalPayment} FCFA</Text>
      </View>

      {/* Liste des enseignants et leurs impressions */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.teacherName}>Enseignant : {item.name}</Text>
            <FlatList
              data={item.prints}
              keyExtractor={(print, index) => index.toString()}
              renderItem={({ item: print }) => (
                <View style={styles.printCard}>
                  <Text>Copies : {print.copies}</Text>
                  <Text>Coût : {print.totalCost} FCFA</Text>
                  <Text>Date : {print.date}</Text>
                </View>
              )}
            />
          </View>
        )}
      />

      {/* Bouton pour revenir au tableau de bord */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/dashboard")} // Naviguez vers dashboard.js
      >
        <Text style={styles.buttonText}>Retour au Tableau de Bord</Text>
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
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  printCard: {
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default GlobalReport;