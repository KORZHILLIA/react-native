import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  upper: {
    position: "relative",
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
  },
  header: {
    fontSize: 17,
    color: "#212121",
  },
  logOut: {
    position: "absolute",
    bottom: 10,
    right: 16,
  },
  middle: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImg: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: "700",
  },
  email: {
    fontSize: 11,
  },
  lower: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 9,
    paddingBottom: 34,
  },
  add: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});

export default styles;
