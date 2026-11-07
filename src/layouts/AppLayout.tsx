import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartPanel } from "../components/CartPanel";
import { useThemeStore } from "../store/theme";
import { Outlet } from "react-router";
import { PromoBanner } from "../components/PromoBanner";


export function AppLayout() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <CartPanel />
      <PromoBanner />
      <Navbar />
      <main className="min-h-screen bg-page-bg p-8">
        <Outlet />
      </main>
      < Footer />
    </div>
  );
}
