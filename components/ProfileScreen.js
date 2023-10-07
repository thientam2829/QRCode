import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      friendsList: [],
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  saveProfile = () => {
    // Thực hiện lưu thông tin cá nhân sau khi chỉnh sửa ở đây
    // Ví dụ: Gửi thông tin cá nhân lên máy chủ

    // Sau khi lưu xong, chuyển về chế độ xem thông tin (không sửa)
    this.toggleEdit();
  };

  render() {
    const { isEditing, name, email, phone, friendsList } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        {isEditing ? (
          <View style={styles.editProfileContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => this.setState({ name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={(text) => this.setState({ phone: text })}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={this.saveProfile}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.viewProfileContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{email}</Text>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{phone}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={this.toggleEdit}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.qrCodeContainer}>
          <QRCode value={`${name}, ${email}, ${phone}`} size={200} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
  },
  profileHeader: {
    backgroundColor: "#1877f2",
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  editProfileContainer: {
    backgroundColor: "white",
    padding: 20,
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
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#1877f2",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  viewProfileContainer: {
    backgroundColor: "white",
    padding: 20,
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#1877f2",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  viewFriendsButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  viewFriendsButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  qrCodeContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default ProfileScreen;
