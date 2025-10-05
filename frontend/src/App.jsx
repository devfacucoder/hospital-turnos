import React from "react";

import { Route, Routes } from "react-router-dom";
import RequestTurno from "./pages/RequestTurno";
import Home from "./pages/Home";
import FormTurno from "./components/FormTurno";
import Header from "./components/Header";
import Join from "./pages/Join";
import Panel from "./pages/Panel";
function App() {
  return (
    <div className="bg-gray-300 min-h-screen w-screen ">
      <Header />
      <main className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingresar" element={<Join />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/pedirturno" element={<RequestTurno />}>
            <Route path="formulario" element={<FormTurno />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
