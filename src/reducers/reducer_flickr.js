export default function(state = {}, action) {
  switch(action.type) {
    case 'FETCH_FLICKR':
      return [ action.payload, ...state ];
  }
  return state;
}