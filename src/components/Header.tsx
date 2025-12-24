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

const styles: Record<string, React.CSSProperties> = {
    header: {
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
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
        textDecoration: "none",
        fontWeight: 800,
        fontSize: 18,
        color: "#111",
    },
    nav: { display: "flex", gap: 14 },
    link: { textDecoration: "none", color: "#333", fontSize: 14 },
};
