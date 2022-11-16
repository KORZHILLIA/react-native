import { View, Image, Text } from "react-native";
import styles from "../PostsScreenStyles";

const PostItem = ({ photo, title, location }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={photo} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.meta}>
        <View style={styles.comments}>
          <Image
            style={styles.commentIcon}
            source={require("../../../../assets/icons/comment.png")}
          />
          <Text style={styles.commentsText}>0</Text>
        </View>
        <View style={styles.location}>
          <Image style={styles.locationIcon} source={require("../../../../assets/icons/location.png")} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
