export default function(state = { loading: false }, action) {
  switch(action.type) {
    case 'YOUTUBE_FETCHING':
      return {
        ...state,
        loading: true
      };
    case 'YOUTUBE_RECEIVED':
      return {
        ...state,
        data: action.payload.data.items, 
        loading: false
      };
  }

  return state;
}
