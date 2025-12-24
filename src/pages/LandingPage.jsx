import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div style={styles.page}>
            <Header />

            <main style={styles.main}>
                <section style={styles.hero}>
                    <h1 style={styles.h1}>Sales Orders, minus the chaos.</h1>
                    <p style={styles.p}>
                        SmartAxis helps your team convert Purchase Orders into internal Sales Orders fast,
                        consistently, and with fewer “who changed this?” moments.
                    </p>

                    <div style={styles.ctaRow}>
                        <button style={styles.primaryBtn} onClick={() => alert("Next: Login page 😉")}>
                            Get Started
                        </button>
                        <a href="#features" style={styles.secondaryLink}>See features</a>
                    </div>
                </section>

                <section id="features" style={styles.section}>
                    <h2 style={styles.h2}>What you’ll get</h2>
                    <div style={styles.grid}>
                        <Card title="Fast SO creation" desc="Turn PO details into your system format in minutes." />
                        <Card title="Fewer mistakes" desc="Reduce mismatch between SO, PO & packaging list." />
                        <Card title="Role-based access" desc="Admin/User roles for your internal team of 4." />
                    </div>
                </section>

                <section id="about" style={styles.section}>
                    <h2 style={styles.h2}>Why SmartAxis</h2>
                    <p style={styles.p2}>
                        Designed for real operations teams — simple UI, clear workflow, and the boring parts automated.
                    </p>
                </section>

                <section id="contact" style={styles.section}>
                    <h2 style={styles.h2}>Contact</h2>
                    <p style={styles.p2}>Want to tailor this for your process? Add your email/number here later.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function Card({ title, desc }) {
    return (
        <div style={styles.card}>
            <h3 style={styles.h3}>{title}</h3>
            <p style={styles.cardP}>{desc}</p>
        </div>
    );
}

const styles = {
    page: { minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fafafa" },
    main: { flex: 1, maxWidth: 1100, width: "100%", margin: "0 auto", padding: "28px 18px" },

    hero: {
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        padding: "34px 26px",
    },
    h1: { margin: 0, fontSize: 38, lineHeight: 1.1, letterSpacing: -0.4, color: "#111" },
    p: { marginTop: 14, marginBottom: 18, maxWidth: 700, color: "#333", fontSize: 16, lineHeight: 1.6 },

    ctaRow: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" },
    primaryBtn: {
        border: 0,
        background: "#111",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: 10,
        fontWeight: 700,
        cursor: "pointer",
    },
    secondaryLink: { color: "#111", textDecoration: "none", fontWeight: 600 },

    section: { marginTop: 26, padding: "6px 2px" },
    h2: { margin: "10px 0 12px", fontSize: 22, color: "#111" },
    p2: { margin: 0, color: "#333", fontSize: 15, lineHeight: 1.65, maxWidth: 800 },

    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 },
    card: {
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        padding: 16,
    },
    h3: { margin: 0, fontSize: 16, color: "#111" },
    cardP: { margin: "8px 0 0", color: "#444", fontSize: 14, lineHeight: 1.5 },
};
