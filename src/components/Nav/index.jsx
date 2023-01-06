import { NavLink } from "react-router-dom";
import styles from "../Nav/Nav.module.css";

const Nav = () => {
    return(
        <ul className="ul">
            <NavLink to ="/">
                Home
            </NavLink>
            <NavLink to ="/about">
                About
            </NavLink>
            <NavLink to ="/projects">
                Projects
            </NavLink>
            <NavLink to ="/contact">
                Contact
            </NavLink>
        </ul>
    );
};

export default Nav;