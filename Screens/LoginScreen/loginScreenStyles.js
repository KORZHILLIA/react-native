import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  form: {
    marginBottom: 43,
  },

  header: {
    fontSize: 30,
    lineHeight: 1.17,
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

  btnWrapper: {
    marginTop: 27,
    marginBottom: 16,
  },

  btn: {
    paddingBottom: 16,
  },

  lowerText: {
    textAlign: "center",
  },
});

export default styles;
