export default function(state = { loading: false }, action) {
  switch(action.type) {
    case 'ARTICLES_FETCHING':
      return {
        ...state,
        loading: true
      };
    case 'ARTICLES_RECEIVED':
      return {
        ...state,
        data: action.payload.data, 
        loading: false
      };
  }

  return state;
}
