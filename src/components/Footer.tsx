export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© {new Date().getFullYear()} SmartAxis</p>
            <p style={styles.sub}>Built for sane Sales Orders 🚀</p>
        </footer>
    );
}

const styles: Record<string, React.CSSProperties> = {
    footer: {
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: 18,
        textAlign: "center",
        background: "#fff",
        marginTop: 32,
    },
    sub: { fontSize: 12, color: "#666" },
};
