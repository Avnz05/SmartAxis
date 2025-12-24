
export default function LandingPage() {
    return (
        <>


            <main style={styles.main}>
                <h1>Sales Orders, minus the chaos.</h1>
                <p>
                    Convert Purchase Orders into internal Sales Orders quickly,
                    cleanly, and without Excel-induced trauma.
                </p>

                <button
                    style={styles.button}
                    onClick={() => alert("Next up: Login page 😉")}
                >
                    Get Started
                </button>
            </main>


        </>
    );
}

const styles: Record<string, React.CSSProperties> = {
    main: {
        maxWidth: 900,
        margin: "0 auto",
        padding: "40px 20px",
    },
    button: {
        marginTop: 20,
        padding: "10px 16px",
        borderRadius: 10,
        border: "none",
        background: "#111",
        color: "#fff",
        cursor: "pointer",
    },
};
