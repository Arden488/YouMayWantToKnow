import React from 'react';
import SearchBar from './index';

let component = null;

beforeEach(() => {
  component = shallow(<SearchBar />);
})

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});