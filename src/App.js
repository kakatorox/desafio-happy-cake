import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar";

import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="desafio-happy-cake/" element={<Home />} />
          <Route path="desafio-happy-cake/home" element={<Home />} />
          <Route path="desafio-happy-cake/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
