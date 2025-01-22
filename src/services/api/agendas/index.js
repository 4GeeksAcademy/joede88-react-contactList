import { genericFetch } from "../api";

export const getAgendas = () => {
  return genericFetch(`agendas`).then((response) => response.agendas);
};

export const postAgendas = (inputAgendaValue, agendas, setAgendas) => {
  genericFetch(`${inputAgendaValue}`, {
    method: "POST",
  }).then(() => {
    const updatedAgendas = [...agendas, { slug: inputAgendaValue }];
    setAgendas(updatedAgendas);
  });
};

export const deleteAgenda = (slug) => {
  return genericFetch(`${slug}`, {
    method: "DELETE",
  });
};
