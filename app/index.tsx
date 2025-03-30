import { Alert, View, Text } from "react-native";

export default function Index() {
  const handlePress = () => {
    Alert.alert("Test OK");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>App reset</Text>
    </View>
  );
}
