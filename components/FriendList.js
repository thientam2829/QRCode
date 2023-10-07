/*import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FriendListScreen = ({ route }) => {
  const { friendsList } = route.params;
  if (!friendsList || friendsList.length === 0) {
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

export default FriendListScreen;*/
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
  // container: {
  //   flex: 1,
  //   padding: 20,
  // },
  // header: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginBottom: 10,
  // },
  // friendItem: {
  //   marginBottom: 10,
  //   padding: 10,
  //   backgroundColor: "#f0f0f0",
  //   borderRadius: 5,
  // },
  // friendName: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // friendInfo: {
  //   fontSize: 14,
  // },
  friendItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white", // Màu nền trắng giống Facebook
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Màu chữ đậm giống Facebook
  },
  friendInfo: {
    fontSize: 14,
    color: "#777", // Màu chữ xám giống Facebook
  },
});

export default FriendListScreen;
