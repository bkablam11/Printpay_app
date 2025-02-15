/* import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TeacherCard from "../components/TeacherCard";
import { teachers } from "../data/fakeData";

const ExploreScreen = ({ navigation }) => {
  const renderTeacher = ({ item }) => (
    <TeacherCard
      teacher={item}
      onPress={() => navigation.navigate("TeacherDetails", { teacher: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={teachers}
        renderItem={renderTeacher}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});

export default ExploreScreen; */

import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from "react-native";

export default function ExploreScreen() {
  const personnes = [
    { id: "1", name: "Jean Dupont", image: require("../../assets/avatars/1.png") },
    { id: "2", name: "Marie Curie", image: require("../../assets/avatars/2.png") },
    { id: "3", name: "Pierre Martin", image: require("../../assets/avatars/3.png") },
    { id: "4", name: "Sophie Lambert", image: require("../../assets/avatars/4.png") },
    { id: "5", name: "Lucie Bernard", image: require("../../assets/avatars/5.png") },
    { id: "6", name: "Thomas Leroy", image: require("../../assets/avatars/6.png") },
  ];

  const oneAnimal = ({ item }: { item: { name: string; image: any } }) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.avatar} resizeMode="cover" />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const headerComponent = () => {
    return <Text style={styles.listHeadline}>Personnes</Text>;
  };

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={personnes}
        renderItem={oneAnimal}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={<Text>No personnes found</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },
  listHeadline: {
    color: "#333",
    fontSize: 21,
    fontWeight: "bold",
    padding: 16,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100, // Rend le conteneur rond
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Cache tout ce qui dépasse du conteneur
  },
  avatar: {
    height: "100%", // Remplit tout l'espace du conteneur
    width: "100%", // Remplit tout l'espace du conteneur
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 13,
  },
});