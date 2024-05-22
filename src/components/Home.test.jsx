import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page correctly', () => {
  render(<Home />);
  const headingElement = screen.getByText(/Bienvenido a LUBREN/i);
  expect(headingElement).toBeInTheDocument();
});
