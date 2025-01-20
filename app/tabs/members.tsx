import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Dummy data for the member list
interface Member {
  id: string;
  name: string;
  relation: string;
  healthStatus: 'pending' | 'stable';
}

const dummyMembers: Member[] = [
  { id: '1', name: 'Sarah Smith', relation: 'Spouse', healthStatus: 'stable' },
  { id: '2', name: 'Alex Smith', relation: 'Child', healthStatus: 'pending' },
];

export default function Members() {
  const handleMemberPress = (memberId: string) => {
    router.push(`/member/${memberId}`);
  };

  const renderItem = ({ item }: { item: Member }) => (
    <Pressable 
      style={styles.memberItem}
      onPress={() => handleMemberPress(item.id)}
    >
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{item.name}</Text>
        <Text style={styles.memberRelation}>{item.relation}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[
          styles.statusText,
          item.healthStatus === 'stable' ? styles.statusStable : styles.statusPending
        ]}>
          {item.healthStatus.toUpperCase()}
        </Text>
        <Ionicons name="chevron-forward" size={24} color="#666" />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.addMemberButton}
        onPress={() => router.push("/member/add")}
      >
        <Ionicons name="add-circle" size={24} color="#007AFF" />
        <Text style={styles.addMemberText}>Add New Member</Text>
      </Pressable>

      <FlatList
        data={dummyMembers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No members added yet</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  addMemberButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 20,
  },
  addMemberText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    justifyContent: "space-between",
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  memberRelation: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusStable: {
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
  },
  statusPending: {
    backgroundColor: "#FFF3E0",
    color: "#EF6C00",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    marginTop: 20,
  },
}); 