import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from 'react-native-maps';

// Dummy data - in a real app, this would come from your backend
const getMemberDetails = (id: string) => ({
  id,
  name: 'Sarah Smith',
  relation: 'Spouse',
  age: 35,
  bloodType: 'A+',
  emergencyContact: '+974 5555-5555',
  healthStatus: 'stable' as 'stable' | 'pending',
  location: {
    latitude: 25.2854,
    longitude: 51.5310,
    timestamp: new Date(),
  },
});

export default function MemberDetails() {
  const { id } = useLocalSearchParams();
  const member = getMemberDetails(id as string);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.relation}>{member.relation}</Text>
          <View style={styles.statusContainer}>
            <Text style={[
              styles.statusText,
              member.healthStatus === 'stable' ? styles.statusStable : styles.statusPending
            ]}>
              Health Status: {member.healthStatus.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{member.age}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Blood Type</Text>
            <Text style={styles.value}>{member.bloodType}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Emergency Contact</Text>
            <Text style={styles.value}>{member.emergencyContact}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live Location</Text>
          <Text style={styles.locationTimestamp}>
            Last updated: {member.location.timestamp.toLocaleTimeString()}
          </Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: member.location.latitude,
                longitude: member.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: member.location.latitude,
                  longitude: member.location.longitude,
                }}
                title={member.name}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#007AFF",
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  relation: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  statusContainer: {
    marginTop: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusStable: {
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
  },
  statusPending: {
    backgroundColor: "#FFF3E0",
    color: "#EF6C00",
  },
  section: {
    backgroundColor: "white",
    padding: 20,
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
    paddingVertical: 10,
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
  locationTimestamp: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  mapContainer: {
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
}); 