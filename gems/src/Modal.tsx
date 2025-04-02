import { Pressable, StyleSheet, Text, View } from "react-native";

type ModalProps = {
  handleClose: () => void;
  modalBox: JSX.Element;
};

function Modal({ handleClose, modalBox }: ModalProps) {
  return (
    <Pressable style={styles.layer} onPress={handleClose}>
      <View>{modalBox}</View>
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
