import { Route, Routes } from "react-router-dom";
import InvalidScreen from "../screens/invalidScreen";
import HomeScreen from "../screens/postLoginScreens/homeScreen";

const PostLogin = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="*" Component={InvalidScreen} />
      </Routes>
    </>
  );
};
export default PostLogin;
