// NOT FOR SAM THIS IS JUST A TEST TO SEE IF REACT IS WORKING!!
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the toBeInTheDocument matcher
import Counter from './Counter';

test('renders the counter with the correct initial count', () => {
  render(<Counter />);
  const countLabel = screen.getByTestId('count-label');
  expect(countLabel).toHaveTextContent('You clicked 0 times');
});


test('increments the count when the button is clicked', () => {
  render(<Counter />);
  const button = screen.getByText(/click me/i);
  const countLabel = screen.getByTestId('count-label');

  // Simulate a user click event
  fireEvent.click(button);

  // Assert the count has been updated
  expect(countLabel).toHaveTextContent('You clicked 1 times');
});
