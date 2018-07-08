import axios from 'axios';
import { YOUTUBE_API_KEY, FLICKR_API_KEY, NEWS_API_KEY } from '../config/api';

export function fetchTrends() {
  const request = axios.get('http://hawttrends.appspot.com/api/terms/');
  
  return (dispatch) => {
    dispatch({
      type: `TRENDS_FETCHING`,
    });

    request
      .then(response => {
        console.log(response);
        dispatch({
          type: `TRENDS_RECEIVED`,
          payload: response,
        });
      })
      .catch((err) => console.log('Error: ', err));
  };
}

export function fetchData(query) {
  return (dispatch) => {
    Promise.all([
      dispatch(fetchEach('ARTICLES', `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${NEWS_API_KEY}`)),
      dispatch(fetchEach('FLICKR', `https://api.flickr.com/services/rest/?api_key=${FLICKR_API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=9&page=1&text=${query}`)),
      dispatch(fetchEach('YOUTUBE', `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${query}&type=video&key=${YOUTUBE_API_KEY}`)),
      dispatch(fetchEach('WIKI', `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages|extracts&pithumbsize=300&format=json&origin=*&exintro=&exsentences=5&titles=${query}&redirects`)),
    ]).then(() => {
      dispatch({
        type: 'SET_QUERY',
        payload: query,
      });
    });
  }
}

export function fetchEach(name, url) {
  const request = axios.get(url);

  return (dispatch) => {
    dispatch({
      type: `${name}_FETCHING`,
    });

    request
      .then(response => {
        dispatch({
          type: `${name}_RECEIVED`,
          payload: response,
        });
      })
      .catch((err) => console.log('Error: ', err));
  };
}
