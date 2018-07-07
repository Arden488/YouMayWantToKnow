export default function(state = { loading: false }, action) {
  switch(action.type) {
    case 'FLICKR_FETCHING':
      return {
        ...state,
        loading: true
      };
    case 'FLICKR_RECEIVED':
      return {
        ...state,
        data: action.payload, 
        loading: false
      };
  }

  return state;
}
