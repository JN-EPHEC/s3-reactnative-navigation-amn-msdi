import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Product = { id: string; name: string; description: string };
const PRODUCTS: Product[] = [
  { id: "1", name: "Laptop", description: "A powerful laptop for work and play." },
  { id: "2", name: "Mouse", description: "A wireless mouse with ergonomic design." },
  { id: "3", name: "Keyboard", description: "A mechanical keyboard with RGB lighting." },
];

type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: string; name: string; description: string };
};

type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

export default function ProductListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => navigation.navigate("ProductDetail", item)}
          >
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 12,
  },
  pressed: { opacity: 0.7 },
  name: { fontSize: 18 },
});
