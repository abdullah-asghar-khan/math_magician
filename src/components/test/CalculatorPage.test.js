import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../CalculatorPage';

test('test id Calculator page is rendered', () => {
  const CalcPage = renderer.create(<CalculatorPage />).toJSON();
  expect(CalcPage).toMatchSnapshot();
});
