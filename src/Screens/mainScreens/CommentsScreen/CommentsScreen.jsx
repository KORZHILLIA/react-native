import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Comment from "./Comment";
import commentsData from "./commentsData";
import styles from "./CommentsScreenStyles";

const CommentsScreen = () => {
  const renderItem = ({ item, index }) => (
    <Comment item={item} idx={index + 1} />
  );
  const { OS } = Platform;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.upper}>
          <Image
            style={styles.arrow}
            source={require("../../../assets/icons/arrow-left.png")}
          />
          <Text style={styles.header}>Комментарии</Text>
        </View>
        <View style={styles.general}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../../../assets/sunset.jpg")}
            />
          </View>
          <FlatList
            data={commentsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.lower}>
          <TextInput
            multiline={true}
            placeholder="Комментировать..."
            style={styles.input}
          />
          <View style={styles.arrowUp}>
            <Image source={require("../../../assets/icons/arrow-up.png")} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
