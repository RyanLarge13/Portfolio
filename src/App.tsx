import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Contact />} path="/contact"></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
