import React from 'react';
import TwitterBox from './index';

let component = null;

beforeEach(() => {
  component = shallow(<TwitterBox />);
})

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});