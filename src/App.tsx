// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Suggestion } from "./pages/Suggestion";
import { AppLayout } from "./layouts/AppLayout";


function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/suggestion" element={<Suggestion />}/>
      </Route>
    </Routes>
  );
}

export default App;
