import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type ButtonProps = {
  label: string;
  style?: ViewStyle;
};

function Button({ label, style }: ButtonProps) {
  return (
    <Pressable style={[styles.button, style]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  text: {
    color: "white",
  },
});
