export default function(state = { loading: false }, action) {
  switch(action.type) {
    case 'WIKI_FETCHING':
      return {
        ...state,
        loading: true
      };
    case 'WIKI_RECEIVED':
      return {
        ...state,
        data: action.payload, 
        loading: false
      };
  }

  return state;
}
