import { View, Text, Image } from "react-native";
import styles from "./CommentStyles";

const Comment = ({ item, idx }) => {
  const { owner, text, time } = item;
  const isOdd = Boolean(idx % 2);
  return (
    <View style={isOdd ? styles.leftTemplate : styles.rightTemplate}>
      <Image
        style={isOdd ? styles.leftImg : styles.rightImg}
        source={require(`../../../assets/commentsAvatar/user2.png`)}
      />
      <View style={isOdd ? styles.leftComment : styles.rightComment}>
        <Text style={styles.text}>{text}</Text>
        <Text style={isOdd ? styles.leftTime : styles.rightTime}>{time}</Text>
      </View>
    </View>
  );
};

export default Comment;
