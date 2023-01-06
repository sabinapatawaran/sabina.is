import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    console.log(location);

    return (
        <header>
            <h1>sabina.is/</h1>
        </header>
    )
}

export default Header;