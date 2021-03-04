const GET_ALL_FAVORITES = 'favorites/all'

const fetchFavorites = (favorites) =>{
    return {
        type: GET_ALL_FAVORITES,
        payload: favorites,
    }
}

export const getAllFavorites = () => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const favorites = await fetch('/api/favorites/')
  const json = await favorites.json()
  console.log(json)
  dispatch(fetchFavorites(json))
  return json
}

const initialState = {}

const favoritesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_FAVORITES:
      newState = Object.assign({}, state);
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
