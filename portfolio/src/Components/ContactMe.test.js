import { render, screen } from '@testing-library/react';
import ContactMe from './ContactMe';

test('renders learn react link', () => {
  render(<ContactMe />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    /*expect(screen.getByLabelText('Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Address 2')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    *///expect(screen.getByLabelText('Zip')).toBeInTheDocument();
    //expect(screen.getByLabelText('Check me out')).toBeInTheDocument();
});