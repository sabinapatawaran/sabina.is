import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Typed from 'react-typed';

// Option: put typewriter component, put in the strings. And THEN apply the header styling to the whole header tag WRAPPING our typewriter.
// Add use effect wherein clicking another link triggers a "delete" scroll effect.

const Header = () => {
    const { pathname } = useLocation();
    // let history = useHistory();

    const headerStyles = pathname==="/" ? `${styles["welcome-header"]}` : ``

    return (
        <header>
            <h1 className={headerStyles}>
                sabina.is/
                {pathname === "/" && <Typed
                    strings={[`trying-to-do-the-write-thing`]}
                    typeSpeed={20}
                    backSpeed={20} />}
                {pathname === "/about" && <Typed
                    strings={[`someone-you-should-know-about`]}
                    typeSpeed={20}
                    backSpeed={20} />}
                {pathname === "/projects" && <Typed
                    strings={[`a-jack-of-all-trades-mastering-some`]}
                    typeSpeed={20}
                    backSpeed={20} />}
                {pathname === "/contact" && <Typed
                    strings={[`keen-to-chat`]}
                    typeSpeed={20}
                    backSpeed={20} />}
                {pathname !== "/" && pathname !== "/about" && pathname !== "/projects" && pathname !== "/contact" && <Typed
                    strings={[`not-sure-how-you-got-here`]}
                    typeSpeed={50}
                    backSpeed={50} />}
            </h1>
        </header>
    )
}

export default Header;

// string interpolation -> colour the 'write'
// finalise 404. when 404 page is activated --> trigger a state, changes header?