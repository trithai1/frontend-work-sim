import { create } from "zustand";


type ThemeState = {
  theme: string;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: "light",
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    return { theme: newTheme };
  }),
}));
