import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

type TeacherFormProps = {
    onSubmit: (data: { name: string }) => void;
    initialData?: { name?: string };
    buttonText?: string;
};

const TeacherForm: React.FC<TeacherFormProps> = ({ onSubmit, initialData = {}, buttonText = "Ajouter" }) => {
    const [name, setName] = useState(initialData.name || "");

    const handleSubmit = () => {
        if (!name.trim()) {
            alert("Veuillez entrer un nom valide.");
            return;
        }
        onSubmit({ name });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{buttonText} un Enseignant</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={setName}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{buttonText}</Text>
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

export default TeacherForm;