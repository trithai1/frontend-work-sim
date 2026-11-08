import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartPanel } from "../components/CartPanel";
import { useThemeStore } from "../store/theme";
import { Outlet } from "react-router";
import { PromoBanner } from "../components/PromoBanner";


export function AppLayout() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`${theme === "dark" ? "dark" : ""} flex flex-col min-h-screen`}>
      <CartPanel />
      <PromoBanner />
      <Navbar />
      <main className="bg-page-bg p-8 flex flex-col flex-1">
        <Outlet />
      </main>
      < Footer />
    </div>
  );
}
