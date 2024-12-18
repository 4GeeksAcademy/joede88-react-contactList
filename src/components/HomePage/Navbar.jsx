import { routeConfig } from "../../routing/routerConfig";
import { NavLink } from "react-router";

import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <>
      <Nav className="mb-3" fill variant="tabs">
        <Nav.Item>
          {routeConfig.map((ruta) => {
            return (
              <NavLink key={ruta.path} className="mx-3" to={ruta.path} end>
                {ruta.name}
              </NavLink>
            );
          })}
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navbar;