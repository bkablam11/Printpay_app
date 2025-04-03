import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; // Remplacez useSearchParams par useLocalSearchParams
import fakeData from "../../data/fakeData";

const TeacherDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Utilisez useLocalSearchParams pour récupérer les paramètres
  const teacher = fakeData.teachers.find((t) => t.id === parseInt(id)); // Trouve l'enseignant correspondant

  if (!teacher) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Enseignant introuvable.</Text>
        <TouchableOpacity onPress={() => router.push("/dashboard")} style={styles.backButton}>
          <Text style={styles.backButtonText}>Retour au Tableau de Bord</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Calculer les impressions totales et le paiement total
  const totalCopies = teacher.prints?.reduce((sum, print) => sum + print.copies, 0) || 0;
  const totalPayment = teacher.prints?.reduce((sum, print) => sum + print.totalCost, 0) || 0;

  return (
    <View style={styles.container}>
      {/* Informations de l'enseignant */}
      <Image source={teacher.avatar} style={styles.avatar} />
      <Text style={styles.name}>{teacher.name}</Text>
      <Text style={styles.info}>Impressions totales : {totalCopies}</Text>
      <Text style={styles.info}>Paiement total : {totalPayment} FCFA</Text>

      {/* Liste des impressions */}
      <Text style={styles.sectionTitle}>Impressions effectuées :</Text>
      {teacher.prints && teacher.prints.length > 0 ? (
        <FlatList
          data={teacher.prints}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.printCard}>
              <Text style={styles.printInfo}>Copies : {item.copies}</Text>
              <Text style={styles.printInfo}>Coût : {item.totalCost} FCFA</Text>
              <Text style={styles.printInfo}>Date : {item.date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noPrintsText}>Aucune impression enregistrée.</Text>
      )}

      {/* Bouton pour revenir au tableau de bord */}
      <TouchableOpacity onPress={() => router.push("/dashboard")} style={styles.backButton}>
        <Text style={styles.backButtonText}>Retour au Tableau de Bord</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/MonthlyReport",
            params: { teacherId: id },
          })
        }
      >
        <Text style={styles.buttonText}>Rapport Mensuel de l'enseignant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: "#777",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  printCard: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "100%",
  },
  printInfo: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  noPrintsText: {
    fontSize: 16,
    color: "#777",
    marginTop: 16,
    textAlign: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    marginBottom: 16,
  },
  backButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "#6200ee",
    borderRadius: 8,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "#6200ee",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TeacherDetails;