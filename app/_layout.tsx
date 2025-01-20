import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="tabs" />
      <Stack.Screen 
        name="emergency" 
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }} 
      />
      <Stack.Screen 
        name="volunteer/index" 
        options={{
          headerShown: true,
          title: "Volunteer",
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen 
        name="member/[id]" 
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
