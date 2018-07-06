import { combineReducers } from 'redux';

import VideoReducer from './reducer_video';
import WikiReducer from './reducer_wiki';
import FlickrReducer from './reducer_flickr';

const rootReducer = combineReducers({
  videos: VideoReducer,
  wikiData: WikiReducer,
  photos: FlickrReducer,
});

export default rootReducer;
