import React from 'react';
import renderer from 'react-test-renderer';
import snapshot from '../screens/snapshot';

test('Match snapshot', () => {
  const app = renderer.create(<login/>).toJSON();
  expect(app).toMatchSnapshot();
});