//import logo from './logo.svg';
import AboutMe from "./Components/AboutMe"
import './App.css';
import Skills from "./Components/Skills"
import Container from "react-bootstrap/esm/Container";
//import Projects from "./Pages/Projects"
import ContactMeForm from "./Components/ContactMe";
import NavBar from "./Components/NavBar";


const languages = ["C", "Java", "Python", "React", "HTML", "CSS", "JavaScript"];
//const languages = [name = "C", image = "link to image"}

const tech = ["Git", "Visual Studio"];

const concepts = ["Agile", "Web development", "Information Security"]

function App() {
  return (
    <Container fluid >
      <NavBar/>
      <AboutMe/>
      <Skills title="Languages" arrButton={languages}/>
      <Skills title="Tech" arrButton={tech}/>
      <Skills title="Concepts" arrButton={concepts}/>
      <ContactMeForm/>
    </Container>
  );
}

export default App;
