import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects/"
            element={<Projects />}
            />
          <Route
            path="/register/*"
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
