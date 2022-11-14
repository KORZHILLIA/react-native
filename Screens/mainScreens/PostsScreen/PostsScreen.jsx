import { View, Text, Image } from "react-native";
import styles from "./PostsScreenStyles";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.header}>Публикации</Text>
        <Image
          style={styles.logOut}
          source={require("../../../assets/icons/log-out.png")}
        />
      </View>
      <View style={styles.middle}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImg}
            source={require("../../../assets/user.png")}
          />
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
