import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const navbarElement = screen.getByTestId('NavBar'); // Use the appropriate data-testid
  expect(navbarElement).toBeInTheDocument();
   //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
