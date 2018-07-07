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
        currentVideoId: action.payload.data.items[0].id.videoId,
        data: action.payload.data.items, 
        loading: false
      };
  }

  return state;
}
