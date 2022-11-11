import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  leftTemplate: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  rightTemplate: {
    marginBottom: 24,
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  leftImg: {
    marginRight: 16,
  },
  rightImg: {
    marginLeft: 16,
    marginRight: 0,
  },
  leftComment: {
    flexGrow: 1,
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  rightComment: {
    flexGrow: 1,
    padding: 16,
    borderRadius: 6,
    borderTopRightRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  text: {
    maxWidth: 267,
    marginBottom: 8,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  leftTime: {
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    textAlign: "right",
  },
  rightTime: {
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    textAlign: "left",
  },
});

export default styles;
