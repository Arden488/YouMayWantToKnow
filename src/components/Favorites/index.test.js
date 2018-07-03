import React from 'react';
import Favorites from './index';

let component = null;

beforeEach(() => {
  component = shallow(<Favorites />);
})

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});