import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.inner}>
                <span style={styles.brand}>SmartAxis</span>

                <div style={styles.links}>
                    <NavLink to="/" style={styles.link}>
                        Home
                    </NavLink>
                    <NavLink to="/about" style={styles.link}>
                        About
                    </NavLink>
                    <NavLink to="/contact" style={styles.link}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

const styles: Record<string, React.CSSProperties> = {
    nav: {
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 10,
    },
    inner: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "14px 18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    brand: {
        fontWeight: 800,
        fontSize: 18,
        color: "#111",
    },
    links: {
        display: "flex",
        gap: 18,
    },
    link: {
        textDecoration: "none",
        color: "#333",
        fontWeight: 500,
    },
};
