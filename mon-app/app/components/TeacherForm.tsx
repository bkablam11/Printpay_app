import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

type TeacherFormProps = {
    onSubmit: (data: { name: string; subject: string; impressions: number; payment: number }) => void;
    initialData?: { name?: string; subject?: string; impressions?: number; payment?: number };
    buttonText?: string;
};

const TeacherForm: React.FC<TeacherFormProps> = ({ onSubmit, initialData = {}, buttonText = "Ajouter" }) => {
    const [name, setName] = useState(initialData.name || "");
    const [subject, setSubject] = useState(initialData.subject || "");
    const [impressions, setImpressions] = useState(initialData.impressions || "");
    const [payment, setPayment] = useState(initialData.payment || "");

    const handleSubmit = () => {
        if (!name || !subject) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }
        onSubmit({
            name,
            subject,
            impressions: Number(impressions),
            payment: Number(payment),
        });
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
            <TextInput
                style={styles.input}
                placeholder="Matière"
                value={subject}
                onChangeText={setSubject}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre d'impressions"
                keyboardType="numeric"
                value={impressions.toString()}
                onChangeText={setImpressions}
            />
            <TextInput
                style={styles.input}
                placeholder="Paiement (FCFA)"
                keyboardType="numeric"
                value={payment.toString()}
                onChangeText={setPayment}
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