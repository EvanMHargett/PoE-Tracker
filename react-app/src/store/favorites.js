const GET_ALL_FAVORITES = 'favorites/all'
const ADD_FAVORITE = 'favorites/add'
const DELETE_FAVORITE = 'favorites/delete'
const RESET = 'favorites/reset'

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
        payload: flipId,
    }
}

const resetFavorite = () =>{
    return {
        type: RESET,
    }
}

export const getAllFavorites = () => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const favorites = await fetch('/api/favorites/')
  const json = await favorites.json()
  dispatch(fetchFavorites(json))
  return json
}

export const createFavorite = (flipId) => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const favorite = await fetch(`/api/favorites/${flipId}/`, {
      method: "POST"
  })
  const json = await favorite.json()
  dispatch(addFavorite(json))
  return json
}

export const removeFavorite = (flipId) => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  await fetch(`/api/favorites/${flipId}/delete/`, {
      method: "POST"
  })
  dispatch(deleteFavorite(flipId))
  return "Deleted"
}

export const resetFavorites = () => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }

  dispatch(resetFavorite())
  return "Reset"
}


const initialState = {}


// NOTE: Favorites are stored with the key being the ID of the flip they are
// associated with. This makes telling if we have a favorite very easy since,
// each user has at most 1 favorite on each flip. 

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
      delete newState[action.payload]
      return newState
    case RESET:
        newState = {}
        return newState
    default:
      return state;
  }
};

export default favoritesReducer;
