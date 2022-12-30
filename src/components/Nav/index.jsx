import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <ul>
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