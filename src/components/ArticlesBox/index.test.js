import React from 'react';
import ArticlesBox from './index';

let component = null;

beforeEach(() => {
  component = shallow(<ArticlesBox />);
})

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});