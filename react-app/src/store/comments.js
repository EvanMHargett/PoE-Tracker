const GET_ALL_COMMENTS = 'comments/all'

const fetchComments = (comments) =>{
    return {
        type: GET_ALL_COMMENTS,
        payload: comments,
    }
}


export const getAllComments = () => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const comments = await fetch('/api/comments/')
  const json = await comments.json()
  dispatch(fetchComments(json))
  return json
}

const initialState = {}

const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_COMMENTS:
      newState = Object.assign({}, state);
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
