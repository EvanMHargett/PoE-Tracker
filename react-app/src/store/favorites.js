const GET_ALL_FAVORITES = 'favorites/all'
const ADD_FAVORITE = 'favorites/add'

const fetchFavorites = (favorites) =>{
    return {
        type: GET_ALL_FAVORITES,
        payload: favorites,
    }
}

const addFavorite = (favorite) =>{
    return {
        type: ADD_FAVORITE,
        payload: favorite,
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

export const createFavorite = (flipId) => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const favorite = await fetch(`/api/favorites/${flipId}`)
  const json = await favorite.json()
  console.log(json)
  dispatch(addFavorite(json))
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
    case ADD_FAVORITE:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload
    default:
      return state;
  }
};

export default favoritesReducer;
