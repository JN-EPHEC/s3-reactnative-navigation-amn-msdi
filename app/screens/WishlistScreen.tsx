
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/partial-react-logo.png")} style={styles.illustration} />
      <Text style={styles.title}>Ma Wishlist</Text>
      <Text style={styles.text}>Votre liste de souhaits est vide pour le moment.</Text>
      <Text style={styles.desc}>Ajoutez vos produits ou cours préférés pour les retrouver facilement !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
    padding: 24,
  },
  illustration: {
    width: 80,
    height: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  desc: {
    fontSize: 16,
    color: "#1976d2",
    textAlign: "center",
    marginTop: 8,
  },
});
