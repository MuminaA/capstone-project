import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './pages/Bookingpage/Bookingpage';
import { renderHook } from '@testing-library/react-hooks';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

jest.mock('./util/fakeAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
}));

test('initializeTimes returns available booking times', () => {
  // it('should return initial array of times', () => {
  const { result } = renderHook(() => initializeTimes());

  expect(result.current).toEqual(['17:00', '18:00', '19:00']);
});
