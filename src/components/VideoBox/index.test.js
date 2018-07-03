import React from 'react';
import VideoBox from './index';

let component = null;

beforeEach(() => {
  component = shallow(<VideoBox />);
})

it('renders correctly', () => {
  expect(component).toMatchSnapshot();
});