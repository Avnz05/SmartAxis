import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.inner}>
                <Link to="/" style={styles.brand}>
                    SmartAxis
                </Link>

                <nav style={styles.nav}>
                    <a href="#features" style={styles.link}>Features</a>
                    <a href="#about" style={styles.link}>About</a>
                    <a href="#contact" style={styles.link}>Contact</a>
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
    },
    inner: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
    },
    brand: {
        textDecoration: "none",
        color: "#111",
        fontWeight: 800,
        letterSpacing: 0.2,
        fontSize: 18,
    },
    nav: { display: "flex", gap: 14, alignItems: "center" },
    link: {
        color: "#333",
        textDecoration: "none",
        fontSize: 14,
        opacity: 0.9,
    },
};
