import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [ready, setReady] = useState(false);
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Roboto-Regular": require("./fonts/Roboto/Roboto-Regular.ttf"),
      });
    } catch {
      (error) => console.log(error.message);
    }
  };
  if (!ready) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setReady(true)} />
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("./assets/bg-main.jpg")}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
  },

  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
