import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FriendListScreen = ({ route }) => {
  const { friendsList } = route.params;
  if (!friendsList) {
    return <Text>No friends available.</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách bạn bè:</Text>
      <FlatList
        data={friendsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.friendItem} key={item.email}>
            <Text style={styles.friendName}>Name: {item.name}</Text>
            <Text style={styles.friendInfo}>Email: {item.email}</Text>
            <Text style={styles.friendInfo}>Phone: {item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  friendItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  friendInfo: {
    fontSize: 14,
  },
});

export default FriendListScreen;
