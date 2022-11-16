import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  form: {
    marginBottom: 16,
  },

  header: {
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },

  input: {
    width: "100%",
    marginBottom: 16,
    padding: 16,
    paddingBottom: 15,
    outline: "none",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  passWrapper: {
    position: "relative",
  },

  show: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  lowerText: {
    paddingBottom: 78,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});

export default styles;
