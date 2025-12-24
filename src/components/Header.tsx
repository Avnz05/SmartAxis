import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.brand}>
                    SmartAxis
                </NavLink>

                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
