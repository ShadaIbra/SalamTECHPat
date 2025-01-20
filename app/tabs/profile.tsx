import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePicture}>
          <Ionicons name="person" size={60} color="#ccc" />
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>john.doe@example.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+974 1234 5678</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>Male</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Date of Birth</Text>
          <Text style={styles.value}>01/01/1990</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Nationality</Text>
          <Text style={styles.value}>Qatar</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>ID Number</Text>
          <Text style={styles.value}>123456789</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Blood Type</Text>
          <Text style={styles.value}>O+</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        <Link href="/tabs/members" asChild>
          <Pressable style={styles.menuItem}>
            <Ionicons name="people" size={24} color="#007AFF" />
            <Text style={styles.menuItemText}>Manage Members</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </Pressable>
        </Link>

        <Pressable style={styles.menuItem} onPress={() => router.push("/settings")}>
          <Ionicons name="settings" size={24} color="#007AFF" />
          <Text style={styles.menuItemText}>Settings</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 20,
  },
  menuSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    color: "#666",
    fontSize: 16,
  },
  value: {
    color: "#333",
    fontSize: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 1,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },
}); 