import { useDispatch } from "react-redux";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { logOut } from "../../../redux/auth/authOperations";
import styles from "./ProfileScreenStyles";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOut());
  };
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
      <View onPress={logOut}>
        <Image
          style={styles.logout}
          source={require("../../../assets/icons/log-out.png")}
        />
      </View>
      <Text style={styles.header}>Natali Romanova</Text>
    </View>
  );
};

export default ProfileScreen;
