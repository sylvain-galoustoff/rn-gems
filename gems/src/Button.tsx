import { Pressable, Text, StyleSheet } from "react-native";

type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return (
    <Pressable style={styles.button}>
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
