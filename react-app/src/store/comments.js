const GET_ALL_COMMENTS = 'comments/all'
const SUBMIT_COMMENT = 'comments/submit'


const fetchComments = (comments) =>{
    return {
        type: GET_ALL_COMMENTS,
        payload: comments,
    }
}

const submitComment = (comment) =>{
    return {
        type: SUBMIT_COMMENT,
        payload: comment,
    }
}


export const getAllComments = () => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const comments = await fetch('/api/comments/')
  const json = await comments.json()
  dispatch(fetchComments(json))
  return json
}

export const postComment = (flipId, content) => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const comment = await fetch(`/api/comments/${flipId}/new/`, {
      method: "POST",
      body: content,
  })
  const json = await comment.json()

  console.log(comment, json)
  dispatch(submitComment(json))
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
