import React from 'react';
import VideoBox from './index';
import configureStore from 'redux-mock-store';
import { fetchYoutube } from '../../actions';
import reducerVideo from '../../reducers/reducer_video';
import thunk from 'redux-thunk';

describe('<VideoBox />', () => {
  let store;
  let component;
  let mockStore;

  beforeAll(() => {
    const middlewares = [ thunk ];
    mockStore = configureStore(middlewares);
    store = mockStore({});
    component = shallow(<VideoBox store={store} />);
  })

  it('renders correctly', () => {
    expect(component.dive()).toMatchSnapshot();
  });

  it('loads video', () => {
    store = mockStore({
      videos: [{ 'id': 'RS7IzU2VJIQ' }]
    });
    component = shallow(<VideoBox store={store} />);

    expect(component.dive()).toMatchSnapshot();
  });
});
