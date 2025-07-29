import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.jsx";
import CharacterDetail from "./components/CharacterDetail.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/proyecto-final-modulo3-react">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  </BrowserRouter>
);
