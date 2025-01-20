import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Register() {
  const handleRegister = () => {
    // Add registration logic here
    router.push("/onboarding/verification");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="words"
        />
        
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={[styles.dateInput, styles.dayMonth]}
            placeholder="DD"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={[styles.dateInput, styles.dayMonth]}
            placeholder="MM"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={[styles.dateInput, styles.year]}
            placeholder="YYYY"
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    textAlign: "center",
  },
  dayMonth: {
    flex: 1,
  },
  year: {
    flex: 1.5,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
}); 