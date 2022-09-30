import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import wallpaper from "./assets/images/wallpaper.webp";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={24} color="white" />
        <Text style={styles.date}>Friday, 30 September</Text>
        <Text style={styles.time}>15:26</Text>
      </View>

      {/* notification list */}

      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
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
  footer: {
    flexDirection: "row",
    marginTop: "auto",
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 75,
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#00000050",
    width: 50,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
