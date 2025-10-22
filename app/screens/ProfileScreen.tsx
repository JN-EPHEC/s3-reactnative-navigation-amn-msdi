

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={require("../../assets/images/icon.png")}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>Mohamed Amine Mesaoudi</Text>
      <Text style={styles.username}>@mohamedaminemesaoudi</Text>
      <Text style={styles.email}>m.mesaoudi@students.ephec.be</Text>
      <View style={styles.infoRow}>
        <Ionicons name="call" size={20} color="#1976d2" style={styles.infoIcon} />
        <Text style={styles.infoText}>+32 123 456 789</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={20} color="#1976d2" style={styles.infoIcon} />
        <Text style={styles.infoText}>Bruxelles, Belgique</Text>
      </View>
      <Text style={styles.bio}>
        Passionné de développement mobile et web, étudiant à l'EPHEC. J'aime apprendre et partager !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#e3f2fd',
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  avatarWrapper: {
    backgroundColor: '#1976d2',
    borderRadius: 60,
    padding: 6,
    marginBottom: 16,
    shadowColor: '#1976d2',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 4,
  },
  username: {
    fontSize: 18,
    color: "#333",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#1976d2",
  },
  bio: {
    marginTop: 18,
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 22,
  },
});
