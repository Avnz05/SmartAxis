export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div style={styles.inner}>
                <p style={styles.text}>© {year} SmartAxis. All rights reserved.</p>
                <p style={styles.subtext}>Built for faster Sales Order creation 🚀</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "#ffffff",
        marginTop: 32,
    },
    inner: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
    },
    text: { margin: 0, fontSize: 13, color: "#333" },
    subtext: { margin: 0, fontSize: 12, color: "#666" },
};
