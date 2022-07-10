import { StyleSheet, View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import "react-native-gesture-handler";

import {
  useFonts,
  Inter_300Light,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import theme from "./src/theme";
import AppRoutes from "./src/routes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="dark" backgroundColor="#000000" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <AppRoutes />
    </ThemeProvider>
  );
}
