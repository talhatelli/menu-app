import { createStore } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  menuItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MENU_ITEMS":
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
