import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Importez le composant Picker
import { useRouter, useLocalSearchParams } from "expo-router"; // Utilisez useLocalSearchParams pour récupérer les paramètres
import fakeData from "../data/fakeData"; // Remplacez par une base de données si nécessaire

const AddPrint = () => {
  const router = useRouter();
  const { teacherId } = useLocalSearchParams(); // Récupérez l'ID de l'enseignant
  const teacher = fakeData.teachers.find((t) => t.id === parseInt(teacherId)); // Trouve l'enseignant correspondant

  const [copies, setCopies] = useState(""); // Nombre de copies
  const [pricePerCopy, setPricePerCopy] = useState(15); // Prix par copie (par défaut 15)
  const [date, setDate] = useState(new Date().toLocaleString()); // Date et heure actuelles

  const handleCalculate = () => {
    if (!copies || isNaN(copies)) {
      Alert.alert("Erreur", "Veuillez entrer un nombre valide de copies.");
      return;
    }

    const totalCost = copies * pricePerCopy; // Calcul du coût total

    // Enregistrez les données d'impression
    const printData = {
      copies: parseInt(copies),
      pricePerCopy,
      totalCost,
      date,
    };

    // Ajoutez les données d'impression à l'enseignant
    if (teacher) {
      teacher.prints = teacher.prints || []; // Initialisez les impressions si elles n'existent pas
      teacher.prints.push(printData); // Ajoutez les nouvelles données d'impression
      console.log("Données d'impression enregistrées :", teacher);
    } else {
      Alert.alert("Erreur", "Enseignant introuvable.");
      return;
    }

    Alert.alert(
      "Facture",
      `Nombre de copies : ${copies}\nPrix par copie : ${pricePerCopy} FCFA\nCoût total : ${totalCost} FCFA\nDate : ${date}`
    );

    // Retournez à la page précédente
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une Impression</Text>

      {teacher ? (
        <>
          <Text style={styles.teacherName}>Enseignant : {teacher.name}</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre de copies"
            keyboardType="numeric"
            value={copies}
            onChangeText={setCopies}
          />

          {/* Liste déroulante pour sélectionner le prix */}
          <Text style={styles.label}>Prix par copie :</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={pricePerCopy}
              onValueChange={(itemValue) => setPricePerCopy(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="15 FCFA" value={15} />
              <Picker.Item label="25 FCFA" value={25} />
              <Picker.Item label="Autre (précisez)" value="other" />
            </Picker>
          </View>

          {/* Champ pour entrer un prix personnalisé si "Autre" est sélectionné */}
          {pricePerCopy === "other" && (
            <TextInput
              style={styles.input}
              placeholder="Entrez un prix personnalisé"
              keyboardType="numeric"
              onChangeText={(value) => setPricePerCopy(parseInt(value) || 15)}
            />
          )}

          <Text style={styles.date}>Date : {date}</Text>

          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calculer et Enregistrer</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.errorText}>Enseignant introuvable.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  teacherName: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  picker: {
    height: 40,
    width: "100%",
  },
  date: {
    fontSize: 16,
    marginBottom: 16,
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
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default AddPrint;