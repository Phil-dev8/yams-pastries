import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Game from "./pages/Game";
import NoFound from "./pages/NoFound";
// COMPONENTS
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Router>
  );
}

export default App;
