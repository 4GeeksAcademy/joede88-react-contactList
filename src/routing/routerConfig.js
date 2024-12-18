import { Agendas } from "../pages/AgendasPage";
import { Landing } from "../pages/LandingPage";

export const routeConfig = [
  {
    name: "Home",
    path: "/",
    page: <Landing />,
  },
  {
    name: "Agendas",
    path: "/agendas",
    page: <Agendas />,
  },
];
