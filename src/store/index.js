import { createStore, applyMiddleware } from "redux";
import rootReducers from './reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = new createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;