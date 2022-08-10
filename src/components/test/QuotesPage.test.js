import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import QuotesPage from '../QuotesPage';

describe('Test the quote component', () => {
  test('renders maths quote', () => {
    render(<QuotesPage />);
    const quote = screen.getByText(/Without mathematics, there’s nothing you can do/i);
    expect(quote).toBeInTheDocument();
  });

  test('Quotes is rendered', () => {
    const quote = renderer
      .create(<QuotesPage />)
      .toJSON();
    expect(quote).toMatchSnapshot();
  });
});
