import { useEffect } from "react";
import { useState } from "react";
import { NavLink} from "react-router";


export const Agendas = () => {
  const [agendas, setAgendas] = useState([]);
  const [isUserHovered, setIsUserHovered] = useState("");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    fetchAgendas(setAgendas)
  }, []);

  //función para importar listado de agendas
  const fetchAgendas = () => {
    fetch(`https://playground.4geeks.com/contact/agendas`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setAgendas(response.agendas)
      });
  };

  // función para crear nueva agenda
  const postAgenda = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      return fetch(`https://playground.4geeks.com/contact/agendas/${inputValue}`, {
        method: "POST",
        headers: { "Content-type": "application/json" }
      })
        .then((res) => res.json())
        .then((data) => {
          setAgendas([...agendas, { slug: inputValue }]);
          setInputValue("");
        })
        .catch((err) => console.log(`error:`, err));

    }
  }

  const deleteAgenda = (slug) => {
    fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
      method: "DELETE"
    }
    )
      .then(() => {
        fetchAgendas(setAgendas)
      })
  }

  return (
    <>
      <div className="input mb-1 text-center">
        <input className="border rounded input" value={inputValue} type="text" placeholder="Post new agenda" onKeyDown={(e) => postAgenda(e)}
          onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div className="cajaAgendas">
        {agendas.map((person) => {
          return (
            <>
              <div className="agendas m-1 border rounded fw-bold" key={person.id} onMouseEnter={() => setIsUserHovered(person.slug)}
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

            </>
          );
        })}
      </div>

    </>
  );
};
