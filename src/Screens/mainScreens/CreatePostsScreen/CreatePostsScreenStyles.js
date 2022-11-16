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
  arrow: {
    position: "absolute",
    bottom: 10,
    left: 16,
  },
  middle: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  touchable: {
    marginBottom: 32,
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  cameraBgInactive: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  cameraBgActive: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "FFFFFF",
  },
  photo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "10%",
    height: 240,
  },
  downloadText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  form: {
    marginBottom: 32,
    fontSize: 16,
    lineHeight: 1.19,
    color: "#BDBDBD",
  },
  name: {
    height: 50,
    outline: "none",
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 15,
    border: "none",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  location: {
    position: "relative",
    height: 50,
  },
  locationInput: {
    outline: "none",
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 28,
    border: "none",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationIcon: {
    position: "absolute",
    top: 13,
    left: 0,
  },
  share: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  shareText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  lower: {
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,
  },
});

export default styles;
