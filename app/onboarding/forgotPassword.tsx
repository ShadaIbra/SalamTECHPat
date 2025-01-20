import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function ForgotPassword() {
  const handleResetPassword = () => {
    // Add password reset logic here
    alert("Password reset link sent to your email!");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Enter your email address and we'll send you a link to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Pressable style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
}); 