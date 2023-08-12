import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe', () => {
  test('renders bio text', () => {
    render(<AboutMe />);
    
    const bioText = "A native Northern Virginian, I completed my B.A. in political science and B.S. in computer science from James Madison University (JMU) in 2022, and received the NSA Information Systems Security Professionals Certification.  While attending JMU, I assisted fellow students navigate the university’s disciplinary process while I served on the executive board of Student  Defenders. Currently, I am serving as a legal assistant at an employment law firm in Washington, D.C., where I assist prospective clients in navigating the firm’s intake process, while leveraging my background in computer science to automate processes. I am passionate about serving back in the community I grew up in and is interested in pursuing opportunities in the tech industry in the Washington, D.C. metro.";
    
    // Check if bio text is present
    expect(screen.getByText(bioText)).toBeInTheDocument();
  });

  test('renders image', () => {
    render(<AboutMe />);
    
    // Check if image is present
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'Images/Tessa-Banner.png');
  });
  
  // You can add more tests to cover other aspects of the component
});
