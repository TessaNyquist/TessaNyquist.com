//import logo from './logo.svg';
import AboutMe from "./Components/AboutMe";
import "./App.css";
import Skills from "./Components/Skills";
import Container from "react-bootstrap/esm/Container";
//import Projects from "./Pages/Projects"
import ContactMe from "./Components/ContactMe";
import NavBar from "./Components/NavBar";

const languages = ["C", "Java", "Python", "React", "HTML", "CSS", "JavaScript"];
const tech = ["Git", "Visual Studio"];
const concepts = ["Agile", "Web development", "Information Security"];

function App() {
  return (
    <Container fluid>
      <NavBar data-testid="navbar" /> {/* Add data-testid */}
      <AboutMe />
      <Skills title="Languages" arrButton={languages} />
      <Skills title="Tech" arrButton={tech} />
      <Skills title="Concepts" arrButton={concepts} />
      <ContactMe />
    </Container>
  );
}

export default App;
