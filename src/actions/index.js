import axios from 'axios';
import { YOUTUBE_API_KEY } from '../config/api';

export function fetchYoutube(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=id&q=${query}&type=video&key=${YOUTUBE_API_KEY}`;
  const request = axios.get(url);

  return (dispatch) => {
    request
      .then(response => {
        dispatch({
          type: 'FETCH_YOUTUBE',
          payload: response,
        });
      })
      .catch((err) => console.log('Error: ', err));
  };
}
