import { combineReducers } from 'redux';

import VideoReducer from './reducer_video';
import WikiReducer from './reducer_wiki';
import FlickrReducer from './reducer_flickr';
import ArticlesReducer from './reducer_articles';
import QueryReducer from './reducer_query';

const rootReducer = combineReducers({
  videos: VideoReducer,
  wikiData: WikiReducer,
  photos: FlickrReducer,
  articles: ArticlesReducer,
  query: QueryReducer,
});

export default rootReducer;
