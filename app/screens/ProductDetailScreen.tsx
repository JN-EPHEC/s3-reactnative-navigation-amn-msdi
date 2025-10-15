import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: string; name: string; description: string };
};

type Props = NativeStackScreenProps<ShopStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route }: Props) {
  const { name, description } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  desc: { fontSize: 16, color: "#444" },
});
