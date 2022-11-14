import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import AuthNavigation from "./navigation/authNavigation";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";
import LoginScreen from "./Screens/authScreens/LoginScreen";
import PostsScreen from "./Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreens/CreatePostsScreen";
import CommentsScreen from "./Screens/mainScreens/CommentsScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";

const { Navigator: AuthNavigator, Screen: AuthScreen } = createStackNavigator();
const { Navigator: MainNavigator, Screen: MainScreen } =
  createBottomTabNavigator();

const loadFonts = async () => {
  try {
    await Font.loadAsync({
      RReg: require("./fonts/Roboto/Roboto-Regular.ttf"),
    });
  } catch {
    (error) => console.log(error.message);
  }
};

const chooseNavigation = (isAuthorized) => {
  if (!isAuthorized) {
    return (
      <AuthNavigator initialRouteName="Register">
        <AuthScreen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthScreen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthNavigator>
    );
  } else {
    return (
      <MainNavigator
        initialRouteName="Posts"
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={{
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
          },
        }}
      >
        <MainScreen
          name="Posts"
          component={PostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Image source={require("./assets/icons/grid.png")} />
            ),
          }}
        />
        <MainScreen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <View
                style={{
                  width: 70,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "#FF6C00",
                }}
              >
                <Image source={require("./assets/icons/union.png")} />
              </View>
            ),
          }}
        />
        <MainScreen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <Image source={require("./assets/icons/user.png")} />
            ),
          }}
        />
      </MainNavigator>
    );
  }
};

const routes = chooseNavigation(true);
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
        <NavigationContainer>{routes}</NavigationContainer>
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
