import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
