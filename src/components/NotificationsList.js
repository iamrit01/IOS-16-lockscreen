import { FlatList, useWindowDimensions } from "react-native";
import notifications from "../../assets/data/notifications";
import NotificationItem from "./NotificationItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const NotificationsList = ({ footerVisibility, ...flatListProps }) => {
  const { height } = useWindowDimensions();
  const listVisibility = useSharedValue(1);

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;

      if (y < 10) {
        // footer open
        footerVisibility.value = withTiming(1);
      } else {
        footerVisibility.value = withTiming(0);
        // footer close
      }
    },
    onBeginDrag: (event) => {
      if (listVisibility.value < 1) {
        listVisibility.value = withTiming(1);
      }
    },
    onEndDrag: (event) => {
      if (event.contentOffset.y < 0) {
        listVisibility.value = withTiming(0);
      }
    },
  });

  return (
    <Animated.FlatList
      data={notifications}
      renderItem={({ item, index }) => (
        <NotificationItem
          data={item}
          index={index}
          listVisibility={listVisibility}
        />
      )}
      {...flatListProps}
      onScroll={handler}
      scrollEventThrottle={16}
    />
  );
};

export default NotificationsList;
