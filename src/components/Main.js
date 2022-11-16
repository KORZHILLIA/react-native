import { useEffect } from "react";
import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { NavigationContainer } from "@react-navigation/native";
import { authStateChange } from "../redux/auth/authOperations";
import chooseNavigation from "../router/routes";

const Main = () => {
  const dispatch = useDispatch();
  const { stateChange } = useSelector((state) => state.auth);
  const routes = chooseNavigation(stateChange);
  useEffect(() => {
    dispatch(authStateChange());
  });
  return <NavigationContainer>{routes}</NavigationContainer>;
};

export default Main;
