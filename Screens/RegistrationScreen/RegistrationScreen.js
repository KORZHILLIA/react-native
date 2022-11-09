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
import styles from "./registrationScreenStyles.js";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const registerHandler = () => {
    const data = { name, email, password };
    console.log(data);
    setName("");
    setEmail("");
    setPassword("");
  };
  const { OS } = Platform;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behaviour={OS === "ios" ? "padding" : "height"}>
          <Text style={styles.header}>Регистрация</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              onChangeText={nameHandler}
              value={name}
            />
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
              title="Зарегистрироваться"
              onPress={registerHandler}
            />
          </View>
          <Text style={styles.lowerText}>Уже есть аккаунт? Войти</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
