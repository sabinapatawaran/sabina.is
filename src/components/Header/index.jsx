import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const { pathname } = useLocation();

    const headerStyles = pathname==="/" ? `${styles["welcome-header"]} ${styles["typed-fade-out"]}` : `${styles["other-header"]} ${styles["typed-fade-out"]}`

    return (
        <header>
            <h1 className={headerStyles}>sabina.is/
                {pathname === "/" && "a-gen-z-woman-of-colour-trying-to-do-the-write-thing"}
                {pathname === "/about" && "someone-you-should-know-about"}
                {pathname === "/projects" && "everything-everywhere-all-at-once"}
                {pathname === "/contact" && "keen-to-chat"}
                {pathname === "*" && "not-sure-how-you-got-here"}
            </h1>
        </header>
    )
}

export default Header;