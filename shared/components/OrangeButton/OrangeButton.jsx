import { TouchableOpacity, Text } from "react-native";
import styles from "./orangeButtonStyles";

const OrangeButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OrangeButton;
