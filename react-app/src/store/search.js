const GET_SEARCH = 'search/find'


const fillSearch = (search) =>{
    return {
        type: GET_SEARCH,
        payload: search,
    }
}

export const searchName = (name) => async (dispatch) => {
  const search = await fetch(`/api/search/${name}`)
  const json = await search.json()
  dispatch(fillSearch(json))
  return json
}

export const searchItemName = (name) => async (dispatch) => {
  const search = await fetch(`/api/search/items/${name}`)
  const json = await search.json()
  dispatch(fillSearch(json))
  return json
}


const initialState = {}

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SEARCH:
      newState = Object.assign({}, state);
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

export default searchReducer;