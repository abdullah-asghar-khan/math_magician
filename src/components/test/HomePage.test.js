import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../HomePage';

test('Test if homepage is renderred', () => {
  const homepage = renderer.create(<HomePage />).toJSON();
  expect(homepage).toMatchSnapshot();
});
