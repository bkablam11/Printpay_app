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
  const router = useRouter(); // Initialisez le routeur

  // Fonction pour filtrer les enseignants
  const handleSearch = (query) => {
    setSearchQuery(query);

    // Appliquer la recherche uniquement sur le nom
    const filtered = fakeData.teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredTeachers(filtered);
  };

  const handleTeacherPress = (id) => {
    router.push(`/teacher/${id}`); // Naviguez vers la page TeacherDetails avec l'ID de l'enseignant
  };

  const handleAddPrint = (id) => {
    router.push({
      pathname: "/AddPrint",
      params: { teacherId: id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de Bord</Text>

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher un enseignant par nom ou matière"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Liste des enseignants */}
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
              <Text style={styles.teacherInfo}>
                Impressions : {item.impressions}
              </Text>
              <Text style={styles.teacherInfo}>
                Paiement : {item.payment} FCFA
              </Text>
              <TouchableOpacity onPress={() => handleAddPrint(item.id)}>
                <Text style={styles.addPrintButton}>Ajouter une Impression</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>
            Aucun enseignant ne correspond à votre recherche.
          </Text>
        }
      />

      {/* Boutons supplémentaires */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/GlobalReport")}
      >
        <Text style={styles.buttonText}>Rapport Global</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/ManageTeachers")}
      >
        <Text style={styles.buttonText}>Gérer les Enseignants</Text>
      </TouchableOpacity>

      {/* Bouton pour se déconnecter */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Se Déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5", // Fond gris clair
    justifyContent: "center",
    alignItems: "center",
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
  addPrintButton: {
    color: "#6200ee",
    fontSize: 16,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  noResultsText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 16,
  },
});

export default DashboardScreen;
