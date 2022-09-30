import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
} from "react-native-reanimated";
const SwipUpToOpen = () => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(-15),
            withDelay(1500, withTiming(0)),
            withTiming(-15)
          ),
          -1
        ),
      },
    ],
    opacity: withRepeat(
      withSequence(
        withDelay(1500, withTiming(0)),
        withDelay(300, withTiming(1))
      ),
      -1
    ),
  }));
  return (
    <Animated.Text style={[styles.text, animatedStyle]}>
      Swip Up To Open
    </Animated.Text>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "600",
    alignSelf: "flex-end",
    letterSpacing: 0.5,
  },
});
export default SwipUpToOpen;
