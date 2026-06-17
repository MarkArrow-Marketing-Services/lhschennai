/* src/App.jsx */
import ScrollToTop from "./components/layout/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

export default function App() {
  return (
    <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Reset scroll on navigate */}
      <ScrollToTop />

      {/* Sticky Header */}
      <Header />

      {/* Main Pages Content */}
      <main style={{ flexGrow: 1 }}>
        <AppRoutes />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
