import { useState } from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Main from "./src/components/main";
import store from "./src/redux/store";

const [user, setUser] = useState(null);

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
    <Provider store={store}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={require("./assets/bg-main.jpg")}
        >
          <Main />
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </Provider>
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
