import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/modulo-3-evaluacion-final-Roxana-Solano">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  </BrowserRouter>
);
