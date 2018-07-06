import React from 'react';
import WikiBox from './index';
import configureStore from 'redux-mock-store';

describe('<WikiBox />', () => {
  let store;
  let component;

  beforeAll(() => {
    const mockStore = configureStore();
    store = mockStore({});
    component = shallow(<WikiBox store={store} />);
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
