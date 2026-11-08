import { create } from "zustand";
import { persist } from "zustand/middleware";


type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(persist(
  (set) => ({
    theme: "light",
    toggleTheme: () => set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      return { theme: newTheme };
    }),
  }), { name: "summitgear-theme" })
);
