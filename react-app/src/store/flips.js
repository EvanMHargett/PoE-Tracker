const GET_ALL_FLIPS = 'flips/all'


const fetchFlips = (flips) =>{
    return {
        type: GET_ALL_FLIPS,
        payload: flips,
    }
}

export const getAllFlips = () => async (dispatch) => {
//   const sampleData = {id: 1, profit: 1, trades: 5, cost: 99, revenue: 100 }
  const flips = await fetch('/api/flips/')
  const json = await flips.json()
  dispatch(fetchFlips(json))
  return json
}

export const updateItemData = () => async (dispatch) =>{
    const currency = await fetch("/api/items/")
    dispatch(getAllFlips())
    return currency
}

export const createFlip = (flip) => async (dispatch) =>{
    await fetch("/api/flips/", {
        method: "POST",
        body: JSON.stringify(flip)
    })
    // const json = await flip.json()
    dispatch(getAllFlips())
    return "testing"
}

export const deleteFlip = (id) => async (dispatch) =>{
    await fetch(`/api/flips/${id}/delete`)
    // const json = await flip.json()
    dispatch(getAllFlips())
    return "testing"
}

const initialState = {}

const flipsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_FLIPS:
      newState = Object.assign({}, state);
      newState = action.payload
      return newState;
    default:
      return state;
  }
};

export default flipsReducer;
