const GET_ALL_FAVORITES = 'favorites/all'
const ADD_FAVORITE = 'favorites/add'
const DELETE_FAVORITE = 'favorites/delete'

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

const deleteFavorite = (flipId) =>{
    return {
        type: DELETE_FAVORITE,
        payload: favoriteId,
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

export const createFavorite = (flipId) => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const favorite = await fetch(`/api/favorites/${flipId}`, {
      method: "POST"
  })
  const json = await favorite.json()
  console.log(json)
  dispatch(addFavorite(json))
  return json
}

export const removeFavorite = (flipId) => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  await fetch(`/api/favorites/${flipId}/delete`, {
      method: "POST"
  })
  dispatch(deleteFavorite(flipId))
  return "Deleted"
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
      return newState
    case DELETE_FAVORITE:
        newState = Object.assign({}, state);
        delete newstate[action.payload]
        return newState
    default:
      return state;
  }
};

export default favoritesReducer;
