export default function(state = '', action) {
  switch(action.type) {
    case 'SET_QUERY':
      return action.payload;
  }

  return state;
}
