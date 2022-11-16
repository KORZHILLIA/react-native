import { TouchableOpacity, Image } from "react-native";
import styles from "./TrashButtonStyles";

const TrashButton = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={require("../../../assets/icons/trash.png")} />
    </TouchableOpacity>
  );
};

export default TrashButton;
