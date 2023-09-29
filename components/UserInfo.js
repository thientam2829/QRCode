import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const UserInfoScreen = ({ route, navigation }) => {
  const { name, email, phone } = route.params;
  const [friendsList, setFriendsList] = useState([]);

  const handleAddFriend = () => {
    // Xử lý khi nhấn nút "Kết Bạn"
    const newFriend = { name, email, phone };
    setFriendsList([...friendsList, newFriend]);
    navigation.navigate("FriendList", { friendsList });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Button title="Kết Bạn" onPress={handleAddFriend} />
    </View>
  );
};

export default UserInfoScreen;
