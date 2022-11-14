import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import OrangeButton from "../../../shared/components/OrangeButton";
import styles from "./loginScreenStyles.js";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isSecure, setIsSecure] = useState(true);
  const { navigate } = navigation;
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const registerHandler = () => {
    const data = { email, password };
    console.log(data);
    if (email && password) {
      navigate("Posts");
      setEmail("");
      setPassword("");
      return;
    } else {
      return;
    }
  };
  const toggleSecure = () => setIsSecure((prevstate) => !prevstate);
  const { OS } = Platform;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behaviour={OS === "ios" ? "padding" : "height"}>
          <Text style={styles.header}>Войти</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsVisible(false)}
              onBlur={() => setIsVisible(true)}
              onChangeText={emailHandler}
              value={email}
            />
            <View style={styles.passWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                onFocus={() => setIsVisible(false)}
                onBlur={() => setIsVisible(true)}
                onChangeText={passwordHandler}
                value={password}
                secureTextEntry={isSecure}
              />
              <Text onPress={toggleSecure} style={styles.show}>
                Показать
              </Text>
            </View>
          </View>
          {isVisible && (
            <View>
              <OrangeButton text="Войти" onPress={registerHandler} />
              <Text style={styles.lowerText}>
                Нет аккаунта?
                <Text onPress={() => navigate("Register")}>
                  {" "}
                  Зарегистрироваться
                </Text>
              </Text>
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
