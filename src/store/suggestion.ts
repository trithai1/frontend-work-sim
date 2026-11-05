import { create } from "zustand";
import type { Suggestion } from "../types/suggestion";


type SuggestionState = {
  id: number;
  suggestions: Suggestion[];
  addSuggestion: (productName: string, category: string, reason: string) => void;
  removeSuggestion: (id: number) => void;
};

export const useSuggestionStore = create<SuggestionState>()(set => ({
  id: 0,
  suggestions: [],
  
  addSuggestion: (productName, category, reason) => set(state => {
    const newSuggestion = {id: state.id, productName, category, reason};
    return {id: state.id + 1, suggestions: [...state.suggestions, newSuggestion]};
  }),

  removeSuggestion: (id) => set(state => {
    const newSuggestions = state.suggestions.filter(suggestion => suggestion.id !== id);
    return { suggestions: newSuggestions };
  }),
}));