//import logo from './logo.svg';
import AboutMe from "./Components/AboutMe"
import './App.css';
import Skills from "./Components/Skills"
import Container from "react-bootstrap/esm/Container";
import Projects from "./Components/Projects"
import ContactMeForm from "./Components/ContactMe";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Container fluid >
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMeForm/>
    </Container>
  );
}

export default App;
