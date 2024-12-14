import { routeConfig } from "../routing/routerConfig";
import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <>
            {routeConfig.map((ruta) => {
                return (
                    <NavLink to={ruta.path} end>
                        {ruta.name}
                    </NavLink>
                )
            })}
        </>
    )
}

export default Navbar;