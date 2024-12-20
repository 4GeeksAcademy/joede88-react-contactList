import { Route, Routes } from "react-router";
import { routeConfig } from "../routing/routerConfig";
import Bienvenidos from "../components/HomePage/Bienvenidos";
import WelcomeAlert from "../components/HomePage/WelcomeAlert";
import Navbar from "../components/HomePage/Navbar";
import { ContactsPage } from "./ContactsPage";

const HomePage = () => {
  
  return (
    <>
      <Bienvenidos />
      <WelcomeAlert />
      <Navbar />
      <Routes>
        {routeConfig.map((route) => {
          return <Route key={route.name} path={route.path} element={route.page} />;
        })}
        <Route path="agendas/:slug/contacts" element={<ContactsPage />} />;
      </Routes>
    </>
  );
};

export default HomePage;
