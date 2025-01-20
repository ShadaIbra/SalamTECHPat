import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";

export default function Login() {
  const handleLogin = () => {
    // Add login logic here
    router.replace("/tabs/home");
  };

  const handleGuestLogin = () => {
    // Add guest login logic here
    router.replace("/tabs/home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      
      <View style={styles.alternativeOptions}>
        <Link href="/onboarding/register" style={styles.link}>
          Register
        </Link>
        <Pressable onPress={handleGuestLogin}>
          <Text style={styles.link}>Continue as Guest</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  alternativeOptions: {
    alignItems: "center",
    gap: 15,
  },
  link: {
    fontSize: 16,
    color: "#007AFF",
    textAlign: "center",
  },
}); 