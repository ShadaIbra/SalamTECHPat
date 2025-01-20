import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding/login");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
}); 