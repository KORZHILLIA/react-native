import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./ProfileScreenStyles";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImg}>
        <Image
          style={styles.img}
          source={require("../../../assets/profile-user.png")}
        />
        <TouchableOpacity style={styles.add}>
          <Image source={require("../../../assets/icons/union-gray.png")} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.logout}
        source={require("../../../assets/icons/log-out.png")}
      />
      <Text style={styles.header}>Natali Romanova</Text>
    </View>
  );
};

export default ProfileScreen;
