import "./App.css";
// import BemEstar from './pages/BemEstar'
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BemEstar from "./pages/BemEstar";
import QualidadeDeVida from "./pages/QualidadeDeVida";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bemestar" element={<BemEstar />} />
        <Route path="/qualidadedevida" element={<QualidadeDeVida />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
