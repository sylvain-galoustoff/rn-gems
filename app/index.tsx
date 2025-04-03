import { ActionSwipe, Modal } from "@/gems/src";
import { useState } from "react";
import { Alert, View, FlatList, Text } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    subtitle: "Subtitle text 1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    subtitle: "Subtitle text 2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    subtitle: "Subtitle text 3",
  },
];

export default function Index() {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleDelete = (id: string | number) => {
    setShowModalDelete(true);
  };
  const handleEdit = (id: string | number) => {
    Alert.alert(String("Edit this : " + id));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{
          flex: 1,
          width: "100%",
        }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ActionSwipe
            deleteAction={handleDelete}
            editAction={handleEdit}
            itemId={item.id}
          />
        )}
      />
      {showModalDelete && (
        <Modal
          handleClose={() => setShowModalDelete(false)}
          modalBox={<Text>MODAL</Text>}
        />
      )}
    </View>
  );
}
