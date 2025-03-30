import { StyleSheet, Text, View } from "react-native";

type ActionSwipeProps = {
  icon?: JSX.Element;
};

function ActionnSwipe({ icon }: ActionSwipeProps): JSX.Element {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <View>
          <Text style={styles.title}>Action swipe</Text>
          <Text style={styles.subtitle}>Subtitle</Text>
        </View>
      </View>
    </View>
  );
}

export default ActionnSwipe;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    width: "100%",
  },
  container: {
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
