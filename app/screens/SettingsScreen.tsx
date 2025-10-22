
import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <View style={[styles.container, darkMode && styles.darkBg]}>
      <Text style={styles.title}>⚙️ Paramètres</Text>
      <View style={styles.optionRow}>
        <Ionicons name="moon" size={24} color={darkMode ? '#fff' : '#1976d2'} style={styles.icon} />
        <Text style={[styles.optionText, darkMode && styles.optionTextDark]}>Mode sombre</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <View style={styles.optionRow}>
        <Ionicons name="notifications" size={24} color={darkMode ? '#fff' : '#1976d2'} style={styles.icon} />
        <Text style={[styles.optionText, darkMode && styles.optionTextDark]}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
      <TouchableOpacity style={styles.logoutBtn}>
        <Ionicons name="log-out" size={22} color="#fff" style={styles.icon} />
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    padding: 24,
    justifyContent: "center",
  },
  darkBg: {
    backgroundColor: "#0d1b2a",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1976d2",
    textAlign: "center",
    marginBottom: 32,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    shadowColor: "#1976d2",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  icon: {
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    color: "#1976d2",
  },
  optionTextDark: {
    color: "#fff",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976d2",
    borderRadius: 8,
    padding: 12,
    marginTop: 32,
    alignSelf: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
