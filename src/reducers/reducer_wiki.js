export default function(state = {}, action) {
  switch(action.type) {
    case 'FETCH_WIKI':
      return action.payload
  }

  return state;
}