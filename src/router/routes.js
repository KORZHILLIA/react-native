import { View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator: AuthNavigator, Screen: AuthScreen } = createStackNavigator();
const { Navigator: MainNavigator, Screen: MainScreen } =
  createBottomTabNavigator();

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

export default chooseNavigation;
