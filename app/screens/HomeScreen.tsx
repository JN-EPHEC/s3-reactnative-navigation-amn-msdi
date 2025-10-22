import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/react-logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bienvenue sur Course Finder !</Text>
      <Text style={styles.subtitle}>Bonjour Mohamed Amine Mesaoudi 👋</Text>
      <Text style={styles.info}>Aujourd'hui : {new Date().toLocaleDateString()}</Text>
      <Text style={styles.desc}>Retrouvez et gérez vos cours, produits et informations facilement.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  desc: {
    fontSize: 16,
    color: "#1976d2",
    textAlign: "center",
    marginTop: 8,
  },
});
