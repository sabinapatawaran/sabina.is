import { useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <header>
            <h1>sabina.is/{pathname === "/" ? "working" : "not working"}</h1>
        </header>
    )
}

export default Header;