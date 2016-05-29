const initialState = {
  items : {

  }
}

export function votes(state = initialState, action) {
  switch (action.type) {

  case 'REPLACE_VOTE_ITEMS': 
    return {
      items : {
        ...action.votes
      }
    }
  case 'KEEP_VOTE_ITEMS': {
    return {
      items: {
        ...state.items
      }
    }
  }

  default:
    return state;
  }
}
