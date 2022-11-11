import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";

const loadFonts = async () => {
  try {
    await Font.loadAsync({
      RReg: require("./fonts/Roboto/Roboto-Regular.ttf"),
    });
  } catch {
    (error) => console.log(error.message);
  }
};
export default function App() {
  const [ready, setReady] = useState(false);
  if (!ready) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("./assets/bg-main.jpg")}
      >
        <PostsScreen />
        {/* <CreatePostsScreen /> */}
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        {/* <CommentsScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
  },

  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
