import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../../Screens/authScreens/RegistrationScreen";
import LoginScreen from "../../Screens/authScreens/LoginScreen";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigation = () => {
  <Navigator initialRouteName="Register">
    <Screen name="Register" component={RegistrationScreen} />
    <Screen name="Login" component={LoginScreen} />
  </Navigator>;
};

export default AuthNavigation;
