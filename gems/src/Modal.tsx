import { Pressable, StyleSheet, Text, View } from "react-native";

type ModalProps = {
  handleClose: () => void;
};

function Modal({ handleClose }: ModalProps) {
  return (
    <Pressable onPress={handleClose}>
      <View style={styles.layer}>
        <Text>Modal</Text>
      </View>
    </Pressable>
  );
}

export default Modal;

const styles = StyleSheet.create({
  layer: {
    position: "absolute",
    backgroundColor: "red",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 32,
  },
});
