import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={teacher.avatar} style={styles.avatar} />
      <Text style={styles.name}>{teacher.name}</Text>
      <Text style={styles.subject}>Matière : {teacher.subject}</Text>
      <Text style={styles.info}>Impressions : {teacher.impressions}</Text>
      <Text style={styles.info}>Paiement : {teacher.payment} FCFA</Text>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Retour</Text>
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
  subject: {
    fontSize: 18,
    color: "#555",
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: "#777",
    marginBottom: 4,
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
});

export default TeacherDetails;