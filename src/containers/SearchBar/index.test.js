import React from 'react';
import SearchBar from './index';
import { createShallow } from '@material-ui/core/test-utils';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('<SearchBar />', () => {
  let store;
  let component;

  beforeAll(() => {
    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);
    store = mockStore({});
    shallow = createShallow({ dive: true });
    component = shallow(<SearchBar store={store} />).dive();
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('changes state on value change', () => {
    const value = 'Test';

    component.find('TextField').simulate('change', {
      target: {
        value
      }
    });

    expect(component.state().value).toEqual(value);
  });

  it('submits form', () => {
    const value = 'Test';
    
    component.find('TextField').simulate('change', {
      target: {
        value
      }
    });

    component.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
  });
});