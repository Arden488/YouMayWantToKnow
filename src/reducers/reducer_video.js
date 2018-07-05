export default function(state = [], action) {
  switch(action.type) {
    case 'FETCH_YOUTUBE':
      console.log(action.payload.data.items);
      return action.payload.data.items;
  }

  return state;
}
