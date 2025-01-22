import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';

export default function Members() {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const auth = getAuth();
      const db = getFirestore();
      
      if (auth.currentUser) {
        try {
          const membersRef = collection(db, `users/${auth.currentUser.uid}/members`);
          const q = query(membersRef);
          const querySnapshot = await getDocs(q);
          
          const membersList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          
          setMembers(membersList);
        } catch (error) {
          console.error("Error fetching members:", error);
        }
      }
    };

    fetchMembers();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {members.map((member) => (
          <Pressable 
            key={member.id}
            style={styles.memberCard}
            onPress={() => router.push(`/member/${member.id}`)}
          >
            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRelation}>{member.relation}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </Pressable>
        ))}
      </ScrollView>

      <Pressable 
        style={styles.addButton}
        onPress={() => router.push("/member/add")}
      >
        <Text style={styles.addButtonText}>Add Member</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  memberRelation: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
}); 