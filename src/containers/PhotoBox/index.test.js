import React from 'react';
import PhotoBox from './index';
import configureStore from 'redux-mock-store';

describe('<PhotoBox />', () => {
  let store;
  let component;

  beforeAll(() => {
    const mockStore = configureStore();
    store = mockStore({});
    component = shallow(<PhotoBox store={store} />);
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
