import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

type ActionSwipeProps = {
  icon?: JSX.Element;
};

function ActionnSwipe({ icon }: ActionSwipeProps): JSX.Element {
  const offset = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <GestureHandlerRootView>
      <View style={styles.wrapper}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.container, animatedStyles]}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <View>
              <Text style={styles.title}>Action swipe</Text>
              <Text style={styles.subtitle}>Subtitle</Text>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

export default ActionnSwipe;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#e6e6e6",
  },
  container: {
    backgroundColor: "white",
    gap: 16,
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#cacaca",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  subtitle: {
    opacity: 0.5,
  },
});
