import { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import PostItem from "./PostItem";
import styles from "./PostsScreenStyles";

const PostsScreen = ({ route }) => {
  const { params } = route;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (params) {
      setPosts((prevState) => [...prevState, params]);
    }
  }, [params]);
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.header}>Публикации</Text>
        <Image
          style={styles.logOut}
          source={require("../../../assets/icons/log-out.png")}
        />
      </View>
      <View style={styles.middle}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImg}
            source={require("../../../assets/user.png")}
          />
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <FlatList
          data={posts}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => {
            const { photo, title, location } = item;
            return <PostItem img={photo} title={title} location={location} />;
          }}
        />
      </View>
    </View>
  );
};

export default PostsScreen;
