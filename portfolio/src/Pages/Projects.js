import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Calc_Img from './Images/modified-calculator.png'

/**
 * This function creates a creates a Carosel for my Projects portion.
 * 
 * @returns returns a DropDown menu
 */
function Skills() {
    let summary ="Background: To prepare for my Asteroids spinoff project, I decided to enhance my knowledge of React through a smaller project with guided instructions. I followed a tutorial on building a calculator using React,  which allowed me to gain a deeper understanding of setting up a React application and leveraging its functionalities such as states and props.  I deviated from the tutorial and further customized the calculator's colors and incorporated additional features like square root and exponant function. In addition,  I intend to take the knowledge gained from the tutorial and apply it to my Asteroids spinoff. For reference, you can access the tutorial I followed at the following link: https://www.sitepoint.com/react-tutorial-build-calculator-app/";
  return (
  <Container>
    <Card className="bg-dark text-white"> 
        <Card.Header>About Me</Card.Header>
        <Card.Img variant="top" src={Calc_Img} />
        <Card.Body>
            <Card.Text>{summary}</Card.Text>
        </Card.Body>
        <Card.Header>PlaceHolder for Skills Portion</Card.Header>
        <Card.Header>PlaceHolder for Skills Portion</Card.Header>
    </Card> 
  </Container>
  );
}

export default Skills;