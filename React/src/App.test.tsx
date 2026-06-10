import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders both custom sorting solutions', () => {
  render(<App />);
  const firstSolutionHeader = screen.getByText(/The use of calculateGroupValue and groupCellTemplate/i);
  const secondSolutionHeader = screen.getByText(/The use of a calculated hidden column and Summary/i);
  expect(firstSolutionHeader).toBeInTheDocument();
  expect(secondSolutionHeader).toBeInTheDocument();
});
