import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import flipsReducer from "./flips";
import commentsReducer from "./comments";
import favoritesReducer from "./favorites";
import sessionReducer from "./session"
import searchReducer from "./search"

const rootReducer = combineReducers({
  session: sessionReducer,
  flips: flipsReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
  search: searchReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
