import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import fakeData from "../data/fakeData";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={fakeData.teachers} // Liste des enseignants
        keyExtractor={(item) => item.id.toString()} // Clé unique pour chaque élément
        renderItem={({ item }) => (
          <Link href={`/teacher/${item.id}`} asChild>
            <TouchableOpacity style={styles.cardContainer}>
              <View>
                <Text style={styles.teacherName}>{item.name}</Text>
                <Text style={styles.teacherSubject}>{item.subject}</Text>
                <Text style={styles.teacherInfo}>
                  Impressions : {item.impressions}
                </Text>
                <Text style={styles.teacherInfo}>
                  Paiement : {item.payment} FCFA
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5", // Fond gris clair
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff", // Fond blanc pour les cartes
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 16,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teacherSubject: {
    fontSize: 16,
    color: "#555",
  },
  teacherInfo: {
    fontSize: 14,
    color: "#777",
  },
});

export default DashboardScreen;
