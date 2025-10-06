import { render, screen } from '@testing-library/react';
import App from './App';
import { jsx } from 'react/jsx-runtime';
import { FaHandHoldingHeart } from 'react-icons/fa';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});