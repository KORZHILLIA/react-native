import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import styles from "./loginScreenStyles.js";

const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const registerHandler = () => {
    const data = { email, password };
    console.log(data);
    setEmail("");
    setPassword("");
  };
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
              onChangeText={emailHandler}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              onChangeText={passwordHandler}
              value={password}
            />
          </View>
          <View style={styles.btnWrapper}>
            <Button
              color="#FF6C00"
              style={styles.btn}
              title="Войти"
              onPress={registerHandler}
            />
          </View>
          <Text style={styles.lowerText}>Нет аккаунта? Зарегистрироваться</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
