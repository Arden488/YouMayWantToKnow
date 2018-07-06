import axios from 'axios';
import { YOUTUBE_API_KEY, FLICKR_API_KEY } from '../config/api';

export function fetchData(query) {
  return (dispatch) => {
    Promise.all([
      dispatch(fetchYoutube(query)),
      dispatch(fetchWiki(query)),
      dispatch(fetchFlickr(query)),
    ]).then(() => {
      // ...
    });
  }
}

export function fetchFlickr(query) {
  const url = `https://api.flickr.com/services/rest/?api_key=${FLICKR_API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=9&page=1&text=${query}`;
  const request = axios
    .get(url);

  return (dispatch) => {
    request
      .then(response => {
        dispatch({
          type: 'FETCH_FLICKR',
          payload: response,
        });
      })
      .catch((err) => console.log('Error: ', err));
  };
}

export function fetchYoutube(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${query}&type=video&key=${YOUTUBE_API_KEY}`;
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

export function fetchWiki(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages|extracts&pithumbsize=300&format=json&origin=*&exintro=&exsentences=5&titles=${query}&redirects`;
  const request = axios.get(url);

  return (dispatch) => {
    request
      .then(response => {
        dispatch({
          type: 'FETCH_WIKI',
          payload: response,
        });
      })
      .catch((err) => console.log('Error: ', err));
  };
}
