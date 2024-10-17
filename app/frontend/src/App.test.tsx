import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders New Lead', () => {
  render(<App />);
  const linkElement = screen.getByText(/New Lead/i);
  expect(linkElement).toBeInTheDocument();
});
