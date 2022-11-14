import { useState, useEffect } from "react";
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
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import TrashButton from "../../../shared/components/TrashButton";
import styles from "./CreatePostsScreenStyles";

const CreatePostsScreen = ({ navigation }) => {
  const [isImgVisible, setIsImgVisible] = useState(true);
  const [permission, setPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const { navigate } = navigation;
  const { OS } = Platform;
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    await MediaLibrary.createAssetAsync(uri);
    setPhoto(uri);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.upper}>
          <Image
            style={styles.arrow}
            source={require("../../../assets/icons/arrow-left.png")}
          />
          <Text style={styles.header}>Создать публикацию</Text>
        </View>
        <View style={styles.middle}>
          {isImgVisible && (
            <View>
              {permission ? (
                photo ? (
                  <Image style={styles.photo} source={{ uri: photo }} />
                ) : (
                  <Camera style={styles.camera} ref={(ref) => setCamera(ref)}>
                    <TouchableOpacity
                      onPress={takePhoto}
                      style={
                        photo ? styles.cameraBgActive : styles.cameraBgInactive
                      }
                    >
                      <Image
                        source={require("../../../assets/icons/camera-gray.png")}
                      />
                    </TouchableOpacity>
                  </Camera>
                )
              ) : (
                <Text>No access to camera</Text>
              )}
              <Text onPress={() => setPhoto("")} style={styles.downloadText}>
                {photo ? "Редактировать фото" : "Загрузите фото"}
              </Text>
            </View>
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
                  source={require("../../../assets/icons/location.png")}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigate("Posts", { photo })}
              style={styles.share}
            >
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
