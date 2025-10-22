
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const PRODUCTS = [
  {
    id: "1",
    name: "Casque Bluetooth",
    description: "Casque sans fil avec réduction de bruit.",
    price: "59,99€",
    image: require("../../assets/images/react-logo.png"),
  },
  {
    id: "2",
    name: "Souris Ergonomique",
    description: "Souris confortable pour le travail quotidien.",
    price: "29,99€",
    image: require("../../assets/images/partial-react-logo.png"),
  },
  {
    id: "3",
    name: "Clavier Mécanique",
    description: "Clavier RGB pour développeurs.",
    price: "89,99€",
  image: require("../../assets/images/react-logo.png"),
  },
];

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Boutique</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDesc}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    paddingTop: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1976d2",
    textAlign: "center",
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#1976d2",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 4,
  },
  productDesc: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#388e3c",
    fontWeight: "bold",
  },
});
