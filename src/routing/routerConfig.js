import { Agendas } from "../components/HomePage/Agendas";
import { InputHome } from "../components/HomePage/InputHome";

export const routeConfig = [
  {
    name: "Root",
    path: "/",
    page: <InputHome />,
  },
  {
    name: "Agenda",
    path: "/agenda",
    page: <Agendas />,
  },
];
