export default function(state = [], action) {
  switch (action.type) {
    case 'TRENDS_RECEIVED':
      return {
        ...state,
        data: action.payload,
      };
  }
  
  return [
    'SpaceX',
    'World Cup 2018',
    'Hawking',
    'Lionel Messi',
    'Donald Trump',
    'Christmas',
    'Yuri Gagarin',
    'IKEA',
    'Westworld',
    'Amazon Alexa',
    'Ethereum',
    'GDPR',
    'Bob Marley',
  ]
}