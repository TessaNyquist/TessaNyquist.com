//import logo from './logo.svg';
import AboutMe from "./Components/AboutMe"
import './App.css';
import Skills from "./Components/Skills"
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Container>
      <AboutMe/>
      <Skills/>
    </Container>
  );
}

export default App;
