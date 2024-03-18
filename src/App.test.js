import React from 'react';
import { render, screen } from '@testing-library/react';
import Alerts from './components/Alerts';

test('renders alerts', () => {
  // Create mock data for the test
  const mockData = [
    { event: 'Extreme Weather', description: 'Heavy rain expected.' },
    { event: 'Flood Warning', description: 'Risk of flooding due to heavy rain.' },
  ];

  // Render the Alerts component with the mock data as a prop
  render(<Alerts data={mockData} />);

  // Check if the text from the first alert event is present in the document
  expect(screen.getByText(/Extreme Weather/i)).toBeInTheDocument();
  // Check if the text from the first alert description is present in the document
  expect(screen.getByText(/Heavy rain expected./i)).toBeInTheDocument();
  // Check if the text from the second alert event is present in the document
  expect(screen.getByText(/Flood Warning/i)).toBeInTheDocument();
  // Check if the text from the second alert description is present in the document
  expect(screen.getByText(/Risk of flooding due to heavy rain./i)).toBeInTheDocument();
});