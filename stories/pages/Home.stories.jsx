import Home from "../../pages/index";
import "../../styles/globals.css";
import "../../styles/Home.module.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => <Home />;
