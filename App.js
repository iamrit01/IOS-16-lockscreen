import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import wallpaper from "./assets/images/wallpaper.webp";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import NotificationsList from "./src/components/NotificationsList";
import Animated, {
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from "react-native-reanimated";
import SwipUpToOpen from "./src/components/SwipUpToOpen";

export default function App() {
  const [date, setDate] = useState(dayjs());
  const footerVisibility = useSharedValue(1);

  useEffect(() => {
    let timer = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1);

    return () => clearInterval(timer);
  }, []);

  const animatedFooterStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(footerVisibility.value, [0, 1], [-85, 0]),
    opacity: footerVisibility.value,
  }));
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <NotificationsList
        footerVisibility={footerVisibility}
        ListHeaderComponent={() => (
          <Animated.View style={styles.header}>
            <Ionicons name="ios-lock-closed" size={24} color="white" />

            <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
            <Text style={styles.time}>{date.format("hh:mm")}</Text>
          </Animated.View>
        )}
      />

      <Animated.View
        entering={SlideInDown}
        style={[styles.footer, animatedFooterStyle]}
      >
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>
        <SwipUpToOpen />
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </Animated.View>

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
    marginBottom: 10,
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
