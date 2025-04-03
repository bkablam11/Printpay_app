import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { useRouter } from "expo-router"; // Importez useRouter pour la navigation
import TeacherForm from "../components/TeacherForm";
import fakeData from "../data/fakeData";

type Teacher = {
    id: number;
    name: string;
    avatar: any;
    prints: {
        copies: number;
        totalCost: number;
        date: string;
    }[];
};

const ManageTeachers: React.FC = () => {
    const router = useRouter(); // Initialisez le routeur
    const [teachers, setTeachers] = useState<Teacher[]>(fakeData.teachers);
    const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

    const handleAddTeacher = (teacher: { name: string }) => {
        setTeachers([...teachers, { id: Date.now(), name: teacher.name, avatar: null, prints: [] }]);
        setEditingTeacher(null);
    };

    const handleEditTeacher = (teacher: { name: string }) => {
        if (editingTeacher) {
            setTeachers(
                teachers.map((t) =>
                    t.id === editingTeacher.id ? { ...t, name: teacher.name } : t
                )
            );
            setEditingTeacher(null);
        }
    };

    const handleDeleteTeacher = (id: number) => {
        Alert.alert(
            "Supprimer l'enseignant",
            "Êtes-vous sûr de vouloir supprimer cet enseignant ?",
            [
                { text: "Annuler", style: "cancel" },
                {
                    text: "Supprimer",
                    onPress: () => setTeachers(teachers.filter((t) => t.id !== id)),
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            {editingTeacher ? (
                <>
                    <TeacherForm
                        initialData={editingTeacher}
                        onSubmit={editingTeacher ? handleEditTeacher : handleAddTeacher}
                        buttonText={editingTeacher ? "Modifier" : "Ajouter"}
                    />
                    {/* Bouton pour revenir à la liste des enseignants */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => setEditingTeacher(null)} // Réinitialisez l'édition pour revenir à la liste
                    >
                        <Text style={styles.backButtonText}>Retour à la Liste des Enseignants</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text style={styles.title}>Liste des Enseignants</Text>
                    <FlatList
                        data={teachers}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.teacherCard}>
                                <Text style={styles.teacherName}>{item.name}</Text>
                                <View style={styles.actions}>
                                    <TouchableOpacity onPress={() => setEditingTeacher(item)}>
                                        <Text style={styles.editButton}>Modifier</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleDeleteTeacher(item.id)}
                                    >
                                        <Text style={styles.deleteButton}>Supprimer</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => setEditingTeacher({} as Teacher)}
                    >
                        <Text style={styles.addButtonText}>Ajouter un Enseignant</Text>
                    </TouchableOpacity>

                    {/* Bouton pour revenir au tableau de bord */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.push("/dashboard")} // Naviguez vers dashboard.js
                    >
                        <Text style={styles.backButtonText}>Retour au Tableau de Bord</Text>
                    </TouchableOpacity>
                </>
            )}
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
    teacherCard: {
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
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    editButton: {
        color: "#6200ee",
    },
    deleteButton: {
        color: "#d32f2f",
    },
    addButton: {
        backgroundColor: "#6200ee",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    addButtonText: {
        color: "white",
        fontSize: 16,
    },
    backButton: {
        backgroundColor: "#6200ee",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    backButtonText: {
        color: "white",
        fontSize: 16,
    },
});

export default ManageTeachers;