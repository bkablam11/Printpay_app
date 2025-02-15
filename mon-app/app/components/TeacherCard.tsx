import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Définir les types des props (si vous utilisez TypeScript)
interface Teacher {
    id: string;
    name: string;
    avatar: any; // ou `number` si vous utilisez require() pour les images locales
    impressions: { id: string; date: string; pages: number; cost: number }[];
    payments: { id: string; date: string; amount: number }[];
}

interface TeacherCardProps {
    teacher: Teacher;
    onPress: () => void;
}

const TeacherCard = ({ teacher, onPress }: TeacherCardProps) => {
    return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={teacher.avatar} style={styles.avatar} />
    <View style={styles.info}>
        <Text style={styles.name}>{teacher.name}</Text>
        <Text style={styles.details}>
            Impressions: {teacher.impressions.length} | Paiements: {teacher.payments.length}
        </Text>
    </View>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // Correction : couleur valide
    backgroundColor: "#fff", // Correction : couleur valide
},
avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
},
info: {
    flex: 1,
},
name: {
    fontSize: 18,
    fontWeight: "bold",
},
details: {
    fontSize: 14,
    color: "#666",
},
});

export default TeacherCard;