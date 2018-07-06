export default function(state = {}, action) {
  switch(action.type) {
    case 'FETCH_ARTICLES':
      return [ action.payload.data, ...state ];
  }

  return state;
}
