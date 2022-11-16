import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "80%",
    paddingTop: 92,
    paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  profileImg: {
    position: "absolute",
    top: -60,
    left: 150,
  },
  img: {
    width: 120,
    height: 120,
  },
  add: {
    position: "absolute",
    bottom: 9,
    right: -12,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  logout: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  header: {
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
