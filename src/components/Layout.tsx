import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div style={styles.page}>
            <Navbar />
            <main style={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: { minHeight: "100vh", display: "flex", flexDirection: "column" },
    main: { flex: 1, maxWidth: 1100, width: "100%", margin: "0 auto", padding: "28px 18px" },
};
