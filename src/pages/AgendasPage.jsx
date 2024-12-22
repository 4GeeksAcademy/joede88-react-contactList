import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import { getAgendas, postAgendas } from "../services/api";

export const Agendas = () => {
  const [agendas, setAgendas] = useState([]);
  const [isUserHovered, setIsUserHovered] = useState("");
  const [inputAgendaValue, setInputAgendaValue] = useState("");

  useEffect(() => {
    getAgendas(setAgendas)
  }, []);

  // función para crear nueva agenda
  const addAgenda = (e) => {
    if (e.key === "Enter" && inputAgendaValue.trim() !== "") {
      postAgendas(inputAgendaValue, agendas, setAgendas);
      setInputAgendaValue("");
    }
  }

  const deleteAgenda = (slug) => {
    fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
      method: "DELETE"
    }
    )
      .then(() => {
        getAgendas(setAgendas)
      })
  }

  return (
    <>
      <div className="input mb-1 text-center">
        <input className="border rounded input" value={inputAgendaValue} type="text" placeholder="Post new agenda" onKeyDown={(e) => addAgenda(e)}
          onChange={(e) => setInputAgendaValue(e.target.value)} />
      </div>
      <div className="cajaAgendas">
        {agendas.map((person) => {
          return (

            <div className="agendas m-1 border rounded fw-bold" key={person.slug} onMouseEnter={() => setIsUserHovered(person.slug)}
              onMouseLeave={() => setIsUserHovered("")}>
              <NavLink
                to={`/agendas/${person.slug}/contacts`} end>{person.slug}</NavLink>
              <div className="cajaCloseBtn">
                <span
                  className="closeBtn fw-bold"
                  role="button"
                  style={{
                    visibility: isUserHovered === person.slug ? "visible" : "hidden",
                  }}
                  onClick={() => deleteAgenda(person.slug)}
                >
                  X
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};
