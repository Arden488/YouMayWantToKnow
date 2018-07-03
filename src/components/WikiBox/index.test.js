import React from 'react';
import WikiBox from './index';

let component = null;

beforeEach(() => {
  component = shallow(<WikiBox />);
})

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});