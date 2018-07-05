import { combineReducers } from 'redux';

import VideoReducer from './reducer_video';

const rootReducer = combineReducers({
  videos: VideoReducer,
});

export default rootReducer;
