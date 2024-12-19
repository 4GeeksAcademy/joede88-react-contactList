import { routeConfig } from "../../routing/routerConfig";
import { NavLink } from "react-router";


const Navbar = () => {
  return (
    <>
      <div className="cajaAgendaBtn mb-3">
        {routeConfig.map((ruta) => {
          return (
              <NavLink key={ruta.path}  to={ruta.path} end>
                <button className="agendaBtn rounded">
                {ruta.name}
                </button>
              </NavLink>
            
          );
        })}
      </div>
    </>
  );
};

export default Navbar;