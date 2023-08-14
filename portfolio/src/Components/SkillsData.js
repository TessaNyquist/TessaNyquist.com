//import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
//import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';

/**
 * This function creates a creates a dropdown menu with a list of skills.
 * 
 * @arguments String Skill Type, Array of skills
 * @returns returns a DropDown menu
 */
function Skills({title, arrButton}) {
    return (
      <>
      <header className="p-2 ms-auto">{title}</header> 
      <ButtonGroup aria-label={title}>
        <Stack direction="horizontal" gap={4}>
          { arrButton.map((btn) => <Button variant="secondary">{btn}</Button> ) }
        </Stack>
      </ButtonGroup>
      </>
    );
  }
  
  export default Skills;