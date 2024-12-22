export const getAgendas = (setAgendas) => {
  fetch(`https://playground.4geeks.com/contact/agendas`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      setAgendas(response.agendas);
    });
};

export const postAgendas = (inputAgendaValue, agendas, setAgendas) => {
  fetch(`https://playground.4geeks.com/contact/agendas/${inputAgendaValue}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then(() => {
      const updatedAgendas = [...agendas, { slug: inputAgendaValue }];
      setAgendas(updatedAgendas);
    });
};
