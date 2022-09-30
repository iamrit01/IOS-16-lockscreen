import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import wallpaper from "./assets/images/wallpaper.webp";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={24} color="white" />
        <Text style={styles.date}>Friday, 30 September</Text>
        <Text style={styles.time}>15:26</Text>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C3FFFE",
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: "bold",
    color: "#C3FFFE",
  },
});
