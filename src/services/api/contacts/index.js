import { genericFetch } from "../api";

const contactsUrl = `contacts`;

export const getContactos = (nombre, setContactos) => {
  genericFetch(`agendas/${nombre}/${contactsUrl}`).then((response) => {
    setContactos(response.contacts);
  });
};
