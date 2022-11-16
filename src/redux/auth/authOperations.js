import db from "../../firebase/config";
import authSlice from "./authSlice";

const signUp =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);
      const user = await db.auth().currentUser;
      await user.updateProfile({
        displayName: name,
      });
      const { uid, displayName } = await db.auth().currentUser;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          userName: displayName,
        })
      );
    } catch {
      (error) => console.log(error.message);
    }
  };

const signIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
    } catch {
      (error) => console.log(error.message);
    }
  };

const logOut = () => async (dispatch, getState) => {
  await db.auth().signOut();
  dispatch(authSlice.actions.authLogOut());
};

const authStateChange = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChange((user) => {
    if (user) {
      const updateUserProfile = {
        userName: user.displayName,
        userId: user.uid,
      };
      dispatch(authSlice.actions.updateUserProfile(updateUserProfile));
      dispatch(authSlice.actions.authStateChange(true));
    }
  });
};

export { signIn, signUp, logOut, authStateChange };
