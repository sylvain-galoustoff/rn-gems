import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
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
    .onFinalize((event) => {
      offset.value = withSpring(event.translationX < -170 ? -170 : 0);
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <GestureHandlerRootView>
      <View style={styles.wrapper}>
        <View style={styles.actions}>
          <Pressable style={[styles.button, styles.edit]}>
            <Text style={styles.buttonIcon}>E</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.delete]}>
            <Text style={styles.buttonIcon}>X</Text>
          </Pressable>
        </View>
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
    backgroundColor: "#dbdbdb",
  },
  container: {
    backgroundColor: "white",
    gap: 16,
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
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
  actions: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
  },
  button: {
    width: 85,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    color: "white",
  },
  edit: {
    backgroundColor: "#5287b3",
  },
  delete: {
    backgroundColor: "#b35252",
  },
});
