import React from 'react';
import ArticlesBox from './index';
import configureStore from 'redux-mock-store';

describe('<ArticlesBox />', () => {
  let store;
  let component;

  beforeAll(() => {
    const mockStore = configureStore();
    store = mockStore({});
    component = shallow(<ArticlesBox store={store} />);
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
