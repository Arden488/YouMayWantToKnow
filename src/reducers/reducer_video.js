export default function(state = [], action) {
  switch(action.type) {
    case 'FETCH_YOUTUBE':
      return action.payload.data.items;
  }

  return state;
}
