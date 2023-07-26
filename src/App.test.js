import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Bookingform from './components/Booking/Bookingform/Bookingform';

test('renders data label', () => {
  render(<Bookingform />);
  const nameInput = getByLabelText("Date:");
  expect(nameInput).toHaveAttribute("required");
});
