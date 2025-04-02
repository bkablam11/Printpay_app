import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

const AddPrint = ({ route }) => {
  const router = useRouter();
  const [copies, setCopies] = useState(""); // Nombre de copies
  const [pricePerCopy, setPricePerCopy] = useState(15); // Prix par copie (par défaut 15)
  const [date, setDate] = useState(new Date().toLocaleDateString()); // Date actuelle

  const handleCalculate = () => {
    if (!copies || isNaN(copies)) {
      Alert.alert("Erreur", "Veuillez entrer un nombre valide de copies.");
      return;
    }

    const totalCost = copies * pricePerCopy; // Calcul du coût total
    Alert.alert(
      "Facture",
      `Nombre de copies : ${copies}\nPrix par copie : ${pricePerCopy} FCFA\nCoût total : ${totalCost} FCFA`
    );

    // Enregistrez les données (vous pouvez les envoyer à une base de données ici)
    const printData = {
      copies: parseInt(copies),
      pricePerCopy,
      totalCost,
      date,
    };

    console.log("Données d'impression enregistrées :", printData);

    // Retournez à la page précédente
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une Impression</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de copies"
        keyboardType="numeric"
        value={copies}
        onChangeText={setCopies}
      />

      <TextInput
        style={styles.input}
        placeholder="Prix par copie (15 ou 25)"
        keyboardType="numeric"
        value={pricePerCopy.toString()}
        onChangeText={(value) => setPricePerCopy(parseInt(value) || 15)}
      />

      <Text style={styles.date}>Date : {date}</Text>

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculer et Enregistrer</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
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
});

export default AddPrint;