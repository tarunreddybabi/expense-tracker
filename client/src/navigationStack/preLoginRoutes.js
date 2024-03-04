import { Route, Routes } from "react-router-dom";
import LoginScreen from "../screens/preLoginScreens/login";
import InvalidScreen from "../screens/invalidScreen";
import RegisterScreen from "../screens/preLoginScreens/register";

const PreLogin = () => {
  return (
    <>
      <Routes>
        <Route path="/login" Component={LoginScreen} />
        <Route path="/register" Component={RegisterScreen} />
        <Route path="*" Component={InvalidScreen} />
      </Routes>
    </>
  );
};
export default PreLogin;
