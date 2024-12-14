import { Route, Routes } from "react-router";
import Bienvenidos from "../components/HomePage/Bienvenidos";
import WelcomeAlert from "../components/HomePage/WelcomeAlert";
import { routeConfig } from "../routing/routerConfig";
import Navbar from "../components/Navbar";

const HomePage = () => {

  return (
    <>
      <Bienvenidos />
      <WelcomeAlert />
      <Navbar />
      <Routes>
        {routeConfig.map((route) => {
          return (
            <Route path={route.path} element={route.page} />
          )
        })
        }
      </Routes>
    </>
  );
};

export default HomePage;
