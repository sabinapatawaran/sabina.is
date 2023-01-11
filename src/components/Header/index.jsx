import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Typed from 'react-typed';

// Option: put typewriter component, put in the strings. And THEN apply the header styling to the whole header tag WRAPPING our typewriter.
// Add use effect wherein clicking another link triggers a "delete" scroll effect.

const Header = () => {
    const { pathname } = useLocation();

    // const headerStyles = pathname==="/" ? `${styles["welcome-header"]} ${styles["typed-fade-out"]}` : `${styles["other-header"]} ${styles["typed-fade-out"]}`

    return (
        <header>
            <h1>
                sabina.is/
                <Typed
                    strings={[`trying-to-do-the-write-thing`]}
                    typeSpeed={20}
                    backSpeed={20} />
            </h1>
            {/* <h1 className={headerStyles}>sabina.is/
                {pathname === "/" && "a-gen-z-woman-of-colour-trying-to-do-the-write-thing"}
                {pathname === "/about" && "someone-you-should-know-about"}
                {pathname === "/projects" && "everything-everywhere-all-at-once"}
                {pathname === "/contact" && "keen-to-chat"}
                {pathname === "*" && "not-sure-how-you-got-here"}
            </h1> */}
        </header>
    )
}

export default Header;

// string interpolation -> colour the 'write'