import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import TrashButton from "../../shared/components/TrashButton";
import styles from "./CreatePostsScreenStyles";

const CreatePostsScreen = () => {
  const [isImgVisible, setIsImgVisible] = useState(true);
  const { OS } = Platform;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.upper}>
          <Image
            style={styles.arrow}
            source={require("../../assets/icons/arrow-left.png")}
          />
          <Text style={styles.header}>Создать публикацию</Text>
        </View>
        <View style={styles.middle}>
          {isImgVisible && (
            <TouchableWithoutFeedback style={styles.touchable}>
              <View>
                <View style={styles.download}>
                  <View style={styles.cameraBgInactive}>
                    <Image
                      source={require("../../assets/icons/camera-gray.png")}
                    />
                  </View>
                </View>
                <Text style={styles.downloadText}>Загрузите фото</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          <KeyboardAvoidingView behaviour={OS === "ios" ? "padding" : "height"}>
            <View style={styles.form}>
              <TextInput
                style={styles.name}
                placeholder="Название..."
                onFocus={() => setIsImgVisible(false)}
                onBlur={() => setIsImgVisible(true)}
              />
              <View style={styles.location}>
                <TextInput
                  style={styles.locationInput}
                  placeholder="Местность..."
                  onFocus={() => setIsImgVisible(false)}
                  onBlur={() => setIsImgVisible(true)}
                />
                <Image
                  style={styles.locationIcon}
                  source={require("../../assets/icons/location.png")}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.share}>
              <Text style={styles.shareText}>Опубликовать</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.lower}>
          <TrashButton />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
