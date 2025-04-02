import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router"; // Importez useRouter pour la navigation
import fakeData from "../data/fakeData";

const DashboardScreen = () => {
  const [searchQuery, setSearchQuery] = useState(""); // État pour la recherche
  const [filteredTeachers, setFilteredTeachers] = useState(fakeData.teachers); // État pour les enseignants filtrés
  const [filter, setFilter] = useState("all"); // État pour le filtre
  const router = useRouter(); // Initialisez le routeur

  // Fonction pour filtrer les enseignants
  const handleSearch = (query) => {
    setSearchQuery(query);
    let filtered = fakeData.teachers;

    // Appliquer le filtre
    if (filter !== "all") {
      filtered = filtered.filter((teacher) => teacher.subject === filter);
    }

    // Appliquer la recherche
    filtered = filtered.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(query.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredTeachers(filtered);
  };

  const handleTeacherPress = (id) => {
    router.push(`/teacher/${id}`); // Naviguez vers la page TeacherDetails avec l'ID de l'enseignant
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher un enseignant par nom ou matière"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Filtres */}
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setFilter("all")}>
          <Text style={filter === "all" ? styles.activeFilter : styles.filter}>
            Tous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("Math")}>
          <Text style={filter === "Math" ? styles.activeFilter : styles.filter}>
            Math
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("Science")}>
          <Text style={filter === "Science" ? styles.activeFilter : styles.filter}>
            Science
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredTeachers} // Liste des enseignants filtrés
        keyExtractor={(item) => item.id.toString()} // Clé unique pour chaque élément
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => handleTeacherPress(item.id)} // Naviguez vers la page TeacherDetails
          >
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.infoContainer}>
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
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  filter: {
    fontSize: 16,
    color: "#555",
  },
  activeFilter: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6200ee",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff", // Fond blanc pour les cartes
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
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
