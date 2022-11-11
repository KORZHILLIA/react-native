import { StyleSheet } from "react-native";

const styles = {
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
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
  arrow: {
    position: "absolute",
    bottom: 10,
    left: 16,
  },
  general: {
    flexGrow: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imgContainer: {
    marginBottom: 32,
    borderRadius: 8,
    overflow: "hidden",
  },
  img: {
    width: "100%",
  },
  lower: {
    position: "relative",
  },
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#BDBDBD",
  },
  arrowUp: {
    position: "absolute",
    bottom: 8,
    right: 11,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
};

export default styles;
